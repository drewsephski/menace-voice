module.exports = [
"[project]/dograh-1/ui/.next-internal/server/app/api/auth/oss/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/dograh-1/ui/src/lib/auth/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthProvider",
    ()=>getAuthProvider,
    "getSignupEnabled",
    ()=>getSignupEnabled,
    "getStackConfig",
    ()=>getStackConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/src/lib/apiClient.ts [app-route] (ecmascript)");
;
;
let cachedConfig = null;
/**
 * Fetches the auth configuration from the backend health endpoint and caches it.
 *
 * The backend reports the active auth provider and — when it is `stack` — the
 * public Stack client config (project id + publishable client key). The UI uses
 * these at runtime to initialize Stack Auth, so they no longer need to be baked
 * into the browser bundle at build time. Falls back to local auth on error.
 */ async function resolveAuthConfig() {
    if (cachedConfig) {
        return cachedConfig;
    }
    try {
        const backendUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerBackendUrl"])();
        const res = await fetch(`${backendUrl}/api/v1/health`, {
            next: {
                revalidate: 300
            }
        });
        if (res.ok) {
            const data = await res.json();
            const authProvider = data.auth_provider || "local";
            const stackConfig = authProvider === "stack" && data.stack_project_id && data.stack_publishable_client_key ? {
                projectId: data.stack_project_id,
                publishableClientKey: data.stack_publishable_client_key
            } : null;
            // Default to signup-enabled when the backend omits the field (older api
            // versions before the flag existed) — matches the backend's own default.
            const signupEnabled = data.signup_enabled !== false;
            cachedConfig = {
                authProvider,
                stackConfig,
                signupEnabled
            };
            return cachedConfig;
        }
    } catch  {
    // Backend not reachable — fall through without caching so we retry next request.
    }
    // Unknown (backend unreachable). Return the local fallback for THIS request but
    // do NOT cache it: caching here would pin the entire UI to local auth until a
    // container restart if the first resolution loses the startup race with the api
    // service. Leaving it uncached means the next request retries and self-heals.
    return {
        authProvider: "local",
        stackConfig: null,
        signupEnabled: true
    };
}
async function getAuthProvider() {
    return (await resolveAuthConfig()).authProvider;
}
async function getStackConfig() {
    return (await resolveAuthConfig()).stackConfig;
}
async function getSignupEnabled() {
    return (await resolveAuthConfig()).signupEnabled;
}
}),
"[project]/dograh-1/ui/src/app/api/auth/oss/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Provides authentication token to LocalProviderWrapper once loaded
  in the browser.
  Returns 401 if no token cookie exists (user needs to log in).
*/ __turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$auth$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/src/lib/auth/config.ts [app-route] (ecmascript)");
;
;
;
const OSS_TOKEN_COOKIE = 'dograh_auth_token';
const OSS_USER_COOKIE = 'dograh_auth_user';
async function GET() {
    const authProvider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$auth$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthProvider"])();
    // Only handle OSS mode
    if (authProvider !== 'local') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Not in local mode'
        }, {
            status: 400
        });
    }
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(OSS_TOKEN_COOKIE)?.value;
    const user = cookieStore.get(OSS_USER_COOKIE)?.value;
    // If no token exists, return 401 (user needs to sign up or log in)
    if (!token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Not authenticated'
        }, {
            status: 401
        });
    }
    // Return the auth info as JSON
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        token,
        user: user ? JSON.parse(user) : {
            id: token,
            name: 'Local User',
            provider: 'local'
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4029e356._.js.map