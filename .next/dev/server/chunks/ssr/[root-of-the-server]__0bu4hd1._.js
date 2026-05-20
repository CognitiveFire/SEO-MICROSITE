module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/content/search-map.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clusterTitles",
    ()=>clusterTitles,
    "getAllSearchQuestionPaths",
    ()=>getAllSearchQuestionPaths,
    "getSearchFooterSections",
    ()=>getSearchFooterSections,
    "getSearchQuestionByPath",
    ()=>getSearchQuestionByPath,
    "searchQuestionMap",
    ()=>searchQuestionMap
]);
const clusterTitles = {
    no: {
        "seo-basics": "SEO basics",
        "content-optimisation": "Content & optimisation",
        "ai-search-geo": "AI search & GEO",
        "technical-performance": "Technical & performance"
    },
    en: {
        "seo-basics": "SEO basics",
        "content-optimisation": "Content & optimisation",
        "ai-search-geo": "AI search & GEO",
        "technical-performance": "Technical & performance"
    }
};
const searchQuestionMap = [
    {
        locale: "no",
        cluster: "seo-basics",
        question: "Hva er SEO, og hvordan fungerer det?",
        path: "/seo/hva-er-seo",
        summary: "En kort forklaring på hva SEO er, hvordan søkemotorer vurderer sider, og hva som faktisk skaper synlighet over tid."
    },
    {
        locale: "no",
        cluster: "seo-basics",
        question: "Hvor lang tid tar SEO?",
        path: "/seo/hvor-lang-tid-tar-seo",
        summary: "Hva du kan forvente av tidslinje for SEO-arbeid, og hvorfor tempo varierer med konkurranse, kvalitet og teknisk nivå."
    },
    {
        locale: "no",
        cluster: "seo-basics",
        question: "Hva påvirker rangering i søk?",
        path: "/seo/hva-pavirker-rangering",
        summary: "En oversikt over de viktigste faktorene som påvirker rangering: relevans, kvalitet, autoritet, struktur og brukeropplevelse."
    },
    {
        locale: "no",
        cluster: "content-optimisation",
        question: "Hvordan optimaliserer jeg en side for søk?",
        path: "/innhold/hvordan-optimalisere-en-side",
        summary: "Praktiske prinsipper for å forbedre sidens struktur, tydelighet og synlighet i søkemotorer."
    },
    {
        locale: "no",
        cluster: "content-optimisation",
        question: "Hva er answer-first content?",
        path: "/innhold/hva-er-answer-first-content",
        summary: "Hvordan du kan skrive innhold som svarer raskt på spørsmål og samtidig gir riktig kontekst for videre lesing."
    },
    {
        locale: "no",
        cluster: "content-optimisation",
        question: "Hvordan forbedrer jeg klikkraten?",
        path: "/innhold/hvordan-forbedre-klikkraten",
        summary: "Hva som påvirker CTR i søkeresultater, og hvordan titler, beskrivelser og intensjon kan justeres."
    },
    {
        locale: "no",
        cluster: "ai-search-geo",
        question: "Hva er GEO (Generative Engine Optimisation)?",
        path: "/geo/hva-er-geo",
        summary: "En introduksjon til GEO og hvordan innhold kan tilpasses for synlighet i AI-genererte svar."
    },
    {
        locale: "no",
        cluster: "ai-search-geo",
        question: "Hvordan finner AI-verktøy som ChatGPT innhold?",
        path: "/geo/hvordan-finner-ai-innhold",
        summary: "Hvordan store språkmodeller og AI-søk henter, tolker og refererer til nettinnhold."
    },
    {
        locale: "no",
        cluster: "ai-search-geo",
        question: "Hvordan vises jeg i AI-genererte svar?",
        path: "/geo/hvordan-vises-i-ai-svar",
        summary: "Prinsipper for å øke sannsynligheten for omtale i AI-svar gjennom struktur, tydelighet og troverdighet."
    },
    {
        locale: "no",
        cluster: "technical-performance",
        question: "Hva er teknisk SEO?",
        path: "/teknisk/hva-er-teknisk-seo",
        summary: "Hva teknisk SEO dekker i praksis: crawlbarhet, indeksering, sidearkitektur og ytelse."
    },
    {
        locale: "no",
        cluster: "technical-performance",
        question: "Hvordan påvirker sidehastighet rangering?",
        path: "/teknisk/hvordan-pavirker-sidehastighet-rangering",
        summary: "Hvorfor sidehastighet påvirker både rangering og konvertering, og hva som bør prioriteres først."
    },
    {
        locale: "no",
        cluster: "technical-performance",
        question: "Hva er schema, og hvorfor er det viktig?",
        path: "/teknisk/hva-er-schema",
        summary: "Hva strukturert data er, og hvordan schema kan hjelpe søkemotorer og AI å tolke innhold mer presist."
    },
    {
        locale: "en",
        cluster: "seo-basics",
        question: "What is SEO and how does it work?",
        path: "/seo/what-is-seo",
        summary: "A practical explanation of SEO, how search engines evaluate pages, and what drives sustainable visibility."
    },
    {
        locale: "en",
        cluster: "seo-basics",
        question: "How long does SEO take?",
        path: "/seo/how-long-does-seo-take",
        summary: "What realistic SEO timelines look like, and why results depend on competition, quality, and technical baseline."
    },
    {
        locale: "en",
        cluster: "seo-basics",
        question: "What affects search rankings?",
        path: "/seo/what-affects-search-rankings",
        summary: "A clear view of ranking drivers including relevance, quality, authority, structure, and experience."
    },
    {
        locale: "en",
        cluster: "content-optimisation",
        question: "How do I optimise a page for search?",
        path: "/content/how-do-i-optimise-a-page-for-search",
        summary: "Practical steps to improve page structure, clarity, and discoverability in modern search."
    },
    {
        locale: "en",
        cluster: "content-optimisation",
        question: "What is answer-first content?",
        path: "/content/what-is-answer-first-content",
        summary: "How to create content that answers quickly while still providing the right supporting context."
    },
    {
        locale: "en",
        cluster: "content-optimisation",
        question: "How do I improve click-through rate?",
        path: "/content/how-do-i-improve-click-through-rate",
        summary: "How titles, descriptions, and intent alignment influence CTR and qualified traffic."
    },
    {
        locale: "en",
        cluster: "ai-search-geo",
        question: "What is GEO (Generative Engine Optimisation)?",
        path: "/geo/what-is-geo",
        summary: "A concise introduction to GEO and how to adapt content for visibility in AI-generated responses."
    },
    {
        locale: "en",
        cluster: "ai-search-geo",
        question: "How do AI tools like ChatGPT find content?",
        path: "/geo/how-do-ai-tools-find-content",
        summary: "How AI tools interpret, retrieve, and reference online information during synthesis."
    },
    {
        locale: "en",
        cluster: "ai-search-geo",
        question: "How do I appear in AI-generated answers?",
        path: "/geo/how-do-i-appear-in-ai-generated-answers",
        summary: "Practical principles for improving inclusion potential in AI-generated answer surfaces."
    },
    {
        locale: "en",
        cluster: "technical-performance",
        question: "What is technical SEO?",
        path: "/technical/what-is-technical-seo",
        summary: "What technical SEO includes in practice: crawlability, indexation, architecture, and performance."
    },
    {
        locale: "en",
        cluster: "technical-performance",
        question: "How does site speed affect rankings?",
        path: "/technical/how-does-site-speed-affect-rankings",
        summary: "Why speed impacts both ranking and conversion outcomes, and where to focus first."
    },
    {
        locale: "en",
        cluster: "technical-performance",
        question: "What is schema and why does it matter?",
        path: "/technical/what-is-schema-and-why-does-it-matter",
        summary: "What structured data is and how schema helps search engines and AI interpret page content."
    }
];
function getSearchFooterSections(locale) {
    const orderedClusters = [
        "seo-basics",
        "content-optimisation",
        "ai-search-geo",
        "technical-performance"
    ];
    return orderedClusters.map((cluster)=>({
            title: clusterTitles[locale][cluster],
            links: searchQuestionMap.filter((entry)=>entry.locale === locale && entry.cluster === cluster).map((entry)=>({
                    label: entry.question,
                    href: entry.path
                }))
        }));
}
function getAllSearchQuestionPaths() {
    return searchQuestionMap.map((entry)=>entry.path);
}
function getSearchQuestionByPath(path, locale) {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const exact = searchQuestionMap.find((entry)=>entry.path === normalizedPath && (!locale || entry.locale === locale));
    return exact || null;
}
}),
"[project]/app/content/home.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "homeContent",
    ()=>homeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$search$2d$map$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/content/search-map.ts [app-ssr] (ecmascript)");
;
const homeContent = {
    no: {
        article: {
            headline: "Akselerer veksten med en moderne strategi for SEO og GEO",
            description: "Et tydelig og kundevennlig tilbud innen SEO og GEO, utviklet for sterkere synlighet, bedre trafikkvalitet og målbar vekst."
        },
        navigation: {
            context: "Kontekst",
            services: "Tjenester",
            playbooks: "Playbooks",
            geo: "GEO",
            start: "Start",
            languageLabel: "Språk",
            norwegian: "NO",
            english: "EN"
        },
        hero: {
            brand: "APRIIL",
            headline: "Akselerer veksten med en SEO-strategi som gir tydelig effekt",
            subline: "Øk merkevarens rekkevidde, organisk trafikk og kvalifiserte henvendelser",
            ctaLabel: "Få et forslag",
            ctaHref: "#cta",
            trustLine: "Basert på vårt Go-To-Revenue-rammeverk (GTR)"
        },
        context: {
            title: "Søk er i endring",
            intro: "Søk skjer nå på tvers av klassiske resultater, svarflater og AI-assistert research.",
            points: [
                "Flere svar vises direkte i resultatene",
                "Enkle søk gir færre klikk",
                "AI-verktøy påvirker i større grad vurdering og valg"
            ],
            bottomLine: "Synlighet er mer konsentrert og mer selektiv"
        },
        problem: {
            intro: "Utfordringen ligger ofte ikke i innsatsen, men i tilpasningen. Godt innhold blir fortsatt oversett når det ikke er strukturert for hvordan søk fungerer i dag.",
            points: [
                "Innhold er skrevet som sider, ikke som svar",
                "Svak struktur gjør innholdet vanskeligere å forstå",
                "Lav synlighet i snippets og AI-svar",
                "Titler og formater er ikke konkurransedyktige"
            ]
        },
        improvements: {
            eyebrow: "Tjenestedetaljer",
            title: "Slik jobber vi med SEO og GEO",
            intro: "Et moderne søkeprogram må dekke teknisk grunnlag, innholdskvalitet, autoritet og synlighet i AI-drevne miljøer.",
            groups: [
                {
                    title: "Teknisk SEO",
                    items: [
                        "Et godt teknisk fundament gjør at innholdet kan finnes, forstås og brukes riktig."
                    ]
                },
                {
                    title: "On-page SEO",
                    items: [
                        "Vi strukturerer og forbedrer innhold slik at det presterer bedre i søk og fungerer bedre for brukeren."
                    ]
                },
                {
                    title: "Off-page SEO",
                    items: [
                        "Vi styrker autoritet utenfor eget nettsted gjennom relevante signaler og referanser."
                    ]
                },
                {
                    title: "GEO",
                    items: [
                        "Vi forbedrer hvordan merkevaren fremstår i AI-drevne søkemiljøer."
                    ]
                }
            ]
        },
        geo: {
            title: "Generative Engine Optimisation (GEO)",
            intro: "Sørg for at merkevaren er synlig når mennesker bruker AI til å undersøke, sammenligne og ta beslutninger.",
            points: [
                "GEO-audit og kartlegging av muligheter",
                "Innhold strukturert for AI-forståelse",
                "Teknisk og on-page tilpasning",
                "Utvikling av autoritet og merkevaresignaler",
                "Distribusjon på relevante og troverdige flater",
                "Løpende måling av AI-synlighet"
            ]
        },
        outcomes: {
            title: "Dette fører det til",
            intro: "Målet er tydeligere synlighet og bedre kommersiell effekt på tvers av moderne søkeflater.",
            points: [
                "Økt synlighet i søk og AI",
                "Høyere klikkrate",
                "Mer relevant trafikk",
                "Bedre engasjement og konvertering"
            ]
        },
        sectionAnswers: {
            context: "Søk består nå av klassiske treff, direkte svar og AI-genererte responser. Dette gir færre klikk og hardere konkurranse om synlighet.",
            problem: "Synlighet går ofte tapt når innhold ikke er strukturert for hvordan mennesker søker og hvordan systemer henter ut svar.",
            improvements: "SEO og GEO fungerer best når teknikk, innhold og autoritet jobber sammen i en struktur som både brukere og AI-modeller forstår.",
            outcomes: "Når innholdet er tydelig strukturert som svar, blir merkevaren lettere å finne, referere og velge i både søk og AI-verktøy."
        },
        faq: {
            title: "Ofte stilte spørsmål",
            subline: "Klare svar på hvordan moderne søk fungerer",
            items: [
                {
                    question: "Hva er forskjellen på SEO og GEO?",
                    answer: "SEO handler om synlighet i søkemotorresultater. GEO handler om at innholdet ditt blir brukt og referert i AI-genererte svar. De to metodene virker best sammen.",
                    href: "/seo/what-is-seo"
                },
                {
                    question: "Hva er Generative Engine Optimisation (GEO)?",
                    answer: "GEO er arbeidet med å gjøre innhold tydelig og troverdig for AI-systemer som genererer svar. Målet er at merkevaren din blir representert korrekt i disse svarene.",
                    href: "/geo/what-is-geo"
                },
                {
                    question: "Hvordan finner og bruker AI-verktøy som ChatGPT innhold?",
                    answer: "AI-verktøy bruker en kombinasjon av treningsdata, indeksert webinnhold og henteprosesser i sanntid. Klare strukturer, tydelige svar og pålitelige kilder gjør innholdet enklere å bruke."
                },
                {
                    question: "Hvordan får jeg nettsiden min inn i AI-genererte svar?",
                    answer: "Lag innhold som svarer direkte på konkrete spørsmål, bruk tydelige overskrifter og strukturerte data. Styrk samtidig autoritet med oppdatert og pålitelig informasjon."
                },
                {
                    question: "Har SEO fortsatt betydning med AI-søk?",
                    answer: "Ja. Teknisk SEO og innholdskvalitet er fortsatt grunnlaget for synlighet. AI-søk øker behovet for godt strukturert innhold, men erstatter ikke SEO."
                },
                {
                    question: "Hva er answer-first innhold?",
                    answer: "Answer-first innhold gir et tydelig hovedsvar tidlig i seksjonen, før detaljer og forklaringer. Det gjør siden lettere å lese for både mennesker og søkesystemer."
                },
                {
                    question: "Hvor lang tid tar det å se resultater fra SEO eller GEO?",
                    answer: "Tekniske forbedringer kan gi tidlige signaler i løpet av noen uker. Større effekt på synlighet og trafikk kommer ofte over 2-6 måneder, avhengig av konkurranse og utgangspunkt."
                },
                {
                    question: "Hvordan måler dere suksess i AI-drevet søk?",
                    answer: "Vi måler synlighet i søk og AI-svar, andel referanser, relevant trafikk og konverteringer. Målet er ikke bare eksponering, men kommersiell effekt."
                }
            ]
        },
        searchFooter: {
            title: "Utforsk relaterte spørsmål",
            intro: "Innhold strukturert rundt hvordan mennesker faktisk søker",
            sections: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$search$2d$map$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSearchFooterSections"])("no")
        },
        cta: {
            eyebrow: "Start",
            title: "Start med en kort analyse",
            detail: "Vi viser hvor dere er synlige, hvor dere ikke er det, og hvor mulighetene ligger.",
            buttonLabel: "Be om analyse",
            buttonHref: "#",
            calendarLabel: "Eller book en kort introduksjonssamtale",
            calendarHref: "#",
            formNameLabel: "Navn",
            formEmailLabel: "E-post",
            formCompanyLabel: "Selskap",
            formFocusLabel: "Hva vil dere prioritere først?",
            formFocusOptions: [
                "Teknisk SEO",
                "On-page SEO",
                "GEO-synlighet",
                "Måling og optimalisering"
            ],
            formIntro: "Del noen få opplysninger, så følger vi opp med et konkret neste steg.",
            formNote: "Kort skjema. Ingen unødvendig oppfølging.",
            formButtonLabel: "Send forespørsel",
            formSuccessTitle: "Forespørselen er mottatt",
            formSuccessMessage: "Takk. Vi går gjennom behovet og svarer med et passende neste steg.",
            formSendAnotherLabel: "Send en ny forespørsel",
            formSubmittingLabel: "Sender...",
            formErrorGeneric: "Noe gikk galt. Prøv igjen.",
            formErrorInvalid: "Legg inn en gyldig e-postadresse.",
            formErrorMissing: "Fyll inn navn og e-post."
        },
        labels: {
            context: "Kontekst",
            problem: "Problem",
            outcomes: "Resultater",
            start: "Start"
        }
    },
    en: {
        article: {
            headline: "Accelerate growth with a modern SEO and GEO strategy",
            description: "A clear, client-facing SEO and GEO offering built for stronger visibility, better traffic quality, and measurable growth."
        },
        navigation: {
            context: "Context",
            services: "Services",
            playbooks: "Playbooks",
            geo: "GEO",
            start: "Start",
            languageLabel: "Language",
            norwegian: "NO",
            english: "EN"
        },
        hero: {
            brand: "APRIIL",
            headline: "Accelerate Your Growth with an SEO strategy that Moves the Needle",
            subline: "Increase brand reach, organic traffic, and qualified leads",
            ctaLabel: "Get my proposal",
            ctaHref: "#cta",
            trustLine: "Based on our Go-To-Revenue (GTR) framework"
        },
        context: {
            title: "Search is changing",
            intro: "Search now happens across classic results, answer surfaces, and AI-assisted discovery.",
            points: [
                "More answers are shown directly in results",
                "Simple queries generate fewer clicks",
                "AI tools increasingly shape evaluation and decisions"
            ],
            bottomLine: "Visibility is more concentrated and more selective"
        },
        problem: {
            intro: "The issue is often not effort, but fit. Good content is still missed when it is not structured for how search works today.",
            points: [
                "Content is written as pages, not answers",
                "Weak structure makes content harder to understand",
                "Low presence in snippets and AI responses",
                "Titles and formats are not competitive"
            ]
        },
        improvements: {
            eyebrow: "Service detail",
            title: "How we work with SEO and GEO",
            intro: "A modern search programme should cover technical foundations, content quality, authority, and visibility in AI-led environments.",
            groups: [
                {
                    title: "Technical SEO",
                    items: [
                        "A sound technical foundation ensures your content can be found, understood, and used properly."
                    ]
                },
                {
                    title: "On-page SEO",
                    items: [
                        "We structure and refine content so it performs better in search and serves the user more clearly."
                    ]
                },
                {
                    title: "Off-page SEO",
                    items: [
                        "We strengthen authority beyond your own site through relevant signals and references."
                    ]
                },
                {
                    title: "GEO",
                    items: [
                        "We improve how your brand appears in AI-powered search environments."
                    ]
                }
            ]
        },
        geo: {
            title: "Generative Engine Optimisation (GEO)",
            intro: "Ensure your brand is visible when people use AI to research, compare, and decide.",
            points: [
                "GEO audit and opportunity mapping",
                "Content structured for AI understanding",
                "Technical and on-page alignment",
                "Authority and brand signal development",
                "Distribution across relevant trusted sources",
                "Ongoing monitoring of AI visibility"
            ]
        },
        outcomes: {
            title: "What this leads to",
            intro: "The aim is clearer visibility and better commercial outcomes across modern search environments.",
            points: [
                "Increased visibility in search and AI",
                "Higher click-through rate",
                "More relevant traffic",
                "Better engagement and conversion"
            ]
        },
        sectionAnswers: {
            context: "Search now includes traditional results, direct answers, and AI-generated responses. This reduces clicks and increases competition for visibility.",
            problem: "Visibility is often lost when content is not structured for how people search and how systems extract answers.",
            improvements: "SEO and GEO perform best when technical foundations, answer-first content, and authority signals are aligned in one system.",
            outcomes: "When content is structured as clear answers, your brand is easier to find, cite, and trust across both search engines and AI interfaces."
        },
        faq: {
            title: "Frequently asked questions",
            subline: "Clear answers to how modern search works",
            items: [
                {
                    question: "What is the difference between SEO and GEO?",
                    answer: "SEO focuses on improving visibility in search engine results. GEO focuses on ensuring your content is included and referenced in AI-generated answers. Both work together.",
                    href: "/seo/what-is-seo"
                },
                {
                    question: "What is Generative Engine Optimisation (GEO)?",
                    answer: "GEO is the practice of making your content clear, credible, and usable for AI systems that generate answers. It helps your brand appear accurately in AI-led discovery.",
                    href: "/geo/what-is-geo"
                },
                {
                    question: "How do AI tools like ChatGPT find and use content?",
                    answer: "AI tools combine training data, indexed web content, and retrieval methods. Clear page structure, direct answers, and strong source quality improve how your content is used."
                },
                {
                    question: "How do I get my website to appear in AI-generated answers?",
                    answer: "Publish content that answers specific questions directly, use clear headings, and add structured data where relevant. Keep information current and reinforce authority with reliable references."
                },
                {
                    question: "Does SEO still matter with AI search?",
                    answer: "Yes. Technical SEO and high-quality content remain the foundation for discoverability. AI search changes distribution, but it still depends on strong SEO fundamentals."
                },
                {
                    question: "What is answer-first content?",
                    answer: "Answer-first content gives the key response immediately, then adds context and detail. This format improves readability and makes extraction easier for search engines and AI systems."
                },
                {
                    question: "How long does it take to see results from SEO or GEO?",
                    answer: "Technical fixes can show early signals within weeks. Meaningful visibility and traffic gains usually build over 2-6 months, depending on competition and site maturity."
                },
                {
                    question: "How do you measure success in AI-driven search?",
                    answer: "Track visibility in search and AI answers, citation share, qualified traffic, and conversions. Success is measured by business outcomes, not impressions alone."
                }
            ]
        },
        searchFooter: {
            title: "Explore related questions",
            intro: "Content structured around how people search",
            sections: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$search$2d$map$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSearchFooterSections"])("en")
        },
        cta: {
            eyebrow: "Start",
            title: "Start with a short analysis",
            detail: "We’ll show where you are visible, where you are not, and where the opportunities are.",
            buttonLabel: "Request analysis",
            buttonHref: "#",
            calendarLabel: "Or book a short introductory call",
            calendarHref: "#",
            formNameLabel: "Name",
            formEmailLabel: "Email",
            formCompanyLabel: "Company",
            formFocusLabel: "What should we prioritise first?",
            formFocusOptions: [
                "Technical SEO",
                "On-page SEO",
                "GEO visibility",
                "Measurement and optimisation"
            ],
            formIntro: "Share a few details and we’ll respond with a clear next step.",
            formNote: "Short form. No unnecessary follow-up.",
            formButtonLabel: "Send request",
            formSuccessTitle: "Request received",
            formSuccessMessage: "Thank you. We’ll review the brief and respond with a suitable next step.",
            formSendAnotherLabel: "Send another request",
            formSubmittingLabel: "Sending...",
            formErrorGeneric: "Something went wrong. Please try again.",
            formErrorInvalid: "Please enter a valid email address.",
            formErrorMissing: "Please enter your name and email."
        },
        labels: {
            context: "Context",
            problem: "Problem",
            outcomes: "Outcomes",
            start: "Start"
        }
    }
};
const defaultLocale = "no";
}),
"[project]/app/components/locale-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleShell",
    ()=>LocaleShell,
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/content/home.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageSwitcher({ locale, onChange, labels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#111111]/65",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden lg:inline",
                children: labels.languageLabel
            }, void 0, false, {
                fileName: "[project]/app/components/locale-shell.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex rounded-full border border-[#D4D4CF] bg-[#ECECE8] p-1",
                children: [
                    [
                        "no",
                        labels.norwegian
                    ],
                    [
                        "en",
                        labels.english
                    ]
                ].map(([value, label])=>{
                    const active = locale === value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(value),
                        className: `rounded-full px-3 py-1 transition-colors ${active ? "bg-[#FFFFFF] text-[#111111] shadow-[0_1px_2px_rgba(17,17,17,0.08)]" : "text-[#111111]/58"}`,
                        "aria-pressed": active,
                        children: label
                    }, value, false, {
                        fileName: "[project]/app/components/locale-shell.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/locale-shell.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/locale-shell.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function SiteHeader() {
    const { locale, setLocale, content } = useLocale();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesMenuOpen, setServicesMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const servicesMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeServicesTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItems = [
        {
            label: locale === "no" ? "Tjenester" : "Services",
            children: [
                {
                    href: "/services/search-visibility",
                    label: "Search Visibility",
                    description: locale === "no" ? "Organisk synlighet, intensjon og struktur" : "Organic visibility, intent and structure"
                },
                {
                    href: "/services/paid-acquisition",
                    label: "Paid Acquisition",
                    description: locale === "no" ? "Kommersiell effektivitet og anskaffelse" : "Commercial efficiency and acquisition"
                }
            ]
        },
        {
            href: "/signal-room",
            label: "Apriil Clarity"
        },
        {
            href: "/#results",
            label: locale === "no" ? "Resultater" : "Results"
        },
        {
            href: "/#about",
            label: locale === "no" ? "Om" : "About"
        },
        {
            href: "/#contact",
            label: locale === "no" ? "Kontakt" : "Contact"
        }
    ];
    function clearServicesCloseTimer() {
        if (closeServicesTimerRef.current !== null) {
            window.clearTimeout(closeServicesTimerRef.current);
            closeServicesTimerRef.current = null;
        }
    }
    function scheduleServicesClose() {
        clearServicesCloseTimer();
        closeServicesTimerRef.current = window.setTimeout(()=>{
            setServicesMenuOpen(false);
            closeServicesTimerRef.current = null;
        }, 180);
    }
    function openServicesMenu() {
        clearServicesCloseTimer();
        setServicesMenuOpen(true);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!servicesMenuOpen) {
            return;
        }
        function handlePointerDown(event) {
            if (!servicesMenuRef.current?.contains(event.target)) {
                setServicesMenuOpen(false);
            }
        }
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setServicesMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        servicesMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            clearServicesCloseTimer();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-[#DBDBD7] bg-[#F4F4F2]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-5 md:gap-6 md:px-10 xl:px-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "justify-self-start text-[30px] font-medium leading-none tracking-[0.08em] text-[#111111]",
                        children: "APRIIL"
                    }, void 0, false, {
                        fileName: "[project]/app/components/locale-shell.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Hovednavigasjon",
                        className: "hidden items-center justify-center gap-8 text-[18px] font-medium leading-none tracking-[-0.01em] text-[#111111] md:flex",
                        children: navItems.map((item)=>"children" in item ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: servicesMenuRef,
                                className: "relative pt-2",
                                onMouseEnter: openServicesMenu,
                                onMouseLeave: scheduleServicesClose,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-expanded": servicesMenuOpen,
                                        "aria-haspopup": "menu",
                                        "aria-controls": "desktop-services-menu",
                                        onClick: ()=>{
                                            clearServicesCloseTimer();
                                            setServicesMenuOpen((open)=>!open);
                                        },
                                        className: "inline-flex items-center gap-2 text-inherit",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animated-link",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/locale-shell.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 20 20",
                                                className: `h-4 w-4 text-[#6b655f] transition-transform ${servicesMenuOpen ? "rotate-180" : ""}`,
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m5 8 5 5 5-5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.8",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/locale-shell.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/locale-shell.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/locale-shell.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "desktop-services-menu",
                                        className: `absolute left-1/2 top-full z-20 mt-2 w-[320px] -translate-x-1/2 rounded-[24px] border border-[#ddd6ca] bg-[#fbf8f3]/95 p-3 shadow-[0_24px_60px_rgba(50,41,35,0.08)] backdrop-blur-sm transition duration-200 ${servicesMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
                                        onMouseEnter: openServicesMenu,
                                        onMouseLeave: scheduleServicesClose,
                                        children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: child.href,
                                                onClick: ()=>{
                                                    clearServicesCloseTimer();
                                                    setServicesMenuOpen(false);
                                                },
                                                className: "block rounded-[18px] px-4 py-3 transition hover:bg-white/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[16px] font-semibold tracking-[-0.02em] text-[#171717]",
                                                        children: child.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/locale-shell.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 text-[13px] leading-6 text-[#675f58]",
                                                        children: child.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/locale-shell.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, child.href, true, {
                                                fileName: "[project]/app/components/locale-shell.tsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/locale-shell.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/app/components/locale-shell.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "animated-link",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/app/components/locale-shell.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/locale-shell.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-self-end gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSwitcher, {
                                    locale: locale,
                                    onChange: setLocale,
                                    labels: content.navigation
                                }, void 0, false, {
                                    fileName: "[project]/app/components/locale-shell.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/locale-shell.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                role: "search",
                                "aria-label": "Nettstedsok",
                                className: "hidden w-full max-w-[240px] md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            viewBox: "0 0 24 24",
                                            className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8A86]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M15.5 15.5L21 21M18 10.5A7.5 7.5 0 1 1 3 10.5a7.5 7.5 0 0 1 15 0Z",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/locale-shell.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/locale-shell.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "site-search",
                                            type: "search",
                                            name: "q",
                                            placeholder: "Søk",
                                            className: "h-11 w-full rounded-full border border-[#7C7C78] bg-transparent pl-11 pr-4 text-[16px] text-[#111111] outline-none transition-colors focus:border-[#4E4E4A]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/locale-shell.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/locale-shell.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/locale-shell.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-expanded": mobileMenuOpen,
                                "aria-controls": "mobile-site-menu",
                                "aria-label": mobileMenuOpen ? "Lukk meny" : "Åpne meny",
                                onClick: ()=>setMobileMenuOpen((open)=>!open),
                                className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#7C7C78] text-[#111111] transition-colors hover:border-[#4E4E4A] md:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Meny"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/locale-shell.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 6l12 12M18 6 6 18",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/locale-shell.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 7h16M4 12h16M4 17h16",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/locale-shell.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/locale-shell.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/locale-shell.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/locale-shell.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/locale-shell.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-site-menu",
                className: "border-t border-[#DBDBD7] px-6 pb-6 pt-4 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex w-full max-w-[1440px] flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Mobil navigasjon",
                            className: "flex flex-col gap-3 text-[18px] font-medium tracking-[-0.01em] text-[#111111]",
                            children: navItems.map((item)=>"children" in item ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[16px] border border-[#DAD9D4] bg-[#F9F9F7] px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[17px] font-semibold text-[#171717]",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/locale-shell.tsx",
                                            lineNumber: 273,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-col gap-2",
                                            children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: child.href,
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    className: "rounded-[14px] border border-[#E2DDD4] bg-white/80 px-3 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[15px] font-semibold text-[#171717]",
                                                            children: child.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/locale-shell.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[13px] leading-5 text-[#6a625b]",
                                                            children: child.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/locale-shell.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, child.href, true, {
                                                    fileName: "[project]/app/components/locale-shell.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/locale-shell.tsx",
                                            lineNumber: 274,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/app/components/locale-shell.tsx",
                                    lineNumber: 272,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setMobileMenuOpen(false),
                                    className: "rounded-[16px] border border-[#DAD9D4] bg-[#F9F9F7] px-4 py-3",
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/app/components/locale-shell.tsx",
                                    lineNumber: 289,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/locale-shell.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSwitcher, {
                                    locale: locale,
                                    onChange: setLocale,
                                    labels: content.navigation
                                }, void 0, false, {
                                    fileName: "[project]/app/components/locale-shell.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    role: "search",
                                    "aria-label": "Nettstedsok mobil",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                viewBox: "0 0 24 24",
                                                className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8A86]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15.5 15.5L21 21M18 10.5A7.5 7.5 0 1 1 3 10.5a7.5 7.5 0 0 1 15 0Z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.8",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/locale-shell.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/locale-shell.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "mobile-site-search",
                                                type: "search",
                                                name: "q",
                                                placeholder: "Søk",
                                                className: "h-11 w-full rounded-full border border-[#7C7C78] bg-transparent pl-11 pr-4 text-[16px] text-[#111111] outline-none transition-colors focus:border-[#4E4E4A]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/locale-shell.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/locale-shell.tsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/locale-shell.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/locale-shell.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/locale-shell.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/locale-shell.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/locale-shell.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
function LocaleShell({ children }) {
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = locale === "no" ? "no" : "en";
    }, [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            setLocale,
            content: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeContent"][locale]
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteHeader, {}, void 0, false, {
                fileName: "[project]/app/components/locale-shell.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/locale-shell.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
function useLocale() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within LocaleShell");
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bu4hd1._.js.map