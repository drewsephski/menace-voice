module.exports = [
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/instrumentation.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

;
globalThis["__SENTRY_SERVER_MODULES__"] = {
    "@calcom/embed-react": "^1.5.3",
    "@dagrejs/dagre": "^1.1.4",
    "@floating-ui/react-dom": "^2.1.9",
    "@next/third-parties": "^16.3.1",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-select": "^2.2.2",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@sentry/nextjs": "^10.63.0",
    "@stackframe/stack": "^2.8.80",
    "@xyflow/react": "^12.10.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^13.2.0",
    "lucide-react": "^0.505.0",
    "next": "^15.3.3",
    "next-themes": "^0.4.6",
    "pino": "^9.9.2",
    "pino-pretty": "^13.1.1",
    "posthog-js": "^1.388.1",
    "posthog-node": "^5.38.0",
    "react": "^19.1.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.1.0",
    "react-hook-form": "^7.56.4",
    "react-international-phone": "^4.5.0",
    "react-markdown": "^10.1.0",
    "react-timezone-select": "^3.2.8",
    "recharts": "^3.1.2",
    "remark-gfm": "^4.0.1",
    "shadcn-ui": "^0.9.5",
    "sonner": "^2.0.5",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "zundo": "^2.3.0",
    "zustand": "^5.0.8",
    "@eslint/eslintrc": "^3",
    "@hey-api/openapi-ts": "^0.99.0",
    "@next/env": "^15.5.25",
    "@tailwindcss/postcss": "^4",
    "@testing-library/react": "^16.3.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/source-map-support": "^0.5.10",
    "@vitejs/plugin-react": "^6.0.3",
    "cross-env": "^7.0.3",
    "eslint": "^9",
    "eslint-config-next": "^15.3.3",
    "eslint-plugin-simple-import-sort": "^12.1.1",
    "eslint-plugin-unused-imports": "^4.1.4",
    "jsdom": "^29.1.1",
    "source-map-support": "^0.5.21",
    "tailwindcss": "^4",
    "typescript": "^5",
    "vitest": "^4.1.10"
};
globalThis["_sentryNextJsVersion"] = "15.5.25";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const PACKAGE_NAME = "@sentry/instrumentation-fastify";
const SUPPORTED_VERSIONS = ">=3.21.0 <6";
const ORIGIN = "auto.http.otel.fastify";
const HOOK_OP = "hook.fastify";
const REQUEST_HANDLER_OP = "request_handler.fastify";
const FASTIFY_HOOKS = [
    "onRequest",
    "preParsing",
    "preValidation",
    "preHandler",
    "preSerialization",
    "onSend",
    "onResponse",
    "onError"
];
const ATTRIBUTE_HOOK_NAME = "hook.name";
const ATTRIBUTE_FASTIFY_TYPE = "fastify.type";
const ATTRIBUTE_HOOK_CALLBACK_NAME = "hook.callback.name";
const ATTRIBUTE_FASTIFY_ROOT = "fastify.root";
const HOOK_TYPE_ROUTE = "route-hook";
const HOOK_TYPE_INSTANCE = "hook";
const HOOK_TYPE_HANDLER = "request-handler";
const ANONYMOUS_FUNCTION_NAME = "anonymous";
const kRequestSpan = /* @__PURE__ */ Symbol("sentry fastify request span");
const kAddHookOriginal = /* @__PURE__ */ Symbol("sentry fastify addHook original");
const kSetNotFoundOriginal = /* @__PURE__ */ Symbol("sentry fastify setNotFoundHandler original");
function getRequestRouteUrl(request) {
    return request.routeOptions?.url ?? request.routerPath;
}
function getRequestRouteConfig(request) {
    return request.routeOptions?.config ?? request.routeConfig;
}
function isFastifyRequest(arg) {
    return core.isObjectLike(arg) && !!arg.method && !!arg.url && (!!arg.routeOptions || "routerPath" in arg);
}
function fastifyOtelPlugin(instance, _opts, done) {
    instance.decorate(kAddHookOriginal, instance.addHook);
    instance.decorate(kSetNotFoundOriginal, instance.setNotFoundHandler);
    instance.decorateRequest("opentelemetry", function opentelemetry() {
        return {
            span: this[kRequestSpan]
        };
    });
    instance.decorateRequest(kRequestSpan, null);
    instance.addHook("onRoute", otelWireRoute);
    instance.addHook("onRequest", startRequestSpanHook);
    instance.addHook("onResponse", finalizeNotFoundSpanHook);
    instance.addHook = addHookPatched;
    instance.setNotFoundHandler = setNotFoundHandlerPatched;
    done();
}
const pluginSymbols = fastifyOtelPlugin;
pluginSymbols[/* @__PURE__ */ Symbol.for("skip-override")] = true;
pluginSymbols[/* @__PURE__ */ Symbol.for("fastify.display-name")] = PACKAGE_NAME;
pluginSymbols[/* @__PURE__ */ Symbol.for("plugin-meta")] = {
    fastify: SUPPORTED_VERSIONS,
    name: PACKAGE_NAME
};
function otelWireRoute(routeOptions) {
    if (routeOptions.config?.otel === false) {
        return;
    }
    for (const hook of FASTIFY_HOOKS){
        const handlerLike = routeOptions[hook];
        if (typeof handlerLike === "function") {
            routeOptions[hook] = handlerWrapper(handlerLike, hook, routeHookAttributes(this.pluginName, hook, handlerLike, routeOptions.url));
        } else if (Array.isArray(handlerLike)) {
            routeOptions[hook] = handlerLike.map((handler)=>handlerWrapper(handler, hook, routeHookAttributes(this.pluginName, hook, handler, routeOptions.url)));
        }
    }
    routeOptions.onSend = appendRouteHook(routeOptions.onSend, finalizeResponseSpanHook);
    routeOptions.onError = appendRouteHook(routeOptions.onError, recordErrorInSpanHook);
    routeOptions.handler = handlerWrapper(routeOptions.handler, "handler", {
        [ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - route-handler`,
        [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_HANDLER,
        [attributes.HTTP_ROUTE]: routeOptions.url,
        [ATTRIBUTE_HOOK_CALLBACK_NAME]: routeOptions.handler.name.length > 0 ? routeOptions.handler.name : ANONYMOUS_FUNCTION_NAME
    });
}
function routeHookAttributes(pluginName, hook, handler, url) {
    return {
        [ATTRIBUTE_HOOK_NAME]: `${pluginName} - route -> ${hook}`,
        [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_ROUTE,
        [attributes.HTTP_ROUTE]: url,
        [ATTRIBUTE_HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
    };
}
function appendRouteHook(existing, hook) {
    if (existing == null) {
        return hook;
    }
    return Array.isArray(existing) ? [
        ...existing,
        hook
    ] : [
        existing,
        hook
    ];
}
function startRequestSpanHook(request, _reply, hookDone) {
    if (getRequestRouteConfig(request)?.otel === false) {
        return hookDone();
    }
    const attributes$1 = {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
        [ATTRIBUTE_FASTIFY_ROOT]: PACKAGE_NAME,
        [attributes.HTTP_REQUEST_METHOD]: request.method,
        [attributes.URL_PATH]: request.url
    };
    const route = getRequestRouteUrl(request);
    if (route != null) {
        attributes$1[attributes.HTTP_ROUTE] = route;
        const activeSpan = core.getActiveSpan();
        const rootSpan = activeSpan && core.getRootSpan(activeSpan);
        if (rootSpan && core.spanToJSON(rootSpan).data[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "http.server") {
            rootSpan.setAttribute(attributes.HTTP_ROUTE, route);
        }
    }
    const requestSpan = core.startInactiveSpan({
        name: "request",
        op: REQUEST_HANDLER_OP,
        attributes: attributes$1
    });
    request[kRequestSpan] = requestSpan;
    core.withActiveSpan(requestSpan, ()=>{
        hookDone();
    });
}
function finalizeNotFoundSpanHook(request, reply, hookDone) {
    const span = request[kRequestSpan];
    if (span != null) {
        span.setAttributes({
            [attributes.HTTP_RESPONSE_STATUS_CODE]: reply.statusCode
        });
        span.end();
    }
    request[kRequestSpan] = null;
    hookDone();
}
function finalizeResponseSpanHook(request, reply, payload, hookDone) {
    const span = request[kRequestSpan];
    if (span != null) {
        if (reply.statusCode >= 500) {
            span.setStatus({
                code: core.SPAN_STATUS_ERROR
            });
        }
        span.setAttributes({
            [attributes.HTTP_RESPONSE_STATUS_CODE]: reply.statusCode
        });
        span.end();
    }
    request[kRequestSpan] = null;
    hookDone(null, payload);
}
function recordErrorInSpanHook(request, _reply, error, hookDone) {
    const span = request[kRequestSpan];
    if (span != null) {
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: error.message
        });
    }
    hookDone();
}
function addHookPatched(name, hook) {
    const addHookOriginal = this[kAddHookOriginal];
    if (FASTIFY_HOOKS.includes(name)) {
        return addHookOriginal.call(this, name, handlerWrapper(hook, name, {
            [ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - ${name}`,
            [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
            [ATTRIBUTE_HOOK_CALLBACK_NAME]: hook.name?.length > 0 ? hook.name : ANONYMOUS_FUNCTION_NAME
        }));
    }
    return addHookOriginal.call(this, name, hook);
}
function setNotFoundHandlerPatched(hooks, handler) {
    const setNotFoundHandlerOriginal = this[kSetNotFoundOriginal];
    if (typeof hooks === "function") {
        setNotFoundHandlerOriginal.call(this, handlerWrapper(hooks, "notFoundHandler", {
            [ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler`,
            [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
            [ATTRIBUTE_HOOK_CALLBACK_NAME]: hooks.name?.length > 0 ? hooks.name : ANONYMOUS_FUNCTION_NAME
        }));
        return;
    }
    if (hooks.preValidation != null) {
        hooks.preValidation = handlerWrapper(hooks.preValidation, "notFoundHandler - preValidation", {
            [ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler - preValidation`,
            [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
            [ATTRIBUTE_HOOK_CALLBACK_NAME]: hooks.preValidation.name?.length > 0 ? hooks.preValidation.name : ANONYMOUS_FUNCTION_NAME
        });
    }
    if (hooks.preHandler != null) {
        hooks.preHandler = handlerWrapper(hooks.preHandler, "notFoundHandler - preHandler", {
            [ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler - preHandler`,
            [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
            [ATTRIBUTE_HOOK_CALLBACK_NAME]: hooks.preHandler.name?.length > 0 ? hooks.preHandler.name : ANONYMOUS_FUNCTION_NAME
        });
    }
    if (handler == null) {
        setNotFoundHandlerOriginal.call(this, hooks);
        return;
    }
    setNotFoundHandlerOriginal.call(this, hooks, handlerWrapper(handler, "notFoundHandler", {
        [ATTRIBUTE_HOOK_NAME]: `${this.pluginName} - not-found-handler`,
        [ATTRIBUTE_FASTIFY_TYPE]: HOOK_TYPE_INSTANCE,
        [ATTRIBUTE_HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
    }));
}
function getRequestFromArgs(args) {
    for (const arg of args){
        if (isFastifyRequest(arg)) {
            return arg;
        }
    }
    return null;
}
function handlerWrapper(handler, hookName, spanAttributes = {}) {
    return function handlerWrapped(...args) {
        const request = getRequestFromArgs(args);
        if (request === null || getRequestRouteConfig(request)?.otel === false) {
            return handler.call(this, ...args);
        }
        const parentSpan = request[kRequestSpan] ?? void 0;
        const handlerName = handler.name?.length > 0 ? handler.name : this.pluginName ?? ANONYMOUS_FUNCTION_NAME;
        const hookType = spanAttributes[ATTRIBUTE_FASTIFY_TYPE];
        const op = hookType === HOOK_TYPE_INSTANCE ? HOOK_OP : hookType === HOOK_TYPE_HANDLER ? REQUEST_HANDLER_OP : void 0;
        const name = op ? stripFastifyPrefix(spanAttributes[ATTRIBUTE_HOOK_NAME]) : `${hookName} - ${handlerName}`;
        return core.startSpan({
            name,
            op,
            attributes: {
                ...spanAttributes,
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
            },
            parentSpan
        }, ()=>handler.call(this, ...args));
    };
}
function stripFastifyPrefix(hookName = "") {
    return hookName.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "").replace(/^@sentry\/instrumentation-fastify -> /, "");
}
function instrumentOnRequest(fastify) {
    fastify.addHook("onRequest", async (request, _reply)=>{
        const routeName = getRequestRouteUrl(request);
        const method = request.method || "GET";
        core.getIsolationScope().setTransactionName(`${method} ${routeName}`);
    });
}
let _isInstrumented = false;
const instrumentFastify = Object.assign(function instrumentFastify2() {
    if (_isInstrumented) {
        return;
    }
    _isInstrumented = true;
    diagnosticsChannel__namespace.subscribe("fastify.initialization", (message)=>{
        const fastifyInstance = message.fastify;
        fastifyInstance?.register(fastifyOtelPlugin).after((err)=>{
            if (err) {
                debugBuild.DEBUG_BUILD && core.debug.error("Failed to setup Fastify instrumentation", err);
            } else if (fastifyInstance) {
                instrumentOnRequest(fastifyInstance);
            }
        });
    });
}, {
    id: "Fastify.v5"
});
exports.instrumentFastify = instrumentFastify; //# sourceMappingURL=instrumentation.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const INTEGRATION_NAME = "Fastify";
function defaultShouldHandleError(_error, _request, reply) {
    const statusCode = reply.statusCode;
    return statusCode >= 500 || statusCode <= 299;
}
exports.INTEGRATION_NAME = INTEGRATION_NAME;
exports.defaultShouldHandleError = defaultShouldHandleError; //# sourceMappingURL=utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/errors.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const utils = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/utils.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
function getFastifyIntegration() {
    const client = core.getClient();
    return client?.getIntegrationByName(utils.INTEGRATION_NAME);
}
function subscribeToFastifyErrorChannel() {
    diagnosticsChannel__namespace.subscribe("tracing:fastify.request.handler:error", (message)=>{
        const { error, request, reply } = message;
        handleFastifyError.call(handleFastifyError, error, request, reply, "diagnostics-channel");
    });
}
function handleFastifyError(error, request, reply, handlerOrigin) {
    const shouldHandleError = getFastifyIntegration()?.getShouldHandleError() || utils.defaultShouldHandleError;
    if (handlerOrigin === "diagnostics-channel") {
        this.diagnosticsChannelExists = true;
    }
    if (this.diagnosticsChannelExists && handlerOrigin === "onError-hook") {
        debugBuild.DEBUG_BUILD && core.debug.warn("Fastify error handler was already registered via diagnostics channel.", "You can safely remove `setupFastifyErrorHandler` call and set `shouldHandleError` on the integration options.");
        return;
    }
    if (shouldHandleError(error, request, reply)) {
        core.captureException(error, {
            mechanism: {
                handled: false,
                type: "auto.function.fastify"
            }
        });
    }
}
exports.handleFastifyError = handleFastifyError;
exports.subscribeToFastifyErrorChannel = subscribeToFastifyErrorChannel; //# sourceMappingURL=errors.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/instrumentation.js [instrumentation] (ecmascript)");
const utils = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/utils.js [instrumentation] (ecmascript)");
const errors = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/fastify/errors.js [instrumentation] (ecmascript)");
const _fastifyIntegration = ({ shouldHandleError } = {})=>{
    let _shouldHandleError;
    return {
        name: utils.INTEGRATION_NAME,
        setupOnce () {
            _shouldHandleError = shouldHandleError || utils.defaultShouldHandleError;
            errors.subscribeToFastifyErrorChannel();
            instrumentation.instrumentFastify();
        },
        getShouldHandleError () {
            return _shouldHandleError;
        },
        setShouldHandleError (shouldHandleError2) {
            _shouldHandleError = shouldHandleError2;
        }
    };
};
const fastifyIntegration = core.defineIntegration(_fastifyIntegration);
const instrumentFastify = instrumentation.instrumentFastify;
const handleFastifyError = errors.handleFastifyError;
exports.fastifyIntegration = fastifyIntegration;
exports.handleFastifyError = handleFastifyError;
exports.instrumentFastify = instrumentFastify; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/amqplib.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Amqplib";
const PUBLISHER_ORIGIN = "auto.amqplib.orchestrion.publisher";
const CONSUMER_ORIGIN = "auto.amqplib.orchestrion.consumer";
const ATTR_MESSAGING_OPERATION = "messaging.operation";
const ATTR_MESSAGING_DESTINATION = "messaging.destination";
const ATTR_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
const ATTR_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
const ATTR_MESSAGING_PROTOCOL = "messaging.protocol";
const ATTR_MESSAGING_PROTOCOL_VERSION_LEGACY = "messaging.protocol_version";
const ATTR_MESSAGING_URL = "messaging.url";
const ATTR_MESSAGING_MESSAGE_ID = "messaging.message_id";
const ATTR_MESSAGING_CONVERSATION_ID_LEGACY = "messaging.conversation_id";
const ATTR_MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY = "messaging.rabbitmq.destination.routing_key";
const ATTR_MESSAGING_CONVERSATION_ID = "messaging.message.conversation_id";
const MESSAGING_DESTINATION_KIND_VALUE_TOPIC = "topic";
const MESSAGING_OPERATION_VALUE_PROCESS = "process";
const MESSAGING_OPERATION_VALUE_SEND = "send";
const CONSUME_TIMEOUT_MS = 1e3 * 60;
const END_OP = {
    Ack: "ack",
    AckAll: "ackAll",
    Reject: "reject",
    Nack: "nack",
    NackAll: "nackAll",
    ChannelClosed: "channel closed",
    ChannelError: "channel error",
    InstrumentationTimeout: "instrumentation timeout"
};
const MESSAGE_STORED_SPAN = /* @__PURE__ */ Symbol("sentry.amqplib.message.stored-span");
const CHANNEL_SPANS_NOT_ENDED = /* @__PURE__ */ Symbol("sentry.amqplib.channel.spans-not-ended");
const CHANNEL_CONSUME_TIMEOUT_TIMER = /* @__PURE__ */ Symbol("sentry.amqplib.channel.consume-timeout-timer");
const CHANNEL_CONSUMER_INFO = /* @__PURE__ */ Symbol("sentry.amqplib.channel.consumer-info");
const CHANNEL_IS_CONFIRM_PUBLISHING = /* @__PURE__ */ Symbol("sentry.amqplib.channel.is-confirm-publishing");
const CONNECTION_ATTRIBUTES = /* @__PURE__ */ Symbol("sentry.amqplib.connection.attributes");
const NOOP = ()=>{};
let subscribed = false;
const _amqplibChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            debugBuild.DEBUG_BUILD && core.debug.log("[orchestrion:amqplib] subscribing to amqplib tracing channels");
            core.waitForTracingChannelBinding(()=>{
                subscribeConnect();
                subscribePublish();
                subscribeConfirmPublish();
                subscribeConsume();
                subscribeDispatch();
                subscribeSettle();
            });
        }
    };
};
function subscribePublish() {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_PUBLISH), (data)=>{
        if (data.self?.[CHANNEL_IS_CONFIRM_PUBLISHING]) {
            return void 0;
        }
        return startPublishSpan(data);
    });
}
function subscribeConfirmPublish() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_CONFIRM_PUBLISH);
    tracingChannel.bindTracingChannelToSpan(channel, (data)=>{
        if (data.self) {
            data.self[CHANNEL_IS_CONFIRM_PUBLISHING] = true;
        }
        return startPublishSpan(data);
    });
    channel.end.subscribe((message)=>{
        const self = message.self;
        if (self) {
            self[CHANNEL_IS_CONFIRM_PUBLISHING] = false;
        }
    });
}
function subscribeConsume() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_CONSUME);
    channel.start.subscribe(NOOP);
    channel.asyncEnd.subscribe((message)=>{
        const data = message;
        const consumerChannel = data.self;
        const result = data.result;
        const consumerTag = result?.consumerTag;
        if (!consumerChannel || !consumerTag) {
            return;
        }
        ensureChannelState(consumerChannel);
        const queueArg = data.arguments[0];
        const queue = typeof queueArg === "string" ? queueArg : "<unknown>";
        const options = data.arguments[2];
        consumerChannel[CHANNEL_CONSUMER_INFO]?.set(consumerTag, {
            noAck: !!options?.noAck,
            queue
        });
    });
}
function subscribeDispatch() {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_DISPATCH), (data)=>{
        const channel = data.self;
        const fields = data.arguments[0];
        const msg = data.arguments[1];
        if (!channel || !msg) {
            return void 0;
        }
        ensureChannelState(channel);
        const info = fields?.consumerTag ? channel[CHANNEL_CONSUMER_INFO]?.get(fields.consumerTag) : void 0;
        const queue = info?.queue ?? msg.fields?.routingKey ?? "<unknown>";
        const noAck = info?.noAck ?? false;
        const headers = msg.properties?.headers;
        const sentryTrace = getHeaderAsString(headers, "sentry-trace");
        const baggage = getHeaderAsString(headers, "baggage");
        const span = core.continueTrace({
            sentryTrace,
            baggage
        }, ()=>startConsumeSpan(queue, msg, channel));
        if (!noAck) {
            channel[CHANNEL_SPANS_NOT_ENDED]?.push({
                msg,
                timeOfConsume: core.timestampInSeconds()
            });
            msg[MESSAGE_STORED_SPAN] = span;
        }
        data._sentryNoAck = noAck;
        return span;
    }, {
        // Manual-ack consumers: the span outlives the dispatch call and is ended by ack/nack/reject
        // (or timeout/close), so take ownership and don't let the helper end it here. noAck consumers
        // have no settle call, so let the helper end the span when dispatch returns.
        deferSpanEnd ({ data }) {
            return !data._sentryNoAck;
        }
    });
}
function subscribeSettle() {
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_ACK).start.subscribe((message)=>handleAck(message, false, END_OP.Ack));
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_NACK).start.subscribe((message)=>handleAck(message, true, END_OP.Nack));
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_REJECT).start.subscribe((message)=>handleAck(message, true, END_OP.Reject));
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_ACK_ALL).start.subscribe((message)=>{
        const data = message;
        if (data.self) {
            endAllSpansOnChannel(data.self, false, END_OP.AckAll, void 0);
        }
    });
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_NACK_ALL).start.subscribe((message)=>{
        const data = message;
        if (data.self) {
            endAllSpansOnChannel(data.self, true, END_OP.NackAll, data.arguments[0]);
        }
    });
}
function subscribeConnect() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.AMQPLIB_CONNECT);
    channel.start.subscribe(NOOP);
    channel.asyncEnd.subscribe((message)=>{
        const data = message;
        const conn = data.result;
        if (!conn || typeof conn !== "object") {
            return;
        }
        conn[CONNECTION_ATTRIBUTES] = {
            ...getConnectionAttributesFromUrl(data.arguments?.[0]),
            ...getConnectionAttributesFromServer(conn)
        };
    });
}
function handleAck(data, isRejected, endOperation) {
    const channel = data.self;
    if (!channel) {
        return;
    }
    const message = data.arguments[0];
    if (!message) {
        return;
    }
    const allUpToOrRequeue = data.arguments[1];
    const requeue = data.arguments[2];
    const requeueResolved = endOperation === END_OP.Reject ? allUpToOrRequeue : requeue;
    const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
    const msgIndex = spansNotEnded.findIndex((msgDetails)=>msgDetails.msg === message);
    if (msgIndex < 0) {
        endConsumerSpan(message, isRejected, endOperation, requeueResolved);
    } else if (endOperation !== END_OP.Reject && allUpToOrRequeue) {
        for(let i = 0; i <= msgIndex; i++){
            endConsumerSpan(spansNotEnded[i].msg, isRejected, endOperation, requeueResolved);
        }
        spansNotEnded.splice(0, msgIndex + 1);
    } else {
        endConsumerSpan(message, isRejected, endOperation, requeueResolved);
        spansNotEnded.splice(msgIndex, 1);
    }
}
function ensureChannelState(channel) {
    if (Object.prototype.hasOwnProperty.call(channel, CHANNEL_SPANS_NOT_ENDED)) {
        return;
    }
    channel[CHANNEL_SPANS_NOT_ENDED] = [];
    channel[CHANNEL_CONSUMER_INFO] = /* @__PURE__ */ new Map();
    const timer = setInterval(()=>checkConsumeTimeoutOnChannel(channel), CONSUME_TIMEOUT_MS);
    timer.unref?.();
    channel[CHANNEL_CONSUME_TIMEOUT_TIMER] = timer;
    if (typeof channel.on === "function") {
        channel.on("close", ()=>{
            endAllSpansOnChannel(channel, true, END_OP.ChannelClosed, void 0);
            clearConsumeTimeoutTimer(channel);
        });
        channel.on("error", ()=>{
            endAllSpansOnChannel(channel, true, END_OP.ChannelError, void 0);
            clearConsumeTimeoutTimer(channel);
        });
    }
}
function clearConsumeTimeoutTimer(channel) {
    const activeTimer = channel[CHANNEL_CONSUME_TIMEOUT_TIMER];
    if (activeTimer) {
        clearInterval(activeTimer);
        channel[CHANNEL_CONSUME_TIMEOUT_TIMER] = void 0;
    }
}
function checkConsumeTimeoutOnChannel(channel) {
    const currentTime = core.timestampInSeconds();
    const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
    let i;
    for(i = 0; i < spansNotEnded.length; i++){
        const currMessage = spansNotEnded[i];
        const timeFromConsumeMs = (currentTime - currMessage.timeOfConsume) * 1e3;
        if (timeFromConsumeMs < CONSUME_TIMEOUT_MS) {
            break;
        }
        endConsumerSpan(currMessage.msg, null, END_OP.InstrumentationTimeout, true);
    }
    spansNotEnded.splice(0, i);
}
function endAllSpansOnChannel(channel, isRejected, operation, requeue) {
    const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
    spansNotEnded.forEach((msgDetails)=>{
        endConsumerSpan(msgDetails.msg, isRejected, operation, requeue);
    });
    channel[CHANNEL_SPANS_NOT_ENDED] = [];
}
function endConsumerSpan(message, isRejected, operation, requeue) {
    const storedSpan = message[MESSAGE_STORED_SPAN];
    if (!storedSpan) {
        return;
    }
    if (isRejected !== false) {
        storedSpan.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: operation !== END_OP.ChannelClosed && operation !== END_OP.ChannelError ? `${operation} called on message${requeue === true ? " with requeue" : requeue === false ? " without requeue" : ""}` : operation
        });
    }
    storedSpan.end();
    message[MESSAGE_STORED_SPAN] = void 0;
}
function startPublishSpan(data) {
    const exchangeArg = data.arguments[0];
    const routingKeyArg = data.arguments[1];
    const exchange = typeof exchangeArg === "string" ? exchangeArg : "";
    const routingKey = typeof routingKeyArg === "string" ? routingKeyArg : "";
    let options = data.arguments[3];
    const span = core.startInactiveSpan({
        name: `publish ${normalizeExchange(exchange)}`,
        op: "message",
        kind: core.SPAN_KIND.PRODUCER,
        attributes: {
            ...getStoredConnectionAttributes(data.self),
            [ATTR_MESSAGING_DESTINATION]: exchange,
            // TODO(v11) remove this attribute
            [attributes.MESSAGING_DESTINATION_NAME]: exchange,
            [ATTR_MESSAGING_DESTINATION_KIND]: MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
            // TODO(v11) remove this attribute
            [ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: routingKey,
            // TODO(v11) remove this attribute
            [ATTR_MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY]: routingKey,
            [attributes.MESSAGING_OPERATION_TYPE]: MESSAGING_OPERATION_VALUE_SEND,
            [ATTR_MESSAGING_MESSAGE_ID]: options?.messageId,
            // todo(v11) remove this attribute
            [attributes.MESSAGING_MESSAGE_ID]: options?.messageId,
            [ATTR_MESSAGING_CONVERSATION_ID_LEGACY]: options?.correlationId,
            // todo(v11) remove this attribute
            [ATTR_MESSAGING_CONVERSATION_ID]: options?.correlationId,
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: PUBLISHER_ORIGIN
        }
    });
    if (!options || typeof options !== "object") {
        options = {};
        data.arguments[3] = options;
    }
    const headers = options.headers && typeof options.headers === "object" ? options.headers : options.headers = {};
    const traceData = core.getTraceData({
        span
    });
    if (traceData["sentry-trace"]) {
        headers["sentry-trace"] = traceData["sentry-trace"];
    }
    if (traceData.baggage) {
        headers["baggage"] = traceData.baggage;
    }
    return span;
}
function startConsumeSpan(queue, msg, channel) {
    return core.startInactiveSpan({
        name: `${queue} process`,
        op: "message",
        kind: core.SPAN_KIND.CONSUMER,
        attributes: {
            ...getStoredConnectionAttributes(channel),
            [ATTR_MESSAGING_DESTINATION]: msg.fields?.exchange,
            // TODO(v11) remove this attribute
            [attributes.MESSAGING_DESTINATION_NAME]: msg.fields?.exchange,
            [ATTR_MESSAGING_DESTINATION_KIND]: MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
            // TODO(v11) remove this attribute
            [ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: msg.fields?.routingKey,
            // TODO(v11) remove this attribute
            [ATTR_MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY]: msg.fields?.routingKey,
            [ATTR_MESSAGING_OPERATION]: MESSAGING_OPERATION_VALUE_PROCESS,
            // TODO(v11) remove this attribute
            [attributes.MESSAGING_OPERATION_TYPE]: MESSAGING_OPERATION_VALUE_PROCESS,
            [ATTR_MESSAGING_MESSAGE_ID]: msg.properties?.messageId,
            // todo(v11) remove this attribute
            [attributes.MESSAGING_MESSAGE_ID]: msg.properties?.messageId,
            [ATTR_MESSAGING_CONVERSATION_ID_LEGACY]: msg.properties?.correlationId,
            // todo(v11) remove this attribute
            [ATTR_MESSAGING_CONVERSATION_ID]: msg.properties?.correlationId,
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: CONSUMER_ORIGIN
        }
    });
}
function getStoredConnectionAttributes(channel) {
    const connection = channel?.connection;
    const stored = connection?.[CONNECTION_ATTRIBUTES];
    if (stored) {
        return stored;
    }
    const product = connection?.serverProperties?.product ?? connection?.connection?.serverProperties?.product;
    if (typeof product === "string" && product) {
        return {
            [attributes.MESSAGING_SYSTEM]: product.toLowerCase()
        };
    }
    return {};
}
function getConnectionAttributesFromServer(conn) {
    const product = conn.serverProperties?.product ?? conn.connection?.serverProperties?.product;
    if (typeof product === "string" && product) {
        return {
            [attributes.MESSAGING_SYSTEM]: product.toLowerCase()
        };
    }
    return {};
}
function getConnectionAttributesFromUrl(url) {
    const attributes$1 = {
        // The only protocol supported by the instrumented library.
        [ATTR_MESSAGING_PROTOCOL_VERSION_LEGACY]: "0.9.1",
        // TODO(v11): remove this attribute
        [attributes.NETWORK_PROTOCOL_VERSION]: "0.9.1"
    };
    const resolvedUrl = url || "amqp://localhost";
    if (typeof resolvedUrl === "object") {
        const connectOptions = resolvedUrl;
        const protocol = getProtocol(connectOptions.protocol);
        const hostname = getHostname(connectOptions.hostname);
        const port = getPort(connectOptions.port, protocol);
        attributes$1[ATTR_MESSAGING_PROTOCOL] = protocol;
        attributes$1[attributes.NETWORK_PROTOCOL_NAME] = protocol;
        attributes$1[attributes.SERVER_ADDRESS] = hostname;
        attributes$1[attributes.SERVER_PORT] = port;
        attributes$1[attributes.NET_PEER_NAME] = hostname;
        attributes$1[attributes.NET_PEER_PORT] = port;
    } else if (typeof resolvedUrl === "string") {
        const censoredUrl = censorPassword(resolvedUrl);
        attributes$1[ATTR_MESSAGING_URL] = censoredUrl;
        attributes$1[attributes.URL_FULL] = censoredUrl;
        try {
            const urlParts = new URL(censoredUrl);
            const protocol = getProtocol(urlParts.protocol);
            const hostname = getHostname(urlParts.hostname);
            const port = getPort(urlParts.port ? parseInt(urlParts.port, 10) : void 0, protocol);
            attributes$1[ATTR_MESSAGING_PROTOCOL] = protocol;
            attributes$1[attributes.NETWORK_PROTOCOL_NAME] = protocol;
            attributes$1[attributes.SERVER_ADDRESS] = hostname;
            attributes$1[attributes.SERVER_PORT] = port;
            attributes$1[attributes.NET_PEER_NAME] = hostname;
            attributes$1[attributes.NET_PEER_PORT] = port;
        } catch  {}
    }
    return attributes$1;
}
function normalizeExchange(exchangeName) {
    return exchangeName !== "" ? exchangeName : "<default>";
}
function censorPassword(url) {
    return url.replace(/:[^:@/]*@/, ":***@");
}
function getPort(portFromUrl, resolvedProtocol) {
    return portFromUrl || (resolvedProtocol === "AMQP" ? 5672 : 5671);
}
function getProtocol(protocolFromUrl) {
    const resolvedProtocol = protocolFromUrl || "amqp";
    const noEndingColon = resolvedProtocol.endsWith(":") ? resolvedProtocol.substring(0, resolvedProtocol.length - 1) : resolvedProtocol;
    return noEndingColon.toUpperCase();
}
function getHostname(hostnameFromUrl) {
    return hostnameFromUrl || "localhost";
}
function getHeaderAsString(headers, key) {
    const value = headers?.[key];
    if (value == null) {
        return void 0;
    }
    return Array.isArray(value) ? String(value[0]) : String(value);
}
const amqplibChannelIntegration = core.defineIntegration(_amqplibChannelIntegration);
exports.amqplibChannelIntegration = amqplibChannelIntegration; //# sourceMappingURL=amqplib.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/anthropic.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Anthropic_AI";
const ORIGIN = "auto.ai.orchestrion.anthropic";
const INSTRUMENTED_CHANNELS = [
    {
        channel: channels.CHANNELS.ANTHROPIC_CHAT,
        operation: "chat",
        methodPath: "messages.create",
        stream: "async-iterable"
    },
    {
        channel: channels.CHANNELS.ANTHROPIC_MODELS,
        operation: "models",
        methodPath: "models.retrieve",
        stream: "none"
    },
    {
        channel: channels.CHANNELS.ANTHROPIC_MESSAGES_STREAM,
        operation: "chat",
        methodPath: "messages.stream",
        stream: "message-stream"
    }
];
let subscribed = false;
const _anthropicChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            core.waitForTracingChannelBinding(()=>{
                for (const { channel, operation, methodPath, stream } of INSTRUMENTED_CHANNELS){
                    debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:anthropic] subscribing to channel "${channel}"`);
                    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channel), (data)=>createGenAiSpan(data, operation, methodPath, options), {
                        beforeSpanEnd: (span, data)=>{
                            core.addAnthropicResponseAttributes(span, data.result, core.resolveAIRecordingOptions(options).recordOutputs);
                        },
                        deferSpanEnd: ({ span, data })=>wrapStreamResult(span, data, stream, options)
                    });
                }
            });
        }
    };
};
function createGenAiSpan(data, operation, methodPath, options) {
    const args = data.arguments ?? [];
    if (core._INTERNAL_shouldSkipAiProviderWrapping(INTEGRATION_NAME)) {
        return void 0;
    }
    const requestOptions = args[1];
    if (requestOptions?.headers?.["X-Stainless-Helper-Method"] === "stream") {
        return void 0;
    }
    const params = typeof args[0] === "object" && args[0] !== null ? args[0] : void 0;
    const { recordInputs } = core.resolveAIRecordingOptions(options);
    const enableTruncation = core.shouldEnableTruncation(options.enableTruncation);
    const attributes = core.extractAnthropicRequestAttributes(args, methodPath, operation);
    const model = attributes[core.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
    attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = ORIGIN;
    const span = core.startInactiveSpan({
        name: `${operation} ${model}`,
        op: `gen_ai.${operation}`,
        attributes
    });
    if (recordInputs && params) {
        core.addAnthropicRequestAttributes(span, params, enableTruncation);
    }
    return span;
}
function isAsyncIterable(value) {
    return !!value && typeof value[Symbol.asyncIterator] === "function";
}
function isMessageStream(value) {
    return !!value && typeof value.on === "function";
}
function wrapStreamResult(span, data, stream, options) {
    const { recordOutputs } = core.resolveAIRecordingOptions(options);
    const result = data.result;
    if (stream === "async-iterable" && isAsyncIterable(result)) {
        const iterate = result[Symbol.asyncIterator].bind(result);
        const instrumented = core.instrumentAsyncIterableStream({
            [Symbol.asyncIterator]: iterate
        }, span, recordOutputs);
        result[Symbol.asyncIterator] = ()=>instrumented;
        return true;
    }
    if (stream === "message-stream" && isMessageStream(result)) {
        core.instrumentMessageStream(result, span, recordOutputs);
        return true;
    }
    return false;
}
const anthropicChannelIntegration = core.defineIntegration(_anthropicChannelIntegration);
exports.anthropicChannelIntegration = anthropicChannelIntegration; //# sourceMappingURL=anthropic.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/constants.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const AWS_SDK_ORIGIN = "auto.aws.orchestrion.aws_sdk";
const DB_SYSTEM_VALUE_DYNAMODB = "dynamodb";
const ATTR_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
const MESSAGING_DESTINATION_KIND_VALUE_TOPIC = "topic";
const GEN_AI_OPERATION_NAME_VALUE_CHAT = "chat";
const GEN_AI_SYSTEM_VALUE_AWS_BEDROCK = "aws.bedrock";
exports.ATTR_MESSAGING_DESTINATION_KIND = ATTR_MESSAGING_DESTINATION_KIND;
exports.AWS_SDK_ORIGIN = AWS_SDK_ORIGIN;
exports.DB_SYSTEM_VALUE_DYNAMODB = DB_SYSTEM_VALUE_DYNAMODB;
exports.GEN_AI_OPERATION_NAME_VALUE_CHAT = GEN_AI_OPERATION_NAME_VALUE_CHAT;
exports.GEN_AI_SYSTEM_VALUE_AWS_BEDROCK = GEN_AI_SYSTEM_VALUE_AWS_BEDROCK;
exports.MESSAGING_DESTINATION_KIND_VALUE_TOPIC = MESSAGING_DESTINATION_KIND_VALUE_TOPIC; //# sourceMappingURL=constants.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/bedrock-runtime.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/constants.js [instrumentation] (ecmascript)");
const textDecoder = new TextDecoder();
class BedrockRuntimeServiceExtension {
    requestPreSpanHook(request) {
        switch(request.commandName){
            case "Converse":
                return this._requestPreSpanHookConverse(request, false);
            case "ConverseStream":
                return this._requestPreSpanHookConverse(request, true);
            case "InvokeModel":
                return this._requestPreSpanHookInvokeModel(request, false);
            case "InvokeModelWithResponseStream":
                return this._requestPreSpanHookInvokeModel(request, true);
        }
        return {};
    }
    responseHook(response, span) {
        const commandName = response.request.commandName;
        if (!span.isRecording()) {
            if (commandName === "ConverseStream" || commandName === "InvokeModelWithResponseStream") {
                span.end();
            }
            return;
        }
        switch(commandName){
            case "Converse":
                return this._responseHookConverse(response, span);
            case "ConverseStream":
                return this._responseHookConverseStream(response, span);
            case "InvokeModel":
                return this._responseHookInvokeModel(response, span);
            case "InvokeModelWithResponseStream":
                return this._responseHookInvokeModelWithResponseStream(response, span);
        }
    }
    _requestPreSpanHookConverse(request, isStream) {
        let spanName = constants.GEN_AI_OPERATION_NAME_VALUE_CHAT;
        const spanAttributes = {
            // oxlint-disable-next-line typescript/no-deprecated
            [attributes.GEN_AI_SYSTEM]: constants.GEN_AI_SYSTEM_VALUE_AWS_BEDROCK,
            [attributes.GEN_AI_OPERATION_NAME]: constants.GEN_AI_OPERATION_NAME_VALUE_CHAT
        };
        const modelId = request.commandInput.modelId;
        if (modelId) {
            spanAttributes[attributes.GEN_AI_REQUEST_MODEL] = modelId;
            if (spanName) {
                spanName += ` ${modelId}`;
            }
        }
        const inferenceConfig = request.commandInput.inferenceConfig;
        if (inferenceConfig) {
            const { maxTokens, temperature, topP, stopSequences } = inferenceConfig;
            if (maxTokens !== void 0) {
                spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = maxTokens;
            }
            if (temperature !== void 0) {
                spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = temperature;
            }
            if (topP !== void 0) {
                spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = topP;
            }
            if (stopSequences !== void 0) {
                spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = stopSequences;
            }
        }
        return {
            spanName,
            isStream,
            spanAttributes
        };
    }
    _requestPreSpanHookInvokeModel(request, isStream) {
        const spanAttributes = {
            // oxlint-disable-next-line typescript/no-deprecated
            [attributes.GEN_AI_SYSTEM]: constants.GEN_AI_SYSTEM_VALUE_AWS_BEDROCK
        };
        const modelId = request.commandInput?.modelId;
        if (modelId) {
            spanAttributes[attributes.GEN_AI_REQUEST_MODEL] = modelId;
        }
        if (request.commandInput?.body) {
            const requestBody = JSON.parse(request.commandInput.body);
            if (modelId.includes("amazon.titan")) {
                if (requestBody.textGenerationConfig?.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.textGenerationConfig.temperature;
                }
                if (requestBody.textGenerationConfig?.topP !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.textGenerationConfig.topP;
                }
                if (requestBody.textGenerationConfig?.maxTokenCount !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.textGenerationConfig.maxTokenCount;
                }
                if (requestBody.textGenerationConfig?.stopSequences !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = requestBody.textGenerationConfig.stopSequences;
                }
            } else if (modelId.includes("amazon.nova")) {
                if (requestBody.inferenceConfig?.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.inferenceConfig.temperature;
                }
                if (requestBody.inferenceConfig?.top_p !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.inferenceConfig.top_p;
                }
                if (requestBody.inferenceConfig?.max_new_tokens !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.inferenceConfig.max_new_tokens;
                }
                if (requestBody.inferenceConfig?.stopSequences !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = requestBody.inferenceConfig.stopSequences;
                }
            } else if (modelId.includes("anthropic.claude")) {
                if (requestBody.max_tokens !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.max_tokens;
                }
                if (requestBody.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.temperature;
                }
                if (requestBody.top_p !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.top_p;
                }
                if (requestBody.stop_sequences !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = requestBody.stop_sequences;
                }
            } else if (modelId.includes("meta.llama")) {
                if (requestBody.max_gen_len !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.max_gen_len;
                }
                if (requestBody.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.temperature;
                }
                if (requestBody.top_p !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.top_p;
                }
            } else if (modelId.includes("cohere.command-r")) {
                if (requestBody.max_tokens !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.max_tokens;
                }
                if (requestBody.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.temperature;
                }
                if (requestBody.p !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.p;
                }
                if (requestBody.message !== void 0) {
                    spanAttributes[attributes.GEN_AI_USAGE_INPUT_TOKENS] = Math.ceil(requestBody.message.length / 6);
                }
                if (requestBody.stop_sequences !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = requestBody.stop_sequences;
                }
            } else if (modelId.includes("cohere.command")) {
                if (requestBody.max_tokens !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.max_tokens;
                }
                if (requestBody.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.temperature;
                }
                if (requestBody.p !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.p;
                }
                if (requestBody.prompt !== void 0) {
                    spanAttributes[attributes.GEN_AI_USAGE_INPUT_TOKENS] = Math.ceil(requestBody.prompt.length / 6);
                }
                if (requestBody.stop_sequences !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = requestBody.stop_sequences;
                }
            } else if (modelId.includes("mistral")) {
                if (requestBody.prompt !== void 0) {
                    spanAttributes[attributes.GEN_AI_USAGE_INPUT_TOKENS] = Math.ceil(requestBody.prompt.length / 6);
                }
                if (requestBody.max_tokens !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_MAX_TOKENS] = requestBody.max_tokens;
                }
                if (requestBody.temperature !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TEMPERATURE] = requestBody.temperature;
                }
                if (requestBody.top_p !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_TOP_P] = requestBody.top_p;
                }
                if (requestBody.stop !== void 0) {
                    spanAttributes[attributes.GEN_AI_REQUEST_STOP_SEQUENCES] = requestBody.stop;
                }
            }
        }
        return {
            isStream,
            spanAttributes
        };
    }
    _responseHookConverse(response, span) {
        const { stopReason, usage } = response.data;
        setStopReason(span, stopReason);
        setUsage(span, usage);
    }
    _responseHookConverseStream(response, span) {
        response.data.stream = wrapConverseStreamResponse(response.data.stream, span);
    }
    _responseHookInvokeModel(response, span) {
        const currentModelId = response.request.commandInput?.modelId;
        if (response.data?.body) {
            const decodedResponseBody = textDecoder.decode(response.data.body);
            const responseBody = JSON.parse(decodedResponseBody);
            if (currentModelId.includes("amazon.titan")) {
                if (responseBody.inputTextTokenCount !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, responseBody.inputTextTokenCount);
                }
                if (responseBody.results?.[0]?.tokenCount !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, responseBody.results[0].tokenCount);
                }
                if (responseBody.results?.[0]?.completionReason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.results[0].completionReason
                    ]);
                }
            } else if (currentModelId.includes("amazon.nova")) {
                if (responseBody.usage !== void 0) {
                    if (responseBody.usage.inputTokens !== void 0) {
                        span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, responseBody.usage.inputTokens);
                    }
                    if (responseBody.usage.outputTokens !== void 0) {
                        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, responseBody.usage.outputTokens);
                    }
                }
                if (responseBody.stopReason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.stopReason
                    ]);
                }
            } else if (currentModelId.includes("anthropic.claude")) {
                if (responseBody.usage?.input_tokens !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, responseBody.usage.input_tokens);
                }
                if (responseBody.usage?.output_tokens !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, responseBody.usage.output_tokens);
                }
                if (responseBody.stop_reason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.stop_reason
                    ]);
                }
            } else if (currentModelId.includes("meta.llama")) {
                if (responseBody.prompt_token_count !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, responseBody.prompt_token_count);
                }
                if (responseBody.generation_token_count !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, responseBody.generation_token_count);
                }
                if (responseBody.stop_reason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.stop_reason
                    ]);
                }
            } else if (currentModelId.includes("cohere.command-r")) {
                if (responseBody.text !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(responseBody.text.length / 6));
                }
                if (responseBody.finish_reason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.finish_reason
                    ]);
                }
            } else if (currentModelId.includes("cohere.command")) {
                if (responseBody.generations?.[0]?.text !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(responseBody.generations[0].text.length / 6));
                }
                if (responseBody.generations?.[0]?.finish_reason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.generations[0].finish_reason
                    ]);
                }
            } else if (currentModelId.includes("mistral")) {
                if (responseBody.outputs?.[0]?.text !== void 0) {
                    span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(responseBody.outputs[0].text.length / 6));
                }
                if (responseBody.outputs?.[0]?.stop_reason !== void 0) {
                    span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
                        responseBody.outputs[0].stop_reason
                    ]);
                }
            }
        }
    }
    _responseHookInvokeModelWithResponseStream(response, span) {
        const stream = response.data?.body;
        const modelId = response.request.commandInput?.modelId;
        if (!stream || !modelId) {
            return;
        }
        const recordAttributes = resolveStreamRecorder(modelId);
        response.data.body = async function*() {
            try {
                for await (const chunk of stream){
                    if (recordAttributes) {
                        const parsedChunk = parseChunk(chunk?.chunk?.bytes);
                        if (parsedChunk) {
                            recordAttributes(parsedChunk, span);
                        }
                    }
                    yield chunk;
                }
            } finally{
                span.end();
            }
        }();
    }
}
function resolveStreamRecorder(modelId) {
    if (modelId.includes("amazon.titan")) return recordTitanAttributes;
    if (modelId.includes("anthropic.claude")) return recordClaudeAttributes;
    if (modelId.includes("amazon.nova")) return recordNovaAttributes;
    if (modelId.includes("meta.llama")) return recordLlamaAttributes;
    if (modelId.includes("cohere.command-r")) return recordCohereRAttributes;
    if (modelId.includes("cohere.command")) return recordCohereAttributes;
    if (modelId.includes("mistral")) return recordMistralAttributes;
    return void 0;
}
async function* wrapConverseStreamResponse(stream, span) {
    try {
        let usage;
        for await (const item of stream){
            setStopReason(span, item.messageStop?.stopReason);
            usage = item.metadata?.usage;
            yield item;
        }
        setUsage(span, usage);
    } finally{
        span.end();
    }
}
function setStopReason(span, stopReason) {
    if (stopReason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            stopReason
        ]);
    }
}
function setUsage(span, usage) {
    if (usage) {
        const { inputTokens, outputTokens } = usage;
        if (inputTokens !== void 0) {
            span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, inputTokens);
        }
        if (outputTokens !== void 0) {
            span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, outputTokens);
        }
    }
}
function parseChunk(bytes) {
    if (!bytes || !(bytes instanceof Uint8Array)) {
        return null;
    }
    try {
        const str = Buffer.from(bytes).toString("utf-8");
        return JSON.parse(str);
    } catch (err) {
        debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:aws-sdk] failed to parse streamed bedrock chunk", err);
        return null;
    }
}
function recordNovaAttributes(parsedChunk, span) {
    if (parsedChunk.metadata?.usage !== void 0) {
        if (parsedChunk.metadata?.usage.inputTokens !== void 0) {
            span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, parsedChunk.metadata.usage.inputTokens);
        }
        if (parsedChunk.metadata?.usage.outputTokens !== void 0) {
            span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, parsedChunk.metadata.usage.outputTokens);
        }
    }
    if (parsedChunk.messageStop?.stopReason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.messageStop.stopReason
        ]);
    }
}
function recordClaudeAttributes(parsedChunk, span) {
    if (parsedChunk.message?.usage?.input_tokens !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, parsedChunk.message.usage.input_tokens);
    }
    if (parsedChunk.message?.usage?.output_tokens !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, parsedChunk.message.usage.output_tokens);
    }
    if (parsedChunk.delta?.stop_reason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.delta.stop_reason
        ]);
    }
}
function recordTitanAttributes(parsedChunk, span) {
    if (parsedChunk.inputTextTokenCount !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, parsedChunk.inputTextTokenCount);
    }
    if (parsedChunk.totalOutputTextTokenCount !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, parsedChunk.totalOutputTextTokenCount);
    }
    if (parsedChunk.completionReason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.completionReason
        ]);
    }
}
function recordLlamaAttributes(parsedChunk, span) {
    if (parsedChunk.prompt_token_count !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_INPUT_TOKENS, parsedChunk.prompt_token_count);
    }
    if (parsedChunk.generation_token_count !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, parsedChunk.generation_token_count);
    }
    if (parsedChunk.stop_reason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.stop_reason
        ]);
    }
}
function recordMistralAttributes(parsedChunk, span) {
    if (parsedChunk.outputs?.[0]?.text !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(parsedChunk.outputs[0].text.length / 6));
    }
    if (parsedChunk.outputs?.[0]?.stop_reason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.outputs[0].stop_reason
        ]);
    }
}
function recordCohereAttributes(parsedChunk, span) {
    if (parsedChunk.generations?.[0]?.text !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(parsedChunk.generations[0].text.length / 6));
    }
    if (parsedChunk.generations?.[0]?.finish_reason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.generations[0].finish_reason
        ]);
    }
}
function recordCohereRAttributes(parsedChunk, span) {
    if (parsedChunk.text !== void 0) {
        span.setAttribute(attributes.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(parsedChunk.text.length / 6));
    }
    if (parsedChunk.finish_reason !== void 0) {
        span.setAttribute(attributes.GEN_AI_RESPONSE_FINISH_REASONS, [
            parsedChunk.finish_reason
        ]);
    }
}
exports.BedrockRuntimeServiceExtension = BedrockRuntimeServiceExtension; //# sourceMappingURL=bedrock-runtime.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/dynamodb.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/constants.js [instrumentation] (ecmascript)");
function toArray(values) {
    return Array.isArray(values) ? values : [
        values
    ];
}
class DynamodbServiceExtension {
    requestPreSpanHook(normalizedRequest) {
        const operation = normalizedRequest.commandName;
        const tableName = normalizedRequest.commandInput?.TableName;
        const spanAttributes = {};
        spanAttributes[attributes.DB_SYSTEM] = constants.DB_SYSTEM_VALUE_DYNAMODB;
        spanAttributes[attributes.DB_NAME] = tableName;
        spanAttributes[attributes.DB_OPERATION] = operation;
        if (normalizedRequest.commandInput?.TableName) {
            spanAttributes[attributes.AWS_DYNAMODB_TABLE_NAMES] = [
                normalizedRequest.commandInput.TableName
            ];
        } else if (normalizedRequest.commandInput?.RequestItems) {
            spanAttributes[attributes.AWS_DYNAMODB_TABLE_NAMES] = Object.keys(normalizedRequest.commandInput.RequestItems);
        }
        if (operation === "CreateTable" || operation === "UpdateTable") {
            if (normalizedRequest.commandInput?.ProvisionedThroughput) {
                spanAttributes[attributes.AWS_DYNAMODB_PROVISIONED_READ_CAPACITY] = normalizedRequest.commandInput.ProvisionedThroughput.ReadCapacityUnits;
                spanAttributes[attributes.AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY] = normalizedRequest.commandInput.ProvisionedThroughput.WriteCapacityUnits;
            }
        }
        if (operation === "GetItem" || operation === "Scan" || operation === "Query") {
            if (normalizedRequest.commandInput?.ConsistentRead) {
                spanAttributes[attributes.AWS_DYNAMODB_CONSISTENT_READ] = normalizedRequest.commandInput.ConsistentRead;
            }
        }
        if (operation === "Query" || operation === "Scan") {
            if (normalizedRequest.commandInput?.ProjectionExpression) {
                spanAttributes[attributes.AWS_DYNAMODB_PROJECTION] = normalizedRequest.commandInput.ProjectionExpression;
            }
        }
        if (operation === "CreateTable") {
            if (normalizedRequest.commandInput?.GlobalSecondaryIndexes) {
                spanAttributes[attributes.AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES] = toArray(normalizedRequest.commandInput.GlobalSecondaryIndexes).map((x)=>JSON.stringify(x));
            }
            if (normalizedRequest.commandInput?.LocalSecondaryIndexes) {
                spanAttributes[attributes.AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES] = toArray(normalizedRequest.commandInput.LocalSecondaryIndexes).map((x)=>JSON.stringify(x));
            }
        }
        if (operation === "ListTables" || operation === "Query" || operation === "Scan") {
            if (normalizedRequest.commandInput?.Limit) {
                spanAttributes[attributes.AWS_DYNAMODB_LIMIT] = normalizedRequest.commandInput.Limit;
            }
        }
        if (operation === "ListTables") {
            if (normalizedRequest.commandInput?.ExclusiveStartTableName) {
                spanAttributes[attributes.AWS_DYNAMODB_EXCLUSIVE_START_TABLE] = normalizedRequest.commandInput.ExclusiveStartTableName;
            }
        }
        if (operation === "Query") {
            if (normalizedRequest.commandInput?.ScanIndexForward) {
                spanAttributes[attributes.AWS_DYNAMODB_SCAN_FORWARD] = normalizedRequest.commandInput.ScanIndexForward;
            }
            if (normalizedRequest.commandInput?.IndexName) {
                spanAttributes[attributes.AWS_DYNAMODB_INDEX_NAME] = normalizedRequest.commandInput.IndexName;
            }
            if (normalizedRequest.commandInput?.Select) {
                spanAttributes[attributes.AWS_DYNAMODB_SELECT] = normalizedRequest.commandInput.Select;
            }
        }
        if (operation === "Scan") {
            if (normalizedRequest.commandInput?.Segment) {
                spanAttributes[attributes.AWS_DYNAMODB_SEGMENT] = normalizedRequest.commandInput?.Segment;
            }
            if (normalizedRequest.commandInput?.TotalSegments) {
                spanAttributes[attributes.AWS_DYNAMODB_TOTAL_SEGMENTS] = normalizedRequest.commandInput?.TotalSegments;
            }
            if (normalizedRequest.commandInput?.IndexName) {
                spanAttributes[attributes.AWS_DYNAMODB_INDEX_NAME] = normalizedRequest.commandInput.IndexName;
            }
            if (normalizedRequest.commandInput?.Select) {
                spanAttributes[attributes.AWS_DYNAMODB_SELECT] = normalizedRequest.commandInput.Select;
            }
        }
        if (operation === "UpdateTable") {
            if (normalizedRequest.commandInput?.AttributeDefinitions) {
                spanAttributes[attributes.AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS] = toArray(normalizedRequest.commandInput.AttributeDefinitions).map((x)=>JSON.stringify(x));
            }
            if (normalizedRequest.commandInput?.GlobalSecondaryIndexUpdates) {
                spanAttributes[attributes.AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES] = toArray(normalizedRequest.commandInput.GlobalSecondaryIndexUpdates).map((x)=>JSON.stringify(x));
            }
        }
        return {
            spanAttributes,
            spanKind: core.SPAN_KIND.CLIENT,
            // Matches what the exporter infers from `db.system` for the OTel DynamoDB spans.
            spanOp: "db"
        };
    }
    responseHook(response, span) {
        if (response.data?.ConsumedCapacity) {
            span.setAttribute(attributes.AWS_DYNAMODB_CONSUMED_CAPACITY, toArray(response.data.ConsumedCapacity).map((x)=>JSON.stringify(x)));
        }
        if (response.data?.ItemCollectionMetrics) {
            span.setAttribute(attributes.AWS_DYNAMODB_ITEM_COLLECTION_METRICS, toArray(response.data.ItemCollectionMetrics).map((x)=>JSON.stringify(x)));
        }
        if (response.data?.TableNames) {
            span.setAttribute(attributes.AWS_DYNAMODB_TABLE_COUNT, response.data?.TableNames.length);
        }
        if (response.data?.Count) {
            span.setAttribute(attributes.AWS_DYNAMODB_COUNT, response.data?.Count);
        }
        if (response.data?.ScannedCount) {
            span.setAttribute(attributes.AWS_DYNAMODB_SCANNED_COUNT, response.data?.ScannedCount);
        }
    }
}
exports.DynamodbServiceExtension = DynamodbServiceExtension; //# sourceMappingURL=dynamodb.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/kinesis.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
class KinesisServiceExtension {
    requestPreSpanHook(request) {
        const streamName = request.commandInput?.StreamName;
        const spanAttributes = {};
        if (streamName) {
            spanAttributes[attributes._AWS_KINESIS_STREAM_NAME] = streamName;
        }
        return {
            spanAttributes,
            spanKind: core.SPAN_KIND.CLIENT
        };
    }
}
exports.KinesisServiceExtension = KinesisServiceExtension; //# sourceMappingURL=kinesis.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/lambda.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const INVOKE_COMMAND = "Invoke";
class LambdaServiceExtension {
    requestPreSpanHook(request) {
        const functionName = request.commandInput?.FunctionName;
        const spanAttributes = {};
        let spanName;
        if (request.commandName === INVOKE_COMMAND) {
            spanAttributes[attributes.FAAS_INVOKED_NAME] = functionName;
            spanAttributes[attributes.FAAS_INVOKED_PROVIDER] = "aws";
            spanName = `${functionName} ${INVOKE_COMMAND}`;
        }
        return {
            spanAttributes,
            spanKind: core.SPAN_KIND.CLIENT,
            spanName
        };
    }
    requestPostSpanHook(request, span) {
        if (request.commandName === INVOKE_COMMAND && request.commandInput) {
            request.commandInput.ClientContext = injectLambdaPropagationContext(request.commandInput.ClientContext, span);
        }
    }
    responseHook(response, span) {
        if (response.request.commandName === INVOKE_COMMAND) {
            span.setAttribute(attributes.FAAS_EXECUTION, response.requestId);
            if (response.request.region) {
                span.setAttribute(attributes.FAAS_INVOKED_REGION, response.request.region);
            }
        }
    }
}
function injectLambdaPropagationContext(clientContext, span) {
    try {
        const propagatedContext = core.getTraceData({
            span
        });
        const parsedClientContext = clientContext ? JSON.parse(Buffer.from(clientContext, "base64").toString("utf8")) : {};
        const updatedClientContext = {
            ...parsedClientContext,
            custom: {
                ...parsedClientContext.custom,
                ...propagatedContext
            }
        };
        const encodedClientContext = Buffer.from(JSON.stringify(updatedClientContext)).toString("base64");
        if (encodedClientContext.length > 3583) {
            debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:aws-sdk] cannot set trace propagation on lambda invoke parameters due to ClientContext length limitations.");
            return clientContext;
        }
        return encodedClientContext;
    } catch (e) {
        debugBuild.DEBUG_BUILD && core.debug.log("[orchestrion:aws-sdk] failed to set trace propagation on lambda ClientContext", e);
        return clientContext;
    }
}
exports.LambdaServiceExtension = LambdaServiceExtension; //# sourceMappingURL=lambda.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/s3.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
class S3ServiceExtension {
    requestPreSpanHook(request) {
        const bucketName = request.commandInput?.Bucket;
        const spanAttributes = {};
        if (bucketName) {
            spanAttributes[attributes.AWS_S3_BUCKET] = bucketName;
        }
        return {
            spanAttributes,
            spanKind: core.SPAN_KIND.CLIENT
        };
    }
}
exports.S3ServiceExtension = S3ServiceExtension; //# sourceMappingURL=s3.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/secretsmanager.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
class SecretsManagerServiceExtension {
    requestPreSpanHook(request) {
        const secretId = request.commandInput?.SecretId;
        const spanAttributes = {};
        if (typeof secretId === "string" && secretId.startsWith("arn:aws:secretsmanager:")) {
            spanAttributes[attributes.AWS_SECRETSMANAGER_SECRET_ARN] = secretId;
        }
        return {
            spanAttributes,
            spanKind: core.SPAN_KIND.CLIENT
        };
    }
    responseHook(response, span) {
        const secretArn = response.data?.ARN;
        if (secretArn) {
            span.setAttribute(attributes.AWS_SECRETSMANAGER_SECRET_ARN, secretArn);
        }
    }
}
exports.SecretsManagerServiceExtension = SecretsManagerServiceExtension; //# sourceMappingURL=secretsmanager.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/MessageAttributes.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const MAX_MESSAGE_ATTRIBUTES = 10;
const SENTRY_TRACE_HEADER = "sentry-trace";
const BAGGAGE_HEADER = "baggage";
const PROPAGATION_FIELDS = [
    SENTRY_TRACE_HEADER,
    BAGGAGE_HEADER
];
function injectPropagationContext(attributesMap, traceData) {
    const attributes = attributesMap ?? {};
    const headerKeys = Object.keys(traceData);
    if (Object.keys(attributes).length + headerKeys.length <= MAX_MESSAGE_ATTRIBUTES) {
        for (const key of headerKeys){
            const value = traceData[key];
            if (value) {
                attributes[key] = {
                    DataType: "String",
                    StringValue: value
                };
            }
        }
    } else {
        debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:aws-sdk] cannot set trace propagation on SQS/SNS message due to maximum amount of MessageAttributes");
    }
    return attributes;
}
function extractPropagationHeaders(message) {
    const carrier = message.MessageAttributes ?? {};
    const sentryTrace = carrier[SENTRY_TRACE_HEADER]?.StringValue ?? carrier[SENTRY_TRACE_HEADER]?.Value;
    if (!sentryTrace) {
        return void 0;
    }
    return {
        sentryTrace,
        baggage: carrier[BAGGAGE_HEADER]?.StringValue ?? carrier[BAGGAGE_HEADER]?.Value
    };
}
function addPropagationFieldsToAttributeNames(messageAttributeNames = []) {
    return core.uniq([
        ...messageAttributeNames,
        ...PROPAGATION_FIELDS
    ]);
}
exports.MAX_MESSAGE_ATTRIBUTES = MAX_MESSAGE_ATTRIBUTES;
exports.addPropagationFieldsToAttributeNames = addPropagationFieldsToAttributeNames;
exports.extractPropagationHeaders = extractPropagationHeaders;
exports.injectPropagationContext = injectPropagationContext; //# sourceMappingURL=MessageAttributes.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/sns.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/constants.js [instrumentation] (ecmascript)");
const MessageAttributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/MessageAttributes.js [instrumentation] (ecmascript)");
class SnsServiceExtension {
    requestPreSpanHook(request) {
        let spanKind = core.SPAN_KIND.CLIENT;
        let spanName = `SNS ${request.commandName}`;
        const spanAttributes = {
            [attributes.MESSAGING_SYSTEM]: "aws.sns"
        };
        if (request.commandName === "Publish") {
            spanKind = core.SPAN_KIND.PRODUCER;
            spanAttributes[constants.ATTR_MESSAGING_DESTINATION_KIND] = constants.MESSAGING_DESTINATION_KIND_VALUE_TOPIC;
            const { TopicArn, TargetArn, PhoneNumber } = request.commandInput;
            const destinationName = extractDestinationName(TopicArn, TargetArn, PhoneNumber);
            spanAttributes[attributes.MESSAGING_DESTINATION] = destinationName;
            spanAttributes[attributes.MESSAGING_DESTINATION_NAME] = TopicArn || TargetArn || PhoneNumber || "unknown";
            spanName = `${PhoneNumber ? "phone_number" : destinationName} send`;
        }
        const topicArn = request.commandInput?.TopicArn;
        if (topicArn) {
            spanAttributes[attributes.AWS_SNS_TOPIC_ARN] = topicArn;
        }
        return {
            spanAttributes,
            spanKind,
            spanName
        };
    }
    requestPostSpanHook(request, span) {
        if (request.commandName === "Publish") {
            const origMessageAttributes = request.commandInput.MessageAttributes ?? {};
            request.commandInput.MessageAttributes = MessageAttributes.injectPropagationContext(origMessageAttributes, core.getTraceData({
                span
            }));
        }
    }
    responseHook(response, span) {
        const topicArn = response.data?.TopicArn;
        if (topicArn) {
            span.setAttribute(attributes.AWS_SNS_TOPIC_ARN, topicArn);
        }
    }
}
function extractDestinationName(topicArn, targetArn, phoneNumber) {
    if (topicArn || targetArn) {
        const arn = topicArn ?? targetArn;
        try {
            return arn.substring(arn.lastIndexOf(":") + 1);
        } catch  {
            return arn;
        }
    } else if (phoneNumber) {
        return phoneNumber;
    } else {
        return "unknown";
    }
}
exports.SnsServiceExtension = SnsServiceExtension; //# sourceMappingURL=sns.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/sqs.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const MessageAttributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/MessageAttributes.js [instrumentation] (ecmascript)");
class SqsServiceExtension {
    requestPreSpanHook(request) {
        const queueUrl = extractQueueUrl(request.commandInput);
        const queueName = extractQueueNameFromUrl(queueUrl);
        let spanKind = core.SPAN_KIND.CLIENT;
        let spanName;
        const spanAttributes = {
            [attributes.MESSAGING_SYSTEM]: "aws_sqs",
            [attributes.MESSAGING_DESTINATION_NAME]: queueName,
            [attributes.URL_FULL]: queueUrl
        };
        switch(request.commandName){
            case "ReceiveMessage":
                {
                    spanKind = core.SPAN_KIND.CONSUMER;
                    spanName = `${queueName} receive`;
                    spanAttributes[attributes.MESSAGING_OPERATION_TYPE] = "receive";
                    request.commandInput.MessageAttributeNames = MessageAttributes.addPropagationFieldsToAttributeNames(request.commandInput.MessageAttributeNames);
                }
                break;
            case "SendMessage":
            case "SendMessageBatch":
                spanKind = core.SPAN_KIND.PRODUCER;
                spanName = `${queueName} send`;
                break;
        }
        return {
            spanAttributes,
            spanKind,
            spanName
        };
    }
    requestPostSpanHook(request, span) {
        switch(request.commandName){
            case "SendMessage":
                {
                    const origMessageAttributes = request.commandInput.MessageAttributes ?? {};
                    request.commandInput.MessageAttributes = MessageAttributes.injectPropagationContext(origMessageAttributes, core.getTraceData({
                        span
                    }));
                }
                break;
            case "SendMessageBatch":
                {
                    const entries = request.commandInput?.Entries;
                    if (Array.isArray(entries)) {
                        const traceData = core.getTraceData({
                            span
                        });
                        entries.forEach((messageParams)=>{
                            messageParams.MessageAttributes = MessageAttributes.injectPropagationContext(messageParams.MessageAttributes ?? {}, traceData);
                        });
                    }
                }
                break;
        }
    }
    responseHook(response, span) {
        switch(response.request.commandName){
            case "SendMessage":
                span.setAttribute(attributes.MESSAGING_MESSAGE_ID, response?.data?.MessageId);
                break;
            case "SendMessageBatch":
                break;
            case "ReceiveMessage":
                {
                    const messages = response?.data?.Messages || [];
                    span.setAttribute(attributes.MESSAGING_BATCH_MESSAGE_COUNT, messages.length);
                    for (const message of messages){
                        linkReceivedMessageToProducer(span, message);
                    }
                    break;
                }
        }
    }
}
function linkReceivedMessageToProducer(span, message) {
    const headers = MessageAttributes.extractPropagationHeaders(message);
    if (!headers) {
        return;
    }
    const { parentSpanId, traceId, sampled } = core.propagationContextFromHeaders(headers.sentryTrace, headers.baggage);
    if (traceId && parentSpanId) {
        span.addLink({
            context: {
                traceId,
                spanId: parentSpanId,
                traceFlags: sampled ? 1 : 0
            },
            attributes: {
                [attributes.MESSAGING_MESSAGE_ID]: message.MessageId
            }
        });
    }
}
function extractQueueUrl(commandInput) {
    return commandInput?.QueueUrl;
}
function extractQueueNameFromUrl(queueUrl) {
    if (!queueUrl) return void 0;
    const segments = queueUrl.split("/");
    if (segments.length === 0) return void 0;
    return segments[segments.length - 1];
}
exports.SqsServiceExtension = SqsServiceExtension; //# sourceMappingURL=sqs.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/stepfunctions.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
class StepFunctionsServiceExtension {
    requestPreSpanHook(request) {
        const stateMachineArn = request.commandInput?.stateMachineArn;
        const activityArn = request.commandInput?.activityArn;
        const spanAttributes = {};
        if (stateMachineArn) {
            spanAttributes[attributes.AWS_STEP_FUNCTIONS_STATE_MACHINE_ARN] = stateMachineArn;
        }
        if (activityArn) {
            spanAttributes[attributes.AWS_STEP_FUNCTIONS_ACTIVITY_ARN] = activityArn;
        }
        return {
            spanAttributes,
            spanKind: core.SPAN_KIND.CLIENT
        };
    }
}
exports.StepFunctionsServiceExtension = StepFunctionsServiceExtension; //# sourceMappingURL=stepfunctions.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/ServicesExtensions.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const bedrockRuntime = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/bedrock-runtime.js [instrumentation] (ecmascript)");
const dynamodb = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/dynamodb.js [instrumentation] (ecmascript)");
const kinesis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/kinesis.js [instrumentation] (ecmascript)");
const lambda = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/lambda.js [instrumentation] (ecmascript)");
const s3 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/s3.js [instrumentation] (ecmascript)");
const secretsmanager = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/secretsmanager.js [instrumentation] (ecmascript)");
const sns = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/sns.js [instrumentation] (ecmascript)");
const sqs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/sqs.js [instrumentation] (ecmascript)");
const stepfunctions = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/stepfunctions.js [instrumentation] (ecmascript)");
class ServicesExtensions {
    constructor(){
        // Per-service extensions, keyed by the client's `serviceId` (e.g. `'S3'`). Services without a
        // registered extension still get the base rpc span from the subscriber.
        this._services = /* @__PURE__ */ new Map([
            [
                "SecretsManager",
                new secretsmanager.SecretsManagerServiceExtension()
            ],
            [
                "SFN",
                new stepfunctions.StepFunctionsServiceExtension()
            ],
            [
                "SQS",
                new sqs.SqsServiceExtension()
            ],
            [
                "SNS",
                new sns.SnsServiceExtension()
            ],
            [
                "DynamoDB",
                new dynamodb.DynamodbServiceExtension()
            ],
            [
                "Lambda",
                new lambda.LambdaServiceExtension()
            ],
            [
                "S3",
                new s3.S3ServiceExtension()
            ],
            [
                "Kinesis",
                new kinesis.KinesisServiceExtension()
            ],
            [
                "BedrockRuntime",
                new bedrockRuntime.BedrockRuntimeServiceExtension()
            ]
        ]);
    }
    requestPreSpanHook(request) {
        const serviceExtension = this._services.get(request.serviceName);
        if (!serviceExtension) {
            return {};
        }
        return serviceExtension.requestPreSpanHook(request);
    }
    requestPostSpanHook(request, span) {
        const serviceExtension = this._services.get(request.serviceName);
        serviceExtension?.requestPostSpanHook?.(request, span);
    }
    responseHook(response, span) {
        const serviceExtension = this._services.get(response.request.serviceName);
        serviceExtension?.responseHook?.(response, span);
    }
}
exports.ServicesExtensions = ServicesExtensions; //# sourceMappingURL=ServicesExtensions.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
function removeSuffixFromStringIfExists(str, suffixToRemove) {
    const suffixLength = suffixToRemove.length;
    return str?.slice(-suffixLength) === suffixToRemove ? str.slice(0, -suffixLength) : str;
}
function normalizeV3Request(serviceName, commandNameWithSuffix, commandInput, region) {
    return {
        serviceName: serviceName?.replace(/\s+/g, ""),
        commandName: removeSuffixFromStringIfExists(commandNameWithSuffix, "Command"),
        commandInput,
        region
    };
}
function extractAttributesFromNormalizedRequest(normalizedRequest) {
    return {
        // oxlint-disable-next-line typescript/no-deprecated -- old-semconv rpc.system, matched to the OTel aws-sdk integration
        [attributes.RPC_SYSTEM]: "aws-api",
        [attributes.RPC_METHOD]: normalizedRequest.commandName,
        [attributes.RPC_SERVICE]: normalizedRequest.serviceName,
        [attributes.CLOUD_REGION]: normalizedRequest.region
    };
}
exports.extractAttributesFromNormalizedRequest = extractAttributesFromNormalizedRequest;
exports.normalizeV3Request = normalizeV3Request;
exports.removeSuffixFromStringIfExists = removeSuffixFromStringIfExists; //# sourceMappingURL=utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/constants.js [instrumentation] (ecmascript)");
const ServicesExtensions = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/services/ServicesExtensions.js [instrumentation] (ecmascript)");
const utils = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/utils.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Aws";
function safe(fn) {
    try {
        return fn();
    } catch (error) {
        debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:aws-sdk] error building span", error);
        return void 0;
    }
}
function setMetadataAttributes(span, metadata) {
    if (!metadata) {
        return;
    }
    if (metadata.requestId) {
        span.setAttribute(attributes._AWS_REQUEST_ID, metadata.requestId);
    }
    if (metadata.httpStatusCode) {
        span.setAttribute(attributes.HTTP_STATUS_CODE, metadata.httpStatusCode);
    }
    if (metadata.extendedRequestId) {
        span.setAttribute(attributes.AWS_REQUEST_EXTENDED_ID, metadata.extendedRequestId);
    }
}
const _awsChannelIntegration = ()=>{
    const servicesExtensions = new ServicesExtensions.ServicesExtensions();
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            const getSpan = (data)=>safe(()=>{
                    const command = data.arguments[0];
                    const commandName = command?.constructor?.name;
                    if (!command || !commandName) {
                        return void 0;
                    }
                    const clientConfig = data.self?.config;
                    const serviceName = clientConfig?.serviceId ?? // `clientName` isn't available at the `send` boundary; fall back to the client's
                    // constructor name (e.g. `S3Client` -> `S3`). `serviceId` is set for all AWS clients.
                    utils.removeSuffixFromStringIfExists(data.self?.constructor?.name || "AWS", "Client");
                    if (!command.input) {
                        command.input = {};
                    }
                    const normalizedRequest = utils.normalizeV3Request(serviceName, commandName, command.input, void 0);
                    const requestMetadata = servicesExtensions.requestPreSpanHook(normalizedRequest);
                    const span = core.startInactiveSpan({
                        name: requestMetadata.spanName ?? `${normalizedRequest.serviceName}.${normalizedRequest.commandName}`,
                        kind: requestMetadata.spanKind ?? core.SPAN_KIND.CLIENT,
                        // `rpc` matches what the exporter infers from `rpc.service` for the OTel aws-sdk spans;
                        // service extensions override it where inference yields a different op (DynamoDB: `db`).
                        op: requestMetadata.spanOp || "rpc",
                        attributes: {
                            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.AWS_SDK_ORIGIN,
                            ...utils.extractAttributesFromNormalizedRequest(normalizedRequest),
                            ...requestMetadata.spanAttributes
                        }
                    });
                    data._sentryNormalizedRequest = normalizedRequest;
                    data._sentryRequestMetadata = requestMetadata;
                    let regionResult;
                    try {
                        regionResult = clientConfig?.region?.();
                    } catch  {}
                    const regionHolder = {
                        settled: false,
                        promise: Promise.resolve(regionResult).then((region)=>{
                            if (region) {
                                normalizedRequest.region = region;
                                span.setAttribute(attributes.CLOUD_REGION, region);
                            }
                        }).catch(()=>{}).finally(()=>{
                            regionHolder.settled = true;
                        })
                    };
                    data._sentryRegion = regionHolder;
                    safe(()=>servicesExtensions.requestPostSpanHook(normalizedRequest, span));
                    return span;
                });
            const opts = {
                deferSpanEnd ({ span, data, end }) {
                    const normalizedRequest = data._sentryNormalizedRequest;
                    const requestMetadata = data._sentryRequestMetadata;
                    if (!normalizedRequest) {
                        return false;
                    }
                    const failed = "error" in data;
                    safe(()=>{
                        if (failed) {
                            const err = data.error;
                            const errMetadata = err?.$metadata;
                            setMetadataAttributes(span, {
                                requestId: err?.RequestId ?? errMetadata?.requestId,
                                httpStatusCode: errMetadata?.httpStatusCode,
                                extendedRequestId: err?.extendedRequestId ?? errMetadata?.extendedRequestId
                            });
                            return;
                        }
                        const output = data.result;
                        setMetadataAttributes(span, output?.$metadata);
                        const normalizedResponse = {
                            data: output,
                            request: normalizedRequest,
                            requestId: output?.$metadata?.requestId
                        };
                        servicesExtensions.responseHook(normalizedResponse, span);
                    });
                    if (requestMetadata?.isStream && !failed) {
                        return true;
                    }
                    const region = data._sentryRegion;
                    if (region && !region.settled) {
                        void region.promise.then(()=>end());
                        return true;
                    }
                    return false;
                }
            };
            const awsSendChannels = [
                channels.CHANNELS.AWS_SMITHY_CORE_SEND,
                channels.CHANNELS.AWS_SMITHY_CLIENT_SEND,
                channels.CHANNELS.AWS_SDK_SMITHY_CLIENT_SEND
            ];
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:aws-sdk] subscribing to channels "${awsSendChannels.join('", "')}"`);
            core.waitForTracingChannelBinding(()=>{
                for (const channelName of awsSendChannels){
                    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), getSpan, opts);
                }
            });
        }
    };
};
const awsChannelIntegration = core.defineIntegration(_awsChannelIntegration);
exports.awsChannelIntegration = awsChannelIntegration; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/dataloader.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Dataloader";
const MODULE_NAME = "dataloader";
const ORIGIN = "auto.db.orchestrion.dataloader";
const CACHE_GET_OP = "cache.get";
const WRAPPED = /* @__PURE__ */ Symbol("sentry.dataloader.wrapped");
function getSpanName(loader, operation) {
    const name = loader?.name;
    return name ? `${MODULE_NAME}.${operation} ${name}` : `${MODULE_NAME}.${operation}`;
}
function getCacheKey(keyArg) {
    if (Array.isArray(keyArg)) {
        return keyArg.map((key)=>String(key));
    }
    return keyArg == null ? void 0 : [
        String(keyArg)
    ];
}
function makeSpanOptions(loader, operation, keyArg) {
    const isCacheGet = operation === "load" || operation === "loadMany" || operation === "batch";
    return {
        name: getSpanName(loader, operation),
        // Every direct operation (`load`/`loadMany`/`prime`/`clear`/`clearAll`) is a client call, matching
        // the vendored OTel instrumentation. The `batch` runs off a deferred tick with no obvious network
        // peer, so it gets no kind.
        kind: operation === "batch" ? void 0 : core.SPAN_KIND.CLIENT,
        op: isCacheGet ? CACHE_GET_OP : void 0,
        onlyIfParent: true,
        attributes: {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
            [attributes.CACHE_KEY]: isCacheGet ? getCacheKey(keyArg) : void 0
        }
    };
}
const _dataloaderChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log("[orchestrion:dataloader] subscribing to dataloader tracing channels");
            core.waitForTracingChannelBinding(()=>{
                subscribeConstruct();
                subscribeLoad();
                subscribeSimpleOperation(channels.CHANNELS.DATALOADER_LOAD_MANY, "loadMany");
                subscribeSimpleOperation(channels.CHANNELS.DATALOADER_PRIME, "prime");
                subscribeSimpleOperation(channels.CHANNELS.DATALOADER_CLEAR, "clear");
                subscribeSimpleOperation(channels.CHANNELS.DATALOADER_CLEAR_ALL, "clearAll");
            });
        }
    };
};
function subscribeConstruct() {
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.DATALOADER_CONSTRUCT).start.subscribe((message)=>{
        const data = message;
        const batchLoadFn = data.arguments[0];
        if (typeof batchLoadFn !== "function" || batchLoadFn[WRAPPED]) {
            return;
        }
        const original = batchLoadFn;
        const wrapped = function(...args) {
            return core.startSpan({
                ...makeSpanOptions(this, "batch", args[0]),
                links: this._batch?.spanLinks
            }, ()=>original.apply(this, args));
        };
        wrapped[WRAPPED] = true;
        data.arguments[0] = wrapped;
    });
}
function subscribeLoad() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.DATALOADER_LOAD);
    tracingChannel.bindTracingChannelToSpan(channel, (data)=>startInactiveSpanFor(data.self, "load", data.arguments[0]), {
        requiresParentSpan: true
    });
    channel.end.subscribe((message)=>{
        const data = message;
        const span = data._sentrySpan;
        const batch = data.self?._batch;
        if (span && batch && span.isRecording()) {
            (batch.spanLinks ?? (batch.spanLinks = [])).push({
                context: span.spanContext()
            });
        }
    });
}
function subscribeSimpleOperation(channelName, operation) {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), (data)=>startInactiveSpanFor(data.self, operation, data.arguments[0]), {
        requiresParentSpan: true
    });
}
function startInactiveSpanFor(loader, operation, keyArg) {
    return core.startInactiveSpan(makeSpanOptions(loader, operation, keyArg));
}
const dataloaderChannelIntegration = core.defineIntegration(_dataloaderChannelIntegration);
exports.dataloaderChannelIntegration = dataloaderChannelIntegration; //# sourceMappingURL=dataloader.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/generic-pool.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "GenericPool";
const _genericPoolChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>instrumentGenericPool());
        }
    };
};
const genericPoolChannelIntegration = core.defineIntegration(_genericPoolChannelIntegration);
function instrumentGenericPool() {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.GENERIC_POOL_ACQUIRE), ()=>core.startInactiveSpan({
            name: "generic-pool.acquire",
            attributes: {
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.generic_pool"
            }
        }));
}
exports.genericPoolChannelIntegration = genericPoolChannelIntegration; //# sourceMappingURL=generic-pool.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/google-genai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Google_GenAI";
const ORIGIN = "auto.ai.orchestrion.google_genai";
const INSTRUMENTED_CHANNELS = [
    {
        channel: channels.CHANNELS.GOOGLE_GENAI_GENERATE_CONTENT,
        operation: "generate_content"
    },
    {
        channel: channels.CHANNELS.GOOGLE_GENAI_EMBED_CONTENT,
        operation: "embeddings"
    },
    {
        channel: channels.CHANNELS.GOOGLE_GENAI_CHAT,
        operation: "chat"
    }
];
let subscribed = false;
const _googleGenAIChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            core.waitForTracingChannelBinding(()=>{
                for (const { channel, operation } of INSTRUMENTED_CHANNELS){
                    debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:google-genai] subscribing to channel "${channel}"`);
                    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channel), (data)=>createGenAiSpan(data, operation, options), {
                        beforeSpanEnd: (span, data)=>{
                            if (operation !== "embeddings") {
                                core.addGoogleGenAIResponseAttributes(span, data.result, core.resolveAIRecordingOptions(options).recordOutputs);
                            }
                        },
                        deferSpanEnd: ({ span, data })=>wrapStreamResult(span, data, options)
                    });
                }
            });
        }
    };
};
function createGenAiSpan(data, operation, options) {
    if (core._INTERNAL_shouldSkipAiProviderWrapping(INTEGRATION_NAME)) {
        return void 0;
    }
    if (operation !== "chat") {
        const activeSpan = core.getActiveSpan();
        if (activeSpan) {
            const { op, origin } = core.spanToJSON(activeSpan);
            if (origin === ORIGIN && op === "gen_ai.chat") {
                return void 0;
            }
        }
    }
    const args = data.arguments ?? [];
    const params = args[0];
    const { recordInputs } = core.resolveAIRecordingOptions(options);
    const enableTruncation = core.shouldEnableTruncation(options.enableTruncation);
    const attributes = core.extractGoogleGenAIRequestAttributes(operation, params, data.self);
    const model = attributes[core.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
    attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = ORIGIN;
    const span = core.startInactiveSpan({
        name: `${operation} ${model}`,
        op: `gen_ai.${operation}`,
        attributes
    });
    if (recordInputs && params) {
        core.addGoogleGenAIRequestAttributes(span, params, operation, enableTruncation);
    }
    return span;
}
function isAsyncIterable(value) {
    return !!value && typeof value[Symbol.asyncIterator] === "function";
}
function wrapStreamResult(span, data, options) {
    const result = data.result;
    if (!isAsyncIterable(result)) {
        return false;
    }
    const { recordOutputs } = core.resolveAIRecordingOptions(options);
    const iterate = result[Symbol.asyncIterator].bind(result);
    const instrumented = core.instrumentGoogleGenAIStream({
        [Symbol.asyncIterator]: iterate
    }, span, recordOutputs ?? false);
    result[Symbol.asyncIterator] = ()=>instrumented;
    return true;
}
const googleGenAIChannelIntegration = core.defineIntegration(_googleGenAIChannelIntegration);
exports.googleGenAIChannelIntegration = googleGenAIChannelIntegration; //# sourceMappingURL=google-genai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/constants.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const ORIGIN = "auto.graphql.diagnostic_channel";
const SPAN_NAME_PARSE = "graphql.parse";
const SPAN_NAME_VALIDATE = "graphql.validate";
const SPAN_NAME_EXECUTE = "graphql.execute";
const SPAN_NAME_RESOLVE = "graphql.resolve";
const GRAPHQL_FIELD_NAME = "graphql.field.name";
const GRAPHQL_FIELD_PATH = "graphql.field.path";
const GRAPHQL_FIELD_TYPE = "graphql.field.type";
const GRAPHQL_PARENT_NAME = "graphql.parent.name";
const GRAPHQL_DATA_SYMBOL = /* @__PURE__ */ Symbol.for("opentelemetry.graphql_data");
const GRAPHQL_PATCHED_SYMBOL = /* @__PURE__ */ Symbol.for("opentelemetry.patched");
exports.GRAPHQL_DATA_SYMBOL = GRAPHQL_DATA_SYMBOL;
exports.GRAPHQL_FIELD_NAME = GRAPHQL_FIELD_NAME;
exports.GRAPHQL_FIELD_PATH = GRAPHQL_FIELD_PATH;
exports.GRAPHQL_FIELD_TYPE = GRAPHQL_FIELD_TYPE;
exports.GRAPHQL_PARENT_NAME = GRAPHQL_PARENT_NAME;
exports.GRAPHQL_PATCHED_SYMBOL = GRAPHQL_PATCHED_SYMBOL;
exports.ORIGIN = ORIGIN;
exports.SPAN_NAME_EXECUTE = SPAN_NAME_EXECUTE;
exports.SPAN_NAME_PARSE = SPAN_NAME_PARSE;
exports.SPAN_NAME_RESOLVE = SPAN_NAME_RESOLVE;
exports.SPAN_NAME_VALIDATE = SPAN_NAME_VALIDATE; //# sourceMappingURL=constants.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/resolvers.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const op = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/op.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/constants.js [instrumentation] (ecmascript)");
function isPromise(value) {
    return typeof value?.then === "function";
}
function wrapFields(type, getConfig) {
    if (!type || type[constants.GRAPHQL_PATCHED_SYMBOL]) {
        return;
    }
    type[constants.GRAPHQL_PATCHED_SYMBOL] = true;
    const fields = type.getFields();
    Object.keys(fields).forEach((key)=>{
        const field = fields[key];
        if (!field) {
            return;
        }
        if (field.resolve) {
            field.resolve = wrapFieldResolver(getConfig, field.resolve);
        }
        if (field.type) {
            for (const unwrappedType of unwrapType(field.type)){
                wrapFields(unwrappedType, getConfig);
            }
        }
    });
}
function wrapFieldResolver(getConfig, fieldResolver, isDefaultResolver = false) {
    if (typeof fieldResolver !== "function" || fieldResolver[constants.GRAPHQL_PATCHED_SYMBOL]) {
        return fieldResolver;
    }
    function wrappedFieldResolver(source, args, rawContextValue, info) {
        if (!fieldResolver) {
            return void 0;
        }
        const contextValue = rawContextValue ?? {};
        const config = getConfig();
        if (config.ignoreTrivialResolveSpans && isDefaultResolver && (core.isObjectLike(source) || typeof source === "function")) {
            const property = source[info.fieldName];
            if (typeof property !== "function") {
                return fieldResolver.call(this, source, args, contextValue, info);
            }
        }
        if (!contextValue[constants.GRAPHQL_DATA_SYMBOL]) {
            return fieldResolver.call(this, source, args, contextValue, info);
        }
        const path = pathToArray(info.path);
        const { field, spanAdded } = createFieldIfNotExists(contextValue, info, path);
        const span = field.span;
        return core.withActiveSpan(span, ()=>{
            try {
                const res = fieldResolver.call(this, source, args, contextValue, info);
                if (isPromise(res)) {
                    return res.then((r)=>{
                        endResolveSpan(span, spanAdded);
                        return r;
                    }, (err)=>{
                        endResolveSpan(span, spanAdded, err);
                        throw err;
                    });
                }
                endResolveSpan(span, spanAdded);
                return res;
            } catch (err) {
                endResolveSpan(span, spanAdded, err);
                throw err;
            }
        });
    }
    wrappedFieldResolver[constants.GRAPHQL_PATCHED_SYMBOL] = true;
    return wrappedFieldResolver;
}
function endResolveSpan(span, shouldEndSpan, error) {
    if (!shouldEndSpan) {
        return;
    }
    if (error) {
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: error.message
        });
    }
    span.end();
}
function createFieldIfNotExists(contextValue, info, path) {
    const existing = getField(contextValue, path);
    if (existing) {
        return {
            field: existing,
            spanAdded: false
        };
    }
    const field = {
        span: createResolverSpan(info, path, getParentFieldSpan(contextValue, path))
    };
    addField(contextValue, path, field);
    return {
        field,
        spanAdded: true
    };
}
function createResolverSpan(info, path, parentSpan) {
    const attributes = {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.ORIGIN,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op.WEB_SERVER_GRAPHQL_SPAN_OP,
        [constants.GRAPHQL_FIELD_NAME]: info.fieldName,
        [constants.GRAPHQL_FIELD_PATH]: path.join("."),
        [constants.GRAPHQL_FIELD_TYPE]: info.returnType.toString(),
        [constants.GRAPHQL_PARENT_NAME]: info.parentType.name
    };
    return core.startInactiveSpan({
        name: `${constants.SPAN_NAME_RESOLVE} ${path.join(".")}`,
        attributes,
        parentSpan
    });
}
function addField(contextValue, path, field) {
    const data = contextValue[constants.GRAPHQL_DATA_SYMBOL];
    if (data) {
        data.fields[path.join(".")] = field;
    }
}
function getField(contextValue, path) {
    return contextValue[constants.GRAPHQL_DATA_SYMBOL]?.fields[path.join(".")];
}
function getParentFieldSpan(contextValue, path) {
    for(let i = path.length - 1; i > 0; i--){
        const field = getField(contextValue, path.slice(0, i));
        if (field) {
            return field.span;
        }
    }
    return contextValue[constants.GRAPHQL_DATA_SYMBOL]?.span;
}
function pathToArray(path) {
    const flattened = [];
    let curr = path;
    while(curr){
        flattened.push(String(curr.key));
        curr = curr.prev;
    }
    return flattened.reverse();
}
function unwrapType(type) {
    if ("ofType" in type && type.ofType) {
        return unwrapType(type.ofType);
    }
    if (isGraphQLUnionType(type)) {
        return type.getTypes();
    }
    if (isGraphQLObjectType(type)) {
        return [
            type
        ];
    }
    return [];
}
function isGraphQLUnionType(type) {
    return "getTypes" in type && typeof type.getTypes === "function";
}
function isGraphQLObjectType(type) {
    return "getFields" in type && typeof type.getFields === "function";
}
function getOperation(document, operationName) {
    const definitions = document?.definitions;
    if (!definitions || !Array.isArray(definitions)) {
        return void 0;
    }
    const isOperation = (def)=>!!def?.operation && [
            "query",
            "mutation",
            "subscription"
        ].indexOf(def.operation) !== -1;
    if (operationName) {
        return definitions.filter(isOperation).find((def)=>operationName === def?.name?.value);
    }
    return definitions.find(isOperation);
}
exports.getOperation = getOperation;
exports.wrapFieldResolver = wrapFieldResolver;
exports.wrapFields = wrapFields; //# sourceMappingURL=resolvers.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/spans.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const op = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/op.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const utils = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/graphql/utils.js [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/constants.js [instrumentation] (ecmascript)");
const resolvers = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/resolvers.js [instrumentation] (ecmascript)");
const BASE_ATTRIBUTES = {
    [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.ORIGIN,
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op.WEB_SERVER_GRAPHQL_SPAN_OP
};
function startParseSpan() {
    return core.startInactiveSpan({
        name: constants.SPAN_NAME_PARSE,
        attributes: {
            ...BASE_ATTRIBUTES
        }
    });
}
function startValidateSpan(documentAST) {
    return core.startInactiveSpan({
        name: constants.SPAN_NAME_VALIDATE,
        attributes: {
            ...BASE_ATTRIBUTES,
            [attributes.GRAPHQL_DOCUMENT]: utils.collectGraphqlDocument(documentAST)
        }
    });
}
function finalizeValidateSpan(span, result) {
    if (Array.isArray(result) && result.length > 0) {
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: "invalid_argument"
        });
    }
}
function normalizeExecuteArgs(argsArray) {
    if (argsArray.length >= 2) {
        return {
            schema: argsArray[0 /* SCHEMA */ ],
            document: argsArray[1 /* DOCUMENT */ ],
            contextValue: argsArray[3 /* CONTEXT_VALUE */ ] ?? {},
            operationName: argsArray[5 /* OPERATION_NAME */ ],
            fieldResolver: argsArray[6 /* FIELD_RESOLVER */ ],
            writeBack: (contextValue, fieldResolver)=>{
                argsArray[3 /* CONTEXT_VALUE */ ] = contextValue;
                argsArray[6 /* FIELD_RESOLVER */ ] = fieldResolver;
            }
        };
    }
    const obj = argsArray[0] ?? {};
    return {
        schema: obj.schema,
        document: obj.document,
        contextValue: obj.contextValue ?? {},
        operationName: obj.operationName,
        fieldResolver: obj.fieldResolver,
        writeBack: (contextValue, fieldResolver)=>{
            obj.contextValue = contextValue;
            obj.fieldResolver = fieldResolver;
        }
    };
}
function startExecuteSpan(argsArray, self, config, getConfig) {
    const args = normalizeExecuteArgs(argsArray);
    const { schema, document } = args;
    let { contextValue, fieldResolver } = args;
    const alreadyInstrumented = !!contextValue[constants.GRAPHQL_DATA_SYMBOL];
    if (!config.ignoreResolveSpans && !alreadyInstrumented) {
        const isUsingDefaultResolver = fieldResolver == null;
        const defaultFieldResolver = self?.defaultFieldResolver;
        const fieldResolverForExecute = fieldResolver ?? defaultFieldResolver;
        if (fieldResolverForExecute) {
            fieldResolver = resolvers.wrapFieldResolver(getConfig, fieldResolverForExecute, isUsingDefaultResolver);
        }
        if (schema) {
            resolvers.wrapFields(schema.getQueryType(), getConfig);
            resolvers.wrapFields(schema.getMutationType(), getConfig);
        }
    }
    const operation = resolvers.getOperation(document, args.operationName);
    const operationType = operation?.operation;
    const operationName = operation?.name?.value ?? args.operationName ?? void 0;
    const span = core.startInactiveSpan({
        name: utils.getOperationSpanName(operationType, operationName || void 0, constants.SPAN_NAME_EXECUTE),
        attributes: {
            ...BASE_ATTRIBUTES,
            [attributes.GRAPHQL_OPERATION_TYPE]: operationType,
            [attributes.GRAPHQL_OPERATION_NAME]: operationName || void 0,
            [attributes.GRAPHQL_DOCUMENT]: utils.collectGraphqlDocument(document)
        }
    });
    if (config.useOperationNameForRootSpan && operationType) {
        utils.renameRootSpanWithOperation(span, operationType, operationName || void 0);
    }
    contextValue[constants.GRAPHQL_DATA_SYMBOL] = {
        source: document,
        span,
        fields: {}
    };
    args.writeBack(contextValue, fieldResolver);
    return span;
}
function finalizeExecuteSpan(span, result) {
    if (utils.hasResultErrors(result)) {
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: "internal_error"
        });
    }
}
exports.finalizeExecuteSpan = finalizeExecuteSpan;
exports.finalizeValidateSpan = finalizeValidateSpan;
exports.startExecuteSpan = startExecuteSpan;
exports.startParseSpan = startParseSpan;
exports.startValidateSpan = startValidateSpan; //# sourceMappingURL=spans.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/graphql/index.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
const spans = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/spans.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Graphql";
function getOptionsWithDefaults(options) {
    return {
        ignoreResolveSpans: options.ignoreResolveSpans !== false,
        ignoreTrivialResolveSpans: options.ignoreTrivialResolveSpans !== false,
        useOperationNameForRootSpan: options.useOperationNameForRootSpan !== false
    };
}
function safe(fn) {
    try {
        return fn();
    } catch (error) {
        debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:graphql] error building span", error);
        return void 0;
    }
}
const _graphqlChannelIntegration = (options = {})=>{
    const config = getOptionsWithDefaults(options);
    const getConfig = ()=>config;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.GRAPHQL_PARSE), ()=>safe(()=>spans.startParseSpan()));
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.GRAPHQL_VALIDATE), (data)=>safe(()=>spans.startValidateSpan(data.arguments[1])), {
                    beforeSpanEnd: (span, data)=>void safe(()=>spans.finalizeValidateSpan(span, data.result))
                });
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.GRAPHQL_EXECUTE), (data)=>safe(()=>spans.startExecuteSpan(data.arguments, data.self, config, getConfig)), {
                    beforeSpanEnd: (span, data)=>void safe(()=>spans.finalizeExecuteSpan(span, data.result))
                });
            });
        }
    };
};
const graphqlChannelIntegration = core.defineIntegration(_graphqlChannelIntegration);
const graphqlDiagnosticsChannelIntegration = (options)=>{
    const orchestrion = graphqlChannelIntegration(options);
    return core.extendIntegration(index.graphqlIntegration(options), {
        name: INTEGRATION_NAME,
        setupOnce: ()=>orchestrion.setupOnce?.()
    });
};
exports.graphqlChannelIntegration = graphqlChannelIntegration;
exports.graphqlDiagnosticsChannelIntegration = graphqlDiagnosticsChannelIntegration; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/hapi-types.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const LIFECYCLE_EXT_POINTS = [
    "onPreAuth",
    "onCredentials",
    "onPostAuth",
    "onPreHandler",
    "onPostHandler",
    "onPreResponse",
    "onRequest"
];
const handlerPatched = /* @__PURE__ */ Symbol("hapi-handler-patched");
const HapiLayerType = {
    ROUTER: "router",
    PLUGIN: "plugin",
    EXT: "server.ext"
};
const HapiLifecycleMethodNames = new Set(LIFECYCLE_EXT_POINTS);
var AttributeNames = /* @__PURE__ */ ((AttributeNames2)=>{
    AttributeNames2["HAPI_TYPE"] = "hapi.type";
    AttributeNames2["PLUGIN_NAME"] = "hapi.plugin.name";
    AttributeNames2["EXT_TYPE"] = "server.ext.type";
    return AttributeNames2;
})(AttributeNames || {});
exports.AttributeNames = AttributeNames;
exports.HapiLayerType = HapiLayerType;
exports.HapiLifecycleMethodNames = HapiLifecycleMethodNames;
exports.handlerPatched = handlerPatched; //# sourceMappingURL=hapi-types.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/hapi-utils.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const hapiTypes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/hapi-types.js [instrumentation] (ecmascript)");
function setHttpServerSpanRouteAttribute(route) {
    const activeSpan = core.getActiveSpan();
    if (!activeSpan) {
        return;
    }
    const rootSpan = core.getRootSpan(activeSpan);
    if (!rootSpan) {
        return;
    }
    if (core.spanToJSON(rootSpan).data[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] !== "http.server") {
        return;
    }
    rootSpan.setAttribute(attributes.HTTP_ROUTE, route);
}
const isLifecycleExtType = (variableToCheck)=>{
    return typeof variableToCheck === "string" && hapiTypes.HapiLifecycleMethodNames.has(variableToCheck);
};
const isLifecycleExtEventObj = (variableToCheck)=>{
    const event = variableToCheck?.type;
    return event !== void 0 && isLifecycleExtType(event);
};
const isDirectExtInput = (variableToCheck)=>{
    return Array.isArray(variableToCheck) && variableToCheck.length <= 3 && isLifecycleExtType(variableToCheck[0]) && typeof variableToCheck[1] === "function";
};
const isPatchableExtMethod = (variableToCheck)=>{
    return !Array.isArray(variableToCheck);
};
const getRouteMetadata = (route, pluginName)=>{
    const attributes$1 = {
        [attributes.HTTP_ROUTE]: route.path,
        // eslint-disable-next-line typescript/no-deprecated -- TODO(v11): Replace deprecated attributes
        [attributes.HTTP_METHOD]: route.method
    };
    let name;
    if (pluginName) {
        attributes$1[hapiTypes.AttributeNames.HAPI_TYPE] = hapiTypes.HapiLayerType.PLUGIN;
        attributes$1[hapiTypes.AttributeNames.PLUGIN_NAME] = pluginName;
        name = `${pluginName}: route - ${route.path}`;
    } else {
        attributes$1[hapiTypes.AttributeNames.HAPI_TYPE] = hapiTypes.HapiLayerType.ROUTER;
        name = `route - ${route.path}`;
    }
    return {
        attributes: attributes$1,
        name
    };
};
const getExtMetadata = (extPoint, pluginName, methodName)=>{
    let baseName = `ext - ${extPoint}`;
    if (methodName && methodName !== "method") {
        baseName = `ext - ${extPoint} - ${methodName}`;
    }
    if (pluginName) {
        return {
            attributes: {
                [hapiTypes.AttributeNames.EXT_TYPE]: extPoint,
                [hapiTypes.AttributeNames.HAPI_TYPE]: hapiTypes.HapiLayerType.EXT,
                [hapiTypes.AttributeNames.PLUGIN_NAME]: pluginName
            },
            name: `${pluginName}: ${baseName}`
        };
    }
    return {
        attributes: {
            [hapiTypes.AttributeNames.EXT_TYPE]: extPoint,
            [hapiTypes.AttributeNames.HAPI_TYPE]: hapiTypes.HapiLayerType.EXT
        },
        name: baseName
    };
};
function startMetadataSpan(metadata, original) {
    return core.startSpan({
        name: metadata.name,
        op: `${metadata.attributes[hapiTypes.AttributeNames.HAPI_TYPE]}.hapi`,
        attributes: {
            ...metadata.attributes,
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.orchestrion.hapi"
        }
    }, original);
}
function wrapRouteHandler(route, pluginName) {
    if (route[hapiTypes.handlerPatched] === true) return route;
    route[hapiTypes.handlerPatched] = true;
    const wrapHandler = (oldHandler)=>{
        return function(...params) {
            if (!core.getActiveSpan()) {
                return oldHandler.call(this, ...params);
            }
            setHttpServerSpanRouteAttribute(route.path);
            const metadata = getRouteMetadata(route, pluginName);
            return startMetadataSpan(metadata, ()=>oldHandler.call(this, ...params));
        };
    };
    if (typeof route.handler === "function") {
        route.handler = wrapHandler(route.handler);
    } else if (typeof route.options === "function") {
        const oldOptions = route.options;
        route.options = function(server) {
            const options = oldOptions(server);
            if (typeof options.handler === "function") {
                options.handler = wrapHandler(options.handler);
            }
            return options;
        };
    } else if (typeof route.options?.handler === "function") {
        route.options.handler = wrapHandler(route.options.handler);
    }
    return route;
}
function wrapExtMethods(method, extPoint, pluginName) {
    if (Array.isArray(method)) {
        for(let i = 0; i < method.length; i++){
            method[i] = wrapExtMethods(method[i], extPoint);
        }
        return method;
    } else if (isPatchableExtMethod(method)) {
        if (method[hapiTypes.handlerPatched] === true) return method;
        method[hapiTypes.handlerPatched] = true;
        const newHandler = function(...params) {
            if (!core.getActiveSpan()) {
                return method.apply(this, params);
            }
            const metadata = getExtMetadata(extPoint, pluginName, method.name);
            return startMetadataSpan(metadata, ()=>method.apply(void 0, params));
        };
        newHandler[hapiTypes.handlerPatched] = true;
        return newHandler;
    }
    return method;
}
function wrapRouteArguments(args, pluginName) {
    const route = args[0];
    if (Array.isArray(route)) {
        for(let i = 0; i < route.length; i++){
            route[i] = wrapRouteHandler(route[i], pluginName);
        }
    } else {
        args[0] = wrapRouteHandler(route, pluginName);
    }
}
function wrapExtArguments(args, pluginName) {
    if (Array.isArray(args[0])) {
        const eventsList = args[0];
        for(let i = 0; i < eventsList.length; i++){
            const eventObj = eventsList[i];
            if (isLifecycleExtType(eventObj.type)) {
                const lifecycleEventObj = eventObj;
                const handler = wrapExtMethods(lifecycleEventObj.method, eventObj.type, pluginName);
                lifecycleEventObj.method = handler;
                eventsList[i] = lifecycleEventObj;
            }
        }
        return;
    } else if (isDirectExtInput(args)) {
        const extInput = args;
        const method = extInput[1];
        const handler = wrapExtMethods(method, extInput[0], pluginName);
        args[1] = handler;
        return;
    } else if (isLifecycleExtEventObj(args[0])) {
        const lifecycleEventObj = args[0];
        const handler = wrapExtMethods(lifecycleEventObj.method, lifecycleEventObj.type, pluginName);
        lifecycleEventObj.method = handler;
    }
}
exports.getExtMetadata = getExtMetadata;
exports.getRouteMetadata = getRouteMetadata;
exports.wrapExtArguments = wrapExtArguments;
exports.wrapRouteArguments = wrapRouteArguments; //# sourceMappingURL=hapi-utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/hapi.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const hapiUtils = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/hapi-utils.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Hapi";
const _hapiChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:hapi] subscribing to channels "${channels.CHANNELS.HAPI_ROUTE}" / "${channels.CHANNELS.HAPI_EXT}"`);
            diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.HAPI_ROUTE).subscribe({
                start (rawCtx) {
                    const ctx = rawCtx;
                    hapiUtils.wrapRouteArguments(ctx.arguments, ctx.self?.realm?.plugin);
                },
                end () {},
                asyncStart () {},
                asyncEnd () {},
                error () {}
            });
            diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.HAPI_EXT).subscribe({
                start (rawCtx) {
                    const ctx = rawCtx;
                    hapiUtils.wrapExtArguments(ctx.arguments, ctx.self?.realm?.plugin);
                },
                end () {},
                asyncStart () {},
                asyncEnd () {},
                error () {}
            });
        }
    };
};
const hapiChannelIntegration = core.defineIntegration(_hapiChannelIntegration);
exports.hapiChannelIntegration = hapiChannelIntegration; //# sourceMappingURL=hapi.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/koa.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Koa";
const ORIGIN = "auto.http.orchestrion.koa";
const LAYER_TYPE = {
    ROUTER: "router",
    MIDDLEWARE: "middleware"
};
const kLayerPatched = /* @__PURE__ */ Symbol("sentry.koa.layer-patched");
let subscribed = false;
const _koaChannelIntegration = (options = {})=>{
    const ignoreLayersType = options.ignoreLayersType ?? [];
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:koa] subscribing to channel "${channels.CHANNELS.KOA_USE}"`);
            diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.KOA_USE).subscribe({
                start (rawCtx) {
                    handleUse(rawCtx, ignoreLayersType);
                },
                end () {},
                asyncStart () {},
                asyncEnd () {},
                error () {}
            });
        }
    };
};
function handleUse(ctx, ignoreLayersType) {
    const middleware = ctx.arguments[0];
    if (typeof middleware === "function") {
        ctx.arguments[0] = patchUse(middleware, ignoreLayersType);
    }
}
function patchUse(middleware, ignoreLayersType) {
    return middleware.router ? patchRouterDispatch(middleware, ignoreLayersType) : patchLayer(middleware, false, ignoreLayersType);
}
function patchRouterDispatch(dispatchLayer, ignoreLayersType) {
    const router = dispatchLayer.router;
    const routesStack = router?.stack ?? [];
    for (const pathLayer of routesStack){
        const path = pathLayer.path;
        const pathStack = pathLayer.stack;
        pathStack.forEach((routedMiddleware, j)=>{
            pathStack[j] = patchLayer(routedMiddleware, true, ignoreLayersType, path);
        });
    }
    return dispatchLayer;
}
function patchLayer(middlewareLayer, isRouter, ignoreLayersType, layerPath) {
    const layerType = isRouter ? LAYER_TYPE.ROUTER : LAYER_TYPE.MIDDLEWARE;
    if (middlewareLayer[kLayerPatched] === true || ignoreLayersType.includes(layerType)) {
        return middlewareLayer;
    }
    if (middlewareLayer.constructor.name === "GeneratorFunction" || middlewareLayer.constructor.name === "AsyncGeneratorFunction") {
        return middlewareLayer;
    }
    middlewareLayer[kLayerPatched] = true;
    return (context, next)=>{
        if (!core.getActiveSpan()) {
            return middlewareLayer(context, next);
        }
        const metadata = getMiddlewareMetadata(context, middlewareLayer, isRouter, layerPath);
        if (context._matchedRoute) {
            setHttpServerSpanRouteAttribute(context._matchedRoute.toString());
        }
        const koaName = metadata.attributes[attributes.KOA_NAME];
        const name = typeof koaName === "string" ? koaName || "< unknown >" : metadata.name;
        return core.startSpan({
            name,
            op: `${layerType}.koa`,
            attributes: {
                ...metadata.attributes,
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
            }
        }, ()=>{
            const route = metadata.attributes[attributes.HTTP_ROUTE];
            if (core.getIsolationScope() === core.getDefaultIsolationScope()) {
                debugBuild.DEBUG_BUILD && core.debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
            } else if (route) {
                const method = context.request?.method?.toUpperCase() || "GET";
                core.getIsolationScope().setTransactionName(`${method} ${route}`);
            }
            return middlewareLayer(context, next);
        });
    };
}
function getMiddlewareMetadata(context, layer, isRouter, layerPath) {
    if (isRouter) {
        return {
            attributes: {
                // oxlint-disable-next-line typescript/no-deprecated
                [attributes.KOA_NAME]: layerPath?.toString(),
                // TODO(v11): remove, replaced by http.route
                [attributes.KOA_TYPE]: LAYER_TYPE.ROUTER,
                [attributes.HTTP_ROUTE]: layerPath?.toString()
            },
            name: context._matchedRouteName || `router - ${layerPath}`
        };
    }
    return {
        attributes: {
            // oxlint-disable-next-line typescript/no-deprecated
            [attributes.KOA_NAME]: layer.name || "middleware",
            // TODO(v11): remove, replaced by code.function.name
            [attributes.KOA_TYPE]: LAYER_TYPE.MIDDLEWARE,
            [attributes.CODE_FUNCTION_NAME]: layer.name || "middleware"
        },
        name: `middleware - ${layer.name}`
    };
}
function setHttpServerSpanRouteAttribute(route) {
    const activeSpan = core.getActiveSpan();
    if (!activeSpan) {
        return;
    }
    const rootSpan = core.getRootSpan(activeSpan);
    if (!rootSpan) {
        return;
    }
    if (core.spanToJSON(rootSpan).data[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] !== "http.server") {
        return;
    }
    rootSpan.setAttribute(attributes.HTTP_ROUTE, route);
}
const koaChannelIntegration = core.defineIntegration(_koaChannelIntegration);
exports.koaChannelIntegration = koaChannelIntegration; //# sourceMappingURL=koa.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/ioredis.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const redisStatementSerializer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/redis/redis-statement-serializer.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "IORedis";
const ORIGIN = "auto.db.orchestrion.redis";
const ATTR_DB_CONNECTION_STRING = "db.connection_string";
function getConnectionOptions(self) {
    return {
        host: self?.options?.host,
        port: self?.options?.port
    };
}
function connectionAttributes(host, port) {
    return {
        [attributes.DB_SYSTEM]: "redis",
        [ATTR_DB_CONNECTION_STRING]: `redis://${host}:${port}`,
        [attributes.NET_PEER_NAME]: host,
        [attributes.NET_PEER_PORT]: port,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
    };
}
const tracedCommands = /* @__PURE__ */ new WeakSet();
function startIORedisCommandSpan(data) {
    const command = data.arguments?.[0];
    if (!command || typeof command !== "object") {
        return void 0;
    }
    if (tracedCommands.has(command)) {
        return void 0;
    }
    tracedCommands.add(command);
    const { host, port } = getConnectionOptions(data.self);
    const statement = redisStatementSerializer.defaultDbStatementSerializer(command.name, command.args ?? []);
    return core.startInactiveSpan({
        name: statement,
        op: "db",
        attributes: {
            ...connectionAttributes(host, port),
            [attributes.DB_STATEMENT]: statement
        }
    });
}
const _ioredisChannelIntegration = (options = {})=>{
    const responseHook = options.responseHook;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:ioredis] subscribing to "${channels.CHANNELS.IOREDIS_COMMAND}"/"${channels.CHANNELS.IOREDIS_CONNECT}"`);
            const commandChannel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.IOREDIS_COMMAND);
            const connectChannel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.IOREDIS_CONNECT);
            core.waitForTracingChannelBinding(()=>{
                tracingChannel.bindTracingChannelToSpan(commandChannel, startIORedisCommandSpan, {
                    // ioredis' `requireParentSpan` default: only create a span under an active span.
                    requiresParentSpan: true,
                    beforeSpanEnd (span, data) {
                        if ("error" in data || !responseHook) {
                            return;
                        }
                        const command = data.arguments?.[0];
                        if (command) {
                            runResponseHook(responseHook, span, command, data.result);
                        }
                    }
                });
                tracingChannel.bindTracingChannelToSpan(connectChannel, (data)=>{
                    const { host, port } = getConnectionOptions(data.self);
                    return core.startInactiveSpan({
                        name: "connect",
                        op: "db",
                        attributes: {
                            ...connectionAttributes(host, port),
                            [attributes.DB_STATEMENT]: "connect"
                        }
                    });
                }, {
                    requiresParentSpan: true
                });
            });
        }
    };
};
function runResponseHook(hook, span, command, result) {
    try {
        hook(span, command.name, command.args, result);
    } catch  {}
}
const ioredisChannelIntegration = core.defineIntegration(_ioredisChannelIntegration);
exports.ioredisChannelIntegration = ioredisChannelIntegration;
exports.startIORedisCommandSpan = startIORedisCommandSpan; //# sourceMappingURL=ioredis.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/semconv.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const ATTR_MESSAGING_DESTINATION_PARTITION_ID = "messaging.destination.partition.id";
const ATTR_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message.key";
const ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE = "messaging.kafka.message.tombstone";
const ATTR_MESSAGING_KAFKA_OFFSET = "messaging.kafka.offset";
const MESSAGING_OPERATION_TYPE_VALUE_PROCESS = "process";
const MESSAGING_OPERATION_TYPE_VALUE_RECEIVE = "receive";
const MESSAGING_OPERATION_TYPE_VALUE_SEND = "send";
const MESSAGING_SYSTEM_VALUE_KAFKA = "kafka";
const ERROR_TYPE_VALUE_OTHER = "_OTHER";
exports.ATTR_MESSAGING_DESTINATION_PARTITION_ID = ATTR_MESSAGING_DESTINATION_PARTITION_ID;
exports.ATTR_MESSAGING_KAFKA_MESSAGE_KEY = ATTR_MESSAGING_KAFKA_MESSAGE_KEY;
exports.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE = ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE;
exports.ATTR_MESSAGING_KAFKA_OFFSET = ATTR_MESSAGING_KAFKA_OFFSET;
exports.ERROR_TYPE_VALUE_OTHER = ERROR_TYPE_VALUE_OTHER;
exports.MESSAGING_OPERATION_TYPE_VALUE_PROCESS = MESSAGING_OPERATION_TYPE_VALUE_PROCESS;
exports.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE = MESSAGING_OPERATION_TYPE_VALUE_RECEIVE;
exports.MESSAGING_OPERATION_TYPE_VALUE_SEND = MESSAGING_OPERATION_TYPE_VALUE_SEND;
exports.MESSAGING_SYSTEM_VALUE_KAFKA = MESSAGING_SYSTEM_VALUE_KAFKA; //# sourceMappingURL=semconv.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/spans.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const semconv = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/semconv.js [instrumentation] (ecmascript)");
const PRODUCER_ORIGIN = "auto.kafkajs.orchestrion.producer";
const CONSUMER_ORIGIN = "auto.kafkajs.orchestrion.consumer";
const TRACE_FLAG_SAMPLED = 1;
const TRACE_FLAG_NONE = 0;
function getHeaderAsString(headers, key) {
    const value = headers?.[key];
    if (value == null) {
        return void 0;
    }
    return Array.isArray(value) ? value[0]?.toString() : value.toString();
}
function getLinksFromHeaders(headers) {
    const sentryTrace = getHeaderAsString(headers, "sentry-trace");
    if (!sentryTrace) {
        return void 0;
    }
    const { traceId, parentSpanId, sampled } = core.propagationContextFromHeaders(sentryTrace, getHeaderAsString(headers, "baggage"));
    if (!parentSpanId) {
        return void 0;
    }
    return [
        {
            context: {
                traceId,
                spanId: parentSpanId,
                isRemote: true,
                traceFlags: sampled ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
            }
        }
    ];
}
function startConsumerSpan({ topic, message, operationType, links, attributes: attributes$1 }) {
    const operationName = operationType === semconv.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE ? "poll" : operationType;
    return core.startInactiveSpan({
        name: `${operationName} ${topic}`,
        // todo(v11): Use https://getsentry.github.io/sentry-conventions/ops/#messaging
        op: "message",
        kind: operationType === semconv.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE ? core.SPAN_KIND.CLIENT : core.SPAN_KIND.CONSUMER,
        links,
        attributes: {
            ...attributes$1,
            [attributes.MESSAGING_SYSTEM]: semconv.MESSAGING_SYSTEM_VALUE_KAFKA,
            [attributes.MESSAGING_DESTINATION_NAME]: topic,
            [attributes.MESSAGING_OPERATION_TYPE]: operationType,
            [attributes.MESSAGING_OPERATION_NAME]: operationName,
            [semconv.ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: message?.key ? String(message.key) : void 0,
            [semconv.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]: message?.key && message.value === null ? true : void 0,
            [semconv.ATTR_MESSAGING_KAFKA_OFFSET]: message?.offset,
            // Mirror the upstream behavior of only tagging per-message processing spans (not the batch
            // receiving span, which carries no message) with the auto origin.
            ...message ? {
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: CONSUMER_ORIGIN
            } : {}
        }
    });
}
function startProducerSpan(topic, message) {
    const span = core.startInactiveSpan({
        name: `send ${topic}`,
        op: "message",
        kind: core.SPAN_KIND.PRODUCER,
        attributes: {
            [attributes.MESSAGING_SYSTEM]: semconv.MESSAGING_SYSTEM_VALUE_KAFKA,
            [attributes.MESSAGING_DESTINATION_NAME]: topic,
            [semconv.ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: message.key ? String(message.key) : void 0,
            [semconv.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]: message.key && message.value === null ? true : void 0,
            [semconv.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: message.partition !== void 0 ? String(message.partition) : void 0,
            [attributes.MESSAGING_OPERATION_NAME]: "send",
            [attributes.MESSAGING_OPERATION_TYPE]: semconv.MESSAGING_OPERATION_TYPE_VALUE_SEND,
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: PRODUCER_ORIGIN
        }
    });
    message.headers = message.headers ?? {};
    const traceData = core.getTraceData({
        span
    });
    if (traceData["sentry-trace"]) {
        message.headers["sentry-trace"] = traceData["sentry-trace"];
    }
    if (traceData.baggage) {
        message.headers["baggage"] = traceData.baggage;
    }
    return span;
}
function applyErrorToSpans(spans, reason) {
    let errorMessage;
    let errorType = semconv.ERROR_TYPE_VALUE_OTHER;
    if (typeof reason === "string" || reason === void 0) {
        errorMessage = reason;
    } else if (typeof reason === "object" && reason !== null && Object.prototype.hasOwnProperty.call(reason, "message")) {
        errorMessage = reason.message;
        errorType = reason.constructor.name;
    }
    spans.forEach((span)=>{
        span.setAttribute(attributes.ERROR_TYPE, errorType);
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: errorMessage
        });
    });
}
function endSpansOnPromise(spans, promise) {
    return Promise.resolve(promise).catch((reason)=>{
        applyErrorToSpans(spans, reason);
        throw reason;
    }).finally(()=>{
        spans.forEach((span)=>span.end());
    });
}
exports.applyErrorToSpans = applyErrorToSpans;
exports.endSpansOnPromise = endSpansOnPromise;
exports.getHeaderAsString = getHeaderAsString;
exports.getLinksFromHeaders = getLinksFromHeaders;
exports.startConsumerSpan = startConsumerSpan;
exports.startProducerSpan = startProducerSpan; //# sourceMappingURL=spans.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/consumer.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const semconv = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/semconv.js [instrumentation] (ecmascript)");
const spans = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/spans.js [instrumentation] (ecmascript)");
const consumerCallbackWrapped = /* @__PURE__ */ Symbol("sentry-kafkajs-consumer-callback-wrapped");
function isWrappedConsumerCallback(fn) {
    return typeof fn === "function" && fn[consumerCallbackWrapped] === true;
}
function wrapEachMessage(original) {
    const wrapped = function eachMessage(payload) {
        const sentryTrace = spans.getHeaderAsString(payload.message.headers, "sentry-trace");
        const baggage = spans.getHeaderAsString(payload.message.headers, "baggage");
        return core.continueTrace({
            sentryTrace,
            baggage
        }, ()=>{
            const span = spans.startConsumerSpan({
                topic: payload.topic,
                message: payload.message,
                operationType: semconv.MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
                attributes: {
                    [semconv.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.partition)
                }
            });
            const promise = core.withActiveSpan(span, ()=>original.call(this, payload));
            return spans.endSpansOnPromise([
                span
            ], promise);
        });
    };
    wrapped[consumerCallbackWrapped] = true;
    return wrapped;
}
function wrapEachBatch(original) {
    const wrapped = function eachBatch(payload) {
        const receivingSpan = core.startNewTrace(()=>spans.startConsumerSpan({
                topic: payload.batch.topic,
                message: void 0,
                operationType: semconv.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE,
                attributes: {
                    [attributes.MESSAGING_BATCH_MESSAGE_COUNT]: payload.batch.messages.length,
                    [semconv.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
                }
            }));
        return core.withActiveSpan(receivingSpan, ()=>{
            const spans$1 = [
                receivingSpan
            ];
            payload.batch.messages.forEach((message)=>{
                spans$1.push(spans.startConsumerSpan({
                    topic: payload.batch.topic,
                    message,
                    operationType: semconv.MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
                    links: spans.getLinksFromHeaders(message.headers),
                    attributes: {
                        [semconv.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
                    }
                }));
            });
            const promise = original.call(this, payload);
            return spans.endSpansOnPromise(spans$1, promise);
        });
    };
    wrapped[consumerCallbackWrapped] = true;
    return wrapped;
}
exports.isWrappedConsumerCallback = isWrappedConsumerCallback;
exports.wrapEachBatch = wrapEachBatch;
exports.wrapEachMessage = wrapEachMessage; //# sourceMappingURL=consumer.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const consumer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/consumer.js [instrumentation] (ecmascript)");
const spans = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/spans.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Kafka";
function subscribeToProducer() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.KAFKAJS_SEND_BATCH);
    const subscribers = {
        start (ctx) {
            const spans$1 = [];
            (ctx.arguments[0]?.topicMessages ?? []).forEach((topicMessage)=>{
                topicMessage.messages.forEach((message)=>{
                    spans$1.push(spans.startProducerSpan(topicMessage.topic, message));
                });
            });
            ctx._sentrySpans = spans$1;
        },
        error (ctx) {
            if (ctx._sentrySpans) {
                spans.applyErrorToSpans(ctx._sentrySpans, ctx.error);
            }
        },
        asyncEnd (ctx) {
            ctx._sentrySpans?.forEach((span)=>span.end());
        }
    };
    channel.subscribe(subscribers);
}
function subscribeToConsumer() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.KAFKAJS_CONSUMER_RUN);
    const subscribers = {
        start (ctx) {
            const config = ctx.arguments[0];
            if (!config || typeof config !== "object") {
                return;
            }
            if (typeof config.eachMessage === "function" && !consumer.isWrappedConsumerCallback(config.eachMessage)) {
                config.eachMessage = consumer.wrapEachMessage(config.eachMessage);
            }
            if (typeof config.eachBatch === "function" && !consumer.isWrappedConsumerCallback(config.eachBatch)) {
                config.eachBatch = consumer.wrapEachBatch(config.eachBatch);
            }
        }
    };
    channel.subscribe(subscribers);
}
const _kafkajsChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:kafkajs] subscribing to channels "${channels.CHANNELS.KAFKAJS_SEND_BATCH}", "${channels.CHANNELS.KAFKAJS_CONSUMER_RUN}"`);
            subscribeToProducer();
            subscribeToConsumer();
        }
    };
};
const kafkajsChannelIntegration = core.defineIntegration(_kafkajsChannelIntegration);
exports.kafkajsChannelIntegration = kafkajsChannelIntegration; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/knex.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Knex";
const ORIGIN = "auto.db.orchestrion.knex";
const MAX_QUERY_LENGTH = 1021;
const ATTR_DB_SQL_TABLE = "db.sql.table";
const DB_SYSTEM_SQLITE = "sqlite";
const DB_SYSTEM_POSTGRESQL = "postgresql";
const parentSpanSymbol = /* @__PURE__ */ Symbol("sentry.orchestrion.knex.parent-span");
const _knexChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:knex] subscribing to channel "${channels.CHANNELS.KNEX_QUERY}"`);
            core.waitForTracingChannelBinding(()=>{
                subscribeBuilder(channels.CHANNELS.KNEX_QUERY_BUILDER);
                subscribeBuilder(channels.CHANNELS.KNEX_SCHEMA_BUILDER);
                subscribeBuilder(channels.CHANNELS.KNEX_RAW);
                subscribeQuery();
            });
        }
    };
};
function subscribeBuilder(channelName) {
    diagnosticsChannel__namespace.tracingChannel(channelName).end.subscribe((message)=>{
        const builder = message.result;
        if (!builder || typeof builder !== "object" || parentSpanSymbol in builder) {
            return;
        }
        const activeSpan = core.getActiveSpan();
        if (!activeSpan) {
            return;
        }
        Object.defineProperty(builder, parentSpanSymbol, {
            value: activeSpan
        });
    });
}
function subscribeQuery() {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.KNEX_QUERY), (data)=>{
        const runner = data.self;
        const builder = runner?.builder;
        const parentSpan = builder?.[parentSpanSymbol] ?? core.getActiveSpan();
        if (!parentSpan) {
            return void 0;
        }
        const query = data.arguments[0];
        const client = runner?.client;
        const connection = client?.config?.connection;
        const connectionString = connection?.connectionString;
        const table = extractTableName(builder);
        const operation = query?.method;
        const name = connection?.filename || connection?.database || extractDatabaseFromConnectionString(connectionString);
        const attributes$1 = {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
            "knex.version": data.moduleVersion,
            [attributes.DB_SYSTEM]: mapSystem(client?.driverName),
            [ATTR_DB_SQL_TABLE]: table,
            [attributes.DB_OPERATION]: operation,
            [attributes.DB_USER]: connection?.user,
            [attributes.DB_NAME]: name,
            [attributes.NET_PEER_NAME]: connection?.host ?? extractHostFromConnectionString(connectionString),
            [attributes.NET_PEER_PORT]: connection?.port ?? extractPortFromConnectionString(connectionString),
            [attributes.NET_TRANSPORT]: connection?.filename === ":memory:" ? "inproc" : void 0,
            [attributes.DB_STATEMENT]: query?.sql != null ? core.truncate(query.sql, MAX_QUERY_LENGTH) : void 0
        };
        return core.startInactiveSpan({
            name: getName(name, operation, table) ?? "knex.query",
            kind: core.SPAN_KIND.CLIENT,
            op: "db",
            parentSpan,
            attributes: attributes$1
        });
    }, {
        beforeSpanEnd (span, data) {
            if ("error" in data) {
                const message = cleanErrorMessage(data);
                if (message !== void 0) {
                    span.setStatus({
                        code: core.SPAN_STATUS_ERROR,
                        message
                    });
                }
            }
        }
    });
}
function cleanErrorMessage(data) {
    const error = data.error;
    if (!error || typeof error !== "object" || typeof error.message !== "string") {
        return void 0;
    }
    const rawMessage = error.message;
    const query = data.arguments[0];
    if (!query?.sql) {
        return rawMessage;
    }
    try {
        const formatter = getFormatter(data.self);
        const fullQuery = formatter(query.sql, query.bindings || []);
        return rawMessage.replace(`${fullQuery} - `, "");
    } catch  {
        return rawMessage;
    }
}
function getFormatter(runner) {
    if (runner) {
        const client = runner.client;
        if (client) {
            if (client._formatQuery) {
                return client._formatQuery.bind(client);
            } else if (client.SqlString) {
                return client.SqlString.format.bind(client.SqlString);
            }
        }
        if (runner.builder?.toString) {
            return runner.builder.toString.bind(runner.builder);
        }
    }
    return ()=>"<noop formatter>";
}
function mapSystem(driverName) {
    if (driverName === "sqlite3") {
        return DB_SYSTEM_SQLITE;
    }
    if (driverName === "pg") {
        return DB_SYSTEM_POSTGRESQL;
    }
    return driverName;
}
function getName(db, operation, table) {
    if (operation && db) {
        return table ? `${operation} ${db}.${table}` : `${operation} ${db}`;
    }
    return db;
}
function extractTableName(builder) {
    const table = builder?._single?.table;
    if (table && typeof table === "object") {
        return extractTableName(table);
    }
    return typeof table === "string" ? table : void 0;
}
function extractDatabaseFromConnectionString(connectionString) {
    if (!connectionString) {
        return void 0;
    }
    try {
        const db = new URL(connectionString).pathname?.replace(/^\//, "");
        return db || void 0;
    } catch  {
        return void 0;
    }
}
function extractHostFromConnectionString(connectionString) {
    if (!connectionString) {
        return void 0;
    }
    try {
        return new URL(connectionString).hostname || void 0;
    } catch  {
        return void 0;
    }
}
function extractPortFromConnectionString(connectionString) {
    if (!connectionString) {
        return void 0;
    }
    try {
        const port = new URL(connectionString).port;
        return port ? parseInt(port, 10) : void 0;
    } catch  {
        return void 0;
    }
}
const knexChannelIntegration = core.defineIntegration(_knexChannelIntegration);
exports.knexChannelIntegration = knexChannelIntegration; //# sourceMappingURL=knex.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/langchain.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const langchain = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langchain.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = core.LANGCHAIN_INTEGRATION_NAME;
const SKIPPED_PROVIDERS = [
    core.OPENAI_INTEGRATION_NAME,
    core.ANTHROPIC_AI_INTEGRATION_NAME,
    core.GOOGLE_GENAI_INTEGRATION_NAME
];
let subscribed = false;
function markProvidersSkipped() {
    core._INTERNAL_skipAiProviderWrapping(SKIPPED_PROVIDERS);
}
const _langChainChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            const sentryHandler = core.createLangChainCallbackHandler(options);
            const injectHandler = (message)=>{
                markProvidersSkipped();
                const args = message.arguments;
                if (!Array.isArray(args)) {
                    return;
                }
                let callOptions = args[1];
                if (!callOptions || typeof callOptions !== "object" || Array.isArray(callOptions)) {
                    callOptions = {};
                    args[1] = callOptions;
                }
                callOptions.callbacks = core._INTERNAL_mergeLangChainCallbackHandler(callOptions.callbacks, sentryHandler);
            };
            for (const channelName of [
                channels.CHANNELS.LANGCHAIN_CHAT_MODEL_INVOKE,
                channels.CHANNELS.LANGCHAIN_CHAT_MODEL_STREAM
            ]){
                debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:langchain] subscribing to channel "${channelName}"`);
                diagnosticsChannel__namespace.tracingChannel(channelName).start.subscribe(injectHandler);
            }
            core.waitForTracingChannelBinding(()=>{
                for (const channelName of langchain.langchainEmbeddingsChannels){
                    debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:langchain] subscribing to channel "${channelName}"`);
                    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), (data)=>createEmbeddingsSpan(data, options));
                }
            });
        }
    };
};
function createEmbeddingsSpan(data, options) {
    markProvidersSkipped();
    const input = (data.arguments ?? [])[0];
    return core.startInactiveSpan(core._INTERNAL_getLangChainEmbeddingsSpanOptions(data.self, input, options));
}
const langChainChannelIntegration = core.defineIntegration(_langChainChannelIntegration);
exports.langChainChannelIntegration = langChainChannelIntegration; //# sourceMappingURL=langchain.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/langgraph.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = core.LANGGRAPH_INTEGRATION_NAME;
let subscribed = false;
let insideCreateReactAgent = false;
const _langGraphChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            const resolvedOptions = core.resolveAIRecordingOptions(options);
            const sentryHandler = core.createLangChainCallbackHandler(resolvedOptions);
            core.waitForTracingChannelBinding(()=>{
                debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:langgraph] subscribing to channel "${channels.CHANNELS.LANGGRAPH_STATE_GRAPH_COMPILE}"`);
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.LANGGRAPH_STATE_GRAPH_COMPILE), (data)=>{
                    if (insideCreateReactAgent) {
                        return void 0;
                    }
                    const compileOptions = getFirstArgObject(data.arguments);
                    const name = typeof compileOptions?.name === "string" ? compileOptions.name : void 0;
                    return core.startInactiveSpan(core._INTERNAL_getLangGraphCreateAgentSpanOptions(name));
                }, {
                    beforeSpanEnd: (_span, data)=>{
                        wrapCompiledGraphInvoke(data.result, getFirstArgObject(data.arguments) ?? {}, resolvedOptions, null, sentryHandler);
                    }
                });
                debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:langgraph] subscribing to channel "${channels.CHANNELS.LANGGRAPH_CREATE_REACT_AGENT}"`);
                const reactAgentChannel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.LANGGRAPH_CREATE_REACT_AGENT);
                reactAgentChannel.start.subscribe((message)=>{
                    insideCreateReactAgent = true;
                    try {
                        const { arguments: args } = message;
                        const params = getFirstArgObject(args);
                        if (params && Array.isArray(params.tools) && params.tools.length > 0) {
                            core.wrapToolsWithSpans(params.tools, resolvedOptions, core.extractAgentNameFromParams(args) ?? void 0);
                        }
                    } catch (error) {
                        debugBuild.DEBUG_BUILD && core.debug.error("[orchestrion:langgraph] failed to wrap createReactAgent tools", error);
                    }
                });
                reactAgentChannel.end.subscribe((message)=>{
                    insideCreateReactAgent = false;
                    const { arguments: args, result } = message;
                    const agentName = core.extractAgentNameFromParams(args) ?? void 0;
                    const compileOptions = agentName ? {
                        name: agentName
                    } : {};
                    wrapCompiledGraphInvoke(result, compileOptions, resolvedOptions, core.extractLLMFromParams(args), sentryHandler);
                });
                reactAgentChannel.error.subscribe(()=>{
                    insideCreateReactAgent = false;
                });
            });
        }
    };
};
function getFirstArgObject(args) {
    const first = (args ?? [])[0];
    return typeof first === "object" && first !== null ? first : void 0;
}
function wrapCompiledGraphInvoke(graph, compileOptions, options, llm, sentryHandler) {
    if (!graph || typeof graph !== "object") {
        return;
    }
    const compiledGraph = graph;
    const originalInvoke = compiledGraph.invoke;
    if (typeof originalInvoke === "function") {
        compiledGraph.invoke = core.instrumentCompiledGraphInvoke(originalInvoke.bind(compiledGraph), compiledGraph, compileOptions, options, llm, sentryHandler);
    }
}
const langGraphChannelIntegration = core.defineIntegration(_langGraphChannelIntegration);
exports.langGraphChannelIntegration = langGraphChannelIntegration; //# sourceMappingURL=langgraph.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/lru-memoizer.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "LruMemoizer";
const _lruMemoizerChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:lru-memoizer] subscribing to channel "${channels.CHANNELS.LRU_MEMOIZER_LOAD}"`);
            core.waitForTracingChannelBinding(()=>{
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.LRU_MEMOIZER_LOAD), // We only want the helper's caller-context restore for the callback lru-memoizer fires from a detached `setImmediate`.
                ()=>void 0);
            });
        }
    };
};
const lruMemoizerChannelIntegration = core.defineIntegration(_lruMemoizerChannelIntegration);
exports.lruMemoizerChannelIntegration = lruMemoizerChannelIntegration; //# sourceMappingURL=lru-memoizer.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mongodb.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const mongodbSpan = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/mongodb/mongodb-span.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Mongo";
const ORIGIN = "auto.db.orchestrion.mongo";
const V3_DEDICATED_COMMANDS = /* @__PURE__ */ new Set([
    "insert",
    "update",
    "delete",
    "find",
    "getMore",
    "killCursors"
]);
const _mongodbChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                subscribeV4Command();
                subscribeV4Checkout();
                subscribeV3Wireprotocol();
            });
        }
    };
};
function subscribeV4Command() {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.MONGODB_COMMAND), (data)=>{
        const args = data.arguments ?? [];
        const ns = args[0];
        const cmd = args[1];
        if (!ns || !cmd || typeof cmd !== "object" || cmd.ismaster || cmd.hello) {
            return void 0;
        }
        const operation = Object.keys(cmd)[0];
        return mongodbSpan.startMongoSpan(mongodbSpan.getV4SpanAttributes(data.self, ns, cmd, operation, ORIGIN));
    }, // Matches otel's `shouldSkipInstrumentation`: only trace when there is
    // an active parent span, to avoid emitting orphaned mongodb spans.
    {
        requiresParentSpan: true
    });
}
function subscribeV4Checkout() {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.MONGODB_CHECKOUT), ()=>void 0);
}
function subscribeV3Wireprotocol() {
    for (const operation of [
        "insert",
        "update",
        "remove"
    ]){
        const channel = operation === "insert" ? channels.CHANNELS.MONGODB_V3_INSERT : operation === "update" ? channels.CHANNELS.MONGODB_V3_UPDATE : channels.CHANNELS.MONGODB_V3_REMOVE;
        bindV3(channel, (args)=>({
                topology: args[0],
                ns: args[1],
                command: args[2]?.[0],
                operation
            }));
    }
    bindV3(channels.CHANNELS.MONGODB_V3_COMMAND, (args)=>{
        const command = args[2];
        const type = command ? Object.keys(command)[0] : void 0;
        if (type && V3_DEDICATED_COMMANDS.has(type)) {
            return void 0;
        }
        return {
            topology: args[0],
            ns: args[1],
            command,
            operation: command ? mongodbSpan.getV3CommandOperation(command) : void 0
        };
    });
    bindV3(channels.CHANNELS.MONGODB_V3_QUERY, (args)=>({
            topology: args[0],
            ns: args[1],
            command: args[2],
            operation: "find"
        }));
    bindV3(channels.CHANNELS.MONGODB_V3_GET_MORE, (args)=>({
            topology: args[0],
            ns: args[1],
            command: args[2]?.cmd,
            operation: "getMore"
        }));
}
function bindV3(channelName, extract) {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), (data)=>{
        const args = data.arguments;
        if (!args) {
            return void 0;
        }
        const info = extract(args);
        if (!info || typeof info.ns !== "string") {
            return void 0;
        }
        return mongodbSpan.startMongoSpan(mongodbSpan.getV3SpanAttributes(info.ns, info.topology, info.command, info.operation, ORIGIN));
    }, {
        requiresParentSpan: true
    });
}
const mongodbChannelIntegration = core.defineIntegration(_mongodbChannelIntegration);
exports.mongodbChannelIntegration = mongodbChannelIntegration; //# sourceMappingURL=mongodb.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mongoose.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const mongooseDcSubscriber = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/mongoose/mongoose-dc-subscriber.js [instrumentation] (ecmascript)");
const mongooseLegacySpan = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/mongoose/mongoose-legacy-span.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const mongoose = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongoose.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Mongoose";
const ORIGIN = "auto.db.orchestrion.mongoose";
const STORED_PARENT_SPAN = /* @__PURE__ */ new WeakMap();
let orchestrionSubscribed = false;
const _mongooseChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                mongooseDcSubscriber.subscribeMongooseDiagnosticChannels(diagnosticsChannel__namespace.tracingChannel);
                subscribeOrchestrionMongooseChannels();
            });
        }
    };
};
function subscribeOrchestrionMongooseChannels() {
    if (orchestrionSubscribed) {
        return;
    }
    orchestrionSubscribed = true;
    debugBuild.DEBUG_BUILD && core.debug.log("[orchestrion:mongoose] subscribing to injected channels");
    for (const channelName of mongoose.MONGOOSE_CONTEXT_CAPTURE_CHANNELS){
        channel(channelName).subscribe({
            start (message) {
                stashParentSpan(message.self);
            }
        });
    }
    channel(channels.CHANNELS.MONGOOSE_MODEL_AGGREGATE).subscribe({
        end (message) {
            const result = message.result;
            if (result && typeof result === "object") {
                stashParentSpan(result);
            }
        }
    });
    bindExecSpan(channels.CHANNELS.MONGOOSE_QUERY_EXEC, (self)=>{
        const query = self;
        return startSpan(query.mongooseCollection, query.model?.modelName, query.op ?? "exec", STORED_PARENT_SPAN.get(self));
    });
    bindExecSpan(channels.CHANNELS.MONGOOSE_AGGREGATE_EXEC, (self)=>{
        const model = self._model;
        return startSpan(model?.collection, model?.modelName, "aggregate", STORED_PARENT_SPAN.get(self));
    });
    bindExecSpan(channels.CHANNELS.MONGOOSE_MODEL_SAVE, (self)=>{
        const ctor = self.constructor;
        return startSpan(ctor.collection, ctor.modelName, "save");
    });
    bindExecSpan(channels.CHANNELS.MONGOOSE_MODEL_REMOVE, (self)=>{
        const ctor = self.constructor;
        return startSpan(ctor.collection, ctor.modelName, "remove");
    });
    bindExecSpan(channels.CHANNELS.MONGOOSE_MODEL_INSERT_MANY, (self)=>{
        const model = self;
        return startSpan(model.collection, model.modelName, "insertMany");
    });
    bindExecSpan(channels.CHANNELS.MONGOOSE_MODEL_BULK_WRITE, (self)=>{
        const model = self;
        return startSpan(model.collection, model.modelName, "bulkWrite");
    });
}
function startSpan(collection, modelName, operation, parentSpan) {
    return mongooseLegacySpan.startMongooseLegacySpan({
        collection,
        modelName,
        operation,
        origin: ORIGIN,
        parentSpan
    });
}
function channel(channelName) {
    return diagnosticsChannel__namespace.tracingChannel(channelName);
}
function bindExecSpan(channelName, getSpan) {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), (data)=>{
        const self = data.self;
        if (!self) {
            return void 0;
        }
        return getSpan(self);
    });
}
function stashParentSpan(self) {
    const active = core.getActiveSpan();
    if (self && active) {
        STORED_PARENT_SPAN.set(self, active);
    }
}
const mongooseChannelIntegration = core.defineIntegration(_mongooseChannelIntegration);
exports.mongooseChannelIntegration = mongooseChannelIntegration; //# sourceMappingURL=mongoose.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mysql.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Mysql";
const ATTR_DB_SYSTEM = "db.system";
const ATTR_DB_CONNECTION_STRING = "db.connection_string";
const ATTR_DB_NAME = "db.name";
const ATTR_DB_USER = "db.user";
const ATTR_DB_STATEMENT = "db.statement";
const ATTR_NET_PEER_NAME = "net.peer.name";
const ATTR_NET_PEER_PORT = "net.peer.port";
const _mysqlChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:mysql] subscribing to channel "${channels.CHANNELS.MYSQL_QUERY}"`);
            core.waitForTracingChannelBinding(()=>{
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.MYSQL_QUERY), (data)=>{
                    const sql = extractSql(data.arguments[0]);
                    const { host, port, database, user } = getConnectionConfig(data.self);
                    const portNumber = typeof port === "string" ? parseInt(port, 10) : port;
                    const portIsNumber = typeof portNumber === "number" && !isNaN(portNumber);
                    data._sentryCallerScope = core.getCurrentScope();
                    return core.startInactiveSpan({
                        name: sql ?? "mysql.query",
                        kind: core.SPAN_KIND.CLIENT,
                        op: "db",
                        attributes: {
                            [ATTR_DB_SYSTEM]: "mysql",
                            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.mysql",
                            [ATTR_DB_CONNECTION_STRING]: getJDBCString(host, portIsNumber ? portNumber : void 0, database),
                            ...database ? {
                                [ATTR_DB_NAME]: database
                            } : {},
                            ...user ? {
                                [ATTR_DB_USER]: user
                            } : {},
                            ...sql ? {
                                [ATTR_DB_STATEMENT]: sql
                            } : {},
                            ...host ? {
                                [ATTR_NET_PEER_NAME]: host
                            } : {},
                            ...portIsNumber ? {
                                [ATTR_NET_PEER_PORT]: portNumber
                            } : {}
                        }
                    });
                }, {
                    // No-callback `query(sql)` returns a streamable `Query` emitter as `result`; it settles on the
                    // emitter's `'end'`/`'error'`, not the channel, so defer ending to those.
                    deferSpanEnd ({ data, end }) {
                        const result = data.result;
                        if (!result || typeof result !== "object" || !hasOnMethod(result)) {
                            return false;
                        }
                        const callerScope = data._sentryCallerScope;
                        if (callerScope) {
                            core.bindScopeToEmitter(result, callerScope);
                        }
                        result.on("error", (err)=>end(err));
                        result.on("end", ()=>end());
                        return true;
                    }
                });
            });
        }
    };
};
function hasOnMethod(obj) {
    return "on" in obj && typeof obj.on === "function";
}
function extractSql(firstArg) {
    if (typeof firstArg === "string") {
        return firstArg;
    }
    if (core.isObjectLike(firstArg) && "sql" in firstArg) {
        const sql = firstArg.sql;
        return typeof sql === "string" ? sql : void 0;
    }
    return void 0;
}
function getConnectionConfig(connection) {
    const config = connection?.config?.connectionConfig ?? connection?.config ?? {};
    return {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user
    };
}
function getJDBCString(host, port, database) {
    let s = `jdbc:mysql://${host || "localhost"}`;
    if (typeof port === "number") {
        s += `:${port}`;
    }
    if (database) {
        s += `/${database}`;
    }
    return s;
}
const mysqlChannelIntegration = core.defineIntegration(_mysqlChannelIntegration);
exports.mysqlChannelIntegration = mysqlChannelIntegration; //# sourceMappingURL=mysql.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mysql2.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const mysql2DcSubscriber = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/mysql2/mysql2-dc-subscriber.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Mysql2";
const ORIGIN = "auto.db.orchestrion.mysql2";
const DB_SYSTEM_VALUE_MYSQL = "mysql";
function instrumentMysql2() {
    mysql2DcSubscriber.subscribeMysql2DiagnosticChannels(diagnosticsChannel__namespace.tracingChannel);
    subscribeQueryChannel(channels.CHANNELS.MYSQL2_QUERY);
    subscribeQueryChannel(channels.CHANNELS.MYSQL2_EXECUTE);
}
function subscribeQueryChannel(channelName) {
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), (data)=>{
        const statement = getQueryText(data.arguments);
        return core.startInactiveSpan({
            name: statement ?? "mysql2.query",
            kind: core.SPAN_KIND.CLIENT,
            attributes: {
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
                [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
                // oxlint-disable-next-line typescript/no-deprecated
                [attributes.DB_SYSTEM]: DB_SYSTEM_VALUE_MYSQL,
                ...getConnectionAttributes(data.self?.config),
                // oxlint-disable-next-line typescript/no-deprecated
                [attributes.DB_STATEMENT]: statement || void 0
            }
        });
    }, {
        requiresParentSpan: true
    });
}
function getQueryText(args) {
    return extractSql(args[0]);
}
function extractSql(firstArg) {
    if (typeof firstArg === "string") {
        return firstArg;
    }
    if (core.isObjectLike(firstArg) && "sql" in firstArg) {
        const sql = firstArg.sql;
        return typeof sql === "string" ? sql : void 0;
    }
    return void 0;
}
function getConnectionAttributes(config) {
    const { host, port, database, user } = config?.connectionConfig ?? config ?? {};
    const portNumber = typeof port === "string" ? parseInt(port, 10) : port;
    const portIsNumber = typeof portNumber === "number" && !isNaN(portNumber);
    return {
        // oxlint-disable-next-line typescript/no-deprecated
        [attributes.DB_NAME]: database || void 0,
        [attributes.DB_USER]: user || void 0,
        // oxlint-disable-next-line typescript/no-deprecated
        [attributes.NET_PEER_NAME]: host || void 0,
        // oxlint-disable-next-line typescript/no-deprecated
        [attributes.NET_PEER_PORT]: portIsNumber ? portNumber : void 0
    };
}
const _mysql2ChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                instrumentMysql2();
            });
        }
    };
};
const mysql2ChannelIntegration = core.defineIntegration(_mysql2ChannelIntegration);
exports.mysql2ChannelIntegration = mysql2ChannelIntegration; //# sourceMappingURL=mysql2.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/openai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "OpenAI";
const ORIGIN = "auto.ai.orchestrion.openai";
const INSTRUMENTED_CHANNELS = [
    {
        channel: channels.CHANNELS.OPENAI_CHAT,
        operation: "chat"
    },
    {
        channel: channels.CHANNELS.OPENAI_EMBEDDINGS,
        operation: "embeddings"
    }
];
let subscribed = false;
const _openaiChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel || subscribed) {
                return;
            }
            subscribed = true;
            core.waitForTracingChannelBinding(()=>{
                for (const { channel, operation } of INSTRUMENTED_CHANNELS){
                    debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:openai] subscribing to channel "${channel}"`);
                    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channel), (data)=>createGenAiSpan(data, operation, options), {
                        beforeSpanEnd: (span, data)=>{
                            core.addOpenAiResponseAttributes(span, data.result, core.resolveAIRecordingOptions(options).recordOutputs);
                        },
                        // Streaming: the result is a `Stream` consumed later, so instrument it and let it end the span.
                        deferSpanEnd: ({ span, data })=>wrapStreamResult(span, data, options)
                    });
                }
            });
        }
    };
};
function createGenAiSpan(data, operation, options) {
    if (core._INTERNAL_shouldSkipAiProviderWrapping(INTEGRATION_NAME)) {
        return void 0;
    }
    const args = data.arguments ?? [];
    const params = args[0];
    const { recordInputs } = core.resolveAIRecordingOptions(options);
    const enableTruncation = core.shouldEnableTruncation(options.enableTruncation);
    const attributes = core.extractOpenAiRequestAttributes(args, operation);
    attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = ORIGIN;
    const model = params?.model || "unknown";
    const span = core.startInactiveSpan({
        name: `${operation} ${model}`,
        op: `gen_ai.${operation}`,
        attributes
    });
    if (recordInputs && params) {
        core.addOpenAiRequestAttributes(span, params, operation, enableTruncation);
    }
    return span;
}
function isAsyncIterable(value) {
    return !!value && typeof value[Symbol.asyncIterator] === "function";
}
function wrapStreamResult(span, data, options) {
    const result = data.result;
    if (!isAsyncIterable(result)) {
        return false;
    }
    const { recordOutputs } = core.resolveAIRecordingOptions(options);
    const iterate = result[Symbol.asyncIterator].bind(result);
    const instrumented = core.instrumentOpenAiStream({
        [Symbol.asyncIterator]: iterate
    }, span, recordOutputs ?? false);
    result[Symbol.asyncIterator] = ()=>instrumented;
    return true;
}
const openaiChannelIntegration = core.defineIntegration(_openaiChannelIntegration);
exports.openaiChannelIntegration = openaiChannelIntegration; //# sourceMappingURL=openai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/postgres.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Postgres";
const ORIGIN = "auto.db.orchestrion.postgres";
const ATTR_DB_SYSTEM = "db.system";
const ATTR_DB_NAME = "db.name";
const ATTR_DB_CONNECTION_STRING = "db.connection_string";
const ATTR_DB_USER = "db.user";
const ATTR_DB_STATEMENT = "db.statement";
const ATTR_NET_PEER_NAME = "net.peer.name";
const ATTR_NET_PEER_PORT = "net.peer.port";
const ATTR_PG_PLAN = "db.postgresql.plan";
const ATTR_PG_IDLE_TIMEOUT = "db.postgresql.idle.timeout.millis";
const ATTR_PG_MAX_CLIENT = "db.postgresql.max.client";
const DB_SYSTEM_POSTGRESQL = "postgresql";
const SPAN_QUERY_FALLBACK = "pg.query";
const SPAN_CONNECT = "pg.connect";
const SPAN_POOL_CONNECT = "pg-pool.connect";
const _postgresChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                subscribeQueryLikeChannel(channels.CHANNELS.PG_QUERY, querySpanOptions, {
                    deferStreamedResult: true
                });
                if (!options.ignoreConnectSpans) {
                    subscribeQueryLikeChannel(channels.CHANNELS.PG_CONNECT, connectSpanOptions);
                    subscribeQueryLikeChannel(channels.CHANNELS.PGPOOL_CONNECT, poolConnectSpanOptions);
                }
            });
        }
    };
};
function subscribeQueryLikeChannel(channelName, getSpanOptions, { deferStreamedResult = false } = {}) {
    debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:pg] subscribing to channel "${channelName}"`);
    tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channelName), (data)=>{
        data._sentryCallerScope = core.getCurrentScope();
        return core.startInactiveSpan({
            ...getSpanOptions(data),
            kind: core.SPAN_KIND.CLIENT
        });
    }, // `connect`/`pool-connect` resolve with a persistent `Client` (itself an
    // `EventEmitter`), which is NOT a streamed result. Deferring their span
    // to that emitter's `'end'`/`'error'` would keep it open for the whole
    // connection lifetime, so it never ends in time and is dropped. Only
    // `query` can return a streamable `Submittable`, so only it defers.
    deferStreamedResult ? {
        // Only instrument under an active span, leaving the context untouched otherwise
        // (e.g. connects issued during app startup).
        requiresParentSpan: true,
        // Streamable `Submittable` (e.g. `client.query(new Query())`)
        // returns an emitter that orchestrion stores on `ctx.result` while
        // firing no async events; the query isn't done until the emitter
        // emits `'end'`/`'error'`. Defer ending to those events for that
        // path; the callback, promise, and sync-throw paths carry no
        // emitter, so the helper ends the span as usual.
        deferSpanEnd ({ data, end }) {
            const result = data.result;
            if (!result || typeof result !== "object" || !hasOnMethod(result)) {
                return false;
            }
            const callerScope = data._sentryCallerScope;
            if (callerScope) {
                core.bindScopeToEmitter(result, callerScope);
            }
            result.on("error", (err)=>end(err));
            result.on("end", ()=>end());
            return true;
        }
    } : {
        requiresParentSpan: true
    });
}
function querySpanOptions(ctx) {
    const params = ctx.self?.connectionParameters ?? {};
    const queryConfig = extractQueryConfig(ctx.arguments);
    return {
        // The description is the SQL statement
        name: queryConfig?.text ?? SPAN_QUERY_FALLBACK,
        op: "db",
        attributes: {
            ...getConnectionAttributes(params),
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
            [ATTR_DB_STATEMENT]: queryConfig?.text || void 0,
            [ATTR_PG_PLAN]: typeof queryConfig?.name === "string" ? queryConfig.name : void 0
        }
    };
}
function connectSpanOptions(ctx) {
    const params = ctx.self?.connectionParameters ?? {};
    return {
        name: SPAN_CONNECT,
        op: "db",
        attributes: getConnectionAttributes(params)
    };
}
function poolConnectSpanOptions(ctx) {
    const opts = ctx.self?.options ?? {};
    return {
        name: SPAN_POOL_CONNECT,
        op: "db",
        attributes: getPoolConnectionAttributes(opts)
    };
}
function hasOnMethod(obj) {
    return "on" in obj && typeof obj.on === "function";
}
function extractQueryConfig(args) {
    const arg0 = args[0];
    if (typeof arg0 === "string") {
        return {
            text: arg0
        };
    }
    if (core.isObjectLike(arg0) && typeof arg0.text === "string") {
        const obj = arg0;
        return {
            text: obj.text,
            name: obj.name
        };
    }
    return void 0;
}
function getConnectionAttributes(params) {
    return {
        [ATTR_DB_SYSTEM]: DB_SYSTEM_POSTGRESQL,
        [ATTR_DB_CONNECTION_STRING]: getConnectionString(params),
        [ATTR_DB_NAME]: params.database,
        [ATTR_DB_USER]: params.user,
        [ATTR_NET_PEER_NAME]: params.host,
        [ATTR_NET_PEER_PORT]: Number.isInteger(params.port) ? params.port : void 0
    };
}
function getPoolConnectionAttributes(opts) {
    let url;
    try {
        url = opts.connectionString ? new URL(opts.connectionString) : void 0;
    } catch  {
        url = void 0;
    }
    const database = url?.pathname.slice(1) || opts.database;
    const host = url?.hostname || opts.host;
    const port = Number(url?.port) || (Number.isInteger(opts.port) ? opts.port : void 0);
    const user = url?.username || opts.user;
    return {
        [ATTR_DB_SYSTEM]: DB_SYSTEM_POSTGRESQL,
        [ATTR_DB_CONNECTION_STRING]: getConnectionString(opts),
        [ATTR_PG_IDLE_TIMEOUT]: opts.idleTimeoutMillis,
        [ATTR_PG_MAX_CLIENT]: opts.max,
        [ATTR_DB_NAME]: database,
        [ATTR_NET_PEER_PORT]: port,
        // these two come from a url parse and slice, can be ''
        [ATTR_NET_PEER_NAME]: host || void 0,
        [ATTR_DB_USER]: user || void 0
    };
}
function getConnectionString(params) {
    if (params.connectionString) {
        try {
            const url = new URL(params.connectionString);
            url.username = "";
            url.password = "";
            return url.toString();
        } catch  {
            return "postgresql://localhost:5432/";
        }
    }
    const host = params.host || "localhost";
    const port = params.port || 5432;
    const database = params.database || "";
    return `postgresql://${host}:${port}/${database}`;
}
const postgresChannelIntegration = core.defineIntegration(_postgresChannelIntegration);
exports.postgresChannelIntegration = postgresChannelIntegration; //# sourceMappingURL=postgres.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/postgres-js.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "PostgresJs";
const ORIGIN = "auto.db.orchestrion.postgresjs";
const DB_RESPONSE_STATUS_CODE = "db.response.status_code";
const NOOP = ()=>{};
const QUERY_FROM_INSTRUMENTED_SQL = /* @__PURE__ */ Symbol.for("sentry.query.from.instrumented.sql");
const QUERY_SPAN = /* @__PURE__ */ Symbol("sentryPostgresJsSpan");
const CONNECTION_ATTRS_SET = /* @__PURE__ */ Symbol("sentryPostgresJsConnectionAttrsSet");
const SPAN_ENDED = /* @__PURE__ */ Symbol("sentryPostgresJsSpanEnded");
const connectionContexts = /* @__PURE__ */ new WeakMap();
const endpointRegistry = [];
function registerEndpoint(context) {
    const alreadyKnown = endpointRegistry.some((e)=>e.ATTR_SERVER_ADDRESS === context.ATTR_SERVER_ADDRESS && e.ATTR_SERVER_PORT === context.ATTR_SERVER_PORT && e.ATTR_DB_NAMESPACE === context.ATTR_DB_NAMESPACE);
    if (!alreadyKnown) {
        endpointRegistry.push(context);
    }
}
function resolveSingleEndpoint() {
    return endpointRegistry.length === 1 ? endpointRegistry[0] : void 0;
}
function recordConnectionFromChannel(message) {
    const connection = message.result;
    const options = message.arguments?.[0];
    if (!connection || typeof connection !== "object" || !options) {
        return;
    }
    const context = core._INTERNAL_buildPostgresConnectionContext(options);
    connectionContexts.set(connection, context);
    registerEndpoint(context);
}
function setConnectionAttributes(span, query, context) {
    const queryRecord = query;
    if (queryRecord[CONNECTION_ATTRS_SET]) {
        return;
    }
    queryRecord[CONNECTION_ATTRS_SET] = true;
    core._INTERNAL_setPostgresConnectionAttributes(span, context);
}
function attachConnectionAttributesFromChannel(message) {
    const connection = message.self;
    const query = message.arguments?.[0];
    if (!connection || !query) {
        return;
    }
    const span = query[QUERY_SPAN];
    const context = connectionContexts.get(connection);
    if (span && context) {
        setConnectionAttributes(span, query, context);
    }
}
function wrapQuerySettlement(data, span, sanitizedSqlQuery) {
    const query = data.self;
    if (!query) {
        return;
    }
    const markEnded = ()=>{
        data[SPAN_ENDED] = true;
    };
    const originalResolve = query.resolve;
    if (typeof originalResolve === "function") {
        query.resolve = function(...resolveArgs) {
            markEnded();
            try {
                const command = resolveArgs[0]?.command;
                core._INTERNAL_setPostgresOperationName(span, sanitizedSqlQuery, command);
                span.end();
            } catch (e) {
                debugBuild.DEBUG_BUILD && core.debug.error("[orchestrion:postgresjs] error ending span in resolve:", e);
            }
            return originalResolve.apply(this, resolveArgs);
        };
    }
    const originalReject = query.reject;
    if (typeof originalReject === "function") {
        query.reject = function(...rejectArgs) {
            markEnded();
            try {
                const err = rejectArgs[0];
                span.setStatus({
                    code: core.SPAN_STATUS_ERROR,
                    message: err?.message || "unknown_error"
                });
                span.setAttribute(DB_RESPONSE_STATUS_CODE, err?.code || "unknown");
                span.setAttribute(attributes.ERROR_TYPE, err?.name || "unknown");
                core._INTERNAL_setPostgresOperationName(span, sanitizedSqlQuery);
                span.end();
            } catch (e) {
                debugBuild.DEBUG_BUILD && core.debug.error("[orchestrion:postgresjs] error ending span in reject:", e);
            }
            return originalReject.apply(this, rejectArgs);
        };
    }
}
const _postgresJsChannelIntegration = (options = {})=>{
    const { requireParentSpan, requestHook } = options;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:postgresjs] subscribing to "${channels.CHANNELS.POSTGRESJS_HANDLE}"`);
            diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.POSTGRESJS_CONNECTION).subscribe({
                start: NOOP,
                asyncStart: NOOP,
                asyncEnd: NOOP,
                error: NOOP,
                end: recordConnectionFromChannel
            });
            diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.POSTGRESJS_EXECUTE).subscribe({
                end: NOOP,
                asyncStart: NOOP,
                asyncEnd: NOOP,
                error: NOOP,
                start: attachConnectionAttributesFromChannel
            });
            diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.POSTGRESJS_CONNECT).subscribe({
                end: NOOP,
                asyncStart: NOOP,
                asyncEnd: NOOP,
                error: NOOP,
                start: attachConnectionAttributesFromChannel
            });
            core.waitForTracingChannelBinding(()=>{
                tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.POSTGRESJS_HANDLE), (data)=>{
                    const query = data.self;
                    if (!query) {
                        return void 0;
                    }
                    if (query.executed === true || query[QUERY_FROM_INSTRUMENTED_SQL]) {
                        return void 0;
                    }
                    const fullQuery = core._INTERNAL_reconstructPostgresQuery(query.strings);
                    const sanitizedSqlQuery = core._INTERNAL_sanitizeSqlQuery(fullQuery);
                    const span = core.startInactiveSpan({
                        name: sanitizedSqlQuery || "postgresjs.query",
                        op: "db",
                        kind: core.SPAN_KIND.CLIENT,
                        attributes: {
                            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
                            [attributes.DB_SYSTEM_NAME]: "postgres",
                            [attributes.DB_QUERY_TEXT]: sanitizedSqlQuery
                        }
                    });
                    query[QUERY_SPAN] = span;
                    const context = resolveSingleEndpoint();
                    if (context) {
                        setConnectionAttributes(span, query, context);
                    }
                    if (requestHook) {
                        try {
                            requestHook(span, sanitizedSqlQuery, context);
                        } catch (e) {
                            span.setAttribute("sentry.hook.error", "requestHook failed");
                            debugBuild.DEBUG_BUILD && core.debug.error("[orchestrion:postgresjs] error in requestHook:", e);
                        }
                    }
                    wrapQuerySettlement(data, span, sanitizedSqlQuery);
                    return span;
                }, {
                    requiresParentSpan: requireParentSpan !== false,
                    deferSpanEnd ({ data }) {
                        if (data[SPAN_ENDED]) {
                            return true;
                        }
                        if ("error" in data) {
                            return false;
                        }
                        return true;
                    }
                });
            });
        }
    };
};
const postgresJsChannelIntegration = core.defineIntegration(_postgresJsChannelIntegration);
exports.postgresJsChannelIntegration = postgresJsChannelIntegration; //# sourceMappingURL=postgres-js.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/tedious.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_events = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Tedious";
const ORIGIN = "auto.db.orchestrion.tedious";
const DB_SYSTEM_VALUE_MSSQL = "mssql";
const ATTR_DB_SQL_TABLE = "db.sql.table";
const currentDatabaseSymbol = /* @__PURE__ */ Symbol("sentry.orchestrion.tedious.current-database");
function setDatabase(databaseName) {
    Object.defineProperty(this, currentDatabaseSymbol, {
        value: databaseName,
        writable: true,
        configurable: true
    });
}
function removeDatabaseListener() {
    this.removeListener("databaseChange", setDatabase);
}
function subscribeConnect() {
    diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.TEDIOUS_CONNECT).start.subscribe((message)=>{
        const connection = message.self;
        if (!connection) {
            return;
        }
        setDatabase.call(connection, connection.config?.options?.database);
        connection.removeListener("databaseChange", setDatabase);
        connection.on("databaseChange", setDatabase);
        connection.removeListener("end", removeDatabaseListener);
        connection.once("end", removeDatabaseListener);
    });
}
function subscribeQuery(channelName, operation) {
    diagnosticsChannel__namespace.tracingChannel(channelName).start.subscribe((message)=>{
        const data = message;
        const connection = data.self;
        const request = data.arguments[0];
        if (!connection || !(request instanceof node_events.EventEmitter)) {
            return;
        }
        let procCount = 0;
        let statementCount = 0;
        const incrementStatementCount = ()=>{
            statementCount++;
        };
        const incrementProcCount = ()=>{
            procCount++;
        };
        const databaseName = connection[currentDatabaseSymbol];
        const sql = extractSql(request);
        const attributes$1 = {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
            [attributes.DB_SYSTEM]: DB_SYSTEM_VALUE_MSSQL,
            [attributes.DB_NAME]: databaseName,
            // `>=4` uses the `authentication` object; older versions expose `userName` directly.
            [attributes.DB_USER]: connection.config?.userName ?? connection.config?.authentication?.options?.userName,
            [attributes.DB_STATEMENT]: sql,
            [ATTR_DB_SQL_TABLE]: request.table,
            [attributes.NET_PEER_NAME]: connection.config?.server,
            [attributes.NET_PEER_PORT]: connection.config?.options?.port
        };
        const span = core.startInactiveSpan({
            name: getSpanName(operation, databaseName, sql, request.table),
            kind: core.SPAN_KIND.CLIENT,
            op: "db",
            attributes: attributes$1
        });
        const endSpan = once((err)=>{
            request.removeListener("done", incrementStatementCount);
            request.removeListener("doneInProc", incrementStatementCount);
            request.removeListener("doneProc", incrementProcCount);
            request.removeListener("error", endSpan);
            connection.removeListener("end", endSpan);
            span.setAttribute("tedious.procedure_count", procCount);
            span.setAttribute("tedious.statement_count", statementCount);
            if (err) {
                span.setStatus({
                    code: core.SPAN_STATUS_ERROR,
                    message: err.message
                });
            }
            span.end();
        });
        request.on("done", incrementStatementCount);
        request.on("doneInProc", incrementStatementCount);
        request.on("doneProc", incrementProcCount);
        request.once("error", endSpan);
        connection.on("end", endSpan);
        if (typeof request.callback === "function") {
            const originalCallback = request.callback;
            request.callback = function(...args) {
                endSpan(args[0]);
                return originalCallback.apply(this, args);
            };
        }
    });
}
function extractSql(request) {
    if (request.sqlTextOrProcedure === "sp_prepare" && request.parametersByName?.stmt?.value != null) {
        const value = request.parametersByName.stmt.value;
        return typeof value === "string" ? value : void 0;
    }
    return request.sqlTextOrProcedure;
}
function getSpanName(operation, db, sql, bulkLoadTable) {
    if (operation === "execBulkLoad" && bulkLoadTable && db) {
        return `${operation} ${bulkLoadTable} ${db}`;
    }
    if (operation === "callProcedure") {
        return db ? `${operation} ${sql} ${db}` : `${operation} ${sql}`;
    }
    return db ? `${operation} ${db}` : operation;
}
function once(fn) {
    let called = false;
    return (...args)=>{
        if (called) {
            return;
        }
        called = true;
        fn(...args);
    };
}
const _tediousChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:tedious] subscribing to channel "${channels.CHANNELS.TEDIOUS_EXEC_SQL}"`);
            core.waitForTracingChannelBinding(()=>{
                subscribeConnect();
                subscribeQuery(channels.CHANNELS.TEDIOUS_EXEC_SQL, "execSql");
                subscribeQuery(channels.CHANNELS.TEDIOUS_EXEC_SQL_BATCH, "execSqlBatch");
                subscribeQuery(channels.CHANNELS.TEDIOUS_CALL_PROCEDURE, "callProcedure");
                subscribeQuery(channels.CHANNELS.TEDIOUS_EXEC_BULK_LOAD, "execBulkLoad");
                subscribeQuery(channels.CHANNELS.TEDIOUS_PREPARE, "prepare");
                subscribeQuery(channels.CHANNELS.TEDIOUS_EXECUTE, "execute");
            });
        }
    };
};
const tediousChannelIntegration = core.defineIntegration(_tediousChannelIntegration);
exports.tediousChannelIntegration = tediousChannelIntegration; //# sourceMappingURL=tedious.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/vercel-ai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vercel-ai/index.js [instrumentation] (ecmascript)");
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const vercelAiOrchestrionSubscriber = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vercel-ai/vercel-ai-orchestrion-subscriber.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const _vercelAiChannelIntegration = (options = {})=>{
    const parentIntegration = index.vercelAiIntegration(options);
    return core.extendIntegration(parentIntegration, {
        options,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                vercelAiOrchestrionSubscriber.subscribeVercelAiOrchestrionChannels(diagnosticsChannel__namespace.tracingChannel, options);
            });
        }
    });
};
const vercelAiChannelIntegration = core.defineIntegration(_vercelAiChannelIntegration);
exports.vercelAiChannelIntegration = vercelAiChannelIntegration; //# sourceMappingURL=vercel-ai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/express/route.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const layerRegisteredPaths = /* @__PURE__ */ new WeakMap();
function setLayerRegisteredPath(layer, path) {
    layerRegisteredPaths.set(layer, path);
}
function getLayerRegisteredPath(layer) {
    return layerRegisteredPaths.get(layer);
}
const requestLayerPaths = /* @__PURE__ */ new WeakMap();
function getStore(req) {
    let store = requestLayerPaths.get(req);
    if (!store) {
        store = [];
        requestLayerPaths.set(req, store);
    }
    return store;
}
function pushLayerPath(req, path) {
    getStore(req).push(path);
}
function popLayerPath(req) {
    getStore(req).pop();
}
function getLayerPath(args) {
    const firstArg = args[0];
    if (Array.isArray(firstArg)) {
        return firstArg.map((segment)=>extractLayerPathSegment(segment) ?? "").join(",");
    }
    return extractLayerPathSegment(firstArg);
}
function extractLayerPathSegment(segment) {
    return typeof segment === "string" ? segment : segment instanceof RegExp || typeof segment === "number" ? String(segment) : void 0;
}
function getConstructedRoute(req) {
    const layersStore = getStore(req);
    let constructedRoute = "";
    for (const path of layersStore){
        if (path === "/" || path === "/*") {
            continue;
        }
        constructedRoute += !constructedRoute || constructedRoute.endsWith("/") ? path : `/${path}`;
    }
    return constructedRoute.replace(/\/{2,}/g, "/");
}
function getActualMatchedRoute(req, constructedRoute) {
    const layersStore = getStore(req);
    if (layersStore.length === 0) {
        return void 0;
    }
    const originalUrl = typeof req.originalUrl === "string" ? req.originalUrl : "";
    if (layersStore.every((path)=>path === "/")) {
        return originalUrl === "/" ? "/" : void 0;
    }
    if (constructedRoute === "*") {
        return constructedRoute;
    }
    if (constructedRoute.includes("/") && (constructedRoute.includes(",") || constructedRoute.includes("\\") || constructedRoute.includes("*") || constructedRoute.includes("["))) {
        return constructedRoute;
    }
    const normalizedRoute = constructedRoute.startsWith("/") ? constructedRoute : `/${constructedRoute}`;
    const isValidRoute = normalizedRoute.length > 0 && (originalUrl === normalizedRoute || originalUrl.startsWith(normalizedRoute) || isRoutePattern(normalizedRoute));
    return isValidRoute ? normalizedRoute : void 0;
}
function isRoutePattern(route) {
    return route.includes(":") || route.includes("*");
}
exports.getActualMatchedRoute = getActualMatchedRoute;
exports.getConstructedRoute = getConstructedRoute;
exports.getLayerPath = getLayerPath;
exports.getLayerRegisteredPath = getLayerRegisteredPath;
exports.popLayerPath = popLayerPath;
exports.pushLayerPath = pushLayerPath;
exports.setLayerRegisteredPath = setLayerRegisteredPath; //# sourceMappingURL=route.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/express/instrumentation.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

;
globalThis["__SENTRY_SERVER_MODULES__"] = {
    "@calcom/embed-react": "^1.5.3",
    "@dagrejs/dagre": "^1.1.4",
    "@floating-ui/react-dom": "^2.1.9",
    "@next/third-parties": "^16.3.1",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-select": "^2.2.2",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@sentry/nextjs": "^10.63.0",
    "@stackframe/stack": "^2.8.80",
    "@xyflow/react": "^12.10.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^13.2.0",
    "lucide-react": "^0.505.0",
    "next": "^15.3.3",
    "next-themes": "^0.4.6",
    "pino": "^9.9.2",
    "pino-pretty": "^13.1.1",
    "posthog-js": "^1.388.1",
    "posthog-node": "^5.38.0",
    "react": "^19.1.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.1.0",
    "react-hook-form": "^7.56.4",
    "react-international-phone": "^4.5.0",
    "react-markdown": "^10.1.0",
    "react-timezone-select": "^3.2.8",
    "recharts": "^3.1.2",
    "remark-gfm": "^4.0.1",
    "shadcn-ui": "^0.9.5",
    "sonner": "^2.0.5",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "zundo": "^2.3.0",
    "zustand": "^5.0.8",
    "@eslint/eslintrc": "^3",
    "@hey-api/openapi-ts": "^0.99.0",
    "@next/env": "^15.5.25",
    "@tailwindcss/postcss": "^4",
    "@testing-library/react": "^16.3.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/source-map-support": "^0.5.10",
    "@vitejs/plugin-react": "^6.0.3",
    "cross-env": "^7.0.3",
    "eslint": "^9",
    "eslint-config-next": "^15.3.3",
    "eslint-plugin-simple-import-sort": "^12.1.1",
    "eslint-plugin-unused-imports": "^4.1.4",
    "jsdom": "^29.1.1",
    "source-map-support": "^0.5.21",
    "tailwindcss": "^4",
    "typescript": "^5",
    "vitest": "^4.1.10"
};
globalThis["_sentryNextJsVersion"] = "15.5.25";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
const route = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/express/route.js [instrumentation] (ecmascript)");
const ORIGIN = "auto.http.express";
const ATTR_EXPRESS_NAME = "express.name";
const ATTR_EXPRESS_TYPE = "express.type";
const NOOP = ()=>{};
let _isInstrumented = false;
function instrumentExpress(options, tracingChannel$1) {
    if (_isInstrumented) {
        return;
    }
    _isInstrumented = true;
    for (const channelName of [
        channels.CHANNELS.EXPRESS_REGISTER,
        channels.CHANNELS.ROUTER_REGISTER
    ]){
        tracingChannel$1(channelName).subscribe({
            start: NOOP,
            asyncStart: NOOP,
            asyncEnd: NOOP,
            error: NOOP,
            end: captureRegisteredLayerPath
        });
    }
    for (const channelName of [
        channels.CHANNELS.EXPRESS_HANDLE,
        channels.CHANNELS.ROUTER_HANDLE
    ]){
        debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:express] subscribing to channel "${channelName}"`);
        const channel = tracingChannel$1(channelName);
        tracingChannel.bindTracingChannelToSpan(channel, (data)=>getSpanForLayer(data, options), {
            beforeSpanEnd (_span, data) {
                data._sentryCleanup?.();
            }
        });
        channel.subscribe({
            start: NOOP,
            asyncEnd: NOOP,
            end: NOOP,
            error: NOOP,
            asyncStart: popLayerPathForLayer
        });
    }
}
function captureRegisteredLayerPath(data) {
    const stack = data.self?.stack;
    if (!Array.isArray(stack)) {
        return;
    }
    const layer = stack[stack.length - 1];
    if (layer) {
        route.setLayerRegisteredPath(layer, route.getLayerPath(data.arguments ?? []));
    }
}
function popLayerPathForLayer(data) {
    if (!data._sentryStoredLayer) {
        return;
    }
    data._sentryStoredLayer = false;
    const req = data.arguments?.[0];
    if (req) {
        route.popLayerPath(req);
    }
}
function getSpanForLayer(data, options) {
    const layer = data.self;
    const args = data.arguments;
    if (!layer || !Array.isArray(args)) {
        return void 0;
    }
    if (layer.handle?.length === 4) {
        return void 0;
    }
    if (layer.method && !layer.route) {
        return void 0;
    }
    const req = args[0];
    const res = args[1];
    if (!req) {
        return void 0;
    }
    if (!core.getActiveSpan()) {
        return void 0;
    }
    const type = getLayerType(layer);
    const registeredPath = route.getLayerRegisteredPath(layer);
    if (registeredPath != null) {
        route.pushLayerPath(req, registeredPath);
        data._sentryStoredLayer = true;
    }
    const constructedRoute = type === "request_handler" ? route.getConstructedRoute(req) : void 0;
    const matchedRoute = type === "request_handler" && constructedRoute != null ? route.getActualMatchedRoute(req, constructedRoute) : void 0;
    const name = type === "request_handler" ? constructedRoute || "request handler" : type === "router" ? layer.path ?? "/" : layer.name ?? "<anonymous>";
    if (matchedRoute) {
        setHttpServerSpanRoute(matchedRoute);
    }
    if (type === "request_handler" && constructedRoute) {
        const isolationScope = core.getIsolationScope();
        if (isolationScope !== core.getDefaultIsolationScope()) {
            const method = typeof req.method === "string" ? req.method.toUpperCase() : "GET";
            isolationScope.setTransactionName(`${method} ${constructedRoute}`);
        } else {
            debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:express] Isolation scope is still default isolation scope - skipping transaction name");
        }
    }
    if (isLayerIgnored(name, type, options)) {
        return void 0;
    }
    const span = core.startInactiveSpan({
        name,
        attributes: {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
            [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.express`,
            [ATTR_EXPRESS_NAME]: name,
            [ATTR_EXPRESS_TYPE]: type,
            ...matchedRoute ? {
                [attributes.HTTP_ROUTE]: matchedRoute
            } : {}
        }
    });
    if (res && typeof res.once === "function") {
        const onFinish = ()=>{
            span.end();
        };
        res.once("finish", onFinish);
        data._sentryCleanup = ()=>res.removeListener("finish", onFinish);
    }
    return span;
}
function getLayerType(layer) {
    if (layer.name === "router") {
        return "router";
    }
    if (layer.name === "bound dispatch" || layer.name === "handle") {
        return "request_handler";
    }
    return "middleware";
}
function setHttpServerSpanRoute(route) {
    const activeSpan = core.getActiveSpan();
    const rootSpan = activeSpan && core.getRootSpan(activeSpan);
    if (!rootSpan) {
        return;
    }
    if (core.spanToJSON(rootSpan).data[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] !== "http.server") {
        return;
    }
    rootSpan.setAttribute(attributes.HTTP_ROUTE, route);
}
function isLayerIgnored(name, type, options) {
    const { ignoreLayers, ignoreLayersType } = options;
    if (Array.isArray(ignoreLayersType) && ignoreLayersType.includes(type)) {
        return true;
    }
    if (!Array.isArray(ignoreLayers)) {
        return false;
    }
    try {
        return core.stringMatchesSomePattern(name, ignoreLayers, true);
    } catch  {
        return false;
    }
}
exports.instrumentExpress = instrumentExpress; //# sourceMappingURL=instrumentation.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/express/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/express/instrumentation.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Express";
const _expressChannelIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                instrumentation.instrumentExpress(options, diagnosticsChannel__namespace.tracingChannel);
            });
        },
        // Read back by `expressErrorHandler` in `@sentry/core`, which is what captures Express errors.
        getShouldHandleError () {
            return options.shouldHandleError;
        }
    };
};
const expressChannelIntegration = core.defineIntegration(_expressChannelIntegration);
exports.expressChannelIntegration = expressChannelIntegration; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/firestore.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const net = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const net__namespace = /*#__PURE__*/ _interopNamespaceDefault(net);
function startFirestoreSpan(spanName, reference) {
    return core.startInactiveSpan({
        name: `${spanName} ${reference.path}`,
        op: "db.query",
        kind: core.SPAN_KIND.CLIENT,
        attributes: {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.firebase.orchestrion.firestore",
            [attributes.DB_OPERATION_NAME]: spanName,
            ...buildAttributes(reference)
        }
    });
}
function getPortAndAddress(settings) {
    let address;
    let port;
    if (typeof settings.host === "string") {
        if (settings.host.startsWith("[")) {
            if (settings.host.endsWith("]")) {
                address = settings.host.replace(/^\[|\]$/g, "");
            } else if (settings.host.includes("]:")) {
                const lastColonIndex = settings.host.lastIndexOf(":");
                if (lastColonIndex !== -1) {
                    address = settings.host.slice(1, lastColonIndex).replace(/^\[|\]$/g, "");
                    port = settings.host.slice(lastColonIndex + 1);
                }
            }
        } else {
            if (net__namespace.isIPv6(settings.host)) {
                address = settings.host;
            } else {
                const lastColonIndex = settings.host.lastIndexOf(":");
                if (lastColonIndex !== -1) {
                    address = settings.host.slice(0, lastColonIndex);
                    port = settings.host.slice(lastColonIndex + 1);
                } else {
                    address = settings.host;
                }
            }
        }
    }
    return {
        address,
        port: port ? parseInt(port, 10) : void 0
    };
}
function buildAttributes(reference) {
    const firestoreApp = reference.firestore.app;
    const firestoreOptions = firestoreApp.options;
    const settings = reference.firestore.toJSON()?.settings || {};
    const attributes$1 = {
        [attributes.DB_COLLECTION_NAME]: reference.path,
        [attributes.DB_NAMESPACE]: firestoreApp.name,
        [attributes.DB_SYSTEM_NAME]: "firebase.firestore",
        "firebase.firestore.type": reference.type,
        "firebase.firestore.options.projectId": firestoreOptions.projectId,
        "firebase.firestore.options.appId": firestoreOptions.appId,
        "firebase.firestore.options.messagingSenderId": firestoreOptions.messagingSenderId,
        "firebase.firestore.options.storageBucket": firestoreOptions.storageBucket
    };
    const { address, port } = getPortAndAddress(settings);
    if (address) {
        attributes$1[attributes.SERVER_ADDRESS] = address;
    }
    if (port) {
        attributes$1[attributes.SERVER_PORT] = port;
    }
    return attributes$1;
}
exports.getPortAndAddress = getPortAndAddress;
exports.startFirestoreSpan = startFirestoreSpan; //# sourceMappingURL=firestore.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/functions.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const FUNCTIONS_ORIGIN = "auto.firebase.orchestrion.functions";
const WRAPPED = "__sentryFirebaseWrapped";
function wrapFunctionsRegistration(data, triggerType) {
    const args = data.arguments;
    if (!Array.isArray(args) || args.length === 0) {
        return;
    }
    const handlerIndex = typeof args[0] === "function" ? 0 : 1;
    const handler = args[handlerIndex];
    if (typeof handler !== "function" || handler[WRAPPED]) {
        return;
    }
    args[handlerIndex] = wrapHandler(handler, triggerType);
}
function wrapHandler(handler, triggerType) {
    const wrapped = async function(...handlerArgs) {
        const functionName = process.env.FUNCTION_TARGET || process.env.K_SERVICE || "unknown";
        const attributes$1 = {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: FUNCTIONS_ORIGIN,
            [attributes.FAAS_NAME]: functionName,
            [attributes.FAAS_TRIGGER]: triggerType,
            "faas.provider": "firebase"
        };
        if (process.env.GCLOUD_PROJECT) {
            attributes$1["cloud.project_id"] = process.env.GCLOUD_PROJECT;
        }
        if (process.env.EVENTARC_CLOUD_EVENT_SOURCE) {
            attributes$1["cloud.event_source"] = process.env.EVENTARC_CLOUD_EVENT_SOURCE;
        }
        return core.startSpanManual({
            name: `firebase.function.${triggerType}`,
            op: "function.firebase",
            kind: core.SPAN_KIND.SERVER,
            attributes: attributes$1
        }, async (span)=>{
            try {
                const result = await handler.apply(this, handlerArgs);
                span.end();
                return result;
            } catch (error) {
                span.setStatus({
                    code: core.SPAN_STATUS_ERROR
                });
                core.captureException(error, {
                    mechanism: {
                        type: FUNCTIONS_ORIGIN,
                        handled: false
                    }
                });
                span.end();
                await core.flush(2e3);
                throw error;
            }
        });
    };
    wrapped[WRAPPED] = true;
    return wrapped;
}
exports.wrapFunctionsRegistration = wrapFunctionsRegistration; //# sourceMappingURL=functions.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/instrumentation.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

;
globalThis["__SENTRY_SERVER_MODULES__"] = {
    "@calcom/embed-react": "^1.5.3",
    "@dagrejs/dagre": "^1.1.4",
    "@floating-ui/react-dom": "^2.1.9",
    "@next/third-parties": "^16.3.1",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-select": "^2.2.2",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@sentry/nextjs": "^10.63.0",
    "@stackframe/stack": "^2.8.80",
    "@xyflow/react": "^12.10.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^13.2.0",
    "lucide-react": "^0.505.0",
    "next": "^15.3.3",
    "next-themes": "^0.4.6",
    "pino": "^9.9.2",
    "pino-pretty": "^13.1.1",
    "posthog-js": "^1.388.1",
    "posthog-node": "^5.38.0",
    "react": "^19.1.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.1.0",
    "react-hook-form": "^7.56.4",
    "react-international-phone": "^4.5.0",
    "react-markdown": "^10.1.0",
    "react-timezone-select": "^3.2.8",
    "recharts": "^3.1.2",
    "remark-gfm": "^4.0.1",
    "shadcn-ui": "^0.9.5",
    "sonner": "^2.0.5",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "zundo": "^2.3.0",
    "zustand": "^5.0.8",
    "@eslint/eslintrc": "^3",
    "@hey-api/openapi-ts": "^0.99.0",
    "@next/env": "^15.5.25",
    "@tailwindcss/postcss": "^4",
    "@testing-library/react": "^16.3.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/source-map-support": "^0.5.10",
    "@vitejs/plugin-react": "^6.0.3",
    "cross-env": "^7.0.3",
    "eslint": "^9",
    "eslint-config-next": "^15.3.3",
    "eslint-plugin-simple-import-sort": "^12.1.1",
    "eslint-plugin-unused-imports": "^4.1.4",
    "jsdom": "^29.1.1",
    "source-map-support": "^0.5.21",
    "tailwindcss": "^4",
    "typescript": "^5",
    "vitest": "^4.1.10"
};
globalThis["_sentryNextJsVersion"] = "15.5.25";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
const firestore = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/firestore.js [instrumentation] (ecmascript)");
const functions = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/functions.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const FIRESTORE_OPERATIONS = [
    {
        channel: channels.CHANNELS.FIREBASE_FIRESTORE_ADD_DOC,
        spanName: "addDoc",
        useParent: false
    },
    {
        channel: channels.CHANNELS.FIREBASE_FIRESTORE_GET_DOCS,
        spanName: "getDocs",
        useParent: false
    },
    {
        channel: channels.CHANNELS.FIREBASE_FIRESTORE_SET_DOC,
        spanName: "setDoc",
        useParent: true
    },
    {
        channel: channels.CHANNELS.FIREBASE_FIRESTORE_DELETE_DOC,
        spanName: "deleteDoc",
        useParent: true
    }
];
const FUNCTIONS_TRIGGERS = [
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_HTTP_REQUEST,
        triggerType: "http.request"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_HTTP_CALL,
        triggerType: "http.call"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_CREATED,
        triggerType: "firestore.document.created"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_UPDATED,
        triggerType: "firestore.document.updated"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_DELETED,
        triggerType: "firestore.document.deleted"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_FIRESTORE_WRITTEN,
        triggerType: "firestore.document.written"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_SCHEDULER,
        triggerType: "scheduler.scheduled"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_FINALIZED,
        triggerType: "storage.object.finalized"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_ARCHIVED,
        triggerType: "storage.object.archived"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_DELETED,
        triggerType: "storage.object.deleted"
    },
    {
        channel: channels.CHANNELS.FIREBASE_FUNCTIONS_STORAGE_METADATA_UPDATED,
        triggerType: "storage.object.metadataUpdated"
    }
];
const NOOP = ()=>{};
function safe(fn) {
    try {
        return fn();
    } catch (error) {
        debugBuild.DEBUG_BUILD && core.debug.warn("[orchestrion:firebase] error handling channel event", error);
        return void 0;
    }
}
function instrumentFirebase() {
    for (const { channel, spanName, useParent } of FIRESTORE_OPERATIONS){
        tracingChannel.bindTracingChannelToSpan(diagnosticsChannel__namespace.tracingChannel(channel), (data)=>safe(()=>{
                const reference = data.arguments[0];
                if (!reference) {
                    return void 0;
                }
                const spanReference = useParent ? reference.parent || reference : reference;
                return firestore.startFirestoreSpan(spanName, spanReference);
            }));
    }
    for (const { channel, triggerType } of FUNCTIONS_TRIGGERS){
        diagnosticsChannel__namespace.tracingChannel(channel).subscribe({
            start: (data)=>void safe(()=>functions.wrapFunctionsRegistration(data, triggerType)),
            end: NOOP,
            asyncStart: NOOP,
            asyncEnd: NOOP,
            error: NOOP
        });
    }
}
exports.instrumentFirebase = instrumentFirebase; //# sourceMappingURL=instrumentation.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/instrumentation.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "Firebase";
const _firebaseChannelIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            core.waitForTracingChannelBinding(()=>{
                instrumentation.instrumentFirebase();
            });
        }
    };
};
const firebaseChannelIntegration = core.defineIntegration(_firebaseChannelIntegration);
exports.firebaseChannelIntegration = firebaseChannelIntegration; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/redis.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/debug-build.js [instrumentation] (ecmascript)");
const channels = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)");
const redisStatementSerializer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/redis/redis-statement-serializer.js [instrumentation] (ecmascript)");
const tracingChannel = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/tracing-channel.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const diagnosticsChannel__namespace = /*#__PURE__*/ _interopNamespaceDefault(diagnosticsChannel);
const INTEGRATION_NAME = "RedisChannel";
const ORIGIN = "auto.db.orchestrion.redis";
const ATTR_DB_CONNECTION_STRING = "db.connection_string";
const DB_SYSTEM_VALUE_REDIS = "redis";
function endSpan(span, err) {
    if (err) {
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: err instanceof Error ? err.message : String(err)
        });
    }
    span.end();
}
function runResponseHook(hook, span, command, args, result) {
    if (!hook) {
        return;
    }
    try {
        hook(span, command, args, result);
    } catch  {}
}
function stripCommandOptions(args) {
    const first = args[0];
    if (core.isObjectLike(first) && Object.getOwnPropertySymbols(first).length > 0) {
        return args.slice(1);
    }
    return args;
}
function removeCredentialsFromConnectionString(url) {
    if (typeof url !== "string" || !url) {
        return void 0;
    }
    try {
        const parsed = new URL(url);
        parsed.searchParams.delete("user_pwd");
        parsed.username = "";
        parsed.password = "";
        return parsed.href;
    } catch  {
        return void 0;
    }
}
function nodeRedisAttributes(options) {
    return {
        [attributes.DB_SYSTEM]: DB_SYSTEM_VALUE_REDIS,
        [attributes.NET_PEER_NAME]: options?.socket?.host,
        [attributes.NET_PEER_PORT]: options?.socket?.port,
        [ATTR_DB_CONNECTION_STRING]: removeCredentialsFromConnectionString(options?.url),
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
    };
}
function startCommandSpan(commandName, commandArgs, attributes$1) {
    return core.startInactiveSpan({
        name: `redis-${commandName}`,
        kind: core.SPAN_KIND.CLIENT,
        attributes: {
            ...attributes$1,
            [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
            [attributes.DB_STATEMENT]: redisStatementSerializer.defaultDbStatementSerializer(commandName, commandArgs)
        }
    });
}
function subscribeLegacyRedisCommand(responseHook) {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.REDIS_COMMAND);
    const noop = ()=>{};
    channel.subscribe({
        end: noop,
        asyncStart: noop,
        asyncEnd: noop,
        start (data) {
            const command = data.arguments?.[0];
            if (!command || typeof command !== "object") {
                return;
            }
            const originalCallback = command.callback;
            if (typeof originalCallback !== "function") {
                return;
            }
            const client = data.self;
            const attributes$1 = {
                [attributes.DB_SYSTEM]: DB_SYSTEM_VALUE_REDIS,
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
            };
            attributes$1[attributes.NET_PEER_NAME] = client?.connection_options?.host;
            attributes$1[attributes.NET_PEER_PORT] = client?.connection_options?.port;
            if (client?.address) {
                attributes$1[ATTR_DB_CONNECTION_STRING] = `redis://${client.address}`;
            }
            const span = startCommandSpan(command.command, command.args ?? [], attributes$1);
            data._sentrySpan = span;
            const parentSpan = core.getActiveSpan();
            command.callback = function(err, reply) {
                if (!err) {
                    runResponseHook(responseHook, span, command.command, command.args ?? [], reply);
                }
                endSpan(span, err);
                const args = arguments;
                return core.withActiveSpan(parentSpan ?? null, ()=>originalCallback.apply(this, args));
            };
        },
        error (data) {
            const span = data._sentrySpan;
            if (span) {
                endSpan(span, data.error);
            }
        }
    });
}
function bindNodeRedisCommandChannel(channelName, getWireArgs, responseHook) {
    const channel = diagnosticsChannel__namespace.tracingChannel(channelName);
    tracingChannel.bindTracingChannelToSpan(channel, (data)=>{
        const wireArgs = getWireArgs(data);
        if (!wireArgs?.length) {
            return void 0;
        }
        const commandName = String(wireArgs[0]);
        const options = data.self?.options;
        return startCommandSpan(commandName, wireArgs.slice(1), nodeRedisAttributes(options));
    }, {
        beforeSpanEnd (span, data) {
            if ("error" in data || !responseHook) {
                return;
            }
            const wireArgs = getWireArgs(data);
            if (wireArgs?.length) {
                runResponseHook(responseHook, span, String(wireArgs[0]), wireArgs.slice(1), data.result);
            }
        }
    });
}
function getSendCommandArgs(data) {
    const args = data.arguments?.[0];
    return Array.isArray(args) ? args : void 0;
}
function getExecutorArgs(data) {
    const command = data.arguments?.[0];
    const jsArgs = data.arguments?.[1];
    if (typeof command?.transformArguments !== "function" || !Array.isArray(jsArgs)) {
        return void 0;
    }
    try {
        return command.transformArguments(...stripCommandOptions(jsArgs));
    } catch  {
        return void 0;
    }
}
function bindNodeRedisConnectChannel() {
    const channel = diagnosticsChannel__namespace.tracingChannel(channels.CHANNELS.NODE_REDIS_CONNECT);
    tracingChannel.bindTracingChannelToSpan(channel, (data)=>{
        const options = data.self?.options;
        return core.startInactiveSpan({
            name: "redis-connect",
            kind: core.SPAN_KIND.CLIENT,
            attributes: {
                ...nodeRedisAttributes(options),
                [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db"
            }
        });
    });
}
function bindNodeRedisBatchChannel(channelName, getOperation) {
    const channel = diagnosticsChannel__namespace.tracingChannel(channelName);
    tracingChannel.bindTracingChannelToSpan(channel, (data)=>{
        const commands = data.arguments?.[0];
        const size = Array.isArray(commands) ? commands.length : void 0;
        const socket = data.self?.options?.socket;
        return core.startInactiveSpan({
            name: getOperation(data),
            kind: core.SPAN_KIND.CLIENT,
            attributes: {
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
                [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
                [attributes.DB_SYSTEM_NAME]: DB_SYSTEM_VALUE_REDIS,
                ...size && size > 1 ? {
                    [attributes.DB_OPERATION_BATCH_SIZE]: size
                } : {},
                ...socket?.host != null ? {
                    [attributes.SERVER_ADDRESS]: socket.host
                } : {},
                ...socket?.port != null ? {
                    [attributes.SERVER_PORT]: socket.port
                } : {}
            }
        });
    });
}
const _redisChannelIntegration = (options = {})=>{
    const responseHook = options.responseHook;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            if (!diagnosticsChannel__namespace.tracingChannel) {
                return;
            }
            debugBuild.DEBUG_BUILD && core.debug.log(`[orchestrion:redis] subscribing to "${channels.CHANNELS.REDIS_COMMAND}" and node-redis channels`);
            subscribeLegacyRedisCommand(responseHook);
            core.waitForTracingChannelBinding(()=>{
                bindNodeRedisCommandChannel(channels.CHANNELS.NODE_REDIS_COMMAND, getSendCommandArgs, responseHook);
                bindNodeRedisCommandChannel(channels.CHANNELS.NODE_REDIS_EXECUTOR, getExecutorArgs, responseHook);
                bindNodeRedisConnectChannel();
                bindNodeRedisBatchChannel(channels.CHANNELS.NODE_REDIS_MULTI, ()=>"MULTI");
                bindNodeRedisBatchChannel(channels.CHANNELS.NODE_REDIS_PIPELINE, ()=>"PIPELINE");
                bindNodeRedisBatchChannel(channels.CHANNELS.NODE_REDIS_BATCH, (data)=>data.arguments?.[2] !== void 0 ? "MULTI" : "PIPELINE");
            });
        }
    };
};
const redisChannelIntegration = core.defineIntegration(_redisChannelIntegration);
exports.redisChannelIntegration = redisChannelIntegration; //# sourceMappingURL=redis.js.map
}),
];

//# sourceMappingURL=8e2ec_%40sentry_server-utils_build_cjs_integrations_tracing-channel_557aa06f._.js.map