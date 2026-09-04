(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dograh-1/ui/src/instrumentation-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
__turbopack_context__.s([
    "onRouterTransitionStart",
    ()=>onRouterTransitionStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$nextjs$40$10$2e$73$2e$0_$40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$5f40$openteleme_47815eb4fccc6d691ec0c376ae041c13$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+nextjs@10.73.0_@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1__@openteleme_47815eb4fccc6d691ec0c376ae041c13/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$nextjs$40$10$2e$73$2e$0_$40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$5f40$openteleme_47815eb4fccc6d691ec0c376ae041c13$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+nextjs@10.73.0_@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1__@openteleme_47815eb4fccc6d691ec0c376ae041c13/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$425$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$40$19$2e$2$2e$8$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/posthog-js@1.425.0_@types+react@19.2.18_react@19.2.8/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
globalThis["_sentryRouteManifest"] = "{\"dynamicRoutes\":[{\"path\":\"/campaigns/:campaignId\",\"regex\":\"^/campaigns/([^/]+)$\",\"paramNames\":[\"campaignId\"],\"hasOptionalPrefix\":false},{\"path\":\"/campaigns/:campaignId/edit\",\"regex\":\"^/campaigns/([^/]+)/edit$\",\"paramNames\":[\"campaignId\"],\"hasOptionalPrefix\":false},{\"path\":\"/handler/:stack*\",\"regex\":\"^/handler/(.+)$\",\"paramNames\":[\"stack\"],\"hasOptionalPrefix\":false},{\"path\":\"/telephony-configurations/:configId\",\"regex\":\"^/telephony-configurations/([^/]+)$\",\"paramNames\":[\"configId\"],\"hasOptionalPrefix\":false},{\"path\":\"/tools/:toolUuid\",\"regex\":\"^/tools/([^/]+)$\",\"paramNames\":[\"toolUuid\"],\"hasOptionalPrefix\":false},{\"path\":\"/workflow/:workflowId\",\"regex\":\"^/workflow/([^/]+)$\",\"paramNames\":[\"workflowId\"],\"hasOptionalPrefix\":false},{\"path\":\"/workflow/:workflowId/run/:runId\",\"regex\":\"^/workflow/([^/]+)/run/([^/]+)$\",\"paramNames\":[\"workflowId\",\"runId\"],\"hasOptionalPrefix\":false},{\"path\":\"/workflow/:workflowId/runs\",\"regex\":\"^/workflow/([^/]+)/runs$\",\"paramNames\":[\"workflowId\"],\"hasOptionalPrefix\":false},{\"path\":\"/workflow/:workflowId/settings\",\"regex\":\"^/workflow/([^/]+)/settings$\",\"paramNames\":[\"workflowId\"],\"hasOptionalPrefix\":false}],\"staticRoutes\":[{\"path\":\"/\"},{\"path\":\"/after-sign-in\"},{\"path\":\"/agent-onboarding\"},{\"path\":\"/api-keys\"},{\"path\":\"/auth/login\"},{\"path\":\"/auth/signup\"},{\"path\":\"/automation\"},{\"path\":\"/billing\"},{\"path\":\"/campaigns\"},{\"path\":\"/campaigns/new\"},{\"path\":\"/docs\"},{\"path\":\"/files\"},{\"path\":\"/model-configurations\"},{\"path\":\"/overview\"},{\"path\":\"/pilot\"},{\"path\":\"/recordings\"},{\"path\":\"/reports\"},{\"path\":\"/settings\"},{\"path\":\"/superadmin\"},{\"path\":\"/superadmin/runs\"},{\"path\":\"/telephony-configurations\"},{\"path\":\"/tools\"},{\"path\":\"/usage\"},{\"path\":\"/workflow\"},{\"path\":\"/workflow/create\"}],\"isrRoutes\":[]}";
globalThis["_sentryNextJsVersion"] = "15.5.25";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
;
;
// Drop errors originating from browser extensions (MetaMask's inpage.js,
// injected widgets, etc.) by matching their URL scheme.
const sharedSentryOptions = {
    debug: false,
    denyUrls: [
        /^chrome-extension:\/\//i,
        /^moz-extension:\/\//i,
        /^safari-extension:\/\//i,
        /^safari-web-extension:\/\//i
    ]
};
// Initialize Sentry - prioritize NEXT_PUBLIC env vars, fallback to API
const initSentry = ()=>{
    const hasPublicConfig = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SENTRY_DSN;
    if (hasPublicConfig) {
        // Use client-side environment variables
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$nextjs$40$10$2e$73$2e$0_$40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$5f40$openteleme_47815eb4fccc6d691ec0c376ae041c13$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
            dsn: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SENTRY_DSN,
            ...sharedSentryOptions
        });
        console.log('Sentry initialized from NEXT_PUBLIC config');
    } else {
        // Fallback to API-based configuration
        fetch('/api/config/sentry').then((res)=>res.json()).then((config)=>{
            if (config.enabled && config.dsn) {
                __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$nextjs$40$10$2e$73$2e$0_$40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$5f40$openteleme_47815eb4fccc6d691ec0c376ae041c13$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
                    dsn: config.dsn,
                    ...sharedSentryOptions
                });
                console.log('Sentry initialized from API config');
            } else {
                console.log('Sentry disabled (not enabled or DSN not configured)');
            }
        }).catch((err)=>{
            console.error('Failed to fetch Sentry configuration:', err);
        });
    }
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// Initialize PostHog - prioritize NEXT_PUBLIC env vars, fallback to API
const initPostHog = ()=>{
    const hasPublicConfig = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_KEY;
    if (hasPublicConfig) {
        // Use client-side environment variables
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$425$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$40$19$2e$2$2e$8$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_HOST || '/ingest',
            ui_host: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_POSTHOG_UI_HOST || 'https://us.posthog.com',
            capture_pageview: 'history_change',
            capture_pageleave: true,
            capture_exceptions: true,
            cross_subdomain_cookie: true,
            debug: ("TURBOPACK compile-time value", "development") === 'development'
        });
        console.log('PostHog initialized from NEXT_PUBLIC config');
    } else {
        // Fallback to API-based configuration
        fetch('/api/config/posthog').then((res)=>res.json()).then((config)=>{
            if (config.enabled && config.key) {
                __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$425$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$40$19$2e$2$2e$8$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(config.key, {
                    api_host: config.host,
                    ui_host: config.uiHost,
                    capture_pageview: 'history_change',
                    capture_pageleave: true,
                    capture_exceptions: true,
                    cross_subdomain_cookie: true,
                    debug: ("TURBOPACK compile-time value", "development") === 'development'
                });
                console.log('PostHog initialized from API config');
            } else {
                console.log('PostHog disabled (not enabled or key not configured)');
            }
        }).catch((err)=>{
            console.error('Failed to fetch PostHog configuration:', err);
        });
    }
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const onRouterTransitionStart = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$nextjs$40$10$2e$73$2e$0_$40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$5f40$openteleme_47815eb4fccc6d691ec0c376ae041c13$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureRouterTransitionStart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dograh-1_ui_src_instrumentation-client_ts_13edc9d4._.js.map