(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/space_grotesk_5e0acd78.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_grotesk_5e0acd78-module__UtH-wa__className",
  "variable": "space_grotesk_5e0acd78-module__UtH-wa__variable",
});
}),
"[next]/internal/font/google/space_grotesk_5e0acd78.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_5e0acd78$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_5e0acd78.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_5e0acd78$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_5e0acd78$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_5e0acd78$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/manrope_806c546d.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "manrope_806c546d-module__v06o4a__className",
  "variable": "manrope_806c546d-module__v06o4a__variable",
});
}),
"[next]/internal/font/google/manrope_806c546d.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_806c546d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/manrope_806c546d.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_806c546d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Manrope', 'Manrope Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_806c546d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_806c546d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/components/lead-capture-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadCaptureForm",
    ()=>LeadCaptureForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const initialState = {
    status: "idle"
};
function LeadCaptureForm({ nameLabel, emailLabel, companyLabel, focusLabel, focusOptions, intro, note, buttonLabel, successTitle, successMessage, sendAnotherLabel, submittingLabel, genericErrorMessage, invalidEmailMessage, missingFieldsMessage }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        setState({
            status: "submitting"
        });
        const response = await fetch("/api/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                company: formData.get("company"),
                focus: formData.get("focus"),
                website: formData.get("website")
            })
        });
        if (!response.ok) {
            const payload = await response.json().catch(()=>null);
            const message = payload?.errorCode === "invalid_email" ? invalidEmailMessage : payload?.errorCode === "missing_required" ? missingFieldsMessage : genericErrorMessage;
            setState({
                status: "error",
                message
            });
            return;
        }
        form.reset();
        setState({
            status: "success",
            message: successMessage
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[28px] border border-[#d8d0c3] bg-[linear-gradient(180deg,#fbf8f3_0%,#f5f0e7_100%)] p-5 shadow-[0_20px_46px_rgba(35,29,23,0.14)] md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-[64ch] text-[14px] leading-[1.75] text-[#3f3831]/80 md:text-[15px]",
                children: intro
            }, void 0, false, {
                fileName: "[project]/app/components/lead-capture-form.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            state.status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-3",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-[#1f1a16]",
                        children: successTitle
                    }, void 0, false, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] leading-relaxed text-[#3d372f]/75",
                        children: state.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "animated-link text-sm text-[#5e3a21]",
                        onClick: ()=>setState(initialState),
                        children: sendAnotherLabel
                    }, void 0, false, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/lead-capture-form.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "mt-6 grid gap-4 md:gap-5",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "website",
                        type: "text",
                        tabIndex: -1,
                        autoComplete: "off",
                        className: "hidden",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-2 text-[13px] font-medium text-[#3c362f]/78",
                        children: [
                            nameLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                type: "text",
                                required: true,
                                autoComplete: "name",
                                className: "h-12 rounded-[14px] border border-[#d9d0c3] bg-white/78 px-4 text-[16px] text-[#1e1915] outline-none transition-colors focus:border-[#ac8f78]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/lead-capture-form.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-2 text-[13px] font-medium text-[#3c362f]/78",
                        children: [
                            emailLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                type: "email",
                                required: true,
                                autoComplete: "email",
                                className: "h-12 rounded-[14px] border border-[#d9d0c3] bg-white/78 px-4 text-[16px] text-[#1e1915] outline-none transition-colors focus:border-[#ac8f78]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/lead-capture-form.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-2 text-[13px] font-medium text-[#3c362f]/78",
                        children: [
                            companyLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "company",
                                type: "text",
                                autoComplete: "organization",
                                className: "h-12 rounded-[14px] border border-[#d9d0c3] bg-white/78 px-4 text-[16px] text-[#1e1915] outline-none transition-colors focus:border-[#ac8f78]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/lead-capture-form.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-2 text-[13px] font-medium text-[#3c362f]/78",
                        children: [
                            focusLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "focus",
                                defaultValue: focusOptions[0],
                                className: "h-12 rounded-[14px] border border-[#d9d0c3] bg-white/78 px-4 text-[16px] text-[#1e1915] outline-none transition-colors focus:border-[#ac8f78]",
                                children: focusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: option,
                                        children: option
                                    }, option, false, {
                                        fileName: "[project]/app/components/lead-capture-form.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/lead-capture-form.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] leading-relaxed text-[#3f3831]/62",
                                children: note
                            }, void 0, false, {
                                fileName: "[project]/app/components/lead-capture-form.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: state.status === "submitting",
                                className: "w-full rounded-full border border-[#c2b39f] bg-[#1f1a16] px-5 py-2.5 text-base font-medium text-[#f7f3eb] transition hover:bg-[#2b241f] sm:w-auto disabled:cursor-not-allowed disabled:opacity-60",
                                children: state.status === "submitting" ? submittingLabel : buttonLabel
                            }, void 0, false, {
                                fileName: "[project]/app/components/lead-capture-form.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    state.status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7b3c31]",
                        "aria-live": "polite",
                        children: state.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/lead-capture-form.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/lead-capture-form.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/lead-capture-form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(LeadCaptureForm, "2/eSVXfk2V5ZKttKXeUPXMa6Sd8=");
_c = LeadCaptureForm;
var _c;
__turbopack_context__.k.register(_c, "LeadCaptureForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/motion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DividerReveal",
    ()=>DividerReveal,
    "Reveal",
    ()=>Reveal,
    "Stagger",
    ()=>Stagger,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const easeOut = [
    0.4,
    0,
    0.2,
    1
];
const revealVariants = {
    hidden: {
        opacity: 0,
        y: 12
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.32,
            ease: easeOut
        }
    }
};
const staggerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.02
        }
    }
};
function Reveal({ children, className, delay = 0, amount = 0.2 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        variants: revealVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount
        },
        transition: {
            duration: 0.32,
            ease: easeOut,
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/motion.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Reveal;
function Stagger({ children, className, amount = 0.2 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        variants: staggerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/motion.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c1 = Stagger;
function StaggerItem({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        variants: revealVariants,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/motion.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c2 = StaggerItem;
function DividerReveal({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.28,
            ease: easeOut
        }
    }, void 0, false, {
        fileName: "[project]/app/components/motion.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c3 = DividerReveal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "Stagger");
__turbopack_context__.k.register(_c2, "StaggerItem");
__turbopack_context__.k.register(_c3, "DividerReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/site/operational-pages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPageView",
    ()=>AboutPageView,
    "ContactPageView",
    ()=>ContactPageView,
    "OperationalHomePage",
    ()=>OperationalHomePage,
    "PaidAcquisitionServicePage",
    ()=>PaidAcquisitionServicePage,
    "ResultsPageView",
    ()=>ResultsPageView,
    "SearchVisibilityServicePage",
    ()=>SearchVisibilityServicePage,
    "SignalRoomPageView",
    ()=>SignalRoomPageView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_5e0acd78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_5e0acd78.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_806c546d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/manrope_806c546d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$lead$2d$capture$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/lead-capture-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/locale-shell.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function pick(locale, value) {
    return locale === "no" ? value.no : value.en;
}
function SectionIntro({ locale, eyebrow, title, body, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a2552d]",
                children: pick(locale, eyebrow)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-5 max-w-[16ch] text-balance font-heading text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#171717] md:text-[46px] xl:text-[52px]",
                children: pick(locale, title)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 max-w-[40rem] text-[16px] leading-[1.8] text-[#524c46] md:text-[17px]",
                children: pick(locale, body)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 37,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = SectionIntro;
function DesktopMockup({ src, alt, priority = false, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 18
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.42,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        },
        className: `relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[30px] border border-[#d9d2c7] bg-[#f2eee7] shadow-[0_28px_70px_rgba(59,48,39,0.12)] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-10 items-center gap-2 border-b border-[#ddd5c9] px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2.5 w-2.5 rounded-full bg-[#d6cfc4]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2.5 w-2.5 rounded-full bg-[#dfd9cf]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2.5 w-2.5 rounded-full bg-[#e8e2d8]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(165deg,rgba(255,255,255,0.18),rgba(255,255,255,0)_40%)]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: alt,
                        width: 1200,
                        height: 740,
                        className: "h-auto w-full",
                        priority: priority,
                        loading: priority ? "eager" : "lazy",
                        sizes: "(max-width: 1024px) 100vw, 56vw"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c1 = DesktopMockup;
function PhoneMockup({ src, alt, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 22
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.38,
            ease: [
                0.4,
                0,
                0.2,
                1
            ],
            delay: 0.06
        },
        className: `relative overflow-hidden rounded-[34px] border border-[#d3ccbf] bg-[#f3efe8] p-2 shadow-[0_22px_56px_rgba(49,40,34,0.14)] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-2.5 h-1.5 w-14 -translate-x-1/2 rounded-full bg-[#d0c7bc]"
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-[28px] border border-[#ddd6ca] bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: src,
                    alt: alt,
                    width: 430,
                    height: 820,
                    className: "h-auto w-full",
                    sizes: "(max-width: 768px) 58vw, 22vw"
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c2 = PhoneMockup;
function InsightCard({ locale, title, body, href, linkLabel }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-heading text-[22px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#171717] md:text-[24px]",
                children: pick(locale, title)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-[34ch] text-[14px] leading-[1.75] text-[#5a544d] md:text-[15px]",
                children: pick(locale, body)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            href && linkLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 text-[14px] font-semibold text-[#a2552d] transition group-hover:text-[#7f3d1a]",
                children: pick(locale, linkLabel)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
        children: href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "group block h-full rounded-[26px] border border-[#ddd6ca] bg-white/78 p-5 shadow-[0_10px_26px_rgba(54,45,37,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(54,45,37,0.08)] md:p-6",
            children: content
        }, void 0, false, {
            fileName: "[project]/app/components/site/operational-pages.tsx",
            lineNumber: 104,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-[26px] border border-[#ddd6ca] bg-white/78 p-5 shadow-[0_10px_26px_rgba(54,45,37,0.05)] md:p-6",
            children: content
        }, void 0, false, {
            fileName: "[project]/app/components/site/operational-pages.tsx",
            lineNumber: 111,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c3 = InsightCard;
function FlowStep({ locale, number, title, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
        className: "relative h-full rounded-[28px] border border-[#ddd6ca] bg-white/78 p-5 shadow-[0_10px_24px_rgba(54,45,37,0.05)] md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f2ebe2] font-heading text-[19px] font-semibold text-[#a2552d]",
                children: number
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-heading text-[20px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#171717] md:text-[22px]",
                children: pick(locale, title)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-[34ch] text-[14px] leading-[1.75] text-[#5a544d] md:text-[15px]",
                children: pick(locale, body)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c4 = FlowStep;
function MetricCard({ locale, label, value, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
        className: "h-full rounded-[24px] border border-[#ddd6ca] bg-[#f9f7f2] p-5 md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#84796d]",
                children: pick(locale, label)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 font-heading text-[30px] font-semibold tracking-[-0.04em] text-[#171717] md:text-[34px]",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-[28ch] text-[13px] leading-6 text-[#5c5650] md:text-[14px]",
                children: pick(locale, body)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c5 = MetricCard;
function PricingCard({ locale, label, price, description, points, featured = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: {
                y: -3
            },
            transition: {
                duration: 0.25,
                ease: [
                    0.4,
                    0,
                    0.2,
                    1
                ]
            },
            className: `h-full rounded-[28px] border p-7 md:p-8 ${featured ? "border-[#cdbfae] bg-[linear-gradient(180deg,#f9f5ee_0%,#f3ece2_100%)] shadow-[0_22px_50px_rgba(58,47,39,0.1)]" : "border-[#ddd5c8] bg-white/82 shadow-[0_14px_34px_rgba(56,45,37,0.07)]"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8a7e72]",
                    children: pick(locale, label)
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 font-heading text-[31px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171717] md:text-[36px]",
                    children: price
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 max-w-[34ch] text-[15px] leading-[1.8] text-[#575049]",
                    children: pick(locale, description)
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-7 space-y-3 border-t border-[#ded7cb] pt-6",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3 text-[14px] leading-[1.6] text-[#49433d]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-2 h-1.5 w-1.5 rounded-full bg-[#b88f72]"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: pick(locale, point)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, point.en, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/site/operational-pages.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c6 = PricingCard;
function ContactPanel({ locale, title, body, focusOptions, sectionId = "contact-form" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: sectionId,
        className: "bg-[#1b1816] px-6 py-20 text-white md:px-10 md:py-28 xl:px-16 xl:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ffb28e]",
                            children: pick(locale, {
                                en: "Contact",
                                no: "Kontakt"
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 max-w-[12ch] font-heading text-[38px] font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-[54px]",
                            children: pick(locale, title)
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-[34rem] text-[17px] leading-[1.85] text-white/70",
                            children: pick(locale, body)
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.06,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$lead$2d$capture$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadCaptureForm"], {
                        nameLabel: pick(locale, {
                            en: "Name",
                            no: "Navn"
                        }),
                        emailLabel: pick(locale, {
                            en: "Work email",
                            no: "E-post"
                        }),
                        companyLabel: pick(locale, {
                            en: "Company",
                            no: "Selskap"
                        }),
                        focusLabel: pick(locale, {
                            en: "Primary focus",
                            no: "Primært fokus"
                        }),
                        focusOptions: focusOptions.map((item)=>pick(locale, item)),
                        intro: pick(locale, {
                            en: "Share the current structure, where decisions feel fragmented, and what you want to clarify next.",
                            no: "Del dagens struktur, hvor beslutningene føles fragmenterte, og hva dere trenger å få tydeligere neste."
                        }),
                        note: pick(locale, {
                            en: "We usually respond within one working day.",
                            no: "Vi svarer vanligvis innen én arbeidsdag."
                        }),
                        buttonLabel: pick(locale, {
                            en: "Send enquiry",
                            no: "Send forespørsel"
                        }),
                        successTitle: pick(locale, {
                            en: "Thanks. We have it.",
                            no: "Takk. Vi har mottatt det."
                        }),
                        successMessage: pick(locale, {
                            en: "We will review the details and get back to you shortly.",
                            no: "Vi går gjennom detaljene og tar kontakt snart."
                        }),
                        sendAnotherLabel: pick(locale, {
                            en: "Send another",
                            no: "Send en til"
                        }),
                        submittingLabel: pick(locale, {
                            en: "Sending...",
                            no: "Sender..."
                        }),
                        genericErrorMessage: pick(locale, {
                            en: "Something went wrong. Please try again.",
                            no: "Noe gikk galt. Prøv igjen."
                        }),
                        invalidEmailMessage: pick(locale, {
                            en: "Please enter a valid email address.",
                            no: "Legg inn en gyldig e-postadresse."
                        }),
                        missingFieldsMessage: pick(locale, {
                            en: "Please complete the required fields.",
                            no: "Fyll ut de obligatoriske feltene."
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/site/operational-pages.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_c7 = ContactPanel;
function PageFrame({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_5e0acd78$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_806c546d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable} bg-[#f6f2eb] text-[#171717]`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 217,
        columnNumber: 10
    }, this);
}
_c8 = PageFrame;
function OperationalHomePage() {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const pricingCards = [
        {
            label: {
                en: "Search Visibility",
                no: "Search Visibility"
            },
            price: "Starting from NOK 25,000 / month",
            description: {
                en: "Technical SEO, search visibility strategy and operational optimisation designed to strengthen long-term demand capture and commercial visibility.",
                no: "Teknisk SEO, search visibility-strategi og operasjonell optimalisering designet for å styrke langsiktig etterspørselfangst og kommersiell synlighet."
            },
            points: [
                {
                    en: "Technical SEO",
                    no: "Teknisk SEO"
                },
                {
                    en: "Search intent analysis",
                    no: "Søkeintensjonsanalyse"
                },
                {
                    en: "Content structure",
                    no: "Innholdsstruktur"
                },
                {
                    en: "Internal linking",
                    no: "Intern lenking"
                },
                {
                    en: "Visibility reporting",
                    no: "Synlighetsrapportering"
                },
                {
                    en: "Apriil Clarity operational visibility",
                    no: "Apriil Clarity operasjonell synlighet"
                }
            ]
        },
        {
            label: {
                en: "Paid Acquisition",
                no: "Paid Acquisition"
            },
            price: "Starting from NOK 25,000 / month",
            description: {
                en: "Search advertising and acquisition strategy focused on conversion quality, commercial intent and long-term acquisition efficiency.",
                no: "Søkeannonsering og anskaffelsesstrategi med fokus på konverteringskvalitet, kommersiell intensjon og langsiktig anskaffelseseffektivitet."
            },
            points: [
                {
                    en: "Google Ads management",
                    no: "Google Ads-administrasjon"
                },
                {
                    en: "Bid strategy optimisation",
                    no: "Optimalisering av budstrategi"
                },
                {
                    en: "Search intent analysis",
                    no: "Søkeintensjonsanalyse"
                },
                {
                    en: "Landing page alignment",
                    no: "Landingsside-samspill"
                },
                {
                    en: "Conversion quality analysis",
                    no: "Analyse av konverteringskvalitet"
                },
                {
                    en: "Apriil Clarity reporting",
                    no: "Apriil Clarity-rapportering"
                }
            ]
        },
        {
            label: {
                en: "Integrated Search Performance",
                no: "Integrert Search Performance"
            },
            price: "Starting from NOK 60,000 / month",
            description: {
                en: "A connected operational framework combining search visibility, paid acquisition and strategic reporting into one prioritised growth system.",
                no: "Et sammenkoblet operasjonelt rammeverk som kombinerer search visibility, paid acquisition og strategisk rapportering i ett prioritert vekstsystem."
            },
            points: [
                {
                    en: "Search Visibility",
                    no: "Search Visibility"
                },
                {
                    en: "Paid Acquisition",
                    no: "Paid Acquisition"
                },
                {
                    en: "Cross-channel prioritisation",
                    no: "Tverrkanal prioritering"
                },
                {
                    en: "Operational intelligence",
                    no: "Operasjonell intelligens"
                },
                {
                    en: "Executive reporting",
                    no: "Rapportering til ledelsen"
                },
                {
                    en: "Implementation tracking",
                    no: "Implementeringssporing"
                },
                {
                    en: "Apriil Clarity integration",
                    no: "Apriil Clarity-integrasjon"
                }
            ],
            featured: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-18 pt-14 md:px-10 md:pb-24 md:pt-20 xl:px-16 xl:pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a2552d]",
                                    children: pick(locale, {
                                        en: "Operational search consultancy",
                                        no: "Operasjonell søkekonsulent"
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-5 max-w-[12ch] font-heading text-[42px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#171717] md:text-[64px] xl:text-[74px]",
                                    children: pick(locale, {
                                        en: "Operational clarity across search visibility and acquisition.",
                                        no: "Operasjonell klarhet på tvers av søkesynlighet og anskaffelse."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-7 max-w-[40rem] text-[18px] leading-[1.85] text-[#4f4943] md:text-[20px]",
                                    children: pick(locale, {
                                        en: "Apriil combines search visibility, paid acquisition and operational reporting into a unified strategic framework designed to support clearer priorities and stronger long-term growth.",
                                        no: "Apriil kombinerer søkesynlighet, betalt anskaffelse og operasjonell rapportering i ett samlet strategisk rammeverk, designet for tydeligere prioriteringer og sterkere langsiktig vekst."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signal-room",
                                            className: "apriil-cta w-fit",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "apriil-cta__label",
                                                    children: pick(locale, {
                                                        en: "Explore Apriil Clarity",
                                                        no: "Utforsk Apriil Clarity"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "apriil-cta__icon",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 20 20",
                                                        className: "h-4 w-4",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 10h12M10 4l6 6-6 6",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.8",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#services",
                                            className: "rounded-full border border-[#cabfb0] px-5 py-3 text-[15px] font-semibold text-[#171717] transition hover:border-[#a2552d] hover:text-[#a2552d]",
                                            children: pick(locale, {
                                                en: "View services",
                                                no: "Se tjenester"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.45,
                                ease: [
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                ]
                            },
                            className: "relative mx-auto w-full max-w-[620px] lg:justify-self-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute -left-8 top-8 h-44 w-44 rounded-full bg-[#ead8c4] blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopMockup, {
                                    src: "/images/analytics-premium/dashboard-metrics.png",
                                    alt: "Apriil Clarity overview",
                                    priority: true,
                                    className: "max-w-[590px] lg:max-w-[620px]"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-mt-10 ml-auto hidden w-32 md:block lg:w-36",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {
                                        src: "/images/analytics-premium/report-confidence-mobile.jpg",
                                        alt: "Apriil Clarity mobile view",
                                        className: "rotate-[-5deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#fbf8f3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "The problem",
                                no: "Problemet"
                            },
                            title: {
                                en: "Fragmented reporting creates fragmented decisions.",
                                no: "Fragmentert rapportering skaper fragmenterte beslutninger."
                            },
                            body: {
                                en: "When SEO, paid acquisition and analytics are described as separate systems, strategy weakens. Teams optimise channels while leadership still lacks a connected operating picture.",
                                no: "Når SEO, betalt anskaffelse og analyse beskrives som separate systemer, svekkes strategien. Team optimaliserer kanaler, mens ledelsen fortsatt mangler et samlet operativt bilde."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 md:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Reporting duplicates the story",
                                        no: "Rapportering dupliserer historien"
                                    },
                                    body: {
                                        en: "Separate dashboards repeat the same metrics with different language, but without a shared decision framework.",
                                        no: "Separate dashbord gjentar de samme målingene med ulikt språk, men uten et felles beslutningsrammeverk."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Channel decisions drift apart",
                                        no: "Kanalbeslutninger driver fra hverandre"
                                    },
                                    body: {
                                        en: "SEO and paid teams act on isolated signals, even when they influence the same demand and landing page outcomes.",
                                        no: "SEO- og paid-team handler på isolerte signaler, selv når de påvirker den samme etterspørselen og de samme landingssideutfallene."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Leadership gets noise, not clarity",
                                        no: "Ledelsen får støy, ikke klarhet"
                                    },
                                    body: {
                                        en: "More dashboards rarely improve decisions. A stronger operating model does.",
                                        no: "Flere dashbord forbedrer sjelden beslutninger. En sterkere arbeidsmodell gjør det."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "The Apriil model",
                                no: "Apriil-modellen"
                            },
                            title: {
                                en: "Search Visibility and Paid Acquisition, connected by Apriil Clarity.",
                                no: "Search Visibility og Paid Acquisition, koblet sammen av Apriil Clarity."
                            },
                            body: {
                                en: "Execution disciplines still matter. But they are managed as connected systems, with Apriil Clarity acting as the operational intelligence layer that sets priorities and frames decisions.",
                                no: "Utførelsesdisiplinene betyr fortsatt noe. Men de styres som sammenkoblede systemer, der Apriil Clarity fungerer som intelligenslaget som setter prioriteringer og rammer inn beslutninger."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1.08fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Search Visibility",
                                        no: "Search Visibility"
                                    },
                                    body: {
                                        en: "Organic demand capture, technical visibility, information architecture and search intelligence.",
                                        no: "Organisk etterspørselfangst, teknisk synlighet, informasjonsarkitektur og søkeintelligens."
                                    },
                                    href: "/services/search-visibility",
                                    linkLabel: {
                                        en: "View service",
                                        no: "Se tjeneste"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Paid Acquisition",
                                        no: "Paid Acquisition"
                                    },
                                    body: {
                                        en: "Acquisition efficiency, commercial intent quality, landing page alignment and operational optimisation.",
                                        no: "Anskaffelseseffektivitet, kvalitet på kommersiell intensjon, landingsside-samspill og operasjonell optimalisering."
                                    },
                                    href: "/services/paid-acquisition",
                                    linkLabel: {
                                        en: "View service",
                                        no: "Se tjeneste"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Apriil Clarity",
                                        no: "Apriil Clarity"
                                    },
                                    body: {
                                        en: "Operational intelligence across channels: signal collection, prioritisation logic, reporting methodology and implementation visibility.",
                                        no: "Operasjonell intelligens på tvers av kanaler: signalinnsamling, prioriteringslogikk, rapporteringsmetodikk og implementeringssynlighet."
                                    },
                                    href: "/signal-room",
                                    linkLabel: {
                                        en: "Explore framework",
                                        no: "Utforsk rammeverket"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#f1ebe3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Operational intelligence flow",
                                no: "Operasjonell intelligensflyt"
                            },
                            title: {
                                en: "Signals into intelligence. Intelligence into prioritised decisions.",
                                no: "Signaler til intelligens. Intelligens til prioriterte beslutninger."
                            },
                            body: {
                                en: "Apriil Clarity is the connective system. It collects fragmented inputs, applies prioritisation logic, and turns them into clearer operating choices for teams and leadership.",
                                no: "Apriil Clarity er koblingssystemet. Det samler fragmenterte input, bruker prioriteringslogikk og gjør dem om til tydeligere operative valg for team og ledelse."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "01",
                                    title: {
                                        en: "Signals",
                                        no: "Signaler"
                                    },
                                    body: {
                                        en: "Search demand, acquisition performance, landing page behaviour, CRM outcomes and reporting health are viewed together.",
                                        no: "Søkeetterspørsel, anskaffelsesytelse, landingssideatferd, CRM-utfall og rapporteringshelse ses samlet."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "02",
                                    title: {
                                        en: "Intelligence layer",
                                        no: "Intelligenslag"
                                    },
                                    body: {
                                        en: "Impact, complexity, urgency, confidence and cross-channel influence are weighted before anything is prioritised.",
                                        no: "Påvirkning, kompleksitet, hast, sikkerhet og tverrkanal-påvirkning vektes før noe prioriteres."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "03",
                                    title: {
                                        en: "Prioritised decisions",
                                        no: "Prioriterte beslutninger"
                                    },
                                    body: {
                                        en: "The output is not another dashboard. It is a clearer sequence of actions, owners and commercial implications.",
                                        no: "Outputen er ikke enda et dashbord. Den er en tydeligere sekvens av tiltak, eierskap og kommersielle implikasjoner."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Services overview",
                                no: "Tjenesteoversikt"
                            },
                            title: {
                                en: "Execution disciplines with one connected operating model.",
                                no: "Utførelsesdisipliner med én samlet arbeidsmodell."
                            },
                            body: {
                                en: "Apriil no longer sells siloed channels. The service structure reflects how search performance is actually managed: visibility, acquisition, and operational intelligence working together.",
                                no: "Apriil selger ikke lenger siloerte kanaler. Tjenestestrukturen speiler hvordan søkeytelse faktisk styres: synlighet, anskaffelse og operasjonell intelligens som jobber sammen."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Search Visibility",
                                        no: "Search Visibility"
                                    },
                                    body: {
                                        en: "Broader than traditional SEO. Technical visibility, organic demand capture, intent mapping and AI-search readiness.",
                                        no: "Bredere enn tradisjonell SEO. Teknisk synlighet, organisk etterspørselfangst, intensjonskartlegging og AI-søk-beredskap."
                                    },
                                    href: "/services/search-visibility",
                                    linkLabel: {
                                        en: "Explore Search Visibility",
                                        no: "Utforsk Search Visibility"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Paid Acquisition",
                                        no: "Paid Acquisition"
                                    },
                                    body: {
                                        en: "Commercial efficiency across paid search, acquisition structure, landing page alignment and budget allocation.",
                                        no: "Kommersiell effektivitet på tvers av betalt søk, anskaffelsesstruktur, landingsside-samspill og budsjettallokering."
                                    },
                                    href: "/services/paid-acquisition",
                                    linkLabel: {
                                        en: "Explore Paid Acquisition",
                                        no: "Utforsk Paid Acquisition"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Apriil Clarity",
                                        no: "Apriil Clarity"
                                    },
                                    body: {
                                        en: "The operational reporting and prioritisation layer connecting both services into one decision framework.",
                                        no: "Rapporterings- og prioriteringslaget som kobler begge tjenestene inn i ett beslutningsrammeverk."
                                    },
                                    href: "/signal-room",
                                    linkLabel: {
                                        en: "Explore Apriil Clarity",
                                        no: "Utforsk Apriil Clarity"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "pricing",
                className: "relative overflow-hidden border-y border-[#ddd4c8] bg-[linear-gradient(180deg,#f8f4ed_0%,#f3ede5_100%)] px-6 py-24 md:px-10 md:py-32 xl:px-16 xl:py-36",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -left-28 top-24 h-64 w-64 rounded-full bg-[#eadfce] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -right-24 bottom-16 h-56 w-56 rounded-full bg-[#e5d8c7] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-[1440px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                                locale: locale,
                                eyebrow: {
                                    en: "Strategic engagement models",
                                    no: "Strategiske engasjementsmodeller"
                                },
                                title: {
                                    en: "Built around operational clarity and long-term performance.",
                                    no: "Bygget rundt operasjonell klarhet og langsiktig performance."
                                },
                                body: {
                                    en: "Our engagements combine strategic visibility, operational prioritisation and specialist execution across search visibility and paid acquisition.",
                                    no: "Våre engasjementer kombinerer strategisk synlighet, operasjonell prioritering og spesialisert gjennomføring på tvers av search visibility og paid acquisition."
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                                className: "mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_1.08fr]",
                                children: pricingCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                        locale: locale,
                                        label: card.label,
                                        price: card.price,
                                        description: card.description,
                                        points: card.points,
                                        featured: card.featured
                                    }, card.label.en, false, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                className: "mt-16 rounded-[30px] border border-[#d7cec2] bg-white/72 px-7 py-10 shadow-[0_18px_44px_rgba(58,47,39,0.08)] md:px-10 md:py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "max-w-[26ch] font-heading text-[29px] font-semibold leading-[1.16] tracking-[-0.03em] text-[#171717] md:text-[38px]",
                                        children: pick(locale, {
                                            en: "Every engagement is structured around business objectives, operational complexity and long-term growth priorities.",
                                            no: "Hvert engasjement struktureres rundt forretningsmål, operasjonell kompleksitet og langsiktige vekstprioriteringer."
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-[62ch] text-[16px] leading-[1.85] text-[#585149] md:text-[17px]",
                                        children: pick(locale, {
                                            en: "Scope, reporting structure and operational involvement are tailored based on organisational needs, acquisition complexity and strategic goals.",
                                            no: "Omfang, rapporteringsstruktur og operasjonell involvering tilpasses ut fra organisatoriske behov, anskaffelseskompleksitet og strategiske mål."
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#contact",
                                        className: "apriil-cta mt-8 w-fit",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "apriil-cta__label",
                                                children: pick(locale, {
                                                    en: "Book a strategy conversation",
                                                    no: "Book a strategy conversation"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 426,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "apriil-cta__icon",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 20 20",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 10h12M10 4l6 6-6 6",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.8",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "results",
                className: "border-y border-[#ddd6ca] bg-[#fbf8f3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Results",
                                no: "Resultater"
                            },
                            title: {
                                en: "Strategic work should change the operating picture.",
                                no: "Strategisk arbeid skal endre det operative bildet."
                            },
                            body: {
                                en: "The strongest outcomes are rarely channel-isolated. They come from clearer structure, stronger intent alignment and better operational prioritisation across search and acquisition.",
                                no: "De sterkeste resultatene er sjelden kanal-isolerte. De kommer av tydeligere struktur, sterkere intensjonssamspill og bedre operasjonell prioritering på tvers av søk og anskaffelse."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Visibility architecture in practice",
                                        no: "Synlighetsarkitektur i praksis"
                                    },
                                    body: {
                                        en: "How content structure, search intent and internal pathways were aligned into one clearer operational visibility system.",
                                        no: "Hvordan innholdsstruktur, søkeintensjon og interne stier ble samkjørt til ett tydeligere operativt synlighetssystem."
                                    },
                                    href: "/case-studies/melk",
                                    linkLabel: {
                                        en: "View case study",
                                        no: "Se case"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Demand capture through structure",
                                        no: "Etterspørselfangst gjennom struktur"
                                    },
                                    body: {
                                        en: "How guidance content and information architecture were turned into stronger discoverability and clearer commercial pathways.",
                                        no: "Hvordan veiledningsinnhold og informasjonsarkitektur ble gjort om til sterkere synlighet og tydeligere kommersielle stier."
                                    },
                                    href: "/case-studies/princess",
                                    linkLabel: {
                                        en: "View case study",
                                        no: "Se case"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "See the broader results view",
                                        no: "Se den bredere resultatsiden"
                                    },
                                    body: {
                                        en: "A cross-section of search visibility, acquisition efficiency and operational intelligence outcomes.",
                                        no: "Et tverrsnitt av resultater innen søkesynlighet, anskaffelseseffektivitet og operasjonell intelligens."
                                    },
                                    href: "/results",
                                    linkLabel: {
                                        en: "View results",
                                        no: "Se resultater"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 438,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "About Apriil",
                                no: "Om Apriil"
                            },
                            title: {
                                en: "A strategic search and performance consultancy, not a channel factory.",
                                no: "Et strategisk søk- og performancekonsulentskap, ikke en kanalfabrikk."
                            },
                            body: {
                                en: "Apriil combines search visibility, paid acquisition and operational intelligence into one connected decision framework designed for stronger long-term growth decisions.",
                                no: "Apriil kombinerer search visibility, paid acquisition og operasjonell intelligens i ett sammenkoblet beslutningsrammeverk, designet for sterkere langsiktige vekstbeslutninger."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "grid gap-5 md:grid-cols-3 lg:grid-cols-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Strategic",
                                        no: "Strategisk"
                                    },
                                    body: {
                                        en: "We start with operating clarity, hierarchy and commercial consequence before tactics.",
                                        no: "Vi starter med operasjonell klarhet, hierarki og kommersiell konsekvens før taktikk."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Connected",
                                        no: "Sammenkoblet"
                                    },
                                    body: {
                                        en: "Search visibility and acquisition are treated as interdependent systems, not isolated channel teams.",
                                        no: "Search visibility og acquisition behandles som gjensidig avhengige systemer, ikke isolerte kanalteam."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Operational",
                                        no: "Operasjonell"
                                    },
                                    body: {
                                        en: "Apriil Clarity links analysis, prioritisation, implementation tracking and executive reporting.",
                                        no: "Apriil Clarity kobler analyse, prioritering, implementeringssporing og rapportering til ledelsen."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPanel, {
                sectionId: "contact",
                locale: locale,
                title: {
                    en: "Tell us where the current model feels fragmented.",
                    no: "Fortell oss hvor dagens modell føles fragmentert."
                },
                body: {
                    en: "We can review service structure, operational reporting, prioritisation and the relationship between search visibility, acquisition and Apriil Clarity.",
                    no: "Vi kan gå gjennom tjenestestruktur, operasjonell rapportering, prioritering og forholdet mellom search visibility, acquisition og Apriil Clarity."
                },
                focusOptions: [
                    {
                        en: "Search Visibility",
                        no: "Search Visibility"
                    },
                    {
                        en: "Paid Acquisition",
                        no: "Paid Acquisition"
                    },
                    {
                        en: "Apriil Clarity",
                        no: "Apriil Clarity"
                    },
                    {
                        en: "Website restructuring",
                        no: "Nettsted-restrukturering"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s(OperationalHomePage, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c9 = OperationalHomePage;
function SearchVisibilityServicePage() {
    _s1();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const capabilities = [
        {
            title: {
                en: "Technical SEO",
                no: "Teknisk SEO"
            },
            body: {
                en: "Crawl optimisation, indexation control, template architecture and rendering visibility built around commercial pages.",
                no: "Crawl-optimalisering, indekseringskontroll, malarkitektur og gjengivelsessynlighet bygget rundt kommersielle sider."
            }
        },
        {
            title: {
                en: "Search intent mapping",
                no: "Søkeintensjonskartlegging"
            },
            body: {
                en: "Demand is mapped by commercial relevance, not only keyword volume, so the structure reflects how prospects actually decide.",
                no: "Etterspørselen kartlegges etter kommersiell relevans, ikke bare søkevolum, slik at strukturen speiler hvordan prospekter faktisk tar beslutninger."
            }
        },
        {
            title: {
                en: "Content structure",
                no: "Innholdsstruktur"
            },
            body: {
                en: "Editorial systems, page relationships and answer architecture are designed to strengthen discoverability across classic and AI-led search surfaces.",
                no: "Redaksjonelle systemer, siderelasjoner og svararkitektur designes for å styrke synlighet på tvers av klassiske og AI-drevne søkeflater."
            }
        },
        {
            title: {
                en: "Internal linking",
                no: "Intern lenking"
            },
            body: {
                en: "Internal pathways are treated as commercial infrastructure connecting category, service, guidance and conversion pages into one system.",
                no: "Interne stier behandles som kommersiell infrastruktur som kobler kategori-, tjeneste-, veilednings- og konverteringssider inn i ett system."
            }
        },
        {
            title: {
                en: "Indexation health",
                no: "Indekseringshelse"
            },
            body: {
                en: "Weak, duplicate or conflicting pages are identified before they dilute authority, crawl efficiency or reporting confidence.",
                no: "Svake, dupliserte eller motstridende sider identifiseres før de svekker autoritet, crawl-effektivitet eller rapporteringssikkerhet."
            }
        },
        {
            title: {
                en: "Search visibility reporting",
                no: "Rapportering for søkesynlighet"
            },
            body: {
                en: "Reporting focuses on commercial visibility, demand capture and operational risk, not isolated ranking snapshots.",
                no: "Rapporteringen fokuserer på kommersiell synlighet, etterspørselfangst og operasjonell risiko, ikke isolerte rangeringssnapshots."
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-18 pt-14 md:px-10 md:pb-24 md:pt-20 xl:px-16 xl:pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a2552d]",
                                    children: "Search Visibility"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-5 max-w-[12ch] font-heading text-[42px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#171717] md:text-[68px] xl:text-[82px]",
                                    children: pick(locale, {
                                        en: "Improving visibility where commercial intent begins.",
                                        no: "Forbedrer synlighet der kommersiell intensjon begynner."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-7 max-w-[38rem] text-[18px] leading-[1.85] text-[#4f4943] md:text-[20px]",
                                    children: pick(locale, {
                                        en: "Technical SEO, content structure and search intelligence designed to strengthen long-term demand capture.",
                                        no: "Teknisk SEO, innholdsstruktur og søkeintelligens designet for å styrke langsiktig etterspørselfangst."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex flex-wrap gap-3 text-[13px] text-[#5c544c]",
                                    children: [
                                        {
                                            en: "Organic demand capture",
                                            no: "Organisk etterspørselfangst"
                                        },
                                        {
                                            en: "Commercial visibility",
                                            no: "Kommersiell synlighet"
                                        },
                                        {
                                            en: "Information architecture",
                                            no: "Informasjonsarkitektur"
                                        },
                                        {
                                            en: "AI search readiness",
                                            no: "AI-søk-beredskap"
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-[#d6ccbf] bg-white/78 px-4 py-2",
                                            children: pick(locale, item)
                                        }, item.en, false, {
                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0.06,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[34px] border border-[#ddd6ca] bg-[linear-gradient(180deg,#f7f3ec_0%,#ece5dc_100%)] p-8 shadow-[0_22px_56px_rgba(52,43,35,0.08)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                                locale: locale,
                                                label: {
                                                    en: "Intent coverage",
                                                    no: "Intensjonsdekning"
                                                },
                                                value: "84",
                                                body: {
                                                    en: "Mapped to commercial and informational demand, not just topics in isolation.",
                                                    no: "Kartlagt etter kommersiell og informativ etterspørsel, ikke bare temaer isolert."
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 527,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                                locale: locale,
                                                label: {
                                                    en: "Indexation health",
                                                    no: "Indekseringshelse"
                                                },
                                                value: "92%",
                                                body: {
                                                    en: "Built to reduce crawl waste, duplication and ambiguous page ownership.",
                                                    no: "Bygget for å redusere crawl-sløsing, duplisering og uklart sideeierskap."
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 528,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 rounded-[24px] border border-[#ddd6ca] bg-white/78 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#83796d]",
                                                children: pick(locale, {
                                                    en: "Search visibility principle",
                                                    no: "Prinsipp for søkesynlighet"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-[16px] leading-8 text-[#514c46]",
                                                children: pick(locale, {
                                                    en: "Search visibility is treated as a commercial structure problem: demand, architecture, content logic and reporting confidence have to support the same outcome.",
                                                    no: "Search visibility behandles som et kommersielt strukturproblem: etterspørsel, arkitektur, innholdslogikk og rapporteringssikkerhet må støtte samme utfall."
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 525,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#fbf8f3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Search visibility system",
                                no: "Search visibility-system"
                            },
                            title: {
                                en: "Broader than traditional SEO. More aligned with how search works now.",
                                no: "Bredere enn tradisjonell SEO. Mer tilpasset hvordan søk fungerer nå."
                            },
                            body: {
                                en: "The work spans technical visibility, intent structure, commercial page architecture and reporting logic. It is built to strengthen how brands are found, interpreted and acted on.",
                                no: "Arbeidet spenner over teknisk synlighet, intensjonsstruktur, kommersiell sidearkitektur og rapporteringslogikk. Det bygges for å styrke hvordan merkevarer blir funnet, forstått og brukt."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
                            children: capabilities.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: item.title,
                                    body: item.body
                                }, item.title.en, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 544,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 542,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Apriil Clarity integration",
                                no: "Apriil Clarity-integrasjon"
                            },
                            title: {
                                en: "Search Visibility decisions do not end in rankings.",
                                no: "Search Visibility-beslutninger slutter ikke i rangeringer."
                            },
                            body: {
                                en: "Apriil Clarity translates search visibility findings into operational priorities. Technical issues, intent gaps and structural blockers are scored by impact, complexity, urgency and confidence before teams move.",
                                no: "Apriil Clarity oversetter funn fra Search Visibility til operasjonelle prioriteringer. Tekniske problemer, intensjonsgap og strukturelle blokkeringer scores etter påvirkning, kompleksitet, hast og sikkerhet før team beveger seg."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 554,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "grid gap-5 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "01",
                                    title: {
                                        en: "Surface demand gaps",
                                        no: "Avdekk etterspørselsgap"
                                    },
                                    body: {
                                        en: "Where commercial demand exists but visibility structure underperforms.",
                                        no: "Der kommersiell etterspørsel finnes, men synlighetsstrukturen underpresterer."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "02",
                                    title: {
                                        en: "Score operational risk",
                                        no: "Score operasjonell risiko"
                                    },
                                    body: {
                                        en: "Which technical and structural issues create the greatest drag on commercial visibility.",
                                        no: "Hvilke tekniske og strukturelle problemer som skaper størst drag på kommersiell synlighet."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 557,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "03",
                                    title: {
                                        en: "Prioritise implementation",
                                        no: "Prioriter implementering"
                                    },
                                    body: {
                                        en: "Recommendations are sequenced into actions that leadership and teams can actually use.",
                                        no: "Anbefalingene sekvenseres til tiltak som ledelse og team faktisk kan bruke."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Connect into Apriil Clarity",
                                        no: "Koble inn i Apriil Clarity"
                                    },
                                    body: {
                                        en: "Search Visibility is one execution discipline. Apriil Clarity is the intelligence layer connecting it to acquisition, reporting and implementation tracking.",
                                        no: "Search Visibility er én utførelsesdisiplin. Apriil Clarity er intelligenslaget som kobler den til anskaffelse, rapportering og implementeringssporing."
                                    },
                                    href: "/signal-room",
                                    linkLabel: {
                                        en: "Explore Apriil Clarity",
                                        no: "Utforsk Apriil Clarity"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 553,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPanel, {
                locale: locale,
                title: {
                    en: "Clarify where visibility should improve first.",
                    no: "Avklar hvor synligheten bør forbedres først."
                },
                body: {
                    en: "Useful when technical SEO, information architecture and search intent decisions need to support the same commercial outcome.",
                    no: "Nyttig når teknisk SEO, informasjonsarkitektur og søkeintensjonsbeslutninger må støtte samme kommersielle utfall."
                },
                focusOptions: [
                    {
                        en: "Search Visibility",
                        no: "Search Visibility"
                    },
                    {
                        en: "Apriil Clarity",
                        no: "Apriil Clarity"
                    },
                    {
                        en: "Cross-channel review",
                        no: "Tverrkanal gjennomgang"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 564,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
_s1(SearchVisibilityServicePage, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c10 = SearchVisibilityServicePage;
function PaidAcquisitionServicePage() {
    _s2();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const capabilities = [
        {
            title: {
                en: "Search advertising",
                no: "Søkeannonsering"
            },
            body: {
                en: "Paid search structure built around commercial intent, acquisition efficiency and landing page readiness.",
                no: "Betalt søk-struktur bygget rundt kommersiell intensjon, anskaffelseseffektivitet og landingssideberedskap."
            }
        },
        {
            title: {
                en: "Commercial intent analysis",
                no: "Analyse av kommersiell intensjon"
            },
            body: {
                en: "Traffic quality is evaluated by buying relevance and downstream value, not just front-end conversion counts.",
                no: "Trafikkvalitet evalueres etter kjøpsrelevans og nedstrømsverdi, ikke bare front-end konverteringsantall."
            }
        },
        {
            title: {
                en: "Bid strategy evaluation",
                no: "Vurdering av budstrategi"
            },
            body: {
                en: "Automation is reviewed against business reality. Bid logic is only useful when measurement confidence and lead quality support it.",
                no: "Automatisering vurderes opp mot forretningsrealiteten. Budlogikk er bare nyttig når målesikkerhet og leadkvalitet støtter den."
            }
        },
        {
            title: {
                en: "Landing page alignment",
                no: "Landingsside-samspill"
            },
            body: {
                en: "Acquisition performance is shaped by intent-message-page fit. We optimise the full path, not only the auction.",
                no: "Anskaffelsesytelse formes av samspillet mellom intensjon, budskap og side. Vi optimaliserer hele stien, ikke bare auksjonen."
            }
        },
        {
            title: {
                en: "Conversion quality",
                no: "Konverteringskvalitet"
            },
            body: {
                en: "Leads and actions are assessed by commercial usefulness, not by platform volume alone.",
                no: "Leads og handlinger vurderes etter kommersiell nytte, ikke bare etter plattformvolum."
            }
        },
        {
            title: {
                en: "Budget efficiency",
                no: "Budsjetteffektivitet"
            },
            body: {
                en: "Spend is allocated around marginal business impact and cross-channel influence, not habit or channel politics.",
                no: "Spend allokeres rundt marginal forretningseffekt og tverrkanal-påvirkning, ikke vane eller kanalpolitikk."
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-18 pt-14 md:px-10 md:pb-24 md:pt-20 xl:px-16 xl:pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a2552d]",
                                    children: "Paid Acquisition"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-5 max-w-[12ch] font-heading text-[42px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#171717] md:text-[68px] xl:text-[82px]",
                                    children: pick(locale, {
                                        en: "Paid acquisition focused on commercial efficiency.",
                                        no: "Paid acquisition med fokus på kommersiell effektivitet."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-7 max-w-[38rem] text-[18px] leading-[1.85] text-[#4f4943] md:text-[20px]",
                                    children: pick(locale, {
                                        en: "Search advertising and acquisition strategy designed to improve lead quality, conversion efficiency and long-term performance.",
                                        no: "Søkeannonsering og anskaffelsesstrategi designet for å forbedre leadkvalitet, konverteringseffektivitet og langsiktig performance."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex flex-wrap gap-3 text-[13px] text-[#5c544c]",
                                    children: [
                                        {
                                            en: "Acquisition efficiency",
                                            no: "Anskaffelseseffektivitet"
                                        },
                                        {
                                            en: "Intent quality",
                                            no: "Intensjonskvalitet"
                                        },
                                        {
                                            en: "Landing page alignment",
                                            no: "Landingsside-samspill"
                                        },
                                        {
                                            en: "Budget discipline",
                                            no: "Budsjettdisiplin"
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-[#d6ccbf] bg-white/78 px-4 py-2",
                                            children: pick(locale, item)
                                        }, item.en, false, {
                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0.06,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[34px] border border-[#ddd6ca] bg-[linear-gradient(180deg,#f7f3ec_0%,#ece5dc_100%)] p-8 shadow-[0_22px_56px_rgba(52,43,35,0.08)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                                locale: locale,
                                                label: {
                                                    en: "Lead quality",
                                                    no: "Leadkvalitet"
                                                },
                                                value: "79",
                                                body: {
                                                    en: "Measured by downstream value, not just front-end form volume.",
                                                    no: "Målt etter nedstrømsverdi, ikke bare front-end skjemavolum."
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                                locale: locale,
                                                label: {
                                                    en: "Budget efficiency",
                                                    no: "Budsjetteffektivitet"
                                                },
                                                value: "4.9x",
                                                body: {
                                                    en: "Efficiency improves when intent quality, page fit and attribution confidence align.",
                                                    no: "Effektiviteten forbedres når intensjonskvalitet, sidefit og attribusjonssikkerhet er samkjørt."
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 604,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 rounded-[24px] border border-[#ddd6ca] bg-white/78 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#83796d]",
                                                children: pick(locale, {
                                                    en: "Paid acquisition principle",
                                                    no: "Prinsipp for paid acquisition"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-[16px] leading-8 text-[#514c46]",
                                                children: pick(locale, {
                                                    en: "Paid acquisition is managed as an efficiency system. Search intent, landing pages, conversion quality and budget allocation have to reinforce the same commercial outcome.",
                                                    no: "Paid acquisition styres som et effektivitetssystem. Søkeintensjon, landingssider, konverteringskvalitet og budsjettallokering må forsterke samme kommersielle utfall."
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 584,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#fbf8f3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Acquisition operating model",
                                no: "Anskaffelsesmodell"
                            },
                            title: {
                                en: "Not generic PPC. A broader paid acquisition discipline.",
                                no: "Ikke generisk PPC. En bredere paid acquisition-disciplin."
                            },
                            body: {
                                en: "The work covers search advertising, conversion quality, landing page alignment and commercial budget logic. It is designed to improve acquisition efficiency, not just campaign activity.",
                                no: "Arbeidet dekker søkeannonsering, konverteringskvalitet, landingsside-samspill og kommersiell budsjettlogikk. Det er designet for å forbedre anskaffelseseffektivitet, ikke bare kampanjeaktivitet."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
                            children: capabilities.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: item.title,
                                    body: item.body
                                }, item.title.en, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 620,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 618,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Apriil Clarity integration",
                                no: "Apriil Clarity-integrasjon"
                            },
                            title: {
                                en: "Paid Acquisition decisions need a connected intelligence layer.",
                                no: "Paid Acquisition-beslutninger trenger et sammenkoblet intelligenslag."
                            },
                            body: {
                                en: "Apriil Clarity connects auction performance, lead quality, attribution confidence and landing page friction into one prioritisation model. It shows what changed, why it matters and what should happen next.",
                                no: "Apriil Clarity kobler auksjonsytelse, leadkvalitet, attribusjonssikkerhet og landingssidefriksjon inn i én prioriteringsmodell. Den viser hva som endret seg, hvorfor det betyr noe og hva som bør skje neste."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "grid gap-5 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "01",
                                    title: {
                                        en: "Unify signal quality",
                                        no: "Samle signalkvalitet"
                                    },
                                    body: {
                                        en: "Campaign, conversion and CRM signals are assessed together instead of being reported separately.",
                                        no: "Kampanje-, konverterings- og CRM-signaler vurderes samlet i stedet for å rapporteres separat."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "02",
                                    title: {
                                        en: "Prioritise efficiency",
                                        no: "Prioriter effektivitet"
                                    },
                                    body: {
                                        en: "The goal is higher commercial efficiency, not more platform activity.",
                                        no: "Målet er høyere kommersiell effektivitet, ikke mer plattformaktivitet."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "03",
                                    title: {
                                        en: "Track implementation impact",
                                        no: "Spor implementeringseffekt"
                                    },
                                    body: {
                                        en: "Landing page, bid strategy and targeting changes are tracked through operational outcomes.",
                                        no: "Endringer i landingssider, budstrategi og målretting spores gjennom operative utfall."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Connect into Apriil Clarity",
                                        no: "Koble inn i Apriil Clarity"
                                    },
                                    body: {
                                        en: "Paid Acquisition is one execution discipline. Apriil Clarity is the reporting and prioritisation layer that connects it to search visibility and leadership decisions.",
                                        no: "Paid Acquisition er én utførelsesdisiplin. Apriil Clarity er rapporterings- og prioriteringslaget som kobler den til Search Visibility og beslutninger i ledelsen."
                                    },
                                    href: "/signal-room",
                                    linkLabel: {
                                        en: "Explore Apriil Clarity",
                                        no: "Utforsk Apriil Clarity"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 631,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 629,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPanel, {
                locale: locale,
                title: {
                    en: "Clarify what acquisition efficiency should improve next.",
                    no: "Avklar hva som bør forbedres neste i anskaffelseseffektiviteten."
                },
                body: {
                    en: "Useful when campaign structure, landing pages and reporting confidence need to support the same growth decisions.",
                    no: "Nyttig når kampanjestruktur, landingssider og rapporteringssikkerhet må støtte de samme vekstbeslutningene."
                },
                focusOptions: [
                    {
                        en: "Paid Acquisition",
                        no: "Paid Acquisition"
                    },
                    {
                        en: "Apriil Clarity",
                        no: "Apriil Clarity"
                    },
                    {
                        en: "Cross-channel review",
                        no: "Tverrkanal gjennomgang"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 582,
        columnNumber: 5
    }, this);
}
_s2(PaidAcquisitionServicePage, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c11 = PaidAcquisitionServicePage;
function SignalRoomPageView() {
    _s3();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-18 pt-14 md:px-10 md:pb-24 md:pt-20 xl:px-16 xl:pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a2552d]",
                                    children: "Apriil Clarity"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-5 max-w-[12ch] font-heading text-[44px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#171717] md:text-[70px] xl:text-[84px]",
                                    children: pick(locale, {
                                        en: "Operational intelligence for connected search performance.",
                                        no: "Operasjonell intelligens for sammenkoblet søk- og performance-arbeid."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-7 max-w-[40rem] text-[18px] leading-[1.85] text-[#4f4943] md:text-[20px]",
                                    children: pick(locale, {
                                        en: "Apriil Clarity is Apriil's operational intelligence framework: the reporting methodology, prioritisation logic and strategic visibility layer connecting Search Visibility and Paid Acquisition into one decision system.",
                                        no: "Apriil Clarity er Apriils operasjonelle intelligensrammeverk: rapporteringsmetodikken, prioriteringslogikken og det strategiske synlighetslaget som kobler Search Visibility og Paid Acquisition inn i ett beslutningssystem."
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 657,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.45,
                                ease: [
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                ]
                            },
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopMockup, {
                                    src: "/images/analytics-premium/dashboard-trends.png",
                                    alt: "Apriil Clarity executive reporting view",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 669,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-mt-14 ml-auto hidden w-44 md:block lg:w-52",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {
                                        src: "/images/analytics-premium/report-confidence-mobile.jpg",
                                        alt: "Apriil Clarity mobile confidence view",
                                        className: "rotate-[4deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 670,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 662,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#fbf8f3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Fragmented marketing problem",
                                no: "Fragmentert markedsproblem"
                            },
                            title: {
                                en: "The issue is not lack of data. It is lack of operating clarity.",
                                no: "Problemet er ikke mangel på data. Det er mangel på operasjonell klarhet."
                            },
                            body: {
                                en: "SEO signals, paid media signals, analytics, CRM data and landing page behaviour often live in different systems with different owners. Apriil Clarity exists to connect them into one coherent decision framework.",
                                no: "SEO-signaler, paid media-signaler, analyse, CRM-data og landingssideatferd lever ofte i ulike systemer med ulike eiere. Apriil Clarity finnes for å koble dem inn i ett sammenhengende beslutningsrammeverk."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 md:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Disconnected reporting",
                                        no: "Usammenkoblet rapportering"
                                    },
                                    body: {
                                        en: "Teams describe the same commercial system through separate dashboard narratives.",
                                        no: "Team beskriver det samme kommersielle systemet gjennom separate dashbordfortellinger."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "No shared prioritisation logic",
                                        no: "Ingen delt prioriteringslogikk"
                                    },
                                    body: {
                                        en: "Actions compete for attention because impact, urgency and complexity were never scored in one model.",
                                        no: "Tiltak konkurrerer om oppmerksomhet fordi påvirkning, hast og kompleksitet aldri ble scoret i én modell."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 682,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Weak implementation visibility",
                                        no: "Svak implementeringssynlighet"
                                    },
                                    body: {
                                        en: "Leadership sees outputs, but not what changed operationally or which actions drove the shift.",
                                        no: "Ledelsen ser outputs, men ikke hva som faktisk endret seg operativt eller hvilke tiltak som skapte endringen."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 680,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 678,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Signal collection",
                                no: "Signalinnsamling"
                            },
                            title: {
                                en: "Collection across channels and systems.",
                                no: "Innsamling på tvers av kanaler og systemer."
                            },
                            body: {
                                en: "Apriil Clarity combines SEO signals, paid media signals, analytics, CRM data, landing page behaviour and conversion data into one structured operational view.",
                                no: "Apriil Clarity kombinerer SEO-signaler, paid media-signaler, analyse, CRM-data, landingssideatferd og konverteringsdata til ett strukturert operativt bilde."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Search visibility",
                                        no: "Search visibility"
                                    },
                                    body: {
                                        en: "Demand capture, indexation health, topic coverage and commercial page visibility.",
                                        no: "Etterspørselfangst, indekseringshelse, topic-dekning og kommersiell sidesynlighet."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 692,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Paid acquisition",
                                        no: "Paid acquisition"
                                    },
                                    body: {
                                        en: "Auction performance, intent quality, cost structure and lead efficiency.",
                                        no: "Auksjonsytelse, intensjonskvalitet, kostnadsstruktur og lead-effektivitet."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 693,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Analytics infrastructure",
                                        no: "Analyseinfrastruktur"
                                    },
                                    body: {
                                        en: "Tracking quality, attribution confidence and reporting consistency.",
                                        no: "Sporingskvalitet, attribusjonssikkerhet og rapporteringskonsistens."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 694,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "CRM and revenue signals",
                                        no: "CRM- og inntektssignaler"
                                    },
                                    body: {
                                        en: "Pipeline quality, lead progression and downstream business effect.",
                                        no: "Pipelinekvalitet, lead-utvikling og nedstrøms forretningseffekt."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Landing page behaviour",
                                        no: "Landingssideatferd"
                                    },
                                    body: {
                                        en: "Friction, message-fit and user behaviour across key acquisition paths.",
                                        no: "Friksjon, budskaps-fit og brukeradferd på tvers av viktige anskaffelsesstier."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 696,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                    locale: locale,
                                    title: {
                                        en: "Implementation status",
                                        no: "Implementeringsstatus"
                                    },
                                    body: {
                                        en: "What changed, who owns it, and how the work is progressing operationally.",
                                        no: "Hva som er endret, hvem som eier det og hvordan arbeidet beveger seg operativt."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 697,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 691,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 689,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 688,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#f1ebe3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Intelligence layer",
                                no: "Intelligenslag"
                            },
                            title: {
                                en: "Prioritisation based on impact, complexity, urgency and confidence.",
                                no: "Prioritering basert på påvirkning, kompleksitet, hast og sikkerhet."
                            },
                            body: {
                                en: "Apriil Clarity evaluates what matters most before recommendations are surfaced. The goal is a calmer, more defensible decision sequence across teams and leadership.",
                                no: "Apriil Clarity vurderer hva som betyr mest før anbefalinger løftes frem. Målet er en roligere og mer forsvarlig beslutningssekvens på tvers av team og ledelse."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 704,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                    locale: locale,
                                    label: {
                                        en: "Impact",
                                        no: "Påvirkning"
                                    },
                                    value: "92",
                                    body: {
                                        en: "How strongly the issue or opportunity affects commercial performance.",
                                        no: "Hvor sterkt problemet eller muligheten påvirker kommersiell performance."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 706,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                    locale: locale,
                                    label: {
                                        en: "Complexity",
                                        no: "Kompleksitet"
                                    },
                                    value: "Low",
                                    body: {
                                        en: "Whether the required implementation effort justifies immediate prioritisation.",
                                        no: "Om nødvendig implementeringsinnsats forsvarer umiddelbar prioritering."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                    locale: locale,
                                    label: {
                                        en: "Urgency",
                                        no: "Hast"
                                    },
                                    value: "High",
                                    body: {
                                        en: "Which actions should move first because delay increases risk or waste.",
                                        no: "Hvilke tiltak som må bevege seg først fordi forsinkelse øker risiko eller sløsing."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 708,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                    locale: locale,
                                    label: {
                                        en: "Confidence",
                                        no: "Sikkerhet"
                                    },
                                    value: "88%",
                                    body: {
                                        en: "How reliable the underlying signal is across channels and reporting systems.",
                                        no: "Hvor pålitelig det underliggende signalet er på tvers av kanaler og rapporteringssystemer."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 709,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 705,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 703,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 702,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                            locale: locale,
                            eyebrow: {
                                en: "Operational recommendations",
                                no: "Operasjonelle anbefalinger"
                            },
                            title: {
                                en: "Recommendations that can be implemented, tracked and explained.",
                                no: "Anbefalinger som kan implementeres, spores og forklares."
                            },
                            body: {
                                en: "Apriil Clarity closes the loop between analysis and execution. Priorities are assigned to concrete actions, tracked through implementation, and reported through operational and commercial effect.",
                                no: "Apriil Clarity lukker løkken mellom analyse og utførelse. Prioriteringer knyttes til konkrete tiltak, spores gjennom implementering og rapporteres gjennom operasjonell og kommersiell effekt."
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "01",
                                    title: {
                                        en: "Recommendation",
                                        no: "Anbefaling"
                                    },
                                    body: {
                                        en: "Define the action in practical terms, not abstract reporting language.",
                                        no: "Definer tiltaket i praktiske termer, ikke abstrakt rapporteringsspråk."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 718,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "02",
                                    title: {
                                        en: "Implementation tracking",
                                        no: "Implementeringssporing"
                                    },
                                    body: {
                                        en: "Show what changed, who owns it and whether the action is complete.",
                                        no: "Vis hva som endret seg, hvem som eier det og om tiltaket er gjennomført."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 719,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowStep, {
                                    locale: locale,
                                    number: "03",
                                    title: {
                                        en: "Operational effect",
                                        no: "Operasjonell effekt"
                                    },
                                    body: {
                                        en: "Connect the change back to search visibility, acquisition efficiency or reporting confidence.",
                                        no: "Koble endringen tilbake til search visibility, anskaffelseseffektivitet eller rapporteringssikkerhet."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 720,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 717,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 715,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 714,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y border-[#ddd6ca] bg-[#fbf8f3] px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                                    locale: locale,
                                    eyebrow: {
                                        en: "Executive reporting",
                                        no: "Rapportering til ledelsen"
                                    },
                                    title: {
                                        en: "Strategic visibility without dashboard overload.",
                                        no: "Strategisk synlighet uten dashbord-overbelastning."
                                    },
                                    body: {
                                        en: "Apriil Clarity is not positioned as software. It is a reporting methodology designed to explain what changed, why it changed and what should happen next, without burying stakeholders in disconnected platform metrics.",
                                        no: "Apriil Clarity er ikke posisjonert som programvare. Det er en rapporteringsmetodikk designet for å forklare hva som endret seg, hvorfor det endret seg og hva som bør skje neste, uten å begrave interessenter i frakoblede plattformmålinger."
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 728,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                                    className: "mt-10 grid gap-5 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                            locale: locale,
                                            title: {
                                                en: "Executive narrative",
                                                no: "Ledelsesnarrativ"
                                            },
                                            body: {
                                                en: "The reporting layer shows the strategic picture first: what shifted in demand, visibility, efficiency and implementation status.",
                                                no: "Rapporteringslaget viser det strategiske bildet først: hva som flyttet seg i etterspørsel, synlighet, effektivitet og implementeringsstatus."
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                            locale: locale,
                                            title: {
                                                en: "Operational confidence",
                                                no: "Operasjonell trygghet"
                                            },
                                            body: {
                                                en: "Teams still get the signal quality and progress checks needed to act without reopening disconnected tools.",
                                                no: "Team får fortsatt signalkvaliteten og fremdriftssjekkene som trengs for å handle uten å åpne frakoblede verktøy på nytt."
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/site/operational-pages.tsx",
                                            lineNumber: 731,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 729,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 727,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopMockup, {
                                    src: "/images/analytics-premium/dashboard-metrics.png",
                                    alt: "Executive reporting summary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-mt-14 ml-auto hidden w-44 md:block lg:w-48",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {
                                        src: "/images/analytics-premium/report-confidence-mobile.jpg",
                                        alt: "Operational confidence mobile view",
                                        className: "rotate-[-4deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/site/operational-pages.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/site/operational-pages.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/site/operational-pages.tsx",
                            lineNumber: 734,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 726,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 md:px-10 md:py-28 xl:px-16 xl:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1000px] text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a2552d]",
                                children: pick(locale, {
                                    en: "Closing philosophy",
                                    no: "Avsluttende filosofi"
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mx-auto mt-5 max-w-[14ch] font-heading text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#171717] md:text-[54px] xl:text-[60px]",
                                children: pick(locale, {
                                    en: "Reporting should support decisions, not create more noise.",
                                    no: "Rapportering skal støtte beslutninger, ikke skape mer støy."
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 747,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-6 max-w-[42rem] text-[18px] leading-[1.9] text-[#4f4943]",
                                children: pick(locale, {
                                    en: "Apriil Clarity exists to turn fragmented marketing signals into prioritised operational intelligence, measurable recommendations and clearer strategic reporting.",
                                    no: "Apriil Clarity finnes for å gjøre fragmenterte markedssignaler om til prioritert operasjonell intelligens, målbare anbefalinger og tydeligere strategisk rapportering."
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 750,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 745,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 744,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 743,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPanel, {
                locale: locale,
                title: {
                    en: "Clarify how your reporting should actually support decisions.",
                    no: "Avklar hvordan rapporteringen faktisk skal støtte beslutninger."
                },
                body: {
                    en: "Useful when dashboards exist, but teams and leadership still lack one connected operating picture across search visibility and acquisition.",
                    no: "Nyttig når dashbordene finnes, men team og ledelse fortsatt mangler ett sammenkoblet operativt bilde på tvers av search visibility og acquisition."
                },
                focusOptions: [
                    {
                        en: "Apriil Clarity",
                        no: "Apriil Clarity"
                    },
                    {
                        en: "Search Visibility",
                        no: "Search Visibility"
                    },
                    {
                        en: "Paid Acquisition",
                        no: "Paid Acquisition"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 757,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 649,
        columnNumber: 5
    }, this);
}
_s3(SignalRoomPageView, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c12 = SignalRoomPageView;
function ResultsPageView() {
    _s4();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 xl:px-16 xl:pb-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1440px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                        locale: locale,
                        eyebrow: {
                            en: "Results",
                            no: "Resultater"
                        },
                        title: {
                            en: "Connected search and acquisition work should move real outcomes.",
                            no: "Sammenkoblet søk- og anskaffelsesarbeid skal flytte reelle resultater."
                        },
                        body: {
                            en: "The results view is framed around structure, visibility, efficiency and commercial clarity rather than channel vanity metrics alone.",
                            no: "Resultatsiden rammes inn rundt struktur, synlighet, effektivitet og kommersiell klarhet, ikke bare kanalbaserte vanity metrics."
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 769,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                        className: "mt-12 grid gap-5 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                locale: locale,
                                title: {
                                    en: "Operational visibility system",
                                    no: "Operativt synlighetssystem"
                                },
                                body: {
                                    en: "Search visibility redesigned around intent, architecture and content pathways that support clearer commercial decisions.",
                                    no: "Search visibility redesignet rundt intensjon, arkitektur og innholdsstier som støtter tydeligere kommersielle beslutninger."
                                },
                                href: "/case-studies/melk",
                                linkLabel: {
                                    en: "View case study",
                                    no: "Se case"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 771,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                locale: locale,
                                title: {
                                    en: "Structured demand capture",
                                    no: "Strukturert etterspørselfangst"
                                },
                                body: {
                                    en: "Guidance content and information architecture turned into a stronger discoverability model for an interiors brand.",
                                    no: "Veiledningsinnhold og informasjonsarkitektur gjort om til en sterkere synlighetsmodell for en interiøraktør."
                                },
                                href: "/case-studies/princess",
                                linkLabel: {
                                    en: "View case study",
                                    no: "Se case"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 772,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                locale: locale,
                                title: {
                                    en: "Connected performance narrative",
                                    no: "Sammenkoblet performancenarrativ"
                                },
                                body: {
                                    en: "Cross-channel reporting, acquisition efficiency and implementation visibility framed inside one operational model.",
                                    no: "Tverrkanal rapportering, anskaffelseseffektivitet og implementeringssynlighet rammet inn i én operasjonell modell."
                                },
                                href: "/signal-room",
                                linkLabel: {
                                    en: "Explore Apriil Clarity",
                                    no: "Utforsk Apriil Clarity"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 773,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 770,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 768,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/site/operational-pages.tsx",
            lineNumber: 767,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 766,
        columnNumber: 5
    }, this);
}
_s4(ResultsPageView, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c13 = ResultsPageView;
function AboutPageView() {
    _s5();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 xl:px-16 xl:pb-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1440px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                        locale: locale,
                        eyebrow: {
                            en: "About Apriil",
                            no: "Om Apriil"
                        },
                        title: {
                            en: "A strategic search and performance consultancy, not a channel factory.",
                            no: "Et strategisk søk- og performancekonsulentskap, ikke en kanalfabrikk."
                        },
                        body: {
                            en: "Apriil combines search visibility, paid acquisition and operational intelligence into one connected decision framework. The goal is not more dashboards or more isolated channel activity. It is stronger visibility, clearer priorities and better long-term growth decisions.",
                            no: "Apriil kombinerer search visibility, paid acquisition og operasjonell intelligens i ett sammenkoblet beslutningsrammeverk. Målet er ikke flere dashbord eller mer isolert kanalaktivitet. Det er sterkere synlighet, tydeligere prioriteringer og bedre langsiktige vekstbeslutninger."
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 788,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                        className: "mt-12 grid gap-5 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                locale: locale,
                                title: {
                                    en: "Strategic",
                                    no: "Strategisk"
                                },
                                body: {
                                    en: "We start with operating clarity, hierarchy and commercial consequence before tactics.",
                                    no: "Vi starter med operasjonell klarhet, hierarki og kommersiell konsekvens før taktikk."
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 790,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                locale: locale,
                                title: {
                                    en: "Connected",
                                    no: "Sammenkoblet"
                                },
                                body: {
                                    en: "Search visibility and acquisition are treated as interdependent systems, not separate teams chasing isolated metrics.",
                                    no: "Search visibility og acquisition behandles som gjensidig avhengige systemer, ikke separate team som jager isolerte målinger."
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 791,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsightCard, {
                                locale: locale,
                                title: {
                                    en: "Operational",
                                    no: "Operasjonell"
                                },
                                body: {
                                    en: "Apriil Clarity exists to connect analysis, prioritisation, implementation tracking and executive reporting.",
                                    no: "Apriil Clarity finnes for å koble analyse, prioritering, implementeringssporing og rapportering til ledelsen."
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/site/operational-pages.tsx",
                                lineNumber: 792,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 789,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 787,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/site/operational-pages.tsx",
            lineNumber: 786,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 785,
        columnNumber: 5
    }, this);
}
_s5(AboutPageView, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c14 = AboutPageView;
function ContactPageView() {
    _s6();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageFrame, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-10 pt-14 md:px-10 md:pb-16 md:pt-20 xl:px-16 xl:pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1440px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionIntro, {
                        locale: locale,
                        eyebrow: {
                            en: "Contact",
                            no: "Kontakt"
                        },
                        title: {
                            en: "Discuss the structure, not just the channels.",
                            no: "Diskuter strukturen, ikke bare kanalene."
                        },
                        body: {
                            en: "Useful when search visibility, paid acquisition and reporting have drifted apart and you need a clearer operating model.",
                            no: "Nyttig når search visibility, paid acquisition og rapportering har drevet fra hverandre og dere trenger en tydeligere arbeidsmodell."
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/site/operational-pages.tsx",
                        lineNumber: 807,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/site/operational-pages.tsx",
                    lineNumber: 806,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 805,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPanel, {
                locale: locale,
                title: {
                    en: "Tell us where the current model feels fragmented.",
                    no: "Fortell oss hvor dagens modell føles fragmentert."
                },
                body: {
                    en: "We can review service structure, operational reporting, prioritisation and the relationship between search visibility, acquisition and Apriil Clarity.",
                    no: "Vi kan gå gjennom tjenestestruktur, operasjonell rapportering, prioritering og forholdet mellom search visibility, acquisition og Apriil Clarity."
                },
                focusOptions: [
                    {
                        en: "Search Visibility",
                        no: "Search Visibility"
                    },
                    {
                        en: "Paid Acquisition",
                        no: "Paid Acquisition"
                    },
                    {
                        en: "Apriil Clarity",
                        no: "Apriil Clarity"
                    },
                    {
                        en: "Website restructuring",
                        no: "Nettsted-restrukturering"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/site/operational-pages.tsx",
                lineNumber: 810,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/site/operational-pages.tsx",
        lineNumber: 804,
        columnNumber: 5
    }, this);
}
_s6(ContactPageView, "aQZd10leNxbqQbwDEUSVdOnDXm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$locale$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c15 = ContactPageView;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "SectionIntro");
__turbopack_context__.k.register(_c1, "DesktopMockup");
__turbopack_context__.k.register(_c2, "PhoneMockup");
__turbopack_context__.k.register(_c3, "InsightCard");
__turbopack_context__.k.register(_c4, "FlowStep");
__turbopack_context__.k.register(_c5, "MetricCard");
__turbopack_context__.k.register(_c6, "PricingCard");
__turbopack_context__.k.register(_c7, "ContactPanel");
__turbopack_context__.k.register(_c8, "PageFrame");
__turbopack_context__.k.register(_c9, "OperationalHomePage");
__turbopack_context__.k.register(_c10, "SearchVisibilityServicePage");
__turbopack_context__.k.register(_c11, "PaidAcquisitionServicePage");
__turbopack_context__.k.register(_c12, "SignalRoomPageView");
__turbopack_context__.k.register(_c13, "ResultsPageView");
__turbopack_context__.k.register(_c14, "AboutPageView");
__turbopack_context__.k.register(_c15, "ContactPageView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__09_bieh._.js.map