"use strict";
(self.webpackChunkintercom_js = self.webpackChunkintercom_js || []).push([
    [9870], {
        87111: (e, t, o) => {
            o.d(t, {
                Z: () => g
            });
            var r = o(67294),
                i = o(50700),
                n = o(54874);
            const a = (0, i.F4)("0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"),
                s = (0, i.ZP)("div", {
                    target: "e1idfbg60"
                })({
                    name: "1reuysi",
                    styles: "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"
                });
            var l = {
                    name: "jwuvlr",
                    styles: "width:12px;height:12px;border-width:2px;"
                },
                c = {
                    name: "3o0h5k",
                    styles: "width:16px;height:16px;"
                },
                d = {
                    name: "sajjl8",
                    styles: "border-width:1px;"
                },
                p = {
                    name: "dmplw1",
                    styles: "border-top:2px solid white;border-right:2px solid rgba(255,255,255,0.3);border-bottom:2px solid rgba(255,255,255,0.3);border-left:2px solid rgba(255,255,255,0.3);"
                },
                m = {
                    name: "c1yqk",
                    styles: "transition:opacity 0.2s ease-out;"
                };
            const h = (0, i.ZP)("div", {
                target: "e1idfbg61"
            })("border-radius:50%;display:block;width:28px;height:28px;animation:", a, " 0.6s infinite linear;transition:opacity 0.1s ease-out;", (({
                hasDelay: e
            }) => e && m), " ", (({
                visible: e
            }) => (0, i.iv)("opacity:", e ? 1 : 0, ";")), " ", (({
                theme: e
            }) => (0, i.iv)("border-top:2px solid ", e.buttonBackgroundColor, ";border-right:2px solid ", e.appColorSemiTransparent30, ";border-bottom:2px solid ", e.appColorSemiTransparent30, ";border-left:2px solid ", e.appColorSemiTransparent30, ";")), " ", (({
                color: e
            }) => "white" === e && p), " ", (({
                color: e,
                theme: t
            }) => "grey" === e && (0, i.iv)("border-top:2px solid ", t.grey, ";border-right:2px solid ", (0, n.Bw)(t.grey, .3), ";border-bottom:2px solid ", (0, n.Bw)(t.grey, .3), ";border-left:2px solid ", (0, n.Bw)(t.grey, .3), ";")), " ", (({
                color: e,
                theme: t
            }) => "black" === e && (0, i.iv)("border-top:2px solid ", t.black, ";border-right:2px solid ", (0, n.Bw)(t.black, .3), ";border-bottom:2px solid ", (0, n.Bw)(t.black, .3), ";border-left:2px solid ", (0, n.Bw)(t.black, .3), ";")), " ", (({
                size: e
            }) => "regular" === e && d), " ", (({
                size: e
            }) => "small" === e && c), " ", (({
                size: e
            }) => "tiny" === e && l));
            var u = o(73071);
            const g = ({
                size: e = "regular",
                color: t = "grey",
                inline: o = !1,
                delay: i = 0
            }) => {
                const [n, a] = (0, r.useState)(!1), l = (0, r.useCallback)((() => a(!0)), []);
                (0, u.Z)(l, i);
                const c = o ? r.Fragment : s;
                return r.createElement(c, null, r.createElement(h, {
                    size: e,
                    color: t,
                    className: "loading-spinner",
                    "data-testid": "loading-spinner",
                    visible: n,
                    hasDelay: i > 0
                }))
            }
        },
        99022: (e, t, o) => {
            o.d(t, {
                Z: () => ButtonGroupAttribute
            });
            var r = o(67294),
                i = o(67592),
                n = o(18289),
                a = o(87111),
                s = o(50700),
                l = o(86578);
            const c = (0, s.ZP)("button", {
                    target: "e13m2vw70"
                })("margin:0;border:1px solid ", (0, s.rS)("attributeButtonColor"), ";color:", (0, s.rS)("attributeButtonColor"), ";display:inline-block;padding:8px 2px;cursor:pointer;border-radius:0;border-right:none;flex:1 0 0px;text-align:center;position:relative;&:first-of-type{border-top-left-radius:4px;border-bottom-left-radius:4px;}", l.J.className, " &:first-of-type{border-top-left-radius:8px;border-bottom-left-radius:8px;}&:last-child{border-right:1px solid ", (0, s.rS)("attributeButtonColor"), ";border-top-right-radius:4px;border-bottom-right-radius:4px;}", l.J.className, " &:last-child{border-top-right-radius:8px;border-bottom-right-radius:8px;}", (({
                    isSelected: e,
                    theme: t
                }) => e && (0, s.iv)("font-weight:600;&:hover{color:", t.attributeButtonColor, ";}")), " ", (({
                    theme: e,
                    saveState: t,
                    disabled: o,
                    isSelected: r
                }) => ("unsaved" === t || "failed" === t) && !o && (0, s.iv)("color:", e.attributeButtonColor, ";&,*{cursor:pointer;}&:hover,&:focus{background-color:", e.attributeButtonHoverColor, ";}&:active{background-color:", e.attributeButtonActiveColor, ";}&:last-child:hover,&:last-child:focus{margin-right:0;}", r && (0, s.iv)("background-color:", e.attributeButtonColor, ";color:", e.white, ";"))), " ", (({
                    theme: e,
                    saveState: t,
                    disabled: o,
                    isSelected: r
                }) => ("saved" === t || o) && (0, s.iv)("&,*{cursor:default;}color:", e.grey, ";border-color:", e.attributeButtonColor, ";", r && (0, s.iv)("background-color:", e.attributeButtonColor, ";color:", e.white, ";"))), " ", (({
                    saveState: e,
                    isSelected: t,
                    theme: o
                }) => "saving" === e && (0, s.iv)("&,*{cursor:default;}", t && (0, s.iv)("background-color:", o.attributeButtonColor, ";color:", o.white, ";")))),
                d = (0, s.ZP)("span", {
                    target: "e13m2vw71"
                })({
                    name: "k7ahk7",
                    styles: "font-size:14px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;text-align:center;line-height:1.5;opacity:1;"
                });
            class ButtonGroupOption extends r.Component {
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        const {
                            id: e,
                            text: t,
                            onClick: o,
                            disabled: r
                        } = this.props;
                        r || o({
                            id: e,
                            text: t
                        })
                    }
                }
                renderText() {
                    const {
                        text: e,
                        isSelected: t,
                        isLoading: o
                    } = this.props;
                    return t && o ? r.createElement(a.Z, {
                        size: "small",
                        color: "white"
                    }) : r.createElement(d, null, e)
                }
                render() {
                    const {
                        id: e,
                        isSelected: t,
                        disabled: o,
                        saveState: i
                    } = this.props;
                    return r.createElement(c, {
                        key: e,
                        onClick: this.handleClick,
                        "aria-disabled": o,
                        isSelected: t,
                        disabled: o,
                        saveState: i
                    }, this.renderText())
                }
            }
            const p = (0, s.ZP)("div", {
                target: "e1mv6ku80"
            })({
                name: "65j5og",
                styles: "box-sizing:border-box;display:flex;max-width:100%;margin-bottom:8px;"
            });
            class ButtonGroupAttribute extends r.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        value: this.props.value
                    }, this.handleChange = e => {
                        const {
                            saveState: t,
                            disabled: o
                        } = this.props;
                        "saved" === t || "saving" === t || o || (this.setState({
                            value: e
                        }), this.props.onChange(e))
                    }
                }
                renderOption(e, t) {
                    const {
                        disabled: o,
                        isLoading: i,
                        saveState: n
                    } = this.props, {
                        value: a
                    } = this.state;
                    return r.createElement(ButtonGroupOption, {
                        key: t,
                        id: e.id,
                        text: e.text,
                        disabled: o || !!e.disabled,
                        isSelected: !!a && a.id === e.id,
                        isLoading: i,
                        onClick: this.handleChange,
                        saveState: n
                    })
                }
                renderOptions() {
                    const {
                        options: e,
                        disabled: t
                    } = this.props;
                    return r.createElement(p, {
                        "aria-disabled": t
                    }, e.map(((e, t) => this.renderOption(e, t))))
                }
                render() {
                    return r.createElement("div", null, this.renderOptions(), "failed" === this.props.saveState && r.createElement(n.Z, {
                        errorMessage: (0, i.Iu)("something_is_wrong")
                    }))
                }
            }
        },
        18289: (e, t, o) => {
            o.d(t, {
                Z: () => n
            });
            var r = o(67294),
                i = o(93287);

            function n(e) {
                return r.createElement(i.e, null, r.createElement(i.y, {
                    role: "alert"
                }, e.errorMessage))
            }
        },
        37810: (e, t, o) => {
            o.d(t, {
                Xp: () => i,
                ab: () => a,
                vk: () => n
            });
            const r = new Set,
                i = e => {
                    r.add(e)
                },
                n = e => {
                    r.delete(e)
                },
                a = e => {
                    r.forEach((t => {
                        t(e)
                    }))
                }
        },
        51886: (e, t, o) => {
            o.d(t, {
                Z: () => ListAttribute
            });
            var r = o(18446),
                i = o.n(r),
                n = o(67294),
                a = o(67592),
                s = o(18289),
                l = o(50700),
                c = o(39113);
            const d = o.p + "images/open-list-icon.a09533f7.png",
                p = o.p + "images/open-list-icon@2x.78b9209f.png";
            var m = o(93289),
                h = o(1638),
                u = o(78717);
            const g = ({
                    theme: e,
                    isOpen: t,
                    saveState: o
                }) => (0, l.iv)("display:flex;position:relative;height:40px;padding:0 0 0 16px;border-radius:8px;font-size:14px;line-height:40px;background-color:", e.white, ";border:1px solid ", e.inputBorder, ";color:", e.bodyText, ";&:focus{border:1px solid ", e.appColorSemiTransparent, ";}&,*{cursor:pointer;}", t && (0, l.iv)("border:1px solid ", e.appColorSemiTransparent, ";"), " ", ("saved" === o || "saving" === o) && (0, l.iv)("border:1px solid ", e.appColor, ";&,*{cursor:default;}"), " ", "saved" === o && (0, l.iv)("border-color:", e.lightGrey3, ";background-color:", e.inputBackground, ";color:", e.grey, ";")),
                b = (0, l.ZP)("div", {
                    target: "e1ptxow90"
                })(g, " ", (({
                    isDisabled: e,
                    theme: t
                }) => e && (0, l.iv)("&:focus{border:1px solid ", t.inputBorder, ";}&,*{cursor:default;}"))),
                f = {
                    name: "1uls13w",
                    styles: "flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
                },
                x = (0, l.ZP)("span", {
                    target: "e1ptxow91"
                })(f),
                v = (0, l.ZP)("span", {
                    target: "e1ptxow92"
                })(f, " color:", (0, l.rS)("appColor"), ";font-weight:600;border:0;", (({
                    theme: e
                }) => e.isPrimaryColorLight && (0, l.iv)("color:", e.grey, ";")), " ", (({
                    isDisabled: e,
                    theme: t
                }) => e && (0, l.iv)("color:", t.disabledInputText, ";"))),
                y = (0, l.ZP)("span", {
                    target: "e1ptxow93"
                })("width:35px;background-position:center;", (0, c.Ko)(d, p, "8px", "4px")),
                w = (0, l.ZP)("span", {
                    target: "e1ptxow94"
                })("width:35px;background-position:center;", (0, c.Ko)(m.Z, h.Z, "14px", "12px")),
                k = (0, l.ZP)(u.ZP, {
                    target: "e1ptxow95"
                })("z-index:", (0, c.W5)(3), ";position:fixed;box-shadow:0 1px 15px rgba(0,0,0,0.1);border-radius:8px;"),
                C = (0, l.ZP)("div", {
                    target: "e1ptxow96"
                })("padding:10px 0;max-height:120px;background-color:", (0, l.rS)("white"), ";overflow:scroll;"),
                S = (0, l.ZP)("div", {
                    target: "e1ptxow97"
                })({
                    name: "79elbk",
                    styles: "position:relative;"
                }),
                P = (0, l.ZP)("select", {
                    target: "e1ptxow98"
                })(g, " width:100%;height:42px;", (0, c.Ko)(d, p, "8px", "4px"), ";background-position:calc(100% - 13.5px);font-weight:600;appearance:none;padding-right:35px;font-family:", (0, l.rS)("fontSansSerif"), ";color:", (0, l.rS)("appColor"), ";", c.qJ, " &:disabled{color:", (0, l.rS)("grey"), ";&:focus{border:1px solid ", (0, l.rS)("inputBorder"), ";}&,*{cursor:default;}}");
            var E = o(37424),
                N = o(53004),
                B = o(97681),
                O = o(62017),
                Z = o(73935),
                T = o(21713),
                j = o(52945);
            const z = (0, l.ZP)("div", {
                target: "epwvezn0"
            })("padding:6px 28px 6px 14px;line-height:20px;position:relative;", (({
                isSelected: e,
                theme: t
            }) => e && (0, l.iv)(j.K.className, "{position:absolute;width:16px;height:16px;top:calc(50% - 8px);right:8px;fill:", t.appColor, ";}")), " ", (({
                disabled: e,
                theme: t
            }) => e && (0, l.iv)("color:", t.grey, ";&:hover{cursor:default;}")), " ", (({
                isSelected: e,
                disabled: t,
                theme: o
            }) => e && t && (0, l.iv)(j.K.className, "{fill:", o.grey, ";}")), " ", (({
                disabled: e,
                theme: t
            }) => !e && (0, l.iv)("&:hover{color:", t.white, ";background-color:", t.appColor, ";}")), " ", (({
                disabled: e,
                theme: t
            }) => !e && t.isPrimaryColorLight && (0, l.iv)("&:hover{color:", t.m5DarkGrey2, ";}")), " ", (({
                isSelected: e,
                disabled: t,
                theme: o
            }) => e && !t && (0, l.iv)("&:hover{", j.K.className, "{fill:", o.white, ";}}")));
            class ListAttributeOption extends n.Component {
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        const {
                            id: t,
                            text: o,
                            onClick: r,
                            disabled: i
                        } = this.props;
                        i ? e.stopPropagation() : r({
                            id: t,
                            text: o
                        })
                    }
                }
                render() {
                    const {
                        id: e,
                        text: t,
                        disabled: o,
                        isSelected: r
                    } = this.props;
                    return n.createElement(z, {
                        className: "intercom-list-attribute-option",
                        key: e,
                        onClick: this.handleClick,
                        role: "option",
                        "aria-selected": r,
                        "aria-disabled": o,
                        isSelected: r,
                        disabled: !!o
                    }, r ? n.createElement(T.Z, null) : null, t)
                }
            }
            class ListOptions extends n.Component {
                constructor(...e) {
                    super(...e), this.listOptionsNode = void 0, this.state = {
                        value: this.props.value || null
                    }, this.handleChange = e => {
                        this.setState({
                            value: e
                        }), this.props.onChange(e)
                    }
                }
                componentDidMount() {
                    this.listOptionsNode && this.listOptionsNode.firstChild && this.listOptionsNode.firstChild.focus()
                }
                componentWillUnmount() {
                    this.props.listRef && this.props.listRef.focus()
                }
                renderOption(e, t) {
                    const {
                        value: o
                    } = this.state;
                    return n.createElement(ListAttributeOption, {
                        key: t,
                        id: e.id,
                        text: e.text,
                        disabled: this.props.disabled || !!e.disabled,
                        isSelected: !!o && o.id === e.id,
                        onClick: this.handleChange
                    })
                }
                render() {
                    const e = this.props.options.map(((e, t) => this.renderOption(e, t)));
                    return n.createElement(C, {
                        role: "listbox",
                        ref: e => this.listOptionsNode = e
                    }, e)
                }
            }
            var I = o(9021);
            class ListOptionsModal extends n.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        frameHeight: 0
                    }, this.setFrameHeight = e => {
                        this.setState({
                            frameHeight: e
                        })
                    }
                }
                findDomElement(e) {
                    return parent.document.querySelector(e) || document.querySelector(e)
                }
                getListDimensionsWithinFrame() {
                    return this.props.listRef ? this.props.listRef.getBoundingClientRect() : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0
                    }
                }
                getListRefParentFrameDimensions() {
                    const e = (0, O.GZ)() || (0, O.XQ)() || (0, O.Cs)() || (0, O.gm)();
                    return e ? e.getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    }
                }
                shouldOpenListOptionsUpwards() {
                    const e = this.getListDimensionsWithinFrame(),
                        t = this.getListRefParentFrameDimensions(),
                        o = (0, O.mP)() - (t.top + e.bottom),
                        r = t.top + e.top;
                    return this.state.frameHeight > o && r > o
                }
                calculateModalPositionStyles() {
                    const {
                        frameHeight: e
                    } = this.state, t = this.getListDimensionsWithinFrame(), o = this.getListRefParentFrameDimensions(), r = o.left + t.left;
                    let i = o.top + t.bottom;
                    return this.shouldOpenListOptionsUpwards() && (i = o.top + t.top - e), {
                        height: e,
                        width: t.width,
                        top: i,
                        left: r
                    }
                }
                renderModalFrame() {
                    const {
                        options: e,
                        value: t,
                        onChange: o,
                        listRef: r,
                        disabled: i
                    } = this.props;
                    return n.createElement(k, {
                        frameName: "intercom-list-options-modal-frame",
                        style: this.calculateModalPositionStyles(),
                        removeBodyMargin: !0
                    }, (() => n.createElement(I.Z, {
                        onHeightChange: this.setFrameHeight
                    }, n.createElement(ListOptions, {
                        role: "listbox",
                        value: t,
                        options: e,
                        onChange: o,
                        listRef: r,
                        disabled: i
                    }))))
                }
                renderModal() {
                    if (this.props.isMessengerCardView) return this.renderModalFrame(); {
                        const e = this.findDomElement("#intercom-css-container");
                        return n.createElement(B.Z, {
                            target: e,
                            isSandbox: !1
                        }, this.renderModalFrame())
                    }
                }
                render() {
                    const e = this.findDomElement("#intercom-modal-container");
                    return (0, Z.createPortal)(this.renderModal(), e)
                }
            }
            const L = (0, E.$j)((e => ({
                isMessengerCardView: (0, N.Z)(e)
            })))(ListOptionsModal);
            var M = o(37810),
                A = o(16315);
            class MobileList extends n.Component {
                constructor(...e) {
                    super(...e), this.listRef = void 0, this.handleChange = e => {
                        this.props.onChange(e.currentTarget.value)
                    }
                }
                componentDidMount() {
                    this.listRef && this.props.autoFocus && this.listRef.focus()
                }
                renderOptions() {
                    return this.props.options.map((e => {
                        const {
                            id: t,
                            text: o,
                            disabled: r
                        } = e;
                        return n.createElement("option", {
                            key: t,
                            value: t,
                            disabled: r
                        }, o)
                    }))
                }
                render() {
                    const {
                        disabled: e,
                        value: t,
                        isOpen: o
                    } = this.props, r = t ? t.id : "";
                    return n.createElement(P, {
                        "aria-disabled": e,
                        "aria-label": (t ? t.text : (0, a.Iu)("choose_one")) || "List",
                        ref: e => this.listRef = e,
                        onChange: this.handleChange,
                        disabled: e,
                        isOpen: o,
                        defaultValue: r,
                        tabIndex: 0
                    }, n.createElement("option", {
                        disabled: !0,
                        hidden: !0,
                        value: ""
                    }, (0, a.Iu)("choose_one")), this.renderOptions())
                }
            }
            MobileList.defaultProps = {
                autoFocus: !1,
                disabled: !1,
                isOpen: !1
            };
            class ListAttribute extends n.Component {
                constructor(...e) {
                    super(...e), this.listRef = void 0, this.state = {
                        value: this.props.value || null,
                        isOpen: !1,
                        prevProps: this.props
                    }, this.shouldRenderNativePicker = () => {
                        const {
                            renderNativePickerInMobile: e
                        } = this.props;
                        return (0, A.K1)() && e
                    }, this.closeIfEventOutsideList = e => {
                        this.eventTargetIsNotInsideList(e.target) && this.state.isOpen && this.setState({
                            isOpen: !1
                        })
                    }, this.eventTargetIsNotInsideList = e => this.listRef && !this.listRef.contains(e), this.handleOpenToggle = e => {
                        e.preventDefault(), this.props.disabled || this.setState({
                            isOpen: !this.state.isOpen
                        })
                    }, this.handleChange = e => {
                        const t = this.props.options.find((t => t.id === e));
                        t && (this.setState({
                            value: t
                        }), this.props.onChange(t))
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    if (!t || i()(e, t.prevProps)) return null;
                    const o = e.value || t.value || null;
                    return e.disabled ? {
                        isOpen: !1,
                        prevProps: e,
                        value: o
                    } : {
                        value: o,
                        prevProps: e
                    }
                }
                componentDidMount() {
                    this.props.frameWindow && !this.shouldRenderNativePicker() && this.props.frameWindow.document.addEventListener("click", this.closeIfEventOutsideList, !1), this.listRef && this.props.autoFocus && this.listRef.focus(), (0, M.Xp)(this.closeIfEventOutsideList)
                }
                componentWillUnmount() {
                    this.props.frameWindow && !this.shouldRenderNativePicker() && this.props.frameWindow.document.removeEventListener("click", this.closeIfEventOutsideList), (0, M.vk)(this.closeIfEventOutsideList)
                }
                getPlaceholder() {
                    return this.state.value ? this.state.value.text : (0, a.Iu)("choose_one")
                }
                renderIcon() {
                    const {
                        saveState: e
                    } = this.props;
                    return "saved" === e || "saving" === e ? n.createElement(w, null) : n.createElement(y, null)
                }
                renderErrorMessage() {
                    return n.createElement(s.Z, {
                        errorMessage: (0, a.Iu)("something_is_wrong")
                    })
                }
                renderOptionsModal() {
                    const {
                        value: e,
                        options: t,
                        disabled: o,
                        onChange: r
                    } = this.props;
                    return n.createElement(L, {
                        value: e,
                        options: t,
                        disabled: o,
                        onChange: r,
                        listRef: this.listRef
                    })
                }
                renderList() {
                    const {
                        disabled: e,
                        saveState: t
                    } = this.props, {
                        isOpen: o
                    } = this.state;
                    return n.createElement(b, {
                        onClick: this.handleOpenToggle,
                        ref: e => this.listRef = e,
                        "aria-disabled": e,
                        "aria-label": this.getPlaceholder() || "List",
                        saveState: t,
                        isDisabled: e,
                        isOpen: o,
                        className: "intercom-list-attribute",
                        "data-testid": "dropdown"
                    }, n.createElement(v, {
                        isDisabled: e
                    }, this.getPlaceholder()), n.createElement(y, null), this.state.isOpen && this.renderOptionsModal())
                }
                renderMobileList() {
                    const {
                        options: e,
                        disabled: t,
                        saveState: o,
                        autoFocus: r
                    } = this.props, {
                        isOpen: i,
                        value: a
                    } = this.state;
                    return n.createElement(MobileList, {
                        value: a,
                        options: e,
                        disabled: t,
                        saveState: o,
                        autoFocus: r,
                        isOpen: i,
                        onClick: this.handleOpenToggle,
                        onChange: this.handleChange
                    })
                }
                renderUnsubmitted() {
                    const {
                        saveState: e
                    } = this.props;
                    return n.createElement(S, null, this.shouldRenderNativePicker() ? this.renderMobileList() : this.renderList(), "failed" === e && this.renderErrorMessage())
                }
                renderSubmitted() {
                    const {
                        saveState: e,
                        disabled: t
                    } = this.props, {
                        isOpen: o
                    } = this.state;
                    return n.createElement(b, {
                        saveState: e,
                        isDisabled: t,
                        isOpen: o,
                        "aria-disabled": !0,
                        className: "intercom-list-attribute"
                    }, n.createElement(x, null, this.getPlaceholder()), this.renderIcon())
                }
                render() {
                    const {
                        saveState: e
                    } = this.props;
                    return "unsaved" === e || "failed" === e ? this.renderUnsubmitted() : this.renderSubmitted()
                }
            }
            ListAttribute.defaultProps = {
                autoFocus: !1,
                disabled: !1,
                renderNativePickerInMobile: !1
            }
        },
        90196: (e, t, o) => {
            o.d(t, {
                Z: () => ValidatingInput
            });
            var r = o(18446),
                i = o.n(r),
                n = o(67294),
                a = o(39113),
                s = o(15300),
                l = o(92279),
                c = o(38712);

            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, d.apply(this, arguments)
            }

            function p(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(o), !0).forEach((function(t) {
                        h(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function h(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            class Input extends n.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        value: this.props.value || ""
                    }, this.handleChange = e => {
                        const t = e.target.value.trim();
                        this.setState({
                            value: t
                        }), this.props.onChange(t)
                    }, this.handleClick = () => {
                        const e = (0, l.OR)(window);
                        if (!e || this.props.disabled) return;
                        const t = {
                            type: "INPUT_TEXT",
                            payload: {
                                currentValue: this.state.value,
                                id: this.props.id,
                                label: this.props.label,
                                placeholder: this.props.placeholder,
                                messengerAppId: this.props.messengerAppId
                            }
                        };
                        e.handleAction(JSON.stringify(t))
                    }
                }
                render() {
                    const {
                        value: e,
                        placeholder: t,
                        disabled: o,
                        autoFocus: r,
                        onFocus: i,
                        onKeyDown: p,
                        isFailed: h,
                        ariaLabel: u,
                        ariaLabelledby: g,
                        type: b
                    } = this.props, f = m(m({}, h ? {
                        "aria-invalid": !0
                    } : {}), {}, {
                        "aria-labelledby": g,
                        "aria-label": u || t
                    });
                    return (0, l.OR)(window) ? n.createElement(a.Wr, null, n.createElement(s.v, {
                        onClick: this.handleClick,
                        tabIndex: -1,
                        role: "presentation"
                    }), n.createElement("input", d({
                        type: b,
                        autoComplete: "email" === b ? "email" : "off",
                        disabled: o,
                        defaultValue: e,
                        value: e,
                        placeholder: t,
                        autoFocus: r,
                        onFocus: i,
                        onKeyDown: p,
                        onChange: this.handleChange,
                        onBlur: c.AF
                    }, f))) : n.createElement("input", d({
                        type: b,
                        autoComplete: "email" === b ? "email" : "off",
                        disabled: o,
                        defaultValue: e,
                        placeholder: t,
                        autoFocus: r,
                        onFocus: i,
                        onKeyDown: p,
                        onChange: this.handleChange,
                        onBlur: c.AF
                    }, f))
                }
            }
            Input.defaultProps = {
                disabled: !1,
                autoFocus: !0,
                onChange: () => {}
            };
            var u = o(67592),
                g = o(90733),
                b = o(93537),
                f = o(87111),
                x = o(59339),
                v = o(82057);

            function y() {
                return y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, y.apply(this, arguments)
            }

            function w(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function k(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            class SubmittableInput extends n.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        value: this.props.value || ""
                    }, this.handleChange = e => {
                        this.setState({
                            value: e
                        }), this.props.onChange(e)
                    }, this.handleSubmit = () => {
                        if (this.isDisabled()) return;
                        const {
                            value: e
                        } = this.state;
                        this.props.onSubmit(e)
                    }, this.handleKeyDown = e => {
                        13 === e.keyCode && (e.preventDefault(), this.handleSubmit())
                    }
                }
                isDisabled() {
                    const {
                        saveState: e,
                        disabled: t
                    } = this.props;
                    return t || "saving" === e || "saved" === e
                }
                renderLoadingSpinner() {
                    const {
                        isPrimaryColorLight: e
                    } = this.context || {}, t = e ? "black" : "white";
                    return n.createElement(f.Z, {
                        color: t,
                        size: "small"
                    })
                }
                render() {
                    const {
                        value: e,
                        saveState: t,
                        placeholder: o,
                        id: r,
                        label: i,
                        autoFocus: a,
                        onFocus: s,
                        ariaLabel: l,
                        ariaLabelledby: c,
                        buttonAriaLabel: d,
                        buttonAriaLabelledby: p,
                        type: m,
                        disabled: h,
                        messengerAppId: f
                    } = this.props, x = "saving" === t, C = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? w(Object(o), !0).forEach((function(t) {
                                k(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : w(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }({
                        "aria-label": x ? (0, u.Iu)("loading") : d || (0, u.Iu)("submit"),
                        "aria-labelledby": p
                    }, x ? {
                        role: "progressbar"
                    } : {});
                    return n.createElement("div", null, n.createElement(Input, {
                        value: e,
                        key: e,
                        placeholder: o,
                        id: r,
                        label: i,
                        ariaLabel: l,
                        ariaLabelledby: c,
                        type: m,
                        disabled: this.isDisabled(),
                        autoFocus: a,
                        onChange: this.handleChange,
                        onSubmit: this.handleSubmit,
                        onKeyDown: this.handleKeyDown,
                        onFocus: s,
                        isFailed: "failed" === t,
                        messengerAppId: f
                    }), n.createElement(v.I, y({
                        disabled: h && !x,
                        isLoading: x,
                        onClick: this.handleSubmit
                    }, C), n.createElement(g.Z, {
                        disabled: this.isDisabled(),
                        loading: x
                    }), x ? this.renderLoadingSpinner() : null), n.createElement(b.Z, null))
                }
            }
            SubmittableInput.contextType = x.Ni, SubmittableInput.defaultProps = {
                saveState: "unsaved",
                disabled: !1,
                autoFocus: !0,
                errorMessage: (0, u.Iu)("something_is_wrong"),
                onChange: () => {}
            };
            var C = o(18289),
                S = o(59565);

            function P() {
                return P = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, P.apply(this, arguments)
            }
            class ValidatingInput extends n.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        value: this.props.value || "",
                        saveState: this.props.saveState,
                        isInvalid: "failed" === this.props.saveState,
                        prevProps: this.props
                    }, this.handleChange = e => {
                        this.setState({
                            saveState: "unsaved",
                            isInvalid: !1
                        }), this.props.onChange(e)
                    }, this.handleSubmit = e => {
                        this.props.formatter && (e = this.props.formatter(e)), this.props.isValid(e) ? this.props.onSubmit(e) : this.setState({
                            saveState: "failed",
                            isInvalid: !0
                        })
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return !t || i()(e, t.prevProps) ? null : {
                        value: e.value || t.value || "",
                        saveState: e.saveState,
                        isInvalid: "failed" === e.saveState,
                        prevProps: e
                    }
                }
                autoFocus() {
                    const {
                        isBorderless: e,
                        isReplyType: t,
                        autoFocus: o
                    } = this.props;
                    return (!e || !t) && o
                }
                buildInputProps() {
                    const {
                        saveState: e,
                        value: t,
                        placeholder: o,
                        id: r,
                        label: i,
                        disabled: n,
                        onFocus: a,
                        ariaLabel: s,
                        ariaLabelledby: l,
                        type: c,
                        messengerAppId: d
                    } = this.props;
                    return {
                        value: t,
                        key: t,
                        placeholder: o,
                        id: r,
                        label: i,
                        ariaLabel: s,
                        ariaLabelledby: l,
                        type: c,
                        saveState: this.state.saveState,
                        disabled: n,
                        autoFocus: this.autoFocus(),
                        onFocus: a,
                        onChange: this.handleChange,
                        messengerAppId: d,
                        isFailed: "failed" === e || this.state.isInvalid
                    }
                }
                render() {
                    const e = this.buildInputProps(),
                        {
                            isInvalid: t
                        } = this.state,
                        {
                            validationErrorMessage: o,
                            hideErrorMessage: r,
                            isSubmittable: i,
                            buttonAriaLabel: a,
                            buttonAriaLabelledby: s,
                            isBorderless: l,
                            isReplyType: c,
                            isNotificationChannel: d,
                            saveState: p
                        } = this.props;
                    return n.createElement("div", null, n.createElement(S.X, {
                        isBorderless: l,
                        isReplyType: c,
                        isNotificationChannel: d,
                        isSaving: "saving" === p,
                        isSaved: "saved" === p,
                        isFailed: "failed" === p || this.state.isInvalid
                    }, i ? n.createElement(SubmittableInput, P({}, e, {
                        onSubmit: this.handleSubmit,
                        buttonAriaLabel: a,
                        buttonAriaLabelledby: s
                    })) : n.createElement(Input, e)), t && !r ? n.createElement(C.Z, {
                        errorMessage: o
                    }) : null)
                }
            }
            ValidatingInput.defaultProps = {
                saveState: "unsaved",
                type: "text",
                disabled: !1,
                hideErrorMessage: !1,
                validationErrorMessage: "",
                isBorderless: !1,
                isReplyType: !1,
                isNotificationChannel: !1,
                isSubmittable: !0,
                autoFocus: !0,
                onChange: () => {}
            }
        },
        46216: (e, t, o) => {
            o.d(t, {
                Z: () => Ve
            });
            var r = o(45697),
                i = o.n(r),
                n = o(67294),
                a = o(37424),
                s = o(50700),
                l = o(436),
                c = o(60293),
                d = o(53238),
                p = o(67900),
                m = o(30849),
                h = o(10393),
                u = o(95345),
                g = o(44265),
                b = o(95486),
                f = o(58273),
                x = o(88553),
                v = o(33131),
                y = o(40414);
            const w = (0, s.ZP)("div", {
                target: "et4vnr0"
            })(l.G, " ", p.U0.className, " &,", m.kA.className, " &,", h.om.className, " &,", u.c.className, " &,", c.WG.className, " &,", d.y.className, " &,", f.K2.className, " &,", x.U$.className, " &,", g.W.className, " &,", b.b8.className, " &,", v.h.className, " &,", y.Ow.className, " &{display:block;text-align:center;max-width:100%;img{margin:0 auto;display:block;max-width:100%;vertical-align:bottom;}}", c.WG.className, " &,", f.K2.className, " &,.intercom-tour-step-pointer &{margin-bottom:23px;}", p.U0.className, " &,", m.kA.className, " &,", h.om.className, " &,.intercom-tour-step-post &{margin-bottom:34px;}", g.W.className, " &,", b.b8.className, " &{margin-bottom:10px;transition:all 0.12s ease-out;}", u.c.className, " &,", d.y.className, " &{margin-bottom:10px;}", y.Ow.className, " &{margin-bottom:9px;img{height:auto;}}.intercom-comment-single &{img{border-radius:4px;}}");
            var k = o(67592),
                C = o(39113);
            const S = (0, s.ZP)("div", {
                    target: "e1dyr1vq0"
                })(C.J),
                P = (0, s.ZP)("img", {
                    target: "e1dyr1vq1"
                })({
                    name: "1le7mh6",
                    styles: "cursor:zoom-out;max-width:90vw;max-height:90vh;transition:max-width ease 200ms,max-height ease 200ms;opacity:0;transform:translateY(20px);.intercom-modal-enter-active &,.intercom-modal-enter-done &{opacity:1;transform:translateY(0);transition:opacity 200ms,transform 200ms;}.intercom-modal-exit &{opacity:1;transform:translateY(0);}.intercom-modal-exit.intercom-modal-exit-active &{opacity:0;transform:translateY(20px);transition:opacity 200ms,transform 200ms;}"
                });
            var E = o(68283);
            const N = (0, n.memo)((e => {
                    const {
                        src: t,
                        onClose: o,
                        frameWindow: r,
                        returnFocus: i,
                        title: a
                    } = e;
                    return n.createElement(E.Z, {
                        frameWindow: r,
                        returnFocus: i,
                        closeCallback: o
                    }, (({
                        onClose: e
                    }) => n.createElement(S, null, n.createElement(P, {
                        src: t,
                        alt: a || "",
                        onClick: e,
                        "aria-label": (0, k.Iu)("close")
                    }))))
                })),
                B = (0, s.ZP)("div", {
                    target: "e1dfxu9z0"
                })({
                    name: "ohwg9z",
                    styles: "position:relative;overflow:hidden;"
                });
            var O = {
                    name: "vgd1sg",
                    styles: "cursor:zoom-in;"
                },
                Z = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                };
            const T = (0, s.ZP)("img", {
                    target: "e1dfxu9z1"
                })("opacity:0;transition:opacity 100ms ease-out;", (({
                    loaded: e
                }) => e && Z), " ", (({
                    zoomable: e
                }) => e && O)),
                j = (0, s.ZP)("div", {
                    target: "e1dfxu9z2"
                })({
                    name: "s54o4s",
                    styles: "position:absolute;top:0;right:0;bottom:0;background-color:white;opacity:0.5;transition:width 1s linear;"
                });
            class Image extends n.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        loaded: !1,
                        failed: !1,
                        zoomed: !1
                    }, this.imgRef = void 0, this.containerRef = void 0, this.placeholder = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width%3D'${this.props.width}' height%3D'${this.props.height}' viewBox%3D'0 0 ${this.props.width} ${this.props.height}'%2F%3E`, this.handleClick = () => {
                        if (this.props.onImageClick && this.containerRef) {
                            const e = this.containerRef.getBoundingClientRect(),
                                {
                                    src: t
                                } = this.props;
                            this.props.onImageClick(t, {
                                x: e.left,
                                y: e.top,
                                width: e.width,
                                height: e.height
                            })
                        }!this.state.zoomed && this.props.zoomable && this.setState({
                            zoomed: !0
                        })
                    }, this.handleClose = () => {
                        this.setState({
                            zoomed: !1
                        })
                    }, this.handleLoad = () => {
                        this.setState({
                            loaded: !0,
                            failed: !1
                        })
                    }, this.handleError = () => {
                        this.setState({
                            failed: !0,
                            loaded: !1
                        })
                    }
                }
                getProgressStyle() {
                    const {
                        progress: e
                    } = this.props;
                    return {
                        width: `${100-Math.max(Math.min(e,100),0)}%`
                    }
                }
                imageHasLoaded() {
                    return this.state.loaded && !this.state.failed
                }
                getImageStyle() {
                    return this.imageHasLoaded() ? {} : {
                        visibility: "hidden",
                        width: 0,
                        height: 0
                    }
                }
                renderZoomedImage() {
                    return n.createElement(N, {
                        src: this.props.src,
                        title: this.props.title,
                        onClose: this.handleClose,
                        frameWindow: this.props.frameWindow,
                        returnFocus: this.imgRef && this.imgRef.focus.bind(this.imgRef)
                    })
                }
                renderProgress() {
                    return n.createElement(j, {
                        style: this.getProgressStyle()
                    })
                }
                renderPlaceholderImage() {
                    const {
                        width: e,
                        height: t
                    } = this.props;
                    return this.imageHasLoaded() ? null : n.createElement("img", {
                        src: this.placeholder,
                        alt: "",
                        width: e,
                        height: t
                    })
                }
                renderImage() {
                    const {
                        src: e,
                        width: t,
                        height: o,
                        progress: r,
                        title: i,
                        zoomable: a,
                        text: s
                    } = this.props, {
                        zoomed: l,
                        loaded: c
                    } = this.state, d = i || s;
                    return n.createElement(n.Fragment, null, n.createElement(T, {
                        src: e,
                        style: this.getImageStyle(),
                        width: t,
                        height: o,
                        onLoad: this.handleLoad,
                        onError: this.handleError,
                        onClick: this.handleClick,
                        alt: d || "",
                        "aria-label": d,
                        zoomable: a,
                        loaded: c,
                        ref: e => this.imgRef = e
                    }), l ? this.renderZoomedImage() : null, r < 100 ? this.renderProgress() : null)
                }
                render() {
                    return n.createElement(B, {
                        className: this.props.align ? `align-${this.props.align}` : void 0,
                        ref: e => this.containerRef = e
                    }, this.renderPlaceholderImage(), this.renderImage())
                }
            }
            Image.defaultProps = {
                zoomable: !1
            };
            class ImageBlock extends n.Component {
                renderLinkedImage() {
                    const {
                        linkUrl: e,
                        trackingLinkUrl: t
                    } = this.props.block;
                    return n.createElement("a", {
                        href: e,
                        "data-via": t
                    }, this.renderImage())
                }
                renderImage() {
                    const {
                        zoomable: e,
                        block: t,
                        maxWidth: o,
                        onImageClick: r,
                        frameWindow: i
                    } = this.props, {
                        url: a,
                        width: s,
                        height: l,
                        progress: c,
                        linkUrl: d,
                        title: p,
                        align: m,
                        text: h
                    } = t;
                    return n.createElement(Image, {
                        src: a,
                        maxWidth: o,
                        width: s,
                        height: l,
                        title: p,
                        zoomable: e && !d,
                        progress: c,
                        onImageClick: r,
                        frameWindow: i,
                        align: m,
                        text: h
                    })
                }
                render() {
                    const {
                        linkUrl: e
                    } = this.props.block;
                    return n.createElement(w, {
                        className: "intercom-block-image"
                    }, e ? this.renderLinkedImage() : this.renderImage())
                }
            }
            ImageBlock.defaultProps = {
                zoomable: !1
            };
            var z = o(77011),
                I = o(29158);

            function L(e) {
                const {
                    title: t,
                    articleId: o,
                    linkType: r,
                    url: i
                } = e.block, s = (0, a.I0)(), l = e => {
                    e.preventDefault(), s((0, z.Me)(o))
                };
                return "resolution_bot.source" === r ? n.createElement(W, {
                    isLastBlock: e.isLastBlock
                }, n.createElement(F, null, (0, k.Iu)("source")), n.createElement(D, {
                    onClick: l
                }, n.createElement("span", null, t), n.createElement(I.Z, {
                    color: "linkColor"
                }))) : n.createElement(M, null, n.createElement(A, {
                    href: i,
                    onClick: l
                }, t))
            }
            const M = (0, s.ZP)("div", {
                    target: "eoe19af0"
                })(l.G, ";margin:0 0 2px;"),
                A = (0, s.ZP)("a", {
                    target: "eoe19af1"
                })({
                    name: "by3mqw",
                    styles: "font-size:14px;line-height:1.4;"
                }),
                F = (0, s.ZP)("h3", {
                    target: "eoe19af2"
                })("color:", (0, s.rS)("finAnswerCardTextColor"), ";font-weight:600;"),
                D = (0, s.ZP)("div", {
                    target: "eoe19af3"
                })("display flex;flex-direction:row;align-items:center;gap:2px;transition:all 0.2s ease-in-out;color:", (0, s.rS)("m5DarkGrey2"), ";cursor:pointer;");
            var _ = {
                name: "4v8jep",
                styles: "margin-top:-12px;padding-bottom:0px;"
            };
            const W = (0, s.ZP)("div", {
                target: "eoe19af4"
            })("position:relative;display:block;margin-left:-16px;margin-right:-16px;padding:12px 16px;font-size:14px;line-height:1.5;color:", (0, s.rS)("inputGrey"), ";margin-bottom:-12px;", (({
                isLastBlock: e
            }) => e && _), " h3{font-weight:590;}&:hover{", D.className, "{color:", (0, s.rS)("linkColor"), ";}svg{path{stroke:", (0, s.rS)("linkColor"), ";}}}&::before{content:'';position:absolute;left:0;right:0;top:0;pointer-events:none;padding-bottom:12px;}");
            var G = o(52943);

            function U(e) {
                const {
                    align: t,
                    text: o,
                    style: r
                } = e.block;
                if (!o) return null;
                let i = !1;
                return e.block.class && (i = -1 !== e.block.class.indexOf("no-margin")), n.createElement(G.S, {
                    text: o,
                    tagName: "div",
                    className: "intercom-block-paragraph",
                    align: t,
                    noMargin: i,
                    color: null == r ? void 0 : r.fontColor,
                    fontFamily: null == r ? void 0 : r.fontFamily
                })
            }

            function R(e) {
                const {
                    content: t
                } = e.block;
                return n.createElement(G.S, {
                    text: t,
                    tagName: "div",
                    className: "intercom-block-paragraph"
                })
            }
            const H = (0, s.ZP)("div", {
                    target: "er0m7m40"
                })(l.G, " ", c.WG.className, " &,", f.K2.className, " &,", x.U$.className, " &,", h.om.className, " &,", p.U0.className, " &,", m.kA.className, " &,", g.W.className, " &,", u.c.className, " &,", d.y.className, " &,", b.b8.className, " &,.intercom-comment &{position:relative;display:block;iframe,video{width:100%;}}.intercom-comment &,.intercom-chat-card &{margin:0 0 10px;iframe,video{height:120px;}}", f.K2.className, " &{margin:0 0 10px;iframe,video{height:130px;}}.intercom-tour-step-post &,", h.om.className, " &,", p.U0.className, " &,", m.kA.className, " &{iframe,video{height:310px;}}", c.WG.className, " &{margin:0 ", (0, s.rS)("noteMarginPercent"), "% 24px;}", x.U$.className, " &{margin:0;}", h.om.className, " &,", p.U0.className, " &{margin:0 ", (0, s.rS)("postMarginPercent"), "% 40px;}", m.kA.className, " &{position:relative;display:block;margin:0 0 40px;height:0;left:0;padding:0 0 50%;iframe,embed,object,video{position:absolute;margin:0;top:0;left:0;bottom:0;height:100%;width:100%;border:0;}}", u.c.className, " &,", d.y.className, " &,", b.b8.className, " &,", g.W.className, " &{margin-bottom:10px;}.intercom-comment-single &{iframe,video{border-radius:4px;}}.intercom-tour-step-post &{margin-bottom:14px;}"),
                V = (e, t) => {
                    switch (e) {
                        case "youtube":
                            return `https://www.youtube.com/embed/${t}?rel=0`;
                        case "vimeo":
                            return `https://player.vimeo.com/video/${t}`;
                        case "wistia":
                            return `https://fast.wistia.net/embed/iframe/${t}`;
                        case "loom":
                            return `https://www.loom.com/embed/${t}`;
                        case "vidyard":
                            return `https://play.vidyard.com/${t}`
                    }
                };

            function q(e) {
                const {
                    provider: t,
                    id: o
                } = e.block, {
                    pointerSize: r
                } = e, i = void 0 === r || 0 === r ? "auto" : "350px";
                return n.createElement(H, {
                    className: "intercom-block-video"
                }, n.createElement("iframe", {
                    allowFullScreen: !0,
                    height: i,
                    frameBorder: "0",
                    src: V(t, o),
                    title: t,
                    role: "dialog"
                }))
            }
            const $ = (0, s.ZP)("div", {
                target: "e2ymi9b0"
            })(l.G, " ", v.h.className, " &,.intercom-chat-card-borderless-single &{position:relative;display:block;width:232px;&:before{display:block;content:' ';width:100%;padding-top:", 75, "%;}iframe,video{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;}}.intercom-chat-card-borderless-single &{width:240px;}", p.U0.className, " &,", h.om.className, " &{margin:0 ", (0, s.rS)("postMarginPercent"), "% 15px;video{width:100%;}}");

            function K(e) {
                return n.createElement($, null, n.createElement("video", {
                    loop: !0,
                    controls: !0,
                    autoPlay: !0
                }, n.createElement("source", {
                    type: "video/mp4",
                    src: e.block.url
                })))
            }
            var Y = o(26677);

            function X(e) {
                const {
                    text: t,
                    align: o,
                    style: r
                } = e.block;
                return n.createElement(Y.Z, {
                    tagName: "h1",
                    text: t,
                    centered: "center" === o,
                    color: null == r ? void 0 : r.fontColor,
                    fontFamily: null == r ? void 0 : r.fontFamily
                })
            }
            var J = o(71769);

            function Q(e) {
                const {
                    text: t,
                    align: o,
                    style: r
                } = e.block;
                return n.createElement(J.y, {
                    tagName: "h2",
                    text: t,
                    centered: "center" === o,
                    color: null == r ? void 0 : r.fontColor,
                    fontFamily: null == r ? void 0 : r.fontFamily
                })
            }
            var ee = o(14877);
            const te = ({
                    theme: e
                }) => (0, s.iv)(l.G, " ", (({
                    theme: e
                }) => (0, s.iv)("> li{color:", e.bodyText, ";", y.Ow.className, " &{color:inherit;}margin:0 0 5px 15px;padding:0;list-style-position:outside;list-style-type:disc;&,a,b,strong,i,em{overflow-wrap:break-word;word-wrap:break-word;}a{text-decoration:underline;}&:last-child{margin-bottom:0;}}"))({
                    theme: e
                }), " ", v.h.className, " &,", u.c.className, " &,", d.y.className, " &{font-size:14px;margin:0 0 10px 0;line-height:1.33;}", m.kA.className, " &{margin:0 0 24px;padding:0 0 0 16px;}", h.om.className, " &,", p.U0.className, " &{font-size:17px;line-height:1.41;margin:0 ", e.postMarginPercent, "% 27px;padding:0 0 0 16px;}", g.W.className, " &,", b.b8.className, " &{font-size:14px;margin:0 ", e.chatMarginPx, "px 10px;padding:0 0 0 8px;line-height:1.33;}", c.WG.className, " &,", f.K2.className, " &,", x.U$.className, " &{font-size:14px;margin:0 ", e.noteMarginPercent, "% 10px;padding:0 0 0 8px;line-height:1.33;}", p.U0.className, " &{line-height:1.53;}.intercom-tour-step-post &{margin:0 ", e.tourPostMarginPx, "px 10px;}", y.Ow.className, " &{&:only-child{margin-block-start:0px;padding:0 0 0 0px;}&:not(:only-child){padding-inline-start:20px;}}"),
                oe = (0, s.ZP)("ol", {
                    target: "e1bpfvzv0"
                })(te, " > li{list-style-type:decimal;}"),
                re = (0, s.ZP)("ul", {
                    target: "e1bpfvzv1"
                })(te);

            function ie(e) {
                const {
                    items: t,
                    type: o
                } = e.block, r = "unorderedList" === o, i = t.map(((e, t) => n.createElement(ee.Z, {
                    text: e,
                    key: t,
                    tagName: "li"
                })));
                return r ? n.createElement(re, null, i) : n.createElement(oe, null, i)
            }
            var ne = {
                name: "xi606m",
                styles: "text-align:center;"
            };
            const ae = (0, s.ZP)("div", {
                    target: "e1cfp3880"
                })((({
                    align: e
                }) => "center" === e && ne), " ", p.U0.className, " &,", m.kA.className, " &,", h.om.className, " &,", x.U$.className, " &{margin-bottom:17px;}", c.WG.className, " &,", y.Ow.className, " &{margin-bottom:9px;}", g.W.className, " &{margin-bottom:10px;}", u.c.className, " &,", d.y.className, " &{margin-bottom:10px;}"),
                se = (0, s.ZP)("a", {
                    target: "e1cfp3881"
                })(l.G, " ", p.U0.className, " &,", m.kA.className, " &,", h.om.className, " &,", c.WG.className, " &,", f.K2.className, " &,", x.U$.className, " &,", u.c.className, " &,", d.y.className, " &{display:inline-block;font-weight:bold;color:", (0, s.rS)("white"), ";background-color:", (0, s.rS)("appColor"), ";text-align:center;box-sizing:border-box;border-radius:4px;padding:8px 40px;font-size:14px;text-decoration:none;> span{font-weight:bold;}}", y.Ow.className, " &{display:inline-block;font-weight:bold;color:", (0, s.rS)("white"), ";", (({
                    fontColor: e
                }) => !!e && (0, s.iv)("color:", e, ";")), " ", (({
                    buttonColor: e
                }) => !!e && (0, s.iv)("background-color:", e, ";")), " text-align:center;box-sizing:border-box;border-radius:4px;padding:8px 40px;font-size:14px;text-decoration:none;> span{font-weight:bold;}}", p.U0.className, " &,", h.om.className, " &,.intercom-tour-step-post &{margin:0 ", (0, s.rS)("postMarginPercent"), "%;font-size:17px;line-height:", (0, s.rS)("postBodyLineHeight"), ";}", c.WG.className, " &,", f.K2.className, " &,.intercom-tour-step-pointer &{margin:0 ", (0, s.rS)("noteMarginPercent"), "%;line-height:", (0, s.rS)("noteBodyLineHeight"), ";}", g.W.className, " &,", b.b8.className, " &{color:", (0, s.rS)("appColor"), ";text-decoration:underline;font-size:14px;line-height:", (0, s.rS)("chatBodyLineHeight"), ";margin:0 ", (0, s.rS)("chatMarginPx"), "px 10px ", (0, s.rS)("chatMarginPx"), "px;&:hover{text-decoration:none;}}", u.c.className, " &{margin:0;line-height:", (0, s.rS)("postBodyLineHeight"), ";}", d.y.className, " &{margin:0;line-height:", (0, s.rS)("noteBodyLineHeight"), ";}");

            function le(e) {
                const {
                    align: t,
                    text: o,
                    linkUrl: r,
                    trackingLinkUrl: i,
                    style: a
                } = e.block;
                return a ? n.createElement(ae, {
                    className: "intercom-block-button-container",
                    align: t
                }, n.createElement(se, {
                    href: r,
                    "data-via": i,
                    className: "intercom-block-button",
                    buttonColor: (null == a ? void 0 : a.backgroundColor) || "",
                    fontColor: (null == a ? void 0 : a.fontColor) || ""
                }, n.createElement(ee.Z, {
                    text: o
                }))) : n.createElement(ae, {
                    className: "intercom-block-button-container",
                    align: t
                }, n.createElement(se, {
                    href: r,
                    "data-via": i,
                    className: "intercom-block-button"
                }, n.createElement(ee.Z, {
                    text: o
                })))
            }
            const ce = (0, s.ZP)("div", {
                target: "e1v8z9ra0"
            })(l.G, " iframe{max-height:20px;max-width:100%;}", c.WG.className, " &,", f.K2.className, " &{margin:0 ", (0, s.rS)("noteMarginPercent"), "% 9px;}.intercom-tour-step-pointer &{margin:0 ", (0, s.rS)("tourPostMarginPx"), "px 9px;}", p.U0.className, " &,", h.om.className, " &,.intercom-tour-step-post &{margin:0 ", (0, s.rS)("postMarginPercent"), "% 9px;}", g.W.className, " &,", b.b8.className, " &{margin:0 ", (0, s.rS)("chatMarginPx"), "px 10px;}", u.c.className, " &,", d.y.className, " &{margin:0 0 10px 0;}");

            function de(e) {
                return n.createElement(ce, null, n.createElement("iframe", {
                    allowTransparency: !0,
                    frameBorder: "0",
                    scrolling: "no",
                    src: (t = e.block.username, `https://platform.twitter.com/widgets/follow_button.html?show_count=false&screen_name=${t}`),
                    title: "Twitter",
                    role: "dialog"
                }));
                var t
            }
            const pe = (0, s.ZP)("div", {
                target: "e1x9pquw0"
            })(l.G, " iframe{max-height:20px;max-width:100%;}", c.WG.className, " &,", f.K2.className, " &,.intercom-tour-step-pointer &{margin:0 ", (0, s.rS)("noteMarginPercent"), "% 9px;}", p.U0.className, " &,", h.om.className, " &,.intercom-tour-step-post &{margin:0 ", (0, s.rS)("postMarginPercent"), "% 9px;}", g.W.className, " &,", b.b8.className, " &{margin:0 ", (0, s.rS)("chatMarginPx"), "px 10px;}", u.c.className, " &,", d.y.className, " &{margin:0 0 10px 0;}");

            function me(e) {
                return n.createElement(pe, null, n.createElement("iframe", {
                    src: (t = e.block.url, `https://www.facebook.com/plugins/like.php?href=${t}&layout=button_count&action=like&share=false&size=small`),
                    scrolling: "no",
                    frameBorder: "0",
                    allowTransparency: !0,
                    title: "Facebook",
                    role: "dialog"
                }));
                var t
            }
            const he = (0, s.ZP)("div", {
                    target: "epbg3dh0"
                })(l.G, " margin-top:10px;line-height:1;", f.K2.className, " &,", c.WG.className, " &,.intercom-tour-step-pointer &{margin:10px ", (0, s.rS)("noteMarginPercent"), "% 0;}.intercom-tour-step-post &,", p.U0.className, " &,", m.kA.className, " &,", h.om.className, " &{margin:10px ", (0, s.rS)("postMarginPercent"), "% 0;}", g.W.className, " &,", b.b8.className, "{margin:10px ", (0, s.rS)("chatMarginPx"), "px 0;}&:first-of-type{margin-top:0;}"),
                ue = (0, s.ZP)("a", {
                    target: "epbg3dh1"
                })(p.U0.className, " &,", m.kA.className, " &,", h.om.className, " &,", u.c.className, " &,", c.WG.className, " &,", d.y.className, " &,", f.K2.className, " &,", x.U$.className, " &,", g.W.className, " &,", b.b8.className, " &,.intercom-comment &{display:flex;align-items:center;height:22px;margin-top:10px;text-overflow:ellipsis;text-decoration:none;white-space:nowrap;overflow:hidden;&:first-of-type{margin-top:0;}}.intercom-comment-single &{position:relative;display:flex;box-sizing:border-box;background-position:15px;background-color:white;}.intercom-comment-single &{border:1px solid ", (0, s.rS)("attachmentListBorder"), ";border-radius:", (0, s.rS)("notificationBorderRadiusPx"), "px;color:", (0, s.rS)("bodyText"), ";}.intercom-borderless .intercom-comment-single &{box-shadow:", (0, s.rS)("notificationBoxShadow"), ";}"),
                ge = (0, s.ZP)("div", {
                    target: "epbg3dh2"
                })({
                    name: "b4nuh2",
                    styles: "line-height:1.5;white-space:nowrap;overflow:hidden;text-decoration:underline;font-size:14px;"
                }),
                be = (0, s.ZP)("div", {
                    target: "epbg3dh3"
                })({
                    name: "1wy62rt",
                    styles: "flex:0 0 16px;margin-right:4px;svg{width:16px;height:18px;}"
                }),
                fe = (0, s.ZP)("div", {
                    target: "epbg3dh4"
                })("top:0;right:0;bottom:0;background-color:", (0, s.rS)("attachmentListBorder"), ";opacity:0;transition:width 1s linear;.intercom-comment-single &{position:absolute;opacity:0.5;}");
            var xe = o(42140);
            const ve = e => {
                const {
                    progress: t
                } = e;
                return {
                    width: `${100-Math.max(Math.min(t,100),0)}%`
                }
            };

            function ye(e) {
                const {
                    attachments: t,
                    progress: o
                } = e.block;
                return n.createElement(he, {
                    className: "intercom-block-attachment-list"
                }, t.map((({
                    url: t,
                    name: r
                }, i) => {
                    return n.createElement(ue, {
                        key: i,
                        href: t,
                        target: "_blank"
                    }, n.createElement(be, {
                        className: "intercom-block-attachment-list-icon"
                    }, n.createElement(xe.Z, null)), n.createElement(ge, null, (a = r).length < 20 ? a : `${a.slice(0,10)}...${a.slice(a.length-10,a.length)}`), o < 100 ? n.createElement(fe, {
                        style: ve(e.block)
                    }) : null);
                    var a
                })))
            }
            const we = (0, s.ZP)("pre", {
                target: "e1ww0sf80"
            })(l.G, " margin:0 0 10px;padding:10px;background-color:", (0, s.rS)("codeBlockBackground"), ";overflow:auto;> code{font-family:", (0, s.rS)("fontMono"), ";font-size:14px;line-height:", (0, s.rS)("chatBodyLineHeight"), ";white-space:pre;}", p.U0.className, " &,", h.om.className, " &{margin:0 ", (0, s.rS)("postMarginPercent"), "% 15px;}");

            function ke(e) {
                const {
                    text: t
                } = e.block;
                return n.createElement(we, {
                    className: "intercom-block-code"
                }, n.createElement(ee.Z, {
                    text: t,
                    tagName: "code",
                    replaceAsciiEmoji: !1
                }))
            }
            var Ce = o(35697),
                Se = o(11353);
            class VideoFileBlock extends n.Component {
                constructor(...e) {
                    super(...e), this.addVideoAutoMessageMetric = (e, t) => {
                        (0, Se.WM)(e, "video_auto_message", "in_app", "from_full", t)
                    }, this.handlePlayFromStart = () => {
                        this.addVideoAutoMessageMetric("started")
                    }, this.handleComplete = () => {
                        this.addVideoAutoMessageMetric("completed")
                    }, this.handleMuteChange = e => {
                        e && this.addVideoAutoMessageMetric("muted")
                    }, this.handleReplay = () => {
                        this.addVideoAutoMessageMetric("replay")
                    }, this.handleError = () => {
                        this.addVideoAutoMessageMetric("failed")
                    }, this.handleVideoLoaded = e => {
                        this.addVideoAutoMessageMetric("loaded", {
                            load_time: e
                        })
                    }
                }
                render() {
                    const {
                        block: {
                            url: e,
                            captions: t,
                            thumbnailUrl: o
                        },
                        autoPlay: r
                    } = this.props;
                    return n.createElement(Ce.N, {
                        isVideoFileBlock: !0,
                        srcUrl: e,
                        autoPlay: r,
                        onPlayFromStart: this.handlePlayFromStart,
                        onComplete: this.handleComplete,
                        onMuteChange: this.handleMuteChange,
                        onReplay: this.handleReplay,
                        onError: this.handleError,
                        onVideoLoaded: this.handleVideoLoaded,
                        captions: t,
                        thumbnailUrl: o,
                        className: "intercom-block-video"
                    })
                }
            }
            VideoFileBlock.defaultProps = {
                autoPlay: !0
            };
            const Pe = (0, a.$j)((e => ({
                appName: e.app.name
            })))(VideoFileBlock);
            var Ee = o(79739),
                Ne = o(43745),
                Be = o(38401);
            class MessengerCardBlock extends n.Component {
                render() {
                    const {
                        block: e,
                        isLastPart: t,
                        frameWindow: o
                    } = this.props, {
                        onPartsHeightChange: r
                    } = this.context || {};
                    return n.createElement(Be.P, {
                        className: "intercom-block-messenger-card"
                    }, n.createElement(Ee.ZP, {
                        isInline: !0,
                        cardUri: e.uri,
                        isLastPart: t,
                        frameWindow: o,
                        onHeightChange: r
                    }))
                }
            }
            MessengerCardBlock.contextType = Ne.Z;
            var Oe = o(59685),
                Ze = o(71691);
            var Te = o(15178),
                je = o(29258);

            function ze({
                block: e
            }) {
                const {
                    title: t,
                    state: o,
                    ticket_type_id: r,
                    ticket_type_title: i,
                    ticket_type: s
                } = e, {
                    showCreateTicket: l
                } = function() {
                    const e = (0, Oe.useNavigate)();
                    return {
                        showCreateTicket: (t, o) => {
                            (0, Se.WM)("clicked", "create_ticket_form", "messenger", o, {
                                ticket_type_id: t
                            }), e((0, Ze.Fh)(t), {
                                state: {
                                    context: o
                                }
                            })
                        }
                    }
                }(), c = (0, a.v9)(Te.mA), d = "disabled" === o || (null == s ? void 0 : s.archived) || null != (null == c ? void 0 : c.ticketId);
                return n.createElement(je.Zb, {
                    noPadding: !0
                }, n.createElement(je.HC, {
                    rightIcon: "Ticket",
                    rightIconColor: "primaryColor",
                    note: i,
                    onClick: e => {
                        d || l(r, "conversation")
                    },
                    disabled: d
                }, n.createElement("strong", null, t)))
            }
            var Ie = o(34535);
            const Le = (0, s.ZP)("table", {
                    target: "eljwdcw0"
                })(l.G, " ", p.U0.className, " &{display:block;overflow-x:auto;margin:36px -20px 24px;a.intercom-h2b-button{padding:8px;}}", p.U0.className, " &{line-height:", (0, s.rS)("postBodyLineHeight"), ";margin:36px calc(", (0, s.rS)("postMarginPercent"), "% - 20px) 24px;}"),
                Me = (0, s.ZP)("tbody", {
                    target: "eljwdcw1"
                })("width:640px;display:inline-table;table-layout:fixed;border-collapse:separate;border-spacing:0;border:1px solid rgba(0,0,0,0.2);border-radius:6px;margin:0 20px 12px;vertical-align:top;", m.kA.className, " &{margin:0;width:100%;}");
            var Ae = {
                name: "1x5r0dg",
                styles: "margin-bottom:0;min-height:1.53em;"
            };
            const Fe = (0, s.ZP)("td", {
                    target: "eljwdcw2"
                })("padding:8px;border-left:1px solid rgba(0,0,0,0.2);border-top:1px solid rgba(0,0,0,0.2);&:first-child{border-left:none;}", (({
                    noMargin: e
                }) => e && Ae), " ", Ie.f.className, "{padding:0px;}", G.S.className, "{margin:0px;}"),
                De = ((0, s.ZP)("th", {
                    target: "eljwdcw3"
                })({
                    name: "1yebh8d",
                    styles: "padding:8px;border-left:1px solid rgba(0,0,0,0.2);border-top:1px solid rgba(0,0,0,0.2);&:first-child{border-left:none;}"
                }), (0, s.ZP)("tr", {
                    target: "eljwdcw4"
                })({
                    name: "bjnulg",
                    styles: "&:first-child{> td{border-top:none;}}"
                }));

            function _e(e) {
                const {
                    block: {
                        rows: t
                    },
                    Blocks: o
                } = e;
                return n.createElement(Le, null, n.createElement(Me, null, t.map((e => n.createElement(De, null, e.cells.map((e => n.createElement(Fe, {
                    noMargin: e.class && -1 !== e.class.indexOf("no-margin")
                }, n.createElement(o, {
                    blocks: e.content
                })))))))))
            }
            var We = o(99421),
                Ge = o(50254),
                Ue = o(16315);

            function Re() {
                return Re = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, Re.apply(this, arguments)
            }
            class Blocks extends n.Component {
                handleClick(e) {
                    const t = He(e.target, "href"),
                        o = null == t ? void 0 : t.getAttribute("href"),
                        r = null == t ? void 0 : t.getAttribute("data-link-id");
                    if (t && (null == t ? void 0 : t.getAttribute("data-link-type")) === Ge.f && r) e.preventDefault(), this.props.openInlineArticleLink(r);
                    else if (!t || !(0, We.nG)(t)) return void(this.props.onLinkClick && o && !(0, Ue.Uq)() && (this.props.onLinkClick(o), e.preventDefault()));
                    e.preventDefault()
                }
                renderBlock(e, t, o = !1) {
                    const {
                        zoomable: r,
                        maxImageWidth: i,
                        onImageClick: a,
                        author: s,
                        autoPlay: l,
                        isLastPart: c,
                        pointerSize: d,
                        frameWindow: p
                    } = this.props, m = {
                        key: t,
                        block: e,
                        isLastPart: c,
                        pointerSize: d,
                        isLastBlock: o
                    };
                    switch (e.type) {
                        case "image":
                            return Object.assign(m, {
                                onImageClick: a,
                                zoomable: r,
                                maxWidth: i
                            }), n.createElement(ImageBlock, Re({}, m, {
                                frameWindow: p
                            }));
                        case "video":
                            return n.createElement(q, m);
                        case "videoFile":
                            return Object.assign(m, {
                                autoPlay: l,
                                author: s
                            }), n.createElement(Pe, m);
                        case "videoReply":
                            return n.createElement(K, m);
                        case "paragraph":
                        default:
                            return n.createElement(U, m);
                        case "heading":
                            return n.createElement(X, m);
                        case "subheading":
                            return n.createElement(Q, m);
                        case "unorderedList":
                        case "orderedList":
                            return n.createElement(ie, m);
                        case "html":
                        case "rawContent":
                            return n.createElement(R, m);
                        case "button":
                            return n.createElement(le, m);
                        case "twitterFollowButton":
                            return n.createElement(de, m);
                        case "facebookLikeButton":
                            return n.createElement(me, m);
                        case "attachmentList":
                            return n.createElement(ye, m);
                        case "code":
                            return n.createElement(ke, m);
                        case "messengerCard":
                            return Object.assign(m, {
                                frameWindow: p
                            }), n.createElement(MessengerCardBlock, m);
                        case "createTicketCard":
                            return n.createElement(ze, m);
                        case "table":
                            return n.createElement(_e, Re({}, m, {
                                Blocks: Blocks
                            }));
                        case "horizontalRule":
                            return n.createElement("hr", null);
                        case "link":
                            return function(e) {
                                return "educate.article" === e.linkType || "resolution_bot.source" === e.linkType && "string" == typeof e.articleId
                            }(e) ? n.createElement(L, m) : n.createElement(U, m)
                    }
                }
                render() {
                    return n.createElement(Ie.f, {
                        onClick: this.handleClick.bind(this),
                        tabIndex: "-1"
                    }, this.props.blocks.map(((e, t) => this.renderBlock(e, t, t === this.props.blocks.length - 1))))
                }
            }
            const He = (e, t) => {
                for (; e;) {
                    if (void 0 !== e.getAttribute && null !== e.getAttribute(t)) return e;
                    e = e.parentNode
                }
                return null
            };
            Blocks.defaultTypes = {
                zoomable: !1
            }, Blocks.propTypes = {
                blocks: i().arrayOf(i().shape({
                    type: i().string.isRequired
                })).isRequired,
                zoomable: i().bool,
                frameWindow: i().object,
                maxImageWidth: i().number,
                onImageClick: i().func,
                author: i().object,
                autoPlay: i().bool,
                isLastPart: i().bool,
                pointerSize: i().number,
                onLinkClick: i().func,
                openInlineArticleLink: i().func
            };
            const Ve = (0, a.$j)(void 0, (e => ({
                openInlineArticleLink(t) {
                    e((0, z.Me)(t, {}, !1, !0))
                }
            })))(Blocks)
        },
        61274: (e, t, o) => {
            o.d(t, {
                Z: () => p
            });
            var r = o(67294),
                i = o(50700),
                n = {
                    name: "10o5hl1",
                    styles: "flex-direction:row;justify-content:center;"
                };
            const a = (0, i.ZP)("div", {
                    target: "eua6dim0"
                })("display:flex;flex-direction:column;justify-content:flex-start;align-items:center;align-content:center;padding-top:2px;font-size:13px;color:", (0, i.rS)("errorTextMuted"), ";svg{width:18px;height:18px;margin:5px;stroke:", (0, i.rS)("errorTextMuted"), ";}", (({
                    inline: e
                }) => e && n)),
                s = (0, i.ZP)("span", {
                    target: "eua6dim1"
                })({
                    name: "1qimanm",
                    styles: "text-decoration:underline;&:hover{cursor:pointer;}"
                });
            var l = o(94661),
                c = o(67592);
            const d = ({
                children: e,
                inline: t,
                onRetry: o
            }) => r.createElement(a, {
                inline: t,
                "data-testid": "error-message"
            }, r.createElement(l.Z, null), e, " ", r.createElement(s, {
                onClick: o
            }, (0, c.Iu)("try_again")));
            d.defaultProps = {
                inline: !1
            };
            const p = d
        },
        29286: (e, t, o) => {
            o.d(t, {
                H: () => d,
                Z: () => m
            });
            var r = o(67294),
                i = o(50700);
            const n = (0, i.ZP)("div", {
                    target: "e4w4mux0"
                })("color:black;font-weight:600;font-size:14px;line-height:150%;font-family:", (0, i.rS)("fontSansSerif"), ";", (({
                    noPadding: e
                }) => (0, i.iv)({
                    padding: e ? "16px 20px 0" : 0
                })), ";"),
                a = (0, i.ZP)("div", {
                    target: "e4w4mux1"
                })("position:relative;box-sizing:border-box;overflow:hidden;", (({
                    onClick: e,
                    theme: t
                }) => !!e && (0, i.iv)("*{cursor:pointer !important;}", n.className, "{transition:color 250ms;}&:hover ", n.className, "{color:", t.primaryColor, ";}")), " ", (({
                    noPadding: e,
                    bgColor: t,
                    noBorderRadius: o
                }) => (0, i.iv)({
                    padding: e ? 0 : "16px 20px",
                    background: t || "white",
                    borderRadius: o ? "0" : "10px"
                })), " ", (({
                    isEntireCardClickable: e,
                    theme: t
                }) => e && t.isPrimaryColorLight && (0, i.iv)("transition:box-shadow 150ms;&:hover{box-shadow:", t.homeCardLightModeHoverBoxShadow, ";}")), " ", (({
                    theme: e,
                    noBoxShadow: t
                }) => !t && (0, i.iv)({
                    boxShadow: e.homeCardBoxShadow
                }))),
                s = ["children", "noPadding", "displayAsCompact", "title", "bgColor", "isEntireCardClickable"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function c(e, t) {
                if (null == e) return {};
                var o, r, i = function(e, t) {
                    if (null == e) return {};
                    var o, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || (i[o] = e[o]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o])
                }
                return i
            }
            const d = r.createContext({
                insideCard: !1,
                fullBleed: !1
            });

            function p(e) {
                let {
                    children: t,
                    noPadding: o = !1,
                    displayAsCompact: i,
                    title: p = "",
                    bgColor: m = "",
                    isEntireCardClickable: h = !1
                } = e, u = c(e, s);
                return r.createElement(a, l({
                    noPadding: o,
                    bgColor: m,
                    noBorderRadius: i,
                    noBoxShadow: i,
                    isEntireCardClickable: h
                }, u), !!p && r.createElement(n, {
                    noPadding: o
                }, p), r.createElement(d.Provider, {
                    value: {
                        insideCard: !0,
                        fullBleed: !o
                    }
                }, t))
            }
            p.Title = n;
            const m = p
        },
        38669: (e, t, o) => {
            o.d(t, {
                J: () => i
            });
            var r = o(50700);
            const i = (0, r.ZP)("i", {
                target: "e1fransm0"
            })("display:inline-flex;align-items:center;svg{display:block;}", (({
                size: e
            }) => e && (0, r.iv)("width:auto;min-width:", e, "px;height:", e, "px;svg{width:auto;min-width:", e, "px;height:", e, "px;}")), " svg *{transition:fill 300ms,stroke 300ms;}", (({
                color: e,
                fillType: t,
                theme: o
            }) => e && "fill" === t && (0, r.iv)("svg{path{fill:", o[e], ";}circle{stroke:", o[e], ";}}")), " ", (({
                color: e,
                fillType: t,
                theme: o
            }) => e && "stroke" === t && (0, r.iv)("svg{path{stroke:", o[e], ";}circle{stroke:", o[e], ";}}")))
        },
        49109: (e, t, o) => {
            o.d(t, {
                Z: () => a
            });
            var r = o(67294),
                i = o(38669),
                n = o(32303);
            const a = function({
                type: e,
                size: t = 16,
                variant: o,
                color: a,
                fillType: s = "fill"
            }) {
                const l = n[e || "Alert"];
                return r.createElement(i.J, {
                    color: a,
                    size: t,
                    fillType: s
                }, r.createElement(l, {
                    color: a,
                    variant: o
                }))
            }
        },
        78072: (e, t, o) => {
            o.d(t, {
                Z: () => r.Z
            });
            var r = o(49109)
        },
        80997: (e, t, o) => {
            o.d(t, {
                Bu: () => s,
                M: () => l,
                Qu: () => p,
                Uq: () => d,
                Vk: () => m,
                Zy: () => c,
                aV: () => a,
                eS: () => u,
                xL: () => h
            });
            var r = o(50700),
                i = o(26754),
                n = {
                    name: "38tcsh",
                    styles: "margin-left:-20px;margin-right:-20px;&:first-child{margin-top:-16px;}&:last-child{margin-bottom:-16px;}&[data-last-child]:after{display:none;}"
                };
            const a = (0, r.ZP)("div", {
                    target: "e1hc4mno0"
                })("padding:", (0, r.NQ)("padding"), "px;", (({
                    divider: e,
                    theme: t
                }) => e && (0, r.iv)("&{position:relative;padding-bottom:8px;&:after{content:'';position:absolute;bottom:0;left:20px;right:20px;height:1px;background-color:", t.listItemDivider, ";}}")), " ", (({
                    fullBleed: e
                }) => e && n), ";"),
                s = (0, r.ZP)("header", {
                    target: "e1hc4mno1"
                })("padding:16px 20px;border-bottom:1px solid ", (0, r.rS)("listItemDivider"), ";"),
                l = (0, r.ZP)("h2", {
                    target: "e1hc4mno2"
                })("font-weight:600;line-height:24px;color:", (0, r.rS)("m5DarkGrey2"), ";"),
                c = (0, r.ZP)(i.v1, {
                    target: "e1hc4mno3"
                })("margin-top:4px;color:", (0, r.rS)("m5DarkGrey2"), ";"),
                d = (0, r.ZP)(i.v1, {
                    target: "e1hc4mno4"
                })("margin-top:12px;color:", (0, r.rS)("inputGrey"), ";"),
                p = (0, r.ZP)("header", {
                    target: "e1hc4mno5"
                })({
                    name: "1xijcyo",
                    styles: "margin-top:8px;padding:12px 20px;"
                }),
                m = (0, r.ZP)("h3", {
                    target: "e1hc4mno6"
                })("font-size:14px;font-weight:600;line-height:24px;color:", (0, r.rS)("m5DarkGrey2"), ";"),
                h = (0, r.ZP)("ul", {
                    target: "e1hc4mno7"
                })({
                    name: "o9b79t",
                    styles: "list-style:none;"
                }),
                u = (0, r.ZP)("div", {
                    target: "e1hc4mno8"
                })({
                    name: "1lekzkb",
                    styles: "display:flex;align-items:center;justify-content:space-between;"
                })
        },
        43173: (e, t, o) => {
            o.d(t, {
                ZM: () => c,
                ZP: () => d
            });
            var r = o(67294),
                i = o(80997),
                n = o(29286);
            const a = ["title", "sectionTitle", "description", "note", "headerContent", "padding", "noDivider", "children"];

            function s() {
                return s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, s.apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var o, r, i = function(e, t) {
                    if (null == e) return {};
                    var o, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || (i[o] = e[o]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o])
                }
                return i
            }
            i.M, i.Zy, i.Uq;
            const c = r.createContext({
                insideList: !1,
                noDivider: !1
            });
            const d = function(e) {
                let {
                    title: t,
                    sectionTitle: o,
                    description: d,
                    note: p,
                    headerContent: m,
                    padding: h = 0,
                    noDivider: u = !1,
                    children: g
                } = e, b = l(e, a);
                const {
                    insideList: f
                } = (0, r.useContext)(c), {
                    fullBleed: x
                } = (0, r.useContext)(n.H), v = m || t;
                return r.createElement(i.aV, s({
                    as: f ? "li" : "div",
                    padding: h,
                    divider: f,
                    fullBleed: x
                }, b), v && r.createElement(i.Bu, null, t ? r.createElement(r.Fragment, null, r.createElement(i.M, null, t), d && r.createElement(i.Zy, null, d), p && r.createElement(i.Uq, null, p)) : m), o && r.createElement(i.Qu, null, r.createElement(i.Vk, null, o)), r.createElement(i.xL, null, r.createElement(c.Provider, {
                    value: {
                        insideList: !0,
                        noDivider: u
                    }
                }, r.Children.map(g, (e => r.createElement("li", null, e))))))
            }
        },
        74242: (e, t, o) => {
            o.d(t, {
                Ey: () => u,
                HC: () => m,
                O6: () => b,
                VY: () => l,
                dv: () => h,
                jC: () => g
            });
            var r = o(50700),
                i = o(54874),
                n = o(26754);
            const a = e => {
                switch (e) {
                    case "tiny":
                        return "12px";
                    case "small":
                        return "16px";
                    default:
                        return "20px"
                }
            };
            var s = {
                name: "1h2ruwl",
                styles: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
            };
            const l = (0, r.ZP)("div", {
                target: "e13m0kgk0"
            })("margin-right:auto;flex:1;font-size:14px;line-height:21px;min-width:0;", (({
                truncate: e
            }) => e && s));
            var c = {
                    name: "rl6otz",
                    styles: "border-radius:8px;"
                },
                d = {
                    name: "1kmu98f",
                    styles: "margin-left:-20px;margin-right:-20px;&:first-child{margin-top:-16px;}&:last-child{margin-bottom:-16px;}"
                },
                p = {
                    name: "b0vb0t",
                    styles: "li:last-of-type &:after{display:none;}"
                };
            const m = (0, r.ZP)("div", {
                    target: "e13m0kgk1"
                })("display:flex;justify-content:space-between;box-sizing:border-box;", (({
                    size: e,
                    align: t
                }) => (0, r.iv)("padding:", (e => {
                    switch (e) {
                        case "tiny":
                            return "8px";
                        case "small":
                            return "10px";
                        case "medium":
                            return "12px";
                        default:
                            return "16px"
                    }
                })(e), " ", a(e), ";align-items:", t || "center", ";")), " ", (({
                    hoverBackground: e,
                    theme: t
                }) => e && (0, r.iv)("transition:color 250ms,background-color 250ms;&:hover{background:", t.isPrimaryColorLight ? t.m5lightGrey8 : (0, i.Bw)(t.primaryColor, .1), ";", b.className, " path{fill:", t.linkColor, ";}}")), ";", (({
                    divider: e,
                    size: t,
                    theme: o
                }) => e && (0, r.iv)("&{position:relative;}&:after{content:'';position:absolute;height:1px;bottom:0;left:", a(t), ";right:", a(t), ";background-color:", o.listItemDivider, ";}")), ";}", (({
                    removeLastDivider: e
                }) => e && p), ";", (({
                    fullBleed: e
                }) => e && d), ";}", (({
                    rounded: e
                }) => e && c), ";opacity:", (({
                    disabled: e
                }) => e ? "0.3" : "1"), ";cursor:", (({
                    disabled: e,
                    onClick: t
                }) => e ? "not-allowed" : t ? "pointer" : "default"), ";background-color:", (({
                    bgColor: e
                }) => e ? `${e}` : ""), ";&:hover ", l.className, "{color:", (({
                    theme: e,
                    onClick: t,
                    disabled: o
                }) => (0, r.iv)(o ? "black" : t ? `${e.linkColor}` : "black")), ";cursor:", (({
                    disabled: e,
                    onClick: t
                }) => (0, r.iv)(e ? "not-allowed" : t ? "pointer" : "default")), ";}"),
                h = (0, r.ZP)("div", {
                    target: "e13m0kgk2"
                })("margin-right:", "8px", ";align-self:center;"),
                u = (0, r.ZP)("div", {
                    target: "e13m0kgk3"
                })(),
                g = (0, r.ZP)(n.v1, {
                    target: "e13m0kgk4"
                })("display:flex;align-items:center;color:", (({
                    theme: e
                }) => e.m5DarkGrey2), ";white-space:break-spaces;"),
                b = (0, r.ZP)("div", {
                    target: "e13m0kgk5"
                })("margin-left:", "8px", ";align-self:center;")
        },
        20833: (e, t, o) => {
            o.d(t, {
                Z: () => p
            });
            var r = o(67294),
                i = o(78072),
                n = o(74242),
                a = o(43173),
                s = o(29286);
            const l = ["children", "left", "leftIcon", "right", "rightIcon", "rightIconColor", "note", "onClick", "size", "hoverBackground", "rounded", "align", "disabled", "bgColor", "truncate"];

            function c() {
                return c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function d(e, t) {
                if (null == e) return {};
                var o, r, i = function(e, t) {
                    if (null == e) return {};
                    var o, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || (i[o] = e[o]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o])
                }
                return i
            }
            const p = function(e) {
                let {
                    children: t,
                    left: o,
                    leftIcon: p,
                    right: m,
                    rightIcon: h,
                    rightIconColor: u,
                    note: g,
                    onClick: b,
                    size: f = "default",
                    hoverBackground: x = !1,
                    rounded: v = !1,
                    align: y = "center",
                    disabled: w = !1,
                    bgColor: k,
                    truncate: C
                } = e, S = d(e, l);
                const {
                    insideList: P,
                    noDivider: E
                } = (0, r.useContext)(a.ZM), {
                    insideCard: N,
                    fullBleed: B
                } = (0, r.useContext)(s.H), O = ((e, t) => t ? r.createElement(n.Ey, null, r.createElement(i.Z, {
                    type: t,
                    size: 16,
                    color: "linkColor"
                })) : e)(o, p), Z = ((e, t, o) => t ? r.createElement(i.Z, {
                    type: t,
                    size: 16,
                    color: o
                }) : e)(m, h, u);
                return r.createElement(n.HC, c({
                    size: f,
                    hoverBackground: x,
                    rounded: v,
                    disabled: w,
                    bgColor: k,
                    divider: P && !E,
                    removeLastDivider: N,
                    fullBleed: !P && B,
                    align: y,
                    onClick: b
                }, S), O && r.createElement(n.dv, null, O), r.createElement(n.VY, {
                    truncate: C
                }, t, g && r.createElement(n.jC, null, g)), Z && r.createElement(n.O6, null, Z))
            }
        },
        75045: (e, t, o) => {
            o.d(t, {
                Z: () => c
            });
            var r = o(81763),
                i = o.n(r),
                n = o(67294),
                a = o(50700);
            const s = (0, a.ZP)("span", {
                    target: "e1lwd7c40"
                })("background:", (0, a.rS)("badgeRed"), ";display:flex;justify-content:center;font-size:11px;color:", (0, a.rS)("white"), ";font-weight:700;border-radius:9px;width:fit-content;min-width:16px;height:16px;box-sizing:border-box;line-height:16px;padding:0 4px;"),
                l = (0, a.ZP)("span", {
                    target: "e1lwd7c41"
                })("background:", (0, a.rS)("badgeRed"), ";display:block;width:8px;height:8px;border-radius:50%;");
            const c = function({
                children: e
            }) {
                if (e) {
                    const t = i()(e) && e > 99 ? "99+" : e;
                    return n.createElement(s, {
                        "data-testid": "active-notifications"
                    }, t)
                }
                return n.createElement(l, {
                    "data-testid": "passive-notifications"
                })
            }
        },
        29258: (e, t, o) => {
            o.d(t, {
                Cc: () => a.Z,
                HC: () => n.Z,
                JO: () => i.Z,
                Y: () => s.Z,
                Zb: () => r.Z
            });
            var r = o(29286),
                i = o(78072),
                n = (o(43173), o(20833)),
                a = o(75045),
                s = o(48258)
        },
        48258: (e, t, o) => {
            o.d(t, {
                Z: () => s
            });
            var r = o(67294),
                i = o(59339),
                n = o(37424),
                a = o(50025);

            function s(e, t) {
                return o => {
                    const s = (0, r.useContext)(i.Ni),
                        l = !(null == s || !s.m5Enabled),
                        c = (0, n.v9)(a.c0),
                        d = l || c ? t : e;
                    return r.createElement(d, o, null != o && o.children ? o.children : null)
                }
            }
        },
        26754: (e, t, o) => {
            o.d(t, {
                v1: () => i
            });
            var r = o(50700);
            const i = (0, r.ZP)("p", {
                target: "ez77lgf0"
            })({
                name: "4abmbm",
                styles: "font-size:14px;line-height:21px;"
            });
            (0, r.ZP)("p", {
                target: "ez77lgf1"
            })({
                name: "1os3lpb",
                styles: "font-size:16px;line-height:24px;"
            }), (0, r.ZP)("p", {
                target: "ez77lgf2"
            })({
                name: "o38y23",
                styles: "font-size:13px;line-height:18px;"
            })
        },
        9021: (e, t, o) => {
            o.d(t, {
                Z: () => s,
                p: () => l
            });
            var r = o(67294),
                i = o(94676),
                n = o(50700),
                a = o(85332);

            function s(e) {
                const {
                    onChange: t,
                    onHeightChange: o,
                    children: n,
                    className: s,
                    disable: c = !1,
                    style: d
                } = e, [p, m] = (0, r.useState)({
                    width: -1,
                    height: -1,
                    top: -1
                }), [h, u] = (0, a.Z)();
                return (0, r.useLayoutEffect)((() => {
                    if (c) return;
                    const {
                        width: e,
                        height: r,
                        top: i
                    } = h;
                    p.width === e && p.height === r && p.top === i || (r !== p.height && o && o(r), m({
                        width: e,
                        height: r,
                        top: i
                    }), t && t({
                        width: e,
                        height: r,
                        top: i
                    }))
                }), [h, c, p, t, o]), r.createElement(l, {
                    className: s,
                    ref: e => {
                        if (!e) return;
                        e.children.length > 1 && (0, i.Df)("The Measure component only accepts a single child");
                        const t = e.children[0];
                        !t || t instanceof Text || (u.current = t)
                    },
                    style: d
                }, n)
            }
            const l = (0, n.ZP)("div", {
                target: "edyhj2e0"
            })({
                name: "ewx31z",
                styles: "min-height:fit-content;"
            })
        },
        43745: (e, t, o) => {
            o.d(t, {
                Z: () => n,
                q: () => i
            });
            var r = o(67294);
            const i = {
                    focusComposer: () => null,
                    emptyComposer: () => null,
                    onPartsHeightChange: () => null,
                    subscribe(e, t) {
                        i[e] = t
                    }
                },
                n = r.createContext(i)
        },
        68283: (e, t, o) => {
            o.d(t, {
                C: () => p,
                Z: () => T
            });
            var r = o(67294),
                i = o(73935),
                n = o(81811),
                a = o(66318),
                s = o(50700),
                l = o(78717),
                c = o(39113);
            const d = (0, s.ZP)(l.ZP, {
                    target: "e1ctqele0"
                })("width:100%;height:100%;top:0;left:0;position:fixed;", (({
                    theme: e,
                    isBelowMessenger: t
                }) => {
                    const o = t ? -1 : 3;
                    return (0, s.iv)("z-index:", (0, c.W5)(o, e), ";")
                })),
                p = 200;
            class ModalFrame extends r.Component {
                renderCSSTransition(e) {
                    return this.props.children ? r.createElement(n.Kv, {
                        classNames: "intercom-modal",
                        timeout: {
                            enter: 0,
                            exit: p
                        }
                    }, r.createElement(r.Fragment, null, this.props.children(e))) : null
                }
                render() {
                    return r.createElement(d, {
                        frameName: "intercom-modal-frame",
                        isBelowMessenger: this.props.isBelowMessenger,
                        title: this.props.frameTitle
                    }, (e => r.createElement("span", null, r.createElement(n.W3, {
                        appear: !0
                    }, this.renderCSSTransition(e)), r.createElement(a.ZP, {
                        appWindow: e
                    }))))
                }
            }
            var m = o(37424),
                h = o(9688),
                u = o(65547),
                g = o(67592);
            const b = o.p + "images/close-button.2889c036.png",
                f = o.p + "images/close-button@2x.0b71c094.png";
            var x = {
                name: "10i0qbj",
                styles: "position:fixed;top:0;right:0;bottom:0;left:0;"
            };
            const v = (0, s.ZP)("div", {
                    target: "e15iq1yu0"
                })("z-index:", (0, c.W5)(3), ";", (({
                    fixed: e
                }) => e && x)),
                y = (0, s.ZP)("div", {
                    target: "e15iq1yu1"
                })({
                    name: "140ok15",
                    styles: "position:relative;width:100%;height:100%;outline-offset:-5px;"
                }),
                w = (0, s.ZP)("div", {
                    target: "e15iq1yu2"
                })("position:absolute;top:0;right:0;bottom:0;left:0;background-color:", (0, s.rS)("overlayColor"), ";opacity:0;outline-offset:-5px;.intercom-modal-enter-active &,.intercom-modal-enter-done &{opacity:1;transition:opacity 200ms;}.intercom-modal-exit &{opacity:1;}.intercom-modal-exit.intercom-modal-exit-active &{opacity:0;transition:opacity 200ms;}", (({
                    top: e
                }) => e && (0, s.iv)("z-index:", (0, c.W5)(3), ";")), " .intercom-post{opacity:0;transform:translateY(20px);}"),
                k = (0, s.ZP)("div", {
                    target: "e15iq1yu3"
                })("width:19px;height:19px;position:absolute;top:30px;right:40px;", (0, c.Ko)(b, f, "19px", "19px"), ";&:hover{cursor:pointer;}.intercom-modal-exit.intercom-modal-exit-active &{opacity:0;transition:opacity 200ms;}");
            class ModalContent extends r.Component {
                constructor(...e) {
                    super(...e), this.node = null, this.scrollArea = null, this.focusTrap = null, this.handleEscape = e => {
                        (0, h.$o)(e) && this.handleClose()
                    }, this.handleClose = e => {
                        e && e.preventDefault && e.preventDefault(), e && e.stopPropagation && e.stopPropagation();
                        const {
                            onClose: t,
                            returnFocus: o
                        } = this.props;
                        t && t(), o && setTimeout((() => o()), 300)
                    }
                }
                componentDidMount() {
                    const {
                        modalFrameWindow: e,
                        tabNavigation: t
                    } = this.props;
                    e && (this.focusTrap = new u.Z({
                        document: e.document,
                        windowToTrapFocusWithin: e
                    }), this.scrollArea = e.document.querySelector(".intercom-scrollable"), (0, h.Oo)(e, "keydown", this.handleEscape)), this.scrollArea ? this.scrollArea.focus() : this.node && this.node.focus(), t && (0, h.cn)(window.parent.document.documentElement, "intercom-modal-open")
                }
                componentWillUnmount() {
                    const {
                        modalFrameWindow: e
                    } = this.props;
                    e && (0, h.xg)(e, "keydown", this.handleEscape), this.focusTrap && this.focusTrap.restore(), (0, h.IV)(window.parent.document.documentElement, "intercom-modal-open")
                }
                render() {
                    const {
                        additionalStyle: e,
                        showCloseOverlay: t,
                        children: o,
                        hasTabIndex0: i
                    } = this.props;
                    return r.createElement(v, {
                        className: "intercom-modal",
                        fixed: !e,
                        style: e || {}
                    }, r.createElement(y, {
                        tabIndex: i ? "0" : "none",
                        ref: e => this.node = e
                    }, r.createElement(w, {
                        top: !!e,
                        onClick: this.handleClose,
                        tabIndex: "-1",
                        "aria-hidden": !0
                    }), t ? r.createElement(k, {
                        onClick: this.handleClose,
                        "aria-label": (0, g.Iu)("close")
                    }) : null, o))
                }
            }
            ModalContent.defaultProps = {
                showCloseOverlay: !0,
                hasTabIndex0: !0
            };
            const C = (0, m.$j)((e => ({
                tabNavigation: e.accessibility.tabNavigation
            })))(ModalContent);
            var S = o(97681);
            const P = ["children", "isBelowMessenger", "closeCallback", "returnFocus", "allowModalContentClose", "frameTitle", "hasTabIndex0"];

            function E() {
                return E = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, E.apply(this, arguments)
            }

            function N(e, t) {
                if (null == e) return {};
                var o, r, i = function(e, t) {
                    if (null == e) return {};
                    var o, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || (i[o] = e[o]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o])
                }
                return i
            }
            const B = "#intercom-modal-container",
                O = "#intercom-css-container";
            let Z;
            const T = e => {
                const [t, o] = r.useState(!0), {
                    children: n,
                    isBelowMessenger: a,
                    closeCallback: s,
                    returnFocus: l,
                    allowModalContentClose: c = !0,
                    frameTitle: d,
                    hasTabIndex0: m
                } = e, h = N(e, P), u = (e, {
                    shouldReturnFocus: t
                } = {
                    shouldReturnFocus: !0
                }) => {
                    e && e.stopPropagation && e.stopPropagation(), o(!1), Z = setTimeout((() => {
                        o(!0), s && s(e), l && t && l()
                    }), p)
                };
                r.useEffect((() => () => clearTimeout(Z)), []);
                const g = parent.document.querySelector(B) || document.querySelector(B),
                    b = parent.document.querySelector(O) || document.querySelector(O);
                return (0, i.createPortal)(r.createElement(S.Z, {
                    target: b,
                    isSandbox: !1
                }, r.createElement(ModalFrame, {
                    isBelowMessenger: a,
                    frameTitle: d
                }, t ? e => r.createElement(C, E({}, h, {
                    returnFocus: l,
                    onClose: c ? u : void 0,
                    modalFrameWindow: e,
                    hasTabIndex0: m
                }), n({
                    onClose: u
                })) : null)), g)
            }
        },
        600: (e, t, o) => {
            o.d(t, {
                Z: () => i
            });
            var r = o(67294);
            const i = ({
                window: e,
                children: t
            }) => e.__INTERCOM_DISABLE_STRICT_MODE__ ? r.createElement(r.Fragment, null, t) : r.createElement(r.StrictMode, null, t)
        },
        14877: (e, t, o) => {
            o.d(t, {
                Z: () => Text
            });
            var r = o(67294),
                i = o(29380),
                n = o(86364),
                a = o.n(n),
                s = o(49951),
                l = o.n(s);

            function c(e) {
                const t = `#1 { ${e} }`,
                    o = {};
                return d(l()(t).stylesheet.rules, o), o[1]
            }

            function d(e, t) {
                e.forEach((function(e) {
                    const o = {};
                    let r;
                    if ("media" === e.type) {
                        r = m(e.media);
                        const o = t[r] = t[r] || {
                            __expression__: e.media
                        };
                        d(e.rules, o)
                    } else "rule" === e.type && (e.declarations.forEach((function(e) {
                        if ("declaration" === e.type) {
                            const t = p(e.property);
                            o[t] = e.value
                        }
                    })), e.selectors.forEach((function(e) {
                        r = function(e) {
                            return e = e.replace(/\s\s+/g, " "), e = e.replace(/[^a-zA-Z0-9]/g, "_"), e = e.replace(/^_+/g, ""), e = e.replace(/_+$/g, ""), e
                        }(e.trim()), t[r] = o
                    })))
                }))
            }
            const p = e => e.replace(/(-.)/g, (e => e[1].toUpperCase())),
                m = e => `@media ${e}`;
            var h = o(94676);

            function u(e) {
                if (!e) return null;
                try {
                    return g(a()(e).instructions, [], {
                        keyIndex: 0
                    })
                } catch (t) {
                    return (0, h.Df)(`Error building dom element ${e}`), null
                }
            }

            function g(e = [], t = [], o) {
                const i = e.shift();
                if (!i) return t;
                if ("openElement" === i.opcode) {
                    const n = i.params,
                        a = b(e, n, {
                            key: o.keyIndex++
                        });
                    let s = g(e, [], o);
                    s.length || (s = null);
                    const l = r.createElement(n, a, s);
                    return t.push(l), g(e, t, o)
                }
                return "appendText" === i.opcode ? (t.push(i.params), g(e, t, o)) : t
            }

            function b(e, t, o = {}) {
                if ("attribute" !== e[0].opcode) return o;
                const r = e.shift(),
                    i = function(e) {
                        if ("class" === e) return "className";
                        if ("for" === e) return "htmlFor";
                        return e || ""
                    }(null == r ? void 0 : r.params[0]),
                    n = function(e, t = "") {
                        if ("style" === e) return c(t);
                        return t
                    }(i, null == r ? void 0 : r.params[1]);
                return o[i] ? o[i] = `${o[i]} ${n}` : o[i] = n, b(e, t, o)
            }
            var f = o(50700),
                x = o(39113);
            const v = o.p + "images/emoji-spritemap-16.bc57cbae.png",
                y = o.p + "images/emoji-spritemap-32.2c308598.png";
            var w = o(54811);
            const k = (0, f.iv)(".intercom-emoji-sub-icon{", (0, x.Ko)(v, y, "576px", "576px"), " position:relative;top:2px;margin:1px;}", w._.className, " & .intercom-emoji-sub-icon{", (0, x.Ko)(y, y, "1152px", "1152px"), "}");
            var C = o(83605);
            class Text extends r.Component {
                useNativeEmoji() {
                    const {
                        emojiSupport: e
                    } = this.props;
                    return "native" === e || "image" !== e && (0, i.Mo)()
                }
                render() {
                    const {
                        tagName: e,
                        className: t,
                        emojiImageSize: o,
                        replaceAsciiEmoji: r,
                        children: n
                    } = this.props;
                    let {
                        text: a = ""
                    } = this.props;
                    a = (0, i.py)(n || a, o, "intercom-emoji-sub-icon", this.useNativeEmoji(), r);
                    const s = u(a);
                    return (0, C.jsx)(e, {
                        className: t,
                        css: k
                    }, s)
                }
            }
            Text.defaultProps = {
                emojiSupport: "auto",
                emojiImageSize: 16,
                replaceAsciiEmoji: !0,
                tagName: "span"
            }
        },
        59339: (e, t, o) => {
            o.d(t, {
                Ni: () => a,
                ZP: () => l
            });
            var r = o(67294),
                i = o(22977),
                n = o.n(i);
            const a = r.createContext(null),
                s = e => {
                    const {
                        platform: t = "web"
                    } = e, o = "ios" === t || "android" === t ? "contrast-ratio-4.5" : "luminance", [i, s] = r.useState(n()({
                        primaryColor: e.primaryColor,
                        secondaryColor: e.secondaryColor,
                        darkenAmount: 20,
                        pureBlackActionColors: e.m5Enabled,
                        contrastCheckMethod: o
                    }));
                    r.useEffect((() => {
                        s(n()({
                            primaryColor: e.primaryColor,
                            secondaryColor: e.secondaryColor,
                            darkenAmount: 20,
                            pureBlackActionColors: e.m5Enabled,
                            contrastCheckMethod: o
                        }))
                    }), [e.primaryColor, e.secondaryColor, e.m5Enabled, o]);
                    const l = {
                        isPrimaryColorLight: "light" === i.primary_type,
                        isSecondaryColorLight: "light" === i.secondary_type,
                        isPrimaryColorReadable: i.primary_on_white_contrast > 1.2,
                        primaryColor: e.primaryColor,
                        secondaryColor: e.secondaryColor,
                        alignment: e.alignment,
                        horizontalPadding: e.horizontalPadding,
                        verticalPadding: e.verticalPadding,
                        gradientStartColor: i.gradient_start_color,
                        gradientEndColor: i.gradient_end_color,
                        cardBorderTopColor: i.card_border_top_color,
                        avatarBackgroundColor: i.avatar_background_color,
                        buttonBackgroundColor: i.button_background_color,
                        buttonBackgroundColorHover: i.button_background_color_hover,
                        buttonBackgroundColorActive: i.button_background_color_active,
                        primaryOnWhiteContrast: i.primary_on_white_contrast,
                        secondaryOnWhiteContrast: i.secondary_on_white_contrast,
                        headerTitleColor: i.header_title_color,
                        headerTextColor: i.header_text_color,
                        buttonTextColor: i.button_text_color,
                        linkColor: i.link_color,
                        linkColorHover: i.link_color_hover,
                        linkColorActive: i.link_color_active,
                        primaryType: i.primary_type,
                        secondaryType: i.secondary_type,
                        quickReplyTextColor: i.quick_reply_text_color,
                        quickReplyBackgroundColor: i.quick_reply_background_color,
                        m5Enabled: e.m5Enabled,
                        platform: t,
                        greetingTextColor: i.greeting_text_color,
                        introductionTextColor: i.introduction_text_color,
                        launcherIconColor: i.launcher_icon_color
                    };
                    return r.createElement(a.Provider, {
                        value: l
                    }, e.children)
                };
            s.defaultProps = {
                primaryColor: "#0074b0",
                secondaryColor: "#0074b0"
            };
            const l = s
        },
        95764: (e, t, o) => {
            o.d(t, {
                Z: () => a
            });
            var r = o(67294),
                i = o(34335);
            const n = 100;

            function a(e) {
                const t = r.useRef(null),
                    {
                        children: o,
                        duration: a,
                        appearDelay: s,
                        disableInitialAnimation: l
                    } = e,
                    c = (0, i.D)(o),
                    [d, p] = r.useState(!1),
                    [m, h] = r.useState(null),
                    [u, g] = r.useState(l),
                    b = a + n,
                    f = s + a + n;
                r.useLayoutEffect((() => {
                    (null == o ? void 0 : o.key) === (null == c ? void 0 : c.key) || m || (t.current && clearTimeout(t.current), null != c && c.key ? (h(c), p(0 === s), setTimeout((() => h(null)), b), t.current = setTimeout((() => p(!0)), f)) : p(!0))
                }), [o, c, m, s, b, f]), r.useEffect((() => {
                    setTimeout((() => g(!1)), b + f)
                }), [b, f]);
                const x = {
                    transition: `opacity ${a}ms ease-in-out`,
                    opacity: u ? 1 : m ? 0 : d ? 1 : 0
                };
                return r.createElement("div", {
                    style: x
                }, m || o)
            }
            a.defaultProps = {
                duration: 200,
                appearDelay: 0,
                disableInitialAnimation: !1
            }
        },
        13818: (e, t, o) => {
            o.d(t, {
                Z: () => VideoPlayerAutosized
            });
            var r = o(67294),
                i = o(98295),
                n = o(9021),
                a = o(79131);
            const s = ["className", "isVideoFileBlock"];

            function l(e, t) {
                if (null == e) return {};
                var o, r, i = function(e, t) {
                    if (null == e) return {};
                    var o, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || (i[o] = e[o]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o])
                }
                return i
            }
            class VideoPlayerAutosized extends r.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        width: 0
                    }, this.handleMeasure = ({
                        width: e
                    }) => {
                        this.setState({
                            width: e
                        })
                    }
                }
                getStyle() {
                    const {
                        width: e
                    } = this.state;
                    if (0 !== e) return {
                        width: e,
                        height: Math.ceil(e / 4 * 3)
                    }
                }
                render() {
                    const e = this.props,
                        {
                            className: t,
                            isVideoFileBlock: o
                        } = e,
                        c = l(e, s);
                    return r.createElement(n.Z, {
                        onChange: this.handleMeasure
                    }, r.createElement(a.N, {
                        isVideoFileBlock: o,
                        className: t,
                        style: this.getStyle()
                    }, r.createElement(i.Z, c)))
                }
            }
            VideoPlayerAutosized.defaultProps = i.l
        },
        98295: (e, t, o) => {
            o.d(t, {
                Z: () => VideoPlayer,
                l: () => w
            });
            var r = o(67294),
                i = o(81811),
                n = o(20922);
            class VideoPlayerCaptions extends r.Component {
                splitCaptions() {
                    return this.props.captions.split(/\s*[\r\n]+\s*/)
                }
                getCurrentCaption() {
                    const {
                        currentTime: e,
                        duration: t
                    } = this.props, o = this.splitCaptions(), r = t / o.length, i = Math.floor(e / r);
                    return o[Math.min(i, o.length - 1)]
                }
                render() {
                    return this.props.duration ? r.createElement(n.R, null, this.getCurrentCaption()) : null
                }
            }
            var a = o(6391),
                s = o(73367),
                l = o(18446),
                c = o.n(l),
                d = o(23279),
                p = o.n(d),
                m = o(38712),
                h = o(67592),
                u = o(84198);
            const g = 1e5;
            class VideoPlayerScrubber extends r.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        currentTime: 0,
                        seeking: !1,
                        prevProps: this.props
                    }, this.handleSeek = p()((() => {
                        this.props.onSeek(this.state.currentTime)
                    }), 50), this.handleMouseDown = () => {
                        this.setState({
                            seeking: !0
                        }), this.props.onSeekStart()
                    }, this.handleMouseUp = () => {
                        this.setState({
                            seeking: !1
                        }), this.props.onSeekEnd()
                    }, this.handleSlide = ({
                        target: e
                    }) => {
                        this.setState({
                            currentTime: parseInt(e.value, 10) / g
                        }), this.handleSeek()
                    }, this.handleClick = e => {
                        e.preventDefault()
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return !t || c()(e, t.prevProps) ? null : t.seeking || e.currentTime === t.prevProps.currentTime ? {
                        prevProps: e
                    } : {
                        currentTime: e.currentTime,
                        prevProps: e
                    }
                }
                render() {
                    const {
                        duration: e
                    } = this.props, {
                        currentTime: t
                    } = this.state;
                    return r.createElement(u.S, {
                        type: "range",
                        "aria-label": (0, h.Iu)("seek_video"),
                        min: 0,
                        max: e * g,
                        value: t * g,
                        onChange: this.handleSlide,
                        onMouseDown: this.handleMouseDown,
                        onTouchStart: this.handleMouseDown,
                        onMouseUp: this.handleMouseUp,
                        onTouchEnd: this.handleMouseUp,
                        onClick: this.handleClick,
                        onBlur: m.AF
                    })
                }
            }
            var b = o(58605);
            class VideoPlayerControls extends r.PureComponent {
                constructor(...e) {
                    super(...e), this.handlePlay = e => {
                        e.stopPropagation(), this.props.onPlay(e)
                    }, this.handlePause = e => {
                        e.stopPropagation(), this.props.onPause()
                    }
                }
                getTimeRemaining() {
                    const {
                        currentTime: e,
                        duration: t
                    } = this.props;
                    if (null === e) return null;
                    const o = Math.ceil(t - e),
                        r = "0" + o % 60;
                    return `${("0"+Math.floor(o/60)).substr(-2)}:${r.substr(-2)}`
                }
                render() {
                    const {
                        playing: e,
                        muted: t,
                        currentTime: o,
                        duration: i,
                        onSeek: n,
                        onSeekStart: l,
                        onSeekEnd: c,
                        onToggleMute: d,
                        showAudioControl: p,
                        playState: m,
                        shiftUp: u,
                        hasCaptions: g
                    } = this.props;
                    return r.createElement(b.ON, {
                        dir: "ltr",
                        hasCaptions: g,
                        shiftUp: u,
                        playState: m
                    }, e ? r.createElement(s.Z, {
                        onClick: this.handlePause
                    }) : r.createElement(a.Z, {
                        onClick: this.handlePlay
                    }), r.createElement(VideoPlayerScrubber, {
                        currentTime: o,
                        duration: i,
                        onSeek: n,
                        onSeekStart: l,
                        onSeekEnd: c
                    }), r.createElement(b.xt, null, this.getTimeRemaining()), p ? r.createElement(b.id, {
                        muted: t,
                        playState: m,
                        "aria-label": t ? (0, h.Iu)("play_sound") : (0, h.Iu)("mute_sound"),
                        onClick: d
                    }) : null)
                }
            }
            var f = o(87111),
                x = o(28012),
                v = o(16315),
                y = o(11397);
            const w = {
                autoPlay: !0,
                showControls: !0,
                retries: 3,
                onPlayFromStart: () => null,
                onComplete: () => null,
                onVideoLoaded: () => null,
                onMuteChange: () => null,
                onReplay: () => null,
                onError: () => null,
                loop: !1
            };
            class VideoPlayer extends r.PureComponent {
                constructor(...e) {
                    super(...e), this._video = void 0, this.container = void 0, this.loadTime = void 0, this.hideControlsTimeout = void 0, this.posterImage = void 0, this.state = {
                        playState: "loading",
                        wasPlayingBeforeSeek: !1,
                        isMuted: void 0 !== this.props.muted ? this.props.muted : this.props.autoPlay,
                        readyToPlayFromStart: !0,
                        loadAttempt: 0,
                        videoWidth: 0,
                        videoHeight: 0,
                        duration: 0,
                        currentTime: 0,
                        userTriggeredPlayAtLeastOnce: !1,
                        showControls: !1,
                        seeking: !1
                    }, this.handleClick = e => {
                        e.stopPropagation();
                        const t = "playing" === this.state.playState ? "paused" : "playing";
                        "playing" === t && this.props.onReplay(), this.setState({
                            playState: t,
                            userTriggeredPlayAtLeastOnce: !0
                        })
                    }, this.handlePlay = () => {
                        !(0, v.K1)() || this.state.userTriggeredPlayAtLeastOnce || this.props.autoPlay ? (this.playVideo(), this.state.readyToPlayFromStart && (this.setState({
                            readyToPlayFromStart: !1
                        }), this.props.onPlayFromStart())) : this.handlePause()
                    }, this.handlePause = () => {
                        this.setState({
                            playState: "paused"
                        })
                    }, this.handlePosterLoaded = () => {
                        this.setState({
                            playState: "posterLoaded"
                        })
                    }, this.handleComplete = () => {
                        if (this.state.seeking) return;
                        const e = this.video();
                        e && (e.pause(), this.setState({
                            readyToPlayFromStart: !0,
                            playState: "complete"
                        }), this.props.onComplete())
                    }, this.handleLoad = () => {
                        this.storeVideoInfo(), this.props.autoPlay ? this.playVideo() : this.setState({
                            playState: "ready"
                        });
                        const e = new Date - this.loadTime;
                        this.props.onVideoLoaded(e)
                    }, this.handleError = () => {
                        this.props.retries === this.state.loadAttempt && this.props.onError(), this.setState((({
                            loadAttempt: e
                        }, {
                            retries: t
                        }) => {
                            if (e < t) return {
                                loadAttempt: e + 1
                            }
                        }))
                    }, this.handleSeek = e => {
                        const t = this.video();
                        t && (t.currentTime = e, this.handleTimeUpdate())
                    }, this.handleTimeUpdate = () => {
                        const e = this.video();
                        e && this.setState({
                            currentTime: e.currentTime
                        })
                    }, this.handleAudioChange = e => {
                        e.stopPropagation();
                        this.video() && this.setState({
                            isMuted: !this.state.isMuted
                        })
                    }, this.handleSeekStart = () => {
                        this.setState({
                            wasPlayingBeforeSeek: "playing" === this.state.playState,
                            seeking: !0
                        }), this.handlePause()
                    }, this.handleSeekEnd = () => {
                        this.setState({
                            seeking: !1
                        }, (() => {
                            const {
                                currentTime: e,
                                duration: t,
                                wasPlayingBeforeSeek: o
                            } = this.state;
                            e === t ? this.handleComplete() : o && this.playVideo()
                        }))
                    }, this.handleMouseEnter = () => {
                        this.showControls()
                    }, this.handleMouseLeave = () => {
                        this.hideControls()
                    }, this.handleTouchStart = e => {
                        e.stopPropagation(), this.showControls(), this.startHideControlsTimeout()
                    }, this.startHideControlsTimeout = () => {
                        clearTimeout(this.hideControlsTimeout), this.hideControlsTimeout = setTimeout((() => {
                            this.state.seeking ? this.startHideControlsTimeout() : this.hideControls()
                        }), 2e3)
                    }, this.showControls = () => {
                        this.setState({
                            showControls: !0
                        })
                    }, this.hideControls = () => {
                        this.setState({
                            showControls: !1
                        })
                    }
                }
                storeVideoInfo() {
                    const e = this.video();
                    if (!e) return;
                    const {
                        videoWidth: t,
                        videoHeight: o,
                        duration: r
                    } = e;
                    this.setState({
                        videoWidth: t,
                        videoHeight: o,
                        duration: r
                    })
                }
                componentDidMount() {
                    this.loadTime = new Date, this.posterImage = new Image, this.posterImage.addEventListener("load", this.handlePosterLoaded), this.posterImage.src = this.props.thumbnailUrl
                }
                componentWillUnmount() {
                    clearTimeout(this.hideControlsTimeout), this.posterImage.removeEventListener("load", this.handlePosterLoaded)
                }
                componentDidUpdate(e, t) {
                    const o = this.video();
                    o && (t.playState !== this.state.playState && ("paused" === this.state.playState ? o.pause() : "playing" === this.state.playState && o.play()), e.muted !== this.props.muted && this.setState({
                        isMuted: this.props.muted
                    }), t.isMuted !== this.state.isMuted && (o.muted = this.state.isMuted, this.props.onMuteChange(this.state.isMuted)), void 0 !== this.props.startTime && e.startTime !== this.props.startTime && this.handleSeek(this.props.startTime))
                }
                playVideo() {
                    this.setState({
                        playState: "playing"
                    })
                }
                video() {
                    return this._video
                }
                videoHasAudio() {
                    const e = this.video();
                    return !!e && (!1 !== e.mozHasAudio && 0 !== e.webkitAudioDecodedByteCount)
                }
                renderCaptions() {
                    const {
                        playState: e,
                        currentTime: t,
                        duration: o
                    } = this.state, {
                        captions: i
                    } = this.props;
                    return -1 !== ["playing", "paused"].indexOf(e) && i ? r.createElement(VideoPlayerCaptions, {
                        captions: i,
                        currentTime: t,
                        duration: o
                    }) : null
                }
                renderOverlay() {
                    const {
                        playState: e
                    } = this.state;
                    return "loading" === e ? null : r.createElement(y.ze, {
                        playState: e,
                        mobile: (0, v.K1)()
                    }, this.renderButton())
                }
                getButtonAriaLabel() {
                    switch (this.state.playState) {
                        case "ready":
                            return "Play";
                        case "complete":
                            return "Replay"
                    }
                }
                renderButton() {
                    const {
                        playState: e
                    } = this.state;
                    return "playing" === e || "paused" === e ? null : r.createElement(y.pG, {
                        onClick: this.handleClick,
                        "aria-label": this.getButtonAriaLabel(),
                        complete: "complete" === e
                    }, this.renderButtonIcon())
                }
                renderButtonIcon() {
                    const {
                        playState: e
                    } = this.state;
                    return "complete" === e ? r.createElement(x.Z, null) : r.createElement(a.Z, null)
                }
                renderLoadingPanel() {
                    return r.createElement(i.W3, null, "loading" === this.state.playState ? r.createElement(i.Kv, {
                        classNames: "intercom-video-loading",
                        timeout: {
                            enter: 200,
                            exit: 200
                        }
                    }, r.createElement("div", {
                        className: "intercom-video-loading"
                    }, r.createElement(f.Z, null))) : null)
                }
                renderControls() {
                    if (!this.props.showControls) return null;
                    const {
                        currentTime: e,
                        duration: t,
                        playState: o,
                        isMuted: i,
                        seeking: n,
                        wasPlayingBeforeSeek: a
                    } = this.state;
                    return r.createElement(VideoPlayerControls, {
                        currentTime: e,
                        duration: t,
                        onSeek: this.handleSeek,
                        onSeekStart: this.handleSeekStart,
                        onSeekEnd: this.handleSeekEnd,
                        onPlay: this.handleClick,
                        onPause: this.handlePause,
                        playing: "playing" === o || n && a,
                        playState: o,
                        muted: i,
                        onToggleMute: this.handleAudioChange,
                        showAudioControl: this.videoHasAudio(),
                        shiftUp: this.shouldShiftBottomOverlayUp(),
                        hasCaptions: !!this.props.captions
                    })
                }
                getStyle() {
                    const e = this.state.videoWidth < this.state.videoHeight;
                    return (0, v.K1)() ? {
                        flexDirection: e ? "row" : "column",
                        marginTop: 0
                    } : {
                        flexDirection: e ? "row" : "column"
                    }
                }
                getVideoStyle() {
                    return {
                        [this.state.videoWidth < this.state.videoHeight ? "width" : "height"]: "100%"
                    }
                }
                getSrc() {
                    const {
                        loadAttempt: e
                    } = this.state, {
                        srcUrl: t
                    } = this.props;
                    return 0 === e ? t : `${t}?attempt=${e}`
                }
                shouldShiftBottomOverlayUp() {
                    return -1 !== ["complete", "paused"].indexOf(this.state.playState) || this.state.showControls || !this.props.showControls
                }
                render() {
                    const {
                        autoPlay: e,
                        loop: t,
                        thumbnailUrl: o,
                        captions: i,
                        showControls: n
                    } = this.props, {
                        playState: a,
                        loadAttempt: s,
                        isMuted: l
                    } = this.state;
                    return r.createElement(y.P7, {
                        hasCaptions: !!i,
                        hasAudio: this.videoHasAudio(),
                        noControls: !n,
                        playState: a,
                        ref: e => this.container = e,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                    }, r.createElement(y.eA, {
                        style: this.getStyle()
                    }, r.createElement("video", {
                        style: this.getVideoStyle(),
                        onError: this.handleError,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleComplete,
                        onLoadedData: this.handleLoad,
                        onTimeUpdate: this.handleTimeUpdate,
                        autoPlay: (0, v.K1)() || e,
                        muted: l,
                        playsInline: !0,
                        ref: e => this._video = e,
                        onTouchStart: this.handleTouchStart,
                        onClick: this.handleClick,
                        "aria-label": (0, h.Iu)("play_video"),
                        loop: t,
                        poster: o,
                        onKeyDown: e => (13 === e.keyCode || 32 === e.keyCode) && this.handleClick(e),
                        tabIndex: "0"
                    }, r.createElement("source", {
                        src: this.getSrc(),
                        key: s,
                        type: "video/mp4"
                    }))), r.createElement(y.iC, {
                        shiftUp: this.shouldShiftBottomOverlayUp(),
                        isLoading: "loading" === a,
                        hasCaptions: !!i
                    }, this.renderCaptions(), this.renderControls()), this.renderOverlay(), this.renderLoadingPanel())
                }
            }
            VideoPlayer.defaultProps = w
        },
        50254: (e, t, o) => {
            o.d(t, {
                f: () => r
            });
            const r = "educate.article"
        },
        78717: (e, t, o) => {
            o.d(t, {
                ZP: () => v
            });
            var r = o(37424),
                i = o(67294),
                n = o(73935),
                a = o(99449),
                s = o(16315);
            var l = o(9688);

            function c(e) {
                const t = e,
                    o = e.document;
                if (!("scrollBehavior" in o.documentElement.style)) {
                    var r, i = t.HTMLElement || t.Element,
                        n = 468,
                        a = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: i.prototype.scroll || c,
                            scrollIntoView: i.prototype.scrollIntoView
                        },
                        s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                        l = (r = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(r) ? 1 : 0);
                    t.scroll = t.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== d(arguments[0]) ? g.call(t, o.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : a.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }, t.scrollBy = function() {
                        void 0 !== arguments[0] && (d(arguments[0]) ? a.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : g.call(t, o.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                    }, i.prototype.scroll = i.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== d(arguments[0])) {
                                var e = arguments[0].left,
                                    t = arguments[0].top;
                                g.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }, i.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== d(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }, i.prototype.scrollIntoView = function() {
                        if (!0 !== d(arguments[0])) {
                            var e = function(e) {
                                    for (; e !== o.body && !1 === h(e);) e = e.parentNode || e.host;
                                    return e
                                }(this),
                                r = e.getBoundingClientRect(),
                                i = this.getBoundingClientRect();
                            e !== o.body ? (g.call(this, e, e.scrollLeft + i.left - r.left, e.scrollTop + i.top - r.top), "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                left: r.left,
                                top: r.top,
                                behavior: "smooth"
                            })) : t.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })
                        } else a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }

                function c(e, t) {
                    this.scrollLeft = e, this.scrollTop = t
                }

                function d(e) {
                    if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                    if ("object" == typeof e && "smooth" === e.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function p(e, t) {
                    return "Y" === t ? e.clientHeight + l < e.scrollHeight : "X" === t ? e.clientWidth + l < e.scrollWidth : void 0
                }

                function m(e, o) {
                    var r = t.getComputedStyle(e, null)["overflow" + o];
                    return "auto" === r || "scroll" === r
                }

                function h(e) {
                    var t = p(e, "Y") && m(e, "Y"),
                        o = p(e, "X") && m(e, "X");
                    return t || o
                }

                function u(e) {
                    var o, r, i, a, l = (s() - e.startTime) / n;
                    a = l = l > 1 ? 1 : l, o = .5 * (1 - Math.cos(Math.PI * a)), r = e.startX + (e.x - e.startX) * o, i = e.startY + (e.y - e.startY) * o, e.method.call(e.scrollable, r, i), r === e.x && i === e.y || t.requestAnimationFrame(u.bind(t, e))
                }

                function g(e, r, i) {
                    var n, l, d, p, m = s();
                    e === o.body ? (n = t, l = t.scrollX || t.pageXOffset, d = t.scrollY || t.pageYOffset, p = a.scroll) : (n = e, l = e.scrollLeft, d = e.scrollTop, p = c), u({
                        scrollable: n,
                        method: p,
                        startTime: m,
                        startX: l,
                        startY: d,
                        x: r,
                        y: i
                    })
                }
            }
            var d = o(33791),
                p = o(97681);
            const m = (e, t, o, r) => {
                const i = e.contentDocument;
                return ((e, t, o = "en") => {
                    if (s.ZP.isFirefox()) {
                        const t = e.contentDocument.open();
                        t.write("<!DOCTYPE html>"), t.close()
                    }((e, t, o = "en") => {
                        e.documentElement.innerHTML = t, e.documentElement.setAttribute("lang", o)
                    })(e.contentDocument, t, o)
                })(e, ((e = !1, t = !1, o) => {
                    const r = e ? "assertive" : "polite",
                        i = t ? "intercom-container-body-no-margin" : "";
                    return `<!DOCTYPE html>\n  <html>\n    <head>\n      <title>Intercom Live Chat</title>\n      <base target="_parent" />\n    </head>\n    <body id="intercom-container-body" dir="${(0,l.XP)(o)}" class="${i}">\n      <div id="intercom-container" class="intercom-namespace" role="main" aria-live="${r}"></div>\n    </body>\n  </html>`
                })(t, r, o), o), null == i ? void 0 : i.getElementById("intercom-container")
            };
            class Frame extends i.Component {
                constructor(...e) {
                    super(...e), this.iframe = void 0, this.timeout = void 0, this.state = {
                        delayRender: this.props.ariaLiveAssertive,
                        container: null
                    }, this.mountTimeout = null, this.handleClose = e => {
                        (0, l.$o)(e) && this.props.onClose()
                    }, this.handleTab = e => {
                        (0, l.wS)(e) && this.props.onTabPressed()
                    }
                }
                componentDidMount() {
                    const {
                        iframe: e
                    } = this;
                    if (!e || !e.contentWindow) return;
                    (0, a.Td)(e.contentWindow);
                    const {
                        ariaLiveAssertive: t,
                        locale: o,
                        removeBodyMargin: r
                    } = this.props, i = m(e, t, o, r);
                    (0, d.Z)(e.contentWindow), c(e.contentWindow), this.setState({
                        container: i
                    })
                }
                componentDidUpdate(e) {
                    e.locale !== this.props.locale && this.iframe && this.iframe.contentDocument && (this.iframe.contentDocument.body.dir = (0, l.XP)(this.props.locale))
                }
                componentWillUnmount() {
                    clearTimeout(this.timeout)
                }
                renderChildren() {
                    const {
                        children: e
                    } = this.props, {
                        delayRender: t,
                        container: o
                    } = this.state, {
                        iframe: r
                    } = this;
                    return t ? (this.timeout = setTimeout((() => this.setState({
                        delayRender: !1
                    })), 1), null) : r && r.contentWindow && o ? (0, n.createPortal)(i.createElement("div", {
                        onKeyDown: this.handleTab,
                        tabIndex: -1,
                        role: "region"
                    }, i.createElement(p.Z, {
                        target: r.contentWindow.document.head
                    }, e ? e(r.contentWindow, r) : () => {})), o) : null
                }
                render() {
                    const {
                        frameName: e,
                        className: t,
                        style: o,
                        title: r
                    } = this.props;
                    return i.createElement("iframe", {
                        ref: e => this.iframe = e,
                        allowFullScreen: !0,
                        className: t,
                        style: o,
                        name: e,
                        title: r || "Intercom Live Chat",
                        "data-intercom-frame": "true",
                        role: "dialog",
                        onKeyDown: this.handleClose
                    }, this.renderChildren())
                }
            }
            Frame.defaultProps = {
                ariaLiveAssertive: !0,
                removeBodyMargin: !1
            };
            var h = o(46341),
                u = o(94679),
                g = o(65394),
                b = o(17462),
                f = o(66494);
            const {
                assign: x
            } = Object, v = (0, r.$j)((e => {
                const {
                    user: {
                        locale: t = "en"
                    } = {}
                } = e;
                return {
                    locale: t
                }
            }), (e => ({
                onTabPressed: () => e(((t, o) => {
                    const {
                        tabNavigation: r
                    } = o().accessibility;
                    r || e((0, h.gk)(!0))
                })),
                onClicked: () => e(((t, o) => {
                    const {
                        tabNavigation: r
                    } = o().accessibility;
                    r && e((0, h.gk)(!1))
                })),
                onClose: () => e(((t, o) => {
                    const {
                        borderless: {
                            conversationId: r
                        }
                    } = o();
                    r && (e((0, g.HW)(b.ZP, [r])), e((0, f.YG)())), e((0, u.eA)())
                }))
            })), ((e, t, o) => x({}, e, t, o)))(Frame)
        },
        79739: (e, t, o) => {
            o.d(t, {
                ZP: () => Gt
            });
            var r = o(37424),
                i = o(67294),
                n = o(29286),
                a = o(40887),
                s = o(26356),
                l = o(50700),
                c = o(29258),
                d = {
                    name: "l8qto0",
                    styles: "font-size:15px;"
                },
                p = {
                    name: "6xix1i",
                    styles: "font-size:16px;"
                };
            const m = ({
                theme: e
            }) => (0, l.iv)("font-weight:600;font-size:14px;", "android" === e.platform && p, " ", "ios" === e.platform && d);
            var h = {
                    name: "l8qto0",
                    styles: "font-size:15px;"
                },
                u = {
                    name: "6xix1i",
                    styles: "font-size:16px;"
                };
            const g = ({
                    theme: e
                }) => (0, l.iv)("font-size:14px;", "android" === e.platform && u, " ", "ios" === e.platform && h),
                b = e => "paragraph" === e || "muted" === e || "error" === e;
            var f = {
                    name: "gx0lhm",
                    styles: "margin-bottom:0;"
                },
                x = {
                    name: "s2uf1z",
                    styles: "text-align:right;"
                },
                v = {
                    name: "xi606m",
                    styles: "text-align:center;"
                },
                y = {
                    name: "13brihr",
                    styles: "text-align:left;"
                };
            const w = ({
                    theme: e,
                    variant: t,
                    align: o,
                    isBottomMarginNone: r
                }) => (0, l.iv)("line-height:1.5;margin-bottom:8px;word-break:break-word;", "muted" === t && (0, l.iv)("color:", e.grey, ";", S.className, "{color:", e.grey, ";}"), " ", "error" === t && (0, l.iv)("color:", e.errorText, ";", S.className, "{color:", e.errorText, ";}"), " ", "left" === o && y, " ", "center" === o && v, " ", "right" === o && x, " ", r && f),
                k = (0, l.ZP)("h2", {
                    target: "e1wl0ev20"
                })(w, " ", (({
                    variant: e
                }) => "header" === e && m), " ", (({
                    variant: e
                }) => b(e) && g)),
                C = (0, l.ZP)("div", {
                    target: "e1wl0ev21"
                })(w, " ", (({
                    variant: e
                }) => "header" === e && m), " ", (({
                    variant: e
                }) => b(e) && g)),
                S = (0, l.ZP)("a", {
                    target: "e1wl0ev22"
                })("text-decoration:underline;color:", (0, l.rS)("appColor"), ";"),
                P = (0, l.ZP)("b", {
                    target: "e1wl0ev23"
                })({
                    name: "35ezg3",
                    styles: "font-weight:600;"
                }),
                E = (0, l.ZP)("div", {
                    target: "e1abq20i0"
                })({
                    name: "icbmz8",
                    styles: "padding:26px 24px 24px 24px;line-height:1.5;"
                });
            var N = {
                    name: "1gk4ta0",
                    styles: "padding:10px 15px;"
                },
                B = {
                    name: "15j24wo",
                    styles: "padding:12px 16px;"
                };
            const O = (0, l.ZP)("div", {
                    target: "e1abq20i1"
                })("padding:16px 20px;line-height:1.5;", g, " ", (({
                    theme: e
                }) => "android" === e.platform && B), " ", (({
                    theme: e
                }) => "ios" === e.platform && N)),
                Z = (0, c.Y)(E, O);
            var T = o(81811),
                j = o(88167),
                z = o(79076),
                I = o(59339),
                L = o(87111),
                M = o(67592);

            function A() {
                return A = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, A.apply(this, arguments)
            }

            function F(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function D(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            class ButtonComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        const {
                            id: t,
                            action: o,
                            loading: r,
                            disabled: i,
                            onClick: n
                        } = this.props;
                        e.preventDefault(), i || r || n(t, o, "button", "clicked", e)
                    }
                }
                isDisabled() {
                    const {
                        disabled: e,
                        loading: t
                    } = this.props;
                    return e && !t
                }
                loadingSpinnerColor() {
                    const {
                        style: e
                    } = this.props;
                    var t;
                    return "primary" === e ? null !== (t = this.context) && void 0 !== t && t.isPrimaryColorLight ? "black" : "white" : "primary"
                }
                render() {
                    const {
                        label: e,
                        loading: t,
                        style: o,
                        isLast: r,
                        bottomMargin: n
                    } = this.props, a = "none" === n || r, s = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? F(Object(o), !0).forEach((function(t) {
                                D(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : F(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }({
                        "aria-label": t ? (0, M.Iu)("loading") : e
                    }, t ? {
                        role: "progressbar"
                    } : {});
                    return i.createElement(z.O, A({
                        className: "intercom-messenger-card-button",
                        styleVariant: o,
                        isLoading: t,
                        noBottomMargin: a,
                        disabled: this.isDisabled(),
                        onClick: this.handleClick
                    }, s), t ? i.createElement(L.Z, {
                        size: "small",
                        color: this.loadingSpinnerColor()
                    }) : e)
                }
            }
            ButtonComponent.defaultProps = {
                style: "primary",
                disabled: !1,
                loading: !1,
                isLast: !1,
                bottomMargin: "default"
            }, ButtonComponent.contextType = I.Ni;
            var _ = o(94184),
                W = o.n(_),
                G = o(68442);

            function U(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(o), !0).forEach((function(t) {
                        H(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : U(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function H(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            class TextComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.renderParsedText = e => (0, G.parseText)(e).map(((e, t) => {
                        switch (e.type) {
                            case "plain":
                                return e.text;
                            case "link":
                                return i.createElement(S, {
                                    href: e.url,
                                    target: "_blank",
                                    key: `link-${t}`,
                                    rel: "noopener noreferrer"
                                }, e.text);
                            case "bold":
                                return i.createElement(P, {
                                    key: `bold-${t}`
                                }, e.text)
                        }
                    }))
                }
                getClassName() {
                    const {
                        style: e
                    } = this.props;
                    return W()({
                        "intercom-messenger-card-text": !0,
                        "intercom-messenger-card-text-header": "header" === e,
                        "intercom-messenger-card-text-muted": "muted" === e,
                        "intercom-messenger-card-text-paragraph": "paragraph" === e
                    })
                }
                render() {
                    const {
                        text: e,
                        style: t,
                        align: o,
                        isLast: r,
                        bottomMargin: n
                    } = this.props;
                    if (!e) return null;
                    const a = R(R({}, "error" === t ? {
                        role: "alert"
                    } : {}), {}, {
                        align: o,
                        variant: t,
                        isBottomMarginNone: "none" === n || r,
                        className: this.getClassName(),
                        children: this.renderParsedText(e)
                    });
                    return "header" === t ? i.createElement(k, a) : i.createElement(C, a)
                }
            }
            TextComponent.defaultProps = {
                type: "text",
                style: "paragraph",
                align: "left",
                isLast: !1,
                bottomMargin: "default"
            };
            var V = o(92279),
                q = {
                    name: "gx0lhm",
                    styles: "margin-bottom:0;"
                },
                $ = {
                    name: "1fn0841",
                    styles: "justify-content:flex-start;"
                },
                K = {
                    name: "1a9getn",
                    styles: "justify-content:flex-end;"
                },
                Y = {
                    name: "1tyndxa",
                    styles: "justify-content:center;"
                },
                X = {
                    name: "1itkqg2",
                    styles: "margin-bottom:-24px;"
                },
                J = {
                    name: "1aja870",
                    styles: "margin:-24px -24px 8px;"
                },
                Q = {
                    name: "khlufd",
                    styles: "margin:auto -24px 8px;"
                },
                ee = {
                    name: "2cvw38",
                    styles: "img{border-radius:50%;}"
                },
                te = {
                    name: "157sgfy",
                    styles: "&,*{cursor:pointer;}"
                },
                oe = {
                    name: "1tzeee1",
                    styles: "opacity:0.5;"
                };
            const re = (0, l.ZP)("div", {
                target: "ejnurbt0"
            })("display:flex;flex-direction:row;align-items:center;margin-bottom:8px;-webkit-touch-callout:none;user-select:none;img{display:block;}", (({
                isDisabled: e
            }) => e && oe), " ", (({
                isActive: e
            }) => e && te), " ", (({
                isRound: e
            }) => e && ee), " ", (({
                imageAlign: e
            }) => "full_width" === e && Q), " ", (({
                imageAlign: e,
                isFirst: t
            }) => "full_width" === e && t && J), " ", (({
                imageAlign: e,
                isLast: t
            }) => "full_width" === e && t && X), " ", (({
                imageAlign: e
            }) => "center" === e && Y), " ", (({
                imageAlign: e
            }) => "right" === e && K), " ", (({
                imageAlign: e
            }) => "left" === e && $), " ", (({
                isLast: e,
                bottomMargin: t
            }) => (e || "none" === t) && q));
            var ie = {
                name: "qwdy8v",
                styles: "border-radius:0 0 3px 3px;"
            };
            const ne = (0, l.ZP)("div", {
                target: "ejnurbt1"
            })("overflow:hidden;", (({
                isFullWidth: e,
                isLast: t
            }) => e && t && ie));
            class ImageComponent extends i.Component {
                constructor(...e) {
                    super(...e), this.state = {}, this.handleClick = e => {
                        const {
                            action: t,
                            onClick: o
                        } = this.props;
                        o && t && "url" === t.type && t.url && o(t.url, t, "image", "clicked", e)
                    }, this.handleImageLoad = e => {
                        const t = e.target,
                            {
                                width: o,
                                height: r
                            } = this.props;
                        this.setState({
                            imageWidth: o || t.offsetWidth,
                            imageHeight: r || t.offsetHeight
                        })
                    }
                }
                hasUrlAction() {
                    const {
                        action: e
                    } = this.props;
                    return e && "url" === e.type && e.url
                }
                calculateImageWidth(e) {
                    if (e) return e > 213 ? "100%" : e
                }
                calculateImageHeight(e, t) {
                    if (e && t) return e > 213 ? "auto" : t
                }
                getImageStyle() {
                    const {
                        imageWidth: e,
                        imageHeight: t
                    } = this.state, {
                        width: o,
                        height: r
                    } = this.props, i = o || e, n = r || t;
                    return i || n ? {
                        width: this.calculateImageWidth(i),
                        height: this.calculateImageHeight(i, n)
                    } : {}
                }
                render() {
                    const {
                        url: e,
                        alt: t,
                        align: o,
                        rounded: r,
                        isLast: n,
                        bottomMargin: a,
                        disabled: s,
                        isFirst: l
                    } = this.props, {
                        imageWidth: c,
                        imageHeight: d
                    } = this.state, p = (0, V.OR)(window) && "full_width" === o ? "center" : o;
                    return i.createElement(re, {
                        onClick: this.handleClick,
                        "aria-label": t || "",
                        tabIndex: this.hasUrlAction() ? 0 : -1,
                        role: this.hasUrlAction() ? "button" : "none",
                        isRound: c && d && r,
                        isFirst: l,
                        bottomMargin: a,
                        isLast: n,
                        isActive: this.hasUrlAction() && !s,
                        isDisabled: s,
                        imageAlign: p
                    }, i.createElement(ne, {
                        isLast: n,
                        isFullWidth: "full_width" === p,
                        className: "intercom-messenger-card-image-wrapper"
                    }, i.createElement("img", {
                        src: e,
                        alt: t || "",
                        role: t ? void 0 : "presentation",
                        style: this.getImageStyle(),
                        onLoad: this.handleImageLoad
                    })))
                }
            }
            ImageComponent.defaultProps = {
                align: "left",
                rounded: !1,
                isLast: !1,
                bottomMargin: "default",
                disabled: !1
            };
            var ae = {
                name: "19idom",
                styles: "margin-bottom:8px;"
            };
            const se = (0, l.ZP)("div", {
                    target: "e1sw26jc0"
                })((({
                    noBottomMargin: e
                }) => !e && ae)),
                le = (0, l.ZP)("label", {
                    target: "e1sw26jc1"
                })({
                    name: "1lg26qb",
                    styles: "display:block;margin-bottom:8px;"
                });
            var ce = o(90196);
            class InputComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.node = null, this.interval = void 0, this.handleSubmit = () => {
                        const {
                            id: e,
                            action: t
                        } = this.props;
                        this.props.onSubmit(e, t, "input", "submitted")
                    }, this.handleChange = e => {
                        this.props.onChange(this.props.id, e)
                    }, this.handleFocus = () => {
                        this.props.onFocus(this.props.id)
                    }
                }
                componentWillUnmount() {
                    clearInterval(this.interval)
                }
                renderLabel() {
                    return i.createElement(le, null, this.props.label)
                }
                buildInputProps() {
                    const {
                        action: e,
                        value: t,
                        id: o,
                        label: r,
                        placeholder: i,
                        saveState: n,
                        disabled: a,
                        ariaLabel: s,
                        ariaLabelledby: l,
                        messengerAppId: c
                    } = this.props;
                    return {
                        value: t,
                        placeholder: i,
                        id: o,
                        label: r,
                        saveState: n,
                        disabled: a,
                        ariaLabel: s,
                        ariaLabelledby: l,
                        messengerAppId: c,
                        buttonAriaLabel: e ? e.ariaLabel : void 0,
                        buttonAriaLabelledby: e ? e.ariaLabelledby : void 0,
                        hideErrorMessage: !0,
                        autoFocus: !1,
                        isBorderless: !1,
                        isReplyType: !1,
                        isSubmittable: !!e,
                        onSubmit: this.handleSubmit,
                        onChange: this.handleChange,
                        isValid: () => !0,
                        onFocus: this.handleFocus
                    }
                }
                renderInput() {
                    const e = this.buildInputProps();
                    return i.createElement(ce.Z, e)
                }
                render() {
                    const {
                        isLast: e,
                        bottomMargin: t
                    } = this.props, o = e || "none" === t;
                    return i.createElement(se, {
                        noBottomMargin: o,
                        ref: e => this.node = e
                    }, this.props.label ? this.renderLabel() : null, this.renderInput())
                }
            }
            InputComponent.defaultProps = {
                disabled: !1,
                saveState: "unsaved",
                required: !0,
                isLast: !1,
                bottomMargin: "default"
            };
            var de = o(18446),
                pe = o.n(de);
            const me = (0, l.ZP)("label", {
                target: "eysiwi80"
            })("display:block;margin-bottom:8px;", (({
                error: e,
                theme: t
            }) => e && (0, l.iv)("color:", t.red, ";")));
            var he = {
                name: "gx0lhm",
                styles: "margin-bottom:0;"
            };
            const ue = (0, l.ZP)("textarea", {
                target: "eysiwi81"
            })("display:block;width:100%;height:80px;padding:11px 16px;box-sizing:border-box;font-size:14px;border:1px solid ", (0, l.rS)("textareaBorder"), ";color:", (0, l.rS)("textareaText"), ";border-radius:8px;background:", (0, l.rS)("textareaBackground"), ";margin-bottom:8px;overflow-wrap:break-word;resize:none;&:focus{background:", (0, l.rS)("white"), ";}&::placeholder{color:", (0, l.rS)("textareaPlaceholder"), ";}&[disabled]{cursor:not-allowed;}", (({
                noBottomMargin: e
            }) => e && he), " ", (({
                error: e,
                theme: t
            }) => e && (0, l.iv)("&,&:focus{color:", t.invalidTextareaText, ";background-color:", t.invalidTextareaBackground, ";border-color:", t.invalidTextareaBorder, ";}")));
            var ge = o(39113),
                be = o(15300),
                fe = o(38712);

            function xe() {
                return xe = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, xe.apply(this, arguments)
            }

            function ve(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(o), !0).forEach((function(t) {
                        we(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ve(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function we(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            class TextAreaComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        value: this.props.value || "",
                        prevProps: {}
                    }, this.handleChange = e => {
                        const t = e.target.value;
                        this.setState({
                            value: t
                        }), this.props.onChange(this.props.id, t)
                    }, this.handleFocus = () => {
                        this.props.onFocus(this.props.id)
                    }, this.handleMobileClick = () => {
                        const {
                            disabled: e,
                            id: t,
                            label: o
                        } = this.props, r = (0, V.OR)(window);
                        if (!r || e) return;
                        const i = {
                            type: "INPUT_TEXT",
                            payload: {
                                currentValue: this.state.value,
                                id: t,
                                label: o,
                                placeholder: this.props.placeholder
                            }
                        };
                        r.handleAction(JSON.stringify(i))
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return !t || pe()(e, t.prevProps) ? null : {
                        value: e.value || t.value || ""
                    }
                }
                buildTextAreaProps() {
                    const e = this.state.value,
                        {
                            id: t,
                            placeholder: o,
                            disabled: r
                        } = this.props;
                    return {
                        id: t,
                        value: e,
                        placeholder: o,
                        disabled: r,
                        autoFocus: !1,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus
                    }
                }
                render() {
                    const {
                        label: e,
                        ariaLabel: t,
                        ariaLabelledby: o,
                        error: r,
                        isLast: n,
                        bottomMargin: a
                    } = this.props, s = ye(ye({}, r ? {
                        "aria-invalid": !0
                    } : {}), {}, {
                        "aria-labelledby": o,
                        "aria-label": t || e
                    });
                    return i.createElement(ge.Wr, null, e && i.createElement(me, {
                        error: r
                    }, e), (0, V.OR)(window) && i.createElement(be.v, {
                        onClick: this.handleMobileClick,
                        tabIndex: -1,
                        role: "presentation"
                    }), i.createElement(ue, xe({
                        onBlur: fe.AF,
                        error: r,
                        noBottomMargin: "none" === a || n
                    }, this.buildTextAreaProps(), s)))
                }
            }
            TextAreaComponent.defaultProps = {
                disabled: !1,
                isLast: !1,
                bottomMargin: "default"
            };
            const ke = {
                    xs: 4,
                    s: 8,
                    m: 16,
                    l: 24,
                    xl: 32
                },
                Ce = (0, l.ZP)("div", {
                    target: "eefqm3z0"
                })("width:100%;", (({
                    size: e
                }) => (0, l.iv)("height:", ke[e], "px;")));
            class SpacerComponent extends i.PureComponent {
                render() {
                    return i.createElement(Ce, {
                        size: this.props.size
                    })
                }
            }
            SpacerComponent.defaultProps = {
                size: "s"
            };
            var Se = {
                name: "gx0lhm",
                styles: "margin-bottom:0;"
            };
            const Pe = (0, l.ZP)("div", {
                target: "eba2t5x0"
            })((({
                theme: e
            }) => (0, l.iv)("border-top:1px solid ", e.dividerBorder, ";")), ";height:0;margin:0 -24px 8px;", (({
                noBottomMargin: e
            }) => e && Se));
            class DividerComponent extends i.PureComponent {
                render() {
                    const {
                        isLast: e,
                        bottomMargin: t
                    } = this.props, o = e || "none" === t;
                    return i.createElement(Pe, {
                        noBottomMargin: o
                    })
                }
            }
            DividerComponent.defaultProps = {
                isLast: !1,
                bottomMargin: "default"
            };
            var Ee = {
                    name: "1wpvfv4",
                    styles: "margin-bottom:-10px;"
                },
                Ne = {
                    name: "14nywfj",
                    styles: "margin-bottom:-12px;"
                },
                Be = {
                    name: "1sjcqhi",
                    styles: "margin-bottom:-16px;"
                },
                Oe = {
                    name: "1n72ugh",
                    styles: "border-bottom:0;margin-bottom:-24px;"
                },
                Ze = {
                    name: "12595yo",
                    styles: "margin-bottom:0px;"
                },
                Te = {
                    name: "1kpjck4",
                    styles: "margin-top:-10px;"
                },
                je = {
                    name: "u2tihl",
                    styles: "margin-top:-12px;"
                },
                ze = {
                    name: "1ytub8b",
                    styles: "margin-top:-16px;"
                },
                Ie = {
                    name: "1gmu3ks",
                    styles: "border-top:0;margin-top:-24px;"
                },
                Le = {
                    name: "d56p0s",
                    styles: "margin:0 -15px 8px;"
                },
                Me = {
                    name: "sv716a",
                    styles: "margin:0 -16px 8px;"
                };
            const Ae = (0, l.ZP)("div", {
                target: "e15odeg10"
            })("position:relative;margin:0 -20px 8px;border-top:1px solid ", (0, l.rS)("dividerBorder"), ";border-bottom:1px solid ", (0, l.rS)("dividerBorder"), ";user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;transition:background-color 250ms;", (({
                theme: e
            }) => "android" === e.platform && Me), " ", (({
                theme: e
            }) => "ios" === e.platform && Le), " ", (({
                isFirst: e
            }) => e && Ie), " ", (({
                isFirst: e,
                theme: t
            }) => e && "web" === t.platform && ze), " ", (({
                isFirst: e,
                theme: t
            }) => e && "android" === t.platform && je), " ", (({
                isFirst: e,
                theme: t
            }) => e && "ios" === t.platform && Te), " ", (({
                noBottomMargin: e
            }) => e && Ze), " ", (({
                isLast: e
            }) => e && Oe), " ", (({
                isLast: e,
                theme: t
            }) => e && "web" === t.platform && Be), " ", (({
                isLast: e,
                theme: t
            }) => e && "android" === t.platform && Ne), " ", (({
                isLast: e,
                theme: t
            }) => e && "ios" === t.platform && Ee));
            var Fe = {
                    name: "1jjsjsl",
                    styles: "padding:16px 15px;"
                },
                De = {
                    name: "ko5zcf",
                    styles: "padding:16px 16px;"
                };
            const _e = (0, l.ZP)("div", {
                    target: "ebvwrrs0"
                })("background-color:", (0, l.rS)("white"), ";padding:16px 24px;border-bottom:1px solid ", (0, l.rS)("dividerBorder"), ";display:flex;flex-direction:row;justify-content:flex-start;align-items:center;position:relative;&:last-child{border-bottom:0;}", re.className, "{margin-bottom:0;margin-right:8px;}padding:16px 20px;", (({
                    theme: e
                }) => "android" === e.platform && De), " ", (({
                    theme: e
                }) => "ios" === e.platform && Fe), " ", (({
                    isDisabled: e,
                    theme: t
                }) => e && (0, l.iv)("pointer-events:none;background-color:", t.white, ";")), " ", (({
                    isActive: e,
                    theme: t,
                    backgroundHoverState: o
                }) => e && (0, l.iv)("cursor:pointer;*{cursor:pointer;}", !o && (0, l.iv)("transition:background-color 250ms;&:hover{background-color:", t.backgroundHover, ";}&:active{background-color:", t.backgroundHover, ";}"))), " .intercom-messenger-card-image{margin-bottom:0;margin-right:8px;}"),
                We = (0, l.ZP)("div", {
                    target: "ebvwrrs1"
                })({
                    name: "tg33l",
                    styles: "flex:1;display:flex;flex-direction:column;justify-content:center;"
                }),
                Ge = (0, l.ZP)("div", {
                    target: "ebvwrrs2"
                })("color:", (0, l.rS)("m5DarkGrey2"), ";", m, " ", (({
                    hasAction: e,
                    theme: t
                }) => e && (0, l.iv)(_e.className, ":hover &{color:", t.linkColor, ";}")), " ", (({
                    isDisabled: e,
                    theme: t
                }) => e && (0, l.iv)("color:", t.listDisabled, ";"))),
                Ue = (0, l.ZP)("div", {
                    target: "ebvwrrs3"
                })("color:", (0, l.rS)("subheaderText"), ";", g, ";");
            class ListItemComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        const {
                            id: t,
                            action: o,
                            onClick: r
                        } = this.props;
                        !this.isDisabled() && o && r(t, o, "actionable_list_item", "clicked", e)
                    }
                }
                isDisabled() {
                    const {
                        disabled: e,
                        loading: t
                    } = this.props;
                    return e || t
                }
                hasUrlAction() {
                    const {
                        action: e
                    } = this.props;
                    return e && "url" === e.type && e.url
                }
                buildImageProps() {
                    const {
                        image: e,
                        imageWidth: t,
                        imageHeight: o,
                        roundedImage: r
                    } = this.props;
                    return {
                        type: "image",
                        url: e,
                        width: t,
                        height: o,
                        rounded: r,
                        disabled: this.isDisabled()
                    }
                }
                renderSubtitle() {
                    const {
                        subtitle: e,
                        tertiaryText: t
                    } = this.props;
                    return i.createElement(Ue, null, e && i.createElement("span", {
                        className: "intercom-messenger-card-list-item-text-subtitle-secondary-text"
                    }, e), e && t && i.createElement("span", null, " • "), t && i.createElement("span", null, t))
                }
                renderSpinner() {
                    return this.hasUrlAction() || !this.props.loading ? null : i.createElement(L.Z, {
                        size: "small",
                        color: "primary"
                    })
                }
                render() {
                    const {
                        title: e,
                        subtitle: t,
                        tertiaryText: o,
                        image: r,
                        disabled: n,
                        action: a,
                        backgroundHoverState: s
                    } = this.props;
                    return i.createElement(_e, {
                        className: "intercom-messenger-card-list-item",
                        onClick: this.handleClick,
                        "aria-disabled": n,
                        isDisabled: this.isDisabled(),
                        isActive: a && !this.isDisabled(),
                        backgroundHoverState: s
                    }, r ? i.createElement(ImageComponent, this.buildImageProps()) : null, i.createElement(We, null, i.createElement(Ge, {
                        className: "intercom-messenger-card-list-item-text-title",
                        hasAction: !!a,
                        isDisabled: this.isDisabled()
                    }, e), t || o ? this.renderSubtitle() : null), this.renderSpinner())
                }
            }

            function Re() {
                return Re = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, Re.apply(this, arguments)
            }
            ListItemComponent.defaultProps = {
                title: "",
                disabled: !1,
                loading: !1,
                roundedImage: !1
            }, ListItemComponent.contextType = I.Ni;
            class ListComponent extends i.PureComponent {
                render() {
                    const {
                        items: e,
                        onItemClick: t,
                        disabled: o,
                        isFirst: r,
                        isLast: n,
                        bottomMargin: a
                    } = this.props, s = r && n, l = "none" === a;
                    return i.createElement(Ae, {
                        isFirst: r,
                        isLast: n,
                        noBottomMargin: l
                    }, e.map(((r, n) => i.createElement(ListItemComponent, Re({
                        key: n
                    }, r, {
                        backgroundHoverState: s && 1 === e.length,
                        disabled: o || r.disabled,
                        onClick: t
                    })))))
                }
            }
            ListComponent.defaultProps = {
                items: [],
                isFirst: !1,
                isLast: !1,
                bottomMargin: "default",
                disabled: !1
            };
            var He = {
                name: "gx0lhm",
                styles: "margin-bottom:0;"
            };
            const Ve = (0, l.ZP)("table", {
                    target: "e15rx0z90"
                })("display:block;overflow:hidden;margin:0 0 8px;max-width:100%;width:100%;", (({
                    removeBottomMargin: e
                }) => e && He)),
                qe = (0, l.ZP)("tr", {
                    target: "e15rx0z91"
                })("background-color:", (0, l.rS)("white"), ";vertical-align:top;"),
                $e = (0, l.ZP)("td", {
                    target: "e15rx0z92"
                })("color:", (0, l.rS)("grey"), ";padding-right:8px;"),
                Ke = (0, l.ZP)("td", {
                    target: "e15rx0z93"
                })("color:", (0, l.rS)("m5DarkGrey2"), ";white-space:pre-wrap;word-break:break-all;word-wrap:break-word;");

            function Ye({
                items: e,
                bottomMargin: t
            }) {
                return i.createElement(Ve, {
                    removeBottomMargin: "none" === t
                }, i.createElement("tbody", null, e.map(((e, t) => function(e, t, o) {
                    return i.createElement(qe, {
                        key: o.toString()
                    }, i.createElement($e, null, e), i.createElement(Ke, null, t))
                }(e.field, e.value, t)))))
            }
            var Xe = {
                name: "gx0lhm",
                styles: "margin-bottom:0;"
            };
            const Je = (0, l.ZP)("div", {
                    target: "emm36e40"
                })("margin:0 0 8px;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;", (({
                    noBottomMargin: e
                }) => e && Xe)),
                Qe = (0, l.ZP)("label", {
                    target: "emm36e41"
                })({
                    name: "10xqq1x",
                    styles: "display:block;margin-bottom:5px;font-size:14px;line-height:21px;"
                });
            var et = o(51886);
            const tt = (0, r.$j)((e => {
                var t;
                return {
                    renderNativePickerInMobile: !(null == e || null === (t = e.app) || void 0 === t || !t.features) && e.app.features.renderNativePickerInMobile
                }
            }))(et.Z);
            class DropdownComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.state = this.getDefaultState(), this.handleOnChange = e => {
                        this.setState({
                            value: e
                        }), this.props.onChange(this.props.id, e.id)
                    }
                }
                getDefaultState() {
                    const {
                        options: e,
                        value: t
                    } = this.props;
                    return {
                        value: e.find((e => e.id === t)),
                        loading: !1
                    }
                }
                renderLabel() {
                    return i.createElement(Qe, null, this.props.label)
                }
                mapOptions() {
                    return this.props.options.map((e => ({
                        id: e.id,
                        text: e.text,
                        disabled: !!e.disabled
                    })))
                }
                render() {
                    const {
                        label: e,
                        disabled: t,
                        saveState: o
                    } = this.props;
                    return i.createElement(Je, null, e ? this.renderLabel() : null, i.createElement(tt, {
                        value: this.state.value,
                        options: this.mapOptions(),
                        disabled: t,
                        saveState: o,
                        frameWindow: this.props.frameWindow,
                        onChange: this.handleOnChange
                    }))
                }
            }
            DropdownComponent.defaultProps = {
                disabled: !1,
                bottomMargin: "default"
            };
            var ot = o(99022),
                rt = o(60707),
                it = o(93287),
                nt = {
                    name: "gx0lhm",
                    styles: "margin-bottom:0;"
                };
            const at = (0, l.ZP)("div", {
                    target: "e1bhzr910"
                })("margin:0 0 8px;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;", (({
                    noBottomMargin: e
                }) => e && nt), " ", it.e.className, "{position:relative;top:-8px;}"),
                st = (0, l.ZP)("label", {
                    target: "e1bhzr911"
                })({
                    name: "1cjafuu",
                    styles: "display:block;margin-bottom:5px;font-size:14px;line-height:20px;"
                });
            class SingleSelectComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.state = this.getDefaultState(), this.handleOnChange = e => {
                        const {
                            id: t,
                            action: o,
                            disabled: r,
                            onChange: i,
                            onSubmit: n
                        } = this.props;
                        r || this.state.loading || (o ? ("submit" === o.type && this.setState({
                            value: e,
                            loading: !0
                        }), i(t, e.id, (() => {
                            n(t, o, "single-select", "submitted")
                        }))) : (this.setState({
                            value: e
                        }), i(t, e.id)))
                    }
                }
                getDefaultState() {
                    const {
                        options: e,
                        value: t,
                        saveState: o
                    } = this.props;
                    return {
                        value: e.find((e => e.id === t)),
                        loading: "saving" === o
                    }
                }
                componentDidUpdate() {
                    this.state.loading && "saved" === this.props.saveState && this.handleSaveCompletion()
                }
                renderLabel() {
                    return i.createElement(st, null, this.props.label)
                }
                handleSaveCompletion() {
                    this.setState({
                        loading: !1
                    })
                }
                mapOptions() {
                    return this.props.options.map((e => ({
                        id: e.id,
                        text: e.text,
                        disabled: !!e.disabled
                    })))
                }
                render() {
                    const {
                        label: e,
                        saveState: t,
                        disabled: o,
                        bottomMargin: r
                    } = this.props, {
                        value: n
                    } = this.state;
                    return i.createElement(at, {
                        className: "intercom-messenger-card-single-select",
                        noBottomMargin: "none" === r
                    }, e ? this.renderLabel() : null, i.createElement(ot.Z, {
                        value: n,
                        key: (0, rt.Z)(JSON.stringify(n)),
                        options: this.mapOptions(),
                        saveState: t,
                        disabled: o,
                        isLoading: this.state.loading,
                        onChange: this.handleOnChange
                    }))
                }
            }
            SingleSelectComponent.defaultProps = {
                disabled: !1,
                bottomMargin: "default"
            };
            var lt = o(18289);
            const ct = (0, l.ZP)("div", {
                    target: "ehkfni70"
                })("display:flex;flex-direction:row;", (({
                    theme: e,
                    saveState: t,
                    disabled: o
                }) => ("saved" === t || o) && (0, l.iv)("color:", e.grey, ";"))),
                dt = (0, l.ZP)("input", {
                    target: "ehkfni71"
                })({
                    name: "12sfay8",
                    styles: "margin:3px 6px 3px 0px;"
                }),
                pt = (0, l.ZP)("label", {
                    target: "ehkfni72"
                })();
            class CheckboxGroupOption extends i.Component {
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        const {
                            id: e,
                            text: t,
                            onClick: o,
                            disabled: r
                        } = this.props;
                        r || o({
                            id: e,
                            text: t
                        })
                    }
                }
                render() {
                    const {
                        id: e,
                        name: t,
                        text: o,
                        isChecked: r,
                        disabled: n,
                        saveState: a
                    } = this.props;
                    return i.createElement(ct, {
                        disabled: n,
                        className: "intercom-messenger-card-checkbox-option"
                    }, i.createElement(dt, {
                        type: "checkbox",
                        id: e,
                        name: t,
                        checked: r,
                        disabled: n || "saved" === a,
                        key: e,
                        onClick: this.handleClick,
                        "aria-disabled": n || "saved" === a,
                        saveState: a
                    }), i.createElement(pt, {
                        htmlFor: e,
                        disabled: n || "saved" === a
                    }, o))
                }
            }
            const mt = (0, l.ZP)("div", {
                target: "e11svia20"
            })();
            class CheckboxGroupAttribute extends i.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        value: this.props.value
                    }, this.handleChange = e => {
                        var t;
                        const {
                            saveState: o,
                            disabled: r
                        } = this.props;
                        if ("saved" === o || "saving" === o || r) return;
                        const i = (null === (t = this.state) || void 0 === t ? void 0 : t.value) || [];
                        let n = [];
                        n = i.some((t => t.id === e.id)) ? i.filter((t => t.id !== e.id)) : [...i, e], this.setState({
                            value: n
                        }), this.props.onChange(n)
                    }
                }
                renderOption(e, t) {
                    const {
                        name: o,
                        disabled: r,
                        isLoading: n,
                        saveState: a
                    } = this.props, {
                        value: s
                    } = this.state;
                    return i.createElement(CheckboxGroupOption, {
                        key: t,
                        name: o,
                        id: e.id,
                        text: e.text,
                        disabled: r || "saved" === a || !!e.disabled,
                        isChecked: !!s && s.some((t => t.id === e.id)),
                        isLoading: n,
                        onClick: this.handleChange,
                        saveState: a
                    })
                }
                renderOptions() {
                    const {
                        options: e,
                        disabled: t
                    } = this.props;
                    return i.createElement(mt, {
                        "aria-disabled": t
                    }, e.map(((e, t) => this.renderOption(e, t))))
                }
                render() {
                    return i.createElement("div", null, this.renderOptions(), "failed" === this.props.saveState && i.createElement(lt.Z, {
                        errorMessage: (0, M.Iu)("something_is_wrong")
                    }))
                }
            }
            var ht = {
                name: "gx0lhm",
                styles: "margin-bottom:0;"
            };
            const ut = (0, l.ZP)("div", {
                    target: "e1goaok30"
                })("margin:0 0 8px;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;", (({
                    noBottomMargin: e
                }) => e && ht), " ", it.e.className, "{position:relative;top:-8px;}"),
                gt = (0, l.ZP)("label", {
                    target: "e1goaok31"
                })({
                    name: "1cjafuu",
                    styles: "display:block;margin-bottom:5px;font-size:14px;line-height:20px;"
                });
            class CheckboxComponent extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.state = this.getDefaultState(), this.handleOnChange = e => {
                        const {
                            id: t,
                            disabled: o,
                            onChange: r
                        } = this.props;
                        o || this.state.loading || (this.setState({
                            value: e
                        }), r(t, e.map((e => e.id))))
                    }
                }
                getDefaultState() {
                    const {
                        options: e,
                        value: t,
                        saveState: o
                    } = this.props;
                    return {
                        value: e.filter((e => t && -1 !== t.indexOf(e.id))),
                        loading: "saving" === o
                    }
                }
                componentDidUpdate() {
                    this.state.loading && "saved" === this.props.saveState && this.handleSaveCompletion()
                }
                renderLabel() {
                    return i.createElement(gt, null, this.props.label)
                }
                handleSaveCompletion() {
                    this.setState({
                        loading: !1
                    })
                }
                mapOptions() {
                    return this.props.options.map((e => ({
                        id: e.id,
                        text: e.text,
                        disabled: !!e.disabled
                    })))
                }
                render() {
                    const {
                        id: e,
                        label: t,
                        saveState: o,
                        disabled: r,
                        bottomMargin: n
                    } = this.props, {
                        value: a
                    } = this.state;
                    return i.createElement(ut, {
                        className: "intercom-messenger-card-checkbox",
                        noBottomMargin: "none" === n
                    }, t ? this.renderLabel() : null, i.createElement(CheckboxGroupAttribute, {
                        value: a,
                        name: e,
                        key: (0, rt.Z)(JSON.stringify(a)),
                        options: this.mapOptions(),
                        saveState: o,
                        disabled: r || "saved" === o,
                        isLoading: this.state.loading,
                        onChange: this.handleOnChange
                    }))
                }
            }
            CheckboxComponent.defaultProps = {
                disabled: !1,
                bottomMargin: "default"
            };
            var bt = o(61274);
            const ft = ({
                onRetry: e
            }) => i.createElement(bt.Z, {
                onRetry: e
            }, (0, M.Iu)("couldnt_load_app"));
            var xt = o(86578),
                vt = o(98953),
                yt = o(11353);

            function wt() {
                return wt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                }, wt.apply(this, arguments)
            }
            const kt = 3 * s.R;
            const Ct = (e, t) => {
                    const o = {};
                    return e.components.map((e => {
                        St(e) && (o[e.id] = function(e, t) {
                            const o = "checkbox" === t.type ? [] : "";
                            let r = e || {};
                            return r.userChanged || (r = {
                                value: t.value || o,
                                userChanged: !1
                            }), r
                        }(t[e.id], e))
                    })), o
                },
                St = e => "input" === e.type || "dropdown" === e.type || "single-select" === e.type || "textarea" === e.type || "checkbox" === e.type;
            class MessengerCardComponentGroup extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        values: Ct(this.props, {}),
                        isGroupLoading: !1,
                        isGroupSaving: !1
                    }, this.handleFormComponentChange = (e, t, o) => {
                        const r = this.state.values;
                        r[e] = {
                            value: t,
                            userChanged: !0
                        }, this.setState({
                            values: r
                        }, o)
                    }, this.handleInputFocus = e => {
                        const {
                            cardUri: t,
                            messengerAppId: o,
                            conversationId: r,
                            currentView: i,
                            isBorderless: n
                        } = this.props;
                        (0, yt.WM)("focused", "input", "messenger_card", i, {
                            conversation_id: r,
                            messenger_app_id: o,
                            messenger_card_uri: t,
                            component_id: e,
                            is_borderless: n
                        })
                    }, this.handleTextAreaFocus = e => {
                        const {
                            cardUri: t,
                            messengerAppId: o,
                            conversationId: r,
                            currentView: i,
                            isBorderless: n
                        } = this.props;
                        (0, yt.WM)("focused", "textarea", "messenger_card", i, {
                            conversation_id: r,
                            messenger_app_id: o,
                            messenger_card_uri: t,
                            component_id: e,
                            is_borderless: n
                        })
                    }, this.handleAction = (e, t, o, r, i) => {
                        const {
                            cardUri: n,
                            messengerAppId: a,
                            conversationId: s,
                            currentView: l,
                            isBorderless: c,
                            m5Enabled: d
                        } = this.props, p = d ? "messenger_app" : o, m = d ? "messenger" : "messenger_card";
                        if ((0, yt.WM)(r, p, m, l, {
                                conversation_id: s,
                                messenger_app_id: a,
                                messenger_card_uri: n,
                                action_type: t.type,
                                component_id: e,
                                is_borderless: c
                            }), "sheet" === t.type && ((0, yt.WM)("viewed", "messenger_sheet", "messenger", l, {
                                conversation_id: s,
                                messenger_app_id: a,
                                messenger_card_uri: n,
                                component_id: e,
                                url: t.url,
                                is_borderless: c
                            }), i)) {
                            const {
                                target: e
                            } = i;
                            e && (0, vt.uP)((() => setTimeout((() => e.focus()), 100)))
                        }
                        var h;
                        this.props.onAction(e, t, (h = this.state.values, Object.keys(h).reduce((function(e, t) {
                            return e[t] = h[t].value, e
                        }), {})))
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return {
                        values: Ct(e, t && t.values ? t.values : {}),
                        isGroupLoading: (0, j.SY)(e.components, "loading", !0),
                        isGroupSaving: (0, j.SY)(e.components, "saveState", "saving")
                    }
                }
                isDisabled(e) {
                    const {
                        isGroupLoading: t,
                        isGroupSaving: o
                    } = this.state;
                    return !0 === e.disabled || t || o
                }
                renderComponent(e, t) {
                    const o = {
                        isFirst: 0 === t,
                        isLast: t === this.props.components.length - 1
                    };
                    switch (e.type) {
                        case "button":
                            return i.createElement(ButtonComponent, wt({}, e, o, {
                                onClick: this.handleAction,
                                disabled: this.isDisabled(e)
                            }));
                        case "text":
                            return i.createElement(TextComponent, wt({}, e, o));
                        case "input":
                            return i.createElement(InputComponent, wt({}, e, o, {
                                onSubmit: this.handleAction,
                                onChange: this.handleFormComponentChange,
                                onFocus: this.handleInputFocus,
                                disabled: this.isDisabled(e),
                                messengerAppId: this.props.messengerAppId
                            }));
                        case "textarea":
                            return i.createElement(TextAreaComponent, wt({}, e, o, {
                                onChange: this.handleFormComponentChange,
                                onFocus: this.handleTextAreaFocus,
                                disabled: this.isDisabled(e)
                            }));
                        case "spacer":
                            return i.createElement(SpacerComponent, e);
                        case "divider":
                            return i.createElement(DividerComponent, wt({}, e, o));
                        case "image":
                            return i.createElement(ImageComponent, wt({}, e, o, {
                                onClick: this.handleAction
                            }));
                        case "list":
                            return i.createElement(ListComponent, wt({}, e, o, {
                                onItemClick: this.handleAction,
                                disabled: this.isDisabled(e)
                            }));
                        case "dropdown":
                            return i.createElement(DropdownComponent, wt({}, e, o, {
                                onChange: this.handleFormComponentChange,
                                disabled: this.isDisabled(e),
                                frameWindow: this.props.frameWindow
                            }));
                        case "single-select":
                            return i.createElement(SingleSelectComponent, wt({}, e, o, {
                                onSubmit: this.handleAction,
                                onChange: this.handleFormComponentChange,
                                disabled: this.isDisabled(e)
                            }));
                        case "data-table":
                            return i.createElement(Ye, wt({}, e, o));
                        case "checkbox":
                            return i.createElement(CheckboxComponent, wt({}, e, o, {
                                onChange: this.handleFormComponentChange,
                                disabled: this.isDisabled(e)
                            }));
                        default:
                            return `Unknown component: ${e.type}`
                    }
                }
                renderError() {
                    return this.props.isContentFetching ? null : i.createElement(T.Kv, {
                        key: "error",
                        classNames: "intercom-messenger-card-component-container",
                        timeout: {
                            enter: kt
                        }
                    }, i.createElement(ft, {
                        onRetry: this.props.getCardContent
                    }))
                }
                renderComponents() {
                    const {
                        components: e
                    } = this.props;
                    return e.length ? i.createElement(T.Kv, {
                        key: "components",
                        classNames: "intercom-messenger-card-component-container",
                        timeout: {
                            enter: kt
                        }
                    }, i.createElement("div", null, e.map(((e, t) => i.createElement("div", {
                        className: "intercom-messenger-card-component",
                        key: (0, j.xv)(e, t)
                    }, this.renderComponent(e, t)))))) : null
                }
                render() {
                    return i.createElement(xt.J, null, i.createElement(T.W3, {
                        exit: !1
                    }, this.props.isContentError ? this.renderError() : this.renderComponents()))
                }
            }
            var Pt = o(24293),
                Et = o(50025);
            const Nt = (0, r.$j)(((e, t) => {
                var o;
                const {
                    cardUri: r
                } = t;
                if (!e.messengerCards) return {};
                const i = e.messengerCards[r];
                if (!i) return {};
                const {
                    card: n
                } = i, a = !!e.borderless.conversationId, {
                    conversationId: s
                } = e.app, l = (0, Et.c0)(e), c = a ? "conversation" : (0, Pt.WP)(e);
                return {
                    cardUri: r,
                    currentView: l ? null === (o = e.router.location) || void 0 === o ? void 0 : o.pathname : c,
                    messengerAppId: (null == n ? void 0 : n.messenger_app_id) || (null == n ? void 0 : n.messengerAppId),
                    conversationId: s,
                    isBorderless: a,
                    m5Enabled: l
                }
            }))(MessengerCardComponentGroup);
            var Bt = o(82517),
                Ot = o(9021);

            function Zt({
                onHeightChange: e,
                children: t
            }) {
                const o = (0, r.v9)(Bt.ho),
                    n = !(0, fe.UK)() && !o;
                return i.createElement(Ot.Z, {
                    onHeightChange: e,
                    disable: n
                }, t)
            }
            var Tt = o(95764);
            const jt = e => e.map(j.xv).join("-");
            class MessengerCardBody extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.node = null, this.handleHeightChange = e => {
                        this.props.onHeightChange(e)
                    }
                }
                componentDidUpdate(e) {
                    if (this.node && (t = e.components, o = this.props.components, -1 === jt(o).indexOf(jt(t)))) {
                        const e = this.node.querySelector('input, button, [role="button"]');
                        if (!e) return;
                        e.focus()
                    }
                    var t, o
                }
                render() {
                    const {
                        cardUri: e,
                        components: t,
                        isContentError: o,
                        isContentFetching: r,
                        isContentFetched: n,
                        onAction: l,
                        getCardContent: c,
                        frameWindow: d,
                        showSpinner: p,
                        messengerAppId: m
                    } = this.props, h = jt(t);
                    return i.createElement(Zt, {
                        onHeightChange: this.handleHeightChange
                    }, i.createElement("div", null, i.createElement(Tt.Z, {
                        appearDelay: s.R,
                        duration: s.R,
                        disableInitialAnimation: n
                    }, p ? i.createElement(a.hp, {
                        key: "spinner"
                    }, i.createElement(L.Z, null)) : i.createElement(Z, {
                        key: h,
                        className: "intercom-messenger-card-body",
                        ref: e => this.node = e
                    }, i.createElement(Nt, {
                        cardUri: e,
                        components: t,
                        isContentError: o,
                        isContentFetching: r,
                        onAction: l,
                        getCardContent: c,
                        frameWindow: d,
                        messengerAppId: m
                    })))))
                }
            }
            MessengerCardBody.defaultProps = {
                isContentError: !1
            };
            const zt = 2 * s.R;
            class MessengerCard extends i.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {}, this.heightChangeTimeout = void 0, this.handleHeightChange = e => {
                        this.setState({
                            height: e
                        })
                    }, this.addReceivedCardMetric = () => {
                        const {
                            cardUri: e,
                            currentView: t,
                            messengerAppId: o,
                            homeScreenIndex: r,
                            conversationId: i,
                            isBorderless: n,
                            m5Enabled: a
                        } = this.props, s = a ? "viewed" : "received", l = a ? "messenger_app_card" : "messenger_card";
                        (0, yt.WM)(s, l, "messenger", t, {
                            messenger_card_uri: e,
                            messenger_app_id: o,
                            home_screen_index: r,
                            conversation_id: i,
                            is_borderless: n
                        })
                    }
                }
                componentDidUpdate(e, t) {
                    const {
                        isContentFetched: o,
                        onHeightChange: r,
                        isBorderless: i
                    } = this.props;
                    o && !e.isContentFetched && this.addReceivedCardMetric(), this.state.height !== t.height && r && i && (this.heightChangeTimeout && clearTimeout(this.heightChangeTimeout), this.heightChangeTimeout = setTimeout(r, zt))
                }
                componentDidMount() {
                    this.props.isContentFetched && this.addReceivedCardMetric()
                }
                renderMessengerCardBody() {
                    const {
                        cardUri: e,
                        components: t,
                        isContentError: o,
                        onAction: r,
                        getCardContent: n,
                        isContentFetching: a,
                        isContentFetched: s,
                        frameWindow: l
                    } = this.props, c = a && !s;
                    return i.createElement(MessengerCardBody, {
                        cardUri: e,
                        isContentError: o,
                        isContentFetched: s,
                        isContentFetching: a,
                        components: t,
                        frameWindow: l,
                        getCardContent: n,
                        onAction: r,
                        onHeightChange: this.handleHeightChange,
                        showSpinner: c
                    })
                }
                render() {
                    const {
                        components: e,
                        isContentFetched: t,
                        m5Enabled: o
                    } = this.props, {
                        height: r
                    } = this.state, s = {
                        height: "" + (null != r ? `${r}px` : "auto")
                    };
                    if (o) {
                        const o = t && (e => {
                            var t;
                            const o = e[0];
                            return 1 === e.length && "list" === o.type && 1 === (null === (t = o.items) || void 0 === t ? void 0 : t.length) && o.items[0].action && !o.items[0].disabled
                        })(e);
                        return i.createElement(n.Z, {
                            as: a.kL,
                            style: s,
                            noPadding: !0,
                            isEntireCardClickable: o,
                            className: "intercom-messenger-card-wrapper"
                        }, this.renderMessengerCardBody())
                    }
                    return i.createElement(a.kL, {
                        style: s,
                        className: "intercom-messenger-card-wrapper"
                    }, this.renderMessengerCardBody())
                }
            }
            var It = o(53602),
                Lt = o(62644),
                Mt = o(28680),
                At = o(99421),
                Ft = o(17462),
                Dt = o(4210),
                _t = o(77011);
            const Wt = ["submit", "url", "open_window", "sheet", "start_tour"],
                Gt = (0, r.$j)(((e, t) => {
                    var o;
                    const {
                        cardUri: r,
                        frameWindow: i,
                        homeScreenIndex: n
                    } = t, a = e.messengerCards[r];
                    if (void 0 === a) return {
                        cardUri: r,
                        isContentFetching: !0,
                        isContentFetched: !1,
                        isContentError: !1,
                        components: []
                    };
                    const {
                        conversationId: s
                    } = e.app, l = !!e.borderless.conversationId, c = (0, Et.c0)(e), d = c ? null === (o = e.router.location) || void 0 === o ? void 0 : o.pathname : (0, Pt.WP)(e) || "conversation", {
                        isContentFetched: p,
                        isContentFetching: m,
                        isContentError: h,
                        card: u
                    } = a;
                    return {
                        cardUri: r,
                        isContentFetched: p,
                        isContentFetching: m,
                        isContentError: h,
                        components: p ? u.canvas.content.components : [],
                        currentView: d,
                        messengerAppId: null == u ? void 0 : u.messenger_app_id,
                        partialCard: a.partialCard,
                        conversationId: s,
                        isBorderless: l,
                        frameWindow: i,
                        homeScreenIndex: n,
                        m5Enabled: c
                    }
                }), (e => ({
                    onAction: (t, o, r, i) => {
                        if (r && -1 !== Wt.indexOf(r.type)) switch (r.type) {
                            case "url":
                                if (!r.url) return;
                                (0, At.WM)(r.url);
                                break;
                            case "open_window":
                                if (!r.url) return;
                                (0, At.d)(r.url);
                                break;
                            case "submit":
                                if (!o) return;
                                e((0, It.UK)(Ft.ZP, t, o, i));
                                break;
                            case "sheet":
                                if (!r.url) return;
                                e("article-link" === o ? (0, _t.oW)(r.url, !1) : (0, Lt.$y)(Ft.ZP, t, o, r.url, i));
                                break;
                            case "start_tour":
                                if (!o) return;
                                e((0, Dt.c_)(o))
                        }
                    },
                    getCardContent: t => {
                        e((0, Mt.YS)(Ft.ZP, t))
                    }
                })), ((e, t, o) => Object.assign({}, o, e, t, {
                    onAction: (o, r, i) => {
                        const {
                            cardUri: n,
                            isFetching: a
                        } = e;
                        a || t.onAction(n, o, r, i)
                    },
                    getCardContent: () => {
                        t.getCardContent(e.partialCard)
                    }
                })))(MessengerCard)
        },
        97681: (e, t, o) => {
            o.d(t, {
                Z: () => ne
            });
            var r = o(37424),
                i = o(99321),
                n = o(23279),
                a = o.n(n),
                s = o(67294),
                l = o(3997),
                c = o(54874);

            function d(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(o), !0).forEach((function(t) {
                        m(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function m(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var h = o(67690);

            function u(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(o), !0).forEach((function(t) {
                        b(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function b(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const f = e => g(g(g({}, e), (e => {
                const t = {
                    white: "#ffffff",
                    black: "#000000",
                    grey: "#737376",
                    lightGrey1: "#bcbcbc",
                    lightGrey2: "#d2d7db",
                    lightGrey3: "#e1e1e1",
                    lightGrey4: "#e6e6e6",
                    lightGrey5: "#f5f5f5",
                    lightGrey6: "#f8f8f8",
                    lightGrey7: "#fafafa",
                    lightGrey8: "#eeeeee",
                    lightGrey9: "#adadad",
                    lightGrey10: "#e5e5e5",
                    lightGrey11: "#F2F2F2",
                    lightGrey12: "#767676",
                    darkGrey: "#686868",
                    darkGrey1: "#333333",
                    inputGrey: "#737373",
                    red: "#D22628",
                    lightRed1: "#df0c1f",
                    lightRed2: "#fbdbdb",
                    lightRed3: "#fef0f0",
                    badgeRed: "#FF4C4C",
                    green: "#39C089",
                    timelineBlue: "#0057FF",
                    timelineOrange: "#CD4D12",
                    timelineGreen: "#0D7532",
                    installBlue: "#286efa",
                    installDarkBlue: "#0549d1",
                    installGrey1: "#888888",
                    installGrey2: "#8da2b5",
                    installGrey3: "#dde5ed",
                    installDarkGrey: "#8ca2b6",
                    installRed: "#fd3a57",
                    installGreen: "#17c65d",
                    blue: "#334bfa",
                    m5lightGrey2: "#F1F1F1",
                    m5lightGrey4: "#757575",
                    m5lightGrey5: "#808080",
                    m5lightGrey6: "#F9F9F9",
                    m5lightGrey8: "#F7F7F7",
                    m5DarkGrey1: "#222222",
                    m5DarkGrey2: "#1A1A1A",
                    m5HeaderButton: "rgba(255, 255, 255, 0.2)",
                    clear: "rgba(255, 255, 255, 0.0)",
                    currentColor: "currentColor"
                };
                return p(p({}, t), {}, {
                    appColor: e.primaryColor,
                    appSecondaryColor: e.secondaryColor,
                    appColorLight: (0, c.Bw)(t.white, .8),
                    appColorSemiTransparent: (0, c.Bw)(e.primaryColor, .5),
                    appColorSemiTransparent30: (0, c.Bw)(e.primaryColor, .3),
                    appColorDark: (0, c._j)(e.primaryColor, 15.5),
                    appColorDarker: (0, c._j)(e.primaryColor, 21.5),
                    headerText: t.white,
                    subheaderText: t.grey,
                    summaryText: t.black,
                    bodyText: t.black,
                    metaText: t.grey,
                    errorText: t.red,
                    errorTextMuted: t.grey,
                    listDisabled: t.grey,
                    participantText: t.grey,
                    inputBorder: t.lightGrey3,
                    inputBackground: t.lightGrey7,
                    inputPlaceholder: t.grey,
                    inputText: t.black,
                    previewText: t.grey,
                    inputButtonSubmitIcon: e.buttonTextColor,
                    inputButtonSuccessIcon: t.green,
                    disabledInputBorder: t.lightGrey1,
                    disabledInputButtonBackground: t.lightGrey8,
                    disabledInputText: t.lightGrey1,
                    disabledInputSubmitIcon: t.lightGrey1,
                    submittedInputText: t.grey,
                    invalidInputBackground: t.lightRed3,
                    invalidInputBorder: t.lightRed2,
                    invalidInputText: t.red,
                    textareaBorder: t.lightGrey3,
                    textareaBackground: t.lightGrey7,
                    textareaPlaceholder: t.grey,
                    textareaText: t.black,
                    disabledTextareaBorder: t.lightGrey1,
                    invalidTextareaBackground: t.lightRed3,
                    invalidTextareaBorder: t.lightRed2,
                    invalidTextareaText: t.red,
                    disabledButtonBackground: t.lightGrey2,
                    disabledButtonText: t.lightGrey1,
                    disabledButtonBorder: t.lightGrey1,
                    m5DisabledButtonBackground: (0, c.Bw)(e.primaryColor, .1),
                    m5DisabledButtonText: (0, c.Bw)(e.primaryColor, .12),
                    m5LoadingButtonBackground: t.m5lightGrey2,
                    m5LoadingButtonText: t.m5lightGrey4,
                    m5HoverButtonBackground: (0, c.$n)(e.primaryColor, 10),
                    m5ButtonShadow: (0, c.Bw)(e.primaryColor, .3),
                    collectionBorderColor: t.lightGrey3,
                    collectionHeaderBackground: t.m5lightGrey6,
                    collectionCardText: t.darkGrey,
                    labelTextColor: e.isPrimaryColorLight ? t.black : e.primaryColor,
                    labelBackgroundColor: e.isPrimaryColorLight ? (0, c.Bw)(t.black, .1) : (0, c.Bw)(e.primaryColor, .1),
                    avatarBackgroundColor: e.avatarBackgroundColor,
                    unreadDot: t.red,
                    unreadCountBackground: t.installRed,
                    unreadCountLabel: t.white,
                    unreadBackground: (0, c.Bw)(e.primaryColor, .08),
                    unreadBackgroundLight: (0, c.Bw)(t.black, .05),
                    backgroundHover: e.isPrimaryColorLight ? (0, c.Bw)(t.black, .08) : (0, c.Bw)(e.primaryColor, .12),
                    adminCommentBackground: t.lightGrey11,
                    dividerBorder: t.lightGrey8,
                    attachmentListBorder: t.lightGrey4,
                    weRunOnIntercomText: "#777678",
                    codeBlockBackground: t.lightGrey11,
                    itemHover: t.lightGrey7,
                    itemActive: t.lightGrey6,
                    overlayColor: (0, c.Bw)(t.black, .35),
                    composerBorder: t.lightGrey4,
                    progressBarFilled: e.isPrimaryColorLight ? t.grey : e.primaryColor,
                    attributeButtonColor: e.isPrimaryColorLight ? t.grey : e.primaryColor,
                    attributeButtonHoverColor: e.isPrimaryColorLight ? t.lightGrey3 : (0, c.Bw)(e.primaryColor, .2),
                    attributeButtonActiveColor: e.isPrimaryColorLight ? t.lightGrey1 : (0, c.Bw)(e.primaryColor, .4),
                    listItemHover: (0, c.Bw)(e.primaryColor, .06),
                    listItemDivider: (0, c.Bw)(t.black, .06),
                    headerTextShadowLight: (0, c.Bw)(t.black, .3),
                    headerTextShadowDark: (0, c.Bw)(t.white, .3),
                    lightBorder: (0, c.Bw)(t.black, .08),
                    headerButtonHoverBackgroundColor: "rgba(0, 0, 0, 0.2)",
                    headerButtonHoverBackgroundColorOnWhite: e.isPrimaryColorLight ? (0, c.Bw)(t.black, .08) : (0, c.Bw)(e.primaryColor, .12),
                    lightButtonOutlineHoverColor: "rgba(0,0,0,0.15)",
                    finAnswerCardTextColor: "rgba(0,0,0,0.6)",
                    checklistMainColor: e.isPrimaryColorLight ? t.m5DarkGrey1 : e.primaryColor,
                    conversationHeaderDivider: e.isSecondaryColorLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
                    specialNoticeIcon: "#999999"
                })
            })(e)), (0, h.ZP)(e));
            var x = o(83605),
                v = o(99267),
                y = o(24514),
                w = o(20901),
                k = o.n(w),
                C = o(43832),
                S = o.n(C),
                P = o(67592);
            const E = -1,
                N = (e, t) => {
                    if (e === E) return S().transform(t)
                },
                B = (0, y.default)((e => (0, v.default)({
                    key: "intercom",
                    container: e
                }))),
                O = (0, y.default)((e => (0, v.default)({
                    key: "intercom",
                    container: e,
                    stylisPlugins: [N]
                }))),
                Z = (0, y.default)((e => (0, v.default)({
                    key: "intercom",
                    container: e,
                    stylisPlugins: [k()(".intercom-namespace")]
                })));

            function T(e) {
                const {
                    target: t,
                    locale: o,
                    isSandbox: r,
                    children: i
                } = e;
                let n;
                return n = r ? (0, P.jZ)(o) ? O(t) : B(t) : Z(t), s.createElement(x.CacheProvider, {
                    value: n
                }, i)
            }
            var j = o(16315),
                z = o(38712),
                I = o(50700);
            const L = "https://fonts.intercomcdn.com/messenger-m4",
                M = `${L}/proximanova-regular.woff`,
                A = `${L}/proximanova-semibold.woff`,
                F = `${L}/proximanova-regular-italic.woff`,
                D = `${L}/proximanova-semibold-italic.woff`,
                _ = () => (0, I.iv)("@font-face{font-family:'intercom-font';font-display:", "swap", ";src:url('", M, "') format('woff');}@font-face{font-family:'intercom-font';font-display:", "swap", ";src:url('", A, "') format('woff');font-weight:bold;}@font-face{font-family:'intercom-font';font-display:", "swap", ";src:url('", F, "') format('woff');font-style:italic;}@font-face{font-family:'intercom-font';font-display:", "swap", ";src:url('", D, "') format('woff');font-weight:bold;font-style:italic;}"),
                W = e => (0, I.iv)("font-family:", e.fontSansSerif, ";font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:normal;text-align:left;text-align-last:initial;text-decoration:none;text-emphasis:none;text-indent:0;text-justify:auto;text-shadow:none;text-transform:none;text-wrap:normal;"),
                G = e => (0, I.iv)("a,a:visited,.intercom-anchor{color:", e.linkColor, ";cursor:pointer;}a:hover,.intercom-anchor:hover{color:", e.linkColorHover, ";}a:active,.intercom-anchor:active{color:", e.linkColorActive, ";}");
            var U = {
                name: "yrqfbx",
                styles: "@media print{.intercom-app{display:none;}}"
            };
            var R = o(93893);
            const H = e => (0, I.iv)("*:focus,.intercom-messenger:focus:after{outline-color:", R.L[e], ";}.intercom-launcher:focus{outline:none;box-shadow:inset 0 0 0 5px ", R.L[e], ";}"),
                V = e => {
                    return (0, I.iv)(e.tabNavigation && (0, I.iv)("*:focus{outline-style:solid;outline-style:auto;outline-width:5px;}", H(e.accessibilityTheme), " ", (t = e.secondaryAccessibilityTheme, (0, I.iv)(".intercom-messenger-sheet-header,.intercom-messenger-header{", H(t), "}"))), " @media (-ms-high-contrast:active){.intercom-launcher{background:black;border:1px solid white;}[role='button'],button{border:1px solid white !important;background:black !important;color:white !important;&:hover,&:focus,&:active{border:1px solid white !important;background:black !important;color:white !important;}*{color:white !important;}}}");
                    var t
                },
                q = e => (0, I.iv)(_(), " ", (e => (0, I.iv)("div,span,iframe{", W(e), " alignment-baseline:baseline;animation:none 0 ease 0 1 normal;animation-play-state:running;appearance:normal;azimuth:center;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;bookmark-label:content();bookmark-level:none;bookmark-state:open;border:0 none transparent;border-radius:0;bottom:auto;box-decoration-break:slice;box-shadow:none;box-sizing:content-box;break-after:auto;break-before:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium medium #1f1f1f;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;elevation:level;empty-cells:show;float:none;float-offset:0 0;hanging-punctuation:none;height:auto;hyphenate-character:auto;hyphens:manual;image-orientation:auto;image-rendering:auto;image-resolution:normal;left:auto;line-height:inherit;list-style:disc outside none;margin:0;marks:none;max-height:none;max-width:none;min-height:0;min-width:0;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:invert none medium;outline-offset:0;overflow:visible;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:none;resize:none;right:auto;ruby-align:auto;ruby-overhang:none;ruby-position:before;size:auto;string-set:none;table-layout:auto;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;-ms-filter:'progid:DXImageTransform.Microsoft.gradient(enabled=false)';-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*:focus:not(:focus-visible){outline:none;}div,frame{display:block;}.intercom-app{line-height:1;}select{", W(e), "}"))(e), " ", U, " ", G(e)),
                $ = e => (0, I.iv)(_(), " ", (e => (0, I.iv)("html{", W(e), " box-sizing:content-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-ms-filter:'progid:DXImageTransform.Microsoft.gradient(enabled=false)';line-height:1;}button,textarea,input,iframe{", W(e), " margin:0;padding:0;appearance:normal;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;border:none;border-radius:0;box-sizing:content-box;line-height:inherit;color:inherit;min-width:0;}a{", W(e), " line-height:inherit;}p{margin:0;padding:0;}h1,h2,h3,h4,h5,h6{", W(e), " margin:0;padding:0;line-height:inherit;}ol,ul,li{", W(e), " margin:0;padding:0;display:block;}li{display:list-item;}b,strong{font-weight:590;}b > i,strong > i,b > em,strong > em,i > b,i > strong,em > b,em > strong{font-weight:bold;font-style:italic;}textarea,input{cursor:text;}textarea::selection,input::selection{background-color:#b3d4fc;}textarea::placeholder,input::placeholder{", W(e), " background-color:inherit;color:inherit;}input[type='checkbox'],input[type='radio']{cursor:default;}pre{", W(e), " margin:0;padding:0;}img{height:auto;}a,a *,a span,button,button *,button span,input[type='submit'],input[type='reset']{cursor:pointer;}*:focus{outline:none;}a:link,a:visited,a:hover,a:active{color:inherit;background:transparent;text-shadow:none;}button::-moz-focus-inner{border:0;padding:0;}#intercom-container-body{overflow:hidden;}#intercom-container-body.intercom-container-body-no-margin{margin:0;}"))(e), " ", G(e), " ", V(e)),
                K = () => (0, I.iv)((0, I.iv)("html.intercom-mobile-messenger-active,html.intercom-mobile-messenger-active > body,html.intercom-modal-open,#intercom-container-body{overflow:hidden !important;}html.intercom-mobile-messenger-active,html.intercom-mobile-messenger-active > body{position:static !important;transform:none !important;}html.intercom-mobile-messenger-active > body{height:0 !important;margin:0 !important;}html.intercom-mobile-messenger-active.intercom-mobile-messenger-ios-15 > body{height:100vh !important;}iframe#intercom-frame{position:absolute !important;opacity:0 !important;width:1px !important;height:1px !important;top:0 !important;left:0 !important;border:none !important;display:block !important;z-index:-1 !important;", (0, j.G6)() && "\n      visibility: hidden;\n    ", "}")),
                Y = e => {
                    const {
                        theme: t,
                        isSandbox: o
                    } = e;
                    return o ? s.createElement(I.xB, {
                        styles: $(t)
                    }) : s.createElement(s.Fragment, null, s.createElement(I.xB, {
                        styles: q(t)
                    }), s.createElement("style", null, `${K().styles}`))
                };
            var X = o(59339),
                J = o(7261);

            function Q(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(o), !0).forEach((function(t) {
                        te(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Q(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function te(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var r = o.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const oe = {},
                re = e => {
                    const {
                        isSandbox: t,
                        children: o,
                        target: r,
                        locale: i
                    } = e, [n, c] = s.useState((0, j.K1)()), [d, p] = s.useState((0, z.UK)()), m = ee(ee(ee({}, s.useContext(X.Ni)), (e => {
                        const {
                            locale: t,
                            isLauncherEnabled: o,
                            tabNavigation: r,
                            accessibilityTheme: i,
                            secondaryAccessibilityTheme: n,
                            isLightweightAppActive: a
                        } = e;
                        return {
                            locale: t,
                            isLauncherEnabled: o,
                            tabNavigation: r,
                            accessibilityTheme: i,
                            secondaryAccessibilityTheme: n,
                            isLightweightAppActive: a
                        }
                    })(e)), {}, {
                        isMobileBrowser: n,
                        isMobileSize: d
                    }), h = (u = m, Object.values(u).filter((e => ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) && e)).join(""));
                    var u;
                    const g = oe[h] || f(m);
                    return oe[h] || (oe[h] = g), s.useEffect((() => {
                        const e = a()((() => {
                            c((0, j.K1)()), p((0, z.UK)())
                        }), 150);
                        return (0, J.f4)(e), () => (0, J.VP)(e)
                    }), []), s.createElement(T, {
                        target: r,
                        isSandbox: t,
                        locale: i
                    }, s.createElement(l.f6, {
                        theme: g
                    }, s.createElement(Y, {
                        theme: g,
                        isSandbox: t
                    }), o))
                };
            re.defaultProps = {
                isSandbox: !0
            };
            const ie = re,
                ne = (0, r.$j)((e => {
                    var t;
                    const o = e.user ? e.user.locale : "en",
                        r = (0, i.Z)(e),
                        {
                            accessibility: {
                                tabNavigation: n = !1,
                                accessibilityTheme: a = "default",
                                secondaryAccessibilityTheme: s = "default"
                            } = {}
                        } = e;
                    return {
                        locale: o,
                        isLauncherEnabled: r,
                        tabNavigation: n,
                        accessibilityTheme: a,
                        secondaryAccessibilityTheme: s,
                        isLightweightAppActive: (null === (t = e.lightweightApp) || void 0 === t ? void 0 : t.isActive) || !1
                    }
                }))(ie)
        },
        84127: (e, t, o) => {
            o.d(t, {
                Z: () => s
            });
            var r = o(37424),
                i = o(59339),
                n = o(6186),
                a = o(50025);
            const s = (0, r.$j)((e => {
                const {
                    color: t,
                    secondaryColor: o,
                    alignment: r,
                    horizontalPadding: i,
                    verticalPadding: s
                } = (0, n.q)(e);
                return {
                    primaryColor: t,
                    secondaryColor: o,
                    alignment: r,
                    horizontalPadding: i,
                    verticalPadding: s,
                    m5Enabled: (0, a.c0)(e),
                    platform: "web"
                }
            }))(i.ZP)
        },
        66318: (e, t, o) => {
            o.d(t, {
                ZP: () => v
            });
            var r = o(37424),
                i = o(67294),
                n = o(23493),
                a = o.n(n),
                s = o(16315),
                l = o(9688);
            const c = ["mousemove", "click", "keyup", "focus"],
                d = ["blur"];
            let p = 5e3,
                m = 0;

            function h(e, t, o) {
                const {
                    document: r
                } = e;
                let i = !1;
                const n = a()((() => {
                        m = Date.now(), i || (t(), i = !0)
                    }), 1e3),
                    h = () => {
                        i && (o(), i = !1)
                    },
                    b = () => {
                        ! function(e) {
                            return !s.ZP.hasVisibilitySupport() || l.ZN(e)
                        }(r) ? h(): n()
                    };
                u(c, r, n), u(d, e, h),
                    function(e, t) {
                        if (!s.ZP.hasVisibilitySupport()) return;
                        const o = l.hR();
                        if (!o) return;
                        l.Oo(e, o, t)
                    }(r, b);
                const f = setInterval((() => {
                    const e = Date.now() - m;
                    !i || e < p || h()
                }), p);
                return () => {
                    g(c, r, n), g(d, e, h),
                        function(e, t) {
                            if (!s.ZP.hasVisibilitySupport()) return;
                            const o = l.hR();
                            if (!o) return;
                            l.xg(e, o, t)
                        }(r, b), clearInterval(f)
                }
            }

            function u(e, t, o) {
                e.forEach((e => l.Oo(t, e, o)))
            }

            function g(e, t, o) {
                e.forEach((e => l.xg(t, e, o)))
            }
            var b = o(52567),
                f = o(25081);
            class UserPresence extends i.Component {
                constructor(...e) {
                    super(...e), this.stop = void 0, this.hadAnonymousId = !1, this.onUserPresent = () => {
                        this.props.onUserPresent(), this.checkIfSessionHasChanged()
                    }
                }
                componentDidMount() {
                    const {
                        appWindow: e,
                        onUserAbsent: t
                    } = this.props;
                    this.stop = h(e, this.onUserPresent, t)
                }
                componentWillUnmount() {
                    this.stop()
                }
                checkIfSessionHasChanged() {
                    this.props.session && this.props.session.appId && (this.checkIfCookiesHasBeenDestroyed(), this.checkIfAnonymousSessionHasBeenChanged())
                }
                checkIfAnonymousSessionHasBeenChanged() {
                    if (!this.props.session) return;
                    const {
                        appId: e,
                        anonymousSession: t
                    } = this.props.session, o = b.Z.read((0, f.Fj)(e));
                    o && t !== o && this.props.onAnonymousSessionChanged(o)
                }
                checkIfCookiesHasBeenDestroyed() {
                    const {
                        session: e,
                        destroySession: t
                    } = this.props;
                    if (!e || !t) return;
                    const {
                        appId: o
                    } = e, r = b.Z.read((0, f.j8)(o));
                    if (!r && this.hadAnonymousId) return t(!0);
                    this.hadAnonymousId = !!r
                }
                render() {
                    return null
                }
            }
            var x = o(30200);
            const v = (0, r.$j)((e => {
                const {
                    session: t
                } = e;
                return {
                    session: t
                }
            }), (e => ({
                onUserPresent: () => {
                    e((0, x.lx)())
                },
                onUserAbsent: () => {
                    e((0, x.lq)())
                },
                onAnonymousSessionChanged: t => {
                    e((0, x.ux)(t))
                }
            })))(UserPresence)
        },
        29380: (e, t, o) => {
            o.d(t, {
                By: () => l,
                Ho: () => p,
                Mo: () => c,
                kl: () => d,
                py: () => s
            });
            var r = o(57415),
                i = o.n(r);
            let n, a = null;
            const s = (e, t, o, r, n) => {
                    let a = e;
                    return r ? n && (a = i().substituteUnicodeForAsciiEmojis(a)) : a = i().fallbackImage(t, a, o), a
                },
                l = e => i().isSupportedAscii(e) ? i().unicodeFromAscii(e) : e,
                c = () => {
                    if (void 0 === n) try {
                        n = i().hasNativeSupport(document)
                    } catch (e) {
                        return !1
                    }
                    return n
                },
                d = e => {
                    try {
                        return i().identifierFromUnicode(e).replace(/(_|-)/gi, " ")
                    } catch (e) {
                        return ""
                    }
                },
                p = ({
                    useFallback: e = !1,
                    rebuild: t = !1
                } = {}) => {
                    if (null !== a && !t) return a;
                    const {
                        allEmoticonsIdentifierList: o,
                        unicodeFromIdentifier: r
                    } = i();
                    return a = o.sort().map((t => {
                        let o = r(t);
                        return !c() && e && (o = i().fallbackImage(16, o, "emoji-fallback-image")), {
                            title: t,
                            emoji: o
                        }
                    })), a
                }
        },
        71691: (e, t, o) => {
            o.d(t, {
                Fh: () => c,
                if: () => s,
                ig: () => l,
                t5: () => a
            });
            var r = o(67592),
                i = o(95351),
                n = o(38049);

            function a(e) {
                return null === e ? null : "object" == typeof e && e.label ? e.label.toString() : Array.isArray(e) ? e : e.toString()
            }

            function s(e, t) {
                var o;
                const n = (0, r.Kd)();
                switch (t) {
                    case "datetime":
                        return null === (o = (0, i.Ft)(parseInt(e))) || void 0 === o ? void 0 : o.toLocaleString(n, {
                            dateStyle: "long",
                            timeStyle: "short"
                        });
                    case "boolean":
                        return "true" === e ? (0, r.Iu)("attribute_collector_positive") : (0, r.Iu)("attribute_collector_negative");
                    default:
                        return e
                }
            }

            function l(e, t = !1) {
                const o = `/${n.Yu.id}/tickets/${e}`;
                return t ? `${o}?submitted=true` : o
            }

            function c(e) {
                return `/${n.Yu.id}/tickets/create/${e.toString()}`
            }
        },
        99421: (e, t, o) => {
            o.d(t, {
                WM: () => a,
                d: () => s,
                nG: () => c
            });
            var r = o(16315),
                i = o(50254);
            let n = null;
            const a = e => {
                    m(e) && (l(e) ? d(e) : h() ? window.open(e) : (e => {
                        var t;
                        const o = parent.window.open();
                        o && (o.opener = null, null === (t = o.location) || void 0 === t || t.assign(e))
                    })(e))
                },
                s = e => {
                    m(e) && (l(e) ? d(e) : h() ? null == n || n.closed ? n = window.open(e, "popup,width=400,height=400") : n.focus() : null == n || n.closed ? n = window.open(e, "VideoCallPopup", "width=500, height=400") : n.focus())
                },
                l = e => {
                    let t;
                    try {
                        t = new URL(e)
                    } catch (e) {
                        return !1
                    }
                    return "intercom:" === t.protocol
                },
                c = e => {
                    const t = e.getAttribute("href"),
                        o = e.getAttribute("data-via") || t,
                        {
                            Intercom: r
                        } = window.parent;
                    if (e.className.split(" ").indexOf("intercom-link-card") >= 0) return !1;
                    if ((e => e.getAttribute("data-link-type") === i.f && e.getAttribute("data-link-id"))(e)) {
                        return r("showArticle", e.getAttribute("data-link-id")), !0
                    }
                    return l(t) ? (e.removeAttribute("target"), d(t), o !== t && p(o), !0) : (0 === t.indexOf("mailto:") || (e.setAttribute("href", o), e.setAttribute("target", "_blank")), !1)
                },
                d = e => {
                    const [t, o, r] = new RegExp(/v1\/(.*)+\/([0-9]+)/i).exec(e);
                    let i;
                    switch (o) {
                        case "survey":
                            i = "startSurvey";
                            break;
                        case "checklist":
                            i = "startChecklist";
                            break;
                        case "tour":
                            i = "startTour";
                            break;
                        case "article":
                            i = "showArticle";
                            break;
                        case "news":
                            i = "showNews";
                            break;
                        default:
                            return
                    }
                    const {
                        Intercom: n
                    } = window.parent;
                    "checklist" !== o && n("hide"), n(i, r)
                },
                p = async e => {
                    !1 in window || await fetch(e, {
                        mode: "no-cors"
                    })
                },
                m = e => null != e && "" !== e,
                h = () => r.ZP.isElectron() || r.ZP.isNativeMobile() || r.ZP.isIOSFirefox()
        },
        73071: (e, t, o) => {
            o.d(t, {
                Z: () => i
            });
            var r = o(67294);

            function i(e, t) {
                const o = (0, r.useRef)(null);

                function i() {
                    o.current && clearTimeout(o.current)
                }(0, r.useEffect)((() => (i(), o.current = setTimeout(e, t), i)), [e, t])
            }
        },
        85332: (e, t, o) => {
            o.d(t, {
                Z: () => n
            });
            var r = o(67294);
            const i = 100;

            function n() {
                const [e, t] = (0, r.useState)({
                    width: -1,
                    height: -1,
                    top: -1
                }), o = (0, r.useRef)(null), n = (0, r.useCallback)((() => {
                    const e = o.current;
                    if (!e || e instanceof Text) return;
                    const {
                        width: r,
                        height: i,
                        top: n
                    } = e.getBoundingClientRect();
                    t({
                        width: r,
                        height: i,
                        top: n
                    })
                }), [o]);
                return (0, r.useLayoutEffect)((() => {
                    n();
                    const e = setInterval(n, i);
                    return () => clearInterval(e)
                }), [n]), [e, o]
            }
        },
        34335: (e, t, o) => {
            o.d(t, {
                D: () => i
            });
            var r = o(67294);

            function i(e) {
                const t = (0, r.useRef)();
                return (0, r.useEffect)((() => {
                    t.current = e
                })), t.current
            }
        },
        94085: (e, t, o) => {
            o.d(t, {
                Z: () => c
            });
            var r = o(67294),
                i = o(23279),
                n = o.n(i),
                a = o(16315);
            const s = 100,
                l = async () => (0, a._x)() ? ResizeObserver : await o.e(1216).then(o.t.bind(o, 32018, 23)).then((e => e.default));

            function c(e, t, o = s) {
                const i = (0, r.useRef)(null);
                (0, r.useEffect)((() => {
                    (async () => {
                        const e = await l();
                        i.current = new e(n()(t, o))
                    })()
                }), [i, t, o]), (0, r.useEffect)((() => {
                    var t;
                    if (e) return null == i || null === (t = i.current) || void 0 === t || t.observe(e), () => {
                        var e;
                        return null == i || null === (e = i.current) || void 0 === e ? void 0 : e.disconnect()
                    }
                }), [i, e])
            }
        },
        65547: (e, t, o) => {
            o.d(t, {
                Z: () => FocusTrap
            });
            var r = o(9688);
            const i = () => !1,
                n = () => null;
            class FocusTrap {
                constructor({
                    document: e,
                    firstElement: t,
                    lastElement: o,
                    disableStartingTrap: a,
                    disableEndingTrap: s,
                    windowToTrapFocusWithin: l
                }) {
                    this.document = void 0, this.windowToTrapFocusWithin = void 0, this.firstElement = void 0, this.lastElement = void 0, this.disableStartingTrap = void 0, this.disableEndingTrap = void 0, this.focusableElements = null, this.handleWindowFocusTrap = () => {
                        setTimeout((() => this.focusableElements && this.focusableElements[0].focus()), 1)
                    }, this.handleFocusTrap = e => {
                        const {
                            focusableElements: t,
                            firstElement: o,
                            lastElement: i,
                            disableEndingTrap: n,
                            disableStartingTrap: a
                        } = this;
                        if (!t || !t.length || e.keyCode !== r.tW.TAB) return;
                        const s = t[0],
                            l = t[t.length - 1],
                            c = e.shiftKey;
                        return l !== e.srcElement || c || n() ? s === e.srcElement && c && !a() ? (e.preventDefault(), (i() || l).focus()) : void 0 : (e.preventDefault(), (o() || s).focus())
                    }, this.document = e, this.firstElement = t || n, this.lastElement = o || n, this.disableStartingTrap = a || i, this.disableEndingTrap = s || i, this.windowToTrapFocusWithin = l, this.focusableElements = (0, r._S)(this.document), (0, r.Oo)(this.document, "keydown", this.handleFocusTrap), this.windowToTrapFocusWithin && (0, r.Oo)(this.windowToTrapFocusWithin, "blur", this.handleWindowFocusTrap)
                }
                recalculateFocusableElements() {
                    this.focusableElements = (0, r._S)(this.document)
                }
                restore() {
                    this.document && (0, r.xg)(this.document, "keydown", this.handleFocusTrap), this.windowToTrapFocusWithin && (0, r.xg)(this.windowToTrapFocusWithin, "blur", this.handleWindowFocusTrap)
                }
            }
        },
        436: (e, t, o) => {
            o.d(t, {
                G: () => r
            });
            o(50700);
            const r = {
                name: "n1yf9",
                styles: "overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;&:last-child{margin-bottom:0 !important;}"
            }
        },
        26677: (e, t, o) => {
            o.d(t, {
                Z: () => x
            });
            var r = o(50700),
                i = o(14877),
                n = o(60293),
                a = o(53238),
                s = o(10393),
                l = o(95345),
                c = o(44265),
                d = o(95486),
                p = o(88553),
                m = o(58273),
                h = o(67900),
                u = o(30849),
                g = o(40414),
                b = o(436),
                f = {
                    name: "xi606m",
                    styles: "text-align:center;"
                };
            const x = (0, r.ZP)(i.Z, {
                target: "e1z0ml3b0"
            })(b.G, " font-size:22px;font-weight:bold;padding-bottom:12px;line-height:1.14;", (({
                centered: e
            }) => e && f), " ", s.om.className, " &,", l.c.className, " &,", h.U0.className, " &,", u.kA.className, " &,", n.WG.className, " &,", a.y.className, " &,", p.U$.className, " &,", m.K2.className, " &{color:", (0, r.rS)("appColor"), ";font-weight:normal;}", s.om.className, " &,", h.U0.className, " &,", u.kA.className, " &{font-size:33px;line-height:1.24;margin:0 ", (0, r.rS)("postMarginPercent"), "% 30px;}", a.y.className, " &,", l.c.className, " &{font-size:20px;line-height:1.33;margin:0 0 10px 0;}", g.Ow.className, " &{font-size:2em;line-height:20px;margin-block-start:unset;margin-block-end:unset;", (({
                color: e
            }) => !!e && (0, r.iv)("color:", e, ";")), " ", (({
                fontFamily: e
            }) => !!e && (0, r.iv)("font-family:", e, ";")), "}", n.WG.className, " &,", m.K2.className, " &,", p.U$.className, " &{font-size:24px;line-height:1.33;margin:0 ", (0, r.rS)("noteMarginPercent"), "% 14px;}.intercom-tour-step-post &{margin:0 ", (0, r.rS)("tourPostMarginPx"), "px 14px;}", c.W.className, " &,", d.b8.className, " &{font-size:14px;color:", (0, r.rS)("bodyText"), ";margin:0 ", (0, r.rS)("chatMarginPx"), "px 10px;line-height:1.33;}", h.U0.className, " &,", u.kA.className, " &{font-size:22px;font-weight:normal;line-height:1.24;margin:0 ", (0, r.rS)("postMarginPercent"), "% 17px;color:", (0, r.rS)("bodyText"), ";a{text-decoration:underline;&:hover,&:focus,&:active{text-decoration:none;}}}", u.kA.className, " &{margin:0;}")
        },
        38401: (e, t, o) => {
            o.d(t, {
                P: () => n
            });
            var r = o(50700),
                i = o(81449);
            const n = (0, r.ZP)(i.C, {
                target: "emy1bmr0"
            })({
                name: "8atqhb",
                styles: "width:100%;"
            })
        },
        52943: (e, t, o) => {
            o.d(t, {
                S: () => y
            });
            var r = o(50700),
                i = o(14877),
                n = o(60293),
                a = o(53238),
                s = o(67900),
                l = o(30849),
                c = o(10393),
                d = o(95345),
                p = o(44265),
                m = o(95486),
                h = o(88553),
                u = o(58273),
                g = o(40414),
                b = o(436),
                f = {
                    name: "mgww5h",
                    styles: "margin:0 0 10px;"
                },
                x = {
                    name: "18jip5v",
                    styles: "margin:0;min-height:10px;"
                },
                v = {
                    name: "xi606m",
                    styles: "text-align:center;"
                };
            const y = (0, r.ZP)(i.Z, {
                target: "e16pl8n50"
            })(b.G, " ", (({
                align: e
            }) => "center" === e && v), " ", n.WG.className, " &,", a.y.className, " &,", u.K2.className, " &,", s.U0.className, " &,", l.kA.className, " &,", c.om.className, " &,", d.c.className, " &,", p.W.className, " &,", m.b8.className, " &{color:", (0, r.rS)("bodyText"), ";}", n.WG.className, " &,.intercom-tour-step-pointer &{font-size:14px;line-height:", (0, r.rS)("noteBodyLineHeight"), ";margin:0 ", (0, r.rS)("noteMarginPercent"), "% 10px;}", u.K2.className, " &{font-size:14px;line-height:", (0, r.rS)("noteBodyLineHeight"), ";margin:0 0 10px;}.intercom-tour-step-post &{margin:0 ", (0, r.rS)("tourPostMarginPx"), "px 10px;}", g.Ow.className, " &{margin-bottom:9px;", (({
                color: e
            }) => !!e && (0, r.iv)("color:", e, ";")), " ", (({
                fontFamily: e
            }) => !!e && (0, r.iv)("font-family:", e, ";")), "}", s.U0.className, " &,", c.om.className, " &{font-size:17px;line-height:", (0, r.rS)("postBodyLineHeight"), ";margin:0 ", (0, r.rS)("postMarginPercent"), "% 17px;}", p.W.className, " &,", m.b8.className, " &{font-size:14px;line-height:", (0, r.rS)("chatBodyLineHeight"), ";margin:0 ", (0, r.rS)("chatMarginPx"), "px 10px;}.intercom-comment &,", d.c.className, " &,", a.y.className, " &{font-size:14px;line-height:", (0, r.rS)("chatBodyLineHeight"), ";", (({
                noMargin: e
            }) => e ? x : f), "}", n.WG.className, " &,", a.y.className, " &,", u.K2.className, " &,", h.U$.className, " &,", c.om.className, " &,", d.c.className, " &,", s.U0.className, " &,", l.kA.className, " &,", p.W.className, " &,", m.b8.className, " &,", g.Ow.className, " &,.intercom-comment &{p,a,b,strong,i,em{overflow-wrap:break-word;word-wrap:break-word;}a{text-decoration:underline;&:hover,&:focus,&:active{text-decoration:none;}}code{padding:1px;background-color:", (0, r.rS)("codeBlockBackground"), ";font-family:", (0, r.rS)("fontMono"), ";}}")
        },
        71769: (e, t, o) => {
            o.d(t, {
                y: () => x
            });
            var r = o(50700),
                i = o(14877),
                n = o(30849),
                a = o(60293),
                s = o(53238),
                l = o(10393),
                c = o(95345),
                d = o(44265),
                p = o(95486),
                m = o(88553),
                h = o(58273),
                u = o(67900),
                g = o(40414),
                b = o(436),
                f = {
                    name: "xi606m",
                    styles: "text-align:center;"
                };
            const x = (0, r.ZP)(i.Z, {
                target: "e10zs45w0"
            })(b.G, " font-size:19px;font-weight:bold;padding:1px 0 11px;", (({
                centered: e
            }) => e && f), " ", l.om.className, " &,", c.c.className, " &,", u.U0.className, " &,", n.kA.className, " &,", a.WG.className, " &,", s.y.className, " &,", m.U$.className, " &,", h.K2.className, " &,", d.W.className, " &,", p.b8.className, " &{color:", (0, r.rS)("bodyText"), ";font-size:20px;line-height:1.24;margin:0 ", (0, r.rS)("postMarginPercent"), "% 15px;}", c.c.className, " &,", s.y.className, " &{margin:0 0 10px 0;font-size:17px;}", g.Ow.className, " &{font-size:1.5em;line-height:20px;margin-block-start:unset;margin-block-end:unset;", (({
                color: e
            }) => !!e && (0, r.iv)("color:", e, ";")), " ", (({
                fontFamily: e
            }) => !!e && (0, r.iv)("font-family:", e, ";")), "}", a.WG.className, " &,", h.K2.className, " &,.intercom-tour-step-pointer &{margin:0 ", (0, r.rS)("noteMarginPercent"), "% 15px;}.intercom-tour-step-post &{margin:0 ", (0, r.rS)("tourPostMarginPx"), "px 15px;}", d.W.className, " &,", p.b8.className, " &{font-size:14px;line-height:1.33;margin:0 ", (0, r.rS)("chatMarginPx"), "px 10px;}", u.U0.className, " &,", n.kA.className, " &{line-height:1.24;color:", (0, r.rS)("bodyText"), ";font-size:18px;font-weight:600;margin:0 ", (0, r.rS)("postMarginPercent"), "% 15px;a{text-decoration:underline;&:hover,&:focus,&:active{text-decoration:none;}}}", n.kA.className, " &{color:", (0, r.rS)("bodyText"), ";font-size:18px;font-weight:600;line-height:1.24;margin:0 0 15px 0;padding:0;}")
        },
        35697: (e, t, o) => {
            o.d(t, {
                N: () => l
            });
            var r = o(50700),
                i = o(13818),
                n = o(67900),
                a = o(10393),
                s = o(436);
            const l = (0, r.ZP)(i.Z, {
                target: "e18fnijv0"
            })(s.G, " ", n.U0.className, " &,", a.om.className, " &{margin:0 ", (0, r.rS)("postMarginPercent"), "% 15px;padding-bottom:1em;}")
        },
        67900: (e, t, o) => {
            o.d(t, {
                Jx: () => s,
                U0: () => a
            });
            var r = o(50700),
                i = o(10393),
                n = o(49454);
            const a = (0, r.ZP)(i.om, {
                    target: "eqwnu7g0"
                })(),
                s = (0, r.ZP)("div", {
                    target: "eqwnu7g1"
                })("margin-top:60px;color:", (0, r.rS)("previewText"), ";", n.kU.className, "{display:flex;flex-direction:row;align-items:center;height:auto;margin:0 ", (0, r.rS)("postMarginPercent"), "% 30px;", n.dp.className, "{margin-right:10px;}}.intercom-block-image{margin:0 ", (0, r.rS)("postMarginPercent"), "% 34px;}.intercom-block-paragraph{line-height:1.53;color:", (0, r.rS)("bodyText"), ";}.intercom-block-code{margin:1em ", (0, r.rS)("postMarginPercent"), "%;padding:16px;overflow:auto;line-height:1.45;background-color:", (0, r.rS)("codeBlockBackground"), ";border-radius:3px;}code{font-family:", (0, r.rS)("fontMono"), ";background-color:", (0, r.rS)("codeBlockBackground"), ";padding:0;padding-top:0.2em;padding-bottom:0.2em;margin:0;font-size:85%;border-radius:3px;}");
            (0, r.ZP)("h1", {
                target: "eqwnu7g2"
            })("font-size:33px;line-height:1.24;margin:0 ", (0, r.rS)("postMarginPercent"), "% 17px;color:", (0, r.rS)("appColor"), ";font-weight:normal;overflow-wrap:break-word;word-break:break-all;word-break:break-word;"), (0, r.ZP)("div", {
                target: "eqwnu7g3"
            })("font-size:20px;line-height:1.35;margin:0 ", (0, r.rS)("postMarginPercent"), "% 17px;color:", (0, r.rS)("previewText"), ";overflow-wrap:break-word;word-break:break-all;word-break:break-word;")
        },
        93287: (e, t, o) => {
            o.d(t, {
                e: () => n,
                y: () => i
            });
            var r = o(50700);
            const i = (0, r.ZP)("p", {
                    target: "e1j537ml0"
                })("position:absolute;bottom:0;color:", (0, r.rS)("errorText"), ";font-size:13px;line-height:13px;"),
                n = (0, r.ZP)("div", {
                    target: "e1j537ml1"
                })({
                    name: "qle8yk",
                    styles: "position:relative;height:23px;"
                })
        },
        18706: (e, t, o) => {
            o.d(t, {
                Gg: () => h,
                P8: () => l,
                Pq: () => g,
                QY: () => b,
                mU: () => p,
                ot: () => u
            });
            var r = o(50700),
                i = o(39113),
                n = o(93289),
                a = o(1638),
                s = o(69518);
            const l = (0, r.ZP)("div", {
                    target: "e1pmvsjd0"
                })("position:relative;background:", (0, r.rS)("inputBackground"), ";&,input{width:100%;height:40px;font-size:14px;line-height:40px;box-sizing:border-box;}input{position:absolute;padding:11px 35px;box-sizing:border-box;border:1px solid ", (0, r.rS)("inputBorder"), ";border-radius:4px;&[disabled]{cursor:not-allowed;}&::placeholder{color:", (0, r.rS)("inputPlaceholder"), ";}}", (({
                    saveState: e,
                    theme: t
                }) => ("saved" === e || "saving" === e) && (0, r.iv)("input{border:1px solid ", t.inputBorder, ";}")), " ", (({
                    isInvalid: e,
                    theme: t
                }) => e && (0, r.iv)("background-color:", t.invalidInputBackground, ";color:", t.invalidInputText, ";border-color:", t.invalidInputBorder, ";"))),
                c = {
                    name: "15409pb",
                    styles: "position:absolute;top:0;right:0;bottom:0;width:40px;border-top-right-radius:3px;border-bottom-right-radius:3px;background-position:center;"
                };
            var d = {
                name: "gyp8mm",
                styles: "visibility:hidden;"
            };
            const p = (0, r.ZP)("button", {
                target: "e1pmvsjd1"
            })("cursor:pointer;&[disabled]{cursor:not-allowed;}background-color:", (0, r.rS)("appColor"), ";box-shadow:0 1px 2px 0 rgba(0,0,0,0.15);", c, " @media (-ms-high-contrast:active){border:1px solid white;}", (({
                saveState: e
            }) => ("saved" === e || "saving" === e) && d));
            var m = {
                name: "gyp8mm",
                styles: "visibility:hidden;"
            };
            const h = (0, r.ZP)("div", {
                    target: "e1pmvsjd2"
                })("width:100%;height:40px;font-size:14px;line-height:40px;box-sizing:border-box;position:absolute;padding:0 35px;color:", (0, r.rS)("inputPlaceholder"), ";cursor:text;", (({
                    saveState: e
                }) => ("saved" === e || "saving" === e) && m)),
                u = (0, r.ZP)("span", {
                    target: "e1pmvsjd3"
                })({
                    name: "gyp8mm",
                    styles: "visibility:hidden;"
                }),
                g = (0, r.ZP)("span", {
                    target: "e1pmvsjd4"
                })(c, " ", (0, i.Ko)(n.Z, a.Z, "14px", "12px")),
                b = (0, r.ZP)(s.W, {
                    target: "e1pmvsjd5"
                })({
                    name: "10dhw94",
                    styles: "position:absolute;left:13px;top:12px;"
                })
        },
        82057: (e, t, o) => {
            o.d(t, {
                I: () => n
            });
            var r = o(50700),
                i = o(86578);
            const n = (0, r.ZP)("button", {
                target: "e1a0l3j70"
            })("cursor:pointer;z-index:1;position:absolute;top:0;right:0;bottom:0;width:40px;border-top-right-radius:3px;border-bottom-right-radius:3px;background-color:", (0, r.rS)("buttonBackgroundColor"), ";-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;-webkit-user-select:none;", i.J.className, " &{border-top-right-radius:8px;border-bottom-right-radius:8px;}", (({
                theme: e
            }) => "light" === e.primaryType && (0, r.iv)("border:1px solid ", e.lightGrey2, ";")), " ", (({
                disabled: e,
                theme: t
            }) => e && (0, r.iv)("cursor:default;background-color:", t.disabledInputButtonBackground, ";*{cursor:default;}")), " ", (({
                disabled: e,
                isLoading: t,
                theme: o
            }) => !e && !t && (0, r.iv)("&:hover{background-color:", o.buttonBackgroundColorHover, ";}&:active{background-color:", o.buttonBackgroundColorActive, ";}")), " @media (-ms-high-contrast:active){border:1px solid white;}")
        },
        59565: (e, t, o) => {
            o.d(t, {
                X: () => l
            });
            var r = o(50700),
                i = o(29277),
                n = o(82057),
                a = o(18706),
                s = o(86578);
            const l = (0, r.ZP)("div", {
                target: "ec3jd6p0"
            })("position:relative;input{width:100%;height:40px;padding:11px 40px 11px 16px;box-sizing:border-box;font-size:14px;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.07);border:1px solid ", (0, r.rS)("inputBorder"), ";color:", (0, r.rS)("inputText"), ";border-radius:4px;background:", (0, r.rS)("inputBackground"), ";appearance:none;", s.J.className, " &{box-shadow:none;border-radius:8px;}&::placeholder{color:", (0, r.rS)("inputPlaceholder"), ";}&:focus{background:", (0, r.rS)("white"), ";}&[disabled]{cursor:not-allowed;}}", (({
                isFailed: e,
                theme: t
            }) => e && (0, r.iv)("input{background-color:", t.invalidInputBackground, ";color:", t.invalidInputText, ";border-color:", t.invalidInputBorder, ";&::placeholder{color:", t.inputPlaceholder, ";}}")), " ", (({
                isSaved: e,
                theme: t
            }) => e && (0, r.iv)("input{border:1px solid ", t.inputBorder, ";color:", t.submittedInputText, ";-webkit-text-fill-color:", t.submittedInputText, ";-webkit-opacity:1;}", a.mU.className, ",", n.I.className, "{visibility:hidden;}")), " ", (({
                isSaving: e
            }) => e && (0, r.iv)(i.o.className, "{visibility:hidden;}")), " ", (({
                theme: e,
                isNotificationChannel: t,
                isSaved: o
            }) => t && o && (0, r.iv)("input{background:", e.white, ";color:", e.submittedInputText, ";border-color:", e.white, ";padding:0;height:20px;transition:color 400ms 600ms,border 300ms,padding 300ms 600ms,height 400ms 1000ms;box-shadow:none;}", a.mU.className, ",", n.I.className, "{opacity:0;transition:opacity 300ms,visibility 0 300ms;}", i.o.className, "{visibility:hidden;}")), " ", (({
                isReplyType: e,
                isBorderless: t
            }) => e && t && (0, r.iv)("input{height:52px;border:none;padding-left:20px;}", a.mU.className, ",", n.I.className, "{top:6px;right:6px;bottom:6px;margin:0;border-radius:3px;}")))
        },
        18916: (e, t, o) => {
            o.d(t, {
                DF: () => i,
                UF: () => c,
                mC: () => n,
                mK: () => a,
                qY: () => l,
                uf: () => s
            });
            var r = o(50700);
            const i = (0, r.ZP)("div", {
                    target: "e1a94o2o0"
                })("display:inline-block;vertical-align:middle;line-height:1.2;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;span{white-space:nowrap;}.intercom-note &,.intercom-pointer &{width:calc(100% - ", 76, "px);}.intercom-article.intercom-post &{", (({
                    theme: e
                }) => (0, r.iv)("width:calc(100% - ", 2 * e.postMarginPercent, "% - ", 40, "px);")), "}"),
                n = (0, r.ZP)("span", {
                    target: "e1a94o2o1"
                })((({
                    theme: e
                }) => (0, r.iv)("color:", e.isPrimaryColorLight ? e.appColorDarker : e.appColor, ";"))),
                a = (0, r.ZP)("div", {
                    target: "e1a94o2o2"
                })("color:", (0, r.rS)("summaryText"), ";overflow:hidden;text-overflow:ellipsis;"),
                s = (0, r.ZP)("span", {
                    target: "e1a94o2o3"
                })("color:", (0, r.rS)("m5lightGrey5"), ";.intercom-article.intercom-post &{font-weight:normal;color:", (0, r.rS)("grey"), ";}"),
                l = (0, r.ZP)("span", {
                    target: "e1a94o2o4"
                })("color:", (0, r.rS)("grey"), ";.intercom-article.intercom-post &{color:", (0, r.rS)("m5DarkGrey2"), ";}"),
                c = (0, r.ZP)("div", {
                    target: "e1a94o2o5"
                })("color:", (0, r.rS)("subheaderText"), ";opacity:0.7;")
        },
        49454: (e, t, o) => {
            o.d(t, {
                A9: () => a,
                dp: () => l,
                kU: () => n,
                mr: () => s
            });
            var r = o(50700),
                i = {
                    name: "11wszyz",
                    styles: "display:flex;padding:16px;"
                };
            const n = (0, r.ZP)("div", {
                    target: "e1atr8tr0"
                })("box-sizing:border-box;position:relative;background-color:", (0, r.rS)("white"), ";border-radius:4px;font-size:13px;line-height:1.5;width:100%;min-height:0;", (({
                    horizontal: e
                }) => e && i)),
                a = (0, r.ZP)("div", {
                    target: "e1atr8tr1"
                })({
                    name: "1rr4qq7",
                    styles: "flex:1;"
                }),
                s = (0, r.ZP)("div", {
                    target: "e1atr8tr2"
                })({
                    name: "dhtp42",
                    styles: "padding:24px 24px 16px 24px;white-space:nowrap;"
                }),
                l = (0, r.ZP)("div", {
                    target: "e1atr8tr3"
                })({
                    name: "1dvc4lw",
                    styles: "display:inline-block;vertical-align:middle;margin-right:16px;"
                })
        },
        34535: (e, t, o) => {
            o.d(t, {
                f: () => s
            });
            var r = o(50700),
                i = o(47946),
                n = o(67900),
                a = o(10393);
            const s = (0, r.ZP)("div", {
                target: "er4a1r20"
            })(i.EK.className, " &,", n.U0.className, " &,", a.om.className, " &{padding-top:1px;padding-bottom:16px;}")
        },
        95486: (e, t, o) => {
            o.d(t, {
                Rd: () => C,
                UW: () => w,
                b8: () => f,
                g: () => v,
                gb: () => x
            });
            var r = o(50700),
                i = o(54874),
                n = o(67620),
                a = o(39113),
                s = o(7935),
                l = o(7913),
                c = o(38401),
                d = o(35697),
                p = o(39122);
            const m = (0, r.F4)("0%{opacity:0;}50%{transform:scale(0.5);opacity:0;}100%{transform:scale(1);opacity:1;}"),
                h = e => (0, r.iv)("position:relative;border-radius:", e.notificationBorderRadiusPx, "px;box-sizing:border-box;padding:0;");
            var u = {
                    name: "xq5zr7",
                    styles: "/* @noflip */ border-bottom-left-radius:0;"
                },
                g = {
                    name: "6pe39",
                    styles: "/* @noflip */ margin-left:45px;margin-bottom:8px;"
                },
                b = {
                    name: "15r5o1a",
                    styles: "float:none;/* @noflip */ text-align:right;"
                };
            const f = (0, r.ZP)("div", {
                    target: "e1dst0fh0"
                })((({
                    theme: e
                }) => h(e)), ";background-color:", (0, r.rS)("white"), ";box-shadow:", (0, r.rS)("notificationBoxShadow"), ";padding-bottom:15px;.intercom-block-attachment-list{padding:0 20px;}", p.vH.className, "{", (({
                    theme: e
                }) => e.isRtlLocale && b), "}", (({
                    isBorderless: e,
                    isSingleBlock: t,
                    isMobile: o
                }) => e && (0, r.iv)("padding-top:15px;clear:both;", !o && g, " ", c.P.className, "{padding-bottom:10px;}@supports (-webkit-overflow-scrolling:touch){", d.N.className, "{width:200px;height:150px;}", t && (0, r.iv)(d.N.className, "{width:240px;height:180px;margin-top:20px;}"), "}")), " ", (({
                    theme: e,
                    isBorderless: t,
                    isSingleBlock: o
                }) => t && o && (0, r.iv)(h(e), ";box-shadow:none;background:none;.intercom-block-image img{border-radius:", e.notificationBorderRadiusPx, "px;margin:0 auto;display:block;max-width:100%;vertical-align:bottom;}", d.N.className, "{box-shadow:0px 2px 16px rgba(0,0,0,0.14),0px 1px 6px rgba(0,0,0,0.06);}")), " ", (({
                    showAvatar: e
                }) => e && u), " ", (({
                    isBorderless: e,
                    isSingleBlock: t,
                    showAvatar: o
                }) => !(e && t) && o && (0, r.iv)("&:after{", a.Qi, "}")), " ", (({
                    theme: e,
                    isBorderless: t,
                    isSingleBlock: o
                }) => e.isMobileSize && t && (0, r.iv)(d.N.className, "{width:220px;height:165px;}", o && (0, r.iv)(d.N.className, "{width:260px;height:195px;margin-top:20px;}"))), " ", (({
                    theme: e,
                    isBorderless: t,
                    showAvatar: o,
                    isMobile: i
                }) => e.isLeftAlign && t && o && (0, r.iv)(l.t.className, ",", C.className, "{/* @noflip */ left:-", e.borderlessAvatarOffsetWidthPx, "px;}")), ";@media (-ms-high-contrast:active){border:1px solid white;}"),
                x = (0, r.ZP)("div", {
                    target: "e1dst0fh1"
                })("animation:", n.xe, " 500ms ease;> ", s.Zy.className, "{padding:0 20px;max-height:", 300, "px;}a{color:", (0, r.rS)("linkColor"), ";}"),
                v = (0, r.ZP)(x, {
                    target: "e1dst0fh2"
                })((({
                    theme: e,
                    isScrollable: t
                }) => t && (0, r.iv)("> ", s.Zy.className, "{padding-bottom:10px;}&:after{position:absolute;content:' ';bottom:15px;left:0;right:0;height:15px;background:linear-gradient(rgba(255,255,255,0),", e.white, " 15px);border-radius:0 0 8px 8px;}")), " ", (({
                    isScrollable: e,
                    isBorderless: t
                }) => e && t && (0, r.iv)("> ", s.Zy.className, "{max-height:100%;}")));
            var y = {
                name: "ahlub9",
                styles: "position:relative;z-index:1;box-shadow:0 3px 2px -1px rgba(0,0,0,0.3);"
            };
            const w = (0, r.ZP)("div", {
                target: "e1dst0fh3"
            })("font-size:10px;color:", (({
                theme: e
            }) => (0, i.Bw)(e.subheaderText, .7)), ";padding:0 20px 10px 20px;", (({
                isScrolled: e
            }) => e && y), " display:flex;flex-direction:row;align-items:center;gap:3px;color:", (0, r.rS)("m5lightGrey5"), ";font-size:14px;font-weight:400;line-height:1.5;");
            var k = {
                name: "zul4iv",
                styles: "box-shadow:none;/* @noflip */ left:-46px;"
            };
            const C = (0, r.ZP)("div", {
                target: "e1dst0fh4"
            })("animation:", m, " 500ms ease;position:absolute;bottom:0;/* @noflip */ left:-40px;box-shadow:", (0, r.rS)("notificationBoxShadow"), ";border-radius:100%;", (({
                isAuthorTypeTeam: e
            }) => e && k))
        },
        81449: (e, t, o) => {
            o.d(t, {
                C: () => s,
                j: () => n
            });
            var r = o(50700),
                i = o(39113);
            const n = (0, r.ZP)("div", {
                target: "e1cfgmp10"
            })({
                name: "79elbk",
                styles: "position:relative;"
            });
            var a = {
                name: "17h42v1",
                styles: "max-width:100%;padding:17px 20px;border-radius:6px;display:inline-block;"
            };
            const s = (0, r.ZP)("div", {
                target: "e1cfgmp11"
            })(i.dF, ";margin-bottom:8px;", (({
                isText: e
            }) => e && a), " ", (({
                isUser: e,
                isText: t,
                theme: o
            }) => e && t && (0, r.iv)("color:", o.white, ";background-color:", o.appColor, ";")), " ", (({
                isUser: e,
                isText: t,
                theme: o
            }) => !e && t && (0, r.iv)("color:", o.bodyText, ";background-color:", o.adminCommentBackground, ";a{text-decoration:underline;}")), " ", (({
                isBorderless: e,
                isUser: t,
                isText: o,
                theme: i
            }) => e && !t && o && (0, r.iv)("background-color:", i.white, ";a{color:", i.bodyText, ";}")), " ", (({
                isBorderless: e,
                hasAvatar: t,
                isText: o
            }) => e && t && o && (0, r.iv)("&:last-child{border-bottom-left-radius:0;&:after{", i.Qi, "}}")), " ", (({
                isBorderless: e,
                theme: t
            }) => e && (0, r.iv)("box-shadow:", t.notificationBoxShadow, ";border-radius:", t.notificationBorderRadiusPx, ";")), " &:last-child{margin-bottom:0;}")
        },
        7913: (e, t, o) => {
            o.d(t, {
                t: () => i
            });
            var r = o(50700);
            const i = (0, r.ZP)("div", {
                target: "e1vfmq2u0"
            })("position:absolute;/* @noflip */ left:0;bottom:10px;", (({
                theme: e,
                isBorderless: t
            }) => t && (0, r.iv)("position:absolute;bottom:0;/* @noflip */ left:0;box-shadow:", e.notificationBoxShadow, ";border-radius:100%;")))
        },
        33131: (e, t, o) => {
            o.d(t, {
                E: () => a,
                h: () => m
            });
            var r = o(50700),
                i = o(39113),
                n = {
                    name: "1ugw98p",
                    styles: "bottom:-1px;/* @noflip */ margin-left:0;"
                };
            const a = (0, r.ZP)("div", {
                target: "e1en7ww90"
            })("display:none;", (({
                theme: e
            }) => e.tabNavigation && (0, r.iv)("display:inline-block;position:absolute;font-size:12px;color:", e.grey, ";bottom:-17px;/* @noflip */ margin-left:-15px;")), " ", (({
                hasBody: e,
                isSingleBlock: t
            }) => (e || t) && n));
            var s = {
                    name: "1qc26ql",
                    styles: "min-width:100%;box-sizing:border-box;"
                },
                l = {
                    name: "190lmxx",
                    styles: "/* @noflip */ text-align:right;"
                },
                c = {
                    name: "1dmit0k",
                    styles: "box-sizing:border-box;max-width:100%;width:100%;"
                },
                d = {
                    name: "156vopp",
                    styles: "border-bottom-left-radius:0;"
                },
                p = {
                    name: "bv69nn",
                    styles: "opacity:0.8;"
                };
            const m = (0, r.ZP)("div", {
                target: "e1en7ww91"
            })((({
                hasBody: e,
                isSingleBlock: t,
                theme: o
            }) => !t && !e && (0, r.iv)("padding:17px 20px;border-radius:", o.conversationPartBorderRadiusPx, ";position:relative;display:inline-block;width:auto;max-width:75%;pre span{color:inherit !important;background-color:inherit !important;font-weight:inherit !important;word-wrap:break-word;}")), " ", (({
                isSingleBlock: e,
                theme: t
            }) => e && (0, r.iv)(".intercom-image-progress{border-radius:", t.conversationPartBorderRadiusPx, ";}.intercom-video-loading{background-color:", t.lightGrey8, ";}")), " ", (({
                isFailed: e
            }) => e && p), " ", (({
                theme: e,
                isUser: t,
                isSingleBlock: o
            }) => t && !o && (0, r.iv)("color:", e.white, ";a{color:", e.white, ";text-decoration:underline;}.intercom-block-attachment-list-icon svg > path{fill:", e.white, ";}")), " ", (({
                theme: e,
                isAdmin: t,
                isSingleBlock: o
            }) => t && !o && (0, r.iv)(".intercom-block-attachment-list-icon svg > path{fill:", e.appColor, ";}")), " ", (({
                theme: e,
                isUser: t,
                isSingleBlock: o
            }) => t && !o && e.isPrimaryColorLight && (0, r.iv)("color:", e.m5DarkGrey2, ";border:1px solid ", e.lightGrey3, ";a{color:", e.m5DarkGrey2, ";text-decoration:underline;}")), " ", (({
                theme: e,
                isUser: t,
                hasBody: o,
                isSingleBlock: i
            }) => t && !i && !o && (0, r.iv)("background-color:", e.appColor, ";/* @noflip */ float:right;.intercom-block-attachment-list > a{text-decoration:none;}")), " ", (({
                theme: e,
                isAdmin: t,
                hasBody: o,
                isSingleBlock: i
            }) => t && !i && !o && (0, r.iv)("color:", e.bodyText, ";background-color:", e.adminCommentBackground, ";a{color:", e.linkColor, ";text-decoration:underline;}.intercom-block-attachment-list > a{text-decoration:none;}.intercom-block-button-container{margin-bottom:10px;}.intercom-block-button:hover{text-decoration:none;}")), " ", (({
                theme: e,
                isAdmin: t,
                isUser: o,
                hasBody: i,
                isSingleBlock: n
            }) => !t && !o && !i && !n && (0, r.iv)("color:", e.bodyText, ";background-color:", e.adminCommentBackground, ";a{color:", e.bodyText, ";text-decoration:underline;}.intercom-block-button-container{margin-bottom:10px;}.intercom-block-button:hover{text-decoration:none;}")), " ", (({
                theme: e,
                isAdmin: t,
                isBorderless: o,
                hasBody: i,
                isSingleBlock: n
            }) => t && o && !i && !n && (0, r.iv)("background-color:", e.white, ";a{color:", e.subheaderText, ";}")), " ", (({
                hasBody: e,
                isSingleBlock: t,
                isBorderless: o,
                theme: i
            }) => !t && !e && o && (0, r.iv)("box-shadow:", i.notificationBoxShadow, ";border-radius:", i.conversationPartBorderRadiusPx, ";")), " ", (({
                isSingleBlock: e,
                isBorderless: t,
                theme: o
            }) => e && t && (0, r.iv)("video{border-radius:", o.conversationPartBorderRadiusPx, ";}")), " ", (({
                isSingleBlock: e,
                isBorderless: t,
                isAdmin: o,
                theme: i
            }) => o && !e && t && (0, r.iv)("color:", i.bodyText, ";")), " ", (({
                hasAvatar: e,
                isBorderless: t,
                isSingleBlock: o,
                hasBody: r
            }) => t && e && !o && !r && d), " ", (({
                hasAvatar: e,
                isBorderless: t,
                isSingleBlock: o,
                hasBody: n
            }) => t && e && !o && !n && (0, r.iv)("border-bottom-left-radius:0;&:after{", i.Qi, "}")), " ", (({
                isBorderless: e
            }) => e && c), " @media (-ms-high-contrast:active){border:1px solid white;}", (({
                theme: e
            }) => e.isRtlLocale && l), " ", (({
                isAIAnswer: e
            }) => e && s))
        },
        39122: (e, t, o) => {
            o.d(t, {
                SN: () => s,
                vH: () => a,
                xn: () => l
            });
            var r = o(50700),
                i = o(54874),
                n = {
                    name: "190lmxx",
                    styles: "/* @noflip */ text-align:right;"
                };
            const a = (0, r.ZP)("div", {
                    target: "e1nqkpxj0"
                })((({
                    theme: e
                }) => (0, r.iv)("color:", e.isPrimaryColorLight ? (0, i._j)(e.metaText, 15) : e.metaText, ";")), " clear:both;font-size:13px;padding-top:7px;width:75%;&.intercom-conversation-part-metadata-exit,&.intercom-conversation-part-metadata-exit-active,&.intercom-conversation-part-metadata-enter,&.intercom-conversation-part-metadata-enter-active{display:none;}", (({
                    theme: e
                }) => e.isRtlLocale && n)),
                s = (0, r.ZP)("div", {
                    target: "e1nqkpxj1"
                })({
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                }),
                l = (0, r.ZP)("div", {
                    target: "e1nqkpxj2"
                })({
                    name: "6n7j50",
                    styles: "display:inline;"
                })
        },
        69518: (e, t, o) => {
            o.d(t, {
                W: () => l
            });
            var r = o(50700),
                i = o(39113);
            const n = o.p + "images/flags.39d215e7.png",
                a = o.p + "images/flags@2x.5f4ab544.png",
                s = ["ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "ar", "as", "at", "au", "aw", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bw", "by", "bz", "ca", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "fi", "fj", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gt", "gu", "gw", "gy", "hk", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "ng", "ni", "nl", "no", "np", "nr", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sr", "st", "sv", "sy", "sz", "tc", "td", "tg", "th", "tj", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "ws", "ye", "za", "zm", "zw"],
                l = (0, r.ZP)("div", {
                    target: "e1ic6b8v0"
                })("width:16px;height:16px;background-repeat:no-repeat;background-position:0 0;", (0, i.Ko)(n, a, "240px", "240px"), " ", (({
                    countryCode: e
                }) => {
                    const t = s.indexOf(e) + 1,
                        o = t % 15 * -16,
                        i = -16 * Math.floor(t / 15);
                    return (0, r.iv)("background-position:", o, "px ", i, "px;")
                }))
        },
        86578: (e, t, o) => {
            o.d(t, {
                J: () => r
            });
            const r = (0, o(50700).ZP)("div", {
                target: "e1v2qtlt0"
            })({
                name: "zteh7t",
                styles: ".intercom-messenger-card-component-container{&-enter{opacity:0;}&-enter-active{opacity:1;transition:opacity 300ms ease-in-out 600ms;}}"
            })
        },
        79076: (e, t, o) => {
            o.d(t, {
                O: () => d
            });
            var r = o(50700),
                i = {
                    name: "5mvz6k",
                    styles: "border:1px solid rgba(0,0,0,0.08);"
                };
            const n = ({
                    disabled: e,
                    theme: t
                }) => (0, r.iv)(!e && (0, r.iv)("background-color:", t.buttonBackgroundColor, ";color:", t.buttonTextColor, ";&:hover{background-color:", t.buttonBackgroundColorHover, ";}&:active{background-color:", t.buttonBackgroundColorActive, ";}"), ";", e && (0, r.iv)("background-color:", t.disabledButtonBackground, ";color:", t.disabledButtonText, ";"), " ", t.isPrimaryColorLight && i),
                a = ({
                    disabled: e,
                    theme: t
                }) => (0, r.iv)(!t.isPrimaryColorLight && !e && (0, r.iv)("background-color:", t.white, ";color:", t.buttonBackgroundColor, ";border:1px solid ", t.buttonBackgroundColor, ";&:hover{color:", t.buttonBackgroundColorHover, ";border:1px solid ", t.buttonBackgroundColorHover, ";}&:active{color:", t.buttonBackgroundColorActive, ";border:1px solid ", t.buttonBackgroundColorActive, ";}"), ";", t.isPrimaryColorLight && !e && (0, r.iv)("background-color:", t.buttonBackgroundColor, ";color:", t.buttonTextColor, ";border:1px solid ", t.lightGrey2, ";&:hover{background-color:", t.buttonBackgroundColorHover, ";}&:active{background-color:", t.buttonBackgroundColorActive, ";}"), ";", e && (0, r.iv)("background-color:", t.white, ";border:1px solid ", t.disabledButtonBorder, ";color:", t.disabledButtonText, ";"), ";"),
                s = ({
                    disabled: e,
                    theme: t
                }) => (0, r.iv)("color:", t.buttonBackgroundColor, ";", t.isPrimaryColorLight && (0, r.iv)("color:", t.buttonTextColor, ";"), ";", e && (0, r.iv)("background-color:transparent;color:", t.disabledButtonText, ";"), ";");
            var l = {
                    name: "1j8r2w0",
                    styles: "cursor:default;"
                },
                c = {
                    name: "gx0lhm",
                    styles: "margin-bottom:0;"
                };
            const d = (0, r.ZP)("button", {
                target: "e19kb0ln0"
            })("position:relative;width:100%;min-height:40px;padding:6px 12px;margin-bottom:8px;box-sizing:border-box;border-radius:8px;text-align:center;font-weight:700;pointer-events:auto;cursor:pointer;transition:all 120ms,color 0.3s,background-color 0.3s;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;", (({
                noBottomMargin: e
            }) => e && c), " ", (({
                isLoading: e,
                disabled: t
            }) => (t || e) && l), ";", (({
                styleVariant: e
            }) => "primary" === e && n), " ", (({
                styleVariant: e
            }) => "secondary" === e && a), " ", (({
                styleVariant: e
            }) => "link" === e && s))
        },
        40887: (e, t, o) => {
            o.d(t, {
                hp: () => p,
                kL: () => d,
                nz: () => l
            });
            var r = o(50700),
                i = o(39113),
                n = o(26356),
                a = o(29258),
                s = {
                    name: "l8qto0",
                    styles: "font-size:15px;"
                };
            const l = (0, r.ZP)("div", {
                    target: "e11j3510"
                })("position:relative;background-color:", (0, r.rS)("white"), ";border-radius:3px;font-size:14px;line-height:1.5;color:", (0, r.rS)("bodyText"), ";", i.Ty, " transition:height ", n.R, "ms ", n.d, ";", (({
                    theme: e
                }) => e.isPrimaryColorLight && i.Lm), " ", (({
                    theme: e
                }) => "ios" === e.platform && s), " @media (-ms-high-contrast:active){border:1px solid white;}"),
                c = (0, r.ZP)("div", {
                    target: "e11j3511"
                })("display:block;position:relative;box-sizing:border-box;overflow:hidden;background-color:", (0, r.rS)("white"), ";border-radius:8px;font-size:14px;line-height:1.5;color:", (0, r.rS)("bodyText"), ";transition:height ", n.R, "ms ", n.d, ";"),
                d = (0, a.Y)(l, c),
                p = (0, r.ZP)("div", {
                    target: "e11j3512"
                })({
                    name: "za61kl",
                    styles: "height:71px;"
                })
        },
        44265: (e, t, o) => {
            o.d(t, {
                U: () => m,
                W: () => p
            });
            var r = o(50700),
                i = o(39113),
                n = o(3748),
                a = o(41679),
                s = o(18916),
                l = o(7913);
            var c = {
                    name: "zrr1m9",
                    styles: "right:auto;"
                },
                d = {
                    name: "1w21syu",
                    styles: "width:calc(100% - 75px);"
                };
            const p = (0, r.ZP)("div", {
                    target: "ersx2ry0"
                })("z-index:", (0, i.W5)(), ";position:fixed;bottom:", (0, r.rS)("verticalPaddingPx"), "px;right:", (0, r.rS)("horizontalPaddingPx"), "px;width:260px;max-width:260px;font-family:", (0, r.rS)("fontSansSerif"), ";animation:", (({
                    theme: e
                }) => (0, r.F4)("0%{transform:translateY(", e.chatComposerHeightPx + 50, "px);opacity:0;}20%{transform:translateY(", e.chatComposerHeightPx, "px);}70%{transform:translateY(", e.chatComposerHeightPx, "px);opacity:1;}100%{transform:translateY(0);}")), " 750ms ease;", (({
                    theme: e
                }) => e.isLeftAlign && (0, r.iv)("left:", e.horizontalPaddingPx + e.borderlessAvatarOffsetWidthPx, "px;")), " ", (({
                    theme: e
                }) => e.isLauncherEnabled && (0, r.iv)("bottom:", e.verticalPaddingPx + e.launcherOffsetBottomPaddingPx, "px;")), " ", (({
                    theme: e
                }) => e.isMobileSize && d), " ", (({
                    theme: e
                }) => e.isMobileSize && e.isLeftAlign && c), " ", s.DF.className, "{width:100%;}", l.t.className, "{float:none;padding-left:0;width:100%;}"),
                m = (0, r.ZP)("div", {
                    target: "ersx2ry1"
                })("position:absolute;top:3px;/* @noflip */ right:3px;width:12px;height:12px;padding:10px;background-position:center;", (0, i.Ko)(n.Z, a.Z, "12px", "12px"), ";span{display:none;}")
        },
        89882: (e, t, o) => {
            o.d(t, {
                L: () => a
            });
            var r = o(50700),
                i = o(18916),
                n = o(49454);
            const a = (0, r.ZP)("div", {
                target: "etn1dwa0"
            })(n.kU.className, "{display:flex;}", n.dp.className, "{margin-right:12px;}", i.DF.className, "{display:flex;gap:5px;padding-top:5px;color:", (0, r.rS)("grey"), ";}", i.mK.className, "{display:flex;gap:3px;}", i.uf.className, "{font-weight:normal;color:", (0, r.rS)("grey"), ";}")
        },
        30849: (e, t, o) => {
            o.d(t, {
                MA: () => d,
                QL: () => b,
                WA: () => f,
                Wg: () => g,
                _7: () => c,
                kA: () => l,
                x2: () => s
            });
            var r = o(50700),
                i = o(89882),
                n = o(39113),
                a = o(54811);
            const s = (0, r.ZP)("div", {
                    target: "e1h4i2uy0"
                })({
                    name: "e529j6",
                    styles: "max-height:100%;overflow:hidden;display:flex;flex-direction:column;.intercom-scrollable{overflow-y:scroll;}"
                }),
                l = (0, r.ZP)("div", {
                    target: "e1h4i2uy1"
                })("color:", (0, r.rS)("previewText"), ";.intercom-block-paragraph{margin:0 0 17px 0;color:", (0, r.rS)("bodyText"), ";}a:not(.intercom-block-button){color:", (0, r.rS)("linkColor"), ";font-size:14px;line-height:21px;&:not(.intercom-block-button):hover{text-decoration:underline;color:", (0, r.rS)("linkColorHover"), ";}}", i.L.className, "{padding-top:20px;}"),
                c = (0, r.ZP)("div", {
                    target: "e1h4i2uy2"
                })("padding-top:12px;overflow:hidden;text-overflow:ellipsis;font-size:24px;font-weight:700;line-height:34px;align-items:center;color:", (0, r.rS)("m5DarkGrey2"), ";"),
                d = (0, r.ZP)("div", {
                    target: "e1h4i2uy3"
                })({
                    name: "5yiajf",
                    styles: "padding-top:20px;font-size:14px;line-height:21px;font-weight:400;img,video,iframe{width:100%;object-fit:cover;overflow:hidden;margin-bottom:34px;}hr{display:block;height:3px;border-radius:3px;background:rgba(0,0,0,0.05);border:none;margin:1em 0;}"
                });
            var p = {
                    name: "1os3lpb",
                    styles: "font-size:16px;line-height:24px;"
                },
                m = {
                    name: "1os3lpb",
                    styles: "font-size:16px;line-height:24px;"
                },
                h = {
                    name: "1os3lpb",
                    styles: "font-size:16px;line-height:24px;"
                },
                u = {
                    name: "1o3n3wi",
                    styles: "font-size:28px;line-height:40px;"
                };
            const g = (0, r.ZP)("div", {
                    target: "e1h4i2uy4"
                })("padding:20px ", (({
                    isExpanded: e
                }) => e ? "64px" : "20px"), ";", c.className, "{", (({
                    isExpanded: e
                }) => e && u), "}", d.className, "{", (({
                    isExpanded: e
                }) => e && h), "}ul,ol{", (({
                    isExpanded: e
                }) => e && m), "}a:not(.intercom-block-button){", (({
                    isExpanded: e
                }) => e && p), "}"),
                b = (0, r.ZP)("div", {
                    target: "e1h4i2uy5"
                })({
                    name: "5lwuwl",
                    styles: "width:100%;overflow:hidden;margin:0;padding-top:56.25%;position:relative;img{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);object-fit:cover;}"
                }),
                f = (0, r.ZP)("div", {
                    target: "e1h4i2uy6"
                })("width:100%;background-color:", (0, r.rS)("white"), ";z-index:", (0, n.W5)(1), ";padding:24px 0px;height:115px;box-sizing:border-box;border-top:1px solid ", (0, r.rS)("lightGrey8"), ";", a._.className, "{font-size:14px;width:100%;color:", (0, r.rS)("grey"), ";background:transparent;margin:0;padding:0;}")
        },
        53238: (e, t, o) => {
            o.d(t, {
                D: () => s,
                y: () => a
            });
            var r = o(50700),
                i = o(40887),
                n = o(38401);
            const a = (0, r.ZP)("div", {
                    target: "e1y9me2v0"
                })(),
                s = (0, r.ZP)("div", {
                    target: "e1y9me2v1"
                })("padding:0 24px 24px 24px;a{color:", (0, r.rS)("linkColor"), ";}", n.P.className, "{margin:16px auto;}", i.nz.className, "{}")
        },
        60293: (e, t, o) => {
            o.d(t, {
                EY: () => x,
                Ht: () => k,
                Oc: () => f,
                S8: () => w,
                Se: () => v,
                WG: () => b
            });
            var r = o(50700),
                i = o(39113),
                n = o(79131),
                a = o(11397),
                s = o(7935),
                l = o(40887),
                c = o(38401),
                d = o(34535),
                p = o(49454),
                m = o(3748),
                h = o(41679);
            const u = "200ms";
            var g = {
                name: "12c90sz",
                styles: "text-size-adjust:100%;"
            };
            const b = (0, r.ZP)("div", {
                    target: "edaz5eg0"
                })("z-index:", (0, i.W5)(1), ";position:absolute;bottom:0;right:0;width:342px;background:", (0, r.rS)("white"), ";border-radius:7px;font-size:13px;font-family:", (0, r.rS)("fontSansSerif"), ";color:", (0, r.rS)("bodyText"), ";overflow:hidden;", (({
                    theme: e
                }) => e.isMobileSize && g), " ", (({
                    theme: e,
                    isScrolled: t
                }) => t && (0, r.iv)(p.mr.className, "{position:relative;z-index:", (0, i.W5)(3, e), ";box-shadow:0 0 9px 0 rgba(0,0,0,0.3);}")), " ", d.f.className, "{padding-bottom:16px;}&.intercom-message{&-enter{opacity:0;transform:translateY(20px);}&-enter-active{opacity:1;transform:translateY(0);transition:opacity ", u, ",transform ", u, ";}&-exit{opacity:1;transform:translateY(0);}&-exit-active{opacity:0;transform:translateY(20px);transition:opacity ", u, ",transform ", u, ";}}", n.N.className, "{box-shadow:none;border-radius:0;", a.P7.className, ",", a.eA.className, "{border-radius:0;}}"),
                f = (0, r.ZP)("span", {
                    target: "edaz5eg1"
                })("position:absolute;z-index:", (0, i.W5)(3), ";top:0;right:0;width:72px;height:72px;outline-offset:-5px;background-position:center;", (0, i.Ko)(m.Z, h.Z, "12px", "12px")),
                x = (0, r.ZP)("div", {
                    target: "edaz5eg2"
                })("border-top:1px solid ", (0, r.rS)("lightGrey2"), ";width:100%;background-color:", (0, r.rS)("white"), ";box-sizing:border-box;padding:15px 25px;color:", (0, r.rS)("inputPlaceholder"), ";font-size:14px;line-height:26px;&,span{cursor:text;}"),
                v = (0, r.ZP)("div", {
                    target: "edaz5eg3"
                })(s.Zy.className, "{max-height:320px;border-radius:0 0 8px 8px;}a{color:", (0, r.rS)("linkColor"), ";}", c.P.className, "{width:280px;margin:16px auto;}", l.kL.className, "{", i.$X, "}", (({
                    showReplyToButton: e
                }) => e && (0, r.iv)(".intercom-scrollable{", d.f.className, "{padding-bottom:30px;}}")));
            var y = {
                name: "kt434e",
                styles: "opacity:1;bottom:0;transition:opacity 0.16s,bottom 0.28s;visibility:visible;"
            };
            const w = (0, r.ZP)("div", {
                    target: "edaz5eg4"
                })("position:absolute;bottom:-20px;left:0;right:0;opacity:0;visibility:hidden;", (({
                    isFooterVisible: e
                }) => e && y), " ", (({
                    theme: e,
                    showReplyToButton: t
                }) => t && (0, r.iv)("text-align:center;background:", e.white, ";"))),
                k = (0, r.ZP)("div", {
                    target: "edaz5eg5"
                })("margin-bottom:", (0, r.rS)("postFooterHeightPx"), "px;")
        },
        67620: (e, t, o) => {
            o.d(t, {
                Ce: () => h,
                P_: () => l,
                ss: () => p,
                vu: () => u,
                xe: () => s
            });
            var r = o(50700),
                i = o(39113),
                n = o(33200),
                a = o(56787);
            const s = (0, r.F4)("0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}"),
                l = (0, r.ZP)("div", {
                    target: "e8hx9tm0"
                })("padding-top:10px;max-height:", (0, r.rS)("notificationHeightPx"), "px;animation:", (({
                    theme: e
                }) => (0, r.F4)("0%{opacity:0;height:0;transform:translateY(20px);}50%{opacity:0;max-height:", e.notificationHeightPx, "px;transform:translateY(20px);}100%{opacity:1;max-height:", e.notificationHeightPx, "px;transform:translateY(0);}")), " 250ms ease;clear:both;");
            var c = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                },
                d = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                };
            const p = (0, r.ZP)("button", {
                target: "e8hx9tm1"
            })("background-color:#5d6c80;color:", (0, r.rS)("white"), ";font-size:13px;/* @noflip */ float:right;padding:8px 20px;opacity:0;border-radius:100px;", (({
                visibleDismissButton: e
            }) => e && d), " ", (({
                theme: e
            }) => e.tabNavigation && c));
            var m = {
                name: "1k4uzxx",
                styles: "width:260px;"
            };
            const h = (0, r.ZP)("div", {
                    target: "e8hx9tm2"
                })("position:fixed;bottom:", 5, "px;right:", 5, "px;:hover{", p.className, "{opacity:0.8;&:hover{opacity:0.9;}}}", (({
                    theme: e
                }) => e.isMobileSize && m)),
                u = (0, r.ZP)("span", {
                    target: "e8hx9tm3"
                })((0, i.Ko)(n.Z, a.Z, "8px", "8px"), " width:8px;height:8px;display:inline-block;margin-left:8px;")
        },
        58273: (e, t, o) => {
            o.d(t, {
                Hh: () => x,
                K2: () => f,
                Vy: () => y,
                Xo: () => k,
                a9: () => v
            });
            var r = o(50700),
                i = o(39113),
                n = o(3748),
                a = o(41679),
                s = o(54811),
                l = o(7935),
                c = o(40887),
                d = o(38401),
                p = o(32358),
                m = o(62732),
                h = o(34535),
                u = o(49454),
                g = {
                    name: "17ny6oe",
                    styles: "-webkit-text-size-adjust:100%;"
                },
                b = {
                    name: "1e4dm9o",
                    styles: "border:1px solid #eeeeee;box-shadow:none;width:100%;.intercom-pointer-body{padding-bottom:0px;}"
                };
            const f = (0, r.ZP)("div", {
                    target: "ebemfze0"
                })("width:272px;font-size:13px;margin:-8px;font-family:", (0, r.rS)("fontSansSerif"), ";color:", (0, r.rS)("bodyText"), ";", h.f.className, "{margin-bottom:", (0, r.rS)("pointerFooterHeightPx"), "px;padding-bottom:16px;}", l.Zy.className, "{", h.f.className, "{margin-bottom:30px;padding-bottom:24px;.intercom-block-paragraph{margin-left:0px;margin-right:0px;}}}", s._.className, "{height:55px;box-sizing:border-box;background-color:", (0, r.rS)("white"), ";border-top:1px solid ", (0, r.rS)("lightGrey4"), ";", p.t.className, "{width:45px;height:45px;font-size:24px;}}", u.mr.className, "{padding:16px 24px 16px;}", (({
                    isInbox: e
                }) => e && b), " ", (({
                    isScrolled: e
                }) => e && (0, r.iv)(u.mr.className, "{position:relative;z-index:", (0, i.W5)(3), ";box-shadow:0 0 9px 0 rgba(0,0,0,0.3);}")), " ", (({
                    theme: e
                }) => e.isMobileSize && g)),
                x = (0, r.ZP)("span", {
                    target: "ebemfze1"
                })("z-index:", (0, i.W5)(3), ";position:absolute;cursor:pointer;top:0;right:-5px;width:72px;height:64px;&,&:hover{background-position:center;", (0, i.Ko)(n.Z, a.Z, "12px", "12px"), ";}"),
                v = (0, r.ZP)("div", {
                    target: "ebemfze2"
                })("padding:24px;padding-top:0px;> ", l.Zy.className, "{max-height:320px;border-radius:0 0 8px 8px;}", d.P.className, "{width:auto;margin:17px;}", c.kL.className, "{box-shadow:inset 0 2px 0 0 ", (0, r.rS)("cardBorderTopColor"), ";border:1px solid ", (0, r.rS)("lightGrey8"), ";border-top:none;}", (({
                    intercomRepliesDisabled: e
                }) => e && (0, r.iv)(l.Zy.className, "{", h.f.className, "{padding-bottom:0px;margin-bottom:0px;}}"))),
                y = (0, r.ZP)("div", {
                    target: "ebemfze3"
                })("border-top:1px solid ", (0, r.rS)("lightGrey4"), ";width:100%;background-color:", (0, r.rS)("white"), ";box-sizing:border-box;padding:16.5px 20px;color:", (0, r.rS)("inputPlaceholder"), ";font-size:14px;border-radius:0 0 8px 8px;display:flex;flex:0 0 auto;flex-direction:row;cursor:pointer;&,span{cursor:pointer;}", m.I.className, "{fill:", (0, r.rS)("inputPlaceholder"), ";margin-bottom:-3px;margin-right:8px;}");
            var w = {
                name: "z7c4mq",
                styles: "opacity:1;bottom:0px;transition:opacity 0.16s,bottom 0.28s;visibility:visible;"
            };
            const k = (0, r.ZP)("div", {
                target: "ebemfze4"
            })("position:absolute;bottom:-20px;height:55px;left:0;right:0;opacity:0;visibility:hidden;", (({
                isFooterVisible: e
            }) => e && w))
        },
        95345: (e, t, o) => {
            o.d(t, {
                c: () => n,
                f: () => a
            });
            var r = o(50700),
                i = {
                    name: "lg3jsh",
                    styles: "&:after{position:absolute;opacity:1;transition:opacity ease 100ms;bottom:0;right:0;left:0;height:60px;content:' ';background:linear-gradient(to top,white 30%,rgba(255,255,255,0));border-radius:0 0 5px 5px;@media (-ms-high-contrast:active){display:none;}}"
                };
            const n = (0, r.ZP)("div", {
                    target: "e1axwam70"
                })("max-height:180px;&,*{cursor:pointer;}", (({
                    isTruncated: e
                }) => e && i)),
                a = (0, r.ZP)("div", {
                    target: "e1axwam71"
                })("padding:0 24px 17px;a{color:", (0, r.rS)("linkColor"), ";}")
        },
        10393: (e, t, o) => {
            o.d(t, {
                Rn: () => v,
                de: () => f,
                dv: () => g,
                om: () => b,
                zX: () => x
            });
            var r = o(50700),
                i = o(39113),
                n = o(79131),
                a = o(11397),
                s = o(38401),
                l = o(40887),
                c = o(49454),
                d = o(3748),
                p = o(41679);
            const m = "200ms";
            var h = {
                    name: "y8aj3r",
                    styles: "padding:0;"
                },
                u = {
                    name: "17ny6oe",
                    styles: "-webkit-text-size-adjust:100%;"
                };
            const g = (0, r.ZP)("div", {
                    target: "e1n022i40"
                })("width:100%;height:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;", (({
                    theme: e
                }) => e.isMobileSize && u), " ", s.P.className, "{width:320px;margin:16px auto;}", l.kL.className, "{", i.$X, "}", c.kU.className, "{display:flex;flex-direction:column;}", (({
                    isScrolled: e,
                    theme: t
                }) => e && (0, r.iv)(c.mr.className, "{position:relative;z-index:", (0, i.W5)(3, t), ";box-shadow:0 0 9px 0 rgba(0,0,0,0.3);}")), " ", (({
                    theme: e
                }) => e.isMobile && h)),
                b = (0, r.ZP)("div", {
                    target: "e1n022i41"
                })("display:flex;position:relative;flex-direction:column;width:100%;max-width:800px;max-height:100%;background:", (0, r.rS)("white"), ";border-radius:7px;box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);font-size:14px;color:", (0, r.rS)("bodyText"), ";overflow:hidden;@media (-ms-high-contrast:active){border:1px solid white;}", n.N.className, "{box-shadow:none;border-radius:0;", a.P7.className, ",", a.eA.className, "{border-radius:0;}}.intercom-modal-enter-active &,.intercom-modal-enter-done &{opacity:1;transform:translateY(0);transition:opacity ", m, ",transform ", m, ";}.intercom-modal-exit &{opacity:1;transform:translateY(0);}.intercom-modal-exit.intercom-modal-exit-active &{opacity:0;transform:translateY(20px);transition:opacity ", m, ",transform ", m, ";}"),
                f = (0, r.ZP)("span", {
                    target: "e1n022i42"
                })("z-index:", (0, i.W5)(3), ";position:absolute;top:0;right:0;width:", (0, r.rS)("postHeaderHeightPx"), "px;height:", (0, r.rS)("postHeaderHeightPx"), "px;background-position:center;outline-offset:-5px;cursor:pointer;", (0, i.Ko)(d.Z, p.Z, "12px", "12px"), ";"),
                x = (0, r.ZP)("div", {
                    target: "e1n022i43"
                })("flex-shrink:0;margin-top:16px;", (({
                    isCentered: e,
                    theme: t
                }) => e && (0, r.iv)("text-align:center;background:", t.white, ";")), ";"),
                v = (0, r.ZP)("div", {
                    target: "e1n022i44"
                })("border-top:1px solid ", (0, r.rS)("lightGrey2"), ";width:100%;background-color:", (0, r.rS)("white"), ";box-sizing:border-box;padding:15px 38px;border-radius:0 0 8px 8px;color:", (0, r.rS)("inputPlaceholder"), ";font-size:14px;line-height:26px;outline-offset:-5px;cursor:text;span{cursor:text;}")
        },
        54811: (e, t, o) => {
            o.d(t, {
                _: () => n,
                k: () => a
            });
            var r = o(50700),
                i = {
                    name: "ofor9b",
                    styles: "height:74px;"
                };
            const n = (0, r.ZP)("div", {
                    target: "e1pm31ux0"
                })("height:45px;background-color:", (0, r.rS)("inputBackground"), ";padding:5px;border-radius:0 0 6px 6px;text-align:center;overflow:hidden;", (({
                    hasPrompt: e
                }) => e && i)),
                a = (0, r.ZP)("div", {
                    target: "e1pm31ux1"
                })({
                    name: "1va3o2j",
                    styles: "padding-top:9px;padding-bottom:4px;text-align:center;"
                })
        },
        32358: (e, t, o) => {
            o.d(t, {
                t: () => n
            });
            var r = o(50700),
                i = {
                    name: "1jshjwt",
                    styles: "filter:grayscale(0%);transform:scale(1.32);&:hover{transform:scale(1.32);}&:active{transform:scale(1.32);}&:focus{outline-offset:-5px;}"
                };
            const n = (0, r.ZP)("span", {
                target: "efsx14m0"
            })("width:50px;height:48px;display:inline-block;text-align:center;font-size:32px;transition:transform 0.16s cubic-bezier(0.65,0.61,0.18,1.8) 0.02s,filter 0.32s linear;cursor:pointer;transform-origin:50% 60%;position:relative;top:2px;span{cursor:pointer;line-height:51px;}&:hover{transform:scale(1.32);transition:transform 0.04s;}&:active{transform:scale(1.4);transition:transform 0.04s;}", (({
                hasSelectedReaction: e,
                isSelected: t
            }) => e && (0, r.iv)("filter:grayscale(100%);", t && i)))
        },
        7935: (e, t, o) => {
            o.d(t, {
                Zy: () => n,
                jw: () => c,
                k6: () => s,
                k8: () => l
            });
            var r = o(50700),
                i = {
                    name: "b95f0i",
                    styles: "display:flex;flex-direction:column;flex:1;"
                };
            const n = (0, r.ZP)("div", {
                target: "e11hrsmw0"
            })("-webkit-overflow-scrolling:touch;position:relative;max-height:100%;overflow-y:auto;overflow-x:hidden;outline-offset:-5px;", (({
                flex: e
            }) => e && i), " ", (({
                isInsideModal: e,
                theme: t
            }) => e && (0, r.iv)("width:100%;flex-grow:1;a{color:", t.linkColor, ";}")));
            var a = {
                name: "ad9uq9",
                styles: "border-top:0px;"
            };
            const s = (0, r.ZP)("div", {
                    target: "e11hrsmw1"
                })("display:flex;flex:1;flex-direction:column;box-sizing:border-box;overflow:hidden;height:100%;position:relative;border-top:1px solid ", (0, r.rS)("lightGrey10"), ";", (e => e.hideBorder && a), " .intercom-drop-shadow-fade{&-enter{opacity:0;}&-enter-active{opacity:1;transition:opacity 150ms ease-in-out;}&-exit{opacity:1;}&-exit-active{opacity:0;transition:opacity 150ms ease-in-out;}}"),
                l = (0, r.ZP)("div", {
                    target: "e11hrsmw2"
                })({
                    name: "ojtruv",
                    styles: "position:absolute;box-shadow:inset 0 21px 4px -20px rgba(0,0,0,0.2);width:100%;height:10px;pointer-events:none;z-index:100;"
                }),
                c = (0, r.ZP)("div", {
                    target: "e11hrsmw3"
                })("position:absolute;bottom:0;pointer-events:none;height:36px;background:linear-gradient(180deg,rgba(255,255,255,0) 0%,#ffffff 100%);width:100%;", (e => e.hideBottomShadow && "\n      display: none;\n    "))
        },
        47946: (e, t, o) => {
            o.d(t, {
                Dd: () => x,
                EK: () => b,
                G2: () => f,
                MV: () => v,
                a9: () => C,
                i7: () => m,
                ic: () => g,
                ih: () => y,
                qb: () => u,
                ts: () => k,
                vq: () => w
            });
            var r = o(50700),
                i = o(54811),
                n = o(32358),
                a = o(7935),
                s = o(67900),
                l = o(39113);
            const c = "ease-out",
                d = (0, r.F4)("0%{opacity:0;}100%{opacity:1;}"),
                p = (0, r.F4)("0%{opacity:1;}100%{opacity:0;}"),
                m = (0, r.ZP)("div", {
                    target: "e7jhvzt0"
                })({
                    name: "1jlnwea",
                    styles: "position:relative;flex:1;"
                });
            var h = {
                name: "whh5e5",
                styles: "opacity:1;"
            };
            const u = (0, r.ZP)("div", {
                    target: "e7jhvzt1"
                })("min-height:0;transition:opacity 0.3s ease-out;opacity:0;height:100%;", (({
                    show: e
                }) => e && h), ";"),
                g = (0, r.ZP)("div", {
                    target: "e7jhvzt2"
                })({
                    name: "ojtruv",
                    styles: "position:absolute;box-shadow:inset 0 21px 4px -20px rgba(0,0,0,0.2);width:100%;height:10px;pointer-events:none;z-index:100;"
                }),
                b = (0, r.ZP)("div", {
                    target: "e7jhvzt3"
                })("position:absolute;height:100%;width:100%;display:flex;flex-direction:column;&.enter{animation-name:", d, ";animation-duration:", "250ms", ";animation-timing-function:", c, ";animation-delay:", "0ms", ";animation-fill-mode:both;}&.exit{animation-name:", p, ";animation-duration:", "150ms", ";animation-timing-function:", c, ";animation-delay:", "0s", ";animation-fill-mode:both;}", a.Zy.className, "{min-height:100%;display:flex;flex-direction:column;}", s.Jx.className, "{min-height:auto;}"),
                f = (0, r.ZP)("div", {
                    target: "e7jhvzt4"
                })("display:flex;flex-direction:column;align-items:center;width:100%;z-index:", (0, l.W5)(0), ";top:0;margin-bottom:20px;&.search-browse-reaction-followup-enter{opacity:0;transform:translateY(-25px);}&.search-browse-reaction-followup-enter-active{opacity:1;transform:translateY(4px);transition:all 150ms ease-in;}&.search-browse-reaction-followup-exit{opacity:1;}&.search-browse-reaction-followup-exit-active{opacity:0;transform:translateY(-20px);transition:all 150ms ease-out;}&.search-browse-reaction-followup-exit-done{visibility:hidden;display:none;}"),
                x = (0, r.ZP)("div", {
                    target: "e7jhvzt5"
                })("border-top:1px solid ", (0, r.rS)("lightGrey10"), ";width:48px;"),
                v = (0, r.ZP)("div", {
                    target: "e7jhvzt6"
                })("display:flex;flex-direction:row;width:80%;align-items:center;justify-content:center;line-height:44px;font-size:14px;color:", (0, r.rS)("grey"), ";background-color:", (0, r.rS)("m5lightGrey2"), ";padding:20px 24px;border-radius:12px;"),
                y = (0, r.ZP)("div", {
                    target: "e7jhvzt7"
                })("width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid ", (0, r.rS)("m5lightGrey2"), ";margin-right:104px;"),
                w = (0, r.ZP)("div", {
                    target: "e7jhvzt8"
                })("width:100%;background-color:", (0, r.rS)("white"), ";z-index:", (0, l.W5)(1), ";padding:24px;box-sizing:border-box;padding-bottom:0;", i._.className, "{font-size:14px;width:100%;color:", (0, r.rS)("grey"), ";background:transparent;margin:0;padding:0;", i.k.className, "{padding-top:0;padding-bottom:8px;}", n.t.className, "{font-size:28px;width:52px;height:40px;display:inline-flex;justify-content:center;}", n.t.className, " span{display:inline-flex;align-items:center;}}"),
                k = (0, r.ZP)("div", {
                    target: "e7jhvzt9"
                })("border-top:1px solid ", (0, r.rS)("lightGrey8"), ";position:relative;min-height:100%;display:flex;flex-direction:column;flex-grow:0;align-content:flex-end;"),
                C = (0, r.ZP)("div", {
                    target: "e7jhvzt10"
                })({
                    name: "1g5g5aj",
                    styles: "display:flex;justify-content:center;align-items:center;padding-bottom:20px;"
                })
        },
        40414: (e, t, o) => {
            o.d(t, {
                Ce: () => d,
                LD: () => s,
                Ow: () => l,
                Qk: () => a,
                _v: () => c,
                lo: () => n
            });
            var r = o(50700);
            const i = "18px",
                n = (0, r.ZP)("div", {
                    target: "e63435j0"
                })("@keyframes ic-tooltip-anchor-scale-in{0%{transform:scale(0);opacity:0;}100%{transform:scale(1);opacity:1;}}position:absolute;font-family:serif;color:white;width:", i, ";height:", i, ";z-index:1;text-align:center;animation:ic-tooltip-anchor-scale-in 200ms ease forwards;display:flex;justify-content:center;align-items:center;", (({
                    top: e,
                    left: t
                }) => !isNaN(e) && !isNaN(t) && (0, r.iv)("top:", e, "px;left:", t, "px;")), " ", (({
                    isTriggeredOnClick: e
                }) => (0, r.iv)("cursor:", e ? "pointer" : "default", ";"))),
                a = (0, r.ZP)(n, {
                    target: "e63435j1"
                })("font-family:sans-serif;width:auto;display:flex;justify-content:center;align-items:center;padding:1px 4px;border-radius:4px;font-size:13px;white-space:nowrap;", (({
                    backgroundColor: e
                }) => !!e && (0, r.iv)("background-color:", e, ";")), " ", (({
                    textColor: e
                }) => !!e && (0, r.iv)("color:", e, ";"))),
                s = (0, r.ZP)(n, {
                    target: "e63435j2"
                })("@keyframes ic-hotspot-pulse-animation{0%{opacity:0.3;transform:scale(1);}70%{opacity:0;transform:scale(2);}100%{opacity:0;transform:scale(3);}}", (({
                    backgroundColor: e,
                    isViewed: t
                }) => !!e && !t && (0, r.iv)("&:after{content:'';position:absolute;z-index:0;left:0px;top:0px;height:", i, ";width:", i, ";border-radius:50%;background:", e, ";display:block;animation:ic-hotspot-pulse-animation 2s ease 0s infinite;}"))),
                l = (0, r.ZP)("div", {
                    target: "e63435j3"
                })("z-index:2000000001;", (({
                    backgroundColor: e
                }) => (0, r.iv)("background-color:", e, ";")), " max-width:250px;border-radius:5px;line-height:1.4;box-shadow:0 0 10px rgba(0,0,0,0.2);"),
                c = (0, r.ZP)("div", {
                    target: "e63435j4"
                })((({
                    isVideoTooltip: e
                }) => (0, r.iv)("padding:", e ? "0" : "15px", ";")), " ", (({
                    fontColor: e
                }) => (0, r.iv)("color:", e, ";")), " font-size:14px;max-height:calc(100vh - 40px);overflow:auto;iframe{max-width:100%;}&,div,span{font-family:sans-serif;}a{color:inherit;}"),
                d = (0, r.ZP)("div", {
                    target: "e63435j5"
                })("z-index:-1;&:before{content:'';box-shadow:-4px 4px 6px -1px rgb(0 0 0 / 8%);position:absolute;width:0;height:0;box-sizing:border-box;border:7.5px solid black;border-color:transparent;transform-origin:0 0;}&[data-popper-placement^='top']{top:99%;border-right:", 8, "px solid transparent;border-left:", 8, "px solid transparent;", (({
                    backgroundColor: e
                }) => (0, r.iv)("border-top:", 8, "px solid ", e, ";")), "}&[data-popper-placement^='top']:before{bottom:-4px;left:-11px;transform:rotate(-45deg);}&[data-popper-placement^='bottom']{bottom:99%;border-right:", 8, "px solid transparent;border-left:", 8, "px solid transparent;", (({
                    backgroundColor: e
                }) => (0, r.iv)("border-bottom:", 8, "px solid ", e, ";")), "}&[data-popper-placement^='bottom']:before{bottom:-25px;left:11px;transform:rotate(135deg);}&[data-popper-placement^='left']{left:99%;border-top:", 8, "px solid transparent;border-bottom:", 8, "px solid transparent;", (({
                    backgroundColor: e
                }) => (0, r.iv)("border-left:", 8, "px solid ", e, ";")), "}&[data-popper-placement^='left']:before{bottom:-25px;left:-11px;transform:rotate(-135deg);}&[data-popper-placement^='right']{right:99%;border-top:", 8, "px solid transparent;border-bottom:", 8, "px solid transparent;", (({
                    backgroundColor: e
                }) => (0, r.iv)("border-right:", 8, "px solid ", e, ";")), "}&[data-popper-placement^='right']:before{bottom:-5px;left:11px;transform:rotate(45deg);}")
        },
        88553: (e, t, o) => {
            o.d(t, {
                R$: () => h,
                U$: () => m,
                gB: () => u
            });
            var r = o(50700),
                i = o(39113),
                n = o(18916),
                a = o(7935),
                s = o(40887),
                l = o(38401),
                c = o(34535),
                d = o(49454);
            const p = e => void 0 === e || 0 === e ? 272 : 544,
                m = (0, r.ZP)("div", {
                    target: "e74lxuv0"
                })("z-index:", (0, i.W5)(2), ";font-size:13px;padding:0;margin:-8px;font-family:", (0, r.rS)("fontSansSerif"), ";color:", (0, r.rS)("bodyText"), ";", n.DF.className, "{font-size:14px;}", c.f.className, "{padding-bottom:16px;}", d.mr.className, "{padding:16px 24px 16px;}", (({
                    theme: e,
                    scrolled: t
                }) => t && (0, r.iv)(d.mr.className, "{position:relative;z-index:", (0, i.W5)(3, e), ";box-shadow:0 0 9px 0 rgba(0,0,0,0.3);}")), " ", (({
                    isPointer: e,
                    pointerSize: t
                }) => e && (0, r.iv)("width:", p(t), "px;", n.DF.className, "{max-width:calc(", p(t), "px - 112px);}")), " ", (({
                    isPost: e
                }) => e && (0, r.iv)(".intercom-block-paragraph{font-size:14px;}", h.className, "{> ", a.Zy.className, "{max-height:500px;}}", n.DF.className, "{max-width:calc(", 544, "px - 112px);}"))),
                h = (0, r.ZP)("div", {
                    target: "e74lxuv1"
                })("padding-top:0px;margin-top:", (({
                    hasAuthor: e
                }) => e ? "0px" : "20px"), ";& > ", a.Zy.className, "{max-height:320px;}", l.P.className, "{margin:16px auto;width:230px;}", s.kL.className, "{box-shadow:inset 0 2px 0 0 ", (0, r.rS)("cardBorderTopColor"), ";border:1px solid ", (0, r.rS)("lightGrey8"), ";border-top:none;}"),
                u = (0, r.ZP)("span", {
                    target: "e74lxuv2"
                })("z-index:", (0, i.W5)(3), ";cursor:pointer;position:absolute;padding:8px;top:18px;right:16px;width:12px;height:12px;svg > g > g{fill:", (0, r.rS)("lightGrey9"), ";}")
        },
        79131: (e, t, o) => {
            o.d(t, {
                N: () => n
            });
            var r = o(50700),
                i = {
                    name: "1lhzvom",
                    styles: "border-radius:5px;margin-bottom:10px;position:relative;z-index:0;"
                };
            const n = (0, r.ZP)("div", {
                target: "ea7za0"
            })((({
                isVideoFileBlock: e
            }) => e && i))
        },
        20922: (e, t, o) => {
            o.d(t, {
                R: () => i
            });
            var r = o(50700);
            const i = (0, r.ZP)("div", {
                target: "e1wqiybj0"
            })("padding:25px 16px 0;color:", (0, r.rS)("white"), ";font-size:14px;line-height:18px;font-weight:600;z-index:2;pointer-events:none;text-shadow:1px 1px rgba(0,0,0,0.6);")
        },
        58605: (e, t, o) => {
            o.d(t, {
                xt: () => f,
                Rh: () => l,
                id: () => h,
                ON: () => b
            });
            var r = o(50700);
            o(67294);
            const i = o.p + "images/muted.0c4b4f07.svg";
            const n = o.p + "images/not-muted.08679cdf.svg";
            var a = o(84198);
            const s = e => (0, r.iv)("pointer-events:auto;cursor:pointer;background-size:24px 24px;background-repeat:no-repeat;background-position:center center;z-index:2;filter:drop-shadow(0 0.5px 1px rgba(0,0,0,0.6));transition:opacity 200ms cubic-bezier(0.165,0.84,0.44,1);", e.muted && (0, r.iv)("background-image:url(", i, ");"), " ", !e.muted && (0, r.iv)("background-image:url(", n, ");")),
                l = (0, r.ZP)("div", {
                    target: "e174g8bu0"
                })("position:absolute;/* @noflip */ right:2px;bottom:2px;width:44px;height:44px;", s),
                c = ["ready", "paused", "complete"];
            var d = {
                    name: "1bvspcf",
                    styles: "&:hover{opacity:1;}"
                },
                p = {
                    name: "1dxihrj",
                    styles: "opacity:1;&:hover{opacity:0.85;}"
                },
                m = {
                    name: "q7lffx",
                    styles: "opacity:0;"
                };
            const h = (0, r.ZP)("div", {
                target: "e174g8bu1"
            })("position:static;/* @noflip */ right:auto;bottom:auto;/* @noflip */ margin-left:8px;fill:white;transform:scale(0.9);width:24px;height:24px;", s, " ", (({
                playState: e
            }) => "loading" === e && m), " ", (({
                playState: e
            }) => -1 !== c.indexOf(e) && p), " ", (({
                playState: e
            }) => "playing" === e && d));
            var u = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                },
                g = {
                    name: "1dacand",
                    styles: "padding-top:0;"
                };
            const b = (0, r.ZP)("div", {
                    target: "e174g8bu2"
                })("display:flex;align-items:center;color:#fff;font-size:13px;text-shadow:0px 0.5px 1px rgba(0,0,0,0.25);opacity:0;transition:opacity 300ms cubic-bezier(0.165,0.84,0.44,1);pointer-events:all;height:16px;/* @noflip */ padding:12px 12px 12px 16px;", a.S.className, "{flex:1;}", (({
                    hasCaptions: e
                }) => e && g), " ", (({
                    shiftUp: e
                }) => e && u)),
                f = (0, r.ZP)("div", {
                    target: "e174g8bu3"
                })({
                    name: "13s8c95",
                    styles: "width:35px;"
                })
        },
        84198: (e, t, o) => {
            o.d(t, {
                S: () => n
            });
            const r = {
                    name: "ye0csb",
                    styles: "background:rgba(255,255,255,0.4);height:4px;border-radius:10px;"
                },
                i = {
                    name: "rulasc",
                    styles: "border:none;height:12px;width:12px;border-radius:50%;background:white;margin-top:-4px;cursor:pointer;"
                },
                n = (0, o(50700).ZP)("input", {
                    target: "e6z2hgi0"
                })("appearance:none;background:transparent;margin:0 8px;&::-moz-range-track{", r, ";}&::-ms-track{", r, ";}&::-webkit-slider-runnable-track{appearance:none;", r, ";}&::-webkit-slider-thumb{appearance:none;", i, "}&::-moz-range-thumb{", i, "}&::-ms-thumb{", i, "}")
        },
        11397: (e, t, o) => {
            o.d(t, {
                P7: () => p,
                eA: () => m,
                iC: () => x,
                pG: () => u,
                ze: () => l
            });
            var r = o(50700),
                i = o(20922);
            const n = ["ready", "paused", "complete"];
            var a = {
                    name: "1wvlf2b",
                    styles: "transition-delay:1s;opacity:0;"
                },
                s = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                };
            const l = (0, r.ZP)("div", {
                target: "eq0hiyd0"
            })("opacity:0;position:absolute;top:0px;width:100%;height:100%;pointer-events:none;z-index:2;display:flex;justify-content:center;align-items:center;transition:opacity 200ms cubic-bezier(0.165,0.84,0.44,1);", (({
                mobile: e,
                playState: t
            }) => (e || -1 !== n.indexOf(t)) && s), " ", (({
                mobile: e,
                playState: t
            }) => e && "playing" === t && a));
            var c = {
                    name: "ir8k3b",
                    styles: "&:after{opacity:0;}"
                },
                d = {
                    name: "y4mn9d",
                    styles: "&:after{width:100%;height:80px;content:'';position:absolute;pointer-events:none;bottom:0;right:0;left:0;background-size:100% 100px;background-color:linear-gradient( 180deg,rgba(0,0,0,0.0001) 0%,rgba(0,0,0,0.5) 100% );border-bottom-left-radius:5px;border-bottom-right-radius:5px;}"
                };
            const p = (0, r.ZP)("div", {
                    target: "eq0hiyd1"
                })("position:relative;overflow:hidden;border-radius:5px;height:100%;width:100%;cursor:pointer;display:flex;align-items:center;video{flex:1;}&:hover ", l.className, "{opacity:1;}", (({
                    noControls: e
                }) => e && (0, r.iv)(i.R.className, "{padding-bottom:12px;}")), " ", (({
                    hasCaptions: e,
                    hasAudio: t
                }) => (e || t) && d), " ", (({
                    playState: e
                }) => "loading" === e && c), " .intercom-video-loading{position:absolute;border-radius:5px;top:0;left:0;right:0;bottom:0;height:100%;background-color:", (0, r.rS)("white"), ";}"),
                m = (0, r.ZP)("div", {
                    target: "eq0hiyd2"
                })({
                    name: "1464hsv",
                    styles: "cursor:pointer;border-radius:5px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;"
                }),
                h = (0, r.F4)("50%{transform:rotate(-66deg);}100%{transform:rotate(0deg);}"),
                u = (0, r.ZP)("span", {
                    target: "eq0hiyd3"
                })("cursor:pointer;display:flex;justify-content:center;align-items:center;width:48px;height:48px;pointer-events:auto;background-color:", (0, r.rS)("buttonTextColor"), ";border-radius:120px;transition:all 0.2s ease-out;box-shadow:0px 2px 32px rgba(0,0,0,0.14),0px 1px 6px rgba(0,0,0,0.06);&:hover{transform:scale(1.25);}svg{", (({
                    complete: e
                }) => e && (0, r.iv)("animation-name:", h, ";animation-duration:400ms;animation-timing-function:cubic-bezier(0.165,0.84,0.44,1);")), " path,rect{fill:", (0, r.rS)("buttonBackgroundColor"), ";}}");
            var g = {
                    name: "q7lffx",
                    styles: "opacity:0;"
                },
                b = {
                    name: "r49gjn",
                    styles: "transform:translateY(0);"
                },
                f = {
                    name: "hahszo",
                    styles: "/* @noflip */ background:linear-gradient(180deg,rgba(0,0,0,0.0001) 0%,rgba(0,0,0,0.5) 100%);"
                };
            const x = (0, r.ZP)("div", {
                target: "eq0hiyd4"
            })("opacity:1;position:absolute;transform:translateY(28px);bottom:0px;width:100%;z-index:2;pointer-events:none;background-size:100% 100px;/* @noflip */ background-color:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.32) 100%);border-bottom-left-radius:5px;border-bottom-right-radius:5px;transition:all 300ms cubic-bezier(0.165,0.84,0.44,1);", (({
                hasCaptions: e
            }) => e && f), " ", (({
                shiftUp: e
            }) => e && b), " ", (({
                isLoading: e
            }) => e && g))
        },
        15300: (e, t, o) => {
            o.d(t, {
                v: () => r
            });
            const r = (0, o(50700).ZP)("div", {
                target: "e1r1zo9e0"
            })({
                name: "bb7jsb",
                styles: "position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;background:transparent;"
            })
        },
        3748: (e, t, o) => {
            o.d(t, {
                Z: () => r
            });
            const r = o.p + "images/close.c92dae59.png"
        },
        41679: (e, t, o) => {
            o.d(t, {
                Z: () => r
            });
            const r = o.p + "images/close@2x.d4bf5614.png"
        },
        33200: (e, t, o) => {
            o.d(t, {
                Z: () => r
            });
            const r = o.p + "images/dismiss.89699d82.png"
        },
        56787: (e, t, o) => {
            o.d(t, {
                Z: () => r
            });
            const r = o.p + "images/dismiss@2x.eeb95879.png"
        },
        93289: (e, t, o) => {
            o.d(t, {
                Z: () => r
            });
            const r = o.p + "images/green-check-icon.aea23b0f.png"
        },
        1638: (e, t, o) => {
            o.d(t, {
                Z: () => r
            });
            const r = o.p + "images/green-check-icon@2x.88e65815.png"
        }
    }
]);