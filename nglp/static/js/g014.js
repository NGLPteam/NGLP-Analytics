(function () {
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $f483f7288df68fd0$export$9099ad97b570f7c(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

function $10cfaf3f2f812eb4$export$9099ad97b570f7c(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function $67866ae5f3a26802$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $67866ae5f3a26802$export$9099ad97b570f7c(Constructor, protoProps, staticProps) {
    if (protoProps) $67866ae5f3a26802$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $67866ae5f3a26802$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

function $9b036347ace9941e$export$9099ad97b570f7c(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

function $da23c25529bb1df4$var$getPrototypeOf(o) {
    $da23c25529bb1df4$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return $da23c25529bb1df4$var$getPrototypeOf(o);
}
function $da23c25529bb1df4$export$9099ad97b570f7c(o) {
    return $da23c25529bb1df4$var$getPrototypeOf(o);
}


function $295bc66aeaa93a59$export$9099ad97b570f7c(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $da23c25529bb1df4$export$9099ad97b570f7c(object);
        if (object === null) break;
    }
    return object;
}


function $17c4d4a7c863d924$var$get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) $17c4d4a7c863d924$var$get = Reflect.get;
    else $17c4d4a7c863d924$var$get = function get(target1, property1, receiver1) {
        var base = $295bc66aeaa93a59$export$9099ad97b570f7c(target1, property1);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property1);
        if (desc.get) return desc.get.call(receiver1 || target1);
        return desc.value;
    };
    return $17c4d4a7c863d924$var$get(target, property, receiver);
}
function $17c4d4a7c863d924$export$9099ad97b570f7c(target, property, reciever) {
    return $17c4d4a7c863d924$var$get(target, property, reciever);
}

function $d2fa334d58492cc2$var$setPrototypeOf(o, p) {
    $d2fa334d58492cc2$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return $d2fa334d58492cc2$var$setPrototypeOf(o, p);
}
function $d2fa334d58492cc2$export$9099ad97b570f7c(o, p) {
    return $d2fa334d58492cc2$var$setPrototypeOf(o, p);
}


function $bca7673885229bfd$export$9099ad97b570f7c(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $d2fa334d58492cc2$export$9099ad97b570f7c(subClass, superClass);
}


function $26bfa0c7921eea07$export$9099ad97b570f7c(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}


function $6981eb4a4ce0a3e0$export$9099ad97b570f7c(self, call) {
    if (call && ($26bfa0c7921eea07$export$9099ad97b570f7c(call) === "object" || typeof call === "function")) return call;
    return $f483f7288df68fd0$export$9099ad97b570f7c(self);
}

function $5dd06483043aa0c9$export$9099ad97b570f7c(arr) {
    if (Array.isArray(arr)) return arr;
}


function $f953e420d03d510c$export$9099ad97b570f7c(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}


function $76c445b1cd8e0a95$export$9099ad97b570f7c() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}


function $d1ea3085410a42e5$export$9099ad97b570f7c(arr, i) {
    return $5dd06483043aa0c9$export$9099ad97b570f7c(arr) || $f953e420d03d510c$export$9099ad97b570f7c(arr, i) || $76c445b1cd8e0a95$export$9099ad97b570f7c();
}

function $126bb3c74c493c98$export$9099ad97b570f7c(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}



function $63b64529301afb9b$export$9099ad97b570f7c() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}


function $0862162e48b32d5b$export$9099ad97b570f7c(arr) {
    return $126bb3c74c493c98$export$9099ad97b570f7c(arr) || $f953e420d03d510c$export$9099ad97b570f7c(arr) || $63b64529301afb9b$export$9099ad97b570f7c();
}



var $99b6183ba65dae12$export$4048ae5fe51d81b7 = window.$;




var $8d94b5f2509b6cf5$var$Aggregation = /*#__PURE__*/ function() {
    "use strict";
    function $8d94b5f2509b6cf5$var$Aggregation(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $8d94b5f2509b6cf5$var$Aggregation);
        this.name = params.name;
        this.aggs = params.aggs || [];
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($8d94b5f2509b6cf5$var$Aggregation, [
        {
            key: "addAggregation",
            value: function addAggregation(agg) {
                for(var i = 0; i < this.aggs.length; i++){
                    if (this.aggs[i].name === agg.name) return;
                }
                this.aggs.push(agg);
            }
        },
        {
            key: "removeAggregation",
            value: function removeAggregation() {
            }
        },
        {
            key: "clearAggregations",
            value: function clearAggregations() {
            }
        },
        {
            // for use by sub-classes, for their convenience in rendering
            // the overall structure of the aggregation to an object
            key: "_make_aggregation",
            value: function _make_aggregation(type, body) {
                var obj = {
                };
                obj[this.name] = {
                };
                obj[this.name][type] = body;
                if (this.aggs.length > 0) {
                    obj[this.name]["aggs"] = {
                    };
                    for(var i = 0; i < this.aggs.length; i++)$99b6183ba65dae12$export$4048ae5fe51d81b7.extend(obj[this.name]["aggs"], this.aggs[i].objectify());
                }
                return obj;
            }
        },
        {
            key: "_parse_wrapper",
            value: function _parse_wrapper(obj, type) {
                this.name = Object.keys(obj)[0];
                var body = obj[this.name][type];
                var aggs = obj[this.name].aggs ? obj[this.name].aggs : obj[this.name].aggregations;
                if (aggs) {
                    var anames = Object.keys(aggs);
                    for(var i = 0; i < anames.length; i++){
                        var name = anames[i];
                        var agg = aggs[anames[i]];
                        var subtype = Object.keys(agg)[0];
                        var raw = {
                        };
                        raw[name] = agg;
                        var oa = $8d94b5f2509b6cf5$export$8b446892c82de644.aggregationFactory(subtype, {
                            raw: raw
                        });
                        if (oa) this.addAggregation(oa);
                    }
                }
                return body;
            }
        }
    ]);
    return $8d94b5f2509b6cf5$var$Aggregation;
}();
$9b036347ace9941e$export$9099ad97b570f7c($8d94b5f2509b6cf5$var$Aggregation, "type", "aggregation");
var $8d94b5f2509b6cf5$var$Filter = /*#__PURE__*/ function() {
    "use strict";
    function $8d94b5f2509b6cf5$var$Filter(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $8d94b5f2509b6cf5$var$Filter);
        this.field = params.field;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($8d94b5f2509b6cf5$var$Filter, [
        {
            key: "matches",
            value: function matches(other) {
                return this._baseMatch(other);
            }
        },
        {
            key: "_baseMatch",
            value: function _baseMatch(other) {
                // type must match
                if (other.type !== this.type) return false;
                // field (if set) must match
                if (other.field && other.field !== this.field) return false;
                // otherwise this matches
                return true;
            }
        },
        {
            key: "objectify",
            value: function objectify() {
            }
        },
        {
            key: "parse",
            value: function parse() {
            }
        }
    ]);
    return $8d94b5f2509b6cf5$var$Filter;
}();
$9b036347ace9941e$export$9099ad97b570f7c($8d94b5f2509b6cf5$var$Filter, "type", "filter");
function $8d94b5f2509b6cf5$var$_classExtends(clazz, ref) {
    if (clazz.__proto__ === null) return false;
    if (clazz.__proto__ === ref) return true;
    else return $8d94b5f2509b6cf5$var$_classExtends(clazz.__proto__, ref);
}
/** @namespace */ var $8d94b5f2509b6cf5$export$8b446892c82de644 = {
    /////////////////////////////////////////////////////
    // fixed properties, like special characters, etc
    // The reserved characters in elasticsearch query strings
    // Note that the "\" has to go first, as when these are substituted, that character
    // will get introduced as an escape character
    specialChars: [
        "\\",
        "+",
        "-",
        "=",
        "&&",
        "||",
        ">",
        "<",
        "!",
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "^",
        '"',
        "~",
        "*",
        "?",
        ":",
        "/"
    ],
    // FIXME: specialChars is not currently used for encoding, but it would be worthwhile giving the option
    // to allow/disallow specific values, but that requires a much better (automated) understanding of the
    // query DSL
    // the reserved special character set with * and " removed, so that users can do quote searches and wildcards
    // if they want
    specialCharsSubSet: [
        "\\",
        "+",
        "-",
        "=",
        "&&",
        "||",
        ">",
        "<",
        "!",
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "^",
        "~",
        "?",
        ":",
        "/"
    ],
    // values that have to be in even numbers in the query or they will be escaped
    characterPairs: [
        '"'
    ],
    // distance units allowed by ES
    distanceUnits: [
        "km",
        "mi",
        "miles",
        "in",
        "inch",
        "yd",
        "yards",
        "kilometers",
        "mm",
        "millimeters",
        "cm",
        "centimeters",
        "m",
        "meters"
    ],
    // request method to be used throughout.  Set this before using the module if you want it different
    requestMethod: "get",
    // add request headers (such as Auth) if you need to
    requestHeaders: false,
    Filter: $8d94b5f2509b6cf5$var$Filter,
    Aggregation: $8d94b5f2509b6cf5$var$Aggregation,
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    // object factories
    aggregationFactory: function aggregationFactory(type, params) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries($8d94b5f2509b6cf5$export$8b446892c82de644)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _value = $d1ea3085410a42e5$export$9099ad97b570f7c(_step.value, 2), key = _value[0], value = _value[1];
                if ($8d94b5f2509b6cf5$var$_classExtends($8d94b5f2509b6cf5$export$8b446892c82de644[key], $8d94b5f2509b6cf5$var$Aggregation)) {
                    if ($8d94b5f2509b6cf5$export$8b446892c82de644[key].type === type) return new $8d94b5f2509b6cf5$export$8b446892c82de644[key](params);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    filterFactory: function filterFactory(type, params) {
        // query string is a special case
        if (type === "query_string") return new $8d94b5f2509b6cf5$export$8b446892c82de644.QueryString(params);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            // otherwise auto-detect
            for(var _iterator = Object.entries($8d94b5f2509b6cf5$export$8b446892c82de644)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _value = $d1ea3085410a42e5$export$9099ad97b570f7c(_step.value, 2), key = _value[0], value = _value[1];
                if ($8d94b5f2509b6cf5$var$_classExtends($8d94b5f2509b6cf5$export$8b446892c82de644[key], $8d94b5f2509b6cf5$var$Filter)) {
                    if ($8d94b5f2509b6cf5$export$8b446892c82de644[key].type === type) return new $8d94b5f2509b6cf5$export$8b446892c82de644[key](params);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    ////////////////////////////////////////////////////
    /** @namespace */ /** Query objects for standard query structure */ /**
     *
     * @param filtered {Boolean} Is this an ES filtered query?
     * @param size=10 {Number} What amount of results are required. ES defaults to 10.
     * @param from {Number} Beginning point for results.
     * @param fields {String[]} Required fields.
     * @param aggs {String[]} ES aggregations.
     * @param must {String[]} ES must query.
     * @param source {String} ES source.
     * @param should {String[]} ES should.
     * @param mustNot {String[]} ES must not.
     * @param partialFields ???
     * @param scriptFields ???
     * @param minimumShouldMatch ???
     * @param facets {String[]} for older versions of ES
     */ Query: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
            if (!params) params = {
            };
            // properties that can be set directly (thought note that they may need to be read via their getters)
            this.filtered = false; // this is no longer present in es5.x+
            this.trackTotalHits = true; // FIXME: hard code this for the moment, we can introduce the ability to vary it later
            this.size = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.size, false);
            this.from = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.from, false);
            this.fields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.fields, []);
            this.aggs = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.aggs, []);
            this.must = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.must, []);
            this.mustNot = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.mustNot, []);
            this.should = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.should, []);
            this.minimumShouldMatch = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.minimumShouldMatch, false);
            // defaults from properties that will be set through their setters (see the bottom
            // of the function)
            this.queryString = false;
            this.sort = [];
            // ones that we haven't used yet, so are awaiting implementation
            // NOTE: once we implement these, they also need to be considered in merge()
            this.source = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.source, false);
            this.partialFields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.partialField, false);
            this.scriptFields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.scriptFields, false);
            this.partialFields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.partialFields, false);
            this.scriptFields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.scriptFields, false);
            // for old versions of ES, so are not necessarily going to be implemented
            this.facets = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.facets, []);
            ///////////////////////////////////////////////////////////
            // final part of construction - set the dynamic properties
            // via their setters
            if (params.queryString) this.setQueryString(params.queryString);
            if (params.sort) this.setSortBy(params.sort);
            // finally, if we're given a raw query, parse it
            if (params.raw) this.parse(params.raw);
        }
        $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
            {
                /////////////////////////////////////////////////
                // getters and setters
                key: "getSize",
                value: function getSize() {
                    if (this.size !== undefined && this.size !== false) return this.size;
                    return 10;
                }
            },
            {
                key: "getFrom",
                value: function getFrom() {
                    if (this.from) return this.from;
                    return 0;
                }
            },
            {
                key: "addField",
                value: function addField(field) {
                    if ($99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(field, this.fields) === -1) this.fields.push(field);
                }
            },
            {
                key: "setQueryString",
                value: function setQueryString(params) {
                    var qs = params;
                    if (!(params instanceof $8d94b5f2509b6cf5$export$8b446892c82de644.QueryString)) {
                        if ($99b6183ba65dae12$export$4048ae5fe51d81b7.isPlainObject(params)) qs = new $8d94b5f2509b6cf5$export$8b446892c82de644.QueryString(params);
                        else qs = new $8d94b5f2509b6cf5$export$8b446892c82de644.QueryString({
                            queryString: params
                        });
                    }
                    this.queryString = qs;
                }
            },
            {
                key: "getQueryString",
                value: function getQueryString() {
                    return this.queryString;
                }
            },
            {
                key: "removeQueryString",
                value: function removeQueryString() {
                    this.queryString = false;
                }
            },
            {
                key: "setSortBy",
                value: function setSortBy(params) {
                    // overwrite anything that was there before
                    this.sort = [];
                    // ensure we have a list of sort options
                    var sorts = params;
                    if (!$99b6183ba65dae12$export$4048ae5fe51d81b7.isArray(params)) sorts = [
                        params
                    ];
                    // add each one
                    for(var i = 0; i < sorts.length; i++)this.addSortBy(sorts[i]);
                }
            },
            {
                key: "addSortBy",
                value: function addSortBy(params) {
                    // ensure we have an instance of es.Sort
                    var sort = params;
                    if (!(params instanceof $8d94b5f2509b6cf5$export$8b446892c82de644.Sort)) sort = new $8d94b5f2509b6cf5$export$8b446892c82de644.Sort(params);
                    // prevent repeated sort options being added
                    for(var i = 0; i < this.sort.length; i++){
                        var so = this.sort[i];
                        if (so.field === sort.field) return;
                    }
                    // add the sort option
                    this.sort.push(sort);
                }
            },
            {
                key: "prependSortBy",
                value: function prependSortBy(params) {
                    // ensure we have an instance of es.Sort
                    var sort = params;
                    if (!(params instanceof $8d94b5f2509b6cf5$export$8b446892c82de644.Sort)) sort = new $8d94b5f2509b6cf5$export$8b446892c82de644.Sort(params);
                    this.removeSortBy(sort);
                    this.sort.unshift(sort);
                }
            },
            {
                key: "removeSortBy",
                value: function removeSortBy(params) {
                    // ensure we have an instance of es.Sort
                    var sort = params;
                    if (!(params instanceof $8d94b5f2509b6cf5$export$8b446892c82de644.Sort)) sort = new $8d94b5f2509b6cf5$export$8b446892c82de644.Sort(params);
                    var removes = [];
                    for(var i = 0; i < this.sort.length; i++){
                        var so = this.sort[i];
                        if (so.field === sort.field) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.sort.splice(removes[i], 1);
                }
            },
            {
                key: "getSortBy",
                value: function getSortBy() {
                    return this.sort;
                }
            },
            {
                key: "setSourceFilters",
                value: function setSourceFilters(params) {
                    if (!this.source) this.source = {
                        include: [],
                        exclude: []
                    };
                    if (params.include) this.source.include = params.include;
                    if (params.exclude) this.source.exclude = params.exclude;
                }
            },
            {
                key: "addSourceFilters",
                value: function addSourceFilters(params) {
                    if (!this.source) this.source = {
                        include: [],
                        exclude: []
                    };
                    if (params.include) {
                        if (this.source.include) Array.prototype.push.apply(this.source.include, params.include);
                        else this.source.include = params.include;
                    }
                    if (params.exclude) {
                        if (this.source.include) Array.prototype.push.apply(this.source.include, params.include);
                        else this.source.include = params.include;
                    }
                }
            },
            {
                key: "getSourceIncludes",
                value: function getSourceIncludes() {
                    if (!this.source) return [];
                    return this.source.include;
                }
            },
            {
                key: "getSourceExcludes",
                value: function getSourceExcludes() {
                    if (!this.source) return [];
                    return this.source.exclude;
                }
            },
            {
                key: "getAggregation",
                value: function getAggregation(params) {
                    var name = params.name;
                    for(var i = 0; i < this.aggs.length; i++){
                        var a = this.aggs[i];
                        if (a.name === name) return a;
                    }
                }
            },
            {
                key: "addAggregation",
                value: function addAggregation(agg, overwrite) {
                    if (overwrite) this.removeAggregation(agg.name);
                    else for(var i = 0; i < this.aggs.length; i++){
                        if (this.aggs[i].name === agg.name) return;
                    }
                    this.aggs.push(agg);
                }
            },
            {
                key: "removeAggregation",
                value: function removeAggregation(name) {
                    var removes = [];
                    for(var i = 0; i < this.aggs.length; i++)if (this.aggs[i].name === name) removes.push(i);
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.aggs.splice(removes[i], 1);
                }
            },
            {
                key: "clearAggregations",
                value: function clearAggregations() {
                    this.aggs = [];
                }
            },
            {
                key: "listAggregations",
                value: function listAggregations() {
                    return this.aggs;
                }
            },
            {
                key: "addMust",
                value: function addMust(filter) {
                    var existing = this.listMust(filter);
                    if (existing.length === 0) this.must.push(filter);
                }
            },
            {
                key: "listMust",
                value: function listMust(template) {
                    return this.listFilters({
                        boolType: "must",
                        template: template
                    });
                }
            },
            {
                key: "removeMust",
                value: function removeMust(template) {
                    var removes = [];
                    for(var i = 0; i < this.must.length; i++){
                        var m = this.must[i];
                        if (m.matches(template)) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.must.splice(removes[i], 1);
                    // return the count of filters that were removed
                    return removes.length;
                }
            },
            {
                key: "clearMust",
                value: function clearMust() {
                    this.must = [];
                }
            },
            {
                key: "addMustNot",
                value: function addMustNot(filter) {
                    var existing = this.listMustNot(filter);
                    if (existing.length === 0) this.mustNot.push(filter);
                }
            },
            {
                key: "listMustNot",
                value: function listMustNot(template) {
                    return this.listFilters({
                        boolType: "must_not",
                        template: template
                    });
                }
            },
            {
                key: "removeMustNot",
                value: function removeMustNot(template) {
                    var removes = [];
                    for(var i = 0; i < this.mustNot.length; i++){
                        var m = this.mustNot[i];
                        if (m.matches(template)) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.mustNot.splice(removes[i], 1);
                    // return the count of filters that were removed
                    return removes.length;
                }
            },
            {
                key: "clearMustNot",
                value: function clearMustNot() {
                    this.mustNot = [];
                }
            },
            {
                key: "addShould",
                value: function addShould(filter) {
                    var existing = this.listShould(filter);
                    if (existing.length === 0) this.should.push(filter);
                }
            },
            {
                key: "listShould",
                value: function listShould(template) {
                    return this.listFilters({
                        boolType: "should",
                        template: template
                    });
                }
            },
            {
                key: "removeShould",
                value: function removeShould(template) {
                    var removes = [];
                    for(var i = 0; i < this.should.length; i++){
                        var m = this.should[i];
                        if (m.matches(template)) removes.push(i);
                    }
                    removes = removes.sort().reverse();
                    for(var i = 0; i < removes.length; i++)this.should.splice(removes[i], 1);
                    // return the count of filters that were removed
                    return removes.length;
                }
            },
            {
                key: "clearShould",
                value: function clearShould() {
                    this.should = [];
                }
            },
            {
                /////////////////////////////////////////////////
                // interrogative functions
                key: "hasFilters",
                value: function hasFilters() {
                    return this.must.length > 0 || this.should.length > 0 || this.mustNot.length > 0;
                }
            },
            {
                // in general better to use the listMust, listShould, listMustNot, directly.
                // those methods each use this method internally anyway
                key: "listFilters",
                value: function listFilters(params) {
                    var boolType = params.boolType || "must";
                    var template = params.template || false;
                    //var field = params.field || false;
                    //var filterType = params.filterType || false;
                    // first get the boolean filter field that we're going to look in
                    var bool = [];
                    if (boolType === "must") bool = this.must;
                    else if (boolType === "should") bool = this.should;
                    else if (boolType === "must_not") bool = this.mustNot;
                    if (!template) return bool;
                    var l = [];
                    for(var i = 0; i < bool.length; i++){
                        var m = bool[i];
                        if (m.matches(template)) l.push(m);
                    }
                    return l;
                }
            },
            {
                ////////////////////////////////////////////////
                // create, parse, serialise functions
                key: "merge",
                value: function merge(source) {
                    // merge this query (in place) with the provided query, where the provided
                    // query is dominant (i.e. any properties it has override this object)
                    //
                    // These are the merge rules:
                    // this.filtered - take from source
                    // this.size - take from source if set
                    // this.from - take from source if set
                    // this.fields - append any new ones from source
                    // this.aggs - append any new ones from source, overwriting any with the same name
                    // this.must - append any new ones from source
                    // this.mustNot - append any new ones from source
                    // this.should - append any new ones from source
                    // this.minimumShouldMatch - take from source if set
                    // this.queryString - take from source if set
                    // this.sort - prepend any from source
                    // this.source - append any new ones from source
                    this.filtered = source.filtered;
                    if (source.size) this.size = source.size;
                    if (source.from) this.from = source.from;
                    if (source.fields && source.fields.length > 0) for(var i = 0; i < source.fields.length; i++)this.addField(source.fields[i]);
                    var aggs = source.listAggregations();
                    for(var i = 0; i < aggs.length; i++)this.addAggregation(aggs[i], true);
                    var must = source.listMust();
                    for(var i = 0; i < must.length; i++)this.addMust(must[i]);
                    var mustNot = source.listMustNot();
                    for(var i1 = 0; i1 < mustNot.length; i1++)this.addMustNot(mustNot[i1]);
                    var should = source.listShould();
                    for(var i2 = 0; i2 < should.length; i2++)this.addShould(should[i2]);
                    if (source.minimumShouldMatch !== false) this.minimumShouldMatch = source.minimumShouldMatch;
                    if (source.getQueryString()) this.setQueryString(source.getQueryString());
                    var sorts = source.getSortBy();
                    if (sorts && sorts.length > 0) {
                        sorts.reverse();
                        for(var i = 0; i < sorts.length; i++)this.prependSortBy(sorts[i]);
                    }
                    var includes = source.getSourceIncludes();
                    var excludes = source.getSourceExcludes();
                    this.addSourceFilters({
                        include: includes,
                        exclude: excludes
                    });
                }
            },
            {
                key: "objectify",
                value: function objectify(params) {
                    if (!params) params = {
                    };
                    // this allows you to specify which bits of the query get objectified
                    var include_query_string = params.include_query_string === undefined ? true : params.include_query_string;
                    var include_filters = params.include_filters === undefined ? true : params.include_filters;
                    var include_paging = params.include_paging === undefined ? true : params.include_paging;
                    var include_sort = params.include_sort === undefined ? true : params.include_sort;
                    var include_fields = params.include_fields === undefined ? true : params.include_fields;
                    var include_aggregations = params.include_aggregations === undefined ? true : params.include_aggregations;
                    var include_source_filters = params.include_source_filters === undefined ? true : params.include_source_filters;
                    // queries will be separated in queries and bool filters, which may then be
                    // combined later
                    var q = {
                    };
                    var query_part = {
                    };
                    var bool = {
                    };
                    // query string
                    if (this.queryString && include_query_string) $99b6183ba65dae12$export$4048ae5fe51d81b7.extend(query_part, this.queryString.objectify());
                    if (include_filters) {
                        // add any MUST filters
                        if (this.must.length > 0) {
                            var musts = [];
                            for(var i = 0; i < this.must.length; i++){
                                var m = this.must[i];
                                musts.push(m.objectify());
                            }
                            bool["must"] = musts;
                        }
                        // add any must_not filters
                        if (this.mustNot.length > 0) {
                            var mustNots = [];
                            for(var i = 0; i < this.mustNot.length; i++){
                                var m = this.mustNot[i];
                                mustNots.push(m.objectify());
                            }
                            bool["must_not"] = mustNots;
                        }
                        // add any should filters
                        if (this.should.length > 0) {
                            var should = [];
                            for(var i = 0; i < this.should.length; i++){
                                var m = this.should[i];
                                should.push(m.objectify());
                            }
                            bool["should"] = should;
                        }
                        if (this.minimumShouldMatch !== false) bool["minimum_should_match"] = this.minimumShouldMatch;
                    }
                    var qpl = Object.keys(query_part).length;
                    var bpl = Object.keys(bool).length;
                    var query_portion = {
                    };
                    if (qpl === 0 && bpl === 0) query_portion["match_all"] = {
                    };
                    else if (qpl === 0 && bpl > 0) query_portion["bool"] = bool;
                    else if (qpl > 0 && bpl === 0) query_portion = query_part;
                    else if (qpl > 0 && bpl > 0) {
                        query_portion["bool"] = bool;
                        query_portion["bool"]["must"].push(query_part);
                    }
                    q["query"] = query_portion;
                    if (include_paging) {
                        // page size
                        if (this.size !== undefined && this.size !== false) q["size"] = this.size;
                        // page number (from)
                        if (this.from) q["from"] = this.from;
                    }
                    // sort option
                    if (this.sort.length > 0 && include_sort) {
                        q["sort"] = [];
                        for(var i = 0; i < this.sort.length; i++)q.sort.push(this.sort[i].objectify());
                    }
                    // fields
                    if (this.fields.length > 0 && include_fields) q["stored_fields"] = this.fields;
                    // add any aggregations
                    if (this.aggs.length > 0 && include_aggregations) {
                        q["aggs"] = {
                        };
                        for(var i = 0; i < this.aggs.length; i++){
                            var agg = this.aggs[i];
                            $99b6183ba65dae12$export$4048ae5fe51d81b7.extend(q.aggs, agg.objectify());
                        }
                    }
                    // add the source filters
                    if (include_source_filters && this.source && (this.source.include || this.source.exclude)) {
                        q["_source"] = {
                        };
                        if (this.source.include.length > 0) q["_source"]["include"] = this.source.include;
                        if (this.source.exclude.length > 0) q["_source"]["exclude"] = this.source.exclude;
                    }
                    // set whether to track the total
                    if (this.trackTotalHits) q["track_total_hits"] = true;
                    return q;
                }
            },
            {
                key: "toString",
                value: function toString() {
                    return JSON.stringify(this.objectify());
                }
            },
            {
                key: "parse",
                value: function parse(obj) {
                    function parseBool(bool, target) {
                        if (bool.must) for(var i = 0; i < bool.must.length; i++){
                            var type = Object.keys(bool.must[i])[0];
                            var fil = $8d94b5f2509b6cf5$export$8b446892c82de644.filterFactory(type, {
                                raw: bool.must[i]
                            });
                            if (fil && type !== "query_string") target.addMust(fil);
                            else if (fil && type === "query_string") // FIXME: this will work fine as long as there are no nested bools
                            target.setQueryString(fil);
                        }
                        if (bool.must_not) for(var i = 0; i < bool.must_not.length; i++){
                            var type = Object.keys(bool.must_not[i])[0];
                            var fil = $8d94b5f2509b6cf5$export$8b446892c82de644.filterFactory(type, {
                                raw: bool.must_not[i]
                            });
                            if (fil) target.addMustNot(fil);
                        }
                        if (bool.should) for(var i = 0; i < bool.should.length; i++){
                            var type = Object.keys(bool.should[i])[0];
                            var fil = $8d94b5f2509b6cf5$export$8b446892c82de644.filterFactory(type, {
                                raw: bool.should[i]
                            });
                            if (fil) target.addShould(fil);
                        }
                        if (bool.minimum_should_match) target.minimumShouldMatch = bool.minimum_should_match;
                    }
                    function parseQuery(q, target) {
                        var keys = Object.keys(q);
                        for(var i = 0; i < keys.length; i++){
                            var type = keys[i];
                            if (type === "bool") {
                                parseBool(q.bool, target);
                                continue;
                            }
                            var impl = $8d94b5f2509b6cf5$export$8b446892c82de644.filterFactory(type, {
                                raw: q[type]
                            });
                            if (impl) {
                                if (type === "query_string") target.setQueryString(impl);
                            }
                        }
                    }
                    // parse the query itself
                    if (obj.query) {
                        if (obj.query.filtered) {
                            this.filtered = true;
                            var bool = obj.query.filtered.filter.bool;
                            if (bool) parseBool(bool, this);
                            var q = obj.query.filtered.query;
                            parseQuery(q, this);
                        } else {
                            var q = obj.query;
                            parseQuery(q, this);
                        }
                    }
                    if (obj.size) this.size = obj.size;
                    if (obj.from) this.from = obj.from;
                    if (obj.stored_fields) this.fields = obj.stored_fields;
                    if (obj.sort) for(var i = 0; i < obj.sort.length; i++){
                        var so = obj.sort[i];
                        this.addSortBy(new $8d94b5f2509b6cf5$export$8b446892c82de644.Sort({
                            raw: so
                        }));
                    }
                    if (obj.aggs || obj.aggregations) {
                        var aggs = obj.aggs ? obj.aggs : obj.aggregations;
                        var anames = Object.keys(aggs);
                        for(var i = 0; i < anames.length; i++){
                            var name = anames[i];
                            var agg = aggs[name];
                            var type = Object.keys(agg)[0];
                            var raw = {
                            };
                            raw[name] = agg;
                            var oa = $8d94b5f2509b6cf5$export$8b446892c82de644.aggregationFactory(type, {
                                raw: raw
                            });
                            if (oa) this.addAggregation(oa);
                        }
                    }
                    if (obj._source) {
                        var source = obj._source;
                        var include = [];
                        var exclude = [];
                        if (typeof source === "string") include.push(source);
                        else if (Array.isArray(source)) include = source;
                        else {
                            if (source.hasOwnProperty("include")) include = source.include;
                            if (source.hasOwnProperty("exclude")) exclude = source.exclude;
                        }
                        this.setSourceFilters({
                            include: include,
                            exclude: exclude
                        });
                    }
                }
            },
            {
                key: "clone",
                value: function clone() {
                    return new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
                        raw: Object.assign({
                        }, this.objectify())
                    });
                }
            }
        ]);
        return _class;
    }(),
    ///////////////////////////////////////////////
    // Query String
    QueryString: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
            this.queryString = params.queryString || false;
            this.defaultField = params.defaultField || false;
            this.defaultOperator = params.defaultOperator || "OR";
            this.fuzzify = params.fuzzify || false; // * or ~
            this.escapeSet = params.escapeSet || $8d94b5f2509b6cf5$export$8b446892c82de644.specialCharsSubSet;
            this.pairs = params.pairs || $8d94b5f2509b6cf5$export$8b446892c82de644.characterPairs;
            this.unEscapeSet = params.unEscapeSet || $8d94b5f2509b6cf5$export$8b446892c82de644.specialChars;
            if (params.raw) this.parse(params.raw);
        }
        $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
            {
                key: "objectify",
                value: function objectify() {
                    var qs = this._escape(this._fuzzify(this.queryString));
                    var obj = {
                        query_string: {
                            query: qs
                        }
                    };
                    if (this.defaultOperator) obj.query_string["default_operator"] = this.defaultOperator;
                    if (this.defaultField) obj.query_string["default_field"] = this.defaultField;
                    return obj;
                }
            },
            {
                key: "parse",
                value: function parse(obj) {
                    if (obj.query_string) obj = obj.query_string;
                    this.queryString = this._unescape(obj.query);
                    if (obj.default_operator) this.defaultOperator = obj.default_operator;
                    if (obj.default_field) this.defaultField = obj.default_field;
                }
            },
            {
                key: "_fuzzify",
                value: function _fuzzify(str) {
                    if (!this.fuzzify || !(this.fuzzify === "*" || this.fuzzify === "~")) return str;
                    if (!(str.indexOf('*') === -1 && str.indexOf('~') === -1 && str.indexOf(':') === -1)) return str;
                    var pq = "";
                    var optparts = str.split(' ');
                    for(var i = 0; i < optparts.length; i++){
                        var oip = optparts[i];
                        if (oip.length > 0) {
                            oip = oip + this.fuzzify;
                            this.fuzzify === "*" && (oip = "*" + oip);
                            pq += oip + " ";
                        }
                    }
                    return pq;
                }
            },
            {
                key: "_escapeRegExp",
                value: function _escapeRegExp(string) {
                    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                }
            },
            {
                key: "_replaceAll",
                value: function _replaceAll(string, find, replace) {
                    return string.replace(new RegExp(this._escapeRegExp(find), 'g'), replace);
                }
            },
            {
                key: "_unReplaceAll",
                value: function _unReplaceAll(string, find) {
                    return string.replace(new RegExp("\\\\(" + this._escapeRegExp(find) + ")", 'g'), "$1");
                }
            },
            {
                key: "_paired",
                value: function _paired(string, pair) {
                    var matches = string.match(new RegExp(this._escapeRegExp(pair), "g")) || [];
                    return matches.length % 2 === 0;
                }
            },
            {
                key: "_escape",
                value: function _escape(str) {
                    // make a copy of the special characters (we may modify it in a moment)
                    var scs = this.escapeSet.slice(0);
                    // first check for pairs, and push any extra characters to be escaped
                    for(var i = 0; i < this.pairs.length; i++){
                        var char = this.pairs[i];
                        if (!this._paired(str, char)) scs.push(char);
                    }
                    // now do the escape
                    for(var i = 0; i < scs.length; i++){
                        var char = scs[i];
                        str = this._replaceAll(str, char, "\\" + char);
                    }
                    return str;
                }
            },
            {
                key: "_unescape",
                value: function _unescape(str) {
                    for(var i = 0; i < this.unEscapeSet.length; i++){
                        var char = this.unEscapeSet[i];
                        str = this._unReplaceAll(str, char);
                    }
                    return str;
                }
            }
        ]);
        return _class;
    }(),
    //////////////////////////////////////////////
    // Sort Option
    Sort: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
            this.field = params.field || "_score";
            this.order = params.order || "desc";
            if (params.raw) this.parse(params.raw);
        }
        $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
            {
                key: "objectify",
                value: function objectify() {
                    var obj = {
                    };
                    obj[this.field] = {
                        order: this.order
                    };
                    return obj;
                }
            },
            {
                key: "parse",
                value: function parse(obj) {
                    this.field = Object.keys(obj)[0];
                    if (obj[this.field].order) this.order = obj[this.field].order;
                }
            }
        ]);
        return _class;
    }(),
    //////////////////////////////////////////////
    // Root Aggregation and aggregation implementations
    TermsAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.size = params.size || 10;
                // set the ordering for the first time
                _this.orderBy = "_count";
                if (params.orderBy) {
                    _this.orderBy = params.orderBy;
                    if (_this.orderBy[0] !== "_") _this.orderBy = "_" + _this.orderBy;
                }
                _this.orderDir = params.orderDir || "desc";
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    // provide a method to set and normalise the ordering in future
                    key: "setOrdering",
                    value: function setOrdering(orderBy, orderDir) {
                        this.orderBy = orderBy;
                        if (this.orderBy[0] !== "_") this.orderBy = "_" + this.orderBy;
                        this.orderDir = orderDir;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            size: this.size,
                            order: {
                            }
                        };
                        body.order[this.orderBy] = this.orderDir;
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation.type);
                        this.field = body.field;
                        if (body.size) this.size = body.size;
                        if (body.order) {
                            this.orderBy = Object.keys(body.order)[0];
                            this.orderDir = body.order[this.orderBy];
                        }
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "terms");
        return _class;
    }(),
    CardinalityAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.field, false);
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.CardinalityAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.CardinalityAggregation.type);
                        this.field = body.field;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "cardinality");
        return _class;
    }(),
    RangeAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.ranges = params.ranges || [];
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            ranges: this.ranges
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.RangeAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.RangeAggregation.type);
                        this.field = body.field;
                        this.ranges = body.ranges;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "range");
        return _class;
    }(),
    GeoDistanceAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.lat = params.lat || false;
                _this.lon = params.lon || false;
                _this.unit = params.unit || "m";
                _this.distance_type = params.distance_type || "sloppy_arc";
                _this.ranges = params.ranges || [];
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            origin: {
                                lat: this.lat,
                                lon: this.lon
                            },
                            unit: this.unit,
                            distance_type: this.distance_type,
                            ranges: this.ranges
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.GeoDistanceAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.GeoDistanceAggregation.type);
                        this.field = body.field;
                        // FIXME: only handles the lat/lon object - but there are several forms
                        // this origin could take
                        var origin = body.origin;
                        if (origin.lat) this.lat = origin.lat;
                        if (origin.lon) this.lon = origin.lon;
                        if (body.unit) this.unit = body.unit;
                        if (body.distance_type) this.distance_type = body.distance_type;
                        this.ranges = body.ranges;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "geo_distance");
        return _class;
    }(),
    GeohashGridAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.precision = params.precision || 3;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            precision: this.precision
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.GeohashGridAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.GeohashGridAggregation.type);
                        this.field = body.field;
                        this.precision = body.precision;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "geohash_grid");
        return _class;
    }(),
    StatsAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.StatsAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.StatsAggregation.type);
                        this.field = body.field;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "stats");
        return _class;
    }(),
    SumAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.SumAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.SumAggregation.type);
                        this.field = body.field;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "sum");
        return _class;
    }(),
    DateHistogramAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.field = params.field || false;
                _this.interval = params.interval || "month";
                _this.format = params.format || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            field: this.field,
                            interval: this.interval
                        };
                        if (this.format) body["format"] = this.format;
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.DateHistogramAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.DateHistogramAggregation.type);
                        this.field = body.field;
                        if (body.interval) this.interval = body.interval;
                        if (body.format) this.format = body.format;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "date_histogram");
        return _class;
    }(),
    FiltersAggregation: function() {
        var _class = /*#__PURE__*/ function(Aggregation) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Aggregation);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.filters = params.filters || {
                };
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var body = {
                            filters: this.filters
                        };
                        return this._make_aggregation($8d94b5f2509b6cf5$export$8b446892c82de644.FiltersAggregation.type, body);
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        var body = this._parse_wrapper(obj, $8d94b5f2509b6cf5$export$8b446892c82de644.FiltersAggregation.type);
                        this.filters = body.filters;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Aggregation);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "filters");
        return _class;
    }(),
    ///////////////////////////////////////////////////
    // Filters
    BoolFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                params["field"] = "_bool"; // this filter does not have a field, so we set a placeholder
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                // FIXME: for the moment this only supports must_not as it's all we need
                // at the time of implementation
                _this.mustNot = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.mustNot, []);
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            bool: {
                            }
                        };
                        if (this.mustNot.length > 0) {
                            var mustNots = [];
                            for(var i = 0; i < this.mustNot.length; i++){
                                var m = this.mustNot[i];
                                mustNots.push(m.objectify());
                            }
                            obj.bool["must_not"] = mustNots;
                        }
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.bool.must_not) for(var i = 0; i < obj.bool.must_not.length; i++){
                            var type = Object.keys(obj.bool.must_not[i])[0];
                            var fil = $8d94b5f2509b6cf5$export$8b446892c82de644.filterFactory(type, {
                                raw: obj.bool.must_not[i]
                            });
                            if (fil) this.addMustNot(fil);
                        }
                    }
                },
                {
                    key: "addMustNot",
                    value: function addMustNot(filter) {
                        var existing = this.listMustNot(filter);
                        if (existing.length === 0) this.mustNot.push(filter);
                    }
                },
                {
                    key: "listMustNot",
                    value: function listMustNot(template) {
                        return this.listFilters({
                            boolType: "must_not",
                            template: template
                        });
                    }
                },
                {
                    key: "listFilters",
                    value: function listFilters(params) {
                        var boolType = params.boolType || "must";
                        var template = params.template || false;
                        //var field = params.field || false;
                        //var filterType = params.filterType || false;
                        // first get the boolean filter field that we're going to look in
                        var bool = [];
                        if (boolType === "must") bool = this.must;
                        else if (boolType === "should") bool = this.should;
                        else if (boolType === "must_not") bool = this.mustNot;
                        if (!template) return bool;
                        var l = [];
                        for(var i = 0; i < bool.length; i++){
                            var m = bool[i];
                            if (m.matches(template)) l.push(m);
                        }
                        return l;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "bool");
        return _class;
    }(),
    TermFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                // this.filter handled by superclass
                _this.value = params.value || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = this._baseMatch(other);
                        if (!pm) return false;
                        // value (if set) must match
                        if (other.value && other.value !== this.value) return false;
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            term: {
                            }
                        };
                        obj.term[this.field] = this.value;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.term) obj = obj.term;
                        this.field = Object.keys(obj)[0];
                        this.value = obj[this.field];
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "term");
        return _class;
    }(),
    ExistsFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        return {
                            exists: {
                                field: this.field
                            }
                        };
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.exists) obj = obj.exists;
                        this.field = obj.field;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "exists");
        return _class;
    }(),
    TermsFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                // this.field handled by superclass
                _this.values = params.values || false;
                _this.execution = params.execution || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = this._baseMatch(other);
                        if (!pm) return false;
                        // values (if set) must be the same list
                        if (other.values) {
                            if (other.values.length !== this.values.length) return false;
                            for(var i = 0; i < other.values.length; i++){
                                if ($99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(other.values[i], this.values) === -1) return false;
                            }
                        }
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var val = this.values || [];
                        var obj = {
                            terms: {
                            }
                        };
                        obj.terms[this.field] = val;
                        if (this.execution) obj.terms["execution"] = this.execution;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.terms) obj = obj.terms;
                        this.field = Object.keys(obj)[0];
                        this.values = obj[this.field];
                        if (obj.execution) this.execution = obj.execution;
                    }
                },
                {
                    key: "add_term",
                    value: function add_term(term) {
                        if (!this.values) this.values = [];
                        if ($99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(term, this.values) === -1) this.values.push(term);
                    }
                },
                {
                    key: "has_term",
                    value: function has_term(term) {
                        if (!this.values) return false;
                        return $99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(term, this.values) >= 0;
                    }
                },
                {
                    key: "remove_term",
                    value: function remove_term(term) {
                        if (!this.values) return;
                        var idx = $99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(term, this.values);
                        if (idx >= 0) this.values.splice(idx, 1);
                    }
                },
                {
                    key: "has_terms",
                    value: function has_terms() {
                        return this.values !== false && this.values.length > 0;
                    }
                },
                {
                    key: "term_count",
                    value: function term_count() {
                        return this.values === false ? 0 : this.values.length;
                    }
                },
                {
                    key: "clear_terms",
                    value: function clear_terms() {
                        this.values = false;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "terms");
        return _class;
    }(),
    RangeFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                // this.field handled by superclass
                _this.lt = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.lt, false);
                _this.lte = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.lte, false);
                _this.gte = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.gte, false);
                _this.format = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.format, false);
                // normalise the values to strings
                if (_this.lt) _this.lt = _this.lt.toString();
                if (_this.lte) _this.lte = _this.lte.toString();
                if (_this.gte) _this.gte = _this.gte.toString();
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = $17c4d4a7c863d924$export$9099ad97b570f7c($da23c25529bb1df4$export$9099ad97b570f7c(_class.prototype), "matches", this).call(this, other);
                        if (!pm) return false;
                        // ranges (if set) must match
                        if (other.lt) {
                            if (other.lt !== this.lt) return false;
                        }
                        if (other.lte) {
                            if (other.lte !== this.lte) return false;
                        }
                        if (other.gte) {
                            if (other.gte !== this.gte) return false;
                        }
                        if (other.format) {
                            if (other.format !== this.format) return false;
                        }
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            range: {
                            }
                        };
                        obj.range[this.field] = {
                        };
                        if (this.lte !== false) obj.range[this.field]["lte"] = this.lte;
                        if (this.lt !== false && this.lte === false) obj.range[this.field]["lt"] = this.lt;
                        if (this.gte !== false) obj.range[this.field]["gte"] = this.gte;
                        if (this.format !== false) obj.range[this.field]["format"] = this.format;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.range) obj = obj.range;
                        this.field = Object.keys(obj)[0];
                        if (obj[this.field].lte !== undefined && obj[this.field].lte !== false) this.lte = obj[this.field].lte;
                        if (obj[this.field].lt !== undefined && obj[this.field].lt !== false) this.lt = obj[this.field].lt;
                        if (obj[this.field].gte !== undefined && obj[this.field].gte !== false) this.gte = obj[this.field].gte;
                        if (obj[this.field].format !== undefined && obj[this.field].format !== false) this.format = obj[this.field].format;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "range");
        return _class;
    }(),
    GeoDistanceRangeFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                // this.field is handled by superclass
                _this.lt = params.lt || false;
                _this.gte = params.gte || false;
                _this.lat = params.lat || false;
                _this.lon = params.lon || false;
                _this.unit = params.unit || "m";
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            geo_distance_range: {
                            }
                        };
                        obj.geo_distance_range[this.field] = {
                            lat: this.lat,
                            lon: this.lon
                        };
                        if (this.lt) obj.geo_distance_range["lt"] = this.lt + this.unit;
                        if (this.gte) obj.geo_distance_range["gte"] = this.gte + this.unit;
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        function endsWith(str, suffix) {
                            return str.indexOf(suffix, str.length - suffix.length) !== -1;
                        }
                        function splitUnits(str) {
                            var unit = false;
                            for(var i = 0; i < $8d94b5f2509b6cf5$export$8b446892c82de644.distanceUnits.length; i++){
                                var cu = $8d94b5f2509b6cf5$export$8b446892c82de644.distanceUnits[i];
                                if (endsWith(str, cu)) {
                                    str = str.substring(0, str.length - cu.length);
                                    unit = str.substring(str.length - cu.length);
                                }
                            }
                            return [
                                str,
                                unit
                            ];
                        }
                        if (obj.geo_distance_range) obj = obj.geo_distance_range;
                        this.field = Object.keys(obj)[0];
                        this.lat = obj[this.field].lat;
                        this.lon = obj[this.field].lon;
                        var lt = obj[this.field].lt;
                        var gte = obj[this.field].gte;
                        if (lt) {
                            lt = lt.trim();
                            var parts = splitUnits(lt);
                            this.lt = parts[0];
                            this.unit = parts[1];
                        }
                        if (gte) {
                            gte = gte.trim();
                            var parts = splitUnits(gte);
                            this.gte = parts[0];
                            this.unit = parts[1];
                        }
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "geo_distance_range");
        return _class;
    }(),
    GeoBoundingBoxFilter: function() {
        var _class = /*#__PURE__*/ function(Filter) {
            "use strict";
            $bca7673885229bfd$export$9099ad97b570f7c(_class, Filter);
            function _class(params) {
                $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
                var _this;
                _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this, params));
                _this.top_left = params.top_left || false;
                _this.bottom_right = params.bottom_right || false;
                if (params.raw) _this.parse(params.raw);
                return _this;
            }
            $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
                {
                    key: "matches",
                    value: function matches(other) {
                        // ask the parent object first
                        var pm = $17c4d4a7c863d924$export$9099ad97b570f7c($da23c25529bb1df4$export$9099ad97b570f7c(_class.prototype), "matches", this).call(this, other);
                        if (!pm) return false;
                        if (other.top_left && other.top_left !== this.top_left) return false;
                        if (other.bottom_right && other.bottom_right !== this.bottom_right) return false;
                        return true;
                    }
                },
                {
                    key: "objectify",
                    value: function objectify() {
                        var obj = {
                            geo_bounding_box: {
                            }
                        };
                        obj.geo_bounding_box[this.field] = {
                            top_left: this.top_left,
                            bottom_right: this.bottom_right
                        };
                        return obj;
                    }
                },
                {
                    key: "parse",
                    value: function parse(obj) {
                        if (obj.geo_bounding_box) obj = obj.geo_bounding_box;
                        this.field = Object.keys(obj)[0];
                        this.top_left = obj[this.field].top_left;
                        this.bottom_right = obj[this.field].bottom_right;
                    }
                }
            ]);
            return _class;
        }($8d94b5f2509b6cf5$var$Filter);
        $9b036347ace9941e$export$9099ad97b570f7c(_class, "type", "geo_bounding_box");
        return _class;
    }(),
    ////////////////////////////////////////////////////
    // The result object
    Result: /*#__PURE__*/ function() {
        "use strict";
        function _class(params) {
            $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
            this.data = params.raw;
        }
        $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
            {
                key: "buckets",
                value: function buckets(agg_name) {
                    return this.data.aggregations[agg_name].buckets;
                }
            },
            {
                key: "aggregation",
                value: function aggregation(agg_name) {
                    return this.data.aggregations[agg_name];
                }
            },
            {
                key: "results",
                value: function results() {
                    var res = [];
                    if (this.data.hits && this.data.hits.hits) for(var i = 0; i < this.data.hits.hits.length; i++){
                        var source = this.data.hits.hits[i];
                        if ("_source" in source) res.push(source._source);
                        else if ("_fields" in source) res.push(source._fields);
                        else res.push(source);
                    }
                    return res;
                }
            },
            {
                key: "total",
                value: function total() {
                    if (this.data.hits && this.data.hits.total && this.data.hits.total.value) return parseInt(this.data.hits.total.value);
                    return false;
                }
            }
        ]);
        return _class;
    }(),
    ////////////////////////////////////////////////////
    // Primary functions for interacting with elasticsearch
    doQuery: function doQuery(params) {
        // extract the parameters of the request
        var success = params.success;
        var error = params.error;
        var complete = params.complete;
        var search_url = params.search_url;
        var queryobj = params.queryobj;
        var datatype = params.datatype;
        // serialise the query
        var querystring = JSON.stringify(queryobj);
        // prep the callbacks (they are connected)
        var error_callback = $8d94b5f2509b6cf5$export$8b446892c82de644.queryError(error);
        var success_callback = $8d94b5f2509b6cf5$export$8b446892c82de644.querySuccess(success, error_callback);
        var ajax = {
            url: search_url,
            headers: $8d94b5f2509b6cf5$export$8b446892c82de644.requestHeaders,
            dataType: datatype,
            success: success_callback,
            error: error_callback,
            complete: complete
        };
        if (datatype !== "jsonp") ajax.jsonp = false;
        // make the call to the elasticsearch web service
        if ($8d94b5f2509b6cf5$export$8b446892c82de644.requestMethod === "get") {
            ajax.type = "get";
            ajax.data = {
                source: querystring,
                source_content_type: "application/json"
            };
            $99b6183ba65dae12$export$4048ae5fe51d81b7.ajax(ajax);
        } else if ($8d94b5f2509b6cf5$export$8b446892c82de644.requestMethod === "post") {
            ajax.type = "post";
            ajax.data = querystring;
            $99b6183ba65dae12$export$4048ae5fe51d81b7.ajax(ajax);
        } else throw "es.requestMethod must be either 'get' or 'post";
    },
    querySuccess: function querySuccess(callback, error_callback) {
        return function(data) {
            if (data.hasOwnProperty("error")) {
                error_callback(data);
                return;
            }
            var result = new $8d94b5f2509b6cf5$export$8b446892c82de644.Result({
                raw: data
            });
            callback(result);
        };
    },
    queryError: function queryError(callback) {
        return function(data) {
            if (callback) callback(data);
            else throw new Error(data);
        };
    },
    /////////////////////////////////////////////////////
    getParam: function getParam(value, def) {
        return value !== undefined ? value : def;
    }
};








function $d48cc3604bf30e24$export$f628537ca2c78f9d(params, key, def) {
    function _getDefault() {
        if (typeof def === 'function') return def();
        return def;
    }
    if (!params) return _getDefault();
    if (!params.hasOwnProperty(key)) return _getDefault();
    return params[key];
}
function $d48cc3604bf30e24$export$6e23017c375e3c2b() {
    var params = {
    };
    var url = window.location.href;
    var fragment = false;
    // break the anchor off the url
    if (url.indexOf("#") > -1) {
        fragment = url.slice(url.indexOf('#'));
        url = url.substring(0, url.indexOf('#'));
    }
    // extract and split the query args
    var args = url.slice(url.indexOf('?') + 1).split('&');
    for(var i = 0; i < args.length; i++){
        var kv = args[i].split('=');
        if (kv.length === 2) {
            var key = kv[0].replace(/\+/g, "%20");
            key = decodeURIComponent(key);
            var val = kv[1].replace(/\+/g, "%20");
            val = decodeURIComponent(val);
            if (val[0] === "[" || val[0] === "{") {
                // if it looks like a JSON object in string form...
                // remove " (double quotes) at beginning and end of string to make it a valid
                // representation of a JSON object, or the parser will complain
                val = val.replace(/^"/, "").replace(/"$/, "");
                val = JSON.parse(val);
            }
            params[key] = val;
        }
    }
    // record the fragment identifier if required
    if (fragment) params['#'] = fragment;
    return params;
}
function $d48cc3604bf30e24$export$16a194923490d008(obj) {
    for(var key in obj){
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}
function $d48cc3604bf30e24$export$367047a567f2342b(obj, fn, args, context_params) {
    return function() {
        if (args) {
            var params = {
            };
            for(var i = 0; i < args.length; i++)if (arguments.length > i) params[args[i]] = arguments[i];
            if (context_params) params = $99b6183ba65dae12$export$4048ae5fe51d81b7.extend(params, context_params);
            obj[fn](params);
        } else {
            var slice = Array.prototype.slice;
            var theArgs = slice.apply(arguments);
            if (context_params) theArgs.push(context_params);
            obj[fn].apply(obj, theArgs);
        }
    };
}
function $d48cc3604bf30e24$export$866a93d0ccff8292(obj, fn, conditional, preventDefault) {
    if (preventDefault === undefined) preventDefault = true;
    return function(event) {
        if (conditional) {
            if (!conditional(event)) return;
        }
        if (preventDefault) event.preventDefault();
        obj[fn](this, event);
    };
}
var $d48cc3604bf30e24$export$a25557390a09e78a = /*#__PURE__*/ function() {
    "use strict";
    function $d48cc3604bf30e24$export$a25557390a09e78a(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $d48cc3604bf30e24$export$a25557390a09e78a);
        var _this = this;
        $9b036347ace9941e$export$9099ad97b570f7c(this, "_finalise", function() {
            if (_this.finished) return;
            _this.finished = true;
            _this.functions.carryOn();
        });
        this.list = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "list");
        this.successCallbackArgs = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "successCallbackArgs");
        this.errorCallbackArgs = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "errorCallbackArgs");
        this.functions = {
            action: $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "action"),
            success: $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "success"),
            carryOn: $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "carryOn"),
            error: $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "error")
        };
        this.checkList = [];
        this.finished = false;
        for(var i = 0; i < this.list.length; i++)this.checkList.push(0);
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($d48cc3604bf30e24$export$a25557390a09e78a, [
        {
            key: "process",
            value: function process(params) {
                if (this.list.length === 0) this.functions.carryOn();
                for(var i = 0; i < this.list.length; i++){
                    var context = {
                        index: i
                    };
                    var success_callback = $d48cc3604bf30e24$export$367047a567f2342b(this, "_actionSuccess", this.successCallbackArgs, context);
                    var error_callback = $d48cc3604bf30e24$export$367047a567f2342b(this, "_actionError", this.successCallbackArgs, context);
                    var complete_callback = false;
                    this.functions.action({
                        entry: this.list[i],
                        success_callback: success_callback,
                        error_callback: error_callback,
                        complete_callback: complete_callback
                    });
                }
            }
        },
        {
            key: "_actionSuccess",
            value: function _actionSuccess(params) {
                var index = params.index;
                delete params.index;
                params["entry"] = this.list[index];
                this.functions.success(params);
                this.checkList[index] = 1;
                if (this._isComplete()) this._finalise();
            }
        },
        {
            key: "_actionError",
            value: function _actionError(params) {
                var index = params.index;
                delete params.index;
                params["entry"] = this.list[index];
                this.functions.error(params);
                this.checkList[index] = -1;
                if (this._isComplete()) this._finalise();
            }
        },
        {
            key: "_actionComplete",
            value: function _actionComplete(params) {
            }
        },
        {
            key: "_isComplete",
            value: function _isComplete() {
                return $99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(0, this.checkList) === -1;
            }
        }
    ]);
    return $d48cc3604bf30e24$export$a25557390a09e78a;
}();
function $d48cc3604bf30e24$export$60c5182d88d767f8(block, element, modifier) {
    var bemClass = block;
    if (element) bemClass += "__" + element;
    if (modifier) bemClass += "--" + modifier;
    return bemClass;
}
function $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, field, instance_name) {
    instance_name = $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name);
    var cl = namespace;
    if (field) cl += "_" + field;
    if (instance_name) {
        var second = namespace + "_" + instance_name;
        if (field) second += "_" + field;
        cl += " " + second;
    }
    return cl;
}
function $d48cc3604bf30e24$export$5be7444ab39fbaa3(namespace, field, instance_name) {
    instance_name = $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name);
    var styles = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, field, instance_name);
    var jsClasses = "";
    var bits = styles.split(" ");
    for(var i = 0; i < bits.length; i++){
        var bit = bits[i];
        jsClasses += " js-" + bit;
    }
    return jsClasses;
}
function $d48cc3604bf30e24$export$e516ebba864be69d(namespace, field, instance_name) {
    instance_name = $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name);
    var styles = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, field, instance_name);
    var js = $d48cc3604bf30e24$export$5be7444ab39fbaa3(namespace, field, instance_name);
    return styles + " " + js;
}
function $d48cc3604bf30e24$export$b1157bd4df096bce(namespace, field, instance_name) {
    instance_name = $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name);
    var sel = ".js-" + namespace;
    if (instance_name) sel += "_" + instance_name;
    if (field) sel += "_" + field;
    return sel;
}
function $d48cc3604bf30e24$export$bf52b203d82ff901(namespace, field, instance_name) {
    instance_name = $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name);
    var id = namespace;
    if (instance_name) id += "_" + instance_name;
    if (field) id += "_" + field;
    return id;
}
function $d48cc3604bf30e24$export$5d5492dec79280f1(namespace, field, instance_name) {
    instance_name = $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name);
    return "#" + $d48cc3604bf30e24$export$bf52b203d82ff901(namespace, field, instance_name);
}
function $d48cc3604bf30e24$var$_normaliseInstanceName(instance_name) {
    if (typeof instance_name === "string") return instance_name;
    // FIXME: check this doesn't cause a circular import issue
    if (instance_name instanceof $6cf4dc301226cb87$export$ea71c44d9cb0d048) return instance_name.id;
    if (instance_name instanceof $6cf4dc301226cb87$export$a695173e2ecfa9b) return instance_name.component.id;
}
function $d48cc3604bf30e24$export$5e20d0a3120d6c07(unsafe, def) {
    if (def === undefined) def = "";
    if (unsafe === undefined || unsafe == null) return def;
    try {
        if (typeof unsafe.replace !== "function") return unsafe;
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    } catch (err) {
        return def;
    }
}
function $d48cc3604bf30e24$export$63ba8ea1e92c906(unsafe) {
    return unsafe.replace(/&/g, "_").replace(/</g, "_").replace(/>/g, "_").replace(/"/g, "_").replace(/'/g, "_").replace(/\./gi, '_').replace(/\:/gi, '_').replace(/\s/gi, "_");
}
function $d48cc3604bf30e24$export$48334dba1de70fbe(params) {
    var reflectNonNumbers = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "reflectNonNumbers", false);
    var prefix = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "prefix", "");
    var zeroPadding = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "zeroPadding", false);
    var decimalPlaces = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "decimalPlaces", false);
    var thousandsSeparator = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "thousandsSeparator", false);
    var decimalSeparator = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "decimalSeparator", ".");
    var suffix = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "suffix", "");
    return function(number) {
        // ensure this is really a number
        var num = parseFloat(number);
        if (isNaN(num)) {
            if (reflectNonNumbers) return number;
            else return num;
        }
        // first off we need to convert the number to a string, which we can do directly, or using toFixed if that
        // is suitable here
        if (decimalPlaces !== false) num = num.toFixed(decimalPlaces);
        else num = num.toString();
        // now "num" is a string containing the formatted number that we can work on
        var bits = num.split(".");
        if (zeroPadding !== false) {
            var zeros = zeroPadding - bits[0].length;
            var pad = "";
            for(var i = 0; i < zeros; i++)pad += "0";
            bits[0] = pad + bits[0];
        }
        if (thousandsSeparator !== false) bits[0] = bits[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        if (bits.length === 1) return prefix + bits[0] + suffix;
        else return prefix + bits[0] + decimalSeparator + bits[1] + suffix;
    };
}
function $d48cc3604bf30e24$export$bf454bbe620fa941(params) {
    var commaRx = new RegExp(",", "g");
    return function(num) {
        num = num.trim();
        num = num.replace(commaRx, "");
        if (num === "") return 0;
        return parseFloat(num);
    };
}
function $d48cc3604bf30e24$export$b4cd8de5710bc55c(selector, event, caller, targetFunction, delay, conditional, preventDefault) {
    if (preventDefault === undefined) preventDefault = true;
    // if the caller has an inner component (i.e. it is a Renderer), use the component's id
    // otherwise, if it has a namespace (which is true of Renderers or Templates) use that
    if (caller.component && caller.component.id) event = event + "." + caller.component.id;
    else if (caller.namespace) event = event + "." + caller.namespace;
    // create the closure to be called on the event
    var clos = $d48cc3604bf30e24$export$866a93d0ccff8292(caller, targetFunction, conditional, preventDefault);
    // now bind the closure directly or with delay
    // if the caller has an inner component (i.e. it is a Renderer) use the components jQuery selector
    // otherwise, if it has an inner, use the selector on that.
    if (delay) {
        if (caller.component) caller.component.jq(selector).bindWithDelay(event, clos, delay);
        else if (caller.edge) caller.edge.jq(selector).bindWithDelay(event, clos, delay);
        else $99b6183ba65dae12$export$4048ae5fe51d81b7(selector).bindWithDelay(event, clos, delay);
    } else {
        if (caller.component) {
            var element = caller.component.jq(selector);
            element.off(event);
            element.on(event, clos);
        } else if (caller.edge) {
            var element = caller.edge.jq(selector);
            element.off(event);
            element.on(event, clos);
        } else {
            var element = $99b6183ba65dae12$export$4048ae5fe51d81b7(selector);
            element.off(event);
            element.on(event, clos);
        }
    }
}
function $d48cc3604bf30e24$export$27450a6de0750f89(selector, event, caller) {
    // if the caller has an inner component (i.e. it is a Renderer), use the component's id
    // otherwise, if it has a namespace (which is true of Renderers or Templates) use that
    if (caller.component && caller.component.id) event = event + "." + caller.component.id;
    else if (caller.namespace) event = event + "." + caller.namespace;
    if (caller.component) {
        var element = caller.component.jq(selector);
        element.off(event);
    } else if (caller.edge) {
        var element = caller.edge.jq(selector);
        element.off(event);
    } else {
        var element = $99b6183ba65dae12$export$4048ae5fe51d81b7(selector);
        element.off(event);
    }
}




var $e11cce7d2432c447$export$15b4933e9118d714 = /*#__PURE__*/ function() {
    "use strict";
    function $e11cce7d2432c447$export$15b4933e9118d714() {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $e11cce7d2432c447$export$15b4933e9118d714);
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($e11cce7d2432c447$export$15b4933e9118d714, [
        {
            key: "doQuery",
            value: function doQuery(params) {
            }
        }
    ]);
    return $e11cce7d2432c447$export$15b4933e9118d714;
}();



var $c08f5147382318be$export$4ddc7050cc680aeb = /*#__PURE__*/ function(QueryAdapter) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($c08f5147382318be$export$4ddc7050cc680aeb, QueryAdapter);
    function $c08f5147382318be$export$4ddc7050cc680aeb() {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $c08f5147382318be$export$4ddc7050cc680aeb);
        return $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($c08f5147382318be$export$4ddc7050cc680aeb).apply(this, arguments));
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($c08f5147382318be$export$4ddc7050cc680aeb, [
        {
            key: "doQuery",
            value: function doQuery(params) {
                var edge = params.edge;
                var query = params.query;
                var success = params.success;
                var error = params.error;
                if (!query) query = edge.currentQuery;
                $8d94b5f2509b6cf5$export$8b446892c82de644.doQuery({
                    search_url: edge.searchUrl,
                    queryobj: query.objectify(),
                    datatype: edge.datatype,
                    success: success,
                    error: error
                });
            }
        }
    ]);
    return $c08f5147382318be$export$4ddc7050cc680aeb;
}($e11cce7d2432c447$export$15b4933e9118d714);




var $6cf4dc301226cb87$export$22ad9a5707a07e9c = /*#__PURE__*/ function() {
    "use strict";
    function $6cf4dc301226cb87$export$22ad9a5707a07e9c(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $6cf4dc301226cb87$export$22ad9a5707a07e9c);
        /////////////////////////////////////////////
        // parameters that can be set via params arg
        // the jquery selector for the element where the edge will be deployed
        this.selector = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "selector", "body");
        // the base search url which will respond to elasticsearch queries.  Generally ends with _search
        this.searchUrl = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "searchUrl", false);
        // datatype for ajax requests to use - overall recommend using jsonp and proxying ES requests
        // through a back end that can provide that
        this.datatype = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "datatype", "jsonp");
        // dictionary of queries to be run before the primary query is executed
        // {"<preflight id>" : new es.Query(....)}
        // results will appear with the same ids in this.preflightResults
        // preflight queries are /not/ subject to the base query
        this.preflightQueries = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "preflightQueries", false);
        // query that forms the basis of all queries that are assembled and run
        // Note that baseQuery is inviolable - it's requirements will always be enforced
        this.baseQuery = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "baseQuery", false);
        // query to use to initialise the search.  Use this to set your opening
        // values for things like page size, initial search terms, etc.  Any request to
        // reset the interface will return to this query
        this.openingQuery = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "openingQuery", function() {
            return typeof $8d94b5f2509b6cf5$export$8b446892c82de644 !== 'undefined' ? new $8d94b5f2509b6cf5$export$8b446892c82de644.Query() : false;
        });
        // dictionary of functions that will generate secondary queries which also need to be
        // run at the point that cycle() is called.  These functions and their resulting
        // queries will be run /after/ the primary query (so can take advantage of the
        // results).  Their results will be stored in this.secondaryResults.
        // secondary queries are not subject the base query, although the functions
        // may of course apply the base query too if they wish
        // {"<secondary id>" : function() }
        this.secondaryQueries = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "secondaryQueries", false);
        // dictionary mapping keys to urls that will be used for search.  These should be
        // the same keys as used in secondaryQueries, if those secondary queries should be
        // issued against different urls than the primary search_url.
        this.secondaryUrls = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "secondaryUrls", false);
        // should the init process do a search
        this.initialSearch = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "initialSearch", true);
        // list of static files (e.g. data files) to be loaded at startup, and made available
        // on the object for use by components
        // {"id" : "<internal id to give the file>", "url" : "<file url>", "processor" : edges.csv.newObjectByRow, "datatype" : "text", "opening" : <function to be run after processing for initial state>}
        this.staticFiles = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "staticFiles", []);
        // should the search url be synchronised with the browser's url bar after search
        // and should queries be retrieved from the url on init
        this.manageUrl = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "manageUrl", false);
        // query parameter in which the query for this edge instance will be stored
        this.urlQuerySource = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "urlQuerySource", "source");
        // options to be passed to es.Query.objectify when prepping the query to be placed in the URL
        this.urlQueryOptions = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "urlQueryOptions", false);
        // template object that will be used to draw the frame for the edge.  May be left
        // blank, in which case the edge will assume that the elements are already rendered
        // on the page by the caller
        this.template = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "template", false);
        // list of all the components that are involved in this edge
        this.components = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "components", []);
        // the query adapter
        this.queryAdapter = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "queryAdapter", function() {
            return new $c08f5147382318be$export$4ddc7050cc680aeb();
        });
        // list of callbacks to be run synchronously with the edge instance as the argument
        // (these bind at the same points as all the events are triggered, and are keyed the same way)
        this.callbacks = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "callbacks", {
        });
        /////////////////////////////////////////////
        // operational properties
        // the query most recently read from the url
        this.urlQuery = false;
        // original url parameters
        this.urlParams = {
        };
        // the short url for this page
        this.shortUrl = false;
        // the last primary ES query object that was executed
        this.currentQuery = false;
        // the last result object from the ES layer
        this.result = false;
        // the results of the preflight queries, keyed by their id
        this.preflightResults = {
        };
        // the actual secondary queries derived from the functions in this.secondaryQueries;
        this.realisedSecondaryQueries = {
        };
        // results of the secondary queries, keyed by their id
        this.secondaryResults = {
        };
        // if the search is currently executing
        this.searching = false;
        // jquery object that represents the selected element
        this.context = false;
        // raw access to this.staticFiles loaded resources, keyed by id
        this.static = {
        };
        // access to processed static files, keyed by id
        this.resources = {
        };
        // list of static resources where errors were encountered
        this.errorLoadingStatic = [];
        //////////////////////////////////////////
        // now kick off the edge
        this.startup();
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($6cf4dc301226cb87$export$22ad9a5707a07e9c, [
        {
            //////////////////////////////////////////////////
            // Startup
            key: "startup",
            value: function startup() {
                // obtain the jquery context for all our operations
                this.context = $99b6183ba65dae12$export$4048ae5fe51d81b7(this.selector);
                // trigger the edges:init event
                this.trigger("edges:pre-init");
                // if we are to manage the URL, attempt to pull a query from it
                if (this.manageUrl) {
                    var urlParams = $d48cc3604bf30e24$export$6e23017c375e3c2b();
                    if (this.urlQuerySource in urlParams) {
                        this.urlQuery = new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
                            raw: urlParams[this.urlQuerySource]
                        });
                        delete urlParams[this.urlQuerySource];
                    }
                    this.urlParams = urlParams;
                }
                // render the template if necessary
                if (this.template) this.template.draw(this);
                // call each of the components to initialise themselves
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.init(this);
                }
                // now call each component to render itself (pre-search)
                this.draw();
                // load any static files - this will happen asynchronously, so afterwards
                // we call finaliseStartup to finish the process
                // var onward = edges.objClosure(this, "startupPart2");
                var onward = (function() {
                    return this.startupPart2();
                }).bind(this);
                this.loadStaticsAsync(onward);
            }
        },
        {
            key: "startupPart2",
            value: function startupPart2() {
                // FIXME: at this point we should check whether the statics all loaded correctly
                // var onward = edges.objClosure(this, "startupPart3");
                var onward = (function() {
                    return this.startupPart3();
                }).bind(this);
                this.runPreflightQueries(onward);
            }
        },
        {
            key: "startupPart3",
            value: function startupPart3() {
                // determine whether to initialise with either the openingQuery or the urlQuery
                var requestedQuery = this.openingQuery;
                if (this.urlQuery) {
                    // if there is a URL query, then we open with that, and then forget it
                    requestedQuery = this.urlQuery;
                    this.urlQuery = false;
                }
                // request the components to contribute to the query
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.contrib(requestedQuery);
                }
                // finally push the query, which will reconcile it with the baseQuery
                this.pushQuery(requestedQuery);
                // trigger the edges:post-init event
                this.trigger("edges:post-init");
                // now issue a query
                this.cycle();
            }
        },
        {
            ////////////////////////////////////////////////////
            // Cycle
            key: "cycle",
            value: function cycle() {
                // if a search is currently executing, don't do anything, else turn it on
                // FIXME: should we queue them up? - see the d3 map for an example of how to do this
                if (this.searching) return;
                this.searching = true;
                // invalidate the short url
                this.shortUrl = false;
                // pre query event
                this.trigger("edges:pre-query");
                // if we are managing the url space, use pushState to set it
                if (this.manageUrl) this.updateUrl();
                // if there's a search url, do a query, otherwise call synchronise and draw directly
                if (this.searchUrl) {
                    // var onward = edges.objClosure(this, "cyclePart2");
                    var onward = (function() {
                        return this.cyclePart2();
                    }).bind(this);
                    this.doPrimaryQuery(onward);
                } else this.cyclePart2();
            }
        },
        {
            key: "cyclePart2",
            value: function cyclePart2() {
                // var onward = edges.objClosure(this, "cyclePart3");
                var onward = (function() {
                    return this.cyclePart3();
                }).bind(this);
                this.runSecondaryQueries(onward);
            }
        },
        {
            key: "cyclePart3",
            value: function cyclePart3() {
                this.synchronise();
                // pre-render trigger
                this.trigger("edges:pre-render");
                // render
                this.draw();
                // post render trigger
                this.trigger("edges:post-render");
                // searching has completed, so flip the switch back
                this.searching = false;
            }
        },
        {
            ////////////////////////////////////////////////////
            // utilities required during startup
            key: "loadStaticsAsync",
            value: function loadStaticsAsync(callback) {
                if (!this.staticFiles || this.staticFiles.length === 0) {
                    this.trigger("edges:post-load-static");
                    callback();
                    return;
                }
                var that = this;
                var pg = new $d48cc3604bf30e24$export$a25557390a09e78a({
                    list: this.staticFiles,
                    action: function action(params) {
                        var entry = params.entry;
                        var success = params.success_callback;
                        var error = params.error_callback;
                        var id = entry.id;
                        var url = entry.url;
                        var datatype = edges.getParam(entry.datatype, "text");
                        $99b6183ba65dae12$export$4048ae5fe51d81b7.ajax({
                            type: "get",
                            url: url,
                            dataType: datatype,
                            success: success,
                            error: error
                        });
                    },
                    successCallbackArgs: [
                        "data"
                    ],
                    success: function success(params) {
                        var data = params.data;
                        var entry = params.entry;
                        if (entry.processor) {
                            var processed = entry.processor({
                                data: data
                            });
                            that.resources[entry.id] = processed;
                            if (entry.opening) entry.opening({
                                resource: processed,
                                edge: that
                            });
                        }
                        that.static[entry.id] = data;
                    },
                    errorCallbackArgs: [
                        "data"
                    ],
                    error: function error(params) {
                        that.errorLoadingStatic.push(params.entry.id);
                        that.trigger("edges:error-load-static");
                    },
                    carryOn: function carryOn() {
                        that.trigger("edges:post-load-static");
                        callback();
                    }
                });
                pg.process();
            }
        },
        {
            key: "runPreflightQueries",
            value: function runPreflightQueries(callback) {
                if (!this.preflightQueries || Object.keys(this.preflightQueries).length === 0) {
                    callback();
                    return;
                }
                this.trigger("edges:pre-preflight");
                var entries = [];
                var ids = Object.keys(this.preflightQueries);
                for(var i = 0; i < ids.length; i++){
                    var id = ids[i];
                    entries.push({
                        id: id,
                        query: this.preflightQueries[id]
                    });
                }
                var that = this;
                var pg = new $d48cc3604bf30e24$export$a25557390a09e78a({
                    list: entries,
                    action: function action(params) {
                        var entry = params.entry;
                        var success = params.success_callback;
                        var error = params.error_callback;
                        $8d94b5f2509b6cf5$export$8b446892c82de644.doQuery({
                            search_url: that.searchUrl,
                            queryobj: entry.query.objectify(),
                            datatype: that.datatype,
                            success: success,
                            error: error
                        });
                    },
                    successCallbackArgs: [
                        "result"
                    ],
                    success: function success(params) {
                        var result = params.result;
                        var entry = params.entry;
                        that.preflightResults[entry.id] = result;
                    },
                    errorCallbackArgs: [
                        "result"
                    ],
                    error: function error(params) {
                        that.trigger("edges:error-preflight");
                    },
                    carryOn: function carryOn() {
                        that.trigger("edges:post-preflight");
                        callback();
                    }
                });
                pg.process();
            }
        },
        {
            ///////////////////////////////////////////////////
            // Utilities required during cycle
            key: "doPrimaryQuery",
            value: function doPrimaryQuery(callback) {
                var context = {
                    "callback": callback
                };
                this.queryAdapter.doQuery({
                    edge: this,
                    success: $d48cc3604bf30e24$export$367047a567f2342b(this, "querySuccess", [
                        "result"
                    ], context),
                    error: $d48cc3604bf30e24$export$367047a567f2342b(this, "queryFail", [
                        "response"
                    ], context)
                });
            }
        },
        {
            key: "runSecondaryQueries",
            value: function runSecondaryQueries(callback) {
                this.realisedSecondaryQueries = {
                };
                if (!this.secondaryQueries || Object.keys(this.secondaryQueries).length === 0) {
                    callback();
                    return;
                }
                // generate the query objects to be executed
                var entries = [];
                for(var key in this.secondaryQueries){
                    var entry = {
                    };
                    entry["query"] = this.secondaryQueries[key](this);
                    entry["id"] = key;
                    entry["searchUrl"] = this.searchUrl;
                    if (this.secondaryUrls !== false && this.secondaryUrls.hasOwnProperty(key)) entry["searchUrl"] = this.secondaryUrls[key];
                    entries.push(entry);
                    this.realisedSecondaryQueries[key] = entry.query;
                }
                var that = this;
                var pg = new $d48cc3604bf30e24$export$a25557390a09e78a({
                    list: entries,
                    action: function action(params) {
                        var entry = params.entry;
                        var success = params.success_callback;
                        var error = params.error_callback;
                        $8d94b5f2509b6cf5$export$8b446892c82de644.doQuery({
                            search_url: entry.searchUrl,
                            queryobj: entry.query.objectify(),
                            datatype: that.datatype,
                            success: success,
                            complete: false
                        });
                    },
                    successCallbackArgs: [
                        "result"
                    ],
                    success: function success(params) {
                        var result = params.result;
                        var entry = params.entry;
                        that.secondaryResults[entry.id] = result;
                    },
                    errorCallbackArgs: [
                        "result"
                    ],
                    error: function error(params) {
                    // FIXME: not really sure what to do about this
                    },
                    carryOn: function carryOn() {
                        callback();
                    }
                });
                pg.process();
            }
        },
        {
            ////////////////////////////////////////////////////
            //  functions for working with the queries
            key: "cloneQuery",
            value: function cloneQuery() {
                if (this.currentQuery) return this.currentQuery.clone();
                return false;
            }
        },
        {
            key: "pushQuery",
            value: function pushQuery(query) {
                if (this.baseQuery) query.merge(this.baseQuery);
                this.currentQuery = query;
            }
        },
        {
            key: "cloneBaseQuery",
            value: function cloneBaseQuery() {
                if (this.baseQuery) return this.baseQuery.clone();
                return new $8d94b5f2509b6cf5$export$8b446892c82de644.Query();
            }
        },
        {
            key: "cloneOpeningQuery",
            value: function cloneOpeningQuery() {
                if (this.openingQuery) return this.openingQuery.clone();
                return new $8d94b5f2509b6cf5$export$8b446892c82de644.Query();
            }
        },
        {
            key: "queryFail",
            value: function queryFail(params) {
                var callback = params.callback;
                var response = params.response;
                this.trigger("edges:query-fail");
                if (response.hasOwnProperty("responseText")) console.log("ERROR: query fail: " + response.responseText);
                if (response.hasOwnProperty("error")) console.log("ERROR: search execution fail: " + response.error);
                callback();
            }
        },
        {
            key: "querySuccess",
            value: function querySuccess(params) {
                this.result = params.result;
                var callback = params.callback;
                // success trigger
                this.trigger("edges:query-success");
                callback();
            }
        },
        {
            //////////////////////////////////////////////////
            // URL Management
            key: "updateUrl",
            value: function updateUrl() {
                var currentQs = window.location.search;
                var qs = "?" + this.fullUrlQueryString();
                if (currentQs === qs) return; // no need to push the state
                var url = new URL(window.location.href);
                url.search = qs;
                if (currentQs === "") window.history.replaceState("", "", url.toString());
                else window.history.pushState("", "", url.toString());
            }
        },
        {
            key: "fullUrl",
            value: function fullUrl() {
                var args = this.fullQueryArgs();
                var fragment = "";
                if (args["#"]) {
                    fragment = "#" + args["#"];
                    delete args["#"];
                }
                var wloc = window.location.toString();
                var bits = wloc.split("?");
                var url = bits[0] + "?" + this._makeUrlQuery(args) + fragment;
                return url;
            }
        },
        {
            key: "fullUrlQueryString",
            value: function fullUrlQueryString() {
                return this._makeUrlQuery(this.fullQueryArgs());
            }
        },
        {
            key: "fullQueryArgs",
            value: function fullQueryArgs() {
                var args = $99b6183ba65dae12$export$4048ae5fe51d81b7.extend(true, {
                }, this.urlParams);
                $99b6183ba65dae12$export$4048ae5fe51d81b7.extend(args, this.urlQueryArg());
                return args;
            }
        },
        {
            key: "urlQueryArg",
            value: function urlQueryArg(objectify_options) {
                if (!objectify_options) {
                    if (this.urlQueryOptions) objectify_options = this.urlQueryOptions;
                    else objectify_options = {
                        include_query_string: true,
                        include_filters: true,
                        include_paging: true,
                        include_sort: true,
                        include_fields: false,
                        include_aggregations: false
                    };
                }
                var q = JSON.stringify(this.currentQuery.objectify(objectify_options));
                var obj = {
                };
                obj[this.urlQuerySource] = encodeURIComponent(q);
                return obj;
            }
        },
        {
            key: "_makeUrlQuery",
            value: function _makeUrlQuery(args) {
                var keys = Object.keys(args);
                var entries = [];
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    var val = args[key];
                    entries.push(key + "=" + val); // NOTE we do not escape - this should already be done
                }
                return entries.join("&");
            }
        },
        {
            /////////////////////////////////////////////////
            // lifecycle functions
            key: "synchronise",
            value: function synchronise() {
                // ask the components to synchronise themselves with the latest state
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.synchronise();
                }
            }
        },
        {
            key: "draw",
            value: function draw() {
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.draw(this);
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                // tell the world we're about to reset
                this.trigger("edges:pre-reset");
                // clone from the opening query
                var requestedQuery = this.cloneOpeningQuery();
                // request the components to contribute to the query
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.contrib(requestedQuery);
                }
                // push the query, which will reconcile it with the baseQuery
                this.pushQuery(requestedQuery);
                // tell the world that we've done the reset
                this.trigger("edges:post-reset");
                // now execute the query
                // this.doQuery();
                this.cycle();
            }
        },
        {
            key: "sleep",
            value: function sleep() {
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.sleep();
                }
            }
        },
        {
            key: "wake",
            value: function wake() {
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    component.wake();
                }
            }
        },
        {
            key: "trigger",
            value: function trigger(event_name) {
                if (event_name in this.callbacks) this.callbacks[event_name](this);
                this.context.trigger(event_name);
            }
        },
        {
            ////////////////////////////////////////////
            // accessors
            key: "getComponent",
            value: function getComponent(params) {
                var id = params.id;
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    if (component.id === id) return component;
                }
                return false;
            }
        },
        {
            // return components in the requested category
            key: "category",
            value: function category(cat) {
                var comps = [];
                for(var i = 0; i < this.components.length; i++){
                    var component = this.components[i];
                    if (component.category === cat) comps.push(component);
                }
                return comps;
            }
        },
        {
            key: "jq",
            value: function jq(selector) {
                return $99b6183ba65dae12$export$4048ae5fe51d81b7(selector, this.context);
            }
        }
    ]);
    return $6cf4dc301226cb87$export$22ad9a5707a07e9c;
}();
var $6cf4dc301226cb87$export$93af88fe68eea917 = /*#__PURE__*/ function() {
    "use strict";
    function $6cf4dc301226cb87$export$93af88fe68eea917() {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $6cf4dc301226cb87$export$93af88fe68eea917);
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($6cf4dc301226cb87$export$93af88fe68eea917, [
        {
            key: "draw",
            value: function draw(edge) {
            }
        }
    ]);
    return $6cf4dc301226cb87$export$93af88fe68eea917;
}();
var $6cf4dc301226cb87$export$ea71c44d9cb0d048 = /*#__PURE__*/ function() {
    "use strict";
    function $6cf4dc301226cb87$export$ea71c44d9cb0d048(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $6cf4dc301226cb87$export$ea71c44d9cb0d048);
        this.id = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "id");
        this.renderer = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "renderer");
        this.category = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "category", false);
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($6cf4dc301226cb87$export$ea71c44d9cb0d048, [
        {
            key: "init",
            value: function init(edge) {
                this.edge = edge;
                this.context = this.edge.jq("#" + this.id);
                if (this.renderer) this.renderer.init(this);
            }
        },
        {
            key: "draw",
            value: function draw() {
                if (this.renderer) this.renderer.draw();
            }
        },
        {
            key: "sleep",
            value: function sleep() {
                if (this.renderer) this.renderer.sleep();
            }
        },
        {
            key: "wake",
            value: function wake() {
                if (this.renderer) this.renderer.wake();
            }
        },
        {
            // convenience method for any renderer rendering a component
            key: "jq",
            value: function jq(selector) {
                return this.edge.jq(selector);
            }
        },
        {
            // methods to be implemented by subclasses
            key: "contrib",
            value: function contrib(query) {
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
            }
        }
    ]);
    return $6cf4dc301226cb87$export$ea71c44d9cb0d048;
}();
var $6cf4dc301226cb87$export$a695173e2ecfa9b = /*#__PURE__*/ function() {
    "use strict";
    function $6cf4dc301226cb87$export$a695173e2ecfa9b() {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $6cf4dc301226cb87$export$a695173e2ecfa9b);
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($6cf4dc301226cb87$export$a695173e2ecfa9b, [
        {
            key: "init",
            value: function init(component) {
                this.component = component;
            }
        },
        {
            key: "draw",
            value: function draw() {
            }
        },
        {
            key: "sleep",
            value: function sleep() {
            }
        },
        {
            key: "wake",
            value: function wake() {
            }
        }
    ]);
    return $6cf4dc301226cb87$export$a695173e2ecfa9b;
}();





var _finalBuckets;
var $ae46249d8a2a7b6d$export$7decb792461ef5a9 = /*#__PURE__*/ function(Component) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($ae46249d8a2a7b6d$export$7decb792461ef5a9, Component);
    function $ae46249d8a2a7b6d$export$7decb792461ef5a9(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $ae46249d8a2a7b6d$export$7decb792461ef5a9);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($ae46249d8a2a7b6d$export$7decb792461ef5a9).call(this, params));
        // actual data series that the renderer will render
        // data series is of the form
        // [
        //      {
        //          key: "<name of series>",
        //          values: [
        //              {label: "<name of this value>", value: "<the value itself>"}
        //          ]
        //      }
        // ]
        //
        // For example
        // [{ key: "power output", values: [{label: 1980, value: 100}, {label: 1981, value: 200}]
        _this.dataSeries = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "dataSeries", false);
        // function which will generate the data series, which will be
        // written to this.dataSeries if that is not provided
        _this.dataFunction = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "dataFunction", false);
        // should we enforce a rectangular shape on the data series for when there is
        // more than one series to be displayed?
        _this.rectangulate = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "rectangulate", false);
        // function which will sort the values of a series, used when rectangulate is
        // set to true
        _this.seriesSort = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "seriesSort", false);
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($ae46249d8a2a7b6d$export$7decb792461ef5a9, [
        {
            key: "synchronise",
            value: function synchronise() {
                if (this.dataFunction) this.dataSeries = this.dataFunction(this);
                if (this.rectangulate) this._rectangulate();
            }
        },
        {
            key: "_rectangulate",
            value: function _rectangulate() {
                if (this.dataSeries.length === 1) // if there's only one series, it is rectangular by definition
                return;
                // first index all the keys in the data series values for all
                // data series
                var allLabels = [];
                for(var i = 0; i < this.dataSeries.length; i++){
                    var series = this.dataSeries[i];
                    for(var j = 0; j < series.values.length; j++){
                        var point = series.values[j];
                        if (!allLabels.includes(point.label)) allLabels.push(point.label);
                    }
                }
                // now we have a full list of labels, check they are all present
                // in each series, and if not set a default value of 0
                for(var i1 = 0; i1 < this.dataSeries.length; i1++){
                    var series = this.dataSeries[i1];
                    var currentLabels = series.values.map(function(x) {
                        return x.label;
                    });
                    for(var j = 0; j < allLabels.length; j++){
                        var considerLabel = allLabels[j];
                        if (!currentLabels.includes(considerLabel)) series.values.push({
                            label: considerLabel,
                            value: 0
                        }); // NOTE: there is no sorting here, have to see what impact that has
                    }
                    if (this.seriesSort) series.values = this.seriesSort(series.values);
                }
            }
        }
    ]);
    return $ae46249d8a2a7b6d$export$7decb792461ef5a9;
}($6cf4dc301226cb87$export$ea71c44d9cb0d048);
function $ae46249d8a2a7b6d$export$8c0eec9b15d1897d(params) {
    var agg = params.agg;
    var seriesName = params.seriesName;
    return function(component) {
        var values = [];
        if (!component.edge.result) return [];
        var aggregation = component.edge.result.aggregation(agg);
        for(var i = 0; i < aggregation.buckets.length; i++){
            var bucket = aggregation.buckets[i];
            values.push({
                label: bucket.key,
                value: bucket.doc_count
            });
        }
        return [
            {
                key: seriesName,
                values: values
            }
        ];
    };
}
function $ae46249d8a2a7b6d$export$d99c821b0fb86668(params) {
    var histogramAgg = params.histogramAgg;
    var termsAgg = params.termsAgg;
    var seriesNameMap = params.seriesNameMap;
    return function(component) {
        var series = {
        };
        if (!component.edge.result) return [];
        var aggregation = component.edge.result.aggregation(histogramAgg);
        for(var i = 0; i < aggregation.buckets.length; i++){
            var bucket = aggregation.buckets[i];
            var terms = bucket[termsAgg];
            for(var j = 0; j < terms.buckets.length; j++){
                var term = terms.buckets[j];
                if (!(term.key in series)) series[term.key] = [];
                series[term.key].push({
                    label: bucket.key,
                    value: term.doc_count
                });
            }
        }
        var dataSeries = [];
        var seriesNames = Object.keys(series);
        for(var i1 = 0; i1 < seriesNames.length; i1++){
            var seriesName = seriesNames[i1];
            var displaySeriesName = seriesNameMap ? seriesNameMap[seriesName] || seriesName : seriesName;
            dataSeries.push({
                key: displaySeriesName,
                values: series[seriesName]
            });
        }
        return dataSeries;
    };
}
function $ae46249d8a2a7b6d$export$4c2a251a86bb620b(params) {
    var aggs = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "aggs", []);
    var seriesName = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "seriesName", "series");
    return function(component) {
        // for each aggregation, get the results and add them to the data series
        var data_series = [];
        if (!component.edge.result) return data_series;
        var context = component.edge.result.data.aggregations;
        function recurse(aggs1, context1) {
            var finalBuckets = [];
            for(var i = 0; i < aggs1.length; i++){
                var agg = aggs1[i];
                if (typeof agg === "string") return context1[agg].buckets;
                else {
                    var key = Object.keys(agg)[0];
                    var nested = context1[key].buckets;
                    if (agg[key].keys) nested = nested.filter(function(b) {
                        return agg[key].keys.includes(b.key);
                    });
                    for(var j = 0; j < nested.length; j++){
                        var nest = nested[j];
                        var bs = recurse(agg[key].aggs, nest);
                        (_finalBuckets = finalBuckets).push.apply(_finalBuckets, $0862162e48b32d5b$export$9099ad97b570f7c(bs));
                    }
                }
            }
            return finalBuckets;
        }
        var bs = recurse(aggs, context);
        var series = {
        };
        series["key"] = seriesName;
        series["values"] = [];
        for(var j = 0; j < bs.length; j++){
            var doccount = bs[j].doc_count;
            var key = bs[j].key;
            series.values.push({
                label: key,
                value: doccount
            });
        }
        return [
            series
        ];
    };
}




var $b76ad79e27dc7523$export$8698b599d6b7d9a0 = window.nv;


var $f5a419d63f8f3762$export$6343839093e1c21d = window.d3;





function $fdccde0d4dd41d73$export$af206d707775bac7(data_series) {
    var new_series = [];
    for(var i = 0; i < data_series.length; i++){
        var os = data_series[i];
        var ns = {
        };
        ns["key"] = os["key"];
        ns["values"] = [];
        for(var j = 0; j < os.values.length; j++){
            var vector = os.values[j];
            ns["values"].push({
                x: vector.label,
                y: vector.value
            });
        }
        new_series.push(ns);
    }
    return new_series;
}
function $fdccde0d4dd41d73$export$e89b2486fe14568(dataSeries) {
    if (!dataSeries) return false;
    if (dataSeries.length === 0) return false;
    var emptyCount = 0;
    for(var i = 0; i < dataSeries.length; i++){
        var series = dataSeries[i];
        if (series.values.length === 0) emptyCount++;
    }
    if (emptyCount === dataSeries.length) return false;
    return true;
}
function $fdccde0d4dd41d73$export$e85e6981b6330071(params) {
    var axisSelector = params.axisSelector;
    var maxWidth = params.maxWidth;
    var maxHeight = params.maxHeight;
    var lineHeight = params.lineHeight || 1.2;
    var wordBreaks = params.wordBreaks || [
        " ",
        "\t"
    ];
    var minChunkSize = params.minHyphenSize || 3;
    function _isMidWord(currentLine, remainder) {
        var leftChar = $99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(currentLine[currentLine.length - 1], wordBreaks) === -1;
        var rightChar = $99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(remainder[0], wordBreaks) === -1;
        return leftChar && rightChar;
    }
    function _toPrevSpace(currentLine) {
        for(var i = currentLine.length - 1; i >= 0; i--){
            var char = currentLine[i];
            if ($99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(char, wordBreaks) !== -1) return currentLine.length - i;
        }
        return -1;
    }
    function _toNextSpace(remainder) {
        for(var i = 0; i < remainder.length; i++){
            var char = remainder[i];
            if ($99b6183ba65dae12$export$4048ae5fe51d81b7.inArray(char, wordBreaks) !== -1) return i + 1;
        }
        return -1;
    }
    function _backtrack(count, currentLine, remainder) {
        for(var i = 0; i < count; i++)remainder.unshift(currentLine.pop());
    }
    function _isTooLong(tspan) {
        return tspan.node().getComputedTextLength() >= maxWidth;
    }
    function separate(text) {
        // get the current content then clear the text element
        var chars = text.text().trim().split("");
        text.text(null);
        // set up registries for the text lines that they will create
        var lines = [];
        // create a tspan for working in - we need it to calculate line widths dynamically
        var x = text.attr("x");
        var tspan = text.append("tspan").attr("x", x).attr("y", 0);
        // record the current line
        var currentLine = [];
        // for each character in the text, push to the current line, assign to the tspan, and then
        // check if we have exceeded the allowed max width
        while(chars.length > 0){
            var char = chars.shift();
            currentLine.push(char);
            tspan.text(currentLine.join(""));
            var maxed = false;
            var hyphenated = false;
            while(_isTooLong(tspan)){
                // record that we pushed the tspan to the limit
                maxed = true;
                // if we already added a hyphen, remove it
                if (hyphenated) {
                    currentLine.splice(currentLine.length - 1);
                    hyphenated = false;
                }
                // if we have exceeded the max width back-track 1
                _backtrack(1, currentLine, chars);
                if (_isMidWord(currentLine, chars)) {
                    var toPrevSpace = _toPrevSpace(currentLine);
                    if (toPrevSpace === -1 || toPrevSpace - 1 > minChunkSize) {
                        _backtrack(1, currentLine, chars);
                        currentLine.push("-");
                        hyphenated = true;
                    } else _backtrack(toPrevSpace, currentLine, chars);
                }
                currentLine = currentLine.join("").trim().split("");
                tspan.text(currentLine.join(""));
            }
            // if we didn't yet fill the tspan, continue adding characters
            if (!maxed && chars.length > 0) continue;
            // otherwise, move on to the next line
            if (maxed || chars.length === 0) {
                lines.push(currentLine);
                currentLine = [];
            }
        }
        // create all the tspans
        tspan.remove();
        var tspans = [];
        for(var i = 0; i < lines.length; i++){
            tspan = text.append("tspan").attr("x", x).attr("y", 0);
            tspan.text(lines[i].join(""));
            tspans.push(tspan);
        }
        return tspans;
    }
    function distribute(text, tspans) {
        var imax = tspans.length;
        var pmax = lineHeight * (imax - 1);
        var dy = parseFloat(text.attr("dy"));
        for(var j = 0; j < tspans.length; j++){
            var pos = lineHeight * j - pmax / 2 + dy;
            var tspan = tspans[j];
            tspan.attr("dy", pos + "em");
        }
    }
    function reduce(text, tspans) {
        var reduced = false;
        var box = text.node().getBBox();
        if (box.height > maxHeight && tspans.length > 1) {
            tspans[tspans.length - 1].remove();
            tspans.pop();
            var line = tspans[tspans.length - 1].text();
            if (line.length > 3) line = line.substring(0, line.length - 3) + "...";
            tspans[tspans.length - 1].text(line);
            reduced = true;
        }
        return reduced;
    }
    d3.selectAll(axisSelector + " .tick text").each(function(i, e) {
        var text = d3.select(this);
        var tspans = separate(text);
        do distribute(text, tspans);
        while (reduce(text, tspans))
    });
}


var $8ff5b3d2c2ab6201$export$6d5fb309d07d7299 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($8ff5b3d2c2ab6201$export$6d5fb309d07d7299, Renderer);
    function $8ff5b3d2c2ab6201$export$6d5fb309d07d7299(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $8ff5b3d2c2ab6201$export$6d5fb309d07d7299);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($8ff5b3d2c2ab6201$export$6d5fb309d07d7299).call(this, params));
        _this.title = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "title", false);
        _this.showValues = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showValues", true);
        _this.toolTips = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "toolTips", true);
        _this.controls = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "controls", false);
        _this.stacked = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "stacked", false);
        _this.legend = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "legend", true);
        _this.color = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "color", false);
        _this.barColor = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "barColor", false);
        _this.noDataMessage = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "noDataMessage", false);
        _this.transitionDuration = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "transitionDuration", 500);
        _this.marginTop = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginTop", 30);
        _this.marginRight = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginRight", 50);
        _this.marginBottom = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginBottom", 50);
        _this.marginLeft = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginLeft", 200);
        _this.yTickFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yTickFormat", ",.0f");
        _this.xTickFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xTickFormat", false);
        _this.valueFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueFormat", false);
        _this.showXAxis = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showXAxis", true);
        _this.showYAxis, $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showYAxes", true);
        _this.xAxisLabel = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xAxisLabel", false);
        _this.yAxisLabel = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yAxisLabel", false);
        _this.xAxisLabelWrap = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xAxisLabelWrap", false);
        _this.tooltipGenerator = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "tooltipGenerator", false);
        _this.dynamicHeight = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "dynamicHeight", false);
        _this.barHeight = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "barHeight", 0);
        _this.reserveAbove = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "reserveAbove", 0);
        _this.reserveBelow = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "reserveBelow", 0);
        _this.groupSpacing = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "groupSpacing", false);
        _this.hideIfNoData = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "hideIfNoData", false);
        _this.onHide = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "onHide", false);
        _this.onShow = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "onShow", false);
        _this.onUpdate = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "onUpdate", false);
        _this.namespace = "edges-nvd3-horizontal-multibar";
        _this.draw = function() {
            // no need for data conversion on this graph type
            // nvd3 tooltips appear outside the div where the actual edge is focussed, and it's possible for those
            // tooltips to be left behind when the page is redrawn, so we have to hack around that
            $(".nvtooltip").remove();
            var data_series = _this.component.dataSeries;
            if (!data_series) data_series = [];
            // now decide if we are going to continue
            if (_this.hideIfNoData) {
                if (!$fdccde0d4dd41d73$export$e89b2486fe14568(data_series)) {
                    _this.component.context.html("");
                    _this.component.context.hide();
                    if (_this.onHide) _this.onHide();
                    return;
                }
            }
            _this.component.context.show();
            if (_this.onShow) _this.onShow();
            var customAttributes = "";
            if (_this.dynamicHeight) {
                var seriesCount = 0;
                for(var i = 0; i < data_series.length; i++){
                    var series = data_series[i];
                    if (series.values.length > seriesCount) seriesCount = series.values.length;
                }
                var height = _this.reserveAbove + _this.reserveBelow + seriesCount * _this.barHeight;
                customAttributes = 'style="height:' + height + 'px"';
            }
            var title = "";
            if (_this.title !== false) {
                var titleClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(_this.namespace, "title", $f483f7288df68fd0$export$9099ad97b570f7c(_this));
                title = "<h4 class=\"".concat(titleClass, "\">").concat(_this.title, "</h4>");
            }
            var svgId = $d48cc3604bf30e24$export$bf52b203d82ff901(_this.namespace, "svg", $f483f7288df68fd0$export$9099ad97b570f7c(_this));
            var svgSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(_this.namespace, "svg", $f483f7288df68fd0$export$9099ad97b570f7c(_this));
            _this.component.context.html(title + '<div ' + customAttributes + '><svg id="' + svgId + '"></svg></div>');
            var that = $f483f7288df68fd0$export$9099ad97b570f7c(_this);
            $b76ad79e27dc7523$export$8698b599d6b7d9a0.addGraph(function() {
                var chart = $b76ad79e27dc7523$export$8698b599d6b7d9a0.models.multiBarHorizontalChart().x(function(d) {
                    return d.label;
                }).y(function(d) {
                    return d.value;
                }).margin({
                    top: that.marginTop,
                    right: that.marginRight,
                    bottom: that.marginBottom,
                    left: that.marginLeft
                }).showValues(that.showValues).tooltips(that.toolTips).showControls(that.controls).showLegend(that.legend).showXAxis(that.showXAxis).showYAxis(that.showYAxis);
                if (that.barColor) chart.barColor(that.barColor);
                if (that.stacked) chart.multibar.stacked(that.stacked);
                if (that.yTickFormat) {
                    var fn = that.yTickFormat;
                    if (typeof that.yTickFormat === "string") fn = $f5a419d63f8f3762$export$6343839093e1c21d.format(that.yTickFormat);
                    chart.yAxis.tickFormat(fn);
                }
                if (that.yAxisLabel) chart.yAxis.axisLabel(that.yAxisLabel);
                if (that.xTickFormat) {
                    var fn = that.xTickFormat;
                    if (typeof that.xTickFormat === "string") fn = $f5a419d63f8f3762$export$6343839093e1c21d.format(that.xTickFormat);
                    chart.xAxis.tickFormat(fn);
                }
                if (that.xAxisLabel) chart.xAxis.axisLabel(that.xAxisLabel);
                if (that.valueFormat) {
                    // set it on the chart
                    var fn = that.valueFormat;
                    if (typeof that.valueFormat === "string") fn = $f5a419d63f8f3762$export$6343839093e1c21d.format(that.valueFormat);
                    chart.valueFormat(fn);
                    // set it on the tooltip
                    chart.tooltip.valueFormatter(fn);
                }
                if (that.noDataMessage) chart.noData(that.noDataMessage);
                if (that.color) chart.color(that.color);
                if (that.tooltipGenerator) chart.tooltip.contentGenerator(that.tooltipGenerator);
                if (that.groupSpacing) chart.groupSpacing(that.groupSpacing);
                $f5a419d63f8f3762$export$6343839093e1c21d.select(svgSelector).datum(data_series).transition().duration(that.transitionDuration).call(chart);
                if (that.xAxisLabelWrap) $fdccde0d4dd41d73$export$e85e6981b6330071({
                    axisSelector: svgSelector + " .nv-x.nv-axis",
                    maxWidth: that.marginLeft - 5,
                    maxHeight: that.barHeight
                });
                if (that.onUpdate) that.onUpdate();
                function updateChart() {
                    chart.update();
                    if (that.xAxisLabelWrap) $fdccde0d4dd41d73$export$e85e6981b6330071({
                        axisSelector: svgSelector + " .nv-x.nv-axis",
                        maxWidth: that.marginLeft - 5,
                        maxHeight: that.barHeight
                    });
                    if (that.onUpdate) that.onUpdate();
                }
                $b76ad79e27dc7523$export$8698b599d6b7d9a0.utils.windowResize(updateChart);
                return chart;
            });
        };
        return _this;
    }
    return $8ff5b3d2c2ab6201$export$6d5fb309d07d7299;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);





var $26b66f4c4ad5f83b$export$dda19d2613327857 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($26b66f4c4ad5f83b$export$dda19d2613327857, Renderer);
    function $26b66f4c4ad5f83b$export$dda19d2613327857(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $26b66f4c4ad5f83b$export$dda19d2613327857);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($26b66f4c4ad5f83b$export$dda19d2613327857).call(this));
        _this.includeHeaderRow = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "includeHeaderRow", true);
        _this.valueFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueFormat", false);
        _this.labelFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "labelFormat", false);
        _this.headerFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "headerFormat", false);
        _this.seriesOrderFunction = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "seriesOrderFunction", false);
        _this.namespace = "edges-bs3-chartdatatable";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($26b66f4c4ad5f83b$export$dda19d2613327857, [
        {
            key: "draw",
            value: function draw() {
                if (!this.component.dataSeries) {
                    this.component.context.html("Loading...");
                    return;
                }
                var tableData = this._dataSeriesToTable();
                var headFrag = "";
                if (this.includeHeaderRow) {
                    for(var i = 0; i < tableData.head.length; i++){
                        var header = tableData.head[i];
                        headFrag += "<tr><td>" + header.join("</td><td>") + "</td></tr>";
                    }
                    headFrag = "<thead>".concat(headFrag, "</thead>");
                }
                var bodyFrag = "";
                for(var i = 0; i < tableData.body.length; i++){
                    var row = tableData.body[i];
                    bodyFrag += "<tr><td>" + row.join("</td><td>") + "</td></tr>";
                }
                var tableClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "table", this);
                var frag = "\n            <table class=\"".concat(tableClass, "\">\n                ").concat(headFrag, "\n                <tbody>").concat(bodyFrag, "</tbody>\n            </table>\n        ");
                this.component.context.html(frag);
            }
        },
        {
            key: "_dataSeriesToTable",
            value: function _dataSeriesToTable() {
                var ds = this.component.dataSeries;
                var table = {
                    head: [],
                    body: []
                };
                if (!ds || ds.length === 0) return table;
                if (this.seriesOrderFunction) ds = this.seriesOrderFunction(ds);
                var headers = [
                    ""
                ];
                for(var i = 0; i < ds.length; i++)headers.push(this._headerFormat(ds[i].key));
                table.head.push(headers);
                var ref = ds[0].values;
                for(var i1 = 0; i1 < ref.length; i1++){
                    var refEntry = ref[i1];
                    var row = [
                        this._labelFormat(refEntry.label)
                    ];
                    for(var j = 0; j < ds.length; j++)row.push(this._valueFormat(ds[j].values[i1].value));
                    table.body.push(row);
                }
                return table;
            }
        },
        {
            key: "_headerFormat",
            value: function _headerFormat(val) {
                if (!this.headerFormat) return val;
                return this.headerFormat(val);
            }
        },
        {
            key: "_labelFormat",
            value: function _labelFormat(val) {
                if (!this.labelFormat) return val;
                return this.labelFormat(val);
            }
        },
        {
            key: "_valueFormat",
            value: function _valueFormat(val) {
                if (!this.valueFormat) return val;
                return this.valueFormat(val);
            }
        }
    ]);
    return $26b66f4c4ad5f83b$export$dda19d2613327857;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);





var $9b74310943fd261d$export$f378f3259fa0dca8 = /*#__PURE__*/ function(Component) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($9b74310943fd261d$export$f378f3259fa0dca8, Component);
    function $9b74310943fd261d$export$f378f3259fa0dca8(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $9b74310943fd261d$export$f378f3259fa0dca8);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($9b74310943fd261d$export$f378f3259fa0dca8).call(this, params));
        _this.main = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "main", false);
        _this.second = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "second", false);
        _this.calculate = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "calculate", false);
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($9b74310943fd261d$export$f378f3259fa0dca8, [
        {
            key: "synchronise",
            value: function synchronise() {
                // note we don't reset the values, as if calculate isn't set, we just stick with the
                // values provided
                if (this.calculate !== false) {
                    var values = this.calculate(this);
                    this.main = values.main;
                    this.second = values.second;
                }
            }
        }
    ]);
    return $9b74310943fd261d$export$f378f3259fa0dca8;
}($6cf4dc301226cb87$export$ea71c44d9cb0d048);





var $420906a4991ac6e0$export$e26cebb6d948b61a = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($420906a4991ac6e0$export$e26cebb6d948b61a, Renderer);
    function $420906a4991ac6e0$export$e26cebb6d948b61a(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $420906a4991ac6e0$export$e26cebb6d948b61a);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($420906a4991ac6e0$export$e26cebb6d948b61a).call(this, params));
        _this.title = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "title", false);
        _this.backgroundImg = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "backgroundImg", false);
        _this.mainNumberFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "mainNumberFormat", false);
        _this.secondNumberFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "secondNumberFormat", false);
        _this.resizeHandler = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "resizeHandler", false);
        //////////////////////////////////////////////
        // variables for internal state
        _this.namespace = "edges-html-important-numbers";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($420906a4991ac6e0$export$e26cebb6d948b61a, [
        {
            key: "draw",
            value: function draw() {
                var containerClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "container", this);
                var graphicClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "graphic", this);
                var titleFrag = "";
                if (this.title !== false) {
                    var titleClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "title", this);
                    titleFrag = '<div class="' + titleClass + '">' + this.title + '</div>';
                }
                var backgroundFrag = "";
                if (this.backgroundImg !== false) {
                    var backgroundClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "img", this);
                    backgroundFrag += '<div class="' + backgroundClass + '"><img src="' + this.backgroundImg + '"></div>';
                }
                var mainFrag = "";
                if (this.component.main !== false) {
                    var val = this.component.main;
                    if (this.mainNumberFormat !== false) val = this.mainNumberFormat(val);
                    var mainClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "main", this);
                    mainFrag = '<div class="' + mainClass + '">' + val + '</div>';
                }
                var secondFrag = "";
                if (this.component.second !== false) {
                    var val = this.component.second;
                    if (this.secondNumberFormat !== false) val = this.secondNumberFormat(val);
                    var secondClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "second", this);
                    secondFrag = '<div class="' + secondClass + '">' + val + '</div>';
                }
                var frag = '<div class="' + containerClass + '">' + titleFrag + '<div class="' + graphicClass + '">' + backgroundFrag + mainFrag + '</div>' + secondFrag + '</div>';
                // and render into the page
                this.component.context.html(frag);
                // if there's a resize handler, call it and bind it
                if (this.resizeHandler) {
                    this.resizeHandler(this);
                    edges.on(window, "resize", this, "draw");
                }
            }
        }
    ]);
    return $420906a4991ac6e0$export$e26cebb6d948b61a;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);







var $e2db652327571723$export$aee0d0b293b2739 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($e2db652327571723$export$aee0d0b293b2739, Renderer);
    function $e2db652327571723$export$aee0d0b293b2739(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $e2db652327571723$export$aee0d0b293b2739);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($e2db652327571723$export$aee0d0b293b2739).call(this, params));
        _this.title = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "title", false);
        _this.useInteractiveGuideline = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "useInteractiveGuideline", true);
        _this.xTickFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xTickFormat", false);
        _this.yTickFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yTickFormat", false);
        _this.transitionDuration = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "transitionDuration", 500);
        _this.showLegend = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showLegend", true);
        _this.controls = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "controls", true);
        _this.color = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "color", false);
        _this.xAxisLabel = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xAxisLabel", "");
        _this.yAxisLabel = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yAxisLabel", "");
        _this.yAxisLabelDistance = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yAxisLabelDistance", 0);
        _this.marginTop = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginTop", 30);
        _this.marginRight = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginRight", 60);
        _this.marginBottom = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginBottom", 50);
        _this.marginLeft = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginLeft", 60);
        _this.namespace = "edges-nvd3-stacked-area-chart";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($e2db652327571723$export$aee0d0b293b2739, [
        {
            key: "draw",
            value: function draw() {
                var displayClasses = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "display", this);
                var displayFrag = "";
                if (this.title) displayFrag = '<span class="' + displayClasses + '">' + this.title + '</span><br>';
                var svgId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "svg", this);
                var svgSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "svg", this);
                this.component.context.html(displayFrag + '<svg id="' + svgId + '"></svg>');
                var data_series = this.component.dataSeries;
                if (!data_series) data_series = [];
                var ds = $fdccde0d4dd41d73$export$af206d707775bac7(data_series);
                var outer = this;
                nv.addGraph(function() {
                    var chart = nv.models.stackedAreaChart().useInteractiveGuideline(outer.useInteractiveGuideline).showLegend(outer.showLegend).margin({
                        top: outer.marginTop,
                        right: outer.marginRight,
                        bottom: outer.marginBottom,
                        left: outer.marginLeft
                    }).rightAlignYAxis(true).showControls(outer.controls).clipEdge(true).x(function(d) {
                        return d.x;
                    }).y(function(d) {
                        return d.y;
                    });
                    if (outer.color) chart.color(outer.color);
                    if (outer.xTickFormat) {
                        var fn = outer.xTickFormat;
                        if (typeof outer.xTickFormat === "string") fn = d3.format(outer.xTickFormat);
                        chart.xAxis.tickFormat(fn);
                    }
                    if (outer.yTickFormat) {
                        var fn = outer.yTickFormat;
                        if (typeof outer.yTickFormat === "string") fn = d3.format(outer.yTickFormat);
                        chart.yAxis.tickFormat(fn);
                    }
                    chart.xAxis.axisLabel(outer.xAxisLabel);
                    chart.yAxis.axisLabel(outer.yAxisLabel).axisLabelDistance(outer.yAxisLabelDistance);
                    d3.select(svgSelector).datum(ds).transition().duration(outer.transitionDuration).call(chart);
                    nv.utils.windowResize(chart.update);
                    return chart;
                });
            }
        }
    ]);
    return $e2db652327571723$export$aee0d0b293b2739;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);


function $4002aa3570a5e3f8$export$8e8129eda99077(sheetName, paletteSelector) {
    if (!paletteSelector) paletteSelector = "#palette";
    var palette = {
    };
    for(var i = 0; i < document.styleSheets.length; i++){
        var sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.includes(sheetName)) for(var j = 0; j < sheet.rules.length; j++){
            var rule = sheet.rules[j];
            if (rule.selectorText && rule.selectorText && rule.selectorText.startsWith(paletteSelector + " ")) {
                var key = rule.selectorText.substring(paletteSelector.length + 2);
                palette[key] = rule.style.color;
            }
        }
    }
    return palette;
}
var $4002aa3570a5e3f8$var$DEMO_CONTAINERS = {
    "1531-7714": "Practical assessment, research & evaluation",
    "2604-7438": "Translat library",
    "0024-7766": "Lymphology"
};
function $4002aa3570a5e3f8$export$4bd2ebaeac3531b0(containers) {
    var meta = {
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var c = _step.value;
            meta[c] = {
                title: c in $4002aa3570a5e3f8$var$DEMO_CONTAINERS ? $4002aa3570a5e3f8$var$DEMO_CONTAINERS[c] : "Unknown title"
            };
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return meta;
}


$parcel$global.nglp = {
};
nglp.g014 = {
    active: {
    }
};
nglp.g014.init = function(params) {
    if (!params) params = {
    };
    var selector = params.selector || "#g014";
    var search_url = params.searchUrl;
    var countFormat = $d48cc3604bf30e24$export$48334dba1de70fbe({
        thousandsSeparator: ","
    });
    var stateProgression = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "stateProgression", [
        [
            "submit",
            "Submitted"
        ],
        [
            "first_decision",
            "First Decision"
        ],
        [
            "review",
            "Reviewed"
        ],
        [
            "accept",
            "Accepted"
        ],
        [
            "publish",
            "Published"
        ]
    ]);
    // FIXME: if there's no source we default to the test source, which is probably
    // fine but a bit weird
    var source = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "source", "http://cottagelabs.com");
    var wfPalette = $4002aa3570a5e3f8$export$8e8129eda99077("g014.css", "#workflowpalette");
    var wfPaletteKeys = Object.keys(wfPalette);
    wfPaletteKeys = wfPaletteKeys.sort();
    // distribute the palette cyclically over the state progressions
    for(var i = 0; i < stateProgression.length; i++){
        var state = stateProgression[i];
        state.push(wfPalette[wfPaletteKeys[i % wfPaletteKeys.length]]);
    }
    var agePalette = $4002aa3570a5e3f8$export$8e8129eda99077("g014.css", "#agepalette");
    var agePaletteKeys = Object.keys(agePalette);
    agePaletteKeys = agePaletteKeys.sort();
    var ageBarColours = [];
    for(var i1 = 0; i1 < agePaletteKeys.length; i1++)ageBarColours.push(agePalette[agePaletteKeys[i1]]);
    // Current workflow load
    var currentComponents = [];
    for(var i2 = 0; i2 < stateProgression.length; i2++)currentComponents.push(new $9b74310943fd261d$export$f378f3259fa0dca8({
        id: "g014-total-" + stateProgression[i2][0],
        calculate: function(state) {
            return function(component) {
                var agg = component.edge.result.aggregation("states");
                for(var i3 = 0; i3 < agg.buckets.length; i3++){
                    var bucket = agg.buckets[i3];
                    if (bucket.key === state) return {
                        main: bucket.doc_count,
                        second: false
                    };
                }
                return {
                    main: 0,
                    second: false
                };
            };
        }(stateProgression[i2][0]),
        renderer: new $420906a4991ac6e0$export$e26cebb6d948b61a({
            mainNumberFormat: countFormat
        })
    }));
    var transitionComponents = [];
    for(var i3 = 0; i3 < stateProgression.length - 1; i3++)transitionComponents.push(new $9b74310943fd261d$export$f378f3259fa0dca8({
        id: "g014-mean-" + stateProgression[i3][0],
        calculate: function(state) {
            var secondsPerDay = 86400;
            return function(component) {
                var agg = component.edge.secondaryResults["transitions"].aggregation("states");
                for(var i4 = 0; i4 < agg.buckets.length; i4++){
                    var bucket = agg.buckets[i4];
                    if (bucket.key === state) return {
                        main: Math.ceil(bucket.time.avg / secondsPerDay),
                        second: false
                    };
                }
                return {
                    main: 0,
                    second: false
                };
            };
        }(stateProgression[i3][0]),
        renderer: new $420906a4991ac6e0$export$e26cebb6d948b61a({
            mainNumberFormat: function mainNumberFormat(num) {
                return countFormat(num) + " days";
            }
        })
    }));
    // Note: I've moved this out to a separate function, because the parcel compiler
    // was having trouble with it inline (for reasons unknown https://github.com/parcel-bundler/parcel/issues/7252 )
    var ageComponents = $6ec8c71f816e3f1f$var$getAgeComponents(stateProgression, countFormat, ageBarColours);
    // workflow capacity
    var yearmillis = 31536000000;
    var yearago = new Date(new Date().getTime() - yearmillis);
    var ranges = $6ec8c71f816e3f1f$var$rangeGenerator({
        start: yearago,
        end: new Date()
    });
    var filters = {
    };
    for(var i4 = 0; i4 < ranges.length; i4++){
        var range = ranges[i4];
        filters[range.start_millis.toString()] = {
            "bool": {
                "must": [
                    {
                        "range": {
                            "occurred_at": {
                                "lte": range.end
                            }
                        }
                    }
                ],
                "must_not": [
                    {
                        "range": {
                            "workflow.followed_by.date": {
                                "lte": range.start
                            }
                        }
                    }
                ]
            }
        };
    }
    var workflowComponents = [
        new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
            id: "g014-workflow-capacity-chart",
            dataFunction: $6ec8c71f816e3f1f$var$workflowCapacityDataFunction,
            renderer: new $e2db652327571723$export$aee0d0b293b2739({
                xTickFormat: function xTickFormat(d) {
                    return d3.time.format('%B %Y')(new Date(d));
                },
                controls: false,
                showLegend: false,
                color: function color(d, i5) {
                    for(var j = 0; j < stateProgression.length; j++){
                        var state = stateProgression[j];
                        if (state[0] === d.key) return state[2];
                    }
                }
            })
        }),
        new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
            id: "g014-workflow-capacity-table",
            dataFunction: $6ec8c71f816e3f1f$var$workflowCapacityDataFunction,
            renderer: new $26b66f4c4ad5f83b$export$dda19d2613327857({
                labelFormat: function labelFormat(d) {
                    return d3.time.format('%b %y')(new Date(d));
                },
                valueFormat: countFormat,
                headerFormat: function headerFormat(d) {
                    for(var i5 = 0; i5 < stateProgression.length; i5++){
                        var state = stateProgression[i5];
                        if (state[0] === d) return state[1];
                    }
                    return d;
                }
            })
        })
    ];
    var baseQueryMusts = [
        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
            field: "source.identifier.exact",
            values: [
                source
            ]
        }),
        new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
            field: "occurred_at",
            lte: $6ec8c71f816e3f1f$var$isoDateStr(new Date())
        })
    ];
    if (params.containers) baseQueryMusts.push(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
        field: "container.exact",
        values: params.containers
    }));
    var baseQueryShoulds = [
        new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
            field: "workflow.followed_by.date",
            gte: $6ec8c71f816e3f1f$var$isoDateStr(new Date())
        }),
        new $8d94b5f2509b6cf5$export$8b446892c82de644.BoolFilter({
            mustNot: [
                new $8d94b5f2509b6cf5$export$8b446892c82de644.ExistsFilter({
                    field: "workflow.followed_by.state"
                })
            ]
        })
    ];
    nglp.g014.active[selector] = new $6cf4dc301226cb87$export$22ad9a5707a07e9c({
        selector: selector,
        template: new nglp.g014.G014Template({
            stateProgression: stateProgression,
            containers: params.containers
        }),
        searchUrl: search_url,
        manageUrl: false,
        baseQuery: new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
            must: baseQueryMusts,
            should: baseQueryShoulds,
            minimumShouldMatch: baseQueryShoulds.length > 0 ? 1 : false
        }),
        openingQuery: new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
            must: [
                new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: "category.exact",
                    values: [
                        "workflow"
                    ]
                }),
                new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: "object_type.exact",
                    values: [
                        "article"
                    ]
                }), 
            ],
            // mustNot : [
            //     new es.ExistsFilter({field: "workflow.followed_by.state"})
            // ],
            size: 0,
            aggs: [
                new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation({
                    name: "states",
                    field: "event.exact",
                    size: stateProgression.length,
                    aggs: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.DateHistogramAggregation({
                            name: "age",
                            field: "occurred_at"
                        }),
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.FiltersAggregation({
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
            "transitions": function(edge) {
                return new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
                    must: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                            field: "category.exact",
                            values: [
                                "workflow"
                            ]
                        }),
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                            field: "object_type.exact",
                            values: [
                                "article"
                            ]
                        }),
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.ExistsFilter({
                            field: "workflow.follows.state"
                        }),
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
                            field: "occurred_at",
                            lte: $6ec8c71f816e3f1f$var$isoDateStr(new Date())
                        })
                    ],
                    size: 0,
                    aggs: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation({
                            name: "states",
                            field: "workflow.follows.state.exact",
                            size: stateProgression.length,
                            aggs: [
                                new $8d94b5f2509b6cf5$export$8b446892c82de644.StatsAggregation({
                                    name: "time",
                                    field: "workflow.follows.transition_time"
                                })
                            ]
                        })
                    ]
                });
            },
            "capacity": function(edge) {
                return new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
                    must: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                            field: "category.exact",
                            values: [
                                "workflow"
                            ]
                        }),
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                            field: "object_type.exact",
                            values: [
                                "article"
                            ]
                        }),
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
                            field: "occurred_at",
                            lte: $6ec8c71f816e3f1f$var$isoDateStr(new Date())
                        })
                    ],
                    size: 0,
                    aggs: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation({
                            name: "states",
                            field: "event.exact",
                            size: stateProgression.length,
                            aggs: [
                                new $8d94b5f2509b6cf5$export$8b446892c82de644.FiltersAggregation({
                                    name: "time",
                                    filters: filters
                                })
                            ]
                        })
                    ]
                });
            }
        },
        components: currentComponents.concat(transitionComponents).concat(ageComponents).concat(workflowComponents)
    });
};
nglp.g014.G014Template = /*#__PURE__*/ (function(Template) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c(_class, Template);
    function _class(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this));
        _this.edge = false;
        _this.showingAge = "chart";
        _this.showingCapacity = "chart";
        _this.namespace = "g014-template";
        _this.stateProgression = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "stateProgression", []);
        _this.containers = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "containers", false);
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
        {
            key: "draw",
            value: function draw(edge) {
                this.edge = edge;
                var ageId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "age-show-as-table");
                var capacityId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "capacity-show-as-table");
                var capacityLegendId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "capacity-legend--container");
                var printId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "print");
                var tableClasses = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "stats");
                var ageChartClasses = $d48cc3604bf30e24$export$e516ebba864be69d(this.namespace, "age-chart");
                var ageTableClasses = $d48cc3604bf30e24$export$5be7444ab39fbaa3(this.namespace, "age-table");
                var legendClasses = $d48cc3604bf30e24$export$e516ebba864be69d(this.namespace, "legend");
                var legendBoxClasses = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "legend-box");
                var showAsTableClasses = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "sat");
                var tableRows = "";
                for(var i = 0; i < this.stateProgression.length; i++){
                    var state = this.stateProgression[i];
                    tableRows += "\n                <tr>\n                    <td>".concat(state[1], "</td>\n                    <td id=\"g014-total-").concat(state[0], "\"></td>\n                    <td id=\"g014-mean-").concat(state[0], "\"></td>\n                    <td>\n                        <div id=\"g014-age-chart-").concat(state[0], "\" class=\"").concat(ageChartClasses, "\"></div>\n                        <div id=\"g014-age-table-").concat(state[0], "\" class=\"").concat(ageTableClasses, "\" style=\"display:none\"></div>\n                    </td>\n                </tr>\n            ");
                }
                var capacityChartLegend = "";
                for(var i1 = 0; i1 < this.stateProgression.length; i1++){
                    var state = this.stateProgression[i1];
                    capacityChartLegend += "\n                <div class=\"".concat(legendClasses, "\">\n                    <div class=\"").concat(legendBoxClasses, "\"><span style=\"color: ").concat(state[2], ";\">&#9632;</span><span class=\"").concat(legendBoxClasses, "-label\">").concat(state[1], "</span></div>\n                </div>\n            ");
                }
                var containersFrag = "";
                if (this.containers) {
                    var containersMeta = $4002aa3570a5e3f8$export$4bd2ebaeac3531b0(this.containers);
                    var containersFrags = [];
                    for(var ident in containersMeta)containersFrags.push("'" + containersMeta[ident].title + "' (id:" + ident + ")");
                    containersFrag = "<h3>Showing data for ".concat(containersFrags.join(", "), "</h3>");
                }
                var frame = "\n<div id=\"divToPrint\">\n    <div class=\"header header--main\">\n        <div class=\"container\">   \n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h1>G014: Progress of articles through the editorial workflow</h1>\n                    ".concat(containersFrag, "\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"header header--secondary\">\n        <div class=\"container\">\n            <nav class=\"navbar\">\n                <div class=\"navbar navbar-default\">\n                    <ul class=\"nav navbar-nav\">\n                        <!-- <li>\n                            <a class=\"nav-link\" href=\"#\">Go back to Dashboard</a>\n                        </li>\n                        <li>\n                            <a class=\"nav-link\" id=\"").concat(printId, "\" href=\"#\">Print this view</a>\n                        </li> -->\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row report-area justify-content-between\">\n            <div class=\"col-md-12\">\n                <div>\n                    <h3 class=\"data-label\">Statistics per workflow state</h3>\n                    <table class=\"").concat(tableClasses, " data-area\">\n                        <thead>\n                            <tr>\n                                <td></td>\n                                <td>In Total Today</td>\n                                <td>Mean Time to Progress</td>\n                                <td>\n                                    Age of Items<br/>\n                                    <input type=\"checkbox\" name=\"").concat(ageId, "\" id=\"").concat(ageId, "\" class=\"css-checkbox brand\"><label class=\"css-label brand\" for=\"").concat(ageId, "\">Show as table</label>\n                                </td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            ").concat(tableRows, "\n                        </tbody>\n                    </table>\n                </div>\n                <div>\n                    <h3 class=\"data-label\">Workflow Capacity</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <input type=\"checkbox\" name=\"").concat(capacityId, "\" id=\"").concat(capacityId, "\" class=\"css-checkbox brand\"><label class=\"css-label brand\" for=\"").concat(capacityId, "\">Show as table</label>\n                        </div>\n                    </div>\n                    <div class=\"row\" class=\"").concat(showAsTableClasses, "\" id=\"g014-workflow-capacity-chart--container\">\n                        <div class=\"col-md-2\">\n                            <div id=\"").concat(capacityLegendId, "\">\n                                ").concat(capacityChartLegend, "\n                            </div>  \n                        </div>\n                        <div class=\"col-md-10\">\n                            <div class=\"data-area\" id=\"g014-workflow-capacity-chart\"></div>\n                        </div>\n                    </div>\n                    <div class=\"row\" id=\"g014-workflow-capacity-table--container\" style=\"display: none\">\n                        <div class=\"col-md-12\">\n                            <div class=\"data-area\" id=\"g014-workflow-capacity-table\"></div>\n                        </div>\n                    </div>\n                </div>\n            \n            </div>\n        </div>\n    </div>\n</div>");
                edge.context.html(frame);
                var ageSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "age-show-as-table");
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(ageSelector, "change", this, "toggleAgeTables");
                var capacitySelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "capacity-show-as-table");
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(capacitySelector, "change", this, "toggleCapacityTable");
                var printBtn = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "print");
                $99b6183ba65dae12$export$4048ae5fe51d81b7(printBtn).on("click", function(e) {
                    e.preventDefault();
                    // window.print();
                    var win = window.open('', '', 'left=0,top=0,toolbar=0,status =0');
                    var content = "<html>";
                    content += "\n            <head>\n                <link rel=\"stylesheet\" href=\"../sass/g001.scss\" />\n                <link rel=\"stylesheet\" href=\"../vendor/edges2/vendor/nvd3-1.8.6/nv.d3.css\" />\n            </head>";
                    content += "<body onload=\"window.print(); window.close();\">";
                    content += document.getElementById("divToPrint").innerHTML;
                    content += "</body>";
                    content += "</html>";
                    win.document.write(content);
                    win.document.close();
                });
            }
        },
        {
            key: "toggleCapacityTable",
            value: function toggleCapacityTable() {
                var legendSelector = $d48cc3604bf30e24$export$b1157bd4df096bce(this.namespace, "legend");
                var chart = this.edge.jq("#g014-workflow-capacity-chart--container");
                var table = this.edge.jq("#g014-workflow-capacity-table--container");
                var legend = this.edge.jq(legendSelector);
                if (this.showingCapacity === "chart") {
                    chart.hide();
                    table.show();
                    this.showingCapacity = "table";
                } else {
                    table.hide();
                    chart.show();
                    this.showingCapacity = "chart";
                }
            }
        },
        {
            key: "toggleAgeTables",
            value: function toggleAgeTables() {
                var chartSelector = $d48cc3604bf30e24$export$b1157bd4df096bce(this.namespace, "age-chart");
                var tableSelector = $d48cc3604bf30e24$export$b1157bd4df096bce(this.namespace, "age-table");
                var charts = this.edge.jq(chartSelector);
                var tables = this.edge.jq(tableSelector);
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
    ]);
    return _class;
})($6cf4dc301226cb87$export$93af88fe68eea917);
function $6ec8c71f816e3f1f$var$stateDataFunction(state) {
    var now = new Date();
    var month = 2592000000;
    var ageRanges = [
        {
            label: "<1 m",
            gte: now.getTime() - month
        },
        {
            label: "1-2 m",
            gte: now.getTime() - 2 * month,
            lt: now.getTime() - month
        },
        {
            label: "2-3 m",
            gte: now.getTime() - 3 * month,
            lt: now.getTime() - 2 * month
        },
        {
            label: "3-4 m",
            gte: now.getTime() - 4 * month,
            lt: now.getTime() - 3 * month
        },
        {
            label: "4-5 m",
            gte: now.getTime() - 5 * month,
            lt: now.getTime() - 4 * month
        },
        {
            label: ">5 m",
            lt: now.getTime() - 5 * month
        }
    ];
    return function(component) {
        var histogram = false;
        var states = component.edge.result.aggregation("states");
        var values = [];
        for(var i = 0; i < states.buckets.length; i++){
            var bucket = states.buckets[i];
            if (bucket.key === state) {
                histogram = bucket.age;
                break;
            }
        }
        if (histogram) for(var i1 = 0; i1 < ageRanges.length; i1++){
            var range = ageRanges[i1];
            var found = false;
            for(var j = 0; j < histogram.buckets.length; j++){
                var bucket = histogram.buckets[j];
                if ((range.gte && bucket.key >= range.gte || !range.gte) && (range.lt && bucket.key < range.lt || !range.lt)) {
                    var existingLabel = false;
                    for(var k = 0; k < values.length; k++)if (values[k].label === range.label) {
                        values[k].value += bucket.doc_count;
                        existingLabel = true;
                    }
                    if (!existingLabel) values.push({
                        label: range.label,
                        value: bucket.doc_count
                    });
                    found = true;
                }
            }
            if (!found) values.push({
                label: range.label,
                value: 0
            });
        }
        else for(var k = 0; k < ageRanges.length - 1; k++)values.push({
            label: ageRanges[k].label,
            value: 0
        });
        return [
            {
                key: state,
                values: values
            }
        ];
    };
}
function $6ec8c71f816e3f1f$var$getAgeComponents(stateProgression, countFormat, ageBarColours) {
    // Age distribution
    var ageComponents = [];
    for(var j = 0; j < stateProgression.length; j++){
        ageComponents.push(new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
            id: "g014-age-chart-" + stateProgression[j][0],
            dataFunction: $6ec8c71f816e3f1f$var$stateDataFunction(stateProgression[j][0]),
            renderer: new $8ff5b3d2c2ab6201$export$6d5fb309d07d7299({
                legend: false,
                controls: false,
                valueFormat: countFormat,
                marginLeft: 80,
                marginTop: 10,
                marginBottom: 10,
                marginRight: 0,
                barColor: ageBarColours
            })
        }));
        ageComponents.push(new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
            id: "g014-age-table-" + stateProgression[j][0],
            dataFunction: $6ec8c71f816e3f1f$var$stateDataFunction(stateProgression[j][0]),
            renderer: new $26b66f4c4ad5f83b$export$dda19d2613327857({
                valueFormat: countFormat,
                includeHeaderRow: false
            })
        }));
    }
    return ageComponents;
}
function $6ec8c71f816e3f1f$var$rangeGenerator(params) {
    var start = params.start;
    var end = params.end;
    var count = params.count;
    var padder = $d48cc3604bf30e24$export$48334dba1de70fbe({
        zeroPadding: 2
    });
    var startiso = start.getUTCFullYear() + "-" + padder(start.getUTCMonth() + 1) + "-01T00:00:00Z";
    var points = [
        startiso
    ];
    var offset = 1;
    var startYear = start.getUTCFullYear();
    var startMonth = start.getUTCMonth() + 1;
    while(true){
        var newYear = startYear;
        var newMonth = startMonth + offset;
        offset++;
        if (newMonth > 12) {
            startMonth = 1;
            newMonth = 1;
            newYear++;
            startYear++;
            offset = 1;
        }
        points.push(newYear + "-" + padder(newMonth) + "-01T00:00:00Z");
        if (new Date(points[points.length - 1]) > end) break;
    }
    var ranges = [];
    for(var i = 0; i < points.length - 1; i++)ranges.push({
        start_millis: new Date(points[i]).getTime(),
        end_millis: new Date(points[i + 1]).getTime(),
        start: points[i],
        end: points[i + 1]
    });
    return ranges;
}
function $6ec8c71f816e3f1f$var$isoDateStr(date) {
    var padder = $d48cc3604bf30e24$export$48334dba1de70fbe({
        zeroPadding: 2
    });
    var y = date.getUTCFullYear();
    var m = date.getUTCMonth();
    var d = date.getUTCDate();
    var H = date.getUTCHours();
    var M = date.getUTCMinutes();
    var S = date.getUTCSeconds();
    m = padder(m + 1);
    d = padder(d);
    H = padder(H);
    M = padder(M);
    S = padder(S);
    return y + "-" + m + "-" + d + "T" + H + ":" + M + ":" + S + "Z";
}
function $6ec8c71f816e3f1f$var$workflowCapacityDataFunction(component) {
    var dataset = [];
    var states = component.edge.secondaryResults["capacity"].aggregation("states");
    for(var i = 0; i < states.buckets.length; i++){
        var bucket = states.buckets[i];
        var keys = Object.keys(bucket.time.buckets);
        keys.sort();
        var values = [];
        for(var j = 0; j < keys.length; j++){
            var cap = bucket.time.buckets[keys[j]];
            var pair = {
                label: parseInt(keys[j]),
                value: cap.doc_count
            };
            values.push(pair);
        }
        var series = {
            key: bucket.key,
            values: values
        };
        dataset.push(series);
    }
    return dataset;
}
var $6ec8c71f816e3f1f$export$9099ad97b570f7c = nglp;

})();
//# sourceMappingURL=g014.js.map
