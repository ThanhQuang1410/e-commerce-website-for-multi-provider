<!--Zalo Social SDK -->
try {
    !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? e() : "object" == typeof exports ? exports.ZaloSocialSDK = e() : t.ZaloSocialSDK = e()
    }(this, function() {
        return function(t) {
            function e(i) {
                if (n[i])
                    return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(r.exports, r, r.exports, e),
                    r.l = !0,
                    r.exports
            }
            var n = {};
            return e.m = t,
                e.c = n,
                e.d = function(t, n, i) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                            return t.default
                        }
                        : function() {
                            return t
                        }
                    ;
                    return e.d(n, "a", n),
                        n
                }
                ,
                e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                e.p = "./",
                e(e.s = 43)
        }([function(t, e, n) {
            var i = n(31)("wks")
                , r = n(32)
                , o = n(2).Symbol
                , a = "function" == typeof o;
            (t.exports = function(t) {
                    return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
                }
            ).store = i
        }
            , function(t, e, n) {
                t.exports = {
                    default: n(80),
                    __esModule: !0
                }
            }
            , function(t, e) {
                var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = n)
            }
            , function(t, e) {
                var n = t.exports = {
                    version: "2.4.0"
                };
                "number" == typeof __e && (__e = n)
            }
            , function(t, e, n) {
                var i = n(5)
                    , r = n(21);
                t.exports = n(7) ? function(t, e, n) {
                        return i.f(t, e, r(1, n))
                    }
                    : function(t, e, n) {
                        return t[e] = n,
                            t
                    }
            }
            , function(t, e, n) {
                var i = n(6)
                    , r = n(49)
                    , o = n(50)
                    , a = Object.defineProperty;
                e.f = n(7) ? Object.defineProperty : function(t, e, n) {
                    if (i(t),
                            e = o(e, !0),
                            i(n),
                            r)
                        try {
                            return a(t, e, n)
                        } catch (t) {}
                    if ("get"in n || "set"in n)
                        throw TypeError("Accessors not supported!");
                    return "value"in n && (t[e] = n.value),
                        t
                }
            }
            , function(t, e, n) {
                var i = n(12);
                t.exports = function(t) {
                    if (!i(t))
                        throw TypeError(t + " is not an object!");
                    return t
                }
            }
            , function(t, e, n) {
                t.exports = !n(19)(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }
            , function(t, e, n) {
                var i = n(2)
                    , r = n(3)
                    , o = n(9)
                    , a = n(4)
                    , s = function(t, e, n) {
                    var l, u, h, c = t & s.F, f = t & s.G, d = t & s.S, p = t & s.P, m = t & s.B, g = t & s.W, y = f ? r : r[e] || (r[e] = {}), v = y.prototype, w = f ? i : d ? i[e] : (i[e] || {}).prototype;
                    f && (n = e);
                    for (l in n)
                        (u = !c && w && void 0 !== w[l]) && l in y || (h = u ? w[l] : n[l],
                            y[l] = f && "function" != typeof w[l] ? n[l] : m && u ? o(h, i) : g && w[l] == h ? function(t) {
                                var e = function(e, n, i) {
                                    if (this instanceof t) {
                                        switch (arguments.length) {
                                            case 0:
                                                return new t;
                                            case 1:
                                                return new t(e);
                                            case 2:
                                                return new t(e,n)
                                        }
                                        return new t(e,n,i)
                                    }
                                    return t.apply(this, arguments)
                                };
                                return e.prototype = t.prototype,
                                    e
                            }(h) : p && "function" == typeof h ? o(Function.call, h) : h,
                        p && ((y.virtual || (y.virtual = {}))[l] = h,
                        t & s.R && v && !v[l] && a(v, l, h)))
                };
                s.F = 1,
                    s.G = 2,
                    s.S = 4,
                    s.P = 8,
                    s.B = 16,
                    s.W = 32,
                    s.U = 64,
                    s.R = 128,
                    t.exports = s
            }
            , function(t, e, n) {
                var i = n(18);
                t.exports = function(t, e, n) {
                    if (i(t),
                        void 0 === e)
                        return t;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            }
                                ;
                        case 2:
                            return function(n, i) {
                                return t.call(e, n, i)
                            }
                                ;
                        case 3:
                            return function(n, i, r) {
                                return t.call(e, n, i, r)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            }
            , function(t, e) {
                t.exports = {}
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = n(84)
                    , l = i(s)
                    , u = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , h = function() {
                    function t() {
                        r(this, t)
                    }
                    return u(t, null, [{
                        key: "jsonToQueryString",
                        value: function(t) {
                            return "?" + (0,
                                l.default)(t).map(function(e) {
                                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                            }).join("&")
                        }
                    }]),
                        t
                }();
                e.default = h
            }
            , function(t, e) {
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            }
            , function(t, e) {
                var n = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return n.call(t, e)
                }
            }
            , function(t, e) {
                var n = {}.toString;
                t.exports = function(t) {
                    return n.call(t).slice(8, -1)
                }
            }
            , function(t, e, n) {
                "use strict";
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(1)
                    , o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r)
                    , a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    o.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , s = function() {
                    function t() {
                        i(this, t)
                    }
                    return a(t, null, [{
                        key: "isAndroid",
                        value: function() {
                            return !!/android/i.test(navigator.userAgent || navigator.vendor || window.opera)
                        }
                    }, {
                        key: "isIOS",
                        value: function() {
                            return !(!/iPad|iPhone|iPod/.test(navigator.userAgent || navigator.vendor || window.opera) || window.MSStream)
                        }
                    }, {
                        key: "isMobile",
                        value: function() {
                            var t = !1;
                            return function(e) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                            }(navigator.userAgent || navigator.vendor || window.opera),
                                t
                        }
                    }]),
                        t
                }();
                e.default = s
            }
            , function(t, e) {
                var n = Math.ceil
                    , i = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
                }
            }
            , function(t, e) {
                t.exports = function(t) {
                    if (void 0 == t)
                        throw TypeError("Can't call method on  " + t);
                    return t
                }
            }
            , function(t, e) {
                t.exports = function(t) {
                    if ("function" != typeof t)
                        throw TypeError(t + " is not a function!");
                    return t
                }
            }
            , function(t, e) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            }
            , function(t, e, n) {
                var i = n(12)
                    , r = n(2).document
                    , o = i(r) && i(r.createElement);
                t.exports = function(t) {
                    return o ? r.createElement(t) : {}
                }
            }
            , function(t, e) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            }
            , function(t, e, n) {
                var i = n(56)
                    , r = n(17);
                t.exports = function(t) {
                    return i(r(t))
                }
            }
            , function(t, e, n) {
                var i = n(16)
                    , r = Math.min;
                t.exports = function(t) {
                    return t > 0 ? r(i(t), 9007199254740991) : 0
                }
            }
            , function(t, e, n) {
                var i = n(31)("keys")
                    , r = n(32);
                t.exports = function(t) {
                    return i[t] || (i[t] = r(t))
                }
            }
            , function(t, e, n) {
                var i = n(5).f
                    , r = n(13)
                    , o = n(0)("toStringTag");
                t.exports = function(t, e, n) {
                    t && !r(t = n ? t : t.prototype, o) && i(t, o, {
                        configurable: !0,
                        value: e
                    })
                }
            }
            , function(t, e, n) {
                var i = n(17);
                t.exports = function(t) {
                    return Object(i(t))
                }
            }
            , function(t, e, n) {
                "use strict";
                var i = n(48)(!0);
                n(28)(String, "String", function(t) {
                    this._t = String(t),
                        this._i = 0
                }, function() {
                    var t, e = this._t, n = this._i;
                    return n >= e.length ? {
                        value: void 0,
                        done: !0
                    } : (t = i(e, n),
                        this._i += t.length,
                        {
                            value: t,
                            done: !1
                        })
                })
            }
            , function(t, e, n) {
                "use strict";
                var i = n(29)
                    , r = n(8)
                    , o = n(51)
                    , a = n(4)
                    , s = n(13)
                    , l = n(10)
                    , u = n(52)
                    , h = n(25)
                    , c = n(59)
                    , f = n(0)("iterator")
                    , d = !([].keys && "next"in [].keys())
                    , p = function() {
                    return this
                };
                t.exports = function(t, e, n, m, g, y, v) {
                    u(n, e, m);
                    var w, x, b, _ = function(t) {
                        if (!d && t in E)
                            return E[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this,t)
                                }
                        }
                        return function() {
                            return new n(this,t)
                        }
                    }, B = e + " Iterator", T = "values" == g, k = !1, E = t.prototype, R = E[f] || E["@@iterator"] || g && E[g], A = R || _(g), C = g ? T ? _("entries") : A : void 0, S = "Array" == e ? E.entries || R : R;
                    if (S && (b = c(S.call(new t))) !== Object.prototype && (h(b, B, !0),
                        i || s(b, f) || a(b, f, p)),
                        T && R && "values" !== R.name && (k = !0,
                                A = function() {
                                    return R.call(this)
                                }
                        ),
                        i && !v || !d && !k && E[f] || a(E, f, A),
                            l[e] = A,
                            l[B] = p,
                            g)
                        if (w = {
                                values: T ? A : _("values"),
                                keys: y ? A : _("keys"),
                                entries: C
                            },
                                v)
                            for (x in w)
                                x in E || o(E, x, w[x]);
                        else
                            r(r.P + r.F * (d || k), e, w);
                    return w
                }
            }
            , function(t, e) {
                t.exports = !0
            }
            , function(t, e, n) {
                var i = n(55)
                    , r = n(33);
                t.exports = Object.keys || function(t) {
                    return i(t, r)
                }
            }
            , function(t, e, n) {
                var i = n(2)
                    , r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
                t.exports = function(t) {
                    return r[t] || (r[t] = {})
                }
            }
            , function(t, e) {
                var n = 0
                    , i = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
                }
            }
            , function(t, e) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }
            , function(t, e, n) {
                t.exports = n(2).document && document.documentElement
            }
            , function(t, e, n) {
                var i = n(14)
                    , r = n(0)("toStringTag")
                    , o = "Arguments" == i(function() {
                    return arguments
                }())
                    , a = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                };
                t.exports = function(t) {
                    var e, n, s;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = a(e = Object(t), r)) ? n : o ? i(e) : "Object" == (s = i(e)) && "function" == typeof e.callee ? "Arguments" : s
                }
            }
            , function(t, e, n) {
                var i = n(6);
                t.exports = function(t, e, n, r) {
                    try {
                        return r ? e(i(n)[0], n[1]) : e(n)
                    } catch (e) {
                        var o = t.return;
                        throw void 0 !== o && i(o.call(t)),
                            e
                    }
                }
            }
            , function(t, e, n) {
                var i = n(10)
                    , r = n(0)("iterator")
                    , o = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (i.Array === t || o[r] === t)
                }
            }
            , function(t, e, n) {
                var i = n(35)
                    , r = n(0)("iterator")
                    , o = n(10);
                t.exports = n(3).getIteratorMethod = function(t) {
                    if (void 0 != t)
                        return t[r] || t["@@iterator"] || o[i(t)]
                }
            }
            , function(t, e, n) {
                var i, r, o, a = n(9), s = n(68), l = n(34), u = n(20), h = n(2), c = h.process, f = h.setImmediate, d = h.clearImmediate, p = h.MessageChannel, m = 0, g = {}, y = function() {
                    var t = +this;
                    if (g.hasOwnProperty(t)) {
                        var e = g[t];
                        delete g[t],
                            e()
                    }
                }, v = function(t) {
                    y.call(t.data)
                };
                f && d || (f = function(t) {
                        for (var e = [], n = 1; arguments.length > n; )
                            e.push(arguments[n++]);
                        return g[++m] = function() {
                            s("function" == typeof t ? t : Function(t), e)
                        }
                            ,
                            i(m),
                            m
                    }
                        ,
                        d = function(t) {
                            delete g[t]
                        }
                        ,
                        "process" == n(14)(c) ? i = function(t) {
                                c.nextTick(a(y, t, 1))
                            }
                            : p ? (r = new p,
                                o = r.port2,
                                r.port1.onmessage = v,
                                i = a(o.postMessage, o, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (i = function(t) {
                                h.postMessage(t + "", "*")
                            }
                                ,
                                h.addEventListener("message", v, !1)) : i = "onreadystatechange"in u("script") ? function(t) {
                                l.appendChild(u("script")).onreadystatechange = function() {
                                    l.removeChild(this),
                                        y.call(t)
                                }
                            }
                            : function(t) {
                                setTimeout(a(y, t, 1), 0)
                            }
                ),
                    t.exports = {
                        set: f,
                        clear: d
                    }
            }
            , function(t, e, n) {
                var i = n(0)("iterator")
                    , r = !1;
                try {
                    var o = [7][i]();
                    o.return = function() {
                        r = !0
                    }
                        ,
                        Array.from(o, function() {
                            throw 2
                        })
                } catch (t) {}
                t.exports = function(t, e) {
                    if (!e && !r)
                        return !1;
                    var n = !1;
                    try {
                        var o = [7]
                            , a = o[i]();
                        a.next = function() {
                            return {
                                done: n = !0
                            }
                        }
                            ,
                            o[i] = function() {
                                return a
                            }
                            ,
                            t(o)
                    } catch (t) {}
                    return n
                }
            }
            , function(t, e, n) {
                t.exports = {
                    default: n(82),
                    __esModule: !0
                }
            }
            , function(t, e) {
                var n;
                n = function() {
                    return this
                }();
                try {
                    n = n || Function("return this")() || (0,
                        eval)("this")
                } catch (t) {
                    "object" == typeof window && (n = window)
                }
                t.exports = n
            }
            , function(t, e, n) {
                t.exports = n(44)
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r() {
                    g.init()
                }
                function o() {
                    y && clearInterval(y),
                        g.reload()
                }
                function a() {
                    g.openChatWidget()
                }
                function s() {
                    g.closeChatWidget()
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var l = n(45)
                    , u = i(l)
                    , h = n(72)
                    , c = i(h);
                e.init = r,
                    e.reload = o,
                    e.openChatWidget = a,
                    e.closeChatWidget = s;
                var f = n(75)
                    , d = i(f)
                    , p = n(100)
                    , m = i(p)
                    , g = new d.default;
                g.init();
                var y = void 0;
                !function(t) {
                    return function() {
                        var e = t.apply(this, arguments);
                        return new u.default(function(t, n) {
                                function i(r, o) {
                                    try {
                                        var a = e[r](o)
                                            , s = a.value
                                    } catch (t) {
                                        return void n(t)
                                    }
                                    if (!a.done)
                                        return u.default.resolve(s).then(function(t) {
                                            i("next", t)
                                        }, function(t) {
                                            i("throw", t)
                                        });
                                    t(s)
                                }
                                return i("next")
                            }
                        )
                    }
                }(c.default.mark(function t() {
                    return c.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                                case 0:
                                    y = setInterval(function() {
                                        g.retry()
                                    }, 1e3),
                                        setTimeout(function() {
                                            y && clearInterval(y)
                                        }, 5e3);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                    }, t, this)
                }))(),
                "news.zing.vn" != window.location.hostname && function() {
                    try {
                        if (window.self == window.top) {
                            var t = document.createElement("div");
                            if (t.id = "app",
                                    t.className = "zs",
                                    document.body.appendChild(t),
                                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                                ;
                            else {
                                var e = window.location.hostname;
                                "news.zing.vn" !== e && "mp3.zing.vn" !== e || setTimeout(function() {
                                    m.default.loadFile("https://stc.sp.zdn.vn/chatbutton/main-1.2.2.js", "js"),
                                        m.default.loadFile("https://stc.sp.zdn.vn/chatbutton/main.142b31d74cee2e25afe3651f0591f9f4.css", "css")
                                }, 100)
                            }
                        }
                    } catch (t) {
                        console.log("")
                    }
                }()
            }
            , function(t, e, n) {
                t.exports = {
                    default: n(46),
                    __esModule: !0
                }
            }
            , function(t, e, n) {
                n(47),
                    n(27),
                    n(60),
                    n(64),
                    t.exports = n(3).Promise
            }
            , function(t, e) {}
            , function(t, e, n) {
                var i = n(16)
                    , r = n(17);
                t.exports = function(t) {
                    return function(e, n) {
                        var o, a, s = String(r(e)), l = i(n), u = s.length;
                        return l < 0 || l >= u ? t ? "" : void 0 : (o = s.charCodeAt(l),
                            o < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536)
                    }
                }
            }
            , function(t, e, n) {
                t.exports = !n(7) && !n(19)(function() {
                    return 7 != Object.defineProperty(n(20)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }
            , function(t, e, n) {
                var i = n(12);
                t.exports = function(t, e) {
                    if (!i(t))
                        return t;
                    var n, r;
                    if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
                        return r;
                    if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t)))
                        return r;
                    if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
                        return r;
                    throw TypeError("Can't convert object to primitive value")
                }
            }
            , function(t, e, n) {
                t.exports = n(4)
            }
            , function(t, e, n) {
                "use strict";
                var i = n(53)
                    , r = n(21)
                    , o = n(25)
                    , a = {};
                n(4)(a, n(0)("iterator"), function() {
                    return this
                }),
                    t.exports = function(t, e, n) {
                        t.prototype = i(a, {
                            next: r(1, n)
                        }),
                            o(t, e + " Iterator")
                    }
            }
            , function(t, e, n) {
                var i = n(6)
                    , r = n(54)
                    , o = n(33)
                    , a = n(24)("IE_PROTO")
                    , s = function() {}
                    , l = function() {
                    var t, e = n(20)("iframe"), i = o.length;
                    for (e.style.display = "none",
                             n(34).appendChild(e),
                             e.src = "javascript:",
                             t = e.contentWindow.document,
                             t.open(),
                             t.write("<script>document.F=Object<\/script>"),
                             t.close(),
                             l = t.F; i--; )
                        delete l.prototype[o[i]];
                    return l()
                };
                t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (s.prototype = i(t),
                        n = new s,
                        s.prototype = null,
                        n[a] = t) : n = l(),
                        void 0 === e ? n : r(n, e)
                }
            }
            , function(t, e, n) {
                var i = n(5)
                    , r = n(6)
                    , o = n(30);
                t.exports = n(7) ? Object.defineProperties : function(t, e) {
                    r(t);
                    for (var n, a = o(e), s = a.length, l = 0; s > l; )
                        i.f(t, n = a[l++], e[n]);
                    return t
                }
            }
            , function(t, e, n) {
                var i = n(13)
                    , r = n(22)
                    , o = n(57)(!1)
                    , a = n(24)("IE_PROTO");
                t.exports = function(t, e) {
                    var n, s = r(t), l = 0, u = [];
                    for (n in s)
                        n != a && i(s, n) && u.push(n);
                    for (; e.length > l; )
                        i(s, n = e[l++]) && (~o(u, n) || u.push(n));
                    return u
                }
            }
            , function(t, e, n) {
                var i = n(14);
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == i(t) ? t.split("") : Object(t)
                }
            }
            , function(t, e, n) {
                var i = n(22)
                    , r = n(23)
                    , o = n(58);
                t.exports = function(t) {
                    return function(e, n, a) {
                        var s, l = i(e), u = r(l.length), h = o(a, u);
                        if (t && n != n) {
                            for (; u > h; )
                                if ((s = l[h++]) != s)
                                    return !0
                        } else
                            for (; u > h; h++)
                                if ((t || h in l) && l[h] === n)
                                    return t || h || 0;
                        return !t && -1
                    }
                }
            }
            , function(t, e, n) {
                var i = n(16)
                    , r = Math.max
                    , o = Math.min;
                t.exports = function(t, e) {
                    return t = i(t),
                        t < 0 ? r(t + e, 0) : o(t, e)
                }
            }
            , function(t, e, n) {
                var i = n(13)
                    , r = n(26)
                    , o = n(24)("IE_PROTO")
                    , a = Object.prototype;
                t.exports = Object.getPrototypeOf || function(t) {
                    return t = r(t),
                        i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
                }
            }
            , function(t, e, n) {
                n(61);
                for (var i = n(2), r = n(4), o = n(10), a = n(0)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
                    var u = s[l]
                        , h = i[u]
                        , c = h && h.prototype;
                    c && !c[a] && r(c, a, u),
                        o[u] = o.Array
                }
            }
            , function(t, e, n) {
                "use strict";
                var i = n(62)
                    , r = n(63)
                    , o = n(10)
                    , a = n(22);
                t.exports = n(28)(Array, "Array", function(t, e) {
                    this._t = a(t),
                        this._i = 0,
                        this._k = e
                }, function() {
                    var t = this._t
                        , e = this._k
                        , n = this._i++;
                    return !t || n >= t.length ? (this._t = void 0,
                        r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
                }, "values"),
                    o.Arguments = o.Array,
                    i("keys"),
                    i("values"),
                    i("entries")
            }
            , function(t, e) {
                t.exports = function() {}
            }
            , function(t, e) {
                t.exports = function(t, e) {
                    return {
                        value: e,
                        done: !!t
                    }
                }
            }
            , function(t, e, n) {
                "use strict";
                var i, r, o, a = n(29), s = n(2), l = n(9), u = n(35), h = n(8), c = n(12), f = n(18), d = n(65), p = n(66), m = n(67), g = n(39).set, y = n(69)(), v = s.TypeError, w = s.process, x = s.Promise, w = s.process, b = "process" == u(w), _ = function() {}, B = !!function() {
                    try {
                        var t = x.resolve(1)
                            , e = (t.constructor = {})[n(0)("species")] = function(t) {
                                t(_, _)
                            }
                        ;
                        return (b || "function" == typeof PromiseRejectionEvent) && t.then(_)instanceof e
                    } catch (t) {}
                }(), T = function(t, e) {
                    return t === e || t === x && e === o
                }, k = function(t) {
                    var e;
                    return !(!c(t) || "function" != typeof (e = t.then)) && e
                }, E = function(t) {
                    return T(x, t) ? new R(t) : new r(t)
                }, R = r = function(t) {
                    var e, n;
                    this.promise = new t(function(t, i) {
                            if (void 0 !== e || void 0 !== n)
                                throw v("Bad Promise constructor");
                            e = t,
                                n = i
                        }
                    ),
                        this.resolve = f(e),
                        this.reject = f(n)
                }
                    , A = function(t) {
                    try {
                        t()
                    } catch (t) {
                        return {
                            error: t
                        }
                    }
                }, C = function(t, e) {
                    if (!t._n) {
                        t._n = !0;
                        var n = t._c;
                        y(function() {
                            for (var i = t._v, r = 1 == t._s, o = 0; n.length > o; )
                                !function(e) {
                                    var n, o, a = r ? e.ok : e.fail, s = e.resolve, l = e.reject, u = e.domain;
                                    try {
                                        a ? (r || (2 == t._h && P(t),
                                            t._h = 1),
                                            !0 === a ? n = i : (u && u.enter(),
                                                n = a(i),
                                            u && u.exit()),
                                            n === e.promise ? l(v("Promise-chain cycle")) : (o = k(n)) ? o.call(n, s, l) : s(n)) : l(i)
                                    } catch (t) {
                                        l(t)
                                    }
                                }(n[o++]);
                            t._c = [],
                                t._n = !1,
                            e && !t._h && S(t)
                        })
                    }
                }, S = function(t) {
                    g.call(s, function() {
                        var e, n, i, r = t._v;
                        if (I(t) && (e = A(function() {
                                b ? w.emit("unhandledRejection", r, t) : (n = s.onunhandledrejection) ? n({
                                    promise: t,
                                    reason: r
                                }) : (i = s.console) && i.error && i.error("Unhandled promise rejection", r)
                            }),
                                t._h = b || I(t) ? 2 : 1),
                                t._a = void 0,
                                e)
                            throw e.error
                    })
                }, I = function(t) {
                    if (1 == t._h)
                        return !1;
                    for (var e, n = t._a || t._c, i = 0; n.length > i; )
                        if (e = n[i++],
                            e.fail || !I(e.promise))
                            return !1;
                    return !0
                }, P = function(t) {
                    g.call(s, function() {
                        var e;
                        b ? w.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                            promise: t,
                            reason: t._v
                        })
                    })
                }, L = function(t) {
                    var e = this;
                    e._d || (e._d = !0,
                        e = e._w || e,
                        e._v = t,
                        e._s = 2,
                    e._a || (e._a = e._c.slice()),
                        C(e, !0))
                }, z = function(t) {
                    var e, n = this;
                    if (!n._d) {
                        n._d = !0,
                            n = n._w || n;
                        try {
                            if (n === t)
                                throw v("Promise can't be resolved itself");
                            (e = k(t)) ? y(function() {
                                var i = {
                                    _w: n,
                                    _d: !1
                                };
                                try {
                                    e.call(t, l(z, i, 1), l(L, i, 1))
                                } catch (t) {
                                    L.call(i, t)
                                }
                            }) : (n._v = t,
                                n._s = 1,
                                C(n, !1))
                        } catch (t) {
                            L.call({
                                _w: n,
                                _d: !1
                            }, t)
                        }
                    }
                };
                B || (x = function(t) {
                        d(this, x, "Promise", "_h"),
                            f(t),
                            i.call(this);
                        try {
                            t(l(z, this, 1), l(L, this, 1))
                        } catch (t) {
                            L.call(this, t)
                        }
                    }
                        ,
                        i = function(t) {
                            this._c = [],
                                this._a = void 0,
                                this._s = 0,
                                this._d = !1,
                                this._v = void 0,
                                this._h = 0,
                                this._n = !1
                        }
                        ,
                        i.prototype = n(70)(x.prototype, {
                            then: function(t, e) {
                                var n = E(m(this, x));
                                return n.ok = "function" != typeof t || t,
                                    n.fail = "function" == typeof e && e,
                                    n.domain = b ? w.domain : void 0,
                                    this._c.push(n),
                                this._a && this._a.push(n),
                                this._s && C(this, !1),
                                    n.promise
                            },
                            catch: function(t) {
                                return this.then(void 0, t)
                            }
                        }),
                        R = function() {
                            var t = new i;
                            this.promise = t,
                                this.resolve = l(z, t, 1),
                                this.reject = l(L, t, 1)
                        }
                ),
                    h(h.G + h.W + h.F * !B, {
                        Promise: x
                    }),
                    n(25)(x, "Promise"),
                    n(71)("Promise"),
                    o = n(3).Promise,
                    h(h.S + h.F * !B, "Promise", {
                        reject: function(t) {
                            var e = E(this);
                            return (0,
                                e.reject)(t),
                                e.promise
                        }
                    }),
                    h(h.S + h.F * (a || !B), "Promise", {
                        resolve: function(t) {
                            if (t instanceof x && T(t.constructor, this))
                                return t;
                            var e = E(this);
                            return (0,
                                e.resolve)(t),
                                e.promise
                        }
                    }),
                    h(h.S + h.F * !(B && n(40)(function(t) {
                        x.all(t).catch(_)
                    })), "Promise", {
                        all: function(t) {
                            var e = this
                                , n = E(e)
                                , i = n.resolve
                                , r = n.reject
                                , o = A(function() {
                                var n = []
                                    , o = 0
                                    , a = 1;
                                p(t, !1, function(t) {
                                    var s = o++
                                        , l = !1;
                                    n.push(void 0),
                                        a++,
                                        e.resolve(t).then(function(t) {
                                            l || (l = !0,
                                                n[s] = t,
                                            --a || i(n))
                                        }, r)
                                }),
                                --a || i(n)
                            });
                            return o && r(o.error),
                                n.promise
                        },
                        race: function(t) {
                            var e = this
                                , n = E(e)
                                , i = n.reject
                                , r = A(function() {
                                p(t, !1, function(t) {
                                    e.resolve(t).then(n.resolve, i)
                                })
                            });
                            return r && i(r.error),
                                n.promise
                        }
                    })
            }
            , function(t, e) {
                t.exports = function(t, e, n, i) {
                    if (!(t instanceof e) || void 0 !== i && i in t)
                        throw TypeError(n + ": incorrect invocation!");
                    return t
                }
            }
            , function(t, e, n) {
                var i = n(9)
                    , r = n(36)
                    , o = n(37)
                    , a = n(6)
                    , s = n(23)
                    , l = n(38)
                    , u = {}
                    , h = {}
                    , e = t.exports = function(t, e, n, c, f) {
                        var d, p, m, g, y = f ? function() {
                                return t
                            }
                            : l(t), v = i(n, c, e ? 2 : 1), w = 0;
                        if ("function" != typeof y)
                            throw TypeError(t + " is not iterable!");
                        if (o(y)) {
                            for (d = s(t.length); d > w; w++)
                                if ((g = e ? v(a(p = t[w])[0], p[1]) : v(t[w])) === u || g === h)
                                    return g
                        } else
                            for (m = y.call(t); !(p = m.next()).done; )
                                if ((g = r(m, v, p.value, e)) === u || g === h)
                                    return g
                    }
                ;
                e.BREAK = u,
                    e.RETURN = h
            }
            , function(t, e, n) {
                var i = n(6)
                    , r = n(18)
                    , o = n(0)("species");
                t.exports = function(t, e) {
                    var n, a = i(t).constructor;
                    return void 0 === a || void 0 == (n = i(a)[o]) ? e : r(n)
                }
            }
            , function(t, e) {
                t.exports = function(t, e, n) {
                    var i = void 0 === n;
                    switch (e.length) {
                        case 0:
                            return i ? t() : t.call(n);
                        case 1:
                            return i ? t(e[0]) : t.call(n, e[0]);
                        case 2:
                            return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                        case 3:
                            return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                        case 4:
                            return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
                    }
                    return t.apply(n, e)
                }
            }
            , function(t, e, n) {
                var i = n(2)
                    , r = n(39).set
                    , o = i.MutationObserver || i.WebKitMutationObserver
                    , a = i.process
                    , s = i.Promise
                    , l = "process" == n(14)(a);
                t.exports = function() {
                    var t, e, n, u = function() {
                        var i, r;
                        for (l && (i = a.domain) && i.exit(); t; ) {
                            r = t.fn,
                                t = t.next;
                            try {
                                r()
                            } catch (i) {
                                throw t ? n() : e = void 0,
                                    i
                            }
                        }
                        e = void 0,
                        i && i.enter()
                    };
                    if (l)
                        n = function() {
                            a.nextTick(u)
                        }
                        ;
                    else if (o) {
                        var h = !0
                            , c = document.createTextNode("");
                        new o(u).observe(c, {
                            characterData: !0
                        }),
                            n = function() {
                                c.data = h = !h
                            }
                    } else if (s && s.resolve) {
                        var f = s.resolve();
                        n = function() {
                            f.then(u)
                        }
                    } else
                        n = function() {
                            r.call(i, u)
                        }
                        ;
                    return function(i) {
                        var r = {
                            fn: i,
                            next: void 0
                        };
                        e && (e.next = r),
                        t || (t = r,
                            n()),
                            e = r
                    }
                }
            }
            , function(t, e, n) {
                var i = n(4);
                t.exports = function(t, e, n) {
                    for (var r in e)
                        n && t[r] ? t[r] = e[r] : i(t, r, e[r]);
                    return t
                }
            }
            , function(t, e, n) {
                "use strict";
                var i = n(2)
                    , r = n(3)
                    , o = n(5)
                    , a = n(7)
                    , s = n(0)("species");
                t.exports = function(t) {
                    var e = "function" == typeof r[t] ? r[t] : i[t];
                    a && e && !e[s] && o.f(e, s, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            }
            , function(t, e, n) {
                t.exports = n(73)
            }
            , function(t, e, n) {
                var i = function() {
                    return this
                }() || Function("return this")()
                    , r = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0
                    , o = r && i.regeneratorRuntime;
                if (i.regeneratorRuntime = void 0,
                        t.exports = n(74),
                        r)
                    i.regeneratorRuntime = o;
                else
                    try {
                        delete i.regeneratorRuntime
                    } catch (t) {
                        i.regeneratorRuntime = void 0
                    }
            }
            , function(t, e) {
                !function(e) {
                    "use strict";
                    function n(t, e, n, i) {
                        var o = e && e.prototype instanceof r ? e : r
                            , a = Object.create(o.prototype)
                            , s = new d(i || []);
                        return a._invoke = u(t, n, s),
                            a
                    }
                    function i(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    function r() {}
                    function o() {}
                    function a() {}
                    function s(t) {
                        ["next", "throw", "return"].forEach(function(e) {
                            t[e] = function(t) {
                                return this._invoke(e, t)
                            }
                        })
                    }
                    function l(t) {
                        function e(n, r, o, a) {
                            var s = i(t[n], t, r);
                            if ("throw" !== s.type) {
                                var l = s.arg
                                    , u = l.value;
                                return u && "object" == typeof u && v.call(u, "__await") ? Promise.resolve(u.__await).then(function(t) {
                                    e("next", t, o, a)
                                }, function(t) {
                                    e("throw", t, o, a)
                                }) : Promise.resolve(u).then(function(t) {
                                    l.value = t,
                                        o(l)
                                }, a)
                            }
                            a(s.arg)
                        }
                        function n(t, n) {
                            function i() {
                                return new Promise(function(i, r) {
                                        e(t, n, i, r)
                                    }
                                )
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                        var r;
                        this._invoke = n
                    }
                    function u(t, e, n) {
                        var r = k;
                        return function(o, a) {
                            if (r === R)
                                throw new Error("Generator is already running");
                            if (r === A) {
                                if ("throw" === o)
                                    throw a;
                                return m()
                            }
                            for (n.method = o,
                                     n.arg = a; ; ) {
                                var s = n.delegate;
                                if (s) {
                                    var l = h(s, n);
                                    if (l) {
                                        if (l === C)
                                            continue;
                                        return l
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === k)
                                        throw r = A,
                                            n.arg;
                                    n.dispatchException(n.arg)
                                } else
                                    "return" === n.method && n.abrupt("return", n.arg);
                                r = R;
                                var u = i(t, e, n);
                                if ("normal" === u.type) {
                                    if (r = n.done ? A : E,
                                        u.arg === C)
                                        continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (r = A,
                                    n.method = "throw",
                                    n.arg = u.arg)
                            }
                        }
                    }
                    function h(t, e) {
                        var n = t.iterator[e.method];
                        if (n === g) {
                            if (e.delegate = null,
                                "throw" === e.method) {
                                if (t.iterator.return && (e.method = "return",
                                        e.arg = g,
                                        h(t, e),
                                    "throw" === e.method))
                                    return C;
                                e.method = "throw",
                                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return C
                        }
                        var r = i(n, t.iterator, e.arg);
                        if ("throw" === r.type)
                            return e.method = "throw",
                                e.arg = r.arg,
                                e.delegate = null,
                                C;
                        var o = r.arg;
                        return o ? o.done ? (e[t.resultName] = o.value,
                            e.next = t.nextLoc,
                        "return" !== e.method && (e.method = "next",
                            e.arg = g),
                            e.delegate = null,
                            C) : o : (e.method = "throw",
                            e.arg = new TypeError("iterator result is not an object"),
                            e.delegate = null,
                            C)
                    }
                    function c(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]),
                        2 in t && (e.finallyLoc = t[2],
                            e.afterLoc = t[3]),
                            this.tryEntries.push(e)
                    }
                    function f(t) {
                        var e = t.completion || {};
                        e.type = "normal",
                            delete e.arg,
                            t.completion = e
                    }
                    function d(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                            t.forEach(c, this),
                            this.reset(!0)
                    }
                    function p(t) {
                        if (t) {
                            var e = t[x];
                            if (e)
                                return e.call(t);
                            if ("function" == typeof t.next)
                                return t;
                            if (!isNaN(t.length)) {
                                var n = -1
                                    , i = function e() {
                                    for (; ++n < t.length; )
                                        if (v.call(t, n))
                                            return e.value = t[n],
                                                e.done = !1,
                                                e;
                                    return e.value = g,
                                        e.done = !0,
                                        e
                                };
                                return i.next = i
                            }
                        }
                        return {
                            next: m
                        }
                    }
                    function m() {
                        return {
                            value: g,
                            done: !0
                        }
                    }
                    var g, y = Object.prototype, v = y.hasOwnProperty, w = "function" == typeof Symbol ? Symbol : {}, x = w.iterator || "@@iterator", b = w.asyncIterator || "@@asyncIterator", _ = w.toStringTag || "@@toStringTag", B = "object" == typeof t, T = e.regeneratorRuntime;
                    if (T)
                        return void (B && (t.exports = T));
                    T = e.regeneratorRuntime = B ? t.exports : {},
                        T.wrap = n;
                    var k = "suspendedStart"
                        , E = "suspendedYield"
                        , R = "executing"
                        , A = "completed"
                        , C = {}
                        , S = {};
                    S[x] = function() {
                        return this
                    }
                    ;
                    var I = Object.getPrototypeOf
                        , P = I && I(I(p([])));
                    P && P !== y && v.call(P, x) && (S = P);
                    var L = a.prototype = r.prototype = Object.create(S);
                    o.prototype = L.constructor = a,
                        a.constructor = o,
                        a[_] = o.displayName = "GeneratorFunction",
                        T.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === o || "GeneratorFunction" === (e.displayName || e.name))
                        }
                        ,
                        T.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a,
                            _ in t || (t[_] = "GeneratorFunction")),
                                t.prototype = Object.create(L),
                                t
                        }
                        ,
                        T.awrap = function(t) {
                            return {
                                __await: t
                            }
                        }
                        ,
                        s(l.prototype),
                        l.prototype[b] = function() {
                            return this
                        }
                        ,
                        T.AsyncIterator = l,
                        T.async = function(t, e, i, r) {
                            var o = new l(n(t, e, i, r));
                            return T.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                                return t.done ? t.value : o.next()
                            })
                        }
                        ,
                        s(L),
                        L[_] = "Generator",
                        L[x] = function() {
                            return this
                        }
                        ,
                        L.toString = function() {
                            return "[object Generator]"
                        }
                        ,
                        T.keys = function(t) {
                            var e = [];
                            for (var n in t)
                                e.push(n);
                            return e.reverse(),
                                function n() {
                                    for (; e.length; ) {
                                        var i = e.pop();
                                        if (i in t)
                                            return n.value = i,
                                                n.done = !1,
                                                n
                                    }
                                    return n.done = !0,
                                        n
                                }
                        }
                        ,
                        T.values = p,
                        d.prototype = {
                            constructor: d,
                            reset: function(t) {
                                if (this.prev = 0,
                                        this.next = 0,
                                        this.sent = this._sent = g,
                                        this.done = !1,
                                        this.delegate = null,
                                        this.method = "next",
                                        this.arg = g,
                                        this.tryEntries.forEach(f),
                                        !t)
                                    for (var e in this)
                                        "t" === e.charAt(0) && v.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = g)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0]
                                    , e = t.completion;
                                if ("throw" === e.type)
                                    throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                function e(e, i) {
                                    return o.type = "throw",
                                        o.arg = t,
                                        n.next = e,
                                    i && (n.method = "next",
                                        n.arg = g),
                                        !!i
                                }
                                if (this.done)
                                    throw t;
                                for (var n = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var r = this.tryEntries[i]
                                        , o = r.completion;
                                    if ("root" === r.tryLoc)
                                        return e("end");
                                    if (r.tryLoc <= this.prev) {
                                        var a = v.call(r, "catchLoc")
                                            , s = v.call(r, "finallyLoc");
                                        if (a && s) {
                                            if (this.prev < r.catchLoc)
                                                return e(r.catchLoc, !0);
                                            if (this.prev < r.finallyLoc)
                                                return e(r.finallyLoc)
                                        } else if (a) {
                                            if (this.prev < r.catchLoc)
                                                return e(r.catchLoc, !0)
                                        } else {
                                            if (!s)
                                                throw new Error("try statement without catch or finally");
                                            if (this.prev < r.finallyLoc)
                                                return e(r.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n];
                                    if (i.tryLoc <= this.prev && v.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var r = i;
                                        break
                                    }
                                }
                                r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                                var o = r ? r.completion : {};
                                return o.type = t,
                                    o.arg = e,
                                    r ? (this.method = "next",
                                        this.next = r.finallyLoc,
                                        C) : this.complete(o)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type)
                                    throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                                    C
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t)
                                        return this.complete(n.completion, n.afterLoc),
                                            f(n),
                                            C
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var i = n.completion;
                                        if ("throw" === i.type) {
                                            var r = i.arg;
                                            f(n)
                                        }
                                        return r
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, n) {
                                return this.delegate = {
                                    iterator: p(t),
                                    resultName: e,
                                    nextLoc: n
                                },
                                "next" === this.method && (this.arg = g),
                                    C
                            }
                        }
                }(function() {
                    return this
                }() || Function("return this")())
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++)
                            n[e] = t[e];
                        return n
                    }
                    return (0,
                        s.default)(t)
                }
                function o(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var a = n(76)
                    , s = i(a)
                    , l = n(1)
                    , u = i(l)
                    , h = n(41)
                    , c = i(h)
                    , f = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    u.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , d = n(83)
                    , p = i(d)
                    , m = n(88)
                    , g = i(m)
                    , y = n(96)
                    , v = i(y)
                    , w = n(97)
                    , x = i(w)
                    , b = n(98)
                    , _ = i(b)
                    , B = n(99)
                    , T = i(B)
                    , k = function() {
                    function t() {
                        o(this, t),
                            this.shareButtons = [],
                            this.followButton = [],
                            this.followButtonOnly = [],
                            this.chatwidget = null,
                            this.mapShareButton = {},
                            this.zShareTimer = null,
                            this.commentIFrame = null,
                            this.socialPlugins = {},
                            this.receiveMessage = this.receiveMessage.bind(this),
                            this.reloadSocial = this.reloadSocial.bind(this),
                            window.addEventListener("message", this.receiveMessage, !0),
                            window.addEventListener("focus", this.reloadSocial, !1)
                    }
                    return f(t, [{
                        key: "reloadSocial",
                        value: function() {
                            this.shareButtons.map(function(t) {
                                t.closeInline(),
                                    t.reload()
                            })
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            if (console.log("Zalo Social Plugin is loaded successfully"),
                                    this.socialPlugins = this.findAllSocialPluginDiv(),
                                this.socialPlugins.share && this.socialPlugins.share.map(function(e) {
                                    var n = T.default.create()
                                        , i = new g.default(e,n,t);
                                    i.render(),
                                        t.mapShareButton[n] = i,
                                        t.shareButtons.push(i)
                                }),
                                this.socialPlugins.follow && this.socialPlugins.follow.map(function(e) {
                                    var n = T.default.create()
                                        , i = new v.default(e,n);
                                    i.render(),
                                        t.followButton.push(i)
                                }),
                                this.socialPlugins.followonly && this.socialPlugins.followonly.map(function(e) {
                                    var n = T.default.create()
                                        , i = new x.default(e,n);
                                    i.render(),
                                        t.followButtonOnly.push(i)
                                }),
                                    this.socialPlugins.comment) {
                                var e = new _.default(this.socialPlugins.comment);
                                e.render(),
                                    this.commentIFrame = e
                            }
                            if (this.socialPlugins.chatwidget) {
                                var n = T.default.create()
                                    , i = new p.default(this.socialPlugins.chatwidget,n);
                                i.render(),
                                    this.chatwidget = i
                            }
                        }
                    }, {
                        key: "receiveMessage",
                        value: function(t) {
                            if (t.data)
                                switch (t.data.cmd) {
                                    case "zsdk_newtab":
                                        this.openInNewTab(t.data.url);
                                        break;
                                    case "zsdk_popup":
                                        this.openInPopup(t.data.url, t.data.title, t.data.width, t.data.height);
                                        break;
                                    case "zsdk_redirect":
                                        this.redirect(t.data.url);
                                        break;
                                    case "zsdk_button_click":
                                        this.mapShareButton[t.data.id].onButtonClick();
                                        break;
                                    case "zsdk_update_share_data":
                                        this.mapShareButton[t.data.id].setData(t.data.data);
                                        break;
                                    case "zsdk_resize_parent":
                                        this.resizeParent(t.data.height);
                                        break;
                                    case "zsdk_get_top_body_parent":
                                        this.getTopParentBody();
                                        break;
                                    case "zsdk_excute_recaptcha":
                                        this.executeRecaptcha(t.data)
                                }
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.shareButtons.map(function(t) {
                                t.destroy()
                            }),
                                this.shareButtons = [],
                                this.followButton = [],
                                this.followButtonOnly = [],
                            null != this.chatwidget && this.chatwidget.destroy(),
                                this.chatwidget = null,
                            null != this.commentIFrame && this.commentIFrame.destroy(),
                                this.commentIFrame = null,
                                this.init()
                        }
                    }, {
                        key: "retry",
                        value: function() {
                            var t = {
                                share: [],
                                follow: [],
                                followonly: []
                            };
                            t.share = [].concat(r(document.getElementsByClassName("zalo-share-button"))),
                                t.follow = [].concat(r(document.getElementsByClassName("zalo-follow-button"))),
                                t.followonly = [].concat(r(document.getElementsByClassName("zalo-follow-only-button"))),
                                t.comment = document.getElementsByClassName("zalo-comment-plugin")[0],
                                t.chatwidget = document.getElementsByClassName("zalo-chat-widget")[0],
                            (0,
                                c.default)(t) != (0,
                                c.default)(this.socialPlugins) && this.reload()
                        }
                    }, {
                        key: "findAllSocialPluginDiv",
                        value: function() {
                            var t = {
                                share: [],
                                follow: [],
                                followonly: []
                            };
                            if (t.share = [].concat(r(document.getElementsByClassName("zalo-share-button"))),
                                    t.follow = [].concat(r(document.getElementsByClassName("zalo-follow-button"))),
                                    t.followonly = [].concat(r(document.getElementsByClassName("zalo-follow-only-button"))),
                                    t.comment = document.getElementsByClassName("zalo-comment-plugin")[0],
                                    t.chatwidget = document.getElementsByClassName("zalo-chat-widget")[0],
                                    t.share)
                                return t
                        }
                    }, {
                        key: "redirect",
                        value: function(t) {
                            window.location.href = t
                        }
                    }, {
                        key: "openInNewTab",
                        value: function(t) {
                            var e = this
                                , n = window.open(t, "_blank");
                            n.focus(),
                            null != this.zShareTimer && clearInterval(this.zShareTimer),
                                this.zShareTimer = setInterval(function() {
                                    n.closed && (clearInterval(e.zShareTimer),
                                        e.zShareTimer = null,
                                        e.shareButtons.map(function(t) {
                                            t.reload()
                                        }))
                                }, 1e3)
                        }
                    }, {
                        key: "openInPopup",
                        value: function(t, e, n, i) {
                            var r = this
                                , o = this.popupCenter(t, e, n, i);
                            null != this.zShareTimer && clearInterval(this.zShareTimer),
                                this.zShareTimer = setInterval(function() {
                                    o.closed && (clearInterval(r.zShareTimer),
                                        r.zShareTimer = null,
                                        r.shareButtons.map(function(t) {
                                            t.reload()
                                        }),
                                        r.followButton.map(function(t) {
                                            t.reload()
                                        }),
                                        r.followButtonOnly.map(function(t) {
                                            t.reload()
                                        }),
                                        r.commentIFrame.reload())
                                }, 1e3)
                        }
                    }, {
                        key: "executeRecaptcha",
                        value: function(t) {
                            switch (t.typeIframe) {
                                case "chat_oa_widget":
                                    break;
                                case "comment_iframe":
                                    GLOBAL_IFRAME = this.commentIFrame.getIframe
                            }
                            grecaptcha.execute(GLOBAL_ID_RECAPTCHA)
                        }
                    }, {
                        key: "popupCenter",
                        value: function(t, e, n, i) {
                            var r = void 0 != window.screenLeft ? window.screenLeft : screen.left
                                , o = void 0 != window.screenTop ? window.screenTop : screen.top
                                , a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
                                , s = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
                                , l = a / 2 - n / 2 + r
                                , u = s / 2 - i / 2 + o
                                , h = window.open(t, e, "directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=" + n + ", height=" + i + ", top=" + u + ", left=" + l);
                            return window.focus && h.focus(),
                                h
                        }
                    }, {
                        key: "resizeParent",
                        value: function(t) {
                            this.commentIFrame.resizeParent(t)
                        }
                    }, {
                        key: "getTopParentBody",
                        value: function() {
                            this.commentIFrame.getTopParentBody()
                        }
                    }, {
                        key: "openChatWidget",
                        value: function() {
                            this.chatwidget.openChatWidget()
                        }
                    }, {
                        key: "closeChatWidget",
                        value: function() {
                            this.chatwidget.closeChatWidget()
                        }
                    }]),
                        t
                }();
                e.default = k
            }
            , function(t, e, n) {
                t.exports = {
                    default: n(77),
                    __esModule: !0
                }
            }
            , function(t, e, n) {
                n(27),
                    n(78),
                    t.exports = n(3).Array.from
            }
            , function(t, e, n) {
                "use strict";
                var i = n(9)
                    , r = n(8)
                    , o = n(26)
                    , a = n(36)
                    , s = n(37)
                    , l = n(23)
                    , u = n(79)
                    , h = n(38);
                r(r.S + r.F * !n(40)(function(t) {
                    Array.from(t)
                }), "Array", {
                    from: function(t) {
                        var e, n, r, c, f = o(t), d = "function" == typeof this ? this : Array, p = arguments.length, m = p > 1 ? arguments[1] : void 0, g = void 0 !== m, y = 0, v = h(f);
                        if (g && (m = i(m, p > 2 ? arguments[2] : void 0, 2)),
                            void 0 == v || d == Array && s(v))
                            for (e = l(f.length),
                                     n = new d(e); e > y; y++)
                                u(n, y, g ? m(f[y], y) : f[y]);
                        else
                            for (c = v.call(f),
                                     n = new d; !(r = c.next()).done; y++)
                                u(n, y, g ? a(c, m, [r.value, y], !0) : r.value);
                        return n.length = y,
                            n
                    }
                })
            }
            , function(t, e, n) {
                "use strict";
                var i = n(5)
                    , r = n(21);
                t.exports = function(t, e, n) {
                    e in t ? i.f(t, e, r(0, n)) : t[e] = n
                }
            }
            , function(t, e, n) {
                n(81);
                var i = n(3).Object;
                t.exports = function(t, e, n) {
                    return i.defineProperty(t, e, n)
                }
            }
            , function(t, e, n) {
                var i = n(8);
                i(i.S + i.F * !n(7), "Object", {
                    defineProperty: n(5).f
                })
            }
            , function(t, e, n) {
                var i = n(3)
                    , r = i.JSON || (i.JSON = {
                    stringify: JSON.stringify
                });
                t.exports = function(t) {
                    return r.stringify.apply(r, arguments)
                }
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , l = n(11)
                    , u = i(l)
                    , h = n(15)
                    , c = i(h)
                    , f = function() {
                    function t(e, n) {
                        r(this, t),
                            d.call(this),
                            this.id = n,
                            this.data = {},
                            this.element = e,
                            this.data = this.getDataFromElement(e),
                            this.chatBoxLeft = null,
                            this.chatBoxTop = null,
                            this.chatBoxHeight = null,
                            this.chatBoxWidth = null,
                            this.selected = null,
                            this.x_pos = 0,
                            this.y_pos = 0,
                            this.x_elem = 0,
                            this.y_elem = 0,
                            this.type = 0,
                            this.chatBoxHeightCurrent = 0,
                            this.chatBoxWidthCurrent = 0,
                            this.x_elem_relative = 0,
                            this.y_elem_relative = 0,
                            this.hitToTop = !1,
                            this.hitToLeft = !1,
                            this.hitToRight = !1,
                            this.hitToBottom = !1,
                            this.initWindowWidth = window.innerWidth,
                            this.initWindowHeight = window.innerHeight,
                            this.checkResizeWindow = !1,
                            this.isChatBoxOpened = !1,
                            this.dragHolderDragging = !1,
                            this.isHandleClosedBoxChatToolTip = !1,
                            this.closedBox_top = null,
                            this.closedBox_bottom = null,
                            this.closedBox_left = null,
                            this.closedBox_right = null,
                            this.initClosedBoxWidth = null,
                            this.data.android = c.default.isAndroid() && c.default.isMobile(),
                            this.data.ios = c.default.isIOS() && c.default.isMobile(),
                            this.receiveMessage = this.receiveMessage.bind(this),
                            window.addEventListener("message", this.receiveMessage),
                            window.addEventListener("resize", this.handleResizeWindow, !0),
                            document.onmousemove = this._move_chat_box,
                            document.onmouseup = this._destroy
                    }
                    return s(t, [{
                        key: "getDataFromElement",
                        value: function(t) {
                            var e = {};
                            return e.position = t.getAttribute("data-position"),
                                e.oaid = t.getAttribute("data-oaid"),
                                e.welcomemessage = t.getAttribute("data-welcome-message"),
                                e.autopopup = t.getAttribute("data-autopopup"),
                                e.width = t.getAttribute("data-width"),
                                e.height = t.getAttribute("data-height"),
                                e.style = t.getAttribute("data-style"),
                            e.width && "0" !== e.width || (e.width = 350),
                            e.height && "0" !== e.height || (e.height = 420),
                                e.style ? 1 != e.style && 2 != e.style && (e.style = 2,
                                    console.warn("[ZaloSocialPlugin] [ChatWidgetPlugin] | Warning: Need to set 'data-style' attribute equals to 1 or 2"),
                                    console.warn("[ZaloSocialPlugin] [ChatWidgetPlugin] | Warning: 1 for RECTANGLE style - 2 for CIRCLE style")) : e.style = 2,
                                e.id = this.id,
                                e.domain = document.domain,
                                e
                        }
                    }, {
                        key: "validate",
                        value: function() {
                            return !!this.data.oaid || (console.warn("[Zalo Social Plugin]", "The chat widget button have no data-oaid attribute"),
                                !1)
                        }
                    }, {
                        key: "updateDragHolderElementStyle",
                        value: function() {
                            if (this.isChatBoxOpened)
                                this.dragHolder.style.left = 0,
                                    this.dragHolder.style.right = "",
                                    this.dragHolder.style.width = "80%";
                            else {
                                if (this.isRectangleVersion())
                                    return void (this.dragHolder.style.width = "0px");
                                window.getComputedStyle(this.element, null).getPropertyValue("left").replace("px", "") < 10 ? (this.dragHolder.style.left = 0,
                                    this.dragHolder.style.right = "") : (this.dragHolder.style.left = "",
                                    this.dragHolder.style.right = 0),
                                    this.dragHolder.style.width = this.isHandleClosedBoxChatToolTip ? this.initClosedBoxWidth + "px" : "70px"
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.validate() && (this.iframe = document.createElement("iframe"),
                                    this.iframe.frameBorder = 0,
                                    this.iframe.allowFullscreen = "true",
                                    this.iframe.scrolling = "no",
                                    this.iframe.width = 260,
                                    this.iframe.height = 46,
                                    this.iframe.style.position = "absolute",
                                    this.iframe.style.bottom = "0px",
                                    this.iframe.style.right = "0px",
                                    this.element.style.zIndex = "99999999999",
                                    this.element.style.border = "none",
                                    this.element.style.visibility = "visible",
                                    this.element.style.bottom = "0px",
                                    this.element.style.left = this.element.style.left || "",
                                    this.element.style.right = "0px",
                                    this.element.style.position = "fixed",
                                    this.element.style.width = "300px",
                                    this.iframe.src = "https://sp.zalo.me/plugins/chat-widget" + u.default.jsonToQueryString(this.data),
                                    this.element.appendChild(this.iframe),
                                    this.dragHolder = document.createElement("div"),
                                    this.dragHolder.id = "drag-holder",
                                    this.dragHolder.style.position = "absolute",
                                    this.dragHolder.style.top = "0px",
                                    this.isRectangleVersion() ? (this.dragHolder.style.left = "0px",
                                        this.dragHolder.style.width = "80%",
                                        this.dragHolder.style.height = "56px") : (this.dragHolder.style.right = "0px",
                                        this.dragHolder.style.width = "70px",
                                        this.dragHolder.style.height = "70px"),
                                    this.dragHolder.style.cursor = "move",
                                    this.dragHolder.draggable = !0,
                                    this.dragLeft = document.createElement("div"),
                                    this.dragLeft.id = "drag-left",
                                    this.dragLeft.style.position = "absolute",
                                    this.dragLeft.style.top = "0px",
                                    this.dragLeft.style.left = "0px",
                                    this.dragLeft.style.width = "10px",
                                    this.dragLeft.style.height = "100%",
                                    this.dragLeft.style.cursor = "w-resize",
                                    this.dragRight = document.createElement("div"),
                                    this.dragRight.id = "drag-right",
                                    this.dragRight.style.position = "absolute",
                                    this.dragRight.style.top = "0px",
                                    this.dragRight.style.right = "0px",
                                    this.dragRight.style.width = "10px",
                                    this.dragRight.style.height = "100%",
                                    this.dragRight.style.cursor = "e-resize",
                                    this.dragTop = document.createElement("div"),
                                    this.dragTop.id = "drag-top",
                                    this.dragTop.style.position = "absolute",
                                    this.dragTop.style.top = "0px",
                                    this.dragTop.style.width = "100%",
                                    this.dragTop.style.height = "10px",
                                    this.dragTop.style.cursor = "n-resize",
                                    this.dragBottom = document.createElement("div"),
                                    this.dragBottom.id = "drag-bottom",
                                    this.dragBottom.style.position = "absolute",
                                    this.dragBottom.style.bottom = "0px",
                                    this.dragBottom.style.width = "100%",
                                    this.dragBottom.style.height = "10px",
                                    this.dragBottom.style.cursor = "s-resize",
                                    this.dragTopLeft = document.createElement("div"),
                                    this.dragTopLeft.id = "drag-top-left",
                                    this.dragTopLeft.style.position = "absolute",
                                    this.dragTopLeft.style.top = "0px",
                                    this.dragTopLeft.style.left = "0px",
                                    this.dragTopLeft.style.width = "15px",
                                    this.dragTopLeft.style.height = "15px",
                                    this.dragTopLeft.style.cursor = "nw-resize",
                                    this.dragTopRight = document.createElement("div"),
                                    this.dragTopRight.id = "drag-top-right",
                                    this.dragTopRight.style.position = "absolute",
                                    this.dragTopRight.style.top = "0px",
                                    this.dragTopRight.style.right = "0px",
                                    this.dragTopRight.style.width = "15px",
                                    this.dragTopRight.style.height = "15px",
                                    this.dragTopRight.style.cursor = "ne-resize",
                                    this.dragBottomRight = document.createElement("div"),
                                    this.dragBottomRight.id = "drag-bottom-right",
                                    this.dragBottomRight.style.position = "absolute",
                                    this.dragBottomRight.style.bottom = "0px",
                                    this.dragBottomRight.style.right = "0px",
                                    this.dragBottomRight.style.width = "15px",
                                    this.dragBottomRight.style.height = "15px",
                                    this.dragBottomRight.style.cursor = "se-resize",
                                    this.dragBottomLeft = document.createElement("div"),
                                    this.dragBottomLeft.id = "drag-bottom-left",
                                    this.dragBottomLeft.style.position = "absolute",
                                    this.dragBottomLeft.style.bottom = "0px",
                                    this.dragBottomLeft.style.left = "0px",
                                    this.dragBottomLeft.style.width = "15px",
                                    this.dragBottomLeft.style.height = "15px",
                                    this.dragBottomLeft.style.cursor = "sw-resize",
                                    this.overlay = document.createElement("div"),
                                    this.overlay.id = "overlay",
                                    this.overlay.style.position = "absolute",
                                    this.overlay.style.top = "0px",
                                    this.overlay.style.left = "0px",
                                    this.overlay.style.width = "100%",
                                    this.overlay.style.height = "100%",
                                    this.overlay.style.display = "none",
                                    this.element.appendChild(this.dragHolder),
                                    this.element.appendChild(this.dragLeft),
                                    this.element.appendChild(this.dragRight),
                                    this.element.appendChild(this.dragTop),
                                    this.element.appendChild(this.dragBottom),
                                this.element.appendChild(this.dragTopLeft),
                                this.element.appendChild(this.dragTopRight),
                                this.element.appendChild(this.dragBottomRight),
                                this.element.appendChild(this.dragBottomLeft),
                                this.element.appendChild(this.overlay),
                                this.dragHolder.onclick = function() {
                                    return t.isRectangleVersion() || (t.closeChatBoxClosedToolTip(),
                                        t.saveClosedBoxPosition()),
                                        t.openChatWidget(),
                                        !1
                                }
                                ,
                                this.dragHolder.ondragstart = function() {
                                    return t.isRectangleVersion() || t.closeChatBoxClosedToolTip(),
                                    t.isRectangleVersion() && !t.isChatBoxOpened || (t._drag_chat_box_init("move_chat_box"),
                                        t.dragHolderDragging = !0),
                                        !1
                                }
                                ,
                                this.dragLeft.onmousedown = function() {
                                    return t._drag_chat_box_init("left-resize"),
                                        !1
                                }
                                ,
                                this.dragRight.onmousedown = function() {
                                    return t._drag_chat_box_init("right-resize"),
                                        !1
                                }
                                ,
                                this.dragTop.onmousedown = function() {
                                    return t._drag_chat_box_init("top-resize"),
                                        !1
                                }
                                ,
                                this.dragBottom.onmousedown = function() {
                                    return t._drag_chat_box_init("bottom-resize"),
                                        !1
                                }
                                ,
                                this.dragTopLeft.onmousedown = function() {
                                    return t._drag_chat_box_init("top-left-resize"),
                                        !1
                                }
                                ,
                                this.dragTopRight.onmousedown = function() {
                                    return t._drag_chat_box_init("top-right-resize"),
                                        !1
                                }
                                ,
                                this.dragBottomLeft.onmousedown = function() {
                                    return t._drag_chat_box_init("bottom-left-resize"),
                                        !1
                                }
                                ,
                                this.dragBottomRight.onmousedown = function() {
                                    return t._drag_chat_box_init("bottom-right-resize"),
                                        !1
                                }
                            )
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.iframe.remove(),
                                this.dragHolder.remove(),
                                this.dragLeft.remove(),
                                this.dragTop.remove(),
                                this.dragRight.remove(),
                                this.dragBottom.remove(),
                                this.dragBottomLeft.remove(),
                                this.dragBottomRight.remove(),
                                this.dragTopLeft.remove(),
                                this.dragTopRight.remove(),
                                this.overlay.remove(),
                                this.element.removeEventListener("message", this.receiveMessage)
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("zshare_reload", "https://sp.zalo.me")
                        }
                    }, {
                        key: "openChatWidget",
                        value: function() {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("open-chat-widget", "*")
                        }
                    }, {
                        key: "closeChatWidget",
                        value: function() {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("close-chat-widget", "*")
                        }
                    }, {
                        key: "getTheElementStyleLeftPosition",
                        value: function(t) {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("the_element_style_left_" + t, "*")
                        }
                    }, {
                        key: "getWindowLocationHostName",
                        value: function(t) {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("window_location_hostname_" + t, "*")
                        }
                    }, {
                        key: "receiveMessage",
                        value: function(t) {
                            if (t.data)
                                switch (t.data.cmd) {
                                    case "zchat_widget_close_chat_box":
                                        this.iframe && (this.isRectangleVersion() || (this.initClosedBoxWidth || this.getWindowLocationHostName(window.location.hostname),
                                        this.isHandleClosedBoxChatToolTip || this.getTheElementStyleLeftPosition(window.getComputedStyle(this.element, null).getPropertyValue("left")),
                                            this.initClosedBoxWidth = t.data.width),
                                            this.isChatBoxOpened = !1,
                                            this.updateDragHolderElementStyle(),
                                            this.iframe.height = t.data.height,
                                            this.iframe.width = t.data.width,
                                            this.element.style.height = t.data.height + "px",
                                            this.element.style.width = t.data.width + "px",
                                            this.element.style.top = this.closedBox_top || "",
                                            this.element.style.bottom = this.closedBox_bottom || "0px",
                                            this.element.style.left = this.closedBox_left || "",
                                            this.element.style.right = this.closedBox_right || "0px",
                                            this.offResizeAndDrag());
                                        break;
                                    case "zchat_widget_open_chat_box":
                                        this.iframe && (this.isChatBoxOpened = !0,
                                            this.updateDragHolderElementStyle(),
                                            null == this.chatBoxHeight ? (this.iframe.height = t.data.height,
                                                this.element.style.height = t.data.height + "px") : (this.iframe.height = this.chatBoxHeight,
                                                this.element.style.height = this.chatBoxHeight + "px"),
                                            null == this.chatBoxWidth ? (this.iframe.width = t.data.width,
                                                this.element.style.width = t.data.width + "px") : (this.iframe.width = this.chatBoxWidth,
                                                this.element.style.width = this.chatBoxWidth + "px"),
                                            null == this.chatBoxLeft && null == this.chatBoxTop ? (this.element.style.right = "0px",
                                                this.element.style.bottom = "0px") : (this.element.style.left = this.chatBoxLeft + "px",
                                                this.element.style.top = this.chatBoxTop + "px"),
                                            this.handleResizeWindow(),
                                            this.onResizeAndDrag());
                                        break;
                                    case "zchat_widget_toggle_sticker":
                                        this.iframe && (null == this.chatBoxHeight ? (this.iframe.height = t.data.height,
                                            this.element.style.height = t.data.height + "px") : (this.iframe.height = this.chatBoxHeight,
                                            this.element.style.height = this.chatBoxHeight + "px"),
                                            null == this.chatBoxWidth ? (this.iframe.width = t.data.width,
                                                this.element.style.width = t.data.width + "px") : (this.iframe.width = this.chatBoxWidth,
                                                this.element.style.width = this.chatBoxWidth + "px"));
                                        break;
                                    case "zchat_widget_show_light_box":
                                        this.iframe && (this.element.style.height = "100%",
                                            this.element.style.width = "100%",
                                            this.element.style.top = "0px",
                                            this.element.style.left = "0px",
                                            this.iframe.height = "100%",
                                            this.iframe.width = "100%",
                                            this.offResizeAndDrag());
                                        break;
                                    case "zchat_widget_close_light_box":
                                        this.iframe && (this.element.style.height = null == this.chatBoxHeight ? "470px" : this.chatBoxHeight + "px",
                                            this.element.style.width = null == this.chatBoxWidth ? "350px" : this.chatBoxWidth + "px",
                                            this.iframe.height = null == this.chatBoxHeight ? 470 : this.chatBoxHeight,
                                            this.iframe.width = null == this.chatBoxWidth ? 350 : this.chatBoxWidth,
                                            this.element.style.top = null == this.chatBoxTop ? "" : this.chatBoxTop + "px",
                                            this.element.style.left = null == this.chatBoxLeft ? "" : this.chatBoxLeft + "px",
                                            this.onResizeAndDrag())
                                }
                        }
                    }, {
                        key: "handleHolderDragging",
                        value: function() {
                            if (this.dragHolderDragging) {
                                if (this.isChatBoxOpened)
                                    this.chatBoxLeft = this.element.offsetLeft,
                                        this.chatBoxTop = this.element.offsetTop,
                                        this.chatBoxWidth = this.element.offsetWidth,
                                        this.chatBoxHeight = this.element.offsetHeight;
                                else {
                                    if (this.isRectangleVersion())
                                        return;
                                    this.saveClosedBoxPosition(),
                                        this.element.offsetLeft <= window.innerWidth / 2 ? (this.closedBox_right = "",
                                            this.closedBox_left = "0px",
                                            this.chatBoxLeft = 0,
                                            this.chatBoxTop = this.element.offsetTop) : (this.closedBox_right = "0px",
                                            this.closedBox_left = "",
                                            this.chatBoxLeft = "",
                                            this.chatBoxTop = this.element.offsetTop),
                                        this.element.style.left = this.closedBox_left || "",
                                        this.element.style.right = this.closedBox_right || ""
                                }
                                this.dragHolderDragging = !1
                            }
                        }
                    }, {
                        key: "saveClosedBoxPosition",
                        value: function() {
                            this.isRectangleVersion() || this.isChatBoxOpened || (this.closedBox_top = this.element.style.top,
                                this.closedBox_bottom = this.element.style.bottom,
                                this.closedBox_left = this.element.style.left,
                                this.closedBox_right = this.element.style.right)
                        }
                    }, {
                        key: "closeChatBoxClosedToolTip",
                        value: function() {
                            this.isRectangleVersion() || this.iframe && !this.isChatBoxOpened && (this.isHandleClosedBoxChatToolTip = !0,
                                this.iframe.width = 70,
                                this.element.style.width = "70px",
                                this.iframe.contentWindow.postMessage("close-chat-box-closed-tooltip", "*"))
                        }
                    }]),
                        t
                }()
                    , d = function() {
                    var t = this;
                    this.isRectangleVersion = function() {
                        return 1 == t.data.style
                    }
                        ,
                        this._drag_chat_box_init = function(e) {
                            t.type = e,
                                t.selected = t.element,
                                t.x_elem = t.x_pos - t.selected.offsetLeft,
                                t.y_elem = t.y_pos - t.selected.offsetTop,
                                t.chatBoxHeightCurrent = t.selected.offsetHeight,
                                t.chatBoxWidthCurrent = t.selected.offsetWidth,
                                t.x_elem_relative = t.x_pos,
                                t.y_elem_relative = t.y_pos,
                                t.checkResizeWindow = !1,
                                document.getElementById("overlay").style.display = "block"
                        }
                        ,
                        this._move_chat_box = function(e) {
                            if (t.x_pos = document.all ? window.event.clientX : e.pageX,
                                    t.y_pos = document.all ? window.event.clientY : e.pageY,
                                null !== t.selected)
                                switch (t.type) {
                                    case "move_chat_box":
                                        t.handleHitToTop(),
                                            t.handleHitToLeft(),
                                            t.handleHitToRight(),
                                            t.handleHitToBottom();
                                        break;
                                    case "left-resize":
                                        t.handleLeftResize();
                                        break;
                                    case "right-resize":
                                        t.handleRightResize();
                                        break;
                                    case "top-resize":
                                        t.handleTopResize();
                                        break;
                                    case "bottom-resize":
                                        t.handleBottomResize();
                                        break;
                                    case "top-left-resize":
                                        t.handleTopResize(),
                                            t.handleLeftResize();
                                        break;
                                    case "top-right-resize":
                                        t.handleTopResize(),
                                            t.handleRightResize();
                                        break;
                                    case "bottom-left-resize":
                                        t.handleBottomResize(),
                                            t.handleLeftResize();
                                        break;
                                    case "bottom-right-resize":
                                        t.handleBottomResize(),
                                            t.handleRightResize()
                                }
                        }
                        ,
                        this._destroy = function() {
                            t.handleHolderDragging(),
                                t.selected = null,
                                t.type = 0,
                                document.getElementById("overlay").style.display = "none"
                        }
                        ,
                        this.handleResizeWindow = function() {
                            var e = !1;
                            if ((t.initWindowHeight > window.innerHeight || t.element.offsetTop + t.element.offsetHeight >= window.innerHeight) && (t.element.style.top = "auto"),
                                t.initWindowWidth > window.innerWidth) {
                                var n = t.initWindowWidth - window.innerWidth;
                                e = t.element.style.left.replace("px", "") - n <= 0
                            }
                            return t.element.style.left ? t.element.style.left.replace("px", "") >= window.innerWidth ? (t.initWindowWidth = window.innerWidth,
                                t.element.style.left = "") : e ? (t.initWindowWidth = window.innerWidth,
                                t.element.style.left = "0px") : (window.innerWidth <= t.element.offsetWidth ? (t.element.style.left = "",
                                t.checkResizeWindow = !0) : t.checkResizeWindow ? t.element.style.left = "" : t.element.style.left = t.element.offsetLeft < 0 ? "0px" : t.element.offsetLeft + window.innerWidth - t.initWindowWidth + "px",
                                t.initWindowWidth = window.innerWidth,
                                void (t.chatBoxLeft = t.element.offsetLeft)) : (t.initWindowWidth = window.innerWidth,
                                t.element.style.left = "")
                        }
                        ,
                        this.handleTopResize = function() {
                            var e = t.selected.offsetTop + t.selected.offsetHeight
                                , n = t.selected.offsetTop + t.selected.offsetHeight - (t.y_pos - t.y_elem);
                            t.y_pos - t.y_elem > 0 && (t.selected.style.height = n > 470 ? n + "px" : "470px",
                                t.iframe.height = n > 470 ? n : 470,
                                t.selected.style.top = n >= 470 ? t.y_pos - t.y_elem + "px" : e - 470 + "px"),
                                t.chatBoxHeight = t.iframe.height,
                                t.chatBoxTop = t.selected.offsetTop
                        }
                        ,
                        this.handleLeftResize = function() {
                            var e = t.selected.offsetLeft + t.selected.offsetWidth
                                , n = t.selected.offsetLeft + t.selected.offsetWidth - (t.x_pos - t.x_elem);
                            t.x_pos - t.x_elem > 0 && (t.selected.style.width = n > 350 ? n + "px" : "350px",
                                t.iframe.width = n > 350 ? n : 350,
                                t.selected.style.left = n >= 350 ? t.x_pos - t.x_elem + "px" : e - 350 + "px"),
                                t.chatBoxWidth = t.iframe.width,
                                t.chatBoxLeft = t.selected.offsetLeft
                        }
                        ,
                        this.handleRightResize = function() {
                            var e = t.x_pos - t.x_elem_relative + t.chatBoxWidthCurrent;
                            t.x_pos < window.innerWidth - 14 ? (t.selected.style.width = e > 350 ? e + "px" : "350px",
                                t.iframe.width = e > 350 ? e : 350) : (t.selected.style.width = window.innerWidth - t.selected.offsetLeft - 14 + "px",
                                t.iframe.width = window.innerWidth - t.selected.offsetLeft - 14),
                                t.chatBoxWidth = t.iframe.width
                        }
                        ,
                        this.handleBottomResize = function() {
                            var e = t.y_pos - t.y_elem_relative + t.chatBoxHeightCurrent;
                            t.y_pos < window.innerHeight - 1 ? (t.selected.style.height = e > 470 ? e + "px" : "470px",
                                t.iframe.height = e > 470 ? e : 470) : (t.selected.style.height = window.innerHeight - t.selected.offsetTop + "px",
                                t.iframe.height = window.innerHeight - t.selected.offsetTop),
                                t.chatBoxHeight = t.iframe.height
                        }
                        ,
                        this.handleHitToTop = function() {
                            0 == t.selected.offsetTop && 1 == t.hitToTop && t.y_pos - t.y_elem > 35 && (t.selected.style.top = "35px",
                                t.hitToTop = !1),
                                t.selected.offsetTop < 35 ? (t.hitToTop = !0,
                                    t.selected.style.top = "0px",
                                t.isRectangleVersion() && (t.chatBoxTop = t.y_pos - t.y_elem,
                                0 == t.selected.offsetTop && (t.chatBoxTop = 0))) : (t.selected.style.top = t.y_pos - t.y_elem + "px",
                                t.isRectangleVersion() && (t.chatBoxTop = t.selected.offsetTop))
                        }
                        ,
                        this.handleHitToLeft = function() {
                            0 == t.selected.offsetLeft && 1 == t.hitToLeft && t.x_pos - t.x_elem > 35 && (t.selected.style.left = "35px",
                                t.hitToLeft = !1),
                                t.selected.offsetLeft < 35 ? (t.hitToLeft = !0,
                                    t.selected.style.left = "0px",
                                t.isRectangleVersion() && (t.chatBoxLeft = t.x_pos - t.x_elem,
                                0 == t.selected.offsetLeft && (t.chatBoxLeft = 0))) : (t.selected.style.left = t.x_pos - t.x_elem + "px",
                                t.isRectangleVersion() && (t.chatBoxLeft = t.x_pos - t.x_elem))
                        }
                        ,
                        this.handleHitToRight = function() {
                            var e = window.innerWidth - t.selected.offsetLeft - t.selected.offsetWidth;
                            0 == e && 1 == t.hitToRight && t.x_elem - t.x_pos > 35 && (t.selected.style.left = window.innerWidth - 35 + "px",
                                t.hitToRight = !1),
                                e < 35 ? (t.hitToLeft = !0,
                                    t.selected.style.left = window.innerWidth - t.selected.offsetWidth - 15 + "px",
                                t.isRectangleVersion() && (t.chatBoxWidth = t.selected.offsetWidth)) : t.isRectangleVersion() && (t.chatBoxWidth = t.selected.offsetWidth),
                            t.isRectangleVersion() && (t.chatBoxLeft = t.selected.offsetLeft)
                        }
                        ,
                        this.handleHitToBottom = function() {
                            var e = window.innerHeight - t.selected.offsetTop - t.selected.offsetHeight;
                            0 == t.offsetBottom && 1 == t.hitToBottom && t.y_elem - t.y_pos > 35 && (t.selected.style.top = window.innerHeight - 35 + "px",
                                t.hitToBottom = !1),
                                e < 35 ? (t.hitToBottom = !0,
                                    t.selected.style.top = window.innerHeight - t.selected.offsetHeight + "px",
                                t.isRectangleVersion() && (t.chatBoxHeight = t.selected.offsetHeight)) : t.isRectangleVersion() && (t.chatBoxHeight = t.selected.offsetHeight),
                            t.isRectangleVersion() && (t.chatBoxTop = t.selected.offsetTop)
                        }
                        ,
                        this.offResizeAndDrag = function() {
                            document.getElementById("drag-holder").style.display = "block",
                                document.getElementById("drag-left").style.display = "none",
                                document.getElementById("drag-right").style.display = "none",
                                document.getElementById("drag-top").style.display = "none",
                                document.getElementById("drag-bottom").style.display = "none",
                                document.getElementById("drag-top-left").style.display = "none",
                                document.getElementById("drag-top-right").style.display = "none",
                                document.getElementById("drag-bottom-left").style.display = "none",
                                document.getElementById("drag-bottom-right").style.display = "none"
                        }
                        ,
                        this.onResizeAndDrag = function() {
                            document.getElementById("drag-holder").style.display = "block",
                                document.getElementById("drag-left").style.display = "block",
                                document.getElementById("drag-right").style.display = "block",
                                document.getElementById("drag-top").style.display = "block",
                                document.getElementById("drag-bottom").style.display = "block",
                                document.getElementById("drag-top-left").style.display = "block",
                                document.getElementById("drag-top-right").style.display = "block",
                                document.getElementById("drag-bottom-left").style.display = "block",
                                document.getElementById("drag-bottom-right").style.display = "block"
                        }
                };
                e.default = f
            }
            , function(t, e, n) {
                t.exports = {
                    default: n(85),
                    __esModule: !0
                }
            }
            , function(t, e, n) {
                n(86),
                    t.exports = n(3).Object.keys
            }
            , function(t, e, n) {
                var i = n(26)
                    , r = n(30);
                n(87)("keys", function() {
                    return function(t) {
                        return r(i(t))
                    }
                })
            }
            , function(t, e, n) {
                var i = n(8)
                    , r = n(3)
                    , o = n(19);
                t.exports = function(t, e) {
                    var n = (r.Object || {})[t] || Object[t]
                        , a = {};
                    a[t] = e(n),
                        i(i.S + i.F * o(function() {
                            n(1)
                        }), "Object", a)
                }
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = n(41)
                    , l = i(s)
                    , u = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , h = n(11)
                    , c = i(h)
                    , f = n(15)
                    , d = i(f)
                    , p = n(89)
                    , m = i(p)
                    , g = n(91)
                    , y = function() {
                    function t(e, n, i) {
                        r(this, t),
                            this.sdk = i,
                            this.id = n,
                            this.data = {},
                            this.element = e,
                            this.data = this.getDataFromElement(e),
                            this.data.android = d.default.isAndroid() && d.default.isMobile(),
                            this.data.ios = d.default.isIOS() && d.default.isMobile(),
                            this.receiveMessage = this.receiveMessage.bind(this),
                            this.closeInline = this.closeInline.bind(this),
                            this.documentClick = this.documentClick.bind(this),
                            this.isOpenInline = !1
                    }
                    return u(t, [{
                        key: "getDataFromElement",
                        value: function(t) {
                            var e = {};
                            return e.dev = t.getAttribute("data-dev"),
                                e.color = t.getAttribute("data-color"),
                                e.oaid = t.getAttribute("data-oaid"),
                                e.href = t.getAttribute("data-href"),
                                e.layout = t.getAttribute("data-layout"),
                                e.customize = t.getAttribute("data-customize"),
                                e.callback = t.getAttribute("data-callback"),
                            e.layout || (e.layout = "icon"),
                                e.customize ? "false" === e.customize ? e.customize = !1 : e.customize = !0 : e.customize = !1,
                                e.id = this.id,
                                e.domain = document.domain,
                                e
                        }
                    }, {
                        key: "validate",
                        value: function() {
                            return this.data.oaid ? !!this.data.href || (console.warn("[Zalo Social Plugin]", "The share button have no data-href attribute"),
                                !1) : (console.warn("[Zalo Social Plugin]", "The share button have no data-oaid attribute"),
                                !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.validate()) {
                                if (this.iframe = document.createElement("iframe"),
                                        this.iframe.frameBorder = 0,
                                        this.iframe.allowFullscreen = "true",
                                        this.iframe.scrolling = "no",
                                        this.data.customize)
                                    this.iframe.width = "0px",
                                        this.iframe.height = "0px",
                                        this.iframe.style.position = "absolute";
                                else {
                                    this.element.style.overflow = "hidden",
                                        this.element.style.display = "inline-block";
                                    var t = ""
                                        , e = "";
                                    switch (this.data.layout) {
                                        case "1":
                                            t = "70px",
                                                e = "20px";
                                            break;
                                        case "2":
                                            t = "20px",
                                                e = "20px";
                                            break;
                                        case "3":
                                            t = "30px",
                                                e = "30px";
                                            break;
                                        case "4":
                                            t = "40px",
                                                e = "40px";
                                            break;
                                        case "5":
                                            t = "40px",
                                                e = "60px"
                                    }
                                    this.iframe.width = t,
                                        this.element.style.width = t,
                                        this.iframe.height = e,
                                        this.element.style.height = e
                                }
                                this.listenEventClickButton(),
                                    this.iframe.src = "https://sp.zalo.me/plugins/share" + c.default.jsonToQueryString(this.data),
                                    this.element.appendChild(this.iframe)
                            }
                        }
                    }, {
                        key: "listenEventClickButton",
                        value: function() {
                            this.element.addEventListener("click", this.onButtonClick.bind(this))
                        }
                    }, {
                        key: "onButtonClick",
                        value: function() {
                            this.shareNow()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.iframe.remove(),
                                this.element.removeEventListener("click", this.onButtonClick)
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("zshare_reload", "https://sp.zalo.me")
                        }
                    }, {
                        key: "setData",
                        value: function(t) {
                            this.frameData = t
                        }
                    }, {
                        key: "shareNow",
                        value: function() {
                            var t = encodeURIComponent(this.frameData.shareUrl);
                            if ("true" === this.frameData.android)
                                return this.sdk.redirect("intent://zaloapp.com/#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.SUBJECT=;S.android.intent.extra.TEXT=" + t + ";B.hidePostFeed=false;B.backToSource=true;end"),
                                    !1;
                            if ("true" === this.frameData.ios)
                                return this.sdk.redirect("zaloshareext://shareext?url=" + t + "&type=8&version=1"),
                                    !1;
                            var e = {
                                url: this.frameData.shareUrl
                            }
                                , n = this.frameData.baseUrl + "/share?v=2&oa=" + this.frameData.oaid + "&d=" + encodeURIComponent(g.Base64.encode((0,
                                l.default)(e)));
                            m.default.clickShareButton();
                            var i = (0,
                                l.default)({
                                errorCode: 0
                            });
                            return m.default.trackStatClickShare("https://sp.zalo.me/l/stats", "OAid=" + (this.data.oaid ? this.data.oaid.toString() : "0") + "&actionId=6&params=" + i, function() {}),
                                "logged" === this.frameData.isLogged ? this.openShareInline() : this.sdk.openInNewTab("https://id.zalo.me/account?continue=" + encodeURIComponent(n)),
                                !1
                        }
                    }, {
                        key: "closeInline",
                        value: function() {
                            this.isOpenInline && (this.iframe2.remove(),
                                window.removeEventListener("message", this.receiveMessage),
                                document.removeEventListener("click", this.documentClick),
                                this.isOpenInline = !1)
                        }
                    }, {
                        key: "documentClick",
                        value: function() {
                            this.closeInline()
                        }
                    }, {
                        key: "openShareInline",
                        value: function() {
                            var t = this;
                            this.iframe2 && this.closeInline();
                            var e = {
                                url: this.frameData.shareUrl
                            };
                            this.iframe2 = document.createElement("iframe"),
                                this.iframe2.frameBorder = 0,
                                this.iframe2.allowFullscreen = "true",
                                this.iframe2.scrolling = "no",
                                this.iframe2.width = "435",
                                this.iframe2.height = "355",
                                this.iframe2.src = "https://sp.zalo.me/share_inline?d=" + encodeURIComponent(g.Base64.encode((0,
                                    l.default)(e)));
                            var n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                                , i = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                                , r = this.element.getBoundingClientRect()
                                , o = this.getCoords(this.element)
                                , a = o.top + this.element.offsetHeight + 5
                                , s = o.left + this.element.offsetWidth / 2;
                            n - r.top < 355 && (a -= 380),
                            i - r.left < 477 && (s -= 430),
                                this.iframe2.style.zIndex = 9999999,
                                this.iframe2.style.position = "absolute",
                                this.iframe2.style.top = a + "px",
                                this.iframe2.style.left = s + "px",
                                this.iframe2.style.backgroundColor = "#fff",
                                document.getElementsByTagName("body")[0].appendChild(this.iframe2),
                                window.addEventListener("message", this.receiveMessage),
                                this.isOpenInline = !0,
                                setTimeout(function() {
                                    document.addEventListener("click", t.documentClick)
                                }, 1e3)
                        }
                    }, {
                        key: "getCoords",
                        value: function(t) {
                            var e = t.getBoundingClientRect()
                                , n = document.body
                                , i = document.documentElement
                                , r = window.pageYOffset || i.scrollTop || n.scrollTop
                                , o = window.pageXOffset || i.scrollLeft || n.scrollLeft
                                , a = i.clientTop || n.clientTop || 0
                                , s = i.clientLeft || n.clientLeft || 0
                                , l = e.top + r - a
                                , u = e.left + o - s;
                            return {
                                top: Math.round(l),
                                left: Math.round(u)
                            }
                        }
                    }, {
                        key: "receiveMessage",
                        value: function(t) {
                            if (t.data)
                                switch (t.data.cmd) {
                                    case "zsdk_share_resize":
                                        this.iframe2 && (this.iframe2.height = 350 + t.data.height);
                                        break;
                                    case "zsdk_share_close":
                                        this.iframe2 && (window[this.data.callback] && window[this.data.callback]({
                                            data: 1
                                        }),
                                            this.closeInline())
                                }
                        }
                    }]),
                        t
                }();
                e.default = y
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , l = n(90)
                    , u = i(l)
                    , h = {
                    CLICK_BUTTON: 2
                }
                    , c = function() {
                    function t() {
                        r(this, t)
                    }
                    return s(t, null, [{
                        key: "trackStatClickShare",
                        value: function(t, e, n) {
                            u.default.postJSOBWithCredentials(t, e, n)
                        }
                    }, {
                        key: "clickShareButton",
                        value: function() {
                            u.default.getTextWithCredentials("https://sp.zalo.me/l/share?action=" + h.CLICK_BUTTON, function() {})
                        }
                    }, {
                        key: "trackingError",
                        value: function(t, e) {
                            u.default.getTextWithCredentials("https://sp.zalo.me/tracking/log?error=" + encodeURIComponent(t) + "&data=" + e, function() {})
                        }
                    }]),
                        t
                }();
                e.default = c
            }
            , function(t, e, n) {
                "use strict";
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(1)
                    , o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r)
                    , a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    o.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , s = function() {
                    function t() {
                        i(this, t)
                    }
                    return a(t, null, [{
                        key: "getJSONWithCredentials",
                        value: function(t, e) {
                            fetch(t, {
                                credentials: "include",
                                method: "get"
                            }).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                e(t)
                            })
                        }
                    }, {
                        key: "getTextWithCredentials",
                        value: function(t, e) {
                            fetch(t, {
                                credentials: "include",
                                method: "get"
                            }).then(function(t) {
                                return t.text()
                            }).then(function(t) {
                                e(t)
                            })
                        }
                    }, {
                        key: "postJSOBWithCredentials",
                        value: function(t, e, n) {
                            fetch(t, {
                                method: "post",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: e
                            }).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                n(t)
                            })
                        }
                    }]),
                        t
                }();
                e.default = s
            }
            , function(t, e, n) {
                (function(i) {
                        var r, o;
                        !function(i) {
                            "use strict";
                            var a, s = i.Base64;
                            if (void 0 !== t && t.exports)
                                try {
                                    a = n(92).Buffer
                                } catch (t) {}
                            var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                                , u = function(t) {
                                for (var e = {}, n = 0, i = t.length; n < i; n++)
                                    e[t.charAt(n)] = n;
                                return e
                            }(l)
                                , h = String.fromCharCode
                                , c = function(t) {
                                if (t.length < 2) {
                                    var e = t.charCodeAt(0);
                                    return e < 128 ? t : e < 2048 ? h(192 | e >>> 6) + h(128 | 63 & e) : h(224 | e >>> 12 & 15) + h(128 | e >>> 6 & 63) + h(128 | 63 & e)
                                }
                                var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                                return h(240 | e >>> 18 & 7) + h(128 | e >>> 12 & 63) + h(128 | e >>> 6 & 63) + h(128 | 63 & e)
                            }
                                , f = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
                                , d = function(t) {
                                return t.replace(f, c)
                            }
                                , p = function(t) {
                                var e = [0, 2, 1][t.length % 3]
                                    , n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                                return [l.charAt(n >>> 18), l.charAt(n >>> 12 & 63), e >= 2 ? "=" : l.charAt(n >>> 6 & 63), e >= 1 ? "=" : l.charAt(63 & n)].join("")
                            }
                                , m = i.btoa ? function(t) {
                                    return i.btoa(t)
                                }
                                : function(t) {
                                    return t.replace(/[\s\S]{1,3}/g, p)
                                }
                                , g = a ? a.from && a.from !== Uint8Array.from ? function(t) {
                                    return (t.constructor === a.constructor ? t : a.from(t)).toString("base64")
                                }
                                : function(t) {
                                    return (t.constructor === a.constructor ? t : new a(t)).toString("base64")
                                }
                                : function(t) {
                                    return m(d(t))
                                }
                                , y = function(t, e) {
                                return e ? g(String(t)).replace(/[+\/]/g, function(t) {
                                    return "+" == t ? "-" : "_"
                                }).replace(/=/g, "") : g(String(t))
                            }
                                , v = function(t) {
                                return y(t, !0)
                            }
                                , w = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"),"g")
                                , x = function(t) {
                                switch (t.length) {
                                    case 4:
                                        var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)
                                            , n = e - 65536;
                                        return h(55296 + (n >>> 10)) + h(56320 + (1023 & n));
                                    case 3:
                                        return h((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                                    default:
                                        return h((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                                }
                            }
                                , b = function(t) {
                                return t.replace(w, x)
                            }
                                , _ = function(t) {
                                var e = t.length
                                    , n = e % 4
                                    , i = (e > 0 ? u[t.charAt(0)] << 18 : 0) | (e > 1 ? u[t.charAt(1)] << 12 : 0) | (e > 2 ? u[t.charAt(2)] << 6 : 0) | (e > 3 ? u[t.charAt(3)] : 0)
                                    , r = [h(i >>> 16), h(i >>> 8 & 255), h(255 & i)];
                                return r.length -= [0, 0, 2, 1][n],
                                    r.join("")
                            }
                                , B = i.atob ? function(t) {
                                    return i.atob(t)
                                }
                                : function(t) {
                                    return t.replace(/[\s\S]{1,4}/g, _)
                                }
                                , T = a ? a.from && a.from !== Uint8Array.from ? function(t) {
                                    return (t.constructor === a.constructor ? t : a.from(t, "base64")).toString()
                                }
                                : function(t) {
                                    return (t.constructor === a.constructor ? t : new a(t,"base64")).toString()
                                }
                                : function(t) {
                                    return b(B(t))
                                }
                                , k = function(t) {
                                return T(String(t).replace(/[-_]/g, function(t) {
                                    return "-" == t ? "+" : "/"
                                }).replace(/[^A-Za-z0-9\+\/]/g, ""))
                            }
                                , E = function() {
                                var t = i.Base64;
                                return i.Base64 = s,
                                    t
                            };
                            if (i.Base64 = {
                                    VERSION: "2.3.2",
                                    atob: B,
                                    btoa: m,
                                    fromBase64: k,
                                    toBase64: y,
                                    utob: d,
                                    encode: y,
                                    encodeURI: v,
                                    btou: b,
                                    decode: k,
                                    noConflict: E
                                },
                                "function" == typeof Object.defineProperty) {
                                var R = function(t) {
                                    return {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                };
                                i.Base64.extendString = function() {
                                    Object.defineProperty(String.prototype, "fromBase64", R(function() {
                                        return k(this)
                                    })),
                                        Object.defineProperty(String.prototype, "toBase64", R(function(t) {
                                            return y(this, t)
                                        })),
                                        Object.defineProperty(String.prototype, "toBase64URI", R(function() {
                                            return y(this, !0)
                                        }))
                                }
                            }
                            i.Meteor && (Base64 = i.Base64),
                                void 0 !== t && t.exports ? t.exports.Base64 = i.Base64 : (r = [],
                                void 0 !== (o = function() {
                                    return i.Base64
                                }
                                    .apply(e, r)) && (t.exports = o))
                        }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== i ? i : this)
                    }
                ).call(e, n(42))
            }
            , function(t, e, n) {
                "use strict";
                (function(t) {
                        function i() {
                            return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                        }
                        function r(t, e) {
                            if (i() < e)
                                throw new RangeError("Invalid typed array length");
                            return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
                                t.__proto__ = o.prototype) : (null === t && (t = new o(e)),
                                t.length = e),
                                t
                        }
                        function o(t, e, n) {
                            if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o))
                                return new o(t,e,n);
                            if ("number" == typeof t) {
                                if ("string" == typeof e)
                                    throw new Error("If encoding is specified then the first argument must be a string");
                                return u(this, t)
                            }
                            return a(this, t, e, n)
                        }
                        function a(t, e, n, i) {
                            if ("number" == typeof e)
                                throw new TypeError('"value" argument must not be a number');
                            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, i) : "string" == typeof e ? h(t, e, n) : d(t, e)
                        }
                        function s(t) {
                            if ("number" != typeof t)
                                throw new TypeError('"size" argument must be a number');
                            if (t < 0)
                                throw new RangeError('"size" argument must not be negative')
                        }
                        function l(t, e, n, i) {
                            return s(e),
                                e <= 0 ? r(t, e) : void 0 !== n ? "string" == typeof i ? r(t, e).fill(n, i) : r(t, e).fill(n) : r(t, e)
                        }
                        function u(t, e) {
                            if (s(e),
                                    t = r(t, e < 0 ? 0 : 0 | p(e)),
                                    !o.TYPED_ARRAY_SUPPORT)
                                for (var n = 0; n < e; ++n)
                                    t[n] = 0;
                            return t
                        }
                        function h(t, e, n) {
                            if ("string" == typeof n && "" !== n || (n = "utf8"),
                                    !o.isEncoding(n))
                                throw new TypeError('"encoding" must be a valid string encoding');
                            var i = 0 | g(e, n);
                            t = r(t, i);
                            var a = t.write(e, n);
                            return a !== i && (t = t.slice(0, a)),
                                t
                        }
                        function c(t, e) {
                            var n = e.length < 0 ? 0 : 0 | p(e.length);
                            t = r(t, n);
                            for (var i = 0; i < n; i += 1)
                                t[i] = 255 & e[i];
                            return t
                        }
                        function f(t, e, n, i) {
                            if (e.byteLength,
                                n < 0 || e.byteLength < n)
                                throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < n + (i || 0))
                                throw new RangeError("'length' is out of bounds");
                            return e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e,n) : new Uint8Array(e,n,i),
                                o.TYPED_ARRAY_SUPPORT ? (t = e,
                                    t.__proto__ = o.prototype) : t = c(t, e),
                                t
                        }
                        function d(t, e) {
                            if (o.isBuffer(e)) {
                                var n = 0 | p(e.length);
                                return t = r(t, n),
                                    0 === t.length ? t : (e.copy(t, 0, 0, n),
                                        t)
                            }
                            if (e) {
                                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                                    return "number" != typeof e.length || J(e.length) ? r(t, 0) : c(t, e);
                                if ("Buffer" === e.type && X(e.data))
                                    return c(t, e.data)
                            }
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                        }
                        function p(t) {
                            if (t >= i())
                                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                            return 0 | t
                        }
                        function m(t) {
                            return +t != t && (t = 0),
                                o.alloc(+t)
                        }
                        function g(t, e) {
                            if (o.isBuffer(t))
                                return t.length;
                            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                                return t.byteLength;
                            "string" != typeof t && (t = "" + t);
                            var n = t.length;
                            if (0 === n)
                                return 0;
                            for (var i = !1; ; )
                                switch (e) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return n;
                                    case "utf8":
                                    case "utf-8":
                                    case void 0:
                                        return Y(t).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * n;
                                    case "hex":
                                        return n >>> 1;
                                    case "base64":
                                        return G(t).length;
                                    default:
                                        if (i)
                                            return Y(t).length;
                                        e = ("" + e).toLowerCase(),
                                            i = !0
                                }
                        }
                        function y(t, e, n) {
                            var i = !1;
                            if ((void 0 === e || e < 0) && (e = 0),
                                e > this.length)
                                return "";
                            if ((void 0 === n || n > this.length) && (n = this.length),
                                n <= 0)
                                return "";
                            if (n >>>= 0,
                                    e >>>= 0,
                                n <= e)
                                return "";
                            for (t || (t = "utf8"); ; )
                                switch (t) {
                                    case "hex":
                                        return P(this, e, n);
                                    case "utf8":
                                    case "utf-8":
                                        return A(this, e, n);
                                    case "ascii":
                                        return S(this, e, n);
                                    case "latin1":
                                    case "binary":
                                        return I(this, e, n);
                                    case "base64":
                                        return R(this, e, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return L(this, e, n);
                                    default:
                                        if (i)
                                            throw new TypeError("Unknown encoding: " + t);
                                        t = (t + "").toLowerCase(),
                                            i = !0
                                }
                        }
                        function v(t, e, n) {
                            var i = t[e];
                            t[e] = t[n],
                                t[n] = i
                        }
                        function w(t, e, n, i, r) {
                            if (0 === t.length)
                                return -1;
                            if ("string" == typeof n ? (i = n,
                                    n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                                    n = +n,
                                isNaN(n) && (n = r ? 0 : t.length - 1),
                                n < 0 && (n = t.length + n),
                                n >= t.length) {
                                if (r)
                                    return -1;
                                n = t.length - 1
                            } else if (n < 0) {
                                if (!r)
                                    return -1;
                                n = 0
                            }
                            if ("string" == typeof e && (e = o.from(e, i)),
                                    o.isBuffer(e))
                                return 0 === e.length ? -1 : x(t, e, n, i, r);
                            if ("number" == typeof e)
                                return e &= 255,
                                    o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : x(t, [e], n, i, r);
                            throw new TypeError("val must be string, number or Buffer")
                        }
                        function x(t, e, n, i, r) {
                            function o(t, e) {
                                return 1 === a ? t[e] : t.readUInt16BE(e * a)
                            }
                            var a = 1
                                , s = t.length
                                , l = e.length;
                            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                                if (t.length < 2 || e.length < 2)
                                    return -1;
                                a = 2,
                                    s /= 2,
                                    l /= 2,
                                    n /= 2
                            }
                            var u;
                            if (r) {
                                var h = -1;
                                for (u = n; u < s; u++)
                                    if (o(t, u) === o(e, -1 === h ? 0 : u - h)) {
                                        if (-1 === h && (h = u),
                                            u - h + 1 === l)
                                            return h * a
                                    } else
                                        -1 !== h && (u -= u - h),
                                            h = -1
                            } else
                                for (n + l > s && (n = s - l),
                                         u = n; u >= 0; u--) {
                                    for (var c = !0, f = 0; f < l; f++)
                                        if (o(t, u + f) !== o(e, f)) {
                                            c = !1;
                                            break
                                        }
                                    if (c)
                                        return u
                                }
                            return -1
                        }
                        function b(t, e, n, i) {
                            n = Number(n) || 0;
                            var r = t.length - n;
                            i ? (i = Number(i)) > r && (i = r) : i = r;
                            var o = e.length;
                            if (o % 2 != 0)
                                throw new TypeError("Invalid hex string");
                            i > o / 2 && (i = o / 2);
                            for (var a = 0; a < i; ++a) {
                                var s = parseInt(e.substr(2 * a, 2), 16);
                                if (isNaN(s))
                                    return a;
                                t[n + a] = s
                            }
                            return a
                        }
                        function _(t, e, n, i) {
                            return q(Y(e, t.length - n), t, n, i)
                        }
                        function B(t, e, n, i) {
                            return q(V(e), t, n, i)
                        }
                        function T(t, e, n, i) {
                            return B(t, e, n, i)
                        }
                        function k(t, e, n, i) {
                            return q(G(e), t, n, i)
                        }
                        function E(t, e, n, i) {
                            return q(Z(e, t.length - n), t, n, i)
                        }
                        function R(t, e, n) {
                            return 0 === e && n === t.length ? K.fromByteArray(t) : K.fromByteArray(t.slice(e, n))
                        }
                        function A(t, e, n) {
                            n = Math.min(t.length, n);
                            for (var i = [], r = e; r < n; ) {
                                var o = t[r]
                                    , a = null
                                    , s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                                if (r + s <= n) {
                                    var l, u, h, c;
                                    switch (s) {
                                        case 1:
                                            o < 128 && (a = o);
                                            break;
                                        case 2:
                                            l = t[r + 1],
                                            128 == (192 & l) && (c = (31 & o) << 6 | 63 & l) > 127 && (a = c);
                                            break;
                                        case 3:
                                            l = t[r + 1],
                                                u = t[r + 2],
                                            128 == (192 & l) && 128 == (192 & u) && (c = (15 & o) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (a = c);
                                            break;
                                        case 4:
                                            l = t[r + 1],
                                                u = t[r + 2],
                                                h = t[r + 3],
                                            128 == (192 & l) && 128 == (192 & u) && 128 == (192 & h) && (c = (15 & o) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & h) > 65535 && c < 1114112 && (a = c)
                                    }
                                }
                                null === a ? (a = 65533,
                                    s = 1) : a > 65535 && (a -= 65536,
                                    i.push(a >>> 10 & 1023 | 55296),
                                    a = 56320 | 1023 & a),
                                    i.push(a),
                                    r += s
                            }
                            return C(i)
                        }
                        function C(t) {
                            var e = t.length;
                            if (e <= $)
                                return String.fromCharCode.apply(String, t);
                            for (var n = "", i = 0; i < e; )
                                n += String.fromCharCode.apply(String, t.slice(i, i += $));
                            return n
                        }
                        function S(t, e, n) {
                            var i = "";
                            n = Math.min(t.length, n);
                            for (var r = e; r < n; ++r)
                                i += String.fromCharCode(127 & t[r]);
                            return i
                        }
                        function I(t, e, n) {
                            var i = "";
                            n = Math.min(t.length, n);
                            for (var r = e; r < n; ++r)
                                i += String.fromCharCode(t[r]);
                            return i
                        }
                        function P(t, e, n) {
                            var i = t.length;
                            (!e || e < 0) && (e = 0),
                            (!n || n < 0 || n > i) && (n = i);
                            for (var r = "", o = e; o < n; ++o)
                                r += N(t[o]);
                            return r
                        }
                        function L(t, e, n) {
                            for (var i = t.slice(e, n), r = "", o = 0; o < i.length; o += 2)
                                r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                            return r
                        }
                        function z(t, e, n) {
                            if (t % 1 != 0 || t < 0)
                                throw new RangeError("offset is not uint");
                            if (t + e > n)
                                throw new RangeError("Trying to access beyond buffer length")
                        }
                        function O(t, e, n, i, r, a) {
                            if (!o.isBuffer(t))
                                throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (e > r || e < a)
                                throw new RangeError('"value" argument is out of bounds');
                            if (n + i > t.length)
                                throw new RangeError("Index out of range")
                        }
                        function M(t, e, n, i) {
                            e < 0 && (e = 65535 + e + 1);
                            for (var r = 0, o = Math.min(t.length - n, 2); r < o; ++r)
                                t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                        }
                        function W(t, e, n, i) {
                            e < 0 && (e = 4294967295 + e + 1);
                            for (var r = 0, o = Math.min(t.length - n, 4); r < o; ++r)
                                t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
                        }
                        function U(t, e, n, i, r, o) {
                            if (n + i > t.length)
                                throw new RangeError("Index out of range");
                            if (n < 0)
                                throw new RangeError("Index out of range")
                        }
                        function j(t, e, n, i, r) {
                            return r || U(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                                Q.write(t, e, n, i, 23, 4),
                            n + 4
                        }
                        function H(t, e, n, i, r) {
                            return r || U(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                                Q.write(t, e, n, i, 52, 8),
                            n + 8
                        }
                        function F(t) {
                            if (t = D(t).replace(tt, ""),
                                t.length < 2)
                                return "";
                            for (; t.length % 4 != 0; )
                                t += "=";
                            return t
                        }
                        function D(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }
                        function N(t) {
                            return t < 16 ? "0" + t.toString(16) : t.toString(16)
                        }
                        function Y(t, e) {
                            e = e || 1 / 0;
                            for (var n, i = t.length, r = null, o = [], a = 0; a < i; ++a) {
                                if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                                    if (!r) {
                                        if (n > 56319) {
                                            (e -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        if (a + 1 === i) {
                                            (e -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        r = n;
                                        continue
                                    }
                                    if (n < 56320) {
                                        (e -= 3) > -1 && o.push(239, 191, 189),
                                            r = n;
                                        continue
                                    }
                                    n = 65536 + (r - 55296 << 10 | n - 56320)
                                } else
                                    r && (e -= 3) > -1 && o.push(239, 191, 189);
                                if (r = null,
                                    n < 128) {
                                    if ((e -= 1) < 0)
                                        break;
                                    o.push(n)
                                } else if (n < 2048) {
                                    if ((e -= 2) < 0)
                                        break;
                                    o.push(n >> 6 | 192, 63 & n | 128)
                                } else if (n < 65536) {
                                    if ((e -= 3) < 0)
                                        break;
                                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                } else {
                                    if (!(n < 1114112))
                                        throw new Error("Invalid code point");
                                    if ((e -= 4) < 0)
                                        break;
                                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                }
                            }
                            return o
                        }
                        function V(t) {
                            for (var e = [], n = 0; n < t.length; ++n)
                                e.push(255 & t.charCodeAt(n));
                            return e
                        }
                        function Z(t, e) {
                            for (var n, i, r, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
                                n = t.charCodeAt(a),
                                    i = n >> 8,
                                    r = n % 256,
                                    o.push(r),
                                    o.push(i);
                            return o
                        }
                        function G(t) {
                            return K.toByteArray(F(t))
                        }
                        function q(t, e, n, i) {
                            for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
                                e[r + n] = t[r];
                            return r
                        }
                        function J(t) {
                            return t !== t
                        }
                        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
                        var K = n(93)
                            , Q = n(94)
                            , X = n(95);
                        e.Buffer = o,
                            e.SlowBuffer = m,
                            e.INSPECT_MAX_BYTES = 50,
                            o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                                try {
                                    var t = new Uint8Array(1);
                                    return t.__proto__ = {
                                        __proto__: Uint8Array.prototype,
                                        foo: function() {
                                            return 42
                                        }
                                    },
                                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                                } catch (t) {
                                    return !1
                                }
                            }(),
                            e.kMaxLength = i(),
                            o.poolSize = 8192,
                            o._augment = function(t) {
                                return t.__proto__ = o.prototype,
                                    t
                            }
                            ,
                            o.from = function(t, e, n) {
                                return a(null, t, e, n)
                            }
                            ,
                        o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype,
                            o.__proto__ = Uint8Array,
                        "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                            value: null,
                            configurable: !0
                        })),
                            o.alloc = function(t, e, n) {
                                return l(null, t, e, n)
                            }
                            ,
                            o.allocUnsafe = function(t) {
                                return u(null, t)
                            }
                            ,
                            o.allocUnsafeSlow = function(t) {
                                return u(null, t)
                            }
                            ,
                            o.isBuffer = function(t) {
                                return !(null == t || !t._isBuffer)
                            }
                            ,
                            o.compare = function(t, e) {
                                if (!o.isBuffer(t) || !o.isBuffer(e))
                                    throw new TypeError("Arguments must be Buffers");
                                if (t === e)
                                    return 0;
                                for (var n = t.length, i = e.length, r = 0, a = Math.min(n, i); r < a; ++r)
                                    if (t[r] !== e[r]) {
                                        n = t[r],
                                            i = e[r];
                                        break
                                    }
                                return n < i ? -1 : i < n ? 1 : 0
                            }
                            ,
                            o.isEncoding = function(t) {
                                switch (String(t).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }
                            ,
                            o.concat = function(t, e) {
                                if (!X(t))
                                    throw new TypeError('"list" argument must be an Array of Buffers');
                                if (0 === t.length)
                                    return o.alloc(0);
                                var n;
                                if (void 0 === e)
                                    for (e = 0,
                                             n = 0; n < t.length; ++n)
                                        e += t[n].length;
                                var i = o.allocUnsafe(e)
                                    , r = 0;
                                for (n = 0; n < t.length; ++n) {
                                    var a = t[n];
                                    if (!o.isBuffer(a))
                                        throw new TypeError('"list" argument must be an Array of Buffers');
                                    a.copy(i, r),
                                        r += a.length
                                }
                                return i
                            }
                            ,
                            o.byteLength = g,
                            o.prototype._isBuffer = !0,
                            o.prototype.swap16 = function() {
                                var t = this.length;
                                if (t % 2 != 0)
                                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                                for (var e = 0; e < t; e += 2)
                                    v(this, e, e + 1);
                                return this
                            }
                            ,
                            o.prototype.swap32 = function() {
                                var t = this.length;
                                if (t % 4 != 0)
                                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                                for (var e = 0; e < t; e += 4)
                                    v(this, e, e + 3),
                                        v(this, e + 1, e + 2);
                                return this
                            }
                            ,
                            o.prototype.swap64 = function() {
                                var t = this.length;
                                if (t % 8 != 0)
                                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                                for (var e = 0; e < t; e += 8)
                                    v(this, e, e + 7),
                                        v(this, e + 1, e + 6),
                                        v(this, e + 2, e + 5),
                                        v(this, e + 3, e + 4);
                                return this
                            }
                            ,
                            o.prototype.toString = function() {
                                var t = 0 | this.length;
                                return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : y.apply(this, arguments)
                            }
                            ,
                            o.prototype.equals = function(t) {
                                if (!o.isBuffer(t))
                                    throw new TypeError("Argument must be a Buffer");
                                return this === t || 0 === o.compare(this, t)
                            }
                            ,
                            o.prototype.inspect = function() {
                                var t = ""
                                    , n = e.INSPECT_MAX_BYTES;
                                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                                this.length > n && (t += " ... ")),
                                "<Buffer " + t + ">"
                            }
                            ,
                            o.prototype.compare = function(t, e, n, i, r) {
                                if (!o.isBuffer(t))
                                    throw new TypeError("Argument must be a Buffer");
                                if (void 0 === e && (e = 0),
                                    void 0 === n && (n = t ? t.length : 0),
                                    void 0 === i && (i = 0),
                                    void 0 === r && (r = this.length),
                                    e < 0 || n > t.length || i < 0 || r > this.length)
                                    throw new RangeError("out of range index");
                                if (i >= r && e >= n)
                                    return 0;
                                if (i >= r)
                                    return -1;
                                if (e >= n)
                                    return 1;
                                if (e >>>= 0,
                                        n >>>= 0,
                                        i >>>= 0,
                                        r >>>= 0,
                                    this === t)
                                    return 0;
                                for (var a = r - i, s = n - e, l = Math.min(a, s), u = this.slice(i, r), h = t.slice(e, n), c = 0; c < l; ++c)
                                    if (u[c] !== h[c]) {
                                        a = u[c],
                                            s = h[c];
                                        break
                                    }
                                return a < s ? -1 : s < a ? 1 : 0
                            }
                            ,
                            o.prototype.includes = function(t, e, n) {
                                return -1 !== this.indexOf(t, e, n)
                            }
                            ,
                            o.prototype.indexOf = function(t, e, n) {
                                return w(this, t, e, n, !0)
                            }
                            ,
                            o.prototype.lastIndexOf = function(t, e, n) {
                                return w(this, t, e, n, !1)
                            }
                            ,
                            o.prototype.write = function(t, e, n, i) {
                                if (void 0 === e)
                                    i = "utf8",
                                        n = this.length,
                                        e = 0;
                                else if (void 0 === n && "string" == typeof e)
                                    i = e,
                                        n = this.length,
                                        e = 0;
                                else {
                                    if (!isFinite(e))
                                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    e |= 0,
                                        isFinite(n) ? (n |= 0,
                                        void 0 === i && (i = "utf8")) : (i = n,
                                            n = void 0)
                                }
                                var r = this.length - e;
                                if ((void 0 === n || n > r) && (n = r),
                                    t.length > 0 && (n < 0 || e < 0) || e > this.length)
                                    throw new RangeError("Attempt to write outside buffer bounds");
                                i || (i = "utf8");
                                for (var o = !1; ; )
                                    switch (i) {
                                        case "hex":
                                            return b(this, t, e, n);
                                        case "utf8":
                                        case "utf-8":
                                            return _(this, t, e, n);
                                        case "ascii":
                                            return B(this, t, e, n);
                                        case "latin1":
                                        case "binary":
                                            return T(this, t, e, n);
                                        case "base64":
                                            return k(this, t, e, n);
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return E(this, t, e, n);
                                        default:
                                            if (o)
                                                throw new TypeError("Unknown encoding: " + i);
                                            i = ("" + i).toLowerCase(),
                                                o = !0
                                    }
                            }
                            ,
                            o.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }
                        ;
                        var $ = 4096;
                        o.prototype.slice = function(t, e) {
                            var n = this.length;
                            t = ~~t,
                                e = void 0 === e ? n : ~~e,
                                t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                                e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                            e < t && (e = t);
                            var i;
                            if (o.TYPED_ARRAY_SUPPORT)
                                i = this.subarray(t, e),
                                    i.__proto__ = o.prototype;
                            else {
                                var r = e - t;
                                i = new o(r,void 0);
                                for (var a = 0; a < r; ++a)
                                    i[a] = this[a + t]
                            }
                            return i
                        }
                            ,
                            o.prototype.readUIntLE = function(t, e, n) {
                                t |= 0,
                                    e |= 0,
                                n || z(t, e, this.length);
                                for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256); )
                                    i += this[t + o] * r;
                                return i
                            }
                            ,
                            o.prototype.readUIntBE = function(t, e, n) {
                                t |= 0,
                                    e |= 0,
                                n || z(t, e, this.length);
                                for (var i = this[t + --e], r = 1; e > 0 && (r *= 256); )
                                    i += this[t + --e] * r;
                                return i
                            }
                            ,
                            o.prototype.readUInt8 = function(t, e) {
                                return e || z(t, 1, this.length),
                                    this[t]
                            }
                            ,
                            o.prototype.readUInt16LE = function(t, e) {
                                return e || z(t, 2, this.length),
                                this[t] | this[t + 1] << 8
                            }
                            ,
                            o.prototype.readUInt16BE = function(t, e) {
                                return e || z(t, 2, this.length),
                                this[t] << 8 | this[t + 1]
                            }
                            ,
                            o.prototype.readUInt32LE = function(t, e) {
                                return e || z(t, 4, this.length),
                                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                            }
                            ,
                            o.prototype.readUInt32BE = function(t, e) {
                                return e || z(t, 4, this.length),
                                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                            }
                            ,
                            o.prototype.readIntLE = function(t, e, n) {
                                t |= 0,
                                    e |= 0,
                                n || z(t, e, this.length);
                                for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256); )
                                    i += this[t + o] * r;
                                return r *= 128,
                                i >= r && (i -= Math.pow(2, 8 * e)),
                                    i
                            }
                            ,
                            o.prototype.readIntBE = function(t, e, n) {
                                t |= 0,
                                    e |= 0,
                                n || z(t, e, this.length);
                                for (var i = e, r = 1, o = this[t + --i]; i > 0 && (r *= 256); )
                                    o += this[t + --i] * r;
                                return r *= 128,
                                o >= r && (o -= Math.pow(2, 8 * e)),
                                    o
                            }
                            ,
                            o.prototype.readInt8 = function(t, e) {
                                return e || z(t, 1, this.length),
                                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                            }
                            ,
                            o.prototype.readInt16LE = function(t, e) {
                                e || z(t, 2, this.length);
                                var n = this[t] | this[t + 1] << 8;
                                return 32768 & n ? 4294901760 | n : n
                            }
                            ,
                            o.prototype.readInt16BE = function(t, e) {
                                e || z(t, 2, this.length);
                                var n = this[t + 1] | this[t] << 8;
                                return 32768 & n ? 4294901760 | n : n
                            }
                            ,
                            o.prototype.readInt32LE = function(t, e) {
                                return e || z(t, 4, this.length),
                                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                            }
                            ,
                            o.prototype.readInt32BE = function(t, e) {
                                return e || z(t, 4, this.length),
                                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                            }
                            ,
                            o.prototype.readFloatLE = function(t, e) {
                                return e || z(t, 4, this.length),
                                    Q.read(this, t, !0, 23, 4)
                            }
                            ,
                            o.prototype.readFloatBE = function(t, e) {
                                return e || z(t, 4, this.length),
                                    Q.read(this, t, !1, 23, 4)
                            }
                            ,
                            o.prototype.readDoubleLE = function(t, e) {
                                return e || z(t, 8, this.length),
                                    Q.read(this, t, !0, 52, 8)
                            }
                            ,
                            o.prototype.readDoubleBE = function(t, e) {
                                return e || z(t, 8, this.length),
                                    Q.read(this, t, !1, 52, 8)
                            }
                            ,
                            o.prototype.writeUIntLE = function(t, e, n, i) {
                                if (t = +t,
                                        e |= 0,
                                        n |= 0,
                                        !i) {
                                    O(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                                }
                                var r = 1
                                    , o = 0;
                                for (this[e] = 255 & t; ++o < n && (r *= 256); )
                                    this[e + o] = t / r & 255;
                                return e + n
                            }
                            ,
                            o.prototype.writeUIntBE = function(t, e, n, i) {
                                if (t = +t,
                                        e |= 0,
                                        n |= 0,
                                        !i) {
                                    O(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                                }
                                var r = n - 1
                                    , o = 1;
                                for (this[e + r] = 255 & t; --r >= 0 && (o *= 256); )
                                    this[e + r] = t / o & 255;
                                return e + n
                            }
                            ,
                            o.prototype.writeUInt8 = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 1, 255, 0),
                                o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                                    this[e] = 255 & t,
                                e + 1
                            }
                            ,
                            o.prototype.writeUInt16LE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 2, 65535, 0),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                                        this[e + 1] = t >>> 8) : M(this, t, e, !0),
                                e + 2
                            }
                            ,
                            o.prototype.writeUInt16BE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 2, 65535, 0),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                                        this[e + 1] = 255 & t) : M(this, t, e, !1),
                                e + 2
                            }
                            ,
                            o.prototype.writeUInt32LE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 4, 4294967295, 0),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                                        this[e + 2] = t >>> 16,
                                        this[e + 1] = t >>> 8,
                                        this[e] = 255 & t) : W(this, t, e, !0),
                                e + 4
                            }
                            ,
                            o.prototype.writeUInt32BE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 4, 4294967295, 0),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                                        this[e + 1] = t >>> 16,
                                        this[e + 2] = t >>> 8,
                                        this[e + 3] = 255 & t) : W(this, t, e, !1),
                                e + 4
                            }
                            ,
                            o.prototype.writeIntLE = function(t, e, n, i) {
                                if (t = +t,
                                        e |= 0,
                                        !i) {
                                    var r = Math.pow(2, 8 * n - 1);
                                    O(this, t, e, n, r - 1, -r)
                                }
                                var o = 0
                                    , a = 1
                                    , s = 0;
                                for (this[e] = 255 & t; ++o < n && (a *= 256); )
                                    t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                                        this[e + o] = (t / a >> 0) - s & 255;
                                return e + n
                            }
                            ,
                            o.prototype.writeIntBE = function(t, e, n, i) {
                                if (t = +t,
                                        e |= 0,
                                        !i) {
                                    var r = Math.pow(2, 8 * n - 1);
                                    O(this, t, e, n, r - 1, -r)
                                }
                                var o = n - 1
                                    , a = 1
                                    , s = 0;
                                for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
                                    t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                                        this[e + o] = (t / a >> 0) - s & 255;
                                return e + n
                            }
                            ,
                            o.prototype.writeInt8 = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 1, 127, -128),
                                o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                                t < 0 && (t = 255 + t + 1),
                                    this[e] = 255 & t,
                                e + 1
                            }
                            ,
                            o.prototype.writeInt16LE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 2, 32767, -32768),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                                        this[e + 1] = t >>> 8) : M(this, t, e, !0),
                                e + 2
                            }
                            ,
                            o.prototype.writeInt16BE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 2, 32767, -32768),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                                        this[e + 1] = 255 & t) : M(this, t, e, !1),
                                e + 2
                            }
                            ,
                            o.prototype.writeInt32LE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 4, 2147483647, -2147483648),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                                        this[e + 1] = t >>> 8,
                                        this[e + 2] = t >>> 16,
                                        this[e + 3] = t >>> 24) : W(this, t, e, !0),
                                e + 4
                            }
                            ,
                            o.prototype.writeInt32BE = function(t, e, n) {
                                return t = +t,
                                    e |= 0,
                                n || O(this, t, e, 4, 2147483647, -2147483648),
                                t < 0 && (t = 4294967295 + t + 1),
                                    o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                                        this[e + 1] = t >>> 16,
                                        this[e + 2] = t >>> 8,
                                        this[e + 3] = 255 & t) : W(this, t, e, !1),
                                e + 4
                            }
                            ,
                            o.prototype.writeFloatLE = function(t, e, n) {
                                return j(this, t, e, !0, n)
                            }
                            ,
                            o.prototype.writeFloatBE = function(t, e, n) {
                                return j(this, t, e, !1, n)
                            }
                            ,
                            o.prototype.writeDoubleLE = function(t, e, n) {
                                return H(this, t, e, !0, n)
                            }
                            ,
                            o.prototype.writeDoubleBE = function(t, e, n) {
                                return H(this, t, e, !1, n)
                            }
                            ,
                            o.prototype.copy = function(t, e, n, i) {
                                if (n || (n = 0),
                                    i || 0 === i || (i = this.length),
                                    e >= t.length && (e = t.length),
                                    e || (e = 0),
                                    i > 0 && i < n && (i = n),
                                    i === n)
                                    return 0;
                                if (0 === t.length || 0 === this.length)
                                    return 0;
                                if (e < 0)
                                    throw new RangeError("targetStart out of bounds");
                                if (n < 0 || n >= this.length)
                                    throw new RangeError("sourceStart out of bounds");
                                if (i < 0)
                                    throw new RangeError("sourceEnd out of bounds");
                                i > this.length && (i = this.length),
                                t.length - e < i - n && (i = t.length - e + n);
                                var r, a = i - n;
                                if (this === t && n < e && e < i)
                                    for (r = a - 1; r >= 0; --r)
                                        t[r + e] = this[r + n];
                                else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                                    for (r = 0; r < a; ++r)
                                        t[r + e] = this[r + n];
                                else
                                    Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
                                return a
                            }
                            ,
                            o.prototype.fill = function(t, e, n, i) {
                                if ("string" == typeof t) {
                                    if ("string" == typeof e ? (i = e,
                                            e = 0,
                                            n = this.length) : "string" == typeof n && (i = n,
                                            n = this.length),
                                        1 === t.length) {
                                        var r = t.charCodeAt(0);
                                        r < 256 && (t = r)
                                    }
                                    if (void 0 !== i && "string" != typeof i)
                                        throw new TypeError("encoding must be a string");
                                    if ("string" == typeof i && !o.isEncoding(i))
                                        throw new TypeError("Unknown encoding: " + i)
                                } else
                                    "number" == typeof t && (t &= 255);
                                if (e < 0 || this.length < e || this.length < n)
                                    throw new RangeError("Out of range index");
                                if (n <= e)
                                    return this;
                                e >>>= 0,
                                    n = void 0 === n ? this.length : n >>> 0,
                                t || (t = 0);
                                var a;
                                if ("number" == typeof t)
                                    for (a = e; a < n; ++a)
                                        this[a] = t;
                                else {
                                    var s = o.isBuffer(t) ? t : Y(new o(t,i).toString())
                                        , l = s.length;
                                    for (a = 0; a < n - e; ++a)
                                        this[a + e] = s[a % l]
                                }
                                return this
                            }
                        ;
                        var tt = /[^+\/0-9A-Za-z-_]/g
                    }
                ).call(e, n(42))
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    var e = t.length;
                    if (e % 4 > 0)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
                }
                function r(t) {
                    return 3 * t.length / 4 - i(t)
                }
                function o(t) {
                    var e, n, r, o, a, s, l = t.length;
                    a = i(t),
                        s = new c(3 * l / 4 - a),
                        r = a > 0 ? l - 4 : l;
                    var u = 0;
                    for (e = 0,
                             n = 0; e < r; e += 4,
                             n += 3)
                        o = h[t.charCodeAt(e)] << 18 | h[t.charCodeAt(e + 1)] << 12 | h[t.charCodeAt(e + 2)] << 6 | h[t.charCodeAt(e + 3)],
                            s[u++] = o >> 16 & 255,
                            s[u++] = o >> 8 & 255,
                            s[u++] = 255 & o;
                    return 2 === a ? (o = h[t.charCodeAt(e)] << 2 | h[t.charCodeAt(e + 1)] >> 4,
                        s[u++] = 255 & o) : 1 === a && (o = h[t.charCodeAt(e)] << 10 | h[t.charCodeAt(e + 1)] << 4 | h[t.charCodeAt(e + 2)] >> 2,
                        s[u++] = o >> 8 & 255,
                        s[u++] = 255 & o),
                        s
                }
                function a(t) {
                    return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
                }
                function s(t, e, n) {
                    for (var i, r = [], o = e; o < n; o += 3)
                        i = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2],
                            r.push(a(i));
                    return r.join("")
                }
                function l(t) {
                    for (var e, n = t.length, i = n % 3, r = "", o = [], a = 0, l = n - i; a < l; a += 16383)
                        o.push(s(t, a, a + 16383 > l ? l : a + 16383));
                    return 1 === i ? (e = t[n - 1],
                        r += u[e >> 2],
                        r += u[e << 4 & 63],
                        r += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
                        r += u[e >> 10],
                        r += u[e >> 4 & 63],
                        r += u[e << 2 & 63],
                        r += "="),
                        o.push(r),
                        o.join("")
                }
                e.byteLength = r,
                    e.toByteArray = o,
                    e.fromByteArray = l;
                for (var u = [], h = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, p = f.length; d < p; ++d)
                    u[d] = f[d],
                        h[f.charCodeAt(d)] = d;
                h["-".charCodeAt(0)] = 62,
                    h["_".charCodeAt(0)] = 63
            }
            , function(t, e) {
                e.read = function(t, e, n, i, r) {
                    var o, a, s = 8 * r - i - 1, l = (1 << s) - 1, u = l >> 1, h = -7, c = n ? r - 1 : 0, f = n ? -1 : 1, d = t[e + c];
                    for (c += f,
                             o = d & (1 << -h) - 1,
                             d >>= -h,
                             h += s; h > 0; o = 256 * o + t[e + c],
                             c += f,
                             h -= 8)
                        ;
                    for (a = o & (1 << -h) - 1,
                             o >>= -h,
                             h += i; h > 0; a = 256 * a + t[e + c],
                             c += f,
                             h -= 8)
                        ;
                    if (0 === o)
                        o = 1 - u;
                    else {
                        if (o === l)
                            return a ? NaN : 1 / 0 * (d ? -1 : 1);
                        a += Math.pow(2, i),
                            o -= u
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - i)
                }
                    ,
                    e.write = function(t, e, n, i, r, o) {
                        var a, s, l, u = 8 * o - r - 1, h = (1 << u) - 1, c = h >> 1, f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : o - 1, p = i ? 1 : -1, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                        for (e = Math.abs(e),
                                 isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
                                     a = h) : (a = Math.floor(Math.log(e) / Math.LN2),
                                 e * (l = Math.pow(2, -a)) < 1 && (a--,
                                     l *= 2),
                                     e += a + c >= 1 ? f / l : f * Math.pow(2, 1 - c),
                                 e * l >= 2 && (a++,
                                     l /= 2),
                                     a + c >= h ? (s = 0,
                                         a = h) : a + c >= 1 ? (s = (e * l - 1) * Math.pow(2, r),
                                         a += c) : (s = e * Math.pow(2, c - 1) * Math.pow(2, r),
                                         a = 0)); r >= 8; t[n + d] = 255 & s,
                                 d += p,
                                 s /= 256,
                                 r -= 8)
                            ;
                        for (a = a << r | s,
                                 u += r; u > 0; t[n + d] = 255 & a,
                                 d += p,
                                 a /= 256,
                                 u -= 8)
                            ;
                        t[n + d - p] |= 128 * m
                    }
            }
            , function(t, e) {
                var n = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == n.call(t)
                }
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , l = n(11)
                    , u = i(l)
                    , h = n(15)
                    , c = i(h)
                    , f = function() {
                    function t(e) {
                        r(this, t),
                            this.element = e,
                            this.data = this.getDataFromElement(e),
                            this.data.android = c.default.isAndroid() && c.default.isMobile(),
                            this.data.ios = c.default.isIOS() && c.default.isMobile()
                    }
                    return s(t, [{
                        key: "getDataFromElement",
                        value: function(t) {
                            var e = {};
                            return e.oaid = t.getAttribute("data-oaid"),
                                e.cover = t.getAttribute("data-cover"),
                                e.width = t.getAttribute("data-width"),
                                e.height = t.getAttribute("data-height"),
                                e.article = t.getAttribute("data-article"),
                            e.color || (e.color = "yes"),
                            (!e.article || e.article < 0 || e.article > 5) && (e.article = 3),
                            e.width || e.height || (e.width = "500px",
                                e.height = "628px"),
                            (e.width <= 200 || e.height <= 365) && (e.width = "195px",
                                e.height = "365px"),
                            (e.width >= 500 || e.height >= 622) && (e.width = "500px",
                                e.height = "628px"),
                                e.domain = document.domain,
                                e
                        }
                    }, {
                        key: "validate",
                        value: function() {
                            return !!this.data.oaid || (console.warn("[Zalo Social Plugin]", "The follow button have no data-oaid attribute"),
                                !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.validate() && (this.iframe = document.createElement("iframe"),
                                this.iframe.frameBorder = 0,
                                this.iframe.allowFullscreen = "true",
                                this.iframe.scrolling = "yes",
                                this.element.style.overflow = "hidden",
                                this.element.style.display = "inline-block",
                                this.iframe.width = this.data.width,
                                this.iframe.height = this.data.height,
                                this.element.innerHTML = "",
                                this.iframe.src = "https://sp.zalo.me/plugins/follow" + u.default.jsonToQueryString(this.data),
                                this.element.appendChild(this.iframe))
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.iframe.contentWindow.postMessage("zfollow_reload", "https://sp.zalo.me")
                        }
                    }]),
                        t
                }();
                e.default = f
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , l = n(11)
                    , u = i(l)
                    , h = function() {
                    function t(e, n) {
                        r(this, t),
                            this.element = e,
                            this.data = this.getDataFromElement(e),
                            this.data.id = n,
                            this.receiveMessage = this.receiveMessage.bind(this)
                    }
                    return s(t, [{
                        key: "checkInAppZalo",
                        value: function() {
                            for (var t = location.hostname + "_znid", e = document.cookie.split(";"), n = "", i = 0; i < e.length; i++) {
                                var r = e[i].split("=");
                                r[0] === t && (n = r[1])
                            }
                            "" !== n && this.iframe.contentWindow.postMessage({
                                cmd: "inapp_cookie",
                                data: {
                                    key: t,
                                    data: n
                                }
                            }, "https://sp.zalo.me")
                        }
                    }, {
                        key: "getDataFromElement",
                        value: function(t) {
                            var e = {};
                            return e.oaid = t.getAttribute("data-oaid"),
                                e.style = t.getAttribute("data-style"),
                                e.customize = t.getAttribute("data-customize"),
                                e.callback = t.getAttribute("data-callback"),
                                e.customize ? "false" === e.customize ? e.customize = !1 : e.customize = !0 : e.customize = !1,
                                e.domain = document.domain,
                                e
                        }
                    }, {
                        key: "validate",
                        value: function() {
                            return this.data.oaid ? (this.data.style || (this.data.style = "blue"),
                                !0) : (console.warn("[Zalo Social Plugin]", "The follow button have no data-oaid attribute"),
                                !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.validate() && (this.iframe = document.createElement("iframe"),
                                this.iframe.frameBorder = 0,
                                this.iframe.allowFullscreen = "true",
                                this.iframe.scrolling = "no",
                                this.element.style.overflow = "hidden",
                                this.element.style.display = "inline-block",
                                this.iframe.width = "102px",
                                this.iframe.height = "35px",
                                this.data.customize ? (this.element.style.position = "relative",
                                    this.iframe.width = this.element.scrollWidth,
                                    this.iframe.height = this.element.scrollHeight,
                                    this.iframe.style.position = "absolute",
                                    this.iframe.style.opacity = "0.000000000000001",
                                    this.iframe.style.left = "0px",
                                    this.iframe.style.top = "0px") : this.element.innerHTML = "",
                                this.iframe.onload = function() {
                                    t.checkInAppZalo()
                                }
                                ,
                                this.iframe.src = "https://sp.zalo.me/plugins/follow_only" + u.default.jsonToQueryString(this.data),
                                this.element.appendChild(this.iframe),
                                window.addEventListener("message", this.receiveMessage))
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.iframe.contentWindow.postMessage("zfollowonly_reload", "https://sp.zalo.me")
                        }
                    }, {
                        key: "receiveMessage",
                        value: function(t) {
                            t.data && "follow_success" === t.data.cmd && t.data.id === this.data.id.hex && window[this.data.callback] && window[this.data.callback]({
                                data: 1,
                                userId: t.data.uid
                            })
                        }
                    }]),
                        t
                }();
                e.default = h
            }
            , function(t, e, n) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(1)
                    , a = i(o)
                    , s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    a.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , l = n(15)
                    , u = i(l)
                    , h = n(11)
                    , c = i(h)
                    , f = function() {
                    function t(e) {
                        r(this, t),
                            this.element = e,
                            this.data = this.getDataFromElement(e),
                            this.data.android = u.default.isAndroid() && u.default.isMobile(),
                            this.data.ios = u.default.isIOS() && u.default.isMobile()
                    }
                    return s(t, [{
                        key: "getDataFromElement",
                        value: function(t) {
                            var e = {};
                            return e.link = t.getAttribute("data-href"),
                                e.size = t.getAttribute("data-size"),
                                e.appId = t.getAttribute("data-appid"),
                                e
                        }
                    }, {
                        key: "validate",
                        value: function(t) {
                            return t.link ? (t.size || console.warn("[Zalo Social Plugin]", "The comment frame have not data-zie attribute"),
                                !0) : (console.error("[Zalo Social Plugin]", "The comment frame have no data-href attribute"),
                                !1)
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("zcomment_reload", "https://sp.zalo.me")
                        }
                    }, {
                        key: "resizeParent",
                        value: function(t) {
                            document.getElementsByClassName("zalo-comment-plugin")[0].style.height = t + "px"
                        }
                    }, {
                        key: "getTopParentBody",
                        value: function() {
                            this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage({
                                cmd: "open_modal_confirm_comment",
                                top: this.element.getBoundingClientRect().top
                            }, "*")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.validate(this.data) && (this.iframe = document.createElement("iframe"),
                                this.iframe.frameBorder = 0,
                                this.iframe.allowFullscreen = "true",
                                this.iframe.scrolling = "false",
                                this.iframe.height = "100%",
                                this.iframe.width = "100%",
                                this.element.style.display = "block",
                                this.element.innerHTML = "",
                                this.iframe.src = "https://sp.zalo.me/plugins/comment" + c.default.jsonToQueryString(this.data),
                                this.element.appendChild(this.iframe))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            null != this.iframe && this.iframe.remove(),
                            null != this.element && this.element.removeEventListener("zcomment_reload", this.onButtonClick)
                        }
                    }, {
                        key: "getIframe",
                        get: function() {
                            return this.iframe
                        }
                    }]),
                        t
                }();
                e.default = f
            }
            , function(t, e) {
                function n() {}
                function i(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t
                }
                n.maxFromBits = function(t) {
                    return Math.pow(2, t)
                }
                    ,
                    n.limitUI04 = n.maxFromBits(4),
                    n.limitUI06 = n.maxFromBits(6),
                    n.limitUI08 = n.maxFromBits(8),
                    n.limitUI12 = n.maxFromBits(12),
                    n.limitUI14 = n.maxFromBits(14),
                    n.limitUI16 = n.maxFromBits(16),
                    n.limitUI32 = n.maxFromBits(32),
                    n.limitUI40 = n.maxFromBits(40),
                    n.limitUI48 = n.maxFromBits(48),
                    n.randomUI04 = function() {
                        return i(0, n.limitUI04 - 1)
                    }
                    ,
                    n.randomUI06 = function() {
                        return i(0, n.limitUI06 - 1)
                    }
                    ,
                    n.randomUI08 = function() {
                        return i(0, n.limitUI08 - 1)
                    }
                    ,
                    n.randomUI12 = function() {
                        return i(0, n.limitUI12 - 1)
                    }
                    ,
                    n.randomUI14 = function() {
                        return i(0, n.limitUI14 - 1)
                    }
                    ,
                    n.randomUI16 = function() {
                        return i(0, n.limitUI16 - 1)
                    }
                    ,
                    n.randomUI32 = function() {
                        return i(0, n.limitUI32 - 1)
                    }
                    ,
                    n.randomUI40 = function() {
                        return (0 | Math.random() * (1 << 30)) + (0 | 1024 * Math.random()) * (1 << 30)
                    }
                    ,
                    n.randomUI48 = function() {
                        return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30)
                    }
                    ,
                    n.paddedString = function(t, e, n) {
                        t = String(t),
                            n = n || "0";
                        for (var i = e - t.length; i > 0; i >>>= 1,
                            n += n)
                            1 & i && (t = n + t);
                        return t
                    }
                    ,
                    n.prototype.fromParts = function(t, e, i, r, o, a) {
                        return this.version = i >> 12 & 15,
                            this.hex = n.paddedString(t.toString(16), 8) + "-" + n.paddedString(e.toString(16), 4) + "-" + n.paddedString(i.toString(16), 4) + "-" + n.paddedString(r.toString(16), 2) + n.paddedString(o.toString(16), 2) + "-" + n.paddedString(a.toString(16), 12),
                            this
                    }
                    ,
                    n.prototype.toString = function() {
                        return this.hex
                    }
                    ,
                    n.prototype.toURN = function() {
                        return "urn:uuid:" + this.hex
                    }
                    ,
                    n.prototype.toBytes = function() {
                        for (var t = this.hex.split("-"), e = [], n = 0, i = 0; i < t.length; i++)
                            for (var r = 0; r < t[i].length; r += 2)
                                e[n++] = parseInt(t[i].substr(r, 2), 16);
                        return e
                    }
                    ,
                    n.prototype.equals = function(t) {
                        return t instanceof UUID && this.hex === t.hex
                    }
                    ,
                    n.getTimeFieldValues = function(t) {
                        var e = t - Date.UTC(1582, 9, 15)
                            , n = e / 4294967296 * 1e4 & 268435455;
                        return {
                            low: 1e4 * (268435455 & e) % 4294967296,
                            mid: 65535 & n,
                            hi: n >>> 16,
                            timestamp: e
                        }
                    }
                    ,
                    n._create4 = function() {
                        return (new n).fromParts(n.randomUI32(), n.randomUI16(), 16384 | n.randomUI12(), 128 | n.randomUI06(), n.randomUI08(), n.randomUI48())
                    }
                    ,
                    n._create1 = function() {
                        var t = (new Date).getTime()
                            , e = n.randomUI14()
                            , i = 1099511627776 * (1 | n.randomUI08()) + n.randomUI40()
                            , r = n.randomUI04()
                            , o = 0;
                        t != o ? (t < o && e++,
                            o = t,
                            r = n.randomUI04()) : Math.random() < .25 && r < 9984 ? r += 1 + n.randomUI04() : e++;
                        var a = n.getTimeFieldValues(o)
                            , s = a.low + r
                            , l = 4095 & a.hi | 4096;
                        e &= 16383;
                        var u = e >>> 8 | 128
                            , h = 255 & e;
                        return (new n).fromParts(s, a.mid, l, u, h, i)
                    }
                    ,
                    n.create = function(t) {
                        return t = t || 4,
                            this["_create" + t]()
                    }
                    ,
                    n.fromTime = function(t, e) {
                        e = e || !1;
                        var i = n.getTimeFieldValues(t)
                            , r = i.low
                            , o = 4095 & i.hi | 4096;
                        return !1 === e ? (new n).fromParts(r, i.mid, o, 0, 0, 0) : (new n).fromParts(r, i.mid, o, 128 | n.limitUI06, n.limitUI08 - 1, n.limitUI48 - 1)
                    }
                    ,
                    n.firstFromTime = function(t) {
                        return n.fromTime(t, !1)
                    }
                    ,
                    n.lastFromTime = function(t) {
                        return n.fromTime(t, !0)
                    }
                    ,
                    n.fromURN = function(t) {
                        var e;
                        return (e = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(t)) ? (new n).fromParts(parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), parseInt(e[4], 16), parseInt(e[5], 16), parseInt(e[6], 16)) : null
                    }
                    ,
                    n.fromBytes = function(t) {
                        if (t.length < 5)
                            return null;
                        for (var e = "", i = 0, r = [4, 2, 2, 2, 6], o = 0; o < r.length; o++) {
                            for (var a = 0; a < r[o]; a++) {
                                var s = t[i++].toString(16);
                                1 == s.length && (s = "0" + s),
                                    e += s
                            }
                            6 !== r[o] && (e += "-")
                        }
                        return n.fromURN(e)
                    }
                    ,
                    n.fromBinary = function(t) {
                        for (var e = [], i = 0; i < t.length; i++)
                            if (e[i] = t.charCodeAt(i),
                                e[i] > 255 || e[i] < 0)
                                throw new Error("Unexpected byte in binary data.");
                        return n.fromBytes(e)
                    }
                    ,
                    n.new = function() {
                        return this.create(4)
                    }
                    ,
                    n.newTS = function() {
                        return this.create(1)
                    }
                    ,
                    t.exports = n
            }
            , function(t, e, n) {
                "use strict";
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(1)
                    , o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r)
                    , a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value"in i && (i.writable = !0),
                                (0,
                                    o.default)(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                }()
                    , s = function() {
                    function t() {
                        i(this, t)
                    }
                    return a(t, null, [{
                        key: "loadFile",
                        value: function(t, e) {
                            var n = null;
                            "js" == e ? (n = document.createElement("script"),
                                n.setAttribute("type", "text/javascript"),
                                n.setAttribute("src", t)) : "css" == e && (n = document.createElement("link"),
                                n.setAttribute("rel", "stylesheet"),
                                n.setAttribute("type", "text/css"),
                                n.setAttribute("href", t)),
                            void 0 !== n && document.body.appendChild(n)
                        }
                    }]),
                        t
                }();
                e.default = s
            }
        ])
    });

} catch (e) {
    get("https://sp.zalo.me/tracking/log?error=" + encodeURIComponent(e) + "&data=InitSDK");
    throw new Error(e);
}

<!-- Utils -->
function get(url) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}
<!-- End Utils -->

var _zap = _zap || [];
_zap.push(["_setAccount", "ZA-43317204427353"]);
(function(e, t, n, r, a, o, c) {
        e[a + "_q"] = e[a + "_q"] || [],
            e[a] = e[a] || {};
        let s = ["trackPageview", "trackEvent", "getVisitorID"];
        for (let i in s)
            e[a][s[i]] = function(t) {
                return function() {
                    e[a + "_q"].push([t, arguments])
                }
                    ;
            }(s[i]);
        o = t.createElement(n),
            c = t.getElementsByTagName(n)[0],
            o.async = 1,
            o.src = r + "?" + Math.floor((new Date).getTime() / 86400000),
            c.parentNode.insertBefore(o, c);
    }
)(window, document, "script", "//stc.za.zaloapp.com/v3/za.js", "ZA");
