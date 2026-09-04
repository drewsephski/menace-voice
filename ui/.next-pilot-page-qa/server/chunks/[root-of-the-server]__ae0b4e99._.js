module.exports = [
"[project]/dograh-1/ui/.next-internal/server/app/api/config/auth/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/dograh-1/ui/src/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// logger.ts
// Determine if we're in browser or server environment
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const isBrowser = "undefined" !== 'undefined';
const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
// Helper to get timestamp
function getTimestamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ms = String(now.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
}
// Helper to get clean caller info (for development)
function getCallerInfo() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const err = new Error();
        const stack = err.stack?.split('\n');
        if (!stack || stack.length < 4) return '';
        // Look for the first non-logger file in the stack
        for(let i = 3; i < Math.min(stack.length, 10); i++){
            const line = stack[i];
            // Skip logger.ts itself and node internals
            if (line.includes('logger.ts') || line.includes('logger.js') || line.includes('node_modules') || line.includes('node:') || line.includes('webpack-internal') || line.includes('<anonymous>')) continue;
            // Try multiple patterns to extract file info
            const patterns = [
                // Standard stack trace pattern
                /(?:at\s+.*?\s+\(|at\s+)(.*?):(\d+):(\d+)\)?/,
                // Webpack pattern
                /at\s+(?:async\s+)?(?:.*?\s+)?(?:\()?webpack-internal:\/\/\/(?:\.\/)?(.+?):(\d+):(\d+)/,
                // Next.js server component pattern
                /at\s+(?:async\s+)?(?:.*?\s+)?(?:\()?(.+?):(\d+):(\d+)/
            ];
            for (const pattern of patterns){
                const match = line.match(pattern);
                if (match) {
                    let filePath = match[1];
                    const lineNum = match[2];
                    // Clean up various path formats
                    filePath = filePath// Handle file:// URLs from source maps
                    .replace(/^file:\/\//, '')// Remove webpack prefixes
                    .replace(/^webpack-internal:\/\/\/(?:\.\/)?\(rsc\)\/(?:\.\/)/, '').replace(/^webpack-internal:\/\/\/(?:\.\/)/, '')// Remove absolute paths to make them relative
                    .replace(/^.*\/dograh\/ui\//, '')// Remove .next build paths
                    .replace(/.*\.next\/server\/app\//, 'app/').replace(/.*\.next\/server\//, '')// Clean up app directory paths
                    .replace(/^app\//, '')// Remove query strings
                    .replace(/\?.*$/, '')// Clean up compiled chunk names - extract the likely source
                    .replace(/chunks\/ssr\/_?[a-f0-9]+_?\.?/, '').replace(/_[a-f0-9]{6,}\./, '.')// Try to infer original file from common patterns
                    .replace(/^([a-z0-9]+)\._.js$/, (_, name)=>{
                        // Common Next.js page mappings
                        if (name === 'page') return 'page.tsx';
                        return `${name}.ts`;
                    });
                    // If we still have a chunk-like name, try to make it more readable
                    if (filePath.match(/^_?[a-f0-9]+_?\./)) {
                        // This is likely a compiled chunk, extract what we can
                        const cleanMatch = line.match(/at\s+(?:async\s+)?(\w+)/);
                        if (cleanMatch && cleanMatch[1] !== 'async') {
                            // Use the function name as a hint
                            const funcName = cleanMatch[1];
                            if (funcName === 'Home') filePath = 'page.tsx';
                            else if (funcName === 'AfterSignInPage') filePath = 'after-sign-in/page.tsx';
                            else if (funcName.includes('Page')) filePath = `${funcName.replace('Page', '').toLowerCase()}/page.tsx`;
                            else filePath = `${funcName}.tsx`;
                        }
                    }
                    // No need to add prefixes since we have clean relative paths from source maps
                    return `${filePath}:${lineNum}`;
                }
            }
        }
        return '';
    } catch  {
        return '';
    }
}
// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    dim: '\x1b[2m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m'
};
// Format log level with color
function formatLevel(level) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    switch(level){
        case 'debug':
            return `${colors.gray}DEBUG${colors.reset}`;
        case 'info':
            return `${colors.cyan}INFO${colors.reset}`;
        case 'warn':
            return `${colors.yellow}WARN${colors.reset}`;
        case 'error':
            return `${colors.red}ERROR${colors.reset}`;
        default:
            return level.toUpperCase();
    }
}
// Server-side logging function
function serverLog(level, args) {
    const timestamp = getTimestamp();
    const caller = getCallerInfo();
    const levelStr = formatLevel(level);
    // Format the message
    const message = args.map((arg)=>{
        if (arg instanceof Error) {
            return `${arg.message}\n${arg.stack}`;
        }
        return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
    }).join(' ');
    // Build the log line
    const prefix = `${colors.gray}[${timestamp}]${colors.reset} ${levelStr}`;
    const callerInfo = caller ? ` ${colors.dim}[${caller}]${colors.reset}` : '';
    // Use appropriate console method
    switch(level){
        case 'debug':
            console.debug(`${prefix}${callerInfo} ${message}`);
            break;
        case 'info':
            console.info(`${prefix}${callerInfo} ${message}`);
            break;
        case 'warn':
            console.warn(`${prefix}${callerInfo} ${message}`);
            break;
        case 'error':
            console.error(`${prefix}${callerInfo} ${message}`);
            break;
    }
}
// Create a wrapper that adds caller info and handles multiple arguments
const logger = {
    debug: (...args)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            serverLog('debug', args);
        }
    },
    info: (...args)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            serverLog('info', args);
        }
    },
    warn: (...args)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            serverLog('warn', args);
        }
    },
    error: (...args)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            serverLog('error', args);
        }
    }
};
const __TURBOPACK__default__export__ = logger;
}),
"[project]/dograh-1/ui/src/app/api/config/auth/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$auth$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/src/lib/auth/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/src/lib/logger.ts [app-route] (ecmascript)");
;
;
;
async function GET() {
    const provider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$auth$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthProvider"])();
    // When using Stack, hand the public client config to the browser so it can
    // initialize the Stack SDK at runtime (no build-time NEXT_PUBLIC_* needed).
    const stackConfig = provider === 'stack' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$auth$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStackConfig"])() : null;
    const signupEnabled = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$auth$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSignupEnabled"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].debug(`Got provider ${provider} from getAuthProvider`);
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        provider,
        stackProjectId: stackConfig?.projectId ?? null,
        stackPublishableClientKey: stackConfig?.publishableClientKey ?? null,
        signupEnabled
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae0b4e99._.js.map