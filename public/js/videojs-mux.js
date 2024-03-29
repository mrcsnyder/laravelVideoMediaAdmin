/**
 * videojs-mux
 * @version 2.5.0
 * @copyright 2019 Mux, Inc.
 * @license
 */
(function () {
    var define = false;
    !function (e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("video.js")); else if ("function" == typeof define && define.amd) define(["video.js"], t); else {
            var r = t("object" == typeof exports ? require("video.js") : e.videojs);
            for (var a in r) ("object" == typeof exports ? exports : e)[a] = r[a]
        }
    }("undefined" != typeof self ? self : this, function (e) {
        return function (e) {
            function t(a) {
                if (r[a]) return r[a].exports;
                var i = r[a] = {i: a, l: !1, exports: {}};
                return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }

            var r = {};
            return t.m = e, t.c = r, t.d = function (e, r, a) {
                t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: a})
            }, t.n = function (e) {
                var r = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return t.d(r, "a", r), r
            }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 2)
        }([function (e, t, r) {
            !function () {
                !function (t, r) {
                    e.exports = r()
                }(0, function () {
                    return function (e) {
                        function t(a) {
                            if (r[a]) return r[a].exports;
                            var i = r[a] = {i: a, l: !1, exports: {}};
                            return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                        }

                        var r = {};
                        return t.m = e, t.c = r, t.d = function (e, r, a) {
                            t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: a})
                        }, t.n = function (e) {
                            var r = e && e.__esModule ? function () {
                                return e.default
                            } : function () {
                                return e
                            };
                            return t.d(r, "a", r), r
                        }, t.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, t.p = "", t(t.s = 16)
                    }([function (e, t) {
                        function r(e, t, r) {
                            switch (r.length) {
                                case 0:
                                    return e.call(t);
                                case 1:
                                    return e.call(t, r[0]);
                                case 2:
                                    return e.call(t, r[0], r[1]);
                                case 3:
                                    return e.call(t, r[0], r[1], r[2])
                            }
                            return e.apply(t, r)
                        }

                        function a(e, t) {
                            for (var r = -1, a = Array(e); ++r < e;) a[r] = t(r);
                            return a
                        }

                        function i(e, t) {
                            var r = R(e) || p(e) ? a(e.length, String) : [], i = r.length, n = !!i;
                            for (var o in e) !t && !k.call(e, o) || n && ("length" == o || l(o, i)) || r.push(o);
                            return r
                        }

                        function n(e, t, r) {
                            var a = e[t];
                            k.call(e, t) && f(a, r) && (void 0 !== r || t in e) || (e[t] = r)
                        }

                        function o(e) {
                            if (!c(e)) return A(e);
                            var t = [];
                            for (var r in Object(e)) k.call(e, r) && "constructor" != r && t.push(r);
                            return t
                        }

                        function s(e, t) {
                            return t = D(void 0 === t ? e.length - 1 : t, 0), function () {
                                for (var a = arguments, i = -1, n = D(a.length - t, 0), o = Array(n); ++i < n;) o[i] = a[t + i];
                                i = -1;
                                for (var s = Array(t + 1); ++i < t;) s[i] = a[i];
                                return s[t] = o, r(e, this, s)
                            }
                        }

                        function u(e, t, r, a) {
                            r || (r = {});
                            for (var i = -1, o = t.length; ++i < o;) {
                                var s = t[i], u = a ? a(r[s], e[s], s, r, e) : void 0;
                                n(r, s, void 0 === u ? e[s] : u)
                            }
                            return r
                        }

                        function l(e, t) {
                            return !!(t = null == t ? w : t) && ("number" == typeof e || E.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function d(e, t, r) {
                            if (!y(r)) return !1;
                            var a = typeof t;
                            return !!("number" == a ? h(r) && l(t, r.length) : "string" == a && t in r) && f(r[t], e)
                        }

                        function c(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || O)
                        }

                        function f(e, t) {
                            return e === t || e !== e && t !== t
                        }

                        function p(e) {
                            return _(e) && k.call(e, "callee") && (!M.call(e, "callee") || P.call(e) == x)
                        }

                        function h(e) {
                            return null != e && v(e.length) && !m(e)
                        }

                        function _(e) {
                            return b(e) && h(e)
                        }

                        function m(e) {
                            var t = y(e) ? P.call(e) : "";
                            return t == S || t == T
                        }

                        function v(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= w
                        }

                        function y(e) {
                            var t = typeof e;
                            return !!e && ("object" == t || "function" == t)
                        }

                        function b(e) {
                            return !!e && "object" == typeof e
                        }

                        function g(e) {
                            return h(e) ? i(e) : o(e)
                        }

                        var w = 9007199254740991, x = "[object Arguments]", S = "[object Function]",
                            T = "[object GeneratorFunction]", E = /^(?:0|[1-9]\d*)$/, O = Object.prototype,
                            k = O.hasOwnProperty, P = O.toString, M = O.propertyIsEnumerable, A = function (e, t) {
                                return function (r) {
                                    return e(t(r))
                                }
                            }(Object.keys, Object), D = Math.max, q = !M.call({valueOf: 1}, "valueOf"), R = Array.isArray,
                            j = function (e) {
                                return s(function (t, r) {
                                    var a = -1, i = r.length, n = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
                                    for (n = e.length > 3 && "function" == typeof n ? (i--, n) : void 0, o && d(r[0], r[1], o) && (n = i < 3 ? void 0 : n, i = 1), t = Object(t); ++a < i;) {
                                        var s = r[a];
                                        s && e(t, s)
                                    }
                                    return t
                                })
                            }(function (e, t) {
                                if (q || c(t) || h(t)) return void u(t, g(t), e);
                                for (var r in t) k.call(t, r) && n(e, r, t[r])
                            });
                        e.exports = j
                    }, function (e, t, r) {
                        "use strict";

                        function a(e, t, r) {
                            r = void 0 === r ? 1 : r, e[t] = e[t] || 0, e[t] += r
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
                    }, function (e, t, r) {
                        (function (t) {
                            var r;
                            r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = r
                        }).call(t, r(5))
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = r(18), i = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(a), n = i.default.methodFactory;
                        i.default.methodFactory = function (e, t, r) {
                            var a = n(e, t, r);
                            return function () {
                                for (var e = ["[mux]"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                                a.apply(void 0, e)
                            }
                        }, i.default.setLevel(i.default.getLevel()), t.default = i.default
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = function (e) {
                            return n(e)[0]
                        }, i = function (e) {
                            return n(e)[1]
                        }, n = function (e) {
                            if ("string" != typeof e || "" === e) return ["localhost"];
                            var t = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                                r = e.match(t) || [], a = r[4], i = void 0;
                            return a && (i = (a.match(/[^\.]+\.[^\.]+$/) || [])[0]), [a, i]
                        };
                        t.extractHostnameAndDomain = n, t.extractHostname = a, t.extractDomain = i
                    }, function (e, t) {
                        var r;
                        r = function () {
                            return this
                        }();
                        try {
                            r = r || Function("return this")() || (0, eval)("this")
                        } catch (e) {
                            "object" == typeof window && (r = window)
                        }
                        e.exports = r
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = function () {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" === e ? t : 3 & t | 8).toString(16)
                            })
                        }, i = function () {
                            return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6)
                        };
                        t.generateUUID = a, t.generateShortID = i
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            e = e || "", e = e.match(/[^\r\n]+/g) || [];
                            for (var t = {}, r = 0; r < e.length; r++) {
                                var a = e[r].split(/\s*:\s*(.+)/);
                                3 === a.length && (t[a[0]] = a[1])
                            }
                            return t
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.findMediaElement = t.getMuxPlayerId = void 0;
                        var a = r(6), i = function (e) {
                            return e && void 0 !== e.nodeName ? (e.muxId || (e.muxId = e.id || (0, a.generateShortID)()), e.muxId) : e
                        }, n = function (e) {
                            var t = void 0;
                            return e && void 0 !== e.nodeName ? (t = e, e = i(t)) : t = document.querySelector(e), [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
                        };
                        t.getMuxPlayerId = i, t.findMediaElement = n
                    }, function (e, t, r) {
                        "use strict";

                        function a() {
                            return "1" === (n.default.doNotTrack || n.default.navigator.doNotTrack || n.default.navigator.msDoNotTrack)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
                        var i = r(2), n = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i)
                    }, function (e, t, r) {
                        (function (t) {
                            var a, i = void 0 !== t ? t : "undefined" != typeof window ? window : {}, n = r(21);
                            "undefined" != typeof document ? a = document : (a = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (a = i["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = a
                        }).call(t, r(5))
                    }, function (e, t) {
                        e.exports = function (e) {
                            return e.webpackPolyfill || (e.deprecate = function () {
                            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                                enumerable: !0,
                                get: function () {
                                    return e.l
                                }
                            }), Object.defineProperty(e, "id", {
                                enumerable: !0, get: function () {
                                    return e.i
                                }
                            }), e.webpackPolyfill = 1), e
                        }
                    }, function (e, t, r) {
                        "use strict";
                        var a = r(40), i = r(41), n = r(14);
                        e.exports = {formats: n, parse: i, stringify: a}
                    }, function (e, t, r) {
                        "use strict";
                        var a = Object.prototype.hasOwnProperty, i = function () {
                            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                            return e
                        }(), n = function (e) {
                            for (var t; e.length;) {
                                var r = e.pop();
                                if (t = r.obj[r.prop], Array.isArray(t)) {
                                    for (var a = [], i = 0; i < t.length; ++i) void 0 !== t[i] && a.push(t[i]);
                                    r.obj[r.prop] = a
                                }
                            }
                            return t
                        };
                        t.arrayToObject = function (e, t) {
                            for (var r = t && t.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) void 0 !== e[a] && (r[a] = e[a]);
                            return r
                        }, t.merge = function (e, r, i) {
                            if (!r) return e;
                            if ("object" != typeof r) {
                                if (Array.isArray(e)) e.push(r); else {
                                    if ("object" != typeof e) return [e, r];
                                    (i.plainObjects || i.allowPrototypes || !a.call(Object.prototype, r)) && (e[r] = !0)
                                }
                                return e
                            }
                            if ("object" != typeof e) return [e].concat(r);
                            var n = e;
                            return Array.isArray(e) && !Array.isArray(r) && (n = t.arrayToObject(e, i)), Array.isArray(e) && Array.isArray(r) ? (r.forEach(function (r, n) {
                                a.call(e, n) ? e[n] && "object" == typeof e[n] ? e[n] = t.merge(e[n], r, i) : e.push(r) : e[n] = r
                            }), e) : Object.keys(r).reduce(function (e, n) {
                                var o = r[n];
                                return a.call(e, n) ? e[n] = t.merge(e[n], o, i) : e[n] = o, e
                            }, n)
                        }, t.assign = function (e, t) {
                            return Object.keys(t).reduce(function (e, r) {
                                return e[r] = t[r], e
                            }, e)
                        }, t.decode = function (e) {
                            try {
                                return decodeURIComponent(e.replace(/\+/g, " "))
                            } catch (t) {
                                return e
                            }
                        }, t.encode = function (e) {
                            if (0 === e.length) return e;
                            for (var t = "string" == typeof e ? e : String(e), r = "", a = 0; a < t.length; ++a) {
                                var n = t.charCodeAt(a);
                                45 === n || 46 === n || 95 === n || 126 === n || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? r += t.charAt(a) : n < 128 ? r += i[n] : n < 2048 ? r += i[192 | n >> 6] + i[128 | 63 & n] : n < 55296 || n >= 57344 ? r += i[224 | n >> 12] + i[128 | n >> 6 & 63] + i[128 | 63 & n] : (a += 1, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(a)), r += i[240 | n >> 18] + i[128 | n >> 12 & 63] + i[128 | n >> 6 & 63] + i[128 | 63 & n])
                            }
                            return r
                        }, t.compact = function (e) {
                            for (var t = [{
                                obj: {o: e},
                                prop: "o"
                            }], r = [], a = 0; a < t.length; ++a) for (var i = t[a], o = i.obj[i.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
                                var l = s[u], d = o[l];
                                "object" == typeof d && null !== d && -1 === r.indexOf(d) && (t.push({
                                    obj: o,
                                    prop: l
                                }), r.push(d))
                            }
                            return n(t)
                        }, t.isRegExp = function (e) {
                            return "[object RegExp]" === Object.prototype.toString.call(e)
                        }, t.isBuffer = function (e) {
                            return null !== e && void 0 !== e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                        }
                    }, function (e, t, r) {
                        "use strict";
                        var a = String.prototype.replace, i = /%20/g;
                        e.exports = {
                            default: "RFC3986", formatters: {
                                RFC1738: function (e) {
                                    return a.call(e, i, "+")
                                }, RFC3986: function (e) {
                                    return e
                                }
                            }, RFC1738: "RFC1738", RFC3986: "RFC3986"
                        }
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        function i(e) {
                            var t = {};
                            for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
                            return t
                        }

                        function n(e) {
                            var t = {}, r = {};
                            return Object.keys(e).forEach(function (a) {
                                var i = !1;
                                if (e.hasOwnProperty(a) && void 0 !== e[a]) {
                                    var n = a.split("_"), o = n[0], u = c[o];
                                    u || (s.default.info("Data key word `" + n[0] + "` not expected in " + a), u = o + "_"), n.splice(1).forEach(function (e) {
                                        "url" === e && (i = !0), p[e] ? u += p[e] : (s.default.info("Data key word `" + e + "` not expected in " + a), u += "_" + e + "_")
                                    }), i ? r[u] = e[a] : t[u] = e[a]
                                }
                            }), (0, l.default)(t, r)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                        var o = r(3), s = a(o), u = r(0), l = a(u), d = {
                            a: "env",
                            b: "beacon",
                            d: "ad",
                            e: "event",
                            f: "experiment",
                            m: "mux",
                            n: "response",
                            p: "player",
                            q: "request",
                            r: "retry",
                            s: "session",
                            t: "timestamp",
                            u: "viewer",
                            v: "video",
                            w: "page",
                            x: "view",
                            y: "sub"
                        }, c = i(d), f = {
                            ad: "ad",
                            ag: "aggregate",
                            ap: "api",
                            al: "application",
                            ar: "architecture",
                            as: "asset",
                            au: "autoplay",
                            av: "average",
                            bi: "bitrate",
                            br: "break",
                            bw: "browser",
                            by: "bytes",
                            ca: "cached",
                            cb: "cancel",
                            cd: "code",
                            cg: "category",
                            ch: "changed",
                            cn: "config",
                            co: "count",
                            ce: "counter",
                            cp: "complete",
                            ct: "content",
                            cu: "current",
                            dg: "downscaling",
                            dm: "domain",
                            dn: "cdn",
                            do: "downscale",
                            du: "duration",
                            dv: "device",
                            ec: "encoding",
                            en: "end",
                            eg: "engine",
                            em: "embed",
                            er: "error",
                            es: "errorcode",
                            et: "errortext",
                            ee: "event",
                            ev: "events",
                            ex: "expires",
                            fi: "first",
                            fm: "family",
                            ft: "format",
                            fq: "frequency",
                            fr: "frame",
                            fs: "fullscreen",
                            he: "headers",
                            ho: "host",
                            hn: "hostname",
                            ht: "height",
                            id: "id",
                            ii: "init",
                            in: "instance",
                            ip: "ip",
                            is: "is",
                            ke: "key",
                            la: "language",
                            lb: "labeled",
                            le: "level",
                            li: "live",
                            ld: "loaded",
                            lo: "load",
                            ls: "lists",
                            lt: "latency",
                            ma: "max",
                            md: "media",
                            me: "message",
                            mi: "mime",
                            ml: "midroll",
                            mm: "min",
                            mn: "manufacturer",
                            mx: "mux",
                            nm: "name",
                            no: "number",
                            on: "on",
                            os: "os",
                            pa: "paused",
                            pb: "playback",
                            pd: "producer",
                            pe: "percentage",
                            pf: "played",
                            pg: "program",
                            ph: "playhead",
                            pi: "plugin",
                            pl: "preroll",
                            po: "poster",
                            pr: "preload",
                            py: "property",
                            ra: "rate",
                            rd: "requested",
                            re: "rebuffer",
                            rf: "rendition",
                            ro: "ratio",
                            rp: "response",
                            rq: "request",
                            rs: "requests",
                            sa: "sample",
                            se: "session",
                            sk: "seek",
                            sm: "stream",
                            so: "source",
                            sq: "sequence",
                            sr: "series",
                            st: "start",
                            su: "startup",
                            sv: "server",
                            sw: "software",
                            ta: "tag",
                            tc: "tech",
                            te: "text",
                            th: "throughput",
                            ti: "time",
                            tl: "total",
                            to: "to",
                            tt: "title",
                            ty: "type",
                            ug: "upscaling",
                            up: "upscale",
                            ur: "url",
                            us: "user",
                            va: "variant",
                            vd: "viewed",
                            vi: "video",
                            ve: "version",
                            vw: "view",
                            vr: "viewer",
                            wd: "width",
                            wa: "watch",
                            wt: "waiting"
                        }, p = i(f)
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = r(17).default
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = function () {
                                function e(e, t) {
                                    var r = [], a = !0, i = !1, n = void 0;
                                    try {
                                        for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0) ;
                                    } catch (e) {
                                        i = !0, n = e
                                    } finally {
                                        try {
                                            !a && s.return && s.return()
                                        } finally {
                                            if (i) throw n
                                        }
                                    }
                                    return r
                                }

                                return function (t, r) {
                                    if (Array.isArray(t)) return t;
                                    if (Symbol.iterator in Object(t)) return e(t, r);
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }
                            }(), n = r(2), o = a(n), s = r(8), u = r(3), l = a(u), d = r(9), c = a(d), f = r(19), p = a(f),
                            h = r(48), _ = a(h), m = r(49), v = a(m), y = {}, b = function e(t) {
                                var r = arguments;
                                "string" == typeof t ? e.hasOwnProperty(t) ? o.default.setTimeout(function () {
                                    r = Array.prototype.splice.call(r, 1), e[t].apply(null, r)
                                }, 0) : l.default.warn("`" + t + "` is an unknown task") : "function" == typeof t ? o.default.setTimeout(function () {
                                    t(e)
                                }, 0) : l.default.warn("`" + t + "` is invalid.")
                            };
                        b.loaded = Date.now(), b.VERSION = "2.7.0", b.API_VERSION = "2.0", b.PLAYER_TRACKED = !1, b.monitor = function (e, t) {
                            return (0, _.default)(b, e, t)
                        }, b.destroyMonitor = function (e) {
                            var t = (0, s.findMediaElement)(e), r = i(t, 1), a = r[0];
                            a && a.mux && "function" == typeof a.mux.destroy ? a.mux.destroy() : l.default.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
                        }, b.addHLSJS = function (e, t) {
                            var r = (0, s.getMuxPlayerId)(e);
                            y[r] ? y[r].addHLSJS(t) : l.default.error("A monitor for `" + r + "` has not been initialized.")
                        }, b.addDashJS = function (e, t) {
                            var r = (0, s.getMuxPlayerId)(e);
                            y[r] ? y[r].addDashJS(t) : l.default.error("A monitor for `" + r + "` has not been initialized.")
                        }, b.removeHLSJS = function (e) {
                            var t = (0, s.getMuxPlayerId)(e);
                            y[t] ? y[t].removeHLSJS() : l.default.error("A monitor for `" + t + "` has not been initialized.")
                        }, b.removeDashJS = function (e, t) {
                            var r = (0, s.getMuxPlayerId)(e);
                            y[r] ? y[r].removeDashJS(t) : l.default.error("A monitor for `" + r + "` has not been initialized.")
                        }, b.init = function (e, t) {
                            var r = (0, s.getMuxPlayerId)(e);
                            y[r] = new p.default(b, r, t)
                        }, b.emit = function (e, t, r) {
                            var a = (0, s.getMuxPlayerId)(e);
                            y[a] ? (y[a].emit(t, r), "destroy" === t && delete y[a]) : l.default.error("A monitor for `" + a + "` has not been initialized.")
                        }, (0, c.default)() && l.default.info("The browser's Do Not Track flag is enabled - Mux beaconing may be disabled."), o.default.addEventListener("unload", function () {
                            b.WINDOW_UNLOADING = !0
                        }, !1), b.checkDoNotTrack = c.default, b.log = l.default, b.utils = v.default, t.default = b
                    }, function (e, t, r) {
                        var a, i;
                        !function (n, o) {
                            "use strict";
                            a = o, void 0 !== (i = "function" == typeof a ? a.call(t, r, t, e) : a) && (e.exports = i)
                        }(0, function () {
                            "use strict";

                            function e(e, t) {
                                var r = e[t];
                                if ("function" == typeof r.bind) return r.bind(e);
                                try {
                                    return Function.prototype.bind.call(r, e)
                                } catch (t) {
                                    return function () {
                                        return Function.prototype.apply.apply(r, [e, arguments])
                                    }
                                }
                            }

                            function t(t) {
                                return "debug" === t && (t = "log"), typeof console !== s && (void 0 !== console[t] ? e(console, t) : void 0 !== console.log ? e(console, "log") : o)
                            }

                            function r(e, t) {
                                for (var r = 0; r < u.length; r++) {
                                    var a = u[r];
                                    this[a] = r < e ? o : this.methodFactory(a, e, t)
                                }
                                this.log = this.debug
                            }

                            function a(e, t, a) {
                                return function () {
                                    typeof console !== s && (r.call(this, t, a), this[e].apply(this, arguments))
                                }
                            }

                            function i(e, r, i) {
                                return t(e) || a.apply(this, arguments)
                            }

                            function n(e, t, a) {
                                function n(e) {
                                    var t = (u[e] || "silent").toUpperCase();
                                    if (typeof window !== s) {
                                        try {
                                            return void (window.localStorage[c] = t)
                                        } catch (e) {
                                        }
                                        try {
                                            window.document.cookie = encodeURIComponent(c) + "=" + t + ";"
                                        } catch (e) {
                                        }
                                    }
                                }

                                function o() {
                                    var e;
                                    if (typeof window !== s) {
                                        try {
                                            e = window.localStorage[c]
                                        } catch (e) {
                                        }
                                        if (typeof e === s) try {
                                            var t = window.document.cookie, r = t.indexOf(encodeURIComponent(c) + "=");
                                            r && (e = /^([^;]+)/.exec(t.slice(r))[1])
                                        } catch (e) {
                                        }
                                        return void 0 === d.levels[e] && (e = void 0), e
                                    }
                                }

                                var l, d = this, c = "loglevel";
                                e && (c += ":" + e), d.levels = {
                                    TRACE: 0,
                                    DEBUG: 1,
                                    INFO: 2,
                                    WARN: 3,
                                    ERROR: 4,
                                    SILENT: 5
                                }, d.methodFactory = a || i, d.getLevel = function () {
                                    return l
                                }, d.setLevel = function (t, a) {
                                    if ("string" == typeof t && void 0 !== d.levels[t.toUpperCase()] && (t = d.levels[t.toUpperCase()]), !("number" == typeof t && t >= 0 && t <= d.levels.SILENT)) throw"log.setLevel() called with invalid level: " + t;
                                    if (l = t, !1 !== a && n(t), r.call(d, t, e), typeof console === s && t < d.levels.SILENT) return "No console available for logging"
                                }, d.setDefaultLevel = function (e) {
                                    o() || d.setLevel(e, !1)
                                }, d.enableAll = function (e) {
                                    d.setLevel(d.levels.TRACE, e)
                                }, d.disableAll = function (e) {
                                    d.setLevel(d.levels.SILENT, e)
                                };
                                var f = o();
                                null == f && (f = null == t ? "WARN" : t), d.setLevel(f, !1)
                            }

                            var o = function () {
                            }, s = "undefined", u = ["trace", "debug", "info", "warn", "error"], l = new n, d = {};
                            l.getLogger = function (e) {
                                if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                                var t = d[e];
                                return t || (t = d[e] = new n(e, l.getLevel(), l.methodFactory)), t
                            };
                            var c = typeof window !== s ? window.log : void 0;
                            return l.noConflict = function () {
                                return typeof window !== s && window.log === l && (window.log = c), l
                            }, l
                        })
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = function () {
                                function e(e, t) {
                                    var r = [], a = !0, i = !1, n = void 0;
                                    try {
                                        for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0) ;
                                    } catch (e) {
                                        i = !0, n = e
                                    } finally {
                                        try {
                                            !a && s.return && s.return()
                                        } finally {
                                            if (i) throw n
                                        }
                                    }
                                    return r
                                }

                                return function (t, r) {
                                    if (Array.isArray(t)) return t;
                                    if (Symbol.iterator in Object(t)) return e(t, r);
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }
                            }(), n = r(3), o = a(n), s = r(0), u = a(s), l = r(6), d = r(4), c = r(2), f = a(c), p = r(1),
                            h = a(p), _ = r(20), m = a(_), v = r(23), y = r(24), b = r(25), g = a(b), w = r(26),
                            x = a(w), S = r(27), T = a(S), E = r(28), O = a(E), k = r(29), P = a(k), M = r(30),
                            A = a(M), D = r(31), q = a(D), R = r(32), j = a(R), I = r(33), L = a(I), C = r(34),
                            N = a(C), H = r(35), B = a(H), F = r(36), U = a(F), W = r(37), G = a(W), V = r(38),
                            J = a(V), z = r(47), $ = a(z),
                            Q = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled"],
                            K = function (e, t, r) {
                                var a = this;
                                this.DOM_CONTENT_LOADED_EVENT_END = f.default.performance && f.default.performance.timing.domContentLoadedEventEnd, this.NAVIGATION_START = f.default.performance && f.default.performance.timing.navigationStart;
                                var i = {
                                    debug: !1,
                                    minimumRebufferDuration: 250,
                                    sustainedRebufferThreshold: 1e3,
                                    playbackHeartbeatTime: 25,
                                    beaconDomain: "litix.io",
                                    sampleRate: 1,
                                    disableCookies: !1,
                                    respectDoNotTrack: !0,
                                    errorTranslator: function (e) {
                                        return e
                                    }
                                };
                                this.mux = e, this.id = t, r = (0, u.default)(i, r), r.data = r.data || {}, r.data.property_key && (r.data.env_key = r.data.property_key, delete r.data.property_key), o.default.setLevel(r.debug ? "debug" : "warn"), this.getPlayheadTime = r.getPlayheadTime, this.getStateData = r.getStateData || function () {
                                }, this.getAdData = r.getAdData || function () {
                                }, this.minimumRebufferDuration = r.minimumRebufferDuration, this.sustainedRebufferThreshold = r.sustainedRebufferThreshold, this.playbackHeartbeatTime = r.playbackHeartbeatTime, this.errorTranslator = r.errorTranslator, this.playbackEventDispatcher = new J.default(e, r.data.env_key, r), this.data = {
                                    player_instance_id: (0, l.generateShortID)(),
                                    mux_sample_rate: r.sampleRate,
                                    beacon_domain: r.beaconDomain
                                }, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function (e, t) {
                                    t = (0, u.default)({viewer_time: Date.now()}, t), this.oldEmit(e, t)
                                };
                                var n = function () {
                                    void 0 === this.data.view_start && (this.data.view_start = Date.now(), this.emit("viewstart"))
                                }.bind(this);
                                this.on("viewinit", function (e, t) {
                                    this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, u.default)(this.data, t), this._initializeViewData(), this.one("play", n), this.one("adbreakstart", n)
                                });
                                var s = function (e) {
                                    this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e)
                                }.bind(this);
                                this.on("videochange", function (e, t) {
                                    s(t)
                                }), this.on("programchange", function (e, t) {
                                    this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), s((0, u.default)(t, {view_program_changed: !0})), n()
                                }), this.on("destroy", this.destroy);
                                var d = this.destroy.bind(this);
                                f.default.addEventListener("unload", d, !1), this.on("destroy", function () {
                                    f.default.removeEventListener("unload", d)
                                }), this.on("playerready", function (e, t) {
                                    (0, u.default)(this.data, t)
                                }), Q.forEach(function (e) {
                                    a.on(e, function (t, r) {
                                        0 !== e.indexOf("ad") && this._updateStateData(), (0, u.default)(this.data, r), this._sanitizeData()
                                    }), a.on("after" + e, function () {
                                        ("error" !== e || this.viewErrored) && this.send(e)
                                    })
                                }), this.on("viewend", function (e, t) {
                                    (0, u.default)(a.data, t)
                                });
                                var c = function (e) {
                                    var t = Date.now();
                                    this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
                                };
                                this.one("playerready", c), T.default.apply(this), G.default.apply(this), N.default.apply(this), A.default.apply(this), x.default.apply(this), L.default.apply(this), O.default.apply(this), P.default.apply(this), B.default.apply(this), q.default.apply(this), j.default.apply(this), U.default.apply(this), $.default.apply(this), r.hlsjs && this.addHLSJS(r), r.dashjs && this.addDashJS(r), this.emit("viewinit", r.data)
                            };
                        (0, u.default)(K.prototype, g.default.prototype), (0, u.default)(K.prototype, A.default.prototype), (0, u.default)(K.prototype, N.default.prototype), (0, u.default)(K.prototype, x.default.prototype), (0, u.default)(K.prototype, O.default.prototype), (0, u.default)(K.prototype, P.default.prototype), (0, u.default)(K.prototype, B.default.prototype), (0, u.default)(K.prototype, q.default.prototype), (0, u.default)(K.prototype, j.default.prototype), K.prototype.destroy = function () {
                            this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), f.default.clearTimeout(this._heartBeatTimeout))
                        }, K.prototype.send = function (e) {
                            var t = (0, u.default)({}, this.data);
                            if (1 === t.player_error_code && (delete t.player_error_code, delete t.player_error_message), t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
                                var r = (0, d.extractHostnameAndDomain)(t.video_source_url), a = i(r, 2), n = a[0],
                                    o = a[1];
                                t.video_source_domain = o, t.video_source_hostname = n
                            }
                            delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat()
                        }, K.prototype._updateStateData = function () {
                            (0, u.default)(this.data, this.getStateData()), this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime()), this._sanitizeData()
                        }, K.prototype._sanitizeData = function () {
                            var e = this;
                            ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time"].forEach(function (t) {
                                var r = parseInt(e.data[t], 10);
                                e.data[t] = isNaN(r) ? void 0 : r
                            })
                        }, K.prototype._resetVideoData = function (e, t) {
                            var r = this;
                            Object.keys(this.data).forEach(function (e) {
                                0 === e.indexOf("video_") && delete r.data[e]
                            })
                        }, K.prototype._resetViewData = function () {
                            var e = this;
                            Object.keys(this.data).forEach(function (t) {
                                0 === t.indexOf("view_") && delete e.data[t]
                            }), this.data.view_sequence_number = 1
                        }, K.prototype._resetErrorData = function (e, t) {
                            delete this.data.player_error_code, delete this.data.player_error_message
                        }, K.prototype._initializeViewData = function () {
                            var e = this, t = this.data.view_id = (0, l.generateUUID)();
                            this.data.video_id || (this.data.video_id = (0, m.default)(this.data.player_source_url));
                            var r = function () {
                                t === e.data.view_id && (0, h.default)(e.data, "player_view_count", 1)
                            };
                            this.data.player_is_paused ? this.one("play", r) : r()
                        }, K.prototype._restartHeartBeat = function () {
                            var e = this;
                            f.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = f.default.setTimeout(function () {
                                e.data.player_is_paused || e.emit("hb")
                            }, 1e4))
                        }, K.prototype.addHLSJS = function (e) {
                            return e.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, void (0, v.monitorHlsJs)(this.mux, this.id, e.hlsjs, {}, e.Hls || f.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
                        }, K.prototype.removeHLSJS = function () {
                            this.hlsjs && ((0, v.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0)
                        }, K.prototype.addDashJS = function (e) {
                            return e.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, void (0, y.monitorDashJS)(this.mux, this.id, e.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")
                        }, K.prototype.removeDashJS = function () {
                            this.dashjs && ((0, y.stopMonitoringDashJS)(this.dashjs), this.dashjs = void 0)
                        }, t.default = K
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        function i(e) {
                            var t = o.default.createElement("a");
                            t.href = e;
                            var r = t.pathname.replace(/\.[^\/.]+$/, "");
                            return u.default.encode(t.host + r).split("=")[0]
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = i;
                        var n = r(10), o = a(n), s = r(22), u = a(s)
                    }, function (e, t) {
                    }, function (e, t, r) {
                        (function (e, a) {
                            var i;
                            !function (a) {
                                var n = ("object" == typeof e && e && e.exports, function (e) {
                                    this.message = e
                                });
                                n.prototype = new Error, n.prototype.name = "InvalidCharacterError";
                                var o = function (e) {
                                        throw new n(e)
                                    }, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                    u = /[\t\n\f\r ]/g, l = function (e) {
                                        e = String(e).replace(u, "");
                                        var t = e.length;
                                        t % 4 == 0 && (e = e.replace(/==?$/, ""), t = e.length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && o("Invalid character: the string to be decoded is not correctly encoded.");
                                        for (var r, a, i = 0, n = "", l = -1; ++l < t;) a = s.indexOf(e.charAt(l)), r = i % 4 ? 64 * r + a : a, i++ % 4 && (n += String.fromCharCode(255 & r >> (-2 * i & 6)));
                                        return n
                                    }, d = function (e) {
                                        e = String(e), /[^\0-\xFF]/.test(e) && o("The string to be encoded contains characters outside of the Latin1 range.");
                                        for (var t, r, a, i, n = e.length % 3, u = "", l = -1, d = e.length - n; ++l < d;) t = e.charCodeAt(l) << 16, r = e.charCodeAt(++l) << 8, a = e.charCodeAt(++l), i = t + r + a, u += s.charAt(i >> 18 & 63) + s.charAt(i >> 12 & 63) + s.charAt(i >> 6 & 63) + s.charAt(63 & i);
                                        return 2 == n ? (t = e.charCodeAt(l) << 8, r = e.charCodeAt(++l), i = t + r, u += s.charAt(i >> 10) + s.charAt(i >> 4 & 63) + s.charAt(i << 2 & 63) + "=") : 1 == n && (i = e.charCodeAt(l), u += s.charAt(i >> 2) + s.charAt(i << 4 & 63) + "=="), u
                                    }, c = {encode: d, decode: l, version: "0.1.0"};
                                void 0 !== (i = function () {
                                    return c
                                }.call(t, r, t, e)) && (e.exports = i)
                            }()
                        }).call(t, r(11)(e), r(5))
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.stopMonitoringHlsJs = t.monitorHlsJs = void 0;
                        var i = r(2), n = a(i), o = r(7), s = a(o), u = r(4), l = function (e) {
                            if (!e) return {};
                            var t = n.default.performance.timing.navigationStart;
                            return {
                                bytesLoaded: e.total,
                                requestStart: Math.round(t + e.trequest),
                                responseStart: Math.round(t + e.tfirst),
                                responseEnd: Math.round(t + e.tload)
                            }
                        }, d = function (e) {
                            if (e && "function" == typeof e.getAllResponseHeaders) return (0, s.default)(e.getAllResponseHeaders())
                        }, c = function (e, t, r) {
                            var a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments[4]),
                                i = e.log;
                            if (!n.default.performance || !n.default.performance.timing) return void i.warn("window.performance.timing not supported. Not tracking HLS.js.");
                            var o = function (r, a) {
                                return e.emit(t, r, a)
                            }, s = function (e, t) {
                                var r = t.levels, a = t.audioTracks, i = t.url, n = t.stats, s = t.networkDetails,
                                    c = {}, f = {};
                                r.forEach(function (e, t) {
                                    c[t] = {width: e.width, height: e.height, bitrate: e.bitrate, attrs: e.attrs}
                                }), a.forEach(function (e, t) {
                                    f[t] = {name: e.name, language: e.lang, bitrate: e.bitrate}
                                });
                                var p = l(n), h = p.bytesLoaded, _ = p.requestStart, m = p.responseStart,
                                    v = p.responseEnd;
                                o("requestcompleted", {
                                    request_event_type: e,
                                    request_bytes_loaded: h,
                                    request_start: _,
                                    request_response_start: m,
                                    request_response_end: v,
                                    request_type: "manifest",
                                    request_hostname: (0, u.extractHostname)(i),
                                    request_response_headers: d(s),
                                    request_rendition_lists: {media: c, audio: f, video: {}}
                                })
                            };
                            r.on(a.Events.MANIFEST_LOADED, s);
                            var c = function (e, t) {
                                var r = t.details, a = t.level, i = t.networkDetails, n = t.stats, s = l(n),
                                    c = s.bytesLoaded, f = s.requestStart, p = s.responseStart, h = s.responseEnd;
                                o("requestcompleted", {
                                    request_event_type: e,
                                    request_bytes_loaded: c,
                                    request_start: f,
                                    request_response_start: p,
                                    request_response_end: h,
                                    request_current_level: a,
                                    request_type: "manifest",
                                    request_hostname: (0, u.extractHostname)(r.url),
                                    request_response_headers: d(i)
                                })
                            };
                            r.on(a.Events.LEVEL_LOADED, c);
                            var f = function (e, t) {
                                var r = t.details, a = t.networkDetails, i = t.stats, n = l(i), s = n.bytesLoaded,
                                    c = n.requestStart, f = n.responseStart, p = n.responseEnd;
                                o("requestcompleted", {
                                    request_event_type: e,
                                    request_bytes_loaded: s,
                                    request_start: c,
                                    request_response_start: f,
                                    request_response_end: p,
                                    request_type: "manifest",
                                    request_hostname: (0, u.extractHostname)(r.url),
                                    request_response_headers: d(a)
                                })
                            };
                            r.on(a.Events.AUDIO_TRACK_LOADED, f);
                            var p = function (e, t) {
                                var a = t.stats, i = t.networkDetails, n = t.frag, s = l(a), c = s.bytesLoaded,
                                    f = s.requestStart, p = s.responseStart, h = s.responseEnd, _ = {
                                        request_event_type: e,
                                        request_bytes_loaded: c,
                                        request_start: f,
                                        request_response_start: p,
                                        request_response_end: h,
                                        request_hostname: i ? (0, u.extractHostname)(i.responseURL) : void 0,
                                        request_response_headers: d(i),
                                        request_media_duration: n.duration
                                    };
                                "main" === n.type ? (_.request_type = "media", _.request_current_level = n.level, _.request_video_width = (r.levels[n.level] || {}).width, _.request_video_height = (r.levels[n.level] || {}).height) : _.request_type = n.type, o("requestcompleted", _)
                            };
                            r.on(a.Events.FRAG_LOADED, p);
                            var h = function (e, t) {
                                var r = t.details, i = t.response, n = t.context, s = t.frag;
                                if (r === a.ErrorDetails.MANIFEST_LOAD_ERROR || r === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT || r === a.ErrorDetails.FRAG_LOAD_ERROR || r === a.ErrorDetails.FRAG_LOAD_TIMEOUT || r === a.ErrorDetails.LEVEL_LOAD_ERROR || r === a.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                                    var l = s && s.url || n && n.url || "";
                                    o("requestfailed", {
                                        request_error: r,
                                        request_url: l,
                                        request_hostname: (0, u.extractHostname)(l),
                                        request_type: r === a.ErrorDetails.FRAG_LOAD_ERROR || r === a.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest",
                                        request_error_code: i && i.code,
                                        request_error_text: i && i.text
                                    })
                                }
                            };
                            r.on(a.Events.ERROR, h);
                            var _ = function (e, t) {
                                var r = t.frag, a = r && r._url || "";
                                o("requestcanceled", {
                                    request_cancel: e,
                                    request_url: a,
                                    request_type: "media",
                                    request_hostname: (0, u.extractHostname)(a)
                                })
                            };
                            r.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _), r._stopMuxMonitor = function () {
                                r.off(a.Events.MANIFEST_LOADED, s), r.off(a.Events.LEVEL_LOADED, c), r.off(a.Events.AUDIO_TRACK_LOADED, f), r.off(a.Events.FRAG_LOADED, p), r.off(a.Events.ERROR, h), r.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _), r.off(a.Events.DESTROYING, r._stopMuxMonitor), delete r._stopMuxMonitor
                            }, r.on(a.Events.DESTROYING, r._stopMuxMonitor)
                        }, f = function (e) {
                            e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor()
                        };
                        t.monitorHlsJs = c, t.stopMonitoringHlsJs = f
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.stopMonitoringDashJS = t.monitorDashJS = void 0;
                        var i = r(2), n = a(i), o = r(7), s = a(o), u = r(4), l = function (e, t) {
                            if (!e || "function" != typeof e.getRequests) return {};
                            var r = e.getRequests({state: "executed"});
                            if (0 === r.length) return {};
                            var a = r[r.length - 1], i = (0, u.extractHostname)(a.url), n = a.bytesLoaded,
                                o = new Date(a.requestStartDate).getTime(), l = new Date(a.firstByteDate).getTime(),
                                d = new Date(a.requestEndDate).getTime(), c = isNaN(a.duration) ? 0 : a.duration,
                                f = t.getMetricsFor(a.mediaType).HttpList, p = void 0;
                            return f.length > 0 && (p = (0, s.default)(f[f.length - 1]._responseHeaders || "")), {
                                requestStart: o,
                                requestResponseStart: l,
                                requestResponseEnd: d,
                                requestBytesLoaded: n,
                                requestResponseHeaders: p,
                                requestMediaDuration: c,
                                requestHostname: i
                            }
                        }, d = function (e, t) {
                            var r = t.getQualityFor(e), a = t.getCurrentTrackFor(e), i = a.bitrateList;
                            return i ? {
                                currentLevel: r,
                                renditionWidth: i[r].width || null,
                                renditionHeight: i[r].height || null,
                                renditionBitrate: i[r].bandwidth
                            } : {}
                        }, c = function (e, t, r) {
                            var a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], e.log);
                            if (!r || !r.on) return void a.warn("Invalid dash.js player reference. Monitoring blocked.");
                            var i = function (r, a) {
                                return e.emit(t, r, a)
                            }, o = function (e) {
                                var t = e.type, r = e.data, a = r || {}, n = a.url;
                                i("requestcompleted", {
                                    request_event_type: t,
                                    request_start: 0,
                                    request_response_start: 0,
                                    request_response_end: 0,
                                    request_bytes_loaded: -1,
                                    request_type: "manifest",
                                    request_hostname: (0, u.extractHostname)(n)
                                })
                            };
                            r.on("manifestLoaded", o);
                            var s = {}, c = function (e) {
                                var t = e.type, a = e.fragmentModel, n = e.chunk, o = n || {}, u = o.mediaInfo,
                                    d = u || {}, c = d.type, f = d.bitrateList;
                                f = f || [];
                                var p = {};
                                f.forEach(function (e, t) {
                                    p[t] = {}, p[t].width = e.width, p[t].height = e.height, p[t].bitrate = e.bandwidth, p[t].attrs = {}
                                }), "video" === c ? s.video = p : "audio" === c ? s.audio = p : s.media = p;
                                var h = l(a, r), _ = h.requestStart, m = h.requestResponseStart,
                                    v = h.requestResponseEnd, y = h.requestResponseHeaders, b = h.requestMediaDuration,
                                    g = h.requestHostname;
                                i("requestcompleted", {
                                    request_event_type: t,
                                    request_start: _,
                                    request_response_start: m,
                                    request_response_end: v,
                                    request_bytes_loaded: -1,
                                    request_type: c + "_init",
                                    request_response_headers: y,
                                    request_hostname: g,
                                    request_media_duration: b,
                                    request_rendition_lists: s
                                })
                            };
                            r.on("initFragmentLoaded", c);
                            var f = function (e) {
                                var t = e.type, a = e.fragmentModel, n = e.chunk, o = n || {}, s = o.mediaInfo,
                                    u = o.start, c = s || {}, f = c.type, p = l(a, r), h = p.requestStart,
                                    _ = p.requestResponseStart, m = p.requestResponseEnd, v = p.requestBytesLoaded,
                                    y = p.requestResponseHeaders, b = p.requestMediaDuration, g = p.requestHostname,
                                    w = d(f, r), x = w.currentLevel, S = w.renditionWidth, T = w.renditionHeight,
                                    E = w.renditionBitrate;
                                i("requestcompleted", {
                                    request_event_type: t,
                                    request_start: h,
                                    request_response_start: _,
                                    request_response_end: m,
                                    request_bytes_loaded: v,
                                    request_type: f,
                                    request_response_headers: y,
                                    request_hostname: g,
                                    request_media_start_time: u,
                                    request_media_duration: b,
                                    request_current_level: x,
                                    request_labeled_bitrate: E,
                                    request_video_width: S,
                                    request_video_height: T
                                })
                            };
                            r.on("mediaFragmentLoaded", f);
                            var p = function (e) {
                                var t = e.error, r = e.event;
                                r = r || {};
                                var a = r.request || {}, o = n.default.event && n.default.event.currentTarget || {};
                                i("requestfailed", {
                                    request_error: t + "_" + r.id + "_" + a.type,
                                    request_url: r.url,
                                    request_hostname: (0, u.extractHostname)(r.url),
                                    request_type: a.mediaType,
                                    request_error_code: o.status,
                                    request_error_type: o.statusText
                                })
                            };
                            r.on("error", p), r._stopMuxMonitor = function () {
                                r.off("manifestLoaded", o), r.off("initFragmentLoaded", c), r.off("mediaFragmentLoaded", f), r.off("error", p), delete r._stopMuxMonitor
                            }
                        }, f = function (e) {
                            e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor()
                        };
                        t.monitorDashJS = c, t.stopMonitoringDashJS = f
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = function () {
                        }, i = 0;
                        a.prototype.on = function (e, t, r) {
                            return t._eventEmitterGuid = t._eventEmitterGuid || ++i, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], r && (t = t.bind(r)), this._listeners[e].push(t), t
                        }, a.prototype.off = function (e, t) {
                            var r = this._listeners && this._listeners[e];
                            r && r.forEach(function (e, a) {
                                e._eventEmitterGuid === t._eventEmitterGuid && r.splice(a, 1)
                            })
                        }, a.prototype.one = function (e, t, r) {
                            var a = this;
                            t._eventEmitterGuid = t._eventEmitterGuid || ++i;
                            var n = function i() {
                                a.off(e, i), t.apply(r || this, arguments)
                            };
                            n._eventEmitterGuid = t._eventEmitterGuid, this.on(e, n)
                        }, a.prototype.emit = function (e, t) {
                            var r = this;
                            if (this._listeners) {
                                t = t || {};
                                var a = this._listeners["before*"] || [], i = this._listeners[e] || [],
                                    n = this._listeners["after" + e] || [], o = function (t, a) {
                                        t = t.slice(), t.forEach(function (t) {
                                            t.call(r, {type: e}, a)
                                        })
                                    };
                                o(a, t), o(i, t), o(n, t)
                            }
                        }, t.default = a
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = r(2), i = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(a), n = function () {
                            this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, this.on("playing", function () {
                                this._playheadShouldBeProgressing = !0
                            }), this.on("play", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("viewstart", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", function () {
                                this.data.player_is_paused && this._stopPlaybackHeartbeatInterval()
                            }), this.on("timeupdate", function () {
                                null !== this._playbackHeartbeatInterval && this.emit("playbackheartbeat")
                            }), this.on("devicesleep", function (e, t) {
                                null !== this._playbackHeartbeatInterval && (i.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {viewer_time: t.viewer_time}), this._playbackHeartbeatInterval = null)
                            })
                        };
                        n.prototype._startPlaybackHeartbeatInterval = function () {
                            var e = this;
                            null === this._playbackHeartbeatInterval && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = i.default.setInterval(function () {
                                e.emit("playbackheartbeat")
                            }, this.playbackHeartbeatTime))
                        }, n.prototype._stopPlaybackHeartbeatInterval = function () {
                            this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (i.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null)
                        }, t.default = n
                    }, function (e, t, r) {
                        "use strict";

                        function a() {
                            var e = this;
                            this.on("viewinit", function () {
                                e.viewErrored = !1
                            }), this.on("error", function () {
                                try {
                                    var t = e.errorTranslator({
                                        player_error_code: e.data.player_error_code,
                                        player_error_message: e.data.player_error_message
                                    });
                                    t ? (e.data.player_error_code = t.player_error_code, e.data.player_error_message = t.player_error_message, e.viewErrored = !0) : (delete e.data.player_error_code, delete e.data.player_error_message)
                                } catch (t) {
                                    e.mux.log.warn("Exception in error translator callback.", t), e.viewErrored = !0
                                }
                            })
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = r(1), i = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(a), n = function () {
                            this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState)
                        };
                        n.prototype._updateWatchTime = function (e, t) {
                            var r = t.viewer_time;
                            null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = r), (0, i.default)(this.data, "view_watch_time", r - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = r
                        }, n.prototype._clearWatchTimeState = function (e, t) {
                            this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null
                        }, t.default = n
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = r(1), i = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(a), n = function () {
                            this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState)
                        };
                        n.prototype._updatePlaybackTime = function () {
                            var e = this.data.player_playhead_time;
                            if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition) {
                                var t = e - this._playbackTimeTrackerLastPlayheadPosition;
                                t <= 1e3 && (0, i.default)(this.data, "view_content_playback_time", t)
                            }
                            this._playbackTimeTrackerLastPlayheadPosition = e
                        }, n.prototype._clearPlaybackTimeState = function () {
                            this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1
                        }, t.default = n
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = function () {
                            this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", function () {
                                this.off("timeupdate", this._updatePlayheadTime)
                            })
                        };
                        a.prototype._updatePlayheadTime = function (e, t) {
                            if (t.player_playhead_time) this.data.player_playhead_time = t.player_playhead_time; else if (this.getPlayheadTime) {
                                var r = this.getPlayheadTime();
                                void 0 !== r && (this.data.player_playhead_time = r)
                            }
                        }, t.default = a
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = r(1), i = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(a), n = function () {
                            this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", function () {
                                this._cleanupRebufferTracker(null, {viewer_time: Date.now()})
                            })
                        };
                        n.prototype._checkIfRebuffering = function (e, t) {
                            if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing) return void this._cleanupRebufferTracker(e, t);
                            if (null === this._lastCheckedTime) return this._prepareRebufferTrackerState(t.viewer_time), void this._updateRebufferMetrics();
                            if (this._lastPlayheadTime !== this.data.player_playhead_time) return void this._cleanupRebufferTracker(e, t, !0);
                            var r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                            r >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime) : (this._rebuffering = !0, (0, i.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(r), this.emit("rebufferstart"))), this._lastCheckedTime = t.viewer_time
                        }, n.prototype._clearRebufferTrackerState = function () {
                            this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
                        }, n.prototype._prepareRebufferTrackerState = function (e) {
                            this._lastCheckedTime = e, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
                        }, n.prototype._cleanupRebufferTracker = function (e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (this._rebuffering) this._rebuffering = !1, this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {viewer_time: t.viewer_time}); else {
                                if (null === this._lastCheckedTime) return void this._updateRebufferMetrics();
                                var a = this.data.player_playhead_time - this._lastPlayheadTime,
                                    n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                a > 0 && n - a > this.minimumRebufferDuration ? ((0, i.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(n - a), this.emit("rebufferstart", {viewer_time: this._lastPlayheadTimeUpdatedTime}), this.emit("rebufferend", {viewer_time: this._lastPlayheadTimeUpdatedTime + n - a})) : this._updateRebufferMetrics()
                            }
                            r ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
                        }, n.prototype._updateRebufferMetrics = function (e) {
                            e > 0 && (0, i.default)(this.data, "view_rebuffer_duration", e), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time)
                        }, t.default = n
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var a = function () {
                            this.on("viewinit", function () {
                                var e = this.data, t = e.view_id;
                                if (!e.view_program_changed) {
                                    var r = function (e, r) {
                                        var a = r.viewer_time;
                                        "playing" === e.type && void 0 === this.data.view_time_to_first_frame ? this.calculateTimeToFirstFrame(a || Date.now(), t) : "adplaying" !== e.type || void 0 !== this.data.view_time_to_first_frame && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(a || Date.now(), t)
                                    };
                                    this.one("playing", r), this.one("adplaying", r), this.one("viewend", function () {
                                        this.off("playing", r), this.off("adplaying", r)
                                    })
                                }
                            })
                        };
                        a.prototype.calculateTimeToFirstFrame = function (e, t) {
                            t === this.data.view_id && (this._updateWatchTime(null, {viewer_time: e}), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START))
                        }, t.default = a
                    }, function (e, t, r) {
                        "use strict";

                        function a() {
                            var e = this;
                            this.on("viewinit", function () {
                                this._lastPlayheadPosition = -1
                            });
                            var t = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"],
                                r = ["playing", "hb"];
                            t.forEach(function (t) {
                                e.on(t, function () {
                                    if (this._lastPlayheadPosition >= 0 && this.data.player_playhead_time >= 0 && this._lastPlayerWidth >= 0 && this._lastSourceWidth > 0 && this._lastPlayerHeight >= 0 && this._lastSourceHeight > 0) {
                                        var e = this.data.player_playhead_time - this._lastPlayheadPosition;
                                        if (e < 0) return void (this._lastPlayheadPosition = -1);
                                        var t = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight),
                                            r = Math.max(0, t - 1), a = Math.max(0, 1 - t);
                                        this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, r), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, a), (0, n.default)(this.data, "view_total_content_playback_time", e), (0, n.default)(this.data, "view_total_upscaling", r * e), (0, n.default)(this.data, "view_total_downscaling", a * e)
                                    }
                                    this._lastPlayheadPosition = -1
                                })
                            }), r.forEach(function (t) {
                                e.on(t, function () {
                                    this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height
                                })
                            })
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
                        var i = r(1), n = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i)
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        function i() {
                            this.isSeeking = !1, this.on("seeking", function (e, t) {
                                (0, u.default)(this.data, t), this._lastSeekingTime = Date.now(), !1 === this.isSeeking && (this.isSeeking = !0, this.send("seeking"))
                            }), this.on("seeked", function () {
                                this.isSeeking = !1;
                                var e = this._lastSeekingTime || Date.now(), t = Date.now() - e;
                                (0, o.default)(this.data, "view_seek_count", 1), (0, o.default)(this.data, "view_seek_duration", t);
                                var r = this.data.view_max_seek_time || 0;
                                this.data.view_max_seek_time = Math.max(r, t)
                            }), this.on("viewend", function () {
                                this.isSeeking = !1
                            })
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = i;
                        var n = r(1), o = a(n), s = r(0), u = a(s)
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = function () {
                                function e(e, t) {
                                    var r = [], a = !0, i = !1, n = void 0;
                                    try {
                                        for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0) ;
                                    } catch (e) {
                                        i = !0, n = e
                                    } finally {
                                        try {
                                            !a && s.return && s.return()
                                        } finally {
                                            if (i) throw n
                                        }
                                    }
                                    return r
                                }

                                return function (t, r) {
                                    if (Array.isArray(t)) return t;
                                    if (Symbol.iterator in Object(t)) return e(t, r);
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }
                            }(), n = r(1), o = a(n), s = r(4), u = r(0), l = a(u), d = function (e, t) {
                                e.push(t), e.sort(function (e, t) {
                                    return e.viewer_time - t.viewer_time
                                })
                            },
                            c = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"],
                            f = function () {
                                var e = this;
                                this.on("viewinit", function () {
                                    this.isAdBreak = !1, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = !1, this._wouldBeNewAdPlay = !0, this._prerollPlayTime = void 0
                                }), c.forEach(function (t) {
                                    return e.on(t, e._updateAdData)
                                });
                                var t = function () {
                                    e.isAdBreak = !1
                                };
                                this.on("adbreakstart", function () {
                                    this.isAdBreak = !0
                                }), this.on("play", t), this.on("playing", t), this.on("viewend", t), this.on("adrequest", function (e, t) {
                                    t = (0, l.default)({ad_request_id: "generatedAdRequestId" + this._currentAdRequestNumber++}, t), d(this._adRequests, t), (0, o.default)(this.data, "view_ad_request_count"), this.inPrerollPosition() && (this.data.view_preroll_requested = !0, this._adHasPlayed || (0, o.default)(this.data, "view_preroll_request_count"))
                                }), this.on("adresponse", function (e, t) {
                                    t = (0, l.default)({ad_request_id: "generatedAdRequestId" + this._currentAdResponseNumber++}, t), d(this._adResponses, t);
                                    var r = this.findAdRequest(t.ad_request_id);
                                    r && (0, o.default)(this.data, "view_ad_request_time", Math.max(0, t.viewer_time - r.viewer_time))
                                }), this.on("adplay", function (e, t) {
                                    this._adHasPlayed = !0, this._wouldBeNewAdPlay && (this._wouldBeNewAdPlay = !1, (0, o.default)(this.data, "view_ad_played_count")), this.inPrerollPosition() && !this.data.view_preroll_played && (this.data.view_preroll_played = !0, this._adRequests.length > 0 && (this.data.view_preroll_request_time = Math.max(0, t.viewer_time - this._adRequests[0].viewer_time)), this.data.view_start && (this.data.view_startup_preroll_request_time = Math.max(0, t.viewer_time - this.data.view_start)), this._prerollPlayTime = t.viewer_time)
                                }), this.on("adplaying", function (e, t) {
                                    this.inPrerollPosition() && void 0 === this.data.view_preroll_load_time && void 0 !== this._prerollPlayTime && (this.data.view_preroll_load_time = t.viewer_time - this._prerollPlayTime, this.data.view_startup_preroll_load_time = t.viewer_time - this._prerollPlayTime)
                                }), this.on("adended", function () {
                                    this._wouldBeNewAdPlay = !0
                                }), this.on("aderror", function () {
                                    this._wouldBeNewAdPlay = !0
                                })
                            };
                        f.prototype.inPrerollPosition = function () {
                            return void 0 === this.data.view_content_playback_time || this.data.view_content_playback_time <= 1e3
                        }, f.prototype.findAdRequest = function (e) {
                            for (var t = 0; t < this._adRequests.length; t++) if (this._adRequests[t].ad_request_id === e) return this._adRequests[t]
                        }, f.prototype._updateAdData = function (e, t) {
                            if (this.inPrerollPosition()) {
                                if (!this.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                                    var r = (0, s.extractHostnameAndDomain)(t.ad_tag_url), a = i(r, 2), n = a[0],
                                        o = a[1];
                                    this.data.view_preroll_ad_tag_domain = o, this.data.view_preroll_ad_tag_hostname = n
                                }
                                if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                    var u = (0, s.extractHostnameAndDomain)(t.ad_asset_url), l = i(u, 2), d = l[0],
                                        c = l[1];
                                    this.data.view_preroll_ad_asset_domain = c, this.data.view_preroll_ad_asset_hostname = d
                                }
                            }
                        }, t.default = f
                    }, function (e, t, r) {
                        "use strict";

                        function a() {
                            var e = this, t = void 0, r = void 0, a = function () {
                                (0, n.default)(e.data, "view_waiting_rebuffer_count", 1), t = Date.now(), r = window.setInterval(function () {
                                    if (t) {
                                        var r = Date.now();
                                        (0, n.default)(e.data, "view_waiting_rebuffer_duration", r - t), t = r
                                    }
                                }, 250)
                            }, i = function () {
                                t && ((0, n.default)(e.data, "view_waiting_rebuffer_duration", Date.now() - t), t = !1, window.clearInterval(r))
                            }, o = !1, s = function () {
                                o = !0
                            }, u = function () {
                                o = !1, i()
                            };
                            this.on("waiting", function () {
                                o && a()
                            }), this.on("playing", function () {
                                i(), s()
                            }), this.on("pause", u), this.on("seeking", u)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
                        var i = r(1), n = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i)
                    }, function (e, t, r) {
                        "use strict";

                        function a() {
                            var e = this;
                            this.one("playbackheartbeat", o), this.on("playbackheartbeatend", function () {
                                e.off("before*", s), e.one("playbackheartbeat", o)
                            })
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
                        var i = r(0), n = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i), o = function () {
                            this.lastWallClockTime = Date.now(), this.on("before*", s)
                        }, s = function (e) {
                            var t = Date.now(), r = this.lastWallClockTime;
                            this.lastWallClockTime = t, t - r > 3e4 && (this.emit("devicesleep", {viewer_time: r}), (0, n.default)(this.data, {viewer_time: r}), this.send("devicesleep"), this.emit("devicewake", {viewer_time: t}), (0, n.default)(this.data, {viewer_time: t}), this.send("devicewake"))
                        }
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, n = r(39), o = r(3), s = a(o), u = r(43), l = a(u), d = r(9), c = a(d), f = r(15), p = a(f),
                            h = r(44), _ = a(h), m = r(46), v = a(m), y = r(0), b = a(y),
                            g = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id"],
                            w = ["viewstart", "error", "ended", "viewend"], x = function (e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.mux = e, this.envKey = t, this.eventQueue = new _.default((0, l.default)(t, r.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = r.sampleRate, this.disableCookies = r.disableCookies, this.respectDoNotTrack = r.respectDoNotTrack, this.pageLevelData = {
                                    mux_api_version: this.mux.API_VERSION,
                                    mux_embed_version: this.mux.VERSION,
                                    page_url: window.location.href,
                                    viewer_application_name: v.default.name,
                                    viewer_application_version: v.default.version,
                                    viewer_application_engine: v.default.layout,
                                    viewer_device_name: v.default.product,
                                    viewer_device_category: "",
                                    viewer_device_manufacturer: v.default.manufacturer,
                                    viewer_os_family: v.default.os && v.default.os.family,
                                    viewer_os_architecture: v.default.os && v.default.os.architecture,
                                    viewer_os_version: v.default.os && v.default.os.version
                                }, this.viewerData = this.disableCookies ? {} : (0, n.getAndUpdateViewerData)()
                            };
                        x.prototype.send = function (e, t) {
                            if (e) {
                                if (this.respectDoNotTrack && (0, c.default)()) return s.default.info("Not sending `" + e + "` because Do Not Track is enabled in your browser");
                                if (!t || "object" !== (void 0 === t ? "undefined" : i(t))) return s.default.error("A data object was expected in send() but was not provided");
                                var r = this.disableCookies ? {} : (0, n.getAndUpdateSessionData)(), a = {};
                                (0, b.default)(a, this.pageLevelData), (0, b.default)(a, t), (0, b.default)(a, r), (0, b.default)(a, this.viewerData), a.event = e, a.env_key = this.envKey, a.user_id && (a.viewer_user_id = a.user_id, delete a.user_id);
                                var o = a.mux_sample_number >= this.sampleRate, u = this._deduplicateBeaconData(e, a),
                                    l = (0, p.default)(u);
                                if (this.lastEventTime = Date.now(), o) return s.default.info("Not sending event due to sample rate restriction", e, a, l);
                                if (!this.envKey) return s.default.info("Not sending event due to missing environment key", e, a, l);
                                if (!this.rateLimited) if (s.default.info("Sending event", e, a, l), this.rateLimited = !this.eventQueue.queueEvent(e, l), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0); else if (w.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return a.event = "eventrateexceeded", l = (0, p.default)(a), this.eventQueue.queueEvent(a.event, l), s.default.error("Beaconing disabled due to rate limit.")
                            }
                        }, x.prototype.destroy = function () {
                            this.eventQueue.destroy(!1)
                        };
                        var S = function (e, t, r, a) {
                            return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === (void 0 === r ? "undefined" : i(r)) && "object" === (void 0 === a ? "undefined" : i(a)) && Object.keys(r || {}).length === Object.keys(a || {}).length)
                        };
                        x.prototype._deduplicateBeaconData = function (e, t) {
                            var r = this, a = {}, i = t.view_id;
                            if (!i || "viewstart" === e || "viewend" === e || !this.previousBeaconData || Date.now() - this.lastEventTime >= 6e5) a = (0, b.default)({}, t), i && (this.previousBeaconData = a), i && "viewend" === e && (this.previousBeaconData = null); else {
                                var n = 0 === e.indexOf("request");
                                Object.keys(t).forEach(function (e) {
                                    var i = t[e];
                                    (i !== r.previousBeaconData[e] || g.indexOf(e) > -1 || S(n, e, i, r.previousBeaconData[e])) && (a[e] = i, r.previousBeaconData[e] = i)
                                })
                            }
                            return a
                        }, t.default = x
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0;
                        var i = r(12), n = a(i), o = r(42), s = a(o), u = r(6), l = function () {
                            var e = void 0;
                            try {
                                e = n.default.parse(s.default.get("muxData") || "")
                            } catch (t) {
                                e = {}
                            }
                            return e
                        }, d = function (e) {
                            s.default.set("muxData", n.default.stringify(e), {expires: 7300})
                        }, c = function () {
                            var e = l();
                            return e.mux_viewer_id = e.mux_viewer_id || (0, u.generateUUID)(), e.msn = e.msn || Math.random(), d(e), {
                                mux_viewer_id: e.mux_viewer_id,
                                mux_sample_number: e.msn
                            }
                        }, f = function () {
                            var e = l(), t = Date.now();
                            return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = (0, u.generateUUID)(), e.sst = t), e.sex = t + 15e5, d(e), {
                                session_id: e.sid,
                                session_start: e.sst,
                                session_expires: e.sex
                            }
                        };
                        t.getAndUpdateViewerData = c, t.getAndUpdateSessionData = f
                    }, function (e, t, r) {
                        "use strict";
                        var a = r(13), i = r(14), n = {
                            brackets: function (e) {
                                return e + "[]"
                            }, indices: function (e, t) {
                                return e + "[" + t + "]"
                            }, repeat: function (e) {
                                return e
                            }
                        }, o = Date.prototype.toISOString, s = {
                            delimiter: "&",
                            encode: !0,
                            encoder: a.encode,
                            encodeValuesOnly: !1,
                            serializeDate: function (e) {
                                return o.call(e)
                            },
                            skipNulls: !1,
                            strictNullHandling: !1
                        }, u = function e(t, r, i, n, o, u, l, d, c, f, p, h) {
                            var _ = t;
                            if ("function" == typeof l) _ = l(r, _); else if (_ instanceof Date) _ = f(_); else if (null === _) {
                                if (n) return u && !h ? u(r, s.encoder) : r;
                                _ = ""
                            }
                            if ("string" == typeof _ || "number" == typeof _ || "boolean" == typeof _ || a.isBuffer(_)) return u ? [p(h ? r : u(r, s.encoder)) + "=" + p(u(_, s.encoder))] : [p(r) + "=" + p(String(_))];
                            var m = [];
                            if (void 0 === _) return m;
                            var v;
                            if (Array.isArray(l)) v = l; else {
                                var y = Object.keys(_);
                                v = d ? y.sort(d) : y
                            }
                            for (var b = 0; b < v.length; ++b) {
                                var g = v[b];
                                o && null === _[g] || (m = Array.isArray(_) ? m.concat(e(_[g], i(r, g), i, n, o, u, l, d, c, f, p, h)) : m.concat(e(_[g], r + (c ? "." + g : "[" + g + "]"), i, n, o, u, l, d, c, f, p, h)))
                            }
                            return m
                        };
                        e.exports = function (e, t) {
                            var r = e, o = t ? a.assign({}, t) : {};
                            if (null !== o.encoder && void 0 !== o.encoder && "function" != typeof o.encoder) throw new TypeError("Encoder has to be a function.");
                            var l = void 0 === o.delimiter ? s.delimiter : o.delimiter,
                                d = "boolean" == typeof o.strictNullHandling ? o.strictNullHandling : s.strictNullHandling,
                                c = "boolean" == typeof o.skipNulls ? o.skipNulls : s.skipNulls,
                                f = "boolean" == typeof o.encode ? o.encode : s.encode,
                                p = "function" == typeof o.encoder ? o.encoder : s.encoder,
                                h = "function" == typeof o.sort ? o.sort : null,
                                _ = void 0 !== o.allowDots && o.allowDots,
                                m = "function" == typeof o.serializeDate ? o.serializeDate : s.serializeDate,
                                v = "boolean" == typeof o.encodeValuesOnly ? o.encodeValuesOnly : s.encodeValuesOnly;
                            if (void 0 === o.format) o.format = i.default; else if (!Object.prototype.hasOwnProperty.call(i.formatters, o.format)) throw new TypeError("Unknown format option provided.");
                            var y, b, g = i.formatters[o.format];
                            "function" == typeof o.filter ? (b = o.filter, r = b("", r)) : Array.isArray(o.filter) && (b = o.filter, y = b);
                            var w = [];
                            if ("object" != typeof r || null === r) return "";
                            var x;
                            x = o.arrayFormat in n ? o.arrayFormat : "indices" in o ? o.indices ? "indices" : "repeat" : "indices";
                            var S = n[x];
                            y || (y = Object.keys(r)), h && y.sort(h);
                            for (var T = 0; T < y.length; ++T) {
                                var E = y[T];
                                c && null === r[E] || (w = w.concat(u(r[E], E, S, d, c, f ? p : null, b, h, _, m, g, v)))
                            }
                            var O = w.join(l), k = !0 === o.addQueryPrefix ? "?" : "";
                            return O.length > 0 ? k + O : ""
                        }
                    }, function (e, t, r) {
                        "use strict";
                        var a = r(13), i = Object.prototype.hasOwnProperty, n = {
                            allowDots: !1,
                            allowPrototypes: !1,
                            arrayLimit: 20,
                            decoder: a.decode,
                            delimiter: "&",
                            depth: 5,
                            parameterLimit: 1e3,
                            plainObjects: !1,
                            strictNullHandling: !1
                        }, o = function (e, t) {
                            for (var r = {}, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = a.split(t.delimiter, o), u = 0; u < s.length; ++u) {
                                var l, d, c = s[u], f = c.indexOf("]="), p = -1 === f ? c.indexOf("=") : f + 1;
                                -1 === p ? (l = t.decoder(c, n.decoder), d = t.strictNullHandling ? null : "") : (l = t.decoder(c.slice(0, p), n.decoder), d = t.decoder(c.slice(p + 1), n.decoder)), i.call(r, l) ? r[l] = [].concat(r[l]).concat(d) : r[l] = d
                            }
                            return r
                        }, s = function (e, t, r) {
                            for (var a = t, i = e.length - 1; i >= 0; --i) {
                                var n, o = e[i];
                                if ("[]" === o) n = [], n = n.concat(a); else {
                                    n = r.plainObjects ? Object.create(null) : {};
                                    var s = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
                                        u = parseInt(s, 10);
                                    !isNaN(u) && o !== s && String(u) === s && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (n = [], n[u] = a) : n[s] = a
                                }
                                a = n
                            }
                            return a
                        }, u = function (e, t, r) {
                            if (e) {
                                var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, n = /(\[[^[\]]*])/,
                                    o = /(\[[^[\]]*])/g, u = n.exec(a), l = u ? a.slice(0, u.index) : a, d = [];
                                if (l) {
                                    if (!r.plainObjects && i.call(Object.prototype, l) && !r.allowPrototypes) return;
                                    d.push(l)
                                }
                                for (var c = 0; null !== (u = o.exec(a)) && c < r.depth;) {
                                    if (c += 1, !r.plainObjects && i.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes) return;
                                    d.push(u[1])
                                }
                                return u && d.push("[" + a.slice(u.index) + "]"), s(d, t, r)
                            }
                        };
                        e.exports = function (e, t) {
                            var r = t ? a.assign({}, t) : {};
                            if (null !== r.decoder && void 0 !== r.decoder && "function" != typeof r.decoder) throw new TypeError("Decoder has to be a function.");
                            if (r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix, r.delimiter = "string" == typeof r.delimiter || a.isRegExp(r.delimiter) ? r.delimiter : n.delimiter, r.depth = "number" == typeof r.depth ? r.depth : n.depth, r.arrayLimit = "number" == typeof r.arrayLimit ? r.arrayLimit : n.arrayLimit, r.parseArrays = !1 !== r.parseArrays, r.decoder = "function" == typeof r.decoder ? r.decoder : n.decoder, r.allowDots = "boolean" == typeof r.allowDots ? r.allowDots : n.allowDots, r.plainObjects = "boolean" == typeof r.plainObjects ? r.plainObjects : n.plainObjects, r.allowPrototypes = "boolean" == typeof r.allowPrototypes ? r.allowPrototypes : n.allowPrototypes, r.parameterLimit = "number" == typeof r.parameterLimit ? r.parameterLimit : n.parameterLimit, r.strictNullHandling = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : n.strictNullHandling, "" === e || null === e || void 0 === e) return r.plainObjects ? Object.create(null) : {};
                            for (var i = "string" == typeof e ? o(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, l = Object.keys(i), d = 0; d < l.length; ++d) {
                                var c = l[d], f = u(c, i[c], r);
                                s = a.merge(s, f, r)
                            }
                            return a.compact(s)
                        }
                    }, function (e, t, r) {
                        "use strict";
                        var a, i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        };
                        !function (o) {
                            var s = !1;
                            if (a = o, void 0 !== (i = "function" == typeof a ? a.call(t, r, t, e) : a) && (e.exports = i), s = !0, "object" === n(t) && (e.exports = o(), s = !0), !s) {
                                var u = window.Cookies, l = window.Cookies = o();
                                l.noConflict = function () {
                                    return window.Cookies = u, l
                                }
                            }
                        }(function () {
                            function e(r) {
                                function a(e, i, n) {
                                    var o;
                                    if ("undefined" != typeof document) {
                                        if (arguments.length > 1) {
                                            if (n = t({path: "/"}, a.defaults, n), "number" == typeof n.expires) {
                                                var s = new Date;
                                                s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires), n.expires = s
                                            }
                                            try {
                                                o = JSON.stringify(i), /^[\{\[]/.test(o) && (i = o)
                                            } catch (e) {
                                            }
                                            return i = r.write ? r.write(i, e) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", i, n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
                                        }
                                        e || (o = {});
                                        for (var u = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
                                            var c = u[d].split("="), f = c.slice(1).join("=");
                                            '"' === f.charAt(0) && (f = f.slice(1, -1));
                                            try {
                                                var p = c[0].replace(l, decodeURIComponent);
                                                if (f = r.read ? r.read(f, p) : r(f, p) || f.replace(l, decodeURIComponent), this.json) try {
                                                    f = JSON.parse(f)
                                                } catch (e) {
                                                }
                                                if (e === p) {
                                                    o = f;
                                                    break
                                                }
                                                e || (o[p] = f)
                                            } catch (e) {
                                            }
                                        }
                                        return o
                                    }
                                }

                                return a.set = a, a.get = function (e) {
                                    return a.call(a, e)
                                }, a.getJSON = function () {
                                    return a.apply({json: !0}, [].slice.call(arguments))
                                }, a.defaults = {}, a.remove = function (e, r) {
                                    a(e, "", t(r, {expires: -1}))
                                }, a.withConverter = e, a
                            }

                            var t = function () {
                                for (var e = 0, t = {}; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var a in r) t[a] = r[a]
                                }
                                return t
                            };
                            return e(function () {
                            })
                        })
                    }, function (e, t, r) {
                        "use strict";

                        function a(e, t) {
                            return e = e || "", t = t || "litix.io", e.match(/^[a-z0-9]+$/) ? "https://" + e + "." + t : "https://img.litix.io/a.gif"
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = r(2), n = a(i), o = r(3), s = a(o), u = r(45), l = a(u), d = r(0), c = a(d), f = r(15),
                            p = a(f),
                            h = !!n.default.XMLHttpRequest && "withCredentials" in new n.default.XMLHttpRequest,
                            _ = {maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 5e3},
                            m = function (e, t) {
                                this._beaconUrl = e || "https://img.litix.io", this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = (0, c.default)({}, _, t)
                            };
                        m.prototype.queueEvent = function (e, t) {
                            var r = (0, c.default)({}, t);
                            return h ? (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(r), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (l.default.send(this._beaconUrl, r), !0)
                        }, m.prototype.flushEvents = function () {
                            h && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending())
                        }, m.prototype.destroy = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), n.default.clearTimeout(this._sendTimeout)
                        }, m.prototype._clearBeaconQueue = function () {
                            var e = n.default.navigator,
                                t = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
                                r = this._eventQueue.slice(t);
                            if (t > 0 && (0, c.default)(r[r.length - 1], (0, p.default)({mux_view_message: "event queue truncated"})), e.sendBeacon) e.sendBeacon(this._beaconUrl, JSON.stringify({events: r})); else if (n.default.XMLHttpRequest) {
                                var a = new n.default.XMLHttpRequest;
                                a.open("POST", this._beaconUrl), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify({events: r}))
                            } else l.default.send(this._beaconUrl, r[r.length - 1])
                        }, m.prototype._sendBeaconQueue = function () {
                            var e = this;
                            if (n.default.XMLHttpRequest && !this._postInFlight) {
                                var t = new n.default.XMLHttpRequest,
                                    r = this._eventQueue.slice(0, this._options.maxBeaconSize);
                                this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0, t.onreadystatechange = function () {
                                    4 === t.readyState && (200 !== t.status ? (e._eventQueue = r.concat(e._eventQueue), e._failureCount += 1, s.default.info("Error sending beacon: " + t.status), s.default.info(t.responseText)) : e._failureCount = 0, e._postInFlight = !1)
                                }, t.open("POST", this._beaconUrl), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify({events: r}))
                            }
                        }, m.prototype._getNextBeaconTime = function () {
                            if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
                            var e = Math.pow(2, this._failureCount - 1);
                            return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
                        }, m.prototype._startBeaconSending = function () {
                            var e = this;
                            n.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = n.default.setTimeout(function () {
                                e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending()
                            }, this._getNextBeaconTime()))
                        }, t.default = m
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = r(12), n = a(i), o = r(2), s = a(o), u = {};
                        u.send = function (e, t) {
                            function r() {
                                a.src = o + (i ? "&rc=" + i : "")
                            }

                            var a = new Image, i = 0, o = e + "?" + n.default.stringify(t);
                            return a.addEventListener("error", function () {
                                i > 3 || s.default.setTimeout(function () {
                                    i++, r()
                                }, 5e3 * i)
                            }), r(), a
                        }, t.default = u
                    }, function (e, t, r) {
                        (function (e, a) {
                            var i;
                            (function () {
                                "use strict";

                                function n(e) {
                                    return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
                                }

                                function o(e, t, r) {
                                    var a = {
                                        "10.0": "10",
                                        6.4: "10 Technical Preview",
                                        6.3: "8.1",
                                        6.2: "8",
                                        6.1: "Server 2008 R2 / 7",
                                        "6.0": "Server 2008 / Vista",
                                        5.2: "Server 2003 / XP 64-bit",
                                        5.1: "XP",
                                        5.01: "2000 SP1",
                                        "5.0": "2000",
                                        "4.0": "NT",
                                        "4.90": "ME"
                                    };
                                    return t && r && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (a = a[/[\d.]+$/.exec(e)]) && (e = "Windows " + a), e = String(e), t && r && (e = e.replace(RegExp(t, "i"), r)), e = u(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                }

                                function s(e, t) {
                                    var r = -1, a = e ? e.length : 0;
                                    if ("number" == typeof a && a > -1 && a <= x) for (; ++r < a;) t(e[r], r, e); else l(e, t)
                                }

                                function u(e) {
                                    return e = h(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : n(e)
                                }

                                function l(e, t) {
                                    for (var r in e) O.call(e, r) && t(e[r], r, e)
                                }

                                function d(e) {
                                    return null == e ? n(e) : k.call(e).slice(8, -1)
                                }

                                function c(e, t) {
                                    var r = null != e ? typeof e[t] : "number";
                                    return !(/^(?:boolean|number|string|undefined)$/.test(r) || "object" == r && !e[t])
                                }

                                function f(e) {
                                    return String(e).replace(/([ -])(?!$)/g, "$1?")
                                }

                                function p(e, t) {
                                    var r = null;
                                    return s(e, function (a, i) {
                                        r = t(r, a, i, e)
                                    }), r
                                }

                                function h(e) {
                                    return String(e).replace(/^ +| +$/g, "")
                                }

                                function _(e) {
                                    function t(t) {
                                        return p(t, function (t, r) {
                                            var a = r.pattern || f(r);
                                            return !t && (t = RegExp("\\b" + a + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + a + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + a + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(r.label && !RegExp(a, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), r = r.label || r, t = u(t[0].replace(RegExp(a, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                                        })
                                    }

                                    function r() {
                                        return this.description || ""
                                    }

                                    var a = v, i = e && "object" == typeof e && "String" != d(e);
                                    i && (a = e, e = null);
                                    var n = a.navigator || {}, s = n.userAgent || "";
                                    e || (e = s);
                                    var m, b, g = i || T == y,
                                        w = i ? !!n.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(k.toString()),
                                        x = i ? "Object" : "ScriptBridgingProxyObject",
                                        E = i ? "Object" : "Environment", O = i && a.java ? "JavaPackage" : d(a.java),
                                        P = i ? "Object" : "RuntimeObject", M = /\bJava/.test(O) && a.java,
                                        A = M && d(a.environment) == E, D = M ? "a" : "Î±", q = M ? "b" : "Î²",
                                        R = a.document || {}, j = a.operamini || a.opera,
                                        I = S.test(I = i && j ? j["[[Class]]"] : d(j)) ? I : j = null, L = e, C = [],
                                        N = null, H = e == s,
                                        B = H && j && "function" == typeof j.version && j.version(), F = function (t) {
                                            return p(t, function (t, r) {
                                                return t || RegExp("\\b" + (r.pattern || f(r)) + "\\b", "i").exec(e) && (r.label || r)
                                            })
                                        }([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                                            label: "WebKit",
                                            pattern: "AppleWebKit"
                                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), U = function (t) {
                                            return p(t, function (t, r) {
                                                return t || RegExp("\\b" + (r.pattern || f(r)) + "\\b", "i").exec(e) && (r.label || r)
                                            })
                                        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                                            label: "Microsoft Edge",
                                            pattern: "Edge"
                                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                                            label: "Samsung Internet",
                                            pattern: "SamsungBrowser"
                                        }, "SeaMonkey", {
                                            label: "Silk",
                                            pattern: "(?:Cloud9|Silk-Accelerated)"
                                        }, "Sleipnir", "SlimBrowser", {
                                            label: "SRWare Iron",
                                            pattern: "Iron"
                                        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                                            label: "Opera Mini",
                                            pattern: "OPiOS"
                                        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                                            label: "Chrome Mobile",
                                            pattern: "(?:CriOS|CrMo)"
                                        }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                                            label: "Firefox for iOS",
                                            pattern: "FxiOS"
                                        }, {label: "IE", pattern: "IEMobile"}, {label: "IE", pattern: "MSIE"}, "Safari"]),
                                        W = t([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                                            label: "Galaxy S",
                                            pattern: "GT-I9000"
                                        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                                            label: "Galaxy S3",
                                            pattern: "GT-I9300"
                                        }, {label: "Galaxy S4", pattern: "GT-I9500"}, {
                                            label: "Galaxy S5",
                                            pattern: "SM-G900"
                                        }, {label: "Galaxy S6", pattern: "SM-G920"}, {
                                            label: "Galaxy S6 Edge",
                                            pattern: "SM-G925"
                                        }, {label: "Galaxy S7", pattern: "SM-G930"}, {
                                            label: "Galaxy S7 Edge",
                                            pattern: "SM-G935"
                                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                                            label: "Kindle Fire",
                                            pattern: "(?:Cloud9|Silk-Accelerated)"
                                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                                            label: "Wii U",
                                            pattern: "WiiU"
                                        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]),
                                        G = function (t) {
                                            return p(t, function (t, r, a) {
                                                return t || (r[W] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(W)] || RegExp("\\b" + f(a) + "(?:\\b|\\w*\\d)", "i").exec(e)) && a
                                            })
                                        }({
                                            Apple: {iPad: 1, iPhone: 1, iPod: 1},
                                            Archos: {},
                                            Amazon: {Kindle: 1, "Kindle Fire": 1},
                                            Asus: {Transformer: 1},
                                            "Barnes & Noble": {Nook: 1},
                                            BlackBerry: {PlayBook: 1},
                                            Google: {"Google TV": 1, Nexus: 1},
                                            HP: {TouchPad: 1},
                                            HTC: {},
                                            LG: {},
                                            Microsoft: {Xbox: 1, "Xbox One": 1},
                                            Motorola: {Xoom: 1},
                                            Nintendo: {"Wii U": 1, Wii: 1},
                                            Nokia: {Lumia: 1},
                                            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                                            Sony: {PlayStation: 1, "PlayStation Vita": 1}
                                        }), V = function (t) {
                                            return p(t, function (t, r) {
                                                var a = r.pattern || f(r);
                                                return !t && (t = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = o(t, a, r.label || r)), t
                                            })
                                        }(["Windows Phone", "Android", "CentOS", {
                                            label: "Chrome OS",
                                            pattern: "CrOS"
                                        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                                    if (F && (F = [F]), G && !W && (W = t([G])), (m = /\bGoogle TV\b/.exec(W)) && (W = m[0]), /\bSimulator\b/i.test(e) && (W = (W ? W + " " : "") + "Simulator"), "Opera Mini" == U && /\bOPiOS\b/.test(e) && C.push("running in Turbo/Uncompressed mode"), "IE" == U && /\blike iPhone OS\b/.test(e) ? (m = _(e.replace(/like iPhone OS/, "")), G = m.manufacturer, W = m.product) : /^iP/.test(W) ? (U || (U = "Safari"), V = "iOS" + ((m = / OS ([\d_]+)/i.exec(e)) ? " " + m[1].replace(/_/g, ".") : "")) : "Konqueror" != U || /buntu/i.test(V) ? G && "Google" != G && (/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(W)) || /\bAndroid\b/.test(V) && /^Chrome/.test(U) && /\bVersion\//i.test(e) ? (U = "Android Browser", V = /\bAndroid\b/.test(V) ? V : "Android") : "Silk" == U ? (/\bMobi/i.test(e) || (V = "Android", C.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && C.unshift("accelerated")) : "PaleMoon" == U && (m = /\bFirefox\/([\d.]+)\b/.exec(e)) ? C.push("identifying as Firefox " + m[1]) : "Firefox" == U && (m = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (V || (V = "Firefox OS"), W || (W = m[1])) : !U || (m = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U)) ? (U && !W && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(m + "/") + 8)) && (U = null), (m = W || G || V) && (W || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : m) + " Browser")) : "Electron" == U && (m = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && C.push("Chromium " + m) : V = "Kubuntu", B || (B = function (t) {
                                        return p(t, function (t, r) {
                                            return t || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                                        })
                                    }(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(U), "(?:Firefox|Minefield|NetFront)"])), (m = "iCab" == F && parseFloat(B) > 3 && "WebKit" || /\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(e) && ("Mac OS" == V ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront") && (F = [m]), "IE" == U && (m = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (U += " Mobile", V = "Windows Phone " + (/\+$/.test(m) ? m : m + ".x"), C.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (U = "IE Mobile", V = "Windows Phone 8.x", C.unshift("desktop mode"), B || (B = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != U && "Trident" == F && (m = /\brv:([\d.]+)/.exec(e)) && (U && C.push("identifying as " + U + (B ? " " + B : "")), U = "IE", B = m[1]), H) {
                                        if (c(a, "global")) if (M && (m = M.lang.System, L = m.getProperty("os.arch"), V = V || m.getProperty("os.name") + " " + m.getProperty("os.version")), g && c(a, "system") && (m = [a.system])[0]) {
                                            V || (V = m[0].os || null);
                                            try {
                                                m[1] = a.require("ringo/engine").version, B = m[1].join("."), U = "RingoJS"
                                            } catch (e) {
                                                m[0].global.system == a.system && (U = "Narwhal")
                                            }
                                        } else "object" == typeof a.process && !a.process.browser && (m = a.process) ? "object" == typeof m.versions ? "string" == typeof m.versions.electron ? (C.push("Node " + m.versions.node), U = "Electron", B = m.versions.electron) : "string" == typeof m.versions.nw && (C.push("Chromium " + B, "Node " + m.versions.node), U = "NW.js", B = m.versions.nw) : (U = "Node.js", L = m.arch, V = m.platform, B = /[\d.]+/.exec(m.version), B = B ? B[0] : "unknown") : A && (U = "Rhino"); else d(m = a.runtime) == x ? (U = "Adobe AIR", V = m.flash.system.Capabilities.os) : d(m = a.phantom) == P ? (U = "PhantomJS", B = (m = m.version || null) && m.major + "." + m.minor + "." + m.patch) : "number" == typeof R.documentMode && (m = /\bTrident\/(\d+)/i.exec(e)) ? (B = [B, R.documentMode], (m = +m[1] + 4) != B[1] && (C.push("IE " + B[1] + " mode"), F && (F[1] = ""), B[1] = m), B = "IE" == U ? String(B[1].toFixed(1)) : B[0]) : "number" == typeof R.documentMode && /^(?:Chrome|Firefox)\b/.test(U) && (C.push("masking as " + U + " " + B), U = "IE", B = "11.0", F = ["Trident"], V = "Windows");
                                        V = V && u(V)
                                    }
                                    if (B && (m = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (H && n.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (N = /b/i.test(m) ? "beta" : "alpha", B = B.replace(RegExp(m + "\\+?$"), "") + ("beta" == N ? q : D) + (/\d+\+?/.exec(m) || "")), "Fennec" == U || "Firefox" == U && /\b(?:Android|Firefox OS)\b/.test(V)) U = "Firefox Mobile"; else if ("Maxthon" == U && B) B = B.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(W)) "Xbox 360" == W && (V = null), "Xbox 360" == W && /\bIEMobile\b/.test(e) && C.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(U) && (!U || W || /Browser|Mobi/.test(U)) || "Windows CE" != V && !/Mobi/i.test(e)) if ("IE" == U && H) try {
                                        null === a.external && C.unshift("platform preview")
                                    } catch (e) {
                                        C.unshift("embedded")
                                    } else (/\bBlackBerry\b/.test(W) || /\bBB10\b/.test(e)) && (m = (RegExp(W.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || B) ? (m = [m, /BB10/.test(e)], V = (m[1] ? (W = null, G = "BlackBerry") : "Device Software") + " " + m[0], B = null) : this != l && "Wii" != W && (H && j || /Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(V) || "IE" == U && (V && !/^Win/.test(V) && B > 5.5 || /\bWindows XP\b/.test(V) && B > 8 || 8 == B && !/\bTrident\b/.test(e))) && !S.test(m = _.call(l, e.replace(S, "") + ";")) && m.name && (m = "ing as " + m.name + ((m = m.version) ? " " + m : ""), S.test(U) ? (/\bIE\b/.test(m) && "Mac OS" == V && (V = null), m = "identify" + m) : (m = "mask" + m, U = I ? u(I.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(m) && (V = null), H || (B = null)), F = ["Presto"], C.push(m)); else U += " Mobile";
                                    (m = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (m = [parseFloat(m.replace(/\.(\d)$/, ".0$1")), m], "Safari" == U && "+" == m[1].slice(-1) ? (U = "WebKit Nightly", N = "alpha", B = m[1].slice(0, -1)) : B != m[1] && B != (m[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (B = null), m[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == m[0] && 537.36 == m[2] && parseFloat(m[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), H && (w || m[1]) ? (F && (F[1] = "like Chrome"), m = m[1] || (m = m[0], m < 530 ? 1 : m < 532 ? 2 : m < 532.05 ? 3 : m < 533 ? 4 : m < 534.03 ? 5 : m < 534.07 ? 6 : m < 534.1 ? 7 : m < 534.13 ? 8 : m < 534.16 ? 9 : m < 534.24 ? 10 : m < 534.3 ? 11 : m < 535.01 ? 12 : m < 535.02 ? "13+" : m < 535.07 ? 15 : m < 535.11 ? 16 : m < 535.19 ? 17 : m < 536.05 ? 18 : m < 536.1 ? 19 : m < 537.01 ? 20 : m < 537.11 ? "21+" : m < 537.13 ? 23 : m < 537.18 ? 24 : m < 537.24 ? 25 : m < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), m = m[0], m = m < 400 ? 1 : m < 500 ? 2 : m < 526 ? 3 : m < 533 ? 4 : m < 534 ? "4+" : m < 535 ? 5 : m < 537 ? 6 : m < 538 ? 7 : m < 601 ? 8 : "8"), F && (F[1] += " " + (m += "number" == typeof m ? ".x" : /[.+]/.test(m) ? "" : "+")), "Safari" == U && (!B || parseInt(B) > 45) && (B = m)), "Opera" == U && (m = /\bzbov|zvav$/.exec(V)) ? (U += " ", C.unshift("desktop mode"), "zvav" == m ? (U += "Mini", B = null) : U += "Mobile", V = V.replace(RegExp(" *" + m + "$"), "")) : "Safari" == U && /\bChrome\b/.exec(F && F[1]) && (C.unshift("desktop mode"), U = "Chrome Mobile", B = null, /\bOS X\b/.test(V) ? (G = "Apple", V = "iOS 4.3+") : V = null), B && 0 == B.indexOf(m = /[\d.]+$/.exec(V)) && e.indexOf("/" + m + "-") > -1 && (V = h(V.replace(m, ""))), F && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || "Safari" != U && /^iOS/.test(V) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(U) && F[1]) && (m = F[F.length - 1]) && C.push(m), C.length && (C = ["(" + C.join("; ") + ")"]), G && W && W.indexOf(G) < 0 && C.push("on " + G), W && C.push((/^on /.test(C[C.length - 1]) ? "" : "on ") + W), V && (m = / ([\d.+]+)$/.exec(V), b = m && "/" == V.charAt(V.length - m[0].length - 1), V = {
                                        architecture: 32,
                                        family: m && !b ? V.replace(m[0], "") : V,
                                        version: m ? m[1] : null,
                                        toString: function () {
                                            var e = this.version;
                                            return this.family + (e && !b ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                                        }
                                    }), (m = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L) ? (V && (V.architecture = 64, V.family = V.family.replace(RegExp(" *" + m), "")), U && (/\bWOW64\b/i.test(e) || H && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(e)) && C.unshift("32-bit")) : V && /^OS X/.test(V.family) && "Chrome" == U && parseFloat(B) >= 39 && (V.architecture = 64), e || (e = null);
                                    var J = {};
                                    return J.description = e, J.layout = F && F[0], J.manufacturer = G, J.name = U, J.prerelease = N, J.product = W, J.ua = e, J.version = U && B, J.os = V || {
                                        architecture: null,
                                        family: null,
                                        version: null,
                                        toString: function () {
                                            return "null"
                                        }
                                    }, J.parse = _, J.toString = r, J.version && C.unshift(B), J.name && C.unshift(U), V && U && (V != String(V).split(" ")[0] || V != U.split(" ")[0] && !W) && C.push(W ? "(" + V + ")" : "on " + V), C.length && (J.description = C.join(" ")), J
                                }

                                var m = {function: !0, object: !0}, v = m[typeof window] && window || this, y = v,
                                    b = m[typeof t] && t, g = m[typeof e] && e && !e.nodeType && e,
                                    w = b && g && "object" == typeof a && a;
                                !w || w.global !== w && w.window !== w && w.self !== w || (v = w);
                                var x = Math.pow(2, 53) - 1, S = /\bOpera/, T = this, E = Object.prototype,
                                    O = E.hasOwnProperty, k = E.toString, P = _();
                                v.platform = P, void 0 !== (i = function () {
                                    return P
                                }.call(t, r, t, e)) && (e.exports = i)
                            }).call(this)
                        }).call(t, r(11)(e), r(5))
                    }, function (e, t, r) {
                        "use strict";

                        function a() {
                            function e(e, t) {
                                var r = t.request_start, u = t.request_response_start, l = t.request_response_end,
                                    d = t.request_bytes_loaded;
                                o++;
                                var c = u - r, f = l - u;
                                if (c > 0 && f > 0 && d > 0) {
                                    var p = d / f * 8e3;
                                    s++, a += c, i += d, n += f, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, p), this.data.view_average_request_throughput = i / n * 8e3, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, c), this.data.view_average_request_latency = a / s, this.data.view_request_count = o
                                }
                            }

                            function t(e, t) {
                                o++, u++, this.data.view_request_count = o, this.data.view_request_failed_count = u
                            }

                            function r(e, t) {
                                o++, l++, this.data.view_request_count = o, this.data.view_request_canceled_count = l
                            }

                            var a = 0, i = 0, n = 0, o = 0, s = 0, u = 0, l = 0;
                            this.on("requestcompleted", e), this.on("requestfailed", t), this.on("requestcanceled", r)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
                    }, function (e, t, r) {
                        "use strict";

                        function a(e, t, r) {
                            var a = (0, s.findMediaElement)(t), n = i(a, 3), d = n[0], c = n[1], f = n[2], p = e.log,
                                h = e.utils.getComputedStyle, _ = e.utils.secondsToMs, m = {automaticErrorTracking: !0};
                            return d ? "video" !== f && "audio" !== f ? p.error("The element of `" + c + "` was not a media element.") : (r = (0, o.default)(m, r), r.data = (0, o.default)({
                                player_software: "HTML5 Video Element",
                                player_software_version: "No Versions",
                                player_mux_plugin_name: "VideoElementMonitor",
                                player_mux_plugin_version: "2.7.0"
                            }, r.data), r.getPlayheadTime = function () {
                                return _(d.currentTime)
                            }, r.getStateData = function () {
                                return {
                                    player_is_paused: d.paused,
                                    player_playhead_time: _(d.currentTime),
                                    player_width: parseInt(h(d, "width")),
                                    player_height: parseInt(h(d, "height")),
                                    player_autoplay_on: d.autoplay,
                                    player_preload_on: d.preload,
                                    video_poster_url: d.poster,
                                    video_source_url: d.currentSrc,
                                    video_source_duration: _(d.duration),
                                    video_source_height: d.videoHeight,
                                    video_source_width: d.videoWidth
                                }
                            }, d.mux = d.mux || {}, d.mux.emit = function (t, r) {
                                e.emit(c, t, r)
                            }, d.mux.destroy = function () {
                                Object.keys(d.mux.listeners).forEach(function (e) {
                                    d.removeEventListener(e, d.mux.listeners[e], !1)
                                }), delete d.mux.listeners, e.emit(c, "destroy")
                            }, d.mux.swapElement = function (t) {
                                var r = (0, s.findMediaElement)(t), a = i(r, 3), n = a[0], u = a[1], l = a[2];
                                return n ? "video" !== l && "audio" !== l ? e.log.error("The element of `" + u + "` was not a media element.") : (n.muxId = d.muxId, delete d.muxId, n.mux = n.mux || {}, n.mux.listeners = (0, o.default)({}, d.mux.listeners), delete d.mux.listeners, Object.keys(n.mux.listeners).forEach(function (e) {
                                    d.removeEventListener(e, n.mux.listeners[e], !1), n.addEventListener(e, n.mux.listeners[e], !1)
                                }), n.mux.swapElement = d.mux.swapElement, n.mux.destroy = d.mux.destroy, delete d.mux, void (d = n)) : e.log.error("No element was found with the `" + u + "` query selector.")
                            }, d.mux.addHLSJS = function (t) {
                                e.addHLSJS(c, t)
                            }, d.mux.addDashJS = function (t) {
                                e.addDashJS(c, t)
                            }, d.mux.removeHLSJS = function () {
                                e.removeHLSJS(c)
                            }, d.mux.removeDashJS = function () {
                                e.removeDashJS(c)
                            }, e.init(c, r), e.emit(c, "playerready"), d.paused || (e.emit(c, "play"), d.readyState > 2 && e.emit(c, "playing")), d.mux.listeners = {}, void u.forEach(function (t) {
                                ("error" !== t || r.automaticErrorTracking) && (d.mux.listeners[t] = function () {
                                    var r = {};
                                    "error" === t && (r.player_error_code = d.error && d.error.code, r.player_error_message = d.error && l[d.error.code]), e.emit(c, t, r)
                                }, d.addEventListener(t, d.mux.listeners[t], !1))
                            })) : p.error("No element was found with the `" + c + "` query selector.")
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = function () {
                            function e(e, t) {
                                var r = [], a = !0, i = !1, n = void 0;
                                try {
                                    for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0) ;
                                } catch (e) {
                                    i = !0, n = e
                                } finally {
                                    try {
                                        !a && s.return && s.return()
                                    } finally {
                                        if (i) throw n
                                    }
                                }
                                return r
                            }

                            return function (t, r) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return e(t, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }();
                        t.default = a;
                        var n = r(0), o = function (e) {
                                return e && e.__esModule ? e : {default: e}
                            }(n), s = r(8),
                            u = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
                            l = {
                                1: "MEDIA_ERR_ABORTED",
                                2: "MEDIA_ERR_NETWORK",
                                3: "MEDIA_ERR_DECODE",
                                4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                            }
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        Object.defineProperty(t, "__esModule", {value: !0});
                        var i = r(50), n = a(i), o = r(1), s = a(o), u = r(51), l = a(u), d = r(52), c = a(d), f = r(0),
                            p = a(f), h = r(7), _ = a(h), m = r(4), v = {};
                        v.safeCall = n.default, v.safeIncrement = s.default, v.getComputedStyle = l.default, v.secondsToMs = c.default, v.assign = p.default, v.headersStringToObject = _.default, v.extractHostnameAndDomain = m.extractHostnameAndDomain, t.default = v
                    }, function (e, t, r) {
                        "use strict";

                        function a(e, t, r, a) {
                            var i = a;
                            if (e && "function" == typeof e[t]) try {
                                i = e[t].apply(e, r)
                            } catch (e) {
                                n.default.info("safeCall error", e)
                            }
                            return i
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
                        var i = r(3), n = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i)
                    }, function (e, t, r) {
                        "use strict";

                        function a(e, t) {
                            if (n.default.defaultView && n.default.defaultView.getComputedStyle) return n.default.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
                        var i = r(10), n = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i)
                    }, function (e, t, r) {
                        "use strict";

                        function a(e) {
                            return Math.floor(1e3 * e)
                        }

                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
                    }])
                })
            }()
        }, function (e, t, r) {
            "use strict";

            function a(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {
                        return {}
                    }, n = !1;
                e.on("adstart", function () {
                    n = !0
                }), e.on("adend", function () {
                    n = !1
                }), e.on("adserror", function () {
                    n = !1
                });
                var s = function () {
                    var a = o(t.currentTime()), s = function r() {
                        var s = Date.now(), u = o(t.currentTime());
                        if (n) {
                            if (u > a) {
                                var l = i();
                                l.viewer_time = s - Math.max(0, u - a), t.off("timeupdate", r), e.mux.emit("adplaying", l)
                            }
                        } else t.off("timeupdate", r)
                    };
                    t.on("timeupdate", s);
                    var u = function e() {
                        t.off("timeupdate", s), r.forEach(function (r) {
                            t.off(r, e)
                        })
                    };
                    r.forEach(function (e) {
                        t.on(e, u)
                    })
                };
                a.forEach(function (e) {
                    t.on(e, s)
                })
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
            var i = r(0), n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(i), o = n.default.utils.secondsToMs
        }, function (e, t, r) {
            "use strict";

            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (o.default.IS_IE8) return !1;
                var t = this, r = t.id();
                e = x({automaticErrorTracking: !0}, e), e.data = x({
                    player_software_name: "Video.js",
                    player_software_version: o.default.VERSION || "< 4.11",
                    player_mux_plugin_name: "videojs-mux",
                    player_mux_plugin_version: "2.5.0"
                }, e.data), e.getPlayheadTime = function () {
                    return E(t.currentTime())
                }, e.getStateData = function () {
                    var e = S(t, "videoHeight"), r = S(t, "videoWidth");
                    if (void 0 === r || void 0 === e) {
                        var a = t.el().firstChild;
                        a && "VIDEO" === a.nodeName.toUpperCase() && (e = a.videoHeight, r = a.videoWidth)
                    }
                    return {
                        player_is_paused: S(t, "paused"),
                        player_is_fullscreen: S(t, "isFullscreen"),
                        player_autoplay_on: !!S(t, "autoplay"),
                        player_preload_on: S(t, "preload"),
                        player_width: T(t.el(), "width"),
                        player_height: T(t.el(), "height"),
                        player_language_code: S(t, "language"),
                        video_poster_url: S(t, "poster"),
                        video_source_url: S(t, "currentSrc"),
                        video_source_mime_type: S(t, "currentType"),
                        video_source_duration: E(S(t, "duration") || 0),
                        video_source_height: e,
                        video_source_width: r
                    }
                }, t.mux = function () {
                    w.error("[videojs-mux] The plugin was initialized more than once.")
                }, t.mux.emit = function (e, t) {
                    u.default.emit(r, e, t)
                }, t.mux.log = w, t.mux.utils = u.default.utils, u.default.init(r, e);
                var a = !1, i = function () {
                    a || t.mux.emit("playerready"), a = !0
                };
                t.ready(function () {
                    t.addClass("vjs-mux"), d.default.setTimeout(i, 0)
                });
                var n = !1;
                t.one("play", i), O.forEach(function (r) {
                    ("error" !== r || e.automaticErrorTracking) && t.on(r, function () {
                        if (!n) {
                            var e = {};
                            if ("error" === r) {
                                var a = S(t, "error");
                                e.player_error_code = a && a.code, e.player_error_message = a && a.message
                            }
                            t.mux.emit(r, e)
                        }
                    })
                });
                var s = !1;
                t.on("play", function () {
                    s = !0
                }), t.on("pause", function () {
                    s = !1
                }), t.on("adstart", function () {
                    n = !0, s && t.mux.emit("pause"), t.mux.emit("adbreakstart")
                }), t.on("adend", function () {
                    t.mux.emit("adbreakend"), n = !1, S(t, "paused") || (t.mux.emit("play"), s = !0, t.onceux && t.mux.emit("playing"))
                }), t.ima && (0, f.default)(t), t.onceux && (0, y.default)(t), t.ima3 && "function" == typeof t.ima3.ready && (0, h.default)(t), t.FreeWheelPlugin && t.FreeWheelPlugin.VERSION && (0, m.default)(t), t.on("dispose", function () {
                    t.mux.emit("destroy")
                })
            }

            var n = r(3), o = a(n), s = r(0), u = a(s), l = r(4), d = a(l), c = r(6), f = a(c), p = r(7), h = a(p),
                _ = r(8), m = a(_), v = r(9), y = a(v), b = r(10), g = a(b), w = u.default.log,
                x = u.default.utils.assign, S = u.default.utils.safeCall, T = u.default.utils.getComputedStyle,
                E = u.default.utils.secondsToMs,
                O = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"];
            (o.default.registerPlugin || o.default.plugin || function () {
                u.default.log.error("No valid method to register videojs plugin available.")
            })("mux", i), (0, g.default)(o.default)
        }, function (t, r) {
            t.exports = e
        }, function (e, t, r) {
            (function (t) {
                var r;
                r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = r
            }).call(t, r(5))
        }, function (e, t) {
            var r;
            r = function () {
                return this
            }();
            try {
                r = r || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (r = window)
            }
            e.exports = r
        }, function (e, t, r) {
            "use strict";

            function a(e) {
                var t = function (t) {
                    t = t || {};
                    var r = "function" == typeof t.getAdData ? t.getAdData() : {},
                        a = "function" == typeof t.getAd ? t.getAd() : {},
                        i = "function" == typeof a.getMediaUrl ? a.getMediaUrl() : r.mediaUrl, n = e.ima.settings || {},
                        o = {};
                    return i && (o.ad_asset_url = i), n.adTagUrl && (o.ad_tag_url = n.adTagUrl), o
                }, r = void 0, a = void 0, i = void 0, n = void 0, o = void 0, s = void 0;
                try {
                    var u = window.google.ima.AdEvent.Type;
                    r = u.LOADED, a = u.STARTED, i = u.COMPLETE, n = u.PAUSED, o = u.RESUMED, s = u.SKIPPED
                } catch (e) {
                    r = "loaded", a = "start", i = "complete", n = "pause", o = "resume", s = "skip"
                }
                var l = 0;
                e.mux.triggerAdRequest = function () {
                    l++, e.mux.emit("adrequest", t())
                }, e.on("adsready", function () {
                    var u = e.ima.addEventListener || function () {
                    };
                    u(r, function (r) {
                        var a = t(r);
                        l > 0 && (l--, e.mux.emit("adresponse", a)), e.mux.emit("adplay", a)
                    }), u(a, function (r) {
                        var a = t(r);
                        e.mux.emit("adplaying", a)
                    }), u(o, function (r) {
                        var a = t(r);
                        e.mux.emit("adplay", a), e.mux.emit("adplaying", a)
                    }), u(n, function (r) {
                        var a = t(r);
                        e.mux.emit("adpause", a)
                    }), u(i, function (r) {
                        var a = t(r);
                        e.mux.emit("adended", a)
                    }), u(s, function (r) {
                        var a = t(r);
                        e.mux.emit("adended", a)
                    }), e.on("adserror", function () {
                        l > 0 && (l--, e.mux.emit("adresponse")), e.mux.emit("aderror")
                    })
                })
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
        }, function (e, t, r) {
            "use strict";

            function a(e) {
                if ("string" != typeof e) return !1;
                var t = e.split(".").map(function (e) {
                    return parseInt(e)
                }), r = t[0], a = t[1];
                return r > 2 || 2 === r && a >= 3
            }

            function i(e) {
                var t = function () {
                    var t = e.ima3.currentAd, r = e.ima3.settings, a = {};
                    return t && (a.ad_asset_url = t.mediaUrl), r && (a.ad_tag_url = r.serverUrl), a
                };
                if (a(e.ima3.version)) {
                    var r = 0, i = function () {
                        r > 0 && (r--, e.mux.emit("adresponse", t()))
                    };
                    e.on("ads-request", function () {
                        r++, e.mux.emit("adrequest", t())
                    }), e.on("ads-load", function () {
                        i(), e.mux.emit("adplay", t())
                    }), e.on("adserror", function () {
                        i(), e.mux.emit("aderror")
                    }), e.on("ads-play", function () {
                        e.mux.emit("adplay", t())
                    }), e.on("ads-pause", function () {
                        e.mux.emit("adpause", t())
                    }), e.on("ads-ad-ended", function () {
                        e.mux.emit("adended", t())
                    })
                }
                e.ima3.ready(function () {
                    if (e.ima3.adPlayer) {
                        a(e.ima3.version) || (e.ima3.adPlayer.on("play", function () {
                            e.mux.emit("adplay")
                        }), e.ima3.adPlayer.on("pause", function () {
                            e.mux.emit("adpause")
                        }), e.ima3.adPlayer.on("ended", function () {
                            e.mux.emit("adended")
                        }));
                        var r = ["pause", "ended", "adserror"], i = ["play"];
                        (0, o.default)(e, e.ima3.adPlayer, r, i, t)
                    } else e.mux.log("Legacy IMA3 plugin found, ad events may not track correctly."), e.on("ads-ad-started", function () {
                        e.mux.emit("adplaying", t())
                    }), e.on("ads-play", function () {
                        e.mux.emit("adplaying", t())
                    })
                })
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.brightcoveImaAdsEventsSupported = a, t.default = i;
            var n = r(1), o = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(n)
        }, function (e, t, r) {
            "use strict";

            function a(e) {
                var t = function (t) {
                    var r = e.FreeWheelPlugin, a = {};
                    switch (t) {
                        case"adplay":
                        case"adplaying":
                        case"adpause":
                            a.ad_asset_url = e.currentSrc()
                    }
                    return r && (a.ad_tag_url = "html5" === r.tech.toLowerCase() ? r.settings.Html5.serverUrl : r.settings.Flash.serverUrl), a
                };
                e.on("ads-request", function () {
                    e.mux.emit("adrequest", t("adrequest"))
                }), e.on("ads-load", function () {
                    e.mux.emit("adresponse", t("adresponse"))
                }), e.on("adserror", function () {
                    e.mux.emit("aderror")
                }), e.on("ads-ad-started", function () {
                    e.mux.emit("adplay", t("adplay")), e.mux.emit("adplaying", t("adplaying"))
                }), e.on("ads-play", function () {
                    e.mux.emit("adplay", t("adplay")), e.mux.emit("adplaying", t("adplaying"))
                }), e.on("ads-pause", function () {
                    e.mux.emit("adpause", t("adpause"))
                }), e.on("ads-ad-ended", function () {
                    e.mux.emit("adended", t("adended"))
                }), e.on("adend", function () {
                    e.mux.emit("play")
                })
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
        }, function (e, t, r) {
            "use strict";

            function a(e) {
                var t = ["onceux-linearad-pause", "onceux-linearad-skipped", "onceux-linearad-complete", "adserror"],
                    r = ["adstart", "onceux-linearad-resume"];
                (0, n.default)(e, e, t, r), e.on("adstart", function () {
                    e.mux.emit("adplay")
                }), e.on("onceux-linearad-start", function (t) {
                    t.linearAd && t.linearAd.index > 0 && (e.mux.emit("adplay"), e.mux.emit("adplaying"))
                }), e.on("onceux-linearad-resume", function () {
                    e.mux.emit("adplay")
                }), e.on("onceux-linearad-pause", function () {
                    e.mux.emit("adpause")
                }), e.on("onceux-linearad-complete", function () {
                    e.mux.emit("adended")
                }), e.on("onceux-linearad-skipped", function () {
                    e.mux.emit("adended")
                })
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
            var i = r(1), n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(i)
        }, function (e, t, r) {
            "use strict";

            function a(e) {
                if (!o && "function" == typeof e.getTech) {
                    for (var t = e.getTech("Html5") || {}, r = t.sourceHandlers, a = 0; a < r.length; a++) !function (t) {
                        var a = r[t], i = a.handleSource;
                        a.handleSource = function (t, r) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = i(t, r, a);
                            if (o && "function" == typeof o.xhr) try {
                                (0, n.default)(e(o.player_.el_.parentNode.id), o.xhr)
                            } catch (e) {
                            }
                            return o
                        }
                    }(a);
                    o = !0
                }
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
            var i = r(11), n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(i), o = !1
        }, function (e, t, r) {
            "use strict";

            function a(e, t) {
                var r = function (t, r, a) {
                    var i = (0, n.default)(e, t, r);
                    return function () {
                        try {
                            i()
                        } catch (e) {
                        }
                        try {
                            a()
                        } catch (e) {
                        }
                    }
                }, a = function (e) {
                    return function (t) {
                        var a = Date.now();
                        try {
                            e(t)
                        } catch (e) {
                        }
                        try {
                            t.onreadystatechange = r(t, a, t.onreadystatechange || function () {
                            })
                        } catch (e) {
                        }
                    }
                };
                t.beforeRequest = function (e) {
                    return function (t) {
                        var r = e(t);
                        return r.beforeSend = a(r.beforeSend || function () {
                        }), r
                    }
                }(t.beforeRequest || function (e) {
                    return e
                })
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
            var i = r(12), n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(i)
        }, function (e, t, r) {
            "use strict";

            function a(e, t, r) {
                var a = e.mux.utils.extractHostnameAndDomain, n = e.mux.utils.headersStringToObject, o = function (e) {
                    var t = e["content-type"];
                    return t ? t.match(/^audio\/mpegurl/i) ? "manifest" : t.match(/^audio.*/i) ? "audio" : t.match(/^video.*/) ? "video" : t.match(/^application\/x-mpegurl/i) ? "manifest" : t.match(/^application\/vnd.apple.mpegurl/i) ? "manifest" : t.match(/^application\/dash+xml/i) ? "manifest" : "unknown" : "unknown"
                }, s = 0;
                return function () {
                    var u = t.readyState;
                    if (u >= 2) {
                        if (s = s || Date.now(), 4 !== u) return;
                        if (t.status >= 200 && t.status < 300) {
                            var l = Date.now(),
                                d = "arraybuffer" === t.responseType ? t.response.byteLength : t.responseText.length,
                                c = a(t.responseURL), f = i(c, 1), p = f[0],
                                h = n(t.getAllResponseHeaders ? t.getAllResponseHeaders() : ""), _ = o(h), m = {
                                    request_start: r,
                                    request_response_start: s,
                                    request_response_end: l,
                                    request_bytes_loaded: d,
                                    request_hostname: p,
                                    request_response_headers: h,
                                    request_type: _
                                };
                            e.mux.emit("requestcompleted", m)
                        } else e.mux.emit("requestfailed")
                    }
                }
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    var r = [], a = !0, i = !1, n = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0) ;
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !a && s.return && s.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return r
                }

                return function (t, r) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, r);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
            t.default = a
        }])
    });
})();