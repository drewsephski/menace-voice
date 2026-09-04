module.exports = [
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const SUBSCRIBE_TRANSFORM_NAME = "sentrySubscribeOrchestrionChannel";
function toSubscribeInjections(configs) {
    const seen = /* @__PURE__ */ new Set();
    const injections = [];
    for (const { module } of configs){
        const key = `${module.name}\0${module.versionRange}\0${String(module.filePath)}`;
        if (seen.has(key)) {
            continue;
        }
        seen.add(key);
        injections.push({
            channelName: module.name,
            module,
            astQuery: "Program",
            transform: SUBSCRIBE_TRANSFORM_NAME
        });
    }
    return injections;
}
exports.SUBSCRIBE_TRANSFORM_NAME = SUBSCRIBE_TRANSFORM_NAME;
exports.toSubscribeInjections = toSubscribeInjections; //# sourceMappingURL=subscribe-injection.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/aws-sdk.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const awsSdkConfig = [
    {
        channelName: "send",
        module: {
            name: "@smithy/core",
            versionRange: ">=3.24.0 <4",
            filePath: "dist-cjs/submodules/client/index.js"
        },
        functionQuery: {
            className: "Client",
            methodName: "send",
            kind: "Async"
        }
    },
    {
        channelName: "send",
        module: {
            name: "@smithy/smithy-client",
            versionRange: ">=1.0.3 <5",
            filePath: "dist-cjs/index.js"
        },
        functionQuery: {
            className: "Client",
            methodName: "send",
            kind: "Async"
        }
    },
    {
        channelName: "send",
        module: {
            name: "@aws-sdk/smithy-client",
            versionRange: "^3.1.0",
            filePath: "dist-cjs/index.js"
        },
        functionQuery: {
            className: "Client",
            methodName: "send",
            kind: "Async"
        }
    }
];
const awsSdkChannels = {
    AWS_SMITHY_CORE_SEND: "orchestrion:@smithy/core:send",
    AWS_SMITHY_CLIENT_SEND: "orchestrion:@smithy/smithy-client:send",
    AWS_SDK_SMITHY_CLIENT_SEND: "orchestrion:@aws-sdk/smithy-client:send"
};
const awsSdkSubscribeInjection = subscribeInjection.toSubscribeInjections(awsSdkConfig);
exports.awsSdkChannels = awsSdkChannels;
exports.awsSdkConfig = awsSdkConfig;
exports.awsSdkSubscribeInjection = awsSdkSubscribeInjection; //# sourceMappingURL=aws-sdk.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/amqplib.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const module$1 = {
    name: "amqplib",
    versionRange: ">=0.5.5 <2"
};
const amqplibConfig = [
    // Producer span + trace-header injection. `sendToQueue` delegates to `publish`, so it's covered.
    {
        channelName: "publish",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "publish",
            kind: "Sync"
        }
    },
    // Confirm-channel producer span; the trailing broker-confirm callback ends the span when the
    // broker acks/nacks. It internally calls `super.publish`, so the subscriber guards against the
    // base `publish` channel double-instrumenting.
    {
        channelName: "confirmPublish",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "ConfirmChannel",
            methodName: "publish",
            kind: "Callback"
        }
    },
    // Records `consumerTag -> { noAck, queue }` so the per-message dispatch hook knows how to name and
    // when to end the consumer span.
    {
        channelName: "consume",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "consume",
            kind: "Async"
        }
    },
    // Per delivered message: creates the consumer span and runs the user callback under it.
    {
        channelName: "dispatch",
        module: {
            ...module$1,
            filePath: "lib/channel.js"
        },
        functionQuery: {
            className: "BaseChannel",
            methodName: "dispatchMessage",
            kind: "Sync"
        }
    },
    // End the consumer span when the user settles the message.
    {
        channelName: "ack",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "ack",
            kind: "Sync"
        }
    },
    {
        channelName: "nack",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "nack",
            kind: "Sync"
        }
    },
    {
        channelName: "reject",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "reject",
            kind: "Sync"
        }
    },
    {
        channelName: "ackAll",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "ackAll",
            kind: "Sync"
        }
    },
    {
        channelName: "nackAll",
        module: {
            ...module$1,
            filePath: "lib/channel_model.js"
        },
        functionQuery: {
            className: "Channel",
            methodName: "nackAll",
            kind: "Sync"
        }
    },
    // Stashes connection attributes (url/host/port/protocol/server product) on the connection object
    // for span-time reads via `channel.connection`.
    {
        channelName: "connect",
        module: {
            ...module$1,
            filePath: "lib/connect.js"
        },
        functionQuery: {
            functionName: "connect",
            kind: "Callback"
        }
    }
];
const amqplibChannels = {
    AMQPLIB_PUBLISH: "orchestrion:amqplib:publish",
    AMQPLIB_CONFIRM_PUBLISH: "orchestrion:amqplib:confirmPublish",
    AMQPLIB_CONSUME: "orchestrion:amqplib:consume",
    AMQPLIB_DISPATCH: "orchestrion:amqplib:dispatch",
    AMQPLIB_ACK: "orchestrion:amqplib:ack",
    AMQPLIB_NACK: "orchestrion:amqplib:nack",
    AMQPLIB_REJECT: "orchestrion:amqplib:reject",
    AMQPLIB_ACK_ALL: "orchestrion:amqplib:ackAll",
    AMQPLIB_NACK_ALL: "orchestrion:amqplib:nackAll",
    AMQPLIB_CONNECT: "orchestrion:amqplib:connect"
};
const amqplibSubscribeInjection = subscribeInjection.toSubscribeInjections(amqplibConfig);
exports.amqplibChannels = amqplibChannels;
exports.amqplibConfig = amqplibConfig;
exports.amqplibSubscribeInjection = amqplibSubscribeInjection; //# sourceMappingURL=amqplib.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/anthropic-ai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const anthropicAiConfig = [
    // One entry each for CJS/ESM
    ...[
        "resources/messages/messages.js",
        "resources/messages/messages.mjs"
    ].flatMap((filePath)=>[
            "create",
            "countTokens"
        ].map((methodName)=>({
                channelName: "chat",
                module: {
                    name: "@anthropic-ai/sdk",
                    versionRange: ">=0.19.2 <1",
                    filePath
                },
                functionQuery: {
                    className: "Messages",
                    methodName,
                    kind: "Auto"
                }
            }))),
    ...[
        "resources/completions.js",
        "resources/completions.mjs"
    ].map((filePath)=>({
            channelName: "chat",
            module: {
                name: "@anthropic-ai/sdk",
                versionRange: ">=0.19.2 <1",
                filePath
            },
            functionQuery: {
                className: "Completions",
                methodName: "create",
                kind: "Auto"
            }
        })),
    ...[
        "resources/beta/messages/messages.js",
        "resources/beta/messages/messages.mjs"
    ].map((filePath)=>({
            channelName: "chat",
            module: {
                name: "@anthropic-ai/sdk",
                versionRange: ">=0.19.2 <1",
                filePath
            },
            functionQuery: {
                className: "Messages",
                methodName: "create",
                kind: "Auto"
            }
        })),
    ...[
        "resources/models.js",
        "resources/models.mjs"
    ].map((filePath)=>({
            channelName: "models",
            module: {
                name: "@anthropic-ai/sdk",
                versionRange: ">=0.19.2 <1",
                filePath
            },
            functionQuery: {
                className: "Models",
                methodName: "retrieve",
                kind: "Auto"
            }
        })),
    // `messages.stream()` returns a synchronous emitter, not a promise, so `kind: 'Sync'` is required:
    // `Auto`'s promise wrapper never publishes `end` for a non-thenable return, so the span would never end.
    ...[
        "resources/messages/messages.js",
        "resources/messages/messages.mjs"
    ].map((filePath)=>({
            channelName: "messages-stream",
            module: {
                name: "@anthropic-ai/sdk",
                versionRange: ">=0.19.2 <1",
                filePath
            },
            functionQuery: {
                className: "Messages",
                methodName: "stream",
                kind: "Sync"
            }
        }))
];
const anthropicAiChannels = {
    ANTHROPIC_CHAT: "orchestrion:@anthropic-ai/sdk:chat",
    ANTHROPIC_MODELS: "orchestrion:@anthropic-ai/sdk:models",
    ANTHROPIC_MESSAGES_STREAM: "orchestrion:@anthropic-ai/sdk:messages-stream"
};
const anthropicAiSubscribeInjection = subscribeInjection.toSubscribeInjections(anthropicAiConfig);
exports.anthropicAiChannels = anthropicAiChannels;
exports.anthropicAiConfig = anthropicAiConfig;
exports.anthropicAiSubscribeInjection = anthropicAiSubscribeInjection; //# sourceMappingURL=anthropic-ai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/dataloader.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const module$1 = {
    name: "dataloader",
    versionRange: ">=2.0.0 <3",
    filePath: "index.js"
};
const dataloaderConfig = [
    // Wrap the constructor so the subscriber can wrap the user's `batchLoadFn` (arg 0). The batch span
    // is opened when that wrapped function actually runs (on the deferred dispatch tick), mirroring the
    // vendored OTel instrumentation which also wraps `batchLoadFn` at construction time.
    {
        channelName: "construct",
        module: module$1,
        functionQuery: {
            functionName: "DataLoader",
            kind: "Sync"
        }
    },
    // `load`/`loadMany` return Promises, so they're `Async`: the span ends on `asyncEnd` (when the
    // load resolves), capturing the real latency and enclosing the deferred `batch` span — matching the
    // vendored OTel `startSpan`. `prime`/`clear`/`clearAll` return `this` synchronously, so they stay `Sync`.
    {
        channelName: "load",
        module: module$1,
        functionQuery: {
            expressionName: "load",
            kind: "Async"
        }
    },
    {
        channelName: "loadMany",
        module: module$1,
        functionQuery: {
            expressionName: "loadMany",
            kind: "Async"
        }
    },
    {
        channelName: "prime",
        module: module$1,
        functionQuery: {
            expressionName: "prime",
            kind: "Sync"
        }
    },
    {
        channelName: "clear",
        module: module$1,
        functionQuery: {
            expressionName: "clear",
            kind: "Sync"
        }
    },
    {
        channelName: "clearAll",
        module: module$1,
        functionQuery: {
            expressionName: "clearAll",
            kind: "Sync"
        }
    }
];
const dataloaderChannels = {
    DATALOADER_CONSTRUCT: "orchestrion:dataloader:construct",
    DATALOADER_LOAD: "orchestrion:dataloader:load",
    DATALOADER_LOAD_MANY: "orchestrion:dataloader:loadMany",
    DATALOADER_PRIME: "orchestrion:dataloader:prime",
    DATALOADER_CLEAR: "orchestrion:dataloader:clear",
    DATALOADER_CLEAR_ALL: "orchestrion:dataloader:clearAll"
};
const dataloaderSubscribeInjection = subscribeInjection.toSubscribeInjections(dataloaderConfig);
exports.dataloaderChannels = dataloaderChannels;
exports.dataloaderConfig = dataloaderConfig;
exports.dataloaderSubscribeInjection = dataloaderSubscribeInjection; //# sourceMappingURL=dataloader.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/express.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const expressConfig = [
    // Express funnels every middleware/route handler through a single method on
    // its routing `Layer`, so instrumenting that one method covers the whole
    // request pipeline. The `expressChannelIntegration` opens one span per layer
    // invocation. Both are `Layer.prototype.<method> = function <fn>(req, res, next)`
    // prototype assignments (not `class` methods), so `expressionName` (matching
    // the assignment's `left.property.name`) is used. `Callback`: the handler's
    // last argument is `next`, so the transform ends the traced operation when
    // `next` is invoked (and publishes `error` when it's called with an error).
    //
    // Express v4 ships its own router in `express/lib/router/layer.js`.
    {
        channelName: "handle",
        module: {
            name: "express",
            versionRange: ">=4.0.0 <5",
            filePath: "lib/router/layer.js"
        },
        // v4's method is `Layer.prototype.handle_request = function handle(...)` —
        // match the assigned property name, not the function name.
        functionQuery: {
            expressionName: "handle_request",
            kind: "Callback"
        }
    },
    // Express v5 delegates routing to the standalone `router` package.
    {
        channelName: "handle",
        module: {
            name: "router",
            versionRange: ">=2.0.0 <3",
            filePath: "lib/layer.js"
        },
        functionQuery: {
            expressionName: "handleRequest",
            kind: "Callback"
        }
    },
    // Layer *registration* methods. `Router.prototype.route`/`.use` are called
    // once per registered route/middleware (including internally by `app.get`/
    // `app.use`), so subscribing here lets us record each layer's registered path
    // *pattern* — which the handler path (`req.baseUrl`) can't recover for
    // parameterized mounts. `Sync`: these return synchronously and, unlike a
    // handler, `use`'s trailing function argument is a registration payload, not a
    // callback — so `Callback` would misclassify it and never fire `end`.
    //
    // `route` and `use` share one `register` channel because the subscriber handles
    // them identically, saving a channel per module.
    //
    // Express v4 ships its own router in `express/lib/router/index.js`.
    {
        channelName: "register",
        module: {
            name: "express",
            versionRange: ">=4.0.0 <5",
            filePath: "lib/router/index.js"
        },
        functionQuery: {
            expressionName: "route",
            kind: "Sync"
        }
    },
    {
        channelName: "register",
        module: {
            name: "express",
            versionRange: ">=4.0.0 <5",
            filePath: "lib/router/index.js"
        },
        functionQuery: {
            expressionName: "use",
            kind: "Sync"
        }
    },
    // Express v5 delegates routing to the standalone `router` package.
    {
        channelName: "register",
        module: {
            name: "router",
            versionRange: ">=2.0.0 <3",
            filePath: "index.js"
        },
        functionQuery: {
            expressionName: "route",
            kind: "Sync"
        }
    },
    {
        channelName: "register",
        module: {
            name: "router",
            versionRange: ">=2.0.0 <3",
            filePath: "index.js"
        },
        functionQuery: {
            expressionName: "use",
            kind: "Sync"
        }
    }
];
const expressChannels = {
    // Express v4 runs each layer's handler through `Layer.prototype.handle_request`
    // in the `express` module.
    EXPRESS_HANDLE: "orchestrion:express:handle",
    // Express v5 delegates routing to the standalone `router` package, where the
    // equivalent method is `Layer.prototype.handleRequest`.
    ROUTER_HANDLE: "orchestrion:router:handle",
    // Layer *registration* (`Router.prototype.route`/`.use`), used to capture each
    // layer's registered path pattern so the matched route can be reconstructed
    // with its parameters intact (`req.baseUrl` only exposes the resolved prefix).
    EXPRESS_REGISTER: "orchestrion:express:register",
    ROUTER_REGISTER: "orchestrion:router:register"
};
const expressSubscribeInjection = subscribeInjection.toSubscribeInjections(expressConfig);
exports.expressChannels = expressChannels;
exports.expressConfig = expressConfig;
exports.expressSubscribeInjection = expressSubscribeInjection; //# sourceMappingURL=express.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/firebase.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const FIRESTORE_VERSION_RANGE = ">=3.0.0 <5";
const FIRESTORE_FILE = /dist\/lite\/(index|common-[^/]+)\.node\.(cjs\.js|mjs)$/;
const FIRESTORE_OPERATIONS = [
    {
        functionName: "addDoc",
        channelName: "add-doc"
    },
    {
        functionName: "getDocs",
        channelName: "get-docs"
    },
    {
        functionName: "setDoc",
        channelName: "set-doc"
    },
    {
        functionName: "deleteDoc",
        channelName: "delete-doc"
    }
];
const FUNCTIONS_VERSION_RANGE = ">=6.0.0 <7";
const FUNCTIONS_TRIGGERS = [
    {
        file: "lib/v2/providers/https.js",
        functionName: "onRequest",
        channelName: "http-request"
    },
    {
        file: "lib/v2/providers/https.js",
        functionName: "onCall",
        channelName: "http-call"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentCreated",
        channelName: "firestore-created"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentCreatedWithAuthContext",
        channelName: "firestore-created"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentUpdated",
        channelName: "firestore-updated"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentUpdatedWithAuthContext",
        channelName: "firestore-updated"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentDeleted",
        channelName: "firestore-deleted"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentDeletedWithAuthContext",
        channelName: "firestore-deleted"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentWritten",
        channelName: "firestore-written"
    },
    {
        file: "lib/v2/providers/firestore.js",
        functionName: "onDocumentWrittenWithAuthContext",
        channelName: "firestore-written"
    },
    {
        file: "lib/v2/providers/scheduler.js",
        functionName: "onSchedule",
        channelName: "scheduler"
    },
    {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectFinalized",
        channelName: "storage-finalized"
    },
    {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectArchived",
        channelName: "storage-archived"
    },
    {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectDeleted",
        channelName: "storage-deleted"
    },
    {
        file: "lib/v2/providers/storage.js",
        functionName: "onObjectMetadataUpdated",
        channelName: "storage-metadata-updated"
    }
];
const firebaseConfig = [
    ...FIRESTORE_OPERATIONS.map(({ functionName, channelName })=>({
            channelName,
            module: {
                name: "@firebase/firestore",
                versionRange: FIRESTORE_VERSION_RANGE,
                filePath: FIRESTORE_FILE
            },
            functionQuery: {
                functionName,
                kind: "Auto"
            }
        })),
    ...FUNCTIONS_TRIGGERS.map(({ file, functionName, channelName })=>({
            channelName,
            module: {
                name: "firebase-functions",
                versionRange: FUNCTIONS_VERSION_RANGE,
                filePath: file
            },
            functionQuery: {
                functionName,
                kind: "Sync"
            }
        }))
];
const firebaseChannels = {
    FIREBASE_FIRESTORE_ADD_DOC: "orchestrion:@firebase/firestore:add-doc",
    FIREBASE_FIRESTORE_GET_DOCS: "orchestrion:@firebase/firestore:get-docs",
    FIREBASE_FIRESTORE_SET_DOC: "orchestrion:@firebase/firestore:set-doc",
    FIREBASE_FIRESTORE_DELETE_DOC: "orchestrion:@firebase/firestore:delete-doc",
    FIREBASE_FUNCTIONS_HTTP_REQUEST: "orchestrion:firebase-functions:http-request",
    FIREBASE_FUNCTIONS_HTTP_CALL: "orchestrion:firebase-functions:http-call",
    FIREBASE_FUNCTIONS_FIRESTORE_CREATED: "orchestrion:firebase-functions:firestore-created",
    FIREBASE_FUNCTIONS_FIRESTORE_UPDATED: "orchestrion:firebase-functions:firestore-updated",
    FIREBASE_FUNCTIONS_FIRESTORE_DELETED: "orchestrion:firebase-functions:firestore-deleted",
    FIREBASE_FUNCTIONS_FIRESTORE_WRITTEN: "orchestrion:firebase-functions:firestore-written",
    FIREBASE_FUNCTIONS_SCHEDULER: "orchestrion:firebase-functions:scheduler",
    FIREBASE_FUNCTIONS_STORAGE_FINALIZED: "orchestrion:firebase-functions:storage-finalized",
    FIREBASE_FUNCTIONS_STORAGE_ARCHIVED: "orchestrion:firebase-functions:storage-archived",
    FIREBASE_FUNCTIONS_STORAGE_DELETED: "orchestrion:firebase-functions:storage-deleted",
    FIREBASE_FUNCTIONS_STORAGE_METADATA_UPDATED: "orchestrion:firebase-functions:storage-metadata-updated"
};
const firebaseSubscribeInjection = subscribeInjection.toSubscribeInjections(firebaseConfig);
exports.firebaseChannels = firebaseChannels;
exports.firebaseConfig = firebaseConfig;
exports.firebaseSubscribeInjection = firebaseSubscribeInjection; //# sourceMappingURL=firebase.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/generic-pool.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const genericPoolConfig = [
    {
        channelName: "acquire",
        module: {
            name: "generic-pool",
            versionRange: ">=3.0.0 <4",
            filePath: "lib/Pool.js"
        },
        functionQuery: {
            className: "Pool",
            methodName: "acquire",
            kind: "Auto"
        }
    },
    {
        channelName: "acquire",
        module: {
            name: "generic-pool",
            versionRange: ">=2.4.0 <3",
            filePath: "lib/generic-pool.js"
        },
        functionQuery: {
            expressionName: "acquire",
            kind: "Callback"
        }
    }
];
const genericPoolChannels = {
    GENERIC_POOL_ACQUIRE: "orchestrion:generic-pool:acquire"
};
const genericPoolSubscribeInjection = subscribeInjection.toSubscribeInjections(genericPoolConfig);
exports.genericPoolChannels = genericPoolChannels;
exports.genericPoolConfig = genericPoolConfig;
exports.genericPoolSubscribeInjection = genericPoolSubscribeInjection; //# sourceMappingURL=generic-pool.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/google-genai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const NODE_DIST_FILES = [
    "dist/node/index.js",
    "dist/node/index.mjs",
    "dist/node/index.cjs"
];
const googleGenAiConfig = [
    // `generateContent`/`generateContentStream` are arrow properties assigned in the constructor, not class
    // methods, so they need `expressionName` rather than `className`/`methodName`.
    ...NODE_DIST_FILES.flatMap((filePath)=>[
            "generateContent",
            "generateContentStream"
        ].map((expressionName)=>({
                channelName: "generate-content",
                module: {
                    name: "@google/genai",
                    versionRange: ">=0.10.0 <2",
                    filePath
                },
                functionQuery: {
                    expressionName,
                    kind: "Auto"
                }
            }))),
    // `embedContent` and the `Chat` methods are real class methods.
    ...NODE_DIST_FILES.map((filePath)=>({
            channelName: "embed-content",
            module: {
                name: "@google/genai",
                versionRange: ">=0.10.0 <2",
                filePath
            },
            functionQuery: {
                className: "Models",
                methodName: "embedContent",
                kind: "Auto"
            }
        })),
    // `sendMessage`/`sendMessageStream` internally delegate to `Models.generateContent(Stream)`; the
    // subscriber suppresses that nested `generate-content` event so a chat call yields a single span.
    ...NODE_DIST_FILES.flatMap((filePath)=>[
            "sendMessage",
            "sendMessageStream"
        ].map((methodName)=>({
                channelName: "chat",
                module: {
                    name: "@google/genai",
                    versionRange: ">=0.10.0 <2",
                    filePath
                },
                functionQuery: {
                    className: "Chat",
                    methodName,
                    kind: "Auto"
                }
            })))
];
const googleGenAiChannels = {
    GOOGLE_GENAI_GENERATE_CONTENT: "orchestrion:@google/genai:generate-content",
    GOOGLE_GENAI_EMBED_CONTENT: "orchestrion:@google/genai:embed-content",
    GOOGLE_GENAI_CHAT: "orchestrion:@google/genai:chat"
};
const googleGenAiSubscribeInjection = subscribeInjection.toSubscribeInjections(googleGenAiConfig);
exports.googleGenAiChannels = googleGenAiChannels;
exports.googleGenAiConfig = googleGenAiConfig;
exports.googleGenAiSubscribeInjection = googleGenAiSubscribeInjection; //# sourceMappingURL=google-genai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/graphql.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const graphqlConfig = [
    {
        channelName: "parse",
        module: {
            name: "graphql",
            versionRange: ">=14.0.0 <17",
            filePath: "language/parser.js"
        },
        functionQuery: {
            functionName: "parse",
            kind: "Sync"
        }
    },
    {
        channelName: "validate",
        module: {
            name: "graphql",
            versionRange: ">=14.0.0 <17",
            filePath: "validation/validate.js"
        },
        functionQuery: {
            functionName: "validate",
            kind: "Sync"
        }
    },
    {
        channelName: "execute",
        module: {
            name: "graphql",
            versionRange: ">=14.0.0 <17",
            filePath: "execution/execute.js"
        },
        functionQuery: {
            functionName: "execute",
            kind: "Auto"
        }
    }
];
const graphqlChannels = {
    GRAPHQL_PARSE: "orchestrion:graphql:parse",
    GRAPHQL_VALIDATE: "orchestrion:graphql:validate",
    GRAPHQL_EXECUTE: "orchestrion:graphql:execute"
};
const graphqlSubscribeInjection = subscribeInjection.toSubscribeInjections(graphqlConfig);
exports.graphqlChannels = graphqlChannels;
exports.graphqlConfig = graphqlConfig;
exports.graphqlSubscribeInjection = graphqlSubscribeInjection; //# sourceMappingURL=graphql.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/hapi.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const hapiConfig = [
    // hapi's `route`/`ext` live on an anonymous class (`internals.Server = class {}`),
    // so `{className}` can't match — `{methodName}` targets them in lib/server.js. Both
    // are synchronous void methods, so `Sync` suffices: we only use `start` to swap
    // handlers in `ctx.arguments`. Shape verified across the whole range.
    {
        channelName: "route",
        module: {
            name: "@hapi/hapi",
            versionRange: ">=17.0.0 <22.0.0",
            filePath: "lib/server.js"
        },
        functionQuery: {
            methodName: "route",
            kind: "Sync"
        }
    },
    {
        channelName: "ext",
        module: {
            name: "@hapi/hapi",
            versionRange: ">=17.0.0 <22.0.0",
            filePath: "lib/server.js"
        },
        functionQuery: {
            methodName: "ext",
            kind: "Sync"
        }
    }
];
const hapiChannels = {
    HAPI_ROUTE: "orchestrion:@hapi/hapi:route",
    HAPI_EXT: "orchestrion:@hapi/hapi:ext"
};
const hapiSubscribeInjection = subscribeInjection.toSubscribeInjections(hapiConfig);
exports.hapiChannels = hapiChannels;
exports.hapiConfig = hapiConfig;
exports.hapiSubscribeInjection = hapiSubscribeInjection; //# sourceMappingURL=hapi.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/ioredis.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const ioredisConfig = [
    // ioredis `<5.11.0` (>=5.11.0 publishes its own `ioredis:*` diagnostics_channel)
    ...[
        "lib/redis.js",
        "built/redis.js",
        "built/redis/index.js"
    ].flatMap((filePath)=>[
            {
                channelName: "command",
                module: {
                    name: "ioredis",
                    versionRange: ">=2.0.0 <5.0.0",
                    filePath
                },
                functionQuery: {
                    expressionName: "sendCommand",
                    kind: "Async"
                }
            },
            {
                channelName: "connect",
                module: {
                    name: "ioredis",
                    versionRange: ">=2.0.0 <5.0.0",
                    filePath
                },
                functionQuery: {
                    expressionName: "connect",
                    kind: "Async"
                }
            }
        ]),
    {
        channelName: "command",
        module: {
            name: "ioredis",
            versionRange: ">=5.0.0 <5.11.0",
            filePath: "built/Redis.js"
        },
        functionQuery: {
            className: "Redis",
            methodName: "sendCommand",
            kind: "Async"
        }
    },
    {
        channelName: "connect",
        module: {
            name: "ioredis",
            versionRange: ">=5.0.0 <5.11.0",
            filePath: "built/Redis.js"
        },
        functionQuery: {
            className: "Redis",
            methodName: "connect",
            kind: "Async"
        }
    }
];
const ioredisChannels = {
    IOREDIS_COMMAND: "orchestrion:ioredis:command",
    IOREDIS_CONNECT: "orchestrion:ioredis:connect"
};
const ioredisSubscribeInjection = subscribeInjection.toSubscribeInjections(ioredisConfig);
exports.ioredisChannels = ioredisChannels;
exports.ioredisConfig = ioredisConfig;
exports.ioredisSubscribeInjection = ioredisSubscribeInjection; //# sourceMappingURL=ioredis.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/kafkajs.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const kafkajsConfig = [
    {
        channelName: "send_batch",
        module: {
            name: "kafkajs",
            versionRange: ">=2.0.0 <3",
            filePath: "src/producer/messageProducer.js"
        },
        // `const sendBatch = async (...) => {...}` — `expressionName` matches the `const` assignment.
        // We instrument ONLY `sendBatch`: `send` funnels into it internally, so `producer.send`,
        // `producer.sendBatch` and their transactional variants all flow through this one channel.
        // Instrumenting `send` too would double-count spans.
        functionQuery: {
            expressionName: "sendBatch",
            kind: "Async"
        }
    },
    {
        channelName: "consumer_run",
        module: {
            name: "kafkajs",
            versionRange: ">=2.0.0 <3",
            filePath: "src/consumer/index.js"
        },
        // `const run = async (config) => {...}` — matched by `expressionName`. We don't span `run` itself:
        // the `start` subscriber swaps `config.eachMessage`/`eachBatch` (on `ctx.arguments[0]`) for
        // span-creating wrappers before the original runs. This works because the transform re-reads
        // `ctx.arguments` when invoking the original.
        functionQuery: {
            expressionName: "run",
            kind: "Async"
        }
    }
];
const kafkajsChannels = {
    KAFKAJS_SEND_BATCH: "orchestrion:kafkajs:send_batch",
    KAFKAJS_CONSUMER_RUN: "orchestrion:kafkajs:consumer_run"
};
const kafkajsSubscribeInjection = subscribeInjection.toSubscribeInjections(kafkajsConfig);
exports.kafkajsChannels = kafkajsChannels;
exports.kafkajsConfig = kafkajsConfig;
exports.kafkajsSubscribeInjection = kafkajsSubscribeInjection; //# sourceMappingURL=kafkajs.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/knex.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const MODULE_NAME = "knex";
const RUNNER_FILES = [
    {
        filePath: "lib/execution/runner.js",
        versionRange: ">=0.22.0 <4"
    },
    {
        filePath: "lib/runner.js",
        versionRange: ">=0.10.0 <0.22.0"
    },
    {
        filePath: "src/runner.js",
        versionRange: ">=0.18.0 <0.19.0"
    }
];
const CLIENT_FILES = [
    {
        filePath: "lib/client.js",
        versionRange: ">=0.10.0 <4"
    },
    {
        filePath: "src/client.js",
        versionRange: ">=0.18.0 <0.19.0"
    }
];
const CLIENT_METHODS = [
    "queryBuilder",
    "schemaBuilder",
    "raw"
];
function runnerQuery(filePath, versionRange) {
    return {
        channelName: "query",
        module: {
            name: MODULE_NAME,
            versionRange,
            filePath
        },
        functionQuery: {
            className: "Runner",
            methodName: "query",
            kind: "Async"
        }
    };
}
function clientMethod(methodName, filePath, versionRange) {
    return {
        channelName: methodName,
        module: {
            name: MODULE_NAME,
            versionRange,
            filePath
        },
        functionQuery: {
            className: "Client",
            methodName,
            kind: "Sync"
        }
    };
}
const knexConfig = [
    ...RUNNER_FILES.map(({ filePath, versionRange })=>runnerQuery(filePath, versionRange)),
    ...CLIENT_FILES.flatMap(({ filePath, versionRange })=>CLIENT_METHODS.map((methodName)=>clientMethod(methodName, filePath, versionRange)))
];
const knexChannels = {
    KNEX_QUERY: "orchestrion:knex:query",
    KNEX_QUERY_BUILDER: "orchestrion:knex:queryBuilder",
    KNEX_SCHEMA_BUILDER: "orchestrion:knex:schemaBuilder",
    KNEX_RAW: "orchestrion:knex:raw"
};
const knexSubscribeInjection = subscribeInjection.toSubscribeInjections(knexConfig);
exports.knexChannels = knexChannels;
exports.knexConfig = knexConfig;
exports.knexSubscribeInjection = knexSubscribeInjection; //# sourceMappingURL=knex.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/koa.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const koaConfig = [
    {
        channelName: "use",
        module: {
            name: "koa",
            versionRange: ">=2.0.0 <4",
            filePath: "lib/application.js"
        },
        functionQuery: {
            className: "Application",
            methodName: "use",
            kind: "Sync"
        }
    }
];
const koaChannels = {
    KOA_USE: "orchestrion:koa:use"
};
const koaSubscribeInjection = subscribeInjection.toSubscribeInjections(koaConfig);
exports.koaChannels = koaChannels;
exports.koaConfig = koaConfig;
exports.koaSubscribeInjection = koaSubscribeInjection; //# sourceMappingURL=koa.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langchain.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const chatModelConfig = [
    "dist/language_models/chat_models.cjs",
    "dist/language_models/chat_models.js"
].flatMap((filePath)=>{
    const module = {
        name: "@langchain/core",
        versionRange: ">=0.1.0 <2.0.0",
        filePath
    };
    return [
        {
            channelName: "chatModelInvoke",
            module,
            functionQuery: {
                className: "BaseChatModel",
                methodName: "invoke",
                kind: "Async"
            }
        },
        {
            channelName: "chatModelStream",
            module,
            functionQuery: {
                className: "BaseChatModel",
                methodName: "_streamIterator",
                kind: "Async"
            }
        }
    ];
});
const EMBED_QUERY = "embedQuery";
const EMBED_DOCUMENTS = "embedDocuments";
const EMBEDDINGS_PROVIDERS = [
    {
        name: "@langchain/openai",
        versionRange: ">=0.1.0 <2.0.0",
        methods: [
            EMBED_QUERY,
            EMBED_DOCUMENTS
        ]
    },
    {
        name: "@langchain/google-genai",
        versionRange: ">=0.1.0 <3.0.0",
        methods: [
            EMBED_QUERY,
            EMBED_DOCUMENTS
        ]
    },
    {
        name: "@langchain/mistralai",
        versionRange: ">=0.1.0 <2.0.0",
        methods: [
            EMBED_QUERY,
            EMBED_DOCUMENTS
        ]
    },
    // `@langchain/google-vertexai` inherits its embed methods from this shared base. The base's
    // `embedQuery` delegates to `embedDocuments`, so hooking only `embedDocuments` still traces both
    // entry points as a single span each, instead of emitting a nested duplicate for `embedQuery`.
    {
        name: "@langchain/google-common",
        versionRange: ">=0.1.0 <3.0.0",
        methods: [
            EMBED_DOCUMENTS
        ]
    }
];
const embeddingsConfig = EMBEDDINGS_PROVIDERS.flatMap(({ name, versionRange, methods })=>[
        "dist/embeddings.cjs",
        "dist/embeddings.js"
    ].flatMap((filePath)=>methods.map((method)=>({
                channelName: method,
                module: {
                    name,
                    versionRange,
                    filePath
                },
                functionQuery: {
                    methodName: method,
                    kind: "Async"
                }
            }))));
const langchainConfig = [
    ...chatModelConfig,
    ...embeddingsConfig
];
const langchainEmbeddingsChannels = EMBEDDINGS_PROVIDERS.flatMap(({ name, methods })=>methods.map((method)=>`orchestrion:${name}:${method}`));
const langchainChannels = {
    LANGCHAIN_CHAT_MODEL_INVOKE: "orchestrion:@langchain/core:chatModelInvoke",
    LANGCHAIN_CHAT_MODEL_STREAM: "orchestrion:@langchain/core:chatModelStream"
};
const langchainSubscribeInjection = subscribeInjection.toSubscribeInjections(langchainConfig);
exports.langchainChannels = langchainChannels;
exports.langchainConfig = langchainConfig;
exports.langchainEmbeddingsChannels = langchainEmbeddingsChannels;
exports.langchainSubscribeInjection = langchainSubscribeInjection; //# sourceMappingURL=langchain.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langgraph.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const module$1 = (filePath)=>({
        name: "@langchain/langgraph",
        versionRange: ">=0.0.0 <2.0.0",
        filePath
    });
const compileConfig = [
    "dist/graph/state.cjs",
    "dist/graph/state.js"
].map((filePath)=>({
        channelName: "stateGraphCompile",
        module: module$1(filePath),
        functionQuery: {
            className: "StateGraph",
            methodName: "compile",
            kind: "Sync"
        }
    }));
const createReactAgentConfig = [
    "dist/prebuilt/react_agent_executor.cjs",
    "dist/prebuilt/react_agent_executor.js"
].map((filePath)=>({
        channelName: "createReactAgent",
        module: module$1(filePath),
        functionQuery: {
            functionName: "createReactAgent",
            kind: "Sync"
        }
    }));
const langgraphConfig = [
    ...compileConfig,
    ...createReactAgentConfig
];
const langgraphChannels = {
    LANGGRAPH_STATE_GRAPH_COMPILE: "orchestrion:@langchain/langgraph:stateGraphCompile",
    LANGGRAPH_CREATE_REACT_AGENT: "orchestrion:@langchain/langgraph:createReactAgent"
};
const langgraphSubscribeInjection = subscribeInjection.toSubscribeInjections(langgraphConfig);
exports.langgraphChannels = langgraphChannels;
exports.langgraphConfig = langgraphConfig;
exports.langgraphSubscribeInjection = langgraphSubscribeInjection; //# sourceMappingURL=langgraph.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/lru-memoizer.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const lruMemoizerConfig = [
    {
        channelName: "load",
        // `>=2.1.0` only: the named `function memoizedFunction()` the selector targets exists from 2.1.0
        module: {
            name: "lru-memoizer",
            versionRange: ">=2.1.0 <4",
            filePath: "lib/async.js"
        },
        functionQuery: {
            functionName: "memoizedFunction",
            kind: "Callback"
        }
    }
];
const lruMemoizerChannels = {
    LRU_MEMOIZER_LOAD: "orchestrion:lru-memoizer:load"
};
const lruMemoizerSubscribeInjection = subscribeInjection.toSubscribeInjections(lruMemoizerConfig);
exports.lruMemoizerChannels = lruMemoizerChannels;
exports.lruMemoizerConfig = lruMemoizerConfig;
exports.lruMemoizerSubscribeInjection = lruMemoizerSubscribeInjection; //# sourceMappingURL=lru-memoizer.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongodb.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const module$1 = {
    name: "mongodb"
};
const mongodbConfig = [
    // Band 1: mongodb >= 6.4 — promise-based command.
    // `methodName`-only (no `className`): the code-transformer's `className` matcher throws on classes
    // containing ES2022 `static {}` blocks (mongodb 7.x's `Connection`/`ConnectionPool` have them — see
    // `transformer-bug.md`), and `methodName` alone matches exactly the base method across all versions.
    {
        channelName: "command",
        module: {
            ...module$1,
            versionRange: ">=6.4.0 <8",
            filePath: "lib/cmap/connection.js"
        },
        functionQuery: {
            methodName: "command",
            kind: "Async"
        }
    },
    // Band 2: mongodb >= 4.0 < 6.4 — callback-based command (same `command` channel, different kind).
    {
        channelName: "command",
        module: {
            ...module$1,
            versionRange: ">=4.0.0 <6.4",
            filePath: "lib/cmap/connection.js"
        },
        functionQuery: {
            methodName: "command",
            kind: "Callback"
        }
    },
    // Band 2: the pool runs the checkout callback in a detached async context, so the operation's
    // `command()` (invoked inside it) loses the caller's active span. Hooking `checkOut` re-propagates
    // that context to the callback (the subscriber creates no span — see `getSpan` returning undefined).
    // Only needed < 6.4; from 6.4 `checkOut` is promise-based and the context survives natively.
    {
        channelName: "checkout",
        module: {
            ...module$1,
            versionRange: ">=4.0.0 <6.4",
            filePath: "lib/cmap/connection_pool.js"
        },
        functionQuery: {
            methodName: "checkOut",
            kind: "Callback"
        }
    },
    // Band 3: mongodb >= 3.3 < 4 — the driver had no unified `command`; each operation is a separate
    // `lib/core/wireprotocol` function, all callback-style. `insert`/`update`/`remove` are named
    // function expressions in the `index.js` `module.exports` object (matched by `expressionName`);
    // `command`/`query`/`getMore` are single-function modules (matched by `functionName`).
    ...[
        "insert",
        "update",
        "remove"
    ].map((op)=>({
            channelName: `v3_${op}`,
            module: {
                ...module$1,
                versionRange: ">=3.3.0 <4",
                filePath: "lib/core/wireprotocol/index.js"
            },
            functionQuery: {
                expressionName: op,
                kind: "Callback"
            }
        })),
    {
        channelName: "v3_command",
        module: {
            ...module$1,
            versionRange: ">=3.3.0 <4",
            filePath: "lib/core/wireprotocol/command.js"
        },
        functionQuery: {
            functionName: "command",
            kind: "Callback"
        }
    },
    {
        channelName: "v3_query",
        module: {
            ...module$1,
            versionRange: ">=3.3.0 <4",
            filePath: "lib/core/wireprotocol/query.js"
        },
        functionQuery: {
            functionName: "query",
            kind: "Callback"
        }
    },
    {
        channelName: "v3_get_more",
        module: {
            ...module$1,
            versionRange: ">=3.3.0 <4",
            filePath: "lib/core/wireprotocol/get_more.js"
        },
        functionQuery: {
            functionName: "getMore",
            kind: "Callback"
        }
    }
];
const mongodbChannels = {
    MONGODB_COMMAND: "orchestrion:mongodb:command",
    MONGODB_CHECKOUT: "orchestrion:mongodb:checkout",
    MONGODB_V3_INSERT: "orchestrion:mongodb:v3_insert",
    MONGODB_V3_UPDATE: "orchestrion:mongodb:v3_update",
    MONGODB_V3_REMOVE: "orchestrion:mongodb:v3_remove",
    MONGODB_V3_COMMAND: "orchestrion:mongodb:v3_command",
    MONGODB_V3_QUERY: "orchestrion:mongodb:v3_query",
    MONGODB_V3_GET_MORE: "orchestrion:mongodb:v3_get_more"
};
const mongodbSubscribeInjection = subscribeInjection.toSubscribeInjections(mongodbConfig);
exports.mongodbChannels = mongodbChannels;
exports.mongodbConfig = mongodbConfig;
exports.mongodbSubscribeInjection = mongodbSubscribeInjection; //# sourceMappingURL=mongodb.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongoose.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const module$1 = {
    name: "mongoose",
    versionRange: ">=5.9.7 <9.7.0"
};
const CONTEXT_CAPTURE_QUERY_METHODS = [
    "find",
    "findOne",
    "deleteOne",
    "deleteMany",
    "estimatedDocumentCount",
    "countDocuments",
    "distinct",
    "where",
    "$where",
    "findOneAndUpdate",
    "findOneAndDelete",
    "findOneAndReplace",
    // 5/6/7 only (removed in 8), inert in recent versions
    "remove",
    "count",
    "findOneAndRemove"
];
const mongooseConfig = [
    // Query execution
    // the span for most read/write operations. `op`, collection and model are
    // read off the `Query` at exec time.
    {
        channelName: "query_exec",
        module: {
            ...module$1,
            filePath: "lib/query.js"
        },
        functionQuery: {
            expressionName: "exec",
            kind: "Auto"
        }
    },
    // Aggregation pipeline execution.
    {
        channelName: "aggregate_exec",
        module: {
            ...module$1,
            filePath: "lib/aggregate.js"
        },
        functionQuery: {
            expressionName: "exec",
            kind: "Auto"
        }
    },
    // `doc.save()` (and its `$save` alias, which mongoose points at `save` on
    // require. the alias picks up the transformed body automatically, so no
    // separate entry is needed).
    {
        channelName: "model_save",
        module: {
            ...module$1,
            filePath: "lib/model.js"
        },
        functionQuery: {
            expressionName: "save",
            kind: "Auto"
        }
    },
    // Static batch operations.
    {
        channelName: "model_insert_many",
        module: {
            ...module$1,
            filePath: "lib/model.js"
        },
        functionQuery: {
            expressionName: "insertMany",
            kind: "Auto"
        }
    },
    {
        channelName: "model_bulk_write",
        module: {
            ...module$1,
            filePath: "lib/model.js"
        },
        functionQuery: {
            expressionName: "bulkWrite",
            kind: "Auto"
        }
    },
    // `doc.remove()` (a document method, deprecated in 6 and removed in 7)
    // `expressionName: 'remove'` also matches the sibling `Model.remove`
    // *static* in this file, which no matcher can tell apart from the prototype
    // method; that static is deprecated and would just produce a redundant span
    // so the collision is accepted rather than dropping the doc-method span.
    {
        channelName: "model_remove",
        module: {
            ...module$1,
            filePath: "lib/model.js"
        },
        functionQuery: {
            expressionName: "remove",
            kind: "Auto"
        }
    },
    // NOTE: document `updateOne`/`deleteOne` (mongoose 8.21+) are deliberately
    // NOT hooked here. The vendored OTel/IITM patcher wraps
    // `Model.prototype.updateOne`/`deleteOne`, but those delegate to
    // `Query.exec`, which the `query_exec` channel above already instruments
    // (its `this.op` is the right operation). Verified by the `mongoose-v8`
    // suite against a real mongoose 8.21+ under orchestrion. A dedicated hook
    // is also not possible cleanly: `expressionName: 'updateOne'` in
    // `lib/model.js` can't be told apart from the same-named `Model.updateOne`
    // *static* (the common query-builder form), so hooking it would double-span
    // every `Model.updateOne(...)` call.
    //
    // `Model.aggregate()` builds an `Aggregate` with no method to hook for
    // context capture, so hook the static itself and stash the active span
    // on the returned aggregate. `Sync`: it returns the aggregate.
    {
        channelName: "model_aggregate",
        module: {
            ...module$1,
            filePath: "lib/model.js"
        },
        functionQuery: {
            expressionName: "aggregate",
            kind: "Sync"
        }
    },
    ...CONTEXT_CAPTURE_QUERY_METHODS.map((methodName)=>({
            channelName: `ctx_${methodName}`,
            module: {
                ...module$1,
                filePath: "lib/query.js"
            },
            functionQuery: {
                expressionName: methodName,
                kind: "Sync"
            }
        }))
];
const mongooseChannels = {
    MONGOOSE_QUERY_EXEC: "orchestrion:mongoose:query_exec",
    MONGOOSE_AGGREGATE_EXEC: "orchestrion:mongoose:aggregate_exec",
    MONGOOSE_MODEL_SAVE: "orchestrion:mongoose:model_save",
    MONGOOSE_MODEL_INSERT_MANY: "orchestrion:mongoose:model_insert_many",
    MONGOOSE_MODEL_BULK_WRITE: "orchestrion:mongoose:model_bulk_write",
    MONGOOSE_MODEL_REMOVE: "orchestrion:mongoose:model_remove",
    MONGOOSE_MODEL_AGGREGATE: "orchestrion:mongoose:model_aggregate"
};
const MONGOOSE_CONTEXT_CAPTURE_CHANNELS = CONTEXT_CAPTURE_QUERY_METHODS.map((methodName)=>`orchestrion:mongoose:ctx_${methodName}`);
const mongooseSubscribeInjection = subscribeInjection.toSubscribeInjections(mongooseConfig);
exports.MONGOOSE_CONTEXT_CAPTURE_CHANNELS = MONGOOSE_CONTEXT_CAPTURE_CHANNELS;
exports.mongooseChannels = mongooseChannels;
exports.mongooseConfig = mongooseConfig;
exports.mongooseSubscribeInjection = mongooseSubscribeInjection; //# sourceMappingURL=mongoose.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mysql2.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const mysql2Config = [
    {
        channelName: "query",
        module: {
            name: "mysql2",
            versionRange: ">=1.4.2 <3.11.5",
            filePath: "lib/connection.js"
        },
        functionQuery: {
            className: "Connection",
            methodName: "query",
            kind: "Callback"
        }
    },
    {
        channelName: "execute",
        module: {
            name: "mysql2",
            versionRange: ">=1.4.2 <3.11.5",
            filePath: "lib/connection.js"
        },
        functionQuery: {
            className: "Connection",
            methodName: "execute",
            kind: "Callback"
        }
    },
    {
        channelName: "query",
        module: {
            name: "mysql2",
            versionRange: ">=3.11.5 <3.20.0",
            filePath: "lib/base/connection.js"
        },
        functionQuery: {
            className: "BaseConnection",
            methodName: "query",
            kind: "Callback"
        }
    },
    {
        channelName: "execute",
        module: {
            name: "mysql2",
            versionRange: ">=3.11.5 <3.20.0",
            filePath: "lib/base/connection.js"
        },
        functionQuery: {
            className: "BaseConnection",
            methodName: "execute",
            kind: "Callback"
        }
    }
];
const mysql2Channels = {
    MYSQL2_QUERY: "orchestrion:mysql2:query",
    MYSQL2_EXECUTE: "orchestrion:mysql2:execute"
};
const mysql2SubscribeInjection = subscribeInjection.toSubscribeInjections(mysql2Config);
exports.mysql2Channels = mysql2Channels;
exports.mysql2Config = mysql2Config;
exports.mysql2SubscribeInjection = mysql2SubscribeInjection; //# sourceMappingURL=mysql2.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mysql.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const mysqlConfig = [
    {
        channelName: "query",
        module: {
            name: "mysql",
            versionRange: ">=2.0.0 <3",
            filePath: "lib/Connection.js"
        },
        functionQuery: {
            expressionName: "query",
            kind: "Auto"
        }
    }
];
const mysqlChannels = {
    MYSQL_QUERY: "orchestrion:mysql:query"
};
const mysqlSubscribeInjection = subscribeInjection.toSubscribeInjections(mysqlConfig);
exports.mysqlChannels = mysqlChannels;
exports.mysqlConfig = mysqlConfig;
exports.mysqlSubscribeInjection = mysqlSubscribeInjection; //# sourceMappingURL=mysql.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/nestjs.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
function astQueryInstrumentation(config) {
    return config;
}
const nestjsConfig = [
    {
        channelName: "nestFactoryCreate",
        module: {
            name: "@nestjs/core",
            versionRange: ">=8.0.0 <12",
            filePath: "nest-factory.js"
        },
        functionQuery: {
            className: "NestFactoryStatic",
            methodName: "create",
            kind: "Async"
        }
    },
    {
        channelName: "routerExecutionContextCreate",
        module: {
            name: "@nestjs/core",
            versionRange: ">=8.0.0 <12",
            filePath: "router/router-execution-context.js"
        },
        functionQuery: {
            className: "RouterExecutionContext",
            methodName: "create",
            kind: "Sync"
        }
    },
    astQueryInstrumentation({
        // `@nestjs/common/decorators/core/injectable.decorator.js`:
        //   `function Injectable(options) { return (target) => { ... }; }`
        // The inner decorator arrow is anonymous + returned, so only a raw
        // `astQuery` can target it. The subscriber's `start` receives the
        // decorated class as `arguments[0]` and patches its prototype
        // use/canActivate/transform/intercept methods, reproducing the
        // vendored `SentryNestInstrumentation` middleware/guard/pipe/interceptor
        // spans. No span on the decorator itself, so `kind: 'Sync'`.
        channelName: "injectableDecorator",
        module: {
            name: "@nestjs/common",
            versionRange: ">=8.0.0 <12",
            filePath: "decorators/core/injectable.decorator.js"
        },
        astQuery: 'FunctionDeclaration[id.name="Injectable"] ReturnStatement > ArrowFunctionExpression',
        functionQuery: {
            kind: "Sync"
        }
    }),
    astQueryInstrumentation({
        // `@nestjs/common/decorators/core/catch.decorator.js`:
        //   `function Catch(...exceptions) { return (target) => { ... }; }`
        // Same anonymous-returned-arrow shape as `Injectable`. The subscriber's
        // `start` patches the exception filter's prototype `catch` method to
        // open an `exception_filter` span.
        //
        // Mirrors the vendored `SentryNestInstrumentation` `@Catch` wrap.
        channelName: "catchDecorator",
        module: {
            name: "@nestjs/common",
            versionRange: ">=8.0.0 <12",
            filePath: "decorators/core/catch.decorator.js"
        },
        astQuery: 'FunctionDeclaration[id.name="Catch"] ReturnStatement > ArrowFunctionExpression',
        functionQuery: {
            kind: "Sync"
        }
    }),
    // @nestjs/schedule @Cron/@Interval/@Timeout:
    // `function Cron(...) { return applyDecorators(...); }`
    // The returned decorator has no inline arrow to target, so we match the
    // factory function and reassign `data.result` in `end` to wrap the
    // decorator it returns (which rewrites the user handler `descriptor.value`
    // with isolation-scope + error capture).
    // Mirrors `SentryNestScheduleInstrumentation`, whose supported range we
    // match so opting in doesn't drop coverage the OTel path had. The compiled
    // `function Cron(...)` declaration is unchanged across 2.x–5.x.
    {
        channelName: "cronDecorator",
        module: {
            name: "@nestjs/schedule",
            versionRange: ">=2.0.0",
            filePath: "dist/decorators/cron.decorator.js"
        },
        functionQuery: {
            functionName: "Cron",
            kind: "Sync"
        }
    },
    {
        channelName: "intervalDecorator",
        module: {
            name: "@nestjs/schedule",
            versionRange: ">=2.0.0",
            filePath: "dist/decorators/interval.decorator.js"
        },
        functionQuery: {
            functionName: "Interval",
            kind: "Sync"
        }
    },
    {
        channelName: "timeoutDecorator",
        module: {
            name: "@nestjs/schedule",
            versionRange: ">=2.0.0",
            filePath: "dist/decorators/timeout.decorator.js"
        },
        functionQuery: {
            functionName: "Timeout",
            kind: "Sync"
        }
    },
    {
        // @nestjs/event-emitter @OnEvent:
        // `const OnEvent = (event, options) => {
        //   const decoratorFactory = (t, k, d) => {...}; return decoratorFactory;
        // }`
        // `OnEvent` is an arrow assigned to a const, so `expressionName`. `end`
        // reassigns `data.result` to wrap the returned decorator, which rewrites
        // the handler to open an `event.nestjs` span.
        // Mirrors `SentryNestEventInstrumentation`; the `const OnEvent = (...) =>`
        // shape is unchanged across 2.x–3.x.
        channelName: "onEventDecorator",
        module: {
            name: "@nestjs/event-emitter",
            versionRange: ">=2.0.0",
            filePath: "dist/decorators/on-event.decorator.js"
        },
        functionQuery: {
            expressionName: "OnEvent",
            kind: "Sync"
        }
    },
    {
        // @nestjs/bullmq @Processor:
        // `function Processor(...) { return (target) => {...}; }`
        // The factory arg carries the queue name, so we match the factory and
        // reassign `data.result` in `end` to wrap the returned class decorator
        // (which patches `target.prototype.process`).
        // Mirrors `SentryNestBullMQInstrumentation`; the `function Processor(...)`
        // declaration is unchanged across
        // 10.x–11.x.
        channelName: "processorDecorator",
        module: {
            name: "@nestjs/bullmq",
            versionRange: ">=10.0.0",
            filePath: "dist/decorators/processor.decorator.js"
        },
        functionQuery: {
            functionName: "Processor",
            kind: "Sync"
        }
    }
];
const nestjsChannels = {
    NESTJS_APP_CREATION: "orchestrion:@nestjs/core:nestFactoryCreate",
    NESTJS_ROUTER_CONTEXT: "orchestrion:@nestjs/core:routerExecutionContextCreate",
    NESTJS_INJECTABLE: "orchestrion:@nestjs/common:injectableDecorator",
    NESTJS_CATCH: "orchestrion:@nestjs/common:catchDecorator",
    NESTJS_SCHEDULE_CRON: "orchestrion:@nestjs/schedule:cronDecorator",
    NESTJS_SCHEDULE_INTERVAL: "orchestrion:@nestjs/schedule:intervalDecorator",
    NESTJS_SCHEDULE_TIMEOUT: "orchestrion:@nestjs/schedule:timeoutDecorator",
    NESTJS_ONEVENT: "orchestrion:@nestjs/event-emitter:onEventDecorator",
    NESTJS_PROCESSOR: "orchestrion:@nestjs/bullmq:processorDecorator"
};
const nestjsSubscribeInjection = subscribeInjection.toSubscribeInjections(nestjsConfig);
exports.nestjsChannels = nestjsChannels;
exports.nestjsConfig = nestjsConfig;
exports.nestjsSubscribeInjection = nestjsSubscribeInjection; //# sourceMappingURL=nestjs.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/openai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const openaiConfig = [
    // OpenAI chat completions. `Completions.create` returns a thenable `APIPromise` with no callback arg,
    // so `kind: 'Auto'` resolves to `wrapPromise`. openai ships dual CJS/ESM and the matcher compares
    // `filePath` exactly, hence one entry per built file (`.js` for `require`, `.mjs` for `import`).
    ...[
        "resources/chat/completions/completions.js",
        "resources/chat/completions/completions.mjs"
    ].map((filePath)=>({
            channelName: "chat",
            module: {
                name: "openai",
                versionRange: ">=4.0.0 <8",
                filePath
            },
            functionQuery: {
                className: "Completions",
                methodName: "create",
                kind: "Auto"
            }
        })),
    // OpenAI responses API — same `create(body, options)` shape as chat completions.
    ...[
        "resources/responses/responses.js",
        "resources/responses/responses.mjs"
    ].map((filePath)=>({
            channelName: "chat",
            module: {
                name: "openai",
                versionRange: ">=4.0.0 <8",
                filePath
            },
            functionQuery: {
                className: "Responses",
                methodName: "create",
                kind: "Auto"
            }
        })),
    // OpenAI embeddings API — same `create(body, options)` shape as chat completions.
    ...[
        "resources/embeddings.js",
        "resources/embeddings.mjs"
    ].map((filePath)=>({
            channelName: "embeddings",
            module: {
                name: "openai",
                versionRange: ">=4.0.0 <8",
                filePath
            },
            functionQuery: {
                className: "Embeddings",
                methodName: "create",
                kind: "Auto"
            }
        })),
    // OpenAI conversations API — same `create(body, options)` shape as chat completions.
    ...[
        "resources/conversations/conversations.js",
        "resources/conversations/conversations.mjs"
    ].map((filePath)=>({
            channelName: "chat",
            module: {
                name: "openai",
                versionRange: ">=4.0.0 <8",
                filePath
            },
            functionQuery: {
                className: "Conversations",
                methodName: "create",
                kind: "Auto"
            }
        }))
];
const openaiChannels = {
    // Chat completions, the responses API, and the conversations API all report a `chat` operation with
    // identical span handling, so they share one channel.
    OPENAI_CHAT: "orchestrion:openai:chat",
    OPENAI_EMBEDDINGS: "orchestrion:openai:embeddings"
};
const openaiSubscribeInjection = subscribeInjection.toSubscribeInjections(openaiConfig);
exports.openaiChannels = openaiChannels;
exports.openaiConfig = openaiConfig;
exports.openaiSubscribeInjection = openaiSubscribeInjection; //# sourceMappingURL=openai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/pg.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const pgConfig = [
    // `pg` (node-postgres).
    // instruments `Client.prototype.query`/`connect` (both the JS and native
    // clients) plus `pg-pool`'s `Pool.prototype.connect`.
    // `Auto` covers the callback, promise, and streamable-`Submittable`
    // call shapes (like mysql).
    // `pg/lib/client.js` is `class Client { query() {...} connect() {...} }`,
    // so `className`+`methodName` matches directly.
    {
        channelName: "query",
        module: {
            name: "pg",
            versionRange: ">=8.0.3 <9",
            filePath: "lib/client.js"
        },
        functionQuery: {
            className: "Client",
            methodName: "query",
            kind: "Auto"
        }
    },
    {
        channelName: "connect",
        module: {
            name: "pg",
            versionRange: ">=8.0.3 <9",
            filePath: "lib/client.js"
        },
        functionQuery: {
            className: "Client",
            methodName: "connect",
            kind: "Auto"
        }
    },
    // The native client (`pg/lib/native/client.js`) is a constructor function,
    // not a class.
    // `Client.prototype.query = function (config, values, callback) {...}`
    // so it needs `expressionName` (the mysql shape), publishing to the SAME
    // `orchestrion:pg:query`/`:connect` channels as the JS client.
    {
        channelName: "query",
        module: {
            name: "pg",
            versionRange: ">=8.0.3 <9",
            filePath: "lib/native/client.js"
        },
        functionQuery: {
            expressionName: "query",
            kind: "Auto"
        }
    },
    {
        channelName: "connect",
        module: {
            name: "pg",
            versionRange: ">=8.0.3 <9",
            filePath: "lib/native/client.js"
        },
        functionQuery: {
            expressionName: "connect",
            kind: "Auto"
        }
    },
    // `pg-pool` is `class Pool extends EventEmitter { connect(cb) {...} }`.
    {
        channelName: "connect",
        module: {
            name: "pg-pool",
            versionRange: ">=2.0.0 <4",
            filePath: "index.js"
        },
        functionQuery: {
            className: "Pool",
            methodName: "connect",
            kind: "Auto"
        }
    }
];
const pgChannels = {
    PG_QUERY: "orchestrion:pg:query",
    PG_CONNECT: "orchestrion:pg:connect",
    PGPOOL_CONNECT: "orchestrion:pg-pool:connect"
};
const pgSubscribeInjection = subscribeInjection.toSubscribeInjections(pgConfig);
exports.pgChannels = pgChannels;
exports.pgConfig = pgConfig;
exports.pgSubscribeInjection = pgSubscribeInjection; //# sourceMappingURL=pg.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/postgres.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const postgresJsInstrumentationConfig = (dir)=>[
        // `Query.prototype.handle` (`class Query extends Promise`) is the single
        // funnel every query passes through (`then`/`catch`/`finally`/`.execute()`/
        // `.forEach()`/cursor all call it), guarded by `this.executed`. `Async`
        // because `handle` is `async`.
        {
            channelName: "handle",
            module: {
                name: "postgres",
                versionRange: ">=3.0.0 <4",
                filePath: `${dir}/query.js`
            },
            functionQuery: {
                className: "Query",
                methodName: "handle",
                kind: "Async"
            }
        },
        // `function Connection(options, ...)` (default export of `connection.js`)
        // returns the connection object; used to build the endpoint registry that
        // resolves `server.address`/`server.port`/`db.namespace`.
        {
            channelName: "connection",
            module: {
                name: "postgres",
                versionRange: ">=3.0.0 <4",
                filePath: `${dir}/connection.js`
            },
            functionQuery: {
                functionName: "Connection",
                kind: "Sync"
            }
        },
        // The nested `function execute(q)` inside `Connection`; the per-connection
        // hook that attaches connection attributes to the query's span.
        {
            channelName: "execute",
            module: {
                name: "postgres",
                versionRange: ">=3.0.0 <4",
                filePath: `${dir}/connection.js`
            },
            functionQuery: {
                functionName: "execute",
                kind: "Sync"
            }
        },
        // The connection object's `connect(query)` method. Matched by `methodName`
        // (an object-literal method): `functionName` would hit the unrelated
        // socket-level `async function connect()` in the same file. `self` is the
        // connection object and `arguments[0]` the query, so the first query that
        // opens a connection (dispatched via a bare `execute` with no `self`) still
        // gets connection attributes in multi-endpoint apps.
        {
            channelName: "connect",
            module: {
                name: "postgres",
                versionRange: ">=3.0.0 <4",
                filePath: `${dir}/connection.js`
            },
            functionQuery: {
                methodName: "connect",
                kind: "Sync"
            }
        }
    ];
const postgresJsConfig = [
    "src",
    "cjs/src"
].flatMap(postgresJsInstrumentationConfig);
const postgresJsChannels = {
    POSTGRESJS_HANDLE: "orchestrion:postgres:handle",
    POSTGRESJS_CONNECTION: "orchestrion:postgres:connection",
    POSTGRESJS_EXECUTE: "orchestrion:postgres:execute",
    POSTGRESJS_CONNECT: "orchestrion:postgres:connect"
};
const postgresJsSubscribeInjection = subscribeInjection.toSubscribeInjections(postgresJsConfig);
exports.postgresJsChannels = postgresJsChannels;
exports.postgresJsConfig = postgresJsConfig;
exports.postgresJsSubscribeInjection = postgresJsSubscribeInjection; //# sourceMappingURL=postgres.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/redis.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const redisConfig = [
    // redis `>=2.6.0 <4` (standalone `redis`). `internal_send_command` is an
    // anonymous prototype assignment (`expressionName`); it settles via the nested
    // `command_obj.callback`, so `kind: 'Sync'` and the subscriber wraps that callback.
    {
        channelName: "command",
        module: {
            name: "redis",
            versionRange: ">=2.6.0 <4",
            filePath: "index.js"
        },
        functionQuery: {
            expressionName: "internal_send_command",
            kind: "Sync"
        }
    },
    // node-redis v4 (`@redis/client` v1). The real chokepoint (private `#sendCommand`)
    // isn't matchable, so wrap both public entry points: `commandsExecutor` (friendly
    // commands) and `sendCommand` (direct calls). They never overlap, so no double span.
    {
        channelName: "executor",
        module: {
            name: "@redis/client",
            versionRange: "^1.0.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "commandsExecutor",
            kind: "Async"
        }
    },
    {
        channelName: "command",
        module: {
            name: "@redis/client",
            versionRange: "^1.0.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "sendCommand",
            kind: "Async"
        }
    },
    {
        channelName: "connect",
        module: {
            name: "@redis/client",
            versionRange: "^1.0.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "connect",
            kind: "Async"
        }
    },
    // node-redis `>=5.0.0 <5.12.0` (`@redis/client` v5; >=5.12.0 has its own
    // `node-redis:*` diagnostics_channel, see `redis-dc-subscriber.ts`). Friendly
    // commands route through the public `sendCommand`, so it covers them all — no
    // `executor` entry (would double-count).
    {
        channelName: "command",
        module: {
            name: "@redis/client",
            versionRange: ">=5.0.0 <5.12.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "sendCommand",
            kind: "Async"
        }
    },
    {
        channelName: "connect",
        module: {
            name: "@redis/client",
            versionRange: ">=5.0.0 <5.12.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "connect",
            kind: "Async"
        }
    },
    // Batch (multi/pipeline) — one span per `exec`. Batched commands bypass `sendCommand`,
    // so they go through the client's batch executors, which receive the queued commands
    // array (→ batch size). v5 splits MULTI/PIPELINE into two methods; v4's single
    // `multiExecutor` is MULTI when a `chainId` arg is present, PIPELINE otherwise.
    {
        channelName: "multi",
        module: {
            name: "@redis/client",
            versionRange: ">=5.0.0 <5.12.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "_executeMulti",
            kind: "Async"
        }
    },
    {
        channelName: "pipeline",
        module: {
            name: "@redis/client",
            versionRange: ">=5.0.0 <5.12.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "_executePipeline",
            kind: "Async"
        }
    },
    {
        channelName: "batch",
        module: {
            name: "@redis/client",
            versionRange: "^1.0.0",
            filePath: "dist/lib/client/index.js"
        },
        functionQuery: {
            className: "RedisClient",
            methodName: "multiExecutor",
            kind: "Async"
        }
    }
];
const redisChannels = {
    REDIS_COMMAND: "orchestrion:redis:command",
    NODE_REDIS_COMMAND: "orchestrion:@redis/client:command",
    NODE_REDIS_EXECUTOR: "orchestrion:@redis/client:executor",
    NODE_REDIS_CONNECT: "orchestrion:@redis/client:connect",
    NODE_REDIS_MULTI: "orchestrion:@redis/client:multi",
    NODE_REDIS_PIPELINE: "orchestrion:@redis/client:pipeline",
    NODE_REDIS_BATCH: "orchestrion:@redis/client:batch"
};
const redisSubscribeInjection = subscribeInjection.toSubscribeInjections(redisConfig);
exports.redisChannels = redisChannels;
exports.redisConfig = redisConfig;
exports.redisSubscribeInjection = redisSubscribeInjection; //# sourceMappingURL=redis.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/remix.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const remixInstrumentationConfig = (dir)=>[
        // `createRequestHandler` returns `async function requestHandler(request, loadContext)` — the main
        // server span. We target the returned handler (so the span wraps each request, not the one-time
        // handler construction). It's a *named function expression*, which name-based `functionQuery`
        // can't match (that only sees declarations), so we select it with `astQuery`; `functionQuery`
        // then just carries the behaviour (`kind: 'Async'`).
        {
            channelName: "requestHandler",
            module: {
                name: "@remix-run/server-runtime",
                versionRange: ">=2.0.0 <3",
                filePath: `${dir}/server.js`
            },
            astQuery: 'FunctionExpression[id.name="requestHandler"]',
            functionQuery: {
                kind: "Async"
            }
        },
        // Sync; the subscriber reads its result to set `http.route` on the active request span.
        {
            channelName: "matchServerRoutes",
            module: {
                name: "@remix-run/server-runtime",
                versionRange: ">=2.0.0 <3",
                filePath: `${dir}/routeMatching.js`
            },
            functionQuery: {
                functionName: "matchServerRoutes",
                kind: "Sync"
            }
        },
        // Remix >= 2.9.0
        {
            channelName: "callRouteLoader",
            module: {
                name: "@remix-run/server-runtime",
                versionRange: ">=2.9.0 <3",
                filePath: `${dir}/data.js`
            },
            functionQuery: {
                functionName: "callRouteLoader",
                kind: "Async"
            }
        },
        {
            channelName: "callRouteAction",
            module: {
                name: "@remix-run/server-runtime",
                versionRange: ">=2.9.0 <3",
                filePath: `${dir}/data.js`
            },
            functionQuery: {
                functionName: "callRouteAction",
                kind: "Async"
            }
        },
        // Remix 2.0.0 – 2.8.x: the same functions were suffixed `…RR`. Same channels as above.
        {
            channelName: "callRouteLoader",
            module: {
                name: "@remix-run/server-runtime",
                versionRange: ">=2.0.0 <2.9.0",
                filePath: `${dir}/data.js`
            },
            functionQuery: {
                functionName: "callRouteLoaderRR",
                kind: "Async"
            }
        },
        {
            channelName: "callRouteAction",
            module: {
                name: "@remix-run/server-runtime",
                versionRange: ">=2.0.0 <2.9.0",
                filePath: `${dir}/data.js`
            },
            functionQuery: {
                functionName: "callRouteActionRR",
                kind: "Async"
            }
        }
    ];
const remixConfig = [
    "dist",
    "dist/esm"
].flatMap(remixInstrumentationConfig);
const remixChannels = {
    REMIX_REQUEST_HANDLER: "orchestrion:@remix-run/server-runtime:requestHandler",
    REMIX_MATCH_SERVER_ROUTES: "orchestrion:@remix-run/server-runtime:matchServerRoutes",
    REMIX_CALL_ROUTE_LOADER: "orchestrion:@remix-run/server-runtime:callRouteLoader",
    REMIX_CALL_ROUTE_ACTION: "orchestrion:@remix-run/server-runtime:callRouteAction"
};
const remixSubscribeInjection = subscribeInjection.toSubscribeInjections(remixConfig);
exports.remixChannels = remixChannels;
exports.remixConfig = remixConfig;
exports.remixSubscribeInjection = remixSubscribeInjection; //# sourceMappingURL=remix.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/tedious.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const MODULE_NAME = "tedious";
const FILE_PATH = "lib/connection.js";
const VERSION_RANGE = ">=1.11.0 <20";
const METHODS = [
    "connect",
    "execSql",
    "execSqlBatch",
    "callProcedure",
    "execBulkLoad",
    "prepare",
    "execute"
];
const tediousConfig = METHODS.map((methodName)=>({
        channelName: methodName,
        module: {
            name: MODULE_NAME,
            versionRange: VERSION_RANGE,
            filePath: FILE_PATH
        },
        functionQuery: {
            className: "Connection",
            methodName,
            kind: "Sync"
        }
    }));
const tediousChannels = {
    TEDIOUS_CONNECT: "orchestrion:tedious:connect",
    TEDIOUS_EXEC_SQL: "orchestrion:tedious:execSql",
    TEDIOUS_EXEC_SQL_BATCH: "orchestrion:tedious:execSqlBatch",
    TEDIOUS_CALL_PROCEDURE: "orchestrion:tedious:callProcedure",
    TEDIOUS_EXEC_BULK_LOAD: "orchestrion:tedious:execBulkLoad",
    TEDIOUS_PREPARE: "orchestrion:tedious:prepare",
    TEDIOUS_EXECUTE: "orchestrion:tedious:execute"
};
const tediousSubscribeInjection = subscribeInjection.toSubscribeInjections(tediousConfig);
exports.tediousChannels = tediousChannels;
exports.tediousConfig = tediousConfig;
exports.tediousSubscribeInjection = tediousSubscribeInjection; //# sourceMappingURL=tedious.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/vercel-ai.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const vercelAiConfig = [
    // Vercel AI v6: mirror the v7 native `ai:telemetry` channel by injecting
    // channels into the top-level entry points. `resolveLanguageModel` is wrapped
    // not to span it, but so the subscriber can monkey-patch `doGenerate`/
    // `doStream` on the returned model (the only way to span the model call,
    // which is an inline call with no injectable definition in `ai`).
    // `streamText` returns its result synchronously (streaming is lazy), so it's
    // `Sync`; the subscriber binds the span via `bindTracingChannelToSpan`, which
    // ends it when the (synchronous) call returns.
    // The majority of entrypoints are present in all versions we support
    ...vercelAiEntries(">=4.0.0 <7.0.0", "generateText", "generateText", "Async"),
    ...vercelAiEntries(">=4.0.0 <7.0.0", "streamText", "streamText", "Sync"),
    ...vercelAiEntries(">=4.0.0 <7.0.0", "generateObject", "generateObject", "Async"),
    ...vercelAiEntries(">=4.0.0 <7.0.0", "embed", "embed", "Async"),
    ...vercelAiEntries(">=4.0.0 <7.0.0", "embedMany", "embedMany", "Async"),
    // The following entry is only present in v5 and later
    ...vercelAiEntries(">=5.0.0 <7.0.0", "resolveLanguageModel", "resolveLanguageModel", "Sync"),
    // The following entry is only present in v6 and later
    ...vercelAiEntries(">=6.0.0 <7.0.0", "executeToolCall", "executeToolCall", "Async")
];
const vercelAiChannels = {
    // Vercel AI (`ai`): orchestrion injects these so the same channel-based
    // integration that consumes `ai`'s native `ai:telemetry` channel (v7) can
    // also instrument v4/v5/v6. Each maps to a top-level function in `ai`'s bundle.
    // All three versions share the same channel names (the subscriber is version-agnostic);
    // `VERCEL_AI_EXECUTE_TOOL_CALL` is v6-only (v4/v5 have no `executeToolCall` export) and
    // `VERCEL_AI_RESOLVE_LANGUAGE_MODEL` is v5/v6-only (v4 has no such chokepoint).
    VERCEL_AI_GENERATE_TEXT: "orchestrion:ai:generateText",
    VERCEL_AI_STREAM_TEXT: "orchestrion:ai:streamText",
    VERCEL_AI_GENERATE_OBJECT: "orchestrion:ai:generateObject",
    VERCEL_AI_EMBED: "orchestrion:ai:embed",
    VERCEL_AI_EMBED_MANY: "orchestrion:ai:embedMany",
    VERCEL_AI_EXECUTE_TOOL_CALL: "orchestrion:ai:executeToolCall",
    VERCEL_AI_RESOLVE_LANGUAGE_MODEL: "orchestrion:ai:resolveLanguageModel"
};
function vercelAiEntries(versionRange, channelName, functionName, kind) {
    return [
        "dist/index.js",
        "dist/index.mjs"
    ].map((filePath)=>({
            channelName,
            module: {
                name: "ai",
                versionRange,
                filePath
            },
            functionQuery: {
                functionName,
                kind
            }
        }));
}
const vercelAiSubscribeInjection = subscribeInjection.toSubscribeInjections(vercelAiConfig);
exports.vercelAiChannels = vercelAiChannels;
exports.vercelAiConfig = vercelAiConfig;
exports.vercelAiSubscribeInjection = vercelAiSubscribeInjection; //# sourceMappingURL=vercel-ai.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const awsSdk = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/aws-sdk.js [instrumentation] (ecmascript)");
const amqplib = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/amqplib.js [instrumentation] (ecmascript)");
const anthropicAi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/anthropic-ai.js [instrumentation] (ecmascript)");
const dataloader = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/dataloader.js [instrumentation] (ecmascript)");
const express = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/express.js [instrumentation] (ecmascript)");
const firebase = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/firebase.js [instrumentation] (ecmascript)");
const genericPool = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/generic-pool.js [instrumentation] (ecmascript)");
const googleGenai = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/google-genai.js [instrumentation] (ecmascript)");
const graphql = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/graphql.js [instrumentation] (ecmascript)");
const hapi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/hapi.js [instrumentation] (ecmascript)");
const ioredis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/ioredis.js [instrumentation] (ecmascript)");
const kafkajs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/kafkajs.js [instrumentation] (ecmascript)");
const knex = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/knex.js [instrumentation] (ecmascript)");
const koa = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/koa.js [instrumentation] (ecmascript)");
const langchain = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langchain.js [instrumentation] (ecmascript)");
const langgraph = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langgraph.js [instrumentation] (ecmascript)");
const lruMemoizer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/lru-memoizer.js [instrumentation] (ecmascript)");
const mongodb = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongodb.js [instrumentation] (ecmascript)");
const mongoose = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongoose.js [instrumentation] (ecmascript)");
const mysql2 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mysql2.js [instrumentation] (ecmascript)");
const mysql = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mysql.js [instrumentation] (ecmascript)");
const nestjs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/nestjs.js [instrumentation] (ecmascript)");
const openai = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/openai.js [instrumentation] (ecmascript)");
const pg = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/pg.js [instrumentation] (ecmascript)");
const postgres = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/postgres.js [instrumentation] (ecmascript)");
const redis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/redis.js [instrumentation] (ecmascript)");
const remix = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/remix.js [instrumentation] (ecmascript)");
const tedious = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/tedious.js [instrumentation] (ecmascript)");
const vercelAi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/vercel-ai.js [instrumentation] (ecmascript)");
const SENTRY_INSTRUMENTATIONS = [
    ...amqplib.amqplibConfig,
    ...anthropicAi.anthropicAiConfig,
    ...awsSdk.awsSdkConfig,
    ...dataloader.dataloaderConfig,
    ...express.expressConfig,
    ...firebase.firebaseConfig,
    ...genericPool.genericPoolConfig,
    ...googleGenai.googleGenAiConfig,
    ...graphql.graphqlConfig,
    ...hapi.hapiConfig,
    ...ioredis.ioredisConfig,
    ...kafkajs.kafkajsConfig,
    ...knex.knexConfig,
    ...koa.koaConfig,
    ...langchain.langchainConfig,
    ...langgraph.langgraphConfig,
    ...lruMemoizer.lruMemoizerConfig,
    ...mongodb.mongodbConfig,
    ...mongoose.mongooseConfig,
    ...mysql2.mysql2Config,
    ...mysql.mysqlConfig,
    ...nestjs.nestjsConfig,
    ...openai.openaiConfig,
    ...pg.pgConfig,
    ...postgres.postgresJsConfig,
    ...redis.redisConfig,
    ...remix.remixConfig,
    ...tedious.tediousConfig,
    ...vercelAi.vercelAiConfig
];
const SUBSCRIBE_INJECTIONS = [
    ...amqplib.amqplibSubscribeInjection,
    ...anthropicAi.anthropicAiSubscribeInjection,
    ...awsSdk.awsSdkSubscribeInjection,
    ...dataloader.dataloaderSubscribeInjection,
    ...express.expressSubscribeInjection,
    ...firebase.firebaseSubscribeInjection,
    ...genericPool.genericPoolSubscribeInjection,
    ...googleGenai.googleGenAiSubscribeInjection,
    ...graphql.graphqlSubscribeInjection,
    ...hapi.hapiSubscribeInjection,
    ...ioredis.ioredisSubscribeInjection,
    ...kafkajs.kafkajsSubscribeInjection,
    ...knex.knexSubscribeInjection,
    ...koa.koaSubscribeInjection,
    ...langchain.langchainSubscribeInjection,
    ...langgraph.langgraphSubscribeInjection,
    ...lruMemoizer.lruMemoizerSubscribeInjection,
    ...mongodb.mongodbSubscribeInjection,
    ...mongoose.mongooseSubscribeInjection,
    ...mysql2.mysql2SubscribeInjection,
    ...mysql.mysqlSubscribeInjection,
    ...nestjs.nestjsSubscribeInjection,
    ...openai.openaiSubscribeInjection,
    ...pg.pgSubscribeInjection,
    ...postgres.postgresJsSubscribeInjection,
    ...redis.redisSubscribeInjection,
    ...remix.remixSubscribeInjection,
    ...tedious.tediousSubscribeInjection,
    ...vercelAi.vercelAiSubscribeInjection
];
function instrumentedModuleNames(instrumentations = []) {
    return [
        ...core.uniq([
            ...SENTRY_INSTRUMENTATIONS,
            ...instrumentations
        ].map((i)=>i.module.name)),
        // Additional things that need to be bundled but are not covered by the above
        // Remix needs to bundle this so @remix-run/server-runtime is _also_ bundled
        "@remix-run/node"
    ];
}
const INSTRUMENTED_MODULE_NAMES = instrumentedModuleNames();
function withoutInstrumentedExternals(external, moduleNames = INSTRUMENTED_MODULE_NAMES) {
    if (!external) {
        return void 0;
    }
    return external.filter((entry)=>!moduleNames.some((name)=>entry === name || entry.startsWith(`${name}/`)));
}
exports.INSTRUMENTED_MODULE_NAMES = INSTRUMENTED_MODULE_NAMES;
exports.SENTRY_INSTRUMENTATIONS = SENTRY_INSTRUMENTATIONS;
exports.SUBSCRIBE_INJECTIONS = SUBSCRIBE_INJECTIONS;
exports.instrumentedModuleNames = instrumentedModuleNames;
exports.withoutInstrumentedExternals = withoutInstrumentedExternals; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/channel-integration-definitions.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const CHANNEL_INTEGRATION_DEFINITIONS = [
    {
        exportName: "postgresChannelIntegration",
        modules: [
            "pg",
            "pg-pool"
        ]
    },
    {
        exportName: "postgresJsChannelIntegration",
        modules: [
            "postgres"
        ]
    },
    {
        exportName: "mysqlChannelIntegration",
        modules: [
            "mysql"
        ]
    },
    {
        exportName: "mysql2ChannelIntegration",
        modules: [
            "mysql2"
        ]
    },
    {
        exportName: "genericPoolChannelIntegration",
        modules: [
            "generic-pool"
        ]
    },
    {
        exportName: "lruMemoizerChannelIntegration",
        modules: [
            "lru-memoizer"
        ]
    },
    {
        exportName: "openaiChannelIntegration",
        modules: [
            "openai"
        ]
    },
    {
        exportName: "anthropicChannelIntegration",
        modules: [
            "@anthropic-ai/sdk"
        ]
    },
    {
        exportName: "googleGenAIChannelIntegration",
        modules: [
            "@google/genai"
        ]
    },
    {
        exportName: "vercelAiChannelIntegration",
        modules: [
            "ai"
        ]
    },
    {
        exportName: "amqplibChannelIntegration",
        modules: [
            "amqplib"
        ]
    },
    {
        exportName: "hapiChannelIntegration",
        modules: [
            "@hapi/hapi"
        ]
    },
    {
        exportName: "expressChannelIntegration",
        modules: [
            "express",
            "router"
        ]
    },
    {
        exportName: "graphqlChannelIntegration",
        modules: [
            "graphql"
        ]
    },
    {
        exportName: "kafkajsChannelIntegration",
        modules: [
            "kafkajs"
        ]
    },
    {
        exportName: "redisChannelIntegration",
        modules: [
            "redis",
            "@redis/client"
        ]
    },
    {
        exportName: "ioredisChannelIntegration",
        modules: [
            "ioredis"
        ]
    },
    {
        exportName: "dataloaderChannelIntegration",
        modules: [
            "dataloader"
        ]
    }
];
function subscriberExportForModule(moduleName) {
    return CHANNEL_INTEGRATION_DEFINITIONS.find((d)=>d.modules.includes(moduleName))?.exportName;
}
exports.CHANNEL_INTEGRATION_DEFINITIONS = CHANNEL_INTEGRATION_DEFINITIONS;
exports.subscriberExportForModule = subscriberExportForModule; //# sourceMappingURL=channel-integration-definitions.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/bundler/subscribeInjection.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const meriyah = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/meriyah/dist/meriyah.js [instrumentation] (ecmascript)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/index.js [instrumentation] (ecmascript)");
const channelIntegrationDefinitions = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/channel-integration-definitions.js [instrumentation] (ecmascript)");
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/subscribe-injection.js [instrumentation] (ecmascript)");
const injectedPrograms = /* @__PURE__ */ new WeakSet();
const SUBSCRIBE_INJECTION_SINK = "globalThis.__SENTRY_ORCHESTRION_INJECT__";
function subscribeSnippet(exportName, esm) {
    const importStmt = esm ? `import { ${exportName}, registerOrchestrionChannelIntegration } from '@sentry/server-utils/orchestrion';` : `const { ${exportName}, registerOrchestrionChannelIntegration } = require('@sentry/server-utils/orchestrion');`;
    return `${importStmt}
${SUBSCRIBE_INJECTION_SINK} = registerOrchestrionChannelIntegration(${JSON.stringify(exportName)}, ${exportName});`;
}
const injectSubscribe = (state, program)=>{
    const node = program;
    if (injectedPrograms.has(node)) {
        return;
    }
    const { moduleType, channelName } = state;
    const exportName = channelName ? channelIntegrationDefinitions.subscriberExportForModule(channelName) : void 0;
    if (!exportName) {
        return;
    }
    injectedPrograms.add(node);
    const statements = meriyah.parse(subscribeSnippet(exportName, moduleType === "esm"), {
        module: moduleType === "esm",
        next: true
    }).body;
    const directiveIndex = node.body.findIndex((n)=>n.type === "ExpressionStatement" && n.directive === "use strict");
    node.body.splice(directiveIndex + 1, 0, ...statements);
};
function subscribeInjectionOptions() {
    return {
        instrumentations: index.SUBSCRIBE_INJECTIONS,
        customTransforms: {
            [subscribeInjection.SUBSCRIBE_TRANSFORM_NAME]: injectSubscribe
        }
    };
}
exports.subscribeInjectionOptions = subscribeInjectionOptions; //# sourceMappingURL=subscribeInjection.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/bundler/options.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/index.js [instrumentation] (ecmascript)");
const subscribeInjection = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/bundler/subscribeInjection.js [instrumentation] (ecmascript)");
function externalEntryMatchesModule(entry, moduleName) {
    return entry === moduleName || entry.startsWith(`${moduleName}/`);
}
function externalizedModulesWarning(externalizedModules) {
    return `The following packages are marked as external in your bundler configuration but need to be bundled for Sentry instrumentation to work: ${externalizedModules.join(", ")}. Remove them from your bundler's "external" configuration, or use the Sentry Node SDK's runtime instrumentation instead.`;
}
function orchestrionTransformOptions(options) {
    const subscribeInjection$1 = options.injectChannelSubscribers ? subscribeInjection.subscribeInjectionOptions() : void 0;
    const instrumentations = [
        ...index.SENTRY_INSTRUMENTATIONS,
        ...options.instrumentations || [],
        ...subscribeInjection$1?.instrumentations || []
    ];
    const customTransforms = {
        ...options.customTransforms,
        ...subscribeInjection$1?.customTransforms
    };
    if (options.shouldInjectDiagnostics === false) {
        return {
            instrumentations,
            customTransforms
        };
    }
    return {
        instrumentations,
        customTransforms,
        injectDiagnostics: (diag)=>{
            return `(globalThis.__SENTRY_ORCHESTRION__=globalThis.__SENTRY_ORCHESTRION__||{}).bundler=${JSON.stringify(diag.transformedModules)};`;
        }
    };
}
exports.externalEntryMatchesModule = externalEntryMatchesModule;
exports.externalizedModulesWarning = externalizedModulesWarning;
exports.orchestrionTransformOptions = orchestrionTransformOptions; //# sourceMappingURL=options.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/bundler/webpack.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const require$$1 = __turbopack_context__.r("[externals]/node:module [external] (node:module, cjs)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/index.js [instrumentation] (ecmascript)");
const webpack = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/webpack.js [instrumentation] (ecmascript)");
__turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/core-dC9TN3Ev.js [instrumentation] (ecmascript)");
const instrumentationSerdeCXxvJj = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/code-transformer-bundler-plugins/dist/esm/instrumentation-serde-C-Xxv-jj.js [instrumentation] (ecmascript)");
const options = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/bundler/options.js [instrumentation] (ecmascript)");
const serializeInstrumentations = instrumentationSerdeCXxvJj.n;
function getOrchestrionRequire() {
    let nodeRequire;
    nodeRequire = require$$1.createRequire(("TURBOPACK compile-time value", "/ROOT/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/bundler/webpack.js"));
    return nodeRequire;
}
function getOrchestrionLoaderPath() {
    return getOrchestrionRequire().resolve("@sentry/server-utils/orchestrion/webpack-loader");
}
function resolveOrchestrionRuntimeRequest(request) {
    try {
        return getOrchestrionRequire().resolve(request);
    } catch  {
        return void 0;
    }
}
function getSentryInstrumentations() {
    return index.SENTRY_INSTRUMENTATIONS;
}
function externalizedWebpackModules(externals, moduleNames) {
    const entries = Array.isArray(externals) ? externals : [
        externals
    ];
    return moduleNames.filter((name)=>entries.some((entry)=>{
            if (typeof entry === "string") {
                return options.externalEntryMatchesModule(entry, name);
            }
            if (entry instanceof RegExp) {
                return entry.test(name);
            }
            if (entry && typeof entry === "object") {
                return name in entry;
            }
            return false;
        }));
}
function fixupLoaderPath(compiler) {
    for (const rule of compiler.options.module?.rules ?? []){
        if (!rule || typeof rule !== "object" || !("use" in rule) || !Array.isArray(rule.use)) {
            continue;
        }
        for (const use of rule.use){
            if (use && typeof use === "object" && typeof use.loader === "string" && use.loader.endsWith("webpack-loader.cjs")) {
                use.loader = getOrchestrionLoaderPath();
            }
        }
    }
}
function sentryOrchestrionWebpackPlugin(options$1 = {}) {
    const plugin = webpack.default(options.orchestrionTransformOptions(options$1));
    const moduleNames = index.instrumentedModuleNames(options$1.instrumentations);
    const apply = plugin.apply.bind(plugin);
    plugin.apply = (compiler)=>{
        const externalizedModules = externalizedWebpackModules(compiler.options.externals, moduleNames);
        if (externalizedModules.length > 0) {
            compiler.hooks.thisCompilation.tap("SentryOrchestrionExternalsCheck", (compilation)=>{
                compilation.warnings.push(new compiler.webpack.WebpackError(options.externalizedModulesWarning(externalizedModules)));
            });
        }
        apply(compiler);
        fixupLoaderPath(compiler);
    };
    return plugin;
}
exports.getOrchestrionLoaderPath = getOrchestrionLoaderPath;
exports.getSentryInstrumentations = getSentryInstrumentations;
exports.resolveOrchestrionRuntimeRequest = resolveOrchestrionRuntimeRequest;
exports.sentryOrchestrionWebpackPlugin = sentryOrchestrionWebpackPlugin;
exports.serializeInstrumentations = serializeInstrumentations; //# sourceMappingURL=webpack.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/channels.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const amqplib = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/amqplib.js [instrumentation] (ecmascript)");
const anthropicAi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/anthropic-ai.js [instrumentation] (ecmascript)");
const awsSdk = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/aws-sdk.js [instrumentation] (ecmascript)");
const dataloader = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/dataloader.js [instrumentation] (ecmascript)");
const express = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/express.js [instrumentation] (ecmascript)");
const firebase = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/firebase.js [instrumentation] (ecmascript)");
const genericPool = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/generic-pool.js [instrumentation] (ecmascript)");
const googleGenai = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/google-genai.js [instrumentation] (ecmascript)");
const graphql = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/graphql.js [instrumentation] (ecmascript)");
const hapi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/hapi.js [instrumentation] (ecmascript)");
const ioredis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/ioredis.js [instrumentation] (ecmascript)");
const kafkajs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/kafkajs.js [instrumentation] (ecmascript)");
const knex = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/knex.js [instrumentation] (ecmascript)");
const koa = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/koa.js [instrumentation] (ecmascript)");
const langchain = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langchain.js [instrumentation] (ecmascript)");
const langgraph = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/langgraph.js [instrumentation] (ecmascript)");
const lruMemoizer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/lru-memoizer.js [instrumentation] (ecmascript)");
const mongodb = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongodb.js [instrumentation] (ecmascript)");
const mongoose = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mongoose.js [instrumentation] (ecmascript)");
const mysql2 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mysql2.js [instrumentation] (ecmascript)");
const mysql = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/mysql.js [instrumentation] (ecmascript)");
const nestjs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/nestjs.js [instrumentation] (ecmascript)");
const openai = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/openai.js [instrumentation] (ecmascript)");
const pg = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/pg.js [instrumentation] (ecmascript)");
const postgres = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/postgres.js [instrumentation] (ecmascript)");
const redis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/redis.js [instrumentation] (ecmascript)");
const remix = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/remix.js [instrumentation] (ecmascript)");
const tedious = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/tedious.js [instrumentation] (ecmascript)");
const vercelAi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/vercel-ai.js [instrumentation] (ecmascript)");
const CHANNELS = {
    ...amqplib.amqplibChannels,
    ...anthropicAi.anthropicAiChannels,
    ...awsSdk.awsSdkChannels,
    ...dataloader.dataloaderChannels,
    ...express.expressChannels,
    ...firebase.firebaseChannels,
    ...genericPool.genericPoolChannels,
    ...googleGenai.googleGenAiChannels,
    ...graphql.graphqlChannels,
    ...hapi.hapiChannels,
    ...ioredis.ioredisChannels,
    ...kafkajs.kafkajsChannels,
    ...knex.knexChannels,
    ...koa.koaChannels,
    ...langchain.langchainChannels,
    ...langgraph.langgraphChannels,
    ...lruMemoizer.lruMemoizerChannels,
    ...mongodb.mongodbChannels,
    ...mongoose.mongooseChannels,
    ...mysql2.mysql2Channels,
    ...mysql.mysqlChannels,
    ...nestjs.nestjsChannels,
    ...openai.openaiChannels,
    ...pg.pgChannels,
    ...postgres.postgresJsChannels,
    ...redis.redisChannels,
    ...remix.remixChannels,
    ...tedious.tediousChannels,
    ...vercelAi.vercelAiChannels
};
exports.CHANNELS = CHANNELS; //# sourceMappingURL=channels.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/detect.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
function isOrchestrionInjected() {
    return !!core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__;
}
function detectOrchestrionSetup() {
    const { runtime, bundler } = core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ ?? {};
    if (!runtime && !bundler) {
        core.debug.warn("[Sentry] No diagnostics-channel injection detected. Channel-based integrations will not record spans. Make sure the diagnostics channels are injected via the runtime `--import` hook or a bundler plugin before the instrumented modules load.");
        return;
    }
    core.debug.log(runtime ? `[Sentry] Runtime hook registered, injected libraries=${JSON.stringify(runtime)}` : "[Sentry] Runtime hook not registered");
    core.debug.log(bundler ? `[Sentry] Bundler plugin ran, injected libraries=${JSON.stringify(bundler)}` : "[Sentry] Bundler plugin did not run");
}
exports.detectOrchestrionSetup = detectOrchestrionSetup;
exports.isOrchestrionInjected = isOrchestrionInjected; //# sourceMappingURL=detect.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/registerChannelIntegration.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
function registerOrchestrionChannelIntegration(name, integrationFn) {
    var _a;
    const marker = (_a = core.GLOBAL_OBJ).__SENTRY_ORCHESTRION__ ?? (_a.__SENTRY_ORCHESTRION__ = {});
    (marker.integrations ?? (marker.integrations = /* @__PURE__ */ new Map())).set(name, integrationFn);
    core.getClient()?.addIntegration(integrationFn());
}
exports.registerOrchestrionChannelIntegration = registerOrchestrionChannelIntegration; //# sourceMappingURL=registerChannelIntegration.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/index.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const amqplib = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/amqplib.js [instrumentation] (ecmascript)");
const anthropic = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/anthropic.js [instrumentation] (ecmascript)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/aws-sdk/index.js [instrumentation] (ecmascript)");
const dataloader = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/dataloader.js [instrumentation] (ecmascript)");
const genericPool = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/generic-pool.js [instrumentation] (ecmascript)");
const googleGenai = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/google-genai.js [instrumentation] (ecmascript)");
const index$3 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/graphql/index.js [instrumentation] (ecmascript)");
const hapi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/hapi.js [instrumentation] (ecmascript)");
const koa = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/koa.js [instrumentation] (ecmascript)");
const ioredis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/ioredis.js [instrumentation] (ecmascript)");
const index$4 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/kafkajs/index.js [instrumentation] (ecmascript)");
const knex = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/knex.js [instrumentation] (ecmascript)");
const langchain = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/langchain.js [instrumentation] (ecmascript)");
const langgraph = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/langgraph.js [instrumentation] (ecmascript)");
const lruMemoizer = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/lru-memoizer.js [instrumentation] (ecmascript)");
const mongodb = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mongodb.js [instrumentation] (ecmascript)");
const mongoose = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mongoose.js [instrumentation] (ecmascript)");
const mysql = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mysql.js [instrumentation] (ecmascript)");
const mysql2 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/mysql2.js [instrumentation] (ecmascript)");
const openai = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/openai.js [instrumentation] (ecmascript)");
const postgres = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/postgres.js [instrumentation] (ecmascript)");
const postgresJs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/postgres-js.js [instrumentation] (ecmascript)");
const tedious = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/tedious.js [instrumentation] (ecmascript)");
const vercelAi = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/vercel-ai.js [instrumentation] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/express/index.js [instrumentation] (ecmascript)");
const index$2 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/firebase/index.js [instrumentation] (ecmascript)");
const detect = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/detect.js [instrumentation] (ecmascript)");
const registerChannelIntegration = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/registerChannelIntegration.js [instrumentation] (ecmascript)");
const nestjs = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/nestjs.js [instrumentation] (ecmascript)");
const remix = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/remix.js [instrumentation] (ecmascript)");
const redis = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/integrations/tracing-channel/redis.js [instrumentation] (ecmascript)");
const channelIntegrations = {
    postgresIntegration: postgres.postgresChannelIntegration,
    postgresJsIntegration: postgresJs.postgresJsChannelIntegration,
    mongoIntegration: mongodb.mongodbChannelIntegration,
    mysqlIntegration: mysql.mysqlChannelIntegration,
    mysql2Integration: mysql2.mysql2ChannelIntegration,
    genericPoolIntegration: genericPool.genericPoolChannelIntegration,
    mongooseIntegration: mongoose.mongooseChannelIntegration,
    lruMemoizerIntegration: lruMemoizer.lruMemoizerChannelIntegration,
    openaiIntegration: openai.openaiChannelIntegration,
    anthropicIntegration: anthropic.anthropicChannelIntegration,
    googleGenAIIntegration: googleGenai.googleGenAIChannelIntegration,
    langChainIntegration: langchain.langChainChannelIntegration,
    langGraphIntegration: langgraph.langGraphChannelIntegration,
    vercelAiIntegration: vercelAi.vercelAiChannelIntegration,
    amqplibIntegration: amqplib.amqplibChannelIntegration,
    hapiIntegration: hapi.hapiChannelIntegration,
    koaIntegration: koa.koaChannelIntegration,
    expressIntegration: index$1.expressChannelIntegration,
    graphqlIntegration: index$3.graphqlDiagnosticsChannelIntegration,
    kafkajsIntegration: index$4.kafkajsChannelIntegration,
    tediousIntegration: tedious.tediousChannelIntegration,
    awsIntegration: index.awsChannelIntegration,
    firebaseIntegration: index$2.firebaseChannelIntegration
};
exports.amqplibChannelIntegration = amqplib.amqplibChannelIntegration;
exports.anthropicChannelIntegration = anthropic.anthropicChannelIntegration;
exports.awsChannelIntegration = index.awsChannelIntegration;
exports.dataloaderChannelIntegration = dataloader.dataloaderChannelIntegration;
exports.genericPoolChannelIntegration = genericPool.genericPoolChannelIntegration;
exports.googleGenAIChannelIntegration = googleGenai.googleGenAIChannelIntegration;
exports.graphqlChannelIntegration = index$3.graphqlChannelIntegration;
exports.hapiChannelIntegration = hapi.hapiChannelIntegration;
exports.koaChannelIntegration = koa.koaChannelIntegration;
exports.ioredisChannelIntegration = ioredis.ioredisChannelIntegration;
exports.kafkajsChannelIntegration = index$4.kafkajsChannelIntegration;
exports.knexChannelIntegration = knex.knexChannelIntegration;
exports.langChainChannelIntegration = langchain.langChainChannelIntegration;
exports.langGraphChannelIntegration = langgraph.langGraphChannelIntegration;
exports.lruMemoizerChannelIntegration = lruMemoizer.lruMemoizerChannelIntegration;
exports.mongodbChannelIntegration = mongodb.mongodbChannelIntegration;
exports.mongooseChannelIntegration = mongoose.mongooseChannelIntegration;
exports.mysqlChannelIntegration = mysql.mysqlChannelIntegration;
exports.mysql2ChannelIntegration = mysql2.mysql2ChannelIntegration;
exports.openaiChannelIntegration = openai.openaiChannelIntegration;
exports.postgresChannelIntegration = postgres.postgresChannelIntegration;
exports.postgresJsChannelIntegration = postgresJs.postgresJsChannelIntegration;
exports.tediousChannelIntegration = tedious.tediousChannelIntegration;
exports.vercelAiChannelIntegration = vercelAi.vercelAiChannelIntegration;
exports.expressChannelIntegration = index$1.expressChannelIntegration;
exports.firebaseChannelIntegration = index$2.firebaseChannelIntegration;
exports.detectOrchestrionSetup = detect.detectOrchestrionSetup;
exports.isOrchestrionInjected = detect.isOrchestrionInjected;
exports.registerOrchestrionChannelIntegration = registerChannelIntegration.registerOrchestrionChannelIntegration;
exports.nestjsChannels = nestjs.nestjsChannels;
exports.remixChannels = remix.remixChannels;
exports.redisChannelIntegration = redis.redisChannelIntegration;
exports.channelIntegrations = channelIntegrations; //# sourceMappingURL=index.js.map
}),
"[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/runtime/register.js [instrumentation] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+core@10.73.0/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const require$$1 = __turbopack_context__.r("[externals]/node:module [external] (node:module, cjs)");
const require$$3 = __turbopack_context__.r("[externals]/node:url [external] (node:url, cjs)");
const node_worker_threads = __turbopack_context__.r("[externals]/node:worker_threads [external] (node:worker_threads, cjs)");
const index = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/config/index.js [instrumentation] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/index.js [instrumentation] (ecmascript)");
const hook = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/hook.js [instrumentation] (ecmascript)");
const diagnostics = __turbopack_context__.r("[project]/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/vendored/@apm-js-collab/tracing-hooks/lib/diagnostics.js [instrumentation] (ecmascript)");
function _interopNamespaceDefault(e) {
    const n = Object.create(null, {
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
    if (e) {
        for(const k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}
const require$$1__namespace = /*#__PURE__*/ _interopNamespaceDefault(require$$1);
function hasStableSyncModuleHooks(denoVersionString) {
    if (denoVersionString) {
        const { major: major2 = 0, minor: minor2 = 0 } = core.parseSemver(denoVersionString);
        return major2 > 2 || major2 === 2 && minor2 >= 8;
    }
    const { major = 0, minor = 0 } = core.parseSemver(process.versions.node ?? "0.0.0");
    return major > 25 || major === 25 && minor >= 1 || major === 24 && minor >= 13;
}
function registerDiagnosticsChannelInjection(_options) {
    if (!node_worker_threads.isMainThread && !node_worker_threads.parentPort) {
        return;
    }
    if (core.GLOBAL_OBJ?.__SENTRY_ORCHESTRION__?.runtime) {
        return;
    }
    const globalAny = globalThis;
    const stableSyncHooks = hasStableSyncModuleHooks(globalAny.Deno?.version?.deno);
    const mod = require$$1__namespace;
    diagnostics.diagnostics.setDiagnosticsHook(({ moduleName, error })=>{
        if (error) {
            core.debug.warn(`[orchestrion] failed to inject diagnostics-channel into ${moduleName}:`, error);
        } else {
            core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ = core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ || {};
            core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime = core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime || [];
            core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime.push(moduleName);
        }
    });
    try {
        if (typeof mod.registerHooks === "function" && stableSyncHooks) {
            hook.initializeSync({
                instrumentations: index.SENTRY_INSTRUMENTATIONS
            });
            mod.registerHooks({
                resolve: hook.resolveSync,
                load: hook.loadSync
            });
            core.debug.log("Registered diagnostics-channel injection via Module.registerHooks()");
        } else if (typeof mod.register === "function" && !globalAny.Bun && !globalAny.Deno) {
            const diagnosticsPort = hook.createDiagnosticsPort();
            let parentURL;
            parentURL = require$$3.pathToFileURL(("TURBOPACK compile-time value", "/ROOT/dograh-1/ui/node_modules/.pnpm/@sentry+server-utils@10.73.0/node_modules/@sentry/server-utils/build/cjs/orchestrion/runtime/register.js")).href;
            mod.register("@sentry/server-utils/orchestrion/hook", {
                parentURL,
                data: {
                    instrumentations: index.SENTRY_INSTRUMENTATIONS,
                    diagnosticsPort
                },
                transferList: [
                    diagnosticsPort
                ]
            });
            new index$1.default({
                instrumentations: index.SENTRY_INSTRUMENTATIONS
            }).patch();
            core.debug.log("Registered diagnostics-channel injection via Module.register()");
        } else {
            core.debug.warn("No available Node API to register diagnostics-channel injection hooks; skipping.");
            return;
        }
    } catch (error) {
        core.debug.warn("Failed to register diagnostics-channel injection hooks; channel-based integrations will not record spans.", error);
        return;
    }
    core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ = core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ || {};
    core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime = core.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime || [];
}
exports.registerDiagnosticsChannelInjection = registerDiagnosticsChannelInjection; //# sourceMappingURL=register.js.map
}),
];

//# sourceMappingURL=8e2ec_%40sentry_server-utils_build_cjs_orchestrion_1302b872._.js.map