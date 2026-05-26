export type OfficeExpert = {
  name: string;
  role: string;
  strategicExpertise: string;
  focusAreas: string[];
};

export type OfficeData = {
  slug: "bergen" | "oslo" | "stavanger";
  city: string;
  positioning: string;
  heroTitle: string;
  heroText: string;
  marketIntro: string;
  marketSignals: string[];
  helpWith: string[];
  experts: OfficeExpert[];
  capabilities: string[];
  address: string[];
  phone: string;
  email: string;
  contactName: string;
  contactRole: string;
  mapHref: string;
};

export const officesData: Record<OfficeData["slug"], OfficeData> = {
  bergen: {
    slug: "bergen",
    city: "Bergen",
    positioning: "Strategisk rådgivning og synlighet på Vestlandet.",
    heroTitle: "Strategisk markedsforing og synlighet fra Bergen.",
    heroText:
      "Apriil hjelper virksomheter med analyse, synlighet og distribusjon gjennom en tydeligere og mer koordinert tilnaerming til marked og kommunikasjon.",
    marketIntro:
      "Bergen-kontoret jobber tett med virksomheter i maritime miljoer, reiseliv, energi, handel og B2B. Vi kobler lokal innsikt med en nasjonal modell for synlighet og ettersporsel.",
    marketSignals: ["maritime", "reiseliv", "energi", "handel", "B2B"],
    helpWith: [
      "SEO Bergen med tydelig prioritering av kommersielle sok",
      "Betalt media og performance for regionale vekstmuligheter",
      "Analyse og attribusjon som styrker beslutningskvalitet",
      "Innholdsstrategi for synlighet i tradisjonelle og AI-drevne svarflater",
    ],
    experts: [
      {
        name: "Marie Tveit",
        role: "Senior digital rådgiver og digital markedsfører",
        strategicExpertise: "Strategisk rådgivning på tvers av synlighet, innhold og kanalprioritering.",
        focusAreas: ["SEO og synlighet", "Innholdsstrategi", "Performance"],
      },
      {
        name: "Lasse Marøen",
        role: "Avdelingsleder for digital markedsføring",
        strategicExpertise: "Ledelse av digital markedsføring med kommersiell retning og tydelig prioritering.",
        focusAreas: ["Digital strategi", "Betalt media", "Analyse og attribusjon"],
      },
      {
        name: "Carita Galtung Døsvig",
        role: "Senior rådgiver",
        strategicExpertise: "Tverrfaglig rådgivning for bedre sammenheng mellom marked, budskap og distribusjon.",
        focusAreas: ["Innhold og distribusjon", "Sosiale medier", "Kanalintegrasjon"],
      },
    ],
    capabilities: [
      "SEO-radgivning",
      "Performance marketing",
      "Programmatic",
      "Analyse og dashboarding",
      "Innholdsstrategi",
      "AI discoverability",
    ],
    address: ["Damsgardsveien 59", "5058 Bergen"],
    phone: "+47 55 21 00 21",
    email: "bergen@apriil.no",
    contactName: "Henrik Kvamme",
    contactRole: "Hovedkontakt for alle lokasjoner",
    mapHref: "https://maps.google.com/?q=Damsgardsveien+59+Bergen",
  },
  oslo: {
    slug: "oslo",
    city: "Oslo",
    positioning: "Kommersiell rådgivning for nasjonale og internasjonale virksomheter.",
    heroTitle: "Kommersiell markedsforing og synlighet fra Oslo.",
    heroText:
      "Apriil bistar virksomheter i komplekse markeder med tydelig prioritering mellom analyse, synlighet og distribusjon, for mer robuste kommersielle resultater.",
    marketIntro:
      "Oslo-kontoret jobber med nasjonale merkevarer, teknologi, finans og storre virksomheter. Vi bygger modeller som gir tydelig retning i markeder med hoy konkurranse og flere beslutningsledd.",
    marketSignals: [
      "nasjonale merkevarer",
      "teknologi",
      "finans",
      "storre virksomheter",
      "komplekse markeder",
    ],
    helpWith: [
      "Digitalbyra Oslo med seniorradgivning pa tvers av SEO og paid",
      "Skalerbar performance marketing for nasjonal og internasjonal vekst",
      "Strategisk analyse for bedre attribusjon i komplekse kundereiser",
      "Innhold og distribusjon for hoyere discoverability i beslutningsnaere faser",
    ],
    experts: [
      {
        name: "Martine Tessand Iversen",
        role: "Senior rådgiver",
        strategicExpertise: "Kommersiell rådgivning i markeder med høy konkurranse og komplekse kundereiser.",
        focusAreas: ["Kanalstrategi", "Betalt media", "Performance"],
      },
      {
        name: "Line Fauchald",
        role: "Senior rådgiver",
        strategicExpertise: "Synlighet og innholdsstruktur for sterkere organisk og kommersiell effekt.",
        focusAreas: ["SEO og synlighet", "Innholdsstrategi", "AI visibility"],
      },
      {
        name: "Ingvild Bakkan",
        role: "Senior rådgiver",
        strategicExpertise: "Operasjonalisering av markedsinnsats med tydelig kobling til forretningsmål.",
        focusAreas: ["Analyse og attribusjon", "Performance", "Kanalintegrasjon"],
      },
    ],
    capabilities: [
      "SEO byra Oslo",
      "Performance marketing",
      "Betalt media-radgivning",
      "Attribusjon og malemodell",
      "Innholdsstrategi",
      "Kanalintegrasjon",
    ],
    address: ["Hausmannsgate 21", "0182 Oslo"],
    phone: "+47 22 40 18 20",
    email: "oslo@apriil.no",
    contactName: "Henrik Kvamme",
    contactRole: "Hovedkontakt for alle lokasjoner",
    mapHref: "https://maps.google.com/?q=Hausmannsgate+21+Oslo",
  },
  stavanger: {
    slug: "stavanger",
    city: "Stavanger",
    positioning: "Analyse, distribusjon og synlighet for selskaper i utvikling.",
    heroTitle: "Strategisk markedsforing og synlighet fra Stavanger.",
    heroText:
      "Apriil i Stavanger kombinerer analyse, synlighet og kommersiell distribusjon for virksomheter som trenger tydeligere retning i et marked i rask utvikling.",
    marketIntro:
      "Stavanger-kontoret stotter energi, industri, teknologi, vekstselskaper og regionale virksomheter. Vi prioriterer tiltak som skaper robust synlighet og forutsigbar ettersporsel.",
    marketSignals: ["energi", "industri", "teknologi", "vekstselskaper", "regionale virksomheter"],
    helpWith: [
      "Performance marketing Stavanger med tett operasjonell oppfolging",
      "SEO og synlighet for virksomheter med regionale og nasjonale ambisjoner",
      "Analysemodeller som gjor prioritering enklere pa tvers av kanaler",
      "Distribusjon og innhold som styrker synlighet i beslutningsfaser",
    ],
    experts: [
      {
        name: "Lene Hille",
        role: "Senior rådgiver",
        strategicExpertise: "Strategisk rådgivning for vekst i regionale og nasjonale markeder.",
        focusAreas: ["Performance", "Betalt media", "Kanalintegrasjon"],
      },
      {
        name: "Anne Grethe Flesjå Høvring",
        role: "Senior rådgiver",
        strategicExpertise: "Synlighet, innhold og distribusjon i markeder med høye krav til prioritering.",
        focusAreas: ["SEO og synlighet", "Innholdsstrategi", "Video og distribusjon"],
      },
      {
        name: "Stella Karlsen",
        role: "Senior rådgiver",
        strategicExpertise: "Kommersiell oppfølging på tvers av analyse, distribusjon og optimalisering.",
        focusAreas: ["Analyse og attribusjon", "Sosiale medier", "Programmatic"],
      },
    ],
    capabilities: [
      "SEO-radgivning",
      "Performance marketing",
      "Analysebyra Stavanger",
      "Programmatic",
      "Video og distribusjon",
      "Strategisk innholdsutvikling",
    ],
    address: ["Nykirkebakken 7", "4013 Stavanger"],
    phone: "+47 51 82 40 12",
    email: "stavanger@apriil.no",
    contactName: "Henrik Kvamme",
    contactRole: "Hovedkontakt for alle lokasjoner",
    mapHref: "https://maps.google.com/?q=Nykirkebakken+7+Stavanger",
  },
};

export const officeCards = [
  {
    slug: officesData.bergen.slug,
    city: officesData.bergen.city,
    href: "/kontorer/bergen",
    positioning: officesData.bergen.positioning,
  },
  {
    slug: officesData.oslo.slug,
    city: officesData.oslo.city,
    href: "/kontorer/oslo",
    positioning: officesData.oslo.positioning,
  },
  {
    slug: officesData.stavanger.slug,
    city: officesData.stavanger.city,
    href: "/kontorer/stavanger",
    positioning: officesData.stavanger.positioning,
  },
];
