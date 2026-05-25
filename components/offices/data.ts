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
        name: "Eline Strand",
        role: "Seniorradgiver, synlighet",
        strategicExpertise: "Strategisk SEO og innholdsarkitektur for komplekse kundereiser.",
        focusAreas: ["SEO og synlighet", "AI visibility", "Innholdsstrategi"],
      },
      {
        name: "Sindre Aas",
        role: "Rådgiver, kommersiell distribusjon",
        strategicExpertise: "Kanalprioritering pa tvers av paid media og programmatic.",
        focusAreas: ["Betalt media", "Programmatic", "Video og distribusjon"],
      },
      {
        name: "Maria Lien",
        role: "Analyseleder",
        strategicExpertise: "Maling, attribusjon og operasjonell beslutningsstotte.",
        focusAreas: ["Analyse og attribusjon", "Sosiale medier", "Performance"],
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
    contactName: "Eline Strand",
    contactRole: "Lokal kontakt, Bergen",
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
        name: "Kristian Nygard",
        role: "Fagansvarlig, performance",
        strategicExpertise: "Kommersiell kanalstrategi i komplekse markeder.",
        focusAreas: ["Betalt media", "Programmatic", "Analyse og attribusjon"],
      },
      {
        name: "Hanne Eid",
        role: "Seniorradgiver, synlighet",
        strategicExpertise: "SEO, AI-synlighet og arkitektur for storre innholdsportefoljer.",
        focusAreas: ["SEO og synlighet", "AI visibility", "Innholdsstrategi"],
      },
      {
        name: "Mats Fjeld",
        role: "Strategisk rådgiver",
        strategicExpertise: "Forankring mellom markedsinvesteringer og lederbeslutninger.",
        focusAreas: ["Performance", "Video og distribusjon", "Sosiale medier"],
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
    contactName: "Kristian Nygard",
    contactRole: "Lokal kontakt, Oslo",
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
        name: "Nora Hovland",
        role: "Seniorradgiver, vekst",
        strategicExpertise: "Kommersiell prioritering mellom synlighet, distribusjon og salgsmal.",
        focusAreas: ["Performance", "Betalt media", "Analyse og attribusjon"],
      },
      {
        name: "Thomas Reiestad",
        role: "Fagspesialist, synlighet",
        strategicExpertise: "SEO og AI-synlighet for markeder med høy konkurranse.",
        focusAreas: ["SEO og synlighet", "AI visibility", "Innholdsstrategi"],
      },
      {
        name: "Lina Tveit",
        role: "Rådgiver, distribusjon",
        strategicExpertise: "Tverrkanal distribusjon med tydelig rolle for video og sosial.",
        focusAreas: ["Video og distribusjon", "Sosiale medier", "Programmatic"],
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
    contactName: "Nora Hovland",
    contactRole: "Lokal kontakt, Stavanger",
    mapHref: "https://maps.google.com/?q=Nykirkebakken+7+Stavanger",
  },
};

export const officeCards = [
  {
    city: officesData.bergen.city,
    href: "/kontorer/bergen",
    positioning: officesData.bergen.positioning,
  },
  {
    city: officesData.oslo.city,
    href: "/kontorer/oslo",
    positioning: officesData.oslo.positioning,
  },
  {
    city: officesData.stavanger.city,
    href: "/kontorer/stavanger",
    positioning: officesData.stavanger.positioning,
  },
];
