(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [4], {
        "/0+H": function(e, t, i) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = o, t.useAmp = function() {
                return o(n.default.useContext(a.AmpStateContext))
            };
            var r, n = (r = i("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = i("lwAK");

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    i = void 0 !== t && t,
                    r = e.hybrid,
                    n = void 0 !== r && r,
                    a = e.hasQuery,
                    o = void 0 !== a && a;
                return i || n && o
            }
        },
        "8Kt/": function(e, t, i) {
            "use strict";
            i("lSNA");
            t.__esModule = !0, t.defaultHead = d, t.default = void 0;
            var r, n = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var i = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, n) : null;
                            a && (a.get || a.set) ? Object.defineProperty(i, n, a) : i[n] = e[n]
                        }
                    i.default = e, t && t.set(e, i);
                    return i
                }(i("q1tI")),
                a = (r = i("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                o = i("lwAK"),
                s = i("FYa8"),
                c = i("/0+H");

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [n.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(n.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function g(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === n.default.Fragment ? e.concat(n.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var h = ["name", "httpEquiv", "charSet", "itemProp"];

            function u(e, t) {
                return e.reduce((function(e, t) {
                    var i = n.default.Children.toArray(t.props.children);
                    return e.concat(i)
                }), []).reduce(g, []).reverse().concat(d(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        i = new Set,
                        r = {};
                    return function(n) {
                        var a = !0;
                        if (n.key && "number" !== typeof n.key && n.key.indexOf("$") > 0) {
                            var o = n.key.slice(n.key.indexOf("$") + 1);
                            e.has(o) ? a = !1 : e.add(o)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                t.has(n.type) ? a = !1 : t.add(n.type);
                                break;
                            case "meta":
                                for (var s = 0, c = h.length; s < c; s++) {
                                    var l = h[s];
                                    if (n.props.hasOwnProperty(l))
                                        if ("charSet" === l) i.has(l) ? a = !1 : i.add(l);
                                        else {
                                            var d = n.props[l],
                                                g = r[l] || new Set;
                                            g.has(d) ? a = !1 : (g.add(d), r[l] = g)
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function(e, t) {
                    var i = e.key || t;
                    return n.default.cloneElement(e, {
                        key: i
                    })
                }))
            }

            function v(e) {
                var t = e.children,
                    i = (0, n.useContext)(o.AmpStateContext),
                    r = (0, n.useContext)(s.HeadManagerContext);
                return n.default.createElement(a.default, {
                    reduceComponentsToState: u,
                    headManager: r,
                    inAmpMode: (0, c.isInAmpMode)(i)
                }, t)
            }
            v.rewind = function() {};
            var p = v;
            t.default = p
        },
        Bnag: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        EbDI: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        Ijbi: function(e, t, i) {
            var r = i("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        RIqP: function(e, t, i) {
            var r = i("Ijbi"),
                n = i("EbDI"),
                a = i("ZhPi"),
                o = i("Bnag");
            e.exports = function(e) {
                return r(e) || n(e) || a(e) || o()
            }
        },
        TSYQ: function(e, t, i) {
            var r;
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function n() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var a = typeof r;
                            if ("string" === a || "number" === a) e.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var o = n.apply(null, r);
                                o && e.push(o)
                            } else if ("object" === a)
                                for (var s in r) i.call(r, s) && r[s] && e.push(s)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 === (r = function() {
                    return n
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        Xuae: function(e, t, i) {
            "use strict";
            var r = i("RIqP"),
                n = i("lwsE"),
                a = i("W8MJ"),
                o = (i("PJYZ"), i("7W2i")),
                s = i("a1gu"),
                c = i("Nsbk");

            function l(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var i, r = c(e);
                    if (t) {
                        var n = c(this).constructor;
                        i = Reflect.construct(r, arguments, n)
                    } else i = r.apply(this, arguments);
                    return s(this, i)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var d = i("q1tI"),
                g = function(e) {
                    o(i, e);
                    var t = l(i);

                    function i(e) {
                        var a;
                        return n(this, i), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function() {
                            a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                    }
                    return a(i, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), i
                }(d.Component);
            t.default = g
        },
        YFqc: function(e, t, i) {
            e.exports = i("cTJO")
        },
        cTJO: function(e, t, i) {
            "use strict";
            var r = i("J4zp"),
                n = i("284h");
            t.__esModule = !0, t.default = void 0;
            var a = n(i("q1tI")),
                o = i("elyg"),
                s = i("nOHt"),
                c = i("vNVm"),
                l = {};

            function d(e, t, i, r) {
                if ((0, o.isLocalURL)(t)) {
                    e.prefetch(t, i, r).catch((function(e) {
                        0
                    }));
                    var n = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    l[t + "%" + i + (n ? "%" + n : "")] = !0
                }
            }
            var g = function(e) {
                var t = !1 !== e.prefetch,
                    i = (0, s.useRouter)(),
                    n = i && i.pathname || "/",
                    g = a.default.useMemo((function() {
                        var t = (0, o.resolveHref)(n, e.href, !0),
                            i = r(t, 2),
                            a = i[0],
                            s = i[1];
                        return {
                            href: a,
                            as: e.as ? (0, o.resolveHref)(n, e.as) : s || a
                        }
                    }), [n, e.href, e.as]),
                    h = g.href,
                    u = g.as,
                    v = e.children,
                    p = e.replace,
                    m = e.shallow,
                    b = e.scroll,
                    f = e.locale;
                "string" === typeof v && (v = a.default.createElement("a", null, v));
                var w = a.Children.only(v),
                    j = w && "object" === typeof w && w.ref,
                    x = (0, c.useIntersection)({
                        rootMargin: "200px"
                    }),
                    O = r(x, 2),
                    y = O[0],
                    k = O[1],
                    C = a.default.useCallback((function(e) {
                        y(e), j && ("function" === typeof j ? j(e) : "object" === typeof j && (j.current = e))
                    }), [j, y]);
                (0, a.useEffect)((function() {
                    var e = k && t && (0, o.isLocalURL)(h),
                        r = "undefined" !== typeof f ? f : i && i.locale,
                        n = l[h + "%" + u + (r ? "%" + r : "")];
                    e && !n && d(i, h, u, {
                        locale: r
                    })
                }), [u, h, k, f, t, i]);
                var M = {
                    ref: C,
                    onClick: function(e) {
                        w.props && "function" === typeof w.props.onClick && w.props.onClick(e), e.defaultPrevented || function(e, t, i, r, n, a, s, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && (0, o.isLocalURL)(i)) && (e.preventDefault(), null == s && (s = r.indexOf("#") < 0), t[n ? "replace" : "push"](i, r, {
                                shallow: a,
                                locale: c
                            }).then((function(e) {
                                e && s && (window.scrollTo(0, 0), document.body.focus())
                            })))
                        }(e, i, h, u, p, m, b, f)
                    },
                    onMouseEnter: function(e) {
                        (0, o.isLocalURL)(h) && (w.props && "function" === typeof w.props.onMouseEnter && w.props.onMouseEnter(e), d(i, h, u, {
                            priority: !0
                        }))
                    }
                };
                return (e.passHref || "a" === w.type && !("href" in w.props)) && (M.href = (0, o.addBasePath)((0, o.addLocale)(u, "undefined" !== typeof f ? f : i && i.locale, i && i.defaultLocale))), a.default.cloneElement(w, M)
            };
            t.default = g
        },
        gHPf: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i("nKUr"),
                n = i("nhGL"),
                a = i("vOnD"),
                o = a.c.div.withConfig({
                    displayName: "Container__StyledContainer",
                    componentId: "aqws3c-0"
                })(["max-width:87.656vw;width:100%;height:100%;margin:0 auto;padding:0 6.25vw;position:relative;", "{max-width:100%;padding:0 24px;box-sizing:border-box;}"], n.a.mobile),
                s = function(e) {
                    var t = e.className,
                        i = e.children;
                    return Object(r.jsx)(o, {
                        className: t,
                        children: i
                    })
                };
            s.defaultProps = {
                className: ""
            };
            var c = s,
                l = i("z/o8"),
                d = i("Haw6"),
                g = i("q1tI"),
                h = i.n(g),
                u = a.c.div.withConfig({
                    displayName: "Audience__StyledAudience",
                    componentId: "sc-1re02g8-0"
                })(["padding-top:20.625vw;padding-bottom:8.938vw;overflow:hidden;box-sizing:border-box;", "{padding-top:30.625vw;padding-bottom:12.267vw;}> div > .title{font-weight:bold;font-size:4.688vw;line-height:5.469vw;text-align:center;color:var(--white);margin:0 auto 15.156vw;max-width:63.047vw;", "{font-size:9.6vw;line-height:12.267vw;margin-bottom:64.267vw;max-width:100%;}img{width:2.5vw;height:2.5vw;vertical-align:middle;", "{width:4.8vw;height:4.8vw;}}}.content-wrapper{position:relative;", "{width:calc(100% + (5.867vw * 2));left:-5.867vw;}.back-img{width:100%;height:54.688vw;position:relative;img{object-fit:contain;}", "{width:277.829vw;height:173.333vw;left:-88vw;}}.big-title{font-weight:bold;font-size:7.813vw;line-height:7.813vw;max-width:33.125vw;color:var(--white);position:absolute;left:12.109vw;top:13.984vw;z-index:2;", "{font-size:18.667vw;line-height:20vw;left:10.4vw;top:37.867vw;}}.big-circle{width:39.844vw;height:39.844vw;position:absolute;top:6.953vw;left:17.188vw;z-index:1;", "{width:114.667vw;height:114.667vw;top:12.8vw;left:30.133vw;}}.small-circle{width:3.566vw;height:3.566vw;", "{width:12.171vw;height:12.171vw;}}.info{font-weight:bold;font-size:2.344vw;line-height:2.734vw;color:var(--white);max-width:14.219vw;display:block;position:absolute;top:23.672vw;left:61.328vw;opacity:0;transform:translateY(2vw);", "{font-size:8vw;line-height:9.333vw;max-width:48.533vw;top:138.4vw;left:41.333vw;transform:translateY(4vw);}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                v = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useState)(),
                        a = i[0],
                        o = i[1],
                        s = Object(g.useState)(!1),
                        h = s[0],
                        v = s[1],
                        p = Object(g.useRef)(),
                        m = Object(g.useRef)(),
                        b = Object(g.useRef)(),
                        f = Object(g.useRef)();
                    return Object(g.useEffect)((function() {
                        var e = function() {
                            o(window.innerWidth < n.b.mobile)
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e),
                            function() {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                    }), []), Object(g.useEffect)((function() {
                        h || v(!0)
                    }), [h]), Object(g.useEffect)((function() {
                        void 0 !== a && h && t && l.b.to(m.current, {
                            runBackwards: !a,
                            duration: .4,
                            motionPath: {
                                path: p.current,
                                align: p.current,
                                alignOrigin: [.5, .5],
                                start: a ? 1 : 1.2,
                                end: a ? 2 : 2.3
                            },
                            scrollTrigger: {
                                scroller: t,
                                trigger: "#audience-content-wrapper",
                                scrub: .3,
                                start: a ? "top top" : "top center",
                                onUpdate: function(e) {
                                    var t = e.progress;
                                    a ? t > .23 && l.b.to(f.current, {
                                        autoAlpha: 1,
                                        y: 0
                                    }) : t > .28 && l.b.to(f.current, {
                                        autoAlpha: 1,
                                        y: 0
                                    })
                                }
                            }
                        })
                    }), [h, a, t]), Object(g.useEffect)((function() {
                        t && (d.a.create({
                            scroller: t,
                            trigger: "#audience-section",
                            animation: l.b.timeline().fadeIn("#audience-section .title").from("#audience-section .title img", {
                                rotateY: 360,
                                duration: 1
                            }),
                            start: "top+=200 center"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#audience-section #audience-content-wrapper",
                            animation: l.b.timeline().fadeIn("#audience-section #audience-content-wrapper .big-title"),
                            start: "top+=150 center"
                        }))
                    }), [t]), Object(r.jsx)(u, {
                        id: "audience-section",
                        children: Object(r.jsxs)(c, {
                            children: [Object(r.jsxs)("h4", {
                              className: "title",
                                children: ["About Me -", Object(r.jsx)("br", {}), " My Name is Alexshcer.", Object(r.jsx)("br", {}), " ", Object(r.jsx)("span", {
                                    children: " I am From United States."
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "content-wrapper",
                                id: "audience-content-wrapper",
                                children: [Object(r.jsx)("div", {
                                    className: "back-img",
                                    ref: b,
                                    children: Object(r.jsxs)("picture", {
                                        children: [Object(r.jsx)("source", {
                                            srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/audience/back.webp",
                                            type: "image/webp"
                                        }), Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/audience/back.png",
                                            loading: "eager",
                                            draggable: !1,
                                            alt: "Audience"
                                        })]
                                    })
                                }), Object(r.jsx)("p", {
                                    className: "big-title",
                                    children: "I Like Learning New Things"
                                }), Object(r.jsx)("svg", {
                                    className: "big-circle",
                                    viewBox: "0 0 512 512",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: Object(r.jsx)("path", {
                                        ref: p,
                                        d: "M256 1C115.172 1 1 115.161 1 256C1 396.839 115.161 511 256 511C396.828 511 511 396.839 511 256C511 115.161 396.828 1 256 1Z",
                                        stroke: "#EC5076",
                                        strokeWidth: "2",
                                        strokeMiterlimit: "10"
                                    })
                                }), Object(r.jsx)("svg", {
                                    className: "small-circle",
                                    ref: m,
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: Object(r.jsx)("path", {
                                        d: "M23.8176 1C11.2162 1 1 11.2152 1 23.8176C1 36.42 11.2152 46.6352 23.8176 46.6352C36.419 46.6352 46.6352 36.42 46.6352 23.8176C46.6352 11.2152 36.419 1 23.8176 1Z",
                                        stroke: "#8D44FF",
                                        strokeWidth: "2",
                                        strokeMiterlimit: "10"
                                    })
                                }), Object(r.jsx)("span", {
                                    className: "info",
                                    ref: f,
                                    children: "And Making new Softwares"
                                })]
                            })]
                        })
                    })
                },
                p = a.c.div.withConfig({
                    displayName: "Explorers__StyledExplorers",
                    componentId: "sc-1my2t7b-0"
                })(["position:relative;padding-top:26.953vw;padding-bottom:28.594vw;box-sizing:border-box;overflow:hidden;", "{padding-top:60.267vw;padding-bottom:64.533vw;}> div:not(.image-wrapper){z-index:1;", "{padding-right:0;}.title{font-size:4.688vw;line-height:5.469vw;font-weight:bold;color:var(--white);max-width:59.375vw;margin:0 0 0 7.344vw;", "{font-size:6.933vw;line-height:10.133vw;max-width:100%;margin-left:0;}span{color:var(--green);}img{width:2.5vw;height:2.5vw;", "{width:3.733vw;height:3.733vw;}}}}.image-wrapper{width:74.531vw;height:45.938vw;position:absolute;bottom:19.297vw;right:-12.304vw;overflow:hidden;img{object-fit:contain;}", "{width:154.4vw;height:95.2vw;bottom:38.297vw;right:unset;left:5vw;}}.icon-eye-wrapper{position:absolute;top:6.5vw;right:11.934vw;", "{top:27.5vw;right:13.419vw;}svg{width:13.066vw;height:10.438vw;path{&.open{opacity:0;}&.close{transform:translate(0,0.5vw);}}", "{width:35.381vw;height:25.6vw;}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                m = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useRef)(),
                        n = Object(g.useRef)(),
                        a = Object(g.useRef)(),
                        o = Object(g.useRef)(),
                        s = Object(g.useRef)(l.b.timeline({
                            defaults: {
                                duration: .4,
                                ease: "back.out(1)"
                            }
                        }));
                    return Object(g.useEffect)((function() {
                        t && (d.a.create({
                            scroller: t,
                            trigger: "#explorers-sections",
                            animation: l.b.timeline().fadeIn("#explorers-sections .title"),
                            start: "#explorers-sections-=100"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#explorers-sections",
                            animation: l.b.timeline().from("#explorers-sections .title img", {
                                rotate: -80,
                                duration: 1
                            }),
                            start: "center center+=100"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#explorers-sections",
                            scrub: .6,
                            start: "#explorers-sections-=100",
                            end: "#explorers-sections",
                            animation: s.current.from(i.current, {
                                yPercent: 30,
                                autoAlpha: 0,
                                duration: 1,
                                ease: "linear"
                            }, 0).to(a.current, {
                                autoAlpha: 1,
                                duration: .1
                            }, 0).to(o.current, {
                                autoAlpha: 0,
                                duration: .1
                            }, 0)
                        }))
                    }), [t]), Object(r.jsxs)(p, {
                        id: "explorers-sections",
                        children: [Object(r.jsx)(c, {
                            children: Object(r.jsxs)("h2", {
                                className: "title",
                                children: ["I am still expl", Object(r.jsx)("img", {
                                    src: "images/explorers/compass.svg",
                                    alt: "Compass"
                                }), "ring the world of ", Object(r.jsx)("span", {
                                    children: "Computer Languages."
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "image-wrapper",
                            ref: i,
                            children: Object(r.jsxs)("picture", {
                                children: [Object(r.jsx)("source", {
                                    srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/explorers/audience.webp",
                                    type: "image/webp"
                                }), Object(r.jsx)("img", {
                                    src: "file:///D:/IMP%20FILES/My_projects/website/images/explorers/audience.png",
                                    loading: "eager",
                                    draggable: !1,
                                    alt: "Audience"
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "icon-eye-wrapper",
                            children: Object(r.jsxs)("svg", {
                                width: "171",
                                height: "135",
                                viewBox: "0 0 171 135",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                ref: n,
                                children: [Object(r.jsx)("path", {
                                    className: "closed",
                                    d: "M87 121V134M31.8995 102.707L22.7071 111.899M141.707 101.293L150.899 110.485M169.236 61.5C157.688 26.3668 124.615 1 85.6178 1C46.6204 1 13.5477 26.3668 2 61.5C13.5477 96.6332 46.6204 122 85.6178 122C124.615 122 157.688 96.6332 169.236 61.5Z",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    ref: o
                                }), Object(r.jsx)("path", {
                                    className: "open",
                                    d: "M84.236 13.0001V0M139.337 31.293L148.529 22.1006M29.5287 32.7073L20.3363 23.5148M169.24 73.106C157.692 37.9719 124.618 12.6044 85.62 12.6044C46.6216 12.6044 13.548 37.9719 2 73.106C13.548 108.24 46.6216 133.608 85.62 133.608C124.618 133.608 157.692 108.24 169.24 73.106ZM52.0013 73.106C52.0013 91.608 67.0001 106.607 85.5021 106.607C104.004 106.607 119.003 91.608 119.003 73.106C119.003 54.604 104.004 39.6051 85.5021 39.6051C67.0001 39.6051 52.0013 54.604 52.0013 73.106Z",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    ref: a
                                })]
                            })
                        })]
                    })
                },
                b = a.c.div.withConfig({
                    displayName: "Hero__StyledHero",
                    componentId: "xht3kd-0"
                })(["height:62.5vw;width:100%;position:relative;overflow:hidden;top:-6.641vw;&:before{content:'';height:100%;width:100%;background:url('file:///D:/IMP%20FILES/My_projects/website/images/hero/noise.gif') repeat;position:absolute;top:0;left:0;opacity:0.6;z-index:-2;}&:after{content:'';height:100%;width:100%;position:absolute;top:0;left:0;background:linear-gradient(35deg,black 50%,#262626);opacity:0.9;z-index:-1;}", "{height:177.867vw;top:-13.333vw;}.content-wrapper{&:after{content:'';height:3vw;width:100%;position:absolute;left:0;bottom:0;box-shadow:0 0 100px 100px var(--black);z-index:2;background:var(--black);", "{bottom:-2vw;}}", "{box-sizing:border-box;}h1{font-size:4.688vw;line-height:5.469vw;font-weight:bold;color:var(--white);padding:21.328vw 0 0 7.344vw;margin:0;visibility:hidden;", "{font-size:9.067vw;line-height:12.8vw;padding:67.4vw 0 0 0;}br{", "{&:first-child{display:none;}}}span{color:var(--green);}}.polygon-wrapper{position:absolute;left:35.742vw;top:5.983vw;display:flex;align-items:center;", "{left:21.467vw;top:28.792vw;}.polygon{width:9.258vw;height:10.69vw;z-index:1;visibility:hidden;", "{width:23.6vw;height:27.483vw;}}.square{width:8.359vw;height:8.359vw;position:relative;left:-3.906vw;visibility:hidden;", "{width:22.667vw;height:22.667vw;left:-11.733vw;}}}.arrow-wrapper{position:absolute;right:8.984vw;top:13.281vw;display:flex;align-items:flex-start;", "{right:-7.467vw;top:45.333vw;}.arrow{width:7.578vw;height:7.578vw;position:relative;top:4.297vw;right:-4.531vw;z-index:1;visibility:hidden;", "{width:21.867vw;height:21.867vw;top:12.533vw;right:-13.333vw;}}.circle{width:8.984vw;height:8.984vw;visibility:hidden;", "{width:26.133vw;height:26.133vw;}}}.zigzagpath-wrapper{position:absolute;right:0;bottom:13.906vw;opacity:0;", "{bottom:18vw;overflow:hidden;position:relative;width:calc(100% + (5.867vw * 2));left:-5.867vw;}.zigzag{width:73.75vw;height:21.016vw;z-index:1;position:relative;", "{width:178.4vw;height:61.067vw;left:-77vw;}.dashed{stroke-width:1.67px;stroke:#07f2b4;stroke-miterlimit:10;stroke-dasharray:5,5;}#mask{stroke-width:3px;stroke:#07f2b4;}}.triangle{width:21.375vw;height:21.375vw;position:absolute;top:3.195vw;left:24.5vw;", "{width:56.792vw;height:56.792vw;top:11.195vw;left:22.717vw;}}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.desktop, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                f = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useRef)(),
                        n = Object(g.useRef)(),
                        a = Object(g.useRef)(),
                        o = Object(g.useRef)(),
                        s = Object(g.useRef)(),
                        d = Object(g.useRef)(),
                        h = Object(g.useRef)(),
                        u = Object(g.useRef)(),
                        v = Object(g.useRef)();
                    return Object(g.useEffect)((function() {
                        l.b.timeline().to(n.current, {
                            x: 0,
                            yPercent: "random(2, 10)",
                            repeat: -1,
                            duration: 2,
                            yoyo: !0,
                            ease: "sine.out"
                        }, 0).to(a.current, {
                            x: 0,
                            yPercent: "random(2, 10)",
                            repeat: -1,
                            duration: 2,
                            yoyo: !0,
                            ease: "sine.out"
                        }, 1).to(o.current, {
                            x: 0,
                            yPercent: "random(2, 10)",
                            repeat: -1,
                            duration: 2,
                            yoyo: !0,
                            ease: "sine.out"
                        }, .3).to(s.current, {
                            x: 0,
                            yPercent: "random(2, 10)",
                            repeat: -1,
                            duration: 2,
                            yoyo: !0,
                            ease: "sine.out"
                        }, 1.5)
                    }), []), Object(g.useEffect)((function() {
                        t && (i.current = l.b.timeline({
                            defaults: {
                                duration: .4,
                                ease: "linear",
                                stagger: .25
                            }
                        }), i.current.set(".mask01", {
                            drawSVG: "100% 100%"
                        }).fadeIn(n.current, "<".concat(.2)).fadeIn(a.current, "<".concat(.2)).fadeIn(o.current, "<".concat(.2)).fadeIn(s.current, "<".concat(.2)).from("#hero-section .title", {
                            x: -50,
                            autoAlpha: 0,
                            duration: 2,
                            ease: "back.out(2)"
                        }).to(h.current, {
                            opacity: 1,
                            duration: 1
                        }, "<".concat(.2)).from(d.current, {
                            opacity: 0,
                            duration: 1.7,
                            drawSVG: "100% 100%"
                        }, "<").to(v.current, {
                            y: 0,
                            opacity: 1
                        }, "<".concat(.2)).to(".dashed, .mask01", {
                            attr: {
                                d: "M945 1L674.42 270L561.635 157.863L448.839 270L336.042 157.863L223.247 270L110.461 157.863L1 266.674"
                            }
                        }).to(".mask01", {
                            opacity: 1,
                            drawSVG: "100%",
                            duration: 1.5
                        }, "<".concat(.2)).to(d.current, {
                            duration: 2,
                            drawSVG: "0% 0%"
                        }, "<").to(".dashed", {
                            repeat: -1,
                            strokeDashoffset: 20,
                            duration: .4
                        }, ">"), i.current.to(v.current, {
                            yPercent: 30,
                            scrollTrigger: {
                                trigger: "#hero-section",
                                scrub: !0,
                                start: "top top",
                                scroller: t
                            }
                        }))
                    }), [t]), Object(r.jsx)(b, {
                        id: "hero-section",
                        children: Object(r.jsx)(c, {
                            children: Object(r.jsxs)("div", {
                                className: "content-wrapper",
                                children: [Object(r.jsxs)("div", {
                                    className: "polygon-wrapper",
                                    children: [Object(r.jsx)("img", {
                                        className: "polygon",
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/hero/polygon.svg",
                                        alt: "Polygon figure",
                                        ref: n,
                                        loading: "eager",
                                        draggable: !1
                                    }), Object(r.jsx)("img", {
                                        className: "square",
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/hero/square.svg",
                                        alt: "Square figure",
                                        ref: a,
                                        loading: "eager",
                                        draggable: !1
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "arrow-wrapper",
                                    children: [Object(r.jsx)("img", {
                                        className: "arrow",
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/hero/arrow.svg",
                                        alt: "Arrow figure",
                                        ref: o,
                                        loading: "eager",
                                        draggable: !1
                                    }), Object(r.jsx)("img", {
                                        className: "circle",
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/hero/circle.svg",
                                        alt: "Circle figure",
                                        ref: s,
                                        loading: "eager",
                                        draggable: !1
                                    })]
                                }), Object(r.jsxs)("h1", {
                                    className: "title",
                                    children: ["Hey,", Object(r.jsx)("br", {}), " I am Alexshcer,", Object(r.jsx)("br", {}), " ", Object(r.jsx)("span", {
                                        children: " Still A Learning Developer."
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "zigzagpath-wrapper",
                                    ref: h,
                                    children: [Object(r.jsxs)("svg", {
                                        className: "zigzag",
                                        viewBox: "0 0 938 272",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [Object(r.jsx)("path", {
                                            d: "M945 1L674.42 270L561.635 157.863L448.839 270L336.042 157.863L223.247 270L110.461 157.863L1 266.674",
                                            stroke: "#07F2B4",
                                            strokeWidth: "1.67",
                                            strokeMiterlimit: "10",
                                            ref: d
                                        }), Object(r.jsx)("mask", {
                                            id: "mask",
                                            children: Object(r.jsx)("path", {
                                                className: "mask mask01",
                                                d: "M945 1L674.42 270L561.635 157.863L448.839 270L336.042 157.863L223.247 270L110.461 157.863L1 266.674"
                                            })
                                        }), Object(r.jsx)("path", {
                                            className: "dashed",
                                            d: "M945 1L674.42 270L561.635 157.863L448.839 270L336.042 157.863L223.247 270L110.461 157.863L1 266.674",
                                            strokeLinecap: "round",
                                            fill: "transparent",
                                            mask: "url(#mask)",
                                            ref: u
                                        })]
                                    }), Object(r.jsxs)("picture", {
                                        children: [Object(r.jsx)("source", {
                                            srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/hero/triangle.webp",
                                            type: "image/webp"
                                        }), Object(r.jsx)("img", {
                                            className: "triangle",
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/hero/triangle.png",
                                            alt: "Triangle figure",
                                            ref: v,
                                            draggable: !1
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                };

            function w() {
                return (w = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = h.a.createElement("path", {
                    d: "M4.038 5.977H.297v12.024h3.741V5.977zM2.168 4.334a2.166 2.166 0 11-.003-4.335 2.166 2.166 0 01.003 4.335zM18.034 18.002h-3.737v-5.847c0-1.394-.024-3.188-1.942-3.188-1.945 0-2.241 1.52-2.241 3.088v5.947H6.382V5.977h3.582v1.644h.051c.498-.945 1.718-1.942 3.536-1.942 3.784 0 4.483 2.49 4.483 5.728v6.595z",
                    fill: "currentColor"
                }),
                x = function(e) {
                    return h.a.createElement("svg", w({
                        viewBox: "0 0 19 19",
                        fill: "none"
                    }, e), j)
                };

            function O() {
                return (O = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = h.a.createElement("path", {
                    d: "M19.8 3.236s-.196-1.47-.795-2.117c-.76-.85-1.613-.854-2.004-.903C14.202 0 10.004 0 10.004 0h-.008S5.797 0 2.999.216c-.392.05-1.243.054-2.004.903C.395 1.766.2 3.236.2 3.236S0 4.962 0 6.687v1.618c0 1.726.2 3.452.2 3.452s.195 1.47.795 2.117c.76.85 1.76.822 2.205.911C4.8 14.95 10 15 10 15s4.203-.007 7.001-.223c.39-.05 1.243-.054 2.004-.903.6-.647.795-2.116.795-2.116s.2-1.726.2-3.453V6.687c0-1.725-.2-3.451-.2-3.451zm-11.865 7.03V4.274l5.404 3.006-5.404 2.986z",
                    fill: "currentColor"
                }),
                k = function(e) {
                    return h.a.createElement("svg", O({
                        viewBox: "0 0 20 15",
                        fill: "none"
                    }, e), y)
                };

            function C() {
                return (C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var M = h.a.createElement("path", {
                    d: "",
                    fill: "currentColor"
                }),
                z = function(e) {
                    return h.a.createElement("svg", C({
                        viewBox: "0 0 240 25",
                        fill: "none"
                    }, e), M)
                },
                N = i("YFqc"),
                L = i.n(N),
                S = a.c.footer.withConfig({
                    displayName: "Footer__StyledFooter",
                    componentId: "l6pmc3-0"
                })(["padding-top:5.938vw;padding-bottom:7.813vw;background-color:var(--black);overflow:hidden;", "{padding-top:14.933vw;padding-bottom:19.733vw;}> div{display:grid;grid-template-columns:1fr minmax(22.5vw,auto) minmax(11.016vw,auto);grid-gap:7.109vw;justify-content:flex-end;", "{grid-template-columns:100%;grid-gap:0;}.first-column{display:flex;flex-direction:column;justify-content:space-between;justify-self:flex-start;.logo-wrapper{width:18.695vw;height:1.886vw;position:relative;margin-bottom:2.723vw;display:block;svg{color:var(--gray);transition:var(--transition);&:hover{color:white;}}", "{width:63.811vw;height:6.437vw;margin-bottom:9.829vw;}}}.copyright{font-size:1.094vw;color:var(--gray);", "{font-size:3.733vw;}}.design-by-disruptive{font-size:1.094vw;color:var(--gray);display:block;a{color:inherit;&:active,&:hover{color:var(--white);transition:var(--transition);}&:focus{color:inherit;}}", "{font-size:3.733vw;}}.second-column{display:flex;flex-direction:column;justify-content:space-between;.direction{font-size:1.094vw;line-height:2.5;color:var(--gray);", "{font-size:3.733vw;}span{font-weight:900;}}.icons-wrapper{display:flex;align-items:flex-end;margin-top:3.672vw;", "{margin-top:11.467vw;}.linkedin-wrapper{width:1.409vw;height:1.406vw;position:relative;svg{color:gray;transition:var(--transition);&:focus,&:hover{color:var(--white);}}", "{width:4.8vw;height:4.8vw;}}.youtube-wrapper{width:1.563vw;height:1.172vw;position:relative;margin-left:1.953vw;svg{color:gray;transition:var(--transition);&:focus,&:hover{color:var(--white);}}", "{width:5.333vw;height:4vw;margin-left:6.667vw;}}}}.third-column{display:flex;flex-direction:column;justify-content:space-between;", "{flex-direction:row;margin-top:17.333vw;}a{font-size:1.094vw;line-height:2.5;display:block;color:var(--gray);&:active,&:hover{color:var(--white);transition:var(--transition);}&:focus{color:inherit;}", "{font-size:3.733vw;}}span{font-size:1.094vw;line-height:2.5;color:var(--gray);font-weight:900;", "{font-size:3.733vw;}}}> div{&.hide-desktop{", "{display:flex !important;flex-direction:row;justify-content:space-between;margin-top:14.4vw;}}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                H = function() {
                    return Object(r.jsx)(S, {
                        id: "footer",
                        children: Object(r.jsxs)(c, {
                            children: [Object(r.jsxs)("div", {
                                className: "first-column",
                                children: [Object(r.jsxs)("div", {
                                    children: [Object(r.jsx)(L.a, {
                                        href: "/",
                                        children: Object(r.jsx)("a", {
                                            className: "logo-wrapper",
                                            "aria-label": "Alexshcer",
                                            children: Object(r.jsx)(z, {})
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "Copyright hide-mobile",
                                        children: "Copyright\xa9 2021 Alexshcer"
                                    })]
                                }), Object(r.jsxs)("p", {
                                    className: "Design By Alexshcer hide-mobile",
                                    children: ["Design by", " ", Object(r.jsx)("a", {
                                        href: "https://adityajha.xyz/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Alexshcer",
                                        children: "Alexshcer"
                                    })]
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "second-column",
                                children: [Object(r.jsx)("div", {
                                    children: Object(r.jsxs)("p", {
                                        className: "direction",
                                        children: ["This Is My Personal Website", Object(r.jsx)("br", {}), "All Operations are Managed by Alexshcer", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                            children: "Copyrighted Content"
                                        }), " Usage of this content is ", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                            children: "Not Allowed"
                                        }), " Without Prior Permission."]
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "icons-wrapper",
                                    children: [Object(r.jsx)("a","img", {
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/services/github.svg",
                                        href: "https://github.com/AdityaXJha",
                                        className: "linkedin-wrapper",
                                        "aria-label": "Github",
                                        children: Object(r.jsx)(x, {})
                                    }), Object(r.jsx)("a","img", {
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/services/twitter.svg",
                                        href: "https://twitter.com/AdityaXJha",
                                        className: "youtube-wrapper",
                                        "aria-label": "Twitter",
                                        children: Object(r.jsx)(k, {})
                                    })]
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "third-column",
                                children: [Object(r.jsxs)("div", {
                                    children: [Object(r.jsx)("a", {
                                        href: "https://github.com/AdityaXJha",
                                        "aria-label": "Github",
                                        children: "Github"
                                    }), Object(r.jsx)("a", {
                                        href: "https://twitter.com/AdityaXJha",
                                        "aria-label": "Twitter",
                                        children: "Twitter"
                                    })]
                                }), Object(r.jsxs)("div", {
                                    children: [Object(r.jsx)("span", {
                                        children: "Contact:"
                                    }), Object(r.jsx)("a", {
                                        href: "mailto:aditya@adityajha..xyz",
                                        "aria-label": "aditya@adityajha..xyz",
                                        children: "aditya@adityajha.xyz"

                                    })]
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "hide-desktop",
                                children: [Object(r.jsx)("span", {
                                    className: "Copyright",
                                    children: "\xa9 2021 Alexshcer"
                                }), Object(r.jsxs)("p", {
                                    className: "Design-By-Alexshcer",
                                    children: ["Design by", " ", Object(r.jsx)("a", {
                                        href: "https://adityajha.xyz/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Alexshcer",
                                        children: "Alexshcer"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                A = i("8Kt/"),
                V = i.n(A),
                R = function(e) {
                    var t = e.title;
                    return Object(r.jsxs)(V.a, {
                        children: [Object(r.jsxs)("title", {
                            children: ["Alexshcer ", t && "- ".concat(t)]
                        }), Object(r.jsx)("meta", {
                            name: "description",
                            content: "Hey, I am Alexshcer, Still A Learning Developer."
                        }), Object(r.jsx)("meta", {
                            property: "og:title",
                            content: "Alexshcer"
                        }), Object(r.jsx)("meta", {
                            property: "og:description",
                            content: "Hey, I am Alexshcer, Still A Learning Developer."
                        }), Object(r.jsx)("meta", {
                            property: "og:image",
                            content: "/og.gif"
                        }), Object(r.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/gif"
                        }), Object(r.jsx)("meta", {
                            property: "og:image:width",
                            content: "256"
                        }), Object(r.jsx)("meta", {
                            property: "og:image:height",
                            content: "256"
                        }), Object(r.jsx)("meta", {
                            property: "og:url",
                            content: "https://adityajha.xyz"
                        }), Object(r.jsx)("meta", {
                            property: "og:site_name",
                            content: "Alexshcer"
                        }), Object(r.jsx)("meta", {
                            name: "viewport",
                            content: "minimum-scale=1, initial-scale=1, width=device-width"
                        }), Object(r.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.png"
                        })]
                    })
                };
            R.defaultProps = {
                title: ""
            };
            var E = R,
                P = i("N32P"),
                I = a.c.header.withConfig({
                    displayName: "Header__StyledHeader",
                    componentId: "sc-8eou18-0"
                })(["background-color:var(--transparent);width:100%;height:6.641vw;z-index:4;position:relative;", "{height:13.333vw;}.logo-wrapper{width:18.672vw;height:1.875vw;position:relative;visibility:hidden;", "{width:42.4vw;height:4.267vw;}}a{font-weight:bold;font-size:1.953vw;line-height:2.5vw;color:var(--white);position:relative;visibility:hidden;", "{font-size:4.267vw;line-height:5.333vw;}&:hover{&:after{width:100%;}}&:after{content:'';display:block;position:absolute;bottom:-0.2vw;width:0;height:2px;background-color:#fff;transition:var(--transition);}}"], n.a.mobile, n.a.mobile, n.a.mobile),
                T = Object(a.c)(c).withConfig({
                    displayName: "Header__StyledContainer",
                    componentId: "sc-8eou18-1"
                })(["display:flex;justify-content:space-between;align-items:center;"]),
                _ = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useRef)();
                    return Object(g.useEffect)((function() {
                        l.b.timeline().fadeIn("#header .logo-wrapper", {
                            autoAlpha: 1
                        }).fadeIn("#header a", {
                            autoAlpha: 1
                        })
                    }), []), Object(P.a)("entered", (function() {
                        if (t && i.current) {
                            var e = l.b.to(i.current, {
                                yPercent: "-=100",
                                duration: .5,
                                ease: "power2.in",
                                paused: !0
                            });
                            d.a.create({
                                endTrigger: "#footer",
                                pin: !0,
                                pinSpacing: !1,
                                end: 0,
                                scroller: t,
                                trigger: i.current,
                                onEnter: function() {
                                    return e.reverse()
                                },
                                onUpdate: function(t) {
                                    var r = t.progress,
                                        n = t.direction,
                                        a = t.isActive;
                                    r > .002 ? l.b.to(i.current, {
                                        backgroundColor: "var(--black)"
                                    }) : l.b.to(i.current, {
                                        backgroundColor: "var(--transparent)"
                                    }), -1 === n && e.reverse(), (1 === n || 1 === n && !0 === a) && e.play()
                                }
                            })
                        }
                    }), [t]), Object(r.jsx)(I, {
                        id: "header",
                        ref: i,
                        children: Object(r.jsxs)(T, {
                            children: [Object(r.jsx)("div", {
                                className: "logo-wrapper",
                                children: Object(r.jsx)("img", {
                                    src: "file:///D:/IMP%20FILES/My_projects/website/images/logo.svg",
                                    draggable: !1,
                                    alt: "Alexshcer logo"
                                })
                            }), Object(r.jsx)("a", {
                                href: "mailto:aditya@adityajha.xyz",
                                "aria-label": "Say Hello",
                                children: "Say Hello"
                            })]
                        })
                    })
                },
                Z = function(e) {
                    var t = e.children,
                        i = e.scrollContainer;
                    return Object(r.jsx)("section", {
                        id: "scroll",
                        children: Object(r.jsxs)("div", {
                            className: "scroll__container",
                            id: "scroll-container",
                            children: [Object(r.jsx)(E, {}), Object(r.jsx)(_, {
                                scrollContainer: i
                            }), t, Object(r.jsx)(H, {})]
                        })
                    })
                },
                B = a.c.a.withConfig({
                    displayName: "CTA__StyledCta",
                    componentId: "hfng8y-0"
                })((function(e) {
                    return Object(a.b)(["font-weight:bold;color:var(--green);height:1.218vw;position:relative;display:flex;align-items:center;", " ", " img{width:1.218vw;height:1.055vw;position:relative;right:0.2vw;user-select:none;", " ", "{width:4.157vw;height:3.6vw;right:0.7vw;}}svg{width:2.697vw;height:1.218vw;margin-left:1vw;", " ", " ", "{width:13.2vw;height:4.157vw;margin-left:3.096vw;}}"], "primary" === e.type && Object(a.b)(["justify-content:center;width:21.182vw;height:6.484vw;font-size:2.813vw;line-height:3.594vw;background:var(--black);border:none;transition:var(--transition);", "{width:72.301vw !important;height:22.133vw;font-size:9.6vw;line-height:12.267vw;}", "{&:hover{width:23.516vw;}}&:focus,&:active{opacity:0.6;}"], n.a.mobile, n.a.desktop), "secondary" === e.type && Object(a.b)(["font-size:1.172vw;", "{font-size:4vw;}"], n.a.mobile), "primary" === e.type && Object(a.b)(["margin-top:0.6vw;", "{margin-top:2vw;}"], n.a.mobile), n.a.mobile, "primary" === e.type && Object(a.b)(["margin-top:0.6vw;", "{margin-top:2vw;}"], n.a.mobile), "secondary" === e.type && Object(a.b)(["margin-left:0.5vw;", "{margin-left:1vw;}"], n.a.mobile), n.a.mobile)
                })),
                D = function(e) {
                    var t = e.className,
                        i = e.type,
                        a = e.label,
                        o = e.href,
                        s = Object(g.useState)(),
                        c = s[0],
                        d = s[1],
                        h = Object(g.useRef)(),
                        u = Object(g.useRef)(),
                        v = Object(g.useRef)(),
                        p = Object(g.useRef)(l.b.timeline({
                            paused: !0,
                            defaults: {
                                duration: .3,
                                ease: "linear"
                            }
                        }));
                    return Object(g.useEffect)((function() {
                        var e = function() {
                            d(window.innerWidth < n.b.tablet)
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e),
                            function() {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                    }), []), Object(g.useEffect)((function() {
                        if (!c) {
                            var e = p.current.to(h.current.children[0], {
                                    width: "5.423vw",
                                    attr: {
                                        viewBox: "0 0 72 3"
                                    }
                                }, 0).to(u.current, {
                                    morphSVG: {
                                        shape: v.current
                                    }
                                }, 0),
                                t = function() {
                                    e.play()
                                },
                                i = function() {
                                    e.reverse()
                                };
                            return h.current.addEventListener("mouseenter", t), h.current.addEventListener("mouseleave", i),
                                function() {
                                    h.current.removeEventListener("mouseenter", t), h.current.removeEventListener("mouseleave", i)
                                }
                        }
                        return null
                    }), [c]), Object(r.jsxs)(B, {
                        className: t,
                        href: o,
                        type: i,
                        ref: h,
                        children: [a, Object(r.jsxs)("svg", {
                            fill: "none",
                            viewBox: "0 0 36 2",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [Object(r.jsx)("path", {
                                d: "M72 1.79053L0 1.79053",
                                stroke: "#07F2B4",
                                strokeWidth: "2",
                                ref: v,
                                hidden: !0
                            }), Object(r.jsx)("path", {
                                d: "M36 1L0 1",
                                stroke: "#07F2B4",
                                strokeWidth: "2",
                                ref: u
                            })]
                        }), Object(r.jsx)("img", {
                            src: "file:///D:/IMP%20FILES/My_projects/website/images/arrow-head.svg",
                            alt: "Arrow head",
                            draggable: !1
                        })]
                    })
                };
            D.defaultProps = {
                className: ""
            };
            var F = D,
                W = a.c.div.withConfig({
                    displayName: "PreFooter__StyledPreFooter",
                    componentId: "lhg443-0"
                })(["height:27.344vw;background-color:var(--green);overflow:hidden;position:relative;", "{height:124.8vw;}.figures{position:absolute;right:0;top:0;width:58.68vw;height:38.594vw;", "{top:unset;bottom:10.667vw;left:0;right:0;width:100%;height:86.667vw;}}> div{display:flex;align-items:center;justify-content:space-between;", "{justify-content:center;flex-direction:column;}}.title{font-size:3.516vw;line-height:4.297vw;", "{font-size:6.933vw;line-height:10.133vw;margin-bottom:12.533vw;}}.cta-section{> p{font-size:1.563vw;line-height:4.297vw;color:var(--white);font-weight:900;", "{font-size:4.8vw;line-height:14.667vw;}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                q = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useState)(),
                        a = i[0],
                        o = i[1],
                        s = Object(g.useRef)(),
                        h = Object(g.useRef)(),
                        u = Object(g.useRef)(l.b.timeline({
                            defaults: {
                                duration: .2,
                                ease: "power2.in"
                            }
                        }));
                    return Object(g.useEffect)((function() {
                        var e = function() {
                            o(window.innerWidth < n.b.mobile)
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e),
                            function() {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                    }), []), Object(g.useEffect)((function() {
                        t && (a ? u.current.to(h.current, {
                            yPercent: 50,
                            scroller: t,
                            scrollTrigger: {
                                trigger: "#press-section",
                                scrub: !0,
                                start: "top center"
                            }
                        }) : u.current.to(s.current, {
                            yPercent: -15,
                            scrollTrigger: {
                                scroller: t,
                                trigger: "#press-section",
                                scrub: !0,
                                start: "top center"
                            }
                        }))
                    }), [h, a, t]), Object(g.useEffect)((function() {
                        t && d.a.create({
                            scroller: t,
                            trigger: "#prefooter-section",
                            animation: l.b.timeline().fadeIn("#prefooter-section .title").from("#prefooter-section .cta-section", {
                                opacity: 0,
                                stagger: .3,
                                yPercent: 20
                            }),
                            start: "top center"
                        })
                    }), [t]), Object(r.jsxs)(W, {
                        id: "prefooter-section",
                        children: [Object(r.jsx)("img", {
                            className: "figures hide-desktop",
                            src: "file:///D:/IMP%20FILES/My_projects/website/images/prefooter/figures-mobile.svg",
                            ref: h,
                            draggable: !1,
                            alt: "Figures"
                        }), Object(r.jsx)("img", {
                            className: "figures hide-mobile",
                            src: "file:///D:/IMP%20FILES/My_projects/website/images/prefooter/figures-desktop.svg",
                            ref: s,
                            draggable: !1,
                            alt: "Figures"
                        }), Object(r.jsxs)(c, {
                            children: [Object(r.jsx)("div", {
                                children: Object(r.jsxs)("p", {
                                    className: "title",
                                    children: [Object(r.jsx)("strong", {
                                        children: "Wanna Work With Me"
                                    }), Object(r.jsx)("br", {}), " Want to Talk to me?"]
                                })
                            }), Object(r.jsxs)("div", {
                                className: "cta-section",
                                children: [Object(r.jsx)("p", {
                                    children: "ARE YOU READY?"
                                }), Object(r.jsx)(F, {
                                    type: "primary",
                                    label: "Let\u2019s talk",
                                    href: "mailto:aditya@adityajha.xyz"
                                })]
                            })]
                        })]
                    })
                },
                U = i("KQm4"),
                Y = i("ODXe"),
                K = (i("sKKC"), i("TSYQ")),
                G = i.n(K),
                J = i("iWaP"),
                X = [{
                    id: "Computer languages",
                    image: {
                        src: "file:///D:/IMP%20FILES/My_projects/website/images/press/computer.svg",
                        alt: "Computer logo"
                    },
                    title: "\u201cProgramming Languages\u201d",
                    description: "Python, Javascript, C++, C, Java, CSS, HTML and basic information in some languages."
                }, {
                    id: "cloud",
                    image: {
                        src: "file:///D:/IMP%20FILES/My_projects/website/images/press/cloud.svg",
                        alt: "CLoud logo"
                    },
                    title: "\u201dCloud Management\u201d",
                    description: "I have experience of operating all major clouds like Google Cloud, Azure, AWS and much more."
                }, {
                    id: "database",
                    image: {
                        src: "file:///D:/IMP%20FILES/My_projects/website/images/press/database.svg",
                        alt: "Database logo"
                    },
                    title: "\u201cDatabase Management\u201d",
                    description: "SQL Databasse Management/Administrator And NoSQL Database Management/Administrator."
                }],
                Q = a.c.div.withConfig({
                    displayName: "Press__StyledPress",
                    componentId: "vlz739-0"
                })(["background-color:var(--white);overflow:hidden;"]),
                $ = Object(a.c)(c).withConfig({
                    displayName: "Press__StyledContainer",
                    componentId: "vlz739-1"
                })(["padding-top:9.688vw;padding-bottom:5.859vw;", "{padding-top:8.267vw;padding-bottom:8vw;}.heading-section{.title{font-size:3.516vw;line-height:4.297vw;", "{font-size:6.933vw;line-height:9.6vw;}span{font-weight:700;}}}.cards{display:grid;grid-template-columns:repeat(3,minmax(28.281vw,100%));grid-template-rows:minmax(42.578vw,100%);grid-gap:1.406vw;text-align:center;margin-top:4.453vw;", "{margin-top:4.533vw;height:133.333vw;}&.hide-desktop{grid-template-columns:none;grid-template-rows:none;grid-gap:unset;}> div{&:first-child{background:linear-gradient(90deg,#f6efef 0%,#f4ecf6 100%);}&:nth-last-child(2){background:linear-gradient(90deg,#f4ecf6 2.76%,#f2eafe 100%);}&:last-child{background:linear-gradient(90deg,#f2eafe 2.76%,#f2eaff 100%);}.image-wrapper{img{object-fit:contain;}&.fox-news{width:9.844vw;height:5.391vw;position:relative;margin:13.203vw auto 8.984vw;", "{width:33.6vw;height:18.4vw;margin:33.067vw auto 30.667vw;}}&.abc{width:7.813vw;height:7.813vw;position:relative;margin:12.031vw auto 7.734vw;", "{width:33.6vw;height:18.4vw;margin:33.067vw auto 30.667vw;}}&.usa-today{width:13.594vw;height:5.313vw;position:relative;margin:13.281vw auto 8.984vw;", "{width:33.6vw;height:18.4vw;margin:33.067vw auto 30.667vw;}}}.title{font-size:1.406vw;font-weight:bold;line-height:1.797vw;color:var(--gray);", "{font-size:4.8vw;line-height:6.133vw;}}.description{font-size:1.406vw;line-height:1.797vw;color:var(--gray);max-width:21.406vw;margin:1.406vw auto 0;", "{font-size:4.8vw;line-height:6.133vw;max-width:73.067vw;margin-top:4.8vw;}}}}.dots{display:none;", "{margin-top:3.467vw;display:grid !important;grid-template-columns:repeat(3,1.6vw);grid-template-rows:1.6vw;grid-gap:3.467vw;justify-content:center;button{background-color:var(--gray);width:100%;height:100%;border:none;border-radius:50%;padding:5px;cursor:pointer;opacity:0.3;&.active{opacity:1;}&:focus,&:active{outline:none;}}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                ee = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useState)(0),
                        n = i[0],
                        a = i[1],
                        o = Object(J.useKeenSlider)({
                            loop: !0,
                            centered: !0,
                            spacing: 20,
                            initial: 0,
                            slideChanged: function(e) {
                                a(e.details().relativeSlide)
                            }
                        }),
                        s = Object(Y.a)(o, 2),
                        c = s[0],
                        h = s[1];
                    Object(g.useEffect)((function() {
                        t && d.a.create({
                            scroller: t,
                            trigger: "#press-section",
                            animation: l.b.timeline().fadeIn("#press-section .heading-section .title").from("#press-section .cards.hide-mobile .keen-slider__slide", {
                                opacity: 0,
                                stagger: .3,
                                yPercent: 20
                            }),
                            start: "top center"
                        })
                    }), [t]);
                    var u = Object(g.useCallback)((function() {
                        return X.map((function(e) {
                            return Object(r.jsxs)("div", {
                                className: "keen-slider__slide",
                                children: [Object(r.jsx)("div", {
                                    className: G()("image-wrapper", [e.id]),
                                    children: Object(r.jsx)("img", {
                                        src: e.image.src,
                                        alt: e.image.alt,
                                        draggable: !1
                                    })
                                }), Object(r.jsx)("p", {
                                    className: "title",
                                    children: e.title
                                }), Object(r.jsx)("p", {
                                    className: "description",
                                    children: e.description
                                })]
                            }, e.id)
                        }))
                    }), []);
                    return Object(r.jsx)(Q, {
                        id: "press-section",
                        children: Object(r.jsxs)($, {
                            children: [Object(r.jsx)("div", {
                                className: "heading-section",
                                children: Object(r.jsxs)("p", {
                                    className: "title",
                                    children: [Object(r.jsx)("span", {
                                        children: "What Skills I have?"
                                    }), Object(r.jsx)("br", {}), "About Me"]
                                })
                            }), Object(r.jsx)("div", {
                                className: "cards hide-mobile",
                                children: u()
                            }), Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)("div", {
                                    className: "cards hide-desktop",
                                    ref: c,
                                    children: Object(r.jsx)("div", {
                                        className: "keen-slider",
                                        children: u()
                                    })
                                }), h && Object(r.jsx)("div", {
                                    className: "dots",
                                    children: Object(U.a)(Array(h.details().size).keys()).map((function(e) {
                                        return Object(r.jsx)("button", {
                                            className: G()({
                                                active: n === e
                                            }),
                                            type: "button",
                                            onClick: function() {
                                                h.moveToSlideRelative(e)
                                            },
                                            "aria-label": "Tap to change slide"
                                        }, e)
                                    }))
                                })]
                            })]
                        })
                    })
                },
                te = a.c.div.withConfig({
                    displayName: "Services__StyledServices",
                    componentId: "sc-8j0bcz-0"
                })(["padding-bottom:18.594vw;overflow:hidden;", "{padding-bottom:29.333vw;}.content-wrapper{padding:0 7.344vw 0 6.172vw;", "{padding:0;}.big-title{font-size:1.875vw;line-height:2.344vw;color:var(--green);", "{font-size:4.8vw;line-height:6.133vw;}}.content{margin-top:11.496vw;", "{margin-top:17.907vw;}.social-media-wrapper{width:2.5vw;height:2.5vw;position:relative;display:block;", "{width:8.533vw;height:8.533vw;}}.title{font-size:2.813vw;line-height:3.594vw;font-weight:bold;max-width:19.531vw;color:var(--white);margin:1.094vw 0 0.781vw;", "{font-size:9.6vw;line-height:12.267vw;max-width:100%;margin:3.733vw 0 2.4vw;}}.info{font-size:2.813vw;line-height:3.594vw;font-weight:bold;max-width:19.531vw;color:var(--green);margin-bottom:2.109vw;", "{font-size:7vw;line-height:12.267vw;max-width:100%;margin-bottom:9.6vw;}}.managment{display:flex;justify-content:space-between;margin-bottom:18.594vw;> div{position:relative;}", "{flex-direction:column;}.black-noise{width:13.516vw;height:13.516vw;position:absolute;top:3vw;left:1.5vw;user-select:none;", "{width:23.848vw;height:23.848vw;top:24vw;left:3vw;}}.ilus{width:49.695vw;height:25.391vw;position:relative;.cable{shape-rendering:crispEdges;stroke-dasharray:10 10;stroke-dashoffset:8;stroke-width:3;stroke:var(--green);animation:marqueeCable 0.4s linear infinite;z-index:-1;}@keyframes marqueeCable{from{stroke-dashoffset:20;}to{stroke-dashoffset:0;}}", "{width:87.733vw;height:44.8vw;margin-top:19.2vw;}}}.traffic{display:flex;justify-content:space-between;> div{position:relative;}", "{flex-direction:column-reverse;}.black-noise{width:13.359vw;height:13.359vw;position:absolute;top:12vw;left:22vw;", "{width:30.445vw;height:30.445vw;top:47vw;left:50vw;}}.title,.info{max-width:100%;}.ilus{width:41.484vw;height:25.391vw;position:relative;.line-effect{shape-rendering:crispEdges;stroke-dasharray:10 10;stroke-dashoffset:8;stroke-width:3;stroke:var(--green);animation:marqueeLine 0.4s linear infinite;z-index:-1;}@keyframes marqueeLine{from{stroke-dashoffset:-20;}to{stroke-dashoffset:0;}}", "{width:94.544vw;height:58.043vw;margin-top:19.2vw;}}> div:last-child{padding-top:7vw;}}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                ie = function(e) {
                    var t = e.scrollContainer;
                    return Object(g.useEffect)((function() {
                        t && (d.a.create({
                            scroller: t,
                            trigger: "#services-section",
                            animation: l.b.timeline().fadeIn("#services-section .big-title"),
                            start: "top+=250 center"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#services-section .managment",
                            animation: l.b.timeline().fadeIn(["#services-section .managment a", "#services-section .managment .title", "#services-section .managment .info", "#services-section .managment .ilus", "#services-section .managment .black-noise"]),
                            start: "top center"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#services-section",
                            animation: l.b.timeline().to("#services-section .managment .black-noise", {
                                yPercent: 30
                            }),
                            scrub: !0,
                            start: "top top"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#services-section .traffic",
                            animation: l.b.timeline().fadeIn(["#services-section .traffic a", "#services-section .traffic .title", "#services-section .traffic .info", "#services-section .traffic .ilus", "#services-section .traffic .black-noise"]),
                            start: "top center"
                        }), d.a.create({
                            scroller: t,
                            trigger: "#services-section .traffic",
                            animation: l.b.timeline().to("#services-section .traffic .black-noise", {
                                yPercent: 20
                            }),
                            scrub: !0,
                            start: "top top"
                        }))
                    }), [t]), Object(r.jsx)(te, {
                        id: "services-section",
                        children: Object(r.jsx)(c, {
                            children: Object(r.jsxs)("div", {
                                className: "content-wrapper",
                                children: [Object(r.jsx)("p", {
                                    className: "big-title",
                                    children: "What I Like to Do"
                                }), Object(r.jsxs)("div", {
                                    className: "content",
                                    children: [Object(r.jsxs)("div", {
                                        className: "managment",
                                        children: [Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)("a", {
                                                href: "https://github.com/AdityaXJha",
                                                className: "social-media-wrapper",
                                                "aria-label": "Github Logo",
                                                children: Object(r.jsx)("img", {
                                                    src: "file:///D:/IMP%20FILES/My_projects/website/images/services/github.svg",
                                                    draggable: !1,
                                                    alt: "Github logo"
                                                })
                                            }), Object(r.jsx)("p", {
                                                className: "title",
                                                children: "I Like Listening To Music"
                                            }), Object(r.jsx)("p", {
                                                className: "info",
                                                children: "And Contributing to Open Source Projects."
                                            }), Object(r.jsx)(F, {
                                                type: "secondary",
                                                label: "CONTACT ME",
                                                href: "mailto:aditya@adityajha.xyz"
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)("div", {
                                                className: "black-noise",
                                                children: Object(r.jsxs)("picture", {
                                                    children: [Object(r.jsx)("source", {
                                                        srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/services/black-noise.webp",
                                                        type: "image/webp"
                                                    }), Object(r.jsx)("img", {
                                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/services/black-noise.png",
                                                        draggable: !1,
                                                        alt: "Managment black noise"
                                                    })]
                                                })
                                            }), Object(r.jsx)("div", {
                                                className: "ilus",
                                                children: Object(r.jsxs)("svg", {
                                                    viewBox: "0 0 637 325",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [Object(r.jsxs)("g", {
                                                        clipPath: "url(#clip0)",
                                                        children: [Object(r.jsx)("path", {
                                                            d: "M398.5 128C402.64 128 406 124.64 406 120.5C406 116.36 402.64 113 398.5 113C394.36 113 391 116.36 391 120.5C391 124.64 394.36 128 398.5 128ZM398.5 115C401.54 115 404 117.46 404 120.5C404 123.54 401.54 126 398.5 126C395.46 126 393 123.54 393 120.5C393 117.46 395.46 115 398.5 115ZM398.5 245C408.17 245 416 237.16 416 227.5C416 217.84 408.17 210 398.5 210C388.84 210 381 217.84 381 227.5C381 237.16 388.84 245 398.5 245ZM398.5 212C407.06 212 414 218.94 414 227.5C414 236.06 407.06 243 398.5 243C389.94 243 383 236.06 383 227.5C383 218.94 389.94 212 398.5 212ZM315 58H313V60V310V312H315H481H483V310V60V58H481H315ZM481 310H315V60H481V310ZM433.08 83L430 80L437.69 72.5L442.31 77L446.92 72.5L451.54 77L456.15 72.5L460.77 77L466.92 71L470 74L460.77 83L456.15 78.5L451.54 83L446.92 78.5L442.31 83L437.69 78.5L433.08 83ZM398.5 296C436.33 296 467 265.55 467 228C467 190.45 436.33 160 398.5 160C360.67 160 330 190.45 330 228C330 265.55 360.67 296 398.5 296ZM398.5 162C435.24 162 465 191.56 465 228C465 264.44 435.24 294 398.5 294C361.76 294 332 264.44 332 228C332 191.56 361.76 162 398.5 162ZM398.5 280C427.49 280 451 256.72 451 228C451 199.28 427.49 176 398.5 176C369.51 176 346 199.28 346 228C346 256.72 369.51 280 398.5 280ZM398.5 178C426.41 178 449 200.4 449 228C449 255.6 426.41 278 398.5 278C370.59 278 348 255.6 348 228C348 200.4 370.59 178 398.5 178ZM398.5 149C414.24 149 427 136.24 427 120.5C427 104.76 414.24 92 398.5 92C382.76 92 370 104.76 370 120.5C370 136.24 382.76 149 398.5 149ZM398.5 94C413.14 94 425 105.86 425 120.5C425 135.14 413.14 147 398.5 147C383.86 147 372 135.14 372 120.5C372 105.86 383.86 94 398.5 94ZM389 17C386.24 17 384 19.24 384 22C384 24.76 386.24 27 389 27C391.76 27 394 24.76 394 22C394 19.24 391.76 17 389 17ZM389 25C387.34 25 386 23.66 386 22C386 20.34 387.34 19 389 19C390.66 19 392 20.34 392 22C392 23.66 390.66 25 389 25ZM469 17C466.24 17 464 19.24 464 22C464 24.76 466.24 27 469 27C471.76 27 474 24.76 474 22C474 19.24 471.76 17 469 17ZM469 25C467.34 25 466 23.66 466 22C466 20.34 467.34 19 469 19C470.66 19 472 20.34 472 22C472 23.66 470.66 25 469 25ZM409 17C406.24 17 404 19.24 404 22C404 24.76 406.24 27 409 27C411.76 27 414 24.76 414 22C414 19.24 411.76 17 409 17ZM409 25C407.34 25 406 23.66 406 22C406 20.34 407.34 19 409 19C410.66 19 412 20.34 412 22C412 23.66 410.66 25 409 25ZM429 17C426.24 17 424 19.24 424 22C424 24.76 426.24 27 429 27C431.76 27 434 24.76 434 22C434 19.24 431.76 17 429 17ZM429 25C427.34 25 426 23.66 426 22C426 20.34 427.34 19 429 19C430.66 19 432 20.34 432 22C432 23.66 430.66 25 429 25ZM486 34V32V11V9H484H366H364H321H319H313H311V11V32V34H313H484H486ZM321 11H364V24H321V11ZM313 11H319V24V26H321H364H366V24V11H484V32H313V11ZM449 17C446.24 17 444 19.24 444 22C444 24.76 446.24 27 449 27C451.76 27 454 24.76 454 22C454 19.24 451.76 17 449 17ZM449 25C447.34 25 446 23.66 446 22C446 20.34 447.34 19 449 19C450.66 19 452 20.34 452 22C452 23.66 450.66 25 449 25ZM303 46H301V48V323V325H303H494H496V323V48V46H494H303ZM303 48H317.67L303 62.67V48ZM303 323V307.91L318.09 323H303ZM494 323H478.29L494 307.29V323ZM494 305.06L493.7 304.76L492.99 305.47L476.38 322.08L475.67 322.79L475.88 323H320.48L320.69 322.79L319.98 322.08L303.37 305.47L302.98 305.08V65.5L303.37 65.11L320 48.5L320.5 48H475.89L476.39 48.5L493 65.11L493.71 65.82L494.01 65.52V305.06H494ZM494 63.29L478.72 48H494V63.29ZM636.1 170.34C636.1 222.52 617.18 270.16 586.03 306.33L582.24 303.07C612.63 267.79 631.1 221.3 631.1 170.34C631.1 119.38 612.63 72.89 582.24 37.61L586.03 34.35C617.18 70.52 636.1 118.16 636.1 170.34ZM590.57 170.34C590.57 210.52 575.59 247.19 550.94 275.02L547.95 272.37C571.98 245.24 586.57 209.51 586.57 170.34C586.57 131.17 571.97 95.44 547.95 68.31L550.94 65.66C575.59 93.49 590.57 130.16 590.57 170.34ZM550.94 170.34C550.94 200.19 539.92 227.43 521.78 248.11L519.52 246.13C537.2 225.98 547.94 199.44 547.94 170.34C547.94 141.25 537.2 114.7 519.52 94.55L521.78 92.57C539.92 113.25 550.94 140.49 550.94 170.34ZM301 42H496V0H301V42ZM303 2H494V40H470.71V36.64H468.71V40H459.64V36.64H457.64V40H448.57V36.64H446.57V40H437.5V36.64H435.5V40H426.43V36.64H424.43V40H415.36V36.64H413.36V40H404.29V36.64H402.29V40H393.22V36.64H391.22V40H382.15V36.64H380.15V40H371.08V36.64H369.08V40H360.01V36.64H358.01V40H348.94V36.64H346.94V40H337.87V36.64H335.87V40H326.8V36.64H324.8V40H303V2Z",
                                                            fill: "#07F2B4"
                                                        }), Object(r.jsx)("path", {
                                                            className: "cable",
                                                            d: "M33.04 185.25L47.29 245.68C49.43 254.77 57.48 261.13 66.87 261.13C72.12 261.13 77.1 259.06 80.89 255.3L121.94 214.5C125.71 210.75 130.71 208.69 136.02 208.69C142.26 208.69 148.03 211.52 151.85 216.46L210.68 292.62C214.57 297.66 220.14 300.43 226.35 300.43C235.45 300.43 245.28 294.22 246.44 282.34L270.26 39.0698C271.27 28.7898 279.82 21.0298 290.15 21.0298H301.67",
                                                            stroke: "#07F2B4",
                                                            strokeWidth: "3",
                                                            strokeMiterlimit: "10"
                                                        }), Object(r.jsx)("path", {
                                                            d: "M94.76 163.59H92.76V97.6198H94.76V163.59ZM102.34 87.1498L104.34 86.5498V88.6398V173.15V175.24L102.34 174.64L38.55 155.5L44.78 184.22L45.21 186.22H22.81L15.64 148.75L15.61 148.62L0 143.92V117.85L102.34 87.1498ZM23.92 149.01V112.77L2 119.34V142.43L23.92 149.01ZM36.39 154.94L17.81 149.39L24.47 184.21H42.74L36.39 154.94ZM102.34 89.2398L25.91 112.17V149.62L102.34 172.55V89.2398ZM117.01 110.79L115.53 112.14C119.96 117 122.65 123.38 122.65 130.38C122.65 137.38 119.96 143.77 115.53 148.62L117.01 149.97C121.76 144.76 124.65 137.9 124.65 130.38C124.66 122.86 121.76 115.99 117.01 110.79Z",
                                                            fill: "#07F2B4"
                                                        })]
                                                    }), Object(r.jsx)("defs", {
                                                        children: Object(r.jsx)("clipPath", {
                                                            id: "clip0",
                                                            children: Object(r.jsx)("rect", {
                                                                width: "636.1",
                                                                height: "325",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        className: "traffic",
                                        children: [Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)("div", {
                                                className: "black-noise",
                                                children: Object(r.jsxs)("picture", {
                                                    children: [Object(r.jsx)("source", {
                                                        srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/services/black-noise.webp",
                                                        type: "image/webp"
                                                    }), Object(r.jsx)("img", {
                                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/services/black-noise.png",
                                                        draggable: !1,
                                                        alt: "Traffic black noise"
                                                    })]
                                                })
                                            }), Object(r.jsx)("div", {
                                                className: "ilus",
                                                children: Object(r.jsxs)("svg", {
                                                    viewBox: "0 0 531 326",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [Object(r.jsx)("line", {
                                                        className: "line-effect",
                                                        x1: "84",
                                                        x2: "84",
                                                        y1: "0",
                                                        y2: "100%",
                                                        fill: "#07F2B4"
                                                    }), Object(r.jsx)("line", {
                                                        className: "line-effect",
                                                        x1: "177",
                                                        x2: "177",
                                                        y1: "0",
                                                        y2: "100%",
                                                        fill: "#07F2B4"
                                                    }), Object(r.jsx)("line", {
                                                        className: "line-effect",
                                                        x1: "260",
                                                        x2: "460",
                                                        y1: "160",
                                                        y2: "100%",
                                                        fill: "#07F2B4"
                                                    }), Object(r.jsx)("path", {
                                                        clipRule: "evenodd",
                                                        d: "m340.308 221.86s-7.032 7.764-9.413 12.385c-1.314 2.553-1.173 5.631.37 8.044 2.794 4.375 17.614 17.91 17.614 17.91s14.819 13.535 19.417 15.911c2.538 1.314 5.603 1.164 8.009-.391 4.359-2.814 11.391-10.579 11.391-10.579s7.032-7.764 9.409-12.388c1.314-2.553 1.173-5.632-.369-8.045-2.791-4.371-17.611-17.906-17.611-17.906s-14.819-13.535-19.417-15.911c-2.538-1.314-5.603-1.164-8.01.391-4.359 2.814-11.39 10.579-11.39 10.579z",
                                                        fill: "black",
                                                        fillRule: "evenodd"
                                                    }), Object(r.jsxs)("g", {
                                                        fill: "#07f2b4",
                                                        children: [Object(r.jsx)("path", {
                                                            d: "m0 0v324.951h2.79235v-324.951z"
                                                        }), Object(r.jsx)("path", {
                                                            d: "m261.829 0v62.958c0 19.1642 8.304 37.393 22.775 49.999l244.559 213.043 1.837-2.098-244.56-213.042c-13.864-12.0776-21.818-29.5419-21.818-47.902v-62.958z"
                                                        }), Object(r.jsx)("path", {
                                                            d: "m261.829 216.497v108.454h2.793v-102.3l117.94 103.346 1.843-2.092z"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m42.8741 33.7575-9.9976 17.2791h19.9952zm0 5.5722-5.162 8.9216h10.324z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m42.8741 11.1421s-10.8481.0001-16.0444 1.3848c-2.8698.7662-5.125 3.0158-5.8932 5.8783-1.3937 5.1886-1.3937 25.9816-1.3937 25.9816s0 20.793 1.3937 25.9762c.7682 2.8625 3.0234 5.112 5.8932 5.8783 5.1963 1.3902 16.0444 1.3902 16.0444 1.3902s10.8481 0 16.0444-1.3902c2.8698-.7663 5.125-3.0158 5.8932-5.8783 1.3937-5.1832 1.3937-25.9762 1.3937-25.9762s0-20.793-1.3937-25.9761c-.7682-2.8626-3.0234-5.1121-5.8932-5.8783-5.1963-1.3903-16.0444-1.3903-16.0444-1.3903zm20.539 33.2447-.0004.2286c-.0003.1514-.001.375-.0023.6619-.0027.5739-.0081 1.4007-.0189 2.4096-.0217 2.0189-.065 4.7614-.1514 7.6615-.0866 2.9046-.2158 5.945-.4076 8.5664-.1976 2.6998-.4473 4.7206-.7178 5.7266l-.0004.0013c-.5101 1.9009-2.0122 3.3992-3.9178 3.908l-.0014.0004c-2.2805.6101-6.0207.9508-9.3919 1.125-1.6438.085-3.1314.1276-4.2082.1489-.5379.0106-.9716.016-1.2694.0186l-.173.0013-.1672.001-.0858.0002-.0204.0001h-.0045-.0012-.0044l-.0205-.0001-.0858-.0002c-.0766-.0003-.1914-.001-.3402-.0023-.2977-.0026-.7315-.008-1.2693-.0186-1.0769-.0213-2.5645-.0639-4.2083-.1489-3.3712-.1742-7.1114-.5149-9.3919-1.125l-.0013-.0004c-1.9057-.5088-3.4078-2.0071-3.9179-3.908l-.0004-.0013c-.2705-1.006-.5202-3.0268-.7178-5.7266-.1918-2.6214-.321-5.6617-.4076-8.5664-.0864-2.9001-.1297-5.6426-.1513-7.6615-.0109-1.0089-.0163-1.8357-.019-2.4096-.0013-.2869-.002-.5105-.0023-.6619l-.0004-.2255v-.0025-.0012-.0024l.0004-.2256c.0003-.1514.001-.375.0023-.6619.0027-.5739.0081-1.4007.0189-2.4097.0217-2.0189.065-4.7616.1514-7.6621.0866-2.905.2158-5.9459.4076-8.568.1976-2.7004.4473-4.7227.718-5.7305.51-1.9003 2.0117-3.399 3.9167-3.9082 2.2816-.608 6.0228-.9474 9.3941-1.121 1.6439-.0846 3.1316-.127 4.2085-.1483.5379-.0106.9717-.0158 1.2695-.0185l.1549-.0012c.0758-.0005.1379-.0009.1853-.0011l.0858-.0002h.0205l.0045-.0001h.0012l.0045.0001h.0204l.0858.0003.1628.0009.1774.0013c.2978.0027.7315.008 1.2694.0186 1.0768.0213 2.5644.0639 4.2082.1489 3.3712.1743 7.1114.515 9.3919 1.1251l.0014.0003c1.9056.5088 3.4077 2.0072 3.9178 3.908l.0004.0013c.2705 1.006.5202 3.0269.7178 5.7267.1918 2.6213.321 5.6617.4076 8.5663.0864 2.9001.1297 5.6426.1514 7.6615.0108 1.0089.0162 1.8358.0189 2.4096l.0013.3169c.0005.1393.0008.2549.001.345z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m42.8741 191.59-9.9976 17.279h19.9952zm0 5.572-5.162 8.922h10.324z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m42.8741 168.975s-10.8481 0-16.0444 1.384c-2.8698.767-5.125 3.016-5.8932 5.879-1.3937 5.188-1.3937 25.981-1.3937 25.981s0 20.793 1.3937 25.976c.7682 2.863 3.0234 5.112 5.8932 5.879 5.1963 1.39 16.0444 1.39 16.0444 1.39s10.8481 0 16.0444-1.39c2.8698-.767 5.125-3.016 5.8932-5.879 1.3937-5.183 1.3937-25.976 1.3937-25.976s0-20.793-1.3937-25.976c-.7682-2.862-3.0234-5.112-5.8932-5.878-5.1963-1.39-16.0444-1.39-16.0444-1.39zm20.539 33.244-.0004.229c-.0003.151-.001.375-.0023.662-.0027.574-.0081 1.4-.0189 2.409-.0217 2.019-.065 4.762-.1514 7.662-.0866 2.905-.2158 5.945-.4076 8.566-.1976 2.7-.4473 4.721-.7178 5.727l-.0004.001c-.5101 1.901-2.0122 3.399-3.9178 3.908l-.0014.001c-2.2805.61-6.0207.95-9.3919 1.125-1.6438.085-3.1314.127-4.2082.148-.5379.011-.9716.016-1.2694.019-.1488.001-.2636.002-.3402.002l-.0858.001h-.0249-.0012-.0249l-.0858-.001c-.0766 0-.1914-.001-.3402-.002-.2977-.003-.7315-.008-1.2693-.019-1.0769-.021-2.5645-.063-4.2083-.148-3.3712-.175-7.1114-.515-9.3919-1.125l-.0013-.001c-1.9057-.509-3.4078-2.007-3.9179-3.908l-.0004-.001c-.2705-1.006-.5202-3.027-.7178-5.727-.1918-2.621-.321-5.661-.4076-8.566-.0864-2.9-.1297-5.643-.1513-7.662-.0109-1.009-.0163-1.835-.019-2.409-.0013-.287-.002-.511-.0023-.662l-.0004-.226v-.002-.001-.003l.0004-.225c.0003-.152.001-.375.0023-.662.0027-.574.0081-1.401.0189-2.41.0217-2.019.065-4.762.1514-7.662.0866-2.905.2158-5.946.4076-8.568.1976-2.7.4473-4.723.718-5.73.51-1.901 2.0117-3.4 3.9167-3.909 2.2816-.608 6.0228-.947 9.3941-1.121 1.6439-.084 3.1316-.127 4.2085-.148.5379-.011.9717-.016 1.2695-.018.1489-.002.2636-.002.3402-.003h.0858.025.0012.0249.0858l.1337.001.1032.001.1033.001c.2978.002.7315.007 1.2694.018 1.0768.021 2.5644.064 4.2082.149 3.3712.174 7.1114.515 9.3919 1.125h.0014c1.9056.509 3.4077 2.008 3.9178 3.908l.0004.002c.2705 1.006.5202 3.027.7178 5.726.1918 2.622.321 5.662.4076 8.567.0864 2.9.1297 5.642.1514 7.661.0108 1.009.0162 1.836.0189 2.41.0013.287.002.51.0023.662z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m131.768 67.1801-9.998 17.2791h19.995zm0 5.5722-5.162 8.9216h10.324z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m131.768 44.5648s-10.848 0-16.045 1.3847c-2.869.7663-5.125 3.0158-5.893 5.8783-1.394 5.1887-1.394 25.9816-1.394 25.9816s0 20.793 1.394 25.9766c.768 2.862 3.024 5.112 5.893 5.878 5.197 1.39 16.045 1.39 16.045 1.39s10.848 0 16.044-1.39c2.87-.766 5.125-3.016 5.893-5.878 1.394-5.1836 1.394-25.9766 1.394-25.9766s0-20.7929-1.394-25.9761c-.768-2.8625-3.023-5.112-5.893-5.8783-5.196-1.3902-16.044-1.3902-16.044-1.3902zm20.539 33.2446-.001.2287c0 .1514-.001.3749-.002.6619-.003.5738-.008 1.4007-.019 2.4095-.022 2.0189-.065 4.7614-.151 7.6616-.087 2.9046-.216 5.9449-.408 8.5663-.197 2.6996-.447 4.7206-.718 5.7266v.001c-.51 1.901-2.012 3.4-3.918 3.908l-.001.001c-2.281.61-6.021.95-9.392 1.125-1.644.085-3.132.127-4.208.149-.538.01-.972.016-1.27.018-.149.002-.263.002-.34.003h-.086-.02-.005-.001-.004-.021-.086c-.076-.001-.191-.001-.34-.003-.298-.002-.731-.008-1.269-.018-1.077-.022-2.565-.064-4.208-.149-3.372-.175-7.112-.515-9.392-1.125l-.002-.001c-1.905-.508-3.407-2.007-3.918-3.908v-.001c-.27-1.006-.52-3.027-.718-5.7266-.192-2.6214-.321-5.6617-.407-8.5663-.087-2.9002-.13-5.6427-.152-7.6616-.01-1.0088-.016-1.8357-.019-2.4095-.001-.287-.002-.5105-.002-.6619v-.2281-.2292c0-.1514.001-.375.002-.6619.003-.5738.009-1.4007.019-2.4096.022-2.019.065-4.7617.152-7.6622.086-2.9049.215-5.9458.407-8.568.198-2.7004.448-4.7227.718-5.7304.51-1.9004 2.012-3.3991 3.917-3.9083 2.282-.608 6.023-.9473 9.394-1.1209 1.644-.0847 3.132-.1271 4.209-.1483.537-.0106.971-.0159 1.269-.0185.149-.0013.264-.002.34-.0023l.086-.0003h.021.004.001.005.02l.086.0003c.077.0003.191.001.34.0023.298.0026.732.0079 1.27.0186 1.076.0213 2.564.0638 4.208.1488 3.371.1743 7.111.515 9.392 1.1251l.001.0004c1.906.5088 3.408 2.0071 3.918 3.9079v.0013c.271 1.006.521 3.0269.718 5.7267.192 2.6214.321 5.6617.408 8.5663.086 2.9002.129 5.6427.151 7.6616.011 1.0088.016 1.8357.019 2.4095.001.2869.002.5105.002.6619z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            d: "m115.723 144.363c5.197-1.384 16.045-1.384 16.045-1.384s10.848 0 16.044 1.39c2.87.766 5.125 3.016 5.893 5.878 1.394 5.183 1.394 25.976 1.394 25.976h-2.792l-.001-.228c0-.152-.001-.375-.002-.662-.003-.574-.008-1.401-.019-2.41-.022-2.019-.065-4.761-.151-7.661-.087-2.905-.216-5.945-.408-8.567-.197-2.7-.447-4.72-.718-5.726v-.002c-.51-1.901-2.012-3.399-3.918-3.908h-.001c-2.281-.61-6.021-.951-9.392-1.125-1.644-.085-3.132-.128-4.208-.149-.538-.011-.972-.016-1.27-.019-.149-.001-.263-.002-.34-.002h-.086-.025-.001-.025-.086c-.076 0-.191.001-.34.002-.298.003-.732.008-1.269.019-1.077.021-2.565.064-4.209.148-3.371.174-7.112.513-9.394 1.121-1.905.509-3.407 2.007-3.917 3.908-.27 1.008-.52 3.03-.718 5.731-.192 2.622-.321 5.663-.407 8.568-.087 2.9-.13 5.643-.152 7.662-.01 1.009-.016 1.836-.019 2.41-.001.287-.002.51-.002.662v.228h-2.793s0-20.793 1.394-25.981c.768-2.863 3.024-5.112 5.893-5.879z"
                                                        }), Object(r.jsx)("path", {
                                                            d: "m109.83 202.199c-1.394-5.183-1.394-25.976-1.394-25.976h2.793v.229c0 .151.001.375.002.662.003.574.009 1.4.019 2.409.022 2.019.065 4.762.152 7.662.086 2.904.215 5.945.407 8.566.198 2.7.448 4.721.718 5.727v.001c.511 1.901 2.013 3.399 3.918 3.908h.002c2.28.611 6.02.951 9.392 1.126 1.643.085 3.131.127 4.208.148.538.011.971.016 1.269.019.149.001.264.002.34.002l.086.001h.025.001.025l.086-.001c.077 0 .191-.001.34-.002.298-.003.732-.008 1.27-.019 1.076-.021 2.564-.063 4.208-.148 3.371-.175 7.111-.515 9.392-1.126h.001c1.906-.509 3.408-2.007 3.918-3.908v-.001c.271-1.006.521-3.027.718-5.727.192-2.621.321-5.662.408-8.566.086-2.9.129-5.643.151-7.662.011-1.009.016-1.835.019-2.409.001-.287.002-.511.002-.662l.001-.229h2.792s0 20.793-1.394 25.976c-.768 2.863-3.023 5.112-5.893 5.879-5.196 1.39-16.044 1.39-16.044 1.39s-10.848 0-16.045-1.39c-2.869-.767-5.125-3.016-5.893-5.879z"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m131.768 165.594 9.997 17.279h-19.995zm-5.162 14.494 5.162-8.922 5.162 8.922z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m221.123 191.59-9.998 17.279h19.996zm0 5.572-5.162 8.922h10.324z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m221.123 168.975s-10.848 0-16.044 1.384c-2.87.767-5.125 3.016-5.894 5.879-1.393 5.188-1.393 25.981-1.393 25.981s0 20.793 1.393 25.976c.769 2.863 3.024 5.112 5.894 5.879 5.196 1.39 16.044 1.39 16.044 1.39s10.848 0 16.044-1.39c2.87-.767 5.125-3.016 5.894-5.879 1.393-5.183 1.393-25.976 1.393-25.976s0-20.793-1.393-25.976c-.769-2.862-3.024-5.112-5.894-5.878-5.196-1.39-16.044-1.39-16.044-1.39zm20.539 33.244v.229c-.001.151-.001.375-.003.662-.002.574-.008 1.4-.019 2.409-.021 2.019-.065 4.762-.151 7.662-.087 2.905-.216 5.945-.408 8.566-.197 2.7-.447 4.721-.717 5.727l-.001.001c-.51 1.901-2.012 3.399-3.918 3.908l-.001.001c-2.28.61-6.021.95-9.392 1.125-1.644.085-3.131.127-4.208.148-.538.011-.972.016-1.27.019-.148.001-.263.002-.34.002l-.085.001h-.025-.002-.025l-.085-.001c-.077 0-.192-.001-.341-.002-.297-.003-.731-.008-1.269-.019-1.077-.021-2.564-.063-4.208-.148-3.371-.175-7.112-.515-9.392-1.125l-.001-.001c-1.906-.509-3.408-2.007-3.918-3.908l-.001-.001c-.27-1.006-.52-3.027-.717-5.727-.192-2.621-.321-5.661-.408-8.566-.086-2.9-.13-5.643-.151-7.662-.011-1.009-.017-1.835-.019-2.409-.002-.287-.002-.511-.003-.662v-.226-.002-.001-.003-.225c.001-.152.001-.375.003-.662.002-.574.008-1.401.019-2.41.021-2.019.065-4.762.151-7.662.087-2.905.216-5.946.408-8.568.197-2.7.447-4.723.718-5.73.51-1.901 2.011-3.4 3.916-3.909 2.282-.608 6.023-.947 9.394-1.121 1.644-.084 3.132-.127 4.209-.148.538-.011.972-.016 1.269-.018.149-.002.264-.002.341-.003h.085.025.002.025.085l.1.001h.107l.133.002c.298.002.732.007 1.27.018 1.077.021 2.564.064 4.208.149 3.371.174 7.112.515 9.392 1.125h.001c1.906.509 3.408 2.008 3.918 3.908l.001.002c.27 1.006.52 3.027.717 5.726.192 2.622.321 5.662.408 8.567.086 2.9.13 5.642.151 7.661.011 1.009.017 1.836.019 2.41.002.287.002.51.003.662z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            d: "m328.981 233.938c2.405-4.799 9.595-12.901 9.595-12.901s7.189-8.103 11.677-11.063c2.477-1.636 5.661-1.829 8.319-.506 4.815 2.394 20.424 16.175 20.424 16.175l-1.85 2.086-.003-.002-.04-.036-.129-.113c-.114-.1-.283-.248-.499-.437-.432-.378-1.057-.922-1.821-1.583-1.53-1.322-3.618-3.107-5.852-4.965-2.238-1.86-4.606-3.779-6.701-5.373-2.158-1.642-3.841-2.794-4.775-3.259l-.001-.001c-1.765-.879-3.886-.75-5.531.337h-.001c-1.969 1.299-4.704 3.867-7.069 6.27-1.154 1.171-2.171 2.254-2.901 3.044-.365.395-.656.715-.855.936l-.07.077-.116.129-.042.047-.057.064-.016.018-.001.001-.016.019-.057.064c-.051.057-.126.144-.224.256-.195.224-.479.551-.827.96-.698.819-1.652 1.958-2.678 3.242-2.104 2.633-4.329 5.652-5.385 7.76-.88 1.76-.751 3.874.338 5.515.577.87 1.93 2.397 3.826 4.335 1.842 1.881 4.039 3.993 6.162 5.983 2.121 1.987 4.151 3.837 5.652 5.191.75.677 1.368 1.229 1.797 1.611.214.191.381.34.495.441l.169.149.002.002-1.85 2.086s-15.61-13.781-18.582-18.261c-1.639-2.471-1.833-5.646-.507-8.298z"
                                                        }), Object(r.jsx)("path", {
                                                            d: "m368.494 276.672c-4.815-2.394-20.424-16.175-20.424-16.175l1.85-2.086.001.001.002.001.04.036.129.114c.114.1.282.247.499.437.432.378 1.057.922 1.821 1.582 1.53 1.322 3.618 3.108 5.852 4.965 2.238 1.861 4.606 3.779 6.701 5.373 2.158 1.642 3.841 2.795 4.775 3.26h.001c1.765.879 3.886.75 5.531-.336l.001-.001c1.969-1.299 4.704-3.867 7.069-6.269 1.153-1.172 2.171-2.255 2.901-3.045.364-.395.656-.715.855-.936.059-.065.109-.121.151-.168.03-.032.055-.061.076-.084l.057-.064.014-.015.003-.004.001-.001.003-.003.013-.015.057-.065c.05-.057.126-.143.224-.255.195-.224.479-.552.827-.961.698-.818 1.652-1.957 2.677-3.242 2.104-2.633 4.327-5.653 5.38-7.76l.001-.002c.881-1.76.752-3.875-.337-5.516l-.001-.001c-.576-.869-1.927-2.395-3.823-4.332-1.841-1.88-4.038-3.992-6.161-5.982-2.12-1.986-4.15-3.836-5.651-5.191-.751-.676-1.368-1.228-1.797-1.611-.214-.191-.382-.34-.495-.44l-.169-.15-.002-.002 1.85-2.086s15.61 13.781 18.577 18.258c1.64 2.471 1.834 5.646.507 8.297-2.4 4.803-9.59 12.906-9.59 12.906s-7.189 8.103-11.677 11.062c-2.477 1.636-5.661 1.83-8.319.506z"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m355.553 236.025 19.598 3.985-13.252 14.935zm7.46 13.462-3.277-9.769 10.119 2.058z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m131.768 264.008-9.998 17.279h19.995zm0 5.572-5.162 8.921h10.324z",
                                                            fillRule: "evenodd"
                                                        }), Object(r.jsx)("path", {
                                                            clipRule: "evenodd",
                                                            d: "m131.768 241.392s-10.848 0-16.045 1.385c-2.869.766-5.125 3.016-5.893 5.878-1.394 5.189-1.394 25.982-1.394 25.982s0 20.793 1.394 25.976c.768 2.863 3.024 5.112 5.893 5.878 5.197 1.391 16.045 1.391 16.045 1.391s10.848 0 16.044-1.391c2.87-.766 5.125-3.015 5.893-5.878 1.394-5.183 1.394-25.976 1.394-25.976s0-20.793-1.394-25.976c-.768-2.863-3.023-5.112-5.893-5.879-5.196-1.39-16.044-1.39-16.044-1.39zm20.539 33.245-.001.229c0 .151-.001.375-.002.661-.003.574-.008 1.401-.019 2.41-.022 2.019-.065 4.761-.151 7.662-.087 2.904-.216 5.945-.408 8.566-.197 2.7-.447 4.721-.718 5.727v.001c-.51 1.901-2.012 3.399-3.918 3.908h-.001c-2.281.61-6.021.951-9.392 1.125-1.644.085-3.132.128-4.208.149-.538.011-.972.016-1.27.019-.149.001-.263.002-.34.002h-.086-.025-.001-.025-.086c-.076 0-.191-.001-.34-.002-.298-.003-.731-.008-1.269-.019-1.077-.021-2.565-.064-4.208-.149-3.372-.174-7.112-.515-9.392-1.125h-.002c-1.905-.509-3.407-2.007-3.918-3.908v-.001c-.27-1.006-.52-3.027-.718-5.727-.192-2.621-.321-5.662-.407-8.566-.087-2.901-.13-5.643-.152-7.662-.01-1.009-.016-1.836-.019-2.41-.001-.286-.002-.51-.002-.661v-.228-.23c0-.151.001-.375.002-.662.003-.573.009-1.4.019-2.409.022-2.019.065-4.762.152-7.662.086-2.905.215-5.946.407-8.568.198-2.701.448-4.723.718-5.731.51-1.9 2.012-3.399 3.917-3.908 2.282-.608 6.023-.947 9.394-1.121 1.644-.085 3.132-.127 4.209-.148.537-.011.971-.016 1.269-.019.149-.001.264-.002.34-.002h.086.025.001.025.086c.077 0 .191.001.34.002.298.003.732.008 1.27.019 1.076.021 2.564.064 4.208.149 3.371.174 7.111.515 9.392 1.125h.001c1.906.509 3.408 2.007 3.918 3.908v.001c.271 1.006.521 3.027.718 5.727.192 2.621.321 5.662.408 8.566.086 2.9.129 5.643.151 7.662.011 1.009.016 1.836.019 2.409.001.287.002.511.002.662z",
                                                            fillRule: "evenodd"
                                                        })]
                                                    })]
                                                })
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)("a", {
                                                href: "https://twitter.com/AdityaXJha",
                                                className: "social-media-wrapper",
                                                "aria-label": "Twitter",
                                                children: Object(r.jsx)("img", {
                                                    src: "file:///D:/IMP%20FILES/My_projects/website/images/services/twitter.svg",
                                                    draggable: !1,
                                                    alt: "Twitter logo"
                                                })
                                            }), Object(r.jsx)("p", {
                                                className: "title",
                                                children: "Graphical Development"
                                            }), Object(r.jsx)("p", {
                                                className: "info",
                                                children: "This Website is made using Vector Graphics Technology instead of Raster(JPEG, PNG, GIF)."
                                            }), Object(r.jsx)(F, {
                                                type: "secondary",
                                                label: "CONTACT ME",
                                                href: "mailto:aditya@adityajha.xyz"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                re = a.c.div.withConfig({
                    displayName: "Steps__StyledSteps",
                    componentId: "sc-1y99q41-0"
                })(["> div{", "{padding:0 18px;}> .title{font-weight:bold;font-size:4.688vw;line-height:5.469vw;text-align:center;color:var(--violet);margin:0 0 12.219vw;", "{font-size:6.933vw;line-height:10.133vw;}img{width:2.5vw;height:3.125vw;vertical-align:middle;", "{width:3.733vw;height:4.659vw;}}}}.steps-title-section{display:grid;grid-template-columns:28.359vw 28.359vw;grid-gap:16.094vw;justify-content:center;align-items:center;z-index:5;&:before{content:'';background:var(--black);width:100%;display:block;height:calc(100% - 2.344vw);position:absolute;top:0;left:0;right:0;z-index:-1;", "{height:calc(100% - 5.067vw);}}", "{grid-template-columns:34.667vw 34.667vw;grid-gap:10.667vw;}.title{font-weight:900;font-size:1.563vw;line-height:5.469vw;text-align:center;color:var(--gray);text-transform:uppercase;padding-top:2vw;padding-bottom:2.031vw;background:var(--black);", "{height:10.872vw;font-size:4.8vw;line-height:5.867vw;text-transform:capitalize;padding-top:8.061vw;padding-bottom:8.061vw;}}.title-img{width:15.837vw;height:5.469vw;margin:auto;position:relative;padding-top:2vw;padding-bottom:2.031vw;background:var(--black);", "{width:27.325vw;height:10.872vw;padding-top:8.061vw;padding-bottom:8.061vw;}}.separator{width:100%;height:2.344vw;position:relative;top:-2px;", "{height:5.267vw;top:-2px;}}}.step{display:grid;justify-content:center;grid-template-columns:28.759vw 28vw;grid-gap:16.094vw;margin-bottom:15.625vw;position:relative;", "{grid-template-columns:34.667vw 34.667vw;grid-gap:10.667vw;margin-bottom:30vw;}&:last-child{margin-bottom:0;}&:not(:first-child){", "{margin-top:45.333vw;}}&-title{font-size:1.406vw;line-height:1.797vw;text-align:center;", "{font-size:4.8vw;line-height:6.133vw;}&-big{font-size:2.344vw;line-height:5.469vw;", "{font-size:6.4vw;line-height:8vw;}}}.regular-marketing{display:flex;align-items:center;flex-direction:column;.step-title{color:var(--gray);}}.description{width:16.094vw;margin:auto;position:absolute;left:0;right:0;top:4vw;", "{width:54.667vw;top:-30vw;}p{font-size:1.406vw;line-height:1.797vw;text-align:center;color:var(--white);", "{font-size:4.8vw;line-height:6.133vw;}span{font-weight:900;color:var(--gray);}}}.market-wise{display:flex;align-items:center;flex-direction:column;position:relative;.step-title{color:var(--violet);&-big-green{color:var(--green);}}}.line{width:100%;height:21.094vw;position:absolute;left:0;right:0;bottom:-50%;transform:translateY(50%);margin:auto;", "{height:72vw;top:-19vw;bottom:unset;transform:unset;}}}.step1{grid-template-rows:16.484vw;margin-top:10vw;", "{grid-template-rows:86.267vw;margin-top:48.304vw;}.regular-marketing{.icon{width:8.434vw;height:10.556vw;position:relative;margin-bottom:1.709vw;", "{width:19.749vw;height:24.717vw;margin-bottom:5.909vw;}}}.market-wise{", "{margin-left:0.5vw;}.icon{width:8.434vw;height:10.556vw;position:relative;margin-bottom:1.709vw;z-index:1;", "{width:19.749vw;height:24.717vw;margin-bottom:5.909vw;}}.noise{width:12.266vw;height:12.266vw;position:absolute;top:-1.953vw;", "{width:28.72vw;height:28.72vw;top:-4.667vw;}}}}.step2{grid-template-rows:20.078vw;", "{grid-template-rows:89.067vw;}.regular-marketing{.icon{width:10.179vw;height:12.233vw;position:relative;margin-bottom:1.361vw;", "{width:21.421vw;height:25.744vw;margin-bottom:7.056vw;}}}.market-wise{", "{margin-left:4vw;}.icon{width:15.67vw;height:11.213vw;position:relative;margin-bottom:1.052vw;z-index:1;", "{width:33.365vw;height:23.875vw;margin-bottom:11.216vw;}}.noise{width:17.656vw;height:17.656vw;position:absolute;top:-2.422vw;", "{width:37.592vw;height:37.592vw;top:-4.235vw;}}}.line{", "{bottom:-30%;}", "{top:-23vw;}}}.step3{grid-template-rows:16.719vw;", "{grid-template-rows:88.8vw;}.regular-marketing{", "{margin-right:8vw;}.icon{width:14.766vw;height:10.859vw;position:relative;margin-bottom:2.207vw;", "{width:34.4vw;height:25.6vw;margin-bottom:9.379vw;}}}.market-wise{", "{margin-left:8vw;}.icon{width:15.877vw;height:10.556vw;position:relative;margin-bottom:2.803vw;z-index:1;", "{width:37.173vw;height:24.717vw;margin-bottom:13.149vw;}}.noise{width:11.293vw;height:11.293vw;position:absolute;top:-1.1vw;left:-0.776vw;right:0;margin:auto;", "{width:24.733vw;height:24.733vw;top:-2.4vw;}}}}.step4{grid-template-rows:22.031vw;", "{grid-template-rows:unset;}.regular-marketing{.icon{width:15.67vw;height:11.213vw;position:relative;margin-bottom:2.849vw;", "{width:34.536vw;height:24.715vw;margin-bottom:9.285vw;}}}.market-wise{.icon{width:10.854vw;height:10.298vw;position:relative;margin-bottom:1.077vw;z-index:1;", "{width:25.413vw;height:24.112vw;margin-bottom:5.475vw;}}.noise{width:15.469vw;height:15.469vw;position:absolute;top:-3.937vw;", "{width:31.467vw;height:31.467vw;top:-8.547vw;}}}.line{", "{top:-16vw;}}#confetti-wrapper{position:absolute;top:-9vw;left:-3vw;right:0;margin:auto;width:34vw;height:34vw;z-index:3;", "{top:-30vw;width:43vw;height:110vw;}}#confetti-background{overflow:hidden;position:relative;width:100%;height:100%;margin:auto;display:flex;align-items:center;justify-content:center;}.confetti{position:absolute;background-color:var(--green);width:1vw;height:1.75vw;will-change:transform;", "{width:2.4vw;height:3.2vw;}}}"], n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.desktop, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile, n.a.mobile),
                ne = function(e) {
                    var t = e.scrollContainer,
                        i = Object(g.useState)(),
                        a = i[0],
                        o = i[1],
                        s = Object(g.useRef)(),
                        h = Object(g.useRef)(),
                        u = Object(g.useRef)(),
                        v = Object(g.useRef)(),
                        p = Object(g.useRef)(),
                        m = Object(g.useRef)(),
                        b = Object(g.useRef)(),
                        f = Object(g.useRef)(),
                        w = Object(g.useRef)(),
                        j = Object(g.useRef)(),
                        x = Object(g.useRef)(),
                        O = Object(g.useRef)(),
                        y = Object(g.useRef)(),
                        k = Object(g.useRef)(),
                        C = Object(g.useRef)(l.b.timeline({
                            defaults: {
                                duration: .2,
                                ease: "power2.in"
                            }
                        }));
                    Object(g.useEffect)((function() {
                        t && d.a.create({
                            scroller: t,
                            trigger: "#steps-section",
                            animation: l.b.timeline().fadeIn(s.current).from("#steps-section .title .icon-lamp", {
                                opacity: .6,
                                duration: 1
                            }),
                            start: "top center"
                        })
                    }), [t]), Object(g.useEffect)((function() {
                        var e = function() {
                            o(window.innerWidth < n.b.mobile)
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e),
                            function() {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                    }), []);
                    var M = Object(g.useCallback)((function() {
                            t && C.current.from(u.current, {
                                opacity: 0,
                                yPercent: 100,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: s.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, 0).from(v.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: s.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, 0).from(p.current, {
                                yPercent: 20,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: h.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, 0).from(m.current, {
                                opacity: 0,
                                yPercent: 100,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(u.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(b.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(u.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(f.current, {
                                yPercent: 20,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(u.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(w.current, {
                                opacity: 0,
                                yPercent: 100,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: m.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(m.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(j.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: m.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(m.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(x.current, {
                                yPercent: 20,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: m.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(m.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(O.current, {
                                opacity: 0,
                                yPercent: 100,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: w.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(w.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(y.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: w.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(w.current.offsetHeight),
                                    toggleActions: "play pause puase restart",
                                    onUpdate: function(e) {
                                        1 === e.progress && function() {
                                            var e, t, i = [],
                                                r = document.querySelector("#confetti-background");
                                            for (e = 0; e < 25; e += 1)(t = document.createElement("div")).setAttribute("class", "confetti"), r.appendChild(t), i.push(t);
                                            l.b.to(i, {
                                                duration: 4,
                                                rotate: "random(70, 360)",
                                                width: "random(1.016vw, 4vw)",
                                                height: "random(1.016vw, 4vw)",
                                                physics2D: {
                                                    velocity: "random(100, 400)",
                                                    angle: "random(250, 300)",
                                                    rotate: "random(0, 100)",
                                                    gravity: 300
                                                }
                                            })
                                        }()
                                    }
                                }
                            }, "<").from(k.current, {
                                yPercent: 20,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: w.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<")
                        }), [t]),
                        z = Object(g.useCallback)((function() {
                            t && C.current.from(u.current, {
                                opacity: 0,
                                yPercent: 100,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: s.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, 0).from(v.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: s.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, 0).from(p.current, {
                                height: 0,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: h.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, 0).from(m.current, {
                                opacity: 0,
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(u.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(b.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(u.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(f.current, {
                                height: 0,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "-".concat(u.current.offsetHeight),
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(w.current, {
                                opacity: 0,
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(j.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(x.current, {
                                height: 0,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: u.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(O.current, {
                                opacity: 0,
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: m.current,
                                    scrub: !0,
                                    tart: "top bottom",
                                    toggleActions: "play pause puase restart"
                                }
                            }, "<").from(y.current, {
                                yPercent: 50,
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: m.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    toggleActions: "play pause puase restart",
                                    onUpdate: function(e) {
                                        1 === e.progress && function() {
                                            var e, t, i = [],
                                                r = document.querySelector("#confetti-background");
                                            for (e = 0; e < 25; e += 1)(t = document.createElement("div")).setAttribute("class", "confetti"), r.appendChild(t), i.push(t);
                                            l.b.to(i, {
                                                duration: 4,
                                                rotate: "random(70, 360)",
                                                width: "random(1.016vw, 2vw)",
                                                height: "random(1.016vw, 2vw)",
                                                physics2D: {
                                                    velocity: "random(150, 550)",
                                                    angle: "random(250, 300)",
                                                    rotate: "random(0, 100)",
                                                    gravity: 500
                                                }
                                            })
                                        }()
                                    }
                                }
                            }, "<")
                        }), [t]);
                    return Object(P.a)("entered", (function() {
                        t && h.current && d.a.create({
                            endTrigger: "#steps-section",
                            pin: !0,
                            pinSpacing: !1,
                            scroller: t,
                            trigger: h.current
                        })
                    }), [t]), Object(g.useEffect)((function() {
                        void 0 !== a && (a ? M() : z())
                    }), [z, a, M]), Object(r.jsx)(re, {
                        id: "steps-section",
                        children: Object(r.jsxs)(c, {
                            children: [Object(r.jsxs)("h3", {
                                className: "title",
                                ref: s,
                                children: ["Quote - Any fool can write code that a C", Object(r.jsx)("img", {
                                    className: "icon-lamp",
                                    src: "images/steps/lamp.svg",
                                    alt: "Lamp"
                                }), "mputer can understand. Good programmers write code that humans can understand."]
                            }), Object(r.jsxs)("div", {
                                className: "steps-title-section",
                                ref: h,
                                children: [Object(r.jsxs)("div", {
                                    children: [Object(r.jsx)("p", {
                                        className: "title",
                                        children: "Some Developers"
                                    }), Object(r.jsx)("div", {
                                        className: "separator",
                                        children: a ? Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/separator-gray-mobile.svg",
                                            draggable: !1,
                                            alt: "Separator figure"
                                        }) : Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/separator-gray.svg",
                                            draggable: !1,
                                            alt: "Separator figure"
                                        })
                                    })]
                                }), Object(r.jsxs)("div", {
                                    children: [Object(r.jsx)("div", {
                                        className: "title-img",
                                        children: a ? Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/logo.svg",
                                            draggable: !1,
                                            alt: "Alexshcer"
                                        }) : Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/logo.svg",
                                            draggable: !1,
                                            alt: "Alexshcer logo"
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "separator",
                                        children: a ? Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/separator-violet-mobile.svg",
                                            draggable: !1,
                                            alt: "Separator figure"
                                        }) : Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/separator-violet.svg",
                                            draggable: !1,
                                            alt: "Separator figure"
                                        })
                                    })]
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "step step1",
                                ref: u,
                                children: [Object(r.jsxs)("div", {
                                    className: "regular-marketing",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step1/regular-marketing.svg",
                                            draggable: !1,
                                            alt: "Lamp icon"
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title",
                                        children: "Content Creation"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "description",
                                    children: Object(r.jsxs)("p", {
                                        children: [Object(r.jsx)("span", {
                                            children: "1."
                                        }), " It all start with content creation but..."]
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "market-wise",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step1/market-wise.svg",
                                            draggable: !1,
                                            alt: "Lamp"
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "noise",
                                        ref: v,
                                        children: Object(r.jsxs)("picture", {
                                            children: [Object(r.jsx)("source", {
                                                srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step1/noise.webp",
                                                type: "image/webp"
                                            }), Object(r.jsx)("img", {
                                                src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step1/noise.png",
                                                draggable: !1,
                                                alt: "Black noise"
                                            })]
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title",
                                        children: "Content Creation"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "line",
                                    ref: p,
                                    children: Object(r.jsx)("img", {
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/line.svg",
                                        draggable: !1,
                                        alt: "Separator"
                                    })
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "step step2",
                                ref: m,
                                children: [Object(r.jsxs)("div", {
                                    className: "regular-marketing",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step2/regular-marketing.svg",
                                            draggable: !1,
                                            alt: "A/B testing"
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title",
                                        children: "Audience testing"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "description",
                                    children: Object(r.jsxs)("p", {
                                        children: [Object(r.jsx)("span", {
                                            children: "2."
                                        }), "  Audience Testing matters but.."]
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "market-wise",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step2/market-wise.svg",
                                            draggable: !1,
                                            alt: "Thumbs up and thumbs down"
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "noise",
                                        ref: b,
                                        children: Object(r.jsxs)("picture", {
                                            children: [Object(r.jsx)("source", {
                                                srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step2/noise.webp",
                                                type: "image/webp"
                                            }), Object(r.jsx)("img", {
                                                src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step2/noise.png",
                                                draggable: !1,
                                                alt: "Black noise"
                                            })]
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title step-title-big",
                                        children: "Results!"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "line",
                                    ref: f,
                                    children: Object(r.jsx)("img", {
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/line.svg",
                                        draggable: !1,
                                        alt: "Separator"
                                    })
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "step step3",
                                ref: w,
                                children: [Object(r.jsxs)("div", {
                                    className: "regular-marketing",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step3/regular-marketing.svg",
                                            draggable: !1,
                                            alt: "Broken lamp"
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title",
                                        children: "Content creation"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "description",
                                    children: Object(r.jsxs)("p", {
                                        children: [Object(r.jsx)("span", {
                                            children: "3."
                                        }), " At the End it all depends on Strategy."]
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "market-wise",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step3/market-wise.svg",
                                            draggable: !1,
                                            alt: "Fixed lamp"
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "noise",
                                        ref: j,
                                        children: Object(r.jsxs)("picture", {
                                            children: [Object(r.jsx)("source", {
                                                srcSet: "file:///D:/IMP%20FILES/My_projects/websitefile:///D:/IMP%20FILES/My_projects/website/images/steps/step3/noise.webp",
                                                type: "image/webp"
                                            }), Object(r.jsx)("img", {
                                                src: "file:///D:/IMP%20FILES/My_projects/websitefile:///D:/IMP%20FILES/My_projects/website/images/steps/step3/noise.png",
                                                draggable: !1,
                                                alt: "Black noise"
                                            })]
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title",
                                        children: "Optimization"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "line",
                                    ref: x,
                                    children: Object(r.jsx)("img", {
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/line.svg",
                                        draggable: !1,
                                        alt: "Separator"
                                    })
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "step step4",
                                ref: O,
                                children: [Object(r.jsxs)("div", {
                                    className: "regular-marketing",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step4/regular-marketing.svg",
                                            draggable: !1,
                                            alt: "Thumbs up and thumbs down"
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title",
                                        children: "Results"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "description",
                                    children: Object(r.jsxs)("p", {
                                        children: [Object(r.jsx)("span", {
                                            children: "4."
                                        }), " And It makes a Difference."]
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "market-wise",
                                    children: [Object(r.jsx)("div", {
                                        className: "icon",
                                        children: Object(r.jsx)("img", {
                                            src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step4/market-wise.svg",
                                            draggable: !1,
                                            alt: "Trophie"
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "noise",
                                        ref: y,
                                        children: Object(r.jsxs)("picture", {
                                            children: [Object(r.jsx)("source", {
                                                srcSet: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step4/noise.webp",
                                                type: "image/webp"
                                            }), Object(r.jsx)("img", {
                                                src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/step4/noise.png",
                                                draggable: !1,
                                                alt: "Black noise"
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        id: "confetti-wrapper",
                                        children: Object(r.jsx)("div", {
                                            id: "confetti-background"
                                        })
                                    }), Object(r.jsx)("span", {
                                        className: "step-title step-title-big step-title-big-green",
                                        children: "Biggest Results!"
                                    })]
                                }), a && Object(r.jsx)("div", {
                                    className: "line",
                                    ref: k,
                                    children: Object(r.jsx)("img", {
                                        src: "file:///D:/IMP%20FILES/My_projects/website/images/steps/line.svg",
                                        draggable: !1,
                                        alt: "Separator"
                                    })
                                })]
                            })]
                        })
                    })
                };
            t.default = function(e) {
                var t = e.scrollBar,
                    i = e.scrollContainer;
                return Object(r.jsxs)(Z, {
                    scrollBar: t,
                    scrollContainer: i,
                    children: [Object(r.jsx)(f, {
                        scrollContainer: i
                    }), Object(r.jsx)(m, {
                        scrollContainer: i
                    }), Object(r.jsx)(ne, {
                        scrollContainer: i
                    }), Object(r.jsx)(v, {
                        scrollContainer: i
                    }), Object(r.jsx)(ie, {
                        scrollContainer: i
                    }), Object(r.jsx)(ee, {
                        scrollContainer: i
                    }), Object(r.jsx)(q, {
                        scrollContainer: i
                    })]
                })
            }
        },
        iWaP: function(e, t, i) {
            ! function(e, t) {
                "use strict";

                function i(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function r(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), i.push.apply(i, r)
                    }
                    return i
                }

                function n(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach((function(t) {
                            i(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function a(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var i = [],
                                r = !0,
                                n = !1,
                                a = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (i.push(o.value), !t || i.length !== t); r = !0);
                            } catch (e) {
                                n = !0, a = e
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (n) throw a
                                }
                            }
                            return i
                        }
                    }(e, t) || s(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(e) {
                    return function(e) {
                        if (Array.isArray(e)) return c(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || s(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function s(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(e, t) : void 0
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
                    return r
                }

                function l(e) {
                    var t, i, r, a, s, c, l, d, u, v, p, m, b, f, w, j, x, O, y, k, C, M, z, N, L, S, H, A, V, R, E, P, I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        T = "data-keen-slider-moves",
                        _ = "data-keen-slider-v",
                        Z = [],
                        B = null,
                        D = !1,
                        F = !1,
                        W = 0,
                        q = [];

                    function U(e, t, i) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        e.addEventListener(t, i, r), Z.push([e, t, i, r])
                    }

                    function Y(e) {
                        if (O && y === X(e) && se()) {
                            var i = $(e).x;
                            if (!te(e) && N) return G(e);
                            N && (De(), k = i, t.setAttribute(T, !0), N = !1), e.cancelable && e.preventDefault(), Re(z(k - i, Ke) * (le() ? -1 : 1), e.timeStamp), k = i
                        }
                    }

                    function K(e) {
                        O || !se() || ee(e.target) || (O = !0, N = !0, y = X(e), te(e), ue(), x = v, k = $(e).x, Re(0, e.timeStamp), ae("dragStart"))
                    }

                    function G(e) {
                        O && y === X(e, !0) && se() && (t.removeAttribute(T), O = !1, me(), ae("dragEnd"))
                    }

                    function J(e) {
                        return e.changedTouches
                    }

                    function X(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? J(e) : Q(e);
                        return t ? t[0] ? t[0].identifier : "error" : "default"
                    }

                    function Q(e) {
                        return e.targetTouches
                    }

                    function $(e) {
                        var t = Q(e);
                        return {
                            x: ge() ? t ? t[0].screenY : e.pageY : t ? t[0].screenX : e.pageX,
                            timestamp: e.timeStamp
                        }
                    }

                    function ee(e) {
                        return e.hasAttribute(j.preventEvent)
                    }

                    function te(e) {
                        var t = Q(e);
                        if (!t) return !0;
                        var i = t[0],
                            r = ge() ? i.clientY : i.clientX,
                            n = ge() ? i.clientX : i.clientY,
                            a = void 0 !== C && void 0 !== M && Math.abs(M - n) <= Math.abs(C - r);
                        return C = r, M = n, a
                    }

                    function ie(e) {
                        se() && O && e.preventDefault()
                    }

                    function re() {
                        U(window, "orientationchange", Le), U(window, "resize", (function() {
                            return Ne()
                        })), U(t, "dragstart", (function(e) {
                            se() && e.preventDefault()
                        })), U(t, "mousedown", K), U(j.cancelOnLeave ? t : window, "mousemove", Y), j.cancelOnLeave && U(t, "mouseleave", G), U(window, "mouseup", G), U(t, "touchstart", K, {
                            passive: !0
                        }), U(t, "touchmove", Y, {
                            passive: !1
                        }), U(t, "touchend", G, {
                            passive: !0
                        }), U(t, "touchcancel", G, {
                            passive: !0
                        }), U(window, "wheel", ie, {
                            passive: !1
                        })
                    }

                    function ne() {
                        Z.forEach((function(e) {
                            e[0].removeEventListener(e[1], e[2], e[3])
                        })), Z = []
                    }

                    function ae(e) {
                        j[e] && j[e](Ke)
                    }

                    function oe() {
                        return j.centered
                    }

                    function se() {
                        return void 0 !== i ? i : j.controls
                    }

                    function ce() {
                        return j.loop && r > 1
                    }

                    function le() {
                        return j.rtl
                    }

                    function de() {
                        return !j.loop && j.rubberband
                    }

                    function ge() {
                        return !!j.vertical
                    }

                    function he() {
                        L = window.requestAnimationFrame(ve)
                    }

                    function ue() {
                        L && (window.cancelAnimationFrame(L), L = null), S = null
                    }

                    function ve(e) {
                        S || (S = e);
                        var t = e - S,
                            i = pe(t);
                        if (t >= A) return Re(H - R, !1), P ? P() : void ae("afterChange");
                        var r = Ee(i);
                        if (0 === r || ce() || de() || E) {
                            if (0 !== r && de() && !E) return xe();
                            R += i, Re(i, !1), he()
                        } else Re(i - r, !1)
                    }

                    function pe(e) {
                        return H * V(e / A) - R
                    }

                    function me() {
                        switch (ae("beforeChange"), j.mode) {
                            case "free":
                                we();
                                break;
                            case "free-snap":
                                je();
                                break;
                            case "snap":
                            default:
                                be()
                        }
                    }

                    function be() {
                        fe((1 === l && 0 !== p ? x : v) + Math.sign(p))
                    }

                    function fe(e, t) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j.duration,
                            r = function(e) {
                                return 1 + --e * e * e * e * e
                            };
                        Oe(_e(e = Te(e, arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] && arguments[4])), i, r, t)
                    }

                    function we() {
                        if (0 === b) return !(!Ee(0) || ce()) && fe(v);
                        var e = j.friction / Math.pow(Math.abs(b), -.5);
                        Oe(Math.pow(b, 2) / e * Math.sign(b), 6 * Math.abs(b / e), (function(e) {
                            return 1 - Math.pow(1 - e, 5)
                        }))
                    }

                    function je() {
                        if (0 === b) return fe(v);
                        var e = j.friction / Math.pow(Math.abs(b), -.5),
                            t = Math.pow(b, 2) / e * Math.sign(b),
                            i = 6 * Math.abs(b / e),
                            r = (W + t) / (c / l);
                        Oe((-1 === p ? Math.floor(r) : Math.ceil(r)) * (c / l) - W, i, (function(e) {
                            return 1 - Math.pow(1 - e, 5)
                        }))
                    }

                    function xe() {
                        if (ue(), 0 === b) return fe(v, !0);
                        var e = .04 / Math.pow(Math.abs(b), -.5),
                            t = Math.pow(b, 2) / e * Math.sign(b),
                            i = function(e) {
                                return --e * e * e + 1
                            },
                            r = b;
                        Oe(t, 3 * Math.abs(r / e), i, !0, (function() {
                            Oe(_e(Te(v)), 500, i, !0)
                        }))
                    }

                    function Oe(e, t, i, r, n) {
                        ue(), H = e, R = 0, A = t, V = i, E = r, P = n, S = null, he()
                    }

                    function ye(i) {
                        var r = g(e);
                        r.length && (t = r[0], Ne(i), re(), ae("mounted"))
                    }

                    function ke() {
                        var e, t = I.breakpoints || [];
                        for (var i in t) window.matchMedia(i).matches && (e = i);
                        if (e === B) return !0;
                        var r = (B = e) ? t[B] : I;
                        r.breakpoints && B && delete r.breakpoints, j = n(n(n({}, Ye), I), r), D = !0, u = null, ze()
                    }

                    function Ce(e) {
                        return "function" == typeof e ? e() : h(e, 1, Math.max(ce() ? r - 1 : r, 1))
                    }

                    function Me() {
                        ke(), F = !0, ae("created")
                    }

                    function ze(e, t) {
                        e && (I = e), t && (B = null), Se(), ye(t)
                    }

                    function Ne(e) {
                        var i = window.innerWidth;
                        if (ke() && (i !== u || e)) {
                            u = i;
                            var n = j.slides;
                            "number" == typeof n ? (s = null, r = n) : (s = g(n, t), r = s ? s.length : 0);
                            var o = j.dragSpeed;
                            z = "function" == typeof o ? o : function(e) {
                                return e * o
                            }, c = ge() ? t.offsetHeight : t.offsetWidth, l = Ce(j.slidesPerView), d = h(j.spacing, 0, c / (l - 1) - 1), c += d, a = oe() ? (c / 2 - c / l / 2) / c : 0, Ae();
                            var p = !F || D && j.resetSlide ? j.initial : v;
                            Ue(ce() ? p : Pe(p)), ge() && t.setAttribute(_, !0), D = !1
                        }
                    }

                    function Le(e) {
                        Ne(), setTimeout(Ne, 500), setTimeout(Ne, 2e3)
                    }

                    function Se() {
                        ne(), Ve(), t && t.hasAttribute(_) && t.removeAttribute(_), ae("destroyed")
                    }

                    function He() {
                        s && s.forEach((function(e, t) {
                            var i = f[t].distance * c - t * (c / l - d / l - d / l * (l - 1)),
                                r = ge() ? 0 : i,
                                n = ge() ? i : 0,
                                a = "translate3d(".concat(r, "px, ").concat(n, "px, 0)");
                            e.style.transform = a, e.style["-webkit-transform"] = a
                        }))
                    }

                    function Ae() {
                        s && s.forEach((function(e) {
                            var t = "calc(".concat(100 / l, "% - ").concat(d / l * (l - 1), "px)");
                            ge() ? (e.style["min-height"] = t, e.style["max-height"] = t) : (e.style["min-width"] = t, e.style["max-width"] = t)
                        }))
                    }

                    function Ve() {
                        if (s) {
                            var e = ["transform", "-webkit-transform"];
                            e = [].concat(o(e), ge ? ["min-height", "max-height"] : ["min-width", "max-width"]), s.forEach((function(t) {
                                e.forEach((function(e) {
                                    t.style.removeProperty(e)
                                }))
                            }))
                        }
                    }

                    function Re(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        Be(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now()), t && (e = We(e)), W += e, Fe()
                    }

                    function Ee(e) {
                        var t = c * (r - 1 * (oe() ? 1 : l)) / l,
                            i = W + e;
                        return i > t ? i - t : i < 0 ? i : 0
                    }

                    function Pe(e) {
                        return h(e, 0, r - 1 - (oe() ? 0 : l - 1))
                    }

                    function Ie() {
                        var e = Math.abs(w),
                            t = W < 0 ? 1 - e : e;
                        return {
                            direction: p,
                            progressTrack: t,
                            progressSlides: t * r / (r - 1),
                            positions: f,
                            position: W,
                            speed: b,
                            relativeSlide: (v % r + r) % r,
                            absoluteSlide: v,
                            size: r,
                            slidesPerView: l,
                            widthOrHeight: c
                        }
                    }

                    function Te(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return ce() ? t ? Ze(e, i) : e : Pe(e)
                    }

                    function _e(e) {
                        return -(-c / l * e + W)
                    }

                    function Ze(e, t) {
                        var i = (v % r + r) % r,
                            n = i < (e = (e % r + r) % r) ? -i - r + e : -(i - e),
                            a = i > e ? r - i + e : e - i,
                            o = t ? Math.abs(n) <= a ? n : a : e < i ? n : a;
                        return v + o
                    }

                    function Be(e, t) {
                        clearTimeout(m);
                        var i = Math.sign(e);
                        if (i !== p && De(), p = i, q.push({
                                distance: e,
                                time: t
                            }), m = setTimeout((function() {
                                q = [], b = 0
                            }), 50), (q = q.slice(-6)).length <= 1 || 0 === p) return b = 0;
                        var r = q.slice(0, -1).reduce((function(e, t) {
                                return e + t.distance
                            }), 0),
                            n = q[q.length - 1].time,
                            a = q[0].time;
                        b = h(r / (n - a), -10, 10)
                    }

                    function De() {
                        q = []
                    }

                    function Fe() {
                        w = ce() ? W % (c * r / l) / (c * r / l) : W / (c * r / l), qe();
                        for (var e = [], t = 0; t < r; t++) {
                            var i = (1 / r * t - (w < 0 && ce() ? w + 1 : w)) * r / l + a;
                            ce() && (i += i > (r - 1) / l ? -r / l : i < -r / l + 1 ? r / l : 0);
                            var n = 1 / l,
                                o = i + n,
                                s = o < n ? o / n : o > 1 ? 1 - (o - 1) * l / 1 : 1;
                            e.push({
                                portion: s < 0 || s > 1 ? 0 : s,
                                distance: le() ? -1 * i + 1 - n : i
                            })
                        }
                        f = e, He(), ae("move")
                    }

                    function We(e) {
                        if (ce()) return e;
                        var t, i = Ee(e);
                        return de() ? 0 === i ? e : e * (t = i / c, (1 - Math.abs(t)) * (1 - Math.abs(t))) : e - i
                    }

                    function qe() {
                        var e = Math.round(W / (c / l));
                        e !== v && (!ce() && (e < 0 || e > r - 1) || (v = e, ae("slideChanged")))
                    }

                    function Ue(e) {
                        ae("beforeChange"), Re(_e(e), !1), ae("afterChange")
                    }
                    var Ye = {
                            centered: !1,
                            breakpoints: null,
                            controls: !0,
                            dragSpeed: 1,
                            friction: .0025,
                            loop: !1,
                            initial: 0,
                            duration: 500,
                            preventEvent: "data-keen-slider-pe",
                            slides: ".keen-slider__slide",
                            vertical: !1,
                            resetSlide: !1,
                            slidesPerView: 1,
                            spacing: 0,
                            mode: "snap",
                            rtl: !1,
                            rubberband: !0,
                            cancelOnLeave: !0
                        },
                        Ke = {
                            controls: function(e) {
                                i = e
                            },
                            destroy: Se,
                            refresh: function(e) {
                                ze(e, !0)
                            },
                            next: function() {
                                fe(v + 1, !0)
                            },
                            prev: function() {
                                fe(v - 1, !0)
                            },
                            moveToSlide: function(e, t) {
                                fe(e, !0, t)
                            },
                            moveToSlideRelative: function(e) {
                                fe(e, !0, arguments.length > 2 ? arguments[2] : void 0, !0, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
                            },
                            resize: function() {
                                Ne(!0)
                            },
                            details: function() {
                                return Ie()
                            },
                            options: function() {
                                var e = n({}, j);
                                return delete e.breakpoints, e
                            }
                        };
                    return Me(), Ke
                }

                function d(e) {
                    return Array.prototype.slice.call(e)
                }

                function g(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                    return "function" == typeof e ? d(e()) : "string" == typeof e ? d(t.querySelectorAll(e)) : e instanceof HTMLElement != 0 ? [e] : e instanceof NodeList != 0 ? e : []
                }

                function h(e, t, i) {
                    return Math.min(Math.max(e, t), i)
                }
                Math.sign || (Math.sign = function(e) {
                    return (e > 0) - (e < 0) || +e
                });
                var u = function e(t, i) {
                    var r = Object.prototype.toString.call(t);
                    if (r !== Object.prototype.toString.call(i)) return !1;
                    if (["[object Array]", "[object Object]"].indexOf(r) < 0) return !1;
                    var n = "[object Array]" === r ? t.length : Object.keys(t).length;
                    if (n !== ("[object Array]" === r ? i.length : Object.keys(i).length)) return !1;
                    var a = function(t, i) {
                        var r = Object.prototype.toString.call(t);
                        if (["[object Array]", "[object Object]"].indexOf(r) >= 0) {
                            if (!e(t, i)) return !1
                        } else {
                            if (r !== Object.prototype.toString.call(i)) return !1;
                            if ("[object Function]" === r) {
                                if (t.toString() !== i.toString()) return !1
                            } else if (t !== i) return !1
                        }
                    };
                    if ("[object Array]" === r) {
                        for (var o = 0; o < n; o++)
                            if (!1 === a(t[o], i[o])) return !1
                    } else
                        for (var s in t)
                            if (t.hasOwnProperty(s) && !1 === a(t[s], i[s])) return !1;
                    return !0
                };
                e.default = l, e.useKeenSlider = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.useRef(),
                        r = t.useRef();

                    function n(e) {
                        return u(r.current, e) || (r.current = e), r.current
                    }
                    var o = a(t.useState(null), 2),
                        s = o[0],
                        c = o[1];
                    return t.useEffect((function() {
                        var e = new l(i.current, r.current);
                        return c(e),
                            function() {
                                e.destroy()
                            }
                    }), [n(e)]), [i, s]
                }, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, i("q1tI"))
        },
        lSNA: function(e, t) {
            e.exports = function(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
        },
        lwAK: function(e, t, i) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var n = ((r = i("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = n
        },
        sKKC: function(e, t, i) {},
        vNVm: function(e, t, i) {
            "use strict";
            var r = i("J4zp"),
                n = i("TqRt");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    i = e.disabled || !s,
                    n = (0, a.useRef)(),
                    l = (0, a.useState)(!1),
                    d = r(l, 2),
                    g = d[0],
                    h = d[1],
                    u = (0, a.useCallback)((function(e) {
                        n.current && (n.current(), n.current = void 0), i || g || e && e.tagName && (n.current = function(e, t, i) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        i = c.get(t);
                                    if (i) return i;
                                    var r = new Map,
                                        n = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    i = e.isIntersecting || e.intersectionRatio > 0;
                                                t && i && t(i)
                                            }))
                                        }), e);
                                    return c.set(t, i = {
                                        id: t,
                                        observer: n,
                                        elements: r
                                    }), i
                                }(i),
                                n = r.id,
                                a = r.observer,
                                o = r.elements;
                            return o.set(e, t), a.observe(e),
                                function() {
                                    a.unobserve(e), 0 === o.size && (a.disconnect(), c.delete(n))
                                }
                        }(e, (function(e) {
                            return e && h(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [i, t, g]);
                return (0, a.useEffect)((function() {
                    s || g || (0, o.default)((function() {
                        return h(!0)
                    }))
                }), [g]), [u, g]
            };
            var a = i("q1tI"),
                o = n(i("0G5g")),
                s = "undefined" !== typeof IntersectionObserver;
            var c = new Map
        }
    }
]);