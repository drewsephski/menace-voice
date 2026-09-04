(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__00debc35._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/dograh-1/ui/src/lib/apiClient.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/dograh-1/ui/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "isPublicPath",
    ()=>isPublicPath,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$apiClient$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/src/lib/apiClient.ts [middleware-edge] (ecmascript)");
;
;
const OSS_TOKEN_COOKIE = 'dograh_auth_token';
// Paths that don't require authentication in OSS mode.
// `/embed` serves the public website widget (e.g. /embed/dograh-widget.js),
// which must be fetchable without a session cookie so third-party sites can
// embed it — otherwise the middleware 307-redirects the asset to /auth/login.
const PUBLIC_PATHS = [
    '/',
    '/auth/login',
    '/auth/signup',
    '/embed',
    '/docs'
];
const EXACT_PUBLIC_PATHS = [
    '/pilot'
];
let cachedAuthProvider = null;
function isPublicPath(pathname) {
    return EXACT_PUBLIC_PATHS.includes(pathname) || PUBLIC_PATHS.some((path)=>pathname === path || pathname.startsWith(`${path}/`));
}
async function fetchAuthProvider() {
    if (cachedAuthProvider) {
        return cachedAuthProvider;
    }
    try {
        const backendUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$apiClient$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getServerBackendUrl"])();
        const res = await fetch(`${backendUrl}/api/v1/health`);
        if (res.ok) {
            const data = await res.json();
            // Only cache a DEFINITIVE answer from the backend. Never cache a failure:
            // this is a module-scoped cache with no TTL, so a single early request
            // during container startup (before the api service is reachable) would
            // otherwise poison it to 'local' for the life of the worker — redirecting
            // every Stack user to the local /auth/login form even though the backend
            // reports `stack`.
            cachedAuthProvider = data.auth_provider || 'local';
            return cachedAuthProvider;
        }
    } catch  {
    // Backend not reachable — fall through without caching so we retry next request.
    }
    // Provider unknown (backend unreachable). Return a non-'local' sentinel so the
    // middleware does NOT guard/redirect: assuming 'local' here would bounce Stack
    // users to /auth/login. Deliberately not cached — the next request retries.
    return 'unknown';
}
async function middleware(request) {
    const { pathname } = request.nextUrl;
    if (isPublicPath(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const authProvider = await fetchAuthProvider();
    // Only handle OSS mode
    if (authProvider !== 'local') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const token = request.cookies.get(OSS_TOKEN_COOKIE)?.value;
    // Allow public paths without auth. Match on a path-segment boundary (exact
    // match or a `/`-delimited subpath) rather than a bare prefix, so a public
    // entry like `/embed` exempts `/embed` and `/embed/...` but NOT sibling
    // routes such as `/embed-admin` — a bare startsWith would let those bypass
    // authentication.
    // If no token, redirect to login
    if (!token) {
        const loginUrl = new URL('/auth/login', request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public static assets (anything with a file extension, e.g. /dograh-logo.png)
     */ '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf)).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__00debc35._.js.map