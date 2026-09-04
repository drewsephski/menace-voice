module.exports = [
"[project]/dograh-1/ui/.next-internal/server/app/api/config/version/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/dograh-1/ui/src/lib/apiClient.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClientConfig",
    ()=>createClientConfig,
    "getServerBackendUrl",
    ()=>getServerBackendUrl,
    "resolveBrowserBackendUrl",
    ()=>resolveBrowserBackendUrl,
    "setupAuthInterceptor",
    ()=>setupAuthInterceptor
]);
function getServerBackendUrl() {
    return process.env.BACKEND_URL || 'http://api:8000';
}
function resolveBrowserBackendUrl(backendApiEndpoint) {
    return ("TURBOPACK compile-time value", "http://localhost:8000") || backendApiEndpoint || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '');
}
const createClientConfig = (config)=>{
    // Use different URLs for server-side vs client-side
    const isServer = "undefined" === 'undefined';
    let baseUrl;
    if ("TURBOPACK compile-time truthy", 1) {
        baseUrl = getServerBackendUrl();
    } else //TURBOPACK unreachable
    ;
    return {
        ...config,
        baseUrl
    };
};
let interceptorRegistered = false;
function setupAuthInterceptor(apiClient, getAccessToken) {
    if (interceptorRegistered) return;
    interceptorRegistered = true;
    apiClient.interceptors.request.use(async (request)=>{
        if (request.headers.get('Authorization')) {
            return request;
        }
        try {
            const token = await getAccessToken();
            request.headers.set('Authorization', `Bearer ${token}`);
        } catch  {
        // If token retrieval fails, let the request proceed without auth
        }
        return request;
    });
}
}),
"[project]/dograh-1/ui/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"name\":\"ui\",\"version\":\"1.45.0\",\"private\":true,\"scripts\":{\"dev\":\"cross-env NODE_OPTIONS=--enable-source-maps node scripts/dev-server.mjs\",\"build\":\"next build\",\"start\":\"next start\",\"lint\":\"next lint\",\"fix-lint\":\"npx eslint --fix . --ignore-pattern '.next/*' --ignore-pattern 'node_modules/*' --ignore-pattern 'next-env.d.ts'\",\"generate-client\":\"openapi-ts\",\"test\":\"vitest run\",\"test:display-options\":\"node scripts/test-display-options.mts\",\"lint:lead-flow\":\"bash ../../user_onboarding/scripts/check_lead_flow.sh\"},\"dependencies\":{\"@calcom/embed-react\":\"^1.5.3\",\"@dagrejs/dagre\":\"^1.1.4\",\"@floating-ui/react-dom\":\"^2.1.9\",\"@next/third-parties\":\"^16.3.1\",\"@radix-ui/react-alert-dialog\":\"^1.1.15\",\"@radix-ui/react-checkbox\":\"^1.3.2\",\"@radix-ui/react-collapsible\":\"^1.1.12\",\"@radix-ui/react-dialog\":\"^1.1.15\",\"@radix-ui/react-dropdown-menu\":\"^2.1.7\",\"@radix-ui/react-label\":\"^2.1.3\",\"@radix-ui/react-popover\":\"^1.1.14\",\"@radix-ui/react-progress\":\"^1.1.7\",\"@radix-ui/react-radio-group\":\"^1.3.7\",\"@radix-ui/react-select\":\"^2.2.2\",\"@radix-ui/react-separator\":\"^1.1.8\",\"@radix-ui/react-slot\":\"^1.2.4\",\"@radix-ui/react-switch\":\"^1.1.4\",\"@radix-ui/react-tabs\":\"^1.1.13\",\"@radix-ui/react-tooltip\":\"^1.2.8\",\"@sentry/nextjs\":\"^10.63.0\",\"@stackframe/stack\":\"^2.8.80\",\"@xyflow/react\":\"^12.10.2\",\"class-variance-authority\":\"^0.7.1\",\"clsx\":\"^2.1.1\",\"date-fns\":\"^4.1.0\",\"framer-motion\":\"^13.2.0\",\"lucide-react\":\"^0.505.0\",\"next\":\"^15.3.3\",\"next-themes\":\"^0.4.6\",\"pino\":\"^9.9.2\",\"pino-pretty\":\"^13.1.1\",\"posthog-js\":\"^1.388.1\",\"posthog-node\":\"^5.38.0\",\"react\":\"^19.1.0\",\"react-day-picker\":\"^9.8.0\",\"react-dom\":\"^19.1.0\",\"react-hook-form\":\"^7.56.4\",\"react-international-phone\":\"^4.5.0\",\"react-markdown\":\"^10.1.0\",\"react-timezone-select\":\"^3.2.8\",\"recharts\":\"^3.1.2\",\"remark-gfm\":\"^4.0.1\",\"shadcn-ui\":\"^0.9.5\",\"sonner\":\"^2.0.5\",\"tailwind-merge\":\"^3.2.0\",\"tailwindcss-animate\":\"^1.0.7\",\"tw-animate-css\":\"^1.2.5\",\"zundo\":\"^2.3.0\",\"zustand\":\"^5.0.8\"},\"devDependencies\":{\"@eslint/eslintrc\":\"^3\",\"@hey-api/openapi-ts\":\"^0.99.0\",\"@next/env\":\"^15.5.25\",\"@tailwindcss/postcss\":\"^4\",\"@testing-library/react\":\"^16.3.2\",\"@types/node\":\"^20\",\"@types/react\":\"^19\",\"@types/react-dom\":\"^19\",\"@types/source-map-support\":\"^0.5.10\",\"@vitejs/plugin-react\":\"^6.0.3\",\"cross-env\":\"^7.0.3\",\"eslint\":\"^9\",\"eslint-config-next\":\"^15.3.3\",\"eslint-plugin-simple-import-sort\":\"^12.1.1\",\"eslint-plugin-unused-imports\":\"^4.1.4\",\"jsdom\":\"^29.1.1\",\"source-map-support\":\"^0.5.21\",\"tailwindcss\":\"^4\",\"typescript\":\"^5\",\"vitest\":\"^4.1.10\"}}"));}),
"[project]/dograh-1/ui/src/app/api/config/version/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/src/lib/apiClient.ts [app-route] (ecmascript)");
// Import version from package.json at build time
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/package.json (json)");
;
;
;
const HEALTHCHECK_TIMEOUT_MS = 3000;
function trimTrailingSlash(url) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
}
function getHealthcheckFailureMessage(error, backendUrl) {
    const errorName = error && typeof error === "object" && "name" in error ? String(error.name) : "";
    if (errorName === "AbortError" || errorName === "TimeoutError") {
        return `Backend health check timed out after ${HEALTHCHECK_TIMEOUT_MS}ms while trying to reach ${backendUrl}.`;
    }
    return `Backend is not reachable at ${backendUrl}.`;
}
async function GET() {
    const uiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$package$2e$json__$28$json$29$__["default"].version || "dev";
    const backendUrl = trimTrailingSlash((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerBackendUrl"])());
    const healthcheckUrl = `${backendUrl}/api/v1/health`;
    let apiVersion = "unknown";
    let deploymentMode = "oss";
    let authProvider = "local";
    let turnEnabled = false;
    let forceTurnRelay = false;
    let tunnelUrl = null;
    let backendApiEndpoint = null;
    let backendStatus = "unreachable";
    let backendMessage = `Backend is not reachable at ${backendUrl}.`;
    try {
        const response = await fetch(healthcheckUrl, {
            cache: "no-store",
            signal: AbortSignal.timeout(HEALTHCHECK_TIMEOUT_MS)
        });
        if (!response.ok) {
            backendMessage = `Backend health check at ${healthcheckUrl} returned HTTP ${response.status}.`;
        } else {
            const data = await response.json();
            apiVersion = data.version;
            deploymentMode = data.deployment_mode;
            authProvider = data.auth_provider;
            turnEnabled = Boolean(data.turn_enabled);
            forceTurnRelay = Boolean(data.force_turn_relay);
            tunnelUrl = data.tunnel_url ?? null;
            backendApiEndpoint = typeof data.backend_api_endpoint === "string" && data.backend_api_endpoint.length > 0 ? trimTrailingSlash(data.backend_api_endpoint) : null;
            backendStatus = "reachable";
            backendMessage = null;
        }
    } catch (error) {
        apiVersion = "unavailable";
        backendMessage = getHealthcheckFailureMessage(error, backendUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ui: uiVersion,
        api: apiVersion,
        deploymentMode,
        authProvider,
        turnEnabled,
        forceTurnRelay,
        tunnelUrl,
        backendApiEndpoint,
        backend: {
            status: backendStatus,
            url: backendUrl,
            healthcheckUrl,
            message: backendMessage
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab654168._.js.map