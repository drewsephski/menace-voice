(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/common.ts
/** @internal */ __turbopack_context__.s([
    "stackAppInternalsSymbol",
    ()=>stackAppInternalsSymbol
]);
const stackAppInternalsSymbol = Symbol.for("StackAuth--DO-NOT-USE-OR-YOU-WILL-BE-FIRED--StackAppInternals");
;
 //# sourceMappingURL=common.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/env.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/env.ts
/**
* Centralized environment-variable reads for the SDK.
*
* Keep each key explicit and reference `process.env.KEY` directly so bundlers
* like Next.js can inline values at build time.
*
* Hexclave rebrand: each getter prefers the HEXCLAVE_*-prefixed literal and
* falls back to the legacy STACK_* literal(s). Both operands stay literal
* `process.env.X` references so bundlers can inline them. The port-prefix var
* is a straight rename (no dual-read).
*/ __turbopack_context__.s([
    "envVars",
    ()=>envVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const envVars = {
    get NEXT_PUBLIC_HEXCLAVE_PORT_PREFIX () {
        var _ref;
        return (_ref = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_PORT_PREFIX : void 0) !== null && _ref !== void 0 ? _ref : void 0;
    },
    get NEXT_PUBLIC_STACK_PROJECT_ID () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_PROJECT_ID, _ref1;
        return (_ref1 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_PROJECT_ID = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_PROJECT_ID) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_PROJECT_ID !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_PROJECT_ID : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_PROJECT_ID : void 0) !== null && _ref1 !== void 0 ? _ref1 : void 0;
    },
    get STACK_PROJECT_ID () {
        var _process_env_HEXCLAVE_PROJECT_ID, _ref2;
        return (_ref2 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_PROJECT_ID = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_PROJECT_ID) !== null && _process_env_HEXCLAVE_PROJECT_ID !== void 0 ? _process_env_HEXCLAVE_PROJECT_ID : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_PROJECT_ID : void 0) !== null && _ref2 !== void 0 ? _ref2 : void 0;
    },
    get NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_PUBLISHABLE_CLIENT_KEY, _ref3;
        return (_ref3 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_PUBLISHABLE_CLIENT_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_PUBLISHABLE_CLIENT_KEY) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_PUBLISHABLE_CLIENT_KEY !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_PUBLISHABLE_CLIENT_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY : void 0) !== null && _ref3 !== void 0 ? _ref3 : void 0;
    },
    get STACK_PUBLISHABLE_CLIENT_KEY () {
        var _process_env_HEXCLAVE_PUBLISHABLE_CLIENT_KEY, _ref4;
        return (_ref4 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_PUBLISHABLE_CLIENT_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_PUBLISHABLE_CLIENT_KEY) !== null && _process_env_HEXCLAVE_PUBLISHABLE_CLIENT_KEY !== void 0 ? _process_env_HEXCLAVE_PUBLISHABLE_CLIENT_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_PUBLISHABLE_CLIENT_KEY : void 0) !== null && _ref4 !== void 0 ? _ref4 : void 0;
    },
    get STACK_SECRET_SERVER_KEY () {
        var _process_env_HEXCLAVE_SECRET_SERVER_KEY, _ref5;
        return (_ref5 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_SECRET_SERVER_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_SECRET_SERVER_KEY) !== null && _process_env_HEXCLAVE_SECRET_SERVER_KEY !== void 0 ? _process_env_HEXCLAVE_SECRET_SERVER_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_SECRET_SERVER_KEY : void 0) !== null && _ref5 !== void 0 ? _ref5 : void 0;
    },
    get STACK_SUPER_SECRET_ADMIN_KEY () {
        var _process_env_HEXCLAVE_SUPER_SECRET_ADMIN_KEY, _ref6;
        return (_ref6 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_SUPER_SECRET_ADMIN_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_SUPER_SECRET_ADMIN_KEY) !== null && _process_env_HEXCLAVE_SUPER_SECRET_ADMIN_KEY !== void 0 ? _process_env_HEXCLAVE_SUPER_SECRET_ADMIN_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_SUPER_SECRET_ADMIN_KEY : void 0) !== null && _ref6 !== void 0 ? _ref6 : void 0;
    },
    get NEXT_PUBLIC_STACK_EXTRA_REQUEST_HEADERS () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_EXTRA_REQUEST_HEADERS, _ref7;
        return (_ref7 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_EXTRA_REQUEST_HEADERS = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_EXTRA_REQUEST_HEADERS) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_EXTRA_REQUEST_HEADERS !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_EXTRA_REQUEST_HEADERS : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_EXTRA_REQUEST_HEADERS : void 0) !== null && _ref7 !== void 0 ? _ref7 : void 0;
    },
    get STACK_EXTRA_REQUEST_HEADERS () {
        var _process_env_HEXCLAVE_EXTRA_REQUEST_HEADERS, _ref8;
        return (_ref8 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_EXTRA_REQUEST_HEADERS = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_EXTRA_REQUEST_HEADERS) !== null && _process_env_HEXCLAVE_EXTRA_REQUEST_HEADERS !== void 0 ? _process_env_HEXCLAVE_EXTRA_REQUEST_HEADERS : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_EXTRA_REQUEST_HEADERS : void 0) !== null && _ref8 !== void 0 ? _ref8 : void 0;
    },
    get NEXT_PUBLIC_BROWSER_STACK_API_URL () {
        var _process_env_NEXT_PUBLIC_BROWSER_HEXCLAVE_API_URL, _ref9;
        return (_ref9 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_BROWSER_HEXCLAVE_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BROWSER_HEXCLAVE_API_URL) !== null && _process_env_NEXT_PUBLIC_BROWSER_HEXCLAVE_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_BROWSER_HEXCLAVE_API_URL : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BROWSER_STACK_API_URL : void 0) !== null && _ref9 !== void 0 ? _ref9 : void 0;
    },
    get NEXT_PUBLIC_STACK_API_URL_BROWSER () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_BROWSER, _ref10;
        return (_ref10 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_BROWSER = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_API_URL_BROWSER) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_BROWSER !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_BROWSER : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_API_URL_BROWSER : void 0) !== null && _ref10 !== void 0 ? _ref10 : void 0;
    },
    get STACK_API_URL_BROWSER () {
        var _process_env_HEXCLAVE_API_URL_BROWSER, _ref11;
        return (_ref11 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_API_URL_BROWSER = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_API_URL_BROWSER) !== null && _process_env_HEXCLAVE_API_URL_BROWSER !== void 0 ? _process_env_HEXCLAVE_API_URL_BROWSER : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_API_URL_BROWSER : void 0) !== null && _ref11 !== void 0 ? _ref11 : void 0;
    },
    get NEXT_PUBLIC_SERVER_STACK_API_URL () {
        var _process_env_NEXT_PUBLIC_SERVER_HEXCLAVE_API_URL, _ref12;
        return (_ref12 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_SERVER_HEXCLAVE_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SERVER_HEXCLAVE_API_URL) !== null && _process_env_NEXT_PUBLIC_SERVER_HEXCLAVE_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_SERVER_HEXCLAVE_API_URL : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SERVER_STACK_API_URL : void 0) !== null && _ref12 !== void 0 ? _ref12 : void 0;
    },
    get NEXT_PUBLIC_STACK_API_URL_SERVER () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_SERVER, _ref13;
        return (_ref13 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_SERVER = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_API_URL_SERVER) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_SERVER !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL_SERVER : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_API_URL_SERVER : void 0) !== null && _ref13 !== void 0 ? _ref13 : void 0;
    },
    get STACK_API_URL_SERVER () {
        var _process_env_HEXCLAVE_API_URL_SERVER, _ref14;
        return (_ref14 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_API_URL_SERVER = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_API_URL_SERVER) !== null && _process_env_HEXCLAVE_API_URL_SERVER !== void 0 ? _process_env_HEXCLAVE_API_URL_SERVER : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_API_URL_SERVER : void 0) !== null && _ref14 !== void 0 ? _ref14 : void 0;
    },
    get NEXT_PUBLIC_STACK_API_URL () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL, _ref15;
        return (_ref15 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_API_URL) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_API_URL : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_API_URL : void 0) !== null && _ref15 !== void 0 ? _ref15 : void 0;
    },
    get STACK_API_URL () {
        var _process_env_HEXCLAVE_API_URL, _ref16;
        return (_ref16 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_HEXCLAVE_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HEXCLAVE_API_URL) !== null && _process_env_HEXCLAVE_API_URL !== void 0 ? _process_env_HEXCLAVE_API_URL : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STACK_API_URL : void 0) !== null && _ref16 !== void 0 ? _ref16 : void 0;
    },
    get NEXT_PUBLIC_STACK_URL () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_URL, _ref17;
        return (_ref17 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_URL) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_URL !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_URL : void 0) !== null && _ref17 !== void 0 ? _ref17 : void 0;
    },
    get NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_DOMAIN_SUFFIX, _ref18;
        return (_ref18 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_DOMAIN_SUFFIX = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_DOMAIN_SUFFIX) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_DOMAIN_SUFFIX !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_DOMAIN_SUFFIX : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX : void 0) !== null && _ref18 !== void 0 ? _ref18 : void 0;
    },
    get NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_URL_TEMPLATE, _ref19;
        return (_ref19 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_URL_TEMPLATE = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_URL_TEMPLATE) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_URL_TEMPLATE !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_HOSTED_HANDLER_URL_TEMPLATE : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE : void 0) !== null && _ref19 !== void 0 ? _ref19 : void 0;
    },
    get NEXT_PUBLIC_STACK_STRIPE_PUBLISHABLE_KEY () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_STRIPE_PUBLISHABLE_KEY, _ref20;
        return (_ref20 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_STRIPE_PUBLISHABLE_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_STRIPE_PUBLISHABLE_KEY) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_STRIPE_PUBLISHABLE_KEY !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_STRIPE_PUBLISHABLE_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_STRIPE_PUBLISHABLE_KEY : void 0) !== null && _ref20 !== void 0 ? _ref20 : void 0;
    },
    get NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_SITE_KEY, _ref21;
        return (_ref21 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_SITE_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_SITE_KEY) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_SITE_KEY !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_SITE_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY : void 0) !== null && _ref21 !== void 0 ? _ref21 : void 0;
    },
    get NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_INVISIBLE_SITE_KEY, _ref22;
        return (_ref22 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_INVISIBLE_SITE_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_INVISIBLE_SITE_KEY) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_INVISIBLE_SITE_KEY !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_BOT_CHALLENGE_INVISIBLE_SITE_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY : void 0) !== null && _ref22 !== void 0 ? _ref22 : void 0;
    },
    get NODE_ENV () {
        var _ref23;
        return (_ref23 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? ("TURBOPACK compile-time value", "development") : void 0) !== null && _ref23 !== void 0 ? _ref23 : void 0;
    },
    get NEXT_PUBLIC_STACK_IS_LOCAL_EMULATOR () {
        var _process_env_NEXT_PUBLIC_HEXCLAVE_IS_LOCAL_EMULATOR, _ref24;
        return (_ref24 = typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? (_process_env_NEXT_PUBLIC_HEXCLAVE_IS_LOCAL_EMULATOR = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_IS_LOCAL_EMULATOR) !== null && _process_env_NEXT_PUBLIC_HEXCLAVE_IS_LOCAL_EMULATOR !== void 0 ? _process_env_NEXT_PUBLIC_HEXCLAVE_IS_LOCAL_EMULATOR : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_IS_LOCAL_EMULATOR : void 0) !== null && _ref24 !== void 0 ? _ref24 : void 0;
    }
};
;
 //# sourceMappingURL=env.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/url-targets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCliAuthConfirmUrl",
    ()=>buildCliAuthConfirmUrl,
    "getHostedHandlerUrl",
    ()=>getHostedHandlerUrl,
    "getPagePrompt",
    ()=>getPagePrompt,
    "isHostedHandlerUrlForProject",
    ()=>isHostedHandlerUrlForProject,
    "isLocalHandlerUrlTarget",
    ()=>isLocalHandlerUrlTarget,
    "resolveHandlerUrls",
    ()=>resolveHandlerUrls,
    "resolveUnknownHandlerPathFallbackUrl",
    ()=>resolveUnknownHandlerPathFallbackUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$handler$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/interface/handler-urls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$page$2d$component$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/interface/page-component-versions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$redirect$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/redirect-urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/env.js [app-client] (ecmascript)");
;
;
;
;
//#region src/lib/stack-app/url-targets.ts
const localUrlPlaceholderOrigin = "http://example.com";
const schemePrefixRegex = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;
const customPagePrompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$page$2d$component$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomPagePrompts"])();
const joinHandlerComponentPath = (basePath, pagePath)=>{
    const normalizedBasePath = basePath.endsWith("/") && basePath.length > 1 ? basePath.slice(0, -1) : basePath;
    if (pagePath.length === 0) return normalizedBasePath;
    if (normalizedBasePath === "/") return "/".concat(pagePath);
    return "".concat(normalizedBasePath, "/").concat(pagePath);
};
const getHostedPagePathForHandlerName = (handlerName)=>{
    switch(handlerName){
        case "handler":
            return "";
        case "home":
            return "";
        case "afterSignIn":
            return "";
        case "afterSignUp":
            return "";
        case "afterSignOut":
            return "";
        case "signIn":
            return "sign-in";
        case "signUp":
            return "sign-up";
        case "signOut":
            return "sign-out";
        case "emailVerification":
            return "email-verification";
        case "passwordReset":
            return "password-reset";
        case "forgotPassword":
            return "forgot-password";
        case "oauthCallback":
            return "oauth-callback";
        case "magicLinkCallback":
            return "magic-link-callback";
        case "accountSettings":
            return "account-settings";
        case "teamInvitation":
            return "team-invitation";
        case "cliAuthConfirm":
            return "cli-auth-confirm";
        case "mfa":
            return "mfa";
        case "error":
            return "error";
        case "onboarding":
            return "onboarding";
    }
};
const resolveCustomTargetUrl = (options)=>{
    const handlerName = options.handlerName;
    if (handlerName in customPagePrompts) {
        const customPagePrompt = customPagePrompts[handlerName];
        if (options.target.version === 0 || options.target.version in customPagePrompt.versions) return options.target.url;
        throw new Error("Unsupported custom page version ".concat(options.target.version, " for ").concat(options.handlerName, " page at ").concat(options.target.url, ". The latest supported version of this page is ").concat(Math.max(0, ...Object.keys(customPagePrompt.versions).map(Number)), ". Please upgrade your Stack Auth SDK to a version that supports this version."));
    } else throw new Error("URL target ".concat(options.handlerName, " cannot be a custom page. Please specify the URL as a string instead."));
};
const getHostedHandlerUrl = (options)=>{
    const normalizedPagePath = options.pagePath.replace(/^\/+/, "");
    const hostedPath = normalizedPagePath.length > 0 ? "handler/".concat(normalizedPagePath) : "handler";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$redirect$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostedHandlerUrlFromConfig"])({
        projectId: options.projectId,
        hostedPath,
        hostedHandlerDomainSuffix: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX,
        hostedHandlerUrlTemplate: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE,
        stackPortPrefix: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_HEXCLAVE_PORT_PREFIX
    });
};
const isRelativeUrlString = (url)=>{
    if (url.startsWith("//")) return false;
    return !schemePrefixRegex.test(url);
};
const isLocalHandlerUrlTarget = (options)=>{
    const urlObject = new URL(options.targetUrl, localUrlPlaceholderOrigin);
    if (!(urlObject.pathname === options.handlerPath || urlObject.pathname.startsWith("".concat(options.handlerPath, "/")))) return false;
    if (options.currentOrigin == null) return true;
    return isRelativeUrlString(options.targetUrl) || urlObject.origin === options.currentOrigin;
};
const resolveUrlTarget = (options)=>{
    if (typeof options.target === "string") return options.target;
    switch(options.target.type){
        case "handler-component":
            return options.fallbackPath;
        case "hosted":
            return getHostedHandlerUrl({
                projectId: options.projectId,
                pagePath: getHostedPagePathForHandlerName(options.handlerName)
            });
        case "custom":
            return resolveCustomTargetUrl({
                target: options.target,
                handlerName: options.handlerName
            });
    }
};
const assertOAuthCallbackTargetIsRelative = (target)=>{
    const url = typeof target === "string" ? target : target.type === "custom" ? target.url : null;
    if (url != null && !isRelativeUrlString(url)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("OAuth callback URLs must be relative.", {
        oauthCallbackUrl: url,
        hint: "Use a relative URL like '/handler/oauth-callback', or use { type: 'hosted' } to let Stack use the current page for hosted callbacks."
    });
};
const resolveHandlerUrls = (options)=>{
    const configuredUrls = options.urls;
    var _configuredUrls_default;
    const defaultTarget = (_configuredUrls_default = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.default) !== null && _configuredUrls_default !== void 0 ? _configuredUrls_default : {
        type: "handler-component"
    };
    var _configuredUrls_oauthCallback;
    const oauthCallbackTarget = (_configuredUrls_oauthCallback = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.oauthCallback) !== null && _configuredUrls_oauthCallback !== void 0 ? _configuredUrls_oauthCallback : defaultTarget.type === "hosted" ? defaultTarget : {
        type: "handler-component"
    };
    assertOAuthCallbackTargetIsRelative(oauthCallbackTarget);
    let handlerComponentBasePath = "/handler";
    if (typeof (configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.handler) === "string") handlerComponentBasePath = configuredUrls.handler;
    else if ((configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.handler) != null && configuredUrls.handler.type === "custom") handlerComponentBasePath = resolveCustomTargetUrl({
        target: configuredUrls.handler,
        handlerName: "handler"
    });
    var _configuredUrls_home;
    const home = resolveUrlTarget({
        target: (_configuredUrls_home = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.home) !== null && _configuredUrls_home !== void 0 ? _configuredUrls_home : defaultTarget,
        fallbackPath: "/",
        handlerName: "home",
        projectId: options.projectId
    });
    var _configuredUrls_afterSignIn;
    const afterSignIn = resolveUrlTarget({
        target: (_configuredUrls_afterSignIn = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.afterSignIn) !== null && _configuredUrls_afterSignIn !== void 0 ? _configuredUrls_afterSignIn : defaultTarget,
        fallbackPath: home,
        handlerName: "afterSignIn",
        projectId: options.projectId
    });
    var _configuredUrls_handler, _configuredUrls_signIn, _configuredUrls_signUp, _configuredUrls_afterSignUp, _configuredUrls_signOut, _configuredUrls_afterSignOut, _configuredUrls_emailVerification, _configuredUrls_passwordReset, _configuredUrls_forgotPassword, _configuredUrls_magicLinkCallback, _configuredUrls_accountSettings, _configuredUrls_teamInvitation, _configuredUrls_cliAuthConfirm, _configuredUrls_mfa, _configuredUrls_error, _configuredUrls_onboarding;
    return {
        handler: resolveUrlTarget({
            target: (_configuredUrls_handler = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.handler) !== null && _configuredUrls_handler !== void 0 ? _configuredUrls_handler : defaultTarget,
            fallbackPath: handlerComponentBasePath,
            handlerName: "handler",
            projectId: options.projectId
        }),
        signIn: resolveUrlTarget({
            target: (_configuredUrls_signIn = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.signIn) !== null && _configuredUrls_signIn !== void 0 ? _configuredUrls_signIn : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "sign-in"),
            handlerName: "signIn",
            projectId: options.projectId
        }),
        signUp: resolveUrlTarget({
            target: (_configuredUrls_signUp = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.signUp) !== null && _configuredUrls_signUp !== void 0 ? _configuredUrls_signUp : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "sign-up"),
            handlerName: "signUp",
            projectId: options.projectId
        }),
        afterSignIn,
        afterSignUp: resolveUrlTarget({
            target: (_configuredUrls_afterSignUp = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.afterSignUp) !== null && _configuredUrls_afterSignUp !== void 0 ? _configuredUrls_afterSignUp : defaultTarget,
            fallbackPath: afterSignIn,
            handlerName: "afterSignUp",
            projectId: options.projectId
        }),
        signOut: resolveUrlTarget({
            target: (_configuredUrls_signOut = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.signOut) !== null && _configuredUrls_signOut !== void 0 ? _configuredUrls_signOut : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "sign-out"),
            handlerName: "signOut",
            projectId: options.projectId
        }),
        afterSignOut: resolveUrlTarget({
            target: (_configuredUrls_afterSignOut = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.afterSignOut) !== null && _configuredUrls_afterSignOut !== void 0 ? _configuredUrls_afterSignOut : defaultTarget,
            fallbackPath: home,
            handlerName: "afterSignOut",
            projectId: options.projectId
        }),
        emailVerification: resolveUrlTarget({
            target: (_configuredUrls_emailVerification = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.emailVerification) !== null && _configuredUrls_emailVerification !== void 0 ? _configuredUrls_emailVerification : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "email-verification"),
            handlerName: "emailVerification",
            projectId: options.projectId
        }),
        passwordReset: resolveUrlTarget({
            target: (_configuredUrls_passwordReset = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.passwordReset) !== null && _configuredUrls_passwordReset !== void 0 ? _configuredUrls_passwordReset : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "password-reset"),
            handlerName: "passwordReset",
            projectId: options.projectId
        }),
        forgotPassword: resolveUrlTarget({
            target: (_configuredUrls_forgotPassword = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.forgotPassword) !== null && _configuredUrls_forgotPassword !== void 0 ? _configuredUrls_forgotPassword : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "forgot-password"),
            handlerName: "forgotPassword",
            projectId: options.projectId
        }),
        home,
        oauthCallback: resolveUrlTarget({
            target: oauthCallbackTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "oauth-callback"),
            handlerName: "oauthCallback",
            projectId: options.projectId
        }),
        magicLinkCallback: resolveUrlTarget({
            target: (_configuredUrls_magicLinkCallback = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.magicLinkCallback) !== null && _configuredUrls_magicLinkCallback !== void 0 ? _configuredUrls_magicLinkCallback : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "magic-link-callback"),
            handlerName: "magicLinkCallback",
            projectId: options.projectId
        }),
        accountSettings: resolveUrlTarget({
            target: (_configuredUrls_accountSettings = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.accountSettings) !== null && _configuredUrls_accountSettings !== void 0 ? _configuredUrls_accountSettings : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "account-settings"),
            handlerName: "accountSettings",
            projectId: options.projectId
        }),
        teamInvitation: resolveUrlTarget({
            target: (_configuredUrls_teamInvitation = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.teamInvitation) !== null && _configuredUrls_teamInvitation !== void 0 ? _configuredUrls_teamInvitation : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "team-invitation"),
            handlerName: "teamInvitation",
            projectId: options.projectId
        }),
        cliAuthConfirm: resolveUrlTarget({
            target: (_configuredUrls_cliAuthConfirm = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.cliAuthConfirm) !== null && _configuredUrls_cliAuthConfirm !== void 0 ? _configuredUrls_cliAuthConfirm : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "cli-auth-confirm"),
            handlerName: "cliAuthConfirm",
            projectId: options.projectId
        }),
        mfa: resolveUrlTarget({
            target: (_configuredUrls_mfa = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.mfa) !== null && _configuredUrls_mfa !== void 0 ? _configuredUrls_mfa : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "mfa"),
            handlerName: "mfa",
            projectId: options.projectId
        }),
        error: resolveUrlTarget({
            target: (_configuredUrls_error = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.error) !== null && _configuredUrls_error !== void 0 ? _configuredUrls_error : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "error"),
            handlerName: "error",
            projectId: options.projectId
        }),
        onboarding: resolveUrlTarget({
            target: (_configuredUrls_onboarding = configuredUrls === null || configuredUrls === void 0 ? void 0 : configuredUrls.onboarding) !== null && _configuredUrls_onboarding !== void 0 ? _configuredUrls_onboarding : defaultTarget,
            fallbackPath: joinHandlerComponentPath(handlerComponentBasePath, "onboarding"),
            handlerName: "onboarding",
            projectId: options.projectId
        })
    };
};
const buildCliAuthConfirmUrl = (options)=>{
    const url = new URL(options.cliAuthConfirmUrl, options.appUrl);
    url.searchParams.set("login_code", options.loginCode);
    return url.toString();
};
const resolveUnknownHandlerPathFallbackUrl = (options)=>{
    var _options_defaultTarget;
    switch(((_options_defaultTarget = options.defaultTarget) !== null && _options_defaultTarget !== void 0 ? _options_defaultTarget : {
        type: "handler-component"
    }).type){
        case "handler-component":
            return null;
        case "hosted":
            return getHostedHandlerUrl({
                projectId: options.projectId,
                pagePath: options.unknownPath
            });
    }
};
function getPagePrompt(pageName, currentVersion) {
    var _this;
    if (!(pageName in customPagePrompts)) return null;
    const prompt = customPagePrompts[pageName];
    const versionKeys = Object.keys(prompt.versions).map(Number);
    const latestVersion = versionKeys.length > 0 ? Math.max(...versionKeys) : 0;
    let upgradePrompt = null;
    var _upgradePrompt;
    if (currentVersion != null) {
        const prompts = versionKeys.filter((v)=>v > currentVersion).sort((a, b)=>a - b).map((v)=>prompt.versions[v].upgradePrompt).filter((p)=>p.length > 0);
        upgradePrompt = prompts.length > 0 ? prompts.join("\n\n") : null;
    } else upgradePrompt = (_upgradePrompt = (_this = latestVersion > 0 ? prompt.versions[latestVersion] : void 0) === null || _this === void 0 ? void 0 : _this.upgradePrompt) !== null && _upgradePrompt !== void 0 ? _upgradePrompt : null;
    return {
        title: prompt.title,
        fullPrompt: prompt.fullPrompt,
        upgradePrompt,
        latestVersion
    };
}
const isHostedHandlerUrlForProject = (options)=>{
    let parsedUrl;
    try {
        parsedUrl = new URL(options.url);
    } catch (e) {
        return false;
    }
    const hostedBaseUrl = new URL(getHostedHandlerUrl({
        projectId: options.projectId,
        pagePath: ""
    }));
    return parsedUrl.origin === hostedBaseUrl.origin && (parsedUrl.pathname === hostedBaseUrl.pathname || parsedUrl.pathname.startsWith("".concat(hostedBaseUrl.pathname, "/")));
};
;
 //# sourceMappingURL=url-targets.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/common.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientVersion",
    ()=>clientVersion,
    "createCache",
    ()=>createCache,
    "createCacheBySession",
    ()=>createCacheBySession,
    "createEmptyTokenStore",
    ()=>createEmptyTokenStore,
    "defaultAnalyticsBaseUrl",
    ()=>defaultAnalyticsBaseUrl,
    "defaultBaseUrl",
    ()=>defaultBaseUrl,
    "getAnalyticsBaseUrl",
    ()=>getAnalyticsBaseUrl,
    "getBaseUrl",
    ()=>getBaseUrl,
    "getDefaultExtraRequestHeaders",
    ()=>getDefaultExtraRequestHeaders,
    "getDefaultProjectId",
    ()=>getDefaultProjectId,
    "getDefaultPublishableClientKey",
    ()=>getDefaultPublishableClientKey,
    "getDefaultSecretServerKey",
    ()=>getDefaultSecretServerKey,
    "getDefaultSuperSecretAdminKey",
    ()=>getDefaultSuperSecretAdminKey,
    "getUrls",
    ()=>getUrls,
    "resolveApiUrls",
    ()=>resolveApiUrls,
    "resolveConstructorOptions",
    ()=>resolveConstructorOptions,
    "useAsyncCache",
    ()=>useAsyncCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$caches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/caches.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/stores.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/url-targets.js [app-client] (ecmascript)");
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
;
//#region src/lib/stack-app/apps/implementations/common.ts
const clientVersion = "js @stackframe/stack@2.8.108";
if (clientVersion.startsWith("STACK_COMPILE_TIME")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Client version was not replaced. Something went wrong during build!");
const replaceStackPortPrefix = (input)=>{
    if (!input) return input;
    const prefix = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_HEXCLAVE_PORT_PREFIX;
    return prefix ? input.replace(/\$\{NEXT_PUBLIC_HEXCLAVE_PORT_PREFIX:-81\}/g, prefix) : input;
};
const createCache = (fetcher)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$caches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncCache"](async (dependencies)=>await __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromThrowingAsync(async ()=>await fetcher(dependencies)), {});
};
const createCacheBySession = (fetcher)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$caches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncCache"](async (param)=>{
        let [session, ...extraDependencies] = param;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromThrowingAsync(async ()=>await fetcher(session, extraDependencies));
    }, {
        onSubscribe: (param, refresh)=>{
            let [session] = param;
            const handler = session.onInvalidate(()=>refresh());
            return ()=>handler.unsubscribe();
        }
    });
};
function resolveConstructorOptions(options) {
    var _options_inheritsFrom;
    var _options_inheritsFrom_stackAppInternalsSymbol_getConstructorOptions;
    return {
        ...(_options_inheritsFrom_stackAppInternalsSymbol_getConstructorOptions = (_options_inheritsFrom = options.inheritsFrom) === null || _options_inheritsFrom === void 0 ? void 0 : _options_inheritsFrom[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].getConstructorOptions()) !== null && _options_inheritsFrom_stackAppInternalsSymbol_getConstructorOptions !== void 0 ? _options_inheritsFrom_stackAppInternalsSymbol_getConstructorOptions : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omit"])(options, [
            "inheritsFrom"
        ]))
    };
}
function getUrls(partial, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHandlerUrls"])({
        urls: partial,
        projectId: options.projectId
    });
}
function getDefaultProjectId() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_PROJECT_ID || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_PROJECT_ID || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(/* @__PURE__ */ new Error("Welcome to Stack Auth! It seems that you haven't provided a project ID. Please create a project on the Stack dashboard at https://app.stack-auth.com and put it in the NEXT_PUBLIC_STACK_PROJECT_ID environment variable."));
}
function getDefaultPublishableClientKey() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_PUBLISHABLE_CLIENT_KEY;
}
function getDefaultSecretServerKey() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_SECRET_SERVER_KEY || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(/* @__PURE__ */ new Error("No secret server key provided. Please copy your key from the Stack dashboard and put it in the STACK_SECRET_SERVER_KEY environment variable."));
}
function getDefaultSuperSecretAdminKey() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_SUPER_SECRET_ADMIN_KEY || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(/* @__PURE__ */ new Error("No super secret admin key provided. Please copy your key from the Stack dashboard and put it in the STACK_SUPER_SECRET_ADMIN_KEY environment variable."));
}
function getDefaultExtraRequestHeaders() {
    return JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_EXTRA_REQUEST_HEADERS || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_EXTRA_REQUEST_HEADERS || "{}");
}
/**
* Returns the base URL for the Stack API.
*
* The URL can be specified in several ways, in order of precedence:
* 1. Directly through userSpecifiedBaseUrl parameter as string or browser/server object
* 2. Through environment variables:
*    - Browser: NEXT_PUBLIC_BROWSER_STACK_API_URL
*    - Server: NEXT_PUBLIC_SERVER_STACK_API_URL
*    - Fallback: NEXT_PUBLIC_STACK_API_URL or NEXT_PUBLIC_STACK_URL
* 3. Default base URL if none of the above are specified
*
* The function also ensures the URL doesn't end with a trailing slash
* by removing it if present.
*
* @param userSpecifiedBaseUrl - Optional URL override as string or {browser, server} object
* @returns The configured base URL without trailing slash

*/ function getBaseUrl(userSpecifiedBaseUrl) {
    let url;
    if (userSpecifiedBaseUrl) if (typeof userSpecifiedBaseUrl === "string") url = userSpecifiedBaseUrl;
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) url = userSpecifiedBaseUrl.browser;
    else url = userSpecifiedBaseUrl.server;
    else {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) url = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_BROWSER_STACK_API_URL || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_API_URL_BROWSER || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_API_URL_BROWSER;
        else url = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_SERVER_STACK_API_URL || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_API_URL_SERVER || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_API_URL_SERVER;
        url = url || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_API_URL || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].STACK_API_URL || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_URL || defaultBaseUrl;
    }
    return replaceStackPortPrefix(url.endsWith("/") ? url.slice(0, -1) : url);
}
const defaultBaseUrl = "https://api.stack-auth.com";
const defaultAnalyticsBaseUrl = "https://r.stack-auth.com";
function getAnalyticsBaseUrl(regularBaseUrl) {
    return regularBaseUrl === defaultBaseUrl ? defaultAnalyticsBaseUrl : regularBaseUrl;
}
function fetchBackendUrlsInBackground(primaryBaseUrl) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobal"])("__stack-fetch-backend-urls-started", ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            try {
                const res = await fetch("".concat(primaryBaseUrl, "/api/v1/internal/backend-urls"));
                if (!res.ok) return;
                const data = await res.json();
                if (!Array.isArray(data.urls) || !data.urls.every((u)=>typeof u === "string")) return;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobal"])("__stack-fetched-backend-urls", ()=>data.urls);
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("fetch-backend-urls-in-background", e);
            }
        });
        return true;
    });
}
function resolveApiUrls(userExplicitBaseUrl) {
    return ()=>{
        if (userExplicitBaseUrl != null) return [
            getBaseUrl(userExplicitBaseUrl)
        ];
        const primary = getBaseUrl(void 0);
        fetchBackendUrlsInBackground(primary);
        var _getGlobal;
        return (_getGlobal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])("__stack-fetched-backend-urls")) !== null && _getGlobal !== void 0 ? _getGlobal : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultApiUrls"])(primary);
    };
}
function createEmptyTokenStore() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"]({
        refreshToken: null,
        accessToken: null
    });
}
const cachePromiseByHookId = /* @__PURE__ */ new Map();
function useAsyncCache(cache, dependencies, caller) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspendIfSsr"])(caller);
    var _getGlobal;
    const asyncCacheHooks = (_getGlobal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobal"])("use-async-cache-execution-hooks")) !== null && _getGlobal !== void 0 ? _getGlobal : [];
    for (const hook of asyncCacheHooks)hook({
        cache,
        caller,
        dependencies
    });
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useAsyncCache.useEffect": ()=>{
            cachePromiseByHookId.delete(id);
        }
    }["useAsyncCache.useEffect"], [
        ...dependencies,
        id
    ]);
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAsyncCache.useCallback[subscribe]": (cb)=>{
            const { unsubscribe } = cache.onStateChange(dependencies, {
                "useAsyncCache.useCallback[subscribe]": ()=>{
                    cachePromiseByHookId.delete(id);
                    cb();
                }
            }["useAsyncCache.useCallback[subscribe]"]);
            return unsubscribe;
        }
    }["useAsyncCache.useCallback[subscribe]"], [
        cache,
        ...dependencies
    ]);
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAsyncCache.useCallback[getSnapshot]": ()=>{
            if (!cachePromiseByHookId.has(id)) cachePromiseByHookId.set(id, cache.getOrWait(dependencies, "read-write"));
            return cachePromiseByHookId.get(id);
        }
    }["useAsyncCache.useCallback[getSnapshot]"], [
        cache,
        ...dependencies
    ]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(subscribe, getSnapshot, getSnapshot));
    if (result.status === "error") {
        const error = result.error;
        if (error instanceof Error && !error.__stackHasConcatenatedStacktraces) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatStacktraces"])(error, /* @__PURE__ */ new Error());
            error.__stackHasConcatenatedStacktraces = true;
        }
        throw error;
    }
    return result.data;
}
;
 //# sourceMappingURL=common.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStackApp",
    ()=>useStackApp,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-context.js [app-client] (ecmascript)");
;
;
//#region src/lib/hooks.tsx
function useUser() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const stackApp = useStackApp(options);
    if (options.projectIdMustMatch && stackApp.projectId !== options.projectIdMustMatch) throw new Error("Unexpected project ID in useStackApp: " + stackApp.projectId);
    if (options.projectIdMustMatch === "internal") return stackApp.useUser(options);
    else return stackApp.useUser(options);
}
/**
* Returns the current Stack app associated with the StackProvider.
*
* @returns the current Stack app
*/ function useStackApp() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"] !== "function") throw new Error("useStackApp() can only be used in a React Client Component. Make sure you're not calling it from a Server Component, or any other environment.");
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackContext"]);
    if (context === null) throw new Error("useStackApp must be used within a StackProvider");
    const stackApp = context.app;
    if (options.projectIdMustMatch && stackApp.projectId !== options.projectIdMustMatch) throw new Error("Unexpected project ID in useStackApp: " + stackApp.projectId);
    return stackApp;
}
;
 //# sourceMappingURL=hooks.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/translations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$translation$2d$provider$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/translation-provider-client.js [app-client] (ecmascript)");
;
;
//#region src/lib/translations.tsx
function useTranslation() {
    const translationContext = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$translation$2d$provider$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranslationContext"]);
    if (!translationContext) throw new Error("Translation context not found; did you forget to wrap your app in a <StackProvider />?");
    return {
        t: (str, templateVars)=>{
            const { quetzalKeys, quetzalLocale } = translationContext;
            var _quetzalKeys_get, _quetzalLocale_get;
            let translation = (_quetzalLocale_get = quetzalLocale.get((_quetzalKeys_get = quetzalKeys.get(str)) !== null && _quetzalKeys_get !== void 0 ? _quetzalKeys_get : void 0)) !== null && _quetzalLocale_get !== void 0 ? _quetzalLocale_get : str;
            for (const [key, value] of Object.entries(templateVars || {}))translation = translation.replace("{".concat(key, "}"), value);
            return translation;
        }
    };
}
;
 //# sourceMappingURL=translations.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/api-keys/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiKeyCreationOptionsToCrud",
    ()=>apiKeyCreationOptionsToCrud,
    "apiKeyUpdateOptionsToCrud",
    ()=>apiKeyUpdateOptionsToCrud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
;
//#region src/lib/stack-app/api-keys/index.ts
async function apiKeyCreationOptionsToCrud(type, userIdOrTeamId, options) {
    return {
        description: options.description,
        expires_at_millis: options.expiresAt == null ? options.expiresAt : options.expiresAt.getTime(),
        is_public: options.isPublic,
        ...type === "user" ? {
            user_id: userIdOrTeamId
        } : {
            team_id: userIdOrTeamId
        }
    };
}
async function apiKeyUpdateOptionsToCrud(type, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
        description: options.description,
        expires_at_millis: options.expiresAt == null ? options.expiresAt : options.expiresAt.getTime(),
        revoked: options.revoked
    });
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/contact-channels/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/contact-channels/index.ts
__turbopack_context__.s([
    "contactChannelCreateOptionsToCrud",
    ()=>contactChannelCreateOptionsToCrud,
    "contactChannelUpdateOptionsToCrud",
    ()=>contactChannelUpdateOptionsToCrud,
    "serverContactChannelCreateOptionsToCrud",
    ()=>serverContactChannelCreateOptionsToCrud,
    "serverContactChannelUpdateOptionsToCrud",
    ()=>serverContactChannelUpdateOptionsToCrud
]);
function contactChannelCreateOptionsToCrud(userId, options) {
    return {
        value: options.value,
        type: options.type,
        used_for_auth: options.usedForAuth,
        is_primary: options.isPrimary,
        user_id: userId
    };
}
function contactChannelUpdateOptionsToCrud(options) {
    return {
        value: options.value,
        used_for_auth: options.usedForAuth,
        is_primary: options.isPrimary
    };
}
function serverContactChannelUpdateOptionsToCrud(options) {
    return {
        value: options.value,
        is_verified: options.isVerified,
        used_for_auth: options.usedForAuth,
        is_primary: options.isPrimary
    };
}
function serverContactChannelCreateOptionsToCrud(userId, options) {
    return {
        type: options.type,
        value: options.value,
        is_verified: options.isVerified,
        user_id: userId,
        used_for_auth: options.usedForAuth,
        is_primary: options.isPrimary
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/teams/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/teams/index.ts
__turbopack_context__.s([
    "serverTeamCreateOptionsToCrud",
    ()=>serverTeamCreateOptionsToCrud,
    "serverTeamUpdateOptionsToCrud",
    ()=>serverTeamUpdateOptionsToCrud,
    "teamCreateOptionsToCrud",
    ()=>teamCreateOptionsToCrud,
    "teamUpdateOptionsToCrud",
    ()=>teamUpdateOptionsToCrud
]);
function teamUpdateOptionsToCrud(options) {
    return {
        display_name: options.displayName,
        profile_image_url: options.profileImageUrl,
        client_metadata: options.clientMetadata
    };
}
function teamCreateOptionsToCrud(options, creatorUserId) {
    return {
        display_name: options.displayName,
        profile_image_url: options.profileImageUrl,
        creator_user_id: creatorUserId
    };
}
function serverTeamCreateOptionsToCrud(options) {
    return {
        display_name: options.displayName,
        profile_image_url: options.profileImageUrl,
        creator_user_id: options.creatorUserId
    };
}
function serverTeamUpdateOptionsToCrud(options) {
    return {
        display_name: options.displayName,
        profile_image_url: options.profileImageUrl,
        client_metadata: options.clientMetadata,
        client_read_only_metadata: options.clientReadOnlyMetadata,
        server_metadata: options.serverMetadata
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/users/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverUserCreateOptionsToCrud",
    ()=>serverUserCreateOptionsToCrud,
    "serverUserUpdateOptionsToCrud",
    ()=>serverUserUpdateOptionsToCrud,
    "userUpdateOptionsToCrud",
    ()=>userUpdateOptionsToCrud,
    "withUserDestructureGuard",
    ()=>withUserDestructureGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/bytes.js [app-client] (ecmascript)");
;
//#region src/lib/stack-app/users/index.ts
const userGetterErrorMessage = "Stack Auth: useUser() already returns the user object. Use `const user = useUser()` (or `const user = await app.getUser()`) instead of destructuring it like `const { user } = ...`.";
function withUserDestructureGuard(target) {
    Object.freeze(target);
    return new Proxy(target, {
        get (target, prop, receiver) {
            if (prop === "user") return guardGetter();
            return target[prop];
        }
    });
}
function guardGetter() {
    throw new Error(userGetterErrorMessage);
}
function userUpdateOptionsToCrud(options) {
    return {
        display_name: options.displayName,
        client_metadata: options.clientMetadata,
        selected_team_id: options.selectedTeamId,
        totp_secret_base64: options.totpMultiFactorSecret != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(options.totpMultiFactorSecret) : options.totpMultiFactorSecret,
        profile_image_url: options.profileImageUrl,
        otp_auth_enabled: options.otpAuthEnabled,
        passkey_auth_enabled: options.passkeyAuthEnabled,
        primary_email: options.primaryEmail
    };
}
function serverUserUpdateOptionsToCrud(options) {
    return {
        display_name: options.displayName,
        primary_email: options.primaryEmail,
        client_metadata: options.clientMetadata,
        client_read_only_metadata: options.clientReadOnlyMetadata,
        server_metadata: options.serverMetadata,
        selected_team_id: options.selectedTeamId,
        primary_email_auth_enabled: options.primaryEmailAuthEnabled,
        primary_email_verified: options.primaryEmailVerified,
        password: options.password,
        profile_image_url: options.profileImageUrl,
        totp_secret_base64: options.totpMultiFactorSecret != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(options.totpMultiFactorSecret) : options.totpMultiFactorSecret,
        restricted_by_admin: options.restrictedByAdmin,
        restricted_by_admin_reason: options.restrictedByAdminReason,
        restricted_by_admin_private_details: options.restrictedByAdminPrivateDetails,
        country_code: options.countryCode,
        risk_scores: options.riskScores ? {
            sign_up: {
                bot: options.riskScores.signUp.bot,
                free_trial_abuse: options.riskScores.signUp.freeTrialAbuse
            }
        } : void 0
    };
}
function serverUserCreateOptionsToCrud(options) {
    return {
        primary_email: options.primaryEmail,
        password: options.password,
        otp_auth_enabled: options.otpAuthEnabled,
        primary_email_auth_enabled: options.primaryEmailAuthEnabled,
        display_name: options.displayName,
        primary_email_verified: options.primaryEmailVerified,
        client_metadata: options.clientMetadata,
        client_read_only_metadata: options.clientReadOnlyMetadata,
        server_metadata: options.serverMetadata,
        country_code: options.countryCode,
        risk_scores: options.riskScores ? {
            sign_up: {
                bot: options.riskScores.signUp.bot,
                free_trial_abuse: options.riskScores.signUp.freeTrialAbuse
            }
        } : void 0
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/projects/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/projects/index.ts
__turbopack_context__.s([
    "adminProjectCreateOptionsToCrud",
    ()=>adminProjectCreateOptionsToCrud,
    "adminProjectUpdateOptionsToCrud",
    ()=>adminProjectUpdateOptionsToCrud
]);
function adminProjectUpdateOptionsToCrud(options) {
    var _options_config_domains, _options_config, _options_config_oauthProviders, _options_config1, _options_config2, _options_config3, _options_config4, _options_config5, _options_config6, _options_config7, _options_config8, _options_config9, _options_config10, _options_config11, _options_config12, _options_config13, _options_config14, _options_config15, _options_config16, _options_config17;
    return {
        display_name: options.displayName,
        description: options.description,
        is_production_mode: options.isProductionMode,
        onboarding_status: options.onboardingStatus,
        logo_url: options.logoUrl,
        logo_full_url: options.logoFullUrl,
        logo_dark_mode_url: options.logoDarkModeUrl,
        logo_full_dark_mode_url: options.logoFullDarkModeUrl,
        config: {
            domains: (_options_config = options.config) === null || _options_config === void 0 ? void 0 : (_options_config_domains = _options_config.domains) === null || _options_config_domains === void 0 ? void 0 : _options_config_domains.map((d)=>({
                    domain: d.domain,
                    handler_path: d.handlerPath
                })),
            oauth_providers: (_options_config1 = options.config) === null || _options_config1 === void 0 ? void 0 : (_options_config_oauthProviders = _options_config1.oauthProviders) === null || _options_config_oauthProviders === void 0 ? void 0 : _options_config_oauthProviders.map((p)=>({
                    id: p.id,
                    type: p.type,
                    ...p.type === "standard" && {
                        client_id: p.clientId,
                        client_secret: p.clientSecret,
                        facebook_config_id: p.facebookConfigId,
                        microsoft_tenant_id: p.microsoftTenantId,
                        apple_bundle_ids: p.appleBundleIds
                    }
                })),
            email_config: ((_options_config2 = options.config) === null || _options_config2 === void 0 ? void 0 : _options_config2.emailConfig) && (options.config.emailConfig.type === "shared" ? {
                type: "shared"
            } : {
                type: "standard",
                host: options.config.emailConfig.host,
                port: options.config.emailConfig.port,
                username: options.config.emailConfig.username,
                password: options.config.emailConfig.password,
                sender_name: options.config.emailConfig.senderName,
                sender_email: options.config.emailConfig.senderEmail
            }),
            email_theme: (_options_config3 = options.config) === null || _options_config3 === void 0 ? void 0 : _options_config3.emailTheme,
            sign_up_enabled: (_options_config4 = options.config) === null || _options_config4 === void 0 ? void 0 : _options_config4.signUpEnabled,
            credential_enabled: (_options_config5 = options.config) === null || _options_config5 === void 0 ? void 0 : _options_config5.credentialEnabled,
            magic_link_enabled: (_options_config6 = options.config) === null || _options_config6 === void 0 ? void 0 : _options_config6.magicLinkEnabled,
            passkey_enabled: (_options_config7 = options.config) === null || _options_config7 === void 0 ? void 0 : _options_config7.passkeyEnabled,
            allow_localhost: (_options_config8 = options.config) === null || _options_config8 === void 0 ? void 0 : _options_config8.allowLocalhost,
            create_team_on_sign_up: (_options_config9 = options.config) === null || _options_config9 === void 0 ? void 0 : _options_config9.createTeamOnSignUp,
            client_team_creation_enabled: (_options_config10 = options.config) === null || _options_config10 === void 0 ? void 0 : _options_config10.clientTeamCreationEnabled,
            client_user_deletion_enabled: (_options_config11 = options.config) === null || _options_config11 === void 0 ? void 0 : _options_config11.clientUserDeletionEnabled,
            team_creator_default_permissions: (_options_config12 = options.config) === null || _options_config12 === void 0 ? void 0 : _options_config12.teamCreatorDefaultPermissions,
            team_member_default_permissions: (_options_config13 = options.config) === null || _options_config13 === void 0 ? void 0 : _options_config13.teamMemberDefaultPermissions,
            user_default_permissions: (_options_config14 = options.config) === null || _options_config14 === void 0 ? void 0 : _options_config14.userDefaultPermissions,
            oauth_account_merge_strategy: (_options_config15 = options.config) === null || _options_config15 === void 0 ? void 0 : _options_config15.oauthAccountMergeStrategy,
            allow_user_api_keys: (_options_config16 = options.config) === null || _options_config16 === void 0 ? void 0 : _options_config16.allowUserApiKeys,
            allow_team_api_keys: (_options_config17 = options.config) === null || _options_config17 === void 0 ? void 0 : _options_config17.allowTeamApiKeys
        }
    };
}
function adminProjectCreateOptionsToCrud(options) {
    return {
        ...adminProjectUpdateOptionsToCrud(options),
        display_name: options.displayName,
        is_development_environment: options.isDevelopmentEnvironment,
        owner_team_id: options.teamId
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/cookie.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "consumeVerifierAndStateCookie",
    ()=>consumeVerifierAndStateCookie,
    "createBrowserCookieHelper",
    ()=>createBrowserCookieHelper,
    "createCookieHelper",
    ()=>createCookieHelper,
    "createCookieHelperSync",
    ()=>createCookieHelperSync,
    "createPlaceholderCookieHelper",
    ()=>createPlaceholderCookieHelper,
    "deleteCookie",
    ()=>deleteCookie,
    "deleteCookieClient",
    ()=>deleteCookieClient,
    "getAllCookiesClient",
    ()=>getAllCookiesClient,
    "getCookie",
    ()=>getCookie,
    "getCookieClient",
    ()=>getCookieClient,
    "isSecure",
    ()=>isSecure,
    "saveVerifierAndState",
    ()=>saveVerifierAndState,
    "setCookie",
    ()=>setCookie,
    "setCookieClient",
    ()=>setCookieClient,
    "setOrDeleteCookie",
    ()=>setOrDeleteCookie,
    "setOrDeleteCookieClient",
    ()=>setOrDeleteCookieClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-sc@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+react_787599febb8347f2cf1854bfaf4d572f/node_modules/@stackframe/stack-sc/dist/esm/index.react-server.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/js-cookie@3.0.8/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
var _navigator_userAgent_startsWith, _navigator_userAgent;
;
;
;
;
//#region ../../node_modules/.pnpm/oauth4webapi@3.8.3/node_modules/oauth4webapi/build/index.js
let USER_AGENT;
if (typeof navigator === "undefined" || !((_navigator_userAgent = navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : (_navigator_userAgent_startsWith = _navigator_userAgent.startsWith) === null || _navigator_userAgent_startsWith === void 0 ? void 0 : _navigator_userAgent_startsWith.call(_navigator_userAgent, "Mozilla/5.0 "))) USER_AGENT = "oauth4webapi/v3.8.3";
const ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE";
const ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE";
function CodedTypeError(message, code, cause) {
    const err = new TypeError(message, {
        cause
    });
    Object.assign(err, {
        code
    });
    return err;
}
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function buf(input) {
    if (typeof input === "string") return encoder.encode(input);
    return decoder.decode(input);
}
let encodeBase64Url;
if (Uint8Array.prototype.toBase64) encodeBase64Url = (input)=>{
    if (input instanceof ArrayBuffer) input = new Uint8Array(input);
    return input.toBase64({
        alphabet: "base64url",
        omitPadding: true
    });
};
else {
    const CHUNK_SIZE = 32768;
    encodeBase64Url = (input)=>{
        if (input instanceof ArrayBuffer) input = new Uint8Array(input);
        const arr = [];
        for(let i = 0; i < input.byteLength; i += CHUNK_SIZE)arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
        return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
}
let decodeBase64Url;
if (Uint8Array.fromBase64) decodeBase64Url = (input)=>{
    try {
        return Uint8Array.fromBase64(input, {
            alphabet: "base64url"
        });
    } catch (cause) {
        throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
    }
};
else decodeBase64Url = (input)=>{
    try {
        const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
        const bytes = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
        return bytes;
    } catch (cause) {
        throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
    }
};
function b64u(input) {
    if (typeof input === "string") return decodeBase64Url(input);
    return encodeBase64Url(input);
}
var OperationProcessingError = class extends Error {
    constructor(message, options){
        var _Error_captureStackTrace, _Error;
        super(message, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
        this.name = this.constructor.name;
        if (options === null || options === void 0 ? void 0 : options.code) this.code = options === null || options === void 0 ? void 0 : options.code;
        (_Error_captureStackTrace = (_Error = Error).captureStackTrace) === null || _Error_captureStackTrace === void 0 ? void 0 : _Error_captureStackTrace.call(_Error, this, this.constructor);
    }
};
function OPE(message, code, cause) {
    return new OperationProcessingError(message, {
        code,
        cause
    });
}
function assertString(input, it, code, cause) {
    try {
        if (typeof input !== "string") throw CodedTypeError("".concat(it, " must be a string"), ERR_INVALID_ARG_TYPE, cause);
        if (input.length === 0) throw CodedTypeError("".concat(it, " must not be empty"), ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
        if (code) throw OPE(err.message, code, cause);
        throw err;
    }
}
function randomBytes() {
    return b64u(crypto.getRandomValues(new Uint8Array(32)));
}
function generateRandomCodeVerifier() {
    return randomBytes();
}
function generateRandomState() {
    return randomBytes();
}
async function calculatePKCECodeChallenge(codeVerifier) {
    assertString(codeVerifier, "codeVerifier");
    return b64u(await crypto.subtle.digest("SHA-256", buf(codeVerifier)));
}
const URLParse = URL.parse ? (url, base)=>URL.parse(url, base) : (url, base)=>{
    try {
        return new URL(url, base);
    } catch (e) {
        return null;
    }
};
const tokenMatch = "[a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+";
const token68Match = "[a-zA-Z0-9\\-\\._\\~\\+\\/]+={0,2}";
const quotedParamMatcher = "(" + tokenMatch + ")\\s*=\\s*\"((?:[^\"\\\\]|\\\\[\\s\\S])*)\"";
const paramMatcher = "(" + tokenMatch + ")\\s*=\\s*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)";
const schemeRE = new RegExp("^[,\\s]*(" + tokenMatch + ")");
const quotedParamRE = new RegExp("^[,\\s]*" + quotedParamMatcher + "[,\\s]*(.*)");
const unquotedParamRE = new RegExp("^[,\\s]*" + paramMatcher + "[,\\s]*(.*)");
const token68ParamRE = new RegExp("^(" + token68Match + ")(?:$|[,\\s])(.*)");
//#endregion
//#region src/lib/cookie.ts
function ensureClient() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) throw new Error("cookieClient functions can only be called in a browser environment, yet window is undefined");
}
async function createPlaceholderCookieHelper() {
    function throwError() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Throwing cookie helper is just a placeholder. This should never be called");
    }
    return {
        get: throwError,
        getAll: throwError,
        set: throwError,
        setOrDelete: throwError,
        delete: throwError
    };
}
function requiresSecureAttribute(name) {
    return name.startsWith("__Host-");
}
function validateCookieOptions(name, options) {
    if (requiresSecureAttribute(name) && options.domain !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("__Host- cookies must not specify a Domain attribute");
}
async function createCookieHelper() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return createBrowserCookieHelper();
    else return createNextCookieHelper(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headers"])());
}
function createCookieHelperSync() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return createBrowserCookieHelper();
    function throwError() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Synchronous server cookie helpers are not available on this platform");
    }
    return {
        get: throwError,
        getAll: throwError,
        set: throwError,
        setOrDelete: throwError,
        delete: throwError
    };
}
function createBrowserCookieHelper() {
    return {
        get: getCookieClient,
        getAll: getAllCookiesClient,
        set: setCookieClient,
        setOrDelete: setOrDeleteCookieClient,
        delete: deleteCookieClient
    };
}
function handleCookieError(e, options) {
    if (e instanceof Error && e.message.includes("Cookies can only be modified in")) if (options.noOpIfServerComponent) {} else throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Attempted to set cookie in server component. Pass { noOpIfServerComponent: true } in the options of Stack's cookie functions if this is intentional and you want to ignore this error. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
    else throw e;
}
function createNextCookieHelper(rscCookiesAwaited, rscHeadersAwaited) {
    const cookieHelper = {
        get: (name)=>{
            var _cookieHelper_getAll_name;
            return (_cookieHelper_getAll_name = cookieHelper.getAll()[name]) !== null && _cookieHelper_getAll_name !== void 0 ? _cookieHelper_getAll_name : null;
        },
        getAll: ()=>{
            try {
                rscCookiesAwaited.set("hexclave-is-https", "true", {
                    secure: true,
                    expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365)
                });
                rscCookiesAwaited.set("stack-is-https", "true", {
                    secure: true,
                    expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365)
                });
            } catch (e) {
                if (typeof e === "object" && e !== null && "message" in e && typeof e.message === "string" && e.message.includes("Cookies can only be modified in a Server Action or Route Handler")) {} else throw e;
            }
            return rscCookiesAwaited.getAll().reduce((acc, entry)=>{
                acc[entry.name] = entry.value;
                return acc;
            }, {});
        },
        set: (name, value, options)=>{
            validateCookieOptions(name, options);
            const isSecureCookie = determineSecureFromServerContext(rscCookiesAwaited, rscHeadersAwaited);
            try {
                rscCookiesAwaited.set(name, value, {
                    secure: requiresSecureAttribute(name) || isSecureCookie,
                    maxAge: options.maxAge === "session" ? void 0 : options.maxAge,
                    domain: options.domain,
                    sameSite: "lax",
                    path: "/"
                });
            } catch (e) {
                handleCookieError(e, options);
            }
        },
        setOrDelete (name, value, options) {
            if (value === null) this.delete(name, options);
            else this.set(name, value, options);
        },
        delete (name, options) {
            try {
                validateCookieOptions(name, options);
                if (options.domain !== void 0) rscCookiesAwaited.delete({
                    name,
                    domain: options.domain,
                    path: "/"
                });
                else rscCookiesAwaited.delete({
                    name,
                    path: "/"
                });
            } catch (e) {
                handleCookieError(e, options);
            }
        }
    };
    return cookieHelper;
}
function getCookieClient(name) {
    var _getAllCookiesClient_name;
    return (_getAllCookiesClient_name = getAllCookiesClient()[name]) !== null && _getAllCookiesClient_name !== void 0 ? _getAllCookiesClient_name : null;
}
function getAllCookiesClient() {
    ensureClient();
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("hexclave-is-https", "true", {
        secure: true,
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365)
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("stack-is-https", "true", {
        secure: true,
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365)
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get();
}
async function getCookie(name) {
    return (await createCookieHelper()).get(name);
}
async function isSecure() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return determineSecureFromClientContext();
    return determineSecureFromServerContext(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headers"])());
}
function determineSecureFromClientContext() {
    return typeof window !== "undefined" && window.location.protocol === "https:";
}
function determineSecureFromServerContext(cookies, headers) {
    return cookies.has("hexclave-is-https") || cookies.has("stack-is-https") || headers.get("x-forwarded-proto") === "https";
}
let _shouldSetPartitionedClientCache = void 0;
function shouldSetPartitionedClient() {
    return _shouldSetPartitionedClientCache !== null && _shouldSetPartitionedClientCache !== void 0 ? _shouldSetPartitionedClientCache : _shouldSetPartitionedClientCache = _internalShouldSetPartitionedClient();
}
function _internalShouldSetPartitionedClient() {
    ensureClient();
    if (!determineSecureFromClientContext()) return false;
    const cookie1Name = "__Host-stack-temporary-chips-test-" + Math.random().toString(36).substring(2, 15);
    document.cookie = "".concat(cookie1Name, "=value1; Secure; path=/");
    const cookies1 = document.cookie.split("; ");
    document.cookie = "".concat(cookie1Name, "=delete1; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
    if (cookies1.some((c)=>c.startsWith(cookie1Name + "="))) return false;
    const cookie2Name = "__Host-stack-temporary-chips-test-" + Math.random().toString(36).substring(2, 15);
    document.cookie = "".concat(cookie2Name, "=delete1; Secure; SameSite=None; Partitioned; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
    document.cookie = "".concat(cookie2Name, "=delete2; Secure; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
    document.cookie = "".concat(cookie2Name, "=set1; Secure; SameSite=None; Partitioned; path=/");
    document.cookie = "".concat(cookie2Name, "=set2; Secure; SameSite=None; path=/");
    const numberOfCookiesWithThisName = document.cookie.split("; ").filter((c)=>c.startsWith(cookie2Name + "=")).length;
    document.cookie = "".concat(cookie2Name, "=delete3; Secure; SameSite=None; Partitioned; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
    document.cookie = "".concat(cookie2Name, "=delete4; Secure; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
    return numberOfCookiesWithThisName === 2;
}
function setCookieClientInternal(name, value, options) {
    validateCookieOptions(name, options);
    var _options_secure;
    const secure = requiresSecureAttribute(name) || ((_options_secure = options.secure) !== null && _options_secure !== void 0 ? _options_secure : determineSecureFromClientContext());
    const partitioned = shouldSetPartitionedClient();
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set(name, value, {
        expires: options.maxAge === "session" ? void 0 : new Date(Date.now() + options.maxAge * 1e3),
        domain: options.domain,
        secure,
        path: "/",
        sameSite: "Lax",
        ...partitioned ? {
            partitioned,
            sameSite: "None"
        } : {}
    });
}
function deleteCookieClientInternal(name, options) {
    validateCookieOptions(name, options);
    for (const partitioned of [
        true,
        false
    ]){
        if (options.domain !== void 0) __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(name, {
            domain: options.domain,
            secure: determineSecureFromClientContext(),
            partitioned,
            path: "/"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$8$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(name, {
            secure: requiresSecureAttribute(name) || determineSecureFromClientContext(),
            partitioned,
            path: "/"
        });
    }
}
function setOrDeleteCookieClient(name, value, options) {
    ensureClient();
    if (value === null) deleteCookieClientInternal(name, options);
    else setCookieClientInternal(name, value, options);
}
async function setOrDeleteCookie(name, value, options) {
    (await createCookieHelper()).setOrDelete(name, value, options);
}
function deleteCookieClient(name, options) {
    ensureClient();
    deleteCookieClientInternal(name, options);
}
async function deleteCookie(name, options) {
    (await createCookieHelper()).delete(name, options);
}
function setCookieClient(name, value, options) {
    ensureClient();
    setCookieClientInternal(name, value, options);
}
async function setCookie(name, value, options) {
    (await createCookieHelper()).set(name, value, options);
}
async function saveVerifierAndState() {
    const codeVerifier = generateRandomCodeVerifier();
    const codeChallenge = await calculatePKCECodeChallenge(codeVerifier);
    const state = generateRandomState();
    await setCookie("hexclave-oauth-outer-" + state, codeVerifier, {
        maxAge: 3600
    });
    await setCookie("stack-oauth-outer-" + state, codeVerifier, {
        maxAge: 3600
    });
    return {
        codeChallenge,
        state
    };
}
function consumeVerifierAndStateCookie(state) {
    ensureClient();
    const hexclaveCookieName = "hexclave-oauth-outer-" + state;
    const stackCookieName = "stack-oauth-outer-" + state;
    var _getCookieClient;
    const codeVerifier = (_getCookieClient = getCookieClient(hexclaveCookieName)) !== null && _getCookieClient !== void 0 ? _getCookieClient : getCookieClient(stackCookieName);
    if (!codeVerifier) return null;
    deleteCookieClient(hexclaveCookieName, {});
    deleteCookieClient(stackCookieName, {});
    return {
        codeVerifier
    };
}
;
 //# sourceMappingURL=cookie.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callOAuthCallback",
    ()=>callOAuthCallback,
    "getNewOAuthProviderOrScopeUrl",
    ()=>getNewOAuthProviderOrScopeUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/cookie.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      Stack found an outer OAuth callback state in the query parameters, but not in cookies.\n\n      This could have multiple reasons:\n        - The cookie expired, because the OAuth flow took too long.\n        - The user's browser deleted the cookie, either manually or because of a very strict cookie policy.\n        - The cookie was already consumed by this page, and the user already logged in.\n        - You are using another OAuth client library with the same callback URL as Stack.\n        - The user opened the OAuth callback page from their history.\n\n      Either way, it is probably safe to ignore this warning unless you are debugging an OAuth issue.\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
;
;
;
;
//#region src/lib/auth.ts
async function getNewOAuthProviderOrScopeUrl(iface, options, session) {
    const { codeChallenge, state } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveVerifierAndState"])();
    return await iface.getOAuthUrl({
        provider: options.provider,
        redirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(options.redirectUrl, "redirectUrl"),
        errorRedirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(options.errorRedirectUrl, "errorRedirectUrl"),
        afterCallbackRedirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(window.location.href, "afterCallbackRedirectUrl"),
        codeChallenge,
        state,
        type: "link",
        session,
        providerScope: options.providerScope
    });
}
function consumeOAuthCallbackQueryParams(options) {
    const oauthErrorParams = [
        "error",
        "error_description",
        "errorCode",
        "message",
        "details"
    ];
    const requiredParams = [
        "code",
        "state"
    ];
    const originalUrl = new URL(window.location.href);
    const knownErrorCode = originalUrl.searchParams.get("errorCode");
    const knownErrorMessage = originalUrl.searchParams.get("message");
    if (knownErrorCode && knownErrorMessage) {
        const details = originalUrl.searchParams.get("details");
        let detailsJson = {};
        if (details) try {
            detailsJson = JSON.parse(details);
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("OAuth callback returned malformed known-error details", {
                details,
                cause: error
            });
        }
        const newUrl = new URL(originalUrl);
        for (const param of oauthErrorParams)newUrl.searchParams.delete(param);
        window.history.replaceState({}, "", newUrl.toString());
        return {
            type: "known-error",
            error: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownError"].fromJson({
                code: knownErrorCode,
                message: knownErrorMessage,
                details: detailsJson
            })
        };
    }
    for (const param of requiredParams)if (!originalUrl.searchParams.has(param)) {
        if (!(options === null || options === void 0 ? void 0 : options.dontWarnAboutMissingQueryParams)) console.warn(/* @__PURE__ */ new Error("Missing required query parameter on OAuth callback: ".concat(param, ". Maybe you opened or reloaded the oauth-callback page from your history?")));
        return null;
    }
    var _originalUrl_searchParams_get;
    const expectedState = (_originalUrl_searchParams_get = originalUrl.searchParams.get("state")) !== null && _originalUrl_searchParams_get !== void 0 ? _originalUrl_searchParams_get : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("This should never happen; isn't state required above?");
    const cookieResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consumeVerifierAndStateCookie"])(expectedState);
    if (!cookieResult) {
        console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"])(_templateObject()));
        return null;
    }
    const newUrl = new URL(originalUrl);
    for (const param of requiredParams)newUrl.searchParams.delete(param);
    window.history.replaceState({}, "", newUrl.toString());
    return {
        type: "oauth-response",
        originalUrl,
        codeVerifier: cookieResult.codeVerifier,
        state: expectedState
    };
}
async function callOAuthCallback(iface, redirectUrl, options) {
    const consumed = consumeOAuthCallbackQueryParams(options);
    if (!consumed) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    if (consumed.type === "known-error") throw consumed.error;
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await iface.callOAuthCallback({
            oauthParams: consumed.originalUrl.searchParams,
            redirectUri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(redirectUrl, "redirectUri"),
            codeVerifier: consumed.codeVerifier,
            state: consumed.state
        }));
    } catch (e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownError"].isKnownError(e)) throw e;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Error signing in during OAuth callback. Please try again.", {
            cause: e
        });
    }
}
;
 //# sourceMappingURL=auth.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/session-replay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionRecorder",
    ()=>SessionRecorder,
    "analyticsOptionsFromJson",
    ()=>analyticsOptionsFromJson,
    "analyticsOptionsToJson",
    ()=>analyticsOptionsToJson,
    "generateUuid",
    ()=>generateUuid,
    "getOrRotateSession",
    ()=>getOrRotateSession,
    "makeLegacyStorageKey",
    ()=>makeLegacyStorageKey,
    "makeStorageKey",
    ()=>makeStorageKey,
    "safeParseStoredSession",
    ()=>safeParseStoredSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/env.js [app-client] (ecmascript)");
;
;
;
//#region src/lib/stack-app/apps/implementations/session-replay.ts
/**
* Converts AnalyticsOptions to a JSON-safe representation.
* RegExp blockClass values are serialized as `{ __regexp, __flags }` objects.
* The return type is AnalyticsOptions to keep StackClientAppJson simple;
* the actual runtime value is JSON-safe.
*/ function analyticsOptionsToJson(options) {
    var _options_replays;
    if (!(options === null || options === void 0 ? void 0 : (_options_replays = options.replays) === null || _options_replays === void 0 ? void 0 : _options_replays.blockClass)) return options;
    const { blockClass, ...rest } = options.replays;
    if (!(blockClass instanceof RegExp)) return options;
    return {
        ...options,
        replays: {
            ...rest,
            blockClass: {
                __regexp: blockClass.source,
                __flags: blockClass.flags
            }
        }
    };
}
/**
* Reconstructs AnalyticsOptions from a JSON-deserialized value.
* Converts `{ __regexp, __flags }` objects back to RegExp instances.
*/ function analyticsOptionsFromJson(json) {
    var _json_replays;
    if (!(json === null || json === void 0 ? void 0 : (_json_replays = json.replays) === null || _json_replays === void 0 ? void 0 : _json_replays.blockClass)) return json;
    const { blockClass, ...rest } = json.replays;
    if (typeof blockClass === "object" && "__regexp" in blockClass) {
        const bc = blockClass;
        return {
            ...json,
            replays: {
                ...rest,
                blockClass: new RegExp(bc.__regexp, bc.__flags)
            }
        };
    }
    return json;
}
const LOCAL_STORAGE_PREFIX = "hexclave:session-replay:v1";
const LEGACY_LOCAL_STORAGE_PREFIX = "stack:session-replay:v1";
const IDLE_TTL_MS = 180 * 1e3;
const FLUSH_INTERVAL_MS = 5e3;
const MAX_EVENTS_PER_BATCH = 200;
const MAX_APPROX_BYTES_PER_BATCH = 512e3;
function safeParseStoredSession(raw) {
    if (!raw) return null;
    try {
        const parsed = JSON.parse(raw);
        if (typeof parsed !== "object" || parsed === null) return null;
        if (typeof parsed.session_id !== "string") return null;
        if (typeof parsed.created_at_ms !== "number") return null;
        if (typeof parsed.last_activity_ms !== "number") return null;
        return parsed;
    } catch (e) {
        return null;
    }
}
function makeStorageKey(projectId) {
    return "".concat(LOCAL_STORAGE_PREFIX, ":").concat(projectId);
}
function makeLegacyStorageKey(projectId) {
    return "".concat(LEGACY_LOCAL_STORAGE_PREFIX, ":").concat(projectId);
}
function generateUuid() {
    return crypto.randomUUID();
}
function getOrRotateSession(options) {
    var _safeParseStoredSession;
    const existing = (_safeParseStoredSession = safeParseStoredSession(localStorage.getItem(options.key))) !== null && _safeParseStoredSession !== void 0 ? _safeParseStoredSession : options.legacyKey ? safeParseStoredSession(localStorage.getItem(options.legacyKey)) : null;
    if (existing && options.nowMs - existing.last_activity_ms <= IDLE_TTL_MS) return existing;
    const next = {
        session_id: generateUuid(),
        created_at_ms: options.nowMs,
        last_activity_ms: options.nowMs
    };
    localStorage.setItem(options.key, JSON.stringify(next));
    return next;
}
var SessionRecorder = class {
    /**
	* Starts recording. Idempotent — calling multiple times is safe.
	*/ start() {
        if (this._started) return;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return;
        this._started = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._startRecording(), {
            noErrorLogging: true
        });
        this._flushTimer = setInterval(()=>this._tick(), FLUSH_INTERVAL_MS);
    }
    stop() {
        this._cancelled = true;
        if (this._flushTimer !== null) {
            clearInterval(this._flushTimer);
            this._flushTimer = null;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                keepalive: true
            }));
        this._stopCurrentRecording();
    }
    clearBuffer() {
        this._events = [];
        this._approxBytes = 0;
    }
    _persistActivity(nowMs) {
        const stored = getOrRotateSession({
            key: this._storageKey,
            legacyKey: this._legacyStorageKey,
            nowMs
        });
        if (nowMs - this._lastPersistActivity < 5e3) return stored;
        this._lastPersistActivity = nowMs;
        const updated = {
            ...stored,
            last_activity_ms: nowMs
        };
        localStorage.setItem(this._storageKey, JSON.stringify(updated));
        return stored;
    }
    async _flush(options) {
        if (this._events.length === 0) return;
        if (this._flushInProgress) return;
        const nowMs = Date.now();
        const stored = getOrRotateSession({
            key: this._storageKey,
            legacyKey: this._legacyStorageKey,
            nowMs
        });
        const batchId = generateUuid();
        const payload = {
            browser_session_id: stored.session_id,
            session_replay_segment_id: this._sessionReplaySegmentId,
            batch_id: batchId,
            started_at_ms: stored.created_at_ms,
            sent_at_ms: nowMs,
            events: this._events
        };
        this._events = [];
        this._approxBytes = 0;
        this._flushInProgress = true;
        try {
            const res = await this._deps.sendBatch(JSON.stringify(payload), {
                keepalive: options.keepalive
            });
            if (res.status === "error") {
                console.warn("SessionRecorder flush failed:", res.error);
                return;
            }
            if (!res.data.ok) console.warn("SessionRecorder flush failed:", res.data.status, await res.data.text());
        } finally{
            this._flushInProgress = false;
        }
    }
    async _startRecording() {
        if (this._recording || this._cancelled) return;
        if (!this._rrwebModule) {
            const rrwebImport = await __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromPromise(__turbopack_context__.A("[project]/dograh-1/ui/node_modules/.pnpm/rrweb@1.1.3/node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js [app-client] (ecmascript, async loader)"));
            if (rrwebImport.status === "error") {
                console.warn("SessionRecorder: rrweb import failed. Is rrweb installed?", rrwebImport.error);
                return;
            }
            this._rrwebModule = rrwebImport.data;
        }
        if (this._cancelled) return;
        var _this__replayOptions_maskAllInputs, _this__rrwebModule_record;
        this._stopRecording = (_this__rrwebModule_record = this._rrwebModule.record({
            emit: (event)=>{
                const nowMs = Date.now();
                const stored = this._persistActivity(nowMs);
                if (this._lastBrowserSessionId === null) this._lastBrowserSessionId = stored.session_id;
                else if (stored.session_id !== this._lastBrowserSessionId && !this._takingSnapshot) {
                    this._lastBrowserSessionId = stored.session_id;
                    this._takingSnapshot = true;
                    try {
                        this._rrwebModule.record.takeFullSnapshot();
                    } finally{
                        this._takingSnapshot = false;
                    }
                }
                this._events.push(event);
                this._approxBytes += JSON.stringify(event).length;
                if (this._events.length >= MAX_EVENTS_PER_BATCH || this._approxBytes >= MAX_APPROX_BYTES_PER_BATCH) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                        keepalive: false
                    }));
            },
            maskAllInputs: (_this__replayOptions_maskAllInputs = this._replayOptions.maskAllInputs) !== null && _this__replayOptions_maskAllInputs !== void 0 ? _this__replayOptions_maskAllInputs : true,
            ...this._replayOptions.blockClass !== void 0 ? {
                blockClass: this._replayOptions.blockClass
            } : {},
            ...this._replayOptions.blockSelector !== void 0 ? {
                blockSelector: this._replayOptions.blockSelector
            } : {}
        })) !== null && _this__rrwebModule_record !== void 0 ? _this__rrwebModule_record : null;
        this._recording = true;
        const onPageHide = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                    keepalive: true
                }));
        };
        window.addEventListener("pagehide", onPageHide);
        document.addEventListener("visibilitychange", onPageHide);
        this._detachListeners = ()=>{
            window.removeEventListener("pagehide", onPageHide);
            document.removeEventListener("visibilitychange", onPageHide);
        };
    }
    _stopCurrentRecording() {
        if (this._detachListeners) {
            this._detachListeners();
            this._detachListeners = null;
        }
        if (this._stopRecording) {
            this._stopRecording();
            this._stopRecording = null;
        }
        this._events = [];
        this._approxBytes = 0;
        this._recording = false;
    }
    _tick() {
        if (this._cancelled) return;
        if (this._events.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                keepalive: false
            }));
    }
    constructor(deps, replayOptions){
        this._started = false;
        this._cancelled = false;
        this._stopRecording = null;
        this._detachListeners = null;
        this._flushTimer = null;
        this._events = [];
        this._approxBytes = 0;
        this._lastPersistActivity = 0;
        this._recording = false;
        this._rrwebModule = null;
        this._lastBrowserSessionId = null;
        this._takingSnapshot = false;
        this._flushInProgress = false;
        this._deps = deps;
        this._replayOptions = replayOptions;
        this._sessionReplaySegmentId = generateUuid();
        this._storageKey = makeStorageKey(deps.projectId);
        this._legacyStorageKey = makeLegacyStorageKey(deps.projectId);
    }
};
;
 //# sourceMappingURL=session-replay.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/event-tracker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventTracker",
    ()=>EventTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/session-replay.js [app-client] (ecmascript)");
;
;
;
//#region src/lib/stack-app/apps/implementations/event-tracker.ts
const FLUSH_INTERVAL_MS = 1e4;
const MAX_EVENTS_PER_BATCH = 50;
const MAX_APPROX_BYTES_PER_BATCH = 64e3;
function hasScreenDimensions(value) {
    if (value == null || typeof value !== "object") return false;
    if (!("width" in value) || !("height" in value)) return false;
    return typeof value.width === "number" && typeof value.height === "number";
}
function hasHistoryMethods(value) {
    if (value == null || typeof value !== "object") return false;
    if (!("pushState" in value) || !("replaceState" in value)) return false;
    return typeof value.pushState === "function" && typeof value.replaceState === "function";
}
var EventTracker = class {
    start() {
        if (this._started) return;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return;
        if (typeof window.addEventListener !== "function" || typeof window.removeEventListener !== "function" || typeof document.addEventListener !== "function" || typeof document.removeEventListener !== "function" || !hasScreenDimensions(window.screen)) return;
        this._started = true;
        this._setupPageViewCapture();
        this._setupClickCapture();
        this._setupPageHideListeners();
        this._flushTimer = setInterval(()=>this._tick(), FLUSH_INTERVAL_MS);
    }
    stop() {
        this._cancelled = true;
        if (this._flushTimer !== null) {
            clearInterval(this._flushTimer);
            this._flushTimer = null;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                keepalive: true
            }));
        this._teardown();
    }
    clearBuffer() {
        this._events = [];
        this._approxBytes = 0;
    }
    _pushEvent(event) {
        this._events.push(event);
        this._approxBytes += JSON.stringify(event).length;
        if (this._events.length >= MAX_EVENTS_PER_BATCH || this._approxBytes >= MAX_APPROX_BYTES_PER_BATCH) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                keepalive: false
            }));
    }
    _capturePageView(entryType) {
        const screenObject = window.screen;
        if (!hasScreenDimensions(screenObject)) return;
        const url = window.location.href;
        if (url === this._lastUrl && entryType !== "initial") return;
        this._lastUrl = url;
        this._pushEvent({
            event_type: "$page-view",
            event_at_ms: Date.now(),
            data: {
                url,
                path: window.location.pathname,
                referrer: document.referrer,
                title: document.title,
                entry_type: entryType,
                viewport_width: window.innerWidth,
                viewport_height: window.innerHeight,
                screen_width: screenObject.width,
                screen_height: screenObject.height
            }
        });
    }
    _setupPageViewCapture() {
        var _this = this;
        this._capturePageView("initial");
        const historyObject = window.history;
        if (!hasHistoryMethods(historyObject)) return;
        const originalPushState = historyObject.pushState;
        const originalReplaceState = historyObject.replaceState;
        this._originalPushState = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return originalPushState.apply(historyObject, args);
        };
        historyObject.pushState = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this._originalPushState(...args);
            _this._capturePageView("push");
        };
        this._originalReplaceState = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return originalReplaceState.apply(historyObject, args);
        };
        historyObject.replaceState = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this._originalReplaceState(...args);
            _this._capturePageView("replace");
        };
        window.addEventListener("popstate", this._onPopState);
    }
    _buildSelector(element) {
        const parts = [];
        let current = element;
        let depth = 0;
        while(current && depth < 5){
            let part = current.tagName.toLowerCase();
            if (current.id) {
                part += "#".concat(current.id);
                parts.unshift(part);
                break;
            }
            if (current.className && typeof current.className === "string") {
                const classes = current.className.trim().split(/\s+/).filter(Boolean);
                if (classes.length > 0) part += ".".concat(classes.join("."));
            }
            parts.unshift(part);
            current = current.parentElement;
            depth++;
        }
        return parts.join(" > ");
    }
    _findNearestAnchorHref(element) {
        let current = element;
        while(current){
            if (current.tagName === "A" && current.hasAttribute("href")) return current.getAttribute("href");
            current = current.parentElement;
        }
        return null;
    }
    _setupClickCapture() {
        document.addEventListener("click", this._onClickCapture, {
            capture: true
        });
    }
    _setupPageHideListeners() {
        window.addEventListener("pagehide", this._onPageHide);
        document.addEventListener("visibilitychange", this._onPageHide);
        this._detachListeners = ()=>{
            window.removeEventListener("pagehide", this._onPageHide);
            document.removeEventListener("visibilitychange", this._onPageHide);
        };
    }
    _teardown() {
        if (this._detachListeners) {
            this._detachListeners();
            this._detachListeners = null;
        }
        const historyObject = window.history;
        if (hasHistoryMethods(historyObject)) {
            if (this._originalPushState) historyObject.pushState = this._originalPushState;
            if (this._originalReplaceState) historyObject.replaceState = this._originalReplaceState;
        }
        this._originalPushState = null;
        this._originalReplaceState = null;
        window.removeEventListener("popstate", this._onPopState);
        document.removeEventListener("click", this._onClickCapture, {
            capture: true
        });
        this._events = [];
        this._approxBytes = 0;
    }
    async _flush(options) {
        if (this._events.length === 0) return;
        const nowMs = Date.now();
        const batchId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
        const payload = {
            session_replay_segment_id: this._sessionReplaySegmentId,
            batch_id: batchId,
            sent_at_ms: nowMs,
            events: this._events
        };
        this._events = [];
        this._approxBytes = 0;
        const res = await this._deps.sendBatch(JSON.stringify(payload), {
            keepalive: options.keepalive
        });
        if (res.status === "error") {
            console.warn("EventTracker flush failed:", res.error);
            return;
        }
        if (!res.data.ok) console.warn("EventTracker flush failed:", res.data.status, await res.data.text());
    }
    _tick() {
        if (this._cancelled) return;
        if (this._events.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                keepalive: false
            }));
    }
    constructor(deps){
        this._started = false;
        this._cancelled = false;
        this._detachListeners = null;
        this._flushTimer = null;
        this._events = [];
        this._approxBytes = 0;
        this._lastUrl = null;
        this._originalPushState = null;
        this._originalReplaceState = null;
        this._onPopState = ()=>{
            this._capturePageView("pop");
        };
        this._onClickCapture = (event)=>{
            const target = event.target;
            if (!(target instanceof Element)) return;
            this._pushEvent({
                event_type: "$click",
                event_at_ms: Date.now(),
                data: {
                    tag_name: target.tagName.toLowerCase(),
                    text: target.textContent.trim().substring(0, 200),
                    href: this._findNearestAnchorHref(target),
                    selector: this._buildSelector(target),
                    x: event.clientX,
                    y: event.clientY,
                    page_x: event.pageX,
                    page_y: event.pageY,
                    viewport_width: window.innerWidth,
                    viewport_height: window.innerHeight
                }
            });
        };
        this._onPageHide = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(()=>this._flush({
                    keepalive: true
                }));
        };
        this._deps = deps;
        this._sessionReplaySegmentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
    }
};
;
 //# sourceMappingURL=event-tracker.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/redirect-page-urls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "crossDomainAuthQueryParams",
    ()=>crossDomainAuthQueryParams,
    "getCrossDomainHandoffParamsFromCurrentUrl",
    ()=>getCrossDomainHandoffParamsFromCurrentUrl,
    "planRedirectToHandler",
    ()=>planRedirectToHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
;
;
//#region src/lib/stack-app/apps/implementations/redirect-page-urls.ts
const crossDomainAuthQueryParams = {
    marker: "hexclave_cross_domain_auth",
    state: "hexclave_cross_domain_state",
    codeChallenge: "hexclave_cross_domain_code_challenge",
    afterCallbackRedirectUrl: "hexclave_cross_domain_after_callback_redirect_url"
};
function getCrossDomainParam(params, key) {
    return params.get(crossDomainAuthQueryParams[key]);
}
function hasCrossDomainParam(params, key) {
    return params.has(crossDomainAuthQueryParams[key]);
}
function setCrossDomainParam(params, key, value) {
    params.set(crossDomainAuthQueryParams[key], value);
}
function getCrossDomainHandoffParamsFromCurrentUrl(currentUrl) {
    const state = getCrossDomainParam(currentUrl.searchParams, "state");
    const codeChallenge = getCrossDomainParam(currentUrl.searchParams, "codeChallenge");
    if (state == null || codeChallenge == null) return null;
    return {
        state,
        codeChallenge
    };
}
function isRedirectBackAwareHandlerName(handlerName) {
    return handlerName === "signIn" || handlerName === "signUp" || handlerName === "onboarding" || handlerName === "signOut";
}
function hasCrossDomainHandoffParams(url) {
    return hasCrossDomainParam(url.searchParams, "state") && hasCrossDomainParam(url.searchParams, "codeChallenge") && hasCrossDomainParam(url.searchParams, "afterCallbackRedirectUrl");
}
function buildCrossDomainAuthCallbackUrl(options) {
    const localOAuthCallbackUrl = new URL(options.localOAuthCallbackUrl, options.currentUrl);
    if (localOAuthCallbackUrl.origin !== options.currentUrl.origin) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Cross-domain auth callback URL must stay on the current origin", {
        localOAuthCallbackUrl: localOAuthCallbackUrl.toString(),
        currentUrl: options.currentUrl.toString()
    });
    setCrossDomainParam(localOAuthCallbackUrl.searchParams, "marker", "1");
    if (options.state != null) setCrossDomainParam(localOAuthCallbackUrl.searchParams, "state", options.state);
    if (options.codeChallenge != null) setCrossDomainParam(localOAuthCallbackUrl.searchParams, "codeChallenge", options.codeChallenge);
    if (options.afterCallbackRedirectUrl != null) setCrossDomainParam(localOAuthCallbackUrl.searchParams, "afterCallbackRedirectUrl", options.afterCallbackRedirectUrl);
    return localOAuthCallbackUrl;
}
function buildRedirectBackAwareHandlerUrl(options) {
    const nextUrl = new URL(options.rawHandlerUrl, options.currentUrl);
    const currentAfterAuthReturnTo = options.currentUrl.searchParams.get("after_auth_return_to");
    if (currentAfterAuthReturnTo != null && !nextUrl.searchParams.has("after_auth_return_to")) nextUrl.searchParams.set("after_auth_return_to", currentAfterAuthReturnTo);
    for (const preservedParam of [
        "state",
        "codeChallenge",
        "afterCallbackRedirectUrl"
    ]){
        const currentValue = getCrossDomainParam(options.currentUrl.searchParams, preservedParam);
        if (currentValue != null && !hasCrossDomainParam(nextUrl.searchParams, preservedParam)) setCrossDomainParam(nextUrl.searchParams, preservedParam, currentValue);
    }
    if (options.handlerName === "signOut") {
        if (!nextUrl.searchParams.has("after_auth_return_to")) if (options.currentUrl.protocol === nextUrl.protocol && options.currentUrl.host === nextUrl.host) nextUrl.searchParams.set("after_auth_return_to", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelativePart"])(options.currentUrl));
        else nextUrl.searchParams.set("after_auth_return_to", options.currentUrl.toString());
        return nextUrl.origin === options.currentUrl.origin ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelativePart"])(nextUrl) : nextUrl.toString();
    }
    if (options.currentUrl.origin !== nextUrl.origin) {
        if (!hasCrossDomainHandoffParams(nextUrl)) {
            var _options_crossDomainHandoffParams, _options_crossDomainHandoffParams1;
            const inheritedAfterAuthReturnTo = options.currentUrl.searchParams.get("after_auth_return_to");
            const afterCallbackRedirectUrl = inheritedAfterAuthReturnTo ? new URL(inheritedAfterAuthReturnTo, options.currentUrl).toString() : options.currentUrl.toString();
            const callbackUrl = buildCrossDomainAuthCallbackUrl({
                currentUrl: options.currentUrl,
                localOAuthCallbackUrl: options.localOAuthCallbackUrl,
                state: (_options_crossDomainHandoffParams = options.crossDomainHandoffParams) === null || _options_crossDomainHandoffParams === void 0 ? void 0 : _options_crossDomainHandoffParams.state,
                codeChallenge: (_options_crossDomainHandoffParams1 = options.crossDomainHandoffParams) === null || _options_crossDomainHandoffParams1 === void 0 ? void 0 : _options_crossDomainHandoffParams1.codeChallenge,
                afterCallbackRedirectUrl
            });
            nextUrl.searchParams.set("after_auth_return_to", callbackUrl.toString());
            setCrossDomainParam(nextUrl.searchParams, "afterCallbackRedirectUrl", afterCallbackRedirectUrl);
            if (options.crossDomainHandoffParams != null) {
                setCrossDomainParam(nextUrl.searchParams, "state", options.crossDomainHandoffParams.state);
                setCrossDomainParam(nextUrl.searchParams, "codeChallenge", options.crossDomainHandoffParams.codeChallenge);
            }
        }
    } else if (options.currentUrl.protocol === nextUrl.protocol && options.currentUrl.host === nextUrl.host && !nextUrl.searchParams.has("after_auth_return_to")) nextUrl.searchParams.set("after_auth_return_to", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelativePart"])(options.currentUrl));
    return nextUrl.origin === options.currentUrl.origin ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelativePart"])(nextUrl) : nextUrl.toString();
}
function getHandlerRedirectPolicy(handlerName) {
    if (handlerName === "afterSignIn" || handlerName === "afterSignUp") return "after-auth-return";
    if (isRedirectBackAwareHandlerName(handlerName)) return "redirect-back-aware";
    return "none";
}
async function resolveRedirectBackAwareHandlerUrlForRedirect(options) {
    const initial = buildRedirectBackAwareHandlerUrl({
        handlerName: options.handlerName,
        rawHandlerUrl: options.rawHandlerUrl,
        currentUrl: options.currentUrl,
        crossDomainHandoffParams: null,
        localOAuthCallbackUrl: options.localOAuthCallbackUrl
    });
    if (options.handlerName === "signOut") return initial;
    const initialTarget = new URL(initial, options.currentUrl);
    if (!(options.currentUrl.origin !== initialTarget.origin) || hasCrossDomainHandoffParams(initialTarget)) return initial;
    const crossDomainHandoffParams = await options.getCrossDomainHandoffParams(options.currentUrl);
    return buildRedirectBackAwareHandlerUrl({
        handlerName: options.handlerName,
        rawHandlerUrl: options.rawHandlerUrl,
        currentUrl: options.currentUrl,
        crossDomainHandoffParams,
        localOAuthCallbackUrl: options.localOAuthCallbackUrl
    });
}
async function planRedirectToHandler(options) {
    if (options.noRedirectBack || options.currentUrl == null) return {
        type: "redirect",
        url: options.rawHandlerUrl
    };
    const policy = getHandlerRedirectPolicy(options.handlerName);
    if (policy === "none") return {
        type: "redirect",
        url: options.rawHandlerUrl
    };
    if (policy === "after-auth-return") {
        const redirectBackUrl = options.currentUrl.searchParams.get("after_auth_return_to");
        if (redirectBackUrl == null) return {
            type: "redirect",
            url: options.rawHandlerUrl
        };
        const redirectBackTarget = new URL(redirectBackUrl, options.currentUrl);
        const crossDomainHandoff = getCrossDomainHandoffForRedirect({
            currentUrl: options.currentUrl,
            redirectBackTarget
        });
        if (crossDomainHandoff == null) return {
            type: "redirect",
            url: redirectBackUrl
        };
        let state = crossDomainHandoff.handoffParams.state;
        let codeChallenge = crossDomainHandoff.handoffParams.codeChallenge;
        let afterCallbackRedirectUrl = crossDomainHandoff.handoffParams.afterCallbackRedirectUrl;
        if (state == null || codeChallenge == null) {
            const generatedHandoffParams = await options.getCrossDomainHandoffParams(options.currentUrl);
            state !== null && state !== void 0 ? state : state = generatedHandoffParams.state;
            codeChallenge !== null && codeChallenge !== void 0 ? codeChallenge : codeChallenge = generatedHandoffParams.codeChallenge;
        }
        afterCallbackRedirectUrl !== null && afterCallbackRedirectUrl !== void 0 ? afterCallbackRedirectUrl : afterCallbackRedirectUrl = options.currentUrl.toString();
        return {
            type: "cross-domain-authorize",
            redirectUri: crossDomainHandoff.redirectBackTarget.toString(),
            state,
            codeChallenge,
            afterCallbackRedirectUrl
        };
    }
    if (options.handlerName !== "signIn" && options.handlerName !== "signUp" && options.handlerName !== "onboarding" && options.handlerName !== "signOut") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected redirect-back-aware handler policy mismatch", {
        handlerName: options.handlerName,
        policy
    });
    return {
        type: "redirect",
        url: await resolveRedirectBackAwareHandlerUrlForRedirect({
            handlerName: options.handlerName,
            rawHandlerUrl: options.rawHandlerUrl,
            currentUrl: options.currentUrl,
            localOAuthCallbackUrl: options.localOAuthCallbackUrl,
            getCrossDomainHandoffParams: options.getCrossDomainHandoffParams
        })
    };
}
function readCrossDomainHandoffParams(currentUrl, redirectBackTarget) {
    var _getCrossDomainParam, _getCrossDomainParam1, _getCrossDomainParam2;
    return {
        state: (_getCrossDomainParam = getCrossDomainParam(currentUrl.searchParams, "state")) !== null && _getCrossDomainParam !== void 0 ? _getCrossDomainParam : getCrossDomainParam(redirectBackTarget.searchParams, "state"),
        codeChallenge: (_getCrossDomainParam1 = getCrossDomainParam(currentUrl.searchParams, "codeChallenge")) !== null && _getCrossDomainParam1 !== void 0 ? _getCrossDomainParam1 : getCrossDomainParam(redirectBackTarget.searchParams, "codeChallenge"),
        afterCallbackRedirectUrl: (_getCrossDomainParam2 = getCrossDomainParam(currentUrl.searchParams, "afterCallbackRedirectUrl")) !== null && _getCrossDomainParam2 !== void 0 ? _getCrossDomainParam2 : getCrossDomainParam(redirectBackTarget.searchParams, "afterCallbackRedirectUrl")
    };
}
function resolveCrossDomainRedirectBackTarget(options) {
    if (options.redirectBackTarget.origin !== options.currentUrl.origin) return options.redirectBackTarget;
    if (options.handoffParams.state == null || options.handoffParams.codeChallenge == null || options.handoffParams.afterCallbackRedirectUrl == null) return null;
    const afterCallbackRedirectTarget = new URL(options.handoffParams.afterCallbackRedirectUrl, options.currentUrl);
    if (afterCallbackRedirectTarget.origin === options.currentUrl.origin) return null;
    return new URL("".concat(options.redirectBackTarget.pathname).concat(options.redirectBackTarget.search).concat(options.redirectBackTarget.hash), afterCallbackRedirectTarget.origin);
}
function getCrossDomainHandoffForRedirect(options) {
    const handoffParams = readCrossDomainHandoffParams(options.currentUrl, options.redirectBackTarget);
    const crossDomainRedirectBackTarget = resolveCrossDomainRedirectBackTarget({
        currentUrl: options.currentUrl,
        redirectBackTarget: options.redirectBackTarget,
        handoffParams
    });
    if (crossDomainRedirectBackTarget == null) return null;
    return {
        redirectBackTarget: crossDomainRedirectBackTarget,
        handoffParams
    };
}
;
 //# sourceMappingURL=redirect-page-urls.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/session-refresh-subscription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/apps/implementations/session-refresh-subscription.ts
/**
* Keeps the currently mounted React session fresh while `useSyncExternalStore`
* has an active subscriber. The token store owns which session is current; when
* it changes to a different session key, we stop refreshing the old session and
* start refreshing the new one. The caller still receives every token-store
* change through `onTokenStoreChange` so React can re-read the session snapshot.
*/ __turbopack_context__.s([
    "subscribeSessionRefresh",
    ()=>subscribeSessionRefresh
]);
function subscribeSessionRefresh(options) {
    var _options_minMillisUntilExpiration;
    const minMillisUntilExpiration = (_options_minMillisUntilExpiration = options.minMillisUntilExpiration) !== null && _options_minMillisUntilExpiration !== void 0 ? _options_minMillisUntilExpiration : 3e4;
    var _options_maxMillisSinceIssued;
    const maxMillisSinceIssued = (_options_maxMillisSinceIssued = options.maxMillisSinceIssued) !== null && _options_maxMillisSinceIssued !== void 0 ? _options_maxMillisSinceIssued : 6e4;
    let refreshedSession = options.getSession();
    let refreshSubscription = refreshedSession.startRefreshingAccessToken(minMillisUntilExpiration, maxMillisSinceIssued);
    const tokenStoreSubscription = options.tokenStore.onChange(()=>{
        const nextSession = options.getSession();
        if (nextSession.sessionKey !== refreshedSession.sessionKey) {
            refreshSubscription.unsubscribe();
            refreshedSession = nextSession;
            refreshSubscription = refreshedSession.startRefreshingAccessToken(minMillisUntilExpiration, maxMillisSinceIssued);
        }
        options.onTokenStoreChange();
    });
    return ()=>{
        tokenStoreSubscription.unsubscribe();
        refreshSubscription.unsubscribe();
    };
}
;
 //# sourceMappingURL=session-refresh-subscription.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/client-app-impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StackClientAppImplIncomplete",
    ()=>_StackClientAppImplIncomplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$client$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/interface/client-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$redirect$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/redirect-urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$projects$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/projects/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$webAuthnError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/helpers/webAuthnError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/methods/startAuthentication.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/methods/startRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$compile$2d$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/compile-time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$maps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/maps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/stores.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$turnstile$2d$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/turnstile-flow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/uuids.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$1$2e$1$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/cookie@1.1.1/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/auth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/cookie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/api-keys/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$contact$2d$channels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/contact-channels/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/teams/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/url-targets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/users/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$event$2d$tracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/event-tracker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$redirect$2d$page$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/redirect-page-urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$refresh$2d$subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/session-refresh-subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/session-replay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-sc@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+react_787599febb8347f2cf1854bfaf4d572f/node_modules/@stackframe/stack-sc/dist/esm/index.default.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          Cannot add new scopes to a user that is not a CurrentUser. Please ensure that you are calling this function on a CurrentUser object, or remove the 'or: redirect' option.\n\n          Often, you can solve this by calling this function in the browser instead, or by removing the 'or: redirect' option and dealing with the case where the user doesn't have enough permissions.\n        "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
let _stackAppInternalsSymbol, _stackAppInternalsSymbol1;
var __StackClientAppImplIncomplete;
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
;
;
//#region src/lib/stack-app/apps/implementations/client-app-impl.ts
let isReactServer = false;
isReactServer = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isReactServer;
const NextNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$compile$2d$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrambleDuringCompileTime"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__);
const prefetchedCrossDomainHandoffTtlMs = 3300 * 1e3;
const nestedCrossDomainAuthQueryParams = {
    refreshTokenId: "stack_nested_cross_domain_auth_refresh_token_id",
    callbackUrl: "stack_nested_cross_domain_auth_callback_url",
    redirectUri: "redirect_uri",
    state: "state",
    codeChallenge: "code_challenge",
    codeChallengeMethod: "code_challenge_method",
    afterCallbackRedirectUrl: "after_callback_redirect_url"
};
const oauthCallbackResponseQueryParams = [
    "code",
    "state",
    "error",
    "error_description",
    "errorCode",
    "message",
    "details"
];
const allClientApps = /* @__PURE__ */ new Map();
const STACK_AUTHORIZATION_VALUE_PREFIX = "stackauth_";
const HEXCLAVE_AUTHORIZATION_VALUE_PREFIX = "hexclave_";
function getAuthorizationHeaderValueFromAuthJson(authJson) {
    if (authJson.accessToken == null && authJson.refreshToken == null) return null;
    return "Bearer ".concat(STACK_AUTHORIZATION_VALUE_PREFIX).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(new TextEncoder().encode(JSON.stringify(authJson))));
}
function getAuthJsonFromAuthorizationHeaderValue(authorizationHeaderValue) {
    const match = authorizationHeaderValue.match(/^Bearer\s+(.+)$/i);
    if (match == null) return null;
    const credential = match[1].trim();
    const matchedPrefix = credential.startsWith(HEXCLAVE_AUTHORIZATION_VALUE_PREFIX) ? HEXCLAVE_AUTHORIZATION_VALUE_PREFIX : credential.startsWith(STACK_AUTHORIZATION_VALUE_PREFIX) ? STACK_AUTHORIZATION_VALUE_PREFIX : null;
    if (matchedPrefix == null) return null;
    const encodedAuthJson = credential.slice(matchedPrefix.length);
    if (encodedAuthJson.length === 0) throw new Error("Invalid Authorization header format. Expected `Bearer stackauth_<base64(getAuthJson())>`.");
    let parsed;
    try {
        const decodedAuthJson = new TextDecoder().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encodedAuthJson));
        parsed = JSON.parse(decodedAuthJson);
    } catch (e) {
        throw new Error("Invalid stackauth authorization header.", {
            cause: e
        });
    }
    if (parsed == null || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid stackauth authorization payload. Expected an object.");
    const accessToken = Reflect.get(parsed, "accessToken");
    const refreshToken = Reflect.get(parsed, "refreshToken");
    if (accessToken != null && typeof accessToken !== "string") throw new Error("Invalid stackauth authorization payload. `accessToken` must be a string or null.");
    if (refreshToken != null && typeof refreshToken !== "string") throw new Error("Invalid stackauth authorization payload. `refreshToken` must be a string or null.");
    return {
        accessToken: accessToken !== null && accessToken !== void 0 ? accessToken : null,
        refreshToken: refreshToken !== null && refreshToken !== void 0 ? refreshToken : null
    };
}
function getHeaderValueFromRequestLikeHeaders(headers, name) {
    if ("get" in headers && typeof headers.get === "function") return headers.get(name);
    const lowerCaseName = name.toLowerCase();
    for (const [headerName, headerValue] of Object.entries(headers))if (headerName.toLowerCase() === lowerCaseName) return headerValue;
    return null;
}
async function getServerRequestHost() {
    var _this, _sc_headers;
    var _get;
    return (_get = (_this = await ((_sc_headers = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.headers) === null || _sc_headers === void 0 ? void 0 : _sc_headers.call(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__))) === null || _this === void 0 ? void 0 : _this.get("host")) !== null && _get !== void 0 ? _get : null;
}
var _StackClientAppImplIncomplete = (_stackAppInternalsSymbol = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"], _stackAppInternalsSymbol1 = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"], __StackClientAppImplIncomplete = class _StackClientAppImplIncomplete {
    async _createCookieHelper(overrideTokenStoreInit) {
        const tokenStoreInit = overrideTokenStoreInit === void 0 ? this._tokenStoreInit : overrideTokenStoreInit;
        if (tokenStoreInit === "nextjs-cookie" || tokenStoreInit === "cookie") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCookieHelper"])();
        else return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlaceholderCookieHelper"])();
    }
    /** @deprecated Used by legacy getConnectedAccount(providerId) — combines user check + token check + redirect into one cache */ async _getUserOAuthConnectionCacheFn(options) {
        var _user_oauth_providers_find;
        const user = await options.getUser();
        let hasConnection = true;
        if (!user || !user.oauth_providers.find((p)=>p.id === options.providerId)) hasConnection = false;
        if (!await options.getOrWaitOAuthToken()) hasConnection = false;
        if (!hasConnection && options.redirect) {
            if (!options.session) throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"])(_templateObject()));
            var _this__oauthScopesOnSignIn_options_providerId;
            const location = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNewOAuthProviderOrScopeUrl"])(this._interface, {
                provider: options.providerId,
                redirectUrl: this._getOAuthCallbackRedirectUri(),
                errorRedirectUrl: this.urls.error,
                providerScope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeStrings"])(options.scope || "", ((_this__oauthScopesOnSignIn_options_providerId = this._oauthScopesOnSignIn[options.providerId]) !== null && _this__oauthScopesOnSignIn_options_providerId !== void 0 ? _this__oauthScopesOnSignIn_options_providerId : []).join(" "))
            }, options.session);
            await this._redirectTo({
                url: location
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neverResolve"])();
        } else if (!hasConnection) return null;
        var _user_oauth_providers_find_account_id;
        const providerAccountId = (_user_oauth_providers_find_account_id = (_user_oauth_providers_find = user.oauth_providers.find((p)=>p.id === options.providerId)) === null || _user_oauth_providers_find === void 0 ? void 0 : _user_oauth_providers_find.account_id) !== null && _user_oauth_providers_find_account_id !== void 0 ? _user_oauth_providers_find_account_id : "";
        return {
            id: options.providerId,
            provider: options.providerId,
            providerAccountId,
            async getAccessToken () {
                const result = await options.getOrWaitOAuthToken();
                if (!result) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Failed to retrieve an access token for this connected account (provider: ".concat(options.providerId, "). This usually means the OAuth refresh token has been revoked or expired. The user needs to re-authorize by calling `linkConnectedAccount` or using `getOrLinkConnectedAccount`."));
                return result;
            },
            useAccessToken () {
                const result = options.useOAuthToken();
                if (!result) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Failed to retrieve an access token for this connected account (provider: ".concat(options.providerId, "). This usually means the OAuth refresh token has been revoked or expired. The user needs to re-authorize by calling `linkConnectedAccount` or using `getOrLinkConnectedAccount`."));
                return result;
            }
        };
    }
    _createOAuthConnectionFromCrudItem(item, session) {
        const app = this;
        const providerId = item.provider;
        const providerAccountId = item.provider_account_id;
        return {
            id: providerId,
            provider: providerId,
            providerAccountId,
            async getAccessToken (options) {
                var _options_scopes;
                var _options_scopes_join;
                const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserOAuthConnectionAccessTokensByAccountCache.getOrWait([
                    session,
                    providerId,
                    providerAccountId,
                    scopeString
                ], "write-only"));
                if (!result) {
                    const scopeDetail = scopeString ? "The requested scopes [".concat(scopeString, "] are not available on the existing token.") : "The OAuth refresh token has likely been revoked or expired.";
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable(providerId, "".concat(scopeDetail, " The user needs to re-authorize by calling `linkConnectedAccount` or using `getOrLinkConnectedAccount`.")));
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(result);
            },
            useAccessToken (options) {
                var _options_scopes;
                var _options_scopes_join;
                const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserOAuthConnectionAccessTokensByAccountCache, [
                    session,
                    providerId,
                    providerAccountId,
                    scopeString
                ], "connection.useAccessToken()");
                if (!result) {
                    const scopeDetail = scopeString ? "The requested scopes [".concat(scopeString, "] are not available on the existing token.") : "The OAuth refresh token has likely been revoked or expired.";
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable(providerId, "".concat(scopeDetail, " The user needs to re-authorize by calling `linkConnectedAccount` or using `getOrLinkConnectedAccount`.")));
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(result);
            }
        };
    }
    _initUniqueIdentifier() {
        var _this__extraOptions;
        if (!this._uniqueIdentifier) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unique identifier not initialized");
        if (allClientApps.has(this._uniqueIdentifier)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("A Stack client app with the same unique identifier already exists");
        var _this__extraOptions_checkString;
        allClientApps.set(this._uniqueIdentifier, [
            (_this__extraOptions_checkString = (_this__extraOptions = this._extraOptions) === null || _this__extraOptions === void 0 ? void 0 : _this__extraOptions.checkString) !== null && _this__extraOptions_checkString !== void 0 ? _this__extraOptions_checkString : void 0,
            this
        ]);
    }
    _trackPendingAuthResolution(callback) {
        const promise = (async ()=>{
            await Promise.resolve();
            try {
                await callback();
            } catch (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("pending-auth-resolution-failed", error);
            }
        })();
        this._pendingAuthResolutionPromises.push(promise);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            try {
                await promise;
            } finally{
                this._pendingAuthResolutionPromises = this._pendingAuthResolutionPromises.filter((p)=>p !== promise);
            }
        });
    }
    async _awaitPendingAuthResolutions(overrideTokenStoreInit, options) {
        if ((options === null || options === void 0 ? void 0 : options.awaitPendingAuthResolutions) === false || overrideTokenStoreInit !== void 0 || !this._hasPersistentTokenStore() || this._pendingAuthResolutionPromises.length === 0) return;
        await Promise.all(this._pendingAuthResolutionPromises);
    }
    _usePendingAuthResolutions(overrideTokenStoreInit) {
        if (overrideTokenStoreInit !== void 0 || !this._hasPersistentTokenStore() || this._pendingAuthResolutionPromises.length === 0) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(Promise.all(this._pendingAuthResolutionPromises));
    }
    _isOAuthCallbackUrlHosted() {
        var _this__urlOptions_oauthCallback;
        const oauthCallbackTarget = (_this__urlOptions_oauthCallback = this._urlOptions.oauthCallback) !== null && _this__urlOptions_oauthCallback !== void 0 ? _this__urlOptions_oauthCallback : this._urlOptions.default;
        return typeof oauthCallbackTarget !== "string" && (oauthCallbackTarget === null || oauthCallbackTarget === void 0 ? void 0 : oauthCallbackTarget.type) === "hosted";
    }
    _currentUrlLooksLikeOAuthCallback() {
        if (typeof window === "undefined") return false;
        const currentUrl = new URL(window.location.href);
        return currentUrl.searchParams.has("code") && currentUrl.searchParams.has("state") || currentUrl.searchParams.has("errorCode") && currentUrl.searchParams.has("message");
    }
    _currentUrlLooksLikeStackOAuthCallback() {
        if (typeof window === "undefined") return false;
        const currentUrl = new URL(window.location.href);
        const state = currentUrl.searchParams.get("state");
        if (!currentUrl.searchParams.has("code") || state == null) return false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookieClient"])("stack-oauth-outer-".concat(state)) != null;
    }
    _getOAuthCallbackRedirectUri() {
        if (!this._isOAuthCallbackUrlHosted()) return this.urls.oauthCallback;
        if (typeof window === "undefined") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Hosted OAuth callback URLs require a browser environment to use the current URL as the redirect URI");
        const currentUrl = new URL(window.location.href);
        for (const param of oauthCallbackResponseQueryParams)currentUrl.searchParams.delete(param);
        return currentUrl.toString();
    }
    async _getCurrentRefreshTokenIdIfSignedIn(options) {
        const tokens = await (await this._getSession(options === null || options === void 0 ? void 0 : options.overrideTokenStoreInit, options)).getOrFetchLikelyValidTokens(0, null);
        if ((tokens === null || tokens === void 0 ? void 0 : tokens.refreshToken) == null) return null;
        return tokens.accessToken.payload.refresh_token_id;
    }
    async _addNestedCrossDomainAuthParamsToRedirectUrl(options) {
        const targetUrl = new URL(options.url, options.currentUrl);
        if (targetUrl.origin === options.currentUrl.origin) return options.url;
        const refreshTokenId = await this._getCurrentRefreshTokenIdIfSignedIn({
            awaitPendingAuthResolutions: options.awaitPendingAuthResolutions,
            overrideTokenStoreInit: options.overrideTokenStoreInit
        });
        if (refreshTokenId == null) return options.url;
        targetUrl.searchParams.set(nestedCrossDomainAuthQueryParams.refreshTokenId, refreshTokenId);
        targetUrl.searchParams.set(nestedCrossDomainAuthQueryParams.callbackUrl, new URL(this._getOAuthCallbackRedirectUri(), options.currentUrl).toString());
        return targetUrl.toString();
    }
    async _maybeHandleNestedCrossDomainAuth() {
        if (typeof window === "undefined") return false;
        const currentUrl = new URL(window.location.href);
        if (currentUrl.searchParams.has("code") && currentUrl.searchParams.has("state")) return false;
        const refreshTokenId = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.refreshTokenId);
        if (refreshTokenId == null) return false;
        const redirectUri = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.redirectUri);
        const state = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.state);
        const codeChallenge = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.codeChallenge);
        if (redirectUri != null || state != null || codeChallenge != null) {
            if (redirectUri == null || state == null || codeChallenge == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Nested cross-domain auth callback URL is missing OAuth request parameters", {
                redirectUri,
                state,
                codeChallenge
            });
            var _currentUrl_searchParams_get;
            if (((_currentUrl_searchParams_get = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.codeChallengeMethod)) !== null && _currentUrl_searchParams_get !== void 0 ? _currentUrl_searchParams_get : "S256") !== "S256") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Nested cross-domain auth only supports S256 PKCE");
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRelative"])(redirectUri)) throw new Error("Nested cross-domain auth redirect URI must be absolute.");
            const redirectUriUrl = new URL(redirectUri);
            if (!await this._isTrusted(redirectUriUrl.toString())) throw new Error("Nested cross-domain auth redirect URI ".concat(redirectUri, " is not trusted."));
            const afterCallbackRedirectUrlString = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.afterCallbackRedirectUrl);
            const afterCallbackRedirectUrl = afterCallbackRedirectUrlString == null ? redirectUriUrl : new URL(afterCallbackRedirectUrlString, redirectUriUrl);
            if (!await this._isTrusted(afterCallbackRedirectUrl.toString())) throw new Error("Nested cross-domain auth after-callback redirect URL ".concat(afterCallbackRedirectUrlString, " is not trusted."));
            if (await this._getCurrentRefreshTokenIdIfSignedIn({
                awaitPendingAuthResolutions: false
            }) !== refreshTokenId) throw new Error("Nested cross-domain auth source session does not match the requested refresh token ID.");
            await this._redirectTo({
                url: await this._createCrossDomainAuthRedirectUrl({
                    redirectUri: redirectUriUrl.toString(),
                    state,
                    codeChallenge,
                    afterCallbackRedirectUrl: afterCallbackRedirectUrl.toString(),
                    awaitPendingAuthResolutions: false
                }),
                replace: true
            });
            return true;
        }
        if (await this._getCurrentRefreshTokenIdIfSignedIn({
            awaitPendingAuthResolutions: false
        }) === refreshTokenId) return false;
        const callbackUrlString = currentUrl.searchParams.get(nestedCrossDomainAuthQueryParams.callbackUrl);
        if (callbackUrlString == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Nested cross-domain auth URL is missing callback URL");
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRelative"])(callbackUrlString)) throw new Error("Nested cross-domain auth callback URL must be absolute.");
        const callbackUrl = new URL(callbackUrlString);
        if (!await this._isTrusted(callbackUrl.toString())) throw new Error("Nested cross-domain auth callback URL ".concat(callbackUrlString, " is not trusted."));
        const afterCallbackRedirectUrl = new URL(currentUrl);
        afterCallbackRedirectUrl.searchParams.delete(nestedCrossDomainAuthQueryParams.refreshTokenId);
        afterCallbackRedirectUrl.searchParams.delete(nestedCrossDomainAuthQueryParams.callbackUrl);
        const { state: newState, codeChallenge: newCodeChallenge } = await this._getCrossDomainHandoffParamsForRedirect(currentUrl);
        callbackUrl.searchParams.set(nestedCrossDomainAuthQueryParams.refreshTokenId, refreshTokenId);
        callbackUrl.searchParams.set(nestedCrossDomainAuthQueryParams.redirectUri, new URL(this._getOAuthCallbackRedirectUri(), currentUrl).toString());
        callbackUrl.searchParams.set(nestedCrossDomainAuthQueryParams.state, newState);
        callbackUrl.searchParams.set(nestedCrossDomainAuthQueryParams.codeChallenge, newCodeChallenge);
        callbackUrl.searchParams.set(nestedCrossDomainAuthQueryParams.codeChallengeMethod, "S256");
        callbackUrl.searchParams.set(nestedCrossDomainAuthQueryParams.afterCallbackRedirectUrl, afterCallbackRedirectUrl.toString());
        await this._redirectTo({
            url: callbackUrl,
            replace: true
        });
        return true;
    }
    /**
	* Cloudflare workers does not allow use of randomness on the global scope (on which the Stack app is probably
	* initialized). For that reason, we generate the unique identifier lazily when it is first needed instead of in the
	* constructor.
	*/ _getUniqueIdentifier() {
        if (!this._uniqueIdentifier) {
            this._uniqueIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
            this._initUniqueIdentifier();
        }
        return this._uniqueIdentifier;
    }
    async _checkFeatureSupport(name, options) {
        return await this._interface.checkFeatureSupport({
            ...options,
            name
        });
    }
    _useCheckFeatureSupport(name, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(this._checkFeatureSupport(name, options));
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("".concat(name, " is not currently supported. Please reach out to Stack support for more information."));
    }
    get _legacyRefreshTokenCookieName() {
        return "stack-refresh-".concat(this.projectId);
    }
    get _refreshTokenCookieName() {
        return "hexclave-refresh-".concat(this.projectId);
    }
    _getRefreshTokenDefaultCookieNameForSecure(secure) {
        return "".concat(secure ? "__Host-" : "").concat(this._refreshTokenCookieName, "--default");
    }
    _getCustomRefreshCookieName(domain) {
        const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase32"])(new TextEncoder().encode(domain.toLowerCase()));
        return "".concat(this._refreshTokenCookieName, "--custom-").concat(encoded);
    }
    _getDomainFromCustomRefreshCookieName(name) {
        for (const base of [
            this._refreshTokenCookieName,
            this._legacyRefreshTokenCookieName
        ]){
            const prefix = "".concat(base, "--custom-");
            if (!name.startsWith(prefix)) continue;
            try {
                return new TextDecoder().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase32"])(name.slice(prefix.length)));
            } catch (e) {
                return null;
            }
        }
        return null;
    }
    _formatRefreshCookieValue(refreshToken, updatedAt) {
        return JSON.stringify({
            refresh_token: refreshToken,
            updated_at_millis: updatedAt
        });
    }
    _formatAccessCookieValue(refreshToken, accessToken) {
        return refreshToken && accessToken ? JSON.stringify([
            refreshToken,
            accessToken
        ]) : null;
    }
    _parseStructuredRefreshCookie(value) {
        if (!value) return null;
        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJson"])(value);
        if (parsed.status !== "ok" || typeof parsed.data !== "object" || parsed.data === null) {
            console.warn("Failed to parse structured refresh cookie");
            return null;
        }
        const data = parsed.data;
        const refreshToken = "refresh_token" in data && typeof data.refresh_token === "string" ? data.refresh_token : null;
        const updatedAt = "updated_at_millis" in data && typeof data.updated_at_millis === "number" ? data.updated_at_millis : null;
        if (!refreshToken) {
            console.warn("Refresh token not found in structured refresh cookie");
            return null;
        }
        return {
            refreshToken,
            updatedAt
        };
    }
    _extractRefreshTokenFromCookieMap(cookies) {
        const { legacyNames, structuredPrefixes } = this._getRefreshTokenCookieNamePatterns();
        const currentStructuredPrefixes = [
            "".concat(this._refreshTokenCookieName, "--"),
            "__Host-".concat(this._refreshTokenCookieName, "--")
        ];
        const getNewestStructuredCookie = (prefixes)=>{
            let selected = null;
            for (const [name, value] of Object.entries(cookies)){
                if (!prefixes.some((prefix)=>name.startsWith(prefix))) continue;
                const parsed = this._parseStructuredRefreshCookie(value);
                if (!parsed) continue;
                var _parsed_updatedAt;
                const candidateUpdatedAt = (_parsed_updatedAt = parsed.updatedAt) !== null && _parsed_updatedAt !== void 0 ? _parsed_updatedAt : Number.NEGATIVE_INFINITY;
                var _selected_updatedAt;
                const selectedUpdatedAt = (_selected_updatedAt = selected === null || selected === void 0 ? void 0 : selected.updatedAt) !== null && _selected_updatedAt !== void 0 ? _selected_updatedAt : Number.NEGATIVE_INFINITY;
                if (!selected || candidateUpdatedAt > selectedUpdatedAt) selected = parsed;
            }
            return selected;
        };
        const currentStructuredCookie = getNewestStructuredCookie(currentStructuredPrefixes);
        var _currentStructuredCookie_updatedAt;
        if (currentStructuredCookie) return {
            refreshToken: currentStructuredCookie.refreshToken,
            updatedAt: (_currentStructuredCookie_updatedAt = currentStructuredCookie.updatedAt) !== null && _currentStructuredCookie_updatedAt !== void 0 ? _currentStructuredCookie_updatedAt : null
        };
        for (const name of legacyNames){
            const value = cookies[name];
            if (value) return {
                refreshToken: value,
                updatedAt: null
            };
        }
        const selected = getNewestStructuredCookie(structuredPrefixes);
        if (!selected) return {
            refreshToken: null,
            updatedAt: null
        };
        var _selected_updatedAt;
        return {
            refreshToken: selected.refreshToken,
            updatedAt: (_selected_updatedAt = selected.updatedAt) !== null && _selected_updatedAt !== void 0 ? _selected_updatedAt : null
        };
    }
    _getTokensFromCookies(cookies) {
        const { refreshToken } = this._extractRefreshTokenFromCookieMap(cookies);
        var _cookies_this__accessTokenCookieName, _ref;
        const accessTokenCookie = (_ref = (_cookies_this__accessTokenCookieName = cookies[this._accessTokenCookieName]) !== null && _cookies_this__accessTokenCookieName !== void 0 ? _cookies_this__accessTokenCookieName : cookies[this._legacyAccessTokenCookieName]) !== null && _ref !== void 0 ? _ref : null;
        let accessToken = null;
        if (accessTokenCookie && accessTokenCookie.startsWith("[\"")) {
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJson"])(accessTokenCookie);
            if (parsed.status === "ok" && typeof parsed.data === "object" && parsed.data !== null && Array.isArray(parsed.data) && parsed.data.length === 2 && typeof parsed.data[0] === "string" && typeof parsed.data[1] === "string") {
                if (parsed.data[0] === refreshToken) accessToken = parsed.data[1];
            } else console.warn("Access token cookie has invalid format");
        }
        return {
            refreshToken,
            accessToken
        };
    }
    get _accessTokenCookieName() {
        return "hexclave-access";
    }
    get _legacyAccessTokenCookieName() {
        return "stack-access";
    }
    _getAllBrowserCookies() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Cannot get browser cookies on the server!");
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$1$2e$1$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCookie"](document.cookie || "");
    }
    _getRefreshTokenCookieNamePatterns() {
        return {
            legacyNames: [
                this._legacyRefreshTokenCookieName,
                "stack-refresh"
            ],
            structuredPrefixes: [
                "".concat(this._refreshTokenCookieName, "--"),
                "__Host-".concat(this._refreshTokenCookieName, "--"),
                "".concat(this._legacyRefreshTokenCookieName, "--"),
                "__Host-".concat(this._legacyRefreshTokenCookieName, "--")
            ]
        };
    }
    _collectRefreshTokenCookieNames(cookies) {
        const { legacyNames, structuredPrefixes } = this._getRefreshTokenCookieNamePatterns();
        const names = /* @__PURE__ */ new Set();
        for (const name of legacyNames)if (cookies[name]) names.add(name);
        for (const name of Object.keys(cookies))if (structuredPrefixes.some((prefix)=>name.startsWith(prefix))) names.add(name);
        return names;
    }
    _prepareRefreshCookieUpdate(existingCookies, refreshToken, accessToken, defaultCookieName) {
        const cookieNames = this._collectRefreshTokenCookieNames(existingCookies);
        cookieNames.delete(defaultCookieName);
        const updatedAt = refreshToken ? Date.now() : null;
        return {
            updatedAt,
            refreshCookieValue: refreshToken && updatedAt !== null ? this._formatRefreshCookieValue(refreshToken, updatedAt) : null,
            accessTokenPayload: this._formatAccessCookieValue(refreshToken, accessToken),
            cookieNamesToDelete: [
                ...cookieNames
            ]
        };
    }
    _ensureCrossSubdomainCookieExists() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            const hostname = window.location.hostname;
            const domain = await this._trustedParentDomainCache.getOrWait([
                hostname
            ], "read-write");
            if (domain.status === "error" || !domain.data) return;
            const cookies = this._getAllBrowserCookies();
            const customCookieName = this._getCustomRefreshCookieName(domain.data);
            if (cookies[customCookieName]) return;
            const { refreshToken, updatedAt } = this._extractRefreshTokenFromCookieMap(cookies);
            if (refreshToken && updatedAt) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookieClient"])(customCookieName, this._formatRefreshCookieValue(refreshToken, updatedAt), {
                maxAge: 3600 * 24 * 365,
                domain: domain.data
            });
        });
    }
    _queueCustomRefreshCookieUpdate(refreshToken, updatedAt, context) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            this._mostRecentQueuedCookieRefreshIndex++;
            const updateIndex = this._mostRecentQueuedCookieRefreshIndex;
            let hostname;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) hostname = window.location.hostname;
            else hostname = await getServerRequestHost();
            if (!hostname) {
                console.warn("No hostname found when queueing custom refresh cookie update");
                return;
            }
            const domain = await this._trustedParentDomainCache.getOrWait([
                hostname
            ], "read-write");
            const cookieOptions = {
                maxAge: 3600 * 24 * 365,
                noOpIfServerComponent: true
            };
            const setCookie = async (targetDomain, value)=>{
                const name = this._getCustomRefreshCookieName(targetDomain);
                const options = {
                    ...cookieOptions,
                    domain: targetDomain
                };
                if (context === "browser") (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookieClient"])(name, value, options);
                else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookie"])(name, value, options);
            };
            if (domain.status === "error" || !domain.data || updateIndex !== this._mostRecentQueuedCookieRefreshIndex) return;
            const value = refreshToken && updatedAt ? this._formatRefreshCookieValue(refreshToken, updatedAt) : null;
            await setCookie(domain.data, value);
            const isSecure$1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSecure"])();
            const defaultName = this._getRefreshTokenDefaultCookieNameForSecure(isSecure$1);
            if (context === "browser") (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookieClient"])(defaultName, null, cookieOptions);
            else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookie"])(defaultName, null, cookieOptions);
        });
    }
    async _getTrustedRedirectConfig() {
        const project = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentProjectCache.getOrWait([], "write-only"));
        return {
            allowLocalhost: project.config.allow_localhost,
            trustedDomains: [
                ...project.config.domains.map((d)=>d.domain),
                new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostedHandlerUrl"])({
                    projectId: this.projectId,
                    pagePath: ""
                })).origin
            ]
        };
    }
    async _getTrustedParentDomain(currentDomain) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$redirect$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrustedParentDomain"])(currentDomain, (await this._getTrustedRedirectConfig()).trustedDomains);
    }
    _getBrowserCookieTokenStore() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) throw new Error("Cannot use cookie token store on the server!");
        if (this._storedBrowserCookieTokenStore === null) {
            const getCurrentValue = (old)=>{
                const tokens = this._getTokensFromCookies(this._getAllBrowserCookies());
                var _tokens_accessToken;
                return {
                    refreshToken: tokens.refreshToken,
                    accessToken: (_tokens_accessToken = tokens.accessToken) !== null && _tokens_accessToken !== void 0 ? _tokens_accessToken : (old === null || old === void 0 ? void 0 : old.refreshToken) === tokens.refreshToken ? old.accessToken : null
                };
            };
            this._storedBrowserCookieTokenStore = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"](getCurrentValue(null));
            let hasSucceededInWriting = true;
            setInterval(()=>{
                if (hasSucceededInWriting) {
                    const oldValue = this._storedBrowserCookieTokenStore.get();
                    const currentValue = getCurrentValue(oldValue);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepPlainEquals"])(currentValue, oldValue)) this._storedBrowserCookieTokenStore.set(currentValue);
                }
            }, 100);
            this._storedBrowserCookieTokenStore.onChange((value)=>{
                try {
                    const refreshToken = value.refreshToken;
                    const secure = window.location.protocol === "https:";
                    const defaultName = this._getRefreshTokenDefaultCookieNameForSecure(secure);
                    var _value_accessToken;
                    const { updatedAt, refreshCookieValue, accessTokenPayload, cookieNamesToDelete } = this._prepareRefreshCookieUpdate(this._getAllBrowserCookies(), refreshToken, (_value_accessToken = value.accessToken) !== null && _value_accessToken !== void 0 ? _value_accessToken : null, defaultName);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookieClient"])(defaultName, refreshCookieValue, {
                        maxAge: 3600 * 24 * 365,
                        secure
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookieClient"])(this._accessTokenCookieName, accessTokenPayload, {
                        maxAge: 3600 * 24
                    });
                    cookieNamesToDelete.forEach((name)=>{
                        const domain = this._getDomainFromCustomRefreshCookieName(name);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookieClient"])(name, domain ? {
                            domain
                        } : {});
                    });
                    this._queueCustomRefreshCookieUpdate(refreshToken, updatedAt, "browser");
                    hasSucceededInWriting = true;
                } catch (e) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) hasSucceededInWriting = false;
                    else throw e;
                }
            });
        }
        return this._storedBrowserCookieTokenStore;
    }
    _getOrCreateTokenStore(cookieHelper, overrideTokenStoreInit) {
        const tokenStoreInit = overrideTokenStoreInit === void 0 ? this._tokenStoreInit : overrideTokenStoreInit;
        switch(tokenStoreInit){
            case "cookie":
                return this._getBrowserCookieTokenStore();
            case "nextjs-cookie":
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return this._getBrowserCookieTokenStore();
                else {
                    const store = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"](this._getTokensFromCookies(cookieHelper.getAll()));
                    store.onChange((value)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
                            const refreshToken = value.refreshToken;
                            const secure = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSecure"])();
                            const defaultName = this._getRefreshTokenDefaultCookieNameForSecure(secure);
                            var _value_accessToken;
                            const { updatedAt, refreshCookieValue, accessTokenPayload, cookieNamesToDelete } = this._prepareRefreshCookieUpdate(cookieHelper.getAll(), refreshToken, (_value_accessToken = value.accessToken) !== null && _value_accessToken !== void 0 ? _value_accessToken : null, defaultName);
                            await Promise.all([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookie"])(defaultName, refreshCookieValue, {
                                    maxAge: 3600 * 24 * 365,
                                    noOpIfServerComponent: true
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOrDeleteCookie"])(this._accessTokenCookieName, accessTokenPayload, {
                                    maxAge: 3600 * 24,
                                    noOpIfServerComponent: true
                                })
                            ]);
                            if (cookieNamesToDelete.length > 0) await Promise.all(cookieNamesToDelete.map((name)=>{
                                const domain = this._getDomainFromCustomRefreshCookieName(name);
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"])(name, {
                                    noOpIfServerComponent: true,
                                    ...domain ? {
                                        domain
                                    } : {}
                                });
                            }));
                            this._queueCustomRefreshCookieUpdate(refreshToken, updatedAt, "server");
                        });
                    });
                    return store;
                }
            case "memory":
                return this._memoryTokenStore;
            default:
                if (tokenStoreInit === null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyTokenStore"])();
                else if (typeof tokenStoreInit === "object" && "headers" in tokenStoreInit) {
                    if (this._requestTokenStores.has(tokenStoreInit)) return this._requestTokenStores.get(tokenStoreInit);
                    const authorizationHeader = getHeaderValueFromRequestLikeHeaders(tokenStoreInit.headers, "authorization");
                    if (authorizationHeader) {
                        const authJson = getAuthJsonFromAuthorizationHeaderValue(authorizationHeader);
                        if (authJson != null) {
                            const tokenStore = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"]({
                                accessToken: authJson.accessToken,
                                refreshToken: authJson.refreshToken
                            });
                            this._requestTokenStores.set(tokenStoreInit, tokenStore);
                            return tokenStore;
                        }
                    }
                    const stackAuthHeader = getHeaderValueFromRequestLikeHeaders(tokenStoreInit.headers, "x-stack-auth");
                    if (stackAuthHeader) {
                        let parsed;
                        try {
                            parsed = JSON.parse(stackAuthHeader);
                            if (typeof parsed !== "object") throw new Error("x-stack-auth header must be a JSON object");
                            if (parsed === null) throw new Error("x-stack-auth header must not be null");
                        } catch (e) {
                            throw new Error("Invalid x-stack-auth header.", {
                                cause: e
                            });
                        }
                        var _parsed_accessToken, _parsed_refreshToken;
                        return this._getOrCreateTokenStore(cookieHelper, {
                            accessToken: (_parsed_accessToken = parsed.accessToken) !== null && _parsed_accessToken !== void 0 ? _parsed_accessToken : null,
                            refreshToken: (_parsed_refreshToken = parsed.refreshToken) !== null && _parsed_refreshToken !== void 0 ? _parsed_refreshToken : null
                        });
                    }
                    const cookieHeader = getHeaderValueFromRequestLikeHeaders(tokenStoreInit.headers, "cookie");
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$1$2e$1$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCookie"](cookieHeader || "");
                    const res = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"](this._getTokensFromCookies(parsed));
                    this._requestTokenStores.set(tokenStoreInit, res);
                    return res;
                } else if ("accessToken" in tokenStoreInit || "refreshToken" in tokenStoreInit) return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"]({
                    refreshToken: tokenStoreInit.refreshToken,
                    accessToken: tokenStoreInit.accessToken
                });
                throw new Error("Invalid token store ".concat(tokenStoreInit));
        }
    }
    _useTokenStore(overrideTokenStoreInit) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspendIfSsr"])();
        const cookieHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserCookieHelper"])();
        return this._getOrCreateTokenStore(cookieHelper, overrideTokenStoreInit);
    }
    _getSessionFromTokenStore(tokenStore) {
        var _this__sessionsByTokenStoreAndSessionKey_get;
        const tokenObj = tokenStore.get();
        const sessionKey = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalSession"].calculateSessionKey(tokenObj);
        const existing = sessionKey ? (_this__sessionsByTokenStoreAndSessionKey_get = this._sessionsByTokenStoreAndSessionKey.get(tokenStore)) === null || _this__sessionsByTokenStoreAndSessionKey_get === void 0 ? void 0 : _this__sessionsByTokenStoreAndSessionKey_get.get(sessionKey) : null;
        if (existing) return existing;
        const session = this._interface.createSession({
            refreshToken: tokenObj.refreshToken,
            accessToken: tokenObj.accessToken
        });
        session.onAccessTokenChange((newAccessToken)=>{
            tokenStore.update((old)=>{
                var _newAccessToken_token;
                return {
                    ...old,
                    accessToken: (_newAccessToken_token = newAccessToken === null || newAccessToken === void 0 ? void 0 : newAccessToken.token) !== null && _newAccessToken_token !== void 0 ? _newAccessToken_token : null
                };
            });
        });
        session.onInvalidate(()=>{
            tokenStore.update((old)=>({
                    ...old,
                    accessToken: null,
                    refreshToken: null
                }));
        });
        var _this__sessionsByTokenStoreAndSessionKey_get1;
        let sessionsBySessionKey = (_this__sessionsByTokenStoreAndSessionKey_get1 = this._sessionsByTokenStoreAndSessionKey.get(tokenStore)) !== null && _this__sessionsByTokenStoreAndSessionKey_get1 !== void 0 ? _this__sessionsByTokenStoreAndSessionKey_get1 : /* @__PURE__ */ new Map();
        this._sessionsByTokenStoreAndSessionKey.set(tokenStore, sessionsBySessionKey);
        sessionsBySessionKey.set(sessionKey, session);
        return session;
    }
    async _getSession(overrideTokenStoreInit, options) {
        await this._awaitPendingAuthResolutions(overrideTokenStoreInit, options);
        const tokenStore = this._getOrCreateTokenStore(await this._createCookieHelper(overrideTokenStoreInit), overrideTokenStoreInit);
        return this._getSessionFromTokenStore(tokenStore);
    }
    _useSession(overrideTokenStoreInit) {
        this._usePendingAuthResolutions(overrideTokenStoreInit);
        const tokenStore = this._useTokenStore(overrideTokenStoreInit);
        const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useCallback[subscribe]": (cb)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$refresh$2d$subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeSessionRefresh"])({
                    tokenStore,
                    getSession: {
                        "useCallback[subscribe]": ()=>this._getSessionFromTokenStore(tokenStore)
                    }["useCallback[subscribe]"],
                    onTokenStoreChange: cb
                });
            }
        }["useCallback[subscribe]"], [
            tokenStore
        ]);
        const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useCallback[getSnapshot]": ()=>this._getSessionFromTokenStore(tokenStore)
        }["useCallback[getSnapshot]"], [
            tokenStore
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    }
    async _signInToAccountWithTokens(tokens) {
        if (!("accessToken" in tokens) || !("refreshToken" in tokens)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid tokens object; can't sign in with this", {
            tokens
        });
        const tokenStore = this._getOrCreateTokenStore(await this._createCookieHelper());
        tokenStore.set(tokens);
        const newSession = this._getSessionFromTokenStore(tokenStore);
        this._currentUserCache.getOrWait([
            newSession
        ], "write-only").catch(()=>{});
    }
    _getTokenStoreInitForFreshTokens(tokens) {
        if (tokens.accessToken == null) return;
        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        };
    }
    _hasPersistentTokenStore(overrideTokenStoreInit) {
        return (overrideTokenStoreInit !== void 0 ? overrideTokenStoreInit : this._tokenStoreInit) !== null;
    }
    _ensurePersistentTokenStore(overrideTokenStoreInit) {
        if (!this._hasPersistentTokenStore(overrideTokenStoreInit)) throw new Error("Cannot call this function on a Stack app without a persistent token store. Make sure the tokenStore option on the constructor is set to a non-null value when initializing Stack.\n\nStack uses token stores to access access tokens of the current user. For example, on web frontends it is commonly the string value 'cookies' for cookie storage.");
    }
    _isInternalProject() {
        return this.projectId === "internal";
    }
    _ensureInternalProject() {
        if (!this._isInternalProject()) throw new Error("Cannot call this function on a Stack app with a project ID other than 'internal'.");
    }
    _clientProjectFromCrud(crud) {
        return {
            id: crud.id,
            displayName: crud.display_name,
            config: {
                signUpEnabled: crud.config.sign_up_enabled,
                credentialEnabled: crud.config.credential_enabled,
                magicLinkEnabled: crud.config.magic_link_enabled,
                passkeyEnabled: crud.config.passkey_enabled,
                clientTeamCreationEnabled: crud.config.client_team_creation_enabled,
                clientUserDeletionEnabled: crud.config.client_user_deletion_enabled,
                allowTeamApiKeys: crud.config.allow_team_api_keys,
                allowUserApiKeys: crud.config.allow_user_api_keys,
                oauthProviders: crud.config.enabled_oauth_providers.map((p)=>({
                        id: p.id
                    }))
            }
        };
    }
    _clientPermissionFromCrud(crud) {
        return {
            id: crud.id
        };
    }
    _clientTeamUserFromCrud(crud) {
        return {
            id: crud.user_id,
            teamProfile: {
                displayName: crud.display_name,
                profileImageUrl: crud.profile_image_url
            }
        };
    }
    _clientSentTeamInvitationFromCrud(session, crud) {
        return {
            id: crud.id,
            recipientEmail: crud.recipient_email,
            expiresAt: new Date(crud.expires_at_millis),
            revoke: async ()=>{
                await this._interface.revokeTeamInvitation(crud.id, crud.team_id, session);
                await this._teamInvitationsCache.refresh([
                    session,
                    crud.team_id
                ]);
            }
        };
    }
    _clientReceivedTeamInvitationFromCrud(session, crud) {
        const app = this;
        return {
            id: crud.id,
            teamId: crud.team_id,
            teamDisplayName: crud.team_display_name,
            recipientEmail: crud.recipient_email,
            expiresAt: new Date(crud.expires_at_millis),
            accept: async ()=>{
                await app._interface.acceptTeamInvitationById(crud.id, session);
                await Promise.all([
                    app._currentUserTeamInvitationsCache.refresh([
                        session
                    ]),
                    app._currentUserTeamsCache.refresh([
                        session
                    ]),
                    app._teamInvitationsCache.refresh([
                        session,
                        crud.team_id
                    ])
                ]);
            }
        };
    }
    _baseApiKeyFromCrud(crud) {
        return {
            id: crud.id,
            description: crud.description,
            expiresAt: crud.expires_at_millis ? new Date(crud.expires_at_millis) : void 0,
            manuallyRevokedAt: crud.manually_revoked_at_millis ? new Date(crud.manually_revoked_at_millis) : null,
            createdAt: new Date(crud.created_at_millis),
            ...crud.type === "team" ? {
                type: "team",
                teamId: crud.team_id
            } : {
                type: "user",
                userId: crud.user_id
            },
            value: typeof crud.value === "string" ? crud.value : {
                lastFour: crud.value.last_four
            },
            isValid: function() {
                return this.whyInvalid() === null;
            },
            whyInvalid: function() {
                if (this.manuallyRevokedAt) return "manually-revoked";
                if (this.expiresAt && this.expiresAt < /* @__PURE__ */ new Date()) return "expired";
                return null;
            }
        };
    }
    _clientApiKeyFromCrud(session, crud) {
        return {
            ...this._baseApiKeyFromCrud(crud),
            async revoke () {
                await this.update({
                    revoked: true
                });
            },
            update: async (options)=>{
                await this._interface.updateProjectApiKey(crud.type === "team" ? {
                    team_id: crud.team_id
                } : {
                    user_id: crud.user_id
                }, crud.id, options, session, "client");
                if (crud.type === "team") await this._teamApiKeysCache.refresh([
                    session,
                    crud.team_id
                ]);
                else await this._userApiKeysCache.refresh([
                    session
                ]);
            }
        };
    }
    _clientTeamFromCrud(crud, session) {
        const app = this;
        return {
            id: crud.id,
            displayName: crud.display_name,
            profileImageUrl: crud.profile_image_url,
            clientMetadata: crud.client_metadata,
            clientReadOnlyMetadata: crud.client_read_only_metadata,
            ...this._createCustomer(crud.id, "team", session),
            async inviteUser (options) {
                var _options_callbackUrl;
                await app._interface.sendTeamInvitation({
                    teamId: crud.id,
                    email: options.email,
                    session,
                    callbackUrl: (_options_callbackUrl = options.callbackUrl) !== null && _options_callbackUrl !== void 0 ? _options_callbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(app.urls.teamInvitation, "callbackUrl")
                });
                await app._teamInvitationsCache.refresh([
                    session,
                    crud.id
                ]);
            },
            async listUsers () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._teamMemberProfilesCache.getOrWait([
                    session,
                    crud.id
                ], "write-only")).map((crud)=>app._clientTeamUserFromCrud(crud));
            },
            useUsers () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._teamMemberProfilesCache, [
                    session,
                    crud.id
                ], "team.useUsers()").map((crud)=>app._clientTeamUserFromCrud(crud));
            },
            async listInvitations () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._teamInvitationsCache.getOrWait([
                    session,
                    crud.id
                ], "write-only")).map((crud)=>app._clientSentTeamInvitationFromCrud(session, crud));
            },
            useInvitations () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._teamInvitationsCache, [
                    session,
                    crud.id
                ], "team.useInvitations()").map((crud)=>app._clientSentTeamInvitationFromCrud(session, crud));
            },
            async update (data) {
                await app._interface.updateTeam({
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamUpdateOptionsToCrud"])(data),
                    teamId: crud.id
                }, session);
                await app._currentUserTeamsCache.refresh([
                    session
                ]);
            },
            async delete () {
                await app._interface.deleteTeam(crud.id, session);
                await app._currentUserTeamsCache.refresh([
                    session
                ]);
            },
            useApiKeys () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._teamApiKeysCache, [
                    session,
                    crud.id
                ], "team.useApiKeys()").map((crud)=>app._clientApiKeyFromCrud(session, crud));
            },
            async listApiKeys () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._teamApiKeysCache.getOrWait([
                    session,
                    crud.id
                ], "write-only")).map((crud)=>app._clientApiKeyFromCrud(session, crud));
            },
            async createApiKey (options) {
                const result = await app._interface.createProjectApiKey(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiKeyCreationOptionsToCrud"])("team", crud.id, options), session, "client");
                await app._teamApiKeysCache.refresh([
                    session,
                    crud.id
                ]);
                return app._clientApiKeyFromCrud(session, result);
            }
        };
    }
    _clientContactChannelFromCrud(crud, session) {
        const app = this;
        return {
            id: crud.id,
            value: crud.value,
            type: crud.type,
            isVerified: crud.is_verified,
            isPrimary: crud.is_primary,
            usedForAuth: crud.used_for_auth,
            async sendVerificationEmail (options) {
                await app._interface.sendCurrentUserContactChannelVerificationEmail(crud.id, (options === null || options === void 0 ? void 0 : options.callbackUrl) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(app.urls.emailVerification, "callbackUrl"), session);
            },
            async update (data) {
                await app._interface.updateClientContactChannel(crud.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$contact$2d$channels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactChannelUpdateOptionsToCrud"])(data), session);
                await app._clientContactChannelsCache.refresh([
                    session
                ]);
            },
            async delete () {
                await app._interface.deleteClientContactChannel(crud.id, session);
                await app._clientContactChannelsCache.refresh([
                    session
                ]);
            }
        };
    }
    _clientNotificationCategoryFromCrud(crud, session) {
        const app = this;
        return {
            id: crud.notification_category_id,
            name: crud.notification_category_name,
            enabled: crud.enabled,
            canDisable: crud.can_disable,
            async setEnabled (enabled) {
                await app._interface.setNotificationsEnabled(crud.notification_category_id, enabled, session);
                await app._notificationCategoriesCache.refresh([
                    session
                ]);
            }
        };
    }
    _clientOAuthProviderFromCrud(crud, session) {
        const app = this;
        return {
            id: crud.id,
            type: crud.type,
            userId: crud.user_id,
            email: crud.email,
            allowSignIn: crud.allow_sign_in,
            allowConnectedAccounts: crud.allow_connected_accounts,
            async update (data) {
                try {
                    await app._interface.updateOAuthProvider(crud.user_id, crud.id, {
                        allow_sign_in: data.allowSignIn,
                        allow_connected_accounts: data.allowConnectedAccounts
                    }, session);
                    await Promise.all([
                        app._currentUserOAuthProvidersCache.refresh([
                            session
                        ]),
                        app._currentUserConnectedAccountsCache.refresh([
                            session
                        ])
                    ]);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
                } catch (error) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthProviderAccountIdAlreadyUsedForSignIn.isInstance(error)) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(error);
                    throw error;
                }
            },
            async delete () {
                await app._interface.deleteOAuthProvider(crud.user_id, crud.id, session);
                await Promise.all([
                    app._currentUserOAuthProvidersCache.refresh([
                        session
                    ]),
                    app._currentUserConnectedAccountsCache.refresh([
                        session
                    ])
                ]);
            }
        };
    }
    _clientItemFromCrud(crud) {
        return {
            displayName: crud.display_name,
            quantity: crud.quantity,
            nonNegativeQuantity: Math.max(0, crud.quantity)
        };
    }
    _customerProductsFromResponse(response) {
        const products = response.items.map((item)=>{
            var _item_switch_options;
            return {
                id: item.id,
                quantity: item.quantity,
                displayName: item.product.display_name,
                customerType: item.product.customer_type,
                isServerOnly: item.product.server_only,
                stackable: item.product.stackable,
                type: item.type,
                subscription: item.subscription ? {
                    subscriptionId: item.subscription.subscription_id,
                    currentPeriodEnd: item.subscription.current_period_end ? new Date(item.subscription.current_period_end) : null,
                    cancelAtPeriodEnd: item.subscription.cancel_at_period_end,
                    isCancelable: item.subscription.is_cancelable
                } : null,
                switchOptions: (_item_switch_options = item.switch_options) === null || _item_switch_options === void 0 ? void 0 : _item_switch_options.map((option)=>({
                        productId: option.product_id,
                        displayName: option.product.display_name,
                        prices: option.product.prices
                    }))
            };
        });
        var _response_pagination_next_cursor;
        return Object.assign(products, {
            nextCursor: (_response_pagination_next_cursor = response.pagination.next_cursor) !== null && _response_pagination_next_cursor !== void 0 ? _response_pagination_next_cursor : null
        });
    }
    _customerInvoicesFromResponse(response) {
        const invoices = response.items.map((item)=>({
                status: item.status,
                amountTotal: item.amount_total,
                hostedInvoiceUrl: item.hosted_invoice_url,
                createdAt: new Date(item.created_at_millis)
            }));
        var _response_pagination_next_cursor;
        return Object.assign(invoices, {
            nextCursor: (_response_pagination_next_cursor = response.pagination.next_cursor) !== null && _response_pagination_next_cursor !== void 0 ? _response_pagination_next_cursor : null
        });
    }
    _customerBillingFromResponse(response) {
        return {
            hasCustomer: response.has_customer,
            defaultPaymentMethod: response.default_payment_method
        };
    }
    _createAuth(session) {
        const app = this;
        return {
            _internalSession: session,
            currentSession: {
                async getTokens () {
                    var _tokens_refreshToken;
                    const tokens = await session.getOrFetchLikelyValidTokens(2e4, 75e3);
                    var _tokens_accessToken_token, _tokens_refreshToken_token;
                    return {
                        accessToken: (_tokens_accessToken_token = tokens === null || tokens === void 0 ? void 0 : tokens.accessToken.token) !== null && _tokens_accessToken_token !== void 0 ? _tokens_accessToken_token : null,
                        refreshToken: (_tokens_refreshToken_token = tokens === null || tokens === void 0 ? void 0 : (_tokens_refreshToken = tokens.refreshToken) === null || _tokens_refreshToken === void 0 ? void 0 : _tokens_refreshToken.token) !== null && _tokens_refreshToken_token !== void 0 ? _tokens_refreshToken_token : null
                    };
                },
                useTokens () {
                    var _use, _session_getRefreshToken;
                    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                        "useCallback[subscribe]": (cb)=>{
                            const { unsubscribe: unsubscribeInvalidate } = session.onInvalidate(cb);
                            const { unsubscribe: unsubscribeAccessTokenChange } = session.onAccessTokenChange(cb);
                            return ({
                                "useCallback[subscribe]": ()=>{
                                    unsubscribeInvalidate();
                                    unsubscribeAccessTokenChange();
                                }
                            })["useCallback[subscribe]"];
                        }
                    }["useCallback[subscribe]"], [
                        session
                    ]);
                    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                        "useCallback[getSnapshot]": ()=>{
                            var _session_getAccessTokenIfNotExpiredYet;
                            var _session_getAccessTokenIfNotExpiredYet_token;
                            return session.isKnownToBeInvalid() ? null : (_session_getAccessTokenIfNotExpiredYet_token = (_session_getAccessTokenIfNotExpiredYet = session.getAccessTokenIfNotExpiredYet(2e4, 75e3)) === null || _session_getAccessTokenIfNotExpiredYet === void 0 ? void 0 : _session_getAccessTokenIfNotExpiredYet.token) !== null && _session_getAccessTokenIfNotExpiredYet_token !== void 0 ? _session_getAccessTokenIfNotExpiredYet_token : null;
                        }
                    }["useCallback[getSnapshot]"], [
                        session
                    ]);
                    let accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
                    var _use_accessToken_token;
                    if (accessToken === null && !session.isKnownToBeInvalid()) accessToken = (_use_accessToken_token = (_use = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(session.getOrFetchLikelyValidTokens(2e4, 75e3))) === null || _use === void 0 ? void 0 : _use.accessToken.token) !== null && _use_accessToken_token !== void 0 ? _use_accessToken_token : null;
                    var _session_getRefreshToken_token;
                    return {
                        accessToken,
                        refreshToken: (_session_getRefreshToken_token = (_session_getRefreshToken = session.getRefreshToken()) === null || _session_getRefreshToken === void 0 ? void 0 : _session_getRefreshToken.token) !== null && _session_getRefreshToken_token !== void 0 ? _session_getRefreshToken_token : null
                    };
                }
            },
            async getAccessToken () {
                return (await this.currentSession.getTokens()).accessToken;
            },
            useAccessToken () {
                return this.currentSession.useTokens().accessToken;
            },
            async getRefreshToken () {
                return (await this.currentSession.getTokens()).refreshToken;
            },
            useRefreshToken () {
                return this.currentSession.useTokens().refreshToken;
            },
            async getAuthorizationHeader () {
                return getAuthorizationHeaderValueFromAuthJson(await this.getAuthJson());
            },
            useAuthorizationHeader () {
                return getAuthorizationHeaderValueFromAuthJson(this.useAuthJson());
            },
            async getAuthHeaders () {
                return {
                    "x-stack-auth": JSON.stringify(await this.getAuthJson())
                };
            },
            useAuthHeaders () {
                return {
                    "x-stack-auth": JSON.stringify(this.useAuthJson())
                };
            },
            async getAuthJson () {
                return await this.currentSession.getTokens();
            },
            useAuthJson () {
                return this.currentSession.useTokens();
            },
            signOut (options) {
                return app._signOut(session, options);
            }
        };
    }
    _editableTeamProfileFromCrud(crud, session) {
        const app = this;
        return {
            displayName: crud.display_name,
            profileImageUrl: crud.profile_image_url,
            async update (update) {
                await app._interface.updateTeamMemberProfile({
                    teamId: crud.team_id,
                    userId: crud.user_id,
                    profile: {
                        display_name: update.displayName,
                        profile_image_url: update.profileImageUrl
                    }
                }, session);
                await app._currentUserTeamProfileCache.refresh([
                    session,
                    crud.team_id
                ]);
            }
        };
    }
    _createBaseUser(crud) {
        return {
            id: crud.id,
            displayName: crud.display_name,
            primaryEmail: crud.primary_email,
            primaryEmailVerified: crud.primary_email_verified,
            profileImageUrl: crud.profile_image_url,
            signedUpAt: new Date(crud.signed_up_at_millis),
            clientMetadata: crud.client_metadata,
            clientReadOnlyMetadata: crud.client_read_only_metadata,
            hasPassword: crud.has_password,
            emailAuthEnabled: crud.auth_with_email,
            otpAuthEnabled: crud.otp_auth_enabled,
            oauthProviders: crud.oauth_providers,
            passkeyAuthEnabled: crud.passkey_auth_enabled,
            isMultiFactorRequired: crud.requires_totp_mfa,
            isAnonymous: crud.is_anonymous,
            isRestricted: crud.is_restricted,
            restrictedReason: crud.restricted_reason,
            toClientJson () {
                return crud;
            }
        };
    }
    _createUserExtraFromCurrent(crud, session) {
        const app = this;
        async function getConnectedAccount(idOrAccount, options) {
            var _options_scopes;
            var _options_scopes_join;
            const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
            if (typeof idOrAccount === "object" && "provider" in idOrAccount && "providerAccountId" in idOrAccount) {
                const { provider, providerAccountId } = idOrAccount;
                const found = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserConnectedAccountsCache.getOrWait([
                    session
                ], "write-only")).find((a)=>a.provider === provider && a.providerAccountId === providerAccountId);
                if (!found) return null;
                return found;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserOAuthConnectionCache.getOrWait([
                session,
                idOrAccount,
                scopeString,
                (options === null || options === void 0 ? void 0 : options.or) === "redirect"
            ], "write-only"));
        }
        function useConnectedAccount(idOrAccount, options) {
            var _options_scopes;
            var _options_scopes_join;
            const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
            if (typeof idOrAccount === "object" && "provider" in idOrAccount && "providerAccountId" in idOrAccount) {
                const { provider, providerAccountId } = idOrAccount;
                var _useAsyncCache_find;
                return (_useAsyncCache_find = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserConnectedAccountsCache, [
                    session
                ], "user.useConnectedAccount()").find((a)=>a.provider === provider && a.providerAccountId === providerAccountId)) !== null && _useAsyncCache_find !== void 0 ? _useAsyncCache_find : null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserOAuthConnectionCache, [
                session,
                idOrAccount,
                scopeString,
                (options === null || options === void 0 ? void 0 : options.or) === "redirect"
            ], "user.useConnectedAccount()");
        }
        return {
            async getActiveSessions () {
                return (await app._interface.listSessions(session)).items.map((crud)=>app._clientSessionFromCrud(crud));
            },
            async revokeSession (sessionId) {
                await app._interface.deleteSession(sessionId, session);
            },
            setDisplayName (displayName) {
                return this.update({
                    displayName
                });
            },
            setClientMetadata (metadata) {
                return this.update({
                    clientMetadata: metadata
                });
            },
            async setSelectedTeam (team) {
                var _team_id;
                await this.update({
                    selectedTeamId: typeof team === "string" ? team : (_team_id = team === null || team === void 0 ? void 0 : team.id) !== null && _team_id !== void 0 ? _team_id : null
                });
            },
            getConnectedAccount,
            useConnectedAccount,
            async listConnectedAccounts () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserConnectedAccountsCache.getOrWait([
                    session
                ], "write-only"));
            },
            useConnectedAccounts () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserConnectedAccountsCache, [
                    session
                ], "user.useConnectedAccounts()");
            },
            async linkConnectedAccount (provider, options) {
                var _options_scopes;
                var _options_scopes_join;
                const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
                var _app__oauthScopesOnSignIn_provider;
                const location = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNewOAuthProviderOrScopeUrl"])(app._interface, {
                    provider,
                    redirectUrl: app._getOAuthCallbackRedirectUri(),
                    errorRedirectUrl: app.urls.error,
                    providerScope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeStrings"])(scopeString, ((_app__oauthScopesOnSignIn_provider = app._oauthScopesOnSignIn[provider]) !== null && _app__oauthScopesOnSignIn_provider !== void 0 ? _app__oauthScopesOnSignIn_provider : []).join(" "))
                }, session);
                await app._redirectTo({
                    url: location
                });
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neverResolve"])();
            },
            async getOrLinkConnectedAccount (provider, options) {
                const matchingAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserConnectedAccountsCache.getOrWait([
                    session
                ], "write-only")).filter((a)=>a.provider === provider);
                for (const account of matchingAccounts)if ((await account.getAccessToken({
                    scopes: options === null || options === void 0 ? void 0 : options.scopes
                })).status === "ok") return account;
                await this.linkConnectedAccount(provider, options);
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neverResolve"])();
            },
            useOrLinkConnectedAccount (provider, options) {
                var _options_scopes;
                var _options_scopes_join;
                const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserValidConnectedAccountForProviderCache, [
                    session,
                    provider,
                    scopeString
                ], "user.useOrLinkConnectedAccount()");
            },
            async getTeam (teamId) {
                var _find;
                return (_find = (await this.listTeams()).find((t)=>t.id === teamId)) !== null && _find !== void 0 ? _find : null;
            },
            useTeam (teamId) {
                const teams = this.useTeams();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                    var _teams_find;
                    return (_teams_find = teams.find((t)=>t.id === teamId)) !== null && _teams_find !== void 0 ? _teams_find : null;
                }, [
                    teams,
                    teamId
                ]);
            },
            async listTeams () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserTeamsCache.getOrWait([
                    session
                ], "write-only")).map((crud)=>app._clientTeamFromCrud(crud, session));
            },
            useTeams () {
                const teams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserTeamsCache, [
                    session
                ], "user.useTeams()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>teams.map((crud)=>app._clientTeamFromCrud(crud, session)), [
                    teams
                ]);
            },
            async createTeam (data) {
                const crud = await app._interface.createClientTeam((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamCreateOptionsToCrud"])(data, "me"), session);
                await app._currentUserTeamsCache.refresh([
                    session
                ]);
                await this.update({
                    selectedTeamId: crud.id
                });
                return app._clientTeamFromCrud(crud, session);
            },
            async leaveTeam (team) {
                await app._interface.leaveTeam(team.id, session);
            },
            async listTeamInvitations () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserTeamInvitationsCache.getOrWait([
                    session
                ], "write-only")).map((crud)=>app._clientReceivedTeamInvitationFromCrud(session, crud));
            },
            useTeamInvitations () {
                const invitations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserTeamInvitationsCache, [
                    session
                ], "user.useTeamInvitations()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>invitations.map((crud)=>app._clientReceivedTeamInvitationFromCrud(session, crud)), [
                    invitations
                ]);
            },
            async listPermissions (scopeOrOptions, options) {
                if (scopeOrOptions && "id" in scopeOrOptions) {
                    const scope = scopeOrOptions;
                    var _options_recursive;
                    const recursive = (_options_recursive = options === null || options === void 0 ? void 0 : options.recursive) !== null && _options_recursive !== void 0 ? _options_recursive : true;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserPermissionsCache.getOrWait([
                        session,
                        scope.id,
                        recursive
                    ], "write-only")).map((crud)=>app._clientPermissionFromCrud(crud));
                } else {
                    var _scopeOrOptions_recursive;
                    const recursive = (_scopeOrOptions_recursive = scopeOrOptions === null || scopeOrOptions === void 0 ? void 0 : scopeOrOptions.recursive) !== null && _scopeOrOptions_recursive !== void 0 ? _scopeOrOptions_recursive : true;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserProjectPermissionsCache.getOrWait([
                        session,
                        recursive
                    ], "write-only")).map((crud)=>app._clientPermissionFromCrud(crud));
                }
            },
            usePermissions (scopeOrOptions, options) {
                if (scopeOrOptions && "id" in scopeOrOptions) {
                    const scope = scopeOrOptions;
                    var _options_recursive;
                    const recursive = (_options_recursive = options === null || options === void 0 ? void 0 : options.recursive) !== null && _options_recursive !== void 0 ? _options_recursive : true;
                    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserPermissionsCache, [
                        session,
                        scope.id,
                        recursive
                    ], "user.usePermissions()");
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>permissions.map((crud)=>app._clientPermissionFromCrud(crud)), [
                        permissions
                    ]);
                } else {
                    var _scopeOrOptions_recursive;
                    const recursive = (_scopeOrOptions_recursive = scopeOrOptions === null || scopeOrOptions === void 0 ? void 0 : scopeOrOptions.recursive) !== null && _scopeOrOptions_recursive !== void 0 ? _scopeOrOptions_recursive : true;
                    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserProjectPermissionsCache, [
                        session,
                        recursive
                    ], "user.usePermissions()");
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>permissions.map((crud)=>app._clientPermissionFromCrud(crud)), [
                        permissions
                    ]);
                }
            },
            usePermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string") {
                    const scope = scopeOrPermissionId;
                    const permissions = this.usePermissions(scope);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                        var _permissions_find;
                        return (_permissions_find = permissions.find((p)=>p.id === permissionId)) !== null && _permissions_find !== void 0 ? _permissions_find : null;
                    }, [
                        permissions,
                        permissionId
                    ]);
                } else {
                    const pid = scopeOrPermissionId;
                    const permissions = this.usePermissions();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                        var _permissions_find;
                        return (_permissions_find = permissions.find((p)=>p.id === pid)) !== null && _permissions_find !== void 0 ? _permissions_find : null;
                    }, [
                        permissions,
                        pid
                    ]);
                }
            },
            async getPermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string") {
                    const scope = scopeOrPermissionId;
                    var _find;
                    return (_find = (await this.listPermissions(scope)).find((p)=>p.id === permissionId)) !== null && _find !== void 0 ? _find : null;
                } else {
                    const pid = scopeOrPermissionId;
                    var _find1;
                    return (_find1 = (await this.listPermissions()).find((p)=>p.id === pid)) !== null && _find1 !== void 0 ? _find1 : null;
                }
            },
            async hasPermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string") {
                    const scope = scopeOrPermissionId;
                    return await this.getPermission(scope, permissionId) !== null;
                } else {
                    const pid = scopeOrPermissionId;
                    return await this.getPermission(pid) !== null;
                }
            },
            async update (update) {
                return await app._updateClientUser(update, session);
            },
            async sendVerificationEmail (options) {
                if (!crud.primary_email) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("User does not have a primary email");
                var _options_callbackUrl;
                return await app._interface.sendVerificationEmail(crud.primary_email, (_options_callbackUrl = options === null || options === void 0 ? void 0 : options.callbackUrl) !== null && _options_callbackUrl !== void 0 ? _options_callbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(app.urls.emailVerification, "callbackUrl"), session);
            },
            async updatePassword (options) {
                const result = await app._interface.updatePassword(options, session);
                await app._currentUserCache.refresh([
                    session
                ]);
                return result;
            },
            async setPassword (options) {
                const result = await app._interface.setPassword(options, session);
                await app._currentUserCache.refresh([
                    session
                ]);
                return result;
            },
            selectedTeam: crud.selected_team && this._clientTeamFromCrud(crud.selected_team, session),
            async getTeamProfile (team) {
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserTeamProfileCache.getOrWait([
                    session,
                    team.id
                ], "write-only"));
                return app._editableTeamProfileFromCrud(result, session);
            },
            useTeamProfile (team) {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserTeamProfileCache, [
                    session,
                    team.id
                ], "user.useTeamProfile()");
                return app._editableTeamProfileFromCrud(result, session);
            },
            async delete () {
                await app._interface.deleteCurrentUser(session);
                session.markInvalid();
            },
            async listContactChannels () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._clientContactChannelsCache.getOrWait([
                    session
                ], "write-only")).map((crud)=>app._clientContactChannelFromCrud(crud, session));
            },
            useContactChannels () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._clientContactChannelsCache, [
                    session
                ], "user.useContactChannels()").map((crud)=>app._clientContactChannelFromCrud(crud, session));
            },
            async createContactChannel (data) {
                const crud = await app._interface.createClientContactChannel((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$contact$2d$channels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactChannelCreateOptionsToCrud"])("me", data), session);
                await app._clientContactChannelsCache.refresh([
                    session
                ]);
                return app._clientContactChannelFromCrud(crud, session);
            },
            useNotificationCategories () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._notificationCategoriesCache, [
                    session
                ], "user.useNotificationCategories()").map((crud)=>app._clientNotificationCategoryFromCrud(crud, session));
            },
            async listNotificationCategories () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._notificationCategoriesCache.getOrWait([
                    session
                ], "write-only")).map((crud)=>app._clientNotificationCategoryFromCrud(crud, session));
            },
            useApiKeys () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._userApiKeysCache, [
                    session
                ], "user.useApiKeys()").map((crud)=>app._clientApiKeyFromCrud(session, crud));
            },
            async listApiKeys () {
                return (await app._interface.listProjectApiKeys({
                    user_id: "me"
                }, session, "client")).map((crud)=>app._clientApiKeyFromCrud(session, crud));
            },
            async createApiKey (options) {
                const result = await app._interface.createProjectApiKey(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiKeyCreationOptionsToCrud"])("user", "me", options), session, "client");
                await app._userApiKeysCache.refresh([
                    session
                ]);
                return app._clientApiKeyFromCrud(session, result);
            },
            useOAuthProviders () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._currentUserOAuthProvidersCache, [
                    session
                ], "user.useOAuthProviders()").map((crud)=>app._clientOAuthProviderFromCrud(crud, session));
            },
            async listOAuthProviders () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._currentUserOAuthProvidersCache.getOrWait([
                    session
                ], "write-only")).map((crud)=>app._clientOAuthProviderFromCrud(crud, session));
            },
            useOAuthProvider (id) {
                const providers = this.useOAuthProviders();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                    var _providers_find;
                    return (_providers_find = providers.find((p)=>p.id === id)) !== null && _providers_find !== void 0 ? _providers_find : null;
                }, [
                    providers,
                    id
                ]);
            },
            async getOAuthProvider (id) {
                var _find;
                return (_find = (await this.listOAuthProviders()).find((p)=>p.id === id)) !== null && _find !== void 0 ? _find : null;
            },
            async registerPasskey (options) {
                var _this;
                const hostname = (_this = await app._getCurrentUrl()) === null || _this === void 0 ? void 0 : _this.hostname;
                if (!hostname) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("hostname must be provided if the Stack App does not have a redirect method");
                const initiationResult = await app._interface.initiatePasskeyRegistration({}, session);
                if (initiationResult.status !== "ok") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyRegistrationFailed("Failed to get initiation options for passkey registration"));
                const { options_json, code } = initiationResult.data;
                if (options_json.rp.id !== "THIS_VALUE_WILL_BE_REPLACED.example.com") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Expected returned RP ID from server to equal sentinel, but found ".concat(options_json.rp.id));
                options_json.rp.id = hostname;
                let attResp;
                try {
                    attResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startRegistration"])({
                        optionsJSON: options_json
                    });
                } catch (error) {
                    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$webAuthnError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebAuthnError"]) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyWebAuthnError(error.message, error.name));
                    else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("passkey-registration-failed", error);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyRegistrationFailed("Failed to start passkey registration due to unknown error"));
                    }
                }
                const registrationResult = await app._interface.registerPasskey({
                    credential: attResp,
                    code
                }, session);
                await app._refreshUser(session);
                return registrationResult;
            }
        };
    }
    _createInternalUserExtra(session) {
        const app = this;
        this._ensureInternalProject();
        return {
            createProject (newProject) {
                return app._createProject(session, newProject);
            },
            async transferProject (projectIdToTransfer, newTeamId) {
                await app._interface.transferProject(session, projectIdToTransfer, newTeamId);
                await app._refreshProject();
            },
            listOwnedProjects () {
                return app._listOwnedProjects(session);
            },
            useOwnedProjects () {
                return app._useOwnedProjects(session);
            }
        };
    }
    _createCustomer(userIdOrTeamId, type, session) {
        const app = this;
        const effectiveSession = session !== null && session !== void 0 ? session : app._interface.createSession({
            refreshToken: null
        });
        const customerOptions = type === "user" ? {
            userId: userIdOrTeamId
        } : {
            teamId: userIdOrTeamId
        };
        return {
            async getBilling () {
                const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._customerBillingCache.getOrWait([
                    effectiveSession,
                    type,
                    userIdOrTeamId
                ], "write-only"));
                return app._customerBillingFromResponse(response);
            },
            useBilling () {
                const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._customerBillingCache, [
                    effectiveSession,
                    type,
                    userIdOrTeamId
                ], "customer.useBilling()");
                return app._customerBillingFromResponse(response);
            },
            async createPaymentMethodSetupIntent () {
                const body = await app._interface.createCustomerPaymentMethodSetupIntent(type, userIdOrTeamId, effectiveSession);
                return {
                    clientSecret: body.client_secret,
                    stripeAccountId: body.stripe_account_id
                };
            },
            async setDefaultPaymentMethodFromSetupIntent (setupIntentId) {
                const body = await app._interface.setDefaultCustomerPaymentMethodFromSetupIntent(type, userIdOrTeamId, setupIntentId, effectiveSession);
                await app._customerBillingCache.refresh([
                    effectiveSession,
                    type,
                    userIdOrTeamId
                ]);
                return body.default_payment_method;
            },
            async getItem (itemId) {
                return await app.getItem({
                    itemId,
                    ...customerOptions
                });
            },
            useItem (itemId) {
                return app.useItem({
                    itemId,
                    ...customerOptions
                });
            },
            async listProducts (options) {
                return await app.listProducts({
                    ...options,
                    ...customerOptions
                });
            },
            useProducts (options) {
                return app.useProducts({
                    ...options,
                    ...customerOptions
                });
            },
            async listInvoices (options) {
                return await app.listInvoices({
                    ...options,
                    ...customerOptions
                });
            },
            useInvoices (options) {
                return app.useInvoices({
                    ...options,
                    ...customerOptions
                });
            },
            async createCheckoutUrl (options) {
                return await app._interface.createCheckoutUrl(type, userIdOrTeamId, options.productId, effectiveSession, options.returnUrl, "client");
            },
            async switchSubscription (options) {
                await app._interface.switchSubscription({
                    customer_type: type,
                    customer_id: userIdOrTeamId,
                    from_product_id: options.fromProductId,
                    to_product_id: options.toProductId,
                    price_id: options.priceId,
                    quantity: options.quantity
                }, effectiveSession);
                await app._customerBillingCache.refresh([
                    effectiveSession,
                    type,
                    userIdOrTeamId
                ]);
                if (type === "user") await app._userProductsCache.invalidateWhere((param)=>{
                    let [cachedSession, userId] = param;
                    return cachedSession === effectiveSession && userId === userIdOrTeamId;
                });
                else await app._teamProductsCache.invalidateWhere((param)=>{
                    let [cachedSession, teamId] = param;
                    return cachedSession === effectiveSession && teamId === userIdOrTeamId;
                });
            }
        };
    }
    async getItem(options) {
        const session = await this._getSession();
        let crud;
        if ("userId" in options) crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._userItemCache.getOrWait([
            session,
            options.userId,
            options.itemId
        ], "write-only"));
        else if ("teamId" in options) crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._teamItemCache.getOrWait([
            session,
            options.teamId,
            options.itemId
        ], "write-only"));
        else crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._customItemCache.getOrWait([
            session,
            options.customCustomerId,
            options.itemId
        ], "write-only"));
        return this._clientItemFromCrud(crud);
    }
    useItem(options) {
        const session = this._useSession();
        const [cache, ownerId] = "userId" in options ? [
            this._userItemCache,
            options.userId
        ] : "teamId" in options ? [
            this._teamItemCache,
            options.teamId
        ] : [
            this._customItemCache,
            options.customCustomerId
        ];
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(cache, [
            session,
            ownerId,
            options.itemId
        ], "app.useItem()");
        return this._clientItemFromCrud(crud);
    }
    async listProducts(options) {
        var _this;
        var __internalSession;
        const session = (__internalSession = (_this = await this.getUser()) === null || _this === void 0 ? void 0 : _this._internalSession) !== null && __internalSession !== void 0 ? __internalSession : await this._getSession();
        if ("userId" in options) {
            var _options_cursor, _options_limit;
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._userProductsCache.getOrWait([
                session,
                options.userId,
                (_options_cursor = options.cursor) !== null && _options_cursor !== void 0 ? _options_cursor : null,
                (_options_limit = options.limit) !== null && _options_limit !== void 0 ? _options_limit : null
            ], "write-only"));
            return this._customerProductsFromResponse(response);
        } else if ("teamId" in options) {
            var _options_cursor1, _options_limit1;
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._teamProductsCache.getOrWait([
                session,
                options.teamId,
                (_options_cursor1 = options.cursor) !== null && _options_cursor1 !== void 0 ? _options_cursor1 : null,
                (_options_limit1 = options.limit) !== null && _options_limit1 !== void 0 ? _options_limit1 : null
            ], "write-only"));
            return this._customerProductsFromResponse(response);
        }
        var _options_cursor2, _options_limit2;
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._customProductsCache.getOrWait([
            session,
            options.customCustomerId,
            (_options_cursor2 = options.cursor) !== null && _options_cursor2 !== void 0 ? _options_cursor2 : null,
            (_options_limit2 = options.limit) !== null && _options_limit2 !== void 0 ? _options_limit2 : null
        ], "write-only"));
        return this._customerProductsFromResponse(response);
    }
    async listInvoices(options) {
        const session = await this._getSession();
        if ("userId" in options) {
            var _options_cursor, _options_limit;
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._userInvoicesCache.getOrWait([
                session,
                options.userId,
                (_options_cursor = options.cursor) !== null && _options_cursor !== void 0 ? _options_cursor : null,
                (_options_limit = options.limit) !== null && _options_limit !== void 0 ? _options_limit : null
            ], "write-only"));
            return this._customerInvoicesFromResponse(response);
        }
        var _options_cursor1, _options_limit1;
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._teamInvoicesCache.getOrWait([
            session,
            options.teamId,
            (_options_cursor1 = options.cursor) !== null && _options_cursor1 !== void 0 ? _options_cursor1 : null,
            (_options_limit1 = options.limit) !== null && _options_limit1 !== void 0 ? _options_limit1 : null
        ], "write-only"));
        return this._customerInvoicesFromResponse(response);
    }
    async cancelSubscription(options) {
        const session = await this._getSession();
        const user = await this.getUser();
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].UserAuthenticationRequired();
        const customerType = "teamId" in options ? "team" : "user";
        const customerId = "teamId" in options ? options.teamId : user.id;
        await this._interface.cancelSubscription({
            customer_type: customerType,
            customer_id: customerId,
            product_id: options.productId,
            subscription_id: options.subscriptionId
        }, session);
        if (customerType === "user") await this._userProductsCache.invalidateWhere((param)=>{
            let [cachedSession, userId] = param;
            return cachedSession === session && userId === customerId;
        });
        else await this._teamProductsCache.invalidateWhere((param)=>{
            let [cachedSession, teamId] = param;
            return cachedSession === session && teamId === customerId;
        });
    }
    useProducts(options) {
        const session = this._useSession();
        var _options_cursor, _options_limit;
        const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])("userId" in options ? this._userProductsCache : "teamId" in options ? this._teamProductsCache : this._customProductsCache, [
            session,
            "userId" in options ? options.userId : "teamId" in options ? options.teamId : options.customCustomerId,
            (_options_cursor = options.cursor) !== null && _options_cursor !== void 0 ? _options_cursor : null,
            (_options_limit = options.limit) !== null && _options_limit !== void 0 ? _options_limit : null
        ], "clientApp.useProducts()");
        return this._customerProductsFromResponse(response);
    }
    useInvoices(options) {
        const session = this._useSession();
        var _options_cursor, _options_limit;
        const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])("userId" in options ? this._userInvoicesCache : this._teamInvoicesCache, [
            session,
            "userId" in options ? options.userId : options.teamId,
            (_options_cursor = options.cursor) !== null && _options_cursor !== void 0 ? _options_cursor : null,
            (_options_limit = options.limit) !== null && _options_limit !== void 0 ? _options_limit : null
        ], "clientApp.useInvoices()");
        return this._customerInvoicesFromResponse(response);
    }
    _currentUserFromCrud(crud, session) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withUserDestructureGuard"])({
            ...this._createBaseUser(crud),
            ...this._createAuth(session),
            ...this._createUserExtraFromCurrent(crud, session),
            ...this._isInternalProject() ? this._createInternalUserExtra(session) : {},
            ...this._createCustomer(crud.id, "user", session)
        });
    }
    _clientSessionFromCrud(crud) {
        var _crud_is_current_session;
        return {
            id: crud.id,
            userId: crud.user_id,
            createdAt: new Date(crud.created_at),
            isImpersonation: crud.is_impersonation,
            lastUsedAt: crud.last_used_at ? new Date(crud.last_used_at) : void 0,
            isCurrentSession: (_crud_is_current_session = crud.is_current_session) !== null && _crud_is_current_session !== void 0 ? _crud_is_current_session : false,
            geoInfo: crud.last_used_at_end_user_ip_info
        };
    }
    _getOwnedAdminApp(forProjectId, session) {
        if (!this._ownedAdminApps.has([
            session,
            forProjectId
        ])) this._ownedAdminApps.set([
            session,
            forProjectId
        ], new _StackClientAppImplIncomplete.LazyStackAdminAppImpl.value({
            baseUrl: this._interface.options.getBaseUrl(),
            projectId: forProjectId,
            tokenStore: null,
            projectOwnerSession: session,
            noAutomaticPrefetch: true
        }));
        return this._ownedAdminApps.get([
            session,
            forProjectId
        ]);
    }
    get projectId() {
        return this._interface.projectId;
    }
    get version() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientVersion"];
    }
    _getBotChallengeSiteKeys() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return null;
        const visibleSiteKey = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY;
        if (!visibleSiteKey) {
            if (!this._botChallengeSiteKeysWarned) {
                this._botChallengeSiteKeysWarned = true;
                console.warn("[stack-auth] NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY is not set — bot challenge fraud protection is disabled. Set the env variable to enable it.");
            }
            return null;
        }
        var _envVars_NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY;
        return {
            visibleSiteKey,
            invisibleSiteKey: (_envVars_NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY) !== null && _envVars_NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY !== void 0 ? _envVars_NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY : visibleSiteKey
        };
    }
    _getBotChallengeFlowFailure(error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$turnstile$2d$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotChallengeUserCancelledError"]) return {
            type: "cancelled",
            knownError: new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeFailed("Bot challenge cancelled by user")
        };
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$turnstile$2d$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotChallengeExecutionFailedError"]) return {
            type: "failed",
            knownError: new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeFailed(error.message)
        };
        return null;
    }
    _normalizeBotChallengeResult(result) {
        if (result.status === "ok") return result;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeRequired.isInstance(result.error)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("bot-challenge-unexpected-after-flow", result.error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeFailed("Unexpected bot challenge after flow completion"));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    _toInterfaceBotChallengeInput(challenge) {
        if (challenge.unavailable) return {
            phase: "visible"
        };
        return {
            token: challenge.token,
            phase: challenge.phase
        };
    }
    async _executeResultWithBotChallengeFlow(options) {
        const siteKeys = this._getBotChallengeSiteKeys();
        let result;
        try {
            if (siteKeys) result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$turnstile$2d$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBotChallengeFlow"])({
                ...siteKeys,
                action: options.action,
                execute: options.execute,
                isChallengeRequired: (flowResult)=>{
                    return flowResult.status === "error" && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeRequired.isInstance(flowResult.error);
                }
            });
            else result = await options.execute({});
        } catch (e) {
            const flowFailure = this._getBotChallengeFlowFailure(e);
            if (flowFailure) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(flowFailure.knownError);
            throw e;
        }
        return this._normalizeBotChallengeResult(result);
    }
    async _isTrusted(url) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRelative"])(url)) return true;
        const parsedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrlIfValid"])(url);
        if (parsedUrl == null) return false;
        if (typeof window !== "undefined" && window.location.origin === parsedUrl.origin) return true;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHostedHandlerUrlForProject"])({
            url,
            projectId: this.projectId
        })) return true;
        const trustedRedirectConfig = await this._getTrustedRedirectConfig();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$redirect$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRedirectUrl"])(parsedUrl, {
            allowLocalhost: trustedRedirectConfig.allowLocalhost,
            trustedDomains: trustedRedirectConfig.trustedDomains
        });
    }
    get urls() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrls"])(this._urlOptions, {
            projectId: this.projectId
        });
    }
    _prefetchCrossDomainHandoffParamsIfNeeded() {
        const canWriteOauthVerifierCookie = this._tokenStoreInit === "cookie" || this._tokenStoreInit === "nextjs-cookie";
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() || !canWriteOauthVerifierCookie || this._isPrefetchingCrossDomainHandoffParams || this._getFreshPrefetchedCrossDomainHandoffParams() != null) return;
        this._isPrefetchingCrossDomainHandoffParams = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            try {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) return;
                const { state, codeChallenge } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveVerifierAndState"])();
                this._prefetchedCrossDomainHandoffParams = {
                    state,
                    codeChallenge
                };
                this._prefetchedCrossDomainHandoffParamsFetchedAt = performance.now();
            } finally{
                this._isPrefetchingCrossDomainHandoffParams = false;
            }
        });
    }
    _getCrossDomainHandoffParamsForUrlsGetter(currentUrl) {
        const fromQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$redirect$2d$page$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrossDomainHandoffParamsFromCurrentUrl"])(currentUrl);
        if (fromQuery != null) return fromQuery;
        const prefetched = this._getFreshPrefetchedCrossDomainHandoffParams();
        if (prefetched != null) return prefetched;
        this._prefetchCrossDomainHandoffParamsIfNeeded();
        return null;
    }
    async _getCrossDomainHandoffParamsForRedirect(currentUrl) {
        const fromQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$redirect$2d$page$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrossDomainHandoffParamsFromCurrentUrl"])(currentUrl);
        if (fromQuery != null) return fromQuery;
        const prefetched = this._getFreshPrefetchedCrossDomainHandoffParams();
        if (prefetched != null) return prefetched;
        const { state, codeChallenge } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveVerifierAndState"])();
        this._prefetchedCrossDomainHandoffParams = {
            state,
            codeChallenge
        };
        this._prefetchedCrossDomainHandoffParamsFetchedAt = performance.now();
        return {
            state,
            codeChallenge
        };
    }
    _getLocalOAuthCallbackHandlerUrl() {
        if (this._isOAuthCallbackUrlHosted()) return this._getOAuthCallbackRedirectUri();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHandlerUrls"])({
            urls: {
                ...this._urlOptions,
                default: {
                    type: "handler-component"
                },
                oauthCallback: {
                    type: "handler-component"
                }
            },
            projectId: this.projectId
        }).oauthCallback;
    }
    async _createCrossDomainAuthRedirectUrl(options) {
        const session = await this._getSession(options.overrideTokenStoreInit, {
            awaitPendingAuthResolutions: options.awaitPendingAuthResolutions
        });
        const response = await this._interface.sendClientRequest("/auth/oauth/cross-domain/authorize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                redirect_uri: options.redirectUri,
                state: options.state,
                code_challenge: options.codeChallenge,
                code_challenge_method: "S256",
                after_callback_redirect_url: options.afterCallbackRedirectUrl
            })
        }, session);
        if (!response.ok) {
            const responseBody = await response.text();
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Cross-domain authorization endpoint failed: ".concat(response.status, " ").concat(responseBody));
        }
        const result = await response.json();
        if (!("redirect_url" in result) || typeof result.redirect_url !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Cross-domain authorization endpoint returned an invalid payload", {
            result
        });
        return result.redirect_url;
    }
    _getFreshPrefetchedCrossDomainHandoffParams() {
        if (this._prefetchedCrossDomainHandoffParams == null) return null;
        if (performance.now() - this._prefetchedCrossDomainHandoffParamsFetchedAt > prefetchedCrossDomainHandoffTtlMs) {
            this._prefetchedCrossDomainHandoffParams = null;
            this._prefetchedCrossDomainHandoffParamsFetchedAt = 0;
            return null;
        }
        return this._prefetchedCrossDomainHandoffParams;
    }
    async _getCurrentUrl() {
        if (this._redirectMethod === "none") return null;
        return new URL(window.location.href);
    }
    async _redirectTo(options) {
        if (this._redirectMethod === "none") return;
        else if (isReactServer && this._redirectMethod === "nextjs") NextNavigation.redirect(options.url.toString(), options.replace ? NextNavigation.RedirectType.replace : NextNavigation.RedirectType.push);
        else if (typeof this._redirectMethod === "object" && this._redirectMethod.navigate) this._redirectMethod.navigate(options.url.toString());
        else if (options.replace) window.location.replace(options.url);
        else window.location.assign(options.url);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wait"])(2e3);
    }
    useNavigate() {
        if (typeof this._redirectMethod === "object") return this._redirectMethod.useNavigate();
        else if (this._redirectMethod === "window") return (to)=>window.location.assign(to);
        else if (this._redirectMethod === "nextjs") {
            const router = NextNavigation.useRouter();
            return (to)=>router.push(to);
        } else return (to)=>{};
    }
    async _redirectIfTrusted(url, options) {
        if (!await this._isTrusted(url)) throw new Error("Redirect URL ".concat(url, " is not trusted; should be relative."));
        return await this._redirectTo({
            url,
            ...options
        });
    }
    async _redirectToHandler(handlerName, options, internalOptions) {
        const rawHandlerUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrls"])(this._urlOptions, {
            projectId: this.projectId
        })[handlerName];
        if (!rawHandlerUrl) throw new Error("No URL for handler name ".concat(handlerName));
        const currentUrl = isReactServer || typeof window === "undefined" ? null : new URL(window.location.href);
        const plan = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$redirect$2d$page$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["planRedirectToHandler"])({
            handlerName,
            rawHandlerUrl,
            noRedirectBack: (options === null || options === void 0 ? void 0 : options.noRedirectBack) === true,
            currentUrl,
            localOAuthCallbackUrl: this._getLocalOAuthCallbackHandlerUrl(),
            getCrossDomainHandoffParams: async (href)=>await this._getCrossDomainHandoffParamsForRedirect(href)
        });
        if (plan.type === "cross-domain-authorize") {
            const crossDomainRedirectUrl = await this._createCrossDomainAuthRedirectUrl({
                redirectUri: plan.redirectUri,
                state: plan.state,
                codeChallenge: plan.codeChallenge,
                afterCallbackRedirectUrl: plan.afterCallbackRedirectUrl,
                awaitPendingAuthResolutions: internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.awaitPendingAuthResolutions,
                overrideTokenStoreInit: internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.overrideTokenStoreInit
            });
            await this._redirectTo({
                url: crossDomainRedirectUrl,
                ...options
            });
            return;
        }
        const redirectUrl = currentUrl != null && handlerName !== "signOut" && handlerName !== "afterSignOut" && handlerName !== "oauthCallback" ? await this._addNestedCrossDomainAuthParamsToRedirectUrl({
            url: plan.url,
            currentUrl,
            awaitPendingAuthResolutions: internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.awaitPendingAuthResolutions,
            overrideTokenStoreInit: internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.overrideTokenStoreInit
        }) : plan.url;
        await this._redirectIfTrusted(redirectUrl, options);
    }
    _redirectToHandlerDuringRender(handlerName, options) {
        return false;
    }
    async redirectToSignIn(options) {
        return await this._redirectToHandler("signIn", options);
    }
    async redirectToSignUp(options) {
        return await this._redirectToHandler("signUp", options);
    }
    async redirectToSignOut(options) {
        return await this._redirectToHandler("signOut", options);
    }
    async redirectToEmailVerification(options) {
        return await this._redirectToHandler("emailVerification", options);
    }
    async redirectToPasswordReset(options) {
        return await this._redirectToHandler("passwordReset", options);
    }
    async redirectToForgotPassword(options) {
        return await this._redirectToHandler("forgotPassword", options);
    }
    async redirectToHome(options) {
        return await this._redirectToHandler("home", options);
    }
    async redirectToOAuthCallback(options) {
        return await this._redirectToHandler("oauthCallback", options);
    }
    async redirectToMagicLinkCallback(options) {
        return await this._redirectToHandler("magicLinkCallback", options);
    }
    async redirectToAfterSignIn(options) {
        return await this._redirectToHandler("afterSignIn", options);
    }
    async redirectToAfterSignUp(options) {
        return await this._redirectToHandler("afterSignUp", options);
    }
    async redirectToOnboarding(options) {
        return await this._redirectToHandler("onboarding", options);
    }
    async redirectToAfterSignOut(options) {
        return await this._redirectToHandler("afterSignOut", options);
    }
    async redirectToAccountSettings(options) {
        return await this._redirectToHandler("accountSettings", options);
    }
    async redirectToError(options) {
        return await this._redirectToHandler("error", options);
    }
    async redirectToTeamInvitation(options) {
        return await this._redirectToHandler("teamInvitation", options);
    }
    async redirectToCliAuthConfirm(options) {
        return await this._redirectToHandler("cliAuthConfirm", options);
    }
    async redirectToMfa(options) {
        return await this._redirectToHandler("mfa", options);
    }
    async sendForgotPasswordEmail(email, options) {
        var _options_callbackUrl;
        return await this._interface.sendForgotPasswordEmail(email, (_options_callbackUrl = options === null || options === void 0 ? void 0 : options.callbackUrl) !== null && _options_callbackUrl !== void 0 ? _options_callbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(this.urls.passwordReset, "callbackUrl"));
    }
    async sendMagicLinkEmail(email, options) {
        var _options_callbackUrl;
        const callbackUrl = (_options_callbackUrl = options === null || options === void 0 ? void 0 : options.callbackUrl) !== null && _options_callbackUrl !== void 0 ? _options_callbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(this.urls.magicLinkCallback, "callbackUrl");
        return await this._executeResultWithBotChallengeFlow({
            action: "send_magic_link_email",
            execute: async (challenge)=>{
                return await this._interface.sendMagicLinkEmail(email, callbackUrl, this._toInterfaceBotChallengeInput(challenge));
            }
        });
    }
    async resetPassword(options) {
        return await this._interface.resetPassword(options);
    }
    async verifyPasswordResetCode(code) {
        return await this._interface.verifyPasswordResetCode(code);
    }
    async verifyTeamInvitationCode(code) {
        return await this._interface.acceptTeamInvitation({
            type: "check",
            code,
            session: await this._getSession()
        });
    }
    async acceptTeamInvitation(code) {
        const result = await this._interface.acceptTeamInvitation({
            type: "use",
            code,
            session: await this._getSession()
        });
        if (result.status === "ok") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    async getTeamInvitationDetails(code) {
        const result = await this._interface.acceptTeamInvitation({
            type: "details",
            code,
            session: await this._getSession()
        });
        if (result.status === "ok") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            teamDisplayName: result.data.team_display_name
        });
        else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    async verifyEmail(code) {
        const result = await this._interface.verifyEmail(code);
        await this._currentUserCache.refresh([
            await this._getSession()
        ]);
        await this._clientContactChannelsCache.refresh([
            await this._getSession()
        ]);
        return result;
    }
    async getUser(options) {
        if ((options === null || options === void 0 ? void 0 : options.or) === "anonymous" && options.includeRestricted === false) throw new Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");
        this._ensurePersistentTokenStore(options === null || options === void 0 ? void 0 : options.tokenStore);
        const session = await this._getSession(options === null || options === void 0 ? void 0 : options.tokenStore);
        let crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentUserCache.getOrWait([
            session
        ], "write-only"));
        const includeAnonymous = (options === null || options === void 0 ? void 0 : options.or) === "anonymous" || (options === null || options === void 0 ? void 0 : options.or) === "anonymous-if-exists[deprecated]";
        const includeRestricted = (options === null || options === void 0 ? void 0 : options.includeRestricted) === true || includeAnonymous;
        if (crud === null || crud.is_anonymous && !includeAnonymous || crud.is_restricted && !includeRestricted) switch(options === null || options === void 0 ? void 0 : options.or){
            case "redirect":
                if (!(crud === null || crud === void 0 ? void 0 : crud.is_anonymous) && (crud === null || crud === void 0 ? void 0 : crud.is_restricted)) await this.redirectToOnboarding({
                    replace: true
                });
                else await this.redirectToSignIn({
                    replace: true
                });
                break;
            case "throw":
                throw new Error("User is not signed in but getUser was called with { or: 'throw' }");
            case "anonymous":
                {
                    const tokens = await this._signUpAnonymously();
                    var _ref;
                    return (_ref = await this.getUser({
                        tokenStore: tokens,
                        or: "anonymous-if-exists[deprecated]",
                        includeRestricted: true
                    })) !== null && _ref !== void 0 ? _ref : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Something went wrong while signing up anonymously");
                }
            case void 0:
            case "anonymous-if-exists[deprecated]":
            case "return-null":
                return null;
        }
        return crud && this._currentUserFromCrud(crud, session);
    }
    useUser(options) {
        if ((options === null || options === void 0 ? void 0 : options.or) === "anonymous" && options.includeRestricted === false) throw new Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");
        this._ensurePersistentTokenStore(options === null || options === void 0 ? void 0 : options.tokenStore);
        const session = this._useSession(options === null || options === void 0 ? void 0 : options.tokenStore);
        let crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._currentUserCache, [
            session
        ], "clientApp.useUser()");
        const includeAnonymous = (options === null || options === void 0 ? void 0 : options.or) === "anonymous" || (options === null || options === void 0 ? void 0 : options.or) === "anonymous-if-exists[deprecated]";
        const includeRestricted = (options === null || options === void 0 ? void 0 : options.includeRestricted) === true || includeAnonymous;
        if (crud === null || crud.is_anonymous && !includeAnonymous || crud.is_restricted && !includeRestricted) switch(options === null || options === void 0 ? void 0 : options.or){
            case "redirect":
                if (!(crud === null || crud === void 0 ? void 0 : crud.is_anonymous) && (crud === null || crud === void 0 ? void 0 : crud.is_restricted)) {
                    if (!this._redirectToHandlerDuringRender("onboarding", {
                        replace: true
                    })) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(this.redirectToOnboarding({
                        replace: true
                    }));
                } else if (!this._redirectToHandlerDuringRender("signIn", {
                    replace: true
                })) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(this.redirectToSignIn({
                    replace: true
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])();
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("suspend should never return");
            case "throw":
                throw new Error("User is not signed in but useUser was called with { or: 'throw' }");
            case "anonymous":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
                    await this._signUpAnonymously();
                    if (typeof window !== "undefined") window.location.reload();
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])();
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("suspend should never return");
            case void 0:
            case "anonymous-if-exists[deprecated]":
            case "return-null":
                crud = null;
                break;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud && this._currentUserFromCrud(crud, session);
        }, [
            crud,
            session,
            options === null || options === void 0 ? void 0 : options.or
        ]);
    }
    _getTokenPartialUserFromSession(session, options) {
        const accessToken = session.getAccessTokenIfNotExpiredYet(0, null);
        if (!accessToken) return null;
        const isAnonymous = accessToken.payload.is_anonymous;
        if (isAnonymous && options.or !== "anonymous-if-exists") return null;
        return {
            id: accessToken.payload.sub,
            primaryEmail: accessToken.payload.email,
            displayName: accessToken.payload.name,
            primaryEmailVerified: accessToken.payload.email_verified,
            isAnonymous,
            isMultiFactorRequired: accessToken.payload.requires_totp_mfa,
            isRestricted: accessToken.payload.is_restricted,
            restrictedReason: accessToken.payload.restricted_reason
        };
    }
    async _getPartialUserFromConvex(ctx) {
        const auth = await ctx.auth.getUserIdentity();
        if (!auth) return null;
        var _auth_name, _auth_email, _auth_restricted_reason;
        return {
            id: auth.subject,
            displayName: (_auth_name = auth.name) !== null && _auth_name !== void 0 ? _auth_name : null,
            primaryEmail: (_auth_email = auth.email) !== null && _auth_email !== void 0 ? _auth_email : null,
            primaryEmailVerified: auth.email_verified,
            isAnonymous: auth.is_anonymous,
            isMultiFactorRequired: auth.requires_totp_mfa,
            isRestricted: auth.is_restricted,
            restrictedReason: (_auth_restricted_reason = auth.restricted_reason) !== null && _auth_restricted_reason !== void 0 ? _auth_restricted_reason : null
        };
    }
    async getPartialUser(options) {
        switch(options.from){
            case "token":
                {
                    var _options_tokenStore;
                    this._ensurePersistentTokenStore((_options_tokenStore = options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : this._tokenStoreInit);
                    const session = await this._getSession(options.tokenStore);
                    return this._getTokenPartialUserFromSession(session, options);
                }
            case "convex":
                return await this._getPartialUserFromConvex(options.ctx);
            default:
                throw new Error("Invalid 'from' option: ".concat(options.from));
        }
    }
    usePartialUser(options) {
        switch(options.from){
            case "token":
                {
                    var _options_tokenStore;
                    this._ensurePersistentTokenStore((_options_tokenStore = options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : this._tokenStoreInit);
                    const session = this._useSession(options.tokenStore);
                    return this._getTokenPartialUserFromSession(session, options);
                }
            case "convex":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._convexPartialUserCache, [
                    options.ctx
                ], "clientApp.usePartialUser()");
            default:
                throw new Error("Invalid 'from' option: ".concat(options.from));
        }
    }
    getConvexClientAuth(options) {
        return async (args)=>{
            var _this, _this1;
            var _options_tokenStore;
            const session = await this._getSession((_options_tokenStore = options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : this._tokenStoreInit);
            var _accessToken_token;
            if (!args.forceRefreshToken) return (_accessToken_token = (_this = await session.getOrFetchLikelyValidTokens(2e4, 75e3)) === null || _this === void 0 ? void 0 : _this.accessToken.token) !== null && _accessToken_token !== void 0 ? _accessToken_token : null;
            var _accessToken_token1;
            return (_accessToken_token1 = (_this1 = await session.fetchNewTokens()) === null || _this1 === void 0 ? void 0 : _this1.accessToken.token) !== null && _accessToken_token1 !== void 0 ? _accessToken_token1 : null;
        };
    }
    async getConvexHttpClientAuth(options) {
        var _this;
        var _accessToken_token;
        return (_accessToken_token = (_this = await (await this._getSession(options.tokenStore)).getOrFetchLikelyValidTokens(2e4, 75e3)) === null || _this === void 0 ? void 0 : _this.accessToken.token) !== null && _accessToken_token !== void 0 ? _accessToken_token : "";
    }
    async _updateClientUser(update, session) {
        const res = await this._interface.updateClientUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userUpdateOptionsToCrud"])(update), session);
        await this._refreshUser(session);
        return res;
    }
    async signInWithOAuth(provider, options) {
        if (typeof window === "undefined") throw new Error("signInWithOAuth can currently only be called in a browser environment");
        this._ensurePersistentTokenStore();
        const session = await this._getSession();
        const currentUrl = new URL(window.location.href);
        const afterCallbackRedirectUrl = (options === null || options === void 0 ? void 0 : options.returnTo) != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(options.returnTo, "returnTo") : currentUrl.searchParams.has("after_auth_return_to") ? currentUrl.toString() : void 0;
        const siteKeys = this._getBotChallengeSiteKeys();
        const { codeChallenge, state } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveVerifierAndState"])();
        const executeOAuth = async (challenge)=>{
            var _this__oauthScopesOnSignIn_provider;
            return await this._interface.authorizeOAuth({
                provider,
                redirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(this._getOAuthCallbackRedirectUri(), "redirectUrl"),
                errorRedirectUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(this.urls.error, "errorRedirectUrl"),
                afterCallbackRedirectUrl,
                type: "authenticate",
                providerScope: (_this__oauthScopesOnSignIn_provider = this._oauthScopesOnSignIn[provider]) === null || _this__oauthScopesOnSignIn_provider === void 0 ? void 0 : _this__oauthScopesOnSignIn_provider.join(" "),
                codeChallenge,
                state,
                botChallenge: this._toInterfaceBotChallengeInput(challenge),
                session
            });
        };
        let authorizeResult;
        try {
            if (siteKeys) authorizeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$turnstile$2d$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBotChallengeFlow"])({
                ...siteKeys,
                action: "oauth_authenticate",
                execute: executeOAuth,
                isChallengeRequired: (result)=>{
                    return result.status === "error" && __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeRequired.isInstance(result.error);
                }
            });
            else authorizeResult = await executeOAuth({});
        } catch (e) {
            const flowFailure = this._getBotChallengeFlowFailure(e);
            if ((flowFailure === null || flowFailure === void 0 ? void 0 : flowFailure.type) === "cancelled") return;
            if ((flowFailure === null || flowFailure === void 0 ? void 0 : flowFailure.type) === "failed") throw flowFailure.knownError;
            throw e;
        }
        const location = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(authorizeResult);
        await this._redirectTo({
            url: location
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neverResolve"])();
    }
    /**
	* Handles MFA verification by redirecting to the OTP page
	*/ async _experimentalMfa(error, session) {
        var _error_details;
        var _error_details_attempt_code;
        if (typeof window !== "undefined") window.sessionStorage.setItem("hexclave_mfa_attempt_code", (_error_details_attempt_code = (_error_details = error.details) === null || _error_details === void 0 ? void 0 : _error_details.attempt_code) !== null && _error_details_attempt_code !== void 0 ? _error_details_attempt_code : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("attempt code missing"));
        await this.redirectToMfa();
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("we should have redirected in redirectToMfa()");
    }
    /**
	* @deprecated
	* TODO remove
	*/ async _catchMfaRequiredError(callback) {
        try {
            return await callback();
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].MultiFactorAuthenticationRequired.isInstance(e)) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await this._experimentalMfa(e, await this._getSession(void 0, {
                awaitPendingAuthResolutions: false
            })));
            throw e;
        }
    }
    async signInWithCredential(options) {
        this._ensurePersistentTokenStore();
        const session = await this._getSession();
        let result;
        try {
            result = await this._catchMfaRequiredError(async ()=>{
                return await this._interface.signInWithCredential(options.email, options.password, session);
            });
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].InvalidTotpCode.isInstance(e)) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            throw e;
        }
        if (result.status === "ok") {
            await this._signInToAccountWithTokens(result.data);
            if (!options.noRedirect) await this._redirectToHandler("afterSignIn", {
                replace: true
            }, {
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        } else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    async signUpWithCredential(options) {
        if (options.noVerificationCallback && options.verificationCallbackUrl) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("verificationCallbackUrl is not allowed when noVerificationCallback is true");
        this._ensurePersistentTokenStore();
        const session = await this._getSession();
        var _options_verificationCallbackUrl;
        const emailVerificationRedirectUrl = options.noVerificationCallback ? void 0 : (_options_verificationCallbackUrl = options.verificationCallbackUrl) !== null && _options_verificationCallbackUrl !== void 0 ? _options_verificationCallbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(this.urls.emailVerification, "verificationCallbackUrl");
        const executeSignUp = async (challenge)=>{
            let result = await this._interface.signUpWithCredential(options.email, options.password, emailVerificationRedirectUrl, session, this._toInterfaceBotChallengeInput(challenge));
            if (result.status === "error" && result.error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].RedirectUrlNotWhitelisted && emailVerificationRedirectUrl !== void 0) {
                if (!options.verificationCallbackUrl) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("signup-verification-url-not-whitelisted", new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("The auto-constructed verification callback URL is not whitelisted; proceeding without email verification", {
                        emailVerificationRedirectUrl
                    }));
                    result = await this._interface.signUpWithCredential(options.email, options.password, void 0, session, this._toInterfaceBotChallengeInput(challenge));
                }
            }
            return result;
        };
        let result;
        result = await this._executeResultWithBotChallengeFlow({
            action: "sign_up_with_credential",
            execute: executeSignUp
        });
        if (result.status === "ok") {
            await this._signInToAccountWithTokens(result.data);
            if (!options.noRedirect) await this._redirectToHandler("afterSignUp", {
                replace: true
            }, {
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        } else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    async _signUpAnonymously() {
        this._ensurePersistentTokenStore();
        if (!this._anonymousSignUpInProgress) this._anonymousSignUpInProgress = (async ()=>{
            this._ensurePersistentTokenStore();
            const session = await this._getSession();
            const result = await this._interface.signUpAnonymously(session);
            if (result.status === "ok") await this._signInToAccountWithTokens(result.data);
            else throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("signUpAnonymously() should never return an error");
            this._anonymousSignUpInProgress = null;
            return result.data;
        })();
        return await this._anonymousSignUpInProgress;
    }
    async signInWithMagicLink(code, options) {
        this._ensurePersistentTokenStore();
        const session = await this._getSession();
        let result;
        try {
            result = await this._catchMfaRequiredError(async ()=>{
                return await this._interface.signInWithMagicLink(code, session);
            });
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].InvalidTotpCode.isInstance(e)) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            throw e;
        }
        if (result.status === "ok") {
            await this._signInToAccountWithTokens(result.data);
            if (!(options === null || options === void 0 ? void 0 : options.noRedirect)) if (result.data.newUser) await this._redirectToHandler("afterSignUp", {
                replace: true
            }, {
                awaitPendingAuthResolutions: false,
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            else await this._redirectToHandler("afterSignIn", {
                replace: true
            }, {
                awaitPendingAuthResolutions: false,
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        } else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    /**
	* Initiates a CLI authentication process that allows a command line application
	* to get a refresh token for a user's account.
	*
	* This process works as follows:
	* 1. The CLI app calls this method, which initiates the auth process with the server
	* 2. The server returns a polling code and a login code
	* 3. The CLI app opens a browser window to the appUrl with the login code as a parameter
	* 4. The user logs in through the browser and confirms the authorization
	* 5. The CLI app polls for the refresh token using the polling code
	*
	* @param options Options for the CLI login
	* @param options.appUrl The URL of the app that will handle the CLI auth confirmation
	* @param options.expiresInMillis Optional duration in milliseconds before the auth attempt expires (default: 2 hours)
	* @param options.maxAttempts Optional maximum number of polling attempts (default: Infinity)
	* @param options.waitTimeMillis Optional time to wait between polling attempts (default: 2 seconds)
	* @param options.promptLink Optional function to call with the login URL and code to prompt the user to open the browser
	* @param options.anonRefreshToken Optional anonymous refresh token from the CLI's token store to associate with this login attempt
	* @returns Result containing either the refresh token or an error
	*/ async promptCliLogin(options) {
        const response = await this._interface.sendClientRequest("/auth/cli", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                expires_in_millis: options.expiresInMillis,
                ...options.anonRefreshToken != null ? {
                    anon_refresh_token: options.anonRefreshToken
                } : {}
            })
        }, null);
        if (!response.ok) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CliAuthError("Failed to initiate CLI auth: ".concat(response.status, " ").concat(await response.text())));
        const initResult = await response.json();
        const pollingCode = initResult.polling_code;
        const loginCode = initResult.login_code;
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCliAuthConfirmUrl"])({
            cliAuthConfirmUrl: this.urls.cliAuthConfirm,
            appUrl: options.appUrl,
            loginCode
        });
        if (options.promptLink) options.promptLink(url, loginCode);
        else {
            console.log("Your verification code: ".concat(loginCode));
            console.log("Please visit the following URL to authenticate:\n".concat(url));
        }
        let attempts = 0;
        var _options_maxAttempts;
        while(attempts < ((_options_maxAttempts = options.maxAttempts) !== null && _options_maxAttempts !== void 0 ? _options_maxAttempts : Infinity)){
            attempts++;
            const pollResponse = await this._interface.sendClientRequest("/auth/cli/poll", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    polling_code: pollingCode
                })
            }, null);
            if (!pollResponse.ok) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CliAuthError("Failed to initiate CLI auth: ".concat(pollResponse.status, " ").concat(await pollResponse.text())));
            const pollResult = await pollResponse.json();
            if (pollResponse.status === 201 && pollResult.status === "success") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(pollResult.refresh_token);
            if (pollResult.status === "waiting") {
                var _options_waitTimeMillis;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wait"])((_options_waitTimeMillis = options.waitTimeMillis) !== null && _options_waitTimeMillis !== void 0 ? _options_waitTimeMillis : 2e3);
                continue;
            }
            if (pollResult.status === "expired") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CliAuthExpiredError("CLI authentication request expired. Please try again."));
            if (pollResult.status === "used") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CliAuthUsedError("This authentication token has already been used."));
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CliAuthError("Unexpected status from CLI auth polling: ".concat(pollResult.status)));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CliAuthError("Timed out waiting for CLI authentication."));
    }
    async signInWithMfa(totp, code, options) {
        this._ensurePersistentTokenStore();
        const session = await this._getSession();
        let result;
        try {
            result = await this._catchMfaRequiredError(async ()=>{
                return await this._interface.signInWithMfa(totp, code, session);
            });
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].InvalidTotpCode) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            throw e;
        }
        if (result.status === "ok") {
            await this._signInToAccountWithTokens(result.data);
            if (!(options === null || options === void 0 ? void 0 : options.noRedirect)) if (result.data.newUser) await this._redirectToHandler("afterSignUp", {
                replace: true
            }, {
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            else await this._redirectToHandler("afterSignIn", {
                replace: true
            }, {
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    async signInWithPasskey() {
        this._ensurePersistentTokenStore();
        const session = await this._getSession();
        let result;
        try {
            result = await this._catchMfaRequiredError(async ()=>{
                const initiationResult = await this._interface.initiatePasskeyAuthentication({}, session);
                if (initiationResult.status !== "ok") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyAuthenticationFailed("Failed to get initiation options for passkey authentication"));
                const { options_json, code } = initiationResult.data;
                if (options_json.rpId !== "THIS_VALUE_WILL_BE_REPLACED.example.com") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Expected returned RP ID from server to equal sentinel, but found ".concat(options_json.rpId));
                options_json.rpId = window.location.hostname;
                const authentication_response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAuthentication"])({
                    optionsJSON: options_json
                });
                return await this._interface.signInWithPasskey({
                    authentication_response,
                    code
                }, session);
            });
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$webAuthnError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebAuthnError"]) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyWebAuthnError(error.message, error.name));
            else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyAuthenticationFailed("Failed to sign in with passkey"));
        }
        if (result.status === "ok") {
            await this._signInToAccountWithTokens(result.data);
            await this._redirectToHandler("afterSignIn", {
                replace: true
            }, {
                overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        } else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(result.error);
    }
    async callOAuthCallback(options) {
        if (typeof window === "undefined") throw new Error("callOAuthCallback can currently only be called in a browser environment");
        if (this._currentUrlLooksLikeOAuthCallback()) this._ensurePersistentTokenStore();
        let oauthCallbackRedirectUri = this._getOAuthCallbackRedirectUri();
        const currentUrl = new URL(window.location.href);
        if (currentUrl.searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$redirect$2d$page$2d$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crossDomainAuthQueryParams"].marker) === "1") {
            currentUrl.searchParams.delete("code");
            currentUrl.searchParams.delete("state");
            oauthCallbackRedirectUri = currentUrl.toString();
        }
        let result;
        try {
            result = await this._catchMfaRequiredError(async ()=>{
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOAuthCallback"])(this._interface, oauthCallbackRedirectUri, options);
            });
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].InvalidTotpCode.isInstance(e)) {
                alert("Invalid TOTP code. Please try signing in again.");
                return false;
            } else throw e;
        }
        if (result.status === "ok" && result.data) {
            this._ensurePersistentTokenStore();
            await this._signInToAccountWithTokens(result.data);
            if ("afterCallbackRedirectUrl" in result.data && result.data.afterCallbackRedirectUrl) {
                await this._redirectTo({
                    url: result.data.afterCallbackRedirectUrl,
                    replace: true
                });
                return true;
            } else if (result.data.newUser) {
                await this._redirectToHandler("afterSignUp", {
                    replace: true
                }, {
                    awaitPendingAuthResolutions: false,
                    overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
                });
                return true;
            } else {
                await this._redirectToHandler("afterSignIn", {
                    replace: true
                }, {
                    awaitPendingAuthResolutions: false,
                    overrideTokenStoreInit: this._getTokenStoreInitForFreshTokens(result.data)
                });
                return true;
            }
        }
        return false;
    }
    async _signOut(session, options) {
        var _this__eventTracker, _this__sessionRecorder;
        (_this__eventTracker = this._eventTracker) === null || _this__eventTracker === void 0 ? void 0 : _this__eventTracker.clearBuffer();
        (_this__sessionRecorder = this._sessionRecorder) === null || _this__sessionRecorder === void 0 ? void 0 : _this__sessionRecorder.clearBuffer();
        await __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLock"].withWriteLock(async ()=>{
            await this._interface.signOut(session);
            if (options === null || options === void 0 ? void 0 : options.redirectUrl) await this._redirectTo({
                url: options.redirectUrl,
                replace: true
            });
            else await this.redirectToAfterSignOut();
        });
    }
    async signOut(options) {
        var _options_tokenStore;
        const user = await this.getUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) await user.signOut({
            redirectUrl: options === null || options === void 0 ? void 0 : options.redirectUrl
        });
    }
    async getAccessToken(options) {
        var _options_tokenStore;
        const user = await this.getUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) return await user.getAccessToken();
        return null;
    }
    useAccessToken(options) {
        var _options_tokenStore;
        const user = this.useUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) return user.useAccessToken();
        return null;
    }
    async getRefreshToken(options) {
        var _options_tokenStore;
        const user = await this.getUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) return await user.getRefreshToken();
        return null;
    }
    useRefreshToken(options) {
        var _options_tokenStore;
        const user = this.useUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) return user.useRefreshToken();
        return null;
    }
    async getAuthorizationHeader(options) {
        return getAuthorizationHeaderValueFromAuthJson(await this.getAuthJson(options));
    }
    useAuthorizationHeader(options) {
        return getAuthorizationHeaderValueFromAuthJson(this.useAuthJson(options));
    }
    async getAuthHeaders(options) {
        return {
            "x-stack-auth": JSON.stringify(await this.getAuthJson(options))
        };
    }
    useAuthHeaders(options) {
        return {
            "x-stack-auth": JSON.stringify(this.useAuthJson(options))
        };
    }
    async getAuthJson(options) {
        var _options_tokenStore;
        const user = await this.getUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) return await user.getAuthJson();
        return {
            accessToken: null,
            refreshToken: null
        };
    }
    useAuthJson(options) {
        var _options_tokenStore;
        const user = this.useUser({
            tokenStore: (_options_tokenStore = options === null || options === void 0 ? void 0 : options.tokenStore) !== null && _options_tokenStore !== void 0 ? _options_tokenStore : void 0
        });
        if (user) return user.useAuthJson();
        return {
            accessToken: null,
            refreshToken: null
        };
    }
    async getProject() {
        const crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentProjectCache.getOrWait([], "write-only"));
        return this._clientProjectFromCrud(crud);
    }
    useProject() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._currentProjectCache, [], "clientApp.useProject()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>this._clientProjectFromCrud(crud), [
            crud
        ]);
    }
    async _listOwnedProjects(session) {
        this._ensureInternalProject();
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._ownedProjectsCache.getOrWait([
            session
        ], "write-only")).map((j)=>this._getOwnedAdminApp(j.id, session)._adminOwnedProjectFromCrud(j, ()=>this._refreshOwnedProjects(session)));
    }
    _useOwnedProjects(session) {
        this._ensureInternalProject();
        const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._ownedProjectsCache, [
            session
        ], "clientApp.useOwnedProjects()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>projects.map((j)=>this._getOwnedAdminApp(j.id, session)._adminOwnedProjectFromCrud(j, ()=>this._refreshOwnedProjects(session))), [
            projects
        ]);
    }
    async _createProject(session, newProject) {
        this._ensureInternalProject();
        const crud = await this._interface.createProject((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$projects$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminProjectCreateOptionsToCrud"])(newProject), session);
        const res = this._getOwnedAdminApp(crud.id, session)._adminOwnedProjectFromCrud(crud, ()=>this._refreshOwnedProjects(session));
        await this._refreshOwnedProjects(session);
        return res;
    }
    async _refreshUser(session) {
        await this._refreshSession(session);
    }
    async _refreshSession(session) {
        await Promise.all([
            this._currentUserCache.refresh([
                session
            ]),
            this._currentUserConnectedAccountsCache.refresh([
                session
            ])
        ]);
        session.suggestAccessTokenExpired();
    }
    async _refreshUsers() {}
    async _refreshProject() {
        await this._currentProjectCache.refresh([]);
    }
    async _refreshOwnedProjects(session) {
        await this._ownedProjectsCache.refresh([
            session
        ]);
    }
    static get [_stackAppInternalsSymbol]() {
        return {
            fromClientJson: (json)=>{
                const providedCheckString = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omit"])(json, []));
                const existing = allClientApps.get(json.uniqueIdentifier);
                if (existing) {
                    const [existingCheckString, clientApp] = existing;
                    if (existingCheckString !== void 0 && existingCheckString !== providedCheckString) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("The provided app JSON does not match the configuration of the existing client app with the same unique identifier", {
                        providedObj: json,
                        existingString: existingCheckString
                    });
                    return clientApp;
                }
                const { analytics, ...restJson } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omit"])(json, [
                    "uniqueIdentifier"
                ]);
                return new _StackClientAppImplIncomplete({
                    ...restJson,
                    analytics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyticsOptionsFromJson"])(analytics)
                }, {
                    uniqueIdentifier: json.uniqueIdentifier,
                    checkString: providedCheckString
                });
            }
        };
    }
    get [_stackAppInternalsSymbol1]() {
        var _this = this;
        return {
            toClientJson: ()=>{
                if (typeof this._redirectMethod !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Cannot serialize to JSON from an application with a non-string redirect method");
                const publishableClientKey = "publishableClientKey" in this._interface.options ? this._interface.options.publishableClientKey : void 0;
                return {
                    baseUrl: this._options.baseUrl,
                    projectId: this.projectId,
                    ...publishableClientKey != null ? {
                        publishableClientKey
                    } : {},
                    tokenStore: this._tokenStoreInit,
                    urls: this._urlOptions,
                    oauthScopesOnSignIn: this._oauthScopesOnSignIn,
                    uniqueIdentifier: this._getUniqueIdentifier(),
                    redirectMethod: this._redirectMethod,
                    extraRequestHeaders: this._options.extraRequestHeaders,
                    devTool: this._options.devTool,
                    analytics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyticsOptionsToJson"])(this._analyticsOptions)
                };
            },
            setCurrentUser: (userJsonPromise)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
                    await this._currentUserCache.forceSetCachedValueAsync([
                        await this._getSession()
                    ], __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromPromise(userJsonPromise));
                });
            },
            getConstructorOptions: ()=>this._options,
            sendSessionReplayBatch: async (body, options)=>{
                return await this._interface.sendSessionReplayBatch(body, await this._getSession(), options);
            },
            sendAnalyticsEventBatch: async (body, options)=>{
                return await this._interface.sendAnalyticsEventBatch(body, await this._getSession(), options);
            },
            addRequestListener: (listener)=>{
                return this._interface.addRequestListener(listener);
            },
            sendRequest: async function(path, requestOptions) {
                let requestType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "client";
                return await _this._interface.sendClientRequest(path, requestOptions, await _this._getSession(), requestType);
            },
            getRedirectMethod: ()=>{
                var _this__redirectMethod;
                return (_this__redirectMethod = this._redirectMethod) !== null && _this__redirectMethod !== void 0 ? _this__redirectMethod : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Redirect method should have been initialized in the Stack client app constructor");
            },
            redirectToUrl: async (url, options)=>{
                await this._redirectTo({
                    url,
                    ...options
                });
            },
            redirectToHandler: async (handlerName, options)=>{
                await this._redirectToHandler(handlerName, options);
            },
            refreshOwnedProjects: async ()=>{
                await this._refreshOwnedProjects(await this._getSession());
            },
            signInWithTokens: async (tokens)=>{
                await this._signInToAccountWithTokens(tokens);
            }
        };
    }
    constructor(options, extraOptions){
        var _this__analyticsOptions, _this__analyticsOptions_replays, _this__analyticsOptions1;
        this._uniqueIdentifier = void 0;
        this._sessionRecorder = null;
        this._eventTracker = null;
        this.__DEMO_ENABLE_SLIGHT_FETCH_DELAY = false;
        this._ownedAdminApps = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$maps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DependenciesMap"]();
        this._currentUserCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            if (this.__DEMO_ENABLE_SLIGHT_FETCH_DELAY) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wait"])(2e3);
            if (session.isKnownToBeInvalid()) return null;
            return await this._interface.getClientUserByToken(session);
        });
        this._currentProjectCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._interface.getClientProject());
        });
        this._ownedProjectsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listProjects(session);
        });
        this._currentUserPermissionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId, recursive] = param;
            return await this._interface.listCurrentUserTeamPermissions({
                teamId,
                recursive
            }, session);
        });
        this._currentUserProjectPermissionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [recursive] = param;
            return await this._interface.listCurrentUserProjectPermissions({
                recursive
            }, session);
        });
        this._currentUserTeamsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listCurrentUserTeams(session);
        });
        this._currentUserOAuthConnectionAccessTokensCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [providerId, scope] = param;
            try {
                return {
                    accessToken: (await this._interface.createProviderAccessToken(providerId, scope || "", session)).access_token
                };
            } catch (err) {
                if (!(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionDoesNotHaveRequiredScope.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionNotConnectedToUser.isInstance(err))) throw err;
            }
            return null;
        });
        this._currentUserOAuthConnectionCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [providerId, scope, redirect] = param;
            return await this._getUserOAuthConnectionCacheFn({
                getUser: async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentUserCache.getOrWait([
                        session
                    ], "write-only")),
                getOrWaitOAuthToken: async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentUserOAuthConnectionAccessTokensCache.getOrWait([
                        session,
                        providerId,
                        scope || ""
                    ], "write-only")),
                useOAuthToken: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._currentUserOAuthConnectionAccessTokensCache, [
                        session,
                        providerId,
                        scope || ""
                    ], "connection.useAccessToken()"),
                providerId,
                scope,
                redirect,
                session
            });
        });
        this._currentUserConnectedAccountsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return (await this._interface.listConnectedAccounts(session)).items.map((item)=>this._createOAuthConnectionFromCrudItem(item, session));
        });
        this._currentUserOAuthConnectionAccessTokensByAccountCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [providerId, providerAccountId, scope] = param;
            try {
                return {
                    accessToken: (await this._interface.createProviderAccessTokenByAccount(providerId, providerAccountId, scope, session)).access_token
                };
            } catch (err) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionDoesNotHaveRequiredScope.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionNotConnectedToUser.isInstance(err)) return null;
                throw err;
            }
        });
        this._currentUserValidConnectedAccountForProviderCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [provider, scopeString] = param;
            const matchingAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentUserConnectedAccountsCache.getOrWait([
                session
            ], "write-only")).filter((a)=>a.provider === provider);
            const scopes = scopeString ? scopeString.split(" ") : void 0;
            for (const account of matchingAccounts)if ((await account.getAccessToken({
                scopes
            })).status === "ok") return account;
            var _this__oauthScopesOnSignIn_provider;
            const location = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNewOAuthProviderOrScopeUrl"])(this._interface, {
                provider,
                redirectUrl: this._getOAuthCallbackRedirectUri(),
                errorRedirectUrl: this.urls.error,
                providerScope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeStrings"])(scopeString, ((_this__oauthScopesOnSignIn_provider = this._oauthScopesOnSignIn[provider]) !== null && _this__oauthScopesOnSignIn_provider !== void 0 ? _this__oauthScopesOnSignIn_provider : []).join(" "))
            }, session);
            await this._redirectTo({
                url: location
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neverResolve"])();
        });
        this._teamMemberProfilesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId] = param;
            return await this._interface.listTeamMemberProfiles({
                teamId
            }, session);
        });
        this._teamInvitationsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId] = param;
            return await this._interface.listTeamInvitations({
                teamId
            }, session);
        });
        this._currentUserTeamProfileCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId] = param;
            return await this._interface.getTeamMemberProfile({
                teamId,
                userId: "me"
            }, session);
        });
        this._currentUserTeamInvitationsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listCurrentUserTeamInvitations(session);
        });
        this._clientContactChannelsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listClientContactChannels(session);
        });
        this._userApiKeysCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listProjectApiKeys({
                user_id: "me"
            }, session, "client");
        });
        this._teamApiKeysCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId] = param;
            return await this._interface.listProjectApiKeys({
                team_id: teamId
            }, session, "client");
        });
        this._notificationCategoriesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listNotificationCategories(session);
        });
        this._currentUserOAuthProvidersCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            return await this._interface.listOAuthProviders({
                user_id: "me"
            }, session);
        });
        this._userItemCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [userId, itemId] = param;
            return await this._interface.getItem({
                userId,
                itemId
            }, session);
        });
        this._teamItemCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId, itemId] = param;
            return await this._interface.getItem({
                teamId,
                itemId
            }, session);
        });
        this._customItemCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [customCustomerId, itemId] = param;
            return await this._interface.getItem({
                customCustomerId,
                itemId
            }, session);
        });
        this._userProductsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [userId, cursor, limit] = param;
            return await this._interface.listProducts({
                customer_type: "user",
                customer_id: userId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, session);
        });
        this._teamProductsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId, cursor, limit] = param;
            return await this._interface.listProducts({
                customer_type: "team",
                customer_id: teamId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, session);
        });
        this._customProductsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [customCustomerId, cursor, limit] = param;
            return await this._interface.listProducts({
                customer_type: "custom",
                customer_id: customCustomerId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, session);
        });
        this._userInvoicesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [userId, cursor, limit] = param;
            return await this._interface.listInvoices({
                customer_type: "user",
                customer_id: userId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, session);
        });
        this._teamInvoicesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [teamId, cursor, limit] = param;
            return await this._interface.listInvoices({
                customer_type: "team",
                customer_id: teamId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, session);
        });
        this._customerBillingCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session, param)=>{
            let [customerType, customerId] = param;
            return await this._interface.getCustomerBilling(customerType, customerId, session);
        });
        this._convexPartialUserCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [ctx] = param;
            return await this._getPartialUserFromConvex(ctx);
        });
        this._trustedParentDomainCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [domain] = param;
            return await this._getTrustedParentDomain(domain);
        });
        this._anonymousSignUpInProgress = null;
        this._prefetchedCrossDomainHandoffParams = null;
        this._prefetchedCrossDomainHandoffParamsFetchedAt = 0;
        this._isPrefetchingCrossDomainHandoffParams = false;
        this._pendingAuthResolutionPromises = [];
        this._memoryTokenStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyTokenStore"])();
        this._nextServerCookiesTokenStores = /* @__PURE__ */ new WeakMap();
        this._requestTokenStores = /* @__PURE__ */ new WeakMap();
        this._storedBrowserCookieTokenStore = null;
        this._mostRecentQueuedCookieRefreshIndex = 0;
        this._sessionsByTokenStoreAndSessionKey = /* @__PURE__ */ new WeakMap();
        this._botChallengeSiteKeysWarned = false;
        const resolvedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveConstructorOptions"])(options);
        if (!_StackClientAppImplIncomplete.LazyStackAdminAppImpl.value) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Admin app implementation not initialized. Did you import the _StackClientApp from stack-app/apps/implementations/index.ts? You can't import it directly from ./apps/implementations/client-app-impl.ts as that causes a circular dependency (see the comment at _LazyStackAdminAppImpl for more details).");
        this._options = resolvedOptions;
        this._extraOptions = extraOptions;
        var _resolvedOptions_projectId;
        const projectId = (_resolvedOptions_projectId = resolvedOptions.projectId) !== null && _resolvedOptions_projectId !== void 0 ? _resolvedOptions_projectId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultProjectId"])();
        if (projectId !== "internal" && !projectId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) throw new Error("Invalid project ID: ".concat(projectId, ". Project IDs must be UUIDs. Please check your environment variables and/or your StackApp."));
        var _resolvedOptions_publishableClientKey;
        const publishableClientKey = (_resolvedOptions_publishableClientKey = resolvedOptions.publishableClientKey) !== null && _resolvedOptions_publishableClientKey !== void 0 ? _resolvedOptions_publishableClientKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultPublishableClientKey"])();
        if (extraOptions && extraOptions.interface) this._interface = extraOptions.interface;
        else {
            const apiUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveApiUrls"])(resolvedOptions.baseUrl);
            var _resolvedOptions_extraRequestHeaders;
            this._interface = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$client$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveClientInterface"]({
                getBaseUrl: ()=>apiUrls()[0],
                getAnalyticsBaseUrl: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalyticsBaseUrl"])(apiUrls()[0]),
                getApiUrls: apiUrls,
                extraRequestHeaders: (_resolvedOptions_extraRequestHeaders = resolvedOptions.extraRequestHeaders) !== null && _resolvedOptions_extraRequestHeaders !== void 0 ? _resolvedOptions_extraRequestHeaders : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultExtraRequestHeaders"])(),
                projectId,
                clientVersion: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientVersion"],
                ...publishableClientKey != null ? {
                    publishableClientKey
                } : {},
                prepareRequest: async ()=>{
                    await (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"] === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$sc$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_787599febb8347f2cf1854bfaf4d572f$2f$node_modules$2f40$stackframe$2f$stack$2d$sc$2f$dist$2f$esm$2f$index$2e$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])());
                }
            });
        }
        this._tokenStoreInit = resolvedOptions.tokenStore;
        this._redirectMethod = resolvedOptions.redirectMethod || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() ? "window" : "none");
        this._redirectMethod = resolvedOptions.redirectMethod || "nextjs";
        var _resolvedOptions_urls;
        this._urlOptions = (_resolvedOptions_urls = resolvedOptions.urls) !== null && _resolvedOptions_urls !== void 0 ? _resolvedOptions_urls : {};
        var _resolvedOptions_oauthScopesOnSignIn;
        this._oauthScopesOnSignIn = (_resolvedOptions_oauthScopesOnSignIn = resolvedOptions.oauthScopesOnSignIn) !== null && _resolvedOptions_oauthScopesOnSignIn !== void 0 ? _resolvedOptions_oauthScopesOnSignIn : {};
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() && (resolvedOptions.tokenStore === "cookie" || resolvedOptions.tokenStore === "nextjs-cookie")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(this._trustedParentDomainCache.getOrWait([
                window.location.hostname
            ], "write-only"));
            this._ensureCrossSubdomainCookieExists();
        }
        if (extraOptions && extraOptions.uniqueIdentifier) {
            this._uniqueIdentifier = extraOptions.uniqueIdentifier;
            this._initUniqueIdentifier();
        }
        this._analyticsOptions = resolvedOptions.analytics;
        const getAnalyticsSession = async ()=>{
            this._ensurePersistentTokenStore();
            if (await this.getPartialUser({
                from: "token",
                or: "anonymous-if-exists"
            })) return await this._getSession();
            return (await this.getUser({
                or: "anonymous"
            }))._internalSession;
        };
        const analyticsEnabled = ((_this__analyticsOptions = this._analyticsOptions) === null || _this__analyticsOptions === void 0 ? void 0 : _this__analyticsOptions.enabled) !== false;
        if (analyticsEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() && this._hasPersistentTokenStore() && ((_this__analyticsOptions1 = this._analyticsOptions) === null || _this__analyticsOptions1 === void 0 ? void 0 : (_this__analyticsOptions_replays = _this__analyticsOptions1.replays) === null || _this__analyticsOptions_replays === void 0 ? void 0 : _this__analyticsOptions_replays.enabled) === true) {
            this._sessionRecorder = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$session$2d$replay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionRecorder"]({
                projectId: this.projectId,
                sendBatch: async (body, opts)=>{
                    return await this._interface.sendSessionReplayBatch(body, await getAnalyticsSession(), opts);
                }
            }, this._analyticsOptions.replays);
            this._sessionRecorder.start();
        }
        if (analyticsEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() && this._hasPersistentTokenStore()) {
            this._eventTracker = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$event$2d$tracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventTracker"]({
                projectId: this.projectId,
                sendBatch: async (body, opts)=>{
                    return await this._interface.sendAnalyticsEventBatch(body, await getAnalyticsSession(), opts);
                }
            });
            this._eventTracker.start();
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() && this._isOAuthCallbackUrlHosted() && this._currentUrlLooksLikeStackOAuthCallback()) this._trackPendingAuthResolution(async ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) await this.callOAuthCallback({
                dontWarnAboutMissingQueryParams: true
            });
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])()) this._trackPendingAuthResolution(async ()=>{
            await this._maybeHandleNestedCrossDomainAuth();
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserLike"])() && resolvedOptions.devTool !== false) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mountDevTool"])(this);
    }
}, __StackClientAppImplIncomplete.LazyStackAdminAppImpl = {
    value: void 0
}, __StackClientAppImplIncomplete);
;
 //# sourceMappingURL=client-app-impl.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/server-app-impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StackServerAppImplIncomplete",
    ()=>_StackServerAppImplIncomplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$server$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/interface/server-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$webAuthnError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/helpers/webAuthnError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@simplewebauthn+browser@13.3.0/node_modules/@simplewebauthn/browser/esm/methods/startRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/api-keys/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$contact$2d$channels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/contact-channels/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/teams/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/users/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$client$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/client-app-impl.js [app-client] (ecmascript)");
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
;
;
//#region src/lib/stack-app/apps/implementations/server-app-impl.ts
var _StackServerAppImplIncomplete = class extends __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$client$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackClientAppImplIncomplete"] {
    async _refreshTeamMembership(teamId, userId) {
        await Promise.all([
            this._serverTeamMemberProfilesCache.refresh([
                teamId
            ]),
            this._serverTeamsCache.refreshWhere((param)=>{
                let [u] = param;
                return u === userId || u === void 0;
            }),
            this._serverUsersCache.refreshWhere((key)=>key[8] === teamId)
        ]);
    }
    _createServerCustomer(userIdOrTeamId, type) {
        const app = this;
        const productsCache = type === "user" ? app._serverUserProductsCache : app._serverTeamProductsCache;
        const customerOptions = type === "user" ? {
            userId: userIdOrTeamId
        } : {
            teamId: userIdOrTeamId
        };
        return {
            ...this._createCustomer(userIdOrTeamId, type, null),
            async getItem (itemId) {
                return await app.getItem({
                    itemId,
                    ...customerOptions
                });
            },
            useItem (itemId) {
                return app.useItem({
                    itemId,
                    ...customerOptions
                });
            },
            async grantProduct (productOptions) {
                if (type === "user") if ("productId" in productOptions) await app.grantProduct({
                    userId: userIdOrTeamId,
                    productId: productOptions.productId,
                    quantity: productOptions.quantity
                });
                else await app.grantProduct({
                    userId: userIdOrTeamId,
                    product: productOptions.product,
                    quantity: productOptions.quantity
                });
                else if ("productId" in productOptions) await app.grantProduct({
                    teamId: userIdOrTeamId,
                    productId: productOptions.productId,
                    quantity: productOptions.quantity
                });
                else await app.grantProduct({
                    teamId: userIdOrTeamId,
                    product: productOptions.product,
                    quantity: productOptions.quantity
                });
                await productsCache.refresh([
                    userIdOrTeamId,
                    null,
                    null
                ]);
            },
            async createCheckoutUrl (options) {
                const productIdOrInline = "productId" in options ? options.productId : options.product;
                return await app._interface.createCheckoutUrl(type, userIdOrTeamId, productIdOrInline, null, options.returnUrl, "server");
            }
        };
    }
    async _updateServerUser(userId, update) {
        const result = await this._interface.updateServerUser(userId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverUserUpdateOptionsToCrud"])(update));
        await this._refreshUsers();
        return result;
    }
    _serverEditableTeamProfileFromCrud(crud) {
        const app = this;
        return {
            displayName: crud.display_name,
            profileImageUrl: crud.profile_image_url,
            async update (update) {
                await app._interface.updateServerTeamMemberProfile({
                    teamId: crud.team_id,
                    userId: crud.user_id,
                    profile: {
                        display_name: update.displayName,
                        profile_image_url: update.profileImageUrl
                    }
                });
                await app._serverUserTeamProfileCache.refresh([
                    crud.team_id,
                    crud.user_id
                ]);
            }
        };
    }
    _serverContactChannelFromCrud(userId, crud) {
        const app = this;
        return {
            id: crud.id,
            value: crud.value,
            type: crud.type,
            isVerified: crud.is_verified,
            isPrimary: crud.is_primary,
            usedForAuth: crud.used_for_auth,
            async sendVerificationEmail (options) {
                var _options_callbackUrl;
                await app._interface.sendServerContactChannelVerificationEmail(userId, crud.id, (_options_callbackUrl = options === null || options === void 0 ? void 0 : options.callbackUrl) !== null && _options_callbackUrl !== void 0 ? _options_callbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(app.urls.emailVerification, "callbackUrl"));
            },
            async update (data) {
                await app._interface.updateServerContactChannel(userId, crud.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$contact$2d$channels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverContactChannelUpdateOptionsToCrud"])(data));
                await Promise.all([
                    app._serverContactChannelsCache.refresh([
                        userId
                    ]),
                    app._serverUserCache.refresh([
                        userId
                    ])
                ]);
            },
            async delete () {
                await app._interface.deleteServerContactChannel(userId, crud.id);
                await Promise.all([
                    app._serverContactChannelsCache.refresh([
                        userId
                    ]),
                    app._serverUserCache.refresh([
                        userId
                    ])
                ]);
            }
        };
    }
    _serverNotificationCategoryFromCrud(userId, crud) {
        const app = this;
        return {
            id: crud.notification_category_id,
            name: crud.notification_category_name,
            enabled: crud.enabled,
            canDisable: crud.can_disable,
            async setEnabled (enabled) {
                await app._interface.setServerNotificationsEnabled(userId, crud.notification_category_id, enabled);
                await app._serverNotificationCategoriesCache.refresh([
                    userId
                ]);
            }
        };
    }
    _serverOAuthProviderFromCrud(crud) {
        const app = this;
        return {
            id: crud.id,
            type: crud.type,
            userId: crud.user_id,
            accountId: crud.account_id,
            email: crud.email,
            allowSignIn: crud.allow_sign_in,
            allowConnectedAccounts: crud.allow_connected_accounts,
            async update (data) {
                try {
                    await app._interface.updateServerOAuthProvider(crud.user_id, crud.id, {
                        account_id: data.accountId,
                        email: data.email,
                        allow_sign_in: data.allowSignIn,
                        allow_connected_accounts: data.allowConnectedAccounts
                    });
                    await Promise.all([
                        app._serverOAuthProvidersCache.refresh([
                            crud.user_id
                        ]),
                        app._serverUserConnectedAccountsCache.refresh([
                            crud.user_id
                        ])
                    ]);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
                } catch (error) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthProviderAccountIdAlreadyUsedForSignIn.isInstance(error)) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(error);
                    throw error;
                }
            },
            async delete () {
                await app._interface.deleteServerOAuthProvider(crud.user_id, crud.id);
                await Promise.all([
                    app._serverOAuthProvidersCache.refresh([
                        crud.user_id
                    ]),
                    app._serverUserConnectedAccountsCache.refresh([
                        crud.user_id
                    ])
                ]);
            }
        };
    }
    _serverApiKeyFromCrud(crud) {
        return {
            ...this._baseApiKeyFromCrud(crud),
            async revoke () {
                await this.update({
                    revoked: true
                });
            },
            update: async (options)=>{
                await this._interface.updateProjectApiKey(crud.type === "team" ? {
                    team_id: crud.team_id
                } : {
                    user_id: crud.user_id
                }, crud.id, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiKeyUpdateOptionsToCrud"])(crud.type, options), null, "server");
                if (crud.type === "team") await this._serverTeamApiKeysCache.refresh([
                    crud.team_id
                ]);
                else await this._serverUserApiKeysCache.refresh([
                    crud.user_id
                ]);
            }
        };
    }
    _createServerOAuthConnectionFromCrudItem(userId, item) {
        const app = this;
        const providerId = item.provider;
        const providerAccountId = item.provider_account_id;
        return {
            id: providerId,
            provider: providerId,
            providerAccountId,
            async getAccessToken (options) {
                var _options_scopes;
                var _options_scopes_join;
                const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserOAuthConnectionAccessTokensByAccountCache.getOrWait([
                    userId,
                    providerId,
                    providerAccountId,
                    scopeString
                ], "write-only"));
                if (!result) {
                    const scopeDetail = scopeString ? "The requested scopes [".concat(scopeString, "] are not available on the existing token.") : "The OAuth refresh token has likely been revoked or expired.";
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable(providerId, "".concat(scopeDetail, " The user needs to re-authorize by calling `linkConnectedAccount` or using `getOrLinkConnectedAccount`.")));
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(result);
            },
            useAccessToken (options) {
                var _options_scopes;
                var _options_scopes_join;
                const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserOAuthConnectionAccessTokensByAccountCache, [
                    userId,
                    providerId,
                    providerAccountId,
                    scopeString
                ], "connection.useAccessToken()");
                if (!result) {
                    const scopeDetail = scopeString ? "The requested scopes [".concat(scopeString, "] are not available on the existing token.") : "The OAuth refresh token has likely been revoked or expired.";
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable(providerId, "".concat(scopeDetail, " The user needs to re-authorize by calling `linkConnectedAccount` or using `getOrLinkConnectedAccount`.")));
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(result);
            }
        };
    }
    _serverUserFromCrud(crud) {
        const app = this;
        async function getConnectedAccount(idOrAccount, options) {
            var _options_scopes;
            var _options_scopes_join;
            const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
            if (typeof idOrAccount === "object" && "provider" in idOrAccount && "providerAccountId" in idOrAccount) {
                const { provider, providerAccountId } = idOrAccount;
                const found = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserConnectedAccountsCache.getOrWait([
                    crud.id
                ], "write-only")).find((a)=>a.provider === provider && a.providerAccountId === providerAccountId);
                if (!found) return null;
                return found;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserOAuthConnectionCache.getOrWait([
                crud.id,
                idOrAccount,
                scopeString,
                (options === null || options === void 0 ? void 0 : options.or) === "redirect"
            ], "write-only"));
        }
        function useConnectedAccount(idOrAccount, options) {
            var _options_scopes;
            var _options_scopes_join;
            const scopeString = (_options_scopes_join = options === null || options === void 0 ? void 0 : (_options_scopes = options.scopes) === null || _options_scopes === void 0 ? void 0 : _options_scopes.join(" ")) !== null && _options_scopes_join !== void 0 ? _options_scopes_join : "";
            if (typeof idOrAccount === "object" && "provider" in idOrAccount && "providerAccountId" in idOrAccount) {
                const { provider, providerAccountId } = idOrAccount;
                var _useAsyncCache_find;
                return (_useAsyncCache_find = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserConnectedAccountsCache, [
                    crud.id
                ], "user.useConnectedAccount()").find((a)=>a.provider === provider && a.providerAccountId === providerAccountId)) !== null && _useAsyncCache_find !== void 0 ? _useAsyncCache_find : null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserOAuthConnectionCache, [
                crud.id,
                idOrAccount,
                scopeString,
                (options === null || options === void 0 ? void 0 : options.or) === "redirect"
            ], "user.useConnectedAccount()");
        }
        const crudWithAdminRestriction = crud;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withUserDestructureGuard"])({
            ...super._createBaseUser(crud),
            lastActiveAt: new Date(crud.last_active_at_millis),
            serverMetadata: crud.server_metadata,
            restrictedByAdmin: crudWithAdminRestriction.restricted_by_admin,
            restrictedByAdminReason: crudWithAdminRestriction.restricted_by_admin_reason,
            restrictedByAdminPrivateDetails: crudWithAdminRestriction.restricted_by_admin_private_details,
            countryCode: crud.country_code,
            riskScores: {
                signUp: {
                    bot: crud.risk_scores.sign_up.bot,
                    freeTrialAbuse: crud.risk_scores.sign_up.free_trial_abuse
                }
            },
            async setPrimaryEmail (email, options) {
                await app._updateServerUser(crud.id, {
                    primaryEmail: email,
                    primaryEmailVerified: options === null || options === void 0 ? void 0 : options.verified
                });
            },
            async grantPermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string" && permissionId) {
                    const scope = scopeOrPermissionId;
                    await app._interface.grantServerTeamUserPermission(scope.id, crud.id, permissionId);
                    for (const recursive of [
                        true,
                        false
                    ]){
                        await app._serverTeamUserPermissionsCache.refresh([
                            scope.id,
                            crud.id,
                            recursive
                        ]);
                        await app._serverAllTeamMemberPermissionsCache.refresh([
                            scope.id,
                            recursive
                        ]);
                    }
                } else {
                    const pId = scopeOrPermissionId;
                    await app._interface.grantServerProjectPermission(crud.id, pId);
                    for (const recursive of [
                        true,
                        false
                    ])await app._serverUserProjectPermissionsCache.refresh([
                        crud.id,
                        recursive
                    ]);
                }
            },
            async revokePermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string" && permissionId) {
                    const scope = scopeOrPermissionId;
                    await app._interface.revokeServerTeamUserPermission(scope.id, crud.id, permissionId);
                    for (const recursive of [
                        true,
                        false
                    ]){
                        await app._serverTeamUserPermissionsCache.refresh([
                            scope.id,
                            crud.id,
                            recursive
                        ]);
                        await app._serverAllTeamMemberPermissionsCache.refresh([
                            scope.id,
                            recursive
                        ]);
                    }
                } else {
                    const pId = scopeOrPermissionId;
                    await app._interface.revokeServerProjectPermission(crud.id, pId);
                    for (const recursive of [
                        true,
                        false
                    ])await app._serverUserProjectPermissionsCache.refresh([
                        crud.id,
                        recursive
                    ]);
                }
            },
            async delete () {
                const res = await app._interface.deleteServerUser(crud.id);
                await app._refreshUsers();
                return res;
            },
            async createSession (options) {
                var _options_expiresInMillis, _options_isImpersonation;
                const tokens = await app._interface.createServerUserSession(crud.id, (_options_expiresInMillis = options.expiresInMillis) !== null && _options_expiresInMillis !== void 0 ? _options_expiresInMillis : 1e3 * 60 * 60 * 24 * 365, (_options_isImpersonation = options.isImpersonation) !== null && _options_isImpersonation !== void 0 ? _options_isImpersonation : false);
                return {
                    async getTokens () {
                        return tokens;
                    }
                };
            },
            async getActiveSessions () {
                return (await app._interface.listServerSessions(crud.id)).items.map((session)=>app._clientSessionFromCrud(session));
            },
            async revokeSession (sessionId) {
                await app._interface.deleteServerSession(sessionId);
            },
            async setDisplayName (displayName) {
                return await this.update({
                    displayName
                });
            },
            async setClientMetadata (metadata) {
                return await this.update({
                    clientMetadata: metadata
                });
            },
            async setClientReadOnlyMetadata (metadata) {
                return await this.update({
                    clientReadOnlyMetadata: metadata
                });
            },
            async setServerMetadata (metadata) {
                return await this.update({
                    serverMetadata: metadata
                });
            },
            async setSelectedTeam (team) {
                var _team_id;
                return await this.update({
                    selectedTeamId: typeof team === "string" ? team : (_team_id = team === null || team === void 0 ? void 0 : team.id) !== null && _team_id !== void 0 ? _team_id : null
                });
            },
            getConnectedAccount,
            useConnectedAccount,
            async listConnectedAccounts () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserConnectedAccountsCache.getOrWait([
                    crud.id
                ], "write-only"));
            },
            useConnectedAccounts () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserConnectedAccountsCache, [
                    crud.id
                ], "user.useConnectedAccounts()");
            },
            async linkConnectedAccount () {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("linkConnectedAccount is not available for server users. OAuth flows must be initiated on the client side.");
            },
            async getOrLinkConnectedAccount () {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("getOrLinkConnectedAccount is not available for server users. OAuth flows must be initiated on the client side.");
            },
            useOrLinkConnectedAccount () {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("useOrLinkConnectedAccount is not available for server users. OAuth flows must be initiated on the client side.");
            },
            selectedTeam: crud.selected_team ? app._serverTeamFromCrud(crud.selected_team) : null,
            async getTeam (teamId) {
                var _find;
                return (_find = (await this.listTeams()).find((t)=>t.id === teamId)) !== null && _find !== void 0 ? _find : null;
            },
            useTeam (teamId) {
                const teams = this.useTeams();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                    var _teams_find;
                    return (_teams_find = teams.find((t)=>t.id === teamId)) !== null && _teams_find !== void 0 ? _teams_find : null;
                }, [
                    teams,
                    teamId
                ]);
            },
            async listTeams (options) {
                var _result_pagination;
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverTeamsCache.getOrWait([
                    crud.id,
                    options === null || options === void 0 ? void 0 : options.orderBy,
                    options === null || options === void 0 ? void 0 : options.desc,
                    options === null || options === void 0 ? void 0 : options.cursor,
                    options === null || options === void 0 ? void 0 : options.limit,
                    options === null || options === void 0 ? void 0 : options.query
                ], "write-only"));
                const teams = result.items.map((t)=>app._serverTeamFromCrud(t));
                var _result_pagination_next_cursor;
                teams.nextCursor = (_result_pagination_next_cursor = (_result_pagination = result.pagination) === null || _result_pagination === void 0 ? void 0 : _result_pagination.next_cursor) !== null && _result_pagination_next_cursor !== void 0 ? _result_pagination_next_cursor : null;
                return teams;
            },
            useTeams (options) {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverTeamsCache, [
                    crud.id,
                    options === null || options === void 0 ? void 0 : options.orderBy,
                    options === null || options === void 0 ? void 0 : options.desc,
                    options === null || options === void 0 ? void 0 : options.cursor,
                    options === null || options === void 0 ? void 0 : options.limit,
                    options === null || options === void 0 ? void 0 : options.query
                ], "user.useTeams()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                    var _result_pagination;
                    const teams = result.items.map((t)=>app._serverTeamFromCrud(t));
                    var _result_pagination_next_cursor;
                    teams.nextCursor = (_result_pagination_next_cursor = (_result_pagination = result.pagination) === null || _result_pagination === void 0 ? void 0 : _result_pagination.next_cursor) !== null && _result_pagination_next_cursor !== void 0 ? _result_pagination_next_cursor : null;
                    return teams;
                }, [
                    result
                ]);
            },
            createTeam: async (data)=>{
                const team = await app._interface.createServerTeam((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTeamCreateOptionsToCrud"])({
                    creatorUserId: crud.id,
                    ...data
                }));
                await app._serverTeamsCache.refreshWhere(()=>true);
                await app._updateServerUser(crud.id, {
                    selectedTeamId: team.id
                });
                return app._serverTeamFromCrud(team);
            },
            leaveTeam: async (team)=>{
                await app._interface.leaveServerTeam({
                    teamId: team.id,
                    userId: crud.id
                });
                await app._refreshTeamMembership(team.id, crud.id);
            },
            async listTeamInvitations () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserTeamInvitationsCache.getOrWait([
                    crud.id
                ], "write-only")).map((inv)=>app._serverReceivedTeamInvitationFromCrud(crud.id, inv));
            },
            useTeamInvitations () {
                const invitations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserTeamInvitationsCache, [
                    crud.id
                ], "user.useTeamInvitations()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>invitations.map((inv)=>app._serverReceivedTeamInvitationFromCrud(crud.id, inv)), [
                    invitations
                ]);
            },
            async listPermissions (scopeOrOptions, options) {
                if (scopeOrOptions && "id" in scopeOrOptions) {
                    const scope = scopeOrOptions;
                    var _options_recursive;
                    const recursive = (_options_recursive = options === null || options === void 0 ? void 0 : options.recursive) !== null && _options_recursive !== void 0 ? _options_recursive : true;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverTeamUserPermissionsCache.getOrWait([
                        scope.id,
                        crud.id,
                        recursive
                    ], "write-only")).map((crud)=>app._serverPermissionFromCrud(crud));
                } else {
                    var _scopeOrOptions_recursive;
                    const recursive = (_scopeOrOptions_recursive = scopeOrOptions === null || scopeOrOptions === void 0 ? void 0 : scopeOrOptions.recursive) !== null && _scopeOrOptions_recursive !== void 0 ? _scopeOrOptions_recursive : true;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserProjectPermissionsCache.getOrWait([
                        crud.id,
                        recursive
                    ], "write-only")).map((crud)=>app._serverPermissionFromCrud(crud));
                }
            },
            usePermissions (scopeOrOptions, options) {
                if (scopeOrOptions && "id" in scopeOrOptions) {
                    const scope = scopeOrOptions;
                    var _options_recursive;
                    const recursive = (_options_recursive = options === null || options === void 0 ? void 0 : options.recursive) !== null && _options_recursive !== void 0 ? _options_recursive : true;
                    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverTeamUserPermissionsCache, [
                        scope.id,
                        crud.id,
                        recursive
                    ], "user.usePermissions()");
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>permissions.map((crud)=>app._serverPermissionFromCrud(crud)), [
                        permissions
                    ]);
                } else {
                    var _scopeOrOptions_recursive;
                    const recursive = (_scopeOrOptions_recursive = scopeOrOptions === null || scopeOrOptions === void 0 ? void 0 : scopeOrOptions.recursive) !== null && _scopeOrOptions_recursive !== void 0 ? _scopeOrOptions_recursive : true;
                    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserProjectPermissionsCache, [
                        crud.id,
                        recursive
                    ], "user.usePermissions()");
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>permissions.map((crud)=>app._serverPermissionFromCrud(crud)), [
                        permissions
                    ]);
                }
            },
            async getPermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string") {
                    const scope = scopeOrPermissionId;
                    var _find;
                    return (_find = (await this.listPermissions(scope)).find((p)=>p.id === permissionId)) !== null && _find !== void 0 ? _find : null;
                } else {
                    const pid = scopeOrPermissionId;
                    var _find1;
                    return (_find1 = (await this.listPermissions()).find((p)=>p.id === pid)) !== null && _find1 !== void 0 ? _find1 : null;
                }
            },
            usePermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string") {
                    const scope = scopeOrPermissionId;
                    const permissions = this.usePermissions(scope);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                        var _permissions_find;
                        return (_permissions_find = permissions.find((p)=>p.id === permissionId)) !== null && _permissions_find !== void 0 ? _permissions_find : null;
                    }, [
                        permissions,
                        permissionId
                    ]);
                } else {
                    const pid = scopeOrPermissionId;
                    const permissions = this.usePermissions();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                        var _permissions_find;
                        return (_permissions_find = permissions.find((p)=>p.id === pid)) !== null && _permissions_find !== void 0 ? _permissions_find : null;
                    }, [
                        permissions,
                        pid
                    ]);
                }
            },
            async hasPermission (scopeOrPermissionId, permissionId) {
                if (scopeOrPermissionId && typeof scopeOrPermissionId !== "string") {
                    const scope = scopeOrPermissionId;
                    return await this.getPermission(scope, permissionId) !== null;
                } else {
                    const pid = scopeOrPermissionId;
                    return await this.getPermission(pid) !== null;
                }
            },
            async update (update) {
                await app._updateServerUser(crud.id, update);
            },
            async sendVerificationEmail () {
                return await app._checkFeatureSupport("sendVerificationEmail() on ServerUser", {});
            },
            async updatePassword (options) {
                const result = await app._interface.updatePassword(options);
                await app._serverUserCache.refresh([
                    crud.id
                ]);
                return result;
            },
            async setPassword (options) {
                const result = await this.update(options);
                await app._serverUserCache.refresh([
                    crud.id
                ]);
                return result;
            },
            async getTeamProfile (team) {
                const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserTeamProfileCache.getOrWait([
                    team.id,
                    crud.id
                ], "write-only"));
                return app._serverEditableTeamProfileFromCrud(result);
            },
            useTeamProfile (team) {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserTeamProfileCache, [
                    team.id,
                    crud.id
                ], "user.useTeamProfile()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>app._serverEditableTeamProfileFromCrud(result), [
                    result
                ]);
            },
            async listContactChannels () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverContactChannelsCache.getOrWait([
                    crud.id
                ], "write-only")).map((data)=>app._serverContactChannelFromCrud(crud.id, data));
            },
            useContactChannels () {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverContactChannelsCache, [
                    crud.id
                ], "user.useContactChannels()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>result.map((data)=>app._serverContactChannelFromCrud(crud.id, data)), [
                    result
                ]);
            },
            createContactChannel: async (data)=>{
                const contactChannel = await app._interface.createServerContactChannel((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$contact$2d$channels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverContactChannelCreateOptionsToCrud"])(crud.id, data));
                await Promise.all([
                    app._serverContactChannelsCache.refresh([
                        crud.id
                    ]),
                    app._serverUserCache.refresh([
                        crud.id
                    ])
                ]);
                return app._serverContactChannelFromCrud(crud.id, contactChannel);
            },
            useNotificationCategories () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverNotificationCategoriesCache, [
                    crud.id
                ], "user.useNotificationCategories()").map((category)=>app._serverNotificationCategoryFromCrud(crud.id, category));
            },
            async listNotificationCategories () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverNotificationCategoriesCache.getOrWait([
                    crud.id
                ], "write-only")).map((category)=>app._serverNotificationCategoryFromCrud(crud.id, category));
            },
            useApiKeys () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverUserApiKeysCache, [
                    crud.id
                ], "user.useApiKeys()").map((apiKey)=>app._serverApiKeyFromCrud(apiKey));
            },
            async listApiKeys () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverUserApiKeysCache.getOrWait([
                    crud.id
                ], "write-only")).map((apiKey)=>app._serverApiKeyFromCrud(apiKey));
            },
            async createApiKey (options) {
                const result = await app._interface.createProjectApiKey(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiKeyCreationOptionsToCrud"])("user", crud.id, options), null, "server");
                await app._serverUserApiKeysCache.refresh([
                    crud.id
                ]);
                return app._serverApiKeyFromCrud(result);
            },
            useOAuthProviders () {
                const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverOAuthProvidersCache, [
                    crud.id
                ], "user.useOAuthProviders()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>results.map((oauthCrud)=>app._serverOAuthProviderFromCrud(oauthCrud)), [
                    results
                ]);
            },
            async listOAuthProviders () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverOAuthProvidersCache.getOrWait([
                    crud.id
                ], "write-only")).map((oauthCrud)=>app._serverOAuthProviderFromCrud(oauthCrud));
            },
            useOAuthProvider (id) {
                const providers = this.useOAuthProviders();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                    var _providers_find;
                    return (_providers_find = providers.find((p)=>p.id === id)) !== null && _providers_find !== void 0 ? _providers_find : null;
                }, [
                    providers,
                    id
                ]);
            },
            async getOAuthProvider (id) {
                var _find;
                return (_find = (await this.listOAuthProviders()).find((p)=>p.id === id)) !== null && _find !== void 0 ? _find : null;
            },
            async registerPasskey (options) {
                var _this;
                const hostname = (options === null || options === void 0 ? void 0 : options.hostname) || ((_this = await app._getCurrentUrl()) === null || _this === void 0 ? void 0 : _this.hostname);
                if (!hostname) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("hostname must be provided if the Stack App does not have a redirect method");
                const initiationResult = await app._interface.initiateServerPasskeyRegistration(crud.id);
                if (initiationResult.status !== "ok") return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyRegistrationFailed("Failed to get initiation options for passkey registration"));
                const { options_json, code } = initiationResult.data;
                if (options_json.rp.id !== "THIS_VALUE_WILL_BE_REPLACED.example.com") throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Expected returned RP ID from server to equal sentinel, but found ".concat(options_json.rp.id));
                options_json.rp.id = hostname;
                let attResp;
                try {
                    attResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startRegistration"])({
                        optionsJSON: options_json
                    });
                } catch (error) {
                    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$3$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$webAuthnError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebAuthnError"]) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyWebAuthnError(error.message, error.name));
                    else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("passkey-registration-failed", error);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyRegistrationFailed("Failed to start passkey registration due to unknown error"));
                    }
                }
                const { accessToken, refreshToken } = await app._interface.createServerUserSession(crud.id, 6e4 * 2, false);
                const tempSession = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalSession"]({
                    accessToken,
                    refreshToken,
                    refreshAccessTokenCallback: async ()=>null
                });
                const registrationResult = await app._interface.registerPasskey({
                    credential: attResp,
                    code
                }, tempSession);
                await app._serverUserCache.refresh([
                    crud.id
                ]);
                return registrationResult;
            },
            ...app._createServerCustomer(crud.id, "user")
        });
    }
    _serverTeamUserFromCrud(crud) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withUserDestructureGuard"])({
            ...this._serverUserFromCrud(crud.user),
            teamProfile: {
                displayName: crud.display_name,
                profileImageUrl: crud.profile_image_url
            }
        });
    }
    _serverSentTeamInvitationFromCrud(crud) {
        return {
            id: crud.id,
            recipientEmail: crud.recipient_email,
            expiresAt: new Date(crud.expires_at_millis),
            revoke: async ()=>{
                await this._interface.revokeServerTeamInvitation(crud.id, crud.team_id);
                await this._serverTeamInvitationsCache.refresh([
                    crud.team_id
                ]);
            }
        };
    }
    _serverReceivedTeamInvitationFromCrud(userId, crud) {
        const app = this;
        return {
            id: crud.id,
            teamId: crud.team_id,
            teamDisplayName: crud.team_display_name,
            recipientEmail: crud.recipient_email,
            expiresAt: new Date(crud.expires_at_millis),
            accept: async ()=>{
                await app._interface.acceptServerTeamInvitationById(crud.id, userId);
                await Promise.all([
                    app._serverUserTeamInvitationsCache.refresh([
                        userId
                    ]),
                    app._serverTeamInvitationsCache.refresh([
                        crud.team_id
                    ]),
                    app._refreshTeamMembership(crud.team_id, userId)
                ]);
            }
        };
    }
    _currentUserFromCrud(crud, session) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withUserDestructureGuard"])({
            ...this._serverUserFromCrud(crud),
            ...this._createAuth(session),
            ...this._isInternalProject() ? this._createInternalUserExtra(session) : {}
        });
    }
    _serverTeamFromCrud(crud) {
        const app = this;
        return {
            id: crud.id,
            displayName: crud.display_name,
            profileImageUrl: crud.profile_image_url,
            createdAt: new Date(crud.created_at_millis),
            clientMetadata: crud.client_metadata,
            clientReadOnlyMetadata: crud.client_read_only_metadata,
            serverMetadata: crud.server_metadata,
            async update (update) {
                await app._interface.updateServerTeam(crud.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTeamUpdateOptionsToCrud"])(update));
                await Promise.all([
                    app._serverTeamsCache.refreshWhere(()=>true),
                    app._serverUsersCache.refreshWhere(()=>true)
                ]);
            },
            async delete () {
                await app._interface.deleteServerTeam(crud.id);
                await Promise.all([
                    app._serverTeamsCache.refreshWhere(()=>true),
                    app._serverUsersCache.refreshWhere(()=>true)
                ]);
            },
            async listUsers () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverTeamMemberProfilesCache.getOrWait([
                    crud.id
                ], "write-only")).map((u)=>app._serverTeamUserFromCrud(u));
            },
            useUsers () {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverTeamMemberProfilesCache, [
                    crud.id
                ], "team.useUsers()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>result.map((u)=>app._serverTeamUserFromCrud(u)), [
                    result
                ]);
            },
            async addUser (userId) {
                await app._interface.addServerUserToTeam({
                    teamId: crud.id,
                    userId
                });
                await app._refreshTeamMembership(crud.id, userId);
            },
            async removeUser (userId) {
                await app._interface.removeServerUserFromTeam({
                    teamId: crud.id,
                    userId
                });
                await app._refreshTeamMembership(crud.id, userId);
            },
            async inviteUser (options) {
                var _options_callbackUrl;
                await app._interface.sendServerTeamInvitation({
                    teamId: crud.id,
                    email: options.email,
                    callbackUrl: (_options_callbackUrl = options.callbackUrl) !== null && _options_callbackUrl !== void 0 ? _options_callbackUrl : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructRedirectUrl"])(app.urls.teamInvitation, "callbackUrl")
                });
                await app._serverTeamInvitationsCache.refresh([
                    crud.id
                ]);
            },
            async listInvitations () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverTeamInvitationsCache.getOrWait([
                    crud.id
                ], "write-only")).map((crud)=>app._serverSentTeamInvitationFromCrud(crud));
            },
            useInvitations () {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverTeamInvitationsCache, [
                    crud.id
                ], "team.useInvitations()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>result.map((crud)=>app._serverSentTeamInvitationFromCrud(crud)), [
                    result
                ]);
            },
            useApiKeys () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._serverTeamApiKeysCache, [
                    crud.id
                ], "team.useApiKeys()").map((apiKey)=>app._serverApiKeyFromCrud(apiKey));
            },
            async listApiKeys () {
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await app._serverTeamApiKeysCache.getOrWait([
                    crud.id
                ], "write-only")).map((apiKey)=>app._serverApiKeyFromCrud(apiKey));
            },
            async createApiKey (options) {
                const result = await app._interface.createProjectApiKey(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiKeyCreationOptionsToCrud"])("team", crud.id, options), null, "server");
                await app._serverTeamApiKeysCache.refresh([
                    crud.id
                ]);
                return app._serverApiKeyFromCrud(result);
            },
            ...app._createServerCustomer(crud.id, "team")
        };
    }
    _serverItemFromCrud(customer, crud) {
        const app = this;
        return {
            displayName: crud.display_name,
            quantity: crud.quantity,
            nonNegativeQuantity: Math.max(0, crud.quantity),
            increaseQuantity: async (delta)=>{
                const updateOptions = customer.type === "user" ? {
                    itemId: crud.id,
                    userId: customer.id
                } : customer.type === "team" ? {
                    itemId: crud.id,
                    teamId: customer.id
                } : {
                    itemId: crud.id,
                    customCustomerId: customer.id
                };
                await app._interface.updateItemQuantity(updateOptions, {
                    delta
                });
                if (customer.type === "user") await app._serverUserItemsCache.refresh([
                    customer.id,
                    crud.id
                ]);
                else if (customer.type === "team") await app._serverTeamItemsCache.refresh([
                    customer.id,
                    crud.id
                ]);
                else await app._serverCustomItemsCache.refresh([
                    customer.id,
                    crud.id
                ]);
            },
            decreaseQuantity: async (delta)=>{
                const updateOptions = customer.type === "user" ? {
                    itemId: crud.id,
                    userId: customer.id
                } : customer.type === "team" ? {
                    itemId: crud.id,
                    teamId: customer.id
                } : {
                    itemId: crud.id,
                    customCustomerId: customer.id
                };
                await app._interface.updateItemQuantity(updateOptions, {
                    delta: -delta,
                    allow_negative: true
                });
                if (customer.type === "user") await app._serverUserItemsCache.refresh([
                    customer.id,
                    crud.id
                ]);
                else if (customer.type === "team") await app._serverTeamItemsCache.refresh([
                    customer.id,
                    crud.id
                ]);
                else await app._serverCustomItemsCache.refresh([
                    customer.id,
                    crud.id
                ]);
            },
            tryDecreaseQuantity: async (delta)=>{
                try {
                    const updateOptions = customer.type === "user" ? {
                        itemId: crud.id,
                        userId: customer.id
                    } : customer.type === "team" ? {
                        itemId: crud.id,
                        teamId: customer.id
                    } : {
                        itemId: crud.id,
                        customCustomerId: customer.id
                    };
                    await app._interface.updateItemQuantity(updateOptions, {
                        delta: -delta
                    });
                    if (customer.type === "user") await app._serverUserItemsCache.refresh([
                        customer.id,
                        crud.id
                    ]);
                    else if (customer.type === "team") await app._serverTeamItemsCache.refresh([
                        customer.id,
                        crud.id
                    ]);
                    else await app._serverCustomItemsCache.refresh([
                        customer.id,
                        crud.id
                    ]);
                    return true;
                } catch (error) {
                    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].ItemQuantityInsufficientAmount) return false;
                    throw error;
                }
            }
        };
    }
    async _getUserApiKey(options) {
        const crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverCheckApiKeyCache.getOrWait([
            "user",
            options.apiKey
        ], "write-only"));
        return crud ? this._serverApiKeyFromCrud(crud) : null;
    }
    async _getTeamApiKey(options) {
        const crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverCheckApiKeyCache.getOrWait([
            "team",
            options.apiKey
        ], "write-only"));
        return crud ? this._serverApiKeyFromCrud(crud) : null;
    }
    _useUserApiKey(options) {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverCheckApiKeyCache, [
            "user",
            options.apiKey
        ], "serverApp.useUserApiKey()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>crud ? this._serverApiKeyFromCrud(crud) : null, [
            crud
        ]);
    }
    _useTeamApiKey(options) {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverCheckApiKeyCache, [
            "team",
            options.apiKey
        ], "serverApp.useTeamApiKey()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>crud ? this._serverApiKeyFromCrud(crud) : null, [
            crud
        ]);
    }
    async _getUserByApiKey(apiKey) {
        const apiKeyObject = await this._getUserApiKey({
            apiKey
        });
        if (apiKeyObject === null) return null;
        return await this.getServerUserById(apiKeyObject.userId);
    }
    async _getUserByConvex(ctx, includeAnonymous) {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) return null;
        const user = await this.getServerUserById(identity.subject);
        if ((user === null || user === void 0 ? void 0 : user.isAnonymous) && !includeAnonymous) return null;
        return user;
    }
    _useUserByConvex(ctx, includeAnonymous) {
        const subject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._convexIdentitySubjectCache, [
            ctx
        ], "serverApp.useUserByConvex()");
        if (subject === null) return null;
        const user = this.useUserById(subject);
        if ((user === null || user === void 0 ? void 0 : user.isAnonymous) && !includeAnonymous) return null;
        return user;
    }
    _useUserByApiKey(apiKey) {
        const apiKeyObject = this._useUserApiKey({
            apiKey
        });
        if (apiKeyObject === null) return null;
        return this.useUserById(apiKeyObject.userId);
    }
    async _getTeamByApiKey(apiKey) {
        const apiKeyObject = await this._getTeamApiKey({
            apiKey
        });
        if (apiKeyObject === null) return null;
        return await this.getTeam(apiKeyObject.teamId);
    }
    _useTeamByApiKey(apiKey) {
        const apiKeyObject = this._useTeamApiKey({
            apiKey
        });
        if (apiKeyObject === null) return null;
        return this.useTeam(apiKeyObject.teamId);
    }
    async createUser(options) {
        const crud = await this._interface.createServerUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$users$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverUserCreateOptionsToCrud"])(options));
        await this._refreshUsers();
        return this._serverUserFromCrud(crud);
    }
    async getUser(options) {
        if (typeof options === "string") return await this.getServerUserById(options);
        else if (typeof options === "object" && "apiKey" in options) return await this._getUserByApiKey(options.apiKey);
        else if (typeof options === "object" && "from" in options && options.from === "convex") return await this._getUserByConvex(options.ctx, "or" in options && options.or === "anonymous");
        else {
            options = options;
            if ((options === null || options === void 0 ? void 0 : options.or) === "anonymous" && options.includeRestricted === false) throw new Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");
            this._ensurePersistentTokenStore(options === null || options === void 0 ? void 0 : options.tokenStore);
            const session = await this._getSession(options === null || options === void 0 ? void 0 : options.tokenStore);
            let crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._currentServerUserCache.getOrWait([
                session
            ], "write-only"));
            const includeAnonymous = (options === null || options === void 0 ? void 0 : options.or) === "anonymous" || (options === null || options === void 0 ? void 0 : options.or) === "anonymous-if-exists[deprecated]";
            const includeRestricted = (options === null || options === void 0 ? void 0 : options.includeRestricted) === true || includeAnonymous;
            if (crud === null || crud.is_anonymous && !includeAnonymous || crud.is_restricted && !includeRestricted) switch(options === null || options === void 0 ? void 0 : options.or){
                case "redirect":
                    if (!(crud === null || crud === void 0 ? void 0 : crud.is_anonymous) && (crud === null || crud === void 0 ? void 0 : crud.is_restricted)) await this.redirectToOnboarding({
                        replace: true
                    });
                    else await this.redirectToSignIn({
                        replace: true
                    });
                    break;
                case "throw":
                    throw new Error("User is not signed in but getUser was called with { or: 'throw' }");
                case "anonymous":
                    {
                        const tokens = await this._signUpAnonymously();
                        var _ref;
                        return (_ref = await this.getUser({
                            tokenStore: tokens,
                            or: "anonymous-if-exists[deprecated]",
                            includeRestricted: true
                        })) !== null && _ref !== void 0 ? _ref : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Something went wrong while signing up anonymously");
                    }
                case void 0:
                case "anonymous-if-exists[deprecated]":
                case "return-null":
                    return null;
            }
            return crud && this._currentUserFromCrud(crud, session);
        }
    }
    async getServerUser() {
        console.warn("stackServerApp.getServerUser is deprecated; use stackServerApp.getUser instead");
        return await this.getUser();
    }
    async getServerUserById(userId) {
        const crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverUserCache.getOrWait([
            userId
        ], "write-only"));
        return crud && this._serverUserFromCrud(crud);
    }
    useUser(options) {
        if (typeof options === "string") return this.useUserById(options);
        else if (typeof options === "object" && "apiKey" in options) return this._useUserByApiKey(options.apiKey);
        else if (typeof options === "object" && "from" in options && options.from === "convex") return this._useUserByConvex(options.ctx, "or" in options && options.or === "anonymous");
        else {
            options = options;
            if ((options === null || options === void 0 ? void 0 : options.or) === "anonymous" && options.includeRestricted === false) throw new Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");
            this._ensurePersistentTokenStore(options === null || options === void 0 ? void 0 : options.tokenStore);
            const session = this._useSession(options === null || options === void 0 ? void 0 : options.tokenStore);
            let crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._currentServerUserCache, [
                session
            ], "serverApp.useUser()");
            (options === null || options === void 0 ? void 0 : options.or) === "anonymous" || (options === null || options === void 0 ? void 0 : options.or);
            options === null || options === void 0 ? void 0 : options.includeRestricted;
            if (crud === null) switch(options === null || options === void 0 ? void 0 : options.or){
                case "redirect":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(this.redirectToSignIn({
                        replace: true
                    }));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])();
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("suspend should never return");
                case "throw":
                    throw new Error("User is not signed in but useUser was called with { or: 'throw' }");
                case "anonymous":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
                        await this._signUpAnonymously();
                        if (typeof window !== "undefined") window.location.reload();
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])();
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("suspend should never return");
                case void 0:
                case "anonymous-if-exists[deprecated]":
                case "return-null":
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                return crud && this._currentUserFromCrud(crud, session);
            }, [
                crud,
                session,
                options === null || options === void 0 ? void 0 : options.or
            ]);
        }
    }
    useUserById(userId) {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverUserCache, [
            userId
        ], "serverApp.useUserById()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud && this._serverUserFromCrud(crud);
        }, [
            crud
        ]);
    }
    async listUsers(options) {
        var _crud_pagination;
        const crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverUsersCache.getOrWait([
            options === null || options === void 0 ? void 0 : options.cursor,
            options === null || options === void 0 ? void 0 : options.limit,
            options === null || options === void 0 ? void 0 : options.orderBy,
            options === null || options === void 0 ? void 0 : options.desc,
            options === null || options === void 0 ? void 0 : options.query,
            options === null || options === void 0 ? void 0 : options.includeRestricted,
            options === null || options === void 0 ? void 0 : options.includeAnonymous,
            options === null || options === void 0 ? void 0 : options.onlyAnonymous,
            options === null || options === void 0 ? void 0 : options.teamId
        ], "write-only"));
        const result = crud.items.map((j)=>this._serverUserFromCrud(j));
        var _crud_pagination_next_cursor;
        result.nextCursor = (_crud_pagination_next_cursor = (_crud_pagination = crud.pagination) === null || _crud_pagination === void 0 ? void 0 : _crud_pagination.next_cursor) !== null && _crud_pagination_next_cursor !== void 0 ? _crud_pagination_next_cursor : null;
        return result;
    }
    useUsers(options) {
        var _crud_pagination;
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverUsersCache, [
            options === null || options === void 0 ? void 0 : options.cursor,
            options === null || options === void 0 ? void 0 : options.limit,
            options === null || options === void 0 ? void 0 : options.orderBy,
            options === null || options === void 0 ? void 0 : options.desc,
            options === null || options === void 0 ? void 0 : options.query,
            options === null || options === void 0 ? void 0 : options.includeRestricted,
            options === null || options === void 0 ? void 0 : options.includeAnonymous,
            options === null || options === void 0 ? void 0 : options.onlyAnonymous,
            options === null || options === void 0 ? void 0 : options.teamId
        ], "serverApp.useUsers()");
        const result = crud.items.map((j)=>this._serverUserFromCrud(j));
        var _crud_pagination_next_cursor;
        result.nextCursor = (_crud_pagination_next_cursor = (_crud_pagination = crud.pagination) === null || _crud_pagination === void 0 ? void 0 : _crud_pagination.next_cursor) !== null && _crud_pagination_next_cursor !== void 0 ? _crud_pagination_next_cursor : null;
        return result;
    }
    _serverPermissionFromCrud(crud) {
        return {
            id: crud.id
        };
    }
    _serverTeamPermissionDefinitionFromCrud(crud) {
        return {
            id: crud.id,
            description: crud.description,
            containedPermissionIds: crud.contained_permission_ids
        };
    }
    _serverProjectPermissionDefinitionFromCrud(crud) {
        return {
            id: crud.id,
            description: crud.description,
            containedPermissionIds: crud.contained_permission_ids
        };
    }
    async getItem(options) {
        if ("userId" in options) {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverUserItemsCache.getOrWait([
                options.userId,
                options.itemId
            ], "write-only"));
            return this._serverItemFromCrud({
                type: "user",
                id: options.userId
            }, result);
        } else if ("teamId" in options) {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverTeamItemsCache.getOrWait([
                options.teamId,
                options.itemId
            ], "write-only"));
            return this._serverItemFromCrud({
                type: "team",
                id: options.teamId
            }, result);
        } else {
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverCustomItemsCache.getOrWait([
                options.customCustomerId,
                options.itemId
            ], "write-only"));
            return this._serverItemFromCrud({
                type: "custom",
                id: options.customCustomerId
            }, result);
        }
    }
    async listProducts(options) {
        if ("userId" in options) {
            var _options_cursor, _options_limit;
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverUserProductsCache.getOrWait([
                options.userId,
                (_options_cursor = options.cursor) !== null && _options_cursor !== void 0 ? _options_cursor : null,
                (_options_limit = options.limit) !== null && _options_limit !== void 0 ? _options_limit : null
            ], "write-only"));
            return this._customerProductsFromResponse(response);
        } else if ("teamId" in options) {
            var _options_cursor1, _options_limit1;
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverTeamProductsCache.getOrWait([
                options.teamId,
                (_options_cursor1 = options.cursor) !== null && _options_cursor1 !== void 0 ? _options_cursor1 : null,
                (_options_limit1 = options.limit) !== null && _options_limit1 !== void 0 ? _options_limit1 : null
            ], "write-only"));
            return this._customerProductsFromResponse(response);
        }
        var _options_cursor2, _options_limit2;
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverCustomProductsCache.getOrWait([
            options.customCustomerId,
            (_options_cursor2 = options.cursor) !== null && _options_cursor2 !== void 0 ? _options_cursor2 : null,
            (_options_limit2 = options.limit) !== null && _options_limit2 !== void 0 ? _options_limit2 : null
        ], "write-only"));
        return this._customerProductsFromResponse(response);
    }
    useItem(options) {
        let type;
        let id;
        let cache;
        if ("userId" in options) {
            type = "user";
            id = options.userId;
            cache = this._serverUserItemsCache;
        } else if ("teamId" in options) {
            type = "team";
            id = options.teamId;
            cache = this._serverTeamItemsCache;
        } else {
            type = "custom";
            id = options.customCustomerId;
            cache = this._serverCustomItemsCache;
        }
        const cacheKey = [
            id,
            options.itemId
        ];
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(cache, cacheKey, "serverApp.useItem()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>this._serverItemFromCrud({
                type,
                id
            }, result), [
            result
        ]);
    }
    async grantProduct(options) {
        let customerType;
        let customerId;
        if ("userId" in options) {
            customerType = "user";
            customerId = options.userId;
        } else if ("teamId" in options) {
            customerType = "team";
            customerId = options.teamId;
        } else {
            customerType = "custom";
            customerId = options.customCustomerId;
        }
        await this._interface.grantProduct({
            customerType,
            customerId,
            productId: "productId" in options ? options.productId : void 0,
            product: "product" in options ? options.product : void 0,
            quantity: options.quantity
        });
        await (customerType === "user" ? this._serverUserProductsCache : customerType === "team" ? this._serverTeamProductsCache : this._serverCustomProductsCache).refresh([
            customerId,
            null,
            null
        ]);
    }
    async createTeam(data) {
        const team = await this._interface.createServerTeam((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$teams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTeamCreateOptionsToCrud"])(data));
        await this._serverTeamsCache.refreshWhere(()=>true);
        return this._serverTeamFromCrud(team);
    }
    async listTeams(options) {
        var _crud_pagination;
        const crud = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverTeamsCache.getOrWait([
            void 0,
            options === null || options === void 0 ? void 0 : options.orderBy,
            options === null || options === void 0 ? void 0 : options.desc,
            options === null || options === void 0 ? void 0 : options.cursor,
            options === null || options === void 0 ? void 0 : options.limit,
            options === null || options === void 0 ? void 0 : options.query
        ], "write-only"));
        const teams = crud.items.map((t)=>this._serverTeamFromCrud(t));
        var _crud_pagination_next_cursor;
        teams.nextCursor = (_crud_pagination_next_cursor = (_crud_pagination = crud.pagination) === null || _crud_pagination === void 0 ? void 0 : _crud_pagination.next_cursor) !== null && _crud_pagination_next_cursor !== void 0 ? _crud_pagination_next_cursor : null;
        return teams;
    }
    useTeams(options) {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverTeamsCache, [
            void 0,
            options === null || options === void 0 ? void 0 : options.orderBy,
            options === null || options === void 0 ? void 0 : options.desc,
            options === null || options === void 0 ? void 0 : options.cursor,
            options === null || options === void 0 ? void 0 : options.limit,
            options === null || options === void 0 ? void 0 : options.query
        ], "serverApp.useTeams()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            var _crud_pagination;
            const teams = crud.items.map((t)=>this._serverTeamFromCrud(t));
            var _crud_pagination_next_cursor;
            teams.nextCursor = (_crud_pagination_next_cursor = (_crud_pagination = crud.pagination) === null || _crud_pagination === void 0 ? void 0 : _crud_pagination.next_cursor) !== null && _crud_pagination_next_cursor !== void 0 ? _crud_pagination_next_cursor : null;
            return teams;
        }, [
            crud
        ]);
    }
    async listTeamMemberPermissions(teamId, options) {
        var _options_recursive;
        const recursive = (_options_recursive = options === null || options === void 0 ? void 0 : options.recursive) !== null && _options_recursive !== void 0 ? _options_recursive : false;
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverAllTeamMemberPermissionsCache.getOrWait([
            teamId,
            recursive
        ], "write-only")).map((r)=>({
                userId: r.user_id,
                permissionId: r.id
            }));
    }
    useTeamMemberPermissions(teamId, options) {
        var _options_recursive;
        const recursive = (_options_recursive = options === null || options === void 0 ? void 0 : options.recursive) !== null && _options_recursive !== void 0 ? _options_recursive : false;
        const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverAllTeamMemberPermissionsCache, [
            teamId,
            recursive
        ], "serverApp.useTeamMemberPermissions()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>rows.map((r)=>({
                    userId: r.user_id,
                    permissionId: r.id
                })), [
            rows
        ]);
    }
    async getTeam(options) {
        if (typeof options === "object" && "apiKey" in options) return await this._getTeamByApiKey(options.apiKey);
        else {
            const teamId = options;
            var _find;
            return (_find = (await this.listTeams()).find((t)=>t.id === teamId)) !== null && _find !== void 0 ? _find : null;
        }
    }
    useTeam(options) {
        if (typeof options === "object" && "apiKey" in options) return this._useTeamByApiKey(options.apiKey);
        else {
            const teamId = options;
            const teams = this.useTeams();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
                var _teams_find;
                return (_teams_find = teams.find((t)=>t.id === teamId)) !== null && _teams_find !== void 0 ? _teams_find : null;
            }, [
                teams,
                teamId
            ]);
        }
    }
    _createServerDataVaultStore(id) {
        const validateOptions = (options)=>{
            if (typeof options.secret !== "string") throw new Error("secret must be a string, got " + typeof options.secret);
        };
        return {
            id,
            setValue: async (key, value, options)=>{
                validateOptions(options);
                await this._interface.setDataVaultStoreValue(options.secret, id, key, value);
            },
            getValue: async (key, options)=>{
                validateOptions(options);
                return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverDataVaultStoreValueCache.getOrWait([
                    id,
                    key,
                    options.secret
                ], "write-only"));
            },
            useValue: (key, options)=>{
                validateOptions(options);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverDataVaultStoreValueCache, [
                    id,
                    key,
                    options.secret
                ], "store.useValue()");
            }
        };
    }
    async getDataVaultStore(id) {
        return this._createServerDataVaultStore(id);
    }
    useDataVaultStore(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>this._createServerDataVaultStore(id), [
            id
        ]);
    }
    async sendEmail(options) {
        await this._interface.sendEmail(options);
        await this._emailDeliveryInfoCache.refresh([]);
    }
    async getEmailDeliveryStats() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._emailDeliveryInfoCache.getOrWait([], "write-only"));
    }
    useEmailDeliveryStats() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._emailDeliveryInfoCache, [], "stackServerApp.useEmailDeliveryStats()");
    }
    async activateEmailCapacityBoost() {
        await this._interface.activateEmailCapacityBoost();
        await this._emailDeliveryInfoCache.refresh([]);
    }
    async _refreshSession(session) {
        await Promise.all([
            super._refreshUser(session),
            this._currentServerUserCache.refresh([
                session
            ])
        ]);
    }
    async _refreshUsers() {
        await Promise.all([
            super._refreshUsers(),
            this._serverUserCache.refreshWhere(()=>true),
            this._serverUsersCache.refreshWhere(()=>true),
            this._serverContactChannelsCache.refreshWhere(()=>true),
            this._serverOAuthProvidersCache.refreshWhere(()=>true),
            this._serverUserConnectedAccountsCache.refreshWhere(()=>true)
        ]);
    }
    async createOAuthProvider(options) {
        try {
            const crud = await this._interface.createServerOAuthProvider({
                user_id: options.userId,
                provider_config_id: options.providerConfigId,
                account_id: options.accountId,
                email: options.email,
                allow_sign_in: options.allowSignIn,
                allow_connected_accounts: options.allowConnectedAccounts
            });
            await Promise.all([
                this._serverOAuthProvidersCache.refresh([
                    options.userId
                ]),
                this._serverUserConnectedAccountsCache.refresh([
                    options.userId
                ])
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(this._serverOAuthProviderFromCrud(crud));
        } catch (error) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthProviderAccountIdAlreadyUsedForSignIn.isInstance(error)) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(error);
            throw error;
        }
    }
    constructor(options, extraOptions){
        const resolvedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveConstructorOptions"])(options);
        var _resolvedOptions_publishableClientKey;
        const publishableClientKey = (_resolvedOptions_publishableClientKey = resolvedOptions.publishableClientKey) !== null && _resolvedOptions_publishableClientKey !== void 0 ? _resolvedOptions_publishableClientKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultPublishableClientKey"])();
        var _extraOptions_interface;
        super(resolvedOptions, {
            ...extraOptions,
            interface: (_extraOptions_interface = extraOptions === null || extraOptions === void 0 ? void 0 : extraOptions.interface) !== null && _extraOptions_interface !== void 0 ? _extraOptions_interface : (()=>{
                const apiUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveApiUrls"])(resolvedOptions.baseUrl);
                var _resolvedOptions_projectId, _resolvedOptions_extraRequestHeaders, _resolvedOptions_secretServerKey;
                return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$server$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveServerInterface"]({
                    getBaseUrl: ()=>apiUrls()[0],
                    getApiUrls: apiUrls,
                    projectId: (_resolvedOptions_projectId = resolvedOptions.projectId) !== null && _resolvedOptions_projectId !== void 0 ? _resolvedOptions_projectId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultProjectId"])(),
                    extraRequestHeaders: (_resolvedOptions_extraRequestHeaders = resolvedOptions.extraRequestHeaders) !== null && _resolvedOptions_extraRequestHeaders !== void 0 ? _resolvedOptions_extraRequestHeaders : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultExtraRequestHeaders"])(),
                    clientVersion: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientVersion"],
                    ...publishableClientKey != null ? {
                        publishableClientKey
                    } : {},
                    secretServerKey: (_resolvedOptions_secretServerKey = resolvedOptions.secretServerKey) !== null && _resolvedOptions_secretServerKey !== void 0 ? _resolvedOptions_secretServerKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSecretServerKey"])()
                });
            })()
        });
        this._currentServerUserCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheBySession"])(async (session)=>{
            if (session.isKnownToBeInvalid()) return null;
            return await this._interface.getServerUserByToken(session);
        });
        this._serverUsersCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [cursor, limit, orderBy, desc, query, includeRestricted, includeAnonymous, onlyAnonymous, teamId] = param;
            if (onlyAnonymous && !includeAnonymous) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("onlyAnonymous=true requires includeAnonymous=true");
            if (onlyAnonymous) return await this._interface.listServerUsers({
                cursor,
                limit,
                orderBy,
                desc,
                query,
                includeRestricted,
                includeAnonymous: true,
                onlyAnonymous: true,
                teamId
            });
            return await this._interface.listServerUsers({
                cursor,
                limit,
                orderBy,
                desc,
                query,
                includeRestricted,
                includeAnonymous,
                teamId
            });
        });
        this._serverUserCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            const user = await this._interface.getServerUserById(userId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].or(user, null);
        });
        this._serverTeamsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, orderBy, desc, cursor, limit, query] = param;
            return await this._interface.listServerTeamsPaginated({
                userId,
                orderBy,
                desc,
                cursor,
                limit,
                query
            });
        });
        this._serverUserTeamInvitationsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return await this._interface.listServerUserTeamInvitations(userId);
        });
        this._serverTeamUserPermissionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId, userId, recursive] = param;
            return await this._interface.listServerTeamPermissions({
                teamId,
                userId,
                recursive
            }, null);
        });
        this._serverAllTeamMemberPermissionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId, recursive] = param;
            return await this._interface.listServerTeamPermissions({
                teamId,
                recursive
            }, null);
        });
        this._serverUserProjectPermissionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, recursive] = param;
            return await this._interface.listServerProjectPermissions({
                userId,
                recursive
            }, null);
        });
        this._serverUserOAuthConnectionAccessTokensCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, providerId, scope] = param;
            try {
                return {
                    accessToken: (await this._interface.createServerProviderAccessToken(userId, providerId, scope || "")).access_token
                };
            } catch (err) {
                if (!(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionDoesNotHaveRequiredScope.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionNotConnectedToUser.isInstance(err))) throw err;
            }
            return null;
        });
        this._serverUserOAuthConnectionCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, providerId, scope, redirect] = param;
            return await this._getUserOAuthConnectionCacheFn({
                getUser: async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverUserCache.getOrWait([
                        userId
                    ], "write-only")),
                getOrWaitOAuthToken: async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._serverUserOAuthConnectionAccessTokensCache.getOrWait([
                        userId,
                        providerId,
                        scope || ""
                    ], "write-only")),
                useOAuthToken: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._serverUserOAuthConnectionAccessTokensCache, [
                        userId,
                        providerId,
                        scope || ""
                    ], "user.useConnectedAccount()"),
                providerId,
                scope,
                redirect,
                session: null
            });
        });
        this._serverUserConnectedAccountsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return (await this._interface.listServerConnectedAccounts(userId)).items.map((item)=>this._createServerOAuthConnectionFromCrudItem(userId, item));
        });
        this._serverUserOAuthConnectionAccessTokensByAccountCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, providerId, providerAccountId, scope] = param;
            try {
                return {
                    accessToken: (await this._interface.createServerProviderAccessTokenByAccount(userId, providerId, providerAccountId, scope || "")).access_token
                };
            } catch (err) {
                if (!(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthAccessTokenNotAvailable.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionDoesNotHaveRequiredScope.isInstance(err) || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].OAuthConnectionNotConnectedToUser.isInstance(err))) throw err;
            }
            return null;
        });
        this._serverTeamMemberProfilesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId] = param;
            return await this._interface.listServerTeamMemberProfiles({
                teamId
            });
        });
        this._serverTeamInvitationsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId] = param;
            return await this._interface.listServerTeamInvitations({
                teamId
            });
        });
        this._serverUserTeamProfileCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId, userId] = param;
            return await this._interface.getServerTeamMemberProfile({
                teamId,
                userId
            });
        });
        this._serverContactChannelsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return await this._interface.listServerContactChannels(userId);
        });
        this._serverNotificationCategoriesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return await this._interface.listServerNotificationCategories(userId);
        });
        this._serverDataVaultStoreValueCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [storeId, key, secret] = param;
            return await this._interface.getDataVaultStoreValue(secret, storeId, key);
        });
        this._emailDeliveryInfoCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.getEmailDeliveryInfo();
        });
        this._serverUserApiKeysCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return await this._interface.listProjectApiKeys({
                user_id: userId
            }, null, "server");
        });
        this._serverTeamApiKeysCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId] = param;
            return await this._interface.listProjectApiKeys({
                team_id: teamId
            }, null, "server");
        });
        this._convexIdentitySubjectCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [ctx] = param;
            const identity = await ctx.auth.getUserIdentity();
            return identity ? identity.subject : null;
        });
        this._serverCheckApiKeyCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [type, apiKey] = param;
            return await this._interface.checkProjectApiKey(type, apiKey, null, "server");
        });
        this._serverOAuthProvidersCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return await this._interface.listServerOAuthProviders({
                user_id: userId
            });
        });
        this._serverTeamItemsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId, itemId] = param;
            return await this._interface.getItem({
                teamId,
                itemId
            }, null, "server");
        });
        this._serverUserItemsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, itemId] = param;
            return await this._interface.getItem({
                userId,
                itemId
            }, null, "server");
        });
        this._serverCustomItemsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [customCustomerId, itemId] = param;
            return await this._interface.getItem({
                customCustomerId,
                itemId
            }, null, "server");
        });
        this._serverUserProductsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId, cursor, limit] = param;
            return await this._interface.listProducts({
                customer_type: "user",
                customer_id: userId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, null, "server");
        });
        this._serverTeamProductsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [teamId, cursor, limit] = param;
            return await this._interface.listProducts({
                customer_type: "team",
                customer_id: teamId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, null, "server");
        });
        this._serverCustomProductsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [customCustomerId, cursor, limit] = param;
            return await this._interface.listProducts({
                customer_type: "custom",
                customer_id: customCustomerId,
                cursor: cursor !== null && cursor !== void 0 ? cursor : void 0,
                limit: limit !== null && limit !== void 0 ? limit : void 0
            }, null, "server");
        });
    }
};
;
 //# sourceMappingURL=server-app-impl.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/internal-api-keys/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/internal-api-keys/index.ts
__turbopack_context__.s([
    "internalApiKeyCreateOptionsToCrud",
    ()=>internalApiKeyCreateOptionsToCrud
]);
function internalApiKeyCreateOptionsToCrud(options) {
    return {
        description: options.description,
        expires_at_millis: options.expiresAt.getTime(),
        has_publishable_client_key: options.hasPublishableClientKey,
        has_secret_server_key: options.hasSecretServerKey,
        has_super_secret_admin_key: options.hasSuperSecretAdminKey
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/permissions/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/stack-app/permissions/index.ts
__turbopack_context__.s([
    "adminProjectPermissionDefinitionCreateOptionsToCrud",
    ()=>adminProjectPermissionDefinitionCreateOptionsToCrud,
    "adminProjectPermissionDefinitionUpdateOptionsToCrud",
    ()=>adminProjectPermissionDefinitionUpdateOptionsToCrud,
    "adminTeamPermissionDefinitionCreateOptionsToCrud",
    ()=>adminTeamPermissionDefinitionCreateOptionsToCrud,
    "adminTeamPermissionDefinitionUpdateOptionsToCrud",
    ()=>adminTeamPermissionDefinitionUpdateOptionsToCrud
]);
function adminTeamPermissionDefinitionCreateOptionsToCrud(options) {
    return {
        id: options.id,
        description: options.description,
        contained_permission_ids: options.containedPermissionIds
    };
}
function adminTeamPermissionDefinitionUpdateOptionsToCrud(options) {
    return {
        description: options.description,
        contained_permission_ids: options.containedPermissionIds
    };
}
function adminProjectPermissionDefinitionCreateOptionsToCrud(options) {
    return {
        id: options.id,
        description: options.description,
        contained_permission_ids: options.containedPermissionIds
    };
}
function adminProjectPermissionDefinitionUpdateOptionsToCrud(options) {
    return {
        description: options.description,
        contained_permission_ids: options.containedPermissionIds
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/admin-app-impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StackAdminAppImplIncomplete",
    ()=>_StackAdminAppImplIncomplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$admin$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/interface/admin-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$helpers$2f$production$2d$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/helpers/production-mode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$internal$2d$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/internal-api-keys/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$permissions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/permissions/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$projects$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/projects/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$server$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/server-app-impl.js [app-client] (ecmascript)");
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
//#region src/lib/stack-app/apps/implementations/admin-app-impl.ts
/**
* Converts a PushedConfigSource (SDK camelCase) to BranchConfigSourceApi (API snake_case).
*/ function pushedConfigSourceToApi(source) {
    if (source.type === "pushed-from-github") return {
        type: "pushed-from-github",
        owner: source.owner,
        repo: source.repo,
        branch: source.branch,
        commit_hash: source.commitHash,
        config_file_path: source.configFilePath,
        workflow_path: source.workflowPath
    };
    return source;
}
/**
* Converts a BranchConfigSourceApi (API snake_case) to PushedConfigSource (SDK camelCase).
*/ function apiToPushedConfigSource(source) {
    if (source.type === "pushed-from-github") return {
        type: "pushed-from-github",
        owner: source.owner,
        repo: source.repo,
        branch: source.branch,
        commitHash: source.commit_hash,
        configFilePath: source.config_file_path,
        workflowPath: source.workflow_path
    };
    return source;
}
var _StackAdminAppImplIncomplete = class extends __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$server$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackServerAppImplIncomplete"] {
    _adminConfigFromCrud(data) {
        return JSON.parse(data.config_string);
    }
    _adminOwnedProjectFromCrud(data, onRefresh) {
        if (this._tokenStoreInit !== null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Owned apps must always have tokenStore === null — did you not create this project with app._createOwnedApp()?");
        return {
            ...this._adminProjectFromCrud(data, onRefresh),
            app: this
        };
    }
    _adminProjectFromCrud(data, onRefresh) {
        if (data.id !== this.projectId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("The project ID of the provided project JSON (".concat(data.id, ") does not match the project ID of the app (").concat(this.projectId, ")!"));
        const app = this;
        var _data_config_email_config_host, _data_config_email_config_port, _data_config_email_config_username, _data_config_email_config_password, _data_config_email_config_sender_name, _data_config_email_config_sender_email;
        return {
            id: data.id,
            displayName: data.display_name,
            description: data.description,
            createdAt: new Date(data.created_at_millis),
            isProductionMode: data.is_production_mode,
            isDevelopmentEnvironment: data.is_development_environment,
            ownerTeamId: data.owner_team_id,
            onboardingStatus: data.onboarding_status,
            logoUrl: data.logo_url,
            logoFullUrl: data.logo_full_url,
            logoDarkModeUrl: data.logo_dark_mode_url,
            logoFullDarkModeUrl: data.logo_full_dark_mode_url,
            config: {
                signUpEnabled: data.config.sign_up_enabled,
                credentialEnabled: data.config.credential_enabled,
                magicLinkEnabled: data.config.magic_link_enabled,
                passkeyEnabled: data.config.passkey_enabled,
                clientTeamCreationEnabled: data.config.client_team_creation_enabled,
                clientUserDeletionEnabled: data.config.client_user_deletion_enabled,
                allowLocalhost: data.config.allow_localhost,
                oauthAccountMergeStrategy: data.config.oauth_account_merge_strategy,
                allowUserApiKeys: data.config.allow_user_api_keys,
                allowTeamApiKeys: data.config.allow_team_api_keys,
                oauthProviders: data.config.oauth_providers.map((p)=>{
                    var _p_client_id, _p_client_secret;
                    return p.type === "shared" ? {
                        id: p.id,
                        type: "shared"
                    } : {
                        id: p.id,
                        type: "standard",
                        clientId: (_p_client_id = p.client_id) !== null && _p_client_id !== void 0 ? _p_client_id : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Client ID is missing"),
                        clientSecret: (_p_client_secret = p.client_secret) !== null && _p_client_secret !== void 0 ? _p_client_secret : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Client secret is missing"),
                        facebookConfigId: p.facebook_config_id,
                        microsoftTenantId: p.microsoft_tenant_id,
                        appleBundleIds: p.apple_bundle_ids
                    };
                }),
                emailConfig: data.config.email_config.type === "shared" ? {
                    type: "shared"
                } : {
                    type: "standard",
                    host: (_data_config_email_config_host = data.config.email_config.host) !== null && _data_config_email_config_host !== void 0 ? _data_config_email_config_host : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email host is missing"),
                    port: (_data_config_email_config_port = data.config.email_config.port) !== null && _data_config_email_config_port !== void 0 ? _data_config_email_config_port : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email port is missing"),
                    username: (_data_config_email_config_username = data.config.email_config.username) !== null && _data_config_email_config_username !== void 0 ? _data_config_email_config_username : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email username is missing"),
                    password: (_data_config_email_config_password = data.config.email_config.password) !== null && _data_config_email_config_password !== void 0 ? _data_config_email_config_password : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email password is missing"),
                    senderName: (_data_config_email_config_sender_name = data.config.email_config.sender_name) !== null && _data_config_email_config_sender_name !== void 0 ? _data_config_email_config_sender_name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email sender name is missing"),
                    senderEmail: (_data_config_email_config_sender_email = data.config.email_config.sender_email) !== null && _data_config_email_config_sender_email !== void 0 ? _data_config_email_config_sender_email : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email sender email is missing")
                },
                emailTheme: data.config.email_theme,
                domains: data.config.domains.map((d)=>({
                        domain: d.domain,
                        handlerPath: d.handler_path
                    })),
                createTeamOnSignUp: data.config.create_team_on_sign_up,
                teamCreatorDefaultPermissions: data.config.team_creator_default_permissions,
                teamMemberDefaultPermissions: data.config.team_member_default_permissions,
                userDefaultPermissions: data.config.user_default_permissions
            },
            async getConfig () {
                return app._adminConfigFromCrud(await app._interface.getConfig());
            },
            useConfig () {
                const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(app._configOverridesCache, [], "project.useConfig()");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>app._adminConfigFromCrud(config), [
                    config
                ]);
            },
            async updateConfig (configOverride) {
                await app._interface.updateConfigOverride("environment", configOverride);
                await app._refreshProjectConfig();
            },
            async pushConfig (config, options) {
                await app._interface.setConfigOverride("branch", config, pushedConfigSourceToApi(options.source));
                await app._refreshProjectConfig();
            },
            async updatePushedConfig (config) {
                await app._interface.updateConfigOverride("branch", config);
                await app._refreshProjectConfig();
            },
            async getPushedConfigSource () {
                return apiToPushedConfigSource(await app._interface.getPushedConfigSource());
            },
            async unlinkPushedConfigSource () {
                await app._interface.unlinkPushedConfigSource();
                await app._refreshProjectConfig();
            },
            async resetConfigOverrideKeys (level, keys) {
                await app._interface.resetConfigOverrideKeys(level, keys);
                await app._refreshProjectConfig();
            },
            async getConfigOverride (level) {
                const result = await app._interface.getConfigOverride(level);
                return JSON.parse(result.config_string);
            },
            async replaceConfigOverride (level, config) {
                if (level === "branch") {
                    const source = await app._interface.getPushedConfigSource();
                    await app._interface.setConfigOverride(level, config, source);
                } else await app._interface.setConfigOverride(level, config);
                await app._refreshProjectConfig();
            },
            async update (update) {
                const { requirePublishableClientKey, ...projectUpdate } = update;
                const updateOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$projects$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminProjectUpdateOptionsToCrud"])(projectUpdate);
                const hasConfigUpdate = !!updateOptions.config && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedValues"])(updateOptions.config).some((value)=>value !== void 0);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedEntries"])(updateOptions).some((param)=>{
                    let [key, value] = param;
                    if (key === "config") return hasConfigUpdate;
                    return value !== void 0;
                })) {
                    await app._interface.updateProject(updateOptions);
                    await onRefresh();
                }
                if (requirePublishableClientKey !== void 0) {
                    await app._interface.updateConfigOverride("project", {
                        "project.requirePublishableClientKey": requirePublishableClientKey
                    });
                    await app._refreshProjectConfig();
                }
            },
            async delete () {
                await app._interface.deleteProject();
            },
            async getProductionModeErrors () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$helpers$2f$production$2d$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionModeErrors"])(data);
            },
            useProductionModeErrors () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$helpers$2f$production$2d$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionModeErrors"])(data);
            }
        };
    }
    _adminEmailTemplateFromCrud(data) {
        return {
            type: data.type,
            subject: data.subject,
            content: data.content,
            isDefault: data.is_default
        };
    }
    async getProject() {
        return this._adminProjectFromCrud(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._adminProjectCache.getOrWait([], "write-only")), ()=>this._refreshProject());
    }
    useProject() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminProjectCache, [], "adminApp.useProject()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>this._adminProjectFromCrud(crud, ()=>this._refreshProject()), [
            crud
        ]);
    }
    _createInternalApiKeyBaseFromCrud(data) {
        const app = this;
        return {
            id: data.id,
            description: data.description,
            expiresAt: new Date(data.expires_at_millis),
            manuallyRevokedAt: data.manually_revoked_at_millis ? new Date(data.manually_revoked_at_millis) : null,
            createdAt: new Date(data.created_at_millis),
            isValid () {
                return this.whyInvalid() === null;
            },
            whyInvalid () {
                if (this.expiresAt.getTime() < Date.now()) return "expired";
                if (this.manuallyRevokedAt) return "manually-revoked";
                return null;
            },
            async revoke () {
                const res = await app._interface.revokeInternalApiKeyById(data.id);
                await app._refreshInternalApiKeys();
                return res;
            }
        };
    }
    _createInternalApiKeyFromCrud(data) {
        return {
            ...this._createInternalApiKeyBaseFromCrud(data),
            publishableClientKey: data.publishable_client_key ? {
                lastFour: data.publishable_client_key.last_four
            } : null,
            secretServerKey: data.secret_server_key ? {
                lastFour: data.secret_server_key.last_four
            } : null,
            superSecretAdminKey: data.super_secret_admin_key ? {
                lastFour: data.super_secret_admin_key.last_four
            } : null
        };
    }
    _createInternalApiKeyFirstViewFromCrud(data) {
        return {
            ...this._createInternalApiKeyBaseFromCrud(data),
            publishableClientKey: data.publishable_client_key,
            secretServerKey: data.secret_server_key,
            superSecretAdminKey: data.super_secret_admin_key
        };
    }
    async listInternalApiKeys() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._internalApiKeysCache.getOrWait([], "write-only")).map((j)=>this._createInternalApiKeyFromCrud(j));
    }
    useInternalApiKeys() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._internalApiKeysCache, [], "adminApp.useInternalApiKeys()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud.map((j)=>this._createInternalApiKeyFromCrud(j));
        }, [
            crud
        ]);
    }
    async createInternalApiKey(options) {
        const crud = await this._interface.createInternalApiKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$internal$2d$api$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internalApiKeyCreateOptionsToCrud"])(options));
        await this._refreshInternalApiKeys();
        return this._createInternalApiKeyFirstViewFromCrud(crud);
    }
    useEmailThemes() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminEmailThemesCache, [], "adminApp.useEmailThemes()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud.map((theme)=>({
                    id: theme.id,
                    displayName: theme.display_name
                }));
        }, [
            crud
        ]);
    }
    useEmailTemplates() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminEmailTemplatesCache, [], "adminApp.useEmailTemplates()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud.map((template)=>({
                    id: template.id,
                    displayName: template.display_name,
                    themeId: template.theme_id,
                    tsxSource: template.tsx_source
                }));
        }, [
            crud
        ]);
    }
    useEmailDrafts() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminEmailDraftsCache, [], "adminApp.useEmailDrafts()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud.map((draft)=>({
                    id: draft.id,
                    displayName: draft.display_name,
                    themeId: draft.theme_id,
                    tsxSource: draft.tsx_source,
                    sentAt: draft.sent_at_millis ? new Date(draft.sent_at_millis) : null
                }));
        }, [
            crud
        ]);
    }
    async listEmailThemes() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._adminEmailThemesCache.getOrWait([], "write-only")).map((theme)=>({
                id: theme.id,
                displayName: theme.display_name
            }));
    }
    async listEmailTemplates() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._adminEmailTemplatesCache.getOrWait([], "write-only")).map((template)=>({
                id: template.id,
                displayName: template.display_name,
                themeId: template.theme_id,
                tsxSource: template.tsx_source
            }));
    }
    async listEmailDrafts() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._adminEmailDraftsCache.getOrWait([], "write-only")).map((draft)=>({
                id: draft.id,
                displayName: draft.display_name,
                themeId: draft.theme_id,
                tsxSource: draft.tsx_source,
                sentAt: draft.sent_at_millis ? new Date(draft.sent_at_millis) : null
            }));
    }
    async createTeamPermissionDefinition(data) {
        const crud = await this._interface.createTeamPermissionDefinition((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$permissions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminTeamPermissionDefinitionCreateOptionsToCrud"])(data));
        await this._adminTeamPermissionDefinitionsCache.refresh([]);
        return this._serverTeamPermissionDefinitionFromCrud(crud);
    }
    async updateTeamPermissionDefinition(permissionId, data) {
        await this._interface.updateTeamPermissionDefinition(permissionId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$permissions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminTeamPermissionDefinitionUpdateOptionsToCrud"])(data));
        await this._adminTeamPermissionDefinitionsCache.refresh([]);
    }
    async deleteTeamPermissionDefinition(permissionId) {
        await this._interface.deleteTeamPermissionDefinition(permissionId);
        await this._adminTeamPermissionDefinitionsCache.refresh([]);
    }
    async listTeamPermissionDefinitions() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._adminTeamPermissionDefinitionsCache.getOrWait([], "write-only")).map((p)=>this._serverTeamPermissionDefinitionFromCrud(p));
    }
    async listTeamPermissionDefinitionsPaginated(options) {
        const result = await this._interface.listTeamPermissionDefinitionsPaginated(options);
        return {
            items: result.items.map((p)=>this._serverTeamPermissionDefinitionFromCrud(p)),
            nextCursor: result.nextCursor
        };
    }
    useTeamPermissionDefinitions() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminTeamPermissionDefinitionsCache, [], "adminApp.useTeamPermissionDefinitions()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud.map((p)=>this._serverTeamPermissionDefinitionFromCrud(p));
        }, [
            crud
        ]);
    }
    async createProjectPermissionDefinition(data) {
        const crud = await this._interface.createProjectPermissionDefinition((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$permissions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminProjectPermissionDefinitionCreateOptionsToCrud"])(data));
        await this._adminProjectPermissionDefinitionsCache.refresh([]);
        return this._serverProjectPermissionDefinitionFromCrud(crud);
    }
    async updateProjectPermissionDefinition(permissionId, data) {
        await this._interface.updateProjectPermissionDefinition(permissionId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$permissions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminProjectPermissionDefinitionUpdateOptionsToCrud"])(data));
        await this._adminProjectPermissionDefinitionsCache.refresh([]);
    }
    async deleteProjectPermissionDefinition(permissionId) {
        await this._interface.deleteProjectPermissionDefinition(permissionId);
        await this._adminProjectPermissionDefinitionsCache.refresh([]);
    }
    async listProjectPermissionDefinitions() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._adminProjectPermissionDefinitionsCache.getOrWait([], "write-only")).map((p)=>this._serverProjectPermissionDefinitionFromCrud(p));
    }
    useProjectPermissionDefinitions() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminProjectPermissionDefinitionsCache, [], "adminApp.useProjectPermissionDefinitions()");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return crud.map((p)=>this._serverProjectPermissionDefinitionFromCrud(p));
        }, [
            crud
        ]);
    }
    useSvixToken() {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._svixTokenCache, [], "adminApp.useSvixToken()");
        return {
            token: crud.token,
            url: crud.url
        };
    }
    async _refreshProject() {
        await Promise.all([
            super._refreshProject(),
            this._adminProjectCache.refresh([])
        ]);
    }
    async _refreshProjectConfig() {
        await Promise.all([
            this._configOverridesCache.refresh([]),
            this._adminProjectCache.refresh([])
        ]);
    }
    async _refreshInternalApiKeys() {
        await this._internalApiKeysCache.refresh([]);
    }
    async _refreshUsers() {
        await Promise.all([
            super._refreshUsers(),
            this._metricsCache.refresh([
                false
            ]),
            this._metricsCache.refresh([
                true
            ]),
            this._metricsUserCountsCache.refresh([])
        ]);
    }
    get [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]]() {
        var _this = this;
        return {
            ...super[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]],
            useMetrics: function() {
                let includeAnonymous = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(_this._metricsCache, [
                    includeAnonymous
                ], "adminApp.useMetrics()");
            },
            useUserActivity: (userId)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._userActivityCache, [
                    userId
                ], "adminApp.useUserActivity()");
            },
            useMetricsUserCounts: ()=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._metricsUserCountsCache, [], "adminApp.useMetricsUserCounts()");
            }
        };
    }
    async sendTestEmail(options) {
        let response;
        try {
            response = await this._interface.sendTestEmail({
                recipient_email: options.recipientEmail,
                email_config: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(options.emailConfig, [
                        "host",
                        "port",
                        "username",
                        "password"
                    ]),
                    sender_email: options.emailConfig.senderEmail,
                    sender_name: options.emailConfig.senderName
                }
            });
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].ItemQuantityInsufficientAmount) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error({
                errorMessage: "Monthly email sending limit exceeded for your plan. Please upgrade your plan or wait until next month before sending more test emails."
            });
            throw error;
        }
        var _response_error_message;
        if (response.success) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error({
            errorMessage: (_response_error_message = response.error_message) !== null && _response_error_message !== void 0 ? _response_error_message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Email test error not specified")
        });
    }
    async sendTestWebhook(options) {
        const response = await this._interface.sendTestWebhook({
            endpoint_id: options.endpointId
        });
        var _response_error_message;
        if (response.success) return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error({
            errorMessage: (_response_error_message = response.error_message) !== null && _response_error_message !== void 0 ? _response_error_message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Webhook test error not specified")
        });
    }
    async listSentEmails() {
        return (await this._interface.listSentEmails()).items.map((email)=>{
            var _email_to;
            var _email_to1, _email_to_;
            return {
                id: email.id,
                to: (_email_to1 = email.to) !== null && _email_to1 !== void 0 ? _email_to1 : [],
                subject: email.subject,
                recipient: (_email_to_ = (_email_to = email.to) === null || _email_to === void 0 ? void 0 : _email_to[0]) !== null && _email_to_ !== void 0 ? _email_to_ : "",
                sentAt: new Date(email.sent_at_millis),
                error: email.error
            };
        });
    }
    async setupManagedEmailProvider(options) {
        const response = await this._interface.setupManagedEmailProvider({
            subdomain: options.subdomain,
            sender_local_part: options.senderLocalPart
        });
        return {
            domainId: response.domain_id,
            subdomain: response.subdomain,
            senderLocalPart: response.sender_local_part,
            nameServerRecords: response.name_server_records,
            status: response.status
        };
    }
    async checkManagedEmailStatus(options) {
        return {
            status: (await this._interface.checkManagedEmailStatus({
                domain_id: options.domainId,
                subdomain: options.subdomain,
                sender_local_part: options.senderLocalPart
            })).status
        };
    }
    async listManagedEmailDomains() {
        return (await this._interface.listManagedEmailDomains()).items.map((item)=>({
                domainId: item.domain_id,
                subdomain: item.subdomain,
                senderLocalPart: item.sender_local_part,
                status: item.status,
                nameServerRecords: item.name_server_records
            }));
    }
    async applyManagedEmailProvider(options) {
        const result = await this._interface.applyManagedEmailProvider({
            domain_id: options.domainId
        });
        await this._refreshProjectConfig();
        return result;
    }
    async deleteManagedEmailDomain(options) {
        return await this._interface.deleteManagedEmailDomain({
            resend_domain_id: options.resendDomainId
        });
    }
    async sendSignInInvitationEmail(email, callbackUrl) {
        await this._interface.sendSignInInvitationEmail(email, callbackUrl);
    }
    async createEmailTemplate(displayName) {
        const result = await this._interface.createEmailTemplate(displayName);
        await this._adminEmailTemplatesCache.refresh([]);
        return result;
    }
    async deleteEmailTemplate(id) {
        await this._interface.deleteEmailTemplate(id);
        await this._adminEmailTemplatesCache.refresh([]);
    }
    async createEmailDraft(options) {
        const result = await this._interface.createEmailDraft({
            display_name: options.displayName,
            theme_id: options.themeId,
            tsx_source: options.tsxSource
        });
        await this._adminEmailDraftsCache.refresh([]);
        return result;
    }
    async updateEmailDraft(id, data) {
        await this._interface.updateEmailDraft(id, {
            display_name: data.displayName,
            theme_id: data.themeId,
            tsx_source: data.tsxSource
        });
        await this._adminEmailDraftsCache.refresh([]);
    }
    async deleteEmailDraft(id) {
        await this._interface.deleteEmailDraft(id);
        const current = this._adminEmailDraftsCache.getIfCached([]);
        if (current.status === "ok" && current.data.status === "ok") this._adminEmailDraftsCache.forceSetCachedValue([], __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(current.data.data.filter((d)=>d.id !== id)));
        await this._adminEmailDraftsCache.refresh([]);
    }
    async refreshEmailDrafts() {
        await this._adminEmailDraftsCache.refresh([]);
    }
    async saveChatMessage(threadId, message) {
        await this._interface.saveChatMessage(threadId, message);
    }
    async listChatMessages(threadId) {
        return await this._interface.listChatMessages(threadId);
    }
    async rewriteTemplateSourceWithAI(templateTsxSource) {
        return {
            tsxSource: (await this._interface.rewriteTemplateSourceWithAI(templateTsxSource)).tsx_source
        };
    }
    async createEmailTheme(displayName) {
        const result = await this._interface.createEmailTheme(displayName);
        await this._adminEmailThemesCache.refresh([]);
        return result;
    }
    async getEmailPreview(options) {
        return (await this._interface.renderEmailPreview(options)).html;
    }
    useEmailPreview(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._emailPreviewCache, [
            options.themeId,
            options.themeTsxSource,
            options.templateId,
            options.templateTsxSource
        ], "adminApp.useEmailPreview()").html;
    }
    async getEmailPreviewWithEditableMarkers(options) {
        const result = await this._interface.renderEmailPreview({
            ...options,
            editableMarkers: true,
            editableSource: options.editableSource
        });
        return {
            html: result.html,
            editableRegions: result.editable_regions
        };
    }
    useEmailPreviewWithEditableMarkers(options) {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._emailPreviewWithEditableMarkersCache, [
            options.themeId,
            options.themeTsxSource,
            options.templateId,
            options.templateTsxSource,
            options.editableSource
        ], "adminApp.useEmailPreviewWithEditableMarkers()");
        return {
            html: crud.html,
            editableRegions: crud.editable_regions
        };
    }
    useEmailTheme(id) {
        const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._adminEmailThemeCache, [
            id
        ], "adminApp.useEmailTheme()");
        return {
            displayName: crud.display_name,
            tsxSource: crud.tsx_source
        };
    }
    async updateEmailTheme(id, tsxSource) {
        await this._interface.updateEmailTheme(id, tsxSource);
        await this._adminEmailThemesCache.refresh([]);
        await this._adminEmailThemeCache.invalidate([
            id
        ]);
    }
    async deleteEmailTheme(id) {
        await this._interface.deleteEmailTheme(id);
        await this._adminEmailThemesCache.refresh([]);
        await this._adminEmailThemeCache.invalidate([
            id
        ]);
    }
    async updateEmailTemplate(id, tsxSource, themeId) {
        const result = await this._interface.updateEmailTemplate(id, tsxSource, themeId);
        await this._adminEmailTemplatesCache.refresh([]);
        return {
            renderedHtml: result.rendered_html
        };
    }
    async setupPayments() {
        return await this._interface.setupPayments();
    }
    async createStripeWidgetAccountSession() {
        return await this._interface.createStripeWidgetAccountSession();
    }
    async getPaymentMethodConfigs() {
        return await this._interface.getPaymentMethodConfigs();
    }
    async updatePaymentMethodConfigs(configId, updates) {
        await this._interface.updatePaymentMethodConfigs(configId, updates);
    }
    async createItemQuantityChange(options) {
        await this._interface.updateItemQuantity({
            itemId: options.itemId,
            ..."userId" in options ? {
                userId: options.userId
            } : "teamId" in options ? {
                teamId: options.teamId
            } : {
                customCustomerId: options.customCustomerId
            }
        }, {
            delta: options.quantity,
            expires_at: options.expiresAt,
            description: options.description,
            allow_negative: true
        });
    }
    async refundTransaction(options) {
        const result = await this._interface.refundTransaction({
            type: options.type,
            id: options.id,
            invoiceId: options.invoiceId,
            amountUsd: options.amountUsd,
            endAction: options.endAction
        });
        await this._transactionsCache.invalidateWhere(()=>true);
        return {
            refundTransactionId: result.refundTransactionId
        };
    }
    async listTransactions(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await this._transactionsCache.getOrWait([
            params.cursor,
            params.limit,
            params.type,
            params.customerType,
            params.customerId
        ], "write-only"));
    }
    _emailOutboxCrudToAdmin(crud) {
        const recipient = crud.to;
        let to;
        if (recipient.type === "user-primary-email") to = {
            type: "user-primary-email",
            userId: recipient.user_id
        };
        else if (recipient.type === "user-custom-emails") to = {
            type: "user-custom-emails",
            userId: recipient.user_id,
            emails: recipient.emails
        };
        else to = {
            type: "custom-emails",
            emails: recipient.emails
        };
        var _crud_theme_id, _crud_variables;
        const base = {
            id: crud.id,
            createdAt: new Date(crud.created_at_millis),
            updatedAt: new Date(crud.updated_at_millis),
            tsxSource: crud.tsx_source,
            themeId: (_crud_theme_id = crud.theme_id) !== null && _crud_theme_id !== void 0 ? _crud_theme_id : null,
            to,
            scheduledAt: new Date(crud.scheduled_at_millis),
            createdWith: crud.created_with,
            emailDraftId: crud.email_draft_id,
            emailProgrammaticCallTemplateId: crud.email_programmatic_call_template_id,
            variables: (_crud_variables = crud.variables) !== null && _crud_variables !== void 0 ? _crud_variables : {},
            isPaused: false,
            hasRendered: false,
            hasDelivered: false,
            sendRetries: crud.send_retries,
            nextSendRetryAt: crud.next_send_retry_at_millis ? new Date(crud.next_send_retry_at_millis) : null,
            sendAttemptErrors: crud.send_attempt_errors ? crud.send_attempt_errors.map((e)=>({
                    attemptNumber: e.attempt_number,
                    timestamp: e.timestamp,
                    externalMessage: e.external_message,
                    externalDetails: e.external_details,
                    internalMessage: e.internal_message,
                    internalDetails: e.internal_details
                })) : null
        };
        const rendered = crud.has_rendered ? {
            ...base,
            startedRenderingAt: new Date(crud.started_rendering_at_millis),
            renderedAt: new Date(crud.rendered_at_millis),
            subject: crud.subject,
            html: crud.html,
            text: crud.text,
            isTransactional: crud.is_transactional,
            isHighPriority: crud.is_high_priority,
            notificationCategoryId: crud.notification_category_id,
            hasRendered: true
        } : null;
        const startedSending = rendered && crud.started_sending_at_millis ? {
            ...rendered,
            startedSendingAt: new Date(crud.started_sending_at_millis)
        } : null;
        const finishedDelivering = startedSending && crud.has_delivered ? {
            ...startedSending,
            deliveredAt: new Date(crud.delivered_at_millis),
            hasDelivered: true
        } : null;
        return (()=>{
            switch(crud.status){
                case "paused":
                    return {
                        ...base,
                        status: "paused",
                        simpleStatus: "in-progress",
                        isPaused: true
                    };
                case "preparing":
                    return {
                        ...base,
                        status: "preparing",
                        simpleStatus: "in-progress"
                    };
                case "rendering":
                    return {
                        ...base,
                        status: "rendering",
                        simpleStatus: "in-progress",
                        startedRenderingAt: new Date(crud.started_rendering_at_millis)
                    };
                case "render-error":
                    return {
                        ...base,
                        status: "render-error",
                        simpleStatus: "error",
                        startedRenderingAt: new Date(crud.started_rendering_at_millis),
                        renderedAt: new Date(crud.rendered_at_millis),
                        renderError: crud.render_error
                    };
                case "scheduled":
                    return {
                        ...rendered,
                        status: "scheduled",
                        simpleStatus: "in-progress"
                    };
                case "queued":
                    return {
                        ...rendered,
                        status: "queued",
                        simpleStatus: "in-progress"
                    };
                case "sending":
                    return {
                        ...startedSending,
                        status: "sending",
                        simpleStatus: "in-progress"
                    };
                case "server-error":
                    return {
                        ...startedSending,
                        status: "server-error",
                        simpleStatus: "error",
                        errorAt: new Date(crud.error_at_millis),
                        serverError: crud.server_error
                    };
                case "skipped":
                    var _crud_skipped_details;
                    return {
                        ...base,
                        status: "skipped",
                        simpleStatus: "ok",
                        skippedAt: new Date(crud.skipped_at_millis),
                        skippedReason: crud.skipped_reason,
                        skippedDetails: (_crud_skipped_details = crud.skipped_details) !== null && _crud_skipped_details !== void 0 ? _crud_skipped_details : {},
                        hasRendered: crud.has_rendered,
                        startedRenderingAt: crud.started_rendering_at_millis ? new Date(crud.started_rendering_at_millis) : void 0,
                        renderedAt: crud.rendered_at_millis ? new Date(crud.rendered_at_millis) : void 0,
                        subject: crud.subject,
                        html: crud.html,
                        text: crud.text,
                        isTransactional: crud.is_transactional,
                        isHighPriority: crud.is_high_priority,
                        notificationCategoryId: crud.notification_category_id,
                        startedSendingAt: crud.started_sending_at_millis ? new Date(crud.started_sending_at_millis) : void 0
                    };
                case "bounced":
                    return {
                        ...startedSending,
                        status: "bounced",
                        simpleStatus: "error",
                        bouncedAt: new Date(crud.bounced_at_millis)
                    };
                case "delivery-delayed":
                    return {
                        ...startedSending,
                        status: "delivery-delayed",
                        simpleStatus: "ok",
                        deliveryDelayedAt: new Date(crud.delivery_delayed_at_millis)
                    };
                case "sent":
                    return {
                        ...finishedDelivering,
                        status: "sent",
                        simpleStatus: "ok",
                        canHaveDeliveryInfo: crud.can_have_delivery_info
                    };
                case "opened":
                    return {
                        ...finishedDelivering,
                        status: "opened",
                        simpleStatus: "ok",
                        openedAt: new Date(crud.opened_at_millis),
                        canHaveDeliveryInfo: true
                    };
                case "clicked":
                    return {
                        ...finishedDelivering,
                        status: "clicked",
                        simpleStatus: "ok",
                        clickedAt: new Date(crud.clicked_at_millis),
                        canHaveDeliveryInfo: true
                    };
                case "marked-as-spam":
                    return {
                        ...finishedDelivering,
                        status: "marked-as-spam",
                        simpleStatus: "ok",
                        markedAsSpamAt: new Date(crud.marked_as_spam_at_millis),
                        canHaveDeliveryInfo: true
                    };
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unknown email outbox status: ".concat(crud.status), {
                        status: crud.status
                    });
            }
        })();
    }
    async listOutboxEmails(options) {
        var _response_pagination;
        const response = await this._interface.listOutboxEmails({
            status: options === null || options === void 0 ? void 0 : options.status,
            simple_status: options === null || options === void 0 ? void 0 : options.simpleStatus,
            limit: options === null || options === void 0 ? void 0 : options.limit,
            cursor: options === null || options === void 0 ? void 0 : options.cursor
        });
        var _response_pagination_next_cursor;
        return {
            items: response.items.map((item)=>this._emailOutboxCrudToAdmin(item)),
            nextCursor: (_response_pagination_next_cursor = (_response_pagination = response.pagination) === null || _response_pagination === void 0 ? void 0 : _response_pagination.next_cursor) !== null && _response_pagination_next_cursor !== void 0 ? _response_pagination_next_cursor : null
        };
    }
    async getOutboxEmail(id) {
        const response = await this._interface.getOutboxEmail(id);
        return this._emailOutboxCrudToAdmin(response);
    }
    async updateOutboxEmail(id, options) {
        const response = await this._interface.updateOutboxEmail(id, {
            is_paused: options.isPaused,
            scheduled_at_millis: options.scheduledAtMillis,
            cancel: options.cancel,
            tsx_source: options.tsxSource,
            theme_id: options.themeId
        });
        return this._emailOutboxCrudToAdmin(response);
    }
    async pauseOutboxEmail(id) {
        return await this.updateOutboxEmail(id, {
            isPaused: true
        });
    }
    async unpauseOutboxEmail(id) {
        return await this.updateOutboxEmail(id, {
            isPaused: false
        });
    }
    async cancelOutboxEmail(id) {
        return await this.updateOutboxEmail(id, {
            cancel: true
        });
    }
    useTransactions(params) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._transactionsCache, [
            params.cursor,
            params.limit,
            params.type,
            params.customerType,
            params.customerId
        ], "adminApp.useTransactions()");
    }
    async getStripeAccountInfo() {
        return await this._interface.getStripeAccountInfo();
    }
    useStripeAccountInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncCache"])(this._stripeAccountInfoCache, [], "adminApp.useStripeAccountInfo()");
    }
    async queryAnalytics(options) {
        return await this._interface.queryAnalytics(options);
    }
    async listSessionReplays(options) {
        const response = await this._interface.listSessionReplays({
            cursor: options === null || options === void 0 ? void 0 : options.cursor,
            limit: options === null || options === void 0 ? void 0 : options.limit,
            user_ids: options === null || options === void 0 ? void 0 : options.userIds,
            team_ids: options === null || options === void 0 ? void 0 : options.teamIds,
            duration_ms_min: options === null || options === void 0 ? void 0 : options.durationMsMin,
            duration_ms_max: options === null || options === void 0 ? void 0 : options.durationMsMax,
            last_event_at_from_millis: options === null || options === void 0 ? void 0 : options.lastEventAtFromMillis,
            last_event_at_to_millis: options === null || options === void 0 ? void 0 : options.lastEventAtToMillis,
            click_count_min: options === null || options === void 0 ? void 0 : options.clickCountMin
        });
        return {
            items: response.items.map((r)=>({
                    id: r.id,
                    projectUser: {
                        id: r.project_user.id,
                        displayName: r.project_user.display_name,
                        primaryEmail: r.project_user.primary_email
                    },
                    startedAt: new Date(r.started_at_millis),
                    lastEventAt: new Date(r.last_event_at_millis),
                    chunkCount: r.chunk_count,
                    eventCount: r.event_count
                })),
            nextCursor: response.pagination.next_cursor
        };
    }
    async getSessionReplay(sessionReplayId) {
        const response = await this._interface.getSessionReplay(sessionReplayId);
        return {
            id: response.id,
            projectUser: {
                id: response.project_user.id,
                displayName: response.project_user.display_name,
                primaryEmail: response.project_user.primary_email
            },
            startedAt: new Date(response.started_at_millis),
            lastEventAt: new Date(response.last_event_at_millis),
            chunkCount: response.chunk_count,
            eventCount: response.event_count
        };
    }
    async listSessionReplayChunks(sessionReplayId, options) {
        const response = await this._interface.listSessionReplayChunks(sessionReplayId, {
            cursor: options === null || options === void 0 ? void 0 : options.cursor,
            limit: options === null || options === void 0 ? void 0 : options.limit
        });
        return {
            items: response.items.map((c)=>({
                    id: c.id,
                    batchId: c.batch_id,
                    sessionReplaySegmentId: c.session_replay_segment_id,
                    browserSessionId: c.browser_session_id,
                    eventCount: c.event_count,
                    byteLength: c.byte_length,
                    firstEventAt: new Date(c.first_event_at_millis),
                    lastEventAt: new Date(c.last_event_at_millis),
                    createdAt: new Date(c.created_at_millis)
                })),
            nextCursor: response.pagination.next_cursor
        };
    }
    async getSessionReplayChunkEvents(sessionReplayId, chunkId) {
        return await this._interface.getSessionReplayChunkEvents(sessionReplayId, chunkId);
    }
    async getSessionReplayEvents(sessionReplayId, options) {
        const response = await this._interface.getSessionReplayEvents(sessionReplayId, options);
        return {
            chunks: response.chunks.map((c)=>({
                    id: c.id,
                    batchId: c.batch_id,
                    sessionReplaySegmentId: c.session_replay_segment_id,
                    eventCount: c.event_count,
                    byteLength: c.byte_length,
                    firstEventAt: new Date(c.first_event_at_millis),
                    lastEventAt: new Date(c.last_event_at_millis),
                    createdAt: new Date(c.created_at_millis)
                })),
            chunkEvents: response.chunk_events.map((ce)=>({
                    chunkId: ce.chunk_id,
                    events: ce.events
                }))
        };
    }
    async previewAffectedUsersByOnboardingChange(onboarding, limit) {
        const result = await this._interface.previewAffectedUsersByOnboardingChange({
            require_email_verification: onboarding.requireEmailVerification
        }, limit);
        return {
            affectedUsers: result.affected_users.map((u)=>({
                    id: u.id,
                    displayName: u.display_name,
                    primaryEmail: u.primary_email,
                    restrictedReason: u.restricted_reason
                })),
            totalAffectedCount: result.total_affected_count
        };
    }
    constructor(options, extraOptions){
        const resolvedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveConstructorOptions"])(options);
        var _resolvedOptions_publishableClientKey;
        const publishableClientKey = (_resolvedOptions_publishableClientKey = resolvedOptions.publishableClientKey) !== null && _resolvedOptions_publishableClientKey !== void 0 ? _resolvedOptions_publishableClientKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultPublishableClientKey"])();
        var _extraOptions_interface;
        super(resolvedOptions, {
            ...extraOptions,
            interface: (_extraOptions_interface = extraOptions === null || extraOptions === void 0 ? void 0 : extraOptions.interface) !== null && _extraOptions_interface !== void 0 ? _extraOptions_interface : (()=>{
                const apiUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveApiUrls"])(resolvedOptions.baseUrl);
                var _resolvedOptions_projectId, _resolvedOptions_extraRequestHeaders, _resolvedOptions_secretServerKey, _resolvedOptions_superSecretAdminKey;
                return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$interface$2f$admin$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAdminInterface"]({
                    getBaseUrl: ()=>apiUrls()[0],
                    getApiUrls: apiUrls,
                    projectId: (_resolvedOptions_projectId = resolvedOptions.projectId) !== null && _resolvedOptions_projectId !== void 0 ? _resolvedOptions_projectId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultProjectId"])(),
                    extraRequestHeaders: (_resolvedOptions_extraRequestHeaders = resolvedOptions.extraRequestHeaders) !== null && _resolvedOptions_extraRequestHeaders !== void 0 ? _resolvedOptions_extraRequestHeaders : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultExtraRequestHeaders"])(),
                    clientVersion: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientVersion"],
                    ...resolvedOptions.projectOwnerSession ? {
                        projectOwnerSession: resolvedOptions.projectOwnerSession
                    } : {
                        ...publishableClientKey ? {
                            publishableClientKey
                        } : {},
                        secretServerKey: (_resolvedOptions_secretServerKey = resolvedOptions.secretServerKey) !== null && _resolvedOptions_secretServerKey !== void 0 ? _resolvedOptions_secretServerKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSecretServerKey"])(),
                        superSecretAdminKey: (_resolvedOptions_superSecretAdminKey = resolvedOptions.superSecretAdminKey) !== null && _resolvedOptions_superSecretAdminKey !== void 0 ? _resolvedOptions_superSecretAdminKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSuperSecretAdminKey"])()
                    }
                });
            })()
        });
        this._adminProjectCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.getProject();
        });
        this._internalApiKeysCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.listInternalApiKeys();
        });
        this._adminEmailThemeCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [id] = param;
            return await this._interface.getEmailTheme(id);
        });
        this._adminEmailThemesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.listEmailThemes();
        });
        this._adminEmailTemplatesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.listInternalEmailTemplates();
        });
        this._adminEmailDraftsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.listInternalEmailDrafts();
        });
        this._adminTeamPermissionDefinitionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.listTeamPermissionDefinitions();
        });
        this._adminProjectPermissionDefinitionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.listProjectPermissionDefinitions();
        });
        this._svixTokenCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.getSvixToken();
        });
        this._metricsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [includeAnonymous] = param;
            return await this._interface.getMetrics(includeAnonymous);
        });
        this._userActivityCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [userId] = param;
            return await this._interface.getUserActivity(userId);
        });
        this._metricsUserCountsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.getMetricsUserCounts();
        });
        this._emailPreviewCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [themeId, themeTsxSource, templateId, templateTsxSource] = param;
            return await this._interface.renderEmailPreview({
                themeId,
                themeTsxSource,
                templateId,
                templateTsxSource
            });
        });
        this._emailPreviewWithEditableMarkersCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [themeId, themeTsxSource, templateId, templateTsxSource, editableSource] = param;
            return await this._interface.renderEmailPreview({
                themeId,
                themeTsxSource,
                templateId,
                templateTsxSource,
                editableMarkers: true,
                editableSource
            });
        });
        this._configOverridesCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            return await this._interface.getConfig();
        });
        this._stripeAccountInfoCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async ()=>{
            try {
                return await this._interface.getStripeAccountInfo();
            } catch (error) {
                if ((error === null || error === void 0 ? void 0 : error.status) === 404) return null;
                throw error;
            }
        });
        this._transactionsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCache"])(async (param)=>{
            let [cursor, limit, type, customerType, customerId] = param;
            return await this._interface.listTransactions({
                cursor,
                limit,
                type,
                customerType,
                customerId
            });
        });
    }
};
;
 //# sourceMappingURL=admin-app-impl.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StackAdminAppImpl",
    ()=>_StackAdminAppImpl,
    "_StackClientAppImpl",
    ()=>_StackClientAppImpl,
    "_StackServerAppImpl",
    ()=>_StackServerAppImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$server$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/server-app-impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$compile$2d$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/compile-time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$admin$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/admin-app-impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$client$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/client-app-impl.js [app-client] (ecmascript)");
;
;
;
;
//#region src/lib/stack-app/apps/implementations/index.ts
/**
* Prevents a circular dependency between the client and admin apps. For more information, see the documentation comment
* of `_StackClientAppImplIncomplete.LazyStackAdminAppImpl`.
*
* Note: This is an explicitly defined function that returns the new values (and not a barrel file with top-level side
* effects) because we have `sideEffects: false` in the package.json, and so it would be tree-shaken away if we just
* exported the values directly.
*/ function complete() {
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$client$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackClientAppImplIncomplete"].LazyStackAdminAppImpl.value = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$admin$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackAdminAppImplIncomplete"];
    return {
        _StackAdminAppImpl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$compile$2d$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrambleDuringCompileTime"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$admin$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackAdminAppImplIncomplete"]),
        _StackClientAppImpl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$compile$2d$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrambleDuringCompileTime"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$client$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackClientAppImplIncomplete"]),
        _StackServerAppImpl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$compile$2d$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrambleDuringCompileTime"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$server$2d$app$2d$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackServerAppImplIncomplete"])
    };
}
const { _StackAdminAppImpl, _StackClientAppImpl, _StackServerAppImpl } = complete();
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/client-app.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveClientApp",
    ()=>HexclaveClientApp,
    "StackClientApp",
    ()=>StackClientApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/index.js [app-client] (ecmascript)");
;
//#region src/lib/stack-app/apps/interfaces/client-app.ts
const HexclaveClientApp = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackClientAppImpl"];
const StackClientApp = HexclaveClientApp;
;
 //# sourceMappingURL=client-app.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/admin-app.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveAdminApp",
    ()=>HexclaveAdminApp,
    "StackAdminApp",
    ()=>StackAdminApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/index.js [app-client] (ecmascript)");
;
//#region src/lib/stack-app/apps/interfaces/admin-app.ts
const HexclaveAdminApp = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackAdminAppImpl"];
const StackAdminApp = HexclaveAdminApp;
;
 //# sourceMappingURL=admin-app.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/server-app.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveServerApp",
    ()=>HexclaveServerApp,
    "StackServerApp",
    ()=>StackServerApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/index.js [app-client] (ecmascript)");
;
//#region src/lib/stack-app/apps/interfaces/server-app.ts
const HexclaveServerApp = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StackServerAppImpl"];
const StackServerApp = HexclaveServerApp;
;
 //# sourceMappingURL=server-app.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$admin$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/admin-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$client$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/client-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$server$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/server-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/url-targets.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveAdminApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$admin$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAdminApp"],
    "HexclaveClientApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$client$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveClientApp"],
    "HexclaveServerApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$server$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveServerApp"],
    "StackAdminApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$admin$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackAdminApp"],
    "StackClientApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$client$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackClientApp"],
    "StackServerApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$server$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackServerApp"],
    "getPagePrompt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPagePrompt"],
    "stackAppInternalsSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$admin$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/admin-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$client$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/client-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$server$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/server-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/url-targets.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=a7808_%40stackframe_stack_dist_esm_lib_ef8f4520._.js.map