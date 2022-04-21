import {$} from "../vendor/edges2/dependencies/jquery"
import {es} from "../vendor/edges2/dependencies/es"
import {moment} from "../vendor/edges2/dependencies/moment";    // FIXME: note that we want to replace moment with something newer, just using it for now as it's here and a requirement anyway

import {Edge, Template} from "../vendor/edges2/src/core"
import {Chart, termSplitDateHistogram, nestedTerms} from "../vendor/edges2/src/components/Chart";
import {MultibarRenderer} from "../vendor/edges2/src/renderers/nvd3/MultibarRenderer";
import {htmlID, numFormat, idSelector, on, getParam} from "../vendor/edges2/src/utils";
import {GeohashedZoomableMap} from "../vendor/edges2/src/components/GeohashedZoomableMap";
import {GoogleMapView} from "../vendor/edges2/src/renderers/googlemap/GoogleMapView";
import {ORTermSelector} from "../vendor/edges2/src/components/ORTermSelector";
import {UpdatingORTermSelector} from "../vendor/edges2/src/components/UpdatingORTermSelector";
import {CheckboxORTermSelector} from "../vendor/edges2/src/renderers/bs3/CheckboxORTermSelector";
import {FixedSelectionCheckboxORTermSelector} from "../vendor/edges2/src/renderers/bs3/FixedSelectionCheckboxORTermSelector";
import {HorizontalMultibarRenderer} from "../vendor/edges2/src/renderers/nvd3/HorizontalMultibarRenderer";
import {ChartDataTable} from "../vendor/edges2/src/renderers/bs3/ChartDataTable";

import {extractPalette} from "./nglpcommon";
import {RelativeSizeBars} from "../vendor/edges2/src/renderers/html/RelativeSizeBars";
import {MultiDateRangeEntry} from "../vendor/edges2/src/components/MultiDateRangeEntry";
import {MultiDateRangeCombineSelector} from "../vendor/edges2/src/renderers/bs3/MultiDateRangeCombineSelector";

global.nglp = {}
nglp.g001 = {
    active: {}
}

nglp.g001.init = function (params) {
    if (!params) { params = {} }

    var selector = params.selector || "#g001";
    var search_url = params.searchUrl

    var countFormat = numFormat({
        thousandsSeparator: ","
    });

    let palette = extractPalette("g001.css");

    let interactionValueMap = {
        "investigation" : "VIEWS",
        "export" : "EXPORTS",
        "request" : "DOWNLOADS"
    }

    // this is the reverse of the above, which is required to map the palette onto the
    let valueInteractionMap = {
        "VIEWS" : "investigation",
        "EXPORTS" : "export",
        "DOWNLOADS" : "request"
    }

    let presentationOrder = [
        "investigation",
        "export",
        "request"
    ];

    let initialDateRange = getInitialDateRange();

    let baseQuery = false;
    if (params.containers) {
        baseQuery = new es.Query({
            must: [
                new es.TermsFilter({field: "container.exact", values: params.containers})
            ]
        })
    }

    nglp.g001.active[selector] = new Edge({
        selector: selector,
        template: new nglp.g001.G001Template({containers: params.containers}),
        searchUrl: search_url,
        manageUrl : false,
        baseQuery: baseQuery,
        openingQuery: new es.Query({
            must : [
                new es.TermsFilter({field: "event.exact", values: ["request", "investigation", "export"]}),
                new es.TermsFilter({field: "object_type.exact", values: ["article", "file"]}),
                new es.RangeFilter({field : "occurred_at", gte: initialDateRange.gte, lte: initialDateRange.lte}),
                new es.GeoBoundingBoxFilter({
                    field: "location",
                    top_left: {
                        "lat": 90,
                        "lon": -180
                    },
                    bottom_right: {
                        "lat": -90,
                        "lon": 180
                    }
                })
            ],
            size: 0,
            aggs: [
                new es.DateHistogramAggregation({
                    name: "occurred_at",
                    field: "occurred_at",
                    interval: "1M",
                    aggs: [
                        new es.TermsAggregation({
                            name: "events",
                            field: "event.exact"
                        })
                    ]
                }),
                new es.GeohashGridAggregation({
                    name: "geo",
                    field: "location",
                    precision: 5    // NOTE: this needs to tie up with the zoomToPrecisionMap in the component
                }),
                new es.TermsAggregation({
                    name: "events",
                    field: "event.exact",
                    aggs: [
                        new es.TermsAggregation({
                            name: "formats",
                            field: "format.exact",
                            size: 3
                        })
                    ]
                })
            ]
        }),
        components : [
            new MultiDateRangeEntry({
                id : "g001-date-range",
                fields : [
                    {field : "occurred_at", display: "Event Date"}
                ],
                autoLookupRange: true,
                forceLatest: true,
                defaultLatest: new Date(),
                renderer : new MultiDateRangeCombineSelector({
                    ranges: {
                        'Last Year' : [moment().subtract(1, "year"), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()]
                    }
                })
            }),
            new Chart({
                id: "g001-interactions-chart",
                dataFunction: termSplitDateHistogram({
                    histogramAgg: "occurred_at",
                    termsAgg: "events",
                    seriesNameMap: interactionValueMap
                }),
                rectangulate: true,
                seriesSort: function(values) {
                    return values.sort(function(a, b) {
                        if (a.label < b.label) {
                            return -1
                        }
                        if (a.label > b.label) {
                            return 1
                        }
                        return 0;
                    })
                },
                renderer : new MultibarRenderer({
                    xTickFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                    color: function(d, i) {
                        return palette[valueInteractionMap[d.key]]
                    },
                    yTickFormat : ",.0f",
                    showLegend: false,
                    xAxisLabel: "Occurred At",
                    yAxisLabel: "Article Interactions",
                    marginLeft: 80,
                    stacked: true,
                    groupSpacing: 0.7
                })
            }),
            new Chart({
                id: "g001-interactions-table",
                dataFunction: termSplitDateHistogram({
                    histogramAgg: "occurred_at",
                    termsAgg: "events"
                }),
                rectangulate: true,
                seriesSort: function(values) {
                    return values.sort(function(a, b) {
                        if (a.label < b.label) {
                            return -1
                        }
                        if (a.label > b.label) {
                            return 1
                        }
                        return 0;
                    })
                },
                renderer : new ChartDataTable({
                    labelFormat: function(d) { return d3.time.format('%b %y')(new Date(d))},
                    valueFormat: countFormat,
                    headerFormat: function(d) {
                        return interactionValueMap[d] || d;
                    },
                    seriesOrderFunction: function(dataSeries) {
                        let ordered = []
                        for (let j = 0; j < presentationOrder.length; j++) {
                            for (let i = 0; i < dataSeries.length; i++) {
                                let series = dataSeries[i];
                                if (series.key === presentationOrder[j]) {
                                    ordered.push(series);
                                }
                            }
                        }
                        return ordered;
                    }
                })
            }),
            new GeohashedZoomableMap({
                id: "g001-interactions-map",
                geoHashAggregation: "geo",
                zoomToPrecisionMap : {
                    0: 5,
                    3: 7,
                    5: 9
                },
                renderer: new GoogleMapView({
                    cluster: true,
                    labelFunction : (loc) => {
                        // be very careful changing this, the MapPointRenderer relies on this as the way
                        // to find out what the count of the nested cluster is
                        return loc.count.toString()
                    },
                    renderCluster : new MapPointRenderer(),
                    reQueryOnBoundsChange: true,
                    clusterIcons: {
                        0: "/static/img/m1.png"
                        // 2: "/static/img/m2.png",
                        // 20: "/static/img/m3.png",
                        // 50: "/static/img/m4.png",
                        // 100: "/static/img/m5.png"
                    }
                })
            }),
            new UpdatingORTermSelector({
                id: "g001-interactions",
                field: "event.exact",
                updateType: "fresh",
                orderBy: "term",
                orderDir: "asc",
                valueMap: interactionValueMap,
                renderer: new FixedSelectionCheckboxORTermSelector({
                    title: "Interactions",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat,
                    fixedTerms : presentationOrder

                })
            }),
            new UpdatingORTermSelector({
                id: "g001-format",
                field: "format.exact",
                updateType: "fresh",
                orderBy: "count",
                orderDir: "desc",
                valueFunction : (v) => {
                    return v.toUpperCase();
                },
                renderer: new CheckboxORTermSelector({
                    title: "Format",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat
                })
            }),
            new Chart({
                id: "g001-top-downloads",
                dataFunction: nestedTerms({
                    aggs: [
                        {events: {keys : ["request"], aggs: ["formats"]}}
                    ],
                    seriesName: "request"
                }),
                renderer: new RelativeSizeBars({
                    title: "Downloads",
                    countFormat: countFormat
                })
            }),
            new Chart({
                id: "g001-top-exports",
                dataFunction: nestedTerms({
                    aggs: [
                        {events: {keys : ["export"], aggs: ["formats"]}}
                    ],
                    seriesName: "export"
                }),
                renderer: new RelativeSizeBars({
                    title: "Exports",
                    countFormat: countFormat
                })
            })
        ]
    })
}

nglp.g001.G001Template = class extends Template {
    constructor(params) {
        super();

        this.containers = params.containers;

        this.edge = false;
        this.showing = "chart";
        this.hidden = {};
        this.namespace = "g001-template";
    }

    draw(edge) {
        this.edge = edge;
        let checkboxId = htmlID(this.namespace, "show-as-table");
        let printId = htmlID(this.namespace, "print");

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
                    <h1>G001: Article  Downloads for  Unit Administrators</h1>
                    <h2>Article downloads by format, including landing page and metadata exports in aggregate</h2>
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
                        </li>-->
                    </ul>
                    <form class="navbar-form navbar-right">
                        <div class="form-group" id="g001-date-range"></div>
                    </form>
                </div>
            </nav>
        </div>
    </div>
    
    <div class="container">
            <div class="row report-area justify-content-between">
                <div class="col-md-3">
                    <div class="facet" id="g001-interactions"></div>
                    <div class="facet facet-format" id="g001-format"></div>
                </div>
                <div class="col-md-9">
                    <p class="showtable"><input type="checkbox" name="${checkboxId}" id="${checkboxId}" class="css-checkbox brand"><label class="css-label brand" for="${checkboxId}" id="${checkboxId}_label">Show as table</label></p>
                    <div class="data-area" id="g001-interactions-chart"></div>
                    <div class="data-area" id="g001-interactions-table" style="display:none">TABLE HERE</div>
                    <div class="data-area" id="g001-interactions-map"></div>
                    <div class="data-area" class="row formats-header">
                        <h3 class="data-label">Top 3 Formats</h3>
                        <div class="row">
                            <div class="col-md-4">
                                <div id="g001-top-downloads"></div>
                            </div>
                            <div class="col-md-4 offset-md-1">
                                <div id="g001-top-exports"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>`;

        edge.context.html(frame);

        let checkboxSelector = idSelector(this.namespace, "show-as-table");
        on(checkboxSelector, "change", this, "toggleTable");
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

    toggleTable() {
        let chart = this.edge.jq("#g001-interactions-chart");
        let table = this.edge.jq("#g001-interactions-table");
        if (this.showing === "chart") {
            chart.hide();
            table.show();
            this.showing = "table"
        } else {
            table.hide();
            chart.show();
            this.showing = "chart"
            this.edge.getComponent({id: "g001-interactions-chart"}).draw();
        }
    }
}

class MapPointRenderer {
    constructor(params) {}

    render(cluster, stats) {
        let sum = 0;
        for (let i = 0; i < cluster.markers.length; i++) {
            let marker = cluster.markers[i];
            sum += parseInt(marker.label.text);
        }
        return new google.maps.Marker({
            position: cluster.position,
            icon: "/static/img/m1.png",
            label: {
                text: String(sum)
            },
            // adjust zIndex to be above other markers
            //zIndex: Number(google.maps.Marker.MAX_ZINDEX) + sum,
        });
    }
}

function getInitialDateRange() {
    let now = moment();
    let lte = now.format("YYYY-MM-DD");
    let gte = now.subtract(1, "years").format("YYYY-MM-DD");
    return {gte: gte, lte: lte}
}

export default nglp;