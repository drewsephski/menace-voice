(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructRedirectUrl",
    ()=>constructRedirectUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
;
//#region src/utils/url.ts
function constructRedirectUrl(redirectUrl, callbackUrlName) {
    if (typeof window === "undefined" || !window.location) throw new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("".concat(callbackUrlName, " option is required in a non-browser environment."), {
        redirectUrl
    });
    const retainedQueryParams = [
        "after_auth_return_to"
    ];
    const currentUrl = new URL(window.location.href);
    const url = redirectUrl ? new URL(redirectUrl, window.location.href) : new URL(window.location.href);
    for (const param of retainedQueryParams)if (currentUrl.searchParams.has(param)) url.searchParams.set(param, currentUrl.searchParams.get(param));
    url.hash = "";
    return url.toString();
}
;
 //# sourceMappingURL=url.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/browser-script.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrowserScript",
    ()=>BrowserScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$components$2f$elements$2f$ssr$2d$layout$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/components/elements/ssr-layout-effect.js [app-client] (ecmascript)");
;
;
//#region src/utils/browser-script.tsx
const script = ()=>{
    const attributes = [
        "data-joy-color-scheme",
        "data-mui-color-scheme",
        "data-theme",
        "data-color-scheme",
        "class"
    ];
    const getColorMode = (value)=>{
        if (value.includes("dark")) return "dark";
        if (value.includes("light")) return "light";
        return null;
    };
    const setTheme = (mode)=>{
        let el = document.getElementById("--stack-theme-mode");
        if (!el) {
            el = document.createElement("style");
            el.id = "--stack-theme-mode";
            el.innerHTML = "/* This tag is used by Stack Auth to set the theme in the browser without causing a hydration error (since React ignores additional tags in the <head>). We later use the `html:has(head > [data-stack-theme=XYZ])` selector to apply styles based on the theme. */";
            document.head.appendChild(el);
        }
        el.setAttribute("data-stack-theme", mode);
    };
    const colorToRGB = (color)=>{
        const temp = document.createElement("div");
        temp.style.color = color;
        document.body.appendChild(temp);
        const computedColor = getComputedStyle(temp).color;
        document.body.removeChild(temp);
        const match = computedColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (match) return [
            parseInt(match[1]),
            parseInt(match[2]),
            parseInt(match[3])
        ];
        return null;
    };
    const rgbToLuma = (rgb)=>{
        return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
    };
    const copyFromColorScheme = ()=>{
        const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme");
        if (colorScheme) {
            const mode = getColorMode(colorScheme);
            if (mode) {
                setTheme(mode);
                return true;
            }
        }
        return false;
    };
    const copyFromVariables = ()=>{
        let backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background");
        if (backgroundColor) {
            if (/^\d+\s\d+%\s\d+(\.\d+)?%$/.test(backgroundColor)) backgroundColor = "hsl(".concat(backgroundColor, ")");
            const rgb = colorToRGB(backgroundColor);
            if (rgb) {
                if (rgbToLuma(rgb) < 128) setTheme("dark");
                else setTheme("light");
                return true;
            }
        }
        return false;
    };
    const copyFromAttributes = ()=>{
        for (const attributeName of attributes){
            const colorTheme = document.documentElement.getAttribute(attributeName);
            if (colorTheme) {
                const mode = getColorMode(colorTheme);
                if (mode) {
                    setTheme(mode);
                    return true;
                }
            }
        }
        return false;
    };
    new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
            if (copyFromColorScheme()) return;
            if (mutation.attributeName && attributes.includes(mutation.attributeName) && copyFromAttributes()) return;
            if (copyFromVariables()) return;
        });
    }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: attributes
    });
    if (!copyFromColorScheme()) {
        if (!copyFromAttributes()) copyFromVariables();
    }
};
function BrowserScript(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$components$2f$elements$2f$ssr$2d$layout$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsrScript"], {
        nonce: props.nonce,
        script: "(".concat(script.toString(), ")()")
    });
}
;
 //# sourceMappingURL=browser-script.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/constants.tsx
__turbopack_context__.s([
    "DEFAULT_THEME",
    ()=>DEFAULT_THEME,
    "FONT_FAMILY",
    ()=>FONT_FAMILY,
    "FONT_SIZES",
    ()=>FONT_SIZES,
    "LINE_HEIGHTS",
    ()=>LINE_HEIGHTS,
    "LINK_COLORS",
    ()=>LINK_COLORS,
    "PRIMARY_FONT_COLORS",
    ()=>PRIMARY_FONT_COLORS,
    "SECONDARY_FONT_COLORS",
    ()=>SECONDARY_FONT_COLORS,
    "SELECTED_BACKGROUND_COLORS",
    ()=>SELECTED_BACKGROUND_COLORS,
    "SHADOW",
    ()=>SHADOW
]);
const FONT_SIZES = {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "md": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem"
};
const LINE_HEIGHTS = {
    "xs": "1rem",
    "sm": "1.25rem",
    "md": "1.5rem",
    "lg": "1.75rem",
    "xl": "2rem"
};
const FONT_FAMILY = "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"";
const PRIMARY_FONT_COLORS = {
    "dark": "white",
    "light": "black"
};
const SECONDARY_FONT_COLORS = {
    "dark": "#a8a8a8",
    "light": "#737373"
};
const SELECTED_BACKGROUND_COLORS = {
    "dark": "rgba(255, 255, 255, 0.1)",
    "light": "rgba(0, 0, 0, 0.04)"
};
const LINK_COLORS = {
    "dark": "#fff",
    "light": "#000"
};
const SHADOW = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
const DEFAULT_THEME = {
    light: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",
        card: "hsl(0 0% 100%)",
        cardForeground: "hsl(240 10% 3.9%)",
        popover: "hsl(0 0% 100%)",
        popoverForeground: "hsl(240 10% 3.9%)",
        primary: "hsl(240 5.9% 10%)",
        primaryForeground: "hsl(0 0% 98%)",
        secondary: "hsl(240 4.8% 95.9%)",
        secondaryForeground: "hsl(240 5.9% 10%)",
        muted: "hsl(240 4.8% 95.9%)",
        mutedForeground: "hsl(240 3.8% 46.1%)",
        accent: "hsl(240 4.8% 95.9%)",
        accentForeground: "hsl(240 5.9% 10%)",
        destructive: "hsl(0 84.2% 60.2%)",
        destructiveForeground: "hsl(0 0% 98%)",
        border: "hsl(240 5.9% 90%)",
        input: "hsl(240 5.9% 90%)",
        ring: "hsl(240 10% 3.9%)"
    },
    dark: {
        background: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
        card: "hsl(240 10% 3.9%)",
        cardForeground: "hsl(0 0% 98%)",
        popover: "hsl(240 10% 3.9%)",
        popoverForeground: "hsl(0 0% 98%)",
        primary: "hsl(0 0% 98%)",
        primaryForeground: "hsl(240 5.9% 10%)",
        secondary: "hsl(240 3.7% 15.9%)",
        secondaryForeground: "hsl(0 0% 98%)",
        muted: "hsl(240 3.7% 15.9%)",
        mutedForeground: "hsl(240 5% 64.9%)",
        accent: "hsl(240 3.7% 15.9%)",
        accentForeground: "hsl(0 0% 98%)",
        destructive: "hsl(0 62.8% 50%)",
        destructiveForeground: "hsl(0 0% 98%)",
        border: "hsl(240 3.7% 15.9%)",
        input: "hsl(240 3.7% 15.9%)",
        ring: "hsl(240 4.9% 83.9%)"
    },
    radius: "0.5rem"
};
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mountDevTool",
    ()=>mountDevTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
;
;
;
//#region src/dev-tool/index.ts
const OVERRIDE_KEY = "__hexclave-dev-tool-override";
function hasAppendChild(value) {
    return typeof value === "object" && value !== null && typeof Reflect.get(value, "appendChild") === "function";
}
function canMountIntoDom() {
    if (typeof window === "undefined" || typeof document === "undefined") return false;
    if (typeof document.createElement !== "function") return false;
    return hasAppendChild(Reflect.get(document, "body"));
}
function getOverride() {
    try {
        const val = localStorage.getItem(OVERRIDE_KEY);
        if (val === "true") return true;
        if (val === "false") return false;
    } catch (e) {}
    return null;
}
function shouldShow() {
    const override = getOverride();
    if (override !== null) return override;
    if (!canMountIntoDom()) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalhost"])(window.location.href);
}
let activeCleanup = null;
let activeApp = null;
let mountGeneration = 0;
let createDevToolPromise = null;
function loadCreateDevTool() {
    if (!createDevToolPromise) createDevToolPromise = __turbopack_context__.A("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/dev-tool-core.js [app-client] (ecmascript, async loader)").then((m)=>m.createDevTool).catch((err)=>{
        createDevToolPromise = null;
        throw err;
    });
    return createDevToolPromise;
}
function tryMount() {
    if (activeCleanup) {
        activeCleanup();
        activeCleanup = null;
    }
    if (!shouldShow() || !activeApp || !canMountIntoDom()) return;
    const generation = ++mountGeneration;
    const app = activeApp;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
        const createDevTool = await loadCreateDevTool();
        if (generation !== mountGeneration) return;
        if (!shouldShow() || activeApp !== app || !canMountIntoDom()) return;
        activeCleanup = createDevTool(app);
    }, {
        noErrorLogging: true,
        onError: (error)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("dev-tool-mount", error);
        }
    });
}
/**
* Mounts the Stack Auth dev tool on the page.
*
* - Only renders on localhost (or when overridden via console)
* - Lazily loads the dev tool UI via dynamic import
* - Returns a cleanup function to unmount
*
* Console commands (also work in production):
*   StackDevTool.enable()  — force-show the dev tool
*   StackDevTool.disable() — force-hide the dev tool
*   StackDevTool.reset()   — revert to default (localhost-only)
*/ function mountDevTool(app) {
    activeApp = app;
    tryMount();
    const myCleanup = activeCleanup;
    return ()=>{
        activeApp = null;
        if (activeCleanup === myCleanup && myCleanup != null) {
            activeCleanup = null;
            myCleanup();
        }
    };
}
if (typeof window !== "undefined") window.HexclaveDevTool = window.StackDevTool = {
    enable () {
        try {
            localStorage.setItem(OVERRIDE_KEY, "true");
        } catch (e) {}
        tryMount();
        console.log("[Stack DevTool] Enabled. Refresh if the panel does not appear.");
    },
    disable () {
        try {
            localStorage.setItem(OVERRIDE_KEY, "false");
        } catch (e) {}
        if (activeCleanup) {
            activeCleanup();
            activeCleanup = null;
        }
        console.log("[Stack DevTool] Disabled.");
    },
    reset () {
        try {
            localStorage.removeItem(OVERRIDE_KEY);
        } catch (e) {}
        if (shouldShow()) tryMount();
        else if (activeCleanup) {
            activeCleanup();
            activeCleanup = null;
        }
        console.log("[Stack DevTool] Reset to default (visible on localhost only).");
    }
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StackContext",
    ()=>StackContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
//#region src/providers/stack-context.tsx
const StackContext = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
;
 //# sourceMappingURL=stack-context.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-provider-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StackProviderClient",
    ()=>StackProviderClient,
    "UserSetter",
    ()=>UserSetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$client$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/interfaces/client-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
//#region src/providers/stack-provider-client.tsx
function StackProviderClient(props) {
    const app = props.serialized ? __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$interfaces$2f$client$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackClientApp"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].fromClientJson(props.app) : props.app;
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].__STACK_AUTH__ = {
        app
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackContext"].Provider, {
        value: {
            app
        },
        children: props.children
    });
}
function UserSetter(props) {
    const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStackApp"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserSetter.useEffect": ()=>{
            const promise = ({
                "UserSetter.useEffect.promise": async ()=>await props.userJsonPromise
            })["UserSetter.useEffect.promise"]();
            app[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].setCurrentUser(promise);
        }
    }["UserSetter.useEffect"], []);
    return null;
}
;
 //# sourceMappingURL=stack-provider-client.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/translation-provider-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranslationContext",
    ()=>TranslationContext,
    "TranslationProviderClient",
    ()=>TranslationProviderClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
//#region src/providers/translation-provider-client.tsx
const TranslationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function TranslationProviderClient(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TranslationContext.Provider, {
        value: {
            quetzalKeys: props.quetzalKeys,
            quetzalLocale: props.quetzalLocale
        },
        children: props.children
    });
}
;
 //# sourceMappingURL=translation-provider-client.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/translation-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranslationProvider",
    ()=>TranslationProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$generated$2f$quetzal$2d$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/generated/quetzal-translations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$translation$2d$provider$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/translation-provider-client.js [app-client] (ecmascript)");
;
;
;
;
//#region src/providers/translation-provider.tsx
function TranslationProvider(param) {
    let { lang, translationOverrides, children } = param;
    const locale = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$generated$2f$quetzal$2d$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quetzalLocales"].get(lang !== null && lang !== void 0 ? lang : void 0);
    const localeWithOverrides = new Map(locale);
    for (const [orig, override] of Object.entries(translationOverrides !== null && translationOverrides !== void 0 ? translationOverrides : {})){
        var _quetzalKeys_get;
        const key = (_quetzalKeys_get = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$generated$2f$quetzal$2d$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quetzalKeys"].get(orig)) !== null && _quetzalKeys_get !== void 0 ? _quetzalKeys_get : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(/* @__PURE__ */ new Error("Invalid translation override: Original key ".concat(JSON.stringify(orig), " not found. Make sure you are passing the correct values into the translationOverrides property of the component.")));
        localeWithOverrides.set(key, override);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$translation$2d$provider$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranslationProviderClient"], {
        quetzalKeys: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$generated$2f$quetzal$2d$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quetzalKeys"],
        quetzalLocale: localeWithOverrides,
        children
    });
}
;
 //# sourceMappingURL=translation-provider.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NextStackProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$provider$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-provider-client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$translation$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/translation-provider.js [app-client] (ecmascript)");
;
;
;
;
;
//#region src/providers/stack-provider.tsx
function NextStackProvider(param) {
    let { children, app, lang, translationOverrides } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$provider$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StackProviderClient"], {
        app: app[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].toClientJson(),
        serialized: true,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$translation$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranslationProvider"], {
                lang,
                translationOverrides,
                children
            })
        ]
    });
}
;
 //# sourceMappingURL=stack-provider.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-provider.js [app-client] (ecmascript) <export default as StackProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StackProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$providers$2f$stack$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/stack-provider.js [app-client] (ecmascript)");
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/providers/theme-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StackTheme",
    ()=>StackTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$ui$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_572fab2e476391d86ebaed05be63534e$2f$node_modules$2f40$stackframe$2f$stack$2d$ui$2f$dist$2f$esm$2f$components$2f$ui$2f$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-ui@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+react_572fab2e476391d86ebaed05be63534e/node_modules/@stackframe/stack-ui/dist/esm/components/ui/tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$color$40$5$2e$0$2e$3$2f$node_modules$2f$color$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/color@5.0.3/node_modules/color/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$generated$2f$global$2d$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/generated/global-css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$browser$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/browser-script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/utils/constants.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    .stack-scope {\n      ",
        '\n    }\n    html:has(head > [data-stack-theme="dark"]) .stack-scope { \n      ',
        "\n    }\n  "
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
;
;
//#region src/providers/theme-provider.tsx
function convertColorToCSSVars(obj) {
    return Object.fromEntries(Object.entries(obj).map((param)=>{
        let [key, value] = param;
        const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$color$40$5$2e$0$2e$3$2f$node_modules$2f$color$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value).hsl().array();
        return [
            key.replace(/[A-Z]/g, (m)=>"-".concat(m.toLowerCase())),
            "".concat(color[0], " ").concat(color[1], "% ").concat(color[2], "%")
        ];
    }));
}
function convertColorsToCSS(theme) {
    const { dark, light, ...rest } = theme;
    const colors = {
        light: {
            ...convertColorToCSSVars(light),
            ...rest
        },
        dark: convertColorToCSSVars(dark)
    };
    function colorsToCSSVars(colors) {
        return Object.entries(colors).map((params)=>{
            return "--".concat(params[0], ": ").concat(params[1], ";\n");
        }).join("");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"])(_templateObject(), colorsToCSSVars(colors.light), colorsToCSSVars(colors.dark));
}
function StackTheme(param) {
    let { theme, children, nonce } = param;
    const themeValue = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"],
        ...theme,
        dark: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"].dark,
            ...theme === null || theme === void 0 ? void 0 : theme.dark
        },
        light: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"].light,
            ...theme === null || theme === void 0 ? void 0 : theme.light
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$utils$2f$browser$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserScript"], {
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                suppressHydrationWarning: true,
                nonce,
                dangerouslySetInnerHTML: {
                    __html: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$generated$2f$global$2d$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalCSS"] + "\n" + convertColorsToCSS(themeValue)
                }
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$ui$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$react_572fab2e476391d86ebaed05be63534e$2f$node_modules$2f40$stackframe$2f$stack$2d$ui$2f$dist$2f$esm$2f$components$2f$ui$2f$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children
            })
        ]
    });
}
;
 //# sourceMappingURL=theme-provider.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/components/elements/ssr-layout-effect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SsrScript",
    ()=>SsrScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
//#region src/components/elements/ssr-layout-effect.tsx
function SsrScript(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SsrScript.useLayoutEffect": ()=>{
            (0, eval)(props.script);
        }
    }["SsrScript.useLayoutEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$25_$40$babel$2b$core$40$7$2e$29$2e$7_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom_6ba7cdcaec5cde500f6a59b53144a322$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("script", {
        suppressHydrationWarning: true,
        nonce: props.nonce,
        dangerouslySetInnerHTML: {
            __html: props.script
        }
    });
}
;
 //# sourceMappingURL=ssr-layout-effect.js.map
}),
]);

//# sourceMappingURL=a7808_%40stackframe_stack_dist_esm_c7cf5869._.js.map