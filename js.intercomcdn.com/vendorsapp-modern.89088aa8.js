/*! For license information please see vendors~app-modern.89088aa8.js.LICENSE.txt */
(self.webpackChunkintercom_js = self.webpackChunkintercom_js || []).push([
[3481], {
    84722: (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        var __webpack_unused_export__;
        __webpack_unused_export__ = {
            value: !0
        };
        var React = __webpack_require__(67294);

        function _interopNamespace(r) {
            if (r && r.__esModule) return r;
            var i = Object.create(null);
            return r && Object.keys(r).forEach((function(a) {
                if ("default" !== a) {
                    var s = Object.getOwnPropertyDescriptor(r, a);
                    Object.defineProperty(i, a, s.get ? s : {
                        enumerable: !0,
                        get: function() {
                            return r[a]
                        }
                    })
                }
            })), i.default = r, Object.freeze(i)
        }
        var React__namespace = _interopNamespace(React),
            extendStatics = function(r, i) {
                return (extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(r, i) {
                        r.__proto__ = i
                    } || function(r, i) {
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
                    })(r, i)
            };

        function __extends(r, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

            function a() {
                this.constructor = r
            }
            extendStatics(r, i), r.prototype = null === i ? Object.create(i) : (a.prototype = i.prototype, new a)
        }
        var __assign = function() {
            return (__assign = Object.assign || function(r) {
                for (var i, a = 1, s = arguments.length; a < s; a++)
                    for (var n in i = arguments[a]) Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
                return r
            }).apply(this, arguments)
        };

        function __rest(r, i) {
            var a = {};
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && i.indexOf(s) < 0 && (a[s] = r[s]);
            if (null != r && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (s = Object.getOwnPropertySymbols(r); n < s.length; n++) i.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[n]) && (a[s[n]] = r[s[n]])
            }
            return a
        }

        function __decorate(r, i, a, s) {
            var n, o = arguments.length,
                h = o < 3 ? i : null === s ? s = Object.getOwnPropertyDescriptor(i, a) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) h = Reflect.decorate(r, i, a, s);
            else
                for (var l = r.length - 1; l >= 0; l--)(n = r[l]) && (h = (o < 3 ? n(h) : o > 3 ? n(i, a, h) : n(i, a)) || h);
            return o > 3 && h && Object.defineProperty(i, a, h), h
        }

        function __param(r, i) {
            return function(a, s) {
                i(a, s, r)
            }
        }

        function __metadata(r, i) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(r, i)
        }

        function __awaiter(r, i, a, s) {
            return new(a || (a = Promise))((function(n, o) {
                function h(r) {
                    try {
                        p(s.next(r))
                    } catch (r) {
                        o(r)
                    }
                }

                function l(r) {
                    try {
                        p(s.throw(r))
                    } catch (r) {
                        o(r)
                    }
                }

                function p(r) {
                    var i;
                    r.done ? n(r.value) : (i = r.value, i instanceof a ? i : new a((function(r) {
                        r(i)
                    }))).then(h, l)
                }
                p((s = s.apply(r, i || [])).next())
            }))
        }

        function __generator(r, i) {
            var a, s, n, o, h = {
                label: 0,
                sent: function() {
                    if (1 & n[0]) throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function l(o) {
                return function(l) {
                    return function(o) {
                        if (a) throw new TypeError("Generator is already executing.");
                        for (; h;) try {
                            if (a = 1, s && (n = 2 & o[0] ? s.return : o[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, o[1])).done) return n;
                            switch (s = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                                case 0:
                                case 1:
                                    n = o;
                                    break;
                                case 4:
                                    return h.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    h.label++, s = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = h.ops.pop(), h.trys.pop();
                                    continue;
                                default:
                                    if (!((n = (n = h.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        h = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                        h.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && h.label < n[1]) {
                                        h.label = n[1], n = o;
                                        break
                                    }
                                    if (n && h.label < n[2]) {
                                        h.label = n[2], h.ops.push(o);
                                        break
                                    }
                                    n[2] && h.ops.pop(), h.trys.pop();
                                    continue
                            }
                            o = i.call(r, h)
                        } catch (r) {
                            o = [6, r], s = 0
                        } finally {
                            a = n = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
        var __createBinding = Object.create ? function(r, i, a, s) {
            void 0 === s && (s = a), Object.defineProperty(r, s, {
                enumerable: !0,
                get: function() {
                    return i[a]
                }
            })
        } : function(r, i, a, s) {
            void 0 === s && (s = a), r[s] = i[a]
        };

        function __exportStar(r, i) {
            for (var a in r) "default" === a || Object.prototype.hasOwnProperty.call(i, a) || __createBinding(i, r, a)
        }

        function __values(r) {
            var i = "function" == typeof Symbol && Symbol.iterator,
                a = i && r[i],
                s = 0;
            if (a) return a.call(r);
            if (r && "number" == typeof r.length) return {
                next: function() {
                    return r && s >= r.length && (r = void 0), {
                        value: r && r[s++],
                        done: !r
                    }
                }
            };
            throw new TypeError(i ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function __read(r, i) {
            var a = "function" == typeof Symbol && r[Symbol.iterator];
            if (!a) return r;
            var s, n, o = a.call(r),
                h = [];
            try {
                for (;
                    (void 0 === i || i-- > 0) && !(s = o.next()).done;) h.push(s.value)
            } catch (r) {
                n = {
                    error: r
                }
            } finally {
                try {
                    s && !s.done && (a = o.return) && a.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
            return h
        }

        function __spread() {
            for (var r = [], i = 0; i < arguments.length; i++) r = r.concat(__read(arguments[i]));
            return r
        }

        function __spreadArrays() {
            for (var r = 0, i = 0, a = arguments.length; i < a; i++) r += arguments[i].length;
            var s = Array(r),
                n = 0;
            for (i = 0; i < a; i++)
                for (var o = arguments[i], h = 0, l = o.length; h < l; h++, n++) s[n] = o[h];
            return s
        }

        function __spreadArray(r, i, a) {
            if (a || 2 === arguments.length)
                for (var s, n = 0, o = i.length; n < o; n++) !s && n in i || (s || (s = Array.prototype.slice.call(i, 0, n)), s[n] = i[n]);
            return r.concat(s || Array.prototype.slice.call(i))
        }

        function __await(r) {
            return this instanceof __await ? (this.v = r, this) : new __await(r)
        }

        function __asyncGenerator(r, i, a) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var s, n = a.apply(r, i || []),
                o = [];
            return s = {}, h("next"), h("throw"), h("return"), s[Symbol.asyncIterator] = function() {
                return this
            }, s;

            function h(r) {
                n[r] && (s[r] = function(i) {
                    return new Promise((function(a, s) {
                        o.push([r, i, a, s]) > 1 || l(r, i)
                    }))
                })
            }

            function l(r, i) {
                try {
                    (a = n[r](i)).value instanceof __await ? Promise.resolve(a.value.v).then(p, c) : f(o[0][2], a)
                } catch (r) {
                    f(o[0][3], r)
                }
                var a
            }

            function p(r) {
                l("next", r)
            }

            function c(r) {
                l("throw", r)
            }

            function f(r, i) {
                r(i), o.shift(), o.length && l(o[0][0], o[0][1])
            }
        }

        function __asyncDelegator(r) {
            var i, a;
            return i = {}, s("next"), s("throw", (function(r) {
                throw r
            })), s("return"), i[Symbol.iterator] = function() {
                return this
            }, i;

            function s(s, n) {
                i[s] = r[s] ? function(i) {
                    return (a = !a) ? {
                        value: __await(r[s](i)),
                        done: "return" === s
                    } : n ? n(i) : i
                } : n
            }
        }

        function __asyncValues(r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var i, a = r[Symbol.asyncIterator];
            return a ? a.call(r) : (r = "function" == typeof __values ? __values(r) : r[Symbol.iterator](), i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
                return this
            }, i);

            function s(a) {
                i[a] = r[a] && function(i) {
                    return new Promise((function(s, n) {
                        ! function(r, i, a, s) {
                            Promise.resolve(s).then((function(i) {
                                r({
                                    value: i,
                                    done: a
                                })
                            }), i)
                        }(s, n, (i = r[a](i)).done, i.value)
                    }))
                }
            }
        }

        function __makeTemplateObject(r, i) {
            return Object.defineProperty ? Object.defineProperty(r, "raw", {
                value: i
            }) : r.raw = i, r
        }
        var __setModuleDefault = Object.create ? function(r, i) {
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: i
            })
        } : function(r, i) {
            r.default = i
        };

        function __importStar(r) {
            if (r && r.__esModule) return r;
            var i = {};
            if (null != r)
                for (var a in r) "default" !== a && Object.prototype.hasOwnProperty.call(r, a) && __createBinding(i, r, a);
            return __setModuleDefault(i, r), i
        }

        function __importDefault(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }

        function __classPrivateFieldGet(r, i, a, s) {
            if ("a" === a && !s) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof i ? r !== i || !s : !i.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === a ? s : "a" === a ? s.call(r) : s ? s.value : i.get(r)
        }

        function __classPrivateFieldSet(r, i, a, s, n) {
            if ("m" === s) throw new TypeError("Private method is not writable");
            if ("a" === s && !n) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof i ? r !== i || !n : !i.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === s ? n.call(r, a) : n ? n.value = a : i.set(r, a), a
        }
        var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {};

        function unwrapExports(r) {
            return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
        }

        function createCommonjsModule(r, i) {
            return r(i = {
                exports: {}
            }, i.exports), i.exports
        }

        function getCjsExportFromNamespace(r) {
            return r && r.default || r
        }

        function commonjsRequire() {
            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
        }
        var lottie = createCommonjsModule((function(module, exports) {
                var e;
                "undefined" != typeof navigator && (e = function() {
                    var svgNS = "http://www.w3.org/2000/svg",
                        locationHref = "",
                        _useWebWorker = !1,
                        initialDefaultFrame = -999999,
                        setWebWorker = function(r) {
                            _useWebWorker = !!r
                        },
                        getWebWorker = function() {
                            return _useWebWorker
                        },
                        setLocationHref = function(r) {
                            locationHref = r
                        },
                        getLocationHref = function() {
                            return locationHref
                        };

                    function createTag(r) {
                        return document.createElement(r)
                    }

                    function extendPrototype(r, i) {
                        var a, s, n = r.length;
                        for (a = 0; a < n; a += 1)
                            for (var o in s = r[a].prototype) Object.prototype.hasOwnProperty.call(s, o) && (i.prototype[o] = s[o])
                    }

                    function getDescriptor(r, i) {
                        return Object.getOwnPropertyDescriptor(r, i)
                    }

                    function createProxyFunction(r) {
                        function i() {}
                        return i.prototype = r, i
                    }
                    var audioControllerFactory = function() {
                            function r(r) {
                                this.audios = [], this.audioFactory = r, this._volume = 1, this._isMuted = !1
                            }
                            return r.prototype = {
                                    addAudio: function(r) {
                                        this.audios.push(r)
                                    },
                                    pause: function() {
                                        var r, i = this.audios.length;
                                        for (r = 0; r < i; r += 1) this.audios[r].pause()
                                    },
                                    resume: function() {
                                        var r, i = this.audios.length;
                                        for (r = 0; r < i; r += 1) this.audios[r].resume()
                                    },
                                    setRate: function(r) {
                                        var i, a = this.audios.length;
                                        for (i = 0; i < a; i += 1) this.audios[i].setRate(r)
                                    },
                                    createAudio: function(r) {
                                        return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
                                            src: [r]
                                        }) : {
                                            isPlaying: !1,
                                            play: function() {
                                                this.isPlaying = !0
                                            },
                                            seek: function() {
                                                this.isPlaying = !1
                                            },
                                            playing: function() {},
                                            rate: function() {},
                                            setVolume: function() {}
                                        }
                                    },
                                    setAudioFactory: function(r) {
                                        this.audioFactory = r
                                    },
                                    setVolume: function(r) {
                                        this._volume = r, this._updateVolume()
                                    },
                                    mute: function() {
                                        this._isMuted = !0, this._updateVolume()
                                    },
                                    unmute: function() {
                                        this._isMuted = !1, this._updateVolume()
                                    },
                                    getVolume: function() {
                                        return this._volume
                                    },
                                    _updateVolume: function() {
                                        var r, i = this.audios.length;
                                        for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
                                    }
                                },
                                function() {
                                    return new r
                                }
                        }(),
                        createTypedArray = function() {
                            function r(r, i) {
                                var a, s = 0,
                                    n = [];
                                switch (r) {
                                    case "int16":
                                    case "uint8c":
                                        a = 1;
                                        break;
                                    default:
                                        a = 1.1
                                }
                                for (s = 0; s < i; s += 1) n.push(a);
                                return n
                            }
                            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(i, a) {
                                return "float32" === i ? new Float32Array(a) : "int16" === i ? new Int16Array(a) : "uint8c" === i ? new Uint8ClampedArray(a) : r(i, a)
                            } : r
                        }();

                    function createSizedArray(r) {
                        return Array.apply(null, {
                            length: r
                        })
                    }

                    function _typeof$6(r) {
                        return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }
                    var subframeEnabled = !0,
                        expressionsPlugin = null,
                        expressionsInterfaces = null,
                        idPrefix$1 = "",
                        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        _shouldRoundValues = !1,
                        bmPow = Math.pow,
                        bmSqrt = Math.sqrt,
                        bmFloor = Math.floor,
                        bmMax = Math.max,
                        bmMin = Math.min,
                        BMMath = {};

                    function ProjectInterface$1() {
                        return {}
                    }! function() {
                        var r, i = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                            a = i.length;
                        for (r = 0; r < a; r += 1) BMMath[i[r]] = Math[i[r]]
                    }(), BMMath.random = Math.random, BMMath.abs = function(r) {
                        if ("object" === _typeof$6(r) && r.length) {
                            var i, a = createSizedArray(r.length),
                                s = r.length;
                            for (i = 0; i < s; i += 1) a[i] = Math.abs(r[i]);
                            return a
                        }
                        return Math.abs(r)
                    };
                    var defaultCurveSegments = 150,
                        degToRads = Math.PI / 180,
                        roundCorner = .5519;

                    function roundValues(r) {
                        _shouldRoundValues = !!r
                    }

                    function bmRnd(r) {
                        return _shouldRoundValues ? Math.round(r) : r
                    }

                    function styleDiv(r) {
                        r.style.position = "absolute", r.style.top = 0, r.style.left = 0, r.style.display = "block", r.style.transformOrigin = "0 0", r.style.webkitTransformOrigin = "0 0", r.style.backfaceVisibility = "visible", r.style.webkitBackfaceVisibility = "visible", r.style.transformStyle = "preserve-3d", r.style.webkitTransformStyle = "preserve-3d", r.style.mozTransformStyle = "preserve-3d"
                    }

                    function BMEnterFrameEvent(r, i, a, s) {
                        this.type = r, this.currentTime = i, this.totalTime = a, this.direction = s < 0 ? -1 : 1
                    }

                    function BMCompleteEvent(r, i) {
                        this.type = r, this.direction = i < 0 ? -1 : 1
                    }

                    function BMCompleteLoopEvent(r, i, a, s) {
                        this.type = r, this.currentLoop = a, this.totalLoops = i, this.direction = s < 0 ? -1 : 1
                    }

                    function BMSegmentStartEvent(r, i, a) {
                        this.type = r, this.firstFrame = i, this.totalFrames = a
                    }

                    function BMDestroyEvent(r, i) {
                        this.type = r, this.target = i
                    }

                    function BMRenderFrameErrorEvent(r, i) {
                        this.type = "renderFrameError", this.nativeError = r, this.currentTime = i
                    }

                    function BMConfigErrorEvent(r) {
                        this.type = "configError", this.nativeError = r
                    }

                    function BMAnimationConfigErrorEvent(r, i) {
                        this.type = r, this.nativeError = i
                    }
                    var createElementID = (_count = 0, function() {
                            return idPrefix$1 + "__lottie_element_" + (_count += 1)
                        }),
                        _count;

                    function HSVtoRGB(r, i, a) {
                        var s, n, o, h, l, p, c, f;
                        switch (p = a * (1 - i), c = a * (1 - (l = 6 * r - (h = Math.floor(6 * r))) * i), f = a * (1 - (1 - l) * i), h % 6) {
                            case 0:
                                s = a, n = f, o = p;
                                break;
                            case 1:
                                s = c, n = a, o = p;
                                break;
                            case 2:
                                s = p, n = a, o = f;
                                break;
                            case 3:
                                s = p, n = c, o = a;
                                break;
                            case 4:
                                s = f, n = p, o = a;
                                break;
                            case 5:
                                s = a, n = p, o = c
                        }
                        return [s, n, o]
                    }

                    function RGBtoHSV(r, i, a) {
                        var s, n = Math.max(r, i, a),
                            o = Math.min(r, i, a),
                            h = n - o,
                            l = 0 === n ? 0 : h / n,
                            p = n / 255;
                        switch (n) {
                            case o:
                                s = 0;
                                break;
                            case r:
                                s = i - a + h * (i < a ? 6 : 0), s /= 6 * h;
                                break;
                            case i:
                                s = a - r + 2 * h, s /= 6 * h;
                                break;
                            case a:
                                s = r - i + 4 * h, s /= 6 * h
                        }
                        return [s, l, p]
                    }

                    function addSaturationToRGB(r, i) {
                        var a = RGBtoHSV(255 * r[0], 255 * r[1], 255 * r[2]);
                        return a[1] += i, a[1] > 1 ? a[1] = 1 : a[1] <= 0 && (a[1] = 0), HSVtoRGB(a[0], a[1], a[2])
                    }

                    function addBrightnessToRGB(r, i) {
                        var a = RGBtoHSV(255 * r[0], 255 * r[1], 255 * r[2]);
                        return a[2] += i, a[2] > 1 ? a[2] = 1 : a[2] < 0 && (a[2] = 0), HSVtoRGB(a[0], a[1], a[2])
                    }

                    function addHueToRGB(r, i) {
                        var a = RGBtoHSV(255 * r[0], 255 * r[1], 255 * r[2]);
                        return a[0] += i / 360, a[0] > 1 ? a[0] -= 1 : a[0] < 0 && (a[0] += 1), HSVtoRGB(a[0], a[1], a[2])
                    }
                    var rgbToHex = function() {
                            var r, i, a = [];
                            for (r = 0; r < 256; r += 1) i = r.toString(16), a[r] = 1 === i.length ? "0" + i : i;
                            return function(r, i, s) {
                                return r < 0 && (r = 0), i < 0 && (i = 0), s < 0 && (s = 0), "#" + a[r] + a[i] + a[s]
                            }
                        }(),
                        setSubframeEnabled = function(r) {
                            subframeEnabled = !!r
                        },
                        getSubframeEnabled = function() {
                            return subframeEnabled
                        },
                        setExpressionsPlugin = function(r) {
                            expressionsPlugin = r
                        },
                        getExpressionsPlugin = function() {
                            return expressionsPlugin
                        },
                        setExpressionInterfaces = function(r) {
                            expressionsInterfaces = r
                        },
                        getExpressionInterfaces = function() {
                            return expressionsInterfaces
                        },
                        setDefaultCurveSegments = function(r) {
                            defaultCurveSegments = r
                        },
                        getDefaultCurveSegments = function() {
                            return defaultCurveSegments
                        },
                        setIdPrefix = function(r) {
                            idPrefix$1 = r
                        },
                        getIdPrefix = function() {
                            return idPrefix$1
                        };

                    function createNS(r) {
                        return document.createElementNS(svgNS, r)
                    }

                    function _typeof$5(r) {
                        return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }
                    var dataManager = function() {
                            var r, i, a = 1,
                                s = [],
                                n = {
                                    onmessage: function() {},
                                    postMessage: function(i) {
                                        r({
                                            data: i
                                        })
                                    }
                                },
                                o = {
                                    postMessage: function(r) {
                                        n.onmessage({
                                            data: r
                                        })
                                    }
                                };

                            function h() {
                                i || ((i = function(i) {
                                    if (window.Worker && window.Blob && getWebWorker()) {
                                        var a = new Blob(["var _workerSelf = self; self.onmessage = ", i.toString()], {
                                                type: "text/javascript"
                                            }),
                                            s = URL.createObjectURL(a);
                                        return new Worker(s)
                                    }
                                    return r = i, n
                                }((function(r) {
                                    if (o.dataManager || (o.dataManager = function() {
                                            function r(n, o) {
                                                var h, l, p, c, f, m, d = n.length;
                                                for (l = 0; l < d; l += 1)
                                                    if ("ks" in (h = n[l]) && !h.completed) {
                                                        if (h.completed = !0, h.hasMask) {
                                                            var y = h.masksProperties;
                                                            for (c = y.length, p = 0; p < c; p += 1)
                                                                if (y[p].pt.k.i) s(y[p].pt.k);
                                                                else
                                                                    for (m = y[p].pt.k.length, f = 0; f < m; f += 1) y[p].pt.k[f].s && s(y[p].pt.k[f].s[0]), y[p].pt.k[f].e && s(y[p].pt.k[f].e[0])
                                                        }
                                                        0 === h.ty ? (h.layers = i(h.refId, o), r(h.layers, o)) : 4 === h.ty ? a(h.shapes) : 5 === h.ty && u(h)
                                                    }
                                            }

                                            function i(r, i) {
                                                var a = function(r, i) {
                                                    for (var a = 0, s = i.length; a < s;) {
                                                        if (i[a].id === r) return i[a];
                                                        a += 1
                                                    }
                                                    return null
                                                }(r, i);
                                                return a ? a.layers.__used ? JSON.parse(JSON.stringify(a.layers)) : (a.layers.__used = !0, a.layers) : null
                                            }

                                            function a(r) {
                                                var i, n, o;
                                                for (i = r.length - 1; i >= 0; i -= 1)
                                                    if ("sh" === r[i].ty)
                                                        if (r[i].ks.k.i) s(r[i].ks.k);
                                                        else
                                                            for (o = r[i].ks.k.length, n = 0; n < o; n += 1) r[i].ks.k[n].s && s(r[i].ks.k[n].s[0]), r[i].ks.k[n].e && s(r[i].ks.k[n].e[0]);
                                                else "gr" === r[i].ty && a(r[i].it)
                                            }

                                            function s(r) {
                                                var i, a = r.i.length;
                                                for (i = 0; i < a; i += 1) r.i[i][0] += r.v[i][0], r.i[i][1] += r.v[i][1], r.o[i][0] += r.v[i][0], r.o[i][1] += r.v[i][1]
                                            }

                                            function n(r, i) {
                                                var a = i ? i.split(".") : [100, 100, 100];
                                                return r[0] > a[0] || !(a[0] > r[0]) && (r[1] > a[1] || !(a[1] > r[1]) && (r[2] > a[2] || !(a[2] > r[2]) && null))
                                            }
                                            var o, h = function() {
                                                    var r = [4, 4, 14];

                                                    function i(r) {
                                                        var i, a, s, n = r.length;
                                                        for (i = 0; i < n; i += 1) 5 === r[i].ty && (s = (a = r[i]).t.d, a.t.d = {
                                                            k: [{
                                                                s: s,
                                                                t: 0
                                                            }]
                                                        })
                                                    }
                                                    return function(a) {
                                                        if (n(r, a.v) && (i(a.layers), a.assets)) {
                                                            var s, o = a.assets.length;
                                                            for (s = 0; s < o; s += 1) a.assets[s].layers && i(a.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                l = (o = [4, 7, 99], function(r) {
                                                    if (r.chars && !n(o, r.v)) {
                                                        var i, s = r.chars.length;
                                                        for (i = 0; i < s; i += 1) {
                                                            var h = r.chars[i];
                                                            h.data && h.data.shapes && (a(h.data.shapes), h.data.ip = 0, h.data.op = 99999, h.data.st = 0, h.data.sr = 1, h.data.ks = {
                                                                p: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                s: {
                                                                    k: [100, 100],
                                                                    a: 0
                                                                },
                                                                a: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                r: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                o: {
                                                                    k: 100,
                                                                    a: 0
                                                                }
                                                            }, r.chars[i].t || (h.data.shapes.push({
                                                                ty: "no"
                                                            }), h.data.shapes[0].it.push({
                                                                p: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                s: {
                                                                    k: [100, 100],
                                                                    a: 0
                                                                },
                                                                a: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                r: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                o: {
                                                                    k: 100,
                                                                    a: 0
                                                                },
                                                                sk: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                sa: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                ty: "tr"
                                                            })))
                                                        }
                                                    }
                                                }),
                                                p = function() {
                                                    var r = [5, 7, 15];

                                                    function i(r) {
                                                        var i, a, s = r.length;
                                                        for (i = 0; i < s; i += 1) 5 === r[i].ty && (a = void 0, "number" == typeof(a = r[i].t.p).a && (a.a = {
                                                            a: 0,
                                                            k: a.a
                                                        }), "number" == typeof a.p && (a.p = {
                                                            a: 0,
                                                            k: a.p
                                                        }), "number" == typeof a.r && (a.r = {
                                                            a: 0,
                                                            k: a.r
                                                        }))
                                                    }
                                                    return function(a) {
                                                        if (n(r, a.v) && (i(a.layers), a.assets)) {
                                                            var s, o = a.assets.length;
                                                            for (s = 0; s < o; s += 1) a.assets[s].layers && i(a.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                c = function() {
                                                    var r = [4, 1, 9];

                                                    function i(r) {
                                                        var a, s, n, o = r.length;
                                                        for (a = 0; a < o; a += 1)
                                                            if ("gr" === r[a].ty) i(r[a].it);
                                                            else if ("fl" === r[a].ty || "st" === r[a].ty)
                                                            if (r[a].c.k && r[a].c.k[0].i)
                                                                for (n = r[a].c.k.length, s = 0; s < n; s += 1) r[a].c.k[s].s && (r[a].c.k[s].s[0] /= 255, r[a].c.k[s].s[1] /= 255, r[a].c.k[s].s[2] /= 255, r[a].c.k[s].s[3] /= 255), r[a].c.k[s].e && (r[a].c.k[s].e[0] /= 255, r[a].c.k[s].e[1] /= 255, r[a].c.k[s].e[2] /= 255, r[a].c.k[s].e[3] /= 255);
                                                            else r[a].c.k[0] /= 255, r[a].c.k[1] /= 255, r[a].c.k[2] /= 255, r[a].c.k[3] /= 255
                                                    }

                                                    function a(r) {
                                                        var a, s = r.length;
                                                        for (a = 0; a < s; a += 1) 4 === r[a].ty && i(r[a].shapes)
                                                    }
                                                    return function(i) {
                                                        if (n(r, i.v) && (a(i.layers), i.assets)) {
                                                            var s, o = i.assets.length;
                                                            for (s = 0; s < o; s += 1) i.assets[s].layers && a(i.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                f = function() {
                                                    var r = [4, 4, 18];

                                                    function i(r) {
                                                        var a, s, n;
                                                        for (a = r.length - 1; a >= 0; a -= 1)
                                                            if ("sh" === r[a].ty)
                                                                if (r[a].ks.k.i) r[a].ks.k.c = r[a].closed;
                                                                else
                                                                    for (n = r[a].ks.k.length, s = 0; s < n; s += 1) r[a].ks.k[s].s && (r[a].ks.k[s].s[0].c = r[a].closed), r[a].ks.k[s].e && (r[a].ks.k[s].e[0].c = r[a].closed);
                                                        else "gr" === r[a].ty && i(r[a].it)
                                                    }

                                                    function a(r) {
                                                        var a, s, n, o, h, l, p = r.length;
                                                        for (s = 0; s < p; s += 1) {
                                                            if ((a = r[s]).hasMask) {
                                                                var c = a.masksProperties;
                                                                for (o = c.length, n = 0; n < o; n += 1)
                                                                    if (c[n].pt.k.i) c[n].pt.k.c = c[n].cl;
                                                                    else
                                                                        for (l = c[n].pt.k.length, h = 0; h < l; h += 1) c[n].pt.k[h].s && (c[n].pt.k[h].s[0].c = c[n].cl), c[n].pt.k[h].e && (c[n].pt.k[h].e[0].c = c[n].cl)
                                                            }
                                                            4 === a.ty && i(a.shapes)
                                                        }
                                                    }
                                                    return function(i) {
                                                        if (n(r, i.v) && (a(i.layers), i.assets)) {
                                                            var s, o = i.assets.length;
                                                            for (s = 0; s < o; s += 1) i.assets[s].layers && a(i.assets[s].layers)
                                                        }
                                                    }
                                                }();

                                            function u(r) {
                                                0 === r.t.a.length && r.t.p
                                            }
                                            var m = {
                                                completeData: function(a) {
                                                    a.__complete || (c(a), h(a), l(a), p(a), f(a), r(a.layers, a.assets), function(a, s) {
                                                        if (a) {
                                                            var n = 0,
                                                                o = a.length;
                                                            for (n = 0; n < o; n += 1) 1 === a[n].t && (a[n].data.layers = i(a[n].data.refId, s), r(a[n].data.layers, s))
                                                        }
                                                    }(a.chars, a.assets), a.__complete = !0)
                                                }
                                            };
                                            return m.checkColors = c, m.checkChars = l, m.checkPathProperties = p, m.checkShapes = f, m.completeLayers = r, m
                                        }()), o.assetLoader || (o.assetLoader = function() {
                                            function r(r) {
                                                var i = r.getResponseHeader("content-type");
                                                return i && "json" === r.responseType && -1 !== i.indexOf("json") || r.response && "object" === _typeof$5(r.response) ? r.response : r.response && "string" == typeof r.response ? JSON.parse(r.response) : r.responseText ? JSON.parse(r.responseText) : null
                                            }
                                            return {
                                                load: function(i, a, s, n) {
                                                    var o, h = new XMLHttpRequest;
                                                    try {
                                                        h.responseType = "json"
                                                    } catch (r) {}
                                                    h.onreadystatechange = function() {
                                                        if (4 === h.readyState)
                                                            if (200 === h.status) o = r(h), s(o);
                                                            else try {
                                                                o = r(h), s(o)
                                                            } catch (r) {
                                                                n && n(r)
                                                            }
                                                    };
                                                    try {
                                                        h.open(["G", "E", "T"].join(""), i, !0)
                                                    } catch (r) {
                                                        h.open(["G", "E", "T"].join(""), a + "/" + i, !0)
                                                    }
                                                    h.send()
                                                }
                                            }
                                        }()), "loadAnimation" === r.data.type) o.assetLoader.load(r.data.path, r.data.fullPath, (function(i) {
                                        o.dataManager.completeData(i), o.postMessage({
                                            id: r.data.id,
                                            payload: i,
                                            status: "success"
                                        })
                                    }), (function() {
                                        o.postMessage({
                                            id: r.data.id,
                                            status: "error"
                                        })
                                    }));
                                    else if ("complete" === r.data.type) {
                                        var i = r.data.animation;
                                        o.dataManager.completeData(i), o.postMessage({
                                            id: r.data.id,
                                            payload: i,
                                            status: "success"
                                        })
                                    } else "loadData" === r.data.type && o.assetLoader.load(r.data.path, r.data.fullPath, (function(i) {
                                        o.postMessage({
                                            id: r.data.id,
                                            payload: i,
                                            status: "success"
                                        })
                                    }), (function() {
                                        o.postMessage({
                                            id: r.data.id,
                                            status: "error"
                                        })
                                    }))
                                }))).onmessage = function(r) {
                                    var i = r.data,
                                        a = i.id,
                                        n = s[a];
                                    s[a] = null, "success" === i.status ? n.onComplete(i.payload) : n.onError && n.onError()
                                })
                            }

                            function l(r, i) {
                                var n = "processId_" + (a += 1);
                                return s[n] = {
                                    onComplete: r,
                                    onError: i
                                }, n
                            }
                            return {
                                loadAnimation: function(r, a, s) {
                                    h();
                                    var n = l(a, s);
                                    i.postMessage({
                                        type: "loadAnimation",
                                        path: r,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: n
                                    })
                                },
                                loadData: function(r, a, s) {
                                    h();
                                    var n = l(a, s);
                                    i.postMessage({
                                        type: "loadData",
                                        path: r,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: n
                                    })
                                },
                                completeAnimation: function(r, a, s) {
                                    h();
                                    var n = l(a, s);
                                    i.postMessage({
                                        type: "complete",
                                        animation: r,
                                        id: n
                                    })
                                }
                            }
                        }(),
                        ImagePreloader = function() {
                            var r = function() {
                                var r = createTag("canvas");
                                r.width = 1, r.height = 1;
                                var i = r.getContext("2d");
                                return i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1), r
                            }();

                            function i() {
                                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function a() {
                                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function s(r, i, a) {
                                var s = "";
                                if (r.e) s = r.p;
                                else if (i) {
                                    var n = r.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), s = i + n
                                } else s = a, s += r.u ? r.u : "", s += r.p;
                                return s
                            }

                            function n(r) {
                                var i = 0,
                                    a = setInterval(function() {
                                        (r.getBBox().width || i > 500) && (this._imageLoaded(), clearInterval(a)), i += 1
                                    }.bind(this), 50)
                            }

                            function o(r) {
                                var i = {
                                        assetData: r
                                    },
                                    a = s(r, this.assetsPath, this.path);
                                return dataManager.loadData(a, function(r) {
                                    i.img = r, this._footageLoaded()
                                }.bind(this), function() {
                                    i.img = {}, this._footageLoaded()
                                }.bind(this)), i
                            }

                            function h() {
                                this._imageLoaded = i.bind(this), this._footageLoaded = a.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                            }
                            return h.prototype = {
                                loadAssets: function(r, i) {
                                    var a;
                                    this.imagesLoadedCb = i;
                                    var s = r.length;
                                    for (a = 0; a < s; a += 1) r[a].layers || (r[a].t && "seq" !== r[a].t ? 3 === r[a].t && (this.totalFootages += 1, this.images.push(this.createFootageData(r[a]))) : (this.totalImages += 1, this.images.push(this._createImageData(r[a]))))
                                },
                                setAssetsPath: function(r) {
                                    this.assetsPath = r || ""
                                },
                                setPath: function(r) {
                                    this.path = r || ""
                                },
                                loadedImages: function() {
                                    return this.totalImages === this.loadedAssets
                                },
                                loadedFootages: function() {
                                    return this.totalFootages === this.loadedFootagesCount
                                },
                                destroy: function() {
                                    this.imagesLoadedCb = null, this.images.length = 0
                                },
                                getAsset: function(r) {
                                    for (var i = 0, a = this.images.length; i < a;) {
                                        if (this.images[i].assetData === r) return this.images[i].img;
                                        i += 1
                                    }
                                    return null
                                },
                                createImgData: function(i) {
                                    var a = s(i, this.assetsPath, this.path),
                                        n = createTag("img");
                                    n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                                        o.img = r, this._imageLoaded()
                                    }.bind(this), !1), n.src = a;
                                    var o = {
                                        img: n,
                                        assetData: i
                                    };
                                    return o
                                },
                                createImageData: function(i) {
                                    var a = s(i, this.assetsPath, this.path),
                                        n = createNS("image");
                                    isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                                        o.img = r, this._imageLoaded()
                                    }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                                    var o = {
                                        img: n,
                                        assetData: i
                                    };
                                    return o
                                },
                                imageLoaded: i,
                                footageLoaded: a,
                                setCacheType: function(r, i) {
                                    "svg" === r ? (this._elementHelper = i, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                                }
                            }, h
                        }();

                    function BaseEvent() {}
                    BaseEvent.prototype = {
                        triggerEvent: function(r, i) {
                            if (this._cbs[r])
                                for (var a = this._cbs[r], s = 0; s < a.length; s += 1) a[s](i)
                        },
                        addEventListener: function(r, i) {
                            return this._cbs[r] || (this._cbs[r] = []), this._cbs[r].push(i),
                                function() {
                                    this.removeEventListener(r, i)
                                }.bind(this)
                        },
                        removeEventListener: function(r, i) {
                            if (i) {
                                if (this._cbs[r]) {
                                    for (var a = 0, s = this._cbs[r].length; a < s;) this._cbs[r][a] === i && (this._cbs[r].splice(a, 1), a -= 1, s -= 1), a += 1;
                                    this._cbs[r].length || (this._cbs[r] = null)
                                }
                            } else this._cbs[r] = null
                        }
                    };
                    var markerParser = function() {
                            function r(r) {
                                for (var i, a = r.split("\r\n"), s = {}, n = 0, o = 0; o < a.length; o += 1) 2 === (i = a[o].split(":")).length && (s[i[0]] = i[1].trim(), n += 1);
                                if (0 === n) throw new Error;
                                return s
                            }
                            return function(i) {
                                for (var a = [], s = 0; s < i.length; s += 1) {
                                    var n = i[s],
                                        o = {
                                            time: n.tm,
                                            duration: n.dr
                                        };
                                    try {
                                        o.payload = JSON.parse(i[s].cm)
                                    } catch (a) {
                                        try {
                                            o.payload = r(i[s].cm)
                                        } catch (r) {
                                            o.payload = {
                                                name: i[s].cm
                                            }
                                        }
                                    }
                                    a.push(o)
                                }
                                return a
                            }
                        }(),
                        ProjectInterface = function() {
                            function r(r) {
                                this.compositions.push(r)
                            }
                            return function() {
                                function i(r) {
                                    for (var i = 0, a = this.compositions.length; i < a;) {
                                        if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                                        i += 1
                                    }
                                    return null
                                }
                                return i.compositions = [], i.currentFrame = 0, i.registerComposition = r, i
                            }
                        }(),
                        renderers = {},
                        registerRenderer = function(r, i) {
                            renderers[r] = i
                        };

                    function getRenderer(r) {
                        return renderers[r]
                    }

                    function _typeof$4(r) {
                        return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }
                    var AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
                    };
                    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(r) {
                        (r.wrapper || r.container) && (this.wrapper = r.wrapper || r.container);
                        var i = "svg";
                        r.animType ? i = r.animType : r.renderer && (i = r.renderer);
                        var a = getRenderer(i);
                        this.renderer = new a(this, r.rendererSettings), this.imagePreloader.setCacheType(i, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = i, "" === r.loop || null === r.loop || void 0 === r.loop || !0 === r.loop ? this.loop = !0 : !1 === r.loop ? this.loop = !1 : this.loop = parseInt(r.loop, 10), this.autoplay = !("autoplay" in r) || r.autoplay, this.name = r.name ? r.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(r, "autoloadSegments") || r.autoloadSegments, this.assetsPath = r.assetsPath, this.initialSegment = r.initialSegment, r.audioFactory && this.audioController.setAudioFactory(r.audioFactory), r.animationData ? this.setupAnimation(r.animationData) : r.path && (-1 !== r.path.lastIndexOf("\\") ? this.path = r.path.substr(0, r.path.lastIndexOf("\\") + 1) : this.path = r.path.substr(0, r.path.lastIndexOf("/") + 1), this.fileName = r.path.substr(r.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(r.path, this.configAnimation, this.onSetupError))
                    }, AnimationItem.prototype.onSetupError = function() {
                        this.trigger("data_failed")
                    }, AnimationItem.prototype.setupAnimation = function(r) {
                        dataManager.completeAnimation(r, this.configAnimation)
                    }, AnimationItem.prototype.setData = function(r, i) {
                        i && "object" !== _typeof$4(i) && (i = JSON.parse(i));
                        var a = {
                                wrapper: r,
                                animationData: i
                            },
                            s = r.attributes;
                        a.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", a.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : "canvas";
                        var n = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                        "false" === n ? a.loop = !1 : "true" === n ? a.loop = !0 : "" !== n && (a.loop = parseInt(n, 10));
                        var o = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                        a.autoplay = "false" !== o, a.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (a.prerender = !1), this.setParams(a)
                    }, AnimationItem.prototype.includeLayers = function(r) {
                        r.op > this.animationData.op && (this.animationData.op = r.op, this.totalFrames = Math.floor(r.op - this.animationData.ip));
                        var i, a, s = this.animationData.layers,
                            n = s.length,
                            o = r.layers,
                            h = o.length;
                        for (a = 0; a < h; a += 1)
                            for (i = 0; i < n;) {
                                if (s[i].id === o[a].id) {
                                    s[i] = o[a];
                                    break
                                }
                                i += 1
                            }
                        if ((r.chars || r.fonts) && (this.renderer.globalData.fontManager.addChars(r.chars), this.renderer.globalData.fontManager.addFonts(r.fonts, this.renderer.globalData.defs)), r.assets)
                            for (n = r.assets.length, i = 0; i < n; i += 1) this.animationData.assets.push(r.assets[i]);
                        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                    }, AnimationItem.prototype.onSegmentComplete = function(r) {
                        this.animationData = r;
                        var i = getExpressionsPlugin();
                        i && i.initExpressions(this), this.loadNextSegment()
                    }, AnimationItem.prototype.loadNextSegment = function() {
                        var r = this.animationData.segments;
                        if (!r || 0 === r.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                        var i = r.shift();
                        this.timeCompleted = i.time * this.frameRate;
                        var a = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, dataManager.loadData(a, this.includeLayers.bind(this), function() {
                            this.trigger("data_failed")
                        }.bind(this))
                    }, AnimationItem.prototype.loadSegments = function() {
                        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                    }, AnimationItem.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded()
                    }, AnimationItem.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                    }, AnimationItem.prototype.configAnimation = function(r) {
                        if (this.renderer) try {
                            this.animationData = r, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(r), r.assets || (r.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(r.assets), this.markers = markerParser(r.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                        } catch (r) {
                            this.triggerConfigError(r)
                        }
                    }, AnimationItem.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                    }, AnimationItem.prototype.checkLoaded = function() {
                        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                            this.isLoaded = !0;
                            var r = getExpressionsPlugin();
                            r && r.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                                this.trigger("DOMLoaded")
                            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                        }
                    }, AnimationItem.prototype.resize = function(r, i) {
                        var a = "number" == typeof r ? r : void 0,
                            s = "number" == typeof i ? i : void 0;
                        this.renderer.updateContainerSize(a, s)
                    }, AnimationItem.prototype.setSubframe = function(r) {
                        this.isSubframeEnabled = !!r
                    }, AnimationItem.prototype.gotoFrame = function() {
                        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                    }, AnimationItem.prototype.renderFrame = function() {
                        if (!1 !== this.isLoaded && this.renderer) try {
                            this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        } catch (r) {
                            this.triggerRenderFrameError(r)
                        }
                    }, AnimationItem.prototype.play = function(r) {
                        r && this.name !== r || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                    }, AnimationItem.prototype.pause = function(r) {
                        r && this.name !== r || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                    }, AnimationItem.prototype.togglePause = function(r) {
                        r && this.name !== r || (!0 === this.isPaused ? this.play() : this.pause())
                    }, AnimationItem.prototype.stop = function(r) {
                        r && this.name !== r || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                    }, AnimationItem.prototype.getMarkerData = function(r) {
                        for (var i, a = 0; a < this.markers.length; a += 1)
                            if ((i = this.markers[a]).payload && i.payload.name === r) return i;
                        return null
                    }, AnimationItem.prototype.goToAndStop = function(r, i, a) {
                        if (!a || this.name === a) {
                            var s = Number(r);
                            if (isNaN(s)) {
                                var n = this.getMarkerData(r);
                                n && this.goToAndStop(n.time, !0)
                            } else i ? this.setCurrentRawFrameValue(r) : this.setCurrentRawFrameValue(r * this.frameModifier);
                            this.pause()
                        }
                    }, AnimationItem.prototype.goToAndPlay = function(r, i, a) {
                        if (!a || this.name === a) {
                            var s = Number(r);
                            if (isNaN(s)) {
                                var n = this.getMarkerData(r);
                                n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
                            } else this.goToAndStop(s, i, a);
                            this.play()
                        }
                    }, AnimationItem.prototype.advanceTime = function(r) {
                        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                            var i = this.currentRawFrame + r * this.frameModifier,
                                a = !1;
                            i >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? i >= this.totalFrames ? (this.playCount += 1, this.checkSegments(i % this.totalFrames) || (this.setCurrentRawFrameValue(i % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(i) : this.checkSegments(i > this.totalFrames ? i % this.totalFrames : 0) || (a = !0, i = this.totalFrames - 1) : i < 0 ? this.checkSegments(i % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (a = !0, i = 0) : (this.setCurrentRawFrameValue(this.totalFrames + i % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(i), a && (this.setCurrentRawFrameValue(i), this.pause(), this.trigger("complete"))
                        }
                    }, AnimationItem.prototype.adjustSegment = function(r, i) {
                        this.playCount = 0, r[1] < r[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = r[0] - r[1], this.timeCompleted = this.totalFrames, this.firstFrame = r[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - i)) : r[1] > r[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = r[1] - r[0], this.timeCompleted = this.totalFrames, this.firstFrame = r[0], this.setCurrentRawFrameValue(.001 + i)), this.trigger("segmentStart")
                    }, AnimationItem.prototype.setSegment = function(r, i) {
                        var a = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < r ? a = r : this.currentRawFrame + this.firstFrame > i && (a = i - r)), this.firstFrame = r, this.totalFrames = i - r, this.timeCompleted = this.totalFrames, -1 !== a && this.goToAndStop(a, !0)
                    }, AnimationItem.prototype.playSegments = function(r, i) {
                        if (i && (this.segments.length = 0), "object" === _typeof$4(r[0])) {
                            var a, s = r.length;
                            for (a = 0; a < s; a += 1) this.segments.push(r[a])
                        } else this.segments.push(r);
                        this.segments.length && i && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                    }, AnimationItem.prototype.resetSegments = function(r) {
                        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), r && this.checkSegments(0)
                    }, AnimationItem.prototype.checkSegments = function(r) {
                        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), r), !0)
                    }, AnimationItem.prototype.destroy = function(r) {
                        r && this.name !== r || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                    }, AnimationItem.prototype.setCurrentRawFrameValue = function(r) {
                        this.currentRawFrame = r, this.gotoFrame()
                    }, AnimationItem.prototype.setSpeed = function(r) {
                        this.playSpeed = r, this.updaFrameModifier()
                    }, AnimationItem.prototype.setDirection = function(r) {
                        this.playDirection = r < 0 ? -1 : 1, this.updaFrameModifier()
                    }, AnimationItem.prototype.setLoop = function(r) {
                        this.loop = r
                    }, AnimationItem.prototype.setVolume = function(r, i) {
                        i && this.name !== i || this.audioController.setVolume(r)
                    }, AnimationItem.prototype.getVolume = function() {
                        return this.audioController.getVolume()
                    }, AnimationItem.prototype.mute = function(r) {
                        r && this.name !== r || this.audioController.mute()
                    }, AnimationItem.prototype.unmute = function(r) {
                        r && this.name !== r || this.audioController.unmute()
                    }, AnimationItem.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                    }, AnimationItem.prototype.getPath = function() {
                        return this.path
                    }, AnimationItem.prototype.getAssetsPath = function(r) {
                        var i = "";
                        if (r.e) i = r.p;
                        else if (this.assetsPath) {
                            var a = r.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = this.assetsPath + a
                        } else i = this.path, i += r.u ? r.u : "", i += r.p;
                        return i
                    }, AnimationItem.prototype.getAssetData = function(r) {
                        for (var i = 0, a = this.assets.length; i < a;) {
                            if (r === this.assets[i].id) return this.assets[i];
                            i += 1
                        }
                        return null
                    }, AnimationItem.prototype.hide = function() {
                        this.renderer.hide()
                    }, AnimationItem.prototype.show = function() {
                        this.renderer.show()
                    }, AnimationItem.prototype.getDuration = function(r) {
                        return r ? this.totalFrames : this.totalFrames / this.frameRate
                    }, AnimationItem.prototype.updateDocumentData = function(r, i, a) {
                        try {
                            this.renderer.getElementByPath(r).updateDocumentData(i, a)
                        } catch (r) {}
                    }, AnimationItem.prototype.trigger = function(r) {
                        if (this._cbs && this._cbs[r]) switch (r) {
                            case "enterFrame":
                                this.triggerEvent(r, new BMEnterFrameEvent(r, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "drawnFrame":
                                this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(r, this.drawnFrameEvent);
                                break;
                            case "loopComplete":
                                this.triggerEvent(r, new BMCompleteLoopEvent(r, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(r, new BMCompleteEvent(r, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(r, new BMSegmentStartEvent(r, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(r, new BMDestroyEvent(r, this));
                                break;
                            default:
                                this.triggerEvent(r)
                        }
                        "enterFrame" === r && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(r, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === r && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(r, this.loop, this.playCount, this.frameMult)), "complete" === r && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(r, this.frameMult)), "segmentStart" === r && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(r, this.firstFrame, this.totalFrames)), "destroy" === r && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(r, this))
                    }, AnimationItem.prototype.triggerRenderFrameError = function(r) {
                        var i = new BMRenderFrameErrorEvent(r, this.currentFrame);
                        this.triggerEvent("error", i), this.onError && this.onError.call(this, i)
                    }, AnimationItem.prototype.triggerConfigError = function(r) {
                        var i = new BMConfigErrorEvent(r, this.currentFrame);
                        this.triggerEvent("error", i), this.onError && this.onError.call(this, i)
                    };
                    var animationManager = function() {
                            var r = {},
                                i = [],
                                a = 0,
                                s = 0,
                                n = 0,
                                o = !0,
                                h = !1;

                            function l(r) {
                                for (var a = 0, n = r.target; a < s;) i[a].animation === n && (i.splice(a, 1), a -= 1, s -= 1, n.isPaused || f()), a += 1
                            }

                            function p(r, a) {
                                if (!r) return null;
                                for (var n = 0; n < s;) {
                                    if (i[n].elem === r && null !== i[n].elem) return i[n].animation;
                                    n += 1
                                }
                                var o = new AnimationItem;
                                return u(o, r), o.setData(r, a), o
                            }

                            function c() {
                                n += 1, y()
                            }

                            function f() {
                                n -= 1
                            }

                            function u(r, a) {
                                r.addEventListener("destroy", l), r.addEventListener("_active", c), r.addEventListener("_idle", f), i.push({
                                    elem: a,
                                    animation: r
                                }), s += 1
                            }

                            function m(r) {
                                var l, p = r - a;
                                for (l = 0; l < s; l += 1) i[l].animation.advanceTime(p);
                                a = r, n && !h ? window.requestAnimationFrame(m) : o = !0
                            }

                            function d(r) {
                                a = r, window.requestAnimationFrame(m)
                            }

                            function y() {
                                !h && n && o && (window.requestAnimationFrame(d), o = !1)
                            }
                            return r.registerAnimation = p, r.loadAnimation = function(r) {
                                var i = new AnimationItem;
                                return u(i, null), i.setParams(r), i
                            }, r.setSpeed = function(r, a) {
                                var n;
                                for (n = 0; n < s; n += 1) i[n].animation.setSpeed(r, a)
                            }, r.setDirection = function(r, a) {
                                var n;
                                for (n = 0; n < s; n += 1) i[n].animation.setDirection(r, a)
                            }, r.play = function(r) {
                                var a;
                                for (a = 0; a < s; a += 1) i[a].animation.play(r)
                            }, r.pause = function(r) {
                                var a;
                                for (a = 0; a < s; a += 1) i[a].animation.pause(r)
                            }, r.stop = function(r) {
                                var a;
                                for (a = 0; a < s; a += 1) i[a].animation.stop(r)
                            }, r.togglePause = function(r) {
                                var a;
                                for (a = 0; a < s; a += 1) i[a].animation.togglePause(r)
                            }, r.searchAnimations = function(r, i, a) {
                                var s, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                    o = n.length;
                                for (s = 0; s < o; s += 1) a && n[s].setAttribute("data-bm-type", a), p(n[s], r);
                                if (i && 0 === o) {
                                    a || (a = "svg");
                                    var h = document.getElementsByTagName("body")[0];
                                    h.innerText = "";
                                    var l = createTag("div");
                                    l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-bm-type", a), h.appendChild(l), p(l, r)
                                }
                            }, r.resize = function() {
                                var r;
                                for (r = 0; r < s; r += 1) i[r].animation.resize()
                            }, r.goToAndStop = function(r, a, n) {
                                var o;
                                for (o = 0; o < s; o += 1) i[o].animation.goToAndStop(r, a, n)
                            }, r.destroy = function(r) {
                                var a;
                                for (a = s - 1; a >= 0; a -= 1) i[a].animation.destroy(r)
                            }, r.freeze = function() {
                                h = !0
                            }, r.unfreeze = function() {
                                h = !1, y()
                            }, r.setVolume = function(r, a) {
                                var n;
                                for (n = 0; n < s; n += 1) i[n].animation.setVolume(r, a)
                            }, r.mute = function(r) {
                                var a;
                                for (a = 0; a < s; a += 1) i[a].animation.mute(r)
                            }, r.unmute = function(r) {
                                var a;
                                for (a = 0; a < s; a += 1) i[a].animation.unmute(r)
                            }, r.getRegisteredAnimations = function() {
                                var r, a = i.length,
                                    s = [];
                                for (r = 0; r < a; r += 1) s.push(i[r].animation);
                                return s
                            }, r
                        }(),
                        BezierFactory = function() {
                            var r = {
                                    getBezierEasing: function(r, a, s, n, o) {
                                        var h = o || ("bez_" + r + "_" + a + "_" + s + "_" + n).replace(/\./g, "p");
                                        if (i[h]) return i[h];
                                        var l = new p([r, a, s, n]);
                                        return i[h] = l, l
                                    }
                                },
                                i = {},
                                a = "function" == typeof Float32Array;

                            function s(r, i) {
                                return 1 - 3 * i + 3 * r
                            }

                            function n(r, i) {
                                return 3 * i - 6 * r
                            }

                            function o(r) {
                                return 3 * r
                            }

                            function h(r, i, a) {
                                return ((s(i, a) * r + n(i, a)) * r + o(i)) * r
                            }

                            function l(r, i, a) {
                                return 3 * s(i, a) * r * r + 2 * n(i, a) * r + o(i)
                            }

                            function p(r) {
                                this._p = r, this._mSampleValues = a ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                            }
                            return p.prototype = {
                                get: function(r) {
                                    var i = this._p[0],
                                        a = this._p[1],
                                        s = this._p[2],
                                        n = this._p[3];
                                    return this._precomputed || this._precompute(), i === a && s === n ? r : 0 === r ? 0 : 1 === r ? 1 : h(this._getTForX(r), a, n)
                                },
                                _precompute: function() {
                                    var r = this._p[0],
                                        i = this._p[1],
                                        a = this._p[2],
                                        s = this._p[3];
                                    this._precomputed = !0, r === i && a === s || this._calcSampleValues()
                                },
                                _calcSampleValues: function() {
                                    for (var r = this._p[0], i = this._p[2], a = 0; a < 11; ++a) this._mSampleValues[a] = h(.1 * a, r, i)
                                },
                                _getTForX: function(r) {
                                    for (var i = this._p[0], a = this._p[2], s = this._mSampleValues, n = 0, o = 1; 10 !== o && s[o] <= r; ++o) n += .1;
                                    var p = n + (r - s[--o]) / (s[o + 1] - s[o]) * .1,
                                        c = l(p, i, a);
                                    return c >= .001 ? function(r, i, a, s) {
                                        for (var n = 0; n < 4; ++n) {
                                            var o = l(i, a, s);
                                            if (0 === o) return i;
                                            i -= (h(i, a, s) - r) / o
                                        }
                                        return i
                                    }(r, p, i, a) : 0 === c ? p : function(r, i, a, s, n) {
                                        var o, l, p = 0;
                                        do {
                                            (o = h(l = i + (a - i) / 2, s, n) - r) > 0 ? a = l : i = l
                                        } while (Math.abs(o) > 1e-7 && ++p < 10);
                                        return l
                                    }(r, n, n + .1, i, a)
                                }
                            }, r
                        }(),
                        pooling = {
                            double: function(r) {
                                return r.concat(createSizedArray(r.length))
                            }
                        },
                        poolFactory = function(r, i, a) {
                            var s = 0,
                                n = r,
                                o = createSizedArray(n);
                            return {
                                newElement: function() {
                                    return s ? o[s -= 1] : i()
                                },
                                release: function(r) {
                                    s === n && (o = pooling.double(o), n *= 2), a && a(r), o[s] = r, s += 1
                                }
                            }
                        },
                        bezierLengthPool = poolFactory(8, (function() {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", getDefaultCurveSegments()),
                                lengths: createTypedArray("float32", getDefaultCurveSegments())
                            }
                        })),
                        segmentsLengthPool = poolFactory(8, (function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }), (function(r) {
                            var i, a = r.lengths.length;
                            for (i = 0; i < a; i += 1) bezierLengthPool.release(r.lengths[i]);
                            r.lengths.length = 0
                        }));

                    function bezFunction() {
                        var r = Math;

                        function i(r, i, a, s, n, o) {
                            var h = r * s + i * n + a * o - n * s - o * r - a * i;
                            return h > -.001 && h < .001
                        }
                        var a = function(r, i, a, s) {
                            var n, o, h, l, p, c, f = getDefaultCurveSegments(),
                                u = 0,
                                m = [],
                                d = [],
                                y = bezierLengthPool.newElement();
                            for (h = a.length, n = 0; n < f; n += 1) {
                                for (p = n / (f - 1), c = 0, o = 0; o < h; o += 1) l = bmPow(1 - p, 3) * r[o] + 3 * bmPow(1 - p, 2) * p * a[o] + 3 * (1 - p) * bmPow(p, 2) * s[o] + bmPow(p, 3) * i[o], m[o] = l, null !== d[o] && (c += bmPow(m[o] - d[o], 2)), d[o] = m[o];
                                c && (u += c = bmSqrt(c)), y.percents[n] = p, y.lengths[n] = u
                            }
                            return y.addedLength = u, y
                        };

                        function s(r) {
                            this.segmentLength = 0, this.points = new Array(r)
                        }

                        function n(r, i) {
                            this.partialLength = r, this.point = i
                        }
                        var o, h = (o = {}, function(r, a, h, l) {
                            var p = (r[0] + "_" + r[1] + "_" + a[0] + "_" + a[1] + "_" + h[0] + "_" + h[1] + "_" + l[0] + "_" + l[1]).replace(/\./g, "p");
                            if (!o[p]) {
                                var c, f, u, m, d, y, g, v = getDefaultCurveSegments(),
                                    b = 0,
                                    x = null;
                                2 === r.length && (r[0] !== a[0] || r[1] !== a[1]) && i(r[0], r[1], a[0], a[1], r[0] + h[0], r[1] + h[1]) && i(r[0], r[1], a[0], a[1], a[0] + l[0], a[1] + l[1]) && (v = 2);
                                var _ = new s(v);
                                for (u = h.length, c = 0; c < v; c += 1) {
                                    for (g = createSizedArray(u), d = c / (v - 1), y = 0, f = 0; f < u; f += 1) m = bmPow(1 - d, 3) * r[f] + 3 * bmPow(1 - d, 2) * d * (r[f] + h[f]) + 3 * (1 - d) * bmPow(d, 2) * (a[f] + l[f]) + bmPow(d, 3) * a[f], g[f] = m, null !== x && (y += bmPow(g[f] - x[f], 2));
                                    b += y = bmSqrt(y), _.points[c] = new n(y, g), x = g
                                }
                                _.segmentLength = b, o[p] = _
                            }
                            return o[p]
                        });

                        function l(r, i) {
                            var a = i.percents,
                                s = i.lengths,
                                n = a.length,
                                o = bmFloor((n - 1) * r),
                                h = r * i.addedLength,
                                l = 0;
                            if (o === n - 1 || 0 === o || h === s[o]) return a[o];
                            for (var p = s[o] > h ? -1 : 1, c = !0; c;)
                                if (s[o] <= h && s[o + 1] > h ? (l = (h - s[o]) / (s[o + 1] - s[o]), c = !1) : o += p, o < 0 || o >= n - 1) {
                                    if (o === n - 1) return a[o];
                                    c = !1
                                }
                            return a[o] + (a[o + 1] - a[o]) * l
                        }
                        var p = createTypedArray("float32", 8);
                        return {
                            getSegmentsLength: function(r) {
                                var i, s = segmentsLengthPool.newElement(),
                                    n = r.c,
                                    o = r.v,
                                    h = r.o,
                                    l = r.i,
                                    p = r._length,
                                    c = s.lengths,
                                    f = 0;
                                for (i = 0; i < p - 1; i += 1) c[i] = a(o[i], o[i + 1], h[i], l[i + 1]), f += c[i].addedLength;
                                return n && p && (c[i] = a(o[i], o[0], h[i], l[0]), f += c[i].addedLength), s.totalLength = f, s
                            },
                            getNewSegment: function(i, a, s, n, o, h, c) {
                                o < 0 ? o = 0 : o > 1 && (o = 1);
                                var f, u = l(o, c),
                                    m = l(h = h > 1 ? 1 : h, c),
                                    d = i.length,
                                    y = 1 - u,
                                    g = 1 - m,
                                    v = y * y * y,
                                    b = u * y * y * 3,
                                    x = u * u * y * 3,
                                    _ = u * u * u,
                                    E = y * y * g,
                                    S = u * y * g + y * u * g + y * y * m,
                                    P = u * u * g + y * u * m + u * y * m,
                                    C = u * u * m,
                                    w = y * g * g,
                                    k = u * g * g + y * m * g + y * g * m,
                                    A = u * m * g + y * m * m + u * g * m,
                                    F = u * m * m,
                                    T = g * g * g,
                                    M = m * g * g + g * m * g + g * g * m,
                                    D = m * m * g + g * m * m + m * g * m,
                                    I = m * m * m;
                                for (f = 0; f < d; f += 1) p[4 * f] = r.round(1e3 * (v * i[f] + b * s[f] + x * n[f] + _ * a[f])) / 1e3, p[4 * f + 1] = r.round(1e3 * (E * i[f] + S * s[f] + P * n[f] + C * a[f])) / 1e3, p[4 * f + 2] = r.round(1e3 * (w * i[f] + k * s[f] + A * n[f] + F * a[f])) / 1e3, p[4 * f + 3] = r.round(1e3 * (T * i[f] + M * s[f] + D * n[f] + I * a[f])) / 1e3;
                                return p
                            },
                            getPointInSegment: function(i, a, s, n, o, h) {
                                var p = l(o, h),
                                    c = 1 - p;
                                return [r.round(1e3 * (c * c * c * i[0] + (p * c * c + c * p * c + c * c * p) * s[0] + (p * p * c + c * p * p + p * c * p) * n[0] + p * p * p * a[0])) / 1e3, r.round(1e3 * (c * c * c * i[1] + (p * c * c + c * p * c + c * c * p) * s[1] + (p * p * c + c * p * p + p * c * p) * n[1] + p * p * p * a[1])) / 1e3]
                            },
                            buildBezierData: h,
                            pointOnLine2D: i,
                            pointOnLine3D: function(a, s, n, o, h, l, p, c, f) {
                                if (0 === n && 0 === l && 0 === f) return i(a, s, o, h, p, c);
                                var u, m = r.sqrt(r.pow(o - a, 2) + r.pow(h - s, 2) + r.pow(l - n, 2)),
                                    d = r.sqrt(r.pow(p - a, 2) + r.pow(c - s, 2) + r.pow(f - n, 2)),
                                    y = r.sqrt(r.pow(p - o, 2) + r.pow(c - h, 2) + r.pow(f - l, 2));
                                return (u = m > d ? m > y ? m - d - y : y - d - m : y > d ? y - d - m : d - m - y) > -1e-4 && u < 1e-4
                            }
                        }
                    }
                    var bez = bezFunction(),
                        PropertyFactory = function() {
                            var r = initialDefaultFrame,
                                i = Math.abs;

                            function a(r, i) {
                                var a, n = this.offsetTime;
                                "multidimensional" === this.propType && (a = createTypedArray("float32", this.pv.length));
                                for (var o, h, l, p, c, f, u, m, d, y = i.lastIndex, g = y, v = this.keyframes.length - 1, b = !0; b;) {
                                    if (o = this.keyframes[g], h = this.keyframes[g + 1], g === v - 1 && r >= h.t - n) {
                                        o.h && (o = h), y = 0;
                                        break
                                    }
                                    if (h.t - n > r) {
                                        y = g;
                                        break
                                    }
                                    g < v - 1 ? g += 1 : (y = 0, b = !1)
                                }
                                l = this.keyframesMetadata[g] || {};
                                var x, _ = h.t - n,
                                    E = o.t - n;
                                if (o.to) {
                                    l.bezierData || (l.bezierData = bez.buildBezierData(o.s, h.s || o.e, o.to, o.ti));
                                    var S = l.bezierData;
                                    if (r >= _ || r < E) {
                                        var P = r >= _ ? S.points.length - 1 : 0;
                                        for (c = S.points[P].point.length, p = 0; p < c; p += 1) a[p] = S.points[P].point[p]
                                    } else {
                                        l.__fnct ? d = l.__fnct : (d = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, l.__fnct = d), f = d((r - E) / (_ - E));
                                        var C, w = S.segmentLength * f,
                                            k = i.lastFrame < r && i._lastKeyframeIndex === g ? i._lastAddedLength : 0;
                                        for (m = i.lastFrame < r && i._lastKeyframeIndex === g ? i._lastPoint : 0, b = !0, u = S.points.length; b;) {
                                            if (k += S.points[m].partialLength, 0 === w || 0 === f || m === S.points.length - 1) {
                                                for (c = S.points[m].point.length, p = 0; p < c; p += 1) a[p] = S.points[m].point[p];
                                                break
                                            }
                                            if (w >= k && w < k + S.points[m + 1].partialLength) {
                                                for (C = (w - k) / S.points[m + 1].partialLength, c = S.points[m].point.length, p = 0; p < c; p += 1) a[p] = S.points[m].point[p] + (S.points[m + 1].point[p] - S.points[m].point[p]) * C;
                                                break
                                            }
                                            m < u - 1 ? m += 1 : b = !1
                                        }
                                        i._lastPoint = m, i._lastAddedLength = k - S.points[m].partialLength, i._lastKeyframeIndex = g
                                    }
                                } else {
                                    var A, F, T, M, D;
                                    if (v = o.s.length, x = h.s || o.e, this.sh && 1 !== o.h) r >= _ ? (a[0] = x[0], a[1] = x[1], a[2] = x[2]) : r <= E ? (a[0] = o.s[0], a[1] = o.s[1], a[2] = o.s[2]) : function(r, i) {
                                        var a = i[0],
                                            s = i[1],
                                            n = i[2],
                                            o = i[3],
                                            h = Math.atan2(2 * s * o - 2 * a * n, 1 - 2 * s * s - 2 * n * n),
                                            l = Math.asin(2 * a * s + 2 * n * o),
                                            p = Math.atan2(2 * a * o - 2 * s * n, 1 - 2 * a * a - 2 * n * n);
                                        r[0] = h / degToRads, r[1] = l / degToRads, r[2] = p / degToRads
                                    }(a, function(r, i, a) {
                                        var s, n, o, h, l, p = [],
                                            c = r[0],
                                            f = r[1],
                                            u = r[2],
                                            m = r[3],
                                            d = i[0],
                                            y = i[1],
                                            g = i[2],
                                            v = i[3];
                                        return (n = c * d + f * y + u * g + m * v) < 0 && (n = -n, d = -d, y = -y, g = -g, v = -v), 1 - n > 1e-6 ? (s = Math.acos(n), o = Math.sin(s), h = Math.sin((1 - a) * s) / o, l = Math.sin(a * s) / o) : (h = 1 - a, l = a), p[0] = h * c + l * d, p[1] = h * f + l * y, p[2] = h * u + l * g, p[3] = h * m + l * v, p
                                    }(s(o.s), s(x), (r - E) / (_ - E)));
                                    else
                                        for (g = 0; g < v; g += 1) 1 !== o.h && (r >= _ ? f = 1 : r < E ? f = 0 : (o.o.x.constructor === Array ? (l.__fnct || (l.__fnct = []), l.__fnct[g] ? d = l.__fnct[g] : (A = void 0 === o.o.x[g] ? o.o.x[0] : o.o.x[g], F = void 0 === o.o.y[g] ? o.o.y[0] : o.o.y[g], T = void 0 === o.i.x[g] ? o.i.x[0] : o.i.x[g], M = void 0 === o.i.y[g] ? o.i.y[0] : o.i.y[g], d = BezierFactory.getBezierEasing(A, F, T, M).get, l.__fnct[g] = d)) : l.__fnct ? d = l.__fnct : (A = o.o.x, F = o.o.y, T = o.i.x, M = o.i.y, d = BezierFactory.getBezierEasing(A, F, T, M).get, o.keyframeMetadata = d), f = d((r - E) / (_ - E)))), x = h.s || o.e, D = 1 === o.h ? o.s[g] : o.s[g] + (x[g] - o.s[g]) * f, "multidimensional" === this.propType ? a[g] = D : a = D
                                }
                                return i.lastIndex = y, a
                            }

                            function s(r) {
                                var i = r[0] * degToRads,
                                    a = r[1] * degToRads,
                                    s = r[2] * degToRads,
                                    n = Math.cos(i / 2),
                                    o = Math.cos(a / 2),
                                    h = Math.cos(s / 2),
                                    l = Math.sin(i / 2),
                                    p = Math.sin(a / 2),
                                    c = Math.sin(s / 2);
                                return [l * p * h + n * o * c, l * o * h + n * p * c, n * p * h - l * o * c, n * o * h - l * p * c]
                            }

                            function n() {
                                var i = this.comp.renderedFrame - this.offsetTime,
                                    a = this.keyframes[0].t - this.offsetTime,
                                    s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                if (!(i === this._caching.lastFrame || this._caching.lastFrame !== r && (this._caching.lastFrame >= s && i >= s || this._caching.lastFrame < a && i < a))) {
                                    this._caching.lastFrame >= i && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                    var n = this.interpolateValue(i, this._caching);
                                    this.pv = n
                                }
                                return this._caching.lastFrame = i, this.pv
                            }

                            function o(r) {
                                var a;
                                if ("unidimensional" === this.propType) a = r * this.mult, i(this.v - a) > 1e-5 && (this.v = a, this._mdf = !0);
                                else
                                    for (var s = 0, n = this.v.length; s < n;) a = r[s] * this.mult, i(this.v[s] - a) > 1e-5 && (this.v[s] = a, this._mdf = !0), s += 1
                            }

                            function h() {
                                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var r;
                                        this.lock = !0, this._mdf = this._isFirstFrame;
                                        var i = this.effectsSequence.length,
                                            a = this.kf ? this.pv : this.data.k;
                                        for (r = 0; r < i; r += 1) a = this.effectsSequence[r](a);
                                        this.setVValue(a), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            }

                            function l(r) {
                                this.effectsSequence.push(r), this.container.addDynamicProperty(this)
                            }

                            function p(r, i, a, s) {
                                this.propType = "unidimensional", this.mult = a || 1, this.data = i, this.v = a ? i.k * a : i.k, this.pv = i.k, this._mdf = !1, this.elem = r, this.container = s, this.comp = r.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = h, this.setVValue = o, this.addEffect = l
                            }

                            function c(r, i, a, s) {
                                var n;
                                this.propType = "multidimensional", this.mult = a || 1, this.data = i, this._mdf = !1, this.elem = r, this.container = s, this.comp = r.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                var p = i.k.length;
                                for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), this.vel = createTypedArray("float32", p), n = 0; n < p; n += 1) this.v[n] = i.k[n] * this.mult, this.pv[n] = i.k[n];
                                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = h, this.setVValue = o, this.addEffect = l
                            }

                            function f(i, s, p, c) {
                                this.propType = "unidimensional", this.keyframes = s.k, this.keyframesMetadata = [], this.offsetTime = i.data.st, this.frameId = -1, this._caching = {
                                    lastFrame: r,
                                    lastIndex: 0,
                                    value: 0,
                                    _lastKeyframeIndex: -1
                                }, this.k = !0, this.kf = !0, this.data = s, this.mult = p || 1, this.elem = i, this.container = c, this.comp = i.comp, this.v = r, this.pv = r, this._isFirstFrame = !0, this.getValue = h, this.setVValue = o, this.interpolateValue = a, this.effectsSequence = [n.bind(this)], this.addEffect = l
                            }

                            function u(i, s, p, c) {
                                var f;
                                this.propType = "multidimensional";
                                var u, m, d, y, g = s.k.length;
                                for (f = 0; f < g - 1; f += 1) s.k[f].to && s.k[f].s && s.k[f + 1] && s.k[f + 1].s && (u = s.k[f].s, m = s.k[f + 1].s, d = s.k[f].to, y = s.k[f].ti, (2 === u.length && (u[0] !== m[0] || u[1] !== m[1]) && bez.pointOnLine2D(u[0], u[1], m[0], m[1], u[0] + d[0], u[1] + d[1]) && bez.pointOnLine2D(u[0], u[1], m[0], m[1], m[0] + y[0], m[1] + y[1]) || 3 === u.length && (u[0] !== m[0] || u[1] !== m[1] || u[2] !== m[2]) && bez.pointOnLine3D(u[0], u[1], u[2], m[0], m[1], m[2], u[0] + d[0], u[1] + d[1], u[2] + d[2]) && bez.pointOnLine3D(u[0], u[1], u[2], m[0], m[1], m[2], m[0] + y[0], m[1] + y[1], m[2] + y[2])) && (s.k[f].to = null, s.k[f].ti = null), u[0] === m[0] && u[1] === m[1] && 0 === d[0] && 0 === d[1] && 0 === y[0] && 0 === y[1] && (2 === u.length || u[2] === m[2] && 0 === d[2] && 0 === y[2]) && (s.k[f].to = null, s.k[f].ti = null));
                                this.effectsSequence = [n.bind(this)], this.data = s, this.keyframes = s.k, this.keyframesMetadata = [], this.offsetTime = i.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = p || 1, this.elem = i, this.container = c, this.comp = i.comp, this.getValue = h, this.setVValue = o, this.interpolateValue = a, this.frameId = -1;
                                var v = s.k[0].s.length;
                                for (this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), f = 0; f < v; f += 1) this.v[f] = r, this.pv[f] = r;
                                this._caching = {
                                    lastFrame: r,
                                    lastIndex: 0,
                                    value: createTypedArray("float32", v)
                                }, this.addEffect = l
                            }
                            return {
                                getProp: function(r, i, a, s, n) {
                                    var o;
                                    if (i.k.length)
                                        if ("number" == typeof i.k[0]) o = new c(r, i, s, n);
                                        else switch (a) {
                                            case 0:
                                                o = new f(r, i, s, n);
                                                break;
                                            case 1:
                                                o = new u(r, i, s, n)
                                        } else o = new p(r, i, s, n);
                                    return o.effectsSequence.length && n.addDynamicProperty(o), o
                                }
                            }
                        }();

                    function DynamicPropertyContainer() {}
                    DynamicPropertyContainer.prototype = {
                        addDynamicProperty: function(r) {
                            -1 === this.dynamicProperties.indexOf(r) && (this.dynamicProperties.push(r), this.container.addDynamicProperty(this), this._isAnimated = !0)
                        },
                        iterateDynamicProperties: function() {
                            var r;
                            this._mdf = !1;
                            var i = this.dynamicProperties.length;
                            for (r = 0; r < i; r += 1) this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this._mdf = !0)
                        },
                        initDynamicPropertyContainer: function(r) {
                            this.container = r, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                        }
                    };
                    var pointPool = poolFactory(8, (function() {
                        return createTypedArray("float32", 2)
                    }));

                    function ShapePath() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                    }
                    ShapePath.prototype.setPathData = function(r, i) {
                        this.c = r, this.setLength(i);
                        for (var a = 0; a < i;) this.v[a] = pointPool.newElement(), this.o[a] = pointPool.newElement(), this.i[a] = pointPool.newElement(), a += 1
                    }, ShapePath.prototype.setLength = function(r) {
                        for (; this._maxLength < r;) this.doubleArrayLength();
                        this._length = r
                    }, ShapePath.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                    }, ShapePath.prototype.setXYAt = function(r, i, a, s, n) {
                        var o;
                        switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), a) {
                            case "v":
                                o = this.v;
                                break;
                            case "i":
                                o = this.i;
                                break;
                            case "o":
                                o = this.o;
                                break;
                            default:
                                o = []
                        }(!o[s] || o[s] && !n) && (o[s] = pointPool.newElement()), o[s][0] = r, o[s][1] = i
                    }, ShapePath.prototype.setTripleAt = function(r, i, a, s, n, o, h, l) {
                        this.setXYAt(r, i, "v", h, l), this.setXYAt(a, s, "o", h, l), this.setXYAt(n, o, "i", h, l)
                    }, ShapePath.prototype.reverse = function() {
                        var r = new ShapePath;
                        r.setPathData(this.c, this._length);
                        var i = this.v,
                            a = this.o,
                            s = this.i,
                            n = 0;
                        this.c && (r.setTripleAt(i[0][0], i[0][1], s[0][0], s[0][1], a[0][0], a[0][1], 0, !1), n = 1);
                        var o, h = this._length - 1,
                            l = this._length;
                        for (o = n; o < l; o += 1) r.setTripleAt(i[h][0], i[h][1], s[h][0], s[h][1], a[h][0], a[h][1], o, !1), h -= 1;
                        return r
                    }, ShapePath.prototype.length = function() {
                        return this._length
                    };
                    var shapePool = (factory = poolFactory(4, (function() {
                            return new ShapePath
                        }), (function(r) {
                            var i, a = r._length;
                            for (i = 0; i < a; i += 1) pointPool.release(r.v[i]), pointPool.release(r.i[i]), pointPool.release(r.o[i]), r.v[i] = null, r.i[i] = null, r.o[i] = null;
                            r._length = 0, r.c = !1
                        })), factory.clone = function(r) {
                            var i, a = factory.newElement(),
                                s = void 0 === r._length ? r.v.length : r._length;
                            for (a.setLength(s), a.c = r.c, i = 0; i < s; i += 1) a.setTripleAt(r.v[i][0], r.v[i][1], r.o[i][0], r.o[i][1], r.i[i][0], r.i[i][1], i);
                            return a
                        }, factory),
                        factory;

                    function ShapeCollection() {
                        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                    }
                    ShapeCollection.prototype.addShape = function(r) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = r, this._length += 1
                    }, ShapeCollection.prototype.releaseShapes = function() {
                        var r;
                        for (r = 0; r < this._length; r += 1) shapePool.release(this.shapes[r]);
                        this._length = 0
                    };
                    var shapeCollectionPool = (ob = {
                            newShapeCollection: function() {
                                return _length ? pool[_length -= 1] : new ShapeCollection
                            },
                            release: function(r) {
                                var i, a = r._length;
                                for (i = 0; i < a; i += 1) shapePool.release(r.shapes[i]);
                                r._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = r, _length += 1
                            }
                        }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
                        ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
                            function r(r, i, a) {
                                var s, n, o, h, l, p, c, f, u, m = a.lastIndex,
                                    d = this.keyframes;
                                if (r < d[0].t - this.offsetTime) s = d[0].s[0], o = !0, m = 0;
                                else if (r >= d[d.length - 1].t - this.offsetTime) s = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], o = !0;
                                else {
                                    for (var y, g, v, b = m, x = d.length - 1, _ = !0; _ && (y = d[b], !((g = d[b + 1]).t - this.offsetTime > r));) b < x - 1 ? b += 1 : _ = !1;
                                    if (v = this.keyframesMetadata[b] || {}, m = b, !(o = 1 === y.h)) {
                                        if (r >= g.t - this.offsetTime) f = 1;
                                        else if (r < y.t - this.offsetTime) f = 0;
                                        else {
                                            var E;
                                            v.__fnct ? E = v.__fnct : (E = BezierFactory.getBezierEasing(y.o.x, y.o.y, y.i.x, y.i.y).get, v.__fnct = E), f = E((r - (y.t - this.offsetTime)) / (g.t - this.offsetTime - (y.t - this.offsetTime)))
                                        }
                                        n = g.s ? g.s[0] : y.e[0]
                                    }
                                    s = y.s[0]
                                }
                                for (p = i._length, c = s.i[0].length, a.lastIndex = m, h = 0; h < p; h += 1)
                                    for (l = 0; l < c; l += 1) u = o ? s.i[h][l] : s.i[h][l] + (n.i[h][l] - s.i[h][l]) * f, i.i[h][l] = u, u = o ? s.o[h][l] : s.o[h][l] + (n.o[h][l] - s.o[h][l]) * f, i.o[h][l] = u, u = o ? s.v[h][l] : s.v[h][l] + (n.v[h][l] - s.v[h][l]) * f, i.v[h][l] = u
                            }

                            function i() {
                                var r = this.comp.renderedFrame - this.offsetTime,
                                    i = this.keyframes[0].t - this.offsetTime,
                                    a = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                    s = this._caching.lastFrame;
                                return -999999 !== s && (s < i && r < i || s > a && r > a) || (this._caching.lastIndex = s < r ? this._caching.lastIndex : 0, this.interpolateShape(r, this.pv, this._caching)), this._caching.lastFrame = r, this.pv
                            }

                            function a() {
                                this.paths = this.localShapeCollection
                            }

                            function s(r) {
                                (function(r, i) {
                                    if (r._length !== i._length || r.c !== i.c) return !1;
                                    var a, s = r._length;
                                    for (a = 0; a < s; a += 1)
                                        if (r.v[a][0] !== i.v[a][0] || r.v[a][1] !== i.v[a][1] || r.o[a][0] !== i.o[a][0] || r.o[a][1] !== i.o[a][1] || r.i[a][0] !== i.i[a][0] || r.i[a][1] !== i.i[a][1]) return !1;
                                    return !0
                                })(this.v, r) || (this.v = shapePool.clone(r), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                            }

                            function n() {
                                if (this.elem.globalData.frameId !== this.frameId)
                                    if (this.effectsSequence.length)
                                        if (this.lock) this.setVValue(this.pv);
                                        else {
                                            var r, i;
                                            this.lock = !0, this._mdf = !1, r = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                            var a = this.effectsSequence.length;
                                            for (i = 0; i < a; i += 1) r = this.effectsSequence[i](r);
                                            this.setVValue(r), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                        }
                                else this._mdf = !1
                            }

                            function o(r, i, s) {
                                this.propType = "shape", this.comp = r.comp, this.container = r, this.elem = r, this.data = i, this.k = !1, this.kf = !1, this._mdf = !1;
                                var n = 3 === s ? i.pt.k : i.ks.k;
                                this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = []
                            }

                            function h(r) {
                                this.effectsSequence.push(r), this.container.addDynamicProperty(this)
                            }

                            function l(r, s, n) {
                                this.propType = "shape", this.comp = r.comp, this.elem = r, this.container = r, this.offsetTime = r.data.st, this.keyframes = 3 === n ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                var o = this.keyframes[0].s[0].i.length;
                                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, o), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = a, this._caching = {
                                    lastFrame: -999999,
                                    lastIndex: 0
                                }, this.effectsSequence = [i.bind(this)]
                            }
                            o.prototype.interpolateShape = r, o.prototype.getValue = n, o.prototype.setVValue = s, o.prototype.addEffect = h, l.prototype.getValue = n, l.prototype.interpolateShape = r, l.prototype.setVValue = s, l.prototype.addEffect = h;
                            var p = function() {
                                    var r = roundCorner;

                                    function i(r, i) {
                                        this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = i.d, this.elem = r, this.comp = r.comp, this.frameId = -1, this.initDynamicPropertyContainer(r), this.p = PropertyFactory.getProp(r, i.p, 1, 0, this), this.s = PropertyFactory.getProp(r, i.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                    }
                                    return i.prototype = {
                                        reset: a,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                        },
                                        convertEllToPath: function() {
                                            var i = this.p.v[0],
                                                a = this.p.v[1],
                                                s = this.s.v[0] / 2,
                                                n = this.s.v[1] / 2,
                                                o = 3 !== this.d,
                                                h = this.v;
                                            h.v[0][0] = i, h.v[0][1] = a - n, h.v[1][0] = o ? i + s : i - s, h.v[1][1] = a, h.v[2][0] = i, h.v[2][1] = a + n, h.v[3][0] = o ? i - s : i + s, h.v[3][1] = a, h.i[0][0] = o ? i - s * r : i + s * r, h.i[0][1] = a - n, h.i[1][0] = o ? i + s : i - s, h.i[1][1] = a - n * r, h.i[2][0] = o ? i + s * r : i - s * r, h.i[2][1] = a + n, h.i[3][0] = o ? i - s : i + s, h.i[3][1] = a + n * r, h.o[0][0] = o ? i + s * r : i - s * r, h.o[0][1] = a - n, h.o[1][0] = o ? i + s : i - s, h.o[1][1] = a + n * r, h.o[2][0] = o ? i - s * r : i + s * r, h.o[2][1] = a + n, h.o[3][0] = o ? i - s : i + s, h.o[3][1] = a - n * r
                                        }
                                    }, extendPrototype([DynamicPropertyContainer], i), i
                                }(),
                                c = function() {
                                    function r(r, i) {
                                        this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = r, this.comp = r.comp, this.data = i, this.frameId = -1, this.d = i.d, this.initDynamicPropertyContainer(r), 1 === i.sy ? (this.ir = PropertyFactory.getProp(r, i.ir, 0, 0, this), this.is = PropertyFactory.getProp(r, i.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(r, i.pt, 0, 0, this), this.p = PropertyFactory.getProp(r, i.p, 1, 0, this), this.r = PropertyFactory.getProp(r, i.r, 0, degToRads, this), this.or = PropertyFactory.getProp(r, i.or, 0, 0, this), this.os = PropertyFactory.getProp(r, i.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                    }
                                    return r.prototype = {
                                        reset: a,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                        },
                                        convertStarToPath: function() {
                                            var r, i, a, s, n = 2 * Math.floor(this.pt.v),
                                                o = 2 * Math.PI / n,
                                                h = !0,
                                                l = this.or.v,
                                                p = this.ir.v,
                                                c = this.os.v,
                                                f = this.is.v,
                                                u = 2 * Math.PI * l / (2 * n),
                                                m = 2 * Math.PI * p / (2 * n),
                                                d = -Math.PI / 2;
                                            d += this.r.v;
                                            var y = 3 === this.data.d ? -1 : 1;
                                            for (this.v._length = 0, r = 0; r < n; r += 1) {
                                                a = h ? c : f, s = h ? u : m;
                                                var g = (i = h ? l : p) * Math.cos(d),
                                                    v = i * Math.sin(d),
                                                    b = 0 === g && 0 === v ? 0 : v / Math.sqrt(g * g + v * v),
                                                    x = 0 === g && 0 === v ? 0 : -g / Math.sqrt(g * g + v * v);
                                                g += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(g, v, g - b * s * a * y, v - x * s * a * y, g + b * s * a * y, v + x * s * a * y, r, !0), h = !h, d += o * y
                                            }
                                        },
                                        convertPolygonToPath: function() {
                                            var r, i = Math.floor(this.pt.v),
                                                a = 2 * Math.PI / i,
                                                s = this.or.v,
                                                n = this.os.v,
                                                o = 2 * Math.PI * s / (4 * i),
                                                h = .5 * -Math.PI,
                                                l = 3 === this.data.d ? -1 : 1;
                                            for (h += this.r.v, this.v._length = 0, r = 0; r < i; r += 1) {
                                                var p = s * Math.cos(h),
                                                    c = s * Math.sin(h),
                                                    f = 0 === p && 0 === c ? 0 : c / Math.sqrt(p * p + c * c),
                                                    u = 0 === p && 0 === c ? 0 : -p / Math.sqrt(p * p + c * c);
                                                p += +this.p.v[0], c += +this.p.v[1], this.v.setTripleAt(p, c, p - f * o * n * l, c - u * o * n * l, p + f * o * n * l, c + u * o * n * l, r, !0), h += a * l
                                            }
                                            this.paths.length = 0, this.paths[0] = this.v
                                        }
                                    }, extendPrototype([DynamicPropertyContainer], r), r
                                }(),
                                f = function() {
                                    function r(r, i) {
                                        this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = r, this.comp = r.comp, this.frameId = -1, this.d = i.d, this.initDynamicPropertyContainer(r), this.p = PropertyFactory.getProp(r, i.p, 1, 0, this), this.s = PropertyFactory.getProp(r, i.s, 1, 0, this), this.r = PropertyFactory.getProp(r, i.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                    }
                                    return r.prototype = {
                                        convertRectToPath: function() {
                                            var r = this.p.v[0],
                                                i = this.p.v[1],
                                                a = this.s.v[0] / 2,
                                                s = this.s.v[1] / 2,
                                                n = bmMin(a, s, this.r.v),
                                                o = n * (1 - roundCorner);
                                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(r + a, i - s + n, r + a, i - s + n, r + a, i - s + o, 0, !0), this.v.setTripleAt(r + a, i + s - n, r + a, i + s - o, r + a, i + s - n, 1, !0), 0 !== n ? (this.v.setTripleAt(r + a - n, i + s, r + a - n, i + s, r + a - o, i + s, 2, !0), this.v.setTripleAt(r - a + n, i + s, r - a + o, i + s, r - a + n, i + s, 3, !0), this.v.setTripleAt(r - a, i + s - n, r - a, i + s - n, r - a, i + s - o, 4, !0), this.v.setTripleAt(r - a, i - s + n, r - a, i - s + o, r - a, i - s + n, 5, !0), this.v.setTripleAt(r - a + n, i - s, r - a + n, i - s, r - a + o, i - s, 6, !0), this.v.setTripleAt(r + a - n, i - s, r + a - o, i - s, r + a - n, i - s, 7, !0)) : (this.v.setTripleAt(r - a, i + s, r - a + o, i + s, r - a, i + s, 2), this.v.setTripleAt(r - a, i - s, r - a, i - s + o, r - a, i - s, 3))) : (this.v.setTripleAt(r + a, i - s + n, r + a, i - s + o, r + a, i - s + n, 0, !0), 0 !== n ? (this.v.setTripleAt(r + a - n, i - s, r + a - n, i - s, r + a - o, i - s, 1, !0), this.v.setTripleAt(r - a + n, i - s, r - a + o, i - s, r - a + n, i - s, 2, !0), this.v.setTripleAt(r - a, i - s + n, r - a, i - s + n, r - a, i - s + o, 3, !0), this.v.setTripleAt(r - a, i + s - n, r - a, i + s - o, r - a, i + s - n, 4, !0), this.v.setTripleAt(r - a + n, i + s, r - a + n, i + s, r - a + o, i + s, 5, !0), this.v.setTripleAt(r + a - n, i + s, r + a - o, i + s, r + a - n, i + s, 6, !0), this.v.setTripleAt(r + a, i + s - n, r + a, i + s - n, r + a, i + s - o, 7, !0)) : (this.v.setTripleAt(r - a, i - s, r - a + o, i - s, r - a, i - s, 1, !0), this.v.setTripleAt(r - a, i + s, r - a, i + s - o, r - a, i + s, 2, !0), this.v.setTripleAt(r + a, i + s, r + a - o, i + s, r + a, i + s, 3, !0)))
                                        },
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                        },
                                        reset: a
                                    }, extendPrototype([DynamicPropertyContainer], r), r
                                }(),
                                u = {
                                    getShapeProp: function(r, i, a) {
                                        var s;
                                        return 3 === a || 4 === a ? s = (3 === a ? i.pt : i.ks).k.length ? new l(r, i, a) : new o(r, i, a) : 5 === a ? s = new f(r, i) : 6 === a ? s = new p(r, i) : 7 === a && (s = new c(r, i)), s.k && r.addDynamicProperty(s), s
                                    },
                                    getConstructorFunction: function() {
                                        return o
                                    },
                                    getKeyframedConstructorFunction: function() {
                                        return l
                                    }
                                };
                            return u
                        }(),
                        Matrix = function() {
                            var r = Math.cos,
                                i = Math.sin,
                                a = Math.tan,
                                s = Math.round;

                            function n() {
                                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                            }

                            function o(a) {
                                if (0 === a) return this;
                                var s = r(a),
                                    n = i(a);
                                return this._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function h(a) {
                                if (0 === a) return this;
                                var s = r(a),
                                    n = i(a);
                                return this._t(1, 0, 0, 0, 0, s, -n, 0, 0, n, s, 0, 0, 0, 0, 1)
                            }

                            function l(a) {
                                if (0 === a) return this;
                                var s = r(a),
                                    n = i(a);
                                return this._t(s, 0, n, 0, 0, 1, 0, 0, -n, 0, s, 0, 0, 0, 0, 1)
                            }

                            function p(a) {
                                if (0 === a) return this;
                                var s = r(a),
                                    n = i(a);
                                return this._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function c(r, i) {
                                return this._t(1, i, r, 1, 0, 0)
                            }

                            function f(r, i) {
                                return this.shear(a(r), a(i))
                            }

                            function u(s, n) {
                                var o = r(n),
                                    h = i(n);
                                return this._t(o, h, 0, 0, -h, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, a(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(o, -h, 0, 0, h, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function m(r, i, a) {
                                return a || 0 === a || (a = 1), 1 === r && 1 === i && 1 === a ? this : this._t(r, 0, 0, 0, 0, i, 0, 0, 0, 0, a, 0, 0, 0, 0, 1)
                            }

                            function d(r, i, a, s, n, o, h, l, p, c, f, u, m, d, y, g) {
                                return this.props[0] = r, this.props[1] = i, this.props[2] = a, this.props[3] = s, this.props[4] = n, this.props[5] = o, this.props[6] = h, this.props[7] = l, this.props[8] = p, this.props[9] = c, this.props[10] = f, this.props[11] = u, this.props[12] = m, this.props[13] = d, this.props[14] = y, this.props[15] = g, this
                            }

                            function y(r, i, a) {
                                return a = a || 0, 0 !== r || 0 !== i || 0 !== a ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r, i, a, 1) : this
                            }

                            function g(r, i, a, s, n, o, h, l, p, c, f, u, m, d, y, g) {
                                var v = this.props;
                                if (1 === r && 0 === i && 0 === a && 0 === s && 0 === n && 1 === o && 0 === h && 0 === l && 0 === p && 0 === c && 1 === f && 0 === u) return v[12] = v[12] * r + v[15] * m, v[13] = v[13] * o + v[15] * d, v[14] = v[14] * f + v[15] * y, v[15] *= g, this._identityCalculated = !1, this;
                                var b = v[0],
                                    x = v[1],
                                    _ = v[2],
                                    E = v[3],
                                    S = v[4],
                                    P = v[5],
                                    C = v[6],
                                    w = v[7],
                                    k = v[8],
                                    A = v[9],
                                    F = v[10],
                                    T = v[11],
                                    M = v[12],
                                    D = v[13],
                                    I = v[14],
                                    R = v[15];
                                return v[0] = b * r + x * n + _ * p + E * m, v[1] = b * i + x * o + _ * c + E * d, v[2] = b * a + x * h + _ * f + E * y, v[3] = b * s + x * l + _ * u + E * g, v[4] = S * r + P * n + C * p + w * m, v[5] = S * i + P * o + C * c + w * d, v[6] = S * a + P * h + C * f + w * y, v[7] = S * s + P * l + C * u + w * g, v[8] = k * r + A * n + F * p + T * m, v[9] = k * i + A * o + F * c + T * d, v[10] = k * a + A * h + F * f + T * y, v[11] = k * s + A * l + F * u + T * g, v[12] = M * r + D * n + I * p + R * m, v[13] = M * i + D * o + I * c + R * d, v[14] = M * a + D * h + I * f + R * y, v[15] = M * s + D * l + I * u + R * g, this._identityCalculated = !1, this
                            }

                            function v() {
                                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                            }

                            function b(r) {
                                for (var i = 0; i < 16;) {
                                    if (r.props[i] !== this.props[i]) return !1;
                                    i += 1
                                }
                                return !0
                            }

                            function x(r) {
                                var i;
                                for (i = 0; i < 16; i += 1) r.props[i] = this.props[i];
                                return r
                            }

                            function _(r) {
                                var i;
                                for (i = 0; i < 16; i += 1) this.props[i] = r[i]
                            }

                            function E(r, i, a) {
                                return {
                                    x: r * this.props[0] + i * this.props[4] + a * this.props[8] + this.props[12],
                                    y: r * this.props[1] + i * this.props[5] + a * this.props[9] + this.props[13],
                                    z: r * this.props[2] + i * this.props[6] + a * this.props[10] + this.props[14]
                                }
                            }

                            function S(r, i, a) {
                                return r * this.props[0] + i * this.props[4] + a * this.props[8] + this.props[12]
                            }

                            function P(r, i, a) {
                                return r * this.props[1] + i * this.props[5] + a * this.props[9] + this.props[13]
                            }

                            function C(r, i, a) {
                                return r * this.props[2] + i * this.props[6] + a * this.props[10] + this.props[14]
                            }

                            function w() {
                                var r = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    i = this.props[5] / r,
                                    a = -this.props[1] / r,
                                    s = -this.props[4] / r,
                                    n = this.props[0] / r,
                                    o = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / r,
                                    h = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / r,
                                    l = new Matrix;
                                return l.props[0] = i, l.props[1] = a, l.props[4] = s, l.props[5] = n, l.props[12] = o, l.props[13] = h, l
                            }

                            function k(r) {
                                return this.getInverseMatrix().applyToPointArray(r[0], r[1], r[2] || 0)
                            }

                            function A(r) {
                                var i, a = r.length,
                                    s = [];
                                for (i = 0; i < a; i += 1) s[i] = k(r[i]);
                                return s
                            }

                            function F(r, i, a) {
                                var s = createTypedArray("float32", 6);
                                if (this.isIdentity()) s[0] = r[0], s[1] = r[1], s[2] = i[0], s[3] = i[1], s[4] = a[0], s[5] = a[1];
                                else {
                                    var n = this.props[0],
                                        o = this.props[1],
                                        h = this.props[4],
                                        l = this.props[5],
                                        p = this.props[12],
                                        c = this.props[13];
                                    s[0] = r[0] * n + r[1] * h + p, s[1] = r[0] * o + r[1] * l + c, s[2] = i[0] * n + i[1] * h + p, s[3] = i[0] * o + i[1] * l + c, s[4] = a[0] * n + a[1] * h + p, s[5] = a[0] * o + a[1] * l + c
                                }
                                return s
                            }

                            function T(r, i, a) {
                                return this.isIdentity() ? [r, i, a] : [r * this.props[0] + i * this.props[4] + a * this.props[8] + this.props[12], r * this.props[1] + i * this.props[5] + a * this.props[9] + this.props[13], r * this.props[2] + i * this.props[6] + a * this.props[10] + this.props[14]]
                            }

                            function M(r, i) {
                                if (this.isIdentity()) return r + "," + i;
                                var a = this.props;
                                return Math.round(100 * (r * a[0] + i * a[4] + a[12])) / 100 + "," + Math.round(100 * (r * a[1] + i * a[5] + a[13])) / 100
                            }

                            function D() {
                                for (var r = 0, i = this.props, a = "matrix3d("; r < 16;) a += s(1e4 * i[r]) / 1e4, a += 15 === r ? ")" : ",", r += 1;
                                return a
                            }

                            function I(r) {
                                return r < 1e-6 && r > 0 || r > -1e-6 && r < 0 ? s(1e4 * r) / 1e4 : r
                            }

                            function R() {
                                var r = this.props;
                                return "matrix(" + I(r[0]) + "," + I(r[1]) + "," + I(r[4]) + "," + I(r[5]) + "," + I(r[12]) + "," + I(r[13]) + ")"
                            }
                            return function() {
                                this.reset = n, this.rotate = o, this.rotateX = h, this.rotateY = l, this.rotateZ = p, this.skew = f, this.skewFromAxis = u, this.shear = c, this.scale = m, this.setTransform = d, this.translate = y, this.transform = g, this.applyToPoint = E, this.applyToX = S, this.applyToY = P, this.applyToZ = C, this.applyToPointArray = T, this.applyToTriplePoints = F, this.applyToPointStringified = M, this.toCSS = D, this.to2dCSS = R, this.clone = x, this.cloneFromProps = _, this.equals = b, this.inversePoints = A, this.inversePoint = k, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                            }
                        }();

                    function _typeof$3(r) {
                        return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }
                    var lottie = {},
                        standalone = "__[STANDALONE]__",
                        animationData = "__[ANIMATIONDATA]__",
                        renderer = "";

                    function setLocation(r) {
                        setLocationHref(r)
                    }

                    function searchAnimations() {
                        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                    }

                    function setSubframeRendering(r) {
                        setSubframeEnabled(r)
                    }

                    function setPrefix(r) {
                        setIdPrefix(r)
                    }

                    function loadAnimation(r) {
                        return !0 === standalone && (r.animationData = JSON.parse(animationData)), animationManager.loadAnimation(r)
                    }

                    function setQuality(r) {
                        if ("string" == typeof r) switch (r) {
                            case "high":
                                setDefaultCurveSegments(200);
                                break;
                            default:
                            case "medium":
                                setDefaultCurveSegments(50);
                                break;
                            case "low":
                                setDefaultCurveSegments(10)
                        } else !isNaN(r) && r > 1 && setDefaultCurveSegments(r);
                        getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                    }

                    function inBrowser() {
                        return "undefined" != typeof navigator
                    }

                    function installPlugin(r, i) {
                        "expressions" === r && setExpressionsPlugin(i)
                    }

                    function getFactory(r) {
                        switch (r) {
                            case "propertyFactory":
                                return PropertyFactory;
                            case "shapePropertyFactory":
                                return ShapePropertyFactory;
                            case "matrix":
                                return Matrix;
                            default:
                                return null
                        }
                    }

                    function checkReady() {
                        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                    }

                    function getQueryVariable(r) {
                        for (var i = queryString.split("&"), a = 0; a < i.length; a += 1) {
                            var s = i[a].split("=");
                            if (decodeURIComponent(s[0]) == r) return decodeURIComponent(s[1])
                        }
                        return null
                    }
                    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
                    var queryString = "";
                    if (standalone) {
                        var scripts = document.getElementsByTagName("script"),
                            index = scripts.length - 1,
                            myScript = scripts[index] || {
                                src: ""
                            };
                        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                    }
                    var readyStateCheckInterval = setInterval(checkReady, 100);
                    try {
                        "object" !== _typeof$3(exports) && (window.bodymovin = lottie)
                    } catch (t) {}
                    var ShapeModifiers = (t = {}, e = {}, t.registerModifier = function(r, i) {
                            e[r] || (e[r] = i)
                        }, t.getModifier = function(r, i, a) {
                            return new e[r](i, a)
                        }, t),
                        t, e;

                    function ShapeModifier() {}

                    function TrimModifier() {}

                    function PuckerAndBloatModifier() {}
                    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(r) {
                        if (!this.closed) {
                            r.sh.container.addDynamicProperty(r.sh);
                            var i = {
                                shape: r.sh,
                                data: r,
                                localShapeCollection: shapeCollectionPool.newShapeCollection()
                            };
                            this.shapes.push(i), this.addShapeToModifier(i), this._isAnimated && r.setAsAnimated()
                        }
                    }, ShapeModifier.prototype.init = function(r, i) {
                        this.shapes = [], this.elem = r, this.initDynamicPropertyContainer(r), this.initModifierProperties(r, i), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, ShapeModifier.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(r, i) {
                        this.s = PropertyFactory.getProp(r, i.s, 0, .01, this), this.e = PropertyFactory.getProp(r, i.e, 0, .01, this), this.o = PropertyFactory.getProp(r, i.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = i.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                    }, TrimModifier.prototype.addShapeToModifier = function(r) {
                        r.pathsData = []
                    }, TrimModifier.prototype.calculateShapeEdges = function(r, i, a, s, n) {
                        var o = [];
                        i <= 1 ? o.push({
                            s: r,
                            e: i
                        }) : r >= 1 ? o.push({
                            s: r - 1,
                            e: i - 1
                        }) : (o.push({
                            s: r,
                            e: 1
                        }), o.push({
                            s: 0,
                            e: i - 1
                        }));
                        var h, l, p = [],
                            c = o.length;
                        for (h = 0; h < c; h += 1) {
                            var f, u;
                            (l = o[h]).e * n < s || l.s * n > s + a || (f = l.s * n <= s ? 0 : (l.s * n - s) / a, u = l.e * n >= s + a ? 1 : (l.e * n - s) / a, p.push([f, u]))
                        }
                        return p.length || p.push([0, 0]), p
                    }, TrimModifier.prototype.releasePathsData = function(r) {
                        var i, a = r.length;
                        for (i = 0; i < a; i += 1) segmentsLengthPool.release(r[i]);
                        return r.length = 0, r
                    }, TrimModifier.prototype.processShapes = function(r) {
                        var i, a, s, n;
                        if (this._mdf || r) {
                            var o = this.o.v % 360 / 360;
                            if (o < 0 && (o += 1), (i = this.s.v > 1 ? 1 + o : this.s.v < 0 ? 0 + o : this.s.v + o) > (a = this.e.v > 1 ? 1 + o : this.e.v < 0 ? 0 + o : this.e.v + o)) {
                                var h = i;
                                i = a, a = h
                            }
                            i = 1e-4 * Math.round(1e4 * i), a = 1e-4 * Math.round(1e4 * a), this.sValue = i, this.eValue = a
                        } else i = this.sValue, a = this.eValue;
                        var l, p, c, f, u, m = this.shapes.length,
                            d = 0;
                        if (a === i)
                            for (n = 0; n < m; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                        else if (1 === a && 0 === i || 0 === a && 1 === i) {
                            if (this._mdf)
                                for (n = 0; n < m; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                        } else {
                            var y, g, v = [];
                            for (n = 0; n < m; n += 1)
                                if ((y = this.shapes[n]).shape._mdf || this._mdf || r || 2 === this.m) {
                                    if (p = (s = y.shape.paths)._length, u = 0, !y.shape._mdf && y.pathsData.length) u = y.totalShapeLength;
                                    else {
                                        for (c = this.releasePathsData(y.pathsData), l = 0; l < p; l += 1) f = bez.getSegmentsLength(s.shapes[l]), c.push(f), u += f.totalLength;
                                        y.totalShapeLength = u, y.pathsData = c
                                    }
                                    d += u, y.shape._mdf = !0
                                } else y.shape.paths = y.localShapeCollection;
                            var b, x = i,
                                _ = a,
                                E = 0;
                            for (n = m - 1; n >= 0; n -= 1)
                                if ((y = this.shapes[n]).shape._mdf) {
                                    for ((g = y.localShapeCollection).releaseShapes(), 2 === this.m && m > 1 ? (b = this.calculateShapeEdges(i, a, y.totalShapeLength, E, d), E += y.totalShapeLength) : b = [
                                            [x, _]
                                        ], p = b.length, l = 0; l < p; l += 1) {
                                        x = b[l][0], _ = b[l][1], v.length = 0, _ <= 1 ? v.push({
                                            s: y.totalShapeLength * x,
                                            e: y.totalShapeLength * _
                                        }) : x >= 1 ? v.push({
                                            s: y.totalShapeLength * (x - 1),
                                            e: y.totalShapeLength * (_ - 1)
                                        }) : (v.push({
                                            s: y.totalShapeLength * x,
                                            e: y.totalShapeLength
                                        }), v.push({
                                            s: 0,
                                            e: y.totalShapeLength * (_ - 1)
                                        }));
                                        var S = this.addShapes(y, v[0]);
                                        if (v[0].s !== v[0].e) {
                                            if (v.length > 1)
                                                if (y.shape.paths.shapes[y.shape.paths._length - 1].c) {
                                                    var P = S.pop();
                                                    this.addPaths(S, g), S = this.addShapes(y, v[1], P)
                                                } else this.addPaths(S, g), S = this.addShapes(y, v[1]);
                                            this.addPaths(S, g)
                                        }
                                    }
                                    y.shape.paths = g
                                }
                        }
                    }, TrimModifier.prototype.addPaths = function(r, i) {
                        var a, s = r.length;
                        for (a = 0; a < s; a += 1) i.addShape(r[a])
                    }, TrimModifier.prototype.addSegment = function(r, i, a, s, n, o, h) {
                        n.setXYAt(i[0], i[1], "o", o), n.setXYAt(a[0], a[1], "i", o + 1), h && n.setXYAt(r[0], r[1], "v", o), n.setXYAt(s[0], s[1], "v", o + 1)
                    }, TrimModifier.prototype.addSegmentFromArray = function(r, i, a, s) {
                        i.setXYAt(r[1], r[5], "o", a), i.setXYAt(r[2], r[6], "i", a + 1), s && i.setXYAt(r[0], r[4], "v", a), i.setXYAt(r[3], r[7], "v", a + 1)
                    }, TrimModifier.prototype.addShapes = function(r, i, a) {
                        var s, n, o, h, l, p, c, f, u = r.pathsData,
                            m = r.shape.paths.shapes,
                            d = r.shape.paths._length,
                            y = 0,
                            g = [],
                            v = !0;
                        for (a ? (l = a._length, f = a._length) : (a = shapePool.newElement(), l = 0, f = 0), g.push(a), s = 0; s < d; s += 1) {
                            for (p = u[s].lengths, a.c = m[s].c, o = m[s].c ? p.length : p.length + 1, n = 1; n < o; n += 1)
                                if (y + (h = p[n - 1]).addedLength < i.s) y += h.addedLength, a.c = !1;
                                else {
                                    if (y > i.e) {
                                        a.c = !1;
                                        break
                                    }
                                    i.s <= y && i.e >= y + h.addedLength ? (this.addSegment(m[s].v[n - 1], m[s].o[n - 1], m[s].i[n], m[s].v[n], a, l, v), v = !1) : (c = bez.getNewSegment(m[s].v[n - 1], m[s].v[n], m[s].o[n - 1], m[s].i[n], (i.s - y) / h.addedLength, (i.e - y) / h.addedLength, p[n - 1]), this.addSegmentFromArray(c, a, l, v), v = !1, a.c = !1), y += h.addedLength, l += 1
                                }
                            if (m[s].c && p.length) {
                                if (h = p[n - 1], y <= i.e) {
                                    var b = p[n - 1].addedLength;
                                    i.s <= y && i.e >= y + b ? (this.addSegment(m[s].v[n - 1], m[s].o[n - 1], m[s].i[0], m[s].v[0], a, l, v), v = !1) : (c = bez.getNewSegment(m[s].v[n - 1], m[s].v[0], m[s].o[n - 1], m[s].i[0], (i.s - y) / b, (i.e - y) / b, p[n - 1]), this.addSegmentFromArray(c, a, l, v), v = !1, a.c = !1)
                                } else a.c = !1;
                                y += h.addedLength, l += 1
                            }
                            if (a._length && (a.setXYAt(a.v[f][0], a.v[f][1], "i", f), a.setXYAt(a.v[a._length - 1][0], a.v[a._length - 1][1], "o", a._length - 1)), y > i.e) break;
                            s < d - 1 && (a = shapePool.newElement(), v = !0, g.push(a), l = 0)
                        }
                        return g
                    }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(r, i) {
                        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(r, i.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                    }, PuckerAndBloatModifier.prototype.processPath = function(r, i) {
                        var a = i / 100,
                            s = [0, 0],
                            n = r._length,
                            o = 0;
                        for (o = 0; o < n; o += 1) s[0] += r.v[o][0], s[1] += r.v[o][1];
                        s[0] /= n, s[1] /= n;
                        var h, l, p, c, f, u, m = shapePool.newElement();
                        for (m.c = r.c, o = 0; o < n; o += 1) h = r.v[o][0] + (s[0] - r.v[o][0]) * a, l = r.v[o][1] + (s[1] - r.v[o][1]) * a, p = r.o[o][0] + (s[0] - r.o[o][0]) * -a, c = r.o[o][1] + (s[1] - r.o[o][1]) * -a, f = r.i[o][0] + (s[0] - r.i[o][0]) * -a, u = r.i[o][1] + (s[1] - r.i[o][1]) * -a, m.setTripleAt(h, l, p, c, f, u, o);
                        return m
                    }, PuckerAndBloatModifier.prototype.processShapes = function(r) {
                        var i, a, s, n, o, h, l = this.shapes.length,
                            p = this.amount.v;
                        if (0 !== p)
                            for (a = 0; a < l; a += 1) {
                                if (h = (o = this.shapes[a]).localShapeCollection, o.shape._mdf || this._mdf || r)
                                    for (h.releaseShapes(), o.shape._mdf = !0, i = o.shape.paths.shapes, n = o.shape.paths._length, s = 0; s < n; s += 1) h.addShape(this.processPath(i[s], p));
                                o.shape.paths = o.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var TransformPropertyFactory = function() {
                        var r = [0, 0];

                        function i(r, i, a) {
                            if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = i, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(a || r), i.p && i.p.s ? (this.px = PropertyFactory.getProp(r, i.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, i.p.y, 0, 0, this), i.p.z && (this.pz = PropertyFactory.getProp(r, i.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, i.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), i.rx) {
                                if (this.rx = PropertyFactory.getProp(r, i.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, i.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, i.rz, 0, degToRads, this), i.or.k[0].ti) {
                                    var s, n = i.or.k.length;
                                    for (s = 0; s < n; s += 1) i.or.k[s].to = null, i.or.k[s].ti = null
                                }
                                this.or = PropertyFactory.getProp(r, i.or, 1, degToRads, this), this.or.sh = !0
                            } else this.r = PropertyFactory.getProp(r, i.r || {
                                k: 0
                            }, 0, degToRads, this);
                            i.sk && (this.sk = PropertyFactory.getProp(r, i.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, i.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, i.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(r, i.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), i.o ? this.o = PropertyFactory.getProp(r, i.o, 0, .01, r) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                        }
                        return i.prototype = {
                            applyToMatrix: function(r) {
                                var i = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || i, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            },
                            getValue: function(i) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || i) {
                                        var a;
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            var s, n;
                                            if (a = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / a, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / a, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / a, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / a, 0)) : (s = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / a, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                s = [], n = [];
                                                var o = this.px,
                                                    h = this.py;
                                                o._caching.lastFrame + o.offsetTime <= o.keyframes[0].t ? (s[0] = o.getValueAtTime((o.keyframes[0].t + .01) / a, 0), s[1] = h.getValueAtTime((h.keyframes[0].t + .01) / a, 0), n[0] = o.getValueAtTime(o.keyframes[0].t / a, 0), n[1] = h.getValueAtTime(h.keyframes[0].t / a, 0)) : o._caching.lastFrame + o.offsetTime >= o.keyframes[o.keyframes.length - 1].t ? (s[0] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / a, 0), s[1] = h.getValueAtTime(h.keyframes[h.keyframes.length - 1].t / a, 0), n[0] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / a, 0), n[1] = h.getValueAtTime((h.keyframes[h.keyframes.length - 1].t - .01) / a, 0)) : (s = [o.pv, h.pv], n[0] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / a, o.offsetTime), n[1] = h.getValueAtTime((h._caching.lastFrame + h.offsetTime - .01) / a, h.offsetTime))
                                            } else s = n = r;
                                            this.v.rotate(-Math.atan2(s[1] - n[1], s[0] - n[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            },
                            precalculateMatrix: function() {
                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                    }
                                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                }
                            },
                            autoOrient: function() {}
                        }, extendPrototype([DynamicPropertyContainer], i), i.prototype.addDynamicProperty = function(r) {
                            this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
                        }, i.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                            getTransformProperty: function(r, a, s) {
                                return new i(r, a, s)
                            }
                        }
                    }();

                    function RepeaterModifier() {}

                    function RoundCornersModifier() {}

                    function floatEqual(r, i) {
                        return 1e5 * Math.abs(r - i) <= Math.min(Math.abs(r), Math.abs(i))
                    }

                    function floatZero(r) {
                        return Math.abs(r) <= 1e-5
                    }

                    function lerp(r, i, a) {
                        return r * (1 - a) + i * a
                    }

                    function lerpPoint(r, i, a) {
                        return [lerp(r[0], i[0], a), lerp(r[1], i[1], a)]
                    }

                    function quadRoots(r, i, a) {
                        if (0 === r) return [];
                        var s = i * i - 4 * r * a;
                        if (s < 0) return [];
                        var n = -i / (2 * r);
                        if (0 === s) return [n];
                        var o = Math.sqrt(s) / (2 * r);
                        return [n - o, n + o]
                    }

                    function polynomialCoefficients(r, i, a, s) {
                        return [3 * i - r - 3 * a + s, 3 * r - 6 * i + 3 * a, -3 * r + 3 * i, r]
                    }

                    function singlePoint(r) {
                        return new PolynomialBezier(r, r, r, r, !1)
                    }

                    function PolynomialBezier(r, i, a, s, n) {
                        n && pointEqual(r, i) && (i = lerpPoint(r, s, 1 / 3)), n && pointEqual(a, s) && (a = lerpPoint(r, s, 2 / 3));
                        var o = polynomialCoefficients(r[0], i[0], a[0], s[0]),
                            h = polynomialCoefficients(r[1], i[1], a[1], s[1]);
                        this.a = [o[0], h[0]], this.b = [o[1], h[1]], this.c = [o[2], h[2]], this.d = [o[3], h[3]], this.points = [r, i, a, s]
                    }

                    function extrema(r, i) {
                        var a = r.points[0][i],
                            s = r.points[r.points.length - 1][i];
                        if (a > s) {
                            var n = s;
                            s = a, a = n
                        }
                        for (var o = quadRoots(3 * r.a[i], 2 * r.b[i], r.c[i]), h = 0; h < o.length; h += 1)
                            if (o[h] > 0 && o[h] < 1) {
                                var l = r.point(o[h])[i];
                                l < a ? a = l : l > s && (s = l)
                            }
                        return {
                            min: a,
                            max: s
                        }
                    }

                    function intersectData(r, i, a) {
                        var s = r.boundingBox();
                        return {
                            cx: s.cx,
                            cy: s.cy,
                            width: s.width,
                            height: s.height,
                            bez: r,
                            t: (i + a) / 2,
                            t1: i,
                            t2: a
                        }
                    }

                    function splitData(r) {
                        var i = r.bez.split(.5);
                        return [intersectData(i[0], r.t1, r.t), intersectData(i[1], r.t, r.t2)]
                    }

                    function boxIntersect(r, i) {
                        return 2 * Math.abs(r.cx - i.cx) < r.width + i.width && 2 * Math.abs(r.cy - i.cy) < r.height + i.height
                    }

                    function intersectsImpl(r, i, a, s, n, o) {
                        if (boxIntersect(r, i))
                            if (a >= o || r.width <= s && r.height <= s && i.width <= s && i.height <= s) n.push([r.t, i.t]);
                            else {
                                var h = splitData(r),
                                    l = splitData(i);
                                intersectsImpl(h[0], l[0], a + 1, s, n, o), intersectsImpl(h[0], l[1], a + 1, s, n, o), intersectsImpl(h[1], l[0], a + 1, s, n, o), intersectsImpl(h[1], l[1], a + 1, s, n, o)
                            }
                    }

                    function crossProduct(r, i) {
                        return [r[1] * i[2] - r[2] * i[1], r[2] * i[0] - r[0] * i[2], r[0] * i[1] - r[1] * i[0]]
                    }

                    function lineIntersection(r, i, a, s) {
                        var n = [r[0], r[1], 1],
                            o = [i[0], i[1], 1],
                            h = [a[0], a[1], 1],
                            l = [s[0], s[1], 1],
                            p = crossProduct(crossProduct(n, o), crossProduct(h, l));
                        return floatZero(p[2]) ? null : [p[0] / p[2], p[1] / p[2]]
                    }

                    function polarOffset(r, i, a) {
                        return [r[0] + Math.cos(i) * a, r[1] - Math.sin(i) * a]
                    }

                    function pointDistance(r, i) {
                        return Math.hypot(r[0] - i[0], r[1] - i[1])
                    }

                    function pointEqual(r, i) {
                        return floatEqual(r[0], i[0]) && floatEqual(r[1], i[1])
                    }

                    function ZigZagModifier() {}

                    function setPoint(r, i, a, s, n, o, h) {
                        var l = a - Math.PI / 2,
                            p = a + Math.PI / 2,
                            c = i[0] + Math.cos(a) * s * n,
                            f = i[1] - Math.sin(a) * s * n;
                        r.setTripleAt(c, f, c + Math.cos(l) * o, f - Math.sin(l) * o, c + Math.cos(p) * h, f - Math.sin(p) * h, r.length())
                    }

                    function getPerpendicularVector(r, i) {
                        var a = [i[0] - r[0], i[1] - r[1]],
                            s = .5 * -Math.PI;
                        return [Math.cos(s) * a[0] - Math.sin(s) * a[1], Math.sin(s) * a[0] + Math.cos(s) * a[1]]
                    }

                    function getProjectingAngle(r, i) {
                        var a = 0 === i ? r.length() - 1 : i - 1,
                            s = (i + 1) % r.length(),
                            n = getPerpendicularVector(r.v[a], r.v[s]);
                        return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
                    }

                    function zigZagCorner(r, i, a, s, n, o, h) {
                        var l = getProjectingAngle(i, a),
                            p = i.v[a % i._length],
                            c = i.v[0 === a ? i._length - 1 : a - 1],
                            f = i.v[(a + 1) % i._length],
                            u = 2 === o ? Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)) : 0,
                            m = 2 === o ? Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)) : 0;
                        setPoint(r, i.v[a % i._length], l, h, s, m / (2 * (n + 1)), u / (2 * (n + 1)), o)
                    }

                    function zigZagSegment(r, i, a, s, n, o) {
                        for (var h = 0; h < s; h += 1) {
                            var l = (h + 1) / (s + 1),
                                p = 2 === n ? Math.sqrt(Math.pow(i.points[3][0] - i.points[0][0], 2) + Math.pow(i.points[3][1] - i.points[0][1], 2)) : 0,
                                c = i.normalAngle(l);
                            setPoint(r, i.point(l), c, o, a, p / (2 * (s + 1)), p / (2 * (s + 1)), n), o = -o
                        }
                        return o
                    }

                    function linearOffset(r, i, a) {
                        var s = Math.atan2(i[0] - r[0], i[1] - r[1]);
                        return [polarOffset(r, s, a), polarOffset(i, s, a)]
                    }

                    function offsetSegment(r, i) {
                        var a, s, n, o, h, l, p;
                        a = (p = linearOffset(r.points[0], r.points[1], i))[0], s = p[1], n = (p = linearOffset(r.points[1], r.points[2], i))[0], o = p[1], h = (p = linearOffset(r.points[2], r.points[3], i))[0], l = p[1];
                        var c = lineIntersection(a, s, n, o);
                        null === c && (c = s);
                        var f = lineIntersection(h, l, n, o);
                        return null === f && (f = h), new PolynomialBezier(a, c, f, l)
                    }

                    function joinLines(r, i, a, s, n) {
                        var o = i.points[3],
                            h = a.points[0];
                        if (3 === s) return o;
                        if (pointEqual(o, h)) return o;
                        if (2 === s) {
                            var l = -i.tangentAngle(1),
                                p = -a.tangentAngle(0) + Math.PI,
                                c = lineIntersection(o, polarOffset(o, l + Math.PI / 2, 100), h, polarOffset(h, l + Math.PI / 2, 100)),
                                f = c ? pointDistance(c, o) : pointDistance(o, h) / 2,
                                u = polarOffset(o, l, 2 * f * roundCorner);
                            return r.setXYAt(u[0], u[1], "o", r.length() - 1), u = polarOffset(h, p, 2 * f * roundCorner), r.setTripleAt(h[0], h[1], h[0], h[1], u[0], u[1], r.length()), h
                        }
                        var m = lineIntersection(pointEqual(o, i.points[2]) ? i.points[0] : i.points[2], o, h, pointEqual(h, a.points[1]) ? a.points[3] : a.points[1]);
                        return m && pointDistance(m, o) < n ? (r.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], r.length()), m) : o
                    }

                    function getIntersection(r, i) {
                        var a = r.intersections(i);
                        return a.length && floatEqual(a[0][0], 1) && a.shift(), a.length ? a[0] : null
                    }

                    function pruneSegmentIntersection(r, i) {
                        var a = r.slice(),
                            s = i.slice(),
                            n = getIntersection(r[r.length - 1], i[0]);
                        return n && (a[r.length - 1] = r[r.length - 1].split(n[0])[0], s[0] = i[0].split(n[1])[1]), r.length > 1 && i.length > 1 && (n = getIntersection(r[0], i[i.length - 1])) ? [
                            [r[0].split(n[0])[0]],
                            [i[i.length - 1].split(n[1])[1]]
                        ] : [a, s]
                    }

                    function pruneIntersections(r) {
                        for (var i, a = 1; a < r.length; a += 1) i = pruneSegmentIntersection(r[a - 1], r[a]), r[a - 1] = i[0], r[a] = i[1];
                        return r.length > 1 && (i = pruneSegmentIntersection(r[r.length - 1], r[0]), r[r.length - 1] = i[0], r[0] = i[1]), r
                    }

                    function offsetSegmentSplit(r, i) {
                        var a, s, n, o, h = r.inflectionPoints();
                        if (0 === h.length) return [offsetSegment(r, i)];
                        if (1 === h.length || floatEqual(h[1], 1)) return a = (n = r.split(h[0]))[0], s = n[1], [offsetSegment(a, i), offsetSegment(s, i)];
                        a = (n = r.split(h[0]))[0];
                        var l = (h[1] - h[0]) / (1 - h[0]);
                        return o = (n = n[1].split(l))[0], s = n[1], [offsetSegment(a, i), offsetSegment(o, i), offsetSegment(s, i)]
                    }

                    function OffsetPathModifier() {}

                    function getFontProperties(r) {
                        for (var i = r.fStyle ? r.fStyle.split(" ") : [], a = "normal", s = "normal", n = i.length, o = 0; o < n; o += 1) switch (i[o].toLowerCase()) {
                            case "italic":
                                s = "italic";
                                break;
                            case "bold":
                                a = "700";
                                break;
                            case "black":
                                a = "900";
                                break;
                            case "medium":
                                a = "500";
                                break;
                            case "regular":
                            case "normal":
                                a = "400";
                                break;
                            case "light":
                            case "thin":
                                a = "200"
                        }
                        return {
                            style: s,
                            weight: r.fWeight || a
                        }
                    }
                    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(r, i) {
                        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(r, i.c, 0, null, this), this.o = PropertyFactory.getProp(r, i.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(r, i.tr, this), this.so = PropertyFactory.getProp(r, i.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(r, i.tr.eo, 0, .01, this), this.data = i, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                    }, RepeaterModifier.prototype.applyTransforms = function(r, i, a, s, n, o) {
                        var h = o ? -1 : 1,
                            l = s.s.v[0] + (1 - s.s.v[0]) * (1 - n),
                            p = s.s.v[1] + (1 - s.s.v[1]) * (1 - n);
                        r.translate(s.p.v[0] * h * n, s.p.v[1] * h * n, s.p.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.rotate(-s.r.v * h * n), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]), a.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), a.scale(o ? 1 / l : l, o ? 1 / p : p), a.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                    }, RepeaterModifier.prototype.init = function(r, i, a, s) {
                        for (this.elem = r, this.arr = i, this.pos = a, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(r), this.initModifierProperties(r, i[a]); a > 0;) a -= 1, this._elements.unshift(i[a]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, RepeaterModifier.prototype.resetElements = function(r) {
                        var i, a = r.length;
                        for (i = 0; i < a; i += 1) r[i]._processed = !1, "gr" === r[i].ty && this.resetElements(r[i].it)
                    }, RepeaterModifier.prototype.cloneElements = function(r) {
                        var i = JSON.parse(JSON.stringify(r));
                        return this.resetElements(i), i
                    }, RepeaterModifier.prototype.changeGroupRender = function(r, i) {
                        var a, s = r.length;
                        for (a = 0; a < s; a += 1) r[a]._render = i, "gr" === r[a].ty && this.changeGroupRender(r[a].it, i)
                    }, RepeaterModifier.prototype.processShapes = function(r) {
                        var i, a, s, n, o, h = !1;
                        if (this._mdf || r) {
                            var l, p = Math.ceil(this.c.v);
                            if (this._groups.length < p) {
                                for (; this._groups.length < p;) {
                                    var c = {
                                        it: this.cloneElements(this._elements),
                                        ty: "gr"
                                    };
                                    c.it.push({
                                        a: {
                                            a: 0,
                                            ix: 1,
                                            k: [0, 0]
                                        },
                                        nm: "Transform",
                                        o: {
                                            a: 0,
                                            ix: 7,
                                            k: 100
                                        },
                                        p: {
                                            a: 0,
                                            ix: 2,
                                            k: [0, 0]
                                        },
                                        r: {
                                            a: 1,
                                            ix: 6,
                                            k: [{
                                                s: 0,
                                                e: 0,
                                                t: 0
                                            }, {
                                                s: 0,
                                                e: 0,
                                                t: 1
                                            }]
                                        },
                                        s: {
                                            a: 0,
                                            ix: 3,
                                            k: [100, 100]
                                        },
                                        sa: {
                                            a: 0,
                                            ix: 5,
                                            k: 0
                                        },
                                        sk: {
                                            a: 0,
                                            ix: 4,
                                            k: 0
                                        },
                                        ty: "tr"
                                    }), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1
                                }
                                this.elem.reloadShapes(), h = !0
                            }
                            for (o = 0, s = 0; s <= this._groups.length - 1; s += 1) {
                                if (l = o < p, this._groups[s]._render = l, this.changeGroupRender(this._groups[s].it, l), !l) {
                                    var f = this.elemsData[s].it,
                                        u = f[f.length - 1];
                                    0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1
                                }
                                o += 1
                            }
                            this._currentCopies = p;
                            var m = this.o.v,
                                d = m % 1,
                                y = m > 0 ? Math.floor(m) : Math.ceil(m),
                                g = this.pMatrix.props,
                                v = this.rMatrix.props,
                                b = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var x, _, E = 0;
                            if (m > 0) {
                                for (; E < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), E += 1;
                                d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), E += d)
                            } else if (m < 0) {
                                for (; E > y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), E -= 1;
                                d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), E -= d)
                            }
                            for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, o = this._currentCopies; o;) {
                                if (_ = (a = (i = this.elemsData[s].it)[i.length - 1].transform.mProps.v.props).length, i[i.length - 1].transform.mProps._mdf = !0, i[i.length - 1].transform.op._mdf = !0, i[i.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== E) {
                                    for ((0 !== s && 1 === n || s !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), x = 0; x < _; x += 1) a[x] = this.matrix.props[x];
                                    this.matrix.reset()
                                } else
                                    for (this.matrix.reset(), x = 0; x < _; x += 1) a[x] = this.matrix.props[x];
                                E += 1, o -= 1, s += n
                            }
                        } else
                            for (o = this._currentCopies, s = 0, n = 1; o;) a = (i = this.elemsData[s].it)[i.length - 1].transform.mProps.v.props, i[i.length - 1].transform.mProps._mdf = !1, i[i.length - 1].transform.op._mdf = !1, o -= 1, s += n;
                        return h
                    }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(r, i) {
                        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(r, i.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                    }, RoundCornersModifier.prototype.processPath = function(r, i) {
                        var a, s = shapePool.newElement();
                        s.c = r.c;
                        var n, o, h, l, p, c, f, u, m, d, y, g, v = r._length,
                            b = 0;
                        for (a = 0; a < v; a += 1) n = r.v[a], h = r.o[a], o = r.i[a], n[0] === h[0] && n[1] === h[1] && n[0] === o[0] && n[1] === o[1] ? 0 !== a && a !== v - 1 || r.c ? (l = 0 === a ? r.v[v - 1] : r.v[a - 1], c = (p = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2))) ? Math.min(p / 2, i) / p : 0, f = y = n[0] + (l[0] - n[0]) * c, u = g = n[1] - (n[1] - l[1]) * c, m = f - (f - n[0]) * roundCorner, d = u - (u - n[1]) * roundCorner, s.setTripleAt(f, u, m, d, y, g, b), b += 1, l = a === v - 1 ? r.v[0] : r.v[a + 1], c = (p = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2))) ? Math.min(p / 2, i) / p : 0, f = m = n[0] + (l[0] - n[0]) * c, u = d = n[1] + (l[1] - n[1]) * c, y = f - (f - n[0]) * roundCorner, g = u - (u - n[1]) * roundCorner, s.setTripleAt(f, u, m, d, y, g, b), b += 1) : (s.setTripleAt(n[0], n[1], h[0], h[1], o[0], o[1], b), b += 1) : (s.setTripleAt(r.v[a][0], r.v[a][1], r.o[a][0], r.o[a][1], r.i[a][0], r.i[a][1], b), b += 1);
                        return s
                    }, RoundCornersModifier.prototype.processShapes = function(r) {
                        var i, a, s, n, o, h, l = this.shapes.length,
                            p = this.rd.v;
                        if (0 !== p)
                            for (a = 0; a < l; a += 1) {
                                if (h = (o = this.shapes[a]).localShapeCollection, o.shape._mdf || this._mdf || r)
                                    for (h.releaseShapes(), o.shape._mdf = !0, i = o.shape.paths.shapes, n = o.shape.paths._length, s = 0; s < n; s += 1) h.addShape(this.processPath(i[s], p));
                                o.shape.paths = o.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, PolynomialBezier.prototype.point = function(r) {
                        return [((this.a[0] * r + this.b[0]) * r + this.c[0]) * r + this.d[0], ((this.a[1] * r + this.b[1]) * r + this.c[1]) * r + this.d[1]]
                    }, PolynomialBezier.prototype.derivative = function(r) {
                        return [(3 * r * this.a[0] + 2 * this.b[0]) * r + this.c[0], (3 * r * this.a[1] + 2 * this.b[1]) * r + this.c[1]]
                    }, PolynomialBezier.prototype.tangentAngle = function(r) {
                        var i = this.derivative(r);
                        return Math.atan2(i[1], i[0])
                    }, PolynomialBezier.prototype.normalAngle = function(r) {
                        var i = this.derivative(r);
                        return Math.atan2(i[0], i[1])
                    }, PolynomialBezier.prototype.inflectionPoints = function() {
                        var r = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                        if (floatZero(r)) return [];
                        var i = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / r,
                            a = i * i - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / r;
                        if (a < 0) return [];
                        var s = Math.sqrt(a);
                        return floatZero(s) ? s > 0 && s < 1 ? [i] : [] : [i - s, i + s].filter((function(r) {
                            return r > 0 && r < 1
                        }))
                    }, PolynomialBezier.prototype.split = function(r) {
                        if (r <= 0) return [singlePoint(this.points[0]), this];
                        if (r >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                        var i = lerpPoint(this.points[0], this.points[1], r),
                            a = lerpPoint(this.points[1], this.points[2], r),
                            s = lerpPoint(this.points[2], this.points[3], r),
                            n = lerpPoint(i, a, r),
                            o = lerpPoint(a, s, r),
                            h = lerpPoint(n, o, r);
                        return [new PolynomialBezier(this.points[0], i, n, h, !0), new PolynomialBezier(h, o, s, this.points[3], !0)]
                    }, PolynomialBezier.prototype.bounds = function() {
                        return {
                            x: extrema(this, 0),
                            y: extrema(this, 1)
                        }
                    }, PolynomialBezier.prototype.boundingBox = function() {
                        var r = this.bounds();
                        return {
                            left: r.x.min,
                            right: r.x.max,
                            top: r.y.min,
                            bottom: r.y.max,
                            width: r.x.max - r.x.min,
                            height: r.y.max - r.y.min,
                            cx: (r.x.max + r.x.min) / 2,
                            cy: (r.y.max + r.y.min) / 2
                        }
                    }, PolynomialBezier.prototype.intersections = function(r, i, a) {
                        void 0 === i && (i = 2), void 0 === a && (a = 7);
                        var s = [];
                        return intersectsImpl(intersectData(this, 0, 1), intersectData(r, 0, 1), 0, i, s, a), s
                    }, PolynomialBezier.shapeSegment = function(r, i) {
                        var a = (i + 1) % r.length();
                        return new PolynomialBezier(r.v[i], r.o[i], r.i[a], r.v[a], !0)
                    }, PolynomialBezier.shapeSegmentInverted = function(r, i) {
                        var a = (i + 1) % r.length();
                        return new PolynomialBezier(r.v[a], r.i[a], r.o[i], r.v[i], !0)
                    }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(r, i) {
                        this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(r, i.s, 0, null, this), this.frequency = PropertyFactory.getProp(r, i.r, 0, null, this), this.pointsType = PropertyFactory.getProp(r, i.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                    }, ZigZagModifier.prototype.processPath = function(r, i, a, s) {
                        var n = r._length,
                            o = shapePool.newElement();
                        if (o.c = r.c, r.c || (n -= 1), 0 === n) return o;
                        var h = -1,
                            l = PolynomialBezier.shapeSegment(r, 0);
                        zigZagCorner(o, r, 0, i, a, s, h);
                        for (var p = 0; p < n; p += 1) h = zigZagSegment(o, l, i, a, s, -h), l = p !== n - 1 || r.c ? PolynomialBezier.shapeSegment(r, (p + 1) % n) : null, zigZagCorner(o, r, p + 1, i, a, s, h);
                        return o
                    }, ZigZagModifier.prototype.processShapes = function(r) {
                        var i, a, s, n, o, h, l = this.shapes.length,
                            p = this.amplitude.v,
                            c = Math.max(0, Math.round(this.frequency.v)),
                            f = this.pointsType.v;
                        if (0 !== p)
                            for (a = 0; a < l; a += 1) {
                                if (h = (o = this.shapes[a]).localShapeCollection, o.shape._mdf || this._mdf || r)
                                    for (h.releaseShapes(), o.shape._mdf = !0, i = o.shape.paths.shapes, n = o.shape.paths._length, s = 0; s < n; s += 1) h.addShape(this.processPath(i[s], p, c, f));
                                o.shape.paths = o.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(r, i) {
                        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(r, i.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(r, i.ml, 0, null, this), this.lineJoin = i.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                    }, OffsetPathModifier.prototype.processPath = function(r, i, a, s) {
                        var n = shapePool.newElement();
                        n.c = r.c;
                        var o, h, l, p = r.length();
                        r.c || (p -= 1);
                        var c = [];
                        for (o = 0; o < p; o += 1) l = PolynomialBezier.shapeSegment(r, o), c.push(offsetSegmentSplit(l, i));
                        if (!r.c)
                            for (o = p - 1; o >= 0; o -= 1) l = PolynomialBezier.shapeSegmentInverted(r, o), c.push(offsetSegmentSplit(l, i));
                        c = pruneIntersections(c);
                        var f = null,
                            u = null;
                        for (o = 0; o < c.length; o += 1) {
                            var m = c[o];
                            for (u && (f = joinLines(n, u, m[0], a, s)), u = m[m.length - 1], h = 0; h < m.length; h += 1) l = m[h], f && pointEqual(l.points[0], f) ? n.setXYAt(l.points[1][0], l.points[1][1], "o", n.length() - 1) : n.setTripleAt(l.points[0][0], l.points[0][1], l.points[1][0], l.points[1][1], l.points[0][0], l.points[0][1], n.length()), n.setTripleAt(l.points[3][0], l.points[3][1], l.points[3][0], l.points[3][1], l.points[2][0], l.points[2][1], n.length()), f = l.points[3]
                        }
                        return c.length && joinLines(n, u, c[0][0], a, s), n
                    }, OffsetPathModifier.prototype.processShapes = function(r) {
                        var i, a, s, n, o, h, l = this.shapes.length,
                            p = this.amount.v,
                            c = this.miterLimit.v,
                            f = this.lineJoin;
                        if (0 !== p)
                            for (a = 0; a < l; a += 1) {
                                if (h = (o = this.shapes[a]).localShapeCollection, o.shape._mdf || this._mdf || r)
                                    for (h.releaseShapes(), o.shape._mdf = !0, i = o.shape.paths.shapes, n = o.shape.paths._length, s = 0; s < n; s += 1) h.addShape(this.processPath(i[s], p, f, c));
                                o.shape.paths = o.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var FontManager = function() {
                        var r = {
                                w: 0,
                                size: 0,
                                shapes: [],
                                data: {
                                    shapes: []
                                }
                            },
                            i = [];
                        i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                        var a = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                            s = [65039, 8205];

                        function n(r, i) {
                            var a = createTag("span");
                            a.setAttribute("aria-hidden", !0), a.style.fontFamily = i;
                            var s = createTag("span");
                            s.innerText = "giItT1WQy@!-/#", a.style.position = "absolute", a.style.left = "-10000px", a.style.top = "-10000px", a.style.fontSize = "300px", a.style.fontVariant = "normal", a.style.fontStyle = "normal", a.style.fontWeight = "normal", a.style.letterSpacing = "0", a.appendChild(s), document.body.appendChild(a);
                            var n = s.offsetWidth;
                            return s.style.fontFamily = function(r) {
                                var i, a = r.split(","),
                                    s = a.length,
                                    n = [];
                                for (i = 0; i < s; i += 1) "sans-serif" !== a[i] && "monospace" !== a[i] && n.push(a[i]);
                                return n.join(",")
                            }(r) + ", " + i, {
                                node: s,
                                w: n,
                                parent: a
                            }
                        }

                        function o(r, i) {
                            var a, s = document.body && i ? "svg" : "canvas",
                                n = getFontProperties(r);
                            if ("svg" === s) {
                                var o = createNS("text");
                                o.style.fontSize = "100px", o.setAttribute("font-family", r.fFamily), o.setAttribute("font-style", n.style), o.setAttribute("font-weight", n.weight), o.textContent = "1", r.fClass ? (o.style.fontFamily = "inherit", o.setAttribute("class", r.fClass)) : o.style.fontFamily = r.fFamily, i.appendChild(o), a = o
                            } else {
                                var h = new OffscreenCanvas(500, 500).getContext("2d");
                                h.font = n.style + " " + n.weight + " 100px " + r.fFamily, a = h
                            }
                            return {
                                measureText: function(r) {
                                    return "svg" === s ? (a.textContent = r, a.getComputedTextLength()) : a.measureText(r).width
                                }
                            }
                        }
                        var h = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                        };
                        return h.isModifier = function(r, i) {
                            var s = r.toString(16) + i.toString(16);
                            return -1 !== a.indexOf(s)
                        }, h.isZeroWidthJoiner = function(r, i) {
                            return i ? r === s[0] && i === s[1] : r === s[1]
                        }, h.isCombinedCharacter = function(r) {
                            return -1 !== i.indexOf(r)
                        }, h.prototype = {
                            addChars: function(r) {
                                if (r) {
                                    var i;
                                    this.chars || (this.chars = []);
                                    var a, s, n = r.length,
                                        o = this.chars.length;
                                    for (i = 0; i < n; i += 1) {
                                        for (a = 0, s = !1; a < o;) this.chars[a].style === r[i].style && this.chars[a].fFamily === r[i].fFamily && this.chars[a].ch === r[i].ch && (s = !0), a += 1;
                                        s || (this.chars.push(r[i]), o += 1)
                                    }
                                }
                            },
                            addFonts: function(r, i) {
                                if (r) {
                                    if (this.chars) return this.isLoaded = !0, void(this.fonts = r.list);
                                    if (!document.body) return this.isLoaded = !0, r.list.forEach((function(r) {
                                        r.helper = o(r), r.cache = {}
                                    })), void(this.fonts = r.list);
                                    var a, s = r.list,
                                        h = s.length,
                                        l = h;
                                    for (a = 0; a < h; a += 1) {
                                        var p, c, f = !0;
                                        if (s[a].loaded = !1, s[a].monoCase = n(s[a].fFamily, "monospace"), s[a].sansCase = n(s[a].fFamily, "sans-serif"), s[a].fPath) {
                                            if ("p" === s[a].fOrigin || 3 === s[a].origin) {
                                                if ((p = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[a].fFamily + '"], style[f-origin="3"][f-family="' + s[a].fFamily + '"]')).length > 0 && (f = !1), f) {
                                                    var u = createTag("style");
                                                    u.setAttribute("f-forigin", s[a].fOrigin), u.setAttribute("f-origin", s[a].origin), u.setAttribute("f-family", s[a].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + s[a].fFamily + "; font-style: normal; src: url('" + s[a].fPath + "');}", i.appendChild(u)
                                                }
                                            } else if ("g" === s[a].fOrigin || 1 === s[a].origin) {
                                                for (p = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), c = 0; c < p.length; c += 1) - 1 !== p[c].href.indexOf(s[a].fPath) && (f = !1);
                                                if (f) {
                                                    var m = createTag("link");
                                                    m.setAttribute("f-forigin", s[a].fOrigin), m.setAttribute("f-origin", s[a].origin), m.type = "text/css", m.rel = "stylesheet", m.href = s[a].fPath, document.body.appendChild(m)
                                                }
                                            } else if ("t" === s[a].fOrigin || 2 === s[a].origin) {
                                                for (p = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), c = 0; c < p.length; c += 1) s[a].fPath === p[c].src && (f = !1);
                                                if (f) {
                                                    var d = createTag("link");
                                                    d.setAttribute("f-forigin", s[a].fOrigin), d.setAttribute("f-origin", s[a].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", s[a].fPath), i.appendChild(d)
                                                }
                                            }
                                        } else s[a].loaded = !0, l -= 1;
                                        s[a].helper = o(s[a], i), s[a].cache = {}, this.fonts.push(s[a])
                                    }
                                    0 === l ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                } else this.isLoaded = !0
                            },
                            getCharData: function(i, a, s) {
                                for (var n = 0, o = this.chars.length; n < o;) {
                                    if (this.chars[n].ch === i && this.chars[n].style === a && this.chars[n].fFamily === s) return this.chars[n];
                                    n += 1
                                }
                                return ("string" == typeof i && 13 !== i.charCodeAt(0) || !i) && console && console.warn && !this._warned && (this._warned = !0), r
                            },
                            getFontByName: function(r) {
                                for (var i = 0, a = this.fonts.length; i < a;) {
                                    if (this.fonts[i].fName === r) return this.fonts[i];
                                    i += 1
                                }
                                return this.fonts[0]
                            },
                            measureText: function(r, i, a) {
                                var s = this.getFontByName(i),
                                    n = r.charCodeAt(0);
                                if (!s.cache[n + 1]) {
                                    var o = s.helper;
                                    if (" " === r) {
                                        var h = o.measureText("|" + r + "|"),
                                            l = o.measureText("||");
                                        s.cache[n + 1] = (h - l) / 100
                                    } else s.cache[n + 1] = o.measureText(r) / 100
                                }
                                return s.cache[n + 1] * a
                            },
                            checkLoadedFonts: function() {
                                var r, i, a, s = this.fonts.length,
                                    n = s;
                                for (r = 0; r < s; r += 1) this.fonts[r].loaded ? n -= 1 : "n" === this.fonts[r].fOrigin || 0 === this.fonts[r].origin ? this.fonts[r].loaded = !0 : (i = this.fonts[r].monoCase.node, a = this.fonts[r].monoCase.w, i.offsetWidth !== a ? (n -= 1, this.fonts[r].loaded = !0) : (i = this.fonts[r].sansCase.node, a = this.fonts[r].sansCase.w, i.offsetWidth !== a && (n -= 1, this.fonts[r].loaded = !0)), this.fonts[r].loaded && (this.fonts[r].sansCase.parent.parentNode.removeChild(this.fonts[r].sansCase.parent), this.fonts[r].monoCase.parent.parentNode.removeChild(this.fonts[r].monoCase.parent)));
                                0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            },
                            setIsLoaded: function() {
                                this.isLoaded = !0
                            }
                        }, h
                    }();

                    function RenderableElement() {}
                    RenderableElement.prototype = {
                        initRenderable: function() {
                            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                        },
                        addRenderableComponent: function(r) {
                            -1 === this.renderableComponents.indexOf(r) && this.renderableComponents.push(r)
                        },
                        removeRenderableComponent: function(r) {
                            -1 !== this.renderableComponents.indexOf(r) && this.renderableComponents.splice(this.renderableComponents.indexOf(r), 1)
                        },
                        prepareRenderableFrame: function(r) {
                            this.checkLayerLimits(r)
                        },
                        checkTransparency: function() {
                            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                        },
                        checkLayerLimits: function(r) {
                            this.data.ip - this.data.st <= r && this.data.op - this.data.st > r ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                        },
                        renderRenderable: function() {
                            var r, i = this.renderableComponents.length;
                            for (r = 0; r < i; r += 1) this.renderableComponents[r].renderFrame(this._isFirstFrame)
                        },
                        sourceRectAtTime: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: 100,
                                height: 100
                            }
                        },
                        getLayerSize: function() {
                            return 5 === this.data.ty ? {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            } : {
                                w: this.data.width,
                                h: this.data.height
                            }
                        }
                    };
                    var getBlendMode = (blendModeEnums = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        }, function(r) {
                            return blendModeEnums[r] || ""
                        }),
                        blendModeEnums;

                    function SliderEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 0, 0, a)
                    }

                    function AngleEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 0, 0, a)
                    }

                    function ColorEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 1, 0, a)
                    }

                    function PointEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 1, 0, a)
                    }

                    function LayerIndexEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 0, 0, a)
                    }

                    function MaskIndexEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 0, 0, a)
                    }

                    function CheckboxEffect(r, i, a) {
                        this.p = PropertyFactory.getProp(i, r.v, 0, 0, a)
                    }

                    function NoValueEffect() {
                        this.p = {}
                    }

                    function EffectsManager(r, i) {
                        var a, s = r.ef || [];
                        this.effectElements = [];
                        var n, o = s.length;
                        for (a = 0; a < o; a += 1) n = new GroupEffect(s[a], i), this.effectElements.push(n)
                    }

                    function GroupEffect(r, i) {
                        this.init(r, i)
                    }

                    function BaseElement() {}

                    function FrameElement() {}

                    function FootageElement(r, i, a) {
                        this.initFrame(), this.initRenderable(), this.assetData = i.getAssetData(r.refId), this.footageData = i.imageLoader.getAsset(this.assetData), this.initBaseData(r, i, a)
                    }

                    function AudioElement(r, i, a) {
                        this.initFrame(), this.initRenderable(), this.assetData = i.getAssetData(r.refId), this.initBaseData(r, i, a), this._isPlaying = !1, this._canPlay = !1;
                        var s = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = r.tm ? PropertyFactory.getProp(this, r.tm, 0, i.frameRate, this) : {
                            _placeholder: !0
                        }, this.lv = PropertyFactory.getProp(this, r.au && r.au.lv ? r.au.lv : {
                            k: [100]
                        }, 1, .01, this)
                    }

                    function BaseRenderer() {}

                    function TransformElement() {}

                    function MaskElement(r, i, a) {
                        this.data = r, this.element = i, this.globalData = a, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var s, n, o = this.globalData.defs,
                            h = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = createSizedArray(h), this.solidPath = "";
                        var l, p, c, f, u, m, d = this.masksProperties,
                            y = 0,
                            g = [],
                            v = createElementID(),
                            b = "clipPath",
                            x = "clip-path";
                        for (s = 0; s < h; s += 1)
                            if (("a" !== d[s].mode && "n" !== d[s].mode || d[s].inv || 100 !== d[s].o.k || d[s].o.x) && (b = "mask", x = "mask"), "s" !== d[s].mode && "i" !== d[s].mode || 0 !== y ? c = null : ((c = createNS("rect")).setAttribute("fill", "#ffffff"), c.setAttribute("width", this.element.comp.data.w || 0), c.setAttribute("height", this.element.comp.data.h || 0), g.push(c)), n = createNS("path"), "n" === d[s].mode) this.viewData[s] = {
                                op: PropertyFactory.getProp(this.element, d[s].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, d[s], 3),
                                elem: n,
                                lastPath: ""
                            }, o.appendChild(n);
                            else {
                                var _;
                                if (y += 1, n.setAttribute("fill", "s" === d[s].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[s].x.k ? (b = "mask", x = "mask", m = PropertyFactory.getProp(this.element, d[s].x, 0, null, this.element), _ = createElementID(), (f = createNS("filter")).setAttribute("id", _), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), f.appendChild(u), o.appendChild(f), n.setAttribute("stroke", "s" === d[s].mode ? "#000000" : "#ffffff")) : (u = null, m = null), this.storedData[s] = {
                                        elem: n,
                                        x: m,
                                        expan: u,
                                        lastPath: "",
                                        lastOperator: "",
                                        filterId: _,
                                        lastRadius: 0
                                    }, "i" === d[s].mode) {
                                    p = g.length;
                                    var E = createNS("g");
                                    for (l = 0; l < p; l += 1) E.appendChild(g[l]);
                                    var S = createNS("mask");
                                    S.setAttribute("mask-type", "alpha"), S.setAttribute("id", v + "_" + y), S.appendChild(n), o.appendChild(S), E.setAttribute("mask", "url(" + getLocationHref() + "#" + v + "_" + y + ")"), g.length = 0, g.push(E)
                                } else g.push(n);
                                d[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                                    elem: n,
                                    lastPath: "",
                                    op: PropertyFactory.getProp(this.element, d[s].o, 0, .01, this.element),
                                    prop: ShapePropertyFactory.getShapeProp(this.element, d[s], 3),
                                    invRect: c
                                }, this.viewData[s].prop.k || this.drawPath(d[s], this.viewData[s].prop.v, this.viewData[s])
                            }
                        for (this.maskElement = createNS(b), h = g.length, s = 0; s < h; s += 1) this.maskElement.appendChild(g[s]);
                        y > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(x, "url(" + getLocationHref() + "#" + v + ")"), o.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                    }
                    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(r, i) {
                        var a;
                        this.data = r, this.effectElements = [], this.initDynamicPropertyContainer(i);
                        var s, n = this.data.ef.length,
                            o = this.data.ef;
                        for (a = 0; a < n; a += 1) {
                            switch (s = null, o[a].ty) {
                                case 0:
                                    s = new SliderEffect(o[a], i, this);
                                    break;
                                case 1:
                                    s = new AngleEffect(o[a], i, this);
                                    break;
                                case 2:
                                    s = new ColorEffect(o[a], i, this);
                                    break;
                                case 3:
                                    s = new PointEffect(o[a], i, this);
                                    break;
                                case 4:
                                case 7:
                                    s = new CheckboxEffect(o[a], i, this);
                                    break;
                                case 10:
                                    s = new LayerIndexEffect(o[a], i, this);
                                    break;
                                case 11:
                                    s = new MaskIndexEffect(o[a], i, this);
                                    break;
                                case 5:
                                    s = new EffectsManager(o[a], i, this);
                                    break;
                                default:
                                    s = new NoValueEffect(o[a], i, this)
                            }
                            s && this.effectElements.push(s)
                        }
                    }, BaseElement.prototype = {
                        checkMasks: function() {
                            if (!this.data.hasMask) return !1;
                            for (var r = 0, i = this.data.masksProperties.length; r < i;) {
                                if ("n" !== this.data.masksProperties[r].mode && !1 !== this.data.masksProperties[r].cl) return !0;
                                r += 1
                            }
                            return !1
                        },
                        initExpressions: function() {
                            var r = getExpressionInterfaces();
                            if (r) {
                                var i = r("layer"),
                                    a = r("effects"),
                                    s = r("shape"),
                                    n = r("text"),
                                    o = r("comp");
                                this.layerInterface = i(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                var h = a.createEffectsInterface(this, this.layerInterface);
                                this.layerInterface.registerEffectsInterface(h), 0 === this.data.ty || this.data.xt ? this.compInterface = o(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
                            }
                        },
                        setBlendMode: function() {
                            var r = getBlendMode(this.data.bm);
                            (this.baseElement || this.layerElement).style["mix-blend-mode"] = r
                        },
                        initBaseData: function(r, i, a) {
                            this.globalData = i, this.comp = a, this.data = r, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                        },
                        getType: function() {
                            return this.type
                        },
                        sourceRectAtTime: function() {}
                    }, FrameElement.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                        },
                        prepareProperties: function(r, i) {
                            var a, s = this.dynamicProperties.length;
                            for (a = 0; a < s; a += 1)(i || this._isParent && "transform" === this.dynamicProperties[a].propType) && (this.dynamicProperties[a].getValue(), this.dynamicProperties[a]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                        },
                        addDynamicProperty: function(r) {
                            -1 === this.dynamicProperties.indexOf(r) && this.dynamicProperties.push(r)
                        }
                    }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                        return null
                    }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                        var r = getExpressionInterfaces();
                        if (r) {
                            var i = r("footage");
                            this.layerInterface = i(this)
                        }
                    }, FootageElement.prototype.getFootageData = function() {
                        return this.footageData
                    }, AudioElement.prototype.prepareFrame = function(r) {
                        if (this.prepareRenderableFrame(r, !0), this.prepareProperties(r, !0), this.tm._placeholder) this._currentTime = r / this.data.sr;
                        else {
                            var i = this.tm.v;
                            this._currentTime = i
                        }
                        this._volume = this.lv.v[0];
                        var a = this._volume * this._volumeMultiplier;
                        this._previousVolume !== a && (this._previousVolume = a, this.audio.volume(a))
                    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                    }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                        this.audio.pause(), this._isPlaying = !1
                    }, AudioElement.prototype.pause = function() {
                        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                    }, AudioElement.prototype.resume = function() {
                        this._canPlay = !0
                    }, AudioElement.prototype.setRate = function(r) {
                        this.audio.rate(r)
                    }, AudioElement.prototype.volume = function(r) {
                        this._volumeMultiplier = r, this._previousVolume = r * this._volume, this.audio.volume(this._previousVolume)
                    }, AudioElement.prototype.getBaseElement = function() {
                        return null
                    }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(r) {
                        var i, a, s = this.layers.length;
                        for (this.completeLayers = !0, i = s - 1; i >= 0; i -= 1) this.elements[i] || (a = this.layers[i]).ip - a.st <= r - this.layers[i].st && a.op - a.st > r - this.layers[i].st && this.buildItem(i), this.completeLayers = !!this.elements[i] && this.completeLayers;
                        this.checkPendingElements()
                    }, BaseRenderer.prototype.createItem = function(r) {
                        switch (r.ty) {
                            case 2:
                                return this.createImage(r);
                            case 0:
                                return this.createComp(r);
                            case 1:
                                return this.createSolid(r);
                            case 3:
                            default:
                                return this.createNull(r);
                            case 4:
                                return this.createShape(r);
                            case 5:
                                return this.createText(r);
                            case 6:
                                return this.createAudio(r);
                            case 13:
                                return this.createCamera(r);
                            case 15:
                                return this.createFootage(r)
                        }
                    }, BaseRenderer.prototype.createCamera = function() {
                        throw new Error("You're using a 3d camera. Try the html renderer.")
                    }, BaseRenderer.prototype.createAudio = function(r) {
                        return new AudioElement(r, this.globalData, this)
                    }, BaseRenderer.prototype.createFootage = function(r) {
                        return new FootageElement(r, this.globalData, this)
                    }, BaseRenderer.prototype.buildAllItems = function() {
                        var r, i = this.layers.length;
                        for (r = 0; r < i; r += 1) this.buildItem(r);
                        this.checkPendingElements()
                    }, BaseRenderer.prototype.includeLayers = function(r) {
                        var i;
                        this.completeLayers = !1;
                        var a, s = r.length,
                            n = this.layers.length;
                        for (i = 0; i < s; i += 1)
                            for (a = 0; a < n;) {
                                if (this.layers[a].id === r[i].id) {
                                    this.layers[a] = r[i];
                                    break
                                }
                                a += 1
                            }
                    }, BaseRenderer.prototype.setProjectInterface = function(r) {
                        this.globalData.projectInterface = r
                    }, BaseRenderer.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems()
                    }, BaseRenderer.prototype.buildElementParenting = function(r, i, a) {
                        for (var s = this.elements, n = this.layers, o = 0, h = n.length; o < h;) n[o].ind == i && (s[o] && !0 !== s[o] ? (a.push(s[o]), s[o].setAsParent(), void 0 !== n[o].parent ? this.buildElementParenting(r, n[o].parent, a) : r.setHierarchy(a)) : (this.buildItem(o), this.addPendingElement(r))), o += 1
                    }, BaseRenderer.prototype.addPendingElement = function(r) {
                        this.pendingElements.push(r)
                    }, BaseRenderer.prototype.searchExtraCompositions = function(r) {
                        var i, a = r.length;
                        for (i = 0; i < a; i += 1)
                            if (r[i].xt) {
                                var s = this.createComp(r[i]);
                                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                            }
                    }, BaseRenderer.prototype.getElementById = function(r) {
                        var i, a = this.elements.length;
                        for (i = 0; i < a; i += 1)
                            if (this.elements[i].data.ind === r) return this.elements[i];
                        return null
                    }, BaseRenderer.prototype.getElementByPath = function(r) {
                        var i, a = r.shift();
                        if ("number" == typeof a) i = this.elements[a];
                        else {
                            var s, n = this.elements.length;
                            for (s = 0; s < n; s += 1)
                                if (this.elements[s].data.nm === a) {
                                    i = this.elements[s];
                                    break
                                }
                        }
                        return 0 === r.length ? i : i.getElementByPath(r)
                    }, BaseRenderer.prototype.setupGlobalData = function(r, i) {
                        this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(r.chars), this.globalData.fontManager.addFonts(r.fonts, i), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = r.fr, this.globalData.nm = r.nm, this.globalData.compSize = {
                            w: r.w,
                            h: r.h
                        }
                    }, TransformElement.prototype = {
                        initTransform: function() {
                            this.finalTransform = {
                                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                    o: 0
                                },
                                _matMdf: !1,
                                _opMdf: !1,
                                mat: new Matrix
                            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                        },
                        renderTransform: function() {
                            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                var r, i = this.finalTransform.mat,
                                    a = 0,
                                    s = this.hierarchy.length;
                                if (!this.finalTransform._matMdf)
                                    for (; a < s;) {
                                        if (this.hierarchy[a].finalTransform.mProp._mdf) {
                                            this.finalTransform._matMdf = !0;
                                            break
                                        }
                                        a += 1
                                    }
                                if (this.finalTransform._matMdf)
                                    for (r = this.finalTransform.mProp.v.props, i.cloneFromProps(r), a = 0; a < s; a += 1) r = this.hierarchy[a].finalTransform.mProp.v.props, i.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15])
                            }
                        },
                        globalToLocal: function(r) {
                            var i = [];
                            i.push(this.finalTransform);
                            for (var a, s = !0, n = this.comp; s;) n.finalTransform ? (n.data.hasMask && i.splice(0, 0, n.finalTransform), n = n.comp) : s = !1;
                            var o, h = i.length;
                            for (a = 0; a < h; a += 1) o = i[a].mat.applyToPointArray(0, 0, 0), r = [r[0] - o[0], r[1] - o[1], 0];
                            return r
                        },
                        mHelper: new Matrix
                    }, MaskElement.prototype.getMaskProperty = function(r) {
                        return this.viewData[r].prop
                    }, MaskElement.prototype.renderFrame = function(r) {
                        var i, a = this.element.finalTransform.mat,
                            s = this.masksProperties.length;
                        for (i = 0; i < s; i += 1)
                            if ((this.viewData[i].prop._mdf || r) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || r) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), "n" !== this.masksProperties[i].mode && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || r) && this.viewData[i].invRect.setAttribute("transform", a.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || r))) {
                                var n = this.storedData[i].expan;
                                this.storedData[i].x.v < 0 ? ("erode" !== this.storedData[i].lastOperator && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i].filterId + ")")), n.setAttribute("radius", -this.storedData[i].x.v)) : ("dilate" !== this.storedData[i].lastOperator && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", 2 * this.storedData[i].x.v))
                            }
                    }, MaskElement.prototype.getMaskelement = function() {
                        return this.maskElement
                    }, MaskElement.prototype.createLayerSolidPath = function() {
                        var r = "M0,0 ";
                        return r += " h" + this.globalData.compSize.w, r += " v" + this.globalData.compSize.h, (r += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
                    }, MaskElement.prototype.drawPath = function(r, i, a) {
                        var s, n, o = " M" + i.v[0][0] + "," + i.v[0][1];
                        for (n = i._length, s = 1; s < n; s += 1) o += " C" + i.o[s - 1][0] + "," + i.o[s - 1][1] + " " + i.i[s][0] + "," + i.i[s][1] + " " + i.v[s][0] + "," + i.v[s][1];
                        if (i.c && n > 1 && (o += " C" + i.o[s - 1][0] + "," + i.o[s - 1][1] + " " + i.i[0][0] + "," + i.i[0][1] + " " + i.v[0][0] + "," + i.v[0][1]), a.lastPath !== o) {
                            var h = "";
                            a.elem && (i.c && (h = r.inv ? this.solidPath + o : o), a.elem.setAttribute("d", h)), a.lastPath = o
                        }
                    }, MaskElement.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                    };
                    var filtersFactory = function() {
                            var r = {
                                createFilter: function(r, i) {
                                    var a = createNS("filter");
                                    return a.setAttribute("id", r), !0 !== i && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a
                                },
                                createAlphaToLuminanceFilter: function() {
                                    var r = createNS("feColorMatrix");
                                    return r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), r
                                }
                            };
                            return r
                        }(),
                        featureSupport = function() {
                            var r = {
                                maskType: !0,
                                svgLumaHidden: !0,
                                offscreenCanvas: "undefined" != typeof OffscreenCanvas
                            };
                            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (r.maskType = !1), /firefox/i.test(navigator.userAgent) && (r.svgLumaHidden = !1), r
                        }(),
                        registeredEffects = {},
                        idPrefix = "filter_result_";

                    function SVGEffects(r) {
                        var i, a, s = "SourceGraphic",
                            n = r.data.ef ? r.data.ef.length : 0,
                            o = createElementID(),
                            h = filtersFactory.createFilter(o, !0),
                            l = 0;
                        for (this.filters = [], i = 0; i < n; i += 1) {
                            a = null;
                            var p = r.data.ef[i].ty;
                            registeredEffects[p] && (a = new(0, registeredEffects[p].effect)(h, r.effectsManager.effectElements[i], r, idPrefix + l, s), s = idPrefix + l, registeredEffects[p].countsAsEffect && (l += 1)), a && this.filters.push(a)
                        }
                        l && (r.globalData.defs.appendChild(h), r.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + o + ")")), this.filters.length && r.addRenderableComponent(this)
                    }

                    function registerEffect(r, i, a) {
                        registeredEffects[r] = {
                            effect: i,
                            countsAsEffect: a
                        }
                    }

                    function SVGBaseElement() {}

                    function HierarchyElement() {}

                    function RenderableDOMElement() {}

                    function IImageElement(r, i, a) {
                        this.assetData = i.getAssetData(r.refId), this.initElement(r, i, a), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        }
                    }

                    function ProcessedElement(r, i) {
                        this.elem = r, this.pos = i
                    }

                    function IShapeElement() {}
                    SVGEffects.prototype.renderFrame = function(r) {
                        var i, a = this.filters.length;
                        for (i = 0; i < a; i += 1) this.filters[i].renderFrame(r)
                    }, SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var r = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var i = createNS("g");
                                i.setAttribute("id", this.layerId), i.appendChild(this.layerElement), r = i, this.globalData.defs.appendChild(i)
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var a = createNS("clipPath"),
                                    s = createNS("path");
                                s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var n = createElementID();
                                if (a.setAttribute("id", n), a.appendChild(s), this.globalData.defs.appendChild(a), this.checkMasks()) {
                                    var o = createNS("g");
                                    o.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), o.appendChild(this.layerElement), this.transformedElement = o, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                        },
                        getMatte: function(r) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[r]) {
                                var i, a, s, n, o = this.layerId + "_" + r;
                                if (1 === r || 3 === r) {
                                    var h = createNS("mask");
                                    h.setAttribute("id", o), h.setAttribute("mask-type", 3 === r ? "luminance" : "alpha"), (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(s), this.globalData.defs.appendChild(h), featureSupport.maskType || 1 !== r || (h.setAttribute("mask-type", "luminance"), i = createElementID(), a = filtersFactory.createFilter(i), this.globalData.defs.appendChild(a), a.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(s), h.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
                                } else if (2 === r) {
                                    var l = createNS("mask");
                                    l.setAttribute("id", o), l.setAttribute("mask-type", "alpha");
                                    var p = createNS("g");
                                    l.appendChild(p), i = createElementID(), a = filtersFactory.createFilter(i);
                                    var c = createNS("feComponentTransfer");
                                    c.setAttribute("in", "SourceGraphic"), a.appendChild(c);
                                    var f = createNS("feFuncA");
                                    f.setAttribute("type", "table"), f.setAttribute("tableValues", "1.0 0.0"), c.appendChild(f), this.globalData.defs.appendChild(a);
                                    var u = createNS("rect");
                                    u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), p.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), p.appendChild(u), (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), p.appendChild(s), featureSupport.maskType || (l.setAttribute("mask-type", "luminance"), a.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), p.appendChild(u), n.appendChild(this.layerElement), p.appendChild(n)), this.globalData.defs.appendChild(l)
                                }
                                this.matteMasks[r] = o
                            }
                            return this.matteMasks[r]
                        },
                        setMatte: function(r) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + r + ")")
                        }
                    }, HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(r) {
                            this.hierarchy = r
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    }, extendPrototype([RenderableElement, createProxyFunction({
                        initElement: function(r, i, a) {
                            this.initFrame(), this.initBaseData(r, i, a), this.initTransform(r, i, a), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                        },
                        hide: function() {
                            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                        },
                        show: function() {
                            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        renderInnerContent: function() {},
                        prepareFrame: function(r) {
                            this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency()
                        },
                        destroy: function() {
                            this.innerElem = null, this.destroyBaseElement()
                        }
                    })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                        var r = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this.layerElement.appendChild(this.innerElem)
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, IShapeElement.prototype = {
                        addShapeToModifiers: function(r) {
                            var i, a = this.shapeModifiers.length;
                            for (i = 0; i < a; i += 1) this.shapeModifiers[i].addShape(r)
                        },
                        isShapeInAnimatedModifiers: function(r) {
                            for (var i = this.shapeModifiers.length; 0 < i;)
                                if (this.shapeModifiers[0].isAnimatedWithShape(r)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var r, i = this.shapes.length;
                                for (r = 0; r < i; r += 1) this.shapes[r].sh.reset();
                                for (r = (i = this.shapeModifiers.length) - 1; r >= 0 && !this.shapeModifiers[r].processShapes(this._isFirstFrame); r -= 1);
                            }
                        },
                        searchProcessedElement: function(r) {
                            for (var i = this.processedElements, a = 0, s = i.length; a < s;) {
                                if (i[a].elem === r) return i[a].pos;
                                a += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(r, i) {
                            for (var a = this.processedElements, s = a.length; s;)
                                if (a[s -= 1].elem === r) return void(a[s].pos = i);
                            a.push(new ProcessedElement(r, i))
                        },
                        prepareFrame: function(r) {
                            this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange)
                        }
                    };
                    var lineCapEnum = {
                            1: "butt",
                            2: "round",
                            3: "square"
                        },
                        lineJoinEnum = {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        };

                    function SVGShapeData(r, i, a) {
                        this.caches = [], this.styles = [], this.transformers = r, this.lStr = "", this.sh = a, this.lvl = i, this._isAnimated = !!a.k;
                        for (var s = 0, n = r.length; s < n;) {
                            if (r[s].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break
                            }
                            s += 1
                        }
                    }

                    function SVGStyleData(r, i) {
                        this.data = r, this.type = r.ty, this.d = "", this.lvl = i, this._mdf = !1, this.closed = !0 === r.hd, this.pElem = createNS("path"), this.msElem = null
                    }

                    function DashProperty(r, i, a, s) {
                        var n;
                        this.elem = r, this.frameId = -1, this.dataProps = createSizedArray(i.length), this.renderer = a, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", i.length ? i.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(s);
                        var o, h = i.length || 0;
                        for (n = 0; n < h; n += 1) o = PropertyFactory.getProp(r, i[n].v, 0, 0, this), this.k = o.k || this.k, this.dataProps[n] = {
                            n: i[n].n,
                            p: o
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k
                    }

                    function SVGStrokeStyleData(r, i, a) {
                        this.initDynamicPropertyContainer(r), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(r, i.o, 0, .01, this), this.w = PropertyFactory.getProp(r, i.w, 0, null, this), this.d = new DashProperty(r, i.d || {}, "svg", this), this.c = PropertyFactory.getProp(r, i.c, 1, 255, this), this.style = a, this._isAnimated = !!this._isAnimated
                    }

                    function SVGFillStyleData(r, i, a) {
                        this.initDynamicPropertyContainer(r), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(r, i.o, 0, .01, this), this.c = PropertyFactory.getProp(r, i.c, 1, 255, this), this.style = a
                    }

                    function SVGNoStyleData(r, i, a) {
                        this.initDynamicPropertyContainer(r), this.getValue = this.iterateDynamicProperties, this.style = a
                    }

                    function GradientProperty(r, i, a) {
                        this.data = i, this.c = createTypedArray("uint8c", 4 * i.p);
                        var s = i.k.k[0].s ? i.k.k[0].s.length - 4 * i.p : i.k.k.length - 4 * i.p;
                        this.o = createTypedArray("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(a), this.prop = PropertyFactory.getProp(r, i.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                    }

                    function SVGGradientFillStyleData(r, i, a) {
                        this.initDynamicPropertyContainer(r), this.getValue = this.iterateDynamicProperties, this.initGradientData(r, i, a)
                    }

                    function SVGGradientStrokeStyleData(r, i, a) {
                        this.initDynamicPropertyContainer(r), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(r, i.w, 0, null, this), this.d = new DashProperty(r, i.d || {}, "svg", this), this.initGradientData(r, i, a), this._isAnimated = !!this._isAnimated
                    }

                    function ShapeGroupData() {
                        this.it = [], this.prevViewData = [], this.gr = createNS("g")
                    }

                    function SVGTransformData(r, i, a) {
                        this.transform = {
                            mProps: r,
                            op: i,
                            container: a
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                    }
                    SVGShapeData.prototype.setAsAnimated = function() {
                        this._isAnimated = !0
                    }, SVGStyleData.prototype.reset = function() {
                        this.d = "", this._mdf = !1
                    }, DashProperty.prototype.getValue = function(r) {
                        if ((this.elem.globalData.frameId !== this.frameId || r) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || r, this._mdf)) {
                            var i = 0,
                                a = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), i = 0; i < a; i += 1) "o" !== this.dataProps[i].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[i].p.v : this.dashArray[i] = this.dataProps[i].p.v : this.dashoffset[0] = this.dataProps[i].p.v
                        }
                    }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(r, i) {
                        for (var a = 0, s = this.o.length / 2; a < s;) {
                            if (Math.abs(r[4 * a] - r[4 * i + 2 * a]) > .01) return !1;
                            a += 1
                        }
                        return !0
                    }, GradientProperty.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s)
                            for (var r = 0, i = this.data.k.k.length; r < i;) {
                                if (!this.comparePoints(this.data.k.k[r].s, this.data.p)) return !1;
                                r += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0
                    }, GradientProperty.prototype.getValue = function(r) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || r) {
                            var i, a, s, n = 4 * this.data.p;
                            for (i = 0; i < n; i += 1) a = i % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[i] * a), this.c[i] !== s && (this.c[i] = s, this._cmdf = !r);
                            if (this.o.length)
                                for (n = this.prop.v.length, i = 4 * this.data.p; i < n; i += 1) a = i % 2 == 0 ? 100 : 1, s = i % 2 == 0 ? Math.round(100 * this.prop.v[i]) : this.prop.v[i], this.o[i - 4 * this.data.p] !== s && (this.o[i - 4 * this.data.p] = s, this._omdf = !r);
                            this._mdf = !r
                        }
                    }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(r, i, a) {
                        this.o = PropertyFactory.getProp(r, i.o, 0, .01, this), this.s = PropertyFactory.getProp(r, i.s, 1, null, this), this.e = PropertyFactory.getProp(r, i.e, 1, null, this), this.h = PropertyFactory.getProp(r, i.h || {
                            k: 0
                        }, 0, .01, this), this.a = PropertyFactory.getProp(r, i.a || {
                            k: 0
                        }, 0, degToRads, this), this.g = new GradientProperty(r, i.g, this), this.style = a, this.stops = [], this.setGradientData(a.pElem, i), this.setGradientOpacity(i, a), this._isAnimated = !!this._isAnimated
                    }, SVGGradientFillStyleData.prototype.setGradientData = function(r, i) {
                        var a = createElementID(),
                            s = createNS(1 === i.t ? "linearGradient" : "radialGradient");
                        s.setAttribute("id", a), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
                        var n, o, h, l = [];
                        for (h = 4 * i.g.p, o = 0; o < h; o += 4) n = createNS("stop"), s.appendChild(n), l.push(n);
                        r.setAttribute("gf" === i.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + a + ")"), this.gf = s, this.cst = l
                    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(r, i) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var a, s, n, o = createNS("mask"),
                                h = createNS("path");
                            o.appendChild(h);
                            var l = createElementID(),
                                p = createElementID();
                            o.setAttribute("id", p);
                            var c = createNS(1 === r.t ? "linearGradient" : "radialGradient");
                            c.setAttribute("id", l), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), n = r.g.k.k[0].s ? r.g.k.k[0].s.length : r.g.k.k.length;
                            var f = this.stops;
                            for (s = 4 * r.g.p; s < n; s += 2)(a = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(a), f.push(a);
                            h.setAttribute("gf" === r.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), "gs" === r.ty && (h.setAttribute("stroke-linecap", lineCapEnum[r.lc || 2]), h.setAttribute("stroke-linejoin", lineJoinEnum[r.lj || 2]), 1 === r.lj && h.setAttribute("stroke-miterlimit", r.ml)), this.of = c, this.ms = o, this.ost = f, this.maskId = p, i.msElem = h
                        }
                    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                    var buildShapeString = function(r, i, a, s) {
                            if (0 === i) return "";
                            var n, o = r.o,
                                h = r.i,
                                l = r.v,
                                p = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
                            for (n = 1; n < i; n += 1) p += " C" + s.applyToPointStringified(o[n - 1][0], o[n - 1][1]) + " " + s.applyToPointStringified(h[n][0], h[n][1]) + " " + s.applyToPointStringified(l[n][0], l[n][1]);
                            return a && i && (p += " C" + s.applyToPointStringified(o[n - 1][0], o[n - 1][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), p += "z"), p
                        },
                        SVGElementsRenderer = function() {
                            var r = new Matrix,
                                i = new Matrix;

                            function a(r, i, a) {
                                (a || i.transform.op._mdf) && i.transform.container.setAttribute("opacity", i.transform.op.v), (a || i.transform.mProps._mdf) && i.transform.container.setAttribute("transform", i.transform.mProps.v.to2dCSS())
                            }

                            function s() {}

                            function n(a, s, n) {
                                var o, h, l, p, c, f, u, m, d, y, g, v = s.styles.length,
                                    b = s.lvl;
                                for (f = 0; f < v; f += 1) {
                                    if (p = s.sh._mdf || n, s.styles[f].lvl < b) {
                                        for (m = i.reset(), y = b - s.styles[f].lvl, g = s.transformers.length - 1; !p && y > 0;) p = s.transformers[g].mProps._mdf || p, y -= 1, g -= 1;
                                        if (p)
                                            for (y = b - s.styles[f].lvl, g = s.transformers.length - 1; y > 0;) d = s.transformers[g].mProps.v.props, m.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), y -= 1, g -= 1
                                    } else m = r;
                                    if (h = (u = s.sh.paths)._length, p) {
                                        for (l = "", o = 0; o < h; o += 1)(c = u.shapes[o]) && c._length && (l += buildShapeString(c, c._length, c.c, m));
                                        s.caches[f] = l
                                    } else l = s.caches[f];
                                    s.styles[f].d += !0 === a.hd ? "" : l, s.styles[f]._mdf = p || s.styles[f]._mdf
                                }
                            }

                            function o(r, i, a) {
                                var s = i.style;
                                (i.c._mdf || a) && s.pElem.setAttribute("fill", "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")"), (i.o._mdf || a) && s.pElem.setAttribute("fill-opacity", i.o.v)
                            }

                            function h(r, i, a) {
                                l(r, i, a), p(0, i, a)
                            }

                            function l(r, i, a) {
                                var s, n, o, h, l, p = i.gf,
                                    c = i.g._hasOpacity,
                                    f = i.s.v,
                                    u = i.e.v;
                                if (i.o._mdf || a) {
                                    var m = "gf" === r.ty ? "fill-opacity" : "stroke-opacity";
                                    i.style.pElem.setAttribute(m, i.o.v)
                                }
                                if (i.s._mdf || a) {
                                    var d = 1 === r.t ? "x1" : "cx",
                                        y = "x1" === d ? "y1" : "cy";
                                    p.setAttribute(d, f[0]), p.setAttribute(y, f[1]), c && !i.g._collapsable && (i.of.setAttribute(d, f[0]), i.of.setAttribute(y, f[1]))
                                }
                                if (i.g._cmdf || a) {
                                    s = i.cst;
                                    var g = i.g.c;
                                    for (o = s.length, n = 0; n < o; n += 1)(h = s[n]).setAttribute("offset", g[4 * n] + "%"), h.setAttribute("stop-color", "rgb(" + g[4 * n + 1] + "," + g[4 * n + 2] + "," + g[4 * n + 3] + ")")
                                }
                                if (c && (i.g._omdf || a)) {
                                    var v = i.g.o;
                                    for (o = (s = i.g._collapsable ? i.cst : i.ost).length, n = 0; n < o; n += 1) h = s[n], i.g._collapsable || h.setAttribute("offset", v[2 * n] + "%"), h.setAttribute("stop-opacity", v[2 * n + 1])
                                }
                                if (1 === r.t)(i.e._mdf || a) && (p.setAttribute("x2", u[0]), p.setAttribute("y2", u[1]), c && !i.g._collapsable && (i.of.setAttribute("x2", u[0]), i.of.setAttribute("y2", u[1])));
                                else if ((i.s._mdf || i.e._mdf || a) && (l = Math.sqrt(Math.pow(f[0] - u[0], 2) + Math.pow(f[1] - u[1], 2)), p.setAttribute("r", l), c && !i.g._collapsable && i.of.setAttribute("r", l)), i.e._mdf || i.h._mdf || i.a._mdf || a) {
                                    l || (l = Math.sqrt(Math.pow(f[0] - u[0], 2) + Math.pow(f[1] - u[1], 2)));
                                    var b = Math.atan2(u[1] - f[1], u[0] - f[0]),
                                        x = i.h.v;
                                    x >= 1 ? x = .99 : x <= -1 && (x = -.99);
                                    var _ = l * x,
                                        E = Math.cos(b + i.a.v) * _ + f[0],
                                        S = Math.sin(b + i.a.v) * _ + f[1];
                                    p.setAttribute("fx", E), p.setAttribute("fy", S), c && !i.g._collapsable && (i.of.setAttribute("fx", E), i.of.setAttribute("fy", S))
                                }
                            }

                            function p(r, i, a) {
                                var s = i.style,
                                    n = i.d;
                                n && (n._mdf || a) && n.dashStr && (s.pElem.setAttribute("stroke-dasharray", n.dashStr), s.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), i.c && (i.c._mdf || a) && s.pElem.setAttribute("stroke", "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")"), (i.o._mdf || a) && s.pElem.setAttribute("stroke-opacity", i.o.v), (i.w._mdf || a) && (s.pElem.setAttribute("stroke-width", i.w.v), s.msElem && s.msElem.setAttribute("stroke-width", i.w.v))
                            }
                            return {
                                createRenderFunction: function(r) {
                                    switch (r.ty) {
                                        case "fl":
                                            return o;
                                        case "gf":
                                            return l;
                                        case "gs":
                                            return h;
                                        case "st":
                                            return p;
                                        case "sh":
                                        case "el":
                                        case "rc":
                                        case "sr":
                                            return n;
                                        case "tr":
                                            return a;
                                        case "no":
                                            return s;
                                        default:
                                            return null
                                    }
                                }
                            }
                        }();

                    function SVGShapeElement(r, i, a) {
                        this.shapes = [], this.shapesData = r.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(r, i, a), this.prevViewData = []
                    }

                    function LetterProps(r, i, a, s, n, o) {
                        this.o = r, this.sw = i, this.sc = a, this.fc = s, this.m = n, this.p = o, this._mdf = {
                            o: !0,
                            sw: !!i,
                            sc: !!a,
                            fc: !!s,
                            m: !0,
                            p: !0
                        }
                    }

                    function TextProperty(r, i) {
                        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = i, this.elem = r, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: !1,
                            strokeColorAnim: !1,
                            strokeWidthAnim: !1,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: !1
                        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                    }
                    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                        var r, i, a, s, n = this.shapes.length,
                            o = this.stylesList.length,
                            h = [],
                            l = !1;
                        for (a = 0; a < o; a += 1) {
                            for (s = this.stylesList[a], l = !1, h.length = 0, r = 0; r < n; r += 1) - 1 !== (i = this.shapes[r]).styles.indexOf(s) && (h.push(i), l = i._isAnimated || l);
                            h.length > 1 && l && this.setShapesAsAnimated(h)
                        }
                    }, SVGShapeElement.prototype.setShapesAsAnimated = function(r) {
                        var i, a = r.length;
                        for (i = 0; i < a; i += 1) r[i].setAsAnimated()
                    }, SVGShapeElement.prototype.createStyleElement = function(r, i) {
                        var a, s = new SVGStyleData(r, i),
                            n = s.pElem;
                        return "st" === r.ty ? a = new SVGStrokeStyleData(this, r, s) : "fl" === r.ty ? a = new SVGFillStyleData(this, r, s) : "gf" === r.ty || "gs" === r.ty ? (a = new("gf" === r.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, r, s), this.globalData.defs.appendChild(a.gf), a.maskId && (this.globalData.defs.appendChild(a.ms), this.globalData.defs.appendChild(a.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + a.maskId + ")"))) : "no" === r.ty && (a = new SVGNoStyleData(this, r, s)), "st" !== r.ty && "gs" !== r.ty || (n.setAttribute("stroke-linecap", lineCapEnum[r.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[r.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === r.lj && n.setAttribute("stroke-miterlimit", r.ml)), 2 === r.r && n.setAttribute("fill-rule", "evenodd"), r.ln && n.setAttribute("id", r.ln), r.cl && n.setAttribute("class", r.cl), r.bm && (n.style["mix-blend-mode"] = getBlendMode(r.bm)), this.stylesList.push(s), this.addToAnimatedContents(r, a), a
                    }, SVGShapeElement.prototype.createGroupElement = function(r) {
                        var i = new ShapeGroupData;
                        return r.ln && i.gr.setAttribute("id", r.ln), r.cl && i.gr.setAttribute("class", r.cl), r.bm && (i.gr.style["mix-blend-mode"] = getBlendMode(r.bm)), i
                    }, SVGShapeElement.prototype.createTransformElement = function(r, i) {
                        var a = TransformPropertyFactory.getTransformProperty(this, r, this),
                            s = new SVGTransformData(a, a.o, i);
                        return this.addToAnimatedContents(r, s), s
                    }, SVGShapeElement.prototype.createShapeElement = function(r, i, a) {
                        var s = 4;
                        "rc" === r.ty ? s = 5 : "el" === r.ty ? s = 6 : "sr" === r.ty && (s = 7);
                        var n = new SVGShapeData(i, a, ShapePropertyFactory.getShapeProp(this, r, s, this));
                        return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(r, n), n
                    }, SVGShapeElement.prototype.addToAnimatedContents = function(r, i) {
                        for (var a = 0, s = this.animatedContents.length; a < s;) {
                            if (this.animatedContents[a].element === i) return;
                            a += 1
                        }
                        this.animatedContents.push({
                            fn: SVGElementsRenderer.createRenderFunction(r),
                            element: i,
                            data: r
                        })
                    }, SVGShapeElement.prototype.setElementStyles = function(r) {
                        var i, a = r.styles,
                            s = this.stylesList.length;
                        for (i = 0; i < s; i += 1) this.stylesList[i].closed || a.push(this.stylesList[i])
                    }, SVGShapeElement.prototype.reloadShapes = function() {
                        var r;
                        this._isFirstFrame = !0;
                        var i = this.itemsData.length;
                        for (r = 0; r < i; r += 1) this.prevViewData[r] = this.itemsData[r];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), i = this.dynamicProperties.length, r = 0; r < i; r += 1) this.dynamicProperties[r].getValue();
                        this.renderModifiers()
                    }, SVGShapeElement.prototype.searchShapes = function(r, i, a, s, n, o, h) {
                        var l, p, c, f, u, m, d = [].concat(o),
                            y = r.length - 1,
                            g = [],
                            v = [];
                        for (l = y; l >= 0; l -= 1) {
                            if ((m = this.searchProcessedElement(r[l])) ? i[l] = a[m - 1] : r[l]._render = h, "fl" === r[l].ty || "st" === r[l].ty || "gf" === r[l].ty || "gs" === r[l].ty || "no" === r[l].ty) m ? i[l].style.closed = !1 : i[l] = this.createStyleElement(r[l], n), r[l]._render && i[l].style.pElem.parentNode !== s && s.appendChild(i[l].style.pElem), g.push(i[l].style);
                            else if ("gr" === r[l].ty) {
                                if (m)
                                    for (c = i[l].it.length, p = 0; p < c; p += 1) i[l].prevViewData[p] = i[l].it[p];
                                else i[l] = this.createGroupElement(r[l]);
                                this.searchShapes(r[l].it, i[l].it, i[l].prevViewData, i[l].gr, n + 1, d, h), r[l]._render && i[l].gr.parentNode !== s && s.appendChild(i[l].gr)
                            } else "tr" === r[l].ty ? (m || (i[l] = this.createTransformElement(r[l], s)), f = i[l].transform, d.push(f)) : "sh" === r[l].ty || "rc" === r[l].ty || "el" === r[l].ty || "sr" === r[l].ty ? (m || (i[l] = this.createShapeElement(r[l], d, n)), this.setElementStyles(i[l])) : "tm" === r[l].ty || "rd" === r[l].ty || "ms" === r[l].ty || "pb" === r[l].ty || "zz" === r[l].ty || "op" === r[l].ty ? (m ? (u = i[l]).closed = !1 : ((u = ShapeModifiers.getModifier(r[l].ty)).init(this, r[l]), i[l] = u, this.shapeModifiers.push(u)), v.push(u)) : "rp" === r[l].ty && (m ? (u = i[l]).closed = !0 : (u = ShapeModifiers.getModifier(r[l].ty), i[l] = u, u.init(this, r, l, i), this.shapeModifiers.push(u), h = !1), v.push(u));
                            this.addProcessedElement(r[l], l + 1)
                        }
                        for (y = g.length, l = 0; l < y; l += 1) g[l].closed = !0;
                        for (y = v.length, l = 0; l < y; l += 1) v[l].closed = !0
                    }, SVGShapeElement.prototype.renderInnerContent = function() {
                        var r;
                        this.renderModifiers();
                        var i = this.stylesList.length;
                        for (r = 0; r < i; r += 1) this.stylesList[r].reset();
                        for (this.renderShape(), r = 0; r < i; r += 1)(this.stylesList[r]._mdf || this._isFirstFrame) && (this.stylesList[r].msElem && (this.stylesList[r].msElem.setAttribute("d", this.stylesList[r].d), this.stylesList[r].d = "M0 0" + this.stylesList[r].d), this.stylesList[r].pElem.setAttribute("d", this.stylesList[r].d || "M0 0"))
                    }, SVGShapeElement.prototype.renderShape = function() {
                        var r, i, a = this.animatedContents.length;
                        for (r = 0; r < a; r += 1) i = this.animatedContents[r], (this._isFirstFrame || i.element._isAnimated) && !0 !== i.data && i.fn(i.data, i.element, this._isFirstFrame)
                    }, SVGShapeElement.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                    }, LetterProps.prototype.update = function(r, i, a, s, n, o) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var h = !1;
                        return this.o !== r && (this.o = r, this._mdf.o = !0, h = !0), this.sw !== i && (this.sw = i, this._mdf.sw = !0, h = !0), this.sc !== a && (this.sc = a, this._mdf.sc = !0, h = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, h = !0), this.m !== n && (this.m = n, this._mdf.m = !0, h = !0), !o.length || this.p[0] === o[0] && this.p[1] === o[1] && this.p[4] === o[4] && this.p[5] === o[5] && this.p[12] === o[12] && this.p[13] === o[13] || (this.p = o, this._mdf.p = !0, h = !0), h
                    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(r, i) {
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
                        return r
                    }, TextProperty.prototype.setCurrentData = function(r) {
                        r.__complete || this.completeTextData(r), this.currentData = r, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                    }, TextProperty.prototype.searchProperty = function() {
                        return this.searchKeyframes()
                    }, TextProperty.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                    }, TextProperty.prototype.addEffect = function(r) {
                        this.effectsSequence.push(r), this.elem.addDynamicProperty(this)
                    }, TextProperty.prototype.getValue = function(r) {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || r) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var i = this.currentData,
                                a = this.keysIndex;
                            if (this.lock) this.setCurrentData(this.currentData);
                            else {
                                var s;
                                this.lock = !0, this._mdf = !1;
                                var n = this.effectsSequence.length,
                                    o = r || this.data.d.k[this.keysIndex].s;
                                for (s = 0; s < n; s += 1) o = a !== this.keysIndex ? this.effectsSequence[s](o, o.t) : this.effectsSequence[s](this.currentData, o.t);
                                i !== o && this.setCurrentData(o), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                        }
                    }, TextProperty.prototype.getKeyframeValue = function() {
                        for (var r = this.data.d.k, i = this.elem.comp.renderedFrame, a = 0, s = r.length; a <= s - 1 && !(a === s - 1 || r[a + 1].t > i);) a += 1;
                        return this.keysIndex !== a && (this.keysIndex = a), this.data.d.k[this.keysIndex].s
                    }, TextProperty.prototype.buildFinalText = function(r) {
                        for (var i, a, s = [], n = 0, o = r.length, h = !1; n < o;) i = r.charCodeAt(n), FontManager.isCombinedCharacter(i) ? s[s.length - 1] += r.charAt(n) : i >= 55296 && i <= 56319 ? (a = r.charCodeAt(n + 1)) >= 56320 && a <= 57343 ? (h || FontManager.isModifier(i, a) ? (s[s.length - 1] += r.substr(n, 2), h = !1) : s.push(r.substr(n, 2)), n += 1) : s.push(r.charAt(n)) : i > 56319 ? (a = r.charCodeAt(n + 1), FontManager.isZeroWidthJoiner(i, a) ? (h = !0, s[s.length - 1] += r.substr(n, 2), n += 1) : s.push(r.charAt(n))) : FontManager.isZeroWidthJoiner(i) ? (s[s.length - 1] += r.charAt(n), h = !0) : s.push(r.charAt(n)), n += 1;
                        return s
                    }, TextProperty.prototype.completeTextData = function(r) {
                        r.__complete = !0;
                        var i, a, s, n, o, h, l, p = this.elem.globalData.fontManager,
                            c = this.data,
                            f = [],
                            u = 0,
                            m = c.m.g,
                            d = 0,
                            y = 0,
                            g = 0,
                            v = [],
                            b = 0,
                            x = 0,
                            _ = p.getFontByName(r.f),
                            E = 0,
                            S = getFontProperties(_);
                        r.fWeight = S.weight, r.fStyle = S.style, r.finalSize = r.s, r.finalText = this.buildFinalText(r.t), a = r.finalText.length, r.finalLineHeight = r.lh;
                        var P, C = r.tr / 1e3 * r.finalSize;
                        if (r.sz)
                            for (var w, k, A = !0, F = r.sz[0], T = r.sz[1]; A;) {
                                w = 0, b = 0, a = (k = this.buildFinalText(r.t)).length, C = r.tr / 1e3 * r.finalSize;
                                var M = -1;
                                for (i = 0; i < a; i += 1) P = k[i].charCodeAt(0), s = !1, " " === k[i] ? M = i : 13 !== P && 3 !== P || (b = 0, s = !0, w += r.finalLineHeight || 1.2 * r.finalSize), p.chars ? (l = p.getCharData(k[i], _.fStyle, _.fFamily), E = s ? 0 : l.w * r.finalSize / 100) : E = p.measureText(k[i], r.f, r.finalSize), b + E > F && " " !== k[i] ? (-1 === M ? a += 1 : i = M, w += r.finalLineHeight || 1.2 * r.finalSize, k.splice(i, M === i ? 1 : 0, "\r"), M = -1, b = 0) : (b += E, b += C);
                                w += _.ascent * r.finalSize / 100, this.canResize && r.finalSize > this.minimumFontSize && T < w ? (r.finalSize -= 1, r.finalLineHeight = r.finalSize * r.lh / r.s) : (r.finalText = k, a = r.finalText.length, A = !1)
                            }
                        b = -C, E = 0;
                        var D, I = 0;
                        for (i = 0; i < a; i += 1)
                            if (s = !1, 13 === (P = (D = r.finalText[i]).charCodeAt(0)) || 3 === P ? (I = 0, v.push(b), x = b > x ? b : x, b = -2 * C, n = "", s = !0, g += 1) : n = D, p.chars ? (l = p.getCharData(D, _.fStyle, p.getFontByName(r.f).fFamily), E = s ? 0 : l.w * r.finalSize / 100) : E = p.measureText(n, r.f, r.finalSize), " " === D ? I += E + C : (b += E + C + I, I = 0), f.push({
                                    l: E,
                                    an: E,
                                    add: d,
                                    n: s,
                                    anIndexes: [],
                                    val: n,
                                    line: g,
                                    animatorJustifyOffset: 0
                                }), 2 == m) {
                                if (d += E, "" === n || " " === n || i === a - 1) {
                                    for ("" !== n && " " !== n || (d -= E); y <= i;) f[y].an = d, f[y].ind = u, f[y].extra = E, y += 1;
                                    u += 1, d = 0
                                }
                            } else if (3 == m) {
                            if (d += E, "" === n || i === a - 1) {
                                for ("" === n && (d -= E); y <= i;) f[y].an = d, f[y].ind = u, f[y].extra = E, y += 1;
                                d = 0, u += 1
                            }
                        } else f[u].ind = u, f[u].extra = 0, u += 1;
                        if (r.l = f, x = b > x ? b : x, v.push(b), r.sz) r.boxWidth = r.sz[0], r.justifyOffset = 0;
                        else switch (r.boxWidth = x, r.j) {
                            case 1:
                                r.justifyOffset = -r.boxWidth;
                                break;
                            case 2:
                                r.justifyOffset = -r.boxWidth / 2;
                                break;
                            default:
                                r.justifyOffset = 0
                        }
                        r.lineWidths = v;
                        var R, B, V, L, O = c.a;
                        h = O.length;
                        var z = [];
                        for (o = 0; o < h; o += 1) {
                            for ((R = O[o]).a.sc && (r.strokeColorAnim = !0), R.a.sw && (r.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (r.fillColorAnim = !0), L = 0, V = R.s.b, i = 0; i < a; i += 1)(B = f[i]).anIndexes[o] = L, (1 == V && "" !== B.val || 2 == V && "" !== B.val && " " !== B.val || 3 == V && (B.n || " " == B.val || i == a - 1) || 4 == V && (B.n || i == a - 1)) && (1 === R.s.rn && z.push(L), L += 1);
                            c.a[o].s.totalChars = L;
                            var N, G = -1;
                            if (1 === R.s.rn)
                                for (i = 0; i < a; i += 1) G != (B = f[i]).anIndexes[o] && (G = B.anIndexes[o], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), B.anIndexes[o] = N
                        }
                        r.yOffset = r.finalLineHeight || 1.2 * r.finalSize, r.ls = r.ls || 0, r.ascent = _.ascent * r.finalSize / 100
                    }, TextProperty.prototype.updateDocumentData = function(r, i) {
                        i = void 0 === i ? this.keysIndex : i;
                        var a = this.copyData({}, this.data.d.k[i].s);
                        a = this.copyData(a, r), this.data.d.k[i].s = a, this.recalculate(i), this.elem.addDynamicProperty(this)
                    }, TextProperty.prototype.recalculate = function(r) {
                        var i = this.data.d.k[r].s;
                        i.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(i)
                    }, TextProperty.prototype.canResizeFont = function(r) {
                        this.canResize = r, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    }, TextProperty.prototype.setMinimumFontSize = function(r) {
                        this.minimumFontSize = Math.floor(r) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    };
                    var TextSelectorProp = function() {
                        var r = Math.max,
                            i = Math.min,
                            a = Math.floor;

                        function s(r, i) {
                            this._currentTextLength = -1, this.k = !1, this.data = i, this.elem = r, this.comp = r.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(r), this.s = PropertyFactory.getProp(r, i.s || {
                                k: 0
                            }, 0, 0, this), this.e = "e" in i ? PropertyFactory.getProp(r, i.e, 0, 0, this) : {
                                v: 100
                            }, this.o = PropertyFactory.getProp(r, i.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(r, i.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(r, i.ne || {
                                k: 0
                            }, 0, 0, this), this.sm = PropertyFactory.getProp(r, i.sm || {
                                k: 100
                            }, 0, 0, this), this.a = PropertyFactory.getProp(r, i.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return s.prototype = {
                            getMult: function(s) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var n = 0,
                                    o = 0,
                                    h = 1,
                                    l = 1;
                                this.ne.v > 0 ? n = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? h = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
                                var p = BezierFactory.getBezierEasing(n, o, h, l).get,
                                    c = 0,
                                    f = this.finalS,
                                    u = this.finalE,
                                    m = this.data.sh;
                                if (2 === m) c = p(c = u === f ? s >= u ? 1 : 0 : r(0, i(.5 / (u - f) + (s - f) / (u - f), 1)));
                                else if (3 === m) c = p(c = u === f ? s >= u ? 0 : 1 : 1 - r(0, i(.5 / (u - f) + (s - f) / (u - f), 1)));
                                else if (4 === m) u === f ? c = 0 : (c = r(0, i(.5 / (u - f) + (s - f) / (u - f), 1))) < .5 ? c *= 2 : c = 1 - 2 * (c - .5), c = p(c);
                                else if (5 === m) {
                                    if (u === f) c = 0;
                                    else {
                                        var d = u - f,
                                            y = -d / 2 + (s = i(r(0, s + .5 - f), u - f)),
                                            g = d / 2;
                                        c = Math.sqrt(1 - y * y / (g * g))
                                    }
                                    c = p(c)
                                } else 6 === m ? (u === f ? c = 0 : (s = i(r(0, s + .5 - f), u - f), c = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (u - f))) / 2), c = p(c)) : (s >= a(f) && (c = r(0, i(s - f < 0 ? i(u, 1) - (f - s) : u - s, 1))), c = p(c));
                                if (100 !== this.sm.v) {
                                    var v = .01 * this.sm.v;
                                    0 === v && (v = 1e-8);
                                    var b = .5 - .5 * v;
                                    c < b ? c = 0 : (c = (c - b) / v) > 1 && (c = 1)
                                }
                                return c * this.a.v
                            },
                            getValue: function(r) {
                                this.iterateDynamicProperties(), this._mdf = r || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, r && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var i = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                    a = this.o.v / i,
                                    s = this.s.v / i + a,
                                    n = this.e.v / i + a;
                                if (s > n) {
                                    var o = s;
                                    s = n, n = o
                                }
                                this.finalS = s, this.finalE = n
                            }
                        }, extendPrototype([DynamicPropertyContainer], s), {
                            getTextSelectorProp: function(r, i, a) {
                                return new s(r, i, a)
                            }
                        }
                    }();

                    function TextAnimatorDataProperty(r, i, a) {
                        var s = {
                                propType: !1
                            },
                            n = PropertyFactory.getProp,
                            o = i.a;
                        this.a = {
                            r: o.r ? n(r, o.r, 0, degToRads, a) : s,
                            rx: o.rx ? n(r, o.rx, 0, degToRads, a) : s,
                            ry: o.ry ? n(r, o.ry, 0, degToRads, a) : s,
                            sk: o.sk ? n(r, o.sk, 0, degToRads, a) : s,
                            sa: o.sa ? n(r, o.sa, 0, degToRads, a) : s,
                            s: o.s ? n(r, o.s, 1, .01, a) : s,
                            a: o.a ? n(r, o.a, 1, 0, a) : s,
                            o: o.o ? n(r, o.o, 0, .01, a) : s,
                            p: o.p ? n(r, o.p, 1, 0, a) : s,
                            sw: o.sw ? n(r, o.sw, 0, 0, a) : s,
                            sc: o.sc ? n(r, o.sc, 1, 0, a) : s,
                            fc: o.fc ? n(r, o.fc, 1, 0, a) : s,
                            fh: o.fh ? n(r, o.fh, 0, 0, a) : s,
                            fs: o.fs ? n(r, o.fs, 0, .01, a) : s,
                            fb: o.fb ? n(r, o.fb, 0, .01, a) : s,
                            t: o.t ? n(r, o.t, 0, 0, a) : s
                        }, this.s = TextSelectorProp.getTextSelectorProp(r, i.s, a), this.s.t = i.s.t
                    }

                    function TextAnimatorProperty(r, i, a) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = r, this._renderType = i, this._elem = a, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(a)
                    }

                    function ITextElement() {}
                    TextAnimatorProperty.prototype.searchProperties = function() {
                        var r, i, a = this._textData.a.length,
                            s = PropertyFactory.getProp;
                        for (r = 0; r < a; r += 1) i = this._textData.a[r], this._animatorsData[r] = new TextAnimatorDataProperty(this._elem, i, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: s(this._elem, this._textData.p.a, 0, 0, this),
                            f: s(this._elem, this._textData.p.f, 0, 0, this),
                            l: s(this._elem, this._textData.p.l, 0, 0, this),
                            r: s(this._elem, this._textData.p.r, 0, 0, this),
                            p: s(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
                    }, TextAnimatorProperty.prototype.getMeasures = function(r, i) {
                        if (this.lettersChangedFlag = i, this._mdf || this._isFirstFrame || i || this._hasMaskedPath && this._pathData.m._mdf) {
                            this._isFirstFrame = !1;
                            var a, s, n, o, h, l, p, c, f, u, m, d, y, g, v, b, x, _, E, S = this._moreOptions.alignment.v,
                                P = this._animatorsData,
                                C = this._textData,
                                w = this.mHelper,
                                k = this._renderType,
                                A = this.renderedLetters.length,
                                F = r.l;
                            if (this._hasMaskedPath) {
                                if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var T, M = E.v;
                                    for (this._pathData.r.v && (M = M.reverse()), h = {
                                            tLength: 0,
                                            segments: []
                                        }, o = M._length - 1, b = 0, n = 0; n < o; n += 1) T = bez.buildBezierData(M.v[n], M.v[n + 1], [M.o[n][0] - M.v[n][0], M.o[n][1] - M.v[n][1]], [M.i[n + 1][0] - M.v[n + 1][0], M.i[n + 1][1] - M.v[n + 1][1]]), h.tLength += T.segmentLength, h.segments.push(T), b += T.segmentLength;
                                    n = o, E.v.c && (T = bez.buildBezierData(M.v[n], M.v[0], [M.o[n][0] - M.v[n][0], M.o[n][1] - M.v[n][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), h.tLength += T.segmentLength, h.segments.push(T), b += T.segmentLength), this._pathData.pi = h
                                }
                                if (h = this._pathData.pi, l = this._pathData.f.v, m = 0, u = 1, c = 0, f = !0, g = h.segments, l < 0 && E.v.c)
                                    for (h.tLength < Math.abs(l) && (l = -Math.abs(l) % h.tLength), u = (y = g[m = g.length - 1].points).length - 1; l < 0;) l += y[u].partialLength, (u -= 1) < 0 && (u = (y = g[m -= 1].points).length - 1);
                                d = (y = g[m].points)[u - 1], v = (p = y[u]).partialLength
                            }
                            o = F.length, a = 0, s = 0;
                            var D, I, R, B, V, L = 1.2 * r.finalSize * .714,
                                O = !0;
                            R = P.length;
                            var z, N, G, j, H, $, q, W, Y, X, Z, U, K = -1,
                                J = l,
                                Q = m,
                                tt = u,
                                et = -1,
                                rt = "",
                                it = this.defaultPropsArray;
                            if (2 === r.j || 1 === r.j) {
                                var at = 0,
                                    st = 0,
                                    nt = 2 === r.j ? -.5 : -1,
                                    ot = 0,
                                    ht = !0;
                                for (n = 0; n < o; n += 1)
                                    if (F[n].n) {
                                        for (at && (at += st); ot < n;) F[ot].animatorJustifyOffset = at, ot += 1;
                                        at = 0, ht = !0
                                    } else {
                                        for (I = 0; I < R; I += 1)(D = P[I].a).t.propType && (ht && 2 === r.j && (st += D.t.v * nt), (V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars)).length ? at += D.t.v * V[0] * nt : at += D.t.v * V * nt);
                                        ht = !1
                                    }
                                for (at && (at += st); ot < n;) F[ot].animatorJustifyOffset = at, ot += 1
                            }
                            for (n = 0; n < o; n += 1) {
                                if (w.reset(), j = 1, F[n].n) a = 0, s += r.yOffset, s += O ? 1 : 0, l = J, O = !1, this._hasMaskedPath && (u = tt, d = (y = g[m = Q].points)[u - 1], v = (p = y[u]).partialLength, c = 0), rt = "", Z = "", Y = "", U = "", it = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (et !== F[n].line) {
                                            switch (r.j) {
                                                case 1:
                                                    l += b - r.lineWidths[F[n].line];
                                                    break;
                                                case 2:
                                                    l += (b - r.lineWidths[F[n].line]) / 2
                                            }
                                            et = F[n].line
                                        }
                                        K !== F[n].ind && (F[K] && (l += F[K].extra), l += F[n].an / 2, K = F[n].ind), l += S[0] * F[n].an * .005;
                                        var lt = 0;
                                        for (I = 0; I < R; I += 1)(D = P[I].a).p.propType && ((V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars)).length ? lt += D.p.v[0] * V[0] : lt += D.p.v[0] * V), D.a.propType && ((V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars)).length ? lt += D.a.v[0] * V[0] : lt += D.a.v[0] * V);
                                        for (f = !0, this._pathData.a.v && (l = .5 * F[0].an + (b - this._pathData.f.v - .5 * F[0].an - .5 * F[F.length - 1].an) * K / (o - 1), l += this._pathData.f.v); f;) c + v >= l + lt || !y ? (x = (l + lt - c) / p.partialLength, N = d.point[0] + (p.point[0] - d.point[0]) * x, G = d.point[1] + (p.point[1] - d.point[1]) * x, w.translate(-S[0] * F[n].an * .005, -S[1] * L * .01), f = !1) : y && (c += p.partialLength, (u += 1) >= y.length && (u = 0, g[m += 1] ? y = g[m].points : E.v.c ? (u = 0, y = g[m = 0].points) : (c -= p.partialLength, y = null)), y && (d = p, v = (p = y[u]).partialLength));
                                        z = F[n].an / 2 - F[n].add, w.translate(-z, 0, 0)
                                    } else z = F[n].an / 2 - F[n].add, w.translate(-z, 0, 0), w.translate(-S[0] * F[n].an * .005, -S[1] * L * .01, 0);
                                    for (I = 0; I < R; I += 1)(D = P[I].a).t.propType && (V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars), 0 === a && 0 === r.j || (this._hasMaskedPath ? V.length ? l += D.t.v * V[0] : l += D.t.v * V : V.length ? a += D.t.v * V[0] : a += D.t.v * V));
                                    for (r.strokeWidthAnim && ($ = r.sw || 0), r.strokeColorAnim && (H = r.sc ? [r.sc[0], r.sc[1], r.sc[2]] : [0, 0, 0]), r.fillColorAnim && r.fc && (q = [r.fc[0], r.fc[1], r.fc[2]]), I = 0; I < R; I += 1)(D = P[I].a).a.propType && ((V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars)).length ? w.translate(-D.a.v[0] * V[0], -D.a.v[1] * V[1], D.a.v[2] * V[2]) : w.translate(-D.a.v[0] * V, -D.a.v[1] * V, D.a.v[2] * V));
                                    for (I = 0; I < R; I += 1)(D = P[I].a).s.propType && ((V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars)).length ? w.scale(1 + (D.s.v[0] - 1) * V[0], 1 + (D.s.v[1] - 1) * V[1], 1) : w.scale(1 + (D.s.v[0] - 1) * V, 1 + (D.s.v[1] - 1) * V, 1));
                                    for (I = 0; I < R; I += 1) {
                                        if (D = P[I].a, V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars), D.sk.propType && (V.length ? w.skewFromAxis(-D.sk.v * V[0], D.sa.v * V[1]) : w.skewFromAxis(-D.sk.v * V, D.sa.v * V)), D.r.propType && (V.length ? w.rotateZ(-D.r.v * V[2]) : w.rotateZ(-D.r.v * V)), D.ry.propType && (V.length ? w.rotateY(D.ry.v * V[1]) : w.rotateY(D.ry.v * V)), D.rx.propType && (V.length ? w.rotateX(D.rx.v * V[0]) : w.rotateX(D.rx.v * V)), D.o.propType && (V.length ? j += (D.o.v * V[0] - j) * V[0] : j += (D.o.v * V - j) * V), r.strokeWidthAnim && D.sw.propType && (V.length ? $ += D.sw.v * V[0] : $ += D.sw.v * V), r.strokeColorAnim && D.sc.propType)
                                            for (W = 0; W < 3; W += 1) V.length ? H[W] += (D.sc.v[W] - H[W]) * V[0] : H[W] += (D.sc.v[W] - H[W]) * V;
                                        if (r.fillColorAnim && r.fc) {
                                            if (D.fc.propType)
                                                for (W = 0; W < 3; W += 1) V.length ? q[W] += (D.fc.v[W] - q[W]) * V[0] : q[W] += (D.fc.v[W] - q[W]) * V;
                                            D.fh.propType && (q = V.length ? addHueToRGB(q, D.fh.v * V[0]) : addHueToRGB(q, D.fh.v * V)), D.fs.propType && (q = V.length ? addSaturationToRGB(q, D.fs.v * V[0]) : addSaturationToRGB(q, D.fs.v * V)), D.fb.propType && (q = V.length ? addBrightnessToRGB(q, D.fb.v * V[0]) : addBrightnessToRGB(q, D.fb.v * V))
                                        }
                                    }
                                    for (I = 0; I < R; I += 1)(D = P[I].a).p.propType && (V = P[I].s.getMult(F[n].anIndexes[I], C.a[I].s.totalChars), this._hasMaskedPath ? V.length ? w.translate(0, D.p.v[1] * V[0], -D.p.v[2] * V[1]) : w.translate(0, D.p.v[1] * V, -D.p.v[2] * V) : V.length ? w.translate(D.p.v[0] * V[0], D.p.v[1] * V[1], -D.p.v[2] * V[2]) : w.translate(D.p.v[0] * V, D.p.v[1] * V, -D.p.v[2] * V));
                                    if (r.strokeWidthAnim && (Y = $ < 0 ? 0 : $), r.strokeColorAnim && (X = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), r.fillColorAnim && r.fc && (Z = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), this._hasMaskedPath) {
                                        if (w.translate(0, -r.ls), w.translate(0, S[1] * L * .01 + s, 0), this._pathData.p.v) {
                                            _ = (p.point[1] - d.point[1]) / (p.point[0] - d.point[0]);
                                            var pt = 180 * Math.atan(_) / Math.PI;
                                            p.point[0] < d.point[0] && (pt += 180), w.rotate(-pt * Math.PI / 180)
                                        }
                                        w.translate(N, G, 0), l -= S[0] * F[n].an * .005, F[n + 1] && K !== F[n + 1].ind && (l += F[n].an / 2, l += .001 * r.tr * r.finalSize)
                                    } else {
                                        switch (w.translate(a, s, 0), r.ps && w.translate(r.ps[0], r.ps[1] + r.ascent, 0), r.j) {
                                            case 1:
                                                w.translate(F[n].animatorJustifyOffset + r.justifyOffset + (r.boxWidth - r.lineWidths[F[n].line]), 0, 0);
                                                break;
                                            case 2:
                                                w.translate(F[n].animatorJustifyOffset + r.justifyOffset + (r.boxWidth - r.lineWidths[F[n].line]) / 2, 0, 0)
                                        }
                                        w.translate(0, -r.ls), w.translate(z, 0, 0), w.translate(S[0] * F[n].an * .005, S[1] * L * .01, 0), a += F[n].l + .001 * r.tr * r.finalSize
                                    }
                                    "html" === k ? rt = w.toCSS() : "svg" === k ? rt = w.to2dCSS() : it = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], U = j
                                }
                                A <= n ? (B = new LetterProps(U, Y, X, Z, rt, it), this.renderedLetters.push(B), A += 1, this.lettersChangedFlag = !0) : (B = this.renderedLetters[n], this.lettersChangedFlag = B.update(U, Y, X, Z, rt, it) || this.lettersChangedFlag)
                            }
                        }
                    }, TextAnimatorProperty.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(r, i, a) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(r, i, a), this.textProperty = new TextProperty(this, r.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(r.t, this.renderType, this), this.initTransform(r, i, a), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                    }, ITextElement.prototype.prepareFrame = function(r) {
                        this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                    }, ITextElement.prototype.createPathShape = function(r, i) {
                        var a, s, n = i.length,
                            o = "";
                        for (a = 0; a < n; a += 1) "sh" === i[a].ty && (s = i[a].ks.k, o += buildShapeString(s, s.i.length, !0, r));
                        return o
                    }, ITextElement.prototype.updateDocumentData = function(r, i) {
                        this.textProperty.updateDocumentData(r, i)
                    }, ITextElement.prototype.canResizeFont = function(r) {
                        this.textProperty.canResizeFont(r)
                    }, ITextElement.prototype.setMinimumFontSize = function(r) {
                        this.textProperty.setMinimumFontSize(r)
                    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(r, i, a, s, n) {
                        switch (r.ps && i.translate(r.ps[0], r.ps[1] + r.ascent, 0), i.translate(0, -r.ls, 0), r.j) {
                            case 1:
                                i.translate(r.justifyOffset + (r.boxWidth - r.lineWidths[a]), 0, 0);
                                break;
                            case 2:
                                i.translate(r.justifyOffset + (r.boxWidth - r.lineWidths[a]) / 2, 0, 0)
                        }
                        i.translate(s, n, 0)
                    }, ITextElement.prototype.buildColor = function(r) {
                        return "rgb(" + Math.round(255 * r[0]) + "," + Math.round(255 * r[1]) + "," + Math.round(255 * r[2]) + ")"
                    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
                    var emptyShapeData = {
                        shapes: []
                    };

                    function SVGTextLottieElement(r, i, a) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(r, i, a)
                    }

                    function ISolidElement(r, i, a) {
                        this.initElement(r, i, a)
                    }

                    function NullElement(r, i, a) {
                        this.initFrame(), this.initBaseData(r, i, a), this.initFrame(), this.initTransform(r, i, a), this.initHierarchy()
                    }

                    function SVGRendererBase() {}

                    function ICompElement() {}

                    function SVGCompElement(r, i, a) {
                        this.layers = r.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(r, i, a), this.tm = r.tm ? PropertyFactory.getProp(this, r.tm, 0, i.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function SVGRenderer(r, i) {
                        this.animationItem = r, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                        var a = "";
                        if (i && i.title) {
                            var s = createNS("title"),
                                n = createElementID();
                            s.setAttribute("id", n), s.textContent = i.title, this.svgElement.appendChild(s), a += n
                        }
                        if (i && i.description) {
                            var o = createNS("desc"),
                                h = createElementID();
                            o.setAttribute("id", h), o.textContent = i.description, this.svgElement.appendChild(o), a += " " + h
                        }
                        a && this.svgElement.setAttribute("aria-labelledby", a);
                        var l = createNS("defs");
                        this.svgElement.appendChild(l);
                        var p = createNS("g");
                        this.svgElement.appendChild(p), this.layerElement = p, this.renderConfig = {
                            preserveAspectRatio: i && i.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: i && i.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: i && i.contentVisibility || "visible",
                            progressiveLoad: i && i.progressiveLoad || !1,
                            hideOnTransparent: !(i && !1 === i.hideOnTransparent),
                            viewBoxOnly: i && i.viewBoxOnly || !1,
                            viewBoxSize: i && i.viewBoxSize || !1,
                            className: i && i.className || "",
                            id: i && i.id || "",
                            focusable: i && i.focusable,
                            filterSize: {
                                width: i && i.filterSize && i.filterSize.width || "100%",
                                height: i && i.filterSize && i.filterSize.height || "100%",
                                x: i && i.filterSize && i.filterSize.x || "0%",
                                y: i && i.filterSize && i.filterSize.y || "0%"
                            },
                            width: i && i.width,
                            height: i && i.height,
                            runExpressions: !i || void 0 === i.runExpressions || i.runExpressions
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            defs: l,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                    }

                    function CVContextData() {
                        var r;
                        for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), r = 0; r < 15; r += 1) this.saved[r] = createTypedArray("float32", 16);
                        this._length = 15
                    }

                    function ShapeTransformManager() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                    }
                    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                    }, SVGTextLottieElement.prototype.buildTextContents = function(r) {
                        for (var i = 0, a = r.length, s = [], n = ""; i < a;) r[i] === String.fromCharCode(13) || r[i] === String.fromCharCode(3) ? (s.push(n), n = "") : n += r[i], i += 1;
                        return s.push(n), s
                    }, SVGTextLottieElement.prototype.buildShapeData = function(r, i) {
                        if (r.shapes && r.shapes.length) {
                            var a = r.shapes[0];
                            if (a.it) {
                                var s = a.it[a.it.length - 1];
                                s.s && (s.s.k[0] = i, s.s.k[1] = i)
                            }
                        }
                        return r
                    }, SVGTextLottieElement.prototype.buildNewText = function() {
                        var r, i;
                        this.addDynamicProperty(this);
                        var a = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(a ? a.l.length : 0), a.fc ? this.layerElement.setAttribute("fill", this.buildColor(a.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), a.sc && (this.layerElement.setAttribute("stroke", this.buildColor(a.sc)), this.layerElement.setAttribute("stroke-width", a.sw)), this.layerElement.setAttribute("font-size", a.finalSize);
                        var s = this.globalData.fontManager.getFontByName(a.f);
                        if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                        else {
                            this.layerElement.setAttribute("font-family", s.fFamily);
                            var n = a.fWeight,
                                o = a.fStyle;
                            this.layerElement.setAttribute("font-style", o), this.layerElement.setAttribute("font-weight", n)
                        }
                        this.layerElement.setAttribute("aria-label", a.t);
                        var h, l = a.l || [],
                            p = !!this.globalData.fontManager.chars;
                        i = l.length;
                        var c = this.mHelper,
                            f = this.data.singleShape,
                            u = 0,
                            m = 0,
                            d = !0,
                            y = .001 * a.tr * a.finalSize;
                        if (!f || p || a.sz) {
                            var g, v = this.textSpans.length;
                            for (r = 0; r < i; r += 1) {
                                if (this.textSpans[r] || (this.textSpans[r] = {
                                        span: null,
                                        childSpan: null,
                                        glyph: null
                                    }), !p || !f || 0 === r) {
                                    if (h = v > r ? this.textSpans[r].span : createNS(p ? "g" : "text"), v <= r) {
                                        if (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[r].span = h, p) {
                                            var b = createNS("g");
                                            h.appendChild(b), this.textSpans[r].childSpan = b
                                        }
                                        this.textSpans[r].span = h, this.layerElement.appendChild(h)
                                    }
                                    h.style.display = "inherit"
                                }
                                if (c.reset(), f && (l[r].n && (u = -y, m += a.yOffset, m += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(a, c, l[r].line, u, m), u += l[r].l || 0, u += y), p) {
                                    var x;
                                    if (1 === (g = this.globalData.fontManager.getCharData(a.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(a.f).fFamily)).t) x = new SVGCompElement(g.data, this.globalData, this);
                                    else {
                                        var _ = emptyShapeData;
                                        g.data && g.data.shapes && (_ = this.buildShapeData(g.data, a.finalSize)), x = new SVGShapeElement(_, this.globalData, this)
                                    }
                                    if (this.textSpans[r].glyph) {
                                        var E = this.textSpans[r].glyph;
                                        this.textSpans[r].childSpan.removeChild(E.layerElement), E.destroy()
                                    }
                                    this.textSpans[r].glyph = x, x._debug = !0, x.prepareFrame(0), x.renderFrame(), this.textSpans[r].childSpan.appendChild(x.layerElement), 1 === g.t && this.textSpans[r].childSpan.setAttribute("transform", "scale(" + a.finalSize / 100 + "," + a.finalSize / 100 + ")")
                                } else f && h.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), h.textContent = l[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                            }
                            f && h && h.setAttribute("d", "")
                        } else {
                            var S = this.textContainer,
                                P = "start";
                            switch (a.j) {
                                case 1:
                                    P = "end";
                                    break;
                                case 2:
                                    P = "middle";
                                    break;
                                default:
                                    P = "start"
                            }
                            S.setAttribute("text-anchor", P), S.setAttribute("letter-spacing", y);
                            var C = this.buildTextContents(a.finalText);
                            for (i = C.length, m = a.ps ? a.ps[1] + a.ascent : 0, r = 0; r < i; r += 1)(h = this.textSpans[r].span || createNS("tspan")).textContent = C[r], h.setAttribute("x", 0), h.setAttribute("y", m), h.style.display = "inherit", S.appendChild(h), this.textSpans[r] || (this.textSpans[r] = {
                                span: null,
                                glyph: null
                            }), this.textSpans[r].span = h, m += a.finalLineHeight;
                            this.layerElement.appendChild(S)
                        }
                        for (; r < this.textSpans.length;) this.textSpans[r].span.style.display = "none", r += 1;
                        this._sizeChanged = !0
                    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                            this._sizeChanged = !1;
                            var r = this.layerElement.getBBox();
                            this.bbox = {
                                top: r.y,
                                left: r.x,
                                width: r.width,
                                height: r.height
                            }
                        }
                        return this.bbox
                    }, SVGTextLottieElement.prototype.getValue = function() {
                        var r, i, a = this.textSpans.length;
                        for (this.renderedFrame = this.comp.renderedFrame, r = 0; r < a; r += 1)(i = this.textSpans[r].glyph) && (i.prepareFrame(this.comp.renderedFrame - this.data.st), i._mdf && (this._mdf = !0))
                    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                        if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            var r, i;
                            this._sizeChanged = !0;
                            var a, s, n, o = this.textAnimator.renderedLetters,
                                h = this.textProperty.currentData.l;
                            for (i = h.length, r = 0; r < i; r += 1) h[r].n || (a = o[r], s = this.textSpans[r].span, (n = this.textSpans[r].glyph) && n.renderFrame(), a._mdf.m && s.setAttribute("transform", a.m), a._mdf.o && s.setAttribute("opacity", a.o), a._mdf.sw && s.setAttribute("stroke-width", a.sw), a._mdf.sc && s.setAttribute("stroke", a.sc), a._mdf.fc && s.setAttribute("fill", a.fc))
                        }
                    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                        var r = createNS("rect");
                        r.setAttribute("width", this.data.sw), r.setAttribute("height", this.data.sh), r.setAttribute("fill", this.data.sc), this.layerElement.appendChild(r)
                    }, NullElement.prototype.prepareFrame = function(r) {
                        this.prepareProperties(r, !0)
                    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                        return null
                    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(r) {
                        return new NullElement(r, this.globalData, this)
                    }, SVGRendererBase.prototype.createShape = function(r) {
                        return new SVGShapeElement(r, this.globalData, this)
                    }, SVGRendererBase.prototype.createText = function(r) {
                        return new SVGTextLottieElement(r, this.globalData, this)
                    }, SVGRendererBase.prototype.createImage = function(r) {
                        return new IImageElement(r, this.globalData, this)
                    }, SVGRendererBase.prototype.createSolid = function(r) {
                        return new ISolidElement(r, this.globalData, this)
                    }, SVGRendererBase.prototype.configAnimation = function(r) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + r.w + " " + r.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", r.w), this.svgElement.setAttribute("height", r.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var i = this.globalData.defs;
                        this.setupGlobalData(r, i), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = r;
                        var a = createNS("clipPath"),
                            s = createNS("rect");
                        s.setAttribute("width", r.w), s.setAttribute("height", r.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
                        var n = createElementID();
                        a.setAttribute("id", n), a.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), i.appendChild(a), this.layers = r.layers, this.elements = createSizedArray(r.layers.length)
                    }, SVGRendererBase.prototype.destroy = function() {
                        var r;
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var i = this.layers ? this.layers.length : 0;
                        for (r = 0; r < i; r += 1) this.elements[r] && this.elements[r].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(r) {
                        var i = 0,
                            a = this.layers.length;
                        for (i = 0; i < a; i += 1)
                            if (this.layers[i].ind === r) return i;
                        return -1
                    }, SVGRendererBase.prototype.buildItem = function(r) {
                        var i = this.elements;
                        if (!i[r] && 99 !== this.layers[r].ty) {
                            i[r] = !0;
                            var a = this.createItem(this.layers[r]);
                            if (i[r] = a, getExpressionsPlugin() && (0 === this.layers[r].ty && this.globalData.projectInterface.registerComposition(a), a.initExpressions()), this.appendElementInPos(a, r), this.layers[r].tt) {
                                var s = "tp" in this.layers[r] ? this.findIndexByInd(this.layers[r].tp) : r - 1;
                                if (-1 === s) return;
                                if (this.elements[s] && !0 !== this.elements[s]) {
                                    var n = i[s].getMatte(this.layers[r].tt);
                                    a.setMatte(n)
                                } else this.buildItem(s), this.addPendingElement(a)
                            }
                        }
                    }, SVGRendererBase.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) {
                            var r = this.pendingElements.pop();
                            if (r.checkParenting(), r.data.tt)
                                for (var i = 0, a = this.elements.length; i < a;) {
                                    if (this.elements[i] === r) {
                                        var s = "tp" in r.data ? this.findIndexByInd(r.data.tp) : i - 1,
                                            n = this.elements[s].getMatte(this.layers[i].tt);
                                        r.setMatte(n);
                                        break
                                    }
                                    i += 1
                                }
                        }
                    }, SVGRendererBase.prototype.renderFrame = function(r) {
                        if (this.renderedFrame !== r && !this.destroyed) {
                            var i;
                            null === r ? r = this.renderedFrame : this.renderedFrame = r, this.globalData.frameNum = r, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = r, this.globalData._mdf = !1;
                            var a = this.layers.length;
                            for (this.completeLayers || this.checkLayers(r), i = a - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(r - this.layers[i].st);
                            if (this.globalData._mdf)
                                for (i = 0; i < a; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame()
                        }
                    }, SVGRendererBase.prototype.appendElementInPos = function(r, i) {
                        var a = r.getBaseElement();
                        if (a) {
                            for (var s, n = 0; n < i;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (s = this.elements[n].getBaseElement()), n += 1;
                            s ? this.layerElement.insertBefore(a, s) : this.layerElement.appendChild(a)
                        }
                    }, SVGRendererBase.prototype.hide = function() {
                        this.layerElement.style.display = "none"
                    }, SVGRendererBase.prototype.show = function() {
                        this.layerElement.style.display = "block"
                    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(r, i, a) {
                        this.initFrame(), this.initBaseData(r, i, a), this.initTransform(r, i, a), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && i.progressiveLoad || this.buildAllItems(), this.hide()
                    }, ICompElement.prototype.prepareFrame = function(r) {
                        if (this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.isInRange || this.data.xt) {
                            if (this.tm._placeholder) this.renderedFrame = r / this.data.sr;
                            else {
                                var i = this.tm.v;
                                i === this.data.op && (i = this.data.op - 1), this.renderedFrame = i
                            }
                            var a, s = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), a = s - 1; a >= 0; a -= 1)(this.completeLayers || this.elements[a]) && (this.elements[a].prepareFrame(this.renderedFrame - this.layers[a].st), this.elements[a]._mdf && (this._mdf = !0))
                        }
                    }, ICompElement.prototype.renderInnerContent = function() {
                        var r, i = this.layers.length;
                        for (r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame()
                    }, ICompElement.prototype.setElements = function(r) {
                        this.elements = r
                    }, ICompElement.prototype.getElements = function() {
                        return this.elements
                    }, ICompElement.prototype.destroyElements = function() {
                        var r, i = this.layers.length;
                        for (r = 0; r < i; r += 1) this.elements[r] && this.elements[r].destroy()
                    }, ICompElement.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement()
                    }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(r) {
                        return new SVGCompElement(r, this.globalData, this)
                    }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(r) {
                        return new SVGCompElement(r, this.globalData, this)
                    }, CVContextData.prototype.duplicate = function() {
                        var r = 2 * this._length,
                            i = this.savedOp;
                        this.savedOp = createTypedArray("float32", r), this.savedOp.set(i);
                        var a = 0;
                        for (a = this._length; a < r; a += 1) this.saved[a] = createTypedArray("float32", 16);
                        this._length = r
                    }, CVContextData.prototype.reset = function() {
                        this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                    }, CVContextData.prototype.popTransform = function() {
                        var r, i = this.saved[this.cArrPos],
                            a = this.cTr.props;
                        for (r = 0; r < 16; r += 1) a[r] = i[r];
                        return i
                    }, CVContextData.prototype.popOpacity = function() {
                        var r = this.savedOp[this.cArrPos];
                        return this.cO = r, r
                    }, CVContextData.prototype.pop = function() {
                        return this.cArrPos -= 1, {
                            transform: this.popTransform(),
                            opacity: this.popOpacity()
                        }
                    }, CVContextData.prototype.push = function() {
                        var r, i = this.cTr.props;
                        this._length <= this.cArrPos && this.duplicate();
                        var a = this.saved[this.cArrPos];
                        for (r = 0; r < 16; r += 1) a[r] = i[r];
                        this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
                    }, CVContextData.prototype.getTransform = function() {
                        return this.cTr
                    }, CVContextData.prototype.getOpacity = function() {
                        return this.cO
                    }, CVContextData.prototype.setOpacity = function(r) {
                        this.cO = r
                    }, ShapeTransformManager.prototype = {
                        addTransformSequence: function(r) {
                            var i, a = r.length,
                                s = "_";
                            for (i = 0; i < a; i += 1) s += r[i].transform.key + "_";
                            var n = this.sequences[s];
                            return n || (n = {
                                transforms: [].concat(r),
                                finalTransform: new Matrix,
                                _mdf: !1
                            }, this.sequences[s] = n, this.sequenceList.push(n)), n
                        },
                        processSequence: function(r, i) {
                            for (var a, s = 0, n = r.transforms.length, o = i; s < n && !i;) {
                                if (r.transforms[s].transform.mProps._mdf) {
                                    o = !0;
                                    break
                                }
                                s += 1
                            }
                            if (o)
                                for (r.finalTransform.reset(), s = n - 1; s >= 0; s -= 1) a = r.transforms[s].transform.mProps.v.props, r.finalTransform.transform(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
                            r._mdf = o
                        },
                        processSequences: function(r) {
                            var i, a = this.sequenceList.length;
                            for (i = 0; i < a; i += 1) this.processSequence(this.sequenceList[i], r)
                        },
                        getNewKey: function() {
                            return this.transform_key_count += 1, "_" + this.transform_key_count
                        }
                    };
                    var lumaLoader = function() {
                        var r = "__lottie_element_luma_buffer",
                            i = null,
                            a = null,
                            s = null;

                        function n() {
                            var n, o, h;
                            i || (n = createNS("svg"), o = createNS("filter"), h = createNS("feColorMatrix"), o.setAttribute("id", r), h.setAttribute("type", "matrix"), h.setAttribute("color-interpolation-filters", "sRGB"), h.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o.appendChild(h), n.appendChild(o), n.setAttribute("id", r + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), s = n, document.body.appendChild(s), i = createTag("canvas"), (a = i.getContext("2d")).filter = "url(#" + r + ")", a.fillStyle = "rgba(0,0,0,0)", a.fillRect(0, 0, 1, 1))
                        }
                        return {
                            load: n,
                            get: function(s) {
                                return i || n(), i.width = s.width, i.height = s.height, a.filter = "url(#" + r + ")", i
                            }
                        }
                    };

                    function createCanvas(r, i) {
                        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(r, i);
                        var a = createTag("canvas");
                        return a.width = r, a.height = i, a
                    }
                    var assetLoader = {
                        loadLumaCanvas: lumaLoader.load,
                        getLumaCanvas: lumaLoader.get,
                        createCanvas: createCanvas
                    };

                    function CVEffects() {}

                    function CVMaskElement(r, i) {
                        var a;
                        this.data = r, this.element = i, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                        var s = this.masksProperties.length,
                            n = !1;
                        for (a = 0; a < s; a += 1) "n" !== this.masksProperties[a].mode && (n = !0), this.viewData[a] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[a], 3);
                        this.hasMasks = n, n && this.element.addRenderableComponent(this)
                    }

                    function CVBaseElement() {}
                    CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
                        if (this.hasMasks) {
                            var r, i, a, s, n = this.element.finalTransform.mat,
                                o = this.element.canvasContext,
                                h = this.masksProperties.length;
                            for (o.beginPath(), r = 0; r < h; r += 1)
                                if ("n" !== this.masksProperties[r].mode) {
                                    var l;
                                    this.masksProperties[r].inv && (o.moveTo(0, 0), o.lineTo(this.element.globalData.compSize.w, 0), o.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), o.lineTo(0, this.element.globalData.compSize.h), o.lineTo(0, 0)), s = this.viewData[r].v, i = n.applyToPointArray(s.v[0][0], s.v[0][1], 0), o.moveTo(i[0], i[1]);
                                    var p = s._length;
                                    for (l = 1; l < p; l += 1) a = n.applyToTriplePoints(s.o[l - 1], s.i[l], s.v[l]), o.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                                    a = n.applyToTriplePoints(s.o[l - 1], s.i[0], s.v[0]), o.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                                }
                            this.element.globalData.renderer.save(!0), o.clip()
                        }
                    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                        this.element = null
                    };
                    var operationsMap = {
                        1: "source-in",
                        2: "source-out",
                        3: "source-in",
                        4: "source-out"
                    };

                    function CVShapeData(r, i, a, s) {
                        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                        var n, o = 4;
                        "rc" === i.ty ? o = 5 : "el" === i.ty ? o = 6 : "sr" === i.ty && (o = 7), this.sh = ShapePropertyFactory.getShapeProp(r, i, o, r);
                        var h, l = a.length;
                        for (n = 0; n < l; n += 1) a[n].closed || (h = {
                            transforms: s.addTransformSequence(a[n].transforms),
                            trNodes: []
                        }, this.styledShapes.push(h), a[n].elements.push(h))
                    }

                    function CVShapeElement(r, i, a) {
                        this.shapes = [], this.shapesData = r.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(r, i, a)
                    }

                    function CVTextElement(r, i, a) {
                        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                            fill: "rgba(0,0,0,0)",
                            stroke: "rgba(0,0,0,0)",
                            sWidth: 0,
                            fValue: ""
                        }, this.initElement(r, i, a)
                    }

                    function CVImageElement(r, i, a) {
                        this.assetData = i.getAssetData(r.refId), this.img = i.imageLoader.getAsset(this.assetData), this.initElement(r, i, a)
                    }

                    function CVSolidElement(r, i, a) {
                        this.initElement(r, i, a)
                    }

                    function CanvasRendererBase(r, i) {
                        this.animationItem = r, this.renderConfig = {
                            clearCanvas: !i || void 0 === i.clearCanvas || i.clearCanvas,
                            context: i && i.context || null,
                            progressiveLoad: i && i.progressiveLoad || !1,
                            preserveAspectRatio: i && i.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: i && i.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: i && i.contentVisibility || "visible",
                            className: i && i.className || "",
                            id: i && i.id || ""
                        }, this.renderConfig.dpr = i && i.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = i && i.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                    }

                    function CVCompElement(r, i, a) {
                        this.completeLayers = !1, this.layers = r.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(r, i, a), this.tm = r.tm ? PropertyFactory.getProp(this, r.tm, 0, i.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function CanvasRenderer(r, i) {
                        this.animationItem = r, this.renderConfig = {
                            clearCanvas: !i || void 0 === i.clearCanvas || i.clearCanvas,
                            context: i && i.context || null,
                            progressiveLoad: i && i.progressiveLoad || !1,
                            preserveAspectRatio: i && i.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: i && i.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: i && i.contentVisibility || "visible",
                            className: i && i.className || "",
                            id: i && i.id || "",
                            runExpressions: !i || void 0 === i.runExpressions || i.runExpressions
                        }, this.renderConfig.dpr = i && i.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = i && i.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                    }

                    function HBaseElement() {}

                    function HSolidElement(r, i, a) {
                        this.initElement(r, i, a)
                    }

                    function HShapeElement(r, i, a) {
                        this.shapes = [], this.shapesData = r.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(r, i, a), this.prevViewData = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }
                    }

                    function HTextElement(r, i, a) {
                        this.textSpans = [], this.textPaths = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }, this.renderType = "svg", this.isMasked = !1, this.initElement(r, i, a)
                    }

                    function HCameraElement(r, i, a) {
                        this.initFrame(), this.initBaseData(r, i, a), this.initHierarchy();
                        var s = PropertyFactory.getProp;
                        if (this.pe = s(this, r.pe, 0, 0, this), r.ks.p.s ? (this.px = s(this, r.ks.p.x, 1, 0, this), this.py = s(this, r.ks.p.y, 1, 0, this), this.pz = s(this, r.ks.p.z, 1, 0, this)) : this.p = s(this, r.ks.p, 1, 0, this), r.ks.a && (this.a = s(this, r.ks.a, 1, 0, this)), r.ks.or.k.length && r.ks.or.k[0].to) {
                            var n, o = r.ks.or.k.length;
                            for (n = 0; n < o; n += 1) r.ks.or.k[n].to = null, r.ks.or.k[n].ti = null
                        }
                        this.or = s(this, r.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = s(this, r.ks.rx, 0, degToRads, this), this.ry = s(this, r.ks.ry, 0, degToRads, this), this.rz = s(this, r.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                            mProp: this
                        }
                    }

                    function HImageElement(r, i, a) {
                        this.assetData = i.getAssetData(r.refId), this.initElement(r, i, a)
                    }

                    function HybridRendererBase(r, i) {
                        this.animationItem = r, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: i && i.className || "",
                            imagePreserveAspectRatio: i && i.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(i && !1 === i.hideOnTransparent),
                            filterSize: {
                                width: i && i.filterSize && i.filterSize.width || "400%",
                                height: i && i.filterSize && i.filterSize.height || "400%",
                                x: i && i.filterSize && i.filterSize.x || "-100%",
                                y: i && i.filterSize && i.filterSize.y || "-100%"
                            }
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                    }

                    function HCompElement(r, i, a) {
                        this.layers = r.layers, this.supports3d = !r.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(r, i, a), this.tm = r.tm ? PropertyFactory.getProp(this, r.tm, 0, i.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function HybridRenderer(r, i) {
                        this.animationItem = r, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: i && i.className || "",
                            imagePreserveAspectRatio: i && i.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(i && !1 === i.hideOnTransparent),
                            filterSize: {
                                width: i && i.filterSize && i.filterSize.width || "400%",
                                height: i && i.filterSize && i.filterSize.height || "400%",
                                x: i && i.filterSize && i.filterSize.x || "-100%",
                                y: i && i.filterSize && i.filterSize.y || "-100%"
                            },
                            runExpressions: !i || void 0 === i.runExpressions || i.runExpressions
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                    }
                    CVBaseElement.prototype = {
                        createElements: function() {},
                        initRendererElement: function() {},
                        createContainerElements: function() {
                            if (this.data.tt >= 1) {
                                this.buffers = [];
                                var r = this.globalData.canvasContext,
                                    i = assetLoader.createCanvas(r.canvas.width, r.canvas.height);
                                this.buffers.push(i);
                                var a = assetLoader.createCanvas(r.canvas.width, r.canvas.height);
                                this.buffers.push(a), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                            }
                            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
                        },
                        createContent: function() {},
                        setBlendMode: function() {
                            var r = this.globalData;
                            if (r.blendMode !== this.data.bm) {
                                r.blendMode = this.data.bm;
                                var i = getBlendMode(this.data.bm);
                                r.canvasContext.globalCompositeOperation = i
                            }
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new CVMaskElement(this.data, this)
                        },
                        hideElement: function() {
                            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                        },
                        showElement: function() {
                            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                        },
                        clearCanvas: function(r) {
                            r.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                        },
                        prepareLayer: function() {
                            if (this.data.tt >= 1) {
                                var r = this.buffers[0].getContext("2d");
                                this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                            }
                        },
                        exitLayer: function() {
                            if (this.data.tt >= 1) {
                                var r = this.buffers[1],
                                    i = r.getContext("2d");
                                if (this.clearCanvas(i), i.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                    var a = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                    a.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(a, 0, 0)
                                }
                                this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(r, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                            }
                        },
                        renderFrame: function(r) {
                            if (!this.hidden && !this.data.hd && (1 !== this.data.td || r)) {
                                this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                                var i = 0 === this.data.ty;
                                this.prepareLayer(), this.globalData.renderer.save(i), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(i), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                            }
                        },
                        destroy: function() {
                            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                        },
                        mHelper: new Matrix
                    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                        opacity: 1,
                        _opMdf: !1
                    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                    }, CVShapeElement.prototype.createStyleElement = function(r, i) {
                        var a = {
                                data: r,
                                type: r.ty,
                                preTransforms: this.transformsManager.addTransformSequence(i),
                                transforms: [],
                                elements: [],
                                closed: !0 === r.hd
                            },
                            s = {};
                        if ("fl" === r.ty || "st" === r.ty ? (s.c = PropertyFactory.getProp(this, r.c, 1, 255, this), s.c.k || (a.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")")) : "gf" !== r.ty && "gs" !== r.ty || (s.s = PropertyFactory.getProp(this, r.s, 1, null, this), s.e = PropertyFactory.getProp(this, r.e, 1, null, this), s.h = PropertyFactory.getProp(this, r.h || {
                                k: 0
                            }, 0, .01, this), s.a = PropertyFactory.getProp(this, r.a || {
                                k: 0
                            }, 0, degToRads, this), s.g = new GradientProperty(this, r.g, this)), s.o = PropertyFactory.getProp(this, r.o, 0, .01, this), "st" === r.ty || "gs" === r.ty) {
                            if (a.lc = lineCapEnum[r.lc || 2], a.lj = lineJoinEnum[r.lj || 2], 1 == r.lj && (a.ml = r.ml), s.w = PropertyFactory.getProp(this, r.w, 0, null, this), s.w.k || (a.wi = s.w.v), r.d) {
                                var n = new DashProperty(this, r.d, "canvas", this);
                                s.d = n, s.d.k || (a.da = s.d.dashArray, a.do = s.d.dashoffset[0])
                            }
                        } else a.r = 2 === r.r ? "evenodd" : "nonzero";
                        return this.stylesList.push(a), s.style = a, s
                    }, CVShapeElement.prototype.createGroupElement = function() {
                        return {
                            it: [],
                            prevViewData: []
                        }
                    }, CVShapeElement.prototype.createTransformElement = function(r) {
                        return {
                            transform: {
                                opacity: 1,
                                _opMdf: !1,
                                key: this.transformsManager.getNewKey(),
                                op: PropertyFactory.getProp(this, r.o, 0, .01, this),
                                mProps: TransformPropertyFactory.getTransformProperty(this, r, this)
                            }
                        }
                    }, CVShapeElement.prototype.createShapeElement = function(r) {
                        var i = new CVShapeData(this, r, this.stylesList, this.transformsManager);
                        return this.shapes.push(i), this.addShapeToModifiers(i), i
                    }, CVShapeElement.prototype.reloadShapes = function() {
                        var r;
                        this._isFirstFrame = !0;
                        var i = this.itemsData.length;
                        for (r = 0; r < i; r += 1) this.prevViewData[r] = this.itemsData[r];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), i = this.dynamicProperties.length, r = 0; r < i; r += 1) this.dynamicProperties[r].getValue();
                        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                    }, CVShapeElement.prototype.addTransformToStyleList = function(r) {
                        var i, a = this.stylesList.length;
                        for (i = 0; i < a; i += 1) this.stylesList[i].closed || this.stylesList[i].transforms.push(r)
                    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                        var r, i = this.stylesList.length;
                        for (r = 0; r < i; r += 1) this.stylesList[r].closed || this.stylesList[r].transforms.pop()
                    }, CVShapeElement.prototype.closeStyles = function(r) {
                        var i, a = r.length;
                        for (i = 0; i < a; i += 1) r[i].closed = !0
                    }, CVShapeElement.prototype.searchShapes = function(r, i, a, s, n) {
                        var o, h, l, p, c, f, u = r.length - 1,
                            m = [],
                            d = [],
                            y = [].concat(n);
                        for (o = u; o >= 0; o -= 1) {
                            if ((p = this.searchProcessedElement(r[o])) ? i[o] = a[p - 1] : r[o]._shouldRender = s, "fl" === r[o].ty || "st" === r[o].ty || "gf" === r[o].ty || "gs" === r[o].ty) p ? i[o].style.closed = !1 : i[o] = this.createStyleElement(r[o], y), m.push(i[o].style);
                            else if ("gr" === r[o].ty) {
                                if (p)
                                    for (l = i[o].it.length, h = 0; h < l; h += 1) i[o].prevViewData[h] = i[o].it[h];
                                else i[o] = this.createGroupElement(r[o]);
                                this.searchShapes(r[o].it, i[o].it, i[o].prevViewData, s, y)
                            } else "tr" === r[o].ty ? (p || (f = this.createTransformElement(r[o]), i[o] = f), y.push(i[o]), this.addTransformToStyleList(i[o])) : "sh" === r[o].ty || "rc" === r[o].ty || "el" === r[o].ty || "sr" === r[o].ty ? p || (i[o] = this.createShapeElement(r[o])) : "tm" === r[o].ty || "rd" === r[o].ty || "pb" === r[o].ty || "zz" === r[o].ty || "op" === r[o].ty ? (p ? (c = i[o]).closed = !1 : ((c = ShapeModifiers.getModifier(r[o].ty)).init(this, r[o]), i[o] = c, this.shapeModifiers.push(c)), d.push(c)) : "rp" === r[o].ty && (p ? (c = i[o]).closed = !0 : (c = ShapeModifiers.getModifier(r[o].ty), i[o] = c, c.init(this, r, o, i), this.shapeModifiers.push(c), s = !1), d.push(c));
                            this.addProcessedElement(r[o], o + 1)
                        }
                        for (this.removeTransformFromStyleList(), this.closeStyles(m), u = d.length, o = 0; o < u; o += 1) d[o].closed = !0
                    }, CVShapeElement.prototype.renderInnerContent = function() {
                        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                    }, CVShapeElement.prototype.renderShapeTransform = function(r, i) {
                        (r._opMdf || i.op._mdf || this._isFirstFrame) && (i.opacity = r.opacity, i.opacity *= i.op.v, i._opMdf = !0)
                    }, CVShapeElement.prototype.drawLayer = function() {
                        var r, i, a, s, n, o, h, l, p, c = this.stylesList.length,
                            f = this.globalData.renderer,
                            u = this.globalData.canvasContext;
                        for (r = 0; r < c; r += 1)
                            if (("st" !== (l = (p = this.stylesList[r]).type) && "gs" !== l || 0 !== p.wi) && p.data._shouldRender && 0 !== p.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                                for (f.save(), o = p.elements, "st" === l || "gs" === l ? (u.strokeStyle = "st" === l ? p.co : p.grd, u.lineWidth = p.wi, u.lineCap = p.lc, u.lineJoin = p.lj, u.miterLimit = p.ml || 0) : u.fillStyle = "fl" === l ? p.co : p.grd, f.ctxOpacity(p.coOp), "st" !== l && "gs" !== l && u.beginPath(), f.ctxTransform(p.preTransforms.finalTransform.props), a = o.length, i = 0; i < a; i += 1) {
                                    for ("st" !== l && "gs" !== l || (u.beginPath(), p.da && (u.setLineDash(p.da), u.lineDashOffset = p.do)), n = (h = o[i].trNodes).length, s = 0; s < n; s += 1) "m" === h[s].t ? u.moveTo(h[s].p[0], h[s].p[1]) : "c" === h[s].t ? u.bezierCurveTo(h[s].pts[0], h[s].pts[1], h[s].pts[2], h[s].pts[3], h[s].pts[4], h[s].pts[5]) : u.closePath();
                                    "st" !== l && "gs" !== l || (u.stroke(), p.da && u.setLineDash(this.dashResetter))
                                }
                                "st" !== l && "gs" !== l && u.fill(p.r), f.restore()
                            }
                    }, CVShapeElement.prototype.renderShape = function(r, i, a, s) {
                        var n, o;
                        for (o = r, n = i.length - 1; n >= 0; n -= 1) "tr" === i[n].ty ? (o = a[n].transform, this.renderShapeTransform(r, o)) : "sh" === i[n].ty || "el" === i[n].ty || "rc" === i[n].ty || "sr" === i[n].ty ? this.renderPath(i[n], a[n]) : "fl" === i[n].ty ? this.renderFill(i[n], a[n], o) : "st" === i[n].ty ? this.renderStroke(i[n], a[n], o) : "gf" === i[n].ty || "gs" === i[n].ty ? this.renderGradientFill(i[n], a[n], o) : "gr" === i[n].ty ? this.renderShape(o, i[n].it, a[n].it) : i[n].ty;
                        s && this.drawLayer()
                    }, CVShapeElement.prototype.renderStyledShape = function(r, i) {
                        if (this._isFirstFrame || i._mdf || r.transforms._mdf) {
                            var a, s, n, o = r.trNodes,
                                h = i.paths,
                                l = h._length;
                            o.length = 0;
                            var p = r.transforms.finalTransform;
                            for (n = 0; n < l; n += 1) {
                                var c = h.shapes[n];
                                if (c && c.v) {
                                    for (s = c._length, a = 1; a < s; a += 1) 1 === a && o.push({
                                        t: "m",
                                        p: p.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                    }), o.push({
                                        t: "c",
                                        pts: p.applyToTriplePoints(c.o[a - 1], c.i[a], c.v[a])
                                    });
                                    1 === s && o.push({
                                        t: "m",
                                        p: p.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                    }), c.c && s && (o.push({
                                        t: "c",
                                        pts: p.applyToTriplePoints(c.o[a - 1], c.i[0], c.v[0])
                                    }), o.push({
                                        t: "z"
                                    }))
                                }
                            }
                            r.trNodes = o
                        }
                    }, CVShapeElement.prototype.renderPath = function(r, i) {
                        if (!0 !== r.hd && r._shouldRender) {
                            var a, s = i.styledShapes.length;
                            for (a = 0; a < s; a += 1) this.renderStyledShape(i.styledShapes[a], i.sh)
                        }
                    }, CVShapeElement.prototype.renderFill = function(r, i, a) {
                        var s = i.style;
                        (i.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")"), (i.o._mdf || a._opMdf || this._isFirstFrame) && (s.coOp = i.o.v * a.opacity)
                    }, CVShapeElement.prototype.renderGradientFill = function(r, i, a) {
                        var s, n = i.style;
                        if (!n.grd || i.g._mdf || i.s._mdf || i.e._mdf || 1 !== r.t && (i.h._mdf || i.a._mdf)) {
                            var o, h = this.globalData.canvasContext,
                                l = i.s.v,
                                p = i.e.v;
                            if (1 === r.t) s = h.createLinearGradient(l[0], l[1], p[0], p[1]);
                            else {
                                var c = Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)),
                                    f = Math.atan2(p[1] - l[1], p[0] - l[0]),
                                    u = i.h.v;
                                u >= 1 ? u = .99 : u <= -1 && (u = -.99);
                                var m = c * u,
                                    d = Math.cos(f + i.a.v) * m + l[0],
                                    y = Math.sin(f + i.a.v) * m + l[1];
                                s = h.createRadialGradient(d, y, 0, l[0], l[1], c)
                            }
                            var g = r.g.p,
                                v = i.g.c,
                                b = 1;
                            for (o = 0; o < g; o += 1) i.g._hasOpacity && i.g._collapsable && (b = i.g.o[2 * o + 1]), s.addColorStop(v[4 * o] / 100, "rgba(" + v[4 * o + 1] + "," + v[4 * o + 2] + "," + v[4 * o + 3] + "," + b + ")");
                            n.grd = s
                        }
                        n.coOp = i.o.v * a.opacity
                    }, CVShapeElement.prototype.renderStroke = function(r, i, a) {
                        var s = i.style,
                            n = i.d;
                        n && (n._mdf || this._isFirstFrame) && (s.da = n.dashArray, s.do = n.dashoffset[0]), (i.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")"), (i.o._mdf || a._opMdf || this._isFirstFrame) && (s.coOp = i.o.v * a.opacity), (i.w._mdf || this._isFirstFrame) && (s.wi = i.w.v)
                    }, CVShapeElement.prototype.destroy = function() {
                        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                        var r = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(r.l ? r.l.length : 0);
                        var i = !1;
                        r.fc ? (i = !0, this.values.fill = this.buildColor(r.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = i;
                        var a = !1;
                        r.sc && (a = !0, this.values.stroke = this.buildColor(r.sc), this.values.sWidth = r.sw);
                        var s, n, o, h, l, p, c, f, u, m, d, y, g = this.globalData.fontManager.getFontByName(r.f),
                            v = r.l,
                            b = this.mHelper;
                        this.stroke = a, this.values.fValue = r.finalSize + "px " + this.globalData.fontManager.getFontByName(r.f).fFamily, n = r.finalText.length;
                        var x = this.data.singleShape,
                            _ = .001 * r.tr * r.finalSize,
                            E = 0,
                            S = 0,
                            P = !0,
                            C = 0;
                        for (s = 0; s < n; s += 1) {
                            h = (o = this.globalData.fontManager.getCharData(r.finalText[s], g.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && o.data || {}, b.reset(), x && v[s].n && (E = -_, S += r.yOffset, S += P ? 1 : 0, P = !1), u = (c = h.shapes ? h.shapes[0].it : []).length, b.scale(r.finalSize / 100, r.finalSize / 100), x && this.applyTextPropertiesToMatrix(r, b, v[s].line, E, S), d = createSizedArray(u - 1);
                            var w = 0;
                            for (f = 0; f < u; f += 1)
                                if ("sh" === c[f].ty) {
                                    for (p = c[f].ks.k.i.length, m = c[f].ks.k, y = [], l = 1; l < p; l += 1) 1 === l && y.push(b.applyToX(m.v[0][0], m.v[0][1], 0), b.applyToY(m.v[0][0], m.v[0][1], 0)), y.push(b.applyToX(m.o[l - 1][0], m.o[l - 1][1], 0), b.applyToY(m.o[l - 1][0], m.o[l - 1][1], 0), b.applyToX(m.i[l][0], m.i[l][1], 0), b.applyToY(m.i[l][0], m.i[l][1], 0), b.applyToX(m.v[l][0], m.v[l][1], 0), b.applyToY(m.v[l][0], m.v[l][1], 0));
                                    y.push(b.applyToX(m.o[l - 1][0], m.o[l - 1][1], 0), b.applyToY(m.o[l - 1][0], m.o[l - 1][1], 0), b.applyToX(m.i[0][0], m.i[0][1], 0), b.applyToY(m.i[0][0], m.i[0][1], 0), b.applyToX(m.v[0][0], m.v[0][1], 0), b.applyToY(m.v[0][0], m.v[0][1], 0)), d[w] = y, w += 1
                                }
                            x && (E += v[s].l, E += _), this.textSpans[C] ? this.textSpans[C].elem = d : this.textSpans[C] = {
                                elem: d
                            }, C += 1
                        }
                    }, CVTextElement.prototype.renderInnerContent = function() {
                        var r, i, a, s, n, o, h = this.canvasContext;
                        h.font = this.values.fValue, h.lineCap = "butt", h.lineJoin = "miter", h.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                        var l, p = this.textAnimator.renderedLetters,
                            c = this.textProperty.currentData.l;
                        i = c.length;
                        var f, u, m = null,
                            d = null,
                            y = null;
                        for (r = 0; r < i; r += 1)
                            if (!c[r].n) {
                                if ((l = p[r]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(l.p), this.globalData.renderer.ctxOpacity(l.o)), this.fill) {
                                    for (l && l.fc ? m !== l.fc && (m = l.fc, h.fillStyle = l.fc) : m !== this.values.fill && (m = this.values.fill, h.fillStyle = this.values.fill), s = (f = this.textSpans[r].elem).length, this.globalData.canvasContext.beginPath(), a = 0; a < s; a += 1)
                                        for (o = (u = f[a]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), n = 2; n < o; n += 6) this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
                                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                                }
                                if (this.stroke) {
                                    for (l && l.sw ? y !== l.sw && (y = l.sw, h.lineWidth = l.sw) : y !== this.values.sWidth && (y = this.values.sWidth, h.lineWidth = this.values.sWidth), l && l.sc ? d !== l.sc && (d = l.sc, h.strokeStyle = l.sc) : d !== this.values.stroke && (d = this.values.stroke, h.strokeStyle = this.values.stroke), s = (f = this.textSpans[r].elem).length, this.globalData.canvasContext.beginPath(), a = 0; a < s; a += 1)
                                        for (o = (u = f[a]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), n = 2; n < o; n += 6) this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
                                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                                }
                                l && this.globalData.renderer.restore()
                            }
                    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                            var r = createTag("canvas");
                            r.width = this.assetData.w, r.height = this.assetData.h;
                            var i, a, s = r.getContext("2d"),
                                n = this.img.width,
                                o = this.img.height,
                                h = n / o,
                                l = this.assetData.w / this.assetData.h,
                                p = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                            h > l && "xMidYMid slice" === p || h < l && "xMidYMid slice" !== p ? i = (a = o) * l : a = (i = n) / l, s.drawImage(this.img, (n - i) / 2, (o - a) / 2, i, a, 0, 0, this.assetData.w, this.assetData.h), this.img = r
                        }
                    }, CVImageElement.prototype.renderInnerContent = function() {
                        this.canvasContext.drawImage(this.img, 0, 0)
                    }, CVImageElement.prototype.destroy = function() {
                        this.img = null
                    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                        var r = this.canvasContext;
                        r.fillStyle = this.data.sc, r.fillRect(0, 0, this.data.sw, this.data.sh)
                    }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(r) {
                        return new CVShapeElement(r, this.globalData, this)
                    }, CanvasRendererBase.prototype.createText = function(r) {
                        return new CVTextElement(r, this.globalData, this)
                    }, CanvasRendererBase.prototype.createImage = function(r) {
                        return new CVImageElement(r, this.globalData, this)
                    }, CanvasRendererBase.prototype.createSolid = function(r) {
                        return new CVSolidElement(r, this.globalData, this)
                    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(r) {
                        if (1 !== r[0] || 0 !== r[1] || 0 !== r[4] || 1 !== r[5] || 0 !== r[12] || 0 !== r[13])
                            if (this.renderConfig.clearCanvas) {
                                this.transformMat.cloneFromProps(r);
                                var i = this.contextData.getTransform(),
                                    a = i.props;
                                this.transformMat.transform(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]), i.cloneFromProps(this.transformMat.props);
                                var s = i.props;
                                this.canvasContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13])
                            } else this.canvasContext.transform(r[0], r[1], r[4], r[5], r[12], r[13])
                    }, CanvasRendererBase.prototype.ctxOpacity = function(r) {
                        var i = this.contextData.getOpacity();
                        if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= r < 0 ? 0 : r, void(this.globalData.currentGlobalAlpha = i);
                        i *= r < 0 ? 0 : r, this.contextData.setOpacity(i), this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                    }, CanvasRendererBase.prototype.reset = function() {
                        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                    }, CanvasRendererBase.prototype.save = function(r) {
                        this.renderConfig.clearCanvas ? (r && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
                    }, CanvasRendererBase.prototype.restore = function(r) {
                        if (this.renderConfig.clearCanvas) {
                            r && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                            var i = this.contextData.pop(),
                                a = i.transform,
                                s = i.opacity;
                            this.canvasContext.setTransform(a[0], a[1], a[4], a[5], a[12], a[13]), this.globalData.currentGlobalAlpha !== s && (this.canvasContext.globalAlpha = s, this.globalData.currentGlobalAlpha = s)
                        } else this.canvasContext.restore()
                    }, CanvasRendererBase.prototype.configAnimation = function(r) {
                        if (this.animationItem.wrapper) {
                            this.animationItem.container = createTag("canvas");
                            var i = this.animationItem.container.style;
                            i.width = "100%", i.height = "100%";
                            var a = "0px 0px 0px";
                            i.transformOrigin = a, i.mozTransformOrigin = a, i.webkitTransformOrigin = a, i["-webkit-transform"] = a, i.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                        } else this.canvasContext = this.renderConfig.context;
                        this.data = r, this.layers = r.layers, this.transformCanvas = {
                            w: r.w,
                            h: r.h,
                            sx: 0,
                            sy: 0,
                            tx: 0,
                            ty: 0
                        }, this.setupGlobalData(r, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(r.layers.length), this.updateContainerSize()
                    }, CanvasRendererBase.prototype.updateContainerSize = function(r, i) {
                        var a, s, n, o;
                        if (this.reset(), r ? (a = r, s = i, this.canvasContext.canvas.width = a, this.canvasContext.canvas.height = s) : (this.animationItem.wrapper && this.animationItem.container ? (a = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight) : (a = this.canvasContext.canvas.width, s = this.canvasContext.canvas.height), this.canvasContext.canvas.width = a * this.renderConfig.dpr, this.canvasContext.canvas.height = s * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                            var h = this.renderConfig.preserveAspectRatio.split(" "),
                                l = h[1] || "meet",
                                p = h[0] || "xMidYMid",
                                c = p.substr(0, 4),
                                f = p.substr(4);
                            n = a / s, (o = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === l || o < n && "slice" === l ? (this.transformCanvas.sx = a / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = a / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === c && (o < n && "meet" === l || o > n && "slice" === l) ? (a - this.transformCanvas.w * (s / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === c && (o < n && "meet" === l || o > n && "slice" === l) ? (a - this.transformCanvas.w * (s / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === f && (o > n && "meet" === l || o < n && "slice" === l) ? (s - this.transformCanvas.h * (a / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === f && (o > n && "meet" === l || o < n && "slice" === l) ? (s - this.transformCanvas.h * (a / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                        } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = a / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                    }, CanvasRendererBase.prototype.destroy = function() {
                        var r;
                        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), r = (this.layers ? this.layers.length : 0) - 1; r >= 0; r -= 1) this.elements[r] && this.elements[r].destroy();
                        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                    }, CanvasRendererBase.prototype.renderFrame = function(r, i) {
                        if ((this.renderedFrame !== r || !0 !== this.renderConfig.clearCanvas || i) && !this.destroyed && -1 !== r) {
                            var a;
                            this.renderedFrame = r, this.globalData.frameNum = r - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || i, this.globalData.projectInterface.currentFrame = r;
                            var s = this.layers.length;
                            for (this.completeLayers || this.checkLayers(r), a = 0; a < s; a += 1)(this.completeLayers || this.elements[a]) && this.elements[a].prepareFrame(r - this.layers[a].st);
                            if (this.globalData._mdf) {
                                for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), a = s - 1; a >= 0; a -= 1)(this.completeLayers || this.elements[a]) && this.elements[a].renderFrame();
                                !0 !== this.renderConfig.clearCanvas && this.restore()
                            }
                        }
                    }, CanvasRendererBase.prototype.buildItem = function(r) {
                        var i = this.elements;
                        if (!i[r] && 99 !== this.layers[r].ty) {
                            var a = this.createItem(this.layers[r], this, this.globalData);
                            i[r] = a, a.initExpressions()
                        }
                    }, CanvasRendererBase.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                    }, CanvasRendererBase.prototype.hide = function() {
                        this.animationItem.container.style.display = "none"
                    }, CanvasRendererBase.prototype.show = function() {
                        this.animationItem.container.style.display = "block"
                    }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                        var r, i = this.canvasContext;
                        for (i.beginPath(), i.moveTo(0, 0), i.lineTo(this.data.w, 0), i.lineTo(this.data.w, this.data.h), i.lineTo(0, this.data.h), i.lineTo(0, 0), i.clip(), r = this.layers.length - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame()
                    }, CVCompElement.prototype.destroy = function() {
                        var r;
                        for (r = this.layers.length - 1; r >= 0; r -= 1) this.elements[r] && this.elements[r].destroy();
                        this.layers = null, this.elements = null
                    }, CVCompElement.prototype.createComp = function(r) {
                        return new CVCompElement(r, this.globalData, this)
                    }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(r) {
                        return new CVCompElement(r, this.globalData, this)
                    }, HBaseElement.prototype = {
                        checkBlendMode: function() {},
                        initRendererElement: function() {
                            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                        },
                        createContainerElements: function() {
                            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            var r = this.transformedElement ? this.transformedElement.style : {};
                            if (this.finalTransform._matMdf) {
                                var i = this.finalTransform.mat.toCSS();
                                r.transform = i, r.webkitTransform = i
                            }
                            this.finalTransform._opMdf && (r.opacity = this.finalTransform.mProp.o.v)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        destroy: function() {
                            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData)
                        },
                        addEffects: function() {},
                        setMatte: function() {}
                    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                        var r;
                        this.data.hasMask ? ((r = createNS("rect")).setAttribute("width", this.data.sw), r.setAttribute("height", this.data.sh), r.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((r = createTag("div")).style.width = this.data.sw + "px", r.style.height = this.data.sh + "px", r.style.backgroundColor = this.data.sc), this.layerElement.appendChild(r)
                    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                        var r;
                        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), r = this.svgElement;
                        else {
                            r = createNS("svg");
                            var i = this.comp.data ? this.comp.data : this.globalData.compSize;
                            r.setAttribute("width", i.w), r.setAttribute("height", i.h), r.appendChild(this.shapesContainer), this.layerElement.appendChild(r)
                        }
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = r
                    }, HShapeElement.prototype.getTransformedPoint = function(r, i) {
                        var a, s = r.length;
                        for (a = 0; a < s; a += 1) i = r[a].mProps.v.applyToPointArray(i[0], i[1], 0);
                        return i
                    }, HShapeElement.prototype.calculateShapeBoundingBox = function(r, i) {
                        var a, s, n, o, h, l = r.sh.v,
                            p = r.transformers,
                            c = l._length;
                        if (!(c <= 1)) {
                            for (a = 0; a < c - 1; a += 1) s = this.getTransformedPoint(p, l.v[a]), n = this.getTransformedPoint(p, l.o[a]), o = this.getTransformedPoint(p, l.i[a + 1]), h = this.getTransformedPoint(p, l.v[a + 1]), this.checkBounds(s, n, o, h, i);
                            l.c && (s = this.getTransformedPoint(p, l.v[a]), n = this.getTransformedPoint(p, l.o[a]), o = this.getTransformedPoint(p, l.i[0]), h = this.getTransformedPoint(p, l.v[0]), this.checkBounds(s, n, o, h, i))
                        }
                    }, HShapeElement.prototype.checkBounds = function(r, i, a, s, n) {
                        this.getBoundsOfCurve(r, i, a, s);
                        var o = this.shapeBoundingBox;
                        n.x = bmMin(o.left, n.x), n.xMax = bmMax(o.right, n.xMax), n.y = bmMin(o.top, n.y), n.yMax = bmMax(o.bottom, n.yMax)
                    }, HShapeElement.prototype.shapeBoundingBox = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, HShapeElement.prototype.tempBoundingBox = {
                        x: 0,
                        xMax: 0,
                        y: 0,
                        yMax: 0,
                        width: 0,
                        height: 0
                    }, HShapeElement.prototype.getBoundsOfCurve = function(r, i, a, s) {
                        for (var n, o, h, l, p, c, f, u = [
                                [r[0], s[0]],
                                [r[1], s[1]]
                            ], m = 0; m < 2; ++m) o = 6 * r[m] - 12 * i[m] + 6 * a[m], n = -3 * r[m] + 9 * i[m] - 9 * a[m] + 3 * s[m], h = 3 * i[m] - 3 * r[m], o |= 0, h |= 0, 0 == (n |= 0) && 0 === o || (0 === n ? (l = -h / o) > 0 && l < 1 && u[m].push(this.calculateF(l, r, i, a, s, m)) : (p = o * o - 4 * h * n) >= 0 && ((c = (-o + bmSqrt(p)) / (2 * n)) > 0 && c < 1 && u[m].push(this.calculateF(c, r, i, a, s, m)), (f = (-o - bmSqrt(p)) / (2 * n)) > 0 && f < 1 && u[m].push(this.calculateF(f, r, i, a, s, m))));
                        this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
                    }, HShapeElement.prototype.calculateF = function(r, i, a, s, n, o) {
                        return bmPow(1 - r, 3) * i[o] + 3 * bmPow(1 - r, 2) * r * a[o] + 3 * (1 - r) * bmPow(r, 2) * s[o] + bmPow(r, 3) * n[o]
                    }, HShapeElement.prototype.calculateBoundingBox = function(r, i) {
                        var a, s = r.length;
                        for (a = 0; a < s; a += 1) r[a] && r[a].sh ? this.calculateShapeBoundingBox(r[a], i) : r[a] && r[a].it ? this.calculateBoundingBox(r[a].it, i) : r[a] && r[a].style && r[a].w && this.expandStrokeBoundingBox(r[a].w, i)
                    }, HShapeElement.prototype.expandStrokeBoundingBox = function(r, i) {
                        var a = 0;
                        if (r.keyframes) {
                            for (var s = 0; s < r.keyframes.length; s += 1) {
                                var n = r.keyframes[s].s;
                                n > a && (a = n)
                            }
                            a *= r.mult
                        } else a = r.v * r.mult;
                        i.x -= a, i.xMax += a, i.y -= a, i.yMax += a
                    }, HShapeElement.prototype.currentBoxContains = function(r) {
                        return this.currentBBox.x <= r.x && this.currentBBox.y <= r.y && this.currentBBox.width + this.currentBBox.x >= r.x + r.width && this.currentBBox.height + this.currentBBox.y >= r.y + r.height
                    }, HShapeElement.prototype.renderInnerContent = function() {
                        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var r = this.tempBoundingBox,
                                i = 999999;
                            if (r.x = i, r.xMax = -i, r.y = i, r.yMax = -i, this.calculateBoundingBox(this.itemsData, r), r.width = r.xMax < r.x ? 0 : r.xMax - r.x, r.height = r.yMax < r.y ? 0 : r.yMax - r.y, this.currentBoxContains(r)) return;
                            var a = !1;
                            if (this.currentBBox.w !== r.width && (this.currentBBox.w = r.width, this.shapeCont.setAttribute("width", r.width), a = !0), this.currentBBox.h !== r.height && (this.currentBBox.h = r.height, this.shapeCont.setAttribute("height", r.height), a = !0), a || this.currentBBox.x !== r.x || this.currentBBox.y !== r.y) {
                                this.currentBBox.w = r.width, this.currentBBox.h = r.height, this.currentBBox.x = r.x, this.currentBBox.y = r.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                var s = this.shapeCont.style,
                                    n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                s.transform = n, s.webkitTransform = n
                            }
                        }
                    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                        if (this.isMasked = this.checkMasks(), this.isMasked) {
                            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                            var r = createNS("g");
                            this.maskedElement.appendChild(r), this.innerElem = r
                        } else this.renderType = "html", this.innerElem = this.layerElement;
                        this.checkParenting()
                    }, HTextElement.prototype.buildNewText = function() {
                        var r = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(r.l ? r.l.length : 0);
                        var i = this.innerElem.style,
                            a = r.fc ? this.buildColor(r.fc) : "rgba(0,0,0,0)";
                        i.fill = a, i.color = a, r.sc && (i.stroke = this.buildColor(r.sc), i.strokeWidth = r.sw + "px");
                        var s, n, o = this.globalData.fontManager.getFontByName(r.f);
                        if (!this.globalData.fontManager.chars)
                            if (i.fontSize = r.finalSize + "px", i.lineHeight = r.finalSize + "px", o.fClass) this.innerElem.className = o.fClass;
                            else {
                                i.fontFamily = o.fFamily;
                                var h = r.fWeight,
                                    l = r.fStyle;
                                i.fontStyle = l, i.fontWeight = h
                            }
                        var p, c, f, u = r.l;
                        n = u.length;
                        var m, d = this.mHelper,
                            y = "",
                            g = 0;
                        for (s = 0; s < n; s += 1) {
                            if (this.globalData.fontManager.chars ? (this.textPaths[g] ? p = this.textPaths[g] : ((p = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), p.setAttribute("stroke-linejoin", lineJoinEnum[2]), p.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[g] ? f = (c = this.textSpans[g]).children[0] : ((c = createTag("div")).style.lineHeight = 0, (f = createNS("svg")).appendChild(p), styleDiv(c)))) : this.isMasked ? p = this.textPaths[g] ? this.textPaths[g] : createNS("text") : this.textSpans[g] ? (c = this.textSpans[g], p = this.textPaths[g]) : (styleDiv(c = createTag("span")), styleDiv(p = createTag("span")), c.appendChild(p)), this.globalData.fontManager.chars) {
                                var v, b = this.globalData.fontManager.getCharData(r.finalText[s], o.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                                if (v = b ? b.data : null, d.reset(), v && v.shapes && v.shapes.length && (m = v.shapes[0].it, d.scale(r.finalSize / 100, r.finalSize / 100), y = this.createPathShape(d, m), p.setAttribute("d", y)), this.isMasked) this.innerElem.appendChild(p);
                                else {
                                    if (this.innerElem.appendChild(c), v && v.shapes) {
                                        document.body.appendChild(f);
                                        var x = f.getBBox();
                                        f.setAttribute("width", x.width + 2), f.setAttribute("height", x.height + 2), f.setAttribute("viewBox", x.x - 1 + " " + (x.y - 1) + " " + (x.width + 2) + " " + (x.height + 2));
                                        var _ = f.style,
                                            E = "translate(" + (x.x - 1) + "px," + (x.y - 1) + "px)";
                                        _.transform = E, _.webkitTransform = E, u[s].yOffset = x.y - 1
                                    } else f.setAttribute("width", 1), f.setAttribute("height", 1);
                                    c.appendChild(f)
                                }
                            } else if (p.textContent = u[s].val, p.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(p);
                            else {
                                this.innerElem.appendChild(c);
                                var S = p.style,
                                    P = "translate3d(0," + -r.finalSize / 1.2 + "px,0)";
                                S.transform = P, S.webkitTransform = P
                            }
                            this.isMasked ? this.textSpans[g] = p : this.textSpans[g] = c, this.textSpans[g].style.display = "block", this.textPaths[g] = p, g += 1
                        }
                        for (; g < this.textSpans.length;) this.textSpans[g].style.display = "none", g += 1
                    }, HTextElement.prototype.renderInnerContent = function() {
                        var r;
                        if (this.data.singleShape) {
                            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                            if (this.isMasked && this.finalTransform._matMdf) {
                                this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), r = this.svgElement.style;
                                var i = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                                r.transform = i, r.webkitTransform = i
                            }
                        }
                        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                            var a, s, n, o, h, l = 0,
                                p = this.textAnimator.renderedLetters,
                                c = this.textProperty.currentData.l;
                            for (s = c.length, a = 0; a < s; a += 1) c[a].n ? l += 1 : (o = this.textSpans[a], h = this.textPaths[a], n = p[l], l += 1, n._mdf.m && (this.isMasked ? o.setAttribute("transform", n.m) : (o.style.webkitTransform = n.m, o.style.transform = n.m)), o.style.opacity = n.o, n.sw && n._mdf.sw && h.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && h.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (h.setAttribute("fill", n.fc), h.style.color = n.fc));
                            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var f = this.innerElem.getBBox();
                                if (this.currentBBox.w !== f.width && (this.currentBBox.w = f.width, this.svgElement.setAttribute("width", f.width)), this.currentBBox.h !== f.height && (this.currentBBox.h = f.height, this.svgElement.setAttribute("height", f.height)), this.currentBBox.w !== f.width + 2 || this.currentBBox.h !== f.height + 2 || this.currentBBox.x !== f.x - 1 || this.currentBBox.y !== f.y - 1) {
                                    this.currentBBox.w = f.width + 2, this.currentBBox.h = f.height + 2, this.currentBBox.x = f.x - 1, this.currentBBox.y = f.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), r = this.svgElement.style;
                                    var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    r.transform = u, r.webkitTransform = u
                                }
                            }
                        }
                    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                        var r, i, a, s, n = this.comp.threeDElements.length;
                        for (r = 0; r < n; r += 1)
                            if ("3d" === (i = this.comp.threeDElements[r]).type) {
                                a = i.perspectiveElem.style, s = i.container.style;
                                var o = this.pe.v + "px",
                                    h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                a.perspective = o, a.webkitPerspective = o, s.transformOrigin = "0px 0px 0px", s.mozTransformOrigin = "0px 0px 0px", s.webkitTransformOrigin = "0px 0px 0px", a.transform = h, a.webkitTransform = h
                            }
                    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                        var r, i, a = this._isFirstFrame;
                        if (this.hierarchy)
                            for (i = this.hierarchy.length, r = 0; r < i; r += 1) a = this.hierarchy[r].finalTransform.mProp._mdf || a;
                        if (a || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                            if (this.mat.reset(), this.hierarchy)
                                for (r = i = this.hierarchy.length - 1; r >= 0; r -= 1) {
                                    var s = this.hierarchy[r].finalTransform.mProp;
                                    this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                                }
                            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                var n;
                                n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                                var o = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                                    h = [n[0] / o, n[1] / o, n[2] / o],
                                    l = Math.sqrt(h[2] * h[2] + h[0] * h[0]),
                                    p = Math.atan2(h[1], l),
                                    c = Math.atan2(h[0], -h[2]);
                                this.mat.rotateY(c).rotateX(-p)
                            }
                            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                            var f = !this._prevMat.equals(this.mat);
                            if ((f || this.pe._mdf) && this.comp.threeDElements) {
                                var u, m, d;
                                for (i = this.comp.threeDElements.length, r = 0; r < i; r += 1)
                                    if ("3d" === (u = this.comp.threeDElements[r]).type) {
                                        if (f) {
                                            var y = this.mat.toCSS();
                                            (d = u.container.style).transform = y, d.webkitTransform = y
                                        }
                                        this.pe._mdf && ((m = u.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px")
                                    }
                                this.mat.clone(this._prevMat)
                            }
                        }
                        this._isFirstFrame = !1
                    }, HCameraElement.prototype.prepareFrame = function(r) {
                        this.prepareProperties(r, !0)
                    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                        return null
                    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                        var r = this.globalData.getAssetsPath(this.assetData),
                            i = new Image;
                        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(i), i.crossOrigin = "anonymous", i.src = r, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                    }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                    }, HybridRendererBase.prototype.appendElementInPos = function(r, i) {
                        var a = r.getBaseElement();
                        if (a) {
                            var s = this.layers[i];
                            if (s.ddd && this.supports3d) this.addTo3dContainer(a, i);
                            else if (this.threeDElements) this.addTo3dContainer(a, i);
                            else {
                                for (var n, o, h = 0; h < i;) this.elements[h] && !0 !== this.elements[h] && this.elements[h].getBaseElement && (o = this.elements[h], n = (this.layers[h].ddd ? this.getThreeDContainerByPos(h) : o.getBaseElement()) || n), h += 1;
                                n ? s.ddd && this.supports3d || this.layerElement.insertBefore(a, n) : s.ddd && this.supports3d || this.layerElement.appendChild(a)
                            }
                        }
                    }, HybridRendererBase.prototype.createShape = function(r) {
                        return this.supports3d ? new HShapeElement(r, this.globalData, this) : new SVGShapeElement(r, this.globalData, this)
                    }, HybridRendererBase.prototype.createText = function(r) {
                        return this.supports3d ? new HTextElement(r, this.globalData, this) : new SVGTextLottieElement(r, this.globalData, this)
                    }, HybridRendererBase.prototype.createCamera = function(r) {
                        return this.camera = new HCameraElement(r, this.globalData, this), this.camera
                    }, HybridRendererBase.prototype.createImage = function(r) {
                        return this.supports3d ? new HImageElement(r, this.globalData, this) : new IImageElement(r, this.globalData, this)
                    }, HybridRendererBase.prototype.createSolid = function(r) {
                        return this.supports3d ? new HSolidElement(r, this.globalData, this) : new ISolidElement(r, this.globalData, this)
                    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(r) {
                        for (var i = 0, a = this.threeDElements.length; i < a;) {
                            if (this.threeDElements[i].startPos <= r && this.threeDElements[i].endPos >= r) return this.threeDElements[i].perspectiveElem;
                            i += 1
                        }
                        return null
                    }, HybridRendererBase.prototype.createThreeDContainer = function(r, i) {
                        var a, s, n = createTag("div");
                        styleDiv(n);
                        var o = createTag("div");
                        if (styleDiv(o), "3d" === i) {
                            (a = n.style).width = this.globalData.compSize.w + "px", a.height = this.globalData.compSize.h + "px", a.webkitTransformOrigin = "50% 50%", a.mozTransformOrigin = "50% 50%", a.transformOrigin = "50% 50%";
                            var h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            (s = o.style).transform = h, s.webkitTransform = h
                        }
                        n.appendChild(o);
                        var l = {
                            container: o,
                            perspectiveElem: n,
                            startPos: r,
                            endPos: r,
                            type: i
                        };
                        return this.threeDElements.push(l), l
                    }, HybridRendererBase.prototype.build3dContainers = function() {
                        var r, i, a = this.layers.length,
                            s = "";
                        for (r = 0; r < a; r += 1) this.layers[r].ddd && 3 !== this.layers[r].ty ? ("3d" !== s && (s = "3d", i = this.createThreeDContainer(r, "3d")), i.endPos = Math.max(i.endPos, r)) : ("2d" !== s && (s = "2d", i = this.createThreeDContainer(r, "2d")), i.endPos = Math.max(i.endPos, r));
                        for (r = (a = this.threeDElements.length) - 1; r >= 0; r -= 1) this.resizerElem.appendChild(this.threeDElements[r].perspectiveElem)
                    }, HybridRendererBase.prototype.addTo3dContainer = function(r, i) {
                        for (var a = 0, s = this.threeDElements.length; a < s;) {
                            if (i <= this.threeDElements[a].endPos) {
                                for (var n, o = this.threeDElements[a].startPos; o < i;) this.elements[o] && this.elements[o].getBaseElement && (n = this.elements[o].getBaseElement()), o += 1;
                                n ? this.threeDElements[a].container.insertBefore(r, n) : this.threeDElements[a].container.appendChild(r);
                                break
                            }
                            a += 1
                        }
                    }, HybridRendererBase.prototype.configAnimation = function(r) {
                        var i = createTag("div"),
                            a = this.animationItem.wrapper,
                            s = i.style;
                        s.width = r.w + "px", s.height = r.h + "px", this.resizerElem = i, styleDiv(i), s.transformStyle = "flat", s.mozTransformStyle = "flat", s.webkitTransformStyle = "flat", this.renderConfig.className && i.setAttribute("class", this.renderConfig.className), a.appendChild(i), s.overflow = "hidden";
                        var n = createNS("svg");
                        n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
                        var o = createNS("defs");
                        n.appendChild(o), this.data = r, this.setupGlobalData(r, n), this.globalData.defs = o, this.layers = r.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                    }, HybridRendererBase.prototype.destroy = function() {
                        var r;
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                        var i = this.layers ? this.layers.length : 0;
                        for (r = 0; r < i; r += 1) this.elements[r].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, HybridRendererBase.prototype.updateContainerSize = function() {
                        var r, i, a, s, n = this.animationItem.wrapper.offsetWidth,
                            o = this.animationItem.wrapper.offsetHeight,
                            h = n / o;
                        this.globalData.compSize.w / this.globalData.compSize.h > h ? (r = n / this.globalData.compSize.w, i = n / this.globalData.compSize.w, a = 0, s = (o - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (r = o / this.globalData.compSize.h, i = o / this.globalData.compSize.h, a = (n - this.globalData.compSize.w * (o / this.globalData.compSize.h)) / 2, s = 0);
                        var l = this.resizerElem.style;
                        l.webkitTransform = "matrix3d(" + r + ",0,0,0,0," + i + ",0,0,0,0,1,0," + a + "," + s + ",0,1)", l.transform = l.webkitTransform
                    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                        this.resizerElem.style.display = "none"
                    }, HybridRendererBase.prototype.show = function() {
                        this.resizerElem.style.display = "block"
                    }, HybridRendererBase.prototype.initItems = function() {
                        if (this.buildAllItems(), this.camera) this.camera.setup();
                        else {
                            var r, i = this.globalData.compSize.w,
                                a = this.globalData.compSize.h,
                                s = this.threeDElements.length;
                            for (r = 0; r < s; r += 1) {
                                var n = this.threeDElements[r].perspectiveElem.style;
                                n.webkitPerspective = Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2)) + "px", n.perspective = n.webkitPerspective
                            }
                        }
                    }, HybridRendererBase.prototype.searchExtraCompositions = function(r) {
                        var i, a = r.length,
                            s = createTag("div");
                        for (i = 0; i < a; i += 1)
                            if (r[i].xt) {
                                var n = this.createComp(r[i], s, this.globalData.comp, null);
                                n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                            }
                    }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                    }, HCompElement.prototype.addTo3dContainer = function(r, i) {
                        for (var a, s = 0; s < i;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                        a ? this.layerElement.insertBefore(r, a) : this.layerElement.appendChild(r)
                    }, HCompElement.prototype.createComp = function(r) {
                        return this.supports3d ? new HCompElement(r, this.globalData, this) : new SVGCompElement(r, this.globalData, this)
                    }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(r) {
                        return this.supports3d ? new HCompElement(r, this.globalData, this) : new SVGCompElement(r, this.globalData, this)
                    };
                    var CompExpressionInterface = function(r) {
                            function i(i) {
                                for (var a = 0, s = r.layers.length; a < s;) {
                                    if (r.layers[a].nm === i || r.layers[a].ind === i) return r.elements[a].layerInterface;
                                    a += 1
                                }
                                return null
                            }
                            return Object.defineProperty(i, "_name", {
                                value: r.data.nm
                            }), i.layer = i, i.pixelAspect = 1, i.height = r.data.h || r.globalData.compSize.h, i.width = r.data.w || r.globalData.compSize.w, i.pixelAspect = 1, i.frameDuration = 1 / r.globalData.frameRate, i.displayStartTime = 0, i.numLayers = r.layers.length, i
                        },
                        Expressions = function() {
                            var r = {
                                initExpressions: function(r) {
                                    var i = 0,
                                        a = [];
                                    r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = function() {
                                        i += 1
                                    }, r.renderer.globalData.popExpression = function() {
                                        0 == (i -= 1) && function() {
                                            var r, i = a.length;
                                            for (r = 0; r < i; r += 1) a[r].release();
                                            a.length = 0
                                        }()
                                    }, r.renderer.globalData.registerExpressionProperty = function(r) {
                                        -1 === a.indexOf(r) && a.push(r)
                                    }
                                }
                            };
                            return r
                        }(),
                        MaskManagerInterface = function() {
                            function r(r, i) {
                                this._mask = r, this._data = i
                            }
                            return Object.defineProperty(r.prototype, "maskPath", {
                                    get: function() {
                                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                    }
                                }), Object.defineProperty(r.prototype, "maskOpacity", {
                                    get: function() {
                                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                    }
                                }),
                                function(i) {
                                    var a, s = createSizedArray(i.viewData.length),
                                        n = i.viewData.length;
                                    for (a = 0; a < n; a += 1) s[a] = new r(i.viewData[a], i.masksProperties[a]);
                                    return function(r) {
                                        for (a = 0; a < n;) {
                                            if (i.masksProperties[a].nm === r) return s[a];
                                            a += 1
                                        }
                                        return null
                                    }
                                }
                        }(),
                        ExpressionPropertyInterface = function() {
                            var r = {
                                    pv: 0,
                                    v: 0,
                                    mult: 1
                                },
                                i = {
                                    pv: [0, 0, 0],
                                    v: [0, 0, 0],
                                    mult: 1
                                };

                            function a(r, i, a) {
                                Object.defineProperty(r, "velocity", {
                                    get: function() {
                                        return i.getVelocityAtTime(i.comp.currentFrame)
                                    }
                                }), r.numKeys = i.keyframes ? i.keyframes.length : 0, r.key = function(s) {
                                    if (!r.numKeys) return 0;
                                    var n;
                                    n = "s" in i.keyframes[s - 1] ? i.keyframes[s - 1].s : "e" in i.keyframes[s - 2] ? i.keyframes[s - 2].e : i.keyframes[s - 2].s;
                                    var o = "unidimensional" === a ? new Number(n) : Object.assign({}, n);
                                    return o.time = i.keyframes[s - 1].t / i.elem.comp.globalData.frameRate, o.value = "unidimensional" === a ? n[0] : n, o
                                }, r.valueAtTime = i.getValueAtTime, r.speedAtTime = i.getSpeedAtTime, r.velocityAtTime = i.getVelocityAtTime, r.propertyGroup = i.propertyGroup
                            }

                            function s() {
                                return r
                            }
                            return function(n) {
                                return n ? "unidimensional" === n.propType ? function(i) {
                                    i && "pv" in i || (i = r);
                                    var s = 1 / i.mult,
                                        n = i.pv * s,
                                        o = new Number(n);
                                    return o.value = n, a(o, i, "unidimensional"),
                                        function() {
                                            return i.k && i.getValue(), n = i.v * s, o.value !== n && ((o = new Number(n)).value = n, a(o, i, "unidimensional")), o
                                        }
                                }(n) : function(r) {
                                    r && "pv" in r || (r = i);
                                    var s = 1 / r.mult,
                                        n = r.data && r.data.l || r.pv.length,
                                        o = createTypedArray("float32", n),
                                        h = createTypedArray("float32", n);
                                    return o.value = h, a(o, r, "multidimensional"),
                                        function() {
                                            r.k && r.getValue();
                                            for (var i = 0; i < n; i += 1) h[i] = r.v[i] * s, o[i] = h[i];
                                            return o
                                        }
                                }(n) : s
                            }
                        }(),
                        TransformExpressionInterface = function(r) {
                            function i(r) {
                                switch (r) {
                                    case "scale":
                                    case "Scale":
                                    case "ADBE Scale":
                                    case 6:
                                        return i.scale;
                                    case "rotation":
                                    case "Rotation":
                                    case "ADBE Rotation":
                                    case "ADBE Rotate Z":
                                    case 10:
                                        return i.rotation;
                                    case "ADBE Rotate X":
                                        return i.xRotation;
                                    case "ADBE Rotate Y":
                                        return i.yRotation;
                                    case "position":
                                    case "Position":
                                    case "ADBE Position":
                                    case 2:
                                        return i.position;
                                    case "ADBE Position_0":
                                        return i.xPosition;
                                    case "ADBE Position_1":
                                        return i.yPosition;
                                    case "ADBE Position_2":
                                        return i.zPosition;
                                    case "anchorPoint":
                                    case "AnchorPoint":
                                    case "Anchor Point":
                                    case "ADBE AnchorPoint":
                                    case 1:
                                        return i.anchorPoint;
                                    case "opacity":
                                    case "Opacity":
                                    case 11:
                                        return i.opacity;
                                    default:
                                        return null
                                }
                            }
                            var a, s, n, o;
                            return Object.defineProperty(i, "rotation", {
                                get: ExpressionPropertyInterface(r.r || r.rz)
                            }), Object.defineProperty(i, "zRotation", {
                                get: ExpressionPropertyInterface(r.rz || r.r)
                            }), Object.defineProperty(i, "xRotation", {
                                get: ExpressionPropertyInterface(r.rx)
                            }), Object.defineProperty(i, "yRotation", {
                                get: ExpressionPropertyInterface(r.ry)
                            }), Object.defineProperty(i, "scale", {
                                get: ExpressionPropertyInterface(r.s)
                            }), r.p ? o = ExpressionPropertyInterface(r.p) : (a = ExpressionPropertyInterface(r.px), s = ExpressionPropertyInterface(r.py), r.pz && (n = ExpressionPropertyInterface(r.pz))), Object.defineProperty(i, "position", {
                                get: function() {
                                    return r.p ? o() : [a(), s(), n ? n() : 0]
                                }
                            }), Object.defineProperty(i, "xPosition", {
                                get: ExpressionPropertyInterface(r.px)
                            }), Object.defineProperty(i, "yPosition", {
                                get: ExpressionPropertyInterface(r.py)
                            }), Object.defineProperty(i, "zPosition", {
                                get: ExpressionPropertyInterface(r.pz)
                            }), Object.defineProperty(i, "anchorPoint", {
                                get: ExpressionPropertyInterface(r.a)
                            }), Object.defineProperty(i, "opacity", {
                                get: ExpressionPropertyInterface(r.o)
                            }), Object.defineProperty(i, "skew", {
                                get: ExpressionPropertyInterface(r.sk)
                            }), Object.defineProperty(i, "skewAxis", {
                                get: ExpressionPropertyInterface(r.sa)
                            }), Object.defineProperty(i, "orientation", {
                                get: ExpressionPropertyInterface(r.or)
                            }), i
                        },
                        LayerExpressionInterface = function() {
                            function r(r) {
                                var i = new Matrix;
                                return void 0 !== r ? this._elem.finalTransform.mProp.getValueAtTime(r).clone(i) : this._elem.finalTransform.mProp.applyToMatrix(i), i
                            }

                            function i(r, i) {
                                var a = this.getMatrix(i);
                                return a.props[12] = 0, a.props[13] = 0, a.props[14] = 0, this.applyPoint(a, r)
                            }

                            function a(r, i) {
                                var a = this.getMatrix(i);
                                return this.applyPoint(a, r)
                            }

                            function s(r, i) {
                                var a = this.getMatrix(i);
                                return a.props[12] = 0, a.props[13] = 0, a.props[14] = 0, this.invertPoint(a, r)
                            }

                            function n(r, i) {
                                var a = this.getMatrix(i);
                                return this.invertPoint(a, r)
                            }

                            function o(r, i) {
                                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var a, s = this._elem.hierarchy.length;
                                    for (a = 0; a < s; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(r)
                                }
                                return r.applyToPointArray(i[0], i[1], i[2] || 0)
                            }

                            function h(r, i) {
                                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var a, s = this._elem.hierarchy.length;
                                    for (a = 0; a < s; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(r)
                                }
                                return r.inversePoint(i)
                            }

                            function l(r) {
                                var i = new Matrix;
                                if (i.reset(), this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var a, s = this._elem.hierarchy.length;
                                    for (a = 0; a < s; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(i);
                                    return i.inversePoint(r)
                                }
                                return i.inversePoint(r)
                            }

                            function p() {
                                return [1, 1, 1, 1]
                            }
                            return function(c) {
                                var f;

                                function u(r) {
                                    switch (r) {
                                        case "ADBE Root Vectors Group":
                                        case "Contents":
                                        case 2:
                                            return u.shapeInterface;
                                        case 1:
                                        case 6:
                                        case "Transform":
                                        case "transform":
                                        case "ADBE Transform Group":
                                            return f;
                                        case 4:
                                        case "ADBE Effect Parade":
                                        case "effects":
                                        case "Effects":
                                            return u.effect;
                                        case "ADBE Text Properties":
                                            return u.textInterface;
                                        default:
                                            return null
                                    }
                                }
                                u.getMatrix = r, u.invertPoint = h, u.applyPoint = o, u.toWorld = a, u.toWorldVec = i, u.fromWorld = n, u.fromWorldVec = s, u.toComp = a, u.fromComp = l, u.sampleImage = p, u.sourceRectAtTime = c.sourceRectAtTime.bind(c), u._elem = c;
                                var m = getDescriptor(f = TransformExpressionInterface(c.finalTransform.mProp), "anchorPoint");
                                return Object.defineProperties(u, {
                                    hasParent: {
                                        get: function() {
                                            return c.hierarchy.length
                                        }
                                    },
                                    parent: {
                                        get: function() {
                                            return c.hierarchy[0].layerInterface
                                        }
                                    },
                                    rotation: getDescriptor(f, "rotation"),
                                    scale: getDescriptor(f, "scale"),
                                    position: getDescriptor(f, "position"),
                                    opacity: getDescriptor(f, "opacity"),
                                    anchorPoint: m,
                                    anchor_point: m,
                                    transform: {
                                        get: function() {
                                            return f
                                        }
                                    },
                                    active: {
                                        get: function() {
                                            return c.isInRange
                                        }
                                    }
                                }), u.startTime = c.data.st, u.index = c.data.ind, u.source = c.data.refId, u.height = 0 === c.data.ty ? c.data.h : 100, u.width = 0 === c.data.ty ? c.data.w : 100, u.inPoint = c.data.ip / c.comp.globalData.frameRate, u.outPoint = c.data.op / c.comp.globalData.frameRate, u._name = c.data.nm, u.registerMaskInterface = function(r) {
                                    u.mask = new MaskManagerInterface(r, c)
                                }, u.registerEffectsInterface = function(r) {
                                    u.effect = r
                                }, u
                            }
                        }(),
                        propertyGroupFactory = function(r, i) {
                            return function(a) {
                                return (a = void 0 === a ? 1 : a) <= 0 ? r : i(a - 1)
                            }
                        },
                        PropertyInterface = function(r, i) {
                            var a = {
                                _name: r
                            };
                            return function(r) {
                                return (r = void 0 === r ? 1 : r) <= 0 ? a : i(r - 1)
                            }
                        },
                        EffectsExpressionInterface = function() {
                            function r(a, s, n, o) {
                                function h(r) {
                                    for (var i = a.ef, s = 0, n = i.length; s < n;) {
                                        if (r === i[s].nm || r === i[s].mn || r === i[s].ix) return 5 === i[s].ty ? c[s] : c[s]();
                                        s += 1
                                    }
                                    throw new Error
                                }
                                var l, p = propertyGroupFactory(h, n),
                                    c = [],
                                    f = a.ef.length;
                                for (l = 0; l < f; l += 1) 5 === a.ef[l].ty ? c.push(r(a.ef[l], s.effectElements[l], s.effectElements[l].propertyGroup, o)) : c.push(i(s.effectElements[l], a.ef[l].ty, o, p));
                                return "ADBE Color Control" === a.mn && Object.defineProperty(h, "color", {
                                    get: function() {
                                        return c[0]()
                                    }
                                }), Object.defineProperties(h, {
                                    numProperties: {
                                        get: function() {
                                            return a.np
                                        }
                                    },
                                    _name: {
                                        value: a.nm
                                    },
                                    propertyGroup: {
                                        value: p
                                    }
                                }), h.enabled = 0 !== a.en, h.active = h.enabled, h
                            }

                            function i(r, i, a, s) {
                                var n = ExpressionPropertyInterface(r.p);
                                return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", s)),
                                    function() {
                                        return 10 === i ? a.comp.compInterface(r.p.v) : n()
                                    }
                            }
                            return {
                                createEffectsInterface: function(i, a) {
                                    if (i.effectsManager) {
                                        var s, n = [],
                                            o = i.data.ef,
                                            h = i.effectsManager.effectElements.length;
                                        for (s = 0; s < h; s += 1) n.push(r(o[s], i.effectsManager.effectElements[s], a, i));
                                        var l = i.data.ef || [],
                                            p = function(r) {
                                                for (s = 0, h = l.length; s < h;) {
                                                    if (r === l[s].nm || r === l[s].mn || r === l[s].ix) return n[s];
                                                    s += 1
                                                }
                                                return null
                                            };
                                        return Object.defineProperty(p, "numProperties", {
                                            get: function() {
                                                return l.length
                                            }
                                        }), p
                                    }
                                    return null
                                }
                            }
                        }(),
                        ShapePathInterface = function(r, i, a) {
                            var s = i.sh;

                            function n(r) {
                                return "Shape" === r || "shape" === r || "Path" === r || "path" === r || "ADBE Vector Shape" === r || 2 === r ? n.path : null
                            }
                            var o = propertyGroupFactory(n, a);
                            return s.setGroupProperty(PropertyInterface("Path", o)), Object.defineProperties(n, {
                                path: {
                                    get: function() {
                                        return s.k && s.getValue(), s
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return s.k && s.getValue(), s
                                    }
                                },
                                _name: {
                                    value: r.nm
                                },
                                ix: {
                                    value: r.ix
                                },
                                propertyIndex: {
                                    value: r.ix
                                },
                                mn: {
                                    value: r.mn
                                },
                                propertyGroup: {
                                    value: a
                                }
                            }), n
                        },
                        ShapeExpressionInterface = function() {
                            function r(r, h, m) {
                                var d, y = [],
                                    g = r ? r.length : 0;
                                for (d = 0; d < g; d += 1) "gr" === r[d].ty ? y.push(i(r[d], h[d], m)) : "fl" === r[d].ty ? y.push(a(r[d], h[d], m)) : "st" === r[d].ty ? y.push(n(r[d], h[d], m)) : "tm" === r[d].ty ? y.push(o(r[d], h[d], m)) : "tr" === r[d].ty || ("el" === r[d].ty ? y.push(l(r[d], h[d], m)) : "sr" === r[d].ty ? y.push(p(r[d], h[d], m)) : "sh" === r[d].ty ? y.push(ShapePathInterface(r[d], h[d], m)) : "rc" === r[d].ty ? y.push(c(r[d], h[d], m)) : "rd" === r[d].ty ? y.push(f(r[d], h[d], m)) : "rp" === r[d].ty ? y.push(u(r[d], h[d], m)) : "gf" === r[d].ty ? y.push(s(r[d], h[d], m)) : y.push((r[d], h[d], function() {
                                    return null
                                })));
                                return y
                            }

                            function i(i, a, s) {
                                var n = function(r) {
                                    switch (r) {
                                        case "ADBE Vectors Group":
                                        case "Contents":
                                        case 2:
                                            return n.content;
                                        default:
                                            return n.transform
                                    }
                                };
                                n.propertyGroup = propertyGroupFactory(n, s);
                                var o = function(i, a, s) {
                                        var n, o = function(r) {
                                            for (var i = 0, a = n.length; i < a;) {
                                                if (n[i]._name === r || n[i].mn === r || n[i].propertyIndex === r || n[i].ix === r || n[i].ind === r) return n[i];
                                                i += 1
                                            }
                                            return "number" == typeof r ? n[r - 1] : null
                                        };
                                        o.propertyGroup = propertyGroupFactory(o, s), n = r(i.it, a.it, o.propertyGroup), o.numProperties = n.length;
                                        var l = h(i.it[i.it.length - 1], a.it[a.it.length - 1], o.propertyGroup);
                                        return o.transform = l, o.propertyIndex = i.cix, o._name = i.nm, o
                                    }(i, a, n.propertyGroup),
                                    l = h(i.it[i.it.length - 1], a.it[a.it.length - 1], n.propertyGroup);
                                return n.content = o, n.transform = l, Object.defineProperty(n, "_name", {
                                    get: function() {
                                        return i.nm
                                    }
                                }), n.numProperties = i.np, n.propertyIndex = i.ix, n.nm = i.nm, n.mn = i.mn, n
                            }

                            function a(r, i, a) {
                                function s(r) {
                                    return "Color" === r || "color" === r ? s.color : "Opacity" === r || "opacity" === r ? s.opacity : null
                                }
                                return Object.defineProperties(s, {
                                    color: {
                                        get: ExpressionPropertyInterface(i.c)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(i.o)
                                    },
                                    _name: {
                                        value: r.nm
                                    },
                                    mn: {
                                        value: r.mn
                                    }
                                }), i.c.setGroupProperty(PropertyInterface("Color", a)), i.o.setGroupProperty(PropertyInterface("Opacity", a)), s
                            }

                            function s(r, i, a) {
                                function s(r) {
                                    return "Start Point" === r || "start point" === r ? s.startPoint : "End Point" === r || "end point" === r ? s.endPoint : "Opacity" === r || "opacity" === r ? s.opacity : null
                                }
                                return Object.defineProperties(s, {
                                    startPoint: {
                                        get: ExpressionPropertyInterface(i.s)
                                    },
                                    endPoint: {
                                        get: ExpressionPropertyInterface(i.e)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(i.o)
                                    },
                                    type: {
                                        get: function() {
                                            return "a"
                                        }
                                    },
                                    _name: {
                                        value: r.nm
                                    },
                                    mn: {
                                        value: r.mn
                                    }
                                }), i.s.setGroupProperty(PropertyInterface("Start Point", a)), i.e.setGroupProperty(PropertyInterface("End Point", a)), i.o.setGroupProperty(PropertyInterface("Opacity", a)), s
                            }

                            function n(r, i, a) {
                                var s, n = propertyGroupFactory(c, a),
                                    o = propertyGroupFactory(p, n);

                                function h(a) {
                                    Object.defineProperty(p, r.d[a].nm, {
                                        get: ExpressionPropertyInterface(i.d.dataProps[a].p)
                                    })
                                }
                                var l = r.d ? r.d.length : 0,
                                    p = {};
                                for (s = 0; s < l; s += 1) h(s), i.d.dataProps[s].p.setGroupProperty(o);

                                function c(r) {
                                    return "Color" === r || "color" === r ? c.color : "Opacity" === r || "opacity" === r ? c.opacity : "Stroke Width" === r || "stroke width" === r ? c.strokeWidth : null
                                }
                                return Object.defineProperties(c, {
                                    color: {
                                        get: ExpressionPropertyInterface(i.c)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(i.o)
                                    },
                                    strokeWidth: {
                                        get: ExpressionPropertyInterface(i.w)
                                    },
                                    dash: {
                                        get: function() {
                                            return p
                                        }
                                    },
                                    _name: {
                                        value: r.nm
                                    },
                                    mn: {
                                        value: r.mn
                                    }
                                }), i.c.setGroupProperty(PropertyInterface("Color", n)), i.o.setGroupProperty(PropertyInterface("Opacity", n)), i.w.setGroupProperty(PropertyInterface("Stroke Width", n)), c
                            }

                            function o(r, i, a) {
                                function s(i) {
                                    return i === r.e.ix || "End" === i || "end" === i ? s.end : i === r.s.ix ? s.start : i === r.o.ix ? s.offset : null
                                }
                                var n = propertyGroupFactory(s, a);
                                return s.propertyIndex = r.ix, i.s.setGroupProperty(PropertyInterface("Start", n)), i.e.setGroupProperty(PropertyInterface("End", n)), i.o.setGroupProperty(PropertyInterface("Offset", n)), s.propertyIndex = r.ix, s.propertyGroup = a, Object.defineProperties(s, {
                                    start: {
                                        get: ExpressionPropertyInterface(i.s)
                                    },
                                    end: {
                                        get: ExpressionPropertyInterface(i.e)
                                    },
                                    offset: {
                                        get: ExpressionPropertyInterface(i.o)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.mn = r.mn, s
                            }

                            function h(r, i, a) {
                                function s(i) {
                                    return r.a.ix === i || "Anchor Point" === i ? s.anchorPoint : r.o.ix === i || "Opacity" === i ? s.opacity : r.p.ix === i || "Position" === i ? s.position : r.r.ix === i || "Rotation" === i || "ADBE Vector Rotation" === i ? s.rotation : r.s.ix === i || "Scale" === i ? s.scale : r.sk && r.sk.ix === i || "Skew" === i ? s.skew : r.sa && r.sa.ix === i || "Skew Axis" === i ? s.skewAxis : null
                                }
                                var n = propertyGroupFactory(s, a);
                                return i.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), i.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), i.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), i.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), i.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), i.transform.mProps.sk && (i.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), i.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), i.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(s, {
                                    opacity: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.o)
                                    },
                                    position: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.p)
                                    },
                                    anchorPoint: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.a)
                                    },
                                    scale: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.s)
                                    },
                                    rotation: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.r)
                                    },
                                    skew: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.sk)
                                    },
                                    skewAxis: {
                                        get: ExpressionPropertyInterface(i.transform.mProps.sa)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.ty = "tr", s.mn = r.mn, s.propertyGroup = a, s
                            }

                            function l(r, i, a) {
                                function s(i) {
                                    return r.p.ix === i ? s.position : r.s.ix === i ? s.size : null
                                }
                                var n = propertyGroupFactory(s, a);
                                s.propertyIndex = r.ix;
                                var o = "tm" === i.sh.ty ? i.sh.prop : i.sh;
                                return o.s.setGroupProperty(PropertyInterface("Size", n)), o.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(s, {
                                    size: {
                                        get: ExpressionPropertyInterface(o.s)
                                    },
                                    position: {
                                        get: ExpressionPropertyInterface(o.p)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.mn = r.mn, s
                            }

                            function p(r, i, a) {
                                function s(i) {
                                    return r.p.ix === i ? s.position : r.r.ix === i ? s.rotation : r.pt.ix === i ? s.points : r.or.ix === i || "ADBE Vector Star Outer Radius" === i ? s.outerRadius : r.os.ix === i ? s.outerRoundness : !r.ir || r.ir.ix !== i && "ADBE Vector Star Inner Radius" !== i ? r.is && r.is.ix === i ? s.innerRoundness : null : s.innerRadius
                                }
                                var n = propertyGroupFactory(s, a),
                                    o = "tm" === i.sh.ty ? i.sh.prop : i.sh;
                                return s.propertyIndex = r.ix, o.or.setGroupProperty(PropertyInterface("Outer Radius", n)), o.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), o.pt.setGroupProperty(PropertyInterface("Points", n)), o.p.setGroupProperty(PropertyInterface("Position", n)), o.r.setGroupProperty(PropertyInterface("Rotation", n)), r.ir && (o.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), o.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(s, {
                                    position: {
                                        get: ExpressionPropertyInterface(o.p)
                                    },
                                    rotation: {
                                        get: ExpressionPropertyInterface(o.r)
                                    },
                                    points: {
                                        get: ExpressionPropertyInterface(o.pt)
                                    },
                                    outerRadius: {
                                        get: ExpressionPropertyInterface(o.or)
                                    },
                                    outerRoundness: {
                                        get: ExpressionPropertyInterface(o.os)
                                    },
                                    innerRadius: {
                                        get: ExpressionPropertyInterface(o.ir)
                                    },
                                    innerRoundness: {
                                        get: ExpressionPropertyInterface(o.is)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.mn = r.mn, s
                            }

                            function c(r, i, a) {
                                function s(i) {
                                    return r.p.ix === i ? s.position : r.r.ix === i ? s.roundness : r.s.ix === i || "Size" === i || "ADBE Vector Rect Size" === i ? s.size : null
                                }
                                var n = propertyGroupFactory(s, a),
                                    o = "tm" === i.sh.ty ? i.sh.prop : i.sh;
                                return s.propertyIndex = r.ix, o.p.setGroupProperty(PropertyInterface("Position", n)), o.s.setGroupProperty(PropertyInterface("Size", n)), o.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(s, {
                                    position: {
                                        get: ExpressionPropertyInterface(o.p)
                                    },
                                    roundness: {
                                        get: ExpressionPropertyInterface(o.r)
                                    },
                                    size: {
                                        get: ExpressionPropertyInterface(o.s)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.mn = r.mn, s
                            }

                            function f(r, i, a) {
                                function s(i) {
                                    return r.r.ix === i || "Round Corners 1" === i ? s.radius : null
                                }
                                var n = propertyGroupFactory(s, a),
                                    o = i;
                                return s.propertyIndex = r.ix, o.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(s, {
                                    radius: {
                                        get: ExpressionPropertyInterface(o.rd)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.mn = r.mn, s
                            }

                            function u(r, i, a) {
                                function s(i) {
                                    return r.c.ix === i || "Copies" === i ? s.copies : r.o.ix === i || "Offset" === i ? s.offset : null
                                }
                                var n = propertyGroupFactory(s, a),
                                    o = i;
                                return s.propertyIndex = r.ix, o.c.setGroupProperty(PropertyInterface("Copies", n)), o.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(s, {
                                    copies: {
                                        get: ExpressionPropertyInterface(o.c)
                                    },
                                    offset: {
                                        get: ExpressionPropertyInterface(o.o)
                                    },
                                    _name: {
                                        value: r.nm
                                    }
                                }), s.mn = r.mn, s
                            }
                            return function(i, a, s) {
                                var n;

                                function o(r) {
                                    if ("number" == typeof r) return 0 === (r = void 0 === r ? 1 : r) ? s : n[r - 1];
                                    for (var i = 0, a = n.length; i < a;) {
                                        if (n[i]._name === r) return n[i];
                                        i += 1
                                    }
                                    return null
                                }
                                return o.propertyGroup = propertyGroupFactory(o, (function() {
                                    return s
                                })), n = r(i, a, o.propertyGroup), o.numProperties = n.length, o._name = "Contents", o
                            }
                        }(),
                        TextExpressionInterface = function(r) {
                            var i, a;

                            function s(r) {
                                return "ADBE Text Document" === r ? s.sourceText : null
                            }
                            return Object.defineProperty(s, "sourceText", {
                                get: function() {
                                    r.textProperty.getValue();
                                    var s = r.textProperty.currentData.t;
                                    return s !== i && (i = r.textProperty.currentData.t, (a = new String(s)).value = s || new String(s), Object.defineProperty(a, "style", {
                                        get: function() {
                                            return {
                                                fillColor: r.textProperty.currentData.fc
                                            }
                                        }
                                    })), a
                                }
                            }), s
                        };

                    function _typeof$2(r) {
                        return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }
                    var FootageInterface = (dataInterfaceFactory = function(r) {
                            function i(r) {
                                return "Outline" === r ? i.outlineInterface() : null
                            }
                            return i._name = "Outline", i.outlineInterface = function(r) {
                                var i = "",
                                    a = r.getFootageData();

                                function s(r) {
                                    if (a[r]) return i = r, "object" === _typeof$2(a = a[r]) ? s : a;
                                    var n = r.indexOf(i);
                                    if (-1 !== n) {
                                        var o = parseInt(r.substr(n + i.length), 10);
                                        return "object" === _typeof$2(a = a[o]) ? s : a
                                    }
                                    return ""
                                }
                                return function() {
                                    return i = "", a = r.getFootageData(), s
                                }
                            }(r), i
                        }, function(r) {
                            function i(r) {
                                return "Data" === r ? i.dataInterface : null
                            }
                            return i._name = "Data", i.dataInterface = dataInterfaceFactory(r), i
                        }),
                        dataInterfaceFactory, interfaces = {
                            layer: LayerExpressionInterface,
                            effects: EffectsExpressionInterface,
                            comp: CompExpressionInterface,
                            shape: ShapeExpressionInterface,
                            text: TextExpressionInterface,
                            footage: FootageInterface
                        };

                    function getInterface(r) {
                        return interfaces[r] || null
                    }

                    function _typeof$1(r) {
                        return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }

                    function seedRandom(r, i) {
                        var a = this,
                            s = i.pow(256, 6),
                            n = i.pow(2, 52),
                            o = 2 * n;

                        function h(r) {
                            var i, a = r.length,
                                s = this,
                                n = 0,
                                o = s.i = s.j = 0,
                                h = s.S = [];
                            for (a || (r = [a++]); n < 256;) h[n] = n++;
                            for (n = 0; n < 256; n++) h[n] = h[o = 255 & o + r[n % a] + (i = h[n])], h[o] = i;
                            s.g = function(r) {
                                for (var i, a = 0, n = s.i, o = s.j, h = s.S; r--;) i = h[n = 255 & n + 1], a = 256 * a + h[255 & (h[n] = h[o = 255 & o + i]) + (h[o] = i)];
                                return s.i = n, s.j = o, a
                            }
                        }

                        function l(r, i) {
                            return i.i = r.i, i.j = r.j, i.S = r.S.slice(), i
                        }

                        function p(r, i) {
                            for (var a, s = r + "", n = 0; n < s.length;) i[255 & n] = 255 & (a ^= 19 * i[255 & n]) + s.charCodeAt(n++);
                            return c(i)
                        }

                        function c(r) {
                            return String.fromCharCode.apply(0, r)
                        }
                        i.seedrandom = function(f, u, m) {
                            var d = [],
                                y = p(function r(i, a) {
                                    var s, n = [],
                                        o = _typeof$1(i);
                                    if (a && "object" == o)
                                        for (s in i) try {
                                            n.push(r(i[s], a - 1))
                                        } catch (r) {}
                                    return n.length ? n : "string" == o ? i : i + "\0"
                                }((u = !0 === u ? {
                                    entropy: !0
                                } : u || {}).entropy ? [f, c(r)] : null === f ? function() {
                                    try {
                                        var i = new Uint8Array(256);
                                        return (a.crypto || a.msCrypto).getRandomValues(i), c(i)
                                    } catch (i) {
                                        var s = a.navigator,
                                            n = s && s.plugins;
                                        return [+new Date, a, n, a.screen, c(r)]
                                    }
                                }() : f, 3), d),
                                g = new h(d),
                                v = function() {
                                    for (var r = g.g(6), i = s, a = 0; r < n;) r = 256 * (r + a), i *= 256, a = g.g(1);
                                    for (; r >= o;) r /= 2, i /= 2, a >>>= 1;
                                    return (r + a) / i
                                };
                            return v.int32 = function() {
                                return 0 | g.g(4)
                            }, v.quick = function() {
                                return g.g(4) / 4294967296
                            }, v.double = v, p(c(g.S), r), (u.pass || m || function(r, a, s, n) {
                                return n && (n.S && l(n, g), r.state = function() {
                                    return l(g, {})
                                }), s ? (i.random = r, a) : r
                            })(v, y, "global" in u ? u.global : this == i, u.state)
                        }, p(i.random(), r)
                    }

                    function initialize$2(r) {
                        seedRandom([], r)
                    }
                    var propTypes = {
                        SHAPE: "shape"
                    };

                    function _typeof(r) {
                        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        })(r)
                    }
                    var ExpressionManager = function() {
                            var ob = {},
                                Math = BMMath,
                                window = null,
                                document = null,
                                XMLHttpRequest = null,
                                fetch = null,
                                frames = null;

                            function $bm_isInstanceOfArray(r) {
                                return r.constructor === Array || r.constructor === Float32Array
                            }

                            function isNumerable(r, i) {
                                return "number" === r || "boolean" === r || "string" === r || i instanceof Number
                            }

                            function $bm_neg(r) {
                                var i = _typeof(r);
                                if ("number" === i || "boolean" === i || r instanceof Number) return -r;
                                if ($bm_isInstanceOfArray(r)) {
                                    var a, s = r.length,
                                        n = [];
                                    for (a = 0; a < s; a += 1) n[a] = -r[a];
                                    return n
                                }
                                return r.propType ? r.v : -r
                            }
                            initialize$2(BMMath);
                            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                                easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                                easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                            function sum(r, i) {
                                var a = _typeof(r),
                                    s = _typeof(i);
                                if ("string" === a || "string" === s) return r + i;
                                if (isNumerable(a, r) && isNumerable(s, i)) return r + i;
                                if ($bm_isInstanceOfArray(r) && isNumerable(s, i)) return (r = r.slice(0))[0] += i, r;
                                if (isNumerable(a, r) && $bm_isInstanceOfArray(i)) return (i = i.slice(0))[0] = r + i[0], i;
                                if ($bm_isInstanceOfArray(r) && $bm_isInstanceOfArray(i)) {
                                    for (var n = 0, o = r.length, h = i.length, l = []; n < o || n < h;)("number" == typeof r[n] || r[n] instanceof Number) && ("number" == typeof i[n] || i[n] instanceof Number) ? l[n] = r[n] + i[n] : l[n] = void 0 === i[n] ? r[n] : r[n] || i[n], n += 1;
                                    return l
                                }
                                return 0
                            }
                            var add = sum;

                            function sub(r, i) {
                                var a = _typeof(r),
                                    s = _typeof(i);
                                if (isNumerable(a, r) && isNumerable(s, i)) return "string" === a && (r = parseInt(r, 10)), "string" === s && (i = parseInt(i, 10)), r - i;
                                if ($bm_isInstanceOfArray(r) && isNumerable(s, i)) return (r = r.slice(0))[0] -= i, r;
                                if (isNumerable(a, r) && $bm_isInstanceOfArray(i)) return (i = i.slice(0))[0] = r - i[0], i;
                                if ($bm_isInstanceOfArray(r) && $bm_isInstanceOfArray(i)) {
                                    for (var n = 0, o = r.length, h = i.length, l = []; n < o || n < h;)("number" == typeof r[n] || r[n] instanceof Number) && ("number" == typeof i[n] || i[n] instanceof Number) ? l[n] = r[n] - i[n] : l[n] = void 0 === i[n] ? r[n] : r[n] || i[n], n += 1;
                                    return l
                                }
                                return 0
                            }

                            function mul(r, i) {
                                var a, s, n, o = _typeof(r),
                                    h = _typeof(i);
                                if (isNumerable(o, r) && isNumerable(h, i)) return r * i;
                                if ($bm_isInstanceOfArray(r) && isNumerable(h, i)) {
                                    for (n = r.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1) a[s] = r[s] * i;
                                    return a
                                }
                                if (isNumerable(o, r) && $bm_isInstanceOfArray(i)) {
                                    for (n = i.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1) a[s] = r * i[s];
                                    return a
                                }
                                return 0
                            }

                            function div(r, i) {
                                var a, s, n, o = _typeof(r),
                                    h = _typeof(i);
                                if (isNumerable(o, r) && isNumerable(h, i)) return r / i;
                                if ($bm_isInstanceOfArray(r) && isNumerable(h, i)) {
                                    for (n = r.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1) a[s] = r[s] / i;
                                    return a
                                }
                                if (isNumerable(o, r) && $bm_isInstanceOfArray(i)) {
                                    for (n = i.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1) a[s] = r / i[s];
                                    return a
                                }
                                return 0
                            }

                            function mod(r, i) {
                                return "string" == typeof r && (r = parseInt(r, 10)), "string" == typeof i && (i = parseInt(i, 10)), r % i
                            }
                            var $bm_sum = sum,
                                $bm_sub = sub,
                                $bm_mul = mul,
                                $bm_div = div,
                                $bm_mod = mod;

                            function clamp(r, i, a) {
                                if (i > a) {
                                    var s = a;
                                    a = i, i = s
                                }
                                return Math.min(Math.max(r, i), a)
                            }

                            function radiansToDegrees(r) {
                                return r / degToRads
                            }
                            var radians_to_degrees = radiansToDegrees;

                            function degreesToRadians(r) {
                                return r * degToRads
                            }
                            var degrees_to_radians = radiansToDegrees,
                                helperLengthArray = [0, 0, 0, 0, 0, 0];

                            function length(r, i) {
                                if ("number" == typeof r || r instanceof Number) return i = i || 0, Math.abs(r - i);
                                var a;
                                i || (i = helperLengthArray);
                                var s = Math.min(r.length, i.length),
                                    n = 0;
                                for (a = 0; a < s; a += 1) n += Math.pow(i[a] - r[a], 2);
                                return Math.sqrt(n)
                            }

                            function normalize(r) {
                                return div(r, length(r))
                            }

                            function rgbToHsl(r) {
                                var i, a, s = r[0],
                                    n = r[1],
                                    o = r[2],
                                    h = Math.max(s, n, o),
                                    l = Math.min(s, n, o),
                                    p = (h + l) / 2;
                                if (h === l) i = 0, a = 0;
                                else {
                                    var c = h - l;
                                    switch (a = p > .5 ? c / (2 - h - l) : c / (h + l), h) {
                                        case s:
                                            i = (n - o) / c + (n < o ? 6 : 0);
                                            break;
                                        case n:
                                            i = (o - s) / c + 2;
                                            break;
                                        case o:
                                            i = (s - n) / c + 4
                                    }
                                    i /= 6
                                }
                                return [i, a, p, r[3]]
                            }

                            function hue2rgb(r, i, a) {
                                return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? r + 6 * (i - r) * a : a < .5 ? i : a < 2 / 3 ? r + (i - r) * (2 / 3 - a) * 6 : r
                            }

                            function hslToRgb(r) {
                                var i, a, s, n = r[0],
                                    o = r[1],
                                    h = r[2];
                                if (0 === o) i = h, s = h, a = h;
                                else {
                                    var l = h < .5 ? h * (1 + o) : h + o - h * o,
                                        p = 2 * h - l;
                                    i = hue2rgb(p, l, n + 1 / 3), a = hue2rgb(p, l, n), s = hue2rgb(p, l, n - 1 / 3)
                                }
                                return [i, a, s, r[3]]
                            }

                            function linear(r, i, a, s, n) {
                                if (void 0 !== s && void 0 !== n || (s = i, n = a, i = 0, a = 1), a < i) {
                                    var o = a;
                                    a = i, i = o
                                }
                                if (r <= i) return s;
                                if (r >= a) return n;
                                var h, l = a === i ? 0 : (r - i) / (a - i);
                                if (!s.length) return s + (n - s) * l;
                                var p = s.length,
                                    c = createTypedArray("float32", p);
                                for (h = 0; h < p; h += 1) c[h] = s[h] + (n[h] - s[h]) * l;
                                return c
                            }

                            function random(r, i) {
                                if (void 0 === i && (void 0 === r ? (r = 0, i = 1) : (i = r, r = void 0)), i.length) {
                                    var a, s = i.length;
                                    r || (r = createTypedArray("float32", s));
                                    var n = createTypedArray("float32", s),
                                        o = BMMath.random();
                                    for (a = 0; a < s; a += 1) n[a] = r[a] + o * (i[a] - r[a]);
                                    return n
                                }
                                return void 0 === r && (r = 0), r + BMMath.random() * (i - r)
                            }

                            function createPath(r, i, a, s) {
                                var n, o = r.length,
                                    h = shapePool.newElement();
                                h.setPathData(!!s, o);
                                var l, p, c = [0, 0];
                                for (n = 0; n < o; n += 1) l = i && i[n] ? i[n] : c, p = a && a[n] ? a[n] : c, h.setTripleAt(r[n][0], r[n][1], p[0] + r[n][0], p[1] + r[n][1], l[0] + r[n][0], l[1] + r[n][1], n, !0);
                                return h
                            }

                            function initiateExpression(elem, data, property) {
                                function noOp(r) {
                                    return r
                                }
                                if (!elem.globalData.renderConfig.runExpressions) return noOp;
                                var val = data.x,
                                    needsVelocity = /velocity(?![\w\d])/.test(val),
                                    _needsRandom = -1 !== val.indexOf("random"),
                                    elemType = elem.data.ty,
                                    transform, $bm_transform, content, effect, thisProperty = property;
                                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                    get: function() {
                                        return thisProperty.v
                                    }
                                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                    width = elem.data.sw ? elem.data.sw : 0,
                                    height = elem.data.sh ? elem.data.sh : 0,
                                    name = elem.data.nm,
                                    loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                    numKeys = property.kf ? data.k.length : 0,
                                    active = !this.data || !0 !== this.data.hd,
                                    wiggle = function(r, i) {
                                        var a, s, n = this.pv.length ? this.pv.length : 1,
                                            o = createTypedArray("float32", n),
                                            h = Math.floor(5 * time);
                                        for (a = 0, s = 0; a < h;) {
                                            for (s = 0; s < n; s += 1) o[s] += -i + 2 * i * BMMath.random();
                                            a += 1
                                        }
                                        var l = 5 * time,
                                            p = l - Math.floor(l),
                                            c = createTypedArray("float32", n);
                                        if (n > 1) {
                                            for (s = 0; s < n; s += 1) c[s] = this.pv[s] + o[s] + (-i + 2 * i * BMMath.random()) * p;
                                            return c
                                        }
                                        return this.pv + o[0] + (-i + 2 * i * BMMath.random()) * p
                                    }.bind(this);

                                function loopInDuration(r, i) {
                                    return loopIn(r, i, !0)
                                }

                                function loopOutDuration(r, i) {
                                    return loopOut(r, i, !0)
                                }
                                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                    time, velocity, value, text, textIndex, textTotal, selectorValue;

                                function lookAt(r, i) {
                                    var a = [i[0] - r[0], i[1] - r[1], i[2] - r[2]],
                                        s = Math.atan2(a[0], Math.sqrt(a[1] * a[1] + a[2] * a[2])) / degToRads;
                                    return [-Math.atan2(a[1], a[2]) / degToRads, s, 0]
                                }

                                function easeOut(r, i, a, s, n) {
                                    return applyEase(easeOutBez, r, i, a, s, n)
                                }

                                function easeIn(r, i, a, s, n) {
                                    return applyEase(easeInBez, r, i, a, s, n)
                                }

                                function ease(r, i, a, s, n) {
                                    return applyEase(easeInOutBez, r, i, a, s, n)
                                }

                                function applyEase(r, i, a, s, n, o) {
                                    void 0 === n ? (n = a, o = s) : i = (i - a) / (s - a), i > 1 ? i = 1 : i < 0 && (i = 0);
                                    var h = r(i);
                                    if ($bm_isInstanceOfArray(n)) {
                                        var l, p = n.length,
                                            c = createTypedArray("float32", p);
                                        for (l = 0; l < p; l += 1) c[l] = (o[l] - n[l]) * h + n[l];
                                        return c
                                    }
                                    return (o - n) * h + n
                                }

                                function nearestKey(r) {
                                    var i, a, s, n = data.k.length;
                                    if (data.k.length && "number" != typeof data.k[0])
                                        if (a = -1, (r *= elem.comp.globalData.frameRate) < data.k[0].t) a = 1, s = data.k[0].t;
                                        else {
                                            for (i = 0; i < n - 1; i += 1) {
                                                if (r === data.k[i].t) {
                                                    a = i + 1, s = data.k[i].t;
                                                    break
                                                }
                                                if (r > data.k[i].t && r < data.k[i + 1].t) {
                                                    r - data.k[i].t > data.k[i + 1].t - r ? (a = i + 2, s = data.k[i + 1].t) : (a = i + 1, s = data.k[i].t);
                                                    break
                                                }
                                            } - 1 === a && (a = i + 1, s = data.k[i].t)
                                        }
                                    else a = 0, s = 0;
                                    var o = {};
                                    return o.index = a, o.time = s / elem.comp.globalData.frameRate, o
                                }

                                function key(r) {
                                    var i, a, s;
                                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + r);
                                    r -= 1, i = {
                                        time: data.k[r].t / elem.comp.globalData.frameRate,
                                        value: []
                                    };
                                    var n = Object.prototype.hasOwnProperty.call(data.k[r], "s") ? data.k[r].s : data.k[r - 1].e;
                                    for (s = n.length, a = 0; a < s; a += 1) i[a] = n[a], i.value[a] = n[a];
                                    return i
                                }

                                function framesToTime(r, i) {
                                    return i || (i = elem.comp.globalData.frameRate), r / i
                                }

                                function timeToFrames(r, i) {
                                    return r || 0 === r || (r = time), i || (i = elem.comp.globalData.frameRate), r * i
                                }

                                function seedRandom(r) {
                                    BMMath.seedrandom(randSeed + r)
                                }

                                function sourceRectAtTime() {
                                    return elem.sourceRectAtTime()
                                }

                                function substring(r, i) {
                                    return "string" == typeof value ? void 0 === i ? value.substring(r) : value.substring(r, i) : ""
                                }

                                function substr(r, i) {
                                    return "string" == typeof value ? void 0 === i ? value.substr(r) : value.substr(r, i) : ""
                                }

                                function posterizeTime(r) {
                                    time = 0 === r ? 0 : Math.floor(time * r) / r, value = valueAtTime(time)
                                }
                                var index = elem.data.ind,
                                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                    parent, randSeed = Math.floor(1e6 * Math.random()),
                                    globalData = elem.globalData;

                                function executeExpression(r) {
                                    return value = r, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                                }
                                return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                            }
                            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
                        }(),
                        expressionHelpers = {
                            searchExpressions: function(r, i, a) {
                                i.x && (a.k = !0, a.x = !0, a.initiateExpression = ExpressionManager.initiateExpression, a.effectsSequence.push(a.initiateExpression(r, i, a).bind(a)))
                            },
                            getSpeedAtTime: function(r) {
                                var i = this.getValueAtTime(r),
                                    a = this.getValueAtTime(r + -.01),
                                    s = 0;
                                if (i.length) {
                                    var n;
                                    for (n = 0; n < i.length; n += 1) s += Math.pow(a[n] - i[n], 2);
                                    s = 100 * Math.sqrt(s)
                                } else s = 0;
                                return s
                            },
                            getVelocityAtTime: function(r) {
                                if (void 0 !== this.vel) return this.vel;
                                var i, a, s = this.getValueAtTime(r),
                                    n = this.getValueAtTime(r + -.001);
                                if (s.length)
                                    for (i = createTypedArray("float32", s.length), a = 0; a < s.length; a += 1) i[a] = (n[a] - s[a]) / -.001;
                                else i = (n - s) / -.001;
                                return i
                            },
                            getValueAtTime: function(r) {
                                return r *= this.elem.globalData.frameRate, (r -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < r ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(r, this._cachingAtTime), this._cachingAtTime.lastFrame = r), this._cachingAtTime.value
                            },
                            getStaticValueAtTime: function() {
                                return this.pv
                            },
                            setGroupProperty: function(r) {
                                this.propertyGroup = r
                            }
                        };

                    function addPropertyDecorator() {
                        function r(r, i, a) {
                            if (!this.k || !this.keyframes) return this.pv;
                            r = r ? r.toLowerCase() : "";
                            var s, n, o, h, l, p = this.comp.renderedFrame,
                                c = this.keyframes,
                                f = c[c.length - 1].t;
                            if (p <= f) return this.pv;
                            if (a ? n = f - (s = i ? Math.abs(f - this.elem.comp.globalData.frameRate * i) : Math.max(0, f - this.elem.data.ip)) : ((!i || i > c.length - 1) && (i = c.length - 1), s = f - (n = c[c.length - 1 - i].t)), "pingpong" === r) {
                                if (Math.floor((p - n) / s) % 2 != 0) return this.getValueAtTime((s - (p - n) % s + n) / this.comp.globalData.frameRate, 0)
                            } else {
                                if ("offset" === r) {
                                    var u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                        m = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
                                        d = this.getValueAtTime(((p - n) % s + n) / this.comp.globalData.frameRate, 0),
                                        y = Math.floor((p - n) / s);
                                    if (this.pv.length) {
                                        for (h = (l = new Array(u.length)).length, o = 0; o < h; o += 1) l[o] = (m[o] - u[o]) * y + d[o];
                                        return l
                                    }
                                    return (m - u) * y + d
                                }
                                if ("continue" === r) {
                                    var g = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
                                        v = this.getValueAtTime((f - .001) / this.comp.globalData.frameRate, 0);
                                    if (this.pv.length) {
                                        for (h = (l = new Array(g.length)).length, o = 0; o < h; o += 1) l[o] = g[o] + (g[o] - v[o]) * ((p - f) / this.comp.globalData.frameRate) / 5e-4;
                                        return l
                                    }
                                    return g + (p - f) / .001 * (g - v)
                                }
                            }
                            return this.getValueAtTime(((p - n) % s + n) / this.comp.globalData.frameRate, 0)
                        }

                        function i(r, i, a) {
                            if (!this.k) return this.pv;
                            r = r ? r.toLowerCase() : "";
                            var s, n, o, h, l, p = this.comp.renderedFrame,
                                c = this.keyframes,
                                f = c[0].t;
                            if (p >= f) return this.pv;
                            if (a ? n = f + (s = i ? Math.abs(this.elem.comp.globalData.frameRate * i) : Math.max(0, this.elem.data.op - f)) : ((!i || i > c.length - 1) && (i = c.length - 1), s = (n = c[i].t) - f), "pingpong" === r) {
                                if (Math.floor((f - p) / s) % 2 == 0) return this.getValueAtTime(((f - p) % s + f) / this.comp.globalData.frameRate, 0)
                            } else {
                                if ("offset" === r) {
                                    var u = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
                                        m = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                        d = this.getValueAtTime((s - (f - p) % s + f) / this.comp.globalData.frameRate, 0),
                                        y = Math.floor((f - p) / s) + 1;
                                    if (this.pv.length) {
                                        for (h = (l = new Array(u.length)).length, o = 0; o < h; o += 1) l[o] = d[o] - (m[o] - u[o]) * y;
                                        return l
                                    }
                                    return d - (m - u) * y
                                }
                                if ("continue" === r) {
                                    var g = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
                                        v = this.getValueAtTime((f + .001) / this.comp.globalData.frameRate, 0);
                                    if (this.pv.length) {
                                        for (h = (l = new Array(g.length)).length, o = 0; o < h; o += 1) l[o] = g[o] + (g[o] - v[o]) * (f - p) / .001;
                                        return l
                                    }
                                    return g + (g - v) * (f - p) / .001
                                }
                            }
                            return this.getValueAtTime((s - ((f - p) % s + f)) / this.comp.globalData.frameRate, 0)
                        }

                        function a(r, i) {
                            if (!this.k) return this.pv;
                            if (r = .5 * (r || .4), (i = Math.floor(i || 5)) <= 1) return this.pv;
                            var a, s, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                                o = n - r,
                                h = i > 1 ? (n + r - o) / (i - 1) : 1,
                                l = 0,
                                p = 0;
                            for (a = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; l < i;) {
                                if (s = this.getValueAtTime(o + l * h), this.pv.length)
                                    for (p = 0; p < this.pv.length; p += 1) a[p] += s[p];
                                else a += s;
                                l += 1
                            }
                            if (this.pv.length)
                                for (p = 0; p < this.pv.length; p += 1) a[p] /= i;
                            else a /= i;
                            return a
                        }

                        function s(r) {
                            this._transformCachingAtTime || (this._transformCachingAtTime = {
                                v: new Matrix
                            });
                            var i = this._transformCachingAtTime.v;
                            if (i.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                                var a = this.a.getValueAtTime(r);
                                i.translate(-a[0] * this.a.mult, -a[1] * this.a.mult, a[2] * this.a.mult)
                            }
                            if (this.appliedTransformations < 2) {
                                var s = this.s.getValueAtTime(r);
                                i.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult)
                            }
                            if (this.sk && this.appliedTransformations < 3) {
                                var n = this.sk.getValueAtTime(r),
                                    o = this.sa.getValueAtTime(r);
                                i.skewFromAxis(-n * this.sk.mult, o * this.sa.mult)
                            }
                            if (this.r && this.appliedTransformations < 4) {
                                var h = this.r.getValueAtTime(r);
                                i.rotate(-h * this.r.mult)
                            } else if (!this.r && this.appliedTransformations < 4) {
                                var l = this.rz.getValueAtTime(r),
                                    p = this.ry.getValueAtTime(r),
                                    c = this.rx.getValueAtTime(r),
                                    f = this.or.getValueAtTime(r);
                                i.rotateZ(-l * this.rz.mult).rotateY(p * this.ry.mult).rotateX(c * this.rx.mult).rotateZ(-f[2] * this.or.mult).rotateY(f[1] * this.or.mult).rotateX(f[0] * this.or.mult)
                            }
                            if (this.data.p && this.data.p.s) {
                                var u = this.px.getValueAtTime(r),
                                    m = this.py.getValueAtTime(r);
                                if (this.data.p.z) {
                                    var d = this.pz.getValueAtTime(r);
                                    i.translate(u * this.px.mult, m * this.py.mult, -d * this.pz.mult)
                                } else i.translate(u * this.px.mult, m * this.py.mult, 0)
                            } else {
                                var y = this.p.getValueAtTime(r);
                                i.translate(y[0] * this.p.mult, y[1] * this.p.mult, -y[2] * this.p.mult)
                            }
                            return i
                        }

                        function n() {
                            return this.v.clone(new Matrix)
                        }
                        var o = TransformPropertyFactory.getTransformProperty;
                        TransformPropertyFactory.getTransformProperty = function(r, i, a) {
                            var h = o(r, i, a);
                            return h.dynamicProperties.length ? h.getValueAtTime = s.bind(h) : h.getValueAtTime = n.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h
                        };
                        var h = PropertyFactory.getProp;
                        PropertyFactory.getProp = function(s, n, o, l, p) {
                            var c = h(s, n, o, l, p);
                            c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = r, c.loopIn = i, c.smooth = a, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = 1 === n.a ? n.k.length : 0, c.propertyIndex = n.ix;
                            var f = 0;
                            return 0 !== o && (f = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), c._cachingAtTime = {
                                lastFrame: initialDefaultFrame,
                                lastIndex: 0,
                                value: f
                            }, expressionHelpers.searchExpressions(s, n, c), c.k && p.addDynamicProperty(c), c
                        };
                        var l = ShapePropertyFactory.getConstructorFunction(),
                            p = ShapePropertyFactory.getKeyframedConstructorFunction();

                        function c() {}
                        c.prototype = {
                            vertices: function(r, i) {
                                this.k && this.getValue();
                                var a, s = this.v;
                                void 0 !== i && (s = this.getValueAtTime(i, 0));
                                var n = s._length,
                                    o = s[r],
                                    h = s.v,
                                    l = createSizedArray(n);
                                for (a = 0; a < n; a += 1) l[a] = "i" === r || "o" === r ? [o[a][0] - h[a][0], o[a][1] - h[a][1]] : [o[a][0], o[a][1]];
                                return l
                            },
                            points: function(r) {
                                return this.vertices("v", r)
                            },
                            inTangents: function(r) {
                                return this.vertices("i", r)
                            },
                            outTangents: function(r) {
                                return this.vertices("o", r)
                            },
                            isClosed: function() {
                                return this.v.c
                            },
                            pointOnPath: function(r, i) {
                                var a = this.v;
                                void 0 !== i && (a = this.getValueAtTime(i, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(a));
                                for (var s, n = this._segmentsLength, o = n.lengths, h = n.totalLength * r, l = 0, p = o.length, c = 0; l < p;) {
                                    if (c + o[l].addedLength > h) {
                                        var f = l,
                                            u = a.c && l === p - 1 ? 0 : l + 1,
                                            m = (h - c) / o[l].addedLength;
                                        s = bez.getPointInSegment(a.v[f], a.v[u], a.o[f], a.i[u], m, o[l]);
                                        break
                                    }
                                    c += o[l].addedLength, l += 1
                                }
                                return s || (s = a.c ? [a.v[0][0], a.v[0][1]] : [a.v[a._length - 1][0], a.v[a._length - 1][1]]), s
                            },
                            vectorOnPath: function(r, i, a) {
                                1 == r ? r = this.v.c : 0 == r && (r = .999);
                                var s = this.pointOnPath(r, i),
                                    n = this.pointOnPath(r + .001, i),
                                    o = n[0] - s[0],
                                    h = n[1] - s[1],
                                    l = Math.sqrt(Math.pow(o, 2) + Math.pow(h, 2));
                                return 0 === l ? [0, 0] : "tangent" === a ? [o / l, h / l] : [-h / l, o / l]
                            },
                            tangentOnPath: function(r, i) {
                                return this.vectorOnPath(r, i, "tangent")
                            },
                            normalOnPath: function(r, i) {
                                return this.vectorOnPath(r, i, "normal")
                            },
                            setGroupProperty: expressionHelpers.setGroupProperty,
                            getValueAtTime: expressionHelpers.getStaticValueAtTime
                        }, extendPrototype([c], l), extendPrototype([c], p), p.prototype.getValueAtTime = function(r) {
                            return this._cachingAtTime || (this._cachingAtTime = {
                                shapeValue: shapePool.clone(this.pv),
                                lastIndex: 0,
                                lastTime: initialDefaultFrame
                            }), r *= this.elem.globalData.frameRate, (r -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < r ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = r, this.interpolateShape(r, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                        }, p.prototype.initiateExpression = ExpressionManager.initiateExpression;
                        var f = ShapePropertyFactory.getShapeProp;
                        ShapePropertyFactory.getShapeProp = function(r, i, a, s, n) {
                            var o = f(r, i, a, s, n);
                            return o.propertyIndex = i.ix, o.lock = !1, 3 === a ? expressionHelpers.searchExpressions(r, i.pt, o) : 4 === a && expressionHelpers.searchExpressions(r, i.ks, o), o.k && r.addDynamicProperty(o), o
                        }
                    }

                    function initialize$1() {
                        addPropertyDecorator()
                    }

                    function addDecorator() {
                        TextProperty.prototype.getExpressionValue = function(r, i) {
                            var a = this.calculateExpression(i);
                            if (r.t !== a) {
                                var s = {};
                                return this.copyData(s, r), s.t = a.toString(), s.__complete = !1, s
                            }
                            return r
                        }, TextProperty.prototype.searchProperty = function() {
                            var r = this.searchKeyframes(),
                                i = this.searchExpressions();
                            return this.kf = r || i, this.kf
                        }, TextProperty.prototype.searchExpressions = function() {
                            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                        }
                    }

                    function initialize() {
                        addDecorator()
                    }

                    function SVGComposableEffect() {}
                    SVGComposableEffect.prototype = {
                        createMergeNode: function(r, i) {
                            var a, s, n = createNS("feMerge");
                            for (n.setAttribute("result", r), s = 0; s < i.length; s += 1)(a = createNS("feMergeNode")).setAttribute("in", i[s]), n.appendChild(a), n.appendChild(a);
                            return n
                        }
                    };
                    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                    function SVGTintFilter(r, i, a, s, n) {
                        this.filterManager = i;
                        var o = createNS("feColorMatrix");
                        o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "linearRGB"), o.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = o, o.setAttribute("result", s + "_tint_1"), r.appendChild(o), (o = createNS("feColorMatrix")).setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), o.setAttribute("result", s + "_tint_2"), r.appendChild(o), this.matrixFilter = o;
                        var h = this.createMergeNode(s, [n, s + "_tint_1", s + "_tint_2"]);
                        r.appendChild(h)
                    }

                    function SVGFillFilter(r, i, a, s) {
                        this.filterManager = i;
                        var n = createNS("feColorMatrix");
                        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", s), r.appendChild(n), this.matrixFilter = n
                    }

                    function SVGStrokeEffect(r, i, a) {
                        this.initialized = !1, this.filterManager = i, this.elem = a, this.paths = []
                    }

                    function SVGTritoneFilter(r, i, a, s) {
                        this.filterManager = i;
                        var n = createNS("feColorMatrix");
                        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.appendChild(n);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("result", s), this.matrixFilter = o;
                        var h = createNS("feFuncR");
                        h.setAttribute("type", "table"), o.appendChild(h), this.feFuncR = h;
                        var l = createNS("feFuncG");
                        l.setAttribute("type", "table"), o.appendChild(l), this.feFuncG = l;
                        var p = createNS("feFuncB");
                        p.setAttribute("type", "table"), o.appendChild(p), this.feFuncB = p, r.appendChild(o)
                    }

                    function SVGProLevelsFilter(r, i, a, s) {
                        this.filterManager = i;
                        var n = this.filterManager.effectElements,
                            o = createNS("feComponentTransfer");
                        (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", o)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", o)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", o)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", o)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (o.setAttribute("color-interpolation-filters", "sRGB"), r.appendChild(o)), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && ((o = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("result", s), r.appendChild(o), this.feFuncRComposed = this.createFeFunc("feFuncR", o), this.feFuncGComposed = this.createFeFunc("feFuncG", o), this.feFuncBComposed = this.createFeFunc("feFuncB", o))
                    }

                    function SVGDropShadowEffect(r, i, a, s, n) {
                        var o = i.container.globalData.renderConfig.filterSize,
                            h = i.data.fs || o;
                        r.setAttribute("x", h.x || o.x), r.setAttribute("y", h.y || o.y), r.setAttribute("width", h.width || o.width), r.setAttribute("height", h.height || o.height), this.filterManager = i;
                        var l = createNS("feGaussianBlur");
                        l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", s + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, r.appendChild(l);
                        var p = createNS("feOffset");
                        p.setAttribute("dx", "25"), p.setAttribute("dy", "0"), p.setAttribute("in", s + "_drop_shadow_1"), p.setAttribute("result", s + "_drop_shadow_2"), this.feOffset = p, r.appendChild(p);
                        var c = createNS("feFlood");
                        c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", s + "_drop_shadow_3"), this.feFlood = c, r.appendChild(c);
                        var f = createNS("feComposite");
                        f.setAttribute("in", s + "_drop_shadow_3"), f.setAttribute("in2", s + "_drop_shadow_2"), f.setAttribute("operator", "in"), f.setAttribute("result", s + "_drop_shadow_4"), r.appendChild(f);
                        var u = this.createMergeNode(s, [s + "_drop_shadow_4", n]);
                        r.appendChild(u)
                    }
                    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(r) {
                        if (r || this.filterManager._mdf) {
                            var i = this.filterManager.effectElements[0].p.v,
                                a = this.filterManager.effectElements[1].p.v,
                                s = this.filterManager.effectElements[2].p.v / 100;
                            this.linearFilter.setAttribute("values", linearFilterValue + " " + s + " 0"), this.matrixFilter.setAttribute("values", a[0] - i[0] + " 0 0 0 " + i[0] + " " + (a[1] - i[1]) + " 0 0 0 " + i[1] + " " + (a[2] - i[2]) + " 0 0 0 " + i[2] + " 0 0 0 1 0")
                        }
                    }, SVGFillFilter.prototype.renderFrame = function(r) {
                        if (r || this.filterManager._mdf) {
                            var i = this.filterManager.effectElements[2].p.v,
                                a = this.filterManager.effectElements[6].p.v;
                            this.matrixFilter.setAttribute("values", "0 0 0 0 " + i[0] + " 0 0 0 0 " + i[1] + " 0 0 0 0 " + i[2] + " 0 0 0 " + a + " 0")
                        }
                    }, SVGStrokeEffect.prototype.initialize = function() {
                        var r, i, a, s, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                        for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length, a = 0) : s = 1 + (a = this.filterManager.effectElements[0].p.v - 1), (i = createNS("g")).setAttribute("fill", "none"), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-dashoffset", 1); a < s; a += 1) r = createNS("path"), i.appendChild(r), this.paths.push({
                            p: r,
                            m: a
                        });
                        if (3 === this.filterManager.effectElements[10].p.v) {
                            var o = createNS("mask"),
                                h = createElementID();
                            o.setAttribute("id", h), o.setAttribute("mask-type", "alpha"), o.appendChild(i), this.elem.globalData.defs.appendChild(o);
                            var l = createNS("g");
                            for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + h + ")"); n[0];) l.appendChild(n[0]);
                            this.elem.layerElement.appendChild(l), this.masker = o, i.setAttribute("stroke", "#fff")
                        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                            if (2 === this.filterManager.effectElements[10].p.v)
                                for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                            this.elem.layerElement.appendChild(i), this.elem.layerElement.removeAttribute("mask"), i.setAttribute("stroke", "#fff")
                        }
                        this.initialized = !0, this.pathMasker = i
                    }, SVGStrokeEffect.prototype.renderFrame = function(r) {
                        var i;
                        this.initialized || this.initialize();
                        var a, s, n = this.paths.length;
                        for (i = 0; i < n; i += 1)
                            if (-1 !== this.paths[i].m && (a = this.elem.maskManager.viewData[this.paths[i].m], s = this.paths[i].p, (r || this.filterManager._mdf || a.prop._mdf) && s.setAttribute("d", a.lastPath), r || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || a.prop._mdf)) {
                                var o;
                                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                    var h = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                        l = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                        p = s.getTotalLength();
                                    o = "0 0 0 " + p * h + " ";
                                    var c, f = p * (l - h),
                                        u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                        m = Math.floor(f / u);
                                    for (c = 0; c < m; c += 1) o += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                    o += "0 " + 10 * p + " 0 0"
                                } else o = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                                s.setAttribute("stroke-dasharray", o)
                            }
                        if ((r || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (r || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (r || this.filterManager.effectElements[3].p._mdf)) {
                            var d = this.filterManager.effectElements[3].p.v;
                            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
                        }
                    }, SVGTritoneFilter.prototype.renderFrame = function(r) {
                        if (r || this.filterManager._mdf) {
                            var i = this.filterManager.effectElements[0].p.v,
                                a = this.filterManager.effectElements[1].p.v,
                                s = this.filterManager.effectElements[2].p.v,
                                n = s[0] + " " + a[0] + " " + i[0],
                                o = s[1] + " " + a[1] + " " + i[1],
                                h = s[2] + " " + a[2] + " " + i[2];
                            this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", o), this.feFuncB.setAttribute("tableValues", h)
                        }
                    }, SVGProLevelsFilter.prototype.createFeFunc = function(r, i) {
                        var a = createNS(r);
                        return a.setAttribute("type", "table"), i.appendChild(a), a
                    }, SVGProLevelsFilter.prototype.getTableValue = function(r, i, a, s, n) {
                        for (var o, h, l = 0, p = Math.min(r, i), c = Math.max(r, i), f = Array.call(null, {
                                length: 256
                            }), u = 0, m = n - s, d = i - r; l <= 256;) h = (o = l / 256) <= p ? d < 0 ? n : s : o >= c ? d < 0 ? s : n : s + m * Math.pow((o - r) / d, 1 / a), f[u] = h, u += 1, l += 256 / 255;
                        return f.join(" ")
                    }, SVGProLevelsFilter.prototype.renderFrame = function(r) {
                        if (r || this.filterManager._mdf) {
                            var i, a = this.filterManager.effectElements;
                            this.feFuncRComposed && (r || a[3].p._mdf || a[4].p._mdf || a[5].p._mdf || a[6].p._mdf || a[7].p._mdf) && (i = this.getTableValue(a[3].p.v, a[4].p.v, a[5].p.v, a[6].p.v, a[7].p.v), this.feFuncRComposed.setAttribute("tableValues", i), this.feFuncGComposed.setAttribute("tableValues", i), this.feFuncBComposed.setAttribute("tableValues", i)), this.feFuncR && (r || a[10].p._mdf || a[11].p._mdf || a[12].p._mdf || a[13].p._mdf || a[14].p._mdf) && (i = this.getTableValue(a[10].p.v, a[11].p.v, a[12].p.v, a[13].p.v, a[14].p.v), this.feFuncR.setAttribute("tableValues", i)), this.feFuncG && (r || a[17].p._mdf || a[18].p._mdf || a[19].p._mdf || a[20].p._mdf || a[21].p._mdf) && (i = this.getTableValue(a[17].p.v, a[18].p.v, a[19].p.v, a[20].p.v, a[21].p.v), this.feFuncG.setAttribute("tableValues", i)), this.feFuncB && (r || a[24].p._mdf || a[25].p._mdf || a[26].p._mdf || a[27].p._mdf || a[28].p._mdf) && (i = this.getTableValue(a[24].p.v, a[25].p.v, a[26].p.v, a[27].p.v, a[28].p.v), this.feFuncB.setAttribute("tableValues", i)), this.feFuncA && (r || a[31].p._mdf || a[32].p._mdf || a[33].p._mdf || a[34].p._mdf || a[35].p._mdf) && (i = this.getTableValue(a[31].p.v, a[32].p.v, a[33].p.v, a[34].p.v, a[35].p.v), this.feFuncA.setAttribute("tableValues", i))
                        }
                    }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(r) {
                        if (r || this.filterManager._mdf) {
                            if ((r || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), r || this.filterManager.effectElements[0].p._mdf) {
                                var i = this.filterManager.effectElements[0].p.v;
                                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * i[0]), Math.round(255 * i[1]), Math.round(255 * i[2])))
                            }
                            if ((r || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), r || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                var a = this.filterManager.effectElements[3].p.v,
                                    s = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                    n = a * Math.cos(s),
                                    o = a * Math.sin(s);
                                this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", o)
                            }
                        }
                    };
                    var _svgMatteSymbols = [];

                    function SVGMatte3Effect(r, i, a) {
                        this.initialized = !1, this.filterManager = i, this.filterElem = r, this.elem = a, a.matteElement = createNS("g"), a.matteElement.appendChild(a.layerElement), a.matteElement.appendChild(a.transformedElement), a.baseElement = a.matteElement
                    }

                    function SVGGaussianBlurEffect(r, i, a, s) {
                        r.setAttribute("x", "-100%"), r.setAttribute("y", "-100%"), r.setAttribute("width", "300%"), r.setAttribute("height", "300%"), this.filterManager = i;
                        var n = createNS("feGaussianBlur");
                        n.setAttribute("result", s), r.appendChild(n), this.feGaussianBlur = n
                    }
                    return SVGMatte3Effect.prototype.findSymbol = function(r) {
                        for (var i = 0, a = _svgMatteSymbols.length; i < a;) {
                            if (_svgMatteSymbols[i] === r) return _svgMatteSymbols[i];
                            i += 1
                        }
                        return null
                    }, SVGMatte3Effect.prototype.replaceInParent = function(r, i) {
                        var a = r.layerElement.parentNode;
                        if (a) {
                            for (var s, n = a.children, o = 0, h = n.length; o < h && n[o] !== r.layerElement;) o += 1;
                            o <= h - 2 && (s = n[o + 1]);
                            var l = createNS("use");
                            l.setAttribute("href", "#" + i), s ? a.insertBefore(l, s) : a.appendChild(l)
                        }
                    }, SVGMatte3Effect.prototype.setElementAsMask = function(r, i) {
                        if (!this.findSymbol(i)) {
                            var a = createElementID(),
                                s = createNS("mask");
                            s.setAttribute("id", i.layerId), s.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(i);
                            var n = r.globalData.defs;
                            n.appendChild(s);
                            var o = createNS("symbol");
                            o.setAttribute("id", a), this.replaceInParent(i, a), o.appendChild(i.layerElement), n.appendChild(o);
                            var h = createNS("use");
                            h.setAttribute("href", "#" + a), s.appendChild(h), i.data.hd = !1, i.show()
                        }
                        r.setMatte(i.layerId)
                    }, SVGMatte3Effect.prototype.initialize = function() {
                        for (var r = this.filterManager.effectElements[0].p.v, i = this.elem.comp.elements, a = 0, s = i.length; a < s;) i[a] && i[a].data.ind === r && this.setElementAsMask(this.elem, i[a]), a += 1;
                        this.initialized = !0
                    }, SVGMatte3Effect.prototype.renderFrame = function() {
                        this.initialized || this.initialize()
                    }, SVGGaussianBlurEffect.prototype.renderFrame = function(r) {
                        if (r || this.filterManager._mdf) {
                            var i = .3 * this.filterManager.effectElements[0].p.v,
                                a = this.filterManager.effectElements[1].p.v,
                                s = 3 == a ? 0 : i,
                                n = 2 == a ? 0 : i;
                            this.feGaussianBlur.setAttribute("stdDeviation", s + " " + n);
                            var o = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                            this.feGaussianBlur.setAttribute("edgeMode", o)
                        }
                    }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
                }, module.exports = e())
            })),
            REACT_LOTTIE_PLAYER_VERSION = "3.5.3",
            LOTTIE_WEB_VERSION = "^5.10.2",
            PlayerState, PlayerEvent;

        function parseSrc(r) {
            if ("object" == typeof r) return r;
            try {
                return JSON.parse(r)
            } catch (r) {}
            try {
                return new URL(r).toString()
            } catch (r) {}
            return r
        }
        exports.fL = void 0, PlayerState = exports.fL || (exports.fL = {}), PlayerState.Loading = "loading", PlayerState.Playing = "playing", PlayerState.Paused = "paused", PlayerState.Stopped = "stopped", PlayerState.Frozen = "frozen", PlayerState.Error = "error", exports.rg = void 0, PlayerEvent = exports.rg || (exports.rg = {}), PlayerEvent.Load = "load", PlayerEvent.InstanceSaved = "instanceSaved", PlayerEvent.Error = "error", PlayerEvent.Ready = "ready", PlayerEvent.Play = "play", PlayerEvent.Pause = "pause", PlayerEvent.Stop = "stop", PlayerEvent.Freeze = "freeze", PlayerEvent.Loop = "loop", PlayerEvent.Complete = "complete", PlayerEvent.Frame = "frame";
        var defaultOptions = {
                clearCanvas: !1,
                hideOnTransparent: !0,
                progressiveLoad: !0
            },
            Player = function(r) {
                function i(i) {
                    var a = r.call(this, i) || this;
                    return a.container = null, a.unmounted = !1, a.handleBgChange = function(r) {
                        a.setState({
                            background: r
                        })
                    }, a.triggerDownload = function(r, i) {
                        var a = document.createElement("a");
                        a.href = r, a.download = i, document.body.appendChild(a), a.click(), document.body.removeChild(a)
                    }, a.snapshot = function(r) {
                        var i;
                        void 0 === r && (r = !0);
                        var s = a.props.id ? a.props.id : "lottie",
                            n = document.getElementById(s);
                        if ("svg" === a.props.renderer) {
                            if (n) {
                                var o = n.querySelector("svg");
                                if (o) {
                                    var h = (new XMLSerializer).serializeToString(o);
                                    i = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(h)
                                }
                            }
                            r && a.triggerDownload(i, "snapshot.svg")
                        } else if ("canvas" === a.props.renderer) {
                            if (n) {
                                var l = n.querySelector("canvas");
                                l && (i = l.toDataURL("image/png"))
                            }
                            r && a.triggerDownload(i, "snapshot.png")
                        }
                        return i
                    }, "undefined" != typeof window && (window.lottie = lottie), a.state = {
                        animationData: null,
                        background: "transparent",
                        containerRef: React__namespace.createRef(),
                        debug: !0,
                        instance: null,
                        playerState: exports.fL.Loading,
                        seeker: 0
                    }, a
                }
                return __extends(i, r), i.getDerivedStateFromProps = function(r, i) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(a) {
                            return r.background !== i.background ? [2, {
                                background: r.background
                            }] : [2, null]
                        }))
                    }))
                }, i.prototype.getVersions = function() {
                    return {
                        lottieWebVersion: LOTTIE_WEB_VERSION,
                        lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION
                    }
                }, i.prototype.componentDidMount = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.unmounted ? [3, 2] : [4, this.createLottie()];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, i.prototype.componentWillUnmount = function() {
                    this.unmounted = !0, this.state.instance && this.state.instance.destroy()
                }, i.prototype.componentDidUpdate = function(r) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.props.src === r.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
                                case 1:
                                    i.sent(), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, i.prototype.render = function() {
                    var r = this,
                        i = this.props,
                        a = i.children,
                        s = i.loop,
                        n = i.style,
                        o = i.onBackgroundChange,
                        h = i.className,
                        l = this.state,
                        p = l.animationData,
                        c = l.instance,
                        f = l.playerState,
                        u = l.seeker,
                        m = l.debug,
                        d = l.background;
                    return React__namespace.createElement("div", {
                        className: "lf-player-container"
                    }, this.state.playerState === exports.fL.Error ? React__namespace.createElement("div", {
                        className: "lf-error"
                    }, React__namespace.createElement("span", {
                        "aria-label": "error-symbol",
                        role: "img"
                    }, "⚠️")) : React__namespace.createElement("div", {
                        id: this.props.id ? this.props.id : "lottie",
                        ref: function(i) {
                            return r.container = i
                        },
                        style: __assign({
                            background: d,
                            margin: "0 auto",
                            outline: "none",
                            overflow: "hidden"
                        }, n),
                        className: h
                    }), React__namespace.Children.map(a, (function(i) {
                        return React__namespace.isValidElement(i) ? React__namespace.cloneElement(i, {
                            animationData: p,
                            background: d,
                            debug: m,
                            instance: c,
                            loop: s,
                            pause: function() {
                                return r.pause()
                            },
                            play: function() {
                                return r.play()
                            },
                            playerState: f,
                            seeker: u,
                            setBackground: function(i) {
                                r.setState({
                                    background: i
                                }), "function" == typeof o && o(i)
                            },
                            setSeeker: function(i, a) {
                                return r.setSeeker(i, a)
                            },
                            stop: function() {
                                return r.stop()
                            },
                            toggleDebug: function() {
                                return r.toggleDebug()
                            },
                            setLoop: function(i) {
                                return r.setLoop(i)
                            },
                            colorChangedEvent: function(i) {
                                r.handleBgChange(i)
                            },
                            snapshot: function() {
                                r.snapshot()
                            }
                        }) : null
                    })))
                }, i.prototype.toggleDebug = function() {
                    this.setState({
                        debug: !this.state.debug
                    })
                }, i.prototype.createLottie = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        var r, i, a, s, n, o, h, l, p, c, f, u, m, d, y = this;
                        return __generator(this, (function(g) {
                            switch (g.label) {
                                case 0:
                                    if (r = this.props, i = r.autoplay, a = r.direction, s = r.loop, n = r.lottieRef, o = r.renderer, h = r.speed, l = r.src, p = r.background, c = r.rendererSettings, f = r.hover, u = this.state.instance, !l || !this.container) return [2];
                                    g.label = 1;
                                case 1:
                                    return g.trys.push([1, 5, , 6]), "string" != typeof(m = parseSrc(l)) ? [3, 4] : [4, fetch(m).catch((function() {
                                        throw y.setState({
                                            playerState: exports.fL.Error
                                        }), y.triggerEvent(exports.rg.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                                    }))];
                                case 2:
                                    return [4, g.sent().json().catch((function() {
                                        throw y.setState({
                                            playerState: exports.fL.Error
                                        }), y.triggerEvent(exports.rg.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                                    }))];
                                case 3:
                                    m = g.sent(), g.label = 4;
                                case 4:
                                    return u && u.destroy(), d = lottie.loadAnimation({
                                        rendererSettings: c || defaultOptions,
                                        animationData: m,
                                        autoplay: i || !1,
                                        container: this.container,
                                        loop: s || !1,
                                        renderer: o
                                    }), h && d.setSpeed(h), this.setState({
                                        animationData: m
                                    }), this.setState({
                                        instance: d
                                    }, (function() {
                                        y.triggerEvent(exports.rg.InstanceSaved), "function" == typeof n && n(d), i && y.play()
                                    })), d.addEventListener("enterFrame", (function() {
                                        y.triggerEvent(exports.rg.Frame), y.setState({
                                            seeker: Math.floor(d.currentFrame)
                                        })
                                    })), d.addEventListener("DOMLoaded", (function() {
                                        y.triggerEvent(exports.rg.Load)
                                    })), d.addEventListener("data_ready", (function() {
                                        y.triggerEvent(exports.rg.Ready)
                                    })), d.addEventListener("data_failed", (function() {
                                        y.setState({
                                            playerState: exports.fL.Error
                                        }), y.triggerEvent(exports.rg.Error)
                                    })), d.addEventListener("loopComplete", (function() {
                                        y.triggerEvent(exports.rg.Loop)
                                    })), d.addEventListener("complete", (function() {
                                        y.triggerEvent(exports.rg.Complete), y.setState({
                                            playerState: exports.fL.Paused
                                        }), y.props.keepLastFrame && !y.props.loop || y.setSeeker(0)
                                    })), this.container && (this.container.addEventListener("mouseenter", (function() {
                                        f && y.state.playerState !== exports.fL.Playing && (y.props.keepLastFrame && y.stop(), y.play())
                                    })), this.container.addEventListener("mouseleave", (function() {
                                        f && y.state.playerState === exports.fL.Playing && y.stop()
                                    }))), h && this.setPlayerSpeed(h), a && this.setPlayerDirection(a), p && this.setState({
                                        background: p
                                    }), [3, 6];
                                case 5:
                                    return g.sent(), this.setState({
                                        playerState: exports.fL.Error
                                    }), this.triggerEvent(exports.rg.Error), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, i.prototype.play = function() {
                    var r = this.state.instance;
                    r && (this.triggerEvent(exports.rg.Play), r.play(), this.setState({
                        playerState: exports.fL.Playing
                    }))
                }, i.prototype.pause = function() {
                    var r = this.state.instance;
                    r && (this.triggerEvent(exports.rg.Pause), r.pause(), this.setState({
                        playerState: exports.fL.Paused
                    }))
                }, i.prototype.stop = function() {
                    var r = this.state.instance;
                    r && (this.triggerEvent(exports.rg.Stop), r.stop(), this.setState({
                        playerState: exports.fL.Stopped
                    }))
                }, i.prototype.setPlayerSpeed = function(r) {
                    var i = this.state.instance;
                    i && i.setSpeed(r)
                }, i.prototype.setPlayerDirection = function(r) {
                    var i = this.state.instance;
                    i && i.setDirection(r)
                }, i.prototype.setSeeker = function(r, i) {
                    void 0 === i && (i = !1);
                    var a = this.state,
                        s = a.instance,
                        n = a.playerState;
                    s && (i && n === exports.fL.Playing ? s.goToAndPlay(r, !0) : (s.goToAndStop(r, !0), this.triggerEvent(exports.rg.Pause), this.setState({
                        playerState: exports.fL.Paused
                    })))
                }, i.prototype.setLoop = function(r) {
                    var i = this.state.instance;
                    i && (i.loop = r, this.setState({
                        instance: i
                    }))
                }, i.prototype.triggerEvent = function(r) {
                    var i = this.props.onEvent;
                    i && i(r)
                }, i.defaultProps = {
                    loop: !1
                }, i
            }(React__namespace.Component);

        function styleInject(r, i) {
            void 0 === i && (i = {});
            var a = i.insertAt;
            if (r && "undefined" != typeof document) {
                var s = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("style");
                n.type = "text/css", "top" === a && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = r : n.appendChild(document.createTextNode(r))
            }
        }
        var css_248z = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n",
            stylesheet = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n";
        styleInject(css_248z);
        var ColorPicker = function(r) {
                function i() {
                    var i = null !== r && r.apply(this, arguments) || this;
                    return i.state = {
                        red: 0,
                        green: 0,
                        blue: 0,
                        rgba: null,
                        hex: "#000000",
                        colorComponents: []
                    }, i.handleChange = function(r, a) {
                        if ("r" === r) {
                            var s = "#" + (256 | a).toString(16).slice(1) + (256 | i.state.green).toString(16).slice(1) + (256 | i.state.blue).toString(16).slice(1);
                            i.setState({
                                hex: s
                            })
                        } else "g" === r ? (s = "#" + (256 | i.state.red).toString(16).slice(1) + (256 | a).toString(16).slice(1) + (256 | i.state.blue).toString(16).slice(1), i.setState({
                            hex: s
                        })) : "b" === r && (s = "#" + (256 | i.state.red).toString(16).slice(1) + (256 | i.state.green).toString(16).slice(1) + (256 | a).toString(16).slice(1), i.setState({
                            hex: s
                        }))
                    }, i.parseColor = function(r) {
                        var a;
                        if ("string" == typeof r) {
                            if ("#" === r[0]) {
                                var s = 4 === r.length ? [r.slice(1, 2), r.slice(2, 3), r.slice(3, 4)].map((function(r) {
                                    return parseInt("" + r + r, 16)
                                })) : [r.slice(1, 3), r.slice(3, 5), r.slice(5, 7)].map((function(r) {
                                    return parseInt(r, 16)
                                }));
                                i.setState({
                                    colorComponents: s
                                })
                            } else r.startsWith("rgb") && void 0 !== (s = null === (a = r.match(/\d+/g)) || void 0 === a ? void 0 : a.map((function(r) {
                                return parseInt(r)
                            }))) && i.setState({
                                colorComponents: s
                            });
                            i.state.colorComponents.length && (i.setState({
                                red: i.state.colorComponents[0]
                            }), i.setState({
                                green: i.state.colorComponents[1]
                            }), i.setState({
                                blue: i.state.colorComponents[2]
                            }))
                        }
                    }, i
                }
                return __extends(i, r), i.prototype.componentDidUpdate = function(r, i) {
                    return this.props.colorChangedEvent && this.state.hex !== i.hex && this.props.colorChangedEvent(this.state.hex), !0
                }, i.prototype.render = function() {
                    var r = this;
                    return React__namespace.createElement("div", {
                        className: "lf-color-picker"
                    }, React__namespace.createElement("div", {
                        className: "lf-color-selectors"
                    }, React__namespace.createElement("div", {
                        className: "lf-color-component"
                    }, React__namespace.createElement("strong", null, "Red"), React__namespace.createElement("input", {
                        type: "range",
                        min: "0",
                        max: "255",
                        value: this.state.red,
                        onChange: function(i) {
                            r.setState({
                                red: i.target.value
                            }), r.handleChange("r", i.target.value)
                        }
                    }), React__namespace.createElement("input", {
                        className: "lf-text-input",
                        type: "number",
                        min: "0",
                        max: "255",
                        value: this.state.red,
                        onChange: function(i) {
                            r.setState({
                                red: i.target.value
                            }), r.handleChange("r", i.target.value)
                        }
                    })), React__namespace.createElement("div", {
                        className: "lf-color-component"
                    }, React__namespace.createElement("strong", null, "Green"), React__namespace.createElement("input", {
                        type: "range",
                        min: "0",
                        max: "255",
                        value: this.state.green,
                        onChange: function(i) {
                            r.setState({
                                green: i.target.value
                            }), r.handleChange("g", i.target.value)
                        }
                    }), React__namespace.createElement("input", {
                        className: "lf-text-input",
                        type: "number",
                        min: "0",
                        max: "255",
                        value: this.state.green,
                        onChange: function(i) {
                            r.setState({
                                green: i.target.value
                            }), r.handleChange("g", i.target.value)
                        }
                    })), React__namespace.createElement("div", {
                        className: "lf-color-component"
                    }, React__namespace.createElement("strong", null, "Blue"), React__namespace.createElement("input", {
                        type: "range",
                        min: "0",
                        max: "255",
                        value: this.state.blue,
                        onChange: function(i) {
                            r.setState({
                                blue: i.target.value
                            }), r.handleChange("b", i.target.value)
                        }
                    }), React__namespace.createElement("input", {
                        className: "lf-text-input",
                        type: "number",
                        min: "0",
                        max: "255",
                        value: this.state.blue,
                        onChange: function(i) {
                            r.setState({
                                blue: i.target.value
                            }), r.handleChange("b", i.target.value)
                        }
                    }))), React__namespace.createElement("div", {
                        className: "lf-color-preview"
                    }, React__namespace.createElement("div", {
                        className: "lf-preview",
                        style: {
                            background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"
                        }
                    }), React__namespace.createElement("div", null, React__namespace.createElement("input", {
                        className: "lf-text-input",
                        type: "text",
                        value: this.state.hex,
                        onChange: function(i) {
                            r.setState({
                                hex: i.target.value
                            }), r.parseColor(i.target.value)
                        }
                    }))))
                }, i
            }(React__namespace.Component),
            Popover = function(r) {
                var i = r.children,
                    a = r.icon,
                    s = React.useState(null),
                    n = s[0],
                    o = s[1],
                    h = React.useState(null),
                    l = h[0],
                    p = h[1],
                    c = React.useState(null),
                    f = c[0],
                    u = c[1],
                    m = React.useState(!1),
                    d = m[0],
                    y = m[1];
                return React.useEffect((function() {
                    if (n && l) {
                        var r = n.getBoundingClientRect(),
                            i = l.getBoundingClientRect(),
                            a = r.left + i.width > window.innerWidth ? -1 : 0;
                        u(a)
                    }
                }), [f, l, n]), React__namespace.createElement("div", {
                    className: "lf-popover",
                    onMouseOver: function() {
                        y(!0)
                    },
                    onMouseLeave: function() {
                        y(!1)
                    },
                    ref: function(r) {
                        o(r)
                    }
                }, React__namespace.createElement("div", {
                    className: " lf-player-btn"
                }, a), React__namespace.createElement("div", {
                    className: "lf-popover-content",
                    ref: function(r) {
                        p(r)
                    },
                    style: {
                        bottom: "22px",
                        right: "0px",
                        zIndex: 2,
                        visibility: d ? "visible" : "hidden"
                    }
                }, i))
            },
            Seeker = function(r) {
                function i(i) {
                    var a = r.call(this, i) || this;
                    return a.inputRef = React__namespace.createRef(), a.handleChange = function() {
                        return function(r) {
                            var i = r.target.value,
                                s = Math.floor(i / 100 * a.props.max);
                            a.props.onChange(s)
                        }
                    }, a.state = {
                        value: 0
                    }, a
                }
                return __extends(i, r), i.prototype.render = function() {
                    var r = this.props.value / this.props.max * 100,
                        i = {
                            backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + r + "%, rgba(15, 204, 206, 0.4)), color-stop(" + r + "%, #DAE1E7))"
                        },
                        a = {
                            position: "absolute",
                            left: 0,
                            marginTop: "8px",
                            width: "20px",
                            display: "block",
                            border: "0px",
                            backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                            color: this.props.darkTheme ? "#B9B9B9" : "#555",
                            padding: "2px",
                            textAlign: "center",
                            borderRadius: "3px",
                            fontSize: "8px",
                            fontWeight: "bold"
                        },
                        s = {
                            position: "absolute",
                            right: 0,
                            marginTop: "8px",
                            width: "20px",
                            display: "block",
                            border: "0px",
                            backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                            color: this.props.darkTheme ? "#B9B9B9" : "#555",
                            padding: "2px",
                            textAlign: "center",
                            borderRadius: "3px",
                            fontSize: "8px",
                            fontWeight: "bold"
                        };
                    return React__namespace.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            marginRight: "5px",
                            marginLeft: "5px",
                            position: "relative"
                        }
                    }, React__namespace.createElement("input", {
                        ref: this.inputRef,
                        id: "track",
                        className: "lf-progress",
                        name: "progress",
                        "aria-label": "progress",
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: r,
                        onInput: this.handleChange(),
                        onChange: this.handleChange(),
                        style: i
                    }), this.props.showLabels && React__namespace.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        }
                    }, React__namespace.createElement("div", {
                        style: a
                    }, this.props.min), React__namespace.createElement("div", {
                        style: s
                    }, this.props.max)))
                }, i
            }(React__namespace.Component),
            ControlButtonStyle = {
                display: "inline-flex",
                cursor: "pointer"
            },
            Controls = function(r) {
                function i(i) {
                    var a = r.call(this, i) || this;
                    return a.state = {
                        activeFrame: 0,
                        mouseDown: !1
                    }, a
                }
                return __extends(i, r), i.prototype.render = function() {
                    var r = this,
                        i = this.props,
                        a = i.instance,
                        s = i.playerState,
                        n = i.seeker,
                        o = i.setLoop,
                        h = i.setSeeker,
                        l = i.play,
                        p = i.pause,
                        c = i.stop,
                        f = i.visible,
                        u = i.buttons;
                    if (!a) return null;
                    if (!f) return null;
                    var m = !u || u.includes("play"),
                        d = !u || u.includes("stop"),
                        y = !u || u.includes("repeat"),
                        g = !u || u.includes("frame"),
                        v = !u || u.includes("background"),
                        b = !u || u.includes("snapshot"),
                        x = {
                            width: 14,
                            height: 14,
                            viewBox: "0 0 24 24"
                        },
                        _ = Math.round(a.currentFrame);
                    return React__namespace.createElement("div", {
                        className: "lf-player-controls",
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff",
                            paddingLeft: "10px",
                            paddingRight: "10px"
                        }
                    }, m && React__namespace.createElement("div", {
                        role: "button",
                        "aria-label": s === exports.fL.Playing ? exports.rg.Pause : exports.rg.Play,
                        tabIndex: 0,
                        onClick: function() {
                            s === exports.fL.Playing ? "function" == typeof p && p() : "function" == typeof l && l()
                        },
                        onKeyDown: function() {
                            s === exports.fL.Playing ? "function" == typeof p && p() : "function" == typeof l && l()
                        },
                        className: "lf-player-btn",
                        style: ControlButtonStyle
                    }, s === exports.fL.Playing ? React__namespace.createElement("svg", __assign({}, x), React__namespace.createElement("rect", {
                        height: "22.9",
                        rx: "1.9",
                        width: "7.6",
                        x: "14",
                        y: ".5"
                    }), React__namespace.createElement("rect", {
                        height: "22.9",
                        rx: "1.9",
                        width: "7.6",
                        x: "2",
                        y: ".5"
                    })) : React__namespace.createElement("svg", __assign({}, x), React__namespace.createElement("path", {
                        d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"
                    }))), d && React__namespace.createElement("div", {
                        tabIndex: 0,
                        role: "button",
                        "aria-label": exports.rg.Stop,
                        onClick: function() {
                            return c && c()
                        },
                        onKeyDown: function() {
                            return c && c()
                        },
                        className: s === exports.fL.Stopped ? "lf-player-btn active" : "lf-player-btn",
                        style: ControlButtonStyle
                    }, React__namespace.createElement("svg", __assign({}, x), React__namespace.createElement("path", {
                        d: "M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333\n            22H3.667A1.67 1.67 0 0 1 2 20.333z"
                    }))), React__namespace.createElement(Seeker, {
                        min: 0,
                        step: 1,
                        max: a ? a.totalFrames : 1,
                        value: n || 0,
                        onChange: function(i) {
                            h && r.setState({
                                activeFrame: i
                            }, (function() {
                                h(i, !1)
                            }))
                        },
                        onChangeEnd: function(i) {
                            h && r.setState({
                                activeFrame: i
                            }, (function() {
                                h(i, !1)
                            }))
                        },
                        showLabels: this.props.showLabels,
                        darkTheme: this.props.darkTheme
                    }), g && React__namespace.createElement("div", {
                        role: "button",
                        className: "lf-player-btn-container"
                    }, React__namespace.createElement("input", {
                        style: {
                            outline: "none",
                            border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid",
                            borderRadius: "3px",
                            width: "40px",
                            textAlign: "center",
                            backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff",
                            color: this.props.darkTheme ? "#B9B9B9" : "#999",
                            fontSize: "0.7rem",
                            padding: "0",
                            fontFamily: "inherit"
                        },
                        type: "text",
                        value: _,
                        readOnly: !0
                    })), y && React__namespace.createElement("div", {
                        role: "button",
                        "aria-label": exports.rg.Loop,
                        tabIndex: 0,
                        onClick: function() {
                            a && o && o(!a.loop)
                        },
                        onKeyDown: function() {
                            a && o && o(!a.loop)
                        },
                        className: a.loop ? "lf-player-btn active" : "lf-player-btn",
                        style: ControlButtonStyle
                    }, React__namespace.createElement("svg", __assign({}, x), React__namespace.createElement("path", {
                        d: "M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116\n            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0\n            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025\n            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0\n            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115\n            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z",
                        stroke: "#8795A1",
                        strokeWidth: ".26"
                    }), React__namespace.createElement("path", {
                        d: "M11.1482\n            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898\n            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347\n            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014\n            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453\n            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368\n            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671\n            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442\n            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z",
                        fill: "#8795A1",
                        stroke: "#8795A1",
                        strokeWidth: ".26"
                    }))), v && React__namespace.createElement(Popover, {
                        icon: React__namespace.createElement("svg", __assign({}, x), React__namespace.createElement("path", {
                            d: "M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0\n            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1\n            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0\n            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6\n            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z"
                        }))
                    }, React__namespace.createElement("div", {
                        slot: "content",
                        className: "lf-popover popover-background"
                    }, React__namespace.createElement(ColorPicker, {
                        colorChangedEvent: this.props.colorChangedEvent
                    }))), b && React__namespace.createElement(Popover, {
                        icon: React__namespace.createElement("svg", __assign({}, x), React__namespace.createElement("path", {
                            clipRule: "evenodd",
                            d: "M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983\n              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0\n              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z",
                            fillRule: "evenodd"
                        }), React__namespace.createElement("path", {
                            d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z"
                        }), React__namespace.createElement("circle", {
                            cx: "7.444",
                            cy: "6.513",
                            r: "2.032"
                        }), React__namespace.createElement("path", {
                            d: "M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0\n              01-.803.804H9.562a1.061 1.061 0 100 2.123z",
                            stroke: "#8795a1",
                            strokeWidth: ".215"
                        }))
                    }, React__namespace.createElement("div", {
                        slot: "content",
                        className: "lf-popover lf-popover-snapshot",
                        onWheel: function(r) {
                            h && h(_ + (r.deltaY > 0 ? -1 : 1), !1)
                        }
                    }, React__namespace.createElement("h5", null, "Frame ", _), React__namespace.createElement("div", {
                        style: {
                            cursor: "pointer",
                            color: "#0FCCCE"
                        },
                        onClick: this.props.snapshot
                    }, "Download SVG"), React__namespace.createElement("div", {
                        style: {
                            cursor: "pointer",
                            color: "#0FCCCE"
                        },
                        onClick: this.props.snapshot
                    }, "Download PNG"), React__namespace.createElement("i", {
                        className: "lf-note"
                    }, "Scroll with mousewheel to find exact frame"))))
                }, i
            }(React__namespace.Component);
        __webpack_unused_export__ = Controls, exports.J5 = Player, __webpack_unused_export__ = Seeker, __webpack_unused_export__ = parseSrc
    },
    99138: (r, i, a) => {
        r = a.nmd(r),
            function r(i, a, s, n) {
                var o = !!(i.Worker && i.Blob && i.Promise && i.OffscreenCanvas && i.OffscreenCanvasRenderingContext2D && i.HTMLCanvasElement && i.HTMLCanvasElement.prototype.transferControlToOffscreen && i.URL && i.URL.createObjectURL);

                function h() {}

                function l(r) {
                    var s = a.exports.Promise,
                        n = void 0 !== s ? s : i.Promise;
                    return "function" == typeof n ? new n(r) : (r(h, h), null)
                }
                var p, c, f, u, m, d, y, g, v, b = (f = Math.floor(1e3 / 60), u = {}, m = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (p = function(r) {
                        var i = Math.random();
                        return u[i] = requestAnimationFrame((function a(s) {
                            m === s || m + f - 1 < s ? (m = s, delete u[i], r()) : u[i] = requestAnimationFrame(a)
                        })), i
                    }, c = function(r) {
                        u[r] && cancelAnimationFrame(u[r])
                    }) : (p = function(r) {
                        return setTimeout(r, f)
                    }, c = function(r) {
                        return clearTimeout(r)
                    }), {
                        frame: p,
                        cancel: c
                    }),
                    x = (g = {}, function() {
                        if (d) return d;
                        if (!s && o) {
                            var i = ["var CONFETTI, SIZE = {}, module = {};", "(" + r.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                            try {
                                d = new Worker(URL.createObjectURL(new Blob([i])))
                            } catch (r) {
                                return void 0 !== typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", r), null
                            }! function(r) {
                                function i(i, a) {
                                    r.postMessage({
                                        options: i || {},
                                        callback: a
                                    })
                                }
                                r.init = function(i) {
                                    var a = i.transferControlToOffscreen();
                                    r.postMessage({
                                        canvas: a
                                    }, [a])
                                }, r.fire = function(a, s, n) {
                                    if (y) return i(a, null), y;
                                    var o = Math.random().toString(36).slice(2);
                                    return y = l((function(s) {
                                        function h(i) {
                                            i.data.callback === o && (delete g[o], r.removeEventListener("message", h), y = null, n(), s())
                                        }
                                        r.addEventListener("message", h), i(a, o), g[o] = h.bind(null, {
                                            data: {
                                                callback: o
                                            }
                                        })
                                    }))
                                }, r.reset = function() {
                                    for (var i in r.postMessage({
                                            reset: !0
                                        }), g) g[i](), delete g[i]
                                }
                            }(d)
                        }
                        return d
                    }),
                    _ = {
                        particleCount: 50,
                        angle: 90,
                        spread: 45,
                        startVelocity: 45,
                        decay: .9,
                        gravity: 1,
                        drift: 0,
                        ticks: 200,
                        x: .5,
                        y: .5,
                        shapes: ["square", "circle"],
                        zIndex: 100,
                        colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                        disableForReducedMotion: !1,
                        scalar: 1
                    };

                function E(r, i, a) {
                    return function(r, i) {
                        return i ? i(r) : r
                    }(r && null != r[i] ? r[i] : _[i], a)
                }

                function S(r) {
                    return r < 0 ? 0 : Math.floor(r)
                }

                function P(r) {
                    return parseInt(r, 16)
                }

                function C(r) {
                    return r.map(w)
                }

                function w(r) {
                    var i = String(r).replace(/[^0-9a-f]/gi, "");
                    return i.length < 6 && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]), {
                        r: P(i.substring(0, 2)),
                        g: P(i.substring(2, 4)),
                        b: P(i.substring(4, 6))
                    }
                }

                function k(r) {
                    r.width = document.documentElement.clientWidth, r.height = document.documentElement.clientHeight
                }

                function A(r) {
                    var i = r.getBoundingClientRect();
                    r.width = i.width, r.height = i.height
                }

                function F(r, i, a, o, h) {
                    var p, c, f = i.slice(),
                        u = r.getContext("2d"),
                        m = l((function(i) {
                                function l() {
                                    p = c = null, u.clearRect(0, 0, o.width, o.height), h(), i()
                                }
                                p = b.frame((function i() {
                                        !s || o.width === n.width && o.height === n.height || (o.width = r.width = n.width, o.height = r.height = n.height), o.width || o.height || (a(r), o.width = r.width, o.height = r.height), u.clearRect(0, 0, o.width, o.height), f = f.filter((function(r) {
                                                return function(r, i) {
                                                    i.x += Math.cos(i.angle2D) * i.velocity + i.drift, i.y += Math.sin(i.angle2D) * i.velocity + i.gravity, i.wobble += i.wobbleSpeed, i.velocity *= i.decay, i.tiltAngle += .1, i.tiltSin = Math.sin(i.tiltAngle), i.tiltCos = Math.cos(i.tiltAngle), i.random = Math.random() + 2, i.wobbleX = i.x + 10 * i.scalar * Math.cos(i.wobble), i.wobbleY = i.y + 10 * i.scalar * Math.sin(i.wobble);
                                                    var a = i.tick++/i.totalTicks,s=i.x+i.random*i.tiltCos,n=i.y+i.random*i.tiltSin,o=i.wobbleX+i.random*i.tiltCos,h=i.wobbleY+i.random*i.tiltSin;if(r.fillStyle="rgba("+i.color.r+", "+i.color.g+", "+i.color.b+", "+(1-a)+")",r.beginPath(),"circle"===i.shape)r.ellipse?r.ellipse(i.x,i.y,Math.abs(o-s)*i.ovalScalar,Math.abs(h-n)*i.ovalScalar,Math.PI/
                                                    10 * i.wobble, 0, 2 * Math.PI): function(r, i, a, s, n, o, h, l, p) {
                                                    r.save(), r.translate(i, a), r.rotate(o), r.scale(s, n), r.arc(0, 0, 1, h, l, p), r.restore()
                                                }(r, i.x, i.y, Math.abs(o - s) * i.ovalScalar, Math.abs(h - n) * i.ovalScalar, Math.PI / 10 * i.wobble, 0, 2 * Math.PI);
                                                else if ("star" === i.shape)
                                                    for (var l = Math.PI / 2 * 3, p = 4 * i.scalar, c = 8 * i.scalar, f = i.x, u = i.y, m = 5, d = Math.PI / m; m--;) f = i.x + Math.cos(l) * c, u = i.y + Math.sin(l) * c, r.lineTo(f, u), l += d, f = i.x + Math.cos(l) * p, u = i.y + Math.sin(l) * p, r.lineTo(f, u), l += d;
                                                else r.moveTo(Math.floor(i.x), Math.floor(i.y)), r.lineTo(Math.floor(i.wobbleX), Math.floor(n)), r.lineTo(Math.floor(o), Math.floor(h)), r.lineTo(Math.floor(s), Math.floor(i.wobbleY));
                                                return r.closePath(), r.fill(), i.tick < i.totalTicks
                                            }(u, r)
                                        })), f.length ? p = b.frame(i) : l()
                                })), c = l
                        }));
                return {
                    addFettis: function(r) {
                        return f = f.concat(r), m
                    },
                    canvas: r,
                    promise: m,
                    reset: function() {
                        p && b.cancel(p), c && c()
                    }
                }
            }

        function T(r, a) {
            var s, n = !r,
                h = !!E(a || {}, "resize"),
                p = E(a, "disableForReducedMotion", Boolean),
                c = o && !!E(a || {}, "useWorker") ? x() : null,
                f = n ? k : A,
                u = !(!r || !c) && !!r.__confetti_initialized,
                m = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

            function d(i, a, n) {
                for (var o, h, l, p, c, u = E(i, "particleCount", S), m = E(i, "angle", Number), d = E(i, "spread", Number), y = E(i, "startVelocity", Number), g = E(i, "decay", Number), v = E(i, "gravity", Number), b = E(i, "drift", Number), x = E(i, "colors", C), _ = E(i, "ticks", Number), P = E(i, "shapes"), w = E(i, "scalar"), k = function(r) {
                        var i = E(r, "origin", Object);
                        return i.x = E(i, "x", Number), i.y = E(i, "y", Number), i
                    }(i), A = u, T = [], M = r.width * k.x, D = r.height * k.y; A--;) T.push((o = {
                    x: M,
                    y: D,
                    angle: m,
                    spread: d,
                    startVelocity: y,
                    color: x[A % x.length],
                    shape: P[(p = 0, c = P.length, Math.floor(Math.random() * (c - p)) + p)],
                    ticks: _,
                    decay: g,
                    gravity: v,
                    drift: b,
                    scalar: w
                }, h = void 0, l = void 0, h = o.angle * (Math.PI / 180), l = o.spread * (Math.PI / 180), {
                    x: o.x,
                    y: o.y,
                    wobble: 10 * Math.random(),
                    wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                    velocity: .5 * o.startVelocity + Math.random() * o.startVelocity,
                    angle2D: -h + (.5 * l - Math.random() * l),
                    tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                    color: o.color,
                    shape: o.shape,
                    tick: 0,
                    totalTicks: o.ticks,
                    decay: o.decay,
                    drift: o.drift,
                    random: Math.random() + 2,
                    tiltSin: 0,
                    tiltCos: 0,
                    wobbleX: 0,
                    wobbleY: 0,
                    gravity: 3 * o.gravity,
                    ovalScalar: .6,
                    scalar: o.scalar
                }));
                return s ? s.addFettis(T) : (s = F(r, T, f, a, n)).promise
            }

            function y(a) {
                var o = p || E(a, "disableForReducedMotion", Boolean),
                    y = E(a, "zIndex", Number);
                if (o && m) return l((function(r) {
                    r()
                }));
                n && s ? r = s.canvas : n && !r && (r = function(r) {
                    var i = document.createElement("canvas");
                    return i.style.position = "fixed", i.style.top = "0px", i.style.left = "0px", i.style.pointerEvents = "none", i.style.zIndex = r, i
                }(y), document.body.appendChild(r)), h && !u && f(r);
                var g = {
                    width: r.width,
                    height: r.height
                };

                function v() {
                    if (c) {
                        var i = {
                            getBoundingClientRect: function() {
                                if (!n) return r.getBoundingClientRect()
                            }
                        };
                        return f(i), void c.postMessage({
                            resize: {
                                width: i.width,
                                height: i.height
                            }
                        })
                    }
                    g.width = g.height = null
                }

                function b() {
                    s = null, h && i.removeEventListener("resize", v), n && r && (document.body.removeChild(r), r = null, u = !1)
                }
                return c && !u && c.init(r), u = !0, c && (r.__confetti_initialized = !0), h && i.addEventListener("resize", v, !1), c ? c.fire(a, g, b) : d(a, g, b)
            }
            return y.reset = function() {
                c && c.reset(), s && s.reset()
            }, y
        }

        function M() {
            return v || (v = T(null, {
                useWorker: !0,
                resize: !0
            })), v
        }
        a.exports = function() {
            return M().apply(this, arguments)
        }, a.exports.reset = function() {
            M().reset()
        }, a.exports.create = T
    }(function() {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {}
    }(), r, !1)
},
78565: r => {
    var i = Object.prototype.hasOwnProperty;
    r.exports = function(r, a) {
        return null != r && i.call(r, a)
    }
},
3522: (r, i, a) => {
    var s = a(79833),
        n = /[\\^$.*+?()[\]{}|]/g,
        o = RegExp(n.source);
    r.exports = function(r) {
        return (r = s(r)) && o.test(r) ? r.replace(n, "\\$&") : r
    }
},
18721: (r, i, a) => {
    var s = a(78565),
        n = a(222);
    r.exports = function(r, i) {
        return null != r && n(r, i, s)
    }
},
67523: (r, i, a) => {
    var s = a(89465),
        n = a(47816),
        o = a(67206);
    r.exports = function(r, i) {
        var a = {};
        return i = o(i, 3), n(r, (function(r, n, o) {
            s(a, i(r, n, o), r)
        })), a
    }
},
66604: (r, i, a) => {
    var s = a(89465),
        n = a(47816),
        o = a(67206);
    r.exports = function(r, i) {
        var a = {};
        return i = o(i, 3), n(r, (function(r, n, o) {
            s(a, n, i(r, n, o))
        })), a
    }
},
11865: (r, i, a) => {
    var s = a(35393)((function(r, i, a) {
        return r + (a ? "_" : "") + i.toLowerCase()
    }));
    r.exports = s
},
68305: r => {
    "use strict";
    var i, a;
    try {
        i = Map
    } catch (r) {}
    try {
        a = Set
    } catch (r) {}

    function s(r, o, h) {
        if (!r || "object" != typeof r || "function" == typeof r) return r;
        if (r.nodeType && "cloneNode" in r) return r.cloneNode(!0);
        if (r instanceof Date) return new Date(r.getTime());
        if (r instanceof RegExp) return new RegExp(r);
        if (Array.isArray(r)) return r.map(n);
        if (i && r instanceof i) return new Map(Array.from(r.entries()));
        if (a && r instanceof a) return new Set(Array.from(r.values()));
        if (r instanceof Object) {
            o.push(r);
            var l = Object.create(r);
            for (var p in h.push(l), r) {
                var c = o.findIndex((function(i) {
                    return i === r[p]
                }));
                l[p] = c > -1 ? h[c] : s(r[p], o, h)
            }
            return l
        }
        return r
    }

    function n(r) {
        return s(r, [], [])
    }
    r.exports = n
},
55760: r => {
    "use strict";

    function i(r) {
        this._maxSize = r, this.clear()
    }
    i.prototype.clear = function() {
        this._size = 0, this._values = Object.create(null)
    }, i.prototype.get = function(r) {
        return this._values[r]
    }, i.prototype.set = function(r, i) {
        return this._size >= this._maxSize && this.clear(), r in this._values || this._size++, this._values[r] = i
    };
    var a = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
        s = /^\d+$/,
        n = /^\d/,
        o = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
        h = /^\s*(['"]?)(.*?)(\1)\s*$/,
        l = new i(512),
        p = new i(512),
        c = new i(512);

    function f(r) {
        return l.get(r) || l.set(r, u(r).map((function(r) {
            return r.replace(h, "$2")
        })))
    }

    function u(r) {
        return r.match(a) || [""]
    }

    function m(r) {
        return "string" == typeof r && r && -1 !== ["'", '"'].indexOf(r.charAt(0))
    }

    function d(r) {
        return !m(r) && (function(r) {
            return r.match(n) && !r.match(s)
        }(r) || function(r) {
            return o.test(r)
        }(r))
    }
    r.exports = {
        Cache: i,
        split: u,
        normalizePath: f,
        setter: function(r) {
            var i = f(r);
            return p.get(r) || p.set(r, (function(r, a) {
                for (var s = 0, n = i.length, o = r; s < n - 1;) {
                    var h = i[s];
                    if ("__proto__" === h || "constructor" === h || "prototype" === h) return r;
                    o = o[i[s++]]
                }
                o[i[s]] = a
            }))
        },
        getter: function(r, i) {
            var a = f(r);
            return c.get(r) || c.set(r, (function(r) {
                for (var s = 0, n = a.length; s < n;) {
                    if (null == r && i) return;
                    r = r[a[s++]]
                }
                return r
            }))
        },
        join: function(r) {
            return r.reduce((function(r, i) {
                return r + (m(i) || s.test(i) ? "[" + i + "]" : (r ? "." : "") + i)
            }), "")
        },
        forEach: function(r, i, a) {
            ! function(r, i, a) {
                var s, n, o, h, l = r.length;
                for (n = 0; n < l; n++)(s = r[n]) && (d(s) && (s = '"' + s + '"'), o = !(h = m(s)) && /^\d+$/.test(s), i.call(a, s, h, o, n, r))
            }(Array.isArray(r) ? r : u(r), i, a)
        }
    }
},
77674: function(r, i, a) {
    "use strict";
    var s = this && this.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    };
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.HistoryRouter = void 0;
    var n = s(a(67294)),
        o = a(48051);
    i.HistoryRouter = function(r) {
        var i = r.basename,
            a = r.children,
            s = r.history,
            h = n.default.useState({
                action: s.action,
                location: s.location
            }),
            l = h[0],
            p = h[1];
        return n.default.useLayoutEffect((function() {
            return s.listen(p)
        }), [s]), n.default.createElement(o.Router, {
            basename: i,
            children: a,
            location: l.location,
            navigationType: l.action,
            navigator: s
        })
    }
},
94633: r => {
    function i(r, i) {
        var a = r.length,
            s = new Array(a),
            n = {},
            o = a,
            h = function(r) {
                for (var i = new Map, a = 0, s = r.length; a < s; a++) {
                    var n = r[a];
                    i.has(n[0]) || i.set(n[0], new Set), i.has(n[1]) || i.set(n[1], new Set), i.get(n[0]).add(n[1])
                }
                return i
            }(i),
            l = function(r) {
                for (var i = new Map, a = 0, s = r.length; a < s; a++) i.set(r[a], a);
                return i
            }(r);
        for (i.forEach((function(r) {
                if (!l.has(r[0]) || !l.has(r[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.")
            })); o--;) n[o] || p(r[o], o, new Set);
        return s;

        function p(r, i, o) {
            if (o.has(r)) {
                var c;
                try {
                    c = ", node was:" + JSON.stringify(r)
                } catch (r) {
                    c = ""
                }
                throw new Error("Cyclic dependency" + c)
            }
            if (!l.has(r)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(r));
            if (!n[i]) {
                n[i] = !0;
                var f = h.get(r) || new Set;
                if (i = (f = Array.from(f)).length) {
                    o.add(r);
                    do {
                        var u = f[--i];
                        p(u, l.get(u), o)
                    } while (i);
                    o.delete(r)
                }
                s[--a] = r
            }
        }
    }
    r.exports = function(r) {
        return i(function(r) {
            for (var i = new Set, a = 0, s = r.length; a < s; a++) {
                var n = r[a];
                i.add(n[0]), i.add(n[1])
            }
            return Array.from(i)
        }(r), r)
    }, r.exports.array = i
},
12748: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var s = o(a(18721)),
        n = o(a(97412));

    function o(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    var h = class Condition {
        constructor(r, i) {
            if (this.fn = void 0, this.refs = r, this.refs = r, "function" == typeof i) return void(this.fn = i);
            if (!(0, s.default)(i, "is")) throw new TypeError("`is:` is required for `when()` conditions");
            if (!i.then && !i.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
            let {
                is: a,
                then: n,
                otherwise: o
            } = i, h = "function" == typeof a ? a : (...r) => r.every((r => r === a));
            this.fn = function(...r) {
                let i = r.pop(),
                    a = r.pop(),
                    s = h(...r) ? n : o;
                if (s) return "function" == typeof s ? s(a) : a.concat(s.resolve(i))
            }
        }
        resolve(r, i) {
            let a = this.refs.map((r => r.getValue(null == i ? void 0 : i.value, null == i ? void 0 : i.parent, null == i ? void 0 : i.context))),
                s = this.fn.apply(r, a.concat(r, i));
            if (void 0 === s || s === r) return r;
            if (!(0, n.default)(s)) throw new TypeError("conditions must return a schema object");
            return s.resolve(i)
        }
    };
    i.default = h
},
45051: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = function(r) {
        return new Lazy(r)
    }, i.default = void 0;
    var s, n = (s = a(97412)) && s.__esModule ? s : {
        default: s
    };
    class Lazy {
        constructor(r) {
            this.type = "lazy", this.__isYupSchema__ = !0, this.__inputType = void 0, this.__outputType = void 0, this._resolve = (r, i = {}) => {
                let a = this.builder(r, i);
                if (!(0, n.default)(a)) throw new TypeError("lazy() functions must return a valid schema");
                return a.resolve(i)
            }, this.builder = r
        }
        resolve(r) {
            return this._resolve(r.value, r)
        }
        cast(r, i) {
            return this._resolve(r, i).cast(r, i)
        }
        validate(r, i, a) {
            return this._resolve(r, i).validate(r, i, a)
        }
        validateSync(r, i) {
            return this._resolve(r, i).validateSync(r, i)
        }
        validateAt(r, i, a) {
            return this._resolve(i, a).validateAt(r, i, a)
        }
        validateSyncAt(r, i, a) {
            return this._resolve(i, a).validateSyncAt(r, i, a)
        }
        describe() {
            return null
        }
        isValid(r, i) {
            return this._resolve(r, i).isValid(r, i)
        }
        isValidSync(r, i) {
            return this._resolve(r, i).isValidSync(r, i)
        }
    }
    var o = Lazy;
    i.default = o
},
32434: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = function(r, i) {
        return new Reference(r, i)
    }, i.default = void 0;
    var s = a(55760);
    const n = "$",
        o = ".";
    class Reference {
        constructor(r, i = {}) {
            if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, "string" != typeof r) throw new TypeError("ref must be a string, got: " + r);
            if (this.key = r.trim(), "" === r) throw new TypeError("ref must be a non-empty string");
            this.isContext = this.key[0] === n, this.isValue = this.key[0] === o, this.isSibling = !this.isContext && !this.isValue;
            let a = this.isContext ? n : this.isValue ? o : "";
            this.path = this.key.slice(a.length), this.getter = this.path && (0, s.getter)(this.path, !0), this.map = i.map
        }
        getValue(r, i, a) {
            let s = this.isContext ? a : this.isValue ? r : i;
            return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s
        }
        cast(r, i) {
            return this.getValue(r, null == i ? void 0 : i.parent, null == i ? void 0 : i.context)
        }
        resolve() {
            return this
        }
        describe() {
            return {
                type: "ref",
                key: this.key
            }
        }
        toString() {
            return `Ref(${this.key})`
        }
        static isRef(r) {
            return r && r.__isYupRef
        }
    }
    i.default = Reference, Reference.prototype.__isYupRef = !0
},
12057: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var s = o(a(91250)),
        n = o(a(86659));

    function o(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function h() {
        return h = Object.assign || function(r) {
            for (var i = 1; i < arguments.length; i++) {
                var a = arguments[i];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s])
            }
            return r
        }, h.apply(this, arguments)
    }
    let l = /\$\{\s*(\w+)\s*\}/g;
    class ValidationError extends Error {
        static formatError(r, i) {
            const a = i.label || i.path || "this";
            return a !== i.path && (i = h({}, i, {
                path: a
            })), "string" == typeof r ? r.replace(l, ((r, a) => (0, s.default)(i[a]))) : "function" == typeof r ? r(i) : r
        }
        static isError(r) {
            return r && "ValidationError" === r.name
        }
        constructor(r, i, a, s) {
            super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = i, this.path = a, this.type = s, this.errors = [], this.inner = [], (0, n.default)(r).forEach((r => {
                ValidationError.isError(r) ? (this.errors.push(...r.errors), this.inner = this.inner.concat(r.inner.length ? r.inner : r)) : this.errors.push(r)
            })), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, ValidationError)
        }
    }
    i.default = ValidationError
},
79881: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = m, i.default = void 0;
    var s = f(a(79576)),
        n = f(a(97412)),
        o = f(a(91250)),
        h = a(11734),
        l = f(a(47339)),
        p = f(a(12057)),
        c = f(a(5518));

    function f(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function u() {
        return u = Object.assign || function(r) {
            for (var i = 1; i < arguments.length; i++) {
                var a = arguments[i];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s])
            }
            return r
        }, u.apply(this, arguments)
    }

    function m(r) {
        return new ArraySchema(r)
    }
    class ArraySchema extends c.default {
        constructor(r) {
            super({
                type: "array"
            }), this.innerType = void 0, this.innerType = r, this.withMutation((() => {
                this.transform((function(r) {
                    if ("string" == typeof r) try {
                        r = JSON.parse(r)
                    } catch (i) {
                        r = null
                    }
                    return this.isType(r) ? r : null
                }))
            }))
        }
        _typeCheck(r) {
            return Array.isArray(r)
        }
        get _subType() {
            return this.innerType
        }
        _cast(r, i) {
            const a = super._cast(r, i);
            if (!this._typeCheck(a) || !this.innerType) return a;
            let s = !1;
            const n = a.map(((r, a) => {
                const n = this.innerType.cast(r, u({}, i, {
                    path: `${i.path||""}[${a}]`
                }));
                return n !== r && (s = !0), n
            }));
            return s ? n : a
        }
        _validate(r, i = {}, a) {
            var s, n;
            let o = [],
                h = i.sync,
                c = i.path,
                f = this.innerType,
                m = null != (s = i.abortEarly) ? s : this.spec.abortEarly,
                d = null != (n = i.recursive) ? n : this.spec.recursive,
                y = null != i.originalValue ? i.originalValue : r;
            super._validate(r, i, ((r, s) => {
                if (r) {
                    if (!p.default.isError(r) || m) return void a(r, s);
                    o.push(r)
                }
                if (!d || !f || !this._typeCheck(s)) return void a(o[0] || null, s);
                y = y || s;
                let n = new Array(s.length);
                for (let r = 0; r < s.length; r++) {
                    let a = s[r],
                        o = `${i.path||""}[${r}]`,
                        h = u({}, i, {
                            path: o,
                            strict: !0,
                            parent: s,
                            index: r,
                            originalValue: y[r]
                        });
                    n[r] = (r, i) => f.validate(a, h, i)
                }(0, l.default)({
                    sync: h,
                    path: c,
                    value: s,
                    errors: o,
                    endEarly: m,
                    tests: n
                }, a)
            }))
        }
        clone(r) {
            const i = super.clone(r);
            return i.innerType = this.innerType, i
        }
        concat(r) {
            let i = super.concat(r);
            return i.innerType = this.innerType, r.innerType && (i.innerType = i.innerType ? i.innerType.concat(r.innerType) : r.innerType), i
        } of (r) {
            let i = this.clone();
            if (!(0, n.default)(r)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + (0, o.default)(r));
            return i.innerType = r, i
        }
        length(r, i = h.array.length) {
            return this.test({
                message: i,
                name: "length",
                exclusive: !0,
                params: {
                    length: r
                },
                test(i) {
                    return (0, s.default)(i) || i.length === this.resolve(r)
                }
            })
        }
        min(r, i) {
            return i = i || h.array.min, this.test({
                message: i,
                name: "min",
                exclusive: !0,
                params: {
                    min: r
                },
                test(i) {
                    return (0, s.default)(i) || i.length >= this.resolve(r)
                }
            })
        }
        max(r, i) {
            return i = i || h.array.max, this.test({
                message: i,
                name: "max",
                exclusive: !0,
                params: {
                    max: r
                },
                test(i) {
                    return (0, s.default)(i) || i.length <= this.resolve(r)
                }
            })
        }
        ensure() {
            return this.default((() => [])).transform(((r, i) => this._typeCheck(r) ? r : null == i ? [] : [].concat(i)))
        }
        compact(r) {
            let i = r ? (i, a, s) => !r(i, a, s) : r => !!r;
            return this.transform((r => null != r ? r.filter(i) : r))
        }
        describe() {
            let r = super.describe();
            return this.innerType && (r.innerType = this.innerType.describe()), r
        }
        nullable(r = !0) {
            return super.nullable(r)
        }
        defined() {
            return super.defined()
        }
        required(r) {
            return super.required(r)
        }
    }
    i.default = ArraySchema, m.prototype = ArraySchema.prototype
},
18379: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = l, i.default = void 0;
    var s = h(a(5518)),
        n = a(11734),
        o = h(a(79576));

    function h(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function l() {
        return new BooleanSchema
    }
    class BooleanSchema extends s.default {
        constructor() {
            super({
                type: "boolean"
            }), this.withMutation((() => {
                this.transform((function(r) {
                    if (!this.isType(r)) {
                        if (/^(true|1)$/i.test(String(r))) return !0;
                        if (/^(false|0)$/i.test(String(r))) return !1
                    }
                    return r
                }))
            }))
        }
        _typeCheck(r) {
            return r instanceof Boolean && (r = r.valueOf()), "boolean" == typeof r
        }
        isTrue(r = n.boolean.isValue) {
            return this.test({
                message: r,
                name: "is-value",
                exclusive: !0,
                params: {
                    value: "true"
                },
                test(r) {
                    return (0, o.default)(r) || !0 === r
                }
            })
        }
        isFalse(r = n.boolean.isValue) {
            return this.test({
                message: r,
                name: "is-value",
                exclusive: !0,
                params: {
                    value: "false"
                },
                test(r) {
                    return (0, o.default)(r) || !1 === r
                }
            })
        }
    }
    i.default = BooleanSchema, l.prototype = BooleanSchema.prototype
},
32850: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = f, i.default = void 0;
    var s = p(a(46343)),
        n = a(11734),
        o = p(a(79576)),
        h = p(a(32434)),
        l = p(a(5518));

    function p(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    let c = new Date("");

    function f() {
        return new DateSchema
    }
    class DateSchema extends l.default {
        constructor() {
            super({
                type: "date"
            }), this.withMutation((() => {
                this.transform((function(r) {
                    return this.isType(r) ? r : (r = (0, s.default)(r), isNaN(r) ? c : new Date(r))
                }))
            }))
        }
        _typeCheck(r) {
            return i = r, "[object Date]" === Object.prototype.toString.call(i) && !isNaN(r.getTime());
            var i
        }
        prepareParam(r, i) {
            let a;
            if (h.default.isRef(r)) a = r;
            else {
                let s = this.cast(r);
                if (!this._typeCheck(s)) throw new TypeError(`\`${i}\` must be a Date or a value that can be \`cast()\` to a Date`);
                a = s
            }
            return a
        }
        min(r, i = n.date.min) {
            let a = this.prepareParam(r, "min");
            return this.test({
                message: i,
                name: "min",
                exclusive: !0,
                params: {
                    min: r
                },
                test(r) {
                    return (0, o.default)(r) || r >= this.resolve(a)
                }
            })
        }
        max(r, i = n.date.max) {
            let a = this.prepareParam(r, "max");
            return this.test({
                message: i,
                name: "max",
                exclusive: !0,
                params: {
                    max: r
                },
                test(r) {
                    return (0, o.default)(r) || r <= this.resolve(a)
                }
            })
        }
    }
    i.default = DateSchema, DateSchema.INVALID_DATE = c, f.prototype = DateSchema.prototype, f.INVALID_DATE = c
},
53209: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "IX", {
        enumerable: !0,
        get: function() {
            return c.create
        }
    }), Object.defineProperty(i, "O7", {
        enumerable: !0,
        get: function() {
            return n.create
        }
    }), Object.defineProperty(i, "hT", {
        enumerable: !0,
        get: function() {
            return l.create
        }
    }), Object.defineProperty(i, "Rx", {
        enumerable: !0,
        get: function() {
            return h.create
        }
    }), Object.defineProperty(i, "Ry", {
        enumerable: !0,
        get: function() {
            return p.create
        }
    }), Object.defineProperty(i, "Z_", {
        enumerable: !0,
        get: function() {
            return o.create
        }
    });
    var s = _(a(82265)),
        n = _(a(18379)),
        o = _(a(63424)),
        h = _(a(3742)),
        l = _(a(32850)),
        p = _(a(72942)),
        c = _(a(79881)),
        f = a(32434),
        u = a(45051),
        m = b(a(12057)),
        d = b(a(50998)),
        y = b(a(97412)),
        g = b(a(99903)),
        v = b(a(5518));

    function b(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function x(r) {
        if ("function" != typeof WeakMap) return null;
        var i = new WeakMap,
            a = new WeakMap;
        return (x = function(r) {
            return r ? a : i
        })(r)
    }

    function _(r, i) {
        if (!i && r && r.__esModule) return r;
        if (null === r || "object" != typeof r && "function" != typeof r) return {
            default: r
        };
        var a = x(i);
        if (a && a.has(r)) return a.get(r);
        var s = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in r)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(r, o)) {
                var h = n ? Object.getOwnPropertyDescriptor(r, o) : null;
                h && (h.get || h.set) ? Object.defineProperty(s, o, h) : s[o] = r[o]
            }
        return s.default = r, a && a.set(r, s), s
    }
},
11734: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.string = i.object = i.number = i.mixed = i.default = i.date = i.boolean = i.array = void 0;
    var s, n = (s = a(91250)) && s.__esModule ? s : {
        default: s
    };
    let o = {
        default: "${path} is invalid",
        required: "${path} is a required field",
        oneOf: "${path} must be one of the following values: ${values}",
        notOneOf: "${path} must not be one of the following values: ${values}",
        notType: ({
            path: r,
            type: i,
            value: a,
            originalValue: s
        }) => {
            let o = null != s && s !== a,
                h = `${r} must be a \`${i}\` type, but the final value was: \`${(0,n.default)(a,!0)}\`` + (o ? ` (cast from the value \`${(0,n.default)(s,!0)}\`).` : ".");
            return null === a && (h += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), h
        },
        defined: "${path} must be defined"
    };
    i.mixed = o;
    let h = {
        length: "${path} must be exactly ${length} characters",
        min: "${path} must be at least ${min} characters",
        max: "${path} must be at most ${max} characters",
        matches: '${path} must match the following: "${regex}"',
        email: "${path} must be a valid email",
        url: "${path} must be a valid URL",
        uuid: "${path} must be a valid UUID",
        trim: "${path} must be a trimmed string",
        lowercase: "${path} must be a lowercase string",
        uppercase: "${path} must be a upper case string"
    };
    i.string = h;
    let l = {
        min: "${path} must be greater than or equal to ${min}",
        max: "${path} must be less than or equal to ${max}",
        lessThan: "${path} must be less than ${less}",
        moreThan: "${path} must be greater than ${more}",
        positive: "${path} must be a positive number",
        negative: "${path} must be a negative number",
        integer: "${path} must be an integer"
    };
    i.number = l;
    let p = {
        min: "${path} field must be later than ${min}",
        max: "${path} field must be at earlier than ${max}"
    };
    i.date = p;
    let c = {
        isValue: "${path} field must be ${value}"
    };
    i.boolean = c;
    let f = {
        noUnknown: "${path} field has unspecified keys: ${unknown}"
    };
    i.object = f;
    let u = {
        min: "${path} field must have at least ${min} items",
        max: "${path} field must have less than or equal to ${max} items",
        length: "${path} must have ${length} items"
    };
    i.array = u;
    var m = Object.assign(Object.create(null), {
        mixed: o,
        string: h,
        number: l,
        date: p,
        object: f,
        array: u,
        boolean: c
    });
    i.default = m
},
82265: (r, i, a) => {
    "use strict";
    var s;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = h, i.default = void 0;
    const n = ((s = a(5518)) && s.__esModule ? s : {
        default: s
    }).default;
    var o = n;

    function h() {
        return new n
    }
    i.default = o, h.prototype = n.prototype
},
3742: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = l, i.default = void 0;
    var s = a(11734),
        n = h(a(79576)),
        o = h(a(5518));

    function h(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function l() {
        return new NumberSchema
    }
    class NumberSchema extends o.default {
        constructor() {
            super({
                type: "number"
            }), this.withMutation((() => {
                this.transform((function(r) {
                    let i = r;
                    if ("string" == typeof i) {
                        if (i = i.replace(/\s/g, ""), "" === i) return NaN;
                        i = +i
                    }
                    return this.isType(i) ? i : parseFloat(i)
                }))
            }))
        }
        _typeCheck(r) {
            return r instanceof Number && (r = r.valueOf()), "number" == typeof r && !(r => r != +r)(r)
        }
        min(r, i = s.number.min) {
            return this.test({
                message: i,
                name: "min",
                exclusive: !0,
                params: {
                    min: r
                },
                test(i) {
                    return (0, n.default)(i) || i >= this.resolve(r)
                }
            })
        }
        max(r, i = s.number.max) {
            return this.test({
                message: i,
                name: "max",
                exclusive: !0,
                params: {
                    max: r
                },
                test(i) {
                    return (0, n.default)(i) || i <= this.resolve(r)
                }
            })
        }
        lessThan(r, i = s.number.lessThan) {
            return this.test({
                message: i,
                name: "max",
                exclusive: !0,
                params: {
                    less: r
                },
                test(i) {
                    return (0, n.default)(i) || i < this.resolve(r)
                }
            })
        }
        moreThan(r, i = s.number.moreThan) {
            return this.test({
                message: i,
                name: "min",
                exclusive: !0,
                params: {
                    more: r
                },
                test(i) {
                    return (0, n.default)(i) || i > this.resolve(r)
                }
            })
        }
        positive(r = s.number.positive) {
            return this.moreThan(0, r)
        }
        negative(r = s.number.negative) {
            return this.lessThan(0, r)
        }
        integer(r = s.number.integer) {
            return this.test({
                name: "integer",
                message: r,
                test: r => (0, n.default)(r) || Number.isInteger(r)
            })
        }
        truncate() {
            return this.transform((r => (0, n.default)(r) ? r : 0 | r))
        }
        round(r) {
            var i;
            let a = ["ceil", "floor", "round", "trunc"];
            if ("trunc" === (r = (null == (i = r) ? void 0 : i.toLowerCase()) || "round")) return this.truncate();
            if (-1 === a.indexOf(r.toLowerCase())) throw new TypeError("Only valid options for round() are: " + a.join(", "));
            return this.transform((i => (0, n.default)(i) ? i : Math[r](i)))
        }
    }
    i.default = NumberSchema, l.prototype = NumberSchema.prototype
},
72942: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = _, i.default = void 0;
    var s = g(a(18721)),
        n = g(a(11865)),
        o = g(a(68929)),
        h = g(a(67523)),
        l = g(a(66604)),
        p = a(55760),
        c = a(11734),
        f = g(a(25389)),
        u = g(a(29654)),
        m = g(a(47339)),
        d = g(a(12057)),
        y = g(a(5518));

    function g(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function v() {
        return v = Object.assign || function(r) {
            for (var i = 1; i < arguments.length; i++) {
                var a = arguments[i];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s])
            }
            return r
        }, v.apply(this, arguments)
    }
    let b = r => "[object Object]" === Object.prototype.toString.call(r);
    const x = (0, u.default)([]);
    class ObjectSchema extends y.default {
        constructor(r) {
            super({
                type: "object"
            }), this.fields = Object.create(null), this._sortErrors = x, this._nodes = [], this._excludedEdges = [], this.withMutation((() => {
                this.transform((function(r) {
                    if ("string" == typeof r) try {
                        r = JSON.parse(r)
                    } catch (i) {
                        r = null
                    }
                    return this.isType(r) ? r : null
                })), r && this.shape(r)
            }))
        }
        _typeCheck(r) {
            return b(r) || "function" == typeof r
        }
        _cast(r, i = {}) {
            var a;
            let n = super._cast(r, i);
            if (void 0 === n) return this.getDefault();
            if (!this._typeCheck(n)) return n;
            let o = this.fields,
                h = null != (a = i.stripUnknown) ? a : this.spec.noUnknown,
                l = this._nodes.concat(Object.keys(n).filter((r => -1 === this._nodes.indexOf(r)))),
                p = {},
                c = v({}, i, {
                    parent: p,
                    __validating: i.__validating || !1
                }),
                f = !1;
            for (const r of l) {
                let a = o[r],
                    l = (0, s.default)(n, r);
                if (a) {
                    let s, o = n[r];
                    c.path = (i.path ? `${i.path}.` : "") + r, a = a.resolve({
                        value: o,
                        context: i.context,
                        parent: p
                    });
                    let h = "spec" in a ? a.spec : void 0,
                        l = null == h ? void 0 : h.strict;
                    if (null == h ? void 0 : h.strip) {
                        f = f || r in n;
                        continue
                    }
                    s = i.__validating && l ? n[r] : a.cast(n[r], c), void 0 !== s && (p[r] = s)
                } else l && !h && (p[r] = n[r]);
                p[r] !== n[r] && (f = !0)
            }
            return f ? p : n
        }
        _validate(r, i = {}, a) {
            let s = [],
                {
                    sync: n,
                    from: o = [],
                    originalValue: h = r,
                    abortEarly: l = this.spec.abortEarly,
                    recursive: p = this.spec.recursive
                } = i;
            o = [{
                schema: this,
                value: h
            }, ...o], i.__validating = !0, i.originalValue = h, i.from = o, super._validate(r, i, ((r, c) => {
                if (r) {
                    if (!d.default.isError(r) || l) return void a(r, c);
                    s.push(r)
                }
                if (!p || !b(c)) return void a(s[0] || null, c);
                h = h || c;
                let f = this._nodes.map((r => (a, s) => {
                    let n = -1 === r.indexOf(".") ? (i.path ? `${i.path}.` : "") + r : `${i.path||""}["${r}"]`,
                        l = this.fields[r];
                    l && "validate" in l ? l.validate(c[r], v({}, i, {
                        path: n,
                        from: o,
                        strict: !0,
                        parent: c,
                        originalValue: h[r]
                    }), s) : s(null)
                }));
                (0, m.default)({
                    sync: n,
                    tests: f,
                    value: c,
                    errors: s,
                    endEarly: l,
                    sort: this._sortErrors,
                    path: i.path
                }, a)
            }))
        }
        clone(r) {
            const i = super.clone(r);
            return i.fields = v({}, this.fields), i._nodes = this._nodes, i._excludedEdges = this._excludedEdges, i._sortErrors = this._sortErrors, i
        }
        concat(r) {
            let i = super.concat(r),
                a = i.fields;
            for (let [r, i] of Object.entries(this.fields)) {
                const s = a[r];
                void 0 === s ? a[r] = i : s instanceof y.default && i instanceof y.default && (a[r] = i.concat(s))
            }
            return i.withMutation((() => i.shape(a, this._excludedEdges)))
        }
        getDefaultFromShape() {
            let r = {};
            return this._nodes.forEach((i => {
                const a = this.fields[i];
                r[i] = "default" in a ? a.getDefault() : void 0
            })), r
        }
        _getDefault() {
            return "default" in this.spec ? super._getDefault() : this._nodes.length ? this.getDefaultFromShape() : void 0
        }
        shape(r, i = []) {
            let a = this.clone(),
                s = Object.assign(a.fields, r);
            return a.fields = s, a._sortErrors = (0, u.default)(Object.keys(s)), i.length && (Array.isArray(i[0]) || (i = [i]), a._excludedEdges = [...a._excludedEdges, ...i]), a._nodes = (0, f.default)(s, a._excludedEdges), a
        }
        pick(r) {
            const i = {};
            for (const a of r) this.fields[a] && (i[a] = this.fields[a]);
            return this.clone().withMutation((r => (r.fields = {}, r.shape(i))))
        }
        omit(r) {
            const i = this.clone(),
                a = i.fields;
            i.fields = {};
            for (const i of r) delete a[i];
            return i.withMutation((() => i.shape(a)))
        }
        from(r, i, a) {
            let n = (0, p.getter)(r, !0);
            return this.transform((o => {
                if (null == o) return o;
                let h = o;
                return (0, s.default)(o, r) && (h = v({}, o), a || delete h[r], h[i] = n(o)), h
            }))
        }
        noUnknown(r = !0, i = c.object.noUnknown) {
            "string" == typeof r && (i = r, r = !0);
            let a = this.test({
                name: "noUnknown",
                exclusive: !0,
                message: i,
                test(i) {
                    if (null == i) return !0;
                    const a = function(r, i) {
                        let a = Object.keys(r.fields);
                        return Object.keys(i).filter((r => -1 === a.indexOf(r)))
                    }(this.schema, i);
                    return !r || 0 === a.length || this.createError({
                        params: {
                            unknown: a.join(", ")
                        }
                    })
                }
            });
            return a.spec.noUnknown = r, a
        }
        unknown(r = !0, i = c.object.noUnknown) {
            return this.noUnknown(!r, i)
        }
        transformKeys(r) {
            return this.transform((i => i && (0, h.default)(i, ((i, a) => r(a)))))
        }
        camelCase() {
            return this.transformKeys(o.default)
        }
        snakeCase() {
            return this.transformKeys(n.default)
        }
        constantCase() {
            return this.transformKeys((r => (0, n.default)(r).toUpperCase()))
        }
        describe() {
            let r = super.describe();
            return r.fields = (0, l.default)(this.fields, (r => r.describe())), r
        }
    }

    function _(r) {
        return new ObjectSchema(r)
    }
    i.default = ObjectSchema, _.prototype = ObjectSchema.prototype
},
5518: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var s = y(a(68305)),
        n = a(11734),
        o = y(a(12748)),
        h = y(a(47339)),
        l = y(a(37761)),
        p = y(a(91250)),
        c = y(a(32434)),
        f = a(50998),
        u = y(a(12057)),
        m = y(a(56561)),
        d = y(a(86659));

    function y(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function g() {
        return g = Object.assign || function(r) {
            for (var i = 1; i < arguments.length; i++) {
                var a = arguments[i];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s])
            }
            return r
        }, g.apply(this, arguments)
    }
    class BaseSchema {
        constructor(r) {
            this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new m.default, this._blacklist = new m.default, this.exclusiveTests = Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation((() => {
                this.typeError(n.mixed.notType)
            })), this.type = (null == r ? void 0 : r.type) || "mixed", this.spec = g({
                strip: !1,
                strict: !1,
                abortEarly: !0,
                recursive: !0,
                nullable: !1,
                presence: "optional"
            }, null == r ? void 0 : r.spec)
        }
        get _type() {
            return this.type
        }
        _typeCheck(r) {
            return !0
        }
        clone(r) {
            if (this._mutate) return r && Object.assign(this.spec, r), this;
            const i = Object.create(Object.getPrototypeOf(this));
            return i.type = this.type, i._typeError = this._typeError, i._whitelistError = this._whitelistError, i._blacklistError = this._blacklistError, i._whitelist = this._whitelist.clone(), i._blacklist = this._blacklist.clone(), i.exclusiveTests = g({}, this.exclusiveTests), i.deps = [...this.deps], i.conditions = [...this.conditions], i.tests = [...this.tests], i.transforms = [...this.transforms], i.spec = (0, s.default)(g({}, this.spec, r)), i
        }
        label(r) {
            let i = this.clone();
            return i.spec.label = r, i
        }
        meta(...r) {
            if (0 === r.length) return this.spec.meta;
            let i = this.clone();
            return i.spec.meta = Object.assign(i.spec.meta || {}, r[0]), i
        }
        withMutation(r) {
            let i = this._mutate;
            this._mutate = !0;
            let a = r(this);
            return this._mutate = i, a
        }
        concat(r) {
            if (!r || r === this) return this;
            if (r.type !== this.type && "mixed" !== this.type) throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${r.type}`);
            let i = this,
                a = r.clone();
            const s = g({}, i.spec, a.spec);
            return a.spec = s, a._typeError || (a._typeError = i._typeError), a._whitelistError || (a._whitelistError = i._whitelistError), a._blacklistError || (a._blacklistError = i._blacklistError), a._whitelist = i._whitelist.merge(r._whitelist, r._blacklist), a._blacklist = i._blacklist.merge(r._blacklist, r._whitelist), a.tests = i.tests, a.exclusiveTests = i.exclusiveTests, a.withMutation((i => {
                r.tests.forEach((r => {
                    i.test(r.OPTIONS)
                }))
            })), a.transforms = [...i.transforms, ...a.transforms], a
        }
        isType(r) {
            return !(!this.spec.nullable || null !== r) || this._typeCheck(r)
        }
        resolve(r) {
            let i = this;
            if (i.conditions.length) {
                let a = i.conditions;
                i = i.clone(), i.conditions = [], i = a.reduce(((i, a) => a.resolve(i, r)), i), i = i.resolve(r)
            }
            return i
        }
        cast(r, i = {}) {
            let a = this.resolve(g({
                    value: r
                }, i)),
                s = a._cast(r, i);
            if (void 0 !== r && !1 !== i.assert && !0 !== a.isType(s)) {
                let n = (0, p.default)(r),
                    o = (0, p.default)(s);
                throw new TypeError(`The value of ${i.path||"field"} could not be cast to a value that satisfies the schema type: "${a._type}". \n\nattempted value: ${n} \n` + (o !== n ? `result of cast: ${o}` : ""))
            }
            return s
        }
        _cast(r, i) {
            let a = void 0 === r ? r : this.transforms.reduce(((i, a) => a.call(this, i, r, this)), r);
            return void 0 === a && (a = this.getDefault()), a
        }
        _validate(r, i = {}, a) {
            let {
                sync: s,
                path: n,
                from: o = [],
                originalValue: l = r,
                strict: p = this.spec.strict,
                abortEarly: c = this.spec.abortEarly
            } = i, f = r;
            p || (f = this._cast(f, g({
                assert: !1
            }, i)));
            let u = {
                    value: f,
                    path: n,
                    options: i,
                    originalValue: l,
                    schema: this,
                    label: this.spec.label,
                    sync: s,
                    from: o
                },
                m = [];
            this._typeError && m.push(this._typeError);
            let d = [];
            this._whitelistError && d.push(this._whitelistError), this._blacklistError && d.push(this._blacklistError), (0, h.default)({
                args: u,
                value: f,
                path: n,
                sync: s,
                tests: m,
                endEarly: c
            }, (r => {
                r ? a(r, f) : (0, h.default)({
                    tests: this.tests.concat(d),
                    args: u,
                    path: n,
                    sync: s,
                    value: f,
                    endEarly: c
                }, a)
            }))
        }
        validate(r, i, a) {
            let s = this.resolve(g({}, i, {
                value: r
            }));
            return "function" == typeof a ? s._validate(r, i, a) : new Promise(((a, n) => s._validate(r, i, ((r, i) => {
                r ? n(r) : a(i)
            }))))
        }
        validateSync(r, i) {
            let a;
            return this.resolve(g({}, i, {
                value: r
            }))._validate(r, g({}, i, {
                sync: !0
            }), ((r, i) => {
                if (r) throw r;
                a = i
            })), a
        }
        isValid(r, i) {
            return this.validate(r, i).then((() => !0), (r => {
                if (u.default.isError(r)) return !1;
                throw r
            }))
        }
        isValidSync(r, i) {
            try {
                return this.validateSync(r, i), !0
            } catch (r) {
                if (u.default.isError(r)) return !1;
                throw r
            }
        }
        _getDefault() {
            let r = this.spec.default;
            return null == r ? r : "function" == typeof r ? r.call(this) : (0, s.default)(r)
        }
        getDefault(r) {
            return this.resolve(r || {})._getDefault()
        }
        default (r) {
            if (0 === arguments.length) return this._getDefault();
            return this.clone({
                default: r
            })
        }
        strict(r = !0) {
            let i = this.clone();
            return i.spec.strict = r, i
        }
        _isPresent(r) {
            return null != r
        }
        defined(r = n.mixed.defined) {
            return this.test({
                message: r,
                name: "defined",
                exclusive: !0,
                test(r) {
                    return void 0 !== r
                }
            })
        }
        required(r = n.mixed.required) {
            return this.clone({
                presence: "required"
            }).withMutation((i => i.test({
                message: r,
                name: "required",
                exclusive: !0,
                test(r) {
                    return this.schema._isPresent(r)
                }
            })))
        }
        notRequired() {
            let r = this.clone({
                presence: "optional"
            });
            return r.tests = r.tests.filter((r => "required" !== r.OPTIONS.name)), r
        }
        nullable(r = !0) {
            return this.clone({
                nullable: !1 !== r
            })
        }
        transform(r) {
            let i = this.clone();
            return i.transforms.push(r), i
        }
        test(...r) {
            let i;
            if (i = 1 === r.length ? "function" == typeof r[0] ? {
                    test: r[0]
                } : r[0] : 2 === r.length ? {
                    name: r[0],
                    test: r[1]
                } : {
                    name: r[0],
                    message: r[1],
                    test: r[2]
                }, void 0 === i.message && (i.message = n.mixed.default), "function" != typeof i.test) throw new TypeError("`test` is a required parameters");
            let a = this.clone(),
                s = (0, l.default)(i),
                o = i.exclusive || i.name && !0 === a.exclusiveTests[i.name];
            if (i.exclusive && !i.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
            return i.name && (a.exclusiveTests[i.name] = !!i.exclusive), a.tests = a.tests.filter((r => {
                if (r.OPTIONS.name === i.name) {
                    if (o) return !1;
                    if (r.OPTIONS.test === s.OPTIONS.test) return !1
                }
                return !0
            })), a.tests.push(s), a
        }
        when(r, i) {
            Array.isArray(r) || "string" == typeof r || (i = r, r = ".");
            let a = this.clone(),
                s = (0, d.default)(r).map((r => new c.default(r)));
            return s.forEach((r => {
                r.isSibling && a.deps.push(r.key)
            })), a.conditions.push(new o.default(s, i)), a
        }
        typeError(r) {
            let i = this.clone();
            return i._typeError = (0, l.default)({
                message: r,
                name: "typeError",
                test(r) {
                    return !(void 0 !== r && !this.schema.isType(r)) || this.createError({
                        params: {
                            type: this.schema._type
                        }
                    })
                }
            }), i
        }
        oneOf(r, i = n.mixed.oneOf) {
            let a = this.clone();
            return r.forEach((r => {
                a._whitelist.add(r), a._blacklist.delete(r)
            })), a._whitelistError = (0, l.default)({
                message: i,
                name: "oneOf",
                test(r) {
                    if (void 0 === r) return !0;
                    let i = this.schema._whitelist,
                        a = i.resolveAll(this.resolve);
                    return !!a.includes(r) || this.createError({
                        params: {
                            values: i.toArray().join(", "),
                            resolved: a
                        }
                    })
                }
            }), a
        }
        notOneOf(r, i = n.mixed.notOneOf) {
            let a = this.clone();
            return r.forEach((r => {
                a._blacklist.add(r), a._whitelist.delete(r)
            })), a._blacklistError = (0, l.default)({
                message: i,
                name: "notOneOf",
                test(r) {
                    let i = this.schema._blacklist,
                        a = i.resolveAll(this.resolve);
                    return !a.includes(r) || this.createError({
                        params: {
                            values: i.toArray().join(", "),
                            resolved: a
                        }
                    })
                }
            }), a
        }
        strip(r = !0) {
            let i = this.clone();
            return i.spec.strip = r, i
        }
        describe() {
            const r = this.clone(),
                {
                    label: i,
                    meta: a
                } = r.spec;
            return {
                meta: a,
                label: i,
                type: r.type,
                oneOf: r._whitelist.describe(),
                notOneOf: r._blacklist.describe(),
                tests: r.tests.map((r => ({
                    name: r.OPTIONS.name,
                    params: r.OPTIONS.params
                }))).filter(((r, i, a) => a.findIndex((i => i.name === r.name)) === i))
            }
        }
    }
    i.default = BaseSchema, BaseSchema.prototype.__isYupSchema__ = !0;
    for (const r of ["validate", "validateSync"]) BaseSchema.prototype[`${r}At`] = function(i, a, s = {}) {
        const {
            parent: n,
            parentPath: o,
            schema: h
        } = (0, f.getIn)(this, i, a, s.context);
        return h[r](n && n[o], g({}, s, {
            parent: n,
            path: i
        }))
    };
    for (const r of ["equals", "is"]) BaseSchema.prototype[r] = BaseSchema.prototype.oneOf;
    for (const r of ["not", "nope"]) BaseSchema.prototype[r] = BaseSchema.prototype.notOneOf;
    BaseSchema.prototype.optional = BaseSchema.prototype.notRequired
},
99903: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r) {
        Object.keys(r).forEach((i => {
            Object.keys(r[i]).forEach((a => {
                n.default[i][a] = r[i][a]
            }))
        }))
    };
    var s, n = (s = a(11734)) && s.__esModule ? s : {
        default: s
    }
},
63424: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.create = m, i.default = void 0;
    var s = a(11734),
        n = h(a(79576)),
        o = h(a(5518));

    function h(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    let l = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        p = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        f = r => (0, n.default)(r) || r === r.trim(),
        u = {}.toString();

    function m() {
        return new StringSchema
    }
    class StringSchema extends o.default {
        constructor() {
            super({
                type: "string"
            }), this.withMutation((() => {
                this.transform((function(r) {
                    if (this.isType(r)) return r;
                    if (Array.isArray(r)) return r;
                    const i = null != r && r.toString ? r.toString() : r;
                    return i === u ? r : i
                }))
            }))
        }
        _typeCheck(r) {
            return r instanceof String && (r = r.valueOf()), "string" == typeof r
        }
        _isPresent(r) {
            return super._isPresent(r) && !!r.length
        }
        length(r, i = s.string.length) {
            return this.test({
                message: i,
                name: "length",
                exclusive: !0,
                params: {
                    length: r
                },
                test(i) {
                    return (0, n.default)(i) || i.length === this.resolve(r)
                }
            })
        }
        min(r, i = s.string.min) {
            return this.test({
                message: i,
                name: "min",
                exclusive: !0,
                params: {
                    min: r
                },
                test(i) {
                    return (0, n.default)(i) || i.length >= this.resolve(r)
                }
            })
        }
        max(r, i = s.string.max) {
            return this.test({
                name: "max",
                exclusive: !0,
                message: i,
                params: {
                    max: r
                },
                test(i) {
                    return (0, n.default)(i) || i.length <= this.resolve(r)
                }
            })
        }
        matches(r, i) {
            let a, o, h = !1;
            return i && ("object" == typeof i ? ({
                excludeEmptyString: h = !1,
                message: a,
                name: o
            } = i) : a = i), this.test({
                name: o || "matches",
                message: a || s.string.matches,
                params: {
                    regex: r
                },
                test: i => (0, n.default)(i) || "" === i && h || -1 !== i.search(r)
            })
        }
        email(r = s.string.email) {
            return this.matches(l, {
                name: "email",
                message: r,
                excludeEmptyString: !0
            })
        }
        url(r = s.string.url) {
            return this.matches(p, {
                name: "url",
                message: r,
                excludeEmptyString: !0
            })
        }
        uuid(r = s.string.uuid) {
            return this.matches(c, {
                name: "uuid",
                message: r,
                excludeEmptyString: !1
            })
        }
        ensure() {
            return this.default("").transform((r => null === r ? "" : r))
        }
        trim(r = s.string.trim) {
            return this.transform((r => null != r ? r.trim() : r)).test({
                message: r,
                name: "trim",
                test: f
            })
        }
        lowercase(r = s.string.lowercase) {
            return this.transform((r => (0, n.default)(r) ? r : r.toLowerCase())).test({
                message: r,
                name: "string_case",
                exclusive: !0,
                test: r => (0, n.default)(r) || r === r.toLowerCase()
            })
        }
        uppercase(r = s.string.uppercase) {
            return this.transform((r => (0, n.default)(r) ? r : r.toUpperCase())).test({
                message: r,
                name: "string_case",
                exclusive: !0,
                test: r => (0, n.default)(r) || r === r.toUpperCase()
            })
        }
    }
    i.default = StringSchema, m.prototype = StringSchema.prototype
},
56561: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var s, n = (s = a(32434)) && s.__esModule ? s : {
        default: s
    };
    class ReferenceSet {
        constructor() {
            this.list = void 0, this.refs = void 0, this.list = new Set, this.refs = new Map
        }
        get size() {
            return this.list.size + this.refs.size
        }
        describe() {
            const r = [];
            for (const i of this.list) r.push(i);
            for (const [, i] of this.refs) r.push(i.describe());
            return r
        }
        toArray() {
            return Array.from(this.list).concat(Array.from(this.refs.values()))
        }
        resolveAll(r) {
            return this.toArray().reduce(((i, a) => i.concat(n.default.isRef(a) ? r(a) : a)), [])
        }
        add(r) {
            n.default.isRef(r) ? this.refs.set(r.key, r) : this.list.add(r)
        }
        delete(r) {
            n.default.isRef(r) ? this.refs.delete(r.key) : this.list.delete(r)
        }
        clone() {
            const r = new ReferenceSet;
            return r.list = new Set(this.list), r.refs = new Map(this.refs), r
        }
        merge(r, i) {
            const a = this.clone();
            return r.list.forEach((r => a.add(r))), r.refs.forEach((r => a.add(r))), i.list.forEach((r => a.delete(r))), i.refs.forEach((r => a.delete(r))), a
        }
    }
    i.default = ReferenceSet
},
37761: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r) {
        function i(i, a) {
            let {
                value: h,
                path: p = "",
                label: c,
                options: f,
                originalValue: u,
                sync: m
            } = i, d = function(r, i) {
                if (null == r) return {};
                var a, s, n = {},
                    o = Object.keys(r);
                for (s = 0; s < o.length; s++) a = o[s], i.indexOf(a) >= 0 || (n[a] = r[a]);
                return n
            }(i, ["value", "path", "label", "options", "originalValue", "sync"]);
            const {
                name: y,
                test: g,
                params: v,
                message: b
            } = r;
            let {
                parent: x,
                context: _
            } = f;

            function E(r) {
                return o.default.isRef(r) ? r.getValue(h, x, _) : r
            }

            function S(r = {}) {
                const i = (0, s.default)(l({
                        value: h,
                        originalValue: u,
                        label: c,
                        path: r.path || p
                    }, v, r.params), E),
                    a = new n.default(n.default.formatError(r.message || b, i), h, i.path, r.type || y);
                return a.params = i, a
            }
            let P, C = l({
                path: p,
                parent: x,
                type: y,
                createError: S,
                resolve: E,
                options: f,
                originalValue: u
            }, d);
            if (m) {
                try {
                    var w;
                    if (P = g.call(C, h, C), "function" == typeof(null == (w = P) ? void 0 : w.then)) throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)
                } catch (r) {
                    return void a(r)
                }
                n.default.isError(P) ? a(P) : P ? a(null, P) : a(S())
            } else try {
                Promise.resolve(g.call(C, h, C)).then((r => {
                    n.default.isError(r) ? a(r) : r ? a(null, r) : a(S())
                })).catch(a)
            } catch (r) {
                a(r)
            }
        }
        return i.OPTIONS = r, i
    };
    var s = h(a(66604)),
        n = h(a(12057)),
        o = h(a(32434));

    function h(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }

    function l() {
        return l = Object.assign || function(r) {
            for (var i = 1; i < arguments.length; i++) {
                var a = arguments[i];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s])
            }
            return r
        }, l.apply(this, arguments)
    }
},
79576: (r, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var a = r => null == r;
    i.default = a
},
97412: (r, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var a = r => r && r.__isYupSchema__;
    i.default = a
},
46343: (r, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r) {
        var i, s, n = [1, 4, 5, 6, 7, 10, 11],
            o = 0;
        if (s = a.exec(r)) {
            for (var h, l = 0; h = n[l]; ++l) s[h] = +s[h] || 0;
            s[2] = (+s[2] || 1) - 1, s[3] = +s[3] || 1, s[7] = s[7] ? String(s[7]).substr(0, 3) : 0, void 0 !== s[8] && "" !== s[8] || void 0 !== s[9] && "" !== s[9] ? ("Z" !== s[8] && void 0 !== s[9] && (o = 60 * s[10] + s[11], "+" === s[9] && (o = 0 - o)), i = Date.UTC(s[1], s[2], s[3], s[4], s[5] + o, s[6], s[7])) : i = +new Date(s[1], s[2], s[3], s[4], s[5], s[6], s[7])
        } else i = Date.parse ? Date.parse(r) : NaN;
        return i
    };
    var a = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/
},
91250: (r, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r, i) {
        let a = l(r, i);
        return null !== a ? a : JSON.stringify(r, (function(r, a) {
            let s = l(this[r], i);
            return null !== s ? s : a
        }), 2)
    };
    const a = Object.prototype.toString,
        s = Error.prototype.toString,
        n = RegExp.prototype.toString,
        o = "undefined" != typeof Symbol ? Symbol.prototype.toString : () => "",
        h = /^Symbol\((.*)\)(.*)$/;

    function l(r, i = !1) {
        if (null == r || !0 === r || !1 === r) return "" + r;
        const l = typeof r;
        if ("number" === l) return function(r) {
            return r != +r ? "NaN" : 0 === r && 1 / r < 0 ? "-0" : "" + r
        }(r);
        if ("string" === l) return i ? `"${r}"` : r;
        if ("function" === l) return "[Function " + (r.name || "anonymous") + "]";
        if ("symbol" === l) return o.call(r).replace(h, "Symbol($1)");
        const p = a.call(r).slice(8, -1);
        return "Date" === p ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : "Error" === p || r instanceof Error ? "[" + s.call(r) + "]" : "RegExp" === p ? n.call(r) : null
    }
},
50998: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.getIn = o;
    var s = a(55760);
    let n = r => r.substr(0, r.length - 1).substr(1);

    function o(r, i, a, o = a) {
        let h, l, p;
        return i ? ((0, s.forEach)(i, ((s, c, f) => {
            let u = c ? n(s) : s;
            if ((r = r.resolve({
                    context: o,
                    parent: h,
                    value: a
                })).innerType) {
                let n = f ? parseInt(u, 10) : 0;
                if (a && n >= a.length) throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${i}. because there is no value at that index. `);
                h = a, a = a && a[n], r = r.innerType
            }
            if (!f) {
                if (!r.fields || !r.fields[u]) throw new Error(`The schema does not contain the path: ${i}. (failed at: ${p} which is a type: "${r._type}")`);
                h = a, a = a && a[u], r = r.fields[u]
            }
            l = u, p = c ? "[" + s + "]" : "." + s
        })), {
            schema: r,
            parent: h,
            parentPath: l
        }) : {
            parent: h,
            parentPath: i,
            schema: r
        }
    }
    var h = (r, i, a, s) => o(r, i, a, s).schema;
    i.default = h
},
47339: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r, i) {
        let {
            endEarly: a,
            tests: s,
            args: h,
            value: l,
            errors: p,
            sort: c,
            path: f
        } = r, u = o(i), m = s.length;
        const d = [];
        if (p = p || [], !m) return p.length ? u(new n.default(p, l, f)) : u(null, l);
        for (let r = 0; r < s.length; r++) {
            (0, s[r])(h, (function(r) {
                if (r) {
                    if (!n.default.isError(r)) return u(r, l);
                    if (a) return r.value = l, u(r, l);
                    d.push(r)
                }
                if (--m <= 0) {
                    if (d.length && (c && d.sort(c), p.length && d.push(...p), p = d), p.length) return void u(new n.default(p, l, f), l);
                    u(null, l)
                }
            }))
        }
    };
    var s, n = (s = a(12057)) && s.__esModule ? s : {
        default: s
    };
    const o = r => {
        let i = !1;
        return (...a) => {
            i || (i = !0, r(...a))
        }
    }
},
29654: (r, i) => {
    "use strict";

    function a(r, i) {
        let a = 1 / 0;
        return r.some(((r, s) => {
            var n;
            if (-1 !== (null == (n = i.path) ? void 0 : n.indexOf(r))) return a = s, !0
        })), a
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r) {
        return (i, s) => a(r, i) - a(r, s)
    }
},
25389: (r, i, a) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r, i = []) {
        let a = [],
            p = new Set,
            c = new Set(i.map((([r, i]) => `${r}-${i}`)));

        function f(r, i) {
            let s = (0, o.split)(r)[0];
            p.add(s), c.has(`${i}-${s}`) || a.push([i, s])
        }
        for (const i in r)
            if ((0, s.default)(r, i)) {
                let a = r[i];
                p.add(i), h.default.isRef(a) && a.isSibling ? f(a.path, i) : (0, l.default)(a) && "deps" in a && a.deps.forEach((r => f(r, i)))
            }
        return n.default.array(Array.from(p), a).reverse()
    };
    var s = p(a(18721)),
        n = p(a(94633)),
        o = a(55760),
        h = p(a(32434)),
        l = p(a(97412));

    function p(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
},
86659: (r, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function(r) {
        return null == r ? [] : [].concat(r)
    }
}
}]);