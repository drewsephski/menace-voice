module.exports = [
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/instrumentation-serde-C-Xxv-jj.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
//#region src/instrumentation-serde.ts
/**
* Converts any `RegExp` `module.filePath` into a plain `{ source, flags }`
* object so the configs can be passed where only JSON-serializable values are
* allowed (e.g. Turbopack loader options). Configs that are already
* serializable are returned unchanged.
*/ function serializeInstrumentations(configs) {
    return configs.map((config)=>{
        const { filePath } = config.module;
        if (!(filePath instanceof RegExp)) return config;
        return {
            ...config,
            module: {
                ...config.module,
                filePath: {
                    type: "RegExp",
                    source: filePath.source,
                    flags: filePath.flags
                }
            }
        };
    });
}
exports.n = serializeInstrumentations; //# sourceMappingURL=instrumentation-serde-C-Xxv-jj.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/webpack.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const instrumentationSerdeCXxvJj = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/instrumentation-serde-C-Xxv-jj.js [instrumentation] (ecmascript)");
const require$$0 = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const url = __turbopack_context__.r("[externals]/node:url [external] (node:url, cjs)");
var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
//#region src/webpack.ts
var LOADER_PATH = require$$0.resolve(require$$0.dirname(url.fileURLToPath(typeof document === 'undefined' ? __turbopack_context__.r("[externals]/url [external] (url, cjs)").pathToFileURL(("TURBOPACK compile-time value", "/ROOT/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/webpack.js")).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/webpack.js', document.baseURI).href)), "..", "cjs", "webpack-loader.cjs");
var DIAGNOSTICS_STATE_KEY = "__codeTransformerWebpackDiagnostics";
/**
* Asset names of the chunk holding each entry module. Deliberately not
* `entrypoint.getFiles()`, which also lists the initial chunks an entry
* depends on, and not `compilation.getAssets()`, which lists async chunks too.
*/ function entryAssetNames(compilation) {
    const names = /* @__PURE__ */ new Set();
    for (const entrypoint of compilation.entrypoints.values()){
        const chunk = entrypoint.getEntrypointChunk?.();
        for (const file of chunk?.files ?? [])names.add(file);
    }
    return names;
}
var CodeTransformerWebpackPlugin = class {
    constructor(options){
        this.options = options;
    }
    apply(compiler) {
        const webpack = compiler.webpack;
        compiler.options.module = compiler.options.module || {
            rules: []
        };
        compiler.options.module.rules = compiler.options.module.rules || [];
        compiler.options.module.rules.unshift({
            test: /\.(c|m)?jsx?$|\.tsx?$/,
            enforce: "pre",
            use: [
                {
                    loader: LOADER_PATH,
                    options: {
                        instrumentations: instrumentationSerdeCXxvJj.n(this.options.instrumentations),
                        ...this.options.dcModule ? {
                            dcModule: this.options.dcModule
                        } : {}
                    }
                }
            ]
        });
        if (this.options.injectDiagnostics) {
            const ConcatSource = webpack?.sources?.ConcatSource;
            if (ConcatSource && webpack?.Compilation) compiler.hooks.thisCompilation.tap("code-transformer", (compilation)=>{
                compilation[DIAGNOSTICS_STATE_KEY] = {
                    transformedModules: /* @__PURE__ */ new Set(),
                    failedModules: /* @__PURE__ */ new Set()
                };
                compilation.hooks.processAssets.tap({
                    name: "code-transformer",
                    stage: webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
                }, ()=>{
                    const state = compilation[DIAGNOSTICS_STATE_KEY];
                    if (!state) return;
                    const injectCode = this.options.injectDiagnostics?.({
                        transformedModules: Array.from(state.transformedModules),
                        failedModules: Array.from(state.failedModules)
                    });
                    if (!injectCode) return;
                    for (const assetName of entryAssetNames(compilation)){
                        if (!/\.(js|ts|jsx|tsx|mjs|cjs)(\?[^?]*)?(#[^#]*)?$/.test(assetName)) continue;
                        compilation.updateAsset(assetName, (source)=>new ConcatSource(injectCode, source));
                    }
                });
            });
        }
    }
};
function codeTransformerWebpack(options) {
    return new CodeTransformerWebpackPlugin(options);
}
exports.default = codeTransformerWebpack; //# sourceMappingURL=webpack.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/semifies/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
var semifies = satisfies;
function satisfies(v, t) {
    const [version] = parse(v, "");
    for (const checks of compile(t)){
        if (checkAll(checks, version)) return true;
    }
    return false;
}
function checkAll(checks, v) {
    for (const [ok2, t] of checks){
        if (!test(v, t, ok2)) return false;
    }
    return true;
}
function match(t) {
    if (t === "latest") t = ">=0";
    return t.match(/^([^\d+]*)(\d.*)$/) || [
        null,
        "",
        "*.*.*"
    ];
}
function compile(t) {
    const result = [];
    let checks = [];
    const tokens = t.trim().split(/\s+/);
    for(let i = 0; i < tokens.length; i++){
        const t2 = tokens[i];
        if (t2 === "-") continue;
        if (t2 === "||") {
            result.push(checks);
            checks = [];
            continue;
        }
        if (/^[<>=~v^]+$/.test(t2) && i + 1 < tokens.length) {
            tokens[i + 1] = t2 + tokens[i + 1];
            continue;
        }
        const res = match(t2);
        let cmp = res[1] || "=";
        if (cmp.endsWith("v")) cmp = cmp.slice(0, -1);
        let [v, c] = parse(res[2], cmp);
        if (i + 2 < tokens.length && tokens[i + 1] === "-") {
            const m = match(tokens[i + 2]);
            tokens[i + 2] = "<=" + (m[2].indexOf("-") === -1 ? m[2] + ".*.*" : m[2]);
            c = ">=";
        }
        if (c[0] === "~") {
            const digs = res[2].split("-")[0].split(".").length;
            checks.push([
                ">=",
                v
            ]);
            checks.push([
                "<",
                digs === 1 ? inc(v, 0) : digs === 2 ? inc(v, 1) : inc(v, 1)
            ]);
        } else if (c[0] === "^") {
            const digs = v[0] !== 0 ? 0 : v[1] !== 0 ? 1 : 2;
            checks.push([
                ">=",
                v
            ]);
            checks.push([
                "<",
                digs === 0 ? inc(v, 0) : digs === 1 ? inc(v, 1) : inc(v, 2)
            ]);
        } else {
            checks.push([
                c.replace("~", "").replace("^", ""),
                v
            ]);
        }
    }
    if (checks.length) result.push(checks);
    return result;
}
function inc(v, n) {
    const cpy = v.slice(0);
    if (v[n] === -1) return cpy;
    cpy[n++]++;
    for(; n < 3; n++)cpy[n] = 0;
    return cpy;
}
function num(n) {
    return n === "x" || n === "X" || n === "*" || n === "latest" ? -1 : Number(n);
}
function numOrString(s) {
    return /^\d+$/.test(s) ? Number(s) : s;
}
function ok(c, a, b) {
    return b === -1 ? c !== "<" : c === "=" ? a === b : c === ">" ? a > b : c === ">=" ? a >= b : c === "<" ? a < b : c === "<=" ? a <= b : false;
}
function parse(v, c) {
    v = v.split("+")[0];
    const [a, b] = v.split("-");
    const nums = a.split(".").map(num).slice(0, 3);
    const last = Math.max(nums.length - 1, 0);
    if (c === ">") {
        c = ">=";
        nums.push(0, 0, 0);
        nums[last]++;
    } else if (c === "") {
        nums.push(0, 0, 0);
    } else {
        nums.push(-1, -1, -1);
    }
    if (!b) return [
        nums.slice(0, 3),
        c
    ];
    return [
        nums.slice(0, 3).concat(b.split(".").map(numOrString)),
        c
    ];
}
function test(v, t, c) {
    if (!ok("=", v[0], t[0])) return ok(c, v[0], t[0]);
    if (!ok("=", v[1], t[1])) return ok(c, v[1], t[1]);
    if (!ok("=", v[2], t[2])) return ok(c, v[2], t[2]);
    if (v.length === 3 && t.length === 3) return ok(c, v[2], t[2]);
    if (c[0] === "<" && (t.length === 3 || v.length === 3)) return false;
    if (c[0] === ">") {
        if (v.length === 3) return true;
        if (t.length === 3) return false;
    }
    for(let i = 3; i < Math.max(v.length, t.length); i++){
        if (ok(c, v[i] || "", t[i] || "")) return true;
    }
    return false;
}
exports.semifies = semifies; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/esquery/dist/esquery.esm.min.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
function e(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for(var r2 = 0, n2 = Array(t2); r2 < t2; r2++)n2[r2] = e2[r2];
    return n2;
}
function t(e2, t2) {
    return function(e3) {
        if (Array.isArray(e3)) return e3;
    }(e2) || function(e3, t3) {
        var r2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
        if (null != r2) {
            var n2, o2, a2, i2, s2 = [], u2 = true, l2 = false;
            try {
                if (a2 = (r2 = r2.call(e3)).next, 0 === t3) ;
                else for(; !(u2 = (n2 = a2.call(r2)).done) && (s2.push(n2.value), s2.length !== t3); u2 = true);
            } catch (e4) {
                l2 = true, o2 = e4;
            } finally{
                try {
                    if (!u2 && null != r2.return && (i2 = r2.return(), Object(i2) !== i2)) return;
                } finally{
                    if (l2) throw o2;
                }
            }
            return s2;
        }
    }(e2, t2) || o(e2, t2) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
function r(t2) {
    return function(t3) {
        if (Array.isArray(t3)) return e(t3);
    }(t2) || function(e2) {
        if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"]) return Array.from(e2);
    }(t2) || o(t2) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
function n(e2) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
        return typeof e3;
    } : function(e3) {
        return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    })(e2);
}
function o(t2, r2) {
    if (t2) {
        if ("string" == typeof t2) return e(t2, r2);
        var n2 = ({}).toString.call(t2).slice(8, -1);
        return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? e(t2, r2) : void 0;
    }
}
function a(e2, t2) {
    return e2(t2 = {
        exports: {}
    }, t2.exports), t2.exports;
}
var i = a(function(e2, t2) {
    !function e3(t3) {
        var r2, n2, o2, a2, i2, s2;
        function u2(e4) {
            var t4, r3, n3 = {};
            for(t4 in e4)e4.hasOwnProperty(t4) && (r3 = e4[t4], n3[t4] = "object" == typeof r3 && null !== r3 ? u2(r3) : r3);
            return n3;
        }
        function l2(e4, t4) {
            this.parent = e4, this.key = t4;
        }
        function c2(e4, t4, r3, n3) {
            this.node = e4, this.path = t4, this.wrap = r3, this.ref = n3;
        }
        function f2() {}
        function p2(e4) {
            return null != e4 && "object" == typeof e4 && "string" == typeof e4.type;
        }
        function h2(e4, t4) {
            return (e4 === r2.ObjectExpression || e4 === r2.ObjectPattern) && "properties" === t4;
        }
        function y2(e4, t4) {
            for(var r3 = e4.length - 1; r3 >= 0; --r3)if (e4[r3].node === t4) return true;
            return false;
        }
        function d2(e4, t4) {
            return new f2().traverse(e4, t4);
        }
        function m2(e4, t4) {
            var r3;
            return r3 = function(e5, t5) {
                var r4, n3, o3, a3;
                for(n3 = e5.length, o3 = 0; n3;)t5(e5[a3 = o3 + (r4 = n3 >>> 1)]) ? n3 = r4 : (o3 = a3 + 1, n3 -= r4 + 1);
                return o3;
            }(t4, function(t5) {
                return t5.range[0] > e4.range[0];
            }), e4.extendedRange = [
                e4.range[0],
                e4.range[1]
            ], r3 !== t4.length && (e4.extendedRange[1] = t4[r3].range[0]), (r3 -= 1) >= 0 && (e4.extendedRange[0] = t4[r3].range[1]), e4;
        }
        return r2 = {
            AssignmentExpression: "AssignmentExpression",
            AssignmentPattern: "AssignmentPattern",
            ArrayExpression: "ArrayExpression",
            ArrayPattern: "ArrayPattern",
            ArrowFunctionExpression: "ArrowFunctionExpression",
            AwaitExpression: "AwaitExpression",
            BlockStatement: "BlockStatement",
            BinaryExpression: "BinaryExpression",
            BreakStatement: "BreakStatement",
            CallExpression: "CallExpression",
            CatchClause: "CatchClause",
            ChainExpression: "ChainExpression",
            ClassBody: "ClassBody",
            ClassDeclaration: "ClassDeclaration",
            ClassExpression: "ClassExpression",
            ComprehensionBlock: "ComprehensionBlock",
            ComprehensionExpression: "ComprehensionExpression",
            ConditionalExpression: "ConditionalExpression",
            ContinueStatement: "ContinueStatement",
            DebuggerStatement: "DebuggerStatement",
            DirectiveStatement: "DirectiveStatement",
            DoWhileStatement: "DoWhileStatement",
            EmptyStatement: "EmptyStatement",
            ExportAllDeclaration: "ExportAllDeclaration",
            ExportDefaultDeclaration: "ExportDefaultDeclaration",
            ExportNamedDeclaration: "ExportNamedDeclaration",
            ExportSpecifier: "ExportSpecifier",
            ExpressionStatement: "ExpressionStatement",
            ForStatement: "ForStatement",
            ForInStatement: "ForInStatement",
            ForOfStatement: "ForOfStatement",
            FunctionDeclaration: "FunctionDeclaration",
            FunctionExpression: "FunctionExpression",
            GeneratorExpression: "GeneratorExpression",
            Identifier: "Identifier",
            IfStatement: "IfStatement",
            ImportExpression: "ImportExpression",
            ImportDeclaration: "ImportDeclaration",
            ImportDefaultSpecifier: "ImportDefaultSpecifier",
            ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
            ImportSpecifier: "ImportSpecifier",
            Literal: "Literal",
            LabeledStatement: "LabeledStatement",
            LogicalExpression: "LogicalExpression",
            MemberExpression: "MemberExpression",
            MetaProperty: "MetaProperty",
            MethodDefinition: "MethodDefinition",
            ModuleSpecifier: "ModuleSpecifier",
            NewExpression: "NewExpression",
            ObjectExpression: "ObjectExpression",
            ObjectPattern: "ObjectPattern",
            PrivateIdentifier: "PrivateIdentifier",
            Program: "Program",
            Property: "Property",
            PropertyDefinition: "PropertyDefinition",
            RestElement: "RestElement",
            ReturnStatement: "ReturnStatement",
            SequenceExpression: "SequenceExpression",
            SpreadElement: "SpreadElement",
            Super: "Super",
            SwitchStatement: "SwitchStatement",
            SwitchCase: "SwitchCase",
            TaggedTemplateExpression: "TaggedTemplateExpression",
            TemplateElement: "TemplateElement",
            TemplateLiteral: "TemplateLiteral",
            ThisExpression: "ThisExpression",
            ThrowStatement: "ThrowStatement",
            TryStatement: "TryStatement",
            UnaryExpression: "UnaryExpression",
            UpdateExpression: "UpdateExpression",
            VariableDeclaration: "VariableDeclaration",
            VariableDeclarator: "VariableDeclarator",
            WhileStatement: "WhileStatement",
            WithStatement: "WithStatement",
            YieldExpression: "YieldExpression"
        }, o2 = {
            AssignmentExpression: [
                "left",
                "right"
            ],
            AssignmentPattern: [
                "left",
                "right"
            ],
            ArrayExpression: [
                "elements"
            ],
            ArrayPattern: [
                "elements"
            ],
            ArrowFunctionExpression: [
                "params",
                "body"
            ],
            AwaitExpression: [
                "argument"
            ],
            BlockStatement: [
                "body"
            ],
            BinaryExpression: [
                "left",
                "right"
            ],
            BreakStatement: [
                "label"
            ],
            CallExpression: [
                "callee",
                "arguments"
            ],
            CatchClause: [
                "param",
                "body"
            ],
            ChainExpression: [
                "expression"
            ],
            ClassBody: [
                "body"
            ],
            ClassDeclaration: [
                "id",
                "superClass",
                "body"
            ],
            ClassExpression: [
                "id",
                "superClass",
                "body"
            ],
            ComprehensionBlock: [
                "left",
                "right"
            ],
            ComprehensionExpression: [
                "blocks",
                "filter",
                "body"
            ],
            ConditionalExpression: [
                "test",
                "consequent",
                "alternate"
            ],
            ContinueStatement: [
                "label"
            ],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: [
                "body",
                "test"
            ],
            EmptyStatement: [],
            ExportAllDeclaration: [
                "source"
            ],
            ExportDefaultDeclaration: [
                "declaration"
            ],
            ExportNamedDeclaration: [
                "declaration",
                "specifiers",
                "source"
            ],
            ExportSpecifier: [
                "exported",
                "local"
            ],
            ExpressionStatement: [
                "expression"
            ],
            ForStatement: [
                "init",
                "test",
                "update",
                "body"
            ],
            ForInStatement: [
                "left",
                "right",
                "body"
            ],
            ForOfStatement: [
                "left",
                "right",
                "body"
            ],
            FunctionDeclaration: [
                "id",
                "params",
                "body"
            ],
            FunctionExpression: [
                "id",
                "params",
                "body"
            ],
            GeneratorExpression: [
                "blocks",
                "filter",
                "body"
            ],
            Identifier: [],
            IfStatement: [
                "test",
                "consequent",
                "alternate"
            ],
            ImportExpression: [
                "source"
            ],
            ImportDeclaration: [
                "specifiers",
                "source"
            ],
            ImportDefaultSpecifier: [
                "local"
            ],
            ImportNamespaceSpecifier: [
                "local"
            ],
            ImportSpecifier: [
                "imported",
                "local"
            ],
            Literal: [],
            LabeledStatement: [
                "label",
                "body"
            ],
            LogicalExpression: [
                "left",
                "right"
            ],
            MemberExpression: [
                "object",
                "property"
            ],
            MetaProperty: [
                "meta",
                "property"
            ],
            MethodDefinition: [
                "key",
                "value"
            ],
            ModuleSpecifier: [],
            NewExpression: [
                "callee",
                "arguments"
            ],
            ObjectExpression: [
                "properties"
            ],
            ObjectPattern: [
                "properties"
            ],
            PrivateIdentifier: [],
            Program: [
                "body"
            ],
            Property: [
                "key",
                "value"
            ],
            PropertyDefinition: [
                "key",
                "value"
            ],
            RestElement: [
                "argument"
            ],
            ReturnStatement: [
                "argument"
            ],
            SequenceExpression: [
                "expressions"
            ],
            SpreadElement: [
                "argument"
            ],
            Super: [],
            SwitchStatement: [
                "discriminant",
                "cases"
            ],
            SwitchCase: [
                "test",
                "consequent"
            ],
            TaggedTemplateExpression: [
                "tag",
                "quasi"
            ],
            TemplateElement: [],
            TemplateLiteral: [
                "quasis",
                "expressions"
            ],
            ThisExpression: [],
            ThrowStatement: [
                "argument"
            ],
            TryStatement: [
                "block",
                "handler",
                "finalizer"
            ],
            UnaryExpression: [
                "argument"
            ],
            UpdateExpression: [
                "argument"
            ],
            VariableDeclaration: [
                "declarations"
            ],
            VariableDeclarator: [
                "id",
                "init"
            ],
            WhileStatement: [
                "test",
                "body"
            ],
            WithStatement: [
                "object",
                "body"
            ],
            YieldExpression: [
                "argument"
            ]
        }, n2 = {
            Break: a2 = {},
            Skip: i2 = {},
            Remove: s2 = {}
        }, l2.prototype.replace = function(e4) {
            this.parent[this.key] = e4;
        }, l2.prototype.remove = function() {
            return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), true) : (this.replace(null), false);
        }, f2.prototype.path = function() {
            var e4, t4, r3, n3, o3;
            function a3(e5, t5) {
                if (Array.isArray(t5)) for(r3 = 0, n3 = t5.length; r3 < n3; ++r3)e5.push(t5[r3]);
                else e5.push(t5);
            }
            if (!this.__current.path) return null;
            for(o3 = [], e4 = 2, t4 = this.__leavelist.length; e4 < t4; ++e4)a3(o3, this.__leavelist[e4].path);
            return a3(o3, this.__current.path), o3;
        }, f2.prototype.type = function() {
            return this.current().type || this.__current.wrap;
        }, f2.prototype.parents = function() {
            var e4, t4, r3;
            for(r3 = [], e4 = 1, t4 = this.__leavelist.length; e4 < t4; ++e4)r3.push(this.__leavelist[e4].node);
            return r3;
        }, f2.prototype.current = function() {
            return this.__current.node;
        }, f2.prototype.__execute = function(e4, t4) {
            var r3, n3;
            return n3 = void 0, r3 = this.__current, this.__current = t4, this.__state = null, e4 && (n3 = e4.call(this, t4.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = r3, n3;
        }, f2.prototype.notify = function(e4) {
            this.__state = e4;
        }, f2.prototype.skip = function() {
            this.notify(i2);
        }, f2.prototype.break = function() {
            this.notify(a2);
        }, f2.prototype.remove = function() {
            this.notify(s2);
        }, f2.prototype.__initialize = function(e4, t4) {
            this.visitor = t4, this.root = e4, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, "iteration" === t4.fallback ? this.__fallback = Object.keys : "function" == typeof t4.fallback && (this.__fallback = t4.fallback), this.__keys = o2, t4.keys && (this.__keys = Object.assign(Object.create(this.__keys), t4.keys));
        }, f2.prototype.traverse = function(e4, t4) {
            var r3, n3, o3, s3, u3, l3, f3, d3, m3, x2, v2, g2;
            for(this.__initialize(e4, t4), g2 = {}, r3 = this.__worklist, n3 = this.__leavelist, r3.push(new c2(e4, null, null, null)), n3.push(new c2(null, null, null, null)); r3.length;)if ((o3 = r3.pop()) !== g2) {
                if (o3.node) {
                    if (l3 = this.__execute(t4.enter, o3), this.__state === a2 || l3 === a2) return;
                    if (r3.push(g2), n3.push(o3), this.__state === i2 || l3 === i2) continue;
                    if (u3 = (s3 = o3.node).type || o3.wrap, !(x2 = this.__keys[u3])) {
                        if (!this.__fallback) throw new Error("Unknown node type " + u3 + ".");
                        x2 = this.__fallback(s3);
                    }
                    for(d3 = x2.length; (d3 -= 1) >= 0;)if (v2 = s3[f3 = x2[d3]]) {
                        if (Array.isArray(v2)) {
                            for(m3 = v2.length; (m3 -= 1) >= 0;)if (v2[m3] && !y2(n3, v2[m3])) {
                                if (h2(u3, x2[d3])) o3 = new c2(v2[m3], [
                                    f3,
                                    m3
                                ], "Property", null);
                                else {
                                    if (!p2(v2[m3])) continue;
                                    o3 = new c2(v2[m3], [
                                        f3,
                                        m3
                                    ], null, null);
                                }
                                r3.push(o3);
                            }
                        } else if (p2(v2)) {
                            if (y2(n3, v2)) continue;
                            r3.push(new c2(v2, f3, null, null));
                        }
                    }
                }
            } else if (o3 = n3.pop(), l3 = this.__execute(t4.leave, o3), this.__state === a2 || l3 === a2) return;
        }, f2.prototype.replace = function(e4, t4) {
            var r3, n3, o3, u3, f3, y3, d3, m3, x2, v2, g2, A2, E;
            function b(e5) {
                var t5, n4, o4, a3;
                if (e5.ref.remove()) {
                    for(n4 = e5.ref.key, a3 = e5.ref.parent, t5 = r3.length; t5--;)if ((o4 = r3[t5]).ref && o4.ref.parent === a3) {
                        if (o4.ref.key < n4) break;
                        --o4.ref.key;
                    }
                }
            }
            for(this.__initialize(e4, t4), g2 = {}, r3 = this.__worklist, n3 = this.__leavelist, y3 = new c2(e4, null, null, new l2(A2 = {
                root: e4
            }, "root")), r3.push(y3), n3.push(y3); r3.length;)if ((y3 = r3.pop()) !== g2) {
                if (void 0 !== (f3 = this.__execute(t4.enter, y3)) && f3 !== a2 && f3 !== i2 && f3 !== s2 && (y3.ref.replace(f3), y3.node = f3), this.__state !== s2 && f3 !== s2 || (b(y3), y3.node = null), this.__state === a2 || f3 === a2) return A2.root;
                if ((o3 = y3.node) && (r3.push(g2), n3.push(y3), this.__state !== i2 && f3 !== i2)) {
                    if (u3 = o3.type || y3.wrap, !(x2 = this.__keys[u3])) {
                        if (!this.__fallback) throw new Error("Unknown node type " + u3 + ".");
                        x2 = this.__fallback(o3);
                    }
                    for(d3 = x2.length; (d3 -= 1) >= 0;)if (v2 = o3[E = x2[d3]]) if (Array.isArray(v2)) {
                        for(m3 = v2.length; (m3 -= 1) >= 0;)if (v2[m3]) {
                            if (h2(u3, x2[d3])) y3 = new c2(v2[m3], [
                                E,
                                m3
                            ], "Property", new l2(v2, m3));
                            else {
                                if (!p2(v2[m3])) continue;
                                y3 = new c2(v2[m3], [
                                    E,
                                    m3
                                ], null, new l2(v2, m3));
                            }
                            r3.push(y3);
                        }
                    } else p2(v2) && r3.push(new c2(v2, E, null, new l2(o3, E)));
                }
            } else if (y3 = n3.pop(), void 0 !== (f3 = this.__execute(t4.leave, y3)) && f3 !== a2 && f3 !== i2 && f3 !== s2 && y3.ref.replace(f3), this.__state !== s2 && f3 !== s2 || b(y3), this.__state === a2 || f3 === a2) return A2.root;
            return A2.root;
        }, t3.Syntax = r2, t3.traverse = d2, t3.replace = function(e4, t4) {
            return new f2().replace(e4, t4);
        }, t3.attachComments = function(e4, t4, r3) {
            var o3, a3, i3, s3, l3 = [];
            if (!e4.range) throw new Error("attachComments needs range information");
            if (!r3.length) {
                if (t4.length) {
                    for(i3 = 0, a3 = t4.length; i3 < a3; i3 += 1)(o3 = u2(t4[i3])).extendedRange = [
                        0,
                        e4.range[0]
                    ], l3.push(o3);
                    e4.leadingComments = l3;
                }
                return e4;
            }
            for(i3 = 0, a3 = t4.length; i3 < a3; i3 += 1)l3.push(m2(u2(t4[i3]), r3));
            return s3 = 0, d2(e4, {
                enter: function(e5) {
                    for(var t5; s3 < l3.length && !((t5 = l3[s3]).extendedRange[1] > e5.range[0]);)t5.extendedRange[1] === e5.range[0] ? (e5.leadingComments || (e5.leadingComments = []), e5.leadingComments.push(t5), l3.splice(s3, 1)) : s3 += 1;
                    return s3 === l3.length ? n2.Break : l3[s3].extendedRange[0] > e5.range[1] ? n2.Skip : void 0;
                }
            }), s3 = 0, d2(e4, {
                leave: function(e5) {
                    for(var t5; s3 < l3.length && (t5 = l3[s3], !(e5.range[1] < t5.extendedRange[0]));)e5.range[1] === t5.extendedRange[0] ? (e5.trailingComments || (e5.trailingComments = []), e5.trailingComments.push(t5), l3.splice(s3, 1)) : s3 += 1;
                    return s3 === l3.length ? n2.Break : l3[s3].extendedRange[0] > e5.range[1] ? n2.Skip : void 0;
                }
            }), e4;
        }, t3.VisitorKeys = o2, t3.VisitorOption = n2, t3.Controller = f2, t3.cloneEnvironment = function() {
            return e3({});
        }, t3;
    }(t2);
}), s = a(function(e2) {
    e2.exports && (e2.exports = function() {
        function e3(t2, r2, n2, o2) {
            this.message = t2, this.expected = r2, this.found = n2, this.location = o2, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e3);
        }
        return function(e4, t2) {
            function r2() {
                this.constructor = e4;
            }
            r2.prototype = t2.prototype, e4.prototype = new r2();
        }(e3, Error), e3.buildMessage = function(e4, t2) {
            var r2 = {
                literal: function(e5) {
                    return '"' + o2(e5.text) + '"';
                },
                class: function(e5) {
                    var t3, r3 = "";
                    for(t3 = 0; t3 < e5.parts.length; t3++)r3 += e5.parts[t3] instanceof Array ? a2(e5.parts[t3][0]) + "-" + a2(e5.parts[t3][1]) : a2(e5.parts[t3]);
                    return "[" + (e5.inverted ? "^" : "") + r3 + "]";
                },
                any: function(e5) {
                    return "any character";
                },
                end: function(e5) {
                    return "end of input";
                },
                other: function(e5) {
                    return e5.description;
                }
            };
            function n2(e5) {
                return e5.charCodeAt(0).toString(16).toUpperCase();
            }
            function o2(e5) {
                return e5.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e6) {
                    return "\\x0" + n2(e6);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e6) {
                    return "\\x" + n2(e6);
                });
            }
            function a2(e5) {
                return e5.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e6) {
                    return "\\x0" + n2(e6);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e6) {
                    return "\\x" + n2(e6);
                });
            }
            return "Expected " + function(e5) {
                var t3, n3, o3, a3 = new Array(e5.length);
                for(t3 = 0; t3 < e5.length; t3++)a3[t3] = (o3 = e5[t3], r2[o3.type](o3));
                if (a3.sort(), a3.length > 0) {
                    for(t3 = 1, n3 = 1; t3 < a3.length; t3++)a3[t3 - 1] !== a3[t3] && (a3[n3] = a3[t3], n3++);
                    a3.length = n3;
                }
                switch(a3.length){
                    case 1:
                        return a3[0];
                    case 2:
                        return a3[0] + " or " + a3[1];
                    default:
                        return a3.slice(0, -1).join(", ") + ", or " + a3[a3.length - 1];
                }
            }(e4) + " but " + function(e5) {
                return e5 ? '"' + o2(e5) + '"' : "end of input";
            }(t2) + " found.";
        }, {
            SyntaxError: e3,
            parse: function(t2, r2) {
                r2 = void 0 !== r2 ? r2 : {};
                var n2, o2, a2, i2, s2 = {}, u2 = {
                    start: Ae
                }, l2 = Ae, c2 = de(" ", false), f2 = /^[^ [\],():#!=><~+.]/, p2 = me([
                    " ",
                    "[",
                    "]",
                    ",",
                    "(",
                    ")",
                    ":",
                    "#",
                    "!",
                    "=",
                    ">",
                    "<",
                    "~",
                    "+",
                    "."
                ], true, false), h2 = de(">", false), y2 = de("~", false), d2 = de("+", false), m2 = de(",", false), x2 = function(e4, t3) {
                    return [
                        e4
                    ].concat(t3.map(function(e5) {
                        return e5[3];
                    }));
                }, v2 = de("!", false), g2 = de("*", false), A2 = de("#", false), E = de("[", false), b = de("]", false), S = /^[><!]/, _ = me([
                    ">",
                    "<",
                    "!"
                ], false, false), C = de("=", false), P = function(e4) {
                    return (e4 || "") + "=";
                }, w = /^[><]/, k = me([
                    ">",
                    "<"
                ], false, false), D = de(".", false), I = function(e4, t3, r3) {
                    return {
                        type: "attribute",
                        name: e4,
                        operator: t3,
                        value: r3
                    };
                }, j = de('"', false), T = /^[^\\"]/, F = me([
                    "\\",
                    '"'
                ], true, false), R = de("\\", false), O = {
                    type: "any"
                }, L = function(e4, t3) {
                    return e4 + t3;
                }, M = function(e4) {
                    return {
                        type: "literal",
                        value: (t3 = e4.join(""), t3.replace(/\\(.)/g, function(e5, t4) {
                            switch(t4){
                                case "b":
                                    return "\b";
                                case "f":
                                    return "\f";
                                case "n":
                                    return "\n";
                                case "r":
                                    return "\r";
                                case "t":
                                    return "	";
                                case "v":
                                    return "\v";
                                default:
                                    return t4;
                            }
                        }))
                    };
                    //TURBOPACK unreachable
                    ;
                    var t3;
                }, B = de("'", false), U = /^[^\\']/, K = me([
                    "\\",
                    "'"
                ], true, false), N = /^[0-9]/, W = me([
                    [
                        "0",
                        "9"
                    ]
                ], false, false), V = de("type(", false), q = /^[^ )]/, G = me([
                    " ",
                    ")"
                ], true, false), z = de(")", false), H = /^[imsu]/, Y = me([
                    "i",
                    "m",
                    "s",
                    "u"
                ], false, false), $ = de("/", false), J = /^[^\]\\]/, Q = me([
                    "]",
                    "\\"
                ], true, false), X = /^[^\/\\[]/, Z = me([
                    "/",
                    "\\",
                    "["
                ], true, false), ee = de(":not(", false), te = de(":matches(", false), re = function(e4) {
                    return {
                        type: "matches",
                        selectors: e4
                    };
                }, ne = de(":is(", false), oe = de(":has(", false), ae = de(":first-child", false), ie = de(":last-child", false), se = de(":nth-child(", false), ue = de(":nth-last-child(", false), le = de(":", false), ce = 0, fe = [
                    {
                        line: 1,
                        column: 1
                    }
                ], pe = 0, he = [], ye = {};
                if ("startRule" in r2) {
                    if (!(r2.startRule in u2)) throw new Error(`Can't start parsing from rule "` + r2.startRule + '".');
                    l2 = u2[r2.startRule];
                }
                function de(e4, t3) {
                    return {
                        type: "literal",
                        text: e4,
                        ignoreCase: t3
                    };
                }
                function me(e4, t3, r3) {
                    return {
                        type: "class",
                        parts: e4,
                        inverted: t3,
                        ignoreCase: r3
                    };
                }
                function xe(e4) {
                    var r3, n3 = fe[e4];
                    if (n3) return n3;
                    for(r3 = e4 - 1; !fe[r3];)r3--;
                    for(n3 = {
                        line: (n3 = fe[r3]).line,
                        column: n3.column
                    }; r3 < e4;)10 === t2.charCodeAt(r3) ? (n3.line++, n3.column = 1) : n3.column++, r3++;
                    return fe[e4] = n3, n3;
                }
                function ve(e4, t3) {
                    var r3 = xe(e4), n3 = xe(t3);
                    return {
                        start: {
                            offset: e4,
                            line: r3.line,
                            column: r3.column
                        },
                        end: {
                            offset: t3,
                            line: n3.line,
                            column: n3.column
                        }
                    };
                }
                function ge(e4) {
                    ce < pe || (ce > pe && (pe = ce, he = []), he.push(e4));
                }
                function Ae() {
                    var e4, t3, r3, n3, o3 = 36 * ce + 0, a3 = ye[o3];
                    return a3 ? (ce = a3.nextPos, a3.result) : (e4 = ce, (t3 = Ee()) !== s2 && (r3 = _e()) !== s2 && Ee() !== s2 ? e4 = t3 = 1 === (n3 = r3).length ? n3[0] : {
                        type: "matches",
                        selectors: n3
                    } : (ce = e4, e4 = s2), e4 === s2 && (e4 = ce, (t3 = Ee()) !== s2 && (t3 = void 0), e4 = t3), ye[o3] = {
                        nextPos: ce,
                        result: e4
                    }, e4);
                }
                function Ee() {
                    var e4, r3, n3 = 36 * ce + 1, o3 = ye[n3];
                    if (o3) return ce = o3.nextPos, o3.result;
                    for(e4 = [], 32 === t2.charCodeAt(ce) ? (r3 = " ", ce++) : (r3 = s2, ge(c2)); r3 !== s2;)e4.push(r3), 32 === t2.charCodeAt(ce) ? (r3 = " ", ce++) : (r3 = s2, ge(c2));
                    return ye[n3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function be() {
                    var e4, r3, n3, o3 = 36 * ce + 2, a3 = ye[o3];
                    if (a3) return ce = a3.nextPos, a3.result;
                    if (r3 = [], f2.test(t2.charAt(ce)) ? (n3 = t2.charAt(ce), ce++) : (n3 = s2, ge(p2)), n3 !== s2) for(; n3 !== s2;)r3.push(n3), f2.test(t2.charAt(ce)) ? (n3 = t2.charAt(ce), ce++) : (n3 = s2, ge(p2));
                    else r3 = s2;
                    return r3 !== s2 && (r3 = r3.join("")), e4 = r3, ye[o3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function Se() {
                    var e4, r3, n3, o3 = 36 * ce + 3, a3 = ye[o3];
                    return a3 ? (ce = a3.nextPos, a3.result) : (e4 = ce, (r3 = Ee()) !== s2 ? (62 === t2.charCodeAt(ce) ? (n3 = ">", ce++) : (n3 = s2, ge(h2)), n3 !== s2 && Ee() !== s2 ? e4 = r3 = "child" : (ce = e4, e4 = s2)) : (ce = e4, e4 = s2), e4 === s2 && (e4 = ce, (r3 = Ee()) !== s2 ? (126 === t2.charCodeAt(ce) ? (n3 = "~", ce++) : (n3 = s2, ge(y2)), n3 !== s2 && Ee() !== s2 ? e4 = r3 = "sibling" : (ce = e4, e4 = s2)) : (ce = e4, e4 = s2), e4 === s2 && (e4 = ce, (r3 = Ee()) !== s2 ? (43 === t2.charCodeAt(ce) ? (n3 = "+", ce++) : (n3 = s2, ge(d2)), n3 !== s2 && Ee() !== s2 ? e4 = r3 = "adjacent" : (ce = e4, e4 = s2)) : (ce = e4, e4 = s2), e4 === s2 && (e4 = ce, 32 === t2.charCodeAt(ce) ? (r3 = " ", ce++) : (r3 = s2, ge(c2)), r3 !== s2 && (n3 = Ee()) !== s2 ? e4 = r3 = "descendant" : (ce = e4, e4 = s2)))), ye[o3] = {
                        nextPos: ce,
                        result: e4
                    }, e4);
                }
                function _e() {
                    var e4, r3, n3, o3, a3, i3, u3, l3, c3 = 36 * ce + 5, f3 = ye[c3];
                    if (f3) return ce = f3.nextPos, f3.result;
                    if (e4 = ce, (r3 = Pe()) !== s2) {
                        for(n3 = [], o3 = ce, (a3 = Ee()) !== s2 ? (44 === t2.charCodeAt(ce) ? (i3 = ",", ce++) : (i3 = s2, ge(m2)), i3 !== s2 && (u3 = Ee()) !== s2 && (l3 = Pe()) !== s2 ? o3 = a3 = [
                            a3,
                            i3,
                            u3,
                            l3
                        ] : (ce = o3, o3 = s2)) : (ce = o3, o3 = s2); o3 !== s2;)n3.push(o3), o3 = ce, (a3 = Ee()) !== s2 ? (44 === t2.charCodeAt(ce) ? (i3 = ",", ce++) : (i3 = s2, ge(m2)), i3 !== s2 && (u3 = Ee()) !== s2 && (l3 = Pe()) !== s2 ? o3 = a3 = [
                            a3,
                            i3,
                            u3,
                            l3
                        ] : (ce = o3, o3 = s2)) : (ce = o3, o3 = s2);
                        n3 !== s2 ? e4 = r3 = x2(r3, n3) : (ce = e4, e4 = s2);
                    } else ce = e4, e4 = s2;
                    return ye[c3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function Ce() {
                    var e4, t3, r3, n3, o3, a3 = 36 * ce + 6, i3 = ye[a3];
                    return i3 ? (ce = i3.nextPos, i3.result) : (e4 = ce, (t3 = Se()) === s2 && (t3 = null), t3 !== s2 && (r3 = Pe()) !== s2 ? (o3 = r3, e4 = t3 = (n3 = t3) ? {
                        type: n3,
                        left: {
                            type: "exactNode"
                        },
                        right: o3
                    } : o3) : (ce = e4, e4 = s2), ye[a3] = {
                        nextPos: ce,
                        result: e4
                    }, e4);
                }
                function Pe() {
                    var e4, t3, r3, n3, o3, a3, i3, u3 = 36 * ce + 7, l3 = ye[u3];
                    if (l3) return ce = l3.nextPos, l3.result;
                    if (e4 = ce, (t3 = we()) !== s2) {
                        for(r3 = [], n3 = ce, (o3 = Se()) !== s2 && (a3 = we()) !== s2 ? n3 = o3 = [
                            o3,
                            a3
                        ] : (ce = n3, n3 = s2); n3 !== s2;)r3.push(n3), n3 = ce, (o3 = Se()) !== s2 && (a3 = we()) !== s2 ? n3 = o3 = [
                            o3,
                            a3
                        ] : (ce = n3, n3 = s2);
                        r3 !== s2 ? (i3 = t3, e4 = t3 = r3.reduce(function(e5, t4) {
                            return {
                                type: t4[0],
                                left: e5,
                                right: t4[1]
                            };
                        }, i3)) : (ce = e4, e4 = s2);
                    } else ce = e4, e4 = s2;
                    return ye[u3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function we() {
                    var e4, r3, n3, o3, a3, i3, u3, l3 = 36 * ce + 8, c3 = ye[l3];
                    if (c3) return ce = c3.nextPos, c3.result;
                    if (e4 = ce, 33 === t2.charCodeAt(ce) ? (r3 = "!", ce++) : (r3 = s2, ge(v2)), r3 === s2 && (r3 = null), r3 !== s2) {
                        if (n3 = [], (o3 = ke()) !== s2) for(; o3 !== s2;)n3.push(o3), o3 = ke();
                        else n3 = s2;
                        n3 !== s2 ? (a3 = r3, u3 = 1 === (i3 = n3).length ? i3[0] : {
                            type: "compound",
                            selectors: i3
                        }, a3 && (u3.subject = true), e4 = r3 = u3) : (ce = e4, e4 = s2);
                    } else ce = e4, e4 = s2;
                    return ye[l3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function ke() {
                    var e4, r3 = 36 * ce + 9, n3 = ye[r3];
                    return n3 ? (ce = n3.nextPos, n3.result) : ((e4 = function() {
                        var e5, r4, n4 = 36 * ce + 10, o3 = ye[n4];
                        return o3 ? (ce = o3.nextPos, o3.result) : (42 === t2.charCodeAt(ce) ? (r4 = "*", ce++) : (r4 = s2, ge(g2)), r4 !== s2 && (r4 = {
                            type: "wildcard",
                            value: r4
                        }), e5 = r4, ye[n4] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3 = 36 * ce + 11, a3 = ye[o3];
                        return a3 ? (ce = a3.nextPos, a3.result) : (e5 = ce, 35 === t2.charCodeAt(ce) ? (r4 = "#", ce++) : (r4 = s2, ge(A2)), r4 === s2 && (r4 = null), r4 !== s2 && (n4 = be()) !== s2 ? e5 = r4 = {
                            type: "identifier",
                            value: n4
                        } : (ce = e5, e5 = s2), ye[o3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3 = 36 * ce + 12, i3 = ye[a3];
                        return i3 ? (ce = i3.nextPos, i3.result) : (e5 = ce, 91 === t2.charCodeAt(ce) ? (r4 = "[", ce++) : (r4 = s2, ge(E)), r4 !== s2 && Ee() !== s2 && (n4 = function() {
                            var e6, r5, n5, o4, a4 = 36 * ce + 16, i4 = ye[a4];
                            return i4 ? (ce = i4.nextPos, i4.result) : (e6 = ce, (r5 = De()) !== s2 && Ee() !== s2 && (n5 = function() {
                                var e7, r6, n6, o5 = 36 * ce + 14, a5 = ye[o5];
                                return a5 ? (ce = a5.nextPos, a5.result) : (e7 = ce, 33 === t2.charCodeAt(ce) ? (r6 = "!", ce++) : (r6 = s2, ge(v2)), r6 === s2 && (r6 = null), r6 !== s2 ? (61 === t2.charCodeAt(ce) ? (n6 = "=", ce++) : (n6 = s2, ge(C)), n6 !== s2 ? (r6 = P(r6), e7 = r6) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2), ye[o5] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7);
                            }()) !== s2 && Ee() !== s2 ? ((o4 = function() {
                                var e7, r6, n6, o5, a5, i5 = 36 * ce + 20, u3 = ye[i5];
                                if (u3) return ce = u3.nextPos, u3.result;
                                if (e7 = ce, "type(" === t2.substr(ce, 5) ? (r6 = "type(", ce += 5) : (r6 = s2, ge(V)), r6 !== s2) if (Ee() !== s2) {
                                    if (n6 = [], q.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(G)), o5 !== s2) for(; o5 !== s2;)n6.push(o5), q.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(G));
                                    else n6 = s2;
                                    n6 !== s2 && (o5 = Ee()) !== s2 ? (41 === t2.charCodeAt(ce) ? (a5 = ")", ce++) : (a5 = s2, ge(z)), a5 !== s2 ? (r6 = {
                                        type: "type",
                                        value: n6.join("")
                                    }, e7 = r6) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2);
                                } else ce = e7, e7 = s2;
                                else ce = e7, e7 = s2;
                                return ye[i5] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7;
                            }()) === s2 && (o4 = function() {
                                var e7, r6, n6, o5, a5, i5, u3 = 36 * ce + 22, l3 = ye[u3];
                                if (l3) return ce = l3.nextPos, l3.result;
                                if (e7 = ce, 47 === t2.charCodeAt(ce) ? (r6 = "/", ce++) : (r6 = s2, ge($)), r6 !== s2) {
                                    if (n6 = [], (o5 = Ie()) === s2 && (o5 = je()) === s2 && (o5 = Te()), o5 !== s2) for(; o5 !== s2;)n6.push(o5), (o5 = Ie()) === s2 && (o5 = je()) === s2 && (o5 = Te());
                                    else n6 = s2;
                                    n6 !== s2 ? (47 === t2.charCodeAt(ce) ? (o5 = "/", ce++) : (o5 = s2, ge($)), o5 !== s2 ? ((a5 = function() {
                                        var e8, r7, n7 = 36 * ce + 21, o6 = ye[n7];
                                        if (o6) return ce = o6.nextPos, o6.result;
                                        if (e8 = [], H.test(t2.charAt(ce)) ? (r7 = t2.charAt(ce), ce++) : (r7 = s2, ge(Y)), r7 !== s2) for(; r7 !== s2;)e8.push(r7), H.test(t2.charAt(ce)) ? (r7 = t2.charAt(ce), ce++) : (r7 = s2, ge(Y));
                                        else e8 = s2;
                                        return ye[n7] = {
                                            nextPos: ce,
                                            result: e8
                                        }, e8;
                                    }()) === s2 && (a5 = null), a5 !== s2 ? (i5 = a5, r6 = {
                                        type: "regexp",
                                        value: new RegExp(n6.join(""), i5 ? i5.join("") : "")
                                    }, e7 = r6) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2);
                                } else ce = e7, e7 = s2;
                                return ye[u3] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7;
                            }()), o4 !== s2 ? (r5 = I(r5, n5, o4), e6 = r5) : (ce = e6, e6 = s2)) : (ce = e6, e6 = s2), e6 === s2 && (e6 = ce, (r5 = De()) !== s2 && Ee() !== s2 && (n5 = function() {
                                var e7, r6, n6, o5 = 36 * ce + 13, a5 = ye[o5];
                                return a5 ? (ce = a5.nextPos, a5.result) : (e7 = ce, S.test(t2.charAt(ce)) ? (r6 = t2.charAt(ce), ce++) : (r6 = s2, ge(_)), r6 === s2 && (r6 = null), r6 !== s2 ? (61 === t2.charCodeAt(ce) ? (n6 = "=", ce++) : (n6 = s2, ge(C)), n6 !== s2 ? (r6 = P(r6), e7 = r6) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2), e7 === s2 && (w.test(t2.charAt(ce)) ? (e7 = t2.charAt(ce), ce++) : (e7 = s2, ge(k))), ye[o5] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7);
                            }()) !== s2 && Ee() !== s2 ? ((o4 = function() {
                                var e7, r6, n6, o5, a5, i5, u3 = 36 * ce + 17, l3 = ye[u3];
                                if (l3) return ce = l3.nextPos, l3.result;
                                if (e7 = ce, 34 === t2.charCodeAt(ce) ? (r6 = '"', ce++) : (r6 = s2, ge(j)), r6 !== s2) {
                                    for(n6 = [], T.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(F)), o5 === s2 && (o5 = ce, 92 === t2.charCodeAt(ce) ? (a5 = "\\", ce++) : (a5 = s2, ge(R)), a5 !== s2 ? (t2.length > ce ? (i5 = t2.charAt(ce), ce++) : (i5 = s2, ge(O)), i5 !== s2 ? (a5 = L(a5, i5), o5 = a5) : (ce = o5, o5 = s2)) : (ce = o5, o5 = s2)); o5 !== s2;)n6.push(o5), T.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(F)), o5 === s2 && (o5 = ce, 92 === t2.charCodeAt(ce) ? (a5 = "\\", ce++) : (a5 = s2, ge(R)), a5 !== s2 ? (t2.length > ce ? (i5 = t2.charAt(ce), ce++) : (i5 = s2, ge(O)), i5 !== s2 ? (a5 = L(a5, i5), o5 = a5) : (ce = o5, o5 = s2)) : (ce = o5, o5 = s2));
                                    n6 !== s2 ? (34 === t2.charCodeAt(ce) ? (o5 = '"', ce++) : (o5 = s2, ge(j)), o5 !== s2 ? (r6 = M(n6), e7 = r6) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2);
                                } else ce = e7, e7 = s2;
                                if (e7 === s2) if (e7 = ce, 39 === t2.charCodeAt(ce) ? (r6 = "'", ce++) : (r6 = s2, ge(B)), r6 !== s2) {
                                    for(n6 = [], U.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(K)), o5 === s2 && (o5 = ce, 92 === t2.charCodeAt(ce) ? (a5 = "\\", ce++) : (a5 = s2, ge(R)), a5 !== s2 ? (t2.length > ce ? (i5 = t2.charAt(ce), ce++) : (i5 = s2, ge(O)), i5 !== s2 ? (a5 = L(a5, i5), o5 = a5) : (ce = o5, o5 = s2)) : (ce = o5, o5 = s2)); o5 !== s2;)n6.push(o5), U.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(K)), o5 === s2 && (o5 = ce, 92 === t2.charCodeAt(ce) ? (a5 = "\\", ce++) : (a5 = s2, ge(R)), a5 !== s2 ? (t2.length > ce ? (i5 = t2.charAt(ce), ce++) : (i5 = s2, ge(O)), i5 !== s2 ? (a5 = L(a5, i5), o5 = a5) : (ce = o5, o5 = s2)) : (ce = o5, o5 = s2));
                                    n6 !== s2 ? (39 === t2.charCodeAt(ce) ? (o5 = "'", ce++) : (o5 = s2, ge(B)), o5 !== s2 ? (r6 = M(n6), e7 = r6) : (ce = e7, e7 = s2)) : (ce = e7, e7 = s2);
                                } else ce = e7, e7 = s2;
                                return ye[u3] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7;
                            }()) === s2 && (o4 = function() {
                                var e7, r6, n6, o5, a5, i5, u3, l3 = 36 * ce + 18, c3 = ye[l3];
                                if (c3) return ce = c3.nextPos, c3.result;
                                for(e7 = ce, r6 = ce, n6 = [], N.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(W)); o5 !== s2;)n6.push(o5), N.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(W));
                                if (n6 !== s2 ? (46 === t2.charCodeAt(ce) ? (o5 = ".", ce++) : (o5 = s2, ge(D)), o5 !== s2 ? r6 = n6 = [
                                    n6,
                                    o5
                                ] : (ce = r6, r6 = s2)) : (ce = r6, r6 = s2), r6 === s2 && (r6 = null), r6 !== s2) {
                                    if (n6 = [], N.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(W)), o5 !== s2) for(; o5 !== s2;)n6.push(o5), N.test(t2.charAt(ce)) ? (o5 = t2.charAt(ce), ce++) : (o5 = s2, ge(W));
                                    else n6 = s2;
                                    n6 !== s2 ? (i5 = n6, u3 = (a5 = r6) ? [].concat.apply([], a5).join("") : "", r6 = {
                                        type: "literal",
                                        value: parseFloat(u3 + i5.join(""))
                                    }, e7 = r6) : (ce = e7, e7 = s2);
                                } else ce = e7, e7 = s2;
                                return ye[l3] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7;
                            }()) === s2 && (o4 = function() {
                                var e7, t3, r6 = 36 * ce + 19, n6 = ye[r6];
                                return n6 ? (ce = n6.nextPos, n6.result) : ((t3 = be()) !== s2 && (t3 = {
                                    type: "literal",
                                    value: t3
                                }), e7 = t3, ye[r6] = {
                                    nextPos: ce,
                                    result: e7
                                }, e7);
                            }()), o4 !== s2 ? (r5 = I(r5, n5, o4), e6 = r5) : (ce = e6, e6 = s2)) : (ce = e6, e6 = s2), e6 === s2 && (e6 = ce, (r5 = De()) !== s2 && (r5 = {
                                type: "attribute",
                                name: r5
                            }), e6 = r5)), ye[a4] = {
                                nextPos: ce,
                                result: e6
                            }, e6);
                        }()) !== s2 && Ee() !== s2 ? (93 === t2.charCodeAt(ce) ? (o3 = "]", ce++) : (o3 = s2, ge(b)), o3 !== s2 ? e5 = r4 = n4 : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2), ye[a3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3, i3, u3, l3, c3 = 36 * ce + 26, f3 = ye[c3];
                        if (f3) return ce = f3.nextPos, f3.result;
                        if (e5 = ce, 46 === t2.charCodeAt(ce) ? (r4 = ".", ce++) : (r4 = s2, ge(D)), r4 !== s2) if ((n4 = be()) !== s2) {
                            for(o3 = [], a3 = ce, 46 === t2.charCodeAt(ce) ? (i3 = ".", ce++) : (i3 = s2, ge(D)), i3 !== s2 && (u3 = be()) !== s2 ? a3 = i3 = [
                                i3,
                                u3
                            ] : (ce = a3, a3 = s2); a3 !== s2;)o3.push(a3), a3 = ce, 46 === t2.charCodeAt(ce) ? (i3 = ".", ce++) : (i3 = s2, ge(D)), i3 !== s2 && (u3 = be()) !== s2 ? a3 = i3 = [
                                i3,
                                u3
                            ] : (ce = a3, a3 = s2);
                            o3 !== s2 ? (l3 = n4, r4 = {
                                type: "field",
                                name: o3.reduce(function(e6, t3) {
                                    return e6 + t3[0] + t3[1];
                                }, l3)
                            }, e5 = r4) : (ce = e5, e5 = s2);
                        } else ce = e5, e5 = s2;
                        else ce = e5, e5 = s2;
                        return ye[c3] = {
                            nextPos: ce,
                            result: e5
                        }, e5;
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3 = 36 * ce + 27, i3 = ye[a3];
                        return i3 ? (ce = i3.nextPos, i3.result) : (e5 = ce, ":not(" === t2.substr(ce, 5) ? (r4 = ":not(", ce += 5) : (r4 = s2, ge(ee)), r4 !== s2 && Ee() !== s2 && (n4 = _e()) !== s2 && Ee() !== s2 ? (41 === t2.charCodeAt(ce) ? (o3 = ")", ce++) : (o3 = s2, ge(z)), o3 !== s2 ? e5 = r4 = {
                            type: "not",
                            selectors: n4
                        } : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2), ye[a3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3 = 36 * ce + 28, i3 = ye[a3];
                        return i3 ? (ce = i3.nextPos, i3.result) : (e5 = ce, ":matches(" === t2.substr(ce, 9) ? (r4 = ":matches(", ce += 9) : (r4 = s2, ge(te)), r4 !== s2 && Ee() !== s2 && (n4 = _e()) !== s2 && Ee() !== s2 ? (41 === t2.charCodeAt(ce) ? (o3 = ")", ce++) : (o3 = s2, ge(z)), o3 !== s2 ? (r4 = re(n4), e5 = r4) : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2), ye[a3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3 = 36 * ce + 29, i3 = ye[a3];
                        return i3 ? (ce = i3.nextPos, i3.result) : (e5 = ce, ":is(" === t2.substr(ce, 4) ? (r4 = ":is(", ce += 4) : (r4 = s2, ge(ne)), r4 !== s2 && Ee() !== s2 && (n4 = _e()) !== s2 && Ee() !== s2 ? (41 === t2.charCodeAt(ce) ? (o3 = ")", ce++) : (o3 = s2, ge(z)), o3 !== s2 ? (r4 = re(n4), e5 = r4) : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2), ye[a3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3 = 36 * ce + 30, i3 = ye[a3];
                        return i3 ? (ce = i3.nextPos, i3.result) : (e5 = ce, ":has(" === t2.substr(ce, 5) ? (r4 = ":has(", ce += 5) : (r4 = s2, ge(oe)), r4 !== s2 && Ee() !== s2 && (n4 = function() {
                            var e6, r5, n5, o4, a4, i4, u3, l3, c3 = 36 * ce + 4, f3 = ye[c3];
                            if (f3) return ce = f3.nextPos, f3.result;
                            if (e6 = ce, (r5 = Ce()) !== s2) {
                                for(n5 = [], o4 = ce, (a4 = Ee()) !== s2 ? (44 === t2.charCodeAt(ce) ? (i4 = ",", ce++) : (i4 = s2, ge(m2)), i4 !== s2 && (u3 = Ee()) !== s2 && (l3 = Ce()) !== s2 ? o4 = a4 = [
                                    a4,
                                    i4,
                                    u3,
                                    l3
                                ] : (ce = o4, o4 = s2)) : (ce = o4, o4 = s2); o4 !== s2;)n5.push(o4), o4 = ce, (a4 = Ee()) !== s2 ? (44 === t2.charCodeAt(ce) ? (i4 = ",", ce++) : (i4 = s2, ge(m2)), i4 !== s2 && (u3 = Ee()) !== s2 && (l3 = Ce()) !== s2 ? o4 = a4 = [
                                    a4,
                                    i4,
                                    u3,
                                    l3
                                ] : (ce = o4, o4 = s2)) : (ce = o4, o4 = s2);
                                n5 !== s2 ? e6 = r5 = x2(r5, n5) : (ce = e6, e6 = s2);
                            } else ce = e6, e6 = s2;
                            return ye[c3] = {
                                nextPos: ce,
                                result: e6
                            }, e6;
                        }()) !== s2 && Ee() !== s2 ? (41 === t2.charCodeAt(ce) ? (o3 = ")", ce++) : (o3 = s2, ge(z)), o3 !== s2 ? e5 = r4 = {
                            type: "has",
                            selectors: n4
                        } : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2), ye[a3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4 = 36 * ce + 31, o3 = ye[n4];
                        return o3 ? (ce = o3.nextPos, o3.result) : (":first-child" === t2.substr(ce, 12) ? (r4 = ":first-child", ce += 12) : (r4 = s2, ge(ae)), r4 !== s2 && (r4 = Fe(1)), e5 = r4, ye[n4] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4 = 36 * ce + 32, o3 = ye[n4];
                        return o3 ? (ce = o3.nextPos, o3.result) : (":last-child" === t2.substr(ce, 11) ? (r4 = ":last-child", ce += 11) : (r4 = s2, ge(ie)), r4 !== s2 && (r4 = Re(1)), e5 = r4, ye[n4] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3, i3 = 36 * ce + 33, u3 = ye[i3];
                        if (u3) return ce = u3.nextPos, u3.result;
                        if (e5 = ce, ":nth-child(" === t2.substr(ce, 11) ? (r4 = ":nth-child(", ce += 11) : (r4 = s2, ge(se)), r4 !== s2) if (Ee() !== s2) {
                            if (n4 = [], N.test(t2.charAt(ce)) ? (o3 = t2.charAt(ce), ce++) : (o3 = s2, ge(W)), o3 !== s2) for(; o3 !== s2;)n4.push(o3), N.test(t2.charAt(ce)) ? (o3 = t2.charAt(ce), ce++) : (o3 = s2, ge(W));
                            else n4 = s2;
                            n4 !== s2 && (o3 = Ee()) !== s2 ? (41 === t2.charCodeAt(ce) ? (a3 = ")", ce++) : (a3 = s2, ge(z)), a3 !== s2 ? (r4 = Fe(parseInt(n4.join(""), 10)), e5 = r4) : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2);
                        } else ce = e5, e5 = s2;
                        else ce = e5, e5 = s2;
                        return ye[i3] = {
                            nextPos: ce,
                            result: e5
                        }, e5;
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3, a3, i3 = 36 * ce + 34, u3 = ye[i3];
                        if (u3) return ce = u3.nextPos, u3.result;
                        if (e5 = ce, ":nth-last-child(" === t2.substr(ce, 16) ? (r4 = ":nth-last-child(", ce += 16) : (r4 = s2, ge(ue)), r4 !== s2) if (Ee() !== s2) {
                            if (n4 = [], N.test(t2.charAt(ce)) ? (o3 = t2.charAt(ce), ce++) : (o3 = s2, ge(W)), o3 !== s2) for(; o3 !== s2;)n4.push(o3), N.test(t2.charAt(ce)) ? (o3 = t2.charAt(ce), ce++) : (o3 = s2, ge(W));
                            else n4 = s2;
                            n4 !== s2 && (o3 = Ee()) !== s2 ? (41 === t2.charCodeAt(ce) ? (a3 = ")", ce++) : (a3 = s2, ge(z)), a3 !== s2 ? (r4 = Re(parseInt(n4.join(""), 10)), e5 = r4) : (ce = e5, e5 = s2)) : (ce = e5, e5 = s2);
                        } else ce = e5, e5 = s2;
                        else ce = e5, e5 = s2;
                        return ye[i3] = {
                            nextPos: ce,
                            result: e5
                        }, e5;
                    }()) === s2 && (e4 = function() {
                        var e5, r4, n4, o3 = 36 * ce + 35, a3 = ye[o3];
                        return a3 ? (ce = a3.nextPos, a3.result) : (e5 = ce, 58 === t2.charCodeAt(ce) ? (r4 = ":", ce++) : (r4 = s2, ge(le)), r4 !== s2 && (n4 = be()) !== s2 ? e5 = r4 = {
                            type: "class",
                            name: n4
                        } : (ce = e5, e5 = s2), ye[o3] = {
                            nextPos: ce,
                            result: e5
                        }, e5);
                    }()), ye[r3] = {
                        nextPos: ce,
                        result: e4
                    }, e4);
                }
                function De() {
                    var e4, r3, n3, o3, a3, i3, u3, l3, c3 = 36 * ce + 15, f3 = ye[c3];
                    if (f3) return ce = f3.nextPos, f3.result;
                    if (e4 = ce, (r3 = be()) !== s2) {
                        for(n3 = [], o3 = ce, 46 === t2.charCodeAt(ce) ? (a3 = ".", ce++) : (a3 = s2, ge(D)), a3 !== s2 && (i3 = be()) !== s2 ? o3 = a3 = [
                            a3,
                            i3
                        ] : (ce = o3, o3 = s2); o3 !== s2;)n3.push(o3), o3 = ce, 46 === t2.charCodeAt(ce) ? (a3 = ".", ce++) : (a3 = s2, ge(D)), a3 !== s2 && (i3 = be()) !== s2 ? o3 = a3 = [
                            a3,
                            i3
                        ] : (ce = o3, o3 = s2);
                        n3 !== s2 ? (u3 = r3, l3 = n3, e4 = r3 = [].concat.apply([
                            u3
                        ], l3).join("")) : (ce = e4, e4 = s2);
                    } else ce = e4, e4 = s2;
                    return ye[c3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function Ie() {
                    var e4, r3, n3, o3, a3 = 36 * ce + 23, i3 = ye[a3];
                    if (i3) return ce = i3.nextPos, i3.result;
                    if (e4 = ce, 91 === t2.charCodeAt(ce) ? (r3 = "[", ce++) : (r3 = s2, ge(E)), r3 !== s2) {
                        if (n3 = [], J.test(t2.charAt(ce)) ? (o3 = t2.charAt(ce), ce++) : (o3 = s2, ge(Q)), o3 === s2 && (o3 = je()), o3 !== s2) for(; o3 !== s2;)n3.push(o3), J.test(t2.charAt(ce)) ? (o3 = t2.charAt(ce), ce++) : (o3 = s2, ge(Q)), o3 === s2 && (o3 = je());
                        else n3 = s2;
                        n3 !== s2 ? (93 === t2.charCodeAt(ce) ? (o3 = "]", ce++) : (o3 = s2, ge(b)), o3 !== s2 ? e4 = r3 = "[" + n3.join("") + "]" : (ce = e4, e4 = s2)) : (ce = e4, e4 = s2);
                    } else ce = e4, e4 = s2;
                    return ye[a3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function je() {
                    var e4, r3, n3, o3 = 36 * ce + 24, a3 = ye[o3];
                    return a3 ? (ce = a3.nextPos, a3.result) : (e4 = ce, 92 === t2.charCodeAt(ce) ? (r3 = "\\", ce++) : (r3 = s2, ge(R)), r3 !== s2 ? (t2.length > ce ? (n3 = t2.charAt(ce), ce++) : (n3 = s2, ge(O)), n3 !== s2 ? e4 = r3 = "\\" + n3 : (ce = e4, e4 = s2)) : (ce = e4, e4 = s2), ye[o3] = {
                        nextPos: ce,
                        result: e4
                    }, e4);
                }
                function Te() {
                    var e4, r3, n3, o3 = 36 * ce + 25, a3 = ye[o3];
                    if (a3) return ce = a3.nextPos, a3.result;
                    if (r3 = [], X.test(t2.charAt(ce)) ? (n3 = t2.charAt(ce), ce++) : (n3 = s2, ge(Z)), n3 !== s2) for(; n3 !== s2;)r3.push(n3), X.test(t2.charAt(ce)) ? (n3 = t2.charAt(ce), ce++) : (n3 = s2, ge(Z));
                    else r3 = s2;
                    return r3 !== s2 && (r3 = r3.join("")), e4 = r3, ye[o3] = {
                        nextPos: ce,
                        result: e4
                    }, e4;
                }
                function Fe(e4) {
                    return {
                        type: "nth-child",
                        index: {
                            type: "literal",
                            value: e4
                        }
                    };
                }
                function Re(e4) {
                    return {
                        type: "nth-last-child",
                        index: {
                            type: "literal",
                            value: e4
                        }
                    };
                }
                if ((n2 = l2()) !== s2 && ce === t2.length) return n2;
                throw n2 !== s2 && ce < t2.length && ge({
                    type: "end"
                }), o2 = he, a2 = pe < t2.length ? t2.charAt(pe) : null, i2 = pe < t2.length ? ve(pe, pe + 1) : ve(pe, pe), new e3(e3.buildMessage(o2, a2), o2, a2, i2);
            }
        };
    }());
});
function u(e2, t2) {
    for(var r2 = 0; r2 < t2.length; ++r2){
        if (null == e2) return e2;
        e2 = e2[t2[r2]];
    }
    return e2;
}
var l = "function" == typeof WeakMap ? /* @__PURE__ */ new WeakMap() : null;
function c(e2) {
    if (null == e2) return function() {
        return true;
    };
    if (null != l) {
        var t2 = l.get(e2);
        return null != t2 || (t2 = f(e2), l.set(e2, t2)), t2;
    }
    return f(e2);
}
function f(e2) {
    switch(e2.type){
        case "wildcard":
            return function() {
                return true;
            };
        case "identifier":
            var t2 = e2.value.toLowerCase();
            return function(e3, r3, n2) {
                var o3 = n2 && n2.nodeTypeKey || "type";
                return t2 === e3[o3].toLowerCase();
            };
        case "exactNode":
            return function(e3, t3) {
                return 0 === t3.length;
            };
        case "field":
            var r2 = e2.name.split(".");
            return function(e3, t3) {
                return function e4(t4, r3, n2, o3) {
                    for(var a3 = r3, i2 = o3; i2 < n2.length; ++i2){
                        if (null == a3) return false;
                        var s3 = a3[n2[i2]];
                        if (Array.isArray(s3)) {
                            for(var u2 = 0; u2 < s3.length; ++u2)if (e4(t4, s3[u2], n2, i2 + 1)) return true;
                            return false;
                        }
                        a3 = s3;
                    }
                    return t4 === a3;
                }(e3, t3[r2.length - 1], r2, 0);
            };
        case "matches":
            var o2 = e2.selectors.map(c);
            return function(e3, t3, r3) {
                for(var n2 = 0; n2 < o2.length; ++n2)if (o2[n2](e3, t3, r3)) return true;
                return false;
            };
        case "compound":
            var a2 = e2.selectors.map(c);
            return function(e3, t3, r3) {
                for(var n2 = 0; n2 < a2.length; ++n2)if (!a2[n2](e3, t3, r3)) return false;
                return true;
            };
        case "not":
            var s2 = e2.selectors.map(c);
            return function(e3, t3, r3) {
                for(var n2 = 0; n2 < s2.length; ++n2)if (s2[n2](e3, t3, r3)) return false;
                return true;
            };
        case "has":
            var l2 = e2.selectors.map(c);
            return function(e3, t3, r3) {
                var n2 = false, o3 = [];
                return i.traverse(e3, {
                    enter: function(e4, t4) {
                        null != t4 && o3.unshift(t4);
                        for(var a3 = 0; a3 < l2.length; ++a3)if (l2[a3](e4, o3, r3)) return n2 = true, void this.break();
                    },
                    leave: function() {
                        o3.shift();
                    },
                    keys: r3 && r3.visitorKeys,
                    fallback: r3 && r3.fallback || "iteration"
                }), n2;
            };
        case "child":
            var f2 = c(e2.left), p2 = c(e2.right);
            return function(e3, t3, r3) {
                return !!(t3.length > 0 && p2(e3, t3, r3)) && f2(t3[0], t3.slice(1), r3);
            };
        case "descendant":
            var h2 = c(e2.left), x2 = c(e2.right);
            return function(e3, t3, r3) {
                if (x2(e3, t3, r3)) {
                    for(var n2 = 0, o3 = t3.length; n2 < o3; ++n2)if (h2(t3[n2], t3.slice(n2 + 1), r3)) return true;
                }
                return false;
            };
        case "attribute":
            var v2 = e2.name.split(".");
            switch(e2.operator){
                case void 0:
                    return function(e3) {
                        return null != u(e3, v2);
                    };
                case "=":
                    switch(e2.value.type){
                        case "regexp":
                            return function(t3) {
                                var r3 = u(t3, v2);
                                return "string" == typeof r3 && e2.value.value.test(r3);
                            };
                        case "literal":
                            var g2 = "".concat(e2.value.value);
                            return function(e3) {
                                return g2 === "".concat(u(e3, v2));
                            };
                        case "type":
                            return function(t3) {
                                return e2.value.value === n(u(t3, v2));
                            };
                    }
                    throw new Error("Unknown selector value type: ".concat(e2.value.type));
                case "!=":
                    switch(e2.value.type){
                        case "regexp":
                            return function(t3) {
                                return !e2.value.value.test(u(t3, v2));
                            };
                        case "literal":
                            var A2 = "".concat(e2.value.value);
                            return function(e3) {
                                return A2 !== "".concat(u(e3, v2));
                            };
                        case "type":
                            return function(t3) {
                                return e2.value.value !== n(u(t3, v2));
                            };
                    }
                    throw new Error("Unknown selector value type: ".concat(e2.value.type));
                case "<=":
                    return function(t3) {
                        return u(t3, v2) <= e2.value.value;
                    };
                case "<":
                    return function(t3) {
                        return u(t3, v2) < e2.value.value;
                    };
                case ">":
                    return function(t3) {
                        return u(t3, v2) > e2.value.value;
                    };
                case ">=":
                    return function(t3) {
                        return u(t3, v2) >= e2.value.value;
                    };
            }
            throw new Error("Unknown operator: ".concat(e2.operator));
        case "sibling":
            var E = c(e2.left), b = c(e2.right);
            return function(t3, r3, n2) {
                return b(t3, r3, n2) && y(t3, E, r3, "LEFT_SIDE", n2) || e2.left.subject && E(t3, r3, n2) && y(t3, b, r3, "RIGHT_SIDE", n2);
            };
        case "adjacent":
            var S = c(e2.left), _ = c(e2.right);
            return function(t3, r3, n2) {
                return _(t3, r3, n2) && d(t3, S, r3, "LEFT_SIDE", n2) || e2.right.subject && S(t3, r3, n2) && d(t3, _, r3, "RIGHT_SIDE", n2);
            };
        case "nth-child":
            var C = e2.index.value, P = c(e2.right);
            return function(e3, t3, r3) {
                return P(e3, t3, r3) && m(e3, t3, C, r3);
            };
        case "nth-last-child":
            var w = -e2.index.value, k = c(e2.right);
            return function(e3, t3, r3) {
                return k(e3, t3, r3) && m(e3, t3, w, r3);
            };
        case "class":
            var D = e2.name.toLowerCase();
            return function(t3, r3, n2) {
                if (n2 && n2.matchClass) return n2.matchClass(e2.name, t3, r3);
                if (n2 && n2.nodeTypeKey) return false;
                switch(D){
                    case "statement":
                        if ("Statement" === t3.type.slice(-9)) return true;
                    case "declaration":
                        return "Declaration" === t3.type.slice(-11);
                    case "pattern":
                        if ("Pattern" === t3.type.slice(-7)) return true;
                    case "expression":
                        return "Expression" === t3.type.slice(-10) || "Literal" === t3.type.slice(-7) || "Identifier" === t3.type && (0 === r3.length || "MetaProperty" !== r3[0].type) || "MetaProperty" === t3.type;
                    case "function":
                        return "FunctionDeclaration" === t3.type || "FunctionExpression" === t3.type || "ArrowFunctionExpression" === t3.type;
                }
                throw new Error("Unknown class name: ".concat(e2.name));
            };
    }
    throw new Error("Unknown selector type: ".concat(e2.type));
}
function p(e2, t2) {
    var r2 = t2 && t2.nodeTypeKey || "type", n2 = e2[r2];
    return t2 && t2.visitorKeys && t2.visitorKeys[n2] ? t2.visitorKeys[n2] : i.VisitorKeys[n2] ? i.VisitorKeys[n2] : t2 && "function" == typeof t2.fallback ? t2.fallback(e2) : Object.keys(e2).filter(function(e3) {
        return e3 !== r2;
    });
}
function h(e2, t2) {
    var r2 = t2 && t2.nodeTypeKey || "type";
    return null !== e2 && "object" === n(e2) && "string" == typeof e2[r2];
}
function y(e2, r2, n2, o2, a2) {
    var i2 = t(n2, 1)[0];
    if (!i2) return false;
    for(var s2 = p(i2, a2), u2 = 0; u2 < s2.length; ++u2){
        var l2 = i2[s2[u2]];
        if (Array.isArray(l2)) {
            var c2 = l2.indexOf(e2);
            if (c2 < 0) continue;
            var f2 = void 0, y2 = void 0;
            "LEFT_SIDE" === o2 ? (f2 = 0, y2 = c2) : (f2 = c2 + 1, y2 = l2.length);
            for(var d2 = f2; d2 < y2; ++d2)if (h(l2[d2], a2) && r2(l2[d2], n2, a2)) return true;
        }
    }
    return false;
}
function d(e2, r2, n2, o2, a2) {
    var i2 = t(n2, 1)[0];
    if (!i2) return false;
    for(var s2 = p(i2, a2), u2 = 0; u2 < s2.length; ++u2){
        var l2 = i2[s2[u2]];
        if (Array.isArray(l2)) {
            var c2 = l2.indexOf(e2);
            if (c2 < 0) continue;
            if ("LEFT_SIDE" === o2 && c2 > 0 && h(l2[c2 - 1], a2) && r2(l2[c2 - 1], n2, a2)) return true;
            if ("RIGHT_SIDE" === o2 && c2 < l2.length - 1 && h(l2[c2 + 1], a2) && r2(l2[c2 + 1], n2, a2)) return true;
        }
    }
    return false;
}
function m(e2, r2, n2, o2) {
    if (0 === n2) return false;
    var a2 = t(r2, 1)[0];
    if (!a2) return false;
    for(var i2 = p(a2, o2), s2 = 0; s2 < i2.length; ++s2){
        var u2 = a2[i2[s2]];
        if (Array.isArray(u2)) {
            var l2 = n2 < 0 ? u2.length + n2 : n2 - 1;
            if (l2 >= 0 && l2 < u2.length && u2[l2] === e2) return true;
        }
    }
    return false;
}
function x(e2, t2, o2, a2) {
    if (t2) {
        var s2 = [], u2 = c(t2), l2 = (function e3(t3, o3) {
            if (null == t3 || "object" != n(t3)) return [];
            null == o3 && (o3 = t3);
            for(var a3 = t3.subject ? [
                o3
            ] : [], i2 = Object.keys(t3), s3 = 0; s3 < i2.length; ++s3){
                var u3 = i2[s3], l3 = t3[u3];
                a3.push.apply(a3, r(e3(l3, "left" === u3 ? l3 : o3)));
            }
            return a3;
        })(t2).map(c);
        i.traverse(e2, {
            enter: function(e3, t3) {
                if (null != t3 && s2.unshift(t3), u2(e3, s2, a2)) if (l2.length) for(var r2 = 0, n2 = l2.length; r2 < n2; ++r2){
                    l2[r2](e3, s2, a2) && o2(e3, t3, s2);
                    for(var i2 = 0, c2 = s2.length; i2 < c2; ++i2){
                        var f2 = s2.slice(i2 + 1);
                        l2[r2](s2[i2], f2, a2) && o2(s2[i2], t3, f2);
                    }
                }
                else o2(e3, t3, s2);
            },
            leave: function() {
                s2.shift();
            },
            keys: a2 && a2.visitorKeys,
            fallback: a2 && a2.fallback || "iteration"
        });
    }
}
function v(e2, t2, r2) {
    var n2 = [];
    return x(e2, t2, function(e3) {
        n2.push(e3);
    }, r2), n2;
}
function g(e2) {
    return s.parse(e2);
}
function A(e2, t2, r2) {
    return v(e2, g(t2), r2);
}
A.parse = g, A.match = v, A.traverse = x, A.matches = function(e2, t2, r2, n2) {
    return !t2 || !!e2 && (r2 || (r2 = []), c(t2)(e2, r2, n2));
}, A.query = A;
exports.default = A; //# sourceMappingURL=esquery.esm.min.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/meriyah/dist/meriyah2.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const meriyah = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/meriyah.js [instrumentation] (ecmascript)");
const unicodeLookup = ((compressed, lookup)=>{
    const result = new Uint32Array(69632);
    let index = 0;
    let subIndex = 0;
    while(index < 2571){
        const inst = compressed[index++];
        if (inst < 0) {
            subIndex -= inst;
        } else {
            let code = compressed[index++];
            if (inst & 2) code = lookup[code];
            if (inst & 1) {
                result.fill(code, subIndex, subIndex += compressed[index++]);
            } else {
                result[subIndex++] = code;
            }
        }
    }
    return result;
})([
    -1,
    2,
    26,
    2,
    27,
    2,
    5,
    -1,
    0,
    77595648,
    3,
    44,
    2,
    3,
    0,
    14,
    2,
    63,
    2,
    64,
    3,
    0,
    3,
    0,
    3168796671,
    0,
    4294956992,
    2,
    1,
    2,
    0,
    2,
    41,
    3,
    0,
    4,
    0,
    4294966523,
    3,
    0,
    4,
    2,
    16,
    2,
    65,
    2,
    0,
    0,
    4294836735,
    0,
    3221225471,
    0,
    4294901942,
    2,
    66,
    0,
    134152192,
    3,
    0,
    2,
    0,
    4294951935,
    3,
    0,
    2,
    0,
    2683305983,
    0,
    2684354047,
    2,
    18,
    2,
    0,
    0,
    4294961151,
    3,
    0,
    2,
    2,
    19,
    2,
    0,
    0,
    608174079,
    2,
    0,
    2,
    60,
    2,
    7,
    2,
    6,
    0,
    4286611199,
    3,
    0,
    2,
    2,
    1,
    3,
    0,
    3,
    0,
    4294901711,
    2,
    40,
    0,
    4089839103,
    0,
    2961209759,
    0,
    1342439375,
    0,
    4294543342,
    0,
    3547201023,
    0,
    1577204103,
    0,
    4194240,
    0,
    4294688750,
    2,
    2,
    0,
    80831,
    0,
    4261478351,
    0,
    4294549486,
    2,
    2,
    0,
    2967484831,
    0,
    196559,
    0,
    3594373100,
    0,
    3288319768,
    0,
    8469959,
    0,
    65472,
    2,
    3,
    0,
    4093640191,
    0,
    660618719,
    0,
    65487,
    0,
    4294828015,
    0,
    4092591615,
    0,
    1616920031,
    0,
    982991,
    2,
    3,
    2,
    0,
    0,
    2163244511,
    0,
    4227923919,
    0,
    4236247022,
    2,
    71,
    0,
    4284449919,
    0,
    851904,
    2,
    4,
    2,
    12,
    0,
    67076095,
    -1,
    2,
    72,
    0,
    1073741743,
    0,
    4093607775,
    -1,
    0,
    50331649,
    0,
    3265266687,
    2,
    33,
    0,
    4294844415,
    0,
    4278190047,
    2,
    20,
    2,
    137,
    -1,
    3,
    0,
    2,
    2,
    23,
    2,
    0,
    2,
    10,
    2,
    0,
    2,
    15,
    2,
    22,
    3,
    0,
    10,
    2,
    74,
    2,
    0,
    2,
    75,
    2,
    76,
    2,
    77,
    2,
    0,
    2,
    78,
    2,
    0,
    2,
    11,
    0,
    261632,
    2,
    25,
    3,
    0,
    2,
    2,
    13,
    2,
    4,
    3,
    0,
    18,
    2,
    79,
    2,
    5,
    3,
    0,
    2,
    2,
    80,
    0,
    2151677951,
    2,
    29,
    2,
    9,
    0,
    909311,
    3,
    0,
    2,
    0,
    814743551,
    2,
    49,
    0,
    67090432,
    3,
    0,
    2,
    2,
    42,
    2,
    0,
    2,
    6,
    2,
    0,
    2,
    30,
    2,
    8,
    0,
    268374015,
    2,
    110,
    2,
    51,
    2,
    0,
    2,
    81,
    0,
    134153215,
    -1,
    2,
    7,
    2,
    0,
    2,
    8,
    0,
    2684354559,
    0,
    67044351,
    0,
    3221160064,
    2,
    17,
    -1,
    3,
    0,
    2,
    2,
    53,
    0,
    1046528,
    3,
    0,
    3,
    2,
    9,
    2,
    0,
    2,
    54,
    0,
    4294960127,
    2,
    10,
    2,
    6,
    2,
    11,
    0,
    4294377472,
    2,
    12,
    3,
    0,
    16,
    2,
    13,
    2,
    0,
    2,
    82,
    2,
    10,
    2,
    0,
    2,
    83,
    2,
    84,
    2,
    85,
    0,
    12288,
    2,
    55,
    0,
    1048577,
    2,
    86,
    2,
    14,
    -1,
    2,
    14,
    0,
    131042,
    2,
    87,
    2,
    88,
    2,
    89,
    2,
    0,
    2,
    34,
    -83,
    3,
    0,
    7,
    0,
    1046559,
    2,
    0,
    2,
    15,
    2,
    0,
    0,
    2147516671,
    2,
    21,
    3,
    90,
    2,
    2,
    0,
    -16,
    2,
    91,
    0,
    524222462,
    2,
    4,
    2,
    0,
    0,
    4269801471,
    2,
    4,
    3,
    0,
    2,
    2,
    28,
    2,
    16,
    3,
    0,
    2,
    2,
    17,
    2,
    0,
    -1,
    2,
    18,
    -16,
    3,
    0,
    206,
    -2,
    3,
    0,
    692,
    2,
    73,
    -1,
    2,
    18,
    2,
    10,
    3,
    0,
    8,
    2,
    93,
    2,
    133,
    2,
    0,
    0,
    3220242431,
    3,
    0,
    3,
    2,
    19,
    2,
    94,
    2,
    95,
    3,
    0,
    2,
    2,
    96,
    2,
    0,
    2,
    97,
    2,
    46,
    2,
    0,
    0,
    4351,
    2,
    0,
    2,
    9,
    3,
    0,
    2,
    0,
    67043391,
    0,
    3909091327,
    2,
    0,
    2,
    24,
    2,
    9,
    2,
    20,
    3,
    0,
    2,
    0,
    67076097,
    2,
    8,
    2,
    0,
    2,
    21,
    0,
    67059711,
    0,
    4236247039,
    3,
    0,
    2,
    0,
    939524103,
    0,
    8191999,
    2,
    101,
    2,
    102,
    2,
    22,
    2,
    23,
    3,
    0,
    3,
    0,
    67057663,
    3,
    0,
    349,
    2,
    103,
    2,
    104,
    2,
    7,
    -264,
    3,
    0,
    11,
    2,
    24,
    3,
    0,
    2,
    2,
    32,
    -1,
    0,
    3774349439,
    2,
    105,
    2,
    106,
    3,
    0,
    2,
    2,
    19,
    2,
    107,
    3,
    0,
    10,
    2,
    10,
    2,
    18,
    2,
    0,
    2,
    47,
    2,
    0,
    2,
    31,
    2,
    108,
    2,
    25,
    0,
    1638399,
    0,
    57344,
    2,
    109,
    3,
    0,
    3,
    2,
    20,
    2,
    26,
    2,
    27,
    2,
    5,
    2,
    28,
    2,
    0,
    2,
    8,
    2,
    111,
    -1,
    2,
    112,
    2,
    113,
    2,
    114,
    -1,
    3,
    0,
    3,
    2,
    12,
    -2,
    2,
    0,
    2,
    29,
    -3,
    0,
    536870912,
    -4,
    2,
    20,
    2,
    0,
    2,
    36,
    0,
    1,
    2,
    0,
    2,
    67,
    2,
    6,
    2,
    12,
    2,
    10,
    2,
    0,
    2,
    115,
    -1,
    3,
    0,
    4,
    2,
    10,
    2,
    23,
    2,
    116,
    2,
    7,
    2,
    0,
    2,
    117,
    2,
    0,
    2,
    118,
    2,
    119,
    2,
    120,
    2,
    0,
    2,
    9,
    3,
    0,
    9,
    2,
    21,
    2,
    30,
    2,
    31,
    2,
    121,
    2,
    122,
    -2,
    2,
    123,
    2,
    124,
    2,
    30,
    2,
    21,
    2,
    8,
    -2,
    2,
    125,
    2,
    30,
    2,
    32,
    -2,
    2,
    0,
    2,
    39,
    -2,
    0,
    4277137519,
    0,
    2269118463,
    -1,
    3,
    20,
    2,
    -1,
    2,
    33,
    2,
    38,
    2,
    0,
    3,
    30,
    2,
    2,
    35,
    2,
    19,
    -3,
    3,
    0,
    2,
    2,
    34,
    -1,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    48,
    2,
    0,
    0,
    4294950463,
    2,
    37,
    -7,
    2,
    0,
    0,
    203775,
    2,
    57,
    0,
    4026531840,
    2,
    20,
    2,
    43,
    2,
    36,
    2,
    18,
    2,
    37,
    2,
    18,
    2,
    126,
    2,
    21,
    3,
    0,
    2,
    2,
    38,
    0,
    2151677888,
    2,
    0,
    2,
    12,
    0,
    4294901764,
    2,
    144,
    2,
    0,
    2,
    58,
    2,
    56,
    0,
    5242879,
    3,
    0,
    2,
    0,
    402644511,
    -1,
    2,
    128,
    2,
    39,
    0,
    3,
    -1,
    2,
    129,
    2,
    130,
    2,
    0,
    0,
    67045375,
    2,
    40,
    0,
    4226678271,
    0,
    3766565279,
    0,
    2039759,
    2,
    132,
    2,
    41,
    0,
    1046437,
    0,
    6,
    3,
    0,
    2,
    0,
    3288270847,
    0,
    3,
    3,
    0,
    2,
    0,
    67043519,
    -5,
    2,
    0,
    0,
    4282384383,
    0,
    1056964609,
    -1,
    3,
    0,
    2,
    0,
    67043345,
    -1,
    2,
    0,
    2,
    42,
    2,
    23,
    2,
    50,
    2,
    11,
    2,
    61,
    2,
    38,
    -5,
    2,
    0,
    2,
    12,
    -3,
    3,
    0,
    2,
    0,
    2147484671,
    2,
    134,
    0,
    4190109695,
    2,
    52,
    -2,
    2,
    135,
    0,
    4244635647,
    0,
    27,
    2,
    0,
    2,
    8,
    2,
    43,
    2,
    0,
    2,
    68,
    2,
    18,
    2,
    0,
    2,
    42,
    -6,
    2,
    0,
    2,
    45,
    2,
    59,
    2,
    44,
    2,
    45,
    2,
    46,
    2,
    47,
    0,
    8388351,
    -2,
    2,
    136,
    0,
    3028287487,
    2,
    48,
    2,
    138,
    0,
    33259519,
    2,
    49,
    -9,
    2,
    21,
    0,
    4294836223,
    0,
    3355443199,
    0,
    134152199,
    -2,
    2,
    69,
    -2,
    3,
    0,
    28,
    2,
    32,
    -3,
    3,
    0,
    3,
    2,
    17,
    3,
    0,
    6,
    2,
    50,
    -81,
    2,
    18,
    3,
    0,
    2,
    2,
    36,
    3,
    0,
    33,
    2,
    25,
    2,
    30,
    3,
    0,
    124,
    2,
    12,
    3,
    0,
    18,
    2,
    38,
    -213,
    2,
    0,
    2,
    32,
    -54,
    3,
    0,
    17,
    2,
    42,
    2,
    8,
    2,
    23,
    2,
    0,
    2,
    8,
    2,
    23,
    2,
    51,
    2,
    0,
    2,
    21,
    2,
    52,
    2,
    139,
    2,
    25,
    -13,
    2,
    0,
    2,
    53,
    -6,
    3,
    0,
    2,
    -4,
    3,
    0,
    2,
    0,
    4294936575,
    2,
    0,
    0,
    4294934783,
    -2,
    0,
    196635,
    3,
    0,
    191,
    2,
    54,
    3,
    0,
    38,
    2,
    30,
    2,
    55,
    2,
    34,
    -278,
    2,
    140,
    3,
    0,
    9,
    2,
    141,
    2,
    142,
    2,
    56,
    3,
    0,
    11,
    2,
    7,
    -72,
    3,
    0,
    3,
    2,
    143,
    0,
    1677656575,
    -130,
    2,
    26,
    -16,
    2,
    0,
    2,
    24,
    2,
    38,
    -16,
    0,
    4161266656,
    0,
    4071,
    0,
    15360,
    -4,
    2,
    57,
    -13,
    3,
    0,
    2,
    2,
    58,
    2,
    0,
    2,
    145,
    2,
    146,
    2,
    62,
    2,
    0,
    2,
    147,
    2,
    148,
    2,
    149,
    3,
    0,
    10,
    2,
    150,
    2,
    151,
    2,
    22,
    3,
    58,
    2,
    3,
    152,
    2,
    3,
    59,
    2,
    0,
    4294954999,
    2,
    0,
    -16,
    2,
    0,
    2,
    92,
    2,
    0,
    0,
    2105343,
    0,
    4160749584,
    0,
    65534,
    -34,
    2,
    8,
    2,
    154,
    -6,
    0,
    4194303871,
    0,
    4294903771,
    2,
    0,
    2,
    60,
    2,
    100,
    -3,
    2,
    0,
    0,
    1073684479,
    0,
    17407,
    -9,
    2,
    18,
    2,
    17,
    2,
    0,
    2,
    32,
    -14,
    2,
    18,
    2,
    32,
    -6,
    2,
    18,
    2,
    12,
    -15,
    2,
    155,
    3,
    0,
    6,
    0,
    8323103,
    -1,
    3,
    0,
    2,
    2,
    61,
    -37,
    2,
    62,
    2,
    156,
    2,
    157,
    2,
    158,
    2,
    159,
    2,
    160,
    -105,
    2,
    26,
    -32,
    3,
    0,
    1335,
    -1,
    3,
    0,
    129,
    2,
    32,
    3,
    0,
    6,
    2,
    10,
    3,
    0,
    180,
    2,
    161,
    3,
    0,
    233,
    2,
    162,
    3,
    0,
    18,
    2,
    10,
    -77,
    3,
    0,
    16,
    2,
    10,
    -47,
    3,
    0,
    154,
    2,
    6,
    3,
    0,
    130,
    2,
    25,
    -22250,
    3,
    0,
    7,
    2,
    25,
    -6130,
    3,
    5,
    2,
    -1,
    0,
    69207040,
    3,
    44,
    2,
    3,
    0,
    14,
    2,
    63,
    2,
    64,
    -3,
    0,
    3168731136,
    0,
    4294956864,
    2,
    1,
    2,
    0,
    2,
    41,
    3,
    0,
    4,
    0,
    4294966275,
    3,
    0,
    4,
    2,
    16,
    2,
    65,
    2,
    0,
    2,
    34,
    -1,
    2,
    18,
    2,
    66,
    -1,
    2,
    0,
    0,
    2047,
    0,
    4294885376,
    3,
    0,
    2,
    0,
    3145727,
    0,
    2617294944,
    0,
    4294770688,
    2,
    25,
    2,
    67,
    3,
    0,
    2,
    0,
    131135,
    2,
    98,
    0,
    70256639,
    0,
    71303167,
    0,
    272,
    2,
    42,
    2,
    6,
    0,
    32511,
    2,
    0,
    2,
    49,
    -1,
    2,
    99,
    2,
    68,
    0,
    4278255616,
    0,
    4294836227,
    0,
    4294549473,
    0,
    600178175,
    0,
    2952806400,
    0,
    268632067,
    0,
    4294543328,
    0,
    57540095,
    0,
    1577058304,
    0,
    1835008,
    0,
    4294688736,
    2,
    70,
    2,
    69,
    0,
    33554435,
    2,
    131,
    2,
    70,
    0,
    2952790016,
    0,
    131075,
    0,
    3594373096,
    0,
    67094296,
    2,
    69,
    -1,
    0,
    4294828000,
    0,
    603979263,
    0,
    654311424,
    0,
    3,
    0,
    4294828001,
    0,
    602930687,
    0,
    1610612736,
    0,
    393219,
    0,
    4294828016,
    0,
    671088639,
    0,
    2154840064,
    0,
    4227858435,
    0,
    4236247008,
    2,
    71,
    2,
    38,
    -1,
    2,
    4,
    0,
    917503,
    2,
    38,
    -1,
    2,
    72,
    0,
    537788335,
    0,
    4026531935,
    -1,
    0,
    1,
    -1,
    2,
    33,
    2,
    73,
    0,
    7936,
    -3,
    2,
    0,
    0,
    2147485695,
    0,
    1010761728,
    0,
    4292984930,
    0,
    16387,
    2,
    0,
    2,
    15,
    2,
    22,
    3,
    0,
    10,
    2,
    74,
    2,
    0,
    2,
    75,
    2,
    76,
    2,
    77,
    2,
    0,
    2,
    78,
    2,
    0,
    2,
    12,
    -1,
    2,
    25,
    3,
    0,
    2,
    2,
    13,
    2,
    4,
    3,
    0,
    18,
    2,
    79,
    2,
    5,
    3,
    0,
    2,
    2,
    80,
    0,
    2147745791,
    3,
    19,
    2,
    0,
    122879,
    2,
    0,
    2,
    9,
    0,
    276824064,
    -2,
    3,
    0,
    2,
    2,
    42,
    2,
    0,
    0,
    4294903295,
    2,
    0,
    2,
    30,
    2,
    8,
    -1,
    2,
    18,
    2,
    51,
    2,
    0,
    2,
    81,
    2,
    49,
    -1,
    2,
    21,
    2,
    0,
    2,
    29,
    -2,
    0,
    128,
    -2,
    2,
    28,
    2,
    9,
    0,
    8160,
    -1,
    2,
    127,
    0,
    4227907585,
    2,
    0,
    2,
    37,
    2,
    0,
    2,
    50,
    0,
    4227915776,
    2,
    10,
    2,
    6,
    2,
    11,
    -1,
    0,
    74440192,
    3,
    0,
    6,
    -2,
    3,
    0,
    8,
    2,
    13,
    2,
    0,
    2,
    82,
    2,
    10,
    2,
    0,
    2,
    83,
    2,
    84,
    2,
    85,
    -3,
    2,
    86,
    2,
    14,
    -3,
    2,
    87,
    2,
    88,
    2,
    89,
    2,
    0,
    2,
    34,
    -83,
    3,
    0,
    7,
    0,
    817183,
    2,
    0,
    2,
    15,
    2,
    0,
    0,
    33023,
    2,
    21,
    3,
    90,
    2,
    -17,
    2,
    91,
    0,
    524157950,
    2,
    4,
    2,
    0,
    2,
    92,
    2,
    4,
    2,
    0,
    2,
    22,
    2,
    28,
    2,
    16,
    3,
    0,
    2,
    2,
    17,
    2,
    0,
    -1,
    2,
    18,
    -16,
    3,
    0,
    206,
    -2,
    3,
    0,
    692,
    2,
    73,
    -1,
    2,
    18,
    2,
    10,
    3,
    0,
    8,
    2,
    93,
    0,
    3072,
    2,
    0,
    0,
    2147516415,
    2,
    10,
    3,
    0,
    2,
    2,
    25,
    2,
    94,
    2,
    95,
    3,
    0,
    2,
    2,
    96,
    2,
    0,
    2,
    97,
    2,
    46,
    0,
    4294965179,
    0,
    7,
    2,
    0,
    2,
    9,
    2,
    95,
    2,
    9,
    -1,
    0,
    1761345536,
    2,
    98,
    0,
    4294901823,
    2,
    38,
    2,
    20,
    2,
    99,
    2,
    35,
    2,
    100,
    0,
    2080440287,
    2,
    0,
    2,
    34,
    2,
    153,
    0,
    3296722943,
    2,
    0,
    0,
    1046675455,
    0,
    939524101,
    0,
    1837055,
    2,
    101,
    2,
    102,
    2,
    22,
    2,
    23,
    3,
    0,
    3,
    0,
    7,
    3,
    0,
    349,
    2,
    103,
    2,
    104,
    2,
    7,
    -264,
    3,
    0,
    11,
    2,
    24,
    3,
    0,
    2,
    2,
    32,
    -1,
    0,
    2700607615,
    2,
    105,
    2,
    106,
    3,
    0,
    2,
    2,
    19,
    2,
    107,
    3,
    0,
    10,
    2,
    10,
    2,
    18,
    2,
    0,
    2,
    47,
    2,
    0,
    2,
    31,
    2,
    108,
    -3,
    2,
    109,
    3,
    0,
    3,
    2,
    20,
    -1,
    3,
    5,
    2,
    2,
    110,
    2,
    0,
    2,
    8,
    2,
    111,
    -1,
    2,
    112,
    2,
    113,
    2,
    114,
    -1,
    3,
    0,
    3,
    2,
    12,
    -2,
    2,
    0,
    2,
    29,
    -8,
    2,
    20,
    2,
    0,
    2,
    36,
    -1,
    2,
    0,
    2,
    67,
    2,
    6,
    2,
    30,
    2,
    10,
    2,
    0,
    2,
    115,
    -1,
    3,
    0,
    4,
    2,
    10,
    2,
    18,
    2,
    116,
    2,
    7,
    2,
    0,
    2,
    117,
    2,
    0,
    2,
    118,
    2,
    119,
    2,
    120,
    2,
    0,
    2,
    9,
    3,
    0,
    9,
    2,
    21,
    2,
    30,
    2,
    31,
    2,
    121,
    2,
    122,
    -2,
    2,
    123,
    2,
    124,
    2,
    30,
    2,
    21,
    2,
    8,
    -2,
    2,
    125,
    2,
    30,
    2,
    32,
    -2,
    2,
    0,
    2,
    39,
    -2,
    0,
    4277075969,
    2,
    30,
    -1,
    3,
    20,
    2,
    -1,
    2,
    33,
    2,
    126,
    2,
    0,
    3,
    30,
    2,
    2,
    35,
    2,
    19,
    -3,
    3,
    0,
    2,
    2,
    34,
    -1,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    50,
    2,
    98,
    0,
    4294934591,
    2,
    37,
    -7,
    2,
    0,
    0,
    197631,
    2,
    57,
    -1,
    2,
    20,
    2,
    43,
    2,
    37,
    2,
    18,
    0,
    3,
    2,
    18,
    2,
    126,
    2,
    21,
    2,
    127,
    2,
    54,
    -1,
    0,
    2490368,
    2,
    127,
    2,
    25,
    2,
    18,
    2,
    34,
    2,
    127,
    2,
    38,
    0,
    4294901904,
    0,
    4718591,
    2,
    127,
    2,
    35,
    0,
    335544350,
    -1,
    2,
    128,
    0,
    2147487743,
    0,
    1,
    -1,
    2,
    129,
    2,
    130,
    2,
    8,
    -1,
    2,
    131,
    2,
    70,
    0,
    3758161920,
    0,
    3,
    2,
    132,
    0,
    12582911,
    0,
    655360,
    -1,
    2,
    0,
    2,
    29,
    0,
    2147485568,
    0,
    3,
    2,
    0,
    2,
    25,
    0,
    176,
    -5,
    2,
    0,
    2,
    17,
    0,
    251658240,
    -1,
    2,
    0,
    2,
    25,
    0,
    16,
    -1,
    2,
    0,
    0,
    16779263,
    -2,
    2,
    12,
    -1,
    2,
    38,
    -5,
    2,
    0,
    2,
    133,
    -3,
    3,
    0,
    2,
    2,
    55,
    2,
    134,
    0,
    2147549183,
    0,
    2,
    -2,
    2,
    135,
    2,
    36,
    0,
    10,
    0,
    4294965249,
    0,
    67633151,
    0,
    4026597376,
    2,
    0,
    0,
    536871935,
    2,
    18,
    2,
    0,
    2,
    42,
    -6,
    2,
    0,
    0,
    1,
    2,
    59,
    2,
    17,
    0,
    1,
    2,
    46,
    2,
    25,
    -3,
    2,
    136,
    2,
    36,
    2,
    137,
    2,
    138,
    0,
    16778239,
    -10,
    2,
    35,
    0,
    4294836212,
    2,
    9,
    -3,
    2,
    69,
    -2,
    3,
    0,
    28,
    2,
    32,
    -3,
    3,
    0,
    3,
    2,
    17,
    3,
    0,
    6,
    2,
    50,
    -81,
    2,
    18,
    3,
    0,
    2,
    2,
    36,
    3,
    0,
    33,
    2,
    25,
    0,
    126,
    3,
    0,
    124,
    2,
    12,
    3,
    0,
    18,
    2,
    38,
    -213,
    2,
    10,
    -55,
    3,
    0,
    17,
    2,
    42,
    2,
    8,
    2,
    18,
    2,
    0,
    2,
    8,
    2,
    18,
    2,
    60,
    2,
    0,
    2,
    25,
    2,
    50,
    2,
    139,
    2,
    25,
    -13,
    2,
    0,
    2,
    73,
    -6,
    3,
    0,
    2,
    -4,
    3,
    0,
    2,
    0,
    67583,
    -1,
    2,
    107,
    -2,
    0,
    11,
    3,
    0,
    191,
    2,
    54,
    3,
    0,
    38,
    2,
    30,
    2,
    55,
    2,
    34,
    -278,
    2,
    140,
    3,
    0,
    9,
    2,
    141,
    2,
    142,
    2,
    56,
    3,
    0,
    11,
    2,
    7,
    -72,
    3,
    0,
    3,
    2,
    143,
    2,
    144,
    -187,
    3,
    0,
    2,
    2,
    58,
    2,
    0,
    2,
    145,
    2,
    146,
    2,
    62,
    2,
    0,
    2,
    147,
    2,
    148,
    2,
    149,
    3,
    0,
    10,
    2,
    150,
    2,
    151,
    2,
    22,
    3,
    58,
    2,
    3,
    152,
    2,
    3,
    59,
    2,
    2,
    153,
    -57,
    2,
    8,
    2,
    154,
    -7,
    2,
    18,
    2,
    0,
    2,
    60,
    -4,
    2,
    0,
    0,
    1065361407,
    0,
    16384,
    -9,
    2,
    18,
    2,
    60,
    2,
    0,
    2,
    133,
    -14,
    2,
    18,
    2,
    133,
    -6,
    2,
    18,
    0,
    81919,
    -15,
    2,
    155,
    3,
    0,
    6,
    2,
    126,
    -1,
    3,
    0,
    2,
    0,
    2063,
    -37,
    2,
    62,
    2,
    156,
    2,
    157,
    2,
    158,
    2,
    159,
    2,
    160,
    -138,
    3,
    0,
    1335,
    -1,
    3,
    0,
    129,
    2,
    32,
    3,
    0,
    6,
    2,
    10,
    3,
    0,
    180,
    2,
    161,
    3,
    0,
    233,
    2,
    162,
    3,
    0,
    18,
    2,
    10,
    -77,
    3,
    0,
    16,
    2,
    10,
    -47,
    3,
    0,
    154,
    2,
    6,
    3,
    0,
    130,
    2,
    25,
    -28386
], [
    4294967295,
    4294967291,
    4092460543,
    4294828031,
    4294967294,
    134217726,
    4294903807,
    268435455,
    2147483647,
    1048575,
    1073741823,
    3892314111,
    134217727,
    1061158911,
    536805376,
    4294910143,
    4294901759,
    32767,
    4294901760,
    262143,
    536870911,
    8388607,
    4160749567,
    4294902783,
    4294918143,
    65535,
    67043328,
    2281701374,
    4294967264,
    2097151,
    4194303,
    255,
    67108863,
    4294967039,
    511,
    524287,
    131071,
    63,
    127,
    3238002687,
    4294549487,
    4290772991,
    33554431,
    4294901888,
    4286578687,
    67043329,
    4294705152,
    4294770687,
    67043583,
    1023,
    15,
    2047999,
    67043343,
    67051519,
    16777215,
    2147483648,
    4294902000,
    28,
    4292870143,
    4294966783,
    16383,
    67047423,
    4294967279,
    262083,
    20511,
    41943039,
    493567,
    4294959104,
    603979775,
    65536,
    602799615,
    805044223,
    4294965206,
    8191,
    1031749119,
    4294917631,
    2134769663,
    4286578493,
    4282253311,
    4294942719,
    33540095,
    4294905855,
    2868854591,
    1608515583,
    265232348,
    534519807,
    2147614720,
    1060109444,
    4093640016,
    17376,
    2139062143,
    224,
    4169138175,
    4294909951,
    4286578688,
    4294967292,
    4294965759,
    535511039,
    4294966272,
    4294967280,
    32768,
    8289918,
    4294934399,
    4294901775,
    4294965375,
    1602223615,
    4294967259,
    4294443008,
    268369920,
    4292804608,
    4294967232,
    486341884,
    4294963199,
    3087007615,
    1073692671,
    4128527,
    4279238655,
    4294902015,
    4160684047,
    4290246655,
    469499899,
    4294967231,
    134086655,
    4294966591,
    2445279231,
    3670015,
    31,
    4294967288,
    4294705151,
    3221208447,
    4294902271,
    4294549472,
    4294921215,
    4095,
    4285526655,
    4294966527,
    4294966143,
    64,
    4294966719,
    3774873592,
    1877934080,
    262151,
    2555904,
    536807423,
    67043839,
    3758096383,
    3959414372,
    3755993023,
    2080374783,
    4294835295,
    4294967103,
    4160749565,
    4294934527,
    4087,
    2016,
    2147446655,
    184024726,
    2862017156,
    1593309078,
    268434431,
    268434414,
    4294901763,
    4294901761
]);
const isIDContinue = (code)=>(unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1) !== 0;
const isIDStart = (code)=>(unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
function advanceChar(parser) {
    parser.column++;
    return parser.currentChar = parser.source.charCodeAt(++parser.index);
}
function consumePossibleSurrogatePair(parser) {
    const hi = parser.currentChar;
    if ((hi & 0xfc00) !== 55296) return 0;
    const lo = parser.source.charCodeAt(parser.index + 1);
    if ((lo & 0xfc00) !== 56320) return 0;
    return 65536 + ((hi & 0x3ff) << 10) + (lo & 0x3ff);
}
function consumeLineFeed(parser, state) {
    parser.currentChar = parser.source.charCodeAt(++parser.index);
    parser.flags |= 1;
    if ((state & 4) === 0) {
        parser.column = 0;
        parser.line++;
    }
}
function scanNewLine(parser) {
    parser.flags |= 1;
    parser.currentChar = parser.source.charCodeAt(++parser.index);
    parser.column = 0;
    parser.line++;
}
function isExoticECMAScriptWhitespace(ch) {
    return ch === 160 || ch === 65279 || ch === 133 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 8201 || ch === 65519;
}
function toHex(code) {
    return code < 65 ? code - 48 : code - 65 + 10 & 0xf;
}
function convertTokenType(t) {
    switch(t){
        case 134283266:
            return 'NumericLiteral';
        case 134283267:
            return 'StringLiteral';
        case 86021:
        case 86022:
            return 'BooleanLiteral';
        case 86023:
            return 'NullLiteral';
        case 65540:
            return 'RegularExpression';
        case 67174408:
        case 67174409:
        case 131:
            return 'TemplateLiteral';
        default:
            if ((t & 143360) === 143360) return 'Identifier';
            if ((t & 4096) === 4096) return 'Keyword';
            return 'Punctuator';
    }
}
const CharTypes = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8 | 1024,
    0,
    0,
    8 | 2048,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8192,
    0,
    1 | 2,
    0,
    0,
    8192,
    0,
    0,
    0,
    256,
    0,
    256 | 32768,
    0,
    0,
    2 | 16 | 128 | 32 | 64,
    2 | 16 | 128 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 512 | 64,
    2 | 16 | 512 | 64,
    0,
    0,
    16384,
    0,
    0,
    0,
    0,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    0,
    1,
    0,
    0,
    1 | 2 | 4096,
    0,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    16384,
    0,
    0,
    0,
    0
];
const isIdStart = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0
];
const isIdPart = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0
];
function isIdentifierStart(code) {
    return code <= 0x7F ? isIdStart[code] > 0 : isIDStart(code);
}
function isIdentifierPart(code) {
    return code <= 0x7F ? isIdPart[code] > 0 : isIDContinue(code) || code === 8204 || code === 8205;
}
const CommentTypes = [
    'SingleLine',
    'MultiLine',
    'HTMLOpen',
    'HTMLClose',
    'HashbangComment'
];
function skipHashBang(parser) {
    const { source } = parser;
    if (parser.currentChar === 35 && source.charCodeAt(parser.index + 1) === 33) {
        advanceChar(parser);
        advanceChar(parser);
        skipSingleLineComment(parser, source, 0, 4, parser.tokenStart);
    }
}
function skipSingleHTMLComment(parser, source, state, context, type, start) {
    if (context & 2) parser.report(0);
    return skipSingleLineComment(parser, source, state, type, start);
}
function skipSingleLineComment(parser, source, state, type, start) {
    const { index } = parser;
    parser.tokenIndex = parser.index;
    parser.tokenLine = parser.line;
    parser.tokenColumn = parser.column;
    while(parser.index < parser.end){
        if (CharTypes[parser.currentChar] & 8) {
            const isCR = parser.currentChar === 13;
            scanNewLine(parser);
            if (isCR && parser.index < parser.end && parser.currentChar === 10) parser.currentChar = source.charCodeAt(++parser.index);
            break;
        } else if ((parser.currentChar ^ 8232) <= 1) {
            scanNewLine(parser);
            break;
        }
        advanceChar(parser);
        parser.tokenIndex = parser.index;
        parser.tokenLine = parser.line;
        parser.tokenColumn = parser.column;
    }
    if (parser.options.onComment) {
        const loc = {
            start: {
                line: start.line,
                column: start.column
            },
            end: {
                line: parser.tokenLine,
                column: parser.tokenColumn
            }
        };
        parser.options.onComment(CommentTypes[type & 0xff], source.slice(index, parser.tokenIndex), start.index, parser.tokenIndex, loc);
    }
    return state | 1;
}
function skipMultiLineComment(parser, source, state) {
    const { index } = parser;
    while(parser.index < parser.end){
        if (parser.currentChar < 0x2b) {
            let skippedOneAsterisk = false;
            while(parser.currentChar === 42){
                if (!skippedOneAsterisk) {
                    state &= -5;
                    skippedOneAsterisk = true;
                }
                if (advanceChar(parser) === 47) {
                    advanceChar(parser);
                    if (parser.options.onComment) {
                        const loc = {
                            start: {
                                line: parser.tokenLine,
                                column: parser.tokenColumn
                            },
                            end: {
                                line: parser.line,
                                column: parser.column
                            }
                        };
                        parser.options.onComment(CommentTypes[1 & 0xff], source.slice(index, parser.index - 2), index - 2, parser.index, loc);
                    }
                    parser.tokenIndex = parser.index;
                    parser.tokenLine = parser.line;
                    parser.tokenColumn = parser.column;
                    return state;
                }
            }
            if (skippedOneAsterisk) {
                continue;
            }
            if (CharTypes[parser.currentChar] & 8) {
                if (parser.currentChar === 13) {
                    state |= 1 | 4;
                    scanNewLine(parser);
                } else {
                    consumeLineFeed(parser, state);
                    state = state & -5 | 1;
                }
            } else {
                advanceChar(parser);
            }
        } else if ((parser.currentChar ^ 8232) <= 1) {
            state = state & -5 | 1;
            scanNewLine(parser);
        } else {
            state &= -5;
            advanceChar(parser);
        }
    }
    parser.report(18);
}
var RegexState;
(function(RegexState) {
    RegexState[RegexState["Empty"] = 0] = "Empty";
    RegexState[RegexState["Escape"] = 1] = "Escape";
    RegexState[RegexState["Class"] = 2] = "Class";
})(RegexState || (RegexState = {}));
var RegexFlags;
(function(RegexFlags) {
    RegexFlags[RegexFlags["Empty"] = 0] = "Empty";
    RegexFlags[RegexFlags["IgnoreCase"] = 1] = "IgnoreCase";
    RegexFlags[RegexFlags["Global"] = 2] = "Global";
    RegexFlags[RegexFlags["Multiline"] = 4] = "Multiline";
    RegexFlags[RegexFlags["Unicode"] = 16] = "Unicode";
    RegexFlags[RegexFlags["Sticky"] = 8] = "Sticky";
    RegexFlags[RegexFlags["DotAll"] = 32] = "DotAll";
    RegexFlags[RegexFlags["Indices"] = 64] = "Indices";
    RegexFlags[RegexFlags["UnicodeSets"] = 128] = "UnicodeSets";
})(RegexFlags || (RegexFlags = {}));
function scanRegularExpression(parser) {
    const bodyStart = parser.index;
    let preparseState = RegexState.Empty;
    loop: while(true){
        const ch = parser.currentChar;
        advanceChar(parser);
        if (preparseState & RegexState.Escape) {
            preparseState &= ~RegexState.Escape;
        } else {
            switch(ch){
                case 47:
                    if (!preparseState) break loop;
                    else break;
                case 92:
                    preparseState |= RegexState.Escape;
                    break;
                case 91:
                    preparseState |= RegexState.Class;
                    break;
                case 93:
                    preparseState &= RegexState.Escape;
                    break;
            }
        }
        if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) {
            parser.report(34);
        }
        if (parser.index >= parser.source.length) {
            return parser.report(34);
        }
    }
    const bodyEnd = parser.index - 1;
    let mask = RegexFlags.Empty;
    let char = parser.currentChar;
    const { index: flagStart } = parser;
    while(isIdentifierPart(char)){
        switch(char){
            case 103:
                if (mask & RegexFlags.Global) parser.report(36, 'g');
                mask |= RegexFlags.Global;
                break;
            case 105:
                if (mask & RegexFlags.IgnoreCase) parser.report(36, 'i');
                mask |= RegexFlags.IgnoreCase;
                break;
            case 109:
                if (mask & RegexFlags.Multiline) parser.report(36, 'm');
                mask |= RegexFlags.Multiline;
                break;
            case 117:
                if (mask & RegexFlags.Unicode) parser.report(36, 'u');
                if (mask & RegexFlags.UnicodeSets) parser.report(36, 'vu');
                mask |= RegexFlags.Unicode;
                break;
            case 118:
                if (mask & RegexFlags.Unicode) parser.report(36, 'uv');
                if (mask & RegexFlags.UnicodeSets) parser.report(36, 'v');
                mask |= RegexFlags.UnicodeSets;
                break;
            case 121:
                if (mask & RegexFlags.Sticky) parser.report(36, 'y');
                mask |= RegexFlags.Sticky;
                break;
            case 115:
                if (mask & RegexFlags.DotAll) parser.report(36, 's');
                mask |= RegexFlags.DotAll;
                break;
            case 100:
                if (mask & RegexFlags.Indices) parser.report(36, 'd');
                mask |= RegexFlags.Indices;
                break;
            default:
                parser.report(35);
        }
        char = advanceChar(parser);
    }
    const flags = parser.source.slice(flagStart, parser.index);
    const pattern = parser.source.slice(bodyStart, bodyEnd);
    parser.tokenRegExp = {
        pattern,
        flags
    };
    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    parser.tokenValue = validate(parser, pattern, flags);
    return 65540;
}
function validate(parser, pattern, flags) {
    try {
        return new RegExp(pattern, flags);
    } catch  {
        try {
            new RegExp(pattern, flags);
            return null;
        } catch  {
            parser.report(34);
        }
    }
}
function scanString(parser, context, quote) {
    const { index: start } = parser;
    let ret = '';
    let char = advanceChar(parser);
    let marker = parser.index;
    while((CharTypes[char] & 8) === 0){
        if (char === quote) {
            ret += parser.source.slice(marker, parser.index);
            advanceChar(parser);
            if (parser.options.raw) parser.tokenRaw = parser.source.slice(start, parser.index);
            parser.tokenValue = ret;
            return 134283267;
        }
        if ((char & 8) === 8 && char === 92) {
            ret += parser.source.slice(marker, parser.index);
            char = advanceChar(parser);
            if (char < 0x7f || char === 8232 || char === 8233) {
                const code = parseEscape(parser, context, char);
                if (code >= 0) ret += String.fromCodePoint(code);
                else handleStringError(parser, code, 0);
            } else {
                ret += String.fromCodePoint(char);
            }
            marker = parser.index + 1;
        } else if (char === 8232 || char === 8233) {
            parser.column = -1;
            parser.line++;
        }
        if (parser.index >= parser.end) parser.report(16);
        char = advanceChar(parser);
    }
    parser.report(16);
}
function parseEscape(parser, context, first, isTemplate = 0) {
    switch(first){
        case 98:
            return 8;
        case 102:
            return 12;
        case 114:
            return 13;
        case 110:
            return 10;
        case 116:
            return 9;
        case 118:
            return 11;
        case 13:
            {
                if (parser.index < parser.end) {
                    const nextChar = parser.source.charCodeAt(parser.index + 1);
                    if (nextChar === 10) {
                        parser.index = parser.index + 1;
                        parser.currentChar = nextChar;
                    }
                }
            }
        case 10:
        case 8232:
        case 8233:
            parser.column = -1;
            parser.line++;
            return -1;
        case 48:
        case 49:
        case 50:
        case 51:
            {
                let code = first - 48;
                let index = parser.index + 1;
                let column = parser.column + 1;
                if (index < parser.end) {
                    const next = parser.source.charCodeAt(index);
                    if ((CharTypes[next] & 32) === 0) {
                        if (code !== 0 || CharTypes[next] & 512) {
                            if (context & 1 || isTemplate) return -2;
                            parser.flags |= 64;
                        }
                    } else if (context & 1 || isTemplate) {
                        return -2;
                    } else {
                        parser.currentChar = next;
                        code = code << 3 | next - 48;
                        index++;
                        column++;
                        if (index < parser.end) {
                            const next = parser.source.charCodeAt(index);
                            if (CharTypes[next] & 32) {
                                parser.currentChar = next;
                                code = code << 3 | next - 48;
                                index++;
                                column++;
                            }
                        }
                        parser.flags |= 64;
                    }
                    parser.index = index - 1;
                    parser.column = column - 1;
                }
                return code;
            }
        case 52:
        case 53:
        case 54:
        case 55:
            {
                if (isTemplate || context & 1) return -2;
                let code = first - 48;
                const index = parser.index + 1;
                const column = parser.column + 1;
                if (index < parser.end) {
                    const next = parser.source.charCodeAt(index);
                    if (CharTypes[next] & 32) {
                        code = code << 3 | next - 48;
                        parser.currentChar = next;
                        parser.index = index;
                        parser.column = column;
                    }
                }
                parser.flags |= 64;
                return code;
            }
        case 120:
            {
                const ch1 = advanceChar(parser);
                if ((CharTypes[ch1] & 64) === 0) return -4;
                const hi = toHex(ch1);
                const ch2 = advanceChar(parser);
                if ((CharTypes[ch2] & 64) === 0) return -4;
                const lo = toHex(ch2);
                return hi << 4 | lo;
            }
        case 117:
            {
                const ch = advanceChar(parser);
                if (parser.currentChar === 123) {
                    let code = 0;
                    while((CharTypes[advanceChar(parser)] & 64) !== 0){
                        code = code << 4 | toHex(parser.currentChar);
                        if (code > 1114111) return -5;
                    }
                    if (parser.currentChar < 1 || parser.currentChar !== 125) {
                        return -4;
                    }
                    return code;
                } else {
                    if ((CharTypes[ch] & 64) === 0) return -4;
                    const ch2 = parser.source.charCodeAt(parser.index + 1);
                    if ((CharTypes[ch2] & 64) === 0) return -4;
                    const ch3 = parser.source.charCodeAt(parser.index + 2);
                    if ((CharTypes[ch3] & 64) === 0) return -4;
                    const ch4 = parser.source.charCodeAt(parser.index + 3);
                    if ((CharTypes[ch4] & 64) === 0) return -4;
                    parser.index += 3;
                    parser.column += 3;
                    parser.currentChar = parser.source.charCodeAt(parser.index);
                    return toHex(ch) << 12 | toHex(ch2) << 8 | toHex(ch3) << 4 | toHex(ch4);
                }
            }
        case 56:
        case 57:
            if (isTemplate || !parser.options.webcompat || context & 1) return -3;
            parser.flags |= 4096;
        default:
            return first;
    }
}
function handleStringError(parser, code, isTemplate) {
    switch(code){
        case -1:
            return;
        case -2:
            parser.report(isTemplate ? 2 : 1);
        case -3:
            parser.report(isTemplate ? 3 : 14);
        case -4:
            parser.report(7);
        case -5:
            parser.report(104);
    }
}
function scanTemplate(parser, context) {
    const { index: start } = parser;
    let token = 67174409;
    let ret = '';
    let char = advanceChar(parser);
    while(char !== 96){
        if (char === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
            advanceChar(parser);
            token = 67174408;
            break;
        } else if (char === 92) {
            char = advanceChar(parser);
            if (char > 0x7e) {
                ret += String.fromCodePoint(char);
            } else {
                const { index, line, column } = parser;
                const code = parseEscape(parser, context | 1, char, 1);
                if (code >= 0) {
                    ret += String.fromCodePoint(code);
                } else if (code !== -1 && context & 64) {
                    parser.index = index;
                    parser.line = line;
                    parser.column = column;
                    ret = null;
                    char = scanBadTemplate(parser, char);
                    if (char < 0) token = 67174408;
                    break;
                } else {
                    handleStringError(parser, code, 1);
                }
            }
        } else if (parser.index < parser.end) {
            if (char === 13 && parser.source.charCodeAt(parser.index) === 10) {
                ret += String.fromCodePoint(char);
                parser.currentChar = parser.source.charCodeAt(++parser.index);
            }
            if ((char & 83) < 3 && char === 10 || (char ^ 8232) <= 1) {
                parser.column = -1;
                parser.line++;
            }
            ret += String.fromCodePoint(char);
        }
        if (parser.index >= parser.end) parser.report(17);
        char = advanceChar(parser);
    }
    advanceChar(parser);
    parser.tokenValue = ret;
    parser.tokenRaw = parser.source.slice(start + 1, parser.index - (token === 67174409 ? 1 : 2));
    return token;
}
function scanBadTemplate(parser, ch) {
    while(ch !== 96){
        switch(ch){
            case 36:
                {
                    const index = parser.index + 1;
                    if (index < parser.end && parser.source.charCodeAt(index) === 123) {
                        parser.index = index;
                        parser.column++;
                        return -ch;
                    }
                    break;
                }
            case 10:
            case 8232:
            case 8233:
                parser.column = -1;
                parser.line++;
        }
        if (parser.index >= parser.end) parser.report(17);
        ch = advanceChar(parser);
    }
    return ch;
}
function scanTemplateTail(parser, context) {
    if (parser.index >= parser.end) parser.report(0);
    parser.index--;
    parser.column--;
    return scanTemplate(parser, context);
}
const errorMessages = {
    [0]: 'Unexpected token',
    [30]: "Unexpected token: '%0'",
    [1]: 'Octal escape sequences are not allowed in strict mode',
    [2]: 'Octal escape sequences are not allowed in template strings',
    [3]: '\\8 and \\9 are not allowed in template strings',
    [4]: 'Private identifier #%0 is not defined',
    [5]: 'Illegal Unicode escape sequence',
    [6]: 'Invalid code point %0',
    [7]: 'Invalid hexadecimal escape sequence',
    [9]: 'Octal literals are not allowed in strict mode',
    [8]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
    [10]: 'Expected number in radix %0',
    [151]: 'Invalid left-hand side assignment to a destructible right-hand side',
    [11]: 'Non-number found after exponent indicator',
    [12]: 'Invalid BigIntLiteral',
    [13]: 'No identifiers allowed directly after numeric literal',
    [14]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
    [15]: 'Escapes \\8 or \\9 are not allowed in strict mode',
    [16]: 'Unterminated string literal',
    [17]: 'Unterminated template literal',
    [18]: 'Multiline comment was not closed properly',
    [19]: 'The identifier contained dynamic unicode escape that was not closed',
    [20]: "Illegal character '%0'",
    [21]: 'Missing hexadecimal digits',
    [22]: 'Invalid implicit octal',
    [23]: 'Invalid line break in string literal',
    [24]: 'Only unicode escapes are legal in identifier names',
    [25]: "Expected '%0'",
    [26]: 'Invalid left-hand side in assignment',
    [27]: 'Invalid left-hand side in async arrow',
    [28]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
    [29]: 'Member access on super must be in a method',
    [31]: 'Await expression not allowed in formal parameter',
    [32]: 'Yield expression not allowed in formal parameter',
    [95]: "Unexpected token: 'escaped keyword'",
    [33]: 'Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses',
    [123]: 'Async functions can only be declared at the top level or inside a block',
    [34]: 'Unterminated regular expression',
    [35]: 'Unexpected regular expression flag',
    [36]: "Duplicate regular expression flag '%0'",
    [37]: '%0 functions must have exactly %1 argument%2',
    [38]: 'Setter function argument must not be a rest parameter',
    [39]: '%0 declaration must have a name in this context',
    [40]: 'Function name may not contain any reserved words or be eval or arguments in strict mode',
    [41]: 'The rest operator is missing an argument',
    [42]: 'A getter cannot be a generator',
    [43]: 'A setter cannot be a generator',
    [44]: 'A computed property name must be followed by a colon or paren',
    [134]: 'Object literal keys that are strings or numbers must be a method or have a colon',
    [46]: 'Found `* async x(){}` but this should be `async * x(){}`',
    [45]: 'Getters and setters can not be generators',
    [47]: "'%0' can not be generator method",
    [48]: "No line break is allowed after '=>'",
    [49]: 'The left-hand side of the arrow can only be destructed through assignment',
    [50]: 'The binding declaration is not destructible',
    [51]: 'Async arrow can not be followed by new expression',
    [52]: "Classes may not have a static property named 'prototype'",
    [53]: 'Class constructor may not be a %0',
    [54]: 'Duplicate constructor method in class',
    [55]: 'Invalid increment/decrement operand',
    [56]: 'Invalid use of `new` keyword on an increment/decrement expression',
    [57]: '`=>` is an invalid assignment target',
    [58]: 'Rest element may not have a trailing comma',
    [59]: 'Missing initializer in %0 declaration',
    [60]: "'for-%0' loop head declarations can not have an initializer",
    [61]: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
    [62]: 'Invalid shorthand property initializer',
    [63]: 'Property name __proto__ appears more than once in object literal',
    [64]: 'Let is disallowed as a lexically bound name',
    [65]: "Invalid use of '%0' inside new expression",
    [66]: "Illegal 'use strict' directive in function with non-simple parameter list",
    [67]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
    [68]: 'Illegal continue statement',
    [69]: 'Illegal break statement',
    [70]: 'Cannot have `let[...]` as a var name in strict mode',
    [71]: 'Invalid destructuring assignment target',
    [72]: 'Rest parameter may not have a default initializer',
    [73]: 'The rest argument must the be last parameter',
    [74]: 'Invalid rest argument',
    [76]: 'In strict mode code, functions can only be declared at top level or inside a block',
    [77]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
    [78]: 'Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
    [79]: "Class declaration can't appear in single-statement context",
    [80]: 'Invalid left-hand side in for-%0',
    [81]: 'Invalid assignment in for-%0',
    [82]: 'for await (... of ...) is only valid in async functions and async generators',
    [83]: 'The first token after the template expression should be a continuation of the template',
    [85]: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
    [84]: '`let \n [` is a restricted production at the start of a statement',
    [86]: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
    [87]: 'Catch clause parameter does not support default values',
    [88]: 'Missing catch or finally after try',
    [89]: 'More than one default clause in switch statement',
    [90]: 'Illegal newline after throw',
    [91]: 'Strict mode code may not include a with statement',
    [92]: 'Illegal return statement',
    [93]: 'The left hand side of the for-header binding declaration is not destructible',
    [94]: 'new.target only allowed within functions or static blocks',
    [96]: "'#' not followed by identifier",
    [102]: 'Invalid keyword',
    [101]: "Can not use 'let' as a class name",
    [100]: "'A lexical declaration can't define a 'let' binding",
    [99]: 'Can not use `let` as variable name in strict mode',
    [97]: "'%0' may not be used as an identifier in this context",
    [98]: 'Await is only valid in async functions',
    [103]: 'The %0 keyword can only be used with the module goal',
    [104]: 'Unicode codepoint must not be greater than 0x10FFFF',
    [105]: '%0 source must be string',
    [106]: 'Only a identifier or string can be used to indicate alias',
    [107]: "Only '*' or '{...}' can be imported after default",
    [108]: 'Trailing decorator may be followed by method',
    [109]: "Decorators can't be used with a constructor",
    [110]: 'Can not use `await` as identifier in module or async func',
    [111]: 'Can not use `await` as identifier in module',
    [112]: 'HTML comments are only allowed with web compatibility (Annex B)',
    [113]: "The identifier 'let' must not be in expression position in strict mode",
    [114]: 'Cannot assign to `eval` and `arguments` in strict mode',
    [115]: "The left-hand side of a for-of loop may not start with 'let'",
    [116]: 'Block body arrows can not be immediately invoked without a group',
    [117]: 'Block body arrows can not be immediately accessed without a group',
    [118]: 'Unexpected strict mode reserved word',
    [119]: 'Unexpected eval or arguments in strict mode',
    [120]: 'Decorators must not be followed by a semicolon',
    [121]: 'Calling delete on expression not allowed in strict mode',
    [122]: 'Pattern can not have a tail',
    [124]: 'Can not have a `yield` expression on the left side of a ternary',
    [125]: 'An arrow function can not have a postfix update operator',
    [126]: 'Invalid object literal key character after generator star',
    [127]: 'Private fields can not be deleted',
    [129]: 'Classes may not have a field called constructor',
    [128]: 'Classes may not have a private element named constructor',
    [130]: 'A class field initializer or static block may not contain arguments',
    [131]: 'Generators can only be declared at the top level or inside a block',
    [132]: 'Async methods are a restricted production and cannot have a newline following it',
    [133]: 'Unexpected character after object literal property name',
    [135]: 'Invalid key token',
    [136]: "Label '%0' has already been declared",
    [137]: 'continue statement must be nested within an iteration statement',
    [138]: "Undefined label '%0'",
    [139]: 'Trailing comma is disallowed inside import(...) arguments',
    [140]: 'Invalid binding in JSON import',
    [141]: 'import() requires exactly one argument',
    [142]: 'Cannot use new with import(...)',
    [143]: '... is not allowed in import()',
    [144]: "Expected '=>'",
    [145]: "Duplicate binding '%0'",
    [146]: 'Duplicate private identifier #%0',
    [147]: "Cannot export a duplicate name '%0'",
    [150]: 'Duplicate %0 for-binding',
    [148]: "Exported binding '%0' needs to refer to a top-level declared variable",
    [149]: 'Unexpected private field',
    [153]: 'Numeric separators are not allowed at the end of numeric literals',
    [152]: 'Only one underscore is allowed as numeric separator',
    [154]: 'JSX value should be either an expression or a quoted JSX text',
    [155]: 'Expected corresponding JSX closing tag for %0',
    [156]: 'Adjacent JSX elements must be wrapped in an enclosing tag',
    [157]: "JSX attributes must only be assigned a non-empty 'expression'",
    [158]: "'%0' has already been declared",
    [159]: "'%0' shadowed a catch clause binding",
    [160]: 'Dot property must be an identifier',
    [161]: 'Encountered invalid input after spread/rest argument',
    [162]: 'Catch without try',
    [163]: 'Finally without try',
    [164]: 'Expected corresponding closing tag for JSX fragment',
    [165]: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
    [166]: 'Invalid tagged template on optional chain',
    [167]: 'Invalid optional chain from super property',
    [168]: 'Invalid optional chain from new expression',
    [169]: 'Cannot use "import.meta" outside a module',
    [170]: 'Leading decorators must be attached to a class declaration',
    [171]: 'An export name cannot include a lone surrogate, found %0',
    [172]: 'A string literal cannot be used as an exported binding without `from`',
    [173]: "Private fields can't be accessed on super",
    [174]: "The only valid meta property for import is 'import.meta'",
    [175]: "'import.meta' must not contain escaped characters",
    [176]: 'cannot use "await" as identifier inside an async function',
    [177]: 'cannot use "await" in static blocks'
};
class ParseError extends SyntaxError {
    start;
    end;
    range;
    loc;
    description;
    constructor(start, end, type, ...params){
        const description = errorMessages[type].replace(/%(\d+)/g, (_, i)=>params[i]);
        const message = '[' + start.line + ':' + start.column + '-' + end.line + ':' + end.column + ']: ' + description;
        super(message);
        this.start = start.index;
        this.end = end.index;
        this.range = [
            start.index,
            end.index
        ];
        this.loc = {
            start: {
                line: start.line,
                column: start.column
            },
            end: {
                line: end.line,
                column: end.column
            }
        };
        this.description = description;
    }
}
function scanNumber(parser, context, kind) {
    let char = parser.currentChar;
    let value = 0;
    let digit = 9;
    let atStart = kind & 64 ? 0 : 1;
    let digits = 0;
    let allowSeparator = 0;
    if (kind & 64) {
        value = '.' + scanDecimalDigitsOrSeparator(parser, char);
        char = parser.currentChar;
        if (char === 110) parser.report(12);
    } else {
        if (char === 48) {
            char = advanceChar(parser);
            if ((char | 32) === 120) {
                kind = 8 | 128;
                char = advanceChar(parser);
                while(CharTypes[char] & (64 | 4096)){
                    if (char === 95) {
                        if (!allowSeparator) parser.report(152);
                        allowSeparator = 0;
                        char = advanceChar(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 0x10 + toHex(char);
                    digits++;
                    char = advanceChar(parser);
                }
                if (digits === 0 || !allowSeparator) {
                    parser.report(digits === 0 ? 21 : 153);
                }
            } else if ((char | 32) === 111) {
                kind = 4 | 128;
                char = advanceChar(parser);
                while(CharTypes[char] & (32 | 4096)){
                    if (char === 95) {
                        if (!allowSeparator) {
                            parser.report(152);
                        }
                        allowSeparator = 0;
                        char = advanceChar(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 8 + (char - 48);
                    digits++;
                    char = advanceChar(parser);
                }
                if (digits === 0 || !allowSeparator) {
                    parser.report(digits === 0 ? 0 : 153);
                }
            } else if ((char | 32) === 98) {
                kind = 2 | 128;
                char = advanceChar(parser);
                while(CharTypes[char] & (128 | 4096)){
                    if (char === 95) {
                        if (!allowSeparator) {
                            parser.report(152);
                        }
                        allowSeparator = 0;
                        char = advanceChar(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 2 + (char - 48);
                    digits++;
                    char = advanceChar(parser);
                }
                if (digits === 0 || !allowSeparator) {
                    parser.report(digits === 0 ? 0 : 153);
                }
            } else if (CharTypes[char] & 32) {
                if (context & 1) parser.report(1);
                kind = 1;
                while(CharTypes[char] & 16){
                    if (CharTypes[char] & 512) {
                        kind = 32;
                        atStart = 0;
                        break;
                    }
                    value = value * 8 + (char - 48);
                    char = advanceChar(parser);
                }
            } else if (CharTypes[char] & 512) {
                if (context & 1) parser.report(1);
                parser.flags |= 64;
                kind = 32;
            } else if (char === 95) {
                parser.report(0);
            }
        }
        if (kind & 48) {
            if (atStart) {
                while(digit >= 0 && CharTypes[char] & (16 | 4096)){
                    if (char === 95) {
                        char = advanceChar(parser);
                        if (char === 95 || kind & 32) {
                            throw new ParseError(parser.currentLocation, {
                                index: parser.index + 1,
                                line: parser.line,
                                column: parser.column
                            }, 152);
                        }
                        allowSeparator = 1;
                        continue;
                    }
                    allowSeparator = 0;
                    value = 10 * value + (char - 48);
                    char = advanceChar(parser);
                    --digit;
                }
                if (allowSeparator) {
                    throw new ParseError(parser.currentLocation, {
                        index: parser.index + 1,
                        line: parser.line,
                        column: parser.column
                    }, 153);
                }
                if (digit >= 0 && !isIdentifierStart(char) && char !== 46) {
                    parser.tokenValue = value;
                    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
                    return 134283266;
                }
            }
            value += scanDecimalDigitsOrSeparator(parser, char);
            char = parser.currentChar;
            if (char === 46) {
                if (advanceChar(parser) === 95) parser.report(0);
                kind = 64;
                value += '.' + scanDecimalDigitsOrSeparator(parser, parser.currentChar);
                char = parser.currentChar;
            }
        }
    }
    const end = parser.index;
    let isBigInt = 0;
    if (char === 110 && kind & 128) {
        isBigInt = 1;
        char = advanceChar(parser);
    } else {
        if ((char | 32) === 101) {
            char = advanceChar(parser);
            if (CharTypes[char] & 256) char = advanceChar(parser);
            const { index } = parser;
            if ((CharTypes[char] & 16) === 0) parser.report(11);
            value += parser.source.substring(end, index) + scanDecimalDigitsOrSeparator(parser, char);
            char = parser.currentChar;
        }
    }
    if (parser.index < parser.end && CharTypes[char] & 16 || isIdentifierStart(char)) {
        parser.report(13);
    }
    if (isBigInt) {
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
        parser.tokenValue = BigInt(parser.tokenRaw.slice(0, -1).replaceAll('_', ''));
        return 134283388;
    }
    parser.tokenValue = kind & (1 | 2 | 8 | 4) ? value : kind & 32 ? parseFloat(parser.source.substring(parser.tokenIndex, parser.index)) : +value;
    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    return 134283266;
}
function scanDecimalDigitsOrSeparator(parser, char) {
    let allowSeparator = 0;
    let start = parser.index;
    let ret = '';
    while(CharTypes[char] & (16 | 4096)){
        if (char === 95) {
            const { index } = parser;
            char = advanceChar(parser);
            if (char === 95) {
                throw new ParseError(parser.currentLocation, {
                    index: parser.index + 1,
                    line: parser.line,
                    column: parser.column
                }, 152);
            }
            allowSeparator = 1;
            ret += parser.source.substring(start, index);
            start = parser.index;
            continue;
        }
        allowSeparator = 0;
        char = advanceChar(parser);
    }
    if (allowSeparator) {
        throw new ParseError(parser.currentLocation, {
            index: parser.index + 1,
            line: parser.line,
            column: parser.column
        }, 153);
    }
    return ret + parser.source.substring(start, parser.index);
}
const KeywordDescTable = [
    'end of source',
    'identifier',
    'number',
    'string',
    'regular expression',
    'false',
    'true',
    'null',
    'template continuation',
    'template tail',
    '=>',
    '(',
    '{',
    '.',
    '...',
    '}',
    ')',
    ';',
    ',',
    '[',
    ']',
    ':',
    '?',
    '\'',
    '"',
    '++',
    '--',
    '=',
    '<<=',
    '>>=',
    '>>>=',
    '**=',
    '+=',
    '-=',
    '*=',
    '/=',
    '%=',
    '^=',
    '|=',
    '&=',
    '||=',
    '&&=',
    '??=',
    'typeof',
    'delete',
    'void',
    '!',
    '~',
    '+',
    '-',
    'in',
    'instanceof',
    '*',
    '%',
    '/',
    '**',
    '&&',
    '||',
    '===',
    '!==',
    '==',
    '!=',
    '<=',
    '>=',
    '<',
    '>',
    '<<',
    '>>',
    '>>>',
    '&',
    '|',
    '^',
    'var',
    'let',
    'const',
    'break',
    'case',
    'catch',
    'class',
    'continue',
    'debugger',
    'default',
    'do',
    'else',
    'export',
    'extends',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'new',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'while',
    'with',
    'implements',
    'interface',
    'package',
    'private',
    'protected',
    'public',
    'static',
    'yield',
    'as',
    'async',
    'await',
    'constructor',
    'get',
    'set',
    'accessor',
    'from',
    'of',
    'enum',
    'eval',
    'arguments',
    'escaped keyword',
    'escaped future reserved keyword',
    'reserved if strict',
    '#',
    'BigIntLiteral',
    '??',
    '?.',
    'WhiteSpace',
    'Illegal',
    'LineTerminator',
    'PrivateField',
    'Template',
    '@',
    'target',
    'meta',
    'LineFeed',
    'Escaped',
    'JSXText'
];
const descKeywordTable = {
    this: 86111,
    function: 86104,
    if: 20569,
    return: 20572,
    var: 86088,
    else: 20563,
    for: 20567,
    new: 86107,
    in: 8673330,
    typeof: 16863275,
    while: 20578,
    case: 20556,
    break: 20555,
    try: 20577,
    catch: 20557,
    delete: 16863276,
    throw: 86112,
    switch: 86110,
    continue: 20559,
    default: 20561,
    instanceof: 8411187,
    do: 20562,
    void: 16863277,
    finally: 20566,
    async: 209005,
    await: 209006,
    class: 86094,
    const: 86090,
    constructor: 12399,
    debugger: 20560,
    export: 20564,
    extends: 20565,
    false: 86021,
    from: 209011,
    get: 209008,
    implements: 36964,
    import: 86106,
    interface: 36965,
    let: 241737,
    null: 86023,
    of: 471156,
    package: 36966,
    private: 36967,
    protected: 36968,
    public: 36969,
    set: 209009,
    static: 36970,
    super: 86109,
    true: 86022,
    with: 20579,
    yield: 241771,
    enum: 86133,
    eval: 537079926,
    as: 77932,
    arguments: 537079927,
    target: 209029,
    meta: 209030,
    accessor: 12402
};
function matchOrInsertSemicolon(parser, context) {
    if ((parser.flags & 1) === 0 && (parser.getToken() & 1048576) !== 1048576) {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    if (!consumeOpt(parser, context, 1074790417)) {
        parser.options.onInsertedSemicolon?.(parser.startIndex);
    }
}
function isValidStrictMode(parser, index, tokenIndex, tokenValue) {
    if (index - tokenIndex < 13 && tokenValue === 'use strict') {
        if ((parser.getToken() & 1048576) === 1048576 || parser.flags & 1) {
            return 1;
        }
    }
    return 0;
}
function optionalBit(parser, context, t) {
    if (parser.getToken() !== t) return 0;
    nextToken(parser, context);
    return 1;
}
function consumeOpt(parser, context, t) {
    if (parser.getToken() !== t) return false;
    nextToken(parser, context);
    return true;
}
function consume(parser, context, t) {
    if (parser.getToken() !== t) parser.report(25, KeywordDescTable[t & 255]);
    nextToken(parser, context);
}
function reinterpretToPattern(parser, node) {
    switch(node.type){
        case 'ArrayExpression':
            {
                node.type = 'ArrayPattern';
                const { elements } = node;
                for(let i = 0, n = elements.length; i < n; ++i){
                    const element = elements[i];
                    if (element) reinterpretToPattern(parser, element);
                }
                return;
            }
        case 'ObjectExpression':
            {
                node.type = 'ObjectPattern';
                const { properties } = node;
                for(let i = 0, n = properties.length; i < n; ++i){
                    reinterpretToPattern(parser, properties[i]);
                }
                return;
            }
        case 'AssignmentExpression':
            node.type = 'AssignmentPattern';
            if (node.operator !== '=') parser.report(71);
            delete node.operator;
            reinterpretToPattern(parser, node.left);
            return;
        case 'Property':
            reinterpretToPattern(parser, node.value);
            return;
        case 'SpreadElement':
            node.type = 'RestElement';
            reinterpretToPattern(parser, node.argument);
    }
}
function validateBindingIdentifier(parser, context, kind, t, skipEvalArgCheck) {
    if (context & 1) {
        if ((t & 36864) === 36864) {
            parser.report(118);
        }
        if (!skipEvalArgCheck && (t & 537079808) === 537079808) {
            parser.report(119);
        }
    }
    if ((t & 20480) === 20480 || t === -2147483528) {
        parser.report(102);
    }
    if (kind & (8 | 16) && (t & 255) === (241737 & 255)) {
        parser.report(100);
    }
    if (context & (2048 | 2) && t === 209006) {
        parser.report(110);
    }
    if (context & (1024 | 1) && t === 241771) {
        parser.report(97, 'yield');
    }
}
function validateFunctionName(parser, context, t) {
    if (context & 1) {
        if ((t & 36864) === 36864) {
            parser.report(118);
        }
        if ((t & 537079808) === 537079808) {
            parser.report(119);
        }
        if (t === -2147483527) {
            parser.report(95);
        }
        if (t === -2147483528) {
            parser.report(95);
        }
    }
    if ((t & 20480) === 20480) {
        parser.report(102);
    }
    if (context & (2048 | 2) && t === 209006) {
        parser.report(110);
    }
    if (context & (1024 | 1) && t === 241771) {
        parser.report(97, 'yield');
    }
}
function isStrictReservedWord(parser, context, t) {
    if (t === 209006) {
        if (context & (2048 | 2)) parser.report(110);
        parser.destructible |= 128;
    }
    if (t === 241771 && context & 1024) parser.report(97, 'yield');
    return (t & 20480) === 20480 || (t & 36864) === 36864 || t == -2147483527;
}
function isPropertyWithPrivateFieldKey(expr) {
    return !expr.property ? false : expr.property.type === 'PrivateIdentifier';
}
function isValidLabel(parser, labels, name, isIterationStatement) {
    while(labels){
        if (labels['$' + name]) {
            if (isIterationStatement) parser.report(137);
            return 1;
        }
        if (isIterationStatement && labels.loop) isIterationStatement = 0;
        labels = labels['$'];
    }
    return 0;
}
function validateAndDeclareLabel(parser, labels, name) {
    let set = labels;
    while(set){
        if (set['$' + name]) parser.report(136, name);
        set = set['$'];
    }
    labels['$' + name] = 1;
}
function isEqualTagName(elementName) {
    switch(elementName.type){
        case 'JSXIdentifier':
            return elementName.name;
        case 'JSXNamespacedName':
            return elementName.namespace + ':' + elementName.name;
        case 'JSXMemberExpression':
            return isEqualTagName(elementName.object) + '.' + isEqualTagName(elementName.property);
    }
}
function isValidIdentifier(context, t) {
    if (context & (1 | 1024)) {
        if (context & 2 && t === 209006) return false;
        if (context & 1024 && t === 241771) return false;
        return (t & 12288) === 12288;
    }
    return (t & 12288) === 12288 || (t & 36864) === 36864;
}
function classifyIdentifier(parser, context, t) {
    if ((t & 537079808) === 537079808) {
        if (context & 1) parser.report(119);
        parser.flags |= 512;
    }
    if (!isValidIdentifier(context, t)) parser.report(0);
}
function getOwnProperty(object, key) {
    return Object.hasOwn(object, key) ? object[key] : undefined;
}
function scanIdentifier(parser, context, isValidAsKeyword) {
    while(isIdPart[advanceChar(parser)]);
    parser.tokenValue = parser.source.slice(parser.tokenIndex, parser.index);
    return parser.currentChar !== 92 && parser.currentChar <= 0x7e ? getOwnProperty(descKeywordTable, parser.tokenValue) ?? 208897 : scanIdentifierSlowCase(parser, context, 0, isValidAsKeyword);
}
function scanUnicodeIdentifier(parser, context) {
    const cookedChar = scanIdentifierUnicodeEscape(parser);
    if (!isIdentifierStart(cookedChar)) parser.report(5);
    parser.tokenValue = String.fromCodePoint(cookedChar);
    return scanIdentifierSlowCase(parser, context, 1, CharTypes[cookedChar] & 4);
}
function scanIdentifierSlowCase(parser, context, hasEscape, isValidAsKeyword) {
    let start = parser.index;
    while(parser.index < parser.end){
        if (parser.currentChar === 92) {
            parser.tokenValue += parser.source.slice(start, parser.index);
            hasEscape = 1;
            const code = scanIdentifierUnicodeEscape(parser);
            if (!isIdentifierPart(code)) parser.report(5);
            isValidAsKeyword = isValidAsKeyword && CharTypes[code] & 4;
            parser.tokenValue += String.fromCodePoint(code);
            start = parser.index;
        } else {
            const merged = consumePossibleSurrogatePair(parser);
            if (merged > 0) {
                if (!isIdentifierPart(merged)) {
                    parser.report(20, String.fromCodePoint(merged));
                }
                parser.currentChar = merged;
                parser.index++;
                parser.column++;
            } else if (!isIdentifierPart(parser.currentChar)) {
                break;
            }
            advanceChar(parser);
        }
    }
    if (parser.index <= parser.end) {
        parser.tokenValue += parser.source.slice(start, parser.index);
    }
    const { length } = parser.tokenValue;
    if (isValidAsKeyword && length >= 2 && length <= 11) {
        const token = getOwnProperty(descKeywordTable, parser.tokenValue);
        if (token === void 0) return 208897 | (hasEscape ? -2147483648 : 0);
        if (!hasEscape) return token;
        if (token === 209006) {
            if ((context & (2 | 2048)) === 0) {
                return token | -2147483648;
            }
            return -2147483528;
        }
        if (context & 1) {
            if (token === 36970) {
                return -2147483527;
            }
            if ((token & 36864) === 36864) {
                return -2147483527;
            }
            if ((token & 20480) === 20480) {
                if (context & 262144 && (context & 8) === 0) {
                    return token | -2147483648;
                } else {
                    return -2147483528;
                }
            }
            return 209018 | -2147483648;
        }
        if (context & 262144 && (context & 8) === 0 && (token & 20480) === 20480) {
            return token | -2147483648;
        }
        if (token === 241771) {
            return context & 262144 ? 209018 | -2147483648 : context & 1024 ? -2147483528 : token | -2147483648;
        }
        if (token === 209005) {
            return 209018 | -2147483648;
        }
        if ((token & 36864) === 36864) {
            return token | 12288 | -2147483648;
        }
        return -2147483528;
    }
    return 208897 | (hasEscape ? -2147483648 : 0);
}
function scanPrivateIdentifier(parser) {
    let char = advanceChar(parser);
    if (char === 92) return 130;
    const merged = consumePossibleSurrogatePair(parser);
    if (merged) char = merged;
    if (!isIdentifierStart(char)) parser.report(96);
    return 130;
}
function scanIdentifierUnicodeEscape(parser) {
    if (parser.source.charCodeAt(parser.index + 1) !== 117) {
        parser.report(5);
    }
    parser.currentChar = parser.source.charCodeAt(parser.index += 2);
    parser.column += 2;
    return scanUnicodeEscape(parser);
}
function scanUnicodeEscape(parser) {
    let codePoint = 0;
    const char = parser.currentChar;
    if (char === 123) {
        const begin = parser.index - 2;
        while(CharTypes[advanceChar(parser)] & 64){
            codePoint = codePoint << 4 | toHex(parser.currentChar);
            if (codePoint > 1114111) throw new ParseError({
                index: begin,
                line: parser.line,
                column: parser.column
            }, parser.currentLocation, 104);
        }
        if (parser.currentChar !== 125) {
            throw new ParseError({
                index: begin,
                line: parser.line,
                column: parser.column
            }, parser.currentLocation, 7);
        }
        advanceChar(parser);
        return codePoint;
    }
    if ((CharTypes[char] & 64) === 0) parser.report(7);
    const char2 = parser.source.charCodeAt(parser.index + 1);
    if ((CharTypes[char2] & 64) === 0) parser.report(7);
    const char3 = parser.source.charCodeAt(parser.index + 2);
    if ((CharTypes[char3] & 64) === 0) parser.report(7);
    const char4 = parser.source.charCodeAt(parser.index + 3);
    if ((CharTypes[char4] & 64) === 0) parser.report(7);
    codePoint = toHex(char) << 12 | toHex(char2) << 8 | toHex(char3) << 4 | toHex(char4);
    parser.currentChar = parser.source.charCodeAt(parser.index += 4);
    parser.column += 4;
    return codePoint;
}
const TokenLookup = [
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    127,
    135,
    127,
    127,
    129,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    127,
    16842798,
    134283267,
    130,
    208897,
    8391477,
    8390213,
    134283267,
    67174411,
    16,
    8391476,
    25233968,
    18,
    25233969,
    67108877,
    8457014,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    21,
    1074790417,
    8456256,
    1077936155,
    8390721,
    22,
    132,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    69271571,
    136,
    20,
    8389959,
    208897,
    131,
    4096,
    4096,
    4096,
    4096,
    4096,
    4096,
    4096,
    208897,
    4096,
    208897,
    208897,
    4096,
    208897,
    4096,
    208897,
    4096,
    208897,
    4096,
    4096,
    4096,
    208897,
    4096,
    4096,
    208897,
    4096,
    4096,
    2162700,
    8389702,
    1074790415,
    16842799,
    128
];
function nextToken(parser, context) {
    parser.flags = (parser.flags | 1) ^ 1;
    parser.startIndex = parser.index;
    parser.startColumn = parser.column;
    parser.startLine = parser.line;
    parser.setToken(scanSingleToken(parser, context, 0));
}
function scanSingleToken(parser, context, state) {
    const isStartOfLine = parser.index === 0;
    const { source } = parser;
    let start = parser.currentLocation;
    while(parser.index < parser.end){
        parser.tokenIndex = parser.index;
        parser.tokenColumn = parser.column;
        parser.tokenLine = parser.line;
        let char = parser.currentChar;
        if (char <= 0x7e) {
            const token = TokenLookup[char];
            switch(token){
                case 67174411:
                case 16:
                case 2162700:
                case 1074790415:
                case 69271571:
                case 20:
                case 21:
                case 1074790417:
                case 18:
                case 16842799:
                case 132:
                case 128:
                    advanceChar(parser);
                    return token;
                case 208897:
                    return scanIdentifier(parser, context, 0);
                case 4096:
                    return scanIdentifier(parser, context, 1);
                case 134283266:
                    return scanNumber(parser, context, 16 | 128);
                case 134283267:
                    return scanString(parser, context, char);
                case 131:
                    return scanTemplate(parser, context);
                case 136:
                    return scanUnicodeIdentifier(parser, context);
                case 130:
                    return scanPrivateIdentifier(parser);
                case 127:
                    advanceChar(parser);
                    break;
                case 129:
                    state |= 1 | 4;
                    scanNewLine(parser);
                    break;
                case 135:
                    consumeLineFeed(parser, state);
                    state = state & -5 | 1;
                    break;
                case 8456256:
                    {
                        const ch = advanceChar(parser);
                        if (parser.index < parser.end) {
                            if (ch === 60) {
                                if (parser.index < parser.end && advanceChar(parser) === 61) {
                                    advanceChar(parser);
                                    return 4194332;
                                }
                                return 8390978;
                            } else if (ch === 61) {
                                advanceChar(parser);
                                return 8390718;
                            }
                            if (ch === 33) {
                                const index = parser.index + 1;
                                if (index + 1 < parser.end && source.charCodeAt(index) === 45 && source.charCodeAt(index + 1) == 45) {
                                    parser.column += 3;
                                    parser.currentChar = source.charCodeAt(parser.index += 3);
                                    state = skipSingleHTMLComment(parser, source, state, context, 2, parser.tokenStart);
                                    start = parser.tokenStart;
                                    continue;
                                }
                                return 8456256;
                            }
                        }
                        return 8456256;
                    }
                case 1077936155:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 61) {
                            if (advanceChar(parser) === 61) {
                                advanceChar(parser);
                                return 8390458;
                            }
                            return 8390460;
                        }
                        if (ch === 62) {
                            advanceChar(parser);
                            return 10;
                        }
                        return 1077936155;
                    }
                case 16842798:
                    if (advanceChar(parser) !== 61) {
                        return 16842798;
                    }
                    if (advanceChar(parser) !== 61) {
                        return 8390461;
                    }
                    advanceChar(parser);
                    return 8390459;
                case 8391477:
                    if (advanceChar(parser) !== 61) return 8391477;
                    advanceChar(parser);
                    return 4194340;
                case 8391476:
                    {
                        advanceChar(parser);
                        if (parser.index >= parser.end) return 8391476;
                        const ch = parser.currentChar;
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194338;
                        }
                        if (ch !== 42) return 8391476;
                        if (advanceChar(parser) !== 61) return 8391735;
                        advanceChar(parser);
                        return 4194335;
                    }
                case 8389959:
                    if (advanceChar(parser) !== 61) return 8389959;
                    advanceChar(parser);
                    return 4194341;
                case 25233968:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 43) {
                            advanceChar(parser);
                            return 33619993;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194336;
                        }
                        return 25233968;
                    }
                case 25233969:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 45) {
                            advanceChar(parser);
                            if ((state & 1 || isStartOfLine) && parser.currentChar === 62) {
                                if (!parser.options.webcompat) parser.report(112);
                                advanceChar(parser);
                                state = skipSingleHTMLComment(parser, source, state, context, 3, start);
                                start = parser.tokenStart;
                                continue;
                            }
                            return 33619994;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194337;
                        }
                        return 25233969;
                    }
                case 8457014:
                    {
                        advanceChar(parser);
                        if (parser.index < parser.end) {
                            const ch = parser.currentChar;
                            if (ch === 47) {
                                advanceChar(parser);
                                state = skipSingleLineComment(parser, source, state, 0, parser.tokenStart);
                                start = parser.tokenStart;
                                continue;
                            }
                            if (ch === 42) {
                                advanceChar(parser);
                                state = skipMultiLineComment(parser, source, state);
                                start = parser.tokenStart;
                                continue;
                            }
                            if (context & 32) {
                                return scanRegularExpression(parser);
                            }
                            if (ch === 61) {
                                advanceChar(parser);
                                return 4259875;
                            }
                        }
                        return 8457014;
                    }
                case 67108877:
                    {
                        const next = advanceChar(parser);
                        if (next >= 48 && next <= 57) return scanNumber(parser, context, 64 | 16);
                        if (next === 46) {
                            const index = parser.index + 1;
                            if (index < parser.end && source.charCodeAt(index) === 46) {
                                parser.column += 2;
                                parser.currentChar = source.charCodeAt(parser.index += 2);
                                return 14;
                            }
                        }
                        return 67108877;
                    }
                case 8389702:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 124) {
                            advanceChar(parser);
                            if (parser.currentChar === 61) {
                                advanceChar(parser);
                                return 4194344;
                            }
                            return 8913465;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194342;
                        }
                        return 8389702;
                    }
                case 8390721:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 61) {
                            advanceChar(parser);
                            return 8390719;
                        }
                        if (ch !== 62) return 8390721;
                        advanceChar(parser);
                        if (parser.index < parser.end) {
                            const ch = parser.currentChar;
                            if (ch === 62) {
                                if (advanceChar(parser) === 61) {
                                    advanceChar(parser);
                                    return 4194334;
                                }
                                return 8390980;
                            }
                            if (ch === 61) {
                                advanceChar(parser);
                                return 4194333;
                            }
                        }
                        return 8390979;
                    }
                case 8390213:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 38) {
                            advanceChar(parser);
                            if (parser.currentChar === 61) {
                                advanceChar(parser);
                                return 4194345;
                            }
                            return 8913720;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194343;
                        }
                        return 8390213;
                    }
                case 22:
                    {
                        let ch = advanceChar(parser);
                        if (ch === 63) {
                            advanceChar(parser);
                            if (parser.currentChar === 61) {
                                advanceChar(parser);
                                return 4194346;
                            }
                            return 276824445;
                        }
                        if (ch === 46) {
                            const index = parser.index + 1;
                            if (index < parser.end) {
                                ch = source.charCodeAt(index);
                                if (!(ch >= 48 && ch <= 57)) {
                                    advanceChar(parser);
                                    return 67108990;
                                }
                            }
                        }
                        return 22;
                    }
            }
        } else {
            if ((char ^ 8232) <= 1) {
                state = state & -5 | 1;
                scanNewLine(parser);
                continue;
            }
            const merged = consumePossibleSurrogatePair(parser);
            if (merged > 0) char = merged;
            if (isIDStart(char)) {
                parser.tokenValue = '';
                return scanIdentifierSlowCase(parser, context, 0, 0);
            }
            if (isExoticECMAScriptWhitespace(char)) {
                advanceChar(parser);
                continue;
            }
            parser.report(20, String.fromCodePoint(char));
        }
    }
    return 1048576;
}
const entities = {
    AElig: '\u00C6',
    AMP: '\u0026',
    Aacute: '\u00C1',
    Abreve: '\u0102',
    Acirc: '\u00C2',
    Acy: '\u0410',
    Afr: '\uD835\uDD04',
    Agrave: '\u00C0',
    Alpha: '\u0391',
    Amacr: '\u0100',
    And: '\u2A53',
    Aogon: '\u0104',
    Aopf: '\uD835\uDD38',
    ApplyFunction: '\u2061',
    Aring: '\u00C5',
    Ascr: '\uD835\uDC9C',
    Assign: '\u2254',
    Atilde: '\u00C3',
    Auml: '\u00C4',
    Backslash: '\u2216',
    Barv: '\u2AE7',
    Barwed: '\u2306',
    Bcy: '\u0411',
    Because: '\u2235',
    Bernoullis: '\u212C',
    Beta: '\u0392',
    Bfr: '\uD835\uDD05',
    Bopf: '\uD835\uDD39',
    Breve: '\u02D8',
    Bscr: '\u212C',
    Bumpeq: '\u224E',
    CHcy: '\u0427',
    COPY: '\u00A9',
    Cacute: '\u0106',
    Cap: '\u22D2',
    CapitalDifferentialD: '\u2145',
    Cayleys: '\u212D',
    Ccaron: '\u010C',
    Ccedil: '\u00C7',
    Ccirc: '\u0108',
    Cconint: '\u2230',
    Cdot: '\u010A',
    Cedilla: '\u00B8',
    CenterDot: '\u00B7',
    Cfr: '\u212D',
    Chi: '\u03A7',
    CircleDot: '\u2299',
    CircleMinus: '\u2296',
    CirclePlus: '\u2295',
    CircleTimes: '\u2297',
    ClockwiseContourIntegral: '\u2232',
    CloseCurlyDoubleQuote: '\u201D',
    CloseCurlyQuote: '\u2019',
    Colon: '\u2237',
    Colone: '\u2A74',
    Congruent: '\u2261',
    Conint: '\u222F',
    ContourIntegral: '\u222E',
    Copf: '\u2102',
    Coproduct: '\u2210',
    CounterClockwiseContourIntegral: '\u2233',
    Cross: '\u2A2F',
    Cscr: '\uD835\uDC9E',
    Cup: '\u22D3',
    CupCap: '\u224D',
    DD: '\u2145',
    DDotrahd: '\u2911',
    DJcy: '\u0402',
    DScy: '\u0405',
    DZcy: '\u040F',
    Dagger: '\u2021',
    Darr: '\u21A1',
    Dashv: '\u2AE4',
    Dcaron: '\u010E',
    Dcy: '\u0414',
    Del: '\u2207',
    Delta: '\u0394',
    Dfr: '\uD835\uDD07',
    DiacriticalAcute: '\u00B4',
    DiacriticalDot: '\u02D9',
    DiacriticalDoubleAcute: '\u02DD',
    DiacriticalGrave: '\u0060',
    DiacriticalTilde: '\u02DC',
    Diamond: '\u22C4',
    DifferentialD: '\u2146',
    Dopf: '\uD835\uDD3B',
    Dot: '\u00A8',
    DotDot: '\u20DC',
    DotEqual: '\u2250',
    DoubleContourIntegral: '\u222F',
    DoubleDot: '\u00A8',
    DoubleDownArrow: '\u21D3',
    DoubleLeftArrow: '\u21D0',
    DoubleLeftRightArrow: '\u21D4',
    DoubleLeftTee: '\u2AE4',
    DoubleLongLeftArrow: '\u27F8',
    DoubleLongLeftRightArrow: '\u27FA',
    DoubleLongRightArrow: '\u27F9',
    DoubleRightArrow: '\u21D2',
    DoubleRightTee: '\u22A8',
    DoubleUpArrow: '\u21D1',
    DoubleUpDownArrow: '\u21D5',
    DoubleVerticalBar: '\u2225',
    DownArrow: '\u2193',
    DownArrowBar: '\u2913',
    DownArrowUpArrow: '\u21F5',
    DownBreve: '\u0311',
    DownLeftRightVector: '\u2950',
    DownLeftTeeVector: '\u295E',
    DownLeftVector: '\u21BD',
    DownLeftVectorBar: '\u2956',
    DownRightTeeVector: '\u295F',
    DownRightVector: '\u21C1',
    DownRightVectorBar: '\u2957',
    DownTee: '\u22A4',
    DownTeeArrow: '\u21A7',
    Downarrow: '\u21D3',
    Dscr: '\uD835\uDC9F',
    Dstrok: '\u0110',
    ENG: '\u014A',
    ETH: '\u00D0',
    Eacute: '\u00C9',
    Ecaron: '\u011A',
    Ecirc: '\u00CA',
    Ecy: '\u042D',
    Edot: '\u0116',
    Efr: '\uD835\uDD08',
    Egrave: '\u00C8',
    Element: '\u2208',
    Emacr: '\u0112',
    EmptySmallSquare: '\u25FB',
    EmptyVerySmallSquare: '\u25AB',
    Eogon: '\u0118',
    Eopf: '\uD835\uDD3C',
    Epsilon: '\u0395',
    Equal: '\u2A75',
    EqualTilde: '\u2242',
    Equilibrium: '\u21CC',
    Escr: '\u2130',
    Esim: '\u2A73',
    Eta: '\u0397',
    Euml: '\u00CB',
    Exists: '\u2203',
    ExponentialE: '\u2147',
    Fcy: '\u0424',
    Ffr: '\uD835\uDD09',
    FilledSmallSquare: '\u25FC',
    FilledVerySmallSquare: '\u25AA',
    Fopf: '\uD835\uDD3D',
    ForAll: '\u2200',
    Fouriertrf: '\u2131',
    Fscr: '\u2131',
    GJcy: '\u0403',
    GT: '\u003E',
    Gamma: '\u0393',
    Gammad: '\u03DC',
    Gbreve: '\u011E',
    Gcedil: '\u0122',
    Gcirc: '\u011C',
    Gcy: '\u0413',
    Gdot: '\u0120',
    Gfr: '\uD835\uDD0A',
    Gg: '\u22D9',
    Gopf: '\uD835\uDD3E',
    GreaterEqual: '\u2265',
    GreaterEqualLess: '\u22DB',
    GreaterFullEqual: '\u2267',
    GreaterGreater: '\u2AA2',
    GreaterLess: '\u2277',
    GreaterSlantEqual: '\u2A7E',
    GreaterTilde: '\u2273',
    Gscr: '\uD835\uDCA2',
    Gt: '\u226B',
    HARDcy: '\u042A',
    Hacek: '\u02C7',
    Hat: '\u005E',
    Hcirc: '\u0124',
    Hfr: '\u210C',
    HilbertSpace: '\u210B',
    Hopf: '\u210D',
    HorizontalLine: '\u2500',
    Hscr: '\u210B',
    Hstrok: '\u0126',
    HumpDownHump: '\u224E',
    HumpEqual: '\u224F',
    IEcy: '\u0415',
    IJlig: '\u0132',
    IOcy: '\u0401',
    Iacute: '\u00CD',
    Icirc: '\u00CE',
    Icy: '\u0418',
    Idot: '\u0130',
    Ifr: '\u2111',
    Igrave: '\u00CC',
    Im: '\u2111',
    Imacr: '\u012A',
    ImaginaryI: '\u2148',
    Implies: '\u21D2',
    Int: '\u222C',
    Integral: '\u222B',
    Intersection: '\u22C2',
    InvisibleComma: '\u2063',
    InvisibleTimes: '\u2062',
    Iogon: '\u012E',
    Iopf: '\uD835\uDD40',
    Iota: '\u0399',
    Iscr: '\u2110',
    Itilde: '\u0128',
    Iukcy: '\u0406',
    Iuml: '\u00CF',
    Jcirc: '\u0134',
    Jcy: '\u0419',
    Jfr: '\uD835\uDD0D',
    Jopf: '\uD835\uDD41',
    Jscr: '\uD835\uDCA5',
    Jsercy: '\u0408',
    Jukcy: '\u0404',
    KHcy: '\u0425',
    KJcy: '\u040C',
    Kappa: '\u039A',
    Kcedil: '\u0136',
    Kcy: '\u041A',
    Kfr: '\uD835\uDD0E',
    Kopf: '\uD835\uDD42',
    Kscr: '\uD835\uDCA6',
    LJcy: '\u0409',
    LT: '\u003C',
    Lacute: '\u0139',
    Lambda: '\u039B',
    Lang: '\u27EA',
    Laplacetrf: '\u2112',
    Larr: '\u219E',
    Lcaron: '\u013D',
    Lcedil: '\u013B',
    Lcy: '\u041B',
    LeftAngleBracket: '\u27E8',
    LeftArrow: '\u2190',
    LeftArrowBar: '\u21E4',
    LeftArrowRightArrow: '\u21C6',
    LeftCeiling: '\u2308',
    LeftDoubleBracket: '\u27E6',
    LeftDownTeeVector: '\u2961',
    LeftDownVector: '\u21C3',
    LeftDownVectorBar: '\u2959',
    LeftFloor: '\u230A',
    LeftRightArrow: '\u2194',
    LeftRightVector: '\u294E',
    LeftTee: '\u22A3',
    LeftTeeArrow: '\u21A4',
    LeftTeeVector: '\u295A',
    LeftTriangle: '\u22B2',
    LeftTriangleBar: '\u29CF',
    LeftTriangleEqual: '\u22B4',
    LeftUpDownVector: '\u2951',
    LeftUpTeeVector: '\u2960',
    LeftUpVector: '\u21BF',
    LeftUpVectorBar: '\u2958',
    LeftVector: '\u21BC',
    LeftVectorBar: '\u2952',
    Leftarrow: '\u21D0',
    Leftrightarrow: '\u21D4',
    LessEqualGreater: '\u22DA',
    LessFullEqual: '\u2266',
    LessGreater: '\u2276',
    LessLess: '\u2AA1',
    LessSlantEqual: '\u2A7D',
    LessTilde: '\u2272',
    Lfr: '\uD835\uDD0F',
    Ll: '\u22D8',
    Lleftarrow: '\u21DA',
    Lmidot: '\u013F',
    LongLeftArrow: '\u27F5',
    LongLeftRightArrow: '\u27F7',
    LongRightArrow: '\u27F6',
    Longleftarrow: '\u27F8',
    Longleftrightarrow: '\u27FA',
    Longrightarrow: '\u27F9',
    Lopf: '\uD835\uDD43',
    LowerLeftArrow: '\u2199',
    LowerRightArrow: '\u2198',
    Lscr: '\u2112',
    Lsh: '\u21B0',
    Lstrok: '\u0141',
    Lt: '\u226A',
    Map: '\u2905',
    Mcy: '\u041C',
    MediumSpace: '\u205F',
    Mellintrf: '\u2133',
    Mfr: '\uD835\uDD10',
    MinusPlus: '\u2213',
    Mopf: '\uD835\uDD44',
    Mscr: '\u2133',
    Mu: '\u039C',
    NJcy: '\u040A',
    Nacute: '\u0143',
    Ncaron: '\u0147',
    Ncedil: '\u0145',
    Ncy: '\u041D',
    NegativeMediumSpace: '\u200B',
    NegativeThickSpace: '\u200B',
    NegativeThinSpace: '\u200B',
    NegativeVeryThinSpace: '\u200B',
    NestedGreaterGreater: '\u226B',
    NestedLessLess: '\u226A',
    NewLine: '\u000A',
    Nfr: '\uD835\uDD11',
    NoBreak: '\u2060',
    NonBreakingSpace: '\u00A0',
    Nopf: '\u2115',
    Not: '\u2AEC',
    NotCongruent: '\u2262',
    NotCupCap: '\u226D',
    NotDoubleVerticalBar: '\u2226',
    NotElement: '\u2209',
    NotEqual: '\u2260',
    NotEqualTilde: '\u2242\u0338',
    NotExists: '\u2204',
    NotGreater: '\u226F',
    NotGreaterEqual: '\u2271',
    NotGreaterFullEqual: '\u2267\u0338',
    NotGreaterGreater: '\u226B\u0338',
    NotGreaterLess: '\u2279',
    NotGreaterSlantEqual: '\u2A7E\u0338',
    NotGreaterTilde: '\u2275',
    NotHumpDownHump: '\u224E\u0338',
    NotHumpEqual: '\u224F\u0338',
    NotLeftTriangle: '\u22EA',
    NotLeftTriangleBar: '\u29CF\u0338',
    NotLeftTriangleEqual: '\u22EC',
    NotLess: '\u226E',
    NotLessEqual: '\u2270',
    NotLessGreater: '\u2278',
    NotLessLess: '\u226A\u0338',
    NotLessSlantEqual: '\u2A7D\u0338',
    NotLessTilde: '\u2274',
    NotNestedGreaterGreater: '\u2AA2\u0338',
    NotNestedLessLess: '\u2AA1\u0338',
    NotPrecedes: '\u2280',
    NotPrecedesEqual: '\u2AAF\u0338',
    NotPrecedesSlantEqual: '\u22E0',
    NotReverseElement: '\u220C',
    NotRightTriangle: '\u22EB',
    NotRightTriangleBar: '\u29D0\u0338',
    NotRightTriangleEqual: '\u22ED',
    NotSquareSubset: '\u228F\u0338',
    NotSquareSubsetEqual: '\u22E2',
    NotSquareSuperset: '\u2290\u0338',
    NotSquareSupersetEqual: '\u22E3',
    NotSubset: '\u2282\u20D2',
    NotSubsetEqual: '\u2288',
    NotSucceeds: '\u2281',
    NotSucceedsEqual: '\u2AB0\u0338',
    NotSucceedsSlantEqual: '\u22E1',
    NotSucceedsTilde: '\u227F\u0338',
    NotSuperset: '\u2283\u20D2',
    NotSupersetEqual: '\u2289',
    NotTilde: '\u2241',
    NotTildeEqual: '\u2244',
    NotTildeFullEqual: '\u2247',
    NotTildeTilde: '\u2249',
    NotVerticalBar: '\u2224',
    Nscr: '\uD835\uDCA9',
    Ntilde: '\u00D1',
    Nu: '\u039D',
    OElig: '\u0152',
    Oacute: '\u00D3',
    Ocirc: '\u00D4',
    Ocy: '\u041E',
    Odblac: '\u0150',
    Ofr: '\uD835\uDD12',
    Ograve: '\u00D2',
    Omacr: '\u014C',
    Omega: '\u03A9',
    Omicron: '\u039F',
    Oopf: '\uD835\uDD46',
    OpenCurlyDoubleQuote: '\u201C',
    OpenCurlyQuote: '\u2018',
    Or: '\u2A54',
    Oscr: '\uD835\uDCAA',
    Oslash: '\u00D8',
    Otilde: '\u00D5',
    Otimes: '\u2A37',
    Ouml: '\u00D6',
    OverBar: '\u203E',
    OverBrace: '\u23DE',
    OverBracket: '\u23B4',
    OverParenthesis: '\u23DC',
    PartialD: '\u2202',
    Pcy: '\u041F',
    Pfr: '\uD835\uDD13',
    Phi: '\u03A6',
    Pi: '\u03A0',
    PlusMinus: '\u00B1',
    Poincareplane: '\u210C',
    Popf: '\u2119',
    Pr: '\u2ABB',
    Precedes: '\u227A',
    PrecedesEqual: '\u2AAF',
    PrecedesSlantEqual: '\u227C',
    PrecedesTilde: '\u227E',
    Prime: '\u2033',
    Product: '\u220F',
    Proportion: '\u2237',
    Proportional: '\u221D',
    Pscr: '\uD835\uDCAB',
    Psi: '\u03A8',
    QUOT: '\u0022',
    Qfr: '\uD835\uDD14',
    Qopf: '\u211A',
    Qscr: '\uD835\uDCAC',
    RBarr: '\u2910',
    REG: '\u00AE',
    Racute: '\u0154',
    Rang: '\u27EB',
    Rarr: '\u21A0',
    Rarrtl: '\u2916',
    Rcaron: '\u0158',
    Rcedil: '\u0156',
    Rcy: '\u0420',
    Re: '\u211C',
    ReverseElement: '\u220B',
    ReverseEquilibrium: '\u21CB',
    ReverseUpEquilibrium: '\u296F',
    Rfr: '\u211C',
    Rho: '\u03A1',
    RightAngleBracket: '\u27E9',
    RightArrow: '\u2192',
    RightArrowBar: '\u21E5',
    RightArrowLeftArrow: '\u21C4',
    RightCeiling: '\u2309',
    RightDoubleBracket: '\u27E7',
    RightDownTeeVector: '\u295D',
    RightDownVector: '\u21C2',
    RightDownVectorBar: '\u2955',
    RightFloor: '\u230B',
    RightTee: '\u22A2',
    RightTeeArrow: '\u21A6',
    RightTeeVector: '\u295B',
    RightTriangle: '\u22B3',
    RightTriangleBar: '\u29D0',
    RightTriangleEqual: '\u22B5',
    RightUpDownVector: '\u294F',
    RightUpTeeVector: '\u295C',
    RightUpVector: '\u21BE',
    RightUpVectorBar: '\u2954',
    RightVector: '\u21C0',
    RightVectorBar: '\u2953',
    Rightarrow: '\u21D2',
    Ropf: '\u211D',
    RoundImplies: '\u2970',
    Rrightarrow: '\u21DB',
    Rscr: '\u211B',
    Rsh: '\u21B1',
    RuleDelayed: '\u29F4',
    SHCHcy: '\u0429',
    SHcy: '\u0428',
    SOFTcy: '\u042C',
    Sacute: '\u015A',
    Sc: '\u2ABC',
    Scaron: '\u0160',
    Scedil: '\u015E',
    Scirc: '\u015C',
    Scy: '\u0421',
    Sfr: '\uD835\uDD16',
    ShortDownArrow: '\u2193',
    ShortLeftArrow: '\u2190',
    ShortRightArrow: '\u2192',
    ShortUpArrow: '\u2191',
    Sigma: '\u03A3',
    SmallCircle: '\u2218',
    Sopf: '\uD835\uDD4A',
    Sqrt: '\u221A',
    Square: '\u25A1',
    SquareIntersection: '\u2293',
    SquareSubset: '\u228F',
    SquareSubsetEqual: '\u2291',
    SquareSuperset: '\u2290',
    SquareSupersetEqual: '\u2292',
    SquareUnion: '\u2294',
    Sscr: '\uD835\uDCAE',
    Star: '\u22C6',
    Sub: '\u22D0',
    Subset: '\u22D0',
    SubsetEqual: '\u2286',
    Succeeds: '\u227B',
    SucceedsEqual: '\u2AB0',
    SucceedsSlantEqual: '\u227D',
    SucceedsTilde: '\u227F',
    SuchThat: '\u220B',
    Sum: '\u2211',
    Sup: '\u22D1',
    Superset: '\u2283',
    SupersetEqual: '\u2287',
    Supset: '\u22D1',
    THORN: '\u00DE',
    TRADE: '\u2122',
    TSHcy: '\u040B',
    TScy: '\u0426',
    Tab: '\u0009',
    Tau: '\u03A4',
    Tcaron: '\u0164',
    Tcedil: '\u0162',
    Tcy: '\u0422',
    Tfr: '\uD835\uDD17',
    Therefore: '\u2234',
    Theta: '\u0398',
    ThickSpace: '\u205F\u200A',
    ThinSpace: '\u2009',
    Tilde: '\u223C',
    TildeEqual: '\u2243',
    TildeFullEqual: '\u2245',
    TildeTilde: '\u2248',
    Topf: '\uD835\uDD4B',
    TripleDot: '\u20DB',
    Tscr: '\uD835\uDCAF',
    Tstrok: '\u0166',
    Uacute: '\u00DA',
    Uarr: '\u219F',
    Uarrocir: '\u2949',
    Ubrcy: '\u040E',
    Ubreve: '\u016C',
    Ucirc: '\u00DB',
    Ucy: '\u0423',
    Udblac: '\u0170',
    Ufr: '\uD835\uDD18',
    Ugrave: '\u00D9',
    Umacr: '\u016A',
    UnderBar: '\u005F',
    UnderBrace: '\u23DF',
    UnderBracket: '\u23B5',
    UnderParenthesis: '\u23DD',
    Union: '\u22C3',
    UnionPlus: '\u228E',
    Uogon: '\u0172',
    Uopf: '\uD835\uDD4C',
    UpArrow: '\u2191',
    UpArrowBar: '\u2912',
    UpArrowDownArrow: '\u21C5',
    UpDownArrow: '\u2195',
    UpEquilibrium: '\u296E',
    UpTee: '\u22A5',
    UpTeeArrow: '\u21A5',
    Uparrow: '\u21D1',
    Updownarrow: '\u21D5',
    UpperLeftArrow: '\u2196',
    UpperRightArrow: '\u2197',
    Upsi: '\u03D2',
    Upsilon: '\u03A5',
    Uring: '\u016E',
    Uscr: '\uD835\uDCB0',
    Utilde: '\u0168',
    Uuml: '\u00DC',
    VDash: '\u22AB',
    Vbar: '\u2AEB',
    Vcy: '\u0412',
    Vdash: '\u22A9',
    Vdashl: '\u2AE6',
    Vee: '\u22C1',
    Verbar: '\u2016',
    Vert: '\u2016',
    VerticalBar: '\u2223',
    VerticalLine: '\u007C',
    VerticalSeparator: '\u2758',
    VerticalTilde: '\u2240',
    VeryThinSpace: '\u200A',
    Vfr: '\uD835\uDD19',
    Vopf: '\uD835\uDD4D',
    Vscr: '\uD835\uDCB1',
    Vvdash: '\u22AA',
    Wcirc: '\u0174',
    Wedge: '\u22C0',
    Wfr: '\uD835\uDD1A',
    Wopf: '\uD835\uDD4E',
    Wscr: '\uD835\uDCB2',
    Xfr: '\uD835\uDD1B',
    Xi: '\u039E',
    Xopf: '\uD835\uDD4F',
    Xscr: '\uD835\uDCB3',
    YAcy: '\u042F',
    YIcy: '\u0407',
    YUcy: '\u042E',
    Yacute: '\u00DD',
    Ycirc: '\u0176',
    Ycy: '\u042B',
    Yfr: '\uD835\uDD1C',
    Yopf: '\uD835\uDD50',
    Yscr: '\uD835\uDCB4',
    Yuml: '\u0178',
    ZHcy: '\u0416',
    Zacute: '\u0179',
    Zcaron: '\u017D',
    Zcy: '\u0417',
    Zdot: '\u017B',
    ZeroWidthSpace: '\u200B',
    Zeta: '\u0396',
    Zfr: '\u2128',
    Zopf: '\u2124',
    Zscr: '\uD835\uDCB5',
    aacute: '\u00E1',
    abreve: '\u0103',
    ac: '\u223E',
    acE: '\u223E\u0333',
    acd: '\u223F',
    acirc: '\u00E2',
    acute: '\u00B4',
    acy: '\u0430',
    aelig: '\u00E6',
    af: '\u2061',
    afr: '\uD835\uDD1E',
    agrave: '\u00E0',
    alefsym: '\u2135',
    aleph: '\u2135',
    alpha: '\u03B1',
    amacr: '\u0101',
    amalg: '\u2A3F',
    amp: '\u0026',
    and: '\u2227',
    andand: '\u2A55',
    andd: '\u2A5C',
    andslope: '\u2A58',
    andv: '\u2A5A',
    ang: '\u2220',
    ange: '\u29A4',
    angle: '\u2220',
    angmsd: '\u2221',
    angmsdaa: '\u29A8',
    angmsdab: '\u29A9',
    angmsdac: '\u29AA',
    angmsdad: '\u29AB',
    angmsdae: '\u29AC',
    angmsdaf: '\u29AD',
    angmsdag: '\u29AE',
    angmsdah: '\u29AF',
    angrt: '\u221F',
    angrtvb: '\u22BE',
    angrtvbd: '\u299D',
    angsph: '\u2222',
    angst: '\u00C5',
    angzarr: '\u237C',
    aogon: '\u0105',
    aopf: '\uD835\uDD52',
    ap: '\u2248',
    apE: '\u2A70',
    apacir: '\u2A6F',
    ape: '\u224A',
    apid: '\u224B',
    apos: '\u0027',
    approx: '\u2248',
    approxeq: '\u224A',
    aring: '\u00E5',
    ascr: '\uD835\uDCB6',
    ast: '\u002A',
    asymp: '\u2248',
    asympeq: '\u224D',
    atilde: '\u00E3',
    auml: '\u00E4',
    awconint: '\u2233',
    awint: '\u2A11',
    bNot: '\u2AED',
    backcong: '\u224C',
    backepsilon: '\u03F6',
    backprime: '\u2035',
    backsim: '\u223D',
    backsimeq: '\u22CD',
    barvee: '\u22BD',
    barwed: '\u2305',
    barwedge: '\u2305',
    bbrk: '\u23B5',
    bbrktbrk: '\u23B6',
    bcong: '\u224C',
    bcy: '\u0431',
    bdquo: '\u201E',
    becaus: '\u2235',
    because: '\u2235',
    bemptyv: '\u29B0',
    bepsi: '\u03F6',
    bernou: '\u212C',
    beta: '\u03B2',
    beth: '\u2136',
    between: '\u226C',
    bfr: '\uD835\uDD1F',
    bigcap: '\u22C2',
    bigcirc: '\u25EF',
    bigcup: '\u22C3',
    bigodot: '\u2A00',
    bigoplus: '\u2A01',
    bigotimes: '\u2A02',
    bigsqcup: '\u2A06',
    bigstar: '\u2605',
    bigtriangledown: '\u25BD',
    bigtriangleup: '\u25B3',
    biguplus: '\u2A04',
    bigvee: '\u22C1',
    bigwedge: '\u22C0',
    bkarow: '\u290D',
    blacklozenge: '\u29EB',
    blacksquare: '\u25AA',
    blacktriangle: '\u25B4',
    blacktriangledown: '\u25BE',
    blacktriangleleft: '\u25C2',
    blacktriangleright: '\u25B8',
    blank: '\u2423',
    blk12: '\u2592',
    blk14: '\u2591',
    blk34: '\u2593',
    block: '\u2588',
    bne: '\u003D\u20E5',
    bnequiv: '\u2261\u20E5',
    bnot: '\u2310',
    bopf: '\uD835\uDD53',
    bot: '\u22A5',
    bottom: '\u22A5',
    bowtie: '\u22C8',
    boxDL: '\u2557',
    boxDR: '\u2554',
    boxDl: '\u2556',
    boxDr: '\u2553',
    boxH: '\u2550',
    boxHD: '\u2566',
    boxHU: '\u2569',
    boxHd: '\u2564',
    boxHu: '\u2567',
    boxUL: '\u255D',
    boxUR: '\u255A',
    boxUl: '\u255C',
    boxUr: '\u2559',
    boxV: '\u2551',
    boxVH: '\u256C',
    boxVL: '\u2563',
    boxVR: '\u2560',
    boxVh: '\u256B',
    boxVl: '\u2562',
    boxVr: '\u255F',
    boxbox: '\u29C9',
    boxdL: '\u2555',
    boxdR: '\u2552',
    boxdl: '\u2510',
    boxdr: '\u250C',
    boxh: '\u2500',
    boxhD: '\u2565',
    boxhU: '\u2568',
    boxhd: '\u252C',
    boxhu: '\u2534',
    boxminus: '\u229F',
    boxplus: '\u229E',
    boxtimes: '\u22A0',
    boxuL: '\u255B',
    boxuR: '\u2558',
    boxul: '\u2518',
    boxur: '\u2514',
    boxv: '\u2502',
    boxvH: '\u256A',
    boxvL: '\u2561',
    boxvR: '\u255E',
    boxvh: '\u253C',
    boxvl: '\u2524',
    boxvr: '\u251C',
    bprime: '\u2035',
    breve: '\u02D8',
    brvbar: '\u00A6',
    bscr: '\uD835\uDCB7',
    bsemi: '\u204F',
    bsim: '\u223D',
    bsime: '\u22CD',
    bsol: '\u005C',
    bsolb: '\u29C5',
    bsolhsub: '\u27C8',
    bull: '\u2022',
    bullet: '\u2022',
    bump: '\u224E',
    bumpE: '\u2AAE',
    bumpe: '\u224F',
    bumpeq: '\u224F',
    cacute: '\u0107',
    cap: '\u2229',
    capand: '\u2A44',
    capbrcup: '\u2A49',
    capcap: '\u2A4B',
    capcup: '\u2A47',
    capdot: '\u2A40',
    caps: '\u2229\uFE00',
    caret: '\u2041',
    caron: '\u02C7',
    ccaps: '\u2A4D',
    ccaron: '\u010D',
    ccedil: '\u00E7',
    ccirc: '\u0109',
    ccups: '\u2A4C',
    ccupssm: '\u2A50',
    cdot: '\u010B',
    cedil: '\u00B8',
    cemptyv: '\u29B2',
    cent: '\u00A2',
    centerdot: '\u00B7',
    cfr: '\uD835\uDD20',
    chcy: '\u0447',
    check: '\u2713',
    checkmark: '\u2713',
    chi: '\u03C7',
    cir: '\u25CB',
    cirE: '\u29C3',
    circ: '\u02C6',
    circeq: '\u2257',
    circlearrowleft: '\u21BA',
    circlearrowright: '\u21BB',
    circledR: '\u00AE',
    circledS: '\u24C8',
    circledast: '\u229B',
    circledcirc: '\u229A',
    circleddash: '\u229D',
    cire: '\u2257',
    cirfnint: '\u2A10',
    cirmid: '\u2AEF',
    cirscir: '\u29C2',
    clubs: '\u2663',
    clubsuit: '\u2663',
    colon: '\u003A',
    colone: '\u2254',
    coloneq: '\u2254',
    comma: '\u002C',
    commat: '\u0040',
    comp: '\u2201',
    compfn: '\u2218',
    complement: '\u2201',
    complexes: '\u2102',
    cong: '\u2245',
    congdot: '\u2A6D',
    conint: '\u222E',
    copf: '\uD835\uDD54',
    coprod: '\u2210',
    copy: '\u00A9',
    copysr: '\u2117',
    crarr: '\u21B5',
    cross: '\u2717',
    cscr: '\uD835\uDCB8',
    csub: '\u2ACF',
    csube: '\u2AD1',
    csup: '\u2AD0',
    csupe: '\u2AD2',
    ctdot: '\u22EF',
    cudarrl: '\u2938',
    cudarrr: '\u2935',
    cuepr: '\u22DE',
    cuesc: '\u22DF',
    cularr: '\u21B6',
    cularrp: '\u293D',
    cup: '\u222A',
    cupbrcap: '\u2A48',
    cupcap: '\u2A46',
    cupcup: '\u2A4A',
    cupdot: '\u228D',
    cupor: '\u2A45',
    cups: '\u222A\uFE00',
    curarr: '\u21B7',
    curarrm: '\u293C',
    curlyeqprec: '\u22DE',
    curlyeqsucc: '\u22DF',
    curlyvee: '\u22CE',
    curlywedge: '\u22CF',
    curren: '\u00A4',
    curvearrowleft: '\u21B6',
    curvearrowright: '\u21B7',
    cuvee: '\u22CE',
    cuwed: '\u22CF',
    cwconint: '\u2232',
    cwint: '\u2231',
    cylcty: '\u232D',
    dArr: '\u21D3',
    dHar: '\u2965',
    dagger: '\u2020',
    daleth: '\u2138',
    darr: '\u2193',
    dash: '\u2010',
    dashv: '\u22A3',
    dbkarow: '\u290F',
    dblac: '\u02DD',
    dcaron: '\u010F',
    dcy: '\u0434',
    dd: '\u2146',
    ddagger: '\u2021',
    ddarr: '\u21CA',
    ddotseq: '\u2A77',
    deg: '\u00B0',
    delta: '\u03B4',
    demptyv: '\u29B1',
    dfisht: '\u297F',
    dfr: '\uD835\uDD21',
    dharl: '\u21C3',
    dharr: '\u21C2',
    diam: '\u22C4',
    diamond: '\u22C4',
    diamondsuit: '\u2666',
    diams: '\u2666',
    die: '\u00A8',
    digamma: '\u03DD',
    disin: '\u22F2',
    div: '\u00F7',
    divide: '\u00F7',
    divideontimes: '\u22C7',
    divonx: '\u22C7',
    djcy: '\u0452',
    dlcorn: '\u231E',
    dlcrop: '\u230D',
    dollar: '\u0024',
    dopf: '\uD835\uDD55',
    dot: '\u02D9',
    doteq: '\u2250',
    doteqdot: '\u2251',
    dotminus: '\u2238',
    dotplus: '\u2214',
    dotsquare: '\u22A1',
    doublebarwedge: '\u2306',
    downarrow: '\u2193',
    downdownarrows: '\u21CA',
    downharpoonleft: '\u21C3',
    downharpoonright: '\u21C2',
    drbkarow: '\u2910',
    drcorn: '\u231F',
    drcrop: '\u230C',
    dscr: '\uD835\uDCB9',
    dscy: '\u0455',
    dsol: '\u29F6',
    dstrok: '\u0111',
    dtdot: '\u22F1',
    dtri: '\u25BF',
    dtrif: '\u25BE',
    duarr: '\u21F5',
    duhar: '\u296F',
    dwangle: '\u29A6',
    dzcy: '\u045F',
    dzigrarr: '\u27FF',
    eDDot: '\u2A77',
    eDot: '\u2251',
    eacute: '\u00E9',
    easter: '\u2A6E',
    ecaron: '\u011B',
    ecir: '\u2256',
    ecirc: '\u00EA',
    ecolon: '\u2255',
    ecy: '\u044D',
    edot: '\u0117',
    ee: '\u2147',
    efDot: '\u2252',
    efr: '\uD835\uDD22',
    eg: '\u2A9A',
    egrave: '\u00E8',
    egs: '\u2A96',
    egsdot: '\u2A98',
    el: '\u2A99',
    elinters: '\u23E7',
    ell: '\u2113',
    els: '\u2A95',
    elsdot: '\u2A97',
    emacr: '\u0113',
    empty: '\u2205',
    emptyset: '\u2205',
    emptyv: '\u2205',
    emsp13: '\u2004',
    emsp14: '\u2005',
    emsp: '\u2003',
    eng: '\u014B',
    ensp: '\u2002',
    eogon: '\u0119',
    eopf: '\uD835\uDD56',
    epar: '\u22D5',
    eparsl: '\u29E3',
    eplus: '\u2A71',
    epsi: '\u03B5',
    epsilon: '\u03B5',
    epsiv: '\u03F5',
    eqcirc: '\u2256',
    eqcolon: '\u2255',
    eqsim: '\u2242',
    eqslantgtr: '\u2A96',
    eqslantless: '\u2A95',
    equals: '\u003D',
    equest: '\u225F',
    equiv: '\u2261',
    equivDD: '\u2A78',
    eqvparsl: '\u29E5',
    erDot: '\u2253',
    erarr: '\u2971',
    escr: '\u212F',
    esdot: '\u2250',
    esim: '\u2242',
    eta: '\u03B7',
    eth: '\u00F0',
    euml: '\u00EB',
    euro: '\u20AC',
    excl: '\u0021',
    exist: '\u2203',
    expectation: '\u2130',
    exponentiale: '\u2147',
    fallingdotseq: '\u2252',
    fcy: '\u0444',
    female: '\u2640',
    ffilig: '\uFB03',
    fflig: '\uFB00',
    ffllig: '\uFB04',
    ffr: '\uD835\uDD23',
    filig: '\uFB01',
    fjlig: '\u0066\u006A',
    flat: '\u266D',
    fllig: '\uFB02',
    fltns: '\u25B1',
    fnof: '\u0192',
    fopf: '\uD835\uDD57',
    forall: '\u2200',
    fork: '\u22D4',
    forkv: '\u2AD9',
    fpartint: '\u2A0D',
    frac12: '\u00BD',
    frac13: '\u2153',
    frac14: '\u00BC',
    frac15: '\u2155',
    frac16: '\u2159',
    frac18: '\u215B',
    frac23: '\u2154',
    frac25: '\u2156',
    frac34: '\u00BE',
    frac35: '\u2157',
    frac38: '\u215C',
    frac45: '\u2158',
    frac56: '\u215A',
    frac58: '\u215D',
    frac78: '\u215E',
    frasl: '\u2044',
    frown: '\u2322',
    fscr: '\uD835\uDCBB',
    gE: '\u2267',
    gEl: '\u2A8C',
    gacute: '\u01F5',
    gamma: '\u03B3',
    gammad: '\u03DD',
    gap: '\u2A86',
    gbreve: '\u011F',
    gcirc: '\u011D',
    gcy: '\u0433',
    gdot: '\u0121',
    ge: '\u2265',
    gel: '\u22DB',
    geq: '\u2265',
    geqq: '\u2267',
    geqslant: '\u2A7E',
    ges: '\u2A7E',
    gescc: '\u2AA9',
    gesdot: '\u2A80',
    gesdoto: '\u2A82',
    gesdotol: '\u2A84',
    gesl: '\u22DB\uFE00',
    gesles: '\u2A94',
    gfr: '\uD835\uDD24',
    gg: '\u226B',
    ggg: '\u22D9',
    gimel: '\u2137',
    gjcy: '\u0453',
    gl: '\u2277',
    glE: '\u2A92',
    gla: '\u2AA5',
    glj: '\u2AA4',
    gnE: '\u2269',
    gnap: '\u2A8A',
    gnapprox: '\u2A8A',
    gne: '\u2A88',
    gneq: '\u2A88',
    gneqq: '\u2269',
    gnsim: '\u22E7',
    gopf: '\uD835\uDD58',
    grave: '\u0060',
    gscr: '\u210A',
    gsim: '\u2273',
    gsime: '\u2A8E',
    gsiml: '\u2A90',
    gt: '\u003E',
    gtcc: '\u2AA7',
    gtcir: '\u2A7A',
    gtdot: '\u22D7',
    gtlPar: '\u2995',
    gtquest: '\u2A7C',
    gtrapprox: '\u2A86',
    gtrarr: '\u2978',
    gtrdot: '\u22D7',
    gtreqless: '\u22DB',
    gtreqqless: '\u2A8C',
    gtrless: '\u2277',
    gtrsim: '\u2273',
    gvertneqq: '\u2269\uFE00',
    gvnE: '\u2269\uFE00',
    hArr: '\u21D4',
    hairsp: '\u200A',
    half: '\u00BD',
    hamilt: '\u210B',
    hardcy: '\u044A',
    harr: '\u2194',
    harrcir: '\u2948',
    harrw: '\u21AD',
    hbar: '\u210F',
    hcirc: '\u0125',
    hearts: '\u2665',
    heartsuit: '\u2665',
    hellip: '\u2026',
    hercon: '\u22B9',
    hfr: '\uD835\uDD25',
    hksearow: '\u2925',
    hkswarow: '\u2926',
    hoarr: '\u21FF',
    homtht: '\u223B',
    hookleftarrow: '\u21A9',
    hookrightarrow: '\u21AA',
    hopf: '\uD835\uDD59',
    horbar: '\u2015',
    hscr: '\uD835\uDCBD',
    hslash: '\u210F',
    hstrok: '\u0127',
    hybull: '\u2043',
    hyphen: '\u2010',
    iacute: '\u00ED',
    ic: '\u2063',
    icirc: '\u00EE',
    icy: '\u0438',
    iecy: '\u0435',
    iexcl: '\u00A1',
    iff: '\u21D4',
    ifr: '\uD835\uDD26',
    igrave: '\u00EC',
    ii: '\u2148',
    iiiint: '\u2A0C',
    iiint: '\u222D',
    iinfin: '\u29DC',
    iiota: '\u2129',
    ijlig: '\u0133',
    imacr: '\u012B',
    image: '\u2111',
    imagline: '\u2110',
    imagpart: '\u2111',
    imath: '\u0131',
    imof: '\u22B7',
    imped: '\u01B5',
    in: '\u2208',
    incare: '\u2105',
    infin: '\u221E',
    infintie: '\u29DD',
    inodot: '\u0131',
    int: '\u222B',
    intcal: '\u22BA',
    integers: '\u2124',
    intercal: '\u22BA',
    intlarhk: '\u2A17',
    intprod: '\u2A3C',
    iocy: '\u0451',
    iogon: '\u012F',
    iopf: '\uD835\uDD5A',
    iota: '\u03B9',
    iprod: '\u2A3C',
    iquest: '\u00BF',
    iscr: '\uD835\uDCBE',
    isin: '\u2208',
    isinE: '\u22F9',
    isindot: '\u22F5',
    isins: '\u22F4',
    isinsv: '\u22F3',
    isinv: '\u2208',
    it: '\u2062',
    itilde: '\u0129',
    iukcy: '\u0456',
    iuml: '\u00EF',
    jcirc: '\u0135',
    jcy: '\u0439',
    jfr: '\uD835\uDD27',
    jmath: '\u0237',
    jopf: '\uD835\uDD5B',
    jscr: '\uD835\uDCBF',
    jsercy: '\u0458',
    jukcy: '\u0454',
    kappa: '\u03BA',
    kappav: '\u03F0',
    kcedil: '\u0137',
    kcy: '\u043A',
    kfr: '\uD835\uDD28',
    kgreen: '\u0138',
    khcy: '\u0445',
    kjcy: '\u045C',
    kopf: '\uD835\uDD5C',
    kscr: '\uD835\uDCC0',
    lAarr: '\u21DA',
    lArr: '\u21D0',
    lAtail: '\u291B',
    lBarr: '\u290E',
    lE: '\u2266',
    lEg: '\u2A8B',
    lHar: '\u2962',
    lacute: '\u013A',
    laemptyv: '\u29B4',
    lagran: '\u2112',
    lambda: '\u03BB',
    lang: '\u27E8',
    langd: '\u2991',
    langle: '\u27E8',
    lap: '\u2A85',
    laquo: '\u00AB',
    larr: '\u2190',
    larrb: '\u21E4',
    larrbfs: '\u291F',
    larrfs: '\u291D',
    larrhk: '\u21A9',
    larrlp: '\u21AB',
    larrpl: '\u2939',
    larrsim: '\u2973',
    larrtl: '\u21A2',
    lat: '\u2AAB',
    latail: '\u2919',
    late: '\u2AAD',
    lates: '\u2AAD\uFE00',
    lbarr: '\u290C',
    lbbrk: '\u2772',
    lbrace: '\u007B',
    lbrack: '\u005B',
    lbrke: '\u298B',
    lbrksld: '\u298F',
    lbrkslu: '\u298D',
    lcaron: '\u013E',
    lcedil: '\u013C',
    lceil: '\u2308',
    lcub: '\u007B',
    lcy: '\u043B',
    ldca: '\u2936',
    ldquo: '\u201C',
    ldquor: '\u201E',
    ldrdhar: '\u2967',
    ldrushar: '\u294B',
    ldsh: '\u21B2',
    le: '\u2264',
    leftarrow: '\u2190',
    leftarrowtail: '\u21A2',
    leftharpoondown: '\u21BD',
    leftharpoonup: '\u21BC',
    leftleftarrows: '\u21C7',
    leftrightarrow: '\u2194',
    leftrightarrows: '\u21C6',
    leftrightharpoons: '\u21CB',
    leftrightsquigarrow: '\u21AD',
    leftthreetimes: '\u22CB',
    leg: '\u22DA',
    leq: '\u2264',
    leqq: '\u2266',
    leqslant: '\u2A7D',
    les: '\u2A7D',
    lescc: '\u2AA8',
    lesdot: '\u2A7F',
    lesdoto: '\u2A81',
    lesdotor: '\u2A83',
    lesg: '\u22DA\uFE00',
    lesges: '\u2A93',
    lessapprox: '\u2A85',
    lessdot: '\u22D6',
    lesseqgtr: '\u22DA',
    lesseqqgtr: '\u2A8B',
    lessgtr: '\u2276',
    lesssim: '\u2272',
    lfisht: '\u297C',
    lfloor: '\u230A',
    lfr: '\uD835\uDD29',
    lg: '\u2276',
    lgE: '\u2A91',
    lhard: '\u21BD',
    lharu: '\u21BC',
    lharul: '\u296A',
    lhblk: '\u2584',
    ljcy: '\u0459',
    ll: '\u226A',
    llarr: '\u21C7',
    llcorner: '\u231E',
    llhard: '\u296B',
    lltri: '\u25FA',
    lmidot: '\u0140',
    lmoust: '\u23B0',
    lmoustache: '\u23B0',
    lnE: '\u2268',
    lnap: '\u2A89',
    lnapprox: '\u2A89',
    lne: '\u2A87',
    lneq: '\u2A87',
    lneqq: '\u2268',
    lnsim: '\u22E6',
    loang: '\u27EC',
    loarr: '\u21FD',
    lobrk: '\u27E6',
    longleftarrow: '\u27F5',
    longleftrightarrow: '\u27F7',
    longmapsto: '\u27FC',
    longrightarrow: '\u27F6',
    looparrowleft: '\u21AB',
    looparrowright: '\u21AC',
    lopar: '\u2985',
    lopf: '\uD835\uDD5D',
    loplus: '\u2A2D',
    lotimes: '\u2A34',
    lowast: '\u2217',
    lowbar: '\u005F',
    loz: '\u25CA',
    lozenge: '\u25CA',
    lozf: '\u29EB',
    lpar: '\u0028',
    lparlt: '\u2993',
    lrarr: '\u21C6',
    lrcorner: '\u231F',
    lrhar: '\u21CB',
    lrhard: '\u296D',
    lrm: '\u200E',
    lrtri: '\u22BF',
    lsaquo: '\u2039',
    lscr: '\uD835\uDCC1',
    lsh: '\u21B0',
    lsim: '\u2272',
    lsime: '\u2A8D',
    lsimg: '\u2A8F',
    lsqb: '\u005B',
    lsquo: '\u2018',
    lsquor: '\u201A',
    lstrok: '\u0142',
    lt: '\u003C',
    ltcc: '\u2AA6',
    ltcir: '\u2A79',
    ltdot: '\u22D6',
    lthree: '\u22CB',
    ltimes: '\u22C9',
    ltlarr: '\u2976',
    ltquest: '\u2A7B',
    ltrPar: '\u2996',
    ltri: '\u25C3',
    ltrie: '\u22B4',
    ltrif: '\u25C2',
    lurdshar: '\u294A',
    luruhar: '\u2966',
    lvertneqq: '\u2268\uFE00',
    lvnE: '\u2268\uFE00',
    mDDot: '\u223A',
    macr: '\u00AF',
    male: '\u2642',
    malt: '\u2720',
    maltese: '\u2720',
    map: '\u21A6',
    mapsto: '\u21A6',
    mapstodown: '\u21A7',
    mapstoleft: '\u21A4',
    mapstoup: '\u21A5',
    marker: '\u25AE',
    mcomma: '\u2A29',
    mcy: '\u043C',
    mdash: '\u2014',
    measuredangle: '\u2221',
    mfr: '\uD835\uDD2A',
    mho: '\u2127',
    micro: '\u00B5',
    mid: '\u2223',
    midast: '\u002A',
    midcir: '\u2AF0',
    middot: '\u00B7',
    minus: '\u2212',
    minusb: '\u229F',
    minusd: '\u2238',
    minusdu: '\u2A2A',
    mlcp: '\u2ADB',
    mldr: '\u2026',
    mnplus: '\u2213',
    models: '\u22A7',
    mopf: '\uD835\uDD5E',
    mp: '\u2213',
    mscr: '\uD835\uDCC2',
    mstpos: '\u223E',
    mu: '\u03BC',
    multimap: '\u22B8',
    mumap: '\u22B8',
    nGg: '\u22D9\u0338',
    nGt: '\u226B\u20D2',
    nGtv: '\u226B\u0338',
    nLeftarrow: '\u21CD',
    nLeftrightarrow: '\u21CE',
    nLl: '\u22D8\u0338',
    nLt: '\u226A\u20D2',
    nLtv: '\u226A\u0338',
    nRightarrow: '\u21CF',
    nVDash: '\u22AF',
    nVdash: '\u22AE',
    nabla: '\u2207',
    nacute: '\u0144',
    nang: '\u2220\u20D2',
    nap: '\u2249',
    napE: '\u2A70\u0338',
    napid: '\u224B\u0338',
    napos: '\u0149',
    napprox: '\u2249',
    natur: '\u266E',
    natural: '\u266E',
    naturals: '\u2115',
    nbsp: '\u00A0',
    nbump: '\u224E\u0338',
    nbumpe: '\u224F\u0338',
    ncap: '\u2A43',
    ncaron: '\u0148',
    ncedil: '\u0146',
    ncong: '\u2247',
    ncongdot: '\u2A6D\u0338',
    ncup: '\u2A42',
    ncy: '\u043D',
    ndash: '\u2013',
    ne: '\u2260',
    neArr: '\u21D7',
    nearhk: '\u2924',
    nearr: '\u2197',
    nearrow: '\u2197',
    nedot: '\u2250\u0338',
    nequiv: '\u2262',
    nesear: '\u2928',
    nesim: '\u2242\u0338',
    nexist: '\u2204',
    nexists: '\u2204',
    nfr: '\uD835\uDD2B',
    ngE: '\u2267\u0338',
    nge: '\u2271',
    ngeq: '\u2271',
    ngeqq: '\u2267\u0338',
    ngeqslant: '\u2A7E\u0338',
    nges: '\u2A7E\u0338',
    ngsim: '\u2275',
    ngt: '\u226F',
    ngtr: '\u226F',
    nhArr: '\u21CE',
    nharr: '\u21AE',
    nhpar: '\u2AF2',
    ni: '\u220B',
    nis: '\u22FC',
    nisd: '\u22FA',
    niv: '\u220B',
    njcy: '\u045A',
    nlArr: '\u21CD',
    nlE: '\u2266\u0338',
    nlarr: '\u219A',
    nldr: '\u2025',
    nle: '\u2270',
    nleftarrow: '\u219A',
    nleftrightarrow: '\u21AE',
    nleq: '\u2270',
    nleqq: '\u2266\u0338',
    nleqslant: '\u2A7D\u0338',
    nles: '\u2A7D\u0338',
    nless: '\u226E',
    nlsim: '\u2274',
    nlt: '\u226E',
    nltri: '\u22EA',
    nltrie: '\u22EC',
    nmid: '\u2224',
    nopf: '\uD835\uDD5F',
    not: '\u00AC',
    notin: '\u2209',
    notinE: '\u22F9\u0338',
    notindot: '\u22F5\u0338',
    notinva: '\u2209',
    notinvb: '\u22F7',
    notinvc: '\u22F6',
    notni: '\u220C',
    notniva: '\u220C',
    notnivb: '\u22FE',
    notnivc: '\u22FD',
    npar: '\u2226',
    nparallel: '\u2226',
    nparsl: '\u2AFD\u20E5',
    npart: '\u2202\u0338',
    npolint: '\u2A14',
    npr: '\u2280',
    nprcue: '\u22E0',
    npre: '\u2AAF\u0338',
    nprec: '\u2280',
    npreceq: '\u2AAF\u0338',
    nrArr: '\u21CF',
    nrarr: '\u219B',
    nrarrc: '\u2933\u0338',
    nrarrw: '\u219D\u0338',
    nrightarrow: '\u219B',
    nrtri: '\u22EB',
    nrtrie: '\u22ED',
    nsc: '\u2281',
    nsccue: '\u22E1',
    nsce: '\u2AB0\u0338',
    nscr: '\uD835\uDCC3',
    nshortmid: '\u2224',
    nshortparallel: '\u2226',
    nsim: '\u2241',
    nsime: '\u2244',
    nsimeq: '\u2244',
    nsmid: '\u2224',
    nspar: '\u2226',
    nsqsube: '\u22E2',
    nsqsupe: '\u22E3',
    nsub: '\u2284',
    nsubE: '\u2AC5\u0338',
    nsube: '\u2288',
    nsubset: '\u2282\u20D2',
    nsubseteq: '\u2288',
    nsubseteqq: '\u2AC5\u0338',
    nsucc: '\u2281',
    nsucceq: '\u2AB0\u0338',
    nsup: '\u2285',
    nsupE: '\u2AC6\u0338',
    nsupe: '\u2289',
    nsupset: '\u2283\u20D2',
    nsupseteq: '\u2289',
    nsupseteqq: '\u2AC6\u0338',
    ntgl: '\u2279',
    ntilde: '\u00F1',
    ntlg: '\u2278',
    ntriangleleft: '\u22EA',
    ntrianglelefteq: '\u22EC',
    ntriangleright: '\u22EB',
    ntrianglerighteq: '\u22ED',
    nu: '\u03BD',
    num: '\u0023',
    numero: '\u2116',
    numsp: '\u2007',
    nvDash: '\u22AD',
    nvHarr: '\u2904',
    nvap: '\u224D\u20D2',
    nvdash: '\u22AC',
    nvge: '\u2265\u20D2',
    nvgt: '\u003E\u20D2',
    nvinfin: '\u29DE',
    nvlArr: '\u2902',
    nvle: '\u2264\u20D2',
    nvlt: '\u003C\u20D2',
    nvltrie: '\u22B4\u20D2',
    nvrArr: '\u2903',
    nvrtrie: '\u22B5\u20D2',
    nvsim: '\u223C\u20D2',
    nwArr: '\u21D6',
    nwarhk: '\u2923',
    nwarr: '\u2196',
    nwarrow: '\u2196',
    nwnear: '\u2927',
    oS: '\u24C8',
    oacute: '\u00F3',
    oast: '\u229B',
    ocir: '\u229A',
    ocirc: '\u00F4',
    ocy: '\u043E',
    odash: '\u229D',
    odblac: '\u0151',
    odiv: '\u2A38',
    odot: '\u2299',
    odsold: '\u29BC',
    oelig: '\u0153',
    ofcir: '\u29BF',
    ofr: '\uD835\uDD2C',
    ogon: '\u02DB',
    ograve: '\u00F2',
    ogt: '\u29C1',
    ohbar: '\u29B5',
    ohm: '\u03A9',
    oint: '\u222E',
    olarr: '\u21BA',
    olcir: '\u29BE',
    olcross: '\u29BB',
    oline: '\u203E',
    olt: '\u29C0',
    omacr: '\u014D',
    omega: '\u03C9',
    omicron: '\u03BF',
    omid: '\u29B6',
    ominus: '\u2296',
    oopf: '\uD835\uDD60',
    opar: '\u29B7',
    operp: '\u29B9',
    oplus: '\u2295',
    or: '\u2228',
    orarr: '\u21BB',
    ord: '\u2A5D',
    order: '\u2134',
    orderof: '\u2134',
    ordf: '\u00AA',
    ordm: '\u00BA',
    origof: '\u22B6',
    oror: '\u2A56',
    orslope: '\u2A57',
    orv: '\u2A5B',
    oscr: '\u2134',
    oslash: '\u00F8',
    osol: '\u2298',
    otilde: '\u00F5',
    otimes: '\u2297',
    otimesas: '\u2A36',
    ouml: '\u00F6',
    ovbar: '\u233D',
    par: '\u2225',
    para: '\u00B6',
    parallel: '\u2225',
    parsim: '\u2AF3',
    parsl: '\u2AFD',
    part: '\u2202',
    pcy: '\u043F',
    percnt: '\u0025',
    period: '\u002E',
    permil: '\u2030',
    perp: '\u22A5',
    pertenk: '\u2031',
    pfr: '\uD835\uDD2D',
    phi: '\u03C6',
    phiv: '\u03D5',
    phmmat: '\u2133',
    phone: '\u260E',
    pi: '\u03C0',
    pitchfork: '\u22D4',
    piv: '\u03D6',
    planck: '\u210F',
    planckh: '\u210E',
    plankv: '\u210F',
    plus: '\u002B',
    plusacir: '\u2A23',
    plusb: '\u229E',
    pluscir: '\u2A22',
    plusdo: '\u2214',
    plusdu: '\u2A25',
    pluse: '\u2A72',
    plusmn: '\u00B1',
    plussim: '\u2A26',
    plustwo: '\u2A27',
    pm: '\u00B1',
    pointint: '\u2A15',
    popf: '\uD835\uDD61',
    pound: '\u00A3',
    pr: '\u227A',
    prE: '\u2AB3',
    prap: '\u2AB7',
    prcue: '\u227C',
    pre: '\u2AAF',
    prec: '\u227A',
    precapprox: '\u2AB7',
    preccurlyeq: '\u227C',
    preceq: '\u2AAF',
    precnapprox: '\u2AB9',
    precneqq: '\u2AB5',
    precnsim: '\u22E8',
    precsim: '\u227E',
    prime: '\u2032',
    primes: '\u2119',
    prnE: '\u2AB5',
    prnap: '\u2AB9',
    prnsim: '\u22E8',
    prod: '\u220F',
    profalar: '\u232E',
    profline: '\u2312',
    profsurf: '\u2313',
    prop: '\u221D',
    propto: '\u221D',
    prsim: '\u227E',
    prurel: '\u22B0',
    pscr: '\uD835\uDCC5',
    psi: '\u03C8',
    puncsp: '\u2008',
    qfr: '\uD835\uDD2E',
    qint: '\u2A0C',
    qopf: '\uD835\uDD62',
    qprime: '\u2057',
    qscr: '\uD835\uDCC6',
    quaternions: '\u210D',
    quatint: '\u2A16',
    quest: '\u003F',
    questeq: '\u225F',
    quot: '\u0022',
    rAarr: '\u21DB',
    rArr: '\u21D2',
    rAtail: '\u291C',
    rBarr: '\u290F',
    rHar: '\u2964',
    race: '\u223D\u0331',
    racute: '\u0155',
    radic: '\u221A',
    raemptyv: '\u29B3',
    rang: '\u27E9',
    rangd: '\u2992',
    range: '\u29A5',
    rangle: '\u27E9',
    raquo: '\u00BB',
    rarr: '\u2192',
    rarrap: '\u2975',
    rarrb: '\u21E5',
    rarrbfs: '\u2920',
    rarrc: '\u2933',
    rarrfs: '\u291E',
    rarrhk: '\u21AA',
    rarrlp: '\u21AC',
    rarrpl: '\u2945',
    rarrsim: '\u2974',
    rarrtl: '\u21A3',
    rarrw: '\u219D',
    ratail: '\u291A',
    ratio: '\u2236',
    rationals: '\u211A',
    rbarr: '\u290D',
    rbbrk: '\u2773',
    rbrace: '\u007D',
    rbrack: '\u005D',
    rbrke: '\u298C',
    rbrksld: '\u298E',
    rbrkslu: '\u2990',
    rcaron: '\u0159',
    rcedil: '\u0157',
    rceil: '\u2309',
    rcub: '\u007D',
    rcy: '\u0440',
    rdca: '\u2937',
    rdldhar: '\u2969',
    rdquo: '\u201D',
    rdquor: '\u201D',
    rdsh: '\u21B3',
    real: '\u211C',
    realine: '\u211B',
    realpart: '\u211C',
    reals: '\u211D',
    rect: '\u25AD',
    reg: '\u00AE',
    rfisht: '\u297D',
    rfloor: '\u230B',
    rfr: '\uD835\uDD2F',
    rhard: '\u21C1',
    rharu: '\u21C0',
    rharul: '\u296C',
    rho: '\u03C1',
    rhov: '\u03F1',
    rightarrow: '\u2192',
    rightarrowtail: '\u21A3',
    rightharpoondown: '\u21C1',
    rightharpoonup: '\u21C0',
    rightleftarrows: '\u21C4',
    rightleftharpoons: '\u21CC',
    rightrightarrows: '\u21C9',
    rightsquigarrow: '\u219D',
    rightthreetimes: '\u22CC',
    ring: '\u02DA',
    risingdotseq: '\u2253',
    rlarr: '\u21C4',
    rlhar: '\u21CC',
    rlm: '\u200F',
    rmoust: '\u23B1',
    rmoustache: '\u23B1',
    rnmid: '\u2AEE',
    roang: '\u27ED',
    roarr: '\u21FE',
    robrk: '\u27E7',
    ropar: '\u2986',
    ropf: '\uD835\uDD63',
    roplus: '\u2A2E',
    rotimes: '\u2A35',
    rpar: '\u0029',
    rpargt: '\u2994',
    rppolint: '\u2A12',
    rrarr: '\u21C9',
    rsaquo: '\u203A',
    rscr: '\uD835\uDCC7',
    rsh: '\u21B1',
    rsqb: '\u005D',
    rsquo: '\u2019',
    rsquor: '\u2019',
    rthree: '\u22CC',
    rtimes: '\u22CA',
    rtri: '\u25B9',
    rtrie: '\u22B5',
    rtrif: '\u25B8',
    rtriltri: '\u29CE',
    ruluhar: '\u2968',
    rx: '\u211E',
    sacute: '\u015B',
    sbquo: '\u201A',
    sc: '\u227B',
    scE: '\u2AB4',
    scap: '\u2AB8',
    scaron: '\u0161',
    sccue: '\u227D',
    sce: '\u2AB0',
    scedil: '\u015F',
    scirc: '\u015D',
    scnE: '\u2AB6',
    scnap: '\u2ABA',
    scnsim: '\u22E9',
    scpolint: '\u2A13',
    scsim: '\u227F',
    scy: '\u0441',
    sdot: '\u22C5',
    sdotb: '\u22A1',
    sdote: '\u2A66',
    seArr: '\u21D8',
    searhk: '\u2925',
    searr: '\u2198',
    searrow: '\u2198',
    sect: '\u00A7',
    semi: '\u003B',
    seswar: '\u2929',
    setminus: '\u2216',
    setmn: '\u2216',
    sext: '\u2736',
    sfr: '\uD835\uDD30',
    sfrown: '\u2322',
    sharp: '\u266F',
    shchcy: '\u0449',
    shcy: '\u0448',
    shortmid: '\u2223',
    shortparallel: '\u2225',
    shy: '\u00AD',
    sigma: '\u03C3',
    sigmaf: '\u03C2',
    sigmav: '\u03C2',
    sim: '\u223C',
    simdot: '\u2A6A',
    sime: '\u2243',
    simeq: '\u2243',
    simg: '\u2A9E',
    simgE: '\u2AA0',
    siml: '\u2A9D',
    simlE: '\u2A9F',
    simne: '\u2246',
    simplus: '\u2A24',
    simrarr: '\u2972',
    slarr: '\u2190',
    smallsetminus: '\u2216',
    smashp: '\u2A33',
    smeparsl: '\u29E4',
    smid: '\u2223',
    smile: '\u2323',
    smt: '\u2AAA',
    smte: '\u2AAC',
    smtes: '\u2AAC\uFE00',
    softcy: '\u044C',
    sol: '\u002F',
    solb: '\u29C4',
    solbar: '\u233F',
    sopf: '\uD835\uDD64',
    spades: '\u2660',
    spadesuit: '\u2660',
    spar: '\u2225',
    sqcap: '\u2293',
    sqcaps: '\u2293\uFE00',
    sqcup: '\u2294',
    sqcups: '\u2294\uFE00',
    sqsub: '\u228F',
    sqsube: '\u2291',
    sqsubset: '\u228F',
    sqsubseteq: '\u2291',
    sqsup: '\u2290',
    sqsupe: '\u2292',
    sqsupset: '\u2290',
    sqsupseteq: '\u2292',
    squ: '\u25A1',
    square: '\u25A1',
    squarf: '\u25AA',
    squf: '\u25AA',
    srarr: '\u2192',
    sscr: '\uD835\uDCC8',
    ssetmn: '\u2216',
    ssmile: '\u2323',
    sstarf: '\u22C6',
    star: '\u2606',
    starf: '\u2605',
    straightepsilon: '\u03F5',
    straightphi: '\u03D5',
    strns: '\u00AF',
    sub: '\u2282',
    subE: '\u2AC5',
    subdot: '\u2ABD',
    sube: '\u2286',
    subedot: '\u2AC3',
    submult: '\u2AC1',
    subnE: '\u2ACB',
    subne: '\u228A',
    subplus: '\u2ABF',
    subrarr: '\u2979',
    subset: '\u2282',
    subseteq: '\u2286',
    subseteqq: '\u2AC5',
    subsetneq: '\u228A',
    subsetneqq: '\u2ACB',
    subsim: '\u2AC7',
    subsub: '\u2AD5',
    subsup: '\u2AD3',
    succ: '\u227B',
    succapprox: '\u2AB8',
    succcurlyeq: '\u227D',
    succeq: '\u2AB0',
    succnapprox: '\u2ABA',
    succneqq: '\u2AB6',
    succnsim: '\u22E9',
    succsim: '\u227F',
    sum: '\u2211',
    sung: '\u266A',
    sup1: '\u00B9',
    sup2: '\u00B2',
    sup3: '\u00B3',
    sup: '\u2283',
    supE: '\u2AC6',
    supdot: '\u2ABE',
    supdsub: '\u2AD8',
    supe: '\u2287',
    supedot: '\u2AC4',
    suphsol: '\u27C9',
    suphsub: '\u2AD7',
    suplarr: '\u297B',
    supmult: '\u2AC2',
    supnE: '\u2ACC',
    supne: '\u228B',
    supplus: '\u2AC0',
    supset: '\u2283',
    supseteq: '\u2287',
    supseteqq: '\u2AC6',
    supsetneq: '\u228B',
    supsetneqq: '\u2ACC',
    supsim: '\u2AC8',
    supsub: '\u2AD4',
    supsup: '\u2AD6',
    swArr: '\u21D9',
    swarhk: '\u2926',
    swarr: '\u2199',
    swarrow: '\u2199',
    swnwar: '\u292A',
    szlig: '\u00DF',
    target: '\u2316',
    tau: '\u03C4',
    tbrk: '\u23B4',
    tcaron: '\u0165',
    tcedil: '\u0163',
    tcy: '\u0442',
    tdot: '\u20DB',
    telrec: '\u2315',
    tfr: '\uD835\uDD31',
    there4: '\u2234',
    therefore: '\u2234',
    theta: '\u03B8',
    thetasym: '\u03D1',
    thetav: '\u03D1',
    thickapprox: '\u2248',
    thicksim: '\u223C',
    thinsp: '\u2009',
    thkap: '\u2248',
    thksim: '\u223C',
    thorn: '\u00FE',
    tilde: '\u02DC',
    times: '\u00D7',
    timesb: '\u22A0',
    timesbar: '\u2A31',
    timesd: '\u2A30',
    tint: '\u222D',
    toea: '\u2928',
    top: '\u22A4',
    topbot: '\u2336',
    topcir: '\u2AF1',
    topf: '\uD835\uDD65',
    topfork: '\u2ADA',
    tosa: '\u2929',
    tprime: '\u2034',
    trade: '\u2122',
    triangle: '\u25B5',
    triangledown: '\u25BF',
    triangleleft: '\u25C3',
    trianglelefteq: '\u22B4',
    triangleq: '\u225C',
    triangleright: '\u25B9',
    trianglerighteq: '\u22B5',
    tridot: '\u25EC',
    trie: '\u225C',
    triminus: '\u2A3A',
    triplus: '\u2A39',
    trisb: '\u29CD',
    tritime: '\u2A3B',
    trpezium: '\u23E2',
    tscr: '\uD835\uDCC9',
    tscy: '\u0446',
    tshcy: '\u045B',
    tstrok: '\u0167',
    twixt: '\u226C',
    twoheadleftarrow: '\u219E',
    twoheadrightarrow: '\u21A0',
    uArr: '\u21D1',
    uHar: '\u2963',
    uacute: '\u00FA',
    uarr: '\u2191',
    ubrcy: '\u045E',
    ubreve: '\u016D',
    ucirc: '\u00FB',
    ucy: '\u0443',
    udarr: '\u21C5',
    udblac: '\u0171',
    udhar: '\u296E',
    ufisht: '\u297E',
    ufr: '\uD835\uDD32',
    ugrave: '\u00F9',
    uharl: '\u21BF',
    uharr: '\u21BE',
    uhblk: '\u2580',
    ulcorn: '\u231C',
    ulcorner: '\u231C',
    ulcrop: '\u230F',
    ultri: '\u25F8',
    umacr: '\u016B',
    uml: '\u00A8',
    uogon: '\u0173',
    uopf: '\uD835\uDD66',
    uparrow: '\u2191',
    updownarrow: '\u2195',
    upharpoonleft: '\u21BF',
    upharpoonright: '\u21BE',
    uplus: '\u228E',
    upsi: '\u03C5',
    upsih: '\u03D2',
    upsilon: '\u03C5',
    upuparrows: '\u21C8',
    urcorn: '\u231D',
    urcorner: '\u231D',
    urcrop: '\u230E',
    uring: '\u016F',
    urtri: '\u25F9',
    uscr: '\uD835\uDCCA',
    utdot: '\u22F0',
    utilde: '\u0169',
    utri: '\u25B5',
    utrif: '\u25B4',
    uuarr: '\u21C8',
    uuml: '\u00FC',
    uwangle: '\u29A7',
    vArr: '\u21D5',
    vBar: '\u2AE8',
    vBarv: '\u2AE9',
    vDash: '\u22A8',
    vangrt: '\u299C',
    varepsilon: '\u03F5',
    varkappa: '\u03F0',
    varnothing: '\u2205',
    varphi: '\u03D5',
    varpi: '\u03D6',
    varpropto: '\u221D',
    varr: '\u2195',
    varrho: '\u03F1',
    varsigma: '\u03C2',
    varsubsetneq: '\u228A\uFE00',
    varsubsetneqq: '\u2ACB\uFE00',
    varsupsetneq: '\u228B\uFE00',
    varsupsetneqq: '\u2ACC\uFE00',
    vartheta: '\u03D1',
    vartriangleleft: '\u22B2',
    vartriangleright: '\u22B3',
    vcy: '\u0432',
    vdash: '\u22A2',
    vee: '\u2228',
    veebar: '\u22BB',
    veeeq: '\u225A',
    vellip: '\u22EE',
    verbar: '\u007C',
    vert: '\u007C',
    vfr: '\uD835\uDD33',
    vltri: '\u22B2',
    vnsub: '\u2282\u20D2',
    vnsup: '\u2283\u20D2',
    vopf: '\uD835\uDD67',
    vprop: '\u221D',
    vrtri: '\u22B3',
    vscr: '\uD835\uDCCB',
    vsubnE: '\u2ACB\uFE00',
    vsubne: '\u228A\uFE00',
    vsupnE: '\u2ACC\uFE00',
    vsupne: '\u228B\uFE00',
    vzigzag: '\u299A',
    wcirc: '\u0175',
    wedbar: '\u2A5F',
    wedge: '\u2227',
    wedgeq: '\u2259',
    weierp: '\u2118',
    wfr: '\uD835\uDD34',
    wopf: '\uD835\uDD68',
    wp: '\u2118',
    wr: '\u2240',
    wreath: '\u2240',
    wscr: '\uD835\uDCCC',
    xcap: '\u22C2',
    xcirc: '\u25EF',
    xcup: '\u22C3',
    xdtri: '\u25BD',
    xfr: '\uD835\uDD35',
    xhArr: '\u27FA',
    xharr: '\u27F7',
    xi: '\u03BE',
    xlArr: '\u27F8',
    xlarr: '\u27F5',
    xmap: '\u27FC',
    xnis: '\u22FB',
    xodot: '\u2A00',
    xopf: '\uD835\uDD69',
    xoplus: '\u2A01',
    xotime: '\u2A02',
    xrArr: '\u27F9',
    xrarr: '\u27F6',
    xscr: '\uD835\uDCCD',
    xsqcup: '\u2A06',
    xuplus: '\u2A04',
    xutri: '\u25B3',
    xvee: '\u22C1',
    xwedge: '\u22C0',
    yacute: '\u00FD',
    yacy: '\u044F',
    ycirc: '\u0177',
    ycy: '\u044B',
    yen: '\u00A5',
    yfr: '\uD835\uDD36',
    yicy: '\u0457',
    yopf: '\uD835\uDD6A',
    yscr: '\uD835\uDCCE',
    yucy: '\u044E',
    yuml: '\u00FF',
    zacute: '\u017A',
    zcaron: '\u017E',
    zcy: '\u0437',
    zdot: '\u017C',
    zeetrf: '\u2128',
    zeta: '\u03B6',
    zfr: '\uD835\uDD37',
    zhcy: '\u0436',
    zigrarr: '\u21DD',
    zopf: '\uD835\uDD6B',
    zscr: '\uD835\uDCCF',
    zwj: '\u200D',
    zwnj: '\u200C'
};
const decodeMap = {
    '0': 65533,
    '128': 8364,
    '130': 8218,
    '131': 402,
    '132': 8222,
    '133': 8230,
    '134': 8224,
    '135': 8225,
    '136': 710,
    '137': 8240,
    '138': 352,
    '139': 8249,
    '140': 338,
    '142': 381,
    '145': 8216,
    '146': 8217,
    '147': 8220,
    '148': 8221,
    '149': 8226,
    '150': 8211,
    '151': 8212,
    '152': 732,
    '153': 8482,
    '154': 353,
    '155': 8250,
    '156': 339,
    '158': 382,
    '159': 376
};
function decodeHTMLStrict(text) {
    return text.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (key)=>{
        if (key.charAt(1) === '#') {
            const secondChar = key.charAt(2);
            const codePoint = secondChar === 'X' || secondChar === 'x' ? parseInt(key.slice(3), 16) : parseInt(key.slice(2), 10);
            return decodeCodePoint(codePoint);
        }
        return getOwnProperty(entities, key.slice(1, -1)) ?? key;
    });
}
function decodeCodePoint(codePoint) {
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
        return '\uFFFD';
    }
    return String.fromCodePoint(getOwnProperty(decodeMap, codePoint) ?? codePoint);
}
function scanJSXAttributeValue(parser, context) {
    parser.startIndex = parser.tokenIndex = parser.index;
    parser.startColumn = parser.tokenColumn = parser.column;
    parser.startLine = parser.tokenLine = parser.line;
    parser.setToken(CharTypes[parser.currentChar] & 8192 ? scanJSXString(parser) : scanSingleToken(parser, context, 0));
    return parser.getToken();
}
function scanJSXString(parser) {
    const quote = parser.currentChar;
    let char = advanceChar(parser);
    const start = parser.index;
    while(char !== quote){
        if (parser.index >= parser.end) parser.report(16);
        char = advanceChar(parser);
    }
    if (char !== quote) parser.report(16);
    parser.tokenValue = parser.source.slice(start, parser.index);
    advanceChar(parser);
    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    return 134283267;
}
function nextJSXToken(parser) {
    parser.startIndex = parser.tokenIndex = parser.index;
    parser.startColumn = parser.tokenColumn = parser.column;
    parser.startLine = parser.tokenLine = parser.line;
    if (parser.index >= parser.end) {
        parser.setToken(1048576);
        return;
    }
    if (parser.currentChar === 60) {
        advanceChar(parser);
        parser.setToken(8456256);
        return;
    }
    if (parser.currentChar === 123) {
        advanceChar(parser);
        parser.setToken(2162700);
        return;
    }
    let state = 0;
    while(parser.index < parser.end){
        const type = CharTypes[parser.source.charCodeAt(parser.index)];
        if (type & 1024) {
            state |= 1 | 4;
            scanNewLine(parser);
        } else if (type & 2048) {
            consumeLineFeed(parser, state);
            state = state & -5 | 1;
        } else {
            advanceChar(parser);
        }
        if (CharTypes[parser.currentChar] & 16384) break;
    }
    if (parser.tokenIndex === parser.index) parser.report(0);
    const raw = parser.source.slice(parser.tokenIndex, parser.index);
    if (parser.options.raw) parser.tokenRaw = raw;
    parser.tokenValue = decodeHTMLStrict(raw);
    parser.setToken(137);
}
function rescanJSXIdentifier(parser) {
    if ((parser.getToken() & 143360) === 143360) {
        const { index } = parser;
        let char = parser.currentChar;
        while(CharTypes[char] & (32768 | 2)){
            char = advanceChar(parser);
        }
        parser.tokenValue += parser.source.slice(index, parser.index);
        parser.setToken(208897, true);
    }
    return parser.getToken();
}
class Scope {
    parser;
    type;
    parent;
    scopeError;
    variableBindings = new Map();
    constructor(parser, type = 2, parent){
        this.parser = parser;
        this.type = type;
        this.parent = parent;
    }
    createChildScope(type) {
        return new Scope(this.parser, type, this);
    }
    addVarOrBlock(context, name, kind, origin) {
        if (kind & 4) {
            this.addVarName(context, name, kind);
        } else {
            this.addBlockName(context, name, kind, origin);
        }
        if (origin & 64) {
            this.parser.declareUnboundVariable(name);
        }
    }
    addVarName(context, name, kind) {
        const { parser } = this;
        let currentScope = this;
        while(currentScope && (currentScope.type & 128) === 0){
            const { variableBindings } = currentScope;
            const value = variableBindings.get(name);
            if (value && value & 248) {
                if (parser.options.webcompat && (context & 1) === 0 && (kind & 128 && value & 68 || value & 128 && kind & 68)) ;
                else {
                    parser.report(145, name);
                }
            }
            if (currentScope === this) {
                if (value && value & 1 && kind & 1) {
                    currentScope.recordScopeError(145, name);
                }
            }
            if (value && (value & 256 || value & 512 && !parser.options.webcompat)) {
                parser.report(145, name);
            }
            currentScope.variableBindings.set(name, kind);
            currentScope = currentScope.parent;
        }
    }
    hasVariable(name) {
        return this.variableBindings.has(name);
    }
    addBlockName(context, name, kind, origin) {
        const { parser } = this;
        const value = this.variableBindings.get(name);
        if (value && (value & 2) === 0) {
            if (kind & 1) {
                this.recordScopeError(145, name);
            } else if (parser.options.webcompat && (context & 1) === 0 && origin & 2 && value === 64 && kind === 64) ;
            else {
                parser.report(145, name);
            }
        }
        if (this.type & 64 && this.parent?.hasVariable(name) && (this.parent.variableBindings.get(name) & 2) === 0) {
            parser.report(145, name);
        }
        if (this.type & 512 && value && (value & 2) === 0) {
            if (kind & 1) {
                this.recordScopeError(145, name);
            }
        }
        if (this.type & 32) {
            if (this.parent.variableBindings.get(name) & 768) parser.report(159, name);
        }
        this.variableBindings.set(name, kind);
    }
    recordScopeError(type, ...params) {
        this.scopeError = {
            type,
            params,
            start: this.parser.tokenStart,
            end: this.parser.currentLocation
        };
    }
    reportScopeError() {
        const { scopeError } = this;
        if (!scopeError) {
            return;
        }
        throw new ParseError(scopeError.start, scopeError.end, scopeError.type, ...scopeError.params);
    }
}
function createArrowHeadParsingScope(parser, context, value) {
    const scope = parser.createScope().createChildScope(512);
    scope.addBlockName(context, value, 1, 0);
    return scope;
}
class PrivateScope {
    parser;
    parent;
    refs = Object.create(null);
    privateIdentifiers = new Map();
    constructor(parser, parent){
        this.parser = parser;
        this.parent = parent;
    }
    addPrivateIdentifier(name, kind) {
        const { privateIdentifiers } = this;
        let focusKind = kind & (32 | 768);
        if (!(focusKind & 768)) focusKind |= 768;
        const value = privateIdentifiers.get(name);
        if (this.hasPrivateIdentifier(name) && ((value & 32) !== (focusKind & 32) || value & focusKind & 768)) {
            this.parser.report(146, name);
        }
        privateIdentifiers.set(name, this.hasPrivateIdentifier(name) ? value | focusKind : focusKind);
    }
    addPrivateIdentifierRef(name) {
        this.refs[name] ??= [];
        this.refs[name].push(this.parser.tokenStart);
    }
    isPrivateIdentifierDefined(name) {
        return this.hasPrivateIdentifier(name) || Boolean(this.parent?.isPrivateIdentifierDefined(name));
    }
    validatePrivateIdentifierRefs() {
        for(const name in this.refs){
            if (!this.isPrivateIdentifierDefined(name)) {
                const { index, line, column } = this.refs[name][0];
                throw new ParseError({
                    index,
                    line,
                    column
                }, {
                    index: index + name.length,
                    line,
                    column: column + name.length
                }, 4, name);
            }
        }
    }
    hasPrivateIdentifier(name) {
        return this.privateIdentifiers.has(name);
    }
}
class Parser {
    source;
    options;
    lastOnToken = null;
    token = 1048576;
    flags = 0;
    index = 0;
    line = 1;
    column = 0;
    startIndex = 0;
    end = 0;
    tokenIndex = 0;
    startColumn = 0;
    tokenColumn = 0;
    tokenLine = 1;
    startLine = 1;
    tokenValue = '';
    tokenRaw = '';
    tokenRegExp = void 0;
    currentChar = 0;
    exportedNames = new Set();
    exportedBindings = new Set();
    assignable = 1;
    destructible = 0;
    leadingDecorators = {
        decorators: []
    };
    constructor(source, options = {}){
        this.source = source;
        this.options = options;
        this.end = source.length;
        this.currentChar = source.charCodeAt(0);
    }
    getToken() {
        return this.token;
    }
    setToken(value, replaceLast = false) {
        this.token = value;
        const { onToken } = this.options;
        if (onToken) {
            if (value !== 1048576) {
                const loc = {
                    start: {
                        line: this.tokenLine,
                        column: this.tokenColumn
                    },
                    end: {
                        line: this.line,
                        column: this.column
                    }
                };
                if (!replaceLast && this.lastOnToken) {
                    onToken(...this.lastOnToken);
                }
                this.lastOnToken = [
                    convertTokenType(value),
                    this.tokenIndex,
                    this.index,
                    loc
                ];
            } else {
                if (this.lastOnToken) {
                    onToken(...this.lastOnToken);
                    this.lastOnToken = null;
                }
            }
        }
        return value;
    }
    get tokenStart() {
        return {
            index: this.tokenIndex,
            line: this.tokenLine,
            column: this.tokenColumn
        };
    }
    get currentLocation() {
        return {
            index: this.index,
            line: this.line,
            column: this.column
        };
    }
    finishNode(node, start, end) {
        if (this.options.ranges) {
            node.start = start.index;
            const endIndex = end ? end.index : this.startIndex;
            node.end = endIndex;
            node.range = [
                start.index,
                endIndex
            ];
        }
        if (this.options.loc) {
            node.loc = {
                start: {
                    line: start.line,
                    column: start.column
                },
                end: end ? {
                    line: end.line,
                    column: end.column
                } : {
                    line: this.startLine,
                    column: this.startColumn
                }
            };
            if (this.options.source) {
                node.loc.source = this.options.source;
            }
        }
        return node;
    }
    addBindingToExports(name) {
        this.exportedBindings.add(name);
    }
    declareUnboundVariable(name) {
        const { exportedNames } = this;
        if (exportedNames.has(name)) {
            this.report(147, name);
        }
        exportedNames.add(name);
    }
    report(type, ...params) {
        throw new ParseError(this.tokenStart, this.currentLocation, type, ...params);
    }
    createScopeIfLexical(type, parent) {
        if (this.options.lexical) {
            return this.createScope(type, parent);
        }
        return undefined;
    }
    createScope(type, parent) {
        return new Scope(this, type, parent);
    }
    createPrivateScopeIfLexical(parent) {
        if (this.options.lexical) {
            return new PrivateScope(this, parent);
        }
        return undefined;
    }
}
function pushComment(comments, options) {
    return function(type, value, start, end, loc) {
        const comment = {
            type,
            value
        };
        if (options.ranges) {
            comment.start = start;
            comment.end = end;
            comment.range = [
                start,
                end
            ];
        }
        if (options.loc) {
            comment.loc = loc;
        }
        comments.push(comment);
    };
}
function pushToken(tokens, options) {
    return function(type, start, end, loc) {
        const token = {
            token: type
        };
        if (options.ranges) {
            token.start = start;
            token.end = end;
            token.range = [
                start,
                end
            ];
        }
        if (options.loc) {
            token.loc = loc;
        }
        tokens.push(token);
    };
}
function normalizeOptions(rawOptions) {
    const options = {
        ...rawOptions
    };
    if (options.onComment) {
        options.onComment = Array.isArray(options.onComment) ? pushComment(options.onComment, options) : options.onComment;
    }
    if (options.onToken) {
        options.onToken = Array.isArray(options.onToken) ? pushToken(options.onToken, options) : options.onToken;
    }
    return options;
}
function parseSource(source, rawOptions = {}, context = 0) {
    const options = normalizeOptions(rawOptions);
    if (options.module) context |= 2 | 1;
    if (options.globalReturn) context |= 4096;
    if (options.impliedStrict) context |= 1;
    const parser = new Parser(source, options);
    skipHashBang(parser);
    const scope = parser.createScopeIfLexical();
    let body = [];
    let sourceType = 'script';
    if (context & 2) {
        sourceType = 'module';
        body = parseModuleItemList(parser, context | 8, scope);
        if (scope) {
            for (const name of parser.exportedBindings){
                if (!scope.hasVariable(name)) parser.report(148, name);
            }
        }
    } else {
        body = parseStatementList(parser, context | 8, scope);
    }
    return parser.finishNode({
        type: 'Program',
        sourceType,
        body
    }, {
        index: 0,
        line: 1,
        column: 0
    }, parser.currentLocation);
}
function parseStatementList(parser, context, scope) {
    nextToken(parser, context | 32 | 262144);
    const statements = [];
    while(parser.getToken() === 134283267){
        const { index, tokenValue, tokenStart, tokenIndex } = parser;
        const token = parser.getToken();
        const expr = parseLiteral(parser, context);
        if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
            context |= 1;
            if (parser.flags & 64) {
                throw new ParseError(parser.tokenStart, parser.currentLocation, 9);
            }
            if (parser.flags & 4096) {
                throw new ParseError(parser.tokenStart, parser.currentLocation, 15);
            }
        }
        statements.push(parseDirective(parser, context, expr, token, tokenStart));
    }
    while(parser.getToken() !== 1048576){
        statements.push(parseStatementListItem(parser, context, scope, undefined, 4, {}));
    }
    return statements;
}
function parseModuleItemList(parser, context, scope) {
    nextToken(parser, context | 32);
    const statements = [];
    while(parser.getToken() === 134283267){
        const { tokenStart } = parser;
        const token = parser.getToken();
        statements.push(parseDirective(parser, context, parseLiteral(parser, context), token, tokenStart));
    }
    while(parser.getToken() !== 1048576){
        statements.push(parseModuleItem(parser, context, scope));
    }
    return statements;
}
function parseModuleItem(parser, context, scope) {
    if (parser.getToken() === 132) {
        Object.assign(parser.leadingDecorators, {
            start: parser.tokenStart,
            decorators: parseDecorators(parser, context, undefined)
        });
    }
    let moduleItem;
    switch(parser.getToken()){
        case 20564:
            moduleItem = parseExportDeclaration(parser, context, scope);
            break;
        case 86106:
            moduleItem = parseImportDeclaration(parser, context, scope);
            break;
        default:
            moduleItem = parseStatementListItem(parser, context, scope, undefined, 4, {});
    }
    if (parser.leadingDecorators?.decorators.length) {
        parser.report(170);
    }
    return moduleItem;
}
function parseStatementListItem(parser, context, scope, privateScope, origin, labels) {
    const start = parser.tokenStart;
    switch(parser.getToken()){
        case 86104:
            return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 0, start);
        case 132:
        case 86094:
            return parseClassDeclaration(parser, context, scope, privateScope, 0);
        case 86090:
            return parseLexicalDeclaration(parser, context, scope, privateScope, 16, 0);
        case 241737:
            return parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin);
        case 20564:
            parser.report(103, 'export');
        case 86106:
            nextToken(parser, context);
            switch(parser.getToken()){
                case 67174411:
                    return parseImportCallDeclaration(parser, context, privateScope, start);
                case 67108877:
                    return parseImportMetaDeclaration(parser, context, start);
                default:
                    parser.report(103, 'import');
            }
        case 209005:
            return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 1);
        default:
            return parseStatement(parser, context, scope, privateScope, origin, labels, 1);
    }
}
function parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
    switch(parser.getToken()){
        case 86088:
            return parseVariableStatement(parser, context, scope, privateScope, 0);
        case 20572:
            return parseReturnStatement(parser, context, privateScope);
        case 20569:
            return parseIfStatement(parser, context, scope, privateScope, labels);
        case 20567:
            return parseForStatement(parser, context, scope, privateScope, labels);
        case 20562:
            return parseDoWhileStatement(parser, context, scope, privateScope, labels);
        case 20578:
            return parseWhileStatement(parser, context, scope, privateScope, labels);
        case 86110:
            return parseSwitchStatement(parser, context, scope, privateScope, labels);
        case 1074790417:
            return parseEmptyStatement(parser, context);
        case 2162700:
            return parseBlock(parser, context, scope?.createChildScope(), privateScope, labels, parser.tokenStart);
        case 86112:
            return parseThrowStatement(parser, context, privateScope);
        case 20555:
            return parseBreakStatement(parser, context, labels);
        case 20559:
            return parseContinueStatement(parser, context, labels);
        case 20577:
            return parseTryStatement(parser, context, scope, privateScope, labels);
        case 20579:
            return parseWithStatement(parser, context, scope, privateScope, labels);
        case 20560:
            return parseDebuggerStatement(parser, context);
        case 209005:
            return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 0);
        case 20557:
            parser.report(162);
        case 20566:
            parser.report(163);
        case 86104:
            parser.report(context & 1 ? 76 : !parser.options.webcompat ? 78 : 77);
        case 86094:
            parser.report(79);
        default:
            return parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl);
    }
}
function parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
    const { tokenValue, tokenStart } = parser;
    const token = parser.getToken();
    let expr;
    switch(token){
        case 241737:
            expr = parseIdentifier(parser, context);
            if (context & 1) parser.report(85);
            if (parser.getToken() === 69271571) parser.report(84);
            break;
        default:
            expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, parser.tokenStart);
    }
    if (token & 143360 && parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, allowFuncDecl, tokenStart);
    }
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
    expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, expr);
    }
    return parseExpressionStatement(parser, context, expr, tokenStart);
}
function parseBlock(parser, context, scope, privateScope, labels, start = parser.tokenStart, type = 'BlockStatement') {
    const body = [];
    consume(parser, context | 32, 2162700);
    while(parser.getToken() !== 1074790415){
        body.push(parseStatementListItem(parser, context, scope, privateScope, 2, {
            $: labels
        }));
    }
    consume(parser, context | 32, 1074790415);
    return parser.finishNode({
        type,
        body
    }, start);
}
function parseReturnStatement(parser, context, privateScope) {
    if ((context & 4096) === 0) parser.report(92);
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    const argument = parser.flags & 1 || parser.getToken() & 1048576 ? null : parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ReturnStatement',
        argument
    }, start);
}
function parseExpressionStatement(parser, context, expression, start) {
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ExpressionStatement',
        expression
    }, start);
}
function parseLabelledStatement(parser, context, scope, privateScope, origin, labels, value, expr, token, allowFuncDecl, start) {
    validateBindingIdentifier(parser, context, 0, token, 1);
    validateAndDeclareLabel(parser, labels, value);
    nextToken(parser, context | 32);
    const body = allowFuncDecl && (context & 1) === 0 && parser.options.webcompat && parser.getToken() === 86104 ? parseFunctionDeclaration(parser, context, scope?.createChildScope(), privateScope, origin, 0, 0, 0, parser.tokenStart) : parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl);
    return parser.finishNode({
        type: 'LabeledStatement',
        label: expr,
        body
    }, start);
}
function parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
    const { tokenValue, tokenStart: start } = parser;
    const token = parser.getToken();
    let expr = parseIdentifier(parser, context);
    if (parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, 1, start);
    }
    const asyncNewLine = parser.flags & 1;
    if (!asyncNewLine) {
        if (parser.getToken() === 86104) {
            if (!allowFuncDecl) parser.report(123);
            return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 1, start);
        }
        if (isValidIdentifier(context, parser.getToken())) {
            expr = parseAsyncArrowAfterIdent(parser, context, privateScope, 1, start);
            if (parser.getToken() === 18) expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
            return parseExpressionStatement(parser, context, expr, start);
        }
    }
    if (parser.getToken() === 67174411) {
        expr = parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, 1, 1, 0, asyncNewLine, start);
    } else {
        if (parser.getToken() === 10) {
            classifyIdentifier(parser, context, token);
            if ((token & 36864) === 36864) {
                parser.flags |= 256;
            }
            expr = parseArrowFromIdentifier(parser, context | 2048, privateScope, parser.tokenValue, expr, 0, 1, 0, start);
        }
        parser.assignable = 1;
    }
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start);
    expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, start, expr);
    parser.assignable = 1;
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
    }
    return parseExpressionStatement(parser, context, expr, start);
}
function parseDirective(parser, context, expression, token, start) {
    const endIndex = parser.startIndex;
    if (token !== 1074790417) {
        parser.assignable = 2;
        expression = parseMemberOrUpdateExpression(parser, context, undefined, expression, 0, 0, start);
        if (parser.getToken() !== 1074790417) {
            expression = parseAssignmentExpression(parser, context, undefined, 0, 0, start, expression);
            if (parser.getToken() === 18) {
                expression = parseSequenceExpression(parser, context, undefined, 0, start, expression);
            }
        }
        matchOrInsertSemicolon(parser, context | 32);
    }
    const node = {
        type: 'ExpressionStatement',
        expression
    };
    if (expression.type === 'Literal' && typeof expression.value === 'string') {
        node.directive = parser.source.slice(start.index + 1, endIndex - 1);
    }
    return parser.finishNode(node, start);
}
function parseEmptyStatement(parser, context) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    return parser.finishNode({
        type: 'EmptyStatement'
    }, start);
}
function parseThrowStatement(parser, context, privateScope) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    if (parser.flags & 1) parser.report(90);
    const argument = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ThrowStatement',
        argument
    }, start);
}
function parseIfStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context | 32, 67174411);
    parser.assignable = 1;
    const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const consequent = parseConsequentOrAlternative(parser, context, scope, privateScope, labels);
    let alternate = null;
    if (parser.getToken() === 20563) {
        nextToken(parser, context | 32);
        alternate = parseConsequentOrAlternative(parser, context, scope, privateScope, labels);
    }
    return parser.finishNode({
        type: 'IfStatement',
        test,
        consequent,
        alternate
    }, start);
}
function parseConsequentOrAlternative(parser, context, scope, privateScope, labels) {
    const { tokenStart } = parser;
    return context & 1 || !parser.options.webcompat || parser.getToken() !== 86104 ? parseStatement(parser, context, scope, privateScope, 0, {
        $: labels
    }, 0) : parseFunctionDeclaration(parser, context, scope?.createChildScope(), privateScope, 0, 0, 0, 0, tokenStart);
}
function parseSwitchStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context | 32, 67174411);
    const discriminant = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context, 16);
    consume(parser, context, 2162700);
    const cases = [];
    let seenDefault = 0;
    scope = scope?.createChildScope(8);
    while(parser.getToken() !== 1074790415){
        const { tokenStart } = parser;
        let test = null;
        const consequent = [];
        if (consumeOpt(parser, context | 32, 20556)) {
            test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
        } else {
            consume(parser, context | 32, 20561);
            if (seenDefault) parser.report(89);
            seenDefault = 1;
        }
        consume(parser, context | 32, 21);
        while(parser.getToken() !== 20556 && parser.getToken() !== 1074790415 && parser.getToken() !== 20561){
            consequent.push(parseStatementListItem(parser, context | 4, scope, privateScope, 2, {
                $: labels
            }));
        }
        cases.push(parser.finishNode({
            type: 'SwitchCase',
            test,
            consequent
        }, tokenStart));
    }
    consume(parser, context | 32, 1074790415);
    return parser.finishNode({
        type: 'SwitchStatement',
        discriminant,
        cases
    }, start);
}
function parseWhileStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context | 32, 67174411);
    const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
    return parser.finishNode({
        type: 'WhileStatement',
        test,
        body
    }, start);
}
function parseIterationStatementBody(parser, context, scope, privateScope, labels) {
    return parseStatement(parser, (context | 131072) ^ 131072 | 128, scope, privateScope, 0, {
        loop: 1,
        $: labels
    }, 0);
}
function parseContinueStatement(parser, context, labels) {
    if ((context & 128) === 0) parser.report(68);
    const start = parser.tokenStart;
    nextToken(parser, context);
    let label = null;
    if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
        const { tokenValue } = parser;
        label = parseIdentifier(parser, context | 32);
        if (!isValidLabel(parser, labels, tokenValue, 1)) parser.report(138, tokenValue);
    }
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ContinueStatement',
        label
    }, start);
}
function parseBreakStatement(parser, context, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    let label = null;
    if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
        const { tokenValue } = parser;
        label = parseIdentifier(parser, context | 32);
        if (!isValidLabel(parser, labels, tokenValue, 0)) parser.report(138, tokenValue);
    } else if ((context & (4 | 128)) === 0) {
        parser.report(69);
    }
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'BreakStatement',
        label
    }, start);
}
function parseWithStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    if (context & 1) parser.report(91);
    consume(parser, context | 32, 67174411);
    const object = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const body = parseStatement(parser, context, scope, privateScope, 2, labels, 0);
    return parser.finishNode({
        type: 'WithStatement',
        object,
        body
    }, start);
}
function parseDebuggerStatement(parser, context) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'DebuggerStatement'
    }, start);
}
function parseTryStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    const firstScope = scope?.createChildScope(16);
    const block = parseBlock(parser, context, firstScope, privateScope, {
        $: labels
    });
    const { tokenStart } = parser;
    const handler = consumeOpt(parser, context | 32, 20557) ? parseCatchBlock(parser, context, scope, privateScope, labels, tokenStart) : null;
    let finalizer = null;
    if (parser.getToken() === 20566) {
        nextToken(parser, context | 32);
        const finalizerScope = scope?.createChildScope(4);
        const block = parseBlock(parser, context, finalizerScope, privateScope, {
            $: labels
        });
        finalizer = block;
    }
    if (!handler && !finalizer) {
        parser.report(88);
    }
    return parser.finishNode({
        type: 'TryStatement',
        block,
        handler,
        finalizer
    }, start);
}
function parseCatchBlock(parser, context, scope, privateScope, labels, start) {
    let param = null;
    let additionalScope = scope;
    if (consumeOpt(parser, context, 67174411)) {
        scope = scope?.createChildScope(4);
        param = parseBindingPattern(parser, context, scope, privateScope, (parser.getToken() & 2097152) === 2097152 ? 256 : 512, 0);
        if (parser.getToken() === 18) {
            parser.report(86);
        } else if (parser.getToken() === 1077936155) {
            parser.report(87);
        }
        consume(parser, context | 32, 16);
    }
    additionalScope = scope?.createChildScope(32);
    const body = parseBlock(parser, context, additionalScope, privateScope, {
        $: labels
    });
    return parser.finishNode({
        type: 'CatchClause',
        param,
        body
    }, start);
}
function parseStaticBlock(parser, context, scope, privateScope, start) {
    scope = scope?.createChildScope();
    const ctorContext = 512 | 4096 | 1024 | 4 | 128;
    context = (context | ctorContext) ^ ctorContext | 256 | 2048 | 524288 | 65536;
    return parseBlock(parser, context, scope, privateScope, {}, start, 'StaticBlock');
}
function parseDoWhileStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
    consume(parser, context, 20578);
    consume(parser, context | 32, 67174411);
    const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    consumeOpt(parser, context | 32, 1074790417);
    return parser.finishNode({
        type: 'DoWhileStatement',
        body,
        test
    }, start);
}
function parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin) {
    const { tokenValue, tokenStart } = parser;
    const token = parser.getToken();
    let expr = parseIdentifier(parser, context);
    if (parser.getToken() & (143360 | 2097152)) {
        const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 8, 0);
        matchOrInsertSemicolon(parser, context | 32);
        return parser.finishNode({
            type: 'VariableDeclaration',
            kind: 'let',
            declarations
        }, tokenStart);
    }
    parser.assignable = 1;
    if (context & 1) parser.report(85);
    if (parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, {}, tokenValue, expr, token, 0, tokenStart);
    }
    if (parser.getToken() === 10) {
        let scope = void 0;
        if (parser.options.lexical) scope = createArrowHeadParsingScope(parser, context, tokenValue);
        parser.flags = (parser.flags | 128) ^ 128;
        expr = parseArrowFunctionExpression(parser, context, scope, privateScope, [
            expr
        ], 0, tokenStart);
    } else {
        expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
        expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
    }
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, expr);
    }
    return parseExpressionStatement(parser, context, expr, tokenStart);
}
function parseLexicalDeclaration(parser, context, scope, privateScope, kind, origin) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'VariableDeclaration',
        kind: kind & 8 ? 'let' : 'const',
        declarations
    }, start);
}
function parseVariableStatement(parser, context, scope, privateScope, origin) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 4, origin);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'VariableDeclaration',
        kind: 'var',
        declarations
    }, start);
}
function parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin) {
    let bindingCount = 1;
    const list = [
        parseVariableDeclaration(parser, context, scope, privateScope, kind, origin)
    ];
    while(consumeOpt(parser, context, 18)){
        bindingCount++;
        list.push(parseVariableDeclaration(parser, context, scope, privateScope, kind, origin));
    }
    if (bindingCount > 1 && origin & 32 && parser.getToken() & 262144) {
        parser.report(61, KeywordDescTable[parser.getToken() & 255]);
    }
    return list;
}
function parseVariableDeclaration(parser, context, scope, privateScope, kind, origin) {
    const { tokenStart } = parser;
    const token = parser.getToken();
    let init = null;
    const id = parseBindingPattern(parser, context, scope, privateScope, kind, origin);
    if (parser.getToken() === 1077936155) {
        nextToken(parser, context | 32);
        init = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
        if (origin & 32 || (token & 2097152) === 0) {
            if (parser.getToken() === 471156 || parser.getToken() === 8673330 && (token & 2097152 || (kind & 4) === 0 || context & 1)) {
                throw new ParseError(tokenStart, parser.currentLocation, 60, parser.getToken() === 471156 ? 'of' : 'in');
            }
        }
    } else if ((kind & 16 || (token & 2097152) > 0) && (parser.getToken() & 262144) !== 262144) {
        parser.report(59, kind & 16 ? 'const' : 'destructuring');
    }
    return parser.finishNode({
        type: 'VariableDeclarator',
        id,
        init
    }, tokenStart);
}
function parseForStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const forAwait = ((context & 2048) > 0 || (context & 2) > 0 && (context & 8) > 0) && consumeOpt(parser, context, 209006);
    consume(parser, context | 32, 67174411);
    scope = scope?.createChildScope(1);
    let test = null;
    let update = null;
    let destructible = 0;
    let init = null;
    let isVarDecl = parser.getToken() === 86088 || parser.getToken() === 241737 || parser.getToken() === 86090;
    let right;
    const { tokenStart } = parser;
    const token = parser.getToken();
    if (isVarDecl) {
        if (token === 241737) {
            init = parseIdentifier(parser, context);
            if (parser.getToken() & (143360 | 2097152)) {
                if (parser.getToken() === 8673330) {
                    if (context & 1) parser.report(67);
                } else {
                    init = parser.finishNode({
                        type: 'VariableDeclaration',
                        kind: 'let',
                        declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 8, 32)
                    }, tokenStart);
                }
                parser.assignable = 1;
            } else if (context & 1) {
                parser.report(67);
            } else {
                isVarDecl = false;
                parser.assignable = 1;
                init = parseMemberOrUpdateExpression(parser, context, privateScope, init, 0, 0, tokenStart);
                if (parser.getToken() === 471156) parser.report(115);
            }
        } else {
            nextToken(parser, context);
            init = parser.finishNode(token === 86088 ? {
                type: 'VariableDeclaration',
                kind: 'var',
                declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 4, 32)
            } : {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 16, 32)
            }, tokenStart);
            parser.assignable = 1;
        }
    } else if (token === 1074790417) {
        if (forAwait) parser.report(82);
    } else if ((token & 2097152) === 2097152) {
        const patternStart = parser.tokenStart;
        init = token === 2162700 ? parseObjectLiteralOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32) : parseArrayExpressionOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32);
        destructible = parser.destructible;
        if (destructible & 64) {
            parser.report(63);
        }
        parser.assignable = destructible & 16 ? 2 : 1;
        init = parseMemberOrUpdateExpression(parser, context | 131072, privateScope, init, 0, 0, patternStart);
    } else {
        init = parseLeftHandSideExpression(parser, context | 131072, privateScope, 1, 0, 1);
    }
    if ((parser.getToken() & 262144) === 262144) {
        if (parser.getToken() === 471156) {
            if (parser.assignable & 2) parser.report(80, forAwait ? 'await' : 'of');
            reinterpretToPattern(parser, init);
            nextToken(parser, context | 32);
            right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
            consume(parser, context | 32, 16);
            const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
            return parser.finishNode({
                type: 'ForOfStatement',
                left: init,
                right,
                body,
                await: forAwait
            }, start);
        }
        if (parser.assignable & 2) parser.report(80, 'in');
        reinterpretToPattern(parser, init);
        nextToken(parser, context | 32);
        if (forAwait) parser.report(82);
        right = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
        consume(parser, context | 32, 16);
        const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
        return parser.finishNode({
            type: 'ForInStatement',
            body,
            left: init,
            right
        }, start);
    }
    if (forAwait) parser.report(82);
    if (!isVarDecl) {
        if (destructible & 8 && parser.getToken() !== 1077936155) {
            parser.report(80, 'loop');
        }
        init = parseAssignmentExpression(parser, context | 131072, privateScope, 0, 0, tokenStart, init);
    }
    if (parser.getToken() === 18) init = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, init);
    consume(parser, context | 32, 1074790417);
    if (parser.getToken() !== 1074790417) test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 1074790417);
    if (parser.getToken() !== 16) update = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
    return parser.finishNode({
        type: 'ForStatement',
        init,
        test,
        update,
        body
    }, start);
}
function parseRestrictedIdentifier(parser, context, scope) {
    if (!isValidIdentifier(context, parser.getToken())) parser.report(118);
    if ((parser.getToken() & 537079808) === 537079808) parser.report(119);
    scope?.addBlockName(context, parser.tokenValue, 8, 0);
    return parseIdentifier(parser, context);
}
function parseImportDeclaration(parser, context, scope) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    let source = null;
    const { tokenStart } = parser;
    let specifiers = [];
    if (parser.getToken() === 134283267) {
        source = parseLiteral(parser, context);
    } else {
        if (parser.getToken() & 143360) {
            const local = parseRestrictedIdentifier(parser, context, scope);
            specifiers = [
                parser.finishNode({
                    type: 'ImportDefaultSpecifier',
                    local
                }, tokenStart)
            ];
            if (consumeOpt(parser, context, 18)) {
                switch(parser.getToken()){
                    case 8391476:
                        specifiers.push(parseImportNamespaceSpecifier(parser, context, scope));
                        break;
                    case 2162700:
                        parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                        break;
                    default:
                        parser.report(107);
                }
            }
        } else {
            switch(parser.getToken()){
                case 8391476:
                    specifiers = [
                        parseImportNamespaceSpecifier(parser, context, scope)
                    ];
                    break;
                case 2162700:
                    parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                    break;
                case 67174411:
                    return parseImportCallDeclaration(parser, context, undefined, start);
                case 67108877:
                    return parseImportMetaDeclaration(parser, context, start);
                default:
                    parser.report(30, KeywordDescTable[parser.getToken() & 255]);
            }
        }
        source = parseModuleSpecifier(parser, context);
    }
    const attributes = parseImportAttributes(parser, context);
    const node = {
        type: 'ImportDeclaration',
        specifiers,
        source,
        attributes
    };
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode(node, start);
}
function parseImportNamespaceSpecifier(parser, context, scope) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    consume(parser, context, 77932);
    if ((parser.getToken() & 134217728) === 134217728) {
        throw new ParseError(tokenStart, parser.currentLocation, 30, KeywordDescTable[parser.getToken() & 255]);
    }
    return parser.finishNode({
        type: 'ImportNamespaceSpecifier',
        local: parseRestrictedIdentifier(parser, context, scope)
    }, tokenStart);
}
function parseModuleSpecifier(parser, context) {
    consume(parser, context, 209011);
    if (parser.getToken() !== 134283267) parser.report(105, 'Import');
    return parseLiteral(parser, context);
}
function parseImportSpecifierOrNamedImports(parser, context, scope, specifiers) {
    nextToken(parser, context);
    while(parser.getToken() & 143360 || parser.getToken() === 134283267){
        let { tokenValue, tokenStart } = parser;
        const token = parser.getToken();
        const imported = parseModuleExportName(parser, context);
        let local;
        if (consumeOpt(parser, context, 77932)) {
            if ((parser.getToken() & 134217728) === 134217728 || parser.getToken() === 18) {
                parser.report(106);
            } else {
                validateBindingIdentifier(parser, context, 16, parser.getToken(), 0);
            }
            tokenValue = parser.tokenValue;
            local = parseIdentifier(parser, context);
        } else if (imported.type === 'Identifier') {
            validateBindingIdentifier(parser, context, 16, token, 0);
            local = imported;
        } else {
            parser.report(25, KeywordDescTable[77932 & 255]);
        }
        scope?.addBlockName(context, tokenValue, 8, 0);
        specifiers.push(parser.finishNode({
            type: 'ImportSpecifier',
            local,
            imported
        }, tokenStart));
        if (parser.getToken() !== 1074790415) consume(parser, context, 18);
    }
    consume(parser, context, 1074790415);
    return specifiers;
}
function parseImportMetaDeclaration(parser, context, start) {
    let expr = parseImportMetaExpression(parser, context, parser.finishNode({
        type: 'Identifier',
        name: 'import'
    }, start), start);
    expr = parseMemberOrUpdateExpression(parser, context, undefined, expr, 0, 0, start);
    expr = parseAssignmentExpression(parser, context, undefined, 0, 0, start, expr);
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, undefined, 0, start, expr);
    }
    return parseExpressionStatement(parser, context, expr, start);
}
function parseImportCallDeclaration(parser, context, privateScope, start) {
    let expr = parseImportExpression(parser, context, privateScope, 0, start);
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start);
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
    }
    return parseExpressionStatement(parser, context, expr, start);
}
function parseExportDeclaration(parser, context, scope) {
    const start = parser.leadingDecorators.decorators.length ? parser.leadingDecorators.start : parser.tokenStart;
    nextToken(parser, context | 32);
    const specifiers = [];
    let declaration = null;
    let source = null;
    let attributes = [];
    if (consumeOpt(parser, context | 32, 20561)) {
        switch(parser.getToken()){
            case 86104:
                {
                    declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 1, 0, parser.tokenStart);
                    break;
                }
            case 132:
            case 86094:
                declaration = parseClassDeclaration(parser, context, scope, undefined, 1);
                break;
            case 209005:
                {
                    const { tokenStart } = parser;
                    declaration = parseIdentifier(parser, context);
                    const { flags } = parser;
                    if ((flags & 1) === 0) {
                        if (parser.getToken() === 86104) {
                            declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 1, 1, tokenStart);
                        } else {
                            if (parser.getToken() === 67174411) {
                                declaration = parseAsyncArrowOrCallExpression(parser, context, undefined, declaration, 1, 1, 0, flags, tokenStart);
                                declaration = parseMemberOrUpdateExpression(parser, context, undefined, declaration, 0, 0, tokenStart);
                                declaration = parseAssignmentExpression(parser, context, undefined, 0, 0, tokenStart, declaration);
                            } else if (parser.getToken() & 143360) {
                                if (scope) scope = createArrowHeadParsingScope(parser, context, parser.tokenValue);
                                declaration = parseIdentifier(parser, context);
                                declaration = parseArrowFunctionExpression(parser, context, scope, undefined, [
                                    declaration
                                ], 1, tokenStart);
                            }
                        }
                    }
                    break;
                }
            default:
                declaration = parseExpression(parser, context, undefined, 1, 0, parser.tokenStart);
                matchOrInsertSemicolon(parser, context | 32);
        }
        if (scope) parser.declareUnboundVariable('default');
        return parser.finishNode({
            type: 'ExportDefaultDeclaration',
            declaration
        }, start);
    }
    switch(parser.getToken()){
        case 8391476:
            {
                nextToken(parser, context);
                let exported = null;
                const isNamedDeclaration = consumeOpt(parser, context, 77932);
                if (isNamedDeclaration) {
                    if (scope) parser.declareUnboundVariable(parser.tokenValue);
                    exported = parseModuleExportName(parser, context);
                }
                consume(parser, context, 209011);
                if (parser.getToken() !== 134283267) parser.report(105, 'Export');
                source = parseLiteral(parser, context);
                const attributes = parseImportAttributes(parser, context);
                const node = {
                    type: 'ExportAllDeclaration',
                    source,
                    exported,
                    attributes
                };
                matchOrInsertSemicolon(parser, context | 32);
                return parser.finishNode(node, start);
            }
        case 2162700:
            {
                nextToken(parser, context);
                const tmpExportedNames = [];
                const tmpExportedBindings = [];
                let hasLiteralLocal = 0;
                while(parser.getToken() & 143360 || parser.getToken() === 134283267){
                    const { tokenStart, tokenValue } = parser;
                    const local = parseModuleExportName(parser, context);
                    if (local.type === 'Literal') {
                        hasLiteralLocal = 1;
                    }
                    let exported;
                    if (parser.getToken() === 77932) {
                        nextToken(parser, context);
                        if ((parser.getToken() & 143360) === 0 && parser.getToken() !== 134283267) {
                            parser.report(106);
                        }
                        if (scope) {
                            tmpExportedNames.push(parser.tokenValue);
                            tmpExportedBindings.push(tokenValue);
                        }
                        exported = parseModuleExportName(parser, context);
                    } else {
                        if (scope) {
                            tmpExportedNames.push(parser.tokenValue);
                            tmpExportedBindings.push(parser.tokenValue);
                        }
                        exported = local;
                    }
                    specifiers.push(parser.finishNode({
                        type: 'ExportSpecifier',
                        local,
                        exported
                    }, tokenStart));
                    if (parser.getToken() !== 1074790415) consume(parser, context, 18);
                }
                consume(parser, context, 1074790415);
                if (consumeOpt(parser, context, 209011)) {
                    if (parser.getToken() !== 134283267) parser.report(105, 'Export');
                    source = parseLiteral(parser, context);
                    attributes = parseImportAttributes(parser, context);
                    if (scope) {
                        tmpExportedNames.forEach((n)=>parser.declareUnboundVariable(n));
                    }
                } else {
                    if (hasLiteralLocal) {
                        parser.report(172);
                    }
                    if (scope) {
                        tmpExportedNames.forEach((n)=>parser.declareUnboundVariable(n));
                        tmpExportedBindings.forEach((b)=>parser.addBindingToExports(b));
                    }
                }
                matchOrInsertSemicolon(parser, context | 32);
                break;
            }
        case 132:
        case 86094:
            declaration = parseClassDeclaration(parser, context, scope, undefined, 2);
            break;
        case 86104:
            declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 2, 0, parser.tokenStart);
            break;
        case 241737:
            declaration = parseLexicalDeclaration(parser, context, scope, undefined, 8, 64);
            break;
        case 86090:
            declaration = parseLexicalDeclaration(parser, context, scope, undefined, 16, 64);
            break;
        case 86088:
            declaration = parseVariableStatement(parser, context, scope, undefined, 64);
            break;
        case 209005:
            {
                const { tokenStart } = parser;
                nextToken(parser, context);
                if ((parser.flags & 1) === 0 && parser.getToken() === 86104) {
                    declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 2, 1, tokenStart);
                    break;
                }
            }
        default:
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    const node = {
        type: 'ExportNamedDeclaration',
        declaration,
        specifiers,
        source,
        attributes: attributes
    };
    return parser.finishNode(node, start);
}
function parseExpression(parser, context, privateScope, canAssign, inGroup, start) {
    let expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, 1, start);
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start);
    return parseAssignmentExpression(parser, context, privateScope, inGroup, 0, start, expr);
}
function parseSequenceExpression(parser, context, privateScope, inGroup, start, expr) {
    const expressions = [
        expr
    ];
    while(consumeOpt(parser, context | 32, 18)){
        expressions.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart));
    }
    return parser.finishNode({
        type: 'SequenceExpression',
        expressions
    }, start);
}
function parseExpressions(parser, context, privateScope, inGroup, canAssign, start) {
    const expr = parseExpression(parser, context, privateScope, canAssign, inGroup, start);
    return parser.getToken() === 18 ? parseSequenceExpression(parser, context, privateScope, inGroup, start, expr) : expr;
}
function parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, start, left) {
    const token = parser.getToken();
    if ((token & 4194304) === 4194304) {
        if (parser.assignable & 2) parser.report(26);
        if (!isPattern && token === 1077936155 && left.type === 'ArrayExpression' || left.type === 'ObjectExpression') {
            reinterpretToPattern(parser, left);
        }
        nextToken(parser, context | 32);
        const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
        parser.assignable = 2;
        return parser.finishNode(isPattern ? {
            type: 'AssignmentPattern',
            left,
            right
        } : {
            type: 'AssignmentExpression',
            left,
            operator: KeywordDescTable[token & 255],
            right
        }, start);
    }
    if ((token & 8388608) === 8388608) {
        left = parseBinaryExpression(parser, context, privateScope, inGroup, start, 4, token, left);
    }
    if (consumeOpt(parser, context | 32, 22)) {
        left = parseConditionalExpression(parser, context, privateScope, left, start);
    }
    return left;
}
function parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, start, left) {
    const token = parser.getToken();
    nextToken(parser, context | 32);
    const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
    left = parser.finishNode(isPattern ? {
        type: 'AssignmentPattern',
        left,
        right
    } : {
        type: 'AssignmentExpression',
        left,
        operator: KeywordDescTable[token & 255],
        right
    }, start);
    parser.assignable = 2;
    return left;
}
function parseConditionalExpression(parser, context, privateScope, test, start) {
    const consequent = parseExpression(parser, (context | 131072) ^ 131072, privateScope, 1, 0, parser.tokenStart);
    consume(parser, context | 32, 21);
    parser.assignable = 1;
    const alternate = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ConditionalExpression',
        test,
        consequent,
        alternate
    }, start);
}
function parseBinaryExpression(parser, context, privateScope, inGroup, start, minPrecedence, operator, left) {
    const bit = -((context & 131072) > 0) & 8673330;
    let t;
    let precedence;
    parser.assignable = 2;
    while(parser.getToken() & 8388608){
        t = parser.getToken();
        precedence = t & 3840;
        if (t & 524288 && operator & 268435456 || operator & 524288 && t & 268435456) {
            parser.report(165);
        }
        if (precedence + ((t === 8391735) << 8) - ((bit === t) << 12) <= minPrecedence) break;
        nextToken(parser, context | 32);
        left = parser.finishNode({
            type: t & 524288 || t & 268435456 ? 'LogicalExpression' : 'BinaryExpression',
            left,
            right: parseBinaryExpression(parser, context, privateScope, inGroup, parser.tokenStart, precedence, t, parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1)),
            operator: KeywordDescTable[t & 255]
        }, start);
    }
    if (parser.getToken() === 1077936155) parser.report(26);
    return left;
}
function parseUnaryExpression(parser, context, privateScope, isLHS, inGroup) {
    if (!isLHS) parser.report(0);
    const { tokenStart } = parser;
    const unaryOperator = parser.getToken();
    nextToken(parser, context | 32);
    const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1);
    if (parser.getToken() === 8391735) parser.report(33);
    if (context & 1 && unaryOperator === 16863276) {
        if (arg.type === 'Identifier') {
            parser.report(121);
        } else if (isPropertyWithPrivateFieldKey(arg)) {
            parser.report(127);
        }
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'UnaryExpression',
        operator: KeywordDescTable[unaryOperator & 255],
        argument: arg,
        prefix: true
    }, tokenStart);
}
function parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start) {
    const token = parser.getToken();
    const expr = parseIdentifier(parser, context);
    const { flags } = parser;
    if ((flags & 1) === 0) {
        if (parser.getToken() === 86104) {
            return parseFunctionExpression(parser, context, privateScope, 1, inGroup, start);
        }
        if (isValidIdentifier(context, parser.getToken())) {
            if (!isLHS) parser.report(0);
            if ((parser.getToken() & 36864) === 36864) {
                parser.flags |= 256;
            }
            return parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start);
        }
    }
    if (!inNew && parser.getToken() === 67174411) {
        return parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, canAssign, 1, 0, flags, start);
    }
    if (parser.getToken() === 10) {
        classifyIdentifier(parser, context, token);
        if (inNew) parser.report(51);
        if ((token & 36864) === 36864) {
            parser.flags |= 256;
        }
        return parseArrowFromIdentifier(parser, context, privateScope, parser.tokenValue, expr, inNew, canAssign, 0, start);
    }
    parser.assignable = 1;
    return expr;
}
function parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start) {
    if (inGroup) parser.destructible |= 256;
    if (context & 1024) {
        nextToken(parser, context | 32);
        if (context & 8192) parser.report(32);
        if (!canAssign) parser.report(26);
        if (parser.getToken() === 22) parser.report(124);
        let argument = null;
        let delegate = false;
        if ((parser.flags & 1) === 0) {
            delegate = consumeOpt(parser, context | 32, 8391476);
            if (parser.getToken() & (12288 | 65536) || delegate) {
                argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
            }
        } else if (parser.getToken() === 8391476) {
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        }
        parser.assignable = 2;
        return parser.finishNode({
            type: 'YieldExpression',
            argument,
            delegate
        }, start);
    }
    if (context & 1) parser.report(97, 'yield');
    return parseIdentifierOrArrow(parser, context, privateScope);
}
function parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start) {
    if (inGroup) parser.destructible |= 128;
    if (context & 524288) parser.report(177);
    const possibleIdentifierOrArrowFunc = parseIdentifierOrArrow(parser, context, privateScope);
    const isIdentifier = possibleIdentifierOrArrowFunc.type === 'ArrowFunctionExpression' || (parser.getToken() & 65536) === 0;
    if (isIdentifier) {
        if (context & 2048) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 176);
        if (context & 2) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 110);
        if (context & 8192 && context & 2048) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 110);
        return possibleIdentifierOrArrowFunc;
    }
    if (context & 8192) {
        throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 31);
    }
    if (context & 2048 || context & 2 && context & 8) {
        if (inNew) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 0);
        const argument = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1);
        if (parser.getToken() === 8391735) parser.report(33);
        parser.assignable = 2;
        return parser.finishNode({
            type: 'AwaitExpression',
            argument
        }, start);
    }
    if (context & 2) throw new ParseError(start, {
        index: parser.startIndex,
        line: parser.startLine,
        column: parser.startColumn
    }, 98);
    return possibleIdentifierOrArrowFunc;
}
function parseFunctionBody(parser, context, scope, privateScope, origin, funcNameToken, functionScope) {
    const { tokenStart } = parser;
    consume(parser, context | 32, 2162700);
    const body = [];
    if (parser.getToken() !== 1074790415) {
        while(parser.getToken() === 134283267){
            const { index, tokenStart, tokenIndex, tokenValue } = parser;
            const token = parser.getToken();
            const expr = parseLiteral(parser, context);
            if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
                context |= 1;
                if (parser.flags & 128) {
                    throw new ParseError(tokenStart, parser.currentLocation, 66);
                }
                if (parser.flags & 64) {
                    throw new ParseError(tokenStart, parser.currentLocation, 9);
                }
                if (parser.flags & 4096) {
                    throw new ParseError(tokenStart, parser.currentLocation, 15);
                }
                functionScope?.reportScopeError();
            }
            body.push(parseDirective(parser, context, expr, token, tokenStart));
        }
        if (context & 1) {
            if (funcNameToken) {
                if ((funcNameToken & 537079808) === 537079808) {
                    parser.report(119);
                }
                if ((funcNameToken & 36864) === 36864) {
                    parser.report(40);
                }
            }
            if (parser.flags & 512) parser.report(119);
            if (parser.flags & 256) parser.report(118);
        }
    }
    parser.flags = (parser.flags | 512 | 256 | 64 | 4096) ^ (512 | 256 | 64 | 4096);
    parser.destructible = (parser.destructible | 256) ^ 256;
    while(parser.getToken() !== 1074790415){
        body.push(parseStatementListItem(parser, context, scope, privateScope, 4, {}));
    }
    consume(parser, origin & (16 | 8) ? context | 32 : context, 1074790415);
    parser.flags &= -4289;
    if (parser.getToken() === 1077936155) parser.report(26);
    return parser.finishNode({
        type: 'BlockStatement',
        body
    }, tokenStart);
}
function parseSuperExpression(parser, context) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    switch(parser.getToken()){
        case 67108990:
            parser.report(167);
        case 67174411:
            {
                if ((context & 512) === 0) parser.report(28);
                parser.assignable = 2;
                break;
            }
        case 69271571:
        case 67108877:
            {
                if ((context & 256) === 0) parser.report(29);
                parser.assignable = 1;
                break;
            }
        default:
            parser.report(30, 'super');
    }
    return parser.finishNode({
        type: 'Super'
    }, tokenStart);
}
function parseLeftHandSideExpression(parser, context, privateScope, canAssign, inGroup, isLHS) {
    const start = parser.tokenStart;
    const expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, isLHS, start);
    return parseMemberOrUpdateExpression(parser, context, privateScope, expression, inGroup, 0, start);
}
function parseUpdateExpression(parser, context, expr, start) {
    if (parser.assignable & 2) parser.report(55);
    const token = parser.getToken();
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'UpdateExpression',
        argument: expr,
        operator: KeywordDescTable[token & 255],
        prefix: false
    }, start);
}
function parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, inChain, start) {
    if ((parser.getToken() & 33619968) === 33619968 && (parser.flags & 1) === 0) {
        expr = parseUpdateExpression(parser, context, expr, start);
    } else if ((parser.getToken() & 67108864) === 67108864) {
        context = (context | 131072) ^ 131072;
        switch(parser.getToken()){
            case 67108877:
                {
                    nextToken(parser, (context | 262144 | 8) ^ 8);
                    if (context & 16 && parser.getToken() === 130 && parser.tokenValue === 'super') {
                        parser.report(173);
                    }
                    parser.assignable = 1;
                    const property = parsePropertyOrPrivatePropertyName(parser, context | 64, privateScope);
                    expr = parser.finishNode({
                        type: 'MemberExpression',
                        object: expr,
                        computed: false,
                        property,
                        optional: false
                    }, start);
                    break;
                }
            case 69271571:
                {
                    let restoreHasOptionalChaining = false;
                    if ((parser.flags & 2048) === 2048) {
                        restoreHasOptionalChaining = true;
                        parser.flags = (parser.flags | 2048) ^ 2048;
                    }
                    nextToken(parser, context | 32);
                    const { tokenStart } = parser;
                    const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenStart);
                    consume(parser, context, 20);
                    parser.assignable = 1;
                    expr = parser.finishNode({
                        type: 'MemberExpression',
                        object: expr,
                        computed: true,
                        property,
                        optional: false
                    }, start);
                    if (restoreHasOptionalChaining) {
                        parser.flags |= 2048;
                    }
                    break;
                }
            case 67174411:
                {
                    if ((parser.flags & 1024) === 1024) {
                        parser.flags = (parser.flags | 1024) ^ 1024;
                        return expr;
                    }
                    let restoreHasOptionalChaining = false;
                    if ((parser.flags & 2048) === 2048) {
                        restoreHasOptionalChaining = true;
                        parser.flags = (parser.flags | 2048) ^ 2048;
                    }
                    const args = parseArguments(parser, context, privateScope, inGroup);
                    parser.assignable = 2;
                    expr = parser.finishNode({
                        type: 'CallExpression',
                        callee: expr,
                        arguments: args,
                        optional: false
                    }, start);
                    if (restoreHasOptionalChaining) {
                        parser.flags |= 2048;
                    }
                    break;
                }
            case 67108990:
                {
                    nextToken(parser, (context | 262144 | 8) ^ 8);
                    parser.flags |= 2048;
                    parser.assignable = 2;
                    expr = parseOptionalChain(parser, context, privateScope, expr, start);
                    break;
                }
            default:
                if ((parser.flags & 2048) === 2048) {
                    parser.report(166);
                }
                parser.assignable = 2;
                expr = parser.finishNode({
                    type: 'TaggedTemplateExpression',
                    tag: expr,
                    quasi: parser.getToken() === 67174408 ? parseTemplate(parser, context | 64, privateScope) : parseTemplateLiteral(parser, context)
                }, start);
        }
        expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 1, start);
    }
    if (inChain === 0 && (parser.flags & 2048) === 2048) {
        parser.flags = (parser.flags | 2048) ^ 2048;
        expr = parser.finishNode({
            type: 'ChainExpression',
            expression: expr
        }, start);
    }
    return expr;
}
function parseOptionalChain(parser, context, privateScope, expr, start) {
    let restoreHasOptionalChaining = false;
    let node;
    if (parser.getToken() === 69271571 || parser.getToken() === 67174411) {
        if ((parser.flags & 2048) === 2048) {
            restoreHasOptionalChaining = true;
            parser.flags = (parser.flags | 2048) ^ 2048;
        }
    }
    if (parser.getToken() === 69271571) {
        nextToken(parser, context | 32);
        const { tokenStart } = parser;
        const property = parseExpressions(parser, context, privateScope, 0, 1, tokenStart);
        consume(parser, context, 20);
        parser.assignable = 2;
        node = parser.finishNode({
            type: 'MemberExpression',
            object: expr,
            computed: true,
            optional: true,
            property
        }, start);
    } else if (parser.getToken() === 67174411) {
        const args = parseArguments(parser, context, privateScope, 0);
        parser.assignable = 2;
        node = parser.finishNode({
            type: 'CallExpression',
            callee: expr,
            arguments: args,
            optional: true
        }, start);
    } else {
        const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
        parser.assignable = 2;
        node = parser.finishNode({
            type: 'MemberExpression',
            object: expr,
            computed: false,
            optional: true,
            property
        }, start);
    }
    if (restoreHasOptionalChaining) {
        parser.flags |= 2048;
    }
    return node;
}
function parsePropertyOrPrivatePropertyName(parser, context, privateScope) {
    if ((parser.getToken() & 143360) === 0 && parser.getToken() !== -2147483528 && parser.getToken() !== -2147483527 && parser.getToken() !== 130) {
        parser.report(160);
    }
    return parser.getToken() === 130 ? parsePrivateIdentifier(parser, context, privateScope, 0) : parseIdentifier(parser, context);
}
function parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start) {
    if (inNew) parser.report(56);
    if (!isLHS) parser.report(0);
    const token = parser.getToken();
    nextToken(parser, context | 32);
    const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1);
    if (parser.assignable & 2) {
        parser.report(55);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'UpdateExpression',
        argument: arg,
        operator: KeywordDescTable[token & 255],
        prefix: true
    }, start);
}
function parsePrimaryExpression(parser, context, privateScope, kind, inNew, canAssign, inGroup, isLHS, start) {
    if ((parser.getToken() & 143360) === 143360) {
        switch(parser.getToken()){
            case 209006:
                return parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start);
            case 241771:
                return parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start);
            case 209005:
                return parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start);
        }
        const { tokenValue } = parser;
        const token = parser.getToken();
        const expr = parseIdentifier(parser, context | 64);
        if (parser.getToken() === 10) {
            if (!isLHS) parser.report(0);
            classifyIdentifier(parser, context, token);
            if ((token & 36864) === 36864) {
                parser.flags |= 256;
            }
            return parseArrowFromIdentifier(parser, context, privateScope, tokenValue, expr, inNew, canAssign, 0, start);
        }
        if (context & 16 && !(context & 32768) && !(context & 8192) && parser.tokenValue === 'arguments') parser.report(130);
        if ((token & 255) === (241737 & 255)) {
            if (context & 1) parser.report(113);
            if (kind & (8 | 16)) parser.report(100);
        }
        parser.assignable = context & 1 && (token & 537079808) === 537079808 ? 2 : 1;
        return expr;
    }
    if ((parser.getToken() & 134217728) === 134217728) {
        return parseLiteral(parser, context);
    }
    switch(parser.getToken()){
        case 33619993:
        case 33619994:
            return parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start);
        case 16863276:
        case 16842798:
        case 16842799:
        case 25233968:
        case 25233969:
        case 16863275:
        case 16863277:
            return parseUnaryExpression(parser, context, privateScope, isLHS, inGroup);
        case 86104:
            return parseFunctionExpression(parser, context, privateScope, 0, inGroup, start);
        case 2162700:
            return parseObjectLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup);
        case 69271571:
            return parseArrayLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup);
        case 67174411:
            return parseParenthesizedExpression(parser, context | 64, privateScope, canAssign, 1, 0, start);
        case 86021:
        case 86022:
        case 86023:
            return parseNullOrTrueOrFalseLiteral(parser, context);
        case 86111:
            return parseThisExpression(parser, context);
        case 65540:
            return parseRegExpLiteral(parser, context);
        case 132:
        case 86094:
            return parseClassExpression(parser, context, privateScope, inGroup, start);
        case 86109:
            return parseSuperExpression(parser, context);
        case 67174409:
            return parseTemplateLiteral(parser, context);
        case 67174408:
            return parseTemplate(parser, context, privateScope);
        case 86107:
            return parseNewExpression(parser, context, privateScope, inGroup);
        case 134283388:
            return parseBigIntLiteral(parser, context);
        case 130:
            return parsePrivateIdentifier(parser, context, privateScope, 0);
        case 86106:
            return parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start);
        case 8456256:
            if (parser.options.jsx) return parseJSXRootElementOrFragment(parser, context, privateScope, 0, parser.tokenStart);
        default:
            if (isValidIdentifier(context, parser.getToken())) return parseIdentifierOrArrow(parser, context, privateScope);
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start) {
    let expr = parseIdentifier(parser, context);
    if (parser.getToken() === 67108877) {
        return parseImportMetaExpression(parser, context, expr, start);
    }
    if (inNew) parser.report(142);
    expr = parseImportExpression(parser, context, privateScope, inGroup, start);
    parser.assignable = 2;
    return parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start);
}
function parseImportMetaExpression(parser, context, meta, start) {
    if ((context & 2) === 0) parser.report(169);
    nextToken(parser, context);
    const token = parser.getToken();
    if (token !== 209030 && parser.tokenValue !== 'meta') {
        parser.report(174);
    } else if (token & -2147483648) {
        parser.report(175);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'MetaProperty',
        meta,
        property: parseIdentifier(parser, context)
    }, start);
}
function parseImportExpression(parser, context, privateScope, inGroup, start) {
    consume(parser, context | 32, 67174411);
    if (parser.getToken() === 14) parser.report(143);
    const source = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
    let options = null;
    if (parser.getToken() === 18) {
        consume(parser, context, 18);
        if (parser.getToken() !== 16) {
            const expContext = (context | 131072) ^ 131072;
            options = parseExpression(parser, expContext, privateScope, 1, inGroup, parser.tokenStart);
        }
        consumeOpt(parser, context, 18);
    }
    const node = {
        type: 'ImportExpression',
        source,
        options
    };
    consume(parser, context, 16);
    return parser.finishNode(node, start);
}
function parseImportAttributes(parser, context) {
    if (!consumeOpt(parser, context, 20579)) return [];
    consume(parser, context, 2162700);
    const attributes = [];
    const keysContent = new Set();
    while(parser.getToken() !== 1074790415){
        const start = parser.tokenStart;
        const key = parseIdentifierOrStringLiteral(parser, context);
        consume(parser, context, 21);
        const value = parseStringLiteral(parser, context);
        const keyContent = key.type === 'Literal' ? key.value : key.name;
        if (keysContent.has(keyContent)) {
            parser.report(145, `${keyContent}`);
        }
        keysContent.add(keyContent);
        attributes.push(parser.finishNode({
            type: 'ImportAttribute',
            key,
            value
        }, start));
        if (parser.getToken() !== 1074790415) {
            consume(parser, context, 18);
        }
    }
    consume(parser, context, 1074790415);
    return attributes;
}
function parseStringLiteral(parser, context) {
    if (parser.getToken() === 134283267) {
        return parseLiteral(parser, context);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function parseIdentifierOrStringLiteral(parser, context) {
    if (parser.getToken() === 134283267) {
        return parseLiteral(parser, context);
    } else if (parser.getToken() & 143360) {
        return parseIdentifier(parser, context);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function validateStringWellFormed(parser, str) {
    const len = str.length;
    for(let i = 0; i < len; i++){
        const code = str.charCodeAt(i);
        if ((code & 0xfc00) !== 55296) continue;
        if (code > 56319 || ++i >= len || (str.charCodeAt(i) & 0xfc00) !== 56320) {
            parser.report(171, JSON.stringify(str.charAt(i--)));
        }
    }
}
function parseModuleExportName(parser, context) {
    if (parser.getToken() === 134283267) {
        validateStringWellFormed(parser, parser.tokenValue);
        return parseLiteral(parser, context);
    } else if (parser.getToken() & 143360) {
        return parseIdentifier(parser, context);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function parseBigIntLiteral(parser, context) {
    const { tokenRaw, tokenValue, tokenStart } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    const node = {
        type: 'Literal',
        value: tokenValue,
        bigint: String(tokenValue)
    };
    if (parser.options.raw) {
        node.raw = tokenRaw;
    }
    return parser.finishNode(node, tokenStart);
}
function parseTemplateLiteral(parser, context) {
    parser.assignable = 2;
    const { tokenValue, tokenRaw, tokenStart } = parser;
    consume(parser, context, 67174409);
    const quasis = [
        parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, true)
    ];
    return parser.finishNode({
        type: 'TemplateLiteral',
        expressions: [],
        quasis
    }, tokenStart);
}
function parseTemplate(parser, context, privateScope) {
    context = (context | 131072) ^ 131072;
    const { tokenValue, tokenRaw, tokenStart } = parser;
    consume(parser, context & -65 | 32, 67174408);
    const quasis = [
        parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, false)
    ];
    const expressions = [
        parseExpressions(parser, context & -65, privateScope, 0, 1, parser.tokenStart)
    ];
    if (parser.getToken() !== 1074790415) parser.report(83);
    while(parser.setToken(scanTemplateTail(parser, context), true) !== 67174409){
        const { tokenValue, tokenRaw, tokenStart } = parser;
        consume(parser, context & -65 | 32, 67174408);
        quasis.push(parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, false));
        expressions.push(parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart));
        if (parser.getToken() !== 1074790415) parser.report(83);
    }
    {
        const { tokenValue, tokenRaw, tokenStart } = parser;
        consume(parser, context, 67174409);
        quasis.push(parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, true));
    }
    return parser.finishNode({
        type: 'TemplateLiteral',
        expressions,
        quasis
    }, tokenStart);
}
function parseTemplateElement(parser, cooked, raw, start, tail) {
    const node = parser.finishNode({
        type: 'TemplateElement',
        value: {
            cooked,
            raw
        },
        tail
    }, start);
    const tailSize = tail ? 1 : 2;
    if (parser.options.ranges) {
        node.start += 1;
        node.range[0] += 1;
        node.end -= tailSize;
        node.range[1] -= tailSize;
    }
    if (parser.options.loc) {
        node.loc.start.column += 1;
        node.loc.end.column -= tailSize;
    }
    return node;
}
function parseSpreadElement(parser, context, privateScope) {
    const start = parser.tokenStart;
    context = (context | 131072) ^ 131072;
    consume(parser, context | 32, 14);
    const argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    parser.assignable = 1;
    return parser.finishNode({
        type: 'SpreadElement',
        argument
    }, start);
}
function parseArguments(parser, context, privateScope, inGroup) {
    nextToken(parser, context | 32);
    const args = [];
    if (parser.getToken() === 16) {
        nextToken(parser, context | 64);
        return args;
    }
    while(parser.getToken() !== 16){
        if (parser.getToken() === 14) {
            args.push(parseSpreadElement(parser, context, privateScope));
        } else {
            args.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart));
        }
        if (parser.getToken() !== 18) break;
        nextToken(parser, context | 32);
        if (parser.getToken() === 16) break;
    }
    consume(parser, context | 64, 16);
    return args;
}
function parseIdentifier(parser, context) {
    const { tokenValue, tokenStart } = parser;
    const allowRegex = tokenValue === 'await' && (parser.getToken() & -2147483648) === 0;
    nextToken(parser, context | (allowRegex ? 32 : 0));
    return parser.finishNode({
        type: 'Identifier',
        name: tokenValue
    }, tokenStart);
}
function parseLiteral(parser, context) {
    const { tokenValue, tokenRaw, tokenStart } = parser;
    if (parser.getToken() === 134283388) {
        return parseBigIntLiteral(parser, context);
    }
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode(parser.options.raw ? {
        type: 'Literal',
        value: tokenValue,
        raw: tokenRaw
    } : {
        type: 'Literal',
        value: tokenValue
    }, tokenStart);
}
function parseNullOrTrueOrFalseLiteral(parser, context) {
    const start = parser.tokenStart;
    const raw = KeywordDescTable[parser.getToken() & 255];
    const value = parser.getToken() === 86023 ? null : raw === 'true';
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode(parser.options.raw ? {
        type: 'Literal',
        value,
        raw
    } : {
        type: 'Literal',
        value
    }, start);
}
function parseThisExpression(parser, context) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ThisExpression'
    }, tokenStart);
}
function parseFunctionDeclaration(parser, context, scope, privateScope, origin, allowGen, flags, isAsync, start) {
    nextToken(parser, context | 32);
    const isGenerator = allowGen ? optionalBit(parser, context, 8391476) : 0;
    let id = null;
    let funcNameToken;
    let functionScope = scope ? parser.createScope() : void 0;
    if (parser.getToken() === 67174411) {
        if ((flags & 1) === 0) parser.report(39, 'Function');
    } else {
        const kind = origin & 4 && ((context & 8) === 0 || (context & 2) === 0) ? 4 : 64 | (isAsync ? 1024 : 0) | (isGenerator ? 1024 : 0);
        validateFunctionName(parser, context, parser.getToken());
        if (scope) {
            if (kind & 4) {
                scope.addVarName(context, parser.tokenValue, kind);
            } else {
                scope.addBlockName(context, parser.tokenValue, kind, origin);
            }
            functionScope = functionScope?.createChildScope(128);
            if (flags) {
                if (flags & 2) {
                    parser.declareUnboundVariable(parser.tokenValue);
                }
            }
        }
        funcNameToken = parser.getToken();
        if (parser.getToken() & 143360) {
            id = parseIdentifier(parser, context);
        } else {
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        }
    }
    {
        const modifierFlags = 256 | 512 | 1024 | 2048 | 8192 | 16384;
        context = (context | modifierFlags) ^ modifierFlags | 65536 | (isAsync ? 2048 : 0) | (isGenerator ? 1024 : 0) | (isGenerator ? 0 : 262144);
    }
    functionScope = functionScope?.createChildScope(256);
    const params = parseFormalParametersOrFormalList(parser, (context | 8192) & -524289, functionScope, privateScope, 0, 1);
    const modifierFlags = 8 | 4 | 128 | 524288;
    const body = parseFunctionBody(parser, (context | modifierFlags) ^ modifierFlags | 32768 | 4096, functionScope?.createChildScope(64), privateScope, 8, funcNameToken, functionScope);
    return parser.finishNode({
        type: 'FunctionDeclaration',
        id,
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1
    }, start);
}
function parseFunctionExpression(parser, context, privateScope, isAsync, inGroup, start) {
    nextToken(parser, context | 32);
    const isGenerator = optionalBit(parser, context, 8391476);
    const generatorAndAsyncFlags = (isAsync ? 2048 : 0) | (isGenerator ? 1024 : 0);
    let id = null;
    let funcNameToken;
    let scope = parser.createScopeIfLexical();
    const modifierFlags = 256 | 512 | 1024 | 2048 | 8192 | 16384 | 524288;
    if (parser.getToken() & 143360) {
        validateFunctionName(parser, (context | modifierFlags) ^ modifierFlags | generatorAndAsyncFlags, parser.getToken());
        scope = scope?.createChildScope(128);
        funcNameToken = parser.getToken();
        id = parseIdentifier(parser, context);
    }
    context = (context | modifierFlags) ^ modifierFlags | 65536 | generatorAndAsyncFlags | (isGenerator ? 0 : 262144);
    scope = scope?.createChildScope(256);
    const params = parseFormalParametersOrFormalList(parser, (context | 8192) & -524289, scope, privateScope, inGroup, 1);
    const body = parseFunctionBody(parser, context & -131229 | 32768 | 4096, scope?.createChildScope(64), privateScope, 0, funcNameToken, scope);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'FunctionExpression',
        id,
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1
    }, start);
}
function parseArrayLiteral(parser, context, privateScope, skipInitializer, inGroup) {
    const expr = parseArrayExpressionOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0);
    if (parser.destructible & 64) {
        parser.report(63);
    }
    if (parser.destructible & 8) {
        parser.report(62);
    }
    return expr;
}
function parseArrayExpressionOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin) {
    const { tokenStart: start } = parser;
    nextToken(parser, context | 32);
    const elements = [];
    let destructible = 0;
    context = (context | 131072) ^ 131072;
    while(parser.getToken() !== 20){
        if (consumeOpt(parser, context | 32, 18)) {
            elements.push(null);
        } else {
            let left;
            const { tokenStart, tokenValue } = parser;
            const token = parser.getToken();
            if (token & 143360) {
                left = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                if (parser.getToken() === 1077936155) {
                    if (parser.assignable & 2) parser.report(26);
                    nextToken(parser, context | 32);
                    scope?.addVarOrBlock(context, tokenValue, kind, origin);
                    const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
                    left = parser.finishNode(isPattern ? {
                        type: 'AssignmentPattern',
                        left,
                        right
                    } : {
                        type: 'AssignmentExpression',
                        operator: '=',
                        left,
                        right
                    }, tokenStart);
                    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                } else if (parser.getToken() === 18 || parser.getToken() === 20) {
                    if (parser.assignable & 2) {
                        destructible |= 16;
                    } else {
                        scope?.addVarOrBlock(context, tokenValue, kind, origin);
                    }
                    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                } else {
                    destructible |= kind & 1 ? 32 : (kind & 2) === 0 ? 16 : 0;
                    left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenStart);
                    if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                        if (parser.getToken() !== 1077936155) destructible |= 16;
                        left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
                    } else if (parser.getToken() !== 1077936155) {
                        destructible |= parser.assignable & 2 ? 16 : 32;
                    }
                }
            } else if (token & 2097152) {
                left = parser.getToken() === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                destructible |= parser.destructible;
                parser.assignable = parser.destructible & 16 ? 2 : 1;
                if (parser.getToken() === 18 || parser.getToken() === 20) {
                    if (parser.assignable & 2) {
                        destructible |= 16;
                    }
                } else if (parser.destructible & 8) {
                    parser.report(71);
                } else {
                    left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenStart);
                    destructible = parser.assignable & 2 ? 16 : 0;
                    if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                        left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
                    } else if (parser.getToken() !== 1077936155) {
                        destructible |= parser.assignable & 2 ? 16 : 32;
                    }
                }
            } else if (token === 14) {
                left = parseSpreadOrRestElement(parser, context, scope, privateScope, 20, kind, origin, 0, inGroup, isPattern);
                destructible |= parser.destructible;
                if (parser.getToken() !== 18 && parser.getToken() !== 20) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
            } else {
                left = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                    left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
                    if ((kind & (2 | 1)) === 0 && token === 67174411) destructible |= 16;
                } else if (parser.assignable & 2) {
                    destructible |= 16;
                } else if (token === 67174411) {
                    destructible |= parser.assignable & 1 && kind & (2 | 1) ? 32 : 16;
                }
            }
            elements.push(left);
            if (consumeOpt(parser, context | 32, 18)) {
                if (parser.getToken() === 20) break;
            } else break;
        }
    }
    consume(parser, context, 20);
    const node = parser.finishNode({
        type: isPattern ? 'ArrayPattern' : 'ArrayExpression',
        elements
    }, start);
    if (!skipInitializer && parser.getToken() & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node);
    }
    parser.destructible = destructible;
    return node;
}
function parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node) {
    if (parser.getToken() !== 1077936155) parser.report(26);
    nextToken(parser, context | 32);
    if (destructible & 16) parser.report(26);
    if (!isPattern) reinterpretToPattern(parser, node);
    const { tokenStart } = parser;
    const right = parseExpression(parser, context, privateScope, 1, inGroup, tokenStart);
    parser.destructible = (destructible | 64 | 8) ^ (8 | 64) | (parser.destructible & 128 ? 128 : 0) | (parser.destructible & 256 ? 256 : 0);
    return parser.finishNode(isPattern ? {
        type: 'AssignmentPattern',
        left: node,
        right
    } : {
        type: 'AssignmentExpression',
        left: node,
        operator: '=',
        right
    }, start);
}
function parseSpreadOrRestElement(parser, context, scope, privateScope, closingToken, kind, origin, isAsync, inGroup, isPattern) {
    const { tokenStart: start } = parser;
    nextToken(parser, context | 32);
    let argument = null;
    let destructible = 0;
    const { tokenValue, tokenStart } = parser;
    let token = parser.getToken();
    if (token & 143360) {
        parser.assignable = 1;
        argument = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
        token = parser.getToken();
        argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenStart);
        if (parser.getToken() !== 18 && parser.getToken() !== closingToken) {
            if (parser.assignable & 2 && parser.getToken() === 1077936155) parser.report(71);
            destructible |= 16;
            argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
        }
        if (parser.assignable & 2) {
            destructible |= 16;
        } else if (token === closingToken || token === 18) {
            scope?.addVarOrBlock(context, tokenValue, kind, origin);
        } else {
            destructible |= 32;
        }
        destructible |= parser.destructible & 128 ? 128 : 0;
    } else if (token === closingToken) {
        parser.report(41);
    } else if (token & 2097152) {
        argument = parser.getToken() === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin);
        token = parser.getToken();
        if (token !== 1077936155 && token !== closingToken && token !== 18) {
            if (parser.destructible & 8) parser.report(71);
            argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenStart);
            destructible |= parser.assignable & 2 ? 16 : 0;
            if ((parser.getToken() & 4194304) === 4194304) {
                if (parser.getToken() !== 1077936155) destructible |= 16;
                argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
            } else {
                if ((parser.getToken() & 8388608) === 8388608) {
                    argument = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, argument);
                }
                if (consumeOpt(parser, context | 32, 22)) {
                    argument = parseConditionalExpression(parser, context, privateScope, argument, tokenStart);
                }
                destructible |= parser.assignable & 2 ? 16 : 32;
            }
        } else {
            destructible |= closingToken === 1074790415 && token !== 1077936155 ? 16 : parser.destructible;
        }
    } else {
        destructible |= 32;
        argument = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1);
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token === 1077936155) {
            if (parser.assignable & 2) parser.report(26);
            argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
            destructible |= 16;
        } else {
            if (token === 18) {
                destructible |= 16;
            } else if (token !== closingToken) {
                argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
            }
            destructible |= parser.assignable & 1 ? 32 : 16;
        }
        parser.destructible = destructible;
        if (parser.getToken() !== closingToken && parser.getToken() !== 18) parser.report(161);
        return parser.finishNode({
            type: isPattern ? 'RestElement' : 'SpreadElement',
            argument: argument
        }, start);
    }
    if (parser.getToken() !== closingToken) {
        if (kind & 1) destructible |= isAsync ? 16 : 32;
        if (consumeOpt(parser, context | 32, 1077936155)) {
            if (destructible & 16) parser.report(26);
            reinterpretToPattern(parser, argument);
            const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
            argument = parser.finishNode(isPattern ? {
                type: 'AssignmentPattern',
                left: argument,
                right
            } : {
                type: 'AssignmentExpression',
                left: argument,
                operator: '=',
                right
            }, tokenStart);
            destructible = 16;
        } else {
            destructible |= 16;
        }
    }
    parser.destructible = destructible;
    return parser.finishNode({
        type: isPattern ? 'RestElement' : 'SpreadElement',
        argument: argument
    }, start);
}
function parseMethodDefinition(parser, context, privateScope, kind, inGroup, start) {
    const modifierFlags = 1024 | 2048 | 8192 | ((kind & 64) === 0 ? 512 | 16384 : 0);
    context = (context | modifierFlags) ^ modifierFlags | (kind & 8 ? 1024 : 0) | (kind & 16 ? 2048 : 0) | (kind & 64 ? 16384 : 0) | 256 | 32768 | 65536;
    let scope = parser.createScopeIfLexical(256);
    const params = parseMethodFormals(parser, (context | 8192) & -524289, scope, privateScope, kind, 1, inGroup);
    scope = scope?.createChildScope(64);
    const body = parseFunctionBody(parser, context & -655373 | 32768 | 4096, scope, privateScope, 0, void 0, scope?.parent);
    return parser.finishNode({
        type: 'FunctionExpression',
        params,
        body,
        async: (kind & 16) > 0,
        generator: (kind & 8) > 0,
        id: null
    }, start);
}
function parseObjectLiteral(parser, context, privateScope, skipInitializer, inGroup) {
    const expr = parseObjectLiteralOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0);
    if (parser.destructible & 64) {
        parser.report(63);
    }
    if (parser.destructible & 8) {
        parser.report(62);
    }
    return expr;
}
function parseObjectLiteralOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin) {
    const { tokenStart: start } = parser;
    nextToken(parser, context);
    const properties = [];
    let destructible = 0;
    let prototypeCount = 0;
    context = (context | 131072) ^ 131072;
    while(parser.getToken() !== 1074790415){
        const { tokenValue, tokenStart } = parser;
        const token = parser.getToken();
        if (token === 14) {
            properties.push(parseSpreadOrRestElement(parser, context, scope, privateScope, 1074790415, kind, origin, 0, inGroup, isPattern));
        } else {
            let state = 0;
            let key = null;
            let value;
            if (parser.getToken() & 143360 || parser.getToken() === -2147483528 || parser.getToken() === -2147483527) {
                if (parser.getToken() === -2147483527) destructible |= 16;
                key = parseIdentifier(parser, context);
                if (parser.getToken() === 18 || parser.getToken() === 1074790415 || parser.getToken() === 1077936155) {
                    state |= 4;
                    if (context & 1 && (token & 537079808) === 537079808) {
                        destructible |= 16;
                    } else {
                        validateBindingIdentifier(parser, context, kind, token, 0);
                    }
                    scope?.addVarOrBlock(context, tokenValue, kind, origin);
                    if (consumeOpt(parser, context | 32, 1077936155)) {
                        destructible |= 8;
                        const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
                        destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                        value = parser.finishNode({
                            type: 'AssignmentPattern',
                            left: parser.options.uniqueKeyInPattern ? Object.assign({}, key) : key,
                            right
                        }, tokenStart);
                    } else {
                        destructible |= (token === 209006 ? 128 : 0) | (token === -2147483528 ? 16 : 0);
                        value = parser.options.uniqueKeyInPattern ? Object.assign({}, key) : key;
                    }
                } else if (consumeOpt(parser, context | 32, 21)) {
                    const { tokenStart } = parser;
                    if (tokenValue === '__proto__') prototypeCount++;
                    if (parser.getToken() & 143360) {
                        const tokenAfterColon = parser.getToken();
                        const valueAfterColon = parser.tokenValue;
                        value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                        const token = parser.getToken();
                        value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (token === 1077936155 || token === 1074790415 || token === 18) {
                                destructible |= parser.destructible & 128 ? 128 : 0;
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                } else if ((tokenAfterColon & 143360) === 143360) {
                                    scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                                }
                            } else {
                                destructible |= parser.assignable & 1 ? 32 : 16;
                            }
                        } else if ((parser.getToken() & 4194304) === 4194304) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            } else if (token !== 1077936155) {
                                destructible |= 32;
                            } else {
                                scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                            }
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        } else {
                            destructible |= 16;
                            if ((parser.getToken() & 8388608) === 8388608) {
                                value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                            }
                            if (consumeOpt(parser, context | 32, 22)) {
                                value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                            }
                        }
                    } else if ((parser.getToken() & 2097152) === 2097152) {
                        value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                        destructible = parser.destructible;
                        parser.assignable = destructible & 16 ? 2 : 1;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else if (parser.destructible & 8) {
                            parser.report(71);
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if ((parser.getToken() & 4194304) === 4194304) {
                                value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            } else {
                                if ((parser.getToken() & 8388608) === 8388608) {
                                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                                }
                                if (consumeOpt(parser, context | 32, 22)) {
                                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                                }
                                destructible |= parser.assignable & 2 ? 16 : 32;
                            }
                        }
                    } else {
                        value = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1);
                        destructible |= parser.assignable & 1 ? 32 : 16;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if (parser.getToken() !== 18 && token !== 1074790415) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            }
                        }
                    }
                } else if (parser.getToken() === 69271571) {
                    destructible |= 16;
                    if (token === 209005) state |= 16;
                    state |= (token === 209008 ? 256 : token === 209009 ? 512 : 1) | 2;
                    key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                    destructible |= parser.assignable;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() & 143360) {
                    destructible |= 16;
                    if (token === -2147483528) parser.report(95);
                    if (token === 209005) {
                        if (parser.flags & 1) parser.report(132);
                        state |= 16 | 1;
                    } else if (token === 209008) {
                        state |= 256;
                    } else if (token === 209009) {
                        state |= 512;
                    } else {
                        parser.report(0);
                    }
                    key = parseIdentifier(parser, context);
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() === 67174411) {
                    destructible |= 16;
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() === 8391476) {
                    destructible |= 16;
                    if (token === 209008) {
                        parser.report(42);
                    } else if (token === 209009) {
                        parser.report(43);
                    } else if (token !== 209005) {
                        parser.report(30, KeywordDescTable[8391476 & 255]);
                    }
                    nextToken(parser, context);
                    state |= 8 | 1 | (token === 209005 ? 16 : 0);
                    if (parser.getToken() & 143360) {
                        key = parseIdentifier(parser, context);
                    } else if ((parser.getToken() & 134217728) === 134217728) {
                        key = parseLiteral(parser, context);
                    } else if (parser.getToken() === 69271571) {
                        state |= 2;
                        key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                        destructible |= parser.assignable;
                    } else {
                        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
                    }
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if ((parser.getToken() & 134217728) === 134217728) {
                    if (token === 209005) state |= 16;
                    state |= token === 209008 ? 256 : token === 209009 ? 512 : 1;
                    destructible |= 16;
                    key = parseLiteral(parser, context);
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else {
                    parser.report(133);
                }
            } else if ((parser.getToken() & 134217728) === 134217728) {
                key = parseLiteral(parser, context);
                if (parser.getToken() === 21) {
                    consume(parser, context | 32, 21);
                    const { tokenStart } = parser;
                    if (tokenValue === '__proto__') prototypeCount++;
                    if (parser.getToken() & 143360) {
                        value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                        const { tokenValue: valueAfterColon } = parser;
                        const token = parser.getToken();
                        value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (token === 1077936155 || token === 1074790415 || token === 18) {
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                } else {
                                    scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                                }
                            } else {
                                destructible |= parser.assignable & 1 ? 32 : 16;
                            }
                        } else if (parser.getToken() === 1077936155) {
                            if (parser.assignable & 2) destructible |= 16;
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        } else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        }
                    } else if ((parser.getToken() & 2097152) === 2097152) {
                        value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                        destructible = parser.destructible;
                        parser.assignable = destructible & 16 ? 2 : 1;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                        } else if ((parser.destructible & 8) !== 8) {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if ((parser.getToken() & 4194304) === 4194304) {
                                value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            } else {
                                if ((parser.getToken() & 8388608) === 8388608) {
                                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                                }
                                if (consumeOpt(parser, context | 32, 22)) {
                                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                                }
                                destructible |= parser.assignable & 2 ? 16 : 32;
                            }
                        }
                    } else {
                        value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                        destructible |= parser.assignable & 1 ? 32 : 16;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 1 ? 0 : 16;
                            if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            }
                        }
                    }
                } else if (parser.getToken() === 67174411) {
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                    destructible = parser.assignable | 16;
                } else {
                    parser.report(134);
                }
            } else if (parser.getToken() === 69271571) {
                key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                destructible |= parser.destructible & 256 ? 256 : 0;
                state |= 2;
                if (parser.getToken() === 21) {
                    nextToken(parser, context | 32);
                    const { tokenStart, tokenValue } = parser;
                    const tokenAfterColon = parser.getToken();
                    if (parser.getToken() & 143360) {
                        value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                        const token = parser.getToken();
                        value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                        if ((parser.getToken() & 4194304) === 4194304) {
                            destructible |= parser.assignable & 2 ? 16 : token === 1077936155 ? 0 : 32;
                            value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        } else if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (token === 1077936155 || token === 1074790415 || token === 18) {
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                } else if ((tokenAfterColon & 143360) === 143360) {
                                    scope?.addVarOrBlock(context, tokenValue, kind, origin);
                                }
                            } else {
                                destructible |= parser.assignable & 1 ? 32 : 16;
                            }
                        } else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        }
                    } else if ((parser.getToken() & 2097152) === 2097152) {
                        value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                        destructible = parser.destructible;
                        parser.assignable = destructible & 16 ? 2 : 1;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else if (destructible & 8) {
                            parser.report(62);
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? destructible | 16 : 0;
                            if ((parser.getToken() & 4194304) === 4194304) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            } else {
                                if ((parser.getToken() & 8388608) === 8388608) {
                                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                                }
                                if (consumeOpt(parser, context | 32, 22)) {
                                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                                }
                                destructible |= parser.assignable & 2 ? 16 : 32;
                            }
                        }
                    } else {
                        value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                        destructible |= parser.assignable & 1 ? 32 : 16;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 1 ? 0 : 16;
                            if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            }
                        }
                    }
                } else if (parser.getToken() === 67174411) {
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                    destructible = 16;
                } else {
                    parser.report(44);
                }
            } else if (token === 8391476) {
                consume(parser, context | 32, 8391476);
                state |= 8;
                if (parser.getToken() & 143360) {
                    const token = parser.getToken();
                    key = parseIdentifier(parser, context);
                    state |= 1;
                    if (parser.getToken() === 67174411) {
                        destructible |= 16;
                        value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                    } else {
                        throw new ParseError(parser.tokenStart, parser.currentLocation, token === 209005 ? 46 : token === 209008 || parser.getToken() === 209009 ? 45 : 47, KeywordDescTable[token & 255]);
                    }
                } else if ((parser.getToken() & 134217728) === 134217728) {
                    destructible |= 16;
                    key = parseLiteral(parser, context);
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() === 69271571) {
                    destructible |= 16;
                    state |= 2 | 1;
                    key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else {
                    parser.report(126);
                }
            } else {
                parser.report(30, KeywordDescTable[token & 255]);
            }
            destructible |= parser.destructible & 128 ? 128 : 0;
            parser.destructible = destructible;
            properties.push(parser.finishNode({
                type: 'Property',
                key: key,
                value,
                kind: !(state & 768) ? 'init' : state & 512 ? 'set' : 'get',
                computed: (state & 2) > 0,
                method: (state & 1) > 0,
                shorthand: (state & 4) > 0
            }, tokenStart));
        }
        destructible |= parser.destructible;
        if (parser.getToken() !== 18) break;
        nextToken(parser, context);
    }
    consume(parser, context, 1074790415);
    if (prototypeCount > 1) destructible |= 64;
    const node = parser.finishNode({
        type: isPattern ? 'ObjectPattern' : 'ObjectExpression',
        properties
    }, start);
    if (!skipInitializer && parser.getToken() & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node);
    }
    parser.destructible = destructible;
    return node;
}
function parseMethodFormals(parser, context, scope, privateScope, kind, type, inGroup) {
    consume(parser, context, 67174411);
    const params = [];
    parser.flags = (parser.flags | 128) ^ 128;
    if (parser.getToken() === 16) {
        if (kind & 512) {
            parser.report(37, 'Setter', 'one', '');
        }
        nextToken(parser, context);
        return params;
    }
    if (kind & 256) {
        parser.report(37, 'Getter', 'no', 's');
    }
    if (kind & 512 && parser.getToken() === 14) {
        parser.report(38);
    }
    context = (context | 131072) ^ 131072;
    let setterArgs = 0;
    let isNonSimpleParameterList = 0;
    while(parser.getToken() !== 18){
        let left = null;
        const { tokenStart } = parser;
        if (parser.getToken() & 143360) {
            if ((context & 1) === 0) {
                if ((parser.getToken() & 36864) === 36864) {
                    parser.flags |= 256;
                }
                if ((parser.getToken() & 537079808) === 537079808) {
                    parser.flags |= 512;
                }
            }
            left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0);
        } else {
            if (parser.getToken() === 2162700) {
                left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0);
            } else if (parser.getToken() === 69271571) {
                left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0);
            } else if (parser.getToken() === 14) {
                left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, type, 0, 0, inGroup, 1);
            }
            isNonSimpleParameterList = 1;
            if (parser.destructible & (32 | 16)) parser.report(50);
        }
        if (parser.getToken() === 1077936155) {
            nextToken(parser, context | 32);
            isNonSimpleParameterList = 1;
            const right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
            left = parser.finishNode({
                type: 'AssignmentPattern',
                left: left,
                right
            }, tokenStart);
        }
        setterArgs++;
        params.push(left);
        if (!consumeOpt(parser, context, 18)) break;
        if (parser.getToken() === 16) {
            break;
        }
    }
    if (kind & 512 && setterArgs !== 1) {
        parser.report(37, 'Setter', 'one', '');
    }
    scope?.reportScopeError();
    if (isNonSimpleParameterList) parser.flags |= 128;
    consume(parser, context, 16);
    return params;
}
function parseComputedPropertyName(parser, context, privateScope, inGroup) {
    nextToken(parser, context | 32);
    const key = parseExpression(parser, (context | 131072) ^ 131072, privateScope, 1, inGroup, parser.tokenStart);
    consume(parser, context, 20);
    return key;
}
function parseParenthesizedExpression(parser, context, privateScope, canAssign, kind, origin, start) {
    parser.flags = (parser.flags | 128) ^ 128;
    const parenthesesStart = parser.tokenStart;
    nextToken(parser, context | 32 | 262144);
    const scope = parser.createScopeIfLexical()?.createChildScope(512);
    context = (context | 131072) ^ 131072;
    if (consumeOpt(parser, context, 16)) {
        return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 0, start);
    }
    let destructible = 0;
    parser.destructible &= -385;
    let expr;
    let expressions = [];
    let isSequence = 0;
    let isNonSimpleParameterList = 0;
    let hasStrictReserved = 0;
    const tokenAfterParenthesesStart = parser.tokenStart;
    parser.assignable = 1;
    while(parser.getToken() !== 16){
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
            scope?.addBlockName(context, parser.tokenValue, 1, 0);
            if ((token & 537079808) === 537079808) {
                isNonSimpleParameterList = 1;
            } else if ((token & 36864) === 36864) {
                hasStrictReserved = 1;
            }
            expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenStart);
            if (parser.getToken() === 16 || parser.getToken() === 18) {
                if (parser.assignable & 2) {
                    destructible |= 16;
                    isNonSimpleParameterList = 1;
                }
            } else {
                if (parser.getToken() === 1077936155) {
                    isNonSimpleParameterList = 1;
                } else {
                    destructible |= 16;
                }
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenStart);
                if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                    expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenStart, expr);
                }
            }
        } else if ((token & 2097152) === 2097152) {
            expr = token === 2162700 ? parseObjectLiteralOrPattern(parser, context | 262144, scope, privateScope, 0, 1, 0, kind, origin) : parseArrayExpressionOrPattern(parser, context | 262144, scope, privateScope, 0, 1, 0, kind, origin);
            destructible |= parser.destructible;
            isNonSimpleParameterList = 1;
            parser.assignable = 2;
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                if (destructible & 8) parser.report(122);
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
                destructible |= 16;
                if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                    expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
                }
            }
        } else if (token === 14) {
            expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 0, 1, 0);
            if (parser.destructible & 16) parser.report(74);
            isNonSimpleParameterList = 1;
            if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
                expressions.push(expr);
            }
            destructible |= 8;
            break;
        } else {
            destructible |= 16;
            expr = parseExpression(parser, context, privateScope, 1, 1, tokenStart);
            if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
                expressions.push(expr);
            }
            if (parser.getToken() === 18) {
                if (!isSequence) {
                    isSequence = 1;
                    expressions = [
                        expr
                    ];
                }
            }
            if (isSequence) {
                while(consumeOpt(parser, context | 32, 18)){
                    expressions.push(parseExpression(parser, context, privateScope, 1, 1, parser.tokenStart));
                }
                parser.assignable = 2;
                expr = parser.finishNode({
                    type: 'SequenceExpression',
                    expressions
                }, tokenAfterParenthesesStart);
            }
            consume(parser, context, 16);
            parser.destructible = destructible;
            return parser.options.preserveParens ? parser.finishNode({
                type: 'ParenthesizedExpression',
                expression: expr
            }, parenthesesStart) : expr;
        }
        if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
            expressions.push(expr);
        }
        if (!consumeOpt(parser, context | 32, 18)) break;
        if (!isSequence) {
            isSequence = 1;
            expressions = [
                expr
            ];
        }
        if (parser.getToken() === 16) {
            destructible |= 8;
            break;
        }
    }
    if (isSequence) {
        parser.assignable = 2;
        expr = parser.finishNode({
            type: 'SequenceExpression',
            expressions
        }, tokenAfterParenthesesStart);
    }
    consume(parser, context, 16);
    if (destructible & 16 && destructible & 8) parser.report(151);
    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
    if (parser.getToken() === 10) {
        if (destructible & (32 | 16)) parser.report(49);
        if (context & (2048 | 2) && destructible & 128) parser.report(31);
        if (context & (1 | 1024) && destructible & 256) {
            parser.report(32);
        }
        if (isNonSimpleParameterList) parser.flags |= 128;
        if (hasStrictReserved) parser.flags |= 256;
        return parseParenthesizedArrow(parser, context, scope, privateScope, isSequence ? expressions : [
            expr
        ], canAssign, 0, start);
    }
    if (destructible & 64) {
        parser.report(63);
    }
    if (destructible & 8) {
        parser.report(144);
    }
    parser.destructible = (parser.destructible | 256) ^ 256 | destructible;
    return parser.options.preserveParens ? parser.finishNode({
        type: 'ParenthesizedExpression',
        expression: expr
    }, parenthesesStart) : expr;
}
function parseIdentifierOrArrow(parser, context, privateScope) {
    const { tokenStart: start } = parser;
    const { tokenValue } = parser;
    let isNonSimpleParameterList = 0;
    let hasStrictReserved = 0;
    if ((parser.getToken() & 537079808) === 537079808) {
        isNonSimpleParameterList = 1;
    } else if ((parser.getToken() & 36864) === 36864) {
        hasStrictReserved = 1;
    }
    const expr = parseIdentifier(parser, context);
    parser.assignable = 1;
    if (parser.getToken() === 10) {
        const scope = parser.options.lexical ? createArrowHeadParsingScope(parser, context, tokenValue) : undefined;
        if (isNonSimpleParameterList) parser.flags |= 128;
        if (hasStrictReserved) parser.flags |= 256;
        return parseArrowFunctionExpression(parser, context, scope, privateScope, [
            expr
        ], 0, start);
    }
    return expr;
}
function parseArrowFromIdentifier(parser, context, privateScope, value, expr, inNew, canAssign, isAsync, start) {
    if (!canAssign) parser.report(57);
    if (inNew) parser.report(51);
    parser.flags &= -129;
    const scope = parser.options.lexical ? createArrowHeadParsingScope(parser, context, value) : void 0;
    return parseArrowFunctionExpression(parser, context, scope, privateScope, [
        expr
    ], isAsync, start);
}
function parseParenthesizedArrow(parser, context, scope, privateScope, params, canAssign, isAsync, start) {
    if (!canAssign) parser.report(57);
    for(let i = 0; i < params.length; ++i)reinterpretToPattern(parser, params[i]);
    return parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start);
}
function parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start) {
    if (parser.flags & 1) parser.report(48);
    consume(parser, context | 32, 10);
    const modifierFlags = 1024 | 2048 | 8192 | 524288;
    context = (context | modifierFlags) ^ modifierFlags | (isAsync ? 2048 : 0);
    const expression = parser.getToken() !== 2162700;
    let body;
    scope?.reportScopeError();
    if (expression) {
        parser.flags = (parser.flags | 512 | 256 | 64 | 4096) ^ (512 | 256 | 64 | 4096);
        body = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    } else {
        scope = scope?.createChildScope(64);
        const modifierFlags = 4 | 131072 | 8;
        body = parseFunctionBody(parser, (context | modifierFlags) ^ modifierFlags | 4096, scope, privateScope, 16, void 0, void 0);
        switch(parser.getToken()){
            case 69271571:
                if ((parser.flags & 1) === 0) {
                    parser.report(116);
                }
                break;
            case 67108877:
            case 67174409:
            case 22:
                parser.report(117);
            case 67174411:
                if ((parser.flags & 1) === 0) {
                    parser.report(116);
                }
                parser.flags |= 1024;
                break;
        }
        if ((parser.getToken() & 8388608) === 8388608 && (parser.flags & 1) === 0) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        if ((parser.getToken() & 33619968) === 33619968) parser.report(125);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ArrowFunctionExpression',
        params,
        body,
        async: isAsync === 1,
        expression,
        generator: false
    }, start);
}
function parseFormalParametersOrFormalList(parser, context, scope, privateScope, inGroup, kind) {
    consume(parser, context, 67174411);
    parser.flags = (parser.flags | 128) ^ 128;
    const params = [];
    if (consumeOpt(parser, context, 16)) return params;
    context = (context | 131072) ^ 131072;
    let isNonSimpleParameterList = 0;
    while(parser.getToken() !== 18){
        let left;
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
            if ((context & 1) === 0) {
                if ((token & 36864) === 36864) {
                    parser.flags |= 256;
                }
                if ((token & 537079808) === 537079808) {
                    parser.flags |= 512;
                }
            }
            left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0);
        } else {
            if (token === 2162700) {
                left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0);
            } else if (token === 69271571) {
                left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0);
            } else if (token === 14) {
                left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, 0, 0, inGroup, 1);
            } else {
                parser.report(30, KeywordDescTable[token & 255]);
            }
            isNonSimpleParameterList = 1;
            if (parser.destructible & (32 | 16)) {
                parser.report(50);
            }
        }
        if (parser.getToken() === 1077936155) {
            nextToken(parser, context | 32);
            isNonSimpleParameterList = 1;
            const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
            left = parser.finishNode({
                type: 'AssignmentPattern',
                left,
                right
            }, tokenStart);
        }
        params.push(left);
        if (!consumeOpt(parser, context, 18)) break;
        if (parser.getToken() === 16) {
            break;
        }
    }
    if (isNonSimpleParameterList) parser.flags |= 128;
    if (isNonSimpleParameterList || context & 1) {
        scope?.reportScopeError();
    }
    consume(parser, context, 16);
    return params;
}
function parseMemberExpressionNoCall(parser, context, privateScope, expr, inGroup, start) {
    const token = parser.getToken();
    if (token & 67108864) {
        if (token === 67108877) {
            nextToken(parser, context | 262144);
            parser.assignable = 1;
            const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
            return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
                type: 'MemberExpression',
                object: expr,
                computed: false,
                property,
                optional: false
            }, start), 0, start);
        } else if (token === 69271571) {
            nextToken(parser, context | 32);
            const { tokenStart } = parser;
            const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenStart);
            consume(parser, context, 20);
            parser.assignable = 1;
            return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
                type: 'MemberExpression',
                object: expr,
                computed: true,
                property,
                optional: false
            }, start), 0, start);
        } else if (token === 67174408 || token === 67174409) {
            parser.assignable = 2;
            return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
                type: 'TaggedTemplateExpression',
                tag: expr,
                quasi: parser.getToken() === 67174408 ? parseTemplate(parser, context | 64, privateScope) : parseTemplateLiteral(parser, context | 64)
            }, start), 0, start);
        }
    }
    return expr;
}
function parseNewExpression(parser, context, privateScope, inGroup) {
    const { tokenStart: start } = parser;
    const id = parseIdentifier(parser, context | 32);
    const { tokenStart } = parser;
    if (consumeOpt(parser, context, 67108877)) {
        if (context & 65536 && parser.getToken() === 209029) {
            parser.assignable = 2;
            return parseMetaProperty(parser, context, id, start);
        }
        parser.report(94);
    }
    parser.assignable = 2;
    if ((parser.getToken() & 16842752) === 16842752) {
        parser.report(65, KeywordDescTable[parser.getToken() & 255]);
    }
    const expr = parsePrimaryExpression(parser, context, privateScope, 2, 1, 0, inGroup, 1, tokenStart);
    context = (context | 131072) ^ 131072;
    if (parser.getToken() === 67108990) parser.report(168);
    const callee = parseMemberExpressionNoCall(parser, context, privateScope, expr, inGroup, tokenStart);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'NewExpression',
        callee,
        arguments: parser.getToken() === 67174411 ? parseArguments(parser, context, privateScope, inGroup) : []
    }, start);
}
function parseMetaProperty(parser, context, meta, start) {
    const property = parseIdentifier(parser, context);
    return parser.finishNode({
        type: 'MetaProperty',
        meta,
        property
    }, start);
}
function parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start) {
    if (parser.getToken() === 209006) parser.report(31);
    if (context & (1 | 1024) && parser.getToken() === 241771) {
        parser.report(32);
    }
    classifyIdentifier(parser, context, parser.getToken());
    if ((parser.getToken() & 36864) === 36864) {
        parser.flags |= 256;
    }
    return parseArrowFromIdentifier(parser, context & -524289 | 2048, privateScope, parser.tokenValue, parseIdentifier(parser, context), 0, canAssign, 1, start);
}
function parseAsyncArrowOrCallExpression(parser, context, privateScope, callee, canAssign, kind, origin, flags, start) {
    nextToken(parser, context | 32);
    const scope = parser.createScopeIfLexical()?.createChildScope(512);
    context = (context | 131072) ^ 131072;
    if (consumeOpt(parser, context, 16)) {
        if (parser.getToken() === 10) {
            if (flags & 1) parser.report(48);
            return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 1, start);
        }
        return parser.finishNode({
            type: 'CallExpression',
            callee,
            arguments: [],
            optional: false
        }, start);
    }
    let destructible = 0;
    let expr = null;
    let isNonSimpleParameterList = 0;
    parser.destructible = (parser.destructible | 256 | 128) ^ (256 | 128);
    const params = [];
    while(parser.getToken() !== 16){
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
            scope?.addBlockName(context, parser.tokenValue, kind, 0);
            if ((token & 537079808) === 537079808) {
                parser.flags |= 512;
            } else if ((token & 36864) === 36864) {
                parser.flags |= 256;
            }
            expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenStart);
            if (parser.getToken() === 16 || parser.getToken() === 18) {
                if (parser.assignable & 2) {
                    destructible |= 16;
                    isNonSimpleParameterList = 1;
                }
            } else {
                if (parser.getToken() === 1077936155) {
                    isNonSimpleParameterList = 1;
                } else {
                    destructible |= 16;
                }
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenStart);
                if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                    expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenStart, expr);
                }
            }
        } else if (token & 2097152) {
            expr = token === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin);
            destructible |= parser.destructible;
            isNonSimpleParameterList = 1;
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                if (destructible & 8) parser.report(122);
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
                destructible |= 16;
                if ((parser.getToken() & 8388608) === 8388608) {
                    expr = parseBinaryExpression(parser, context, privateScope, 1, start, 4, token, expr);
                }
                if (consumeOpt(parser, context | 32, 22)) {
                    expr = parseConditionalExpression(parser, context, privateScope, expr, start);
                }
            }
        } else if (token === 14) {
            expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 1, 1, 0);
            destructible |= (parser.getToken() === 16 ? 0 : 16) | parser.destructible;
            isNonSimpleParameterList = 1;
        } else {
            expr = parseExpression(parser, context, privateScope, 1, 0, tokenStart);
            destructible = parser.assignable;
            params.push(expr);
            while(consumeOpt(parser, context | 32, 18)){
                params.push(parseExpression(parser, context, privateScope, 1, 0, tokenStart));
            }
            destructible |= parser.assignable;
            consume(parser, context, 16);
            parser.destructible = destructible | 16;
            parser.assignable = 2;
            return parser.finishNode({
                type: 'CallExpression',
                callee,
                arguments: params,
                optional: false
            }, start);
        }
        params.push(expr);
        if (!consumeOpt(parser, context | 32, 18)) break;
    }
    consume(parser, context, 16);
    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
    if (parser.getToken() === 10) {
        if (destructible & (32 | 16)) parser.report(27);
        if (parser.flags & 1 || flags & 1) parser.report(48);
        if (destructible & 128) parser.report(31);
        if (context & (1 | 1024) && destructible & 256) parser.report(32);
        if (isNonSimpleParameterList) parser.flags |= 128;
        return parseParenthesizedArrow(parser, context | 2048, scope, privateScope, params, canAssign, 1, start);
    }
    if (destructible & 64) {
        parser.report(63);
    }
    if (destructible & 8) {
        parser.report(62);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'CallExpression',
        callee,
        arguments: params,
        optional: false
    }, start);
}
function parseRegExpLiteral(parser, context) {
    const { tokenRaw, tokenRegExp, tokenValue, tokenStart } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    const node = {
        type: 'Literal',
        value: tokenValue,
        regex: tokenRegExp
    };
    if (parser.options.raw) {
        node.raw = tokenRaw;
    }
    return parser.finishNode(node, tokenStart);
}
function parseClassDeclaration(parser, context, scope, privateScope, flags) {
    let start;
    let decorators;
    if (parser.leadingDecorators.decorators.length) {
        if (parser.getToken() === 132) {
            parser.report(30, '@');
        }
        start = parser.leadingDecorators.start;
        decorators = [
            ...parser.leadingDecorators.decorators
        ];
        parser.leadingDecorators.decorators.length = 0;
    } else {
        start = parser.tokenStart;
        decorators = parseDecorators(parser, context, privateScope);
    }
    context = (context | 16384 | 1) ^ 16384;
    nextToken(parser, context);
    let id = null;
    let superClass = null;
    const { tokenValue } = parser;
    if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
        if (isStrictReservedWord(parser, context, parser.getToken())) {
            parser.report(118);
        }
        if ((parser.getToken() & 537079808) === 537079808) {
            parser.report(119);
        }
        if (scope) {
            scope.addBlockName(context, tokenValue, 32, 0);
            if (flags) {
                if (flags & 2) {
                    parser.declareUnboundVariable(tokenValue);
                }
            }
        }
        id = parseIdentifier(parser, context);
    } else {
        if ((flags & 1) === 0) parser.report(39, 'Class');
    }
    let inheritedContext = context;
    if (consumeOpt(parser, context | 32, 20565)) {
        superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 0);
        inheritedContext |= 512;
    } else {
        inheritedContext = (inheritedContext | 512) ^ 512;
    }
    const body = parseClassBody(parser, inheritedContext, context, scope, privateScope, 2, 8, 0);
    return parser.finishNode({
        type: 'ClassDeclaration',
        id,
        superClass,
        body,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parseClassExpression(parser, context, privateScope, inGroup, start) {
    let id = null;
    let superClass = null;
    const decorators = parseDecorators(parser, context, privateScope);
    context = (context | 1 | 16384) ^ 16384;
    nextToken(parser, context);
    if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
        if (isStrictReservedWord(parser, context, parser.getToken())) parser.report(118);
        if ((parser.getToken() & 537079808) === 537079808) {
            parser.report(119);
        }
        id = parseIdentifier(parser, context);
    }
    let inheritedContext = context;
    if (consumeOpt(parser, context | 32, 20565)) {
        superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 0);
        inheritedContext |= 512;
    } else {
        inheritedContext = (inheritedContext | 512) ^ 512;
    }
    const body = parseClassBody(parser, inheritedContext, context, void 0, privateScope, 2, 0, inGroup);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ClassExpression',
        id,
        superClass,
        body,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parseDecorators(parser, context, privateScope) {
    const list = [];
    if (parser.options.next) {
        while(parser.getToken() === 132){
            list.push(parseDecoratorList(parser, context, privateScope));
        }
    }
    return list;
}
function parseDecoratorList(parser, context, privateScope) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    let expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, start);
    expression = parseMemberOrUpdateExpression(parser, context, privateScope, expression, 0, 0, parser.tokenStart);
    return parser.finishNode({
        type: 'Decorator',
        expression
    }, start);
}
function parseClassBody(parser, context, inheritedContext, scope, parentScope, kind, origin, inGroup) {
    const { tokenStart } = parser;
    const privateScope = parser.createPrivateScopeIfLexical(parentScope);
    consume(parser, context | 32, 2162700);
    const modifierFlags = 131072 | 524288;
    context = (context | modifierFlags) ^ modifierFlags;
    const hasConstr = parser.flags & 32;
    parser.flags = (parser.flags | 32) ^ 32;
    const body = [];
    while(parser.getToken() !== 1074790415){
        const decoratorStart = parser.tokenStart;
        const decorators = parseDecorators(parser, context, privateScope);
        if (decorators.length > 0 && parser.tokenValue === 'constructor') {
            parser.report(109);
        }
        if (parser.getToken() === 1074790415) parser.report(108);
        if (consumeOpt(parser, context, 1074790417)) {
            if (decorators.length > 0) parser.report(120);
            continue;
        }
        body.push(parseClassElementList(parser, context, scope, privateScope, inheritedContext, kind, decorators, 0, inGroup, decorators.length > 0 ? decoratorStart : parser.tokenStart));
    }
    consume(parser, origin & 8 ? context | 32 : context, 1074790415);
    privateScope?.validatePrivateIdentifierRefs();
    parser.flags = parser.flags & -33 | hasConstr;
    return parser.finishNode({
        type: 'ClassBody',
        body
    }, tokenStart);
}
function parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, isStatic, inGroup, start) {
    let kind = isStatic ? 32 : 0;
    let key = null;
    const token = parser.getToken();
    if (token & (143360 | 36864) || token === -2147483528) {
        key = parseIdentifier(parser, context);
        switch(token){
            case 36970:
                if (!isStatic && parser.getToken() !== 67174411 && (parser.getToken() & 1048576) !== 1048576 && parser.getToken() !== 1077936155) {
                    return parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, 1, inGroup, start);
                }
                break;
            case 209005:
                if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    kind |= 16 | (optionalBit(parser, context, 8391476) ? 8 : 0);
                }
                break;
            case 209008:
                if (parser.getToken() !== 67174411) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    kind |= 256;
                }
                break;
            case 209009:
                if (parser.getToken() !== 67174411) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    kind |= 512;
                }
                break;
            case 12402:
                if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    if (parser.options.next) kind |= 1024;
                }
                break;
        }
    } else if (token === 69271571) {
        kind |= 2;
        key = parseComputedPropertyName(parser, inheritedContext, privateScope, inGroup);
    } else if ((token & 134217728) === 134217728) {
        key = parseLiteral(parser, context);
    } else if (token === 8391476) {
        kind |= 8;
        nextToken(parser, context);
    } else if (parser.getToken() === 130) {
        kind |= 8192;
        key = parsePrivateIdentifier(parser, context | 16, privateScope, 768);
    } else if ((parser.getToken() & 1073741824) === 1073741824) {
        kind |= 128;
    } else if (isStatic && token === 2162700) {
        return parseStaticBlock(parser, context | 16, scope, privateScope, start);
    } else if (token === -2147483527) {
        key = parseIdentifier(parser, context);
        if (parser.getToken() !== 67174411) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    if (kind & (8 | 16 | 768 | 1024)) {
        if (parser.getToken() & 143360 || parser.getToken() === -2147483528 || parser.getToken() === -2147483527) {
            key = parseIdentifier(parser, context);
        } else if ((parser.getToken() & 134217728) === 134217728) {
            key = parseLiteral(parser, context);
        } else if (parser.getToken() === 69271571) {
            kind |= 2;
            key = parseComputedPropertyName(parser, context, privateScope, 0);
        } else if (parser.getToken() === 130) {
            kind |= 8192;
            key = parsePrivateIdentifier(parser, context, privateScope, kind);
        } else parser.report(135);
    }
    if ((kind & 2) === 0) {
        if (parser.tokenValue === 'constructor') {
            if ((parser.getToken() & 1073741824) === 1073741824) {
                parser.report(129);
            } else if ((kind & 32) === 0 && parser.getToken() === 67174411) {
                if (kind & (768 | 16 | 128 | 8)) {
                    parser.report(53, 'accessor');
                } else if ((context & 512) === 0) {
                    if (parser.flags & 32) parser.report(54);
                    else parser.flags |= 32;
                }
            }
            kind |= 64;
        } else if ((kind & 8192) === 0 && kind & 32 && parser.tokenValue === 'prototype') {
            parser.report(52);
        }
    }
    if (kind & 1024 || parser.getToken() !== 67174411 && (kind & 768) === 0) {
        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
    }
    const value = parseMethodDefinition(parser, context | 16, privateScope, kind, inGroup, parser.tokenStart);
    return parser.finishNode({
        type: 'MethodDefinition',
        kind: (kind & 32) === 0 && kind & 64 ? 'constructor' : kind & 256 ? 'get' : kind & 512 ? 'set' : 'method',
        static: (kind & 32) > 0,
        computed: (kind & 2) > 0,
        key,
        value,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parsePrivateIdentifier(parser, context, privateScope, kind) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    const { tokenValue } = parser;
    if (tokenValue === 'constructor') parser.report(128);
    if (parser.options.lexical) {
        if (!privateScope) parser.report(4, tokenValue);
        if (kind) {
            privateScope.addPrivateIdentifier(tokenValue, kind);
        } else {
            privateScope.addPrivateIdentifierRef(tokenValue);
        }
    }
    nextToken(parser, context);
    return parser.finishNode({
        type: 'PrivateIdentifier',
        name: tokenValue
    }, tokenStart);
}
function parsePropertyDefinition(parser, context, privateScope, key, state, decorators, start) {
    let value = null;
    if (state & 8) parser.report(0);
    if (parser.getToken() === 1077936155) {
        nextToken(parser, context | 32);
        const { tokenStart } = parser;
        if (parser.getToken() === 537079927) parser.report(119);
        const modifierFlags = 1024 | 2048 | 8192 | ((state & 64) === 0 ? 512 | 16384 : 0);
        context = (context | modifierFlags) ^ modifierFlags | (state & 8 ? 1024 : 0) | (state & 16 ? 2048 : 0) | (state & 64 ? 16384 : 0) | 256 | 65536;
        value = parsePrimaryExpression(parser, context | 16, privateScope, 2, 0, 1, 0, 1, tokenStart);
        if ((parser.getToken() & 1073741824) !== 1073741824 || (parser.getToken() & 4194304) === 4194304) {
            value = parseMemberOrUpdateExpression(parser, context | 16, privateScope, value, 0, 0, tokenStart);
            value = parseAssignmentExpression(parser, context | 16, privateScope, 0, 0, tokenStart, value);
        }
    }
    matchOrInsertSemicolon(parser, context);
    return parser.finishNode({
        type: state & 1024 ? 'AccessorProperty' : 'PropertyDefinition',
        key,
        value,
        static: (state & 32) > 0,
        computed: (state & 2) > 0,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parseBindingPattern(parser, context, scope, privateScope, type, origin) {
    if (parser.getToken() & 143360 || (context & 1) === 0 && parser.getToken() === -2147483527) return parseAndClassifyIdentifier(parser, context, scope, type, origin);
    if ((parser.getToken() & 2097152) !== 2097152) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    const left = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin);
    if (parser.destructible & 16) parser.report(50);
    if (parser.destructible & 32) parser.report(50);
    return left;
}
function parseAndClassifyIdentifier(parser, context, scope, kind, origin) {
    const token = parser.getToken();
    if (context & 1) {
        if ((token & 537079808) === 537079808) {
            parser.report(119);
        } else if ((token & 36864) === 36864 || token === -2147483527) {
            parser.report(118);
        }
    }
    if ((token & 20480) === 20480) {
        parser.report(102);
    }
    if (token === 241771) {
        if (context & 1024) parser.report(32);
        if (context & 2) parser.report(111);
    }
    if ((token & 255) === (241737 & 255)) {
        if (kind & (8 | 16)) parser.report(100);
    }
    if (token === 209006) {
        if (context & 2048) parser.report(176);
        if (context & 2) parser.report(110);
    }
    const { tokenValue, tokenStart: start } = parser;
    nextToken(parser, context);
    scope?.addVarOrBlock(context, tokenValue, kind, origin);
    return parser.finishNode({
        type: 'Identifier',
        name: tokenValue
    }, start);
}
function parseJSXRootElementOrFragment(parser, context, privateScope, inJSXChild, start) {
    if (!inJSXChild) consume(parser, context, 8456256);
    if (parser.getToken() === 8390721) {
        const openingFragment = parseJSXOpeningFragment(parser, start);
        const [children, closingFragment] = parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild);
        return parser.finishNode({
            type: 'JSXFragment',
            openingFragment,
            children,
            closingFragment
        }, start);
    }
    if (parser.getToken() === 8457014) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    let closingElement = null;
    let children = [];
    const openingElement = parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start);
    if (!openingElement.selfClosing) {
        [children, closingElement] = parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild);
        const close = isEqualTagName(closingElement.name);
        if (isEqualTagName(openingElement.name) !== close) parser.report(155, close);
    }
    return parser.finishNode({
        type: 'JSXElement',
        children,
        openingElement,
        closingElement
    }, start);
}
function parseJSXOpeningFragment(parser, start) {
    nextJSXToken(parser);
    return parser.finishNode({
        type: 'JSXOpeningFragment'
    }, start);
}
function parseJSXClosingElement(parser, context, inJSXChild, start) {
    consume(parser, context, 8457014);
    const name = parseJSXElementName(parser, context);
    if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
    }
    if (inJSXChild) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXClosingElement',
        name
    }, start);
}
function parseJSXClosingFragment(parser, context, inJSXChild, start) {
    consume(parser, context, 8457014);
    if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
    }
    if (inJSXChild) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXClosingFragment'
    }, start);
}
function parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild) {
    const children = [];
    while(true){
        const child = parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild);
        if (child.type === 'JSXClosingElement') {
            return [
                children,
                child
            ];
        }
        children.push(child);
    }
}
function parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild) {
    const children = [];
    while(true){
        const child = parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild);
        if (child.type === 'JSXClosingFragment') {
            return [
                children,
                child
            ];
        }
        children.push(child);
    }
}
function parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild) {
    if (parser.getToken() === 137) return parseJSXText(parser, context);
    if (parser.getToken() === 2162700) return parseJSXExpressionContainer(parser, context, privateScope, 1, 0);
    if (parser.getToken() === 8456256) {
        const { tokenStart } = parser;
        nextToken(parser, context);
        if (parser.getToken() === 8457014) return parseJSXClosingElement(parser, context, inJSXChild, tokenStart);
        return parseJSXRootElementOrFragment(parser, context, privateScope, 1, tokenStart);
    }
    parser.report(0);
}
function parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild) {
    if (parser.getToken() === 137) return parseJSXText(parser, context);
    if (parser.getToken() === 2162700) return parseJSXExpressionContainer(parser, context, privateScope, 1, 0);
    if (parser.getToken() === 8456256) {
        const { tokenStart } = parser;
        nextToken(parser, context);
        if (parser.getToken() === 8457014) return parseJSXClosingFragment(parser, context, inJSXChild, tokenStart);
        return parseJSXRootElementOrFragment(parser, context, privateScope, 1, tokenStart);
    }
    parser.report(0);
}
function parseJSXText(parser, context) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const node = {
        type: 'JSXText',
        value: parser.tokenValue
    };
    if (parser.options.raw) {
        node.raw = parser.tokenRaw;
    }
    return parser.finishNode(node, start);
}
function parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start) {
    if ((parser.getToken() & 143360) !== 143360 && (parser.getToken() & 4096) !== 4096) parser.report(0);
    const tagName = parseJSXElementName(parser, context);
    const attributes = parseJSXAttributes(parser, context, privateScope);
    const selfClosing = parser.getToken() === 8457014;
    if (selfClosing) consume(parser, context, 8457014);
    if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
    }
    if (inJSXChild || !selfClosing) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXOpeningElement',
        name: tagName,
        attributes,
        selfClosing
    }, start);
}
function parseJSXElementName(parser, context) {
    const { tokenStart } = parser;
    rescanJSXIdentifier(parser);
    let key = parseJSXIdentifier(parser, context);
    if (parser.getToken() === 21) return parseJSXNamespacedName(parser, context, key, tokenStart);
    while(consumeOpt(parser, context, 67108877)){
        rescanJSXIdentifier(parser);
        key = parseJSXMemberExpression(parser, context, key, tokenStart);
    }
    return key;
}
function parseJSXMemberExpression(parser, context, object, start) {
    const property = parseJSXIdentifier(parser, context);
    return parser.finishNode({
        type: 'JSXMemberExpression',
        object,
        property
    }, start);
}
function parseJSXAttributes(parser, context, privateScope) {
    const attributes = [];
    while(parser.getToken() !== 8457014 && parser.getToken() !== 8390721 && parser.getToken() !== 1048576){
        attributes.push(parseJsxAttribute(parser, context, privateScope));
    }
    return attributes;
}
function parseJSXSpreadAttribute(parser, context, privateScope) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context, 14);
    const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    consume(parser, context, 1074790415);
    return parser.finishNode({
        type: 'JSXSpreadAttribute',
        argument: expression
    }, start);
}
function parseJsxAttribute(parser, context, privateScope) {
    const { tokenStart } = parser;
    if (parser.getToken() === 2162700) return parseJSXSpreadAttribute(parser, context, privateScope);
    rescanJSXIdentifier(parser);
    let value = null;
    let name = parseJSXIdentifier(parser, context);
    if (parser.getToken() === 21) {
        name = parseJSXNamespacedName(parser, context, name, tokenStart);
    }
    if (parser.getToken() === 1077936155) {
        const token = scanJSXAttributeValue(parser, context);
        switch(token){
            case 134283267:
                value = parseLiteral(parser, context);
                break;
            case 8456256:
                value = parseJSXRootElementOrFragment(parser, context, privateScope, 0, parser.tokenStart);
                break;
            case 2162700:
                value = parseJSXExpressionContainer(parser, context, privateScope, 0, 1);
                break;
            default:
                parser.report(154);
        }
    }
    return parser.finishNode({
        type: 'JSXAttribute',
        value,
        name
    }, tokenStart);
}
function parseJSXNamespacedName(parser, context, namespace, start) {
    consume(parser, context, 21);
    const name = parseJSXIdentifier(parser, context);
    return parser.finishNode({
        type: 'JSXNamespacedName',
        namespace,
        name
    }, start);
}
function parseJSXExpressionContainer(parser, context, privateScope, inJSXChild, isAttr) {
    const { tokenStart: start } = parser;
    nextToken(parser, context | 32);
    const { tokenStart } = parser;
    if (parser.getToken() === 14) return parseJSXSpreadChild(parser, context, privateScope, start);
    let expression = null;
    if (parser.getToken() === 1074790415) {
        if (isAttr) parser.report(157);
        expression = parseJSXEmptyExpression(parser, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        });
    } else {
        expression = parseExpression(parser, context, privateScope, 1, 0, tokenStart);
    }
    if (parser.getToken() !== 1074790415) {
        parser.report(25, KeywordDescTable[1074790415 & 255]);
    }
    if (inJSXChild) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXExpressionContainer',
        expression
    }, start);
}
function parseJSXSpreadChild(parser, context, privateScope, start) {
    consume(parser, context, 14);
    const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    consume(parser, context, 1074790415);
    return parser.finishNode({
        type: 'JSXSpreadChild',
        expression
    }, start);
}
function parseJSXEmptyExpression(parser, start) {
    return parser.finishNode({
        type: 'JSXEmptyExpression'
    }, start, parser.tokenStart);
}
function parseJSXIdentifier(parser, context) {
    const start = parser.tokenStart;
    if (!(parser.getToken() & 143360)) {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    const { tokenValue } = parser;
    nextToken(parser, context);
    return parser.finishNode({
        type: 'JSXIdentifier',
        name: tokenValue
    }, start);
}
var version$1 = "6.1.4";
const version = version$1;
function parseScript(source, options) {
    return parseSource(source, options);
}
function parseModule(source, options) {
    return parseSource(source, options, 1 | 2);
}
function parse(source, options) {
    return parseSource(source, options);
}
meriyah.__exports.parse = parse;
meriyah.__exports.parseModule = parseModule;
meriyah.__exports.parseScript = parseScript;
meriyah.__exports.version = version;
exports.default = meriyah.__exports; //# sourceMappingURL=meriyah2.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/astring/dist/astring.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const astring = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/astring.js [instrumentation] (ecmascript)");
Object.defineProperty(astring.__exports, "__esModule", {
    value: true
});
astring.__exports.generate = generate;
astring.__exports.baseGenerator = astring.__exports.GENERATOR = astring.__exports.EXPRESSIONS_PRECEDENCE = astring.__exports.NEEDS_PARENTHESES = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
}
var stringify = JSON.stringify;
if (!String.prototype.repeat) {
    throw new Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");
}
if (!String.prototype.endsWith) {
    throw new Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");
}
var OPERATOR_PRECEDENCE = {
    "||": 2,
    "??": 3,
    "&&": 4,
    "|": 5,
    "^": 6,
    "&": 7,
    "==": 8,
    "!=": 8,
    "===": 8,
    "!==": 8,
    "<": 9,
    ">": 9,
    "<=": 9,
    ">=": 9,
    "in": 9,
    "instanceof": 9,
    "<<": 10,
    ">>": 10,
    ">>>": 10,
    "+": 11,
    "-": 11,
    "*": 12,
    "%": 12,
    "/": 12,
    "**": 13
};
var NEEDS_PARENTHESES = 17;
astring.__exports.NEEDS_PARENTHESES = NEEDS_PARENTHESES;
var EXPRESSIONS_PRECEDENCE = {
    ArrayExpression: 20,
    TaggedTemplateExpression: 20,
    ThisExpression: 20,
    Identifier: 20,
    PrivateIdentifier: 20,
    Literal: 18,
    TemplateLiteral: 20,
    Super: 20,
    SequenceExpression: 20,
    MemberExpression: 19,
    ChainExpression: 19,
    CallExpression: 19,
    NewExpression: 19,
    ArrowFunctionExpression: NEEDS_PARENTHESES,
    ClassExpression: NEEDS_PARENTHESES,
    FunctionExpression: NEEDS_PARENTHESES,
    ObjectExpression: NEEDS_PARENTHESES,
    UpdateExpression: 16,
    UnaryExpression: 15,
    AwaitExpression: 15,
    BinaryExpression: 14,
    LogicalExpression: 13,
    ConditionalExpression: 4,
    AssignmentExpression: 3,
    YieldExpression: 2,
    RestElement: 1
};
astring.__exports.EXPRESSIONS_PRECEDENCE = EXPRESSIONS_PRECEDENCE;
function formatSequence(state, nodes) {
    var generator = state.generator;
    state.write("(");
    if (nodes != null && nodes.length > 0) {
        generator[nodes[0].type](nodes[0], state);
        var length = nodes.length;
        for(var i = 1; i < length; i++){
            var param = nodes[i];
            state.write(", ");
            generator[param.type](param, state);
        }
    }
    state.write(")");
}
function expressionNeedsParenthesis(state, node, parentNode, isRightHand) {
    var nodePrecedence = state.expressionsPrecedence[node.type];
    if (nodePrecedence === NEEDS_PARENTHESES) {
        return true;
    }
    var parentNodePrecedence = state.expressionsPrecedence[parentNode.type];
    if (nodePrecedence !== parentNodePrecedence) {
        return !isRightHand && nodePrecedence === 15 && parentNodePrecedence === 14 && parentNode.operator === "**" || nodePrecedence < parentNodePrecedence;
    }
    if (nodePrecedence !== 13 && nodePrecedence !== 14) {
        return false;
    }
    if (node.operator === "**" && parentNode.operator === "**") {
        return !isRightHand;
    }
    if (nodePrecedence === 13 && parentNodePrecedence === 13 && (node.operator === "??" || parentNode.operator === "??")) {
        return true;
    }
    if (isRightHand) {
        return OPERATOR_PRECEDENCE[node.operator] <= OPERATOR_PRECEDENCE[parentNode.operator];
    }
    return OPERATOR_PRECEDENCE[node.operator] < OPERATOR_PRECEDENCE[parentNode.operator];
}
function formatExpression(state, node, parentNode, isRightHand) {
    var generator = state.generator;
    if (expressionNeedsParenthesis(state, node, parentNode, isRightHand)) {
        state.write("(");
        generator[node.type](node, state);
        state.write(")");
    } else {
        generator[node.type](node, state);
    }
}
function reindent(state, text, indent, lineEnd) {
    var lines = text.split("\n");
    var end = lines.length - 1;
    state.write(lines[0].trim());
    if (end > 0) {
        state.write(lineEnd);
        for(var i = 1; i < end; i++){
            state.write(indent + lines[i].trim() + lineEnd);
        }
        state.write(indent + lines[end].trim());
    }
}
function formatComments(state, comments, indent, lineEnd) {
    var length = comments.length;
    for(var i = 0; i < length; i++){
        var comment = comments[i];
        state.write(indent);
        if (comment.type[0] === "L") {
            state.write("// " + comment.value.trim() + "\n", comment);
        } else {
            state.write("/*");
            reindent(state, comment.value, indent, lineEnd);
            state.write("*/" + lineEnd);
        }
    }
}
function hasCallExpression(node) {
    var currentNode = node;
    while(currentNode != null){
        var _currentNode = currentNode, type = _currentNode.type;
        if (type[0] === "C" && type[1] === "a") {
            return true;
        } else if (type[0] === "M" && type[1] === "e" && type[2] === "m") {
            currentNode = currentNode.object;
        } else {
            return false;
        }
    }
}
function formatVariableDeclaration(state, node) {
    var generator = state.generator;
    var declarations = node.declarations;
    state.write(node.kind + " ");
    var length = declarations.length;
    if (length > 0) {
        generator.VariableDeclarator(declarations[0], state);
        for(var i = 1; i < length; i++){
            state.write(", ");
            generator.VariableDeclarator(declarations[i], state);
        }
    }
}
var ForInStatement, FunctionDeclaration, RestElement, BinaryExpression, ArrayExpression, BlockStatement;
var GENERATOR = {
    Program: function Program(node, state) {
        var indent = state.indent.repeat(state.indentLevel);
        var lineEnd = state.lineEnd, writeComments = state.writeComments;
        if (writeComments && node.comments != null) {
            formatComments(state, node.comments, indent, lineEnd);
        }
        var statements = node.body;
        var length = statements.length;
        for(var i = 0; i < length; i++){
            var statement = statements[i];
            if (writeComments && statement.comments != null) {
                formatComments(state, statement.comments, indent, lineEnd);
            }
            state.write(indent);
            this[statement.type](statement, state);
            state.write(lineEnd);
        }
        if (writeComments && node.trailingComments != null) {
            formatComments(state, node.trailingComments, indent, lineEnd);
        }
    },
    BlockStatement: BlockStatement = function BlockStatement2(node, state) {
        var indent = state.indent.repeat(state.indentLevel++);
        var lineEnd = state.lineEnd, writeComments = state.writeComments;
        var statementIndent = indent + state.indent;
        state.write("{");
        var statements = node.body;
        if (statements != null && statements.length > 0) {
            state.write(lineEnd);
            if (writeComments && node.comments != null) {
                formatComments(state, node.comments, statementIndent, lineEnd);
            }
            var length = statements.length;
            for(var i = 0; i < length; i++){
                var statement = statements[i];
                if (writeComments && statement.comments != null) {
                    formatComments(state, statement.comments, statementIndent, lineEnd);
                }
                state.write(statementIndent);
                this[statement.type](statement, state);
                state.write(lineEnd);
            }
            state.write(indent);
        } else {
            if (writeComments && node.comments != null) {
                state.write(lineEnd);
                formatComments(state, node.comments, statementIndent, lineEnd);
                state.write(indent);
            }
        }
        if (writeComments && node.trailingComments != null) {
            formatComments(state, node.trailingComments, statementIndent, lineEnd);
        }
        state.write("}");
        state.indentLevel--;
    },
    ClassBody: BlockStatement,
    StaticBlock: function StaticBlock(node, state) {
        state.write("static ");
        this.BlockStatement(node, state);
    },
    EmptyStatement: function EmptyStatement(node, state) {
        state.write(";");
    },
    ExpressionStatement: function ExpressionStatement(node, state) {
        var precedence = state.expressionsPrecedence[node.expression.type];
        if (precedence === NEEDS_PARENTHESES || precedence === 3 && node.expression.left.type[0] === "O") {
            state.write("(");
            this[node.expression.type](node.expression, state);
            state.write(")");
        } else {
            this[node.expression.type](node.expression, state);
        }
        state.write(";");
    },
    IfStatement: function IfStatement(node, state) {
        state.write("if (");
        this[node.test.type](node.test, state);
        state.write(") ");
        this[node.consequent.type](node.consequent, state);
        if (node.alternate != null) {
            state.write(" else ");
            this[node.alternate.type](node.alternate, state);
        }
    },
    LabeledStatement: function LabeledStatement(node, state) {
        this[node.label.type](node.label, state);
        state.write(": ");
        this[node.body.type](node.body, state);
    },
    BreakStatement: function BreakStatement(node, state) {
        state.write("break");
        if (node.label != null) {
            state.write(" ");
            this[node.label.type](node.label, state);
        }
        state.write(";");
    },
    ContinueStatement: function ContinueStatement(node, state) {
        state.write("continue");
        if (node.label != null) {
            state.write(" ");
            this[node.label.type](node.label, state);
        }
        state.write(";");
    },
    WithStatement: function WithStatement(node, state) {
        state.write("with (");
        this[node.object.type](node.object, state);
        state.write(") ");
        this[node.body.type](node.body, state);
    },
    SwitchStatement: function SwitchStatement(node, state) {
        var indent = state.indent.repeat(state.indentLevel++);
        var lineEnd = state.lineEnd, writeComments = state.writeComments;
        state.indentLevel++;
        var caseIndent = indent + state.indent;
        var statementIndent = caseIndent + state.indent;
        state.write("switch (");
        this[node.discriminant.type](node.discriminant, state);
        state.write(") {" + lineEnd);
        var occurences = node.cases;
        var occurencesCount = occurences.length;
        for(var i = 0; i < occurencesCount; i++){
            var occurence = occurences[i];
            if (writeComments && occurence.comments != null) {
                formatComments(state, occurence.comments, caseIndent, lineEnd);
            }
            if (occurence.test) {
                state.write(caseIndent + "case ");
                this[occurence.test.type](occurence.test, state);
                state.write(":" + lineEnd);
            } else {
                state.write(caseIndent + "default:" + lineEnd);
            }
            var consequent = occurence.consequent;
            var consequentCount = consequent.length;
            for(var _i = 0; _i < consequentCount; _i++){
                var statement = consequent[_i];
                if (writeComments && statement.comments != null) {
                    formatComments(state, statement.comments, statementIndent, lineEnd);
                }
                state.write(statementIndent);
                this[statement.type](statement, state);
                state.write(lineEnd);
            }
        }
        state.indentLevel -= 2;
        state.write(indent + "}");
    },
    ReturnStatement: function ReturnStatement(node, state) {
        state.write("return");
        if (node.argument) {
            state.write(" ");
            this[node.argument.type](node.argument, state);
        }
        state.write(";");
    },
    ThrowStatement: function ThrowStatement(node, state) {
        state.write("throw ");
        this[node.argument.type](node.argument, state);
        state.write(";");
    },
    TryStatement: function TryStatement(node, state) {
        state.write("try ");
        this[node.block.type](node.block, state);
        if (node.handler) {
            var handler = node.handler;
            if (handler.param == null) {
                state.write(" catch ");
            } else {
                state.write(" catch (");
                this[handler.param.type](handler.param, state);
                state.write(") ");
            }
            this[handler.body.type](handler.body, state);
        }
        if (node.finalizer) {
            state.write(" finally ");
            this[node.finalizer.type](node.finalizer, state);
        }
    },
    WhileStatement: function WhileStatement(node, state) {
        state.write("while (");
        this[node.test.type](node.test, state);
        state.write(") ");
        this[node.body.type](node.body, state);
    },
    DoWhileStatement: function DoWhileStatement(node, state) {
        state.write("do ");
        this[node.body.type](node.body, state);
        state.write(" while (");
        this[node.test.type](node.test, state);
        state.write(");");
    },
    ForStatement: function ForStatement(node, state) {
        state.write("for (");
        if (node.init != null) {
            var init = node.init;
            if (init.type[0] === "V") {
                formatVariableDeclaration(state, init);
            } else {
                this[init.type](init, state);
            }
        }
        state.write("; ");
        if (node.test) {
            this[node.test.type](node.test, state);
        }
        state.write("; ");
        if (node.update) {
            this[node.update.type](node.update, state);
        }
        state.write(") ");
        this[node.body.type](node.body, state);
    },
    ForInStatement: ForInStatement = function ForInStatement2(node, state) {
        state.write("for ".concat(node["await"] ? "await " : "", "("));
        var left = node.left;
        if (left.type[0] === "V") {
            formatVariableDeclaration(state, left);
        } else {
            this[left.type](left, state);
        }
        state.write(node.type[3] === "I" ? " in " : " of ");
        this[node.right.type](node.right, state);
        state.write(") ");
        this[node.body.type](node.body, state);
    },
    ForOfStatement: ForInStatement,
    DebuggerStatement: function DebuggerStatement(node, state) {
        state.write("debugger;", node);
    },
    FunctionDeclaration: FunctionDeclaration = function FunctionDeclaration2(node, state) {
        state.write((node.async ? "async " : "") + (node.generator ? "function* " : "function ") + (node.id ? node.id.name : ""), node);
        formatSequence(state, node.params);
        state.write(" ");
        this[node.body.type](node.body, state);
    },
    FunctionExpression: FunctionDeclaration,
    VariableDeclaration: function VariableDeclaration(node, state) {
        formatVariableDeclaration(state, node);
        state.write(";");
    },
    VariableDeclarator: function VariableDeclarator(node, state) {
        this[node.id.type](node.id, state);
        if (node.init != null) {
            state.write(" = ");
            this[node.init.type](node.init, state);
        }
    },
    ClassDeclaration: function ClassDeclaration(node, state) {
        state.write("class " + (node.id ? "".concat(node.id.name, " ") : ""), node);
        if (node.superClass) {
            state.write("extends ");
            var superClass = node.superClass;
            var type = superClass.type;
            var precedence = state.expressionsPrecedence[type];
            if ((type[0] !== "C" || type[1] !== "l" || type[5] !== "E") && (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.ClassExpression)) {
                state.write("(");
                this[node.superClass.type](superClass, state);
                state.write(")");
            } else {
                this[superClass.type](superClass, state);
            }
            state.write(" ");
        }
        this.ClassBody(node.body, state);
    },
    ImportDeclaration: function ImportDeclaration(node, state) {
        state.write("import ");
        var specifiers = node.specifiers, attributes = node.attributes;
        var length = specifiers.length;
        var i = 0;
        if (length > 0) {
            for(; i < length;){
                if (i > 0) {
                    state.write(", ");
                }
                var specifier = specifiers[i];
                var type = specifier.type[6];
                if (type === "D") {
                    state.write(specifier.local.name, specifier);
                    i++;
                } else if (type === "N") {
                    state.write("* as " + specifier.local.name, specifier);
                    i++;
                } else {
                    break;
                }
            }
            if (i < length) {
                state.write("{");
                for(;;){
                    var _specifier = specifiers[i];
                    var name = _specifier.imported.name;
                    state.write(name, _specifier);
                    if (name !== _specifier.local.name) {
                        state.write(" as " + _specifier.local.name);
                    }
                    if (++i < length) {
                        state.write(", ");
                    } else {
                        break;
                    }
                }
                state.write("}");
            }
            state.write(" from ");
        }
        this.Literal(node.source, state);
        if (attributes && attributes.length > 0) {
            state.write(" with { ");
            for(var _i2 = 0; _i2 < attributes.length; _i2++){
                this.ImportAttribute(attributes[_i2], state);
                if (_i2 < attributes.length - 1) state.write(", ");
            }
            state.write(" }");
        }
        state.write(";");
    },
    ImportAttribute: function ImportAttribute(node, state) {
        this.Identifier(node.key, state);
        state.write(": ");
        this.Literal(node.value, state);
    },
    ImportExpression: function ImportExpression(node, state) {
        state.write("import(");
        this[node.source.type](node.source, state);
        state.write(")");
    },
    ExportDefaultDeclaration: function ExportDefaultDeclaration(node, state) {
        state.write("export default ");
        this[node.declaration.type](node.declaration, state);
        if (state.expressionsPrecedence[node.declaration.type] != null && node.declaration.type[0] !== "F") {
            state.write(";");
        }
    },
    ExportNamedDeclaration: function ExportNamedDeclaration(node, state) {
        state.write("export ");
        if (node.declaration) {
            this[node.declaration.type](node.declaration, state);
        } else {
            state.write("{");
            var specifiers = node.specifiers, length = specifiers.length;
            if (length > 0) {
                for(var i = 0;;){
                    var specifier = specifiers[i];
                    var name = specifier.local.name;
                    state.write(name, specifier);
                    if (name !== specifier.exported.name) {
                        state.write(" as " + specifier.exported.name);
                    }
                    if (++i < length) {
                        state.write(", ");
                    } else {
                        break;
                    }
                }
            }
            state.write("}");
            if (node.source) {
                state.write(" from ");
                this.Literal(node.source, state);
            }
            if (node.attributes && node.attributes.length > 0) {
                state.write(" with { ");
                for(var _i3 = 0; _i3 < node.attributes.length; _i3++){
                    this.ImportAttribute(node.attributes[_i3], state);
                    if (_i3 < node.attributes.length - 1) state.write(", ");
                }
                state.write(" }");
            }
            state.write(";");
        }
    },
    ExportAllDeclaration: function ExportAllDeclaration(node, state) {
        if (node.exported != null) {
            state.write("export * as " + node.exported.name + " from ");
        } else {
            state.write("export * from ");
        }
        this.Literal(node.source, state);
        if (node.attributes && node.attributes.length > 0) {
            state.write(" with { ");
            for(var i = 0; i < node.attributes.length; i++){
                this.ImportAttribute(node.attributes[i], state);
                if (i < node.attributes.length - 1) state.write(", ");
            }
            state.write(" }");
        }
        state.write(";");
    },
    MethodDefinition: function MethodDefinition(node, state) {
        if (node["static"]) {
            state.write("static ");
        }
        var kind = node.kind[0];
        if (kind === "g" || kind === "s") {
            state.write(node.kind + " ");
        }
        if (node.value.async) {
            state.write("async ");
        }
        if (node.value.generator) {
            state.write("*");
        }
        if (node.computed) {
            state.write("[");
            this[node.key.type](node.key, state);
            state.write("]");
        } else {
            this[node.key.type](node.key, state);
        }
        formatSequence(state, node.value.params);
        state.write(" ");
        this[node.value.body.type](node.value.body, state);
    },
    ClassExpression: function ClassExpression(node, state) {
        this.ClassDeclaration(node, state);
    },
    ArrowFunctionExpression: function ArrowFunctionExpression(node, state) {
        state.write(node.async ? "async " : "", node);
        var params = node.params;
        if (params != null) {
            if (params.length === 1 && params[0].type[0] === "I") {
                state.write(params[0].name, params[0]);
            } else {
                formatSequence(state, node.params);
            }
        }
        state.write(" => ");
        if (node.body.type[0] === "O") {
            state.write("(");
            this.ObjectExpression(node.body, state);
            state.write(")");
        } else {
            this[node.body.type](node.body, state);
        }
    },
    ThisExpression: function ThisExpression(node, state) {
        state.write("this", node);
    },
    Super: function Super(node, state) {
        state.write("super", node);
    },
    RestElement: RestElement = function RestElement2(node, state) {
        state.write("...");
        this[node.argument.type](node.argument, state);
    },
    SpreadElement: RestElement,
    YieldExpression: function YieldExpression(node, state) {
        state.write(node.delegate ? "yield*" : "yield");
        if (node.argument) {
            state.write(" ");
            this[node.argument.type](node.argument, state);
        }
    },
    AwaitExpression: function AwaitExpression(node, state) {
        state.write("await ", node);
        formatExpression(state, node.argument, node);
    },
    TemplateLiteral: function TemplateLiteral(node, state) {
        var quasis = node.quasis, expressions = node.expressions;
        state.write("`");
        var length = expressions.length;
        for(var i = 0; i < length; i++){
            var expression = expressions[i];
            var _quasi = quasis[i];
            state.write(_quasi.value.raw, _quasi);
            state.write("${");
            this[expression.type](expression, state);
            state.write("}");
        }
        var quasi = quasis[quasis.length - 1];
        state.write(quasi.value.raw, quasi);
        state.write("`");
    },
    TemplateElement: function TemplateElement(node, state) {
        state.write(node.value.raw, node);
    },
    TaggedTemplateExpression: function TaggedTemplateExpression(node, state) {
        formatExpression(state, node.tag, node);
        this[node.quasi.type](node.quasi, state);
    },
    ArrayExpression: ArrayExpression = function ArrayExpression2(node, state) {
        state.write("[");
        if (node.elements.length > 0) {
            var elements = node.elements, length = elements.length;
            for(var i = 0;;){
                var element = elements[i];
                if (element != null) {
                    this[element.type](element, state);
                }
                if (++i < length) {
                    state.write(", ");
                } else {
                    if (element == null) {
                        state.write(", ");
                    }
                    break;
                }
            }
        }
        state.write("]");
    },
    ArrayPattern: ArrayExpression,
    ObjectExpression: function ObjectExpression(node, state) {
        var indent = state.indent.repeat(state.indentLevel++);
        var lineEnd = state.lineEnd, writeComments = state.writeComments;
        var propertyIndent = indent + state.indent;
        state.write("{");
        if (node.properties.length > 0) {
            state.write(lineEnd);
            if (writeComments && node.comments != null) {
                formatComments(state, node.comments, propertyIndent, lineEnd);
            }
            var comma = "," + lineEnd;
            var properties = node.properties, length = properties.length;
            for(var i = 0;;){
                var property = properties[i];
                if (writeComments && property.comments != null) {
                    formatComments(state, property.comments, propertyIndent, lineEnd);
                }
                state.write(propertyIndent);
                this[property.type](property, state);
                if (++i < length) {
                    state.write(comma);
                } else {
                    break;
                }
            }
            state.write(lineEnd);
            if (writeComments && node.trailingComments != null) {
                formatComments(state, node.trailingComments, propertyIndent, lineEnd);
            }
            state.write(indent + "}");
        } else if (writeComments) {
            if (node.comments != null) {
                state.write(lineEnd);
                formatComments(state, node.comments, propertyIndent, lineEnd);
                if (node.trailingComments != null) {
                    formatComments(state, node.trailingComments, propertyIndent, lineEnd);
                }
                state.write(indent + "}");
            } else if (node.trailingComments != null) {
                state.write(lineEnd);
                formatComments(state, node.trailingComments, propertyIndent, lineEnd);
                state.write(indent + "}");
            } else {
                state.write("}");
            }
        } else {
            state.write("}");
        }
        state.indentLevel--;
    },
    Property: function Property(node, state) {
        if (node.method || node.kind[0] !== "i") {
            this.MethodDefinition(node, state);
        } else {
            if (!node.shorthand) {
                if (node.computed) {
                    state.write("[");
                    this[node.key.type](node.key, state);
                    state.write("]");
                } else {
                    this[node.key.type](node.key, state);
                }
                state.write(": ");
            }
            this[node.value.type](node.value, state);
        }
    },
    PropertyDefinition: function PropertyDefinition(node, state) {
        if (node["static"]) {
            state.write("static ");
        }
        if (node.computed) {
            state.write("[");
        }
        this[node.key.type](node.key, state);
        if (node.computed) {
            state.write("]");
        }
        if (node.value == null) {
            if (node.key.type[0] !== "F") {
                state.write(";");
            }
            return;
        }
        state.write(" = ");
        this[node.value.type](node.value, state);
        state.write(";");
    },
    ObjectPattern: function ObjectPattern(node, state) {
        state.write("{");
        if (node.properties.length > 0) {
            var properties = node.properties, length = properties.length;
            for(var i = 0;;){
                this[properties[i].type](properties[i], state);
                if (++i < length) {
                    state.write(", ");
                } else {
                    break;
                }
            }
        }
        state.write("}");
    },
    SequenceExpression: function SequenceExpression(node, state) {
        formatSequence(state, node.expressions);
    },
    UnaryExpression: function UnaryExpression(node, state) {
        if (node.prefix) {
            var operator = node.operator, argument = node.argument, type = node.argument.type;
            state.write(operator);
            var needsParentheses = expressionNeedsParenthesis(state, argument, node);
            if (!needsParentheses && (operator.length > 1 || type[0] === "U" && (type[1] === "n" || type[1] === "p") && argument.prefix && argument.operator[0] === operator && (operator === "+" || operator === "-"))) {
                state.write(" ");
            }
            if (needsParentheses) {
                state.write(operator.length > 1 ? " (" : "(");
                this[type](argument, state);
                state.write(")");
            } else {
                this[type](argument, state);
            }
        } else {
            this[node.argument.type](node.argument, state);
            state.write(node.operator);
        }
    },
    UpdateExpression: function UpdateExpression(node, state) {
        if (node.prefix) {
            state.write(node.operator);
            this[node.argument.type](node.argument, state);
        } else {
            this[node.argument.type](node.argument, state);
            state.write(node.operator);
        }
    },
    AssignmentExpression: function AssignmentExpression(node, state) {
        this[node.left.type](node.left, state);
        state.write(" " + node.operator + " ");
        this[node.right.type](node.right, state);
    },
    AssignmentPattern: function AssignmentPattern(node, state) {
        this[node.left.type](node.left, state);
        state.write(" = ");
        this[node.right.type](node.right, state);
    },
    BinaryExpression: BinaryExpression = function BinaryExpression2(node, state) {
        var isIn = node.operator === "in";
        if (isIn) {
            state.write("(");
        }
        formatExpression(state, node.left, node, false);
        state.write(" " + node.operator + " ");
        formatExpression(state, node.right, node, true);
        if (isIn) {
            state.write(")");
        }
    },
    LogicalExpression: BinaryExpression,
    ConditionalExpression: function ConditionalExpression(node, state) {
        var test = node.test;
        var precedence = state.expressionsPrecedence[test.type];
        if (precedence === NEEDS_PARENTHESES || precedence <= state.expressionsPrecedence.ConditionalExpression) {
            state.write("(");
            this[test.type](test, state);
            state.write(")");
        } else {
            this[test.type](test, state);
        }
        state.write(" ? ");
        this[node.consequent.type](node.consequent, state);
        state.write(" : ");
        this[node.alternate.type](node.alternate, state);
    },
    NewExpression: function NewExpression(node, state) {
        state.write("new ");
        var precedence = state.expressionsPrecedence[node.callee.type];
        if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.CallExpression || hasCallExpression(node.callee)) {
            state.write("(");
            this[node.callee.type](node.callee, state);
            state.write(")");
        } else {
            this[node.callee.type](node.callee, state);
        }
        formatSequence(state, node["arguments"]);
    },
    CallExpression: function CallExpression(node, state) {
        var precedence = state.expressionsPrecedence[node.callee.type];
        if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.CallExpression) {
            state.write("(");
            this[node.callee.type](node.callee, state);
            state.write(")");
        } else {
            this[node.callee.type](node.callee, state);
        }
        if (node.optional) {
            state.write("?.");
        }
        formatSequence(state, node["arguments"]);
    },
    ChainExpression: function ChainExpression(node, state) {
        this[node.expression.type](node.expression, state);
    },
    MemberExpression: function MemberExpression(node, state) {
        var precedence = state.expressionsPrecedence[node.object.type];
        if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.MemberExpression) {
            state.write("(");
            this[node.object.type](node.object, state);
            state.write(")");
        } else {
            this[node.object.type](node.object, state);
        }
        if (node.computed) {
            if (node.optional) {
                state.write("?.");
            }
            state.write("[");
            this[node.property.type](node.property, state);
            state.write("]");
        } else {
            if (node.optional) {
                state.write("?.");
            } else {
                state.write(".");
            }
            this[node.property.type](node.property, state);
        }
    },
    MetaProperty: function MetaProperty(node, state) {
        state.write(node.meta.name + "." + node.property.name, node);
    },
    Identifier: function Identifier(node, state) {
        state.write(node.name, node);
    },
    PrivateIdentifier: function PrivateIdentifier(node, state) {
        state.write("#".concat(node.name), node);
    },
    Literal: function Literal(node, state) {
        if (node.raw != null) {
            state.write(node.raw, node);
        } else if (node.regex != null) {
            this.RegExpLiteral(node, state);
        } else if (node.bigint != null) {
            state.write(node.bigint + "n", node);
        } else {
            state.write(stringify(node.value), node);
        }
    },
    RegExpLiteral: function RegExpLiteral(node, state) {
        var regex = node.regex;
        state.write("/".concat(regex.pattern, "/").concat(regex.flags), node);
    }
};
astring.__exports.GENERATOR = GENERATOR;
var EMPTY_OBJECT = {};
var baseGenerator = GENERATOR;
astring.__exports.baseGenerator = baseGenerator;
var State = function() {
    function State2(options) {
        _classCallCheck(this, State2);
        var setup = options == null ? EMPTY_OBJECT : options;
        this.output = "";
        if (setup.output != null) {
            this.output = setup.output;
            this.write = this.writeToStream;
        } else {
            this.output = "";
        }
        this.generator = setup.generator != null ? setup.generator : GENERATOR;
        this.expressionsPrecedence = setup.expressionsPrecedence != null ? setup.expressionsPrecedence : EXPRESSIONS_PRECEDENCE;
        this.indent = setup.indent != null ? setup.indent : "  ";
        this.lineEnd = setup.lineEnd != null ? setup.lineEnd : "\n";
        this.indentLevel = setup.startingIndentLevel != null ? setup.startingIndentLevel : 0;
        this.writeComments = setup.comments ? setup.comments : false;
        if (setup.sourceMap != null) {
            this.write = setup.output == null ? this.writeAndMap : this.writeToStreamAndMap;
            this.sourceMap = setup.sourceMap;
            this.line = 1;
            this.column = 0;
            this.lineEndSize = this.lineEnd.split("\n").length - 1;
            this.mapping = {
                original: null,
                generated: this,
                name: void 0,
                source: setup.sourceMap.file || setup.sourceMap._file
            };
        }
    }
    _createClass(State2, [
        {
            key: "write",
            value: function write(code) {
                this.output += code;
            }
        },
        {
            key: "writeToStream",
            value: function writeToStream(code) {
                this.output.write(code);
            }
        },
        {
            key: "writeAndMap",
            value: function writeAndMap(code, node) {
                this.output += code;
                this.map(code, node);
            }
        },
        {
            key: "writeToStreamAndMap",
            value: function writeToStreamAndMap(code, node) {
                this.output.write(code);
                this.map(code, node);
            }
        },
        {
            key: "map",
            value: function map(code, node) {
                if (node != null) {
                    var type = node.type;
                    if (type[0] === "L" && type[2] === "n") {
                        this.column = 0;
                        this.line++;
                        return;
                    }
                    if (node.loc != null) {
                        var mapping = this.mapping;
                        mapping.original = node.loc.start;
                        mapping.name = node.name;
                        this.sourceMap.addMapping(mapping);
                    }
                    if (type[0] === "T" && type[8] === "E" || type[0] === "L" && type[1] === "i" && typeof node.value === "string") {
                        var _length = code.length;
                        var column = this.column, line = this.line;
                        for(var i = 0; i < _length; i++){
                            if (code[i] === "\n") {
                                column = 0;
                                line++;
                            } else {
                                column++;
                            }
                        }
                        this.column = column;
                        this.line = line;
                        return;
                    }
                }
                var length = code.length;
                var lineEnd = this.lineEnd;
                if (length > 0) {
                    if (this.lineEndSize > 0 && (lineEnd.length === 1 ? code[length - 1] === lineEnd : code.endsWith(lineEnd))) {
                        this.line += this.lineEndSize;
                        this.column = 0;
                    } else {
                        this.column += length;
                    }
                }
            }
        },
        {
            key: "toString",
            value: function toString() {
                return this.output;
            }
        }
    ]);
    return State2;
}();
function generate(node, options) {
    var state = new State(options);
    state.generator[node.type](node, state);
    return state.output;
}
exports.default = astring.__exports; //# sourceMappingURL=astring.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/transforms.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const transforms$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/transforms.js [instrumentation] (ecmascript)");
const esquery_esm_min = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/esquery/dist/esquery.esm.min.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/meriyah/dist/meriyah2.js [instrumentation] (ecmascript)");
const meriyah = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/meriyah.js [instrumentation] (ecmascript)");
const esquery = esquery_esm_min.default;
const { parse } = meriyah.__exports;
const tracingChannelPredicate = (node)=>node.declarations?.[0]?.id?.properties?.[0]?.value?.name === "tr_ch_apm_tracingChannel";
const CHANNEL_REGEX = /[^\w]/g;
const formatChannelVariable = (channelName)=>`tr_ch_apm$${channelName.replace(CHANNEL_REGEX, "_")}`;
const transforms = transforms$1.__module.exports = {
    /**
   * Injects a `tracingChannel` import/require into the program body if one is not
   * already present.
   *
   * @param {{ dcModule: string, sourceType: 'module'|'script' }} state
   * @param {import('estree').Program} node - The program root node.
   */ tracingChannelImport ({ dcModule, moduleType }, node) {
        if (node.body.some(tracingChannelPredicate)) return;
        const options = {
            module: moduleType === "esm"
        };
        const index = node.body.findIndex((child)=>child.directive === "use strict");
        const dc = moduleType === "esm" ? `import tr_ch_apm_dc from "${dcModule}"` : `const tr_ch_apm_dc = require("${dcModule}")`;
        const tracingChannel = "const { tracingChannel: tr_ch_apm_tracingChannel } = tr_ch_apm_dc";
        const hasSubscribers = `const tr_ch_apm_hasSubscribers = ch => ch.start.hasSubscribers
      || ch.end.hasSubscribers
      || ch.asyncStart.hasSubscribers
      || ch.asyncEnd.hasSubscribers
      || ch.error.hasSubscribers`;
        node.body.splice(index + 1, 0, parse(dc, options).body[0], parse(tracingChannel, options).body[0], parse(hasSubscribers, options).body[0]);
    },
    /**
   * Injects a `tracingChannel(...)` variable declaration for the config's channel
   * into the program body, also ensuring the import is present.
   *
   * @param {{ channelName: string, module: { name: string }, dcModule: string, sourceType: 'module'|'script' }} state
   * @param {import('estree').Program} node - The program root node.
   */ tracingChannelDeclaration (state, node) {
        const { channelName, module: { name } } = state;
        const channelVariable = formatChannelVariable(channelName);
        if (node.body.some((child)=>child.declarations?.[0]?.id?.name === channelVariable)) return;
        transforms.tracingChannelImport(state, node);
        const index = node.body.findIndex(tracingChannelPredicate);
        const code = `
      const ${channelVariable} = tr_ch_apm_tracingChannel("orchestrion:${name}:${channelName}")
    `;
        node.body.splice(index + 1, 0, parse(code).body[0]);
    },
    traceCallback: traceAny,
    tracePromise: traceAny,
    traceSync: traceAny,
    traceAuto: traceAny
};
function wrapParams(params) {
    const originalParams = params || [];
    const numberedParams = originalParams.filter((param)=>param.type !== "RestElement" && param.type !== "AssignmentPattern").map((_, i)=>({
            type: "Identifier",
            name: `__apm$arg${i}`
        }));
    return [
        ...numberedParams,
        {
            type: "RestElement",
            argument: {
                type: "Identifier",
                name: "__apm$args"
            }
        }
    ];
}
function traceAny(state, node, _parent, ancestry) {
    const program = ancestry[ancestry.length - 1];
    if (node.type === "ClassDeclaration" || node.type === "ClassExpression") {
        traceInstanceMethod(state, node, program);
    } else {
        traceFunction(state, node, program);
    }
}
function traceFunction(state, node, program) {
    transforms.tracingChannelDeclaration(state, program);
    const { functionQuery: { methodName, privateMethodName, functionName, expressionName, propertyName } } = state;
    const isConstructor = methodName === "constructor" || !methodName && !privateMethodName && !functionName && !expressionName && !propertyName;
    const type = isConstructor ? "ArrowFunctionExpression" : node.type;
    const params = node.params;
    node.body = wrap(state, {
        type,
        params,
        body: node.body,
        async: node.async,
        expression: false,
        generator: node.generator
    }, program);
    node.params = wrapParams(params);
    node.generator = false;
    node.async = false;
    wrapSuper(state, node);
}
function traceInstanceMethod(state, node, program) {
    const { functionQuery, operator } = state;
    const { methodName } = functionQuery;
    if (!methodName) return;
    const classBody = node.body;
    if (classBody.body.some(({ key })=>key.name === methodName)) return;
    let ctor = classBody.body.find(({ kind })=>kind === "constructor");
    transforms.tracingChannelDeclaration(state, program);
    if (!ctor) {
        ctor = parse(node.superClass ? "class A extends Object { constructor (...args) { super(...args) } }" : "class A { constructor () {} }").body[0].body.body[0];
        classBody.body.unshift(ctor);
    }
    const ctorBody = parse(`
    const __apm$${methodName} = this["${methodName}"]
    this["${methodName}"] = function () {}
    if (typeof __apm$${methodName} === 'function') {
      Object.defineProperty(this["${methodName}"], 'length', {
        value: __apm$${methodName}.length,
        configurable: true
      })
    }
  `).body;
    const fn = ctorBody[1].expression.right;
    fn.params = [
        {
            type: "RestElement",
            argument: {
                type: "Identifier",
                name: "__apm$args"
            }
        }
    ];
    fn.async = operator === "tracePromise";
    fn.body = wrap(state, {
        type: "Identifier",
        name: `__apm$${methodName}`
    }, program);
    wrapSuper(state, fn);
    ctor.value.body.body.push(...ctorBody);
}
function wrap(state, node, program) {
    const { operator, moduleVersion } = state;
    const { returnKind } = state.functionQuery;
    const iterPatch = returnKind ? generateIterPatch(state, returnKind, program) : "";
    let wrapper;
    if (operator === "traceCallback") wrapper = wrapCallback(state, node, iterPatch);
    if (operator === "tracePromise") wrapper = wrapPromise(state, node, iterPatch);
    if (operator === "traceSync") wrapper = wrapSync(state, node, iterPatch);
    if (operator === "traceAuto") wrapper = wrapAuto(state, node, iterPatch);
    const args = (node.params || []).filter((param)=>param.type !== "RestElement" && param.type !== "AssignmentPattern").map((_, i)=>`__apm$arg${i}`).concat("...__apm$args").join(", ");
    const block = wrapper.body[0].body;
    const common = parse(node.type === "ArrowFunctionExpression" ? `
    const __apm$arguments = [${args}];
    const __apm$ctx = {
      arguments: __apm$arguments,
      moduleVersion: ${JSON.stringify(moduleVersion)}
    };
    const __apm$traced = () => {
      const __apm$wrapped = () => {};
      return __apm$wrapped(...__apm$arguments);
    };
  ` : `
    const __apm$arguments = [${args}].slice(0, arguments.length);
    const __apm$ctx = {
      arguments: __apm$arguments,
      self: this,
      moduleVersion: ${JSON.stringify(moduleVersion)}
    };
    const __apm$traced = () => {
      const __apm$wrapped = () => {};
      return __apm$wrapped.apply(this, __apm$arguments);
    };
  `).body;
    block.body.unshift(...common);
    esquery.query(block, "[id.name=__apm$wrapped]")[0].init = node;
    return block;
}
function wrapSuper(_state, node) {
    const members = /* @__PURE__ */ new Set();
    esquery.traverse(node.body, esquery.parse("[object.type=Super]"), (node2, parent)=>{
        const { name } = node2.property;
        let child;
        if (parent.callee) {
            const { expression } = parse(`__apm$super['${name}'].call(this)`).body[0];
            parent.callee = child = expression.callee;
            parent.arguments.unshift(...expression.arguments);
        } else {
            parent.expression = child = parse(`__apm$super['${name}']`).body[0];
        }
        child.computed = parent.callee.computed;
        child.optional = parent.callee.optional;
        members.add(name);
    });
    for (const name of members){
        const member = parse(`
      class Wrapper {
        wrapper () {
          __apm$super['${name}'] = super['${name}']
        }
      }
    `).body[0].body.body[0].value.body.body[0];
        node.body.body.unshift(member);
    }
    if (members.size > 0) {
        node.body.body.unshift(parse("const __apm$super = {}").body[0]);
    }
}
function wrapAuto(state, node, iterPatch = "") {
    const cbWrapperAST = wrapCallback(state, node, iterPatch);
    const promiseWrapperAST = wrapPromise(state, node, iterPatch);
    const [getCbArg, checkHasSubscribers, defineWrappedCb, checkCbIsFunction, spliceCbArg, runStores] = cbWrapperAST.body[0].body.body;
    const fallbackToPromise = {
        type: "IfStatement",
        test: checkCbIsFunction.test,
        consequent: {
            type: "BlockStatement",
            body: promiseWrapperAST.body[0].body.body
        },
        alternate: null
    };
    cbWrapperAST.body[0].body.body = [
        getCbArg,
        fallbackToPromise,
        checkHasSubscribers,
        defineWrappedCb,
        spliceCbArg,
        runStores
    ];
    return cbWrapperAST;
}
function wrapCallback(state, node, iterPatch = "") {
    const { channelName, functionQuery: { callbackIndex = -1 } } = state;
    const channelVariable = formatChannelVariable(channelName);
    return parse(`
    function wrapper () {
      const __apm$cb = Array.prototype.at.call(__apm$arguments, ${callbackIndex});

      if (!${channelVariable}.start.hasSubscribers) return __apm$traced();

      function __apm$wrappedCb(err, res) {
        if (err) {
          __apm$ctx.error = err;
          ${channelVariable}.error.publish(__apm$ctx);
        } else {
          __apm$ctx.result = res;
          ${iterPatch}
        }

        ${channelVariable}.asyncStart.runStores(__apm$ctx, () => {
          try {
            if (__apm$cb) {
              return __apm$cb.apply(this, arguments);
            }
          } finally {
            ${channelVariable}.asyncEnd.publish(__apm$ctx);
          }
        });
      }

      if (typeof __apm$cb !== 'function') {
        return __apm$traced();
      }
      Array.prototype.splice.call(__apm$arguments, ${callbackIndex}, 1, __apm$wrappedCb);

      return ${channelVariable}.start.runStores(__apm$ctx, () => {
        try {
          return __apm$traced();
        } catch (err) {
          __apm$ctx.error = err;
          ${channelVariable}.error.publish(__apm$ctx);
          throw err;
        } finally {
         __apm$ctx.self ??= this;
          ${channelVariable}.end.publish(__apm$ctx);
        }
      });
    }
  `);
}
function wrapPromise(state, node, iterPatch = "") {
    const { channelName } = state;
    const channelVariable = formatChannelVariable(channelName);
    return parse(`
    function wrapper () {
      if (!tr_ch_apm_hasSubscribers(${channelVariable})) return __apm$traced();

      return ${channelVariable}.start.runStores(__apm$ctx, () => {
        try {
          let promise = __apm$traced();
          if (typeof promise?.then !== 'function') {
            __apm$ctx.result = promise;
            ${iterPatch}
            return __apm$ctx.result;
          }
          // Mirror Node.js core diagnostics_channel behaviour: for native Promise
          // instances, chain normally (safe since there is no subclass API to
          // preserve). For Promise subclasses and other thenables, side-chain the
          // callbacks for event publishing and return the original so that any
          // subclass-specific methods (e.g. APIPromise.withResponse()) remain
          // accessible to the caller.
          if (promise instanceof Promise && promise.constructor === Promise) {
            return promise.then(
              result => {
                __apm$ctx.result = result;
                ${iterPatch}
                ${channelVariable}.asyncStart.publish(__apm$ctx);
                ${channelVariable}.asyncEnd.publish(__apm$ctx);
                return __apm$ctx.result;
              },
              err => {
                __apm$ctx.error = err;
                ${channelVariable}.error.publish(__apm$ctx);
                ${channelVariable}.asyncStart.publish(__apm$ctx);
                ${channelVariable}.asyncEnd.publish(__apm$ctx);
                throw err;
              }
            );
          }
          promise.then(
            result => {
              __apm$ctx.result = result;
              ${iterPatch}
              ${channelVariable}.asyncStart.publish(__apm$ctx);
              ${channelVariable}.asyncEnd.publish(__apm$ctx);
            },
            err => {
              __apm$ctx.error = err;
              ${channelVariable}.error.publish(__apm$ctx);
              ${channelVariable}.asyncStart.publish(__apm$ctx);
              ${channelVariable}.asyncEnd.publish(__apm$ctx);
            }
          );
          return promise;
        } catch (err) {
          __apm$ctx.error = err;
          ${channelVariable}.error.publish(__apm$ctx);
          throw err;
        } finally {
          __apm$ctx.self ??= this;
          ${channelVariable}.end.publish(__apm$ctx);
        }
      });
    }
  `);
}
function wrapSync(state, node, iterPatch = "") {
    const { channelName } = state;
    const channelVariable = formatChannelVariable(channelName);
    return parse(`
    function wrapper () {
      if (!tr_ch_apm_hasSubscribers(${channelVariable})) return __apm$traced();

      return ${channelVariable}.start.runStores(__apm$ctx, () => {
        try {
          __apm$ctx.result = __apm$traced();
          ${iterPatch}
        } catch (err) {
          __apm$ctx.error = err;
          ${channelVariable}.error.publish(__apm$ctx);
          throw err;
        } finally {
         __apm$ctx.self ??= this;
          ${channelVariable}.end.publish(__apm$ctx);
        }
        return __apm$ctx.result;
      });
    }
  `);
}
function declareIteratorChannel(state, program) {
    const { channelName, module: { name } } = state;
    const iterChannelVariable = formatChannelVariable(channelName + ":next");
    if (program.body.some((child)=>child.declarations?.[0]?.id?.name === iterChannelVariable)) return;
    const channelVariable = formatChannelVariable(channelName);
    const index = program.body.findIndex((child)=>child.declarations?.[0]?.id?.name === channelVariable);
    const code = `const ${iterChannelVariable} = tr_ch_apm_tracingChannel("orchestrion:${name}:${channelName}:next")`;
    program.body.splice(index + 1, 0, parse(code).body[0]);
}
function generateIterPatch(state, returnKind, program) {
    const { channelName } = state;
    const traceMethod = returnKind === "Iterator" ? "traceSync" : "tracePromise";
    const iterChannelVariable = formatChannelVariable(channelName + ":next");
    declareIteratorChannel(state, program);
    return `
    const __apm$iter = __apm$ctx.result;
    if (__apm$iter != null && typeof __apm$iter.next === 'function') {
      const __apm$patchIter = function (method) {
        const __apm$orig = __apm$iter[method];
        if (typeof __apm$orig !== 'function') return;
        __apm$iter[method] = function () {
          const __apm$iterArgs = Array.prototype.slice.call(arguments);
          if (!tr_ch_apm_hasSubscribers(${iterChannelVariable})) return __apm$orig.apply(this, __apm$iterArgs);
          __apm$ctx.method = method;
          __apm$ctx.arguments = __apm$iterArgs;
          return ${iterChannelVariable}.${traceMethod}(__apm$orig, __apm$ctx, this, ...__apm$iterArgs);
        };
      };
      __apm$patchIter('next');
      __apm$patchIter('throw');
      __apm$patchIter('return');
    }
  `;
}
var transformsExports = transforms$1.__module.exports;
exports.transformsExports = transformsExports; //# sourceMappingURL=transforms.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/base64.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const base64 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/base64.js [instrumentation] (ecmascript)");
var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
base64.__exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + number);
};
base64.__exports.decode = function(charCode) {
    var bigA = 65;
    var bigZ = 90;
    var littleA = 97;
    var littleZ = 122;
    var zero = 48;
    var nine = 57;
    var plus = 43;
    var slash = 47;
    var littleOffset = 26;
    var numberOffset = 52;
    if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
    }
    if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
    }
    if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
    }
    if (charCode == plus) {
        return 62;
    }
    if (charCode == slash) {
        return 63;
    }
    return -1;
};
exports.default = base64.__exports; //# sourceMappingURL=base64.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/base64-vlq.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const base64Vlq = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/base64-vlq.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/base64.js [instrumentation] (ecmascript)");
const base64$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/base64.js [instrumentation] (ecmascript)");
var base64 = base64$1.__exports;
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
base64Vlq.__exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
            digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
    }while (vlq > 0)
    return encoded;
};
base64Vlq.__exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation)
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};
exports.default = base64Vlq.__exports; //# sourceMappingURL=base64-vlq.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/util.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

const util = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/util.js [instrumentation] (ecmascript)");
(function(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
            return aArgs[aName];
        } else if (arguments.length === 3) {
            return aDefaultValue;
        } else {
            throw new Error('"' + aName + '" is a required argument.');
        }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
        var match = aUrl.match(urlRegexp);
        if (!match) {
            return null;
        }
        return {
            scheme: match[1],
            auth: match[2],
            host: match[3],
            port: match[4],
            path: match[5]
        };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
        var url = "";
        if (aParsedUrl.scheme) {
            url += aParsedUrl.scheme + ":";
        }
        url += "//";
        if (aParsedUrl.auth) {
            url += aParsedUrl.auth + "@";
        }
        if (aParsedUrl.host) {
            url += aParsedUrl.host;
        }
        if (aParsedUrl.port) {
            url += ":" + aParsedUrl.port;
        }
        if (aParsedUrl.path) {
            url += aParsedUrl.path;
        }
        return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
        var path = aPath;
        var url = urlParse(aPath);
        if (url) {
            if (!url.path) {
                return aPath;
            }
            path = url.path;
        }
        var isAbsolute = exports.isAbsolute(path);
        var parts = path.split(/\/+/);
        for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
            part = parts[i];
            if (part === ".") {
                parts.splice(i, 1);
            } else if (part === "..") {
                up++;
            } else if (up > 0) {
                if (part === "") {
                    parts.splice(i + 1, up);
                    up = 0;
                } else {
                    parts.splice(i, 2);
                    up--;
                }
            }
        }
        path = parts.join("/");
        if (path === "") {
            path = isAbsolute ? "/" : ".";
        }
        if (url) {
            url.path = path;
            return urlGenerate(url);
        }
        return path;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
        if (aRoot === "") {
            aRoot = ".";
        }
        if (aPath === "") {
            aPath = ".";
        }
        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);
        if (aRootUrl) {
            aRoot = aRootUrl.path || "/";
        }
        if (aPathUrl && !aPathUrl.scheme) {
            if (aRootUrl) {
                aPathUrl.scheme = aRootUrl.scheme;
            }
            return urlGenerate(aPathUrl);
        }
        if (aPathUrl || aPath.match(dataUrlRegexp)) {
            return aPath;
        }
        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
            aRootUrl.host = aPath;
            return urlGenerate(aRootUrl);
        }
        var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
        if (aRootUrl) {
            aRootUrl.path = joined;
            return urlGenerate(aRootUrl);
        }
        return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
        return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
        if (aRoot === "") {
            aRoot = ".";
        }
        aRoot = aRoot.replace(/\/$/, "");
        var level = 0;
        while(aPath.indexOf(aRoot + "/") !== 0){
            var index = aRoot.lastIndexOf("/");
            if (index < 0) {
                return aPath;
            }
            aRoot = aRoot.slice(0, index);
            if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
                return aPath;
            }
            ++level;
        }
        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
        var obj = /* @__PURE__ */ Object.create(null);
        return !("__proto__" in obj);
    }();
    function identity(s) {
        return s;
    }
    function toSetString(aStr) {
        if (isProtoString(aStr)) {
            return "$" + aStr;
        }
        return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
        if (isProtoString(aStr)) {
            return aStr.slice(1);
        }
        return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
        if (!s) {
            return false;
        }
        var length = s.length;
        if (length < 9) {
            return false;
        }
        if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
            return false;
        }
        for(var i = length - 10; i >= 0; i--){
            if (s.charCodeAt(i) !== 36) {
                return false;
            }
        }
        return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
            return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
            return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
            return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
            return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
            return 0;
        }
        if (aStr1 === null) {
            return 1;
        }
        if (aStr2 === null) {
            return -1;
        }
        if (aStr1 > aStr2) {
            return 1;
        }
        return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
            return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
            return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
        return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
        sourceURL = sourceURL || "";
        if (sourceRoot) {
            if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
                sourceRoot += "/";
            }
            sourceURL = sourceRoot + sourceURL;
        }
        if (sourceMapURL) {
            var parsed = urlParse(sourceMapURL);
            if (!parsed) {
                throw new Error("sourceMapURL could not be parsed");
            }
            if (parsed.path) {
                var index = parsed.path.lastIndexOf("/");
                if (index >= 0) {
                    parsed.path = parsed.path.substring(0, index + 1);
                }
            }
            sourceURL = join(urlGenerate(parsed), sourceURL);
        }
        return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
})(util.__exports); //# sourceMappingURL=util.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/array-set.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const arraySet = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/array-set.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/util.js [instrumentation] (ecmascript)");
const util$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/util.js [instrumentation] (ecmascript)");
var util = util$1.__exports;
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++){
        set.add(aArray[i], aAllowDuplicates);
    }
    return set;
};
ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
    }
    if (!isDuplicate) {
        if (hasNativeMap) {
            this._set.set(aStr, idx);
        } else {
            this._set[sStr] = idx;
        }
    }
};
ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) {
        return this._set.has(aStr);
    } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
            return idx;
        }
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
            return this._set[sStr];
        }
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
    }
    throw new Error("No element indexed by " + aIdx);
};
ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
arraySet.__exports.ArraySet = ArraySet;
exports.default = arraySet.__exports; //# sourceMappingURL=array-set.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/mapping-list.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const mappingList = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/mapping-list.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/util.js [instrumentation] (ecmascript)");
const util$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/util.js [instrumentation] (ecmascript)");
var util = util$1.__exports;
function generatedPositionAfter(mappingA, mappingB) {
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
function MappingList() {
    this._array = [];
    this._sorted = true;
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
mappingList.__exports.MappingList = MappingList;
exports.default = mappingList.__exports; //# sourceMappingURL=mapping-list.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-map-generator.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const sourceMapGenerator = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map-generator.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/base64-vlq.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/util.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/array-set.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/mapping-list.js [instrumentation] (ecmascript)");
const util$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/util.js [instrumentation] (ecmascript)");
const arraySet = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/array-set.js [instrumentation] (ecmascript)");
const base64Vlq = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/base64-vlq.js [instrumentation] (ecmascript)");
const mappingList = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/mapping-list.js [instrumentation] (ecmascript)");
var base64VLQ = base64Vlq.__exports;
var util = util$1.__exports;
var ArraySet = arraySet.__exports.ArraySet;
var MappingList = mappingList.__exports.MappingList;
function SourceMapGenerator(aArgs) {
    if (!aArgs) {
        aArgs = {};
    }
    this._file = util.getArg(aArgs, "file", null);
    this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) {
                newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) {
                newMapping.name = mapping.name;
            }
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
            sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
            generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            generator.setSourceContent(sourceFile, content);
        }
    });
    return generator;
};
SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, "generated");
    var original = util.getArg(aArgs, "original", null);
    var source = util.getArg(aArgs, "source", null);
    var name = util.getArg(aArgs, "name", null);
    if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
    }
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
            this._sources.add(source);
        }
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
            this._names.add(name);
        }
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
    });
};
SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
    }
    if (aSourceContent != null) {
        if (!this._sourcesContents) {
            this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
            this._sourcesContents = null;
        }
    }
};
SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
            throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        }
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
    }
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                mapping.source = original.source;
                if (aSourceMapPath != null) {
                    mapping.source = util.join(aSourceMapPath, mapping.source);
                }
                if (sourceRoot != null) {
                    mapping.source = util.relative(sourceRoot, mapping.source);
                }
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) {
                    mapping.name = original.name;
                }
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
            newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
            newNames.add(name);
        }
    }, this);
    this._sources = newSources;
    this._names = newNames;
    aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
            if (aSourceMapPath != null) {
                sourceFile2 = util.join(aSourceMapPath, sourceFile2);
            }
            if (sourceRoot != null) {
                sourceFile2 = util.relative(sourceRoot, sourceFile2);
            }
            this.setSourceContent(sourceFile2, content);
        }
    }, this);
};
SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    }
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
    } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
    } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
            generated: aGenerated,
            source: aSource,
            original: aOriginal,
            name: aName
        }));
    }
};
SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ";";
                previousGeneratedLine++;
            }
        } else {
            if (i > 0) {
                if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                    continue;
                }
                next += ",";
            }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) {
            return null;
        }
        if (aSourceRoot != null) {
            source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) {
        map.file = this._file;
    }
    if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }
    return map;
};
SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
sourceMapGenerator.__exports.SourceMapGenerator = SourceMapGenerator;
exports.default = sourceMapGenerator.__exports; //# sourceMappingURL=source-map-generator.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/binary-search.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

const binarySearch = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/binary-search.js [instrumentation] (ecmascript)");
(function(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
        var mid = Math.floor((aHigh - aLow) / 2) + aLow;
        var cmp = aCompare(aNeedle, aHaystack[mid], true);
        if (cmp === 0) {
            return mid;
        } else if (cmp > 0) {
            if (aHigh - mid > 1) {
                return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
            }
            if (aBias == exports.LEAST_UPPER_BOUND) {
                return aHigh < aHaystack.length ? aHigh : -1;
            } else {
                return mid;
            }
        } else {
            if (mid - aLow > 1) {
                return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
            }
            if (aBias == exports.LEAST_UPPER_BOUND) {
                return mid;
            } else {
                return aLow < 0 ? -1 : aLow;
            }
        }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
        if (aHaystack.length === 0) {
            return -1;
        }
        var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
        if (index < 0) {
            return -1;
        }
        while(index - 1 >= 0){
            if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
                break;
            }
            --index;
        }
        return index;
    };
})(binarySearch.__exports); //# sourceMappingURL=binary-search.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/quick-sort.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const quickSort = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/quick-sort.js [instrumentation] (ecmascript)");
function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
function doQuickSort(ary, comparator, p, r) {
    if (p < r) {
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        for(var j = p; j < r; j++){
            if (comparator(ary[j], pivot) <= 0) {
                i += 1;
                swap(ary, i, j);
            }
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
quickSort.__exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};
exports.default = quickSort.__exports; //# sourceMappingURL=quick-sort.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-map-consumer.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const sourceMapConsumer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map-consumer.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/util.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/binary-search.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/array-set.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/base64-vlq.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/quick-sort.js [instrumentation] (ecmascript)");
const util$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/util.js [instrumentation] (ecmascript)");
const binarySearch$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/binary-search.js [instrumentation] (ecmascript)");
const arraySet = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/array-set.js [instrumentation] (ecmascript)");
const base64Vlq = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/base64-vlq.js [instrumentation] (ecmascript)");
const quickSort$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/quick-sort.js [instrumentation] (ecmascript)");
var util = util$1.__exports;
var binarySearch = binarySearch$1.__exports;
var ArraySet = arraySet.__exports.ArraySet;
var base64VLQ = base64Vlq.__exports;
var quickSort = quickSort$1.__exports.quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
SourceMapConsumer.prototype._version = 3;
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, "line");
    var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
        return [];
    }
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
            var originalLine = mapping.originalLine;
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
sourceMapConsumer.__exports.SourceMapConsumer = SourceMapConsumer;
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    var version = util.getArg(sourceMap, "version");
    var sources = util.getArg(sourceMap, "sources");
    var names = util.getArg(sourceMap, "names", []);
    var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
    var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
    var mappings = util.getArg(sourceMap, "mappings");
    var file = util.getArg(sourceMap, "file", null);
    if (version != this._version) {
        throw new Error("Unsupported version: " + version);
    }
    if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
    }
    sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
    }
    if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
    }
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) {
            return i;
        }
    }
    return -1;
};
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) {
                destMapping.name = names.indexOf(srcMapping.name);
            }
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
        return this._absoluteSources.slice();
    }
});
function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings2(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") {
            index++;
        } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) {
                    break;
                }
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) {
                index += str.length;
            } else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) {
                    throw new Error("Found a source, but no line and column");
                }
                if (segment.length === 3) {
                    throw new Error("Found a source and line, but no column");
                }
                cachedSegments[str] = segment;
            }
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                mapping.originalLine += 1;
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") {
                originalMappings.push(mapping);
            }
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    }
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        mapping.lastGeneratedColumn = Infinity;
    }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, "source", null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) {
                name = this._names.at(name);
            }
            return {
                source,
                line: util.getArg(mapping, "originalLine", null),
                column: util.getArg(mapping, "originalColumn", null),
                name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
        return false;
    }
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
        return null;
    }
    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
        return this.sourcesContent[index];
    }
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
    }
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
    }
    if (nullOnMissing) {
        return null;
    } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) {
        return {
            line: null,
            column: null,
            lastColumn: null
        };
    }
    var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
            return {
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            };
        }
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
sourceMapConsumer.__exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    var version = util.getArg(sourceMap, "version");
    var sections = util.getArg(sourceMap, "sections");
    if (version != this._version) {
        throw new Error("Unsupported version: " + version);
    }
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) {
            throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
            throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++){
            for(var j = 0; j < this._sections[i].consumer.sources.length; j++){
                sources.push(this._sections[i].consumer.sources[j]);
            }
        }
        return sources;
    }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
            return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) {
        return {
            source: null,
            line: null,
            column: null,
            name: null
        };
    }
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
            return content;
        }
    }
    if (nullOnMissing) {
        return null;
    } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
            continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            var adjustedMapping = {
                source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") {
                this.__originalMappings.push(adjustedMapping);
            }
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
sourceMapConsumer.__exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
exports.default = sourceMapConsumer.__exports; //# sourceMappingURL=source-map-consumer.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-node.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const sourceNode = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-node.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-map-generator.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/util.js [instrumentation] (ecmascript)");
const util$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/util.js [instrumentation] (ecmascript)");
const sourceMapGenerator = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map-generator.js [instrumentation] (ecmascript)");
var SourceMapGenerator = sourceMapGenerator.__exports.SourceMapGenerator;
var util = util$1.__exports;
var REGEX_NEWLINE = /(\r?\n)/;
var NEWLINE_CODE = 10;
var isSourceNode = "$$$isSourceNode$$$";
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    var node = new SourceNode();
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        //TURBOPACK unreachable
        ;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
    };
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            if (lastGeneratedLine < mapping.generatedLine) {
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            } else {
                var nextLine = remainingLines[remainingLinesIndex] || "";
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                lastMapping = mapping;
                return;
            }
        }
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
            addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) {
                sourceFile = util.join(aRelativePath, sourceFile);
            }
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    //TURBOPACK unreachable
    ;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
            node.add(code);
        } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
            this.add(chunk);
        }, this);
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
            this.children.push(aChunk);
        }
    } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    }
    return this;
};
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
        for(var i = aChunk.length - 1; i >= 0; i--){
            this.prepend(aChunk[i]);
        }
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
    } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    }
    return this;
};
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
            chunk.walk(aFn);
        } else {
            if (chunk !== "") {
                aFn(chunk, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                });
            }
        }
    }
};
SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
        this.children.push("".replace(aPattern, aReplacement));
    }
    return this;
};
SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++){
        if (this.children[i][isSourceNode]) {
            this.children[i].walkSourceContents(aFn);
        }
    }
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++){
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
};
SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
                map.addMapping({
                    source: original.source,
                    original: {
                        line: original.line,
                        column: original.column
                    },
                    generated: {
                        line: generated.line,
                        column: generated.column
                    },
                    name: original.name
                });
            }
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++){
            if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
                generated.line++;
                generated.column = 0;
                if (idx + 1 === length) {
                    lastOriginalSource = null;
                    sourceMappingActive = false;
                } else if (sourceMappingActive) {
                    map.addMapping({
                        source: original.source,
                        original: {
                            line: original.line,
                            column: original.column
                        },
                        generated: {
                            line: generated.line,
                            column: generated.column
                        },
                        name: original.name
                    });
                }
            } else {
                generated.column++;
            }
        }
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map
    };
};
sourceNode.__exports.SourceNode = SourceNode;
exports.default = sourceNode.__exports; //# sourceMappingURL=source-node.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/source-map.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const sourceMap = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-map-generator.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-map-consumer.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/lib/source-node.js [instrumentation] (ecmascript)");
const sourceMapGenerator = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map-generator.js [instrumentation] (ecmascript)");
const sourceMapConsumer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map-consumer.js [instrumentation] (ecmascript)");
const sourceNode = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-node.js [instrumentation] (ecmascript)");
sourceMap.__exports.SourceMapGenerator = sourceMapGenerator.__exports.SourceMapGenerator;
sourceMap.__exports.SourceMapConsumer = sourceMapConsumer.__exports.SourceMapConsumer;
sourceMap.__exports.SourceNode = sourceNode.__exports.SourceNode;
exports.default = sourceMap.__exports; //# sourceMappingURL=source-map.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/transformer.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const esquery_esm_min = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/esquery/dist/esquery.esm.min.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/meriyah/dist/meriyah2.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/astring/dist/astring.js [instrumentation] (ecmascript)");
const transforms$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/transforms.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/source-map/source-map.js [instrumentation] (ecmascript)");
const astring = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/astring.js [instrumentation] (ecmascript)");
const meriyah = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/meriyah.js [instrumentation] (ecmascript)");
const sourceMap = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/source-map.js [instrumentation] (ecmascript)");
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
var _moduleName, _version, _filePath, _configs, _dcModule, _customTransforms, _Transformer_instances, visit_fn, getOperator_fn, collectExportAliases_fn, resolveExportAlias_fn, fromFunctionQuery_fn;
const esquery = esquery_esm_min.default;
const { parse } = meriyah.__exports;
const { generate } = astring.__exports;
const transforms = transforms$1.transformsExports;
let SourceMapConsumer;
let SourceMapGenerator;
class Transformer {
    /**
   * @param {string} moduleName - The npm package name being instrumented.
   * @param {string} version - The installed semver version string.
   * @param {string} filePath - The relative file path within the package.
   * @param {object[]} configs - Instrumentation configuration objects for this file.
   * @param {string} dcModule - The diagnostics_channel module specifier to inject.
   * @param {Record<string, Function>} [customTransforms] - Optional custom operator overrides.
   */ constructor(moduleName, version, filePath, configs, dcModule, customTransforms = {}){
        __privateAdd(this, _Transformer_instances);
        __privateAdd(this, _moduleName, null);
        __privateAdd(this, _version, null);
        __privateAdd(this, _filePath, null);
        __privateAdd(this, _configs, []);
        __privateAdd(this, _dcModule, null);
        __privateAdd(this, _customTransforms, {});
        __privateSet(this, _moduleName, moduleName);
        __privateSet(this, _version, version);
        __privateSet(this, _filePath, filePath);
        __privateSet(this, _configs, configs);
        __privateSet(this, _dcModule, dcModule);
        __privateSet(this, _customTransforms, customTransforms);
    }
    /** No-op — freeing resources is not needed for the JavaScript implementation. */ free() {}
    /**
   * The npm package name being instrumented.
   *
   * @returns {string}
   */ get moduleName() {
        return __privateGet(this, _moduleName);
    }
    /**
   * The relative file path within the npm package being instrumented.
   *
   * @returns {string}
   */ get filePath() {
        return __privateGet(this, _filePath);
    }
    /**
   * Instruments `code` by injecting diagnostics_channel tracing around the
   * target functions defined by this transformer's configs.
   *
   * @param {string|Buffer} code - Original JavaScript source, or a Buffer containing UTF-8 source.
   * @param {'esm'|'cjs'|'unknown'} moduleType - Whether the source is an ES module or CommonJS.
   * @param {string|object|null} [sourcemap] - Existing source map (raw string or object) to chain from.
   * @returns {{ code: string, map?: string }}
   *   The transformed source and an optional updated source map.
   * @throws {Error} If no injection points are found for any config.
   */ transform(code, moduleType, sourcemap) {
        if (Buffer.isBuffer(code)) code = code.toString();
        if (!code) return {
            code
        };
        let ast;
        let aliases = {};
        let injectionCount = 0;
        for (const config of __privateGet(this, _configs)){
            const { astQuery, functionQuery = {} } = config;
            if (!ast) {
                const options = {
                    loc: true,
                    ranges: true,
                    raw: true,
                    module: moduleType === "esm"
                };
                try {
                    ast = parse(code, options);
                } catch  {
                    ast = parse(code, {
                        ...options,
                        module: !options.module
                    });
                }
                if (moduleType === "esm") {
                    aliases = __privateMethod(this, _Transformer_instances, collectExportAliases_fn).call(this, ast);
                }
            }
            const resolvedFunctionQuery = __privateMethod(this, _Transformer_instances, resolveExportAlias_fn).call(this, functionQuery, aliases);
            const query = astQuery || __privateMethod(this, _Transformer_instances, fromFunctionQuery_fn).call(this, resolvedFunctionQuery);
            const state = {
                ...config,
                dcModule: __privateGet(this, _dcModule),
                moduleType,
                moduleVersion: __privateGet(this, _version),
                functionQuery: resolvedFunctionQuery
            };
            state.operator = __privateMethod(this, _Transformer_instances, getOperator_fn).call(this, state);
            esquery.traverse(ast, esquery.parse(query), (...args)=>{
                injectionCount++;
                __privateMethod(this, _Transformer_instances, visit_fn).call(this, state, ...args);
            });
        }
        if (injectionCount === 0 && __privateGet(this, _configs).length > 0) {
            const names = __privateGet(this, _configs).map(({ astQuery, functionQuery = {} })=>{
                if (astQuery) return astQuery;
                const resolvedQuery = __privateMethod(this, _Transformer_instances, resolveExportAlias_fn).call(this, functionQuery, aliases);
                const queryName = (q)=>q.methodName || q.privateMethodName || q.functionName || q.expressionName || "constructor";
                const originalName = queryName(functionQuery);
                const originalAlias = functionQuery.className || functionQuery.functionName || functionQuery.expressionName;
                const resolvedAlias = resolvedQuery.className || resolvedQuery.functionName || resolvedQuery.expressionName;
                if (originalAlias && originalAlias !== resolvedAlias) {
                    return `${originalAlias} (local name: ${resolvedAlias})`;
                }
                return originalName;
            });
            throw new Error(`Failed to find injection points for: ${JSON.stringify(names)}`);
        }
        if (ast) {
            SourceMapConsumer ?? (SourceMapConsumer = sourceMap.__exports.SourceMapConsumer);
            SourceMapGenerator ?? (SourceMapGenerator = sourceMap.__exports.SourceMapGenerator);
            const file = `${__privateGet(this, _moduleName)}/${__privateGet(this, _filePath)}`;
            let generator;
            if (sourcemap) {
                const consumer = new SourceMapConsumer(sourcemap);
                consumer.file = file;
                generator = SourceMapGenerator.fromSourceMap(consumer);
            } else {
                generator = new SourceMapGenerator({
                    file
                });
            }
            const code2 = generate(ast, {
                sourceMap: generator
            });
            const map = generator.toString();
            return {
                code: code2,
                map
            };
        }
        return {
            code
        };
    }
}
_moduleName = new WeakMap();
_version = new WeakMap();
_filePath = new WeakMap();
_configs = new WeakMap();
_dcModule = new WeakMap();
_customTransforms = new WeakMap();
_Transformer_instances = new WeakSet();
/**
 * Visitor called for each AST node that matches a config's query.
 * Handles index-based filtering and delegates to the appropriate transform.
 *
 * @param {object} state - Merged config + runtime state for this traversal.
 * @param {...unknown} args - `(node, parent, ancestry)` from esquery traverse.
 */ visit_fn = function(state, ...args) {
    const transform = __privateGet(this, _customTransforms)[state.operator] ?? transforms[state.operator];
    const { index = 0 } = state.functionQuery;
    const [node] = args;
    const type = node.init?.type || node.type;
    if (type !== "ClassDeclaration" && type !== "ClassExpression") {
        if (node.type === "VariableDeclarator") return;
        state.functionIndex = ++state.functionIndex || 0;
        if (index !== null && index !== state.functionIndex) return;
    }
    transform(state, ...args);
};
/**
 * Resolves the operator name (transform function key) for a config.
 *
 * If the config has an explicit `transform` name it is used directly;
 * otherwise the operator is derived from the `kind` field of `functionQuery`.
 *
 * @param {{ transform?: string, functionQuery: { kind?: string } }} state
 * @returns {string} Operator name, e.g. `'tracePromise'`.
 */ getOperator_fn = function({ transform, functionQuery: { kind } }) {
    if (transform) return transform;
    switch(kind){
        case "Async":
            return "tracePromise";
        case "Auto":
            return "traceAuto";
        case "Callback":
            return "traceCallback";
        case "Sync":
            return "traceSync";
        default:
            return "traceSync";
    }
};
/**
 * Collects a map of exported name → local name from `export { local as exported }`
 * declarations so that instrumentation configs that reference export names can be
 * resolved to local identifiers.
 *
 * @param {import('estree').Program} ast
 * @returns {Record<string, string>} Map of exported name to local name.
 */ collectExportAliases_fn = function(ast) {
    const aliases = {};
    for (const node of ast.body){
        if (node.type === "ExportNamedDeclaration" && !node.source) {
            for (const spec of node.specifiers){
                if (spec.exported && spec.local) {
                    const exportedName = spec.exported.name ?? spec.exported.value;
                    const localName = spec.local.name ?? spec.local.value;
                    if (exportedName && localName) {
                        aliases[exportedName] = localName;
                    }
                }
            }
        }
    }
    return aliases;
};
/**
 * If `functionQuery.isExportAlias` is set, replaces the exported identifier in
 * `functionQuery` with the corresponding local name from `aliases`.
 *
 * @param {object} functionQuery
 * @param {Record<string, string>} aliases - Map produced by {@link #collectExportAliases}.
 * @returns {object} Resolved function query (may be the original object if unchanged).
 */ resolveExportAlias_fn = function(functionQuery, aliases) {
    if (!functionQuery.isExportAlias) return functionQuery;
    const { functionName, expressionName, className } = functionQuery;
    if (functionName && aliases[functionName]) {
        return {
            ...functionQuery,
            functionName: aliases[functionName]
        };
    }
    if (expressionName && aliases[expressionName]) {
        return {
            ...functionQuery,
            expressionName: aliases[expressionName]
        };
    }
    if (className && aliases[className]) {
        return {
            ...functionQuery,
            className: aliases[className]
        };
    }
    return functionQuery;
};
/**
 * Builds a comma-separated esquery selector string from a `functionQuery` descriptor.
 *
 * Handles class methods, standalone functions, and expression assignments, producing
 * multiple selector alternatives joined with `, `.
 *
 * @param {object} functionQuery
 * @param {string} [functionQuery.className]
 * @param {string} [functionQuery.methodName]
 * @param {string} [functionQuery.privateMethodName]
 * @param {string} [functionQuery.functionName]
 * @param {string} [functionQuery.expressionName]
 * @returns {string} esquery selector.
 */ fromFunctionQuery_fn = function(functionQuery) {
    const { functionName, expressionName, className, objectName, propertyName } = functionQuery;
    const type = functionQuery.privateMethodName ? "PrivateIdentifier" : "Identifier";
    const queries = [];
    let method = functionQuery.methodName || functionQuery.privateMethodName;
    if (className) {
        method ?? (method = "constructor");
        queries.push(`[id.name="${className}"]`, `[id.name="${className}"] > ClassExpression`, `[id.name="${className}"] > ClassBody > [key.name="${method}"][key.type=${type}] > [async]`, `[id.name="${className}"] > ClassExpression > ClassBody > [key.name="${method}"][key.type=${type}] > [async]`);
    } else if (method) {
        queries.push(`ClassBody > [key.name="${method}"][key.type=${type}] > [async]`, `Property[key.name="${method}"][key.type=${type}] > [async]`);
    }
    if (functionName) {
        queries.push(`FunctionDeclaration[id.name="${functionName}"][async]`);
    } else if (expressionName) {
        queries.push(`FunctionExpression[id.name="${expressionName}"][async]`, `ArrowFunctionExpression[id.name="${expressionName}"][async]`, `VariableDeclarator[id.name="${expressionName}"] > FunctionExpression[async]`, `VariableDeclarator[id.name="${expressionName}"] > ArrowFunctionExpression[async]`, `AssignmentExpression[left.property.name="${expressionName}"] > FunctionExpression[async]`, `AssignmentExpression[left.property.name="${expressionName}"] > ArrowFunctionExpression[async]`, `AssignmentExpression[left.name="${expressionName}"] > FunctionExpression[async]`, `AssignmentExpression[left.name="${expressionName}"] > ArrowFunctionExpression[async]`);
    }
    if (objectName || propertyName) {
        if (!objectName || !propertyName) {
            throw new Error(`functionQuery: 'objectName' and 'propertyName' must be used together (got objectName=${objectName}, propertyName=${propertyName})`);
        }
        const objectSelector = objectName === "this" ? "left.object.type=ThisExpression" : `left.object.name="${objectName}"`;
        queries.push(`AssignmentExpression[${objectSelector}][left.property.name="${propertyName}"] > [async]`);
    }
    return queries.join(", ");
};
var transformer = {
    Transformer
};
exports.transformer = transformer; //# sourceMappingURL=transformer.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/matcher.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/semifies/index.js [instrumentation] (ecmascript)");
const transformer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/transformer.js [instrumentation] (ecmascript)");
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _configs, _dcModule, _transformers, _customTransforms;
const semifies = index.semifies;
const { Transformer } = transformer.transformer;
class InstrumentationMatcher {
    /**
   * @param {object[]} configs - Array of instrumentation configuration objects.
   * @param {string} [dcModule] - The diagnostics_channel module specifier to inject.
   *   Defaults to `'diagnostics_channel'`.
   */ constructor(configs, dcModule){
        __privateAdd(this, _configs, []);
        __privateAdd(this, _dcModule, null);
        __privateAdd(this, _transformers, {});
        __privateAdd(this, _customTransforms, {});
        __privateSet(this, _configs, configs);
        __privateSet(this, _dcModule, dcModule || "diagnostics_channel");
    }
    /** Releases all cached transformers, freeing any associated resources. */ free() {
        __privateSet(this, _transformers, {});
    }
    /**
   * Registers a custom transform function under the given operator name.
   *
   * Custom transforms override built-in ones when an instrumentation config
   * specifies the same `transform` value.
   *
   * @param {string} name - Operator name (e.g. `'traceSync'`).
   * @param {Function} fn - Transform function `(state, node, parent, ancestry) => void`.
   */ addTransform(name, fn) {
        __privateGet(this, _customTransforms)[name] = fn;
    }
    /**
   * Returns a {@link Transformer} for the given module/file/version, or `undefined`
   * if no registered config matches.
   *
   * Results are cached by a `moduleName/filePath@version` key.
   *
   * @param {string} moduleName - The npm package name (e.g. `'express'`).
   * @param {string} version - The installed semver version string.
   * @param {string} filePath - The relative file path within the package.
   * @returns {import('./transformer').Transformer|undefined}
   */ getTransformer(moduleName, version, filePath) {
        filePath = filePath.replace(/\\/g, "/");
        const id = `${moduleName}/${filePath}@${version}`;
        if (__privateGet(this, _transformers)[id]) return __privateGet(this, _transformers)[id];
        const configs = __privateGet(this, _configs).filter(({ module: mod })=>mod.name === moduleName && (typeof mod.filePath === "string" ? mod.filePath === filePath : mod.filePath.test(filePath)) && semifies(version, mod.versionRange));
        if (configs.length === 0) return;
        __privateGet(this, _transformers)[id] = new Transformer(moduleName, version, filePath, configs, __privateGet(this, _dcModule), __privateGet(this, _customTransforms));
        return __privateGet(this, _transformers)[id];
    }
}
_configs = new WeakMap();
_dcModule = new WeakMap();
_transformers = new WeakMap();
_customTransforms = new WeakMap();
var matcher = {
    InstrumentationMatcher
};
exports.matcher = matcher; //# sourceMappingURL=matcher.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const matcher = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/matcher.js [instrumentation] (ecmascript)");
const { InstrumentationMatcher } = matcher.matcher;
function create(configs, dcModule) {
    return new InstrumentationMatcher(configs, dcModule);
}
var lib = {
    create
};
exports.lib = lib; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/lib/index.js [instrumentation] (ecmascript)");
var codeTransformer = index.lib;
exports.codeTransformer = codeTransformer; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/module-details-from-path/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const _commonjsHelpers = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/_commonjsHelpers.js [instrumentation] (ecmascript)");
const require$$0 = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
var sep = require$$0.sep;
var moduleDetailsFromPath = function(file) {
    var segments = file.split(sep);
    var index = segments.lastIndexOf("node_modules");
    if (index === -1) return;
    if (!segments[index + 1]) return;
    var scoped = segments[index + 1][0] === "@";
    var name = scoped ? segments[index + 1] + "/" + segments[index + 2] : segments[index + 1];
    var offset = scoped ? 3 : 2;
    var basedir = "";
    var lastBaseDirSegmentIndex = index + offset - 1;
    for(var i = 0; i <= lastBaseDirSegmentIndex; i++){
        if (i === lastBaseDirSegmentIndex) {
            basedir += segments[i];
        } else {
            basedir += segments[i] + sep;
        }
    }
    var path = "";
    var lastSegmentIndex = segments.length - 1;
    for(var i2 = index + offset; i2 <= lastSegmentIndex; i2++){
        if (i2 === lastSegmentIndex) {
            path += segments[i2];
        } else {
            path += segments[i2] + sep;
        }
    }
    return {
        name,
        basedir,
        path
    };
};
const parse = /*@__PURE__*/ _commonjsHelpers.getDefaultExportFromCjs(moduleDetailsFromPath);
exports.default = parse;
exports.moduleDetailsFromPath = moduleDetailsFromPath; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/core-dC9TN3Ev.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/index.js [instrumentation] (ecmascript)");
const require$$0 = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const require$$4 = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const index$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/module-details-from-path/index.js [instrumentation] (ecmascript)");
//#region node_modules/es-module-lexer/dist/lexer.js
var ImportType;
(function(A) {
    A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase";
})(ImportType || (ImportType = {}));
var A = 1 === new Uint8Array(new Uint16Array([
    1
]).buffer)[0];
function parse(E, g = "@") {
    if (!C) return init.then(()=>parse(E));
    const I = E.length + 1, o = (C.__heap_base.value || C.__heap_base) + 4 * I - C.memory.buffer.byteLength;
    o > 0 && C.memory.grow(Math.ceil(o / 65536));
    const D = C.sa(I - 1);
    if ((A ? B : Q)(E, new Uint16Array(C.memory.buffer, D, I)), !C.parse()) throw Object.assign(/* @__PURE__ */ new Error(`Parse error ${g}:${E.slice(0, C.e()).split("\n").length}:${C.e() - E.lastIndexOf("\n", C.e() - 1)}`), {
        idx: C.e()
    });
    const K = [], k = [];
    for(; C.ri();){
        const A = C.is(), Q = C.ie(), B = C.it(), g = C.ai(), I = C.id(), o = C.ss(), D = C.se();
        let k;
        C.ip() && (k = w(E.slice(-1 === I ? A - 1 : A, -1 === I ? Q + 1 : Q)));
        const i = [];
        for(C.rsa(); C.ra();){
            const A = C.aks(), Q = C.ake(), B = C.avs(), g = C.ave();
            i.push([
                N(E.slice(A, Q)),
                N(E.slice(B, g))
            ]);
        }
        K.push({
            n: k,
            t: B,
            s: A,
            e: Q,
            ss: o,
            se: D,
            d: I,
            a: g,
            at: i.length > 0 ? i : null
        });
    }
    for(; C.re();){
        const A = C.es(), Q = C.ee(), B = C.els(), g = C.ele(), I = N(E.slice(A, Q)), o = B < 0 ? void 0 : N(E.slice(B, g));
        k.push({
            s: A,
            e: Q,
            ls: B,
            le: g,
            n: I,
            ln: o
        });
    }
    function w(A) {
        try {
            return (0, eval)(A);
        } catch (A) {}
    }
    function N(A) {
        if (!A) return A;
        const Q = A[0];
        return ("\"" === Q || "'" === Q) && w(A) || A;
    }
    return [
        K,
        k,
        !!C.f(),
        !!C.ms()
    ];
}
function Q(A, Q) {
    const B = A.length;
    let C = 0;
    for(; C < B;){
        const B = A.charCodeAt(C);
        Q[C++] = (255 & B) << 8 | B >>> 8;
    }
}
function B(A, Q) {
    const B = A.length;
    let C = 0;
    for(; C < B;)Q[C] = A.charCodeAt(C++);
}
var C;
var E = ()=>{
    return A = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADODcAAQECAgICAgICAgICAgICAgICAgICAgICAwIAAwMDBAAEAAAABQAAAAAAAwMDAAAGAAcABgIFBAUBcAEBAQUDAQABBg8CfwFBsPIAC38AQbDyAAsHnQEbBm1lbW9yeQIAAnNhAAABZQADAmlzAAQCaWUABQJzcwAGAnNlAAcCaXQACAJhaQAJAmlkAAoCaXAACwJlcwAMAmVlAA0DZWxzAA4DZWxlAA8CcmkAEAJyZQARAWYAEgJtcwATAnJhABQDYWtzABUDYWtlABYDYXZzABcDYXZlABgDcnNhABkFcGFyc2UAGgtfX2hlYXBfYmFzZQMBCrxJN2gBAX9BACAANgL0CUEAKALQCSIBIABBAXRqIgBBADsBAEEAIABBAmoiADYC+AlBACAANgL8CUEAQQA2AtQJQQBBADYC5AlBAEEANgLcCUEAQQA2AtgJQQBBADYC7AlBAEEANgLgCSABC9MBAQN/QQAoAuQJIQRBAEEAKAL8CSIFNgLkCUEAIAQ2AugJQQAgBUEoajYC/AkgBEEkakHUCSAEGyAFNgIAQQAoAsgJIQRBACgCxAkhBiAFIAE2AgAgBSAANgIIIAUgAiACQQJqQQAgBiADRiIAGyAEIANGIgQbNgIMIAUgAzYCFCAFQQA2AhAgBSACNgIEIAVCADcCICAFQQNBAUECIAAbIAQbNgIcIAVBACgCxAkgA0YiAjoAGAJAAkAgAg0AQQAoAsgJIANHDQELQQBBAToAgAoLC14BAX9BACgC7AkiBEEQakHYCSAEG0EAKAL8CSIENgIAQQAgBDYC7AlBACAEQRRqNgL8CUEAQQE6AIAKIARBADYCECAEIAM2AgwgBCACNgIIIAQgATYCBCAEIAA2AgALCABBACgChAoLFQBBACgC3AkoAgBBACgC0AlrQQF1Cx4BAX9BACgC3AkoAgQiAEEAKALQCWtBAXVBfyAAGwsVAEEAKALcCSgCCEEAKALQCWtBAXULHgEBf0EAKALcCSgCDCIAQQAoAtAJa0EBdUF/IAAbCwsAQQAoAtwJKAIcCx4BAX9BACgC3AkoAhAiAEEAKALQCWtBAXVBfyAAGws7AQF/AkBBACgC3AkoAhQiAEEAKALECUcNAEF/DwsCQCAAQQAoAsgJRw0AQX4PCyAAQQAoAtAJa0EBdQsLAEEAKALcCS0AGAsVAEEAKALgCSgCAEEAKALQCWtBAXULFQBBACgC4AkoAgRBACgC0AlrQQF1Cx4BAX9BACgC4AkoAggiAEEAKALQCWtBAXVBfyAAGwseAQF/QQAoAuAJKAIMIgBBACgC0AlrQQF1QX8gABsLJQEBf0EAQQAoAtwJIgBBJGpB1AkgABsoAgAiADYC3AkgAEEARwslAQF/QQBBACgC4AkiAEEQakHYCSAAGygCACIANgLgCSAAQQBHCwgAQQAtAIgKCwgAQQAtAIAKCysBAX9BAEEAKAKMCiIAQRBqQQAoAtwJQSBqIAAbKAIAIgA2AowKIABBAEcLFQBBACgCjAooAgBBACgC0AlrQQF1CxUAQQAoAowKKAIEQQAoAtAJa0EBdQsVAEEAKAKMCigCCEEAKALQCWtBAXULFQBBACgCjAooAgxBACgC0AlrQQF1CwoAQQBBADYCjAoLuw8BBX8jAEGA0ABrIgAkAEEAQQE6AIgKQQBBACgCzAk2ApQKQQBBACgC0AlBfmoiATYCqApBACABQQAoAvQJQQF0aiICNgKsCkEAQQA6AIAKQQBBADsBkApBAEEAOwGSCkEAQQA6AJgKQQBBADYChApBAEEAOgDwCUEAIABBgBBqNgKcCkEAIAA2AqAKQQBBADoApAoCQAJAAkACQANAQQAgAUECaiIDNgKoCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BkgoNASADEBtFDQEgAUEEakGCCEEKEDYNARAcQQAtAIgKDQFBAEEAKAKoCiIBNgKUCgwHCyADEBtFDQAgAUEEakGMCEEKEDYNABAdC0EAQQAoAqgKNgKUCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAeDAELQQEQHwtBACgCrAohAkEAKAKoCiEBDAALC0EAIQIgAyEBQQAtAPAJDQIMAQtBACABNgKoCkEAQQA6AIgKCwNAQQAgAUECaiIDNgKoCgJAAkACQAJAAkACQAJAIAFBACgCrApPDQACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCADLwEAIgJBYGoOEBMSCRISEhIIAQUSEgQSEgoACwJAAkACQAJAIAJBpX9qDg8FFQYVFQ4VFQMVARUVFQIACyACQXdqQQVJDRUgAkGFf2oOAwgUCRQLQQAvAZIKDRMgAxAbRQ0TIAFBBGpBgghBChA2DRMQHAwTCyADEBtFDRIgAUEEakGMCEEKEDYNEhAdDBILIAMQG0UNESABKQAEQuyAhIOwjsA5Ug0RIAEvAQwiA0F3aiIBQRdLDQ9BASABdEGfgIAEcUUNDwwQC0EAQQAvAZIKIgFBAWo7AZIKQQAoApwKIAFBA3RqIgFBATYCACABQQAoApQKNgIEDBALQQBBAC8BkgoiAUEBajsBkgpBACgCnAogAUEDdGoiAUEINgIAIAFBACgClAo2AgQMDwtBAC8BkgoiAUUNC0EAIAFBf2o7AZIKDA4LQQAvAZAKIgNFDQ1BAC8BkgoiAkUNDSACQQN0QQAoApwKakF4aigCAEEFRw0NIANBAnRBACgCoApqQXxqKAIAIgMoAgQNDUEAIAFBBGo2AqgKIANBACgClApBAmo2AgRBARAgGiADQQAoAqgKIgE2AhBBACABQX5qNgKoCgwNC0EALwGSCiIDRQ0JQQAgA0F/aiIDOwGSCkEALwGQCiICRQ0MQQAoApwKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCoApqQXxqKAIAIgMoAgQNACADQQAoApQKQQJqNgIEC0EAIAJBf2o7AZAKIAMgAUEEajYCDAwMCwJAQQAoApQKIgEvAQBBKUcNAEEAKALkCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAugJIgM2AuQJAkAgA0UNACADQQA2AiQMAQtBAEEANgLUCQtBAEEALwGSCiIDQQFqOwGSCkEAKAKcCiADQQN0aiIDQQZBAkEALQCkChs2AgAgAyABNgIEQQBBADoApAoMCwtBAC8BkgoiAUUNB0EAIAFBf2oiATsBkgpBACgCnAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQIQwJC0EiECEMCAsCQAJAIAEvAQQiAUEqRg0AIAFBL0cNARAeDAoLQQEQHwwJCwJAAkACQAJAQQAoApQKIgEvAQAiAxAiRQ0AAkACQCADQVVqDgQACQEDCQsgAUF+ai8BAEErRg0DDAgLIAFBfmovAQBBLUYNAgwHCyADQSlHDQFBACgCnApBAC8BkgoiAkEDdGooAgQQI0UNAgwGCyABQX5qLwEAQVBqQf//A3FBCk8NBQtBAC8BkgohAgsCQAJAIAJB//8DcSICRQ0AIANB5gBHDQBBACgCnAogAkF/akEDdGoiBCgCAEEBRw0AIAFBfmovAQBB7wBHDQEgAUF8ahAkRQ0BIAQoAgRBlghBAxAlRQ0BDAULIANB/QBHDQBBACgCnAogAkEDdGoiAigCBBAmDQQgAigCAEEGRg0ECyABECcNAyADRQ0DIANBL0ZBAC0AmApBAEdxDQMCQEEAKALsCSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALQCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApQKIAEvAQAhAyABQX5qIgQhASADEChFDQALIARBAmohBAsCQCADQf//A3EQKUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYClAogAS8BACEDIAFBfmoiBCEBIAMQKQ0ACyAEQQJqIQMLIAMQKg0EC0EAQQE6AJgKDAcLQQAoApwKQQAvAZIKIgFBA3QiA2pBACgClAo2AgRBACABQQFqOwGSCkEAKAKcCiADakEDNgIACxArDAULQQAtAPAJQQAvAZAKQQAvAZIKcnJFIQIMBwsQLEEAQQA6AJgKDAMLEC1BACECDAULIANBoAFHDQELQQBBAToApAoLQQBBACgCqAo2ApQKC0EAKAKoCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC0AkgAEcNAEEBDwsgAEF+ahAuC/4KAQZ/QQBBACgCqAoiAEEMaiIBNgKoCkEAKALsCSECQQEQICEDAkACQAJAAkACQAJAAkACQAJAQQAoAqgKIgQgAUcNACADEC9FDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKoCkEBECAhA0EAKAKoCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQMxpBACgCqAohAwwBCyADECFBAEEAKAKoCkECaiIDNgKoCgtBARAgGgJAIAQgAxA0IgNBLEcNAEEAQQAoAqgKQQJqNgKoCkEBECAhAwsgA0H9AEYNA0EAKAKoCiIFIARGDQ8gBSEEIAVBACgCrApNDQAMDwsLQQAgBEECajYCqApBARAgGkEAKAKoCiIDIAMQNBoMAgtBAEEAOgCICgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCqAoCQAJAAkBBARAgQZ9/ag4GABICEhIBEgtBACgCqAoiBSkAAkLzgOSD4I3AMVINESAFLwEKEClFDRFBACAFQQpqNgKoCkEAECAaC0EAKAKoCiIFQQJqQbIIQQ4QNg0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKoCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKoCkEAECAaQQAoAqgKIQQLQQAgBEEQajYCqAoCQEEBECAiBEEqRw0AQQBBACgCqApBAmo2AqgKQQEQICEEC0EAKAKoCiEDIAQQMxogA0EAKAKoCiIEIAMgBBACQQBBACgCqApBfmo2AqgKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQKEUNAEEAIARBCmo2AqgKQQEQICEEQQAoAqgKIQMgBBAzGiADQQAoAqgKIgQgAyAEEAJBAEEAKAKoCkF+ajYCqAoPC0EAIARBBGoiBDYCqAoLQQAgBEEGajYCqApBAEEAOgCICkEBECAhBEEAKAKoCiEDIAQQMyEEQQAoAqgKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKoCkEBECAhBUEAKAKoCiEDQQAhBAwEC0EAQQE6AIAKQQBBACgCqApBAmo2AqgKC0EBECAhBEEAKAKoCiEDAkAgBEHmAEcNACADQQJqQawIQQYQNg0AQQAgA0EIajYCqAogAEEBECBBABAyIAJBEGpB2AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2AqgKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAzGkEBIQQMAQsCQAJAQQAoAqgKIgQgA0YNACADIAQgAyAEEAJBARAgIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoAqgKIQMCQCAEQSxHDQBBACADQQJqNgKoCkEBECAhBUEAKAKoCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCqAoLIAFB2wBHDQJBACACQX5qNgKoCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCqApBARAgIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2AqgKAkBBARAgIgVBKkcNAEEAQQAoAqgKQQJqNgKoCkEBECAhBQsgBUEoRg0BC0EAKAKoCiEBIAUQMxpBACgCqAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoAqgKQX5qNgKoCg8LIAQgA0EAQQAQAkEAIARBDGo2AqgKDwsQLQuFDAEKf0EAQQAoAqgKIgBBDGoiATYCqApBARAgIQJBACgCqAohAwJAAkACQAJAAkACQAJAAkAgAkEuRw0AQQAgA0ECajYCqAoCQEEBECAiAkHkAEYNAAJAIAJB8wBGDQAgAkHtAEcNB0EAKAKoCiICQQJqQZwIQQYQNg0HAkBBACgClAoiAxAxDQAgAy8BAEEuRg0ICyAAIAAgAkEIakEAKALICRABDwtBACgCqAoiAkECakGiCEEKEDYNBgJAQQAoApQKIgMQMQ0AIAMvAQBBLkYNBwtBACEEQQAgAkEMajYCqApBASEFQQUhBkEBECAhAkEAIQdBASEIDAILQQAoAqgKIgIpAAJC5YCYg9CMgDlSDQUCQEEAKAKUCiIDEDENACADLwEAQS5GDQYLQQAhBEEAIAJBCmo2AqgKQQIhCEEHIQZBASEHQQEQICECQQEhBQwBCwJAAkACQAJAIAJB8wBHDQAgAyABTQ0AIANBAmpBoghBChA2DQACQCADLwEMIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAgsgBEGgAUYNAQtBACEHQQchBkEBIQQgAkHkAEYNAQwCC0EAIQRBACADQQxqIgI2AqgKQQEhBUEBECAhCQJAQQAoAqgKIgYgAkYNAEHmACECAkAgCUHmAEYNAEEFIQZBACEHQQEhCCAJIQIMBAtBACEHQQEhCCAGQQJqQawIQQYQNg0EIAYvAQgQKEUNBAtBACEHQQAgAzYCqApBByEGQQEhBEEAIQVBACEIIAkhAgwCCyADIABBCmpNDQBBACEIQeQAIQICQCADKQACQuWAmIPQjIA5Ug0AAkACQCADLwEKIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAQtBACEIIARBoAFHDQELQQAhBUEAIANBCmo2AqgKQSohAkEBIQdBAiEIQQEQICIJQSpGDQRBACADNgKoCkEBIQRBACEHQQAhCCAJIQIMAgsgAyEGQQAhBwwCC0EAIQVBACEICwJAIAJBKEcNAEEAKAKcCkEALwGSCiICQQN0aiIDQQAoAqgKNgIEQQAgAkEBajsBkgogA0EFNgIAQQAoApQKLwEAQS5GDQRBAEEAKAKoCiIDQQJqNgKoCkEBECAhAiAAQQAoAqgKQQAgAxABAkACQCAFDQBBACgC5AkhAQwBC0EAKALkCSIBIAY2AhwLQQBBAC8BkAoiA0EBajsBkApBACgCoAogA0ECdGogATYCAAJAIAJBIkYNACACQSdGDQBBAEEAKAKoCkF+ajYCqAoPCyACECFBAEEAKAKoCkECaiICNgKoCgJAAkACQEEBECBBV2oOBAECAgACC0EAQQAoAqgKQQJqNgKoCkEBECAaQQAoAuQJIgMgAjYCBCADQQE6ABggA0EAKAKoCiICNgIQQQAgAkF+ajYCqAoPC0EAKALkCSIDIAI2AgQgA0EBOgAYQQBBAC8BkgpBf2o7AZIKIANBACgCqApBAmo2AgxBAEEALwGQCkF/ajsBkAoPC0EAQQAoAqgKQX5qNgKoCg8LAkAgBEEBcyACQfsAR3INAEEAKAKoCiECQQAvAZIKDQUDQAJAAkACQCACQQAoAqwKTw0AQQEQICICQSJGDQEgAkEnRg0BIAJB/QBHDQJBAEEAKAKoCkECajYCqAoLQQEQICEDQQAoAqgKIQICQCADQeYARw0AIAJBAmpBrAhBBhA2DQcLQQAgAkEIajYCqAoCQEEBECAiAkEiRg0AIAJBJ0cNBwsgACACQQAQMg8LIAIQIQtBAEEAKAKoCkECaiICNgKoCgwACwsCQAJAIAJBWWoOBAMBAQMACyACQSJGDQILQQAoAqgKIQYLIAYgAUcNAEEAIABBCmo2AqgKDwsgAkEqRyAHcQ0DQQAvAZIKQf//A3ENA0EAKAKoCiECQQAoAqwKIQEDQCACIAFPDQECQAJAIAIvAQAiA0EnRg0AIANBIkcNAQsgACADIAgQMg8LQQAgAkECaiICNgKoCgwACwsQLQsPC0EAIAJBfmo2AqgKDwtBAEEAKAKoCkF+ajYCqAoLRwEDf0EAKAKoCkECaiEAQQAoAqwKIQECQANAIAAiAkF+aiABTw0BIAJBAmohACACLwEAQXZqDgQBAAABAAsLQQAgAjYCqAoLmAEBA39BAEEAKAKoCiIBQQJqNgKoCiABQQZqIQFBACgCrAohAgNAAkACQAJAIAFBfGogAk8NACABQX5qLwEAIQMCQAJAIAANACADQSpGDQEgA0F2ag4EAgQEAgQLIANBKkcNAwsgAS8BAEEvRw0CQQAgAUF+ajYCqAoMAQsgAUF+aiEBC0EAIAE2AqgKDwsgAUECaiEBDAALC5wBAQN/QQAoAqgKIQECQANAAkACQCABLwEAIgJBL0cNAAJAIAEvAQIiAUEqRg0AIAFBL0cNBBAeDAILIAAQHwwBCwJAAkAgAEUNACACQXdqIgFBF0sNAUEBIAF0QZ+AgARxRQ0BDAILIAIQKUUNAwwBCyACQaABRw0CC0EAQQAoAqgKIgNBAmoiATYCqAogA0EAKAKsCkkNAAsLIAILiAEBBH9BACgCqAohAUEAKAKsCiECAkACQANAIAEiA0ECaiEBIAMgAk8NASABLwEAIgQgAEYNAgJAIARB3ABGDQAgBEF2ag4EAgEBAgELIANBBGohASADLwEEQQ1HDQAgA0EGaiABIAMvAQZBCkYbIQEMAAsLQQAgATYCqAoQLQ8LQQAgATYCqAoLbAEBfwJAAkAgAEFfaiIBQQVLDQBBASABdEExcQ0BCyAAQUZqQf//A3FBBkkNACAAQSlHIABBWGpB//8DcUEHSXENAAJAIABBpX9qDgQBAAABAAsgAEH9AEcgAEGFf2pB//8DcUEESXEPC0EBCy4BAX9BASEBAkAgAEGcCUEFECUNACAAQZYIQQMQJQ0AIABBpglBAhAlIQELIAELygEBAn8CQAJAIAAvAQAiAUF3akEFSQ0AIAFBIEYNACABQSlGDQAgAUHdAEYNACABQaABRg0AQQAhAiABQf0ARw0BC0EAKALQCSECAkACQANAIAAvAQAhASAAIAJNDQECQCABQXdqQQVJDQAgAUEgRg0AIAFBoAFGDQACQCABQSlGDQAgAUHdAEYNACABQf0ARw0EC0EBDwsgAEF+aiEADAALC0EBIQIgAUEpRg0BIAFB3QBGDQEgAUH9AEYNAQsgARAvQQFzIQILIAILRgEDf0EAIQMCQCAAIAJBAXQiAmsiBEECaiIAQQAoAtAJIgVJDQAgACABIAIQNg0AAkAgACAFRw0AQQEPCyAEEC4hAwsgAwuDAQECf0EBIQECQAJAAkACQAJAAkAgAC8BACICQUVqDgQFBAQBAAsCQCACQZt/ag4EAwQEAgALIAJBKUYNBCACQfkARw0DIABBfmpBsglBBhAlDwsgAEF+ai8BAEE9Rg8LIABBfmpBqglBBBAlDwsgAEF+akG+CUEDECUPC0EAIQELIAELtAMBAn9BACEBAkACQAJAAkACQAJAAkACQAJAAkAgAC8BAEGcf2oOFAABAgkJCQkDCQkEBQkJBgkHCQkICQsCQAJAIABBfmovAQBBl39qDgQACgoBCgsgAEF8akHACEECECUPCyAAQXxqQcQIQQMQJQ8LAkACQAJAIABBfmovAQBBjX9qDgMAAQIKCwJAIABBfGovAQAiAkHhAEYNACACQewARw0KIABBempB5QAQMA8LIABBempB4wAQMA8LIABBfGpByghBBBAlDwsgAEF8akHSCEEGECUPCyAAQX5qLwEAQe8ARw0GIABBfGovAQBB5QBHDQYCQCAAQXpqLwEAIgJB8ABGDQAgAkHjAEcNByAAQXhqQd4IQQYQJQ8LIABBeGpB6ghBAhAlDwsgAEF+akHuCEEEECUPC0EBIQEgAEF+aiIAQekAEDANBCAAQfYIQQUQJQ8LIABBfmpB5AAQMA8LIABBfmpBgAlBBxAlDwsgAEF+akGOCUEEECUPCwJAIABBfmovAQAiAkHvAEYNACACQeUARw0BIABBfGpB7gAQMA8LIABBfGpBlglBAxAlIQELIAELNAEBf0EBIQECQCAAQXdqQf//A3FBBUkNACAAQYABckGgAUYNACAAQS5HIAAQL3EhAQsgAQswAQF/AkACQCAAQXdqIgFBF0sNAEEBIAF0QY2AgARxDQELIABBoAFGDQBBAA8LQQELTgECf0EAIQECQAJAIAAvAQAiAkHlAEYNACACQesARw0BIABBfmpB7ghBBBAlDwsgAEF+ai8BAEH1AEcNACAAQXxqQdIIQQYQJSEBCyABC94BAQR/QQAoAqgKIQBBACgCrAohAQJAAkACQANAIAAiAkECaiEAIAIgAU8NAQJAAkACQCAALwEAIgNBpH9qDgUCAwMDAQALIANBJEcNAiACLwEEQfsARw0CQQAgAkEEaiIANgKoCkEAQQAvAZIKIgJBAWo7AZIKQQAoApwKIAJBA3RqIgJBBDYCACACIAA2AgQPC0EAIAA2AqgKQQBBAC8BkgpBf2oiADsBkgpBACgCnAogAEH//wNxQQN0aigCAEEDRw0DDAQLIAJBBGohAAwACwtBACAANgKoCgsQLQsLcAECfwJAAkADQEEAQQAoAqgKIgBBAmoiATYCqAogAEEAKAKsCk8NAQJAAkACQCABLwEAIgFBpX9qDgIBAgALAkAgAUF2ag4EBAMDBAALIAFBL0cNAgwECxA1GgwBC0EAIABBBGo2AqgKDAALCxAtCws1AQF/QQBBAToA8AlBACgCqAohAEEAQQAoAqwKQQJqNgKoCkEAIABBACgC0AlrQQF1NgKECgtDAQJ/QQEhAQJAIAAvAQAiAkF3akH//wNxQQVJDQAgAkGAAXJBoAFGDQBBACEBIAIQL0UNACACQS5HIAAQMXIPCyABC2gBAn9BASEBAkACQCAAQV9qIgJBBUsNAEEBIAJ0QTFxDQELIABB+P8DcUEoRg0AIABBRmpB//8DcUEGSQ0AAkAgAEGlf2oiAkEDSw0AIAJBAUcNAQsgAEGFf2pB//8DcUEESSEBCyABCz0BAn9BACECAkBBACgC0AkiAyAASw0AIAAvAQAgAUcNAAJAIAMgAEcNAEEBDwsgAEF+ai8BABAoIQILIAILMQEBf0EAIQECQCAALwEAQS5HDQAgAEF+ai8BAEEuRw0AIABBfGovAQBBLkYhAQsgAQvbBAEFfwJAIAFBIkYNACABQSdGDQAQLQ8LQQAoAqgKIQMgARAhIAAgA0ECakEAKAKoCkEAKALECRABAkAgAkEBSA0AQQAoAuQJQQRBBiACQQFGGzYCHAtBAEEAKAKoCkECajYCqApBABAgIQJBACgCqAohAQJAAkAgAkH3AEcNACABLwECQekARw0AIAEvAQRB9ABHDQAgAS8BBkHoAEYNAQtBACABQX5qNgKoCg8LQQAgAUEIajYCqAoCQEEBECBB+wBGDQBBACABNgKoCg8LQQAoAqgKIgQhA0EAIQADQEEAIANBAmo2AqgKAkACQAJAAkBBARAgIgJBJ0cNAEEAKAKoCiEFQScQIUEAKAKoCkECaiEDDAELQQAoAqgKIQUgAkEiRw0BQSIQIUEAKAKoCkECaiEDC0EAIAM2AqgKQQEQICECDAELIAIQMyECQQAoAqgKIQMLAkAgAkE6Rg0AQQAgATYCqAoPC0EAQQAoAqgKQQJqNgKoCgJAQQEQICICQSJGDQAgAkEnRg0AQQAgATYCqAoPC0EAKAKoCiEGIAIQIUEAQQAoAvwJIgJBFGo2AvwJQQAoAqgKIQcgAiAFNgIAIAJBADYCECACIAY2AgggAiADNgIEIAIgB0ECajYCDEEAQQAoAqgKQQJqNgKoCiAAQRBqQQAoAuQJQSBqIAAbIAI2AgACQAJAQQEQICIAQSxGDQAgAEH9AEYNAUEAIAE2AqgKDwtBAEEAKAKoCkECaiIDNgKoCiACIQAMAQsLQQAoAuQJIgEgBDYCECABQQAoAqgKQQJqNgIMC20BAn8CQAJAA0ACQCAAQf//A3EiAUF3aiICQRdLDQBBASACdEGfgIAEcQ0CCyABQaABRg0BIAAhAiABEC8NAkEAIQJBAEEAKAKoCiIAQQJqNgKoCiAALwECIgANAAwCCwsgACECCyACQf//A3ELqwEBBH8CQAJAQQAoAqgKIgIvAQAiA0HhAEYNACABIQQgACEFDAELQQAgAkEEajYCqApBARAgIQJBACgCqAohBQJAAkAgAkEiRg0AIAJBJ0YNACACEDMaQQAoAqgKIQQMAQsgAhAhQQBBACgCqApBAmoiBDYCqAoLQQEQICEDQQAoAqgKIQILAkAgAiAFRg0AIAUgBEEAIAAgACABRiICG0EAIAEgAhsQAgsgAwtyAQR/QQAoAqgKIQBBACgCrAohAQJAAkADQCAAQQJqIQIgACABTw0BAkACQCACLwEAIgNBpH9qDgIBBAALIAIhACADQXZqDgQCAQECAQsgAEEEaiEADAALC0EAIAI2AqgKEC1BAA8LQQAgAjYCqApB3QALSQEDf0EAIQMCQCACRQ0AAkADQCAALQAAIgQgAS0AACIFRw0BIAFBAWohASAAQQFqIQAgAkF/aiICDQAMAgsLIAQgBWshAwsgAwsL4gECAEGACAvEAQAAeABwAG8AcgB0AG0AcABvAHIAdABmAG8AcgBlAHQAYQBvAHUAcgBjAGUAcgBvAG0AdQBuAGMAdABpAG8AbgB2AG8AeQBpAGUAZABlAGwAZQBjAG8AbgB0AGkAbgBpAG4AcwB0AGEAbgB0AHkAYgByAGUAYQByAGUAdAB1AHIAZABlAGIAdQBnAGcAZQBhAHcAYQBpAHQAaAByAHcAaABpAGwAZQBpAGYAYwBhAHQAYwBmAGkAbgBhAGwAbABlAGwAcwAAQcQJCxABAAAAAgAAAAAEAAAwOQAA", "undefined" != typeof Buffer ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), (A)=>A.charCodeAt(0));
    //TURBOPACK unreachable
    ;
    var A;
};
var init = WebAssembly.compile(E()).then(WebAssembly.instantiate).then(({ exports: A })=>{
    C = A;
});
var initSync = ()=>{
    if (C) return;
    const A = new WebAssembly.Module(E());
    C = new WebAssembly.Instance(A).exports;
};
//#endregion
//#region src/core.ts
var COMMENT_USE_STRICT_REGEX = /^(?:\s*|\/\*(?:.|\r|\n)*?\*\/|\/\/.*[\n\r])*(?:"[^"]*";|'[^']*';)?/;
function stripQueryAndHashFromPath(path) {
    return path.split("?")[0].split("#")[0];
}
/**
* Checks if a file is a JavaScript file based on its extension.
* Handles query strings and hashes in the filename.
*/ function isJsFile(fileName) {
    const cleanFileName = stripQueryAndHashFromPath(fileName);
    return [
        ".js",
        ".mjs",
        ".cjs"
    ].some((ext)=>cleanFileName.endsWith(ext));
}
/**
* Checks if a chunk contains only import/export statements and no substantial code.
*
* In Vite MPA (multi-page application) mode, HTML entry points create "facade" chunks
* that only contain import statements to load shared modules. These should not have
* Sentry code injected. However, in SPA mode, the main bundle also has an HTML facade
* but contains substantial application code that SHOULD have debug IDs injected.
*
* @ref https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/829
* @ref https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/839
*/ function containsOnlyImports(code) {
    return code.replace(/^\s*import\s+(?:'[^'\n]*'|"[^"\n]*"|`[^`\n]*`)[\s;]*$/gm, "").replace(/^\s*import\b[^'"`\n]*\bfrom\s+(?:'[^'\n]*'|"[^"\n]*"|`[^`\n]*`)[\s;]*$/gm, "").replace(/^\s*export\b[^'"`\n]*\bfrom\s+(?:'[^'\n]*'|"[^"\n]*"|`[^`\n]*`)[\s;]*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/["']use strict["']\s*;?/g, "").trim().length === 0;
}
/**
* Checks if a chunk should be skipped for code injection
*
* This is necessary to handle Vite's MPA (multi-page application) mode where
* HTML entry points create "facade" chunks that should not contain injected code.
* See: https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/829
*
* However, in SPA mode, the main bundle also has an HTML facade but contains
* substantial application code. We should NOT skip injection for these bundles.
*
* @param code - The chunk's code content
* @param facadeModuleId - The facade module ID (if any) - HTML files create facade chunks
* @returns true if the chunk should be skipped
*/ function shouldSkipCodeInjection(code, facadeModuleId) {
    if (code.trim().length === 0) return true;
    if (facadeModuleId && stripQueryAndHashFromPath(facadeModuleId).endsWith(".html")) return containsOnlyImports(code);
    return false;
}
function getModuleVersion(basedir) {
    try {
        const packageJsonPath = require$$0.join(basedir, "package.json");
        const packageJson = JSON.parse(require$$4.readFileSync(packageJsonPath, "utf8"));
        if (packageJson.version) return packageJson.version;
    } catch (_) {}
}
function detectModuleType(id, code) {
    const ext = require$$0.extname(id);
    if (ext === ".mjs" || ext === ".ts" || ext === ".tsx") return "esm";
    if (ext === ".cjs") return "cjs";
    if (ext === ".js") try {
        initSync();
        const [imports, exports1] = parse(code);
        return imports.length > 0 || exports1.length > 0 ? "esm" : "cjs";
    } catch (_) {}
    return "unknown";
}
/**
* Build a reusable code transformer from plugin options. The returned
* `transform` function returns `null` for files that should not be modified.
* Call `dispose` when the bundler tears the plugin down.
*/ function createCodeTransformer(options) {
    const matcher = index.codeTransformer.create(options.instrumentations, options.dcModule ?? null);
    for (const [name, fn] of Object.entries(options.customTransforms ?? {}))matcher.addTransform(name, fn);
    const transformedModules = /* @__PURE__ */ new Set();
    const failedModules = /* @__PURE__ */ new Set();
    const getCodeToInject = ()=>{
        if (!options.injectDiagnostics) return;
        const diagnostics = {
            transformedModules: Array.from(transformedModules),
            failedModules: Array.from(failedModules)
        };
        return options.injectDiagnostics(diagnostics);
    };
    const transform = (code, id, inputSourceMap)=>{
        const moduleDetails = index$1.default(id);
        if (!moduleDetails) return null;
        const moduleVersion = getModuleVersion(moduleDetails.basedir);
        if (!moduleVersion) return null;
        const transformer = matcher.getTransformer(moduleDetails.name, moduleVersion, moduleDetails.path);
        if (!transformer) return null;
        const moduleType = detectModuleType(id, code);
        if (moduleType === "unknown") {
            failedModules.add(moduleDetails.name);
            return null;
        }
        try {
            const result = transformer.transform(code, moduleType, inputSourceMap ?? null);
            transformedModules.add(transformer.moduleName);
            return {
                code: result.code,
                map: result.map
            };
        } catch (error) {
            console.warn(`Code transformation failed for '${id}'`, error);
            failedModules.add(moduleDetails.name);
            return null;
        }
    };
    return {
        transform,
        getCodeToInject
    };
}
exports.a = shouldSkipCodeInjection;
exports.i = isJsFile;
exports.n = containsOnlyImports;
exports.r = createCodeTransformer;
exports.t = COMMENT_USE_STRICT_REGEX; //# sourceMappingURL=core-dC9TN3Ev.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/meriyah/dist/meriyah.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const unicodeLookup = ((compressed, lookup)=>{
    const result = new Uint32Array(69632);
    let index = 0;
    let subIndex = 0;
    while(index < 2571){
        const inst = compressed[index++];
        if (inst < 0) {
            subIndex -= inst;
        } else {
            let code = compressed[index++];
            if (inst & 2) code = lookup[code];
            if (inst & 1) {
                result.fill(code, subIndex, subIndex += compressed[index++]);
            } else {
                result[subIndex++] = code;
            }
        }
    }
    return result;
})([
    -1,
    2,
    26,
    2,
    27,
    2,
    5,
    -1,
    0,
    77595648,
    3,
    44,
    2,
    3,
    0,
    14,
    2,
    63,
    2,
    64,
    3,
    0,
    3,
    0,
    3168796671,
    0,
    4294956992,
    2,
    1,
    2,
    0,
    2,
    41,
    3,
    0,
    4,
    0,
    4294966523,
    3,
    0,
    4,
    2,
    16,
    2,
    65,
    2,
    0,
    0,
    4294836735,
    0,
    3221225471,
    0,
    4294901942,
    2,
    66,
    0,
    134152192,
    3,
    0,
    2,
    0,
    4294951935,
    3,
    0,
    2,
    0,
    2683305983,
    0,
    2684354047,
    2,
    18,
    2,
    0,
    0,
    4294961151,
    3,
    0,
    2,
    2,
    19,
    2,
    0,
    0,
    608174079,
    2,
    0,
    2,
    60,
    2,
    7,
    2,
    6,
    0,
    4286611199,
    3,
    0,
    2,
    2,
    1,
    3,
    0,
    3,
    0,
    4294901711,
    2,
    40,
    0,
    4089839103,
    0,
    2961209759,
    0,
    1342439375,
    0,
    4294543342,
    0,
    3547201023,
    0,
    1577204103,
    0,
    4194240,
    0,
    4294688750,
    2,
    2,
    0,
    80831,
    0,
    4261478351,
    0,
    4294549486,
    2,
    2,
    0,
    2967484831,
    0,
    196559,
    0,
    3594373100,
    0,
    3288319768,
    0,
    8469959,
    0,
    65472,
    2,
    3,
    0,
    4093640191,
    0,
    660618719,
    0,
    65487,
    0,
    4294828015,
    0,
    4092591615,
    0,
    1616920031,
    0,
    982991,
    2,
    3,
    2,
    0,
    0,
    2163244511,
    0,
    4227923919,
    0,
    4236247022,
    2,
    71,
    0,
    4284449919,
    0,
    851904,
    2,
    4,
    2,
    12,
    0,
    67076095,
    -1,
    2,
    72,
    0,
    1073741743,
    0,
    4093607775,
    -1,
    0,
    50331649,
    0,
    3265266687,
    2,
    33,
    0,
    4294844415,
    0,
    4278190047,
    2,
    20,
    2,
    137,
    -1,
    3,
    0,
    2,
    2,
    23,
    2,
    0,
    2,
    10,
    2,
    0,
    2,
    15,
    2,
    22,
    3,
    0,
    10,
    2,
    74,
    2,
    0,
    2,
    75,
    2,
    76,
    2,
    77,
    2,
    0,
    2,
    78,
    2,
    0,
    2,
    11,
    0,
    261632,
    2,
    25,
    3,
    0,
    2,
    2,
    13,
    2,
    4,
    3,
    0,
    18,
    2,
    79,
    2,
    5,
    3,
    0,
    2,
    2,
    80,
    0,
    2151677951,
    2,
    29,
    2,
    9,
    0,
    909311,
    3,
    0,
    2,
    0,
    814743551,
    2,
    49,
    0,
    67090432,
    3,
    0,
    2,
    2,
    42,
    2,
    0,
    2,
    6,
    2,
    0,
    2,
    30,
    2,
    8,
    0,
    268374015,
    2,
    110,
    2,
    51,
    2,
    0,
    2,
    81,
    0,
    134153215,
    -1,
    2,
    7,
    2,
    0,
    2,
    8,
    0,
    2684354559,
    0,
    67044351,
    0,
    3221160064,
    2,
    17,
    -1,
    3,
    0,
    2,
    2,
    53,
    0,
    1046528,
    3,
    0,
    3,
    2,
    9,
    2,
    0,
    2,
    54,
    0,
    4294960127,
    2,
    10,
    2,
    6,
    2,
    11,
    0,
    4294377472,
    2,
    12,
    3,
    0,
    16,
    2,
    13,
    2,
    0,
    2,
    82,
    2,
    10,
    2,
    0,
    2,
    83,
    2,
    84,
    2,
    85,
    0,
    12288,
    2,
    55,
    0,
    1048577,
    2,
    86,
    2,
    14,
    -1,
    2,
    14,
    0,
    131042,
    2,
    87,
    2,
    88,
    2,
    89,
    2,
    0,
    2,
    34,
    -83,
    3,
    0,
    7,
    0,
    1046559,
    2,
    0,
    2,
    15,
    2,
    0,
    0,
    2147516671,
    2,
    21,
    3,
    90,
    2,
    2,
    0,
    -16,
    2,
    91,
    0,
    524222462,
    2,
    4,
    2,
    0,
    0,
    4269801471,
    2,
    4,
    3,
    0,
    2,
    2,
    28,
    2,
    16,
    3,
    0,
    2,
    2,
    17,
    2,
    0,
    -1,
    2,
    18,
    -16,
    3,
    0,
    206,
    -2,
    3,
    0,
    692,
    2,
    73,
    -1,
    2,
    18,
    2,
    10,
    3,
    0,
    8,
    2,
    93,
    2,
    133,
    2,
    0,
    0,
    3220242431,
    3,
    0,
    3,
    2,
    19,
    2,
    94,
    2,
    95,
    3,
    0,
    2,
    2,
    96,
    2,
    0,
    2,
    97,
    2,
    46,
    2,
    0,
    0,
    4351,
    2,
    0,
    2,
    9,
    3,
    0,
    2,
    0,
    67043391,
    0,
    3909091327,
    2,
    0,
    2,
    24,
    2,
    9,
    2,
    20,
    3,
    0,
    2,
    0,
    67076097,
    2,
    8,
    2,
    0,
    2,
    21,
    0,
    67059711,
    0,
    4236247039,
    3,
    0,
    2,
    0,
    939524103,
    0,
    8191999,
    2,
    101,
    2,
    102,
    2,
    22,
    2,
    23,
    3,
    0,
    3,
    0,
    67057663,
    3,
    0,
    349,
    2,
    103,
    2,
    104,
    2,
    7,
    -264,
    3,
    0,
    11,
    2,
    24,
    3,
    0,
    2,
    2,
    32,
    -1,
    0,
    3774349439,
    2,
    105,
    2,
    106,
    3,
    0,
    2,
    2,
    19,
    2,
    107,
    3,
    0,
    10,
    2,
    10,
    2,
    18,
    2,
    0,
    2,
    47,
    2,
    0,
    2,
    31,
    2,
    108,
    2,
    25,
    0,
    1638399,
    0,
    57344,
    2,
    109,
    3,
    0,
    3,
    2,
    20,
    2,
    26,
    2,
    27,
    2,
    5,
    2,
    28,
    2,
    0,
    2,
    8,
    2,
    111,
    -1,
    2,
    112,
    2,
    113,
    2,
    114,
    -1,
    3,
    0,
    3,
    2,
    12,
    -2,
    2,
    0,
    2,
    29,
    -3,
    0,
    536870912,
    -4,
    2,
    20,
    2,
    0,
    2,
    36,
    0,
    1,
    2,
    0,
    2,
    67,
    2,
    6,
    2,
    12,
    2,
    10,
    2,
    0,
    2,
    115,
    -1,
    3,
    0,
    4,
    2,
    10,
    2,
    23,
    2,
    116,
    2,
    7,
    2,
    0,
    2,
    117,
    2,
    0,
    2,
    118,
    2,
    119,
    2,
    120,
    2,
    0,
    2,
    9,
    3,
    0,
    9,
    2,
    21,
    2,
    30,
    2,
    31,
    2,
    121,
    2,
    122,
    -2,
    2,
    123,
    2,
    124,
    2,
    30,
    2,
    21,
    2,
    8,
    -2,
    2,
    125,
    2,
    30,
    2,
    32,
    -2,
    2,
    0,
    2,
    39,
    -2,
    0,
    4277137519,
    0,
    2269118463,
    -1,
    3,
    20,
    2,
    -1,
    2,
    33,
    2,
    38,
    2,
    0,
    3,
    30,
    2,
    2,
    35,
    2,
    19,
    -3,
    3,
    0,
    2,
    2,
    34,
    -1,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    48,
    2,
    0,
    0,
    4294950463,
    2,
    37,
    -7,
    2,
    0,
    0,
    203775,
    2,
    57,
    0,
    4026531840,
    2,
    20,
    2,
    43,
    2,
    36,
    2,
    18,
    2,
    37,
    2,
    18,
    2,
    126,
    2,
    21,
    3,
    0,
    2,
    2,
    38,
    0,
    2151677888,
    2,
    0,
    2,
    12,
    0,
    4294901764,
    2,
    144,
    2,
    0,
    2,
    58,
    2,
    56,
    0,
    5242879,
    3,
    0,
    2,
    0,
    402644511,
    -1,
    2,
    128,
    2,
    39,
    0,
    3,
    -1,
    2,
    129,
    2,
    130,
    2,
    0,
    0,
    67045375,
    2,
    40,
    0,
    4226678271,
    0,
    3766565279,
    0,
    2039759,
    2,
    132,
    2,
    41,
    0,
    1046437,
    0,
    6,
    3,
    0,
    2,
    0,
    3288270847,
    0,
    3,
    3,
    0,
    2,
    0,
    67043519,
    -5,
    2,
    0,
    0,
    4282384383,
    0,
    1056964609,
    -1,
    3,
    0,
    2,
    0,
    67043345,
    -1,
    2,
    0,
    2,
    42,
    2,
    23,
    2,
    50,
    2,
    11,
    2,
    61,
    2,
    38,
    -5,
    2,
    0,
    2,
    12,
    -3,
    3,
    0,
    2,
    0,
    2147484671,
    2,
    134,
    0,
    4190109695,
    2,
    52,
    -2,
    2,
    135,
    0,
    4244635647,
    0,
    27,
    2,
    0,
    2,
    8,
    2,
    43,
    2,
    0,
    2,
    68,
    2,
    18,
    2,
    0,
    2,
    42,
    -6,
    2,
    0,
    2,
    45,
    2,
    59,
    2,
    44,
    2,
    45,
    2,
    46,
    2,
    47,
    0,
    8388351,
    -2,
    2,
    136,
    0,
    3028287487,
    2,
    48,
    2,
    138,
    0,
    33259519,
    2,
    49,
    -9,
    2,
    21,
    0,
    4294836223,
    0,
    3355443199,
    0,
    134152199,
    -2,
    2,
    69,
    -2,
    3,
    0,
    28,
    2,
    32,
    -3,
    3,
    0,
    3,
    2,
    17,
    3,
    0,
    6,
    2,
    50,
    -81,
    2,
    18,
    3,
    0,
    2,
    2,
    36,
    3,
    0,
    33,
    2,
    25,
    2,
    30,
    3,
    0,
    124,
    2,
    12,
    3,
    0,
    18,
    2,
    38,
    -213,
    2,
    0,
    2,
    32,
    -54,
    3,
    0,
    17,
    2,
    42,
    2,
    8,
    2,
    23,
    2,
    0,
    2,
    8,
    2,
    23,
    2,
    51,
    2,
    0,
    2,
    21,
    2,
    52,
    2,
    139,
    2,
    25,
    -13,
    2,
    0,
    2,
    53,
    -6,
    3,
    0,
    2,
    -4,
    3,
    0,
    2,
    0,
    4294936575,
    2,
    0,
    0,
    4294934783,
    -2,
    0,
    196635,
    3,
    0,
    191,
    2,
    54,
    3,
    0,
    38,
    2,
    30,
    2,
    55,
    2,
    34,
    -278,
    2,
    140,
    3,
    0,
    9,
    2,
    141,
    2,
    142,
    2,
    56,
    3,
    0,
    11,
    2,
    7,
    -72,
    3,
    0,
    3,
    2,
    143,
    0,
    1677656575,
    -130,
    2,
    26,
    -16,
    2,
    0,
    2,
    24,
    2,
    38,
    -16,
    0,
    4161266656,
    0,
    4071,
    0,
    15360,
    -4,
    2,
    57,
    -13,
    3,
    0,
    2,
    2,
    58,
    2,
    0,
    2,
    145,
    2,
    146,
    2,
    62,
    2,
    0,
    2,
    147,
    2,
    148,
    2,
    149,
    3,
    0,
    10,
    2,
    150,
    2,
    151,
    2,
    22,
    3,
    58,
    2,
    3,
    152,
    2,
    3,
    59,
    2,
    0,
    4294954999,
    2,
    0,
    -16,
    2,
    0,
    2,
    92,
    2,
    0,
    0,
    2105343,
    0,
    4160749584,
    0,
    65534,
    -34,
    2,
    8,
    2,
    154,
    -6,
    0,
    4194303871,
    0,
    4294903771,
    2,
    0,
    2,
    60,
    2,
    100,
    -3,
    2,
    0,
    0,
    1073684479,
    0,
    17407,
    -9,
    2,
    18,
    2,
    17,
    2,
    0,
    2,
    32,
    -14,
    2,
    18,
    2,
    32,
    -6,
    2,
    18,
    2,
    12,
    -15,
    2,
    155,
    3,
    0,
    6,
    0,
    8323103,
    -1,
    3,
    0,
    2,
    2,
    61,
    -37,
    2,
    62,
    2,
    156,
    2,
    157,
    2,
    158,
    2,
    159,
    2,
    160,
    -105,
    2,
    26,
    -32,
    3,
    0,
    1335,
    -1,
    3,
    0,
    129,
    2,
    32,
    3,
    0,
    6,
    2,
    10,
    3,
    0,
    180,
    2,
    161,
    3,
    0,
    233,
    2,
    162,
    3,
    0,
    18,
    2,
    10,
    -77,
    3,
    0,
    16,
    2,
    10,
    -47,
    3,
    0,
    154,
    2,
    6,
    3,
    0,
    130,
    2,
    25,
    -22250,
    3,
    0,
    7,
    2,
    25,
    -6130,
    3,
    5,
    2,
    -1,
    0,
    69207040,
    3,
    44,
    2,
    3,
    0,
    14,
    2,
    63,
    2,
    64,
    -3,
    0,
    3168731136,
    0,
    4294956864,
    2,
    1,
    2,
    0,
    2,
    41,
    3,
    0,
    4,
    0,
    4294966275,
    3,
    0,
    4,
    2,
    16,
    2,
    65,
    2,
    0,
    2,
    34,
    -1,
    2,
    18,
    2,
    66,
    -1,
    2,
    0,
    0,
    2047,
    0,
    4294885376,
    3,
    0,
    2,
    0,
    3145727,
    0,
    2617294944,
    0,
    4294770688,
    2,
    25,
    2,
    67,
    3,
    0,
    2,
    0,
    131135,
    2,
    98,
    0,
    70256639,
    0,
    71303167,
    0,
    272,
    2,
    42,
    2,
    6,
    0,
    32511,
    2,
    0,
    2,
    49,
    -1,
    2,
    99,
    2,
    68,
    0,
    4278255616,
    0,
    4294836227,
    0,
    4294549473,
    0,
    600178175,
    0,
    2952806400,
    0,
    268632067,
    0,
    4294543328,
    0,
    57540095,
    0,
    1577058304,
    0,
    1835008,
    0,
    4294688736,
    2,
    70,
    2,
    69,
    0,
    33554435,
    2,
    131,
    2,
    70,
    0,
    2952790016,
    0,
    131075,
    0,
    3594373096,
    0,
    67094296,
    2,
    69,
    -1,
    0,
    4294828000,
    0,
    603979263,
    0,
    654311424,
    0,
    3,
    0,
    4294828001,
    0,
    602930687,
    0,
    1610612736,
    0,
    393219,
    0,
    4294828016,
    0,
    671088639,
    0,
    2154840064,
    0,
    4227858435,
    0,
    4236247008,
    2,
    71,
    2,
    38,
    -1,
    2,
    4,
    0,
    917503,
    2,
    38,
    -1,
    2,
    72,
    0,
    537788335,
    0,
    4026531935,
    -1,
    0,
    1,
    -1,
    2,
    33,
    2,
    73,
    0,
    7936,
    -3,
    2,
    0,
    0,
    2147485695,
    0,
    1010761728,
    0,
    4292984930,
    0,
    16387,
    2,
    0,
    2,
    15,
    2,
    22,
    3,
    0,
    10,
    2,
    74,
    2,
    0,
    2,
    75,
    2,
    76,
    2,
    77,
    2,
    0,
    2,
    78,
    2,
    0,
    2,
    12,
    -1,
    2,
    25,
    3,
    0,
    2,
    2,
    13,
    2,
    4,
    3,
    0,
    18,
    2,
    79,
    2,
    5,
    3,
    0,
    2,
    2,
    80,
    0,
    2147745791,
    3,
    19,
    2,
    0,
    122879,
    2,
    0,
    2,
    9,
    0,
    276824064,
    -2,
    3,
    0,
    2,
    2,
    42,
    2,
    0,
    0,
    4294903295,
    2,
    0,
    2,
    30,
    2,
    8,
    -1,
    2,
    18,
    2,
    51,
    2,
    0,
    2,
    81,
    2,
    49,
    -1,
    2,
    21,
    2,
    0,
    2,
    29,
    -2,
    0,
    128,
    -2,
    2,
    28,
    2,
    9,
    0,
    8160,
    -1,
    2,
    127,
    0,
    4227907585,
    2,
    0,
    2,
    37,
    2,
    0,
    2,
    50,
    0,
    4227915776,
    2,
    10,
    2,
    6,
    2,
    11,
    -1,
    0,
    74440192,
    3,
    0,
    6,
    -2,
    3,
    0,
    8,
    2,
    13,
    2,
    0,
    2,
    82,
    2,
    10,
    2,
    0,
    2,
    83,
    2,
    84,
    2,
    85,
    -3,
    2,
    86,
    2,
    14,
    -3,
    2,
    87,
    2,
    88,
    2,
    89,
    2,
    0,
    2,
    34,
    -83,
    3,
    0,
    7,
    0,
    817183,
    2,
    0,
    2,
    15,
    2,
    0,
    0,
    33023,
    2,
    21,
    3,
    90,
    2,
    -17,
    2,
    91,
    0,
    524157950,
    2,
    4,
    2,
    0,
    2,
    92,
    2,
    4,
    2,
    0,
    2,
    22,
    2,
    28,
    2,
    16,
    3,
    0,
    2,
    2,
    17,
    2,
    0,
    -1,
    2,
    18,
    -16,
    3,
    0,
    206,
    -2,
    3,
    0,
    692,
    2,
    73,
    -1,
    2,
    18,
    2,
    10,
    3,
    0,
    8,
    2,
    93,
    0,
    3072,
    2,
    0,
    0,
    2147516415,
    2,
    10,
    3,
    0,
    2,
    2,
    25,
    2,
    94,
    2,
    95,
    3,
    0,
    2,
    2,
    96,
    2,
    0,
    2,
    97,
    2,
    46,
    0,
    4294965179,
    0,
    7,
    2,
    0,
    2,
    9,
    2,
    95,
    2,
    9,
    -1,
    0,
    1761345536,
    2,
    98,
    0,
    4294901823,
    2,
    38,
    2,
    20,
    2,
    99,
    2,
    35,
    2,
    100,
    0,
    2080440287,
    2,
    0,
    2,
    34,
    2,
    153,
    0,
    3296722943,
    2,
    0,
    0,
    1046675455,
    0,
    939524101,
    0,
    1837055,
    2,
    101,
    2,
    102,
    2,
    22,
    2,
    23,
    3,
    0,
    3,
    0,
    7,
    3,
    0,
    349,
    2,
    103,
    2,
    104,
    2,
    7,
    -264,
    3,
    0,
    11,
    2,
    24,
    3,
    0,
    2,
    2,
    32,
    -1,
    0,
    2700607615,
    2,
    105,
    2,
    106,
    3,
    0,
    2,
    2,
    19,
    2,
    107,
    3,
    0,
    10,
    2,
    10,
    2,
    18,
    2,
    0,
    2,
    47,
    2,
    0,
    2,
    31,
    2,
    108,
    -3,
    2,
    109,
    3,
    0,
    3,
    2,
    20,
    -1,
    3,
    5,
    2,
    2,
    110,
    2,
    0,
    2,
    8,
    2,
    111,
    -1,
    2,
    112,
    2,
    113,
    2,
    114,
    -1,
    3,
    0,
    3,
    2,
    12,
    -2,
    2,
    0,
    2,
    29,
    -8,
    2,
    20,
    2,
    0,
    2,
    36,
    -1,
    2,
    0,
    2,
    67,
    2,
    6,
    2,
    30,
    2,
    10,
    2,
    0,
    2,
    115,
    -1,
    3,
    0,
    4,
    2,
    10,
    2,
    18,
    2,
    116,
    2,
    7,
    2,
    0,
    2,
    117,
    2,
    0,
    2,
    118,
    2,
    119,
    2,
    120,
    2,
    0,
    2,
    9,
    3,
    0,
    9,
    2,
    21,
    2,
    30,
    2,
    31,
    2,
    121,
    2,
    122,
    -2,
    2,
    123,
    2,
    124,
    2,
    30,
    2,
    21,
    2,
    8,
    -2,
    2,
    125,
    2,
    30,
    2,
    32,
    -2,
    2,
    0,
    2,
    39,
    -2,
    0,
    4277075969,
    2,
    30,
    -1,
    3,
    20,
    2,
    -1,
    2,
    33,
    2,
    126,
    2,
    0,
    3,
    30,
    2,
    2,
    35,
    2,
    19,
    -3,
    3,
    0,
    2,
    2,
    34,
    -1,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    35,
    2,
    0,
    2,
    50,
    2,
    98,
    0,
    4294934591,
    2,
    37,
    -7,
    2,
    0,
    0,
    197631,
    2,
    57,
    -1,
    2,
    20,
    2,
    43,
    2,
    37,
    2,
    18,
    0,
    3,
    2,
    18,
    2,
    126,
    2,
    21,
    2,
    127,
    2,
    54,
    -1,
    0,
    2490368,
    2,
    127,
    2,
    25,
    2,
    18,
    2,
    34,
    2,
    127,
    2,
    38,
    0,
    4294901904,
    0,
    4718591,
    2,
    127,
    2,
    35,
    0,
    335544350,
    -1,
    2,
    128,
    0,
    2147487743,
    0,
    1,
    -1,
    2,
    129,
    2,
    130,
    2,
    8,
    -1,
    2,
    131,
    2,
    70,
    0,
    3758161920,
    0,
    3,
    2,
    132,
    0,
    12582911,
    0,
    655360,
    -1,
    2,
    0,
    2,
    29,
    0,
    2147485568,
    0,
    3,
    2,
    0,
    2,
    25,
    0,
    176,
    -5,
    2,
    0,
    2,
    17,
    0,
    251658240,
    -1,
    2,
    0,
    2,
    25,
    0,
    16,
    -1,
    2,
    0,
    0,
    16779263,
    -2,
    2,
    12,
    -1,
    2,
    38,
    -5,
    2,
    0,
    2,
    133,
    -3,
    3,
    0,
    2,
    2,
    55,
    2,
    134,
    0,
    2147549183,
    0,
    2,
    -2,
    2,
    135,
    2,
    36,
    0,
    10,
    0,
    4294965249,
    0,
    67633151,
    0,
    4026597376,
    2,
    0,
    0,
    536871935,
    2,
    18,
    2,
    0,
    2,
    42,
    -6,
    2,
    0,
    0,
    1,
    2,
    59,
    2,
    17,
    0,
    1,
    2,
    46,
    2,
    25,
    -3,
    2,
    136,
    2,
    36,
    2,
    137,
    2,
    138,
    0,
    16778239,
    -10,
    2,
    35,
    0,
    4294836212,
    2,
    9,
    -3,
    2,
    69,
    -2,
    3,
    0,
    28,
    2,
    32,
    -3,
    3,
    0,
    3,
    2,
    17,
    3,
    0,
    6,
    2,
    50,
    -81,
    2,
    18,
    3,
    0,
    2,
    2,
    36,
    3,
    0,
    33,
    2,
    25,
    0,
    126,
    3,
    0,
    124,
    2,
    12,
    3,
    0,
    18,
    2,
    38,
    -213,
    2,
    10,
    -55,
    3,
    0,
    17,
    2,
    42,
    2,
    8,
    2,
    18,
    2,
    0,
    2,
    8,
    2,
    18,
    2,
    60,
    2,
    0,
    2,
    25,
    2,
    50,
    2,
    139,
    2,
    25,
    -13,
    2,
    0,
    2,
    73,
    -6,
    3,
    0,
    2,
    -4,
    3,
    0,
    2,
    0,
    67583,
    -1,
    2,
    107,
    -2,
    0,
    11,
    3,
    0,
    191,
    2,
    54,
    3,
    0,
    38,
    2,
    30,
    2,
    55,
    2,
    34,
    -278,
    2,
    140,
    3,
    0,
    9,
    2,
    141,
    2,
    142,
    2,
    56,
    3,
    0,
    11,
    2,
    7,
    -72,
    3,
    0,
    3,
    2,
    143,
    2,
    144,
    -187,
    3,
    0,
    2,
    2,
    58,
    2,
    0,
    2,
    145,
    2,
    146,
    2,
    62,
    2,
    0,
    2,
    147,
    2,
    148,
    2,
    149,
    3,
    0,
    10,
    2,
    150,
    2,
    151,
    2,
    22,
    3,
    58,
    2,
    3,
    152,
    2,
    3,
    59,
    2,
    2,
    153,
    -57,
    2,
    8,
    2,
    154,
    -7,
    2,
    18,
    2,
    0,
    2,
    60,
    -4,
    2,
    0,
    0,
    1065361407,
    0,
    16384,
    -9,
    2,
    18,
    2,
    60,
    2,
    0,
    2,
    133,
    -14,
    2,
    18,
    2,
    133,
    -6,
    2,
    18,
    0,
    81919,
    -15,
    2,
    155,
    3,
    0,
    6,
    2,
    126,
    -1,
    3,
    0,
    2,
    0,
    2063,
    -37,
    2,
    62,
    2,
    156,
    2,
    157,
    2,
    158,
    2,
    159,
    2,
    160,
    -138,
    3,
    0,
    1335,
    -1,
    3,
    0,
    129,
    2,
    32,
    3,
    0,
    6,
    2,
    10,
    3,
    0,
    180,
    2,
    161,
    3,
    0,
    233,
    2,
    162,
    3,
    0,
    18,
    2,
    10,
    -77,
    3,
    0,
    16,
    2,
    10,
    -47,
    3,
    0,
    154,
    2,
    6,
    3,
    0,
    130,
    2,
    25,
    -28386
], [
    4294967295,
    4294967291,
    4092460543,
    4294828031,
    4294967294,
    134217726,
    4294903807,
    268435455,
    2147483647,
    1048575,
    1073741823,
    3892314111,
    134217727,
    1061158911,
    536805376,
    4294910143,
    4294901759,
    32767,
    4294901760,
    262143,
    536870911,
    8388607,
    4160749567,
    4294902783,
    4294918143,
    65535,
    67043328,
    2281701374,
    4294967264,
    2097151,
    4194303,
    255,
    67108863,
    4294967039,
    511,
    524287,
    131071,
    63,
    127,
    3238002687,
    4294549487,
    4290772991,
    33554431,
    4294901888,
    4286578687,
    67043329,
    4294705152,
    4294770687,
    67043583,
    1023,
    15,
    2047999,
    67043343,
    67051519,
    16777215,
    2147483648,
    4294902000,
    28,
    4292870143,
    4294966783,
    16383,
    67047423,
    4294967279,
    262083,
    20511,
    41943039,
    493567,
    4294959104,
    603979775,
    65536,
    602799615,
    805044223,
    4294965206,
    8191,
    1031749119,
    4294917631,
    2134769663,
    4286578493,
    4282253311,
    4294942719,
    33540095,
    4294905855,
    2868854591,
    1608515583,
    265232348,
    534519807,
    2147614720,
    1060109444,
    4093640016,
    17376,
    2139062143,
    224,
    4169138175,
    4294909951,
    4286578688,
    4294967292,
    4294965759,
    535511039,
    4294966272,
    4294967280,
    32768,
    8289918,
    4294934399,
    4294901775,
    4294965375,
    1602223615,
    4294967259,
    4294443008,
    268369920,
    4292804608,
    4294967232,
    486341884,
    4294963199,
    3087007615,
    1073692671,
    4128527,
    4279238655,
    4294902015,
    4160684047,
    4290246655,
    469499899,
    4294967231,
    134086655,
    4294966591,
    2445279231,
    3670015,
    31,
    4294967288,
    4294705151,
    3221208447,
    4294902271,
    4294549472,
    4294921215,
    4095,
    4285526655,
    4294966527,
    4294966143,
    64,
    4294966719,
    3774873592,
    1877934080,
    262151,
    2555904,
    536807423,
    67043839,
    3758096383,
    3959414372,
    3755993023,
    2080374783,
    4294835295,
    4294967103,
    4160749565,
    4294934527,
    4087,
    2016,
    2147446655,
    184024726,
    2862017156,
    1593309078,
    268434431,
    268434414,
    4294901763,
    4294901761
]);
const isIDContinue = (code)=>(unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1) !== 0;
const isIDStart = (code)=>(unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
function advanceChar(parser) {
    parser.column++;
    return parser.currentChar = parser.source.charCodeAt(++parser.index);
}
function consumePossibleSurrogatePair(parser) {
    const hi = parser.currentChar;
    if ((hi & 0xfc00) !== 55296) return 0;
    const lo = parser.source.charCodeAt(parser.index + 1);
    if ((lo & 0xfc00) !== 56320) return 0;
    return 65536 + ((hi & 0x3ff) << 10) + (lo & 0x3ff);
}
function consumeLineFeed(parser, state) {
    parser.currentChar = parser.source.charCodeAt(++parser.index);
    parser.flags |= 1;
    if ((state & 4) === 0) {
        parser.column = 0;
        parser.line++;
    }
}
function scanNewLine(parser) {
    parser.flags |= 1;
    parser.currentChar = parser.source.charCodeAt(++parser.index);
    parser.column = 0;
    parser.line++;
}
function isExoticECMAScriptWhitespace(ch) {
    return ch === 160 || ch === 65279 || ch === 133 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 8201 || ch === 65519;
}
function toHex(code) {
    return code < 65 ? code - 48 : code - 65 + 10 & 0xf;
}
function convertTokenType(t) {
    switch(t){
        case 134283266:
            return 'NumericLiteral';
        case 134283267:
            return 'StringLiteral';
        case 86021:
        case 86022:
            return 'BooleanLiteral';
        case 86023:
            return 'NullLiteral';
        case 65540:
            return 'RegularExpression';
        case 67174408:
        case 67174409:
        case 131:
            return 'TemplateLiteral';
        default:
            if ((t & 143360) === 143360) return 'Identifier';
            if ((t & 4096) === 4096) return 'Keyword';
            return 'Punctuator';
    }
}
const CharTypes = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8 | 1024,
    0,
    0,
    8 | 2048,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8192,
    0,
    1 | 2,
    0,
    0,
    8192,
    0,
    0,
    0,
    256,
    0,
    256 | 32768,
    0,
    0,
    2 | 16 | 128 | 32 | 64,
    2 | 16 | 128 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 32 | 64,
    2 | 16 | 512 | 64,
    2 | 16 | 512 | 64,
    0,
    0,
    16384,
    0,
    0,
    0,
    0,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    0,
    1,
    0,
    0,
    1 | 2 | 4096,
    0,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4 | 64,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    1 | 2 | 4,
    16384,
    0,
    0,
    0,
    0
];
const isIdStart = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0
];
const isIdPart = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0
];
function isIdentifierStart(code) {
    return code <= 0x7F ? isIdStart[code] > 0 : isIDStart(code);
}
function isIdentifierPart(code) {
    return code <= 0x7F ? isIdPart[code] > 0 : isIDContinue(code) || code === 8204 || code === 8205;
}
const CommentTypes = [
    'SingleLine',
    'MultiLine',
    'HTMLOpen',
    'HTMLClose',
    'HashbangComment'
];
function skipHashBang(parser) {
    const { source } = parser;
    if (parser.currentChar === 35 && source.charCodeAt(parser.index + 1) === 33) {
        advanceChar(parser);
        advanceChar(parser);
        skipSingleLineComment(parser, source, 0, 4, parser.tokenStart);
    }
}
function skipSingleHTMLComment(parser, source, state, context, type, start) {
    if (context & 2) parser.report(0);
    return skipSingleLineComment(parser, source, state, type, start);
}
function skipSingleLineComment(parser, source, state, type, start) {
    const { index } = parser;
    parser.tokenIndex = parser.index;
    parser.tokenLine = parser.line;
    parser.tokenColumn = parser.column;
    while(parser.index < parser.end){
        if (CharTypes[parser.currentChar] & 8) {
            const isCR = parser.currentChar === 13;
            scanNewLine(parser);
            if (isCR && parser.index < parser.end && parser.currentChar === 10) parser.currentChar = source.charCodeAt(++parser.index);
            break;
        } else if ((parser.currentChar ^ 8232) <= 1) {
            scanNewLine(parser);
            break;
        }
        advanceChar(parser);
        parser.tokenIndex = parser.index;
        parser.tokenLine = parser.line;
        parser.tokenColumn = parser.column;
    }
    if (parser.options.onComment) {
        const loc = {
            start: {
                line: start.line,
                column: start.column
            },
            end: {
                line: parser.tokenLine,
                column: parser.tokenColumn
            }
        };
        parser.options.onComment(CommentTypes[type & 0xff], source.slice(index, parser.tokenIndex), start.index, parser.tokenIndex, loc);
    }
    return state | 1;
}
function skipMultiLineComment(parser, source, state) {
    const { index } = parser;
    while(parser.index < parser.end){
        if (parser.currentChar < 0x2b) {
            let skippedOneAsterisk = false;
            while(parser.currentChar === 42){
                if (!skippedOneAsterisk) {
                    state &= -5;
                    skippedOneAsterisk = true;
                }
                if (advanceChar(parser) === 47) {
                    advanceChar(parser);
                    if (parser.options.onComment) {
                        const loc = {
                            start: {
                                line: parser.tokenLine,
                                column: parser.tokenColumn
                            },
                            end: {
                                line: parser.line,
                                column: parser.column
                            }
                        };
                        parser.options.onComment(CommentTypes[1 & 0xff], source.slice(index, parser.index - 2), index - 2, parser.index, loc);
                    }
                    parser.tokenIndex = parser.index;
                    parser.tokenLine = parser.line;
                    parser.tokenColumn = parser.column;
                    return state;
                }
            }
            if (skippedOneAsterisk) {
                continue;
            }
            if (CharTypes[parser.currentChar] & 8) {
                if (parser.currentChar === 13) {
                    state |= 1 | 4;
                    scanNewLine(parser);
                } else {
                    consumeLineFeed(parser, state);
                    state = state & -5 | 1;
                }
            } else {
                advanceChar(parser);
            }
        } else if ((parser.currentChar ^ 8232) <= 1) {
            state = state & -5 | 1;
            scanNewLine(parser);
        } else {
            state &= -5;
            advanceChar(parser);
        }
    }
    parser.report(18);
}
var RegexState;
(function(RegexState) {
    RegexState[RegexState["Empty"] = 0] = "Empty";
    RegexState[RegexState["Escape"] = 1] = "Escape";
    RegexState[RegexState["Class"] = 2] = "Class";
})(RegexState || (RegexState = {}));
var RegexFlags;
(function(RegexFlags) {
    RegexFlags[RegexFlags["Empty"] = 0] = "Empty";
    RegexFlags[RegexFlags["IgnoreCase"] = 1] = "IgnoreCase";
    RegexFlags[RegexFlags["Global"] = 2] = "Global";
    RegexFlags[RegexFlags["Multiline"] = 4] = "Multiline";
    RegexFlags[RegexFlags["Unicode"] = 16] = "Unicode";
    RegexFlags[RegexFlags["Sticky"] = 8] = "Sticky";
    RegexFlags[RegexFlags["DotAll"] = 32] = "DotAll";
    RegexFlags[RegexFlags["Indices"] = 64] = "Indices";
    RegexFlags[RegexFlags["UnicodeSets"] = 128] = "UnicodeSets";
})(RegexFlags || (RegexFlags = {}));
function scanRegularExpression(parser) {
    const bodyStart = parser.index;
    let preparseState = RegexState.Empty;
    loop: while(true){
        const ch = parser.currentChar;
        advanceChar(parser);
        if (preparseState & RegexState.Escape) {
            preparseState &= ~RegexState.Escape;
        } else {
            switch(ch){
                case 47:
                    if (!preparseState) break loop;
                    else break;
                case 92:
                    preparseState |= RegexState.Escape;
                    break;
                case 91:
                    preparseState |= RegexState.Class;
                    break;
                case 93:
                    preparseState &= RegexState.Escape;
                    break;
            }
        }
        if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) {
            parser.report(34);
        }
        if (parser.index >= parser.source.length) {
            return parser.report(34);
        }
    }
    const bodyEnd = parser.index - 1;
    let mask = RegexFlags.Empty;
    let char = parser.currentChar;
    const { index: flagStart } = parser;
    while(isIdentifierPart(char)){
        switch(char){
            case 103:
                if (mask & RegexFlags.Global) parser.report(36, 'g');
                mask |= RegexFlags.Global;
                break;
            case 105:
                if (mask & RegexFlags.IgnoreCase) parser.report(36, 'i');
                mask |= RegexFlags.IgnoreCase;
                break;
            case 109:
                if (mask & RegexFlags.Multiline) parser.report(36, 'm');
                mask |= RegexFlags.Multiline;
                break;
            case 117:
                if (mask & RegexFlags.Unicode) parser.report(36, 'u');
                if (mask & RegexFlags.UnicodeSets) parser.report(36, 'vu');
                mask |= RegexFlags.Unicode;
                break;
            case 118:
                if (mask & RegexFlags.Unicode) parser.report(36, 'uv');
                if (mask & RegexFlags.UnicodeSets) parser.report(36, 'v');
                mask |= RegexFlags.UnicodeSets;
                break;
            case 121:
                if (mask & RegexFlags.Sticky) parser.report(36, 'y');
                mask |= RegexFlags.Sticky;
                break;
            case 115:
                if (mask & RegexFlags.DotAll) parser.report(36, 's');
                mask |= RegexFlags.DotAll;
                break;
            case 100:
                if (mask & RegexFlags.Indices) parser.report(36, 'd');
                mask |= RegexFlags.Indices;
                break;
            default:
                parser.report(35);
        }
        char = advanceChar(parser);
    }
    const flags = parser.source.slice(flagStart, parser.index);
    const pattern = parser.source.slice(bodyStart, bodyEnd);
    parser.tokenRegExp = {
        pattern,
        flags
    };
    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    parser.tokenValue = validate(parser, pattern, flags);
    return 65540;
}
function validate(parser, pattern, flags) {
    try {
        return new RegExp(pattern, flags);
    } catch  {
        try {
            new RegExp(pattern, flags);
            return null;
        } catch  {
            parser.report(34);
        }
    }
}
function scanString(parser, context, quote) {
    const { index: start } = parser;
    let ret = '';
    let char = advanceChar(parser);
    let marker = parser.index;
    while((CharTypes[char] & 8) === 0){
        if (char === quote) {
            ret += parser.source.slice(marker, parser.index);
            advanceChar(parser);
            if (parser.options.raw) parser.tokenRaw = parser.source.slice(start, parser.index);
            parser.tokenValue = ret;
            return 134283267;
        }
        if ((char & 8) === 8 && char === 92) {
            ret += parser.source.slice(marker, parser.index);
            char = advanceChar(parser);
            if (char < 0x7f || char === 8232 || char === 8233) {
                const code = parseEscape(parser, context, char);
                if (code >= 0) ret += String.fromCodePoint(code);
                else handleStringError(parser, code, 0);
            } else {
                ret += String.fromCodePoint(char);
            }
            marker = parser.index + 1;
        } else if (char === 8232 || char === 8233) {
            parser.column = -1;
            parser.line++;
        }
        if (parser.index >= parser.end) parser.report(16);
        char = advanceChar(parser);
    }
    parser.report(16);
}
function parseEscape(parser, context, first, isTemplate = 0) {
    switch(first){
        case 98:
            return 8;
        case 102:
            return 12;
        case 114:
            return 13;
        case 110:
            return 10;
        case 116:
            return 9;
        case 118:
            return 11;
        case 13:
            {
                if (parser.index < parser.end) {
                    const nextChar = parser.source.charCodeAt(parser.index + 1);
                    if (nextChar === 10) {
                        parser.index = parser.index + 1;
                        parser.currentChar = nextChar;
                    }
                }
            }
        case 10:
        case 8232:
        case 8233:
            parser.column = -1;
            parser.line++;
            return -1;
        case 48:
        case 49:
        case 50:
        case 51:
            {
                let code = first - 48;
                let index = parser.index + 1;
                let column = parser.column + 1;
                if (index < parser.end) {
                    const next = parser.source.charCodeAt(index);
                    if ((CharTypes[next] & 32) === 0) {
                        if (code !== 0 || CharTypes[next] & 512) {
                            if (context & 1 || isTemplate) return -2;
                            parser.flags |= 64;
                        }
                    } else if (context & 1 || isTemplate) {
                        return -2;
                    } else {
                        parser.currentChar = next;
                        code = code << 3 | next - 48;
                        index++;
                        column++;
                        if (index < parser.end) {
                            const next = parser.source.charCodeAt(index);
                            if (CharTypes[next] & 32) {
                                parser.currentChar = next;
                                code = code << 3 | next - 48;
                                index++;
                                column++;
                            }
                        }
                        parser.flags |= 64;
                    }
                    parser.index = index - 1;
                    parser.column = column - 1;
                }
                return code;
            }
        case 52:
        case 53:
        case 54:
        case 55:
            {
                if (isTemplate || context & 1) return -2;
                let code = first - 48;
                const index = parser.index + 1;
                const column = parser.column + 1;
                if (index < parser.end) {
                    const next = parser.source.charCodeAt(index);
                    if (CharTypes[next] & 32) {
                        code = code << 3 | next - 48;
                        parser.currentChar = next;
                        parser.index = index;
                        parser.column = column;
                    }
                }
                parser.flags |= 64;
                return code;
            }
        case 120:
            {
                const ch1 = advanceChar(parser);
                if ((CharTypes[ch1] & 64) === 0) return -4;
                const hi = toHex(ch1);
                const ch2 = advanceChar(parser);
                if ((CharTypes[ch2] & 64) === 0) return -4;
                const lo = toHex(ch2);
                return hi << 4 | lo;
            }
        case 117:
            {
                const ch = advanceChar(parser);
                if (parser.currentChar === 123) {
                    let code = 0;
                    while((CharTypes[advanceChar(parser)] & 64) !== 0){
                        code = code << 4 | toHex(parser.currentChar);
                        if (code > 1114111) return -5;
                    }
                    if (parser.currentChar < 1 || parser.currentChar !== 125) {
                        return -4;
                    }
                    return code;
                } else {
                    if ((CharTypes[ch] & 64) === 0) return -4;
                    const ch2 = parser.source.charCodeAt(parser.index + 1);
                    if ((CharTypes[ch2] & 64) === 0) return -4;
                    const ch3 = parser.source.charCodeAt(parser.index + 2);
                    if ((CharTypes[ch3] & 64) === 0) return -4;
                    const ch4 = parser.source.charCodeAt(parser.index + 3);
                    if ((CharTypes[ch4] & 64) === 0) return -4;
                    parser.index += 3;
                    parser.column += 3;
                    parser.currentChar = parser.source.charCodeAt(parser.index);
                    return toHex(ch) << 12 | toHex(ch2) << 8 | toHex(ch3) << 4 | toHex(ch4);
                }
            }
        case 56:
        case 57:
            if (isTemplate || !parser.options.webcompat || context & 1) return -3;
            parser.flags |= 4096;
        default:
            return first;
    }
}
function handleStringError(parser, code, isTemplate) {
    switch(code){
        case -1:
            return;
        case -2:
            parser.report(isTemplate ? 2 : 1);
        case -3:
            parser.report(isTemplate ? 3 : 14);
        case -4:
            parser.report(7);
        case -5:
            parser.report(104);
    }
}
function scanTemplate(parser, context) {
    const { index: start } = parser;
    let token = 67174409;
    let ret = '';
    let char = advanceChar(parser);
    while(char !== 96){
        if (char === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
            advanceChar(parser);
            token = 67174408;
            break;
        } else if (char === 92) {
            char = advanceChar(parser);
            if (char > 0x7e) {
                ret += String.fromCodePoint(char);
            } else {
                const { index, line, column } = parser;
                const code = parseEscape(parser, context | 1, char, 1);
                if (code >= 0) {
                    ret += String.fromCodePoint(code);
                } else if (code !== -1 && context & 64) {
                    parser.index = index;
                    parser.line = line;
                    parser.column = column;
                    ret = null;
                    char = scanBadTemplate(parser, char);
                    if (char < 0) token = 67174408;
                    break;
                } else {
                    handleStringError(parser, code, 1);
                }
            }
        } else if (parser.index < parser.end) {
            if (char === 13 && parser.source.charCodeAt(parser.index) === 10) {
                ret += String.fromCodePoint(char);
                parser.currentChar = parser.source.charCodeAt(++parser.index);
            }
            if ((char & 83) < 3 && char === 10 || (char ^ 8232) <= 1) {
                parser.column = -1;
                parser.line++;
            }
            ret += String.fromCodePoint(char);
        }
        if (parser.index >= parser.end) parser.report(17);
        char = advanceChar(parser);
    }
    advanceChar(parser);
    parser.tokenValue = ret;
    parser.tokenRaw = parser.source.slice(start + 1, parser.index - (token === 67174409 ? 1 : 2));
    return token;
}
function scanBadTemplate(parser, ch) {
    while(ch !== 96){
        switch(ch){
            case 36:
                {
                    const index = parser.index + 1;
                    if (index < parser.end && parser.source.charCodeAt(index) === 123) {
                        parser.index = index;
                        parser.column++;
                        return -ch;
                    }
                    break;
                }
            case 10:
            case 8232:
            case 8233:
                parser.column = -1;
                parser.line++;
        }
        if (parser.index >= parser.end) parser.report(17);
        ch = advanceChar(parser);
    }
    return ch;
}
function scanTemplateTail(parser, context) {
    if (parser.index >= parser.end) parser.report(0);
    parser.index--;
    parser.column--;
    return scanTemplate(parser, context);
}
const errorMessages = {
    [0]: 'Unexpected token',
    [30]: "Unexpected token: '%0'",
    [1]: 'Octal escape sequences are not allowed in strict mode',
    [2]: 'Octal escape sequences are not allowed in template strings',
    [3]: '\\8 and \\9 are not allowed in template strings',
    [4]: 'Private identifier #%0 is not defined',
    [5]: 'Illegal Unicode escape sequence',
    [6]: 'Invalid code point %0',
    [7]: 'Invalid hexadecimal escape sequence',
    [9]: 'Octal literals are not allowed in strict mode',
    [8]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
    [10]: 'Expected number in radix %0',
    [151]: 'Invalid left-hand side assignment to a destructible right-hand side',
    [11]: 'Non-number found after exponent indicator',
    [12]: 'Invalid BigIntLiteral',
    [13]: 'No identifiers allowed directly after numeric literal',
    [14]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
    [15]: 'Escapes \\8 or \\9 are not allowed in strict mode',
    [16]: 'Unterminated string literal',
    [17]: 'Unterminated template literal',
    [18]: 'Multiline comment was not closed properly',
    [19]: 'The identifier contained dynamic unicode escape that was not closed',
    [20]: "Illegal character '%0'",
    [21]: 'Missing hexadecimal digits',
    [22]: 'Invalid implicit octal',
    [23]: 'Invalid line break in string literal',
    [24]: 'Only unicode escapes are legal in identifier names',
    [25]: "Expected '%0'",
    [26]: 'Invalid left-hand side in assignment',
    [27]: 'Invalid left-hand side in async arrow',
    [28]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
    [29]: 'Member access on super must be in a method',
    [31]: 'Await expression not allowed in formal parameter',
    [32]: 'Yield expression not allowed in formal parameter',
    [95]: "Unexpected token: 'escaped keyword'",
    [33]: 'Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses',
    [123]: 'Async functions can only be declared at the top level or inside a block',
    [34]: 'Unterminated regular expression',
    [35]: 'Unexpected regular expression flag',
    [36]: "Duplicate regular expression flag '%0'",
    [37]: '%0 functions must have exactly %1 argument%2',
    [38]: 'Setter function argument must not be a rest parameter',
    [39]: '%0 declaration must have a name in this context',
    [40]: 'Function name may not contain any reserved words or be eval or arguments in strict mode',
    [41]: 'The rest operator is missing an argument',
    [42]: 'A getter cannot be a generator',
    [43]: 'A setter cannot be a generator',
    [44]: 'A computed property name must be followed by a colon or paren',
    [134]: 'Object literal keys that are strings or numbers must be a method or have a colon',
    [46]: 'Found `* async x(){}` but this should be `async * x(){}`',
    [45]: 'Getters and setters can not be generators',
    [47]: "'%0' can not be generator method",
    [48]: "No line break is allowed after '=>'",
    [49]: 'The left-hand side of the arrow can only be destructed through assignment',
    [50]: 'The binding declaration is not destructible',
    [51]: 'Async arrow can not be followed by new expression',
    [52]: "Classes may not have a static property named 'prototype'",
    [53]: 'Class constructor may not be a %0',
    [54]: 'Duplicate constructor method in class',
    [55]: 'Invalid increment/decrement operand',
    [56]: 'Invalid use of `new` keyword on an increment/decrement expression',
    [57]: '`=>` is an invalid assignment target',
    [58]: 'Rest element may not have a trailing comma',
    [59]: 'Missing initializer in %0 declaration',
    [60]: "'for-%0' loop head declarations can not have an initializer",
    [61]: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
    [62]: 'Invalid shorthand property initializer',
    [63]: 'Property name __proto__ appears more than once in object literal',
    [64]: 'Let is disallowed as a lexically bound name',
    [65]: "Invalid use of '%0' inside new expression",
    [66]: "Illegal 'use strict' directive in function with non-simple parameter list",
    [67]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
    [68]: 'Illegal continue statement',
    [69]: 'Illegal break statement',
    [70]: 'Cannot have `let[...]` as a var name in strict mode',
    [71]: 'Invalid destructuring assignment target',
    [72]: 'Rest parameter may not have a default initializer',
    [73]: 'The rest argument must the be last parameter',
    [74]: 'Invalid rest argument',
    [76]: 'In strict mode code, functions can only be declared at top level or inside a block',
    [77]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
    [78]: 'Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
    [79]: "Class declaration can't appear in single-statement context",
    [80]: 'Invalid left-hand side in for-%0',
    [81]: 'Invalid assignment in for-%0',
    [82]: 'for await (... of ...) is only valid in async functions and async generators',
    [83]: 'The first token after the template expression should be a continuation of the template',
    [85]: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
    [84]: '`let \n [` is a restricted production at the start of a statement',
    [86]: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
    [87]: 'Catch clause parameter does not support default values',
    [88]: 'Missing catch or finally after try',
    [89]: 'More than one default clause in switch statement',
    [90]: 'Illegal newline after throw',
    [91]: 'Strict mode code may not include a with statement',
    [92]: 'Illegal return statement',
    [93]: 'The left hand side of the for-header binding declaration is not destructible',
    [94]: 'new.target only allowed within functions or static blocks',
    [96]: "'#' not followed by identifier",
    [102]: 'Invalid keyword',
    [101]: "Can not use 'let' as a class name",
    [100]: "'A lexical declaration can't define a 'let' binding",
    [99]: 'Can not use `let` as variable name in strict mode',
    [97]: "'%0' may not be used as an identifier in this context",
    [98]: 'Await is only valid in async functions',
    [103]: 'The %0 keyword can only be used with the module goal',
    [104]: 'Unicode codepoint must not be greater than 0x10FFFF',
    [105]: '%0 source must be string',
    [106]: 'Only a identifier or string can be used to indicate alias',
    [107]: "Only '*' or '{...}' can be imported after default",
    [108]: 'Trailing decorator may be followed by method',
    [109]: "Decorators can't be used with a constructor",
    [110]: 'Can not use `await` as identifier in module or async func',
    [111]: 'Can not use `await` as identifier in module',
    [112]: 'HTML comments are only allowed with web compatibility (Annex B)',
    [113]: "The identifier 'let' must not be in expression position in strict mode",
    [114]: 'Cannot assign to `eval` and `arguments` in strict mode',
    [115]: "The left-hand side of a for-of loop may not start with 'let'",
    [116]: 'Block body arrows can not be immediately invoked without a group',
    [117]: 'Block body arrows can not be immediately accessed without a group',
    [118]: 'Unexpected strict mode reserved word',
    [119]: 'Unexpected eval or arguments in strict mode',
    [120]: 'Decorators must not be followed by a semicolon',
    [121]: 'Calling delete on expression not allowed in strict mode',
    [122]: 'Pattern can not have a tail',
    [124]: 'Can not have a `yield` expression on the left side of a ternary',
    [125]: 'An arrow function can not have a postfix update operator',
    [126]: 'Invalid object literal key character after generator star',
    [127]: 'Private fields can not be deleted',
    [129]: 'Classes may not have a field called constructor',
    [128]: 'Classes may not have a private element named constructor',
    [130]: 'A class field initializer or static block may not contain arguments',
    [131]: 'Generators can only be declared at the top level or inside a block',
    [132]: 'Async methods are a restricted production and cannot have a newline following it',
    [133]: 'Unexpected character after object literal property name',
    [135]: 'Invalid key token',
    [136]: "Label '%0' has already been declared",
    [137]: 'continue statement must be nested within an iteration statement',
    [138]: "Undefined label '%0'",
    [139]: 'Trailing comma is disallowed inside import(...) arguments',
    [140]: 'Invalid binding in JSON import',
    [141]: 'import() requires exactly one argument',
    [142]: 'Cannot use new with import(...)',
    [143]: '... is not allowed in import()',
    [144]: "Expected '=>'",
    [145]: "Duplicate binding '%0'",
    [146]: 'Duplicate private identifier #%0',
    [147]: "Cannot export a duplicate name '%0'",
    [150]: 'Duplicate %0 for-binding',
    [148]: "Exported binding '%0' needs to refer to a top-level declared variable",
    [149]: 'Unexpected private field',
    [153]: 'Numeric separators are not allowed at the end of numeric literals',
    [152]: 'Only one underscore is allowed as numeric separator',
    [154]: 'JSX value should be either an expression or a quoted JSX text',
    [155]: 'Expected corresponding JSX closing tag for %0',
    [156]: 'Adjacent JSX elements must be wrapped in an enclosing tag',
    [157]: "JSX attributes must only be assigned a non-empty 'expression'",
    [158]: "'%0' has already been declared",
    [159]: "'%0' shadowed a catch clause binding",
    [160]: 'Dot property must be an identifier',
    [161]: 'Encountered invalid input after spread/rest argument',
    [162]: 'Catch without try',
    [163]: 'Finally without try',
    [164]: 'Expected corresponding closing tag for JSX fragment',
    [165]: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
    [166]: 'Invalid tagged template on optional chain',
    [167]: 'Invalid optional chain from super property',
    [168]: 'Invalid optional chain from new expression',
    [169]: 'Cannot use "import.meta" outside a module',
    [170]: 'Leading decorators must be attached to a class declaration',
    [171]: 'An export name cannot include a lone surrogate, found %0',
    [172]: 'A string literal cannot be used as an exported binding without `from`',
    [173]: "Private fields can't be accessed on super",
    [174]: "The only valid meta property for import is 'import.meta'",
    [175]: "'import.meta' must not contain escaped characters",
    [176]: 'cannot use "await" as identifier inside an async function',
    [177]: 'cannot use "await" in static blocks'
};
class ParseError extends SyntaxError {
    start;
    end;
    range;
    loc;
    description;
    constructor(start, end, type, ...params){
        const description = errorMessages[type].replace(/%(\d+)/g, (_, i)=>params[i]);
        const message = '[' + start.line + ':' + start.column + '-' + end.line + ':' + end.column + ']: ' + description;
        super(message);
        this.start = start.index;
        this.end = end.index;
        this.range = [
            start.index,
            end.index
        ];
        this.loc = {
            start: {
                line: start.line,
                column: start.column
            },
            end: {
                line: end.line,
                column: end.column
            }
        };
        this.description = description;
    }
}
function scanNumber(parser, context, kind) {
    let char = parser.currentChar;
    let value = 0;
    let digit = 9;
    let atStart = kind & 64 ? 0 : 1;
    let digits = 0;
    let allowSeparator = 0;
    if (kind & 64) {
        value = '.' + scanDecimalDigitsOrSeparator(parser, char);
        char = parser.currentChar;
        if (char === 110) parser.report(12);
    } else {
        if (char === 48) {
            char = advanceChar(parser);
            if ((char | 32) === 120) {
                kind = 8 | 128;
                char = advanceChar(parser);
                while(CharTypes[char] & (64 | 4096)){
                    if (char === 95) {
                        if (!allowSeparator) parser.report(152);
                        allowSeparator = 0;
                        char = advanceChar(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 0x10 + toHex(char);
                    digits++;
                    char = advanceChar(parser);
                }
                if (digits === 0 || !allowSeparator) {
                    parser.report(digits === 0 ? 21 : 153);
                }
            } else if ((char | 32) === 111) {
                kind = 4 | 128;
                char = advanceChar(parser);
                while(CharTypes[char] & (32 | 4096)){
                    if (char === 95) {
                        if (!allowSeparator) {
                            parser.report(152);
                        }
                        allowSeparator = 0;
                        char = advanceChar(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 8 + (char - 48);
                    digits++;
                    char = advanceChar(parser);
                }
                if (digits === 0 || !allowSeparator) {
                    parser.report(digits === 0 ? 0 : 153);
                }
            } else if ((char | 32) === 98) {
                kind = 2 | 128;
                char = advanceChar(parser);
                while(CharTypes[char] & (128 | 4096)){
                    if (char === 95) {
                        if (!allowSeparator) {
                            parser.report(152);
                        }
                        allowSeparator = 0;
                        char = advanceChar(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 2 + (char - 48);
                    digits++;
                    char = advanceChar(parser);
                }
                if (digits === 0 || !allowSeparator) {
                    parser.report(digits === 0 ? 0 : 153);
                }
            } else if (CharTypes[char] & 32) {
                if (context & 1) parser.report(1);
                kind = 1;
                while(CharTypes[char] & 16){
                    if (CharTypes[char] & 512) {
                        kind = 32;
                        atStart = 0;
                        break;
                    }
                    value = value * 8 + (char - 48);
                    char = advanceChar(parser);
                }
            } else if (CharTypes[char] & 512) {
                if (context & 1) parser.report(1);
                parser.flags |= 64;
                kind = 32;
            } else if (char === 95) {
                parser.report(0);
            }
        }
        if (kind & 48) {
            if (atStart) {
                while(digit >= 0 && CharTypes[char] & (16 | 4096)){
                    if (char === 95) {
                        char = advanceChar(parser);
                        if (char === 95 || kind & 32) {
                            throw new ParseError(parser.currentLocation, {
                                index: parser.index + 1,
                                line: parser.line,
                                column: parser.column
                            }, 152);
                        }
                        allowSeparator = 1;
                        continue;
                    }
                    allowSeparator = 0;
                    value = 10 * value + (char - 48);
                    char = advanceChar(parser);
                    --digit;
                }
                if (allowSeparator) {
                    throw new ParseError(parser.currentLocation, {
                        index: parser.index + 1,
                        line: parser.line,
                        column: parser.column
                    }, 153);
                }
                if (digit >= 0 && !isIdentifierStart(char) && char !== 46) {
                    parser.tokenValue = value;
                    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
                    return 134283266;
                }
            }
            value += scanDecimalDigitsOrSeparator(parser, char);
            char = parser.currentChar;
            if (char === 46) {
                if (advanceChar(parser) === 95) parser.report(0);
                kind = 64;
                value += '.' + scanDecimalDigitsOrSeparator(parser, parser.currentChar);
                char = parser.currentChar;
            }
        }
    }
    const end = parser.index;
    let isBigInt = 0;
    if (char === 110 && kind & 128) {
        isBigInt = 1;
        char = advanceChar(parser);
    } else {
        if ((char | 32) === 101) {
            char = advanceChar(parser);
            if (CharTypes[char] & 256) char = advanceChar(parser);
            const { index } = parser;
            if ((CharTypes[char] & 16) === 0) parser.report(11);
            value += parser.source.substring(end, index) + scanDecimalDigitsOrSeparator(parser, char);
            char = parser.currentChar;
        }
    }
    if (parser.index < parser.end && CharTypes[char] & 16 || isIdentifierStart(char)) {
        parser.report(13);
    }
    if (isBigInt) {
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
        parser.tokenValue = BigInt(parser.tokenRaw.slice(0, -1).replaceAll('_', ''));
        return 134283388;
    }
    parser.tokenValue = kind & (1 | 2 | 8 | 4) ? value : kind & 32 ? parseFloat(parser.source.substring(parser.tokenIndex, parser.index)) : +value;
    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    return 134283266;
}
function scanDecimalDigitsOrSeparator(parser, char) {
    let allowSeparator = 0;
    let start = parser.index;
    let ret = '';
    while(CharTypes[char] & (16 | 4096)){
        if (char === 95) {
            const { index } = parser;
            char = advanceChar(parser);
            if (char === 95) {
                throw new ParseError(parser.currentLocation, {
                    index: parser.index + 1,
                    line: parser.line,
                    column: parser.column
                }, 152);
            }
            allowSeparator = 1;
            ret += parser.source.substring(start, index);
            start = parser.index;
            continue;
        }
        allowSeparator = 0;
        char = advanceChar(parser);
    }
    if (allowSeparator) {
        throw new ParseError(parser.currentLocation, {
            index: parser.index + 1,
            line: parser.line,
            column: parser.column
        }, 153);
    }
    return ret + parser.source.substring(start, parser.index);
}
const KeywordDescTable = [
    'end of source',
    'identifier',
    'number',
    'string',
    'regular expression',
    'false',
    'true',
    'null',
    'template continuation',
    'template tail',
    '=>',
    '(',
    '{',
    '.',
    '...',
    '}',
    ')',
    ';',
    ',',
    '[',
    ']',
    ':',
    '?',
    '\'',
    '"',
    '++',
    '--',
    '=',
    '<<=',
    '>>=',
    '>>>=',
    '**=',
    '+=',
    '-=',
    '*=',
    '/=',
    '%=',
    '^=',
    '|=',
    '&=',
    '||=',
    '&&=',
    '??=',
    'typeof',
    'delete',
    'void',
    '!',
    '~',
    '+',
    '-',
    'in',
    'instanceof',
    '*',
    '%',
    '/',
    '**',
    '&&',
    '||',
    '===',
    '!==',
    '==',
    '!=',
    '<=',
    '>=',
    '<',
    '>',
    '<<',
    '>>',
    '>>>',
    '&',
    '|',
    '^',
    'var',
    'let',
    'const',
    'break',
    'case',
    'catch',
    'class',
    'continue',
    'debugger',
    'default',
    'do',
    'else',
    'export',
    'extends',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'new',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'while',
    'with',
    'implements',
    'interface',
    'package',
    'private',
    'protected',
    'public',
    'static',
    'yield',
    'as',
    'async',
    'await',
    'constructor',
    'get',
    'set',
    'accessor',
    'from',
    'of',
    'enum',
    'eval',
    'arguments',
    'escaped keyword',
    'escaped future reserved keyword',
    'reserved if strict',
    '#',
    'BigIntLiteral',
    '??',
    '?.',
    'WhiteSpace',
    'Illegal',
    'LineTerminator',
    'PrivateField',
    'Template',
    '@',
    'target',
    'meta',
    'LineFeed',
    'Escaped',
    'JSXText'
];
const descKeywordTable = {
    this: 86111,
    function: 86104,
    if: 20569,
    return: 20572,
    var: 86088,
    else: 20563,
    for: 20567,
    new: 86107,
    in: 8673330,
    typeof: 16863275,
    while: 20578,
    case: 20556,
    break: 20555,
    try: 20577,
    catch: 20557,
    delete: 16863276,
    throw: 86112,
    switch: 86110,
    continue: 20559,
    default: 20561,
    instanceof: 8411187,
    do: 20562,
    void: 16863277,
    finally: 20566,
    async: 209005,
    await: 209006,
    class: 86094,
    const: 86090,
    constructor: 12399,
    debugger: 20560,
    export: 20564,
    extends: 20565,
    false: 86021,
    from: 209011,
    get: 209008,
    implements: 36964,
    import: 86106,
    interface: 36965,
    let: 241737,
    null: 86023,
    of: 471156,
    package: 36966,
    private: 36967,
    protected: 36968,
    public: 36969,
    set: 209009,
    static: 36970,
    super: 86109,
    true: 86022,
    with: 20579,
    yield: 241771,
    enum: 86133,
    eval: 537079926,
    as: 77932,
    arguments: 537079927,
    target: 209029,
    meta: 209030,
    accessor: 12402
};
function matchOrInsertSemicolon(parser, context) {
    if ((parser.flags & 1) === 0 && (parser.getToken() & 1048576) !== 1048576) {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    if (!consumeOpt(parser, context, 1074790417)) {
        parser.options.onInsertedSemicolon?.(parser.startIndex);
    }
}
function isValidStrictMode(parser, index, tokenIndex, tokenValue) {
    if (index - tokenIndex < 13 && tokenValue === 'use strict') {
        if ((parser.getToken() & 1048576) === 1048576 || parser.flags & 1) {
            return 1;
        }
    }
    return 0;
}
function optionalBit(parser, context, t) {
    if (parser.getToken() !== t) return 0;
    nextToken(parser, context);
    return 1;
}
function consumeOpt(parser, context, t) {
    if (parser.getToken() !== t) return false;
    nextToken(parser, context);
    return true;
}
function consume(parser, context, t) {
    if (parser.getToken() !== t) parser.report(25, KeywordDescTable[t & 255]);
    nextToken(parser, context);
}
function reinterpretToPattern(parser, node) {
    switch(node.type){
        case 'ArrayExpression':
            {
                node.type = 'ArrayPattern';
                const { elements } = node;
                for(let i = 0, n = elements.length; i < n; ++i){
                    const element = elements[i];
                    if (element) reinterpretToPattern(parser, element);
                }
                return;
            }
        case 'ObjectExpression':
            {
                node.type = 'ObjectPattern';
                const { properties } = node;
                for(let i = 0, n = properties.length; i < n; ++i){
                    reinterpretToPattern(parser, properties[i]);
                }
                return;
            }
        case 'AssignmentExpression':
            node.type = 'AssignmentPattern';
            if (node.operator !== '=') parser.report(71);
            delete node.operator;
            reinterpretToPattern(parser, node.left);
            return;
        case 'Property':
            reinterpretToPattern(parser, node.value);
            return;
        case 'SpreadElement':
            node.type = 'RestElement';
            reinterpretToPattern(parser, node.argument);
    }
}
function validateBindingIdentifier(parser, context, kind, t, skipEvalArgCheck) {
    if (context & 1) {
        if ((t & 36864) === 36864) {
            parser.report(118);
        }
        if (!skipEvalArgCheck && (t & 537079808) === 537079808) {
            parser.report(119);
        }
    }
    if ((t & 20480) === 20480 || t === -2147483528) {
        parser.report(102);
    }
    if (kind & (8 | 16) && (t & 255) === (241737 & 255)) {
        parser.report(100);
    }
    if (context & (2048 | 2) && t === 209006) {
        parser.report(110);
    }
    if (context & (1024 | 1) && t === 241771) {
        parser.report(97, 'yield');
    }
}
function validateFunctionName(parser, context, t) {
    if (context & 1) {
        if ((t & 36864) === 36864) {
            parser.report(118);
        }
        if ((t & 537079808) === 537079808) {
            parser.report(119);
        }
        if (t === -2147483527) {
            parser.report(95);
        }
        if (t === -2147483528) {
            parser.report(95);
        }
    }
    if ((t & 20480) === 20480) {
        parser.report(102);
    }
    if (context & (2048 | 2) && t === 209006) {
        parser.report(110);
    }
    if (context & (1024 | 1) && t === 241771) {
        parser.report(97, 'yield');
    }
}
function isStrictReservedWord(parser, context, t) {
    if (t === 209006) {
        if (context & (2048 | 2)) parser.report(110);
        parser.destructible |= 128;
    }
    if (t === 241771 && context & 1024) parser.report(97, 'yield');
    return (t & 20480) === 20480 || (t & 36864) === 36864 || t == -2147483527;
}
function isPropertyWithPrivateFieldKey(expr) {
    return !expr.property ? false : expr.property.type === 'PrivateIdentifier';
}
function isValidLabel(parser, labels, name, isIterationStatement) {
    while(labels){
        if (labels['$' + name]) {
            if (isIterationStatement) parser.report(137);
            return 1;
        }
        if (isIterationStatement && labels.loop) isIterationStatement = 0;
        labels = labels['$'];
    }
    return 0;
}
function validateAndDeclareLabel(parser, labels, name) {
    let set = labels;
    while(set){
        if (set['$' + name]) parser.report(136, name);
        set = set['$'];
    }
    labels['$' + name] = 1;
}
function isEqualTagName(elementName) {
    switch(elementName.type){
        case 'JSXIdentifier':
            return elementName.name;
        case 'JSXNamespacedName':
            return elementName.namespace + ':' + elementName.name;
        case 'JSXMemberExpression':
            return isEqualTagName(elementName.object) + '.' + isEqualTagName(elementName.property);
    }
}
function isValidIdentifier(context, t) {
    if (context & (1 | 1024)) {
        if (context & 2 && t === 209006) return false;
        if (context & 1024 && t === 241771) return false;
        return (t & 12288) === 12288;
    }
    return (t & 12288) === 12288 || (t & 36864) === 36864;
}
function classifyIdentifier(parser, context, t) {
    if ((t & 537079808) === 537079808) {
        if (context & 1) parser.report(119);
        parser.flags |= 512;
    }
    if (!isValidIdentifier(context, t)) parser.report(0);
}
function getOwnProperty(object, key) {
    return Object.hasOwn(object, key) ? object[key] : undefined;
}
function scanIdentifier(parser, context, isValidAsKeyword) {
    while(isIdPart[advanceChar(parser)]);
    parser.tokenValue = parser.source.slice(parser.tokenIndex, parser.index);
    return parser.currentChar !== 92 && parser.currentChar <= 0x7e ? getOwnProperty(descKeywordTable, parser.tokenValue) ?? 208897 : scanIdentifierSlowCase(parser, context, 0, isValidAsKeyword);
}
function scanUnicodeIdentifier(parser, context) {
    const cookedChar = scanIdentifierUnicodeEscape(parser);
    if (!isIdentifierStart(cookedChar)) parser.report(5);
    parser.tokenValue = String.fromCodePoint(cookedChar);
    return scanIdentifierSlowCase(parser, context, 1, CharTypes[cookedChar] & 4);
}
function scanIdentifierSlowCase(parser, context, hasEscape, isValidAsKeyword) {
    let start = parser.index;
    while(parser.index < parser.end){
        if (parser.currentChar === 92) {
            parser.tokenValue += parser.source.slice(start, parser.index);
            hasEscape = 1;
            const code = scanIdentifierUnicodeEscape(parser);
            if (!isIdentifierPart(code)) parser.report(5);
            isValidAsKeyword = isValidAsKeyword && CharTypes[code] & 4;
            parser.tokenValue += String.fromCodePoint(code);
            start = parser.index;
        } else {
            const merged = consumePossibleSurrogatePair(parser);
            if (merged > 0) {
                if (!isIdentifierPart(merged)) {
                    parser.report(20, String.fromCodePoint(merged));
                }
                parser.currentChar = merged;
                parser.index++;
                parser.column++;
            } else if (!isIdentifierPart(parser.currentChar)) {
                break;
            }
            advanceChar(parser);
        }
    }
    if (parser.index <= parser.end) {
        parser.tokenValue += parser.source.slice(start, parser.index);
    }
    const { length } = parser.tokenValue;
    if (isValidAsKeyword && length >= 2 && length <= 11) {
        const token = getOwnProperty(descKeywordTable, parser.tokenValue);
        if (token === void 0) return 208897 | (hasEscape ? -2147483648 : 0);
        if (!hasEscape) return token;
        if (token === 209006) {
            if ((context & (2 | 2048)) === 0) {
                return token | -2147483648;
            }
            return -2147483528;
        }
        if (context & 1) {
            if (token === 36970) {
                return -2147483527;
            }
            if ((token & 36864) === 36864) {
                return -2147483527;
            }
            if ((token & 20480) === 20480) {
                if (context & 262144 && (context & 8) === 0) {
                    return token | -2147483648;
                } else {
                    return -2147483528;
                }
            }
            return 209018 | -2147483648;
        }
        if (context & 262144 && (context & 8) === 0 && (token & 20480) === 20480) {
            return token | -2147483648;
        }
        if (token === 241771) {
            return context & 262144 ? 209018 | -2147483648 : context & 1024 ? -2147483528 : token | -2147483648;
        }
        if (token === 209005) {
            return 209018 | -2147483648;
        }
        if ((token & 36864) === 36864) {
            return token | 12288 | -2147483648;
        }
        return -2147483528;
    }
    return 208897 | (hasEscape ? -2147483648 : 0);
}
function scanPrivateIdentifier(parser) {
    let char = advanceChar(parser);
    if (char === 92) return 130;
    const merged = consumePossibleSurrogatePair(parser);
    if (merged) char = merged;
    if (!isIdentifierStart(char)) parser.report(96);
    return 130;
}
function scanIdentifierUnicodeEscape(parser) {
    if (parser.source.charCodeAt(parser.index + 1) !== 117) {
        parser.report(5);
    }
    parser.currentChar = parser.source.charCodeAt(parser.index += 2);
    parser.column += 2;
    return scanUnicodeEscape(parser);
}
function scanUnicodeEscape(parser) {
    let codePoint = 0;
    const char = parser.currentChar;
    if (char === 123) {
        const begin = parser.index - 2;
        while(CharTypes[advanceChar(parser)] & 64){
            codePoint = codePoint << 4 | toHex(parser.currentChar);
            if (codePoint > 1114111) throw new ParseError({
                index: begin,
                line: parser.line,
                column: parser.column
            }, parser.currentLocation, 104);
        }
        if (parser.currentChar !== 125) {
            throw new ParseError({
                index: begin,
                line: parser.line,
                column: parser.column
            }, parser.currentLocation, 7);
        }
        advanceChar(parser);
        return codePoint;
    }
    if ((CharTypes[char] & 64) === 0) parser.report(7);
    const char2 = parser.source.charCodeAt(parser.index + 1);
    if ((CharTypes[char2] & 64) === 0) parser.report(7);
    const char3 = parser.source.charCodeAt(parser.index + 2);
    if ((CharTypes[char3] & 64) === 0) parser.report(7);
    const char4 = parser.source.charCodeAt(parser.index + 3);
    if ((CharTypes[char4] & 64) === 0) parser.report(7);
    codePoint = toHex(char) << 12 | toHex(char2) << 8 | toHex(char3) << 4 | toHex(char4);
    parser.currentChar = parser.source.charCodeAt(parser.index += 4);
    parser.column += 4;
    return codePoint;
}
const TokenLookup = [
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    127,
    135,
    127,
    127,
    129,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    128,
    127,
    16842798,
    134283267,
    130,
    208897,
    8391477,
    8390213,
    134283267,
    67174411,
    16,
    8391476,
    25233968,
    18,
    25233969,
    67108877,
    8457014,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    21,
    1074790417,
    8456256,
    1077936155,
    8390721,
    22,
    132,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    69271571,
    136,
    20,
    8389959,
    208897,
    131,
    4096,
    4096,
    4096,
    4096,
    4096,
    4096,
    4096,
    208897,
    4096,
    208897,
    208897,
    4096,
    208897,
    4096,
    208897,
    4096,
    208897,
    4096,
    4096,
    4096,
    208897,
    4096,
    4096,
    208897,
    4096,
    4096,
    2162700,
    8389702,
    1074790415,
    16842799,
    128
];
function nextToken(parser, context) {
    parser.flags = (parser.flags | 1) ^ 1;
    parser.startIndex = parser.index;
    parser.startColumn = parser.column;
    parser.startLine = parser.line;
    parser.setToken(scanSingleToken(parser, context, 0));
}
function scanSingleToken(parser, context, state) {
    const isStartOfLine = parser.index === 0;
    const { source } = parser;
    let start = parser.currentLocation;
    while(parser.index < parser.end){
        parser.tokenIndex = parser.index;
        parser.tokenColumn = parser.column;
        parser.tokenLine = parser.line;
        let char = parser.currentChar;
        if (char <= 0x7e) {
            const token = TokenLookup[char];
            switch(token){
                case 67174411:
                case 16:
                case 2162700:
                case 1074790415:
                case 69271571:
                case 20:
                case 21:
                case 1074790417:
                case 18:
                case 16842799:
                case 132:
                case 128:
                    advanceChar(parser);
                    return token;
                case 208897:
                    return scanIdentifier(parser, context, 0);
                case 4096:
                    return scanIdentifier(parser, context, 1);
                case 134283266:
                    return scanNumber(parser, context, 16 | 128);
                case 134283267:
                    return scanString(parser, context, char);
                case 131:
                    return scanTemplate(parser, context);
                case 136:
                    return scanUnicodeIdentifier(parser, context);
                case 130:
                    return scanPrivateIdentifier(parser);
                case 127:
                    advanceChar(parser);
                    break;
                case 129:
                    state |= 1 | 4;
                    scanNewLine(parser);
                    break;
                case 135:
                    consumeLineFeed(parser, state);
                    state = state & -5 | 1;
                    break;
                case 8456256:
                    {
                        const ch = advanceChar(parser);
                        if (parser.index < parser.end) {
                            if (ch === 60) {
                                if (parser.index < parser.end && advanceChar(parser) === 61) {
                                    advanceChar(parser);
                                    return 4194332;
                                }
                                return 8390978;
                            } else if (ch === 61) {
                                advanceChar(parser);
                                return 8390718;
                            }
                            if (ch === 33) {
                                const index = parser.index + 1;
                                if (index + 1 < parser.end && source.charCodeAt(index) === 45 && source.charCodeAt(index + 1) == 45) {
                                    parser.column += 3;
                                    parser.currentChar = source.charCodeAt(parser.index += 3);
                                    state = skipSingleHTMLComment(parser, source, state, context, 2, parser.tokenStart);
                                    start = parser.tokenStart;
                                    continue;
                                }
                                return 8456256;
                            }
                        }
                        return 8456256;
                    }
                case 1077936155:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 61) {
                            if (advanceChar(parser) === 61) {
                                advanceChar(parser);
                                return 8390458;
                            }
                            return 8390460;
                        }
                        if (ch === 62) {
                            advanceChar(parser);
                            return 10;
                        }
                        return 1077936155;
                    }
                case 16842798:
                    if (advanceChar(parser) !== 61) {
                        return 16842798;
                    }
                    if (advanceChar(parser) !== 61) {
                        return 8390461;
                    }
                    advanceChar(parser);
                    return 8390459;
                case 8391477:
                    if (advanceChar(parser) !== 61) return 8391477;
                    advanceChar(parser);
                    return 4194340;
                case 8391476:
                    {
                        advanceChar(parser);
                        if (parser.index >= parser.end) return 8391476;
                        const ch = parser.currentChar;
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194338;
                        }
                        if (ch !== 42) return 8391476;
                        if (advanceChar(parser) !== 61) return 8391735;
                        advanceChar(parser);
                        return 4194335;
                    }
                case 8389959:
                    if (advanceChar(parser) !== 61) return 8389959;
                    advanceChar(parser);
                    return 4194341;
                case 25233968:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 43) {
                            advanceChar(parser);
                            return 33619993;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194336;
                        }
                        return 25233968;
                    }
                case 25233969:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 45) {
                            advanceChar(parser);
                            if ((state & 1 || isStartOfLine) && parser.currentChar === 62) {
                                if (!parser.options.webcompat) parser.report(112);
                                advanceChar(parser);
                                state = skipSingleHTMLComment(parser, source, state, context, 3, start);
                                start = parser.tokenStart;
                                continue;
                            }
                            return 33619994;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194337;
                        }
                        return 25233969;
                    }
                case 8457014:
                    {
                        advanceChar(parser);
                        if (parser.index < parser.end) {
                            const ch = parser.currentChar;
                            if (ch === 47) {
                                advanceChar(parser);
                                state = skipSingleLineComment(parser, source, state, 0, parser.tokenStart);
                                start = parser.tokenStart;
                                continue;
                            }
                            if (ch === 42) {
                                advanceChar(parser);
                                state = skipMultiLineComment(parser, source, state);
                                start = parser.tokenStart;
                                continue;
                            }
                            if (context & 32) {
                                return scanRegularExpression(parser);
                            }
                            if (ch === 61) {
                                advanceChar(parser);
                                return 4259875;
                            }
                        }
                        return 8457014;
                    }
                case 67108877:
                    {
                        const next = advanceChar(parser);
                        if (next >= 48 && next <= 57) return scanNumber(parser, context, 64 | 16);
                        if (next === 46) {
                            const index = parser.index + 1;
                            if (index < parser.end && source.charCodeAt(index) === 46) {
                                parser.column += 2;
                                parser.currentChar = source.charCodeAt(parser.index += 2);
                                return 14;
                            }
                        }
                        return 67108877;
                    }
                case 8389702:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 124) {
                            advanceChar(parser);
                            if (parser.currentChar === 61) {
                                advanceChar(parser);
                                return 4194344;
                            }
                            return 8913465;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194342;
                        }
                        return 8389702;
                    }
                case 8390721:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 61) {
                            advanceChar(parser);
                            return 8390719;
                        }
                        if (ch !== 62) return 8390721;
                        advanceChar(parser);
                        if (parser.index < parser.end) {
                            const ch = parser.currentChar;
                            if (ch === 62) {
                                if (advanceChar(parser) === 61) {
                                    advanceChar(parser);
                                    return 4194334;
                                }
                                return 8390980;
                            }
                            if (ch === 61) {
                                advanceChar(parser);
                                return 4194333;
                            }
                        }
                        return 8390979;
                    }
                case 8390213:
                    {
                        advanceChar(parser);
                        const ch = parser.currentChar;
                        if (ch === 38) {
                            advanceChar(parser);
                            if (parser.currentChar === 61) {
                                advanceChar(parser);
                                return 4194345;
                            }
                            return 8913720;
                        }
                        if (ch === 61) {
                            advanceChar(parser);
                            return 4194343;
                        }
                        return 8390213;
                    }
                case 22:
                    {
                        let ch = advanceChar(parser);
                        if (ch === 63) {
                            advanceChar(parser);
                            if (parser.currentChar === 61) {
                                advanceChar(parser);
                                return 4194346;
                            }
                            return 276824445;
                        }
                        if (ch === 46) {
                            const index = parser.index + 1;
                            if (index < parser.end) {
                                ch = source.charCodeAt(index);
                                if (!(ch >= 48 && ch <= 57)) {
                                    advanceChar(parser);
                                    return 67108990;
                                }
                            }
                        }
                        return 22;
                    }
            }
        } else {
            if ((char ^ 8232) <= 1) {
                state = state & -5 | 1;
                scanNewLine(parser);
                continue;
            }
            const merged = consumePossibleSurrogatePair(parser);
            if (merged > 0) char = merged;
            if (isIDStart(char)) {
                parser.tokenValue = '';
                return scanIdentifierSlowCase(parser, context, 0, 0);
            }
            if (isExoticECMAScriptWhitespace(char)) {
                advanceChar(parser);
                continue;
            }
            parser.report(20, String.fromCodePoint(char));
        }
    }
    return 1048576;
}
const entities = {
    AElig: '\u00C6',
    AMP: '\u0026',
    Aacute: '\u00C1',
    Abreve: '\u0102',
    Acirc: '\u00C2',
    Acy: '\u0410',
    Afr: '\uD835\uDD04',
    Agrave: '\u00C0',
    Alpha: '\u0391',
    Amacr: '\u0100',
    And: '\u2A53',
    Aogon: '\u0104',
    Aopf: '\uD835\uDD38',
    ApplyFunction: '\u2061',
    Aring: '\u00C5',
    Ascr: '\uD835\uDC9C',
    Assign: '\u2254',
    Atilde: '\u00C3',
    Auml: '\u00C4',
    Backslash: '\u2216',
    Barv: '\u2AE7',
    Barwed: '\u2306',
    Bcy: '\u0411',
    Because: '\u2235',
    Bernoullis: '\u212C',
    Beta: '\u0392',
    Bfr: '\uD835\uDD05',
    Bopf: '\uD835\uDD39',
    Breve: '\u02D8',
    Bscr: '\u212C',
    Bumpeq: '\u224E',
    CHcy: '\u0427',
    COPY: '\u00A9',
    Cacute: '\u0106',
    Cap: '\u22D2',
    CapitalDifferentialD: '\u2145',
    Cayleys: '\u212D',
    Ccaron: '\u010C',
    Ccedil: '\u00C7',
    Ccirc: '\u0108',
    Cconint: '\u2230',
    Cdot: '\u010A',
    Cedilla: '\u00B8',
    CenterDot: '\u00B7',
    Cfr: '\u212D',
    Chi: '\u03A7',
    CircleDot: '\u2299',
    CircleMinus: '\u2296',
    CirclePlus: '\u2295',
    CircleTimes: '\u2297',
    ClockwiseContourIntegral: '\u2232',
    CloseCurlyDoubleQuote: '\u201D',
    CloseCurlyQuote: '\u2019',
    Colon: '\u2237',
    Colone: '\u2A74',
    Congruent: '\u2261',
    Conint: '\u222F',
    ContourIntegral: '\u222E',
    Copf: '\u2102',
    Coproduct: '\u2210',
    CounterClockwiseContourIntegral: '\u2233',
    Cross: '\u2A2F',
    Cscr: '\uD835\uDC9E',
    Cup: '\u22D3',
    CupCap: '\u224D',
    DD: '\u2145',
    DDotrahd: '\u2911',
    DJcy: '\u0402',
    DScy: '\u0405',
    DZcy: '\u040F',
    Dagger: '\u2021',
    Darr: '\u21A1',
    Dashv: '\u2AE4',
    Dcaron: '\u010E',
    Dcy: '\u0414',
    Del: '\u2207',
    Delta: '\u0394',
    Dfr: '\uD835\uDD07',
    DiacriticalAcute: '\u00B4',
    DiacriticalDot: '\u02D9',
    DiacriticalDoubleAcute: '\u02DD',
    DiacriticalGrave: '\u0060',
    DiacriticalTilde: '\u02DC',
    Diamond: '\u22C4',
    DifferentialD: '\u2146',
    Dopf: '\uD835\uDD3B',
    Dot: '\u00A8',
    DotDot: '\u20DC',
    DotEqual: '\u2250',
    DoubleContourIntegral: '\u222F',
    DoubleDot: '\u00A8',
    DoubleDownArrow: '\u21D3',
    DoubleLeftArrow: '\u21D0',
    DoubleLeftRightArrow: '\u21D4',
    DoubleLeftTee: '\u2AE4',
    DoubleLongLeftArrow: '\u27F8',
    DoubleLongLeftRightArrow: '\u27FA',
    DoubleLongRightArrow: '\u27F9',
    DoubleRightArrow: '\u21D2',
    DoubleRightTee: '\u22A8',
    DoubleUpArrow: '\u21D1',
    DoubleUpDownArrow: '\u21D5',
    DoubleVerticalBar: '\u2225',
    DownArrow: '\u2193',
    DownArrowBar: '\u2913',
    DownArrowUpArrow: '\u21F5',
    DownBreve: '\u0311',
    DownLeftRightVector: '\u2950',
    DownLeftTeeVector: '\u295E',
    DownLeftVector: '\u21BD',
    DownLeftVectorBar: '\u2956',
    DownRightTeeVector: '\u295F',
    DownRightVector: '\u21C1',
    DownRightVectorBar: '\u2957',
    DownTee: '\u22A4',
    DownTeeArrow: '\u21A7',
    Downarrow: '\u21D3',
    Dscr: '\uD835\uDC9F',
    Dstrok: '\u0110',
    ENG: '\u014A',
    ETH: '\u00D0',
    Eacute: '\u00C9',
    Ecaron: '\u011A',
    Ecirc: '\u00CA',
    Ecy: '\u042D',
    Edot: '\u0116',
    Efr: '\uD835\uDD08',
    Egrave: '\u00C8',
    Element: '\u2208',
    Emacr: '\u0112',
    EmptySmallSquare: '\u25FB',
    EmptyVerySmallSquare: '\u25AB',
    Eogon: '\u0118',
    Eopf: '\uD835\uDD3C',
    Epsilon: '\u0395',
    Equal: '\u2A75',
    EqualTilde: '\u2242',
    Equilibrium: '\u21CC',
    Escr: '\u2130',
    Esim: '\u2A73',
    Eta: '\u0397',
    Euml: '\u00CB',
    Exists: '\u2203',
    ExponentialE: '\u2147',
    Fcy: '\u0424',
    Ffr: '\uD835\uDD09',
    FilledSmallSquare: '\u25FC',
    FilledVerySmallSquare: '\u25AA',
    Fopf: '\uD835\uDD3D',
    ForAll: '\u2200',
    Fouriertrf: '\u2131',
    Fscr: '\u2131',
    GJcy: '\u0403',
    GT: '\u003E',
    Gamma: '\u0393',
    Gammad: '\u03DC',
    Gbreve: '\u011E',
    Gcedil: '\u0122',
    Gcirc: '\u011C',
    Gcy: '\u0413',
    Gdot: '\u0120',
    Gfr: '\uD835\uDD0A',
    Gg: '\u22D9',
    Gopf: '\uD835\uDD3E',
    GreaterEqual: '\u2265',
    GreaterEqualLess: '\u22DB',
    GreaterFullEqual: '\u2267',
    GreaterGreater: '\u2AA2',
    GreaterLess: '\u2277',
    GreaterSlantEqual: '\u2A7E',
    GreaterTilde: '\u2273',
    Gscr: '\uD835\uDCA2',
    Gt: '\u226B',
    HARDcy: '\u042A',
    Hacek: '\u02C7',
    Hat: '\u005E',
    Hcirc: '\u0124',
    Hfr: '\u210C',
    HilbertSpace: '\u210B',
    Hopf: '\u210D',
    HorizontalLine: '\u2500',
    Hscr: '\u210B',
    Hstrok: '\u0126',
    HumpDownHump: '\u224E',
    HumpEqual: '\u224F',
    IEcy: '\u0415',
    IJlig: '\u0132',
    IOcy: '\u0401',
    Iacute: '\u00CD',
    Icirc: '\u00CE',
    Icy: '\u0418',
    Idot: '\u0130',
    Ifr: '\u2111',
    Igrave: '\u00CC',
    Im: '\u2111',
    Imacr: '\u012A',
    ImaginaryI: '\u2148',
    Implies: '\u21D2',
    Int: '\u222C',
    Integral: '\u222B',
    Intersection: '\u22C2',
    InvisibleComma: '\u2063',
    InvisibleTimes: '\u2062',
    Iogon: '\u012E',
    Iopf: '\uD835\uDD40',
    Iota: '\u0399',
    Iscr: '\u2110',
    Itilde: '\u0128',
    Iukcy: '\u0406',
    Iuml: '\u00CF',
    Jcirc: '\u0134',
    Jcy: '\u0419',
    Jfr: '\uD835\uDD0D',
    Jopf: '\uD835\uDD41',
    Jscr: '\uD835\uDCA5',
    Jsercy: '\u0408',
    Jukcy: '\u0404',
    KHcy: '\u0425',
    KJcy: '\u040C',
    Kappa: '\u039A',
    Kcedil: '\u0136',
    Kcy: '\u041A',
    Kfr: '\uD835\uDD0E',
    Kopf: '\uD835\uDD42',
    Kscr: '\uD835\uDCA6',
    LJcy: '\u0409',
    LT: '\u003C',
    Lacute: '\u0139',
    Lambda: '\u039B',
    Lang: '\u27EA',
    Laplacetrf: '\u2112',
    Larr: '\u219E',
    Lcaron: '\u013D',
    Lcedil: '\u013B',
    Lcy: '\u041B',
    LeftAngleBracket: '\u27E8',
    LeftArrow: '\u2190',
    LeftArrowBar: '\u21E4',
    LeftArrowRightArrow: '\u21C6',
    LeftCeiling: '\u2308',
    LeftDoubleBracket: '\u27E6',
    LeftDownTeeVector: '\u2961',
    LeftDownVector: '\u21C3',
    LeftDownVectorBar: '\u2959',
    LeftFloor: '\u230A',
    LeftRightArrow: '\u2194',
    LeftRightVector: '\u294E',
    LeftTee: '\u22A3',
    LeftTeeArrow: '\u21A4',
    LeftTeeVector: '\u295A',
    LeftTriangle: '\u22B2',
    LeftTriangleBar: '\u29CF',
    LeftTriangleEqual: '\u22B4',
    LeftUpDownVector: '\u2951',
    LeftUpTeeVector: '\u2960',
    LeftUpVector: '\u21BF',
    LeftUpVectorBar: '\u2958',
    LeftVector: '\u21BC',
    LeftVectorBar: '\u2952',
    Leftarrow: '\u21D0',
    Leftrightarrow: '\u21D4',
    LessEqualGreater: '\u22DA',
    LessFullEqual: '\u2266',
    LessGreater: '\u2276',
    LessLess: '\u2AA1',
    LessSlantEqual: '\u2A7D',
    LessTilde: '\u2272',
    Lfr: '\uD835\uDD0F',
    Ll: '\u22D8',
    Lleftarrow: '\u21DA',
    Lmidot: '\u013F',
    LongLeftArrow: '\u27F5',
    LongLeftRightArrow: '\u27F7',
    LongRightArrow: '\u27F6',
    Longleftarrow: '\u27F8',
    Longleftrightarrow: '\u27FA',
    Longrightarrow: '\u27F9',
    Lopf: '\uD835\uDD43',
    LowerLeftArrow: '\u2199',
    LowerRightArrow: '\u2198',
    Lscr: '\u2112',
    Lsh: '\u21B0',
    Lstrok: '\u0141',
    Lt: '\u226A',
    Map: '\u2905',
    Mcy: '\u041C',
    MediumSpace: '\u205F',
    Mellintrf: '\u2133',
    Mfr: '\uD835\uDD10',
    MinusPlus: '\u2213',
    Mopf: '\uD835\uDD44',
    Mscr: '\u2133',
    Mu: '\u039C',
    NJcy: '\u040A',
    Nacute: '\u0143',
    Ncaron: '\u0147',
    Ncedil: '\u0145',
    Ncy: '\u041D',
    NegativeMediumSpace: '\u200B',
    NegativeThickSpace: '\u200B',
    NegativeThinSpace: '\u200B',
    NegativeVeryThinSpace: '\u200B',
    NestedGreaterGreater: '\u226B',
    NestedLessLess: '\u226A',
    NewLine: '\u000A',
    Nfr: '\uD835\uDD11',
    NoBreak: '\u2060',
    NonBreakingSpace: '\u00A0',
    Nopf: '\u2115',
    Not: '\u2AEC',
    NotCongruent: '\u2262',
    NotCupCap: '\u226D',
    NotDoubleVerticalBar: '\u2226',
    NotElement: '\u2209',
    NotEqual: '\u2260',
    NotEqualTilde: '\u2242\u0338',
    NotExists: '\u2204',
    NotGreater: '\u226F',
    NotGreaterEqual: '\u2271',
    NotGreaterFullEqual: '\u2267\u0338',
    NotGreaterGreater: '\u226B\u0338',
    NotGreaterLess: '\u2279',
    NotGreaterSlantEqual: '\u2A7E\u0338',
    NotGreaterTilde: '\u2275',
    NotHumpDownHump: '\u224E\u0338',
    NotHumpEqual: '\u224F\u0338',
    NotLeftTriangle: '\u22EA',
    NotLeftTriangleBar: '\u29CF\u0338',
    NotLeftTriangleEqual: '\u22EC',
    NotLess: '\u226E',
    NotLessEqual: '\u2270',
    NotLessGreater: '\u2278',
    NotLessLess: '\u226A\u0338',
    NotLessSlantEqual: '\u2A7D\u0338',
    NotLessTilde: '\u2274',
    NotNestedGreaterGreater: '\u2AA2\u0338',
    NotNestedLessLess: '\u2AA1\u0338',
    NotPrecedes: '\u2280',
    NotPrecedesEqual: '\u2AAF\u0338',
    NotPrecedesSlantEqual: '\u22E0',
    NotReverseElement: '\u220C',
    NotRightTriangle: '\u22EB',
    NotRightTriangleBar: '\u29D0\u0338',
    NotRightTriangleEqual: '\u22ED',
    NotSquareSubset: '\u228F\u0338',
    NotSquareSubsetEqual: '\u22E2',
    NotSquareSuperset: '\u2290\u0338',
    NotSquareSupersetEqual: '\u22E3',
    NotSubset: '\u2282\u20D2',
    NotSubsetEqual: '\u2288',
    NotSucceeds: '\u2281',
    NotSucceedsEqual: '\u2AB0\u0338',
    NotSucceedsSlantEqual: '\u22E1',
    NotSucceedsTilde: '\u227F\u0338',
    NotSuperset: '\u2283\u20D2',
    NotSupersetEqual: '\u2289',
    NotTilde: '\u2241',
    NotTildeEqual: '\u2244',
    NotTildeFullEqual: '\u2247',
    NotTildeTilde: '\u2249',
    NotVerticalBar: '\u2224',
    Nscr: '\uD835\uDCA9',
    Ntilde: '\u00D1',
    Nu: '\u039D',
    OElig: '\u0152',
    Oacute: '\u00D3',
    Ocirc: '\u00D4',
    Ocy: '\u041E',
    Odblac: '\u0150',
    Ofr: '\uD835\uDD12',
    Ograve: '\u00D2',
    Omacr: '\u014C',
    Omega: '\u03A9',
    Omicron: '\u039F',
    Oopf: '\uD835\uDD46',
    OpenCurlyDoubleQuote: '\u201C',
    OpenCurlyQuote: '\u2018',
    Or: '\u2A54',
    Oscr: '\uD835\uDCAA',
    Oslash: '\u00D8',
    Otilde: '\u00D5',
    Otimes: '\u2A37',
    Ouml: '\u00D6',
    OverBar: '\u203E',
    OverBrace: '\u23DE',
    OverBracket: '\u23B4',
    OverParenthesis: '\u23DC',
    PartialD: '\u2202',
    Pcy: '\u041F',
    Pfr: '\uD835\uDD13',
    Phi: '\u03A6',
    Pi: '\u03A0',
    PlusMinus: '\u00B1',
    Poincareplane: '\u210C',
    Popf: '\u2119',
    Pr: '\u2ABB',
    Precedes: '\u227A',
    PrecedesEqual: '\u2AAF',
    PrecedesSlantEqual: '\u227C',
    PrecedesTilde: '\u227E',
    Prime: '\u2033',
    Product: '\u220F',
    Proportion: '\u2237',
    Proportional: '\u221D',
    Pscr: '\uD835\uDCAB',
    Psi: '\u03A8',
    QUOT: '\u0022',
    Qfr: '\uD835\uDD14',
    Qopf: '\u211A',
    Qscr: '\uD835\uDCAC',
    RBarr: '\u2910',
    REG: '\u00AE',
    Racute: '\u0154',
    Rang: '\u27EB',
    Rarr: '\u21A0',
    Rarrtl: '\u2916',
    Rcaron: '\u0158',
    Rcedil: '\u0156',
    Rcy: '\u0420',
    Re: '\u211C',
    ReverseElement: '\u220B',
    ReverseEquilibrium: '\u21CB',
    ReverseUpEquilibrium: '\u296F',
    Rfr: '\u211C',
    Rho: '\u03A1',
    RightAngleBracket: '\u27E9',
    RightArrow: '\u2192',
    RightArrowBar: '\u21E5',
    RightArrowLeftArrow: '\u21C4',
    RightCeiling: '\u2309',
    RightDoubleBracket: '\u27E7',
    RightDownTeeVector: '\u295D',
    RightDownVector: '\u21C2',
    RightDownVectorBar: '\u2955',
    RightFloor: '\u230B',
    RightTee: '\u22A2',
    RightTeeArrow: '\u21A6',
    RightTeeVector: '\u295B',
    RightTriangle: '\u22B3',
    RightTriangleBar: '\u29D0',
    RightTriangleEqual: '\u22B5',
    RightUpDownVector: '\u294F',
    RightUpTeeVector: '\u295C',
    RightUpVector: '\u21BE',
    RightUpVectorBar: '\u2954',
    RightVector: '\u21C0',
    RightVectorBar: '\u2953',
    Rightarrow: '\u21D2',
    Ropf: '\u211D',
    RoundImplies: '\u2970',
    Rrightarrow: '\u21DB',
    Rscr: '\u211B',
    Rsh: '\u21B1',
    RuleDelayed: '\u29F4',
    SHCHcy: '\u0429',
    SHcy: '\u0428',
    SOFTcy: '\u042C',
    Sacute: '\u015A',
    Sc: '\u2ABC',
    Scaron: '\u0160',
    Scedil: '\u015E',
    Scirc: '\u015C',
    Scy: '\u0421',
    Sfr: '\uD835\uDD16',
    ShortDownArrow: '\u2193',
    ShortLeftArrow: '\u2190',
    ShortRightArrow: '\u2192',
    ShortUpArrow: '\u2191',
    Sigma: '\u03A3',
    SmallCircle: '\u2218',
    Sopf: '\uD835\uDD4A',
    Sqrt: '\u221A',
    Square: '\u25A1',
    SquareIntersection: '\u2293',
    SquareSubset: '\u228F',
    SquareSubsetEqual: '\u2291',
    SquareSuperset: '\u2290',
    SquareSupersetEqual: '\u2292',
    SquareUnion: '\u2294',
    Sscr: '\uD835\uDCAE',
    Star: '\u22C6',
    Sub: '\u22D0',
    Subset: '\u22D0',
    SubsetEqual: '\u2286',
    Succeeds: '\u227B',
    SucceedsEqual: '\u2AB0',
    SucceedsSlantEqual: '\u227D',
    SucceedsTilde: '\u227F',
    SuchThat: '\u220B',
    Sum: '\u2211',
    Sup: '\u22D1',
    Superset: '\u2283',
    SupersetEqual: '\u2287',
    Supset: '\u22D1',
    THORN: '\u00DE',
    TRADE: '\u2122',
    TSHcy: '\u040B',
    TScy: '\u0426',
    Tab: '\u0009',
    Tau: '\u03A4',
    Tcaron: '\u0164',
    Tcedil: '\u0162',
    Tcy: '\u0422',
    Tfr: '\uD835\uDD17',
    Therefore: '\u2234',
    Theta: '\u0398',
    ThickSpace: '\u205F\u200A',
    ThinSpace: '\u2009',
    Tilde: '\u223C',
    TildeEqual: '\u2243',
    TildeFullEqual: '\u2245',
    TildeTilde: '\u2248',
    Topf: '\uD835\uDD4B',
    TripleDot: '\u20DB',
    Tscr: '\uD835\uDCAF',
    Tstrok: '\u0166',
    Uacute: '\u00DA',
    Uarr: '\u219F',
    Uarrocir: '\u2949',
    Ubrcy: '\u040E',
    Ubreve: '\u016C',
    Ucirc: '\u00DB',
    Ucy: '\u0423',
    Udblac: '\u0170',
    Ufr: '\uD835\uDD18',
    Ugrave: '\u00D9',
    Umacr: '\u016A',
    UnderBar: '\u005F',
    UnderBrace: '\u23DF',
    UnderBracket: '\u23B5',
    UnderParenthesis: '\u23DD',
    Union: '\u22C3',
    UnionPlus: '\u228E',
    Uogon: '\u0172',
    Uopf: '\uD835\uDD4C',
    UpArrow: '\u2191',
    UpArrowBar: '\u2912',
    UpArrowDownArrow: '\u21C5',
    UpDownArrow: '\u2195',
    UpEquilibrium: '\u296E',
    UpTee: '\u22A5',
    UpTeeArrow: '\u21A5',
    Uparrow: '\u21D1',
    Updownarrow: '\u21D5',
    UpperLeftArrow: '\u2196',
    UpperRightArrow: '\u2197',
    Upsi: '\u03D2',
    Upsilon: '\u03A5',
    Uring: '\u016E',
    Uscr: '\uD835\uDCB0',
    Utilde: '\u0168',
    Uuml: '\u00DC',
    VDash: '\u22AB',
    Vbar: '\u2AEB',
    Vcy: '\u0412',
    Vdash: '\u22A9',
    Vdashl: '\u2AE6',
    Vee: '\u22C1',
    Verbar: '\u2016',
    Vert: '\u2016',
    VerticalBar: '\u2223',
    VerticalLine: '\u007C',
    VerticalSeparator: '\u2758',
    VerticalTilde: '\u2240',
    VeryThinSpace: '\u200A',
    Vfr: '\uD835\uDD19',
    Vopf: '\uD835\uDD4D',
    Vscr: '\uD835\uDCB1',
    Vvdash: '\u22AA',
    Wcirc: '\u0174',
    Wedge: '\u22C0',
    Wfr: '\uD835\uDD1A',
    Wopf: '\uD835\uDD4E',
    Wscr: '\uD835\uDCB2',
    Xfr: '\uD835\uDD1B',
    Xi: '\u039E',
    Xopf: '\uD835\uDD4F',
    Xscr: '\uD835\uDCB3',
    YAcy: '\u042F',
    YIcy: '\u0407',
    YUcy: '\u042E',
    Yacute: '\u00DD',
    Ycirc: '\u0176',
    Ycy: '\u042B',
    Yfr: '\uD835\uDD1C',
    Yopf: '\uD835\uDD50',
    Yscr: '\uD835\uDCB4',
    Yuml: '\u0178',
    ZHcy: '\u0416',
    Zacute: '\u0179',
    Zcaron: '\u017D',
    Zcy: '\u0417',
    Zdot: '\u017B',
    ZeroWidthSpace: '\u200B',
    Zeta: '\u0396',
    Zfr: '\u2128',
    Zopf: '\u2124',
    Zscr: '\uD835\uDCB5',
    aacute: '\u00E1',
    abreve: '\u0103',
    ac: '\u223E',
    acE: '\u223E\u0333',
    acd: '\u223F',
    acirc: '\u00E2',
    acute: '\u00B4',
    acy: '\u0430',
    aelig: '\u00E6',
    af: '\u2061',
    afr: '\uD835\uDD1E',
    agrave: '\u00E0',
    alefsym: '\u2135',
    aleph: '\u2135',
    alpha: '\u03B1',
    amacr: '\u0101',
    amalg: '\u2A3F',
    amp: '\u0026',
    and: '\u2227',
    andand: '\u2A55',
    andd: '\u2A5C',
    andslope: '\u2A58',
    andv: '\u2A5A',
    ang: '\u2220',
    ange: '\u29A4',
    angle: '\u2220',
    angmsd: '\u2221',
    angmsdaa: '\u29A8',
    angmsdab: '\u29A9',
    angmsdac: '\u29AA',
    angmsdad: '\u29AB',
    angmsdae: '\u29AC',
    angmsdaf: '\u29AD',
    angmsdag: '\u29AE',
    angmsdah: '\u29AF',
    angrt: '\u221F',
    angrtvb: '\u22BE',
    angrtvbd: '\u299D',
    angsph: '\u2222',
    angst: '\u00C5',
    angzarr: '\u237C',
    aogon: '\u0105',
    aopf: '\uD835\uDD52',
    ap: '\u2248',
    apE: '\u2A70',
    apacir: '\u2A6F',
    ape: '\u224A',
    apid: '\u224B',
    apos: '\u0027',
    approx: '\u2248',
    approxeq: '\u224A',
    aring: '\u00E5',
    ascr: '\uD835\uDCB6',
    ast: '\u002A',
    asymp: '\u2248',
    asympeq: '\u224D',
    atilde: '\u00E3',
    auml: '\u00E4',
    awconint: '\u2233',
    awint: '\u2A11',
    bNot: '\u2AED',
    backcong: '\u224C',
    backepsilon: '\u03F6',
    backprime: '\u2035',
    backsim: '\u223D',
    backsimeq: '\u22CD',
    barvee: '\u22BD',
    barwed: '\u2305',
    barwedge: '\u2305',
    bbrk: '\u23B5',
    bbrktbrk: '\u23B6',
    bcong: '\u224C',
    bcy: '\u0431',
    bdquo: '\u201E',
    becaus: '\u2235',
    because: '\u2235',
    bemptyv: '\u29B0',
    bepsi: '\u03F6',
    bernou: '\u212C',
    beta: '\u03B2',
    beth: '\u2136',
    between: '\u226C',
    bfr: '\uD835\uDD1F',
    bigcap: '\u22C2',
    bigcirc: '\u25EF',
    bigcup: '\u22C3',
    bigodot: '\u2A00',
    bigoplus: '\u2A01',
    bigotimes: '\u2A02',
    bigsqcup: '\u2A06',
    bigstar: '\u2605',
    bigtriangledown: '\u25BD',
    bigtriangleup: '\u25B3',
    biguplus: '\u2A04',
    bigvee: '\u22C1',
    bigwedge: '\u22C0',
    bkarow: '\u290D',
    blacklozenge: '\u29EB',
    blacksquare: '\u25AA',
    blacktriangle: '\u25B4',
    blacktriangledown: '\u25BE',
    blacktriangleleft: '\u25C2',
    blacktriangleright: '\u25B8',
    blank: '\u2423',
    blk12: '\u2592',
    blk14: '\u2591',
    blk34: '\u2593',
    block: '\u2588',
    bne: '\u003D\u20E5',
    bnequiv: '\u2261\u20E5',
    bnot: '\u2310',
    bopf: '\uD835\uDD53',
    bot: '\u22A5',
    bottom: '\u22A5',
    bowtie: '\u22C8',
    boxDL: '\u2557',
    boxDR: '\u2554',
    boxDl: '\u2556',
    boxDr: '\u2553',
    boxH: '\u2550',
    boxHD: '\u2566',
    boxHU: '\u2569',
    boxHd: '\u2564',
    boxHu: '\u2567',
    boxUL: '\u255D',
    boxUR: '\u255A',
    boxUl: '\u255C',
    boxUr: '\u2559',
    boxV: '\u2551',
    boxVH: '\u256C',
    boxVL: '\u2563',
    boxVR: '\u2560',
    boxVh: '\u256B',
    boxVl: '\u2562',
    boxVr: '\u255F',
    boxbox: '\u29C9',
    boxdL: '\u2555',
    boxdR: '\u2552',
    boxdl: '\u2510',
    boxdr: '\u250C',
    boxh: '\u2500',
    boxhD: '\u2565',
    boxhU: '\u2568',
    boxhd: '\u252C',
    boxhu: '\u2534',
    boxminus: '\u229F',
    boxplus: '\u229E',
    boxtimes: '\u22A0',
    boxuL: '\u255B',
    boxuR: '\u2558',
    boxul: '\u2518',
    boxur: '\u2514',
    boxv: '\u2502',
    boxvH: '\u256A',
    boxvL: '\u2561',
    boxvR: '\u255E',
    boxvh: '\u253C',
    boxvl: '\u2524',
    boxvr: '\u251C',
    bprime: '\u2035',
    breve: '\u02D8',
    brvbar: '\u00A6',
    bscr: '\uD835\uDCB7',
    bsemi: '\u204F',
    bsim: '\u223D',
    bsime: '\u22CD',
    bsol: '\u005C',
    bsolb: '\u29C5',
    bsolhsub: '\u27C8',
    bull: '\u2022',
    bullet: '\u2022',
    bump: '\u224E',
    bumpE: '\u2AAE',
    bumpe: '\u224F',
    bumpeq: '\u224F',
    cacute: '\u0107',
    cap: '\u2229',
    capand: '\u2A44',
    capbrcup: '\u2A49',
    capcap: '\u2A4B',
    capcup: '\u2A47',
    capdot: '\u2A40',
    caps: '\u2229\uFE00',
    caret: '\u2041',
    caron: '\u02C7',
    ccaps: '\u2A4D',
    ccaron: '\u010D',
    ccedil: '\u00E7',
    ccirc: '\u0109',
    ccups: '\u2A4C',
    ccupssm: '\u2A50',
    cdot: '\u010B',
    cedil: '\u00B8',
    cemptyv: '\u29B2',
    cent: '\u00A2',
    centerdot: '\u00B7',
    cfr: '\uD835\uDD20',
    chcy: '\u0447',
    check: '\u2713',
    checkmark: '\u2713',
    chi: '\u03C7',
    cir: '\u25CB',
    cirE: '\u29C3',
    circ: '\u02C6',
    circeq: '\u2257',
    circlearrowleft: '\u21BA',
    circlearrowright: '\u21BB',
    circledR: '\u00AE',
    circledS: '\u24C8',
    circledast: '\u229B',
    circledcirc: '\u229A',
    circleddash: '\u229D',
    cire: '\u2257',
    cirfnint: '\u2A10',
    cirmid: '\u2AEF',
    cirscir: '\u29C2',
    clubs: '\u2663',
    clubsuit: '\u2663',
    colon: '\u003A',
    colone: '\u2254',
    coloneq: '\u2254',
    comma: '\u002C',
    commat: '\u0040',
    comp: '\u2201',
    compfn: '\u2218',
    complement: '\u2201',
    complexes: '\u2102',
    cong: '\u2245',
    congdot: '\u2A6D',
    conint: '\u222E',
    copf: '\uD835\uDD54',
    coprod: '\u2210',
    copy: '\u00A9',
    copysr: '\u2117',
    crarr: '\u21B5',
    cross: '\u2717',
    cscr: '\uD835\uDCB8',
    csub: '\u2ACF',
    csube: '\u2AD1',
    csup: '\u2AD0',
    csupe: '\u2AD2',
    ctdot: '\u22EF',
    cudarrl: '\u2938',
    cudarrr: '\u2935',
    cuepr: '\u22DE',
    cuesc: '\u22DF',
    cularr: '\u21B6',
    cularrp: '\u293D',
    cup: '\u222A',
    cupbrcap: '\u2A48',
    cupcap: '\u2A46',
    cupcup: '\u2A4A',
    cupdot: '\u228D',
    cupor: '\u2A45',
    cups: '\u222A\uFE00',
    curarr: '\u21B7',
    curarrm: '\u293C',
    curlyeqprec: '\u22DE',
    curlyeqsucc: '\u22DF',
    curlyvee: '\u22CE',
    curlywedge: '\u22CF',
    curren: '\u00A4',
    curvearrowleft: '\u21B6',
    curvearrowright: '\u21B7',
    cuvee: '\u22CE',
    cuwed: '\u22CF',
    cwconint: '\u2232',
    cwint: '\u2231',
    cylcty: '\u232D',
    dArr: '\u21D3',
    dHar: '\u2965',
    dagger: '\u2020',
    daleth: '\u2138',
    darr: '\u2193',
    dash: '\u2010',
    dashv: '\u22A3',
    dbkarow: '\u290F',
    dblac: '\u02DD',
    dcaron: '\u010F',
    dcy: '\u0434',
    dd: '\u2146',
    ddagger: '\u2021',
    ddarr: '\u21CA',
    ddotseq: '\u2A77',
    deg: '\u00B0',
    delta: '\u03B4',
    demptyv: '\u29B1',
    dfisht: '\u297F',
    dfr: '\uD835\uDD21',
    dharl: '\u21C3',
    dharr: '\u21C2',
    diam: '\u22C4',
    diamond: '\u22C4',
    diamondsuit: '\u2666',
    diams: '\u2666',
    die: '\u00A8',
    digamma: '\u03DD',
    disin: '\u22F2',
    div: '\u00F7',
    divide: '\u00F7',
    divideontimes: '\u22C7',
    divonx: '\u22C7',
    djcy: '\u0452',
    dlcorn: '\u231E',
    dlcrop: '\u230D',
    dollar: '\u0024',
    dopf: '\uD835\uDD55',
    dot: '\u02D9',
    doteq: '\u2250',
    doteqdot: '\u2251',
    dotminus: '\u2238',
    dotplus: '\u2214',
    dotsquare: '\u22A1',
    doublebarwedge: '\u2306',
    downarrow: '\u2193',
    downdownarrows: '\u21CA',
    downharpoonleft: '\u21C3',
    downharpoonright: '\u21C2',
    drbkarow: '\u2910',
    drcorn: '\u231F',
    drcrop: '\u230C',
    dscr: '\uD835\uDCB9',
    dscy: '\u0455',
    dsol: '\u29F6',
    dstrok: '\u0111',
    dtdot: '\u22F1',
    dtri: '\u25BF',
    dtrif: '\u25BE',
    duarr: '\u21F5',
    duhar: '\u296F',
    dwangle: '\u29A6',
    dzcy: '\u045F',
    dzigrarr: '\u27FF',
    eDDot: '\u2A77',
    eDot: '\u2251',
    eacute: '\u00E9',
    easter: '\u2A6E',
    ecaron: '\u011B',
    ecir: '\u2256',
    ecirc: '\u00EA',
    ecolon: '\u2255',
    ecy: '\u044D',
    edot: '\u0117',
    ee: '\u2147',
    efDot: '\u2252',
    efr: '\uD835\uDD22',
    eg: '\u2A9A',
    egrave: '\u00E8',
    egs: '\u2A96',
    egsdot: '\u2A98',
    el: '\u2A99',
    elinters: '\u23E7',
    ell: '\u2113',
    els: '\u2A95',
    elsdot: '\u2A97',
    emacr: '\u0113',
    empty: '\u2205',
    emptyset: '\u2205',
    emptyv: '\u2205',
    emsp13: '\u2004',
    emsp14: '\u2005',
    emsp: '\u2003',
    eng: '\u014B',
    ensp: '\u2002',
    eogon: '\u0119',
    eopf: '\uD835\uDD56',
    epar: '\u22D5',
    eparsl: '\u29E3',
    eplus: '\u2A71',
    epsi: '\u03B5',
    epsilon: '\u03B5',
    epsiv: '\u03F5',
    eqcirc: '\u2256',
    eqcolon: '\u2255',
    eqsim: '\u2242',
    eqslantgtr: '\u2A96',
    eqslantless: '\u2A95',
    equals: '\u003D',
    equest: '\u225F',
    equiv: '\u2261',
    equivDD: '\u2A78',
    eqvparsl: '\u29E5',
    erDot: '\u2253',
    erarr: '\u2971',
    escr: '\u212F',
    esdot: '\u2250',
    esim: '\u2242',
    eta: '\u03B7',
    eth: '\u00F0',
    euml: '\u00EB',
    euro: '\u20AC',
    excl: '\u0021',
    exist: '\u2203',
    expectation: '\u2130',
    exponentiale: '\u2147',
    fallingdotseq: '\u2252',
    fcy: '\u0444',
    female: '\u2640',
    ffilig: '\uFB03',
    fflig: '\uFB00',
    ffllig: '\uFB04',
    ffr: '\uD835\uDD23',
    filig: '\uFB01',
    fjlig: '\u0066\u006A',
    flat: '\u266D',
    fllig: '\uFB02',
    fltns: '\u25B1',
    fnof: '\u0192',
    fopf: '\uD835\uDD57',
    forall: '\u2200',
    fork: '\u22D4',
    forkv: '\u2AD9',
    fpartint: '\u2A0D',
    frac12: '\u00BD',
    frac13: '\u2153',
    frac14: '\u00BC',
    frac15: '\u2155',
    frac16: '\u2159',
    frac18: '\u215B',
    frac23: '\u2154',
    frac25: '\u2156',
    frac34: '\u00BE',
    frac35: '\u2157',
    frac38: '\u215C',
    frac45: '\u2158',
    frac56: '\u215A',
    frac58: '\u215D',
    frac78: '\u215E',
    frasl: '\u2044',
    frown: '\u2322',
    fscr: '\uD835\uDCBB',
    gE: '\u2267',
    gEl: '\u2A8C',
    gacute: '\u01F5',
    gamma: '\u03B3',
    gammad: '\u03DD',
    gap: '\u2A86',
    gbreve: '\u011F',
    gcirc: '\u011D',
    gcy: '\u0433',
    gdot: '\u0121',
    ge: '\u2265',
    gel: '\u22DB',
    geq: '\u2265',
    geqq: '\u2267',
    geqslant: '\u2A7E',
    ges: '\u2A7E',
    gescc: '\u2AA9',
    gesdot: '\u2A80',
    gesdoto: '\u2A82',
    gesdotol: '\u2A84',
    gesl: '\u22DB\uFE00',
    gesles: '\u2A94',
    gfr: '\uD835\uDD24',
    gg: '\u226B',
    ggg: '\u22D9',
    gimel: '\u2137',
    gjcy: '\u0453',
    gl: '\u2277',
    glE: '\u2A92',
    gla: '\u2AA5',
    glj: '\u2AA4',
    gnE: '\u2269',
    gnap: '\u2A8A',
    gnapprox: '\u2A8A',
    gne: '\u2A88',
    gneq: '\u2A88',
    gneqq: '\u2269',
    gnsim: '\u22E7',
    gopf: '\uD835\uDD58',
    grave: '\u0060',
    gscr: '\u210A',
    gsim: '\u2273',
    gsime: '\u2A8E',
    gsiml: '\u2A90',
    gt: '\u003E',
    gtcc: '\u2AA7',
    gtcir: '\u2A7A',
    gtdot: '\u22D7',
    gtlPar: '\u2995',
    gtquest: '\u2A7C',
    gtrapprox: '\u2A86',
    gtrarr: '\u2978',
    gtrdot: '\u22D7',
    gtreqless: '\u22DB',
    gtreqqless: '\u2A8C',
    gtrless: '\u2277',
    gtrsim: '\u2273',
    gvertneqq: '\u2269\uFE00',
    gvnE: '\u2269\uFE00',
    hArr: '\u21D4',
    hairsp: '\u200A',
    half: '\u00BD',
    hamilt: '\u210B',
    hardcy: '\u044A',
    harr: '\u2194',
    harrcir: '\u2948',
    harrw: '\u21AD',
    hbar: '\u210F',
    hcirc: '\u0125',
    hearts: '\u2665',
    heartsuit: '\u2665',
    hellip: '\u2026',
    hercon: '\u22B9',
    hfr: '\uD835\uDD25',
    hksearow: '\u2925',
    hkswarow: '\u2926',
    hoarr: '\u21FF',
    homtht: '\u223B',
    hookleftarrow: '\u21A9',
    hookrightarrow: '\u21AA',
    hopf: '\uD835\uDD59',
    horbar: '\u2015',
    hscr: '\uD835\uDCBD',
    hslash: '\u210F',
    hstrok: '\u0127',
    hybull: '\u2043',
    hyphen: '\u2010',
    iacute: '\u00ED',
    ic: '\u2063',
    icirc: '\u00EE',
    icy: '\u0438',
    iecy: '\u0435',
    iexcl: '\u00A1',
    iff: '\u21D4',
    ifr: '\uD835\uDD26',
    igrave: '\u00EC',
    ii: '\u2148',
    iiiint: '\u2A0C',
    iiint: '\u222D',
    iinfin: '\u29DC',
    iiota: '\u2129',
    ijlig: '\u0133',
    imacr: '\u012B',
    image: '\u2111',
    imagline: '\u2110',
    imagpart: '\u2111',
    imath: '\u0131',
    imof: '\u22B7',
    imped: '\u01B5',
    in: '\u2208',
    incare: '\u2105',
    infin: '\u221E',
    infintie: '\u29DD',
    inodot: '\u0131',
    int: '\u222B',
    intcal: '\u22BA',
    integers: '\u2124',
    intercal: '\u22BA',
    intlarhk: '\u2A17',
    intprod: '\u2A3C',
    iocy: '\u0451',
    iogon: '\u012F',
    iopf: '\uD835\uDD5A',
    iota: '\u03B9',
    iprod: '\u2A3C',
    iquest: '\u00BF',
    iscr: '\uD835\uDCBE',
    isin: '\u2208',
    isinE: '\u22F9',
    isindot: '\u22F5',
    isins: '\u22F4',
    isinsv: '\u22F3',
    isinv: '\u2208',
    it: '\u2062',
    itilde: '\u0129',
    iukcy: '\u0456',
    iuml: '\u00EF',
    jcirc: '\u0135',
    jcy: '\u0439',
    jfr: '\uD835\uDD27',
    jmath: '\u0237',
    jopf: '\uD835\uDD5B',
    jscr: '\uD835\uDCBF',
    jsercy: '\u0458',
    jukcy: '\u0454',
    kappa: '\u03BA',
    kappav: '\u03F0',
    kcedil: '\u0137',
    kcy: '\u043A',
    kfr: '\uD835\uDD28',
    kgreen: '\u0138',
    khcy: '\u0445',
    kjcy: '\u045C',
    kopf: '\uD835\uDD5C',
    kscr: '\uD835\uDCC0',
    lAarr: '\u21DA',
    lArr: '\u21D0',
    lAtail: '\u291B',
    lBarr: '\u290E',
    lE: '\u2266',
    lEg: '\u2A8B',
    lHar: '\u2962',
    lacute: '\u013A',
    laemptyv: '\u29B4',
    lagran: '\u2112',
    lambda: '\u03BB',
    lang: '\u27E8',
    langd: '\u2991',
    langle: '\u27E8',
    lap: '\u2A85',
    laquo: '\u00AB',
    larr: '\u2190',
    larrb: '\u21E4',
    larrbfs: '\u291F',
    larrfs: '\u291D',
    larrhk: '\u21A9',
    larrlp: '\u21AB',
    larrpl: '\u2939',
    larrsim: '\u2973',
    larrtl: '\u21A2',
    lat: '\u2AAB',
    latail: '\u2919',
    late: '\u2AAD',
    lates: '\u2AAD\uFE00',
    lbarr: '\u290C',
    lbbrk: '\u2772',
    lbrace: '\u007B',
    lbrack: '\u005B',
    lbrke: '\u298B',
    lbrksld: '\u298F',
    lbrkslu: '\u298D',
    lcaron: '\u013E',
    lcedil: '\u013C',
    lceil: '\u2308',
    lcub: '\u007B',
    lcy: '\u043B',
    ldca: '\u2936',
    ldquo: '\u201C',
    ldquor: '\u201E',
    ldrdhar: '\u2967',
    ldrushar: '\u294B',
    ldsh: '\u21B2',
    le: '\u2264',
    leftarrow: '\u2190',
    leftarrowtail: '\u21A2',
    leftharpoondown: '\u21BD',
    leftharpoonup: '\u21BC',
    leftleftarrows: '\u21C7',
    leftrightarrow: '\u2194',
    leftrightarrows: '\u21C6',
    leftrightharpoons: '\u21CB',
    leftrightsquigarrow: '\u21AD',
    leftthreetimes: '\u22CB',
    leg: '\u22DA',
    leq: '\u2264',
    leqq: '\u2266',
    leqslant: '\u2A7D',
    les: '\u2A7D',
    lescc: '\u2AA8',
    lesdot: '\u2A7F',
    lesdoto: '\u2A81',
    lesdotor: '\u2A83',
    lesg: '\u22DA\uFE00',
    lesges: '\u2A93',
    lessapprox: '\u2A85',
    lessdot: '\u22D6',
    lesseqgtr: '\u22DA',
    lesseqqgtr: '\u2A8B',
    lessgtr: '\u2276',
    lesssim: '\u2272',
    lfisht: '\u297C',
    lfloor: '\u230A',
    lfr: '\uD835\uDD29',
    lg: '\u2276',
    lgE: '\u2A91',
    lhard: '\u21BD',
    lharu: '\u21BC',
    lharul: '\u296A',
    lhblk: '\u2584',
    ljcy: '\u0459',
    ll: '\u226A',
    llarr: '\u21C7',
    llcorner: '\u231E',
    llhard: '\u296B',
    lltri: '\u25FA',
    lmidot: '\u0140',
    lmoust: '\u23B0',
    lmoustache: '\u23B0',
    lnE: '\u2268',
    lnap: '\u2A89',
    lnapprox: '\u2A89',
    lne: '\u2A87',
    lneq: '\u2A87',
    lneqq: '\u2268',
    lnsim: '\u22E6',
    loang: '\u27EC',
    loarr: '\u21FD',
    lobrk: '\u27E6',
    longleftarrow: '\u27F5',
    longleftrightarrow: '\u27F7',
    longmapsto: '\u27FC',
    longrightarrow: '\u27F6',
    looparrowleft: '\u21AB',
    looparrowright: '\u21AC',
    lopar: '\u2985',
    lopf: '\uD835\uDD5D',
    loplus: '\u2A2D',
    lotimes: '\u2A34',
    lowast: '\u2217',
    lowbar: '\u005F',
    loz: '\u25CA',
    lozenge: '\u25CA',
    lozf: '\u29EB',
    lpar: '\u0028',
    lparlt: '\u2993',
    lrarr: '\u21C6',
    lrcorner: '\u231F',
    lrhar: '\u21CB',
    lrhard: '\u296D',
    lrm: '\u200E',
    lrtri: '\u22BF',
    lsaquo: '\u2039',
    lscr: '\uD835\uDCC1',
    lsh: '\u21B0',
    lsim: '\u2272',
    lsime: '\u2A8D',
    lsimg: '\u2A8F',
    lsqb: '\u005B',
    lsquo: '\u2018',
    lsquor: '\u201A',
    lstrok: '\u0142',
    lt: '\u003C',
    ltcc: '\u2AA6',
    ltcir: '\u2A79',
    ltdot: '\u22D6',
    lthree: '\u22CB',
    ltimes: '\u22C9',
    ltlarr: '\u2976',
    ltquest: '\u2A7B',
    ltrPar: '\u2996',
    ltri: '\u25C3',
    ltrie: '\u22B4',
    ltrif: '\u25C2',
    lurdshar: '\u294A',
    luruhar: '\u2966',
    lvertneqq: '\u2268\uFE00',
    lvnE: '\u2268\uFE00',
    mDDot: '\u223A',
    macr: '\u00AF',
    male: '\u2642',
    malt: '\u2720',
    maltese: '\u2720',
    map: '\u21A6',
    mapsto: '\u21A6',
    mapstodown: '\u21A7',
    mapstoleft: '\u21A4',
    mapstoup: '\u21A5',
    marker: '\u25AE',
    mcomma: '\u2A29',
    mcy: '\u043C',
    mdash: '\u2014',
    measuredangle: '\u2221',
    mfr: '\uD835\uDD2A',
    mho: '\u2127',
    micro: '\u00B5',
    mid: '\u2223',
    midast: '\u002A',
    midcir: '\u2AF0',
    middot: '\u00B7',
    minus: '\u2212',
    minusb: '\u229F',
    minusd: '\u2238',
    minusdu: '\u2A2A',
    mlcp: '\u2ADB',
    mldr: '\u2026',
    mnplus: '\u2213',
    models: '\u22A7',
    mopf: '\uD835\uDD5E',
    mp: '\u2213',
    mscr: '\uD835\uDCC2',
    mstpos: '\u223E',
    mu: '\u03BC',
    multimap: '\u22B8',
    mumap: '\u22B8',
    nGg: '\u22D9\u0338',
    nGt: '\u226B\u20D2',
    nGtv: '\u226B\u0338',
    nLeftarrow: '\u21CD',
    nLeftrightarrow: '\u21CE',
    nLl: '\u22D8\u0338',
    nLt: '\u226A\u20D2',
    nLtv: '\u226A\u0338',
    nRightarrow: '\u21CF',
    nVDash: '\u22AF',
    nVdash: '\u22AE',
    nabla: '\u2207',
    nacute: '\u0144',
    nang: '\u2220\u20D2',
    nap: '\u2249',
    napE: '\u2A70\u0338',
    napid: '\u224B\u0338',
    napos: '\u0149',
    napprox: '\u2249',
    natur: '\u266E',
    natural: '\u266E',
    naturals: '\u2115',
    nbsp: '\u00A0',
    nbump: '\u224E\u0338',
    nbumpe: '\u224F\u0338',
    ncap: '\u2A43',
    ncaron: '\u0148',
    ncedil: '\u0146',
    ncong: '\u2247',
    ncongdot: '\u2A6D\u0338',
    ncup: '\u2A42',
    ncy: '\u043D',
    ndash: '\u2013',
    ne: '\u2260',
    neArr: '\u21D7',
    nearhk: '\u2924',
    nearr: '\u2197',
    nearrow: '\u2197',
    nedot: '\u2250\u0338',
    nequiv: '\u2262',
    nesear: '\u2928',
    nesim: '\u2242\u0338',
    nexist: '\u2204',
    nexists: '\u2204',
    nfr: '\uD835\uDD2B',
    ngE: '\u2267\u0338',
    nge: '\u2271',
    ngeq: '\u2271',
    ngeqq: '\u2267\u0338',
    ngeqslant: '\u2A7E\u0338',
    nges: '\u2A7E\u0338',
    ngsim: '\u2275',
    ngt: '\u226F',
    ngtr: '\u226F',
    nhArr: '\u21CE',
    nharr: '\u21AE',
    nhpar: '\u2AF2',
    ni: '\u220B',
    nis: '\u22FC',
    nisd: '\u22FA',
    niv: '\u220B',
    njcy: '\u045A',
    nlArr: '\u21CD',
    nlE: '\u2266\u0338',
    nlarr: '\u219A',
    nldr: '\u2025',
    nle: '\u2270',
    nleftarrow: '\u219A',
    nleftrightarrow: '\u21AE',
    nleq: '\u2270',
    nleqq: '\u2266\u0338',
    nleqslant: '\u2A7D\u0338',
    nles: '\u2A7D\u0338',
    nless: '\u226E',
    nlsim: '\u2274',
    nlt: '\u226E',
    nltri: '\u22EA',
    nltrie: '\u22EC',
    nmid: '\u2224',
    nopf: '\uD835\uDD5F',
    not: '\u00AC',
    notin: '\u2209',
    notinE: '\u22F9\u0338',
    notindot: '\u22F5\u0338',
    notinva: '\u2209',
    notinvb: '\u22F7',
    notinvc: '\u22F6',
    notni: '\u220C',
    notniva: '\u220C',
    notnivb: '\u22FE',
    notnivc: '\u22FD',
    npar: '\u2226',
    nparallel: '\u2226',
    nparsl: '\u2AFD\u20E5',
    npart: '\u2202\u0338',
    npolint: '\u2A14',
    npr: '\u2280',
    nprcue: '\u22E0',
    npre: '\u2AAF\u0338',
    nprec: '\u2280',
    npreceq: '\u2AAF\u0338',
    nrArr: '\u21CF',
    nrarr: '\u219B',
    nrarrc: '\u2933\u0338',
    nrarrw: '\u219D\u0338',
    nrightarrow: '\u219B',
    nrtri: '\u22EB',
    nrtrie: '\u22ED',
    nsc: '\u2281',
    nsccue: '\u22E1',
    nsce: '\u2AB0\u0338',
    nscr: '\uD835\uDCC3',
    nshortmid: '\u2224',
    nshortparallel: '\u2226',
    nsim: '\u2241',
    nsime: '\u2244',
    nsimeq: '\u2244',
    nsmid: '\u2224',
    nspar: '\u2226',
    nsqsube: '\u22E2',
    nsqsupe: '\u22E3',
    nsub: '\u2284',
    nsubE: '\u2AC5\u0338',
    nsube: '\u2288',
    nsubset: '\u2282\u20D2',
    nsubseteq: '\u2288',
    nsubseteqq: '\u2AC5\u0338',
    nsucc: '\u2281',
    nsucceq: '\u2AB0\u0338',
    nsup: '\u2285',
    nsupE: '\u2AC6\u0338',
    nsupe: '\u2289',
    nsupset: '\u2283\u20D2',
    nsupseteq: '\u2289',
    nsupseteqq: '\u2AC6\u0338',
    ntgl: '\u2279',
    ntilde: '\u00F1',
    ntlg: '\u2278',
    ntriangleleft: '\u22EA',
    ntrianglelefteq: '\u22EC',
    ntriangleright: '\u22EB',
    ntrianglerighteq: '\u22ED',
    nu: '\u03BD',
    num: '\u0023',
    numero: '\u2116',
    numsp: '\u2007',
    nvDash: '\u22AD',
    nvHarr: '\u2904',
    nvap: '\u224D\u20D2',
    nvdash: '\u22AC',
    nvge: '\u2265\u20D2',
    nvgt: '\u003E\u20D2',
    nvinfin: '\u29DE',
    nvlArr: '\u2902',
    nvle: '\u2264\u20D2',
    nvlt: '\u003C\u20D2',
    nvltrie: '\u22B4\u20D2',
    nvrArr: '\u2903',
    nvrtrie: '\u22B5\u20D2',
    nvsim: '\u223C\u20D2',
    nwArr: '\u21D6',
    nwarhk: '\u2923',
    nwarr: '\u2196',
    nwarrow: '\u2196',
    nwnear: '\u2927',
    oS: '\u24C8',
    oacute: '\u00F3',
    oast: '\u229B',
    ocir: '\u229A',
    ocirc: '\u00F4',
    ocy: '\u043E',
    odash: '\u229D',
    odblac: '\u0151',
    odiv: '\u2A38',
    odot: '\u2299',
    odsold: '\u29BC',
    oelig: '\u0153',
    ofcir: '\u29BF',
    ofr: '\uD835\uDD2C',
    ogon: '\u02DB',
    ograve: '\u00F2',
    ogt: '\u29C1',
    ohbar: '\u29B5',
    ohm: '\u03A9',
    oint: '\u222E',
    olarr: '\u21BA',
    olcir: '\u29BE',
    olcross: '\u29BB',
    oline: '\u203E',
    olt: '\u29C0',
    omacr: '\u014D',
    omega: '\u03C9',
    omicron: '\u03BF',
    omid: '\u29B6',
    ominus: '\u2296',
    oopf: '\uD835\uDD60',
    opar: '\u29B7',
    operp: '\u29B9',
    oplus: '\u2295',
    or: '\u2228',
    orarr: '\u21BB',
    ord: '\u2A5D',
    order: '\u2134',
    orderof: '\u2134',
    ordf: '\u00AA',
    ordm: '\u00BA',
    origof: '\u22B6',
    oror: '\u2A56',
    orslope: '\u2A57',
    orv: '\u2A5B',
    oscr: '\u2134',
    oslash: '\u00F8',
    osol: '\u2298',
    otilde: '\u00F5',
    otimes: '\u2297',
    otimesas: '\u2A36',
    ouml: '\u00F6',
    ovbar: '\u233D',
    par: '\u2225',
    para: '\u00B6',
    parallel: '\u2225',
    parsim: '\u2AF3',
    parsl: '\u2AFD',
    part: '\u2202',
    pcy: '\u043F',
    percnt: '\u0025',
    period: '\u002E',
    permil: '\u2030',
    perp: '\u22A5',
    pertenk: '\u2031',
    pfr: '\uD835\uDD2D',
    phi: '\u03C6',
    phiv: '\u03D5',
    phmmat: '\u2133',
    phone: '\u260E',
    pi: '\u03C0',
    pitchfork: '\u22D4',
    piv: '\u03D6',
    planck: '\u210F',
    planckh: '\u210E',
    plankv: '\u210F',
    plus: '\u002B',
    plusacir: '\u2A23',
    plusb: '\u229E',
    pluscir: '\u2A22',
    plusdo: '\u2214',
    plusdu: '\u2A25',
    pluse: '\u2A72',
    plusmn: '\u00B1',
    plussim: '\u2A26',
    plustwo: '\u2A27',
    pm: '\u00B1',
    pointint: '\u2A15',
    popf: '\uD835\uDD61',
    pound: '\u00A3',
    pr: '\u227A',
    prE: '\u2AB3',
    prap: '\u2AB7',
    prcue: '\u227C',
    pre: '\u2AAF',
    prec: '\u227A',
    precapprox: '\u2AB7',
    preccurlyeq: '\u227C',
    preceq: '\u2AAF',
    precnapprox: '\u2AB9',
    precneqq: '\u2AB5',
    precnsim: '\u22E8',
    precsim: '\u227E',
    prime: '\u2032',
    primes: '\u2119',
    prnE: '\u2AB5',
    prnap: '\u2AB9',
    prnsim: '\u22E8',
    prod: '\u220F',
    profalar: '\u232E',
    profline: '\u2312',
    profsurf: '\u2313',
    prop: '\u221D',
    propto: '\u221D',
    prsim: '\u227E',
    prurel: '\u22B0',
    pscr: '\uD835\uDCC5',
    psi: '\u03C8',
    puncsp: '\u2008',
    qfr: '\uD835\uDD2E',
    qint: '\u2A0C',
    qopf: '\uD835\uDD62',
    qprime: '\u2057',
    qscr: '\uD835\uDCC6',
    quaternions: '\u210D',
    quatint: '\u2A16',
    quest: '\u003F',
    questeq: '\u225F',
    quot: '\u0022',
    rAarr: '\u21DB',
    rArr: '\u21D2',
    rAtail: '\u291C',
    rBarr: '\u290F',
    rHar: '\u2964',
    race: '\u223D\u0331',
    racute: '\u0155',
    radic: '\u221A',
    raemptyv: '\u29B3',
    rang: '\u27E9',
    rangd: '\u2992',
    range: '\u29A5',
    rangle: '\u27E9',
    raquo: '\u00BB',
    rarr: '\u2192',
    rarrap: '\u2975',
    rarrb: '\u21E5',
    rarrbfs: '\u2920',
    rarrc: '\u2933',
    rarrfs: '\u291E',
    rarrhk: '\u21AA',
    rarrlp: '\u21AC',
    rarrpl: '\u2945',
    rarrsim: '\u2974',
    rarrtl: '\u21A3',
    rarrw: '\u219D',
    ratail: '\u291A',
    ratio: '\u2236',
    rationals: '\u211A',
    rbarr: '\u290D',
    rbbrk: '\u2773',
    rbrace: '\u007D',
    rbrack: '\u005D',
    rbrke: '\u298C',
    rbrksld: '\u298E',
    rbrkslu: '\u2990',
    rcaron: '\u0159',
    rcedil: '\u0157',
    rceil: '\u2309',
    rcub: '\u007D',
    rcy: '\u0440',
    rdca: '\u2937',
    rdldhar: '\u2969',
    rdquo: '\u201D',
    rdquor: '\u201D',
    rdsh: '\u21B3',
    real: '\u211C',
    realine: '\u211B',
    realpart: '\u211C',
    reals: '\u211D',
    rect: '\u25AD',
    reg: '\u00AE',
    rfisht: '\u297D',
    rfloor: '\u230B',
    rfr: '\uD835\uDD2F',
    rhard: '\u21C1',
    rharu: '\u21C0',
    rharul: '\u296C',
    rho: '\u03C1',
    rhov: '\u03F1',
    rightarrow: '\u2192',
    rightarrowtail: '\u21A3',
    rightharpoondown: '\u21C1',
    rightharpoonup: '\u21C0',
    rightleftarrows: '\u21C4',
    rightleftharpoons: '\u21CC',
    rightrightarrows: '\u21C9',
    rightsquigarrow: '\u219D',
    rightthreetimes: '\u22CC',
    ring: '\u02DA',
    risingdotseq: '\u2253',
    rlarr: '\u21C4',
    rlhar: '\u21CC',
    rlm: '\u200F',
    rmoust: '\u23B1',
    rmoustache: '\u23B1',
    rnmid: '\u2AEE',
    roang: '\u27ED',
    roarr: '\u21FE',
    robrk: '\u27E7',
    ropar: '\u2986',
    ropf: '\uD835\uDD63',
    roplus: '\u2A2E',
    rotimes: '\u2A35',
    rpar: '\u0029',
    rpargt: '\u2994',
    rppolint: '\u2A12',
    rrarr: '\u21C9',
    rsaquo: '\u203A',
    rscr: '\uD835\uDCC7',
    rsh: '\u21B1',
    rsqb: '\u005D',
    rsquo: '\u2019',
    rsquor: '\u2019',
    rthree: '\u22CC',
    rtimes: '\u22CA',
    rtri: '\u25B9',
    rtrie: '\u22B5',
    rtrif: '\u25B8',
    rtriltri: '\u29CE',
    ruluhar: '\u2968',
    rx: '\u211E',
    sacute: '\u015B',
    sbquo: '\u201A',
    sc: '\u227B',
    scE: '\u2AB4',
    scap: '\u2AB8',
    scaron: '\u0161',
    sccue: '\u227D',
    sce: '\u2AB0',
    scedil: '\u015F',
    scirc: '\u015D',
    scnE: '\u2AB6',
    scnap: '\u2ABA',
    scnsim: '\u22E9',
    scpolint: '\u2A13',
    scsim: '\u227F',
    scy: '\u0441',
    sdot: '\u22C5',
    sdotb: '\u22A1',
    sdote: '\u2A66',
    seArr: '\u21D8',
    searhk: '\u2925',
    searr: '\u2198',
    searrow: '\u2198',
    sect: '\u00A7',
    semi: '\u003B',
    seswar: '\u2929',
    setminus: '\u2216',
    setmn: '\u2216',
    sext: '\u2736',
    sfr: '\uD835\uDD30',
    sfrown: '\u2322',
    sharp: '\u266F',
    shchcy: '\u0449',
    shcy: '\u0448',
    shortmid: '\u2223',
    shortparallel: '\u2225',
    shy: '\u00AD',
    sigma: '\u03C3',
    sigmaf: '\u03C2',
    sigmav: '\u03C2',
    sim: '\u223C',
    simdot: '\u2A6A',
    sime: '\u2243',
    simeq: '\u2243',
    simg: '\u2A9E',
    simgE: '\u2AA0',
    siml: '\u2A9D',
    simlE: '\u2A9F',
    simne: '\u2246',
    simplus: '\u2A24',
    simrarr: '\u2972',
    slarr: '\u2190',
    smallsetminus: '\u2216',
    smashp: '\u2A33',
    smeparsl: '\u29E4',
    smid: '\u2223',
    smile: '\u2323',
    smt: '\u2AAA',
    smte: '\u2AAC',
    smtes: '\u2AAC\uFE00',
    softcy: '\u044C',
    sol: '\u002F',
    solb: '\u29C4',
    solbar: '\u233F',
    sopf: '\uD835\uDD64',
    spades: '\u2660',
    spadesuit: '\u2660',
    spar: '\u2225',
    sqcap: '\u2293',
    sqcaps: '\u2293\uFE00',
    sqcup: '\u2294',
    sqcups: '\u2294\uFE00',
    sqsub: '\u228F',
    sqsube: '\u2291',
    sqsubset: '\u228F',
    sqsubseteq: '\u2291',
    sqsup: '\u2290',
    sqsupe: '\u2292',
    sqsupset: '\u2290',
    sqsupseteq: '\u2292',
    squ: '\u25A1',
    square: '\u25A1',
    squarf: '\u25AA',
    squf: '\u25AA',
    srarr: '\u2192',
    sscr: '\uD835\uDCC8',
    ssetmn: '\u2216',
    ssmile: '\u2323',
    sstarf: '\u22C6',
    star: '\u2606',
    starf: '\u2605',
    straightepsilon: '\u03F5',
    straightphi: '\u03D5',
    strns: '\u00AF',
    sub: '\u2282',
    subE: '\u2AC5',
    subdot: '\u2ABD',
    sube: '\u2286',
    subedot: '\u2AC3',
    submult: '\u2AC1',
    subnE: '\u2ACB',
    subne: '\u228A',
    subplus: '\u2ABF',
    subrarr: '\u2979',
    subset: '\u2282',
    subseteq: '\u2286',
    subseteqq: '\u2AC5',
    subsetneq: '\u228A',
    subsetneqq: '\u2ACB',
    subsim: '\u2AC7',
    subsub: '\u2AD5',
    subsup: '\u2AD3',
    succ: '\u227B',
    succapprox: '\u2AB8',
    succcurlyeq: '\u227D',
    succeq: '\u2AB0',
    succnapprox: '\u2ABA',
    succneqq: '\u2AB6',
    succnsim: '\u22E9',
    succsim: '\u227F',
    sum: '\u2211',
    sung: '\u266A',
    sup1: '\u00B9',
    sup2: '\u00B2',
    sup3: '\u00B3',
    sup: '\u2283',
    supE: '\u2AC6',
    supdot: '\u2ABE',
    supdsub: '\u2AD8',
    supe: '\u2287',
    supedot: '\u2AC4',
    suphsol: '\u27C9',
    suphsub: '\u2AD7',
    suplarr: '\u297B',
    supmult: '\u2AC2',
    supnE: '\u2ACC',
    supne: '\u228B',
    supplus: '\u2AC0',
    supset: '\u2283',
    supseteq: '\u2287',
    supseteqq: '\u2AC6',
    supsetneq: '\u228B',
    supsetneqq: '\u2ACC',
    supsim: '\u2AC8',
    supsub: '\u2AD4',
    supsup: '\u2AD6',
    swArr: '\u21D9',
    swarhk: '\u2926',
    swarr: '\u2199',
    swarrow: '\u2199',
    swnwar: '\u292A',
    szlig: '\u00DF',
    target: '\u2316',
    tau: '\u03C4',
    tbrk: '\u23B4',
    tcaron: '\u0165',
    tcedil: '\u0163',
    tcy: '\u0442',
    tdot: '\u20DB',
    telrec: '\u2315',
    tfr: '\uD835\uDD31',
    there4: '\u2234',
    therefore: '\u2234',
    theta: '\u03B8',
    thetasym: '\u03D1',
    thetav: '\u03D1',
    thickapprox: '\u2248',
    thicksim: '\u223C',
    thinsp: '\u2009',
    thkap: '\u2248',
    thksim: '\u223C',
    thorn: '\u00FE',
    tilde: '\u02DC',
    times: '\u00D7',
    timesb: '\u22A0',
    timesbar: '\u2A31',
    timesd: '\u2A30',
    tint: '\u222D',
    toea: '\u2928',
    top: '\u22A4',
    topbot: '\u2336',
    topcir: '\u2AF1',
    topf: '\uD835\uDD65',
    topfork: '\u2ADA',
    tosa: '\u2929',
    tprime: '\u2034',
    trade: '\u2122',
    triangle: '\u25B5',
    triangledown: '\u25BF',
    triangleleft: '\u25C3',
    trianglelefteq: '\u22B4',
    triangleq: '\u225C',
    triangleright: '\u25B9',
    trianglerighteq: '\u22B5',
    tridot: '\u25EC',
    trie: '\u225C',
    triminus: '\u2A3A',
    triplus: '\u2A39',
    trisb: '\u29CD',
    tritime: '\u2A3B',
    trpezium: '\u23E2',
    tscr: '\uD835\uDCC9',
    tscy: '\u0446',
    tshcy: '\u045B',
    tstrok: '\u0167',
    twixt: '\u226C',
    twoheadleftarrow: '\u219E',
    twoheadrightarrow: '\u21A0',
    uArr: '\u21D1',
    uHar: '\u2963',
    uacute: '\u00FA',
    uarr: '\u2191',
    ubrcy: '\u045E',
    ubreve: '\u016D',
    ucirc: '\u00FB',
    ucy: '\u0443',
    udarr: '\u21C5',
    udblac: '\u0171',
    udhar: '\u296E',
    ufisht: '\u297E',
    ufr: '\uD835\uDD32',
    ugrave: '\u00F9',
    uharl: '\u21BF',
    uharr: '\u21BE',
    uhblk: '\u2580',
    ulcorn: '\u231C',
    ulcorner: '\u231C',
    ulcrop: '\u230F',
    ultri: '\u25F8',
    umacr: '\u016B',
    uml: '\u00A8',
    uogon: '\u0173',
    uopf: '\uD835\uDD66',
    uparrow: '\u2191',
    updownarrow: '\u2195',
    upharpoonleft: '\u21BF',
    upharpoonright: '\u21BE',
    uplus: '\u228E',
    upsi: '\u03C5',
    upsih: '\u03D2',
    upsilon: '\u03C5',
    upuparrows: '\u21C8',
    urcorn: '\u231D',
    urcorner: '\u231D',
    urcrop: '\u230E',
    uring: '\u016F',
    urtri: '\u25F9',
    uscr: '\uD835\uDCCA',
    utdot: '\u22F0',
    utilde: '\u0169',
    utri: '\u25B5',
    utrif: '\u25B4',
    uuarr: '\u21C8',
    uuml: '\u00FC',
    uwangle: '\u29A7',
    vArr: '\u21D5',
    vBar: '\u2AE8',
    vBarv: '\u2AE9',
    vDash: '\u22A8',
    vangrt: '\u299C',
    varepsilon: '\u03F5',
    varkappa: '\u03F0',
    varnothing: '\u2205',
    varphi: '\u03D5',
    varpi: '\u03D6',
    varpropto: '\u221D',
    varr: '\u2195',
    varrho: '\u03F1',
    varsigma: '\u03C2',
    varsubsetneq: '\u228A\uFE00',
    varsubsetneqq: '\u2ACB\uFE00',
    varsupsetneq: '\u228B\uFE00',
    varsupsetneqq: '\u2ACC\uFE00',
    vartheta: '\u03D1',
    vartriangleleft: '\u22B2',
    vartriangleright: '\u22B3',
    vcy: '\u0432',
    vdash: '\u22A2',
    vee: '\u2228',
    veebar: '\u22BB',
    veeeq: '\u225A',
    vellip: '\u22EE',
    verbar: '\u007C',
    vert: '\u007C',
    vfr: '\uD835\uDD33',
    vltri: '\u22B2',
    vnsub: '\u2282\u20D2',
    vnsup: '\u2283\u20D2',
    vopf: '\uD835\uDD67',
    vprop: '\u221D',
    vrtri: '\u22B3',
    vscr: '\uD835\uDCCB',
    vsubnE: '\u2ACB\uFE00',
    vsubne: '\u228A\uFE00',
    vsupnE: '\u2ACC\uFE00',
    vsupne: '\u228B\uFE00',
    vzigzag: '\u299A',
    wcirc: '\u0175',
    wedbar: '\u2A5F',
    wedge: '\u2227',
    wedgeq: '\u2259',
    weierp: '\u2118',
    wfr: '\uD835\uDD34',
    wopf: '\uD835\uDD68',
    wp: '\u2118',
    wr: '\u2240',
    wreath: '\u2240',
    wscr: '\uD835\uDCCC',
    xcap: '\u22C2',
    xcirc: '\u25EF',
    xcup: '\u22C3',
    xdtri: '\u25BD',
    xfr: '\uD835\uDD35',
    xhArr: '\u27FA',
    xharr: '\u27F7',
    xi: '\u03BE',
    xlArr: '\u27F8',
    xlarr: '\u27F5',
    xmap: '\u27FC',
    xnis: '\u22FB',
    xodot: '\u2A00',
    xopf: '\uD835\uDD69',
    xoplus: '\u2A01',
    xotime: '\u2A02',
    xrArr: '\u27F9',
    xrarr: '\u27F6',
    xscr: '\uD835\uDCCD',
    xsqcup: '\u2A06',
    xuplus: '\u2A04',
    xutri: '\u25B3',
    xvee: '\u22C1',
    xwedge: '\u22C0',
    yacute: '\u00FD',
    yacy: '\u044F',
    ycirc: '\u0177',
    ycy: '\u044B',
    yen: '\u00A5',
    yfr: '\uD835\uDD36',
    yicy: '\u0457',
    yopf: '\uD835\uDD6A',
    yscr: '\uD835\uDCCE',
    yucy: '\u044E',
    yuml: '\u00FF',
    zacute: '\u017A',
    zcaron: '\u017E',
    zcy: '\u0437',
    zdot: '\u017C',
    zeetrf: '\u2128',
    zeta: '\u03B6',
    zfr: '\uD835\uDD37',
    zhcy: '\u0436',
    zigrarr: '\u21DD',
    zopf: '\uD835\uDD6B',
    zscr: '\uD835\uDCCF',
    zwj: '\u200D',
    zwnj: '\u200C'
};
const decodeMap = {
    '0': 65533,
    '128': 8364,
    '130': 8218,
    '131': 402,
    '132': 8222,
    '133': 8230,
    '134': 8224,
    '135': 8225,
    '136': 710,
    '137': 8240,
    '138': 352,
    '139': 8249,
    '140': 338,
    '142': 381,
    '145': 8216,
    '146': 8217,
    '147': 8220,
    '148': 8221,
    '149': 8226,
    '150': 8211,
    '151': 8212,
    '152': 732,
    '153': 8482,
    '154': 353,
    '155': 8250,
    '156': 339,
    '158': 382,
    '159': 376
};
function decodeHTMLStrict(text) {
    return text.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (key)=>{
        if (key.charAt(1) === '#') {
            const secondChar = key.charAt(2);
            const codePoint = secondChar === 'X' || secondChar === 'x' ? parseInt(key.slice(3), 16) : parseInt(key.slice(2), 10);
            return decodeCodePoint(codePoint);
        }
        return getOwnProperty(entities, key.slice(1, -1)) ?? key;
    });
}
function decodeCodePoint(codePoint) {
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
        return '\uFFFD';
    }
    return String.fromCodePoint(getOwnProperty(decodeMap, codePoint) ?? codePoint);
}
function scanJSXAttributeValue(parser, context) {
    parser.startIndex = parser.tokenIndex = parser.index;
    parser.startColumn = parser.tokenColumn = parser.column;
    parser.startLine = parser.tokenLine = parser.line;
    parser.setToken(CharTypes[parser.currentChar] & 8192 ? scanJSXString(parser) : scanSingleToken(parser, context, 0));
    return parser.getToken();
}
function scanJSXString(parser) {
    const quote = parser.currentChar;
    let char = advanceChar(parser);
    const start = parser.index;
    while(char !== quote){
        if (parser.index >= parser.end) parser.report(16);
        char = advanceChar(parser);
    }
    if (char !== quote) parser.report(16);
    parser.tokenValue = parser.source.slice(start, parser.index);
    advanceChar(parser);
    if (parser.options.raw) parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    return 134283267;
}
function nextJSXToken(parser) {
    parser.startIndex = parser.tokenIndex = parser.index;
    parser.startColumn = parser.tokenColumn = parser.column;
    parser.startLine = parser.tokenLine = parser.line;
    if (parser.index >= parser.end) {
        parser.setToken(1048576);
        return;
    }
    if (parser.currentChar === 60) {
        advanceChar(parser);
        parser.setToken(8456256);
        return;
    }
    if (parser.currentChar === 123) {
        advanceChar(parser);
        parser.setToken(2162700);
        return;
    }
    let state = 0;
    while(parser.index < parser.end){
        const type = CharTypes[parser.source.charCodeAt(parser.index)];
        if (type & 1024) {
            state |= 1 | 4;
            scanNewLine(parser);
        } else if (type & 2048) {
            consumeLineFeed(parser, state);
            state = state & -5 | 1;
        } else {
            advanceChar(parser);
        }
        if (CharTypes[parser.currentChar] & 16384) break;
    }
    if (parser.tokenIndex === parser.index) parser.report(0);
    const raw = parser.source.slice(parser.tokenIndex, parser.index);
    if (parser.options.raw) parser.tokenRaw = raw;
    parser.tokenValue = decodeHTMLStrict(raw);
    parser.setToken(137);
}
function rescanJSXIdentifier(parser) {
    if ((parser.getToken() & 143360) === 143360) {
        const { index } = parser;
        let char = parser.currentChar;
        while(CharTypes[char] & (32768 | 2)){
            char = advanceChar(parser);
        }
        parser.tokenValue += parser.source.slice(index, parser.index);
        parser.setToken(208897, true);
    }
    return parser.getToken();
}
class Scope {
    parser;
    type;
    parent;
    scopeError;
    variableBindings = new Map();
    constructor(parser, type = 2, parent){
        this.parser = parser;
        this.type = type;
        this.parent = parent;
    }
    createChildScope(type) {
        return new Scope(this.parser, type, this);
    }
    addVarOrBlock(context, name, kind, origin) {
        if (kind & 4) {
            this.addVarName(context, name, kind);
        } else {
            this.addBlockName(context, name, kind, origin);
        }
        if (origin & 64) {
            this.parser.declareUnboundVariable(name);
        }
    }
    addVarName(context, name, kind) {
        const { parser } = this;
        let currentScope = this;
        while(currentScope && (currentScope.type & 128) === 0){
            const { variableBindings } = currentScope;
            const value = variableBindings.get(name);
            if (value && value & 248) {
                if (parser.options.webcompat && (context & 1) === 0 && (kind & 128 && value & 68 || value & 128 && kind & 68)) ;
                else {
                    parser.report(145, name);
                }
            }
            if (currentScope === this) {
                if (value && value & 1 && kind & 1) {
                    currentScope.recordScopeError(145, name);
                }
            }
            if (value && (value & 256 || value & 512 && !parser.options.webcompat)) {
                parser.report(145, name);
            }
            currentScope.variableBindings.set(name, kind);
            currentScope = currentScope.parent;
        }
    }
    hasVariable(name) {
        return this.variableBindings.has(name);
    }
    addBlockName(context, name, kind, origin) {
        const { parser } = this;
        const value = this.variableBindings.get(name);
        if (value && (value & 2) === 0) {
            if (kind & 1) {
                this.recordScopeError(145, name);
            } else if (parser.options.webcompat && (context & 1) === 0 && origin & 2 && value === 64 && kind === 64) ;
            else {
                parser.report(145, name);
            }
        }
        if (this.type & 64 && this.parent?.hasVariable(name) && (this.parent.variableBindings.get(name) & 2) === 0) {
            parser.report(145, name);
        }
        if (this.type & 512 && value && (value & 2) === 0) {
            if (kind & 1) {
                this.recordScopeError(145, name);
            }
        }
        if (this.type & 32) {
            if (this.parent.variableBindings.get(name) & 768) parser.report(159, name);
        }
        this.variableBindings.set(name, kind);
    }
    recordScopeError(type, ...params) {
        this.scopeError = {
            type,
            params,
            start: this.parser.tokenStart,
            end: this.parser.currentLocation
        };
    }
    reportScopeError() {
        const { scopeError } = this;
        if (!scopeError) {
            return;
        }
        throw new ParseError(scopeError.start, scopeError.end, scopeError.type, ...scopeError.params);
    }
}
function createArrowHeadParsingScope(parser, context, value) {
    const scope = parser.createScope().createChildScope(512);
    scope.addBlockName(context, value, 1, 0);
    return scope;
}
class PrivateScope {
    parser;
    parent;
    refs = Object.create(null);
    privateIdentifiers = new Map();
    constructor(parser, parent){
        this.parser = parser;
        this.parent = parent;
    }
    addPrivateIdentifier(name, kind) {
        const { privateIdentifiers } = this;
        let focusKind = kind & (32 | 768);
        if (!(focusKind & 768)) focusKind |= 768;
        const value = privateIdentifiers.get(name);
        if (this.hasPrivateIdentifier(name) && ((value & 32) !== (focusKind & 32) || value & focusKind & 768)) {
            this.parser.report(146, name);
        }
        privateIdentifiers.set(name, this.hasPrivateIdentifier(name) ? value | focusKind : focusKind);
    }
    addPrivateIdentifierRef(name) {
        this.refs[name] ??= [];
        this.refs[name].push(this.parser.tokenStart);
    }
    isPrivateIdentifierDefined(name) {
        return this.hasPrivateIdentifier(name) || Boolean(this.parent?.isPrivateIdentifierDefined(name));
    }
    validatePrivateIdentifierRefs() {
        for(const name in this.refs){
            if (!this.isPrivateIdentifierDefined(name)) {
                const { index, line, column } = this.refs[name][0];
                throw new ParseError({
                    index,
                    line,
                    column
                }, {
                    index: index + name.length,
                    line,
                    column: column + name.length
                }, 4, name);
            }
        }
    }
    hasPrivateIdentifier(name) {
        return this.privateIdentifiers.has(name);
    }
}
class Parser {
    source;
    options;
    lastOnToken = null;
    token = 1048576;
    flags = 0;
    index = 0;
    line = 1;
    column = 0;
    startIndex = 0;
    end = 0;
    tokenIndex = 0;
    startColumn = 0;
    tokenColumn = 0;
    tokenLine = 1;
    startLine = 1;
    tokenValue = '';
    tokenRaw = '';
    tokenRegExp = void 0;
    currentChar = 0;
    exportedNames = new Set();
    exportedBindings = new Set();
    assignable = 1;
    destructible = 0;
    leadingDecorators = {
        decorators: []
    };
    constructor(source, options = {}){
        this.source = source;
        this.options = options;
        this.end = source.length;
        this.currentChar = source.charCodeAt(0);
    }
    getToken() {
        return this.token;
    }
    setToken(value, replaceLast = false) {
        this.token = value;
        const { onToken } = this.options;
        if (onToken) {
            if (value !== 1048576) {
                const loc = {
                    start: {
                        line: this.tokenLine,
                        column: this.tokenColumn
                    },
                    end: {
                        line: this.line,
                        column: this.column
                    }
                };
                if (!replaceLast && this.lastOnToken) {
                    onToken(...this.lastOnToken);
                }
                this.lastOnToken = [
                    convertTokenType(value),
                    this.tokenIndex,
                    this.index,
                    loc
                ];
            } else {
                if (this.lastOnToken) {
                    onToken(...this.lastOnToken);
                    this.lastOnToken = null;
                }
            }
        }
        return value;
    }
    get tokenStart() {
        return {
            index: this.tokenIndex,
            line: this.tokenLine,
            column: this.tokenColumn
        };
    }
    get currentLocation() {
        return {
            index: this.index,
            line: this.line,
            column: this.column
        };
    }
    finishNode(node, start, end) {
        if (this.options.ranges) {
            node.start = start.index;
            const endIndex = end ? end.index : this.startIndex;
            node.end = endIndex;
            node.range = [
                start.index,
                endIndex
            ];
        }
        if (this.options.loc) {
            node.loc = {
                start: {
                    line: start.line,
                    column: start.column
                },
                end: end ? {
                    line: end.line,
                    column: end.column
                } : {
                    line: this.startLine,
                    column: this.startColumn
                }
            };
            if (this.options.source) {
                node.loc.source = this.options.source;
            }
        }
        return node;
    }
    addBindingToExports(name) {
        this.exportedBindings.add(name);
    }
    declareUnboundVariable(name) {
        const { exportedNames } = this;
        if (exportedNames.has(name)) {
            this.report(147, name);
        }
        exportedNames.add(name);
    }
    report(type, ...params) {
        throw new ParseError(this.tokenStart, this.currentLocation, type, ...params);
    }
    createScopeIfLexical(type, parent) {
        if (this.options.lexical) {
            return this.createScope(type, parent);
        }
        return undefined;
    }
    createScope(type, parent) {
        return new Scope(this, type, parent);
    }
    createPrivateScopeIfLexical(parent) {
        if (this.options.lexical) {
            return new PrivateScope(this, parent);
        }
        return undefined;
    }
}
function pushComment(comments, options) {
    return function(type, value, start, end, loc) {
        const comment = {
            type,
            value
        };
        if (options.ranges) {
            comment.start = start;
            comment.end = end;
            comment.range = [
                start,
                end
            ];
        }
        if (options.loc) {
            comment.loc = loc;
        }
        comments.push(comment);
    };
}
function pushToken(tokens, options) {
    return function(type, start, end, loc) {
        const token = {
            token: type
        };
        if (options.ranges) {
            token.start = start;
            token.end = end;
            token.range = [
                start,
                end
            ];
        }
        if (options.loc) {
            token.loc = loc;
        }
        tokens.push(token);
    };
}
function normalizeOptions(rawOptions) {
    const options = {
        ...rawOptions
    };
    if (options.onComment) {
        options.onComment = Array.isArray(options.onComment) ? pushComment(options.onComment, options) : options.onComment;
    }
    if (options.onToken) {
        options.onToken = Array.isArray(options.onToken) ? pushToken(options.onToken, options) : options.onToken;
    }
    return options;
}
function parseSource(source, rawOptions = {}, context = 0) {
    const options = normalizeOptions(rawOptions);
    if (options.module) context |= 2 | 1;
    if (options.globalReturn) context |= 4096;
    if (options.impliedStrict) context |= 1;
    const parser = new Parser(source, options);
    skipHashBang(parser);
    const scope = parser.createScopeIfLexical();
    let body = [];
    let sourceType = 'script';
    if (context & 2) {
        sourceType = 'module';
        body = parseModuleItemList(parser, context | 8, scope);
        if (scope) {
            for (const name of parser.exportedBindings){
                if (!scope.hasVariable(name)) parser.report(148, name);
            }
        }
    } else {
        body = parseStatementList(parser, context | 8, scope);
    }
    return parser.finishNode({
        type: 'Program',
        sourceType,
        body
    }, {
        index: 0,
        line: 1,
        column: 0
    }, parser.currentLocation);
}
function parseStatementList(parser, context, scope) {
    nextToken(parser, context | 32 | 262144);
    const statements = [];
    while(parser.getToken() === 134283267){
        const { index, tokenValue, tokenStart, tokenIndex } = parser;
        const token = parser.getToken();
        const expr = parseLiteral(parser, context);
        if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
            context |= 1;
            if (parser.flags & 64) {
                throw new ParseError(parser.tokenStart, parser.currentLocation, 9);
            }
            if (parser.flags & 4096) {
                throw new ParseError(parser.tokenStart, parser.currentLocation, 15);
            }
        }
        statements.push(parseDirective(parser, context, expr, token, tokenStart));
    }
    while(parser.getToken() !== 1048576){
        statements.push(parseStatementListItem(parser, context, scope, undefined, 4, {}));
    }
    return statements;
}
function parseModuleItemList(parser, context, scope) {
    nextToken(parser, context | 32);
    const statements = [];
    while(parser.getToken() === 134283267){
        const { tokenStart } = parser;
        const token = parser.getToken();
        statements.push(parseDirective(parser, context, parseLiteral(parser, context), token, tokenStart));
    }
    while(parser.getToken() !== 1048576){
        statements.push(parseModuleItem(parser, context, scope));
    }
    return statements;
}
function parseModuleItem(parser, context, scope) {
    if (parser.getToken() === 132) {
        Object.assign(parser.leadingDecorators, {
            start: parser.tokenStart,
            decorators: parseDecorators(parser, context, undefined)
        });
    }
    let moduleItem;
    switch(parser.getToken()){
        case 20564:
            moduleItem = parseExportDeclaration(parser, context, scope);
            break;
        case 86106:
            moduleItem = parseImportDeclaration(parser, context, scope);
            break;
        default:
            moduleItem = parseStatementListItem(parser, context, scope, undefined, 4, {});
    }
    if (parser.leadingDecorators?.decorators.length) {
        parser.report(170);
    }
    return moduleItem;
}
function parseStatementListItem(parser, context, scope, privateScope, origin, labels) {
    const start = parser.tokenStart;
    switch(parser.getToken()){
        case 86104:
            return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 0, start);
        case 132:
        case 86094:
            return parseClassDeclaration(parser, context, scope, privateScope, 0);
        case 86090:
            return parseLexicalDeclaration(parser, context, scope, privateScope, 16, 0);
        case 241737:
            return parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin);
        case 20564:
            parser.report(103, 'export');
        case 86106:
            nextToken(parser, context);
            switch(parser.getToken()){
                case 67174411:
                    return parseImportCallDeclaration(parser, context, privateScope, start);
                case 67108877:
                    return parseImportMetaDeclaration(parser, context, start);
                default:
                    parser.report(103, 'import');
            }
        case 209005:
            return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 1);
        default:
            return parseStatement(parser, context, scope, privateScope, origin, labels, 1);
    }
}
function parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
    switch(parser.getToken()){
        case 86088:
            return parseVariableStatement(parser, context, scope, privateScope, 0);
        case 20572:
            return parseReturnStatement(parser, context, privateScope);
        case 20569:
            return parseIfStatement(parser, context, scope, privateScope, labels);
        case 20567:
            return parseForStatement(parser, context, scope, privateScope, labels);
        case 20562:
            return parseDoWhileStatement(parser, context, scope, privateScope, labels);
        case 20578:
            return parseWhileStatement(parser, context, scope, privateScope, labels);
        case 86110:
            return parseSwitchStatement(parser, context, scope, privateScope, labels);
        case 1074790417:
            return parseEmptyStatement(parser, context);
        case 2162700:
            return parseBlock(parser, context, scope?.createChildScope(), privateScope, labels, parser.tokenStart);
        case 86112:
            return parseThrowStatement(parser, context, privateScope);
        case 20555:
            return parseBreakStatement(parser, context, labels);
        case 20559:
            return parseContinueStatement(parser, context, labels);
        case 20577:
            return parseTryStatement(parser, context, scope, privateScope, labels);
        case 20579:
            return parseWithStatement(parser, context, scope, privateScope, labels);
        case 20560:
            return parseDebuggerStatement(parser, context);
        case 209005:
            return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 0);
        case 20557:
            parser.report(162);
        case 20566:
            parser.report(163);
        case 86104:
            parser.report(context & 1 ? 76 : !parser.options.webcompat ? 78 : 77);
        case 86094:
            parser.report(79);
        default:
            return parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl);
    }
}
function parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
    const { tokenValue, tokenStart } = parser;
    const token = parser.getToken();
    let expr;
    switch(token){
        case 241737:
            expr = parseIdentifier(parser, context);
            if (context & 1) parser.report(85);
            if (parser.getToken() === 69271571) parser.report(84);
            break;
        default:
            expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, parser.tokenStart);
    }
    if (token & 143360 && parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, allowFuncDecl, tokenStart);
    }
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
    expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, expr);
    }
    return parseExpressionStatement(parser, context, expr, tokenStart);
}
function parseBlock(parser, context, scope, privateScope, labels, start = parser.tokenStart, type = 'BlockStatement') {
    const body = [];
    consume(parser, context | 32, 2162700);
    while(parser.getToken() !== 1074790415){
        body.push(parseStatementListItem(parser, context, scope, privateScope, 2, {
            $: labels
        }));
    }
    consume(parser, context | 32, 1074790415);
    return parser.finishNode({
        type,
        body
    }, start);
}
function parseReturnStatement(parser, context, privateScope) {
    if ((context & 4096) === 0) parser.report(92);
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    const argument = parser.flags & 1 || parser.getToken() & 1048576 ? null : parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ReturnStatement',
        argument
    }, start);
}
function parseExpressionStatement(parser, context, expression, start) {
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ExpressionStatement',
        expression
    }, start);
}
function parseLabelledStatement(parser, context, scope, privateScope, origin, labels, value, expr, token, allowFuncDecl, start) {
    validateBindingIdentifier(parser, context, 0, token, 1);
    validateAndDeclareLabel(parser, labels, value);
    nextToken(parser, context | 32);
    const body = allowFuncDecl && (context & 1) === 0 && parser.options.webcompat && parser.getToken() === 86104 ? parseFunctionDeclaration(parser, context, scope?.createChildScope(), privateScope, origin, 0, 0, 0, parser.tokenStart) : parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl);
    return parser.finishNode({
        type: 'LabeledStatement',
        label: expr,
        body
    }, start);
}
function parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
    const { tokenValue, tokenStart: start } = parser;
    const token = parser.getToken();
    let expr = parseIdentifier(parser, context);
    if (parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, 1, start);
    }
    const asyncNewLine = parser.flags & 1;
    if (!asyncNewLine) {
        if (parser.getToken() === 86104) {
            if (!allowFuncDecl) parser.report(123);
            return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 1, start);
        }
        if (isValidIdentifier(context, parser.getToken())) {
            expr = parseAsyncArrowAfterIdent(parser, context, privateScope, 1, start);
            if (parser.getToken() === 18) expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
            return parseExpressionStatement(parser, context, expr, start);
        }
    }
    if (parser.getToken() === 67174411) {
        expr = parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, 1, 1, 0, asyncNewLine, start);
    } else {
        if (parser.getToken() === 10) {
            classifyIdentifier(parser, context, token);
            if ((token & 36864) === 36864) {
                parser.flags |= 256;
            }
            expr = parseArrowFromIdentifier(parser, context | 2048, privateScope, parser.tokenValue, expr, 0, 1, 0, start);
        }
        parser.assignable = 1;
    }
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start);
    expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, start, expr);
    parser.assignable = 1;
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
    }
    return parseExpressionStatement(parser, context, expr, start);
}
function parseDirective(parser, context, expression, token, start) {
    const endIndex = parser.startIndex;
    if (token !== 1074790417) {
        parser.assignable = 2;
        expression = parseMemberOrUpdateExpression(parser, context, undefined, expression, 0, 0, start);
        if (parser.getToken() !== 1074790417) {
            expression = parseAssignmentExpression(parser, context, undefined, 0, 0, start, expression);
            if (parser.getToken() === 18) {
                expression = parseSequenceExpression(parser, context, undefined, 0, start, expression);
            }
        }
        matchOrInsertSemicolon(parser, context | 32);
    }
    const node = {
        type: 'ExpressionStatement',
        expression
    };
    if (expression.type === 'Literal' && typeof expression.value === 'string') {
        node.directive = parser.source.slice(start.index + 1, endIndex - 1);
    }
    return parser.finishNode(node, start);
}
function parseEmptyStatement(parser, context) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    return parser.finishNode({
        type: 'EmptyStatement'
    }, start);
}
function parseThrowStatement(parser, context, privateScope) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    if (parser.flags & 1) parser.report(90);
    const argument = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ThrowStatement',
        argument
    }, start);
}
function parseIfStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context | 32, 67174411);
    parser.assignable = 1;
    const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const consequent = parseConsequentOrAlternative(parser, context, scope, privateScope, labels);
    let alternate = null;
    if (parser.getToken() === 20563) {
        nextToken(parser, context | 32);
        alternate = parseConsequentOrAlternative(parser, context, scope, privateScope, labels);
    }
    return parser.finishNode({
        type: 'IfStatement',
        test,
        consequent,
        alternate
    }, start);
}
function parseConsequentOrAlternative(parser, context, scope, privateScope, labels) {
    const { tokenStart } = parser;
    return context & 1 || !parser.options.webcompat || parser.getToken() !== 86104 ? parseStatement(parser, context, scope, privateScope, 0, {
        $: labels
    }, 0) : parseFunctionDeclaration(parser, context, scope?.createChildScope(), privateScope, 0, 0, 0, 0, tokenStart);
}
function parseSwitchStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context | 32, 67174411);
    const discriminant = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context, 16);
    consume(parser, context, 2162700);
    const cases = [];
    let seenDefault = 0;
    scope = scope?.createChildScope(8);
    while(parser.getToken() !== 1074790415){
        const { tokenStart } = parser;
        let test = null;
        const consequent = [];
        if (consumeOpt(parser, context | 32, 20556)) {
            test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
        } else {
            consume(parser, context | 32, 20561);
            if (seenDefault) parser.report(89);
            seenDefault = 1;
        }
        consume(parser, context | 32, 21);
        while(parser.getToken() !== 20556 && parser.getToken() !== 1074790415 && parser.getToken() !== 20561){
            consequent.push(parseStatementListItem(parser, context | 4, scope, privateScope, 2, {
                $: labels
            }));
        }
        cases.push(parser.finishNode({
            type: 'SwitchCase',
            test,
            consequent
        }, tokenStart));
    }
    consume(parser, context | 32, 1074790415);
    return parser.finishNode({
        type: 'SwitchStatement',
        discriminant,
        cases
    }, start);
}
function parseWhileStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context | 32, 67174411);
    const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
    return parser.finishNode({
        type: 'WhileStatement',
        test,
        body
    }, start);
}
function parseIterationStatementBody(parser, context, scope, privateScope, labels) {
    return parseStatement(parser, (context | 131072) ^ 131072 | 128, scope, privateScope, 0, {
        loop: 1,
        $: labels
    }, 0);
}
function parseContinueStatement(parser, context, labels) {
    if ((context & 128) === 0) parser.report(68);
    const start = parser.tokenStart;
    nextToken(parser, context);
    let label = null;
    if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
        const { tokenValue } = parser;
        label = parseIdentifier(parser, context | 32);
        if (!isValidLabel(parser, labels, tokenValue, 1)) parser.report(138, tokenValue);
    }
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'ContinueStatement',
        label
    }, start);
}
function parseBreakStatement(parser, context, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    let label = null;
    if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
        const { tokenValue } = parser;
        label = parseIdentifier(parser, context | 32);
        if (!isValidLabel(parser, labels, tokenValue, 0)) parser.report(138, tokenValue);
    } else if ((context & (4 | 128)) === 0) {
        parser.report(69);
    }
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'BreakStatement',
        label
    }, start);
}
function parseWithStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    if (context & 1) parser.report(91);
    consume(parser, context | 32, 67174411);
    const object = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const body = parseStatement(parser, context, scope, privateScope, 2, labels, 0);
    return parser.finishNode({
        type: 'WithStatement',
        object,
        body
    }, start);
}
function parseDebuggerStatement(parser, context) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'DebuggerStatement'
    }, start);
}
function parseTryStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    const firstScope = scope?.createChildScope(16);
    const block = parseBlock(parser, context, firstScope, privateScope, {
        $: labels
    });
    const { tokenStart } = parser;
    const handler = consumeOpt(parser, context | 32, 20557) ? parseCatchBlock(parser, context, scope, privateScope, labels, tokenStart) : null;
    let finalizer = null;
    if (parser.getToken() === 20566) {
        nextToken(parser, context | 32);
        const finalizerScope = scope?.createChildScope(4);
        const block = parseBlock(parser, context, finalizerScope, privateScope, {
            $: labels
        });
        finalizer = block;
    }
    if (!handler && !finalizer) {
        parser.report(88);
    }
    return parser.finishNode({
        type: 'TryStatement',
        block,
        handler,
        finalizer
    }, start);
}
function parseCatchBlock(parser, context, scope, privateScope, labels, start) {
    let param = null;
    let additionalScope = scope;
    if (consumeOpt(parser, context, 67174411)) {
        scope = scope?.createChildScope(4);
        param = parseBindingPattern(parser, context, scope, privateScope, (parser.getToken() & 2097152) === 2097152 ? 256 : 512, 0);
        if (parser.getToken() === 18) {
            parser.report(86);
        } else if (parser.getToken() === 1077936155) {
            parser.report(87);
        }
        consume(parser, context | 32, 16);
    }
    additionalScope = scope?.createChildScope(32);
    const body = parseBlock(parser, context, additionalScope, privateScope, {
        $: labels
    });
    return parser.finishNode({
        type: 'CatchClause',
        param,
        body
    }, start);
}
function parseStaticBlock(parser, context, scope, privateScope, start) {
    scope = scope?.createChildScope();
    const ctorContext = 512 | 4096 | 1024 | 4 | 128;
    context = (context | ctorContext) ^ ctorContext | 256 | 2048 | 524288 | 65536;
    return parseBlock(parser, context, scope, privateScope, {}, start, 'StaticBlock');
}
function parseDoWhileStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
    consume(parser, context, 20578);
    consume(parser, context | 32, 67174411);
    const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    consumeOpt(parser, context | 32, 1074790417);
    return parser.finishNode({
        type: 'DoWhileStatement',
        body,
        test
    }, start);
}
function parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin) {
    const { tokenValue, tokenStart } = parser;
    const token = parser.getToken();
    let expr = parseIdentifier(parser, context);
    if (parser.getToken() & (143360 | 2097152)) {
        const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 8, 0);
        matchOrInsertSemicolon(parser, context | 32);
        return parser.finishNode({
            type: 'VariableDeclaration',
            kind: 'let',
            declarations
        }, tokenStart);
    }
    parser.assignable = 1;
    if (context & 1) parser.report(85);
    if (parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, {}, tokenValue, expr, token, 0, tokenStart);
    }
    if (parser.getToken() === 10) {
        let scope = void 0;
        if (parser.options.lexical) scope = createArrowHeadParsingScope(parser, context, tokenValue);
        parser.flags = (parser.flags | 128) ^ 128;
        expr = parseArrowFunctionExpression(parser, context, scope, privateScope, [
            expr
        ], 0, tokenStart);
    } else {
        expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
        expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
    }
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, expr);
    }
    return parseExpressionStatement(parser, context, expr, tokenStart);
}
function parseLexicalDeclaration(parser, context, scope, privateScope, kind, origin) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'VariableDeclaration',
        kind: kind & 8 ? 'let' : 'const',
        declarations
    }, start);
}
function parseVariableStatement(parser, context, scope, privateScope, origin) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 4, origin);
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode({
        type: 'VariableDeclaration',
        kind: 'var',
        declarations
    }, start);
}
function parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin) {
    let bindingCount = 1;
    const list = [
        parseVariableDeclaration(parser, context, scope, privateScope, kind, origin)
    ];
    while(consumeOpt(parser, context, 18)){
        bindingCount++;
        list.push(parseVariableDeclaration(parser, context, scope, privateScope, kind, origin));
    }
    if (bindingCount > 1 && origin & 32 && parser.getToken() & 262144) {
        parser.report(61, KeywordDescTable[parser.getToken() & 255]);
    }
    return list;
}
function parseVariableDeclaration(parser, context, scope, privateScope, kind, origin) {
    const { tokenStart } = parser;
    const token = parser.getToken();
    let init = null;
    const id = parseBindingPattern(parser, context, scope, privateScope, kind, origin);
    if (parser.getToken() === 1077936155) {
        nextToken(parser, context | 32);
        init = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
        if (origin & 32 || (token & 2097152) === 0) {
            if (parser.getToken() === 471156 || parser.getToken() === 8673330 && (token & 2097152 || (kind & 4) === 0 || context & 1)) {
                throw new ParseError(tokenStart, parser.currentLocation, 60, parser.getToken() === 471156 ? 'of' : 'in');
            }
        }
    } else if ((kind & 16 || (token & 2097152) > 0) && (parser.getToken() & 262144) !== 262144) {
        parser.report(59, kind & 16 ? 'const' : 'destructuring');
    }
    return parser.finishNode({
        type: 'VariableDeclarator',
        id,
        init
    }, tokenStart);
}
function parseForStatement(parser, context, scope, privateScope, labels) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const forAwait = ((context & 2048) > 0 || (context & 2) > 0 && (context & 8) > 0) && consumeOpt(parser, context, 209006);
    consume(parser, context | 32, 67174411);
    scope = scope?.createChildScope(1);
    let test = null;
    let update = null;
    let destructible = 0;
    let init = null;
    let isVarDecl = parser.getToken() === 86088 || parser.getToken() === 241737 || parser.getToken() === 86090;
    let right;
    const { tokenStart } = parser;
    const token = parser.getToken();
    if (isVarDecl) {
        if (token === 241737) {
            init = parseIdentifier(parser, context);
            if (parser.getToken() & (143360 | 2097152)) {
                if (parser.getToken() === 8673330) {
                    if (context & 1) parser.report(67);
                } else {
                    init = parser.finishNode({
                        type: 'VariableDeclaration',
                        kind: 'let',
                        declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 8, 32)
                    }, tokenStart);
                }
                parser.assignable = 1;
            } else if (context & 1) {
                parser.report(67);
            } else {
                isVarDecl = false;
                parser.assignable = 1;
                init = parseMemberOrUpdateExpression(parser, context, privateScope, init, 0, 0, tokenStart);
                if (parser.getToken() === 471156) parser.report(115);
            }
        } else {
            nextToken(parser, context);
            init = parser.finishNode(token === 86088 ? {
                type: 'VariableDeclaration',
                kind: 'var',
                declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 4, 32)
            } : {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 16, 32)
            }, tokenStart);
            parser.assignable = 1;
        }
    } else if (token === 1074790417) {
        if (forAwait) parser.report(82);
    } else if ((token & 2097152) === 2097152) {
        const patternStart = parser.tokenStart;
        init = token === 2162700 ? parseObjectLiteralOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32) : parseArrayExpressionOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32);
        destructible = parser.destructible;
        if (destructible & 64) {
            parser.report(63);
        }
        parser.assignable = destructible & 16 ? 2 : 1;
        init = parseMemberOrUpdateExpression(parser, context | 131072, privateScope, init, 0, 0, patternStart);
    } else {
        init = parseLeftHandSideExpression(parser, context | 131072, privateScope, 1, 0, 1);
    }
    if ((parser.getToken() & 262144) === 262144) {
        if (parser.getToken() === 471156) {
            if (parser.assignable & 2) parser.report(80, forAwait ? 'await' : 'of');
            reinterpretToPattern(parser, init);
            nextToken(parser, context | 32);
            right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
            consume(parser, context | 32, 16);
            const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
            return parser.finishNode({
                type: 'ForOfStatement',
                left: init,
                right,
                body,
                await: forAwait
            }, start);
        }
        if (parser.assignable & 2) parser.report(80, 'in');
        reinterpretToPattern(parser, init);
        nextToken(parser, context | 32);
        if (forAwait) parser.report(82);
        right = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
        consume(parser, context | 32, 16);
        const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
        return parser.finishNode({
            type: 'ForInStatement',
            body,
            left: init,
            right
        }, start);
    }
    if (forAwait) parser.report(82);
    if (!isVarDecl) {
        if (destructible & 8 && parser.getToken() !== 1077936155) {
            parser.report(80, 'loop');
        }
        init = parseAssignmentExpression(parser, context | 131072, privateScope, 0, 0, tokenStart, init);
    }
    if (parser.getToken() === 18) init = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, init);
    consume(parser, context | 32, 1074790417);
    if (parser.getToken() !== 1074790417) test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 1074790417);
    if (parser.getToken() !== 16) update = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
    consume(parser, context | 32, 16);
    const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
    return parser.finishNode({
        type: 'ForStatement',
        init,
        test,
        update,
        body
    }, start);
}
function parseRestrictedIdentifier(parser, context, scope) {
    if (!isValidIdentifier(context, parser.getToken())) parser.report(118);
    if ((parser.getToken() & 537079808) === 537079808) parser.report(119);
    scope?.addBlockName(context, parser.tokenValue, 8, 0);
    return parseIdentifier(parser, context);
}
function parseImportDeclaration(parser, context, scope) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    let source = null;
    const { tokenStart } = parser;
    let specifiers = [];
    if (parser.getToken() === 134283267) {
        source = parseLiteral(parser, context);
    } else {
        if (parser.getToken() & 143360) {
            const local = parseRestrictedIdentifier(parser, context, scope);
            specifiers = [
                parser.finishNode({
                    type: 'ImportDefaultSpecifier',
                    local
                }, tokenStart)
            ];
            if (consumeOpt(parser, context, 18)) {
                switch(parser.getToken()){
                    case 8391476:
                        specifiers.push(parseImportNamespaceSpecifier(parser, context, scope));
                        break;
                    case 2162700:
                        parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                        break;
                    default:
                        parser.report(107);
                }
            }
        } else {
            switch(parser.getToken()){
                case 8391476:
                    specifiers = [
                        parseImportNamespaceSpecifier(parser, context, scope)
                    ];
                    break;
                case 2162700:
                    parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                    break;
                case 67174411:
                    return parseImportCallDeclaration(parser, context, undefined, start);
                case 67108877:
                    return parseImportMetaDeclaration(parser, context, start);
                default:
                    parser.report(30, KeywordDescTable[parser.getToken() & 255]);
            }
        }
        source = parseModuleSpecifier(parser, context);
    }
    const attributes = parseImportAttributes(parser, context);
    const node = {
        type: 'ImportDeclaration',
        specifiers,
        source,
        attributes
    };
    matchOrInsertSemicolon(parser, context | 32);
    return parser.finishNode(node, start);
}
function parseImportNamespaceSpecifier(parser, context, scope) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    consume(parser, context, 77932);
    if ((parser.getToken() & 134217728) === 134217728) {
        throw new ParseError(tokenStart, parser.currentLocation, 30, KeywordDescTable[parser.getToken() & 255]);
    }
    return parser.finishNode({
        type: 'ImportNamespaceSpecifier',
        local: parseRestrictedIdentifier(parser, context, scope)
    }, tokenStart);
}
function parseModuleSpecifier(parser, context) {
    consume(parser, context, 209011);
    if (parser.getToken() !== 134283267) parser.report(105, 'Import');
    return parseLiteral(parser, context);
}
function parseImportSpecifierOrNamedImports(parser, context, scope, specifiers) {
    nextToken(parser, context);
    while(parser.getToken() & 143360 || parser.getToken() === 134283267){
        let { tokenValue, tokenStart } = parser;
        const token = parser.getToken();
        const imported = parseModuleExportName(parser, context);
        let local;
        if (consumeOpt(parser, context, 77932)) {
            if ((parser.getToken() & 134217728) === 134217728 || parser.getToken() === 18) {
                parser.report(106);
            } else {
                validateBindingIdentifier(parser, context, 16, parser.getToken(), 0);
            }
            tokenValue = parser.tokenValue;
            local = parseIdentifier(parser, context);
        } else if (imported.type === 'Identifier') {
            validateBindingIdentifier(parser, context, 16, token, 0);
            local = imported;
        } else {
            parser.report(25, KeywordDescTable[77932 & 255]);
        }
        scope?.addBlockName(context, tokenValue, 8, 0);
        specifiers.push(parser.finishNode({
            type: 'ImportSpecifier',
            local,
            imported
        }, tokenStart));
        if (parser.getToken() !== 1074790415) consume(parser, context, 18);
    }
    consume(parser, context, 1074790415);
    return specifiers;
}
function parseImportMetaDeclaration(parser, context, start) {
    let expr = parseImportMetaExpression(parser, context, parser.finishNode({
        type: 'Identifier',
        name: 'import'
    }, start), start);
    expr = parseMemberOrUpdateExpression(parser, context, undefined, expr, 0, 0, start);
    expr = parseAssignmentExpression(parser, context, undefined, 0, 0, start, expr);
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, undefined, 0, start, expr);
    }
    return parseExpressionStatement(parser, context, expr, start);
}
function parseImportCallDeclaration(parser, context, privateScope, start) {
    let expr = parseImportExpression(parser, context, privateScope, 0, start);
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start);
    if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
    }
    return parseExpressionStatement(parser, context, expr, start);
}
function parseExportDeclaration(parser, context, scope) {
    const start = parser.leadingDecorators.decorators.length ? parser.leadingDecorators.start : parser.tokenStart;
    nextToken(parser, context | 32);
    const specifiers = [];
    let declaration = null;
    let source = null;
    let attributes = [];
    if (consumeOpt(parser, context | 32, 20561)) {
        switch(parser.getToken()){
            case 86104:
                {
                    declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 1, 0, parser.tokenStart);
                    break;
                }
            case 132:
            case 86094:
                declaration = parseClassDeclaration(parser, context, scope, undefined, 1);
                break;
            case 209005:
                {
                    const { tokenStart } = parser;
                    declaration = parseIdentifier(parser, context);
                    const { flags } = parser;
                    if ((flags & 1) === 0) {
                        if (parser.getToken() === 86104) {
                            declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 1, 1, tokenStart);
                        } else {
                            if (parser.getToken() === 67174411) {
                                declaration = parseAsyncArrowOrCallExpression(parser, context, undefined, declaration, 1, 1, 0, flags, tokenStart);
                                declaration = parseMemberOrUpdateExpression(parser, context, undefined, declaration, 0, 0, tokenStart);
                                declaration = parseAssignmentExpression(parser, context, undefined, 0, 0, tokenStart, declaration);
                            } else if (parser.getToken() & 143360) {
                                if (scope) scope = createArrowHeadParsingScope(parser, context, parser.tokenValue);
                                declaration = parseIdentifier(parser, context);
                                declaration = parseArrowFunctionExpression(parser, context, scope, undefined, [
                                    declaration
                                ], 1, tokenStart);
                            }
                        }
                    }
                    break;
                }
            default:
                declaration = parseExpression(parser, context, undefined, 1, 0, parser.tokenStart);
                matchOrInsertSemicolon(parser, context | 32);
        }
        if (scope) parser.declareUnboundVariable('default');
        return parser.finishNode({
            type: 'ExportDefaultDeclaration',
            declaration
        }, start);
    }
    switch(parser.getToken()){
        case 8391476:
            {
                nextToken(parser, context);
                let exported = null;
                const isNamedDeclaration = consumeOpt(parser, context, 77932);
                if (isNamedDeclaration) {
                    if (scope) parser.declareUnboundVariable(parser.tokenValue);
                    exported = parseModuleExportName(parser, context);
                }
                consume(parser, context, 209011);
                if (parser.getToken() !== 134283267) parser.report(105, 'Export');
                source = parseLiteral(parser, context);
                const attributes = parseImportAttributes(parser, context);
                const node = {
                    type: 'ExportAllDeclaration',
                    source,
                    exported,
                    attributes
                };
                matchOrInsertSemicolon(parser, context | 32);
                return parser.finishNode(node, start);
            }
        case 2162700:
            {
                nextToken(parser, context);
                const tmpExportedNames = [];
                const tmpExportedBindings = [];
                let hasLiteralLocal = 0;
                while(parser.getToken() & 143360 || parser.getToken() === 134283267){
                    const { tokenStart, tokenValue } = parser;
                    const local = parseModuleExportName(parser, context);
                    if (local.type === 'Literal') {
                        hasLiteralLocal = 1;
                    }
                    let exported;
                    if (parser.getToken() === 77932) {
                        nextToken(parser, context);
                        if ((parser.getToken() & 143360) === 0 && parser.getToken() !== 134283267) {
                            parser.report(106);
                        }
                        if (scope) {
                            tmpExportedNames.push(parser.tokenValue);
                            tmpExportedBindings.push(tokenValue);
                        }
                        exported = parseModuleExportName(parser, context);
                    } else {
                        if (scope) {
                            tmpExportedNames.push(parser.tokenValue);
                            tmpExportedBindings.push(parser.tokenValue);
                        }
                        exported = local;
                    }
                    specifiers.push(parser.finishNode({
                        type: 'ExportSpecifier',
                        local,
                        exported
                    }, tokenStart));
                    if (parser.getToken() !== 1074790415) consume(parser, context, 18);
                }
                consume(parser, context, 1074790415);
                if (consumeOpt(parser, context, 209011)) {
                    if (parser.getToken() !== 134283267) parser.report(105, 'Export');
                    source = parseLiteral(parser, context);
                    attributes = parseImportAttributes(parser, context);
                    if (scope) {
                        tmpExportedNames.forEach((n)=>parser.declareUnboundVariable(n));
                    }
                } else {
                    if (hasLiteralLocal) {
                        parser.report(172);
                    }
                    if (scope) {
                        tmpExportedNames.forEach((n)=>parser.declareUnboundVariable(n));
                        tmpExportedBindings.forEach((b)=>parser.addBindingToExports(b));
                    }
                }
                matchOrInsertSemicolon(parser, context | 32);
                break;
            }
        case 132:
        case 86094:
            declaration = parseClassDeclaration(parser, context, scope, undefined, 2);
            break;
        case 86104:
            declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 2, 0, parser.tokenStart);
            break;
        case 241737:
            declaration = parseLexicalDeclaration(parser, context, scope, undefined, 8, 64);
            break;
        case 86090:
            declaration = parseLexicalDeclaration(parser, context, scope, undefined, 16, 64);
            break;
        case 86088:
            declaration = parseVariableStatement(parser, context, scope, undefined, 64);
            break;
        case 209005:
            {
                const { tokenStart } = parser;
                nextToken(parser, context);
                if ((parser.flags & 1) === 0 && parser.getToken() === 86104) {
                    declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 2, 1, tokenStart);
                    break;
                }
            }
        default:
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    const node = {
        type: 'ExportNamedDeclaration',
        declaration,
        specifiers,
        source,
        attributes: attributes
    };
    return parser.finishNode(node, start);
}
function parseExpression(parser, context, privateScope, canAssign, inGroup, start) {
    let expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, 1, start);
    expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start);
    return parseAssignmentExpression(parser, context, privateScope, inGroup, 0, start, expr);
}
function parseSequenceExpression(parser, context, privateScope, inGroup, start, expr) {
    const expressions = [
        expr
    ];
    while(consumeOpt(parser, context | 32, 18)){
        expressions.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart));
    }
    return parser.finishNode({
        type: 'SequenceExpression',
        expressions
    }, start);
}
function parseExpressions(parser, context, privateScope, inGroup, canAssign, start) {
    const expr = parseExpression(parser, context, privateScope, canAssign, inGroup, start);
    return parser.getToken() === 18 ? parseSequenceExpression(parser, context, privateScope, inGroup, start, expr) : expr;
}
function parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, start, left) {
    const token = parser.getToken();
    if ((token & 4194304) === 4194304) {
        if (parser.assignable & 2) parser.report(26);
        if (!isPattern && token === 1077936155 && left.type === 'ArrayExpression' || left.type === 'ObjectExpression') {
            reinterpretToPattern(parser, left);
        }
        nextToken(parser, context | 32);
        const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
        parser.assignable = 2;
        return parser.finishNode(isPattern ? {
            type: 'AssignmentPattern',
            left,
            right
        } : {
            type: 'AssignmentExpression',
            left,
            operator: KeywordDescTable[token & 255],
            right
        }, start);
    }
    if ((token & 8388608) === 8388608) {
        left = parseBinaryExpression(parser, context, privateScope, inGroup, start, 4, token, left);
    }
    if (consumeOpt(parser, context | 32, 22)) {
        left = parseConditionalExpression(parser, context, privateScope, left, start);
    }
    return left;
}
function parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, start, left) {
    const token = parser.getToken();
    nextToken(parser, context | 32);
    const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
    left = parser.finishNode(isPattern ? {
        type: 'AssignmentPattern',
        left,
        right
    } : {
        type: 'AssignmentExpression',
        left,
        operator: KeywordDescTable[token & 255],
        right
    }, start);
    parser.assignable = 2;
    return left;
}
function parseConditionalExpression(parser, context, privateScope, test, start) {
    const consequent = parseExpression(parser, (context | 131072) ^ 131072, privateScope, 1, 0, parser.tokenStart);
    consume(parser, context | 32, 21);
    parser.assignable = 1;
    const alternate = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ConditionalExpression',
        test,
        consequent,
        alternate
    }, start);
}
function parseBinaryExpression(parser, context, privateScope, inGroup, start, minPrecedence, operator, left) {
    const bit = -((context & 131072) > 0) & 8673330;
    let t;
    let precedence;
    parser.assignable = 2;
    while(parser.getToken() & 8388608){
        t = parser.getToken();
        precedence = t & 3840;
        if (t & 524288 && operator & 268435456 || operator & 524288 && t & 268435456) {
            parser.report(165);
        }
        if (precedence + ((t === 8391735) << 8) - ((bit === t) << 12) <= minPrecedence) break;
        nextToken(parser, context | 32);
        left = parser.finishNode({
            type: t & 524288 || t & 268435456 ? 'LogicalExpression' : 'BinaryExpression',
            left,
            right: parseBinaryExpression(parser, context, privateScope, inGroup, parser.tokenStart, precedence, t, parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1)),
            operator: KeywordDescTable[t & 255]
        }, start);
    }
    if (parser.getToken() === 1077936155) parser.report(26);
    return left;
}
function parseUnaryExpression(parser, context, privateScope, isLHS, inGroup) {
    if (!isLHS) parser.report(0);
    const { tokenStart } = parser;
    const unaryOperator = parser.getToken();
    nextToken(parser, context | 32);
    const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1);
    if (parser.getToken() === 8391735) parser.report(33);
    if (context & 1 && unaryOperator === 16863276) {
        if (arg.type === 'Identifier') {
            parser.report(121);
        } else if (isPropertyWithPrivateFieldKey(arg)) {
            parser.report(127);
        }
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'UnaryExpression',
        operator: KeywordDescTable[unaryOperator & 255],
        argument: arg,
        prefix: true
    }, tokenStart);
}
function parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start) {
    const token = parser.getToken();
    const expr = parseIdentifier(parser, context);
    const { flags } = parser;
    if ((flags & 1) === 0) {
        if (parser.getToken() === 86104) {
            return parseFunctionExpression(parser, context, privateScope, 1, inGroup, start);
        }
        if (isValidIdentifier(context, parser.getToken())) {
            if (!isLHS) parser.report(0);
            if ((parser.getToken() & 36864) === 36864) {
                parser.flags |= 256;
            }
            return parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start);
        }
    }
    if (!inNew && parser.getToken() === 67174411) {
        return parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, canAssign, 1, 0, flags, start);
    }
    if (parser.getToken() === 10) {
        classifyIdentifier(parser, context, token);
        if (inNew) parser.report(51);
        if ((token & 36864) === 36864) {
            parser.flags |= 256;
        }
        return parseArrowFromIdentifier(parser, context, privateScope, parser.tokenValue, expr, inNew, canAssign, 0, start);
    }
    parser.assignable = 1;
    return expr;
}
function parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start) {
    if (inGroup) parser.destructible |= 256;
    if (context & 1024) {
        nextToken(parser, context | 32);
        if (context & 8192) parser.report(32);
        if (!canAssign) parser.report(26);
        if (parser.getToken() === 22) parser.report(124);
        let argument = null;
        let delegate = false;
        if ((parser.flags & 1) === 0) {
            delegate = consumeOpt(parser, context | 32, 8391476);
            if (parser.getToken() & (12288 | 65536) || delegate) {
                argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
            }
        } else if (parser.getToken() === 8391476) {
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        }
        parser.assignable = 2;
        return parser.finishNode({
            type: 'YieldExpression',
            argument,
            delegate
        }, start);
    }
    if (context & 1) parser.report(97, 'yield');
    return parseIdentifierOrArrow(parser, context, privateScope);
}
function parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start) {
    if (inGroup) parser.destructible |= 128;
    if (context & 524288) parser.report(177);
    const possibleIdentifierOrArrowFunc = parseIdentifierOrArrow(parser, context, privateScope);
    const isIdentifier = possibleIdentifierOrArrowFunc.type === 'ArrowFunctionExpression' || (parser.getToken() & 65536) === 0;
    if (isIdentifier) {
        if (context & 2048) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 176);
        if (context & 2) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 110);
        if (context & 8192 && context & 2048) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 110);
        return possibleIdentifierOrArrowFunc;
    }
    if (context & 8192) {
        throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 31);
    }
    if (context & 2048 || context & 2 && context & 8) {
        if (inNew) throw new ParseError(start, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        }, 0);
        const argument = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1);
        if (parser.getToken() === 8391735) parser.report(33);
        parser.assignable = 2;
        return parser.finishNode({
            type: 'AwaitExpression',
            argument
        }, start);
    }
    if (context & 2) throw new ParseError(start, {
        index: parser.startIndex,
        line: parser.startLine,
        column: parser.startColumn
    }, 98);
    return possibleIdentifierOrArrowFunc;
}
function parseFunctionBody(parser, context, scope, privateScope, origin, funcNameToken, functionScope) {
    const { tokenStart } = parser;
    consume(parser, context | 32, 2162700);
    const body = [];
    if (parser.getToken() !== 1074790415) {
        while(parser.getToken() === 134283267){
            const { index, tokenStart, tokenIndex, tokenValue } = parser;
            const token = parser.getToken();
            const expr = parseLiteral(parser, context);
            if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
                context |= 1;
                if (parser.flags & 128) {
                    throw new ParseError(tokenStart, parser.currentLocation, 66);
                }
                if (parser.flags & 64) {
                    throw new ParseError(tokenStart, parser.currentLocation, 9);
                }
                if (parser.flags & 4096) {
                    throw new ParseError(tokenStart, parser.currentLocation, 15);
                }
                functionScope?.reportScopeError();
            }
            body.push(parseDirective(parser, context, expr, token, tokenStart));
        }
        if (context & 1) {
            if (funcNameToken) {
                if ((funcNameToken & 537079808) === 537079808) {
                    parser.report(119);
                }
                if ((funcNameToken & 36864) === 36864) {
                    parser.report(40);
                }
            }
            if (parser.flags & 512) parser.report(119);
            if (parser.flags & 256) parser.report(118);
        }
    }
    parser.flags = (parser.flags | 512 | 256 | 64 | 4096) ^ (512 | 256 | 64 | 4096);
    parser.destructible = (parser.destructible | 256) ^ 256;
    while(parser.getToken() !== 1074790415){
        body.push(parseStatementListItem(parser, context, scope, privateScope, 4, {}));
    }
    consume(parser, origin & (16 | 8) ? context | 32 : context, 1074790415);
    parser.flags &= -4289;
    if (parser.getToken() === 1077936155) parser.report(26);
    return parser.finishNode({
        type: 'BlockStatement',
        body
    }, tokenStart);
}
function parseSuperExpression(parser, context) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    switch(parser.getToken()){
        case 67108990:
            parser.report(167);
        case 67174411:
            {
                if ((context & 512) === 0) parser.report(28);
                parser.assignable = 2;
                break;
            }
        case 69271571:
        case 67108877:
            {
                if ((context & 256) === 0) parser.report(29);
                parser.assignable = 1;
                break;
            }
        default:
            parser.report(30, 'super');
    }
    return parser.finishNode({
        type: 'Super'
    }, tokenStart);
}
function parseLeftHandSideExpression(parser, context, privateScope, canAssign, inGroup, isLHS) {
    const start = parser.tokenStart;
    const expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, isLHS, start);
    return parseMemberOrUpdateExpression(parser, context, privateScope, expression, inGroup, 0, start);
}
function parseUpdateExpression(parser, context, expr, start) {
    if (parser.assignable & 2) parser.report(55);
    const token = parser.getToken();
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'UpdateExpression',
        argument: expr,
        operator: KeywordDescTable[token & 255],
        prefix: false
    }, start);
}
function parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, inChain, start) {
    if ((parser.getToken() & 33619968) === 33619968 && (parser.flags & 1) === 0) {
        expr = parseUpdateExpression(parser, context, expr, start);
    } else if ((parser.getToken() & 67108864) === 67108864) {
        context = (context | 131072) ^ 131072;
        switch(parser.getToken()){
            case 67108877:
                {
                    nextToken(parser, (context | 262144 | 8) ^ 8);
                    if (context & 16 && parser.getToken() === 130 && parser.tokenValue === 'super') {
                        parser.report(173);
                    }
                    parser.assignable = 1;
                    const property = parsePropertyOrPrivatePropertyName(parser, context | 64, privateScope);
                    expr = parser.finishNode({
                        type: 'MemberExpression',
                        object: expr,
                        computed: false,
                        property,
                        optional: false
                    }, start);
                    break;
                }
            case 69271571:
                {
                    let restoreHasOptionalChaining = false;
                    if ((parser.flags & 2048) === 2048) {
                        restoreHasOptionalChaining = true;
                        parser.flags = (parser.flags | 2048) ^ 2048;
                    }
                    nextToken(parser, context | 32);
                    const { tokenStart } = parser;
                    const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenStart);
                    consume(parser, context, 20);
                    parser.assignable = 1;
                    expr = parser.finishNode({
                        type: 'MemberExpression',
                        object: expr,
                        computed: true,
                        property,
                        optional: false
                    }, start);
                    if (restoreHasOptionalChaining) {
                        parser.flags |= 2048;
                    }
                    break;
                }
            case 67174411:
                {
                    if ((parser.flags & 1024) === 1024) {
                        parser.flags = (parser.flags | 1024) ^ 1024;
                        return expr;
                    }
                    let restoreHasOptionalChaining = false;
                    if ((parser.flags & 2048) === 2048) {
                        restoreHasOptionalChaining = true;
                        parser.flags = (parser.flags | 2048) ^ 2048;
                    }
                    const args = parseArguments(parser, context, privateScope, inGroup);
                    parser.assignable = 2;
                    expr = parser.finishNode({
                        type: 'CallExpression',
                        callee: expr,
                        arguments: args,
                        optional: false
                    }, start);
                    if (restoreHasOptionalChaining) {
                        parser.flags |= 2048;
                    }
                    break;
                }
            case 67108990:
                {
                    nextToken(parser, (context | 262144 | 8) ^ 8);
                    parser.flags |= 2048;
                    parser.assignable = 2;
                    expr = parseOptionalChain(parser, context, privateScope, expr, start);
                    break;
                }
            default:
                if ((parser.flags & 2048) === 2048) {
                    parser.report(166);
                }
                parser.assignable = 2;
                expr = parser.finishNode({
                    type: 'TaggedTemplateExpression',
                    tag: expr,
                    quasi: parser.getToken() === 67174408 ? parseTemplate(parser, context | 64, privateScope) : parseTemplateLiteral(parser, context)
                }, start);
        }
        expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 1, start);
    }
    if (inChain === 0 && (parser.flags & 2048) === 2048) {
        parser.flags = (parser.flags | 2048) ^ 2048;
        expr = parser.finishNode({
            type: 'ChainExpression',
            expression: expr
        }, start);
    }
    return expr;
}
function parseOptionalChain(parser, context, privateScope, expr, start) {
    let restoreHasOptionalChaining = false;
    let node;
    if (parser.getToken() === 69271571 || parser.getToken() === 67174411) {
        if ((parser.flags & 2048) === 2048) {
            restoreHasOptionalChaining = true;
            parser.flags = (parser.flags | 2048) ^ 2048;
        }
    }
    if (parser.getToken() === 69271571) {
        nextToken(parser, context | 32);
        const { tokenStart } = parser;
        const property = parseExpressions(parser, context, privateScope, 0, 1, tokenStart);
        consume(parser, context, 20);
        parser.assignable = 2;
        node = parser.finishNode({
            type: 'MemberExpression',
            object: expr,
            computed: true,
            optional: true,
            property
        }, start);
    } else if (parser.getToken() === 67174411) {
        const args = parseArguments(parser, context, privateScope, 0);
        parser.assignable = 2;
        node = parser.finishNode({
            type: 'CallExpression',
            callee: expr,
            arguments: args,
            optional: true
        }, start);
    } else {
        const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
        parser.assignable = 2;
        node = parser.finishNode({
            type: 'MemberExpression',
            object: expr,
            computed: false,
            optional: true,
            property
        }, start);
    }
    if (restoreHasOptionalChaining) {
        parser.flags |= 2048;
    }
    return node;
}
function parsePropertyOrPrivatePropertyName(parser, context, privateScope) {
    if ((parser.getToken() & 143360) === 0 && parser.getToken() !== -2147483528 && parser.getToken() !== -2147483527 && parser.getToken() !== 130) {
        parser.report(160);
    }
    return parser.getToken() === 130 ? parsePrivateIdentifier(parser, context, privateScope, 0) : parseIdentifier(parser, context);
}
function parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start) {
    if (inNew) parser.report(56);
    if (!isLHS) parser.report(0);
    const token = parser.getToken();
    nextToken(parser, context | 32);
    const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1);
    if (parser.assignable & 2) {
        parser.report(55);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'UpdateExpression',
        argument: arg,
        operator: KeywordDescTable[token & 255],
        prefix: true
    }, start);
}
function parsePrimaryExpression(parser, context, privateScope, kind, inNew, canAssign, inGroup, isLHS, start) {
    if ((parser.getToken() & 143360) === 143360) {
        switch(parser.getToken()){
            case 209006:
                return parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start);
            case 241771:
                return parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start);
            case 209005:
                return parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start);
        }
        const { tokenValue } = parser;
        const token = parser.getToken();
        const expr = parseIdentifier(parser, context | 64);
        if (parser.getToken() === 10) {
            if (!isLHS) parser.report(0);
            classifyIdentifier(parser, context, token);
            if ((token & 36864) === 36864) {
                parser.flags |= 256;
            }
            return parseArrowFromIdentifier(parser, context, privateScope, tokenValue, expr, inNew, canAssign, 0, start);
        }
        if (context & 16 && !(context & 32768) && !(context & 8192) && parser.tokenValue === 'arguments') parser.report(130);
        if ((token & 255) === (241737 & 255)) {
            if (context & 1) parser.report(113);
            if (kind & (8 | 16)) parser.report(100);
        }
        parser.assignable = context & 1 && (token & 537079808) === 537079808 ? 2 : 1;
        return expr;
    }
    if ((parser.getToken() & 134217728) === 134217728) {
        return parseLiteral(parser, context);
    }
    switch(parser.getToken()){
        case 33619993:
        case 33619994:
            return parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start);
        case 16863276:
        case 16842798:
        case 16842799:
        case 25233968:
        case 25233969:
        case 16863275:
        case 16863277:
            return parseUnaryExpression(parser, context, privateScope, isLHS, inGroup);
        case 86104:
            return parseFunctionExpression(parser, context, privateScope, 0, inGroup, start);
        case 2162700:
            return parseObjectLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup);
        case 69271571:
            return parseArrayLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup);
        case 67174411:
            return parseParenthesizedExpression(parser, context | 64, privateScope, canAssign, 1, 0, start);
        case 86021:
        case 86022:
        case 86023:
            return parseNullOrTrueOrFalseLiteral(parser, context);
        case 86111:
            return parseThisExpression(parser, context);
        case 65540:
            return parseRegExpLiteral(parser, context);
        case 132:
        case 86094:
            return parseClassExpression(parser, context, privateScope, inGroup, start);
        case 86109:
            return parseSuperExpression(parser, context);
        case 67174409:
            return parseTemplateLiteral(parser, context);
        case 67174408:
            return parseTemplate(parser, context, privateScope);
        case 86107:
            return parseNewExpression(parser, context, privateScope, inGroup);
        case 134283388:
            return parseBigIntLiteral(parser, context);
        case 130:
            return parsePrivateIdentifier(parser, context, privateScope, 0);
        case 86106:
            return parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start);
        case 8456256:
            if (parser.options.jsx) return parseJSXRootElementOrFragment(parser, context, privateScope, 0, parser.tokenStart);
        default:
            if (isValidIdentifier(context, parser.getToken())) return parseIdentifierOrArrow(parser, context, privateScope);
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start) {
    let expr = parseIdentifier(parser, context);
    if (parser.getToken() === 67108877) {
        return parseImportMetaExpression(parser, context, expr, start);
    }
    if (inNew) parser.report(142);
    expr = parseImportExpression(parser, context, privateScope, inGroup, start);
    parser.assignable = 2;
    return parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start);
}
function parseImportMetaExpression(parser, context, meta, start) {
    if ((context & 2) === 0) parser.report(169);
    nextToken(parser, context);
    const token = parser.getToken();
    if (token !== 209030 && parser.tokenValue !== 'meta') {
        parser.report(174);
    } else if (token & -2147483648) {
        parser.report(175);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'MetaProperty',
        meta,
        property: parseIdentifier(parser, context)
    }, start);
}
function parseImportExpression(parser, context, privateScope, inGroup, start) {
    consume(parser, context | 32, 67174411);
    if (parser.getToken() === 14) parser.report(143);
    const source = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
    let options = null;
    if (parser.getToken() === 18) {
        consume(parser, context, 18);
        if (parser.getToken() !== 16) {
            const expContext = (context | 131072) ^ 131072;
            options = parseExpression(parser, expContext, privateScope, 1, inGroup, parser.tokenStart);
        }
        consumeOpt(parser, context, 18);
    }
    const node = {
        type: 'ImportExpression',
        source,
        options
    };
    consume(parser, context, 16);
    return parser.finishNode(node, start);
}
function parseImportAttributes(parser, context) {
    if (!consumeOpt(parser, context, 20579)) return [];
    consume(parser, context, 2162700);
    const attributes = [];
    const keysContent = new Set();
    while(parser.getToken() !== 1074790415){
        const start = parser.tokenStart;
        const key = parseIdentifierOrStringLiteral(parser, context);
        consume(parser, context, 21);
        const value = parseStringLiteral(parser, context);
        const keyContent = key.type === 'Literal' ? key.value : key.name;
        if (keysContent.has(keyContent)) {
            parser.report(145, `${keyContent}`);
        }
        keysContent.add(keyContent);
        attributes.push(parser.finishNode({
            type: 'ImportAttribute',
            key,
            value
        }, start));
        if (parser.getToken() !== 1074790415) {
            consume(parser, context, 18);
        }
    }
    consume(parser, context, 1074790415);
    return attributes;
}
function parseStringLiteral(parser, context) {
    if (parser.getToken() === 134283267) {
        return parseLiteral(parser, context);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function parseIdentifierOrStringLiteral(parser, context) {
    if (parser.getToken() === 134283267) {
        return parseLiteral(parser, context);
    } else if (parser.getToken() & 143360) {
        return parseIdentifier(parser, context);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function validateStringWellFormed(parser, str) {
    const len = str.length;
    for(let i = 0; i < len; i++){
        const code = str.charCodeAt(i);
        if ((code & 0xfc00) !== 55296) continue;
        if (code > 56319 || ++i >= len || (str.charCodeAt(i) & 0xfc00) !== 56320) {
            parser.report(171, JSON.stringify(str.charAt(i--)));
        }
    }
}
function parseModuleExportName(parser, context) {
    if (parser.getToken() === 134283267) {
        validateStringWellFormed(parser, parser.tokenValue);
        return parseLiteral(parser, context);
    } else if (parser.getToken() & 143360) {
        return parseIdentifier(parser, context);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
}
function parseBigIntLiteral(parser, context) {
    const { tokenRaw, tokenValue, tokenStart } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    const node = {
        type: 'Literal',
        value: tokenValue,
        bigint: String(tokenValue)
    };
    if (parser.options.raw) {
        node.raw = tokenRaw;
    }
    return parser.finishNode(node, tokenStart);
}
function parseTemplateLiteral(parser, context) {
    parser.assignable = 2;
    const { tokenValue, tokenRaw, tokenStart } = parser;
    consume(parser, context, 67174409);
    const quasis = [
        parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, true)
    ];
    return parser.finishNode({
        type: 'TemplateLiteral',
        expressions: [],
        quasis
    }, tokenStart);
}
function parseTemplate(parser, context, privateScope) {
    context = (context | 131072) ^ 131072;
    const { tokenValue, tokenRaw, tokenStart } = parser;
    consume(parser, context & -65 | 32, 67174408);
    const quasis = [
        parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, false)
    ];
    const expressions = [
        parseExpressions(parser, context & -65, privateScope, 0, 1, parser.tokenStart)
    ];
    if (parser.getToken() !== 1074790415) parser.report(83);
    while(parser.setToken(scanTemplateTail(parser, context), true) !== 67174409){
        const { tokenValue, tokenRaw, tokenStart } = parser;
        consume(parser, context & -65 | 32, 67174408);
        quasis.push(parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, false));
        expressions.push(parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart));
        if (parser.getToken() !== 1074790415) parser.report(83);
    }
    {
        const { tokenValue, tokenRaw, tokenStart } = parser;
        consume(parser, context, 67174409);
        quasis.push(parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, true));
    }
    return parser.finishNode({
        type: 'TemplateLiteral',
        expressions,
        quasis
    }, tokenStart);
}
function parseTemplateElement(parser, cooked, raw, start, tail) {
    const node = parser.finishNode({
        type: 'TemplateElement',
        value: {
            cooked,
            raw
        },
        tail
    }, start);
    const tailSize = tail ? 1 : 2;
    if (parser.options.ranges) {
        node.start += 1;
        node.range[0] += 1;
        node.end -= tailSize;
        node.range[1] -= tailSize;
    }
    if (parser.options.loc) {
        node.loc.start.column += 1;
        node.loc.end.column -= tailSize;
    }
    return node;
}
function parseSpreadElement(parser, context, privateScope) {
    const start = parser.tokenStart;
    context = (context | 131072) ^ 131072;
    consume(parser, context | 32, 14);
    const argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    parser.assignable = 1;
    return parser.finishNode({
        type: 'SpreadElement',
        argument
    }, start);
}
function parseArguments(parser, context, privateScope, inGroup) {
    nextToken(parser, context | 32);
    const args = [];
    if (parser.getToken() === 16) {
        nextToken(parser, context | 64);
        return args;
    }
    while(parser.getToken() !== 16){
        if (parser.getToken() === 14) {
            args.push(parseSpreadElement(parser, context, privateScope));
        } else {
            args.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart));
        }
        if (parser.getToken() !== 18) break;
        nextToken(parser, context | 32);
        if (parser.getToken() === 16) break;
    }
    consume(parser, context | 64, 16);
    return args;
}
function parseIdentifier(parser, context) {
    const { tokenValue, tokenStart } = parser;
    const allowRegex = tokenValue === 'await' && (parser.getToken() & -2147483648) === 0;
    nextToken(parser, context | (allowRegex ? 32 : 0));
    return parser.finishNode({
        type: 'Identifier',
        name: tokenValue
    }, tokenStart);
}
function parseLiteral(parser, context) {
    const { tokenValue, tokenRaw, tokenStart } = parser;
    if (parser.getToken() === 134283388) {
        return parseBigIntLiteral(parser, context);
    }
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode(parser.options.raw ? {
        type: 'Literal',
        value: tokenValue,
        raw: tokenRaw
    } : {
        type: 'Literal',
        value: tokenValue
    }, tokenStart);
}
function parseNullOrTrueOrFalseLiteral(parser, context) {
    const start = parser.tokenStart;
    const raw = KeywordDescTable[parser.getToken() & 255];
    const value = parser.getToken() === 86023 ? null : raw === 'true';
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode(parser.options.raw ? {
        type: 'Literal',
        value,
        raw
    } : {
        type: 'Literal',
        value
    }, start);
}
function parseThisExpression(parser, context) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ThisExpression'
    }, tokenStart);
}
function parseFunctionDeclaration(parser, context, scope, privateScope, origin, allowGen, flags, isAsync, start) {
    nextToken(parser, context | 32);
    const isGenerator = allowGen ? optionalBit(parser, context, 8391476) : 0;
    let id = null;
    let funcNameToken;
    let functionScope = scope ? parser.createScope() : void 0;
    if (parser.getToken() === 67174411) {
        if ((flags & 1) === 0) parser.report(39, 'Function');
    } else {
        const kind = origin & 4 && ((context & 8) === 0 || (context & 2) === 0) ? 4 : 64 | (isAsync ? 1024 : 0) | (isGenerator ? 1024 : 0);
        validateFunctionName(parser, context, parser.getToken());
        if (scope) {
            if (kind & 4) {
                scope.addVarName(context, parser.tokenValue, kind);
            } else {
                scope.addBlockName(context, parser.tokenValue, kind, origin);
            }
            functionScope = functionScope?.createChildScope(128);
            if (flags) {
                if (flags & 2) {
                    parser.declareUnboundVariable(parser.tokenValue);
                }
            }
        }
        funcNameToken = parser.getToken();
        if (parser.getToken() & 143360) {
            id = parseIdentifier(parser, context);
        } else {
            parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        }
    }
    {
        const modifierFlags = 256 | 512 | 1024 | 2048 | 8192 | 16384;
        context = (context | modifierFlags) ^ modifierFlags | 65536 | (isAsync ? 2048 : 0) | (isGenerator ? 1024 : 0) | (isGenerator ? 0 : 262144);
    }
    functionScope = functionScope?.createChildScope(256);
    const params = parseFormalParametersOrFormalList(parser, (context | 8192) & -524289, functionScope, privateScope, 0, 1);
    const modifierFlags = 8 | 4 | 128 | 524288;
    const body = parseFunctionBody(parser, (context | modifierFlags) ^ modifierFlags | 32768 | 4096, functionScope?.createChildScope(64), privateScope, 8, funcNameToken, functionScope);
    return parser.finishNode({
        type: 'FunctionDeclaration',
        id,
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1
    }, start);
}
function parseFunctionExpression(parser, context, privateScope, isAsync, inGroup, start) {
    nextToken(parser, context | 32);
    const isGenerator = optionalBit(parser, context, 8391476);
    const generatorAndAsyncFlags = (isAsync ? 2048 : 0) | (isGenerator ? 1024 : 0);
    let id = null;
    let funcNameToken;
    let scope = parser.createScopeIfLexical();
    const modifierFlags = 256 | 512 | 1024 | 2048 | 8192 | 16384 | 524288;
    if (parser.getToken() & 143360) {
        validateFunctionName(parser, (context | modifierFlags) ^ modifierFlags | generatorAndAsyncFlags, parser.getToken());
        scope = scope?.createChildScope(128);
        funcNameToken = parser.getToken();
        id = parseIdentifier(parser, context);
    }
    context = (context | modifierFlags) ^ modifierFlags | 65536 | generatorAndAsyncFlags | (isGenerator ? 0 : 262144);
    scope = scope?.createChildScope(256);
    const params = parseFormalParametersOrFormalList(parser, (context | 8192) & -524289, scope, privateScope, inGroup, 1);
    const body = parseFunctionBody(parser, context & -131229 | 32768 | 4096, scope?.createChildScope(64), privateScope, 0, funcNameToken, scope);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'FunctionExpression',
        id,
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1
    }, start);
}
function parseArrayLiteral(parser, context, privateScope, skipInitializer, inGroup) {
    const expr = parseArrayExpressionOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0);
    if (parser.destructible & 64) {
        parser.report(63);
    }
    if (parser.destructible & 8) {
        parser.report(62);
    }
    return expr;
}
function parseArrayExpressionOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin) {
    const { tokenStart: start } = parser;
    nextToken(parser, context | 32);
    const elements = [];
    let destructible = 0;
    context = (context | 131072) ^ 131072;
    while(parser.getToken() !== 20){
        if (consumeOpt(parser, context | 32, 18)) {
            elements.push(null);
        } else {
            let left;
            const { tokenStart, tokenValue } = parser;
            const token = parser.getToken();
            if (token & 143360) {
                left = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                if (parser.getToken() === 1077936155) {
                    if (parser.assignable & 2) parser.report(26);
                    nextToken(parser, context | 32);
                    scope?.addVarOrBlock(context, tokenValue, kind, origin);
                    const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
                    left = parser.finishNode(isPattern ? {
                        type: 'AssignmentPattern',
                        left,
                        right
                    } : {
                        type: 'AssignmentExpression',
                        operator: '=',
                        left,
                        right
                    }, tokenStart);
                    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                } else if (parser.getToken() === 18 || parser.getToken() === 20) {
                    if (parser.assignable & 2) {
                        destructible |= 16;
                    } else {
                        scope?.addVarOrBlock(context, tokenValue, kind, origin);
                    }
                    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                } else {
                    destructible |= kind & 1 ? 32 : (kind & 2) === 0 ? 16 : 0;
                    left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenStart);
                    if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                        if (parser.getToken() !== 1077936155) destructible |= 16;
                        left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
                    } else if (parser.getToken() !== 1077936155) {
                        destructible |= parser.assignable & 2 ? 16 : 32;
                    }
                }
            } else if (token & 2097152) {
                left = parser.getToken() === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                destructible |= parser.destructible;
                parser.assignable = parser.destructible & 16 ? 2 : 1;
                if (parser.getToken() === 18 || parser.getToken() === 20) {
                    if (parser.assignable & 2) {
                        destructible |= 16;
                    }
                } else if (parser.destructible & 8) {
                    parser.report(71);
                } else {
                    left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenStart);
                    destructible = parser.assignable & 2 ? 16 : 0;
                    if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                        left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
                    } else if (parser.getToken() !== 1077936155) {
                        destructible |= parser.assignable & 2 ? 16 : 32;
                    }
                }
            } else if (token === 14) {
                left = parseSpreadOrRestElement(parser, context, scope, privateScope, 20, kind, origin, 0, inGroup, isPattern);
                destructible |= parser.destructible;
                if (parser.getToken() !== 18 && parser.getToken() !== 20) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
            } else {
                left = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                    left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
                    if ((kind & (2 | 1)) === 0 && token === 67174411) destructible |= 16;
                } else if (parser.assignable & 2) {
                    destructible |= 16;
                } else if (token === 67174411) {
                    destructible |= parser.assignable & 1 && kind & (2 | 1) ? 32 : 16;
                }
            }
            elements.push(left);
            if (consumeOpt(parser, context | 32, 18)) {
                if (parser.getToken() === 20) break;
            } else break;
        }
    }
    consume(parser, context, 20);
    const node = parser.finishNode({
        type: isPattern ? 'ArrayPattern' : 'ArrayExpression',
        elements
    }, start);
    if (!skipInitializer && parser.getToken() & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node);
    }
    parser.destructible = destructible;
    return node;
}
function parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node) {
    if (parser.getToken() !== 1077936155) parser.report(26);
    nextToken(parser, context | 32);
    if (destructible & 16) parser.report(26);
    if (!isPattern) reinterpretToPattern(parser, node);
    const { tokenStart } = parser;
    const right = parseExpression(parser, context, privateScope, 1, inGroup, tokenStart);
    parser.destructible = (destructible | 64 | 8) ^ (8 | 64) | (parser.destructible & 128 ? 128 : 0) | (parser.destructible & 256 ? 256 : 0);
    return parser.finishNode(isPattern ? {
        type: 'AssignmentPattern',
        left: node,
        right
    } : {
        type: 'AssignmentExpression',
        left: node,
        operator: '=',
        right
    }, start);
}
function parseSpreadOrRestElement(parser, context, scope, privateScope, closingToken, kind, origin, isAsync, inGroup, isPattern) {
    const { tokenStart: start } = parser;
    nextToken(parser, context | 32);
    let argument = null;
    let destructible = 0;
    const { tokenValue, tokenStart } = parser;
    let token = parser.getToken();
    if (token & 143360) {
        parser.assignable = 1;
        argument = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
        token = parser.getToken();
        argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenStart);
        if (parser.getToken() !== 18 && parser.getToken() !== closingToken) {
            if (parser.assignable & 2 && parser.getToken() === 1077936155) parser.report(71);
            destructible |= 16;
            argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
        }
        if (parser.assignable & 2) {
            destructible |= 16;
        } else if (token === closingToken || token === 18) {
            scope?.addVarOrBlock(context, tokenValue, kind, origin);
        } else {
            destructible |= 32;
        }
        destructible |= parser.destructible & 128 ? 128 : 0;
    } else if (token === closingToken) {
        parser.report(41);
    } else if (token & 2097152) {
        argument = parser.getToken() === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin);
        token = parser.getToken();
        if (token !== 1077936155 && token !== closingToken && token !== 18) {
            if (parser.destructible & 8) parser.report(71);
            argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenStart);
            destructible |= parser.assignable & 2 ? 16 : 0;
            if ((parser.getToken() & 4194304) === 4194304) {
                if (parser.getToken() !== 1077936155) destructible |= 16;
                argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
            } else {
                if ((parser.getToken() & 8388608) === 8388608) {
                    argument = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, argument);
                }
                if (consumeOpt(parser, context | 32, 22)) {
                    argument = parseConditionalExpression(parser, context, privateScope, argument, tokenStart);
                }
                destructible |= parser.assignable & 2 ? 16 : 32;
            }
        } else {
            destructible |= closingToken === 1074790415 && token !== 1077936155 ? 16 : parser.destructible;
        }
    } else {
        destructible |= 32;
        argument = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1);
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token === 1077936155) {
            if (parser.assignable & 2) parser.report(26);
            argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
            destructible |= 16;
        } else {
            if (token === 18) {
                destructible |= 16;
            } else if (token !== closingToken) {
                argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
            }
            destructible |= parser.assignable & 1 ? 32 : 16;
        }
        parser.destructible = destructible;
        if (parser.getToken() !== closingToken && parser.getToken() !== 18) parser.report(161);
        return parser.finishNode({
            type: isPattern ? 'RestElement' : 'SpreadElement',
            argument: argument
        }, start);
    }
    if (parser.getToken() !== closingToken) {
        if (kind & 1) destructible |= isAsync ? 16 : 32;
        if (consumeOpt(parser, context | 32, 1077936155)) {
            if (destructible & 16) parser.report(26);
            reinterpretToPattern(parser, argument);
            const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
            argument = parser.finishNode(isPattern ? {
                type: 'AssignmentPattern',
                left: argument,
                right
            } : {
                type: 'AssignmentExpression',
                left: argument,
                operator: '=',
                right
            }, tokenStart);
            destructible = 16;
        } else {
            destructible |= 16;
        }
    }
    parser.destructible = destructible;
    return parser.finishNode({
        type: isPattern ? 'RestElement' : 'SpreadElement',
        argument: argument
    }, start);
}
function parseMethodDefinition(parser, context, privateScope, kind, inGroup, start) {
    const modifierFlags = 1024 | 2048 | 8192 | ((kind & 64) === 0 ? 512 | 16384 : 0);
    context = (context | modifierFlags) ^ modifierFlags | (kind & 8 ? 1024 : 0) | (kind & 16 ? 2048 : 0) | (kind & 64 ? 16384 : 0) | 256 | 32768 | 65536;
    let scope = parser.createScopeIfLexical(256);
    const params = parseMethodFormals(parser, (context | 8192) & -524289, scope, privateScope, kind, 1, inGroup);
    scope = scope?.createChildScope(64);
    const body = parseFunctionBody(parser, context & -655373 | 32768 | 4096, scope, privateScope, 0, void 0, scope?.parent);
    return parser.finishNode({
        type: 'FunctionExpression',
        params,
        body,
        async: (kind & 16) > 0,
        generator: (kind & 8) > 0,
        id: null
    }, start);
}
function parseObjectLiteral(parser, context, privateScope, skipInitializer, inGroup) {
    const expr = parseObjectLiteralOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0);
    if (parser.destructible & 64) {
        parser.report(63);
    }
    if (parser.destructible & 8) {
        parser.report(62);
    }
    return expr;
}
function parseObjectLiteralOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin) {
    const { tokenStart: start } = parser;
    nextToken(parser, context);
    const properties = [];
    let destructible = 0;
    let prototypeCount = 0;
    context = (context | 131072) ^ 131072;
    while(parser.getToken() !== 1074790415){
        const { tokenValue, tokenStart } = parser;
        const token = parser.getToken();
        if (token === 14) {
            properties.push(parseSpreadOrRestElement(parser, context, scope, privateScope, 1074790415, kind, origin, 0, inGroup, isPattern));
        } else {
            let state = 0;
            let key = null;
            let value;
            if (parser.getToken() & 143360 || parser.getToken() === -2147483528 || parser.getToken() === -2147483527) {
                if (parser.getToken() === -2147483527) destructible |= 16;
                key = parseIdentifier(parser, context);
                if (parser.getToken() === 18 || parser.getToken() === 1074790415 || parser.getToken() === 1077936155) {
                    state |= 4;
                    if (context & 1 && (token & 537079808) === 537079808) {
                        destructible |= 16;
                    } else {
                        validateBindingIdentifier(parser, context, kind, token, 0);
                    }
                    scope?.addVarOrBlock(context, tokenValue, kind, origin);
                    if (consumeOpt(parser, context | 32, 1077936155)) {
                        destructible |= 8;
                        const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
                        destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                        value = parser.finishNode({
                            type: 'AssignmentPattern',
                            left: parser.options.uniqueKeyInPattern ? Object.assign({}, key) : key,
                            right
                        }, tokenStart);
                    } else {
                        destructible |= (token === 209006 ? 128 : 0) | (token === -2147483528 ? 16 : 0);
                        value = parser.options.uniqueKeyInPattern ? Object.assign({}, key) : key;
                    }
                } else if (consumeOpt(parser, context | 32, 21)) {
                    const { tokenStart } = parser;
                    if (tokenValue === '__proto__') prototypeCount++;
                    if (parser.getToken() & 143360) {
                        const tokenAfterColon = parser.getToken();
                        const valueAfterColon = parser.tokenValue;
                        value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                        const token = parser.getToken();
                        value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (token === 1077936155 || token === 1074790415 || token === 18) {
                                destructible |= parser.destructible & 128 ? 128 : 0;
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                } else if ((tokenAfterColon & 143360) === 143360) {
                                    scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                                }
                            } else {
                                destructible |= parser.assignable & 1 ? 32 : 16;
                            }
                        } else if ((parser.getToken() & 4194304) === 4194304) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            } else if (token !== 1077936155) {
                                destructible |= 32;
                            } else {
                                scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                            }
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        } else {
                            destructible |= 16;
                            if ((parser.getToken() & 8388608) === 8388608) {
                                value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                            }
                            if (consumeOpt(parser, context | 32, 22)) {
                                value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                            }
                        }
                    } else if ((parser.getToken() & 2097152) === 2097152) {
                        value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                        destructible = parser.destructible;
                        parser.assignable = destructible & 16 ? 2 : 1;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else if (parser.destructible & 8) {
                            parser.report(71);
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if ((parser.getToken() & 4194304) === 4194304) {
                                value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            } else {
                                if ((parser.getToken() & 8388608) === 8388608) {
                                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                                }
                                if (consumeOpt(parser, context | 32, 22)) {
                                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                                }
                                destructible |= parser.assignable & 2 ? 16 : 32;
                            }
                        }
                    } else {
                        value = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1);
                        destructible |= parser.assignable & 1 ? 32 : 16;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if (parser.getToken() !== 18 && token !== 1074790415) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            }
                        }
                    }
                } else if (parser.getToken() === 69271571) {
                    destructible |= 16;
                    if (token === 209005) state |= 16;
                    state |= (token === 209008 ? 256 : token === 209009 ? 512 : 1) | 2;
                    key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                    destructible |= parser.assignable;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() & 143360) {
                    destructible |= 16;
                    if (token === -2147483528) parser.report(95);
                    if (token === 209005) {
                        if (parser.flags & 1) parser.report(132);
                        state |= 16 | 1;
                    } else if (token === 209008) {
                        state |= 256;
                    } else if (token === 209009) {
                        state |= 512;
                    } else {
                        parser.report(0);
                    }
                    key = parseIdentifier(parser, context);
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() === 67174411) {
                    destructible |= 16;
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() === 8391476) {
                    destructible |= 16;
                    if (token === 209008) {
                        parser.report(42);
                    } else if (token === 209009) {
                        parser.report(43);
                    } else if (token !== 209005) {
                        parser.report(30, KeywordDescTable[8391476 & 255]);
                    }
                    nextToken(parser, context);
                    state |= 8 | 1 | (token === 209005 ? 16 : 0);
                    if (parser.getToken() & 143360) {
                        key = parseIdentifier(parser, context);
                    } else if ((parser.getToken() & 134217728) === 134217728) {
                        key = parseLiteral(parser, context);
                    } else if (parser.getToken() === 69271571) {
                        state |= 2;
                        key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                        destructible |= parser.assignable;
                    } else {
                        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
                    }
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if ((parser.getToken() & 134217728) === 134217728) {
                    if (token === 209005) state |= 16;
                    state |= token === 209008 ? 256 : token === 209009 ? 512 : 1;
                    destructible |= 16;
                    key = parseLiteral(parser, context);
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else {
                    parser.report(133);
                }
            } else if ((parser.getToken() & 134217728) === 134217728) {
                key = parseLiteral(parser, context);
                if (parser.getToken() === 21) {
                    consume(parser, context | 32, 21);
                    const { tokenStart } = parser;
                    if (tokenValue === '__proto__') prototypeCount++;
                    if (parser.getToken() & 143360) {
                        value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                        const { tokenValue: valueAfterColon } = parser;
                        const token = parser.getToken();
                        value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (token === 1077936155 || token === 1074790415 || token === 18) {
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                } else {
                                    scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                                }
                            } else {
                                destructible |= parser.assignable & 1 ? 32 : 16;
                            }
                        } else if (parser.getToken() === 1077936155) {
                            if (parser.assignable & 2) destructible |= 16;
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        } else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        }
                    } else if ((parser.getToken() & 2097152) === 2097152) {
                        value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                        destructible = parser.destructible;
                        parser.assignable = destructible & 16 ? 2 : 1;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                        } else if ((parser.destructible & 8) !== 8) {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if ((parser.getToken() & 4194304) === 4194304) {
                                value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            } else {
                                if ((parser.getToken() & 8388608) === 8388608) {
                                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                                }
                                if (consumeOpt(parser, context | 32, 22)) {
                                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                                }
                                destructible |= parser.assignable & 2 ? 16 : 32;
                            }
                        }
                    } else {
                        value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                        destructible |= parser.assignable & 1 ? 32 : 16;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 1 ? 0 : 16;
                            if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            }
                        }
                    }
                } else if (parser.getToken() === 67174411) {
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                    destructible = parser.assignable | 16;
                } else {
                    parser.report(134);
                }
            } else if (parser.getToken() === 69271571) {
                key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                destructible |= parser.destructible & 256 ? 256 : 0;
                state |= 2;
                if (parser.getToken() === 21) {
                    nextToken(parser, context | 32);
                    const { tokenStart, tokenValue } = parser;
                    const tokenAfterColon = parser.getToken();
                    if (parser.getToken() & 143360) {
                        value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
                        const token = parser.getToken();
                        value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                        if ((parser.getToken() & 4194304) === 4194304) {
                            destructible |= parser.assignable & 2 ? 16 : token === 1077936155 ? 0 : 32;
                            value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        } else if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (token === 1077936155 || token === 1074790415 || token === 18) {
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                } else if ((tokenAfterColon & 143360) === 143360) {
                                    scope?.addVarOrBlock(context, tokenValue, kind, origin);
                                }
                            } else {
                                destructible |= parser.assignable & 1 ? 32 : 16;
                            }
                        } else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                        }
                    } else if ((parser.getToken() & 2097152) === 2097152) {
                        value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                        destructible = parser.destructible;
                        parser.assignable = destructible & 16 ? 2 : 1;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else if (destructible & 8) {
                            parser.report(62);
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 2 ? destructible | 16 : 0;
                            if ((parser.getToken() & 4194304) === 4194304) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            } else {
                                if ((parser.getToken() & 8388608) === 8388608) {
                                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, value);
                                }
                                if (consumeOpt(parser, context | 32, 22)) {
                                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart);
                                }
                                destructible |= parser.assignable & 2 ? 16 : 32;
                            }
                        }
                    } else {
                        value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                        destructible |= parser.assignable & 1 ? 32 : 16;
                        if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                            if (parser.assignable & 2) destructible |= 16;
                        } else {
                            value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart);
                            destructible = parser.assignable & 1 ? 0 : 16;
                            if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                                if (parser.getToken() !== 1077936155) destructible |= 16;
                                value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, value);
                            }
                        }
                    }
                } else if (parser.getToken() === 67174411) {
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                    destructible = 16;
                } else {
                    parser.report(44);
                }
            } else if (token === 8391476) {
                consume(parser, context | 32, 8391476);
                state |= 8;
                if (parser.getToken() & 143360) {
                    const token = parser.getToken();
                    key = parseIdentifier(parser, context);
                    state |= 1;
                    if (parser.getToken() === 67174411) {
                        destructible |= 16;
                        value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                    } else {
                        throw new ParseError(parser.tokenStart, parser.currentLocation, token === 209005 ? 46 : token === 209008 || parser.getToken() === 209009 ? 45 : 47, KeywordDescTable[token & 255]);
                    }
                } else if ((parser.getToken() & 134217728) === 134217728) {
                    destructible |= 16;
                    key = parseLiteral(parser, context);
                    state |= 1;
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else if (parser.getToken() === 69271571) {
                    destructible |= 16;
                    state |= 2 | 1;
                    key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                    value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
                } else {
                    parser.report(126);
                }
            } else {
                parser.report(30, KeywordDescTable[token & 255]);
            }
            destructible |= parser.destructible & 128 ? 128 : 0;
            parser.destructible = destructible;
            properties.push(parser.finishNode({
                type: 'Property',
                key: key,
                value,
                kind: !(state & 768) ? 'init' : state & 512 ? 'set' : 'get',
                computed: (state & 2) > 0,
                method: (state & 1) > 0,
                shorthand: (state & 4) > 0
            }, tokenStart));
        }
        destructible |= parser.destructible;
        if (parser.getToken() !== 18) break;
        nextToken(parser, context);
    }
    consume(parser, context, 1074790415);
    if (prototypeCount > 1) destructible |= 64;
    const node = parser.finishNode({
        type: isPattern ? 'ObjectPattern' : 'ObjectExpression',
        properties
    }, start);
    if (!skipInitializer && parser.getToken() & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node);
    }
    parser.destructible = destructible;
    return node;
}
function parseMethodFormals(parser, context, scope, privateScope, kind, type, inGroup) {
    consume(parser, context, 67174411);
    const params = [];
    parser.flags = (parser.flags | 128) ^ 128;
    if (parser.getToken() === 16) {
        if (kind & 512) {
            parser.report(37, 'Setter', 'one', '');
        }
        nextToken(parser, context);
        return params;
    }
    if (kind & 256) {
        parser.report(37, 'Getter', 'no', 's');
    }
    if (kind & 512 && parser.getToken() === 14) {
        parser.report(38);
    }
    context = (context | 131072) ^ 131072;
    let setterArgs = 0;
    let isNonSimpleParameterList = 0;
    while(parser.getToken() !== 18){
        let left = null;
        const { tokenStart } = parser;
        if (parser.getToken() & 143360) {
            if ((context & 1) === 0) {
                if ((parser.getToken() & 36864) === 36864) {
                    parser.flags |= 256;
                }
                if ((parser.getToken() & 537079808) === 537079808) {
                    parser.flags |= 512;
                }
            }
            left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0);
        } else {
            if (parser.getToken() === 2162700) {
                left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0);
            } else if (parser.getToken() === 69271571) {
                left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0);
            } else if (parser.getToken() === 14) {
                left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, type, 0, 0, inGroup, 1);
            }
            isNonSimpleParameterList = 1;
            if (parser.destructible & (32 | 16)) parser.report(50);
        }
        if (parser.getToken() === 1077936155) {
            nextToken(parser, context | 32);
            isNonSimpleParameterList = 1;
            const right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
            left = parser.finishNode({
                type: 'AssignmentPattern',
                left: left,
                right
            }, tokenStart);
        }
        setterArgs++;
        params.push(left);
        if (!consumeOpt(parser, context, 18)) break;
        if (parser.getToken() === 16) {
            break;
        }
    }
    if (kind & 512 && setterArgs !== 1) {
        parser.report(37, 'Setter', 'one', '');
    }
    scope?.reportScopeError();
    if (isNonSimpleParameterList) parser.flags |= 128;
    consume(parser, context, 16);
    return params;
}
function parseComputedPropertyName(parser, context, privateScope, inGroup) {
    nextToken(parser, context | 32);
    const key = parseExpression(parser, (context | 131072) ^ 131072, privateScope, 1, inGroup, parser.tokenStart);
    consume(parser, context, 20);
    return key;
}
function parseParenthesizedExpression(parser, context, privateScope, canAssign, kind, origin, start) {
    parser.flags = (parser.flags | 128) ^ 128;
    const parenthesesStart = parser.tokenStart;
    nextToken(parser, context | 32 | 262144);
    const scope = parser.createScopeIfLexical()?.createChildScope(512);
    context = (context | 131072) ^ 131072;
    if (consumeOpt(parser, context, 16)) {
        return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 0, start);
    }
    let destructible = 0;
    parser.destructible &= -385;
    let expr;
    let expressions = [];
    let isSequence = 0;
    let isNonSimpleParameterList = 0;
    let hasStrictReserved = 0;
    const tokenAfterParenthesesStart = parser.tokenStart;
    parser.assignable = 1;
    while(parser.getToken() !== 16){
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
            scope?.addBlockName(context, parser.tokenValue, 1, 0);
            if ((token & 537079808) === 537079808) {
                isNonSimpleParameterList = 1;
            } else if ((token & 36864) === 36864) {
                hasStrictReserved = 1;
            }
            expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenStart);
            if (parser.getToken() === 16 || parser.getToken() === 18) {
                if (parser.assignable & 2) {
                    destructible |= 16;
                    isNonSimpleParameterList = 1;
                }
            } else {
                if (parser.getToken() === 1077936155) {
                    isNonSimpleParameterList = 1;
                } else {
                    destructible |= 16;
                }
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenStart);
                if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                    expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenStart, expr);
                }
            }
        } else if ((token & 2097152) === 2097152) {
            expr = token === 2162700 ? parseObjectLiteralOrPattern(parser, context | 262144, scope, privateScope, 0, 1, 0, kind, origin) : parseArrayExpressionOrPattern(parser, context | 262144, scope, privateScope, 0, 1, 0, kind, origin);
            destructible |= parser.destructible;
            isNonSimpleParameterList = 1;
            parser.assignable = 2;
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                if (destructible & 8) parser.report(122);
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
                destructible |= 16;
                if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                    expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
                }
            }
        } else if (token === 14) {
            expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 0, 1, 0);
            if (parser.destructible & 16) parser.report(74);
            isNonSimpleParameterList = 1;
            if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
                expressions.push(expr);
            }
            destructible |= 8;
            break;
        } else {
            destructible |= 16;
            expr = parseExpression(parser, context, privateScope, 1, 1, tokenStart);
            if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
                expressions.push(expr);
            }
            if (parser.getToken() === 18) {
                if (!isSequence) {
                    isSequence = 1;
                    expressions = [
                        expr
                    ];
                }
            }
            if (isSequence) {
                while(consumeOpt(parser, context | 32, 18)){
                    expressions.push(parseExpression(parser, context, privateScope, 1, 1, parser.tokenStart));
                }
                parser.assignable = 2;
                expr = parser.finishNode({
                    type: 'SequenceExpression',
                    expressions
                }, tokenAfterParenthesesStart);
            }
            consume(parser, context, 16);
            parser.destructible = destructible;
            return parser.options.preserveParens ? parser.finishNode({
                type: 'ParenthesizedExpression',
                expression: expr
            }, parenthesesStart) : expr;
        }
        if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
            expressions.push(expr);
        }
        if (!consumeOpt(parser, context | 32, 18)) break;
        if (!isSequence) {
            isSequence = 1;
            expressions = [
                expr
            ];
        }
        if (parser.getToken() === 16) {
            destructible |= 8;
            break;
        }
    }
    if (isSequence) {
        parser.assignable = 2;
        expr = parser.finishNode({
            type: 'SequenceExpression',
            expressions
        }, tokenAfterParenthesesStart);
    }
    consume(parser, context, 16);
    if (destructible & 16 && destructible & 8) parser.report(151);
    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
    if (parser.getToken() === 10) {
        if (destructible & (32 | 16)) parser.report(49);
        if (context & (2048 | 2) && destructible & 128) parser.report(31);
        if (context & (1 | 1024) && destructible & 256) {
            parser.report(32);
        }
        if (isNonSimpleParameterList) parser.flags |= 128;
        if (hasStrictReserved) parser.flags |= 256;
        return parseParenthesizedArrow(parser, context, scope, privateScope, isSequence ? expressions : [
            expr
        ], canAssign, 0, start);
    }
    if (destructible & 64) {
        parser.report(63);
    }
    if (destructible & 8) {
        parser.report(144);
    }
    parser.destructible = (parser.destructible | 256) ^ 256 | destructible;
    return parser.options.preserveParens ? parser.finishNode({
        type: 'ParenthesizedExpression',
        expression: expr
    }, parenthesesStart) : expr;
}
function parseIdentifierOrArrow(parser, context, privateScope) {
    const { tokenStart: start } = parser;
    const { tokenValue } = parser;
    let isNonSimpleParameterList = 0;
    let hasStrictReserved = 0;
    if ((parser.getToken() & 537079808) === 537079808) {
        isNonSimpleParameterList = 1;
    } else if ((parser.getToken() & 36864) === 36864) {
        hasStrictReserved = 1;
    }
    const expr = parseIdentifier(parser, context);
    parser.assignable = 1;
    if (parser.getToken() === 10) {
        const scope = parser.options.lexical ? createArrowHeadParsingScope(parser, context, tokenValue) : undefined;
        if (isNonSimpleParameterList) parser.flags |= 128;
        if (hasStrictReserved) parser.flags |= 256;
        return parseArrowFunctionExpression(parser, context, scope, privateScope, [
            expr
        ], 0, start);
    }
    return expr;
}
function parseArrowFromIdentifier(parser, context, privateScope, value, expr, inNew, canAssign, isAsync, start) {
    if (!canAssign) parser.report(57);
    if (inNew) parser.report(51);
    parser.flags &= -129;
    const scope = parser.options.lexical ? createArrowHeadParsingScope(parser, context, value) : void 0;
    return parseArrowFunctionExpression(parser, context, scope, privateScope, [
        expr
    ], isAsync, start);
}
function parseParenthesizedArrow(parser, context, scope, privateScope, params, canAssign, isAsync, start) {
    if (!canAssign) parser.report(57);
    for(let i = 0; i < params.length; ++i)reinterpretToPattern(parser, params[i]);
    return parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start);
}
function parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start) {
    if (parser.flags & 1) parser.report(48);
    consume(parser, context | 32, 10);
    const modifierFlags = 1024 | 2048 | 8192 | 524288;
    context = (context | modifierFlags) ^ modifierFlags | (isAsync ? 2048 : 0);
    const expression = parser.getToken() !== 2162700;
    let body;
    scope?.reportScopeError();
    if (expression) {
        parser.flags = (parser.flags | 512 | 256 | 64 | 4096) ^ (512 | 256 | 64 | 4096);
        body = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    } else {
        scope = scope?.createChildScope(64);
        const modifierFlags = 4 | 131072 | 8;
        body = parseFunctionBody(parser, (context | modifierFlags) ^ modifierFlags | 4096, scope, privateScope, 16, void 0, void 0);
        switch(parser.getToken()){
            case 69271571:
                if ((parser.flags & 1) === 0) {
                    parser.report(116);
                }
                break;
            case 67108877:
            case 67174409:
            case 22:
                parser.report(117);
            case 67174411:
                if ((parser.flags & 1) === 0) {
                    parser.report(116);
                }
                parser.flags |= 1024;
                break;
        }
        if ((parser.getToken() & 8388608) === 8388608 && (parser.flags & 1) === 0) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        if ((parser.getToken() & 33619968) === 33619968) parser.report(125);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ArrowFunctionExpression',
        params,
        body,
        async: isAsync === 1,
        expression,
        generator: false
    }, start);
}
function parseFormalParametersOrFormalList(parser, context, scope, privateScope, inGroup, kind) {
    consume(parser, context, 67174411);
    parser.flags = (parser.flags | 128) ^ 128;
    const params = [];
    if (consumeOpt(parser, context, 16)) return params;
    context = (context | 131072) ^ 131072;
    let isNonSimpleParameterList = 0;
    while(parser.getToken() !== 18){
        let left;
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
            if ((context & 1) === 0) {
                if ((token & 36864) === 36864) {
                    parser.flags |= 256;
                }
                if ((token & 537079808) === 537079808) {
                    parser.flags |= 512;
                }
            }
            left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0);
        } else {
            if (token === 2162700) {
                left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0);
            } else if (token === 69271571) {
                left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0);
            } else if (token === 14) {
                left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, 0, 0, inGroup, 1);
            } else {
                parser.report(30, KeywordDescTable[token & 255]);
            }
            isNonSimpleParameterList = 1;
            if (parser.destructible & (32 | 16)) {
                parser.report(50);
            }
        }
        if (parser.getToken() === 1077936155) {
            nextToken(parser, context | 32);
            isNonSimpleParameterList = 1;
            const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
            left = parser.finishNode({
                type: 'AssignmentPattern',
                left,
                right
            }, tokenStart);
        }
        params.push(left);
        if (!consumeOpt(parser, context, 18)) break;
        if (parser.getToken() === 16) {
            break;
        }
    }
    if (isNonSimpleParameterList) parser.flags |= 128;
    if (isNonSimpleParameterList || context & 1) {
        scope?.reportScopeError();
    }
    consume(parser, context, 16);
    return params;
}
function parseMemberExpressionNoCall(parser, context, privateScope, expr, inGroup, start) {
    const token = parser.getToken();
    if (token & 67108864) {
        if (token === 67108877) {
            nextToken(parser, context | 262144);
            parser.assignable = 1;
            const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
            return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
                type: 'MemberExpression',
                object: expr,
                computed: false,
                property,
                optional: false
            }, start), 0, start);
        } else if (token === 69271571) {
            nextToken(parser, context | 32);
            const { tokenStart } = parser;
            const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenStart);
            consume(parser, context, 20);
            parser.assignable = 1;
            return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
                type: 'MemberExpression',
                object: expr,
                computed: true,
                property,
                optional: false
            }, start), 0, start);
        } else if (token === 67174408 || token === 67174409) {
            parser.assignable = 2;
            return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
                type: 'TaggedTemplateExpression',
                tag: expr,
                quasi: parser.getToken() === 67174408 ? parseTemplate(parser, context | 64, privateScope) : parseTemplateLiteral(parser, context | 64)
            }, start), 0, start);
        }
    }
    return expr;
}
function parseNewExpression(parser, context, privateScope, inGroup) {
    const { tokenStart: start } = parser;
    const id = parseIdentifier(parser, context | 32);
    const { tokenStart } = parser;
    if (consumeOpt(parser, context, 67108877)) {
        if (context & 65536 && parser.getToken() === 209029) {
            parser.assignable = 2;
            return parseMetaProperty(parser, context, id, start);
        }
        parser.report(94);
    }
    parser.assignable = 2;
    if ((parser.getToken() & 16842752) === 16842752) {
        parser.report(65, KeywordDescTable[parser.getToken() & 255]);
    }
    const expr = parsePrimaryExpression(parser, context, privateScope, 2, 1, 0, inGroup, 1, tokenStart);
    context = (context | 131072) ^ 131072;
    if (parser.getToken() === 67108990) parser.report(168);
    const callee = parseMemberExpressionNoCall(parser, context, privateScope, expr, inGroup, tokenStart);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'NewExpression',
        callee,
        arguments: parser.getToken() === 67174411 ? parseArguments(parser, context, privateScope, inGroup) : []
    }, start);
}
function parseMetaProperty(parser, context, meta, start) {
    const property = parseIdentifier(parser, context);
    return parser.finishNode({
        type: 'MetaProperty',
        meta,
        property
    }, start);
}
function parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start) {
    if (parser.getToken() === 209006) parser.report(31);
    if (context & (1 | 1024) && parser.getToken() === 241771) {
        parser.report(32);
    }
    classifyIdentifier(parser, context, parser.getToken());
    if ((parser.getToken() & 36864) === 36864) {
        parser.flags |= 256;
    }
    return parseArrowFromIdentifier(parser, context & -524289 | 2048, privateScope, parser.tokenValue, parseIdentifier(parser, context), 0, canAssign, 1, start);
}
function parseAsyncArrowOrCallExpression(parser, context, privateScope, callee, canAssign, kind, origin, flags, start) {
    nextToken(parser, context | 32);
    const scope = parser.createScopeIfLexical()?.createChildScope(512);
    context = (context | 131072) ^ 131072;
    if (consumeOpt(parser, context, 16)) {
        if (parser.getToken() === 10) {
            if (flags & 1) parser.report(48);
            return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 1, start);
        }
        return parser.finishNode({
            type: 'CallExpression',
            callee,
            arguments: [],
            optional: false
        }, start);
    }
    let destructible = 0;
    let expr = null;
    let isNonSimpleParameterList = 0;
    parser.destructible = (parser.destructible | 256 | 128) ^ (256 | 128);
    const params = [];
    while(parser.getToken() !== 16){
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
            scope?.addBlockName(context, parser.tokenValue, kind, 0);
            if ((token & 537079808) === 537079808) {
                parser.flags |= 512;
            } else if ((token & 36864) === 36864) {
                parser.flags |= 256;
            }
            expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenStart);
            if (parser.getToken() === 16 || parser.getToken() === 18) {
                if (parser.assignable & 2) {
                    destructible |= 16;
                    isNonSimpleParameterList = 1;
                }
            } else {
                if (parser.getToken() === 1077936155) {
                    isNonSimpleParameterList = 1;
                } else {
                    destructible |= 16;
                }
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenStart);
                if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                    expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenStart, expr);
                }
            }
        } else if (token & 2097152) {
            expr = token === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin);
            destructible |= parser.destructible;
            isNonSimpleParameterList = 1;
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                if (destructible & 8) parser.report(122);
                expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
                destructible |= 16;
                if ((parser.getToken() & 8388608) === 8388608) {
                    expr = parseBinaryExpression(parser, context, privateScope, 1, start, 4, token, expr);
                }
                if (consumeOpt(parser, context | 32, 22)) {
                    expr = parseConditionalExpression(parser, context, privateScope, expr, start);
                }
            }
        } else if (token === 14) {
            expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 1, 1, 0);
            destructible |= (parser.getToken() === 16 ? 0 : 16) | parser.destructible;
            isNonSimpleParameterList = 1;
        } else {
            expr = parseExpression(parser, context, privateScope, 1, 0, tokenStart);
            destructible = parser.assignable;
            params.push(expr);
            while(consumeOpt(parser, context | 32, 18)){
                params.push(parseExpression(parser, context, privateScope, 1, 0, tokenStart));
            }
            destructible |= parser.assignable;
            consume(parser, context, 16);
            parser.destructible = destructible | 16;
            parser.assignable = 2;
            return parser.finishNode({
                type: 'CallExpression',
                callee,
                arguments: params,
                optional: false
            }, start);
        }
        params.push(expr);
        if (!consumeOpt(parser, context | 32, 18)) break;
    }
    consume(parser, context, 16);
    destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
    if (parser.getToken() === 10) {
        if (destructible & (32 | 16)) parser.report(27);
        if (parser.flags & 1 || flags & 1) parser.report(48);
        if (destructible & 128) parser.report(31);
        if (context & (1 | 1024) && destructible & 256) parser.report(32);
        if (isNonSimpleParameterList) parser.flags |= 128;
        return parseParenthesizedArrow(parser, context | 2048, scope, privateScope, params, canAssign, 1, start);
    }
    if (destructible & 64) {
        parser.report(63);
    }
    if (destructible & 8) {
        parser.report(62);
    }
    parser.assignable = 2;
    return parser.finishNode({
        type: 'CallExpression',
        callee,
        arguments: params,
        optional: false
    }, start);
}
function parseRegExpLiteral(parser, context) {
    const { tokenRaw, tokenRegExp, tokenValue, tokenStart } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    const node = {
        type: 'Literal',
        value: tokenValue,
        regex: tokenRegExp
    };
    if (parser.options.raw) {
        node.raw = tokenRaw;
    }
    return parser.finishNode(node, tokenStart);
}
function parseClassDeclaration(parser, context, scope, privateScope, flags) {
    let start;
    let decorators;
    if (parser.leadingDecorators.decorators.length) {
        if (parser.getToken() === 132) {
            parser.report(30, '@');
        }
        start = parser.leadingDecorators.start;
        decorators = [
            ...parser.leadingDecorators.decorators
        ];
        parser.leadingDecorators.decorators.length = 0;
    } else {
        start = parser.tokenStart;
        decorators = parseDecorators(parser, context, privateScope);
    }
    context = (context | 16384 | 1) ^ 16384;
    nextToken(parser, context);
    let id = null;
    let superClass = null;
    const { tokenValue } = parser;
    if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
        if (isStrictReservedWord(parser, context, parser.getToken())) {
            parser.report(118);
        }
        if ((parser.getToken() & 537079808) === 537079808) {
            parser.report(119);
        }
        if (scope) {
            scope.addBlockName(context, tokenValue, 32, 0);
            if (flags) {
                if (flags & 2) {
                    parser.declareUnboundVariable(tokenValue);
                }
            }
        }
        id = parseIdentifier(parser, context);
    } else {
        if ((flags & 1) === 0) parser.report(39, 'Class');
    }
    let inheritedContext = context;
    if (consumeOpt(parser, context | 32, 20565)) {
        superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 0);
        inheritedContext |= 512;
    } else {
        inheritedContext = (inheritedContext | 512) ^ 512;
    }
    const body = parseClassBody(parser, inheritedContext, context, scope, privateScope, 2, 8, 0);
    return parser.finishNode({
        type: 'ClassDeclaration',
        id,
        superClass,
        body,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parseClassExpression(parser, context, privateScope, inGroup, start) {
    let id = null;
    let superClass = null;
    const decorators = parseDecorators(parser, context, privateScope);
    context = (context | 1 | 16384) ^ 16384;
    nextToken(parser, context);
    if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
        if (isStrictReservedWord(parser, context, parser.getToken())) parser.report(118);
        if ((parser.getToken() & 537079808) === 537079808) {
            parser.report(119);
        }
        id = parseIdentifier(parser, context);
    }
    let inheritedContext = context;
    if (consumeOpt(parser, context | 32, 20565)) {
        superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 0);
        inheritedContext |= 512;
    } else {
        inheritedContext = (inheritedContext | 512) ^ 512;
    }
    const body = parseClassBody(parser, inheritedContext, context, void 0, privateScope, 2, 0, inGroup);
    parser.assignable = 2;
    return parser.finishNode({
        type: 'ClassExpression',
        id,
        superClass,
        body,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parseDecorators(parser, context, privateScope) {
    const list = [];
    if (parser.options.next) {
        while(parser.getToken() === 132){
            list.push(parseDecoratorList(parser, context, privateScope));
        }
    }
    return list;
}
function parseDecoratorList(parser, context, privateScope) {
    const start = parser.tokenStart;
    nextToken(parser, context | 32);
    let expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, start);
    expression = parseMemberOrUpdateExpression(parser, context, privateScope, expression, 0, 0, parser.tokenStart);
    return parser.finishNode({
        type: 'Decorator',
        expression
    }, start);
}
function parseClassBody(parser, context, inheritedContext, scope, parentScope, kind, origin, inGroup) {
    const { tokenStart } = parser;
    const privateScope = parser.createPrivateScopeIfLexical(parentScope);
    consume(parser, context | 32, 2162700);
    const modifierFlags = 131072 | 524288;
    context = (context | modifierFlags) ^ modifierFlags;
    const hasConstr = parser.flags & 32;
    parser.flags = (parser.flags | 32) ^ 32;
    const body = [];
    while(parser.getToken() !== 1074790415){
        const decoratorStart = parser.tokenStart;
        const decorators = parseDecorators(parser, context, privateScope);
        if (decorators.length > 0 && parser.tokenValue === 'constructor') {
            parser.report(109);
        }
        if (parser.getToken() === 1074790415) parser.report(108);
        if (consumeOpt(parser, context, 1074790417)) {
            if (decorators.length > 0) parser.report(120);
            continue;
        }
        body.push(parseClassElementList(parser, context, scope, privateScope, inheritedContext, kind, decorators, 0, inGroup, decorators.length > 0 ? decoratorStart : parser.tokenStart));
    }
    consume(parser, origin & 8 ? context | 32 : context, 1074790415);
    privateScope?.validatePrivateIdentifierRefs();
    parser.flags = parser.flags & -33 | hasConstr;
    return parser.finishNode({
        type: 'ClassBody',
        body
    }, tokenStart);
}
function parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, isStatic, inGroup, start) {
    let kind = isStatic ? 32 : 0;
    let key = null;
    const token = parser.getToken();
    if (token & (143360 | 36864) || token === -2147483528) {
        key = parseIdentifier(parser, context);
        switch(token){
            case 36970:
                if (!isStatic && parser.getToken() !== 67174411 && (parser.getToken() & 1048576) !== 1048576 && parser.getToken() !== 1077936155) {
                    return parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, 1, inGroup, start);
                }
                break;
            case 209005:
                if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    kind |= 16 | (optionalBit(parser, context, 8391476) ? 8 : 0);
                }
                break;
            case 209008:
                if (parser.getToken() !== 67174411) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    kind |= 256;
                }
                break;
            case 209009:
                if (parser.getToken() !== 67174411) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    kind |= 512;
                }
                break;
            case 12402:
                if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
                    if ((parser.getToken() & 1073741824) === 1073741824) {
                        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
                    }
                    if (parser.options.next) kind |= 1024;
                }
                break;
        }
    } else if (token === 69271571) {
        kind |= 2;
        key = parseComputedPropertyName(parser, inheritedContext, privateScope, inGroup);
    } else if ((token & 134217728) === 134217728) {
        key = parseLiteral(parser, context);
    } else if (token === 8391476) {
        kind |= 8;
        nextToken(parser, context);
    } else if (parser.getToken() === 130) {
        kind |= 8192;
        key = parsePrivateIdentifier(parser, context | 16, privateScope, 768);
    } else if ((parser.getToken() & 1073741824) === 1073741824) {
        kind |= 128;
    } else if (isStatic && token === 2162700) {
        return parseStaticBlock(parser, context | 16, scope, privateScope, start);
    } else if (token === -2147483527) {
        key = parseIdentifier(parser, context);
        if (parser.getToken() !== 67174411) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    if (kind & (8 | 16 | 768 | 1024)) {
        if (parser.getToken() & 143360 || parser.getToken() === -2147483528 || parser.getToken() === -2147483527) {
            key = parseIdentifier(parser, context);
        } else if ((parser.getToken() & 134217728) === 134217728) {
            key = parseLiteral(parser, context);
        } else if (parser.getToken() === 69271571) {
            kind |= 2;
            key = parseComputedPropertyName(parser, context, privateScope, 0);
        } else if (parser.getToken() === 130) {
            kind |= 8192;
            key = parsePrivateIdentifier(parser, context, privateScope, kind);
        } else parser.report(135);
    }
    if ((kind & 2) === 0) {
        if (parser.tokenValue === 'constructor') {
            if ((parser.getToken() & 1073741824) === 1073741824) {
                parser.report(129);
            } else if ((kind & 32) === 0 && parser.getToken() === 67174411) {
                if (kind & (768 | 16 | 128 | 8)) {
                    parser.report(53, 'accessor');
                } else if ((context & 512) === 0) {
                    if (parser.flags & 32) parser.report(54);
                    else parser.flags |= 32;
                }
            }
            kind |= 64;
        } else if ((kind & 8192) === 0 && kind & 32 && parser.tokenValue === 'prototype') {
            parser.report(52);
        }
    }
    if (kind & 1024 || parser.getToken() !== 67174411 && (kind & 768) === 0) {
        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
    }
    const value = parseMethodDefinition(parser, context | 16, privateScope, kind, inGroup, parser.tokenStart);
    return parser.finishNode({
        type: 'MethodDefinition',
        kind: (kind & 32) === 0 && kind & 64 ? 'constructor' : kind & 256 ? 'get' : kind & 512 ? 'set' : 'method',
        static: (kind & 32) > 0,
        computed: (kind & 2) > 0,
        key,
        value,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parsePrivateIdentifier(parser, context, privateScope, kind) {
    const { tokenStart } = parser;
    nextToken(parser, context);
    const { tokenValue } = parser;
    if (tokenValue === 'constructor') parser.report(128);
    if (parser.options.lexical) {
        if (!privateScope) parser.report(4, tokenValue);
        if (kind) {
            privateScope.addPrivateIdentifier(tokenValue, kind);
        } else {
            privateScope.addPrivateIdentifierRef(tokenValue);
        }
    }
    nextToken(parser, context);
    return parser.finishNode({
        type: 'PrivateIdentifier',
        name: tokenValue
    }, tokenStart);
}
function parsePropertyDefinition(parser, context, privateScope, key, state, decorators, start) {
    let value = null;
    if (state & 8) parser.report(0);
    if (parser.getToken() === 1077936155) {
        nextToken(parser, context | 32);
        const { tokenStart } = parser;
        if (parser.getToken() === 537079927) parser.report(119);
        const modifierFlags = 1024 | 2048 | 8192 | ((state & 64) === 0 ? 512 | 16384 : 0);
        context = (context | modifierFlags) ^ modifierFlags | (state & 8 ? 1024 : 0) | (state & 16 ? 2048 : 0) | (state & 64 ? 16384 : 0) | 256 | 65536;
        value = parsePrimaryExpression(parser, context | 16, privateScope, 2, 0, 1, 0, 1, tokenStart);
        if ((parser.getToken() & 1073741824) !== 1073741824 || (parser.getToken() & 4194304) === 4194304) {
            value = parseMemberOrUpdateExpression(parser, context | 16, privateScope, value, 0, 0, tokenStart);
            value = parseAssignmentExpression(parser, context | 16, privateScope, 0, 0, tokenStart, value);
        }
    }
    matchOrInsertSemicolon(parser, context);
    return parser.finishNode({
        type: state & 1024 ? 'AccessorProperty' : 'PropertyDefinition',
        key,
        value,
        static: (state & 32) > 0,
        computed: (state & 2) > 0,
        ...parser.options.next ? {
            decorators
        } : null
    }, start);
}
function parseBindingPattern(parser, context, scope, privateScope, type, origin) {
    if (parser.getToken() & 143360 || (context & 1) === 0 && parser.getToken() === -2147483527) return parseAndClassifyIdentifier(parser, context, scope, type, origin);
    if ((parser.getToken() & 2097152) !== 2097152) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    const left = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin);
    if (parser.destructible & 16) parser.report(50);
    if (parser.destructible & 32) parser.report(50);
    return left;
}
function parseAndClassifyIdentifier(parser, context, scope, kind, origin) {
    const token = parser.getToken();
    if (context & 1) {
        if ((token & 537079808) === 537079808) {
            parser.report(119);
        } else if ((token & 36864) === 36864 || token === -2147483527) {
            parser.report(118);
        }
    }
    if ((token & 20480) === 20480) {
        parser.report(102);
    }
    if (token === 241771) {
        if (context & 1024) parser.report(32);
        if (context & 2) parser.report(111);
    }
    if ((token & 255) === (241737 & 255)) {
        if (kind & (8 | 16)) parser.report(100);
    }
    if (token === 209006) {
        if (context & 2048) parser.report(176);
        if (context & 2) parser.report(110);
    }
    const { tokenValue, tokenStart: start } = parser;
    nextToken(parser, context);
    scope?.addVarOrBlock(context, tokenValue, kind, origin);
    return parser.finishNode({
        type: 'Identifier',
        name: tokenValue
    }, start);
}
function parseJSXRootElementOrFragment(parser, context, privateScope, inJSXChild, start) {
    if (!inJSXChild) consume(parser, context, 8456256);
    if (parser.getToken() === 8390721) {
        const openingFragment = parseJSXOpeningFragment(parser, start);
        const [children, closingFragment] = parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild);
        return parser.finishNode({
            type: 'JSXFragment',
            openingFragment,
            children,
            closingFragment
        }, start);
    }
    if (parser.getToken() === 8457014) parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    let closingElement = null;
    let children = [];
    const openingElement = parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start);
    if (!openingElement.selfClosing) {
        [children, closingElement] = parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild);
        const close = isEqualTagName(closingElement.name);
        if (isEqualTagName(openingElement.name) !== close) parser.report(155, close);
    }
    return parser.finishNode({
        type: 'JSXElement',
        children,
        openingElement,
        closingElement
    }, start);
}
function parseJSXOpeningFragment(parser, start) {
    nextJSXToken(parser);
    return parser.finishNode({
        type: 'JSXOpeningFragment'
    }, start);
}
function parseJSXClosingElement(parser, context, inJSXChild, start) {
    consume(parser, context, 8457014);
    const name = parseJSXElementName(parser, context);
    if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
    }
    if (inJSXChild) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXClosingElement',
        name
    }, start);
}
function parseJSXClosingFragment(parser, context, inJSXChild, start) {
    consume(parser, context, 8457014);
    if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
    }
    if (inJSXChild) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXClosingFragment'
    }, start);
}
function parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild) {
    const children = [];
    while(true){
        const child = parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild);
        if (child.type === 'JSXClosingElement') {
            return [
                children,
                child
            ];
        }
        children.push(child);
    }
}
function parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild) {
    const children = [];
    while(true){
        const child = parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild);
        if (child.type === 'JSXClosingFragment') {
            return [
                children,
                child
            ];
        }
        children.push(child);
    }
}
function parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild) {
    if (parser.getToken() === 137) return parseJSXText(parser, context);
    if (parser.getToken() === 2162700) return parseJSXExpressionContainer(parser, context, privateScope, 1, 0);
    if (parser.getToken() === 8456256) {
        const { tokenStart } = parser;
        nextToken(parser, context);
        if (parser.getToken() === 8457014) return parseJSXClosingElement(parser, context, inJSXChild, tokenStart);
        return parseJSXRootElementOrFragment(parser, context, privateScope, 1, tokenStart);
    }
    parser.report(0);
}
function parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild) {
    if (parser.getToken() === 137) return parseJSXText(parser, context);
    if (parser.getToken() === 2162700) return parseJSXExpressionContainer(parser, context, privateScope, 1, 0);
    if (parser.getToken() === 8456256) {
        const { tokenStart } = parser;
        nextToken(parser, context);
        if (parser.getToken() === 8457014) return parseJSXClosingFragment(parser, context, inJSXChild, tokenStart);
        return parseJSXRootElementOrFragment(parser, context, privateScope, 1, tokenStart);
    }
    parser.report(0);
}
function parseJSXText(parser, context) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    const node = {
        type: 'JSXText',
        value: parser.tokenValue
    };
    if (parser.options.raw) {
        node.raw = parser.tokenRaw;
    }
    return parser.finishNode(node, start);
}
function parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start) {
    if ((parser.getToken() & 143360) !== 143360 && (parser.getToken() & 4096) !== 4096) parser.report(0);
    const tagName = parseJSXElementName(parser, context);
    const attributes = parseJSXAttributes(parser, context, privateScope);
    const selfClosing = parser.getToken() === 8457014;
    if (selfClosing) consume(parser, context, 8457014);
    if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
    }
    if (inJSXChild || !selfClosing) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXOpeningElement',
        name: tagName,
        attributes,
        selfClosing
    }, start);
}
function parseJSXElementName(parser, context) {
    const { tokenStart } = parser;
    rescanJSXIdentifier(parser);
    let key = parseJSXIdentifier(parser, context);
    if (parser.getToken() === 21) return parseJSXNamespacedName(parser, context, key, tokenStart);
    while(consumeOpt(parser, context, 67108877)){
        rescanJSXIdentifier(parser);
        key = parseJSXMemberExpression(parser, context, key, tokenStart);
    }
    return key;
}
function parseJSXMemberExpression(parser, context, object, start) {
    const property = parseJSXIdentifier(parser, context);
    return parser.finishNode({
        type: 'JSXMemberExpression',
        object,
        property
    }, start);
}
function parseJSXAttributes(parser, context, privateScope) {
    const attributes = [];
    while(parser.getToken() !== 8457014 && parser.getToken() !== 8390721 && parser.getToken() !== 1048576){
        attributes.push(parseJsxAttribute(parser, context, privateScope));
    }
    return attributes;
}
function parseJSXSpreadAttribute(parser, context, privateScope) {
    const start = parser.tokenStart;
    nextToken(parser, context);
    consume(parser, context, 14);
    const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    consume(parser, context, 1074790415);
    return parser.finishNode({
        type: 'JSXSpreadAttribute',
        argument: expression
    }, start);
}
function parseJsxAttribute(parser, context, privateScope) {
    const { tokenStart } = parser;
    if (parser.getToken() === 2162700) return parseJSXSpreadAttribute(parser, context, privateScope);
    rescanJSXIdentifier(parser);
    let value = null;
    let name = parseJSXIdentifier(parser, context);
    if (parser.getToken() === 21) {
        name = parseJSXNamespacedName(parser, context, name, tokenStart);
    }
    if (parser.getToken() === 1077936155) {
        const token = scanJSXAttributeValue(parser, context);
        switch(token){
            case 134283267:
                value = parseLiteral(parser, context);
                break;
            case 8456256:
                value = parseJSXRootElementOrFragment(parser, context, privateScope, 0, parser.tokenStart);
                break;
            case 2162700:
                value = parseJSXExpressionContainer(parser, context, privateScope, 0, 1);
                break;
            default:
                parser.report(154);
        }
    }
    return parser.finishNode({
        type: 'JSXAttribute',
        value,
        name
    }, tokenStart);
}
function parseJSXNamespacedName(parser, context, namespace, start) {
    consume(parser, context, 21);
    const name = parseJSXIdentifier(parser, context);
    return parser.finishNode({
        type: 'JSXNamespacedName',
        namespace,
        name
    }, start);
}
function parseJSXExpressionContainer(parser, context, privateScope, inJSXChild, isAttr) {
    const { tokenStart: start } = parser;
    nextToken(parser, context | 32);
    const { tokenStart } = parser;
    if (parser.getToken() === 14) return parseJSXSpreadChild(parser, context, privateScope, start);
    let expression = null;
    if (parser.getToken() === 1074790415) {
        if (isAttr) parser.report(157);
        expression = parseJSXEmptyExpression(parser, {
            index: parser.startIndex,
            line: parser.startLine,
            column: parser.startColumn
        });
    } else {
        expression = parseExpression(parser, context, privateScope, 1, 0, tokenStart);
    }
    if (parser.getToken() !== 1074790415) {
        parser.report(25, KeywordDescTable[1074790415 & 255]);
    }
    if (inJSXChild) {
        nextJSXToken(parser);
    } else {
        nextToken(parser, context);
    }
    return parser.finishNode({
        type: 'JSXExpressionContainer',
        expression
    }, start);
}
function parseJSXSpreadChild(parser, context, privateScope, start) {
    consume(parser, context, 14);
    const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
    consume(parser, context, 1074790415);
    return parser.finishNode({
        type: 'JSXSpreadChild',
        expression
    }, start);
}
function parseJSXEmptyExpression(parser, start) {
    return parser.finishNode({
        type: 'JSXEmptyExpression'
    }, start, parser.tokenStart);
}
function parseJSXIdentifier(parser, context) {
    const start = parser.tokenStart;
    if (!(parser.getToken() & 143360)) {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
    }
    const { tokenValue } = parser;
    nextToken(parser, context);
    return parser.finishNode({
        type: 'JSXIdentifier',
        name: tokenValue
    }, start);
}
function parse(source, options) {
    return parseSource(source, options);
}
exports.parse = parse; //# sourceMappingURL=meriyah.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/get-package-version.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const _commonjsHelpers = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/_commonjsHelpers.js [instrumentation] (ecmascript)");
const require$$0 = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const require$$1 = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const { readFileSync } = require$$0;
const { join } = require$$1;
const packageVersions = /* @__PURE__ */ new Map();
function getPackageVersion(baseDir) {
    if (packageVersions.has(baseDir)) {
        return packageVersions.get(baseDir);
    }
    try {
        const packageJsonPath = join(baseDir, "package.json");
        const jsonFile = readFileSync(packageJsonPath);
        const { version } = JSON.parse(jsonFile);
        packageVersions.set(baseDir, version);
        return version;
    } catch  {
        return process.version.slice(1);
    }
}
var getPackageVersion_1 = getPackageVersion;
const getPackageVersion$1 = /*@__PURE__*/ _commonjsHelpers.getDefaultExportFromCjs(getPackageVersion_1);
exports.default = getPackageVersion$1;
exports.getPackageVersion_1 = getPackageVersion_1; //# sourceMappingURL=get-package-version.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/diagnostics.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
let diagnosticsHook;
function setDiagnosticsHook(hook) {
    diagnosticsHook = hook;
}
function emitDiagnostics(diag) {
    if (diagnosticsHook) {
        diagnosticsHook(diag);
    }
}
var diagnostics = {
    setDiagnosticsHook,
    emitDiagnostics
};
exports.diagnostics = diagnostics; //# sourceMappingURL=diagnostics.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/has-flag/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
var hasFlag = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
exports.hasFlag = hasFlag; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/supports-color/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const require$$0 = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const require$$1 = __turbopack_context__.r("[externals]/node:tty [external] (node:tty, cjs)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/has-flag/index.js [instrumentation] (ecmascript)");
const os = require$$0;
const tty = require$$1;
const hasFlag = index.hasFlag;
const { env } = process;
let forceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
}
if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
        forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
    }
    if (hasFlag("color=256")) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("CI" in env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE"
        ].some((sign)=>sign in env) || env.CI_NAME === "codeship") {
            return 1;
        }
        return min;
    }
    if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
        return 3;
    }
    if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch(env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ("COLORTERM" in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
var supportsColor_1 = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
exports.supportsColor_1 = supportsColor_1; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/ms/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
var ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
        return parse(val);
    } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return void 0;
    }
}
function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + "s";
    }
    return ms + "ms";
}
function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
}
function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}
exports.ms = ms; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/debug/src/common.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/ms/index.js [instrumentation] (ecmascript)");
function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = index.ms;
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
                args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                if (match === "%%") {
                    return "%";
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        if (typeof createDebug.init === "function") {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split){
            if (ns[0] === "-") {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
                if (template[templateIndex] === "*") {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++;
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false;
            }
        }
        while(templateIndex < template.length && template[templateIndex] === "*"){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
var common = setup;
exports.common = common; //# sourceMappingURL=common.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/debug/src/node.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const _commonjsHelpers = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/_commonjsHelpers.js [instrumentation] (ecmascript)");
const node = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/node.js [instrumentation] (ecmascript)");
const require$$1$1 = __turbopack_context__.r("[externals]/node:tty [external] (node:tty, cjs)");
const require$$1 = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/supports-color/index.js [instrumentation] (ecmascript)");
const common = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/debug/src/common.js [instrumentation] (ecmascript)");
(function(module, exports1) {
    const tty = require$$1$1;
    const util = require$$1;
    exports1.init = init;
    exports1.log = log;
    exports1.formatArgs = formatArgs;
    exports1.save = save;
    exports1.load = load;
    exports1.useColors = useColors;
    exports1.destroy = util.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports1.colors = [
        6,
        2,
        3,
        4,
        5,
        1
    ];
    try {
        const supportsColor = index.supportsColor_1;
        if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
            exports1.colors = [
                20,
                21,
                26,
                27,
                32,
                33,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                56,
                57,
                62,
                63,
                68,
                69,
                74,
                75,
                76,
                77,
                78,
                79,
                80,
                81,
                92,
                93,
                98,
                99,
                112,
                113,
                128,
                129,
                134,
                135,
                148,
                149,
                160,
                161,
                162,
                163,
                164,
                165,
                166,
                167,
                168,
                169,
                170,
                171,
                172,
                173,
                178,
                179,
                184,
                185,
                196,
                197,
                198,
                199,
                200,
                201,
                202,
                203,
                204,
                205,
                206,
                207,
                208,
                209,
                214,
                215,
                220,
                221
            ];
        }
    } catch (error) {}
    exports1.inspectOpts = Object.keys(process.env).filter((key)=>{
        return /^debug_/i.test(key);
    }).reduce((obj, key)=>{
        const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
            return k.toUpperCase();
        });
        let val = process.env[key];
        if (/^(yes|on|true|enabled)$/i.test(val)) {
            val = true;
        } else if (/^(no|off|false|disabled)$/i.test(val)) {
            val = false;
        } else if (val === "null") {
            val = null;
        } else {
            val = Number(val);
        }
        obj[prop] = val;
        return obj;
    }, {});
    function useColors() {
        return "colors" in exports1.inspectOpts ? Boolean(exports1.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
        const { namespace: name, useColors: useColors2 } = this;
        if (useColors2) {
            const c = this.color;
            const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
            const prefix = `  ${colorCode};1m${name} \x1B[0m`;
            args[0] = prefix + args[0].split("\n").join("\n" + prefix);
            args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
        } else {
            args[0] = getDate() + name + " " + args[0];
        }
    }
    function getDate() {
        if (exports1.inspectOpts.hideDate) {
            return "";
        }
        return /* @__PURE__ */ new Date().toISOString() + " ";
    }
    function log(...args) {
        return process.stderr.write(util.formatWithOptions(exports1.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
        if (namespaces) {
            process.env.DEBUG = namespaces;
        } else {
            delete process.env.DEBUG;
        }
    }
    function load() {
        return process.env.DEBUG;
    }
    function init(debug) {
        debug.inspectOpts = {};
        const keys = Object.keys(exports1.inspectOpts);
        for(let i = 0; i < keys.length; i++){
            debug.inspectOpts[keys[i]] = exports1.inspectOpts[keys[i]];
        }
    }
    module.exports = common.common(exports1);
    const { formatters } = module.exports;
    formatters.o = function(v) {
        this.inspectOpts.colors = this.useColors;
        return util.inspect(v, this.inspectOpts).split("\n").map((str)=>str.trim()).join(" ");
    };
    formatters.O = function(v) {
        this.inspectOpts.colors = this.useColors;
        return util.inspect(v, this.inspectOpts);
    };
})(node.__module, node.__module.exports);
var nodeExports = node.__module.exports;
const createDebug = /*@__PURE__*/ _commonjsHelpers.getDefaultExportFromCjs(nodeExports);
exports.default = createDebug;
exports.nodeExports = nodeExports; //# sourceMappingURL=node.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: 'Module'
    }
});
const _commonjsHelpers = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/_virtual/_commonjsHelpers.js [instrumentation] (ecmascript)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/index.js [instrumentation] (ecmascript)");
const require$$1 = __turbopack_context__.r("[externals]/node:module [external] (node:module, cjs)");
const index$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/module-details-from-path/index.js [instrumentation] (ecmascript)");
const require$$3 = __turbopack_context__.r("[externals]/node:url [external] (node:url, cjs)");
const getPackageVersion$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/get-package-version.js [instrumentation] (ecmascript)");
const diagnostics = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/diagnostics.js [instrumentation] (ecmascript)");
const node = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/debug/src/node.js [instrumentation] (ecmascript)");
const require$$7 = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const require$$1$1 = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const require$$0 = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const { create } = index.codeTransformer;
const Module = require$$1;
const parse = index$1.moduleDetailsFromPath;
const { pathToFileURL } = require$$3;
const getPackageVersion = getPackageVersion$1.getPackageVersion_1;
const { emitDiagnostics } = diagnostics.diagnostics;
const debug = node.nodeExports("@apm-js-collab/tracing-hooks:module-patch");
class ModulePatch {
    constructor({ instrumentations = [] } = {}){
        this.packages = new Set(instrumentations.map((i)=>i.module.name));
        this.instrumentator = create(instrumentations);
        this.compile = Module.prototype._compile;
    }
    /**
   * Patches the Node.js module class method that is responsible for compiling code.
   * If a module is found that has an instrumentator, it will transform the code before compiling it
   * with tracing channel methods.
   */ patch() {
        const self = this;
        Module.prototype._compile = function wrappedCompile(...args) {
            const [content, filename] = args;
            const resolvedModule = parse(filename);
            if (resolvedModule && self.packages.has(resolvedModule.name)) {
                debug("found resolved module, checking if there is a transformer %s", filename);
                const version = getPackageVersion(resolvedModule.basedir, resolvedModule.name);
                const transformer = self.instrumentator.getTransformer(resolvedModule.name, version, resolvedModule.path);
                if (transformer) {
                    debug("transforming file %s", filename);
                    try {
                        const transformedCode = transformer.transform(content, "cjs");
                        args[0] = transformedCode?.code;
                        emitDiagnostics({
                            url: pathToFileURL(filename).href,
                            moduleName: transformer.moduleName
                        });
                        if (process.env.TRACING_DUMP) {
                            dump(args[0], filename);
                        }
                    } catch (error) {
                        debug("Error transforming module %s: %o", filename, error);
                        emitDiagnostics({
                            url: pathToFileURL(filename).href,
                            moduleName: transformer.moduleName,
                            error
                        });
                    } finally{
                        transformer.free();
                    }
                }
            }
            return self.compile.apply(this, args);
        };
    }
    /**
   * Restores the original Module.prototype._compile method
   * **Note**: This is intended to be used in testing only.
   */ unpatch() {
        Module.prototype._compile = this.compile;
    }
}
function dump(code, filename) {
    const os = require$$7;
    const path = require$$1$1;
    const fs = require$$0;
    const base = process.env.TRACING_DUMP_DIR ?? os.tmpdir();
    const dirname = path.dirname(filename);
    const basename = path.basename(filename);
    const targetDir = path.join(base, dirname);
    const targetFile = path.join(targetDir, basename);
    debug("Dumping patched code to: %s", targetFile);
    fs.mkdirSync(targetDir, {
        recursive: true
    });
    fs.writeFileSync(targetFile, code);
}
var tracingHooks = ModulePatch;
const ModulePatch$1 = /*@__PURE__*/ _commonjsHelpers.getDefaultExportFromCjs(tracingHooks);
exports.default = ModulePatch$1; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/hook.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/debug/src/node.js [instrumentation] (ecmascript)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer/index.js [instrumentation] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/module-details-from-path/index.js [instrumentation] (ecmascript)");
const require$$3 = __turbopack_context__.r("[externals]/node:url [external] (node:url, cjs)");
const node_worker_threads = __turbopack_context__.r("[externals]/node:worker_threads [external] (node:worker_threads, cjs)");
const getPackageVersion = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/get-package-version.js [instrumentation] (ecmascript)");
const diagnostics = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/diagnostics.js [instrumentation] (ecmascript)");
const require$$0 = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const debug = node.default('@apm-js-collab/tracing-hooks:esm-hook');
let transformers = null;
let packages = null;
let instrumentator = null;
// On the main thread diagnostics go straight to the hook set via
// `setDiagnosticsHook`. When these hooks run on the `Module.register` loader
// thread, `initialize` swaps this for a function that posts back over the
// MessagePort supplied in `data.diagnosticsPort`.
let emit = diagnostics.diagnostics.emitDiagnostics;
/**
 * Creates a MessagePort that forwards diagnostics posted by the `Module.register`
 * loader thread to the hook set via `setDiagnosticsHook` on this thread. Pass the
 * returned port to `Module.register` in both `data.diagnosticsPort` and
 * `transferList`.
 */ function createDiagnosticsPort() {
    const { port1, port2 } = new node_worker_threads.MessageChannel();
    port1.on('message', diagnostics.diagnostics.emitDiagnostics);
    // The diagnostics channel must not keep the process alive.
    port1.unref();
    return port2;
}
async function initialize(data = {}) {
    return initializeSync(data);
}
function initializeSync(data = {}) {
    const instrumentations = data?.instrumentations || [];
    instrumentator = index.codeTransformer.create(instrumentations);
    packages = new Set(instrumentations.map((i)=>i.module.name));
    transformers = new Map();
    emit = data?.diagnosticsPort ? createPortEmitter(data.diagnosticsPort) : diagnostics.diagnostics.emitDiagnostics;
}
function createPortEmitter(port) {
    return (diag)=>{
        try {
            // Structured clone reliably carries Error instances but not arbitrary thrown
            // values, so flatten anything else to an Error rather than let postMessage
            // throw inside the load path.
            const error = diag.error === undefined || diag.error instanceof Error ? diag.error : new Error(String(diag.error));
            port.postMessage({
                ...diag,
                error
            });
        } catch (err) {
            debug('failed to post diagnostics for %s: %o', diag.url, err);
        }
    };
}
async function resolve(specifier, context, nextResolve) {
    return resolveFromURL(await nextResolve(specifier, context));
}
function resolveFromURL(url) {
    const resolvedModule = index$1.default(url.url);
    if (resolvedModule && packages.has(resolvedModule.name)) {
        const path = require$$3.fileURLToPath(resolvedModule.basedir);
        const version = getPackageVersion.default(path);
        const transformer = instrumentator.getTransformer(resolvedModule.name, version, resolvedModule.path);
        if (transformer) {
            transformers.set(url.url, transformer);
        }
    }
    return url;
}
function resolveSync(specifier, context, nextResolve) {
    return resolveFromURL(nextResolve(specifier, context));
}
async function load(url, context, nextLoad) {
    const result = await nextLoad(url, context);
    if (transformers.has(url) === false) {
        return result;
    }
    if (result.format === 'commonjs') {
        // CommonJS is always left to the `Module.prototype._compile` patch
        // (`ModulePatch`), which these hooks are only ever registered alongside.
        // Returning `source` for a CommonJS module instead makes Node evaluate it on the
        // synchronous require(esm) bridge, which throws ERR_VM_MODULE_LINK_FAILURE on
        // Node < 24.12 when the module's top-level require() chain reaches an ES module
        // (https://github.com/nodejs/node/issues/59666). Handing the module back exactly
        // as Node produced it (`source` is null) sends it down the ordinary CommonJS
        // loader, where `_compile` transforms it.
        //
        // `resolve` has already put a transformer in the map for this URL and nothing
        // downstream will free it, so do that here.
        debug('deferring commonjs module to the _compile patch %s', url);
        const transformer = transformers.get(url);
        transformer.free();
        transformers.delete(url);
        return result;
    }
    return loadResult(url, result);
}
// Unlike the async `load` hook above, this one must transform CommonJS: the sync hooks
// are never paired with a `_compile` patch, so they are the only thing that can, and
// they don't evaluate CommonJS on the require(esm) bridge.
function loadSync(url, context, nextLoad) {
    const result = nextLoad(url, context);
    if (transformers.has(url) === false) {
        return result;
    }
    if (result.format === 'commonjs') {
        const parsedUrl = new URL(result.responseURL ?? url);
        result.source ??= require$$0.readFileSync(parsedUrl);
    }
    return loadResult(url, result);
}
function loadResult(url, result) {
    const code = result.source;
    if (code) {
        const transformer = transformers.get(url);
        try {
            const moduleType = result.format === 'module' ? 'esm' : result.format === 'commonjs' ? 'cjs' : 'unknown';
            // Node's synchronous hooks (`Module.registerHooks`) deliver `source` as a plain `Uint8Array`,
            // whereas the async loader delivers a `Buffer`. `Uint8Array.prototype.toString('utf8')` ignores
            // the encoding and returns comma-joined byte values instead of the decoded text, so decode via
            // `Buffer` for anything that isn't already a string.
            const source = typeof code === 'string' ? code : Buffer.from(code).toString('utf8');
            const transformedCode = transformer.transform(source, moduleType);
            result.source = transformedCode?.code;
            result.shortCircuit = true;
            emit({
                url,
                moduleName: transformer.moduleName
            });
        } catch (err) {
            debug('Error transforming module %s: %o', url, err);
            emit({
                url,
                moduleName: transformer.moduleName,
                error: err
            });
        } finally{
            transformer.free();
        }
    }
    return result;
}
exports.createDiagnosticsPort = createDiagnosticsPort;
exports.initialize = initialize;
exports.initializeSync = initializeSync;
exports.load = load;
exports.loadResult = loadResult;
exports.loadSync = loadSync;
exports.resolve = resolve;
exports.resolveSync = resolveSync;
exports.setDiagnosticsHook = diagnostics.diagnostics.setDiagnosticsHook; //# sourceMappingURL=hook.js.map
}),
];

//# sourceMappingURL=8e2ec_%40sentry_server-utils_build_cjs_vendored_524e6380._.js.map