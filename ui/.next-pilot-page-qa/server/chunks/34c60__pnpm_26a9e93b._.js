module.exports = [
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "isTracingSuppressed",
    ()=>isTracingSuppressed,
    "suppressTracing",
    ()=>suppressTracing,
    "unsuppressTracing",
    ()=>unsuppressTracing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)");
;
const SUPPRESS_TRACING_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
} //# sourceMappingURL=suppress-tracing.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/internal/exporter.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "_export",
    ()=>_export
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/context-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation] (ecmascript)");
;
;
function _export(exporter, arg) {
    return new Promise((resolve)=>{
        // prevent downstream exporter calls from generating spans
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["context"].with((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["suppressTracing"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["context"].active()), ()=>{
            exporter.export(arg, resolve);
        });
    });
} //# sourceMappingURL=exporter.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "internal",
    ()=>internal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$exporter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/internal/exporter.js [instrumentation] (ecmascript)");
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
const internal = {
    _export: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$exporter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_export"]
}; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "BAGGAGE_HEADER",
    ()=>BAGGAGE_HEADER,
    "BAGGAGE_ITEMS_SEPARATOR",
    ()=>BAGGAGE_ITEMS_SEPARATOR,
    "BAGGAGE_KEY_PAIR_SEPARATOR",
    ()=>BAGGAGE_KEY_PAIR_SEPARATOR,
    "BAGGAGE_MAX_NAME_VALUE_PAIRS",
    ()=>BAGGAGE_MAX_NAME_VALUE_PAIRS,
    "BAGGAGE_MAX_PER_NAME_VALUE_PAIRS",
    ()=>BAGGAGE_MAX_PER_NAME_VALUE_PAIRS,
    "BAGGAGE_MAX_TOTAL_LENGTH",
    ()=>BAGGAGE_MAX_TOTAL_LENGTH,
    "BAGGAGE_PROPERTIES_SEPARATOR",
    ()=>BAGGAGE_PROPERTIES_SEPARATOR
]);
const BAGGAGE_KEY_PAIR_SEPARATOR = '=';
const BAGGAGE_PROPERTIES_SEPARATOR = ';';
const BAGGAGE_ITEMS_SEPARATOR = ',';
const BAGGAGE_HEADER = 'baggage';
const BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
const BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
const BAGGAGE_MAX_TOTAL_LENGTH = 8192; //# sourceMappingURL=constants.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getKeyPairs",
    ()=>getKeyPairs,
    "parseBaggageHeaderString",
    ()=>parseBaggageHeaderString,
    "parseKeyPairsIntoRecord",
    ()=>parseKeyPairsIntoRecord,
    "parsePairKeyValue",
    ()=>parsePairKeyValue,
    "serializeKeyPairs",
    ()=>serializeKeyPairs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation] (ecmascript)");
;
;
function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce((hValue, current)=>{
        const value = `${hValue}${hValue !== '' ? __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"] : ''}${current}`;
        return value.length > __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_TOTAL_LENGTH"] ? hValue : value;
    }, '');
}
function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(([key, value])=>{
        let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
        // include opaque metadata if provided
        // NOTE: we intentionally don't URI-encode the metadata - that responsibility falls on the metadata implementation
        if (value.metadata !== undefined) {
            entry += __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"] + value.metadata.toString();
        }
        return entry;
    });
}
function parsePairKeyValue(entry) {
    if (!entry) return;
    const metadataSeparatorIndex = entry.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"]);
    const keyPairPart = metadataSeparatorIndex === -1 ? entry : entry.substring(0, metadataSeparatorIndex);
    const separatorIndex = keyPairPart.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_KEY_PAIR_SEPARATOR"]);
    if (separatorIndex <= 0) return;
    const rawKey = keyPairPart.substring(0, separatorIndex).trim();
    const rawValue = keyPairPart.substring(separatorIndex + 1).trim();
    if (!rawKey || !rawValue) return;
    let key;
    let value;
    try {
        key = decodeURIComponent(rawKey);
        value = decodeURIComponent(rawValue);
    } catch  {
        return;
    }
    let metadata;
    if (metadataSeparatorIndex !== -1 && metadataSeparatorIndex < entry.length - 1) {
        const metadataString = entry.substring(metadataSeparatorIndex + 1);
        metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["baggageEntryMetadataFromString"])(metadataString);
    }
    return {
        key,
        value,
        metadata
    };
}
function parseBaggageHeaderString(value, baggage, count, totalSize) {
    let start = 0;
    while(start < value.length && count < __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_NAME_VALUE_PAIRS"]){
        const end = value.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"], start);
        const entryEnd = end === -1 ? value.length : end;
        const entryLength = entryEnd - start;
        if (entryLength <= __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_PER_NAME_VALUE_PAIRS"]) {
            const keyPair = parsePairKeyValue(value.substring(start, entryEnd));
            if (keyPair) {
                // Comma separator is counted for every accepted entry after the first
                const entrySize = (count === 0 ? 0 : 1) + entryLength;
                if (totalSize + entrySize > __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_TOTAL_LENGTH"]) break;
                baggage[keyPair.key] = keyPair.metadata ? {
                    value: keyPair.value,
                    metadata: keyPair.metadata
                } : {
                    value: keyPair.value
                };
                count++;
                totalSize += entrySize;
            }
        }
        if (end === -1) break;
        start = end + 1;
    }
    return [
        count,
        totalSize
    ];
}
function parseKeyPairsIntoRecord(value) {
    const result = {};
    if (typeof value === 'string' && value.length > 0) {
        value.split(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]).forEach((entry)=>{
            const keyPair = parsePairKeyValue(entry);
            if (keyPair !== undefined && keyPair.value.length > 0) {
                result[keyPair.key] = keyPair.value;
            }
        });
    }
    return result;
} //# sourceMappingURL=utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "W3CBaggagePropagator",
    ()=>W3CBaggagePropagator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/propagation-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation] (ecmascript)");
;
;
;
;
class W3CBaggagePropagator {
    inject(context, carrier, setter) {
        const baggage = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["propagation"].getBaggage(context);
        if (!baggage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) return;
        const keyPairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getKeyPairs"])(baggage).filter((pair)=>{
            return pair.length <= __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_PER_NAME_VALUE_PAIRS"];
        }).slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_NAME_VALUE_PAIRS"]);
        const headerValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["serializeKeyPairs"])(keyPairs);
        if (headerValue.length > 0) {
            setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"], headerValue);
        }
    }
    extract(context, carrier, getter) {
        const headerValue = getter.get(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"]);
        if (!headerValue) {
            return context;
        }
        const baggage = {};
        let count = 0;
        let totalSize = 0;
        if (Array.isArray(headerValue)) {
            for(let i = 0; i < headerValue.length; i++){
                [count, totalSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseBaggageHeaderString"])(headerValue[i], baggage, count, totalSize);
            }
        } else {
            [count] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseBaggageHeaderString"])(headerValue, baggage, count, totalSize);
        }
        if (count === 0) {
            return context;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["propagation"].setBaggage(context, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["propagation"].createBaggage(baggage));
    }
    fields() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"]
        ];
    }
} //# sourceMappingURL=W3CBaggagePropagator.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/anchored-clock.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * A utility for returning wall times anchored to a given point in time. Wall time measurements will
 * not be taken from the system, but instead are computed by adding a monotonic clock time
 * to the anchor point.
 *
 * This is needed because the system time can change and result in unexpected situations like
 * spans ending before they are started. Creating an anchored clock for each local root span
 * ensures that span timings and durations are accurate while preventing span times from drifting
 * too far from the system clock.
 *
 * Only creating an anchored clock once per local trace ensures span times are correct relative
 * to each other. For example, a child span will never have a start time before its parent even
 * if the system clock is corrected during the local trace.
 *
 * Heavily inspired by the OTel Java anchored clock
 * https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk/trace/src/main/java/io/opentelemetry/sdk/trace/AnchoredClock.java
 */ __turbopack_context__.s([
    "AnchoredClock",
    ()=>AnchoredClock
]);
class AnchoredClock {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    /**
     * Create a new AnchoredClock anchored to the current time returned by systemClock.
     *
     * @param systemClock should be a clock that returns the number of milliseconds since January 1 1970 such as Date
     * @param monotonicClock should be a clock that counts milliseconds monotonically such as window.performance or perf_hooks.performance
     */ constructor(systemClock, monotonicClock){
        this._monotonicClock = monotonicClock;
        this._epochMillis = systemClock.now();
        this._performanceMillis = monotonicClock.now();
    }
    /**
     * Returns the current time by adding the number of milliseconds since the
     * AnchoredClock was created to the creation epoch time
     */ now() {
        const delta = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + delta;
    }
} //# sourceMappingURL=anchored-clock.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/attributes.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "isAttributeKey",
    ()=>isAttributeKey,
    "isAttributeValue",
    ()=>isAttributeValue,
    "sanitizeAttributes",
    ()=>sanitizeAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
;
function sanitizeAttributes(attributes) {
    const out = {};
    if (typeof attributes !== 'object' || attributes == null) {
        return out;
    }
    for(const key in attributes){
        if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
            continue;
        }
        if (!isAttributeKey(key)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Invalid attribute key: ${key}`);
            continue;
        }
        const val = attributes[key];
        if (!isAttributeValue(val)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Invalid attribute value set for key: ${key}`);
            continue;
        }
        if (Array.isArray(val)) {
            out[key] = val.slice();
        } else {
            out[key] = val;
        }
    }
    return out;
}
function isAttributeKey(key) {
    return typeof key === 'string' && key !== '';
}
function isAttributeValue(val) {
    if (val == null) {
        return true;
    }
    if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
    }
    return isValidPrimitiveAttributeValueType(typeof val);
}
function isHomogeneousAttributeValueArray(arr) {
    let type;
    for (const element of arr){
        // null/undefined elements are allowed
        if (element == null) continue;
        const elementType = typeof element;
        if (elementType === type) {
            continue;
        }
        if (!type) {
            if (isValidPrimitiveAttributeValueType(elementType)) {
                type = elementType;
                continue;
            }
            // encountered an invalid primitive
            return false;
        }
        return false;
    }
    return true;
}
function isValidPrimitiveAttributeValueType(valType) {
    switch(valType){
        case 'number':
        case 'boolean':
        case 'string':
            return true;
    }
    return false;
} //# sourceMappingURL=attributes.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "loggingErrorHandler",
    ()=>loggingErrorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
;
function loggingErrorHandler() {
    return (ex)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(stringifyException(ex));
    };
}
/**
 * Converts an exception into a string representation
 * @param {Exception} ex
 */ function stringifyException(ex) {
    if (typeof ex === 'string') {
        return ex;
    } else {
        return JSON.stringify(flattenException(ex));
    }
}
/**
 * Flattens an exception into key-value pairs by traversing the prototype chain
 * and coercing values to strings. Duplicate properties will not be overwritten;
 * the first insert wins.
 */ function flattenException(ex) {
    const result = {};
    let current = ex;
    while(current !== null){
        Object.getOwnPropertyNames(current).forEach((propertyName)=>{
            if (result[propertyName]) return;
            const value = current[propertyName];
            if (value) {
                result[propertyName] = String(value);
            }
        });
        current = Object.getPrototypeOf(current);
    }
    return result;
} //# sourceMappingURL=logging-error-handler.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "globalErrorHandler",
    ()=>globalErrorHandler,
    "setGlobalErrorHandler",
    ()=>setGlobalErrorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$logging$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js [instrumentation] (ecmascript)");
;
/** The global error handler delegate */ let delegateHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$logging$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["loggingErrorHandler"])();
function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    } catch  {} // eslint-disable-line no-empty
} //# sourceMappingURL=global-error-handler.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/index.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "otperformance",
    ()=>otperformance
]);
;
;
;
const otperformance = performance; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/time.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "addHrTimes",
    ()=>addHrTimes,
    "getTimeOrigin",
    ()=>getTimeOrigin,
    "hrTime",
    ()=>hrTime,
    "hrTimeDuration",
    ()=>hrTimeDuration,
    "hrTimeToMicroseconds",
    ()=>hrTimeToMicroseconds,
    "hrTimeToMilliseconds",
    ()=>hrTimeToMilliseconds,
    "hrTimeToNanoseconds",
    ()=>hrTimeToNanoseconds,
    "hrTimeToSeconds",
    ()=>hrTimeToSeconds,
    "hrTimeToTimeStamp",
    ()=>hrTimeToTimeStamp,
    "isTimeInput",
    ()=>isTimeInput,
    "isTimeInputHrTime",
    ()=>isTimeInputHrTime,
    "millisToHrTime",
    ()=>millisToHrTime,
    "timeInputToHrTime",
    ()=>timeInputToHrTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/index.js [instrumentation] (ecmascript) <locals>");
;
const NANOSECOND_DIGITS = 9;
const NANOSECOND_DIGITS_IN_MILLIS = 6;
const MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
const SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
function millisToHrTime(epochMillis) {
    const epochSeconds = epochMillis / 1000;
    // Decimals only.
    const seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    const nanos = Math.round(epochMillis % 1000 * MILLISECONDS_TO_NANOSECONDS);
    return [
        seconds,
        nanos
    ];
}
function getTimeOrigin() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["otperformance"].timeOrigin;
}
function hrTime(performanceNow) {
    const timeOrigin = millisToHrTime(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["otperformance"].timeOrigin);
    const now = millisToHrTime(typeof performanceNow === 'number' ? performanceNow : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["otperformance"].now());
    return addHrTimes(timeOrigin, now);
}
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) {
        return time;
    } else if (typeof time === 'number') {
        // Distinguish between a relative performance.now() value and an absolute
        // epoch-millisecond timestamp.
        //
        // performance.timeOrigin uses a monotonic clock that may be slightly ahead
        // of Date.now() due to clock adjustments (see MDN docs). This means a
        // real epoch-ms value (e.g. Date.now()) can land just below
        // performance.timeOrigin, causing it to be misclassified as a relative
        // performance.now() reading and doubled when timeOrigin is added.
        //
        // A genuine performance.now() value represents elapsed time since the
        // document/process started, so it is bounded by system uptime. No real
        // system has been running long enough for performance.now() to reach half
        // the current epoch time (~1994 in ms terms). We therefore treat any value
        // below half of performance.timeOrigin as a relative performance.now()
        // reading, and everything else as an absolute epoch-millisecond timestamp.
        if (time < __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["otperformance"].timeOrigin / 2) {
            return hrTime(time);
        } else {
            // epoch milliseconds or performance.timeOrigin
            return millisToHrTime(time);
        }
    } else if (time instanceof Date) {
        return millisToHrTime(time.getTime());
    } else {
        throw TypeError('Invalid input type');
    }
}
function hrTimeDuration(startTime, endTime) {
    let seconds = endTime[0] - startTime[0];
    let nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [
        seconds,
        nanos
    ];
}
function hrTimeToTimeStamp(time) {
    const precision = NANOSECOND_DIGITS;
    const tmp = `${'0'.repeat(precision)}${time[1]}Z`;
    const nanoString = tmp.substring(tmp.length - precision - 1);
    const date = new Date(time[0] * 1000).toISOString();
    return date.replace('000Z', nanoString);
}
function hrTimeToNanoseconds(time) {
    return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
function hrTimeToMicroseconds(time) {
    return time[0] * 1e6 + time[1] / 1e3;
}
function hrTimeToMilliseconds(time) {
    return time[0] * 1e3 + time[1] / 1e6;
}
function hrTimeToSeconds(time) {
    return time[0] + time[1] / SECOND_TO_NANOSECONDS;
}
function isTimeInputHrTime(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number';
}
function isTimeInput(value) {
    return isTimeInputHrTime(value) || typeof value === 'number' || value instanceof Date;
}
function addHrTimes(time1, time2) {
    const out = [
        time1[0] + time2[0],
        time1[1] + time2[1]
    ];
    // Nanoseconds
    if (out[1] >= SECOND_TO_NANOSECONDS) {
        out[1] -= SECOND_TO_NANOSECONDS;
        out[0] += 1;
    }
    return out;
} //# sourceMappingURL=time.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/timer-util.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @deprecated please copy this code to your implementation instead, this function will be removed in the next major version of this package.
 * @param timer
 */ __turbopack_context__.s([
    "unrefTimer",
    ()=>unrefTimer
]);
function unrefTimer(timer) {
    if (typeof timer !== 'number') {
        timer.unref();
    }
} //# sourceMappingURL=timer-util.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "ExportResultCode",
    ()=>ExportResultCode
]);
var ExportResultCode;
(function(ExportResultCode) {
    ExportResultCode[ExportResultCode["SUCCESS"] = 0] = "SUCCESS";
    ExportResultCode[ExportResultCode["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {})); //# sourceMappingURL=ExportResult.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/version.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = '2.11.0'; //# sourceMappingURL=version.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/semconv.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /*
 * This file contains a copy of unstable semantic convention definitions
 * used by this package.
 * @see https://github.com/open-telemetry/opentelemetry-js/tree/main/semantic-conventions#unstable-semconv
 */ /**
 * The name of the runtime of this process.
 *
 * @example OpenJDK Runtime Environment
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ __turbopack_context__.s([
    "ATTR_PROCESS_RUNTIME_NAME",
    ()=>ATTR_PROCESS_RUNTIME_NAME
]);
const ATTR_PROCESS_RUNTIME_NAME = 'process.runtime.name'; //# sourceMappingURL=semconv.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "SDK_INFO",
    ()=>SDK_INFO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/version.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+semantic-conventions@1.43.0/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$semconv$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/semconv.js [instrumentation] (ecmascript)");
;
;
;
const SDK_INFO = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]]: 'opentelemetry',
    [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$semconv$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_PROCESS_RUNTIME_NAME"]]: 'node',
    [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]]: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"]
}; //# sourceMappingURL=sdk-info.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/globalThis.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @deprecated Use globalThis directly instead.
 */ __turbopack_context__.s([
    "_globalThis",
    ()=>_globalThis
]);
const _globalThis = globalThis; //# sourceMappingURL=globalThis.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "getBooleanFromEnv",
    ()=>getBooleanFromEnv,
    "getNumberFromEnv",
    ()=>getNumberFromEnv,
    "getStringFromEnv",
    ()=>getStringFromEnv,
    "getStringListFromEnv",
    ()=>getStringListFromEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
function getNumberFromEnv(key) {
    const raw = process.env[key];
    if (raw == null || raw.trim() === '') {
        return undefined;
    }
    const value = Number(raw);
    if (isNaN(value)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Unknown value ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["inspect"])(raw)} for ${key}, expected a number, using defaults`);
        return undefined;
    }
    return value;
}
function getStringFromEnv(key) {
    const raw = process.env[key];
    if (raw == null || raw.trim() === '') {
        return undefined;
    }
    return raw;
}
function getBooleanFromEnv(key) {
    const raw = process.env[key]?.trim().toLowerCase();
    if (raw == null || raw === '') {
        // NOTE: falling back to `false` instead of `undefined` as required by the specification.
        // If you have a use-case that requires `undefined`, consider using `getStringFromEnv()` and applying the necessary
        // normalizations in the consuming code.
        return false;
    }
    if (raw === 'true') {
        return true;
    } else if (raw === 'false') {
        return false;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Unknown value ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["inspect"])(raw)} for ${key}, expected 'true' or 'false', falling back to 'false' (default)`);
        return false;
    }
}
function getStringListFromEnv(key) {
    return getStringFromEnv(key)?.split(',').map((v)=>v.trim()).filter((s)=>s !== '');
} //# sourceMappingURL=environment.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/propagation/composite.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "CompositePropagator",
    ()=>CompositePropagator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
;
class CompositePropagator {
    _propagators;
    _fields;
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */ constructor(config = {}){
        this._propagators = config.propagators ?? [];
        const fields = new Set();
        for (const propagator of this._propagators){
            // older propagators may not have fields function, null check to be sure
            const propagatorFields = typeof propagator.fields === 'function' ? propagator.fields() : [];
            for (const field of propagatorFields){
                fields.add(field);
            }
        }
        this._fields = Array.from(fields);
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */ inject(context, carrier, setter) {
        for (const propagator of this._propagators){
            try {
                propagator.inject(context, carrier, setter);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
            }
        }
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */ extract(context, carrier, getter) {
        return this._propagators.reduce((ctx, propagator)=>{
            try {
                return propagator.extract(ctx, carrier, getter);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
            }
            return ctx;
        }, context);
    }
    fields() {
        // return a new array so our fields cannot be modified
        return this._fields.slice();
    }
} //# sourceMappingURL=composite.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/internal/validators.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "validateKey",
    ()=>validateKey,
    "validateValue",
    ()=>validateValue
]);
const VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
const VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
const VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
const VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
const VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
const INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
} //# sourceMappingURL=validators.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "TraceState",
    ()=>TraceState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/internal/validators.js [instrumentation] (ecmascript)");
;
const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ',';
const LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
class TraceState {
    _length;
    _rawTraceState;
    _internalState;
    constructor(rawTraceState){
        this._rawTraceState = typeof rawTraceState === 'string' ? rawTraceState : '';
        this._length = this._rawTraceState.length;
    }
    set(key, value) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["validateKey"])(key) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["validateValue"])(value)) {
            return this;
        }
        const currState = this._getState();
        const currValue = currState.get(key);
        // Get the new length depending if we already have a value or not
        // - for existing keys we add the difference between the length of the values
        // - for new keys is the key & value lenght plus
        //   - +1 for the key/value splitter
        //   - +1 for the separator if there are other keys
        let newLength = this._length;
        if (typeof currValue === 'string') {
            newLength += value.length - currValue.length;
        } else {
            newLength += key.length + value.length + (currState.size > 0 ? 2 : 1);
        }
        if (newLength > MAX_TRACE_STATE_LEN) {
            return this;
        }
        const newState = new Map(currState);
        newState.delete(key);
        newState.set(key, value);
        return this._fromState(newState, newLength);
    }
    unset(key) {
        const currState = this._getState();
        const currValue = currState.get(key);
        // No need to create a new instance if the key does not exist
        if (typeof currValue !== 'string') {
            return this;
        }
        // Get the new length depending if we already have a value or not
        // - for existing keys we substract key and value length plus
        //   - +1 for the key/value splitter
        //   - +1 for the separator if there are other keys
        let newLength = this._length - (key.length + currValue.length + 1);
        if (currState.size > 1) {
            // remove separator from length if there's no key or only one.
            newLength = newLength - 1;
        }
        const newState = new Map(currState);
        newState.delete(key);
        return this._fromState(newState, newLength);
    }
    get(key) {
        const currState = this._getState();
        return currState.get(key);
    }
    serialize() {
        // Maps put new entries at the end. We prepend the seralized entry
        // to get the right order according to the spec (updated members go 1st)
        let serialized = '';
        let index = 0;
        for (const entry of this._getState()){
            if (index > 0) {
                serialized = LIST_MEMBERS_SEPARATOR + serialized;
            }
            serialized = `${entry[0]}${LIST_MEMBER_KEY_VALUE_SPLITTER}${entry[1]}` + serialized;
            index++;
        }
        return serialized;
    }
    _getState() {
        if (this._internalState) {
            return this._internalState;
        }
        // Not parsed yet, lets do it
        const vendorMembers = this._rawTraceState.split(LIST_MEMBERS_SEPARATOR);
        // This Map will have the order reversed
        const vendorEntries = new Map();
        let currentLength = 0;
        for (const member of vendorMembers){
            const m = member.trim();
            const idx = m.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (idx === -1) {
                continue;
            }
            const key = m.slice(0, idx);
            const value = m.slice(idx + 1);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["validateKey"])(key) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["validateValue"])(value)) {
                continue;
            }
            // Skip if adding the new member exceeds the length
            const futureLength = currentLength + m.length + (vendorEntries.size > 0 ? 1 : 0);
            if (futureLength > MAX_TRACE_STATE_LEN) {
                continue;
            }
            // All good, add it
            vendorEntries.set(key, value);
            currentLength = futureLength;
            // Check if we reached the max items
            if (vendorEntries.size >= MAX_TRACE_STATE_ITEMS) {
                break;
            }
        }
        // Now we set the length & the Map in the right order
        this._length = currentLength;
        this._internalState = new Map(Array.from(vendorEntries.entries()).reverse());
        return this._internalState;
    }
    _fromState(state, length) {
        const traceState = Object.create(TraceState.prototype);
        traceState._internalState = state;
        traceState._length = length;
        return traceState;
    }
} //# sourceMappingURL=TraceState.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "TRACE_PARENT_HEADER",
    ()=>TRACE_PARENT_HEADER,
    "TRACE_STATE_HEADER",
    ()=>TRACE_STATE_HEADER,
    "W3CTraceContextPropagator",
    ()=>W3CTraceContextPropagator,
    "parseTraceParent",
    ()=>parseTraceParent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$TraceState$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js [instrumentation] (ecmascript)");
;
;
;
const TRACE_PARENT_HEADER = 'traceparent';
const TRACE_STATE_HEADER = 'tracestate';
const VERSION = '00';
const VERSION_PART = '(?!ff)[\\da-f]{2}';
const TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
const PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
const FLAGS_PART = '[\\da-f]{2}';
const TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
function parseTraceParent(traceParent) {
    const match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match) return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === '00' && match[5]) return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16)
    };
}
class W3CTraceContextPropagator {
    inject(context, carrier, setter) {
        const spanContext = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["trace"].getSpanContext(context);
        if (!spanContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isSpanContextValid"])(spanContext)) return;
        const traceParent = `${VERSION}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceFlags"].NONE).toString(16)}`;
        setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
            setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
    }
    extract(context, carrier, getter) {
        const traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
        if (!traceParentHeader) return context;
        const traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
        if (typeof traceParent !== 'string') return context;
        const spanContext = parseTraceParent(traceParent);
        if (!spanContext) return context;
        spanContext.isRemote = true;
        const traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            const state = Array.isArray(traceStateHeader) ? traceStateHeader.join(',') : traceStateHeader;
            spanContext.traceState = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$TraceState$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceState"](typeof state === 'string' ? state : undefined);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["trace"].setSpanContext(context, spanContext);
    }
    fields() {
        return [
            TRACE_PARENT_HEADER,
            TRACE_STATE_HEADER
        ];
    }
} //# sourceMappingURL=W3CTraceContextPropagator.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "RPCType",
    ()=>RPCType,
    "deleteRPCMetadata",
    ()=>deleteRPCMetadata,
    "getRPCMetadata",
    ()=>getRPCMetadata,
    "setRPCMetadata",
    ()=>setRPCMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)");
;
const RPC_METADATA_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry SDK Context Key RPC_METADATA');
var RPCType;
(function(RPCType) {
    RPCType["HTTP"] = "http";
})(RPCType || (RPCType = {}));
function setRPCMetadata(context, meta) {
    return context.setValue(RPC_METADATA_KEY, meta);
}
function deleteRPCMetadata(context) {
    return context.deleteValue(RPC_METADATA_KEY);
}
function getRPCMetadata(context) {
    return context.getValue(RPC_METADATA_KEY);
} //# sourceMappingURL=rpc-metadata.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * based on lodash in order to support esm builds without esModuleInterop.
 * lodash is using MIT License.
 **/ __turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject
]);
const objectTag = '[object Object]';
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';
const funcProto = Function.prototype;
const funcToString = funcProto.toString;
const objectCtorString = funcToString.call(Object);
const getPrototypeOf = Object.getPrototypeOf;
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const symToStringTag = Symbol ? Symbol.toStringTag : undefined;
const nativeObjectToString = objectProto.toString;
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
        return false;
    }
    const proto = getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch  {
    // silence
    }
    const result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
} //# sourceMappingURL=lodash.merge.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/merge.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$lodash$2e$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js [instrumentation] (ecmascript)");
;
const MAX_LEVEL = 20;
function merge(...args) {
    let result = args.shift();
    const objects = new WeakMap();
    while(args.length > 0){
        result = mergeTwoObjects(result, args.shift(), 0, objects);
    }
    return result;
}
function takeValue(value) {
    if (isArray(value)) {
        return value.slice();
    }
    return value;
}
/**
 * Merges two objects
 * @param one - first object
 * @param two - second object
 * @param level - current deep level
 * @param objects - objects holder that has been already referenced - to prevent
 * cyclic dependency
 */ function mergeTwoObjects(one, two, level = 0, objects) {
    let result;
    if (level > MAX_LEVEL) {
        return undefined;
    }
    level++;
    if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
        result = takeValue(two);
    } else if (isArray(one)) {
        result = one.slice();
        if (isArray(two)) {
            for(let i = 0, j = two.length; i < j; i++){
                result.push(takeValue(two[i]));
            }
        } else if (isObject(two)) {
            const keys = Object.keys(two);
            for(let i = 0, j = keys.length; i < j; i++){
                const key = keys[i];
                if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
                    continue;
                }
                result[key] = takeValue(two[key]);
            }
        }
    } else if (isObject(one)) {
        if (isObject(two)) {
            if (!shouldMerge(one, two)) {
                return two;
            }
            result = Object.assign({}, one);
            const keys = Object.keys(two);
            for(let i = 0, j = keys.length; i < j; i++){
                const key = keys[i];
                if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
                    continue;
                }
                const twoValue = two[key];
                if (isPrimitive(twoValue)) {
                    if (typeof twoValue === 'undefined') {
                        delete result[key];
                    } else {
                        // result[key] = takeValue(twoValue);
                        result[key] = twoValue;
                    }
                } else {
                    const obj1 = result[key];
                    const obj2 = twoValue;
                    if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
                        delete result[key];
                    } else {
                        if (isObject(obj1) && isObject(obj2)) {
                            const arr1 = objects.get(obj1) || [];
                            const arr2 = objects.get(obj2) || [];
                            arr1.push({
                                obj: one,
                                key
                            });
                            arr2.push({
                                obj: two,
                                key
                            });
                            objects.set(obj1, arr1);
                            objects.set(obj2, arr2);
                        }
                        result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
                    }
                }
            }
        } else {
            result = two;
        }
    }
    return result;
}
/**
 * Function to check if object has been already reference
 * @param obj
 * @param key
 * @param objects
 */ function wasObjectReferenced(obj, key, objects) {
    const arr = objects.get(obj[key]) || [];
    for(let i = 0, j = arr.length; i < j; i++){
        const info = arr[i];
        if (info.key === key && info.obj === obj) {
            return true;
        }
    }
    return false;
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function isObject(value) {
    return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === 'object';
}
function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined' || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$lodash$2e$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPlainObject"])(one) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$lodash$2e$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPlainObject"])(two)) {
        return false;
    }
    return true;
} //# sourceMappingURL=merge.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/timeout.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Error that is thrown on timeouts.
 */ __turbopack_context__.s([
    "TimeoutError",
    ()=>TimeoutError,
    "callWithTimeout",
    ()=>callWithTimeout
]);
class TimeoutError extends Error {
    constructor(message){
        super(message);
        // manually adjust prototype to retain `instanceof` functionality when targeting ES5, see:
        // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}
function callWithTimeout(promise, timeout) {
    let timeoutHandle;
    const timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
        timeoutHandle = setTimeout(function timeoutHandler() {
            reject(new TimeoutError('Operation timed out.'));
        }, timeout);
    });
    return Promise.race([
        promise,
        timeoutPromise
    ]).then((result)=>{
        clearTimeout(timeoutHandle);
        return result;
    }, (reason)=>{
        clearTimeout(timeoutHandle);
        throw reason;
    });
} //# sourceMappingURL=timeout.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/url.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "isUrlIgnored",
    ()=>isUrlIgnored,
    "urlMatches",
    ()=>urlMatches
]);
function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === 'string') {
        return url === urlToMatch;
    } else {
        return !!url.match(urlToMatch);
    }
}
function isUrlIgnored(url, ignoredUrls) {
    if (!ignoredUrls) {
        return false;
    }
    for (const ignoreUrl of ignoredUrls){
        if (urlMatches(url, ignoreUrl)) {
            return true;
        }
    }
    return false;
} //# sourceMappingURL=url.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/promise.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "Deferred",
    ()=>Deferred
]);
class Deferred {
    _promise;
    _resolve;
    _reject;
    constructor(){
        this._promise = new Promise((resolve, reject)=>{
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    get promise() {
        return this._promise;
    }
    resolve(val) {
        this._resolve(val);
    }
    reject(err) {
        this._reject(err);
    }
} //# sourceMappingURL=promise.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/callback.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "BindOnceFuture",
    ()=>BindOnceFuture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$promise$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/promise.js [instrumentation] (ecmascript)");
;
class BindOnceFuture {
    _isCalled = false;
    _deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$promise$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Deferred"]();
    _callback;
    _that;
    constructor(callback, that){
        this._callback = callback;
        this._that = that;
    }
    get isCalled() {
        return this._isCalled;
    }
    get promise() {
        return this._deferred.promise;
    }
    call(...args) {
        if (!this._isCalled) {
            this._isCalled = true;
            try {
                Promise.resolve(this._callback.call(this._that, ...args)).then((val)=>this._deferred.resolve(val), (err)=>this._deferred.reject(err));
            } catch (err) {
                this._deferred.reject(err);
            }
        }
        return this._deferred.promise;
    }
} //# sourceMappingURL=callback.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/configuration.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "diagLogLevelFromString",
    ()=>diagLogLevelFromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation] (ecmascript)");
;
const logLevelMap = {
    ALL: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL,
    VERBOSE: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].VERBOSE,
    DEBUG: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].DEBUG,
    INFO: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO,
    WARN: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].WARN,
    ERROR: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].ERROR,
    NONE: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE
};
function diagLogLevelFromString(value) {
    if (value == null) {
        // don't fall back to default - no value set has different semantics for ús than an incorrect value (do not set vs. fall back to default)
        return undefined;
    }
    const resolvedLogLevel = logLevelMap[value.toUpperCase()];
    if (resolvedLogLevel == null) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn(`Unknown log level "${value}", expected one of ${Object.keys(logLevelMap)}, using default`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO;
    }
    return resolvedLogLevel;
} //# sourceMappingURL=configuration.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchoredClock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$anchored$2d$clock$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AnchoredClock"],
    "BindOnceFuture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$callback$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BindOnceFuture"],
    "CompositePropagator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$propagation$2f$composite$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["CompositePropagator"],
    "ExportResultCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ExportResultCode"],
    "RPCType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$rpc$2d$metadata$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["RPCType"],
    "SDK_INFO",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SDK_INFO"],
    "TRACE_PARENT_HEADER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TRACE_PARENT_HEADER"],
    "TRACE_STATE_HEADER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TRACE_STATE_HEADER"],
    "TimeoutError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$timeout$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TimeoutError"],
    "TraceState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$TraceState$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceState"],
    "W3CBaggagePropagator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$propagation$2f$W3CBaggagePropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["W3CBaggagePropagator"],
    "W3CTraceContextPropagator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["W3CTraceContextPropagator"],
    "_globalThis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$globalThis$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_globalThis"],
    "addHrTimes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["addHrTimes"],
    "callWithTimeout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$timeout$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["callWithTimeout"],
    "deleteRPCMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$rpc$2d$metadata$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["deleteRPCMetadata"],
    "diagLogLevelFromString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$configuration$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diagLogLevelFromString"],
    "getBooleanFromEnv",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getBooleanFromEnv"],
    "getNumberFromEnv",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"],
    "getRPCMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$rpc$2d$metadata$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getRPCMetadata"],
    "getStringFromEnv",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getStringFromEnv"],
    "getStringListFromEnv",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getStringListFromEnv"],
    "getTimeOrigin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getTimeOrigin"],
    "globalErrorHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["globalErrorHandler"],
    "hrTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTime"],
    "hrTimeDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTimeDuration"],
    "hrTimeToMicroseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTimeToMicroseconds"],
    "hrTimeToMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTimeToMilliseconds"],
    "hrTimeToNanoseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTimeToNanoseconds"],
    "hrTimeToSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTimeToSeconds"],
    "hrTimeToTimeStamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["hrTimeToTimeStamp"],
    "internal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal"],
    "isAttributeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isAttributeValue"],
    "isTimeInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isTimeInput"],
    "isTimeInputHrTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isTimeInputHrTime"],
    "isTracingSuppressed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isTracingSuppressed"],
    "isUrlIgnored",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isUrlIgnored"],
    "loggingErrorHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$logging$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["loggingErrorHandler"],
    "merge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["merge"],
    "millisToHrTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["millisToHrTime"],
    "otperformance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["otperformance"],
    "parseKeyPairsIntoRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseKeyPairsIntoRecord"],
    "parseTraceParent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseTraceParent"],
    "sanitizeAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["sanitizeAttributes"],
    "setGlobalErrorHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["setGlobalErrorHandler"],
    "setRPCMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$rpc$2d$metadata$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["setRPCMetadata"],
    "suppressTracing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["suppressTracing"],
    "timeInputToHrTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["timeInputToHrTime"],
    "unrefTimer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$timer$2d$util$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unrefTimer"],
    "unsuppressTracing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unsuppressTracing"],
    "urlMatches",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["urlMatches"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$propagation$2f$W3CBaggagePropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$anchored$2d$clock$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/anchored-clock.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/attributes.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$global$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$logging$2d$error$2d$handler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$time$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/time.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$timer$2d$util$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/timer-util.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$ExportResult$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/ExportResult.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$common$2f$globalThis$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/globalThis.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$propagation$2f$composite$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/propagation/composite.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$W3CTraceContextPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$rpc$2d$metadata$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$TraceState$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/merge.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$timeout$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/timeout.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/url.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$callback$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/callback.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$configuration$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/configuration.js [instrumentation] (ecmascript)");
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+semantic-conventions@1.43.0/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ //----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates/registry/stable/attributes.ts.j2
//----------------------------------------------------------------------------------------------------------
/**
 * ASP.NET Core exception middleware handling result.
 *
 * @example handled
 * @example unhandled
 */ __turbopack_context__.s([
    "ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED",
    ()=>ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED,
    "ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED",
    ()=>ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED,
    "ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED",
    ()=>ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED,
    "ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED",
    ()=>ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED,
    "ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED",
    ()=>ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED,
    "ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER",
    ()=>ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER,
    "ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER",
    ()=>ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER,
    "ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED",
    ()=>ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED,
    "ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE",
    ()=>ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE,
    "ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS",
    ()=>ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS,
    "ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT",
    ()=>ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT,
    "ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE",
    ()=>ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE,
    "ATTR_ASPNETCORE_RATE_LIMITING_POLICY",
    ()=>ATTR_ASPNETCORE_RATE_LIMITING_POLICY,
    "ATTR_ASPNETCORE_RATE_LIMITING_RESULT",
    ()=>ATTR_ASPNETCORE_RATE_LIMITING_RESULT,
    "ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED",
    ()=>ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED,
    "ATTR_ASPNETCORE_ROUTING_IS_FALLBACK",
    ()=>ATTR_ASPNETCORE_ROUTING_IS_FALLBACK,
    "ATTR_ASPNETCORE_ROUTING_MATCH_STATUS",
    ()=>ATTR_ASPNETCORE_ROUTING_MATCH_STATUS,
    "ATTR_ASPNETCORE_USER_IS_AUTHENTICATED",
    ()=>ATTR_ASPNETCORE_USER_IS_AUTHENTICATED,
    "ATTR_CLIENT_ADDRESS",
    ()=>ATTR_CLIENT_ADDRESS,
    "ATTR_CLIENT_PORT",
    ()=>ATTR_CLIENT_PORT,
    "ATTR_CODE_COLUMN_NUMBER",
    ()=>ATTR_CODE_COLUMN_NUMBER,
    "ATTR_CODE_FILE_PATH",
    ()=>ATTR_CODE_FILE_PATH,
    "ATTR_CODE_FUNCTION_NAME",
    ()=>ATTR_CODE_FUNCTION_NAME,
    "ATTR_CODE_LINE_NUMBER",
    ()=>ATTR_CODE_LINE_NUMBER,
    "ATTR_CODE_STACKTRACE",
    ()=>ATTR_CODE_STACKTRACE,
    "ATTR_CONTAINER_ID",
    ()=>ATTR_CONTAINER_ID,
    "ATTR_CONTAINER_IMAGE_NAME",
    ()=>ATTR_CONTAINER_IMAGE_NAME,
    "ATTR_CONTAINER_IMAGE_REPO_DIGESTS",
    ()=>ATTR_CONTAINER_IMAGE_REPO_DIGESTS,
    "ATTR_CONTAINER_IMAGE_TAGS",
    ()=>ATTR_CONTAINER_IMAGE_TAGS,
    "ATTR_DB_COLLECTION_NAME",
    ()=>ATTR_DB_COLLECTION_NAME,
    "ATTR_DB_NAMESPACE",
    ()=>ATTR_DB_NAMESPACE,
    "ATTR_DB_OPERATION_BATCH_SIZE",
    ()=>ATTR_DB_OPERATION_BATCH_SIZE,
    "ATTR_DB_OPERATION_NAME",
    ()=>ATTR_DB_OPERATION_NAME,
    "ATTR_DB_QUERY_SUMMARY",
    ()=>ATTR_DB_QUERY_SUMMARY,
    "ATTR_DB_QUERY_TEXT",
    ()=>ATTR_DB_QUERY_TEXT,
    "ATTR_DB_RESPONSE_STATUS_CODE",
    ()=>ATTR_DB_RESPONSE_STATUS_CODE,
    "ATTR_DB_STORED_PROCEDURE_NAME",
    ()=>ATTR_DB_STORED_PROCEDURE_NAME,
    "ATTR_DB_SYSTEM_NAME",
    ()=>ATTR_DB_SYSTEM_NAME,
    "ATTR_DEPLOYMENT_ENVIRONMENT_NAME",
    ()=>ATTR_DEPLOYMENT_ENVIRONMENT_NAME,
    "ATTR_DOTNET_GC_HEAP_GENERATION",
    ()=>ATTR_DOTNET_GC_HEAP_GENERATION,
    "ATTR_ERROR_TYPE",
    ()=>ATTR_ERROR_TYPE,
    "ATTR_EXCEPTION_ESCAPED",
    ()=>ATTR_EXCEPTION_ESCAPED,
    "ATTR_EXCEPTION_MESSAGE",
    ()=>ATTR_EXCEPTION_MESSAGE,
    "ATTR_EXCEPTION_STACKTRACE",
    ()=>ATTR_EXCEPTION_STACKTRACE,
    "ATTR_EXCEPTION_TYPE",
    ()=>ATTR_EXCEPTION_TYPE,
    "ATTR_HTTP_REQUEST_HEADER",
    ()=>ATTR_HTTP_REQUEST_HEADER,
    "ATTR_HTTP_REQUEST_METHOD",
    ()=>ATTR_HTTP_REQUEST_METHOD,
    "ATTR_HTTP_REQUEST_METHOD_ORIGINAL",
    ()=>ATTR_HTTP_REQUEST_METHOD_ORIGINAL,
    "ATTR_HTTP_REQUEST_RESEND_COUNT",
    ()=>ATTR_HTTP_REQUEST_RESEND_COUNT,
    "ATTR_HTTP_RESPONSE_HEADER",
    ()=>ATTR_HTTP_RESPONSE_HEADER,
    "ATTR_HTTP_RESPONSE_STATUS_CODE",
    ()=>ATTR_HTTP_RESPONSE_STATUS_CODE,
    "ATTR_HTTP_ROUTE",
    ()=>ATTR_HTTP_ROUTE,
    "ATTR_JVM_GC_ACTION",
    ()=>ATTR_JVM_GC_ACTION,
    "ATTR_JVM_GC_NAME",
    ()=>ATTR_JVM_GC_NAME,
    "ATTR_JVM_MEMORY_POOL_NAME",
    ()=>ATTR_JVM_MEMORY_POOL_NAME,
    "ATTR_JVM_MEMORY_TYPE",
    ()=>ATTR_JVM_MEMORY_TYPE,
    "ATTR_JVM_THREAD_DAEMON",
    ()=>ATTR_JVM_THREAD_DAEMON,
    "ATTR_JVM_THREAD_STATE",
    ()=>ATTR_JVM_THREAD_STATE,
    "ATTR_K8S_CLUSTER_NAME",
    ()=>ATTR_K8S_CLUSTER_NAME,
    "ATTR_K8S_CLUSTER_UID",
    ()=>ATTR_K8S_CLUSTER_UID,
    "ATTR_K8S_CONTAINER_NAME",
    ()=>ATTR_K8S_CONTAINER_NAME,
    "ATTR_K8S_CONTAINER_RESTART_COUNT",
    ()=>ATTR_K8S_CONTAINER_RESTART_COUNT,
    "ATTR_K8S_CRONJOB_ANNOTATION",
    ()=>ATTR_K8S_CRONJOB_ANNOTATION,
    "ATTR_K8S_CRONJOB_LABEL",
    ()=>ATTR_K8S_CRONJOB_LABEL,
    "ATTR_K8S_CRONJOB_NAME",
    ()=>ATTR_K8S_CRONJOB_NAME,
    "ATTR_K8S_CRONJOB_UID",
    ()=>ATTR_K8S_CRONJOB_UID,
    "ATTR_K8S_DAEMONSET_ANNOTATION",
    ()=>ATTR_K8S_DAEMONSET_ANNOTATION,
    "ATTR_K8S_DAEMONSET_LABEL",
    ()=>ATTR_K8S_DAEMONSET_LABEL,
    "ATTR_K8S_DAEMONSET_NAME",
    ()=>ATTR_K8S_DAEMONSET_NAME,
    "ATTR_K8S_DAEMONSET_UID",
    ()=>ATTR_K8S_DAEMONSET_UID,
    "ATTR_K8S_DEPLOYMENT_ANNOTATION",
    ()=>ATTR_K8S_DEPLOYMENT_ANNOTATION,
    "ATTR_K8S_DEPLOYMENT_LABEL",
    ()=>ATTR_K8S_DEPLOYMENT_LABEL,
    "ATTR_K8S_DEPLOYMENT_NAME",
    ()=>ATTR_K8S_DEPLOYMENT_NAME,
    "ATTR_K8S_DEPLOYMENT_UID",
    ()=>ATTR_K8S_DEPLOYMENT_UID,
    "ATTR_K8S_JOB_ANNOTATION",
    ()=>ATTR_K8S_JOB_ANNOTATION,
    "ATTR_K8S_JOB_LABEL",
    ()=>ATTR_K8S_JOB_LABEL,
    "ATTR_K8S_JOB_NAME",
    ()=>ATTR_K8S_JOB_NAME,
    "ATTR_K8S_JOB_UID",
    ()=>ATTR_K8S_JOB_UID,
    "ATTR_K8S_NAMESPACE_ANNOTATION",
    ()=>ATTR_K8S_NAMESPACE_ANNOTATION,
    "ATTR_K8S_NAMESPACE_LABEL",
    ()=>ATTR_K8S_NAMESPACE_LABEL,
    "ATTR_K8S_NAMESPACE_NAME",
    ()=>ATTR_K8S_NAMESPACE_NAME,
    "ATTR_K8S_NODE_ANNOTATION",
    ()=>ATTR_K8S_NODE_ANNOTATION,
    "ATTR_K8S_NODE_LABEL",
    ()=>ATTR_K8S_NODE_LABEL,
    "ATTR_K8S_NODE_NAME",
    ()=>ATTR_K8S_NODE_NAME,
    "ATTR_K8S_NODE_UID",
    ()=>ATTR_K8S_NODE_UID,
    "ATTR_K8S_POD_ANNOTATION",
    ()=>ATTR_K8S_POD_ANNOTATION,
    "ATTR_K8S_POD_HOSTNAME",
    ()=>ATTR_K8S_POD_HOSTNAME,
    "ATTR_K8S_POD_IP",
    ()=>ATTR_K8S_POD_IP,
    "ATTR_K8S_POD_LABEL",
    ()=>ATTR_K8S_POD_LABEL,
    "ATTR_K8S_POD_NAME",
    ()=>ATTR_K8S_POD_NAME,
    "ATTR_K8S_POD_START_TIME",
    ()=>ATTR_K8S_POD_START_TIME,
    "ATTR_K8S_POD_UID",
    ()=>ATTR_K8S_POD_UID,
    "ATTR_K8S_REPLICASET_ANNOTATION",
    ()=>ATTR_K8S_REPLICASET_ANNOTATION,
    "ATTR_K8S_REPLICASET_LABEL",
    ()=>ATTR_K8S_REPLICASET_LABEL,
    "ATTR_K8S_REPLICASET_NAME",
    ()=>ATTR_K8S_REPLICASET_NAME,
    "ATTR_K8S_REPLICASET_UID",
    ()=>ATTR_K8S_REPLICASET_UID,
    "ATTR_K8S_STATEFULSET_ANNOTATION",
    ()=>ATTR_K8S_STATEFULSET_ANNOTATION,
    "ATTR_K8S_STATEFULSET_LABEL",
    ()=>ATTR_K8S_STATEFULSET_LABEL,
    "ATTR_K8S_STATEFULSET_NAME",
    ()=>ATTR_K8S_STATEFULSET_NAME,
    "ATTR_K8S_STATEFULSET_UID",
    ()=>ATTR_K8S_STATEFULSET_UID,
    "ATTR_NETWORK_LOCAL_ADDRESS",
    ()=>ATTR_NETWORK_LOCAL_ADDRESS,
    "ATTR_NETWORK_LOCAL_PORT",
    ()=>ATTR_NETWORK_LOCAL_PORT,
    "ATTR_NETWORK_PEER_ADDRESS",
    ()=>ATTR_NETWORK_PEER_ADDRESS,
    "ATTR_NETWORK_PEER_PORT",
    ()=>ATTR_NETWORK_PEER_PORT,
    "ATTR_NETWORK_PROTOCOL_NAME",
    ()=>ATTR_NETWORK_PROTOCOL_NAME,
    "ATTR_NETWORK_PROTOCOL_VERSION",
    ()=>ATTR_NETWORK_PROTOCOL_VERSION,
    "ATTR_NETWORK_TRANSPORT",
    ()=>ATTR_NETWORK_TRANSPORT,
    "ATTR_NETWORK_TYPE",
    ()=>ATTR_NETWORK_TYPE,
    "ATTR_OTEL_EVENT_NAME",
    ()=>ATTR_OTEL_EVENT_NAME,
    "ATTR_OTEL_SCOPE_NAME",
    ()=>ATTR_OTEL_SCOPE_NAME,
    "ATTR_OTEL_SCOPE_VERSION",
    ()=>ATTR_OTEL_SCOPE_VERSION,
    "ATTR_OTEL_STATUS_CODE",
    ()=>ATTR_OTEL_STATUS_CODE,
    "ATTR_OTEL_STATUS_DESCRIPTION",
    ()=>ATTR_OTEL_STATUS_DESCRIPTION,
    "ATTR_SERVER_ADDRESS",
    ()=>ATTR_SERVER_ADDRESS,
    "ATTR_SERVER_PORT",
    ()=>ATTR_SERVER_PORT,
    "ATTR_SERVICE_INSTANCE_ID",
    ()=>ATTR_SERVICE_INSTANCE_ID,
    "ATTR_SERVICE_NAME",
    ()=>ATTR_SERVICE_NAME,
    "ATTR_SERVICE_NAMESPACE",
    ()=>ATTR_SERVICE_NAMESPACE,
    "ATTR_SERVICE_VERSION",
    ()=>ATTR_SERVICE_VERSION,
    "ATTR_SIGNALR_CONNECTION_STATUS",
    ()=>ATTR_SIGNALR_CONNECTION_STATUS,
    "ATTR_SIGNALR_TRANSPORT",
    ()=>ATTR_SIGNALR_TRANSPORT,
    "ATTR_TELEMETRY_DISTRO_NAME",
    ()=>ATTR_TELEMETRY_DISTRO_NAME,
    "ATTR_TELEMETRY_DISTRO_VERSION",
    ()=>ATTR_TELEMETRY_DISTRO_VERSION,
    "ATTR_TELEMETRY_SDK_LANGUAGE",
    ()=>ATTR_TELEMETRY_SDK_LANGUAGE,
    "ATTR_TELEMETRY_SDK_NAME",
    ()=>ATTR_TELEMETRY_SDK_NAME,
    "ATTR_TELEMETRY_SDK_VERSION",
    ()=>ATTR_TELEMETRY_SDK_VERSION,
    "ATTR_URL_FRAGMENT",
    ()=>ATTR_URL_FRAGMENT,
    "ATTR_URL_FULL",
    ()=>ATTR_URL_FULL,
    "ATTR_URL_PATH",
    ()=>ATTR_URL_PATH,
    "ATTR_URL_QUERY",
    ()=>ATTR_URL_QUERY,
    "ATTR_URL_SCHEME",
    ()=>ATTR_URL_SCHEME,
    "ATTR_USER_AGENT_ORIGINAL",
    ()=>ATTR_USER_AGENT_ORIGINAL,
    "DB_SYSTEM_NAME_VALUE_MARIADB",
    ()=>DB_SYSTEM_NAME_VALUE_MARIADB,
    "DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER",
    ()=>DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER,
    "DB_SYSTEM_NAME_VALUE_MYSQL",
    ()=>DB_SYSTEM_NAME_VALUE_MYSQL,
    "DB_SYSTEM_NAME_VALUE_POSTGRESQL",
    ()=>DB_SYSTEM_NAME_VALUE_POSTGRESQL,
    "DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT",
    ()=>DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT,
    "DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION",
    ()=>DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION,
    "DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING",
    ()=>DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING,
    "DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST",
    ()=>DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST,
    "DOTNET_GC_HEAP_GENERATION_VALUE_GEN0",
    ()=>DOTNET_GC_HEAP_GENERATION_VALUE_GEN0,
    "DOTNET_GC_HEAP_GENERATION_VALUE_GEN1",
    ()=>DOTNET_GC_HEAP_GENERATION_VALUE_GEN1,
    "DOTNET_GC_HEAP_GENERATION_VALUE_GEN2",
    ()=>DOTNET_GC_HEAP_GENERATION_VALUE_GEN2,
    "DOTNET_GC_HEAP_GENERATION_VALUE_LOH",
    ()=>DOTNET_GC_HEAP_GENERATION_VALUE_LOH,
    "DOTNET_GC_HEAP_GENERATION_VALUE_POH",
    ()=>DOTNET_GC_HEAP_GENERATION_VALUE_POH,
    "ERROR_TYPE_VALUE_OTHER",
    ()=>ERROR_TYPE_VALUE_OTHER,
    "HTTP_REQUEST_METHOD_VALUE_CONNECT",
    ()=>HTTP_REQUEST_METHOD_VALUE_CONNECT,
    "HTTP_REQUEST_METHOD_VALUE_DELETE",
    ()=>HTTP_REQUEST_METHOD_VALUE_DELETE,
    "HTTP_REQUEST_METHOD_VALUE_GET",
    ()=>HTTP_REQUEST_METHOD_VALUE_GET,
    "HTTP_REQUEST_METHOD_VALUE_HEAD",
    ()=>HTTP_REQUEST_METHOD_VALUE_HEAD,
    "HTTP_REQUEST_METHOD_VALUE_OPTIONS",
    ()=>HTTP_REQUEST_METHOD_VALUE_OPTIONS,
    "HTTP_REQUEST_METHOD_VALUE_OTHER",
    ()=>HTTP_REQUEST_METHOD_VALUE_OTHER,
    "HTTP_REQUEST_METHOD_VALUE_PATCH",
    ()=>HTTP_REQUEST_METHOD_VALUE_PATCH,
    "HTTP_REQUEST_METHOD_VALUE_POST",
    ()=>HTTP_REQUEST_METHOD_VALUE_POST,
    "HTTP_REQUEST_METHOD_VALUE_PUT",
    ()=>HTTP_REQUEST_METHOD_VALUE_PUT,
    "HTTP_REQUEST_METHOD_VALUE_TRACE",
    ()=>HTTP_REQUEST_METHOD_VALUE_TRACE,
    "JVM_MEMORY_TYPE_VALUE_HEAP",
    ()=>JVM_MEMORY_TYPE_VALUE_HEAP,
    "JVM_MEMORY_TYPE_VALUE_NON_HEAP",
    ()=>JVM_MEMORY_TYPE_VALUE_NON_HEAP,
    "JVM_THREAD_STATE_VALUE_BLOCKED",
    ()=>JVM_THREAD_STATE_VALUE_BLOCKED,
    "JVM_THREAD_STATE_VALUE_NEW",
    ()=>JVM_THREAD_STATE_VALUE_NEW,
    "JVM_THREAD_STATE_VALUE_RUNNABLE",
    ()=>JVM_THREAD_STATE_VALUE_RUNNABLE,
    "JVM_THREAD_STATE_VALUE_TERMINATED",
    ()=>JVM_THREAD_STATE_VALUE_TERMINATED,
    "JVM_THREAD_STATE_VALUE_TIMED_WAITING",
    ()=>JVM_THREAD_STATE_VALUE_TIMED_WAITING,
    "JVM_THREAD_STATE_VALUE_WAITING",
    ()=>JVM_THREAD_STATE_VALUE_WAITING,
    "NETWORK_TRANSPORT_VALUE_PIPE",
    ()=>NETWORK_TRANSPORT_VALUE_PIPE,
    "NETWORK_TRANSPORT_VALUE_QUIC",
    ()=>NETWORK_TRANSPORT_VALUE_QUIC,
    "NETWORK_TRANSPORT_VALUE_TCP",
    ()=>NETWORK_TRANSPORT_VALUE_TCP,
    "NETWORK_TRANSPORT_VALUE_UDP",
    ()=>NETWORK_TRANSPORT_VALUE_UDP,
    "NETWORK_TRANSPORT_VALUE_UNIX",
    ()=>NETWORK_TRANSPORT_VALUE_UNIX,
    "NETWORK_TYPE_VALUE_IPV4",
    ()=>NETWORK_TYPE_VALUE_IPV4,
    "NETWORK_TYPE_VALUE_IPV6",
    ()=>NETWORK_TYPE_VALUE_IPV6,
    "OTEL_STATUS_CODE_VALUE_ERROR",
    ()=>OTEL_STATUS_CODE_VALUE_ERROR,
    "OTEL_STATUS_CODE_VALUE_OK",
    ()=>OTEL_STATUS_CODE_VALUE_OK,
    "SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN",
    ()=>SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN,
    "SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE",
    ()=>SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE,
    "SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT",
    ()=>SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT,
    "SIGNALR_TRANSPORT_VALUE_LONG_POLLING",
    ()=>SIGNALR_TRANSPORT_VALUE_LONG_POLLING,
    "SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS",
    ()=>SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS,
    "SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS",
    ()=>SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS,
    "TELEMETRY_SDK_LANGUAGE_VALUE_CPP",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_CPP,
    "TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET,
    "TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG,
    "TELEMETRY_SDK_LANGUAGE_VALUE_GO",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_GO,
    "TELEMETRY_SDK_LANGUAGE_VALUE_JAVA",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_JAVA,
    "TELEMETRY_SDK_LANGUAGE_VALUE_KOTLIN",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_KOTLIN,
    "TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
    "TELEMETRY_SDK_LANGUAGE_VALUE_PHP",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_PHP,
    "TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON,
    "TELEMETRY_SDK_LANGUAGE_VALUE_RUBY",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_RUBY,
    "TELEMETRY_SDK_LANGUAGE_VALUE_RUST",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_RUST,
    "TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT,
    "TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS",
    ()=>TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS
]);
const ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = 'aspnetcore.diagnostics.exception.result';
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
const ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = 'aspnetcore.diagnostics.handler.type';
const ATTR_ASPNETCORE_RATE_LIMITING_POLICY = 'aspnetcore.rate_limiting.policy';
const ATTR_ASPNETCORE_RATE_LIMITING_RESULT = 'aspnetcore.rate_limiting.result';
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
const ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = 'aspnetcore.request.is_unhandled';
const ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = 'aspnetcore.routing.is_fallback';
const ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = 'aspnetcore.routing.match_status';
const ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
const ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
const ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = 'aspnetcore.user.is_authenticated';
const ATTR_CLIENT_ADDRESS = 'client.address';
const ATTR_CLIENT_PORT = 'client.port';
const ATTR_CODE_COLUMN_NUMBER = 'code.column.number';
const ATTR_CODE_FILE_PATH = 'code.file.path';
const ATTR_CODE_FUNCTION_NAME = 'code.function.name';
const ATTR_CODE_LINE_NUMBER = 'code.line.number';
const ATTR_CODE_STACKTRACE = 'code.stacktrace';
const ATTR_CONTAINER_ID = 'container.id';
const ATTR_CONTAINER_IMAGE_NAME = 'container.image.name';
const ATTR_CONTAINER_IMAGE_REPO_DIGESTS = 'container.image.repo_digests';
const ATTR_CONTAINER_IMAGE_TAGS = 'container.image.tags';
const ATTR_DB_COLLECTION_NAME = 'db.collection.name';
const ATTR_DB_NAMESPACE = 'db.namespace';
const ATTR_DB_OPERATION_BATCH_SIZE = 'db.operation.batch.size';
const ATTR_DB_OPERATION_NAME = 'db.operation.name';
const ATTR_DB_QUERY_SUMMARY = 'db.query.summary';
const ATTR_DB_QUERY_TEXT = 'db.query.text';
const ATTR_DB_RESPONSE_STATUS_CODE = 'db.response.status_code';
const ATTR_DB_STORED_PROCEDURE_NAME = 'db.stored_procedure.name';
const ATTR_DB_SYSTEM_NAME = 'db.system.name';
const DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
const DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
const DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
const DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
const ATTR_DEPLOYMENT_ENVIRONMENT_NAME = 'deployment.environment.name';
const DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT = "development";
const DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION = "production";
const DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING = "staging";
const DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST = "test";
const ATTR_DOTNET_GC_HEAP_GENERATION = 'dotnet.gc.heap.generation';
const DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
const DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
const DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
const DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
const DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
const ATTR_ERROR_TYPE = 'error.type';
const ERROR_TYPE_VALUE_OTHER = "_OTHER";
const ATTR_EXCEPTION_ESCAPED = 'exception.escaped';
const ATTR_EXCEPTION_MESSAGE = 'exception.message';
const ATTR_EXCEPTION_STACKTRACE = 'exception.stacktrace';
const ATTR_EXCEPTION_TYPE = 'exception.type';
const ATTR_HTTP_REQUEST_HEADER = (key)=>`http.request.header.${key}`;
const ATTR_HTTP_REQUEST_METHOD = 'http.request.method';
const HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
const HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
const HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
const HTTP_REQUEST_METHOD_VALUE_GET = "GET";
const HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
const HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
const HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
const HTTP_REQUEST_METHOD_VALUE_POST = "POST";
const HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
const HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
const ATTR_HTTP_REQUEST_METHOD_ORIGINAL = 'http.request.method_original';
const ATTR_HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count';
const ATTR_HTTP_RESPONSE_HEADER = (key)=>`http.response.header.${key}`;
const ATTR_HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code';
const ATTR_HTTP_ROUTE = 'http.route';
const ATTR_JVM_GC_ACTION = 'jvm.gc.action';
const ATTR_JVM_GC_NAME = 'jvm.gc.name';
const ATTR_JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';
const ATTR_JVM_MEMORY_TYPE = 'jvm.memory.type';
const JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
const JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
const ATTR_JVM_THREAD_DAEMON = 'jvm.thread.daemon';
const ATTR_JVM_THREAD_STATE = 'jvm.thread.state';
const JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
const JVM_THREAD_STATE_VALUE_NEW = "new";
const JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
const JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
const JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
const JVM_THREAD_STATE_VALUE_WAITING = "waiting";
const ATTR_K8S_CLUSTER_NAME = 'k8s.cluster.name';
const ATTR_K8S_CLUSTER_UID = 'k8s.cluster.uid';
const ATTR_K8S_CONTAINER_NAME = 'k8s.container.name';
const ATTR_K8S_CONTAINER_RESTART_COUNT = 'k8s.container.restart_count';
const ATTR_K8S_CRONJOB_ANNOTATION = (key)=>`k8s.cronjob.annotation.${key}`;
const ATTR_K8S_CRONJOB_LABEL = (key)=>`k8s.cronjob.label.${key}`;
const ATTR_K8S_CRONJOB_NAME = 'k8s.cronjob.name';
const ATTR_K8S_CRONJOB_UID = 'k8s.cronjob.uid';
const ATTR_K8S_DAEMONSET_ANNOTATION = (key)=>`k8s.daemonset.annotation.${key}`;
const ATTR_K8S_DAEMONSET_LABEL = (key)=>`k8s.daemonset.label.${key}`;
const ATTR_K8S_DAEMONSET_NAME = 'k8s.daemonset.name';
const ATTR_K8S_DAEMONSET_UID = 'k8s.daemonset.uid';
const ATTR_K8S_DEPLOYMENT_ANNOTATION = (key)=>`k8s.deployment.annotation.${key}`;
const ATTR_K8S_DEPLOYMENT_LABEL = (key)=>`k8s.deployment.label.${key}`;
const ATTR_K8S_DEPLOYMENT_NAME = 'k8s.deployment.name';
const ATTR_K8S_DEPLOYMENT_UID = 'k8s.deployment.uid';
const ATTR_K8S_JOB_ANNOTATION = (key)=>`k8s.job.annotation.${key}`;
const ATTR_K8S_JOB_LABEL = (key)=>`k8s.job.label.${key}`;
const ATTR_K8S_JOB_NAME = 'k8s.job.name';
const ATTR_K8S_JOB_UID = 'k8s.job.uid';
const ATTR_K8S_NAMESPACE_ANNOTATION = (key)=>`k8s.namespace.annotation.${key}`;
const ATTR_K8S_NAMESPACE_LABEL = (key)=>`k8s.namespace.label.${key}`;
const ATTR_K8S_NAMESPACE_NAME = 'k8s.namespace.name';
const ATTR_K8S_NODE_ANNOTATION = (key)=>`k8s.node.annotation.${key}`;
const ATTR_K8S_NODE_LABEL = (key)=>`k8s.node.label.${key}`;
const ATTR_K8S_NODE_NAME = 'k8s.node.name';
const ATTR_K8S_NODE_UID = 'k8s.node.uid';
const ATTR_K8S_POD_ANNOTATION = (key)=>`k8s.pod.annotation.${key}`;
const ATTR_K8S_POD_HOSTNAME = 'k8s.pod.hostname';
const ATTR_K8S_POD_IP = 'k8s.pod.ip';
const ATTR_K8S_POD_LABEL = (key)=>`k8s.pod.label.${key}`;
const ATTR_K8S_POD_NAME = 'k8s.pod.name';
const ATTR_K8S_POD_START_TIME = 'k8s.pod.start_time';
const ATTR_K8S_POD_UID = 'k8s.pod.uid';
const ATTR_K8S_REPLICASET_ANNOTATION = (key)=>`k8s.replicaset.annotation.${key}`;
const ATTR_K8S_REPLICASET_LABEL = (key)=>`k8s.replicaset.label.${key}`;
const ATTR_K8S_REPLICASET_NAME = 'k8s.replicaset.name';
const ATTR_K8S_REPLICASET_UID = 'k8s.replicaset.uid';
const ATTR_K8S_STATEFULSET_ANNOTATION = (key)=>`k8s.statefulset.annotation.${key}`;
const ATTR_K8S_STATEFULSET_LABEL = (key)=>`k8s.statefulset.label.${key}`;
const ATTR_K8S_STATEFULSET_NAME = 'k8s.statefulset.name';
const ATTR_K8S_STATEFULSET_UID = 'k8s.statefulset.uid';
const ATTR_NETWORK_LOCAL_ADDRESS = 'network.local.address';
const ATTR_NETWORK_LOCAL_PORT = 'network.local.port';
const ATTR_NETWORK_PEER_ADDRESS = 'network.peer.address';
const ATTR_NETWORK_PEER_PORT = 'network.peer.port';
const ATTR_NETWORK_PROTOCOL_NAME = 'network.protocol.name';
const ATTR_NETWORK_PROTOCOL_VERSION = 'network.protocol.version';
const ATTR_NETWORK_TRANSPORT = 'network.transport';
const NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
const NETWORK_TRANSPORT_VALUE_QUIC = "quic";
const NETWORK_TRANSPORT_VALUE_TCP = "tcp";
const NETWORK_TRANSPORT_VALUE_UDP = "udp";
const NETWORK_TRANSPORT_VALUE_UNIX = "unix";
const ATTR_NETWORK_TYPE = 'network.type';
const NETWORK_TYPE_VALUE_IPV4 = "ipv4";
const NETWORK_TYPE_VALUE_IPV6 = "ipv6";
const ATTR_OTEL_EVENT_NAME = 'otel.event.name';
const ATTR_OTEL_SCOPE_NAME = 'otel.scope.name';
const ATTR_OTEL_SCOPE_VERSION = 'otel.scope.version';
const ATTR_OTEL_STATUS_CODE = 'otel.status_code';
const OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
const OTEL_STATUS_CODE_VALUE_OK = "OK";
const ATTR_OTEL_STATUS_DESCRIPTION = 'otel.status_description';
const ATTR_SERVER_ADDRESS = 'server.address';
const ATTR_SERVER_PORT = 'server.port';
const ATTR_SERVICE_INSTANCE_ID = 'service.instance.id';
const ATTR_SERVICE_NAME = 'service.name';
const ATTR_SERVICE_NAMESPACE = 'service.namespace';
const ATTR_SERVICE_VERSION = 'service.version';
const ATTR_SIGNALR_CONNECTION_STATUS = 'signalr.connection.status';
const SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
const SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
const SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
const ATTR_SIGNALR_TRANSPORT = 'signalr.transport';
const SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
const SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
const SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
const ATTR_TELEMETRY_DISTRO_NAME = 'telemetry.distro.name';
const ATTR_TELEMETRY_DISTRO_VERSION = 'telemetry.distro.version';
const ATTR_TELEMETRY_SDK_LANGUAGE = 'telemetry.sdk.language';
const TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
const TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
const TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
const TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
const TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
const TELEMETRY_SDK_LANGUAGE_VALUE_KOTLIN = "kotlin";
const TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
const TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
const TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
const TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
const TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
const TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
const TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
const ATTR_TELEMETRY_SDK_NAME = 'telemetry.sdk.name';
const ATTR_TELEMETRY_SDK_VERSION = 'telemetry.sdk.version';
const ATTR_URL_FRAGMENT = 'url.fragment';
const ATTR_URL_FULL = 'url.full';
const ATTR_URL_PATH = 'url.path';
const ATTR_URL_QUERY = 'url.query';
const ATTR_URL_SCHEME = 'url.scheme';
const ATTR_USER_AGENT_ORIGINAL = 'user_agent.original'; //# sourceMappingURL=stable_attributes.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([]);
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */ __turbopack_context__.s([
    "disableInstrumentations",
    ()=>disableInstrumentations,
    "enableInstrumentations",
    ()=>enableInstrumentations
]);
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
    for(let i = 0, j = instrumentations.length; i < j; i++){
        const instrumentation = instrumentations[i];
        if (tracerProvider) {
            instrumentation.setTracerProvider(tracerProvider);
        }
        if (meterProvider) {
            instrumentation.setMeterProvider(meterProvider);
        }
        if (loggerProvider && instrumentation.setLoggerProvider) {
            instrumentation.setLoggerProvider(loggerProvider);
        }
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) {
            instrumentation.enable();
        }
    }
}
function disableInstrumentations(instrumentations) {
    instrumentations.forEach((instrumentation)=>instrumentation.disable());
} //# sourceMappingURL=autoLoaderUtils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "registerInstrumentations",
    ()=>registerInstrumentations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/metrics-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js [instrumentation] (ecmascript)");
;
;
;
function registerInstrumentations(options) {
    const tracerProvider = options.tracerProvider || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["trace"].getTracerProvider();
    const meterProvider = options.meterProvider || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["metrics"].getMeterProvider();
    const loggerProvider = options.loggerProvider || __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"].getLoggerProvider();
    const instrumentations = options.instrumentations?.flat() ?? [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["enableInstrumentations"])(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["disableInstrumentations"])(instrumentations);
    };
} //# sourceMappingURL=autoLoader.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/semver.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // This is a custom semantic versioning implementation compatible with the
// `satisfies(version, range, options?)` function from the `semver` npm package;
// with the exception that the `loose` option is not supported.
//
// The motivation for the custom semver implementation is that
// `semver` package has some initialization delay (lots of RegExp init and compile)
// and this leads to coldstart overhead for the OTEL Lambda Node.js layer.
// Hence, we have implemented lightweight version of it internally with required functionalities.
__turbopack_context__.s([
    "satisfies",
    ()=>satisfies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
;
const VERSION_REGEXP = /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const RANGE_REGEXP = /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const operatorResMap = {
    '>': [
        1
    ],
    '>=': [
        0,
        1
    ],
    '=': [
        0
    ],
    '<=': [
        -1,
        0
    ],
    '<': [
        -1
    ],
    '!=': [
        -1,
        1
    ]
};
function satisfies(version, range, options) {
    // Strict semver format check
    if (!_validateVersion(version)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(`Invalid version: ${version}`);
        return false;
    }
    // If range is empty, satisfy check succeeds regardless what version is
    if (!range) {
        return true;
    }
    // Cleanup range
    range = range.replace(/([<>=~^]+)\s+/g, '$1');
    // Parse version
    const parsedVersion = _parseVersion(version);
    if (!parsedVersion) {
        return false;
    }
    const allParsedRanges = [];
    // Check given version whether it satisfies given range expression
    const checkResult = _doSatisfies(parsedVersion, range, allParsedRanges, options);
    // If check result is OK,
    // do another final check for pre-release, if pre-release check is included by option
    if (checkResult && !options?.includePrerelease) {
        return _doPreleaseCheck(parsedVersion, allParsedRanges);
    }
    return checkResult;
}
function _validateVersion(version) {
    return typeof version === 'string' && VERSION_REGEXP.test(version);
}
function _doSatisfies(parsedVersion, range, allParsedRanges, options) {
    if (range.includes('||')) {
        // A version matches a range if and only if
        // every comparator in at least one of the ||-separated comparator sets is satisfied by the version
        const ranges = range.trim().split('||');
        for (const r of ranges){
            if (_checkRange(parsedVersion, r, allParsedRanges, options)) {
                return true;
            }
        }
        return false;
    } else if (range.includes(' - ')) {
        // Hyphen ranges: https://github.com/npm/node-semver#hyphen-ranges-xyz---abc
        range = replaceHyphen(range, options);
    } else if (range.includes(' ')) {
        // Multiple separated ranges and all needs to be satisfied for success
        const ranges = range.trim().replace(/\s{2,}/g, ' ').split(' ');
        for (const r of ranges){
            if (!_checkRange(parsedVersion, r, allParsedRanges, options)) {
                return false;
            }
        }
        return true;
    }
    // Check given parsed version with given range
    return _checkRange(parsedVersion, range, allParsedRanges, options);
}
function _checkRange(parsedVersion, range, allParsedRanges, options) {
    range = _normalizeRange(range, options);
    if (range.includes(' ')) {
        // If there are multiple ranges separated, satisfy each of them
        return _doSatisfies(parsedVersion, range, allParsedRanges, options);
    } else {
        // Validate and parse range
        const parsedRange = _parseRange(range);
        allParsedRanges.push(parsedRange);
        // Check parsed version by parsed range
        return _satisfies(parsedVersion, parsedRange);
    }
}
function _satisfies(parsedVersion, parsedRange) {
    // If range is invalid, satisfy check fails (no error throw)
    if (parsedRange.invalid) {
        return false;
    }
    // If range is empty or wildcard, satisfy check succeeds regardless what version is
    if (!parsedRange.version || _isWildcard(parsedRange.version)) {
        return true;
    }
    // Compare version segment first
    let comparisonResult = _compareVersionSegments(parsedVersion.versionSegments || [], parsedRange.versionSegments || []);
    // If versions segments are equal, compare by pre-release segments
    if (comparisonResult === 0) {
        const versionPrereleaseSegments = parsedVersion.prereleaseSegments || [];
        const rangePrereleaseSegments = parsedRange.prereleaseSegments || [];
        if (!versionPrereleaseSegments.length && !rangePrereleaseSegments.length) {
            comparisonResult = 0;
        } else if (!versionPrereleaseSegments.length && rangePrereleaseSegments.length) {
            comparisonResult = 1;
        } else if (versionPrereleaseSegments.length && !rangePrereleaseSegments.length) {
            comparisonResult = -1;
        } else {
            comparisonResult = _compareVersionSegments(versionPrereleaseSegments, rangePrereleaseSegments);
        }
    }
    // Resolve check result according to comparison operator
    return operatorResMap[parsedRange.op]?.includes(comparisonResult);
}
function _doPreleaseCheck(parsedVersion, allParsedRanges) {
    if (parsedVersion.prerelease) {
        return allParsedRanges.some((r)=>r.prerelease && r.version === parsedVersion.version);
    }
    return true;
}
function _normalizeRange(range, options) {
    range = range.trim();
    range = replaceCaret(range, options);
    range = replaceTilde(range);
    range = replaceXRange(range, options);
    range = range.trim();
    return range;
}
function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
}
function _parseVersion(versionString) {
    const match = versionString.match(VERSION_REGEXP);
    if (!match) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(`Invalid version: ${versionString}`);
        return undefined;
    }
    const version = match.groups.version;
    const prerelease = match.groups.prerelease;
    const build = match.groups.build;
    const versionSegments = version.split('.');
    const prereleaseSegments = prerelease?.split('.');
    return {
        op: undefined,
        version,
        versionSegments,
        versionSegmentCount: versionSegments.length,
        prerelease,
        prereleaseSegments,
        prereleaseSegmentCount: prereleaseSegments ? prereleaseSegments.length : 0,
        build
    };
}
function _parseRange(rangeString) {
    if (!rangeString) {
        return {};
    }
    const match = rangeString.match(RANGE_REGEXP);
    if (!match) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(`Invalid range: ${rangeString}`);
        return {
            invalid: true
        };
    }
    let op = match.groups.op;
    const version = match.groups.version;
    const prerelease = match.groups.prerelease;
    const build = match.groups.build;
    const versionSegments = version.split('.');
    const prereleaseSegments = prerelease?.split('.');
    if (op === '==') {
        op = '=';
    }
    return {
        op: op || '=',
        version,
        versionSegments,
        versionSegmentCount: versionSegments.length,
        prerelease,
        prereleaseSegments,
        prereleaseSegmentCount: prereleaseSegments ? prereleaseSegments.length : 0,
        build
    };
}
function _isWildcard(s) {
    return s === '*' || s === 'x' || s === 'X';
}
function _parseVersionString(v) {
    const n = parseInt(v, 10);
    return isNaN(n) ? v : n;
}
function _normalizeVersionType(a, b) {
    if (typeof a === typeof b) {
        if (typeof a === 'number') {
            return [
                a,
                b
            ];
        } else if (typeof a === 'string') {
            return [
                a,
                b
            ];
        } else {
            throw new Error('Version segments can only be strings or numbers');
        }
    } else {
        return [
            String(a),
            String(b)
        ];
    }
}
function _compareVersionStrings(v1, v2) {
    if (_isWildcard(v1) || _isWildcard(v2)) {
        return 0;
    }
    const [parsedV1, parsedV2] = _normalizeVersionType(_parseVersionString(v1), _parseVersionString(v2));
    if (parsedV1 > parsedV2) {
        return 1;
    } else if (parsedV1 < parsedV2) {
        return -1;
    }
    return 0;
}
function _compareVersionSegments(v1, v2) {
    for(let i = 0; i < Math.max(v1.length, v2.length); i++){
        const res = _compareVersionStrings(v1[i] || '0', v2[i] || '0');
        if (res !== 0) {
            return res;
        }
    }
    return 0;
}
////////////////////////////////////////////////////////////////////////////////
// The rest of this file is adapted from portions of https://github.com/npm/node-semver/tree/868d4bb
// License:
/*
 * The ISC License
 *
 * Copyright (c) Isaac Z. Schlueter and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */ const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
const NUMERICIDENTIFIER = '0|[1-9]\\d*';
const NONNUMERICIDENTIFIER = `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`;
const GTLT = '((?:<|>)?=?)';
const PRERELEASEIDENTIFIER = `(?:${NUMERICIDENTIFIER}|${NONNUMERICIDENTIFIER})`;
const PRERELEASE = `(?:-(${PRERELEASEIDENTIFIER}(?:\\.${PRERELEASEIDENTIFIER})*))`;
const BUILDIDENTIFIER = `${LETTERDASHNUMBER}+`;
const BUILD = `(?:\\+(${BUILDIDENTIFIER}(?:\\.${BUILDIDENTIFIER})*))`;
const XRANGEIDENTIFIER = `${NUMERICIDENTIFIER}|x|X|\\*`;
const XRANGEPLAIN = `[v=\\s]*(${XRANGEIDENTIFIER})` + `(?:\\.(${XRANGEIDENTIFIER})` + `(?:\\.(${XRANGEIDENTIFIER})` + `(?:${PRERELEASE})?${BUILD}?` + ')?)?';
const XRANGE = `^${GTLT}\\s*${XRANGEPLAIN}$`;
const XRANGE_REGEXP = new RegExp(XRANGE);
const HYPHENRANGE = `^\\s*(${XRANGEPLAIN})` + '\\s+-\\s+' + `(${XRANGEPLAIN})` + '\\s*$';
const HYPHENRANGE_REGEXP = new RegExp(HYPHENRANGE);
const LONETILDE = '(?:~>?)';
const TILDE = `^${LONETILDE}${XRANGEPLAIN}$`;
const TILDE_REGEXP = new RegExp(TILDE);
const LONECARET = '(?:\\^)';
const CARET = `^${LONECARET}${XRANGEPLAIN}$`;
const CARET_REGEXP = new RegExp(CARET);
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L285
//
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
function replaceTilde(comp) {
    const r = TILDE_REGEXP;
    return comp.replace(r, (_, M, m, p, pr)=>{
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        return ret;
    });
}
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L329
//
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
function replaceCaret(comp, options) {
    const r = CARET_REGEXP;
    const z = options?.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        return ret;
    });
}
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L390
function replaceXRange(comp, options) {
    const r = XRANGE_REGEXP;
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options?.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        return ret;
    });
}
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L488
//
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
function replaceHyphen(comp, options) {
    const r = HYPHENRANGE_REGEXP;
    return comp.replace(r, (_, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${options?.includePrerelease ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${options?.includePrerelease ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${options?.includePrerelease ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (options?.includePrerelease) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    });
} //# sourceMappingURL=semver.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/shimmer.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // Default to complaining loudly when things don't go according to plan.
// eslint-disable-next-line no-console
__turbopack_context__.s([
    "default",
    ()=>shimmer,
    "massUnwrap",
    ()=>massUnwrap,
    "massWrap",
    ()=>massWrap,
    "unwrap",
    ()=>unwrap,
    "wrap",
    ()=>wrap
]);
let logger = console.error.bind(console);
// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty(obj, name, value) {
    const enumerable = !!obj[name] && Object.prototype.propertyIsEnumerable.call(obj, name);
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable,
        writable: true,
        value
    });
}
const wrap = (nodule, name, wrapper)=>{
    if (!nodule || !nodule[name]) {
        logger('no original function ' + String(name) + ' to wrap');
        return;
    }
    if (!wrapper) {
        logger('no wrapper function');
        logger(new Error().stack);
        return;
    }
    const original = nodule[name];
    if (typeof original !== 'function' || typeof wrapper !== 'function') {
        logger('original object and wrapper must be functions');
        return;
    }
    const wrapped = wrapper(original, name);
    defineProperty(wrapped, '__original', original);
    defineProperty(wrapped, '__unwrap', ()=>{
        if (nodule[name] === wrapped) {
            defineProperty(nodule, name, original);
        }
    });
    defineProperty(wrapped, '__wrapped', true);
    defineProperty(nodule, name, wrapped);
    return wrapped;
};
const massWrap = (nodules, names, wrapper)=>{
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) {
        nodules = [
            nodules
        ];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to wrap on modules');
        return;
    }
    nodules.forEach((nodule)=>{
        names.forEach((name)=>{
            wrap(nodule, name, wrapper);
        });
    });
};
const unwrap = (nodule, name)=>{
    if (!nodule || !nodule[name]) {
        logger('no function to unwrap.');
        logger(new Error().stack);
        return;
    }
    const wrapped = nodule[name];
    if (!wrapped.__unwrap) {
        logger('no original to unwrap to -- has ' + String(name) + ' already been unwrapped?');
    } else {
        wrapped.__unwrap();
        return;
    }
};
const massUnwrap = (nodules, names)=>{
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) {
        nodules = [
            nodules
        ];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to unwrap on modules');
        return;
    }
    nodules.forEach((nodule)=>{
        names.forEach((name)=>{
            unwrap(nodule, name);
        });
    });
};
function shimmer(options) {
    if (options && options.logger) {
        if (typeof options.logger !== 'function') {
            logger("new logger isn't a function, not replacing");
        } else {
            logger = options.logger;
        }
    }
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap; //# sourceMappingURL=shimmer.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "InstrumentationAbstract",
    ()=>InstrumentationAbstract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/metrics-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/shimmer.js [instrumentation] (ecmascript)");
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
;
;
;
class InstrumentationAbstract {
    _config = {};
    _tracer;
    _meter;
    _logger;
    _diag;
    instrumentationName;
    instrumentationVersion;
    constructor(instrumentationName, instrumentationVersion, config){
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        this.setConfig(config);
        this._diag = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].createComponentLogger({
            namespace: instrumentationName
        });
        this._tracer = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["trace"].getTracer(instrumentationName, instrumentationVersion);
        this._meter = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["metrics"].getMeter(instrumentationName, instrumentationVersion);
        this._logger = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"].getLogger(instrumentationName, instrumentationVersion);
        this._updateMetricInstruments();
    }
    /* Api to wrap instrumented method */ _wrap = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"];
    /* Api to unwrap instrumented methods */ _unwrap = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unwrap"];
    /* Api to mass wrap instrumented method */ _massWrap = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["massWrap"];
    /* Api to mass unwrap instrumented methods */ _massUnwrap = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["massUnwrap"];
    /* Returns meter */ get meter() {
        return this._meter;
    }
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */ setMeterProvider(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
        this._updateMetricInstruments();
    }
    /* Returns logger */ get logger() {
        return this._logger;
    }
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */ setLoggerProvider(loggerProvider) {
        this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    }
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */ getModuleDefinitions() {
        const initResult = this.init() ?? [];
        if (!Array.isArray(initResult)) {
            return [
                initResult
            ];
        }
        return initResult;
    }
    /**
     * Sets the new metric instruments with the current Meter.
     */ _updateMetricInstruments() {
        return;
    }
    /* Returns InstrumentationConfig */ getConfig() {
        return this._config;
    }
    /**
     * Sets InstrumentationConfig to this plugin
     * @param config
     */ setConfig(config) {
        // copy config first level properties to ensure they are immutable.
        // nested properties are not copied, thus are mutable from the outside.
        this._config = {
            enabled: true,
            ...config
        };
    }
    /**
     * Sets TracerProvider to this plugin
     * @param tracerProvider
     */ setTracerProvider(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    }
    /* Returns tracer */ get tracer() {
        return this._tracer;
    }
    /**
     * Execute span customization hook, if configured, and log any errors.
     * Any semantics of the trigger and info are defined by the specific instrumentation.
     * @param hookHandler The optional hook handler which the user has configured via instrumentation config
     * @param triggerName The name of the trigger for executing the hook for logging purposes
     * @param span The span to which the hook should be applied
     * @param info The info object to be passed to the hook, with useful data the hook may use
     */ _runSpanCustomizationHook(hookHandler, triggerName, span, info) {
        if (!hookHandler) {
            return;
        }
        try {
            hookHandler(span, info);
        } catch (e) {
            this._diag.error('Error running span customization hook due to exception in handler', {
                triggerName
            }, e);
        }
    }
} //# sourceMappingURL=instrumentation.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ModuleNameTrie.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "ModuleNameSeparator",
    ()=>ModuleNameSeparator,
    "ModuleNameTrie",
    ()=>ModuleNameTrie
]);
const ModuleNameSeparator = '/';
/**
 * Node in a `ModuleNameTrie`
 */ class ModuleNameTrieNode {
    hooks = [];
    children = new Map();
}
class ModuleNameTrie {
    _trie = new ModuleNameTrieNode();
    _counter = 0;
    /**
     * Insert a module hook into the trie
     *
     * @param {Hooked} hook Hook
     */ insert(hook) {
        let trieNode = this._trie;
        for (const moduleNamePart of hook.moduleName.split(ModuleNameSeparator)){
            let nextNode = trieNode.children.get(moduleNamePart);
            if (!nextNode) {
                nextNode = new ModuleNameTrieNode();
                trieNode.children.set(moduleNamePart, nextNode);
            }
            trieNode = nextNode;
        }
        trieNode.hooks.push({
            hook,
            insertedId: this._counter++
        });
    }
    /**
     * Search for matching hooks in the trie
     *
     * @param {string} moduleName Module name
     * @param {boolean} maintainInsertionOrder Whether to return the results in insertion order
     * @param {boolean} fullOnly Whether to return only full matches
     * @returns {Hooked[]} Matching hooks
     */ search(moduleName, { maintainInsertionOrder, fullOnly } = {}) {
        let trieNode = this._trie;
        const results = [];
        let foundFull = true;
        for (const moduleNamePart of moduleName.split(ModuleNameSeparator)){
            const nextNode = trieNode.children.get(moduleNamePart);
            if (!nextNode) {
                foundFull = false;
                break;
            }
            if (!fullOnly) {
                results.push(...nextNode.hooks);
            }
            trieNode = nextNode;
        }
        if (fullOnly && foundFull) {
            results.push(...trieNode.hooks);
        }
        if (results.length === 0) {
            return [];
        }
        if (results.length === 1) {
            return [
                results[0].hook
            ];
        }
        if (maintainInsertionOrder) {
            results.sort((a, b)=>a.insertedId - b.insertedId);
        }
        return results.map(({ hook })=>hook);
    }
} //# sourceMappingURL=ModuleNameTrie.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "RequireInTheMiddleSingleton",
    ()=>RequireInTheMiddleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$require$2d$in$2d$the$2d$middle$40$8$2e$0$2e$1$2f$node_modules$2f$require$2d$in$2d$the$2d$middle$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/require-in-the-middle@8.0.1/node_modules/require-in-the-middle/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ModuleNameTrie.js [instrumentation] (ecmascript)");
;
;
;
/**
 * Whether Mocha is running in this process
 * Inspired by https://github.com/AndreasPizsa/detect-mocha
 *
 * @type {boolean}
 */ const isMocha = [
    'afterEach',
    'after',
    'beforeEach',
    'before',
    'describe',
    'it'
].every((fn)=>{
    // @ts-expect-error TS7053: Element implicitly has an 'any' type
    return typeof /*TURBOPACK member replacement*/ __turbopack_context__.g[fn] === 'function';
});
class RequireInTheMiddleSingleton {
    _moduleNameTrie = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameTrie"]();
    static _instance;
    constructor(){
        this._initialize();
    }
    _initialize() {
        new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$require$2d$in$2d$the$2d$middle$40$8$2e$0$2e$1$2f$node_modules$2f$require$2d$in$2d$the$2d$middle$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hook"](// Intercept all `require` calls; we will filter the matching ones below
        null, {
            internals: true
        }, (exports, name, basedir)=>{
            // For internal files on Windows, `name` will use backslash as the path separator
            const normalizedModuleName = normalizePathSeparators(name);
            const matches = this._moduleNameTrie.search(normalizedModuleName, {
                maintainInsertionOrder: true,
                // For core modules (e.g. `fs`), do not match on sub-paths (e.g. `fs/promises').
                // This matches the behavior of `require-in-the-middle`.
                // `basedir` is always `undefined` for core modules.
                fullOnly: basedir === undefined
            });
            for (const { onRequire } of matches){
                exports = onRequire(exports, name, basedir);
            }
            return exports;
        });
    }
    /**
     * Register a hook with `require-in-the-middle`
     *
     * @param {string} moduleName Module name
     * @param {OnRequireFn} onRequire Hook function
     * @returns {Hooked} Registered hook
     */ register(moduleName, onRequire) {
        const hooked = {
            moduleName,
            onRequire
        };
        this._moduleNameTrie.insert(hooked);
        return hooked;
    }
    /**
     * Get the `RequireInTheMiddleSingleton` singleton
     *
     * @returns {RequireInTheMiddleSingleton} Singleton of `RequireInTheMiddleSingleton`
     */ static getInstance() {
        // Mocha runs all test suites in the same process
        // This prevents test suites from sharing a singleton
        if (isMocha) return new RequireInTheMiddleSingleton();
        return this._instance = this._instance ?? new RequireInTheMiddleSingleton();
    }
}
/**
 * Normalize the path separators to forward slash in a module name or path
 *
 * @param {string} moduleNameOrPath Module name or path
 * @returns {string} Normalized module name or path
 */ function normalizePathSeparators(moduleNameOrPath) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameSeparator"] ? moduleNameOrPath.split(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"]).join(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameSeparator"]) : moduleNameOrPath;
} //# sourceMappingURL=RequireInTheMiddleSingleton.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */ __turbopack_context__.s([
    "isWrapped",
    ()=>isWrapped,
    "safeExecuteInTheMiddle",
    ()=>safeExecuteInTheMiddle,
    "safeExecuteInTheMiddleAsync",
    ()=>safeExecuteInTheMiddleAsync
]);
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    let error;
    let result;
    try {
        result = execute();
    } catch (e) {
        error = e;
    } finally{
        onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
async function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    let error;
    let result;
    try {
        result = await execute();
    } catch (e) {
        error = e;
    } finally{
        await onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
function isWrapped(func) {
    return typeof func === 'function' && typeof func.__original === 'function' && typeof func.__unwrap === 'function' && func.__wrapped === true;
} //# sourceMappingURL=utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "InstrumentationBase",
    ()=>InstrumentationBase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$semver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/semver.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/shimmer.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$RequireInTheMiddleSingleton$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$import$2d$in$2d$the$2d$middle$40$3$2e$4$2e$0$2f$node_modules$2f$import$2d$in$2d$the$2d$middle$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/import-in-the-middle@3.4.0/node_modules/import-in-the-middle/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$require$2d$in$2d$the$2d$middle$40$8$2e$0$2e$1$2f$node_modules$2f$require$2d$in$2d$the$2d$middle$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/require-in-the-middle@8.0.1/node_modules/require-in-the-middle/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)");
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
class InstrumentationBase extends __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationAbstract"] {
    _modules;
    _hooks = [];
    _requireInTheMiddleSingleton = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$RequireInTheMiddleSingleton$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["RequireInTheMiddleSingleton"].getInstance();
    _enabled = false;
    constructor(instrumentationName, instrumentationVersion, config){
        super(instrumentationName, instrumentationVersion, config);
        let modules = this.init();
        if (modules && !Array.isArray(modules)) {
            modules = [
                modules
            ];
        }
        this._modules = modules || [];
        if (this._config.enabled) {
            this.enable();
        }
    }
    _wrap = (moduleExports, name, wrapper)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isWrapped"])(moduleExports[name])) {
            this._unwrap(moduleExports, name);
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["types"].isProxy(moduleExports)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"])(moduleExports, name, wrapper);
        } else {
            const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"])(Object.assign({}, moduleExports), name, wrapper);
            Object.defineProperty(moduleExports, name, {
                value: wrapped
            });
            return wrapped;
        }
    };
    _unwrap = (moduleExports, name)=>{
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["types"].isProxy(moduleExports)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$shimmer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unwrap"])(moduleExports, name);
        } else {
            return Object.defineProperty(moduleExports, name, {
                value: moduleExports[name]
            });
        }
    };
    _massWrap = (moduleExportsArray, names, wrapper)=>{
        if (!moduleExportsArray) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error('must provide one or more modules to patch');
            return;
        } else if (!Array.isArray(moduleExportsArray)) {
            moduleExportsArray = [
                moduleExportsArray
            ];
        }
        if (!(names && Array.isArray(names))) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error('must provide one or more functions to wrap on modules');
            return;
        }
        moduleExportsArray.forEach((moduleExports)=>{
            names.forEach((name)=>{
                this._wrap(moduleExports, name, wrapper);
            });
        });
    };
    _massUnwrap = (moduleExportsArray, names)=>{
        if (!moduleExportsArray) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error('must provide one or more modules to patch');
            return;
        } else if (!Array.isArray(moduleExportsArray)) {
            moduleExportsArray = [
                moduleExportsArray
            ];
        }
        if (!(names && Array.isArray(names))) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error('must provide one or more functions to wrap on modules');
            return;
        }
        moduleExportsArray.forEach((moduleExports)=>{
            names.forEach((name)=>{
                this._unwrap(moduleExports, name);
            });
        });
    };
    _warnOnPreloadedModules() {
        // Access require via globalThis to prevent webpack from analyzing it as a dependency expression
        const nodeRequire = globalThis.require;
        if (!nodeRequire?.resolve || !nodeRequire?.cache) return;
        this._modules.forEach((module)=>{
            const { name } = module;
            try {
                const resolvedModule = nodeRequire.resolve(name);
                if (nodeRequire.cache[resolvedModule]?.loaded) {
                    // Module is already cached, which means the instrumentation hook might not work
                    this._diag.warn(`Module ${name} has been loaded before ${this.instrumentationName} so it might not work, please initialize it before requiring ${name}`);
                }
            } catch  {
            // Module isn't available, we can simply skip
            }
        });
    }
    _extractPackageVersion(baseDir) {
        try {
            const json = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"](baseDir, 'package.json'), {
                encoding: 'utf8'
            });
            const version = JSON.parse(json).version;
            return typeof version === 'string' ? version : undefined;
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn('Failed extracting version', baseDir);
        }
        return undefined;
    }
    _onRequire(module, exports, name, baseDir) {
        if (!baseDir) {
            if (typeof module.patch === 'function') {
                module.moduleExports = exports;
                if (this._enabled) {
                    this._diag.debug('Applying instrumentation patch for nodejs core module on require hook', {
                        module: module.name
                    });
                    return module.patch(exports);
                }
            }
            return exports;
        }
        const version = this._extractPackageVersion(baseDir);
        module.moduleVersion = version;
        if (module.name === name) {
            // main module
            if (isSupported(module.supportedVersions, version, module.includePrerelease)) {
                if (typeof module.patch === 'function') {
                    module.moduleExports = exports;
                    if (this._enabled) {
                        this._diag.debug('Applying instrumentation patch for module on require hook', {
                            module: module.name,
                            version: module.moduleVersion,
                            baseDir
                        });
                        return module.patch(exports, module.moduleVersion);
                    }
                }
            }
            return exports;
        }
        // internal file
        const files = module.files ?? [];
        const normalizedName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["normalize"](name);
        const supportedFileInstrumentations = files.filter((f)=>f.name === normalizedName && isSupported(f.supportedVersions, version, module.includePrerelease));
        return supportedFileInstrumentations.reduce((patchedExports, file)=>{
            file.moduleExports = patchedExports;
            if (this._enabled) {
                this._diag.debug('Applying instrumentation patch for nodejs module file on require hook', {
                    module: module.name,
                    version: module.moduleVersion,
                    fileName: file.name,
                    baseDir
                });
                // patch signature is not typed, so we cast it assuming it's correct
                return file.patch(patchedExports, module.moduleVersion);
            }
            return patchedExports;
        }, exports);
    }
    enable() {
        if (this._enabled) {
            return;
        }
        this._enabled = true;
        // already hooked, just call patch again
        if (this._hooks.length > 0) {
            for (const module of this._modules){
                if (typeof module.patch === 'function' && module.moduleExports) {
                    this._diag.debug('Applying instrumentation patch for nodejs module on instrumentation enabled', {
                        module: module.name,
                        version: module.moduleVersion
                    });
                    module.patch(module.moduleExports, module.moduleVersion);
                }
                for (const file of module.files){
                    if (file.moduleExports) {
                        this._diag.debug('Applying instrumentation patch for nodejs module file on instrumentation enabled', {
                            module: module.name,
                            version: module.moduleVersion,
                            fileName: file.name
                        });
                        file.patch(file.moduleExports, module.moduleVersion);
                    }
                }
            }
            return;
        }
        this._warnOnPreloadedModules();
        for (const module of this._modules){
            const hookFn = (exports, name, baseDir)=>{
                if (!baseDir && __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](name)) {
                    // Change IITM `name` and `baseDir` values to match what RITM returns.
                    // See "Comparing to RITM" on https://github.com/nodejs/import-in-the-middle/pull/241
                    // for an example of the differences.
                    const parsedPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["parse"](name);
                    name = parsedPath.name;
                    baseDir = parsedPath.dir;
                }
                return this._onRequire(module, exports, name, baseDir);
            };
            const onRequire = (exports, name, baseDir)=>{
                return this._onRequire(module, exports, name, baseDir);
            };
            // `RequireInTheMiddleSingleton` does not support absolute paths.
            // For an absolute paths, we must create a separate instance of the
            // require-in-the-middle `Hook`.
            const hook = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](module.name) ? new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$require$2d$in$2d$the$2d$middle$40$8$2e$0$2e$1$2f$node_modules$2f$require$2d$in$2d$the$2d$middle$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hook"]([
                module.name
            ], {
                internals: true
            }, onRequire) : this._requireInTheMiddleSingleton.register(module.name, onRequire);
            this._hooks.push(hook);
            const esmHook = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f$import$2d$in$2d$the$2d$middle$40$3$2e$4$2e$0$2f$node_modules$2f$import$2d$in$2d$the$2d$middle$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hook"]([
                module.name
            ], {
                internals: true
            }, hookFn);
            this._hooks.push(esmHook);
        }
    }
    disable() {
        if (!this._enabled) {
            return;
        }
        this._enabled = false;
        for (const module of this._modules){
            if (typeof module.unpatch === 'function' && module.moduleExports) {
                this._diag.debug('Removing instrumentation patch for nodejs module on instrumentation disabled', {
                    module: module.name,
                    version: module.moduleVersion
                });
                module.unpatch(module.moduleExports, module.moduleVersion);
            }
            for (const file of module.files){
                if (file.moduleExports) {
                    this._diag.debug('Removing instrumentation patch for nodejs module file on instrumentation disabled', {
                        module: module.name,
                        version: module.moduleVersion,
                        fileName: file.name
                    });
                    file.unpatch(file.moduleExports, module.moduleVersion);
                }
            }
        }
    }
    isEnabled() {
        return this._enabled;
    }
}
function isSupported(supportedVersions, version, includePrerelease) {
    if (typeof version === 'undefined') {
        // If we don't have the version, accept the wildcard case only
        return supportedVersions.includes('*');
    }
    return supportedVersions.some((supportedVersion)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$semver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["satisfies"])(version, supportedVersion, {
            includePrerelease
        });
    });
} //# sourceMappingURL=instrumentation.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleDefinition.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "InstrumentationNodeModuleDefinition",
    ()=>InstrumentationNodeModuleDefinition
]);
class InstrumentationNodeModuleDefinition {
    files;
    name;
    supportedVersions;
    patch;
    unpatch;
    constructor(name, supportedVersions, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch, files){
        this.files = files || [];
        this.name = name;
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
    }
} //# sourceMappingURL=instrumentationNodeModuleDefinition.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleFile.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "InstrumentationNodeModuleFile",
    ()=>InstrumentationNodeModuleFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
class InstrumentationNodeModuleFile {
    name;
    supportedVersions;
    patch;
    unpatch;
    constructor(name, supportedVersions, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch){
        this.name = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["normalize"])(name);
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
    }
} //# sourceMappingURL=instrumentationNodeModuleFile.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/semconvStability.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "SemconvStability",
    ()=>SemconvStability,
    "semconvStabilityFromStr",
    ()=>semconvStabilityFromStr
]);
var SemconvStability;
(function(SemconvStability) {
    /** Emit only stable semantic conventions. */ SemconvStability[SemconvStability["STABLE"] = 1] = "STABLE";
    /** Emit only old semantic conventions. */ SemconvStability[SemconvStability["OLD"] = 2] = "OLD";
    /** Emit both stable and old semantic conventions. */ SemconvStability[SemconvStability["DUPLICATE"] = 3] = "DUPLICATE";
})(SemconvStability || (SemconvStability = {}));
function semconvStabilityFromStr(namespace, str) {
    let semconvStability = SemconvStability.OLD;
    // The same parsing of `str` as `getStringListFromEnv` from the core pkg.
    const entries = str?.split(',').map((v)=>v.trim()).filter((s)=>s !== '');
    for (const entry of entries ?? []){
        if (entry.toLowerCase() === namespace + '/dup') {
            // DUPLICATE takes highest precedence.
            semconvStability = SemconvStability.DUPLICATE;
            break;
        } else if (entry.toLowerCase() === namespace) {
            semconvStability = SemconvStability.STABLE;
        }
    }
    return semconvStability;
} //# sourceMappingURL=semconvStability.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstrumentationBase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationBase"],
    "InstrumentationNodeModuleDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleDefinition$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationNodeModuleDefinition"],
    "InstrumentationNodeModuleFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleFile$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationNodeModuleFile"],
    "SemconvStability",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$semconvStability$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SemconvStability"],
    "isWrapped",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isWrapped"],
    "registerInstrumentations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoader$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerInstrumentations"],
    "safeExecuteInTheMiddle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["safeExecuteInTheMiddle"],
    "safeExecuteInTheMiddleAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["safeExecuteInTheMiddleAsync"],
    "semconvStabilityFromStr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$semconvStability$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["semconvStabilityFromStr"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoader$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleDefinition$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleDefinition.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleFile$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleFile.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$instrumentation$40$0$2e$220$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$semconvStability$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+instrumentation@0.220.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/instrumentation/build/esm/semconvStability.js [instrumentation] (ecmascript)");
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "API_BACKWARDS_COMPATIBILITY_VERSION",
    ()=>API_BACKWARDS_COMPATIBILITY_VERSION,
    "GLOBAL_LOGS_API_KEY",
    ()=>GLOBAL_LOGS_API_KEY,
    "_global",
    ()=>_global,
    "makeGetter",
    ()=>makeGetter
]);
const GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
const _global = globalThis;
function makeGetter(requiredVersion, instance, fallback) {
    return (version)=>version === requiredVersion ? instance : fallback;
}
const API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "NOOP_LOGGER",
    ()=>NOOP_LOGGER,
    "NoopLogger",
    ()=>NoopLogger,
    "createNoopLogger",
    ()=>createNoopLogger
]);
class NoopLogger {
    emit(_logRecord) {}
    enabled() {
        return false;
    }
}
const NOOP_LOGGER = new NoopLogger();
function createNoopLogger() {
    return NOOP_LOGGER;
} //# sourceMappingURL=NoopLogger.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "NOOP_LOGGER_PROVIDER",
    ()=>NOOP_LOGGER_PROVIDER,
    "NoopLoggerProvider",
    ()=>NoopLoggerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation] (ecmascript)");
;
class NoopLoggerProvider {
    getLogger(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopLogger"]();
    }
}
const NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "ProxyLogger",
    ()=>ProxyLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation] (ecmascript)");
;
class ProxyLogger {
    constructor(provider, name, version, options){
        this._provider = provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ emit(logRecord) {
        this._getLogger().emit(logRecord);
    }
    enabled(options) {
        return this._getLogger().enabled(options);
    }
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ _getLogger() {
        if (this._delegate) {
            return this._delegate;
        }
        const logger = this._provider._getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    }
} //# sourceMappingURL=ProxyLogger.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "ProxyLoggerProvider",
    ()=>ProxyLoggerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [instrumentation] (ecmascript)");
;
;
class ProxyLoggerProvider {
    getLogger(name, version, options) {
        var _a;
        return (_a = this._getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    }
    /**
     * Get the delegate logger provider.
     * Used by tests only.
     * @internal
     */ _getDelegate() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    }
    /**
     * Set the delegate logger provider
     * @internal
     */ _setDelegate(delegate) {
        this._delegate = delegate;
    }
    /**
     * @internal
     */ _getDelegateLogger(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    }
} //# sourceMappingURL=ProxyLoggerProvider.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "LogsAPI",
    ()=>LogsAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [instrumentation] (ecmascript)");
;
;
;
class LogsAPI {
    constructor(){
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    }
    setGlobalLoggerProvider(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider._setDelegate(provider);
        return provider;
    }
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ getLoggerProvider() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    }
    /**
     * Returns a Logger, creating one if one with the given name, version,
     * schemaUrl, and attributes is not already created.
     *
     * Getting a Logger may be expensive, especially when `attributes` are
     * provided. Reuse Logger instances where possible instead of calling
     * `getLogger()` on hot paths.
     *
     * @param name The name of the logger or instrumentation library.
     * @param version The version of the logger or instrumentation library.
     * @param options The options of the logger or instrumentation library.
     * @returns {@link Logger}
     */ getLogger(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    }
    /** Remove the global logger provider */ disable() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
} //# sourceMappingURL=logs.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "logs",
    ()=>logs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api-logs@0.220.0/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [instrumentation] (ecmascript)");
;
;
;
const logs = __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$220$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [instrumentation] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
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
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
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
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [instrumentation] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
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
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js [instrumentation] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js [instrumentation] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js [instrumentation] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js [instrumentation] (ecmascript)");
}
}),
"[project]/dograh-1/ui/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/dograh-1/ui/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [instrumentation] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
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
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/dograh-1/ui/node_modules/.pnpm/module-details-from-path@1.0.4/node_modules/module-details-from-path/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var sep = __turbopack_context__.r("[externals]/path [external] (path, cjs)").sep;
module.exports = function(file) {
    var segments = file.split(sep);
    var index = segments.lastIndexOf('node_modules');
    if (index === -1) return;
    if (!segments[index + 1]) return;
    var scoped = segments[index + 1][0] === '@';
    var name = scoped ? segments[index + 1] + '/' + segments[index + 2] : segments[index + 1];
    var offset = scoped ? 3 : 2;
    var basedir = '';
    var lastBaseDirSegmentIndex = index + offset - 1;
    for(var i = 0; i <= lastBaseDirSegmentIndex; i++){
        if (i === lastBaseDirSegmentIndex) {
            basedir += segments[i];
        } else {
            basedir += segments[i] + sep;
        }
    }
    var path = '';
    var lastSegmentIndex = segments.length - 1;
    for(var i2 = index + offset; i2 <= lastSegmentIndex; i2++){
        if (i2 === lastSegmentIndex) {
            path += segments[i2];
        } else {
            path += segments[i2] + sep;
        }
    }
    return {
        name: name,
        basedir: basedir,
        path: path
    };
};
}),
"[project]/dograh-1/ui/node_modules/.pnpm/require-in-the-middle@8.0.1/node_modules/require-in-the-middle/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const Module = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const debug = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/index.js [instrumentation] (ecmascript)")('require-in-the-middle');
const moduleDetailsFromPath = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/module-details-from-path@1.0.4/node_modules/module-details-from-path/index.js [instrumentation] (ecmascript)");
// Using the default export is discouraged, but kept for backward compatibility.
// Use this instead:
//    const { Hook } = require('require-in-the-middle')
module.exports = Hook;
module.exports.Hook = Hook;
let builtinModules // Set<string>
;
/**
 * Is the given module a "core" module?
 * https://nodejs.org/api/modules.html#core-modules
 *
 * @type {(moduleName: string) => boolean}
 */ let isCore;
if (Module.isBuiltin) {
    isCore = Module.isBuiltin;
} else if (Module.builtinModules) {
    isCore = (moduleName)=>{
        if (moduleName.startsWith('node:')) {
            return true;
        }
        if (builtinModules === undefined) {
            builtinModules = new Set(Module.builtinModules);
        }
        return builtinModules.has(moduleName);
    };
} else {
    throw new Error('\'require-in-the-middle\' requires Node.js >=v9.3.0 or >=v8.10.0');
}
// 'foo/bar.js' or 'foo/bar/index.js' => 'foo/bar'
const normalize = /([/\\]index)?(\.js)?$/;
// Cache `onrequire`-patched exports for modules.
//
// Exports for built-in (a.k.a. "core") modules are stored in an internal Map.
//
// Exports for non-core modules are stored on a private field on the `Module`
// object in `require.cache`. This allows users to delete from `require.cache`
// to trigger a re-load (and re-run of the hook's `onrequire`) of a module the
// next time it is required.
// https://nodejs.org/docs/latest/api/all.html#all_modules_requirecache
//
// In some special cases -- e.g. some other `require()` hook swapping out
// `Module._cache` like `@babel/register` -- a non-core module won't be in
// `require.cache`. In that case this falls back to caching on the internal Map.
class ExportsCache {
    constructor(){
        this._localCache = new Map(); // <module filename or id> -> <exports>
        this._kRitmExports = Symbol('RitmExports');
    }
    has(filename, isBuiltin) {
        if (this._localCache.has(filename)) {
            return true;
        } else if (!isBuiltin) {
            const mod = __turbopack_context__.c[filename];
            return !!(mod && this._kRitmExports in mod);
        } else {
            return false;
        }
    }
    get(filename, isBuiltin) {
        const cachedExports = this._localCache.get(filename);
        if (cachedExports !== undefined) {
            return cachedExports;
        } else if (!isBuiltin) {
            const mod = __turbopack_context__.c[filename];
            return mod && mod[this._kRitmExports];
        }
    }
    set(filename, exports, isBuiltin) {
        if (isBuiltin) {
            this._localCache.set(filename, exports);
        } else if (filename in __turbopack_context__.c) {
            __turbopack_context__.c[filename][this._kRitmExports] = exports;
        } else {
            debug('non-core module is unexpectedly not in require.cache: "%s"', filename);
            this._localCache.set(filename, exports);
        }
    }
}
function Hook(modules, options, onrequire) {
    if (this instanceof Hook === false) return new Hook(modules, options, onrequire);
    if (typeof modules === 'function') {
        onrequire = modules;
        modules = null;
        options = null;
    } else if (typeof options === 'function') {
        onrequire = options;
        options = null;
    }
    if (typeof Module._resolveFilename !== 'function') {
        console.error('Error: Expected Module._resolveFilename to be a function (was: %s) - aborting!', typeof Module._resolveFilename);
        console.error('Please report this error as an issue related to Node.js %s at https://github.com/nodejs/require-in-the-middle/issues', process.version);
        return;
    }
    this._cache = new ExportsCache();
    this._unhooked = false;
    this._origRequire = Module.prototype.require;
    const self = this;
    const patching = new Set();
    const internals = options ? options.internals === true : false;
    const hasWhitelist = Array.isArray(modules);
    debug('registering require hook');
    this._require = Module.prototype.require = function(id) {
        if (self._unhooked === true) {
            // if the patched require function could not be removed because
            // someone else patched it after it was patched here, we just
            // abort and pass the request onwards to the original require
            debug('ignoring require call - module is soft-unhooked');
            return self._origRequire.apply(this, arguments);
        }
        return patchedRequire.call(this, arguments, false);
    };
    if (typeof process.getBuiltinModule === 'function') {
        this._origGetBuiltinModule = process.getBuiltinModule;
        this._getBuiltinModule = process.getBuiltinModule = function(id) {
            if (self._unhooked === true) {
                // if the patched process.getBuiltinModule function could not be removed because
                // someone else patched it after it was patched here, we just abort and pass the
                // request onwards to the original process.getBuiltinModule
                debug('ignoring process.getBuiltinModule call - module is soft-unhooked');
                return self._origGetBuiltinModule.apply(this, arguments);
            }
            return patchedRequire.call(this, arguments, true);
        };
    }
    // Preserve the original require/process.getBuiltinModule arguments in `args`
    function patchedRequire(args, coreOnly) {
        const id = args[0];
        const core = isCore(id);
        let filename // the string used for caching
        ;
        if (core) {
            filename = id;
            // If this is a builtin module that can be identified both as 'foo' and
            // 'node:foo', then prefer 'foo' as the caching key.
            if (id.startsWith('node:')) {
                const idWithoutPrefix = id.slice(5);
                if (isCore(idWithoutPrefix)) {
                    filename = idWithoutPrefix;
                }
            }
        } else if (coreOnly) {
            // `coreOnly` is `true` if this was a call to `process.getBuiltinModule`, in which case
            // we don't want to return anything if the requested `id` isn't a core module. Falling
            // back to default behaviour, which at the time of this wrting is simply returning `undefined`
            debug('call to process.getBuiltinModule with unknown built-in id');
            return self._origGetBuiltinModule.apply(this, args);
        } else {
            try {
                filename = Module._resolveFilename(id, this);
            } catch (resolveErr) {
                // If someone *else* monkey-patches before this monkey-patch, then that
                // code might expect `require(someId)` to get through so it can be
                // handled, even if `someId` cannot be resolved to a filename. In this
                // case, instead of throwing we defer to the underlying `require`.
                //
                // For example the Azure Functions Node.js worker module does this,
                // where `@azure/functions-core` resolves to an internal object.
                // https://github.com/Azure/azure-functions-nodejs-worker/blob/v3.5.2/src/setupCoreModule.ts#L46-L54
                debug('Module._resolveFilename("%s") threw %j, calling original Module.require', id, resolveErr.message);
                return self._origRequire.apply(this, args);
            }
        }
        let moduleName, basedir;
        debug('processing %s module require(\'%s\'): %s', core === true ? 'core' : 'non-core', id, filename);
        // return known patched modules immediately
        if (self._cache.has(filename, core) === true) {
            debug('returning already patched cached module: %s', filename);
            return self._cache.get(filename, core);
        }
        // Check if this module has a patcher in-progress already.
        // Otherwise, mark this module as patching in-progress.
        const isPatching = patching.has(filename);
        if (isPatching === false) {
            patching.add(filename);
        }
        const exports = coreOnly ? self._origGetBuiltinModule.apply(this, args) : self._origRequire.apply(this, args);
        // If it's already patched, just return it as-is.
        if (isPatching === true) {
            debug('module is in the process of being patched already - ignoring: %s', filename);
            return exports;
        }
        // The module has already been loaded,
        // so the patching mark can be cleaned up.
        patching.delete(filename);
        if (core === true) {
            if (hasWhitelist === true && modules.includes(filename) === false) {
                debug('ignoring core module not on whitelist: %s', filename);
                return exports // abort if module name isn't on whitelist
                ;
            }
            moduleName = filename;
        } else if (hasWhitelist === true && modules.includes(filename)) {
            // whitelist includes the absolute path to the file including extension
            const parsedPath = path.parse(filename);
            moduleName = parsedPath.name;
            basedir = parsedPath.dir;
        } else {
            const stat = moduleDetailsFromPath(filename);
            if (stat === undefined) {
                debug('could not parse filename: %s', filename);
                return exports // abort if filename could not be parsed
                ;
            }
            moduleName = stat.name;
            basedir = stat.basedir;
            // Ex: require('foo/lib/../bar.js')
            // moduleName = 'foo'
            // fullModuleName = 'foo/bar'
            const fullModuleName = resolveModuleName(stat);
            debug('resolved filename to module: %s (id: %s, resolved: %s, basedir: %s)', moduleName, id, fullModuleName, basedir);
            let matchFound = false;
            if (hasWhitelist) {
                if (!id.startsWith('.') && modules.includes(id)) {
                    // Not starting with '.' means `id` is identifying a module path,
                    // as opposed to a local file path. (Note: I'm not sure about
                    // absolute paths, but those are handled above.)
                    // If this `id` is in `modules`, then this could be a match to an
                    // package "exports" entry point that wouldn't otherwise match below.
                    moduleName = id;
                    matchFound = true;
                }
                // abort if module name isn't on whitelist
                if (!modules.includes(moduleName) && !modules.includes(fullModuleName)) {
                    return exports;
                }
                if (modules.includes(fullModuleName) && fullModuleName !== moduleName) {
                    // if we get to this point, it means that we're requiring a whitelisted sub-module
                    moduleName = fullModuleName;
                    matchFound = true;
                }
            }
            if (!matchFound) {
                // figure out if this is the main module file, or a file inside the module
                let res;
                try {
                    res = (()=>{
                        const e = new Error("Cannot find module as expression is too dynamic");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                } catch (e) {
                    debug('could not resolve module: %s', moduleName);
                    self._cache.set(filename, exports, core);
                    return exports // abort if module could not be resolved (e.g. no main in package.json and no index.js file)
                    ;
                }
                if (res !== filename) {
                    // this is a module-internal file
                    if (internals === true) {
                        // use the module-relative path to the file, prefixed by original module name
                        moduleName = moduleName + path.sep + path.relative(basedir, filename);
                        debug('preparing to process require of internal file: %s', moduleName);
                    } else {
                        debug('ignoring require of non-main module file: %s', res);
                        self._cache.set(filename, exports, core);
                        return exports // abort if not main module file
                        ;
                    }
                }
            }
        }
        // ensure that the cache entry is assigned a value before calling
        // onrequire, in case calling onrequire requires the same module.
        self._cache.set(filename, exports, core);
        debug('calling require hook: %s', moduleName);
        const patchedExports = onrequire(exports, moduleName, basedir);
        self._cache.set(filename, patchedExports, core);
        debug('returning module: %s', moduleName);
        return patchedExports;
    }
}
Hook.prototype.unhook = function() {
    this._unhooked = true;
    if (this._require === Module.prototype.require) {
        Module.prototype.require = this._origRequire;
        debug('require unhook successful');
    } else {
        debug('require unhook unsuccessful');
    }
    if (process.getBuiltinModule !== undefined) {
        if (this._getBuiltinModule === process.getBuiltinModule) {
            process.getBuiltinModule = this._origGetBuiltinModule;
            debug('process.getBuiltinModule unhook successful');
        } else {
            debug('process.getBuiltinModule unhook unsuccessful');
        }
    }
};
function resolveModuleName(stat) {
    const normalizedPath = path.sep !== '/' ? stat.path.split(path.sep).join('/') : stat.path;
    return path.posix.join(stat.name, normalizedPath).replace(normalize, '');
}
}),
"[project]/dograh-1/ui/node_modules/.pnpm/import-in-the-middle@3.4.0/node_modules/import-in-the-middle/lib/register.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.
const importHooks = [] // TODO should this be a Set?
;
const setters = new WeakMap();
const getters = new WeakMap();
const specifiers = new Map();
const toHook = [];
const proxyHandler = {
    set (target, name, value) {
        const set = setters.get(target);
        const setter = set && set[name];
        if (typeof setter === 'function') {
            return setter(value);
        }
        // If a module doesn't export the property being assigned (e.g. no default
        // export), there is no setter to call. Don't crash userland code.
        return true;
    },
    get (target, name) {
        if (name === Symbol.toStringTag) {
            return 'Module';
        }
        const getter = getters.get(target)[name];
        if (typeof getter === 'function') {
            return getter();
        }
    },
    defineProperty (target, property, descriptor) {
        if (!('value' in descriptor)) {
            throw new Error('Getters/setters are not supported for exports property descriptors.');
        }
        const set = setters.get(target);
        const setter = set && set[property];
        if (typeof setter === 'function') {
            return setter(descriptor.value);
        }
        return true;
    }
};
function register(name, namespace, set, get, specifier) {
    specifiers.set(name, specifier);
    setters.set(namespace, set);
    getters.set(namespace, get);
    const proxy = new Proxy(namespace, proxyHandler);
    importHooks.forEach((hook)=>hook(name, proxy, specifier));
    toHook.push([
        name,
        proxy,
        specifier
    ]);
}
// Delays (ms) for re-reading exports that were still in their temporal dead zone
// when the wrapper first ran (circular imports). Retried on a microtask first,
// then at these intervals; unref'd so best-effort retries never hold the process
// open. Frozen once at module load rather than rebuilt per wrapper.
const RETRY_DELAYS = [
    0,
    10,
    50
];
/**
 * Per-wrapped-module state a generated wrapper builds once to expose its exports
 * through iitm's proxy. Each wrapper holds a local binding per export plus
 * `write`/`read` closures over it; `bind` seeds that binding from the real
 * module and installs the proxy's `set`/`get` for the name, and `flush` resolves
 * any export that was undefined (circular import) once it becomes available.
 *
 * This is the boilerplate the wrapper used to inline in full per module. Hoisting
 * it here compiles it once instead of once per wrapped module and keeps the
 * per-export bind call site monomorphic.
 */ class ModuleBinder {
    // Mimics a Module namespace object (https://tc39.es/ecma262/#sec-module-namespace-objects).
    namespace = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    set = {};
    get = {};
    #overridden = Object.create(null);
    #pending = [];
    /**
   * Seeds `key` from `source` and installs its proxy accessors. A value that is
   * undefined or throws `ReferenceError` (temporal dead zone during a circular
   * import) is deferred to `flush`; any other throw propagates.
   *
   * @param {string} key The export name.
   * @param {object} source The real module namespace to read the value from.
   * @param {(value: unknown) => void} write Assigns the wrapper's local binding.
   * @param {() => unknown} read Reads the wrapper's local binding.
   * @param {boolean} useFallback Fall back to `source.default` (the synthetic
   * `module.exports` name a builtin does not expose on its ESM namespace).
   * @returns {void}
   */ bind(key, source, write, read, useFallback) {
        const readSource = useFallback ? ()=>source[key] ?? source.default : ()=>source[key];
        this.#overridden[key] = false;
        let deferred = false;
        try {
            const value = readSource();
            write(value);
            this.namespace[key] = value;
        } catch (error) {
            if (!(error instanceof ReferenceError)) throw error;
            deferred = true;
        }
        if (deferred || read() === undefined) {
            this.#pending.push(this.#makeUpdater(key, readSource, write));
        }
        this.set[key] = (value)=>{
            this.#overridden[key] = true;
            write(value);
            return true;
        };
        this.get[key] = read;
    }
    /**
   * @param {string} key The export name to update.
   * @param {() => unknown} readSource Reads the current value from the real module.
   * @param {(value: unknown) => void} write Assigns the wrapper's local binding.
   * @returns {() => boolean} Updater returning whether the value is now settled.
   */ #makeUpdater(key, readSource, write) {
        return ()=>{
            if (this.#overridden[key] === true) return true;
            try {
                const value = readSource();
                if (value !== undefined) {
                    write(value);
                    this.namespace[key] = value;
                    return true;
                }
                return false;
            } catch (error) {
                if (error instanceof ReferenceError) return false;
                // Only reached if a getter starts throwing a non-ReferenceError after the
                // initial bind read already succeeded or deferred; surfaces in flush's
                // microtask. Kept as-is from the inline wrapper.
                /* c8 ignore next */ throw error;
            }
        };
    }
    #flushOnce() {
        const next = [];
        for (const updater of this.#pending){
            // If it still throws ReferenceError, keep it for the (single) next attempt.
            if (updater() !== true) next.push(updater);
        }
        this.#pending = next;
    }
    /**
   * Resolves exports deferred by `bind` (undefined or TDZ at wrapper-eval time).
   * Retries on a microtask, then at `RETRY_DELAYS`, giving up afterwards to avoid
   * unbounded retries. A no-op when nothing was deferred.
   *
   * @returns {void}
   */ flush() {
        if (this.#pending.length === 0) return;
        queueMicrotask(()=>{
            this.#flushOnce();
            this.#scheduleRetry(0);
        });
    }
    /**
   * @param {number} attempt Index into `RETRY_DELAYS` for the next retry.
   * @returns {void}
   */ #scheduleRetry(attempt) {
        if (this.#pending.length === 0) return;
        if (attempt >= RETRY_DELAYS.length) {
            // Give up: leave exports as-is to avoid unbounded retries.
            this.#pending = [];
            return;
        }
        const timer = setTimeout(()=>{
            this.#flushOnce();
            this.#scheduleRetry(attempt + 1);
        }, RETRY_DELAYS[attempt]);
        // Don't keep the process alive just for best-effort retries.
        if (timer && typeof timer.unref === 'function') timer.unref();
    }
}
exports.register = register;
exports.ModuleBinder = ModuleBinder;
exports.importHooks = importHooks;
exports.specifiers = specifiers;
exports.toHook = toHook;
}),
"[project]/dograh-1/ui/node_modules/.pnpm/import-in-the-middle@3.4.0/node_modules/import-in-the-middle/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const moduleDetailsFromPath = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/module-details-from-path@1.0.4/node_modules/module-details-from-path/index.js [instrumentation] (ecmascript)");
const { fileURLToPath } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { MessageChannel } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
let { isBuiltin } = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
if (!isBuiltin) {
    isBuiltin = ()=>true;
}
const { importHooks, specifiers, toHook } = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/import-in-the-middle@3.4.0/node_modules/import-in-the-middle/lib/register.js [instrumentation] (ecmascript)");
/**
 * Checks turbopack specifiers separately (for Next.js 16+).
 *
 * If turbopack is used, specifiers will have an additional hash appended to the end.
 * Something like "ai" might become "ai-5e7181a616786b24". This only happens in Next.js 16+.
 * Just checking if the baseDir ends with this new specifier won't match, as the baseDir still has the plain package.
 *
 * This logic isolates a new check for checking the actual name in the case turbopack is being used.
 *
 * @param specifier {string}
 * @param baseDir {string}
 */ function isTurbopackSpecifier(specifier, baseDir) {
    const usingTurbopack = ("TURBOPACK compile-time value", true) ?? process.argv.includes('--turbo');
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const specifierWithoutTurbopackHash = specifier.slice(0, specifier.lastIndexOf('-'));
    return baseDir.endsWith(specifierWithoutTurbopackHash);
}
function addHook(hook) {
    importHooks.push(hook);
    toHook.forEach(([name, namespace, specifier])=>hook(name, namespace, specifier));
}
function removeHook(hook) {
    const index = importHooks.indexOf(hook);
    if (index > -1) {
        importHooks.splice(index, 1);
    }
}
function callHookFn(hookFn, namespace, name, baseDir) {
    const newDefault = hookFn(namespace, name, baseDir);
    if (newDefault && newDefault !== namespace) {
        // Only ESM modules that actually export `default` can have it reassigned.
        // Some hooks return a value unconditionally; avoid crashing when the module
        // has no default export (see issue #188).
        if ('default' in namespace) {
            namespace.default = newDefault;
        }
    }
}
let sendModulesToLoader;
/**
 * EXPERIMENTAL
 * This feature is experimental and may change in minor versions.
 * **NOTE** This feature is incompatible with the {internals: true} Hook option.
 *
 * Creates a message channel with a port that can be used to add hooks to the
 * list of exclusively included modules.
 *
 * This can be used to only wrap modules that are Hook'ed, however modules need
 * to be hooked before they are imported.
 *
 * ```ts
 * import { register } from 'module'
 * import { Hook, createAddHookMessageChannel } from 'import-in-the-middle'
 *
 * const { registerOptions, waitForAllMessagesAcknowledged } = createAddHookMessageChannel()
 *
 * register('import-in-the-middle/hook.mjs', import.meta.url, registerOptions)
 *
 * Hook(['fs'], (exported, name, baseDir) => {
 *   // Instrument the fs module
 * })
 *
 * // Ensure that the loader has acknowledged all the modules
 * // before we allow execution to continue
 * await waitForAllMessagesAcknowledged()
 * ```
 */ function createAddHookMessageChannel() {
    const { port1, port2 } = new MessageChannel();
    let pendingAckCount = 0;
    let resolveFn;
    sendModulesToLoader = (modules)=>{
        pendingAckCount++;
        port1.postMessage(modules);
    };
    port1.on('message', ()=>{
        pendingAckCount--;
        if (resolveFn && pendingAckCount <= 0) {
            resolveFn();
        }
    }).unref();
    function waitForAllMessagesAcknowledged() {
        // This timer is to prevent the process from exiting with code 13:
        // 13: Unsettled Top-Level Await.
        const timer = setInterval(()=>{}, 1000);
        const promise = new Promise((resolve)=>{
            resolveFn = resolve;
        }).then(()=>{
            clearInterval(timer);
        });
        if (pendingAckCount === 0) {
            resolveFn();
        }
        return promise;
    }
    const addHookMessagePort = port2;
    const registerOptions = {
        data: {
            addHookMessagePort,
            include: []
        },
        transferList: [
            addHookMessagePort
        ]
    };
    return {
        registerOptions,
        addHookMessagePort,
        waitForAllMessagesAcknowledged
    };
}
function Hook(modules, options, hookFn) {
    if (this instanceof Hook === false) return new Hook(modules, options, hookFn);
    if (typeof modules === 'function') {
        hookFn = modules;
        modules = null;
        options = null;
    } else if (typeof options === 'function') {
        hookFn = options;
        options = null;
    }
    const internals = options ? options.internals === true : false;
    if (sendModulesToLoader && Array.isArray(modules)) {
        sendModulesToLoader(modules);
    }
    this._iitmHook = (name, namespace, specifier)=>{
        const loadUrl = name;
        const isNodeUrl = loadUrl.startsWith('node:');
        let filePath, baseDir;
        if (isNodeUrl) {
            // Normalize builtin module name to *not* have 'node:' prefix, unless
            // required, as it is for 'node:test' and some others.  `module.isBuiltin`
            // is available in all Node.js versions that have node:-only modules.
            const unprefixed = name.slice(5);
            if (isBuiltin(unprefixed)) {
                name = unprefixed;
            }
        } else if (loadUrl.startsWith('file://')) {
            const stackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 0;
            try {
                filePath = fileURLToPath(name);
                name = filePath;
            } catch (e) {}
            Error.stackTraceLimit = stackTraceLimit;
            if (filePath) {
                const details = moduleDetailsFromPath(filePath);
                if (details) {
                    name = details.name;
                    baseDir = details.basedir;
                }
            }
        }
        if (modules) {
            for (const matchArg of modules){
                if (filePath && matchArg === filePath) {
                    // abspath match
                    callHookFn(hookFn, namespace, filePath, undefined);
                } else if (matchArg === name) {
                    if (!baseDir) {
                        // built-in module (or unexpected non file:// name?)
                        callHookFn(hookFn, namespace, name, baseDir);
                    } else if (baseDir.endsWith(specifiers.get(loadUrl)) || isTurbopackSpecifier(specifiers.get(loadUrl), baseDir)) {
                        // An import of the top-level module (e.g. `import 'ioredis'`).
                        // Note: Slight behaviour difference from RITM. RITM uses
                        // `require.resolve(name)` to see if filename is the module
                        // main file, which will catch `require('ioredis/built/index.js')`.
                        // The check here will not catch `import 'ioredis/built/index.js'`.
                        callHookFn(hookFn, namespace, name, baseDir);
                    } else if (internals) {
                        const internalPath = name + path.sep + path.relative(baseDir, filePath);
                        callHookFn(hookFn, namespace, internalPath, baseDir);
                    }
                } else if (matchArg === specifier) {
                    callHookFn(hookFn, namespace, specifier, baseDir);
                }
            }
        } else {
            callHookFn(hookFn, namespace, name, baseDir);
        }
    };
    addHook(this._iitmHook);
}
Hook.prototype.unhook = function() {
    removeHook(this._iitmHook);
};
module.exports = Hook;
module.exports.Hook = Hook;
module.exports.addHook = addHook;
module.exports.removeHook = removeHook;
module.exports.createAddHookMessageChannel = createAddHookMessageChannel;
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/index-shim.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([]);
;
;
;
;
 //# sourceMappingURL=index-shim.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "buildSamplerFromEnv",
    ()=>buildSamplerFromEnv,
    "loadDefaultConfig",
    ()=>loadDefaultConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/AlwaysOffSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/AlwaysOnSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/ParentBasedSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/TraceIdRatioBasedSampler.js [instrumentation] (ecmascript)");
;
;
;
var TracesSamplerValues;
(function(TracesSamplerValues) {
    TracesSamplerValues["AlwaysOff"] = "always_off";
    TracesSamplerValues["AlwaysOn"] = "always_on";
    TracesSamplerValues["ParentBasedAlwaysOff"] = "parentbased_always_off";
    TracesSamplerValues["ParentBasedAlwaysOn"] = "parentbased_always_on";
    TracesSamplerValues["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
    TracesSamplerValues["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));
const DEFAULT_RATIO = 1;
function loadDefaultConfig() {
    return {
        sampler: buildSamplerFromEnv(),
        forceFlushTimeoutMillis: 30000,
        generalLimits: {
            attributeValueLengthLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? 128
        },
        spanLimits: {
            attributeValueLengthLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? 128,
            linkCountLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_LINK_COUNT_LIMIT') ?? 128,
            eventCountLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_EVENT_COUNT_LIMIT') ?? 128,
            attributePerEventCountLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT') ?? 128,
            attributePerLinkCountLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT') ?? 128
        }
    };
}
function buildSamplerFromEnv() {
    const sampler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getStringFromEnv"])('OTEL_TRACES_SAMPLER') ?? TracesSamplerValues.ParentBasedAlwaysOn;
    switch(sampler){
        case TracesSamplerValues.AlwaysOn:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]();
        case TracesSamplerValues.AlwaysOff:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]();
        case TracesSamplerValues.ParentBasedAlwaysOn:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]()
            });
        case TracesSamplerValues.ParentBasedAlwaysOff:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOffSampler"]()
            });
        case TracesSamplerValues.TraceIdRatio:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceIdRatioBasedSampler"](getSamplerProbabilityFromEnv());
        case TracesSamplerValues.ParentBasedTraceIdRatio:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceIdRatioBasedSampler"](getSamplerProbabilityFromEnv())
            });
        default:
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${TracesSamplerValues.ParentBasedAlwaysOn}".`);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ParentBasedSampler"]({
                root: new __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOnSampler"]()
            });
    }
}
function getSamplerProbabilityFromEnv() {
    const probability = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_TRACES_SAMPLER_ARG');
    if (probability == null) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error(`OTEL_TRACES_SAMPLER_ARG=${probability} was given, but it is out of range ([0..1]), defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    return probability;
} //# sourceMappingURL=config.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "DEFAULT_ATTRIBUTE_COUNT_LIMIT",
    ()=>DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    "DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    ()=>DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    "reconfigureLimits",
    ()=>reconfigureLimits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation] (ecmascript)");
;
const DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
const DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
function reconfigureLimits(userConfig) {
    const spanLimits = Object.assign({}, userConfig.spanLimits);
    /**
     * Reassign span attribute count limit to use first non null value defined by user or use default value
     */ spanLimits.attributeCountLimit = userConfig.spanLimits?.attributeCountLimit ?? userConfig.generalLimits?.attributeCountLimit ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? DEFAULT_ATTRIBUTE_COUNT_LIMIT;
    /**
     * Reassign span attribute value length limit to use first non null value defined by user or use default value
     */ spanLimits.attributeValueLengthLimit = userConfig.spanLimits?.attributeValueLengthLimit ?? userConfig.generalLimits?.attributeValueLengthLimit ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT;
    return Object.assign({}, userConfig, {
        spanLimits
    });
} //# sourceMappingURL=utility.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider-shim.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "BasicTracerProvider",
    ()=>BasicTracerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/merge.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$utility$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$TracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/TracerProvider.js [instrumentation] (ecmascript)");
;
;
;
;
class BasicTracerProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$TracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TracerProvider"] {
    constructor(config = {}){
        const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["merge"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$config$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["loadDefaultConfig"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$utility$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["reconfigureLimits"])(config));
        delete mergedConfig.generalLimits;
        super(mergedConfig);
    }
} //# sourceMappingURL=BasicTracerProvider-shim.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/BatchSpanProcessor-shim.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "BatchSpanProcessor",
    ()=>BatchSpanProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$platform$2f$node$2f$export$2f$BatchSpanProcessor$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/platform/node/export/BatchSpanProcessor.js [instrumentation] (ecmascript)");
;
;
class BatchSpanProcessor extends __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$platform$2f$node$2f$export$2f$BatchSpanProcessor$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BatchSpanProcessor"] {
    constructor(exporter, config){
        if (!config) {
            config = {};
        }
        const envFallbacks = [
            [
                'maxExportBatchSize',
                'OTEL_BSP_MAX_EXPORT_BATCH_SIZE'
            ],
            [
                'maxQueueSize',
                'OTEL_BSP_MAX_QUEUE_SIZE'
            ],
            [
                'scheduledDelayMillis',
                'OTEL_BSP_SCHEDULE_DELAY'
            ],
            [
                'exportTimeoutMillis',
                'OTEL_BSP_EXPORT_TIMEOUT'
            ]
        ];
        for (const [configName, envName] of envFallbacks){
            if (config[configName] === undefined) {
                const envFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getNumberFromEnv"])(envName);
                if (envFallback !== undefined) {
                    config[configName] = envFallback;
                }
            }
        }
        super({
            exporter,
            ...config
        });
    }
} //# sourceMappingURL=BatchSpanProcessor-shim.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/SimpleSpanProcessor-shim.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "SimpleSpanProcessor",
    ()=>SimpleSpanProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$SimpleSpanProcessor$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/export/SimpleSpanProcessor.js [instrumentation] (ecmascript)");
;
class SimpleSpanProcessor extends __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$SimpleSpanProcessor$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SimpleSpanProcessor"] {
    constructor(exporter){
        super({
            exporter
        });
    }
} //# sourceMappingURL=SimpleSpanProcessor-shim.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/index-shim.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlwaysOffSampler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOffSampler"],
    "AlwaysOnSampler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["AlwaysOnSampler"],
    "BasicTracerProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BasicTracerProvider$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BasicTracerProvider"],
    "BatchSpanProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BatchSpanProcessor$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BatchSpanProcessor"],
    "ConsoleSpanExporter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$ConsoleSpanExporter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ConsoleSpanExporter"],
    "InMemorySpanExporter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$InMemorySpanExporter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InMemorySpanExporter"],
    "NoopSpanProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$NoopSpanProcessor$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopSpanProcessor"],
    "ParentBasedSampler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ParentBasedSampler"],
    "RandomIdGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$platform$2f$node$2f$RandomIdGenerator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["RandomIdGenerator"],
    "SamplingDecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SamplingDecision"],
    "SimpleSpanProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$SimpleSpanProcessor$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SimpleSpanProcessor"],
    "TraceIdRatioBasedSampler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceIdRatioBasedSampler"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$index$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/index-shim.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BasicTracerProvider$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider-shim.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$BatchSpanProcessor$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/BatchSpanProcessor-shim.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$2d$base$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$build$2f$esm$2f$SimpleSpanProcessor$2d$shim$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/SimpleSpanProcessor-shim.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$ConsoleSpanExporter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/export/ConsoleSpanExporter.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$platform$2f$node$2f$RandomIdGenerator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/platform/node/RandomIdGenerator.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$InMemorySpanExporter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/export/InMemorySpanExporter.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$export$2f$NoopSpanProcessor$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/export/NoopSpanProcessor.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOffSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/AlwaysOffSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$AlwaysOnSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/AlwaysOnSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$ParentBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/ParentBasedSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$sampler$2f$TraceIdRatioBasedSampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/sampler/TraceIdRatioBasedSampler.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$sdk$2d$trace$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2f$build$2f$esm$2f$Sampler$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace/build/esm/Sampler.js [instrumentation] (ecmascript)");
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+resources@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/default-service-name.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "_clearDefaultServiceNameCache",
    ()=>_clearDefaultServiceNameCache,
    "defaultServiceName",
    ()=>defaultServiceName
]);
let serviceName;
function defaultServiceName() {
    if (serviceName === undefined) {
        try {
            const argv0 = globalThis.process.argv0;
            serviceName = argv0 ? `unknown_service:${argv0}` : 'unknown_service';
        } catch  {
            serviceName = 'unknown_service';
        }
    }
    return serviceName;
}
function _clearDefaultServiceNameCache() {
    serviceName = undefined;
} //# sourceMappingURL=default-service-name.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+resources@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "isPromiseLike",
    ()=>isPromiseLike
]);
const isPromiseLike = (val)=>{
    return val !== null && typeof val === 'object' && typeof val.then === 'function';
}; //# sourceMappingURL=utils.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+resources@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "defaultResource",
    ()=>defaultResource,
    "emptyResource",
    ()=>emptyResource,
    "resourceFromAttributes",
    ()=>resourceFromAttributes,
    "resourceFromDetectedResource",
    ()=>resourceFromDetectedResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+semantic-conventions@1.43.0/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$default$2d$service$2d$name$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+resources@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/default-service-name.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+resources@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/utils.js [instrumentation] (ecmascript)");
;
;
;
;
;
class ResourceImpl {
    _rawAttributes;
    _asyncAttributesPending = false;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(attributes, options) {
        const res = new ResourceImpl({}, options);
        res._rawAttributes = guardedRawAttributes(attributes);
        res._asyncAttributesPending = attributes.filter(([_, val])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPromiseLike"])(val)).length > 0;
        return res;
    }
    constructor(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ resource, options){
        const attributes = resource.attributes ?? {};
        this._rawAttributes = Object.entries(attributes).map(([k, v])=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
                // side-effect
                this._asyncAttributesPending = true;
            }
            return [
                k,
                v
            ];
        });
        this._rawAttributes = guardedRawAttributes(this._rawAttributes);
        this._schemaUrl = validateSchemaUrl(options?.schemaUrl);
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
        if (!this.asyncAttributesPending) {
            return;
        }
        for(let i = 0; i < this._rawAttributes.length; i++){
            const [k, v] = this._rawAttributes[i];
            this._rawAttributes[i] = [
                k,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPromiseLike"])(v) ? await v : v
            ];
        }
        this._asyncAttributesPending = false;
    }
    get attributes() {
        if (this.asyncAttributesPending) {
            __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].error('Accessing resource attributes before async attributes settled');
        }
        if (this._memoizedAttributes) {
            return this._memoizedAttributes;
        }
        const attrs = {};
        for (const [k, v] of this._rawAttributes){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].debug(`Unsettled resource attribute ${k} skipped`);
                continue;
            }
            if (v != null) {
                attrs[k] ??= v;
            }
        }
        // only memoize output if all attributes are settled
        if (!this._asyncAttributesPending) {
            this._memoizedAttributes = attrs;
        }
        return attrs;
    }
    getRawAttributes() {
        return this._rawAttributes;
    }
    get schemaUrl() {
        return this._schemaUrl;
    }
    merge(resource) {
        if (resource == null) return this;
        // Order is important
        // Spec states incoming attributes override existing attributes
        const mergedSchemaUrl = mergeSchemaUrl(this, resource);
        const mergedOptions = mergedSchemaUrl ? {
            schemaUrl: mergedSchemaUrl
        } : undefined;
        return ResourceImpl.FromAttributeList([
            ...resource.getRawAttributes(),
            ...this.getRawAttributes()
        ], mergedOptions);
    }
}
function resourceFromAttributes(attributes, options) {
    return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
function resourceFromDetectedResource(detectedResource, options) {
    return new ResourceImpl(detectedResource, options);
}
function emptyResource() {
    return resourceFromAttributes({});
}
function defaultResource() {
    return resourceFromAttributes({
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_SERVICE_NAME"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$default$2d$service$2d$name$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["defaultServiceName"])(),
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]]: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]],
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]]: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]],
        [__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]: __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$core$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$semantic$2d$conventions$40$1$2e$43$2e$0$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]
    });
}
function guardedRawAttributes(attributes) {
    return attributes.map(([k, v])=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$11$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
            return [
                k,
                v.catch((err)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].debug('promise rejection for resource attribute: %s - %s', k, err);
                    return undefined;
                })
            ];
        }
        return [
            k,
            v
        ];
    });
}
function validateSchemaUrl(schemaUrl) {
    if (typeof schemaUrl === 'string' || schemaUrl === undefined) {
        return schemaUrl;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn('Schema URL must be string or undefined, got %s. Schema URL will be ignored.', schemaUrl);
    return undefined;
}
function mergeSchemaUrl(old, updating) {
    const oldSchemaUrl = old?.schemaUrl;
    const updatingSchemaUrl = updating?.schemaUrl;
    const isOldEmpty = oldSchemaUrl === undefined || oldSchemaUrl === '';
    const isUpdatingEmpty = updatingSchemaUrl === undefined || updatingSchemaUrl === '';
    if (isOldEmpty) {
        return updatingSchemaUrl;
    }
    if (isUpdatingEmpty) {
        return oldSchemaUrl;
    }
    if (oldSchemaUrl === updatingSchemaUrl) {
        return oldSchemaUrl;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$dograh$2d$1$2f$ui$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$1$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', oldSchemaUrl, updatingSchemaUrl);
    return undefined;
} //# sourceMappingURL=ResourceImpl.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+opentelemetry@10.73.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.11.0_@open_fa4d0c3ec3b5e20c8da7d0e384f248a4/node_modules/@sentry/opentelemetry/build/cjs/asyncContextStrategy-volGaYqZ.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

const api = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/index.js [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const attributes = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+conventions@0.16.0/node_modules/@sentry/conventions/dist/attributes.cjs [instrumentation] (ecmascript)");
const sdkTraceBase = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/index-shim.js [instrumentation] (ecmascript)");
const core$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+core@2.11.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE = "sentry.parentIsRemote";
const SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = "sentry.graphql.operation";
function getParentSpanId(span) {
    if ("parentSpanId" in span) {
        return span.parentSpanId;
    } else if ("parentSpanContext" in span) {
        return span.parentSpanContext?.spanId;
    }
    return void 0;
}
function spanHasAttributes(span) {
    const castSpan = span;
    return core.isObjectLike(castSpan.attributes);
}
function spanHasKind(span) {
    const castSpan = span;
    return typeof castSpan.kind === "number";
}
function spanHasStatus(span) {
    const castSpan = span;
    return !!castSpan.status;
}
function spanHasName(span) {
    const castSpan = span;
    return !!castSpan.name;
}
function spanHasParentId(span) {
    const castSpan = span;
    return !!getParentSpanId(castSpan);
}
function spanHasEvents(span) {
    const castSpan = span;
    return Array.isArray(castSpan.events);
}
function getRequestSpanData(span) {
    if (!spanHasAttributes(span)) {
        return {};
    }
    const maybeUrlAttribute = span.attributes[attributes.URL_FULL] || span.attributes[attributes.HTTP_URL];
    const data = {
        url: maybeUrlAttribute,
        // eslint-disable-next-line typescript/no-deprecated
        "http.method": span.attributes[attributes.HTTP_REQUEST_METHOD] || span.attributes[attributes.HTTP_METHOD]
    };
    if (!data["http.method"] && data.url) {
        data["http.method"] = "GET";
    }
    try {
        if (typeof maybeUrlAttribute === "string") {
            const url = core.parseUrl(maybeUrlAttribute);
            data.url = core.getSanitizedUrlString(url);
            if (url.search) {
                data["http.query"] = url.search;
            }
            if (url.hash) {
                data["http.fragment"] = url.hash;
            }
        }
    } catch  {}
    return data;
}
function wrapClientClass(ClientClass) {
    class OpenTelemetryClient extends ClientClass {
        constructor(...args){
            super(...args);
        }
        /** Get the OTEL tracer. */ get tracer() {
            if (this._tracer) {
                return this._tracer;
            }
            const name = "@sentry/opentelemetry";
            const version = core.SDK_VERSION;
            const tracer = api.trace.getTracer(name, version);
            this._tracer = tracer;
            return tracer;
        }
        /**
     * @inheritDoc
     */ async flush(timeout) {
            const provider = this.traceProvider;
            await provider?.forceFlush();
            return super.flush(timeout);
        }
    }
    return OpenTelemetryClient;
}
function getSpanKind(span) {
    if (spanHasKind(span)) {
        return span.kind;
    }
    return api.SpanKind.INTERNAL;
}
const SENTRY_TRACE_HEADER = "sentry-trace";
const SENTRY_BAGGAGE_HEADER = "baggage";
const SENTRY_TRACE_STATE_DSC = "sentry.dsc";
const SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING = "sentry.sampled_not_recording";
const SENTRY_TRACE_STATE_URL = "sentry.url";
const SENTRY_TRACE_STATE_SAMPLE_RAND = "sentry.sample_rand";
const SENTRY_TRACE_STATE_SAMPLE_RATE = "sentry.sample_rate";
const SENTRY_TRACE_STATE_CHILD_IGNORED = "sentry.ignored";
const SENTRY_TRACE_STATE_SEGMENT_IGNORED = "sentry.segment_ignored";
const SENTRY_SCOPES_CONTEXT_KEY = api.createContextKey("sentry_scopes");
const SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY = api.createContextKey("sentry_fork_isolation_scope");
const SENTRY_FORK_SET_SCOPE_CONTEXT_KEY = api.createContextKey("sentry_fork_set_scope");
const SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY = api.createContextKey("sentry_fork_set_isolation_scope");
const SCOPE_CONTEXT_FIELD = "_scopeContext";
function getScopesFromContext(context) {
    return context.getValue(SENTRY_SCOPES_CONTEXT_KEY);
}
function setScopesOnContext(context, scopes) {
    return context.setValue(SENTRY_SCOPES_CONTEXT_KEY, scopes);
}
function setContextOnScope(scope, context) {
    core.addNonEnumerableProperty(scope, SCOPE_CONTEXT_FIELD, core.makeWeakRef(context));
}
function getContextFromScope(scope) {
    return core.derefWeakRef(scope[SCOPE_CONTEXT_FIELD]);
}
function isSentryRequestSpan(span) {
    if (!spanHasAttributes(span)) {
        return false;
    }
    const { attributes: attributes$1 } = span;
    const httpUrl = attributes$1[attributes.HTTP_URL] || attributes$1[attributes.URL_FULL];
    if (!httpUrl) {
        return false;
    }
    return core.isSentryRequestUrl(httpUrl.toString(), core.getClient());
}
function getSamplingDecision(spanContext) {
    const { traceFlags, traceState } = spanContext;
    const sampledNotRecording = traceState ? traceState.get(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING) === "1" : false;
    if (traceFlags === api.TraceFlags.SAMPLED) {
        return true;
    }
    if (sampledNotRecording) {
        return false;
    }
    const dscString = traceState ? traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
    const dsc = dscString ? core.baggageHeaderToDynamicSamplingContext(dscString) : void 0;
    if (dsc?.sampled === "true") {
        return true;
    }
    if (dsc?.sampled === "false") {
        return false;
    }
    return void 0;
}
function getSampledForPropagation(span, client) {
    const spanContext = span.spanContext();
    const rootSpan = core.getRootSpan(span);
    const samplingDecision = getSamplingDecision(spanContext);
    if (samplingDecision !== void 0) {
        return samplingDecision;
    }
    if (core.spanIsIgnored(rootSpan)) {
        return false;
    }
    if (!core.hasSpansEnabled(client?.getOptions()) || spanContext.isRemote || !core.spanIsSentrySpan(rootSpan)) {
        return void 0;
    }
    return core.spanIsSampled(span);
}
function inferSpanData(spanName, attributes$1, kind) {
    const httpMethod = attributes$1[attributes.HTTP_REQUEST_METHOD] || attributes$1[attributes.HTTP_METHOD];
    if (httpMethod) {
        return descriptionForHttpMethod({
            attributes: attributes$1,
            name: spanName,
            kind
        }, httpMethod);
    }
    const dbSystem = attributes$1[attributes.DB_SYSTEM_NAME] || attributes$1[attributes.DB_SYSTEM];
    const opIsCache = typeof attributes$1[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "string" && attributes$1[core.SEMANTIC_ATTRIBUTE_SENTRY_OP].startsWith("cache.");
    if (dbSystem && !opIsCache) {
        return descriptionForDbSystem({
            attributes: attributes$1,
            name: spanName
        });
    }
    const customSourceOrRoute = attributes$1[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom" ? "custom" : "route";
    const rpcService = attributes$1[attributes.RPC_SERVICE];
    if (rpcService) {
        return {
            ...getUserUpdatedNameAndSource(spanName, attributes$1, "route"),
            op: "rpc"
        };
    }
    const messagingSystem = attributes$1[attributes.MESSAGING_SYSTEM];
    if (messagingSystem) {
        return {
            ...getUserUpdatedNameAndSource(spanName, attributes$1, customSourceOrRoute),
            op: "message"
        };
    }
    const faasTrigger = attributes$1[attributes.FAAS_TRIGGER];
    if (faasTrigger) {
        return {
            ...getUserUpdatedNameAndSource(spanName, attributes$1, customSourceOrRoute),
            op: faasTrigger.toString()
        };
    }
    return {
        op: void 0,
        description: spanName,
        source: "custom"
    };
}
function parseSpanDescription(span) {
    let attributes;
    let name;
    if (spanHasAttributes(span)) {
        attributes = span.attributes;
        name = spanHasName(span) ? span.name : "<unknown>";
    } else {
        const json = typeof span.spanContext === "function" ? core.spanToJSON(span) : void 0;
        attributes = json?.data || {};
        name = spanHasName(span) ? span.name : json?.description || "<unknown>";
    }
    const kind = getSpanKind(span);
    return inferSpanData(name, attributes, kind);
}
function descriptionForDbSystem({ attributes: attributes$1, name }) {
    const userDefinedName = attributes$1[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    if (typeof userDefinedName === "string") {
        return {
            op: "db",
            description: userDefinedName,
            source: attributes$1[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || "custom"
        };
    }
    if (attributes$1[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom") {
        return {
            op: "db",
            description: name,
            source: "custom"
        };
    }
    const statement = attributes$1[attributes.DB_STATEMENT];
    const description = statement ? statement.toString() : name;
    return {
        op: "db",
        description,
        source: "task"
    };
}
function descriptionForHttpMethod({ name, kind, attributes }, httpMethod) {
    const opParts = [
        "http"
    ];
    switch(kind){
        case api.SpanKind.CLIENT:
            opParts.push("client");
            break;
        case api.SpanKind.SERVER:
            opParts.push("server");
            break;
    }
    if (attributes["sentry.http.prefetch"]) {
        opParts.push("prefetch");
    }
    const { urlPath, url, query, fragment, hasRoute } = getSanitizedUrl(attributes, kind);
    if (!urlPath) {
        return {
            ...getUserUpdatedNameAndSource(name, attributes),
            op: opParts.join(".")
        };
    }
    const graphqlOperationsAttribute = attributes[SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION];
    const baseDescription = `${httpMethod} ${urlPath}`;
    const inferredDescription = graphqlOperationsAttribute ? `${baseDescription} (${getGraphqlOperationNamesFromAttribute(graphqlOperationsAttribute)})` : baseDescription;
    const inferredSource = hasRoute || urlPath === "/" ? "route" : "url";
    const data = {};
    if (url) {
        data.url = url;
    }
    if (query) {
        data["http.query"] = query.slice(1);
    }
    if (fragment) {
        data["http.fragment"] = fragment.slice(1);
    }
    const isClientOrServerKind = kind === api.SpanKind.CLIENT || kind === api.SpanKind.SERVER;
    const origin = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] || "manual";
    const isManualSpan = !`${origin}`.startsWith("auto");
    const alreadyHasCustomSource = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom";
    const customSpanName = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    const useInferredDescription = !alreadyHasCustomSource && customSpanName == null && (isClientOrServerKind || !isManualSpan);
    const { description, source } = useInferredDescription ? {
        description: inferredDescription,
        source: inferredSource
    } : getUserUpdatedNameAndSource(name, attributes);
    return {
        op: opParts.join("."),
        description,
        source,
        data
    };
}
function getGraphqlOperationNamesFromAttribute(attr) {
    if (Array.isArray(attr)) {
        const sorted = attr.slice().sort();
        if (sorted.length <= 5) {
            return sorted.join(", ");
        } else {
            return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
        }
    }
    return `${attr}`;
}
function getSanitizedUrl(attributes$1, kind) {
    const httpTarget = attributes$1[attributes.HTTP_TARGET];
    const httpUrl = attributes$1[attributes.HTTP_URL] || attributes$1[attributes.URL_FULL];
    const httpRoute = attributes$1[attributes.HTTP_ROUTE];
    const parsedUrl = typeof httpUrl === "string" ? core.parseUrl(httpUrl) : void 0;
    const url = parsedUrl ? core.getSanitizedUrlString(parsedUrl) : void 0;
    const query = parsedUrl?.search || void 0;
    const fragment = parsedUrl?.hash || void 0;
    if (typeof httpRoute === "string") {
        return {
            urlPath: httpRoute,
            url,
            query,
            fragment,
            hasRoute: true
        };
    }
    if (kind === api.SpanKind.SERVER && typeof httpTarget === "string") {
        return {
            urlPath: core.stripUrlQueryAndFragment(httpTarget),
            url,
            query,
            fragment,
            hasRoute: false
        };
    }
    if (parsedUrl) {
        return {
            urlPath: url,
            url,
            query,
            fragment,
            hasRoute: false
        };
    }
    if (typeof httpTarget === "string") {
        return {
            urlPath: core.stripUrlQueryAndFragment(httpTarget),
            url,
            query,
            fragment,
            hasRoute: false
        };
    }
    return {
        urlPath: void 0,
        url,
        query,
        fragment,
        hasRoute: false
    };
}
function getUserUpdatedNameAndSource(originalName, attributes, fallbackSource = "custom") {
    const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || fallbackSource;
    const description = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    if (description && typeof description === "string") {
        return {
            description,
            source
        };
    }
    return {
        description: originalName,
        source
    };
}
function enhanceDscWithOpenTelemetryRootSpanName(client) {
    client.on("createDsc", (dsc, rootSpan)=>{
        if (!rootSpan) {
            return;
        }
        const jsonSpan = core.spanToJSON(rootSpan);
        const attributes = jsonSpan.data;
        const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
        const sampled = getSampledForPropagation(rootSpan, client);
        if (sampled === false) {
            delete dsc.transaction;
        } else if (jsonSpan.description) {
            const { description } = parseSpanDescription(rootSpan);
            if (source !== "url" && description) {
                dsc.transaction = description;
            }
        }
        if (core.hasSpansEnabled()) {
            dsc.sampled = sampled == void 0 ? void 0 : String(sampled);
        }
    });
}
function getActiveSpan() {
    return api.trace.getActiveSpan();
}
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
class TraceState {
    constructor(){
        this._internalState = /* @__PURE__ */ new Map();
    }
    /** @inheritDoc */ set(key, value) {
        const next = this._clone();
        if (next._internalState.has(key)) {
            next._internalState.delete(key);
        }
        next._internalState.set(key, value);
        return next;
    }
    /** @inheritDoc */ unset(key) {
        const next = this._clone();
        next._internalState.delete(key);
        return next;
    }
    /** @inheritDoc */ get(key) {
        return this._internalState.get(key);
    }
    /** @inheritDoc */ serialize() {
        return Array.from(this._internalState.keys()).reverse().map((key)=>`${key}=${this._internalState.get(key)}`).join(",");
    }
    _clone() {
        const next = new TraceState();
        next._internalState = new Map(this._internalState);
        return next;
    }
}
function makeTraceState({ dsc, sampled }) {
    const dscString = dsc ? core.dynamicSamplingContextToSentryBaggageHeader(dsc) : void 0;
    const traceStateBase = new TraceState();
    const traceStateWithDsc = dscString ? traceStateBase.set(SENTRY_TRACE_STATE_DSC, dscString) : traceStateBase;
    return sampled === false ? traceStateWithDsc.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1") : traceStateWithDsc;
}
const setupElements = /* @__PURE__ */ new Set();
function openTelemetrySetupCheck() {
    return Array.from(setupElements);
}
function setIsSetup(element) {
    setupElements.add(element);
}
class SentryPropagator extends core$1.W3CBaggagePropagator {
    constructor(){
        super();
        setIsSetup("SentryPropagator");
        this._urlMatchesTargetsMap = new core.LRUMap(100);
    }
    /**
   * @inheritDoc
   */ inject(context2, carrier, setter) {
        if (core$1.isTracingSuppressed(context2)) {
            DEBUG_BUILD && core.debug.log("[Tracing] Not injecting trace data for url because tracing is suppressed.");
            return;
        }
        const activeSpan = api.trace.getSpan(context2);
        const url = activeSpan && getCurrentURL(activeSpan);
        const { tracePropagationTargets, propagateTraceparent } = core.getClient()?.getOptions() || {};
        if (!core.shouldPropagateTraceForUrl(url, tracePropagationTargets, this._urlMatchesTargetsMap)) {
            DEBUG_BUILD && core.debug.log("[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:", url);
            return;
        }
        const existingBaggageHeader = getExistingBaggage(carrier);
        const existingSentryTraceHeader = getExistingSentryTrace(carrier);
        let baggage = api.propagation.getBaggage(context2) || api.propagation.createBaggage({});
        const { dynamicSamplingContext, traceId, spanId, sampled } = getInjectionData(context2);
        if (existingBaggageHeader) {
            const baggageEntries = core.parseBaggageHeader(existingBaggageHeader);
            if (baggageEntries) {
                Object.entries(baggageEntries).forEach(([key, value])=>{
                    if (!existingSentryTraceHeader && key.startsWith(core.SENTRY_BAGGAGE_KEY_PREFIX)) {
                        return;
                    }
                    baggage = baggage.setEntry(key, {
                        value
                    });
                });
            }
        }
        if (!existingSentryTraceHeader && dynamicSamplingContext) {
            baggage = Object.entries(dynamicSamplingContext).reduce((b, [dscKey, dscValue])=>{
                if (dscValue) {
                    return b.setEntry(`${core.SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`, {
                        value: dscValue
                    });
                }
                return b;
            }, baggage);
        }
        if (!existingSentryTraceHeader && traceId && traceId !== api.INVALID_TRACEID) {
            setter.set(carrier, SENTRY_TRACE_HEADER, core.generateSentryTraceHeader(traceId, spanId, sampled));
            if (propagateTraceparent) {
                setter.set(carrier, "traceparent", core.generateTraceparentHeader(traceId, spanId, sampled));
            }
        }
        super.inject(api.propagation.setBaggage(context2, baggage), carrier, setter);
    }
    /**
   * @inheritDoc
   */ extract(context2, carrier, getter) {
        const maybeSentryTraceHeader = getter.get(carrier, SENTRY_TRACE_HEADER);
        const baggage = getter.get(carrier, SENTRY_BAGGAGE_HEADER);
        const sentryTrace = maybeSentryTraceHeader ? Array.isArray(maybeSentryTraceHeader) ? maybeSentryTraceHeader[0] : maybeSentryTraceHeader : void 0;
        return ensureScopesOnContext(getContextWithRemoteActiveSpan(context2, {
            sentryTrace,
            baggage
        }));
    }
    /**
   * @inheritDoc
   */ fields() {
        return [
            SENTRY_TRACE_HEADER,
            SENTRY_BAGGAGE_HEADER,
            "traceparent"
        ];
    }
}
function getInjectionData(context2, options = {}) {
    const span = api.trace.getSpan(context2);
    if (span?.spanContext().isRemote) {
        const spanContext = span.spanContext();
        const dynamicSamplingContext2 = core.getDynamicSamplingContextFromSpan(span);
        return {
            dynamicSamplingContext: dynamicSamplingContext2,
            traceId: spanContext.traceId,
            spanId: void 0,
            sampled: getSamplingDecision(spanContext)
        };
    }
    if (span) {
        const spanContext = span.spanContext();
        const dynamicSamplingContext2 = core.getDynamicSamplingContextFromSpan(span);
        return {
            dynamicSamplingContext: dynamicSamplingContext2,
            traceId: spanContext.traceId,
            spanId: spanContext.spanId,
            sampled: getSampledForPropagation(span, options.client)
        };
    }
    const scope = options.scope || getScopesFromContext(context2)?.scope || core.getCurrentScope();
    const client = options.client || core.getClient();
    const propagationContext = scope.getPropagationContext();
    const dynamicSamplingContext = client ? core.getDynamicSamplingContextFromScope(client, scope) : void 0;
    return {
        dynamicSamplingContext,
        traceId: propagationContext.traceId,
        spanId: propagationContext.propagationSpanId,
        sampled: propagationContext.sampled
    };
}
function getContextWithRemoteActiveSpan(ctx, { sentryTrace, baggage }) {
    const propagationContext = core.propagationContextFromHeaders(sentryTrace, baggage);
    const { traceId, parentSpanId, sampled, dsc } = propagationContext;
    const client = core.getClient();
    const incomingDsc = core.baggageHeaderToDynamicSamplingContext(baggage);
    if (!parentSpanId || client && !core.shouldContinueTrace(client, incomingDsc?.org_id)) {
        return ctx;
    }
    const spanContext = generateRemoteSpanContext({
        traceId,
        spanId: parentSpanId,
        sampled,
        dsc
    });
    return api.trace.setSpanContext(ctx, spanContext);
}
function continueTraceAsRemoteSpan(ctx, options, callback) {
    const ctxWithSpanContext = ensureScopesOnContext(getContextWithRemoteActiveSpan(ctx, options));
    return api.context.with(ctxWithSpanContext, callback);
}
function ensureScopesOnContext(ctx) {
    const scopes = getScopesFromContext(ctx);
    const newScopes = {
        // If we have no scope here, this is most likely either the root context or a context manually derived from it
        // In this case, we want to fork the current scope, to ensure we do not pollute the root scope
        scope: scopes ? scopes.scope : core.getCurrentScope().clone(),
        isolationScope: scopes ? scopes.isolationScope : core.getIsolationScope()
    };
    return setScopesOnContext(ctx, newScopes);
}
function getExistingBaggage(carrier) {
    try {
        const baggage = carrier[SENTRY_BAGGAGE_HEADER];
        return Array.isArray(baggage) ? baggage.join(",") : baggage;
    } catch  {
        return void 0;
    }
}
function getExistingSentryTrace(carrier) {
    try {
        return carrier[SENTRY_TRACE_HEADER];
    } catch  {
        return void 0;
    }
}
function getCurrentURL(span) {
    const spanData = core.spanToJSON(span).data;
    const urlAttribute = spanData[attributes.HTTP_URL] || spanData[attributes.URL_FULL];
    if (typeof urlAttribute === "string") {
        return urlAttribute;
    }
    const urlTraceState = span.spanContext().traceState?.get(SENTRY_TRACE_STATE_URL);
    if (urlTraceState) {
        return urlTraceState;
    }
    return void 0;
}
function generateRemoteSpanContext({ spanId, traceId, sampled, dsc }) {
    const traceState = makeTraceState({
        dsc,
        sampled
    });
    const spanContext = {
        traceId,
        spanId,
        isRemote: true,
        traceFlags: sampled ? api.TraceFlags.SAMPLED : api.TraceFlags.NONE,
        traceState
    };
    return spanContext;
}
function _startSpan(options, callback, autoEnd) {
    const tracer = getTracer();
    const { name, parentSpan: customParentSpan } = options;
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(()=>{
        const activeCtx = getContext(options.scope, options.forceTransaction);
        const missingRequiredParent = options.onlyIfParent && !api.trace.getSpan(activeCtx);
        const ctx = missingRequiredParent ? core$1.suppressTracing(activeCtx) : activeCtx;
        if (missingRequiredParent) {
            core.getClient()?.recordDroppedEvent("no_parent_span", "span");
        }
        const spanOptions = getSpanOptions(options);
        if (!core.hasSpansEnabled()) {
            const suppressedCtx = core$1.isTracingSuppressed(ctx) ? ctx : core$1.suppressTracing(ctx);
            return api.context.with(suppressedCtx, ()=>{
                return tracer.startActiveSpan(name, spanOptions, suppressedCtx, (span)=>{
                    patchSpanEnd(span);
                    return api.context.with(activeCtx, ()=>{
                        return core.handleCallbackErrors(()=>callback(span), ()=>{
                            if (core.spanToJSON(span).status === void 0) {
                                span.setStatus({
                                    code: api.SpanStatusCode.ERROR
                                });
                            }
                        }, autoEnd ? ()=>span.end() : void 0);
                    });
                });
            });
        }
        return tracer.startActiveSpan(name, spanOptions, ctx, (span)=>{
            patchSpanEnd(span);
            return core.handleCallbackErrors(()=>callback(span), ()=>{
                if (core.spanToJSON(span).status === void 0) {
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR
                    });
                }
            }, autoEnd ? ()=>span.end() : void 0);
        });
    });
}
function startSpan(options, callback) {
    return _startSpan(options, callback, true);
}
function startSpanManual(options, callback) {
    return _startSpan(options, (span)=>callback(span, ()=>span.end()), false);
}
function startInactiveSpan(options) {
    const tracer = getTracer();
    const { name, parentSpan: customParentSpan } = options;
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(()=>{
        const activeCtx = getContext(options.scope, options.forceTransaction);
        const missingRequiredParent = options.onlyIfParent && !api.trace.getSpan(activeCtx);
        let ctx = missingRequiredParent ? core$1.suppressTracing(activeCtx) : activeCtx;
        if (missingRequiredParent) {
            core.getClient()?.recordDroppedEvent("no_parent_span", "span");
        }
        const spanOptions = getSpanOptions(options);
        if (!core.hasSpansEnabled()) {
            ctx = core$1.isTracingSuppressed(ctx) ? ctx : core$1.suppressTracing(ctx);
        }
        const span = tracer.startSpan(name, spanOptions, ctx);
        patchSpanEnd(span);
        return span;
    });
}
function withActiveSpan(span, callback) {
    const newContextWithActiveSpan = span ? api.trace.setSpan(api.context.active(), span) : api.trace.deleteSpan(api.context.active());
    return api.context.with(newContextWithActiveSpan, ()=>callback(core.getCurrentScope()));
}
function getTracer() {
    const client = core.getClient();
    return client?.tracer || api.trace.getTracer("@sentry/opentelemetry", core.SDK_VERSION);
}
function getSpanOptions(options) {
    const { startTime, attributes, kind, op, links } = options;
    const fixedStartTime = typeof startTime === "number" ? ensureTimestampInMilliseconds(startTime) : startTime;
    return {
        attributes: op ? {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
            ...attributes
        } : attributes,
        kind,
        links,
        startTime: fixedStartTime
    };
}
function ensureTimestampInMilliseconds(timestamp) {
    const isMs = timestamp < 9999999999;
    return isMs ? timestamp * 1e3 : timestamp;
}
function patchSpanEnd(span) {
    const originalEnd = span.end.bind(span);
    span.end = (endTime)=>{
        return originalEnd(typeof endTime === "number" ? ensureTimestampInMilliseconds(endTime) : endTime);
    };
}
function getContext(scope, forceTransaction) {
    const ctx = getContextForScope(scope);
    const parentSpan = api.trace.getSpan(ctx);
    if (!parentSpan) {
        return ctx;
    }
    if (!forceTransaction) {
        return ctx;
    }
    const ctxWithoutSpan = api.trace.deleteSpan(ctx);
    const { spanId, traceId } = parentSpan.spanContext();
    const sampled = getSamplingDecision(parentSpan.spanContext());
    const rootSpan = core.getRootSpan(parentSpan);
    const dsc = core.getDynamicSamplingContextFromSpan(rootSpan);
    const traceState = makeTraceState({
        dsc,
        sampled
    });
    const spanOptions = {
        traceId,
        spanId,
        isRemote: true,
        traceFlags: sampled ? api.TraceFlags.SAMPLED : api.TraceFlags.NONE,
        traceState
    };
    const ctxWithSpanContext = api.trace.setSpanContext(ctxWithoutSpan, spanOptions);
    return ctxWithSpanContext;
}
function getContextForScope(scope) {
    if (scope) {
        const ctx = getContextFromScope(scope);
        if (ctx) {
            return ctx;
        }
    }
    return api.context.active();
}
function continueTrace(options, callback) {
    return continueTraceAsRemoteSpan(api.context.active(), options, callback);
}
function startNewTrace(callback) {
    const traceId = core.generateTraceId();
    const spanId = core.generateSpanId();
    const spanContext = {
        traceId,
        spanId,
        isRemote: true,
        traceFlags: api.TraceFlags.NONE
    };
    const ctxWithTrace = api.trace.setSpanContext(api.context.active(), spanContext);
    return api.context.with(ctxWithTrace, ()=>{
        core.getCurrentScope().setPropagationContext({
            traceId,
            sampleRand: core._INTERNAL_safeMathRandom()
        });
        return callback();
    });
}
function getTraceContextForScope(client, scope) {
    const ctx = getContextFromScope(scope);
    const span = ctx && api.trace.getSpan(ctx);
    const traceContext = span ? core.spanToTraceContext(span) : core.getTraceContextFromScope(scope);
    const dynamicSamplingContext = span ? core.getDynamicSamplingContextFromSpan(span) : core.getDynamicSamplingContextFromScope(client, scope);
    return [
        dynamicSamplingContext,
        traceContext
    ];
}
function getActiveSpanWrapper(parentSpan) {
    return parentSpan !== void 0 ? (callback)=>{
        return withActiveSpan(parentSpan, callback);
    } : (callback)=>callback();
}
function suppressTracing(callback) {
    const ctx = core$1.suppressTracing(api.context.active());
    return api.context.with(ctx, callback);
}
function isTracingSuppressed(scope) {
    const ctx = scope ? getContextFromScope(scope) : api.context.active();
    return ctx ? core$1.isTracingSuppressed(ctx) : false;
}
function setupEventContextTrace(client) {
    client.on("preprocessEvent", (event)=>{
        const span = getActiveSpan();
        if (!span || event.type === "transaction") {
            return;
        }
        event.contexts = {
            trace: core.spanToTraceContext(span),
            ...event.contexts
        };
        const rootSpan = core.getRootSpan(span);
        event.sdkProcessingMetadata = {
            dynamicSamplingContext: core.getDynamicSamplingContextFromSpan(rootSpan),
            ...event.sdkProcessingMetadata
        };
        return event;
    });
}
function buildContextWithSentryScopes(context, activeContext) {
    const span = api.trace.getSpan(context);
    let effectiveContext;
    if (span?.spanContext().traceState?.get(SENTRY_TRACE_STATE_CHILD_IGNORED) === "1") {
        const contextWithoutSpan = api.trace.deleteSpan(context);
        const parentSpan = api.trace.getSpan(activeContext);
        effectiveContext = parentSpan ? api.trace.setSpan(contextWithoutSpan, parentSpan) : contextWithoutSpan;
    } else {
        effectiveContext = context;
    }
    const currentScopes = getScopesFromContext(effectiveContext);
    const currentScope = currentScopes?.scope || core.getCurrentScope();
    const currentIsolationScope = currentScopes?.isolationScope || core.getIsolationScope();
    const shouldForkIsolationScope = effectiveContext.getValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY) === true;
    const scope = effectiveContext.getValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY);
    const isolationScope = effectiveContext.getValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
    const newCurrentScope = scope || currentScope.clone();
    const newIsolationScope = isolationScope || (shouldForkIsolationScope ? currentIsolationScope.clone() : currentIsolationScope);
    const scopes = {
        scope: newCurrentScope,
        isolationScope: newIsolationScope
    };
    const ctx1 = setScopesOnContext(effectiveContext, scopes);
    const ctx2 = ctx1.deleteValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
    setContextOnScope(newCurrentScope, ctx2);
    return ctx2;
}
function wrapContextManagerClass(ContextManagerClass) {
    class SentryContextManager extends ContextManagerClass {
        constructor(...args){
            super(...args);
            setIsSetup("SentryContextManager");
        }
        /**
     * Overwrite with() of the original AsyncLocalStorageContextManager
     * to ensure we also create new scopes per context.
     */ with(context, fn, thisArg, ...args) {
            const ctx2 = buildContextWithSentryScopes(context, this.active());
            return super.with(ctx2, fn, thisArg, ...args);
        }
        /**
     * Gets underlying AsyncLocalStorage and symbol to allow lookup of scope.
     */ getAsyncLocalStorageLookup() {
            return {
                // @ts-expect-error This is on the base class, but not part of the interface
                asyncLocalStorage: this._asyncLocalStorage,
                contextSymbol: SENTRY_SCOPES_CONTEXT_KEY
            };
        }
    }
    return SentryContextManager;
}
function groupSpansWithParents(spans) {
    const nodeMap = /* @__PURE__ */ new Map();
    for (const span of spans){
        createOrUpdateSpanNodeAndRefs(nodeMap, span);
    }
    return Array.from(nodeMap, function([_id, spanNode]) {
        return spanNode;
    });
}
function getLocalParentId(span) {
    const parentIsRemote = span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE] === true;
    return !parentIsRemote ? getParentSpanId(span) : void 0;
}
function createOrUpdateSpanNodeAndRefs(nodeMap, span) {
    const id = span.spanContext().spanId;
    const parentId = getLocalParentId(span);
    if (!parentId) {
        createOrUpdateNode(nodeMap, {
            id,
            span,
            children: []
        });
        return;
    }
    const parentNode = createOrGetParentNode(nodeMap, parentId);
    const node = createOrUpdateNode(nodeMap, {
        id,
        span,
        parentNode,
        children: []
    });
    parentNode.children.push(node);
}
function createOrGetParentNode(nodeMap, id) {
    const existing = nodeMap.get(id);
    if (existing) {
        return existing;
    }
    return createOrUpdateNode(nodeMap, {
        id,
        children: []
    });
}
function createOrUpdateNode(nodeMap, spanNode) {
    const existing = nodeMap.get(spanNode.id);
    if (existing?.span) {
        return existing;
    }
    if (existing && !existing.span) {
        existing.span = spanNode.span;
        existing.parentNode = spanNode.parentNode;
        return existing;
    }
    nodeMap.set(spanNode.id, spanNode);
    return spanNode;
}
const canonicalGrpcErrorCodesMap = {
    "1": "cancelled",
    "2": "unknown_error",
    "3": "invalid_argument",
    "4": "deadline_exceeded",
    "5": "not_found",
    "6": "already_exists",
    "7": "permission_denied",
    "8": "resource_exhausted",
    "9": "failed_precondition",
    "10": "aborted",
    "11": "out_of_range",
    "12": "unimplemented",
    "13": "internal_error",
    "14": "unavailable",
    "15": "data_loss",
    "16": "unauthenticated"
};
const isStatusErrorMessageValid = (message)=>{
    return Object.values(canonicalGrpcErrorCodesMap).includes(message);
};
function mapStatus(span) {
    const attributes = spanHasAttributes(span) ? span.attributes : {};
    const status = spanHasStatus(span) ? span.status : void 0;
    if (status) {
        if (status.code === api.SpanStatusCode.OK) {
            return {
                code: core.SPAN_STATUS_OK
            };
        } else if (status.code === api.SpanStatusCode.ERROR) {
            if (typeof status.message === "undefined") {
                const inferredStatus2 = inferStatusFromAttributes(attributes);
                if (inferredStatus2) {
                    return inferredStatus2;
                }
            }
            if (status.message && isStatusErrorMessageValid(status.message)) {
                return {
                    code: core.SPAN_STATUS_ERROR,
                    message: status.message
                };
            } else {
                return {
                    code: core.SPAN_STATUS_ERROR,
                    message: "internal_error"
                };
            }
        }
    }
    const inferredStatus = inferStatusFromAttributes(attributes);
    if (inferredStatus) {
        return inferredStatus;
    }
    if (status?.code === api.SpanStatusCode.UNSET) {
        return {
            code: core.SPAN_STATUS_OK
        };
    } else {
        return {
            code: core.SPAN_STATUS_ERROR,
            message: "unknown_error"
        };
    }
}
function inferStatusFromAttributes(attributes$1) {
    const httpCodeAttribute = attributes$1[attributes.HTTP_RESPONSE_STATUS_CODE] || attributes$1[attributes.HTTP_STATUS_CODE];
    const grpcCodeAttribute = attributes$1[attributes.RPC_GRPC_STATUS_CODE];
    const numberHttpCode = typeof httpCodeAttribute === "number" ? httpCodeAttribute : typeof httpCodeAttribute === "string" ? parseInt(httpCodeAttribute) : void 0;
    if (typeof numberHttpCode === "number") {
        return core.getSpanStatusFromHttpCode(numberHttpCode);
    }
    if (typeof grpcCodeAttribute === "string") {
        return {
            code: core.SPAN_STATUS_ERROR,
            message: canonicalGrpcErrorCodesMap[grpcCodeAttribute] || "unknown_error"
        };
    }
    return void 0;
}
const MAX_SPAN_COUNT = 1e3;
const DEFAULT_TIMEOUT = 300;
const SENT_SPANS_MAX_SIZE = 1e4;
class SentrySpanExporter {
    constructor(options){
        this._finishedSpanBucketSize = options?.timeout || DEFAULT_TIMEOUT;
        this._finishedSpanBuckets = new Array(this._finishedSpanBucketSize).fill(void 0);
        this._lastCleanupTimestampInS = Math.floor(core._INTERNAL_safeDateNow() / 1e3);
        this._spansToBucketEntry = /* @__PURE__ */ new WeakMap();
        this._sentSpans = new core.LRUMap(SENT_SPANS_MAX_SIZE);
        this._debouncedFlush = core.debounce(this.flush.bind(this), 1, {
            maxWait: 100
        });
    }
    /**
   * Export a single span.
   * This is called by the span processor whenever a span is ended.
   */ export(span) {
        const currentTimestampInS = Math.floor(core._INTERNAL_safeDateNow() / 1e3);
        if (this._lastCleanupTimestampInS !== currentTimestampInS) {
            let droppedSpanCount = 0;
            this._finishedSpanBuckets.forEach((bucket, i)=>{
                if (bucket && bucket.timestampInS <= currentTimestampInS - this._finishedSpanBucketSize) {
                    droppedSpanCount += bucket.spans.size;
                    this._finishedSpanBuckets[i] = void 0;
                }
            });
            if (droppedSpanCount > 0) {
                DEBUG_BUILD && core.debug.log(`SpanExporter dropped ${droppedSpanCount} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`);
            }
            this._lastCleanupTimestampInS = currentTimestampInS;
        }
        const currentBucketIndex = currentTimestampInS % this._finishedSpanBucketSize;
        const currentBucket = this._finishedSpanBuckets[currentBucketIndex] || {
            timestampInS: currentTimestampInS,
            spans: /* @__PURE__ */ new Set()
        };
        this._finishedSpanBuckets[currentBucketIndex] = currentBucket;
        currentBucket.spans.add(span);
        this._spansToBucketEntry.set(span, currentBucket);
        const localParentId = getLocalParentId(span);
        if (!localParentId || this._sentSpans.get(localParentId)) {
            this._debouncedFlush();
        }
    }
    /**
   * Try to flush any pending spans immediately.
   * This is called internally by the exporter (via _debouncedFlush),
   * but can also be triggered externally if we force-flush.
   */ flush() {
        const finishedSpans = this._finishedSpanBuckets.flatMap((bucket)=>bucket ? Array.from(bucket.spans) : []);
        const sentSpans = this._maybeSend(finishedSpans);
        const sentSpanCount = sentSpans.size;
        const remainingOpenSpanCount = finishedSpans.length - sentSpanCount;
        DEBUG_BUILD && core.debug.log(`SpanExporter exported ${sentSpanCount} spans, ${remainingOpenSpanCount} spans are waiting for their parent spans to finish`);
        for (const span of sentSpans){
            this._sentSpans.set(span.spanContext().spanId, 1);
            const bucketEntry = this._spansToBucketEntry.get(span);
            if (bucketEntry) {
                bucketEntry.spans.delete(span);
            }
        }
        this._debouncedFlush.cancel();
    }
    /**
   * Clear the exporter.
   * This is called when the span processor is shut down.
   */ clear() {
        this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0);
        this._sentSpans.clear();
        this._debouncedFlush.cancel();
    }
    /**
   * Send the given spans, but only if they are part of a finished transaction.
   *
   * Returns the sent spans.
   * Spans remain unsent when their parent span is not yet finished.
   * This will happen regularly, as child spans are generally finished before their parents.
   * But it _could_ also happen because, for whatever reason, a parent span was lost.
   * In this case, we'll eventually need to clean this up.
   */ _maybeSend(spans) {
        const grouped = groupSpansWithParents(spans);
        const sentSpans = /* @__PURE__ */ new Set();
        const rootNodes = this._getCompletedRootNodes(grouped);
        for (const root of rootNodes){
            const span = root.span;
            sentSpans.add(span);
            const transactionEvent = createTransactionForOtelSpan(span);
            if (root.parentNode && this._sentSpans.get(root.parentNode.id)) {
                const traceData = transactionEvent.contexts?.trace?.data;
                if (traceData) {
                    traceData["sentry.parent_span_already_sent"] = true;
                }
            }
            const spans2 = transactionEvent.spans || [];
            let hasGenAiSpans = false;
            for (const child of root.children){
                if (createAndFinishSpanForOtelSpan(child, spans2, sentSpans)) {
                    hasGenAiSpans = true;
                }
            }
            transactionEvent.spans = spans2.length > MAX_SPAN_COUNT ? spans2.sort((a, b)=>a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans2;
            if (hasGenAiSpans) {
                transactionEvent.sdkProcessingMetadata = {
                    ...transactionEvent.sdkProcessingMetadata,
                    hasGenAiSpans: true
                };
            }
            const measurements = core.timedEventsToMeasurements(span.events);
            if (measurements) {
                transactionEvent.measurements = measurements;
            }
            core.captureEvent(transactionEvent);
        }
        return sentSpans;
    }
    /** Check if a node is a completed root node or a node whose parent has already been sent */ _nodeIsCompletedRootNodeOrHasSentParent(node) {
        return !!node.span && (!node.parentNode || !!this._sentSpans.get(node.parentNode.id));
    }
    /** Get all completed root nodes from a list of nodes */ _getCompletedRootNodes(nodes) {
        return nodes.filter((node)=>this._nodeIsCompletedRootNodeOrHasSentParent(node));
    }
}
function parseSpan(span) {
    const attributes = span.attributes;
    const origin = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
    const op = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP];
    const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    return {
        origin,
        op,
        source
    };
}
function createTransactionForOtelSpan(span) {
    const { op, description, data, origin = "manual", source } = getSpanData(span);
    const capturedSpanScopes = core.getCapturedScopesOnSpan(span);
    const sampleRate = span.attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    const attributes$1 = {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
        ...data,
        ...removeSentryAttributes(span.attributes)
    };
    const { links } = span;
    const { traceId: trace_id, spanId: span_id } = span.spanContext();
    const parent_span_id = getParentSpanId(span);
    const status = mapStatus(span);
    const traceContext = {
        parent_span_id,
        span_id,
        trace_id,
        data: attributes$1,
        origin,
        op,
        status: core.getStatusMessage(status),
        // As per protocol, span status is allowed to be undefined
        links: core.convertSpanLinksForEnvelope(links)
    };
    const statusCode = attributes$1[attributes.HTTP_RESPONSE_STATUS_CODE];
    const responseContext = typeof statusCode === "number" ? {
        response: {
            status_code: statusCode
        }
    } : void 0;
    const transactionEvent = {
        contexts: {
            trace: traceContext,
            otel: {
                resource: span.resource.attributes
            },
            ...responseContext
        },
        spans: [],
        start_timestamp: core.spanTimeInputToSeconds(span.startTime),
        timestamp: core.spanTimeInputToSeconds(span.endTime),
        transaction: description,
        type: "transaction",
        sdkProcessingMetadata: {
            capturedSpanScope: capturedSpanScopes.scope,
            capturedSpanIsolationScope: capturedSpanScopes.isolationScope,
            sampleRate,
            dynamicSamplingContext: core.getDynamicSamplingContextFromSpan(span)
        },
        ...source && {
            transaction_info: {
                source
            }
        }
    };
    return transactionEvent;
}
function createAndFinishSpanForOtelSpan(node, spans, sentSpans) {
    const span = node.span;
    if (span) {
        sentSpans.add(span);
    }
    const shouldDrop = !span;
    if (shouldDrop) {
        let hasGenAiSpans2 = false;
        node.children.forEach((child)=>{
            if (createAndFinishSpanForOtelSpan(child, spans, sentSpans)) {
                hasGenAiSpans2 = true;
            }
        });
        return hasGenAiSpans2;
    }
    const span_id = span.spanContext().spanId;
    const trace_id = span.spanContext().traceId;
    const parentSpanId = getParentSpanId(span);
    const { attributes, startTime, endTime, links } = span;
    const { op, description, data, origin = "manual" } = getSpanData(span);
    const allData = {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
        ...removeSentryAttributes(attributes),
        ...data
    };
    const status = mapStatus(span);
    const spanJSON = {
        span_id,
        trace_id,
        data: allData,
        description,
        parent_span_id: parentSpanId,
        start_timestamp: core.spanTimeInputToSeconds(startTime),
        // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
        timestamp: core.spanTimeInputToSeconds(endTime) || void 0,
        status: core.getStatusMessage(status),
        // As per protocol, span status is allowed to be undefined
        op,
        origin,
        measurements: core.timedEventsToMeasurements(span.events),
        links: core.convertSpanLinksForEnvelope(links)
    };
    spans.push(spanJSON);
    let hasGenAiSpans = !!op?.startsWith("gen_ai.");
    node.children.forEach((child)=>{
        if (createAndFinishSpanForOtelSpan(child, spans, sentSpans)) {
            hasGenAiSpans = true;
        }
    });
    return hasGenAiSpans;
}
function getSpanData(span) {
    const { op: definedOp, source: definedSource, origin } = parseSpan(span);
    const { op: inferredOp, description, source: inferredSource, data: inferredData } = parseSpanDescription(span);
    const op = definedOp || inferredOp;
    const source = definedSource || inferredSource;
    const data = {
        ...inferredData,
        ...getData(span)
    };
    return {
        op,
        description,
        source,
        origin,
        data
    };
}
function removeSentryAttributes(data) {
    const cleanedData = {
        ...data
    };
    delete cleanedData[core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE];
    delete cleanedData[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    return cleanedData;
}
function getData(span) {
    const attributes$1 = span.attributes;
    const data = {};
    if (span.kind !== api.SpanKind.INTERNAL) {
        data["otel.kind"] = api.SpanKind[span.kind];
    }
    const maybeHttpStatusCodeAttribute = attributes$1[attributes.HTTP_STATUS_CODE];
    if (maybeHttpStatusCodeAttribute) {
        data[attributes.HTTP_RESPONSE_STATUS_CODE] = maybeHttpStatusCodeAttribute;
    }
    const requestData = getRequestSpanData(span);
    if (requestData.url) {
        data.url = requestData.url;
    }
    if (requestData["http.query"]) {
        data["http.query"] = requestData["http.query"].slice(1);
    }
    if (requestData["http.fragment"]) {
        data["http.fragment"] = requestData["http.fragment"].slice(1);
    }
    return data;
}
function backfillStreamedSpanDataFromOtel(spanJSON, hint) {
    const attributes$1 = spanJSON.attributes ?? {};
    const kind = hint?.spanKind ?? core.SPAN_KIND.INTERNAL;
    const { op, description, source, data } = inferSpanData(spanJSON.name, attributes$1, kind);
    spanJSON.name = description;
    core.safeSetSpanJSONAttributes(spanJSON, {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
        // If nothing in the chain previously set an origin, we now default it to 'manual'
        // For transactions, this is done in the SpanExporter.
        // TODO (v11): Remove this again once we fully moved away from OTel's TracerProvider.
        // at this point, we use `SentrySpan` everywhere, which defaults its origin to 'manual'.
        [attributes.SENTRY_ORIGIN]: "manual",
        ...data
    });
    if (kind !== core.SPAN_KIND.INTERNAL) {
        core.safeSetSpanJSONAttributes(spanJSON, {
            "otel.kind": core.spanKindToName(kind)
        });
    }
}
class SentrySpanProcessor {
    constructor(options){
        this._unsubscribePreprocessSpan = void 0;
        setIsSetup("SentrySpanProcessor");
        this._exporter = new SentrySpanExporter(options);
        this._client = options?.client ?? core.getClient();
        if (this._client && core.hasSpanStreamingEnabled(this._client)) {
            this._unsubscribePreprocessSpan = this._client.on("preprocessSpan", backfillStreamedSpanDataFromOtel);
        }
    }
    /**
   * @inheritDoc
   */ async forceFlush() {
        this._exporter.flush();
    }
    /**
   * @inheritDoc
   */ async shutdown() {
        this._unsubscribePreprocessSpan?.();
        this._exporter.clear();
    }
    /**
   * @inheritDoc
   */ onStart(span, parentContext) {
        const parentSpan = api.trace.getSpan(parentContext);
        let scopes = getScopesFromContext(parentContext);
        if (parentSpan && !parentSpan.spanContext().isRemote) {
            core.addChildSpanToSpan(parentSpan, span);
        }
        if (parentSpan?.spanContext().isRemote) {
            span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE, true);
        }
        if (parentContext === api.ROOT_CONTEXT) {
            scopes = {
                scope: core.getDefaultCurrentScope(),
                isolationScope: core.getDefaultIsolationScope()
            };
        }
        if (scopes) {
            core.setCapturedScopesOnSpan(span, scopes.scope, scopes.isolationScope);
        }
        core.logSpanStart(span);
        this._client?.emit("spanStart", span);
    }
    /** @inheritDoc */ onEnd(span) {
        core.logSpanEnd(span);
        this._client?.emit("spanEnd", span);
        if (this._client && core.hasSpanStreamingEnabled(this._client)) {
            this._client.emit("afterSpanEnd", span);
        } else {
            this._exporter.export(span);
        }
    }
}
class SentrySampler {
    constructor(client){
        this._client = client;
        this._isSpanStreaming = core.hasSpanStreamingEnabled(client);
        setIsSetup("SentrySampler");
    }
    /** @inheritDoc */ shouldSample(context, traceId, spanName, spanKind, spanAttributes, _links) {
        const options = this._client.getOptions();
        const { ignoreSpans } = options;
        const parentSpan = getValidSpan(context);
        const parentContext = parentSpan?.spanContext();
        if (!core.hasSpansEnabled(options)) {
            return wrapSamplingDecision({
                decision: void 0,
                context,
                spanAttributes
            });
        }
        const maybeSpanHttpMethod = spanAttributes[attributes.HTTP_METHOD] || spanAttributes[attributes.HTTP_REQUEST_METHOD];
        if (spanKind === api.SpanKind.CLIENT && maybeSpanHttpMethod && (!parentSpan || parentContext?.isRemote)) {
            if (!this._isSpanStreaming) {
                this._client.recordDroppedEvent("no_parent_span", "span");
                return wrapSamplingDecision({
                    decision: void 0,
                    context,
                    spanAttributes
                });
            }
        }
        const parentSampled = parentSpan ? getParentSampled(parentSpan, traceId, spanName) : void 0;
        const isRootSpan = !parentSpan || parentContext?.isRemote;
        if (!isRootSpan) {
            if (this._isSpanStreaming) {
                if (parentSampled) {
                    if (ignoreSpans?.length) {
                        const { description: inferredChildName, op: childOp } = inferSpanData(spanName, spanAttributes, spanKind);
                        if (core.shouldIgnoreSpan({
                            description: inferredChildName,
                            op: spanAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? childOp,
                            attributes: spanAttributes
                        }, ignoreSpans)) {
                            this._client.recordDroppedEvent("ignored", "span");
                            return wrapSamplingDecision({
                                decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
                                context,
                                spanAttributes,
                                ignoredChildSpan: true
                            });
                        }
                    }
                }
                if (!parentSampled) {
                    const parentSegmentIgnored = parentContext?.traceState?.get(SENTRY_TRACE_STATE_SEGMENT_IGNORED) === "1";
                    this._client.recordDroppedEvent(parentSegmentIgnored ? "ignored" : "sample_rate", "span");
                }
            }
            return wrapSamplingDecision({
                decision: parentSampled ? sdkTraceBase.SamplingDecision.RECORD_AND_SAMPLED : sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes
            });
        }
        const { description: inferredSpanName, data: inferredAttributes, op } = inferSpanData(spanName, spanAttributes, spanKind);
        const mergedAttributes = {
            ...inferredAttributes,
            ...spanAttributes
        };
        if (op) {
            mergedAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] = op;
        }
        if (this._isSpanStreaming && ignoreSpans?.length && core.shouldIgnoreSpan({
            description: inferredSpanName,
            op: mergedAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? op,
            attributes: mergedAttributes
        }, ignoreSpans)) {
            this._client.recordDroppedEvent("ignored", "span");
            return wrapSamplingDecision({
                decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes,
                ignoredSegmentSpan: true
            });
        }
        const mutableSamplingDecision = {
            decision: true
        };
        this._client.emit("beforeSampling", {
            spanAttributes: mergedAttributes,
            spanName: inferredSpanName,
            parentSampled,
            parentContext
        }, mutableSamplingDecision);
        if (!mutableSamplingDecision.decision) {
            return wrapSamplingDecision({
                decision: void 0,
                context,
                spanAttributes
            });
        }
        const { isolationScope } = getScopesFromContext(context) ?? {};
        const dscString = parentContext?.traceState ? parentContext.traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
        const dsc = dscString ? core.baggageHeaderToDynamicSamplingContext(dscString) : void 0;
        const sampleRand = core.parseSampleRate(dsc?.sample_rand) ?? core._INTERNAL_safeMathRandom();
        const [sampled, sampleRate, localSampleRateWasApplied] = core.sampleSpan(options, {
            name: inferredSpanName,
            attributes: mergedAttributes,
            normalizedRequest: isolationScope?.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampled,
            parentSampleRate: core.parseSampleRate(dsc?.sample_rate)
        }, sampleRand);
        const method = `${maybeSpanHttpMethod}`.toUpperCase();
        if (method === "OPTIONS" || method === "HEAD") {
            DEBUG_BUILD && core.debug.log(`[Tracing] Not sampling span because HTTP method is '${method}' for ${spanName}`);
            return wrapSamplingDecision({
                decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes,
                sampleRand,
                downstreamTraceSampleRate: 0
            });
        }
        if (!sampled && // We check for `parentSampled === undefined` because we only want to record client reports for spans that are trace roots (ie. when there was incoming trace)
        parentSampled === void 0) {
            DEBUG_BUILD && core.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
            this._client.recordDroppedEvent("sample_rate", this._isSpanStreaming ? "span" : "transaction");
        }
        return {
            ...wrapSamplingDecision({
                decision: sampled ? sdkTraceBase.SamplingDecision.RECORD_AND_SAMPLED : sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes,
                sampleRand,
                downstreamTraceSampleRate: localSampleRateWasApplied ? sampleRate : void 0
            }),
            attributes: {
                // We set the sample rate on the span when a local sample rate was applied to better understand how traces were sampled in Sentry
                [core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: localSampleRateWasApplied ? sampleRate : void 0
            }
        };
    }
    /** Returns the sampler name or short description with the configuration. */ toString() {
        return "SentrySampler";
    }
}
function getParentSampled(parentSpan, traceId, spanName) {
    const parentContext = parentSpan.spanContext();
    if (api.isSpanContextValid(parentContext) && parentContext.traceId === traceId) {
        if (parentContext.isRemote) {
            const parentSampled2 = getSamplingDecision(parentSpan.spanContext());
            DEBUG_BUILD && core.debug.log(`[Tracing] Inheriting remote parent's sampled decision for ${spanName}: ${parentSampled2}`);
            return parentSampled2;
        }
        const parentSampled = getSamplingDecision(parentContext);
        DEBUG_BUILD && core.debug.log(`[Tracing] Inheriting parent's sampled decision for ${spanName}: ${parentSampled}`);
        return parentSampled;
    }
    return void 0;
}
function wrapSamplingDecision({ decision, context, spanAttributes, sampleRand, downstreamTraceSampleRate, ignoredChildSpan, ignoredSegmentSpan }) {
    let traceState = getBaseTraceState(context, spanAttributes);
    if (downstreamTraceSampleRate !== void 0) {
        traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RATE, `${downstreamTraceSampleRate}`);
    }
    if (sampleRand !== void 0) {
        traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RAND, `${sampleRand}`);
    }
    if (ignoredChildSpan) {
        traceState = traceState.set(SENTRY_TRACE_STATE_CHILD_IGNORED, "1");
    }
    if (ignoredSegmentSpan) {
        traceState = traceState.set(SENTRY_TRACE_STATE_SEGMENT_IGNORED, "1");
    }
    if (decision == void 0) {
        return {
            decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
            traceState
        };
    }
    if (decision === sdkTraceBase.SamplingDecision.NOT_RECORD) {
        return {
            decision,
            traceState: traceState.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1")
        };
    }
    return {
        decision,
        traceState
    };
}
function getBaseTraceState(context, spanAttributes) {
    const parentSpan = api.trace.getSpan(context);
    const parentContext = parentSpan?.spanContext();
    let traceState = parentContext?.traceState || new TraceState();
    const url = spanAttributes[attributes.HTTP_URL] || spanAttributes[attributes.URL_FULL];
    if (url && typeof url === "string") {
        traceState = traceState.set(SENTRY_TRACE_STATE_URL, url);
    }
    return traceState;
}
function getValidSpan(context) {
    const span = api.trace.getSpan(context);
    return span && api.isSpanContextValid(span.spanContext()) ? span : void 0;
}
function applyOtelSpanData(span, options = {}) {
    const spanJSON = core.spanToJSON(span);
    const attributes = spanJSON.data;
    const kind = span.kind ?? api.SpanKind.INTERNAL;
    const mayInferSource = core.spanShouldInferOtelSource(span);
    const hasCustomSpanName = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME] !== void 0;
    const canInferSource = mayInferSource && !hasCustomSpanName && !core.spanSourceWasExplicitlySet(span);
    const attributesForInference = canInferSource && attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom" ? {
        ...attributes,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: void 0
    } : attributes;
    const inferred = inferSpanData(spanJSON.description || "<unknown>", attributesForInference, kind);
    if (kind !== api.SpanKind.INTERNAL && attributes["otel.kind"] === void 0) {
        span.setAttribute("otel.kind", api.SpanKind[kind]);
    }
    if (inferred.op && attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] === void 0) {
        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, inferred.op);
    }
    const shouldApplyInferredSource = inferred.source !== void 0 && inferred.source !== "custom" && (options.finalizeStatus || inferred.source !== "url") && (spanJSON.parent_span_id === void 0 || kind === api.SpanKind.SERVER);
    if (shouldApplyInferredSource && (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === void 0 || canInferSource)) {
        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, inferred.source);
    }
    if (inferred.data) {
        Object.entries(inferred.data).forEach(([key, value])=>{
            if (value !== void 0 && attributes[key] === void 0) {
                span.setAttribute(key, value);
            }
        });
    }
    if (options.finalizeStatus) {
        applyOtelCompatibilityAttributes(span, attributes);
        const client = core.getClient();
        applyOtelSpanStatus(span, attributes, spanJSON.status, !!client && core.hasSpanStreamingEnabled(client));
    }
    if (mayInferSource && inferred.description !== spanJSON.description && (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] !== "custom" || canInferSource)) {
        span.updateName(inferred.description);
    }
}
function applyOtelSpanKind(span, kind) {
    core.addNonEnumerableProperty(span, "kind", kind ?? api.SpanKind.INTERNAL);
}
function applyOtelSpanStatus(span, attributes, status, spanStreamingEnabled) {
    if (status === void 0) {
        span.setStatus(inferStatusFromAttributes(attributes) || {
            code: core.SPAN_STATUS_OK
        });
        return;
    }
    if (!spanStreamingEnabled && status !== "ok" && !isStatusErrorMessageValid(status)) {
        span.setStatus({
            code: core.SPAN_STATUS_ERROR,
            message: "internal_error"
        });
    }
}
function applyOtelCompatibilityAttributes(span, attributes$1) {
    const legacyHttpStatusCode = attributes$1[attributes.HTTP_STATUS_CODE];
    if (attributes$1[attributes.HTTP_RESPONSE_STATUS_CODE] === void 0 && legacyHttpStatusCode !== void 0) {
        span.setAttribute(attributes.HTTP_RESPONSE_STATUS_CODE, legacyHttpStatusCode);
        attributes$1[attributes.HTTP_RESPONSE_STATUS_CODE] = legacyHttpStatusCode;
    }
}
class SentryTracer {
    /** @inheritdoc */ startSpan(name, options = {}, ctx) {
        const parentContext = ctx || api.context.active();
        const parentSpan = options.root ? void 0 : api.trace.getSpan(parentContext);
        if (core$1.isTracingSuppressed(parentContext)) {
            return this._createNonRecordingSpan(parentSpan);
        }
        const span = this._startSentrySpan(name, options, parentSpan, ctx !== void 0);
        core.markSpanAsTracerProviderSpan(span);
        applyOtelSpanKind(span, options.kind);
        if (options.attributes?.[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === void 0) {
            core.markSpanForOtelSourceInference(span);
        }
        applyOtelSpanData(span);
        return span;
    }
    startActiveSpan(name, optionsOrFn, contextOrFn, fn) {
        const options = typeof optionsOrFn === "function" ? {} : optionsOrFn;
        const ctx = typeof contextOrFn === "function" || contextOrFn === void 0 ? api.context.active() : contextOrFn;
        const callback = typeof optionsOrFn === "function" ? optionsOrFn : typeof contextOrFn === "function" ? contextOrFn : fn;
        const span = this.startSpan(name, options, ctx);
        const capturedIsolationScope = core.getCapturedScopesOnSpan(span).isolationScope;
        const withCapturedIsolationScope = (contextToFork)=>capturedIsolationScope ? contextToFork.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, capturedIsolationScope) : contextToFork;
        if (core.spanIsIgnored(span) && api.trace.getSpan(ctx)) {
            return api.context.with(withCapturedIsolationScope(ctx), ()=>callback(span));
        }
        return api.context.with(withCapturedIsolationScope(api.trace.setSpan(ctx, span)), ()=>{
            core._INTERNAL_setSpanForScope(core.getCurrentScope(), span);
            return callback(span);
        });
    }
    _startSentrySpan(name, options, parentSpan, hasExplicitContext) {
        const sentryOptions = {
            name,
            attributes: options.attributes,
            links: options.links,
            startTime: options.startTime
        };
        if (options.root) {
            return core.startNewTrace(()=>core._INTERNAL_startInactiveSpan({
                    ...sentryOptions,
                    parentSpan: null
                }));
        }
        if (parentSpan?.spanContext().isRemote) {
            return this._startRootSpanWithRemoteParent(sentryOptions, parentSpan);
        }
        if (parentSpan) {
            return core._INTERNAL_startInactiveSpan({
                ...sentryOptions,
                parentSpan
            });
        }
        return core.startNewTrace(()=>core._INTERNAL_startInactiveSpan({
                ...sentryOptions,
                parentSpan: hasExplicitContext ? null : void 0
            }));
    }
    _startRootSpanWithRemoteParent(options, parentSpan) {
        const { spanId, traceId, traceState } = parentSpan.spanContext();
        const dsc = core.getDynamicSamplingContextFromSpan(parentSpan);
        const sampleRand = typeof dsc.sample_rand === "string" ? Number(dsc.sample_rand) : void 0;
        const hasIncomingDsc = !!traceState?.get(SENTRY_TRACE_STATE_DSC);
        return core.withScope((scope)=>{
            scope.setPropagationContext({
                traceId,
                parentSpanId: spanId,
                sampled: getSamplingDecision(parentSpan.spanContext()),
                dsc: hasIncomingDsc ? dsc : void 0,
                sampleRand: typeof sampleRand === "number" && !Number.isNaN(sampleRand) ? sampleRand : core._INTERNAL_safeMathRandom()
            });
            core._INTERNAL_setSpanForScope(scope, void 0);
            return core._INTERNAL_startInactiveSpan({
                ...options,
                parentSpan: null
            });
        });
    }
    _createNonRecordingSpan(parentSpan) {
        const span = new core.SentryNonRecordingSpan({
            traceId: parentSpan?.spanContext().traceId
        });
        if (parentSpan) {
            core.addChildSpanToSpan(parentSpan, span);
        }
        core.setCapturedScopesOnSpan(span, core.getCurrentScope(), core.getIsolationScope());
        return span;
    }
}
class SentryTracerProvider {
    constructor(options = {}){
        this._tracers = /* @__PURE__ */ new Map();
        this.resource = options.resource;
    }
    /** @inheritdoc */ getTracer(name, version, options) {
        const key = JSON.stringify([
            name,
            version,
            options
        ]);
        const cachedTracer = this._tracers.get(key);
        if (cachedTracer) {
            return cachedTracer;
        }
        const tracer = new SentryTracer();
        this._tracers.set(key, tracer);
        return tracer;
    }
    /** Compatibility with SDK tracer providers. */ forceFlush() {
        return Promise.resolve();
    }
    /** Compatibility with SDK tracer providers. */ shutdown() {
        return Promise.resolve();
    }
}
const ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
const ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
const ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
const SEMRESATTRS_SERVICE_NAMESPACE = "service.namespace";
class SentryResource {
    constructor(attributes){
        this._attributes = attributes;
    }
    get attributes() {
        return this._attributes;
    }
    merge(other) {
        if (!other) {
            return this;
        }
        return new SentryResource({
            ...this._attributes,
            ...other.attributes
        });
    }
    getRawAttributes() {
        return Object.entries(this._attributes);
    }
}
function parseOtelResourceAttributes(raw) {
    if (!raw) {
        return {};
    }
    const result = {};
    for (const pair of raw.split(",")){
        const eq = pair.indexOf("=");
        if (eq === -1) {
            continue;
        }
        const key = pair.substring(0, eq).trim();
        const value = pair.substring(eq + 1).trim();
        if (key) {
            try {
                result[key] = decodeURIComponent(value);
            } catch  {
                result[key] = value;
            }
        }
    }
    return result;
}
function getSentryResource(serviceNameFallback) {
    const env = typeof process !== "undefined" ? process.env : {};
    const otelServiceName = env.OTEL_SERVICE_NAME;
    const otelResourceAttrs = parseOtelResourceAttributes(env.OTEL_RESOURCE_ATTRIBUTES);
    return new SentryResource({
        // Lowest priority: Sentry defaults
        // eslint-disable-next-line typescript/no-deprecated
        [SEMRESATTRS_SERVICE_NAMESPACE]: "sentry",
        [attributes.SERVICE_NAME]: serviceNameFallback,
        // OTEL_RESOURCE_ATTRIBUTES overrides defaults (including service.name and service.namespace)
        ...otelResourceAttrs,
        // OTEL_SERVICE_NAME explicitly overrides service.name
        ...otelServiceName ? {
            [attributes.SERVICE_NAME]: otelServiceName
        } : {},
        // Highest priority: Sentry SDK telemetry attrs (cannot be overridden by env vars)
        [attributes.SERVICE_VERSION]: core.SDK_VERSION,
        [ATTR_TELEMETRY_SDK_LANGUAGE]: core$1.SDK_INFO[ATTR_TELEMETRY_SDK_LANGUAGE],
        [ATTR_TELEMETRY_SDK_NAME]: core$1.SDK_INFO[ATTR_TELEMETRY_SDK_NAME],
        [ATTR_TELEMETRY_SDK_VERSION]: core$1.SDK_INFO[ATTR_TELEMETRY_SDK_VERSION]
    });
}
function getTraceData({ span, scope, client, propagateTraceparent } = {}) {
    let ctx = (scope && getContextFromScope(scope)) ?? api.context.active();
    if (span) {
        const { scope: scope2 } = core.getCapturedScopesOnSpan(span);
        ctx = scope2 && getContextFromScope(scope2) || api.trace.setSpan(api.context.active(), span);
    }
    const { traceId, spanId, sampled, dynamicSamplingContext } = getInjectionData(ctx, {
        scope,
        client
    });
    const traceData = {
        "sentry-trace": core.generateSentryTraceHeader(traceId, spanId, sampled),
        baggage: core.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext)
    };
    if (propagateTraceparent) {
        traceData.traceparent = core.generateTraceparentHeader(traceId, spanId, sampled);
    }
    return traceData;
}
function setOpenTelemetryContextAsyncContextStrategy(options) {
    function getScopes() {
        const ctx = api.context.active();
        const scopes = getScopesFromContext(ctx);
        if (scopes) {
            return scopes;
        }
        return {
            scope: core.getDefaultCurrentScope(),
            isolationScope: core.getDefaultIsolationScope()
        };
    }
    function withScope(callback) {
        const ctx = api.context.active();
        return api.context.with(ctx, ()=>{
            return callback(getCurrentScope());
        });
    }
    function withSetScope(scope, callback) {
        const ctx = getContextFromScope(scope) || api.context.active();
        return api.context.with(ctx.setValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY, scope), ()=>{
            return callback(scope);
        });
    }
    function withIsolationScope(callback) {
        const ctx = api.context.active();
        return api.context.with(ctx.setValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY, true), ()=>{
            return callback(getIsolationScope());
        });
    }
    function withSetIsolationScope(isolationScope, callback) {
        const ctx = api.context.active();
        return api.context.with(ctx.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, isolationScope), ()=>{
            return callback(getIsolationScope());
        });
    }
    function getCurrentScope() {
        return getScopes().scope;
    }
    function getIsolationScope() {
        return getScopes().isolationScope;
    }
    core.setAsyncContextStrategy({
        withScope,
        withSetScope,
        withSetIsolationScope,
        withIsolationScope,
        getCurrentScope,
        getIsolationScope,
        startSpan,
        startSpanManual,
        startInactiveSpan,
        getActiveSpan,
        suppressTracing,
        isTracingSuppressed,
        getTraceData,
        continueTrace,
        startNewTrace,
        // The types here don't fully align, because our own `Span` type is narrower
        // than the OTEL one - but this is OK for here, as we now we'll only have OTEL spans passed around
        withActiveSpan,
        getTracingChannelBinding: options?.getTracingChannelBinding
    });
}
exports.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION;
exports.SENTRY_SCOPES_CONTEXT_KEY = SENTRY_SCOPES_CONTEXT_KEY;
exports.SENTRY_TRACE_STATE_CHILD_IGNORED = SENTRY_TRACE_STATE_CHILD_IGNORED;
exports.SentryPropagator = SentryPropagator;
exports.SentrySampler = SentrySampler;
exports.SentrySpanProcessor = SentrySpanProcessor;
exports.SentryTracerProvider = SentryTracerProvider;
exports.applyOtelSpanData = applyOtelSpanData;
exports.backfillStreamedSpanDataFromOtel = backfillStreamedSpanDataFromOtel;
exports.buildContextWithSentryScopes = buildContextWithSentryScopes;
exports.continueTrace = continueTrace;
exports.enhanceDscWithOpenTelemetryRootSpanName = enhanceDscWithOpenTelemetryRootSpanName;
exports.getActiveSpan = getActiveSpan;
exports.getRequestSpanData = getRequestSpanData;
exports.getScopesFromContext = getScopesFromContext;
exports.getSentryResource = getSentryResource;
exports.getSpanKind = getSpanKind;
exports.getTraceContextForScope = getTraceContextForScope;
exports.isSentryRequestSpan = isSentryRequestSpan;
exports.openTelemetrySetupCheck = openTelemetrySetupCheck;
exports.setIsSetup = setIsSetup;
exports.setOpenTelemetryContextAsyncContextStrategy = setOpenTelemetryContextAsyncContextStrategy;
exports.setupEventContextTrace = setupEventContextTrace;
exports.spanHasAttributes = spanHasAttributes;
exports.spanHasEvents = spanHasEvents;
exports.spanHasKind = spanHasKind;
exports.spanHasName = spanHasName;
exports.spanHasParentId = spanHasParentId;
exports.spanHasStatus = spanHasStatus;
exports.startInactiveSpan = startInactiveSpan;
exports.startSpan = startSpan;
exports.startSpanManual = startSpanManual;
exports.suppressTracing = suppressTracing;
exports.withActiveSpan = withActiveSpan;
exports.wrapClientClass = wrapClientClass;
exports.wrapContextManagerClass = wrapContextManagerClass;
exports.wrapSamplingDecision = wrapSamplingDecision; //# sourceMappingURL=asyncContextStrategy-volGaYqZ.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+opentelemetry@10.73.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.11.0_@open_fa4d0c3ec3b5e20c8da7d0e384f248a4/node_modules/@sentry/opentelemetry/build/cjs/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const asyncContextStrategy = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+opentelemetry@10.73.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.11.0_@open_fa4d0c3ec3b5e20c8da7d0e384f248a4/node_modules/@sentry/opentelemetry/build/cjs/asyncContextStrategy-volGaYqZ.js [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const api = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/index.js [instrumentation] (ecmascript)");
const node_async_hooks = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const node_events = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const ADD_LISTENER_METHODS = [
    "addListener",
    "on",
    "once",
    "prependListener",
    "prependOnceListener"
];
class SentryAsyncLocalStorageContextManager {
    constructor(){
        this._kOtListeners = /* @__PURE__ */ Symbol("OtListeners");
        this._wrapped = false;
        asyncContextStrategy.setIsSetup("SentryContextManager");
        this._asyncLocalStorage = core.getAsyncContextStrategy(core.getMainCarrier()).getTracingChannelBinding?.()?.asyncLocalStorage ?? new node_async_hooks.AsyncLocalStorage();
    }
    active() {
        return this._asyncLocalStorage.getStore() ?? api.ROOT_CONTEXT;
    }
    with(context, fn, thisArg, ...args) {
        const ctx2 = asyncContextStrategy.buildContextWithSentryScopes(context, this.active());
        const cb = thisArg == null ? fn : fn.bind(thisArg);
        return this._asyncLocalStorage.run(ctx2, cb, ...args);
    }
    enable() {
        return this;
    }
    disable() {
        this._asyncLocalStorage.disable();
        return this;
    }
    bind(context, target) {
        if (target instanceof node_events.EventEmitter) {
            return this._bindEventEmitter(context, target);
        }
        if (typeof target === "function") {
            return this._bindFunction(context, target);
        }
        return target;
    }
    /**
   * Gets underlying AsyncLocalStorage and symbol to allow lookup of scope.
   * This is Sentry-specific.
   */ getAsyncLocalStorageLookup() {
        return {
            asyncLocalStorage: this._asyncLocalStorage,
            contextSymbol: asyncContextStrategy.SENTRY_SCOPES_CONTEXT_KEY
        };
    }
    _bindFunction(context, target) {
        const managerWith = this.with.bind(this);
        const contextWrapper = function(...args) {
            return managerWith(context, ()=>target.apply(this, args));
        };
        Object.defineProperty(contextWrapper, "length", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        return contextWrapper;
    }
    _bindEventEmitter(context, ee) {
        if (this._getPatchMap(ee) !== void 0) {
            return ee;
        }
        this._createPatchMap(ee);
        for (const methodName of ADD_LISTENER_METHODS){
            if (ee[methodName] === void 0) continue;
            ee[methodName] = this._patchAddListener(ee, ee[methodName], context);
        }
        if (typeof ee.removeListener === "function") {
            ee.removeListener = this._patchRemoveListener(ee, ee.removeListener);
        }
        if (typeof ee.off === "function") {
            ee.off = this._patchRemoveListener(ee, ee.off);
        }
        if (typeof ee.removeAllListeners === "function") {
            ee.removeAllListeners = this._patchRemoveAllListeners(ee, // oxlint-disable-next-line @typescript-eslint/unbound-method
            ee.removeAllListeners);
        }
        return ee;
    }
    _patchRemoveListener(ee, original) {
        const contextManager = this;
        return function(event, listener) {
            const events = contextManager._getPatchMap(ee)?.[event];
            if (events === void 0) {
                return original.call(this, event, listener);
            }
            const patchedListener = events.get(listener);
            return original.call(this, event, patchedListener || listener);
        };
    }
    _patchRemoveAllListeners(ee, original) {
        const contextManager = this;
        return function(event) {
            const map = contextManager._getPatchMap(ee);
            if (map !== void 0) {
                if (arguments.length === 0) {
                    contextManager._createPatchMap(ee);
                } else if (event !== void 0 && map[event] !== void 0) {
                    delete map[event];
                }
            }
            return original.apply(this, arguments);
        };
    }
    _patchAddListener(ee, original, context) {
        const contextManager = this;
        return function(event, listener) {
            if (contextManager._wrapped) {
                return original.call(this, event, listener);
            }
            let map = contextManager._getPatchMap(ee);
            if (map === void 0) {
                map = contextManager._createPatchMap(ee);
            }
            let listeners = map[event];
            if (listeners === void 0) {
                listeners = /* @__PURE__ */ new WeakMap();
                map[event] = listeners;
            }
            const patchedListener = contextManager.bind(context, listener);
            listeners.set(listener, patchedListener);
            contextManager._wrapped = true;
            try {
                return original.call(this, event, patchedListener);
            } finally{
                contextManager._wrapped = false;
            }
        };
    }
    _createPatchMap(ee) {
        const map = /* @__PURE__ */ Object.create(null);
        ee[this._kOtListeners] = map;
        return map;
    }
    _getPatchMap(ee) {
        return ee[this._kOtListeners];
    }
}
function setNodeOpenTelemetryContextAsyncContextStrategy(options) {
    asyncContextStrategy.setOpenTelemetryContextAsyncContextStrategy({
        getTracingChannelBinding: !options?.skipOpenTelemetrySetup ? getDefaultAsyncLocalStorageFactory() : getCustomAsyncLocalStorageFactory()
    });
}
function getDefaultAsyncLocalStorageFactory() {
    const defaultAsyncLocalStorage = new node_async_hooks.AsyncLocalStorage();
    return ()=>{
        return {
            asyncLocalStorage: defaultAsyncLocalStorage,
            getStoreWithActiveSpan
        };
    };
}
function getCustomAsyncLocalStorageFactory() {
    return ()=>{
        try {
            const contextManager = api.context._getContextManager();
            const asyncLocalStorage = contextManager?.getAsyncLocalStorageLookup().asyncLocalStorage;
            return asyncLocalStorage ? {
                asyncLocalStorage,
                getStoreWithActiveSpan
            } : void 0;
        } catch  {
            return void 0;
        }
    };
}
function getStoreWithActiveSpan(span) {
    const activeContext = api.context.active();
    const isIgnoredChild = core.spanIsIgnored(span) && core.getRootSpan(span) !== span || span.spanContext().traceState?.get(asyncContextStrategy.SENTRY_TRACE_STATE_CHILD_IGNORED) === "1";
    return isIgnoredChild ? activeContext : api.trace.setSpan(activeContext, span);
}
exports.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = asyncContextStrategy.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION;
exports.SentryPropagator = asyncContextStrategy.SentryPropagator;
exports.SentrySampler = asyncContextStrategy.SentrySampler;
exports.SentrySpanProcessor = asyncContextStrategy.SentrySpanProcessor;
exports.SentryTracerProvider = asyncContextStrategy.SentryTracerProvider;
exports.applyOtelSpanData = asyncContextStrategy.applyOtelSpanData;
exports.backfillStreamedSpanDataFromOtel = asyncContextStrategy.backfillStreamedSpanDataFromOtel;
exports.continueTrace = asyncContextStrategy.continueTrace;
exports.enhanceDscWithOpenTelemetryRootSpanName = asyncContextStrategy.enhanceDscWithOpenTelemetryRootSpanName;
exports.getActiveSpan = asyncContextStrategy.getActiveSpan;
exports.getRequestSpanData = asyncContextStrategy.getRequestSpanData;
exports.getScopesFromContext = asyncContextStrategy.getScopesFromContext;
exports.getSentryResource = asyncContextStrategy.getSentryResource;
exports.getSpanKind = asyncContextStrategy.getSpanKind;
exports.getTraceContextForScope = asyncContextStrategy.getTraceContextForScope;
exports.isSentryRequestSpan = asyncContextStrategy.isSentryRequestSpan;
exports.openTelemetrySetupCheck = asyncContextStrategy.openTelemetrySetupCheck;
exports.setIsSetup = asyncContextStrategy.setIsSetup;
exports.setupEventContextTrace = asyncContextStrategy.setupEventContextTrace;
exports.spanHasAttributes = asyncContextStrategy.spanHasAttributes;
exports.spanHasEvents = asyncContextStrategy.spanHasEvents;
exports.spanHasKind = asyncContextStrategy.spanHasKind;
exports.spanHasName = asyncContextStrategy.spanHasName;
exports.spanHasParentId = asyncContextStrategy.spanHasParentId;
exports.spanHasStatus = asyncContextStrategy.spanHasStatus;
exports.startInactiveSpan = asyncContextStrategy.startInactiveSpan;
exports.startSpan = asyncContextStrategy.startSpan;
exports.startSpanManual = asyncContextStrategy.startSpanManual;
exports.suppressTracing = asyncContextStrategy.suppressTracing;
exports.withActiveSpan = asyncContextStrategy.withActiveSpan;
exports.wrapClientClass = asyncContextStrategy.wrapClientClass;
exports.wrapContextManagerClass = asyncContextStrategy.wrapContextManagerClass;
exports.wrapSamplingDecision = asyncContextStrategy.wrapSamplingDecision;
exports.getClient = core.getClient;
exports.getDynamicSamplingContextFromSpan = core.getDynamicSamplingContextFromSpan;
exports.shouldPropagateTraceForUrl = core.shouldPropagateTraceForUrl;
exports.withStreamedSpan = core.withStreamedSpan;
exports.SentryAsyncLocalStorageContextManager = SentryAsyncLocalStorageContextManager;
exports.setOpenTelemetryContextAsyncContextStrategy = setNodeOpenTelemetryContextAsyncContextStrategy; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/stacktrace-parser@0.1.11/node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
var UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */ function parse(stackString) {
    var lines = stackString.split('\n');
    return lines.reduce(function(stack, line) {
        var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);
        if (parseResult) {
            stack.push(parseResult);
        }
        return stack;
    }, []);
}
var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function parseChrome(line) {
    var parts = chromeRe.exec(line);
    if (!parts) {
        return null;
    }
    var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
    var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
    var submatch = chromeEvalRe.exec(parts[2]);
    if (isEval && submatch != null) {
        // throw out eval line/column and use top-most line/column number
        parts[2] = submatch[1]; // url
        parts[3] = submatch[2]; // line
        parts[4] = submatch[3]; // column
    }
    return {
        file: !isNative ? parts[2] : null,
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: isNative ? [
            parts[2]
        ] : [],
        lineNumber: parts[3] ? +parts[3] : null,
        column: parts[4] ? +parts[4] : null
    };
}
var winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseWinjs(line) {
    var parts = winjsRe.exec(line);
    if (!parts) {
        return null;
    }
    return {
        file: parts[2],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
    };
}
var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGecko(line) {
    var parts = geckoRe.exec(line);
    if (!parts) {
        return null;
    }
    var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
    var submatch = geckoEvalRe.exec(parts[3]);
    if (isEval && submatch != null) {
        // throw out eval line/column and use top-most line number
        parts[3] = submatch[1];
        parts[4] = submatch[2];
        parts[5] = null; // no column when eval
    }
    return {
        file: parts[3],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: parts[2] ? parts[2].split(',') : [],
        lineNumber: parts[4] ? +parts[4] : null,
        column: parts[5] ? +parts[5] : null
    };
}
var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function parseJSC(line) {
    var parts = javaScriptCoreRe.exec(line);
    if (!parts) {
        return null;
    }
    return {
        file: parts[3],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[4],
        column: parts[5] ? +parts[5] : null
    };
}
var nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseNode(line) {
    var parts = nodeRe.exec(line);
    if (!parts) {
        return null;
    }
    return {
        file: parts[2],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
    };
}
;
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/shared/lib/modern-browserslist-target.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ const MODERN_BROWSERSLIST_TARGET = [
    'chrome 64',
    'edge 79',
    'firefox 67',
    'opera 51',
    'safari 12'
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/shared/lib/constants.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_BUILD_MANIFEST: null,
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    AdapterOutputType: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_AMP: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_MIDDLEWARE_MANIFEST: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    DYNAMIC_CSS_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    PAGES_MANIFEST: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBOPACK_CLIENT_BUILD_MANIFEST: null,
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null,
    WEBPACK_STATS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    AdapterOutputType: function() {
        return AdapterOutputType;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return DEV_CLIENT_MIDDLEWARE_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DYNAMIC_CSS_MANIFEST: function() {
        return DYNAMIC_CSS_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
        return TURBOPACK_CLIENT_BUILD_MANIFEST;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    },
    WEBPACK_STATS: function() {
        return WEBPACK_STATS;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [instrumentation] (ecmascript)");
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/shared/lib/modern-browserslist-target.js [instrumentation] (ecmascript)"));
const COMPILER_NAMES = {
    client: 'client',
    server: 'server',
    edgeServer: 'edge-server'
};
var AdapterOutputType = /*#__PURE__*/ function(AdapterOutputType) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ AdapterOutputType["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ AdapterOutputType["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ AdapterOutputType["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ AdapterOutputType["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `PRERENDER` represents an ISR enabled route that might
   * have a seeded cache entry or fallback generated during build
   */ AdapterOutputType["PRERENDER"] = "PRERENDER";
    /**
   * `STATIC_FILE` represents a static file (ie /_next/static)
   */ AdapterOutputType["STATIC_FILE"] = "STATIC_FILE";
    /**
   * `MIDDLEWARE` represents the middleware output if present
   */ AdapterOutputType["MIDDLEWARE"] = "MIDDLEWARE";
    return AdapterOutputType;
}({});
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = '/_not-found';
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = 'phase-export';
const PHASE_PRODUCTION_BUILD = 'phase-production-build';
const PHASE_PRODUCTION_SERVER = 'phase-production-server';
const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
const PHASE_TEST = 'phase-test';
const PHASE_INFO = 'phase-info';
const PAGES_MANIFEST = 'pages-manifest.json';
const WEBPACK_STATS = 'webpack-stats.json';
const APP_PATHS_MANIFEST = 'app-paths-manifest.json';
const APP_PATH_ROUTES_MANIFEST = 'app-path-routes-manifest.json';
const BUILD_MANIFEST = 'build-manifest.json';
const APP_BUILD_MANIFEST = 'app-build-manifest.json';
const FUNCTIONS_CONFIG_MANIFEST = 'functions-config-manifest.json';
const SUBRESOURCE_INTEGRITY_MANIFEST = 'subresource-integrity-manifest';
const NEXT_FONT_MANIFEST = 'next-font-manifest';
const EXPORT_MARKER = 'export-marker.json';
const EXPORT_DETAIL = 'export-detail.json';
const PRERENDER_MANIFEST = 'prerender-manifest.json';
const ROUTES_MANIFEST = 'routes-manifest.json';
const IMAGES_MANIFEST = 'images-manifest.json';
const SERVER_FILES_MANIFEST = 'required-server-files.json';
const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
const TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST = '_clientMiddlewareManifest.json';
const TURBOPACK_CLIENT_BUILD_MANIFEST = 'client-build-manifest.json';
const DEV_CLIENT_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
const SERVER_DIRECTORY = 'server';
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts'
];
const BUILD_ID_FILE = 'BUILD_ID';
const BLOCKED_PAGES = [
    '/_document',
    '/_app',
    '/_error'
];
const CLIENT_PUBLIC_FILES_PATH = 'public';
const CLIENT_STATIC_FILES_PATH = 'static';
const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__';
const BARREL_OPTIMIZATION_PREFIX = '__barrel_optimize__';
const CLIENT_REFERENCE_MANIFEST = 'client-reference-manifest';
const SERVER_REFERENCE_MANIFEST = 'server-reference-manifest';
const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = 'interception-route-rewrite-manifest';
const DYNAMIC_CSS_MANIFEST = 'dynamic-css-manifest';
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = 'app-pages-internals';
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = 'polyfills';
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = 'webpack-runtime';
const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack';
const STATIC_PROPS_ID = '__N_SSG';
const SERVER_PROPS_ID = '__N_SSP';
const DEFAULT_SERIF_FONT = {
    name: 'Times New Roman',
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: 'Arial',
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    '/500'
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: 'client',
    server: 'server'
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    'clearImmediate',
    'setImmediate',
    'BroadcastChannel',
    'ByteLengthQueuingStrategy',
    'CompressionStream',
    'CountQueuingStrategy',
    'DecompressionStream',
    'DomException',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamDefaultController',
    'TransformStreamDefaultController',
    'WritableStreamDefaultController'
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/constants.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/next@15.5.25_@babel+core@7.29.7_@opentelemetry+api@1.9.1_@types+node@20.19.43_react-dom_6ba7cdcaec5cde500f6a59b53144a322/node_modules/next/dist/shared/lib/constants.js [instrumentation] (ecmascript)");
}),
];

//# sourceMappingURL=34c60__pnpm_26a9e93b._.js.map