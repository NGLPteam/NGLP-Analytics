import {$} from "../vendor/edges2/dependencies/jquery"
import {es} from "../vendor/edges2/dependencies/es"

import {Edge, Template} from "../vendor/edges2/src/core"
import {Chart} from "../vendor/edges2/src/components/Chart";
import {htmlID, numFormat, idSelector, on, getParam, jsClasses, jsClassSelector, allClasses} from "../vendor/edges2/src/utils";
import {HorizontalMultibarRenderer} from "../vendor/edges2/src/renderers/nvd3/HorizontalMultibarRenderer";
import {ChartDataTable} from "../vendor/edges2/src/renderers/bs3/ChartDataTable";
import {ImportantNumbers} from "../vendor/edges2/src/components/ImportantNumbers";
import {ImportantNumbersRenderer} from "../vendor/edges2/src/renderers/html/ImportantNumbersRenderer";
import {styleClasses} from "../vendor/edges2/src/utils";
import {StackedAreaChart} from "../vendor/edges2/src/renderers/nvd3/StackedAreaChart";

import {extractPalette} from "./nglpcommon";

global.nglp = {}
nglp.g014 = {
    active: {}
}

nglp.g014.init = function (params) {
    if (!params) { params = {} }

    var selector = params.selector || "#g014";
    var search_url = params.searchUrl

    var countFormat = numFormat({
        thousandsSeparator: ","
    });

    var stateProgression = getParam(params, "stateProgression", [
        ["submit", "Submitted"],
        ["first_decision", "First Decision"],
        ["review", "Reviewed"],
        ["accept", "Accepted"],
        ["publish", "Published"]
    ]);

    // FIXME: if there's no source we default to the test source, which is probably
    // fine but a bit weird
    let source = getParam(params, "source", "http://cottagelabs.com")

    let wfPalette = extractPalette("g014.css", "#workflowpalette");
    let wfPaletteKeys = Object.keys(wfPalette);
    wfPaletteKeys = wfPaletteKeys.sort();

    // distribute the palette cyclically over the state progressions
    for (let i = 0; i < stateProgression.length; i++) {
        let state = stateProgression[i];
        state.push(wfPalette[wfPaletteKeys[i % wfPaletteKeys.length]]);
    }

    let agePalette = extractPalette("g014.css", "#agepalette");
    let agePaletteKeys = Object.keys(agePalette);
    agePaletteKeys = agePaletteKeys.sort();
    let ageBarColours = [];
    for (let i = 0; i < agePaletteKeys.length; i++) {
        ageBarColours.push(agePalette[agePaletteKeys[i]]);
    }

    // Current workflow load
    let currentComponents = [];

    for (let i = 0; i < stateProgression.length; i++) {
        currentComponents.push(
            new ImportantNumbers({
                id: "g014-total-" + stateProgression[i][0],
                calculate: function(state) {
                    return function(component) {
                        let agg = component.edge.result.aggregation("states");
                        for (let i = 0; i < agg.buckets.length; i++) {
                            let bucket = agg.buckets[i];
                            if (bucket.key === state) {
                                return {main: bucket.doc_count, second: false}
                            }
                        }
                        return {main: 0, second: false};
                    }
                }(stateProgression[i][0]),
                renderer: new ImportantNumbersRenderer({
                    mainNumberFormat: countFormat
                })
            })
        )
    }

    let transitionComponents = [];
    for (let i = 0; i < stateProgression.length - 1; i++) {
        transitionComponents.push(
            new ImportantNumbers({
                id: "g014-mean-" + stateProgression[i][0],
                calculate: function(state) {
                    let secondsPerDay = 60 * 60 * 24;
                    return function(component) {
                        let agg = component.edge.secondaryResults["transitions"].aggregation("states");
                        for (let i = 0; i < agg.buckets.length; i++) {
                            let bucket = agg.buckets[i];
                            if (bucket.key === state) {
                                return {main: Math.ceil(bucket.time.avg / secondsPerDay), second: false}
                            }
                        }
                        return {main: 0, second: false};
                    }
                }(stateProgression[i][0]),
                renderer: new ImportantNumbersRenderer({
                    mainNumberFormat : function(num) {
                        return countFormat(num) + " days";
                    }
                })
            })
        )
    }

    // Note: I've moved this out to a separate function, because the parcel compiler
    // was having trouble with it inline (for reasons unknown https://github.com/parcel-bundler/parcel/issues/7252 )
    let ageComponents = getAgeComponents(stateProgression, countFormat, ageBarColours);

    // workflow capacity
    let yearmillis = 1000*60*60*24*365;
    let ranges = rangeGenerator({
        start: new Date((new Date()).getTime() - yearmillis),
        end: new Date(),
        count: 12
    })
    let filters = {};
    for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i];
        filters[range.start_millis.toString()] = {
            "bool" : {
                "must" : [
                    {"range" : {"occurred_at" : {"lte" : range.end}}},
                    {"range" : {"workflow.followed_by.date" : {"gte" : range.start}}}
                ]
            }
        }
    }

    let workflowComponents = [
        new Chart({
            id: "g014-workflow-capacity-chart",
            dataFunction: workflowCapacityDataFunction,
            renderer: new StackedAreaChart({
                xTickFormat: function(d) {
                    return d3.time.format('%B %Y')(new Date(d))
                },
                controls: false,
                showLegend: false,
                color: function(d, i) {
                    for (let j = 0; j < stateProgression.length; j++) {
                        let state = stateProgression[j];
                        if (state[0] === d.key) {
                            return state[2];
                        }
                    }
                }
            })
        }),
        new Chart({
            id: "g014-workflow-capacity-table",
            dataFunction: workflowCapacityDataFunction,
            renderer: new ChartDataTable({
                labelFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                valueFormat: countFormat,
                headerFormat: function(d) {
                    for (let i = 0; i < stateProgression.length; i++) {
                        let state = stateProgression[i];
                        if (state[0] === d) {
                            return state[1];
                        }
                    }
                    return d;
                }
            })
        })
    ]

    let baseQueryMusts = [
        new es.TermsFilter({field: "source.identifier.exact", values: [source]})
    ]
    if (params.containers) {
       baseQueryMusts.push(
           new es.TermsFilter({field: "container.exact", values: params.containers})
       )
    }

    nglp.g014.active[selector] = new Edge({
        selector: selector,
        template: new nglp.g014.G014Template({stateProgression: stateProgression, containers: params.containers}),
        searchUrl: search_url,
        manageUrl : false,
        baseQuery: new es.Query({
            must : baseQueryMusts
        }),
        openingQuery: new es.Query({
            must : [
                new es.TermsFilter({field: "category.exact", values: ["workflow"]}),
                new es.TermsFilter({field: "object_type.exact", values: ["article"]}),
            ],
            mustNot : [
                new es.ExistsFilter({field: "workflow.followed_by.state"})
            ],
            size: 0,
            aggs: [
                new es.TermsAggregation({
                    name: "states",
                    field: "event.exact",
                    size: stateProgression.length,
                    aggs: [
                        new es.DateHistogramAggregation({
                            name: "age",
                            field: "occurred_at"
                        }),
                        new es.FiltersAggregation({
                            name: "time",
                            filters: filters
                        })
                    ]
                })
            ]
        }),
        secondaryQueries: {
            // FIXME: we should add a date constraint to this, so we only look at data from a sensible
            // period
            "transitions" : function(edge) {
                return new es.Query({
                    must: [
                        new es.TermsFilter({field: "category.exact", values: ["workflow"]}),
                        new es.TermsFilter({field: "object_type.exact", values: ["article"]}),
                        new es.ExistsFilter({field: "workflow.follows.state"}),
                    ],
                    size: 0,
                    aggs: [
                        new es.TermsAggregation({
                            name: "states",
                            field: "workflow.follows.state.exact",
                            size: stateProgression.length,
                            aggs: [
                                new es.StatsAggregation({
                                    name: "time",
                                    field: "workflow.follows.transition_time"
                                })
                            ]
                        })
                    ]
                })
            },
            "capacity" : function(edge) {
                return new es.Query({
                    must : [
                        new es.TermsFilter({field: "category.exact", values: ["workflow"]}),
                        new es.TermsFilter({field: "object_type.exact", values: ["article"]}),
                        new es.RangeFilter({field : "occurred_at", gte: "2020-07-01", lte: "2021-07-01"})    // FIXME: these will need to be wired up to a date selector
                    ],
                    size: 0,
                    aggs: [
                        new es.TermsAggregation({
                            name: "states",
                            field: "event.exact",
                            size: stateProgression.length,
                            aggs: [
                                new es.FiltersAggregation({
                                    name: "time",
                                    filters: filters
                                })
                            ]
                        })
                    ]
                })
            }
        },
        components : currentComponents.concat(transitionComponents).concat(ageComponents).concat(workflowComponents)
    })
}

nglp.g014.G014Template = class extends Template {
    constructor(params) {
        super();
        this.edge = false;
        this.showingAge = "chart";
        this.showingCapacity = "chart";
        this.namespace = "g014-template";

        this.stateProgression = getParam(params, "stateProgression", []);
        this.containers = getParam(params, "containers", false);
    }

    draw(edge) {
        this.edge = edge;
        let ageId = htmlID(this.namespace, "age-show-as-table");
        let capacityId = htmlID(this.namespace, "capacity-show-as-table");
        let capacityLegendId = htmlID(this.namespace, "capacity-legend--container")
        let printId = htmlID(this.namespace, "print");
        let tableClasses = styleClasses(this.namespace, "stats");
        let ageChartClasses = allClasses(this.namespace, "age-chart");
        let ageTableClasses = jsClasses(this.namespace, "age-table");
        let legendClasses = allClasses(this.namespace, "legend");
        let legendBoxClasses = styleClasses(this.namespace, "legend-box");
        let showAsTableClasses = styleClasses(this.namespace, "sat");

        let tableRows = "";
        for (let i = 0; i < this.stateProgression.length; i++) {
            let state = this.stateProgression[i];
            tableRows += `
                <tr>
                    <td>${state[1]}</td>
                    <td id="g014-total-${state[0]}"></td>
                    <td id="g014-mean-${state[0]}"></td>
                    <td>
                        <div id="g014-age-chart-${state[0]}" class="${ageChartClasses}"></div>
                        <div id="g014-age-table-${state[0]}" class="${ageTableClasses}" style="display:none"></div>
                    </td>
                </tr>
            `;
        }

        let capacityChartLegend = "";
        for (let i = 0; i < this.stateProgression.length; i++) {
            let state = this.stateProgression[i];
            capacityChartLegend += `
                <div class="${legendClasses}">
                    <div class="${legendBoxClasses}"><span style="color: ${state[2]};">&#9632;</span><span class="${legendBoxClasses}-label">${state[1]}</span></div>
                </div>
            `
        }

        let containersFrag = "";
        if (this.containers) {
            containersFrag = `<h3>Showing data for ${this.containers.join(", ")}</h3>`;
        }

        let frame = `
<div id="divToPrint">
    <div class="header header--main">
        <div class="container">   
            <div class="row">
                <div class="col-md-12">
                    <h1>G014: Progress of articles through the editorial workflow</h1>
                    ${containersFrag}
                </div>
            </div>
        </div>
    </div>
    <div class="header header--secondary">
        <div class="container">
            <nav class="navbar">
                <div class="navbar navbar-default">
                    <ul class="nav navbar-nav">
                        <!-- <li>
                            <a class="nav-link" href="#">Go back to Dashboard</a>
                        </li>
                        <li>
                            <a class="nav-link" id="${printId}" href="#">Print this view</a>
                        </li> -->
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <div class="container">
        <div class="row report-area justify-content-between">
            <div class="col-md-12">
                <div>
                    <h3 class="data-label">Statistics per workflow state</h3>
                    <table class="${tableClasses} data-area">
                        <thead>
                            <tr>
                                <td></td>
                                <td>In Total Today</td>
                                <td>Mean Time to Progress</td>
                                <td>
                                    Age of Items<br/>
                                    <input type="checkbox" name="${ageId}" id="${ageId}" class="css-checkbox brand"><label class="css-label brand" for="${ageId}">Show as table</label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 class="data-label">Workflow Capacity</h3>
                    <div class="row">
                        <div class="col-md-12">
                            <input type="checkbox" name="${capacityId}" id="${capacityId}" class="css-checkbox brand"><label class="css-label brand" for="${capacityId}">Show as table</label>
                        </div>
                    </div>
                    <div class="row" class="${showAsTableClasses}" id="g014-workflow-capacity-chart--container">
                        <div class="col-md-2">
                            <div id="${capacityLegendId}">
                                ${capacityChartLegend}
                            </div>  
                        </div>
                        <div class="col-md-10">
                            <div class="data-area" id="g014-workflow-capacity-chart"></div>
                        </div>
                    </div>
                    <div class="row" id="g014-workflow-capacity-table--container" style="display: none">
                        <div class="col-md-12">
                            <div class="data-area" id="g014-workflow-capacity-table"></div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</div>`;

        edge.context.html(frame);

        let ageSelector = idSelector(this.namespace, "age-show-as-table");
        on(ageSelector, "change", this, "toggleAgeTables");

        let capacitySelector = idSelector(this.namespace, "capacity-show-as-table");
        on(capacitySelector, "change", this, "toggleCapacityTable");

        let printBtn = idSelector(this.namespace, "print");
        $(printBtn).on("click", (e) => {
            e.preventDefault();
            // window.print();
            var win = window.open('','','left=0,top=0,toolbar=0,status =0');

            var content = "<html>";
            content += `
            <head>
                <link rel="stylesheet" href="../sass/g001.scss" />
                <link rel="stylesheet" href="../vendor/edges2/vendor/nvd3-1.8.6/nv.d3.css" />
            </head>`
            content += "<body onload=\"window.print(); window.close();\">";
            content += document.getElementById("divToPrint").innerHTML ;
            content += "</body>";
            content += "</html>";
            win.document.write(content);
            win.document.close();
        });
    }

    toggleCapacityTable() {
        let legendSelector = jsClassSelector(this.namespace, "legend");

        let chart = this.edge.jq("#g014-workflow-capacity-chart--container");
        let table = this.edge.jq("#g014-workflow-capacity-table--container");
        let legend = this.edge.jq(legendSelector);

        if (this.showingCapacity === "chart") {
            chart.hide();
            table.show();
            this.showingCapacity = "table"
        } else {
            table.hide();
            chart.show();
            this.showingCapacity = "chart"
        }
    }

    toggleAgeTables() {
        let chartSelector = jsClassSelector(this.namespace, "age-chart");
        let tableSelector = jsClassSelector(this.namespace, "age-table");
        let charts = this.edge.jq(chartSelector);
        let tables = this.edge.jq(tableSelector);
        if (this.showingAge === "chart") {
            charts.hide();
            tables.show();
            this.showingAge = "table";
        } else {
            tables.hide();
            charts.show();
            this.showingAge = "chart";
        }
    }
}

function stateDataFunction(state) {
    let ageRanges = ["<1 m", "1-2 m", "2-3 m", "3-4 m", "4-5 m", ">5 m"]
    return function (component) {
        let histogram = false;
        let states = component.edge.result.aggregation("states");
        let values = [];
        let longTail = 0;

        for (let i = 0; i < states.buckets.length; i++) {
            let bucket = states.buckets[i];
            if (bucket.key === state) {
                histogram = bucket.age
                break;
            }
        }

        if (histogram) {
            for (let i = 0; i < histogram.buckets.length; i++) {
                let bucket = histogram.buckets[i];
                if (i < ageRanges.length - 1) {
                    values.push({label: ageRanges[i], value: bucket.doc_count});
                } else {
                    longTail += bucket.doc_count;
                }
            }
        } else {
            for (let k = 0; k < ageRanges.length - 1; k++) {
                values.push({label: ageRanges[k], value: 0});
            }
        }

        values.push({label: ageRanges[ageRanges.length - 1], value: longTail});

        return [{key: state, values: values}]
    }
}

function getAgeComponents(stateProgression, countFormat, ageBarColours) {
    // Age distribution
    let ageComponents = [];
    for (let j = 0; j < stateProgression.length; j++) {
        ageComponents.push(
            new Chart({
                id: "g014-age-chart-" + stateProgression[j][0],
                dataFunction: stateDataFunction(stateProgression[j][0]),
                renderer: new HorizontalMultibarRenderer({
                    legend: false,
                    controls: false,
                    valueFormat: countFormat,
                    marginLeft: 80,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 0,
                    barColor: ageBarColours
                    // barColor: [stateProgression[j][2]]
                })
            })
        );
        ageComponents.push(
            new Chart({
                id: "g014-age-table-" + stateProgression[j][0],
                dataFunction: stateDataFunction(stateProgression[j][0]),
                renderer: new ChartDataTable({
                    valueFormat: countFormat,
                    includeHeaderRow: false
                })
            })
        )
    }
    return ageComponents;
}

function rangeGenerator(params) {
    let start = params.start;
    let end = params.end;
    let count = params.count;

    let sms = start.getTime();
    let ems = end.getTime();
    let bucketSize = Math.round((ems - sms) / count)

    let ranges = [];
    for (let i = 0; i < count; i++) {
        let bstart = sms + (i * bucketSize);
        let bend = bstart + bucketSize;
        ranges.push({
            start_millis: bstart,
            end_millis: bend,
            start: isoDateStr(new Date(bstart)),
            end: isoDateStr(new Date(bend))
        });
    }

    return ranges;
}

function isoDateStr(date) {
    let padder = numFormat({zeroPadding: 2});

    let y = date.getUTCFullYear();
    let m = date.getUTCMonth();
    let d = date.getUTCDate();
    let H = date.getUTCHours();
    let M = date.getUTCMinutes();
    let S = date.getUTCSeconds();

    m = padder(m + 1)
    d = padder(d);
    H = padder(H);
    M = padder(M);
    S = padder(S);

    return y + "-" + m + "-" + d + "T" + H + ":" + M + ":" + S + "Z";
}

function workflowCapacityDataFunction(component) {
    let dataset = [];
    let states = component.edge.secondaryResults["capacity"].aggregation("states");
    for (let i = 0; i < states.buckets.length; i++) {
        let bucket = states.buckets[i];
        let keys = Object.keys(bucket.time.buckets);
        keys.sort()
        let values = []
        for (let j = 0; j < keys.length; j++) {
            let cap = bucket.time.buckets[keys[j]];
            let pair = {label: parseInt(keys[j]), value: cap.doc_count}
            values.push(pair);
        }
        let series = {key: bucket.key, values: values};
        dataset.push(series);
    }
    return dataset;
}

export default nglp;