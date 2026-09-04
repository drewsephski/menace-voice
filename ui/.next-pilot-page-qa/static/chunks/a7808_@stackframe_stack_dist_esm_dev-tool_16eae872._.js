(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/dev-tool-styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/dev-tool/dev-tool-styles.ts
__turbopack_context__.s([
    "devToolCSS",
    ()=>devToolCSS
]);
const devToolCSS = "\n  .stack-devtool {\n    --sdt-bg: #0a0a0b;\n    --sdt-bg-elevated: #141416;\n    --sdt-bg-hover: #1c1c1f;\n    --sdt-bg-active: #232326;\n    --sdt-bg-subtle: #111113;\n    --sdt-border: #2a2a2e;\n    --sdt-border-subtle: #1e1e22;\n    --sdt-text: #ececef;\n    --sdt-text-secondary: #8b8b93;\n    --sdt-text-tertiary: #5c5c66;\n    --sdt-accent: #6366f1;\n    --sdt-accent-hover: #818cf8;\n    --sdt-accent-muted: rgba(99, 102, 241, 0.15);\n    --sdt-success: #22c55e;\n    --sdt-success-muted: rgba(34, 197, 94, 0.15);\n    --sdt-warning: #eab308;\n    --sdt-warning-muted: rgba(234, 179, 8, 0.15);\n    --sdt-error: #ef4444;\n    --sdt-error-muted: rgba(239, 68, 68, 0.15);\n    --sdt-info: #3b82f6;\n    --sdt-info-muted: rgba(59, 130, 246, 0.15);\n    --sdt-overlay-bg: rgba(17, 17, 19, 0.92);\n    --sdt-radius: 8px;\n    --sdt-radius-sm: 4px;\n    --sdt-radius-lg: 12px;\n    --sdt-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n    --sdt-font-mono: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;\n    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);\n    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);\n\n    all: initial;\n    font-family: var(--sdt-font);\n    color: var(--sdt-text);\n    font-size: 13px;\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    box-sizing: border-box;\n  }\n\n  .stack-devtool *, .stack-devtool *::before, .stack-devtool *::after {\n    box-sizing: border-box;\n  }\n\n  /* Trigger pill */\n  .stack-devtool .sdt-trigger {\n    position: fixed;\n    z-index: 2147483647;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 36px;\n    height: 36px;\n    padding: 0;\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border);\n    border-radius: 10px;\n    cursor: grab;\n    box-shadow: var(--sdt-trigger-shadow);\n    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\n    user-select: none;\n    touch-action: none;\n  }\n\n  .stack-devtool .sdt-trigger-position-animated {\n    transition: left 0.14s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.14s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  .stack-devtool .sdt-trigger:hover {\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-accent);\n    box-shadow: var(--sdt-trigger-shadow), 0 0 0 1px var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-trigger:active {\n    cursor: grabbing;\n  }\n\n  .stack-devtool .sdt-trigger-logo {\n    width: 22px;\n    height: 22px;\n    border-radius: 6px;\n    background: var(--sdt-accent);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    line-height: 0;\n  }\n\n  /* Panel overlay */\n  .stack-devtool .sdt-panel {\n    position: fixed;\n    bottom: 60px;\n    right: 16px;\n    z-index: 99998;\n    width: 800px;\n    max-width: calc(100vw - 32px);\n    height: 520px;\n    max-height: calc(100vh - 80px);\n    background: var(--sdt-bg);\n    border: 1px solid var(--sdt-border);\n    border-radius: var(--sdt-radius-lg);\n    box-shadow: var(--sdt-shadow);\n    display: flex;\n    flex-direction: column;\n    overflow: visible;\n  }\n\n  .stack-devtool .sdt-panel-geometry-animated {\n    transition: width 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),\n                height 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),\n                right 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),\n                bottom 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),\n                border-radius 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),\n                border-color 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .stack-devtool .sdt-panel-fullscreen {\n    right: 0;\n    bottom: 0;\n    width: 100vw;\n    max-width: none;\n    height: 100vh;\n    max-height: none;\n    border: none;\n    border-radius: 0;\n  }\n\n  .stack-devtool .sdt-panel-inner {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    border-radius: var(--sdt-radius-lg);\n    animation: sdt-panel-enter 0.2s ease-out;\n  }\n\n  .stack-devtool .sdt-panel-fullscreen .sdt-panel-inner {\n    border-radius: 0;\n  }\n\n  .stack-devtool .sdt-panel-fullscreen .sdt-resize-handle {\n    display: none;\n  }\n\n  @keyframes sdt-panel-enter {\n    from {\n      opacity: 0;\n      transform: scale(0.95) translateY(8px);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  .stack-devtool .sdt-panel-exiting {\n    animation: sdt-panel-exit 0.15s ease-in forwards;\n  }\n\n  @keyframes sdt-panel-exit {\n    from {\n      opacity: 1;\n      transform: scale(1) translateY(0);\n    }\n    to {\n      opacity: 0;\n      transform: scale(0.95) translateY(8px);\n    }\n  }\n\n  /* Tab bar */\n  .stack-devtool .sdt-tabbar {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 44px;\n    padding: 0 8px;\n    background: var(--sdt-bg-subtle);\n    border-bottom: 1px solid var(--sdt-border);\n    flex-shrink: 0;\n    gap: 2px;\n    overflow-x: auto;\n  }\n\n  .stack-devtool .sdt-panel-fullscreen .sdt-tabbar {\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    right: 8px;\n    z-index: 2;\n    background: var(--sdt-overlay-bg);\n    border: 1px solid var(--sdt-border);\n    border-radius: var(--sdt-radius);\n    box-shadow: var(--sdt-trigger-shadow);\n  }\n\n  .stack-devtool .sdt-tab-indicator {\n    position: absolute;\n    top: 6px;\n    left: 0;\n    height: 32px;\n    background: var(--sdt-bg-active);\n    border-radius: var(--sdt-radius);\n    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),\n                width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    pointer-events: none;\n    z-index: 0;\n  }\n\n  .stack-devtool .sdt-tab {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    height: 32px;\n    padding: 0 12px;\n    background: transparent;\n    border: none;\n    border-radius: var(--sdt-radius);\n    cursor: pointer;\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--sdt-text-secondary);\n    transition: color 0.15s ease;\n    white-space: nowrap;\n    outline: none;\n  }\n\n  .stack-devtool .sdt-tab:hover {\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-tab[data-active=\"true\"] {\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-tab-icon {\n    width: 14px;\n    height: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-tabbar-spacer {\n    flex: 1;\n  }\n\n  .stack-devtool .sdt-tabbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-docs-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    height: 28px;\n    padding: 0 8px;\n    color: var(--sdt-text-secondary);\n    border-radius: var(--sdt-radius-sm);\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1;\n    text-decoration: none;\n    white-space: nowrap;\n    transition: color 0.15s ease, background 0.15s ease;\n  }\n\n  .stack-devtool .sdt-docs-link:hover {\n    color: var(--sdt-text);\n    background: var(--sdt-bg-hover);\n  }\n\n  .stack-devtool .sdt-docs-link-icon {\n    display: flex;\n    width: 13px;\n    height: 13px;\n    line-height: 0;\n  }\n\n  .stack-devtool .sdt-close-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    background: transparent;\n    border: none;\n    border-radius: var(--sdt-radius-sm);\n    cursor: pointer;\n    color: var(--sdt-text-tertiary);\n    transition: all 0.15s ease;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-close-btn:hover {\n    color: var(--sdt-text);\n    background: var(--sdt-bg-hover);\n  }\n\n  /* Tab content area */\n  .stack-devtool .sdt-content {\n    flex: 1;\n    position: relative;\n    overflow: hidden;\n    min-height: 0;\n  }\n\n  .stack-devtool .sdt-panel-fullscreen .sdt-content {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .stack-devtool .sdt-tab-layers {\n    position: absolute;\n    inset: 0;\n  }\n\n  .stack-devtool .sdt-tab-pane {\n    position: absolute;\n    inset: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 16px;\n    visibility: hidden;\n    pointer-events: none;\n  }\n\n  .stack-devtool .sdt-tab-pane-iframe {\n    padding: 0;\n    overflow: hidden;\n  }\n\n  .stack-devtool .sdt-tab-pane-active {\n    visibility: visible;\n    pointer-events: auto;\n    animation: sdt-tab-fade-in 0.15s ease-out;\n  }\n\n  @keyframes sdt-tab-fade-in {\n    from {\n      opacity: 0;\n      transform: translateY(6px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .stack-devtool .sdt-tab-pane::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  .stack-devtool .sdt-tab-pane::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  .stack-devtool .sdt-tab-pane::-webkit-scrollbar-thumb {\n    background: var(--sdt-border);\n    border-radius: 3px;\n  }\n\n  /* ===== Overview tab — single column ===== */\n\n  .stack-devtool .sdt-ov {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-width: 660px;\n    margin: 0 auto;\n  }\n\n  /* Card base */\n  .stack-devtool .sdt-ov-card {\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: 12px;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n    transition: box-shadow 0.2s ease, border-color 0.2s ease;\n    overflow: hidden;\n    min-width: 0;\n  }\n\n  .stack-devtool .sdt-ov-card-hero {\n    background: linear-gradient(135deg, rgba(99,102,241,0.04) 0%, transparent 50%), var(--sdt-bg-elevated);\n  }\n\n  .stack-devtool .sdt-ov-label {\n    font-size: 9px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1.2px;\n    color: var(--sdt-text-tertiary);\n    margin-bottom: 10px;\n  }\n\n  .stack-devtool .sdt-ov-user-row {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    margin-bottom: 14px;\n  }\n\n  .stack-devtool .sdt-ov-avatar {\n    width: 52px;\n    height: 52px;\n    border-radius: 50%;\n    background: var(--sdt-bg-hover);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--sdt-text-tertiary);\n    flex-shrink: 0;\n    border: 2px solid var(--sdt-border-subtle);\n    overflow: hidden;\n  }\n\n  .stack-devtool .sdt-ov-avatar-active {\n    background: var(--sdt-accent-muted);\n    color: var(--sdt-accent);\n    border-color: rgba(99,102,241,0.3);\n  }\n\n  .stack-devtool .sdt-ov-avatar img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 50%;\n  }\n\n  .stack-devtool .sdt-ov-user-meta {\n    min-width: 0;\n    flex: 1;\n  }\n\n  .stack-devtool .sdt-ov-user-name {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--sdt-text);\n    line-height: 1.2;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .stack-devtool .sdt-ov-user-email {\n    font-size: 12px;\n    font-family: var(--sdt-font-mono);\n    color: var(--sdt-text-secondary);\n    margin-top: 2px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .stack-devtool .sdt-ov-auth-indicator {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin-top: 5px;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--sdt-success);\n  }\n\n  .stack-devtool .sdt-ov-auth-indicator::before {\n    content: '';\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: var(--sdt-success);\n    box-shadow: 0 0 6px rgba(34,197,94,0.5);\n  }\n\n  /* Actions */\n  .stack-devtool .sdt-ov-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin-top: 4px;\n  }\n\n  .stack-devtool .sdt-ov-btn {\n    height: 30px;\n    padding: 0 12px;\n    border-radius: 6px;\n    border: none;\n    font-size: 12px;\n    font-weight: 600;\n    font-family: var(--sdt-font);\n    cursor: pointer;\n    transition: all 0.15s ease;\n    white-space: nowrap;\n  }\n  .stack-devtool .sdt-ov-btn:disabled { opacity: 0.4; cursor: not-allowed; }\n\n  .stack-devtool .sdt-ov-btn-primary {\n    background: var(--sdt-accent);\n    color: #fff;\n  }\n  .stack-devtool .sdt-ov-btn-primary:hover { background: var(--sdt-accent-hover); }\n\n  .stack-devtool .sdt-ov-btn-secondary {\n    background: var(--sdt-bg-hover);\n    color: var(--sdt-text);\n  }\n  .stack-devtool .sdt-ov-btn-secondary:hover { background: var(--sdt-bg-active); }\n\n  .stack-devtool .sdt-ov-btn-danger {\n    background: var(--sdt-error-muted);\n    color: var(--sdt-error);\n    border: 1px solid rgba(239, 68, 68, 0.15);\n  }\n  .stack-devtool .sdt-ov-btn-danger:hover { background: rgba(239, 68, 68, 0.2); }\n\n  .stack-devtool .sdt-ov-btn-wide { flex: 1; }\n\n  .stack-devtool .sdt-ov-email-input {\n    display: flex;\n    flex: 1 1 180px;\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: 6px;\n    overflow: hidden;\n    background: var(--sdt-bg);\n    transition: border-color 0.15s ease;\n  }\n  .stack-devtool .sdt-ov-email-input:focus-within {\n    border-color: var(--sdt-accent);\n    box-shadow: 0 0 0 2px var(--sdt-accent-muted);\n  }\n  .stack-devtool .sdt-ov-email-input input {\n    flex: 1;\n    height: 28px;\n    padding: 0 8px;\n    background: transparent;\n    border: none;\n    color: var(--sdt-text);\n    font-size: 11px;\n    font-family: var(--sdt-font);\n    outline: none;\n    min-width: 0;\n  }\n  .stack-devtool .sdt-ov-email-input input::placeholder { color: var(--sdt-text-tertiary); }\n  .stack-devtool .sdt-ov-email-input button {\n    width: 28px;\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    border-left: 1px solid var(--sdt-border-subtle);\n    background: transparent;\n    color: var(--sdt-accent);\n    cursor: pointer;\n    flex-shrink: 0;\n    font-family: var(--sdt-font);\n  }\n  .stack-devtool .sdt-ov-email-input button:hover { background: var(--sdt-accent-muted); }\n  .stack-devtool .sdt-ov-email-input button:disabled { opacity: 0.3; cursor: not-allowed; }\n\n  .stack-devtool .sdt-ov-toast {\n    font-size: 11px;\n    padding: 5px 10px;\n    border-radius: 6px;\n    margin-top: 8px;\n    line-height: 1.4;\n  }\n  .stack-devtool .sdt-ov-toast-success { background: var(--sdt-success-muted); color: var(--sdt-success); }\n  .stack-devtool .sdt-ov-toast-error { background: var(--sdt-error-muted); color: var(--sdt-error); }\n\n  /* --- Auth methods card --- */\n  .stack-devtool .sdt-ov-card-auth {\n    padding: 14px 16px;\n  }\n\n  .stack-devtool .sdt-ov-auth-grid {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px;\n  }\n\n  .stack-devtool .sdt-ov-method {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    font-size: 11px;\n    font-weight: 600;\n    border: 1px solid var(--sdt-border-subtle);\n    background: var(--sdt-bg);\n    transition: all 0.15s ease;\n  }\n\n  .stack-devtool .sdt-ov-method-on {\n    color: var(--sdt-text);\n    background: var(--sdt-success-muted);\n    border-color: rgba(34, 197, 94, 0.12);\n  }\n\n  .stack-devtool .sdt-ov-method-off {\n    color: var(--sdt-text-tertiary);\n    opacity: 0.5;\n    border-style: dashed;\n  }\n\n  .stack-devtool .sdt-ov-method-oauth {\n    text-transform: capitalize;\n  }\n\n  .stack-devtool .sdt-ov-method-warn {\n    color: var(--sdt-warning);\n    border-color: rgba(234, 179, 8, 0.2);\n  }\n\n  .stack-devtool .sdt-ov-skeleton-pill {\n    width: 64px;\n    height: 26px;\n    border-radius: 6px;\n    background: var(--sdt-bg-hover);\n    border: 1px solid var(--sdt-border-subtle);\n    animation: sdt-ov-shimmer 1.5s ease-in-out infinite;\n  }\n\n  @keyframes sdt-ov-shimmer {\n    0%, 100% { opacity: 0.4; }\n    50% { opacity: 0.7; }\n  }\n\n  /* --- Setup checklist card (only shown when something is incomplete) --- */\n  .stack-devtool .sdt-ov-card-checks {\n    padding: 14px 16px;\n    border-color: rgba(234, 179, 8, 0.25);\n  }\n\n  .stack-devtool .sdt-ov-checks-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    margin-bottom: 8px;\n  }\n\n  .stack-devtool .sdt-ov-checks-badge {\n    font-size: 10px;\n    font-weight: 700;\n    padding: 1px 6px;\n    border-radius: 4px;\n  }\n\n  .stack-devtool .sdt-ov-checks-badge-ok {\n    background: var(--sdt-success-muted);\n    color: var(--sdt-success);\n  }\n\n  .stack-devtool .sdt-ov-checks-badge-warn {\n    background: var(--sdt-warning-muted);\n    color: var(--sdt-warning);\n  }\n\n  .stack-devtool .sdt-ov-checks-bar {\n    height: 3px;\n    border-radius: 2px;\n    background: var(--sdt-border-subtle);\n    margin-bottom: 10px;\n    overflow: hidden;\n  }\n\n  .stack-devtool .sdt-ov-checks-bar-fill {\n    height: 100%;\n    border-radius: 2px;\n    background: var(--sdt-warning);\n    transition: width 0.4s ease;\n  }\n\n  .stack-devtool .sdt-ov-setup-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 0;\n    font-size: 12px;\n    border-bottom: 1px solid var(--sdt-border-subtle);\n  }\n\n  .stack-devtool .sdt-ov-setup-row:last-child { border-bottom: none; }\n\n  .stack-devtool .sdt-ov-setup-dot {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-ov-setup-dot-ok { background: var(--sdt-success); }\n  .stack-devtool .sdt-ov-setup-dot-warn { background: var(--sdt-warning); }\n\n  .stack-devtool .sdt-ov-setup-label {\n    color: var(--sdt-text);\n    font-size: 12px;\n  }\n\n  .stack-devtool .sdt-ov-setup-hint {\n    margin-left: auto;\n    font-size: 11px;\n    color: var(--sdt-text-tertiary);\n  }\n\n  /* Status badges (shared across tabs) */\n  .stack-devtool .sdt-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    font-weight: 500;\n  }\n  .stack-devtool .sdt-badge-success { background: var(--sdt-success-muted); color: var(--sdt-success); }\n  .stack-devtool .sdt-badge-warning { background: var(--sdt-warning-muted); color: var(--sdt-warning); }\n  .stack-devtool .sdt-badge-error { background: var(--sdt-error-muted); color: var(--sdt-error); }\n  .stack-devtool .sdt-badge-info { background: var(--sdt-info-muted); color: var(--sdt-info); }\n\n  /* ===== Components / Pages tab ===== */\n\n  .stack-devtool .sdt-pg-layout {\n    display: flex;\n    height: calc(100% + 32px);\n    margin: -16px;\n  }\n\n  /* --- Sidebar --- */\n  .stack-devtool .sdt-pg-sidebar {\n    width: 250px;\n    flex-shrink: 0;\n    border-right: 1px solid var(--sdt-border);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n\n  .stack-devtool .sdt-pg-sidebar-head {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 12px 14px 8px;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-pg-sidebar-title {\n    font-size: 10px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: var(--sdt-text-tertiary);\n  }\n\n  .stack-devtool .sdt-pg-sidebar-count {\n    font-size: 10px;\n    font-weight: 700;\n    color: var(--sdt-text-tertiary);\n    background: var(--sdt-bg-active);\n    padding: 0 5px;\n    border-radius: 6px;\n    line-height: 18px;\n  }\n\n  .stack-devtool .sdt-pg-sidebar-warn {\n    margin-left: auto;\n    font-size: 10px;\n    font-weight: 700;\n    color: var(--sdt-warning);\n    background: var(--sdt-warning-muted);\n    padding: 0 6px;\n    border-radius: 6px;\n    line-height: 18px;\n  }\n\n  .stack-devtool .sdt-pg-list {\n    flex: 1;\n    overflow-y: auto;\n    padding: 0 6px 6px;\n  }\n\n  /* --- List item --- */\n  .stack-devtool .sdt-pg-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 7px 10px;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: background 0.12s ease;\n    font-size: 13px;\n    color: var(--sdt-text);\n    position: relative;\n  }\n\n  .stack-devtool .sdt-pg-item:hover {\n    background: var(--sdt-bg-hover);\n  }\n\n  .stack-devtool .sdt-pg-item[data-selected=\"true\"] {\n    background: var(--sdt-accent-muted);\n  }\n\n  .stack-devtool .sdt-pg-item[data-selected=\"true\"] .sdt-pg-item-label {\n    color: var(--sdt-accent-hover);\n    font-weight: 600;\n  }\n\n  .stack-devtool .sdt-pg-item-dot {\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    flex-shrink: 0;\n  }\n  .stack-devtool .sdt-pg-item-dot-handler { background: var(--sdt-info); }\n  .stack-devtool .sdt-pg-item-dot-custom { background: var(--sdt-success); }\n  .stack-devtool .sdt-pg-item-dot-warn {\n    background: var(--sdt-warning);\n    box-shadow: 0 0 6px rgba(234, 179, 8, 0.4);\n  }\n\n  .stack-devtool .sdt-pg-item-label {\n    flex: 1;\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  /* --- Badges --- */\n  .stack-devtool .sdt-pg-badge {\n    display: inline-flex;\n    align-items: center;\n    height: 20px;\n    padding: 0 7px;\n    border-radius: 10px;\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.2px;\n    flex-shrink: 0;\n    line-height: 1;\n  }\n\n  .stack-devtool .sdt-pg-badge-outdated { background: var(--sdt-warning-muted); color: var(--sdt-warning); }\n\n  /* --- Empty state --- */\n  .stack-devtool .sdt-pg-empty {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    text-align: center;\n  }\n\n  .stack-devtool .sdt-pg-empty-icon {\n    color: var(--sdt-text-tertiary);\n    opacity: 0.35;\n    margin-bottom: 4px;\n  }\n\n  .stack-devtool .sdt-pg-empty-text {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--sdt-text-secondary);\n  }\n\n  .stack-devtool .sdt-pg-empty-sub {\n    font-size: 12px;\n    color: var(--sdt-text-tertiary);\n  }\n\n  /* --- Main panel --- */\n  .stack-devtool .sdt-pg-main {\n    flex: 1;\n    overflow-y: auto;\n    padding: 16px 18px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  /* --- Detail view --- */\n  .stack-devtool .sdt-pg-detail {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  /* Header */\n  .stack-devtool .sdt-pg-header {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n\n  .stack-devtool .sdt-pg-header-top {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n  }\n\n  .stack-devtool .sdt-pg-title {\n    font-size: 15px;\n    font-weight: 700;\n    margin: 0;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-pg-title-url {\n    min-width: 0;\n    max-width: 280px;\n    color: var(--sdt-text-tertiary);\n    font-family: var(--sdt-font-mono);\n    font-size: 11px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-decoration: none;\n  }\n\n  .stack-devtool .sdt-pg-title-url:hover {\n    color: var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-pg-subtitle {\n    font-size: 12px;\n    color: var(--sdt-text-secondary);\n    line-height: 1.4;\n  }\n\n  .stack-devtool .sdt-pg-code-inline {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-top: 4px;\n  }\n\n  .stack-devtool .sdt-pg-code {\n    flex: 1;\n    min-width: 0;\n    font-family: var(--sdt-font-mono);\n    font-size: 12px;\n    color: var(--sdt-accent);\n    background: var(--sdt-bg-elevated);\n    border-radius: 6px;\n    padding: 6px 10px;\n    border: 1px solid var(--sdt-border-subtle);\n  }\n\n  /* --- Copy button --- */\n  .stack-devtool .sdt-pg-copy-btn {\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 6px;\n    border: 1px solid var(--sdt-border);\n    background: var(--sdt-bg-active);\n    color: var(--sdt-text-secondary);\n    cursor: pointer;\n    font-size: 11px;\n    font-weight: 600;\n    font-family: var(--sdt-font);\n    transition: all 0.12s ease;\n    flex-shrink: 0;\n    white-space: nowrap;\n  }\n\n  .stack-devtool .sdt-pg-open-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    height: 32px;\n    padding: 0 12px;\n    font-size: 12px;\n  }\n\n  .stack-devtool .sdt-pg-open-btn svg {\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-pg-copy-btn:hover {\n    background: var(--sdt-bg-hover);\n    color: var(--sdt-text);\n    border-color: var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-pg-copy-btn-ok {\n    border-color: rgba(34, 197, 94, 0.3);\n    color: var(--sdt-success);\n    background: var(--sdt-success-muted);\n  }\n\n  /* --- Update banner --- */\n  .stack-devtool .sdt-pg-update-banner {\n    display: flex;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 10px 14px;\n    background: rgba(234, 179, 8, 0.08);\n    border: 1px solid rgba(234, 179, 8, 0.3);\n    border-radius: 10px;\n  }\n\n  .stack-devtool .sdt-pg-update-banner-icon {\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: rgba(234, 179, 8, 0.2);\n    color: var(--sdt-warning);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    font-weight: 800;\n    flex-shrink: 0;\n    margin-top: 1px;\n  }\n\n  .stack-devtool .sdt-pg-update-banner-body {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .stack-devtool .sdt-pg-update-banner-title {\n    font-size: 13px;\n    font-weight: 700;\n    color: var(--sdt-warning);\n    margin-bottom: 2px;\n  }\n\n  .stack-devtool .sdt-pg-update-banner-text {\n    font-size: 12px;\n    color: var(--sdt-text-secondary);\n    line-height: 1.5;\n  }\n\n  .stack-devtool .sdt-pg-update-banner-text strong {\n    color: var(--sdt-text);\n    font-weight: 600;\n  }\n\n  /* --- Sections (changelog, prompt) --- */\n  .stack-devtool .sdt-pg-section {\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: 10px;\n    padding: 12px 14px;\n    background: var(--sdt-bg-elevated);\n  }\n\n  .stack-devtool .sdt-pg-section-warn {\n    border-color: rgba(234, 179, 8, 0.25);\n    background: rgba(234, 179, 8, 0.03);\n  }\n\n  .stack-devtool .sdt-pg-section-label {\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--sdt-text-secondary);\n    margin-bottom: 8px;\n  }\n\n  .stack-devtool .sdt-pg-section-warn .sdt-pg-section-label {\n    color: var(--sdt-warning);\n  }\n\n  .stack-devtool .sdt-pg-section-footer {\n    display: flex;\n    margin-top: 8px;\n  }\n\n  /* Changelog list */\n  .stack-devtool .sdt-pg-changelog-list {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n\n  .stack-devtool .sdt-pg-changelog-item {\n    display: flex;\n    align-items: flex-start;\n    gap: 8px;\n    font-size: 12px;\n    color: var(--sdt-text);\n    line-height: 1.5;\n  }\n\n  .stack-devtool .sdt-pg-changelog-bullet {\n    flex-shrink: 0;\n    font-size: 12px;\n    line-height: 1.5;\n  }\n\n  /* Pre block */\n  .stack-devtool .sdt-pg-pre {\n    font-family: var(--sdt-font-mono);\n    font-size: 11px;\n    line-height: 1.6;\n    color: var(--sdt-text);\n    background: var(--sdt-bg);\n    border-radius: 6px;\n    padding: 10px 12px;\n    margin: 0;\n    white-space: pre-wrap;\n    word-break: break-word;\n    max-height: 200px;\n    overflow-y: auto;\n    border: 1px solid var(--sdt-border-subtle);\n  }\n\n  .stack-devtool .sdt-preview-loading,\n  .stack-devtool .sdt-preview-unavailable {\n    font-size: 12px;\n    color: var(--sdt-text-secondary);\n    line-height: 1.5;\n  }\n\n  .stack-devtool .sdt-preview-error {\n    font-size: 12px;\n    color: var(--sdt-error);\n    line-height: 1.5;\n  }\n\n  .stack-devtool .sdt-preview-code {\n    font-family: var(--sdt-font-mono);\n    font-size: 11px;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-props-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 12px;\n  }\n\n  .stack-devtool .sdt-props-table th {\n    text-align: left;\n    font-weight: 600;\n    color: var(--sdt-text-tertiary);\n    padding: 6px 8px;\n    border-bottom: 1px solid var(--sdt-border);\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n\n  .stack-devtool .sdt-props-table td {\n    padding: 6px 8px;\n    border-bottom: 1px solid var(--sdt-border-subtle);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-props-table td:first-child {\n    font-family: var(--sdt-font-mono);\n    color: var(--sdt-accent-hover);\n  }\n\n  .stack-devtool .sdt-props-table td:last-child {\n    font-family: var(--sdt-font-mono);\n    color: var(--sdt-text-secondary);\n  }\n\n  /* Iframe tabs */\n  .stack-devtool .sdt-iframe-container {\n    position: relative;\n    flex: 1;\n    min-height: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .stack-devtool .sdt-iframe-toolbar {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    z-index: 1;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 8px;\n    padding: 0;\n  }\n\n  .stack-devtool .sdt-panel-fullscreen .sdt-iframe-toolbar {\n    top: 60px;\n    right: 12px;\n  }\n\n  .stack-devtool .sdt-iframe-open-link {\n    display: inline-flex;\n    align-items: center;\n    min-height: 28px;\n    padding: 0 10px;\n    background: var(--sdt-overlay-bg);\n    border: 1px solid var(--sdt-border);\n    border-radius: var(--sdt-radius-sm);\n    color: var(--sdt-accent-hover);\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1;\n    text-decoration: none;\n  }\n\n  .stack-devtool .sdt-iframe-open-link:hover {\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-iframe-container iframe {\n    flex: 1;\n    min-height: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    background: white;\n    border-radius: 0;\n  }\n\n  .stack-devtool .sdt-iframe-loading {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--sdt-text-secondary);\n    font-size: 13px;\n  }\n\n  .stack-devtool .sdt-iframe-error {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    color: var(--sdt-text-secondary);\n    font-size: 13px;\n  }\n\n  .stack-devtool .sdt-iframe-error-btn {\n    padding: 6px 16px;\n    background: var(--sdt-accent);\n    color: white;\n    border: none;\n    border-radius: var(--sdt-radius);\n    cursor: pointer;\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    transition: background 0.15s ease;\n  }\n\n  .stack-devtool .sdt-iframe-error-btn:hover {\n    background: var(--sdt-accent-hover);\n  }\n\n  /* Shared content fade animation */\n  .stack-devtool .sdt-tab-content-fade {\n    animation: sdt-tab-fade-in 0.15s ease-out;\n  }\n\n  /* Console tab */\n  .stack-devtool .sdt-console-panel {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-height: 0;\n  }\n\n  .stack-devtool .sdt-console-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-bottom: 12px;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-console-title {\n    color: var(--sdt-text);\n    font-size: 13px;\n    font-weight: 600;\n  }\n\n  .stack-devtool .sdt-console-actions {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n  }\n\n  .stack-devtool .sdt-console-action-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    height: 28px;\n    padding: 0 9px;\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border);\n    border-radius: var(--sdt-radius-sm);\n    color: var(--sdt-text-secondary);\n    cursor: pointer;\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1;\n    transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;\n    white-space: nowrap;\n  }\n\n  .stack-devtool .sdt-console-action-btn:hover {\n    color: var(--sdt-text);\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-border);\n  }\n\n  .stack-devtool .sdt-console-action-btn svg {\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-console-log-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow: auto;\n  }\n\n  .stack-devtool .sdt-console-tabs {\n    position: relative;\n    display: flex;\n    flex: 1;\n    gap: 2px;\n    background: var(--sdt-bg-subtle);\n    border-radius: var(--sdt-radius);\n    padding: 2px;\n  }\n\n  .stack-devtool .sdt-console-tab-indicator {\n    position: absolute;\n    top: 2px;\n    left: 0;\n    background: var(--sdt-bg-active);\n    border-radius: var(--sdt-radius-sm);\n    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),\n                width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    pointer-events: none;\n    z-index: 0;\n  }\n\n  .stack-devtool .sdt-console-tab {\n    position: relative;\n    z-index: 1;\n    flex: 1;\n    padding: 6px 12px;\n    background: transparent;\n    border: none;\n    border-radius: var(--sdt-radius-sm);\n    cursor: pointer;\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--sdt-text-secondary);\n    transition: color 0.15s ease;\n    text-align: center;\n  }\n\n  .stack-devtool .sdt-console-tab:hover {\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-console-tab[data-active=\"true\"] {\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-log-list {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n\n  .stack-devtool .sdt-log-load-hint {\n    padding: 8px 10px;\n    color: var(--sdt-text-tertiary);\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    text-align: center;\n  }\n\n  .stack-devtool .sdt-log-item {\n    display: flex;\n    align-items: flex-start;\n    gap: 8px;\n    padding: 8px 10px;\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius-sm);\n    font-size: 12px;\n    font-family: var(--sdt-font-mono);\n  }\n\n  .stack-devtool .sdt-log-time {\n    color: var(--sdt-text-tertiary);\n    flex-shrink: 0;\n    font-size: 11px;\n  }\n\n  .stack-devtool .sdt-log-type {\n    padding: 1px 6px;\n    border-radius: 4px;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-log-message {\n    flex: 1;\n    color: var(--sdt-text);\n    word-break: break-all;\n  }\n\n  .stack-devtool .sdt-log-method {\n    padding: 1px 6px;\n    border-radius: 4px;\n    font-size: 10px;\n    font-weight: 600;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-log-method-get {\n    background: var(--sdt-info-muted);\n    color: var(--sdt-info);\n  }\n\n  .stack-devtool .sdt-log-method-post {\n    background: var(--sdt-success-muted);\n    color: var(--sdt-success);\n  }\n\n  .stack-devtool .sdt-log-method-put, .stack-devtool .sdt-log-method-patch {\n    background: var(--sdt-warning-muted);\n    color: var(--sdt-warning);\n  }\n\n  .stack-devtool .sdt-log-method-delete {\n    background: var(--sdt-error-muted);\n    color: var(--sdt-error);\n  }\n\n  .stack-devtool .sdt-log-status {\n    font-size: 11px;\n    flex-shrink: 0;\n  }\n\n  .stack-devtool .sdt-log-status-ok {\n    color: var(--sdt-success);\n  }\n\n  .stack-devtool .sdt-log-status-err {\n    color: var(--sdt-error);\n  }\n\n  .stack-devtool .sdt-log-url {\n    flex: 1;\n    color: var(--sdt-text);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .stack-devtool .sdt-empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    padding: 40px 20px;\n    color: var(--sdt-text-tertiary);\n    font-size: 13px;\n    text-align: center;\n    gap: 4px;\n  }\n\n  .stack-devtool .sdt-empty-state-icon {\n    font-size: 24px;\n    margin-bottom: 8px;\n    opacity: 0.5;\n  }\n\n  /* Config info table */\n  .stack-devtool .sdt-config-table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n\n  .stack-devtool .sdt-config-table td {\n    padding: 8px 10px;\n    border-bottom: 1px solid var(--sdt-border-subtle);\n    font-size: 12px;\n  }\n\n  .stack-devtool .sdt-config-table td:first-child {\n    color: var(--sdt-text-secondary);\n    width: 160px;\n    font-weight: 500;\n  }\n\n  .stack-devtool .sdt-config-table td:last-child {\n    color: var(--sdt-text);\n    font-family: var(--sdt-font-mono);\n    word-break: break-all;\n  }\n\n  .stack-devtool .sdt-config-table td .sdt-config-link {\n    font-family: inherit;\n    color: var(--sdt-accent);\n    text-decoration: underline;\n    text-underline-offset: 2px;\n  }\n\n  .stack-devtool .sdt-config-table td .sdt-config-link:hover {\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-config-muted {\n    color: var(--sdt-text-tertiary);\n    font-style: italic;\n  }\n\n  /* Resize handle */\n  .stack-devtool .sdt-resize-handle {\n    position: absolute;\n    top: 0;\n    left: -4px;\n    width: 8px;\n    height: 100%;\n    cursor: ew-resize;\n    z-index: 10;\n  }\n\n  .stack-devtool .sdt-resize-handle::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 3px;\n    width: 2px;\n    height: 32px;\n    transform: translateY(-50%);\n    background: transparent;\n    border-radius: 1px;\n    transition: background 0.15s ease;\n  }\n\n  .stack-devtool .sdt-resize-handle:hover::after,\n  .stack-devtool .sdt-resize-handle:active::after {\n    background: var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-resize-handle-top {\n    position: absolute;\n    top: -4px;\n    left: 0;\n    width: 100%;\n    height: 8px;\n    cursor: ns-resize;\n    z-index: 10;\n  }\n\n  .stack-devtool .sdt-resize-handle-top::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 3px;\n    height: 2px;\n    width: 32px;\n    transform: translateX(-50%);\n    background: transparent;\n    border-radius: 1px;\n    transition: background 0.15s ease;\n  }\n\n  .stack-devtool .sdt-resize-handle-top:hover::after,\n  .stack-devtool .sdt-resize-handle-top:active::after {\n    background: var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-resize-handle-corner {\n    position: absolute;\n    top: -6px;\n    left: -6px;\n    width: 14px;\n    height: 14px;\n    cursor: nwse-resize;\n    z-index: 11;\n  }\n\n  .stack-devtool .sdt-resize-handle-corner::after {\n    content: '';\n    position: absolute;\n    bottom: 4px;\n    right: 4px;\n    width: 5px;\n    height: 5px;\n    background: transparent;\n    border-radius: 50%;\n    transition: background 0.15s ease;\n  }\n\n  .stack-devtool .sdt-resize-handle-corner:hover::after,\n  .stack-devtool .sdt-resize-handle-corner:active::after {\n    background: var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-no-components {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    color: var(--sdt-text-tertiary);\n    font-size: 13px;\n    text-align: center;\n    padding: 20px;\n  }\n\n  /* Support tab */\n  .stack-devtool .sdt-support-tab {\n    display: flex;\n    flex-direction: column;\n    height: calc(100% + 32px);\n    margin: -16px;\n  }\n\n  .stack-devtool .sdt-support-feedback-pane {\n    padding: 20px;\n    height: 100%;\n    overflow-y: auto;\n  }\n\n  /* Form layout */\n  .stack-devtool .sdt-support-form {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n\n  /* Type cards */\n  .stack-devtool .sdt-support-type-cards {\n    display: flex;\n    gap: 8px;\n  }\n\n  .stack-devtool .sdt-support-type-card {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 8px 10px;\n    background: var(--sdt-bg);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius);\n    cursor: pointer;\n    font-family: var(--sdt-font);\n    font-size: 11px;\n    font-weight: 500;\n    color: var(--sdt-text-secondary);\n    transition: all 0.15s ease;\n  }\n\n  .stack-devtool .sdt-support-type-card svg {\n    flex-shrink: 0;\n    opacity: 0.6;\n    transition: opacity 0.15s ease;\n  }\n\n  .stack-devtool .sdt-support-type-card:hover {\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-border);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-support-type-card:hover svg {\n    opacity: 1;\n  }\n\n  .stack-devtool .sdt-support-type-card-active {\n    border-color: var(--sdt-accent);\n    background: var(--sdt-accent-muted);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-support-type-card-active svg {\n    opacity: 1;\n    color: var(--sdt-accent);\n  }\n\n  /* Field group */\n  .stack-devtool .sdt-support-field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n\n  .stack-devtool .sdt-support-label {\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--sdt-text-secondary);\n    letter-spacing: 0.3px;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  .stack-devtool .sdt-support-optional {\n    font-size: 10px;\n    font-weight: 400;\n    color: var(--sdt-text-tertiary);\n    text-transform: none;\n    letter-spacing: 0;\n  }\n\n  /* Inputs */\n  .stack-devtool .sdt-support-input,\n  .stack-devtool .sdt-support-textarea {\n    width: 100%;\n    padding: 9px 12px;\n    background: var(--sdt-bg);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius-sm);\n    color: var(--sdt-text);\n    font-family: var(--sdt-font);\n    font-size: 13px;\n    outline: none;\n    transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  }\n\n  .stack-devtool .sdt-support-input::placeholder,\n  .stack-devtool .sdt-support-textarea::placeholder {\n    color: var(--sdt-text-tertiary);\n  }\n\n  .stack-devtool .sdt-support-input:focus,\n  .stack-devtool .sdt-support-textarea:focus {\n    border-color: var(--sdt-accent);\n    box-shadow: 0 0 0 3px var(--sdt-accent-muted);\n  }\n\n  .stack-devtool .sdt-support-textarea {\n    resize: vertical;\n    min-height: 100px;\n    line-height: 1.6;\n  }\n\n  /* Submit button */\n  .stack-devtool .sdt-support-submit {\n    width: 100%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 9px 20px;\n    background: var(--sdt-accent);\n    color: white;\n    border: none;\n    border-radius: var(--sdt-radius);\n    cursor: pointer;\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 600;\n    letter-spacing: 0.2px;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 1px 3px rgba(99, 102, 241, 0.3);\n  }\n\n  .stack-devtool .sdt-support-submit:hover:not(:disabled) {\n    background: var(--sdt-accent-hover);\n    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n    transform: translateY(-1px);\n  }\n\n  .stack-devtool .sdt-support-submit:active:not(:disabled) {\n    transform: translateY(0);\n    box-shadow: 0 1px 2px rgba(99, 102, 241, 0.2);\n  }\n\n  .stack-devtool .sdt-support-submit:disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n    box-shadow: none;\n  }\n\n  .stack-devtool .sdt-support-submit svg {\n    flex-shrink: 0;\n  }\n\n  @keyframes sdt-spin {\n    to { transform: rotate(360deg); }\n  }\n\n  .stack-devtool .sdt-support-spinner {\n    animation: sdt-spin 1s linear infinite;\n  }\n\n  /* Status screens (success / error) */\n  .stack-devtool .sdt-support-status {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 32px 20px;\n    border-radius: var(--sdt-radius-lg);\n    text-align: center;\n    gap: 6px;\n  }\n\n  .stack-devtool .sdt-support-status-success {\n    background: linear-gradient(180deg, var(--sdt-success-muted), transparent 80%);\n    border: 1px solid rgba(34, 197, 94, 0.15);\n  }\n\n  .stack-devtool .sdt-support-status-error {\n    background: linear-gradient(180deg, var(--sdt-error-muted), transparent 80%);\n    border: 1px solid rgba(239, 68, 68, 0.15);\n  }\n\n  .stack-devtool .sdt-support-status-icon {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 6px;\n  }\n\n  .stack-devtool .sdt-support-status-success .sdt-support-status-icon {\n    background: rgba(34, 197, 94, 0.15);\n    color: var(--sdt-success);\n    box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);\n  }\n\n  .stack-devtool .sdt-support-status-error .sdt-support-status-icon {\n    background: rgba(239, 68, 68, 0.15);\n    color: var(--sdt-error);\n    box-shadow: 0 0 20px rgba(239, 68, 68, 0.1);\n  }\n\n  .stack-devtool .sdt-support-status-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-support-status-msg {\n    font-size: 12px;\n    color: var(--sdt-text-secondary);\n    line-height: 1.5;\n    max-width: 260px;\n  }\n\n  /* Support channels */\n  .stack-devtool .sdt-support-channels {\n    display: flex;\n    gap: 8px;\n  }\n\n  .stack-devtool .sdt-support-channel {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 8px 10px;\n    background: var(--sdt-bg);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius);\n    color: var(--sdt-text-secondary);\n    text-decoration: none;\n    font-size: 11px;\n    font-weight: 500;\n    transition: all 0.15s ease;\n  }\n\n  .stack-devtool .sdt-support-channel:hover {\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-border);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-support-channel svg {\n    flex-shrink: 0;\n    opacity: 0.6;\n    transition: opacity 0.15s ease;\n  }\n\n  .stack-devtool .sdt-support-channel:hover svg {\n    opacity: 1;\n  }\n\n  /* --- Light theme: system preference fallback --- */\n  @media (prefers-color-scheme: light) {\n    .stack-devtool {\n      --sdt-bg: #ffffff;\n      --sdt-bg-elevated: #f8f8fa;\n      --sdt-bg-hover: #f0f0f3;\n      --sdt-bg-active: #e8e8ec;\n      --sdt-bg-subtle: #fafafa;\n      --sdt-border: #e0e0e5;\n      --sdt-border-subtle: #eaeaef;\n      --sdt-text: #111113;\n      --sdt-text-secondary: #6b6b73;\n      --sdt-text-tertiary: #9b9ba3;\n      --sdt-accent: #6366f1;\n      --sdt-accent-hover: #4f46e5;\n      --sdt-accent-muted: rgba(99, 102, 241, 0.1);\n      --sdt-success: #16a34a;\n      --sdt-success-muted: rgba(22, 163, 74, 0.1);\n      --sdt-warning: #ca8a04;\n      --sdt-warning-muted: rgba(202, 138, 4, 0.1);\n      --sdt-error: #dc2626;\n      --sdt-error-muted: rgba(220, 38, 38, 0.1);\n      --sdt-info: #2563eb;\n      --sdt-info-muted: rgba(37, 99, 235, 0.1);\n      --sdt-overlay-bg: rgba(255, 255, 255, 0.92);\n      --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);\n      --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06);\n    }\n  }\n\n  /* Export dialog — positioned inside the dev tool panel */\n  .stack-devtool .sdt-share-overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 20;\n    background: rgba(0, 0, 0, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    animation: sdt-tab-fade-in 0.15s ease-out;\n    border-radius: var(--sdt-radius-lg);\n  }\n\n  .stack-devtool .sdt-share-dialog {\n    width: 380px;\n    max-width: calc(100% - 32px);\n    background: var(--sdt-bg);\n    border: 1px solid var(--sdt-border);\n    border-radius: var(--sdt-radius-lg);\n    box-shadow: var(--sdt-shadow);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  .stack-devtool .sdt-share-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .stack-devtool .sdt-share-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-share-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 20px;\n    color: var(--sdt-text-secondary);\n    font-size: 13px;\n  }\n\n  .stack-devtool .sdt-share-url-row {\n    display: flex;\n    gap: 6px;\n    align-items: center;\n  }\n\n  .stack-devtool .sdt-share-url-row .sdt-support-input {\n    flex: 1;\n    font-family: var(--sdt-font-mono);\n    font-size: 12px;\n  }\n\n  .stack-devtool .sdt-share-copy-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 36px;\n    height: 36px;\n    flex-shrink: 0;\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius-sm);\n    color: var(--sdt-text-secondary);\n    cursor: pointer;\n    transition: all 0.15s ease;\n  }\n\n  .stack-devtool .sdt-share-copy-btn:hover {\n    background: var(--sdt-bg-hover);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-share-actions {\n    display: flex;\n    gap: 8px;\n  }\n\n  .stack-devtool .sdt-share-action-btn {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 10px 12px;\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius);\n    color: var(--sdt-text-secondary);\n    text-decoration: none;\n    font-family: var(--sdt-font);\n    font-size: 12px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.15s ease;\n  }\n\n  .stack-devtool .sdt-share-action-btn:hover {\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-border);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-share-action-btn svg {\n    flex-shrink: 0;\n    opacity: 0.7;\n  }\n\n  .stack-devtool .sdt-share-action-btn:hover svg {\n    opacity: 1;\n  }\n\n  .stack-devtool .sdt-share-action-btn-accent {\n    background: var(--sdt-accent);\n    border-color: var(--sdt-accent);\n    color: white;\n  }\n\n  .stack-devtool .sdt-share-action-btn-accent:hover {\n    background: var(--sdt-accent-hover);\n    border-color: var(--sdt-accent-hover);\n    color: white;\n  }\n\n  .stack-devtool .sdt-share-action-btn-accent svg {\n    opacity: 1;\n  }\n\n  /* --- AI Chat tab --- */\n\n  .stack-devtool .sdt-ai-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .stack-devtool .sdt-ai-messages {\n    flex: 1;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 16px;\n    scroll-behavior: smooth;\n  }\n\n  .stack-devtool .sdt-ai-message-list {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  /* --- Empty state --- */\n\n  .stack-devtool .sdt-ai-empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    gap: 12px;\n    padding: 24px;\n    text-align: center;\n  }\n\n  .stack-devtool .sdt-ai-empty-icon {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: var(--sdt-accent-muted);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--sdt-accent);\n    margin-bottom: 4px;\n  }\n\n  .stack-devtool .sdt-ai-empty-title {\n    font-size: 16px;\n    font-weight: 600;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-ai-empty-desc {\n    font-size: 12px;\n    color: var(--sdt-text-secondary);\n    max-width: 320px;\n    line-height: 1.5;\n  }\n\n  .stack-devtool .sdt-ai-suggestions {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin-top: 8px;\n    width: 100%;\n    max-width: 340px;\n  }\n\n  .stack-devtool .sdt-ai-suggestion {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px 14px;\n    border-radius: var(--sdt-radius);\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n    color: var(--sdt-text-secondary);\n    font-size: 12px;\n    cursor: pointer;\n    text-align: left;\n    transition: all 0.15s ease;\n    font-family: var(--sdt-font);\n    line-height: 1.4;\n  }\n\n  .stack-devtool .sdt-ai-suggestion:hover {\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-border);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-ai-suggestion-icon {\n    font-size: 14px;\n    flex-shrink: 0;\n  }\n\n  /* --- Messages --- */\n\n  .stack-devtool .sdt-ai-msg {\n    display: flex;\n    gap: 10px;\n    align-items: flex-start;\n  }\n\n  .stack-devtool .sdt-ai-msg-user {\n    justify-content: flex-end;\n  }\n\n  .stack-devtool .sdt-ai-msg-assistant {\n    justify-content: flex-start;\n  }\n\n  .stack-devtool .sdt-ai-avatar {\n    width: 26px;\n    height: 26px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin-top: 2px;\n  }\n\n  .stack-devtool .sdt-ai-avatar-user {\n    background: var(--sdt-info-muted);\n    color: var(--sdt-info);\n    order: 2;\n  }\n\n  .stack-devtool .sdt-ai-avatar-assistant {\n    background: var(--sdt-accent-muted);\n    color: var(--sdt-accent);\n  }\n\n  .stack-devtool .sdt-ai-bubble {\n    min-width: 0;\n    max-width: 85%;\n    border-radius: var(--sdt-radius-lg);\n    padding: 10px 14px;\n  }\n\n  .stack-devtool .sdt-ai-bubble-user {\n    background: var(--sdt-info-muted);\n    border: 1px solid rgba(59, 130, 246, 0.1);\n  }\n\n  .stack-devtool .sdt-ai-bubble-user p {\n    font-size: 13px;\n    line-height: 1.55;\n    color: var(--sdt-text);\n    margin: 0;\n    word-break: break-word;\n  }\n\n  .stack-devtool .sdt-ai-bubble-assistant {\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n  }\n\n  /* --- Thinking dots --- */\n\n  .stack-devtool .sdt-ai-thinking {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 4px 0;\n  }\n\n  .stack-devtool .sdt-ai-thinking-dot {\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: var(--sdt-accent);\n    opacity: 0.5;\n    animation: sdt-ai-pulse 1.2s ease-in-out infinite;\n  }\n\n  .stack-devtool .sdt-ai-thinking-dot:nth-child(2) { animation-delay: 0.15s; }\n  .stack-devtool .sdt-ai-thinking-dot:nth-child(3) { animation-delay: 0.3s; }\n\n  @keyframes sdt-ai-pulse {\n    0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }\n    40% { opacity: 1; transform: scale(1.1); }\n  }\n\n  .stack-devtool .sdt-ai-streaming-indicator {\n    display: flex;\n    align-items: center;\n    gap: 3px;\n    margin-top: 6px;\n  }\n\n  /* --- Markdown content inside assistant bubble --- */\n\n  .stack-devtool .sdt-ai-paragraph {\n    font-size: 13px;\n    line-height: 1.6;\n    color: var(--sdt-text);\n    margin: 0 0 10px;\n    word-break: break-word;\n  }\n\n  .stack-devtool .sdt-ai-paragraph:last-child { margin-bottom: 0; }\n\n  .stack-devtool .sdt-ai-bold {\n    font-weight: 600;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-ai-inline-code {\n    display: inline;\n    padding: 1.5px 5px;\n    border-radius: 4px;\n    font-family: var(--sdt-font-mono);\n    font-size: 11.5px;\n    background: var(--sdt-bg-hover);\n    color: var(--sdt-text);\n    border: 1px solid var(--sdt-border-subtle);\n  }\n\n  .stack-devtool .sdt-ai-link {\n    color: var(--sdt-info);\n    text-decoration: none;\n    transition: color 0.1s;\n  }\n\n  .stack-devtool .sdt-ai-link:hover {\n    color: var(--sdt-accent-hover);\n    text-decoration: underline;\n    text-underline-offset: 2px;\n  }\n\n  .stack-devtool .sdt-ai-heading {\n    font-weight: 600;\n    color: var(--sdt-text);\n    margin: 12px 0 6px;\n    line-height: 1.35;\n  }\n\n  .stack-devtool .sdt-ai-heading:first-child { margin-top: 0; }\n\n  .stack-devtool .sdt-ai-bubble-assistant h1.sdt-ai-heading { font-size: 15px; }\n  .stack-devtool .sdt-ai-bubble-assistant h2.sdt-ai-heading { font-size: 13.5px; }\n  .stack-devtool .sdt-ai-bubble-assistant h3.sdt-ai-heading { font-size: 13px; }\n\n  .stack-devtool .sdt-ai-list {\n    font-size: 13px;\n    line-height: 1.6;\n    color: var(--sdt-text);\n    margin: 0 0 10px;\n    padding-left: 20px;\n  }\n\n  .stack-devtool .sdt-ai-list:last-child { margin-bottom: 0; }\n\n  .stack-devtool .sdt-ai-list li {\n    margin-bottom: 3px;\n    padding-left: 2px;\n  }\n\n  .stack-devtool .sdt-ai-list li::marker {\n    color: var(--sdt-text-tertiary);\n  }\n\n  .stack-devtool .sdt-ai-list-ordered {\n    list-style-type: decimal;\n  }\n\n  .stack-devtool .sdt-ai-tools {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin: 6px 0;\n  }\n\n  .stack-devtool .sdt-ai-part-text {\n    margin: 6px 0;\n  }\n\n  .stack-devtool .sdt-ai-tool-card {\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius);\n    background: var(--sdt-bg-subtle);\n    overflow: hidden;\n  }\n\n  .stack-devtool .sdt-ai-tool-header {\n    width: 100%;\n    border: none;\n    background: transparent;\n    color: inherit;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 10px;\n    cursor: pointer;\n    text-align: left;\n    font-family: var(--sdt-font);\n  }\n\n  .stack-devtool .sdt-ai-tool-header:hover {\n    background: var(--sdt-bg-hover);\n  }\n\n  .stack-devtool .sdt-ai-tool-name {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--sdt-text);\n    flex: 1;\n  }\n\n  .stack-devtool .sdt-ai-tool-status {\n    font-size: 10px;\n    text-transform: uppercase;\n    letter-spacing: 0.4px;\n    font-weight: 600;\n  }\n\n  .stack-devtool .sdt-ai-tool-status-running { color: var(--sdt-warning); }\n  .stack-devtool .sdt-ai-tool-status-success { color: var(--sdt-success); }\n  .stack-devtool .sdt-ai-tool-status-error { color: var(--sdt-error); }\n\n  .stack-devtool .sdt-ai-tool-chevron {\n    color: var(--sdt-text-tertiary);\n    font-size: 10px;\n    transition: transform 0.15s ease;\n  }\n\n  .stack-devtool .sdt-ai-tool-chevron-open {\n    transform: rotate(180deg);\n  }\n\n  .stack-devtool .sdt-ai-tool-body {\n    border-top: 1px solid var(--sdt-border-subtle);\n    padding: 8px 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n\n  .stack-devtool .sdt-ai-tool-label {\n    font-size: 10px;\n    text-transform: uppercase;\n    letter-spacing: 0.4px;\n    color: var(--sdt-text-tertiary);\n    font-weight: 600;\n  }\n\n  .stack-devtool .sdt-ai-tool-pre {\n    margin: 0;\n    padding: 8px;\n    border: 1px solid var(--sdt-border-subtle);\n    border-radius: var(--sdt-radius-sm);\n    background: var(--sdt-bg);\n    font-family: var(--sdt-font-mono);\n    font-size: 11px;\n    line-height: 1.5;\n    color: var(--sdt-text-secondary);\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n\n  .stack-devtool .sdt-ai-tool-running {\n    font-size: 11px;\n    color: var(--sdt-text-secondary);\n  }\n\n  .stack-devtool .sdt-ai-blockquote {\n    border-left: 3px solid var(--sdt-accent);\n    padding-left: 12px;\n    margin: 8px 0;\n    font-size: 13px;\n    color: var(--sdt-text-secondary);\n    font-style: italic;\n  }\n\n  .stack-devtool .sdt-ai-hr {\n    border: none;\n    border-top: 1px solid var(--sdt-border-subtle);\n    margin: 12px 0;\n  }\n\n  /* --- Code blocks --- */\n\n  .stack-devtool .sdt-ai-code-block {\n    border-radius: var(--sdt-radius);\n    overflow: hidden;\n    margin: 8px 0;\n    border: 1px solid var(--sdt-border-subtle);\n    background: var(--sdt-bg-subtle);\n  }\n\n  .stack-devtool .sdt-ai-code-block:last-child { margin-bottom: 0; }\n\n  .stack-devtool .sdt-ai-code-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 10px;\n    border-bottom: 1px solid var(--sdt-border-subtle);\n    background: var(--sdt-bg);\n  }\n\n  .stack-devtool .sdt-ai-code-lang {\n    font-size: 9px;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    color: var(--sdt-text-tertiary);\n    font-family: var(--sdt-font);\n  }\n\n  .stack-devtool .sdt-ai-copy-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--sdt-radius-sm);\n    border: none;\n    background: transparent;\n    color: var(--sdt-text-tertiary);\n    cursor: pointer;\n    font-size: 12px;\n    font-family: var(--sdt-font);\n    transition: all 0.15s ease;\n  }\n\n  .stack-devtool .sdt-ai-copy-btn:hover {\n    background: var(--sdt-bg-hover);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-ai-copy-btn-copied {\n    color: var(--sdt-success) !important;\n  }\n\n  .stack-devtool .sdt-ai-code-pre {\n    margin: 0;\n    padding: 10px 12px;\n    overflow-x: auto;\n    font-family: var(--sdt-font-mono);\n    font-size: 11.5px;\n    line-height: 1.6;\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-ai-code-pre code {\n    font-family: inherit;\n    background: none;\n    border: none;\n    padding: 0;\n  }\n\n  /* --- Error --- */\n\n  .stack-devtool .sdt-ai-error {\n    display: flex;\n    align-items: flex-start;\n    gap: 8px;\n    padding: 10px 14px;\n    margin: 8px 16px;\n    border-radius: var(--sdt-radius);\n    background: var(--sdt-error-muted);\n    border: 1px solid rgba(239, 68, 68, 0.2);\n    font-size: 12px;\n    color: var(--sdt-error);\n    line-height: 1.4;\n  }\n\n  /* --- Input area --- */\n\n  .stack-devtool .sdt-ai-input-area {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px 14px;\n    border-top: 1px solid var(--sdt-border-subtle);\n    background: var(--sdt-bg);\n  }\n\n  .stack-devtool .sdt-ai-new-chat {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    border-radius: var(--sdt-radius);\n    border: 1px solid var(--sdt-border-subtle);\n    background: var(--sdt-bg-elevated);\n    color: var(--sdt-text-secondary);\n    cursor: pointer;\n    flex-shrink: 0;\n    transition: all 0.15s ease;\n    font-family: var(--sdt-font);\n  }\n\n  .stack-devtool .sdt-ai-new-chat:hover {\n    background: var(--sdt-bg-hover);\n    border-color: var(--sdt-border);\n    color: var(--sdt-text);\n  }\n\n  .stack-devtool .sdt-ai-input-wrapper {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    border-radius: var(--sdt-radius);\n    background: var(--sdt-bg-elevated);\n    border: 1px solid var(--sdt-border-subtle);\n    padding: 0 4px 0 12px;\n    transition: border-color 0.15s ease;\n  }\n\n  .stack-devtool .sdt-ai-input-wrapper:focus-within {\n    border-color: var(--sdt-accent);\n    box-shadow: 0 0 0 2px var(--sdt-accent-muted);\n  }\n\n  .stack-devtool .sdt-ai-input {\n    flex: 1;\n    background: transparent;\n    border: none;\n    outline: none;\n    color: var(--sdt-text);\n    font-size: 13px;\n    font-family: var(--sdt-font);\n    padding: 8px 0;\n    min-width: 0;\n  }\n\n  .stack-devtool .sdt-ai-input::placeholder {\n    color: var(--sdt-text-tertiary);\n  }\n\n  .stack-devtool .sdt-ai-input:disabled {\n    opacity: 0.5;\n  }\n\n  .stack-devtool .sdt-ai-send-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    border-radius: 6px;\n    border: none;\n    background: transparent;\n    color: var(--sdt-text-tertiary);\n    cursor: not-allowed;\n    flex-shrink: 0;\n    transition: all 0.15s ease;\n    font-family: var(--sdt-font);\n  }\n\n  .stack-devtool .sdt-ai-send-btn-active {\n    background: var(--sdt-accent);\n    color: white;\n    cursor: pointer;\n  }\n\n  .stack-devtool .sdt-ai-send-btn-active:hover {\n    background: var(--sdt-accent-hover);\n  }\n\n  .stack-devtool .sdt-ai-stop-btn,\n  .stack-devtool .sdt-ai-stop-btn:hover {\n    background: var(--sdt-error);\n    color: white;\n  }\n\n  /* Accessible focus indicator for keyboard navigation */\n  .stack-devtool .sdt-tab:focus-visible {\n    outline: 2px solid var(--sdt-accent);\n    outline-offset: -2px;\n    border-radius: var(--sdt-radius);\n  }\n\n  /* Reduced motion: disable animations for users who prefer it */\n  @media (prefers-reduced-motion: reduce) {\n    .stack-devtool .sdt-panel-inner,\n    .stack-devtool .sdt-panel-exiting,\n    .stack-devtool .sdt-tab-content,\n    .stack-devtool .sdt-ov-pulse-dot,\n    .stack-devtool .sdt-ov-skeleton-pill,\n    .stack-devtool .sdt-support-spinner,\n    .stack-devtool .sdt-ai-thinking-dot {\n      animation: none !important;\n    }\n\n    .stack-devtool .sdt-tab-indicator,\n    .stack-devtool .sdt-tab {\n      transition: none !important;\n    }\n  }\n\n  /* --- Stack theme explicit overrides (take priority over system preference) --- */\n  html:has(head > [data-stack-theme=\"light\"]) .stack-devtool {\n    --sdt-bg: #ffffff;\n    --sdt-bg-elevated: #f8f8fa;\n    --sdt-bg-hover: #f0f0f3;\n    --sdt-bg-active: #e8e8ec;\n    --sdt-bg-subtle: #fafafa;\n    --sdt-border: #e0e0e5;\n    --sdt-border-subtle: #eaeaef;\n    --sdt-text: #111113;\n    --sdt-text-secondary: #6b6b73;\n    --sdt-text-tertiary: #9b9ba3;\n    --sdt-accent: #6366f1;\n    --sdt-accent-hover: #4f46e5;\n    --sdt-accent-muted: rgba(99, 102, 241, 0.1);\n    --sdt-success: #16a34a;\n    --sdt-success-muted: rgba(22, 163, 74, 0.1);\n    --sdt-warning: #ca8a04;\n    --sdt-warning-muted: rgba(202, 138, 4, 0.1);\n    --sdt-error: #dc2626;\n    --sdt-error-muted: rgba(220, 38, 38, 0.1);\n    --sdt-info: #2563eb;\n    --sdt-info-muted: rgba(37, 99, 235, 0.1);\n    --sdt-overlay-bg: rgba(255, 255, 255, 0.92);\n    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);\n    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06);\n  }\n\n  html:has(head > [data-stack-theme=\"dark\"]) .stack-devtool {\n    --sdt-bg: #0a0a0b;\n    --sdt-bg-elevated: #141416;\n    --sdt-bg-hover: #1c1c1f;\n    --sdt-bg-active: #232326;\n    --sdt-bg-subtle: #111113;\n    --sdt-border: #2a2a2e;\n    --sdt-border-subtle: #1e1e22;\n    --sdt-text: #ececef;\n    --sdt-text-secondary: #8b8b93;\n    --sdt-text-tertiary: #5c5c66;\n    --sdt-accent: #6366f1;\n    --sdt-accent-hover: #818cf8;\n    --sdt-accent-muted: rgba(99, 102, 241, 0.15);\n    --sdt-success: #22c55e;\n    --sdt-success-muted: rgba(34, 197, 94, 0.15);\n    --sdt-warning: #eab308;\n    --sdt-warning-muted: rgba(234, 179, 8, 0.15);\n    --sdt-error: #ef4444;\n    --sdt-error-muted: rgba(239, 68, 68, 0.15);\n    --sdt-info: #3b82f6;\n    --sdt-info-muted: rgba(59, 130, 246, 0.15);\n    --sdt-overlay-bg: rgba(17, 17, 19, 0.92);\n    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);\n    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  }\n";
;
 //# sourceMappingURL=dev-tool-styles.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/dev-tool-trigger-position.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/dev-tool/dev-tool-trigger-position.ts
__turbopack_context__.s([
    "TRIGGER_EDGE_MARGIN",
    ()=>TRIGGER_EDGE_MARGIN,
    "clampTriggerPosition",
    ()=>clampTriggerPosition,
    "getSnappedTriggerPlacement",
    ()=>getSnappedTriggerPlacement,
    "resolveTriggerPosition",
    ()=>resolveTriggerPosition
]);
const TRIGGER_EDGE_MARGIN = 16;
function getSnapBounds(triggerSize, viewport) {
    const maxLeft = Math.max(0, viewport.width - triggerSize.width);
    const maxTop = Math.max(0, viewport.height - triggerSize.height);
    const minLeft = Math.min(TRIGGER_EDGE_MARGIN, maxLeft);
    const minTop = Math.min(TRIGGER_EDGE_MARGIN, maxTop);
    return {
        minLeft,
        maxLeft: Math.max(minLeft, maxLeft - TRIGGER_EDGE_MARGIN),
        minTop,
        maxTop: Math.max(minTop, maxTop - TRIGGER_EDGE_MARGIN)
    };
}
/**
* Clamps a position so the trigger stays fully within the viewport.
* Used during drag to prevent the pill from leaving the screen.
*/ function clampTriggerPosition(position, triggerSize, viewport) {
    const maxLeft = Math.max(0, viewport.width - triggerSize.width);
    const maxTop = Math.max(0, viewport.height - triggerSize.height);
    return {
        left: Math.max(0, Math.min(position.left, maxLeft)),
        top: Math.max(0, Math.min(position.top, maxTop))
    };
}
/**
* Returns the exact pixel position for a corner placement.
* The trigger is always `TRIGGER_EDGE_MARGIN` px from both adjacent edges.
*/ function resolveTriggerPosition(placement, triggerSize, viewport) {
    const bounds = getSnapBounds(triggerSize, viewport);
    return clampTriggerPosition((()=>{
        switch(placement.corner){
            case "top-left":
                return {
                    left: bounds.minLeft,
                    top: bounds.minTop
                };
            case "top-right":
                return {
                    left: bounds.maxLeft,
                    top: bounds.minTop
                };
            case "bottom-left":
                return {
                    left: bounds.minLeft,
                    top: bounds.maxTop
                };
            case "bottom-right":
                return {
                    left: bounds.maxLeft,
                    top: bounds.maxTop
                };
        }
    })(), triggerSize, viewport);
}
/**
* Snaps a free position to the nearest corner by checking which viewport
* quadrant the trigger center falls in.
*/ function getSnappedTriggerPlacement(position, triggerSize, viewport) {
    const cx = position.left + triggerSize.width / 2;
    return {
        corner: position.top + triggerSize.height / 2 < viewport.height / 2 ? cx < viewport.width / 2 ? "top-left" : "top-right" : cx < viewport.width / 2 ? "bottom-left" : "bottom-right"
    };
}
;
 //# sourceMappingURL=dev-tool-trigger-position.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/dev-tool-core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDevTool",
    ()=>createDevTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack-shared@2.8.108_@types+react-dom@19.2.5_@types+react@19.2.18__@types+r_f98bded9a0de4d4422444a4ad21d24db/node_modules/@stackframe/stack-shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/url-targets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/lib/stack-app/apps/implementations/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/dev-tool-styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@stackframe+stack@2.8.108_@standard-schema+spec@1.1.0_@types+react-dom@19.2.5_@types+re_f9eb688a0e3c9094b0b325d46db95501/node_modules/@stackframe/stack/dist/esm/dev-tool/dev-tool-trigger-position.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/dev-tool/dev-tool-core.ts
const STORAGE_KEY = "__hexclave-dev-tool-state";
const TRIGGER_POS_KEY = "hexclave-devtool-trigger-position";
const ROOT_ID = "__hexclave-dev-tool-root";
const GLOBAL_INSTANCE_KEY = "__hexclave-dev-tool-instance";
const MAX_LOG_ENTRIES = 500;
const CONSOLE_LOG_BATCH_SIZE = 100;
const DRAG_THRESHOLD = 5;
const DOCS_URL = "https://docs.stack-auth.com";
const TABS = [
    {
        id: "overview",
        label: "Overview",
        icon: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>"
    },
    {
        id: "customize",
        label: "Customize",
        icon: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"/></svg>"
    },
    {
        id: "ai",
        label: "AI",
        icon: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/></svg>"
    },
    {
        id: "console",
        label: "Console",
        icon: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"4 17 10 11 4 5\"/><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"/></svg>"
    },
    {
        id: "dashboard",
        label: "Dashboard",
        icon: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M9 21V9\"/></svg>"
    },
    {
        id: "support",
        label: "Support",
        icon: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></svg>"
    }
];
const DEFAULT_STATE = {
    isOpen: false,
    activeTab: "overview",
    panelWidth: 800,
    panelHeight: 520
};
const STACK_LOGO_SVG = "<svg width=\"14\" height=\"17\" viewBox=\"0 0 131 156\" fill=\"currentColor\"><path d=\"M124.447 28.6459L70.1382 1.75616C67.3472 0.374284 64.0715 0.372197 61.279 1.75051L0.740967 31.6281V87.6369L65.7101 119.91L117.56 93.675V112.414L65.7101 138.44L0.740967 106.584V119.655C0.740967 122.359 2.28151 124.827 4.71097 126.015L62.282 154.161C65.0966 155.538 68.3938 155.515 71.1888 154.099L130.47 124.074V79.7105C130.47 74.8003 125.34 71.5769 120.915 73.7077L79.4531 93.675V75.9771L130.47 50.1589V38.3485C130.47 34.2325 128.137 30.4724 124.447 28.6459Z\"/></svg>";
function loadState() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.activeTab === "components") parsed.activeTab = "customize";
            if (parsed.activeTab === "docs") parsed.activeTab = "overview";
            return {
                ...DEFAULT_STATE,
                ...parsed,
                isOpen: false
            };
        }
    } catch (e) {}
    return {
        ...DEFAULT_STATE
    };
}
function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            ...state,
            isOpen: false
        }));
    } catch (e) {}
}
function createStateStore() {
    let state = loadState();
    const listeners = /* @__PURE__ */ new Set();
    return {
        get: ()=>state,
        update (partial) {
            state = {
                ...state,
                ...partial
            };
            saveState(state);
            listeners.forEach((fn)=>fn());
        },
        subscribe (fn) {
            listeners.add(fn);
            return ()=>{
                listeners.delete(fn);
            };
        }
    };
}
function isDevToolGlobalInstance(value) {
    return typeof value === "object" && value !== null && typeof Reflect.get(value, "cleanup") === "function";
}
function getGlobalDevToolInstance() {
    if (typeof window === "undefined") return null;
    const value = Reflect.get(window, GLOBAL_INSTANCE_KEY);
    return isDevToolGlobalInstance(value) ? value : null;
}
function setGlobalDevToolInstance(instance) {
    if (typeof window === "undefined") return;
    if (instance === null) Reflect.deleteProperty(window, GLOBAL_INSTANCE_KEY);
    else Reflect.set(window, GLOBAL_INSTANCE_KEY, instance);
}
function getGlobalLogStore() {
    const g = globalThis;
    if (!g.__STACK_DEV_TOOL_LOG_STORE__) g.__STACK_DEV_TOOL_LOG_STORE__ = {
        apiLogs: [],
        eventLogs: [],
        listeners: /* @__PURE__ */ new Set(),
        addApiLog (entry) {
            this.apiLogs = [
                entry,
                ...this.apiLogs
            ].slice(0, MAX_LOG_ENTRIES);
            this.listeners.forEach((fn)=>fn());
        },
        addEventLog (entry) {
            this.eventLogs = [
                entry,
                ...this.eventLogs
            ].slice(0, MAX_LOG_ENTRIES);
            this.listeners.forEach((fn)=>fn());
        },
        clear () {
            this.apiLogs = [];
            this.eventLogs = [];
            this.listeners.forEach((fn)=>fn());
        },
        subscribe (fn) {
            this.listeners.add(fn);
            return ()=>{
                this.listeners.delete(fn);
            };
        }
    };
    return g.__STACK_DEV_TOOL_LOG_STORE__;
}
let _idCounter = 0;
function nextId() {
    return "sdt-".concat(++_idCounter, "-").concat(Date.now());
}
function resolveApiBaseUrl(app) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$apps$2f$implementations$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseUrl"])(app[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].getConstructorOptions().baseUrl);
}
function shouldShowDashboardTab(app) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envVars"].NEXT_PUBLIC_STACK_IS_LOCAL_EMULATOR === "true" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalhost"])(resolveApiBaseUrl(app));
}
function getTabsForApp(app) {
    if (shouldShowDashboardTab(app)) return TABS;
    return TABS.filter((tab)=>tab.id !== "dashboard");
}
function deriveDashboardBaseUrl(apiBaseUrl) {
    try {
        const url = new URL(apiBaseUrl);
        if (url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "[::1]") {
            const port = url.port;
            if (port && port.endsWith("02")) url.port = port.slice(0, -2) + "01";
            return url.origin;
        }
        if (url.hostname.startsWith("api.")) {
            url.hostname = "app." + url.hostname.slice(4);
            return url.origin;
        }
        return url.origin;
    } catch (e) {
        return "https://app.stack-auth.com";
    }
}
function resolveDashboardUrl(app) {
    return "".concat(deriveDashboardBaseUrl(resolveApiBaseUrl(app)), "/projects/").concat(encodeURIComponent(app.projectId));
}
function formatTimestamp(ts) {
    return new Date(ts).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3
    });
}
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function generateRandomEmail() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for(let i = 0; i < 8; i++)id += chars[Math.floor(Math.random() * 36)];
    return "dev-".concat(id, "@test.stack-auth.com");
}
function h(tag, attrs) {
    for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        children[_key - 2] = arguments[_key];
    }
    const el = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)){
        if (v == null) continue;
        if (k === "className") el.className = v;
        else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
        else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
        else el.setAttribute(k, String(v));
    }
    for (const child of children){
        if (child == null) continue;
        el.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return el;
}
function setHtml(el, html) {
    el.innerHTML = html;
}
function hasAppendChild(value) {
    return typeof value === "object" && value !== null && typeof Reflect.get(value, "appendChild") === "function";
}
function appendInlineMarkdown(container, text) {
    const tokenPattern = /(\[[^\]]+\]\([^)]+\)|`[^`\n]+`|\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*|_[^_\n]+_)/g;
    let lastIndex = 0;
    let match;
    while((match = tokenPattern.exec(text)) !== null){
        if (match.index > lastIndex) container.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        const token = match[0];
        if (token.startsWith("`")) container.appendChild(h("code", {
            className: "sdt-ai-inline-code"
        }, token.slice(1, -1)));
        else if (token.startsWith("**") || token.startsWith("__")) {
            const bold = h("strong", {
                className: "sdt-ai-bold"
            });
            appendInlineMarkdown(bold, token.slice(2, -2));
            container.appendChild(bold);
        } else if (token.startsWith("*") || token.startsWith("_")) {
            const italic = h("em");
            appendInlineMarkdown(italic, token.slice(1, -1));
            container.appendChild(italic);
        } else {
            const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (linkMatch) {
                const [, linkText, href] = linkMatch;
                const trimmedHref = href.trim();
                if (/^(https?:\/\/|mailto:)/i.test(trimmedHref)) {
                    const link = h("a", {
                        className: "sdt-ai-link",
                        href: trimmedHref,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    });
                    appendInlineMarkdown(link, linkText);
                    container.appendChild(link);
                } else container.appendChild(document.createTextNode(token));
            } else container.appendChild(document.createTextNode(token));
        }
        lastIndex = tokenPattern.lastIndex;
    }
    if (lastIndex < text.length) container.appendChild(document.createTextNode(text.slice(lastIndex)));
}
function createTrigger(onClick) {
    let triggerSize = {
        width: 36,
        height: 36
    };
    function isPosition(value) {
        if (typeof value !== "object" || value === null) return false;
        return typeof Reflect.get(value, "left") === "number" && typeof Reflect.get(value, "top") === "number";
    }
    function isPlacement(value) {
        if (typeof value !== "object" || value === null) return false;
        const corner = Reflect.get(value, "corner");
        return [
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right"
        ].includes(String(corner));
    }
    function loadPlacement() {
        try {
            const raw = localStorage.getItem(TRIGGER_POS_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (isPlacement(parsed)) return parsed;
            if (typeof parsed === "object" && parsed !== null && "side" in parsed && "offset" in parsed) {
                const side = String(Reflect.get(parsed, "side"));
                const offset = Number(Reflect.get(parsed, "offset"));
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                let corner;
                if (side === "right") corner = offset < vh / 2 ? "top-right" : "bottom-right";
                else if (side === "left") corner = offset < vh / 2 ? "top-left" : "bottom-left";
                else if (side === "top") corner = offset < vw / 2 ? "top-left" : "top-right";
                else corner = offset < vw / 2 ? "bottom-left" : "bottom-right";
                return {
                    corner
                };
            }
            if (isPosition(parsed)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSnappedTriggerPlacement"])(parsed, triggerSize, {
                width: window.innerWidth,
                height: window.innerHeight
            });
        } catch (e) {}
        return null;
    }
    function savePlacement(placement) {
        try {
            localStorage.setItem(TRIGGER_POS_KEY, JSON.stringify(placement));
        } catch (e) {}
    }
    let animationTimeout = null;
    function setPositionAnimation(isAnimated) {
        if (animationTimeout !== null) {
            window.clearTimeout(animationTimeout);
            animationTimeout = null;
        }
        btn.classList.toggle("sdt-trigger-position-animated", isAnimated);
        if (isAnimated) animationTimeout = window.setTimeout(()=>{
            animationTimeout = null;
            btn.classList.remove("sdt-trigger-position-animated");
        }, 180);
    }
    function applyPos(nextPos, options) {
        setPositionAnimation((options === null || options === void 0 ? void 0 : options.animate) === true);
        pos = nextPos;
        btn.style.left = pos.left + "px";
        btn.style.top = pos.top + "px";
    }
    const btn = h("button", {
        className: "sdt-trigger",
        "aria-label": "Toggle Stack Auth Dev Tools",
        "data-hexclave-devtool-trigger": "true",
        title: "Stack Auth Dev Tools"
    });
    const logoSpan = h("span", {
        className: "sdt-trigger-logo"
    });
    setHtml(logoSpan, STACK_LOGO_SVG);
    btn.appendChild(logoSpan);
    var _loadPlacement;
    let placement = (_loadPlacement = loadPlacement()) !== null && _loadPlacement !== void 0 ? _loadPlacement : {
        corner: "bottom-right"
    };
    let pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTriggerPosition"])(placement, triggerSize, {
        width: window.innerWidth,
        height: window.innerHeight
    });
    applyPos(pos);
    let dragState = null;
    requestAnimationFrame(()=>{
        const rect = btn.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            triggerSize = {
                width: rect.width,
                height: rect.height
            };
            const measured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTriggerPosition"])(placement, triggerSize, {
                width: window.innerWidth,
                height: window.innerHeight
            });
            if (measured.left !== pos.left || measured.top !== pos.top) applyPos(measured, {
                animate: true
            });
        }
    });
    btn.addEventListener("pointerdown", (e)=>{
        e.preventDefault();
        setPositionAnimation(false);
        btn.setPointerCapture(e.pointerId);
        dragState = {
            startX: e.clientX,
            startY: e.clientY,
            startLeft: pos.left,
            startTop: pos.top,
            didDrag: false
        };
    });
    btn.addEventListener("pointermove", (e)=>{
        if (!dragState) return;
        const dx = e.clientX - dragState.startX;
        const dy = e.clientY - dragState.startY;
        if (!dragState.didDrag && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
        dragState.didDrag = true;
        applyPos((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampTriggerPosition"])({
            left: dragState.startLeft + dx,
            top: dragState.startTop + dy
        }, triggerSize, {
            width: window.innerWidth,
            height: window.innerHeight
        }));
    });
    btn.addEventListener("pointerup", (e)=>{
        const ds = dragState;
        dragState = null;
        if (!ds) return;
        btn.releasePointerCapture(e.pointerId);
        if (ds.didDrag) {
            placement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSnappedTriggerPlacement"])(pos, triggerSize, {
                width: window.innerWidth,
                height: window.innerHeight
            });
            applyPos((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTriggerPosition"])(placement, triggerSize, {
                width: window.innerWidth,
                height: window.innerHeight
            }), {
                animate: true
            });
            savePlacement(placement);
        } else onClick();
    });
    function onResize() {
        const resizedPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$trigger$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTriggerPosition"])(placement, triggerSize, {
            width: window.innerWidth,
            height: window.innerHeight
        });
        if (resizedPos.left !== pos.left || resizedPos.top !== pos.top) applyPos(resizedPos, {
            animate: true
        });
    }
    window.addEventListener("resize", onResize);
    return {
        element: btn,
        cleanup: ()=>{
            if (animationTimeout !== null) window.clearTimeout(animationTimeout);
            window.removeEventListener("resize", onResize);
        }
    };
}
function createTabBar(tabs, activeTab, onTabChange, opts) {
    var _opts_variant;
    const variant = (_opts_variant = opts === null || opts === void 0 ? void 0 : opts.variant) !== null && _opts_variant !== void 0 ? _opts_variant : "bar";
    const barClass = variant === "pills" ? "sdt-console-tabs" : "sdt-tabbar";
    const tabClass = variant === "pills" ? "sdt-console-tab" : "sdt-tab";
    const indicatorClass = variant === "pills" ? "sdt-console-tab-indicator" : "sdt-tab-indicator";
    const bar = h("div", {
        className: barClass
    });
    const indicator = h("div", {
        className: indicatorClass
    });
    indicator.style.opacity = "0";
    bar.appendChild(indicator);
    let current = activeTab;
    let isInitial = true;
    const buttons = tabs.map((tab)=>{
        const btn = h("button", {
            className: tabClass,
            "data-tab-id": tab.id,
            "data-active": String(tab.id === activeTab)
        });
        if (tab.icon) {
            const iconSpan = h("span", {
                className: "sdt-tab-icon"
            });
            setHtml(iconSpan, tab.icon);
            btn.appendChild(iconSpan);
        }
        btn.appendChild(document.createTextNode(tab.label));
        btn.addEventListener("click", ()=>onTabChange(tab.id));
        bar.appendChild(btn);
        return btn;
    });
    if (variant === "bar") bar.appendChild(h("div", {
        className: "sdt-tabbar-spacer"
    }));
    if (opts === null || opts === void 0 ? void 0 : opts.trailing) bar.appendChild(opts.trailing);
    function measure() {
        const btn = bar.querySelector('[data-tab-id="'.concat(current, '"]'));
        if (!btn) return;
        indicator.style.transform = "translateX(".concat(btn.offsetLeft, "px)");
        indicator.style.width = btn.offsetWidth + "px";
        indicator.style.height = btn.offsetHeight + "px";
        indicator.style.opacity = "1";
        indicator.style.transition = isInitial ? "none" : "";
        isInitial = false;
    }
    new ResizeObserver(measure).observe(bar);
    requestAnimationFrame(measure);
    function setActive(id) {
        current = id;
        buttons.forEach((btn)=>{
            const tabId = btn.getAttribute("data-tab-id");
            btn.setAttribute("data-active", String(tabId === id));
        });
        measure();
    }
    return {
        el: bar,
        setActive
    };
}
function createIframeTab(src, title) {
    let loadingMsg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Loading…", errorMsg = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Unable to load content", errorDetail = arguments.length > 4 ? arguments[4] : void 0, openExternallyLabel = arguments.length > 5 ? arguments[5] : void 0;
    const container = h("div", {
        className: "sdt-iframe-container"
    });
    if (openExternallyLabel != null) container.appendChild(h("div", {
        className: "sdt-iframe-toolbar"
    }, h("a", {
        href: src,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "sdt-iframe-open-link"
    }, openExternallyLabel)));
    const loadingEl = h("div", {
        className: "sdt-iframe-loading"
    }, loadingMsg);
    container.appendChild(loadingEl);
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-forms");
    iframe.style.display = "none";
    iframe.addEventListener("load", ()=>{
        loadingEl.style.display = "none";
        iframe.style.display = "block";
    });
    iframe.addEventListener("error", ()=>{
        loadingEl.style.display = "none";
        container.innerHTML = "";
        const errDiv = h("div", {
            className: "sdt-iframe-error"
        });
        errDiv.appendChild(h("div", null, errorMsg));
        if (errorDetail) errDiv.appendChild(h("div", {
            style: {
                fontSize: "12px",
                color: "var(--sdt-text-tertiary)"
            }
        }, errorDetail));
        const retryBtn = h("button", {
            className: "sdt-iframe-error-btn"
        }, "Retry");
        retryBtn.addEventListener("click", ()=>{
            container.replaceWith(createIframeTab(src, title, loadingMsg, errorMsg, errorDetail, openExternallyLabel));
        });
        errDiv.appendChild(retryBtn);
        const link = h("a", {
            href: src,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
                color: "var(--sdt-accent)",
                fontSize: "12px",
                textDecoration: "none"
            }
        }, "Open in new tab");
        errDiv.appendChild(link);
        container.appendChild(errDiv);
    });
    container.appendChild(iframe);
    return container;
}
function createOverviewTab(app) {
    const container = h("div", {
        className: "sdt-ov"
    });
    const heroCard = h("div", {
        className: "sdt-ov-card sdt-ov-card-hero"
    });
    heroCard.appendChild(h("div", {
        className: "sdt-ov-label"
    }, "Identity"));
    const userRow = h("div", {
        className: "sdt-ov-user-row"
    });
    const avatar = h("div", {
        className: "sdt-ov-avatar"
    }, "?");
    const userMeta = h("div", {
        className: "sdt-ov-user-meta"
    });
    const userName = h("div", {
        className: "sdt-ov-user-name"
    }, "Loading…");
    const userEmail = h("div", {
        className: "sdt-ov-user-email"
    }, "");
    const authIndicator = h("div", {
        className: "sdt-ov-auth-indicator",
        style: {
            display: "none"
        }
    }, "Authenticated");
    userMeta.append(userName, userEmail, authIndicator);
    userRow.append(avatar, userMeta);
    heroCard.appendChild(userRow);
    const actions = h("div", {
        className: "sdt-ov-actions"
    });
    const toast = h("div", {
        className: "sdt-ov-toast",
        style: {
            display: "none"
        }
    });
    const emailRow = h("div", {
        className: "sdt-ov-email-input"
    });
    const emailInput = h("input", {
        type: "email",
        placeholder: "Sign in as email…"
    });
    const emailBtn = h("button", null);
    setHtml(emailBtn, "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/><polyline points=\"12 5 19 12 12 19\"/></svg>");
    emailRow.append(emailInput, emailBtn);
    function isBestEffortOverviewError(error) {
        if (error instanceof DOMException && error.name === "AbortError") return true;
        if (error instanceof TypeError) return true;
        if (error instanceof Error) return error.message.includes("Failed to fetch") || error.message.includes("NetworkError") || error.message.includes("Load failed") || error.message.includes("network connection");
        return false;
    }
    function showToast(msg, type) {
        toast.textContent = msg;
        toast.className = "sdt-ov-toast sdt-ov-toast-".concat(type);
        toast.style.display = "";
        setTimeout(()=>{
            toast.style.display = "none";
        }, 4e3);
    }
    let currentUser = null;
    let loading = false;
    function rebuildActions() {
        actions.innerHTML = "";
        if (currentUser) {
            const signOutBtn = h("button", {
                className: "sdt-ov-btn sdt-ov-btn-danger"
            }, "Sign Out");
            signOutBtn.disabled = loading;
            signOutBtn.addEventListener("click", ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
                    loading = true;
                    rebuildActions();
                    try {
                        await currentUser.signOut();
                        showToast("Signed out", "success");
                    } catch (e) {
                        showToast(e.message || "Sign out failed", "error");
                    }
                    loading = false;
                    await refreshUser();
                });
            });
            const randomBtn = h("button", {
                className: "sdt-ov-btn sdt-ov-btn-primary"
            }, "Random User");
            randomBtn.disabled = loading;
            randomBtn.addEventListener("click", ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(doQuickSignIn());
            });
            actions.append(signOutBtn, randomBtn);
        } else {
            const quickBtn = h("button", {
                className: "sdt-ov-btn sdt-ov-btn-primary sdt-ov-btn-wide"
            }, loading ? "Working…" : "Quick Sign In");
            quickBtn.disabled = loading;
            quickBtn.addEventListener("click", ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(doQuickSignIn());
            });
            actions.appendChild(quickBtn);
        }
        emailInput.placeholder = currentUser ? "Switch to email…" : "Sign in as email…";
        actions.appendChild(emailRow);
    }
    async function doQuickSignIn() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalhost"])(window.location.href)) {
            showToast("Quick sign-in is only available on localhost", "error");
            return;
        }
        loading = true;
        rebuildActions();
        const email = generateRandomEmail();
        try {
            const signUpResult = await app.signUpWithCredential({
                email,
                password: email,
                noRedirect: true
            });
            if (signUpResult.status === "error") {
                showToast("Sign up failed: ".concat(signUpResult.error.message), "error");
                loading = false;
                rebuildActions();
                return;
            }
            const signInResult = await app.signInWithCredential({
                email,
                password: email,
                noRedirect: true
            });
            if (signInResult.status === "error") showToast("Sign in failed: ".concat(signInResult.error.message), "error");
            else showToast("Signed in as ".concat(email), "success");
        } catch (e) {
            showToast(e.message || "Unknown error", "error");
        }
        loading = false;
        await refreshUser();
    }
    async function doSignInAs(targetEmail) {
        if (!targetEmail.trim()) return;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalhost"])(window.location.href)) {
            showToast("Quick sign-in is only available on localhost", "error");
            return;
        }
        loading = true;
        rebuildActions();
        const trimmed = targetEmail.trim();
        try {
            if ((await app.signInWithCredential({
                email: trimmed,
                password: trimmed,
                noRedirect: true
            })).status === "ok") {
                showToast("Signed in as ".concat(trimmed), "success");
                emailInput.value = "";
                loading = false;
                await refreshUser();
                return;
            }
            const signUpResult = await app.signUpWithCredential({
                email: trimmed,
                password: trimmed,
                noRedirect: true
            });
            if (signUpResult.status === "error") {
                showToast("Failed: ".concat(signUpResult.error.message), "error");
                loading = false;
                rebuildActions();
                return;
            }
            const retryResult = await app.signInWithCredential({
                email: trimmed,
                password: trimmed,
                noRedirect: true
            });
            if (retryResult.status === "error") showToast("Sign in failed: ".concat(retryResult.error.message), "error");
            else {
                showToast("Signed in as ".concat(trimmed), "success");
                emailInput.value = "";
            }
        } catch (e) {
            showToast(e.message || "Unknown error", "error");
        }
        loading = false;
        await refreshUser();
    }
    emailBtn.addEventListener("click", ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(doSignInAs(emailInput.value));
    });
    emailInput.addEventListener("keydown", (e)=>{
        if (e.key === "Enter") (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(doSignInAs(emailInput.value));
    });
    heroCard.append(actions, toast);
    const methodsCard = h("div", {
        className: "sdt-ov-card sdt-ov-card-auth"
    });
    methodsCard.appendChild(h("div", {
        className: "sdt-ov-label"
    }, "Auth Methods"));
    const authGrid = h("div", {
        className: "sdt-ov-auth-grid"
    });
    for(let i = 0; i < 3; i++)authGrid.appendChild(h("div", {
        className: "sdt-ov-method sdt-ov-skeleton-pill"
    }));
    methodsCard.appendChild(authGrid);
    let hasActiveAuthMethod = null;
    async function loadAuthMethods() {
        try {
            const project = await app.getProject();
            authGrid.innerHTML = "";
            const config = project.config;
            hasActiveAuthMethod = config.credentialEnabled || config.magicLinkEnabled || config.passkeyEnabled || config.oauthProviders.length > 0;
            const methods = [
                {
                    label: "Password",
                    enabled: config.credentialEnabled
                },
                {
                    label: "Magic Link",
                    enabled: config.magicLinkEnabled
                },
                {
                    label: "Passkey",
                    enabled: config.passkeyEnabled
                }
            ];
            for (const m of methods){
                const pill = h("div", {
                    className: "sdt-ov-method ".concat(m.enabled ? "sdt-ov-method-on" : "sdt-ov-method-off")
                });
                pill.appendChild(h("span", {
                    className: "sdt-ov-method-name"
                }, m.label));
                authGrid.appendChild(pill);
            }
            for (const p of config.oauthProviders){
                const pill = h("div", {
                    className: "sdt-ov-method sdt-ov-method-on sdt-ov-method-oauth"
                });
                pill.appendChild(h("span", {
                    className: "sdt-ov-method-name"
                }, p.id));
                authGrid.appendChild(pill);
            }
            if (!config.signUpEnabled) {
                const pill = h("div", {
                    className: "sdt-ov-method sdt-ov-method-warn"
                });
                pill.appendChild(h("span", {
                    className: "sdt-ov-method-name"
                }, "Sign-up off"));
                authGrid.appendChild(pill);
            }
            buildChecklist();
        } catch (error) {
            authGrid.innerHTML = "<div style=\"font-size:11px;color:var(--sdt-text-tertiary)\">Could not load auth methods</div>";
            hasActiveAuthMethod = null;
            buildChecklist();
            if (!isBestEffortOverviewError(error)) throw error;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(loadAuthMethods());
    const checksCard = h("div", {
        className: "sdt-ov-card sdt-ov-card-checks"
    });
    const projectId = app.projectId;
    let checksCardMounted = false;
    function buildChecklist() {
        checksCard.innerHTML = "";
        const checks = [
            {
                ok: !!projectId && projectId !== "default",
                label: "Project configured",
                hint: null
            },
            {
                ok: hasActiveAuthMethod === true,
                label: "Auth method active",
                hint: hasActiveAuthMethod === null ? "Still checking project config" : null
            },
            {
                ok: !!currentUser,
                label: "Sign in a test user",
                hint: "Use “Quick Sign In” above →"
            }
        ];
        const passCount = checks.filter((c)=>c.ok).length;
        if (passCount === checks.length) {
            if (checksCardMounted && checksCard.parentElement) {
                container.removeChild(checksCard);
                checksCardMounted = false;
            }
            return;
        }
        if (!checksCardMounted) {
            container.appendChild(checksCard);
            checksCardMounted = true;
        }
        const titleRow = h("div", {
            className: "sdt-ov-checks-header"
        });
        const titleLabel = h("div", {
            className: "sdt-ov-label",
            style: {
                marginBottom: "0",
                color: "var(--sdt-warning)"
            }
        }, "Setup");
        const badge = h("span", {
            className: "sdt-ov-checks-badge sdt-ov-checks-badge-warn"
        }, "".concat(passCount, " / ").concat(checks.length));
        titleRow.append(titleLabel, badge);
        checksCard.appendChild(titleRow);
        const bar = h("div", {
            className: "sdt-ov-checks-bar"
        });
        const fill = h("div", {
            className: "sdt-ov-checks-bar-fill"
        });
        fill.style.width = "".concat(passCount / checks.length * 100, "%");
        bar.appendChild(fill);
        checksCard.appendChild(bar);
        for (const c of checks){
            const row = h("div", {
                className: "sdt-ov-setup-row"
            });
            row.appendChild(h("span", {
                className: "sdt-ov-setup-dot ".concat(c.ok ? "sdt-ov-setup-dot-ok" : "sdt-ov-setup-dot-warn")
            }));
            row.appendChild(h("span", {
                className: "sdt-ov-setup-label"
            }, c.label));
            if (!c.ok && c.hint) row.appendChild(h("span", {
                className: "sdt-ov-setup-hint"
            }, c.hint));
            checksCard.appendChild(row);
        }
    }
    async function refreshUser() {
        try {
            currentUser = await app.getUser();
            if (currentUser) {
                const initials = (currentUser.displayName || currentUser.primaryEmail || "?").split(" ").map((s)=>s[0]).join("").slice(0, 2).toUpperCase();
                avatar.className = "sdt-ov-avatar sdt-ov-avatar-active";
                if (currentUser.profileImageUrl) avatar.innerHTML = '<img src="'.concat(escapeHtml(currentUser.profileImageUrl), '" alt="" />');
                else avatar.textContent = initials;
                userName.textContent = currentUser.displayName || "Anonymous";
                userEmail.textContent = currentUser.primaryEmail || "No email";
                authIndicator.style.display = "";
            } else {
                avatar.className = "sdt-ov-avatar";
                avatar.textContent = "?";
                userName.textContent = "No user signed in";
                userEmail.textContent = "Sign in to test auth flows";
                authIndicator.style.display = "none";
            }
        } catch (error) {
            avatar.className = "sdt-ov-avatar";
            avatar.textContent = "?";
            userName.textContent = "Could not load user";
            userEmail.textContent = "Check your local Stack backend";
            authIndicator.style.display = "none";
            currentUser = null;
            if (!isBestEffortOverviewError(error)) throw error;
        }
        rebuildActions();
        buildChecklist();
    }
    container.append(heroCard, methodsCard);
    buildChecklist();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(refreshUser());
    const userPoll = setInterval(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(refreshUser());
    }, 3e3);
    return {
        element: container,
        cleanup: ()=>clearInterval(userPoll)
    };
}
function createConsoleTab(logStore) {
    const container = h("div", {
        className: "sdt-console-panel"
    });
    const EVENT_TYPE_STYLES = {
        "error": "sdt-badge-error",
        "info": "sdt-badge-info"
    };
    const title = h("div", {
        className: "sdt-console-title"
    }, "Logs");
    const actions = h("div", {
        className: "sdt-console-actions"
    });
    const copyBtn = h("button", {
        className: "sdt-console-action-btn",
        title: "Copy logs"
    });
    setHtml(copyBtn, "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/></svg>Copy");
    const exportBtn = h("button", {
        className: "sdt-console-action-btn",
        title: "Export logs"
    });
    setHtml(exportBtn, "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>Export");
    const clearBtn = h("button", {
        className: "sdt-console-action-btn",
        title: "Clear logs"
    });
    setHtml(clearBtn, "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><path d=\"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6\"/></svg>Clear");
    actions.append(copyBtn, exportBtn, clearBtn);
    container.appendChild(h("div", {
        className: "sdt-console-header"
    }, title, actions));
    const contentArea = h("div", {
        className: "sdt-console-log-scroll sdt-tab-content-fade"
    });
    container.appendChild(contentArea);
    let visibleLogCount = CONSOLE_LOG_BATCH_SIZE;
    function getMergedLogs() {
        return [
            ...logStore.apiLogs.map((entry)=>({
                    kind: "api",
                    entry
                })),
            ...logStore.eventLogs.map((entry)=>({
                    kind: "event",
                    entry
                }))
        ].sort((a, b)=>b.entry.timestamp - a.entry.timestamp);
    }
    function formatLogLine(item) {
        if (item.kind === "api") {
            const log = item.entry;
            const status = log.status !== void 0 ? " [".concat(log.status, "]") : "";
            const duration = log.duration !== void 0 ? " ".concat(log.duration, "ms") : "";
            const error = log.error !== void 0 ? " ".concat(log.error) : "";
            return "".concat(new Date(log.timestamp).toISOString(), " ").concat(log.method, " ").concat(log.url).concat(status).concat(duration).concat(error);
        }
        const log = item.entry;
        return "".concat(new Date(log.timestamp).toISOString(), " ").concat(log.type.toUpperCase(), " ").concat(log.message);
    }
    function formatLogsForExport() {
        return [
            "=== Stack Auth Dev Tool Logs ===",
            "Generated: ".concat(/* @__PURE__ */ new Date().toISOString()),
            "Total logs: ".concat(getMergedLogs().length),
            "",
            ...getMergedLogs().map(formatLogLine)
        ].join("\n");
    }
    function renderLogItem(item) {
        if (item.kind === "api") {
            const log = item.entry;
            const row = h("div", {
                className: "sdt-log-item"
            });
            row.appendChild(h("span", {
                className: "sdt-log-time"
            }, formatTimestamp(log.timestamp)));
            row.appendChild(h("span", {
                className: "sdt-log-method sdt-log-method-".concat(log.method.toLowerCase())
            }, log.method));
            row.appendChild(h("span", {
                className: "sdt-log-url"
            }, log.url));
            if (log.status !== void 0) row.appendChild(h("span", {
                className: "sdt-log-status ".concat(log.status < 400 ? "sdt-log-status-ok" : "sdt-log-status-err")
            }, String(log.status)));
            if (log.duration !== void 0) row.appendChild(h("span", {
                className: "sdt-log-time"
            }, log.duration + "ms"));
            return row;
        }
        const log = item.entry;
        const row = h("div", {
            className: "sdt-log-item"
        });
        row.appendChild(h("span", {
            className: "sdt-log-time"
        }, formatTimestamp(log.timestamp)));
        row.appendChild(h("span", {
            className: "sdt-badge ".concat(EVENT_TYPE_STYLES[log.type] || "sdt-badge-info")
        }, log.type));
        row.appendChild(h("span", {
            className: "sdt-log-message"
        }, log.message));
        return row;
    }
    function renderLogs() {
        const previousScrollTop = contentArea.scrollTop;
        contentArea.innerHTML = "";
        const merged = getMergedLogs();
        visibleLogCount = Math.min(Math.max(visibleLogCount, CONSOLE_LOG_BATCH_SIZE), Math.max(merged.length, CONSOLE_LOG_BATCH_SIZE));
        if (merged.length === 0) {
            contentArea.innerHTML = "<div class=\"sdt-empty-state\"><div class=\"sdt-empty-state-icon\">📋</div><div>No logs recorded yet</div><div style=\"font-size:12px;color:var(--sdt-text-tertiary)\">API calls and auth events will appear here</div></div>";
            return;
        }
        const list = h("div", {
            className: "sdt-log-list"
        });
        for (const item of merged.slice(0, visibleLogCount))list.appendChild(renderLogItem(item));
        if (visibleLogCount < merged.length) list.appendChild(h("div", {
            className: "sdt-log-load-hint"
        }, "".concat(merged.length - visibleLogCount, " older logs available")));
        contentArea.appendChild(list);
        contentArea.scrollTop = Math.min(previousScrollTop, contentArea.scrollHeight);
    }
    function maybeLoadOlderLogs() {
        const mergedLength = getMergedLogs().length;
        if (visibleLogCount >= mergedLength) return;
        if (contentArea.scrollHeight - contentArea.scrollTop - contentArea.clientHeight <= 48) {
            visibleLogCount = Math.min(visibleLogCount + CONSOLE_LOG_BATCH_SIZE, mergedLength);
            renderLogs();
        }
    }
    contentArea.addEventListener("scroll", maybeLoadOlderLogs);
    renderLogs();
    copyBtn.addEventListener("click", ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(navigator.clipboard.writeText(formatLogsForExport()).then(()=>{
            copyBtn.textContent = "✓ Copied";
            setTimeout(()=>{
                setHtml(copyBtn, "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/></svg>Copy");
            }, 1500);
        }));
    });
    exportBtn.addEventListener("click", ()=>{
        const blob = new Blob([
            formatLogsForExport()
        ], {
            type: "text/plain;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const link = h("a", {
            href: url,
            download: "stack-auth-dev-tool-logs-".concat(/* @__PURE__ */ new Date().toISOString(), ".txt")
        });
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    });
    clearBtn.addEventListener("click", ()=>{
        visibleLogCount = CONSOLE_LOG_BATCH_SIZE;
        logStore.clear();
    });
    const unsub = logStore.subscribe(()=>{
        renderLogs();
    });
    return {
        element: container,
        cleanup: ()=>{
            contentArea.removeEventListener("scroll", maybeLoadOlderLogs);
            unsub();
        }
    };
}
function createAITab(app) {
    const container = h("div", {
        className: "sdt-ai-container"
    });
    const apiBaseUrl = resolveApiBaseUrl(app);
    const messages = [];
    let aiLoading = false;
    let activeAiAbortController = null;
    const messagesArea = h("div", {
        className: "sdt-ai-messages"
    });
    const inputArea = h("div", {
        className: "sdt-ai-input-area"
    });
    const SUGGESTED_QUESTIONS = [
        {
            icon: "🔒",
            text: "How do I protect a Next.js route?"
        },
        {
            icon: "👥",
            text: "How do teams and permissions work?"
        },
        {
            icon: "🔗",
            text: "How do I add OAuth providers?"
        },
        {
            icon: "✉️",
            text: "How do I customize auth emails?"
        }
    ];
    function getHeaders() {
        const opts = app[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].getConstructorOptions();
        const headers = {
            "X-Hexclave-Access-Type": "client",
            "X-Hexclave-Project-Id": app.projectId
        };
        if ("publishableClientKey" in opts && opts.publishableClientKey) headers["X-Hexclave-Publishable-Client-Key"] = opts.publishableClientKey;
        return headers;
    }
    function renderToolCard(toolCall) {
        const toolCard = h("div", {
            className: "sdt-ai-tool-card"
        });
        const header = h("button", {
            className: "sdt-ai-tool-header",
            type: "button"
        });
        header.appendChild(h("span", {
            className: "sdt-ai-tool-name"
        }, toolCall.toolName));
        header.appendChild(h("span", {
            className: "sdt-ai-tool-status sdt-ai-tool-status-".concat(toolCall.state)
        }, toolCall.state));
        header.appendChild(h("span", {
            className: "sdt-ai-tool-chevron".concat(toolCall.isExpanded ? " sdt-ai-tool-chevron-open" : "")
        }, "▾"));
        header.addEventListener("click", ()=>{
            toolCall.isExpanded = !toolCall.isExpanded;
            renderMessages();
        });
        toolCard.appendChild(header);
        if (toolCall.isExpanded) {
            const body = h("div", {
                className: "sdt-ai-tool-body"
            });
            if (toolCall.argsText !== null) {
                body.appendChild(h("div", {
                    className: "sdt-ai-tool-label"
                }, "Args"));
                const argsPre = h("pre", {
                    className: "sdt-ai-tool-pre"
                });
                argsPre.appendChild(h("code", null, toolCall.argsText));
                body.appendChild(argsPre);
            }
            if (toolCall.resultText !== null) {
                body.appendChild(h("div", {
                    className: "sdt-ai-tool-label"
                }, toolCall.state === "error" ? "Error" : "Result"));
                const resultPre = h("pre", {
                    className: "sdt-ai-tool-pre"
                });
                resultPre.appendChild(h("code", null, toolCall.resultText));
                body.appendChild(resultPre);
            }
            if (toolCall.state === "running") body.appendChild(h("div", {
                className: "sdt-ai-tool-running"
            }, "Running..."));
            toolCard.appendChild(body);
        }
        return toolCard;
    }
    function renderMessages() {
        messagesArea.innerHTML = "";
        if (messages.length === 0) {
            const empty = h("div", {
                className: "sdt-ai-empty"
            });
            const icon = h("div", {
                className: "sdt-ai-empty-icon"
            });
            setHtml(icon, "<svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/></svg>");
            empty.appendChild(icon);
            empty.appendChild(h("div", {
                className: "sdt-ai-empty-title"
            }, "Ask AI"));
            empty.appendChild(h("div", {
                className: "sdt-ai-empty-desc"
            }, "Get help with Stack Auth integration, troubleshooting, and best practices."));
            const suggestions = h("div", {
                className: "sdt-ai-suggestions"
            });
            for (const q of SUGGESTED_QUESTIONS){
                const btn = h("button", {
                    className: "sdt-ai-suggestion"
                });
                btn.appendChild(h("span", {
                    className: "sdt-ai-suggestion-icon"
                }, q.icon));
                btn.appendChild(h("span", null, q.text));
                btn.addEventListener("click", ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(sendMessage(q.text));
                });
                suggestions.appendChild(btn);
            }
            empty.appendChild(suggestions);
            messagesArea.appendChild(empty);
            return;
        }
        const list = h("div", {
            className: "sdt-ai-message-list"
        });
        for (const msg of messages)if (msg.role === "user") {
            const msgDiv = h("div", {
                className: "sdt-ai-msg sdt-ai-msg-user"
            });
            const bubble = h("div", {
                className: "sdt-ai-bubble sdt-ai-bubble-user"
            });
            bubble.appendChild(h("p", null, msg.content));
            msgDiv.appendChild(bubble);
            const avatarDiv = h("div", {
                className: "sdt-ai-avatar sdt-ai-avatar-user"
            });
            setHtml(avatarDiv, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/></svg>");
            msgDiv.appendChild(avatarDiv);
            list.appendChild(msgDiv);
        } else {
            const msgDiv = h("div", {
                className: "sdt-ai-msg sdt-ai-msg-assistant"
            });
            const avatarDiv = h("div", {
                className: "sdt-ai-avatar sdt-ai-avatar-assistant"
            });
            setHtml(avatarDiv, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/></svg>");
            msgDiv.appendChild(avatarDiv);
            const bubble = h("div", {
                className: "sdt-ai-bubble sdt-ai-bubble-assistant"
            });
            if (msg.parts.length === 0) bubble.innerHTML = "<div class=\"sdt-ai-thinking\"><span class=\"sdt-ai-thinking-dot\"></span><span class=\"sdt-ai-thinking-dot\"></span><span class=\"sdt-ai-thinking-dot\"></span></div>";
            else for (const part of msg.parts){
                if (part.type === "text") {
                    const textContainer = h("div", {
                        className: "sdt-ai-part-text"
                    });
                    renderMarkdownInto(textContainer, part.content);
                    bubble.appendChild(textContainer);
                    continue;
                }
                const toolCall = msg.toolCallsById.get(part.toolCallId);
                if (toolCall == null) {
                    const missingTool = h("div", {
                        className: "sdt-ai-tool-card"
                    });
                    const missingBody = h("div", {
                        className: "sdt-ai-tool-body"
                    });
                    missingBody.appendChild(h("div", {
                        className: "sdt-ai-tool-label"
                    }, "Error"));
                    const missingPre = h("pre", {
                        className: "sdt-ai-tool-pre"
                    });
                    missingPre.appendChild(h("code", null, "Missing tool call state for ".concat(part.toolCallId)));
                    missingBody.appendChild(missingPre);
                    missingTool.appendChild(missingBody);
                    bubble.appendChild(missingTool);
                    continue;
                }
                const toolsContainer = h("div", {
                    className: "sdt-ai-tools"
                });
                toolsContainer.appendChild(renderToolCard(toolCall));
                bubble.appendChild(toolsContainer);
            }
            msgDiv.appendChild(bubble);
            list.appendChild(msgDiv);
        }
        messagesArea.appendChild(list);
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }
    function renderMarkdownInto(el, content) {
        function appendBlockWithInlineMarkdown(tag, className, text) {
            const block = h(tag, {
                className
            });
            appendInlineMarkdown(block, text);
            el.appendChild(block);
        }
        const lines = content.split("\n");
        let i = 0;
        while(i < lines.length){
            const line = lines[i];
            if (line.startsWith("```")) {
                const lang = line.slice(3).trim();
                const codeLines = [];
                i++;
                while(i < lines.length && !lines[i].startsWith("```")){
                    codeLines.push(lines[i]);
                    i++;
                }
                i++;
                const block = h("div", {
                    className: "sdt-ai-code-block"
                });
                const header = h("div", {
                    className: "sdt-ai-code-header"
                });
                header.appendChild(h("span", {
                    className: "sdt-ai-code-lang"
                }, lang || "CODE"));
                const copyBtn = h("button", {
                    className: "sdt-ai-copy-btn"
                }, "⎘");
                const code = codeLines.join("\n");
                copyBtn.addEventListener("click", ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(navigator.clipboard.writeText(code).then(()=>{
                        copyBtn.textContent = "✓";
                        setTimeout(()=>{
                            copyBtn.textContent = "⎘";
                        }, 1500);
                    }));
                });
                header.appendChild(copyBtn);
                block.appendChild(header);
                const pre = h("pre", {
                    className: "sdt-ai-code-pre"
                });
                pre.appendChild(h("code", null, code));
                block.appendChild(pre);
                el.appendChild(block);
                continue;
            }
            const headingMatch = line.match(/^(#{1,3}) (.+)/);
            if (headingMatch) {
                appendBlockWithInlineMarkdown("h".concat(headingMatch[1].length), "sdt-ai-heading", headingMatch[2]);
                i++;
                continue;
            }
            if (/^[-*] /.test(line)) {
                const ul = h("ul", {
                    className: "sdt-ai-list"
                });
                while(i < lines.length && /^[-*] /.test(lines[i])){
                    const li = h("li");
                    appendInlineMarkdown(li, lines[i].replace(/^[-*] /, ""));
                    ul.appendChild(li);
                    i++;
                }
                el.appendChild(ul);
                continue;
            }
            if (/^\d+\. /.test(line)) {
                const ol = h("ol", {
                    className: "sdt-ai-list sdt-ai-list-ordered"
                });
                while(i < lines.length && /^\d+\. /.test(lines[i])){
                    const li = h("li");
                    appendInlineMarkdown(li, lines[i].replace(/^\d+\. /, ""));
                    ol.appendChild(li);
                    i++;
                }
                el.appendChild(ol);
                continue;
            }
            if (line.trim() === "") {
                i++;
                continue;
            }
            appendBlockWithInlineMarkdown("p", "sdt-ai-paragraph", line);
            i++;
        }
    }
    function stringifyForDebug(value) {
        if (value === void 0 || typeof value === "function" || typeof value === "symbol") return String(value);
        return JSON.stringify(value, null, 2);
    }
    function getLastItem(items) {
        return items.length > 0 ? items[items.length - 1] : void 0;
    }
    function isRecord(value) {
        return typeof value === "object" && value !== null && !Array.isArray(value);
    }
    function expectObject(value, payload) {
        if (!isRecord(value)) throw new Error("SSE payload must be an object: ".concat(payload));
        return value;
    }
    function getRequiredStringField(event, field, payload) {
        const value = event[field];
        if (typeof value !== "string") throw new Error("SSE event '".concat(String(event.type), "' missing string '").concat(field, "': ").concat(payload));
        return value;
    }
    function getCurrentAssistantMessage() {
        const lastMessage = getLastItem(messages);
        if ((lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.role) !== "assistant") throw new Error("Expected current message to be an assistant message");
        return lastMessage;
    }
    function appendTextDelta(delta) {
        const assistantMessage = getCurrentAssistantMessage();
        const lastPart = getLastItem(assistantMessage.parts);
        if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.type) === "text") {
            lastPart.content += delta;
            return;
        }
        assistantMessage.parts.push({
            type: "text",
            content: delta
        });
    }
    function ensureToolPart(assistantMessage, toolCallId) {
        if (!assistantMessage.parts.some((part)=>part.type === "tool" && part.toolCallId === toolCallId)) assistantMessage.parts.push({
            type: "tool",
            toolCallId
        });
    }
    function findOrCreateToolCall(toolCallId, fallbackToolName) {
        const assistantMessage = getCurrentAssistantMessage();
        const existing = assistantMessage.toolCallsById.get(toolCallId);
        if (existing != null) {
            if (existing.toolName === "tool" && fallbackToolName !== "tool") existing.toolName = fallbackToolName;
            ensureToolPart(assistantMessage, toolCallId);
            return existing;
        }
        const created = {
            id: toolCallId,
            toolName: fallbackToolName,
            argsText: null,
            resultText: null,
            state: "running",
            errorText: null,
            isExpanded: false
        };
        assistantMessage.toolCallsById.set(toolCallId, created);
        ensureToolPart(assistantMessage, toolCallId);
        return created;
    }
    async function sendMessage(text) {
        if (!text.trim() || aiLoading) return;
        messages.push({
            role: "user",
            content: text.trim()
        });
        messages.push({
            role: "assistant",
            parts: [],
            toolCallsById: /* @__PURE__ */ new Map()
        });
        aiLoading = true;
        renderMessages();
        renderInput();
        try {
            const abortController = new AbortController();
            activeAiAbortController = abortController;
            const res = await fetch("".concat(apiBaseUrl, "/api/latest/ai/query/stream"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...getHeaders()
                },
                signal: abortController.signal,
                body: JSON.stringify({
                    systemPrompt: "command-center-ask-ai",
                    tools: [
                        "docs"
                    ],
                    quality: "smart",
                    speed: "slow",
                    messages: messages.slice(0, -1).map((m)=>({
                            role: m.role,
                            content: [
                                {
                                    type: "text",
                                    text: m.role === "user" ? m.content : m.parts.filter((part)=>part.type === "text").map((part)=>part.content).join("")
                                }
                            ]
                        }))
                })
            });
            if (!res.ok) throw new Error("AI request failed with status ".concat(res.status));
            if (!res.body) throw new Error("AI request returned no response body");
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, {
                    stream: true
                });
                const streamLines = buffer.split("\n");
                buffer = streamLines.pop() || "";
                for (const streamLine of streamLines){
                    const line = streamLine.trim();
                    if (line === "" || line.startsWith(":")) continue;
                    if (!line.startsWith("data: ")) throw new Error("Unexpected SSE line: ".concat(line));
                    const payload = line.slice(6);
                    if (payload === "[DONE]") continue;
                    const event = expectObject(JSON.parse(payload), payload);
                    const eventType = getRequiredStringField(event, "type", payload);
                    switch(eventType){
                        case "start":
                        case "start-step":
                        case "finish-step":
                        case "finish":
                        case "message-metadata":
                        case "text-start":
                        case "text-end":
                        case "reasoning-start":
                        case "reasoning-delta":
                        case "reasoning-end":
                        case "source-url":
                        case "source-document":
                        case "file":
                            break;
                        case "text-delta":
                            appendTextDelta(getRequiredStringField(event, "delta", payload));
                            break;
                        case "tool-input-start":
                            {
                                const toolCall = findOrCreateToolCall(getRequiredStringField(event, "toolCallId", payload), getRequiredStringField(event, "toolName", payload));
                                toolCall.state = "running";
                                toolCall.resultText = null;
                                toolCall.errorText = null;
                                toolCall.argsText = "";
                                break;
                            }
                        case "tool-input-delta":
                            {
                                const toolCallId = getRequiredStringField(event, "toolCallId", payload);
                                const inputTextDelta = getRequiredStringField(event, "inputTextDelta", payload);
                                const toolCall = findOrCreateToolCall(toolCallId, "tool");
                                var _toolCall_argsText;
                                toolCall.argsText = ((_toolCall_argsText = toolCall.argsText) !== null && _toolCall_argsText !== void 0 ? _toolCall_argsText : "") + inputTextDelta;
                                break;
                            }
                        case "tool-input-available":
                            {
                                const toolCall = findOrCreateToolCall(getRequiredStringField(event, "toolCallId", payload), getRequiredStringField(event, "toolName", payload));
                                toolCall.argsText = stringifyForDebug(event.input);
                                break;
                            }
                        case "tool-input-error":
                            {
                                const toolCallId = getRequiredStringField(event, "toolCallId", payload);
                                const toolName = getRequiredStringField(event, "toolName", payload);
                                const errorText = getRequiredStringField(event, "errorText", payload);
                                const toolCall = findOrCreateToolCall(toolCallId, toolName);
                                toolCall.state = "error";
                                toolCall.errorText = errorText;
                                toolCall.resultText = errorText;
                                break;
                            }
                        case "tool-output-available":
                            {
                                const toolCall = findOrCreateToolCall(getRequiredStringField(event, "toolCallId", payload), "tool");
                                const preliminary = event.preliminary === true;
                                toolCall.resultText = stringifyForDebug(event.output);
                                if (!preliminary) toolCall.state = "success";
                                break;
                            }
                        case "tool-output-error":
                            {
                                const toolCallId = getRequiredStringField(event, "toolCallId", payload);
                                const errorText = getRequiredStringField(event, "errorText", payload);
                                const toolCall = findOrCreateToolCall(toolCallId, "tool");
                                toolCall.state = "error";
                                toolCall.errorText = errorText;
                                toolCall.resultText = errorText;
                                break;
                            }
                        case "tool-output-denied":
                            {
                                const toolCall = findOrCreateToolCall(getRequiredStringField(event, "toolCallId", payload), "tool");
                                toolCall.state = "error";
                                toolCall.errorText = "Tool output denied";
                                toolCall.resultText = "Tool output denied";
                                break;
                            }
                        case "tool-approval-request":
                            {
                                const toolCallId = getRequiredStringField(event, "toolCallId", payload);
                                const approvalId = getRequiredStringField(event, "approvalId", payload);
                                const toolCall = findOrCreateToolCall(toolCallId, "tool");
                                toolCall.state = "running";
                                toolCall.resultText = "Approval requested (".concat(approvalId, ")");
                                break;
                            }
                        case "abort":
                            {
                                const reason = typeof event.reason === "string" ? event.reason : "unknown reason";
                                throw new Error("AI stream aborted: ".concat(reason));
                            }
                        case "error":
                            throw new Error(typeof event.errorText === "string" ? "AI stream error: ".concat(event.errorText) : "AI stream error event: ".concat(payload));
                        default:
                            if (eventType.startsWith("data-")) break;
                            throw new Error("Unexpected AI stream event type: ".concat(eventType));
                    }
                }
                renderMessages();
            }
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                const assistantMessage = getCurrentAssistantMessage();
                if (assistantMessage.parts.length === 0) assistantMessage.parts.push({
                    type: "text",
                    content: "Stopped."
                });
                renderMessages();
                return;
            }
            const message = error instanceof Error ? error.message : "Unknown AI stream error";
            const lastMessage = getLastItem(messages);
            if ((lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.role) === "assistant") {
                lastMessage.parts = [
                    {
                        type: "text",
                        content: message
                    }
                ];
                lastMessage.toolCallsById.clear();
            }
            renderMessages();
            alert("AI stream failed: ".concat(message));
        } finally{
            aiLoading = false;
            activeAiAbortController = null;
            renderMessages();
            renderInput();
        }
    }
    const inputWrapper = h("div", {
        className: "sdt-ai-input-wrapper"
    });
    const input = h("input", {
        type: "text",
        className: "sdt-ai-input",
        placeholder: "Ask anything about Stack Auth...",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: "false"
    });
    const sendBtn = h("button", {
        className: "sdt-ai-send-btn",
        title: "Send"
    });
    setHtml(sendBtn, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/></svg>");
    function renderInput() {
        input.disabled = false;
        input.placeholder = messages.length === 0 ? "Ask anything about Stack Auth..." : "Ask a follow-up...";
        if (aiLoading) {
            sendBtn.classList.add("sdt-ai-send-btn-active");
            sendBtn.classList.add("sdt-ai-stop-btn");
            sendBtn.setAttribute("title", "Stop");
            setHtml(sendBtn, "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/></svg>");
        } else if (input.value.trim()) {
            sendBtn.classList.add("sdt-ai-send-btn-active");
            sendBtn.classList.remove("sdt-ai-stop-btn");
            sendBtn.setAttribute("title", "Send");
            setHtml(sendBtn, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/></svg>");
        } else {
            sendBtn.classList.remove("sdt-ai-send-btn-active");
            sendBtn.classList.remove("sdt-ai-stop-btn");
            sendBtn.setAttribute("title", "Send");
            setHtml(sendBtn, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/></svg>");
        }
    }
    input.addEventListener("input", renderInput);
    input.addEventListener("keydown", (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (aiLoading) activeAiAbortController === null || activeAiAbortController === void 0 ? void 0 : activeAiAbortController.abort();
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(sendMessage(input.value));
                input.value = "";
            }
            renderInput();
        }
    });
    sendBtn.addEventListener("click", ()=>{
        if (aiLoading) activeAiAbortController === null || activeAiAbortController === void 0 ? void 0 : activeAiAbortController.abort();
        else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(sendMessage(input.value));
            input.value = "";
        }
        renderInput();
    });
    const newChatBtn = h("button", {
        className: "sdt-ai-new-chat",
        title: "New conversation",
        style: {
            display: "none"
        }
    });
    setHtml(newChatBtn, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>");
    newChatBtn.addEventListener("click", ()=>{
        if (aiLoading) activeAiAbortController === null || activeAiAbortController === void 0 ? void 0 : activeAiAbortController.abort();
        messages.length = 0;
        input.value = "";
        renderMessages();
        renderInput();
        newChatBtn.style.display = "none";
    });
    inputWrapper.append(input, sendBtn);
    inputArea.append(newChatBtn, inputWrapper);
    container.append(messagesArea, inputArea);
    renderMessages();
    renderInput();
    return container;
}
function createDashboardTab(app) {
    return createIframeTab(resolveDashboardUrl(app), "Stack Auth Dashboard", "Loading dashboard…", "Unable to load dashboard", "The dashboard may require authentication or block framing", "Open in New Tab");
}
function createSupportTab(app) {
    const container = h("div", {
        className: "sdt-support-tab"
    });
    const apiBaseUrl = resolveApiBaseUrl(app);
    function createFeedbackForm() {
        const pane = h("div", {
            className: "sdt-support-feedback-pane"
        });
        const form = h("form", {
            className: "sdt-support-form"
        });
        let feedbackType = "feedback";
        let status = "idle";
        let errorMessage = "";
        const nameInput = h("input", {
            className: "sdt-support-input",
            type: "text",
            placeholder: "Your name"
        });
        const emailInput = h("input", {
            className: "sdt-support-input",
            type: "email",
            placeholder: "you@example.com",
            required: "true"
        });
        const messageInput = h("textarea", {
            className: "sdt-support-textarea",
            placeholder: "What's on your mind?",
            required: "true",
            rows: "5"
        });
        function render() {
            form.innerHTML = "";
            if (status === "success") {
                const successDiv = h("div", {
                    className: "sdt-support-status sdt-support-status-success"
                });
                const icon = h("div", {
                    className: "sdt-support-status-icon"
                });
                setHtml(icon, "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M6 10l3 3 5-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>");
                successDiv.append(icon, h("div", {
                    className: "sdt-support-status-title"
                }, "Feedback sent"), h("div", {
                    className: "sdt-support-status-msg"
                }, "Thank you! We'll get back to you soon."));
                const resetBtn = h("button", {
                    className: "sdt-support-submit",
                    style: {
                        marginTop: "12px",
                        width: "auto"
                    }
                }, "Send another");
                resetBtn.addEventListener("click", ()=>{
                    status = "idle";
                    render();
                });
                successDiv.appendChild(resetBtn);
                form.appendChild(successDiv);
                return;
            }
            if (status === "error") {
                const errDiv = h("div", {
                    className: "sdt-support-status sdt-support-status-error"
                });
                const icon = h("div", {
                    className: "sdt-support-status-icon"
                });
                setHtml(icon, "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M10 6v5m0 3h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>");
                errDiv.append(icon, h("div", {
                    className: "sdt-support-status-title"
                }, "Failed to send"), h("div", {
                    className: "sdt-support-status-msg"
                }, errorMessage || "Please try again."));
                const retryBtn = h("button", {
                    className: "sdt-support-submit",
                    style: {
                        marginTop: "12px",
                        width: "auto"
                    }
                }, "Try again");
                retryBtn.addEventListener("click", ()=>{
                    status = "idle";
                    errorMessage = "";
                    render();
                });
                errDiv.appendChild(retryBtn);
                form.appendChild(errDiv);
                return;
            }
            const nameField = h("div", {
                className: "sdt-support-field"
            });
            const nameLabel = h("label", {
                className: "sdt-support-label"
            }, "Name ");
            nameLabel.appendChild(h("span", {
                className: "sdt-support-optional"
            }, "optional"));
            nameField.append(nameLabel, nameInput);
            form.appendChild(nameField);
            const emailField = h("div", {
                className: "sdt-support-field"
            });
            emailField.append(h("label", {
                className: "sdt-support-label"
            }, "Email"), emailInput);
            form.appendChild(emailField);
            const msgField = h("div", {
                className: "sdt-support-field"
            });
            msgField.append(h("label", {
                className: "sdt-support-label"
            }, feedbackType === "bug" ? "Description" : "Message"), messageInput);
            messageInput.placeholder = feedbackType === "bug" ? "Steps to reproduce, expected vs. actual behavior…" : "What's on your mind?";
            form.appendChild(msgField);
            const typeCards = h("div", {
                className: "sdt-support-type-cards"
            });
            const feedbackBtn = h("button", {
                type: "button",
                className: "sdt-support-type-card ".concat(feedbackType === "feedback" ? "sdt-support-type-card-active" : "")
            });
            setHtml(feedbackBtn, "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></svg><span>Feedback</span>");
            feedbackBtn.addEventListener("click", ()=>{
                feedbackType = "feedback";
                render();
            });
            const bugBtn = h("button", {
                type: "button",
                className: "sdt-support-type-card ".concat(feedbackType === "bug" ? "sdt-support-type-card-active" : "")
            });
            setHtml(bugBtn, "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"/><path d=\"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6\"/><path d=\"M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M6 17H3M21 5c0 2.1-1.6 3.8-3.53 4M18 13h4M21 17h-3\"/></svg><span>Bug Report</span>");
            bugBtn.addEventListener("click", ()=>{
                feedbackType = "bug";
                render();
            });
            typeCards.append(feedbackBtn, bugBtn);
            form.appendChild(typeCards);
            const submitBtn = h("button", {
                type: "submit",
                className: "sdt-support-submit"
            });
            setHtml(submitBtn, "Submit <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/><polyline points=\"12 5 19 12 12 19\"/></svg>");
            submitBtn.disabled = status === "submitting";
            form.appendChild(submitBtn);
            const channels = h("div", {
                className: "sdt-support-channels"
            });
            channels.innerHTML = '\n        <a href="https://discord.stack-auth.com" target="_blank" rel="noopener noreferrer" class="sdt-support-channel">\n          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>\n          <span>Discord</span>\n        </a>\n        <a href="mailto:team@stack-auth.com" class="sdt-support-channel">\n          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>\n          <span>Email</span>\n        </a>\n        <a href="https://github.com/hexclave/stack-auth" target="_blank" rel="noopener noreferrer" class="sdt-support-channel">\n          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>\n          <span>GitHub</span>\n        </a>';
            form.appendChild(channels);
            form.insertBefore(channels, form.firstChild);
        }
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            if (!emailInput.value.trim() || !messageInput.value.trim()) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
                status = "submitting";
                render();
                try {
                    const response = await fetch("".concat(apiBaseUrl, "/api/latest/internal/feedback"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            name: nameInput.value.trim() || void 0,
                            email: emailInput.value.trim(),
                            message: messageInput.value.trim(),
                            feedback_type: feedbackType
                        })
                    });
                    if (!response.ok) throw new Error("Failed to send: ".concat(response.status, " ").concat(response.statusText));
                    const result = await response.json();
                    if (!result.success) throw new Error(result.message || "Failed to send feedback");
                    status = "success";
                    messageInput.value = "";
                } catch (err) {
                    status = "error";
                    errorMessage = err.message || "An unexpected error occurred";
                }
                render();
            });
        });
        render();
        pane.appendChild(form);
        return pane;
    }
    container.appendChild(createFeedbackForm());
    return container;
}
function createComponentsTab(app) {
    const container = h("div", {
        className: "sdt-pg-layout"
    });
    const apiBaseUrl = resolveApiBaseUrl(app);
    const urls = app.urls;
    var _app_stackAppInternalsSymbol_getConstructorOptions_urls;
    const urlOptions = (_app_stackAppInternalsSymbol_getConstructorOptions_urls = app[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].getConstructorOptions().urls) !== null && _app_stackAppInternalsSymbol_getConstructorOptions_urls !== void 0 ? _app_stackAppInternalsSymbol_getConstructorOptions_urls : {};
    const PAGE_ENTRIES = [
        {
            key: "signIn",
            label: "Sign-in"
        },
        {
            key: "signUp",
            label: "Sign-up"
        },
        {
            key: "forgotPassword",
            label: "Forgot password"
        },
        {
            key: "passwordReset",
            label: "Password reset"
        },
        {
            key: "emailVerification",
            label: "Email verification"
        },
        {
            key: "accountSettings",
            label: "Account settings"
        },
        {
            key: "teamInvitation",
            label: "Team invitation"
        },
        {
            key: "cliAuthConfirm",
            label: "CLI auth confirmation"
        },
        {
            key: "mfa",
            label: "MFA"
        },
        {
            key: "onboarding",
            label: "Onboarding"
        },
        {
            key: "error",
            label: "Error"
        }
    ];
    function classifyPage(key) {
        var _urlOptions_key, _ref;
        const target = (_ref = (_urlOptions_key = urlOptions[key]) !== null && _urlOptions_key !== void 0 ? _urlOptions_key : urlOptions.default) !== null && _ref !== void 0 ? _ref : {
            type: "handler-component"
        };
        if (typeof target === "string") return {
            classification: "custom",
            version: null
        };
        if ("type" in target) {
            var _target_version;
            if (target.type === "custom") return {
                classification: "custom",
                version: (_target_version = target.version) !== null && _target_version !== void 0 ? _target_version : null
            };
            return {
                classification: target.type,
                version: null
            };
        }
        return {
            classification: "handler-component",
            version: null
        };
    }
    let latestVersions = null;
    let selectedKey = null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(fetch("".concat(apiBaseUrl, "/api/latest/internal/component-versions")).then((r)=>r.json()).then((data)=>{
        var _data_versions;
        latestVersions = new Map(Object.entries((_data_versions = data.versions) !== null && _data_versions !== void 0 ? _data_versions : {}));
        renderSidebar();
    }).catch(()=>{}));
    function buildPages() {
        return PAGE_ENTRIES.map((entry)=>{
            const { classification, version } = classifyPage(entry.key);
            let versionStatus = "current";
            let versionChangelogs = [];
            if (classification === "custom" && version != null && latestVersions) {
                const info = latestVersions.get(entry.key);
                if (info && version < info.version) {
                    versionStatus = "outdated";
                    versionChangelogs = Object.entries(info.changelogs).map((param)=>{
                        let [v, cl] = param;
                        return {
                            version: Number(v),
                            changelog: cl
                        };
                    }).filter((e)=>e.version > version).sort((a, b)=>a.version - b.version);
                }
            }
            return {
                key: entry.key,
                label: entry.label,
                url: urls[entry.key] || "",
                classification,
                version,
                versionStatus,
                versionChangelogs
            };
        });
    }
    function getCompactUrl(url) {
        const resolved = new URL(url, window.location.origin);
        return "".concat(resolved.pathname).concat(resolved.search).concat(resolved.hash);
    }
    const sidebar = h("div", {
        className: "sdt-pg-sidebar"
    });
    const mainArea = h("div", {
        className: "sdt-pg-main"
    });
    function renderSidebar() {
        sidebar.innerHTML = "";
        const pages = buildPages();
        const outdatedCount = pages.filter((p)=>p.versionStatus === "outdated").length;
        const head = h("div", {
            className: "sdt-pg-sidebar-head"
        });
        head.appendChild(h("span", {
            className: "sdt-pg-sidebar-title"
        }, "Pages"));
        head.appendChild(h("span", {
            className: "sdt-pg-sidebar-count"
        }, String(pages.length)));
        if (outdatedCount > 0) head.appendChild(h("span", {
            className: "sdt-pg-sidebar-warn"
        }, "".concat(outdatedCount, " outdated")));
        sidebar.appendChild(head);
        const list = h("div", {
            className: "sdt-pg-list"
        });
        for (const page of pages){
            const isOutdated = page.versionStatus === "outdated";
            const item = h("div", {
                className: "sdt-pg-item ".concat(isOutdated ? "sdt-pg-item-warn" : ""),
                "data-selected": String(selectedKey === page.key)
            });
            const dotClass = isOutdated ? "sdt-pg-item-dot-warn" : page.classification === "custom" ? "sdt-pg-item-dot-custom" : "sdt-pg-item-dot-handler";
            item.appendChild(h("span", {
                className: "sdt-pg-item-dot ".concat(dotClass)
            }));
            item.appendChild(h("span", {
                className: "sdt-pg-item-label"
            }, page.label));
            if (isOutdated) item.appendChild(h("span", {
                className: "sdt-pg-badge sdt-pg-badge-outdated"
            }, "Outdated"));
            item.addEventListener("click", ()=>{
                selectedKey = page.key;
                renderSidebar();
                renderDetail(page);
            });
            list.appendChild(item);
        }
        sidebar.appendChild(list);
    }
    function renderDetail(page) {
        mainArea.innerHTML = "";
        const detail = h("div", {
            className: "sdt-pg-detail"
        });
        const header = h("div", {
            className: "sdt-pg-header"
        });
        const headerTop = h("div", {
            className: "sdt-pg-header-top"
        });
        headerTop.appendChild(h("h3", {
            className: "sdt-pg-title"
        }, "".concat(page.label, " Page")));
        headerTop.appendChild(h("a", {
            href: page.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "sdt-pg-title-url"
        }, getCompactUrl(page.url)));
        if (page.versionStatus === "outdated") headerTop.appendChild(h("span", {
            className: "sdt-pg-badge sdt-pg-badge-outdated"
        }, "Outdated"));
        header.appendChild(headerTop);
        const redirectMethod = "stackApp.redirectTo".concat(page.key.charAt(0).toUpperCase()).concat(page.key.slice(1), "()");
        const codeRow = h("div", {
            className: "sdt-pg-code-inline"
        });
        codeRow.appendChild(h("code", {
            className: "sdt-pg-code"
        }, redirectMethod));
        const openBtn = h("button", {
            className: "sdt-pg-copy-btn sdt-pg-open-btn"
        });
        setHtml(openBtn, "Open <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17L17 7\"/><path d=\"M7 7h10v10\"/></svg>");
        openBtn.addEventListener("click", ()=>{
            const resolved = new URL(page.url, window.location.origin);
            window.open(resolved.toString(), "_blank", "noopener,noreferrer");
        });
        codeRow.appendChild(openBtn);
        header.appendChild(codeRow);
        detail.appendChild(header);
        var _page_version;
        const prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$url$2d$targets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPagePrompt"])(page.key, (_page_version = page.version) !== null && _page_version !== void 0 ? _page_version : void 0);
        if (prompt) {
            const isOutdated = page.versionStatus === "outdated";
            if (page.classification === "handler-component" || page.classification === "hosted" || isOutdated) {
                let promptText;
                if (isOutdated && prompt.upgradePrompt) promptText = prompt.upgradePrompt;
                else if (prompt.fullPrompt) promptText = prompt.fullPrompt;
                else promptText = "";
                if (promptText) {
                    const section = h("div", {
                        className: "sdt-pg-section"
                    });
                    section.appendChild(h("div", {
                        className: "sdt-pg-section-label"
                    }, isOutdated ? "Use this prompt to upgrade your component:" : "Want to customize this page? Paste this prompt into your coding agent."));
                    section.appendChild(h("pre", {
                        className: "sdt-pg-pre"
                    }, promptText));
                    const footer = h("div", {
                        className: "sdt-pg-section-footer"
                    });
                    const copyBtn = h("button", {
                        className: "sdt-pg-copy-btn"
                    }, "Copy prompt");
                    copyBtn.addEventListener("click", ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$2d$shared$40$2$2e$8$2e$108_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$react$40$19$2e$2$2e$18_$5f40$types$2b$r_f98bded9a0de4d4422444a4ad21d24db$2f$node_modules$2f40$stackframe$2f$stack$2d$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(navigator.clipboard.writeText(promptText).then(()=>{
                            copyBtn.textContent = "✓ Copied";
                            setTimeout(()=>{
                                copyBtn.textContent = "Copy prompt";
                            }, 1500);
                        }));
                    });
                    footer.appendChild(copyBtn);
                    section.appendChild(footer);
                    detail.appendChild(section);
                }
            }
        }
        mainArea.appendChild(detail);
    }
    function renderEmptyMain() {
        mainArea.innerHTML = "";
        const empty = h("div", {
            className: "sdt-pg-empty"
        });
        const icon = h("div", {
            className: "sdt-pg-empty-icon"
        });
        setHtml(icon, "<svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/></svg>");
        empty.appendChild(icon);
        empty.appendChild(h("div", {
            className: "sdt-pg-empty-text"
        }, "Select a page to inspect"));
        empty.appendChild(h("div", {
            className: "sdt-pg-empty-sub"
        }, "View configuration, preview, and upgrade prompts"));
        mainArea.appendChild(empty);
    }
    renderSidebar();
    renderEmptyMain();
    container.append(sidebar, mainArea);
    return container;
}
function createPanel(app, state, logStore, onClose) {
    const panel = h("div", {
        className: "sdt-panel"
    });
    let panelAnimationTimeout = null;
    function animateNextPanelGeometryChange() {
        panel.classList.add("sdt-panel-geometry-animated");
        if (panelAnimationTimeout !== null) clearTimeout(panelAnimationTimeout);
        panelAnimationTimeout = setTimeout(()=>{
            panel.classList.remove("sdt-panel-geometry-animated");
            panelAnimationTimeout = null;
        }, 220);
    }
    function applyPanelMode(tabId, opts) {
        if ((opts === null || opts === void 0 ? void 0 : opts.animate) === true) animateNextPanelGeometryChange();
        if (tabId === "dashboard") {
            panel.classList.add("sdt-panel-fullscreen");
            panel.style.width = "";
            panel.style.height = "";
            return;
        }
        panel.classList.remove("sdt-panel-fullscreen");
        panel.style.width = state.get().panelWidth + "px";
        panel.style.height = state.get().panelHeight + "px";
    }
    const tabs = getTabsForApp(app);
    const storedActiveTab = state.get().activeTab;
    const activeTab = tabs.some((tab)=>tab.id === storedActiveTab) ? storedActiveTab : DEFAULT_STATE.activeTab;
    applyPanelMode(activeTab);
    const inner = h("div", {
        className: "sdt-panel-inner"
    });
    const closeBtn = h("button", {
        className: "sdt-close-btn",
        "aria-label": "Close"
    });
    setHtml(closeBtn, "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><line x1=\"3\" y1=\"3\" x2=\"11\" y2=\"11\"/><line x1=\"11\" y1=\"3\" x2=\"3\" y2=\"11\"/></svg>");
    closeBtn.addEventListener("click", onClose);
    const docsLink = h("a", {
        href: DOCS_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "sdt-docs-link"
    });
    docsLink.appendChild(document.createTextNode("Docs"));
    const docsIcon = h("span", {
        className: "sdt-docs-link-icon",
        "aria-hidden": "true"
    });
    setHtml(docsIcon, "<svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 17L17 7\"/><path d=\"M7 7h10v10\"/></svg>");
    docsLink.appendChild(docsIcon);
    const tabBar = createTabBar(tabs, activeTab, (id)=>{
        state.update({
            activeTab: id
        });
        applyPanelMode(id, {
            animate: true
        });
        showTab(id);
    }, {
        trailing: h("div", {
            className: "sdt-tabbar-actions"
        }, docsLink, closeBtn)
    });
    inner.appendChild(tabBar.el);
    const content = h("div", {
        className: "sdt-content"
    });
    const layers = h("div", {
        className: "sdt-tab-layers"
    });
    content.appendChild(layers);
    inner.appendChild(content);
    const mountedPanes = /* @__PURE__ */ new Map();
    const cleanups = [];
    function mountTab(pane, result) {
        if ("element" in result) {
            pane.appendChild(result.element);
            if (result.cleanup) cleanups.push(result.cleanup);
        } else pane.appendChild(result);
    }
    function getOrCreatePane(tabId) {
        if (mountedPanes.has(tabId)) return mountedPanes.get(tabId);
        const pane = h("div", {
            className: "sdt-tab-pane"
        });
        if (tabId === "dashboard") pane.classList.add("sdt-tab-pane-iframe");
        switch(tabId){
            case "overview":
                mountTab(pane, createOverviewTab(app));
                break;
            case "customize":
                mountTab(pane, createComponentsTab(app));
                break;
            case "ai":
                mountTab(pane, createAITab(app));
                break;
            case "console":
                mountTab(pane, createConsoleTab(logStore));
                break;
            case "dashboard":
                mountTab(pane, createDashboardTab(app));
                break;
            case "support":
                mountTab(pane, createSupportTab(app));
                break;
        }
        mountedPanes.set(tabId, pane);
        layers.appendChild(pane);
        return pane;
    }
    function showTab(tabId) {
        const pane = getOrCreatePane(tabId);
        tabBar.setActive(tabId);
        for (const [, p] of mountedPanes)p.classList.remove("sdt-tab-pane-active");
        pane.classList.add("sdt-tab-pane-active");
    }
    showTab(activeTab);
    function addResizeHandle(edge) {
        const handle = h("div", {
            className: "sdt-resize-handle sdt-resize-".concat(edge)
        });
        let startX = 0;
        let startY = 0;
        let startW = 0;
        let startH = 0;
        handle.addEventListener("pointerdown", (e)=>{
            e.preventDefault();
            if (panelAnimationTimeout !== null) {
                clearTimeout(panelAnimationTimeout);
                panelAnimationTimeout = null;
            }
            panel.classList.remove("sdt-panel-geometry-animated");
            handle.setPointerCapture(e.pointerId);
            startX = e.clientX;
            startY = e.clientY;
            startW = panel.offsetWidth;
            startH = panel.offsetHeight;
        });
        handle.addEventListener("pointermove", (e)=>{
            if (!handle.hasPointerCapture(e.pointerId)) return;
            const dx = startX - e.clientX;
            const dy = startY - e.clientY;
            if (edge === "left" || edge === "top-left") {
                const newW = Math.max(400, Math.min(startW + dx, window.innerWidth - 32));
                panel.style.width = newW + "px";
            }
            if (edge === "top" || edge === "top-left") {
                const newH = Math.max(300, Math.min(startH + dy, window.innerHeight - 80));
                panel.style.height = newH + "px";
            }
        });
        handle.addEventListener("pointerup", (e)=>{
            handle.releasePointerCapture(e.pointerId);
            state.update({
                panelWidth: panel.offsetWidth,
                panelHeight: panel.offsetHeight
            });
        });
        panel.appendChild(handle);
    }
    addResizeHandle("top");
    addResizeHandle("left");
    addResizeHandle("top-left");
    panel.appendChild(inner);
    return {
        element: panel,
        cleanup: ()=>{
            if (panelAnimationTimeout !== null) clearTimeout(panelAnimationTimeout);
            for (const fn of cleanups)fn();
        }
    };
}
function createDevTool(app) {
    var _getGlobalDevToolInstance;
    if (typeof document === "undefined" || typeof document.createElement !== "function") return ()=>{};
    const body = Reflect.get(document, "body");
    if (!hasAppendChild(body)) return ()=>{};
    (_getGlobalDevToolInstance = getGlobalDevToolInstance()) === null || _getGlobalDevToolInstance === void 0 ? void 0 : _getGlobalDevToolInstance.cleanup();
    let existingRoot = document.getElementById(ROOT_ID);
    while(existingRoot !== null){
        existingRoot.remove();
        existingRoot = document.getElementById(ROOT_ID);
    }
    const root = document.createElement("div");
    root.id = ROOT_ID;
    body.appendChild(root);
    const wrapper = h("div", {
        className: "stack-devtool"
    });
    root.appendChild(wrapper);
    const style = document.createElement("style");
    style.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$dev$2d$tool$2f$dev$2d$tool$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devToolCSS"];
    wrapper.appendChild(style);
    const state = createStateStore();
    const logStore = getGlobalLogStore();
    let panel = null;
    function closePanelAndPersistClosed() {
        closePanel();
    }
    function openPanel() {
        if (panel) return;
        panel = createPanel(app, state, logStore, closePanelAndPersistClosed);
        wrapper.appendChild(panel.element);
    }
    function closePanel() {
        if (!panel) return;
        state.update({
            isOpen: false
        });
        const closing = panel;
        panel = null;
        closing.cleanup();
        closing.element.classList.add("sdt-panel-exiting");
        setTimeout(()=>{
            if (wrapper.contains(closing.element)) wrapper.removeChild(closing.element);
        }, 150);
    }
    function togglePanel() {
        if (state.get().isOpen) closePanel();
        else {
            state.update({
                isOpen: true
            });
            openPanel();
        }
    }
    const trigger = createTrigger(togglePanel);
    wrapper.appendChild(trigger.element);
    if (state.get().isOpen) openPanel();
    const removeRequestListener = app[__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$stackframe$2b$stack$40$2$2e$8$2e$108_$40$standard$2d$schema$2b$spec$40$1$2e$1$2e$0_$40$types$2b$react$2d$dom$40$19$2e$2$2e$5_$40$types$2b$re_f9eb688a0e3c9094b0b325d46db95501$2f$node_modules$2f40$stackframe$2f$stack$2f$dist$2f$esm$2f$lib$2f$stack$2d$app$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackAppInternalsSymbol"]].addRequestListener((entry)=>{
        const timestamp = Date.now();
        logStore.addApiLog({
            id: nextId(),
            timestamp,
            method: entry.method,
            url: entry.path,
            status: entry.status,
            duration: entry.duration,
            error: entry.error
        });
        if (entry.error) logStore.addEventLog({
            id: nextId(),
            timestamp,
            type: "error",
            message: "Network error on ".concat(entry.method, " ").concat(entry.path, ": ").concat(entry.error)
        });
        else if (entry.status && entry.status >= 400) logStore.addEventLog({
            id: nextId(),
            timestamp,
            type: "error",
            message: "API error ".concat(entry.status, " on ").concat(entry.method, " ").concat(entry.path)
        });
    });
    let didCleanup = false;
    const instance = {
        cleanup: ()=>{
            if (didCleanup) return;
            didCleanup = true;
            if (getGlobalDevToolInstance() === instance) setGlobalDevToolInstance(null);
            trigger.cleanup();
            removeRequestListener();
            panel === null || panel === void 0 ? void 0 : panel.cleanup();
            if (root.parentNode) root.parentNode.removeChild(root);
        }
    };
    setGlobalDevToolInstance(instance);
    return ()=>{
        instance.cleanup();
    };
}
;
 //# sourceMappingURL=dev-tool-core.js.map
}),
]);

//# sourceMappingURL=a7808_%40stackframe_stack_dist_esm_dev-tool_16eae872._.js.map