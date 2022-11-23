/*! For license information please see js-widgets-vault-vault.a1a820188a608ccd17338441f4a1.js.LICENSE.txt */
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([[328], {
    5130: (e,t,n)=>{
        "use strict";
        let a;
        n.d(t, {
            x: ()=>o,
            q: ()=>i
        });
        const o = ()=>{
            if (!a)
                throw new Error("Sandbox has not been set for sandboxUtil");
            return a
        }
          , i = e=>{
            a = e
        }
    }
    ,
    9181: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>Eo
        });
        var a = n(9713)
          , o = n.n(a)
          , i = n(9297)
          , r = n.n(i)
          , c = n(79)
          , l = n(6374)
          , s = n.n(l)
          , d = n(2333)
          , u = n.n(d)
          , p = n(5130);
        let m;
        const h = ()=>{
            if (!m)
                throw new Error("WidgetContext was not set");
            return m
        }
        ;
        var g = n(7010);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const b = {
            isProd: !1,
            apiKey: "preprdakyresw7JPdK9pAVi7FwnK41H8sw1W47M2",
            fdpVaultEnv: "e2e",
            documentServiceUrl: "https://financialdocument-e2e.platform.intuit.com",
            myttUrl: u().constants.app.LEGACY_URL_ROOTS.PREPROD,
            crms: "https://crmservices-e2e.api.intuit.com"
        }
          , x = y(y({}, b), {}, {
            fdpVaultEnv: "prf",
            documentServiceUrl: "https://financialdocument-prf.platform.intuit.com",
            myttUrl: "https://prf.myturbotax.intuit.com",
            crms: "https://crmservices-prf.api.intuit.com"
        })
          , E = {
            isProd: !0,
            apiKey: "prdakyresRWUjN5Mg2qaYCiDH4JTE7pF18T1VQBL",
            fdpVaultEnv: "prod",
            documentServiceUrl: "https://financialdocument.platform.intuit.com",
            myttUrl: u().constants.app.LEGACY_URL_ROOTS.PROD,
            crms: "https://crmservices.api.intuit.com"
        }
          , w = {
            dev: b,
            e2e: b,
            perf: x,
            cperf: x,
            prod: E
        };
        let T;
        const S = ()=>{
            if (!T) {
                const e = (0,
                p.x)().appContext.getEnvironment();
                T = w[e] || E
            }
            return T
        }
          , v = ()=>S().apiKey
          , C = ()=>S().documentServiceUrl
          , I = ()=>S().fdpVaultEnv;
        let _;
        var O = n(5694)
          , D = n.n(O)
          , P = n(7561);
        const A = "CHANGE_UPLOADSTATE"
          , k = "CHANGE_SELECTEDTAXYEAR"
          , R = "NOTIFY_READY"
          , N = "TRIGGER_UPLOAD"
          , L = "TRIGGER_ADD_PLUS"
          , j = "TRIGGER_STORAGE_CAPACITY_SCREEN"
          , F = "UPDATE_ANALYTICS_STATE"
          , U = "TRIGGER_MOBILE_DOWNLOAD_INSTRUCTIONS"
          , Y = "TRIGGER_TRA_LOCKOUT_SCREEN"
          , M = "UPDATE_AVAILABLE_TAX_YEARS"
          , W = "PUBLISH_TAX_RETURN_DOC_ID"
          , B = "CLEAR_ONREADY_STATE"
          , G = "UPDATE_EXTENDED_PROPERTIES"
          , z = "CHANGE_FOLDER_ID";
        function q(e) {
            return {
                type: A,
                payload: e
            }
        }
        function V(e) {
            return {
                type: N,
                payload: e
            }
        }
        function H(e) {
            return {
                type: L,
                payload: e
            }
        }
        function Z(e) {
            return {
                type: j,
                payload: e
            }
        }
        function K(e) {
            return {
                type: W,
                docId: e
            }
        }
        function X(e) {
            return {
                type: k,
                payload: e
            }
        }
        function $(e) {
            return {
                type: R,
                payload: e
            }
        }
        function J(e) {
            return {
                type: F,
                payload: e
            }
        }
        function Q(e) {
            return {
                type: M,
                additionalTaxYearArray: e
            }
        }
        function ee(e) {
            return {
                type: U,
                payload: e
            }
        }
        function te(e) {
            return {
                type: Y,
                payload: e
            }
        }
        function ne() {
            return {
                type: B
            }
        }
        function ae(e) {
            return {
                type: G,
                payload: e
            }
        }
        const oe = {
            changeUploadState: q,
            triggerUpload: V,
            triggerAddPlus: H,
            triggerStorageCapacityScreen: Z,
            publishTaxReturnDocId: K,
            changeSelectedTaxYear: X,
            notifyReady: $,
            changeAnalyticsState: J,
            updateAvailableTaxYears: Q,
            triggerMobileDownloadInstructions: ee,
            triggerTRALockoutScreen: te,
            clearOnReadyState: ne,
            updateExtendedProperties: ae
        }
          , ie = Object.freeze({
            INACTIVE: "INACTIVE",
            UPLOADING: "UPLOADING",
            MANUAL_CLASSIFICATION: "MANUAL_CLASSIFICATION",
            AUTO_CLASSIFICATION: "AUTO_CLASSIFICATION",
            WRONG_CLASSIFICATION: "WRONG_CLASSIFICATION",
            COMPLETE: "COMPLETE",
            ERROR: "ERROR",
            TRYAGAIN: "TRYAGAIN"
        });
        function re(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? re(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const le = {
            status: ie.INACTIVE,
            errorCode: void 0,
            docId: void 0,
            docTypeId: void 0
        }
          , se = Object.freeze({
            LISTVIEW: "LISTVIEW",
            UPLOADWIDGET: "UPLOADWIDGET",
            DOCWIDGET: "DOCWIDGET",
            LOCKOUTVIEW: "LOCKOUTVIEW"
        });
        function de(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? de(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const pe = {
            notifiedReady: !1,
            docListWidgetReady: !1,
            docWidgetReady: !1,
            uploadWidgetReady: !1,
            lockoutScreenReady: !1
        };
        function me(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function he(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? me(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const ge = {
            event_sender_purpose: "prod",
            event_sender_name: "my_docs",
            scope_area: "my_docs",
            event_sender_version: "my_docs:",
            screen: "unknown"
        }
          , fe = ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"];
        function ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const xe = {
            AUTO_CLASSIFICATION_ENABLED: !1
        }
          , Ee = (0,
        P.combineReducers)({
            uploadState: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === A ? ce(ce({}, e), t.payload) : e
            },
            selectedTaxYear: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === k ? t.payload : e
            },
            notifyReady: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                const n = ue({}, e);
                switch (t.type) {
                case R:
                    switch (t.payload) {
                    case se.LISTVIEW:
                        n.docListWidgetReady = !0;
                        break;
                    case se.DOCWIDGET:
                        n.docWidgetReady = !0;
                        break;
                    case se.UPLOADWIDGET:
                        n.uploadWidgetReady = !0;
                        break;
                    case se.LOCKOUTVIEW:
                        n.lockoutScreenReady = !0
                    }
                    return (n.docListWidgetReady && n.uploadWidgetReady || n.lockoutScreenReady) && !n.notifiedReady && (u().runtimeGlobals.notifyReady(),
                    n.notifiedReady = !0),
                    n;
                case B:
                    return ue({}, pe);
                default:
                    return e
                }
            },
            uploadTrigger: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === N ? t.payload : e
            },
            addPlusState: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === L ? t.payload : e
            },
            storageCapacityScreenState: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === j ? t.payload : e
            },
            analyticsState: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === F ? he(he({}, e), t.payload) : e
            },
            mobileDownloadInstructions: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === U ? t.payload : e
            },
            traLockoutScreenState: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Y ? t.payload : e
            },
            availableTaxYears: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === M ? [...fe, ...t.additionalTaxYearArray] : e
            },
            taxReturnPDFData: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === W ? t.docId : e
            },
            extendedProperties: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === G ? be(be({}, e), t.payload) : e
            },
            folderId: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === z ? t.payload : e
            }
        })
          , we = [D()]
          , Te = [(0,
        P.applyMiddleware)(...we)];
        var Se = n(8500);
        let ve;
        const Ce = ()=>(ve = ve || (ve = S().isProd ? function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0,
            P.createStore)(Ee, e, ...Te)
        }() : function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const t = [D()]
              , n = [(0,
            P.applyMiddleware)(...t)]
              , a = (0,
            Se.Uo)({
                name: "MyDocs"
            });
            return (0,
            P.createStore)(Ee, e, a(...n))
        }()),
        ve);
        var Ie = n(4229)
          , _e = n.n(Ie)
          , Oe = n(1617)
          , De = (n(6523),
        n(9914))
          , Pe = n.n(De)
          , Ae = n(7469)
          , ke = n.n(Ae)
          , Re = n(7154)
          , Ne = n.n(Re);
        function Le(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Le(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const Fe = ()=>{
            const e = Ce().getState()
              , {analyticsState: t} = e;
            return {
                SCREEN: t.screen,
                SCREEN_DETAIL1: t.sub_scope_area || "",
                SCREEN_TOPIC: t.scope_area
            }
        }
          , Ue = ()=>{
            const e = Ce().getState()
              , {analyticsState: t} = e;
            return t
        }
          , Ye = e=>{
            const t = Object.assign({}, e);
            return t.name = t.name || t.screen,
            t.category = t.category || t.scope_area,
            t
        }
          , Me = {
            trackPageLoad: e=>{
                (0,
                p.x)().analytics.trackEvent(je(je({}, Fe()), {}, {
                    EVENT_CATEGORY: "Screen",
                    EVENT_NAME: "ScreenView",
                    EVENT_CATEGORY_AND_NAME: "Screen|ScreenView"
                })),
                (0,
                p.x)().analytics.track(Ye(je(je({}, Ue()), {}, {
                    action: "viewed",
                    object: "content"
                }, e)))
            }
            ,
            trackClick: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                p.x)().analytics.trackEvent(je(je({}, Fe()), {}, {
                    EVENT_CATEGORY: "dom",
                    EVENT_NAME: "click",
                    EVENT_CATEGORY_AND_NAME: "dom|click",
                    CLICK_TEXT: e.ui_object_detail,
                    CLICK_GENERALIZED: e.task_name
                }, t)),
                (0,
                p.x)().analytics.track(Ye(je(je({}, Ue()), {}, {
                    action: "engaged",
                    object: "content",
                    ui_action: "clicked"
                }, e)))
            },
            trackStartTask: e=>{
                (0,
                p.x)().analytics.track(Ye(je(je({}, Ue()), {}, {
                    action: "started",
                    object: "task"
                }, e)))
            }
            ,
            trackCompleteTask: e=>{
                (0,
                p.x)().analytics.track(Ye(je(je({}, Ue()), {}, {
                    action: "completed",
                    object: "task"
                }, e)))
            }
            ,
            trackFailTask: e=>{
                (0,
                p.x)().analytics.track(Ye(je(je({}, Ue()), {}, {
                    action: "failed",
                    object: "task"
                }, e)))
            }
            ,
            trackSubmitInfo: e=>{
                (0,
                p.x)().analytics.track(Ye(je(je({}, Ue()), {}, {
                    action: "submitted",
                    object: "information"
                }, e)))
            }
        }
          , We = Pe().div.withConfig({
            displayName: "FooterWrapper",
            componentId: "sc-1bp8m54-0"
        })(["display:flex;flex-direction:row;width:100%;@media all and (max-width:991px){margin-top:auto;padding-top:40px;flex-direction:column-reverse;}@media all and (min-width:992px){padding-top:20px;border-top:1px solid #ddd;display:flex;justify-content:flex-end;margin-top:100px;}"]);
        var Be = n(3096);
        const Ge = Pe()(Be.ZP).withConfig({
            displayName: "FooterButton__ScStyledCGDSButton",
            componentId: "sc-100hhe2-0"
        })(["@media all and (min-width:992px){margin-left:10px !important;min-width:200px !important;}@media all and (max-width:991px){margin-top:20px !important;width:100% !important;&:first-of-type{margin-bottom:0 !important;}}"])
          , ze = Pe()(We).withConfig({
            displayName: "UploadWidgetFooter__ScFooterWrapper",
            componentId: "sc-1b5bqgi-0"
        })(["", "}"], (e=>{
            let {uploadState: t} = e;
            return t.status === ie.TRYAGAIN ? "\n        margin-top: 50px;\n    " : "\n        margin-top: 100px;\n    "
        }
        ))
          , qe = (0,
        c.connect)((e=>({
            uploadState: e.uploadState,
            selectedTaxYear: e.selectedTaxYear
        })), (e=>({
            changeUploadState: t=>e(q(t))
        })))((e=>{
            let {renderNewWidgetInstance: t, uploadState: n, changeUploadState: a} = e;
            const o = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "primary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Try Again"
                    }),
                    a({
                        status: ie.TRYAGAIN
                    }),
                    t()
                }
                ,
                type: "Button"
            }, "Try Again")
              , i = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "tertiary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Close"
                    }),
                    a({
                        status: ie.INACTIVE
                    }),
                    t()
                }
                ,
                type: "Button"
            }, "Close")
              , c = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "tertiary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Cancel"
                    }),
                    a({
                        status: ie.INACTIVE
                    }),
                    t()
                }
                ,
                type: "Button"
            }, "Cancel");
            let l = null;
            switch (n.status) {
            case ie.ERROR:
                l = r().createElement(r().Fragment, null, o, i);
                break;
            case ie.TRYAGAIN:
                l = c
            }
            return l && r().createElement(ze, {
                uploadState: n
            }, l)
        }
        ))
          , Ve = Pe().div.withConfig({
            displayName: "UploadWidgetHeader__ScHeaderWrapper",
            componentId: "sc-1xrb3uc-0"
        })(["margin-bottom:20px;align-items:center;display:flex;flex-direction:column;text-align:center;"])
          , He = Pe().h2.withConfig({
            displayName: "UploadWidgetHeader__ScUploadTitle",
            componentId: "sc-1xrb3uc-1"
        })(["margin:0 0 20px;"])
          , Ze = Pe().h4.withConfig({
            displayName: "UploadWidgetHeader__ScUploadDescription",
            componentId: "sc-1xrb3uc-2"
        })(["margin:0 0 20px;"])
          , Ke = {
            UPLOADING: {
                title: "Hang tight!",
                description: "We're working on uploading your file..."
            },
            MAX_FILE_SIZE_EXCEEDED: {
                title: "Hmm, that file was too big",
                description: "Please make sure your file is smaller than 30MB and try uploading again."
            },
            ZERO_FILE_SIZE_NOT_ALLOWED: {
                title: "Hmm, this file looks empty",
                description: "Please select a different file and try again."
            },
            GENERIC_ERROR: {
                title: "Hmm, looks like we've hit a snag",
                description: "There was an issue uploading your file."
            }
        }
          , Xe = e=>{
            let {uploadState: t, changeAnalyticsState: n} = e
              , a = ""
              , o = "";
            return t.status === ie.ERROR || t.status === ie.TRYAGAIN ? Ke[t.errorCode] ? ({title: a, description: o} = Ke[t.errorCode]) : ({title: a, description: o} = Ke.GENERIC_ERROR) : ({title: a, description: o} = Ke[t.status]),
            n({
                screen: "UploadWidget|".concat(t.status)
            }),
            Me.trackPageLoad(),
            r().createElement(Ve, null, r().createElement(He, null, a), r().createElement(Ze, null, o))
        }
        ;
        Xe.propTypes = {
            uploadState: _e().shape({
                status: _e().string.isRequired,
                docId: _e().string,
                errorCode: _e().string
            }).isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        const $e = (0,
        c.connect)((e=>({
            uploadState: e.uploadState
        })), (e=>({
            changeAnalyticsState: t=>e(J(t))
        })))(Xe)
          , Je = Pe().select.withConfig({
            displayName: "dropdown",
            componentId: "dmqjin-0"
        })(["appearance:none;font-size:16px;background-repeat:no-repeat;background-color:transparent;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' focusable='false' viewBox='0 0 30 17' class='DropDown-chevron' width='14px' height='14px' fill='currentColor' name='chevron-down'%3E%3Cpath d='M30 1.896L16.076 16.508c-.334.33-.693.492-1.075.492-.384 0-.743-.162-1.077-.492L0 1.896 2.153 0 15 13.419 27.847 0 30 1.896z'%3E%3C/path%3E%3C/svg%3E\");width:100%;border:1px solid #babec5;padding:10px 34px 10px 10px;background-position:right 10px top 50%;font-weight:500;border-radius:5px;"]);
        var Qe = n(7484)
          , et = n.n(Qe)
          , tt = n(6808)
          , nt = n.n(tt);
        const at = ()=>{
            const e = (0,
            p.x)().extensions.TTO.getNativeAppInfo();
            return !(!e || !e.isNative)
        }
          , ot = ()=>!!nt().get("authentication.token")
          , it = ()=>at() && ot() ? "Bearer ".concat(nt().get("authentication.token")) : "Intuit_APIKey intuit_apikey=".concat(v())
          , rt = ()=>u().runtimeGlobals.props.widgetContext.authId
          , ct = e=>{
            let {id: t, name: n, documentType: a, taxYear: o, is7216: i} = e;
            const r = "".concat(C(), "/v2/documents/").concat(t)
              , c = {
                commonAttributes: {
                    is7216: i || !0
                }
            };
            n && (c.commonAttributes.name = n),
            a && (c.commonAttributes.documentType = a),
            o && (c.commonAttributes.taxYear = o);
            const l = "".concat(et()(new Date).toString());
            return u().helpers.fetchWrapper.fetch(r, {
                fetchOptions: {
                    credentials: "include",
                    method: "PUT",
                    headers: {
                        Authorization: it(),
                        "Content-Type": "application/json",
                        "If-Unmodified-Since": l
                    },
                    body: JSON.stringify(c)
                }
            })
        }
          , lt = ()=>{
            const e = "".concat(C(), "/v2/documents?offeringId=Intuit.cg.myturbotax&ownership=owned");
            return u().helpers.fetchWrapper.jsonFetch(e, {
                fetchOptions: {
                    credentials: "include",
                    method: "GET",
                    headers: {
                        Authorization: it(),
                        "Content-Type": "application/json"
                    }
                }
            }).then((e=>{
                let t = 0;
                const n = [];
                e.documents && e.documents.forEach((e=>{
                    if (e.commonAttributes && e.commonAttributes.domainAttributes && e.commonAttributes.domainAttributes[0] && e.commonAttributes.domainAttributes[0].nameValues && e.commonAttributes.domainAttributes[0].nameValues[0]) {
                        const t = e.commonAttributes.domainAttributes[0].nameValues[0].value;
                        parseInt(t, 10) < 2012 && !n.includes(t) && n.push(t)
                    }
                    t += e.systemAttributes.sourceLocators[0].size
                }
                )),
                n.length && Ce().dispatch(Q(n));
                return t > 5368709120
            }
            ))
        }
          , st = it
          , dt = ()=>"undefined" != typeof window ? "https://".concat(window.location.host, "/fdx") : ""
          , ut = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [2e3, 3e3];
            const n = "other"
              , a = [...t];
            return new Promise((t=>{
                const o = ()=>{
                    const i = a.shift()
                      , r = Date.now();
                    u().helpers.fetchWrapper.jsonFetch(e, {
                        timeout: void 0 !== i ? i : 5e3,
                        fetchOptions: {
                            credentials: "include",
                            cache: "no-cache",
                            headers: {
                                Authorization: it(),
                                "Content-Type": "application/json"
                            }
                        }
                    }).then((e=>{
                        if (e.commonAttributes && e.commonAttributes.documentType && "unknown" !== e.commonAttributes.documentType)
                            t(e.commonAttributes.documentType);
                        else if (i) {
                            const e = Date.now();
                            setTimeout((()=>{
                                o()
                            }
                            ), Math.max(i - (e - r), 0))
                        } else
                            t(n)
                    }
                    )).catch((e=>{
                        if (i && e && e.message && e.message.includes("timed out")) {
                            const e = Date.now();
                            setTimeout((()=>{
                                o()
                            }
                            ), Math.max(i - (e - r), 0))
                        } else
                            t(n)
                    }
                    ))
                }
                  , i = a.shift() || 2e3;
                setTimeout((()=>{
                    o()
                }
                ), i)
            }
            ))
        }
          , pt = at
          , mt = ot
          , ht = rt
          , gt = async()=>{
            const e = "".concat(S().crms, "/v2/cases/open?authId=").concat(rt(), "&serviceType=Tax%20Advice&serviceType=Expert%20Review")
              , t = {
                credentials: "include",
                headers: {
                    Authorization: it(),
                    "Content-Type": "application/json;",
                    intuit_appid: "Intuit.app.uicomponents.mydocs"
                },
                method: "GET"
            };
            return u().logger.frontend.log("Fetching crms open cases"),
            fetch(e, t).then((e=>(u().logger.frontend.log("Successfully fetched open cases"),
            e.json()))).catch((e=>{
                throw u().logger.network.error.nonblocking("Failed to get open cases for authId ".concat(rt()), e),
                new Error("Failed to get open cases for authId ".concat(rt()))
            }
            ))
        }
          , ft = [{
            id: "1040",
            label: "1040"
        }, {
            id: "W2",
            label: "W-2"
        }, {
            id: "1098",
            label: "1098"
        }, {
            id: "1098-E",
            label: "1098-E"
        }, {
            id: "1098-T",
            label: "1098-T"
        }, {
            id: "1099-INT",
            label: "1099-INT"
        }, {
            id: "1099-DIV",
            label: "1099-DIV"
        }, {
            id: "1099-B",
            label: "1099-B"
        }, {
            id: "1099-R",
            label: "1099-R"
        }, {
            id: "1099-G",
            label: "1099-G"
        }, {
            id: "1099-MISC",
            label: "1099-MISC"
        }, {
            id: "1099-OID",
            label: "1099-OID"
        }, {
            id: "SSA-1099",
            label: "SSA-1099"
        }, {
            id: "1095-A",
            label: "1095-A"
        }, {
            id: "scheduleC",
            label: "Schedule C"
        }, {
            id: "invoice",
            label: "Invoice"
        }, {
            id: "receipt",
            label: "Receipts"
        }, {
            id: "propertyTaxBill",
            label: "Property tax bill"
        }, {
            id: "taxReturnReviewDoc",
            label: "Tax Return Review Doc"
        }, {
            id: "other",
            label: "Other"
        }]
          , yt = Object.freeze({
            PROMPT: "PROMPT",
            COMPLETE: "COMPLETE"
        });
        var bt = n(877);
        const xt = Pe()(Be.ZP).withConfig({
            displayName: "ManualClassificationFooter__ScStyledBackButton",
            componentId: "sc-94ioqg-0"
        })(["@media all and (min-width:992px){margin-right:auto !important;}@media all and (max-width:991px){margin-top:20px !important;width:100% !important;}"])
          , Et = (0,
        c.connect)((e=>({
            uploadState: e.uploadState
        })), (e=>({
            changeUploadState: t=>e(q(t)),
            triggerUpload: t=>e(V(t))
        })))((e=>{
            let {uploadState: t, classificationState: n, setClassificationState: a, saveDocTypeToFDP: o, changeUploadState: i, triggerUpload: c} = e;
            const l = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "tertiary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Upload another tax form"
                    }),
                    c(!0)
                }
                ,
                type: "Button"
            }, "Upload another tax form")
              , s = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "primary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Save",
                        document_id: t.docId,
                        screen_object_state: "".concat(t.status, ":").concat(t.docTypeId)
                    }, {
                        SCREEN_DETAIL1: t.docId,
                        SCREEN_DETAIL2: "".concat(t.status, "|").concat(t.docTypeId)
                    }),
                    o(),
                    a(yt.COMPLETE)
                }
                ,
                type: "Button"
            }, "Save")
              , d = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "primary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Done"
                    }),
                    i({
                        status: ie.INACTIVE
                    })
                }
                ,
                type: "Button"
            }, "Done")
              , u = r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "tertiary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Skip"
                    }),
                    i({
                        status: ie.INACTIVE
                    })
                }
                ,
                type: "Button"
            }, "Skip")
              , p = r().createElement(xt, {
                shape: "standard",
                theme: "turbotax",
                variant: "diminutive",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Back"
                    }),
                    a(yt.PROMPT)
                }
                ,
                type: "Button"
            }, r().createElement(bt.Z, {
                style: {
                    "margin-right": "5px"
                },
                inline: !0
            }), "Back");
            let m = null;
            switch (n) {
            case yt.PROMPT:
                m = r().createElement(r().Fragment, null, u, s);
                break;
            case yt.COMPLETE:
                m = r().createElement(r().Fragment, null, p, l, d)
            }
            return m && r().createElement(We, null, m)
        }
        ))
          , wt = Pe().div.withConfig({
            displayName: "ManualClassificationController__ScHeaderWrapper",
            componentId: "ztbd36-0"
        })(["margin-bottom:20px;align-items:center;display:flex;flex-direction:column;text-align:center;"])
          , Tt = Pe().div.withConfig({
            displayName: "ManualClassificationController__ScIcon",
            componentId: "ztbd36-1"
        })(["height:80px;width:80px;background-size:cover;background-repeat:no-repeat;background-image:url('", "');margin-bottom:20px;"], (e=>{
            let {url: t} = e;
            return t
        }
        ))
          , St = Pe().h2.withConfig({
            displayName: "ManualClassificationController__ScTitle",
            componentId: "ztbd36-2"
        })(["margin:0 0 20px;"])
          , vt = Pe().div.withConfig({
            displayName: "ManualClassificationController__ScDocTypeSelect",
            componentId: "ztbd36-3"
        })(["width:100%;max-width:600px;margin:0 20px;"])
          , Ct = Pe().label.withConfig({
            displayName: "ManualClassificationController__ScDocTypeLabel",
            componentId: "ztbd36-4"
        })(["max-width:none;width:100%;font-weight:inherit;display:block;"])
          , It = Pe().div.withConfig({
            displayName: "ManualClassificationController__ScDocTypeSelectTitle",
            componentId: "ztbd36-5"
        })(["text-align:left;margin-bottom:5px;"])
          , _t = Pe().div.withConfig({
            displayName: "ManualClassificationController__ScDocTypeSelectCaption",
            componentId: "ztbd36-6"
        })(["text-align:left;font-style:italic;margin-top:5px;"])
          , Ot = Pe().p.withConfig({
            displayName: "ManualClassificationController__ScCompleteCaption",
            componentId: "ztbd36-7"
        })(["font-size:18px;"])
          , Dt = e=>{
            let {uploadState: t, changeAnalyticsState: n, changeUploadState: a} = e;
            const [o,c] = (0,
            i.useState)(yt.PROMPT)
              , [l,s] = (0,
            i.useState)("document");
            (0,
            i.useEffect)((()=>{
                n({
                    screen: "ManualClassification|".concat(o)
                }),
                Me.trackPageLoad()
            }
            ), [n, o]);
            const d = e=>{
                s(e.target.value),
                a({
                    docTypeId: e.target.value
                })
            }
              , u = ()=>{
                const e = "document" === l ? "other" : l;
                ct({
                    id: t.docId,
                    documentType: e
                })
            }
            ;
            switch (o) {
            case yt.PROMPT:
                return r().createElement(r().Fragment, null, r().createElement(wt, null, r().createElement(Tt, {
                    url: (p = t.status,
                    p === ie.WRONG_CLASSIFICATION ? "https://lib.intuitcdn.net/img/icons/icn-form-template.svg" : "https://lib.intuitcdn.net/img/icons/icn-file-taxes.svg")
                }), r().createElement(St, null, (e=>e === ie.WRONG_CLASSIFICATION ? "Let us know which tax form you uploaded" : "Success! Now let us know which tax form you uploaded")(t.status))), r().createElement(vt, null, r().createElement(Ct, null, r().createElement(It, null, "Tax form"), r().createElement(Je, {
                    onChange: d,
                    value: l
                }, r().createElement("option", {
                    value: "document",
                    key: "document"
                }, "Select a tax form"), ft.map((e=>r().createElement("option", {
                    value: e.id,
                    key: e.id
                }, e.label)))), r().createElement(_t, null, "This is typically printed in bold on your form."))), r().createElement(Et, {
                    classificationState: o,
                    setClassificationState: c,
                    saveDocTypeToFDP: u
                }));
            case yt.COMPLETE:
                return (()=>{
                    let e = "document";
                    if ("other" !== l) {
                        const t = ft.filter((e=>e.id === l));
                        t.length && (e = t[0].label)
                    }
                    return r().createElement(r().Fragment, null, r().createElement(wt, null, r().createElement(Tt, {
                        url: "https://lib.intuitcdn.net/img/icons/icn-inventory.svg"
                    }), r().createElement(St, null, "Great, thanks for telling us about your ", e), r().createElement(Ot, null, "This form will be stored securely in MyDocs™. Keep in mind that the info on this form will not be added to your tax return."), r().createElement(Ot, null, "Now let us know if you’re all done or want to upload another form.")), r().createElement(Et, {
                        classificationState: o,
                        setClassificationState: c
                    }))
                }
                )();
            default:
                return null
            }
            var p
        }
        ;
        Dt.propTypes = {
            uploadState: _e().shape({
                status: _e().string.isRequired,
                docId: _e().string
            }).isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        Dt.propTypes = {
            uploadState: _e().instanceOf(Object).isRequired,
            changeUploadState: _e().func.isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        const Pt = (0,
        c.connect)((e=>({
            uploadState: e.uploadState
        })), (e=>({
            changeUploadState: t=>e(q(t)),
            changeAnalyticsState: t=>e(J(t))
        })))(Dt);
        var At = n(3142)
          , kt = n(3107);
        const Rt = Pe().div.withConfig({
            displayName: "AutoClassification__ScContainer",
            componentId: "sc-1rcmff-0"
        })(["margin-top:20px;display:flex;align-items:center;text-align:center;flex-direction:column;"])
          , Nt = Pe().div.withConfig({
            displayName: "AutoClassification__ScText",
            componentId: "sc-1rcmff-1"
        })(["margin-bottom:20px;"])
          , Lt = Pe()(At.ZP).withConfig({
            displayName: "AutoClassification__ScImage",
            componentId: "sc-1rcmff-2"
        })(["width:80px !important;margin-bottom:20px;"])
          , jt = Pe().div.withConfig({
            displayName: "AutoClassification__ScButtonContainer",
            componentId: "sc-1rcmff-3"
        })(["display:flex;width:100%;margin-top:20px;@media all and (max-width:768px){justify-content:center;}"])
          , Ft = Pe().div.withConfig({
            displayName: "AutoClassification__ScMockUploadWidget",
            componentId: "sc-1rcmff-4"
        })(["border-bottom:1px solid #ddd;width:100%;display:flex;text-align:left;"])
          , Ut = e=>{
            let {uploadState: t, changeUploadState: n, triggerUpload: a, changeAnalyticsState: o} = e;
            return o({
                screen: "Autoclassification"
            }),
            Me.trackPageLoad(),
            r().createElement(r().Fragment, null, r().createElement(Rt, null, r().createElement(Lt, {
                alt: "Folder",
                src: "https://lib.intuitcdn.net/img/icons/icn-file-taxes.svg"
            }), r().createElement(Nt, null, r().createElement(kt.H3, null, "Your ", t.docType, " was uploaded successfully!")), r().createElement(Nt, null, "This form will be stored securely in MyDocs™. Keep in mind that the info on this form will not be added to your tax return."), r().createElement(Nt, null, "Now let us know if you're all done or want to upload another form."), r().createElement(Ft, {
                className: "fdx-file-upload-container fdx-file-upload-status-complete"
            }, r().createElement("div", {
                className: "fdx-file-upload-status-icon fdx-icon fdx-icon-success"
            }), r().createElement("div", {
                className: "fdx-file-upload-text-container fdx-file-upload-text-filename"
            }, t.docName)), r().createElement(jt, null, r().createElement(Be.ZP, {
                theme: "turbotax",
                size: "medium",
                variant: "tertiary",
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "This isn't a ".concat(t.docType)
                    }),
                    n({
                        status: ie.WRONG_CLASSIFICATION
                    })
                }
            }, "This isn't a ", t.docType))), r().createElement(We, null, r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "tertiary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Upload another tax form"
                    }),
                    a(!0)
                }
                ,
                type: "Button"
            }, "Upload another tax form"), r().createElement(Ge, {
                shape: "standard",
                theme: "turbotax",
                variant: "primary",
                fullWidth: !1,
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Done"
                    }),
                    n({
                        status: ie.INACTIVE
                    })
                }
                ,
                type: "Button"
            }, "Done")))
        }
        ;
        Ut.propTypes = {
            uploadState: _e().shape({
                status: _e().string.isRequired,
                errorCode: _e().string,
                docId: _e().string,
                docType: _e().string,
                docName: _e().string
            }).isRequired,
            changeUploadState: _e().func.isRequired,
            triggerUpload: _e().func.isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        const Yt = (0,
        c.connect)((e=>({
            uploadState: e.uploadState
        })), (e=>({
            changeUploadState: t=>e(q(t)),
            triggerUpload: t=>e(V(t)),
            changeAnalyticsState: t=>e(J(t))
        })))(Ut);
        function Mt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Wt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Mt(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const Bt = Pe().div.withConfig({
            displayName: "UploadController__ScUploadPageWrapper",
            componentId: "sc-2le0w9-0"
        })(["display:flex;justify-content:center;padding:50px;width:100%;min-height:calc(100vh - 125px);@media all and (max-width:768px){padding:20px;}"])
          , Gt = Pe().div.withConfig({
            displayName: "UploadController__ScUploadContentWrapper",
            componentId: "sc-2le0w9-1"
        })(["display:flex;flex-direction:column;align-items:center;flex:0 1 1000px;"])
          , zt = Pe().div.withConfig({
            displayName: "UploadController__ScWidgetWrapper",
            componentId: "sc-2le0w9-2"
        })(["width:100%;.fdx-header{display:none !important;}.fdx-icon-delete{display:none;}.fdx-widget-container{padding:0 !important;}.fdx-select-file-container{cursor:default !important;}.fdx-drop-zone{cursor:pointer !important;}.fdx-footer{border-top:solid 1px #dcdcdc !important;}", " ", ""], (e=>{
            let {uploadState: t} = e;
            return t.status !== ie.TRYAGAIN && "\n      .fdx-select-file-container {\n        display: none;\n      }\n    "
        }
        ), (e=>{
            let {isWidgetVisible: t} = e;
            return !t && "\n        display: none;\n      "
        }
        ));
        class qt extends r().Component {
            constructor(e) {
                super(e),
                this.state = {
                    instanceKey: (new Date).getTime()
                },
                this.uploadParentDivRef = r().createRef(),
                this.renderNewWidgetInstance = this.renderNewWidgetInstance.bind(this),
                this.fileInputChangeHandler = ()=>{
                    this.props.changeUploadState({
                        status: ie.UPLOADING,
                        errorCode: void 0,
                        docId: void 0
                    })
                }
            }
            shouldComponentUpdate(e) {
                return !e.uploadTrigger || (this.props.triggerUpload(!1),
                this.triggerFileInput(),
                !1)
            }
            componentDidUpdate(e) {
                e.selectedTaxYear !== this.props.selectedTaxYear && this.renderNewWidgetInstance()
            }
            getFdpUploadWidgetProps() {
                var e = this;
                let t = {
                    intuit_resourceOwnerId: ht(),
                    intuit_resourceOwnerType: "USER"
                };
                pt() && (t = Wt(Wt({}, t), {}, {
                    authorization: st()
                }));
                return {
                    widgetId: "fdp/uploadFiles",
                    folderId: this.props.selectedTaxYear >= 2020 && this.props.folderId,
                    onReady: ()=>{
                        this.props.notifyReady();
                        const e = this.uploadParentDivRef.current.querySelector('.fdx-drop-zone > input[type="file"]');
                        e.removeEventListener("change", this.fileInputChangeHandler),
                        e.addEventListener("change", this.fileInputChangeHandler)
                    }
                    ,
                    fdpSettings: {
                        apiKey: v(),
                        offeringId: "Intuit.cg.myturbotax",
                        environment: I(),
                        is7216: !0,
                        productName: "TurboTax",
                        theme: "ctg",
                        features: ["isdraganddropenabled"],
                        tokenOverrides: {
                            common: {
                                BROWSE: "Upload"
                            },
                            uploadWidget: {
                                MOBILE_BROWSE_TEXT: "Upload",
                                DEFAULT_DETAIL_TEXT: "Drag and drop your file here, or browse",
                                MOBILE_DETAIL_TEXT: "Tap to add your file",
                                MAX_FILE_SIZE_EXCEEDED: "Can't upload files over 30 MB"
                            }
                        },
                        offeringUrl: dt(),
                        headers: t
                    },
                    taxYear: this.props.selectedTaxYear,
                    onEvent: function(t) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            a[o - 1] = arguments[o];
                        switch (t) {
                        case "onUploadDocumentSuccess":
                            setTimeout((()=>{
                                e.renderNewWidgetInstance()
                            }
                            ), 0),
                            e.props.changeUploadState({
                                status: "other" === e.props.uploadState.docType ? ie.MANUAL_CLASSIFICATION : ie.AUTO_CLASSIFICATION,
                                docId: a[1].documentId,
                                docName: a[1].documentName
                            });
                            break;
                        case "onUploadDocumentCanceled":
                            e.renderNewWidgetInstance(),
                            e.props.changeUploadState({
                                status: ie.INACTIVE
                            })
                        }
                        console.log("fdp event", t, a)
                    },
                    onError: function(t, n, a) {
                        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        e.props.changeUploadState({
                            status: ie.ERROR,
                            errorCode: o.code
                        }),
                        console.log("fdp error", t, o)
                    },
                    multiple: !1,
                    accept: ".pdf,.jpg,.jpeg,.gif,.png,.bmp,.csv",
                    singleFileValidationFunction: e=>new Promise((t=>{
                        if (e.documentId)
                            if (this.props.extendedProperties.AUTO_CLASSIFICATION_ENABLED) {
                                const n = "".concat(C(), "/v2/documents/").concat(e.documentId);
                                ut(n).then((e=>{
                                    this.props.changeUploadState({
                                        docType: e
                                    })
                                }
                                )).catch((()=>{
                                    this.props.changeUploadState({
                                        docType: "other"
                                    })
                                }
                                )).finally((()=>{
                                    t({
                                        valid: !0
                                    })
                                }
                                ))
                            } else
                                this.props.changeUploadState({
                                    docType: "other"
                                }),
                                t({
                                    valid: !0
                                });
                        else
                            t({
                                valid: !1
                            })
                    }
                    ))
                }
            }
            triggerFileInput() {
                this.uploadParentDivRef.current.querySelector('.fdx-drop-zone > input[type="file"]').click()
            }
            isWidgetVisible() {
                return this.props.uploadState.status === ie.UPLOADING || this.props.uploadState.status === ie.ERROR || this.props.uploadState.status === ie.TRYAGAIN
            }
            renderNewWidgetInstance() {
                this.setState({
                    instanceKey: (new Date).getTime()
                })
            }
            render() {
                return r().createElement(Bt, null, r().createElement(Gt, null, r().createElement(r().Fragment, null, this.isWidgetVisible() && r().createElement($e, null), r().createElement(zt, {
                    ref: this.uploadParentDivRef,
                    uploadState: this.props.uploadState,
                    isWidgetVisible: this.isWidgetVisible()
                }, this.props.isDocWidgetReady && r().createElement(ke(), Ne()({
                    key: this.state.instanceKey
                }, this.getFdpUploadWidgetProps()))), this.isWidgetVisible() && r().createElement(qe, {
                    renderNewWidgetInstance: this.renderNewWidgetInstance
                })), (this.props.uploadState.status === ie.MANUAL_CLASSIFICATION || this.props.uploadState.status === ie.WRONG_CLASSIFICATION) && r().createElement(Pt, null), this.props.uploadState.status === ie.AUTO_CLASSIFICATION && r().createElement(Yt, null)))
            }
        }
        qt.propTypes = {
            uploadState: _e().shape({
                status: _e().string.isRequired,
                errorCode: _e().string,
                docId: _e().string,
                docType: _e().string
            }).isRequired,
            selectedTaxYear: _e().string.isRequired,
            folderId: _e().string.isRequired,
            isDocWidgetReady: _e().bool.isRequired,
            uploadTrigger: _e().bool.isRequired,
            triggerUpload: _e().func.isRequired,
            changeUploadState: _e().func.isRequired,
            notifyReady: _e().func.isRequired,
            extendedProperties: _e().shape({
                AUTO_CLASSIFICATION_ENABLED: _e().bool.isRequired
            }).isRequired
        };
        const Vt = (0,
        c.connect)((e=>({
            uploadState: e.uploadState,
            selectedTaxYear: e.selectedTaxYear,
            folderId: e.folderId,
            uploadTrigger: e.uploadTrigger,
            extendedProperties: e.extendedProperties,
            isDocWidgetReady: e.notifyReady.docWidgetReady
        })), (e=>({
            changeUploadState: t=>e(q(t)),
            triggerUpload: t=>e(V(t)),
            notifyReady: ()=>e($(se.UPLOADWIDGET))
        })))(qt);
        var Ht = n(2502);
        const Zt = {
            NOT_AVAILABLE: "NOT_AVAILABLE",
            NOT_STARTED: "NOT_STARTED",
            IN_PROGRESS: "IN_PROGRESS"
        };
        var Kt = n(3624)
          , Xt = n.n(Kt)
          , $t = n(7172)
          , Jt = n(4655);
        const Qt = Pe().div.withConfig({
            displayName: "Spinner__ScSpinnerContainer",
            componentId: "sc-1s4q5y8-0"
        })(["padding:20px;padding-bottom:25px;"])
          , en = Pe().img.withConfig({
            displayName: "Spinner__ScImage",
            componentId: "sc-1s4q5y8-1"
        })(["display:inline;@media (max-width:768px){margin-left:auto;margin-right:auto;}width:70px;"])
          , tn = e=>{
            let {fetchCompleteSuccess: t} = e;
            return r().createElement(Qt, null, t ? r().createElement(en, {
                src: "https://lib.intuitcdn.net/img/mytt/checkmark.svg"
            }) : r().createElement(Xt(), null))
        }
          , nn = " EDIT_DOC_INTERACTION"
          , an = "FAILURE_EVENT"
          , on = "SUCCESS_EVENT"
          , rn = "DEGRADE_EVENT"
          , cn = "Mydocs_Default_Action_Name"
          , ln = e=>{
            if (void 0 === e)
                return cn;
            return "".concat("Mydocs_FCI", "_").concat(e)
        }
          , sn = (e,t,n)=>{
            try {
                const a = (0,
                p.x)();
                if (!a)
                    return;
                const o = ((e,t,n)=>{
                    const a = ln(t);
                    if (a === cn)
                        return void e.logger.error("message=FCI cannot be marked ".concat(n, ". ").concat(a, " doesn't exist."));
                    const o = e.performance.getCustomerInteraction(a);
                    if (o)
                        return o;
                    e.logger.warn("message=FCI cannot be marked ".concat(n, ". ").concat(a, " doesn't exist"))
                }
                )(a, e, t);
                if (!o)
                    return;
                let i = "";
                switch (n && (o.addMetadata(n, !0),
                i = {
                    LOG_ERROR: n.toString()
                }),
                t) {
                case on:
                    o.success();
                    break;
                case rn:
                    o.setDegraded(i),
                    o.success();
                    break;
                case an:
                    o.fail(i);
                    break;
                default:
                    a.logger.error("message=FCI cannot be recorded as eventType is empty")
                }
            } catch (a) {}
        }
        ;
        function dn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function un(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? dn(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const pn = Pe().div.withConfig({
            displayName: "EditDoc__ScModalContent",
            componentId: "m7xp4-0"
        })(["text-align:", ";justify-content:left;"], (e=>{
            let {spinnerMode: t} = e;
            return t ? "center" : "left"
        }
        ))
          , mn = Pe().div.withConfig({
            displayName: "EditDoc__ScSubheading",
            componentId: "m7xp4-1"
        })(["padding-bottom:15px;"])
          , hn = Pe().div.withConfig({
            displayName: "EditDoc__ScButtonContainer",
            componentId: "m7xp4-2"
        })(["display:flex;"])
          , gn = Pe()(Be.ZP).withConfig({
            displayName: "EditDoc__ScButton",
            componentId: "m7xp4-3"
        })(["margin-right:15px !important;"])
          , fn = Pe().input.withConfig({
            displayName: "EditDoc__ScInput",
            componentId: "m7xp4-4"
        })(["padding:10px;font-size:16px;min-width:240px;border-radius:5px;border:1px solid #babec5;"])
          , yn = e=>{
            let {activeDoc: t, toggleEditModal: n, isFetchingState: a, setIsFetchingState: o, taxYears: c} = e;
            const l = (0,
            i.useRef)()
              , [s,d] = (0,
            i.useState)({
                editFileNameInput: t.commonAttributes.name,
                editTaxYearSelect: t.commonAttributes.taxYear,
                editDocTypeSelect: t.commonAttributes.documentType
            });
            (0,
            i.useEffect)((()=>()=>clearTimeout(l.current)), []);
            const m = ()=>{
                o(un(un({}, a), {}, {
                    isFetching: !0
                }));
                const e = ((e,t)=>{
                    try {
                        const n = (0,
                        p.x)();
                        if (!n)
                            return;
                        const a = ln(e);
                        return a === cn ? void n.logger.error("message=FCI cannot be created because interaction name is undefined") : n.performance.createCustomerInteraction(a, t)
                    } catch (n) {}
                }
                )(nn);
                ct({
                    id: t.id,
                    name: s.editFileNameInput,
                    documentType: s.editDocTypeSelect,
                    taxYear: s.editTaxYearSelect,
                    is7216: t.commonAttributes.is7216,
                    updatedDate: t.updated
                }).then((e=>{
                    o(un(un({}, a), {}, {
                        isFetching: !1,
                        fetchCompleteSuccess: !0
                    })),
                    u().logger.frontend.log("Document edited: ".concat(e)),
                    l.current = setTimeout((()=>n(null, !0)), 2e3),
                    sn(nn, on)
                }
                )).catch((e=>{
                    o(un(un({}, a), {}, {
                        fetchError: !0,
                        isFetching: !1
                    })),
                    u().logger.network.error.nonblocking("Unable to modify document: ".concat(e)),
                    sn(nn, an, "".concat(e))
                }
                )).finally((()=>{
                    (e=>{
                        if (!e)
                            return;
                        const t = (0,
                        p.x)();
                        if (t)
                            try {
                                t.performance.record(e)
                            } catch (n) {}
                    }
                    )(e)
                }
                ))
            }
              , h = ()=>a.isFetching || a.fetchCompleteSuccess;
            return r().createElement(pn, {
                spinnerMode: h()
            }, h() ? r().createElement(tn, {
                fetchCompleteSuccess: a.fetchCompleteSuccess
            }) : r().createElement(r().Fragment, null, r().createElement(mn, null, "You uploaded this document on ", et()(t.userCreateDate).format("M/D/YY"), "."), r().createElement(Jt.ZP, null, r().createElement(Jt.ZP.Label, null, "File name"), r().createElement(fn, {
                name: "editFileNameInput",
                onChange: e=>{
                    d(un(un({}, s), {}, {
                        [e.target.name]: e.target.value
                    }))
                }
                ,
                value: s.editFileNameInput
            })), r().createElement(Jt.ZP, null, r().createElement(Jt.ZP.Label, null, "Tax Year"), r().createElement(Je, {
                onChange: e=>{
                    Me.trackClick({
                        ui_object: "select",
                        ui_object_detail: "Tax Year",
                        sub_scope_area: "EditDocument"
                    }),
                    d(un(un({}, s), {}, {
                        editTaxYearSelect: e.target.value
                    }))
                }
                ,
                value: s.editTaxYearSelect
            }, c.map((e=>r().createElement("option", {
                value: e,
                key: e
            }, e))))), r().createElement(Jt.ZP, null, r().createElement(Jt.ZP.Label, null, "Tax form type"), r().createElement(Je, {
                onChange: e=>{
                    Me.trackClick({
                        ui_object: "select",
                        ui_object_detail: "Tax form type",
                        sub_scope_area: "EditDocument"
                    }),
                    d(un(un({}, s), {}, {
                        editDocTypeSelect: e.target.value
                    }))
                }
                ,
                value: s.editDocTypeSelect
            }, ft.map((e=>r().createElement("option", {
                value: e.id,
                key: e.id
            }, e.label))))), r().createElement(hn, null, r().createElement(gn, {
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Cancel",
                        sub_scope_area: "EditDocument"
                    }),
                    n()
                }
                ,
                fullWidth: !1,
                shape: "standard",
                size: "medium",
                variant: "secondary",
                theme: "turbotax"
            }, "Cancel"), !a.fetchError && r().createElement(gn, {
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Save",
                        sub_scope_area: "EditDocument",
                        document_id: t.id,
                        edit_doc_type: s.editDocTypeSelect,
                        edit_tax_year: s.editTaxYearSelect,
                        screen_object_state: "tax_year:".concat(s.editTaxYearSelect, "|form_type:").concat(s.editDocTypeSelect)
                    }, {
                        SCREEN_DETAIL1: t.id,
                        SCREEN_DETAIL2: s.editDocTypeSelect,
                        SCREEN_DETAIL3: s.editTaxYearSelect
                    }),
                    m()
                }
                ,
                fullWidth: !1,
                shape: "standard",
                size: "medium",
                variant: "primary",
                theme: "turbotax"
            }, "Save"))))
        }
        ;
        yn.propTypes = {
            activeDoc: _e().instanceOf(Object).isRequired,
            isFetchingState: _e().instanceOf(Object).isRequired,
            setIsFetchingState: _e().func.isRequired,
            toggleEditModal: _e().func.isRequired
        };
        const bn = (0,
        c.connect)((e=>({
            taxYears: e.availableTaxYears
        })))(yn)
          , xn = Pe().h3.withConfig({
            displayName: "EditModal__ScModalHeader",
            componentId: "sc-1ise8ef-0"
        })(["margin-top:0;"])
          , En = Pe()(xn).withConfig({
            displayName: "EditModal__ScModalHeaderAlt",
            componentId: "sc-1ise8ef-1"
        })(["text-align:left;"])
          , wn = Pe().div.withConfig({
            displayName: "EditModal__ScModalSubHeader",
            componentId: "sc-1ise8ef-2"
        })(["margin-bottom:20px;"])
          , Tn = e=>{
            let {open: t, toggleEditModal: n, activeDoc: a} = e;
            const [o,c] = (0,
            i.useState)({
                isFetching: !1,
                fetchError: !1,
                fetchCompleteSuccess: !1
            })
              , l = ()=>n(null, o.fetchCompleteSuccess);
            return r().createElement($t.ZP, {
                style: {
                    zIndex: "1"
                },
                size: "medium",
                open: t,
                onDismiss: l
            }, !o.isFetching && r().createElement($t.ZP.CloseButton, {
                onClick: l
            }), r().createElement($t.ZP.Body, null, (()=>{
                switch (!0) {
                case o.isFetching:
                    return r().createElement(xn, null, "We're saving your changes...");
                case o.fetchCompleteSuccess:
                    return Me.trackPageLoad({
                        sub_scope_area: "EditDocumentSuccess"
                    }),
                    r().createElement(xn, null, "Your changes have been saved!");
                case o.fetchError:
                    return Me.trackPageLoad({
                        sub_scope_area: "EditDocumentError"
                    }),
                    r().createElement(r().Fragment, null, r().createElement(xn, null, "Hmm, looks like we've hit a snag"), r().createElement(wn, null, "We weren't able to save your changes, please try again later."));
                default:
                    return Me.trackPageLoad({
                        sub_scope_area: "EditDocument"
                    }),
                    r().createElement(En, null, "Edit details")
                }
            }
            )(), !o.fetchError && r().createElement(bn, {
                setIsFetchingState: c,
                isFetchingState: o,
                activeDoc: a,
                toggleEditModal: n
            })))
        }
          , Sn = Pe()(Be.ZP).withConfig({
            displayName: "EmptyTaxYear__ScButton",
            componentId: "sc-1dxmhiz-0"
        })(["min-width:150px !important;@media (max-width:442px){width:100%;padding:0;}"])
          , vn = Pe().div.withConfig({
            displayName: "EmptyTaxYear__ScLockoutContainer",
            componentId: "sc-1dxmhiz-1"
        })(["margin:40px 0px 40px 0px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"])
          , Cn = Pe().h3.withConfig({
            displayName: "EmptyTaxYear__ScHeading",
            componentId: "sc-1dxmhiz-2"
        })(["margin-bottom:18px;@media (max-width:768px){font-size:18px;}"])
          , In = Pe().div.withConfig({
            displayName: "EmptyTaxYear__ScImageContainer",
            componentId: "sc-1dxmhiz-3"
        })(["height:80px;width:80px;background-image:url('https://lib.intuitcdn.net/img/icons/icn-upgrade-to-cloud.svg');background-size:cover;"])
          , _n = Pe().div.withConfig({
            displayName: "EmptyTaxYear__ScSubheadingContainer",
            componentId: "sc-1dxmhiz-4"
        })(["margin-bottom:7px;"])
          , On = Pe().div.withConfig({
            displayName: "EmptyTaxYear__ScButtonContainer",
            componentId: "sc-1dxmhiz-5"
        })(["margin-top:20px;height:42px;@media (max-width:768px){max-width:none;}@media (max-width:442px){width:100%;}"])
          , Dn = e=>{
            let {taxYear: t, handleUploadClick: n, changeAnalyticsState: a} = e;
            return a({
                screen: "EmptyDocumentList|".concat(t)
            }),
            Me.trackPageLoad(),
            r().createElement("div", null, r().createElement(vn, null, r().createElement(In, null), r().createElement(Cn, null, "Let's start uploading your ", "".concat(t), " documents!"), r().createElement(_n, null, "With MyDocs™, easily upload and access your tax documents in one safe and secure place."), r().createElement(_n, null, "Keep in mind that the info on your uploaded documents will not be added to your tax return."), r().createElement(On, null, r().createElement(Sn, {
                theme: "turbotax",
                variant: "primary",
                onClick: function() {
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Upload"
                    }),
                    n(...arguments)
                }
            }, "Upload"))))
        }
        ;
        Dn.propTypes = {
            taxYear: _e().number.isRequired,
            handleUploadClick: _e().func.isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        const Pn = (0,
        c.connect)(void 0, (e=>({
            changeAnalyticsState: t=>e(J(t))
        })))(Dn)
          , An = Pe()(Be.ZP).withConfig({
            displayName: "PlusLockout__ScButton",
            componentId: "sc-1ej87wt-0"
        })(["min-width:150px !important;@media (max-width:442px){width:100%;padding:0;}"])
          , kn = Pe().div.withConfig({
            displayName: "PlusLockout__ScLockoutContainer",
            componentId: "sc-1ej87wt-1"
        })(["margin:40px 0px 40px 0px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"])
          , Rn = Pe().h3.withConfig({
            displayName: "PlusLockout__ScHeading",
            componentId: "sc-1ej87wt-2"
        })(["margin-bottom:20px;@media (max-width:768px){font-size:18px;}"])
          , Nn = Pe().div.withConfig({
            displayName: "PlusLockout__ScImageContainer",
            componentId: "sc-1ej87wt-3"
        })(["height:80px;width:80px;background-image:url('https://lib.intuitcdn.net/img/icons/icn-inventory.svg');background-size:cover;"])
          , Ln = Pe().div.withConfig({
            displayName: "PlusLockout__ScSubheadingContainer",
            componentId: "sc-1ej87wt-4"
        })(["margin-bottom:20px;"])
          , jn = Pe().div.withConfig({
            displayName: "PlusLockout__ScButtonContainer",
            componentId: "sc-1ej87wt-5"
        })(["margin-top:20px;height:42px;@media (max-width:768px){max-width:none;}@media (max-width:442px){width:100%;}"])
          , Fn = e=>{
            let {triggerAddPlusScreen: t, notifyReady: n, changeAnalyticsState: a} = e;
            return n(),
            a({
                screen: "PlusLockout"
            }),
            Me.trackPageLoad(),
            r().createElement(kn, null, r().createElement(Nn, null), r().createElement(Rn, null, "To store your documents securely, you'll need PLUS"), r().createElement(Ln, null, "With MyDocs™, easily upload and access your tax documents in one safe and secure place by adding ", r().createElement("strong", null, "PLUS"), " for ", r().createElement("strong", null, "$30"), "."), r().createElement(Ln, null, "Keep in mind that the info on your uploaded documents will not be added to your tax return."), r().createElement(jn, null, r().createElement(An, {
                variant: "special",
                onClick: function() {
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Get PLUS benefits"
                    }),
                    t(...arguments)
                }
            }, "Get PLUS benefits")))
        }
        ;
        Fn.propTypes = {
            triggerAddPlusScreen: _e().func.isRequired,
            notifyReady: _e().func.isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        const Un = (0,
        c.connect)(null, (e=>({
            triggerAddPlusScreen: ()=>e(H(!0)),
            notifyReady: ()=>e($(se.LOCKOUTVIEW)),
            changeAnalyticsState: t=>e(J(t))
        })))(Fn)
          , Yn = Pe()(Be.ZP).withConfig({
            displayName: "PostFilingLockout__ScButton",
            componentId: "sc-1l7pbul-0"
        })(["background-color:rgb(3,124,143) !important;min-width:150px !important;@media (max-width:442px){width:100%;padding:0;}"])
          , Mn = Pe().div.withConfig({
            displayName: "PostFilingLockout__ScLockoutContainer",
            componentId: "sc-1l7pbul-1"
        })(["margin:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:40px 0px 40px 0px;"])
          , Wn = Pe().h3.withConfig({
            displayName: "PostFilingLockout__ScHeading",
            componentId: "sc-1l7pbul-2"
        })(["margin-bottom:20px;font-size:36px;line-height:40px;@media (max-width:768px){font-size:24px;line-height:28px;}"])
          , Bn = Pe().div.withConfig({
            displayName: "PostFilingLockout__ScImageContainer",
            componentId: "sc-1l7pbul-3"
        })(["height:60px;width:60px;background-image:url('https://lib.intuitcdn.net/img/icons/icn-my-docs.svg');background-size:cover;"])
          , Gn = Pe().div.withConfig({
            displayName: "PostFilingLockout__ScSubheadingContainer",
            componentId: "sc-1l7pbul-4"
        })(["font-size:16px;line-height:20px;margin-bottom:20px;"])
          , zn = Pe().div.withConfig({
            displayName: "PostFilingLockout__ScButtonContainer",
            componentId: "sc-1l7pbul-5"
        })(["margin-top:20px;height:42px;@media (max-width:768px){max-width:none;}@media (max-width:442px){width:100%;}"])
          , qn = e=>{
            let {notifyReady: t, changeAnalyticsState: n} = e;
            return t(),
            n({
                screen: "PostFilingLockout"
            }),
            Me.trackPageLoad(),
            r().createElement(Mn, null, r().createElement(Bn, null), r().createElement(Wn, null, "Thank you for your interest!"), r().createElement(Gn, null, "This feature isn't quite ready yet, but your interest tells us we're building something useful."), r().createElement(Gn, null, "If you want to download your prior year tax returns, go back to ", r().createElement("strong", null, "Tax Home"), "."), r().createElement(zn, null, r().createElement(Yn, {
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Go Back To Tax Home"
                    }),
                    u().runtimeGlobals.props.onDone()
                }
            }, "Go Back To Tax Home")))
        }
        ;
        qn.propTypes = {
            notifyReady: _e().func.isRequired,
            changeAnalyticsState: _e().func.isRequired
        };
        const Vn = (0,
        c.connect)(null, (e=>({
            notifyReady: ()=>e($(se.LOCKOUTVIEW)),
            changeAnalyticsState: t=>e(J(t))
        })))(qn);
        var Hn = n(4347);
        n(9085);
        const Zn = Pe().div.withConfig({
            displayName: "DownloadModal__ScButtonContainer",
            componentId: "sc-17ndydd-0"
        })(["margin:10px;"])
          , Kn = Pe().div.withConfig({
            displayName: "DownloadModal__ScButtonText",
            componentId: "sc-17ndydd-1"
        })(["@media (max-width:480px){font-size:14px;}"])
          , Xn = Pe().div.withConfig({
            displayName: "DownloadModal__ScHeaderText",
            componentId: "sc-17ndydd-2"
        })(["@media (max-width:480px){font-size:18px;}"])
          , $n = Pe().div.withConfig({
            displayName: "DownloadModal__ScDownloadContainer",
            componentId: "sc-17ndydd-3"
        })(["display:flex;flex-direction:column;align-items:center;justify-content:center;"])
          , Jn = Pe().span.withConfig({
            displayName: "DownloadModal__ScSpinnerContainer",
            componentId: "sc-17ndydd-4"
        })(["margin-left:6px;"])
          , Qn = e=>{
            let {open: t, toggleDownloadModal: n, taxYear: a, downloadPDF: o, extensionDocId: i, taxReturnDocId: c, fetchingExtensionPDF: l, fetchingTaxReturnPDF: s} = e;
            return t && Me.trackPageLoad({
                sub_scope_area: "DownloadPDFModal"
            }),
            r().createElement($t.ZP, {
                open: t
            }, r().createElement($t.ZP.CloseButton, {
                onClick: ()=>n()
            }), r().createElement($t.ZP.Header, null, r().createElement($t.ZP.Header.Title, null, r().createElement(Xn, null, "Select the PDF you'd like to download"))), r().createElement($t.ZP.Body, null, r().createElement($n, null, c && r().createElement(Zn, null, r().createElement(Be.ZP, {
                theme: "turbotax",
                variant: "tertiary",
                onClick: ()=>(Me.trackClick({
                    ui_object: "button",
                    ui_object_detail: "".concat(a, " tax return"),
                    task_name: "download|ustax".concat(a)
                }),
                !s && o(c, a))
            }, r().createElement(Kn, null, a, " tax return", " ", s ? r().createElement(Jn, null, r().createElement(Xt(), {
                size: 12
            })) : r().createElement(Hn.Z, {
                style: {
                    "margin-left": "6px"
                },
                inline: !0
            })))), i && r().createElement(Zn, null, r().createElement(Be.ZP, {
                theme: "turbotax",
                variant: "tertiary",
                onClick: ()=>(Me.trackClick({
                    ui_object: "button",
                    ui_object_detail: "".concat(a, " extension"),
                    task_name: "download|ustax".concat(a, "extension")
                }),
                !l && o(i, a, !0))
            }, r().createElement(Kn, null, a, " extension", " ", l ? r().createElement(Jn, null, r().createElement(Xt(), {
                size: 12
            })) : r().createElement(Hn.Z, {
                style: {
                    "margin-left": "6px"
                },
                inline: !0
            })))))))
        }
          , ea = async()=>{
            try {
                const e = (()=>{
                    if (!_)
                        throw new Error("ServiceClient has not been set");
                    return _
                }
                )()
                  , {data: t} = await e.get("".concat(u().runtimeGlobals.servicesBaseURL, "/mytt/v2/dashboardState?_=").concat(Date.now()), {
                    fetchOptions: {
                        credentials: "include"
                    }
                });
                return u().runtimeGlobals.sandbox.pubsub.publish(u().constants.unified.PUBLISH_EVENTS.SET_USER_DASHBOARD_STATE, {
                    payload: t.dashboard
                }),
                t
            } catch (e) {
                return null
            }
        }
        ;
        function ta(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function na(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ta(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const aa = async(e,t,n)=>{
            const a = (0,
            p.x)()
              , {appContext: o, experiments: i, extensions: r, logger: c} = a;
            try {
                var l;
                const a = null === (l = o.getUserAuthInfo()) || void 0 === l ? void 0 : l.authId
                  , {isNative: s} = r.TTO.getNativeAppInfo();
                if (null != i && i.getExperimentAssignmentsWithContext) {
                    c.info("Start fetch IXP for ".concat(e));
                    const o = await i.getExperimentAssignmentsWithContext("CG", {
                        AUTH_ID: a,
                        ns: e
                    }, na(na({}, n), {}, {
                        isNative: s
                    }), {
                        applications: [e],
                        label: t
                    });
                    return c.info("IXP response for ".concat(e, ": ").concat(JSON.stringify(o))),
                    o
                }
                return null
            } catch (s) {
                return c.warn("Unable to fetch IXP assignments", {
                    message: (null == s ? void 0 : s.message) || "",
                    network: !0
                }),
                null
            }
        }
          , oa = (e,t)=>!!e.filter((e=>t.includes(e.payload))).length
          , ia = "TurboTax_TXOInit"
          , ra = "gtkm_web_nav";
        function ca(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function la(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ca(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ca(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const sa = Pe().div.withConfig({
            displayName: "ListView__PluginDiv",
            componentId: "sc-2zwkjd-0"
        })([""])
          , da = Pe().div.withConfig({
            displayName: "ListView__MyDocsDiv",
            componentId: "sc-2zwkjd-1"
        })(["margin:40px 32px;@media all and (max-width:423px){margin:20px;}"])
          , ua = Pe().div.withConfig({
            displayName: "ListView__ScSpinnerContainer",
            componentId: "sc-2zwkjd-2"
        })(["text-align:center;margin:140px;"])
          , pa = Pe().div.withConfig({
            displayName: "ListView__ScControlsContainer",
            componentId: "sc-2zwkjd-3"
        })(["display:flex;justify-content:space-between;margin:18px 0px;@media all and (max-width:767px){flex-direction:column;align-items:center;}"])
          , ma = Pe().div.withConfig({
            displayName: "ListView__ScDocListContainer",
            componentId: "sc-2zwkjd-4"
        })(["display:", ";"], (e=>{
            let {contentReady: t, isEmptyTaxYear: n, docChecklistEnabled: a} = e;
            return !t || n || a ? "none" : ""
        }
        ))
          , ha = Pe().div.withConfig({
            displayName: "ListView__ScDocChecklistContainer",
            componentId: "sc-2zwkjd-5"
        })(["display:", ";"], (e=>{
            let {contentReady: t} = e;
            return t ? "" : "none"
        }
        ))
          , ga = Pe()(Be.ZP).withConfig({
            displayName: "ListView__ScUploadButton",
            componentId: "sc-2zwkjd-6"
        })(["height:42px !important;@media all and (min-width:443px){max-width:175px;}@media all and (max-width:442px){padding:5px !important;width:100%;}"])
          , fa = Pe()(ga).withConfig({
            displayName: "ListView__ScDownloadButton",
            componentId: "sc-2zwkjd-7"
        })(["@media all and (min-width:443px){max-width:200px;min-width:185px !important;margin-right:20px !important;&:only-child{margin-right:0 !important;}}@media all and (max-width:442px){margin-bottom:10px !important;&:only-child{margin-bottom:0 !important;}}"])
          , ya = Pe().div.withConfig({
            displayName: "ListView__ScButtonContainer",
            componentId: "sc-2zwkjd-8"
        })(["display:flex;flex-direction:row;justify-content:center;@media all and (min-width:768px){justify-content:flex-end;max-width:420px;margin-left:20px;flex-basis:0;flex-grow:1;}@media all and (max-width:767px){width:100%;}@media all and (max-width:442px){flex-direction:column;align-items:center;}"])
          , ba = Pe().label.withConfig({
            displayName: "ListView__ScDropdownWrap",
            componentId: "sc-2zwkjd-9"
        })(["display:flex;align-items:center;background-color:#ecf9ff;padding:0 20px;font-weight:bold;height:42px;@media all and (max-width:767px){width:100%;justify-content:center;margin-bottom:10px;}"])
          , xa = Pe().div.withConfig({
            displayName: "ListView__ScDropdownVerbiage",
            componentId: "sc-2zwkjd-10"
        })(["font-size:16px;margin-right:5px;"])
          , Ea = Pe().select.withConfig({
            displayName: "ListView__ScNewDropdown",
            componentId: "sc-2zwkjd-11"
        })(["appearance:none;font-size:16px;border:none;color:#07a4b4;padding-right:18px;background-repeat:no-repeat;background-color:transparent;background-position:right center;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' focusable='false' viewBox='0 0 30 17' class='DropDown-chevron' width='14px' height='14px' fill='currentColor' name='chevron-down'%3E%3Cpath d='M30 1.896L16.076 16.508c-.334.33-.693.492-1.075.492-.384 0-.743-.162-1.077-.492L0 1.896 2.153 0 15 13.419 27.847 0 30 1.896z'%3E%3C/path%3E%3C/svg%3E\");option{color:#333;}"])
          , wa = Pe().div.withConfig({
            displayName: "ListView__ScMobileRow",
            componentId: "sc-2zwkjd-12"
        })(["width:calc(100% - 38px);font-weight:bold;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]);
        class Ta extends r().Component {
            static downloadFile(e) {
                let {fdpDocumentData: t} = e;
                const {systemAttributes: n, commonAttributes: a} = t || {}
                  , {sourceLocators: o} = n || []
                  , [i] = o
                  , {locator: r} = i || {}
                  , {name: c} = a || {};
                if (r && c) {
                    const e = "".concat(C(), "/v2").concat(r)
                      , t = "".concat(e, "?intuit_apikey=").concat(v());
                    (0,
                    p.x)().pubsub.publish("OPEN_EXTERNAL_LINK", {
                        link: t
                    })
                } else
                    u().logger.network.error.nonblocking("Unable to fetch file: missing locator or name. locator: ".concat(r, ". name: ").concat(c, ". extractor: ").concat(n.extractor, ". contentType: ").concat(i.contentType, "."))
            }
            constructor(e) {
                super(e),
                this.state = {
                    isEntitled: null,
                    fetchingExtensionPDF: !1,
                    fetchingTaxReturnPDF: !1,
                    editModalOpen: !1,
                    downloadModalOpen: !1,
                    openPdfModal: !1,
                    downloadComplete: !1,
                    downloadFailed: !1,
                    docListKey: (new Date).getTime(),
                    taxDocuments: {},
                    filedTaxYears: [],
                    isEmptyTaxYear: !1,
                    hasExceededStorageCapacity: null,
                    selectedTaxYear: e.selectedTaxYear,
                    hasOpenTaxAdviceCases: null,
                    docChecklistEnabled: !1
                },
                this.taxYearSelectHandler = this.taxYearSelectHandler.bind(this),
                this.downloadPDF = this.downloadPDF.bind(this),
                this.toggleEditModal = this.toggleEditModal.bind(this),
                this.toggleDownloadModal = this.toggleDownloadModal.bind(this),
                this.handleUploadClick = this.handleUploadClick.bind(this),
                this.setHasExceededStorageCapacity = this.setHasExceededStorageCapacity.bind(this),
                this.togglePdfDownloadSurvey = this.togglePdfDownloadSurvey.bind(this),
                this.isPdfModalVisible = this.isPdfModalVisible.bind(this),
                this.getSmartDocListProps = this.getSmartDocListProps.bind(this),
                this.renderSmartDocListWidget = this.renderSmartDocListWidget.bind(this)
            }
            componentDidMount() {
                u().logger.frontend.log("My Docs widget mounted."),
                aa(ia, ra, {
                    prodid: this.props.productId
                }).then((e=>{
                    this.setState({
                        docChecklistEnabled: oa(e, ["PCL=B", "PCL=D"])
                    })
                }
                )).then((()=>{
                    this.props.progressState ? this.props.notifyReady() : ea().then((()=>{
                        this.props.notifyReady()
                    }
                    ))
                }
                )),
                this.fetchTaxDocs(),
                this.setHasExceededStorageCapacity(),
                this.props.productId > 5e3 && this.props.productId < 6e3 && this.setHasOpenTaxAdviceCases()
            }
            setHasExceededStorageCapacity() {
                lt().then((e=>{
                    this.setState({
                        hasExceededStorageCapacity: e
                    })
                }
                )).catch((e=>console.log(e)))
            }
            setHasOpenTaxAdviceCases() {
                gt().then((e=>{
                    this.setState({
                        hasOpenTaxAdviceCases: e.totalNumOfCase > 0
                    })
                }
                )).catch((e=>{
                    u().logger.network.error.nonblocking("Error calling crms", e)
                }
                ))
            }
            getSmartDocListProps() {
                var e = this;
                const {hasOpenTaxAdviceCases: t} = this.state
                  , n = pt() ? {
                    key: "document",
                    renderColumn: e=>r().createElement(wa, null, e.name)
                } : {
                    key: "document"
                }
                  , a = {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }
                  , o = [n, {
                    key: "type",
                    renderColumn: (e,t)=>{
                        if (t) {
                            const t = new Date(e.userCreateDate).toLocaleDateString("en-US", a)
                              , n = "other" === e.type || "unknown" === e.type ? "Unknown form" : "Form ".concat(e.type);
                            return r().createElement("div", null, n, ", uploaded on ", t)
                        }
                        return r().createElement("div", null, e.type)
                    }
                }, {
                    key: "updated",
                    renderColumn: (e,t)=>{
                        if (t)
                            return null;
                        const n = new Date(e.userCreateDate).toLocaleDateString("en-US", a);
                        return r().createElement("div", null, n)
                    }
                }, {
                    key: "actions"
                }]
                  , i = t ? [{
                    id: "cg_download",
                    label: "Download"
                }, {
                    id: "edit",
                    label: "Edit"
                }, {
                    id: "delete",
                    label: "Delete"
                }, {
                    id: "share",
                    label: "Share"
                }] : [{
                    id: "cg_download",
                    label: "Download"
                }, {
                    id: "edit",
                    label: "Edit"
                }, {
                    id: "delete",
                    label: "Delete"
                }];
                return la(la({
                    theme: "turbotax"
                }, t && {
                    shareAttributes: {
                        relationshipType: "cg.tto.diwm"
                    }
                }), {}, {
                    applicationId: "Intuit.app.uicomponents.mydocs",
                    configProps: {
                        API_KEY: pt() && mt() ? st() : v(),
                        OFFERING_ID: "Intuit.cg.myturbotax",
                        ASSET_ID: "5047426874716881589",
                        PRODUCT_NAME: "MyTurboTax Services",
                        is7216: !0
                    },
                    fileActions: i,
                    onEvent: function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        switch (t.type) {
                        case "BASE_FOLDER_ID_FOUND":
                            e.props.changeFolderId(t.data);
                            break;
                        case "CG_DOWNLOAD":
                            pt() ? e.props.triggerMobileDownloadInstructions() : Ta.downloadFile(t.data),
                            e.props.changeAnalyticsState({
                                screen: "Download|".concat(e.props.selectedTaxYear)
                            });
                            break;
                        case "EDIT":
                            e.props.changeAnalyticsState({
                                screen: "EditModal|".concat(e.props.selectedTaxYear)
                            }),
                            e.toggleEditModal(t.data);
                            break;
                        case "FOLDER_LOAD_SUCCESS":
                            e.setState({
                                contentReady: !0
                            }, (()=>window.dispatchEvent(new Event("resize")))),
                            e.props.docWidgetReady(),
                            0 === t.data.contentsLength ? e.setState({
                                isEmptyTaxYear: !0
                            }) : (e.props.changeAnalyticsState({
                                screen: "DocumentList|".concat(e.props.selectedTaxYear)
                            }),
                            Me.trackPageLoad());
                            break;
                        case "ROW_SELECT":
                            Me.trackClick({
                                ui_object: "link",
                                ui_object_detail: "download|".concat(t.data.commonAttributes.documentType)
                            });
                            break;
                        case "DELETE":
                            e.props.changeAnalyticsState({
                                screen: "DeleteModal|".concat(e.props.selectedTaxYear)
                            })
                        }
                    },
                    enableUpload: !1,
                    enableRecategorization: !1,
                    enableRefresh: !1,
                    enableRename: !1,
                    enableToolbar: !1,
                    columns: o,
                    enableDownloadAll: !1
                })
            }
            handleUploadClick() {
                this.state.hasExceededStorageCapacity ? this.props.triggerCapacityLimitScreen() : this.props.triggerUpload()
            }
            handleTaxDocDownload(e, t, n) {
                return this.state.isTRAEntitled ? t ? this.toggleDownloadModal() : (Me.trackClick({
                    ui_object: "button",
                    ui_object_detail: "Download tax PDF",
                    task_name: "download|ustax".concat(this.props.selectedTaxYear)
                }),
                !this.state.fetchingTaxReturnPDF && this.downloadPDF(e, n)) : (u().logger.backend.feature("Triggering TRALockout for my-docs tax download"),
                this.props.triggerTRALockout())
            }
            taxYearSelectHandler(e) {
                const t = e.target.value;
                this.setState({
                    selectedTaxYear: t
                }),
                this.props.changeSelectedTaxYear(t),
                this.setState({
                    isEmptyTaxYear: !1,
                    contentReady: !1,
                    docListKey: (new Date).getTime()
                })
            }
            toggleDownloadModal() {
                this.setState((e=>({
                    downloadModalOpen: !e.downloadModalOpen
                })))
            }
            toggleEditModal(e, t) {
                this.setState((n=>({
                    activeDoc: e,
                    editModalOpen: !n.editModalOpen,
                    docListKey: t ? (new Date).getTime() : n.docListKey
                })))
            }
            downloadPDF(e, t, n) {
                this.setState({
                    ["fetching".concat(n ? "Extension" : "TaxReturn", "PDF")]: !0,
                    downloadComplete: !1,
                    downloadFailed: !1
                });
                const a = n ? "".concat(u().runtimeGlobals.servicesBaseURL, "/mytt/v2/getExtensionPDF/").concat(t, "/").concat(e) : "".concat(u().runtimeGlobals.servicesBaseURL, "/mytt/v2/getPDF/").concat(t, "/").concat(e)
                  , o = "".concat(t, n ? "_Extension" : "_TaxReturn");
                return pt() ? (u().runtimeGlobals.sandbox.pubsub.publish("DOWNLOAD_PDF", {
                    pdfDocName: o,
                    pdfLink: a
                }),
                this.setState({
                    ["fetching".concat(n ? "Extension" : "TaxReturn", "PDF")]: !1
                }),
                Promise.resolve()) : u().helpers.fetchWrapper.fetch(a, {
                    fetchOptions: {
                        credentials: "include",
                        method: "get"
                    }
                }).then((e=>e.blob())).then((e=>{
                    (0,
                    p.x)().pubsub.publish("DOWNLOAD_PDF", {
                        blob: e,
                        pdfDocName: o,
                        pdfLink: a
                    })
                }
                )).then((()=>{
                    this.setState({
                        ["fetching".concat(n ? "Extension" : "TaxReturn", "PDF")]: !1,
                        downloadComplete: !0
                    })
                }
                )).catch((e=>{
                    u().logger.network.error.nonblocking("Unable to fetch PDF", e),
                    this.setState({
                        ["fetching".concat(n ? "Extension" : "TaxReturn", "PDF")]: !1,
                        downloadFailed: !0
                    })
                }
                ))
            }
            fetchTaxDocs() {
                u().helpers.fetchWrapper.jsonFetch("".concat(u().runtimeGlobals.servicesBaseURL, "/mytt/myDocs/listTaxDocs"), {
                    fetchOptions: {
                        credentials: "include"
                    }
                }).then((e=>(this.setState({
                    isEntitled: e.isVaultEntitled,
                    isTRAEntitled: e.isTRAEntitled
                }),
                e.documents.forEach((e=>{
                    "TAX_RETURN" === e.taxTopic && null !== e.legacyPDF && this.setState((t=>({
                        filedTaxYears: t.filedTaxYears.includes(e.taxYear) ? [...t.filedTaxYears] : [...t.filedTaxYears, e.taxYear],
                        taxDocuments: la(la({}, t.taxDocuments), {}, {
                            ["".concat(e.taxYear, "TaxReturn")]: e
                        })
                    }))),
                    "TAX_RETURN" === e.taxTopic && e.ezeReturn && this.setState((t=>({
                        filedTaxYears: t.filedTaxYears.includes(e.taxYear) ? [...t.filedTaxYears] : [...t.filedTaxYears, e.taxYear],
                        taxDocuments: la(la({}, t.taxDocuments), {}, {
                            ["".concat(e.taxYear, "Extension")]: e
                        })
                    })))
                }
                ))))).catch((e=>({
                    err: e.message
                }))).then((e=>this.setState(e)))
            }
            togglePdfDownloadSurvey(e, t) {
                this.isPdfModalVisible() ? this.setState((e=>({
                    openPdfModal: !e.openPdfModal
                }))) : this.handleTaxDocDownload(e, t, this.props.selectedTaxYear)
            }
            isPdfModalVisible() {
                const {productYear: e, progressState: t, selectedTaxYear: n} = this.props;
                return !(!e || !t) && (parseInt(n, 10) === parseInt(e, 10) - 1 && (t === Zt.IN_PROGRESS || t === Zt.NOT_STARTED))
            }
            pdfDownload(e, t) {
                e && t ? this.setState({
                    downloadModalOpen: !0,
                    openPdfModal: !1
                }) : this.handleTaxDocDownload(e, t, this.props.selectedTaxYear)
            }
            renderSmartDocListWidget() {
                return parseInt(this.state.selectedTaxYear, 10) >= 2020 ? r().createElement(ke(), Ne()({}, this.getSmartDocListProps(), {
                    key: this.state.docListKey,
                    widgetId: "smartdocs-web-platform/list-documents",
                    autoCreateFolder: !0,
                    folderAttributes: {
                        category: "cg.tto",
                        subcategory: "mydocs",
                        relationshipId: ht(),
                        relationshipType: "auth",
                        taxYear: this.props.selectedTaxYear
                    },
                    offeringFilters: {
                        taxYear: this.props.selectedTaxYear,
                        offeringIds: ["ttlive", "Intuit.cg.myturbotax", "Intuit.intcollabs.collab.collabttlive", "Intuit.intcollabs.collab.collabvep"],
                        ownership: "owned"
                    }
                })) : r().createElement(ke(), Ne()({}, this.getSmartDocListProps(), {
                    key: this.state.docListKey,
                    widgetId: "smartdocs-web-platform/list-documents",
                    offeringFilters: {
                        taxYear: this.props.selectedTaxYear,
                        offeringId: "Intuit.cg.myturbotax",
                        ownership: "owned"
                    }
                }))
            }
            renderDropdownItems() {
                return this.props.taxYears.map((e=>r().createElement("option", {
                    value: e,
                    key: e
                }, e)))
            }
            renderSpinner() {
                return !this.state.contentReady && !1 !== this.state.isEntitled && r().createElement(ua, null, r().createElement(Xt(), null))
            }
            render() {
                const e = "2021" === this.props.selectedTaxYear && this.state.docChecklistEnabled;
                let t, n;
                if (this.state.filedTaxYears.includes(this.props.selectedTaxYear)) {
                    const e = this.state.taxDocuments["".concat(this.props.selectedTaxYear, "TaxReturn")];
                    e && (t = e.ek ? e.ek : null,
                    this.props.publishTaxReturnPDFDocId(t));
                    const a = this.state.taxDocuments["".concat(this.props.selectedTaxYear, "Extension")];
                    a && (n = a.ek ? a.ek : null)
                }
                return this.state.openPdfModal ? r().createElement(ke(), {
                    widgetId: "mytt-components-ui/pdf-download-survey-modal",
                    currYear: this.props.selectedTaxYear,
                    downloadComplete: this.state.downloadComplete,
                    downloadFailed: this.state.downloadFailed,
                    onClose: this.togglePdfDownloadSurvey,
                    onDownloadClick: ()=>this.pdfDownload(t, n),
                    onError: this.togglePdfDownloadSurvey,
                    open: this.state.openPdfModal,
                    location: "MyDocs",
                    onFSDiscountTake: u().runtimeGlobals.props.onDone
                }) : !1 === this.state.isEntitled && "POST_FILING" === this.props.progressState ? r().createElement(sa, {
                    className: "my-docs",
                    "data-cy": "my-docs-div"
                }, r().createElement(da, {
                    className: "postfile-non-plus-lockout",
                    "data-cy": "postfile-non-plus-lockout-div"
                }, r().createElement(pa, null, r().createElement(Vn, null)))) : r().createElement(sa, {
                    className: "my-docs",
                    "data-cy": "my-docs-div"
                }, r().createElement(da, {
                    className: "hello",
                    "data-cy": "hello-div"
                }, r().createElement(pa, null, r().createElement(ba, null, r().createElement(xa, null, "View documents from:"), r().createElement(Ea, {
                    onChange: this.taxYearSelectHandler,
                    value: this.props.selectedTaxYear
                }, this.renderDropdownItems())), r().createElement(ya, null, (t || n) && r().createElement(fa, {
                    shape: "standard",
                    size: "medium",
                    theme: "turbotax",
                    variant: "tertiary",
                    fullWidth: !0,
                    onClick: ()=>this.togglePdfDownloadSurvey(t, n),
                    type: "Button"
                }, this.state.fetchingTaxReturnPDF ? "Downloading..." : "Download tax PDF"), !e && !this.state.isEmptyTaxYear && this.state.isEntitled && this.state.contentReady && r().createElement(ga, {
                    shape: "standard",
                    size: "medium",
                    theme: "turbotax",
                    variant: "primary",
                    fullWidth: !0,
                    onClick: ()=>{
                        Me.trackClick({
                            ui_object: "button",
                            ui_object_detail: "Upload"
                        }),
                        this.handleUploadClick()
                    }
                    ,
                    type: "Button"
                }, "Upload"))), this.renderSpinner(), !e && this.state.isEntitled && this.state.isEmptyTaxYear && r().createElement(Pn, {
                    taxYear: this.props.selectedTaxYear,
                    handleUploadClick: this.handleUploadClick
                }), !e && this.state.isEntitled && r().createElement(ma, {
                    contentReady: this.state.contentReady,
                    isEmptyTaxYear: this.state.isEmptyTaxYear,
                    docChecklistEnabled: e
                }, this.renderSmartDocListWidget()), !e && !1 === this.state.isEntitled && r().createElement(Un, null), e && r().createElement(ha, {
                    contentReady: this.state.contentReady
                }, r().createElement(ke(), {
                    widgetId: "doc-checklist/main",
                    onReady: ()=>{
                        this.setState({
                            contentReady: !0
                        }),
                        this.props.docWidgetReady()
                    }
                    ,
                    widgetContext: h(),
                    parentWidget: "my-docs"
                }))), !e && this.state.activeDoc && r().createElement(Tn, {
                    open: this.state.editModalOpen,
                    toggleEditModal: this.toggleEditModal,
                    activeDoc: this.state.activeDoc
                }), !e && r().createElement(Qn, {
                    open: this.state.downloadModalOpen,
                    downloadPDF: this.downloadPDF,
                    toggleDownloadModal: this.toggleDownloadModal,
                    taxYear: this.props.selectedTaxYear,
                    taxReturnDocId: t,
                    extensionDocId: n,
                    fetchingExtensionPDF: this.state.fetchingExtensionPDF,
                    fetchingTaxReturnPDF: this.state.fetchingTaxReturnPDF
                }))
            }
        }
        Ta.defaultProps = {
            productYear: "",
            productId: 0
        },
        Ta.propTypes = {
            selectedTaxYear: _e().string.isRequired,
            taxYears: _e().arrayOf(_e().string).isRequired,
            triggerUpload: _e().func.isRequired,
            changeSelectedTaxYear: _e().func.isRequired,
            changeFolderId: _e().func.isRequired,
            notifyReady: _e().func.isRequired,
            docWidgetReady: _e().func.isRequired,
            triggerCapacityLimitScreen: _e().func.isRequired,
            changeAnalyticsState: _e().func.isRequired,
            triggerMobileDownloadInstructions: _e().func.isRequired,
            triggerTRALockout: _e().func.isRequired,
            publishTaxReturnPDFDocId: _e().func.isRequired,
            productYear: _e().string,
            progressState: _e().string.isRequired,
            productId: _e().number
        };
        const Sa = (0,
        c.connect)((e=>({
            selectedTaxYear: e.selectedTaxYear,
            taxYears: e.availableTaxYears
        })), (e=>({
            triggerUpload: ()=>e(V(!0)),
            changeSelectedTaxYear: t=>e(X(t)),
            changeFolderId: t=>e(function(e) {
                return {
                    type: z,
                    payload: e
                }
            }(t)),
            notifyReady: ()=>e($(se.LISTVIEW)),
            docWidgetReady: ()=>e($(se.DOCWIDGET)),
            triggerCapacityLimitScreen: ()=>e(Z(!0)),
            changeAnalyticsState: t=>e(J(t)),
            triggerMobileDownloadInstructions: ()=>e(ee(!0)),
            triggerTRALockout: ()=>e(te(!0)),
            publishTaxReturnPDFDocId: t=>e(K(t))
        })))(Ta);
        const va = function() {
            const e = (0,
            p.x)()
              , {productId: t} = (0,
            Ht.MW)(e)
              , {productYear: n} = (0,
            Ht.bp)(e)
              , {progressState: a=Zt.NOT_AVAILABLE} = (0,
            Ht.Pc)(e);
            return r().createElement(Sa, {
                productYear: n,
                progressState: a,
                productId: t
            })
        }
          , Ca = Pe().div.withConfig({
            displayName: "DisclosuresModal__ScDisclosureContent",
            componentId: "sc-1yx267p-0"
        })(["text-align:left;"])
          , Ia = Pe().p.withConfig({
            displayName: "DisclosuresModal__ScDisclosureBlurb",
            componentId: "sc-1yx267p-1"
        })(["margin-bottom:22px;"])
          , _a = Pe().h2.withConfig({
            displayName: "DisclosuresModal__ScDisclosureHeading",
            componentId: "sc-1yx267p-2"
        })(["color:#6b6c72;margin-bottom:25px;"])
          , Oa = e=>{
            let {open: t, toggleModal: n} = e;
            return r().createElement($t.ZP, {
                open: t
            }, r().createElement($t.ZP.CloseButton, {
                onClick: ()=>n()
            }), r().createElement($t.ZP.Body, null, r().createElement($t.ZP.Header, null, "TURBOTAX ONLINE/MOBILE:"), r().createElement(Ca, null, r().createElement(_a, null, "TURBOTAX ONLINE/MOBILE: "), r().createElement(Ia, null, r().createElement("strong", null, "Try for Free/Pay When You File: "), " TurboTax online and mobile pricing is based on your tax situation and varies by product. TurboTax Free Edition ($0 Federal + $0 State + $0 To File) is available for simple tax returns only; offer may change or end at any time without notice. Actual prices are determined at the time of print or e-file and are subject to change without notice. Savings and price comparisons based on anticipated price increase. Special discount offers may not be valid for mobile in-app purchases."), r().createElement(Ia, null, r().createElement("strong", null, "TurboTax Live Basic Offer: "), " Offer only available with TurboTax Live Basic and for simple tax returns only. Must file by February 15, 2021 to be eligible for the offer. Includes state(s) and one (1) federal tax filing. Intuit reserves the right to modify or terminate this TurboTax Live Basic Offer at any time for any reason in its sole and absolute discretion. If you add services, your service fees will be adjusted accordingly. If filed after February 15, 2021, you will be charged the then-current list price for TurboTax Live Basic (currently, $50) and state tax filing is an additional fee (currently, $40)."), r().createElement(Ia, null, r().createElement("strong", null, "Pays for itself (TurboTax Self-Employed): "), "Estimates based on deductible business expenses calculated at the self–employment tax income rate (15.3%) for tax year 2019. Actual results will vary based on your tax situation."), r().createElement(Ia, null, r().createElement("strong", null, "Anytime, anywhere: "), "Internet access required; standard data rates apply to download and use mobile app."), r().createElement(Ia, null, r().createElement("strong", null, "Fastest refund possible: "), "Fastest tax refund with e–file and direct deposit; tax refund time frames will vary.", r().createElement("strong", null, " The IRS issues more than 9 out of 10 refunds in less than 21 days.")), r().createElement(Ia, null, r().createElement("strong", null, "Pay for TurboTax out of your federal refund: "), " A $40 Refund Processing Service fee applies to this payment method. Prices are subject to change without notice."), r().createElement(Ia, null, r().createElement("strong", null, "TurboTax Help and Support: "), "Access to a TurboTax specialist is included with TurboTax Deluxe, Premier, Self-Employed TurboTax Live, and TurboTax Live Full Service; not included with Free Edition (but is available as an upgrade). TurboTax specialists are available to provide general customer help and support using the TurboTax product. SmartLook on-screen help is available on a PC, laptop or the TurboTax mobile app. Service, area of expertise, experience levels, wait times, hours of operation and availability vary, and are subject to restriction and change without notice."), r().createElement(Ia, null, r().createElement("strong", null, "Tax Advice, Expert Review and TurboTax Live: "), "Access to tax advice and Expert Review (the ability to have a Tax Expert review and/or sign your tax return) is included with TurboTax Live or as an upgrade from another version, and available through December 31, 2021. These services are provided only by tax experts or CPAs. Some tax topics or situations may not be included as part of this service, which shall be determined in the tax expert's sole discretion.", r().createElement("strong", null, " For TurboTax Live,"), " if your return requires a significant level of tax advice or actual preparation, the tax expert may be required to sign as the preparer at which point they will assume primary responsibility for the preparation of your return. For the Full Service product, the tax expert will sign your return as preparer. Payment by federal refund is not available when a tax expert signs your return. On-screen help is available on a desktop, laptop or the TurboTax mobile app. Unlimited access to tax experts or CPAs refers to an unlimited quantity of contacts available to each customer, but does not refer to hours of operation or service coverage. Service, area of expertise, experience levels, wait times, hours of operation and availability vary, and are subject to restriction and change without notice."), r().createElement(Ia, null, r().createElement("strong", null, "TurboTax Live Full Service:  "), "Offer is not valid for one or more of the following tax situations:", r().createElement("ul", null, r().createElement("li", null, "More than 2 Sole Proprietorships (Sch C)"), r().createElement("li", null, "More than 2 K-1s"), r().createElement("li", null, "More than 100 cryptocurrency transactions"), r().createElement("li", null, "Foreign Investments over $50,000 (USD)"), r().createElement("li", null, "Form 8938 (entire return cannot be completed)"), r().createElement("li", null, "More than 2 rentals (Sch E)"), r().createElement("li", null, "More than 1 Farm (Sch F or Form 4835)"), r().createElement("li", null, "More than 2 states"))), r().createElement(Ia, null, r().createElement("strong", null, "Smart Insights: "), "Included with TurboTax Deluxe, Premier, Self-Employed, TurboTax Live, TurboTax Live Full Service, or with PLUS benefits and is available through 11/1/2022. Terms and conditions may vary and are subject to change without notice."), r().createElement(Ia, null, r().createElement("strong", null, "My Docs features: "), "Included with TurboTax Deluxe, Premier, Self-Employed, TurboTax Live, TurboTax Live Full Service, or with PLUS benefits and is available through 12/31/2022. Terms and conditions may vary and are subject to change without notice."), r().createElement(Ia, null, r().createElement("strong", null, "Tax Return Access: "), "Included with all TurboTax Deluxe, Premier, Self-Employed, TurboTax Live, TurboTax Live Full Service, or prior year PLUS benefits customers and access to up to the prior seven years of tax returns we have on file for you is available through 12/31/2022. Terms and conditions may vary and are subject to change without notice."), r().createElement(Ia, null, r().createElement("strong", null, "Easy Online Amend: "), "Included with TurboTax Deluxe, Premier, Self-Employed, TurboTax Live, TurboTax Live Full Service, or with PLUS benefits. Make changes to your 2020 tax return online for up to 3 years after it has been filed and accepted by the IRS through 10/31/2023. Terms and conditions may vary and are subject to change without notice. For TurboTax Live Full Service, your tax expert will amend your 2020 tax return for you through 12/31/2021. After 12/31/2021 TurboTax Live Full Service customers will be able to amend their 2020 tax return themselves using the Easy Online Amend process described above."), r().createElement(Ia, null, r().createElement("strong", null, "#1 best–selling tax software: "), "Based on aggregated sales data for all tax year 2019 TurboTax products."), r().createElement(Ia, null, r().createElement("strong", null, "Most Popular: "), "TurboTax Deluxe is our most popular product among TurboTax Online users with more complex tax situations."), r().createElement(Ia, null, r().createElement("strong", null, "CompleteCheck: "), "Covered under the TurboTax accurate calculations and maximum refund guarantees."), r().createElement(Ia, null, r().createElement("strong", null, "1099-NEC Snap and Autofill: "), "Available in TurboTax Self-Employed and TurboTax Live Self-Employed starting 1/25/2021. Available in mobile app only. Feature available within Schedule C tax form for TurboTax filers with 1099-NEC income."), r().createElement(Ia, null, r().createElement("strong", null, "Year-Round Tax Estimator: "), "Available in TurboTax Self-Employed and TurboTax Live Self-Employed starting by end of February. This product feature is only available after you finish and file in a self-employed product."), r().createElement(Ia, null, r().createElement(_a, null, "TURBOTAX GUARANTEES: ")), r().createElement(Ia, null, r().createElement("strong", null, "TurboTax Free Guarantee: "), "$0 Federal + $0 State + $0 To File offer is available for simple tax returns only with TurboTax Free Edition. A simple tax return is Form 1040 only (without any additional schedules) OR Form 1040 + Unemployment Income. Situations covered include:", r().createElement("ul", null, r().createElement("li", null, "W-2 income"), r().createElement("li", null, "Limited interest and dividend income reported on a 1099-INT or 1099-DIV"), r().createElement("li", null, "Claiming the standard deduction"), r().createElement("li", null, "Earned Income Tax Credit (EIC)"), r().createElement("li", null, "Child tax credits"), r().createElement("li", null, "Unemployment Income reported on a 1099-G"))), r().createElement(Ia, null, r().createElement("strong", null, "100% Accurate Calculations Guarantee: "), "If you pay an IRS or state penalty or interest because of a TurboTax calculation error, we'll pay you the penalty and interest."), r().createElement(Ia, null, r().createElement("strong", null, "Maximum Refund Guarantee - or Your Money Back: "), "If you get a larger refund or smaller tax due from another tax preparation method, we'll refund the applicable TurboTax federal and/or state purchase price paid. TurboTax Online Free Edition customers are entitled to payment of $30."), r().createElement(Ia, null, r().createElement("strong", null, "100% Accurate Expert Approved Guarantee: "), "If you pay an IRS or state penalty (or interest) because of an error that a TurboTax CPA, EA, or Tax Attorney made while providing topic-specific tax advice, a section review, or acting as a signed preparer for your return, we'll pay you the penalty and interest."), r().createElement(Ia, null, r().createElement("strong", null, "Audit Support Guarantee: "), "If you received an audit letter based on your 2020 TurboTax return, we will provide one-on-one support with a tax professional as requested through our Audit Support Center. If we are not able to connect you to one of our tax professionals, we will refund the applicable TurboTax federal and/or state purchase price paid. TurboTax Free Edition customers are entitled to payment of $30. We will not represent you or provide legal advice. Excludes TurboTax business."), r().createElement(Ia, null, r().createElement("strong", null, "Satisfaction Guaranteed: "), r().createElement("ul", null, r().createElement("li", null, "If you use TurboTax Online or Mobile: Satisfaction Guaranteed — or you don't pay. You may use TurboTax Online without charge up to the point you decide to print or electronically file your tax return. Printing or electronically filing your return reflects your satisfaction with TurboTax Online, at which time you will be required to pay or register for the product."), r().createElement("li", null, "If you bought TurboTax Live from a retailer: Try TurboTax Live. If you're not satisfied with your purchase and have not filed or printed your return, return it to Intuit within 60 days of purchase with your dated receipt for a full refund (excluding shipping & handling)."), r().createElement("li", null, "If you bought or downloaded TurboTax software from a retailer: Try TurboTax software. If you're not satisfied, return it to Intuit within 60 days of purchase with your dated receipt for a full refund."), r().createElement("li", null, "If you bought or downloaded TurboTax software directly from us: Try TurboTax software. If you're not satisfied, return it within 60 days of shipment with your dated receipt for a full refund (excluding shipping & handling)."))))))
        }
        ;
        Oa.propTypes = {
            open: _e().bool.isRequired,
            toggleModal: _e().func.isRequired
        };
        const Da = Oa
          , Pa = Pe().img.withConfig({
            displayName: "AddPlusScreen__ScImage",
            componentId: "sc-1h1thy7-0"
        })(["display:inline-block;width:190px;margin-top:20px;margin-bottom:20px;"])
          , Aa = Pe().h1.withConfig({
            displayName: "AddPlusScreen__ScHeading",
            componentId: "sc-1h1thy7-1"
        })(["margin:0 auto;margin-bottom:20px;max-width:620px;"])
          , ka = Pe().div.withConfig({
            displayName: "AddPlusScreen__ScButtonContainer",
            componentId: "sc-1h1thy7-2"
        })(["display:flex;justify-content:space-between;border-top:1px solid #d4d7dc;padding-top:24px;margin:15px 40px 0px 40px;"])
          , Ra = Pe().h3.withConfig({
            displayName: "AddPlusScreen__ScSubheading",
            componentId: "sc-1h1thy7-3"
        })(["margin-top:10px;margin-bottom:20px;color:#6b6c72;"])
          , Na = Pe().div.withConfig({
            displayName: "AddPlusScreen__ScConfirmPlusContainer",
            componentId: "sc-1h1thy7-4"
        })(["margin-top:50px;text-align:center;justify-content:center;"])
          , La = Pe().div.withConfig({
            displayName: "AddPlusScreen__ScBlurb",
            componentId: "sc-1h1thy7-5"
        })(["max-width:520px;margin:0 auto;color:#6b6c72;"])
          , ja = Pe().div.withConfig({
            displayName: "AddPlusScreen__ScDisclosure",
            componentId: "sc-1h1thy7-6"
        })(["text-align:left;font-size:10px;margin-top:50px;margin-left:40px;color:#797a7e;cursor:pointer;"])
          , Fa = e=>{
            let {triggerAddPlus: t, changeAnalyticsState: n} = e;
            const [a,o] = (0,
            i.useState)(!1)
              , [c,l] = (0,
            i.useState)(!1)
              , s = ()=>o(!a);
            return (0,
            i.useEffect)((()=>{
                n({
                    screen: "AddPlus"
                }),
                Me.trackPageLoad()
            }
            ), []),
            c ? r().createElement(Na, null, r().createElement(tn, null)) : r().createElement(Na, null, r().createElement(Aa, null, "Great! Now you can securely store your documents and more with PLUS."), r().createElement(Pa, {
                src: "https://lib.intuitcdn.net/img/mytt/xs-plus-badge.svg"
            }), r().createElement(Ra, null, "We'll add PLUS* benefits now for ", r().createElement("strong", null, "$30")), r().createElement(La, null, "Don't worry about pulling out your wallet. Look for the payment option to deduct the cost from your federal refund when you file."), r().createElement(ja, {
                id: "disclosureLink",
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "link",
                        ui_object_detail: "* Important offer details and disclosures"
                    }),
                    s()
                }
            }, "* Important offer details and disclosures"), r().createElement(ka, null, r().createElement(Be.ZP, {
                shape: "standard",
                size: "medium",
                theme: "turbotax",
                variant: "diminutive",
                onClick: ()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Back"
                    }),
                    t(!1)
                }
                ,
                type: "Button"
            }, r().createElement(bt.Z, {
                style: {
                    "margin-right": "5px"
                },
                inline: !0
            }), "Back"), r().createElement(Be.ZP, {
                shape: "standard",
                size: "medium",
                theme: "turbotax",
                variant: "primary",
                disabled: c,
                onClick: async()=>{
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Continue"
                    }),
                    u().logger.frontend.feature("Attempting to add PLUS to cart"),
                    l(!0);
                    try {
                        await ((e,t,n)=>{
                            const a = "".concat(u().runtimeGlobals.servicesBaseURL, "/mytt/v1/cart/add")
                              , o = {
                                method: "POST",
                                credentials: "include",
                                cache: "no-cache",
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8"
                                },
                                body: JSON.stringify({
                                    skuType: e,
                                    lineItem: [{
                                        productAlias: t
                                    }],
                                    returnId: n
                                })
                            };
                            return u().helpers.fetchWrapper.jsonFetch(a, {
                                fetchOptions: o
                            })
                        }
                        )("LEO", "TTFP2RT"),
                        u().logger.frontend.feature("Successfully added PLUS to cart"),
                        t(!1)
                    } catch (e) {
                        u().logger.frontend.error.blocking("Failed to add PLUS to cart", void 0, e),
                        l(!1)
                    }
                }
            }, "Continue")), r().createElement(Da, {
                open: a,
                toggleModal: s
            }))
        }
        ;
        Fa.propTypes = {
            triggerAddPlus: Ie.func.isRequired,
            changeAnalyticsState: Ie.func.isRequired
        };
        const Ua = (0,
        c.connect)(null, oe)(Fa)
          , Ya = Pe().div.withConfig({
            displayName: "StorageCapacityScreen__ScContentContainer",
            componentId: "ea7gea-0"
        })(["margin:40px;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-bottom:180px;text-align:center;"])
          , Ma = Pe().div.withConfig({
            displayName: "StorageCapacityScreen__ScButtonContainer",
            componentId: "ea7gea-1"
        })(["display:flex;justify-content:flex-end;border-top:1px solid #d4d7dc;padding-top:24px;margin:15px 40px 0px 40px;"])
          , Wa = Pe().h5.withConfig({
            displayName: "StorageCapacityScreen__ScSubheading",
            componentId: "ea7gea-2"
        })(["margin-top:10px;margin-bottom:20px;line-height:1.5;color:#6b6c72;"])
          , Ba = Pe().div.withConfig({
            displayName: "StorageCapacityScreen__ScImageContainer",
            componentId: "ea7gea-3"
        })(["height:80px;width:80px;background-image:url('https://lib.intuitcdn.net/img/icons/icn-alert.svg');background-size:cover;"])
          , Ga = (0,
        c.connect)(null, (e=>({
            closeStorageCapacityScreen: ()=>e(Z(!1)),
            changeAnalyticsState: t=>e(J(t))
        })))((e=>{
            let {closeStorageCapacityScreen: t, changeAnalyticsState: n} = e;
            return n({
                screen: "StorageLimitExceeded"
            }),
            Me.trackPageLoad(),
            r().createElement("div", null, r().createElement(Ya, null, r().createElement(Ba, null), r().createElement("h3", null, "It looks like you’ve already exceeded the storage limit for MyDocs"), r().createElement(Wa, null, "If you want to store this document, you’ll have to delete another document first. The storage limit for MyDocs is 5 GB.")), r().createElement(Ma, null, r().createElement(Be.ZP, {
                shape: "standard",
                size: "medium",
                theme: "turbotax",
                variant: "primary",
                onClick: function() {
                    Me.trackClick({
                        ui_object: "button",
                        ui_object_detail: "Continue"
                    }),
                    t(...arguments)
                }
            }, "Continue")))
        }
        ));
        var za = n(8095);
        const qa = {
            fullWidth: "responsive",
            shape: "standard",
            size: "large",
            theme: "turbotax"
        }
          , Va = Pe().p.withConfig({
            displayName: "MobileDownloadInstructions__Paragraph",
            componentId: "sc-15656jr-0"
        })(["margin-top:20px;"])
          , Ha = e=>{
            let {hideInstructions: t} = e;
            const n = "".concat(S().myttUrl, "/?uroute=vault");
            return r().createElement(za.ZP, {
                variant: "basic",
                isCentered: "true"
            }, r().createElement(za.ZP.Content, null, r().createElement(At.ZP, {
                src: "https://lib.intuitcdn.net/img/icons/icn-start-taxes.svg",
                alt: "Icon for starting taxes"
            }), r().createElement(Va, null, r().createElement("h3", null, "Please go to our website to download this document")), r().createElement(Va, null, "The download feature isn't available in the app yet, but we're working on it."), r().createElement(Va, null, "In the meantime, go to our website to download this document.")), r().createElement(za.ZP.Actions, null, r().createElement(Be.ZP, Ne()({}, qa, {
                variant: "primary",
                onClick: ()=>(0,
                p.x)().pubsub.publish("OPEN_EXTERNAL_LINK", {
                    link: n
                })
            }), "Go To TurboTax website"), r().createElement(Be.ZP, Ne()({}, qa, {
                variant: "diminutive",
                onClick: t
            }), r().createElement(bt.Z, {
                inline: !0
            }), " Back")))
        }
        ;
        Ha.propTypes = {
            hideInstructions: _e().func.isRequired
        };
        const Za = (0,
        c.connect)(null, {
            hideInstructions: ()=>ee(!1)
        })(Ha)
          , Ka = Pe().div.withConfig({
            displayName: "NoLinkedAccounts__ScContainer",
            componentId: "zrsk12-0"
        })(["margin:40px 20px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"])
          , Xa = Pe().h3.withConfig({
            displayName: "NoLinkedAccounts__ScHeading",
            componentId: "zrsk12-1"
        })(["margin-bottom:20px;@media (max-width:768px){font-size:18px;}"])
          , $a = Pe().div.withConfig({
            displayName: "NoLinkedAccounts__ScSubheadingContainer",
            componentId: "zrsk12-2"
        })(["margin-bottom:20px;max-width:500px;"])
          , Ja = e=>{
            let {changeAnalyticsState: t} = e;
            return t({
                screen: "NoLinkedAccounts"
            }),
            Me.trackPageLoad(),
            r().createElement(Ka, null, r().createElement(At.ZP, {
                src: "https://lib.intuitcdn.net/img/icons/icn-linked-acc.svg",
                alt: "Icon for linked accounts"
            }), r().createElement(Xa, null, "You don't have any linked accounts yet"), r().createElement($a, null, "Once you have logged into your financial institution, you'll see your account here. This is a great option if you want to automatically import your forms."))
        }
        ;
        Ja.propTypes = {
            changeAnalyticsState: _e().func.isRequired
        };
        const Qa = (0,
        c.connect)(null, (e=>({
            changeAnalyticsState: t=>e(J(t))
        })))(Ja);
        var eo = n(2801);
        const to = Pe().div.withConfig({
            displayName: "Pon__PonWrapper",
            componentId: "sc-1tjg145-0"
        })(["margin-bottom:18px;"])
          , no = Pe()(eo.Z).withConfig({
            displayName: "Pon__PonsLink",
            componentId: "sc-1tjg145-1"
        })(["font-size:16px;&:hover{color:#23527c;}"])
          , ao = e=>{
            let {ponId: t, text: n} = e;
            return r().createElement(to, null, r().createElement(no, {
                href: "#",
                theme: "turbotax",
                onClick: e=>{
                    e.preventDefault(),
                    Me.trackClick({
                        ui_object: "link",
                        ui_object_detail: n
                    }),
                    (0,
                    p.x)().help.showTopic({
                        experience: "PON",
                        experiencePayload: {
                            ponId: t
                        }
                    })
                }
            }, n))
        }
        ;
        ao.propTypes = {
            ponId: _e().string.isRequired,
            text: _e().string.isRequired
        };
        const oo = ao;
        function io(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ro(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? io(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : io(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const co = Pe().div.withConfig({
            displayName: "AccountView__ScContainer",
            componentId: "os9fbt-0"
        })(["margin:20px 20px;display:flex;flex-direction:column;.fdx-manage-connection-plugin-header{font-family:'Avenir Next forINTUIT' !important;}.fdx-manage-connection-plugin-subtitle{font-family:'Avenir Next forINTUIT' !important;}@media (max-width:767px){margin:20px 0px;.fdx-manage-connection-plugin-header{text-align:center;}.fdx-manage-connection-plugin-subtitle{text-align:center;}}"])
          , lo = Pe().div.withConfig({
            displayName: "AccountView__ScPonContainer",
            componentId: "os9fbt-1"
        })(["margin:20px 0px 0px 20px;@media (max-width:767px){text-align:center;}"]);
        class so extends (s()) {
            constructor(e) {
                super(e),
                this.state = {
                    accountListKey: (new Date).getTime(),
                    hasNoAccounts: !1,
                    accountFetchComplete: !1
                }
            }
            get accountConnectionProps() {
                let e = {
                    intuit_resourceOwnerId: ht(),
                    intuit_resourceOwnerType: "USER"
                };
                return pt() && (e = ro(ro({}, e), {}, {
                    Authorization: st()
                })),
                {
                    widgetId: "manage-connection-plugin/main",
                    offeringId: "Intuit.cg.myturbotax",
                    apiKey: v(),
                    environment: I(),
                    is7216: !0,
                    countryCode: "US",
                    headers: e,
                    offeringUrl: dt(),
                    onEvent: e=>{
                        switch (e) {
                        case "onNoConnectionFound":
                        case "lastConnectionDeleted":
                            this.setState({
                                hasNoAccounts: !0
                            });
                            break;
                        case "onConnectionFound":
                            this.setState({
                                accountFetchComplete: !0
                            }),
                            this.props.changeAnalyticsState({
                                screen: "LinkedAccounts"
                            }),
                            Me.trackPageLoad()
                        }
                    }
                    ,
                    onError: e=>{
                        u().logger.frontend.error.nonblocking("Failed to load manage-connection widget", e)
                    }
                }
            }
            render() {
                return this.state.hasNoAccounts ? r().createElement(Qa, null) : r().createElement(co, null, r().createElement(ke(), Ne()({
                    key: this.state.accountListKey
                }, this.accountConnectionProps)), !pt() && this.state.accountFetchComplete ? r().createElement(lo, null, r().createElement(oo, {
                    ponId: "L5Dnzaxm4",
                    text: "How do I link another account?"
                }), r().createElement(oo, {
                    ponId: "L1UB5zkIR",
                    text: "How does automatic import work?"
                }), r().createElement(oo, {
                    ponId: "L7l2iUzbL",
                    text: "How do I turn off automatic import?"
                })) : null)
            }
        }
        const uo = (0,
        c.connect)(null, (e=>({
            changeAnalyticsState: t=>e(J(t))
        })))(so)
          , po = Pe().div.withConfig({
            displayName: "ExperienceOrchestrator__ScUploadWrapper",
            componentId: "p8rr6l-0"
        })(["", ""], (e=>{
            let {uploadState: t} = e;
            return t.status !== ie.INACTIVE ? "\n         width: 100%;\n         height; 100%;\n     " : "\n         display:none;\n     "
        }
        ))
          , mo = Pe().div.withConfig({
            displayName: "ExperienceOrchestrator__ScTabWrapper",
            componentId: "p8rr6l-1"
        })(["padding-top:20px;"])
          , ho = 0
          , go = 1
          , fo = e=>{
            let {uploadState: t, addPlusActive: n, storageCapacityScreenActive: a, mobileDownloadInstructions: o, traLockoutScreenActive: c, triggerTRALockout: l, selectedTaxYear: s, taxReturnDocId: d, changeAnalyticsState: u, widgetContext: p} = e;
            const [m,h] = (0,
            i.useState)(ho);
            return window.scrollTo(0, 0),
            r().createElement("div", null, (()=>{
                let e;
                return aa(ia, ra, {}).then((t=>{
                    e = oa(t, ["PCL=B", "PCL=D"])
                }
                )),
                t.status === ie.INACTIVE && !0 !== e && r().createElement(mo, null, r().createElement(Oe.ZP, {
                    start: ho,
                    onChange: h
                }, r().createElement(Oe.ZP.Title, null, "Documents"), r().createElement(Oe.ZP.Title, null, "Linked Accounts")))
            }
            )(), r().createElement(po, {
                uploadState: t
            }, r().createElement(Vt, null)), m === go ? r().createElement(uo, null) : n ? r().createElement(Ua, null) : a ? r().createElement(Ga, null) : o ? r().createElement(Za, null) : c ? r().createElement(ke(), {
                closeTRALockout: ()=>{
                    l()
                }
                ,
                widgetId: "my-docs/tra-lockout",
                taxYear: s,
                docId: d,
                analytics: Me,
                changeAnalyticsState: u,
                widgetContext: p
            }) : t.status === ie.INACTIVE ? r().createElement(va, null) : null)
        }
        ;
        fo.propTypes = {
            addPlusActive: _e().bool.isRequired,
            storageCapacityScreenActive: _e().bool.isRequired,
            uploadState: _e().string.isRequired,
            mobileDownloadInstructions: _e().bool.isRequired,
            traLockoutScreenActive: _e().bool.isRequired,
            triggerTRALockout: _e().func.isRequired,
            selectedTaxYear: _e().string.isRequired,
            taxReturnDocId: _e().string.isRequired,
            changeAnalyticsState: _e().func.isRequired,
            widgetContext: _e().shape.isRequired
        };
        const yo = (0,
        c.connect)((e=>({
            uploadState: e.uploadState,
            addPlusActive: e.addPlusState,
            storageCapacityScreenActive: e.storageCapacityScreenState,
            mobileDownloadInstructions: e.mobileDownloadInstructions,
            traLockoutScreenActive: e.traLockoutScreenState,
            taxReturnDocId: e.taxReturnPDFData,
            selectedTaxYear: e.selectedTaxYear
        })), (e=>({
            triggerTRALockout: ()=>e(te(!1)),
            changeAnalyticsState: t=>e(J(t))
        })))(fo);
        n(6221),
        n(8392),
        n(3050),
        n(3237),
        n(591),
        n(1661),
        n(6409);
        function bo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function xo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? bo(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        class Eo extends (s()) {
            constructor(e) {
                var t, n, a;
                super(e),
                this.state = {
                    initialized: !1
                },
                (0,
                p.q)(e.sandbox),
                t = e.sandbox,
                _ = new g.Z({
                    apiKey: v(),
                    environment: I(),
                    logger: (n = t.logger,
                    {
                        log: function() {
                            return n.log(...arguments)
                        },
                        error: function() {
                            return n.error(...arguments)
                        }
                    })
                }),
                a = e.widgetContext,
                m = a,
                u().init(xo(xo({}, e), {}, {
                    caasFetchEnabled: !1
                }), (()=>{}
                )).then((()=>{
                    u().runtimeGlobals.notifyReady = this.ready.bind(this);
                    const e = Ce();
                    e.dispatch(ae((0,
                    p.x)().pluginConfig.extendedProperties || {})),
                    e.dispatch(X(u().runtimeGlobals.props.widgetContext.taxYear)),
                    this.setState({
                        initialized: !0
                    }),
                    (0,
                    p.x)().pubsub.publish(u().constants.unified.PUBLISH_EVENTS.SET_NAV, {
                        data: {
                            currentTab: "",
                            navItems: []
                        }
                    })
                }
                ))
            }
            componentWillUnmount() {
                Ce().dispatch(ne())
            }
            render() {
                return this.state.initialized ? r().createElement(c.Provider, {
                    store: Ce()
                }, r().createElement(yo, {
                    widgetContext: this.props.widgetContext
                })) : null
            }
        }
    }
}]);
//# sourceMappingURL=js-widgets-vault-vault.a1a820188a608ccd17338441f4a1.js.map
