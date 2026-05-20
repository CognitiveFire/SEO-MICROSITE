module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/app/components/aeo/schema-script.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchemaScript",
    ()=>SchemaScript,
    "buildArticleSchema",
    ()=>buildArticleSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SchemaScript({ schema }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/app/components/aeo/schema-script.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function buildArticleSchema({ headline, description, url }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        ...url ? {
            url
        } : {}
    };
}
}),
"[project]/app/components/aeo/answer-block.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnswerBlock",
    ()=>AnswerBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/schema-script.tsx [app-rsc] (ecmascript)");
;
;
function AnswerBlock({ title, answer, detail, detailLabel = "Se utdypning", includeArticleSchema = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6",
        children: [
            includeArticleSchema ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaScript"], {
                schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildArticleSchema"])({
                    headline: title,
                    description: answer
                })
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/answer-block.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl leading-tight tracking-tight text-[#EAEAEA] md:text-5xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/answer-block.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-4xl text-lg leading-relaxed text-[#EAEAEA] md:text-xl",
                children: answer
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/answer-block.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            detail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "max-w-4xl border-t border-divider pt-5 text-[#B0B0B0]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "cursor-pointer list-none text-sm uppercase tracking-[0.14em] text-[#EAEAEA]/75",
                        children: detailLabel
                    }, void 0, false, {
                        fileName: "[project]/app/components/aeo/answer-block.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-4 text-base leading-relaxed md:text-lg",
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/app/components/aeo/answer-block.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/aeo/answer-block.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/aeo/answer-block.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/aeo/faq-module.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQModule",
    ()=>FAQModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/schema-script.tsx [app-rsc] (ecmascript)");
;
;
function FAQModule({ title, intro, items, includeFaqSchema = false }) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item)=>({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "faq-heading",
        className: "space-y-8",
        children: [
            includeFaqSchema ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaScript"], {
                schema: faqSchema
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/faq-module.tsx",
                lineNumber: 32,
                columnNumber: 27
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "faq-heading",
                        className: "text-3xl leading-tight tracking-tight text-[#EAEAEA] md:text-5xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/aeo/faq-module.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    intro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-4xl text-lg text-[#B0B0B0]",
                        children: intro
                    }, void 0, false, {
                        fileName: "[project]/app/components/aeo/faq-module.tsx",
                        lineNumber: 37,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/aeo/faq-module.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-divider",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "border-b border-divider py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "cursor-pointer list-none pr-6 text-lg leading-snug text-[#EAEAEA]",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/faq-module.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pt-4 max-w-4xl text-base leading-relaxed text-[#B0B0B0] md:text-lg",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/faq-module.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.question, true, {
                        fileName: "[project]/app/components/aeo/faq-module.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/faq-module.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/aeo/faq-module.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/aeo/how-to-block.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowToBlock",
    ()=>HowToBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/schema-script.tsx [app-rsc] (ecmascript)");
;
;
function HowToBlock({ title, intro, steps, includeHowToSchema = false }) {
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: title,
        ...intro ? {
            description: intro
        } : {},
        step: steps.map((step)=>({
                "@type": "HowToStep",
                name: step.title,
                text: step.detail
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "how-to-heading",
        className: "space-y-8",
        children: [
            includeHowToSchema ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaScript"], {
                schema: howToSchema
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/how-to-block.tsx",
                lineNumber: 31,
                columnNumber: 29
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "how-to-heading",
                        className: "text-3xl leading-tight tracking-tight text-[#EAEAEA] md:text-5xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/aeo/how-to-block.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    intro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-4xl text-lg text-[#B0B0B0]",
                        children: intro
                    }, void 0, false, {
                        fileName: "[project]/app/components/aeo/how-to-block.tsx",
                        lineNumber: 36,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/aeo/how-to-block.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-8 border-t border-divider pt-8",
                children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "grid gap-3 border-b border-divider pb-8 md:grid-cols-[auto_1fr] md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm uppercase tracking-[0.18em] text-[#EAEAEA]/70",
                                children: (index + 1).toString().padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/how-to-block.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl text-[#EAEAEA]",
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/aeo/how-to-block.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pt-3 max-w-4xl text-base leading-relaxed text-[#B0B0B0] md:text-lg",
                                        children: step.detail
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/aeo/how-to-block.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/aeo/how-to-block.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step.title, true, {
                        fileName: "[project]/app/components/aeo/how-to-block.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/how-to-block.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/aeo/how-to-block.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/aeo/key-takeaways.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyTakeaways",
    ()=>KeyTakeaways
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function KeyTakeaways({ title = "Nokkelpunkter", items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": title,
        className: "space-y-5 border-y border-divider py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm uppercase tracking-[0.2em] text-[#EAEAEA]/75",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/key-takeaways.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-3 text-base leading-relaxed text-[#EAEAEA] md:text-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#767676]",
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/key-takeaways.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/key-takeaways.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item, true, {
                        fileName: "[project]/app/components/aeo/key-takeaways.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/key-takeaways.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/aeo/key-takeaways.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/aeo/internal-linking-module.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalLinkingModule",
    ()=>InternalLinkingModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function InternalLinkingModule({ title = "Relaterte tema", topics }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": title,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl leading-tight tracking-tight text-[#EAEAEA] md:text-4xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/internal-linking-module.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "border-t border-divider",
                children: topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border-b border-divider py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: topic.href,
                                className: "text-lg leading-snug text-[#EAEAEA] transition-colors duration-200 ease-out hover:text-white",
                                children: topic.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/internal-linking-module.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pt-2 max-w-3xl text-sm leading-relaxed text-[#B0B0B0] md:text-base",
                                children: topic.context
                            }, void 0, false, {
                                fileName: "[project]/app/components/aeo/internal-linking-module.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${topic.href}-${topic.label}`, true, {
                        fileName: "[project]/app/components/aeo/internal-linking-module.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/aeo/internal-linking-module.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/aeo/internal-linking-module.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/aeo/calculator-block.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalculatorBlock",
    ()=>CalculatorBlock
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CalculatorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CalculatorBlock() from the server but CalculatorBlock is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/aeo/calculator-block.tsx <module evaluation>", "CalculatorBlock");
}),
"[project]/app/components/aeo/calculator-block.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalculatorBlock",
    ()=>CalculatorBlock
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CalculatorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CalculatorBlock() from the server but CalculatorBlock is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/aeo/calculator-block.tsx", "CalculatorBlock");
}),
"[project]/app/components/aeo/calculator-block.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$calculator$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/aeo/calculator-block.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$calculator$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/aeo/calculator-block.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$calculator$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/components/aeo/section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AeoSection",
    ()=>AeoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function AeoSection({ id, eyebrow, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "border-t border-divider py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1600px] px-6 md:px-12 xl:px-40",
            children: [
                eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs uppercase tracking-[0.2em] text-[#EAEAEA]/60",
                    children: eyebrow
                }, void 0, false, {
                    fileName: "[project]/app/components/aeo/section.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "pt-4 text-3xl leading-tight tracking-tight text-[#EAEAEA] md:text-5xl",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/components/aeo/section.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-10 text-base leading-relaxed text-[#B0B0B0] md:text-lg",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/aeo/section.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/aeo/section.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/aeo/section.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/aeo/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$answer$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/answer-block.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$faq$2d$module$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/faq-module.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$how$2d$to$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/how-to-block.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$key$2d$takeaways$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/key-takeaways.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$internal$2d$linking$2d$module$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/internal-linking-module.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$calculator$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/calculator-block.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/schema-script.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/app/content/aeo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aeoContent",
    ()=>aeoContent
]);
const aeoContent = {
    article: {
        headline: "AEO-komponenter for answer-first innhold",
        description: "Modulært komponentsett for svarfokusert innhold, FAQ, how-to, intern lenking og enkel kalkulator."
    },
    hero: {
        eyebrow: "AEO Component System",
        title: "Modulært innholdssystem for moderne søk"
    },
    answer: {
        title: "Hva er den viktigste AEO-endringen?",
        answer: "Svar kommer tidligere i brukerreisen, så innhold må være lett å hente ut og lett å stole på.",
        detail: "Det betyr tydelig struktur, korte direkte svar, og en naturlig vei videre til utdypning og relaterte tema.",
        takeaways: [
            "Svar først-struktur gir bedre synlighet i moderne søk",
            "FAQ og how-to moduler gjør innhold enklere å hente ut",
            "Interne lenker skal være kontekstuelle, ikke generiske",
            "Måling må inkludere kvalitet, ikke bare volum"
        ]
    },
    faq: {
        eyebrow: "FAQ",
        title: "Spørsmål og svar",
        intro: "Bruk FAQ for korte, tydelige svar på konkrete spørsmål.",
        items: [
            {
                question: "Hva er AEO?",
                answer: "AEO handler om å strukturere innhold slik at svar kan hentes direkte i moderne søk, snippets og AI-baserte resultater."
            },
            {
                question: "Hvorfor holder det ikke med bare lange artikler?",
                answer: "Lange artikler er verdifulle, men uten tydelige svarblokker, god struktur og sterke titler blir synligheten ofte svakere."
            },
            {
                question: "Hvor raskt ser man effekt?",
                answer: "En del forbedringer vises raskt i CTR og snippets, mens større synlighetsgevinst som regel bygges over flere iterasjoner."
            }
        ]
    },
    howTo: {
        eyebrow: "How-To",
        title: "Hvordan implementere AEO",
        blockTitle: "Fire steg for answer-first innhold",
        intro: "Start enkelt og iterer basert på hva som faktisk gir synlighet og riktig trafikk.",
        steps: [
            {
                title: "Kartlegg intentsignaler",
                detail: "Finn hvilke søkespørsmål som faktisk driver relevante besøk, ikke bare høyt volum."
            },
            {
                title: "Bygg svar først-struktur",
                detail: "Start hver seksjon med korte svar, og legg utdypning under for brukere som vil lese mer."
            },
            {
                title: "Publiser med tydelige metadata",
                detail: "Optimaliser titler, beskrivelser og intern lenking slik at innholdet blir enklere å velge i søkeresultatene."
            },
            {
                title: "Mål og forbedre",
                detail: "Følg CTR, synlighet per tema og kvaliteten på trafikken for å vite hva som skal justeres videre."
            }
        ]
    },
    related: {
        eyebrow: "Related Topics",
        title: "Intern lenking som styrker temaautoritet",
        topics: [
            {
                href: "/",
                label: "Hvordan strukturere en side for snippets",
                context: "Praktisk oppskrift for overskrifter, svarfelt og intern lenking."
            },
            {
                href: "/",
                label: "Tittelstrategi for høyere CTR",
                context: "Hvordan balansere tydelighet, relevans og konkurransekraft i søk."
            },
            {
                href: "/",
                label: "Måling av AEO-effekt i praksis",
                context: "Hvilke KPI-er som viser kvalitet, ikke bare volum."
            }
        ]
    },
    calculator: {
        eyebrow: "Interactive",
        title: "Enkel CTR-kalkulator",
        calculatorTitle: "Estimert gevinst fra bedre CTR",
        calculatorDescription: "Legg inn dagens tall for å se et enkelt estimat på potensielle ekstra klikk."
    }
};
}),
"[project]/app/aeo/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AeoComponentPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/aeo/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$answer$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/answer-block.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$calculator$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/calculator-block.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$faq$2d$module$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/faq-module.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$how$2d$to$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/how-to-block.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$internal$2d$linking$2d$module$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/internal-linking-module.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$key$2d$takeaways$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/key-takeaways.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/aeo/schema-script.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/content/aeo.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "AEO Framework | APRIIL",
    description: "Structured AEO framework page and implementation modules.",
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-snippet": -1,
            "max-image-preview": "none",
            "max-video-preview": -1
        }
    }
};
function AeoComponentPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-black pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaScript"], {
                schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$schema$2d$script$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildArticleSchema"])({
                    headline: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].article.headline,
                    description: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].article.description
                })
            }, void 0, false, {
                fileName: "[project]/app/aeo/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AeoSection"], {
                eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].hero.eyebrow,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].hero.title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$answer$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerBlock"], {
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].answer.title,
                            answer: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].answer.answer,
                            detail: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].answer.detail,
                            includeArticleSchema: true
                        }, void 0, false, {
                            fileName: "[project]/app/aeo/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$key$2d$takeaways$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KeyTakeaways"], {
                            items: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].answer.takeaways
                        }, void 0, false, {
                            fileName: "[project]/app/aeo/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/aeo/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/aeo/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AeoSection"], {
                eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].faq.eyebrow,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].faq.title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$faq$2d$module$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQModule"], {
                    title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].faq.title,
                    intro: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].faq.intro,
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].faq.items,
                    includeFaqSchema: true
                }, void 0, false, {
                    fileName: "[project]/app/aeo/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/aeo/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AeoSection"], {
                eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].howTo.eyebrow,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].howTo.title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$how$2d$to$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HowToBlock"], {
                    title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].howTo.blockTitle,
                    intro: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].howTo.intro,
                    steps: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].howTo.steps,
                    includeHowToSchema: true
                }, void 0, false, {
                    fileName: "[project]/app/aeo/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/aeo/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AeoSection"], {
                eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].related.eyebrow,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].related.title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$internal$2d$linking$2d$module$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InternalLinkingModule"], {
                    topics: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].related.topics
                }, void 0, false, {
                    fileName: "[project]/app/aeo/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/aeo/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AeoSection"], {
                eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].calculator.eyebrow,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].calculator.title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$aeo$2f$calculator$2d$block$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CalculatorBlock"], {
                    title: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].calculator.calculatorTitle,
                    description: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$aeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aeoContent"].calculator.calculatorDescription
                }, void 0, false, {
                    fileName: "[project]/app/aeo/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/aeo/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/aeo/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/aeo/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/aeo/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0oop_4h._.js.map