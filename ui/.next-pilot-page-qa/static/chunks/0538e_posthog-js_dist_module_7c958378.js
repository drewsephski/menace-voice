(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dograh-1/ui/node_modules/.pnpm/posthog-js@1.425.0_@types+react@19.2.18_react@19.2.8/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Compression",
    ()=>Io,
    "DEFAULT_PRODUCT_TOUR_APPEARANCE",
    ()=>qo,
    "DisplaySurveyType",
    ()=>Ho,
    "PostHog",
    ()=>zl,
    "ProductTourEventName",
    ()=>Vo,
    "ProductTourEventProperties",
    ()=>Wo,
    "SurveyEventName",
    ()=>Bo,
    "SurveyEventProperties",
    ()=>zo,
    "SurveyEventType",
    ()=>Fo,
    "SurveyPosition",
    ()=>Mo,
    "SurveyQuestionBranchingType",
    ()=>jo,
    "SurveyQuestionType",
    ()=>Lo,
    "SurveySchedule",
    ()=>Uo,
    "SurveyTabPosition",
    ()=>Do,
    "SurveyType",
    ()=>No,
    "SurveyWidgetType",
    ()=>Ao,
    "default",
    ()=>_u,
    "posthog",
    ()=>_u,
    "severityLevels",
    ()=>Qo
]);
var t = "undefined" != typeof window ? window : void 0, i = "undefined" != typeof globalThis ? globalThis : t, e = null == i ? void 0 : i.navigator, r = null == i ? void 0 : i.document, s = null == i ? void 0 : i.location, n = null == i ? void 0 : i.fetch, o = null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest ? i.XMLHttpRequest : void 0, a = null == i ? void 0 : i.AbortController, l = null == i ? void 0 : i.CompressionStream, h = null == e ? void 0 : e.userAgent;
function u() {
    return !(!t || !1 === t.navigator.onLine);
}
var d = "undefined" != typeof globalThis ? globalThis : t;
d && "undefined" == typeof self && (d.self = d), d && "undefined" == typeof File && (d.File = function() {});
var v = null != t ? t : {}, c = {
    DEBUG: !1,
    LIB_VERSION: "0.7.1",
    LIB_NAME: "browser-common"
};
function f(t, i, e, r, s, n, o) {
    try {
        var a = t[n](o), l = a.value;
    } catch (t) {
        return void e(t);
    }
    a.done ? i(l) : Promise.resolve(l).then(r, s);
}
function p(t) {
    return function() {
        var i = this, e = arguments;
        return new Promise(function(r, s) {
            var n = t.apply(i, e);
            function o(t) {
                f(n, r, s, o, a, "next", t);
            }
            function a(t) {
                f(n, r, s, o, a, "throw", t);
            }
            o(void 0);
        });
    };
}
function _() {
    return _ = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _.apply(null, arguments);
}
function g(t, i) {
    if (null == t) return {};
    var e = {};
    for(var r in t)if (({}).hasOwnProperty.call(t, r)) {
        if (-1 !== i.indexOf(r)) continue;
        e[r] = t[r];
    }
    return e;
}
var m = (t)=>{
    if ("string" != typeof t) return t;
    try {
        return JSON.parse(t);
    } catch (i) {
        return t;
    }
};
function y(t) {
    return "string" == typeof t || t;
}
function b(t) {
    return "string" == typeof t ? t : void 0;
}
var w = [
    "$feature_flag",
    "$feature_flag_response",
    "$feature_flag_has_experiment",
    "$feature_flag_id",
    "$feature_flag_version",
    "$feature_flag_reason",
    "$feature_flag_request_id",
    "$feature_flag_evaluated_at",
    "$feature_flag_error",
    "locally_evaluated",
    "$groups",
    "$process_person_profile",
    "$geoip_disable",
    "$current_url",
    "$pathname",
    "$referring_domain",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid",
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "irclid",
    "_kx",
    "$session_id",
    "$window_id",
    "$lib",
    "$lib_version",
    "$device_id",
    "$is_server"
], S = function(t) {
    return t.AnonymousId = "anonymous_id", t.DistinctId = "distinct_id", t.Props = "props", t.EnablePersonProcessing = "enable_person_processing", t.PersonMode = "person_mode", t.FeatureFlagDetails = "feature_flag_details", t.FeatureFlags = "feature_flags", t.FeatureFlagPayloads = "feature_flag_payloads", t.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", t.BootstrapFeatureFlags = "bootstrap_feature_flags", t.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", t.OverrideFeatureFlags = "override_feature_flags", t.Queue = "queue", t.AiQueue = "ai_queue", t.AiCaptureQueue = "ai_capture_queue", t.LogsQueue = "logs_queue", t.OptedOut = "opted_out", t.SessionId = "session_id", t.SessionStartTimestamp = "session_start_timestamp", t.SessionLastTimestamp = "session_timestamp", t.PersonProperties = "person_properties", t.GroupProperties = "group_properties", t.InstalledAppBuild = "installed_app_build", t.InstalledAppVersion = "installed_app_version", t.SessionReplay = "session_replay", t.PushRegistered = "push_registered", t.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", t.SurveyLastSeenDate = "survey_last_seen_date", t.SurveysSeen = "surveys_seen", t.Surveys = "surveys", t.RemoteConfig = "remote_config", t.FlagsEndpointWasHit = "flags_endpoint_was_hit", t.DeviceId = "device_id", t;
}({}), x = function(t) {
    return t.GZipJS = "gzip-js", t.Base64 = "base64", t;
}({}), E = [
    "$snapshot",
    "$pageview",
    "$pageleave",
    "$set",
    "survey dismissed",
    "survey sent",
    "survey shown",
    "$identify",
    "$groupidentify",
    "$create_alias",
    "$$client_ingestion_warning",
    "$web_experiment_applied",
    "$feature_enrollment_update",
    "$feature_flag_called"
], k = [
    "token"
], T = 20, P = 1e3, R = 1e4, C = "[Circular]", O = "[Truncated]", I = "[Unserializable]", F = "[Function]";
function A(t) {
    for(var i = "", e = 0; t.length > e; e++){
        var r = t.charCodeAt(e);
        if (55296 > r || r > 56319) i += 56320 > r || r > 57343 ? t[e] : "�";
        else {
            var s = t.charCodeAt(e + 1);
            56320 > s || s > 57343 ? i += "�" : (i += t[e] + t[e + 1], e++);
        }
    }
    return i;
}
var M = [
    "amazonbot",
    "amazonproductbot",
    "app.hypefactors.com",
    "applebot",
    "archive.org_bot",
    "awariobot",
    "backlinksextendedbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "dataforseobot",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "leikibot",
    "linkedinbot",
    "meta-externalagent",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterestbot",
    "prerender",
    "rogerbot",
    "screaming frog",
    "sebot-wa",
    "sitebulb",
    "slackbot",
    "slurp",
    "trendictionbot",
    "turnitin",
    "twitterbot",
    "vercel-screenshot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "zoombot",
    "bot.htm",
    "bot.php",
    "(bot;",
    "bot/",
    "crawler",
    "ahrefsbot",
    "ahrefssiteaudit",
    "semrushbot",
    "siteauditbot",
    "splitsignalbot",
    "gptbot",
    "oai-searchbot",
    "chatgpt-user",
    "perplexitybot",
    "better uptime bot",
    "sentryuptimebot",
    "uptimerobot",
    "headlesschrome",
    "cypress",
    "google-hoteladsverifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleother",
    "google-cloudvertexbot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "google-inspectiontool",
    "bytespider"
], D = function(t, i) {
    if (void 0 === i && (i = []), !t) return !1;
    var e = t.toLowerCase();
    return M.concat(i).some((t)=>{
        var i = t.toLowerCase();
        return -1 !== e.indexOf(i);
    });
};
function N(t, i) {
    return -1 !== t.indexOf(i);
}
var L = function(t) {
    return t.trim();
}, j = function(t) {
    return t.replace(/^\$/, "");
};
function U(t) {
    var i, e = [];
    return null !== (i = JSON.stringify(t, function(t, i) {
        if ("bigint" == typeof i) return i.toString();
        if ("function" != typeof i && "symbol" != typeof i) {
            if (i instanceof Error) return {
                name: i.name,
                message: i.message,
                stack: i.stack
            };
            if (i && "object" == typeof i) {
                for(; e.length > 0 && e[e.length - 1] !== this;)e.pop();
                if (e.includes(i)) return "[Circular]";
                e.push(i);
            }
            return i;
        }
    })) && void 0 !== i ? i : "null";
}
var B = Object.prototype, z = B.hasOwnProperty, H = B.toString, q = Array.isArray || function(t) {
    return "[object Array]" === H.call(t);
}, V = (t)=>"function" == typeof t, W = (t)=>t === Object(t) && !q(t), G = (t)=>{
    if (W(t)) {
        for(var i in t)if (z.call(t, i)) return !1;
        return !0;
    }
    return !1;
}, K = (t)=>void 0 === t, J = (t)=>"[object String]" == H.call(t), Y = (t)=>J(t) && 0 === t.trim().length, Q = (t)=>null === t, X = (t)=>K(t) || Q(t), Z = (t)=>"[object Number]" == H.call(t) && t == t, tt = (t)=>Z(t) && t > 0, it = (t)=>"[object Boolean]" === H.call(t), et = (t)=>t instanceof FormData, rt = (t)=>N(E, t), st = (t)=>N(k, t);
function nt(t) {
    return null === t || "object" != typeof t;
}
function ot(t, i) {
    return ({}).toString.call(t) === "[object " + i + "]";
}
function at(t) {
    switch(({}).toString.call(t)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return ht(t, Error);
    }
}
function lt(t) {
    return "undefined" != typeof Event && ht(t, Event);
}
function ht(t, i) {
    try {
        return t instanceof i;
    } catch (t) {
        return !1;
    }
}
var ut = [
    !0,
    "true",
    1,
    "1",
    "yes"
], dt = (t)=>N(ut, t), vt = [
    !1,
    "false",
    0,
    "0",
    "no"
];
function ct(t, i, e, r, s) {
    return i > e && (r.warn("min cannot be greater than max."), i = e), Z(t) ? t > e ? (r.warn(" cannot be  greater than max: " + e + ". Using max value instead."), e) : i > t ? (r.warn(" cannot be less than min: " + i + ". Using min value instead."), i) : t : (r.warn(" must be a number. using max or fallback. max: " + e + ", fallback: " + s), ct(s || e, i, e, r));
}
class ft {
    F(t, i) {
        var e = Math.floor((i - t.lastAccess) / this.N);
        e > 0 && (t.tokens = Math.min(t.tokens + e * this.O, this.R), t.lastAccess = t.lastAccess + e * this.N);
    }
    consumeRateLimit(t) {
        var i, e = Date.now(), r = String(t), s = this.C[r];
        return s ? this.F(s, e) : this.C[r] = s = {
            tokens: this.R,
            lastAccess: e
        }, 0 === s.tokens || (s.tokens--, 0 === s.tokens && (null == (i = this.I) || i.call(this, t)), 0 === s.tokens);
    }
    stop() {
        this.C = {};
    }
    constructor(t){
        this.C = {}, this.I = t.I, this.R = ct(t.bucketSize, 0, 100, t.A), this.O = ct(t.refillRate, 0, this.R, t.A), this.N = ct(t.refillInterval, 0, 864e5, t.A);
    }
}
var pt = "Mobile", _t = "iOS", gt = "Android", mt = "Tablet", yt = gt + " " + mt, bt = "iPad", wt = "Apple", St = wt + " Watch", xt = "Safari", Et = "BlackBerry", kt = "Samsung", Tt = kt + "Browser", $t = kt + " Internet", Pt = "Chrome", Rt = Pt + " OS", Ct = Pt + " " + _t, Ot = "Internet Explorer", It = Ot + " " + pt, Ft = "Opera", At = Ft + " Mini", Mt = "Edge", Dt = "Microsoft " + Mt, Nt = "Firefox", Lt = Nt + " " + _t, jt = "Nintendo", Ut = "PlayStation", Bt = "Xbox", zt = gt + " " + pt, Ht = pt + " " + xt, qt = "Windows", Vt = qt + " Phone", Wt = "Nokia", Gt = "Ouya", Kt = "Generic", Jt = Kt + " " + pt.toLowerCase(), Yt = Kt + " " + mt.toLowerCase(), Qt = "Konqueror", Xt = "Oculus Browser", Zt = "Vivaldi", ti = "Yandex", ii = "Whale", ei = "DuckDuckGo", ri = "Pale Moon", si = "Waterfox", ni = "Brave", oi = "Claude", ai = "Codex", li = "ChatGPT", hi = "Google Search App", ui = "(\\d+(\\.\\d+)?)", di = new RegExp("Version/" + ui), vi = new RegExp("(" + oi + "|" + ai + "|" + li + ")\\/" + ui), ci = new RegExp(Bt, "i"), fi = new RegExp(Ut + " \\w+", "i"), pi = new RegExp(jt + " \\w+", "i"), _i = new RegExp(Et + "|PlayBook|BB10", "i"), gi = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    5.1: "XP",
    5.2: "XP",
    "6.0": "Vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    6.4: "10",
    "10.0": "10"
}, mi = function(t, i, e, r) {
    i = i || "";
    var s = function(t) {
        return null != t && t.brave ? ni : null;
    }(e);
    return s || (null != r && r.detectGoogleSearchApp && N(t, "GSA/") ? hi : N(t, " OPR/") && N(t, "Mini") ? At : N(t, " OPR/") ? Ft : _i.test(t) ? Et : N(t, "IE" + pt) || N(t, "WPDesktop") ? It : N(t, "OculusBrowser") ? Xt : N(t, Tt) ? $t : N(t, Mt) || N(t, "Edg/") ? Dt : N(t, Zt + "/") ? Zt : N(t, "YaBrowser/") ? ti : N(t, ii + "/") ? ii : N(t, ei + "/") || N(t, "Ddg/") ? ei : N(t, oi + "/") ? oi : N(t, ai + "/") ? ai : N(t, li + "/") ? li : N(t, "FBIOS") ? "Facebook " + pt : N(t, "UCWEB") || N(t, "UCBrowser") ? "UC Browser" : N(t, "CriOS") ? Ct : N(t, "CrMo") || N(t, Pt) ? Pt : N(t, gt) && N(t, xt) ? zt : N(t, "FxiOS") ? Lt : N(t.toLowerCase(), Qt.toLowerCase()) ? Qt : N(t, ni + "/") ? ni : ((t, i)=>i && N(i, wt) || function(t) {
            return N(t, xt) && !N(t, Pt) && !N(t, gt);
        }(t))(t, i) ? N(t, pt) ? Ht : xt : N(t, "PaleMoon/") ? ri : N(t, si + "/") ? si : N(t, Nt) ? Nt : N(t, "MSIE") || N(t, "Trident/") ? Ot : N(t, "Gecko") ? Nt : "");
}, yi = {
    [It]: [
        new RegExp("rv:" + ui)
    ],
    [Dt]: [
        new RegExp(Mt + "?\\/" + ui)
    ],
    [Pt]: [
        new RegExp("(" + Pt + "|CrMo)\\/" + ui)
    ],
    [Ct]: [
        new RegExp("CriOS\\/" + ui)
    ],
    "UC Browser": [
        new RegExp("(UCBrowser|UCWEB)\\/" + ui)
    ],
    [xt]: [
        di
    ],
    [Ht]: [
        di
    ],
    [Ft]: [
        new RegExp("(Opera|OPR)\\/" + ui)
    ],
    [Nt]: [
        new RegExp(Nt + "\\/" + ui)
    ],
    [Lt]: [
        new RegExp("FxiOS\\/" + ui)
    ],
    [Qt]: [
        new RegExp("Konqueror[:/]?" + ui, "i")
    ],
    [Et]: [
        new RegExp(Et + " " + ui),
        di
    ],
    [zt]: [
        new RegExp("android\\s" + ui, "i")
    ],
    [$t]: [
        new RegExp(Tt + "\\/" + ui)
    ],
    [Xt]: [
        new RegExp("OculusBrowser\\/" + ui)
    ],
    [Zt]: [
        new RegExp(Zt + "\\/" + ui)
    ],
    [ti]: [
        new RegExp("YaBrowser\\/" + ui)
    ],
    [ii]: [
        new RegExp(ii + "\\/" + ui)
    ],
    [ni]: [
        new RegExp(ni + "\\/" + ui)
    ],
    [oi]: [
        vi
    ],
    [ai]: [
        vi
    ],
    [li]: [
        vi
    ],
    [ei]: [
        new RegExp("(DuckDuckGo|Ddg)\\/" + ui)
    ],
    [ri]: [
        new RegExp("PaleMoon\\/" + ui)
    ],
    [si]: [
        new RegExp(si + "\\/" + ui)
    ],
    [hi]: [
        new RegExp("GSA\\/" + ui)
    ],
    [Ot]: [
        new RegExp("(rv:|MSIE )" + ui)
    ],
    Mozilla: [
        new RegExp("rv:" + ui)
    ]
}, bi = function(t, i, e, r) {
    var s = mi(t, i, e, r), n = yi[s];
    if (K(n)) return null;
    for(var o = 0; n.length > o; o++){
        var a = t.match(n[o]);
        if (a) return parseFloat(a[a.length - 2]);
    }
    return null;
}, wi = [
    [
        new RegExp(Bt + "; " + Bt + " (.*?)[);]", "i"),
        (t)=>[
                Bt,
                t && t[1] || ""
            ]
    ],
    [
        new RegExp(jt, "i"),
        [
            jt,
            ""
        ]
    ],
    [
        new RegExp(Ut, "i"),
        [
            Ut,
            ""
        ]
    ],
    [
        _i,
        [
            Et,
            ""
        ]
    ],
    [
        new RegExp(qt, "i"),
        (t, i)=>{
            if (/Phone/.test(i) || /WPDesktop/.test(i)) return [
                Vt,
                ""
            ];
            if (new RegExp(pt).test(i) && !/IEMobile\b/.test(i)) return [
                qt + " " + pt,
                ""
            ];
            var e = /Windows NT ([0-9.]+)/i.exec(i);
            if (e && e[1]) {
                var r = gi[e[1]] || "";
                return /arm/i.test(i) && (r = "RT"), [
                    qt,
                    r
                ];
            }
            return [
                qt,
                ""
            ];
        }
    ],
    [
        /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
        (t)=>t && t[3] ? [
                _t,
                [
                    t[3],
                    t[4],
                    t[5] || "0"
                ].join(".")
            ] : [
                _t,
                ""
            ]
    ],
    [
        /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
        (t)=>{
            var i = "";
            return t && t.length >= 3 && (i = K(t[2]) ? t[3] : t[2]), [
                "watchOS",
                i
            ];
        }
    ],
    [
        new RegExp("(" + gt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + gt + ")", "i"),
        (t)=>t && t[2] ? [
                gt,
                [
                    t[2],
                    t[3],
                    t[4] || "0"
                ].join(".")
            ] : [
                gt,
                ""
            ]
    ],
    [
        /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
        (t)=>{
            var i = [
                "Mac OS X",
                ""
            ];
            return t && t[1] && (i[1] = [
                t[1],
                t[2],
                t[3] || "0"
            ].join(".")), i;
        }
    ],
    [
        /Mac/i,
        [
            "Mac OS X",
            ""
        ]
    ],
    [
        /CrOS/,
        [
            Rt,
            ""
        ]
    ],
    [
        /Linux|debian/i,
        [
            "Linux",
            ""
        ]
    ]
], Si = function(t) {
    for(var i = 0; wi.length > i; i++){
        var e = wi[i], r = e[1], s = e[0].exec(t), n = s && (V(r) ? r(s, t) : r);
        if (n) return n;
    }
    return [
        "",
        ""
    ];
}, xi = function(t) {
    return pi.test(t) ? jt : fi.test(t) ? Ut : ci.test(t) ? Bt : new RegExp(Gt, "i").test(t) ? Gt : new RegExp("(" + Vt + "|WPDesktop)", "i").test(t) ? Vt : /iPad/.test(t) ? bt : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t) ? St : _i.test(t) ? Et : /(kobo)\s(ereader|touch)/i.test(t) ? "Kobo" : new RegExp(Wt, "i").test(t) ? Wt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t) ? "Kindle Fire" : /(Android|ZTE)/i.test(t) ? new RegExp(pt).test(t) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t) || /pixel[\daxl ]{1,6}/i.test(t) && !/pixel c/i.test(t) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t) || /lmy47v/i.test(t) && !/QTAQZ3/i.test(t) ? gt : yt : new RegExp("(pda|" + pt + ")", "i").test(t) ? Jt : new RegExp(mt, "i").test(t) && !new RegExp(mt + " pc", "i").test(t) ? Yt : "";
}, Ei = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function ki(t, i) {
    return "string" == typeof (e = t) && Ei.test(e) ? t : i();
    //TURBOPACK unreachable
    ;
    var e;
}
function Ti(t, i) {
    var e = new Error(i);
    try {
        Object.defineProperty(e, "name", {
            value: t,
            writable: !0,
            enumerable: !0,
            configurable: !0
        });
    } catch (t) {}
    return e;
}
function $i(t) {
    return t ? t.split("#")[0] : t;
}
function Pi(t, i) {
    var e = setTimeout(t, i);
    return (null == e ? void 0 : e.unref) && (null == e || e.unref()), e;
}
function Ri(t, i, e) {
    return Ci.apply(this, arguments);
}
function Ci() {
    return (Ci = p(function*(t, i, e) {
        var r;
        try {
            return yield Promise.race([
                t,
                new Promise((t, s)=>{
                    r = Pi(()=>{
                        try {
                            null == e || e(), t();
                        } catch (t) {
                            s(t);
                        }
                    }, i);
                })
            ]);
        } finally{
            clearTimeout(r);
        }
    })).apply(this, arguments);
}
var Oi, Ii = "NativeGzipValidationError", Fi = (t)=>t.length >= 2 && 31 === t[0] && 139 === t[1], Ai = (t, i)=>t === x.GZipJS || i === x.GZipJS || "gzip" === i, Mi = (t)=>!(!t || "object" != typeof t) && "NotReadableError" === ("name" in t ? String(t.name) : ""), Di = (t)=>{
    throw Ti(Ii, "Native gzip produced invalid output: " + t);
}, Ni = function() {
    var t = p(function*(t, i) {
        18 > t.size && Di("too-short");
        var e = new Uint8Array((yield t.slice(0, 10).arrayBuffer()));
        Fi(e) && 8 === e[2] || Di("invalid-header");
        var r = new DataView((yield t.slice(t.size - 8).arrayBuffer()));
        r.getUint32(0, !0) !== ((t)=>{
            for(var i = (()=>{
                if (Oi) return Oi;
                Oi = [];
                for(var t = 0; 256 > t; t++){
                    for(var i = t, e = 0; 8 > e; e++)i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
                    Oi[t] = i >>> 0;
                }
                return Oi;
            })(), e = 4294967295, r = 0; t.length > r; r++)e = i[255 & (e ^ t[r])] ^ e >>> 8;
            return (4294967295 ^ e) >>> 0;
        })(i) && Di("invalid-crc");
        var s = i.length >>> 0;
        r.getUint32(4, !0) !== s && Di("invalid-size");
    });
    return function(i, e) {
        return t.apply(this, arguments);
    };
}();
function Li() {
    return Li = p(function*(t, i, e) {
        void 0 === i && (i = !0);
        try {
            var r = (new TextEncoder).encode(t), s = new globalThis.CompressionStream("gzip"), n = s.writable.getWriter(), o = n.write(r).then(()=>n.close()).catch(function() {
                var t = p(function*(t) {
                    try {
                        yield n.abort(t);
                    } catch (t) {}
                    throw t;
                });
                return function(i) {
                    return t.apply(this, arguments);
                };
            }()), a = new Response(s.readable).blob(), l = (yield Promise.all([
                a,
                o
            ]))[0];
            return yield Ni(l, r), l;
        } catch (t) {
            if (null != e && e.rethrow) throw t;
            return i && console.error("Failed to gzip compress data", t), null;
        }
    }), Li.apply(this, arguments);
}
var ji = 0x8000000000000000, Ui = "9223372036854775808", Bi = {}.propertyIsEnumerable;
function zi(t, i) {
    try {
        return Vi(t, i, {
            ancestors: new WeakSet,
            remainingNodes: R
        }, 0);
    } catch (t) {
        return [];
    }
}
function Hi(t, i, e, r) {
    if (0 >= e.remainingNodes) return {
        stringValue: O
    };
    if (e.remainingNodes--, it(t)) return {
        boolValue: t
    };
    if ("bigint" == typeof t) return function(t, i) {
        var e = t.toString(), r = BigInt(Ui);
        return t >= r || -r > t ? (null == i || i.debug("Attribute " + e + " is outside the int64 range; encoding it as a string"), {
            stringValue: e
        }) : {
            intValue: e
        };
    }(t, i);
    if ("number" == typeof t) {
        if (!Number.isFinite(t)) return {
            stringValue: String(t)
        };
        if (Number.isInteger(t)) {
            if (Number.isSafeInteger(t)) return {
                intValue: String(t)
            };
            if ("undefined" == typeof BigInt) return {
                stringValue: String(t)
            };
            var s = BigInt(t).toString();
            return t >= ji || -ji > t ? (null == i || i.debug("Attribute " + s + " is outside the int64 range; encoding it as a string"), {
                stringValue: s
            }) : {
                intValue: s
            };
        }
        return {
            doubleValue: t
        };
    }
    if ("string" == typeof t) return {
        stringValue: A(t)
    };
    if ("function" == typeof t) return {
        stringValue: F
    };
    if ("symbol" == typeof t) return {
        stringValue: String(t)
    };
    if ("object" == typeof t && null !== t) {
        if (e.ancestors.has(t)) return {
            stringValue: C
        };
        if (r >= T) return {
            stringValue: O
        };
        if (t instanceof Date) {
            var n = t.getTime(), o = Number.isFinite(n) ? t.toISOString() : String(t);
            return {
                stringValue: "string" == typeof o ? A(o) : String(o)
            };
        }
        e.ancestors.add(t);
        try {
            try {
                var a = t.toJSON;
                if ("function" == typeof a) return Hi(a.call(t), i, e, r + 1);
            } catch (t) {}
            return q(t) ? {
                arrayValue: {
                    values: qi(t, i, e, r + 1)
                }
            } : {
                kvlistValue: {
                    values: Vi(t, i, e, r + 1)
                }
            };
        } finally{
            e.ancestors.delete(t);
        }
    }
    return {
        stringValue: A(String(t))
    };
}
function qi(t, i, e, r) {
    for(var s = [], n = Math.min(t.length, P), o = 0; n > o && e.remainingNodes > 0; o++)try {
        var a = o in t ? t[o] : void 0;
        if (X(a)) continue;
        s.push(Hi(a, i, e, r));
    } catch (t) {
        s.push({
            stringValue: I
        });
    }
    return t.length > o && s.push({
        stringValue: O
    }), s;
}
function Vi(t, i, e, r) {
    var s = [];
    for(var n in t)if (Bi.call(t, n)) {
        if (!n) {
            null == i || i.debug("Dropping an attribute with an empty key");
            continue;
        }
        if (s.length >= P || 0 >= e.remainingNodes) {
            null == i || i.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break;
        }
        try {
            var o = t[n];
            if (Q(o) || K(o)) continue;
            s.push({
                key: A(n),
                value: Hi(o, i, e, r)
            });
        } catch (t) {
            s.push({
                key: A(n),
                value: {
                    stringValue: I
                }
            });
        }
    }
    return s;
}
function Wi(t, i, e) {
    return _({}, t.resourceAttributes, {
        "service.name": t.serviceName || "unknown_service"
    }, t.environment && {
        "deployment.environment": t.environment
    }, t.serviceVersion && {
        "service.version": t.serviceVersion
    }, {
        "telemetry.sdk.name": i,
        "telemetry.sdk.version": e
    });
}
var Gi = {
    darwin: "macOS",
    win32: "Windows",
    linux: "Linux",
    android: "Android",
    freebsd: "FreeBSD",
    openbsd: "OpenBSD",
    sunos: "SunOS",
    aix: "AIX",
    "Mac OS X": "macOS"
};
var Ki = {
    trace: {
        text: "TRACE",
        number: 1
    },
    debug: {
        text: "DEBUG",
        number: 5
    },
    info: {
        text: "INFO",
        number: 9
    },
    warn: {
        text: "WARN",
        number: 13
    },
    error: {
        text: "ERROR",
        number: 17
    },
    fatal: {
        text: "FATAL",
        number: 21
    }
}, Ji = Ki.info;
function Yi(t) {
    try {
        return A(String(t));
    } catch (t) {
        return I;
    }
}
function Qi(t, i, e, r) {
    var s, n = Ki[t.level || "info"] || Ji, o = n.text, a = n.number, l = (void 0 === (s = Z(r) ? r : void 0) && (s = Date.now()), String(s) + "000000"), h = {};
    i.distinctId && (h.posthogDistinctId = i.distinctId), i.sessionId && (h.sessionId = i.sessionId), i.windowId && (h["window.id"] = i.windowId), X(i.sessionStartTimestamp) || (h.sessionStartTimestamp = String(i.sessionStartTimestamp)), X(i.lastActivityTimestamp) || (h.lastActivityTimestamp = String(i.lastActivityTimestamp)), i.currentUrl && (h["url.full"] = i.currentUrl), i.screenName && (h["screen.name"] = i.screenName), i.appState && (h["app.state"] = i.appState), i.activeFeatureFlags && i.activeFeatureFlags.length > 0 && (h.feature_flags = i.activeFeatureFlags);
    var u = _({}, h), d = t.attributes;
    if (d) {
        var v = [];
        try {
            v = Object.keys(d);
        } catch (t) {
            v = [];
        }
        for (var c of v){
            var f = void 0;
            try {
                f = d[c];
            } catch (t) {
                f = I;
            }
            Object.defineProperty(u, c, {
                value: f,
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
        }
    }
    var p = {
        timeUnixNano: l,
        observedTimeUnixNano: l,
        severityNumber: a,
        severityText: o,
        body: {
            stringValue: Yi(t.body)
        },
        attributes: zi(u, e)
    };
    return t.trace_id && (p.traceId = t.trace_id), t.span_id && (p.spanId = t.span_id), K(t.trace_flags) || (p.flags = t.trace_flags), p;
}
function Xi(t, i, e) {
    return Wi(t, i, e);
}
function Zi(t, i, e, r) {
    return {
        resourceLogs: [
            {
                resource: {
                    attributes: zi(i)
                },
                scopeLogs: [
                    {
                        scope: {
                            name: e,
                            version: r
                        },
                        logRecords: t
                    }
                ]
            }
        ]
    };
}
let te = class {
    clearQueue() {
        this.jn++, this._instance.setPersistedProperty(S.LogsQueue, []);
    }
    reset() {
        this.Kn(), this.Hn = 0, this.zn = 0, this.Un = !1, this.Bn = 0, this.Zn = this.gn.maxBatchRecordsPerPost;
    }
    onReconnect() {
        this.Bn = 0, this.Yn();
    }
    captureLog(t, i) {
        var e;
        if (!this._instance.isDisabled && !this._instance.optedOut && null != t && t.body) {
            var r = this.Xn(t);
            if (null !== r) if (r.body) {
                if (this.ts()) {
                    var s = {
                        record: Qi(r, null !== (e = null == i ? void 0 : i.context) && void 0 !== e ? e : this.Pn(), this.A, null == i ? void 0 : i.occurredAtMs)
                    };
                    this.Fn(()=>this.es(s));
                }
            } else this.A.info("Log was rejected in beforeSend function");
        }
    }
    Xn(t) {
        var i = this.gn.beforeSend;
        if (!i) return t;
        var e = q(i) ? i : [
            i
        ], r = t;
        for (var s of e)try {
            var n = s(r);
            if (!n) return this.A.info("Log was rejected in beforeSend function"), null;
            r = n;
        } catch (t) {
            return this.A.error("Error in beforeSend function for log:", t), null;
        }
        return r;
    }
    ts() {
        if (void 0 === this.Jn) return !0;
        var t = Date.now(), i = t - this.Hn;
        return this.Qn > i && i >= 0 || (this.Hn = t, this.zn = 0, this.Un = !1), this.Jn > this.zn ? (this.zn++, !0) : (this.Un || (this.A.warn("captureLog dropping logs: exceeded " + this.Jn + " logs per " + this.Qn + "ms"), this.Un = !0), !1);
    }
    flush() {
        var t = this;
        return p(function*() {
            if (!t._instance.isDisabled) return t.Nn || (t.Nn = t.rs().finally(()=>{
                t.Nn = null;
            })), t.Nn;
        })();
    }
    rs() {
        var t = this;
        return p(function*() {
            var i;
            t.Kn();
            var e = null !== (i = t._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== i ? i : [];
            if (0 !== e.length) for(var r = e.length, s = 0; e.length > 0 && r > s;){
                var n, o, a = t.jn;
                t.qn = 0;
                var l = Math.min(e.length, t.Zn), h = e.slice(0, l), u = Zi(h.map((t)=>t.record), t.ns(), null !== (n = t.$n) && void 0 !== n ? n : t._instance.getLibraryId(), t._instance.getLibraryVersion()), d = yield t._instance.ss(u);
                if (t.jn !== a) return;
                if ("too-large" === d.kind && h.length > 1) t.Zn = Math.max(1, Math.floor(h.length / 2)), t.A.warn("Received 413 when sending logs batch of size " + h.length + ", reducing batch size to " + t.Zn);
                else {
                    if ("retry-later" === d.kind) throw d.error;
                    if ("too-large" === d.kind ? t.A.warn("Dropping a single log record after 413 with batch size 1 — the record is larger than the server cap and cannot be split further.") : "ok" === d.kind && t.gn.maxBatchRecordsPerPost > t.Zn && (t.Zn = Math.min(t.gn.maxBatchRecordsPerPost, t.Zn + 1)), yield t.os(h.length), e = null !== (o = t._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== o ? o : [], s += h.length, "fatal" === d.kind) throw d.error;
                }
            }
        })();
    }
    os(t) {
        var i = this;
        return p(function*() {
            var e, r = Math.max(0, t - i.qn), s = null !== (e = i._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== e ? e : [];
            i._instance.setPersistedProperty(S.LogsQueue, s.slice(r)), yield i.Dn();
        })();
    }
    ns() {
        return Xi(this.gn, this._instance.getLibraryId(), this._instance.getLibraryVersion());
    }
    es(t) {
        var i;
        if (!this._instance.optedOut) {
            var e = null !== (i = this._instance.getPersistedProperty(S.LogsQueue)) && void 0 !== i ? i : [];
            this.Vn > e.length || (e.shift(), this.qn++, this.A.info("Logs queue is full, dropping oldest record.")), e.push(t), this._instance.setPersistedProperty(S.LogsQueue, e), this.Wn > e.length ? this.ls() : this.Yn();
        }
    }
    ls(t) {
        void 0 === t && (t = this.Gn), this.us || (this.us = Pi(()=>{
            this.us = void 0, this.Yn();
        }, t));
    }
    hs() {
        var t = Math.min(Math.max(0, this.Bn - 1), 6);
        return this.Gn * Math.pow(2, t);
    }
    ds() {
        var t = this._instance.getPersistedProperty(S.LogsQueue);
        return !!t && t.length > 0;
    }
    shutdown(t) {
        var i = this;
        return p(function*() {
            i.Kn();
            var e = i.flush().catch(()=>{});
            void 0 !== t ? yield Ri(e, t) : yield e;
        })();
    }
    flushWithTimeout(t) {
        var i = this;
        return p(function*() {
            var e = i.flush();
            yield Ri(e, t, ()=>{
                e.catch(()=>{});
            });
        })();
    }
    Yn() {
        this.flush().then(()=>{
            this.Bn = 0;
        }, (t)=>{
            this.Bn++, this.A.error("PostHog logs flush failed:", t);
        }).finally(()=>{
            !this._instance.isDisabled && this.ds() && this.ls(this.hs());
        });
    }
    Kn() {
        this.us && (clearTimeout(this.us), this.us = void 0);
    }
    constructor(t, i, e, r, s, n, o){
        var a;
        void 0 === n && (n = ()=>Promise.resolve()), this._instance = t, this.gn = i, this.A = e, this.Pn = r, this.Fn = s, this.Dn = n, this.$n = o, this.Nn = null, this.qn = 0, this.jn = 0, this.Bn = 0, this.Hn = 0, this.zn = 0, this.Un = !1, this.Wn = i.maxBufferSize, this.Vn = Math.max(null !== (a = i.maxQueueSize) && void 0 !== a ? a : i.maxBufferSize, i.maxBufferSize), this.Gn = i.flushIntervalMs, this.Zn = i.maxBatchRecordsPerPost, this.Qn = i.rateCapWindowMs, this.Jn = i.maxLogsPerInterval;
    }
};
var ie = [
    0,
    5,
    10,
    25,
    50,
    75,
    100,
    250,
    500,
    750,
    1e3,
    2500,
    5e3,
    7500,
    1e4
];
function ee(t) {
    return String(t) + "000000";
}
function re(t, i, e, r) {
    var s = "";
    return r && (s = Object.keys(r).sort().map((t)=>JSON.stringify(t) + ":" + JSON.stringify(r[t])).join(",")), t + "\0" + i + "\0" + (null != e ? e : "") + "\0" + s;
}
let se = class {
    count(t, i, e) {
        void 0 === i && (i = 1), this.ys({
            name: t,
            type: "count",
            value: i,
            unit: null == e ? void 0 : e.unit,
            attributes: null == e ? void 0 : e.attributes
        });
    }
    gauge(t, i, e) {
        this.ys({
            name: t,
            type: "gauge",
            value: i,
            unit: null == e ? void 0 : e.unit,
            attributes: null == e ? void 0 : e.attributes
        });
    }
    histogram(t, i, e) {
        this.ys({
            name: t,
            type: "histogram",
            value: i,
            unit: null == e ? void 0 : e.unit,
            attributes: null == e ? void 0 : e.attributes
        });
    }
    flush() {
        var t = this, i = this.Nn, e = function() {
            var e = p(function*() {
                i && (yield i.catch(()=>{})), yield t.bs();
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), r = e().finally(()=>{
            this.Nn === r && (this.Nn = null);
        });
        return this.Nn = r, r;
    }
    drainWindow() {
        if (0 === this.vs.size) return null;
        var t = this.vs;
        return this.vs = new Map, this.cs = !1, this.fs = new Map, this.ps = new Set, this._s(t);
    }
    reset() {
        this.gs++, this.Kn(), this.vs = new Map, this.Nn = null, this.cs = !1, this.fs = new Map, this.ps = new Set;
    }
    ys(t) {
        if (!this._instance.isDisabled && !this._instance.optedOut) {
            var i = this.Xn(t);
            if (null !== i) if (i.name && "string" == typeof i.name) if ("number" == typeof i.value && Number.isFinite(i.value)) if ("count" === i.type && 0 > i.value) this.A.warn("Dropping count '" + i.name + "': counters are monotonic, value must be >= 0");
            else {
                var e, r;
                try {
                    e = i.attributes ? _({}, i.attributes) : void 0, r = re(i.type, i.name, i.unit, e);
                } catch (t) {
                    return void this.A.warn("Dropping metric '" + i.name + "': attributes could not be serialized", t);
                }
                var s = this.vs.get(r);
                if (!s) {
                    if (!this.ws()) return;
                    s = {
                        name: i.name,
                        type: i.type,
                        unit: i.unit,
                        attributes: e,
                        windowStartMs: Date.now()
                    }, this.vs.set(r, s);
                }
                var n = this.fs.get(i.name);
                void 0 === n ? this.fs.set(i.name, i.type) : n === i.type || this.ps.has(i.name) || (this.ps.add(i.name), this.A.warn("Metric name '" + i.name + "' is already used as a " + n + "; recording it as a " + i.type + " too will blend both series in charts. Use a distinct name.")), this.ks(s, i.value), this.ls();
            }
            else this.A.warn("Dropping metric '" + i.name + "': value must be a finite number");
            else this.A.warn("Dropping metric with empty name");
        }
    }
    ws() {
        return this.gn.maxSeriesPerFlush > this.vs.size || (this.cs || (this.cs = !0, this.A.warn("Metric series cap reached (" + this.gn.maxSeriesPerFlush + " per flush window); dropping new series until the next flush. Reduce attribute cardinality.")), !1);
    }
    ks(t, i) {
        var e;
        switch(t.type){
            case "count":
                t.total = (null !== (e = t.total) && void 0 !== e ? e : 0) + i;
                break;
            case "gauge":
                t.last = i;
                break;
            case "histogram":
                t.hist || (t.hist = {
                    count: 0,
                    sum: 0,
                    min: i,
                    max: i,
                    bucketCounts: new Array(ie.length + 1).fill(0)
                });
                var r = t.hist;
                r.count += 1, r.sum += i, r.min = Math.min(r.min, i), r.max = Math.max(r.max, i), r.bucketCounts[function(t, i) {
                    for(var e = 0; i.length > e; e++)if (i[e] >= t) return e;
                    return i.length;
                }(i, ie)] += 1;
        }
    }
    Xn(t) {
        var i = this.gn.beforeSend;
        if (!i) return t;
        var e = q(i) ? i : [
            i
        ], r = t;
        for (var s of e)try {
            var n = s(r);
            if (!n) return this.A.info("Metric was rejected in beforeSend function"), null;
            r = n;
        } catch (t) {
            return this.A.error("Error in beforeSend function for metric:", t), null;
        }
        return r;
    }
    ls() {
        this.us || (this.us = Pi(()=>{
            this.us = void 0, this.flush().catch((t)=>{
                this.A.error("Metrics flush failed:", t);
            });
        }, this.gn.flushIntervalMs));
    }
    Kn() {
        this.us && (clearTimeout(this.us), this.us = void 0);
    }
    bs() {
        var t = this;
        return p(function*() {
            if (0 !== t.vs.size) {
                var i = t.vs;
                t.vs = new Map, t.cs = !1, t.fs = new Map, t.ps = new Set;
                var e = t.gs, r = yield t._instance.Ss(t._s(i));
                if (e === t.gs) switch(r.kind){
                    case "ok":
                        return;
                    case "retry-later":
                        return t.xs(i), void t.ls();
                    case "too-large":
                        return void t.A.warn("Metrics batch exceeded the server size limit and was dropped");
                    case "fatal":
                        return void t.A.error("Failed to send metrics batch:", r.error);
                }
            }
        })();
    }
    _s(t) {
        return i = this.Cs(t), e = function(t, i, e) {
            return Wi(t, i, e);
        }(this.gn, this._instance.getLibraryId(), this._instance.getLibraryVersion()), r = this._instance.getLibraryId(), s = this._instance.getLibraryVersion(), {
            resourceMetrics: [
                {
                    resource: {
                        attributes: zi(e)
                    },
                    scopeMetrics: [
                        {
                            scope: {
                                name: r,
                                version: s
                            },
                            metrics: i
                        }
                    ]
                }
            ]
        };
        //TURBOPACK unreachable
        ;
        var i, e, r, s;
    }
    Cs(t) {
        var i = ee(Date.now()), e = new Map;
        for (var r of t.values()){
            var s, n = re(r.type, r.name, r.unit, void 0), o = e.get(n);
            o || (o = _({
                name: r.name
            }, r.unit && {
                unit: r.unit
            }), "count" === r.type ? o.sum = {
                aggregationTemporality: 1,
                isMonotonic: !0,
                dataPoints: []
            } : "gauge" === r.type ? o.gauge = {
                dataPoints: []
            } : o.histogram = {
                aggregationTemporality: 1,
                dataPoints: []
            }, e.set(n, o));
            var a = zi(null !== (s = r.attributes) && void 0 !== s ? s : {}, this.A), l = ee(r.windowStartMs);
            if ("count" === r.type) {
                var h, u = {
                    attributes: a,
                    startTimeUnixNano: l,
                    timeUnixNano: i,
                    asDouble: null !== (h = r.total) && void 0 !== h ? h : 0
                };
                o.sum.dataPoints.push(u);
            } else if ("gauge" === r.type) {
                var d, v = {
                    attributes: a,
                    timeUnixNano: i,
                    asDouble: null !== (d = r.last) && void 0 !== d ? d : 0
                };
                o.gauge.dataPoints.push(v);
            } else r.hist && o.histogram.dataPoints.push({
                attributes: a,
                startTimeUnixNano: l,
                timeUnixNano: i,
                count: r.hist.count,
                sum: r.hist.sum,
                min: r.hist.min,
                max: r.hist.max,
                bucketCounts: r.hist.bucketCounts,
                explicitBounds: ie
            });
        }
        return Array.from(e.values());
    }
    xs(t) {
        var i, e;
        for (var r of t){
            var s = r[0], n = r[1], o = this.vs.get(s);
            if (o) switch(o.windowStartMs = Math.min(o.windowStartMs, n.windowStartMs), o.type){
                case "count":
                    o.total = (null !== (i = o.total) && void 0 !== i ? i : 0) + (null !== (e = n.total) && void 0 !== e ? e : 0);
                    break;
                case "gauge":
                    break;
                case "histogram":
                    if (n.hist) if (o.hist) {
                        o.hist.count += n.hist.count, o.hist.sum += n.hist.sum, o.hist.min = Math.min(o.hist.min, n.hist.min), o.hist.max = Math.max(o.hist.max, n.hist.max);
                        for(var a = 0; o.hist.bucketCounts.length > a; a++)o.hist.bucketCounts[a] += n.hist.bucketCounts[a];
                    } else o.hist = n.hist;
            }
            else this.ws() && this.vs.set(s, n);
        }
    }
    constructor(t, i, e){
        this._instance = t, this.gn = i, this.A = e, this.vs = new Map, this.Nn = null, this.cs = !1, this.fs = new Map, this.ps = new Set, this.gs = 0;
    }
};
var ne, oe, ae;
function le(t) {
    var i = globalThis._posthogChunkIds;
    if (i) {
        var e = Object.keys(i);
        return ae && e.length === oe || (oe = e.length, ae = e.reduce((e, r)=>{
            ne || (ne = {});
            var s = ne[r];
            if (s) e[s[0]] = s[1];
            else for(var n = t(r), o = n.length - 1; o >= 0; o--){
                var a = n[o], l = null == a ? void 0 : a.filename, h = i[r];
                if (l && h) {
                    e[l] = h, ne[r] = [
                        l,
                        h
                    ];
                    break;
                }
            }
            return e;
        }, {})), ae;
    }
}
class he {
    buildFromUnknown(t, i) {
        void 0 === i && (i = {});
        var e = i && i.mechanism || {
            handled: !0,
            type: "generic"
        }, r = this.buildCoercingContext(e, i, 0).apply(t), s = this.buildParsingContext(i), n = this.parseStacktrace(r, s);
        return {
            $exception_list: this.convertToExceptionList(n, e),
            $exception_level: "error"
        };
    }
    modifyFrames(t) {
        var i = this;
        return p(function*() {
            for (var e of t)e.stacktrace && e.stacktrace.frames && q(e.stacktrace.frames) && (e.stacktrace.frames = yield i.applyModifiers(e.stacktrace.frames));
            return t;
        })();
    }
    coerceFallback(t) {
        var i;
        return {
            type: "Error",
            value: "Unknown error",
            stack: null == (i = t.syntheticException) ? void 0 : i.stack,
            synthetic: !0
        };
    }
    parseStacktrace(t, i) {
        var e, r;
        return null != t.cause && (e = this.parseStacktrace(t.cause, i)), "" != t.stack && null != t.stack && (r = this.applyChunkIds(this.stackParser(t.stack, t.synthetic ? i.skipFirstLines : 0), i.chunkIdMap)), _({}, t, {
            cause: e,
            stack: r
        });
    }
    applyChunkIds(t, i) {
        return t.map((t)=>(t.filename && i && (t.chunk_id = i[t.filename]), t));
    }
    applyCoercers(t, i) {
        for (var e of this.coercers)if (e.match(t)) return e.coerce(t, i);
        return this.coerceFallback(i);
    }
    applyModifiers(t) {
        var i = this;
        return p(function*() {
            var e = t;
            for (var r of i.modifiers)e = yield r(e);
            return e;
        })();
    }
    convertToExceptionList(t, i) {
        var e, r, s, n = {
            type: t.type,
            value: t.value,
            mechanism: {
                type: null !== (e = i.type) && void 0 !== e ? e : "generic",
                handled: null === (r = i.handled) || void 0 === r || r,
                synthetic: null !== (s = t.synthetic) && void 0 !== s && s
            }
        };
        t.stack && (n.stacktrace = {
            type: "raw",
            frames: t.stack
        });
        var o = [
            n
        ];
        return null != t.cause && o.push(...this.convertToExceptionList(t.cause, _({}, i, {
            handled: !0
        }))), o;
    }
    buildParsingContext(t) {
        var i;
        return {
            chunkIdMap: le(this.stackParser),
            skipFirstLines: null !== (i = t.skipFirstLines) && void 0 !== i ? i : 1
        };
    }
    buildCoercingContext(t, i, e) {
        void 0 === e && (e = 0);
        var r = (e, r)=>{
            if (4 >= r) {
                var s = this.buildCoercingContext(t, i, r);
                return this.applyCoercers(e, s);
            }
        };
        return _({}, i, {
            syntheticException: 0 == e ? i.syntheticException : void 0,
            mechanism: t,
            apply: (t)=>r(t, e),
            next: (t)=>r(t, e + 1)
        });
    }
    constructor(t, i, e){
        void 0 === e && (e = []), this.coercers = t, this.stackParser = i, this.modifiers = e;
    }
}
var ue = "?";
function de(t, i, e, r, s) {
    var n = {
        platform: t,
        filename: i,
        function: "<anonymous>" === e ? ue : e,
        in_app: !(null != i && i.startsWith("webkit-masked-url://")) && "<anonymous>" !== i
    };
    return K(r) || (n.lineno = r), K(s) || (n.colno = s), n;
}
var ve = (t, i)=>{
    var e = -1 !== t.indexOf("safari-extension"), r = -1 !== t.indexOf("safari-web-extension");
    return e || r ? [
        -1 !== t.indexOf("@") ? t.split("@")[0] : ue,
        e ? "safari-extension:" + i : "safari-web-extension:" + i
    ] : [
        t,
        i
    ];
}, ce = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, fe = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, pe = /\((\S*)(?::(\d+))(?::(\d+))\)/, _e = (t, i)=>{
    var e = ce.exec(t);
    if (e) return de(i, e[1], ue, +e[2], +e[3]);
    var r = fe.exec(t);
    if (r) {
        if (r[2] && 0 === r[2].indexOf("eval")) {
            var s = pe.exec(r[2]);
            s && (r[2] = s[1], r[3] = s[2], r[4] = s[3]);
        }
        var n = ve(r[1] || ue, r[2]);
        return de(i, n[1], n[0], r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
    }
}, ge = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, me = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, ye = (t, i)=>{
    var e = ge.exec(t);
    if (e) {
        if (e[3] && e[3].indexOf(" > eval") > -1) {
            var r = me.exec(e[3]);
            r && (e[1] = e[1] || "eval", e[3] = r[1], e[4] = r[2], e[5] = "");
        }
        var s = e[3], n = e[1] || ue, o = ve(n, s);
        return de(i, s = o[1], n = o[0], e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
    }
}, be = /\(error: (.*)\)/;
class we {
    match(t) {
        return this.isDOMException(t) || this.isDOMError(t);
    }
    coerce(t, i) {
        var e = J(t.stack);
        return {
            type: this.getType(t),
            value: this.getValue(t),
            stack: e ? t.stack : void 0,
            cause: t.cause ? i.next(t.cause) : void 0,
            synthetic: !1
        };
    }
    getType(t) {
        return this.isDOMError(t) ? "DOMError" : "DOMException";
    }
    getValue(t) {
        var i = t.name || (this.isDOMError(t) ? "DOMError" : "DOMException");
        return t.message ? i + ": " + t.message : i;
    }
    isDOMException(t) {
        return ot(t, "DOMException");
    }
    isDOMError(t) {
        return ot(t, "DOMError");
    }
}
class Se {
    match(t) {
        return at(t);
    }
    coerce(t, i) {
        var e, r = this.getStack(t), s = void 0 === r;
        return {
            type: this.getType(t),
            value: this.getMessage(t, i),
            stack: null != r ? r : null == (e = i.syntheticException) ? void 0 : e.stack,
            cause: t.cause ? i.next(t.cause) : void 0,
            synthetic: s
        };
    }
    getType(t) {
        return t.name || t.constructor.name;
    }
    getMessage(t, i) {
        var e = t.message;
        return String(e.error && "string" == typeof e.error.message ? e.error.message : e);
    }
    getStack(t) {
        return t.stacktrace || t.stack || void 0;
    }
}
class xe {
    match(t) {
        return !!ot(t, "ErrorEvent") && (null != t.error || this.Wi(t));
    }
    coerce(t, i) {
        var e;
        if (null != t.error) return i.apply(t.error);
        var r = i.apply(t.message);
        return _({}, r, {
            stack: null !== (e = this.Vi(t)) && void 0 !== e ? e : r.stack,
            synthetic: !0
        });
    }
    Wi(t) {
        return J(t.message) && t.message.length > 0;
    }
    Vi(t) {
        var i, e, r = t, s = null !== (i = r.lineno) && void 0 !== i ? i : 0, n = null !== (e = r.colno) && void 0 !== e ? e : 0;
        if (J(r.filename) && 0 !== r.filename.length && 0 !== s) return "Error\n    at " + r.filename + ":" + s + ":" + n;
    }
    constructor(){}
}
var Ee = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
class ke {
    match(t) {
        return "string" == typeof t;
    }
    coerce(t, i) {
        var e, r = this.getInfos(t), s = r[0], n = r[1];
        return {
            type: null != s ? s : "Error",
            value: null != n ? n : t,
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
    getInfos(t) {
        var i = "Error", e = t, r = t.match(Ee);
        return r && (i = r[1], e = r[2]), [
            i,
            e
        ];
    }
}
var Te = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
function $e(t, i) {
    void 0 === i && (i = 40);
    var e = Object.keys(t);
    if (e.sort(), !e.length) return "[object has no keys]";
    for(var r = e.length; r > 0; r--){
        var s = e.slice(0, r).join(", ");
        if (i >= s.length) return r === e.length ? s : s.length > i ? s.slice(0, i) + "..." : s;
    }
    return "";
}
class Pe {
    match(t) {
        return "object" == typeof t && null !== t;
    }
    coerce(t, i) {
        var e, r, s = this.getErrorPropertyFromObject(t);
        return s ? i.apply(s) : {
            type: this.getType(t),
            value: this.getValue(t),
            stack: null !== (e = this.getStack(t)) && void 0 !== e ? e : null == (r = i.syntheticException) ? void 0 : r.stack,
            level: this.isSeverityLevel(t.level) ? t.level : "error",
            synthetic: !0
        };
    }
    getType(t) {
        if (lt(t)) return t.constructor.name;
        var i = "name" in t ? t.name : void 0;
        return J(i) && !Y(i) ? i : "Error";
    }
    getValue(t) {
        if ("name" in t && "string" == typeof t.name) {
            var i = "'" + t.name + "' captured as exception";
            return "message" in t && "string" == typeof t.message && (i += " with message: '" + t.message + "'"), i;
        }
        if ("message" in t && "string" == typeof t.message) return t.message;
        var e = this.getObjectClassName(t);
        return (e && "Object" !== e ? "'" + e + "'" : "Object") + " captured as exception with keys: " + $e(t);
    }
    isSeverityLevel(t) {
        return J(t) && !Y(t) && Te.indexOf(t) >= 0;
    }
    getStack(t) {
        try {
            return J(t.stacktrace) && t.stacktrace.length > 0 ? t.stacktrace : J(t.stack) && t.stack.length > 0 ? t.stack : void 0;
        } catch (t) {
            return;
        }
    }
    getErrorPropertyFromObject(t) {
        for(var i in t)if (({}).hasOwnProperty.call(t, i)) {
            var e = t[i];
            if (at(e)) return e;
        }
    }
    getObjectClassName(t) {
        try {
            var i = Object.getPrototypeOf(t);
            return i ? i.constructor.name : void 0;
        } catch (t) {
            return;
        }
    }
}
class Re {
    match(t) {
        return lt(t);
    }
    coerce(t, i) {
        var e, r = t.constructor.name;
        return {
            type: r,
            value: r + " captured as exception with keys: " + $e(t),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
}
class Ce {
    match(t) {
        return nt(t);
    }
    coerce(t, i) {
        var e;
        return {
            type: "Error",
            value: "Primitive value captured as exception: " + String(t),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
}
class Oe {
    match(t) {
        return ot(t, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(t);
    }
    isCustomEventWrappingRejection(t) {
        if (!lt(t)) return !1;
        try {
            var i = t.detail;
            return null != i && "object" == typeof i && "reason" in i;
        } catch (t) {
            return !1;
        }
    }
    coerce(t, i) {
        var e, r = this.getUnhandledRejectionReason(t);
        return nt(r) ? {
            type: "UnhandledRejection",
            value: "Non-Error promise rejection captured with value: " + String(r),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        } : i.apply(r);
    }
    getUnhandledRejectionReason(t) {
        try {
            if ("reason" in t) return t.reason;
            if ("detail" in t && null != t.detail && "object" == typeof t.detail && "reason" in t.detail) return t.detail.reason;
        } catch (t) {}
        return t;
    }
}
var Ie = "$message", Fe = "$timestamp", Ae = new Set([
    Ie,
    Fe
]), Me = {
    enabled: !0,
    max_bytes: 32768
};
function De(t) {
    var i;
    return t ? {
        enabled: null !== (i = t.enabled) && void 0 !== i ? i : Me.enabled,
        max_bytes: Le(t.max_bytes, Me.max_bytes)
    } : _({}, Me);
}
class Ne {
    setConfig(t) {
        this.gn = De(t), this.Es();
    }
    add(t) {
        var i = function(t) {
            var i;
            try {
                i = U(t);
            } catch (t) {
                return;
            }
            try {
                var e = JSON.parse(i);
                if (!W(e)) return;
                var r = e, s = r[Ie], n = r[Fe];
                if (!J(s) || 0 === s.trim().length) return;
                if (!J(n) && !Z(n)) return;
                return {
                    step: r,
                    json: i
                };
            } catch (t) {
                return;
            }
        }(t);
        if (i) {
            var e = function(t) {
                if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(t).length;
                for(var i = encodeURIComponent(t), e = 0, r = 0; i.length > r; r++)"%" === i[r] ? (e += 1, r += 2) : e += 1;
                return e;
            }(i.json);
            e > this.gn.max_bytes || (this.Ts.push({
                step: i.step,
                bytes: e
            }), this.Ms += e, this.Es());
        }
    }
    getAttachable() {
        return this.Ts.map((t)=>t.step);
    }
    clear() {
        this.Ts = [], this.Ms = 0;
    }
    size() {
        return this.Ts.length;
    }
    Es() {
        for(; this.Ms > this.gn.max_bytes && this.Ts.length > 0;){
            var t = this.Ts.shift();
            t && (this.Ms -= t.bytes);
        }
    }
    constructor(t){
        this.Ts = [], this.Ms = 0, this.gn = De(t);
    }
}
function Le(t, i) {
    if (!Z(t) || t === 1 / 0 || t === -1 / 0) return i;
    var e = Math.floor(t);
    return 0 > e ? i : e;
}
var je = function(i, e) {
    var r = (void 0 === e ? {} : e).debugEnabled, s = {
        q (e) {
            if (t && (c.DEBUG || t.POSTHOG_DEBUG || r) && !K(t.console) && t.console) {
                for(var s = ("__rrweb_original__" in t.console[e]) ? t.console[e].__rrweb_original__ : t.console[e], n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; n > a; a++)o[a - 1] = arguments[a];
                s(i, ...o);
            }
        },
        debug () {
            for(var t = arguments.length, i = new Array(t), e = 0; t > e; e++)i[e] = arguments[e];
            s.q("debug", ...i);
        },
        info () {
            for(var t = arguments.length, i = new Array(t), e = 0; t > e; e++)i[e] = arguments[e];
            s.q("log", ...i);
        },
        warn () {
            for(var t = arguments.length, i = new Array(t), e = 0; t > e; e++)i[e] = arguments[e];
            s.q("warn", ...i);
        },
        error () {
            for(var t = arguments.length, i = new Array(t), e = 0; t > e; e++)i[e] = arguments[e];
            s.q("error", ...i);
        },
        critical () {
            for(var t = arguments.length, e = new Array(t), r = 0; t > r; r++)e[r] = arguments[r];
            console.error(i, ...e);
        },
        uninitializedWarning (t) {
            s.error("You must initialize PostHog before calling " + t);
        },
        createLogger: (t, e)=>je(i + " " + t, e)
    };
    return s;
}, Ue = je("[PostHog.js]"), Be = Ue.createLogger, ze = Be("[ExternalScriptsLoader]"), He = (t)=>{
    var i = null == r ? void 0 : r.querySelectorAll("script");
    if (i) {
        for(var e = 0; i.length > e; e++)if (i[e].src === t || i[e].getAttribute("src") === t) return i[e];
    }
}, qe = (t, i, e)=>{
    if (t.config.disable_external_dependency_loading) return ze.warn(i + " was requested but loading of external scripts is disabled."), e("Loading of external scripts is disabled");
    var s = He(i);
    if (s) {
        if (s.__posthog_loading_callback_fired) return e();
        var n = s.__posthog_loading_error;
        return n ? e(n) : (s.addEventListener("load", (t)=>{
            s.__posthog_loading_callback_fired = !0, e(void 0, t);
        }), void s.addEventListener("error", (t)=>{
            s.__posthog_loading_error = t, e(t);
        }));
    }
    var o = ()=>{
        if (!r) return e("document not found");
        if (He(i)) return qe(t, i, e);
        var s = r.createElement("script");
        if (s.type = "text/javascript", s.crossOrigin = "anonymous", s.src = i, s.onload = (t)=>{
            s.__posthog_loading_callback_fired = !0, e(void 0, t);
        }, s.onerror = (t)=>{
            s.__posthog_loading_error = t, e(t);
        }, t.config.prepare_external_dependency_script && (s = t.config.prepare_external_dependency_script(s)), !s) return e("prepare_external_dependency_script returned null");
        if ("head" === t.config.external_scripts_inject_target) r.head.appendChild(s);
        else {
            var n, o = r.querySelectorAll("body > script");
            o.length > 0 ? null == (n = o[0].parentNode) || n.insertBefore(s, o[0]) : r.body.appendChild(s);
        }
    };
    null != r && r.body ? o() : null == r || r.addEventListener("DOMContentLoaded", o);
}, Ve = {}, We = (t, i)=>{
    var e = "/static/" + i + ".js?v=" + t.version;
    if ("toolbar" === i) {
        var r = 3e5;
        e = e + "&t=" + Math.floor(Date.now() / r) * r;
    }
    return t.requestRouter.endpointFor("assets", e);
};
v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (t, i, e)=>{
    if ("remote-config" !== i) {
        var r = t.config.strict_script_versioning;
        if (r) {
            var s = t.requestRouter.endpointFor("assets", "/static/" + t.version + "/" + i + ".js"), n = Ve[s];
            if ("fallback" === r && n) {
                if (He(n)) return void qe(t, n, e);
                delete Ve[s];
            }
            qe(t, s, "fallback" === r ? (r, n)=>{
                if (r) if ("string" == typeof r) e(r);
                else {
                    var o, a = We(t, i);
                    Ve[s] = a;
                    var l = He(s);
                    null == l || null == (o = l.parentNode) || o.removeChild(l), qe(t, a, e);
                }
                else e(void 0, n);
            } : e);
        } else qe(t, We(t, i), e);
    } else {
        var o = t.requestRouter.endpointFor("assets", "/array/" + t.config.token + "/config.js");
        qe(t, o, e);
    }
}, v.__PosthogExtensions__.loadSiteApp = (t, i, e)=>{
    var r = t.requestRouter.endpointFor("api", i);
    qe(t, r, e);
};
c.DEBUG = !1, c.LIB_VERSION = "1.425.0", c.LIB_NAME = "web";
var Ge = "$people_distinct_id", Ke = "distinct_id", Je = "$device_id", Ye = "$device_model", Qe = "__alias", Xe = "__timers", Ze = "$autocapture_disabled_server_side", tr = "$heatmaps_enabled_server_side", ir = "$exception_capture_enabled_server_side", er = "$error_tracking_suppression_rules", rr = "$error_tracking_capture_extension_exceptions", sr = "$web_vitals_enabled_server_side", nr = "$dead_clicks_enabled_server_side", or = "$product_tours_enabled_server_side", ar = "$logs_capture_enabled_server_side", lr = "$web_vitals_allowed_metrics", hr = "$session_recording_remote_config", ur = "$replay_sample_rate", dr = "$replay_override_sampling", vr = "$replay_override_linked_flag", cr = "$replay_override_url_trigger", fr = "$replay_override_event_trigger", pr = "$sesid", _r = "$session_is_sampled", gr = "$enabled_feature_flags", mr = "$active_feature_flags", yr = "$early_access_features", br = "$feature_flag_details", wr = "$feature_flag_payloads", Sr = "$feature_flag_request_id", xr = "$minimal_flag_called_events", Er = "$override_feature_flags", kr = "$override_feature_flag_payloads", Tr = "$stored_person_properties", $r = "$stored_group_properties", Pr = "$groups", Rr = "$surveys", Cr = "$surveys_loaded_at", Or = "$surveys_activated", Ir = "$surveys_activated_session", Fr = "$surveys_activated_timestamps", Ar = "ph_product_tours", Mr = "$flag_call_reported", Dr = "$flag_call_reported_session_id", Nr = "$feature_flag_errors", Lr = "$feature_flag_evaluated_at", jr = "$user_state", Ur = "$client_session_props", Br = "$capture_rate_limit", zr = "$initial_campaign_params", Hr = "$initial_referrer_info", qr = "$initial_person_info", Vr = "$epp", Wr = "$posthog_cookieless", Gr = "$cookieless_mode", Kr = "$sdk_debug_extensions_init_method", Jr = "$sdk_debug_extensions_init_time_ms", Yr = "$sdk_debug_recording_script_not_loaded", Qr = "PostHog loadExternalDependency extension not found.", Xr = "on_reject", Zr = "always", ts = "anonymous", is = "identified", es = "identified_only", rs = "visibilitychange", ss = "beforeunload", ns = "$pageview", os = "$pageleave", as = "$identify", ls = "$groupidentify";
function hs(t, i) {
    q(t) && t.forEach(i);
}
function us(t, i) {
    if (!X(t)) if (q(t)) t.forEach(i);
    else if (et(t)) t.forEach((t, e)=>i(t, e));
    else for(var e in t)z.call(t, e) && i(t[e], e);
}
var ds = function(t) {
    for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)e[r - 1] = arguments[r];
    for (var s of e)for(var n in s)void 0 !== s[n] && (t[n] = s[n]);
    return t;
};
function vs(t) {
    for(var i = Object.keys(t), e = i.length, r = new Array(e); e--;)r[e] = [
        i[e],
        t[i[e]]
    ];
    return r;
}
var cs = function(t) {
    try {
        return t();
    } catch (t) {
        return;
    }
}, fs = function(t) {
    return function() {
        try {
            for(var i = arguments.length, e = new Array(i), r = 0; i > r; r++)e[r] = arguments[r];
            return t.apply(this, e);
        } catch (t) {
            Ue.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Ue.critical(t);
        }
    };
}, ps = function(t) {
    var i = {};
    return us(t, function(t, e) {
        (J(t) && t.length > 0 || Z(t)) && (i[e] = t);
    }), i;
};
var _s = [
    "herokuapp.com",
    "vercel.app",
    "netlify.app"
];
function gs(t) {
    var i = null == t ? void 0 : t.hostname;
    if (!J(i)) return !1;
    var e = i.split(".").slice(-2).join(".");
    for (var r of _s)if (e === r) return !1;
    return !0;
}
function ms(t, i, e, r) {
    var s = null != r ? r : {}, n = s.capture, o = s.passive;
    null == t || t.addEventListener(i, e, {
        capture: void 0 !== n && n,
        passive: void 0 === o || o
    });
}
function ys(t) {
    return "ph_toolbar_internal" === t.name;
}
var bs = (t)=>{
    if (r) {
        try {
            for(var i = t + "=", e = r.cookie.split(";").filter((t)=>t.length), s = 0; e.length > s; s++){
                for(var n = e[s]; " " == n.charAt(0);)n = n.substring(1, n.length);
                if (0 === n.indexOf(i)) return decodeURIComponent(n.substring(i.length, n.length));
            }
        } catch (t) {}
        return null;
    }
};
Math.trunc || (Math.trunc = function(t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t);
}), Number.isInteger || (Number.isInteger = function(t) {
    return Z(t) && isFinite(t) && Math.floor(t) === t;
});
class ws {
    static fromFieldsV7(t, i, e, r) {
        if (!Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(e) || !Number.isInteger(r) || 0 > t || 0 > i || 0 > e || 0 > r || t > 0xffffffffffff || i > 4095 || e > 1073741823 || r > 4294967295) throw new RangeError("invalid field value");
        var s = new Uint8Array(16);
        return s[0] = t / Math.pow(2, 40), s[1] = t / Math.pow(2, 32), s[2] = t / Math.pow(2, 24), s[3] = t / Math.pow(2, 16), s[4] = t / 256, s[5] = t, s[6] = 112 | i >>> 8, s[7] = i, s[8] = 128 | e >>> 24, s[9] = e >>> 16, s[10] = e >>> 8, s[11] = e, s[12] = r >>> 24, s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new ws(s);
    }
    toString() {
        for(var t = "", i = 0; this.bytes.length > i; i++)t = t + (this.bytes[i] >>> 4).toString(16) + (15 & this.bytes[i]).toString(16), 3 !== i && 5 !== i && 7 !== i && 9 !== i || (t += "-");
        if (36 !== t.length) throw new Error("Invalid UUIDv7 was generated");
        return t;
    }
    clone() {
        return new ws(this.bytes.slice(0));
    }
    equals(t) {
        return 0 === this.compareTo(t);
    }
    compareTo(t) {
        for(var i = 0; 16 > i; i++){
            var e = this.bytes[i] - t.bytes[i];
            if (0 !== e) return Math.sign(e);
        }
        return 0;
    }
    constructor(t){
        if (this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
    }
}
class Ss {
    generate() {
        var t = this.generateOrAbort();
        if (!K(t)) return t;
        this.Yr = 0;
        var i = this.generateOrAbort();
        if (K(i)) throw new Error("Could not generate UUID after timestamp reset");
        return i;
    }
    generateOrAbort() {
        var t = Date.now();
        if (t > this.Yr) this.Yr = t, this.Kr();
        else {
            if (this.Yr >= t + 1e4) return;
            this.Xr++, this.Xr > 4398046511103 && (this.Yr++, this.Kr());
        }
        return ws.fromFieldsV7(this.Yr, Math.trunc(this.Xr / Math.pow(2, 30)), this.Xr & Math.pow(2, 30) - 1, this.ei.nextUint32());
    }
    Kr() {
        this.Xr = 1024 * this.ei.nextUint32() + (1023 & this.ei.nextUint32());
    }
    constructor(){
        this.Yr = 0, this.Xr = 0, this.ei = new ks;
    }
}
var xs, Es = (t)=>{
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for(var i = 0; t.length > i; i++)t[i] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return t;
};
t && !K(t.crypto) && crypto.getRandomValues && (Es = (t)=>crypto.getRandomValues(t));
class ks {
    nextUint32() {
        return this.Dt.length > this.ti || (Es(this.Dt), this.ti = 0), this.Dt[this.ti++];
    }
    constructor(){
        this.Dt = new Uint32Array(8), this.ti = 1 / 0;
    }
}
var Ts = ()=>$s().toString(), $s = ()=>(xs || (xs = new Ss)).generate(), Ps = "", Rs = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
var Cs = null, Os = {
    ri () {
        if (!Q(Cs)) return Cs;
        if (Cs = !1, r) try {
            var t = "__ph_cookie_support_" + Ts();
            Os.ii(t, "xyz"), Cs = '"xyz"' === bs(t), Os.ai(t);
        } catch (t) {
            Cs = !1;
        }
        return Cs;
    },
    oi (t) {
        Ue.error("cookieStore error: " + t);
    },
    ni: bs,
    si (t) {
        var i;
        try {
            i = JSON.parse(Os.ni(t)) || {};
        } catch (t) {}
        return i;
    },
    ii (t, i, e, s, n) {
        if (!r) return !1;
        try {
            var o = "", a = "", l = function(t, i) {
                if (i) {
                    var e = function(t, i) {
                        if (void 0 === i && (i = r), Ps) return Ps;
                        if (!i) return "";
                        if ([
                            "localhost",
                            "127.0.0.1"
                        ].includes(t)) return "";
                        for(var e = t.split("."), s = Math.min(e.length, 8), n = "dmn_chk_" + Ts(); !Ps && s--;){
                            var o = e.slice(s).join("."), a = n + "=1;domain=." + o + ";path=/";
                            i.cookie = a + ";max-age=3", i.cookie.includes(n) && (i.cookie = a + ";max-age=0", Ps = o);
                        }
                        return Ps;
                    }(t);
                    if (!e) {
                        var s = ((t)=>{
                            var i = t.match(Rs);
                            return i ? i[0] : "";
                        })(t);
                        s !== e && Ue.info("Warning: cookie subdomain discovery mismatch", s, e), e = s;
                    }
                    return e ? "; domain=." + e : "";
                }
                return "";
            }(r.location.hostname, s);
            if (e) {
                var h = new Date;
                h.setTime(h.getTime() + 864e5 * e), o = "; expires=" + h.toUTCString();
            }
            n && (a = "; secure");
            var u = t + "=" + encodeURIComponent(JSON.stringify(i)) + o + "; SameSite=Lax; path=/" + l + a;
            return u.length > 3686.4 && Ue.warn("cookieStore warning: large cookie, len=" + u.length), r.cookie = u, !0;
        } catch (t) {
            return !1;
        }
    },
    ai (t, i) {
        if (null != r && r.cookie) try {
            Os.ii(t, "", -1, i);
        } catch (t) {
            return;
        }
    }
}, Is = null, Fs = {
    ri () {
        if (!Q(Is)) return Is;
        var i = !0;
        if (K(t)) i = !1;
        else try {
            var e = "__mplssupport__";
            Fs.ii(e, "xyz"), '"xyz"' !== Fs.ni(e) && (i = !1), Fs.ai(e);
        } catch (t) {
            i = !1;
        }
        return i || Ue.error("localStorage unsupported; falling back to cookie store"), Is = i, i;
    },
    oi (t) {
        Ue.error("localStorage error: " + t);
    },
    ni (i) {
        try {
            return null == t ? void 0 : t.localStorage.getItem(i);
        } catch (t) {
            Fs.oi(t);
        }
        return null;
    },
    si (t) {
        try {
            return JSON.parse(Fs.ni(t)) || {};
        } catch (t) {}
        return null;
    },
    ii (i, e) {
        try {
            return null == t || t.localStorage.setItem(i, JSON.stringify(e)), !0;
        } catch (t) {
            Fs.oi(t);
        }
        return !1;
    },
    ai (i) {
        try {
            null == t || t.localStorage.removeItem(i);
        } catch (t) {
            Fs.oi(t);
        }
    }
}, As = [
    Tr,
    mr,
    gr,
    br,
    wr,
    Sr,
    Lr,
    Nr,
    Mr
], Ms = [
    Je,
    Ke,
    pr,
    _r,
    Vr,
    qr,
    jr
], Ds = (t)=>t + "_cpm", Ns = [
    "__proto__",
    "constructor",
    "prototype"
], Ls = (t)=>{
    if (!W(t)) return {};
    var i = {};
    return Object.keys(t).forEach((e)=>{
        -1 === Ns.indexOf(e) && (i[e] = t[e]);
    }), i;
}, js = function(t, i) {
    void 0 === i && (i = []);
    var e = {};
    return [
        ...Ms,
        ...i
    ].forEach((i)=>{
        var r = t[i];
        K(r) || Q(r) || "" === r || (e[i] = r);
    }), e;
}, Us = (t)=>{
    for(var i = 5381, e = 2166136261, r = 0; t.length > r; r++){
        var s = t.charCodeAt(r);
        i = 33 * i ^ s, e = Math.imul(e ^ s, 16777619);
    }
    return t.length.toString(36) + "." + (i >>> 0).toString(36) + "." + (e >>> 0).toString(36);
}, Bs = (t, i)=>({
        p: i,
        f: Us(JSON.stringify(t))
    }), zs = (t, i)=>{
    if (!i) return {
        properties: [],
        isValid: !1
    };
    try {
        var e = Os.si(Ds(t)), r = (null == e ? void 0 : e.f) === Us(i) && q(e.p);
        return {
            properties: r ? e.p : [],
            isValid: r
        };
    } catch (t) {
        return {
            properties: [],
            isValid: !1
        };
    }
}, Hs = (t, i)=>i + "|" + (Os.ni(Ds(t)) || ""), qs = {}, Vs = {
    ri: ()=>!0,
    oi (t) {
        Ue.error("memoryStorage error: " + t);
    },
    ni: (t)=>t in qs ? qs[t] : null,
    si: (t)=>t in qs ? qs[t] : null,
    ii: (t, i)=>(qs[t] = i, !0),
    ai (t) {
        delete qs[t];
    }
}, Ws = null, Gs = {
    ri () {
        if (!Q(Ws)) return Ws;
        if (Ws = !0, K(t)) Ws = !1;
        else try {
            var i = "__support__";
            Gs.ii(i, "xyz"), '"xyz"' !== Gs.ni(i) && (Ws = !1), Gs.ai(i);
        } catch (t) {
            Ws = !1;
        }
        return Ws;
    },
    oi (t) {
        Ue.error("sessionStorage error: ", t);
    },
    ni (i) {
        try {
            return null == t ? void 0 : t.sessionStorage.getItem(i);
        } catch (t) {
            Gs.oi(t);
        }
        return null;
    },
    si (t) {
        try {
            return JSON.parse(Gs.ni(t)) || null;
        } catch (t) {}
        return null;
    },
    ii (i, e) {
        try {
            return null == t || t.sessionStorage.setItem(i, JSON.stringify(e)), !0;
        } catch (t) {
            Gs.oi(t);
        }
        return !1;
    },
    ai (i) {
        try {
            null == t || t.sessionStorage.removeItem(i);
        } catch (t) {
            Gs.oi(t);
        }
    }
};
class Ks {
    get gn() {
        return this._instance.config;
    }
    get consent() {
        return this.Ws() ? 0 : this.Vs;
    }
    isOptedOut() {
        return this.gn.cookieless_mode === Zr || this.isRejected() || -1 === this.consent && this.gn.cookieless_mode === Xr;
    }
    isOptedIn() {
        return !this.isOptedOut();
    }
    isExplicitlyOptedOut() {
        return 0 === this.consent;
    }
    isRejected() {
        return 0 === this.consent || -1 === this.consent && this.gn.opt_out_capturing_by_default;
    }
    optInOut(t) {
        this.Gs.ii(this.Zs, t ? 1 : 0, this.gn.cookie_expiration, this.gn.cross_subdomain_cookie, this.gn.secure_cookie);
    }
    reset() {
        this.Gs.ai(this.Zs, this.gn.cross_subdomain_cookie);
    }
    get Zs() {
        var t = this._instance.config, i = t.token, e = t.opt_out_capturing_cookie_prefix;
        return t.consent_persistence_name || (e ? e + i : "__ph_opt_in_out_" + i);
    }
    get Vs() {
        var t = this.Gs.ni(this.Zs);
        return dt(t) ? 1 : N(vt, t) ? 0 : -1;
    }
    get Gs() {
        var t = this.gn.opt_out_capturing_persistence_type, i = "localStorage" === t ? Fs : Os, e = i.ri() ? i : Vs;
        if (!this.Qs || this.Qs !== e) {
            this.Qs = e;
            var r = "localStorage" === t ? Os : Fs;
            r.ni(this.Zs) && (this.Qs.ni(this.Zs) || this.optInOut(dt(r.ni(this.Zs))), r.ai(this.Zs, this.gn.cross_subdomain_cookie));
        }
        return this.Qs;
    }
    Ws() {
        return !!this.gn.respect_dnt && [
            null == e ? void 0 : e.doNotTrack,
            null == e ? void 0 : e.msDoNotTrack,
            v.doNotTrack,
            null == e ? void 0 : e.globalPrivacyControl
        ].some((t)=>dt(t));
    }
    constructor(t){
        this._instance = t;
    }
}
function Js(t, i) {
    var e, r = null == t || null == (e = t.config) ? void 0 : e.get_current_url;
    if (!V(r)) return i;
    try {
        var s = r(i);
        return J(s) && s ? s : i;
    } catch (t) {
        return Ue.error("Error in get_current_url, falling back to window.location.href", t), i;
    }
}
var Ys = "__POSTHOG_TOOLBAR__", Qs = 1, Xs = 3, Zs = 11;
function tn(t) {
    return t instanceof Element && (t.id === Ys || !(null == t.closest || !t.closest(".toolbar-global-fade-container")));
}
function en(t) {
    return !!t && t.nodeType === Qs;
}
function rn(t, i) {
    return !!t && !!t.tagName && t.tagName.toLowerCase() === i.toLowerCase();
}
function sn(t) {
    return !!t && t.nodeType === Xs;
}
function nn(t) {
    return !!t && t.nodeType === Zs && en(t.host);
}
var on = 1e3;
function an(t) {
    return t ? L(t).split(/\s+/) : [];
}
function ln(i, e) {
    var r = function(i) {
        var e, r = null == t || null == (e = t.location) ? void 0 : e.href;
        return K(r) ? void 0 : Js(i, r);
    }(e);
    return !!(r && i && i.some((t)=>r.match(t)));
}
function hn(t) {
    var i = "";
    switch(typeof t.className){
        case "string":
            i = t.className;
            break;
        case "object":
            i = (t.className && "baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
            break;
        default:
            i = "";
    }
    return an(i);
}
function un(t) {
    return X(t) ? null : L(t).split(/(\s+)/).filter((t)=>An(t)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function dn(t) {
    var i = "";
    return kn(t) && !Tn(t) && t.childNodes && t.childNodes.length && us(t.childNodes, function(t) {
        var e;
        sn(t) && t.textContent && (i += null !== (e = un(t.textContent)) && void 0 !== e ? e : "");
    }), L(i);
}
function vn(t) {
    var i;
    return K(t.target) ? t.srcElement || null : null != (i = t.target) && i.shadowRoot ? t.composedPath()[0] || null : t.target || null;
}
var cn = [
    "a",
    "button",
    "form",
    "input",
    "select",
    "textarea",
    "label"
];
function fn(t, i) {
    if (K(i)) return !0;
    var e, r = function(t) {
        if (i.some((i)=>(function(t, i) {
                var e = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector;
                try {
                    return !!e && e.call(t, i);
                } catch (t) {
                    return !1;
                }
            })(t, i))) return {
            v: !0
        };
    };
    for (var s of t)if (e = r(s)) return e.v;
    return !1;
}
function pn(t) {
    var i = t.parentNode;
    return !(!i || !en(i)) && i;
}
var _n = [
    ".ph-no-autocapture",
    "[data-ph-no-autocapture]"
], gn = [
    "next",
    "previous",
    "prev",
    ">",
    "<"
], mn = [
    ...gn,
    "+",
    "-",
    "−",
    "–"
], yn = (t, i)=>/[a-z0-9]/i.test(i) ? t.includes(i) : t === i, bn = [
    ".ph-no-rageclick",
    ".ph-no-capture"
], wn = [
    "",
    "text",
    "search",
    "email",
    "password",
    "url",
    "tel",
    "number"
];
function Sn(i, e) {
    if (!t || xn(i)) return !1;
    var r, s, n, o, a;
    if (it(e) ? (r = !!e && bn, s = void 0, n = !1) : (r = null !== (o = null == e ? void 0 : e.css_selector_ignorelist) && void 0 !== o ? o : bn, s = null == e ? void 0 : e.content_ignorelist, n = null !== (a = null == e ? void 0 : e.ignore_text_selection) && void 0 !== a && a), !1 === r) return !1;
    if (n && function(t) {
        return !(!t || !en(t)) && (!!rn(t, "textarea") || (rn(t, "input") ? N(wn, (t.getAttribute("type") || "").toLowerCase()) : function(t) {
            if (t.isContentEditable) return !0;
            var i = null == t.getAttribute ? void 0 : t.getAttribute("contenteditable");
            return "true" === i || "" === i;
        }(t)));
    }(i)) return !1;
    var l = En(i, !1).targetElementList;
    return !function(t, i) {
        if (!1 === t || K(t)) return !1;
        var e;
        if (!0 === t) e = gn;
        else {
            if (!q(t)) return !1;
            if (t.length > 10) return Ue.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."), !1;
            e = t.map((t)=>t.toLowerCase());
        }
        return i.some((t)=>{
            var i = t.safeText, r = t.ariaLabel;
            return e.some((t)=>yn(i, t) || yn(r, t));
        });
    }(s, l.map((t)=>{
        var i;
        return {
            safeText: dn(t).toLowerCase(),
            ariaLabel: (null == (i = t.getAttribute("aria-label")) ? void 0 : i.toLowerCase().trim()) || ""
        };
    })) && !fn(l, r);
}
var xn = (t)=>!t || rn(t, "html") || !en(t), En = (i, e)=>{
    if (!t || xn(i)) return {
        parentIsUsefulElement: !1,
        targetElementList: []
    };
    for(var r = !1, s = [
        i
    ], n = i; n.parentNode && !rn(n, "body");)if (nn(n.parentNode)) s.push(n.parentNode.host), n = n.parentNode.host;
    else {
        var o = pn(n);
        if (!o) break;
        if (e || cn.indexOf(o.tagName.toLowerCase()) > -1) r = !0;
        else try {
            var a = t.getComputedStyle(o);
            a && "pointer" === a.getPropertyValue("cursor") && (r = !0);
        } catch (t) {}
        s.push(o), n = o;
    }
    return {
        parentIsUsefulElement: r,
        targetElementList: s
    };
};
function kn(t) {
    for(var i = new Set, e = 0, r = t; r.parentNode && !rn(r, "body"); r = r.parentNode){
        if (e++ >= on || i.has(r)) return !1;
        i.add(r);
        var s = hn(r);
        if (N(s, "ph-sensitive") || N(s, "ph-no-capture")) return !1;
    }
    if (N(hn(t), "ph-include")) return !0;
    var n = t.type || "";
    if (J(n)) switch(n.toLowerCase()){
        case "hidden":
        case "password":
            return !1;
    }
    var o = t.name || t.id || "";
    return !J(o) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(o.replace(/[^a-zA-Z0-9]/g, ""));
}
function Tn(t) {
    return !!(rn(t, "input") && ![
        "button",
        "checkbox",
        "submit",
        "reset"
    ].includes(t.type) || rn(t, "select") || rn(t, "textarea") || "true" === t.getAttribute("contenteditable"));
}
var $n = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"), Pn = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g, Rn = [
    16,
    15,
    14,
    13
], Cn = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"), On = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"), In = /[0-9A-Za-z_]/;
function Fn(t) {
    for(var i = 0, e = !1, r = t.length - 1; r >= 0; r--){
        var s = t.charCodeAt(r) - 48;
        e && (s *= 2) > 9 && (s -= 9), i += s, e = !e;
    }
    return i % 10 == 0;
}
function An(t, i) {
    if (void 0 === i && (i = !0), X(t)) return !1;
    if (J(t)) {
        t = L(t);
        var e = i ? $n.test((t || "").replace(/[- ]/g, "")) : function(t) {
            var i;
            for(Pn.lastIndex = 0; i = Pn.exec(t);){
                var e = i[2];
                if (e) for(var r = e.replace(/[- ]/g, ""), s = 0; r.length > s; s++)for (var n of Rn){
                    var o = s + n;
                    if (r.length >= o) {
                        var a = r.slice(s, o);
                        if ($n.test(a) && Fn(a)) return !0;
                    }
                }
            }
            return !1;
        }(t);
        if (e) return !1;
        var r = i ? Cn.test(t) : function(t) {
            var i;
            for(On.lastIndex = 0; i = On.exec(t);){
                var e = i[1], r = i[3];
                if (!(e && r && In.test(e) && In.test(r))) return !0;
            }
            return !1;
        }(t);
        if (r) return !1;
    }
    return !0;
}
function Mn(t) {
    var i = dn(t);
    return An(i = (i + " " + Dn(t)).trim()) ? i : "";
}
function Dn(t) {
    var i = "";
    return t && t.childNodes && t.childNodes.length && us(t.childNodes, function(t) {
        var e;
        if (t && "span" === (null == (e = t.tagName) ? void 0 : e.toLowerCase())) try {
            var r = dn(t);
            i = (i + " " + r).trim(), t.childNodes && t.childNodes.length && (i = (i + " " + Dn(t)).trim());
        } catch (t) {
            Ue.error("[AutoCapture]", t);
        }
    }), i;
}
function Nn(t) {
    return t.replace(/"|\\"/g, '\\"');
}
function Ln(t) {
    var i = t.attr__class;
    if (i) return q(i) ? i : an(i);
}
var jn = Be("[Dead Clicks]"), Un = ()=>!0, Bn = (t)=>{
    var i, e = !(null == (i = t.instance.persistence) || !i.get_property(nr)), r = t.instance.config.capture_dead_clicks;
    return it(r) ? r : !!W(r) || e;
};
class zn {
    get lazyLoadedDeadClicksAutocapture() {
        return this.Js;
    }
    onRemoteConfig(t) {
        if (t.ok) {
            var i = t.config;
            "captureDeadClicks" in i && (this.instance.persistence && this.instance.persistence.register({
                [nr]: i.captureDeadClicks
            }), this.startIfEnabledOrStop());
        }
    }
    startIfEnabledOrStop() {
        this.isEnabled(this) ? this.Ks(()=>{
            this.Ys();
        }) : this.stop();
    }
    Ks(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.initDeadClicksAutocapture ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this.instance, "dead-clicks-autocapture", (i)=>{
            i ? jn.error("failed to load script", i) : t();
        });
    }
    Ys() {
        var t;
        if (r) {
            if (!this.Js && null != (t = v.__PosthogExtensions__) && t.initDeadClicksAutocapture) {
                var i = W(this.instance.config.capture_dead_clicks) ? _({}, this.instance.config.capture_dead_clicks) : {};
                i.__onCapture = this.onCapture, this.onCapture && (i.capture_dead_swipes = !1), this.Js = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, i), this.Js.start(r), jn.info("starting...");
            }
        } else jn.error("`document` not found. Cannot start.");
    }
    stop() {
        this.Js && (this.Js.stop(), this.Js = void 0, jn.info("stopping..."));
    }
    constructor(t, i, e){
        this.instance = t, this.isEnabled = i, this.onCapture = e, this.startIfEnabledOrStop();
    }
}
var Hn = Be("[SegmentIntegration]");
var qn = "posthog-js";
function Vn(t, i) {
    var e = void 0 === i ? {} : i, r = e.organization, s = e.projectId, n = e.prefix, o = e.severityAllowList, a = void 0 === o ? [
        "error"
    ] : o, l = e.sendExceptionsToPostHog, h = void 0 === l || l;
    return (i)=>{
        var e, o, l, u, d;
        if ("*" !== a && !a.includes(i.level) || !t.__loaded) return i;
        i.tags || (i.tags = {});
        var v = t.requestRouter.endpointFor("ui", "/project/" + t.config.token + "/person/" + t.get_distinct_id());
        i.tags["PostHog Person URL"] = v, t.sessionRecordingStarted() && (i.tags["PostHog Recording URL"] = t.get_session_replay_url({
            withTimestamp: !0
        }));
        var c, f = (null == (e = i.exception) ? void 0 : e.values) || [], p = f.map((t)=>_({}, t, {
                stacktrace: t.stacktrace ? _({}, t.stacktrace, {
                    type: "raw",
                    frames: (t.stacktrace.frames || []).map((t)=>_({}, t, {
                            platform: "web:javascript"
                        }))
                }) : void 0
            })), g = {
            $exception_message: (null == (o = f[0]) ? void 0 : o.value) || i.message,
            $exception_type: null == (l = f[0]) ? void 0 : l.type,
            $exception_level: i.level,
            $exception_list: p,
            $sentry_event_id: i.event_id,
            $sentry_exception: i.exception,
            $sentry_exception_message: (null == (u = f[0]) ? void 0 : u.value) || i.message,
            $sentry_exception_type: null == (d = f[0]) ? void 0 : d.type,
            $sentry_tags: i.tags
        };
        return r && s && (g.$sentry_url = (n || "https://sentry.io/organizations/") + r + "/issues/?project=" + s + "&query=" + i.event_id), h && (null == (c = t.exceptions) || c.sendExceptionEvent(g)), i;
    };
}
class Wn {
    constructor(t, i, e, r, s, n){
        this.name = qn, this.setupOnce = function(o) {
            o(Vn(t, {
                organization: i,
                projectId: e,
                prefix: r,
                severityAllowList: s,
                sendExceptionsToPostHog: null == n || n
            }));
        };
    }
}
class Gn {
    ea() {
        var t;
        this.ia = null == (t = this._instance.sessionManager) ? void 0 : t.onSessionId(this.Xs);
    }
    destroy() {
        var t;
        null == (t = this.ia) || t.call(this), this.ia = void 0;
    }
    doPageView(i, e) {
        var r, s = this.ra(i, e);
        return this.ta = {
            pathname: null !== (r = null == t ? void 0 : t.location.pathname) && void 0 !== r ? r : "",
            pageViewId: e,
            timestamp: i
        }, this._instance.scrollManager.resetContext(), s;
    }
    doPageLeave(t) {
        var i;
        return this.ra(t, null == (i = this.ta) ? void 0 : i.pageViewId);
    }
    doEvent() {
        var t;
        return {
            $pageview_id: null == (t = this.ta) ? void 0 : t.pageViewId
        };
    }
    ra(t, i) {
        var e = this.ta;
        if (!e) return {
            $pageview_id: i
        };
        var r = {
            $pageview_id: i,
            $prev_pageview_id: e.pageViewId
        }, s = this._instance.scrollManager.getContext();
        if (s && !this._instance.config.disable_scroll_properties) {
            var n = s.maxScrollHeight, o = s.lastScrollY, a = s.maxScrollY, l = s.maxContentHeight, h = s.lastContentY, u = s.maxContentY;
            if (!(K(n) || K(o) || K(a) || K(l) || K(h) || K(u))) {
                n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), h = Math.ceil(h), u = Math.ceil(u);
                var d = n > 1 ? ct(o / n, 0, 1, Ue) : 1, v = n > 1 ? ct(a / n, 0, 1, Ue) : 1, c = l > 1 ? ct(h / l, 0, 1, Ue) : 1, f = l > 1 ? ct(u / l, 0, 1, Ue) : 1;
                r = ds(r, {
                    $prev_pageview_last_scroll: o,
                    $prev_pageview_last_scroll_percentage: d,
                    $prev_pageview_max_scroll: a,
                    $prev_pageview_max_scroll_percentage: v,
                    $prev_pageview_last_content: h,
                    $prev_pageview_last_content_percentage: c,
                    $prev_pageview_max_content: u,
                    $prev_pageview_max_content_percentage: f
                });
            }
        }
        return e.pathname && (r.$prev_pageview_pathname = e.pathname), e.timestamp && (r.$prev_pageview_duration = (t.getTime() - e.timestamp.getTime()) / 1e3), r;
    }
    constructor(t){
        this.Xs = (t, i, e)=>{
            e && (e.noSessionId || e.activityTimeout || e.sessionPastMaximumLength || e.crossTabAdoption) && (Ue.info("[PageViewManager] Session rotated, clearing pageview state", {
                sessionId: t,
                changeReason: e
            }), this.ta = void 0, this._instance.scrollManager.resetContext());
        }, this._instance = t, this.ea();
    }
}
var Kn = [
    "flags",
    "surveys"
], Jn = {
    [Ge]: {
        exposure: "hidden"
    },
    [Qe]: {
        exposure: "hidden"
    },
    __cmpns: {
        exposure: "hidden"
    },
    [Xe]: {
        exposure: "hidden"
    },
    [Ze]: {
        exposure: "event"
    },
    [tr]: {
        exposure: "hidden"
    },
    [ar]: {
        exposure: "hidden"
    },
    [ir]: {
        exposure: "event"
    },
    [er]: {
        exposure: "hidden"
    },
    [rr]: {
        exposure: "event"
    },
    [sr]: {
        exposure: "event"
    },
    [nr]: {
        exposure: "event"
    },
    [or]: {
        exposure: "hidden"
    },
    [lr]: {
        exposure: "event"
    },
    [hr]: {
        exposure: "hidden"
    },
    $session_recording_enabled_server_side: {
        exposure: "hidden"
    },
    [pr]: {
        exposure: "hidden"
    },
    [_r]: {
        exposure: "event"
    },
    [ur]: {
        exposure: "event",
        shouldSkipFromEventProperties: (t)=>Q(t)
    },
    $session_past_minimum_duration: {
        exposure: "event"
    },
    $session_recording_url_trigger_activated_session: {
        exposure: "event"
    },
    $session_recording_event_trigger_activated_session: {
        exposure: "event"
    },
    $debug_first_full_snapshot_timestamp: {
        exposure: "event"
    },
    $sess_rec_flush_size: {
        exposure: "hidden"
    },
    [gr]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [mr]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [yr]: {
        exposure: "hidden"
    },
    [br]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [wr]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [Sr]: {
        exposure: "hidden",
        storageGroup: "flags",
        volatile: !0
    },
    [xr]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [Er]: {
        exposure: "hidden"
    },
    [kr]: {
        exposure: "hidden"
    },
    [Tr]: {
        exposure: "hidden"
    },
    [$r]: {
        exposure: "hidden"
    },
    [Rr]: {
        exposure: "hidden",
        storageGroup: "surveys"
    },
    [Cr]: {
        exposure: "hidden",
        storageGroup: "surveys",
        volatile: !0
    },
    [Or]: {
        exposure: "event"
    },
    [Ir]: {
        exposure: "hidden"
    },
    [Fr]: {
        exposure: "hidden"
    },
    [Ar]: {
        exposure: "hidden"
    },
    $product_tours_activated: {
        exposure: "hidden"
    },
    $product_tours_activated_session: {
        exposure: "hidden"
    },
    $conversations_widget_session_id: {
        exposure: "event"
    },
    $conversations_ticket_id: {
        exposure: "event"
    },
    $conversations_widget_state: {
        exposure: "event"
    },
    $conversations_user_traits: {
        exposure: "event"
    },
    [Mr]: {
        exposure: "hidden"
    },
    [Dr]: {
        exposure: "hidden"
    },
    [Pr]: {
        exposure: "event"
    },
    [Nr]: {
        exposure: "hidden"
    },
    [Lr]: {
        exposure: "hidden",
        storageGroup: "flags",
        volatile: !0
    },
    [jr]: {
        exposure: "hidden"
    },
    [Ur]: {
        exposure: "hidden"
    },
    [Br]: {
        exposure: "hidden"
    },
    [zr]: {
        exposure: "hidden"
    },
    [Hr]: {
        exposure: "hidden"
    },
    [qr]: {
        exposure: "hidden"
    },
    [Vr]: {
        exposure: "hidden"
    },
    [dr]: {
        exposure: "event"
    },
    [vr]: {
        exposure: "event"
    },
    [cr]: {
        exposure: "event"
    },
    [fr]: {
        exposure: "event"
    },
    [Kr]: {
        exposure: "event"
    },
    [Jr]: {
        exposure: "event"
    },
    [Yr]: {
        exposure: "event"
    },
    $sdk_debug_replay_event_trigger_status: {
        exposure: "event"
    },
    $sdk_debug_replay_linked_flag_trigger_status: {
        exposure: "event"
    },
    $sdk_debug_replay_matched_recording_trigger_groups: {
        exposure: "event"
    },
    $sdk_debug_replay_pending_trigger_conditions: {
        exposure: "event"
    },
    $sdk_debug_replay_remote_trigger_matching_config: {
        exposure: "event"
    },
    $sdk_debug_replay_trigger_groups_count: {
        exposure: "event"
    },
    $sdk_debug_replay_url_trigger_status: {
        exposure: "event"
    },
    $session_recording_start_reason: {
        exposure: "event"
    }
}, Yn = [
    [
        "$posthog_sr_group_event_trigger_",
        {
            exposure: "hidden"
        }
    ],
    [
        "$posthog_sr_group_url_trigger_",
        {
            exposure: "hidden"
        }
    ],
    [
        "$posthog_sr_group_sampling_",
        {
            exposure: "hidden"
        }
    ]
], Qn = (t)=>{
    var i = Jn[t];
    if (i) return i;
    for (var e of Yn){
        var r = e[1];
        if (0 === t.indexOf(e[0])) return r;
    }
}, Xn = (t, i)=>{
    try {
        return JSON.stringify(t, (t, i)=>"bigint" == typeof i ? i.toString() : i, i);
    } catch (i) {
        return U(t);
    }
}, Zn = (t)=>{
    var i = null == r ? void 0 : r.createElement("a");
    return K(i) ? null : (i.href = t, i);
}, to = function(t, i) {
    for(var e, r = ((t.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), s = 0; r.length > s; s++){
        var n = r[s].split("=");
        if (n[0] === i) {
            e = n;
            break;
        }
    }
    if (!q(e) || 2 > e.length) return "";
    var o = e[1];
    try {
        o = decodeURIComponent(o);
    } catch (t) {
        Ue.error("Skipping decoding for malformed query param: " + o);
    }
    return o.replace(/\+/g, " ");
}, io = function(t, i, e) {
    if (!t || !i || !i.length) return t;
    for(var r = t.split("#"), s = r[1], n = (r[0] || "").split("?"), o = n[1], a = n[0], l = (o || "").split("&"), h = [], u = 0; l.length > u; u++){
        var d = l[u].split("=");
        q(d) && (i.includes(d[0]) ? h.push(d[0] + "=" + e) : h.push(l[u]));
    }
    var v = a;
    return null != o && (v += "?" + h.join("&")), null != s && (v += "#" + s), v;
}, eo = function(t, i) {
    var e = t.match(new RegExp(i + "=([^&]*)"));
    return e ? e[1] : null;
}, ro = (t, i)=>t >= i && u(), so = (t, i, e, r)=>{
    if (0 === t) {
        if (u()) {
            var s = i + 1;
            return s === e && r(), s;
        }
        return i;
    }
    return 0;
}, no = "https?://(.*)", oo = [
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "irclid",
    "_kx"
], ao = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid",
    ...oo
], lo = "<masked>", ho = [
    "li_fat_id"
];
function uo(t, i, e) {
    if (!r) return {};
    var s, n = i ? [
        ...oo,
        ...e || []
    ] : [], o = vo(io(r.URL, n, lo), t), a = (s = {}, us(ho, function(t) {
        var i = bs(t);
        s[t] = i || null;
    }), s);
    return ds(a, o);
}
function vo(t, i) {
    var e = ao.concat(i || []), r = {};
    return us(e, function(i) {
        var e = to(t, i);
        r[i] = e || null;
    }), r;
}
function co(t) {
    var i = function(t) {
        return t ? 0 === t.search(no + "google.([^/?]*)") ? "google" : 0 === t.search(no + "bing.com") ? "bing" : 0 === t.search(no + "yahoo.com") ? "yahoo" : 0 === t.search(no + "duckduckgo.com") ? "duckduckgo" : null : null;
    }(t), e = "yahoo" != i ? "q" : "p", s = {};
    if (!Q(i)) {
        s.$search_engine = i;
        var n = r ? to(r.referrer, e) : "";
        n.length && (s.ph_keyword = n);
    }
    return s;
}
function fo() {
    return navigator.language || navigator.userLanguage;
}
var po = "$direct";
function _o() {
    return (null == r ? void 0 : r.referrer) || po;
}
function go(t, i, e) {
    void 0 === e && (e = !1);
    var r = t ? [
        ...oo,
        ...i || []
    ] : [], n = e ? $i(null == s ? void 0 : s.href) : null == s ? void 0 : s.href, o = null == n ? void 0 : n.substring(0, 1e3);
    return {
        r: _o().substring(0, 1e3),
        u: o ? io(o, r, lo) : void 0
    };
}
function mo(t, i) {
    var e;
    void 0 === i && (i = !1);
    var r = t.r, s = t.u, n = i ? $i(s) : s, o = {
        $referrer: r,
        $referring_domain: null == r ? void 0 : r == po ? po : null == (e = Zn(r)) ? void 0 : e.host
    };
    if (n) {
        o.$current_url = n;
        var a = Zn(n);
        o.$host = null == a ? void 0 : a.host, o.$pathname = null == a ? void 0 : a.pathname;
        var l = vo(n);
        ds(o, l);
    }
    if (r) {
        var h = co(r);
        ds(o, h);
    }
    return o;
}
function yo() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (t) {
        return;
    }
}
function bo() {
    try {
        return (new Date).getTimezoneOffset();
    } catch (t) {
        return;
    }
}
var wo = {
    flags: Lr,
    surveys: Cr
}, So = [
    "cookie",
    "localstorage",
    "localstorage+cookie",
    "sessionstorage",
    "memory"
], xo = (t)=>t + "_cookie_identity_change_pending", Eo = "main", ko = [
    gr,
    mr,
    br,
    wr,
    Sr,
    Lr,
    xr,
    Tr
], To = (t)=>-1 !== ko.indexOf(t), $o = (t, i)=>{
    try {
        return JSON.stringify(t) === JSON.stringify(i);
    } catch (e) {
        return t === i;
    }
}, Po = (t)=>{
    if (!t) return {};
    var i = JSON.parse(t);
    return W(i) ? i : {};
}, Ro = (t, i)=>{
    us(t, (e, r)=>{
        var s = Qn(r);
        s && "event" !== s.exposure || ({}).hasOwnProperty.call(i, r) || delete t[r];
    });
};
class Co {
    markCrossTabFeatureFlagChanges(t) {
        Object.entries(t).forEach((t)=>{
            var i = t[0], e = t[1], r = this.ua.get(i);
            if (To(i) && !0 !== r) if (!0 !== e) {
                var s = new Set(r || []);
                e.forEach((t)=>s.add(t)), s.size && this.Sa(i, s);
            } else this.Sa(i, !0);
        });
    }
    onCrossTabFeatureFlagChange(t) {
        return this.ca.add(t), ()=>this.ca.delete(t);
    }
    destroy() {
        this._a && t && (t.removeEventListener("storage", this._a), this._a = void 0), this.ca.clear();
    }
    ka(t, i, e) {
        if (void 0 === e && (e = !0), this.xa) return !1;
        var r, s;
        try {
            if (s = Fs.ni(t), Q(s)) {
                var n = this.Ca(i);
                return n.storageValue = null, i !== Eo && (n.persisted = !1), !1;
            }
            r = Po(s);
        } catch (t) {
            return !1;
        }
        var o = i === Eo ? r : Fs.si(this.ga);
        if (o && this.Ta(o)) return !1;
        var a = this.Ma(r, i, e);
        return i === Eo && this.aa && !$o(this.Ea().main, r) || this.Ia(r, i, !0, s), a;
    }
    Ta(t) {
        var i = this.props[Ke], e = t[Ke];
        return !K(i) && !K(e) && i !== e;
    }
    Ia(t, i, e, r) {
        var s = this.Ca(i);
        s.storageValue = r, i !== Eo && (s.persisted = e);
        try {
            s.fingerprint = this.Ra(t, i);
        } catch (t) {
            s.fingerprint = void 0;
        }
    }
    Ma(t, i, e) {
        var r = !1;
        return ko.forEach((e)=>{
            var s, n = null == (s = Qn(e)) ? void 0 : s.storageGroup;
            if (!(i === Eo && this.aa && n || i !== Eo && n !== i)) {
                var o = e in t, a = this.Pa(e, o ? t[e] : void 0), l = this.ua.has(e) ? e in this.props : o;
                l === e in this.props && $o(a, this.props[e]) || (l ? this.Aa(e, a, !1) : this.Fa(e, !1), r = !0);
            }
        }), r && e && this.ca.forEach((t)=>t()), r;
    }
    Oa() {
        if (!this.sa) return !1;
        try {
            this.va = !1;
            var t, i = Fs.ni(this.ga), e = this.Ca(Eo), r = !1, s = !1;
            if (i !== e.storageValue) if (Q(i)) e.storageValue = null;
            else {
                if (t = Po(i), this.va = !this.da && this.Ta(t), this.va) return !1;
                s = this.Ma(t, Eo, !1), !this.aa || $o(this.Ea().main, t) ? this.Ia(t, Eo, !0, i) : e.storageValue = i, r = !0;
            }
            return this.aa && Kn.forEach((i)=>{
                var e = Fs.ni(this.wa(i)), n = this.Ca(i), o = t || {}, a = r && ko.some((t)=>{
                    var e;
                    return (null == (e = Qn(t)) ? void 0 : e.storageGroup) === i && t in o;
                });
                if (e !== n.storageValue || a) {
                    if (Q(e)) return n.storageValue = null, n.persisted = !1, void (a && (s = this.Ma(o, i, !1) || s));
                    var l = Po(e);
                    s = this.Ma(l, i, !1) || s, this.Ia(l, i, !0, e);
                }
            }), s;
        } catch (t) {
            return !1;
        }
    }
    Sa(t, i) {
        this.ua.set(t, i);
        var e = Qn(t);
        null != e && e.volatile || (this.Ca((this.aa ? null == e ? void 0 : e.storageGroup : void 0) || Eo).fingerprint = void 0, this.La(t));
    }
    Da() {
        ko.forEach((t)=>this.ua.set(t, !0));
    }
    ba() {
        if (this.sa) try {
            var t = Fs.ni(this.ga), i = Po(t);
            this.Ca(Eo).storageValue = t, ko.forEach((t)=>{
                var e, r = this.aa ? null == (e = Qn(t)) ? void 0 : e.storageGroup : void 0, s = r ? Fs.ni(this.wa(r)) : null;
                if (r) {
                    var n = this.Ca(r);
                    n.storageValue = s, n.persisted = !Q(s);
                }
                var o = r && !Q(s) ? Po(s) : i;
                t in this.props ? this.$a(t, o[t], this.props[t]) : t in o && this.Sa(t, !0);
            });
        } catch (t) {}
    }
    Pa(t, i) {
        var e = this.ua.get(t);
        if (!e) return i;
        if (!0 === e) return this.props[t];
        if (t === mr) {
            var r = new Set(q(i) ? i : []), s = new Set(q(this.props[t]) ? this.props[t] : []);
            return e.forEach((t)=>s.has(t) ? r.add(t) : r.delete(t)), Array.from(r);
        }
        var n = W(i) ? _({}, i) : {}, o = W(this.props[t]) ? this.props[t] : {};
        return e.forEach((t)=>{
            t in o ? n[t] = o[t] : delete n[t];
        }), n;
    }
    $a(t, i, e) {
        if (To(t)) {
            var r = this.ua.get(t);
            if (!0 !== r) {
                var s = i;
                if (this.sa) try {
                    var n, o = this.aa ? null == (n = Qn(t)) ? void 0 : n.storageGroup : void 0, a = o ? this.wa(o) : this.ga;
                    s = Po(Fs.ni(a))[t];
                } catch (t) {}
                var l = new Set(r || []);
                if (t === mr) {
                    if (!K(i) && !q(i) || !K(s) && !q(s) || !q(e)) return void this.Sa(t, !0);
                    var h = new Set(i || []), u = new Set(s || []), d = new Set(e);
                    new Set([
                        ...h,
                        ...d
                    ]).forEach((t)=>{
                        h.has(t) !== d.has(t) && l.add(t);
                    }), l.forEach((t)=>{
                        u.has(t) === d.has(t) && l.delete(t);
                    });
                } else {
                    if (!W(e)) return void ($o(s, e) ? this.ua.delete(t) : this.Sa(t, !0));
                    if (!K(i) && !W(i) || K(i) && G(e) && K(s)) return void this.Sa(t, !0);
                    var v = W(i) ? i : {}, c = W(s) ? s : {};
                    new Set([
                        ...Object.keys(v),
                        ...Object.keys(e)
                    ]).forEach((t)=>{
                        t in v == t in e && $o(v[t], e[t]) || l.add(t);
                    }), l.forEach((t)=>{
                        t in c == t in e && $o(c[t], e[t]) && l.delete(t);
                    });
                }
                l.size ? this.Sa(t, l) : this.ua.delete(t);
            }
        }
    }
    Na() {
        var t, i = null == (t = this.gn) ? void 0 : t.persistence_save_debounce_ms;
        return Z(i) && i > 0 ? i : 0;
    }
    qa(t) {
        if (this.gn.cookieWinsOnConflict && "localstorage+cookie" === this.gn.persistence.toLowerCase()) if (t) try {
            var i = js(t, this.gn.cookie_persisted_properties || []), e = Bs(i, this.gn.cookie_persisted_properties || []), r = JSON.stringify(i) + "|" + JSON.stringify(e), s = Os.ni(this.ga) || void 0;
            s && Hs(this.ga, s) === r && (this.ja = r, this.Ba = s);
        } catch (t) {}
        else try {
            var n = Os.ni(this.ga) || void 0;
            this.ja = n ? Hs(this.ga, n) : void 0, this.Ba = n;
        } catch (t) {}
    }
    syncCookieProperties() {
        return this.Ha(this.gn);
    }
    Ha(t, i) {
        if (void 0 === i && (i = !1), this.xa && !i || this.la || !t.cookieWinsOnConflict || "localstorage+cookie" !== t.persistence.toLowerCase()) return !1;
        var e;
        try {
            e = Os.ni(this.ga) || void 0;
        } catch (t) {}
        if (!e || e === this.Ba) return !1;
        var r, s = Hs(this.ga, e);
        try {
            r = Ls(JSON.parse(e));
        } catch (t) {
            return !1;
        }
        if ((Os.ni(this.ga) || void 0) !== e) return !1;
        this.ja = s, this.Ba = e;
        var n = zs(this.ga, e), o = [
            ...Ms,
            ...n.properties
        ], a = {};
        if (Object.keys(r).forEach((t)=>{
            var i = r[t];
            (K(i) || Q(i) || "" === i || t === jr && i !== ts && i !== is) && (a[t] = !0, delete r[t]);
        }), G(r)) return !1;
        var l = Ke in r || r[jr] === ts || r[jr] === is, h = this.props, u = h[Ke], d = h[jr], v = ds({}, h);
        [
            ...Ms,
            ...t.cookie_persisted_properties || []
        ].forEach((t)=>{
            if (-1 !== o.indexOf(t) && !(t in r) && !a[t] && (l || t !== Ke && t !== jr)) {
                var i = v[t];
                !n.isValid && -1 !== Ms.indexOf(t) && (!1 === i || 0 === i) || delete v[t];
            }
        }), this.props = ds(v, r), ko.forEach((t)=>{
            var i = t in this.props;
            t in h === i && $o(h[t], this.props[t]) || (i ? this.$a(t, h[t], this.props[t]) : this.Sa(t, !0));
        }), !l || jr in r || jr in this.props || this.Aa(jr, ts);
        var c = this.props[Ke], f = this.props[jr];
        return !l || c === u && f === d || (this.da = !0, this.oa = !0, Gs.ii(xo(this.ga), !0), this.Fa(Tr), this.Fa(mr), this.Fa(gr), this.Fa(br), this.Fa(wr), this.Fa(Sr), this.Fa(Lr), this.Fa(Nr), this.Fa(Mr), f === ts && (d === is || r[jr] === ts || !K(u) && c !== u) && (Ro(this.props, r), this.Fa($r)), f === is ? this.props.$user_id = c : delete this.props.$user_id, this.Fa(Qe)), !0;
    }
    consumeCookieIdentityChange() {
        var t = xo(this.ga), i = this.oa || !!Gs.ni(t);
        return this.oa = !1, i && Gs.ai(t), i;
    }
    za(t) {
        return void 0 === t && (t = !1), !(this.la || this.xa && !t || !this.gn.cookieWinsOnConflict || "localstorage+cookie" !== this.gn.persistence.toLowerCase() || (this.la = !0, 0));
    }
    Ua() {
        this.la && (K(this.Wa) || (clearTimeout(this.Wa), this.Wa = void 0), delete this.na[Eo], this.Va(!0));
    }
    Ga(t) {
        if (void 0 === t && (t = !0), this.la) try {
            t ? this.Ua() : K(this.Wa) || (clearTimeout(this.Wa), this.Wa = void 0);
        } finally{
            this.la = !1;
        }
    }
    isDisabled() {
        return !!this.xa;
    }
    ma(i) {
        -1 === So.indexOf(i.persistence.toLowerCase()) && (Ue.critical("Unknown persistence type " + i.persistence + "; falling back to localStorage+cookie"), i.persistence = "localStorage+cookie");
        var e, r = function(i, e) {
            void 0 === i && (i = []), void 0 === e && (e = !1);
            var r = [
                ...Ms,
                ...i
            ];
            return _({}, Fs, {
                si (t) {
                    try {
                        var i, s = {};
                        try {
                            i = Os.ni(t) || void 0, s = i ? Ls(JSON.parse(i)) : {};
                        } catch (t) {}
                        var n, o = JSON.parse(Fs.ni(t) || "{}");
                        if (e) {
                            var a = zs(t, i), l = [
                                ...Ms,
                                ...a.properties
                            ], h = {};
                            Object.keys(s).forEach((t)=>{
                                var i = s[t];
                                Q(i) || "" === i || t === jr && i !== ts && i !== is || (h[t] = i);
                            });
                            var u = Ke in h || h[jr] === ts || h[jr] === is;
                            if (Object.keys(h).length > 0) {
                                var d, v = o[Ke], c = null !== (d = o[jr]) && void 0 !== d ? d : ts;
                                r.forEach((t)=>{
                                    if (-1 !== l.indexOf(t) && !(t in s) && (u || t !== Ke && t !== jr)) {
                                        var i = o[t];
                                        !a.isValid && -1 !== Ms.indexOf(t) && (!1 === i || 0 === i) || delete o[t];
                                    }
                                }), !u || jr in s || jr in o || (o[jr] = ts), !u || (Ke in h ? h[Ke] : o[Ke]) === v && (jr in h ? h[jr] : o[jr]) === c || (As.forEach((t)=>delete o[t]), h[jr] === is && Ke in h ? o.$user_id = h[Ke] : delete o.$user_id, h[jr] !== is && (delete o[Pr], delete o[$r]), delete o.__alias);
                            }
                            n = ds(o, h);
                        } else n = ds(s, o);
                        return Fs.ii(t, n), n;
                    } catch (t) {}
                    return null;
                },
                ii (t, r, s, n, o, a) {
                    var l = Fs.ii(t, r, void 0, void 0, a);
                    try {
                        var h = js(r, i);
                        if (Object.keys(h).length) {
                            if (e) {
                                var u = Ds(t), d = Bs(h, i);
                                if (Os.ii(u, d, s, n, o, a), Os.ni(u) !== JSON.stringify(d)) {
                                    Os.ai(u, n);
                                    var v = js(r);
                                    return Os.ii(t, v, s, n, o, a), l;
                                }
                            }
                            Os.ii(t, h, s, n, o, a);
                        }
                    } catch (t) {
                        Fs.oi(t);
                    }
                    return l;
                },
                ai (i, e) {
                    try {
                        null == t || t.localStorage.removeItem(i), Os.ai(i, e), Os.ai(Ds(i), e);
                    } catch (t) {
                        Fs.oi(t);
                    }
                }
            });
        }(i.cookie_persisted_properties || [], i.cookieWinsOnConflict), s = !1, n = i.persistence.toLowerCase();
        return "localstorage" === n && Fs.ri() ? (e = Fs, s = !0) : "localstorage+cookie" === n && r.ri() ? (e = r, s = !0) : "sessionstorage" === n && Gs.ri() ? e = Gs : "memory" === n ? e = Vs : "cookie" === n && Os.ri() ? e = Os : r.ri() ? (e = r, s = !0) : e = Os.ri() ? Os : Vs, this.sa = s, e;
    }
    wa(t) {
        return this.ga + "__" + t;
    }
    ya(t) {
        return this.sa && !!t.split_storage;
    }
    properties() {
        var t = {};
        return us(this.props, (i, e)=>{
            var r = Qn(e);
            if (!r || "event" === r.exposure) {
                if (null != r && null != r.shouldSkipFromEventProperties && r.shouldSkipFromEventProperties(i)) return;
                t[e] = i;
            }
        }), t;
    }
    load(t) {
        if (void 0 === t && (t = !1), !this.xa || t) {
            var i = this.gn.cookieWinsOnConflict && "localstorage+cookie" === this.gn.persistence.toLowerCase(), e = i ? Fs.si(this.ga) : null, r = {};
            if (i) try {
                us(r = Ls(Os.si(this.ga)), (t, i)=>{
                    (K(t) || Q(t) || "" === t) && delete r[i];
                });
            } catch (t) {}
            var s = this.Gs.si(this.ga);
            if (s && (this.props = ds({}, s)), this.aa && this.Za(), i && s) {
                var n, o, a = null == e ? void 0 : e[Ke], l = null !== (n = null == e ? void 0 : e[jr]) && void 0 !== n ? n : ts, h = s[Ke], u = null !== (o = s[jr]) && void 0 !== o ? o : ts;
                if (h !== a || u !== l) {
                    this.oa = !0, Gs.ii(xo(this.ga), !0);
                    var d = ds({}, this.props);
                    As.forEach((t)=>delete d[t]), u === ts && (l === is || r[jr] === ts || !K(a) && h !== a) && (Ro(d, r), delete d[$r]), this.props = d;
                    var v = new Set;
                    As.forEach((t)=>{
                        var i, e = null == (i = Qn(t)) ? void 0 : i.storageGroup;
                        e && v.add(e);
                    }), v.forEach((t)=>{
                        var i = {};
                        us(this.props, (e, r)=>{
                            var s;
                            (null == (s = Qn(r)) ? void 0 : s.storageGroup) === t && (i[r] = e);
                        }), G(i) ? (Fs.ai(this.wa(t)), this.na[t] = {}) : Fs.ii(this.wa(t), i) && (this.na[t] = {
                            persisted: !0,
                            fingerprint: this.Ra(i, t)
                        });
                    });
                }
            }
            Gs.ni(xo(this.ga)) && (this.oa = !0);
        }
    }
    Za() {
        for (var t of Kn){
            var i = Fs.si(this.wa(t));
            if (i && !G(i)) {
                var e = this.Ca(t);
                e.persisted = !0, this.Qa(t) || (e.fingerprint = this.Ra(i, t)), this.Ja(t, i) || ds(this.props, i);
            }
        }
    }
    Qa(t) {
        return Object.keys(this.props).some((i)=>{
            var e;
            return (null == (e = Qn(i)) ? void 0 : e.storageGroup) === t;
        });
    }
    Ja(t, i) {
        var e = wo[t];
        if (!e) return !1;
        var r = i[e], s = this.props[e];
        return Z(r) && Z(s) && s > r;
    }
    refreshKey(t) {
        var i;
        if (!this.xa) {
            var e = this.aa ? null == (i = Qn(t)) ? void 0 : i.storageGroup : void 0, r = e ? Fs.si(this.wa(e)) : this.Gs.si(this.ga);
            if (r && t in r) this.Aa(t, r[t]);
            else {
                if (e) {
                    var s = this.Gs.si(this.ga);
                    if (s && t in s) return void this.Aa(t, s[t]);
                }
                this.Fa(t);
            }
        }
    }
    save() {
        if (!this.xa) {
            var t = this.Na();
            t > 0 ? K(this.Wa) && (this.Wa = setTimeout(()=>{
                this.Wa = void 0, this.Va();
            }, t)) : this.Va();
        }
    }
    flush() {
        K(this.Wa) || (clearTimeout(this.Wa), this.Wa = void 0, this.Va());
    }
    Va(t) {
        if (void 0 === t && (t = !1), !(this.xa || this.la && !t)) {
            t || this.syncCookieProperties();
            var i = !t && !this.ha;
            i || (this.va = !1);
            var e = !!i && this.Oa();
            if (this.va) this.gn.debug && Ue.warn("skipping persistence write because storage belongs to a different distinct ID");
            else {
                if (this.aa) return this.Ka(), void (e && this.ca.forEach((t)=>t()));
                var r = this.Ya(this.Gs, this.ga, this.props, Eo);
                "written" === r && this.qa(this.props), "failed" !== r && (this.ua.clear(), this.da = !1), e && this.ca.forEach((t)=>t());
            }
        }
    }
    Ka() {
        var t = this, i = this.Ea(), e = i.main, r = i.groups, s = this.Ya(this.Gs, this.ga, e, Eo);
        "written" === s && this.qa(e), "failed" !== s && (this.da = !1, ko.forEach((t)=>{
            var i;
            null != (i = Qn(t)) && i.storageGroup || this.ua.delete(t);
        }));
        var n = function(i) {
            var e, s = r[i];
            if (G(s) && (null == (e = t.na[i]) || !e.persisted)) return ko.forEach((e)=>{
                var r;
                (null == (r = Qn(e)) ? void 0 : r.storageGroup) === i && t.ua.delete(e);
            }), 1;
            var n = t.Ya(Fs, t.wa(i), s, i);
            "failed" !== n && ko.forEach((e)=>{
                var r = Qn(e);
                (null == r ? void 0 : r.storageGroup) !== i || "written" !== n && r.volatile || t.ua.delete(e);
            });
        };
        for (var o of Kn)n(o);
    }
    Ea() {
        var t = {}, i = {
            flags: {},
            surveys: {}
        };
        return us(this.props, (e, r)=>{
            var s, n = null == (s = Qn(r)) ? void 0 : s.storageGroup;
            n ? i[n][r] = e : t[r] = e;
        }), {
            main: t,
            groups: i
        };
    }
    Ra(t, i) {
        if (i === Eo) return JSON.stringify(t) + "|" + this.Xa + "|" + this.eo + "|" + this.io;
        var e = {};
        return us(t, (t, i)=>{
            var r;
            e[i] = null != (r = Qn(i)) && r.volatile ? "__volatile__" : t;
        }), JSON.stringify(e);
    }
    Ya(t, i, e, r) {
        var s, n = this.Ca(r);
        if (r !== Eo && !n.dirty && !K(n.fingerprint)) return "skipped";
        try {
            if ((s = this.Ra(e, r)) === n.fingerprint) return n.dirty = !1, "skipped";
        } catch (t) {
            s = void 0;
        }
        return t.ii(i, e, this.Xa, this.eo, this.io, this.gn.debug) ? (n.dirty = !1, r !== Eo && (n.persisted = !0), K(s) || (n.fingerprint = s), this.sa && (n.storageValue = Fs.ni(i)), "written") : (this.gn.debug && Ue.warn('failed to persist storage entry "' + i + '"; will retry on next save'), "failed");
    }
    remove(t) {
        var i = (void 0 === t ? {} : t).keepGroupEntries, e = void 0 !== i && i;
        if (this.Da(), K(this.Wa) || (clearTimeout(this.Wa), this.Wa = void 0), this.Gs.ai(this.ga, !1), this.Gs.ai(this.ga, !0), !e && this.fa) for (var r of Kn)Fs.ai(this.wa(r));
        e ? delete this.na[Eo] : this.na = {}, this.ja = void 0, this.Ba = void 0;
    }
    clear() {
        this.remove(), this.props = {};
    }
    register_once(t, i, e) {
        if (W(t)) {
            this.syncCookieProperties(), K(i) && (i = "None"), this.Xa = K(e) ? this.ro : e;
            var r = !1;
            if (us(t, (t, e)=>{
                this.props.hasOwnProperty(e) && this.props[e] !== i || (this.Aa(e, t), r = !0);
            }), r) return this.save(), !0;
        }
        return !1;
    }
    register(t, i) {
        if (W(t)) {
            this.syncCookieProperties(), this.Xa = K(i) ? this.ro : i;
            var e = !1;
            if (us(t, (i, r)=>{
                t.hasOwnProperty(r) && (this.props[r] !== i || W(i) || q(i)) && (this.Aa(r, i), e = !0);
            }), e) return this.save(), !0;
        }
        return !1;
    }
    unregister(t) {
        this.syncCookieProperties();
        var i = "string" == typeof t ? [
            t
        ] : t, e = !1;
        for (var r of i)r in this.props && (this.Fa(r), e = !0);
        e && this.save();
    }
    update_campaign_params() {
        var t = null == r ? void 0 : r.URL;
        if (t !== this.pa) {
            var i = uo(this.gn.custom_campaign_params, this.gn.mask_personal_data_properties, this.gn.custom_personal_data_properties);
            G(ps(i)) || this.register(i), this.pa = t;
        }
    }
    update_search_keyword() {
        var t;
        this.register((t = null == r ? void 0 : r.referrer) ? co(t) : {});
    }
    update_referrer_info() {
        var t;
        this.register_once({
            $referrer: _o(),
            $referring_domain: null != r && r.referrer && (null == (t = Zn(r.referrer)) ? void 0 : t.host) || po
        }, void 0);
    }
    set_initial_person_info() {
        this.props[zr] || this.props[Hr] || this.register_once({
            [qr]: go(this.gn.mask_personal_data_properties, this.gn.custom_personal_data_properties, this.gn.disable_capture_url_hashes)
        }, void 0);
    }
    get_initial_props() {
        var t = {};
        us([
            Hr,
            zr
        ], (i)=>{
            var e = this.props[i];
            e && us(e, function(i, e) {
                t["$initial_" + j(e)] = i;
            });
        });
        var i = this.props[qr];
        if (i) {
            var e = function(t, i) {
                void 0 === i && (i = !1);
                var e = mo(t, i), r = {};
                return us(e, function(t, i) {
                    r["$initial_" + j(i)] = t;
                }), r;
            }(i, this.gn.disable_capture_url_hashes);
            ds(t, e);
        }
        return t;
    }
    safe_merge(t) {
        return us(this.props, function(i, e) {
            e in t || (t[e] = i);
        }), t;
    }
    update_config(t, i, e) {
        var r = t.persistence !== i.persistence, s = !((t, i)=>{
            if (t.length !== i.length) return !1;
            var e = [
                ...t
            ].sort(), r = [
                ...i
            ].sort();
            return e.every((t, i)=>t === r[i]);
        })(t.cookie_persisted_properties || [], i.cookie_persisted_properties || []), n = r || s, o = t.cookieWinsOnConflict !== i.cookieWinsOnConflict, a = t.disable_persistence || !!e, l = !!this.xa && !a;
        a || this.Ha(i, l), this.gn = t, !a && (r || s || o) && (this.ja = void 0, this.Ba = void 0, this.Ha(_({}, t, {
            cookie_persisted_properties: i.cookie_persisted_properties
        }), l));
        var h = n || o ? this.ma(t) : this.Gs, u = this.ya(t), d = n || u !== this.aa, v = !a && (d || t.cross_subdomain_cookie !== this.eo || t.secure_cookie !== this.io) && this.za(l);
        this.ha = d;
        try {
            if (this.ro = this.Xa = t.cookie_expiration, this.set_disabled(a), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie), d) {
                var c = this.props;
                this.clear(), this.Gs = h, this.aa = u, this.props = c, this.save();
            } else o && (this.Gs = h, a || (delete this.na[Eo], this.Va()));
        } finally{
            this.ha = !1, v && this.Ga();
        }
    }
    set_disabled(t) {
        this.xa = t, this.xa ? this.remove() : this.save();
    }
    set_cross_subdomain(t) {
        t !== this.eo && (this.eo = t, this.remove({
            keepGroupEntries: !0
        }), this.save());
    }
    set_secure(t) {
        t !== this.io && (this.io = t, this.remove({
            keepGroupEntries: !0
        }), this.save());
    }
    set_event_timer(t, i) {
        var e = this.props[Xe] || {};
        e[t] = i, this.Aa(Xe, e), this.save();
    }
    remove_event_timer(t) {
        var i = this.props[Xe] || {}, e = i[t];
        return K(e) || (delete i[t], this.Aa(Xe, i), this.save()), e;
    }
    get_property(t) {
        return this.props[t];
    }
    set_property(t, i) {
        this.Aa(t, i), this.save();
    }
    Aa(t, i, e) {
        var r;
        void 0 === e && (e = !0);
        var s = this.props[t];
        this.props[t] = i, e && (t !== Ke && t !== jr || s === i || (this.da = !0), this.$a(t, s, i), null != (r = Qn(t)) && r.volatile || this.La(t));
    }
    Fa(t, i) {
        void 0 === i && (i = !0), delete this.props[t], i && (To(t) && this.Sa(t, !0), this.La(t));
    }
    La(t) {
        var i, e = null == (i = Qn(t)) ? void 0 : i.storageGroup;
        e && (this.Ca(e).dirty = !0);
    }
    Ca(t) {
        return this.na[t] || (this.na[t] = {});
    }
    constructor(i, e, r){
        if (void 0 === r && (r = !0), this.na = {}, this.sa = !1, this.aa = !1, this.oa = !1, this.la = !1, this.ua = new Map, this.ha = !1, this.da = !1, this.va = !1, this.ca = new Set, this.gn = i, this.fa = r, this.props = {}, this.pa = void 0, this.ga = ((t)=>{
            var i = "";
            return t.token && (i = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + i + "_posthog";
        })(i), this.Gs = this.ma(i), this.aa = this.ya(i), this.load(), this.ba(), i.debug && Ue.info("Persistence loaded", i.persistence, _({}, this.props)), this.update_config(i, i, e), this.save(), t) {
            var s = ()=>this.flush();
            ms(t, "beforeunload", s, {
                capture: !1
            }), ms(t, "pagehide", s, {
                capture: !1
            }), this._a = (i)=>{
                if (this.sa && (!i.storageArea || i.storageArea === (null == t ? void 0 : t.localStorage)) && i.key) if (i.key !== this.ga) {
                    if (this.aa) {
                        var e = Kn.find((t)=>i.key === this.wa(t));
                        e && this.ka(i.key, e);
                    }
                } else this.ka(i.key, Eo);
            }, ms(t, "storage", this._a);
        }
    }
}
function Oo(t) {
    var i = !0;
    return {
        dispose () {
            if (i) {
                i = !1;
                var e = t();
                e && V(e.then) && e.then(void 0, ()=>{});
            }
        }
    };
}
var Io = {
    GZipJS: "gzip-js",
    Base64: "base64"
}, Fo = {
    Activation: "events",
    Cancellation: "cancelEvents"
}, Ao = {
    Button: "button",
    Tab: "tab",
    Selector: "selector"
}, Mo = {
    TopLeft: "top_left",
    TopRight: "top_right",
    TopCenter: "top_center",
    MiddleLeft: "middle_left",
    MiddleRight: "middle_right",
    MiddleCenter: "middle_center",
    Left: "left",
    Center: "center",
    Right: "right",
    NextToTrigger: "next_to_trigger"
}, Do = {
    Top: "top",
    Left: "left",
    Right: "right",
    Bottom: "bottom"
}, No = {
    Popover: "popover",
    API: "api",
    Widget: "widget",
    ExternalSurvey: "external_survey"
}, Lo = {
    Open: "open",
    MultipleChoice: "multiple_choice",
    SingleChoice: "single_choice",
    Rating: "rating",
    Link: "link"
}, jo = {
    NextQuestion: "next_question",
    End: "end",
    ResponseBased: "response_based",
    SpecificQuestion: "specific_question"
}, Uo = {
    Once: "once",
    Recurring: "recurring",
    Always: "always"
}, Bo = {
    SHOWN: "survey shown",
    DISMISSED: "survey dismissed",
    SENT: "survey sent",
    ABANDONED: "survey abandoned"
}, zo = {
    SURVEY_ID: "$survey_id",
    SURVEY_NAME: "$survey_name",
    SURVEY_RESPONSE: "$survey_response",
    SURVEY_ITERATION: "$survey_iteration",
    SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date",
    SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed",
    SURVEY_SUBMISSION_ID: "$survey_submission_id",
    SURVEY_QUESTIONS: "$survey_questions",
    SURVEY_COMPLETED: "$survey_completed",
    PRODUCT_TOUR_ID: "$product_tour_id",
    SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date",
    SURVEY_LANGUAGE: "$survey_language"
}, Ho = {
    Popover: "popover",
    Inline: "inline"
}, qo = {
    backgroundColor: "#ffffff",
    textColor: "#1d1f27",
    buttonColor: "#1d1f27",
    borderRadius: 8,
    buttonBorderRadius: 6,
    borderColor: "#e5e7eb",
    fontFamily: "system-ui",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    showOverlay: !0,
    whiteLabel: !1,
    dismissOnClickOutside: !0,
    zIndex: 2147483646
}, Vo = {
    SHOWN: "product tour shown",
    DISMISSED: "product tour dismissed",
    COMPLETED: "product tour completed",
    STEP_SHOWN: "product tour step shown",
    STEP_COMPLETED: "product tour step completed",
    BUTTON_CLICKED: "product tour button clicked",
    STEP_SELECTOR_FAILED: "product tour step selector failed",
    BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed",
    BANNER_ACTION_CLICKED: "product tour banner action clicked"
}, Wo = {
    TOUR_ID: "$product_tour_id",
    TOUR_NAME: "$product_tour_name",
    TOUR_ITERATION: "$product_tour_iteration",
    TOUR_RENDER_REASON: "$product_tour_render_reason",
    TOUR_STEP_ID: "$product_tour_step_id",
    TOUR_STEP_ORDER: "$product_tour_step_order",
    TOUR_STEP_TYPE: "$product_tour_step_type",
    TOUR_DISMISS_REASON: "$product_tour_dismiss_reason",
    TOUR_BUTTON_TEXT: "$product_tour_button_text",
    TOUR_BUTTON_ACTION: "$product_tour_button_action",
    TOUR_BUTTON_LINK: "$product_tour_button_link",
    TOUR_BUTTON_TOUR_ID: "$product_tour_button_tour_id",
    TOUR_STEPS_COUNT: "$product_tour_steps_count",
    TOUR_STEP_SELECTOR: "$product_tour_step_selector",
    TOUR_STEP_SELECTOR_FOUND: "$product_tour_step_selector_found",
    TOUR_STEP_ELEMENT_TAG: "$product_tour_step_element_tag",
    TOUR_STEP_ELEMENT_ID: "$product_tour_step_element_id",
    TOUR_STEP_ELEMENT_CLASSES: "$product_tour_step_element_classes",
    TOUR_STEP_ELEMENT_TEXT: "$product_tour_step_element_text",
    TOUR_ERROR: "$product_tour_error",
    TOUR_MATCHES_COUNT: "$product_tour_matches_count",
    TOUR_FAILURE_PHASE: "$product_tour_failure_phase",
    TOUR_WAITED_FOR_ELEMENT: "$product_tour_waited_for_element",
    TOUR_WAIT_DURATION_MS: "$product_tour_wait_duration_ms",
    TOUR_BANNER_SELECTOR: "$product_tour_banner_selector",
    TOUR_LINKED_SURVEY_ID: "$product_tour_linked_survey_id",
    USE_MANUAL_SELECTOR: "$use_manual_selector",
    INFERENCE_DATA_PRESENT: "$inference_data_present",
    TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date",
    TOUR_TYPE: "$product_tour_type"
}, Go = Be("[RateLimiter]");
class Ko {
    get captureEventsPerSecond() {
        var t;
        return (null == (t = this.instance.config.rate_limiting) ? void 0 : t.events_per_second) || 10;
    }
    get captureEventsBurstLimit() {
        var t;
        return Math.max((null == (t = this.instance.config.rate_limiting) ? void 0 : t.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
    }
    clientRateLimitContext(t) {
        var i, e, r;
        void 0 === t && (t = !1);
        var s = this.captureEventsBurstLimit, n = this.captureEventsPerSecond, o = (new Date).getTime(), a = null !== (i = null == (e = this.instance.persistence) ? void 0 : e.get_property(Br)) && void 0 !== i ? i : {
            tokens: s,
            last: o
        };
        a.tokens += (o - a.last) / 1e3 * n, a.last = o, a.tokens > s && (a.tokens = s);
        var l = 1 > a.tokens;
        if (l || t || (a.tokens = Math.max(0, a.tokens - 1)), l && !t) {
            var h = (Z(a.dropped) ? a.dropped : 0) + 1;
            a.dropped = h, !this.lastEventRateLimited && this.no(h) && (a.dropped = 0);
        }
        return this.lastEventRateLimited = l, null == (r = this.instance.persistence) || r.set_property(Br, a), {
            isRateLimited: l,
            remainingTokens: a.tokens
        };
    }
    so(t) {
        var i = this.instance.config.property_denylist;
        return !q(i) || !i.includes(t);
    }
    ao() {
        var t;
        if (this.so("$current_url") && this.so("$pathname") && null != s && s.pathname) return "" + (null !== (t = s.origin) && void 0 !== t ? t : "") + s.pathname;
    }
    no(t) {
        var i, e, r = this.captureEventsBurstLimit, s = this.captureEventsPerSecond, n = this.ao(), o = this.so("$session_id") ? null == (i = (e = this.instance).get_session_id) ? void 0 : i.call(e) : void 0, a = [
            t + " event(s) dropped since the last warning",
            n ? "triggered on " + n : void 0,
            o ? "session " + o : void 0
        ].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
            $$client_ingestion_warning_message: "posthog-js client rate limited: " + a + ". Config is set to " + s + " events per second and " + r + " events burst limit."
        }, {
            skip_client_rate_limiting: !0
        });
    }
    isServerRateLimited(t) {
        var i = this.serverLimits[t || "events"] || !1;
        return !1 !== i && (new Date).getTime() < i;
    }
    constructor(t){
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (t)=>{
            var i = t.text;
            if (i && i.length) try {
                (JSON.parse(i).quota_limited || []).forEach((t)=>{
                    Go.info((t || "events") + " is quota limited."), this.serverLimits[t] = (new Date).getTime() + 6e4;
                });
            } catch (t) {
                return void Go.warn('could not rate limit - continuing. Error: "' + (null == t ? void 0 : t.message) + '"', {
                    text: i
                });
            }
        }, this.instance = t, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
    }
}
var Jo = Be("[RemoteConfig]");
class Yo {
    get remoteConfig() {
        var t;
        return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.config;
    }
    oo(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.loadExternalDependency ? null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "remote-config", ()=>t(this.remoteConfig)) : t();
    }
    lo(t) {
        this._instance._send_request({
            method: "GET",
            url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
            callback: t
        });
    }
    load() {
        try {
            if (this.remoteConfig) return Jo.info("Using preloaded remote config", this.remoteConfig), void this.uo(this.remoteConfig);
            if (this._instance.ho()) return void Jo.warn("Remote config is disabled. Falling back to local config.");
            this.oo((t)=>{
                if (!t) return Jo.info("No config found after loading remote JS config. Falling back to JSON."), void this.lo((t)=>{
                    this.uo(t.json, t);
                });
                this.uo(t);
            });
        } catch (t) {
            Jo.error("Error loading remote config", t), this.uo();
        }
    }
    uo(t, i) {
        !t && i && (0 === i.statusCode ? i.error || Jo.warn("Failed to fetch remote config from PostHog.") : Jo.error("Failed to fetch remote config from PostHog."));
        try {
            this._instance.uo(t ? {
                ok: !0,
                config: t
            } : {
                ok: !1
            });
        } catch (t) {
            Jo.error("Error applying remote config", t);
        }
        if (!1 !== (null == t ? void 0 : t.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
            var e;
            null == (e = this._instance.featureFlags) || e.ensureFlagsLoaded();
        } catch (t) {
            Jo.error("Error loading feature flags", t);
        }
    }
    constructor(t){
        this._instance = t;
    }
}
var Qo = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
], Xo = Uint8Array, Zo = Uint16Array, ta = Uint32Array, ia = new Xo([
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
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]), ea = new Xo([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]), ra = new Xo([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]), sa = function(t, i) {
    for(var e = new Zo(31), r = 0; 31 > r; ++r)e[r] = i += 1 << t[r - 1];
    var s = new ta(e[30]);
    for(r = 1; 30 > r; ++r)for(var n = e[r]; e[r + 1] > n; ++n)s[n] = n - e[r] << 5 | r;
    return [
        e,
        s
    ];
}, na = sa(ia, 2), oa = na[1];
na[0][28] = 258, oa[258] = 28;
for(var aa = sa(ea, 0)[1], la = new Zo(32768), ha = 0; 32768 > ha; ++ha){
    var ua = (43690 & ha) >>> 1 | (21845 & ha) << 1;
    la[ha] = ((65280 & (ua = (61680 & (ua = (52428 & ua) >>> 2 | (13107 & ua) << 2)) >>> 4 | (3855 & ua) << 4)) >>> 8 | (255 & ua) << 8) >>> 1;
}
var da = function(t, i, e) {
    for(var r = t.length, s = 0, n = new Zo(i); r > s; ++s)++n[t[s] - 1];
    var o, a = new Zo(i);
    for(s = 0; i > s; ++s)a[s] = a[s - 1] + n[s - 1] << 1;
    if (e) {
        o = new Zo(1 << i);
        var l = 15 - i;
        for(s = 0; r > s; ++s)if (t[s]) for(var h = s << 4 | t[s], u = i - t[s], d = a[t[s] - 1]++ << u, v = d | (1 << u) - 1; v >= d; ++d)o[la[d] >>> l] = h;
    } else for(o = new Zo(r), s = 0; r > s; ++s)o[s] = la[a[t[s] - 1]++] >>> 15 - t[s];
    return o;
}, va = new Xo(288);
for(ha = 0; 144 > ha; ++ha)va[ha] = 8;
for(ha = 144; 256 > ha; ++ha)va[ha] = 9;
for(ha = 256; 280 > ha; ++ha)va[ha] = 7;
for(ha = 280; 288 > ha; ++ha)va[ha] = 8;
var ca = new Xo(32);
for(ha = 0; 32 > ha; ++ha)ca[ha] = 5;
var fa = da(va, 9, 0), pa = da(ca, 5, 0), _a = function(t) {
    return (t / 8 >> 0) + (7 & t && 1);
}, ga = function(t, i, e) {
    (null == e || e > t.length) && (e = t.length);
    var r = new (t instanceof Zo ? Zo : t instanceof ta ? ta : Xo)(e - i);
    return r.set(t.subarray(i, e)), r;
}, ma = function(t, i, e) {
    var r = i / 8 >> 0;
    t[r] |= e <<= 7 & i, t[r + 1] |= e >>> 8;
}, ya = function(t, i, e) {
    var r = i / 8 >> 0;
    t[r] |= e <<= 7 & i, t[r + 1] |= e >>> 8, t[r + 2] |= e >>> 16;
}, ba = function(t, i) {
    for(var e = [], r = 0; t.length > r; ++r)t[r] && e.push({
        s: r,
        f: t[r]
    });
    var s = e.length, n = e.slice();
    if (!s) return [
        new Xo(0),
        0
    ];
    if (1 == s) {
        var o = new Xo(e[0].s + 1);
        return o[e[0].s] = 1, [
            o,
            1
        ];
    }
    e.sort(function(t, i) {
        return t.f - i.f;
    }), e.push({
        s: -1,
        f: 25001
    });
    var a = e[0], l = e[1], h = 0, u = 1, d = 2;
    for(e[0] = {
        s: -1,
        f: a.f + l.f,
        l: a,
        r: l
    }; u != s - 1;)a = e[e[d].f > e[h].f ? h++ : d++], l = e[h != u && e[d].f > e[h].f ? h++ : d++], e[u++] = {
        s: -1,
        f: a.f + l.f,
        l: a,
        r: l
    };
    var v = n[0].s;
    for(r = 1; s > r; ++r)n[r].s > v && (v = n[r].s);
    var c = new Zo(v + 1), f = wa(e[u - 1], c, 0);
    if (f > i) {
        r = 0;
        var p = 0, _ = f - i, g = 1 << _;
        for(n.sort(function(t, i) {
            return c[i.s] - c[t.s] || t.f - i.f;
        }); s > r; ++r){
            var m = n[r].s;
            if (i >= c[m]) break;
            p += g - (1 << f - c[m]), c[m] = i;
        }
        for(p >>>= _; p > 0;){
            var y = n[r].s;
            i > c[y] ? p -= 1 << i - c[y]++ - 1 : ++r;
        }
        for(; r >= 0 && p; --r){
            var b = n[r].s;
            c[b] == i && (--c[b], ++p);
        }
        f = i;
    }
    return [
        new Xo(c),
        f
    ];
}, wa = function(t, i, e) {
    return -1 == t.s ? Math.max(wa(t.l, i, e + 1), wa(t.r, i, e + 1)) : i[t.s] = e;
}, Sa = function(t) {
    for(var i = t.length; i && !t[--i];);
    for(var e = new Zo(++i), r = 0, s = t[0], n = 1, o = function(t) {
        e[r++] = t;
    }, a = 1; i >= a; ++a)if (t[a] == s && a != i) ++n;
    else {
        if (!s && n > 2) {
            for(; n > 138; n -= 138)o(32754);
            n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0);
        } else if (n > 3) {
            for(o(s), --n; n > 6; n -= 6)o(8304);
            n > 2 && (o(n - 3 << 5 | 8208), n = 0);
        }
        for(; n--;)o(s);
        n = 1, s = t[a];
    }
    return [
        e.subarray(0, r),
        i
    ];
}, xa = function(t, i) {
    for(var e = 0, r = 0; i.length > r; ++r)e += t[r] * i[r];
    return e;
}, Ea = function(t, i, e) {
    var r = e.length, s = _a(i + 2);
    t[s] = 255 & r, t[s + 1] = r >>> 8, t[s + 2] = 255 ^ t[s], t[s + 3] = 255 ^ t[s + 1];
    for(var n = 0; r > n; ++n)t[s + n + 4] = e[n];
    return 8 * (s + 4 + r);
}, ka = function(t, i, e, r, s, n, o, a, l, h, u) {
    ma(i, u++, e), ++s[256];
    for(var d = ba(s, 15), v = d[0], c = d[1], f = ba(n, 15), p = f[0], _ = f[1], g = Sa(v), m = g[0], y = g[1], b = Sa(p), w = b[0], S = b[1], x = new Zo(19), E = 0; m.length > E; ++E)x[31 & m[E]]++;
    for(E = 0; w.length > E; ++E)x[31 & w[E]]++;
    for(var k = ba(x, 7), T = k[0], P = k[1], R = 19; R > 4 && !T[ra[R - 1]]; --R);
    var C, O, I, F, A = h + 5 << 3, M = xa(s, va) + xa(n, ca) + o, D = xa(s, v) + xa(n, p) + o + 14 + 3 * R + xa(x, T) + (2 * x[16] + 3 * x[17] + 7 * x[18]);
    if (M >= A && D >= A) return Ea(i, u, t.subarray(l, l + h));
    if (ma(i, u, 1 + (M > D)), u += 2, M > D) {
        C = da(v, c, 0), O = v, I = da(p, _, 0), F = p;
        var N = da(T, P, 0);
        for(ma(i, u, y - 257), ma(i, u + 5, S - 1), ma(i, u + 10, R - 4), u += 14, E = 0; R > E; ++E)ma(i, u + 3 * E, T[ra[E]]);
        u += 3 * R;
        for(var L = [
            m,
            w
        ], j = 0; 2 > j; ++j){
            var U = L[j];
            for(E = 0; U.length > E; ++E)ma(i, u, N[B = 31 & U[E]]), u += T[B], B > 15 && (ma(i, u, U[E] >>> 5 & 127), u += U[E] >>> 12);
        }
    } else C = fa, O = va, I = pa, F = ca;
    for(E = 0; a > E; ++E)if (r[E] > 255) {
        var B;
        ya(i, u, C[257 + (B = r[E] >>> 18 & 31)]), u += O[B + 257], B > 7 && (ma(i, u, r[E] >>> 23 & 31), u += ia[B]);
        var z = 31 & r[E];
        ya(i, u, I[z]), u += F[z], z > 3 && (ya(i, u, r[E] >>> 5 & 8191), u += ea[z]);
    } else ya(i, u, C[r[E]]), u += O[r[E]];
    return ya(i, u, C[256]), u + O[256];
}, Ta = new ta([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]), $a = function() {
    for(var t = new ta(256), i = 0; 256 > i; ++i){
        for(var e = i, r = 9; --r;)e = (1 & e && 3988292384) ^ e >>> 1;
        t[i] = e;
    }
    return t;
}(), Pa = function(t, i, e) {
    for(; e; ++i)t[i] = e, e >>>= 8;
};
function Ra(t, i) {
    void 0 === i && (i = {});
    var e = function() {
        var t = 4294967295;
        return {
            p (i) {
                for(var e = t, r = 0; i.length > r; ++r)e = $a[255 & e ^ i[r]] ^ e >>> 8;
                t = e;
            },
            d () {
                return 4294967295 ^ t;
            }
        };
    }(), r = t.length;
    e.p(t);
    var s, n, o, a, l, h = (a = 10 + ((s = i).filename && s.filename.length + 1 || 0), l = 8, function(t, i, e, r, s, n) {
        var o = t.length, a = new Xo(r + o + 5 * (1 + Math.floor(o / 7e3)) + s), l = a.subarray(r, a.length - s), h = 0;
        if (!i || 8 > o) for(var u = 0; o >= u; u += 65535){
            var d = u + 65535;
            o > d ? h = Ea(l, h, t.subarray(u, d)) : (l[u] = !0, h = Ea(l, h, t.subarray(u, o)));
        }
        else {
            for(var v = Ta[i - 1], c = v >>> 13, f = 8191 & v, p = (1 << e) - 1, _ = new Zo(32768), g = new Zo(p + 1), m = Math.ceil(e / 3), y = 2 * m, b = function(i) {
                return (t[i] ^ t[i + 1] << m ^ t[i + 2] << y) & p;
            }, w = new ta(25e3), S = new Zo(288), x = new Zo(32), E = 0, k = 0, T = (u = 0, 0), P = 0, R = 0; o > u; ++u){
                var C = b(u), O = 32767 & u, I = g[C];
                if (_[O] = I, g[C] = O, u >= P) {
                    var F = o - u;
                    if ((E > 7e3 || T > 24576) && F > 423) {
                        h = ka(t, l, 0, w, S, x, k, T, R, u - R, h), T = E = k = 0, R = u;
                        for(var A = 0; 286 > A; ++A)S[A] = 0;
                        for(A = 0; 30 > A; ++A)x[A] = 0;
                    }
                    var M = 2, D = 0, N = f, L = O - I & 32767;
                    if (F > 2 && C == b(u - L)) for(var j = Math.min(c, F) - 1, U = Math.min(32767, u), B = Math.min(258, F); U >= L && --N && O != I;){
                        if (t[u + M] == t[u + M - L]) {
                            for(var z = 0; B > z && t[u + z] == t[u + z - L]; ++z);
                            if (z > M) {
                                if (M = z, D = L, z > j) break;
                                var H = Math.min(L, z - 2), q = 0;
                                for(A = 0; H > A; ++A){
                                    var V = u - L + A + 32768 & 32767, W = V - _[V] + 32768 & 32767;
                                    W > q && (q = W, I = V);
                                }
                            }
                        }
                        L += (O = I) - (I = _[O]) + 32768 & 32767;
                    }
                    if (D) {
                        w[T++] = 268435456 | oa[M] << 18 | aa[D];
                        var G = 31 & oa[M], K = 31 & aa[D];
                        k += ia[G] + ea[K], ++S[257 + G], ++x[K], P = u + M, ++E;
                    } else w[T++] = t[u], ++S[t[u]];
                }
            }
            h = ka(t, l, !0, w, S, x, k, T, R, u - R, h);
        }
        return ga(a, 0, r + _a(h) + s);
    }(n = t, null == (o = i).level ? 6 : o.level, null == o.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(n.length)))) : 12 + o.mem, a, l)), u = h.length;
    return function(t, i) {
        var e = i.filename;
        if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = 2 > i.level ? 4 : 9 == i.level ? 2 : 0, t[9] = 3, 0 != i.mtime && Pa(t, 4, Math.floor(new Date(i.mtime || Date.now()) / 1e3)), e) {
            t[3] = 8;
            for(var r = 0; e.length >= r; ++r)t[r + 10] = e.charCodeAt(r);
        }
    }(h, i), Pa(h, u - 8, e.d()), Pa(h, u - 4, r), h;
}
var Ca = !!o || !!n, Oa = "text/plain", Ia = !1, Fa = (t, i)=>{
    var e = t.split("#"), r = e[1], s = e[0].split("?"), n = s[0], o = s[1];
    if (!o) return t;
    var a = o.split("&").filter((t)=>t.split("=")[0] !== i).join("&");
    return n + (a ? "?" + a : "") + (r ? "#" + r : "");
}, Aa = function(t, i, e) {
    var r;
    void 0 === e && (e = !0);
    var s = t.split("?"), n = s[0], o = s[1], a = _({}, i), l = null !== (r = null == o ? void 0 : o.split("&").map((t)=>{
        var i, r = t.split("="), s = r[0], n = e && null !== (i = a[s]) && void 0 !== i ? i : r[1];
        return delete a[s], s + "=" + n;
    })) && void 0 !== r ? r : [], h = function(t, i) {
        var e, r;
        void 0 === i && (i = "&");
        var s = [];
        return us(t, function(t, i) {
            K(t) || K(i) || "undefined" === i || (e = encodeURIComponent(((t)=>t instanceof File)(t) ? t.name : t.toString()), r = encodeURIComponent(i), s[s.length] = r + "=" + e);
        }), s.join(i);
    }(a);
    return h && l.push(h), l.length > 0 ? n + "?" + l.join("&") : n;
}, Ma = (t)=>{
    if (t.do) return t.do;
    var i = t.data, e = t.compression;
    if (i) {
        if (e === Io.GZipJS) {
            var r = Ra(function(t, i) {
                var e = t.length;
                if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(t);
                for(var r = new Xo(t.length + (t.length >>> 1)), s = 0, n = function(t) {
                    r[s++] = t;
                }, o = 0; e > o; ++o){
                    if (s + 5 > r.length) {
                        var a = new Xo(s + 8 + (e - o << 1));
                        a.set(r), r = a;
                    }
                    var l = t.charCodeAt(o);
                    128 > l ? n(l) : 2048 > l ? (n(192 | l >>> 6), n(128 | 63 & l)) : l > 55295 && 57344 > l ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & t.charCodeAt(++o)) >>> 18), n(128 | l >>> 12 & 63), n(128 | l >>> 6 & 63), n(128 | 63 & l)) : (n(224 | l >>> 12), n(128 | l >>> 6 & 63), n(128 | 63 & l));
                }
                return ga(r, 0, s);
            }(Xn(i)), {
                mtime: 0
            });
            return {
                contentType: Oa,
                body: r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength),
                estimatedSize: r.byteLength
            };
        }
        if (e === Io.Base64) {
            var s = function(t) {
                return t ? btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (t, i)=>String.fromCharCode(parseInt(i, 16)))) : t;
            }(Xn(i)), n = ((t)=>"data=" + encodeURIComponent("string" == typeof t ? t : Xn(t)))(s);
            return {
                contentType: "application/x-www-form-urlencoded",
                body: n,
                estimatedSize: new Blob([
                    n
                ]).size
            };
        }
        var o = Xn(i);
        return {
            contentType: "application/json",
            body: o,
            estimatedSize: new Blob([
                o
            ]).size
        };
    }
}, Da = (t)=>{
    var i, e, r = ()=>"sendBeacon" === t.transport ? {
            url: Aa(t.url, {
                compression: Io.Base64
            }),
            encodedBody: Ma(_({}, t, {
                compression: Io.Base64,
                do: void 0
            }))
        } : {
            url: Fa(t.url, "compression"),
            encodedBody: Ma(_({}, t, {
                compression: void 0,
                do: void 0
            }))
        };
    try {
        i = Ma(t);
    } catch (i) {
        if (Ai(t.compression, to(t.url, "compression"))) return Ue.error("Failed to gzip request body, sending uncompressed payload", i), r();
        throw i;
    }
    return i && Ai(t.compression, to(t.url, "compression")) && !((e = i.body) instanceof ArrayBuffer ? Fi(new Uint8Array(e)) : ArrayBuffer.isView(e) && Fi(new Uint8Array(e.buffer, e.byteOffset, e.byteLength))) ? (Ia = !0, r()) : {
        url: t.url,
        encodedBody: i
    };
}, Na = (t)=>{
    try {
        return Da(t);
    } catch (i) {
        return Ue.error(i), void (null == t.callback || t.callback({
            statusCode: 0,
            error: i
        }));
    }
}, La = function() {
    var t = p(function*(t) {
        var i = Xn(t.data), e = yield function(t, i, e) {
            return Li.apply(this, arguments);
        }(i, c.DEBUG, {
            rethrow: !0
        });
        if (!e) return t;
        var r = yield e.arrayBuffer();
        return _({}, t, {
            do: {
                contentType: Oa,
                body: r,
                estimatedSize: r.byteLength
            }
        });
    });
    return function(i) {
        return t.apply(this, arguments);
    };
}(), ja = /Failed to fetch|NetworkError|Load failed/i, Ua = (t)=>"TypeError" === (null == t ? void 0 : t.name) && ja.test((null == t ? void 0 : t.message) || ""), Ba = (t)=>{
    var i = Na(t);
    if (i) {
        var e = i.url, r = i.encodedBody, s = null != r ? r : {}, o = s.contentType, l = s.body, h = s.estimatedSize, u = new Headers;
        us(t.headers, function(t, i) {
            u.append(i, t);
        }), o && u.append("Content-Type", o);
        var d = null, v = !1;
        if (a) {
            var c = new a;
            d = {
                signal: c.signal,
                timeout: setTimeout(()=>{
                    var i;
                    v = !0, c.abort(Ti("AbortError", "PostHog request timed out" + ((i = t.timeout) ? " after " + i + "ms" : "")));
                }, t.timeout)
            };
        }
        var f = (i)=>{
            v && "AbortError" === (null == i ? void 0 : i.name) || Ua(i) ? Ue.warn(i) : Ue.error(i), null == t.callback || t.callback({
                statusCode: 0,
                error: i
            });
        };
        try {
            var p;
            n(e, _({
                method: (null == t ? void 0 : t.method) || "GET",
                headers: u,
                keepalive: "POST" === t.method && !t.vo && 52428.8 > (h || 0),
                body: l,
                signal: null == (p = d) ? void 0 : p.signal
            }, t.fetchOptions)).then((i)=>i.text().then((e)=>{
                    var r = {
                        statusCode: i.status,
                        text: e
                    };
                    if (200 === i.status) try {
                        r.json = JSON.parse(e);
                    } catch (t) {
                        Ue.error(t);
                    }
                    null == t.callback || t.callback(r);
                })).catch(f).finally(()=>d ? clearTimeout(d.timeout) : null);
        } catch (t) {
            d && clearTimeout(d.timeout), f(t);
        }
    }
}, za = (t)=>{
    try {
        var i, r = Da(t), s = r.url, n = r.encodedBody, o = null != n ? n : {}, a = o.body, l = o.estimatedSize;
        if (!a) return;
        var h = a instanceof Blob ? a : new Blob([
            a
        ], {
            type: o.contentType
        });
        if (e.sendBeacon(s, h)) return;
        var u = q(t.data) ? t.data : null == (i = t.data) ? void 0 : i.batch;
        if (q(u) && u.length > 1 && (null != l ? l : 0) > 16384) {
            var d = Math.ceil(u.length / 2), v = (i)=>q(t.data) ? i : _({}, t.data, {
                    batch: i
                });
            return za(_({}, t, {
                data: v(u.slice(0, d))
            })), void za(_({}, t, {
                data: v(u.slice(d))
            }));
        }
        Ue.warn("Beacon of ~" + (null != l ? l : 0) + " bytes was rejected by the browser, falling back to fetch"), Ba(_({}, t, {
            vo: !0
        }));
    } catch (t) {
        Ue.warn("Beacon send failed", t);
    }
}, Ha = (t, i, e, r)=>{
    var s = "query" === r ? "POST" === i ? "sent_at" : "_" : void 0;
    return Aa(e === Io.GZipJS ? Fa(t, "compression") : t, _({}, s ? {
        [s]: Date.now().toString()
    } : {}, e === Io.GZipJS ? {} : {
        compression: e
    }));
}, qa = [];
n && qa.push({
    transport: "fetch",
    method: Ba
}), o && qa.push({
    transport: "XHR",
    method (t) {
        var i = Na(t);
        if (i) {
            var e = new o, r = i.encodedBody;
            e.open(t.method || "GET", i.url, !0);
            var s = null != r ? r : {}, n = s.contentType, a = s.body;
            us(t.headers, function(t, i) {
                e.setRequestHeader(i, t);
            }), n && e.setRequestHeader("Content-Type", n), t.timeout && (e.timeout = t.timeout), e.onreadystatechange = ()=>{
                if (4 === e.readyState) {
                    var i = {
                        statusCode: e.status,
                        text: e.responseText
                    };
                    if (200 === e.status) try {
                        i.json = JSON.parse(e.responseText);
                    } catch (t) {}
                    null == t.callback || t.callback(i);
                }
            }, e.send(a);
        }
    }
}), null != e && e.sendBeacon && qa.push({
    transport: "sendBeacon",
    method: za
});
var Va = 3e3;
class Wa {
    enqueue(t) {
        this.fo.push(t), this.yo || this.bo();
    }
    unload() {
        this._o();
        var t = this.fo.length > 0 ? this.wo() : {}, i = Object.values(t);
        [
            ...i.filter((t)=>0 === t.url.indexOf("/e")),
            ...i.filter((t)=>0 !== t.url.indexOf("/e"))
        ].map((t)=>{
            this.ko(_({}, t, {
                transport: "sendBeacon"
            }));
        });
    }
    enable() {
        this.co = !1, this.bo();
    }
    bo() {
        var t = this;
        this.co || (this.yo = setTimeout(()=>{
            if (this._o(), this.fo.length > 0) {
                var i = this.wo(), e = function() {
                    var e = i[r], s = (new Date).getTime();
                    e.data && q(e.data) && us(e.data, (t)=>{
                        t.offset = Math.abs(t.timestamp - s), delete t.timestamp;
                    }), t.ko(e);
                };
                for(var r in i)e();
            }
        }, this.po));
    }
    ko(t) {
        try {
            this.mo(t);
        } catch (t) {
            Ue.error(t);
        }
    }
    _o() {
        clearTimeout(this.yo), this.yo = void 0;
    }
    wo() {
        var t = {};
        return us(this.fo, (i)=>{
            var e, r = i, s = (r ? r.batchKey : null) || r.url;
            K(t[s]) && (t[s] = _({}, r, {
                data: []
            })), null == (e = t[s].data) || e.push(r.data);
        }), this.fo = [], t;
    }
    constructor(t, i){
        this.co = !0, this.fo = [], this.po = ct((null == i ? void 0 : i.flush_interval_ms) || Va, 250, 5e3, Ue.createLogger("flush interval"), Va), this.mo = t;
    }
}
var Ga = [
    "retriesPerformedSoFar"
];
class Ka {
    get length() {
        return this.fo.length;
    }
    retriableRequest(t) {
        var i = t.retriesPerformedSoFar, e = g(t, Ga);
        tt(i) && (e.url = Aa(e.url, {
            retry_count: i
        })), this._instance._send_request(_({}, e, {
            callback: (t)=>{
                if (200 !== t.statusCode && (400 > t.statusCode || t.statusCode >= 500)) {
                    if ((0 === t.statusCode ? 3 : 10) > (null != i ? i : 0)) return void this.es(_({
                        retriesPerformedSoFar: i
                    }, e));
                    0 === t.statusCode && Ue.warn("Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after " + (null != i ? i : 0) + " retries.");
                }
                null == e.callback || e.callback(t);
            }
        }));
    }
    es(t) {
        var i = t.retriesPerformedSoFar || 0;
        t.retriesPerformedSoFar = i + 1;
        var e = function(t) {
            var i = 3e3 * Math.pow(2, t), e = i / 2, r = Math.min(18e5, i), s = Math.random() - .5;
            return Math.ceil(r + s * (r - e));
        }(i), r = Date.now() + e;
        this.fo.push({
            retryAt: r,
            requestOptions: t
        });
        var s = "Enqueued failed request for retry in " + e;
        navigator.onLine || (s += " (Browser is offline)"), Ue.warn(s), this.So || (this.So = !0, this.Io());
    }
    Io() {
        if (this.Ro && clearTimeout(this.Ro), 0 === this.fo.length) return this.So = !1, void (this.Ro = void 0);
        this.Ro = setTimeout(()=>{
            this.Co && this.fo.length > 0 && this.Mo(), this.Io();
        }, this.xo);
    }
    Mo() {
        var t = Date.now(), i = [], e = this.fo.filter((e)=>t > e.retryAt || (i.push(e), !1));
        if (this.fo = i, e.length > 0) for (var r of e)this.retriableRequest(r.requestOptions);
    }
    unload() {
        for (var i of (this.Ro && (clearTimeout(this.Ro), this.Ro = void 0), this.So = !1, K(t) || (this.To && (t.removeEventListener("online", this.To), this.To = void 0), this.Eo && (t.removeEventListener("offline", this.Eo), this.Eo = void 0)), this.fo)){
            var e = i.requestOptions;
            try {
                this._instance._send_request(_({}, e, {
                    transport: "sendBeacon"
                }));
            } catch (t) {
                Ue.error(t);
            }
        }
        this.fo = [];
    }
    constructor(i){
        this.So = !1, this.xo = 3e3, this.fo = [], this._instance = i, this.fo = [], this.Co = !0, !K(t) && "onLine" in t.navigator && (this.Co = t.navigator.onLine, this.To = ()=>{
            this.Co = !0, this.Mo();
        }, this.Eo = ()=>{
            this.Co = !1;
        }, ms(t, "online", this.To), ms(t, "offline", this.Eo));
    }
}
class Ja {
    get Fo() {
        return this._instance.config.scroll_root_selector;
    }
    getContext() {
        return this.Ao;
    }
    resetContext() {
        var t = this.Ao;
        return setTimeout(this.Po, 0), t;
    }
    startMeasuringScrollPosition() {
        ms(t, "scroll", this.Po, {
            capture: !0
        }), ms(t, "scrollend", this.Po, {
            capture: !0
        }), ms(t, "resize", this.Po);
    }
    scrollElement() {
        if (!this.Fo) return null == t ? void 0 : t.document.documentElement;
        var i = q(this.Fo) ? this.Fo : [
            this.Fo
        ];
        for (var e of i){
            var r = null == t ? void 0 : t.document.querySelector(e);
            if (r) return r;
        }
    }
    Oo(i) {
        var e = "y" === i ? "scrollTop" : "scrollLeft";
        if (this.Fo) {
            var r = this.scrollElement();
            return r && r[e] || 0;
        }
        return t ? "y" === i ? t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop || 0 : t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft || 0 : 0;
    }
    scrollY() {
        return this.Oo("y");
    }
    scrollX() {
        return this.Oo("x");
    }
    constructor(t){
        this.Po = ()=>{
            var t, i, e, r;
            this.Ao || (this.Ao = {});
            var s = this.scrollElement(), n = this.scrollY(), o = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, a = n + ((null == s ? void 0 : s.clientHeight) || 0), l = (null == s ? void 0 : s.scrollHeight) || 0;
            this.Ao.lastScrollY = Math.ceil(n), this.Ao.maxScrollY = Math.max(n, null !== (t = this.Ao.maxScrollY) && void 0 !== t ? t : 0), this.Ao.maxScrollHeight = Math.max(o, null !== (i = this.Ao.maxScrollHeight) && void 0 !== i ? i : 0), this.Ao.lastContentY = a, this.Ao.maxContentY = Math.max(a, null !== (e = this.Ao.maxContentY) && void 0 !== e ? e : 0), this.Ao.maxContentHeight = Math.max(l, null !== (r = this.Ao.maxContentHeight) && void 0 !== r ? r : 0);
        }, this._instance = t;
    }
}
var Ya = (t)=>go(null == t ? void 0 : t.config.mask_personal_data_properties, null == t ? void 0 : t.config.custom_personal_data_properties, null == t ? void 0 : t.config.disable_capture_url_hashes);
class Qa {
    Lo() {
        return this.$o.props[Ur];
    }
    getSetOnceProps() {
        var t, i = null == (t = this.Lo()) ? void 0 : t.props;
        return i ? "r" in i ? mo(i, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: i.referringDomain,
            $pathname: i.initialPathName,
            utm_source: i.utm_source,
            utm_campaign: i.utm_campaign,
            utm_medium: i.utm_medium,
            utm_content: i.utm_content,
            utm_term: i.utm_term
        } : {};
    }
    getSessionProps() {
        var t = {};
        return us(ps(this.getSetOnceProps()), (i, e)=>{
            "$current_url" === e && (e = "url"), t["$session_entry_" + j(e)] = i;
        }), t;
    }
    constructor(t, i, e, r){
        this.Tt = (t)=>{
            var i = this.Lo();
            if (!i || i.sessionId !== t) {
                var e = {
                    sessionId: t,
                    props: this.Do(this._instance)
                };
                this.$o.register({
                    [Ur]: e
                });
            }
        }, this._instance = t, this.No = i, this.$o = e, this.Do = r || Ya, this.No.onSessionId(this.Tt);
    }
}
class Xa {
    on(t, i) {
        return this.qo[t] || (this.qo[t] = []), this.qo[t].push(i), ()=>{
            this.qo[t] = this.qo[t].filter((t)=>t !== i);
        };
    }
    emit(t, i) {
        for (var e of this.qo[t] || [])e(i);
        for (var r of this.qo["*"] || [])r(t, i);
    }
    constructor(){
        this.qo = {};
    }
}
var Za = Be("[SessionId]"), tl = 864e5;
class il {
    on(t, i) {
        return this.jo.on(t, i);
    }
    get sessionTimeoutMs() {
        return this._sessionTimeoutMs;
    }
    onSessionId(t) {
        return K(this.zo) && (this.zo = []), this.zo.push(t), this.Pe && t(this.Pe, this.It), ()=>{
            this.zo = this.zo.filter((i)=>i !== t);
        };
    }
    Xo() {
        return "memory" !== this.gn.persistence && !this.$o.xa && Gs.ri();
    }
    el(t) {
        t !== this.It && (this.It = t, this.Xo() && Gs.ii(this.Ko, t));
    }
    il() {
        return this.It ? this.It : this.Xo() ? Gs.si(this.Ko) : null;
    }
    rl(t) {
        var i = this.Bo;
        return !Q(i) && !Q(t) && 5e3 > Math.abs(t - i);
    }
    nl(t, i, e) {
        var r = i !== this._sessionActivityTimestamp, s = !(t !== this.Pe || e !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = e, this._sessionActivityTimestamp = i, this.Pe = t, s && !r || s && this.rl(i) || (this.Bo = i, this.$o.register({
            [pr]: [
                i,
                t,
                e
            ]
        }));
    }
    sl() {
        var t, i = null == (t = this.gn) ? void 0 : t.persistence_save_debounce_ms;
        return tt(i) && i > 0;
    }
    al() {
        this.sl() ? this.$o.refreshKey(pr) : (this.$o.flush(), this.$o.load());
    }
    ol() {
        var t;
        if (!Q(this._sessionActivityTimestamp) && this._sessionActivityTimestamp !== this.Bo) {
            this.al();
            var i = this.ll();
            i[1] === this.Pe && i[2] === this._sessionStartTimestamp && (this.Bo = this._sessionActivityTimestamp, this.$o.register({
                [pr]: [
                    this._sessionActivityTimestamp,
                    null !== (t = this.Pe) && void 0 !== t ? t : null,
                    this._sessionStartTimestamp
                ]
            }), this.$o.flush());
        }
    }
    ul() {
        var t = this.ll()[0], i = tt(t) ? t : 0, e = tt(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(i, e);
    }
    hl(t) {
        return this.al(), this.Vo(t, this.ul());
    }
    ll() {
        var t = this.$o.props[pr];
        return q(t) && 2 === t.length && t.push(t[0]), t || [
            0,
            null,
            0
        ];
    }
    resetSessionId() {
        this.Bo = null, this.Go = void 0, clearTimeout(this.dl), this.dl = void 0, this.nl(null, null, null);
    }
    setBootstrapSessionId(t, i) {
        void 0 === i && (i = !1);
        var e = function(t, i) {
            void 0 === i && (i = (new Date).getTime());
            try {
                var e = ((t)=>{
                    var i = t.replace(/-/g, "");
                    if (32 !== i.length) throw new Error("Not a valid UUID");
                    if ("7" !== i[12]) throw new Error("Not a UUIDv7");
                    return parseInt(i.substring(0, 12), 16);
                })(t);
                return e > i + 6e4 ? void Za.error("Bootstrap sessionID cannot be in the future") : e;
            } catch (t) {
                return void Za.error("Invalid sessionID in bootstrap", t);
            }
        }(t);
        return !K(e) && (i ? this.Go = {
            sessionId: t,
            sessionStartTimestamp: e
        } : this.nl(t, (new Date).getTime(), e), !0);
    }
    destroy() {
        this.Wo = !0, this.ol(), clearTimeout(this.dl), this.dl = void 0, this.Uo && t && (t.removeEventListener(ss, this.Uo, {
            capture: !1
        }), this.Uo = void 0), this.zo = [];
    }
    tl() {
        this.Uo = ()=>{
            this.ol(), this.Xo() && Gs.ai(this.Yo);
        }, ms(t, ss, this.Uo, {
            capture: !1
        });
    }
    checkAndGetSessionAndWindowId(t, i, e) {
        if (void 0 === t && (t = !1), void 0 === i && (i = null), void 0 === e && (e = !1), this.gn.cookieless_mode === Zr) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        var r = i || (new Date).getTime(), s = this.Pe;
        if (e) this.Ho = r;
        else if (Q(this.Ho) || this.Ho > r || r - this.Ho >= 1e3) {
            var n, o;
            null == (n = (o = this.$o).syncCookieProperties) || n.call(o), this.Ho = r;
        }
        var a = this.ll(), l = a[1], h = a[2], u = !K(s) && l !== s, d = this.ul(), v = this.il(), c = this.Go, f = !!c && (c.sessionStartTimestamp > r + 6e4 || r - c.sessionStartTimestamp > tl), p = c ? f : tt(h) && Math.abs(r - h) > tl, _ = !1, g = u, m = !l || !!c, y = l, b = !m && !t && this.Vo(r, d);
        if (b) {
            (b = this.hl(r)) || Za.info("cross-tab refresh kept the session alive", {
                sessionId: l
            });
            var w = this.ll();
            l = w[1], h = w[2];
        }
        if (m || b || p) {
            g = !1;
            var S = c && !f;
            l = S ? c.sessionId : this.Zo(), v = this.Qo(), Za.info("new session ID assigned", {
                sessionId: l,
                windowId: v,
                bootstrapped: !!S,
                changeReason: {
                    noSessionId: m,
                    activityTimeout: b,
                    sessionPastMaximumLength: p
                }
            }), h = S ? c.sessionStartTimestamp : r, this.Go = void 0, _ = !0;
        } else v || (v = this.Qo(), _ = !0), (g = g || l !== y) && (Za.info("adopted cross-tab session id", {
            sessionId: l,
            windowId: v
        }), _ = !0);
        var x = tt(d) && t && !p ? d : r, E = tt(h) ? h : (new Date).getTime();
        this.el(v), this.nl(l, x, E), t || this.Jo();
        var k = {
            noSessionId: m,
            activityTimeout: b,
            sessionPastMaximumLength: p,
            crossTabAdoption: g
        };
        return _ && this.zo.forEach((t)=>t(l, v, k)), {
            sessionId: l,
            windowId: v,
            sessionStartTimestamp: E,
            changeReason: _ ? k : void 0,
            lastActivityTimestamp: d
        };
    }
    Jo() {
        this.Wo || (clearTimeout(this.dl), this.dl = setTimeout(()=>{
            if (!this.Wo) if (this.hl((new Date).getTime())) {
                var t = this.Pe;
                this.resetSessionId(), this.jo.emit("forcedIdleReset", {
                    idleSessionId: t
                });
            } else this.Jo();
        }, 1.1 * this.sessionTimeoutMs));
    }
    constructor(t, i, e){
        var r;
        if (this.Bo = null, this.Ho = null, this.zo = [], this.Uo = void 0, this.Wo = !1, this.jo = new Xa, this.Vo = (t, i)=>!(!tt(t) || !tt(i)) && Math.abs(t - i) > this.sessionTimeoutMs, !t.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if (t.config.cookieless_mode === Zr) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this.gn = t.config, this.$o = t.persistence, this.It = void 0, this.Pe = void 0, this._sessionStartTimestamp = null, this.Go = void 0, this._sessionActivityTimestamp = null, this.Zo = i || Ts, this.Qo = e || Ts;
        var s = this.gn.persistence_name || this.gn.token;
        if (this._sessionTimeoutMs = 1e3 * ct(this.gn.session_idle_timeout_seconds || 1800, 60, 36e3, Za.createLogger("session_idle_timeout_seconds"), 1800), t.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
        }), this.Jo(), this.Ko = "ph_" + s + "_window_id", this.Yo = "ph_" + s + "_primary_window_exists", this.Xo()) {
            var n = Gs.si(this.Ko), o = Gs.si(this.Yo);
            n && !o ? this.It = n : Gs.ai(this.Ko), Gs.ii(this.Yo, !0);
        }
        null != (r = this.gn.bootstrap) && r.sessionID && this.setBootstrapSessionId(this.gn.bootstrap.sessionID), this.tl();
    }
}
var el = function(t, i) {
    if (!t) return !1;
    var e = t.userAgent;
    if (e && D(e, i)) return !0;
    try {
        var r = null == t ? void 0 : t.userAgentData;
        if (null != r && r.brands && r.brands.some((t)=>D(null == t ? void 0 : t.brand, i))) return !0;
    } catch (t) {}
    return !!t.webdriver;
};
function rl() {
    return (rl = p(function*() {
        var t = null == e ? void 0 : e.userAgentData;
        if (null != t && t.getHighEntropyValues) try {
            var i = yield t.getHighEntropyValues([
                "model"
            ]), r = null == i ? void 0 : i.model;
            return J(r) && r.length > 0 ? r : void 0;
        } catch (t) {
            return void Ue.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", t);
        }
    })).apply(this, arguments);
}
function sl(t) {
    var i;
    return !(null == (i = t.conditions) || null == (i = i.events) || null == (i = i.values) || !i.length);
}
var nl = (t, i)=>{
    if (!((t)=>{
        try {
            new RegExp(t);
        } catch (t) {
            return !1;
        }
        return !0;
    })(i)) return !1;
    try {
        return new RegExp(i).test(t);
    } catch (t) {
        return !1;
    }
}, ol = (t)=>t.toLowerCase(), al = {
    exact: (t, i)=>i.some((i)=>t.some((t)=>i === t)),
    is_not: (t, i)=>i.every((i)=>t.every((t)=>i !== t)),
    regex: (t, i)=>i.some((i)=>t.some((t)=>nl(i, t))),
    not_regex: (t, i)=>i.every((i)=>t.every((t)=>!nl(i, t))),
    icontains: (t, i)=>i.map(ol).some((i)=>t.map(ol).some((t)=>i.includes(t))),
    not_icontains: (t, i)=>i.map(ol).every((i)=>t.map(ol).every((t)=>!i.includes(t))),
    gt: (t, i)=>i.some((i)=>{
            var e = parseFloat(i);
            return !isNaN(e) && t.some((t)=>e > parseFloat(t));
        }),
    lt: (t, i)=>i.some((i)=>{
            var e = parseFloat(i);
            return !isNaN(e) && t.some((t)=>e < parseFloat(t));
        })
};
function ll(t, i) {
    return !t || Object.entries(t).every((t)=>{
        var e = t[1], r = null == i ? void 0 : i[t[0]];
        if (null == r) return !1;
        var s = al[e.operator];
        return !!s && s(e.values, [
            String(r)
        ]);
    });
}
function hl(t, i, e) {
    return Xn({
        distinct_id: t,
        userPropertiesToSet: i,
        userPropertiesToSetOnce: e
    });
}
var ul = "custom", dl = "i.posthog.com", vl = /^\/static\//, cl = [
    "/s/",
    "/e/",
    "/i/"
];
class fl {
    get apiHost() {
        var t = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === t ? "https://us.i.posthog.com" : t;
    }
    get flagsApiHost() {
        var t = this.instance.config.flags_api_host;
        return t ? t.trim().replace(/\/$/, "") : this.apiHost;
    }
    get uiHost() {
        var t, i = null == (t = this.instance.config.ui_host) ? void 0 : t.replace(/\/$/, "");
        return i || (i = this.apiHost.replace("." + dl, ".posthog.com")), "https://app.posthog.com" === i ? "https://us.posthog.com" : i;
    }
    get region() {
        return this.vl[this.apiHost] || (this.vl[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : ul), this.vl[this.apiHost];
    }
    cl(t) {
        if (vl.test(t)) {
            var i = this.instance.config.asset_host;
            if ("string" == typeof i) return i.trim().replace(/\/$/, "") || void 0;
        }
    }
    fl(t) {
        var i = Zn(t);
        return i ? i.protocol + "//" + i.host + i.pathname : void 0;
    }
    pl(t, i, e) {
        if ("ui" === t) return e;
        var r = e, s = this.instance.config.rewriteRequestPath;
        if (s) {
            var n, o = (null == (n = Zn(e)) ? void 0 : n.href) || e;
            r = s(new URL(o)).toString();
        }
        if (s && "api" === t && cl.some((t)=>0 === i.indexOf(t))) {
            var a = this.fl(r);
            if (a) {
                var l, h = this.apiHost, u = this.gl;
                (null == (l = u) ? void 0 : l.apiHost) === h && u.rewriteRequestPath === s || (u = {
                    apiHost: h,
                    rewriteRequestPath: s,
                    urls: new Set
                }, this.gl = u), u.urls.add(a);
            }
        }
        return r;
    }
    isIngestionEndpoint(t) {
        var i = this.gl, e = this.fl(t);
        return (null == i ? void 0 : i.apiHost) === this.apiHost && i.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!e && i.urls.has(e);
    }
    endpointFor(t, i) {
        if (void 0 === i && (i = ""), i && (i = "/" === i[0] ? i : "/" + i), "ui" === t) return this.pl(t, i, this.uiHost + i);
        if ("flags" === t) return this.pl(t, i, this.flagsApiHost + i);
        if ("assets" === t) {
            var e = this.cl(i);
            if (e) return this.pl(t, i, "" + e + i);
        }
        if (this.region === ul) return this.pl(t, i, this.apiHost + i);
        var r = dl + i;
        switch(t){
            case "assets":
                return this.pl(t, i, "https://" + this.region + "-assets." + r);
            case "api":
                return this.pl(t, i, "https://" + this.region + "." + r);
        }
    }
    constructor(t){
        this.vl = {}, this.instance = t;
    }
}
var pl = Be("[Surveys]"), _l = "seenSurvey_", gl = (t)=>{
    try {
        var i = ((t)=>((t, i)=>"" + _l + function(t) {
                    return t.current_iteration && t.current_iteration > 0 ? t.id + "_" + t.current_iteration : t.id;
                }(i))(0, t))(t);
        if (localStorage.getItem(i)) return;
        localStorage.setItem(i, "true");
    } catch (t) {
        pl.error("Failed to persist survey seen state", t);
    }
}, ml = [
    No.Popover,
    No.Widget,
    No.API
], yl = {
    ignoreConditions: !1,
    ignoreDelay: !1,
    displayType: Ho.Popover
}, bl = Be("[PostHog ExternalIntegrations]"), wl = {
    intercom: "intercom-integration",
    crispChat: "crisp-chat-integration"
};
class Sl {
    Ks(t, i) {
        var e;
        null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, t, (t)=>{
            if (t) return bl.error("failed to load script", t);
            i();
        });
    }
    startIfEnabledOrStop() {
        var t = this, i = function() {
            var i, r, s, n = e[0], o = e[1];
            !o || null != (i = v.__PosthogExtensions__) && null != (i = i.integrations) && i[n] || t.Ks(wl[n], ()=>{
                var i;
                null == (i = v.__PosthogExtensions__) || null == (i = i.integrations) || null == (i = i[n]) || i.start(t._instance);
            }), !o && null != (r = v.__PosthogExtensions__) && null != (r = r.integrations) && r[n] && (null == (s = v.__PosthogExtensions__) || null == (s = s.integrations) || null == (s = s[n]) || s.stop());
        };
        for (var e of Object.entries(null !== (r = this._instance.config.integrations) && void 0 !== r ? r : {})){
            var r;
            i();
        }
    }
    constructor(t){
        this._instance = t;
    }
}
class xl {
    add(t) {
        var i = this;
        return p(function*() {
            if (i.Fs) throw new Error("Cannot add an extension to a disposed ExtensionRuntime");
            if (i.ml.has(t.name)) throw new Error('Browser extension "' + t.name + '" is already registered');
            i.ml.set(t.name, t);
            try {
                var e = t.setup(i.$s);
                e && (yield e);
            } catch (e) {
                var r = i.ml.get(t.name) === t;
                r && i.ml.delete(t.name), i.A.error('Failed to set up browser extension "' + t.name + '"', e), r && i.yl(t);
            }
        })();
    }
    getExtension(t) {
        return this.ml.get(t);
    }
    dispose() {
        if (!this.Fs) {
            this.Fs = !0;
            var t = Array.from(this.ml.values()).reverse();
            for (var i of (this.ml.clear(), t))this.yl(i);
        }
    }
    yl(t) {
        try {
            var i = null == t.dispose ? void 0 : t.dispose();
            i && V(i.then) && i.then(void 0, (i)=>{
                this.A.error('Failed to dispose browser extension "' + t.name + '"', i);
            });
        } catch (i) {
            this.A.error('Failed to dispose browser extension "' + t.name + '"', i);
        }
    }
    constructor(t, i){
        this.A = t, this.$s = i, this.ml = new Map, this.Fs = !1;
    }
}
class El {
    initialize() {}
    get(t) {
        var i = this._instance.persistence;
        if ("string" == typeof t) return null == i ? void 0 : i.get_property(t);
        var e = {};
        for (var r of t){
            var s = null == i ? void 0 : i.get_property(r);
            K(s) || (e[r] = s);
        }
        return e;
    }
    set(t, i) {
        var e;
        null == (e = this._instance.persistence) || e.register("string" == typeof t ? {
            [t]: i
        } : t);
    }
    remove(t) {
        var i;
        null == (i = this._instance.persistence) || i.unregister(t);
    }
    constructor(t){
        this._instance = t;
    }
}
var kl = "extensionsRemoteConfig";
class Tl {
    get logger() {
        return this.A;
    }
    get distinctId() {
        return this.instance.get_distinct_id();
    }
    get anonymousId() {
        var t;
        return null !== (t = this.instance.get_property(Je)) && void 0 !== t ? t : this.distinctId;
    }
    get deviceId() {
        var t = this.instance.get_property(Je);
        return "string" == typeof t ? t : void 0;
    }
    get library() {
        return {
            name: c.LIB_NAME,
            version: c.LIB_VERSION
        };
    }
    get initialPersonProperties() {
        var t, i;
        return null !== (t = null == (i = this.instance.persistence) ? void 0 : i.get_initial_props()) && void 0 !== t ? t : {};
    }
    get groups() {
        return this.instance.getGroups();
    }
    get session() {
        try {
            var t, i, e, r, s = null == (t = this.instance.sessionManager) ? void 0 : t.checkAndGetSessionAndWindowId(!0);
            return {
                sessionId: null !== (i = null == s ? void 0 : s.sessionId) && void 0 !== i ? i : "",
                windowId: null !== (e = null == s ? void 0 : s.windowId) && void 0 !== e ? e : "",
                sessionStartTimestamp: null !== (r = null == s ? void 0 : s.sessionStartTimestamp) && void 0 !== r ? r : 0
            };
        } catch (t) {
            return {
                sessionId: "",
                windowId: "",
                sessionStartTimestamp: 0
            };
        }
    }
    get canCapture() {
        return this.instance.is_capturing();
    }
    get projectToken() {
        return this.instance.config.token;
    }
    add(t) {
        return this.kl.add(t);
    }
    getExtension(t) {
        return this.kl.getExtension(t);
    }
    capture(t, i, e) {
        var r = this;
        return p(function*() {
            e ? r.instance.capture(t, i, {
                timestamp: e.timestamp,
                uuid: e.uuid,
                $set: e.set,
                $set_once: e.setOnce
            }) : r.instance.capture(t, i);
        })();
    }
    registerDynamicEventProperties(t) {
        return Oo(this.instance.Sl(t));
    }
    handleRemoteConfig(t) {
        this.Fs || (this.bl = t, this.instance.wl.emit(kl, t));
    }
    sendRequest(t, i) {
        var e = this;
        return p(function*() {
            var r;
            void 0 === i && (i = {});
            var s = e.instance.requestRouter.endpointFor(null !== (r = i.target) && void 0 !== r ? r : "api", t), n = {
                method: i.method,
                url: i.query ? Aa(s, i.query) : s,
                data: i.body,
                headers: i.headers,
                timeout: i.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: i.transport,
                compression: i.compression,
                compressionFallback: "flags" === i.target && "best-available" === i.compression ? x.Base64 : void 0,
                timestampMode: i.sentAt
            };
            return "sendBeacon" === i.transport ? (e.instance._send_request(n), {
                statusCode: 202
            }) : new Promise((t)=>{
                n.callback = t, e.instance._send_request(n);
            });
        })();
    }
    dispose() {
        this.Fs || (this.Fs = !0, this.kl.dispose());
    }
    constructor(t){
        this.Fs = !1, this.instance = t, this.A = Ue, this.bl = t._l, this.kv = new El(t), this.onEvent = (t)=>Oo(this.instance.on("eventCaptured", (i)=>{
                try {
                    t({
                        event: i.event,
                        properties: i.properties
                    });
                } catch (t) {
                    this.A.error("Browser extension event listener failed", t);
                }
            })), this.onRemoteConfig = (t)=>{
            if (this.Fs) return Oo(()=>{});
            var i = (i)=>{
                try {
                    t(i);
                } catch (t) {
                    this.A.error("Browser extension remote config listener failed", t);
                }
            }, e = this.instance.wl.on(kl, i);
            return this.bl && i(this.bl), Oo(e);
        }, this.kl = new xl(Ue.createLogger("[BrowserExtensions]"), this);
    }
}
var $l = {}, Pl = 0, Rl = ()=>{}, Cl = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored', Ol = "Surveys module not available", Il = "sanitize_properties is deprecated. Use before_send instead", Fl = "Invalid value for property_denylist config: ", Al = [
    "token",
    "distinct_id",
    Gr
], Ml = "posthog", Dl = !Ca && -1 === (null == h ? void 0 : h.indexOf("MSIE")) && -1 === (null == h ? void 0 : h.indexOf("Mozilla")), Nl = (t)=>{
    var i = {};
    return t && "unset" !== t ? ("2025-11-30" > t || (i.strictMinimumDuration = !0), "2026-05-30" > t || (i.canvasCapture = {
        resolutionScale: .6
    }), "2026-06-25" > t || (i.streamNetworkBody = !0), "2026-08-30" > t || (i.captureJsonLd = !0), i) : i;
}, Ll = (i)=>{
    var e;
    return _({
        api_host: "https://us.i.posthog.com",
        flags_api_host: null,
        ui_host: null,
        asset_host: null,
        token: "",
        autocapture: !0,
        cross_subdomain_cookie: gs(null == r ? void 0 : r.location),
        persistence: "localStorage+cookie",
        persistence_name: "",
        cookie_persisted_properties: [],
        loaded: Rl,
        save_campaign_params: !0,
        custom_campaign_params: [],
        custom_blocked_useragents: [],
        save_referrer: !0,
        capture_pageleave: "if_capture_pageview",
        defaults: null != i ? i : "unset",
        __preview_deferred_init_extensions: !1,
        __preview_external_dependency_versioned_paths: !1,
        __preview_cookie_wins_on_conflict: !1,
        debug: s && J(null == s ? void 0 : s.search) && -1 !== s.search.indexOf("__posthog_debug=true") || !1,
        cookie_expiration: 365,
        upgrade: !1,
        disable_session_recording: !1,
        disable_persistence: !1,
        disable_web_experiments: !0,
        disable_surveys: !1,
        disable_surveys_automatic_display: !1,
        disable_conversations: !1,
        disable_product_tours: !1,
        disableDeviceModel: !1,
        disable_external_dependency_loading: !1,
        strict_script_versioning: "fallback",
        enable_recording_console_log: void 0,
        secure_cookie: "https:" === (null == t || null == (e = t.location) ? void 0 : e.protocol),
        ip: !1,
        opt_out_capturing_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_useragent_filter: !1,
        opt_out_capturing_persistence_type: "localStorage",
        consent_persistence_name: null,
        opt_out_capturing_cookie_prefix: null,
        opt_in_site_apps: !1,
        property_denylist: [],
        respect_dnt: !1,
        sanitize_properties: null,
        request_headers: {},
        request_batching: !0,
        properties_string_max_length: 65535,
        mask_all_element_attributes: !1,
        mask_all_text: !1,
        mask_personal_data_properties: !1,
        custom_personal_data_properties: [],
        advanced_disable_flags: !1,
        advanced_disable_decide: !1,
        advanced_disable_feature_flags: !1,
        advanced_disable_feature_flags_on_first_load: !1,
        advanced_only_evaluate_survey_feature_flags: !1,
        advanced_feature_flags_dedup_per_session: !1,
        advanced_enable_surveys: !1,
        advanced_disable_toolbar_metrics: !1,
        feature_flag_request_timeout_ms: 3e3,
        surveys_request_timeout_ms: 1e4,
        on_request_error (t) {
            Ue.error("Bad HTTP status: " + t.statusCode + " " + t.text);
        },
        get_device_id: (t)=>t,
        capture_performance: void 0,
        name: "posthog",
        bootstrap: {},
        disable_compression: !1,
        session_idle_timeout_seconds: 1800,
        person_profiles: es,
        before_send: void 0,
        get_current_url: void 0,
        request_queue_config: {
            flush_interval_ms: Va
        },
        error_tracking: {},
        _onCapture: Rl
    }, ((t)=>({
            rageclick: t && t >= "2026-05-30" ? {
                content_ignorelist: mn,
                ignore_text_selection: !0
            } : !t || "2025-11-30" > t || {
                content_ignorelist: !0
            },
            capture_pageview: !t || "2025-05-24" > t || "history_change",
            session_recording: Nl(t),
            external_scripts_inject_target: t && t >= "2026-01-30" ? "head" : "body",
            internal_or_test_user_hostname: t && t >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
            persistence_save_debounce_ms: t && t >= "2026-05-30" ? 250 : 0,
            split_storage: !(!t || "2026-05-30" > t),
            detect_google_search_app: !(!t || "2026-05-30" > t),
            disable_capture_url_hashes: !(!t || "2026-06-25" > t),
            cookieWinsOnConflict: !(!t || "unset" === t || "2026-08-29" > t)
        }))(i));
}, jl = [
    [
        "process_person",
        "person_profiles"
    ],
    [
        "xhr_headers",
        "request_headers"
    ],
    [
        "cookie_name",
        "persistence_name"
    ],
    [
        "disable_cookie",
        "disable_persistence"
    ],
    [
        "__preview_disable_beacon",
        "disable_beacon"
    ],
    [
        "store_google",
        "save_campaign_params"
    ],
    [
        "verbose",
        "debug"
    ],
    [
        "__preview_cookie_wins_on_conflict",
        "cookieWinsOnConflict"
    ]
], Ul = (t)=>{
    var i = {};
    for (var e of jl){
        var r = e[0], s = e[1];
        K(t[r]) || (i[s] = t[r]);
    }
    var n = ds({}, i, t), o = t.__preview_external_dependency_versioned_paths;
    return K(o) || (K(t.strict_script_versioning) && (n.strict_script_versioning = !!o), J(o) && K(t.asset_host) && (n.asset_host = o)), q(t.property_blacklist) && (K(t.property_denylist) ? n.property_denylist = t.property_blacklist : q(t.property_denylist) ? n.property_denylist = [
        ...t.property_blacklist,
        ...t.property_denylist
    ] : Ue.error(Fl + t.property_denylist)), n;
};
class Bl {
    get xl() {
        return this.__forceAllowLocalhost;
    }
    set xl(t) {
        Ue.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = t;
    }
    constructor(){
        this.__forceAllowLocalhost = !1;
    }
}
class zl {
    Cl(t) {
        if (t) {
            var i = this.ml.indexOf(t);
            -1 !== i && this.ml.splice(i, 1);
        }
    }
    Tl(t, i) {
        return this.Cl(t), this.ml.push(i), null == i.initialize || i.initialize(), i;
    }
    Ml() {
        return this.config.cookieless_mode === Zr || this.config.cookieless_mode === Xr && this.consent.isRejected();
    }
    El() {
        if (!this.Il && !this.config.segment && !this.Ml()) {
            var t, i, e, r = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
            (r || this.config.disable_persistence) && (this.Rl || (r ? (t = "persistence is set to '" + this.config.persistence + "'", i = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", e = "Either set persistence to 'localStorage+cookie', or keep this persistence and pass a stable ID through bootstrap.distinctID.") : (t = "persistence is disabled (disable_persistence is true)", i = "on every page load", e = "Either set disable_persistence to false, or keep persistence disabled and pass a stable ID through bootstrap.distinctID."), this.Il = !0, console.warn("[PostHog.js]", t + " but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID " + i + ", so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. " + e)));
        }
    }
    Pl() {
        if (!this.Ml() && this.get_distinct_id() === Wr) {
            var t = this.persistence;
            if (t) {
                this.Al() || t.load(!0);
                var i = this.get_distinct_id();
                if (!i || i === Wr) {
                    var e = this.config.get_device_id(Ts());
                    this.register({
                        distinct_id: e,
                        $device_id: e
                    }), t.set_property(jr, ts);
                }
                this.Fl();
            }
        }
    }
    get decideEndpointWasHit() {
        var t, i;
        return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    get flagsEndpointWasHit() {
        var t, i;
        return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    init(t, i, e) {
        if (e && e !== Ml) {
            var r, s = null !== (r = $l[e]) && void 0 !== r ? r : new zl;
            return s._init(t, i, e), $l[e] = s, $l[Ml][e] = s, s;
        }
        return this._init(t, i, e);
    }
    _init(i, e, r) {
        var s, n, o;
        void 0 === e && (e = {});
        var a, l = J(i) ? i.trim() : "";
        if (!l) return Ue.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
        if (this.__loaded) return l !== (null == (a = this.config) ? void 0 : a.token) ? console.warn("[PostHog.js]", "You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('" + l + "', { ... }, 'project2')") : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
        this.__loaded = !0, this.config = Ll(e.defaults), e.debug = this.Hl(e.debug), this.zl = e, this.Ul = [], e.person_profiles ? this.jl = e.person_profiles : e.process_person && (this.jl = e.process_person);
        var h = Ll(e.defaults), u = Ul(e), d = ds({}, h, u, {
            name: r,
            token: l
        });
        W(h.rageclick) && W(u.rageclick) && (d.rageclick = ds({}, h.rageclick, u.rageclick)), W(h.session_recording) && W(u.session_recording) && (d.session_recording = ds({}, h.session_recording, u.session_recording)), this.set_config(d), this.config.on_xhr_error && Ue.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = e.disable_compression ? void 0 : Io.GZipJS;
        var v = this.Al();
        if (this.persistence = new Co(this.config, v), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new Co(_({}, this.config, {
            persistence: "sessionStorage"
        }), v, !1), this.Dl = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !v && Gs.ri()) {
            var f = Gs.si(this.Dl);
            q(f) && f.forEach((t)=>{
                J(t) && this.Ll.add(t);
            });
        } else Gs.ai(this.Dl);
        var p = _({}, this.persistence.props), g = _({}, this.sessionPersistence.props);
        this.register({
            $initialization_time: (new Date).toISOString()
        }), this.Wl = new Wa((t)=>this.Vl(t), this.config.request_queue_config), this.Gl = new Ka(this), this.__request_queue = [];
        var m = this.Ml();
        m || (this.sessionManager = new il(this), this.sessionPropsManager = new Qa(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId((t, i, e)=>{
            (null != e && e.activityTimeout || null != e && e.sessionPastMaximumLength || null != e && e.crossTabAdoption) && this.Zl();
        })), this.Ql(), this.config.__preview_deferred_init_extensions ? (Ue.info("Deferring extension initialization to improve startup performance"), setTimeout(()=>{
            this.Jl(m);
        }, 0)) : (Ue.info("Initializing extensions synchronously"), this.Jl(m)), c.DEBUG = c.DEBUG || this.config.debug, c.DEBUG && Ue.info("Starting in debug mode", {
            this: this,
            config: e,
            thisC: _({}, this.config),
            p: p,
            s: g
        }), !this.config.identity_distinct_id || null != (s = e.bootstrap) && s.distinctID || (e.bootstrap = _({}, e.bootstrap, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
        }));
        var y = null == (n = e.bootstrap) ? void 0 : n.distinctID;
        if (this.Rl = !!y && !Y(y), void 0 !== (null == (o = e.bootstrap) ? void 0 : o.distinctID)) {
            var b = e.bootstrap.distinctID, w = this.get_distinct_id(), S = this.persistence.get_property(jr);
            if (e.bootstrap.isIdentifiedID && null != w && w !== b && S === ts) this.identify(b);
            else if (e.bootstrap.isIdentifiedID && null != w && w !== b && S === is) Ue.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
                var x = this.config.get_device_id(Ts()), E = e.bootstrap.isIdentifiedID ? x : b;
                this.persistence.set_property(jr, e.bootstrap.isIdentifiedID ? is : ts), this.register({
                    distinct_id: b,
                    $device_id: E
                });
            }
        }
        if (m) this.register_once({
            distinct_id: Wr,
            $device_id: null
        }, "");
        else if (!this.get_distinct_id()) {
            var k = this.config.get_device_id(Ts());
            this.register_once({
                distinct_id: k,
                $device_id: k
            }, ""), this.persistence.set_property(jr, ts);
        }
        return ms(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
        }), e.segment ? function(t, i) {
            var e = t.config.segment;
            if (!e) return i();
            !function(t, i) {
                var e = t.config.segment;
                if (!e) return i();
                var r = (e)=>{
                    var r = ()=>e.anonymousId() || Ts();
                    t.config.get_device_id = r, e.id() && (t.register({
                        distinct_id: e.id(),
                        $device_id: r()
                    }), t.persistence.set_property(jr, is)), i();
                }, s = e.user();
                "then" in s && V(s.then) ? s.then(r) : r(s);
            }(t, ()=>{
                e.register(((t)=>{
                    "undefined" != typeof Promise && Promise.resolve || Hn.warn("This browser does not have Promise support, and can not use the segment integration");
                    var i = (i, e)=>{
                        if (!e) return i;
                        i.event.userId || i.event.anonymousId === t.get_distinct_id() || (Hn.info("No userId set, resetting PostHog"), t.reset()), i.event.userId && i.event.userId !== t.get_distinct_id() && (Hn.info("UserId set, identifying with PostHog"), t.identify(i.event.userId));
                        var r = t.calculateEventProperties(e, i.event.properties);
                        return i.event.properties = Object.assign({}, r, i.event.properties), i;
                    };
                    return {
                        name: "PostHog JS",
                        type: "enrichment",
                        version: "1.0.0",
                        isLoaded: ()=>!0,
                        load: ()=>Promise.resolve(),
                        track: (t)=>i(t, t.event.event),
                        page: (t)=>i(t, ns),
                        identify: (t)=>i(t, as),
                        screen: (t)=>i(t, "$screen")
                    };
                })(t)).then(()=>{
                    i();
                });
            });
        }(this, ()=>this.Kl()) : this.Kl(), V(this.config._onCapture) && this.config._onCapture !== Rl && (Ue.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (t)=>this.config._onCapture(t.event, t))), this.config.ip && Ue.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || (function() {
            return rl.apply(this, arguments);
        })().then((t)=>{
            t && this.register({
                [Ye]: t
            });
        }).catch(Rl), this;
    }
    Yl(t) {
        var i = t;
        return J(i.name) && V(i.setup);
    }
    Xl(t, i) {
        this.Yl(t) ? i.push(()=>{
            this.tu().add(t).catch(()=>null == t.dispose ? void 0 : t.dispose()).catch((i)=>{
                Ue.error('Failed to dispose browser extension "' + t.name + '"', i);
            });
        }) : this.ml.push(t);
    }
    Ql() {
        var t, i, e, r, s, n, o = null !== (t = null == (i = this.config.__extensionClasses) ? void 0 : i.featureFlags) && void 0 !== t ? t : null == (e = zl.__defaultExtensionClasses) ? void 0 : e.featureFlags;
        o && (this.featureFlags && this.featureFlags instanceof o || (null == (r = this.eu) || r.call(this), this.eu = void 0, this.featureFlags = new o(this)), V(this.featureFlags.onReloading) && V(this.featureFlags.setup) ? this.eu || (this.eu = this.featureFlags.onReloading(()=>{
            this.wl.emit("featureFlagsReloading", !0);
        }), this.tu().add(this.featureFlags)) : null == (s = (n = this.featureFlags).initialize) || s.call(n));
    }
    Jl(t) {
        var i, e, r, s, n, o, a, l = performance.now(), h = _({}, zl.__defaultExtensionClasses, this.config.__extensionClasses), u = [];
        h.exceptions && this.ml.push(this.exceptions = null !== (i = this.exceptions) && void 0 !== i ? i : new h.exceptions(this)), h.historyAutocapture && this.ml.push(this.historyAutocapture = new h.historyAutocapture(this)), h.tracingHeaders && this.ml.push(this.tracingHeaders = new h.tracingHeaders(this)), h.siteApps && this.ml.push(this.siteApps = new h.siteApps(this)), h.sessionRecording && !t && this.ml.push(this.sessionRecording = new h.sessionRecording(this)), this.config.disable_scroll_properties || u.push(()=>{
            this.scrollManager.startMeasuringScrollPosition();
        }), h.autocapture && this.Xl(this.autocapture = new h.autocapture(this), u), h.surveys && this.Xl(this.surveys = null !== (e = this.surveys) && void 0 !== e ? e : new h.surveys(this), u), h.logs && this.Xl(this.logs = null !== (r = this.logs) && void 0 !== r ? r : new h.logs(this), u), h.metrics && this.ml.push(this.metrics = null !== (s = this.metrics) && void 0 !== s ? s : new h.metrics(this)), h.conversations && this.ml.push(this.conversations = null !== (n = this.conversations) && void 0 !== n ? n : new h.conversations(this)), h.productTours && this.ml.push(this.productTours = new h.productTours(this)), h.heatmaps && this.ml.push(this.heatmaps = new h.heatmaps(this)), h.webVitalsAutocapture && this.ml.push(this.webVitalsAutocapture = new h.webVitalsAutocapture(this)), h.exceptionObserver && this.ml.push(this.exceptionObserver = new h.exceptionObserver(this)), h.deadClicksAutocapture && this.ml.push(this.deadClicksAutocapture = new h.deadClicksAutocapture(this, Bn)), h.toolbar && this.ml.push(this.toolbar = null !== (o = this.toolbar) && void 0 !== o ? o : new h.toolbar(this)), h.experiments && this.ml.push(this.experiments = null !== (a = this.experiments) && void 0 !== a ? a : new h.experiments(this)), this.ml.forEach((t)=>{
            t.initialize && u.push(()=>{
                null == t.initialize || t.initialize();
            });
        }), u.push(()=>{
            if (this.iu) {
                var t = this.iu;
                this.iu = void 0, this.ml.forEach((i)=>null == i.onRemoteConfig ? void 0 : i.onRemoteConfig(t));
            }
        }), this.ru(u, l);
    }
    ru(t, i) {
        for(; t.length > 0;){
            if (this.config.__preview_deferred_init_extensions && performance.now() - i >= 30 && t.length > 0) return void setTimeout(()=>{
                this.ru(t, i);
            }, 0);
            var e = t.shift();
            if (e) try {
                e();
            } catch (t) {
                Ue.error("Error initializing extension:", t);
            }
        }
        var r = Math.round(performance.now() - i);
        this.register_for_session({
            [Kr]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [Jr]: r
        }), this.config.__preview_deferred_init_extensions && Ue.info("PostHog extensions initialized (" + r + "ms)");
    }
    uo(t) {
        var i;
        if (!r || !r.body) return Ue.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(()=>{
            this.uo(t);
        }, 500);
        if (this.config.__preview_deferred_init_extensions && (this.iu = t), this._l = t, this.compression = void 0, t.ok) {
            var e, s = t.config;
            s.supportedCompression && !this.config.disable_compression && (this.compression = N(s.supportedCompression, Io.GZipJS) ? Io.GZipJS : N(s.supportedCompression, Io.Base64) ? Io.Base64 : void 0), null != (e = s.analytics) && e.endpoint && (this.analyticsDefaultEndpoint = s.analytics.endpoint);
        }
        this.set_config({
            person_profiles: this.jl ? this.jl : es
        }), null == (i = this.nu) || i.handleRemoteConfig(t), this.ml.forEach((i)=>null == i.onRemoteConfig ? void 0 : i.onRemoteConfig(t));
    }
    Kl() {
        try {
            this.config.loaded(this);
        } catch (t) {
            Ue.critical("`loaded` function failed", t);
        }
        if (this.su(), this.config.internal_or_test_user_hostname && null != s && s.hostname) {
            var t = s.hostname, i = this.config.internal_or_test_user_hostname;
            ("string" == typeof i ? t === i : i.test(t)) && this.setInternalOrTestUser();
        }
        this.config.capture_pageview && setTimeout(()=>{
            (this.consent.isOptedIn() || this.Ml()) && this.au();
        }, 1), this.ou = new Yo(this), this.ou.load();
    }
    su() {
        var t;
        this.is_capturing() && this.config.request_batching && (null == (t = this.Wl) || t.enable());
    }
    _dom_loaded() {
        this.is_capturing() && hs(this.__request_queue, (t)=>this.Vl(t)), this.__request_queue = [], this.su();
    }
    _handle_unload() {
        var t, i, e, r, s;
        null == (t = this.surveys) || null == t.handlePageUnload || t.handlePageUnload(), null == (i = this.metrics) || i.flush("sendBeacon"), this.config.request_batching ? (this.lu() && this.capture(os), null == (e = this.logs) || e.flushLogs("sendBeacon"), null == (r = this.Wl) || r.unload(), null == (s = this.Gl) || s.unload()) : this.lu() && this.capture(os, null, {
            transport: "sendBeacon"
        });
    }
    _send_request(t) {
        var i;
        this.__loaded ? Dl ? this.__request_queue.push(t) : this.rateLimiter.isServerRateLimited(t.batchKey) ? t.fireCallbackOnDrop && (null == t.callback || t.callback({
            statusCode: 429
        })) : (t.transport = t.transport || this.config.api_transport, t.headers = _({}, this.config.request_headers, t.headers), t.compression = "best-available" === t.compression ? null !== (i = this.compression) && void 0 !== i ? i : t.compressionFallback : t.compression, (K(this.config.disable_beacon) ? this.config.__preview_disable_beacon : this.config.disable_beacon) && (t.disableTransport = [
            "sendBeacon"
        ]), t.fetchOptions = t.fetchOptions || this.config.fetch_options, ((t)=>{
            var i, e, r, s = _({}, t);
            s.timeout = s.timeout || 6e4;
            var n, o, a, h, u, d = null !== (i = s.transport) && void 0 !== i ? i : "fetch";
            "sendBeacon" === d && K(s.compression) && s.data && (s.compression = Io.Base64), "POST" === s.method && s.data && ("capture-body" === s.timestampMode ? s.data = {
                api_key: null !== (o = null == (u = (h = (q(n = s.data) ? n : [
                    n
                ]).map((t)=>_({}, t, t.timestamp instanceof Date && !isNaN(t.timestamp.getTime()) ? {
                        timestamp: t.timestamp.toISOString()
                    } : {})))[0]) || null == (a = u.properties) ? void 0 : a.token) && void 0 !== o ? o : null == u ? void 0 : u.token,
                batch: h,
                sent_at: (new Date).toISOString()
            } : "body" === s.timestampMode && (s.data = function(t, i) {
                return void 0 === i && (i = (new Date).toISOString()), q(t) ? t.map((t)=>_({}, t, {
                        sent_at: i
                    })) : _({}, t, {
                    sent_at: i
                });
            }(s.data))), s.url = Ha(s.url, s.method, s.compression, s.timestampMode);
            var v = qa.filter((t)=>!s.disableTransport || !t.transport || !s.disableTransport.includes(t.transport)), c = null !== (e = null == (r = function(t, i) {
                for(var e = 0; t.length > e; e++)if (t[e].transport === d) return t[e];
            }(v)) ? void 0 : r.method) && void 0 !== e ? e : v[0].method;
            if (!c) throw new Error("No available transport method");
            var f = (t)=>{
                try {
                    c(t);
                } catch (t) {
                    Ua(t) ? Ue.warn(t) : Ue.error(t), null == s.callback || s.callback({
                        statusCode: 0,
                        error: t
                    });
                }
            };
            "sendBeacon" !== d && s.data && s.compression === Io.GZipJS && l && "undefined" != typeof Promise && !Ia ? La(s).then((t)=>{
                f(t);
            }).catch((i)=>{
                if (Mi(i)) return Ia = !0, void f(_({}, s, {
                    compression: void 0,
                    url: Ha(t.url, t.method, void 0, t.timestampMode)
                }));
                ((t)=>{
                    if (!t || "object" != typeof t) return !1;
                    var i = "name" in t ? String(t.name) : "";
                    return Mi(t) || i === Ii;
                })(i) && (Ia = !0), f(s);
            }) : c(s);
        })(_({}, t, {
            callback: (i)=>{
                var e, r;
                this.rateLimiter.checkForLimiting(i), 400 > i.statusCode || null == (e = (r = this.config).on_request_error) || e.call(r, i), null == t.callback || t.callback(i);
            }
        }))) : t.fireCallbackOnDrop && (null == t.callback || t.callback({
            statusCode: 0
        }));
    }
    Vl(t) {
        this.Gl ? this.Gl.retriableRequest(t) : this._send_request(t);
    }
    _execute_array(t) {
        Pl++;
        try {
            var i, e = [], r = [], s = [];
            hs(t, (t)=>{
                if (t) if (q(i = t[0])) s.push(t);
                else if (V(t)) try {
                    t.call(this);
                } catch (i) {
                    Ue.error("Error executing queued PostHog call", t, i);
                }
                else q(t) && "alias" === i ? e.push(t) : q(t) && -1 !== i.indexOf("capture") && V(this[i]) ? s.push(t) : r.push(t);
            });
            var n = function(t, i) {
                hs(t, function(t) {
                    try {
                        if (q(t[0])) {
                            var e = i;
                            us(t, function(t) {
                                e = e[t[0]].apply(e, t.slice(1));
                            });
                        } else i[t[0]].apply(i, t.slice(1));
                    } catch (i) {
                        Ue.error("Error executing queued PostHog call", t, i);
                    }
                });
            };
            n(e, this), n(r, this), n(s, this);
        } finally{
            Pl--;
        }
    }
    push(t) {
        if (Pl > 0 && q(t) && J(t[0])) {
            var i = zl.prototype[t[0]];
            V(i) && i.apply(this, t.slice(1));
        } else this._execute_array([
            t
        ]);
    }
    capture(t, i, e) {
        var r, s, n, o, a;
        if (this.__loaded && this.persistence && this.sessionPersistence && this.Wl) {
            if (this.is_capturing()) if (!K(t) && J(t)) {
                this.Pl();
                var l = !this.config.opt_out_useragent_filter && this._is_bot();
                if (!l || this.config.__preview_capture_bot_pageviews) {
                    var h = null != e && e.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                    if (null == h || !h.isRateLimited) {
                        null != i && i.$current_url && !J(null == i ? void 0 : i.$current_url) && (Ue.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == i || delete i.$current_url), "$exception" !== t || null != e && e.uu || Ue.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                        var u = new Date, d = (null == e ? void 0 : e.timestamp) || u, v = ki(null == e ? void 0 : e.uuid, Ts), c = {
                            uuid: v,
                            event: t,
                            properties: this.calculateEventProperties(t, i || {}, d, v)
                        };
                        t === ns && this.config.__preview_capture_bot_pageviews && l && (c.event = "$bot_pageview", c.properties.$browser_type = "bot"), h && (c.properties.$lib_rate_limit_remaining_tokens = h.remainingTokens);
                        var f = "$feature_flag_called" === t && !1 === c.properties.$feature_flag_has_experiment && !0 === this.get_property(xr);
                        (null == e ? void 0 : e.$set) && !f && (c.$set = null == e ? void 0 : e.$set);
                        var p = null == e ? void 0 : e.$unset;
                        p && (c.$unset = p);
                        var g, m, y, b = f ? void 0 : this.hu(null == e ? void 0 : e.$set_once, t !== ls, t === as);
                        if (b && (c.$set_once = b), null != e && e._noTruncate || (s = this.config.properties_string_max_length, n = c, o = (t)=>J(t) ? t.slice(0, s) : t, a = new Set, c = function t(i, e) {
                            if (i !== Object(i)) return o ? o(i) : i;
                            if (!a.has(i)) {
                                var r;
                                if (a.add(i), q(i)) r = [], hs(i, (i)=>{
                                    r.push(t(i));
                                });
                                else {
                                    var s = {};
                                    us(i, (i, e)=>{
                                        a.has(i) || (s[e] = t(i, e));
                                    }), r = s;
                                }
                                return r;
                            }
                        }(n)), c.timestamp = d, K(null == e ? void 0 : e.timestamp) || (c.properties.$event_time_override_provided = !0, c.properties.$event_time_override_system_time = u), f && (c.properties = function(t, i) {
                            void 0 === i && (i = []);
                            var e = {}, r = (i)=>{
                                void 0 !== t[i] && (e[i] = t[i]);
                            };
                            return w.forEach(r), i.forEach(r), e;
                        }(c.properties, Al)), t === Bo.DISMISSED || t === Bo.SENT) {
                            var S = null == i ? void 0 : i[zo.SURVEY_ID], x = null == i ? void 0 : i[zo.SURVEY_ITERATION];
                            gl({
                                id: S,
                                current_iteration: x
                            }), c.$set = _({}, c.$set, {
                                [(g = {
                                    id: S,
                                    current_iteration: x
                                }, m = t === Bo.SENT ? "responded" : "dismissed", y = "$survey_" + m + "/" + g.id, g.current_iteration && g.current_iteration > 0 && (y = "$survey_" + m + "/" + g.id + "/" + g.current_iteration), y)]: !0
                            });
                        } else t === Bo.SHOWN && (c.$set = _({}, c.$set, {
                            [zo.SURVEY_LAST_SEEN_DATE]: (new Date).toISOString()
                        }));
                        if (t === Vo.SHOWN) {
                            var E = null == i ? void 0 : i[Wo.TOUR_TYPE];
                            E && (c.$set = _({}, c.$set, {
                                [Wo.TOUR_LAST_SEEN_DATE + "/" + E]: (new Date).toISOString()
                            }));
                        }
                        var k = _({}, c.properties.$set, c.$set);
                        if (G(k) || this.setPersonPropertiesForFlags(k), !X(this.config.before_send)) {
                            var T = this.Xn(c);
                            if (!T) return;
                            (c = T).uuid = ki(c.uuid, Ts);
                        }
                        this.wl.emit("eventCaptured", c);
                        var P = null !== (r = null == e ? void 0 : e._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), R = {
                            method: "POST",
                            url: P,
                            data: c,
                            compression: "best-available",
                            timestampMode: "recordings" === (null == e ? void 0 : e._batchKey) || /\/s\/(?:\?|$)/.test(P) ? "body" : "capture-body",
                            batchKey: null == e ? void 0 : e._batchKey,
                            transport: null == e ? void 0 : e.transport
                        };
                        return !this.config.request_batching || e && (null == e || !e._batchKey) || null != e && e.send_instantly ? this.Vl(R) : this.Wl.enqueue(R), c;
                    }
                    Ue.critical("This capture call is ignored due to client rate limiting.");
                }
            } else Ue.error("No event name provided to posthog.capture");
        } else Ue.uninitializedWarning("posthog.capture");
    }
    _addCaptureHook(t) {
        return this.on("eventCaptured", (i)=>t(i.event, i));
    }
    getExtension(t) {
        var i;
        return null == (i = this.nu) ? void 0 : i.getExtension(t);
    }
    tu() {
        var t;
        return null !== (t = this.nu) && void 0 !== t ? t : this.nu = new Tl(this);
    }
    Sl(t) {
        this.$l.push(t);
        var i = !0;
        return ()=>{
            if (i) {
                i = !1;
                var e = this.$l.indexOf(t);
                -1 !== e && this.$l.splice(e, 1);
            }
        };
    }
    du(t) {
        var i, e, r;
        return void 0 === t && (t = !0), !(null == (i = this.persistence) || !i.consumeCookieIdentityChange()) && (this.Bl = null, this.persistence.get_property(jr) === ts && (null == (r = this.sessionPersistence) || r.clear(), this.Ll.clear(), this.vu()), null == (e = this.featureFlags) || e.reset(), t && this.reloadFeatureFlags(), !0);
    }
    calculateEventProperties(i, e, n, o, a) {
        if (n = n || new Date, !this.persistence || !this.sessionPersistence) return e;
        this.persistence.syncCookieProperties(), this.du();
        var l = a ? void 0 : this.persistence.remove_event_timer(i), u = _({}, e);
        if (u.token = this.config.token, u.$config_defaults = this.config.defaults, this.Ml() && (u[Gr] = !0), "$snapshot" === i) {
            var d = _({}, this.persistence.properties(), this.sessionPersistence.properties());
            return u.distinct_id = d.distinct_id, (!J(u.distinct_id) && !Z(u.distinct_id) || Y(u.distinct_id)) && Ue.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), u;
        }
        var v, f = function(i, e, r, n) {
            var o, a, l, u;
            if (void 0 === n && (n = !1), !h) return {};
            var d, v = i ? [
                ...oo,
                ...e || []
            ] : [], f = Si(h), p = f[0], _ = f[1], g = null != (d = "undefined" != typeof navigator ? navigator : void 0) && d.brave ? {
                brave: !0
            } : {}, m = {};
            K(r) || (m.detectGoogleSearchApp = r);
            var y = {}, b = null == (o = navigator) || null == (o = o.userAgentData) ? void 0 : o.platform, w = null == (a = navigator) ? void 0 : a.maxTouchPoints, S = null == t || null == (l = t.screen) ? void 0 : l.width, x = null == t || null == (u = t.screen) ? void 0 : u.height, E = null == t ? void 0 : t.devicePixelRatio;
            K(b) || (y.userAgentDataPlatform = b), K(w) || (y.maxTouchPoints = w), K(S) || (y.screenWidth = S), K(x) || (y.screenHeight = x), K(E) || (y.devicePixelRatio = E);
            var k, T, P, R, C, O, I, F, A = ds(ps({
                $os: p,
                $os_version: _,
                $browser: mi(h, navigator.vendor, g, m),
                $device: xi(h),
                $device_type: (T = h, P = y, F = xi(T), F === bt || F === yt || "Kobo" === F || "Kindle Fire" === F || F === Yt ? mt : F === jt || F === Bt || F === Ut || F === Gt ? "Console" : F === St ? "Wearable" : F ? pt : "Android" === (null == P ? void 0 : P.userAgentDataPlatform) && (null !== (R = null == P ? void 0 : P.maxTouchPoints) && void 0 !== R ? R : 0) > 0 ? 600 > Math.min(null !== (C = null == P ? void 0 : P.screenWidth) && void 0 !== C ? C : 0, null !== (O = null == P ? void 0 : P.screenHeight) && void 0 !== O ? O : 0) / (null !== (I = null == P ? void 0 : P.devicePixelRatio) && void 0 !== I ? I : 1) ? pt : mt : "Desktop"),
                $timezone: yo(),
                $timezone_offset: bo()
            }), {
                $current_url: io(n ? $i(null == s ? void 0 : s.href) : null == s ? void 0 : s.href, v, lo),
                $host: null == s ? void 0 : s.host,
                $pathname: null == s ? void 0 : s.pathname,
                $raw_user_agent: h.length > 1e3 ? h.substring(0, 997) + "..." : h,
                $browser_version: bi(h, navigator.vendor, g, m),
                $browser_language: fo(),
                $browser_language_prefix: (k = fo(), "string" == typeof k ? k.split("-")[0] : void 0),
                $screen_height: null == t ? void 0 : t.screen.height,
                $screen_width: null == t ? void 0 : t.screen.width,
                $viewport_height: null == t ? void 0 : t.innerHeight,
                $viewport_width: null == t ? void 0 : t.innerWidth,
                $lib: c.LIB_NAME,
                $lib_version: c.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: Date.now() / 1e3
            });
            return c.SDK_DIST_CHANNEL && (A.$sdk_dist_channel = c.SDK_DIST_CHANNEL), A;
        }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
        if (this.sessionManager) {
            var p = this.sessionManager.checkAndGetSessionAndWindowId(a, n.getTime(), !0), g = p.windowId;
            u.$session_id = p.sessionId, u.$window_id = g;
        }
        this.sessionPropsManager && ds(u, this.sessionPropsManager.getSessionProps());
        try {
            var m;
            this.sessionRecording && ds(u, this.sessionRecording.sdkDebugProperties), u.$sdk_debug_retry_queue_size = null == (m = this.Gl) ? void 0 : m.length;
        } catch (t) {
            u.$sdk_debug_error_capturing_properties = String(t);
        }
        if (this.requestRouter.region === ul && (u.$lib_custom_api_host = this.config.api_host), v = i !== ns || a ? i !== os || a ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n) : this.pageViewManager.doPageView(n, o), u = ds(u, v), i === ns && r && (u.title = r.title), !K(l)) {
            var y = n.getTime() - l;
            u.$duration = parseFloat((y / 1e3).toFixed(3));
        }
        h && this.config.opt_out_useragent_filter && (u.$browser_type = this._is_bot() ? "bot" : "browser");
        var b = this.persistence.properties(), w = this.sessionPersistence.properties();
        us([
            "$referrer",
            "$referring_domain"
        ], (t)=>{
            t in b && delete w[t];
        });
        var S = {};
        if (this.$l.length > 0) for (var x of this.$l.slice())try {
            ds(S, x());
        } catch (t) {
            Ue.error("Failed to produce browser extension event properties", t);
        }
        (u = ds({}, f, b, w, _({}, S, u))).$is_identified = this._isIdentified(), q(this.config.property_denylist) ? us(this.config.property_denylist, function(t) {
            delete u[t];
        }) : Ue.error(Fl + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
        var E = this.config.sanitize_properties;
        E && (Ue.error(Il), u = E(u, i));
        var k = this.cu();
        return u.$process_person_profile = k, k && !a && this.fu("_calculate_event_properties"), u;
    }
    hu(t, i, e) {
        var r;
        if (void 0 === i && (i = !0), void 0 === e && (e = !1), !this.persistence || !this.cu()) return t;
        if (this.Ol && !e) return t;
        var s = this.persistence.get_initial_props(), n = null == (r = this.sessionPropsManager) ? void 0 : r.getSetOnceProps(), o = ds({}, s, n || {}, t || {}), a = this.config.sanitize_properties;
        return a && (Ue.error(Il), o = a(o, "$set_once")), i && (this.Ol = !0), G(o) ? void 0 : o;
    }
    register(t, i) {
        var e;
        null == (e = this.persistence) || e.register(t, i);
    }
    register_once(t, i, e) {
        var r;
        null == (r = this.persistence) || r.register_once(t, i, e);
    }
    register_for_session(t) {
        var i, e;
        null == (i = this.persistence) || i.syncCookieProperties(), this.du(), null == (e = this.sessionPersistence) || e.register(t), Object.keys(t).forEach((t)=>this.Ll.add(t)), this.vu();
    }
    unregister(t) {
        var i;
        null == (i = this.persistence) || i.unregister(t);
    }
    unregister_for_session(t) {
        var i;
        null == (i = this.sessionPersistence) || i.unregister(t), this.Ll.delete(t), this.vu();
    }
    pu(t, i) {
        this.register({
            [t]: i
        });
    }
    Zl() {
        this.Ll.forEach((t)=>{
            var i;
            null == (i = this.sessionPersistence) || i.unregister(t);
        }), this.Ll.clear(), this.vu();
    }
    vu() {
        var t;
        if (this.Dl) if ("memory" === this.config.persistence || null != (t = this.sessionPersistence) && t.xa || !Gs.ri()) Gs.ai(this.Dl);
        else {
            var i = [];
            this.Ll.forEach((t)=>i.push(t)), i.length > 0 ? Gs.ii(this.Dl, i) : Gs.ai(this.Dl);
        }
    }
    getFeatureFlag(t, i) {
        var e;
        return null == (e = this.featureFlags) ? void 0 : e.getFeatureFlag(t, i);
    }
    getFeatureFlagPayload(t) {
        var i;
        return null == (i = this.featureFlags) ? void 0 : i.getFeatureFlagPayload(t);
    }
    getFeatureFlagResult(t, i) {
        var e;
        return null == (e = this.featureFlags) ? void 0 : e.getFeatureFlagResult(t, i);
    }
    getAllFeatureFlags() {
        var t, i;
        return null !== (t = null == (i = this.featureFlags) ? void 0 : i.getAllFeatureFlags()) && void 0 !== t ? t : [];
    }
    isFeatureEnabled(t, i) {
        var e, r;
        return null !== (e = null == (r = this.featureFlags) ? void 0 : r.isFeatureEnabled(t, i)) && void 0 !== e ? e : null == i ? void 0 : i.defaultValue;
    }
    reloadFeatureFlags() {
        var t;
        null == (t = this.featureFlags) || t.reloadFeatureFlags();
    }
    updateFlags(t, i, e) {
        var r;
        null == (r = this.featureFlags) || r.updateFlags(t, i, e);
    }
    updateEarlyAccessFeatureEnrollment(t, i, e) {
        var r;
        null == (r = this.featureFlags) || r.updateEarlyAccessFeatureEnrollment(t, i, e);
    }
    getEarlyAccessFeatures(t, i, e) {
        var r;
        return void 0 === i && (i = !1), null == (r = this.featureFlags) ? void 0 : r.getEarlyAccessFeatures(t, i, e);
    }
    on(t, i) {
        return this.wl.on(t, i);
    }
    onFeatureFlags(t) {
        return this.featureFlags ? this.featureFlags.onFeatureFlags(t) : (t([], {}, {
            errorsLoading: !0
        }), ()=>{});
    }
    onSurveysLoaded(t) {
        return this.surveys ? this.surveys.onSurveysLoaded(t) : (t([], {
            isLoaded: !1,
            error: Ol
        }), ()=>{});
    }
    onSessionId(t) {
        var i, e;
        return null !== (i = null == (e = this.sessionManager) ? void 0 : e.onSessionId(t)) && void 0 !== i ? i : ()=>{};
    }
    getSurveys(t, i) {
        void 0 === i && (i = !1), this.surveys ? this.surveys.getSurveys(t, i) : t([], {
            isLoaded: !1,
            error: Ol
        });
    }
    getActiveMatchingSurveys(t, i) {
        void 0 === i && (i = !1), this.surveys ? this.surveys.getActiveMatchingSurveys(t, i) : t([], {
            isLoaded: !1,
            error: Ol
        });
    }
    renderSurvey(t, i) {
        var e;
        null == (e = this.surveys) || e.renderSurvey(t, i);
    }
    displaySurvey(t, i) {
        var e;
        void 0 === i && (i = yl), null == (e = this.surveys) || e.displaySurvey(t, i);
    }
    cancelPendingSurvey(t) {
        var i;
        null == (i = this.surveys) || i.cancelPendingSurvey(t);
    }
    canRenderSurvey(t) {
        var i, e;
        return null !== (i = null == (e = this.surveys) ? void 0 : e.canRenderSurvey(t)) && void 0 !== i ? i : {
            visible: !1,
            disabledReason: Ol
        };
    }
    canRenderSurveyAsync(t, i) {
        var e, r;
        return void 0 === i && (i = !1), null !== (e = null == (r = this.surveys) ? void 0 : r.canRenderSurveyAsync(t, i)) && void 0 !== e ? e : Promise.resolve({
            visible: !1,
            disabledReason: Ol
        });
    }
    gu(t) {
        return !t || Y(t) ? (Ue.critical("Unique user id has not been set in posthog.identify"), !1) : t === Wr ? (Ue.critical('The string "' + t + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.'), !1) : ![
            "distinct_id",
            "distinctid"
        ].includes(t.toLowerCase()) && ![
            "undefined",
            "null"
        ].includes(t.toLowerCase()) || (Ue.critical('The string "' + t + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'), !1);
    }
    identify(t, i, e) {
        if (!this.__loaded || !this.persistence) return Ue.uninitializedWarning("posthog.identify");
        if (Z(t) && (t = t.toString(), Ue.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), this.gu(t) && this.fu("posthog.identify")) {
            this.Pl();
            var r = this.get_distinct_id(), s = this.persistence.syncCookieProperties() && this.get_distinct_id() !== r, n = this.du(!1), o = this.persistence.za(), a = !1;
            try {
                var l = this.get_distinct_id();
                this.register({
                    $user_id: t
                }), this.get_property(Je) || this.register_once({
                    $had_persisted_distinct_id: !0,
                    $device_id: l
                }, ""), t !== l && t !== this.get_property(Qe) && (this.unregister(Qe), this.register({
                    distinct_id: t
                }));
                var h, u = (this.persistence.get_property(jr) || ts) === ts, d = t !== l, v = !d && u;
                if (d && u) this.persistence.set_property(jr, is), this.setPersonPropertiesForFlags({
                    $set: i || {},
                    $set_once: e || {}
                }, !1), this.config.cookieWinsOnConflict && this.persistence.Ua(), this.capture(as, {
                    distinct_id: t,
                    $anon_distinct_id: l
                }, {
                    $set: i || {},
                    $set_once: e || {}
                }), this.Bl = hl(t, i, e), null == (h = this.featureFlags) || h.setAnonymousDistinctId(l);
                else if (v) {
                    this.persistence.set_property(jr, is);
                    var c = i || {}, f = e || {};
                    this.setPersonPropertiesForFlags({
                        $set: c,
                        $set_once: f
                    }, !1), this.config.cookieWinsOnConflict && this.persistence.Ua(), this.capture("$set", {
                        $set: c,
                        $set_once: f
                    }), this.Bl = hl(t, i, e);
                } else (i || e) && this.setPersonProperties(i, e);
                d || s || n ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(Mr)) : v && (i || e) && this.reloadFeatureFlags(), a = !0;
            } finally{
                o && this.persistence.Ga(a);
            }
        }
    }
    setPersonProperties(t, i) {
        if ((t || i) && this.fu("posthog.setPersonProperties")) {
            var e = hl(this.get_distinct_id(), t, i);
            this.Bl !== e ? (this.setPersonPropertiesForFlags({
                $set: t || {},
                $set_once: i || {}
            }, !0), this.capture("$set", {
                $set: t || {},
                $set_once: i || {}
            }), this.Bl = e) : Ue.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
        }
    }
    unsetPersonProperties(t) {
        var i, e = (q(t) ? t : [
            t
        ]).filter((t)=>J(t) && t.length > 0);
        0 !== e.length && this.fu("posthog.unsetPersonProperties") && (null == (i = this.featureFlags) || i.unsetPersonPropertiesForFlags(e, !0), this.capture("$set", {
            $unset: e
        }), this.Bl = null);
    }
    group(t, i, e) {
        var r;
        if (t && i) {
            null == (r = this.persistence) || r.syncCookieProperties(), this.du();
            var s = this.getGroups(), n = s[t] !== i;
            if (n && this.resetGroupPropertiesForFlags(t), this.register({
                $groups: _({}, s, {
                    [t]: i
                })
            }), n || e) {
                var o = {
                    $group_type: t,
                    $group_key: i
                };
                e && (o.$group_set = e), this.capture(ls, o);
            }
            e && this.setGroupPropertiesForFlags({
                [t]: e
            }), n && !e && this.reloadFeatureFlags();
        } else Ue.error("posthog.group requires a group type and group key");
    }
    resetGroups() {
        this.register({
            $groups: {}
        }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
    setPersonPropertiesForFlags(t, i) {
        var e;
        void 0 === i && (i = !0), null == (e = this.featureFlags) || e.setPersonPropertiesForFlags(t, i);
    }
    resetPersonPropertiesForFlags(t) {
        var i;
        void 0 === t && (t = !0), null == (i = this.featureFlags) || i.resetPersonPropertiesForFlags(t);
    }
    setGroupPropertiesForFlags(t, i) {
        var e;
        void 0 === i && (i = !0), this.fu("posthog.setGroupPropertiesForFlags") && (null == (e = this.featureFlags) || e.setGroupPropertiesForFlags(t, i));
    }
    resetGroupPropertiesForFlags(t) {
        var i;
        null == (i = this.featureFlags) || i.resetGroupPropertiesForFlags(t);
    }
    reset(t) {
        var i = it(t) ? t : null == t ? void 0 : t.resetDeviceID, e = it(t) || null == t ? void 0 : t.bootstrap;
        this.mu(i, !1, e);
    }
    mu(t, i, e) {
        var r, s, n;
        if (void 0 === i && (i = !1), Ue.info("reset"), !this.__loaded) return Ue.uninitializedWarning("posthog.reset");
        var o = null == e ? void 0 : e.sessionID;
        this.config.bootstrap = e || (null == (r = this.zl) ? void 0 : r.bootstrap) || {}, null == (s = this.featureFlags) || null == s.updateConfig || s.updateConfig(this.config, this.ho());
        var a = this.get_property(Je), l = this.get_property(Ye), h = this.get_property(hr), u = this.is_capturing();
        this.consent.reset(), i || !u || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
        var d = null == (n = this.persistence) || null == n.za ? void 0 : n.za(), v = !1;
        try {
            var c, f, p, g, m, y, b, w, S, x, E, k, T;
            if (null == (c = this.persistence) || c.clear(), null == (f = this.sessionPersistence) || f.clear(), this.Ll.clear(), this.vu(), K(h) || null == (x = this.persistence) || x.register({
                [hr]: h
            }), null == (p = this.surveys) || p.reset(), null == (g = this.featureFlags) || g.reset(), null == (m = this.conversations) || m.reset(), null == (y = this.logs) || y.reset(), null == (b = this.metrics) || b.reset(), null == (w = this.persistence) || w.set_property(jr, ts), null == (S = this.sessionManager) || S.resetSessionId(), this.Bl = null, this.config.cookieless_mode === Zr) this.register_once({
                distinct_id: Wr,
                $device_id: null
            }, "");
            else {
                var P = this.config.get_device_id(Ts());
                this.register_once({
                    distinct_id: P,
                    $device_id: t ? P : a
                }, ""), t || K(l) || this.register({
                    [Ye]: l
                });
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
            }, 1), e) {
                if (void 0 === e.distinctID || this.Ml() || (null == (T = this.persistence) || T.set_property(jr, e.isIdentifiedID ? is : ts), this.register({
                    distinct_id: e.distinctID
                })), null == (E = this.featureFlags) || E.initialize(), !(K(o) || null != (k = this.sessionManager) && k.setBootstrapSessionId(o, !0))) {
                    var R = _({}, e);
                    delete R.sessionID, this.config.bootstrap = R;
                }
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, v = !0;
        } finally{
            var C;
            d && (null == (C = this.persistence) || null == C.Ga || C.Ga(v));
        }
        this.reloadFeatureFlags();
    }
    shutdown(t) {
        var i = this;
        return p(function*() {
            var t, e, r, s, n, o, a;
            if (i.__loaded) {
                i.tu().dispose(), null == (t = i.sessionRecording) || t.dispose(), null == (e = i.logs) || e.flushLogs("sendBeacon"), null == (r = i.metrics) || r.flush("sendBeacon"), null == (s = i.Wl) || s.unload(), null == (n = i.Gl) || n.unload();
                try {
                    var l;
                    null == (l = i.featureFlags) || l.destroy();
                } catch (t) {
                    Ue.error("Error while destroying feature flags", t);
                }
                null == (o = i.persistence) || o.destroy(), null == (a = i.sessionPersistence) || a.destroy();
            } else Ue.uninitializedWarning("posthog.shutdown");
        })();
    }
    setIdentity(t, i) {
        var e;
        delete this.config.identity_claims, this.config.identity_distinct_id = t, this.config.identity_hash = i, this.alias(t), null == (e = this.conversations) || e.yu();
    }
    clearIdentity() {
        var t;
        delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null == (t = this.conversations) || t.bu();
    }
    get_distinct_id() {
        return this.get_property("distinct_id");
    }
    getGroups() {
        return this.get_property("$groups") || {};
    }
    get_session_id() {
        var t, i;
        return null !== (t = null == (i = this.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== t ? t : "";
    }
    get_session_replay_url(t) {
        if (!this.sessionManager) return "";
        var i = this.sessionManager.checkAndGetSessionAndWindowId(!0), e = i.sessionStartTimestamp, r = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + i.sessionId);
        if (null != t && t.withTimestamp && e) {
            var s, n = null !== (s = t.timestampLookBack) && void 0 !== s ? s : 10;
            if (!e) return r;
            r += "?t=" + Math.max(Math.floor(((new Date).getTime() - e) / 1e3) - n, 0);
        }
        return r;
    }
    alias(t, i) {
        return t === this.get_property(Ge) ? (Ue.critical("Attempting to create alias for existing People user - aborting."), -2) : this.fu("posthog.alias") ? (K(i) && (i = this.get_distinct_id()), t !== i ? (this.pu(Qe, t), this.capture("$create_alias", {
            alias: t,
            distinct_id: i
        })) : (Ue.warn("alias matches current distinct_id - skipping api call."), this.identify(t), -1)) : void 0;
    }
    set_config(t) {
        var i = _({}, this.config);
        if (W(t)) {
            var e, r, s, n, o, a, l, h, u, d, v, f;
            ds(this.config, Ul(t));
            var p = this.Al();
            null == (e = this.persistence) || e.update_config(this.config, i, p), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new Co(_({}, this.config, {
                persistence: "sessionStorage"
            }), p, !1);
            var g, m = this.Hl(this.config.debug);
            it(m) && (this.config.debug = m), it(this.config.debug) && (this.config.debug ? (c.DEBUG = !0, Fs.ri() && Fs.ii("ph_debug", !0), Ue.info("set_config", {
                config: t,
                oldConfig: i,
                newConfig: _({}, this.config)
            })) : (c.DEBUG = !1, Fs.ri() && Fs.ai("ph_debug"))), null == (r = this.featureFlags) || null == r.updateConfig || r.updateConfig(this.config, this.ho()), null == (s = this.exceptionObserver) || s.onConfigChange(), null == (n = this.exceptions) || n.onConfigChange(), null == (o = this.sessionRecording) || o.startIfEnabledOrStop(), null == (a = this.tracingHeaders) || a.startIfEnabledOrStop(), null == (l = this.autocapture) || l.startIfEnabled(), null == (h = this.heatmaps) || h.startIfEnabled(), ("capture_pageview" in t || "disable_capture_url_hashes" in t) && (null == (g = this.historyAutocapture) || g.startIfEnabledOrStop()), null == (u = this.exceptionObserver) || u.startIfEnabledOrStop(), null == (d = this.deadClicksAutocapture) || d.startIfEnabledOrStop(), null == (v = this.surveys) || v.loadIfEnabled(), this.Fl(), null == (f = this.externalIntegrations) || f.startIfEnabledOrStop();
        }
    }
    _overrideSDKInfo(t, i) {
        c.LIB_NAME = t, c.LIB_VERSION = i;
    }
    startSessionRecording(t) {
        var i, e, r, s, n, o = !0 === t, a = {
            sampling: o || !(null == t || !t.sampling),
            linked_flag: o || !(null == t || !t.linked_flag),
            url_trigger: o || !(null == t || !t.url_trigger),
            event_trigger: o || !(null == t || !t.event_trigger)
        };
        Object.values(a).some(Boolean) && (null == (i = this.sessionManager) || i.checkAndGetSessionAndWindowId(), a.sampling && (null == (e = this.sessionRecording) || e.overrideSampling()), a.linked_flag && (null == (r = this.sessionRecording) || r.overrideLinkedFlag()), a.url_trigger && (null == (s = this.sessionRecording) || s.overrideTrigger("url")), a.event_trigger && (null == (n = this.sessionRecording) || n.overrideTrigger("event")));
        this.set_config({
            disable_session_recording: !1
        });
    }
    stopSessionRecording() {
        this.set_config({
            disable_session_recording: !0
        });
    }
    sessionRecordingStarted() {
        var t;
        return !(null == (t = this.sessionRecording) || !t.started);
    }
    captureException(t, i) {
        if (this.exceptions) {
            var e = new Error("PostHog syntheticException"), r = this.exceptions.buildProperties(t, {
                handled: !0,
                syntheticException: e
            });
            return this.exceptions.sendExceptionEvent(_({}, r, i));
        }
    }
    addExceptionStep(t, i) {
        var e;
        null == (e = this.exceptions) || e.addExceptionStep(t, i);
    }
    captureLog(t) {
        var i;
        null == (i = this.logs) || i.captureLog(t);
    }
    get logger() {
        var t, i;
        return null !== (t = null == (i = this.logs) ? void 0 : i.logger) && void 0 !== t ? t : zl._u;
    }
    startExceptionAutocapture(t) {
        this.set_config({
            capture_exceptions: null == t || t
        });
    }
    stopExceptionAutocapture() {
        this.set_config({
            capture_exceptions: !1
        });
    }
    loadToolbar(t) {
        var i, e;
        return null !== (i = null == (e = this.toolbar) ? void 0 : e.loadToolbar(t)) && void 0 !== i && i;
    }
    get_property(t) {
        var i;
        return null == (i = this.persistence) ? void 0 : i.props[t];
    }
    getSessionProperty(t) {
        var i;
        return null == (i = this.sessionPersistence) ? void 0 : i.props[t];
    }
    toString() {
        var t, i = null !== (t = this.config.name) && void 0 !== t ? t : Ml;
        return i !== Ml && (i = Ml + "." + i), i;
    }
    _isIdentified() {
        var t, i;
        return (null == (t = this.persistence) ? void 0 : t.get_property(jr)) === is || (null == (i = this.sessionPersistence) ? void 0 : i.get_property(jr)) === is;
    }
    cu() {
        var t, i;
        return !("never" === this.config.person_profiles || this.config.person_profiles === es && !this._isIdentified() && G(this.getGroups()) && (null == (t = this.persistence) || null == (t = t.props) || !t[Qe]) && (null == (i = this.persistence) || null == (i = i.props) || !i[Vr]));
    }
    lu() {
        return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && !!this.config.capture_pageview;
    }
    createPersonProfile() {
        this.cu() || this.fu("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
    setInternalOrTestUser() {
        this.fu("posthog.setInternalOrTestUser") && this.setPersonProperties({
            $internal_or_test_user: !0
        });
    }
    fu(t) {
        return "never" === this.config.person_profiles ? (Ue.error(t + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this.El(), this.pu(Vr, !0), !0);
    }
    Al() {
        if ("always" === this.config.cookieless_mode) return !0;
        var t = this.consent.isOptedOut();
        return this.config.disable_persistence || t && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== Xr);
    }
    Fl() {
        var t, i, e, r, s, n = this.Al();
        return this.is_capturing() || null == (e = this.logs) || e.wu(), (null == (t = this.persistence) ? void 0 : t.xa) !== n && (null == (r = this.persistence) || r.set_disabled(n)), (null == (i = this.sessionPersistence) ? void 0 : i.xa) !== n && (null == (s = this.sessionPersistence) || s.set_disabled(n)), n && (this.Ll.clear(), this.vu()), n;
    }
    opt_in_capturing(t) {
        var i;
        if (this.config.cookieless_mode !== Zr) {
            if (this.Ml()) {
                var e, r, s, n, o, a;
                null == (e = this.sessionRecording) || e.dispose({
                    discardBufferedEvents: !0
                }), this.mu(!0, !0), null == (r = this.sessionManager) || r.destroy(), null == (s = this.pageViewManager) || s.destroy(), this.sessionManager = new il(this), this.pageViewManager = new Gn(this), this.persistence && (this.sessionPropsManager = new Qa(this, this.sessionManager, this.persistence));
                var l, h = null !== (n = null == (o = this.config.__extensionClasses) ? void 0 : o.sessionRecording) && void 0 !== n ? n : null == (a = zl.__defaultExtensionClasses) ? void 0 : a.sessionRecording;
                h && (this.sessionRecording = this.Tl(this.sessionRecording, new h(this)), this._l && (null == (l = this.sessionRecording) || null == l.onRemoteConfig || l.onRemoteConfig(this._l)));
            }
            var u, d;
            this.consent.optInOut(!0), this.Fl(), this.su(), null == (i = this.sessionRecording) || i.startIfEnabledOrStop(), this.config.cookieless_mode == Xr && (null == (u = this.surveys) || u.loadIfEnabled()), (K(null == t ? void 0 : t.captureEventName) || null != t && t.captureEventName) && this.capture(null !== (d = null == t ? void 0 : t.captureEventName) && void 0 !== d ? d : "$opt_in", null == t ? void 0 : t.captureProperties, {
                send_instantly: !0
            }), this.config.capture_pageview && this.au();
        } else Ue.warn(Cl);
    }
    opt_out_capturing() {
        if (this.config.cookieless_mode !== Zr) {
            var t, i, e = this.config.cookieless_mode === Xr ? this.sessionRecording : void 0;
            null == e || e.dispose({
                discardBufferedEvents: !0
            }), this.config.cookieless_mode === Xr && this.consent.isOptedIn() && this.mu(!0, !0), this.consent.optInOut(!1), this.Fl(), this.config.cookieless_mode === Xr && (this.register({
                distinct_id: Wr,
                $device_id: null
            }), this.Cl(e), this.sessionRecording = void 0, null == (t = this.sessionManager) || t.destroy(), null == (i = this.pageViewManager) || i.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this.au(), this.su());
        } else Ue.warn(Cl);
    }
    has_opted_in_capturing() {
        return this.consent.isOptedIn();
    }
    has_opted_out_capturing() {
        return this.consent.isOptedOut();
    }
    get_explicit_consent_status() {
        var t = this.consent.consent;
        return 1 === t ? "granted" : 0 === t ? "denied" : "pending";
    }
    is_capturing() {
        return this.config.cookieless_mode === Zr || (this.config.cookieless_mode === Xr ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
    }
    clear_opt_in_out_capturing() {
        this.consent.reset(), this.Fl();
    }
    _is_bot() {
        return e ? el(e, this.config.custom_blocked_useragents) : void 0;
    }
    au() {
        r && ("visible" === r.visibilityState ? this.Nl || (this.Nl = !0, this.capture(ns, {
            title: r.title
        }, {
            send_instantly: !0
        }), this.ql && (r.removeEventListener(rs, this.ql), this.ql = null)) : this.ql || (this.ql = this.au.bind(this), ms(r, rs, this.ql)));
    }
    debug(i) {
        !1 === i ? (null == t || t.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
        })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
        }));
    }
    ho() {
        var t = this.zl || {};
        return "advanced_disable_flags" in t ? !!t.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (Ue.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(t, i, e, r, s) {
            var n = i in t && !X(t[i]), o = e in t && !X(t[e]);
            return n ? t[i] : !!o && (s && s.warn("Config field '" + e + "' is deprecated. Please use '" + i + "' instead. The old field will be removed in a future major version."), t[e]);
        }(t, "advanced_disable_flags", "advanced_disable_decide", 0, Ue);
    }
    Xn(t) {
        var i;
        if (X(this.config.before_send)) return t;
        var e = Object.keys(null !== (i = t.properties) && void 0 !== i ? i : {}).filter(st), r = q(this.config.before_send) ? this.config.before_send : [
            this.config.before_send
        ], s = t;
        for (var n of r)try {
            if (s = n(s), X(s)) {
                var o = "Event '" + t.event + "' was rejected in beforeSend function";
                return rt(t.event) ? Ue.warn(o + ". This can cause unexpected behavior.") : Ue.info(o), null;
            }
            s.properties && !G(s.properties) || Ue.warn("Event '" + t.event + "' has no properties after beforeSend function, this is likely an error.");
        } catch (i) {
            return Ue.error("Error in beforeSend function for event '" + t.event + "':", i), null;
        }
        for (var a of e)if (s.properties && X(s.properties[a])) return Ue.warn("Event '" + t.event + "' had its '" + a + "' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped."), null;
        return s;
    }
    getPageViewId() {
        var t;
        return null == (t = this.pageViewManager.ta) ? void 0 : t.pageViewId;
    }
    captureTraceFeedback(t, i) {
        this.capture("$ai_feedback", {
            $ai_trace_id: String(t),
            $ai_feedback_text: i
        });
    }
    captureTraceMetric(t, i, e) {
        this.capture("$ai_metric", {
            $ai_trace_id: String(t),
            $ai_metric_name: i,
            $ai_metric_value: String(e)
        });
    }
    Hl(t) {
        var i = it(t) && !t, e = Fs.ri() && "true" === Fs.ni("ph_debug");
        return !i && (!!e || t);
    }
    constructor(){
        var t;
        this.webPerformance = new Bl, this.Ol = !1, this.version = c.LIB_VERSION, this.Ll = new Set, this.Dl = "", this.wl = new Xa, this.ml = [], this.$l = [], this.Rl = !1, this.Il = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = Ll(), this.SentryIntegration = Wn, this.sentryIntegration = (t)=>(function(t, i) {
                var e = Vn(t, i);
                return {
                    name: qn,
                    processEvent: (t)=>e(t)
                };
            })(this, t), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.Nl = !1, this.ql = null, this.jl = null, this.Bl = null, this.scrollManager = new Ja(this), this.pageViewManager = new Gn(this), this.rateLimiter = new Ko(this), this.requestRouter = new fl(this), this.consent = new Ks(this), this.externalIntegrations = new Sl(this);
        var i = null !== (t = zl.__defaultExtensionClasses) && void 0 !== t ? t : {};
        this.featureFlags = i.featureFlags && new i.featureFlags(this), this.toolbar = i.toolbar && new i.toolbar(this), this.surveys = i.surveys && new i.surveys(this), this.conversations = i.conversations && new i.conversations(this), this.logs = i.logs && new i.logs(this), this.metrics = i.metrics && new i.metrics(this), this.experiments = i.experiments && new i.experiments(this), this.exceptions = i.exceptions && new i.exceptions(this), this.people = {
            set: (t, i, e)=>{
                var r = J(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(r), null == e || e({});
            },
            set_once: (t, i, e)=>{
                var r = J(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(void 0, r), null == e || e({});
            }
        }, this.on("eventCaptured", (t)=>Ue.info('send "' + (null == t ? void 0 : t.event) + '"', t));
    }
}
zl.__defaultExtensionClasses = {}, zl._u = (()=>{
    var t = ()=>{};
    return {
        trace: t,
        debug: t,
        info: t,
        warn: t,
        error: t,
        fatal: t
    };
})(), function(t, i) {
    for(var e = 0; i.length > e; e++)t.prototype[i[e]] = fs(t.prototype[i[e]]);
}(zl, [
    "identify"
]);
class Hl {
    isRageClick(t, i, e) {
        if (this.disabled) return !1;
        var r = this.clicks[this.clicks.length - 1];
        if (r && Math.abs(t - r.x) + Math.abs(i - r.y) < this.thresholdPx && this.timeoutMs > e - r.timestamp) {
            if (this.clicks.push({
                x: t,
                y: i,
                timestamp: e
            }), this.clicks.length === this.clickCount) return !0;
        } else this.clicks = [
            {
                x: t,
                y: i,
                timestamp: e
            }
        ];
        return !1;
    }
    constructor(t){
        this.disabled = !1 === t;
        var i = W(t) ? t : {};
        this.thresholdPx = i.threshold_px || 30, this.timeoutMs = i.timeout_ms || 1e3, this.clickCount = i.click_count || 3, this.clicks = [];
    }
}
var ql = "$copy_autocapture", Vl = Be("[AutoCapture]");
function Wl(t, i) {
    return i.length > t ? i.slice(0, t) + "..." : i;
}
function Gl(t) {
    if (t.previousElementSibling) return t.previousElementSibling;
    var i = t;
    do {
        i = i.previousSibling;
    }while (i && !en(i))
    return i;
}
function Kl(i, e) {
    var r, s, n = e.e, o = e.maskAllElementAttributes, a = e.maskAllText, l = e.elementAttributeIgnoreList, h = e.elementsChainAsString, u = e.disableCaptureUrlHashes;
    if (!en(i)) return {
        props: {}
    };
    for(var d = [
        i
    ], v = new Set([
        i
    ]), c = i; c.parentNode && !rn(c, "body") && on > d.length;)if (nn(c.parentNode)) {
        var f = c.parentNode.host;
        if (v.has(f)) break;
        v.add(f), d.push(f), c = f;
    } else {
        if (!en(c.parentNode)) break;
        if (v.has(c.parentNode)) break;
        v.add(c.parentNode), d.push(c.parentNode), c = c.parentNode;
    }
    var p, g, m = [], y = {}, b = !1, w = !1;
    if (us(d, (t)=>{
        var i = kn(t);
        if (rn(t, "a")) {
            var e = t.getAttribute("href");
            b = !!(i && e && An(e)) && (u ? $i(e) : e);
        }
        N(hn(t), "ph-no-capture") && (w = !0), m.push(function(t, i, e, r, s) {
            void 0 === s && (s = !1);
            var n = t.tagName.toLowerCase(), o = {
                tag_name: n
            };
            cn.indexOf(n) > -1 && !e && (o.$el_text = "a" === n.toLowerCase() || "button" === n.toLowerCase() ? Wl(1024, Mn(t)) : Wl(1024, dn(t)));
            var a = hn(t);
            a.length > 0 && (o.classes = a.filter(function(t) {
                return "" !== t;
            })), us(t.attributes, function(e) {
                var n;
                if ((!Tn(t) || -1 !== [
                    "name",
                    "id",
                    "class",
                    "aria-label"
                ].indexOf(e.name)) && (null == r || !r.includes(e.name)) && !i && An(e.value) && (!J(n = e.name) || "_ngcontent" !== n.substring(0, 10) && "_nghost" !== n.substring(0, 7))) {
                    var a = e.value;
                    "class" === e.name && (a = an(a).join(" ")), o["attr__" + e.name] = Wl(1024, "href" === e.name && s ? $i(a) : a);
                }
            });
            for(var l = 1, h = 1, u = t; u = Gl(u);)l++, u.tagName === t.tagName && h++;
            return o.nth_child = l, o.nth_of_type = h, o;
        }(t, o, a, l, u));
        var r = function(t) {
            if (!kn(t)) return {};
            var i = {};
            return us(t.attributes, function(t) {
                if (t.name && 0 === t.name.indexOf("data-ph-capture-attribute")) {
                    var e = t.name.replace("data-ph-capture-attribute-", ""), r = t.value;
                    e && r && An(r) && (i[e] = r);
                }
            }), i;
        }(t);
        us(r, (t, i)=>{
            ({}).hasOwnProperty.call(y, i) || (y[i] = t);
        });
    }), w) return {
        props: {},
        explicitNoCapture: w
    };
    if (a || (m[0].$el_text = rn(i, "a") || rn(i, "button") ? Mn(i) : dn(i)), b) {
        var S, x;
        m[0].attr__href = b;
        var E = null == (S = Zn(b)) ? void 0 : S.host, k = null == t || null == (x = t.location) ? void 0 : x.host;
        E && k && E !== k && (p = b);
    }
    return {
        props: ds({
            $event_type: n.type,
            $ce_version: 1
        }, h ? {} : {
            $elements: m
        }, {
            $elements_chain: (g = m, q(g) ? function(t) {
                return t.map((t)=>{
                    var i, e, r = "";
                    if (t.tag_name && (r += t.tag_name), t.attr_class) for (var s of (t.attr_class.sort(), t.attr_class))r += "." + s.replace(/"/g, "");
                    var n = _({}, t.text ? {
                        text: t.text
                    } : {}, {
                        "nth-child": null !== (i = t.nth_child) && void 0 !== i ? i : 0,
                        "nth-of-type": null !== (e = t.nth_of_type) && void 0 !== e ? e : 0
                    }, t.href ? {
                        href: t.href
                    } : {}, t.attr_id ? {
                        attr_id: t.attr_id
                    } : {}, t.attributes), o = {};
                    return vs(n).sort((t, i)=>{
                        return (r = i[0]) > (e = t[0]) ? -1 : e > r ? 1 : 0;
                        //TURBOPACK unreachable
                        ;
                        var e, r;
                    }).forEach((t)=>{
                        var i = t[1];
                        return o[Nn(t[0].toString())] = Nn(i.toString());
                    }), (r += ":") + vs(o).map((t)=>t[0] + '="' + t[1] + '"').join("");
                }).join(";");
            }(function(t) {
                return t.map((t)=>{
                    var i, e, r = {
                        text: null == (i = t.$el_text) ? void 0 : i.slice(0, 400),
                        tag_name: t.tag_name,
                        href: null == (e = t.attr__href) ? void 0 : e.slice(0, 2048),
                        attr_class: Ln(t),
                        attr_id: t.attr__id,
                        nth_child: t.nth_child,
                        nth_of_type: t.nth_of_type,
                        attributes: {}
                    };
                    return vs(t).filter((t)=>0 === t[0].indexOf("attr__")).forEach((t)=>r.attributes[t[0]] = t[1]), r;
                });
            }(g)) : "")
        }, null != (r = m[0]) && r.$el_text ? {
            $el_text: null == (s = m[0]) ? void 0 : s.$el_text
        } : {}, p && "click" === n.type ? {
            $external_click_url: p
        } : {}, y)
    };
}
class Jl {
    setup(t) {
        this.Ds(), this.$s = t;
        var i = t.onRemoteConfig(this.onRemoteConfig.bind(this));
        this.Fs ? i.dispose() : (this.Ns = i, this.startIfEnabled());
    }
    dispose() {
        var t;
        this.Fs || (this.Fs = !0, this.$s = void 0, null == (t = this.Ns) || t.dispose(), this.Ns = void 0, this.qs());
    }
    js() {
        return this.Os.refresh(this.gn), this.gn;
    }
    Ds() {
        var t, i;
        return this.js(), this.gn.url_allowlist = null == (t = this.gn.url_allowlist) ? void 0 : t.map((t)=>new RegExp(t)), this.gn.url_ignorelist = null == (i = this.gn.url_ignorelist) ? void 0 : i.map((t)=>new RegExp(t)), this.gn;
    }
    Bs() {
        if (this.isBrowserSupported()) {
            if (t && r) {
                var i = this.Hs = (i)=>{
                    i = i || (null == t ? void 0 : t.event);
                    try {
                        this.zs(i);
                    } catch (t) {
                        Vl.error("Failed to capture event", t);
                    }
                };
                if (ms(r, "submit", i, {
                    capture: !0
                }), ms(r, "change", i, {
                    capture: !0
                }), ms(r, "click", i, {
                    capture: !0
                }), this.js().capture_copied_text) {
                    var e = this.Us = (i)=>{
                        i = i || (null == t ? void 0 : t.event);
                        try {
                            this.zs(i, ql);
                        } catch (t) {
                            Vl.error("Failed to capture clipboard event", t);
                        }
                    };
                    ms(r, "copy", e, {
                        capture: !0
                    }), ms(r, "cut", e, {
                        capture: !0
                    }), ms(r, "paste", e, {
                        capture: !0
                    });
                }
            }
        } else Vl.info("Disabling Automatic Event Collection because this browser is not supported");
    }
    qs() {
        this.Hs && (null == r || r.removeEventListener("submit", this.Hs, !0), null == r || r.removeEventListener("change", this.Hs, !0), null == r || r.removeEventListener("click", this.Hs, !0), this.Hs = void 0), this.Us && (null == r || r.removeEventListener("copy", this.Us, !0), null == r || r.removeEventListener("cut", this.Us, !0), null == r || r.removeEventListener("paste", this.Us, !0), this.Us = void 0), this.Is = !1;
    }
    startIfEnabled() {
        !this.Fs && this.$s && this.isEnabled && !this.Is && (this.Bs(), this.Is = !0);
    }
    onRemoteConfig(t) {
        if (!this.Fs) if (this.Ps = !0, t.ok) {
            var i = t.config;
            i.elementsChainAsString && (this.As = i.elementsChainAsString);
            var e, r = i.autocapture_opt_out;
            it(r) && (null == (e = this.$s) || e.kv.set(Ze, r), this.Rs = r), this.startIfEnabled();
        } else this.startIfEnabled();
    }
    setElementSelectors(t) {
        this.Ls = t;
    }
    getElementSelectors(t) {
        var i, e = [];
        return null == (i = this.Ls) || i.forEach((i)=>{
            var s = null == r ? void 0 : r.querySelectorAll(i);
            null == s || s.forEach((r)=>{
                t === r && e.push(i);
            });
        }), e;
    }
    get isEnabled() {
        var t, i;
        if (this.Fs) return !1;
        var e = null == (t = this.$s) ? void 0 : t.kv.get(Ze), r = this.Rs, s = this.js(), n = s.remoteRequestsDisabled && !this.Ps;
        if (Q(r) && !it(e) && !n) return !1;
        var o = null !== (i = this.Rs) && void 0 !== i ? i : !!e;
        return !!s.enabled && !o;
    }
    zs(i, e) {
        if (void 0 === e && (e = "$autocapture"), this.isEnabled) {
            var r = vn(i);
            sn(r) && (r = r.parentNode || null);
            var s, n = this.Ds();
            "$autocapture" === e && "click" === i.type && i instanceof MouseEvent && n.rageclick && null != (s = this.rageclicks) && s.isRageClick(i.clientX, i.clientY, i.timeStamp || (new Date).getTime()) && Sn(r, n.rageclick) && this.zs(i, "$rageclick");
            var o = e === ql, a = o ? _({}, n, {
                dom_event_allowlist: void 0
            }) : n;
            if (r && function(i, e, r, s, n, o) {
                var a;
                if (!t || xn(i)) return !1;
                if (null != r && r.url_allowlist && !ln(r.url_allowlist, o)) return !1;
                if (null != r && r.url_ignorelist && ln(r.url_ignorelist, o)) return !1;
                if (null != r && r.dom_event_allowlist) {
                    var l = r.dom_event_allowlist;
                    if (l && !l.some((t)=>e.type === t)) return !1;
                }
                var h = En(i, s), u = h.parentIsUsefulElement, d = h.targetElementList;
                if (!function(t, i) {
                    var e = null == i ? void 0 : i.element_allowlist;
                    if (K(e)) return !0;
                    var r, s = function(t) {
                        if (e.some((i)=>t.tagName.toLowerCase() === i)) return {
                            v: !0
                        };
                    };
                    for (var n of t)if (r = s(n)) return r.v;
                    return !1;
                }(d, r)) return !1;
                if (!fn(d, null == r ? void 0 : r.css_selector_allowlist)) return !1;
                if (fn(d, null !== (a = null == r ? void 0 : r.css_selector_ignorelist) && void 0 !== a ? a : _n)) return !1;
                try {
                    var v = t.getComputedStyle(i);
                    if (v && "pointer" === v.getPropertyValue("cursor") && "click" === e.type) return !0;
                } catch (t) {}
                var c = i.tagName.toLowerCase();
                switch(c){
                    case "html":
                        return !1;
                    case "form":
                        return (n || [
                            "submit"
                        ]).indexOf(e.type) >= 0;
                    case "input":
                    case "select":
                    case "textarea":
                        return (n || [
                            "change",
                            "click"
                        ]).indexOf(e.type) >= 0;
                    default:
                        return u ? (n || [
                            "click"
                        ]).indexOf(e.type) >= 0 : (n || [
                            "click"
                        ]).indexOf(e.type) >= 0 && (cn.indexOf(c) > -1 || "true" === i.getAttribute("contenteditable"));
                }
            }(r, i, a, o, o ? [
                "copy",
                "cut",
                "paste"
            ] : void 0, {
                config: {
                    get_current_url: n.getCurrentUrl
                }
            })) {
                var l, h = Kl(r, {
                    e: i,
                    maskAllElementAttributes: n.maskAllElementAttributes,
                    maskAllText: n.maskAllText,
                    elementAttributeIgnoreList: n.element_attribute_ignorelist,
                    elementsChainAsString: this.As,
                    disableCaptureUrlHashes: n.disableCaptureUrlHashes
                }), u = h.props;
                if (h.explicitNoCapture) return !1;
                var d = this.getElementSelectors(r);
                if (d && d.length > 0 && (u.$element_selectors = d), e === ql) {
                    var v = i.type || "clipboard";
                    if ("paste" !== v) {
                        var c, f, p = null == t || null == (c = t.getSelection()) ? void 0 : c.toString(), g = un(p);
                        if (!g) return !1;
                        u.$selected_content = g, u.$clipboard_text_length = null !== (f = null == p ? void 0 : p.length) && void 0 !== f ? f : 0;
                    }
                    u.$copy_type = v;
                }
                return null == (l = this.$s) || l.capture(e, u).catch((t)=>Vl.error("Failed to capture event", t)), !0;
            }
        }
    }
    isBrowserSupported() {
        return V(null == r ? void 0 : r.querySelectorAll);
    }
    constructor(t){
        this.name = "autocapture", this.Is = !1, this.Rs = null, this.Ps = !1, this.As = !1, this.gn = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
        }, this.Fs = !1, this.Os = t, this.Os.refresh(this.gn), this.rageclicks = new Hl(this.gn.rageclick), this.Ls = null;
    }
}
class Yl {
    refresh(t) {
        var i = this._instance.config, e = W(i.autocapture) ? i.autocapture : void 0;
        t.enabled = !!i.autocapture, t.rageclick = i.rageclick, t.maskAllElementAttributes = i.mask_all_element_attributes, t.maskAllText = i.mask_all_text, t.disableCaptureUrlHashes = i.disable_capture_url_hashes, t.getCurrentUrl = i.get_current_url, t.remoteRequestsDisabled = this._instance.ho(), t.url_allowlist = null == e ? void 0 : e.url_allowlist, t.url_ignorelist = null == e ? void 0 : e.url_ignorelist, t.dom_event_allowlist = null == e ? void 0 : e.dom_event_allowlist, t.element_allowlist = null == e ? void 0 : e.element_allowlist, t.css_selector_allowlist = null == e ? void 0 : e.css_selector_allowlist, t.css_selector_ignorelist = null == e ? void 0 : e.css_selector_ignorelist, t.element_attribute_ignorelist = null == e ? void 0 : e.element_attribute_ignorelist, t.capture_copied_text = null == e ? void 0 : e.capture_copied_text;
    }
    constructor(t){
        this._instance = t;
    }
}
var Ql = Be("[ExceptionAutocapture]"), Xl = ()=>{}, Zl = (t)=>{
    var i;
    if (V(t)) return null !== (i = t.__posthog_layer__) && void 0 !== i ? i : t.__rrweb_layer__;
};
function th(t, i, e) {
    try {
        if (!(i in t)) return Xl;
        var r = {
            next: t[i]
        }, s = e(function() {
            for(var t = arguments.length, i = new Array(t), e = 0; t > e; e++)i[e] = arguments[e];
            return r.next.apply(this, i);
        });
        return V(s) && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
            __posthog_wrapped__: {
                enumerable: !1,
                value: !0
            },
            __posthog_layer__: {
                enumerable: !1,
                value: r
            }
        })), t[i] = s, ()=>{
            if (t[i] !== s) for(var e = t[i], n = Zl(e); n;){
                if (n.next === s) return void (n.next = r.next);
                n = Zl(e = n.next);
            }
            else t[i] = r.next;
        };
    } catch (t) {
        return Xl;
    }
}
var ih = Be("[TracingHeaders]"), eh = Be("[Web Vitals]"), rh = 9e5, sh = [
    "CLS",
    "FCP",
    "INP",
    "LCP"
], nh = [
    "INP",
    "LCP"
], oh = [
    "interactionTarget",
    "interactionType",
    "inputDelay",
    "processingDuration",
    "presentationDelay",
    "loadState",
    "target",
    "url",
    "timeToFirstByte",
    "resourceLoadDelay",
    "resourceLoadDuration",
    "elementRenderDelay",
    "largestShiftTarget",
    "largestShiftTime",
    "largestShiftValue",
    "firstByteToFCP"
], ah = "disabled", lh = "lazy_loading", hh = "awaiting_config", uh = "missing_config";
Be("[SessionRecording]"), Be("[SessionRecording]");
var dh = "[SessionRecording]", vh = Be(dh), ch = Be("[Heatmaps]");
function fh(t) {
    return W(t) && "clientX" in t && "clientY" in t && Z(t.clientX) && Z(t.clientY);
}
var ph = Be("[Product Tours]"), _h = (t)=>{
    var i;
    return !t.config.disable_product_tours && !(null == (i = t.persistence) || !i.get_property(or));
}, gh = [
    "$set_once",
    "$set"
], mh = Be("[SiteApps]"), yh = "Error while initializing PostHog app with config id ", bh = (t, i)=>null != t && t.then ? t.then(i) : i(t), wh = "SDK is not enabled or survey functionality is not yet loaded", Sh = "Disabled. Not loading surveys.";
class xh {
    setup(t) {
        if (!this.Fs) return this.Iu = t, bh(t.kv.initialize(), ()=>{
            if (this.Iu === t && !this.Fs) {
                this.Iu = void 0, this.$s = t;
                var i = t.onRemoteConfig(this.onRemoteConfig);
                this.Fs ? i.dispose() : (this.Ns = i, this.loadIfEnabled());
            }
        });
    }
    dispose() {
        var t, i, e;
        this.Fs || (this.Fs = !0, this.Iu = void 0, this.$s = void 0, null == (t = this.Ns) || t.dispose(), this.Ns = void 0, null == (i = this._surveyEventReceiver) || i.dispose(), this._surveyEventReceiver = null, null == (e = this._surveyManager) || null == e.dispose || e.dispose(), this._surveyManager = null, this.Su = [], this.xu = null, this.Tu.forEach((t)=>clearTimeout(t)), this.Tu.clear());
    }
    get gn() {
        return this.Os.get();
    }
    initialize() {
        this.loadIfEnabled();
    }
    reset() {
        try {
            var t;
            null == (t = this._surveyEventReceiver) || t.reset(), localStorage.removeItem("lastSeenSurveyDate");
            for(var i = [], e = 0; e < localStorage.length; e++){
                var r = localStorage.key(e);
                (null != r && r.startsWith(_l) || null != r && r.startsWith("inProgressSurvey_")) && i.push(r);
            }
            i.forEach((t)=>localStorage.removeItem(t));
        } catch (t) {}
    }
    loadIfEnabled() {
        if (!this.Fs && this.$s) {
            var t = this.gn;
            if (!this._surveyManager) if (this.ku) pl.info("Already initializing surveys, skipping...");
            else if (t.disableSurveys) pl.info(Sh);
            else if (t.cookielessMode && this.Os.isOptedOut()) pl.info("Not loading surveys in cookieless mode without consent.");
            else {
                var i = this.Os.getExtensions();
                if (i) {
                    if (!K(this.Mu) || t.advancedEnableSurveys) {
                        var e = this.Mu || t.advancedEnableSurveys;
                        this.ku = !0;
                        try {
                            var r = i.generateSurveys;
                            if (r) return this.Ru(r, e), void (this.ku = !1);
                            var s = i.loadExternalDependency;
                            if (!s) return this.Pu(Qr), void (this.ku = !1);
                            s((t)=>{
                                try {
                                    if (this.Fs) return;
                                    var i = this.Os.getExtensions();
                                    t || null == i || !i.generateSurveys ? this.Pu("Could not load surveys script", t) : this.Ru(i.generateSurveys, e);
                                } finally{
                                    this.ku = !1;
                                }
                            });
                        } catch (t) {
                            throw this.ku = !1, this.Pu("Error initializing surveys", t), t;
                        }
                    }
                } else pl.error("PostHog Extensions not found.");
            }
        }
    }
    Ru(t, i) {
        this.Fs || (this._surveyManager = t(i), this._surveyEventReceiver = this.Os.createEventReceiver(), pl.info("Surveys loaded successfully"), this.Au({
            isLoaded: !0
        }));
    }
    Pu(t, i) {
        pl.error(t, i), this.Au({
            isLoaded: !1,
            error: t
        });
    }
    onSurveysLoaded(t) {
        return this.Su.push(t), this._surveyManager && this.Au({
            isLoaded: !0
        }), ()=>{
            this.Su = this.Su.filter((i)=>i !== t);
        };
    }
    getSurveys(t, i) {
        var e;
        void 0 === i && (i = !1);
        var r = null !== (e = this.$s) && void 0 !== e ? e : this.Eu;
        if (r && !this.Fs) {
            if (this.gn.disableSurveys) return pl.info(Sh), t([]);
            var s = r.kv.get(Rr);
            if (s && !i) return t(s, {
                isLoaded: !0
            }), void (this.Fu() && this.getSurveys(()=>{}, !0));
            if (this.xu) this.xu.then((i)=>{
                this.Fs || t(i.surveys, i.context);
            }).catch((t)=>pl.error("Error in survey callback", t));
            else {
                var n = this.Ou("/api/surveys/", {
                    method: "GET",
                    query: {
                        token: r.projectToken
                    },
                    sentAt: "query",
                    timeoutMs: this.gn.requestTimeoutMs
                }).then((t)=>{
                    try {
                        return this.Lu(r, t);
                    } catch (t) {
                        return pl.error("Error processing surveys response", t), this.Lu(r, {
                            statusCode: 0,
                            error: t
                        });
                    }
                }, (t)=>this.Lu(r, {
                        statusCode: 0,
                        error: t
                    }));
                this.xu = n;
                var o = ()=>{
                    this.xu === n && (this.xu = null);
                };
                n.then((i)=>{
                    o(), this.Fs || t(i.surveys, i.context);
                }, o).catch((t)=>pl.error("Error in survey callback", t));
            }
        }
    }
    Ou(t, i) {
        var e = this.$s;
        return e ? e.sendRequest(t, i) : new Promise((t)=>t({
                statusCode: 0,
                error: new Error(wh)
            }));
    }
    Lu(t, i) {
        if (this.Fs) return {
            surveys: [],
            context: {
                isLoaded: !1,
                error: wh
            }
        };
        var e = i.statusCode;
        if (200 !== e || !i.json) {
            var r = "Surveys API could not be loaded, status: " + e;
            return 0 !== e ? pl.error(r) : i.error || pl.warn(r), this.Cu = Date.now(), {
                surveys: [],
                context: {
                    isLoaded: !1,
                    error: r
                }
            };
        }
        this.Cu = null;
        var s, n = i.json.surveys || [], o = n.filter((t)=>(function(t) {
                return !(!t.start_date || t.end_date);
            })(t) && (sl(t) || function(t) {
                var i;
                return !(null == (i = t.conditions) || null == (i = i.actions) || null == (i = i.values) || !i.length);
            }(t)));
        return o.length > 0 && (null == (s = this._surveyEventReceiver) || s.register(o)), t.kv.set({
            [Rr]: n,
            [Cr]: Date.now()
        }), {
            surveys: n,
            context: {
                isLoaded: !0
            }
        };
    }
    Fu() {
        return this.Du() && !this.xu && !this.$u();
    }
    Du() {
        var t, i, e = null == (t = null !== (i = this.$s) && void 0 !== i ? i : this.Eu) ? void 0 : t.kv.get(Cr);
        return Z(e) && Date.now() - e > 3e5;
    }
    $u() {
        return Z(this.Cu) && 3e5 > Date.now() - this.Cu;
    }
    markSurveyAsSeen(t, i) {
        var e, r = {
            id: t,
            current_iteration: null !== (e = null == i ? void 0 : i.iteration) && void 0 !== e ? e : null
        };
        gl(r);
        try {
            localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString());
        } catch (t) {}
    }
    Au(t) {
        for (var i of this.Su)try {
            if (!t.isLoaded) return i([], t);
            this.getSurveys(i);
        } catch (t) {
            pl.error("Error in survey callback", t);
        }
    }
    getActiveMatchingSurveys(t, i) {
        if (void 0 === i && (i = !1), !X(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(t, i);
        pl.warn("init was not called");
    }
    Nu(t) {
        var i = null;
        return this.getSurveys((e)=>{
            var r;
            i = null !== (r = e.find((i)=>i.id === t)) && void 0 !== r ? r : null;
        }), i;
    }
    qu(t) {
        if (X(this._surveyManager)) return {
            eligible: !1,
            reason: wh
        };
        var i = "string" == typeof t ? this.Nu(t) : t;
        return i ? this._surveyManager.checkSurveyEligibility(i) : {
            eligible: !1,
            reason: "Survey not found"
        };
    }
    ju(t) {
        if (X(this._surveyManager)) return {
            eligible: !1,
            reason: wh
        };
        var i = "string" == typeof t ? this.Nu(t) : t;
        return i ? this._surveyManager.checkSurveyRenderability(i) : {
            eligible: !1,
            reason: "Survey not found"
        };
    }
    canRenderSurvey(t) {
        if (X(this._surveyManager)) return pl.warn("init was not called"), {
            visible: !1,
            disabledReason: wh
        };
        var i = this.ju(t);
        return {
            visible: i.eligible,
            disabledReason: i.reason
        };
    }
    canRenderSurveyAsync(t, i) {
        return X(this._surveyManager) ? (pl.warn("init was not called"), Promise.resolve({
            visible: !1,
            disabledReason: wh
        })) : new Promise((e)=>{
            this.getSurveys((i)=>{
                var r, s = null !== (r = i.find((i)=>i.id === t)) && void 0 !== r ? r : null;
                if (s) {
                    var n = this.ju(s);
                    e({
                        visible: n.eligible,
                        disabledReason: n.reason
                    });
                } else e({
                    visible: !1,
                    disabledReason: "Survey not found"
                });
            }, i);
        });
    }
    renderSurvey(t, i, e) {
        var s;
        if (X(this._surveyManager)) pl.warn("init was not called");
        else {
            var n = "string" == typeof t ? this.Nu(t) : t;
            if (null != n && n.id) if (ml.includes(n.type)) {
                var o = null == r ? void 0 : r.querySelector(i);
                if (o) if (null != (s = n.appearance) && s.surveyPopupDelaySeconds) {
                    pl.info("Rendering survey " + n.id + " with delay of " + n.appearance.surveyPopupDelaySeconds + " seconds");
                    var a = setTimeout(()=>{
                        var t, i;
                        this.Tu.delete(a), this.Fs || (pl.info("Rendering survey " + n.id + " with delay of " + (null == (t = n.appearance) ? void 0 : t.surveyPopupDelaySeconds) + " seconds"), null == (i = this._surveyManager) || i.renderSurvey(n, o, e), pl.info("Survey " + n.id + " rendered"));
                    }, 1e3 * n.appearance.surveyPopupDelaySeconds);
                    this.Tu.add(a);
                } else this._surveyManager.renderSurvey(n, o, e);
                else pl.warn("Survey element not found");
            } else pl.warn("Surveys of type " + n.type + " cannot be rendered in the app");
            else pl.warn("Survey not found");
        }
    }
    displaySurvey(t, i) {
        var e;
        if (X(this._surveyManager)) pl.warn("init was not called");
        else {
            var r = this.Nu(t);
            if (r) {
                var s = r;
                if (null != (e = r.appearance) && e.surveyPopupDelaySeconds && i.ignoreDelay && (s = _({}, r, {
                    appearance: _({}, r.appearance, {
                        surveyPopupDelaySeconds: 0
                    })
                })), i.displayType !== Ho.Popover && i.initialResponses && pl.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === i.ignoreConditions) {
                    var n = this.qu(r);
                    if (!n.eligible) return void pl.warn("Survey is not eligible to be displayed: ", n.reason);
                }
                i.displayType !== Ho.Inline ? this._surveyManager.handlePopoverSurvey(s, i) : this.renderSurvey(s, i.selector, i.properties);
            } else pl.warn("Survey not found");
        }
    }
    cancelPendingSurvey(t) {
        X(this._surveyManager) ? pl.warn("init was not called") : this._surveyManager.cancelSurvey(t);
    }
    handlePageUnload() {
        var t;
        null == (t = this._surveyManager) || null == t.handlePageUnload || t.handlePageUnload();
    }
    constructor(t, i){
        this.name = "surveys", this._surveyEventReceiver = null, this._surveyManager = null, this.ku = !1, this.Su = [], this.xu = null, this.Cu = null, this.Fs = !1, this.Tu = new Set, this.onRemoteConfig = (t)=>{
            if (!this.Fs && !this.gn.disableSurveys) {
                if (!t.ok) return pl.warn("Remote config unavailable. Not loading surveys.");
                var i = t.config.surveys;
                if (X(i)) return pl.warn("Flags not loaded yet. Not loading surveys.");
                this.Mu = it(i) ? i : i.length > 0, pl.info("flags response received, isSurveysEnabled: " + this.Mu), this.loadIfEnabled();
            }
        }, this.Os = t, this.Eu = i;
    }
}
function Eh(t, i, e) {
    if (X(t)) return !1;
    switch(e){
        case "exact":
            return t === i;
        case "contains":
            var r = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
            return new RegExp(r, "i").test(t);
        case "regex":
            try {
                return new RegExp(i).test(t);
            } catch (t) {
                return !1;
            }
        default:
            return !1;
    }
}
class kh {
    init() {
        var t, i;
        K(null == (t = this._instance) ? void 0 : t._addCaptureHook) || (this.Qu = null == (i = this._instance) ? void 0 : i._addCaptureHook((t, i)=>{
            this.on(t, i);
        }));
    }
    dispose() {
        var t;
        null == (t = this.Qu) || t.call(this), this.Qu = void 0, this.zu = new Xa;
    }
    register(t) {
        var i, e;
        if (!K(null == (i = this._instance) ? void 0 : i._addCaptureHook) && (t.forEach((t)=>{
            var i;
            this.Bu.add(t), null == (i = t.steps) || i.forEach((t)=>{
                this.Hu.add((null == t ? void 0 : t.event) || "");
            });
        }), null != (e = this._instance) && e.autocapture)) {
            var r = new Set;
            this.Bu.forEach((t)=>{
                var i;
                null == (i = t.steps) || i.forEach((t)=>{
                    null != t && t.selector && r.add(t.selector);
                });
            }), this._instance.autocapture.setElementSelectors(r);
        }
    }
    replace(t) {
        this.Bu.clear(), this.Hu.clear(), this.register(t);
    }
    on(t, i) {
        null != i && 0 != t.length && (this.Hu.has(t) || this.Hu.has(i.event)) && this.Bu.forEach((t)=>{
            this.Ju(i, t) && this.zu.emit("actionCaptured", t.name);
        });
    }
    Ku(t) {
        this.onAction("actionCaptured", (i)=>t(i));
    }
    Ju(t, i) {
        if (null == (null == i ? void 0 : i.steps)) return !1;
        for (var e of i.steps)if (this.Uu(t, e)) return !0;
        return !1;
    }
    onAction(t, i) {
        return this.zu.on(t, i);
    }
    Vu(t, i) {
        if (null != i && i.url) {
            var e, r = null == t || null == (e = t.properties) ? void 0 : e.$current_url;
            if (!r || "string" != typeof r) return !1;
            if (!Eh(r, i.url, i.url_matching || "contains")) return !1;
        }
        return !0;
    }
    Gu(t, i) {
        return !!this.Yu(t, i) && !!this.Xu(t, i) && !!this.th(t, i);
    }
    Yu(t, i) {
        var e;
        if (null == i || !i.href) return !0;
        var r = this.eh(t);
        if (r.length > 0) return r.some((t)=>Eh(t.href, i.href, i.href_matching || "exact"));
        var s, n = (null == t || null == (e = t.properties) ? void 0 : e.$elements_chain) || "";
        return !!n && Eh((s = n.match(/(?::|")href="(.*?)"/)) ? s[1] : "", i.href, i.href_matching || "exact");
    }
    Xu(t, i) {
        var e;
        if (null == i || !i.text) return !0;
        var r = this.eh(t);
        if (r.length > 0) return r.some((t)=>Eh(t.text, i.text, i.text_matching || "exact") || Eh(t.$el_text, i.text, i.text_matching || "exact"));
        var s, n, o, a = (null == t || null == (e = t.properties) ? void 0 : e.$elements_chain) || "";
        return !!a && (s = function(t) {
            for(var i, e = [], r = /(?::|")text="(.*?)"/g; !X(i = r.exec(t));)e.includes(i[1]) || e.push(i[1]);
            return e;
        }(a), n = i.text, o = i.text_matching || "exact", s.some((t)=>Eh(t, n, o)));
    }
    th(t, i) {
        var e, r;
        if (null == i || !i.selector) return !0;
        var s = null == t || null == (e = t.properties) ? void 0 : e.$element_selectors;
        if (null != s && s.includes(i.selector)) return !0;
        var n = (null == t || null == (r = t.properties) ? void 0 : r.$elements_chain) || "";
        if (i.selector_regex && n) try {
            return new RegExp(i.selector_regex).test(n);
        } catch (t) {
            return !1;
        }
        return !1;
    }
    eh(t) {
        var i;
        return null == (null == t || null == (i = t.properties) ? void 0 : i.$elements) ? [] : null == t ? void 0 : t.properties.$elements;
    }
    Zu(t, i) {
        return null == i || !i.properties || 0 === i.properties.length || ll(i.properties.reduce((t, i)=>{
            var e = q(i.value) ? i.value.map(String) : null != i.value ? [
                String(i.value)
            ] : [];
            return t[i.key] = {
                values: e,
                operator: i.operator || "exact"
            }, t;
        }, {}), null == t ? void 0 : t.properties);
    }
    constructor(t){
        this.Bu = new Set, this.Hu = new Set, this.zu = new Xa, this.Uu = (t, i)=>this.Wu(t, i) && this.Vu(t, i) && this.Gu(t, i) && this.Zu(t, i), this.Wu = (t, i)=>null == i || !i.event || (null == t ? void 0 : t.event) === (null == i ? void 0 : i.event), this._instance = t;
    }
}
class Th {
    lh(t) {
        return !1;
    }
    uh() {
        return null;
    }
    hh(t) {}
    dh() {}
    fh(t, i) {
        return !!t && ll(t.propertyFilters, null == i ? void 0 : i.properties);
    }
    ph(t, i) {
        var e = new Map;
        return t.forEach((t)=>{
            var r;
            null == (r = t.conditions) || null == (r = r[i]) || null == (r = r.values) || r.forEach((i)=>{
                if (null != i && i.name) {
                    var r = e.get(i.name) || [];
                    r.push(t.id), e.set(i.name, r);
                }
            });
        }), e;
    }
    gh(t, i, e) {
        var r = (e === Fo.Activation ? this.rh : this.nh).get(t), s = [];
        return this.mh((t)=>{
            s = t.filter((t)=>null == r ? void 0 : r.includes(t.id));
        }), s.filter((r)=>{
            var s, n = null == (s = r.conditions) || null == (s = s[e]) || null == (s = s.values) ? void 0 : s.find((i)=>i.name === t);
            return this.fh(n, i);
        });
    }
    register(t) {
        this.yh(t, !1);
    }
    replace(t) {
        this.yh(t, !0);
    }
    yh(t, i) {
        var e;
        K(null == (e = this._instance) ? void 0 : e._addCaptureHook) || (this.bh(t, i), this._h(t, i));
    }
    _h(t, i) {
        var e = t.filter((t)=>{
            var i;
            return null == (i = t.conditions) || null == (i = i.actions) || null == (i = i.values) ? void 0 : i.length;
        });
        if (i && this.sh.clear(), 0 !== e.length) {
            this.wh || (this.wh = new kh(this._instance), this.wh.init(), this.wh.Ku((t)=>this.onAction(t)));
            var r = [];
            e.forEach((t)=>{
                var i;
                null == (i = t.conditions) || null == (i = i.actions) || i.values.forEach((i)=>{
                    if (r.push(i), i.name) {
                        var e, s = null !== (e = this.sh.get(i.name)) && void 0 !== e ? e : [];
                        s.includes(t.id) || s.push(t.id), this.sh.set(i.name, s);
                    }
                });
            }), i ? this.wh.replace(r) : this.wh.register(r);
        } else {
            var s;
            i && (null == (s = this.wh) || s.replace([]));
        }
    }
    kh(t, i) {
        i.forEach((i, e)=>{
            var r, s = null !== (r = t.get(e)) && void 0 !== r ? r : [];
            i.forEach((t)=>{
                s.includes(t) || s.push(t);
            }), t.set(e, s);
        });
    }
    bh(t, i) {
        var e, r, s = t.filter((t)=>{
            var i, e;
            return (null == (i = t.conditions) ? void 0 : i.events) && (null == (e = t.conditions) || null == (e = e.events) || null == (e = e.values) ? void 0 : e.length) > 0;
        }), n = t.filter((t)=>{
            var i, e;
            return (null == (i = t.conditions) ? void 0 : i.cancelEvents) && (null == (e = t.conditions) || null == (e = e.cancelEvents) || null == (e = e.values) ? void 0 : e.length) > 0;
        }), o = this.ph(t, Fo.Activation), a = this.ph(t, Fo.Cancellation);
        i ? (this.rh = o, this.nh = a) : (this.kh(this.rh, o), this.kh(this.nh, a)), (0 !== s.length || 0 !== n.length) && (null !== (e = this.Qu) && void 0 !== e || (this.Qu = null == (r = this._instance) ? void 0 : r._addCaptureHook((t, i)=>{
            this.onEvent(t, i);
        })));
    }
    onEvent(t, i) {
        var e, r, s = this.Sh(), n = (null == i || null == (e = i.properties) ? void 0 : e.$survey_id) || (null == i || null == (r = i.properties) ? void 0 : r.$product_tour_id);
        if (n && this.getActivatedIds().includes(n)) {
            var o = this.xh(t, n);
            if ("consume" === o) return s.info("event consumed activated item, removing it", {
                event: t,
                itemId: n
            }), void this.Ch([
                n
            ]);
            if ("persist" === o) return s.info("shown item promoted to persisted activation", {
                event: t,
                itemId: n
            }), this.Th(n), void this.Mh([
                n
            ]);
        }
        if (this.nh.has(t)) {
            var a = this.gh(t, i, Fo.Cancellation);
            a.length > 0 && (s.info("cancel event matched, cancelling items", {
                event: t,
                itemsToCancel: a.map((t)=>t.id)
            }), this.Ch(a.map((t)=>t.id)), a.forEach((t)=>this.Eh(t.id)));
        }
        if (this.rh.has(t)) {
            s.info("event name matched", {
                event: t,
                eventPayload: i,
                items: this.rh.get(t)
            });
            var l = this.gh(t, i, Fo.Activation);
            this.Ih(l.map((t)=>t.id));
        }
    }
    onAction(t) {
        this.sh.has(t) && this.Ih(this.sh.get(t) || []);
    }
    Ih(t) {
        var i;
        if (0 !== t.length) {
            var e = !(null == (i = this._instance) || null == i.get_session_id || !i.get_session_id()), r = [];
            for (var s of t)e && this.lh(s) ? this.Th(s) && this.Rh(s) : r.push(s);
            r.length > 0 && (this.ih = [
                ...new Set([
                    ...this.ih,
                    ...r
                ])
            ]), this.Sh().info("updating activated items", {
                activatedItems: this.getActivatedIds()
            });
        }
    }
    Th(t) {
        this.ih = this.ih.filter((i)=>i !== t);
        var i = this.Ph();
        return !i.includes(t) && (this.Ah([
            ...i,
            t
        ]), this.Fh(), !0);
    }
    Ch(t) {
        var i = new Set(t);
        this.ih = this.ih.filter((t)=>!i.has(t));
        var e = this.Oh(), r = e.filter((t)=>!i.has(t));
        r.length !== e.length && (this.Ah(r), 0 === r.length && this.Lh()), this.Mh(t);
    }
    Dh() {
        var t, i = this.uh();
        if (!i) return {};
        var e = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[i];
        return e && "object" == typeof e ? e : {};
    }
    Rh(t) {
        if (this.uh()) {
            var i = this.Dh();
            this.hh(_({}, i, {
                [t]: Date.now()
            }));
        }
    }
    Mh(t) {
        if (this.uh()) {
            var i = this.Dh(), e = {}, r = !1;
            for (var s of Object.entries(i)){
                var n = s[0], o = s[1];
                t.includes(n) ? r = !0 : e[n] = o;
            }
            r && (G(e) ? this.dh() : this.hh(e));
        }
    }
    $h() {
        this.uh() && this.dh();
    }
    getActivationTimestamp(t) {
        if (this.Ph().includes(t)) {
            var i = this.Dh()[t];
            return Z(i) ? i : void 0;
        }
    }
    Oh() {
        var t, i = this.Nh();
        return (null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[i]) || [];
    }
    Ph() {
        var t, i, e = this.Oh();
        if (0 === e.length) return [];
        var r = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[this.qh()], s = null == (i = this._instance) || null == i.get_session_id ? void 0 : i.get_session_id();
        return s && r === s ? e : [];
    }
    Fh() {
        var t, i = null == (t = this._instance) || null == t.get_session_id ? void 0 : t.get_session_id();
        i && this.jh(i);
    }
    Lh() {
        this.Bh();
    }
    oh(t) {
        var i, e = null == (i = this._instance) || null == (i = i.persistence) ? void 0 : i.props[this.qh()];
        if (e && e !== t) {
            var r = this.Oh(), s = this.Dh();
            r.length > 0 && (this.Ah([]), r.filter((t)=>Z(s[t])).forEach((t)=>this.Eh(t))), this.Lh(), this.$h();
        }
    }
    getActivatedIds() {
        return [
            ...new Set([
                ...this.Ph(),
                ...this.ih
            ])
        ].filter((t)=>!this.Hh(t));
    }
    dispose() {
        var t, i, e;
        null == (t = this.ah) || t.call(this), this.ah = void 0, null == (i = this.Qu) || i.call(this), this.Qu = void 0, null == (e = this.wh) || e.dispose(), this.wh = void 0;
    }
    reset() {
        this.ih = [], this.Oh().length > 0 && this.Ah([]), this.Lh(), this.$h();
    }
    getEventToItemsMap() {
        return this.rh;
    }
    zh() {
        return this.wh;
    }
    constructor(t){
        var i;
        this.ih = [], this._instance = t, this.rh = new Map, this.nh = new Map, this.sh = new Map, this.ah = null == (i = this._instance) || null == i.onSessionId ? void 0 : i.onSessionId((t)=>this.oh(t));
    }
}
class $h extends Th {
    Nh() {
        return Or;
    }
    qh() {
        return Ir;
    }
    uh() {
        return Fr;
    }
    hh(t) {
        var i;
        null == (i = this._instance) || null == (i = i.persistence) || i.register({
            [Fr]: t
        });
    }
    dh() {
        var t;
        null == (t = this._instance) || null == (t = t.persistence) || t.unregister(Fr);
    }
    lh(t) {
        var i, e;
        this.mh((i)=>{
            e = i.find((i)=>i.id === t);
        });
        var r = null == (i = e) || null == (i = i.appearance) ? void 0 : i.surveyPopupDelaySeconds;
        return Z(r) && r > 0;
    }
    Uh() {
        return Bo.SHOWN;
    }
    mh(t) {
        var i;
        null == (i = this._instance) || i.getSurveys(t);
    }
    Eh(t) {
        var i;
        null == (i = this._instance) || i.cancelPendingSurvey(t);
    }
    Sh() {
        return pl;
    }
    Ah(t) {
        var i;
        null == (i = this._instance) || null == (i = i.persistence) || i.register({
            [Or]: t
        });
    }
    jh(t) {
        var i;
        null == (i = this._instance) || null == (i = i.persistence) || i.register({
            [Ir]: t
        });
    }
    Bh() {
        var t;
        null == (t = this._instance) || null == (t = t.persistence) || t.unregister(Ir);
    }
    Hh() {
        return !1;
    }
    xh(t, i) {
        var e;
        this.mh((t)=>{
            e = t.find((t)=>t.id === i);
        });
        var r = !e || function(t) {
            var i;
            return sl(t) && !(null == (i = t.conditions) || null == (i = i.events) || !i.repeatedActivation) || "always" === t.schedule;
        }(e);
        return r ? t === Bo.SHOWN ? "consume" : "ignore" : t === Bo.SHOWN ? "persist" : t === Bo.DISMISSED || t === Bo.SENT ? "consume" : "ignore";
    }
    getSurveys() {
        return this.getActivatedIds();
    }
    getEventToSurveys() {
        return this.getEventToItemsMap();
    }
    constructor(t){
        super(t);
    }
}
class Ph {
    initialize() {}
    get(t) {
        if ("string" == typeof t) return this._instance.get_property(t);
        var i = {};
        for (var e of t){
            var r = this._instance.get_property(e);
            K(r) || (i[e] = r);
        }
        return i;
    }
    set(t, i) {
        this._instance.register("string" == typeof t ? {
            [t]: i
        } : t);
    }
    remove(t) {
        "string" != typeof t ? t.forEach((t)=>this._instance.unregister(t)) : this._instance.unregister(t);
    }
    constructor(t){
        this._instance = t;
    }
}
class Rh {
    get() {
        var t = this._instance.config;
        return {
            disableSurveys: t.disable_surveys,
            cookielessMode: !!t.cookieless_mode,
            advancedEnableSurveys: t.advanced_enable_surveys,
            requestTimeoutMs: t.surveys_request_timeout_ms
        };
    }
    isOptedOut() {
        return this._instance.consent.isOptedOut();
    }
    getExtensions() {
        var t = null == v ? void 0 : v.__PosthogExtensions__;
        if (t) {
            var i = t.generateSurveys, e = t.loadExternalDependency;
            return {
                generateSurveys: i ? (t)=>i(this._instance, t) : void 0,
                loadExternalDependency: e ? (t)=>e(this._instance, "surveys", t) : void 0
            };
        }
    }
    createEventReceiver() {
        return new $h(this._instance);
    }
    constructor(t){
        this._instance = t;
    }
}
var Ch = null != t && t.location ? eo(t.location.hash, "__posthog") || eo(location.hash, "state") : null, Oh = "_postHogToolbarParams", Ih = Be("[Toolbar]"), Fh = Be("[FeatureFlags]");
class Ah {
    update(t, i) {
        this.Vh = ((t, i)=>{
            var e, r, s, n, o;
            return {
                bootstrap: {
                    featureFlags: null == (e = t.bootstrap) ? void 0 : e.featureFlags,
                    featureFlagPayloads: null == (r = t.bootstrap) ? void 0 : r.featureFlagPayloads
                },
                remoteRequestsDisabled: i,
                featureFlagsDisabled: !!t.advanced_disable_feature_flags,
                onlyEvaluateSurveyFeatureFlags: !!t.advanced_only_evaluate_survey_feature_flags,
                deduplicateCallsPerSession: !!t.advanced_feature_flags_dedup_per_session,
                cacheTtlMs: t.feature_flag_cache_ttl_ms,
                refreshIntervalMs: null !== (s = t.remote_config_refresh_interval_ms) && void 0 !== s ? s : 3e5,
                requestTimeoutMs: t.feature_flag_request_timeout_ms,
                compression: t.disable_compression ? void 0 : "best-available",
                evaluationContexts: null !== (n = null !== (o = t.evaluation_contexts) && void 0 !== o ? o : t.evaluation_environments) && void 0 !== n ? n : [],
                flagKeys: q(t.flag_keys) ? t.flag_keys : void 0
            };
        })(t, i), !t.evaluation_environments || t.evaluation_contexts || this.Wh || (Fh.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.Wh = !0), K(t.flag_keys) || q(t.flag_keys) || Fh.error("Invalid flag_keys found:", t.flag_keys, "Expected array of non-empty strings");
    }
    get() {
        return this.Vh;
    }
    constructor(t, i){
        void 0 === i && (i = !1), this.Wh = !1, this.update(t, i);
    }
}
var Mh = Be("[FeatureFlags]"), Dh = Be("[FeatureFlags]", {
    debugEnabled: !0
}), Nh = "\" failed. Feature flags didn't load in time.", Lh = "connection_error", jh = (t)=>{
    for(var i = {}, e = 0; t.length > e; e++)i[t[e]] = !0;
    return i;
}, Uh = (t)=>{
    var i = {};
    for (var e of vs(t || {})){
        var r = e[1];
        r && (i[e[0]] = r);
    }
    return i;
}, Bh = Be("[Error tracking]"), zh = "webkit-masked-url:", Hh = [
    "chrome-extension://",
    "moz-extension://",
    "safari-extension:",
    "safari-web-extension:",
    zh
], qh = [
    "__firefox__",
    "__gCrWeb"
], Vh = "Refusing to render web experiment since the viewer is a likely bot", Wh = {
    icontains: (t, i)=>i.toLowerCase().indexOf(t.toLowerCase()) > -1,
    not_icontains: (t, i)=>-1 === i.toLowerCase().indexOf(t.toLowerCase()),
    regex: (t, i)=>nl(i, t),
    not_regex: (t, i)=>!nl(i, t),
    exact: (t, i)=>i === t,
    is_not: (t, i)=>i !== t
};
class Gh {
    get gn() {
        return this._instance.config;
    }
    initialize() {}
    onFeatureFlags(t) {
        if (this._is_bot()) Gh.Gh(Vh);
        else if (!this.gn.disable_web_experiments) {
            if (X(this.Zh)) return this.Zh = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
            Gh.Gh("applying feature flags", t), t.forEach((t)=>{
                var i;
                if (this.Zh && null != (i = this.Zh) && i.has(t)) {
                    var e, r = this._instance.getFeatureFlag(t), s = null == (e = this.Zh) ? void 0 : e.get(t);
                    r && null != s && s.variants[r] && this.Qh(s.name, r, s.variants[r].transforms);
                }
            });
        }
    }
    previewWebExperiment() {
        var t = Gh.getWindowLocation();
        if (null != t && t.search) {
            var i = to(null == t ? void 0 : t.search, "__experiment_id"), e = to(null == t ? void 0 : t.search, "__experiment_variant");
            i && e && (Gh.Gh("previewing web experiments " + i + " && " + e), this.getWebExperiments((t)=>{
                this.Kh(parseInt(i), e, t);
            }, !1, !0));
        }
    }
    loadIfEnabled() {
        this.gn.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
    }
    getWebExperiments(t, i, e) {
        if (this.gn.disable_web_experiments && !e) return t([]);
        var r = this._instance.get_property("$web_experiments");
        if (r && !i) return t(r);
        this._instance._send_request({
            url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this.gn.token),
            method: "GET",
            timestampMode: "query",
            callback: (i)=>t(200 === i.statusCode && i.json && i.json.experiments || [])
        });
    }
    Kh(t, i, e) {
        var r = e.filter((i)=>i.id === t);
        r && r.length > 0 && (Gh.Gh("Previewing web experiment [" + r[0].name + "] with variant [" + i + "]"), this.Qh(r[0].name, i, r[0].variants[i].transforms));
    }
    static Jh(t, i) {
        return !X(t.conditions) && Gh.Yh(t, i) && Gh.Xh(t);
    }
    static Yh(t, i) {
        var e;
        if (X(t.conditions) || X(null == (e = t.conditions) ? void 0 : e.url)) return !0;
        var r = Gh.getWindowLocation();
        if (r) {
            var s, n, o, a = Js(i, r.href);
            return null == (s = t.conditions) || !s.url || Wh[null !== (n = null == (o = t.conditions) ? void 0 : o.urlMatchType) && void 0 !== n ? n : "icontains"](t.conditions.url, a);
        }
        return !1;
    }
    static getWindowLocation() {
        return null == t ? void 0 : t.location;
    }
    static Xh(t) {
        var i;
        if (X(t.conditions) || X(null == (i = t.conditions) ? void 0 : i.utm)) return !0;
        var e = uo();
        if (e.utm_source) {
            var r, s, n, o, a, l, h, u, d = null == (r = t.conditions) || null == (r = r.utm) || !r.utm_campaign || (null == (s = t.conditions) || null == (s = s.utm) ? void 0 : s.utm_campaign) == e.utm_campaign, v = null == (n = t.conditions) || null == (n = n.utm) || !n.utm_source || (null == (o = t.conditions) || null == (o = o.utm) ? void 0 : o.utm_source) == e.utm_source, c = null == (a = t.conditions) || null == (a = a.utm) || !a.utm_medium || (null == (l = t.conditions) || null == (l = l.utm) ? void 0 : l.utm_medium) == e.utm_medium, f = null == (h = t.conditions) || null == (h = h.utm) || !h.utm_term || (null == (u = t.conditions) || null == (u = u.utm) ? void 0 : u.utm_term) == e.utm_term;
            return d && c && f && v;
        }
        return !1;
    }
    static Gh(t) {
        for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)e[r - 1] = arguments[r];
        Ue.info("[WebExperiments] " + t, e);
    }
    Qh(t, i, e) {
        this._is_bot() ? Gh.Gh(Vh) : "control" !== i ? e.forEach((e)=>{
            if (e.selector) {
                var r;
                Gh.Gh("applying transform of variant " + i + " for experiment " + t + " ", e);
                var s = null == (r = document) ? void 0 : r.querySelectorAll(e.selector);
                null == s || s.forEach((t)=>{
                    var i = t;
                    e.html && (i.innerHTML = e.html), e.css && i.setAttribute("style", e.css);
                });
            }
        }) : Gh.Gh("Control variants leave the page unmodified.");
    }
    _is_bot() {
        return e && this._instance ? el(e, this.gn.custom_blocked_useragents) : void 0;
    }
    constructor(t){
        var i = this;
        this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
            void 0 === t && (t = !1), i.getWebExperiments((t)=>{
                Gh.Gh("retrieved web experiments from the server"), i.Zh = new Map, t.forEach((t)=>{
                    if (t.feature_flag_key) {
                        var e;
                        i.Zh && (Gh.Gh("setting flag key ", t.feature_flag_key, " to web experiment ", t), null == (e = i.Zh) || e.set(t.feature_flag_key, t));
                        var r = i._instance.getFeatureFlag(t.feature_flag_key);
                        J(r) && t.variants[r] && i.Qh(t.name, r, t.variants[r].transforms);
                    } else if (t.variants) for(var s in t.variants){
                        var n = t.variants[s];
                        Gh.Jh(n, i._instance) && i.Qh(t.name, s, n.transforms);
                    }
                });
            }, t);
        }, this._instance = t, this._instance.onFeatureFlags((t)=>{
            this.onFeatureFlags(t);
        });
    }
}
var Kh = Be("[Conversations]"), Jh = "Conversations not available yet.";
function Yh(t, i) {
    var r, s, n, o, a, l, h, u = null !== (r = null == t ? void 0 : t.flushIntervalMs) && void 0 !== r ? r : 3e3, d = null !== (s = null == t ? void 0 : t.maxBufferSize) && void 0 !== s ? s : 100, v = null != i && i.consoleCapture ? void 0 : null !== (n = null == t ? void 0 : t.maxLogsPerInterval) && void 0 !== n ? n : 1e3, c = K(v) ? Math.max(d, 2048) : Math.max(d, v), f = _({}, function() {
        var t = "", i = "";
        try {
            var r = null == e ? void 0 : e.userAgent;
            if (r) {
                var s = Si(r);
                t = s[0], i = s[1];
            }
        } catch (t) {}
        return function(t, i) {
            var e = function(t) {
                if (t) return ({}).hasOwnProperty.call(Gi, t) ? Gi[t] : t;
            }(t);
            return _({}, e ? {
                "os.name": e
            } : {}, i ? {
                "os.version": i
            } : {});
        }(t, i);
    }(), null == t ? void 0 : t.resourceAttributes);
    return {
        serviceName: null !== (o = null !== (a = null == f ? void 0 : f["service.name"]) && void 0 !== a ? a : null == t ? void 0 : t.serviceName) && void 0 !== o ? o : null == i ? void 0 : i.serviceNameDefault,
        serviceVersion: null !== (l = null == f ? void 0 : f["service.version"]) && void 0 !== l ? l : null == t ? void 0 : t.serviceVersion,
        environment: null !== (h = null == f ? void 0 : f["deployment.environment"]) && void 0 !== h ? h : null == t ? void 0 : t.environment,
        resourceAttributes: f,
        beforeSend: null == t ? void 0 : t.beforeSend,
        flushIntervalMs: u,
        maxBufferSize: d,
        maxQueueSize: c,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: u,
        maxLogsPerInterval: v,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
    };
}
var Qh = [
    "debug",
    "log",
    "warn",
    "error",
    "info"
], Xh = "console", Zh = "__posthogHandledLogsRequestError", tu = (t, i)=>{
    var e = t instanceof Error ? t : new Error(i);
    return e[Zh] = !0, e;
}, iu = (t)=>!!t && "object" == typeof t && !0 === t[Zh], eu = {
    featureFlags: class {
        updateConfig(t, i) {
            var e;
            null == (e = this.bd) || e.update(t, i), this.$s && this._d();
        }
        setup(t) {
            return this.Iu = t, this.A = t.logger.createLogger("[FeatureFlags]"), bh(t.kv.initialize(), ()=>{
                this.Iu === t && (this.Iu = void 0, this.$s = t, this.wd(t));
            });
        }
        wd(i) {
            var e;
            if (this.$s === i) return t && ms(t, "online", this.zt), this._d(), this.kd = i.registerDynamicEventProperties(()=>this.Sd() ? this.ed : this.rd), this.xd = null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.onCrossTabFeatureFlagChange(()=>{
                this.Cd(), this.Td();
            }), this.Cd(), this.initialize();
        }
        _d() {
            var t = this.gn.refreshIntervalMs, i = !this.gn.remoteRequestsDisabled && r && !K(t) && t > 0 ? t : void 0;
            i !== this.gd && (this.Md(), K(i) || (this.gd = i, this.yd(), null != r && r.addEventListener && ms(r, rs, this.Wt)));
        }
        yd() {
            K(this.gd) || (K(this.Ed) || clearInterval(this.Ed), this.md = Date.now(), this.Ed = setInterval(this.pd, this.gd));
        }
        Md() {
            K(this.Ed) || (clearInterval(this.Ed), this.Ed = void 0, null == r || null == r.removeEventListener || r.removeEventListener(rs, this.Wt)), this.gd = void 0, this.md = void 0;
        }
        destroy() {
            this.Id();
        }
        dispose() {
            this.Id();
        }
        Id() {
            var i, e;
            this.Md(), this.od++, this.ud = !1, this.Iu = void 0, this.$s && (this.Rd(), null == (i = this.kd) || i.dispose(), this.kd = void 0, null == (e = this.xd) || e.call(this), this.xd = void 0, this.nd = [], null == t || t.removeEventListener("online", this.zt), this.$s = void 0);
        }
        get gn() {
            return this.Os.get();
        }
        Pd(t) {
            var i;
            return null == (i = this.$s) ? void 0 : i.kv.get(t);
        }
        ii(t) {
            this.Ad(()=>{
                var i;
                return null == (i = this.$s) ? void 0 : i.kv.set(t);
            });
        }
        Fd(t, i, e) {
            var r;
            if (null != (r = this._instance) && r.persistence && t[gr]) {
                var s = this.Pd(gr) || {}, n = t[gr] || {}, o = i.flags || i.featureFlags, a = i.flags ? Object.entries(i.flags).filter((t)=>{
                    var i = t[1];
                    return !(null != i && i.failed);
                }).map((t)=>t[0]) : [], l = !!i.errorsWhileComputingFlags && !!i.flags, h = l ? a : e && !q(o) ? Object.keys(o || {}) : Array.from(new Set([
                    ...Object.keys(s),
                    ...Object.keys(n)
                ])), u = this.Pd(wr) || {}, d = t[wr] || {}, v = l || e ? h : Array.from(new Set([
                    ...Object.keys(u),
                    ...Object.keys(d)
                ])), c = !l && !e, f = !!c || h, p = {
                    [mr]: f,
                    [gr]: f,
                    [wr]: !!c || v
                };
                for (var _ of (t[br] && (p[br] = f), [
                    Sr,
                    Lr,
                    xr
                ]))K(t[_]) || (p[_] = !0);
                this._instance.persistence.markCrossTabFeatureFlagChanges(p);
            }
        }
        ai(t) {
            this.Ad(()=>{
                var i;
                return null == (i = this.$s) ? void 0 : i.kv.remove(t);
            });
        }
        Ad(t) {
            try {
                t();
            } catch (t) {
                this.A.error("Failed to update feature flag persistence", t);
            }
        }
        Cd() {
            var t = {};
            for (var i of [
                mr,
                wr,
                Sr,
                Er
            ]){
                var e = this.Pd(i);
                K(e) || (t[i] = e);
            }
            this.ed = t;
            var r = _({}, t), s = this.Pd(gr);
            if (s) for (var n of Object.entries(s))r["$feature/" + n[0]] = n[1];
            this.rd = r;
        }
        Sd() {
            var t = this.gn.cacheTtlMs;
            if (!t || 0 >= t) return !1;
            var i = this.Pd(Lr);
            return "number" != typeof i || Date.now() - i > t;
        }
        Od() {
            return !!this.Sd() && (this.dd || this.ad || (this.dd = !0, this.A.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
        }
        Ld() {
            var t = this.gn.evaluationContexts;
            return null != t && t.length ? t.filter((t)=>{
                var i = t && "string" == typeof t && t.trim().length > 0;
                return i || this.A.error("Invalid evaluation context found:", t, "Expected non-empty string"), i;
            }) : [];
        }
        Dd() {
            var t = this.gn.flagKeys;
            if (!K(t)) return t.filter((t)=>{
                var i = t && "string" == typeof t && t.trim().length > 0;
                return i || this.A.error("Invalid flag key found:", t, "Expected non-empty string"), i;
            });
        }
        initialize() {
            var t, i, e = this.gn, r = null !== (t = null == (i = e.bootstrap) ? void 0 : i.featureFlags) && void 0 !== t ? t : {};
            if (Object.keys(r).length) {
                var s, n, o = null !== (s = null == (n = e.bootstrap) ? void 0 : n.featureFlagPayloads) && void 0 !== s ? s : {}, a = Object.keys(r).filter((t)=>!!r[t]).reduce((t, i)=>(t[i] = r[i] || !1, t), {}), l = Object.keys(o).filter((t)=>a[t]).reduce((t, i)=>(t[i] = o[i], t), {});
                return this.$d({
                    featureFlags: a,
                    featureFlagPayloads: l
                });
            }
        }
        updateFlags(t, i, e) {
            var r, s, n = null != e && e.merge && null !== (r = this.Pd(gr)) && void 0 !== r ? r : {}, o = null != e && e.merge && null !== (s = this.Pd(wr)) && void 0 !== s ? s : {}, a = _({}, n, t), l = _({}, o, i), h = {};
            for (var u of Object.entries(a)){
                var d = u[0], v = u[1];
                h[d] = {
                    key: d,
                    enabled: y(v),
                    variant: b(v),
                    reason: void 0,
                    metadata: K(null == l ? void 0 : l[d]) ? void 0 : {
                        id: 0,
                        version: void 0,
                        description: void 0,
                        payload: l[d]
                    }
                };
            }
            this.$d({
                flags: h
            });
        }
        get hasLoadedFlags() {
            return this.sd;
        }
        getFlags() {
            return Object.keys(this.getFlagVariants());
        }
        getFlagsWithDetails() {
            var t = this.Pd(br), i = this.Pd(Er), e = this.Pd(kr);
            if (!e && !i) return t || {};
            var r = ds({}, t || {}), s = [
                ...new Set([
                    ...Object.keys(e || {}),
                    ...Object.keys(i || {})
                ])
            ];
            for (var n of s){
                var o, a, l = r[n], h = null == i ? void 0 : i[n], u = K(h) ? null !== (o = null == l ? void 0 : l.enabled) && void 0 !== o && o : !!h, d = K(h) ? null == l ? void 0 : l.variant : "string" == typeof h ? h : void 0, v = null == e ? void 0 : e[n], c = _({}, l, {
                    enabled: u,
                    variant: u ? null != d ? d : null == l ? void 0 : l.variant : void 0
                });
                u !== (null == l ? void 0 : l.enabled) && (c.original_enabled = null == l ? void 0 : l.enabled), d !== (null == l ? void 0 : l.variant) && (c.original_variant = null == l ? void 0 : l.variant), v && (c.metadata = _({}, null == l ? void 0 : l.metadata, {
                    payload: v,
                    original_payload: null == l || null == (a = l.metadata) ? void 0 : a.payload
                })), r[n] = c;
            }
            return this.td || (this.A.warn(" Overriding feature flag details!", {
                flagDetails: t,
                overriddenPayloads: e,
                finalDetails: r
            }), this.td = !0), r;
        }
        getAllFeatureFlags() {
            var t = this.getFlagVariants(), i = this.getFlagPayloads();
            return Object.keys(t).map((e)=>{
                var r = t[e];
                return {
                    key: e,
                    enabled: y(r),
                    variant: b(r),
                    payload: m(i[e])
                };
            });
        }
        getFlagVariants() {
            var t = this.Pd(gr), i = this.Pd(Er);
            if (!i) return t || {};
            for(var e = ds({}, t || {}), r = Object.keys(i), s = 0; r.length > s; s++)e[r[s]] = i[r[s]];
            return this.td || (this.A.warn(" Overriding feature flags!", {
                enabledFlags: t,
                overriddenFlags: i,
                finalFlags: e
            }), this.td = !0), e;
        }
        getFlagPayloads() {
            var t = this.Pd(wr), i = this.Pd(kr);
            if (!i) return t || {};
            for(var e = ds({}, t || {}), r = Object.keys(i), s = 0; r.length > s; s++)e[r[s]] = i[r[s]];
            return this.td || (this.A.warn(" Overriding feature flag payloads!", {
                flagPayloads: t,
                overriddenPayloads: i,
                finalPayloads: e
            }), this.td = !0), e;
        }
        reloadFeatureFlags() {
            this.ld || this.gn.featureFlagsDisabled || this.fd() || this.Nd || (this.nd.slice().forEach((t)=>{
                try {
                    t();
                } catch (t) {
                    this.A.error("Error while running feature flags reloading callback", t);
                }
            }), this.Nd = setTimeout(()=>{
                this.qd();
            }, 5));
        }
        Rd() {
            clearTimeout(this.Nd), this.Nd = void 0;
        }
        onReloading(t) {
            return this.nd.push(t), ()=>{
                this.nd = this.nd.filter((i)=>i !== t);
            };
        }
        ensureFlagsLoaded() {
            this.sd || this.ad || this.Nd || this.reloadFeatureFlags();
        }
        setAnonymousDistinctId(t) {
            this.$anon_distinct_id = t;
        }
        setReloadingPaused(t) {
            this.ld = t;
        }
        resetFlagCallReported() {
            this.ai(Mr);
        }
        qd(t) {
            this.Rd();
            var i = this.$s;
            if (i && !this.gn.remoteRequestsDisabled && !this.fd()) if (this.ad) this.ud = !0;
            else {
                var e = {
                    token: i.projectToken,
                    distinct_id: i.distinctId,
                    groups: i.groups,
                    $anon_distinct_id: this.$anon_distinct_id,
                    person_properties: _({}, i.initialPersonProperties, this.Pd(Tr) || {}, {
                        $lib: i.library.name,
                        $lib_version: i.library.version
                    }),
                    group_properties: this.Pd($r),
                    timezone: yo()
                };
                K(i.deviceId) || (e.$device_id = i.deviceId), (null != t && t.disableFlags || this.gn.featureFlagsDisabled) && (e.disable_flags = !0);
                var r = this.Ld();
                r.length && (e.evaluation_contexts = r);
                var s = this.Dd();
                K(s) || (e.flag_keys = s);
                var n = this.gn.onlyEvaluateSurveyFeatureFlags, o = "/flags/?v=2" + (n ? "&only_evaluate_survey_feature_flags=true" : ""), a = this.od;
                this.ad = !0;
                var l = ()=>{
                    this.ud && (this.ud = !1, this.qd());
                }, h = (t)=>{
                    this.ad = !1, a === this.od ? (this.ii({
                        [Nr]: [
                            Lh
                        ]
                    }), this.A.error("Feature flag request failed", t), l()) : l();
                };
                try {
                    i.sendRequest(o, {
                        target: "flags",
                        method: "POST",
                        body: e,
                        compression: this.gn.compression,
                        sentAt: "body",
                        timeoutMs: this.gn.requestTimeoutMs
                    }).then((t)=>{
                        var i, r, s = null !== (i = t.json) && void 0 !== i ? i : {}, o = 200 !== t.statusCode;
                        if (this.ad = !1, a === this.od) {
                            if (this.jd(t.statusCode), o || this.ud || (this.$anon_distinct_id = void 0), !e.disable_flags || this.ud) {
                                this.hd = !o;
                                var h = [];
                                t.error ? h.push(t.error instanceof Error && "AbortError" === t.error.name ? "timeout" : t.error instanceof Error ? Lh : "unknown_error") : 200 !== t.statusCode && h.push("api_error_" + t.statusCode), s.errorsWhileComputingFlags && h.push("errors_while_computing_flags");
                                var u = !(null == (r = s.quotaLimited) || !r.includes("feature_flags"));
                                u && h.push("quota_limited"), this.ii({
                                    [Nr]: h
                                }), u ? this.A.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : e.disable_flags || this.$d(s, o, {
                                    partialResponse: n
                                }), l();
                            }
                        } else l();
                    }).catch(h);
                } catch (t) {
                    h(t);
                }
            }
        }
        fd() {
            return ro(this.vd, 3);
        }
        jd(t) {
            this.vd = so(t, this.vd, 3, ()=>this.A.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes."));
        }
        getFeatureFlag(t, i) {
            var e;
            if (void 0 === i && (i = {}), !i.fresh || this.hd) if (this.sd || this.getFlags() && this.getFlags().length > 0) {
                if (!this.Od()) {
                    var r = this.getFeatureFlagResult(t, i);
                    return null !== (e = null == r ? void 0 : r.variant) && void 0 !== e ? e : null == r ? void 0 : r.enabled;
                }
            } else this.A.warn('getFeatureFlag for key "' + t + Nh);
        }
        getFeatureFlagDetails(t) {
            return this.getFlagsWithDetails()[t];
        }
        getFeatureFlagPayload(t) {
            var i = this.getFeatureFlagResult(t, {
                send_event: !1
            });
            return null == i ? void 0 : i.payload;
        }
        getFeatureFlagResult(t, i) {
            if (void 0 === i && (i = {}), !i.fresh || this.hd) if (this.sd || this.getFlags() && this.getFlags().length > 0) {
                if (!this.Od()) {
                    var e, r = this.getFlagVariants(), s = t in r, n = r[t], o = this.getFlagPayloads()[t], a = String(n), l = this.Pd(Sr) || void 0, h = this.Pd(Lr) || void 0, u = this.Pd(Mr) || {};
                    if (this.gn.deduplicateCallsPerSession) {
                        var d, v = null == (d = this.$s) ? void 0 : d.session.sessionId, c = this.Pd(Dr);
                        v && v !== c && (u = {}, e = v);
                    }
                    if (i.send_event || !("send_event" in i)) if (t in u && u[t].includes(a)) e && this.ii({
                        [Mr]: u,
                        [Dr]: e
                    });
                    else {
                        var f, p, g, y, b, w, S, x, E, k, T, P;
                        q(u[t]) ? u[t].push(a) : u[t] = [
                            a
                        ], this.ii(_({
                            [Mr]: u
                        }, e ? {
                            [Dr]: e
                        } : {}));
                        var R = this.getFeatureFlagDetails(t), C = [
                            ...null !== (f = this.Pd(Nr)) && void 0 !== f ? f : []
                        ];
                        K(n) && C.push("flag_missing");
                        var O = {
                            $feature_flag: t,
                            $feature_flag_response: n,
                            $feature_flag_payload: null != o ? o : null,
                            $feature_flag_request_id: l,
                            $feature_flag_evaluated_at: h,
                            $feature_flag_bootstrapped_response: null !== (p = null == (g = this.gn.bootstrap) || null == (g = g.featureFlags) ? void 0 : g[t]) && void 0 !== p ? p : null,
                            $feature_flag_bootstrapped_payload: null !== (y = null == (b = this.gn.bootstrap) || null == (b = b.featureFlagPayloads) ? void 0 : b[t]) && void 0 !== y ? y : null,
                            $used_bootstrap_value: !this.hd
                        };
                        K(null == R || null == (w = R.metadata) ? void 0 : w.has_experiment) || (O.$feature_flag_has_experiment = R.metadata.has_experiment), K(null == R || null == (S = R.metadata) ? void 0 : S.version) || (O.$feature_flag_version = R.metadata.version);
                        var I, F = null !== (x = null == R || null == (E = R.reason) ? void 0 : E.description) && void 0 !== x ? x : null == R || null == (k = R.reason) ? void 0 : k.code;
                        F && (O.$feature_flag_reason = F), null != R && null != (T = R.metadata) && T.id && (O.$feature_flag_id = R.metadata.id), K(null == R ? void 0 : R.original_variant) && K(null == R ? void 0 : R.original_enabled) || (O.$feature_flag_original_response = K(R.original_variant) ? R.original_enabled : R.original_variant), null != R && null != (P = R.metadata) && P.original_payload && (O.$feature_flag_original_payload = null == R || null == (I = R.metadata) ? void 0 : I.original_payload), C.length && (O.$feature_flag_error = C.join(",")), this.Bd(O);
                    }
                    else e && this.ii({
                        [Mr]: u,
                        [Dr]: e
                    });
                    if (s) return {
                        key: t,
                        enabled: !!n,
                        variant: "string" == typeof n ? n : void 0,
                        payload: m(o)
                    };
                }
            } else this.A.warn('getFeatureFlagResult for key "' + t + Nh);
        }
        Bd(t) {
            try {
                var i;
                null == (i = this.$s) || i.capture("$feature_flag_called", t).catch((t)=>{
                    this.A.error("Failed to capture feature flag call", t);
                });
            } catch (t) {
                this.A.error("Failed to capture feature flag call", t);
            }
        }
        getRemoteConfigPayload(t, i) {
            this.Hd(t, i);
        }
        Hd(t, i) {
            var e = this;
            return p(function*() {
                var r = e.$s;
                if (r) {
                    var s = {
                        distinct_id: r.distinctId,
                        token: r.projectToken,
                        person_properties: {
                            $lib: r.library.name,
                            $lib_version: r.library.version
                        }
                    }, n = e.Ld();
                    n.length && (s.evaluation_contexts = n);
                    var o, a = e.Dd();
                    K(a) || (s.flag_keys = a);
                    try {
                        var l, h = null == (l = (yield r.sendRequest("/flags/?v=2", {
                            target: "flags",
                            method: "POST",
                            body: s,
                            compression: e.gn.compression,
                            sentAt: "body",
                            timeoutMs: e.gn.requestTimeoutMs
                        })).json) ? void 0 : l.featureFlagPayloads;
                        o = (null == h ? void 0 : h[t]) || void 0;
                    } catch (t) {
                        return void e.A.error("Remote config feature flag request failed", t);
                    }
                    try {
                        i(o);
                    } catch (t) {
                        e.A.error("Remote config feature flag callback failed", t);
                    }
                }
            })();
        }
        isFeatureEnabled(t, i) {
            if (void 0 === i && (i = {}), i.fresh && !this.hd) return i.defaultValue;
            if (!(this.sd || this.getFlags() && this.getFlags().length > 0)) return this.A.warn('isFeatureEnabled for key "' + t + Nh), i.defaultValue;
            var e = this.getFeatureFlag(t, i);
            return K(e) ? i.defaultValue : !!e;
        }
        addFeatureFlagsHandler(t) {
            this.featureFlagEventHandlers.push(t);
        }
        removeFeatureFlagsHandler(t) {
            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((i)=>i !== t);
        }
        receivedFeatureFlags(t, i, e) {
            this.$d(t, i, e);
        }
        $d(t, i, e) {
            if (this.$s) {
                this.sd = !0;
                var r = function(t, i, e, r, s, n) {
                    void 0 === i && (i = {}), void 0 === e && (e = {}), void 0 === r && (r = {}), void 0 === n && (n = Mh);
                    var o = ((t, i)=>{
                        var e = t.flags;
                        return e ? _({}, t, {
                            featureFlags: Object.fromEntries(Object.keys(e).map((t)=>{
                                var i;
                                return [
                                    t,
                                    null !== (i = e[t].variant) && void 0 !== i ? i : e[t].enabled
                                ];
                            })),
                            featureFlagPayloads: Object.fromEntries(Object.keys(e).filter((t)=>e[t].enabled).filter((t)=>{
                                var i;
                                return !K(null == (i = e[t].metadata) ? void 0 : i.payload);
                            }).map((t)=>{
                                var i;
                                return [
                                    t,
                                    null == (i = e[t].metadata) ? void 0 : i.payload
                                ];
                            }))
                        }) : (t.featureFlags && i.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), t);
                    })(t, n), a = o.flags, l = o.featureFlags, h = o.featureFlagPayloads;
                    if (l) {
                        var u = t.requestId, d = t.evaluatedAt;
                        if (q(l)) {
                            n.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                            var v = {};
                            if (l) for(var c = 0; l.length > c; c++)v[l[c]] = !0;
                            return {
                                [mr]: l,
                                [gr]: v,
                                [xr]: !1
                            };
                        }
                        var f = l, p = h, g = a;
                        if (null != s && s.partialResponse) {
                            var m = Object.keys(f), y = p || {};
                            f = _({}, i, f), p = _({}, e, y), m.forEach((t)=>{
                                var i;
                                t in y || null == (i = p) || delete i[t];
                            }), g = _({}, r, g);
                        } else if (t.errorsWhileComputingFlags) if (a) {
                            var b = new Set(Object.keys(a).filter((t)=>{
                                var i;
                                return !(null != (i = a[t]) && i.failed);
                            }));
                            f = _({}, i, Object.fromEntries(Object.entries(f).filter((t)=>b.has(t[0]))));
                            var w = Object.fromEntries(Object.entries(p || {}).filter((t)=>b.has(t[0])));
                            p = _({}, e, w), b.forEach((t)=>{
                                var i;
                                t in w || null == (i = p) || delete i[t];
                            }), g = _({}, r, Object.fromEntries(Object.entries(g || {}).filter((t)=>b.has(t[0]))));
                        } else f = _({}, i, f), p = _({}, e, p), g = _({}, r, g);
                        return _({
                            [mr]: Object.keys(Uh(f)),
                            [gr]: f || {},
                            [wr]: p || {},
                            [br]: g || {},
                            [xr]: !0 === t.minimalFlagCalledEvents
                        }, u ? {
                            [Sr]: u
                        } : {}, d ? {
                            [Lr]: d
                        } : {});
                    }
                }(t, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), e, this.A);
                r && (this.Fd(r, t, !(null == e || !e.partialResponse)), this.ii(r)), i || (this.dd = !1), this.Td(i);
            }
        }
        override(t, i) {
            void 0 === i && (i = !1), this.A.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
                flags: t,
                suppressWarning: i
            });
        }
        overrideFeatureFlags(t) {
            this.zd(t);
        }
        zd(t) {
            if (this.$s) {
                if (!1 === t) return this.ai([
                    Er,
                    kr
                ]), this.Td(), void Dh.info("All overrides cleared");
                if (q(t)) return this.ii({
                    [Er]: jh(t)
                }), this.Td(), void Dh.info("Flag overrides set", {
                    flags: t
                });
                if (t && "object" == typeof t && ("flags" in t || "payloads" in t)) {
                    var i, e = t;
                    this.td = Boolean(null !== (i = e.suppressWarning) && void 0 !== i && i);
                    var r = {}, s = e.flags, n = e.payloads;
                    return s && (r[Er] = q(s) ? jh(s) : s), n && (r[kr] = n), Object.keys(r).length && this.ii(r), !1 === s && !1 === n ? this.ai([
                        Er,
                        kr
                    ]) : !1 === s ? this.ai(Er) : !1 === n && this.ai(kr), this.Td(), !1 === s ? Dh.info("Flag overrides cleared") : s && Dh.info("Flag overrides set", {
                        flags: s
                    }), void (!1 === n ? Dh.info("Payload overrides cleared") : n && Dh.info("Payload overrides set", {
                        payloads: n
                    }));
                }
                if (t && "object" == typeof t) return this.ii({
                    [Er]: t
                }), this.Td(), void Dh.info("Flag overrides set", {
                    flags: t
                });
                this.A.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
                    overrideOptions: t
                });
            } else this.A.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready");
        }
        onFeatureFlags(t) {
            if (this.addFeatureFlagsHandler(t), this.sd) {
                var i = this.Ud(), e = i.flags, r = i.flagVariants;
                try {
                    t(e, r);
                } catch (t) {
                    this.A.error("Error while running feature flags callback", t);
                }
            }
            return ()=>this.removeFeatureFlagsHandler(t);
        }
        updateEarlyAccessFeatureEnrollment(t, i, e) {
            var r, s = (this.Pd(yr) || []).find((i)=>i.flagKey === t), n = {
                ["$feature_enrollment/" + t]: i
            }, o = {
                $feature_flag: t,
                $feature_enrollment: i,
                $set: n
            };
            s && (o.$early_access_feature_name = s.name), e && (o.$feature_enrollment_stage = e);
            var a = _({}, this.getFlagVariants(), {
                [t]: i
            });
            null == (r = this._instance) || null == (r = r.persistence) || r.markCrossTabFeatureFlagChanges({
                [mr]: [
                    t
                ],
                [gr]: [
                    t
                ],
                [Tr]: Object.keys(n)
            }), this.ii({
                [mr]: Object.keys(Uh(a)),
                [gr]: a,
                [Tr]: _({}, this.Pd(Tr) || {}, n)
            }), this.Td();
            try {
                var l;
                null == (l = this.$s) || l.capture("$feature_enrollment_update", o).catch((t)=>{
                    this.A.error("Failed to capture early access feature enrollment", t);
                });
            } catch (t) {
                this.A.error("Failed to capture early access feature enrollment", t);
            }
        }
        getEarlyAccessFeatures(t, i, e) {
            void 0 === i && (i = !1);
            var r = this.Pd(yr);
            !r || i ? this.Wd(t, e) : t(r);
        }
        Wd(t, i) {
            var e = this;
            return p(function*() {
                var r = e.$s;
                if (r) {
                    var s, n = i ? "&" + i.map((t)=>"stage=" + t).join("&") : "";
                    try {
                        var o = yield r.sendRequest("/api/early_access_features/?token=" + r.projectToken + n, {
                            target: "api",
                            method: "GET",
                            sentAt: "query"
                        });
                        if (!o.json) return;
                        e.ii({
                            [yr]: s = o.json.earlyAccessFeatures
                        });
                    } catch (t) {
                        return void e.A.error("Early access feature request failed", t);
                    }
                    try {
                        t(s);
                    } catch (t) {
                        e.A.error("Early access feature callback failed", t);
                    }
                }
            })();
        }
        Ud() {
            var t = this.getFlags(), i = this.getFlagVariants();
            return {
                flags: t.filter((t)=>i[t]),
                flagVariants: Object.keys(i).filter((t)=>i[t]).reduce((t, e)=>(t[e] = i[e], t), {})
            };
        }
        Td(t) {
            this.Cd();
            var i = this.Ud(), e = i.flags, r = i.flagVariants;
            this.featureFlagEventHandlers.forEach((i)=>{
                try {
                    i(e, r, {
                        errorsLoading: t
                    });
                } catch (t) {
                    this.A.error("Error while running feature flags callback", t);
                }
            });
        }
        setPersonPropertiesForFlags(t, i) {
            void 0 === i && (i = !0), this.Vd(t, i);
        }
        Vd(t, i) {
            void 0 === i && (i = !0);
            var e = this.Pd(Tr) || {}, r = (null == t ? void 0 : t.$set) || (null != t && t.$set_once ? {} : t), s = null == t ? void 0 : t.$set_once, n = {};
            if (s) for(var o in s)({}).hasOwnProperty.call(s, o) && (o in e || (n[o] = s[o]));
            this.ii({
                [Tr]: _({}, e, n, r)
            }), i && this.reloadFeatureFlags();
        }
        unsetPersonPropertiesForFlags(t, i) {
            void 0 === i && (i = !0);
            var e = _({}, this.Pd(Tr) || {});
            t.forEach((t)=>{
                delete e[t];
            }), this.ii({
                [Tr]: e
            }), i && this.reloadFeatureFlags();
        }
        resetPersonPropertiesForFlags(t) {
            void 0 === t && (t = !0), this.ai(Tr), t && this.reloadFeatureFlags();
        }
        setGroupPropertiesForFlags(t, i) {
            void 0 === i && (i = !0);
            var e = this.Pd($r) || {}, r = _({}, e);
            for (var s of Object.keys(t))r[s] = _({}, e[s], t[s]);
            this.ii({
                [$r]: r
            }), i && this.reloadFeatureFlags();
        }
        resetGroupPropertiesForFlags(t) {
            if (t) {
                var i = this.Pd($r) || {};
                this.ii({
                    [$r]: _({}, i, {
                        [t]: {}
                    })
                });
            } else this.ai($r);
        }
        reset() {
            this.od++, this.ud = !1, this.ed = {}, this.rd = {}, this.sd = !1, this.ld = !1, this.hd = !1, this.$anon_distinct_id = void 0, this.Rd(), this.td = !1, this.vd = 0;
        }
        constructor(t){
            this.name = "featureFlags", this.td = !1, this.featureFlagEventHandlers = [], this.A = Mh, this.ed = {}, this.rd = {}, this.nd = [], this.sd = !1, this.ad = !1, this.od = 0, this.ld = !1, this.ud = !1, this.hd = !1, this.dd = !1, this.vd = 0, this.zt = ()=>{
                var t = this.fd();
                this.vd = 0, t && this.reloadFeatureFlags();
            }, this.pd = ()=>{
                var t, i = this.gd;
                K(i) || this.gn.remoteRequestsDisabled || !r || "hidden" === r.visibilityState || Date.now() - (null !== (t = this.md) && void 0 !== t ? t : 0) < i || (this.reloadFeatureFlags(), this.yd());
            }, this.Wt = ()=>{
                "visible" === (null == r ? void 0 : r.visibilityState) && this.pd();
            }, "get" in t ? this.Os = t : (this._instance = t, this.bd = new Ah(t.config, t.ho()), this.Os = this.bd);
        }
    }
}, ru = {
    sessionRecording: class {
        get gn() {
            return this._instance.config;
        }
        get $o() {
            return this._instance.persistence;
        }
        get started() {
            var t;
            return !(null == (t = this.Gd) || !t.isStarted);
        }
        get status() {
            var t, i;
            return this.Zd === hh || this.Zd === uh ? this.Zd : null !== (t = null == (i = this.Gd) ? void 0 : i.status) && void 0 !== t ? t : this.Zd;
        }
        initialize() {
            this.startIfEnabledOrStop();
        }
        dispose(t) {
            var i = (void 0 === t ? {} : t).discardBufferedEvents, e = void 0 !== i && i;
            this.Jd = !0, null == r || null == r.removeEventListener || r.removeEventListener("visibilitychange", this.Wt), e ? this.Kd(!0) : this.stopRecording();
        }
        get Yd() {
            var i, e = !(null == (i = this._instance.get_property(hr)) || !i.enabled), r = !this.gn.disable_session_recording, s = this.gn.disable_session_recording || this._instance.consent.isOptedOut();
            return t && e && r && !s;
        }
        startIfEnabledOrStop(t) {
            var i;
            if (!(this.Jd || this.Yd && null != (i = this.Gd) && i.isStarted)) {
                var e = !K(Object.assign) && !K(Array.from);
                this.Yd && e ? (this.Xd(t), vh.info("starting")) : (this.Zd = ah, this.stopRecording());
            }
        }
        Xd(t) {
            var i, e;
            if (this.Yd) if (this.Zd !== hh && this.Zd !== uh && (this.Zd = lh), null != v && null != (i = v.__PosthogExtensions__) && null != (i = i.rrweb) && i.record && null != (e = v.__PosthogExtensions__) && e.initSessionRecording) this.tv(t);
            else {
                var r, s = this._instance.sessionManager;
                null == (r = v.__PosthogExtensions__) || null == r.loadExternalDependency || r.loadExternalDependency(this._instance, this.ev, (i)=>{
                    if (!this.Jd && this.Yd && this._instance.sessionManager === s) return i ? (this._instance.register_for_session({
                        [Yr]: !0
                    }), vh.error("could not load recorder", i)) : void this.tv(t);
                    this.Zd = ah;
                });
            }
        }
        stopRecording() {
            var t, i;
            null == (t = this.Qd) || t.call(this), this.Qd = void 0, null == (i = this.Gd) || i.stop();
        }
        Kd(t) {
            var i, e;
            void 0 === t && (t = !1), null == (i = this.Qd) || i.call(this), this.Qd = void 0, null == (e = this.Gd) || e.discard({
                discardProducerEvents: t
            });
        }
        iv() {
            var t, i;
            null == (t = this.$o) || t.unregister(_r), null == (i = this.$o) || i.unregister(ur);
        }
        rv(t, i) {
            if (X(t)) return null;
            var e, r = Z(t) ? t : parseFloat(t);
            return "number" != typeof (e = r) || !Number.isFinite(e) || 0 > e || e > 1 ? (vh.warn(i + " must be between 0 and 1. Ignoring invalid value:", t), null) : r;
        }
        nv(t) {
            if (this.$o) {
                var i, e, r = this.$o, s = ()=>{
                    var i, e = !1 === t.sessionRecording ? void 0 : t.sessionRecording, s = this.rv(null == (i = this.gn.session_recording) ? void 0 : i.sampleRate, "session_recording.sampleRate"), n = this.rv(null == e ? void 0 : e.sampleRate, "remote config sampleRate"), o = null != s ? s : n;
                    X(o) && this.iv();
                    var a = null == e ? void 0 : e.minimumDurationMilliseconds;
                    r.register({
                        [hr]: _({
                            cache_timestamp: Date.now(),
                            enabled: !!e
                        }, e, {
                            networkPayloadCapture: _({
                                capturePerformance: t.capturePerformance
                            }, null == e ? void 0 : e.networkPayloadCapture),
                            canvasRecording: {
                                enabled: null == e ? void 0 : e.recordCanvas,
                                fps: null == e ? void 0 : e.canvasFps,
                                quality: null == e ? void 0 : e.canvasQuality
                            },
                            sampleRate: o,
                            minimumDurationMilliseconds: K(a) ? null : a,
                            endpoint: null == e ? void 0 : e.endpoint,
                            triggerMatchType: null == e ? void 0 : e.triggerMatchType,
                            masking: null == e ? void 0 : e.masking,
                            urlTriggers: null == e ? void 0 : e.urlTriggers,
                            version: null == e ? void 0 : e.version,
                            triggerGroups: null == e ? void 0 : e.triggerGroups
                        })
                    });
                };
                s(), null == (i = this.Qd) || i.call(this), this.Qd = null == (e = this._instance.sessionManager) ? void 0 : e.onSessionId(s);
            }
        }
        onRemoteConfig(t) {
            var i = t.ok ? t.config : void 0;
            return i && "sessionRecording" in i ? !1 === i.sessionRecording ? (this.nv(i), void this.Kd()) : (this.nv(i), void this.startIfEnabledOrStop()) : (this.Zd === hh && (this.Zd = uh, vh.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop());
        }
        log(t, i) {
            var e;
            void 0 === i && (i = "log"), null != (e = this.Gd) && e.log ? this.Gd.log(t, i) : vh.warn("log called before recorder was ready");
        }
        get ev() {
            var t, i, e = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.get_property(hr);
            return (null == e || null == (i = e.scriptConfig) ? void 0 : i.script) || "lazy-recorder";
        }
        sv() {
            var t, i = this._instance.get_property(hr);
            if (!i) return !1;
            try {
                t = "object" == typeof i ? i : JSON.parse(i);
            } catch (t) {
                return vh.warn("persisted remote config for session recording is invalid and will be ignored", t), !1;
            }
            return !X(t.cache_timestamp) && 36e5 >= Date.now() - t.cache_timestamp;
        }
        tv(t) {
            var i, e, r;
            if (!this.Jd && this.Yd && this._instance.sessionManager) {
                if (null == (i = v.__PosthogExtensions__) || !i.initSessionRecording) return vh.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                    [Yr]: !0
                });
                var s;
                if (this.Gd || (this.Gd = null == (s = v.__PosthogExtensions__) ? void 0 : s.initSessionRecording(this._instance, this.qt), this.Gd._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.sv()) {
                    if (this.Zd === uh || this.Zd === hh) return;
                    return this.Zd = hh, vh.info("persisted remote config is stale, requesting fresh config before starting"), void new Yo(this._instance).load();
                }
                this.Zd = lh, null == (e = (r = this.Gd).setDocumentWasEverVisible) || e.call(r, this.qt), this.Gd.start(t);
            } else this.Zd = ah;
        }
        onRRwebEmit(t) {
            var i;
            null == (i = this.Gd) || null == i.onRRwebEmit || i.onRRwebEmit(t);
        }
        overrideLinkedFlag() {
            var t, i;
            this.Gd || null == (i = this.$o) || i.register({
                [vr]: !0
            }), null == (t = this.Gd) || t.overrideLinkedFlag();
        }
        overrideSampling() {
            var t, i;
            this.Gd || null == (i = this.$o) || i.register({
                [dr]: !0
            }), null == (t = this.Gd) || t.overrideSampling();
        }
        overrideTrigger(t) {
            var i, e;
            this.Gd || null == (e = this.$o) || e.register({
                ["url" === t ? cr : fr]: !0
            }), null == (i = this.Gd) || i.overrideTrigger(t);
        }
        get sdkDebugProperties() {
            var t;
            return (null == (t = this.Gd) ? void 0 : t.sdkDebugProperties) || {
                $recording_status: this.status
            };
        }
        tryAddCustomEvent(t, i) {
            var e;
            return !(null == (e = this.Gd) || !e.tryAddCustomEvent(t, i));
        }
        constructor(i){
            if (this._forceAllowLocalhostNetworkCapture = !1, this.Zd = ah, this.Qd = void 0, this.Jd = !1, this.qt = (()=>{
                var i;
                if (null == r || !r.visibilityState || "visible" === r.visibilityState) return !0;
                var e = null == t || null == (i = t.performance) || null == i.getEntriesByType ? void 0 : i.getEntriesByType("visibility-state");
                return !(null != e && e.length) || e.some((t)=>"visible" === t.name);
            })(), this.Wt = ()=>{
                var t;
                "visible" === (null == r ? void 0 : r.visibilityState) && (this.qt = !0, null == (t = this.Gd) || null == t.setDocumentWasEverVisible || t.setDocumentWasEverVisible(!0));
            }, this._instance = i, !this._instance.sessionManager) throw vh.error("started without valid sessionManager"), new Error(dh + " started without valid sessionManager. This is a bug.");
            if (this.gn.cookieless_mode === Zr) throw new Error(dh + ' cannot be used with cookieless_mode="always"');
            null != r && r.addEventListener && ms(r, "visibilitychange", this.Wt);
        }
    }
}, su = {
    autocapture: class extends Jl {
        constructor(t){
            super(new Yl(t)), this.instance = t;
        }
    },
    historyAutocapture: class {
        initialize() {
            this.startIfEnabled();
        }
        get isEnabled() {
            var t = this.lv();
            return !!(t.path || t.search || this.uv(t));
        }
        startIfEnabled() {
            this.isEnabled && (Ue.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
        }
        startIfEnabledOrStop() {
            this.stop(), this.av = this.ov(), this.startIfEnabled();
        }
        stop() {
            this.hv && this.hv(), this.hv = void 0, this.dv && this.dv(), this.dv = void 0, Ue.info("History API monitoring stopped");
        }
        monitorHistoryChanges() {
            t && t.history && (this.vv("pushState"), this.vv("replaceState"), this.fv(), this.uv() && this.pv());
        }
        vv(i) {
            var e;
            if (t && (null == (e = t.history[i]) || !e.__posthog_wrapped__)) {
                var r = this;
                th(t.history, i, (t)=>function(e, s, n) {
                        t.call(this, e, s, n), r.gv(i);
                    });
            }
        }
        ov() {
            var i = null == t ? void 0 : t.location;
            if (null != i && i.pathname) return {
                pathname: i.pathname,
                search: i.search,
                hash: i.hash
            };
        }
        lv() {
            var t = this._instance.config.capture_pageview;
            return "history_change" === t ? {
                path: !0
            } : W(t) ? t : {};
        }
        uv(t) {
            return void 0 === t && (t = this.lv()), !!t.hash && !this._instance.config.disable_capture_url_hashes;
        }
        mv(t) {
            var i = this.lv(), e = this.av;
            return !(!e || !(i.path && t.pathname !== e.pathname || i.search && t.search !== e.search || this.uv(i) && t.hash !== e.hash));
        }
        gv(t) {
            try {
                var i = this.ov();
                if (!i) return;
                this.mv(i) && this._instance.capture(ns, {
                    navigation_type: t
                }), this.av = i;
            } catch (i) {
                Ue.error("Error capturing " + t + " pageview", i);
            }
        }
        fv() {
            if (!this.hv) {
                var i = ()=>{
                    this.gv("popstate");
                };
                ms(t, "popstate", i), this.hv = ()=>{
                    t && t.removeEventListener("popstate", i);
                };
            }
        }
        pv() {
            if (!this.dv) {
                var i = ()=>{
                    this.gv("hashchange");
                };
                ms(t, "hashchange", i), this.dv = ()=>{
                    t && t.removeEventListener("hashchange", i);
                };
            }
        }
        constructor(t){
            this._instance = t, this.av = this.ov();
        }
    },
    heatmaps: class {
        get gn() {
            return this.instance.config;
        }
        initialize() {
            this.startIfEnabled();
        }
        get flushIntervalMilliseconds() {
            var t = 5e3;
            return W(this.gn.capture_heatmaps) && this.gn.capture_heatmaps.flush_interval_milliseconds && (t = this.gn.capture_heatmaps.flush_interval_milliseconds), t;
        }
        get isEnabled() {
            return X(this.gn.capture_heatmaps) ? X(this.gn.enable_heatmaps) ? this.yv : this.gn.enable_heatmaps : !1 !== this.gn.capture_heatmaps;
        }
        startIfEnabled() {
            if (this.isEnabled) {
                if (this.Is) return;
                ch.info("starting..."), this._v(), this.Wt();
            } else {
                var t;
                clearInterval(null !== (t = this.bv) && void 0 !== t ? t : void 0), this.wv(), this.getAndClearBuffer();
            }
        }
        onRemoteConfig(t) {
            if (t.ok) {
                var i = t.config;
                if ("heatmaps" in i) {
                    var e = !!i.heatmaps;
                    this.instance.persistence && this.instance.persistence.register({
                        [tr]: e
                    }), this.yv = e, this.startIfEnabled();
                }
            }
        }
        getAndClearBuffer() {
            var t = this.Dt;
            return this.Dt = void 0, t;
        }
        Sv(t) {
            fh(t.originalEvent) && this.Ki(t.originalEvent, "deadclick");
        }
        Wt() {
            this.bv && clearInterval(this.bv), this.bv = "visible" === (null == r ? void 0 : r.visibilityState) ? setInterval(this.Mo.bind(this), this.flushIntervalMilliseconds) : null;
        }
        _v() {
            t && r && (this.xv = this.Mo.bind(this), ms(t, ss, this.xv), this.Cv = (i)=>this.Ki(i || (null == t ? void 0 : t.event)), ms(r, "click", this.Cv, {
                capture: !0
            }), this.Tv = (i)=>this.Mv(i || (null == t ? void 0 : t.event)), ms(r, "mousemove", this.Tv, {
                capture: !0
            }), this.Ev = new zn(this.instance, Un, this.Sv.bind(this)), this.Ev.startIfEnabledOrStop(), this.Iv = this.Wt.bind(this), ms(r, rs, this.Iv), this.Is = !0);
        }
        wv() {
            var i;
            t && r && (this.xv && t.removeEventListener(ss, this.xv), this.Cv && r.removeEventListener("click", this.Cv, {
                capture: !0
            }), this.Tv && r.removeEventListener("mousemove", this.Tv, {
                capture: !0
            }), this.Iv && r.removeEventListener(rs, this.Iv), clearTimeout(this.Rv), null == (i = this.Ev) || i.stop(), this.Is = !1);
        }
        Pv(i, e) {
            var r = this.instance.scrollManager.scrollY(), s = this.instance.scrollManager.scrollX(), n = this.instance.scrollManager.scrollElement(), o = function(i, e, r) {
                for(var s = i; s && en(s) && !rn(s, "body");){
                    if (s === r) return !1;
                    var n = void 0;
                    try {
                        var o, a, l;
                        n = null == (o = null !== (a = null == (l = s.ownerDocument) ? void 0 : l.defaultView) && void 0 !== a ? a : t) ? void 0 : o.getComputedStyle(s).position;
                    } catch (t) {
                        return !1;
                    }
                    if (N(e, n)) return !0;
                    s = pn(s);
                }
                return !1;
            }(vn(i), [
                "fixed",
                "sticky"
            ], n);
            return {
                x: i.clientX + (o ? 0 : s),
                y: i.clientY + (o ? 0 : r),
                target_fixed: o,
                type: e
            };
        }
        Ki(t, i) {
            var e;
            if (void 0 === i && (i = "click"), !tn(t.target) && fh(t)) {
                var r = this.Pv(t, i);
                null != (e = this.rageclicks) && e.isRageClick(t.clientX, t.clientY, (new Date).getTime()) && Sn(vn(t), this.instance.config.rageclick) && this.ys(_({}, r, {
                    type: "rageclick"
                })), this.ys(r);
            }
        }
        Mv(t) {
            !tn(t.target) && fh(t) && (clearTimeout(this.Rv), this.Rv = setTimeout(()=>{
                this.ys(this.Pv(t, "mousemove"));
            }, 500));
        }
        ys(i) {
            if (t) {
                var e = this.gn.disable_capture_url_hashes ? $i(t.location.href) : t.location.href, r = this.gn.custom_personal_data_properties, s = this.gn.mask_personal_data_properties ? [
                    ...oo,
                    ...r || []
                ] : [], n = io(e, s, lo);
                this.Dt = this.Dt || {}, this.Dt[n] || (this.Dt[n] = []), this.Dt[n].push(i);
            }
        }
        Mo() {
            this.Dt && !G(this.Dt) && this.instance.capture("$$heatmap", {
                $heatmap_data: this.getAndClearBuffer()
            });
        }
        constructor(t){
            var i;
            this.yv = !1, this.Is = !1, this.bv = null, this.instance = t, this.yv = !(null == (i = this.instance.persistence) || !i.props[tr]), this.rageclicks = new Hl(t.config.rageclick);
        }
    },
    deadClicksAutocapture: zn,
    webVitalsAutocapture: class {
        get qv() {
            return this._instance.config.capture_performance;
        }
        get allowedMetrics() {
            var t, i, e = W(this.qv) ? null == (t = this.qv) ? void 0 : t.web_vitals_allowed_metrics : void 0;
            return X(e) ? (null == (i = this._instance.persistence) ? void 0 : i.props[lr]) || sh : e;
        }
        get flushToCaptureTimeoutMs() {
            return (W(this.qv) ? this.qv.web_vitals_delayed_flush_ms : void 0) || 5e3;
        }
        get attributionMetrics() {
            var t = W(this.qv) ? this.qv.web_vitals_attribution : void 0;
            return it(t) ? t ? sh : [] : q(t) ? t : nh;
        }
        get useAttribution() {
            return this.attributionMetrics.length > 0;
        }
        get useSoftNavs() {
            var t = W(this.qv) ? this.qv.__preview_web_vitals_soft_navs : void 0;
            return null != t && t;
        }
        get Dv() {
            var t = W(this.qv) && Z(this.qv.__web_vitals_max_value) ? this.qv.__web_vitals_max_value : rh;
            return t > 0 && 6e4 >= t ? rh : t;
        }
        get isEnabled() {
            var t = null == s ? void 0 : s.protocol;
            if ("http:" !== t && "https:" !== t) return eh.info("Web Vitals are disabled on non-http/https protocols"), !1;
            var i = W(this.qv) ? this.qv.web_vitals : it(this.qv) ? this.qv : void 0;
            return it(i) ? i : this.yv;
        }
        startIfEnabled() {
            this.isEnabled && !this.Is && (eh.info("enabled, starting..."), this.Ks(this.$v));
        }
        onRemoteConfig(t) {
            if (t.ok) {
                var i = t.config;
                if ("capturePerformance" in i) {
                    var e = W(i.capturePerformance) && !!i.capturePerformance.web_vitals, r = W(i.capturePerformance) ? i.capturePerformance.web_vitals_allowed_metrics : void 0;
                    this._instance.persistence && (this._instance.persistence.register({
                        [sr]: e
                    }), this._instance.persistence.register({
                        [lr]: r
                    })), this.yv = e, this.startIfEnabled();
                }
            }
        }
        get Nv() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
        }
        Ks(t) {
            var i = v.__PosthogExtensions__, e = this.Nv, r = null == i ? void 0 : i.postHogWebVitalsCallbacksByFlavor;
            null != r && r[e] || "web-vitals" === e && K(r) && null != i && i.postHogWebVitalsCallbacks ? t() : null == i || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, e, (i)=>{
                i ? eh.error("failed to load script", i) : t();
            });
        }
        Lv(i) {
            var e = i || (null == t ? void 0 : t.location.href);
            if (e) {
                var r = this._instance.config.disable_capture_url_hashes ? $i(e) : e, s = this._instance.config.custom_personal_data_properties, n = this._instance.config.mask_personal_data_properties ? [
                    ...oo,
                    ...s || []
                ] : [];
                return io(r, n, lo);
            }
            eh.error("Could not determine current URL");
        }
        constructor(t){
            var i;
            this.yv = !1, this.Is = !1, this.Dt = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            }, this.Av = ()=>{
                clearTimeout(this.Fv), this.Fv = void 0, 0 !== this.Dt.metrics.length && (this._instance.capture("$web_vitals", _({
                    $current_url: this.Dt.url
                }, this.Dt.metrics.reduce((t, i)=>_({}, t, {
                        ["$web_vitals_" + i.name + "_event"]: _({}, i),
                        ["$web_vitals_" + i.name + "_value"]: i.value
                    }), {}))), this.Dt = {
                    navigationKey: void 0,
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                });
            }, this.Ov = (t)=>{
                var i;
                if (this.Dt = this.Dt || {
                    navigationKey: void 0,
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                }, X(null == t ? void 0 : t.name) || X(null == t ? void 0 : t.value)) eh.error("Invalid metric received", t);
                else {
                    var e = "string" == typeof t.navigationURL ? t.navigationURL : void 0, r = this.Lv(e);
                    if (!K(r)) {
                        var s = Z(t.navigationId) || "string" == typeof t.navigationId ? "navigation:" + t.navigationId : "url:" + r;
                        if (!this.Dv || this.Dv > t.value) {
                            this.Dt.navigationKey !== s && (this.Av(), this.Fv = setTimeout(this.Av, this.flushToCaptureTimeoutMs)), K(this.Dt.navigationKey) && (this.Dt.navigationKey = s, this.Dt.url = r), this.Dt.firstMetricTimestamp = K(this.Dt.firstMetricTimestamp) ? Date.now() : this.Dt.firstMetricTimestamp;
                            var n = null == (i = this._instance.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0), o = _({}, t, e ? {
                                navigationURL: r
                            } : {}, {
                                $current_url: r,
                                timestamp: Date.now()
                            });
                            if (delete o.entries, W(t.attribution) && this.attributionMetrics.indexOf(t.name) > -1) {
                                var a = {};
                                for (var l of oh){
                                    var h = "url" === l && "string" == typeof t.attribution[l] ? this.Lv(t.attribution[l]) : t.attribution[l];
                                    K(h) || (a[l] = h);
                                }
                                o.attribution = a;
                            } else delete o.attribution;
                            K(n) || (o.$session_id = n.sessionId, o.$window_id = n.windowId), this.Dt.metrics.push(o), this.Dt.metrics.length === this.allowedMetrics.length && this.Av();
                        } else eh.error("Ignoring metric with value >= " + this.Dv, t);
                    }
                }
            }, this.$v = ()=>{
                if (!this.Is) {
                    var t, i, e, r, s = !1, n = v.__PosthogExtensions__, o = null == n ? void 0 : n.postHogWebVitalsCallbacksByFlavor, a = (null == o ? void 0 : o[this.Nv]) || ("web-vitals" === this.Nv && K(o) ? null == n ? void 0 : n.postHogWebVitalsCallbacks : void 0);
                    if (!K(a)) {
                        var l = a.withoutAttribution, h = this.attributionMetrics;
                        s = !K(l), t = h.indexOf("LCP") > -1 ? a.onLCP : (null == l ? void 0 : l.onLCP) || a.onLCP, i = h.indexOf("CLS") > -1 ? a.onCLS : (null == l ? void 0 : l.onCLS) || a.onCLS, e = h.indexOf("FCP") > -1 ? a.onFCP : (null == l ? void 0 : l.onFCP) || a.onFCP, r = h.indexOf("INP") > -1 ? a.onINP : (null == l ? void 0 : l.onINP) || a.onINP;
                    }
                    if (t && i && e && r) {
                        var u = {
                            reportSoftNavs: this.useSoftNavs
                        }, d = s && this.attributionMetrics.indexOf("INP") > -1 ? _({}, u, {
                            includeProcessedEventEntries: !1
                        }) : u;
                        this.allowedMetrics.indexOf("LCP") > -1 && t(this.Ov.bind(this), u), this.allowedMetrics.indexOf("CLS") > -1 && i(this.Ov.bind(this), u), this.allowedMetrics.indexOf("FCP") > -1 && e(this.Ov.bind(this), u), this.allowedMetrics.indexOf("INP") > -1 && r(this.Ov.bind(this), d), this.Is = !0;
                    } else eh.error("web vitals callbacks not loaded - not starting");
                }
            }, this._instance = t, this.yv = !(null == (i = this._instance.persistence) || !i.props[sr]), this.startIfEnabled();
        }
    }
}, nu = {
    exceptionObserver: class {
        Wv() {
            var t = this._instance.config.capture_exceptions, i = {
                capture_unhandled_errors: !1,
                capture_unhandled_rejections: !1,
                capture_console_errors: !1
            };
            return W(t) ? i = _({}, i, t) : (K(t) ? this.Uv : t) && (i = _({}, i, {
                capture_unhandled_errors: !0,
                capture_unhandled_rejections: !0
            })), i;
        }
        get isEnabled() {
            return this.gn.capture_console_errors || this.gn.capture_unhandled_errors || this.gn.capture_unhandled_rejections;
        }
        startIfEnabledOrStop() {
            this.isEnabled ? (Ql.info("enabled"), this.zv(), this.Ks(this.$v)) : this.zv();
        }
        Ks(t) {
            var i, e;
            null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "exception-autocapture", (i)=>{
                if (i) return Ql.error("failed to load script", i);
                t();
            });
        }
        zv() {
            var t, i, e;
            null == (t = this.jv) || t.call(this), this.jv = void 0, null == (i = this.Bv) || i.call(this), this.Bv = void 0, null == (e = this.Hv) || e.call(this), this.Hv = void 0;
        }
        onRemoteConfig(t) {
            if (t.ok) {
                var i = t.config;
                "autocaptureExceptions" in i && (this.Uv = !!i.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
                    [ir]: this.Uv
                }), this.gn = this.Wv(), this.startIfEnabledOrStop());
            }
        }
        onConfigChange() {
            this.gn = this.Wv();
        }
        captureException(t) {
            var i, e, r, s = null !== (i = null == t || null == (e = t.$exception_list) || null == (e = e[0]) ? void 0 : e.type) && void 0 !== i ? i : "Exception";
            this.pe.consumeRateLimit(s) ? Ql.info("Skipping exception capture because of client rate limiting.", {
                exception: s
            }) : null == (r = this._instance.exceptions) || r.sendExceptionEvent(t);
        }
        constructor(i){
            var e;
            this.$v = ()=>{
                var i;
                if (t && this.isEnabled && null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions) {
                    var e = v.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r = v.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, s = v.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                    try {
                        !this.jv && this.gn.capture_unhandled_errors && (this.jv = e(this.captureException.bind(this))), !this.Bv && this.gn.capture_unhandled_rejections && (this.Bv = r(this.captureException.bind(this))), !this.Hv && this.gn.capture_console_errors && (this.Hv = s(this.captureException.bind(this)));
                    } catch (t) {
                        Ql.error("failed to start", t), this.zv();
                    }
                }
            }, this._instance = i, this.Uv = !(null == (e = this._instance.persistence) || !e.props[ir]), this.pe = new ft(_({}, function(t) {
                var i, e, r, s;
                return void 0 === t && (t = {}), {
                    refillRate: null !== (i = null !== (e = t.exceptionRateLimiterRefillRate) && void 0 !== e ? e : t.__exceptionRateLimiterRefillRate) && void 0 !== i ? i : 1,
                    bucketSize: null !== (r = null !== (s = t.exceptionRateLimiterBucketSize) && void 0 !== s ? s : t.__exceptionRateLimiterBucketSize) && void 0 !== r ? r : 10
                };
            }(this._instance.config.error_tracking), {
                refillInterval: 1e4,
                A: Ql
            })), this.gn = this.Wv(), this.startIfEnabledOrStop();
        }
    },
    exceptions: class {
        onConfigChange() {
            this.Zv = De(this.Qv()), this.Jv.setConfig(this.Zv);
        }
        onRemoteConfig(t) {
            var i, e, r;
            if (t.ok) {
                var s = t.config;
                if ("errorTracking" in s) {
                    var n = null !== (i = null == (e = s.errorTracking) ? void 0 : e.suppressionRules) && void 0 !== i ? i : [], o = null == (r = s.errorTracking) ? void 0 : r.captureExtensionExceptions;
                    this.Vv = n, this._instance.persistence && this._instance.persistence.register({
                        [er]: this.Vv,
                        [rr]: o
                    });
                }
            }
        }
        get Kv() {
            var t, i = !!this._instance.get_property(rr), e = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (t = null != e ? e : i) && void 0 !== t && t;
        }
        buildProperties(t, i) {
            return this.Gv.buildFromUnknown(t, {
                syntheticException: null == i ? void 0 : i.syntheticException,
                mechanism: {
                    handled: null == i ? void 0 : i.handled
                }
            });
        }
        addExceptionStep(t, i) {
            if (this.Zv.enabled) try {
                if (!J(t) || 0 === t.trim().length) return void Bh.warn("Ignoring exception step because message must be a non-empty string");
                var e = function(t) {
                    if (!t) return {
                        sanitizedProperties: {},
                        droppedKeys: []
                    };
                    var i = [];
                    return {
                        sanitizedProperties: Object.keys(t).reduce((e, r)=>Ae.has(r) ? (i.push(r), e) : (e[r] = t[r], e), {}),
                        droppedKeys: i
                    };
                }(this.Yv(i)), r = e.sanitizedProperties, s = e.droppedKeys;
                s.length > 0 && Bh.warn("Ignoring reserved exception step fields", {
                    droppedKeys: s
                }), this.Jv.add(_({
                    [Ie]: t,
                    [Fe]: (new Date).toISOString()
                }, r));
            } catch (t) {
                Bh.error("Failed to add exception step. Ignoring breadcrumb.", t);
            }
        }
        sendExceptionEvent(t) {
            try {
                var i = t.$exception_list;
                if (this.Xv(i)) {
                    if (this.tc(i)) return this.ec("Exception dropped: matched a suppression rule"), void Bh.info("Skipping exception capture because a suppression rule matched");
                    if (!this.Kv && this.ic(i)) return this.ec("Exception dropped: thrown by a browser extension"), void Bh.info("Skipping exception capture because it was thrown by an extension");
                    if (!this.Kv && this.rc(i)) return this.ec("Exception dropped: thrown by an injected browser script"), void Bh.info("Skipping exception capture because it was thrown by an injected browser script");
                    if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.nc(i)) return this.ec("Exception dropped: thrown by the PostHog SDK"), void Bh.info("Skipping exception capture because it was thrown by the PostHog SDK");
                }
                var e = this.Zv.enabled && X(t.$exception_steps) ? this.sc(t) : t, r = "string" == typeof (n = globalThis._posthogReleaseId) && n.length > 0 ? n : void 0;
                r && (e.$release_id = r);
                try {
                    var s = this._instance.capture("$exception", e, {
                        _noTruncate: !0,
                        _batchKey: "exceptionEvent",
                        uu: !0
                    });
                    return s && this.Jv.clear(), s;
                } catch (t) {
                    return Bh.error("Failed to capture exception event. Dropping this exception.", t), void this.Jv.clear();
                }
            } catch (t) {
                return void Bh.error("Failed to process exception event. Ignoring this exception.", t);
            }
            var n;
        }
        sc(t) {
            try {
                var i = this.Jv.getAttachable();
                return 0 === i.length ? t : _({}, t, {
                    $exception_steps: i
                });
            } catch (i) {
                return Bh.error("Failed to read buffered exception steps. Capturing exception without steps.", i), t;
            }
        }
        ec(t) {
            this.Zv.enabled && this.Jv.add({
                [Ie]: t,
                [Fe]: (new Date).toISOString()
            });
        }
        Yv(t) {
            return W(t) ? _({}, t) : {};
        }
        Qv() {
            var t, i;
            return null !== (t = null == (i = this._instance.config.error_tracking) ? void 0 : i.exception_steps) && void 0 !== t ? t : {};
        }
        tc(t) {
            if (0 === t.length) return !1;
            try {
                var i = t.reduce((t, i)=>{
                    var e = i.type, r = i.value;
                    return J(e) && e.length > 0 && t.$exception_types.push(e), J(r) && r.length > 0 && t.$exception_values.push(r), t;
                }, {
                    $exception_types: [],
                    $exception_values: []
                });
                return this.Vv.some((t)=>{
                    var e = t.values.map((t)=>{
                        var e = al[t.operator], r = i[t.key];
                        if (!e || !r) return !1;
                        var s = q(t.value) ? t.value : [
                            t.value
                        ];
                        return s.length > 0 && e(s, r);
                    });
                    return "OR" === t.type ? e.some(Boolean) : e.every(Boolean);
                });
            } catch (t) {
                return Bh.warn("Failed to evaluate suppression rules. Capturing the exception.", t), !1;
            }
        }
        ic(t) {
            var i = t.flatMap((t)=>{
                var i, e;
                return null !== (i = null == (e = t.stacktrace) ? void 0 : e.frames) && void 0 !== i ? i : [];
            }), e = i.filter((t)=>{
                var i = t.filename;
                return !!i && Hh.some((t)=>i.startsWith(t));
            });
            return 0 !== e.length && (!e.every((t)=>{
                var i = t.filename;
                return !!i && i.startsWith(zh);
            }) || t.some((t)=>{
                var i = t.value;
                return J(i) && i.includes("isolatedAPI.contexts.topHostname");
            }) && !i.some((t)=>{
                var i = t.filename;
                return t.in_app && !(null != i && i.startsWith(zh));
            }));
        }
        rc(t) {
            return t.some((t)=>{
                var i = t.value;
                return J(i) && qh.some((t)=>i.includes(t));
            });
        }
        nc(t) {
            if (t.length > 0) {
                var i, e, r, s, n = null !== (i = null == (e = t[0].stacktrace) ? void 0 : e.frames) && void 0 !== i ? i : [], o = n[n.length - 1];
                return null !== (r = null == o || null == (s = o.filename) ? void 0 : s.includes("posthog.com/static")) && void 0 !== r && r;
            }
            return !1;
        }
        Xv(t) {
            return !X(t) && q(t);
        }
        constructor(t){
            var i, e;
            this.Vv = [], this.Gv = new he([
                new we,
                new Oe,
                new xe,
                new Se,
                new Re,
                new Pe,
                new ke,
                new Ce
            ], function(t) {
                for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)e[r - 1] = arguments[r];
                return function(i, r) {
                    void 0 === r && (r = 0);
                    for(var s = [], n = i.split("\n"), o = r; n.length > o; o++){
                        var a = n[o];
                        if (1024 >= a.length) {
                            var l = be.test(a) ? a.replace(be, "$1") : a;
                            if (!l.match(/\S*Error: /)) {
                                for (var h of e){
                                    var u = h(l, t);
                                    if (u) {
                                        s.push(u);
                                        break;
                                    }
                                }
                                if (s.length >= 50) break;
                            }
                        }
                    }
                    return function(t) {
                        if (!t.length) return [];
                        var i = Array.from(t);
                        return i.reverse(), i.slice(0, 50).map((t)=>{
                            return _({}, t, {
                                filename: t.filename || (e = i, e[e.length - 1] || {}).filename,
                                function: t.function || ue
                            });
                            //TURBOPACK unreachable
                            ;
                            var e;
                        });
                    }(s);
                };
            }("web:javascript", _e, ye)), this._instance = t, this.Vv = null !== (i = null == (e = this._instance.persistence) ? void 0 : e.get_property(er)) && void 0 !== i ? i : [], this.Zv = De(this.Qv()), this.Jv = new Ne(this.Zv);
        }
    }
}, ou = _({
    productTours: class {
        get $o() {
            return this._instance.persistence;
        }
        initialize() {
            this.loadIfEnabled();
        }
        onRemoteConfig(t) {
            if (t.ok) {
                var i = t.config;
                if ("productTours" in i) {
                    var e, r;
                    if (this.$o && this.$o.register({
                        [or]: !!i.productTours
                    }), !_h(this._instance)) return !this.ac && X(null == (e = this.$o) ? void 0 : e.props[Ar]) || ph.info("product tours disabled; stopping and clearing cached tours"), null == (r = this.ac) || r.stop(), this.ac = null, void this.clearCache();
                    this.loadIfEnabled();
                }
            }
        }
        loadIfEnabled() {
            !this.ac && _h(this._instance) && this.Ks(()=>this.lc());
        }
        Ks(t) {
            var i, e;
            null != (i = v.__PosthogExtensions__) && i.generateProductTours ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "product-tours", (i)=>{
                i ? ph.error("Could not load product tours script", i) : t();
            });
        }
        lc() {
            var t;
            !this.ac && null != (t = v.__PosthogExtensions__) && t.generateProductTours && (this.ac = v.__PosthogExtensions__.generateProductTours(this._instance, !0));
        }
        getProductTours(t, i) {
            if (void 0 === i && (i = !1), !q(this.oc) || i) {
                var e = this.$o;
                if (e) {
                    var r = e.props[Ar];
                    if (q(r) && !i) return this.oc = r, void t(r, {
                        isLoaded: !0
                    });
                }
                this._instance._send_request({
                    url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token),
                    method: "GET",
                    timestampMode: "query",
                    callback: (i)=>{
                        if (_h(this._instance)) {
                            var r = i.statusCode;
                            if (200 !== r || !i.json) {
                                var s = "Product Tours API could not be loaded, status: " + r;
                                return 0 === r ? i.error || ph.warn(s) : ph.error(s), void t([], {
                                    isLoaded: !1,
                                    error: s
                                });
                            }
                            var n = q(i.json.product_tours) ? i.json.product_tours : [];
                            this.oc = n, e && e.register({
                                [Ar]: n
                            }), t(n, {
                                isLoaded: !0
                            });
                        } else t([], {
                            isLoaded: !0
                        });
                    }
                });
            } else t(this.oc, {
                isLoaded: !0
            });
        }
        getActiveProductTours(t) {
            X(this.ac) ? t([], {
                isLoaded: !1,
                error: "Product tours not loaded"
            }) : this.ac.getActiveProductTours(t);
        }
        showProductTour(t) {
            var i;
            null == (i = this.ac) || i.showTourById(t);
        }
        previewTour(t) {
            this.ac ? this.ac.previewTour(t) : this.Ks(()=>{
                var i;
                this.lc(), null == (i = this.ac) || i.previewTour(t);
            });
        }
        dismissProductTour() {
            var t;
            null == (t = this.ac) || t.dismissTour("user_clicked_skip");
        }
        nextStep() {
            var t;
            null == (t = this.ac) || t.nextStep();
        }
        previousStep() {
            var t;
            null == (t = this.ac) || t.previousStep();
        }
        clearCache() {
            var t;
            this.oc = null, null == (t = this.$o) || t.unregister(Ar);
        }
        resetTour(t) {
            var i;
            null == (i = this.ac) || i.resetTour(t);
        }
        resetAllTours() {
            var t;
            null == (t = this.ac) || t.resetAllTours();
        }
        cancelPendingTour(t) {
            var i;
            null == (i = this.ac) || i.cancelPendingTour(t);
        }
        constructor(t){
            this.ac = null, this.oc = null, this._instance = t;
        }
    }
}, eu), au = {
    siteApps: class {
        get isEnabled() {
            return !!this._instance.config.opt_in_site_apps;
        }
        dc(t, i) {
            if (i) {
                var e = this.globalsForEvent(i);
                this.hc.push(e), this.hc.length > 1e3 && (this.hc = this.hc.slice(10));
            }
        }
        get siteAppLoaders() {
            var t;
            return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.siteApps;
        }
        initialize() {
            if (this.isEnabled) {
                var t = this._instance._addCaptureHook(this.dc.bind(this));
                this.vc = ()=>{
                    t(), this.hc = [], this.vc = void 0;
                };
            }
        }
        globalsForEvent(t) {
            var i, e, r, s, n, o, a;
            if (!t) throw new Error("Event payload is required");
            var l = {}, h = this._instance.get_property("$groups") || [], u = this._instance.get_property("$stored_group_properties") || {};
            for (var d of Object.entries(u)){
                var v = d[0];
                l[v] = {
                    id: h[v],
                    type: v,
                    properties: d[1]
                };
            }
            var c = t.$set_once, f = t.$set;
            return {
                event: _({}, g(t, gh), {
                    properties: _({}, t.properties, f ? {
                        $set: _({}, null !== (i = null == (e = t.properties) ? void 0 : e.$set) && void 0 !== i ? i : {}, f)
                    } : {}, c ? {
                        $set_once: _({}, null !== (r = null == (s = t.properties) ? void 0 : s.$set_once) && void 0 !== r ? r : {}, c)
                    } : {}),
                    elements_chain: null !== (n = null == (o = t.properties) ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
                    distinct_id: null == (a = t.properties) ? void 0 : a.distinct_id
                }),
                person: {
                    properties: this._instance.get_property("$stored_person_properties")
                },
                groups: l
            };
        }
        cc(t) {
            var i, e = null == (i = t.tagName) ? void 0 : i.toLowerCase();
            return "style" === e && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(t) || (mh.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === e && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(t) || (mh.error("prepare_external_dependency_script returned null"), null) : t;
        }
        fc() {
            var t, i, e, s, n, o, a, l;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return ()=>{};
            var h = null == r ? void 0 : r.defaultView, u = null == h || null == (t = h.Node) ? void 0 : t.prototype;
            if (!h || !u) return ()=>{};
            if (this.uc++, this.gc) return this.mc();
            var d = [], v = this, c = new WeakSet, f = (t, i, e)=>{
                if (null != t && t[i]) {
                    var r = t[i];
                    t[i] = e(r), d.push(()=>{
                        t[i] = r;
                    });
                }
            }, p = (t)=>{
                if (c.has(t)) return t;
                var i = v.cc(t);
                return i && c.add(i), i;
            }, _ = (t)=>t.map((t)=>"string" == typeof t ? t : p(t)).filter((t)=>!Q(t));
            return f(u, "appendChild", (t)=>function(i) {
                    var e = p(i);
                    return e ? t.call(this, e) : i;
                }), f(u, "insertBefore", (t)=>function(i, e) {
                    var r = p(i);
                    return r ? t.call(this, r, e) : i;
                }), f(u, "replaceChild", (t)=>function(i, e) {
                    var r = p(i);
                    return r ? t.call(this, r, e) : e;
                }), [
                null == (i = h.Element) ? void 0 : i.prototype,
                null == (e = h.Document) ? void 0 : e.prototype,
                null == (s = h.DocumentFragment) ? void 0 : s.prototype
            ].forEach((t)=>{
                f(t, "append", (t)=>function() {
                        for(var i = arguments.length, e = new Array(i), r = 0; i > r; r++)e[r] = arguments[r];
                        return t.apply(this, _(e));
                    }), f(t, "prepend", (t)=>function() {
                        for(var i = arguments.length, e = new Array(i), r = 0; i > r; r++)e[r] = arguments[r];
                        return t.apply(this, _(e));
                    });
            }), [
                null == (n = h.Element) ? void 0 : n.prototype,
                null == (o = h.CharacterData) ? void 0 : o.prototype,
                null == (a = h.DocumentType) ? void 0 : a.prototype
            ].forEach((t)=>{
                f(t, "before", (t)=>function() {
                        for(var i = arguments.length, e = new Array(i), r = 0; i > r; r++)e[r] = arguments[r];
                        return t.apply(this, _(e));
                    }), f(t, "after", (t)=>function() {
                        for(var i = arguments.length, e = new Array(i), r = 0; i > r; r++)e[r] = arguments[r];
                        return t.apply(this, _(e));
                    }), f(t, "replaceWith", (t)=>function() {
                        for(var i = arguments.length, e = new Array(i), r = 0; i > r; r++)e[r] = arguments[r];
                        var s = _(e);
                        return e.length && !s.length ? void 0 : t.apply(this, s);
                    });
            }), f(null == (l = h.Element) ? void 0 : l.prototype, "insertAdjacentElement", (t)=>function(i, e) {
                    var r = p(e);
                    return r ? t.call(this, i, r) : null;
                }), this.gc = ()=>{
                d.forEach((t)=>t()), this.gc = void 0;
            }, this.mc();
        }
        mc() {
            var t = !1;
            return ()=>{
                var i;
                t || (t = !0, this.uc--, 0 === this.uc && (null == (i = this.gc) || i.call(this)));
            };
        }
        yc(t, i) {
            void 0 === i && (i = !0);
            var e = this.fc();
            try {
                var r = t(e);
                return i && e(), r;
            } catch (t) {
                throw e(), t;
            }
        }
        setupSiteApp(t) {
            var i = this.apps[t.id], e = ()=>{
                var e;
                !i.errored && this.hc.length && (mh.info("Processing " + this.hc.length + " events for site app with id " + t.id), this.hc.forEach((t)=>this.yc(()=>null == i.processEvent ? void 0 : i.processEvent(t))), i.processedBuffer = !0), Object.values(this.apps).every((t)=>t.processedBuffer || t.errored) && (null == (e = this.vc) || e.call(this));
            }, r = !1, s = (s)=>{
                i.errored = !s, i.loaded = !0, mh.info("Site app with id " + t.id + " " + (s ? "loaded" : "errored")), r && e();
            };
            try {
                var n = this.yc((i)=>t.init({
                        posthog: this._instance,
                        callback (t) {
                            i(), s(t);
                        }
                    }), !1).processEvent;
                n && (i.processEvent = n), r = !0;
            } catch (i) {
                mh.error(yh + t.id, i), s(!1);
            }
            if (r && i.loaded) try {
                e();
            } catch (e) {
                mh.error("Error while processing buffered events PostHog app with config id " + t.id, e), i.errored = !0;
            }
        }
        bc() {
            var t = this.siteAppLoaders || [];
            for (var i of t)this.apps[i.id] = {
                id: i.id,
                loaded: !1,
                errored: !1,
                processedBuffer: !1
            };
            for (var e of t)this.setupSiteApp(e);
        }
        _c(t) {
            var i = this;
            if (0 !== Object.keys(this.apps).length) {
                var e = this.globalsForEvent(t), r = function(r) {
                    try {
                        i.yc(()=>null == r.processEvent ? void 0 : r.processEvent(e));
                    } catch (i) {
                        mh.error("Error while processing event " + t.event + " for site app " + r.id, i);
                    }
                };
                for (var s of Object.values(this.apps))r(s);
            }
        }
        onRemoteConfig(t) {
            var i, e, r, s = this;
            if (null != (i = this.siteAppLoaders) && i.length) return this.isEnabled ? (this.bc(), void this._instance.on("eventCaptured", (t)=>this._c(t))) : void mh.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null == (e = this.vc) || e.call(this), t.ok) {
                var n = t.config;
                if (null != (r = n.siteApps) && r.length) if (this.isEnabled) {
                    var o = function() {
                        var t, i = a.id, e = a.url;
                        v["__$$ph_site_app_" + i] = s._instance, null == (t = v.__PosthogExtensions__) || null == t.loadSiteApp || t.loadSiteApp(s._instance, e, (t)=>{
                            if (t) return mh.error(yh + i, t);
                        });
                    };
                    for (var a of n.siteApps)o();
                } else mh.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            }
        }
        constructor(t){
            this.uc = 0, this._instance = t, this.hc = [], this.apps = {};
        }
    }
}, lu = {
    tracingHeaders: class {
        initialize() {
            this.startIfEnabledOrStop();
        }
        Ks(t) {
            var i, e;
            null != (i = v.__PosthogExtensions__) && i.tracingHeadersPatchFns ? t() : null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "tracing-headers", (i)=>{
                if (i) return ih.error("failed to load script", i);
                t();
            });
        }
        Cc() {
            var t, i;
            return null !== (t = null !== (i = this._instance.config.tracing_headers) && void 0 !== i ? i : this._instance.config.addTracingHeaders) && void 0 !== t ? t : this._instance.config.__add_tracing_headers;
        }
        xc() {
            var t = this.Cc();
            return q(t) ? (q(this.Sc) ? this.Sc.splice(0, this.Sc.length, ...t) : this.Sc = [
                ...t
            ], t.length > 0 ? this.Sc : void 0) : (q(this.Sc) && this.Sc.splice(0), this.Sc = t || void 0, this.Sc);
        }
        zv() {
            var t, i;
            null == (t = this.wc) || t.call(this), null == (i = this.kc) || i.call(this), this.wc = void 0, this.kc = void 0;
        }
        startIfEnabledOrStop() {
            this.xc() ? this.Ks(this.$v) : this.zv();
        }
        constructor(t){
            this.wc = void 0, this.kc = void 0, this.Sc = void 0, this.$v = ()=>{
                var t, i, e = this.xc();
                e ? (K(this.wc) && (this.wc = null == (t = v.__PosthogExtensions__) || null == (t = t.tracingHeadersPatchFns) ? void 0 : t._patchXHR(e, ()=>this._instance.get_distinct_id(), this._instance.sessionManager)), K(this.kc) && (this.kc = null == (i = v.__PosthogExtensions__) || null == (i = i.tracingHeadersPatchFns) ? void 0 : i._patchFetch(e, ()=>this._instance.get_distinct_id(), this._instance.sessionManager))) : this.zv();
            }, this._instance = t;
        }
    }
}, hu = _({
    surveys: class extends xh {
        Ou(t, i) {
            var e = i.query ? Aa(t, i.query) : t;
            return new Promise((t)=>{
                var r;
                this._instance._send_request({
                    method: i.method,
                    url: this._instance.requestRouter.endpointFor(null !== (r = i.target) && void 0 !== r ? r : "api", e),
                    data: i.body,
                    headers: i.headers,
                    timeout: i.timeoutMs,
                    fireCallbackOnDrop: !0,
                    transport: i.transport,
                    compression: i.compression,
                    timestampMode: i.sentAt,
                    callback: t
                });
            });
        }
        constructor(t){
            var i;
            super(new Rh(t), {
                get projectToken () {
                    return i.config.token;
                },
                kv: new Ph(i = t)
            }), this._instance = t;
        }
    }
}, eu), uu = {
    toolbar: class {
        Tc(t) {
            v.ph_toolbar_state = t;
        }
        Mc() {
            var t;
            return null !== (t = v.ph_toolbar_state) && void 0 !== t ? t : 0;
        }
        initialize() {
            return this.maybeLoadToolbar();
        }
        maybeLoadToolbar(i, e, s) {
            if (void 0 === i && (i = void 0), void 0 === e && (e = void 0), void 0 === s && (s = void 0), ys(this.instance.config)) return !1;
            if (!t || !r) return !1;
            i = null != i ? i : t.location, s = null != s ? s : t.history;
            try {
                if (!e) {
                    try {
                        t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
                    } catch (t) {
                        return !1;
                    }
                    e = null == t ? void 0 : t.localStorage;
                }
                var n, o = Ch || eo(i.hash, "__posthog") || eo(i.hash, "state"), a = o ? cs(()=>JSON.parse(atob(decodeURIComponent(o)))) || cs(()=>JSON.parse(decodeURIComponent(o))) : null;
                return a && "ph_authorize" === a.action ? ((n = a).source = "url", n && Object.keys(n).length > 0 && (a.desiredHash ? i.hash = a.desiredHash : s ? s.replaceState(s.state, "", i.pathname + i.search) : i.hash = "")) : ((n = JSON.parse(e.getItem(Oh) || "{}")).source = "localstorage", delete n.userIntent), !(!n.token || this.instance.config.token !== n.token || (this.loadToolbar(n), 0));
            } catch (t) {
                return !1;
            }
        }
        Ec(t) {
            var i = v.ph_load_toolbar || v.ph_load_editor;
            !X(i) && V(i) ? i(t, this.instance) : Ih.warn("No toolbar load function found");
        }
        loadToolbar(i) {
            var e = !(null == r || !r.getElementById(Ys));
            if (!t || e) return !1;
            var s = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, n = _({
                token: this.instance.config.token
            }, i, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
            }, s ? {
                instrument: !1
            } : {});
            if (t.localStorage.setItem(Oh, JSON.stringify(_({}, n, {
                source: void 0
            }))), 2 === this.Mc()) this.Ec(n);
            else if (0 === this.Mc()) {
                var o;
                this.Tc(1), null == (o = v.__PosthogExtensions__) || null == o.loadExternalDependency || o.loadExternalDependency(this.instance, "toolbar", (t)=>{
                    if (t) return Ih.error("[Toolbar] Failed to load", t), void this.Tc(0);
                    this.Tc(2), this.Ec(n);
                }), ms(t, "turbolinks:load", ()=>{
                    this.Tc(0), this.loadToolbar(n);
                });
            }
            return !0;
        }
        Ic(t) {
            return this.loadToolbar(t);
        }
        maybeLoadEditor(t, i, e) {
            return void 0 === t && (t = void 0), void 0 === i && (i = void 0), void 0 === e && (e = void 0), this.maybeLoadToolbar(t, i, e);
        }
        constructor(t){
            this.instance = t;
        }
    }
}, du = _({
    experiments: Gh
}, eu), vu = {
    conversations: class {
        initialize() {
            this.loadIfEnabled();
        }
        onRemoteConfig(t) {
            if (!this._instance.config.disable_conversations && (this.Fc = t.ok, t.ok)) {
                var i = t.config.conversations;
                X(i) || (it(i) ? this.Rc = i : (this.Rc = i.enabled, this.je = i), this.loadIfEnabled());
            }
        }
        reset() {
            var t;
            null == (t = this._conversationsManager) || t.reset(), this._conversationsManager = null, this.Rc = void 0, this.je = null, this.Fc = void 0, this.Ac = !1;
        }
        loadIfEnabled() {
            if (!(this._conversationsManager || this.Pc || this._instance.config.disable_conversations || ys(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
                var t = null == v ? void 0 : v.__PosthogExtensions__;
                if (t && !K(this.Rc) && this.Rc) if (this.je && this.je.token) {
                    this.Pc = !0;
                    try {
                        var i = t.initConversations;
                        if (i) return this.Oc(i), void (this.Pc = !1);
                        var e = t.loadExternalDependency;
                        if (!e) return void this.Lc(Qr);
                        e(this._instance, "conversations", (i)=>{
                            i || !t.initConversations ? this.Lc("Could not load conversations script", i) : this.Oc(t.initConversations), this.Pc = !1;
                        });
                    } catch (t) {
                        this.Lc("Error initializing conversations", t), this.Pc = !1;
                    }
                } else Kh.error("Conversations enabled but missing token in remote config.");
            }
        }
        Oc(t) {
            if (this.je) try {
                this._conversationsManager = t(this.je, this._instance), this.Ac = !1, Kh.info("Conversations loaded successfully");
            } catch (t) {
                this.Lc("Error completing conversations initialization", t);
            }
            else Kh.error("Cannot complete initialization: remote config is null");
        }
        Lc(t, i) {
            Kh.error(t, i), this._conversationsManager = null, this.Pc = !1, this.Ac = !0;
        }
        show() {
            this._conversationsManager ? this._conversationsManager.show() : Kh.warn("Conversations not loaded yet.");
        }
        hide() {
            this._conversationsManager && this._conversationsManager.hide();
        }
        isAvailable() {
            return !0 === this.Rc && !Q(this._conversationsManager);
        }
        getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : ys(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this.Fc ? "remote_config_failed" : K(this.Rc) ? this.Fc ? "disabled_in_project" : "remote_config_pending" : this.Rc ? X(this.je) || !this.je.token ? "missing_token" : null != v && v.__PosthogExtensions__ ? this.Pc ? "initializing" : this.Ac ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project";
        }
        isVisible() {
            var t, i;
            return null !== (t = null == (i = this._conversationsManager) ? void 0 : i.isVisible()) && void 0 !== t && t;
        }
        sendMessage(t, i, e) {
            var r = this;
            return p(function*() {
                return r._conversationsManager ? r._conversationsManager.sendMessage(t, i, e) : (Kh.warn(Jh), null);
            })();
        }
        getMessages(t, i) {
            var e = this;
            return p(function*() {
                return e._conversationsManager ? e._conversationsManager.getMessages(t, i) : (Kh.warn(Jh), null);
            })();
        }
        markAsRead(t) {
            var i = this;
            return p(function*() {
                return i._conversationsManager ? i._conversationsManager.markAsRead(t) : (Kh.warn(Jh), null);
            })();
        }
        getTickets(t) {
            var i = this;
            return p(function*() {
                return i._conversationsManager ? i._conversationsManager.getTickets(t) : (Kh.warn(Jh), null);
            })();
        }
        requestRestoreLink(t) {
            var i = this;
            return p(function*() {
                return i._conversationsManager ? i._conversationsManager.requestRestoreLink(t) : (Kh.warn(Jh), null);
            })();
        }
        restoreFromToken(t) {
            var i = this;
            return p(function*() {
                return i._conversationsManager ? i._conversationsManager.restoreFromToken(t) : (Kh.warn(Jh), null);
            })();
        }
        restoreFromUrlToken() {
            var t = this;
            return p(function*() {
                return t._conversationsManager ? t._conversationsManager.restoreFromUrlToken() : (Kh.warn(Jh), null);
            })();
        }
        getCurrentTicketId() {
            var t, i;
            return null !== (t = null == (i = this._conversationsManager) ? void 0 : i.getCurrentTicketId()) && void 0 !== t ? t : null;
        }
        getWidgetSessionId() {
            var t, i;
            return null !== (t = null == (i = this._conversationsManager) ? void 0 : i.getWidgetSessionId()) && void 0 !== t ? t : null;
        }
        yu() {
            var t;
            null == (t = this._conversationsManager) || t.setIdentity();
        }
        bu() {
            var t;
            null == (t = this._conversationsManager) || t.clearIdentity();
        }
        constructor(t){
            this.Rc = void 0, this._conversationsManager = null, this.Pc = !1, this.je = null, this.Ac = !1, this._instance = t;
        }
    }
}, cu = {
    logs: class {
        Zc(t, i, e, r) {
            var s, n = Yh(null == (s = this._instance) || null == (s = s.config) ? void 0 : s.logs, e);
            return [
                new te(this.Qc(t, i), n, this.qc, ()=>this.Jc(), (t)=>t(), void 0, r),
                n
            ];
        }
        Kc() {
            var t, i = null == (t = this._instance) || null == (t = t.config) ? void 0 : t.logs;
            if (!this.Vc || this.Yc !== i) {
                var e;
                null == (e = this.Vc) || e.reset(), this.Yc = i;
                var r = this.Zc(()=>this.fo, (t)=>{
                    this.fo = t;
                });
                this.Vc = r[0], this.Xc = r[1];
            }
            return this.Vc;
        }
        tf() {
            var t, i = null == (t = this._instance) || null == (t = t.config) ? void 0 : t.logs;
            if (!this.Gc || this.ef !== i) {
                var e;
                null == (e = this.Gc) || e.reset(), this.ef = i;
                var r = this.Zc(()=>this.jc, (t)=>{
                    this.jc = t;
                }, {
                    serviceNameDefault: "posthog-browser-logs",
                    consoleCapture: !0
                }, Xh);
                this.Gc = r[0], this.if = r[1];
            }
            return this.Gc;
        }
        setup(t) {
            var i;
            if (!this.Fs) {
                this.$s = t, null != (i = this._instance) && null != (i = i.config) && null != (i = i.logs) && i.captureConsoleLogs && (this.Dc = !0), (this.Dc || this.rf() && this.nf()) && this.sf();
                var e = !1, r = t.onRemoteConfig((t)=>{
                    var i;
                    e = t.ok && !0 === (null == (i = t.config.logs) ? void 0 : i.captureConsoleLogs), this.onRemoteConfig(t);
                });
                this.Fs ? r.dispose() : (this.Ns = r, e || this.loadIfEnabled());
            }
        }
        dispose() {
            var i, e, r, s;
            this.Fs || (this.Fs = !0, this.af(), null == (i = this.Ns) || i.dispose(), this.Ns = void 0, this.$s = void 0, this.Nc = !1, null == t || t.removeEventListener("online", this.Wc), null == (e = this.lf) || e.call(this), this.lf = void 0, null == (r = this.Vc) || r.reset(), null == (s = this.Gc) || s.reset());
        }
        onRemoteConfig(t) {
            var i, e;
            if (!this.Fs) {
                var r = t.ok ? null == (i = t.config.logs) ? void 0 : i.captureConsoleLogs : void 0;
                X(r) ? this.uf() : (null == (e = this._instance) || null == (e = e.persistence) || e.register({
                    [ar]: !!r
                }), r ? (this.Dc = !0, this.$c || this.sf(), this.loadIfEnabled()) : this.uf());
            }
        }
        reset() {
            var t, i, e, r;
            this.af(), null == (t = this.Vc) || t.clearQueue(), this.fo = [], null == (i = this.Vc) || i.reset(), null == (e = this.Gc) || e.clearQueue(), this.jc = [], null == (r = this.Gc) || r.reset(), this.vd = 0;
        }
        captureLog(t) {
            this.Fs || this.Kc().captureLog(t);
        }
        captureConsoleLog(t) {
            this.Fs || this.tf().captureLog(t);
        }
        captureBufferedConsoleLog(t, i, e) {
            this.Fs || this.tf().captureLog(t, {
                context: i,
                occurredAtMs: e
            });
        }
        nf() {
            var t;
            return !(null == (t = this._instance) || null == (t = t.persistence) || null == (t = t.props) || !t[ar]);
        }
        rf() {
            var t, i;
            return null == (t = this._instance) || null == t.ho || !t.ho() || !(null == (i = v._POSTHOG_REMOTE_CONFIG) || null == (i = i[this._instance.config.token]) || !i.config);
        }
        wu() {
            var t;
            this.af(), null == (t = this.Gc) || t.clearQueue(), this.jc = [];
        }
        uf() {
            this.Dc || this.af();
        }
        sf() {
            var t, i = this;
            if (!this.zc && null != v && v.console) {
                var e = Yh(null == (t = this._instance) || null == (t = t.config) ? void 0 : t.logs).maxBufferSize, r = function(t) {
                    var r;
                    try {
                        r = ((t)=>{
                            for(; null != (i = t) && i.__rrweb_original__;){
                                var i;
                                t = t.__rrweb_original__;
                            }
                            return t;
                        })(v.console[t]);
                    } catch (t) {
                        return 0;
                    }
                    if (!r) return 0;
                    i.Hc.push(th(v.console, t, (s)=>{
                        var n = function() {
                            for(var r = arguments.length, n = new Array(r), o = 0; r > o; o++)n[o] = arguments[o];
                            try {
                                i.hf(t, n, e);
                            } catch (t) {}
                            return s.apply(v.console, n);
                        };
                        return n.__rrweb_original__ = r, n;
                    }));
                };
                for (var s of Qh)r(s);
                this.zc = !0, this.df = setTimeout(()=>{
                    this.af();
                }, 3e4);
            }
        }
        hf(t, i, e) {
            var r;
            if (this.zc && !this.Uc && 0 !== i.length) if (null != (r = this._instance) && r.is_capturing()) {
                if (e > this.Bc.length) {
                    this.Uc = !0;
                    try {
                        this.Bc.push({
                            level: t,
                            args: i,
                            occurredAtMs: Date.now(),
                            context: this.Jc()
                        });
                    } finally{
                        this.Uc = !1;
                    }
                }
            } else this.af();
        }
        af() {
            if (this.Bc = [], this.zc) {
                for (var t of (this.zc = !1, this.df && (clearTimeout(this.df), this.df = void 0), this.Hc))t();
                this.Hc = [];
            }
        }
        vf() {
            var t = this.Bc;
            return this.af(), t;
        }
        get logger() {
            return this.cf || (this.cf = {
                trace: (t, i)=>this.captureLog({
                        body: t,
                        level: "trace",
                        attributes: i
                    }),
                debug: (t, i)=>this.captureLog({
                        body: t,
                        level: "debug",
                        attributes: i
                    }),
                info: (t, i)=>this.captureLog({
                        body: t,
                        level: "info",
                        attributes: i
                    }),
                warn: (t, i)=>this.captureLog({
                        body: t,
                        level: "warn",
                        attributes: i
                    }),
                error: (t, i)=>this.captureLog({
                        body: t,
                        level: "error",
                        attributes: i
                    }),
                fatal: (t, i)=>this.captureLog({
                        body: t,
                        level: "fatal",
                        attributes: i
                    })
            }), this.cf;
        }
        flushLogs(t) {
            t ? this.ff(t) : (this.Vc && this.Vc.flush().catch((t)=>this.pf(t)), this.Gc && this.Gc.flush().catch((t)=>this.pf(t)));
        }
        pf(t) {
            iu(t) || this.A.error("PostHog logs flush failed:", t);
        }
        loadIfEnabled() {
            if (!this.Fs && this.Dc && !this.$c && !this.Nc) {
                var t = null == v ? void 0 : v.__PosthogExtensions__;
                if (!t) return this.A.error("PostHog Extensions not found."), void this.af();
                var i = t.loadExternalDependency;
                if (!i) return this.A.error(Qr), void this.af();
                this.Nc = !0;
                try {
                    i(this._instance, "logs", (i)=>{
                        if (this.Nc = !1, !this.Fs && this.Dc) {
                            var e = t.logs;
                            if (i || null == e || !e.initializeLogs) this.A.error("Could not load logs script", i), this.af();
                            else {
                                var r, s, n = this.vf();
                                this.lf = e.initializeLogs(null !== (r = this.$s) && void 0 !== r ? r : this._instance), this.$c = !0, n.length > 0 && (null == e.replayConsoleBuffer || e.replayConsoleBuffer(null !== (s = this.$s) && void 0 !== s ? s : this._instance, n));
                            }
                        }
                    });
                } catch (t) {
                    throw this.Nc = !1, t;
                }
            }
        }
        Qc(t, i) {
            var e = this._instance;
            return {
                get isDisabled () {
                    return !1;
                },
                get optedOut () {
                    return !e.is_capturing();
                },
                getPersistedProperty: (i)=>i === S.LogsQueue ? t() : void 0,
                setPersistedProperty (t, e) {
                    var r;
                    t === S.LogsQueue && i(null !== (r = e) && void 0 !== r ? r : []);
                },
                ss: (t)=>this.ss(t),
                getLibraryId: ()=>c.LIB_NAME,
                getLibraryVersion: ()=>c.LIB_VERSION
            };
        }
        ss(t) {
            return new Promise((i)=>{
                if (ro(this.vd, 3)) i({
                    kind: "fatal",
                    error: tu(void 0, "logs endpoint is unreachable, dropping batch")
                });
                else {
                    var e = !1, r = (t)=>{
                        e || (e = !0, clearTimeout(s), i(t));
                    }, s = setTimeout(()=>{
                        this.A.warn("Logs request timed out before receiving a response"), r({
                            kind: "retry-later",
                            error: tu(void 0, "logs request timed out")
                        });
                    }, 9e4);
                    this._instance._send_request({
                        method: "POST",
                        url: this.gf(),
                        data: t,
                        compression: "best-available",
                        batchKey: "logs",
                        fireCallbackOnDrop: !0,
                        callback: (t)=>{
                            var i = t.statusCode;
                            if (this.mf(i), i >= 200 && 300 > i) r({
                                kind: "ok"
                            });
                            else if (413 === i) r({
                                kind: "too-large"
                            });
                            else if (0 !== i && 408 !== i && 429 !== i && 500 > i) r({
                                kind: "fatal",
                                error: new Error("logs request failed with status " + i)
                            });
                            else {
                                var e;
                                0 === i ? (t.error || this.A.warn("Logs request failed before receiving an HTTP response"), r({
                                    kind: "retry-later",
                                    error: tu(t.error, "logs request failed before receiving an HTTP response")
                                })) : r({
                                    kind: "retry-later",
                                    error: null !== (e = t.error) && void 0 !== e ? e : new Error("logs request failed with status " + i)
                                });
                            }
                        }
                    });
                }
            });
        }
        mf(t) {
            (0 !== t || this._instance.__loaded) && (this.vd = so(t, this.vd, 3, ()=>this.A.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.")));
        }
        ff(t) {
            this.fo.length > 0 && this.yf(t, this.fo, this.Xc, c.LIB_NAME, (t)=>{
                this.fo = t;
            }), this.jc.length > 0 && this.yf(t, this.jc, this.if, Xh, (t)=>{
                this.jc = t;
            });
        }
        yf(t, i, e, r, s) {
            if (0 !== i.length) {
                var n = i.map((t)=>t.record);
                s([]);
                var o = Zi(n, Xi(e, c.LIB_NAME, c.LIB_VERSION), r, c.LIB_VERSION);
                this._instance._send_request({
                    method: "POST",
                    url: this.gf(),
                    data: o,
                    compression: "best-available",
                    batchKey: "logs",
                    transport: t
                });
            }
        }
        gf() {
            return this._instance.requestRouter.endpointFor("api", "/i/v1/logs") + "?token=" + encodeURIComponent(this._instance.config.token);
        }
        Jc() {
            var t, i = {};
            if (i.distinctId = this._instance.get_distinct_id(), this._instance.sessionManager) {
                var e = this._instance.sessionManager.checkAndGetSessionAndWindowId(!0), r = e.windowId, s = e.sessionStartTimestamp, n = e.lastActivityTimestamp;
                i.sessionId = e.sessionId, i.windowId = r, X(s) || (i.sessionStartTimestamp = s), X(n) || (i.lastActivityTimestamp = n);
            }
            if (null != v && null != (t = v.location) && t.href && (i.currentUrl = this._instance.config.disable_capture_url_hashes ? $i(v.location.href) : v.location.href), this._instance.featureFlags) {
                var o = this._instance.featureFlags.getFlags();
                o && o.length > 0 && (i.activeFeatureFlags = o);
            }
            return i;
        }
        constructor(i){
            var e, r = this;
            this.name = "logs", this.Dc = !1, this.$c = !1, this.Nc = !1, this.A = Be("[logs]"), this.qc = _({}, this.A, {
                error () {
                    for(var t = arguments.length, i = new Array(t), e = 0; t > e; e++)i[e] = arguments[e];
                    i.some(iu) || r.A.error(...i);
                }
            }), this.fo = [], this.jc = [], this.vd = 0, this.Fs = !1, this.Bc = [], this.Hc = [], this.zc = !1, this.Uc = !1, this.Wc = ()=>{
                var t, i;
                this.Fs || (this.vd = 0, null == (t = this.Vc) || t.onReconnect(), null == (i = this.Gc) || i.onReconnect());
            }, this._instance = i, this._instance && null != (e = this._instance.config.logs) && e.captureConsoleLogs && (this.Dc = !0), t && ms(t, "online", this.Wc);
        }
    }
}, fu = {
    metrics: class {
        initialize() {}
        Kc() {
            var t, i, e = null == (t = this._instance) || null == (t = t.config) ? void 0 : t.metrics;
            return this.Vc && this.Yc === e || (null == (i = this.Vc) || i.reset(), this.Yc = e, this.Vc = new se(this.Qc(), function(t) {
                var i, e, r, s, n, o = null == t ? void 0 : t.resourceAttributes;
                return {
                    serviceName: null !== (i = null == o ? void 0 : o["service.name"]) && void 0 !== i ? i : null == t ? void 0 : t.serviceName,
                    serviceVersion: null !== (e = null == o ? void 0 : o["service.version"]) && void 0 !== e ? e : null == t ? void 0 : t.serviceVersion,
                    environment: null !== (r = null == o ? void 0 : o["deployment.environment"]) && void 0 !== r ? r : null == t ? void 0 : t.environment,
                    resourceAttributes: o,
                    beforeSend: null == t ? void 0 : t.beforeSend,
                    flushIntervalMs: null !== (s = null == t ? void 0 : t.flushIntervalMs) && void 0 !== s ? s : 1e4,
                    maxSeriesPerFlush: null !== (n = null == t ? void 0 : t.maxSeriesPerFlush) && void 0 !== n ? n : 1e3
                };
            }(e), this.A)), this.Vc;
        }
        count(t, i, e) {
            void 0 === i && (i = 1), this.Kc().count(t, i, e);
        }
        gauge(t, i, e) {
            this.Kc().gauge(t, i, e);
        }
        histogram(t, i, e) {
            this.Kc().histogram(t, i, e);
        }
        flush(t) {
            if (!this.Vc) return Promise.resolve();
            if (t) {
                var i = this.Vc.drainWindow();
                return i && this.Ss(i, t), Promise.resolve();
            }
            return this.Vc.flush().catch((t)=>this.A.error("PostHog metrics flush failed:", t));
        }
        reset() {
            var t;
            null == (t = this.Vc) || t.reset();
        }
        Qc() {
            var t = this._instance, i = this;
            return {
                get isDisabled () {
                    return !1;
                },
                get optedOut () {
                    return !t.is_capturing();
                },
                Ss: (t)=>i.Ss(t),
                getLibraryId: ()=>c.LIB_NAME,
                getLibraryVersion: ()=>c.LIB_VERSION
            };
        }
        Ss(t, i) {
            return new Promise((e)=>{
                var r = !1, s = (t)=>{
                    r || (r = !0, clearTimeout(n), e(t));
                }, n = setTimeout(()=>s({
                        kind: "retry-later",
                        error: new Error("metrics request timed out")
                    }), 9e4);
                this._instance._send_request(_({
                    method: "POST",
                    url: this.bf(),
                    data: t,
                    compression: "best-available",
                    batchKey: "metrics"
                }, i && {
                    transport: i
                }, {
                    fireCallbackOnDrop: !0,
                    callback (t) {
                        var i = t.statusCode;
                        if (i >= 200 && 300 > i) s({
                            kind: "ok"
                        });
                        else if (413 === i) s({
                            kind: "too-large"
                        });
                        else if (0 !== i && 408 !== i && 429 !== i && 500 > i) s({
                            kind: "fatal",
                            error: new Error("metrics request failed with status " + i)
                        });
                        else {
                            var e;
                            s({
                                kind: "retry-later",
                                error: null !== (e = t.error) && void 0 !== e ? e : new Error("metrics request failed with status " + i)
                            });
                        }
                    }
                }));
            });
        }
        bf() {
            return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token);
        }
        constructor(t){
            this.A = Be("[metrics]"), this._instance = t;
        }
    }
}, pu = _({}, eu, ru, su, nu, ou, au, hu, lu, uu, du, vu, cu, fu);
zl.__defaultExtensionClasses = _({}, pu);
var _u = function() {
    c.SDK_DIST_CHANNEL = "npm";
    var i = $l[Ml] = new zl;
    return function() {
        function i() {
            i.done || (i.done = !0, Dl = !1, us($l, function(t) {
                t._dom_loaded();
            }));
        }
        null != r && r.addEventListener ? "complete" === r.readyState ? i() : ms(r, "DOMContentLoaded", i, {
            capture: !1
        }) : t && Ue.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
    }(), i;
}();
;
 //# sourceMappingURL=module.js.map
}),
]);

//# sourceMappingURL=0538e_posthog-js_dist_module_7c958378.js.map