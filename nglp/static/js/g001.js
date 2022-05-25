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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
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
        this.type_name = params.type_name;
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
                if (other.type_name !== this.type_name) return false;
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
            // defaults from properties that will be set through their setters (see the bottom
            // of the function)
            this.queryString = false;
            this.sort = [];
            // ones that we haven't used yet, so are awaiting implementation
            // NOTE: once we implement these, they also need to be considered in merge()
            this.source = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.source, false);
            this.should = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.should, []);
            this.partialFields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.partialField, false);
            this.scriptFields = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.scriptFields, false);
            this.minimumShouldMatch = $8d94b5f2509b6cf5$export$8b446892c82de644.getParam(params.minimumShouldMatch, false);
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




var $bccd1ba82d89ceaa$export$137cea99ac96085 = window.moment;






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


var $f29180d7a0e96438$export$1b75c0a6cacf635c = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($f29180d7a0e96438$export$1b75c0a6cacf635c, Renderer);
    function $f29180d7a0e96438$export$1b75c0a6cacf635c(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $f29180d7a0e96438$export$1b75c0a6cacf635c);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($f29180d7a0e96438$export$1b75c0a6cacf635c).call(this, params));
        _this.xTickFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xTickFormat", ",.2f");
        _this.yTickFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yTickFormat", ",.2f");
        _this.stacked = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "stacked", false);
        _this.groupSpacing = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "groupSpacing", 0.1);
        _this.transitionDuration = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "transitionDuration", 500);
        _this.controls = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "controls", false);
        _this.barColor = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "barColor", false);
        _this.color = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "color", false);
        _this.showLegend = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showLegend", true);
        _this.xAxisLabel = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "xAxisLabel", "");
        _this.yAxisLabel = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yAxisLabel", "");
        _this.yAxisLabelDistance = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "yAxisLabelDistance", 0);
        _this.marginTop = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginTop", 30);
        _this.marginRight = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginRight", 20);
        _this.marginBottom = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginBottom", 50);
        _this.marginLeft = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "marginLeft", 60);
        _this.hideIfNoData = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "hideIfNoData", false);
        _this.onHide = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "onHide", false);
        _this.onShow = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "onShow", false);
        _this.namespace = "edges-nvd3-multibar";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($f29180d7a0e96438$export$1b75c0a6cacf635c, [
        {
            key: "draw",
            value: function draw() {
                // first sort out the data series
                var data_series = this.component.dataSeries;
                if (!data_series) data_series = [];
                data_series = $fdccde0d4dd41d73$export$af206d707775bac7(this.component.dataSeries);
                // now decide if we are going to continue
                if (this.hideIfNoData) {
                    if (!$fdccde0d4dd41d73$export$e89b2486fe14568(data_series)) {
                        this.component.context.html("");
                        this.component.context.hide();
                        if (this.onHide) this.onHide();
                        return;
                    }
                    this.component.context.show();
                    if (this.onShow) this.onShow();
                }
                var svgId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "svg", this);
                var svgSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "svg", this);
                this.component.context.html('<svg id="' + svgId + '"></svg>');
                var that = this;
                $b76ad79e27dc7523$export$8698b599d6b7d9a0.addGraph(function() {
                    var chart = $b76ad79e27dc7523$export$8698b599d6b7d9a0.models.multiBarChart().showControls(that.controls).margin({
                        top: that.marginTop,
                        right: that.marginRight,
                        bottom: that.marginBottom,
                        left: that.marginLeft
                    }).stacked(that.stacked).groupSpacing(that.groupSpacing);
                    chart.xAxis.axisLabel(that.xAxisLabel);
                    if (that.xTickFormat) {
                        var fn = that.xTickFormat;
                        if (typeof that.xTickFormat === "string") fn = $f5a419d63f8f3762$export$6343839093e1c21d.format(that.xTickFormat);
                        chart.xAxis.tickFormat(fn);
                    }
                    chart.yAxis.axisLabel(that.yAxisLabel).axisLabelDistance(that.yAxisLabelDistance);
                    if (that.yTickFormat) {
                        var fn = that.yTickFormat;
                        if (typeof that.yTickFormat === "string") fn = $f5a419d63f8f3762$export$6343839093e1c21d.format(that.yTickFormat);
                        chart.yAxis.tickFormat(fn);
                    }
                    if (that.barColor) chart.barColor(that.barColor);
                    if (that.color) chart.color(that.color);
                    chart.showLegend(that.showLegend);
                    $f5a419d63f8f3762$export$6343839093e1c21d.select(svgSelector).datum(data_series).transition().duration(that.transitionDuration).call(chart);
                    $b76ad79e27dc7523$export$8698b599d6b7d9a0.utils.windowResize(chart.update);
                    return chart;
                });
            }
        }
    ]);
    return $f29180d7a0e96438$export$1b75c0a6cacf635c;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);







function $2de4fa00a47777f3$export$9b1f0f098143fb9(locations) {
    return {
        lat: locations[0].lat,
        lon: locations[0].lon
    };
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */ /* Geohash encoding/decoding and associated functions   (c) Chris Veness 2014-2019 / MIT Licence  */ /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */ const $be7a76b3305d5aac$var$base32 = '0123456789bcdefghjkmnpqrstuvwxyz'; // (geohash-specific) Base32 map
/**
 * Geohash: Gustavo Niemeyer’s geocoding system.
 */ class $be7a76b3305d5aac$var$Geohash {
    /**
     * Encodes latitude/longitude to geohash, either to specified precision or to automatically
     * evaluated precision.
     *
     * @param   {number} lat - Latitude in degrees.
     * @param   {number} lon - Longitude in degrees.
     * @param   {number} [precision] - Number of characters in resulting geohash.
     * @returns {string} Geohash of supplied latitude/longitude.
     * @throws  Invalid geohash.
     *
     * @example
     *     const geohash = Geohash.encode(52.205, 0.119, 7); // => 'u120fxw'
     */ static encode(lat, lon, precision) {
        // infer precision?
        if (typeof precision == 'undefined') {
            // refine geohash until it matches precision of supplied lat/lon
            for(let p = 1; p <= 12; p++){
                const hash = $be7a76b3305d5aac$var$Geohash.encode(lat, lon, p);
                const posn = $be7a76b3305d5aac$var$Geohash.decode(hash);
                if (posn.lat == lat && posn.lon == lon) return hash;
            }
            precision = 12; // set to maximum
        }
        lat = Number(lat);
        lon = Number(lon);
        precision = Number(precision);
        if (isNaN(lat) || isNaN(lon) || isNaN(precision)) throw new Error('Invalid geohash');
        let idx = 0; // index into base32 map
        let bit = 0; // each char holds 5 bits
        let evenBit = true;
        let geohash = '';
        let latMin = -90, latMax = 90;
        let lonMin = -180, lonMax = 180;
        while(geohash.length < precision){
            if (evenBit) {
                // bisect E-W longitude
                const lonMid = (lonMin + lonMax) / 2;
                if (lon >= lonMid) {
                    idx = idx * 2 + 1;
                    lonMin = lonMid;
                } else {
                    idx = idx * 2;
                    lonMax = lonMid;
                }
            } else {
                // bisect N-S latitude
                const latMid = (latMin + latMax) / 2;
                if (lat >= latMid) {
                    idx = idx * 2 + 1;
                    latMin = latMid;
                } else {
                    idx = idx * 2;
                    latMax = latMid;
                }
            }
            evenBit = !evenBit;
            if ((++bit) == 5) {
                // 5 bits gives us a character: append it and start over
                geohash += $be7a76b3305d5aac$var$base32.charAt(idx);
                bit = 0;
                idx = 0;
            }
        }
        return geohash;
    }
    /**
     * Decode geohash to latitude/longitude (location is approximate centre of geohash cell,
     *     to reasonable precision).
     *
     * @param   {string} geohash - Geohash string to be converted to latitude/longitude.
     * @returns {{lat:number, lon:number}} (Center of) geohashed location.
     * @throws  Invalid geohash.
     *
     * @example
     *     const latlon = Geohash.decode('u120fxw'); // => { lat: 52.205, lon: 0.1188 }
     */ static decode(geohash) {
        const bounds = $be7a76b3305d5aac$var$Geohash.bounds(geohash); // <-- the hard work
        // now just determine the centre of the cell...
        const latMin = bounds.sw.lat, lonMin = bounds.sw.lon;
        const latMax = bounds.ne.lat, lonMax = bounds.ne.lon;
        // cell centre
        let lat = (latMin + latMax) / 2;
        let lon = (lonMin + lonMax) / 2;
        // round to close to centre without excessive precision: ⌊2-log10(Δ°)⌋ decimal places
        lat = lat.toFixed(Math.floor(2 - Math.log(latMax - latMin) / Math.LN10));
        lon = lon.toFixed(Math.floor(2 - Math.log(lonMax - lonMin) / Math.LN10));
        return {
            lat: Number(lat),
            lon: Number(lon)
        };
    }
    /**
     * Returns SW/NE latitude/longitude bounds of specified geohash.
     *
     * @param   {string} geohash - Cell that bounds are required of.
     * @returns {{sw: {lat: number, lon: number}, ne: {lat: number, lon: number}}}
     * @throws  Invalid geohash.
     */ static bounds(geohash) {
        if (geohash.length == 0) throw new Error('Invalid geohash');
        geohash = geohash.toLowerCase();
        let evenBit = true;
        let latMin = -90, latMax = 90;
        let lonMin = -180, lonMax = 180;
        for(let i = 0; i < geohash.length; i++){
            const chr = geohash.charAt(i);
            const idx = $be7a76b3305d5aac$var$base32.indexOf(chr);
            if (idx == -1) throw new Error('Invalid geohash');
            for(let n = 4; n >= 0; n--){
                const bitN = idx >> n & 1;
                if (evenBit) {
                    // longitude
                    const lonMid = (lonMin + lonMax) / 2;
                    if (bitN == 1) lonMin = lonMid;
                    else lonMax = lonMid;
                } else {
                    // latitude
                    const latMid = (latMin + latMax) / 2;
                    if (bitN == 1) latMin = latMid;
                    else latMax = latMid;
                }
                evenBit = !evenBit;
            }
        }
        const bounds = {
            sw: {
                lat: latMin,
                lon: lonMin
            },
            ne: {
                lat: latMax,
                lon: lonMax
            }
        };
        return bounds;
    }
    /**
     * Determines adjacent cell in given direction.
     *
     * @param   geohash - Cell to which adjacent cell is required.
     * @param   direction - Direction from geohash (N/S/E/W).
     * @returns {string} Geocode of adjacent cell.
     * @throws  Invalid geohash.
     */ static adjacent(geohash, direction) {
        // based on github.com/davetroy/geohash-js
        geohash = geohash.toLowerCase();
        direction = direction.toLowerCase();
        if (geohash.length == 0) throw new Error('Invalid geohash');
        if ('nsew'.indexOf(direction) == -1) throw new Error('Invalid direction');
        const neighbour = {
            n: [
                'p0r21436x8zb9dcf5h7kjnmqesgutwvy',
                'bc01fg45238967deuvhjyznpkmstqrwx'
            ],
            s: [
                '14365h7k9dcfesgujnmqp0r2twvyx8zb',
                '238967debc01fg45kmstqrwxuvhjyznp'
            ],
            e: [
                'bc01fg45238967deuvhjyznpkmstqrwx',
                'p0r21436x8zb9dcf5h7kjnmqesgutwvy'
            ],
            w: [
                '238967debc01fg45kmstqrwxuvhjyznp',
                '14365h7k9dcfesgujnmqp0r2twvyx8zb'
            ]
        };
        const border = {
            n: [
                'prxz',
                'bcfguvyz'
            ],
            s: [
                '028b',
                '0145hjnp'
            ],
            e: [
                'bcfguvyz',
                'prxz'
            ],
            w: [
                '0145hjnp',
                '028b'
            ]
        };
        const lastCh = geohash.slice(-1); // last character of hash
        let parent = geohash.slice(0, -1); // hash without last character
        const type = geohash.length % 2;
        // check for edge-cases which don't share common prefix
        if (border[direction][type].indexOf(lastCh) != -1 && parent != '') parent = $be7a76b3305d5aac$var$Geohash.adjacent(parent, direction);
        // append letter for direction to parent
        return parent + $be7a76b3305d5aac$var$base32.charAt(neighbour[direction][type].indexOf(lastCh));
    }
    /**
     * Returns all 8 adjacent cells to specified geohash.
     *
     * @param   {string} geohash - Geohash neighbours are required of.
     * @returns {{n,ne,e,se,s,sw,w,nw: string}}
     * @throws  Invalid geohash.
     */ static neighbours(geohash) {
        return {
            'n': $be7a76b3305d5aac$var$Geohash.adjacent(geohash, 'n'),
            'ne': $be7a76b3305d5aac$var$Geohash.adjacent($be7a76b3305d5aac$var$Geohash.adjacent(geohash, 'n'), 'e'),
            'e': $be7a76b3305d5aac$var$Geohash.adjacent(geohash, 'e'),
            'se': $be7a76b3305d5aac$var$Geohash.adjacent($be7a76b3305d5aac$var$Geohash.adjacent(geohash, 's'), 'e'),
            's': $be7a76b3305d5aac$var$Geohash.adjacent(geohash, 's'),
            'sw': $be7a76b3305d5aac$var$Geohash.adjacent($be7a76b3305d5aac$var$Geohash.adjacent(geohash, 's'), 'w'),
            'w': $be7a76b3305d5aac$var$Geohash.adjacent(geohash, 'w'),
            'nw': $be7a76b3305d5aac$var$Geohash.adjacent($be7a76b3305d5aac$var$Geohash.adjacent(geohash, 'n'), 'w')
        };
    }
}
var /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */ $be7a76b3305d5aac$export$9099ad97b570f7c = $be7a76b3305d5aac$var$Geohash;


var $7ac4d4ec044faea2$export$c57445924c23547b = /*#__PURE__*/ function(Component) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($7ac4d4ec044faea2$export$c57445924c23547b, Component);
    function $7ac4d4ec044faea2$export$c57445924c23547b(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $7ac4d4ec044faea2$export$c57445924c23547b);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($7ac4d4ec044faea2$export$c57445924c23547b).call(this, params));
        //////////////////////////////////
        // parameters that can be passed in
        // field in the data which is the geo_point type
        _this.geoHashAggregation = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "geoHashAggregation", "geohash");
        _this.calculateCentre = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "calculateCentre", function() {
            return $2de4fa00a47777f3$export$9b1f0f098143fb9;
        });
        _this.geoBoundingBoxFilterField = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "geoBoundingBoxFilterField", "location");
        _this.zoomToPrecisionMap = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "zoomToPrecisionMap", {
            0: 1,
            3: 2,
            5: 3,
            7: 4,
            10: 5,
            13: 6,
            15: 7
        });
        //////////////////////////////////
        // internal state
        // list of locations and the related object at those locations
        // of the form
        // {lat: <lat>, lon: <lon>, obj: {object}}
        _this.locations = [];
        // lat/lon object which defines the centre point of the map
        // this default is somewhere in Mali, and is a decent default for the globe
        _this.centre = {
            lat: 17,
            lon: 0
        };
        _this.currentPrecision = 0;
        _this.currentTopLeft = false;
        _this.currentBottomRight = false;
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($7ac4d4ec044faea2$export$c57445924c23547b, [
        {
            key: "synchronise",
            value: function synchronise() {
                this.locations = [];
                this.centre = {
                    lat: 17,
                    lon: 0
                };
                // read the locations out of the geohash aggregation
                if (this.edge.result) {
                    var agg = this.edge.result.aggregation(this.geoHashAggregation);
                    for(var i = 0; i < agg.buckets.length; i++){
                        var bucket = agg.buckets[i];
                        var latlon = $be7a76b3305d5aac$export$9099ad97b570f7c.decode(bucket.key);
                        latlon["count"] = bucket.doc_count;
                        this.locations.push(latlon);
                    }
                }
                // set the centre point
                if (this.locations.length > 0) this.centre = this.calculateCentre(this.locations);
            }
        },
        {
            key: "boundsChanged",
            value: function boundsChanged(params) {
                var top_left = params.top_left;
                var bottom_right = params.bottom_right;
                var zoom = params.zoom;
                var precision = this._getPrecisionForZoom(zoom);
                // if the precision isn't going to change, and the view is just a closer view than
                // the existing one, don't run the cycle
                if (precision === this.currentPrecision && this._currentBoxContains({
                    top_left: top_left,
                    bottom_right: bottom_right
                })) return;
                var nq = this.edge.cloneQuery();
                nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.GeoBoundingBoxFilter({
                    field: this.geoBoundingBoxFilterField
                }));
                nq.addMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.GeoBoundingBoxFilter({
                    field: this.geoBoundingBoxFilterField,
                    top_left: top_left,
                    bottom_right: bottom_right
                }));
                var agg = nq.getAggregation({
                    name: this.geoHashAggregation
                });
                agg.precision = precision;
                this.currentPrecision = precision;
                this.currentBottomRight = bottom_right;
                this.currentTopLeft = top_left;
                this.edge.pushQuery(nq);
                this.edge.cycle();
            }
        },
        {
            key: "_getPrecisionForZoom",
            value: function _getPrecisionForZoom(zoom) {
                for(var i = zoom; i >= 0; i--){
                    if (i in this.zoomToPrecisionMap) return this.zoomToPrecisionMap[i];
                }
                return 1;
            }
        },
        {
            key: "_currentBoxContains",
            value: function _currentBoxContains(params) {
                var top_left = params.top_left;
                var bottom_right = params.bottom_right;
                // if we don't know the current box, then assume false, as we can't tell
                if (!this.currentTopLeft || !this.currentBottomRight) return false;
                function getCorners(top_left1, bottom_right1) {
                    var a = {
                        lon: top_left1.lon,
                        lat: top_left1.lat
                    };
                    var b = {
                        lon: top_left1.lon,
                        lat: bottom_right1.lat
                    };
                    var c = {
                        lon: bottom_right1.lon,
                        lat: bottom_right1.lat
                    };
                    var d = {
                        lon: bottom_right1.lon,
                        lat: top_left1.lat
                    };
                    return [
                        a,
                        b,
                        c,
                        d
                    ];
                }
                var current = getCorners(this.currentTopLeft, this.currentBottomRight);
                var updated = getCorners(top_left, bottom_right);
                var tl = current[0].lon > updated[0].lon && current[0].lat < updated[0].lat;
                var tr = current[1].lon > updated[1].lon && current[1].lat > updated[1].lat;
                var br = current[2].lon < updated[2].lon && current[2].lat > updated[2].lat;
                var bl = current[3].lon < updated[3].lon && current[3].lat > updated[3].lat;
                return tl && tr && br && bl;
            }
        }
    ]);
    return $7ac4d4ec044faea2$export$c57445924c23547b;
}($6cf4dc301226cb87$export$ea71c44d9cb0d048);





var $06fd7bba89ea2716$export$3b99b33fd41e6e1b = 6371008.8;
var $06fd7bba89ea2716$export$6090225ba4bd5c27 = {
    centimeters: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 100,
    centimetres: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 100,
    degrees: $06fd7bba89ea2716$export$3b99b33fd41e6e1b / 111325,
    feet: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 3.28084,
    inches: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 39.37,
    kilometers: $06fd7bba89ea2716$export$3b99b33fd41e6e1b / 1000,
    kilometres: $06fd7bba89ea2716$export$3b99b33fd41e6e1b / 1000,
    meters: $06fd7bba89ea2716$export$3b99b33fd41e6e1b,
    metres: $06fd7bba89ea2716$export$3b99b33fd41e6e1b,
    miles: $06fd7bba89ea2716$export$3b99b33fd41e6e1b / 1609.344,
    millimeters: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 1000,
    millimetres: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 1000,
    nauticalmiles: $06fd7bba89ea2716$export$3b99b33fd41e6e1b / 1852,
    radians: 1,
    yards: $06fd7bba89ea2716$export$3b99b33fd41e6e1b * 1.0936
};
var $06fd7bba89ea2716$export$da3eb65231fe0ad8 = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.37,
    kilometers: 0.001,
    kilometres: 0.001,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / $06fd7bba89ea2716$export$3b99b33fd41e6e1b,
    yards: 1.0936133
};
var $06fd7bba89ea2716$export$fb8fc03e58e95277 = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 0.000000386,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046
};
function $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options) {
    if (options === void 0) options = {
    };
    var feat = {
        type: "Feature"
    };
    if (options.id === 0 || options.id) feat.id = options.id;
    if (options.bbox) feat.bbox = options.bbox;
    feat.properties = properties || {
    };
    feat.geometry = geom;
    return feat;
}
function $06fd7bba89ea2716$export$6927473f28f5208a(type, coordinates, _options) {
    if (_options === void 0) _options = {
    };
    switch(type){
        case "Point":
            return $06fd7bba89ea2716$export$8502864bca7c3201(coordinates).geometry;
        case "LineString":
            return $06fd7bba89ea2716$export$aca513e25ac14bc1(coordinates).geometry;
        case "Polygon":
            return $06fd7bba89ea2716$export$c9f721cf0a01d8ec(coordinates).geometry;
        case "MultiPoint":
            return $06fd7bba89ea2716$export$309bf52fb89f3663(coordinates).geometry;
        case "MultiLineString":
            return $06fd7bba89ea2716$export$e599217661506027(coordinates).geometry;
        case "MultiPolygon":
            return $06fd7bba89ea2716$export$4ecb90d6abcf292a(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
function $06fd7bba89ea2716$export$8502864bca7c3201(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    if (!coordinates) throw new Error("coordinates is required");
    if (!Array.isArray(coordinates)) throw new Error("coordinates must be an Array");
    if (coordinates.length < 2) throw new Error("coordinates must be at least 2 numbers long");
    if (!$06fd7bba89ea2716$export$1b423f7fa395bc1f(coordinates[0]) || !$06fd7bba89ea2716$export$1b423f7fa395bc1f(coordinates[1])) throw new Error("coordinates must contain numbers");
    var geom = {
        type: "Point",
        coordinates: coordinates
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$176cb2c78829af0(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    return $06fd7bba89ea2716$export$7c422acbc10e74d2(coordinates.map(function(coords) {
        return $06fd7bba89ea2716$export$8502864bca7c3201(coords, properties);
    }), options);
}
function $06fd7bba89ea2716$export$c9f721cf0a01d8ec(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    for(var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++){
        var ring = coordinates_1[_i];
        if (ring.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        for(var j = 0; j < ring[ring.length - 1].length; j++){
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) throw new Error("First and last Position are not equivalent.");
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$38859cbb8a8596d1(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    return $06fd7bba89ea2716$export$7c422acbc10e74d2(coordinates.map(function(coords) {
        return $06fd7bba89ea2716$export$c9f721cf0a01d8ec(coords, properties);
    }), options);
}
function $06fd7bba89ea2716$export$aca513e25ac14bc1(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    if (coordinates.length < 2) throw new Error("coordinates must be an array of two or more positions");
    var geom = {
        type: "LineString",
        coordinates: coordinates
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$b73fd69eb064be2e(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    return $06fd7bba89ea2716$export$7c422acbc10e74d2(coordinates.map(function(coords) {
        return $06fd7bba89ea2716$export$aca513e25ac14bc1(coords, properties);
    }), options);
}
function $06fd7bba89ea2716$export$7c422acbc10e74d2(features, options) {
    if (options === void 0) options = {
    };
    var fc = {
        type: "FeatureCollection"
    };
    if (options.id) fc.id = options.id;
    if (options.bbox) fc.bbox = options.bbox;
    fc.features = features;
    return fc;
}
function $06fd7bba89ea2716$export$e599217661506027(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$309bf52fb89f3663(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$4ecb90d6abcf292a(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$9666a975c039faf3(geometries, properties, options) {
    if (options === void 0) options = {
    };
    var geom = {
        type: "GeometryCollection",
        geometries: geometries
    };
    return $06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties, options);
}
function $06fd7bba89ea2716$export$f9488fbfb886385d(num, precision) {
    if (precision === void 0) precision = 0;
    if (precision && !(precision >= 0)) throw new Error("precision must be a positive number");
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
function $06fd7bba89ea2716$export$a7371587dd3e0f79(radians, units) {
    if (units === void 0) units = "kilometers";
    var factor = $06fd7bba89ea2716$export$6090225ba4bd5c27[units];
    if (!factor) throw new Error(units + " units is invalid");
    return radians * factor;
}
function $06fd7bba89ea2716$export$6c073b3d621feb4b(distance, units) {
    if (units === void 0) units = "kilometers";
    var factor = $06fd7bba89ea2716$export$6090225ba4bd5c27[units];
    if (!factor) throw new Error(units + " units is invalid");
    return distance / factor;
}
function $06fd7bba89ea2716$export$4945b7cf3cb41899(distance, units) {
    return $06fd7bba89ea2716$export$2bc59cfe0926807d($06fd7bba89ea2716$export$6c073b3d621feb4b(distance, units));
}
function $06fd7bba89ea2716$export$7ad1874be920d57b(bearing) {
    var angle = bearing % 360;
    if (angle < 0) angle += 360;
    return angle;
}
function $06fd7bba89ea2716$export$2bc59cfe0926807d(radians) {
    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
function $06fd7bba89ea2716$export$3df9f87a6fcd617d(degrees) {
    var radians = degrees % 360;
    return radians * Math.PI / 180;
}
function $06fd7bba89ea2716$export$89c2cc3b6c94cff3(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) originalUnit = "kilometers";
    if (finalUnit === void 0) finalUnit = "kilometers";
    if (!(length >= 0)) throw new Error("length must be a positive number");
    return $06fd7bba89ea2716$export$a7371587dd3e0f79($06fd7bba89ea2716$export$6c073b3d621feb4b(length, originalUnit), finalUnit);
}
function $06fd7bba89ea2716$export$a6884fee1809ec64(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) originalUnit = "meters";
    if (finalUnit === void 0) finalUnit = "kilometers";
    if (!(area >= 0)) throw new Error("area must be a positive number");
    var startFactor = $06fd7bba89ea2716$export$fb8fc03e58e95277[originalUnit];
    if (!startFactor) throw new Error("invalid original units");
    var finalFactor = $06fd7bba89ea2716$export$fb8fc03e58e95277[finalUnit];
    if (!finalFactor) throw new Error("invalid final units");
    return area / startFactor * finalFactor;
}
function $06fd7bba89ea2716$export$1b423f7fa395bc1f(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
function $06fd7bba89ea2716$export$9ee30c9ec6e8e509(input) {
    return !!input && input.constructor === Object;
}
function $06fd7bba89ea2716$export$62aae204e048857f(bbox) {
    if (!bbox) throw new Error("bbox is required");
    if (!Array.isArray(bbox)) throw new Error("bbox must be an Array");
    if (bbox.length !== 4 && bbox.length !== 6) throw new Error("bbox must be an Array of 4 or 6 numbers");
    bbox.forEach(function(num) {
        if (!$06fd7bba89ea2716$export$1b423f7fa395bc1f(num)) throw new Error("bbox must only contain numbers");
    });
}
function $06fd7bba89ea2716$export$f4624eca17ac14c9(id) {
    if (!id) throw new Error("id is required");
    if ([
        "string",
        "number"
    ].indexOf(typeof id) === -1) throw new Error("id must be a number or a string");
}


/**
 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
 *
 * @name clone
 * @param {GeoJSON} geojson GeoJSON Object
 * @returns {GeoJSON} cloned GeoJSON Object
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
 *
 * var lineCloned = turf.clone(line);
 */ function $3cfd6d70d7301277$var$clone(geojson) {
    if (!geojson) throw new Error("geojson is required");
    switch(geojson.type){
        case "Feature":
            return $3cfd6d70d7301277$var$cloneFeature(geojson);
        case "FeatureCollection":
            return $3cfd6d70d7301277$var$cloneFeatureCollection(geojson);
        case "Point":
        case "LineString":
        case "Polygon":
        case "MultiPoint":
        case "MultiLineString":
        case "MultiPolygon":
        case "GeometryCollection":
            return $3cfd6d70d7301277$var$cloneGeometry(geojson);
        default:
            throw new Error("unknown GeoJSON type");
    }
}
/**
 * Clone Feature
 *
 * @private
 * @param {Feature<any>} geojson GeoJSON Feature
 * @returns {Feature<any>} cloned Feature
 */ function $3cfd6d70d7301277$var$cloneFeature(geojson) {
    var cloned = {
        type: "Feature"
    };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function(key) {
        switch(key){
            case "type":
            case "properties":
            case "geometry":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add properties & geometry last
    cloned.properties = $3cfd6d70d7301277$var$cloneProperties(geojson.properties);
    cloned.geometry = $3cfd6d70d7301277$var$cloneGeometry(geojson.geometry);
    return cloned;
}
/**
 * Clone Properties
 *
 * @private
 * @param {Object} properties GeoJSON Properties
 * @returns {Object} cloned Properties
 */ function $3cfd6d70d7301277$var$cloneProperties(properties) {
    var cloned = {
    };
    if (!properties) return cloned;
    Object.keys(properties).forEach(function(key) {
        var value = properties[key];
        if (typeof value === "object") {
            if (value === null) // handle null
            cloned[key] = null;
            else if (Array.isArray(value)) // handle Array
            cloned[key] = value.map(function(item) {
                return item;
            });
            else // handle generic Object
            cloned[key] = $3cfd6d70d7301277$var$cloneProperties(value);
        } else cloned[key] = value;
    });
    return cloned;
}
/**
 * Clone Feature Collection
 *
 * @private
 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
 * @returns {FeatureCollection<any>} cloned Feature Collection
 */ function $3cfd6d70d7301277$var$cloneFeatureCollection(geojson) {
    var cloned = {
        type: "FeatureCollection"
    };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function(key) {
        switch(key){
            case "type":
            case "features":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add features
    cloned.features = geojson.features.map(function(feature) {
        return $3cfd6d70d7301277$var$cloneFeature(feature);
    });
    return cloned;
}
/**
 * Clone Geometry
 *
 * @private
 * @param {Geometry<any>} geometry GeoJSON Geometry
 * @returns {Geometry<any>} cloned Geometry
 */ function $3cfd6d70d7301277$var$cloneGeometry(geometry) {
    var geom = {
        type: geometry.type
    };
    if (geometry.bbox) geom.bbox = geometry.bbox;
    if (geometry.type === "GeometryCollection") {
        geom.geometries = geometry.geometries.map(function(g) {
            return $3cfd6d70d7301277$var$cloneGeometry(g);
        });
        return geom;
    }
    geom.coordinates = $3cfd6d70d7301277$var$deepSlice(geometry.coordinates);
    return geom;
}
/**
 * Deep Slice coordinates
 *
 * @private
 * @param {Coordinates} coords Coordinates
 * @returns {Coordinates} all coordinates sliced
 */ function $3cfd6d70d7301277$var$deepSlice(coords) {
    var cloned = coords;
    if (typeof cloned[0] !== "object") return cloned.slice();
    return cloned.map(function(coord) {
        return $3cfd6d70d7301277$var$deepSlice(coord);
    });
}
var $3cfd6d70d7301277$export$9099ad97b570f7c = $3cfd6d70d7301277$var$clone;



/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */ /**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */ function $5c76aa7c2c53dcdc$export$cccf52902b81b0d9(geojson, callback, excludeWrapCoord) {
    // Handles null Geometry -- Skips this GeoJSON
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords, geometryMaybeCollection, wrapShrink = 0, coordIndex = 0, isGeometryCollection, type = geojson.type, isFeatureCollection = type === "FeatureCollection", isFeature = type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for(var featureIndex = 0; featureIndex < stop; featureIndex++){
        geometryMaybeCollection = isFeatureCollection ? geojson.features[featureIndex].geometry : isFeature ? geojson.geometry : geojson;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(var geomIndex = 0; geomIndex < stopG; geomIndex++){
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;
            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;
            wrapShrink = excludeWrapCoord && (geomType === "Polygon" || geomType === "MultiPolygon") ? 1 : 0;
            switch(geomType){
                case null:
                    break;
                case "Point":
                    if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                    coordIndex++;
                    multiFeatureIndex++;
                    break;
                case "LineString":
                case "MultiPoint":
                    for(j = 0; j < coords.length; j++){
                        if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                        coordIndex++;
                        if (geomType === "MultiPoint") multiFeatureIndex++;
                    }
                    if (geomType === "LineString") multiFeatureIndex++;
                    break;
                case "Polygon":
                case "MultiLineString":
                    for(j = 0; j < coords.length; j++){
                        for(k = 0; k < coords[j].length - wrapShrink; k++){
                            if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                            coordIndex++;
                        }
                        if (geomType === "MultiLineString") multiFeatureIndex++;
                        if (geomType === "Polygon") geometryIndex++;
                    }
                    if (geomType === "Polygon") multiFeatureIndex++;
                    break;
                case "MultiPolygon":
                    for(j = 0; j < coords.length; j++){
                        geometryIndex = 0;
                        for(k = 0; k < coords[j].length; k++){
                            for(l = 0; l < coords[j][k].length - wrapShrink; l++){
                                if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                                coordIndex++;
                            }
                            geometryIndex++;
                        }
                        multiFeatureIndex++;
                    }
                    break;
                case "GeometryCollection":
                    for(j = 0; j < geometry.geometries.length; j++)if ($5c76aa7c2c53dcdc$export$cccf52902b81b0d9(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
                    break;
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
    }
}
/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */ /**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */ function $5c76aa7c2c53dcdc$export$89a62b3a9bc53ead(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    $5c76aa7c2c53dcdc$export$cccf52902b81b0d9(geojson, function(currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
        else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}
/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */ function $5c76aa7c2c53dcdc$export$7e1319df03985d3a(geojson, callback) {
    var i;
    switch(geojson.type){
        case "FeatureCollection":
            for(i = 0; i < geojson.features.length; i++){
                if (callback(geojson.features[i].properties, i) === false) break;
            }
            break;
        case "Feature":
            callback(geojson.properties, 0);
            break;
    }
}
/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */ function $5c76aa7c2c53dcdc$export$6ea47a08cbf96668(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $5c76aa7c2c53dcdc$export$7e1319df03985d3a(geojson, function(currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}
/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */ function $5c76aa7c2c53dcdc$export$4ec429a16a391dd0(geojson, callback) {
    if (geojson.type === "Feature") callback(geojson, 0);
    else if (geojson.type === "FeatureCollection") for(var i = 0; i < geojson.features.length; i++){
        if (callback(geojson.features[i], i) === false) break;
    }
}
/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */ /**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */ function $5c76aa7c2c53dcdc$export$aedc0a2449029016(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $5c76aa7c2c53dcdc$export$4ec429a16a391dd0(geojson, function(currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}
/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */ function $5c76aa7c2c53dcdc$export$5a9cfbedf736c6fa(geojson) {
    var coords = [];
    $5c76aa7c2c53dcdc$export$cccf52902b81b0d9(geojson, function(coord) {
        coords.push(coord);
    });
    return coords;
}
/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */ /**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */ function $5c76aa7c2c53dcdc$export$110a902f786846fe(geojson, callback) {
    var i, j, g, geometry, stopG, geometryMaybeCollection, isGeometryCollection, featureProperties, featureBBox, featureId, featureIndex = 0, isFeatureCollection = geojson.type === "FeatureCollection", isFeature = geojson.type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for(i = 0; i < stop; i++){
        geometryMaybeCollection = isFeatureCollection ? geojson.features[i].geometry : isFeature ? geojson.geometry : geojson;
        featureProperties = isFeatureCollection ? geojson.features[i].properties : isFeature ? geojson.properties : {
        };
        featureBBox = isFeatureCollection ? geojson.features[i].bbox : isFeature ? geojson.bbox : undefined;
        featureId = isFeatureCollection ? geojson.features[i].id : isFeature ? geojson.id : undefined;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(g = 0; g < stopG; g++){
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
            // Handle null Geometry
            if (geometry === null) {
                if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                continue;
            }
            switch(geometry.type){
                case "Point":
                case "LineString":
                case "MultiPoint":
                case "Polygon":
                case "MultiLineString":
                case "MultiPolygon":
                    if (callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                    break;
                case "GeometryCollection":
                    for(j = 0; j < geometry.geometries.length; j++){
                        if (callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                    }
                    break;
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}
/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */ /**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */ function $5c76aa7c2c53dcdc$export$f844129661727632(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $5c76aa7c2c53dcdc$export$110a902f786846fe(geojson, function(currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
        else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}
/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */ /**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */ function $5c76aa7c2c53dcdc$export$72bcd18d498276a5(geojson, callback) {
    $5c76aa7c2c53dcdc$export$110a902f786846fe(geojson, function(geometry, featureIndex, properties, bbox, id) {
        // Callback for single geometry
        var type = geometry === null ? null : geometry.type;
        switch(type){
            case null:
            case "Point":
            case "LineString":
            case "Polygon":
                if (callback($06fd7bba89ea2716$export$afb26b2da2b9ec90(geometry, properties, {
                    bbox: bbox,
                    id: id
                }), featureIndex, 0) === false) return false;
                return;
        }
        var geomType;
        // Callback for multi-geometry
        switch(type){
            case "MultiPoint":
                geomType = "Point";
                break;
            case "MultiLineString":
                geomType = "LineString";
                break;
            case "MultiPolygon":
                geomType = "Polygon";
                break;
        }
        for(var multiFeatureIndex = 0; multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++){
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            if (callback($06fd7bba89ea2716$export$afb26b2da2b9ec90(geom, properties), featureIndex, multiFeatureIndex) === false) return false;
        }
    });
}
/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */ /**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */ function $5c76aa7c2c53dcdc$export$ae6c13ef556a8a6d(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $5c76aa7c2c53dcdc$export$72bcd18d498276a5(geojson, function(currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}
/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */ /**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */ function $5c76aa7c2c53dcdc$export$3116792cf8372e55(geojson, callback) {
    $5c76aa7c2c53dcdc$export$72bcd18d498276a5(geojson, function(feature, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;
        // Exclude null Geometries
        if (!feature.geometry) return;
        // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
        var type = feature.geometry.type;
        if (type === "Point" || type === "MultiPoint") return;
        // Generate 2-vertex line segments
        var previousCoords;
        var previousFeatureIndex = 0;
        var previousMultiIndex = 0;
        var prevGeomIndex = 0;
        if ($5c76aa7c2c53dcdc$export$cccf52902b81b0d9(feature, function(currentCoord, coordIndex, featureIndexCoord, multiPartIndexCoord, geometryIndex) {
            // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
            if (previousCoords === undefined || featureIndex > previousFeatureIndex || multiPartIndexCoord > previousMultiIndex || geometryIndex > prevGeomIndex) {
                previousCoords = currentCoord;
                previousFeatureIndex = featureIndex;
                previousMultiIndex = multiPartIndexCoord;
                prevGeomIndex = geometryIndex;
                segmentIndex = 0;
                return;
            }
            var currentSegment = $06fd7bba89ea2716$export$aca513e25ac14bc1([
                previousCoords,
                currentCoord
            ], feature.properties);
            if (callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) === false) return false;
            segmentIndex++;
            previousCoords = currentCoord;
        }) === false) return false;
    });
}
/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */ /**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentIndex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */ function $5c76aa7c2c53dcdc$export$6811769a60e09409(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    $5c76aa7c2c53dcdc$export$3116792cf8372e55(geojson, function(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === undefined) previousValue = currentSegment;
        else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}
/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */ /**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */ function $5c76aa7c2c53dcdc$export$52c668f16718d7ce(geojson, callback) {
    // validation
    if (!geojson) throw new Error("geojson is required");
    $5c76aa7c2c53dcdc$export$72bcd18d498276a5(geojson, function(feature, featureIndex, multiFeatureIndex) {
        if (feature.geometry === null) return;
        var type = feature.geometry.type;
        var coords = feature.geometry.coordinates;
        switch(type){
            case "LineString":
                if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false) return false;
                break;
            case "Polygon":
                for(var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++){
                    if (callback($06fd7bba89ea2716$export$aca513e25ac14bc1(coords[geometryIndex], feature.properties), featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                }
                break;
        }
    });
}
/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */ /**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */ function $5c76aa7c2c53dcdc$export$319a340e9b60833a(geojson, callback, initialValue) {
    var previousValue = initialValue;
    $5c76aa7c2c53dcdc$export$52c668f16718d7ce(geojson, function(currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}
/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */ function $5c76aa7c2c53dcdc$export$fbd55df10107631a(geojson, options) {
    // Optional Parameters
    options = options || {
    };
    if (!$06fd7bba89ea2716$export$9ee30c9ec6e8e509(options)) throw new Error("options is invalid");
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var segmentIndex = options.segmentIndex || 0;
    // Find FeatureIndex
    var properties = options.properties;
    var geometry;
    switch(geojson.type){
        case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
        case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
            geometry = geojson;
            break;
        default:
            throw new Error("geojson is invalid");
    }
    // Find SegmentIndex
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch(geometry.type){
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
            if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
            return $06fd7bba89ea2716$export$aca513e25ac14bc1([
                coords[segmentIndex],
                coords[segmentIndex + 1]
            ], properties, options);
        case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
            return $06fd7bba89ea2716$export$aca513e25ac14bc1([
                coords[geometryIndex][segmentIndex],
                coords[geometryIndex][segmentIndex + 1], 
            ], properties, options);
        case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
            return $06fd7bba89ea2716$export$aca513e25ac14bc1([
                coords[multiFeatureIndex][segmentIndex],
                coords[multiFeatureIndex][segmentIndex + 1], 
            ], properties, options);
        case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
            return $06fd7bba89ea2716$export$aca513e25ac14bc1([
                coords[multiFeatureIndex][geometryIndex][segmentIndex],
                coords[multiFeatureIndex][geometryIndex][segmentIndex + 1], 
            ], properties, options);
    }
    throw new Error("geojson is invalid");
}
/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */ function $5c76aa7c2c53dcdc$export$6416d7a33c28eb60(geojson, options) {
    // Optional Parameters
    options = options || {
    };
    if (!$06fd7bba89ea2716$export$9ee30c9ec6e8e509(options)) throw new Error("options is invalid");
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var coordIndex = options.coordIndex || 0;
    // Find FeatureIndex
    var properties = options.properties;
    var geometry;
    switch(geojson.type){
        case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
        case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
            geometry = geojson;
            break;
        default:
            throw new Error("geojson is invalid");
    }
    // Find Coord Index
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch(geometry.type){
        case "Point":
            return $06fd7bba89ea2716$export$8502864bca7c3201(coords, properties, options);
        case "MultiPoint":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            return $06fd7bba89ea2716$export$8502864bca7c3201(coords[multiFeatureIndex], properties, options);
        case "LineString":
            if (coordIndex < 0) coordIndex = coords.length + coordIndex;
            return $06fd7bba89ea2716$export$8502864bca7c3201(coords[coordIndex], properties, options);
        case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
            return $06fd7bba89ea2716$export$8502864bca7c3201(coords[geometryIndex][coordIndex], properties, options);
        case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
            return $06fd7bba89ea2716$export$8502864bca7c3201(coords[multiFeatureIndex][coordIndex], properties, options);
        case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
            return $06fd7bba89ea2716$export$8502864bca7c3201(coords[multiFeatureIndex][geometryIndex][coordIndex], properties, options);
    }
    throw new Error("geojson is invalid");
}


var $39679496f24848e9$exports = {};
"use strict";
var $f4ce1c29f8386e91$exports = {};
"use strict";
$f4ce1c29f8386e91$exports = {
    /**
  * Euclidean distance
  */ eudist: function eudist(v1, v2, sqrt) {
        var len = v1.length;
        var sum = 0;
        for(var i = 0; i < len; i++){
            var d = (v1[i] || 0) - (v2[i] || 0);
            sum += d * d;
        }
        // Square root not really needed
        return sqrt ? Math.sqrt(sum) : sum;
    },
    mandist: function mandist(v1, v2, sqrt) {
        var len = v1.length;
        var sum = 0;
        for(var i = 0; i < len; i++)sum += Math.abs((v1[i] || 0) - (v2[i] || 0));
        // Square root not really needed
        return sqrt ? Math.sqrt(sum) : sum;
    },
    /**
  * Unidimensional distance
  */ dist: function dist(v1, v2, sqrt) {
        var d = Math.abs(v1 - v2);
        return sqrt ? d : d * d;
    }
};


var $7706bc4af0dbceec$exports = {};
"use strict";

var $7706bc4af0dbceec$var$eudist = $f4ce1c29f8386e91$exports.eudist, $7706bc4af0dbceec$var$dist = $f4ce1c29f8386e91$exports.dist;
$7706bc4af0dbceec$exports = {
    kmrand: function kmrand(data, k) {
        var map = {
        }, ks = [], t = k << 2;
        var len = data.length;
        var multi = data[0].length > 0;
        while(ks.length < k && (t--) > 0){
            var d = data[Math.floor(Math.random() * len)];
            var key = multi ? d.join("_") : "" + d;
            if (!map[key]) {
                map[key] = true;
                ks.push(d);
            }
        }
        if (ks.length < k) throw new Error("Error initializating clusters");
        else return ks;
    },
    /**
  * K-means++ initial centroid selection
  */ kmpp: function kmpp(data, k) {
        var distance = data[0].length ? $7706bc4af0dbceec$var$eudist : $7706bc4af0dbceec$var$dist;
        var ks = [], len = data.length;
        var multi = data[0].length > 0;
        var map = {
        };
        // First random centroid
        var c = data[Math.floor(Math.random() * len)];
        var key = multi ? c.join("_") : "" + c;
        ks.push(c);
        map[key] = true;
        // Retrieve next centroids
        while(ks.length < k){
            // Min Distances between current centroids and data points
            var dists = [], lk = ks.length;
            var dsum = 0, prs = [];
            for(var i = 0; i < len; i++){
                var min = Infinity;
                for(var j = 0; j < lk; j++){
                    var _dist = distance(data[i], ks[j]);
                    if (_dist <= min) min = _dist;
                }
                dists[i] = min;
            }
            // Sum all min distances
            for(var _i = 0; _i < len; _i++)dsum += dists[_i];
            // Probabilities and cummulative prob (cumsum)
            for(var _i2 = 0; _i2 < len; _i2++)prs[_i2] = {
                i: _i2,
                v: data[_i2],
                pr: dists[_i2] / dsum,
                cs: 0
            };
            // Sort Probabilities
            prs.sort(function(a, b) {
                return a.pr - b.pr;
            });
            // Cummulative Probabilities
            prs[0].cs = prs[0].pr;
            for(var _i3 = 1; _i3 < len; _i3++)prs[_i3].cs = prs[_i3 - 1].cs + prs[_i3].pr;
            // Randomize
            var rnd = Math.random();
            // Gets only the items whose cumsum >= rnd
            var idx = 0;
            while(idx < len - 1 && prs[idx++].cs < rnd);
            ks.push(prs[idx - 1].v);
        /*
   let done = false;
   while(!done) {
   	// this is our new centroid
   	c = prs[idx-1].v
   	key = multi? c.join("_") : `${c}`;
   	if(!map[key]) {
   		map[key] = true;
   		ks.push(c);
   		done = true;
   	}
   	else {
   		idx++;
   	}
   }
   */ }
        return ks;
    }
};


/*jshint esversion: 6 */ var $39679496f24848e9$var$eudist = $f4ce1c29f8386e91$exports.eudist, $39679496f24848e9$var$mandist = $f4ce1c29f8386e91$exports.mandist, $39679496f24848e9$var$dist = $f4ce1c29f8386e91$exports.dist, $39679496f24848e9$var$kmrand = $7706bc4af0dbceec$exports.kmrand, $39679496f24848e9$var$kmpp = $7706bc4af0dbceec$exports.kmpp;
var $39679496f24848e9$var$MAX = 10000;
/**
 * Inits an array with values
 */ function $39679496f24848e9$var$init(len, val, v) {
    v = v || [];
    for(var i = 0; i < len; i++)v[i] = val;
    return v;
}
function $39679496f24848e9$var$skmeans(data, k, initial, maxit) {
    var ks = [], old = [], idxs = [], dist = [];
    var conv = false, it = maxit || $39679496f24848e9$var$MAX;
    var len = data.length, vlen = data[0].length, multi = vlen > 0;
    var count = [];
    if (!initial) {
        var _idxs = {
        };
        while(ks.length < k){
            var idx = Math.floor(Math.random() * len);
            if (!_idxs[idx]) {
                _idxs[idx] = true;
                ks.push(data[idx]);
            }
        }
    } else if (initial == "kmrand") ks = $39679496f24848e9$var$kmrand(data, k);
    else if (initial == "kmpp") ks = $39679496f24848e9$var$kmpp(data, k);
    else ks = initial;
    do {
        // Reset k count
        $39679496f24848e9$var$init(k, 0, count);
        // For each value in data, find the nearest centroid
        for(var i = 0; i < len; i++){
            var min = Infinity, _idx = 0;
            for(var j = 0; j < k; j++){
                // Multidimensional or unidimensional
                var dist = multi ? $39679496f24848e9$var$eudist(data[i], ks[j]) : Math.abs(data[i] - ks[j]);
                if (dist <= min) {
                    min = dist;
                    _idx = j;
                }
            }
            idxs[i] = _idx; // Index of the selected centroid for that value
            count[_idx]++; // Number of values for this centroid
        }
        // Recalculate centroids
        var sum = [], old = [], dif = 0;
        for(var _j = 0; _j < k; _j++){
            // Multidimensional or unidimensional
            sum[_j] = multi ? $39679496f24848e9$var$init(vlen, 0, sum[_j]) : 0;
            old[_j] = ks[_j];
        }
        // If multidimensional
        if (multi) {
            for(var _j2 = 0; _j2 < k; _j2++)ks[_j2] = [];
             // Sum values and count for each centroid
            for(var _i = 0; _i < len; _i++){
                var _idx2 = idxs[_i], // Centroid for that item
                vsum = sum[_idx2], // Sum values for this centroid
                vect = data[_i]; // Current vector
                // Accumulate value on the centroid for current vector
                for(var h = 0; h < vlen; h++)vsum[h] += vect[h];
            }
            // Calculate the average for each centroid
            conv = true;
            for(var _j3 = 0; _j3 < k; _j3++){
                var ksj = ks[_j3], // Current centroid
                sumj = sum[_j3], // Accumulated centroid values
                oldj = old[_j3], // Old centroid value
                cj = count[_j3]; // Number of elements for this centroid
                // New average
                for(var _h = 0; _h < vlen; _h++)ksj[_h] = sumj[_h] / cj || 0; // New centroid
                // Find if centroids have moved
                if (conv) {
                    for(var _h2 = 0; _h2 < vlen; _h2++)if (oldj[_h2] != ksj[_h2]) {
                        conv = false;
                        break;
                    }
                }
            }
        } else {
            // Sum values and count for each centroid
            for(var _i2 = 0; _i2 < len; _i2++){
                var _idx3 = idxs[_i2];
                sum[_idx3] += data[_i2];
            }
            // Calculate the average for each centroid
            for(var _j4 = 0; _j4 < k; _j4++)ks[_j4] = sum[_j4] / count[_j4] || 0; // New centroid
            // Find if centroids have moved
            conv = true;
            for(var _j5 = 0; _j5 < k; _j5++)if (old[_j5] != ks[_j5]) {
                conv = false;
                break;
            }
        }
        conv = conv || (--it) <= 0;
    }while (!conv)
    return {
        it: $39679496f24848e9$var$MAX - it,
        k: k,
        idxs: idxs,
        centroids: ks
    };
}
$39679496f24848e9$exports = $39679496f24848e9$var$skmeans;


/**
 * Takes a set of {@link Point|points} and partition them into clusters using the k-mean .
 * It uses the [k-means algorithm](https://en.wikipedia.org/wiki/K-means_clustering)
 *
 * @name clustersKmeans
 * @param {FeatureCollection<Point>} points to be clustered
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.numberOfClusters=Math.sqrt(numberOfPoints/2)] numberOfClusters that will be generated
 * @param {boolean} [options.mutate=false] allows GeoJSON input to be mutated (significant performance increase if true)
 * @returns {FeatureCollection<Point>} Clustered Points with an additional two properties associated to each Feature:
 * - {number} cluster - the associated clusterId
 * - {[number, number]} centroid - Centroid of the cluster [Longitude, Latitude]
 * @example
 * // create random points with random z-values in their properties
 * var points = turf.randomPoint(100, {bbox: [0, 30, 20, 50]});
 * var options = {numberOfClusters: 7};
 * var clustered = turf.clustersKmeans(points, options);
 *
 * //addToMap
 * var addToMap = [clustered];
 */ function $afde46b62500dbb0$var$clustersKmeans(points, options) {
    if (options === void 0) options = {
    };
    // Default Params
    var count = points.features.length;
    options.numberOfClusters = options.numberOfClusters || Math.round(Math.sqrt(count / 2));
    // numberOfClusters can't be greater than the number of points
    // fallbacks to count
    if (options.numberOfClusters > count) options.numberOfClusters = count;
    // Clone points to prevent any mutations (enabled by default)
    if (options.mutate !== true) points = $3cfd6d70d7301277$export$9099ad97b570f7c(points);
    // collect points coordinates
    var data = $5c76aa7c2c53dcdc$export$5a9cfbedf736c6fa(points);
    // create seed to avoid skmeans to drift
    var initialCentroids = data.slice(0, options.numberOfClusters);
    // create skmeans clusters
    var skmeansResult = (/*@__PURE__*/$parcel$interopDefault($39679496f24848e9$exports))(data, options.numberOfClusters, initialCentroids);
    // store centroids {clusterId: [number, number]}
    var centroids = {
    };
    skmeansResult.centroids.forEach(function(coord, idx) {
        centroids[idx] = coord;
    });
    // add associated cluster number
    $5c76aa7c2c53dcdc$export$4ec429a16a391dd0(points, function(point, index) {
        var clusterId = skmeansResult.idxs[index];
        point.properties.cluster = clusterId;
        point.properties.centroid = centroids[clusterId];
    });
    return points;
}
var $afde46b62500dbb0$export$9099ad97b570f7c = $afde46b62500dbb0$var$clustersKmeans;




function $8a3e3dfc4b41d9ff$export$f838ef719c965add(coord) {
    if (!coord) throw new Error("coord is required");
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") return coord.geometry.coordinates;
        if (coord.type === "Point") return coord.coordinates;
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) return coord;
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function $8a3e3dfc4b41d9ff$export$46fc27be15a5ee5(coords) {
    if (Array.isArray(coords)) return coords;
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) return coords.geometry.coordinates;
    } else {
        // Geometry
        if (coords.coordinates) return coords.coordinates;
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
function $8a3e3dfc4b41d9ff$export$3aa59f2d5d9a200d(coordinates) {
    if (coordinates.length > 1 && $06fd7bba89ea2716$export$1b423f7fa395bc1f(coordinates[0]) && $06fd7bba89ea2716$export$1b423f7fa395bc1f(coordinates[1])) return true;
    if (Array.isArray(coordinates[0]) && coordinates[0].length) return $8a3e3dfc4b41d9ff$export$3aa59f2d5d9a200d(coordinates[0]);
    throw new Error("coordinates must only contain numbers");
}
function $8a3e3dfc4b41d9ff$export$4ed88b37a51256dc(value, type, name) {
    if (!type || !name) throw new Error("type and name required");
    if (!value || value.type !== type) throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
}
function $8a3e3dfc4b41d9ff$export$febdaeaf68aa8370(feature, type, name) {
    if (!feature) throw new Error("No feature passed");
    if (!name) throw new Error(".featureOf() requires a name");
    if (!feature || feature.type !== "Feature" || !feature.geometry) throw new Error("Invalid input to " + name + ", Feature with geometry required");
    if (!feature.geometry || feature.geometry.type !== type) throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
}
function $8a3e3dfc4b41d9ff$export$66d9083292e6f231(featureCollection, type, name) {
    if (!featureCollection) throw new Error("No featureCollection passed");
    if (!name) throw new Error(".collectionOf() requires a name");
    if (!featureCollection || featureCollection.type !== "FeatureCollection") throw new Error("Invalid input to " + name + ", FeatureCollection required");
    for(var _i = 0, _a = featureCollection.features; _i < _a.length; _i++){
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) throw new Error("Invalid input to " + name + ", Feature with geometry required");
        if (!feature.geometry || feature.geometry.type !== type) throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
    }
}
function $8a3e3dfc4b41d9ff$export$85c1ed911ae13e35(geojson) {
    if (geojson.type === "Feature") return geojson.geometry;
    return geojson;
}
function $8a3e3dfc4b41d9ff$export$7b6695599253d7ba(geojson, _name) {
    if (geojson.type === "FeatureCollection") return "FeatureCollection";
    if (geojson.type === "GeometryCollection") return "GeometryCollection";
    if (geojson.type === "Feature" && geojson.geometry !== null) return geojson.geometry.type;
    return geojson.type;
}



//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord | Point} from origin point or coordinate
 * @param {Coord | Point} to destination point or coordinate
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */ function $bdb7acebc872ae62$var$distance(from, to, options) {
    if (options === void 0) options = {
    };
    var coordinates1 = $8a3e3dfc4b41d9ff$export$f838ef719c965add(from);
    var coordinates2 = $8a3e3dfc4b41d9ff$export$f838ef719c965add(to);
    var dLat = $06fd7bba89ea2716$export$3df9f87a6fcd617d(coordinates2[1] - coordinates1[1]);
    var dLon = $06fd7bba89ea2716$export$3df9f87a6fcd617d(coordinates2[0] - coordinates1[0]);
    var lat1 = $06fd7bba89ea2716$export$3df9f87a6fcd617d(coordinates1[1]);
    var lat2 = $06fd7bba89ea2716$export$3df9f87a6fcd617d(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return $06fd7bba89ea2716$export$a7371587dd3e0f79(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
var $bdb7acebc872ae62$export$9099ad97b570f7c = $bdb7acebc872ae62$var$distance;




var $ea628a101b201b4b$exports = {};
parcelRequire.register("hlFcf", function(module, exports) {
/**
 * DBSCAN - Density based clustering
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * DBSCAN class construcotr
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {DBSCAN}
 */ function $ca145a95ea91c3d9$var$DBSCAN(dataset, epsilon, minPts, distanceFunction) {
    /** @type {Array} */ this.dataset = [];
    /** @type {number} */ this.epsilon = 1;
    /** @type {number} */ this.minPts = 2;
    /** @type {function} */ this.distance = this._euclideanDistance;
    /** @type {Array} */ this.clusters = [];
    /** @type {Array} */ this.noise = [];
    // temporary variables used during computation
    /** @type {Array} */ this._visited = [];
    /** @type {Array} */ this._assigned = [];
    /** @type {number} */ this._datasetLength = 0;
    this._init(dataset, epsilon, minPts, distanceFunction);
}
/******************************************************************************/ // public functions
/**
 * Start clustering
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {undefined}
 * @access public
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype.run = function(dataset, epsilon, minPts, distanceFunction) {
    this._init(dataset, epsilon, minPts, distanceFunction);
    for(var pointId = 0; pointId < this._datasetLength; pointId++)// if point is not visited, check if it forms a cluster
    if (this._visited[pointId] !== 1) {
        this._visited[pointId] = 1;
        // if closest neighborhood is too small to form a cluster, mark as noise
        var neighbors = this._regionQuery(pointId);
        if (neighbors.length < this.minPts) this.noise.push(pointId);
        else {
            // create new cluster and add point
            var clusterId = this.clusters.length;
            this.clusters.push([]);
            this._addToCluster(pointId, clusterId);
            this._expandCluster(clusterId, neighbors);
        }
    }
    return this.clusters;
};
/******************************************************************************/ // protected functions
/**
 * Set object properties
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distance
 * @returns {undefined}
 * @access protected
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype._init = function(dataset, epsilon, minPts, distance) {
    if (dataset) {
        if (!(dataset instanceof Array)) throw Error('Dataset must be of type array, ' + typeof dataset + ' given');
        this.dataset = dataset;
        this.clusters = [];
        this.noise = [];
        this._datasetLength = dataset.length;
        this._visited = new Array(this._datasetLength);
        this._assigned = new Array(this._datasetLength);
    }
    if (epsilon) this.epsilon = epsilon;
    if (minPts) this.minPts = minPts;
    if (distance) this.distance = distance;
};
/**
 * Expand cluster to closest points of given neighborhood
 *
 * @param {number} clusterId
 * @param {Array} neighbors
 * @returns {undefined}
 * @access protected
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype._expandCluster = function(clusterId, neighbors) {
    /**
   * It's very important to calculate length of neighbors array each time,
   * as the number of elements changes over time
   */ for(var i = 0; i < neighbors.length; i++){
        var pointId2 = neighbors[i];
        if (this._visited[pointId2] !== 1) {
            this._visited[pointId2] = 1;
            var neighbors2 = this._regionQuery(pointId2);
            if (neighbors2.length >= this.minPts) neighbors = this._mergeArrays(neighbors, neighbors2);
        }
        // add to cluster
        if (this._assigned[pointId2] !== 1) this._addToCluster(pointId2, clusterId);
    }
};
/**
 * Add new point to cluster
 *
 * @param {number} pointId
 * @param {number} clusterId
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype._addToCluster = function(pointId, clusterId) {
    this.clusters[clusterId].push(pointId);
    this._assigned[pointId] = 1;
};
/**
 * Find all neighbors around given point
 *
 * @param {number} pointId,
 * @param {number} epsilon
 * @returns {Array}
 * @access protected
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype._regionQuery = function(pointId) {
    var neighbors = [];
    for(var id = 0; id < this._datasetLength; id++){
        var dist = this.distance(this.dataset[pointId], this.dataset[id]);
        if (dist < this.epsilon) neighbors.push(id);
    }
    return neighbors;
};
/******************************************************************************/ // helpers
/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 * @access protected
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype._mergeArrays = function(a, b) {
    var len = b.length;
    for(var i = 0; i < len; i++){
        var P = b[i];
        if (a.indexOf(P) < 0) a.push(P);
    }
    return a;
};
/**
 * Calculate euclidean distance in multidimensional space
 *
 * @param {Array} p
 * @param {Array} q
 * @returns {number}
 * @access protected
 */ $ca145a95ea91c3d9$var$DBSCAN.prototype._euclideanDistance = function(p, q) {
    var sum = 0;
    var i = Math.min(p.length, q.length);
    while(i--)sum += (p[i] - q[i]) * (p[i] - q[i]);
    return Math.sqrt(sum);
};
if ("object" !== 'undefined' && module.exports) module.exports = $ca145a95ea91c3d9$var$DBSCAN;

});


parcelRequire.register("X5WN7", function(module, exports) {
/**
 * KMEANS clustering
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * KMEANS class constructor
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} k - number of clusters
 * @param {function} distance - distance function
 * @returns {KMEANS}
 */ function $0b1a1fcd46318e59$var$KMEANS(dataset, k, distance) {
    this.k = 3; // number of clusters
    this.dataset = []; // set of feature vectors
    this.assignments = []; // set of associated clusters for each feature vector
    this.centroids = []; // vectors for our clusters
    this.init(dataset, k, distance);
}
/**
 * @returns {undefined}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.init = function(dataset, k, distance) {
    this.assignments = [];
    this.centroids = [];
    if (typeof dataset !== 'undefined') this.dataset = dataset;
    if (typeof k !== 'undefined') this.k = k;
    if (typeof distance !== 'undefined') this.distance = distance;
};
/**
 * @returns {undefined}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.run = function(dataset, k) {
    this.init(dataset, k);
    var len = this.dataset.length;
    // initialize centroids
    for(var i = 0; i < this.k; i++)this.centroids[i] = this.randomCentroid();
    var change = true;
    while(change){
        // assign feature vectors to clusters
        change = this.assign();
        // adjust location of centroids
        for(var centroidId = 0; centroidId < this.k; centroidId++){
            var mean = new Array(maxDim);
            var count = 0;
            // init mean vector
            for(var dim = 0; dim < maxDim; dim++)mean[dim] = 0;
            for(var j = 0; j < len; j++){
                var maxDim = this.dataset[j].length;
                // if current cluster id is assigned to point
                if (centroidId === this.assignments[j]) {
                    for(var dim = 0; dim < maxDim; dim++)mean[dim] += this.dataset[j][dim];
                    count++;
                }
            }
            if (count > 0) {
                // if cluster contain points, adjust centroid position
                for(var dim = 0; dim < maxDim; dim++)mean[dim] /= count;
                this.centroids[centroidId] = mean;
            } else {
                // if cluster is empty, generate new random centroid
                this.centroids[centroidId] = this.randomCentroid();
                change = true;
            }
        }
    }
    return this.getClusters();
};
/**
 * Generate random centroid
 *
 * @returns {Array}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.randomCentroid = function() {
    var maxId = this.dataset.length - 1;
    var centroid;
    var id;
    do {
        id = Math.round(Math.random() * maxId);
        centroid = this.dataset[id];
    }while (this.centroids.indexOf(centroid) >= 0)
    return centroid;
};
/**
 * Assign points to clusters
 *
 * @returns {boolean}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.assign = function() {
    var change = false;
    var len = this.dataset.length;
    var closestCentroid;
    for(var i = 0; i < len; i++){
        closestCentroid = this.argmin(this.dataset[i], this.centroids, this.distance);
        if (closestCentroid != this.assignments[i]) {
            this.assignments[i] = closestCentroid;
            change = true;
        }
    }
    return change;
};
/**
 * Extract information about clusters
 *
 * @returns {undefined}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.getClusters = function() {
    var clusters = new Array(this.k);
    var centroidId;
    for(var pointId = 0; pointId < this.assignments.length; pointId++){
        centroidId = this.assignments[pointId];
        // init empty cluster
        if (typeof clusters[centroidId] === 'undefined') clusters[centroidId] = [];
        clusters[centroidId].push(pointId);
    }
    return clusters;
};
// utils
/**
 * @params {Array} point
 * @params {Array.<Array>} set
 * @params {Function} f
 * @returns {number}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.argmin = function(point, set, f) {
    var min = Number.MAX_VALUE;
    var arg = 0;
    var len = set.length;
    var d;
    for(var i = 0; i < len; i++){
        d = f(point, set[i]);
        if (d < min) {
            min = d;
            arg = i;
        }
    }
    return arg;
};
/**
 * Euclidean distance
 *
 * @params {number} p
 * @params {number} q
 * @returns {number}
 */ $0b1a1fcd46318e59$var$KMEANS.prototype.distance = function(p, q) {
    var sum = 0;
    var i = Math.min(p.length, q.length);
    while(i--){
        var diff = p[i] - q[i];
        sum += diff * diff;
    }
    return Math.sqrt(sum);
};
if ("object" !== 'undefined' && module.exports) module.exports = $0b1a1fcd46318e59$var$KMEANS;

});


parcelRequire.register("jzlHC", function(module, exports) {

/**
 * @requires ./PriorityQueue.js
 */ if ("object" !== 'undefined' && module.exports) var $e3f21ee2256f10d2$var$PriorityQueue = (parcelRequire("hfLBG"));
/**
 * OPTICS - Ordering points to identify the clustering structure
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * OPTICS class constructor
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {OPTICS}
 */ function $e3f21ee2256f10d2$var$OPTICS(dataset, epsilon, minPts, distanceFunction) {
    /** @type {number} */ this.epsilon = 1;
    /** @type {number} */ this.minPts = 1;
    /** @type {function} */ this.distance = this._euclideanDistance;
    // temporary variables used during computation
    /** @type {Array} */ this._reachability = [];
    /** @type {Array} */ this._processed = [];
    /** @type {number} */ this._coreDistance = 0;
    /** @type {Array} */ this._orderedList = [];
    this._init(dataset, epsilon, minPts, distanceFunction);
}
/******************************************************************************/ // pulic functions
/**
 * Start clustering
 *
 * @param {Array} dataset
 * @returns {undefined}
 * @access public
 */ $e3f21ee2256f10d2$var$OPTICS.prototype.run = function(dataset, epsilon, minPts, distanceFunction) {
    this._init(dataset, epsilon, minPts, distanceFunction);
    for(var pointId = 0, l = this.dataset.length; pointId < l; pointId++)if (this._processed[pointId] !== 1) {
        this._processed[pointId] = 1;
        this.clusters.push([
            pointId
        ]);
        var clusterId = this.clusters.length - 1;
        this._orderedList.push(pointId);
        var priorityQueue = new $e3f21ee2256f10d2$var$PriorityQueue(null, null, 'asc');
        var neighbors = this._regionQuery(pointId);
        // using priority queue assign elements to new cluster
        if (this._distanceToCore(pointId) !== undefined) {
            this._updateQueue(pointId, neighbors, priorityQueue);
            this._expandCluster(clusterId, priorityQueue);
        }
    }
    return this.clusters;
};
/**
 * Generate reachability plot for all points
 *
 * @returns {array}
 * @access public
 */ $e3f21ee2256f10d2$var$OPTICS.prototype.getReachabilityPlot = function() {
    var reachabilityPlot = [];
    for(var i = 0, l = this._orderedList.length; i < l; i++){
        var pointId = this._orderedList[i];
        var distance = this._reachability[pointId];
        reachabilityPlot.push([
            pointId,
            distance
        ]);
    }
    return reachabilityPlot;
};
/******************************************************************************/ // protected functions
/**
 * Set object properties
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distance
 * @returns {undefined}
 * @access protected
 */ $e3f21ee2256f10d2$var$OPTICS.prototype._init = function(dataset, epsilon, minPts, distance) {
    if (dataset) {
        if (!(dataset instanceof Array)) throw Error('Dataset must be of type array, ' + typeof dataset + ' given');
        this.dataset = dataset;
        this.clusters = [];
        this._reachability = new Array(this.dataset.length);
        this._processed = new Array(this.dataset.length);
        this._coreDistance = 0;
        this._orderedList = [];
    }
    if (epsilon) this.epsilon = epsilon;
    if (minPts) this.minPts = minPts;
    if (distance) this.distance = distance;
};
/**
 * Update information in queue
 *
 * @param {number} pointId
 * @param {Array} neighbors
 * @param {PriorityQueue} queue
 * @returns {undefined}
 * @access protected
 */ $e3f21ee2256f10d2$var$OPTICS.prototype._updateQueue = function(pointId, neighbors, queue) {
    var self = this;
    this._coreDistance = this._distanceToCore(pointId);
    neighbors.forEach(function(pointId2) {
        if (self._processed[pointId2] === undefined) {
            var dist = self.distance(self.dataset[pointId], self.dataset[pointId2]);
            var newReachableDistance = Math.max(self._coreDistance, dist);
            if (self._reachability[pointId2] === undefined) {
                self._reachability[pointId2] = newReachableDistance;
                queue.insert(pointId2, newReachableDistance);
            } else if (newReachableDistance < self._reachability[pointId2]) {
                self._reachability[pointId2] = newReachableDistance;
                queue.remove(pointId2);
                queue.insert(pointId2, newReachableDistance);
            }
        }
    });
};
/**
 * Expand cluster
 *
 * @param {number} clusterId
 * @param {PriorityQueue} queue
 * @returns {undefined}
 * @access protected
 */ $e3f21ee2256f10d2$var$OPTICS.prototype._expandCluster = function(clusterId, queue) {
    var queueElements = queue.getElements();
    for(var p = 0, l = queueElements.length; p < l; p++){
        var pointId = queueElements[p];
        if (this._processed[pointId] === undefined) {
            var neighbors = this._regionQuery(pointId);
            this._processed[pointId] = 1;
            this.clusters[clusterId].push(pointId);
            this._orderedList.push(pointId);
            if (this._distanceToCore(pointId) !== undefined) {
                this._updateQueue(pointId, neighbors, queue);
                this._expandCluster(clusterId, queue);
            }
        }
    }
};
/**
 * Calculating distance to cluster core
 *
 * @param {number} pointId
 * @returns {number}
 * @access protected
 */ $e3f21ee2256f10d2$var$OPTICS.prototype._distanceToCore = function(pointId) {
    var l = this.epsilon;
    for(var coreDistCand = 0; coreDistCand < l; coreDistCand++){
        var neighbors = this._regionQuery(pointId, coreDistCand);
        if (neighbors.length >= this.minPts) return coreDistCand;
    }
    return;
};
/**
 * Find all neighbors around given point
 *
 * @param {number} pointId
 * @param {number} epsilon
 * @returns {Array}
 * @access protected
 */ $e3f21ee2256f10d2$var$OPTICS.prototype._regionQuery = function(pointId, epsilon) {
    epsilon = epsilon || this.epsilon;
    var neighbors = [];
    for(var id = 0, l = this.dataset.length; id < l; id++)if (this.distance(this.dataset[pointId], this.dataset[id]) < epsilon) neighbors.push(id);
    return neighbors;
};
/******************************************************************************/ // helpers
/**
 * Calculate euclidean distance in multidimensional space
 *
 * @param {Array} p
 * @param {Array} q
 * @returns {number}
 * @access protected
 */ $e3f21ee2256f10d2$var$OPTICS.prototype._euclideanDistance = function(p, q) {
    var sum = 0;
    var i = Math.min(p.length, q.length);
    while(i--)sum += (p[i] - q[i]) * (p[i] - q[i]);
    return Math.sqrt(sum);
};
if ("object" !== 'undefined' && module.exports) module.exports = $e3f21ee2256f10d2$var$OPTICS;

});
parcelRequire.register("hfLBG", function(module, exports) {
/**
 * PriorityQueue
 * Elements in this queue are sorted according to their value
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */ /**
 * PriorityQueue class construcotr
 * @constructor
 *
 * @example
 * queue: [1,2,3,4]
 * priorities: [4,1,2,3]
 * > result = [1,4,2,3]
 *
 * @param {Array} elements
 * @param {Array} priorities
 * @param {string} sorting - asc / desc
 * @returns {PriorityQueue}
 */ function $c8f8c41fcf966d64$var$PriorityQueue(elements, priorities, sorting) {
    /** @type {Array} */ this._queue = [];
    /** @type {Array} */ this._priorities = [];
    /** @type {string} */ this._sorting = 'desc';
    this._init(elements, priorities, sorting);
}
/**
 * Insert element
 *
 * @param {Object} ele
 * @param {Object} priority
 * @returns {undefined}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.insert = function(ele, priority) {
    var indexToInsert = this._queue.length;
    var index = indexToInsert;
    while(index--){
        var priority2 = this._priorities[index];
        if (this._sorting === 'desc') {
            if (priority > priority2) indexToInsert = index;
        } else if (priority < priority2) indexToInsert = index;
    }
    this._insertAt(ele, priority, indexToInsert);
};
/**
 * Remove element
 *
 * @param {Object} ele
 * @returns {undefined}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.remove = function(ele) {
    var index = this._queue.length;
    while(index--){
        var ele2 = this._queue[index];
        if (ele === ele2) {
            this._queue.splice(index, 1);
            this._priorities.splice(index, 1);
            break;
        }
    }
};
/**
 * For each loop wrapper
 *
 * @param {function} func
 * @returs {undefined}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.forEach = function(func) {
    this._queue.forEach(func);
};
/**
 * @returns {Array}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.getElements = function() {
    return this._queue;
};
/**
 * @param {number} index
 * @returns {Object}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.getElementPriority = function(index) {
    return this._priorities[index];
};
/**
 * @returns {Array}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.getPriorities = function() {
    return this._priorities;
};
/**
 * @returns {Array}
 * @access public
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype.getElementsWithPriorities = function() {
    var result = [];
    for(var i = 0, l = this._queue.length; i < l; i++)result.push([
        this._queue[i],
        this._priorities[i]
    ]);
    return result;
};
/**
 * Set object properties
 *
 * @param {Array} elements
 * @param {Array} priorities
 * @returns {undefined}
 * @access protected
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype._init = function(elements, priorities, sorting) {
    if (elements && priorities) {
        this._queue = [];
        this._priorities = [];
        if (elements.length !== priorities.length) throw new Error('Arrays must have the same length');
        for(var i = 0; i < elements.length; i++)this.insert(elements[i], priorities[i]);
    }
    if (sorting) this._sorting = sorting;
};
/**
 * Insert element at given position
 *
 * @param {Object} ele
 * @param {number} index
 * @returns {undefined}
 * @access protected
 */ $c8f8c41fcf966d64$var$PriorityQueue.prototype._insertAt = function(ele, priority, index) {
    if (this._queue.length === index) {
        this._queue.push(ele);
        this._priorities.push(priority);
    } else {
        this._queue.splice(index, 0, ele);
        this._priorities.splice(index, 0, priority);
    }
};
if ("object" !== 'undefined' && module.exports) module.exports = $c8f8c41fcf966d64$var$PriorityQueue;

});




if ("object" !== 'undefined' && $ea628a101b201b4b$exports) $ea628a101b201b4b$exports = {
    DBSCAN: (parcelRequire("hlFcf")),
    KMEANS: (parcelRequire("X5WN7")),
    OPTICS: (parcelRequire("jzlHC")),
    PriorityQueue: (parcelRequire("hfLBG"))
};


/**
 * Takes a set of {@link Point|points} and partition them into clusters according to {@link DBSCAN's|https://en.wikipedia.org/wiki/DBSCAN} data clustering algorithm.
 *
 * @name clustersDbscan
 * @param {FeatureCollection<Point>} points to be clustered
 * @param {number} maxDistance Maximum Distance between any point of the cluster to generate the clusters (kilometers only)
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units="kilometers"] in which `maxDistance` is expressed, can be degrees, radians, miles, or kilometers
 * @param {boolean} [options.mutate=false] Allows GeoJSON input to be mutated
 * @param {number} [options.minPoints=3] Minimum number of points to generate a single cluster,
 * points which do not meet this requirement will be classified as an 'edge' or 'noise'.
 * @returns {FeatureCollection<Point>} Clustered Points with an additional two properties associated to each Feature:
 * - {number} cluster - the associated clusterId
 * - {string} dbscan - type of point it has been classified as ('core'|'edge'|'noise')
 * @example
 * // create random points with random z-values in their properties
 * var points = turf.randomPoint(100, {bbox: [0, 30, 20, 50]});
 * var maxDistance = 100;
 * var clustered = turf.clustersDbscan(points, maxDistance);
 *
 * //addToMap
 * var addToMap = [clustered];
 */ function $af33975ec2b83c02$var$clustersDbscan(points, maxDistance, options) {
    // Input validation being handled by Typescript
    // collectionOf(points, 'Point', 'points must consist of a FeatureCollection of only Points');
    // if (maxDistance === null || maxDistance === undefined) throw new Error('maxDistance is required');
    // if (!(Math.sign(maxDistance) > 0)) throw new Error('maxDistance is invalid');
    // if (!(minPoints === undefined || minPoints === null || Math.sign(minPoints) > 0)) throw new Error('options.minPoints is invalid');
    if (options === void 0) options = {
    };
    // Clone points to prevent any mutations
    if (options.mutate !== true) points = $3cfd6d70d7301277$export$9099ad97b570f7c(points);
    // Defaults
    options.minPoints = options.minPoints || 3;
    // create clustered ids
    var dbscan = new (/*@__PURE__*/$parcel$interopDefault($ea628a101b201b4b$exports)).DBSCAN();
    var clusteredIds = dbscan.run($5c76aa7c2c53dcdc$export$5a9cfbedf736c6fa(points), $06fd7bba89ea2716$export$89c2cc3b6c94cff3(maxDistance, options.units), options.minPoints, $bdb7acebc872ae62$export$9099ad97b570f7c);
    // Tag points to Clusters ID
    var clusterId = -1;
    clusteredIds.forEach(function(clusterIds) {
        clusterId++;
        // assign cluster ids to input points
        clusterIds.forEach(function(idx) {
            var clusterPoint = points.features[idx];
            if (!clusterPoint.properties) clusterPoint.properties = {
            };
            clusterPoint.properties.cluster = clusterId;
            clusterPoint.properties.dbscan = "core";
        });
    });
    // handle noise points, if any
    // edges points are tagged by DBSCAN as both 'noise' and 'cluster' as they can "reach" less than 'minPoints' number of points
    dbscan.noise.forEach(function(noiseId) {
        var noisePoint = points.features[noiseId];
        if (!noisePoint.properties) noisePoint.properties = {
        };
        if (noisePoint.properties.cluster) noisePoint.properties.dbscan = "edge";
        else noisePoint.properties.dbscan = "noise";
    });
    return points;
}
var $af33975ec2b83c02$export$9099ad97b570f7c = $af33975ec2b83c02$var$clustersDbscan;


function $c58fcea174b96650$export$9099ad97b570f7c(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;
    const m = left + right >> 1;
    $c58fcea174b96650$var$select(ids, coords, m, left, right, depth % 2);
    $c58fcea174b96650$export$9099ad97b570f7c(ids, coords, nodeSize, left, m - 1, depth + 1);
    $c58fcea174b96650$export$9099ad97b570f7c(ids, coords, nodeSize, m + 1, right, depth + 1);
}
function $c58fcea174b96650$var$select(ids, coords, k, left, right, inc) {
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            $c58fcea174b96650$var$select(ids, coords, k, newLeft, newRight, inc);
        }
        const t = coords[2 * k + inc];
        let i = left;
        let j = right;
        $c58fcea174b96650$var$swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) $c58fcea174b96650$var$swapItem(ids, coords, left, right);
        while(i < j){
            $c58fcea174b96650$var$swapItem(ids, coords, i, j);
            i++;
            j--;
            while(coords[2 * i + inc] < t)i++;
            while(coords[2 * j + inc] > t)j--;
        }
        if (coords[2 * left + inc] === t) $c58fcea174b96650$var$swapItem(ids, coords, left, j);
        else {
            j++;
            $c58fcea174b96650$var$swapItem(ids, coords, j, right);
        }
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}
function $c58fcea174b96650$var$swapItem(ids, coords, i, j) {
    $c58fcea174b96650$var$swap(ids, i, j);
    $c58fcea174b96650$var$swap(coords, 2 * i, 2 * j);
    $c58fcea174b96650$var$swap(coords, 2 * i + 1, 2 * j + 1);
}
function $c58fcea174b96650$var$swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


function $59e683003c353186$export$9099ad97b570f7c(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    const stack = [
        0,
        ids.length - 1,
        0
    ];
    const result = [];
    let x, y;
    while(stack.length){
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();
        if (right - left <= nodeSize) {
            for(let i = left; i <= right; i++){
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }
        const m = Math.floor((left + right) / 2);
        x = coords[2 * m];
        y = coords[2 * m + 1];
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);
        const nextAxis = (axis + 1) % 2;
        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }
    return result;
}


function $c4c4fa1eea446db7$export$9099ad97b570f7c(ids, coords, qx, qy, r, nodeSize) {
    const stack = [
        0,
        ids.length - 1,
        0
    ];
    const result = [];
    const r2 = r * r;
    while(stack.length){
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();
        if (right - left <= nodeSize) {
            for(let i = left; i <= right; i++)if ($c4c4fa1eea446db7$var$sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            continue;
        }
        const m = Math.floor((left + right) / 2);
        const x = coords[2 * m];
        const y = coords[2 * m + 1];
        if ($c4c4fa1eea446db7$var$sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);
        const nextAxis = (axis + 1) % 2;
        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }
    return result;
}
function $c4c4fa1eea446db7$var$sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}


const $1cf2f3289abf70de$var$defaultGetX = (p)=>p[0]
;
const $1cf2f3289abf70de$var$defaultGetY = (p)=>p[1]
;
class $1cf2f3289abf70de$export$9099ad97b570f7c {
    constructor(points, getX = $1cf2f3289abf70de$var$defaultGetX, getY = $1cf2f3289abf70de$var$defaultGetY, nodeSize = 64, ArrayType = Float64Array){
        this.nodeSize = nodeSize;
        this.points = points;
        const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;
        const ids = this.ids = new IndexArrayType(points.length);
        const coords = this.coords = new ArrayType(points.length * 2);
        for(let i = 0; i < points.length; i++){
            ids[i] = i;
            coords[2 * i] = getX(points[i]);
            coords[2 * i + 1] = getY(points[i]);
        }
        $c58fcea174b96650$export$9099ad97b570f7c(ids, coords, nodeSize, 0, ids.length - 1, 0);
    }
    range(minX, minY, maxX, maxY) {
        return $59e683003c353186$export$9099ad97b570f7c(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    }
    within(x, y, r) {
        return $c4c4fa1eea446db7$export$9099ad97b570f7c(this.ids, this.coords, x, y, r, this.nodeSize);
    }
}


const $4548a3b8e0a2dd0b$var$defaultOptions = {
    minZoom: 0,
    maxZoom: 16,
    minPoints: 2,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: false,
    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,
    // a reduce function for calculating custom cluster properties
    reduce: null,
    // properties to use for individual points when running the reducer
    map: (props)=>props // props => ({sum: props.my_value})
};
const $4548a3b8e0a2dd0b$var$fround = Math.fround || ((tmp)=>(x)=>{
        tmp[0] = +x;
        return tmp[0];
    }
)(new Float32Array(1));
class $4548a3b8e0a2dd0b$export$9099ad97b570f7c {
    constructor(options){
        this.options = $4548a3b8e0a2dd0b$var$extend(Object.create($4548a3b8e0a2dd0b$var$defaultOptions), options);
        this.trees = new Array(this.options.maxZoom + 1);
    }
    load(points) {
        const { log: log , minZoom: minZoom , maxZoom: maxZoom , nodeSize: nodeSize  } = this.options;
        if (log) console.time('total time');
        const timerId = `prepare ${points.length} points`;
        if (log) console.time(timerId);
        this.points = points;
        // generate a cluster object for each point and index input points into a KD-tree
        let clusters = [];
        for(let i = 0; i < points.length; i++){
            if (!points[i].geometry) continue;
            clusters.push($4548a3b8e0a2dd0b$var$createPointCluster(points[i], i));
        }
        this.trees[maxZoom + 1] = new $1cf2f3289abf70de$export$9099ad97b570f7c(clusters, $4548a3b8e0a2dd0b$var$getX, $4548a3b8e0a2dd0b$var$getY, nodeSize, Float32Array);
        if (log) console.timeEnd(timerId);
        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for(let z = maxZoom; z >= minZoom; z--){
            const now = +Date.now();
            // create a new set of clusters for the zoom and index them with a KD-tree
            clusters = this._cluster(clusters, z);
            this.trees[z] = new $1cf2f3289abf70de$export$9099ad97b570f7c(clusters, $4548a3b8e0a2dd0b$var$getX, $4548a3b8e0a2dd0b$var$getY, nodeSize, Float32Array);
            if (log) console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now);
        }
        if (log) console.timeEnd('total time');
        return this;
    }
    getClusters(bbox, zoom) {
        let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
        const minLat = Math.max(-90, Math.min(90, bbox[1]));
        let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
        const maxLat = Math.max(-90, Math.min(90, bbox[3]));
        if (bbox[2] - bbox[0] >= 360) {
            minLng = -180;
            maxLng = 180;
        } else if (minLng > maxLng) {
            const easternHem = this.getClusters([
                minLng,
                minLat,
                180,
                maxLat
            ], zoom);
            const westernHem = this.getClusters([
                -180,
                minLat,
                maxLng,
                maxLat
            ], zoom);
            return easternHem.concat(westernHem);
        }
        const tree = this.trees[this._limitZoom(zoom)];
        const ids = tree.range($4548a3b8e0a2dd0b$var$lngX(minLng), $4548a3b8e0a2dd0b$var$latY(maxLat), $4548a3b8e0a2dd0b$var$lngX(maxLng), $4548a3b8e0a2dd0b$var$latY(minLat));
        const clusters = [];
        for (const id of ids){
            const c = tree.points[id];
            clusters.push(c.numPoints ? $4548a3b8e0a2dd0b$var$getClusterJSON(c) : this.points[c.index]);
        }
        return clusters;
    }
    getChildren(clusterId) {
        const originId = this._getOriginId(clusterId);
        const originZoom = this._getOriginZoom(clusterId);
        const errorMsg = 'No cluster with the specified id.';
        const index = this.trees[originZoom];
        if (!index) throw new Error(errorMsg);
        const origin = index.points[originId];
        if (!origin) throw new Error(errorMsg);
        const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
        const ids = index.within(origin.x, origin.y, r);
        const children = [];
        for (const id of ids){
            const c = index.points[id];
            if (c.parentId === clusterId) children.push(c.numPoints ? $4548a3b8e0a2dd0b$var$getClusterJSON(c) : this.points[c.index]);
        }
        if (children.length === 0) throw new Error(errorMsg);
        return children;
    }
    getLeaves(clusterId, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;
        const leaves = [];
        this._appendLeaves(leaves, clusterId, limit, offset, 0);
        return leaves;
    }
    getTile(z, x, y) {
        const tree = this.trees[this._limitZoom(z)];
        const z2 = Math.pow(2, z);
        const { extent: extent , radius: radius  } = this.options;
        const p = radius / extent;
        const top = (y - p) / z2;
        const bottom = (y + 1 + p) / z2;
        const tile = {
            features: []
        };
        this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.points, x, y, z2, tile);
        if (x === 0) this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.points, z2, y, z2, tile);
        if (x === z2 - 1) this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.points, -1, y, z2, tile);
        return tile.features.length ? tile : null;
    }
    getClusterExpansionZoom(clusterId) {
        let expansionZoom = this._getOriginZoom(clusterId) - 1;
        while(expansionZoom <= this.options.maxZoom){
            const children = this.getChildren(clusterId);
            expansionZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return expansionZoom;
    }
    _appendLeaves(result, clusterId, limit, offset, skipped) {
        const children = this.getChildren(clusterId);
        for (const child of children){
            const props = child.properties;
            if (props && props.cluster) {
                if (skipped + props.point_count <= offset) // skip the whole cluster
                skipped += props.point_count;
                else // enter the cluster
                skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
            } else if (skipped < offset) // skip a single point
            skipped++;
            else // add a single point
            result.push(child);
            if (result.length === limit) break;
        }
        return skipped;
    }
    _addTileFeatures(ids, points, x, y, z2, tile) {
        for (const i of ids){
            const c = points[i];
            const isCluster = c.numPoints;
            let tags, px, py;
            if (isCluster) {
                tags = $4548a3b8e0a2dd0b$var$getClusterProperties(c);
                px = c.x;
                py = c.y;
            } else {
                const p = this.points[c.index];
                tags = p.properties;
                px = $4548a3b8e0a2dd0b$var$lngX(p.geometry.coordinates[0]);
                py = $4548a3b8e0a2dd0b$var$latY(p.geometry.coordinates[1]);
            }
            const f = {
                type: 1,
                geometry: [
                    [
                        Math.round(this.options.extent * (px * z2 - x)),
                        Math.round(this.options.extent * (py * z2 - y))
                    ]
                ],
                tags: tags
            };
            // assign id
            let id;
            if (isCluster) id = c.id;
            else if (this.options.generateId) // optionally generate id
            id = c.index;
            else if (this.points[c.index].id) // keep id if already assigned
            id = this.points[c.index].id;
            if (id !== undefined) f.id = id;
            tile.features.push(f);
        }
    }
    _limitZoom(z) {
        return Math.max(this.options.minZoom, Math.min(+z, this.options.maxZoom + 1));
    }
    _cluster(points, zoom) {
        const clusters = [];
        const { radius: radius , extent: extent , reduce: reduce , minPoints: minPoints  } = this.options;
        const r = radius / (extent * Math.pow(2, zoom));
        // loop through each point
        for(let i = 0; i < points.length; i++){
            const p = points[i];
            // if we've already visited the point at this zoom level, skip it
            if (p.zoom <= zoom) continue;
            p.zoom = zoom;
            // find all nearby points
            const tree = this.trees[zoom + 1];
            const neighborIds = tree.within(p.x, p.y, r);
            const numPointsOrigin = p.numPoints || 1;
            let numPoints = numPointsOrigin;
            // count the number of points in a potential cluster
            for (const neighborId of neighborIds){
                const b = tree.points[neighborId];
                // filter out neighbors that are already processed
                if (b.zoom > zoom) numPoints += b.numPoints || 1;
            }
            // if there were neighbors to merge, and there are enough points to form a cluster
            if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                let wx = p.x * numPointsOrigin;
                let wy = p.y * numPointsOrigin;
                let clusterProperties = reduce && numPointsOrigin > 1 ? this._map(p, true) : null;
                // encode both zoom and point index on which the cluster originated -- offset by total length of features
                const id = (i << 5) + (zoom + 1) + this.points.length;
                for (const neighborId1 of neighborIds){
                    const b = tree.points[neighborId1];
                    if (b.zoom <= zoom) continue;
                    b.zoom = zoom; // save the zoom (so it doesn't get processed twice)
                    const numPoints2 = b.numPoints || 1;
                    wx += b.x * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += b.y * numPoints2;
                    b.parentId = id;
                    if (reduce) {
                        if (!clusterProperties) clusterProperties = this._map(p, true);
                        reduce(clusterProperties, this._map(b));
                    }
                }
                p.parentId = id;
                clusters.push($4548a3b8e0a2dd0b$var$createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));
            } else {
                clusters.push(p);
                if (numPoints > 1) for (const neighborId1 of neighborIds){
                    const b = tree.points[neighborId1];
                    if (b.zoom <= zoom) continue;
                    b.zoom = zoom;
                    clusters.push(b);
                }
            }
        }
        return clusters;
    }
    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
        return clusterId - this.points.length >> 5;
    }
    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
        return (clusterId - this.points.length) % 32;
    }
    _map(point, clone) {
        if (point.numPoints) return clone ? $4548a3b8e0a2dd0b$var$extend({
        }, point.properties) : point.properties;
        const original = this.points[point.index].properties;
        const result = this.options.map(original);
        return clone && result === original ? $4548a3b8e0a2dd0b$var$extend({
        }, result) : result;
    }
}
function $4548a3b8e0a2dd0b$var$createCluster(x, y, id, numPoints, properties) {
    return {
        x: $4548a3b8e0a2dd0b$var$fround(x),
        y: $4548a3b8e0a2dd0b$var$fround(y),
        zoom: Infinity,
        id: id,
        parentId: -1,
        numPoints: numPoints,
        properties: properties
    };
}
function $4548a3b8e0a2dd0b$var$createPointCluster(p, id) {
    const [x, y] = p.geometry.coordinates;
    return {
        x: $4548a3b8e0a2dd0b$var$fround($4548a3b8e0a2dd0b$var$lngX(x)),
        y: $4548a3b8e0a2dd0b$var$fround($4548a3b8e0a2dd0b$var$latY(y)),
        zoom: Infinity,
        index: id,
        parentId: -1 // parent cluster id
    };
}
function $4548a3b8e0a2dd0b$var$getClusterJSON(cluster) {
    return {
        type: 'Feature',
        id: cluster.id,
        properties: $4548a3b8e0a2dd0b$var$getClusterProperties(cluster),
        geometry: {
            type: 'Point',
            coordinates: [
                $4548a3b8e0a2dd0b$var$xLng(cluster.x),
                $4548a3b8e0a2dd0b$var$yLat(cluster.y)
            ]
        }
    };
}
function $4548a3b8e0a2dd0b$var$getClusterProperties(cluster) {
    const count = cluster.numPoints;
    const abbrev = count >= 10000 ? `${Math.round(count / 1000)}k` : count >= 1000 ? `${Math.round(count / 100) / 10}k` : count;
    return $4548a3b8e0a2dd0b$var$extend($4548a3b8e0a2dd0b$var$extend({
    }, cluster.properties), {
        cluster: true,
        cluster_id: cluster.id,
        point_count: count,
        point_count_abbreviated: abbrev
    });
}
// longitude/latitude to spherical mercator in [0..1] range
function $4548a3b8e0a2dd0b$var$lngX(lng) {
    return lng / 360 + 0.5;
}
function $4548a3b8e0a2dd0b$var$latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y < 0 ? 0 : y > 1 ? 1 : y;
}
// spherical mercator to longitude/latitude
function $4548a3b8e0a2dd0b$var$xLng(x) {
    return (x - 0.5) * 360;
}
function $4548a3b8e0a2dd0b$var$yLat(y) {
    const y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}
function $4548a3b8e0a2dd0b$var$extend(dest, src) {
    for(const id in src)dest[id] = src[id];
    return dest;
}
function $4548a3b8e0a2dd0b$var$getX(p) {
    return p.x;
}
function $4548a3b8e0a2dd0b$var$getY(p) {
    return p.y;
}


var $65be1c1f2fe5b535$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
var $65be1c1f2fe5b535$var$envHasBigInt64Array = typeof BigInt64Array !== 'undefined';
$65be1c1f2fe5b535$exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            for (i of a.entries())if (!equal(i[1], b.get(i[0]))) return false;
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; (i--) !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; (i--) !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function $abe5479307b3aef5$var$__rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    return t;
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $abe5479307b3aef5$export$4b200d2f979b5b40 {
    constructor({ markers: markers1 , position: position1  }){
        this.markers = markers1;
        if (position1) {
            if (position1 instanceof google.maps.LatLng) this._position = position1;
            else this._position = new google.maps.LatLng(position1);
        }
    }
    get bounds() {
        if (this.markers.length === 0 && !this._position) return undefined;
        return this.markers.reduce((bounds, marker)=>{
            return bounds.extend(marker.getPosition());
        }, new google.maps.LatLngBounds(this._position, this._position));
    }
    get position() {
        return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */ get count() {
        return this.markers.filter((m)=>m.getVisible()
        ).length;
    }
    /**
     * Add a marker to the cluster.
     */ push(marker) {
        this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */ delete() {
        if (this.marker) {
            this.marker.setMap(null);
            delete this.marker;
        }
        this.markers.length = 0;
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $abe5479307b3aef5$export$9b4c6f0182d220fc = (map, mapCanvasProjection, markers1, viewportPadding)=>{
    const extendedMapBounds = $abe5479307b3aef5$export$34b9e5c7ac7df7bb(map.getBounds(), mapCanvasProjection, viewportPadding);
    return markers1.filter((marker)=>extendedMapBounds.contains(marker.getPosition())
    );
};
/**
 * Extends a bounds by a number of pixels in each direction.
 */ const $abe5479307b3aef5$export$34b9e5c7ac7df7bb = (bounds, projection, pixels)=>{
    const { northEast: northEast , southWest: southWest  } = $abe5479307b3aef5$var$latLngBoundsToPixelBounds(bounds, projection);
    const extendedPixelBounds = $abe5479307b3aef5$export$13fae14bb855bb55({
        northEast: northEast,
        southWest: southWest
    }, pixels);
    return $abe5479307b3aef5$export$933460cf3ebd15f3(extendedPixelBounds, projection);
};
/**
 * @hidden
 */ const $abe5479307b3aef5$export$780307dfca60319a = (p1, p2)=>{
    const R = 6371; // Radius of the Earth in km
    const dLat = (p2.lat - p1.lat) * Math.PI / 180;
    const dLon = (p2.lng - p1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * @hidden
 */ const $abe5479307b3aef5$var$latLngBoundsToPixelBounds = (bounds, projection)=>{
    return {
        northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
        southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest())
    };
};
/**
 * @hidden
 */ const $abe5479307b3aef5$export$13fae14bb855bb55 = ({ northEast: northEast , southWest: southWest  }, pixels)=>{
    northEast.x += pixels;
    northEast.y -= pixels;
    southWest.x -= pixels;
    southWest.y += pixels;
    return {
        northEast: northEast,
        southWest: southWest
    };
};
/**
 * @hidden
 */ const $abe5479307b3aef5$export$933460cf3ebd15f3 = ({ northEast: northEast , southWest: southWest  }, projection)=>{
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(projection.fromDivPixelToLatLng(northEast));
    bounds.extend(projection.fromDivPixelToLatLng(southWest));
    return bounds;
};
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @hidden
 */ class $abe5479307b3aef5$export$cc72e4132fdd891 {
    constructor({ maxZoom: maxZoom = 16  }){
        this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers, map})
     *    }
     * }
     * ```
     */ noop({ markers: markers  }) {
        return $abe5479307b3aef5$export$5f8ba94b9c81aa67(markers);
    }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */ class $abe5479307b3aef5$export$9c53a56baa246b22 extends $abe5479307b3aef5$export$cc72e4132fdd891 {
    constructor(_a){
        var { viewportPadding: $abe5479307b3aef5$var$viewportPadding = 60  } = _a, options = $abe5479307b3aef5$var$__rest(_a, [
            "viewportPadding"
        ]);
        super(options);
        this.viewportPadding = 60;
        this.viewportPadding = $abe5479307b3aef5$var$viewportPadding;
    }
    calculate({ markers: markers , map: map , mapCanvasProjection: mapCanvasProjection ,  }) {
        if (map.getZoom() >= this.maxZoom) return {
            clusters: this.noop({
                markers: markers,
                map: map,
                mapCanvasProjection: mapCanvasProjection
            }),
            changed: false
        };
        return {
            clusters: this.cluster({
                markers: $abe5479307b3aef5$export$9b4c6f0182d220fc(map, mapCanvasProjection, markers, this.viewportPadding),
                map: map,
                mapCanvasProjection: mapCanvasProjection
            })
        };
    }
}
/**
 * @hidden
 */ const $abe5479307b3aef5$export$5f8ba94b9c81aa67 = (markers2)=>{
    const clusters = markers2.map((marker)=>new $abe5479307b3aef5$export$4b200d2f979b5b40({
            position: marker.getPosition(),
            markers: [
                marker
            ]
        })
    );
    return clusters;
};
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */ class $abe5479307b3aef5$export$d823936fa88b8fbf extends $abe5479307b3aef5$export$9c53a56baa246b22 {
    constructor(_a1){
        var { maxDistance: $abe5479307b3aef5$var$maxDistance = 40000 , gridSize: $abe5479307b3aef5$var$gridSize = 40  } = _a1, options1 = $abe5479307b3aef5$var$__rest(_a1, [
            "maxDistance",
            "gridSize"
        ]);
        super(options1);
        this.clusters = [];
        this.maxDistance = $abe5479307b3aef5$var$maxDistance;
        this.gridSize = $abe5479307b3aef5$var$gridSize;
    }
    cluster({ markers: markers , map: map , mapCanvasProjection: mapCanvasProjection ,  }) {
        this.clusters = [];
        markers.forEach((marker)=>{
            this.addToClosestCluster(marker, map, mapCanvasProjection);
        });
        return this.clusters;
    }
    addToClosestCluster(marker, map, projection) {
        let maxDistance = this.maxDistance; // Some large number
        let cluster = null;
        for(let i = 0; i < this.clusters.length; i++){
            const candidate = this.clusters[i];
            const distance = $abe5479307b3aef5$export$780307dfca60319a(candidate.bounds.getCenter().toJSON(), marker.getPosition().toJSON());
            if (distance < maxDistance) {
                maxDistance = distance;
                cluster = candidate;
            }
        }
        if (cluster && $abe5479307b3aef5$export$34b9e5c7ac7df7bb(cluster.bounds, projection, this.gridSize).contains(marker.getPosition())) cluster.push(marker);
        else {
            const cluster1 = new $abe5479307b3aef5$export$4b200d2f979b5b40({
                markers: [
                    marker
                ]
            });
            this.clusters.push(cluster1);
        }
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */ class $abe5479307b3aef5$export$364ff8cea68ab62f extends $abe5479307b3aef5$export$cc72e4132fdd891 {
    constructor(_a2){
        var options2 = $abe5479307b3aef5$var$__rest(_a2, []);
        super(options2);
    }
    calculate({ markers: markers , map: map , mapCanvasProjection: mapCanvasProjection ,  }) {
        return {
            clusters: this.cluster({
                markers: markers,
                map: map,
                mapCanvasProjection: mapCanvasProjection
            }),
            changed: false
        };
    }
    cluster(input) {
        return this.noop(input);
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Experimental algorithm using Kmeans.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 *
 * @see https://www.npmjs.com/package/@turf/clusters-kmeans
 */ class $abe5479307b3aef5$export$b708ab62db44cc4 extends $abe5479307b3aef5$export$9c53a56baa246b22 {
    constructor(_a3){
        var { numberOfClusters: $abe5479307b3aef5$var$numberOfClusters  } = _a3, options3 = $abe5479307b3aef5$var$__rest(_a3, [
            "numberOfClusters"
        ]);
        super(options3);
        this.numberOfClusters = $abe5479307b3aef5$var$numberOfClusters;
    }
    cluster({ markers: markers , map: map  }) {
        const clusters = [];
        if (markers.length === 0) return clusters;
        const points = $06fd7bba89ea2716$export$7c422acbc10e74d2(markers.map((marker)=>{
            return $06fd7bba89ea2716$export$8502864bca7c3201([
                marker.getPosition().lng(),
                marker.getPosition().lat()
            ]);
        }));
        let numberOfClusters;
        if (this.numberOfClusters instanceof Function) numberOfClusters = this.numberOfClusters(markers.length, map.getZoom());
        else numberOfClusters = this.numberOfClusters;
        $afde46b62500dbb0$export$9099ad97b570f7c(points, {
            numberOfClusters: numberOfClusters
        }).features.forEach((point, i)=>{
            if (!clusters[point.properties.cluster]) clusters[point.properties.cluster] = new $abe5479307b3aef5$export$4b200d2f979b5b40({
                position: {
                    lng: point.properties.centroid[0],
                    lat: point.properties.centroid[1]
                },
                markers: []
            });
            clusters[point.properties.cluster].push(markers[i]);
        });
        return clusters;
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $abe5479307b3aef5$var$DEFAULT_INTERNAL_DBSCAN_OPTION = {
    units: "kilometers",
    mutate: false,
    minPoints: 1
};
/**
 *
 * **This algorithm is not yet ready for use!**
 *
 * Experimental algorithm using DBScan.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 *
 * @see https://www.npmjs.com/package/@turf/clusters-dbscan
 */ class $abe5479307b3aef5$export$ad8e4ddb40f55457 extends $abe5479307b3aef5$export$9c53a56baa246b22 {
    constructor(_a4){
        var { maxDistance: $abe5479307b3aef5$var$maxDistance = 200 , minPoints: $abe5479307b3aef5$var$minPoints = $abe5479307b3aef5$var$DEFAULT_INTERNAL_DBSCAN_OPTION.minPoints  } = _a4, options4 = $abe5479307b3aef5$var$__rest(_a4, [
            "maxDistance",
            "minPoints"
        ]);
        super(options4);
        this.maxDistance = $abe5479307b3aef5$var$maxDistance;
        this.options = Object.assign(Object.assign({
        }, $abe5479307b3aef5$var$DEFAULT_INTERNAL_DBSCAN_OPTION), {
            minPoints: $abe5479307b3aef5$var$minPoints
        });
    }
    cluster({ markers: markers , mapCanvasProjection: mapCanvasProjection ,  }) {
        const points = $06fd7bba89ea2716$export$7c422acbc10e74d2(markers.map((marker)=>{
            const projectedPoint = mapCanvasProjection.fromLatLngToContainerPixel(marker.getPosition());
            return $06fd7bba89ea2716$export$8502864bca7c3201([
                projectedPoint.x,
                projectedPoint.y
            ]);
        }));
        const grouped = [];
        $af33975ec2b83c02$export$9099ad97b570f7c(points, this.maxDistance, this.options).features.forEach((point, i)=>{
            if (!grouped[point.properties.cluster]) grouped[point.properties.cluster] = [];
            grouped[point.properties.cluster].push(markers[i]);
        });
        return grouped.map((markers2)=>new $abe5479307b3aef5$export$4b200d2f979b5b40({
                markers: markers2
            })
        );
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */ class $abe5479307b3aef5$export$8a0a8f828f6f237c extends $abe5479307b3aef5$export$cc72e4132fdd891 {
    constructor(_a5){
        var { maxZoom: $abe5479307b3aef5$var$maxZoom , radius: $abe5479307b3aef5$var$radius = 60  } = _a5, options5 = $abe5479307b3aef5$var$__rest(_a5, [
            "maxZoom",
            "radius"
        ]);
        super({
            maxZoom: $abe5479307b3aef5$var$maxZoom
        });
        this.superCluster = new $4548a3b8e0a2dd0b$export$9099ad97b570f7c(Object.assign({
            maxZoom: this.maxZoom,
            radius: $abe5479307b3aef5$var$radius
        }, options5));
        this.state = {
            zoom: null
        };
    }
    calculate(input) {
        let changed = false;
        if (!(/*@__PURE__*/$parcel$interopDefault($65be1c1f2fe5b535$exports))(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [
                ...input.markers
            ];
            const points = this.markers.map((marker)=>{
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [
                            marker.getPosition().lng(),
                            marker.getPosition().lat(), 
                        ]
                    },
                    properties: {
                        marker: marker
                    }
                };
            });
            this.superCluster.load(points);
        }
        const state = {
            zoom: input.map.getZoom()
        };
        if (!changed) {
            if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom) ;
            else changed = changed || !(/*@__PURE__*/$parcel$interopDefault($65be1c1f2fe5b535$exports))(this.state, state);
        }
        this.state = state;
        if (changed) this.clusters = this.cluster(input);
        return {
            clusters: this.clusters,
            changed: changed
        };
    }
    cluster({ map: map  }) {
        return this.superCluster.getClusters([
            -180,
            -90,
            180,
            90
        ], map.getZoom()).map(this.transformCluster.bind(this));
    }
    transformCluster({ geometry: { coordinates: [lng, lat] ,  } , properties: properties ,  }) {
        if (properties.cluster) return new $abe5479307b3aef5$export$4b200d2f979b5b40({
            markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf)=>leaf.properties.marker
            ),
            position: new google.maps.LatLng({
                lat: lat,
                lng: lng
            })
        });
        else {
            const marker = properties.marker;
            return new $abe5479307b3aef5$export$4b200d2f979b5b40({
                markers: [
                    marker
                ],
                position: marker.getPosition()
            });
        }
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */ class $abe5479307b3aef5$export$4a881b7a0aba36e2 {
    constructor(markers2, clusters){
        this.markers = {
            sum: markers2.length
        };
        const clusterMarkerCounts = clusters.map((a)=>a.count
        );
        const clusterMarkerSum = clusterMarkerCounts.reduce((a, b)=>a + b
        , 0);
        this.clusters = {
            count: clusters.length,
            markers: {
                mean: clusterMarkerSum / clusters.length,
                sum: clusterMarkerSum,
                min: Math.min(...clusterMarkerCounts),
                max: Math.max(...clusterMarkerCounts)
            }
        };
    }
}
class $abe5479307b3aef5$export$ee0e2b10e0cbe53 {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */ render({ count: count , position: position  }, stats) {
        // change color if this cluster has more markers than the mean cluster
        const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
        // create svg url with fill color
        const svg = window.btoa(`\n  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>`);
        // create marker using svg icon
        return new google.maps.Marker({
            position: position,
            icon: {
                url: `data:image/svg+xml;base64,${svg}`,
                scaledSize: new google.maps.Size(45, 45)
            },
            label: {
                text: String(count),
                color: "rgba(255,255,255,0.9)",
                fontSize: "12px"
            },
            // adjust zIndex to be above other markers
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count
        });
    }
}
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $abe5479307b3aef5$var$extend(type1, type2) {
    /* istanbul ignore next */ // eslint-disable-next-line prefer-const
    for(let property in type2.prototype)type1.prototype[property] = type2.prototype[property];
}
/**
 * @ignore
 */ class $abe5479307b3aef5$var$OverlayViewSafe {
    constructor(){
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        $abe5479307b3aef5$var$extend($abe5479307b3aef5$var$OverlayViewSafe, google.maps.OverlayView);
    }
}
/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $abe5479307b3aef5$export$f0bbe6a8e683fb51;
(function(MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})($abe5479307b3aef5$export$f0bbe6a8e683fb51 || ($abe5479307b3aef5$export$f0bbe6a8e683fb51 = {
}));
const $abe5479307b3aef5$export$f9d00dffdebb53c = (_, cluster, map)=>{
    map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 * <iframe src="https://googlemaps.github.io/js-three/public/anchor/index.html"></iframe>
 */ class $abe5479307b3aef5$export$ecdea5c1dab96b8d extends $abe5479307b3aef5$var$OverlayViewSafe {
    constructor({ map: map , markers: markers3 = [] , algorithm: algorithm = new $abe5479307b3aef5$export$8a0a8f828f6f237c({
    }) , renderer: renderer = new $abe5479307b3aef5$export$ee0e2b10e0cbe53() , onClusterClick: onClusterClick = $abe5479307b3aef5$export$f9d00dffdebb53c ,  }){
        super();
        this.markers = [
            ...markers3
        ];
        this.clusters = [];
        this.algorithm = algorithm;
        this.renderer = renderer;
        this.onClusterClick = onClusterClick;
        if (map) this.setMap(map);
    }
    addMarker(marker, noDraw) {
        if (this.markers.includes(marker)) return;
        this.markers.push(marker);
        if (!noDraw) this.render();
    }
    addMarkers(markers, noDraw) {
        markers.forEach((marker)=>{
            this.addMarker(marker, true);
        });
        if (!noDraw) this.render();
    }
    removeMarker(marker, noDraw) {
        const index = this.markers.indexOf(marker);
        if (index === -1) // Marker is not in our list of markers, so do nothing:
        return false;
        marker.setMap(null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        if (!noDraw) this.render();
        return true;
    }
    removeMarkers(markers, noDraw) {
        let removed = false;
        markers.forEach((marker)=>{
            removed = this.removeMarker(marker, true) || removed;
        });
        if (removed && !noDraw) this.render();
        return removed;
    }
    clearMarkers(noDraw) {
        this.markers.length = 0;
        if (!noDraw) this.render();
    }
    /**
     * Recalculates and draws all the marker clusters.
     */ render() {
        const map1 = this.getMap();
        if (map1 instanceof google.maps.Map && this.getProjection()) {
            google.maps.event.trigger(this, $abe5479307b3aef5$export$f0bbe6a8e683fb51.CLUSTERING_BEGIN, this);
            const { clusters: clusters1 , changed: changed  } = this.algorithm.calculate({
                markers: this.markers,
                map: map1,
                mapCanvasProjection: this.getProjection()
            });
            // allow algorithms to return flag on whether the clusters/markers have changed
            if (changed || changed == undefined) {
                // reset visibility of markers and clusters
                this.reset();
                // store new clusters
                this.clusters = clusters1;
                this.renderClusters();
            }
            google.maps.event.trigger(this, $abe5479307b3aef5$export$f0bbe6a8e683fb51.CLUSTERING_END, this);
        }
    }
    onAdd() {
        this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
        this.render();
    }
    onRemove() {
        google.maps.event.removeListener(this.idleListener);
        this.reset();
    }
    reset() {
        this.markers.forEach((marker)=>marker.setMap(null)
        );
        this.clusters.forEach((cluster)=>cluster.delete()
        );
        this.clusters = [];
    }
    renderClusters() {
        // generate stats to pass to renderers
        const stats = new $abe5479307b3aef5$export$4a881b7a0aba36e2(this.markers, this.clusters);
        const map1 = this.getMap();
        this.clusters.forEach((cluster)=>{
            if (cluster.markers.length === 1) cluster.marker = cluster.markers[0];
            else {
                cluster.marker = this.renderer.render(cluster, stats);
                if (this.onClusterClick) cluster.marker.addListener("click", /* istanbul ignore next */ (event)=>{
                    google.maps.event.trigger(this, $abe5479307b3aef5$export$f0bbe6a8e683fb51.CLUSTER_CLICK, cluster);
                    this.onClusterClick(event, cluster, map1);
                });
            }
            cluster.marker.setMap(map1);
        });
    }
}


var $5cab7f24a6cc18af$export$b2f13e228c542ebb = window.google;


var $eec1dd49d0c67d6b$export$a0bd1dffd4b583c = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($eec1dd49d0c67d6b$export$a0bd1dffd4b583c, Renderer);
    function $eec1dd49d0c67d6b$export$a0bd1dffd4b583c(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $eec1dd49d0c67d6b$export$a0bd1dffd4b583c);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($eec1dd49d0c67d6b$export$a0bd1dffd4b583c).call(this, params));
        /////////////////////////////////////////////
        // parameters that can be passed in
        // what should the renderer do if there are no geopoints
        // can be one of:
        // render - render the map anyway, with no geopoints on it
        // hide - hide the map and display the mapHiddenText
        _this.onNoGeoPoints = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "onNoGeoPoints", "render");
        // text to render if the map has no geo points and the behaviour is "hide"
        _this.mapHiddenText = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "mapHiddenText", "No map data available");
        // initial zoom level
        _this.initialZoom = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "initialZoom", 2);
        // initial map type
        _this.mapType = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "mapType", "hybrid");
        _this.labelFunction = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "labelFunction", false);
        // should we be using the google maps clustering features
        _this.cluster = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "cluster", false);
        _this.reQueryOnBoundsChange = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "reQueryOnBoundsChange", false);
        _this.clusterIcons = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "clusterIcons", {
            0: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png"
        });
        _this.renderCluster = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "renderCluster", false);
        /////////////////////////////////////////////
        // internal state
        _this.namespace = "edges-google-map-view";
        _this.map = false;
        _this.markers = [];
        _this.markerCluster = false;
        _this.currentZoom = false;
        _this.currentBounds = false;
        // for reasons unknown, on draw the map generates 2 idle events in rapid succession.  This allows us
        // to squash responding to them
        _this.skipIdleEvent = 2;
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($eec1dd49d0c67d6b$export$a0bd1dffd4b583c, [
        {
            key: "draw",
            value: function draw() {
                // now check if there are any geo points, and if there's anything we should do about it
                if (this.component.locations.length === 0) {
                    if (this.onNoGeoPoints === "hide") {
                        this.component.context.html(this.mapHiddenText);
                        return;
                    }
                }
                this.skipIdleEvent = 2;
                var centre = new $5cab7f24a6cc18af$export$b2f13e228c542ebb.maps.LatLng(this.component.centre.lat, this.component.centre.lon);
                if (!this.map) {
                    var canvasClass = $d48cc3604bf30e24$export$e516ebba864be69d(this.namespace, "canvas", this);
                    var canvasSelector = $d48cc3604bf30e24$export$b1157bd4df096bce(this.namespace, "canvas", this);
                    this.component.context.html('<div class="' + canvasClass + '"></div>');
                    var element = this.component.jq(canvasSelector)[0];
                    var mapTypeId = this.mapType;
                    if (this.mapType === "hybrid") mapTypeId = $5cab7f24a6cc18af$export$b2f13e228c542ebb.maps.MapTypeId.HYBRID;
                    var mapOptions = {
                        zoom: this.initialZoom,
                        center: centre,
                        mapTypeId: mapTypeId
                    };
                    this.map = new $5cab7f24a6cc18af$export$b2f13e228c542ebb.maps.Map(element, mapOptions);
                    // make sure we set the centre right
                    this.map.setCenter(centre);
                }
                // clear any existing markers/clusters
                if (this.cluster && this.markerCluster) {
                    this.markerCluster.clearMarkers();
                    this.markerCluster = false;
                }
                for(i = 0; i < this.markers.length; i++)this.markers[i].setMap(null);
                this.markers = [];
                for(var i = 0; i < this.component.locations.length; i++){
                    var loc = this.component.locations[i];
                    var myLatlng = new $5cab7f24a6cc18af$export$b2f13e228c542ebb.maps.LatLng(loc.lat, loc.lon);
                    var properties = {
                        position: myLatlng
                    };
                    if (!this.cluster) // otherwise the mapping clusterer will deal with it
                    properties["map"] = this.map;
                    if (this.cluster) {
                        var icon = this._getClusterIcon(loc.count);
                        if (icon) properties["icon"] = icon;
                    }
                    if (this.labelFunction) properties["label"] = {
                        text: this.labelFunction(loc)
                    } // e.g. loc.count.toString()
                    ;
                    var marker = new $5cab7f24a6cc18af$export$b2f13e228c542ebb.maps.Marker(properties);
                    this.markers.push(marker);
                }
                if (this.cluster) {
                    var props = {
                        map: this.map,
                        markers: this.markers
                    };
                    if (this.renderCluster) props["renderer"] = this.renderCluster;
                    this.markerCluster = new $abe5479307b3aef5$export$ecdea5c1dab96b8d(props);
                }
                if (this.reQueryOnBoundsChange) {
                    var onBoundsChanged = $d48cc3604bf30e24$export$367047a567f2342b(this, "boundsChanged");
                    this.map.addListener("idle", onBoundsChanged);
                }
            }
        },
        {
            key: "boundsChanged",
            value: function boundsChanged() {
                // prevent the idle event from triggering a re-query the first time, as it does
                // this on load
                if (this.skipIdleEvent > 0) {
                    this.skipIdleEvent--;
                    return;
                }
                var bounds = this.map.getBounds();
                var zoom = this.map.getZoom();
                var ne = bounds.getNorthEast();
                var sw = bounds.getSouthWest();
                var top_left = {
                    lat: ne.lat(),
                    lon: sw.lng()
                };
                var bottom_right = {
                    lat: sw.lat(),
                    lon: ne.lng()
                };
                this.component.boundsChanged({
                    top_left: top_left,
                    bottom_right: bottom_right,
                    zoom: zoom
                });
            }
        },
        {
            key: "_getClusterIcon",
            value: function _getClusterIcon(count) {
                var icon = false;
                var highest = -1;
                for(var limit in this.clusterIcons)if (limit <= count && limit > highest) {
                    icon = this.clusterIcons[limit];
                    highest = limit;
                }
                return icon;
            }
        }
    ]);
    return $eec1dd49d0c67d6b$export$a0bd1dffd4b583c;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);






var $2c48e414d79136ba$export$845e14b82c9a4f95 = /*#__PURE__*/ function(Component) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($2c48e414d79136ba$export$845e14b82c9a4f95, Component);
    function $2c48e414d79136ba$export$845e14b82c9a4f95(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $2c48e414d79136ba$export$845e14b82c9a4f95);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($2c48e414d79136ba$export$845e14b82c9a4f95).call(this, params));
        $9b036347ace9941e$export$9099ad97b570f7c($f483f7288df68fd0$export$9099ad97b570f7c(_this), /////////////////////////////////////////////////
        // query handlers for getting the full list of terms to display
        "listAll", function() {
            // to list all possible terms, build off the base query
            var bq = _this.edge.cloneBaseQuery();
            bq.clearAggregations();
            bq.size = 0;
            // now add the aggregation that we want
            var params1 = {
                name: _this.id,
                field: _this.field,
                orderBy: _this.orderBy,
                orderDir: _this.orderDir,
                size: _this.size
            };
            bq.addAggregation(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation(params1));
            _this.latestQuery = bq;
            // issue the query to elasticsearch
            _this.edge.queryAdapter.doQuery({
                edge: _this.edge,
                query: bq,
                success: $d48cc3604bf30e24$export$367047a567f2342b($f483f7288df68fd0$export$9099ad97b570f7c(_this), "listAllQuerySuccess", [
                    "result"
                ]),
                error: $d48cc3604bf30e24$export$367047a567f2342b($f483f7288df68fd0$export$9099ad97b570f7c(_this), "listAllQueryFail")
            });
        });
        $9b036347ace9941e$export$9099ad97b570f7c($f483f7288df68fd0$export$9099ad97b570f7c(_this), "doUpdate", function() {
            // is an update already happening?
            if (_this.updating) return;
            _this.udpating = true;
            // to list all current terms, build off the current query
            var bq = _this.edge.cloneQuery();
            // remove any constraint on this field, and clear the aggregations and set size to 0 for performance
            bq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                field: _this.field
            }));
            bq.clearAggregations();
            bq.size = 0;
            // now add the aggregation that we want
            var params1 = {
                name: _this.id,
                field: _this.field,
                orderBy: _this.orderBy,
                orderDir: _this.orderDir,
                size: _this.size
            };
            bq.addAggregation(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation(params1));
            _this.latestQuery = bq;
            // issue the query to elasticsearch
            _this.edge.queryAdapter.doQuery({
                edge: _this.edge,
                query: bq,
                success: $d48cc3604bf30e24$export$367047a567f2342b($f483f7288df68fd0$export$9099ad97b570f7c(_this), "doUpdateQuerySuccess", [
                    "result"
                ]),
                error: $d48cc3604bf30e24$export$367047a567f2342b($f483f7288df68fd0$export$9099ad97b570f7c(_this), "doUpdateQueryFail")
            });
        });
        $9b036347ace9941e$export$9099ad97b570f7c($f483f7288df68fd0$export$9099ad97b570f7c(_this), //////////////////////////////////////////
        // "private" functions for internal use
        "_translate", function(term) {
            if (_this.valueMap) {
                if (term in _this.valueMap) return _this.valueMap[term];
            } else if (_this.valueFunction) return _this.valueFunction(term);
            return term;
        });
        // field upon which to build the selector
        _this.field = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "field");
        // whether the facet should be displayed at all (e.g. you may just want the data for a callback)
        _this.active = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "active", true);
        // whether this component updates itself on every request, or whether it is static
        // throughout its lifecycle.  One of "update" or "static"
        _this.lifecycle = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "lifecycle", "static");
        // if the update type is "update", then how should this component update the facet values
        // * mergeInitial - always keep the initial list in the original order, and merge the bucket counts onto the correct terms
        // * fresh - just use the values in the most recent aggregation, ignoring the initial values
        _this.updateType = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "updateType", "mergeInitial");
        // which ordering to use term/count and asc/desc
        _this.orderBy = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "orderBy", "term");
        _this.orderDir = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "orderDir", "asc");
        // number of results that we should display - remember that this will only
        // be used once, so should be large enough to gather all the values that might
        // be in the index
        _this.size = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "size", 10);
        // provide a map of values for terms to displayable terms, or a function
        // which can be used to translate terms to displyable values
        _this.valueMap = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueMap", false);
        _this.valueFunction = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueFunction", false);
        // should we try to synchronise the term counts from an equivalent aggregation on the
        // primary query?  You can turn this off if you aren't displaying counts or otherwise
        // modifying the display based on the counts
        _this.syncCounts = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "syncCounts", true);
        //////////////////////////////////////////
        // properties used to store internal state
        // a place to store the raw result from the last query made for data
        _this.latestQuery = false;
        _this.latestResult = false;
        // an explicit list of terms to be displayed.  If this is not passed in, then a query
        // will be issues which will populate this with the values
        // of the form
        // [{term: "<value>", display: "<display value>", count: <number of records>}]
        _this.terms = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "terms", false);
        // values of terms that have been selected from this.terms
        // this is just a plain list of the values
        _this.selected = [];
        // is the object currently updating itself
        _this.updating = false;
        _this.reQueryAfterListAll = false;
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($2c48e414d79136ba$export$845e14b82c9a4f95, [
        {
            key: "init",
            value: function init(edge) {
                // first kick the request up to the superclass
                $17c4d4a7c863d924$export$9099ad97b570f7c($da23c25529bb1df4$export$9099ad97b570f7c($2c48e414d79136ba$export$845e14b82c9a4f95.prototype), "init", this).call(this, edge);
                // now trigger a request for the terms to present, if not explicitly provided
                if (!this.terms) {
                    if (this.edge.openingQuery || this.edge.urlQuery) this.reQueryAfterListAll = true;
                    this.listAll();
                }
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
                // reset the internal properties
                this.selected = [];
                // extract all the filter values that pertain to this selector
                if (this.edge.currentQuery) {
                    var filters = this.edge.currentQuery.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                    for(var i = 0; i < filters.length; i++)for(var j = 0; j < filters[i].values.length; j++){
                        var val = filters[i].values[j];
                        this.selected.push(val);
                    }
                }
                if (this.syncCounts && this.edge.result && this.terms) this._synchroniseTerms({
                    result: this.edge.result
                });
            }
        },
        {
            key: "_synchroniseTermsMergeInitial",
            value: function _synchroniseTermsMergeInitial(params) {
                var result = params.result;
                // mesh the terms in the aggregation with the terms in the terms list
                var buckets = result.buckets(this.id);
                for(var i = 0; i < this.terms.length; i++){
                    var t = this.terms[i];
                    var found = false;
                    for(var j = 0; j < buckets.length; j++){
                        var b = buckets[j];
                        if (t.term === b.key) {
                            t.count = b.doc_count;
                            found = true;
                            break;
                        }
                    }
                    if (!found) t.count = 0;
                }
            }
        },
        {
            key: "_synchroniseTerms",
            value: function _synchroniseTerms(params) {
                if (this.updateType === "mergeInitial") this._synchroniseTermsMergeInitial(params);
                else this._synchroniseTermsFresh(params);
            }
        },
        {
            key: "_synchroniseTermsFresh",
            value: function _synchroniseTermsFresh(params) {
                var result = params.result;
                this.terms = [];
                var buckets = result.buckets(this.id);
                for(var i = 0; i < buckets.length; i++){
                    var bucket = buckets[i];
                    this.terms.push({
                        term: bucket.key,
                        display: this._translate(bucket.key),
                        count: bucket.doc_count
                    });
                }
            }
        },
        {
            key: "listAllQuerySuccess",
            value: function listAllQuerySuccess(params) {
                var result = params.result;
                this.latestResult = result;
                // get the terms out of the aggregation
                this.terms = [];
                var buckets = result.buckets(this.id);
                for(var i = 0; i < buckets.length; i++){
                    var bucket = buckets[i];
                    this.terms.push({
                        term: bucket.key,
                        display: this._translate(bucket.key),
                        count: bucket.doc_count
                    });
                }
                // allow the event handler to be set up
                this.setupEvent();
                // in case there's a race between this and another update operation, subsequently synchronise
                this.synchronise();
                if (this.reQueryAfterListAll) this.doUpdate();
                else // since this happens asynchronously, we may want to draw
                this.draw();
            }
        },
        {
            key: "listAllQueryFail",
            value: function listAllQueryFail() {
                this.terms = [];
            }
        },
        {
            key: "setupEvent",
            value: function setupEvent() {
                if (this.lifecycle === "update") this.edge.context.on("edges:pre-query", $d48cc3604bf30e24$export$866a93d0ccff8292(this, "doUpdate"));
            }
        },
        {
            key: "doUpdateQuerySuccess",
            value: function doUpdateQuerySuccess(params) {
                var result = params.result;
                this.latestResult = result;
                this._synchroniseTerms({
                    result: result
                });
                // turn off the update flag
                this.updating = false;
                // since this happens asynchronously, we may want to draw
                this.draw();
            }
        },
        {
            key: "doUpdateQueryFail",
            value: function doUpdateQueryFail() {
                // just do nothing, hopefully the next request will be successful
                this.updating = false;
            }
        },
        {
            ///////////////////////////////////////////
            // state change functions
            key: "selectTerms",
            value: function selectTerms(params) {
                var terms = params.terms;
                var clearOthers = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "clearOthers", false);
                var nq = this.edge.cloneQuery();
                // first find out if there was a terms filter already in place
                var filters = nq.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                // if there is, just add the term to it
                if (filters.length > 0) {
                    var filter = filters[0];
                    if (clearOthers) filter.clear_terms();
                    var hadTermAlready = 0;
                    for(var i = 0; i < terms.length; i++){
                        var term = terms[i];
                        if (filter.has_term(term)) hadTermAlready++;
                        else filter.add_term(term);
                    }
                    // if all we did was remove terms that we're then going to re-add, just do nothing
                    if (filter.has_terms() && hadTermAlready === terms.length) return false;
                    else if (!filter.has_terms()) nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                } else // otherwise, set the Terms Filter
                nq.addMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field,
                    values: terms
                }));
                // reset the search page to the start and then trigger the next query
                nq.from = 0;
                this.edge.pushQuery(nq);
                this.edge.cycle();
                return true;
            }
        },
        {
            key: "selectTerm",
            value: function selectTerm(term) {
                return this.selectTerms({
                    terms: [
                        term
                    ]
                });
            }
        },
        {
            key: "removeFilter",
            value: function removeFilter(term) {
                var nq = this.edge.cloneQuery();
                // first find out if there was a terms filter already in place
                var filters = nq.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                if (filters.length > 0) {
                    var filter = filters[0];
                    if (filter.has_term(term)) filter.remove_term(term);
                    if (!filter.has_terms()) nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                }
                // reset the search page to the start and then trigger the next query
                nq.from = 0;
                this.edge.pushQuery(nq);
                this.edge.cycle();
            }
        },
        {
            key: "clearFilters",
            value: function clearFilters(params) {
                var triggerQuery = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "triggerQuery", true);
                if (this.selected.length > 0) {
                    var nq = this.edge.cloneQuery();
                    nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                    this.edge.pushQuery(nq);
                }
                if (triggerQuery) this.edge.cycle();
            }
        }
    ]);
    return $2c48e414d79136ba$export$845e14b82c9a4f95;
}($6cf4dc301226cb87$export$ea71c44d9cb0d048);






var $58e70bcc9ea9714f$export$6175c660df807dd = /*#__PURE__*/ function(Component) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($58e70bcc9ea9714f$export$6175c660df807dd, Component);
    function $58e70bcc9ea9714f$export$6175c660df807dd(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $58e70bcc9ea9714f$export$6175c660df807dd);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($58e70bcc9ea9714f$export$6175c660df807dd).call(this, params));
        // field upon which to build the selector
        _this.field = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "field");
        // whether the facet should be displayed at all (e.g. you may just want the data for a callback)
        _this.active = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "active", true);
        // if the update type is "update", then how should this component update the facet values
        // * mergeInitial - always keep the initial list in the original order, and merge the bucket counts onto the correct terms
        // * fresh - just use the values in the most recent aggregation, ignoring the initial values
        _this.updateType = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "updateType", "mergeInitial");
        // which ordering to use term/count and asc/desc
        _this.orderBy = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "orderBy", "term");
        _this.orderDir = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "orderDir", "asc");
        // number of results that we should display - remember that this will only
        // be used once, so should be large enough to gather all the values that might
        // be in the index
        _this.size = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "size", 10);
        // provide a map of values for terms to displayable terms, or a function
        // which can be used to translate terms to displyable values
        _this.valueMap = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueMap", false);
        _this.valueFunction = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueFunction", false);
        //////////////////////////////////////////
        // properties used to store internal state
        // a place to store the raw result from the last query made for data
        _this.latestQuery = false;
        _this.latestResult = false;
        // an explicit list of terms to be displayed.
        // [{term: "<value>", display: "<display value>", count: <number of records>}]
        _this.terms = false;
        // values of terms that have been selected from this.terms
        // this is just a plain list of the values
        _this.selected = [];
        // the list of all available terms
        _this.all = false;
        // is the object currently updating itself
        _this.updating = false;
        _this.reQueryAfterListAll = false;
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($58e70bcc9ea9714f$export$6175c660df807dd, [
        {
            key: "init",
            value: function init(edge) {
                // first kick the request up to the superclass
                $17c4d4a7c863d924$export$9099ad97b570f7c($da23c25529bb1df4$export$9099ad97b570f7c($58e70bcc9ea9714f$export$6175c660df807dd.prototype), "init", this).call(this, edge);
                // now trigger a request for the terms to present, if not explicitly provided
                if (this.updateType) {
                    if (this.edge.openingQuery || this.edge.urlQuery) this.reQueryAfterListAll = true;
                }
                this.listAll();
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
                // we can't synchronise if this.all has not yet been populated and the doUpdate function
                // has not given us a latest result.  This effectively prevents the main edges lifecycle from
                // ever successfully executing this function, which is the result we want.  This component
                // is entirely dependent on its own internal lifecycle
                if (this.all === false || this.latestResult === false) return;
                // reset the internal properties
                this.selected = [];
                this.terms = [];
                // extract all the filter values that pertain to this selector
                if (this.edge.currentQuery) {
                    var filters = this.edge.currentQuery.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                    for(var i = 0; i < filters.length; i++)for(var j = 0; j < filters[i].values.length; j++){
                        var val = filters[i].values[j];
                        this.selected.push(val);
                    }
                }
                // now merge the aggTerms and the this.all values according to the appropriate algorithm
                if (this.updateType === "mergeInitial") this._makeTermsMergeInitial();
                else this._makeTermsFresh();
            }
        },
        {
            key: "_makeTermsMergeInitial",
            value: function _makeTermsMergeInitial() {
                // mesh the terms in the aggregation with the terms in the terms list
                var buckets = this.latestResult.buckets(this.id);
                for(var i = 0; i < this.terms.length; i++){
                    var t = this.terms[i];
                    var found = false;
                    for(var j = 0; j < buckets.length; j++){
                        var b = buckets[j];
                        if (t.term === b.key) {
                            t.count = b.doc_count;
                            found = true;
                            break;
                        }
                    }
                    if (!found) t.count = 0;
                }
            }
        },
        {
            key: "_makeTermsFresh",
            value: function _makeTermsFresh() {
                var buckets = this.latestResult.buckets(this.id);
                this.terms = [];
                for(var i = 0; i < buckets.length; i++){
                    var bucket = buckets[i];
                    this.terms.push({
                        term: bucket.key,
                        display: this.translate(bucket.key),
                        count: bucket.doc_count
                    });
                }
            }
        },
        {
            /////////////////////////////////////////////////
            // query handlers for getting the full list of terms to display
            key: "listAll",
            value: function listAll() {
                // to list all possible terms, build off the base query
                var bq = this.edge.cloneBaseQuery();
                bq.clearAggregations();
                bq.size = 0;
                // now add the aggregation that we want
                var params = {
                    name: this.id,
                    field: this.field,
                    orderBy: this.orderBy,
                    orderDir: this.orderDir,
                    size: this.size
                };
                bq.addAggregation(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation(params));
                this.latestQuery = bq;
                // issue the query to elasticsearch
                this.edge.queryAdapter.doQuery({
                    edge: this.edge,
                    query: bq,
                    success: $d48cc3604bf30e24$export$367047a567f2342b(this, "listAllQuerySuccess", [
                        "result"
                    ]),
                    error: $d48cc3604bf30e24$export$367047a567f2342b(this, "listAllQueryFail")
                });
            }
        },
        {
            key: "listAllQuerySuccess",
            value: function listAllQuerySuccess(params) {
                var result = params.result;
                // get the terms out of the aggregation
                this.all = [];
                var buckets = result.buckets(this.id);
                for(var i = 0; i < buckets.length; i++){
                    var bucket = buckets[i];
                    this.all.push({
                        term: bucket.key,
                        display: this.translate(bucket.key),
                        count: bucket.doc_count
                    });
                }
                // allow the event handler to be set up
                this.setupEvent();
                if (this.reQueryAfterListAll) this.doUpdate();
                else {
                    // once we have listed all the values, we may be able to synchronise and draw
                    this.latestResult = result;
                    this.synchronise();
                    this.draw();
                }
            }
        },
        {
            key: "listAllQueryFail",
            value: function listAllQueryFail() {
                this.all = false;
            }
        },
        {
            key: "setupEvent",
            value: function setupEvent() {
                this.edge.context.on("edges:pre-query", $d48cc3604bf30e24$export$866a93d0ccff8292(this, "doUpdate"));
            }
        },
        {
            ///////////////////////////////////////////
            // query handlers for repeat queries
            key: "doUpdate",
            value: function doUpdate() {
                // is an update already happening?
                if (this.updating) return;
                this.udpating = true;
                // to list all current terms, build off the current query
                var bq = this.edge.cloneQuery();
                // remove any constraint on this field, and clear the aggregations and set size to 0 for performance
                bq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                bq.clearAggregations();
                bq.size = 0;
                // now add the aggregation that we want
                var params = {
                    name: this.id,
                    field: this.field,
                    orderBy: this.orderBy,
                    orderDir: this.orderDir,
                    size: this.size
                };
                bq.addAggregation(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation(params));
                this.latestQuery = bq;
                // issue the query to elasticsearch
                this.edge.queryAdapter.doQuery({
                    edge: this.edge,
                    query: bq,
                    success: $d48cc3604bf30e24$export$367047a567f2342b(this, "doUpdateQuerySuccess", [
                        "result"
                    ]),
                    error: $d48cc3604bf30e24$export$367047a567f2342b(this, "doUpdateQueryFail")
                });
            }
        },
        {
            key: "doUpdateQuerySuccess",
            value: function doUpdateQuerySuccess(params) {
                this.latestResult = params.result;
                this.synchronise();
                // turn off the update flag
                this.updating = false;
                // since this happens asynchronously, we may want to draw
                this.draw();
            }
        },
        {
            key: "doUpdateQueryFail",
            value: function doUpdateQueryFail() {
                // just do nothing, hopefully the next request will be successful
                this.latestResult = false;
                this.updating = false;
            }
        },
        {
            ///////////////////////////////////////////
            // state change functions
            key: "selectTerms",
            value: function selectTerms(params) {
                var terms = params.terms;
                var clearOthers = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "clearOthers", false);
                var nq = this.edge.cloneQuery();
                // first find out if there was a terms filter already in place
                var filters = nq.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                // if there is, just add the term to it
                if (filters.length > 0) {
                    var filter = filters[0];
                    if (clearOthers) filter.clear_terms();
                    var hadTermAlready = 0;
                    for(var i = 0; i < terms.length; i++){
                        var term = terms[i];
                        if (filter.has_term(term)) hadTermAlready++;
                        else filter.add_term(term);
                    }
                    // if all we did was remove terms that we're then going to re-add, just do nothing
                    if (filter.has_terms() && hadTermAlready === terms.length) return false;
                    else if (!filter.has_terms()) nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                } else // otherwise, set the Terms Filter
                nq.addMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field,
                    values: terms
                }));
                // reset the search page to the start and then trigger the next query
                this.latestResult = false;
                nq.from = 0;
                this.edge.pushQuery(nq);
                this.edge.cycle();
                return true;
            }
        },
        {
            key: "selectTerm",
            value: function selectTerm(term) {
                return this.selectTerms({
                    terms: [
                        term
                    ]
                });
            }
        },
        {
            key: "removeFilter",
            value: function removeFilter(term) {
                var nq = this.edge.cloneQuery();
                // first find out if there was a terms filter already in place
                var filters = nq.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: this.field
                }));
                if (filters.length > 0) {
                    var filter = filters[0];
                    if (filter.has_term(term)) filter.remove_term(term);
                    if (!filter.has_terms()) nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                }
                // reset the search page to the start and then trigger the next query
                this.latestResult = false;
                nq.from = 0;
                this.edge.pushQuery(nq);
                this.edge.cycle();
            }
        },
        {
            key: "clearFilters",
            value: function clearFilters(params) {
                var triggerQuery = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "triggerQuery", true);
                if (this.selected.length > 0) {
                    var nq = this.edge.cloneQuery();
                    nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                        field: this.field
                    }));
                    this.edge.pushQuery(nq);
                }
                if (triggerQuery) {
                    this.latestResult = false;
                    this.edge.cycle();
                }
            }
        },
        {
            //////////////////////////////////////////
            // convenience functions
            key: "translate",
            value: function translate(term) {
                if (this.valueMap) {
                    if (term in this.valueMap) return this.valueMap[term];
                } else if (this.valueFunction) return this.valueFunction(term);
                return term;
            }
        }
    ]);
    return $58e70bcc9ea9714f$export$6175c660df807dd;
}($6cf4dc301226cb87$export$ea71c44d9cb0d048);





var $135bcb32af9eb45d$export$4b392426dd40333d = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($135bcb32af9eb45d$export$4b392426dd40333d, Renderer);
    function $135bcb32af9eb45d$export$4b392426dd40333d(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $135bcb32af9eb45d$export$4b392426dd40333d);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($135bcb32af9eb45d$export$4b392426dd40333d).call(this));
        _this.title = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "title", "Select");
        // whether the facet should be open or closed
        // can be initialised and is then used to track internal state
        _this.open = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "open", false);
        _this.togglable = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "togglable", true);
        // whether the count should be displayed along with the term
        // defaults to false because count may be confusing to the user in an OR selector
        _this.showCount = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showCount", false);
        _this.countFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "countFormat", false);
        // whether counts of 0 should prevent the value being rendered
        _this.hideEmpty = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "hideEmpty", false);
        _this.openIcon = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "openIcon", "glyphicon glyphicon-plus");
        _this.closeIcon = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "closeIcon", "glyphicon glyphicon-minus");
        // don't display the facet at all if there is no data to display
        _this.hideIfNoData = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "hideIfNoData", true);
        _this.layout = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "layout", "left");
        // namespace to use in the page
        _this.namespace = "edges-bs3-checkboxortermselector";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($135bcb32af9eb45d$export$4b392426dd40333d, [
        {
            key: "draw",
            value: function draw() {
                // for convenient short references ...
                var ts = this.component;
                var namespace = this.namespace;
                if (this.hideIfNoData && ts.edge.result && ts.terms.length === 0) {
                    this.component.context.html("");
                    return;
                }
                // sort out all the classes that we're going to be using
                var countClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "count", this);
                var checkboxClass = $d48cc3604bf30e24$export$e516ebba864be69d(namespace, "selector", this);
                var facetClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "facet", this);
                var headerClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "header", this);
                var bodyClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "body", this);
                var listClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "list", this);
                var labelClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "label", this);
                var toggleId = $d48cc3604bf30e24$export$bf52b203d82ff901(namespace, "toggle", this);
                var resultsId = $d48cc3604bf30e24$export$bf52b203d82ff901(namespace, "results", this);
                // this is what's displayed in the body if there are no results or the page is loading
                var results = "<li class='loading'>Loading choices...</li>";
                if (ts.edge.result) results = "<li>No data to show</li>";
                // if we want the active filters, render them
                var filterFrag = "";
                if (ts.selected.length > 0) {
                    var resultClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "result", this);
                    for(var i = 0; i < ts.selected.length; i++){
                        var filt = ts.selected[i];
                        var def = this._getFilterDef(filt);
                        if (def) {
                            var display = this.component.translate(filt);
                            var id = $d48cc3604bf30e24$export$63ba8ea1e92c906(filt);
                            var count = "";
                            if (this.showCount) {
                                var cv = def.count;
                                if (this.countFormat) cv = this.countFormat(cv);
                                count = ' <span class="' + countClass + '">(' + cv + ')</span>';
                            }
                            filterFrag += '<li>\
                        <input class="' + checkboxClass + '" data-key="' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(filt) + '" id="' + id + '" type="checkbox" name="' + id + '" checked="checked">\
                        <label for="' + id + '" class="' + labelClass + '">' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(display) + count + '</label>\
                    </li>';
                        }
                    }
                }
                // render a list of the values
                if (ts.terms.length > 0) {
                    results = "";
                    for(var i = 0; i < ts.terms.length; i++){
                        var val = ts.terms[i];
                        if (val.count === 0 && this.hideEmpty) continue;
                        var active = $.inArray(val.term.toString(), ts.selected) > -1;
                        var checked = "";
                        if (active) continue;
                        var count = "";
                        if (this.showCount) count = ' <span class="' + countClass + '">(' + val.count + ')</span>';
                        var id = $d48cc3604bf30e24$export$63ba8ea1e92c906(val.term);
                        results += '<li>\
                    <input class="' + checkboxClass + '" data-key="' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(val.term) + '" id="' + id + '" type="checkbox" name="' + id + '"' + checked + '>\
                    <label for="' + id + '" class="' + labelClass + '">' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(val.display) + count + '</label>\
                </li>';
                    }
                }
                var header = this.headerLayout({
                    toggleId: toggleId
                });
                // render the overall facet
                var frag = "<div class=\"".concat(facetClass, "\">\n                <div class=\"").concat(headerClass, "\"><div class=\"row\">\n                    <div class=\"col-md-12\">\n                        ").concat(header, "\n                    </div>\n                </div></div>\n                <div class=\"").concat(bodyClass, "\">\n                    <div class=\"row\" style=\"display:none\" id=\"").concat(resultsId, "\">\n                        <div class=\"col-md-12\">\n                            <ul class=\"").concat(listClass, "\">{{FILTERS}}</ul>\n                        </div>\
                    </div>\
                </div>\
                </div></div>");
                // substitute in the component parts
                frag = frag.replace(/{{FILTERS}}/g, filterFrag + results);
                // now render it into the page
                ts.context.html(frag);
                // trigger all the post-render set-up functions
                this.setUIOpen();
                var checkboxSelector = $d48cc3604bf30e24$export$b1157bd4df096bce(namespace, "selector", this);
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(checkboxSelector, "change", this, "filterToggle");
                var toggleSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(namespace, "toggle", this);
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(toggleSelector, "click", this, "toggleOpen");
            }
        },
        {
            key: "headerLayout",
            value: function headerLayout(params) {
                var toggleId = params.toggleId;
                var iconClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "icon", this);
                if (this.layout === "left") {
                    var tog = this.title;
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '"><i class="' + this.openIcon + '"></i>&nbsp;' + tog + "</a>";
                    return tog;
                } else if (this.layout === "right") {
                    var tog = "";
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '">' + this.title + '&nbsp;<i class="' + this.openIcon + ' ' + iconClass + '"></i></a>';
                    else tog = this.title;
                    return tog;
                }
            }
        },
        {
            key: "setUIOpen",
            value: function setUIOpen() {
                // the selectors that we're going to use
                var resultsSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "results", this);
                var toggleSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "toggle", this);
                var results = this.component.jq(resultsSelector);
                var toggle = this.component.jq(toggleSelector);
                var openBits = this.openIcon.split(" ");
                var closeBits = this.closeIcon.split(" ");
                if (this.open) {
                    var i = toggle.find("i");
                    for(var j = 0; j < openBits.length; j++)i.removeClass(openBits[j]);
                    for(var j = 0; j < closeBits.length; j++)i.addClass(closeBits[j]);
                    results.show();
                } else {
                    var i = toggle.find("i");
                    for(var j = 0; j < closeBits.length; j++)i.removeClass(closeBits[j]);
                    for(var j = 0; j < openBits.length; j++)i.addClass(openBits[j]);
                    results.hide();
                }
            }
        },
        {
            key: "filterToggle",
            value: function filterToggle(element) {
                var term = this.component.jq(element).attr("data-key");
                var checked = this.component.jq(element).is(":checked");
                if (checked) this.component.selectTerm(term);
                else this.component.removeFilter(term);
            }
        },
        {
            key: "toggleOpen",
            value: function toggleOpen(element) {
                this.open = !this.open;
                this.setUIOpen();
            }
        },
        {
            key: "_getFilterDef",
            value: function _getFilterDef(term) {
                for(var i = 0; i < this.component.terms.length; i++){
                    var t = this.component.terms[i];
                    if (term === t.term) return t;
                }
                return false;
            }
        }
    ]);
    return $135bcb32af9eb45d$export$4b392426dd40333d;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);





var $2039d36394fce070$export$d3ad1026b19abbfd = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($2039d36394fce070$export$d3ad1026b19abbfd, Renderer);
    function $2039d36394fce070$export$d3ad1026b19abbfd(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $2039d36394fce070$export$d3ad1026b19abbfd);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($2039d36394fce070$export$d3ad1026b19abbfd).call(this));
        _this.title = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "title", "Select");
        // whether the facet should be open or closed
        // can be initialised and is then used to track internal state
        _this.open = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "open", false);
        _this.togglable = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "togglable", true);
        // whether the count should be displayed along with the term
        // defaults to false because count may be confusing to the user in an OR selector
        _this.showCount = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "showCount", false);
        _this.countFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "countFormat", false);
        _this.fixedTerms = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "fixedTerms", []);
        _this.valueToolTips = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueToolTips", {
        });
        _this.openIcon = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "openIcon", "glyphicon glyphicon-plus");
        _this.closeIcon = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "closeIcon", "glyphicon glyphicon-minus");
        // don't display the facet at all if there is no data to display
        _this.hideIfNoData = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "hideIfNoData", true);
        _this.layout = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "layout", "left");
        // namespace to use in the page
        _this.namespace = "edges-bs3-fixedselectioncheckboxortermselector";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($2039d36394fce070$export$d3ad1026b19abbfd, [
        {
            key: "draw",
            value: function draw() {
                // for convenient short references ...
                var ts = this.component;
                var namespace = this.namespace;
                if (this.hideIfNoData && ts.edge.result && ts.terms.length === 0) {
                    this.component.context.html("");
                    return;
                }
                // sort out all the classes that we're going to be using
                var countClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "count", this);
                var checkboxClass = $d48cc3604bf30e24$export$e516ebba864be69d(namespace, "selector", this);
                var facetClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "facet", this);
                var headerClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "header", this);
                var bodyClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "body", this);
                var listClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "list", this);
                var labelClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(namespace, "label", this);
                var toggleId = $d48cc3604bf30e24$export$bf52b203d82ff901(namespace, "toggle", this);
                var resultsId = $d48cc3604bf30e24$export$bf52b203d82ff901(namespace, "results", this);
                var results = "";
                for(var i = 0; i < this.fixedTerms.length; i++){
                    var ft = this.fixedTerms[i];
                    var found = false;
                    for(var j = 0; j < ts.terms.length; j++){
                        var val = ts.terms[j];
                        if (val.term === ft) {
                            found = true;
                            var active = $.inArray(val.term.toString(), ts.selected) > -1;
                            var checked = "";
                            if (active) checked = " checked=\"checked\" ";
                            var count = "";
                            if (this.showCount) count = ' <span class="' + countClass + '">(' + this._formatCount(val.count) + ')</span>';
                            var id = $d48cc3604bf30e24$export$63ba8ea1e92c906(val.term);
                            var tooltip = "";
                            if (val.term in this.valueToolTips) tooltip = " title=\"".concat(this.valueToolTips[val.term], "\" ");
                            results += '<li>\
                        <input class="' + checkboxClass + '" data-key="' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(val.term) + '" id="' + id + '" type="checkbox" name="' + id + '"' + checked + '>\
                        <label for="' + id + '" class="' + labelClass + '" id="' + id + '_label"' + tooltip + '>' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(val.display) + count + '</label>\
                    </li>';
                        }
                    }
                    if (!found) {
                        var display = this.component.translate(ft);
                        var id = $d48cc3604bf30e24$export$63ba8ea1e92c906(ft);
                        var tooltip = "";
                        if (ft in this.valueToolTips) tooltip = " title=\"".concat(this.valueToolTips[ft], "\" ");
                        results += '<li>\
                    <input class="' + checkboxClass + '" data-key="' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(ft) + '" id="' + id + '" type="checkbox" name="' + id + '" disabled="disabled">\
                    <label for="' + id + '" class="' + labelClass + '"' + tooltip + '>' + $d48cc3604bf30e24$export$5e20d0a3120d6c07(display) + '</label>\
                </li>';
                    }
                }
                // this is what's displayed in the body if there are no results or the page is loading
                if (results === "") {
                    if (ts.edge.result) results = "<li>No data to show</li>";
                    else results = "<li class='loading'>Loading choices...</li>";
                }
                var header = this.headerLayout({
                    toggleId: toggleId
                });
                // render the overall facet
                var frag = "<div class=\"".concat(facetClass, "\">\n                <div class=\"").concat(headerClass, "\"><div class=\"row\">\n                    <div class=\"col-md-12\">\n                        ").concat(header, "\n                    </div>\n                </div></div>\n                <div class=\"").concat(bodyClass, "\">\n                    <div class=\"row\" style=\"display:none\" id=\"").concat(resultsId, "\">\n                        <div class=\"col-md-12\">\n                            <ul class=\"").concat(listClass, "\">{{FILTERS}}</ul>\n                        </div>\
                    </div>\
                </div>\
                </div></div>");
                // substitute in the component parts
                frag = frag.replace(/{{FILTERS}}/g, results);
                // now render it into the page
                ts.context.html(frag);
                // trigger all the post-render set-up functions
                this.setUIOpen();
                var checkboxSelector = $d48cc3604bf30e24$export$b1157bd4df096bce(namespace, "selector", this);
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(checkboxSelector, "change", this, "filterToggle");
                var toggleSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(namespace, "toggle", this);
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(toggleSelector, "click", this, "toggleOpen");
            }
        },
        {
            key: "_formatCount",
            value: function _formatCount(count) {
                if (this.countFormat) return this.countFormat(count);
                return count;
            }
        },
        {
            key: "headerLayout",
            value: function headerLayout(params) {
                var toggleId = params.toggleId;
                var iconClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "icon", this);
                if (this.layout === "left") {
                    var tog = this.title;
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '"><i class="' + this.openIcon + '"></i>&nbsp;' + tog + "</a>";
                    return tog;
                } else if (this.layout === "right") {
                    var tog = "";
                    if (this.togglable) tog = '<a href="#" id="' + toggleId + '">' + this.title + '&nbsp;<i class="' + this.openIcon + ' ' + iconClass + '"></i></a>';
                    else tog = this.title;
                    return tog;
                }
            }
        },
        {
            key: "setUIOpen",
            value: function setUIOpen() {
                // the selectors that we're going to use
                var resultsSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "results", this);
                var toggleSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "toggle", this);
                var results = this.component.jq(resultsSelector);
                var toggle = this.component.jq(toggleSelector);
                var openBits = this.openIcon.split(" ");
                var closeBits = this.closeIcon.split(" ");
                if (this.open) {
                    var i = toggle.find("i");
                    for(var j = 0; j < openBits.length; j++)i.removeClass(openBits[j]);
                    for(var j = 0; j < closeBits.length; j++)i.addClass(closeBits[j]);
                    results.show();
                } else {
                    var i = toggle.find("i");
                    for(var j = 0; j < closeBits.length; j++)i.removeClass(closeBits[j]);
                    for(var j = 0; j < openBits.length; j++)i.addClass(openBits[j]);
                    results.hide();
                }
            }
        },
        {
            key: "filterToggle",
            value: function filterToggle(element) {
                var term = this.component.jq(element).attr("data-key");
                var checked = this.component.jq(element).is(":checked");
                if (checked) this.component.selectTerm(term);
                else // if the last fixed term is removed, then all the fixed terms are re-selected
                if (this.component.selected.length === 1 && this.component.selected.includes(term)) this.component.selectTerms({
                    terms: this.fixedTerms
                });
                else this.component.removeFilter(term);
            }
        },
        {
            key: "toggleOpen",
            value: function toggleOpen(element) {
                this.open = !this.open;
                this.setUIOpen();
            }
        }
    ]);
    return $2039d36394fce070$export$d3ad1026b19abbfd;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);








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





var $beec1707b43a9eb2$export$2a05ec748c9cb22d = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($beec1707b43a9eb2$export$2a05ec748c9cb22d, Renderer);
    function $beec1707b43a9eb2$export$2a05ec748c9cb22d(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $beec1707b43a9eb2$export$2a05ec748c9cb22d);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($beec1707b43a9eb2$export$2a05ec748c9cb22d).call(this, params));
        _this.title = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "title", false);
        _this.countFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "countFormat", false);
        _this.noResultsText = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "noResultsText", "No data to display");
        _this.valueMap = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "valueMap", false);
        _this.namespace = "edges-html-relativesizebars";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($beec1707b43a9eb2$export$2a05ec748c9cb22d, [
        {
            key: "draw",
            value: function draw() {
                var title = "";
                if (this.title !== false) {
                    var titleClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "title", this);
                    title = "<h4 class=\"".concat(titleClass, "\">").concat(this.title, "</h4>");
                }
                var data_series = this.component.dataSeries;
                if (!data_series || data_series.length === 0) {
                    this.component.context.html(title + this.noResultsText);
                    return;
                }
                // this renderer will only work on a single data series
                var ds = data_series[0];
                if (ds.values.length === 0) {
                    this.component.context.html(title + this.noResultsText);
                    return;
                }
                // first we need to find the largest value
                var max = 0;
                for(var i = 0; i < ds.values.length; i++){
                    var value = ds.values[i];
                    if (value.value > max) max = value.value;
                }
                var rows = "";
                for(var i1 = 0; i1 < ds.values.length; i1++){
                    var value = ds.values[i1];
                    var prog = this._calculateProgress(value.value, max);
                    var count = value.value;
                    if (this.countFormat) count = this.countFormat(count);
                    var valueLabel = value.label;
                    if (this.valueMap) {
                        if (valueLabel in this.valueMap) valueLabel = this.valueMap[valueLabel];
                    }
                    var label = "".concat(valueLabel, " (").concat(count, ")");
                    rows += "<tr><td>\n                <progress value=\"".concat(prog, "\" max=\"100\">").concat(prog, "</progress><br>\n                ").concat(label, "\n            </td></tr>");
                }
                var tableClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "table", this);
                var frag = "".concat(title, "<br><table class=\"").concat(tableClass, "\">").concat(rows, "</table>");
                this.component.context.html(frag);
            }
        },
        {
            key: "_calculateProgress",
            value: function _calculateProgress(value, max) {
                if (max === 0) return 100;
                if (value < 0) return 0;
                return Math.floor(value / max * 100);
            }
        }
    ]);
    return $beec1707b43a9eb2$export$2a05ec748c9cb22d;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);






var $bcaf9e61a70b299d$export$eac301b83a14e1b7 = /*#__PURE__*/ function(Component) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($bcaf9e61a70b299d$export$eac301b83a14e1b7, Component);
    function $bcaf9e61a70b299d$export$eac301b83a14e1b7(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $bcaf9e61a70b299d$export$eac301b83a14e1b7);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($bcaf9e61a70b299d$export$eac301b83a14e1b7).call(this, params));
        ///////////////////////////////////////////////
        // fields that can be passed in, and their defaults
        // free text to prefix entry boxes with
        // this.display = getParam(params, "display", false);
        // list of field objects, which provide the field itself, and the display name.  e.g.
        // [{field : "monitor.rioxxterms:publication_date", display: "Publication Date"}]
        _this.fields = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "fields", []);
        // map from field name (as in this.field[n].field) to a function which will provide
        // the earliest allowed date for that field.  e.g.
        // {"monitor.rioxxterms:publication_date" : earliestDate}
        _this.earliest = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "earliest", {
        });
        // map from field name (as in this.field[n].field) to a function which will provide
        // the latest allowed date for that field.  e.g.
        // {"monitor.rioxxterms:publication_date" : latestDate}
        _this.latest = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "latest", {
        });
        _this.autoLookupRange = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "autoLookupRange", false);
        // category for this component, defaults to "selector"
        _this.category = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "category", "selector");
        // default earliest date to use in all cases (defaults to start of the unix epoch)
        _this.defaultEarliest = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "defaultEarliest", new Date(0));
        // default latest date to use in all cases (defaults to now)
        _this.defaultLatest = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "defaultLatest", new Date());
        // use this to force a latest date, even if the auto lookup on the range is set
        _this.forceLatest = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "forceLatest", false);
        ///////////////////////////////////////////////
        // fields used to track internal state
        _this.currentField = false;
        _this.fromDate = false;
        _this.toDate = false;
        _this.touched = false;
        _this.dateOptions = {
        };
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($bcaf9e61a70b299d$export$eac301b83a14e1b7, [
        {
            key: "init",
            value: function init(edge) {
                $17c4d4a7c863d924$export$9099ad97b570f7c($da23c25529bb1df4$export$9099ad97b570f7c($bcaf9e61a70b299d$export$eac301b83a14e1b7.prototype), "init", this).call(this, edge);
                // set the initial field
                this.currentField = this.fields[0].field;
                // track the last field, for query building purposes
                this.lastField = false;
                // if required, load the dates once at init
                if (!this.autoLookupRange) this.loadDates();
                else {
                    if (edge.secondaryQueries === false) edge.secondaryQueries = {
                    };
                    edge.secondaryQueries["multidaterange_" + this.id] = this.getSecondaryQueryFunction();
                }
            }
        },
        {
            key: "synchronise",
            value: function synchronise() {
                this.currentField = false;
                this.fromDate = false;
                this.toDate = false;
                if (this.autoLookupRange) for(var i = 0; i < this.fields.length; i++){
                    var field = this.fields[i].field;
                    var agg = this.edge.secondaryResults["multidaterange_" + this.id].aggregation(field);
                    var min = this.defaultEarliest;
                    var max = this.defaultLatest;
                    if (agg.min !== null) min = new Date(agg.min);
                    if (agg.max !== null && !this.forceLatest) max = new Date(agg.max);
                    this.dateOptions[field] = {
                        earliest: min,
                        latest: max
                    };
                }
                for(var i = 0; i < this.fields.length; i++){
                    var field = this.fields[i].field;
                    var filters = this.edge.currentQuery.listMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
                        field: field
                    }));
                    if (filters.length > 0) {
                        this.currentField = field;
                        var filter = filters[0];
                        this.fromDate = filter.gte;
                        this.toDate = filter.lte;
                    }
                }
                if (!this.currentField && this.fields.length > 0) this.currentField = this.fields[0].field;
            }
        },
        {
            //////////////////////////////////////////////
            // functions that can be used to trigger state change
            key: "currentEarliest",
            value: function currentEarliest() {
                if (!this.currentField) return false;
                if (this.dateOptions[this.currentField]) return this.dateOptions[this.currentField].earliest;
            }
        },
        {
            key: "currentLatest",
            value: function currentLatest() {
                if (!this.currentField) return false;
                if (this.dateOptions[this.currentField]) return this.dateOptions[this.currentField].latest;
            }
        },
        {
            key: "changeField",
            value: function changeField(newField) {
                this.lastField = this.currentField;
                if (newField !== this.currentField) {
                    this.touched = true;
                    this.currentField = newField;
                }
            }
        },
        {
            key: "setFrom",
            value: function setFrom(from) {
                if (from !== this.fromDate) {
                    this.touched = true;
                    this.fromDate = from;
                }
            }
        },
        {
            key: "setTo",
            value: function setTo(to) {
                if (to !== this.toDate) {
                    this.touched = true;
                    this.toDate = to;
                }
            }
        },
        {
            key: "triggerSearch",
            value: function triggerSearch() {
                if (this.touched) {
                    this.touched = false;
                    var nq = this.edge.cloneQuery();
                    // remove any old filters managed by this component
                    var removeCount = 0;
                    for(var i = 0; i < this.fields.length; i++){
                        var fieldName = this.fields[i].field;
                        removeCount += nq.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
                            field: fieldName
                        }));
                    }
                    // in order to avoid unnecessary searching, check the state of the data and determine
                    // if we need to.
                    // - we need to add a new filter to the query if there is a current field and one/both of from and to dates
                    // - we need to do a search if we removed filters before, or are about to add one
                    var addFilter = this.currentField && (this.toDate || this.fromDate);
                    var doSearch = removeCount > 0 || addFilter;
                    // if we're not going to do a search, return
                    if (!doSearch) return false;
                    // if there's a filter to be added, do that here
                    if (addFilter) {
                        var range = {
                            field: this.currentField
                        };
                        if (this.toDate) range["lte"] = this.formatDateForQuery(this.toDate);
                        if (this.fromDate) range["gte"] = this.formatDateForQuery(this.fromDate);
                        nq.addMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter(range));
                    }
                    // push the new query and trigger the search
                    this.edge.pushQuery(nq);
                    this.edge.cycle();
                    return true;
                }
                return false;
            }
        },
        {
            key: "formatDateForQuery",
            value: function formatDateForQuery(date) {
                var zeroPadder = $d48cc3604bf30e24$export$48334dba1de70fbe({
                    zeroPadding: 2
                });
                return date.getUTCFullYear() + "-" + zeroPadder(date.getUTCMonth() + 1) + "-" + zeroPadder(date.getUTCDate());
            }
        },
        {
            key: "loadDates",
            value: function loadDates() {
                for(var i = 0; i < this.fields.length; i++){
                    var field = this.fields[i].field;
                    // start with the default earliest and latest
                    var early = this.defaultEarliest;
                    var late = this.defaultLatest;
                    // if specific functions are provided for getting the dates, run them
                    var earlyFn = this.earliest[field];
                    var lateFn = this.latest[field];
                    if (earlyFn) early = earlyFn();
                    if (lateFn) late = lateFn();
                    this.dateOptions[field] = {
                        earliest: early,
                        latest: late
                    };
                }
            }
        },
        {
            key: "getSecondaryQueryFunction",
            value: function getSecondaryQueryFunction() {
                var that = this;
                return function(edge) {
                    // clone the current query, which will be the basis for the averages query
                    var query = edge.cloneQuery();
                    // remove any range constraints
                    for(var i = 0; i < that.fields.length; i++){
                        var field = that.fields[i];
                        query.removeMust(new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
                            field: field.field
                        }));
                    }
                    // remove any existing aggregations, we don't need them
                    query.clearAggregations();
                    // add the new aggregation(s) which will actually get the data
                    for(var i = 0; i < that.fields.length; i++){
                        var field = that.fields[i].field;
                        query.addAggregation(new $8d94b5f2509b6cf5$export$8b446892c82de644.StatsAggregation({
                            name: field,
                            field: field
                        }));
                    }
                    // finally set the size and from parameters
                    query.size = 0;
                    query.from = 0;
                    // return the secondary query
                    return query;
                };
            }
        }
    ]);
    return $bcaf9e61a70b299d$export$eac301b83a14e1b7;
}($6cf4dc301226cb87$export$ea71c44d9cb0d048);






var $d626902615431ef9$export$4d567bc36d967c12 = /*#__PURE__*/ function(Renderer) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c($d626902615431ef9$export$4d567bc36d967c12, Renderer);
    function $d626902615431ef9$export$4d567bc36d967c12(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $d626902615431ef9$export$4d567bc36d967c12);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c($d626902615431ef9$export$4d567bc36d967c12).call(this, params));
        ///////////////////////////////////////////////////
        // parameters that can be passed in
        _this.dateFormat = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "dateFormat", "MMMM D, YYYY");
        _this.useSelect2 = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "useSelect2", false);
        _this.ranges = $d48cc3604bf30e24$export$f628537ca2c78f9d(params, "ranges", false);
        ///////////////////////////////////////////////////
        // parameters for tracking internal state
        _this.dre = false;
        _this.selectId = false;
        _this.rangeId = false;
        _this.selectJq = false;
        _this.rangeJq = false;
        _this.drp = false;
        _this.namespace = "edges-bs3-multidaterangecombineselector";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($d626902615431ef9$export$4d567bc36d967c12, [
        {
            key: "draw",
            value: function draw() {
                var dre = this.component;
                var selectClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "select", this);
                var inputClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "input", this);
                var prefixClass = $d48cc3604bf30e24$export$8820e1fbe507f6aa(this.namespace, "prefix", this);
                this.selectId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, dre.id + "_date-type", this);
                this.rangeId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, dre.id + "_range", this);
                var pluginId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, dre.id + "_plugin", this);
                var frag = '<div class="form-inline">';
                if (dre.fields.length > 1) {
                    var options = "";
                    for(var i = 0; i < dre.fields.length; i++){
                        var field = dre.fields[i];
                        var selected = dre.currentField === field.field ? ' selected="selected" ' : "";
                        options += '<option value="' + field.field + '"' + selected + '>' + field.display + '</option>';
                    }
                    frag += '<div class="form-group"><select class="' + selectClass + ' form-control" name="' + this.selectId + '" id="' + this.selectId + '">' + options + '</select></div>';
                }
                frag += '<div id="' + this.rangeId + '" class="' + inputClass + ' form-control">\
            <i class="glyphicon glyphicon-calendar"></i>&nbsp;\
            <span></span> <b class="caret"></b>\
        </div>';
                frag += "</div>";
                dre.context.html(frag);
                var selectIdSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, dre.id + "_date-type", this);
                var rangeIdSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, dre.id + "_range", this);
                this.selectJq = dre.jq(selectIdSelector);
                this.rangeJq = dre.jq(rangeIdSelector);
                var cb = $d48cc3604bf30e24$export$367047a567f2342b(this, "updateDateRange", [
                    "start",
                    "end"
                ]);
                var props = {
                    locale: {
                        format: "DD/MM/YYYY"
                    },
                    opens: "left"
                };
                if (this.ranges) props["ranges"] = this.ranges;
                // clear out any old version of the plugin, as these are appended to the document
                // and not kept within the div controlled by this renderer
                var pluginSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, dre.id + "_plugin", this);
                $(pluginSelector).remove();
                this.rangeJq.daterangepicker(props, cb);
                this.drp = this.rangeJq.data("daterangepicker");
                this.drp.container.attr("id", pluginId).addClass("show-calendar");
                this.prepDates();
                if (this.useSelect2) this.selectJq.select2();
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(selectIdSelector, "change", this, "typeChanged");
            }
        },
        {
            key: "dateRangeDisplay",
            value: function dateRangeDisplay(params) {
                var start = params.start;
                var end = params.end;
                this.rangeJq.find("span").html(start.utc().format(this.dateFormat) + ' - ' + end.utc().format(this.dateFormat));
            }
        },
        {
            key: "updateDateRange",
            value: function updateDateRange(params) {
                var start = params.start;
                var end = params.end;
                // a date or type has been changed, so set up the parent object
                // ensure that the correct field is set (it may initially be not set)
                var date_type = null;
                if (this.useSelect2) date_type = this.selectJq.select2("val");
                else date_type = this.selectJq.val();
                if (date_type) this.component.changeField(date_type);
                this.component.setFrom(start.toDate());
                this.component.setTo(end.toDate());
                this.dateRangeDisplay(params);
                // this action should trigger a search (the parent object will
                // decide if that's required)
                var triggered = this.component.triggerSearch();
                // if a search didn't get triggered, we still may need to modify the min/max specified dates
                if (!triggered) this.prepDates();
            }
        },
        {
            key: "typeChanged",
            value: function typeChanged(element) {
                // ensure that the correct field is set (it may initially be not set)
                var date_type = null;
                if (this.useSelect2) date_type = this.selectJq.select2("val");
                else date_type = this.selectJq.val();
                this.component.changeField(date_type);
                // unset the range
                this.component.setFrom(false);
                this.component.setTo(false);
                // this action should trigger a search (the parent object will
                // decide if that's required)
                var triggered = this.component.triggerSearch();
                // if a search didn't get triggered, we still may need to modify the min/max specified dates
                if (!triggered) this.prepDates();
            }
        },
        {
            key: "prepDates",
            value: function prepDates() {
                var min = this.component.currentEarliest();
                var max = this.component.currentLatest();
                var fr = this.component.fromDate;
                var to = this.component.toDate;
                if (min) {
                    this.drp.minDate = $bccd1ba82d89ceaa$export$137cea99ac96085(min);
                    this.drp.setStartDate($bccd1ba82d89ceaa$export$137cea99ac96085(min));
                } else {
                    this.drp.minDate = $bccd1ba82d89ceaa$export$137cea99ac96085(this.component.defaultEarliest);
                    this.drp.setStartDate($bccd1ba82d89ceaa$export$137cea99ac96085(this.component.defaultEarliest));
                }
                if (max) {
                    this.drp.maxDate = $bccd1ba82d89ceaa$export$137cea99ac96085(max);
                    this.drp.setEndDate($bccd1ba82d89ceaa$export$137cea99ac96085(max));
                } else {
                    this.drp.maxDate = $bccd1ba82d89ceaa$export$137cea99ac96085(this.component.defaultLatest);
                    this.drp.setEndDate($bccd1ba82d89ceaa$export$137cea99ac96085(this.component.defaultLatest));
                }
                if (fr) {
                    // if from lies before the min date, extend the min range
                    if (fr < this.drp.minDate) this.drp.minDate = $bccd1ba82d89ceaa$export$137cea99ac96085(fr);
                    // if from lies after the max date, extend the max range
                    if (fr > this.drp.maxDate) this.drp.maxDate = $bccd1ba82d89ceaa$export$137cea99ac96085(fr);
                    this.drp.setStartDate($bccd1ba82d89ceaa$export$137cea99ac96085(fr));
                }
                if (to) {
                    // if to lies before the min date, extend the min range
                    if (to < this.drp.minDate) this.drp.minDate = $bccd1ba82d89ceaa$export$137cea99ac96085(to);
                    // if to lies after the max date, extend the max range
                    if (to > this.drp.maxDate) this.drp.maxDate = $bccd1ba82d89ceaa$export$137cea99ac96085(to);
                    this.drp.setEndDate($bccd1ba82d89ceaa$export$137cea99ac96085(to));
                }
                this.dateRangeDisplay({
                    start: this.drp.startDate,
                    end: this.drp.endDate
                });
            }
        }
    ]);
    return $d626902615431ef9$export$4d567bc36d967c12;
}($6cf4dc301226cb87$export$a695173e2ecfa9b);


$parcel$global.nglp = {
};
nglp.g001 = {
    active: {
    }
};
nglp.g001.init = function(params) {
    if (!params) params = {
    };
    var selector = params.selector || "#g001";
    var search_url = params.searchUrl;
    var countFormat = $d48cc3604bf30e24$export$48334dba1de70fbe({
        thousandsSeparator: ","
    });
    var palette = $4002aa3570a5e3f8$export$8e8129eda99077("g001.css");
    var interactionValueMap = {
        "investigation": "VIEWS",
        "export": "METADATA EXPORT",
        "request": "DOWNLOADS"
    };
    // this is the reverse of the above, which is required to map the palette onto the
    var valueInteractionMap = {
        "VIEWS": "investigation",
        "METADATA EXPORT": "export",
        "DOWNLOADS": "request"
    };
    var interactionToolTips = {
        "investigation": "How many times article landing pages were viewed in the journal",
        "export": "How many times article metadata was exported in a reference manager format",
        "request": "How many times the fulltext of the article was downloaded"
    };
    var formatMap = {
        "application/x-endnote-style": "Endnote",
        "application/x-research-info-systems": "Research Information Systems",
        "image/gif": "GIF",
        "image/png": "PNG",
        "image/svg+xml": "SVG",
        "image/jpeg": "JPEG",
        "text/html": "HTML",
        "text/plain": "Plain Text",
        "application/json": "JSON",
        "application/pdf": "PDF"
    };
    var presentationOrder = [
        "investigation",
        "request",
        "export"
    ];
    var initialDateRange = $9aa3b42083a3eab8$var$getInitialDateRange();
    var baseQuery = false;
    if (params.containers) baseQuery = new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
        must: [
            new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                field: "container.exact",
                values: params.containers
            })
        ]
    });
    nglp.g001.active[selector] = new $6cf4dc301226cb87$export$22ad9a5707a07e9c({
        selector: selector,
        template: new nglp.g001.G001Template({
            containers: params.containers
        }),
        searchUrl: search_url,
        manageUrl: false,
        baseQuery: baseQuery,
        openingQuery: new $8d94b5f2509b6cf5$export$8b446892c82de644.Query({
            must: [
                new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: "event.exact",
                    values: [
                        "request",
                        "investigation",
                        "export"
                    ]
                }),
                new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsFilter({
                    field: "object_type.exact",
                    values: [
                        "article",
                        "file"
                    ]
                }),
                new $8d94b5f2509b6cf5$export$8b446892c82de644.RangeFilter({
                    field: "occurred_at",
                    gte: initialDateRange.gte,
                    lte: initialDateRange.lte
                }),
                new $8d94b5f2509b6cf5$export$8b446892c82de644.GeoBoundingBoxFilter({
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
                new $8d94b5f2509b6cf5$export$8b446892c82de644.DateHistogramAggregation({
                    name: "occurred_at",
                    field: "occurred_at",
                    interval: "1M",
                    aggs: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation({
                            name: "events",
                            field: "event.exact"
                        })
                    ]
                }),
                new $8d94b5f2509b6cf5$export$8b446892c82de644.GeohashGridAggregation({
                    name: "geo",
                    field: "location",
                    precision: 5 // NOTE: this needs to tie up with the zoomToPrecisionMap in the component
                }),
                new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation({
                    name: "events",
                    field: "event.exact",
                    aggs: [
                        new $8d94b5f2509b6cf5$export$8b446892c82de644.TermsAggregation({
                            name: "formats",
                            field: "format.exact",
                            size: 3
                        })
                    ]
                })
            ]
        }),
        components: [
            new $bcaf9e61a70b299d$export$eac301b83a14e1b7({
                id: "g001-date-range",
                fields: [
                    {
                        field: "occurred_at",
                        display: "Event Date"
                    }
                ],
                autoLookupRange: true,
                forceLatest: true,
                defaultLatest: new Date(),
                renderer: new $d626902615431ef9$export$4d567bc36d967c12({
                    ranges: {
                        'Last Year': [
                            $bccd1ba82d89ceaa$export$137cea99ac96085().subtract(1, "year"),
                            $bccd1ba82d89ceaa$export$137cea99ac96085()
                        ],
                        'Last 30 Days': [
                            $bccd1ba82d89ceaa$export$137cea99ac96085().subtract(29, 'days'),
                            $bccd1ba82d89ceaa$export$137cea99ac96085()
                        ]
                    }
                })
            }),
            new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
                id: "g001-interactions-chart",
                dataFunction: $ae46249d8a2a7b6d$export$d99c821b0fb86668({
                    histogramAgg: "occurred_at",
                    termsAgg: "events",
                    seriesNameMap: interactionValueMap
                }),
                rectangulate: true,
                seriesSort: function seriesSort(values) {
                    return values.sort(function(a, b) {
                        if (a.label < b.label) return -1;
                        if (a.label > b.label) return 1;
                        return 0;
                    });
                },
                renderer: new $f29180d7a0e96438$export$1b75c0a6cacf635c({
                    xTickFormat: function xTickFormat(d) {
                        return d3.time.format('%b %y')(new Date(d));
                    },
                    color: function color(d, i) {
                        return palette[valueInteractionMap[d.key]];
                    },
                    yTickFormat: ",.0f",
                    showLegend: false,
                    xAxisLabel: "Occurred At",
                    yAxisLabel: "Article Interactions",
                    marginLeft: 80,
                    stacked: true,
                    groupSpacing: 0.7
                })
            }),
            new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
                id: "g001-interactions-table",
                dataFunction: $ae46249d8a2a7b6d$export$d99c821b0fb86668({
                    histogramAgg: "occurred_at",
                    termsAgg: "events"
                }),
                rectangulate: true,
                seriesSort: function seriesSort(values) {
                    return values.sort(function(a, b) {
                        if (a.label < b.label) return -1;
                        if (a.label > b.label) return 1;
                        return 0;
                    });
                },
                renderer: new $26b66f4c4ad5f83b$export$dda19d2613327857({
                    labelFormat: function labelFormat(d) {
                        return d3.time.format('%b %y')(new Date(d));
                    },
                    valueFormat: countFormat,
                    headerFormat: function headerFormat(d) {
                        return interactionValueMap[d] || d;
                    },
                    seriesOrderFunction: function seriesOrderFunction(dataSeries) {
                        var ordered = [];
                        for(var j = 0; j < presentationOrder.length; j++)for(var i = 0; i < dataSeries.length; i++){
                            var series = dataSeries[i];
                            if (series.key === presentationOrder[j]) ordered.push(series);
                        }
                        return ordered;
                    }
                })
            }),
            new $7ac4d4ec044faea2$export$c57445924c23547b({
                id: "g001-interactions-map",
                geoHashAggregation: "geo",
                zoomToPrecisionMap: {
                    0: 5,
                    3: 7,
                    5: 9
                },
                renderer: new $eec1dd49d0c67d6b$export$a0bd1dffd4b583c({
                    cluster: true,
                    labelFunction: function(loc) {
                        // be very careful changing this, the MapPointRenderer relies on this as the way
                        // to find out what the count of the nested cluster is
                        return loc.count.toString();
                    },
                    renderCluster: new $9aa3b42083a3eab8$var$MapPointRenderer(),
                    reQueryOnBoundsChange: true,
                    clusterIcons: {
                        0: "/static/img/m1.png"
                    }
                })
            }),
            new $58e70bcc9ea9714f$export$6175c660df807dd({
                id: "g001-interactions",
                field: "event.exact",
                updateType: "fresh",
                orderBy: "term",
                orderDir: "asc",
                valueMap: interactionValueMap,
                renderer: new $2039d36394fce070$export$d3ad1026b19abbfd({
                    title: "Interactions",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat,
                    fixedTerms: presentationOrder,
                    valueToolTips: interactionToolTips
                })
            }),
            new $58e70bcc9ea9714f$export$6175c660df807dd({
                id: "g001-format",
                field: "format.exact",
                updateType: "fresh",
                orderBy: "count",
                orderDir: "desc",
                // valueFunction : (v) => {
                //     return v.toUpperCase();
                // },
                valueMap: formatMap,
                renderer: new $135bcb32af9eb45d$export$4b392426dd40333d({
                    title: "Format",
                    open: true,
                    togglable: false,
                    showCount: true,
                    countFormat: countFormat
                })
            }),
            new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
                id: "g001-top-downloads",
                dataFunction: $ae46249d8a2a7b6d$export$4c2a251a86bb620b({
                    aggs: [
                        {
                            events: {
                                keys: [
                                    "request"
                                ],
                                aggs: [
                                    "formats"
                                ]
                            }
                        }
                    ],
                    seriesName: "request"
                }),
                renderer: new $beec1707b43a9eb2$export$2a05ec748c9cb22d({
                    title: "Downloads",
                    countFormat: countFormat,
                    valueMap: formatMap
                })
            }),
            new $ae46249d8a2a7b6d$export$7decb792461ef5a9({
                id: "g001-top-exports",
                dataFunction: $ae46249d8a2a7b6d$export$4c2a251a86bb620b({
                    aggs: [
                        {
                            events: {
                                keys: [
                                    "export"
                                ],
                                aggs: [
                                    "formats"
                                ]
                            }
                        }
                    ],
                    seriesName: "export"
                }),
                renderer: new $beec1707b43a9eb2$export$2a05ec748c9cb22d({
                    title: "Metadata Export",
                    countFormat: countFormat,
                    valueMap: formatMap
                })
            })
        ]
    });
};
nglp.g001.G001Template = /*#__PURE__*/ (function(Template) {
    "use strict";
    $bca7673885229bfd$export$9099ad97b570f7c(_class, Template);
    function _class(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, _class);
        var _this;
        _this = $6981eb4a4ce0a3e0$export$9099ad97b570f7c(this, $da23c25529bb1df4$export$9099ad97b570f7c(_class).call(this));
        _this.containers = params.containers;
        _this.edge = false;
        _this.showing = "chart";
        _this.hidden = {
        };
        _this.namespace = "g001-template";
        return _this;
    }
    $67866ae5f3a26802$export$9099ad97b570f7c(_class, [
        {
            key: "draw",
            value: function draw(edge) {
                this.edge = edge;
                var checkboxId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "show-as-table");
                var printId = $d48cc3604bf30e24$export$bf52b203d82ff901(this.namespace, "print");
                var containersFrag = "";
                if (this.containers) {
                    var containersMeta = $4002aa3570a5e3f8$export$4bd2ebaeac3531b0(this.containers);
                    var containersFrags = [];
                    for(var ident in containersMeta)containersFrags.push("'" + containersMeta[ident].title + "' (id:" + ident + ")");
                    containersFrag = "<h3>Showing data for ".concat(containersFrags.join(", "), "</h3>");
                }
                var frame = "\n<div id=\"divToPrint\">\n    <div class=\"header header--main\">\n        <div class=\"container\">   \n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h1>G001: Article  Downloads for  Unit Administrators</h1>\n                    <h2>Article downloads by format, including landing page and metadata exports in aggregate</h2>\n                    ".concat(containersFrag, "\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"header header--secondary\">\n        <div class=\"container\">\n            <nav class=\"navbar\">\n                <div class=\"navbar navbar-default\">\n                    <ul class=\"nav navbar-nav\">\n                        <!-- <li>\n                            <a class=\"nav-link\" href=\"#\">Go back to Dashboard</a>\n                        </li>\n                        <li>\n                            <a class=\"nav-link\" id=\"").concat(printId, "\" href=\"#\">Print this view</a>\n                        </li>-->\n                    </ul>\n                    <form class=\"navbar-form navbar-right\">\n                        <div class=\"form-group\" id=\"g001-date-range\"></div>\n                    </form>\n                </div>\n            </nav>\n        </div>\n    </div>\n    \n    <div class=\"container\">\n            <div class=\"row report-area justify-content-between\">\n                <div class=\"col-md-3\">\n                    <div class=\"facet\" id=\"g001-interactions\"></div>\n                    <div class=\"facet facet-format\" id=\"g001-format\"></div>\n                </div>\n                <div class=\"col-md-9\">\n                    <p class=\"showtable\"><input type=\"checkbox\" name=\"").concat(checkboxId, "\" id=\"").concat(checkboxId, "\" class=\"css-checkbox brand\"><label class=\"css-label brand\" for=\"").concat(checkboxId, "\" id=\"").concat(checkboxId, "_label\">Show as table</label></p>\n                    <div class=\"data-area\" id=\"g001-interactions-chart\"></div>\n                    <div class=\"data-area\" id=\"g001-interactions-table\" style=\"display:none\">TABLE HERE</div>\n                    <div class=\"data-area\" id=\"g001-interactions-map\"></div>\n                    <div class=\"data-area\" class=\"row formats-header\">\n                        <h3 class=\"data-label\">Top 3 Formats</h3>\n                        <p>Of all the file formats downloaded or exported to a reference manager, this section shows the \n                            top 3 most used file formats for each of those operations, and their relative usage.</p>\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div id=\"g001-top-downloads\"></div>\n                            </div>\n                            <div class=\"col-md-4 offset-md-1\">\n                                <div id=\"g001-top-exports\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>");
                edge.context.html(frame);
                var checkboxSelector = $d48cc3604bf30e24$export$5d5492dec79280f1(this.namespace, "show-as-table");
                $d48cc3604bf30e24$export$b4cd8de5710bc55c(checkboxSelector, "change", this, "toggleTable");
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
            key: "toggleTable",
            value: function toggleTable() {
                var chart = this.edge.jq("#g001-interactions-chart");
                var table = this.edge.jq("#g001-interactions-table");
                if (this.showing === "chart") {
                    chart.hide();
                    table.show();
                    this.showing = "table";
                } else {
                    table.hide();
                    chart.show();
                    this.showing = "chart";
                    this.edge.getComponent({
                        id: "g001-interactions-chart"
                    }).draw();
                }
            }
        }
    ]);
    return _class;
})($6cf4dc301226cb87$export$93af88fe68eea917);
var $9aa3b42083a3eab8$var$MapPointRenderer = /*#__PURE__*/ function() {
    "use strict";
    function $9aa3b42083a3eab8$var$MapPointRenderer(params) {
        $10cfaf3f2f812eb4$export$9099ad97b570f7c(this, $9aa3b42083a3eab8$var$MapPointRenderer);
    }
    $67866ae5f3a26802$export$9099ad97b570f7c($9aa3b42083a3eab8$var$MapPointRenderer, [
        {
            key: "render",
            value: function render(cluster, stats) {
                var sum = 0;
                for(var i = 0; i < cluster.markers.length; i++){
                    var marker = cluster.markers[i];
                    sum += parseInt(marker.label.text);
                }
                return new google.maps.Marker({
                    position: cluster.position,
                    icon: "/static/img/m1.png",
                    label: {
                        text: String(sum)
                    }
                });
            }
        }
    ]);
    return $9aa3b42083a3eab8$var$MapPointRenderer;
}();
function $9aa3b42083a3eab8$var$getInitialDateRange() {
    var now = $bccd1ba82d89ceaa$export$137cea99ac96085();
    var lte = now.format("YYYY-MM-DD");
    var gte = now.subtract(1, "years").format("YYYY-MM-DD");
    return {
        gte: gte,
        lte: lte
    };
}
var $9aa3b42083a3eab8$export$9099ad97b570f7c = nglp;

})();
//# sourceMappingURL=g001.js.map
