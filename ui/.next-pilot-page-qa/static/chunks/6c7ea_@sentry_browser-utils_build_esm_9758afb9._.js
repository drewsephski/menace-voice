(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WINDOW",
    ()=>WINDOW
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
;
 //# sourceMappingURL=types.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/instrument/dom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClickKeypressInstrumentationHandler",
    ()=>addClickKeypressInstrumentationHandler,
    "instrumentDOM",
    ()=>instrumentDOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/instrument/handlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
const DEBOUNCE_DURATION = 1e3;
let debounceTimerID;
let lastCapturedEventType;
let lastCapturedEventTargetId;
function addClickKeypressInstrumentationHandler(handler) {
    const type = "dom";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentDOM);
}
function instrumentDOM() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        return;
    }
    const triggerDOMHandler = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"].bind(null, "dom");
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener("click", globalDOMEventHandler, false);
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener("keypress", globalDOMEventHandler, false);
    [
        "EventTarget",
        "Node"
    ].forEach((target)=>{
        var _globalObject_target, _proto_hasOwnProperty;
        const globalObject = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"];
        const proto = (_globalObject_target = globalObject[target]) === null || _globalObject_target === void 0 ? void 0 : _globalObject_target.prototype;
        if (!(proto === null || proto === void 0 ? void 0 : (_proto_hasOwnProperty = proto.hasOwnProperty) === null || _proto_hasOwnProperty === void 0 ? void 0 : _proto_hasOwnProperty.call(proto, "addEventListener"))) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(proto, "addEventListener", function(originalAddEventListener) {
            return function(type, listener, options) {
                if (type === "click" || type == "keypress") {
                    try {
                        const handlers = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
                        const handlerForType = handlers[type] = handlers[type] || {
                            refCount: 0
                        };
                        if (!handlerForType.handler) {
                            const handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount++;
                    } catch (e) {}
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(proto, "removeEventListener", function(originalRemoveEventListener) {
            return function(type, listener, options) {
                if (type === "click" || type == "keypress") {
                    try {
                        const handlers = this.__sentry_instrumentation_handlers__ || {};
                        const handlerForType = handlers[type];
                        if (handlerForType) {
                            handlerForType.refCount--;
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = void 0;
                                delete handlers[type];
                            }
                            if (Object.keys(handlers).length === 0) {
                                delete this.__sentry_instrumentation_handlers__;
                            }
                        }
                    } catch (e) {}
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
function isSimilarToLastCapturedEvent(event) {
    if (event.type !== lastCapturedEventType) {
        return false;
    }
    try {
        if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) {
            return false;
        }
    } catch (e) {}
    return true;
}
function shouldSkipDOMEvent(eventType, target) {
    if (eventType !== "keypress") {
        return false;
    }
    if (!(target === null || target === void 0 ? void 0 : target.tagName)) {
        return true;
    }
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return false;
    }
    return true;
}
function makeDOMEventHandler(handler) {
    let globalListener = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return (event)=>{
        if (!event || event["_sentryCaptured"]) {
            return;
        }
        const target = getEventTarget(event);
        if (shouldSkipDOMEvent(event.type, target)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(event, "_sentryCaptured", true);
        if (target && !target._sentryId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(target, "_sentryId", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])());
        }
        const name = event.type === "keypress" ? "input" : event.type;
        if (!isSimilarToLastCapturedEvent(event)) {
            const handlerData = {
                event,
                name,
                global: globalListener
            };
            handler(handlerData);
            lastCapturedEventType = event.type;
            lastCapturedEventTargetId = target ? target._sentryId : void 0;
        }
        clearTimeout(debounceTimerID);
        debounceTimerID = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].setTimeout(()=>{
            lastCapturedEventTargetId = void 0;
            lastCapturedEventType = void 0;
        }, DEBOUNCE_DURATION);
    };
}
function getEventTarget(event) {
    try {
        return event.target;
    } catch (e) {
        return null;
    }
}
;
 //# sourceMappingURL=dom.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/instrument/xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SENTRY_XHR_DATA_KEY",
    ()=>SENTRY_XHR_DATA_KEY,
    "addXhrInstrumentationHandler",
    ()=>addXhrInstrumentationHandler,
    "instrumentXHR",
    ()=>instrumentXHR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/instrument/handlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
function addXhrInstrumentationHandler(handler) {
    const type = "xhr";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentXHR);
}
function instrumentXHR() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].XMLHttpRequest) {
        return;
    }
    const xhrproto = XMLHttpRequest.prototype;
    xhrproto.open = new Proxy(xhrproto.open, {
        apply (originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
            const virtualError = new Error();
            const startTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1e3;
            const method = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : void 0;
            const url = parseXhrUrlArg(xhrOpenArgArray[1]);
            if (!method || !url) {
                return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
            }
            xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
                method,
                url,
                request_headers: {}
            };
            if (method === "POST" && url.match(/sentry_key/)) {
                xhrOpenThisArg.__sentry_own_request__ = true;
            }
            const onreadystatechangeHandler = ()=>{
                const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];
                if (!xhrInfo) {
                    return;
                }
                if (xhrOpenThisArg.readyState === 4) {
                    try {
                        xhrInfo.status_code = xhrOpenThisArg.status;
                    } catch (e) {}
                    const handlerData = {
                        endTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1e3,
                        startTimestamp,
                        xhr: xhrOpenThisArg,
                        virtualError
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])("xhr", handlerData);
                    xhrOpenThisArg.removeEventListener("readystatechange", onreadystatechangeHandler);
                }
            };
            if ("onreadystatechange" in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === "function") {
                xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, {
                    apply (originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
                        onreadystatechangeHandler();
                        return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
                    }
                });
            } else {
                xhrOpenThisArg.addEventListener("readystatechange", onreadystatechangeHandler);
            }
            xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, {
                apply (originalSetRequestHeader, setRequestHeaderThisArg, setRequestHeaderArgArray) {
                    const [header, value] = setRequestHeaderArgArray;
                    const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];
                    if (xhrInfo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(header) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(value)) {
                        xhrInfo.request_headers[header.toLowerCase()] = value;
                    }
                    return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
                }
            });
            return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
        }
    });
    xhrproto.send = new Proxy(xhrproto.send, {
        apply (originalSend, sendThisArg, sendArgArray) {
            const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];
            if (!sentryXhrData) {
                return originalSend.apply(sendThisArg, sendArgArray);
            }
            if (sendArgArray[0] !== void 0) {
                sentryXhrData.body = sendArgArray[0];
            }
            const handlerData = {
                startTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1e3,
                xhr: sendThisArg
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])("xhr", handlerData);
            return originalSend.apply(sendThisArg, sendArgArray);
        }
    });
}
function parseXhrUrlArg(url) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(url)) {
        return url;
    }
    try {
        return url.toString();
    } catch (e) {}
    return void 0;
}
;
 //# sourceMappingURL=xhr.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/instrument/history.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHistoryInstrumentationHandler",
    ()=>addHistoryInstrumentationHandler,
    "instrumentHistory",
    ()=>instrumentHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/instrument/handlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/supports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
let lastHref;
function addHistoryInstrumentationHandler(handler) {
    const type = "history";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentHistory);
}
function instrumentHistory() {
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener("popstate", ()=>{
        const to = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.href;
        const from = lastHref;
        lastHref = to;
        if (from === to) {
            return;
        }
        const handlerData = {
            from,
            to
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])("history", handlerData);
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsHistory"])()) {
        return;
    }
    function historyReplacementFunction(originalHistoryFunction) {
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const url = args.length > 2 ? args[2] : void 0;
            if (url) {
                const from = lastHref;
                const to = getAbsoluteUrl(String(url));
                lastHref = to;
                if (from === to) {
                    return originalHistoryFunction.apply(this, args);
                }
                const handlerData = {
                    from,
                    to
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])("history", handlerData);
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].history, "pushState", historyReplacementFunction);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].history, "replaceState", historyReplacementFunction);
}
function getAbsoluteUrl(urlOrPath) {
    try {
        const url = new URL(urlOrPath, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin);
        return url.toString();
    } catch (e) {
        return urlOrPath;
    }
}
;
 //# sourceMappingURL=history.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "htmlTreeAsString",
    ()=>htmlTreeAsString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
;
const DEFAULT_MAX_STRING_LENGTH = 80;
const accessors = {};
try {
    if (typeof Node !== "undefined") {
        accessors.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get;
    }
    if (typeof Element !== "undefined") {
        accessors.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get;
        accessors.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get;
        accessors.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get;
        accessors.getAttribute = Element.prototype.getAttribute;
    }
    if (typeof HTMLElement !== "undefined") {
        accessors.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get;
    }
} catch (e) {}
function _safeRead(el, prop, arg) {
    const fn = accessors[prop];
    if (fn) {
        try {
            return fn.call(el, arg);
        } catch (e) {}
    }
    const val = el[prop];
    return typeof val === "function" ? val.call(el, arg) : val;
}
function htmlTreeAsString(elem) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!elem) {
        return "<unknown>";
    }
    try {
        let currentElem = elem;
        const MAX_TRAVERSE_HEIGHT = 5;
        const out = [];
        let height = 0;
        let len = 0;
        const separator = " > ";
        const sepLength = separator.length;
        let nextStr;
        const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
        const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
        while(currentElem && height++ < MAX_TRAVERSE_HEIGHT){
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = _safeRead(currentElem, "parentNode");
        }
        return out.reverse().join(separator);
    } catch (e) {
        return "<unknown>";
    }
}
function _htmlElementAsString(el, keyAttrs) {
    const out = [];
    const tagName = _safeRead(el, "tagName");
    if (!tagName) {
        return "";
    }
    if (typeof HTMLElement !== "undefined") {
        if (el instanceof HTMLElement) {
            const dataset = _safeRead(el, "dataset");
            if (dataset) {
                if (dataset["sentryComponent"]) {
                    return dataset["sentryComponent"];
                }
                if (dataset["sentryElement"]) {
                    return dataset["sentryElement"];
                }
            }
        }
    }
    out.push(tagName.toLowerCase());
    const keyAttrPairs = (keyAttrs === null || keyAttrs === void 0 ? void 0 : keyAttrs.length) ? keyAttrs.filter((keyAttr)=>_safeRead(el, "getAttribute", keyAttr)).map((keyAttr)=>[
            keyAttr,
            _safeRead(el, "getAttribute", keyAttr)
        ]) : null;
    if (keyAttrPairs === null || keyAttrPairs === void 0 ? void 0 : keyAttrPairs.length) {
        keyAttrPairs.forEach((keyAttrPair)=>{
            out.push("[".concat(keyAttrPair[0], '="').concat(keyAttrPair[1], '"]'));
        });
    } else {
        const id = _safeRead(el, "id");
        if (id) {
            out.push("#".concat(id));
        }
        const className = _safeRead(el, "className");
        if (className && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(className)) {
            const classes = className.split(/\s+/);
            for (const c of classes){
                out.push(".".concat(c));
            }
        }
    }
    for (const k of [
        "aria-label",
        "type",
        "name",
        "title",
        "alt"
    ]){
        const attr = _safeRead(el, "getAttribute", k);
        if (attr) {
            out.push("[".concat(k, '="').concat(attr, '"]'));
        }
    }
    return out.join("");
}
;
 //# sourceMappingURL=htmlTreeAsString.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPageListener",
    ()=>addPageListener,
    "removePageListener",
    ()=>removePageListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
function addPageListener(type, listener, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener(type, listener, options);
    }
}
function removePageListener(type, listener, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].removeEventListener(type, listener, options);
    }
}
;
 //# sourceMappingURL=globalListeners.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runOnce",
    ()=>runOnce
]);
const runOnce = (cb)=>{
    let called = false;
    return ()=>{
        if (!called) {
            cb();
            called = true;
        }
    };
};
;
 //# sourceMappingURL=runOnce.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenIdleOrHidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whenIdleOrHidden",
    ()=>whenIdleOrHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)");
;
;
;
const whenIdleOrHidden = (cb)=>{
    var _WINDOW_document;
    const rIC = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].requestIdleCallback || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].setTimeout;
    if (((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.visibilityState) === "hidden") {
        cb();
    } else {
        cb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnce"])(cb);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("visibilitychange", cb, {
            once: true,
            capture: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("pagehide", cb, {
            once: true,
            capture: true
        });
        rIC(()=>{
            cb();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])("visibilitychange", cb, {
                capture: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])("pagehide", cb, {
                capture: true
            });
        });
    }
};
;
 //# sourceMappingURL=whenIdleOrHidden.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEBUG_BUILD",
    ()=>DEBUG_BUILD
]);
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
;
 //# sourceMappingURL=debug-build.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/getNativeImplementation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCachedImplementation",
    ()=>clearCachedImplementation,
    "fetch",
    ()=>fetch,
    "getNativeImplementation",
    ()=>getNativeImplementation,
    "setTimeout",
    ()=>setTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/supports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
;
const cachedImplementations = {};
function getNativeImplementation(name) {
    const cached = cachedImplementations[name];
    if (cached) {
        return cached;
    }
    let impl = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"][name];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNativeFunction"])(impl)) {
        return cachedImplementations[name] = impl.bind(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"]);
    }
    const document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document;
    if (document && typeof document.createElement === "function") {
        try {
            const sandbox = document.createElement("iframe");
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            const contentWindow = sandbox.contentWindow;
            if (contentWindow === null || contentWindow === void 0 ? void 0 : contentWindow[name]) {
                impl = contentWindow[name];
            }
            document.head.removeChild(sandbox);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("Could not create sandbox iframe for ".concat(name, " check, bailing to window.").concat(name, ": "), e);
        }
    }
    if (!impl) {
        return impl;
    }
    return cachedImplementations[name] = impl.bind(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"]);
}
function clearCachedImplementation(name) {
    cachedImplementations[name] = void 0;
}
function fetch() {
    for(var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++){
        rest[_key] = arguments[_key];
    }
    return getNativeImplementation("fetch")(...rest);
}
function setTimeout() {
    for(var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++){
        rest[_key] = arguments[_key];
    }
    return getNativeImplementation("setTimeout")(...rest);
}
;
 //# sourceMappingURL=getNativeImplementation.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement
]);
function isElement(wat) {
    if (typeof Element === "undefined") {
        return false;
    }
    try {
        return wat instanceof Element;
    } catch (e) {
        return false;
    }
}
;
 //# sourceMappingURL=is.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindReporter",
    ()=>bindReporter
]);
const getRating = (value, thresholds)=>{
    if (value > thresholds[1]) {
        return "poor";
    }
    if (value > thresholds[0]) {
        return "needs-improvement";
    }
    return "good";
};
const bindReporter = (callback, metric, thresholds, reportAllChanges)=>{
    let prevValue;
    let delta;
    return (forceReport)=>{
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                delta = metric.value - (prevValue !== null && prevValue !== void 0 ? prevValue : 0);
                if (delta || prevValue === void 0) {
                    prevValue = metric.value;
                    metric.delta = delta;
                    metric.rating = getRating(metric.value, thresholds);
                    callback(metric);
                }
            }
        }
    };
};
;
 //# sourceMappingURL=bindReporter.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNavigationEntry",
    ()=>getNavigationEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
const getNavigationEntry = function() {
    let checkResponseStart = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    var _WINDOW_performance_getEntriesByType, _WINDOW_performance;
    const navigationEntry = (_WINDOW_performance = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].performance) === null || _WINDOW_performance === void 0 ? void 0 : (_WINDOW_performance_getEntriesByType = _WINDOW_performance.getEntriesByType) === null || _WINDOW_performance_getEntriesByType === void 0 ? void 0 : _WINDOW_performance_getEntriesByType.call(_WINDOW_performance, "navigation")[0];
    if (// sentry-specific change:
    // We don't want to check for responseStart for our own use of `getNavigationEntry`
    !checkResponseStart || navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()) {
        return navigationEntry;
    }
};
;
 //# sourceMappingURL=getNavigationEntry.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActivationStart",
    ()=>getActivationStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
;
const getActivationStart = ()=>{
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])();
    var _navEntry_activationStart;
    return (_navEntry_activationStart = navEntry === null || navEntry === void 0 ? void 0 : navEntry.activationStart) !== null && _navEntry_activationStart !== void 0 ? _navEntry_activationStart : 0;
};
;
 //# sourceMappingURL=getActivationStart.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVisibilityWatcher",
    ()=>getVisibilityWatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
;
;
;
let firstHiddenTime = -1;
const onHiddenFunctions = /* @__PURE__ */ new Set();
const initHiddenTime = ()=>{
    var _WINDOW_document, _WINDOW_document1;
    return ((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.visibilityState) === "hidden" && !((_WINDOW_document1 = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document1 === void 0 ? void 0 : _WINDOW_document1.prerendering) ? 0 : Infinity;
};
const onVisibilityUpdate = (event)=>{
    if (isPageHidden(event) && firstHiddenTime > -1) {
        if (event.type === "visibilitychange" || event.type === "pagehide") {
            for (const onHiddenFunction of onHiddenFunctions){
                onHiddenFunction();
            }
        }
        if (!isFinite(firstHiddenTime)) {
            firstHiddenTime = event.type === "visibilitychange" ? event.timeStamp : 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])("prerenderingchange", onVisibilityUpdate, true);
        }
    }
};
const getVisibilityWatcher = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document && firstHiddenTime < 0) {
        var _globalThis_performance_getEntriesByType_filter_;
        const activationStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])();
        const firstVisibilityStateHiddenTime = !__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.prerendering ? (_globalThis_performance_getEntriesByType_filter_ = globalThis.performance.getEntriesByType("visibility-state").filter((e)=>e.name === "hidden" && e.startTime > activationStart)[0]) === null || _globalThis_performance_getEntriesByType_filter_ === void 0 ? void 0 : _globalThis_performance_getEntriesByType_filter_.startTime : void 0;
        firstHiddenTime = firstVisibilityStateHiddenTime !== null && firstVisibilityStateHiddenTime !== void 0 ? firstVisibilityStateHiddenTime : initHiddenTime();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("visibilitychange", onVisibilityUpdate, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("pagehide", onVisibilityUpdate, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("prerenderingchange", onVisibilityUpdate, true);
    }
    return {
        get firstHiddenTime () {
            return firstHiddenTime;
        },
        onHidden (cb) {
            onHiddenFunctions.add(cb);
        }
    };
};
function isPageHidden(event) {
    var _WINDOW_document;
    return event.type === "pagehide" || ((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.visibilityState) === "hidden";
}
;
 //# sourceMappingURL=getVisibilityWatcher.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/generateUniqueID.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUniqueID",
    ()=>generateUniqueID
]);
const generateUniqueID = ()=>{
    return "v5-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
};
;
 //# sourceMappingURL=generateUniqueID.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMetric",
    ()=>initMetric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$generateUniqueID$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/generateUniqueID.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
;
;
;
;
const initMetric = function(name) {
    let value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])();
    let navigationType = "navigate";
    if (navEntry) {
        var _WINDOW_document, _WINDOW_document1;
        if (((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.prerendering) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])() > 0) {
            navigationType = "prerender";
        } else if ((_WINDOW_document1 = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document1 === void 0 ? void 0 : _WINDOW_document1.wasDiscarded) {
            navigationType = "restore";
        } else if (navEntry.type) {
            navigationType = navEntry.type.replace(/_/g, "-");
        }
    }
    const entries = [];
    return {
        name,
        value,
        rating: "good",
        // If needed, will be updated when reported. `const` to keep the type from widening to `string`.
        delta: 0,
        entries,
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$generateUniqueID$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUniqueID"])(),
        navigationType
    };
};
;
 //# sourceMappingURL=initMetric.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initUnique",
    ()=>initUnique
]);
const instanceMap = /* @__PURE__ */ new WeakMap();
function initUnique(identityObj, ClassObj) {
    try {
        if (!instanceMap.get(identityObj)) {
            instanceMap.set(identityObj, new ClassObj());
        }
        return instanceMap.get(identityObj);
    } catch (_e) {
        return new ClassObj();
    }
}
;
 //# sourceMappingURL=initUnique.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/LayoutShiftManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutShiftManager",
    ()=>LayoutShiftManager
]);
class LayoutShiftManager {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    _processEntry(entry) {
        var _this__onAfterProcessingUnexpectedShift, _this;
        if (entry.hadRecentInput) return;
        const firstSessionEntry = this._sessionEntries[0];
        const lastSessionEntry = this._sessionEntries[this._sessionEntries.length - 1];
        if (this._sessionValue && firstSessionEntry && lastSessionEntry && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
            this._sessionValue += entry.value;
            this._sessionEntries.push(entry);
        } else {
            this._sessionValue = entry.value;
            this._sessionEntries = [
                entry
            ];
        }
        (_this__onAfterProcessingUnexpectedShift = (_this = this)._onAfterProcessingUnexpectedShift) === null || _this__onAfterProcessingUnexpectedShift === void 0 ? void 0 : _this__onAfterProcessingUnexpectedShift.call(_this, entry);
    }
    constructor(){
        // oxlint-disable-next-line sdk/no-class-field-initializers
        this._sessionValue = 0;
        // oxlint-disable-next-line sdk/no-class-field-initializers
        this._sessionEntries = [];
    }
}
;
 //# sourceMappingURL=LayoutShiftManager.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observe",
    ()=>observe
]);
const observe = function(type, callback) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            const po = new PerformanceObserver((list)=>{
                Promise.resolve().then(()=>{
                    callback(list.getEntries());
                });
            });
            po.observe({
                type,
                buffered: true,
                ...opts
            });
            return po;
        }
    } catch (e) {}
    return;
};
;
 //# sourceMappingURL=observe.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whenActivated",
    ()=>whenActivated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
const whenActivated = (callback)=>{
    var _WINDOW_document;
    if ((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.prerendering) {
        addEventListener("prerenderingchange", ()=>callback(), true);
    } else {
        callback();
    }
};
;
 //# sourceMappingURL=whenActivated.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/onFCP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FCPThresholds",
    ()=>FCPThresholds,
    "onFCP",
    ()=>onFCP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
;
;
;
;
;
;
const FCPThresholds = [
    1800,
    3e3
];
const onFCP = function(onReport) {
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>{
        const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])("FCP");
        let report;
        const handleEntries = (entries)=>{
            for (const entry of entries){
                if (entry.name === "first-contentful-paint") {
                    po.disconnect();
                    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                        metric.value = Math.max(entry.startTime - (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])(), 0);
                        metric.entries.push(entry);
                        report(true);
                    }
                }
            }
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])("paint", handleEntries);
        if (po) {
            report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, FCPThresholds, opts.reportAllChanges);
        }
    });
};
;
 //# sourceMappingURL=onFCP.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/getCLS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLSThresholds",
    ()=>CLSThresholds,
    "onCLS",
    ()=>onCLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LayoutShiftManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/LayoutShiftManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onFCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/onFCP.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const CLSThresholds = [
    0.1,
    0.25
];
const onCLS = function(onReport) {
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onFCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onFCP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnce"])(()=>{
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])("CLS", 0);
        let report;
        const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        const layoutShiftManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initUnique"])(opts, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LayoutShiftManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutShiftManager"]);
        const handleEntries = (entries)=>{
            for (const entry of entries){
                layoutShiftManager._processEntry(entry);
            }
            if (layoutShiftManager._sessionValue > metric.value) {
                metric.value = layoutShiftManager._sessionValue;
                metric.entries = layoutShiftManager._sessionEntries;
                report();
            }
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])("layout-shift", handleEntries);
        if (po) {
            var _WINDOW_setTimeout;
            report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, CLSThresholds, opts.reportAllChanges);
            visibilityWatcher.onHidden(()=>{
                handleEntries(po.takeRecords());
                report(true);
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"] === void 0 ? void 0 : (_WINDOW_setTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].setTimeout) === null || _WINDOW_setTimeout === void 0 ? void 0 : _WINDOW_setTimeout.call(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"], report);
        }
    }));
};
;
 //# sourceMappingURL=getCLS.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInteractionCount",
    ()=>getInteractionCount,
    "initInteractionCountPolyfill",
    ()=>initInteractionCountPolyfill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
;
let interactionCountEstimate = 0;
let minKnownInteractionId = Infinity;
let maxKnownInteractionId = 0;
const updateEstimate = (entries)=>{
    entries.forEach((e)=>{
        if (e.interactionId) {
            minKnownInteractionId = Math.min(minKnownInteractionId, e.interactionId);
            maxKnownInteractionId = Math.max(maxKnownInteractionId, e.interactionId);
            interactionCountEstimate = maxKnownInteractionId ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1 : 0;
        }
    });
};
let po;
const getInteractionCount = ()=>{
    return po ? interactionCountEstimate : performance.interactionCount || 0;
};
const initInteractionCountPolyfill = ()=>{
    if ("interactionCount" in performance || po) return;
    po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])("event", updateEstimate, {
        type: "event",
        buffered: true,
        durationThreshold: 0
    });
};
;
 //# sourceMappingURL=interactionCountPolyfill.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/InteractionManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractionManager",
    ()=>InteractionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js [app-client] (ecmascript)");
;
const MAX_INTERACTIONS_TO_CONSIDER = 10;
let prevInteractionCount = 0;
const getInteractionCountForNavigation = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInteractionCount"])() - prevInteractionCount;
};
class InteractionManager {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility, jsdoc/require-jsdoc
    _resetInteractions() {
        prevInteractionCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInteractionCount"])();
        this._longestInteractionList.length = 0;
        this._longestInteractionMap.clear();
    }
    /**
   * Returns the estimated p98 longest interaction based on the stored
   * interaction candidates and the interaction count for the current page.
   */ // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    _estimateP98LongestInteraction() {
        const candidateInteractionIndex = Math.min(this._longestInteractionList.length - 1, Math.floor(getInteractionCountForNavigation() / 50));
        return this._longestInteractionList[candidateInteractionIndex];
    }
    /**
   * Takes a performance entry and adds it to the list of worst interactions
   * if its duration is long enough to make it among the worst. If the
   * entry is part of an existing interaction, it is merged and the latency
   * and entries list is updated as needed.
   */ // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    _processEntry(entry) {
        var _this__onBeforeProcessingEntry, _this;
        (_this__onBeforeProcessingEntry = (_this = this)._onBeforeProcessingEntry) === null || _this__onBeforeProcessingEntry === void 0 ? void 0 : _this__onBeforeProcessingEntry.call(_this, entry);
        if (!(entry.interactionId || entry.entryType === "first-input")) return;
        const minLongestInteraction = this._longestInteractionList.at(-1);
        let interaction = this._longestInteractionMap.get(entry.interactionId);
        if (interaction || this._longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER || // If the above conditions are false, `minLongestInteraction` will be set.
        entry.duration > minLongestInteraction._latency) {
            var _this__onAfterProcessingINPCandidate, _this1;
            if (interaction) {
                if (entry.duration > interaction._latency) {
                    interaction.entries = [
                        entry
                    ];
                    interaction._latency = entry.duration;
                } else if (entry.duration === interaction._latency && entry.startTime === interaction.entries[0].startTime) {
                    interaction.entries.push(entry);
                }
            } else {
                interaction = {
                    id: entry.interactionId,
                    entries: [
                        entry
                    ],
                    _latency: entry.duration
                };
                this._longestInteractionMap.set(interaction.id, interaction);
                this._longestInteractionList.push(interaction);
            }
            this._longestInteractionList.sort((a, b)=>b._latency - a._latency);
            if (this._longestInteractionList.length > MAX_INTERACTIONS_TO_CONSIDER) {
                const removedInteractions = this._longestInteractionList.splice(MAX_INTERACTIONS_TO_CONSIDER);
                for (const interaction2 of removedInteractions){
                    this._longestInteractionMap.delete(interaction2.id);
                }
            }
            (_this__onAfterProcessingINPCandidate = (_this1 = this)._onAfterProcessingINPCandidate) === null || _this__onAfterProcessingINPCandidate === void 0 ? void 0 : _this__onAfterProcessingINPCandidate.call(_this1, interaction);
        }
    }
    constructor(){
        /**
     * A list of longest interactions on the page (by latency) sorted so the
     * longest one is first. The list is at most MAX_INTERACTIONS_TO_CONSIDER
     * long.
     */ // oxlint-disable-next-line sdk/no-class-field-initializers
        this._longestInteractionList = [];
        /**
     * A mapping of longest interactions by their interaction ID.
     * This is used for faster lookup.
     */ // oxlint-disable-next-line sdk/no-class-field-initializers
        this._longestInteractionMap = /* @__PURE__ */ new Map();
    }
}
;
 //# sourceMappingURL=InteractionManager.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/getINP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INPThresholds",
    ()=>INPThresholds,
    "onINP",
    ()=>onINP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$InteractionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/InteractionManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenIdleOrHidden.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const INPThresholds = [
    200,
    500
];
const DEFAULT_DURATION_THRESHOLD = 40;
const onINP = function(onReport) {
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) {
        return;
    }
    const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInteractionCountPolyfill"])();
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])("INP");
        let report;
        const interactionManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initUnique"])(opts, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$InteractionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractionManager"]);
        const handleEntries = (entries)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenIdleOrHidden"])(()=>{
                for (const entry of entries){
                    interactionManager._processEntry(entry);
                }
                const inp = interactionManager._estimateP98LongestInteraction();
                if (inp && inp._latency !== metric.value) {
                    metric.value = inp._latency;
                    metric.entries = inp.entries;
                    report();
                }
            });
        };
        var _opts_durationThreshold;
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])("event", handleEntries, {
            // Event Timing entries have their durations rounded to the nearest 8ms,
            // so a duration of 40ms would be any event that spans 2.5 or more frames
            // at 60Hz. This threshold is chosen to strike a balance between usefulness
            // and performance. Running this callback for any interaction that spans
            // just one or two frames is likely not worth the insight that could be
            // gained.
            durationThreshold: (_opts_durationThreshold = opts.durationThreshold) !== null && _opts_durationThreshold !== void 0 ? _opts_durationThreshold : DEFAULT_DURATION_THRESHOLD
        });
        report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, INPThresholds, opts.reportAllChanges);
        if (po) {
            po.observe({
                type: "first-input",
                buffered: true
            });
            visibilityWatcher.onHidden(()=>{
                handleEntries(po.takeRecords());
                report(true);
            });
        }
    });
};
;
 //# sourceMappingURL=getINP.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/LCPEntryManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LCPEntryManager",
    ()=>LCPEntryManager
]);
class LCPEntryManager {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility, jsdoc/require-jsdoc
    _processEntry(entry) {
        var _this__onBeforeProcessingEntry, _this;
        (_this__onBeforeProcessingEntry = (_this = this)._onBeforeProcessingEntry) === null || _this__onBeforeProcessingEntry === void 0 ? void 0 : _this__onBeforeProcessingEntry.call(_this, entry);
    }
}
;
 //# sourceMappingURL=LCPEntryManager.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/getLCP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LCPThresholds",
    ()=>LCPThresholds,
    "onLCP",
    ()=>onLCP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LCPEntryManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/LCPEntryManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenIdleOrHidden.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const LCPThresholds = [
    2500,
    4e3
];
const onLCP = function(onReport) {
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>{
        const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])("LCP");
        let report;
        const lcpEntryManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initUnique"])(opts, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LCPEntryManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LCPEntryManager"]);
        const handleEntries = (entries)=>{
            if (!opts.reportAllChanges) {
                entries = entries.slice(-1);
            }
            for (const entry of entries){
                lcpEntryManager._processEntry(entry);
                if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                    metric.value = Math.max(entry.startTime - (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])(), 0);
                    metric.entries = [
                        entry
                    ];
                    report();
                }
            }
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])("largest-contentful-paint", handleEntries);
        if (po) {
            report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, LCPThresholds, opts.reportAllChanges);
            const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnce"])(()=>{
                handleEntries(po.takeRecords());
                po.disconnect();
                report(true);
            });
            const stopListeningWrapper = (event)=>{
                if (event.isTrusted) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenIdleOrHidden"])(stopListening);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])(event.type, stopListeningWrapper, {
                        capture: true
                    });
                }
            };
            for (const type of [
                "keydown",
                "click",
                "visibilitychange"
            ]){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])(type, stopListeningWrapper, {
                    capture: true
                });
            }
        }
    });
};
;
 //# sourceMappingURL=getLCP.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/onTTFB.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TTFBThresholds",
    ()=>TTFBThresholds,
    "onTTFB",
    ()=>onTTFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
;
;
;
;
;
;
const TTFBThresholds = [
    800,
    1800
];
const whenReady = (callback)=>{
    var _WINDOW_document, _WINDOW_document1;
    if ((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.prerendering) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>whenReady(callback));
    } else if (((_WINDOW_document1 = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document1 === void 0 ? void 0 : _WINDOW_document1.readyState) !== "complete") {
        addEventListener("load", ()=>whenReady(callback), true);
    } else {
        setTimeout(callback);
    }
};
const onTTFB = function(onReport) {
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])("TTFB");
    const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, TTFBThresholds, opts.reportAllChanges);
    whenReady(()=>{
        const navigationEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])();
        if (navigationEntry) {
            metric.value = Math.max(navigationEntry.responseStart - (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])(), 0);
            metric.entries = [
                navigationEntry
            ];
            report(true);
        }
    });
};
;
 //# sourceMappingURL=onTTFB.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClsInstrumentationHandler",
    ()=>addClsInstrumentationHandler,
    "addInpInstrumentationHandler",
    ()=>addInpInstrumentationHandler,
    "addLcpInstrumentationHandler",
    ()=>addLcpInstrumentationHandler,
    "addPerformanceInstrumentationHandler",
    ()=>addPerformanceInstrumentationHandler,
    "addTtfbInstrumentationHandler",
    ()=>addTtfbInstrumentationHandler,
    "isPerformanceEventTiming",
    ()=>isPerformanceEventTiming
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/stacktrace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getCLS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/getCLS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getINP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/getINP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getLCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/getLCP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onTTFB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/onTTFB.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const handlers = {};
const instrumented = {};
let _previousCls;
let _previousLcp;
let _previousTtfb;
let _previousInp;
function addClsInstrumentationHandler(callback) {
    let stopOnCallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return addMetricObserver("cls", callback, instrumentCls, _previousCls, stopOnCallback);
}
function addLcpInstrumentationHandler(callback) {
    let stopOnCallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return addMetricObserver("lcp", callback, instrumentLcp, _previousLcp, stopOnCallback);
}
function addTtfbInstrumentationHandler(callback) {
    return addMetricObserver("ttfb", callback, instrumentTtfb, _previousTtfb);
}
function addInpInstrumentationHandler(callback) {
    return addMetricObserver("inp", callback, instrumentInp, _previousInp);
}
function addPerformanceInstrumentationHandler(type, callback) {
    addHandler(type, callback);
    if (!instrumented[type]) {
        instrumentPerformanceObserver(type);
        instrumented[type] = true;
    }
    return getCleanupCallback(type, callback);
}
function triggerHandlers(type, data) {
    const typeHandlers = handlers[type];
    if (!(typeHandlers === null || typeHandlers === void 0 ? void 0 : typeHandlers.length)) {
        return;
    }
    for (const handler of typeHandlers){
        try {
            handler(data);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error("Error while triggering instrumentation handler.\nType: ".concat(type, "\nName: ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(handler), "\nError:"), e);
        }
    }
}
function instrumentCls() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getCLS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCLS"])((metric)=>{
        triggerHandlers("cls", {
            metric
        });
        _previousCls = metric;
    }, // We want the callback to be called whenever the CLS value updates.
    // By default, the callback is only called when the tab goes to the background.
    {
        reportAllChanges: true
    });
}
function instrumentLcp() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getLCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onLCP"])((metric)=>{
        triggerHandlers("lcp", {
            metric
        });
        _previousLcp = metric;
    }, // We want the callback to be called whenever the LCP value updates.
    // By default, the callback is only called when the tab goes to the background.
    {
        reportAllChanges: true
    });
}
function instrumentTtfb() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onTTFB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onTTFB"])((metric)=>{
        triggerHandlers("ttfb", {
            metric
        });
        _previousTtfb = metric;
    });
}
function instrumentInp() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getINP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onINP"])((metric)=>{
        triggerHandlers("inp", {
            metric
        });
        _previousInp = metric;
    });
}
function addMetricObserver(type, callback, instrumentFn, previousValue) {
    let stopOnCallback = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    addHandler(type, callback);
    let stopListening;
    if (!instrumented[type]) {
        stopListening = instrumentFn();
        instrumented[type] = true;
    }
    if (previousValue) {
        callback({
            metric: previousValue
        });
    }
    return getCleanupCallback(type, callback, stopOnCallback ? stopListening : void 0);
}
function instrumentPerformanceObserver(type) {
    const options = {};
    if (type === "event") {
        options.durationThreshold = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(type, (entries)=>{
        triggerHandlers(type, {
            entries
        });
    }, options);
}
function addHandler(type, handler) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(handler);
}
function getCleanupCallback(type, callback, stopListening) {
    return ()=>{
        if (stopListening) {
            stopListening();
        }
        const typeHandlers = handlers[type];
        if (!typeHandlers) {
            return;
        }
        const index = typeHandlers.indexOf(callback);
        if (index !== -1) {
            typeHandlers.splice(index, 1);
        }
    };
}
function isPerformanceEventTiming(entry) {
    return "duration" in entry;
}
;
 //# sourceMappingURL=instrument.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/onHidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onHidden",
    ()=>onHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
;
;
const onHidden = (cb)=>{
    const onHiddenOrPageHide = (event)=>{
        var _WINDOW_document;
        if (event.type === "pagehide" || ((_WINDOW_document = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) === null || _WINDOW_document === void 0 ? void 0 : _WINDOW_document.visibilityState) === "hidden") {
            cb(event);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("visibilitychange", onHiddenOrPageHide, {
        capture: true,
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])("pagehide", onHiddenOrPageHide, {
        capture: true,
        once: true
    });
};
;
 //# sourceMappingURL=onHidden.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractNetworkProtocol",
    ()=>extractNetworkProtocol,
    "getBrowserPerformanceAPI",
    ()=>getBrowserPerformanceAPI,
    "isMeasurementValue",
    ()=>isMeasurementValue,
    "listenForWebVitalReportEvents",
    ()=>listenForWebVitalReportEvents,
    "msToSec",
    ()=>msToSec,
    "startAndEndSpan",
    ()=>startAndEndSpan,
    "startStandaloneWebVitalSpan",
    ()=>startStandaloneWebVitalSpan,
    "supportsWebVital",
    ()=>supportsWebVital
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$onHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/onHidden.js [app-client] (ecmascript)");
;
;
;
function isMeasurementValue(value) {
    return typeof value === "number" && isFinite(value);
}
function startAndEndSpan(parentSpan, startTimeInSeconds, endTime, param) {
    let { ...ctx } = param;
    const parentStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(parentSpan).start_timestamp;
    if (parentStartTime && parentStartTime > startTimeInSeconds) {
        if (typeof parentSpan.updateStartTime === "function") {
            parentSpan.updateStartTime(startTimeInSeconds);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withActiveSpan"])(parentSpan, ()=>{
        const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
            startTime: startTimeInSeconds,
            ...ctx
        });
        if (span) {
            span.end(endTime);
        }
        return span;
    });
}
function startStandaloneWebVitalSpan(options) {
    var _WINDOW_navigator;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        return;
    }
    const { name, transaction, attributes: passedAttributes, startTime } = options;
    const { release, environment } = client.getOptions();
    const { userInfo } = client.getDataCollectionOptions();
    const replay = client.getIntegrationByName("Replay");
    const replayId = replay === null || replay === void 0 ? void 0 : replay.getReplayId();
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const user = scope.getUser();
    const userDisplay = user !== void 0 ? user.email || user.id || user.ip_address : void 0;
    let profileId;
    try {
        profileId = scope.getScopeData().contexts.profile.profile_id;
    } catch (e) {}
    const attributes = {
        release,
        environment,
        user: userDisplay || void 0,
        profile_id: profileId || void 0,
        replay_id: replayId || void 0,
        transaction,
        // Web vital score calculation relies on the user agent to account for different
        // browsers setting different thresholds for what is considered a good/meh/bad value.
        // For example: Chrome vs. Chrome Mobile
        "user_agent.original": (_WINDOW_navigator = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator) === null || _WINDOW_navigator === void 0 ? void 0 : _WINDOW_navigator.userAgent,
        // This tells Sentry to infer the IP address from the request
        "client.address": userInfo ? "{{auto}}" : void 0,
        ...passedAttributes
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
        name,
        attributes,
        startTime,
        experimental: {
            standalone: true
        }
    });
}
function getBrowserPerformanceAPI() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].performance;
}
function msToSec(time) {
    return time / 1e3;
}
function extractNetworkProtocol(nextHopProtocol) {
    let name = "unknown";
    let version = "unknown";
    let _name = "";
    for (const char of nextHopProtocol){
        if (char === "/") {
            [name, version] = nextHopProtocol.split("/");
            break;
        }
        if (!isNaN(Number(char))) {
            name = _name === "h" ? "http" : _name;
            version = nextHopProtocol.split(_name)[1];
            break;
        }
        _name += char;
    }
    if (_name === nextHopProtocol) {
        name = _name;
    }
    return {
        name,
        version
    };
}
function supportsWebVital(entryType) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(entryType);
    } catch (e) {
        return false;
    }
}
function listenForWebVitalReportEvents(client, collectorCallback) {
    let pageloadSpan;
    let collected = false;
    function _runCollectorCallbackOnce(event) {
        if (!collected && pageloadSpan) {
            collectorCallback(event, pageloadSpan.spanContext().spanId, pageloadSpan);
        }
        collected = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$onHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onHidden"])(()=>{
        _runCollectorCallbackOnce("pagehide");
    });
    const unsubscribeStartNavigation = client.on("beforeStartNavigationSpan", (_, options)=>{
        if (!(options === null || options === void 0 ? void 0 : options.isRedirect)) {
            _runCollectorCallbackOnce("navigation");
            unsubscribeStartNavigation();
            unsubscribeAfterStartPageLoadSpan();
        }
    });
    const unsubscribeAfterStartPageLoadSpan = client.on("afterStartPageLoadSpan", (span)=>{
        pageloadSpan = span;
        unsubscribeAfterStartPageLoadSpan();
    });
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/cls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_sendStandaloneClsSpan",
    ()=>_sendStandaloneClsSpan,
    "trackClsAsStandaloneSpan",
    ()=>trackClsAsStandaloneSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function trackClsAsStandaloneSpan(client) {
    let standaloneCLsValue = 0;
    let standaloneClsEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])("layout-shift")) {
        return;
    }
    const cleanupClsHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClsInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        standaloneCLsValue = metric.value;
        standaloneClsEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, pageloadSpanId)=>{
        _sendStandaloneClsSpan(standaloneCLsValue, standaloneClsEntry, pageloadSpanId, reportEvent);
        cleanupClsHandler();
    });
}
function _sendStandaloneClsSpan(clsValue, entry, pageloadSpanId, reportEvent) {
    var _entry_sources_;
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Sending CLS span (".concat(clsValue, ")"));
    const startTime = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0) + entry.startTime) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const routeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])((_entry_sources_ = entry.sources[0]) === null || _entry_sources_ === void 0 ? void 0 : _entry_sources_.node) : "Layout shift";
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.http.browser.cls",
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: "ui.webvital.cls",
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: 0,
        // attach the pageload span id to the CLS span so that we can link them in the UI
        "sentry.pageload.span_id": pageloadSpanId,
        // describes what triggered the web vital to be reported
        "sentry.report_event": reportEvent
    };
    if (entry === null || entry === void 0 ? void 0 : entry.sources) {
        entry.sources.forEach((source, index)=>{
            attributes["cls.source.".concat(index + 1)] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(source.node);
        });
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startStandaloneWebVitalSpan"])({
        name,
        transaction: routeName,
        attributes,
        startTime
    });
    if (span) {
        span.addEvent("cls", {
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: clsValue
        });
        span.end(startTime);
    }
}
;
 //# sourceMappingURL=cls.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/lcp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_PLAUSIBLE_LCP_DURATION",
    ()=>MAX_PLAUSIBLE_LCP_DURATION,
    "_sendStandaloneLcpSpan",
    ()=>_sendStandaloneLcpSpan,
    "isValidLcpMetric",
    ()=>isValidLcpMetric,
    "trackLcpAsStandaloneSpan",
    ()=>trackLcpAsStandaloneSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const MAX_PLAUSIBLE_LCP_DURATION = 6e4;
function isValidLcpMetric(lcpValue) {
    return lcpValue != null && lcpValue > 0 && lcpValue <= MAX_PLAUSIBLE_LCP_DURATION;
}
function trackLcpAsStandaloneSpan(client) {
    let standaloneLcpValue = 0;
    let standaloneLcpEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])("largest-contentful-paint")) {
        return;
    }
    const cleanupLcpHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLcpInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry || !isValidLcpMetric(metric.value)) {
            return;
        }
        standaloneLcpValue = metric.value;
        standaloneLcpEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, pageloadSpanId)=>{
        _sendStandaloneLcpSpan(standaloneLcpValue, standaloneLcpEntry, pageloadSpanId, reportEvent);
        cleanupLcpHandler();
    });
}
function _sendStandaloneLcpSpan(lcpValue, entry, pageloadSpanId, reportEvent) {
    if (!isValidLcpMetric(lcpValue)) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Sending LCP span (".concat(lcpValue, ")"));
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0) + ((entry === null || entry === void 0 ? void 0 : entry.startTime) || 0));
    const routeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element) : "Largest contentful paint";
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.http.browser.lcp",
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: "ui.webvital.lcp",
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: 0,
        // LCP is a point-in-time metric
        // attach the pageload span id to the LCP span so that we can link them in the UI
        "sentry.pageload.span_id": pageloadSpanId,
        // describes what triggered the web vital to be reported
        "sentry.report_event": reportEvent
    };
    if (entry) {
        entry.element && (attributes["lcp.element"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element));
        entry.id && (attributes["lcp.id"] = entry.id);
        entry.url && (attributes["lcp.url"] = entry.url);
        entry.loadTime != null && (attributes["lcp.loadTime"] = entry.loadTime);
        entry.renderTime != null && (attributes["lcp.renderTime"] = entry.renderTime);
        entry.size != null && (attributes["lcp.size"] = entry.size);
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startStandaloneWebVitalSpan"])({
        name,
        transaction: routeName,
        attributes,
        startTime
    });
    if (span) {
        span.addEvent("lcp", {
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: "millisecond",
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: lcpValue
        });
        span.end(startTime);
    }
}
;
 //# sourceMappingURL=lcp.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/resourceTiming.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resourceTimingToSpanAttributes",
    ()=>resourceTimingToSpanAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
function getAbsoluteTime(time) {
    return time ? (((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || performance.timeOrigin) + time) / 1e3 : time;
}
function resourceTimingToSpanAttributes(resourceTiming) {
    var _getBrowserPerformanceAPI;
    const timingSpanData = {};
    if (resourceTiming.nextHopProtocol != void 0) {
        const { name, version } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractNetworkProtocol"])(resourceTiming.nextHopProtocol);
        timingSpanData["network.protocol.version"] = version;
        timingSpanData["network.protocol.name"] = name;
    }
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || ((_getBrowserPerformanceAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])()) === null || _getBrowserPerformanceAPI === void 0 ? void 0 : _getBrowserPerformanceAPI.timeOrigin))) {
        return timingSpanData;
    }
    return dropUndefinedKeysFromObject({
        ...timingSpanData,
        "http.request.redirect_start": getAbsoluteTime(resourceTiming.redirectStart),
        "http.request.redirect_end": getAbsoluteTime(resourceTiming.redirectEnd),
        "http.request.worker_start": getAbsoluteTime(resourceTiming.workerStart),
        "http.request.fetch_start": getAbsoluteTime(resourceTiming.fetchStart),
        "http.request.domain_lookup_start": getAbsoluteTime(resourceTiming.domainLookupStart),
        "http.request.domain_lookup_end": getAbsoluteTime(resourceTiming.domainLookupEnd),
        "http.request.connect_start": getAbsoluteTime(resourceTiming.connectStart),
        "http.request.secure_connection_start": getAbsoluteTime(resourceTiming.secureConnectionStart),
        "http.request.connection_end": getAbsoluteTime(resourceTiming.connectEnd),
        "http.request.request_start": getAbsoluteTime(resourceTiming.requestStart),
        "http.request.response_start": getAbsoluteTime(resourceTiming.responseStart),
        "http.request.response_end": getAbsoluteTime(resourceTiming.responseEnd),
        // For TTFB we actually want the relative time from timeOrigin to responseStart
        // This way, TTFB always measures the "first page load" experience.
        // see: https://web.dev/articles/ttfb#measure-resource-requests
        "http.request.time_to_first_byte": resourceTiming.responseStart != null ? resourceTiming.responseStart / 1e3 : void 0
    });
}
function dropUndefinedKeysFromObject(attrs) {
    return Object.fromEntries(Object.entries(attrs).filter((param)=>{
        let [, value] = param;
        return value != null;
    }));
}
;
 //# sourceMappingURL=resourceTiming.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/browserMetrics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_addMeasureSpans",
    ()=>_addMeasureSpans,
    "_addNavigationSpans",
    ()=>_addNavigationSpans,
    "_addResourceSpans",
    ()=>_addResourceSpans,
    "_setResourceRequestAttributes",
    ()=>_setResourceRequestAttributes,
    "addPerformanceEntries",
    ()=>addPerformanceEntries,
    "addWebVitalsToSpan",
    ()=>addWebVitalsToSpan,
    "startTrackingInteractions",
    ()=>startTrackingInteractions,
    "startTrackingLongAnimationFrames",
    ()=>startTrackingLongAnimationFrames,
    "startTrackingLongTasks",
    ()=>startTrackingLongTasks,
    "startTrackingWebVitals",
    ()=>startTrackingWebVitals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/tracing/measurement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$cls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/cls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/lcp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$resourceTiming$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/resourceTiming.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const MAX_INT_AS_BYTES = 2147483647;
let _performanceCursor = 0;
let _measurements = {};
let _lcpEntry;
let _clsEntry;
function startTrackingWebVitals(param) {
    let { recordClsStandaloneSpans, recordLcpStandaloneSpans, client } = param;
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    if (performance && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        if (performance.mark) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].performance.mark("sentry-tracing-init");
        }
        const lcpCleanupCallback = recordLcpStandaloneSpans ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLcpAsStandaloneSpan"])(client) : recordLcpStandaloneSpans === false ? _trackLCP() : void 0;
        const clsCleanupCallback = recordClsStandaloneSpans ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$cls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackClsAsStandaloneSpan"])(client) : recordClsStandaloneSpans === false ? _trackCLS() : void 0;
        const ttfbCleanupCallback = _trackTtfb();
        const fpFcpCleanupCallback = _trackFpFcp();
        return ()=>{
            ttfbCleanupCallback();
            fpFcpCleanupCallback();
            lcpCleanupCallback === null || lcpCleanupCallback === void 0 ? void 0 : lcpCleanupCallback();
            clsCleanupCallback === null || clsCleanupCallback === void 0 ? void 0 : clsCleanupCallback();
        };
    }
    return ()=>void 0;
}
function startTrackingLongTasks() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])("longtask", (param)=>{
        let { entries } = param;
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        if (!parent) {
            return;
        }
        const { op: parentOp, start_timestamp: parentStartTimestamp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(parent);
        for (const entry of entries){
            const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
            const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.duration);
            if (parentOp === "navigation" && parentStartTimestamp && startTime < parentStartTimestamp) {
                continue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(parent, startTime, startTime + duration, {
                name: "Main UI thread blocked",
                op: "ui.long-task",
                attributes: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.ui.browser.metrics"
                }
            });
        }
    });
}
function startTrackingLongAnimationFrames() {
    const observer = new PerformanceObserver((list)=>{
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        if (!parent) {
            return;
        }
        for (const entry of list.getEntries()){
            if (!entry.scripts[0]) {
                continue;
            }
            const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
            const { start_timestamp: parentStartTimestamp, op: parentOp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(parent);
            if (parentOp === "navigation" && parentStartTimestamp && startTime < parentStartTimestamp) {
                continue;
            }
            const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.duration);
            const attributes = {
                [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.ui.browser.metrics"
            };
            const initialScript = entry.scripts[0];
            const { invoker, invokerType, sourceURL, sourceFunctionName, sourceCharPosition } = initialScript;
            attributes["browser.script.invoker"] = invoker;
            attributes["browser.script.invoker_type"] = invokerType;
            if (sourceURL) {
                attributes["code.filepath"] = sourceURL;
            }
            if (sourceFunctionName) {
                attributes["code.function"] = sourceFunctionName;
            }
            if (sourceCharPosition !== -1) {
                attributes["browser.script.source_char_position"] = sourceCharPosition;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(parent, startTime, startTime + duration, {
                name: "Main UI thread blocked",
                op: "ui.long-animation-frame",
                attributes
            });
        }
    });
    observer.observe({
        type: "long-animation-frame",
        buffered: true
    });
}
function startTrackingInteractions() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])("event", (param)=>{
        let { entries } = param;
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        if (!parent) {
            return;
        }
        for (const entry of entries){
            if (entry.name === "click") {
                const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
                const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.duration);
                const spanOptions = {
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target),
                    op: "ui.interaction.".concat(entry.name),
                    startTime,
                    attributes: {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.ui.browser.metrics"
                    }
                };
                const componentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponentName"])(entry.target);
                if (componentName) {
                    spanOptions.attributes["ui.component_name"] = componentName;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(parent, startTime, startTime + duration, spanOptions);
            }
        }
    });
}
function _trackCLS() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClsInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        _measurements["cls"] = {
            value: metric.value,
            unit: ""
        };
        _clsEntry = entry;
    }, true);
}
function _trackLCP() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLcpInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLcpMetric"])(metric.value)) {
            return;
        }
        _measurements["lcp"] = {
            value: metric.value,
            unit: "millisecond"
        };
        _lcpEntry = entry;
    }, true);
}
function _trackTtfb() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTtfbInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        _measurements["ttfb"] = {
            value: metric.value,
            unit: "millisecond"
        };
    });
}
function _trackFpFcp() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])("paint", (param)=>{
        let { entries } = param;
        const firstHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        for (const entry of entries){
            const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
            if (entry.name === "first-paint" && shouldRecord) {
                _measurements["fp"] = {
                    value: entry.startTime,
                    unit: "millisecond"
                };
            }
            if (entry.name === "first-contentful-paint" && shouldRecord) {
                _measurements["fcp"] = {
                    value: entry.startTime,
                    unit: "millisecond"
                };
            }
        }
    });
}
function addPerformanceEntries(span, options) {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])();
    if (!(performance === null || performance === void 0 ? void 0 : performance.getEntries) || !origin) {
        return;
    }
    const { spanStreamingEnabled, ignorePerformanceApiSpans, ignoreResourceSpans } = options;
    const timeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(origin);
    const performanceEntries = performance.getEntries();
    const { op, start_timestamp: transactionStartTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
    performanceEntries.slice(_performanceCursor).forEach((entry)=>{
        const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.startTime);
        const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(// Inexplicably, Chrome sometimes emits a negative duration. We need to work around this.
        // There is a SO post attempting to explain this, but it leaves one with open questions: https://stackoverflow.com/questions/23191918/peformance-getentries-and-negative-duration-display
        // The way we clamp the value is probably not accurate, since we have observed this happen for things that may take a while to load, like for example the replay worker.
        // TODO: Investigate why this happens and how to properly mitigate. For now, this is a workaround to prevent transactions being dropped due to negative duration spans.
        Math.max(0, entry.duration));
        if (op === "navigation" && transactionStartTime && timeOrigin + startTime < transactionStartTime) {
            return;
        }
        switch(entry.entryType){
            case "navigation":
                {
                    _addNavigationSpans(span, entry, timeOrigin);
                    break;
                }
            case "mark":
            case "paint":
            case "measure":
                {
                    _addMeasureSpans(span, entry, startTime, duration, timeOrigin, ignorePerformanceApiSpans);
                    break;
                }
            case "resource":
                {
                    _addResourceSpans(span, entry, entry.name, startTime, duration, timeOrigin, ignoreResourceSpans);
                    break;
                }
        }
    });
    _performanceCursor = Math.max(performanceEntries.length - 1, 0);
    _trackNavigator(span, spanStreamingEnabled);
}
function addWebVitalsToSpan(span, options) {
    var _getBrowserPerformanceAPI;
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])();
    if (!((_getBrowserPerformanceAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])()) === null || _getBrowserPerformanceAPI === void 0 ? void 0 : _getBrowserPerformanceAPI.getEntries) || !origin) {
        resetWebVitalState();
        return;
    }
    const { spanStreamingEnabled, recordClsOnPageloadSpan, recordLcpOnPageloadSpan } = options;
    const timeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(origin);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span).op === "pageload") {
        _addTtfbRequestTimeToMeasurements(_measurements);
        if (spanStreamingEnabled) {
            const setAttr = (shortWebVitalName, value, customAttrName)=>{
                const attrKey = customAttrName !== null && customAttrName !== void 0 ? customAttrName : "browser.web_vital.".concat(shortWebVitalName, ".value");
                span.setAttribute(attrKey, value);
                __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Setting web vital attribute", {
                    [attrKey]: value
                }, "on pageload span");
            };
            [
                "ttfb",
                "fp",
                "fcp"
            ].forEach((measurementName)=>{
                if (_measurements[measurementName]) {
                    setAttr(measurementName, _measurements[measurementName].value);
                }
            });
            if (_measurements["ttfb.requestTime"]) {
                setAttr("ttfb.requestTime", _measurements["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
            }
        } else {
            if (!recordClsOnPageloadSpan) {
                delete _measurements.cls;
            }
            if (!recordLcpOnPageloadSpan) {
                delete _measurements.lcp;
            }
            Object.entries(_measurements).forEach((param)=>{
                let [measurementName, measurement] = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMeasurement"])(measurementName, measurement.value, measurement.unit, span);
            });
            _setWebVitalAttributes(span, options);
        }
        span.setAttribute(spanStreamingEnabled ? "browser.performance.time_origin" : "performance.timeOrigin", timeOrigin);
        span.setAttribute(spanStreamingEnabled ? "browser.performance.navigation.activation_start" : "performance.activationStart", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])());
    }
    resetWebVitalState();
}
function resetWebVitalState() {
    _lcpEntry = void 0;
    _clsEntry = void 0;
    _measurements = {};
}
function isReact19MeasureEntry(entry) {
    if ((entry === null || entry === void 0 ? void 0 : entry.entryType) !== "measure") {
        return;
    }
    try {
        return entry.detail.devtools.track === "Components \u269B";
    } catch (e) {
        return;
    }
}
function _addMeasureSpans(span, entry, startTime, duration, timeOrigin, ignorePerformanceApiSpans) {
    if (isReact19MeasureEntry(entry)) {
        return;
    }
    if ([
        "mark",
        "measure"
    ].includes(entry.entryType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(entry.name, ignorePerformanceApiSpans)) {
        return;
    }
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])(false);
    const requestTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(navEntry ? navEntry.requestStart : 0);
    const measureStartTimestamp = timeOrigin + Math.max(startTime, requestTime);
    const startTimeStamp = timeOrigin + startTime;
    const measureEndTimestamp = startTimeStamp + duration;
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.resource.browser.metrics"
    };
    if (measureStartTimestamp !== startTimeStamp) {
        attributes["sentry.browser.measure_happened_before_request"] = true;
        attributes["sentry.browser.measure_start_time"] = measureStartTimestamp;
    }
    _addDetailToSpanAttributes(attributes, entry);
    if (measureStartTimestamp <= measureEndTimestamp) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, measureStartTimestamp, measureEndTimestamp, {
            name: entry.name,
            op: entry.entryType,
            attributes
        });
    }
}
function _addDetailToSpanAttributes(attributes, performanceMeasure) {
    try {
        const detail = performanceMeasure.detail;
        if (!detail) {
            return;
        }
        if (typeof detail === "object") {
            for (const [key, value] of Object.entries(detail)){
                if (value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(value)) {
                    attributes["sentry.browser.measure.detail.".concat(key)] = value;
                } else if (value !== void 0) {
                    try {
                        attributes["sentry.browser.measure.detail.".concat(key)] = JSON.stringify(value);
                    } catch (e) {}
                }
            }
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(detail)) {
            attributes["sentry.browser.measure.detail"] = detail;
            return;
        }
        try {
            attributes["sentry.browser.measure.detail"] = JSON.stringify(detail);
        } catch (e) {}
    } catch (e) {}
}
function _addNavigationSpans(span, entry, timeOrigin) {
    [
        "unloadEvent",
        "redirect",
        "domContentLoadedEvent",
        "loadEvent",
        "connect"
    ].forEach((event)=>{
        _addPerformanceNavigationTiming(span, entry, event, timeOrigin);
    });
    _addPerformanceNavigationTiming(span, entry, "secureConnection", timeOrigin, "TLS/SSL");
    _addPerformanceNavigationTiming(span, entry, "fetch", timeOrigin, "cache");
    _addPerformanceNavigationTiming(span, entry, "domainLookup", timeOrigin, "DNS");
    _addRequest(span, entry, timeOrigin);
}
function _addPerformanceNavigationTiming(span, entry, event, timeOrigin) {
    let name = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : event;
    const eventEnd = _getEndPropertyNameForNavigationTiming(event);
    const end = entry[eventEnd];
    const start = entry["".concat(event, "Start")];
    if (!start || !end) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(start), timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(end), {
        op: "browser.".concat(name),
        name: entry.name,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.ui.browser.metrics",
            ...event === "redirect" && entry.redirectCount != null ? {
                "http.redirect_count": entry.redirectCount
            } : {}
        }
    });
}
function _getEndPropertyNameForNavigationTiming(event) {
    if (event === "secureConnection") {
        return "connectEnd";
    }
    if (event === "fetch") {
        return "domainLookupStart";
    }
    return "".concat(event, "End");
}
function _addRequest(span, entry, timeOrigin) {
    const requestStartTimestamp = timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.requestStart);
    const responseEndTimestamp = timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.responseEnd);
    const responseStartTimestamp = timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.responseStart);
    if (entry.responseEnd) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, requestStartTimestamp, responseEndTimestamp, {
            op: "browser.request",
            name: entry.name,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.ui.browser.metrics"
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, responseStartTimestamp, responseEndTimestamp, {
            op: "browser.response",
            name: entry.name,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.ui.browser.metrics"
            }
        });
    }
}
function _addResourceSpans(span, entry, resourceUrl, startTime, duration, timeOrigin, ignoredResourceSpanOps) {
    if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") {
        return;
    }
    const op = entry.initiatorType ? "resource.".concat(entry.initiatorType) : "resource.other";
    if (ignoredResourceSpanOps === null || ignoredResourceSpanOps === void 0 ? void 0 : ignoredResourceSpanOps.includes(op)) {
        return;
    }
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.resource.browser.metrics"
    };
    const parsedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(resourceUrl);
    if (parsedUrl.protocol) {
        attributes["url.scheme"] = parsedUrl.protocol.split(":").pop();
    }
    if (parsedUrl.host) {
        attributes["server.address"] = parsedUrl.host;
    }
    attributes["url.same_origin"] = resourceUrl.includes(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin);
    attributes[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URL_FULL"]] = resourceUrl;
    _setResourceRequestAttributes(entry, attributes, [
        // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStatus
        [
            "responseStatus",
            "http.response.status_code"
        ],
        [
            "transferSize",
            "http.response_transfer_size"
        ],
        [
            "encodedBodySize",
            "http.response_content_length"
        ],
        [
            "decodedBodySize",
            "http.decoded_response_content_length"
        ],
        // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus
        [
            "renderBlockingStatus",
            "resource.render_blocking_status"
        ],
        // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/deliveryType
        [
            "deliveryType",
            "http.response_delivery_type"
        ]
    ]);
    const attributesWithResourceTiming = {
        ...attributes,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$resourceTiming$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourceTimingToSpanAttributes"])(entry)
    };
    const startTimestamp = timeOrigin + startTime;
    const endTimestamp = startTimestamp + duration;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, startTimestamp, endTimestamp, {
        name: resourceUrl.replace(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin, ""),
        op,
        attributes: attributesWithResourceTiming
    });
}
function _trackNavigator(span, spanStreamingEnabled) {
    const navigator = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator;
    if (!navigator) {
        return;
    }
    const connection = navigator.connection;
    if (connection) {
        if (connection.effectiveType) {
            span.setAttribute(spanStreamingEnabled ? "network.connection.effective_type" : "effectiveConnectionType", connection.effectiveType);
        }
        if (connection.type) {
            span.setAttribute(spanStreamingEnabled ? "network.connection.type" : "connectionType", connection.type);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMeasurementValue"])(connection.rtt)) {
            if (spanStreamingEnabled) {
                span.setAttribute("network.connection.rtt", connection.rtt);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span).op === "pageload") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMeasurement"])("connection.rtt", connection.rtt, "millisecond");
            }
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMeasurementValue"])(navigator.deviceMemory)) {
        if (spanStreamingEnabled) {
            span.setAttribute("device.memory.estimated_capacity", navigator.deviceMemory);
        } else {
            span.setAttribute("deviceMemory", "".concat(navigator.deviceMemory, " GB"));
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMeasurementValue"])(navigator.hardwareConcurrency)) {
        if (spanStreamingEnabled) {
            span.setAttribute("device.processor_count", navigator.hardwareConcurrency);
        } else {
            span.setAttribute("hardwareConcurrency", String(navigator.hardwareConcurrency));
        }
    }
}
function _setWebVitalAttributes(span, options) {
    if (_lcpEntry && options.recordLcpOnPageloadSpan) {
        if (_lcpEntry.element) {
            span.setAttribute("lcp.element", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(_lcpEntry.element));
        }
        if (_lcpEntry.id) {
            span.setAttribute("lcp.id", _lcpEntry.id);
        }
        if (_lcpEntry.url) {
            span.setAttribute("lcp.url", _lcpEntry.url.trim().slice(0, 200));
        }
        if (_lcpEntry.loadTime != null) {
            span.setAttribute("lcp.loadTime", _lcpEntry.loadTime);
        }
        if (_lcpEntry.renderTime != null) {
            span.setAttribute("lcp.renderTime", _lcpEntry.renderTime);
        }
        span.setAttribute("lcp.size", _lcpEntry.size);
    }
    if ((_clsEntry === null || _clsEntry === void 0 ? void 0 : _clsEntry.sources) && options.recordClsOnPageloadSpan) {
        _clsEntry.sources.forEach((source, index)=>span.setAttribute("cls.source.".concat(index + 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(source.node)));
    }
}
function _setResourceRequestAttributes(entry, attributes, properties) {
    properties.forEach((param)=>{
        let [entryKey, attributeKey] = param;
        const entryVal = entry[entryKey];
        if (entryVal != null && (typeof entryVal === "number" && entryVal < MAX_INT_AS_BYTES || typeof entryVal === "string")) {
            attributes[attributeKey] = entryVal;
        }
    });
}
function _addTtfbRequestTimeToMeasurements(_measurements2) {
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])(false);
    if (!navEntry) {
        return;
    }
    const { responseStart, requestStart } = navEntry;
    if (requestStart <= responseStart) {
        _measurements2["ttfb.requestTime"] = {
            value: responseStart - requestStart,
            unit: "millisecond"
        };
    }
}
;
 //# sourceMappingURL=browserMetrics.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/inp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INP_ENTRY_MAP",
    ()=>INP_ENTRY_MAP,
    "MAX_PLAUSIBLE_INP_DURATION",
    ()=>MAX_PLAUSIBLE_INP_DURATION,
    "_onInp",
    ()=>_onInp,
    "_trackINP",
    ()=>_trackINP,
    "getCachedInteractionContext",
    ()=>getCachedInteractionContext,
    "registerInpInteractionListener",
    ()=>registerInpInteractionListener,
    "startTrackingINP",
    ()=>startTrackingINP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/isBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const LAST_INTERACTIONS = [];
const INTERACTIONS_SPAN_MAP = /* @__PURE__ */ new Map();
const ELEMENT_NAME_TIMESTAMP_MAP = /* @__PURE__ */ new Map();
const MAX_PLAUSIBLE_INP_DURATION = 60;
function startTrackingINP() {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    if (performance && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        const inpCallback = _trackINP();
        return ()=>{
            inpCallback();
        };
    }
    return ()=>void 0;
}
const INP_ENTRY_MAP = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};
function _trackINP() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addInpInstrumentationHandler"])(_onInp);
}
const _onInp = (param)=>{
    let { metric } = param;
    if (metric.value == void 0) {
        return;
    }
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(metric.value);
    if (duration > MAX_PLAUSIBLE_INP_DURATION) {
        return;
    }
    const entry = metric.entries.find((entry2)=>entry2.duration === metric.value && INP_ENTRY_MAP[entry2.name]);
    if (!entry) {
        return;
    }
    const { interactionId } = entry;
    const interactionType = INP_ENTRY_MAP[entry.name];
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
    const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const rootSpan = activeSpan ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan) : void 0;
    const cachedInteractionContext = interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : void 0;
    const spanToUse = (cachedInteractionContext === null || cachedInteractionContext === void 0 ? void 0 : cachedInteractionContext.span) || rootSpan;
    const routeName = spanToUse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(spanToUse).description : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = (cachedInteractionContext === null || cachedInteractionContext === void 0 ? void 0 : cachedInteractionContext.elementName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target);
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: "auto.http.browser.inp",
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: "ui.interaction.".concat(interactionType),
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: entry.duration
    };
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startStandaloneWebVitalSpan"])({
        name,
        transaction: routeName,
        attributes,
        startTime
    });
    if (span) {
        span.addEvent("inp", {
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: "millisecond",
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: metric.value
        });
        span.end(startTime + duration);
    }
};
function getCachedInteractionContext(interactionId) {
    return interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : void 0;
}
function registerInpInteractionListener() {
    const interactionEvents = Object.keys(INP_ENTRY_MAP);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        interactionEvents.forEach((eventType)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener(eventType, captureElementFromEvent, {
                capture: true,
                passive: true
            });
        });
    }
    function captureElementFromEvent(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const elementName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(target);
        const timestamp = Math.round(event.timeStamp);
        ELEMENT_NAME_TIMESTAMP_MAP.set(timestamp, elementName);
        if (ELEMENT_NAME_TIMESTAMP_MAP.size > 50) {
            const firstKey = ELEMENT_NAME_TIMESTAMP_MAP.keys().next().value;
            if (firstKey !== void 0) {
                ELEMENT_NAME_TIMESTAMP_MAP.delete(firstKey);
            }
        }
    }
    function resolveElementNameFromEntry(entry) {
        const timestamp = Math.round(entry.startTime);
        let elementName = ELEMENT_NAME_TIMESTAMP_MAP.get(timestamp);
        if (!elementName) {
            for(let offset = -5; offset <= 5; offset++){
                const nearbyName = ELEMENT_NAME_TIMESTAMP_MAP.get(timestamp + offset);
                if (nearbyName) {
                    elementName = nearbyName;
                    break;
                }
            }
        }
        return elementName || "<unknown>";
    }
    const handleEntries = (param)=>{
        let { entries } = param;
        const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        const activeRootSpan = activeSpan && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan);
        entries.forEach((entry)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPerformanceEventTiming"])(entry)) {
                return;
            }
            const interactionId = entry.interactionId;
            if (interactionId == null) {
                return;
            }
            if (INTERACTIONS_SPAN_MAP.has(interactionId)) {
                return;
            }
            const elementName = entry.target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target) : resolveElementNameFromEntry(entry);
            if (LAST_INTERACTIONS.length > 10) {
                const last = LAST_INTERACTIONS.shift();
                INTERACTIONS_SPAN_MAP.delete(last);
            }
            LAST_INTERACTIONS.push(interactionId);
            INTERACTIONS_SPAN_MAP.set(interactionId, {
                span: activeRootSpan,
                elementName
            });
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])("event", handleEntries);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])("first-input", handleEntries);
}
;
 //# sourceMappingURL=inp.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/webVitalSpans.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_emitWebVitalSpan",
    ()=>_emitWebVitalSpan,
    "_sendClsSpan",
    ()=>_sendClsSpan,
    "_sendInpSpan",
    ()=>_sendInpSpan,
    "_sendLcpSpan",
    ()=>_sendLcpSpan,
    "trackClsAsSpan",
    ()=>trackClsAsSpan,
    "trackInpAsSpan",
    ()=>trackInpAsSpan,
    "trackLcpAsSpan",
    ()=>trackLcpAsSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/htmlTreeAsString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/inp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/lcp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function _emitWebVitalSpan(options) {
    var _WINDOW_navigator, _spanToStreamedSpanJSON_attributes;
    const { name, op, origin, metricName, value, attributes: passedAttributes, parentSpan, reportEvent, startTime, endTime } = options;
    const routeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: origin,
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: op,
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: 0,
        ["browser.web_vital.".concat(metricName, ".value")]: value,
        // oxlint-disable-next-line typescript-eslint/no-deprecated
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_TRANSACTION"]]: routeName,
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_SEGMENT_NAME"]]: routeName,
        // Web vital score calculation relies on the user agent
        "user_agent.original": (_WINDOW_navigator = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator) === null || _WINDOW_navigator === void 0 ? void 0 : _WINDOW_navigator.userAgent,
        ...passedAttributes
    };
    if (parentSpan && ((_spanToStreamedSpanJSON_attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToStreamedSpanJSON"])(parentSpan).attributes) === null || _spanToStreamedSpanJSON_attributes === void 0 ? void 0 : _spanToStreamedSpanJSON_attributes[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]) === "pageload") {
        attributes["sentry.pageload.span_id"] = parentSpan.spanContext().spanId;
    }
    if (reportEvent) {
        attributes["browser.web_vital.".concat(metricName, ".report_event")] = reportEvent;
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
        name,
        attributes,
        startTime,
        // if we have a pageload span, we let the web vital span start as its parent. This ensures that
        // it is not started as a segment span, without having to manually set it to a "standalone" v2 span
        // that has `segment: false` but no actual parent span.
        parentSpan
    });
    if (span) {
        span.end(endTime !== null && endTime !== void 0 ? endTime : startTime);
    }
}
function trackLcpAsSpan(client) {
    let lcpValue = 0;
    let lcpEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])("largest-contentful-paint")) {
        return;
    }
    const cleanupLcpHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLcpInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLcpMetric"])(metric.value)) {
            return;
        }
        lcpValue = metric.value;
        lcpEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, _, pageloadSpan)=>{
        _sendLcpSpan(lcpValue, lcpEntry, pageloadSpan, reportEvent);
        cleanupLcpHandler();
    });
}
function _sendLcpSpan(lcpValue, entry, pageloadSpan, reportEvent) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLcpMetric"])(lcpValue)) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Sending LCP span (".concat(lcpValue, ")"));
    const performanceTimeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0;
    const timeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(performanceTimeOrigin);
    const endTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(performanceTimeOrigin + ((entry === null || entry === void 0 ? void 0 : entry.startTime) || 0));
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element) : "Largest contentful paint";
    const attributes = {};
    (entry === null || entry === void 0 ? void 0 : entry.element) && (attributes["browser.web_vital.lcp.element"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element));
    (entry === null || entry === void 0 ? void 0 : entry.id) && (attributes["browser.web_vital.lcp.id"] = entry.id);
    (entry === null || entry === void 0 ? void 0 : entry.url) && (attributes["browser.web_vital.lcp.url"] = entry.url);
    (entry === null || entry === void 0 ? void 0 : entry.loadTime) != null && (attributes["browser.web_vital.lcp.load_time"] = entry.loadTime);
    (entry === null || entry === void 0 ? void 0 : entry.renderTime) != null && (attributes["browser.web_vital.lcp.render_time"] = entry.renderTime);
    (entry === null || entry === void 0 ? void 0 : entry.size) != null && (attributes["browser.web_vital.lcp.size"] = entry.size);
    _emitWebVitalSpan({
        name,
        op: "ui.webvital.lcp",
        origin: "auto.http.browser.lcp",
        metricName: "lcp",
        value: lcpValue,
        attributes,
        parentSpan: pageloadSpan,
        reportEvent,
        startTime: timeOrigin,
        endTime
    });
}
function trackClsAsSpan(client) {
    let clsValue = 0;
    let clsEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])("layout-shift")) {
        return;
    }
    const cleanupClsHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClsInstrumentationHandler"])((param)=>{
        let { metric } = param;
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        clsValue = metric.value;
        clsEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, _, pageloadSpan)=>{
        _sendClsSpan(clsValue, clsEntry, pageloadSpan, reportEvent);
        cleanupClsHandler();
    });
}
function _sendClsSpan(clsValue, entry, pageloadSpan, reportEvent) {
    var _entry_sources_;
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Sending CLS span (".concat(clsValue, ")"));
    const startTime = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0) + entry.startTime) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])((_entry_sources_ = entry.sources[0]) === null || _entry_sources_ === void 0 ? void 0 : _entry_sources_.node) : "Layout shift";
    const attributes = {};
    if (entry === null || entry === void 0 ? void 0 : entry.sources) {
        entry.sources.forEach((source, index)=>{
            attributes["browser.web_vital.cls.source.".concat(index + 1)] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(source.node);
        });
    }
    _emitWebVitalSpan({
        name,
        op: "ui.webvital.cls",
        origin: "auto.http.browser.cls",
        metricName: "cls",
        value: clsValue,
        attributes,
        parentSpan: pageloadSpan,
        reportEvent,
        startTime
    });
}
function trackInpAsSpan() {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    if (!performance || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        return;
    }
    const onInp = (param)=>{
        let { metric } = param;
        if (metric.value == null) {
            return;
        }
        const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(metric.value);
        if (duration > __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAUSIBLE_INP_DURATION"]) {
            return;
        }
        const entry = metric.entries.find((e)=>e.duration === metric.value && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INP_ENTRY_MAP"][e.name]);
        if (!entry) {
            return;
        }
        _sendInpSpan(metric.value, entry);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addInpInstrumentationHandler"])(onInp);
}
function _sendInpSpan(inpValue, entry) {
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("Sending INP span (".concat(inpValue, ")"));
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(inpValue);
    const interactionType = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INP_ENTRY_MAP"][entry.name];
    const cachedContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedInteractionContext"])(entry.interactionId);
    const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const rootSpan = activeSpan ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan) : void 0;
    const spanToUse = (cachedContext === null || cachedContext === void 0 ? void 0 : cachedContext.span) || rootSpan;
    const routeName = spanToUse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToStreamedSpanJSON"])(spanToUse).name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = (cachedContext === null || cachedContext === void 0 ? void 0 : cachedContext.elementName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$htmlTreeAsString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target);
    _emitWebVitalSpan({
        name,
        op: "ui.interaction.".concat(interactionType),
        origin: "auto.http.browser.inp",
        metricName: "inp",
        value: inpValue,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: entry.duration,
            // oxlint-disable-next-line typescript-eslint/no-deprecated
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_TRANSACTION"]]: routeName,
            [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$conventions$40$0$2e$16$2e$0$2f$node_modules$2f40$sentry$2f$conventions$2f$dist$2f$attributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_SEGMENT_NAME"]]: routeName
        },
        startTime,
        endTime: startTime + duration,
        parentSpan: spanToUse
    });
}
;
 //# sourceMappingURL=webVitalSpans.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/networkUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ORIGINAL_REQ_BODY",
    ()=>ORIGINAL_REQ_BODY,
    "getBodyString",
    ()=>getBodyString,
    "getFetchRequestArgBody",
    ()=>getFetchRequestArgBody,
    "parseXhrResponseHeaders",
    ()=>parseXhrResponseHeaders,
    "serializeFormData",
    ()=>serializeFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
;
;
const ORIGINAL_REQ_BODY = /* @__PURE__ */ Symbol.for("sentry__originalRequestBody");
function serializeFormData(formData) {
    return new URLSearchParams(formData).toString();
}
function getBodyString(body) {
    let _debug = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"];
    try {
        if (typeof body === "string") {
            return [
                body
            ];
        }
        if (body instanceof URLSearchParams) {
            return [
                body.toString()
            ];
        }
        if (body instanceof FormData) {
            return [
                serializeFormData(body)
            ];
        }
        if (!body) {
            return [
                void 0
            ];
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && _debug.error(error, "Failed to serialize body", body);
        return [
            void 0,
            "BODY_PARSE_ERROR"
        ];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && _debug.log("Skipping network body because of body type", body);
    return [
        void 0,
        "UNPARSEABLE_BODY_TYPE"
    ];
}
function getFetchRequestArgBody() {
    let fetchArgs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (fetchArgs.length >= 2 && fetchArgs[1] && typeof fetchArgs[1] === "object" && "body" in fetchArgs[1]) {
        return fetchArgs[1].body;
    }
    if (fetchArgs.length >= 1 && fetchArgs[0] instanceof Request) {
        const request = fetchArgs[0];
        const originalBody = request[ORIGINAL_REQ_BODY];
        if (originalBody !== void 0) {
            return originalBody;
        }
        return void 0;
    }
    return void 0;
}
function parseXhrResponseHeaders(xhr) {
    let headers;
    try {
        headers = xhr.getAllResponseHeaders();
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(error, "Failed to get xhr response headers", xhr);
        return {};
    }
    if (!headers) {
        return {};
    }
    return headers.split("\r\n").reduce((acc, line)=>{
        const [key, value] = line.split(": ");
        if (value) {
            acc[key.toLowerCase()] = value;
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=networkUtils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/instrument/location.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAbsoluteUrl",
    ()=>getAbsoluteUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+browser-utils@10.73.0/node_modules/@sentry/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
function getAbsoluteUrl(urlOrPath) {
    try {
        const url = new URL(urlOrPath, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$2d$utils$40$10$2e$73$2e$0$2f$node_modules$2f40$sentry$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin);
        return url.toString();
    } catch (e) {
        return urlOrPath;
    }
}
;
 //# sourceMappingURL=location.js.map
}),
]);

//# sourceMappingURL=6c7ea_%40sentry_browser-utils_build_esm_9758afb9._.js.map