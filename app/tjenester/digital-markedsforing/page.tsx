import type { Metadata } from "next";
import {
  MethodologyGrid,
  PricingGrid,
  ServiceGridHero,
  type ServiceCard,
  StrategicSystemAnimation,
} from "@/components/digital-markedsforing/ui";
import { CtaPillLink } from "@/components/cta-pill";
import {
  CaseStudyToggle,
  type CaseStudyContent,
} from "@/components/digital-markedsforing/case-study-toggle";

export const metadata: Metadata = {
  title: "Digital markedsføring | Apriil",
  description:
    "Kommersiell intelligens på tvers av kanaler: Apriil prioriterer synlighet, signaler og kanalvalg strategisk for målbar kommersiell effekt.",
};

const serviceCards: ServiceCard[] = [
  {
    title: "SEO",
    body: "Langsiktig synlighet basert på hvordan mennesker søker og vurderer.",
    href: "/tjenester/digital-markedsforing/seo",
    icon: "seo",
  },
  {
    title: "Betalt media",
    body: "Annonsering og distribusjon tilpasset mål, marked og behov.",
    href: "/tjenester/digital-markedsforing/betalt-media",
    icon: "paid",
  },
  {
    title: "Performance",
    body: "Tverrkanal prioritering av budsjett, kanalrolle og kommersiell effekt.",
    href: "/tjenester/digital-markedsforing/performance",
    icon: "paid",
  },
  {
    title: "Creator network",
    body: "Distribusjon gjennom relevante profiler og miljøer.",
    href: "/tjenester/digital-markedsforing/creator-network",
    icon: "creator",
  },
  {
    title: "Programmatic",
    body: "Automatiserte mediekjøp med kontroll på kvalitet og effekt.",
    href: "/tjenester/digital-markedsforing/programmatic",
    icon: "programmatic",
  },
  {
    title: "Podcast",
    body: "Formater som bygger relasjon og troverdighet over tid.",
    href: "/tjenester/digital-markedsforing/podcast",
    icon: "podcast",
  },
  {
    title: "DOOH",
    body: "Strategisk synlighet i det fysiske rommet.",
    href: "/tjenester/digital-markedsforing/dooh",
    icon: "dooh",
  },
  {
    title: "Analyse og intelligence",
    body: "Analyse og innsikt som gjør prioritering enklere.",
    href: "/tjenester/digital-markedsforing/analyse",
    icon: "paid",
  },
];

const methodologySteps = [
  {
    label: "1. Forstå marked og signaler",
    title: "Forstå marked og signaler",
    points: [
      "Vi analyserer hvordan markedet søker, vurderer og sammenligner.",
      "Vi identifiserer hvilke signaler som påvirker beslutninger.",
      "Vi identifiserer hvor synligheten kan styrkes.",
    ],
  },
  {
    label: "2. Prioritere riktig",
    title: "Prioritere riktig",
    points: [
      "Vi vurderer hvilke aktiviteter som faktisk gir effekt.",
      "Vi prioriterer hvor synligheten bør styrkes.",
      "Vi fordeler ressurser etter kommersiell relevans.",
    ],
  },
  {
    label: "3. Aktivere og optimalisere",
    title: "Aktivere og optimalisere",
    points: [
      "SEO, annonsering, innhold og distribusjon brukes koordinert.",
      "Tiltakene bygges i en samlet modell over tid.",
      "Aktiviteter justeres når signalbildet endres.",
    ],
  },
  {
    label: "4. Måle kommersiell effekt",
    title: "Måle kommersiell effekt",
    points: [
      "Vi følger utviklingen i synlighet, trafikk og etterspørsel.",
      "Vi vurderer hvilke aktiviteter som skaper verdi.",
      "Prioritering oppdateres løpende med faktiske signaler.",
    ],
  },
];

const pricingTiers = [
  {
    name: "SEO",
    price: "Fra NOK 16 000 / mnd",
    audience:
      "For virksomheter som trenger bedre struktur, teknisk kvalitet og tydeligere organisk synlighet.",
    focus: ["teknisk SEO", "innholdsstruktur", "AI-synlighet"],
    href: "/tjenester/digital-markedsforing/seo",
    hrefLabel: "Se full side",
  },
  {
    name: "Performance marketing",
    price: "Fra NOK 18 000 / mnd",
    audience:
      "For virksomheter som ønsker løpende optimalisering, testing og koordinering på tvers av kanaler.",
    focus: ["Google Ads", "Paid social", "kanalstrategi og attribusjon"],
    recommended: true,
    href: "/tjenester/digital-markedsforing/performance",
    hrefLabel: "Se full side",
  },
  {
    name: "Clarity Intelligence",
    price: "Fra NOK 18 000 / mnd",
    audience:
      "For virksomheter som trenger tydeligere rapportering, signalvalidering og et sterkere beslutningsgrunnlag.",
    focus: ["måling og attribusjon", "datavalidering", "dashboard og rapportering"],
    href: "/tjenester/digital-markedsforing/analyse",
    hrefLabel: "Se full side",
  },
];

const faqItems = [
  {
    q: "Hvordan vet dere hvilke kanaler som passer?",
    a: "Vi starter ikke med kanaler. Vi starter med marked, synlighet og forretningsmål. Deretter vurderer vi hvilke aktiviteter som faktisk støtter vekst.",
  },
  {
    q: "Jobber dere med både merkevare og salg?",
    a: "Ja. De fleste virksomheter trenger en kombinasjon av synlighet, etterspørsel og konvertering over tid.",
  },
  {
    q: "Hvordan måles effekt?",
    a: "Vi kombinerer analyse, attribusjon og kommersielle signaler for å forstå hvilke aktiviteter som påvirker resultatene.",
  },
  {
    q: "Kan dere samarbeide med interne team?",
    a: "Ja. Vi jobber ofte tett med både interne markedsteam og eksterne partnere.",
  },
];

const caseStudies: CaseStudyContent[] = [
  {
    id: "fjord",
    toggleLabel: "Fjord",
    title: "Fra lokal synlighet til internasjonal etterspørsel",
    subtitle:
      "Internasjonal synlighetsstrategi for en norsk reiselivsaktør.",
    imageSrc: "/apriil-digital/assets/Fjord-case study.png",
    imageAlt:
      "Anonymisert casevisual som viser overgangen fra lokal synlighet til internasjonal discoverability",
    intro:
      "Dette caset er en anonymisert versjon av en stor norsk reiselivs- og fergeaktør. Selskapet hadde sterk transaksjonell synlighet, branded traffic og bookingtrafikk, men svak internasjonal synlighet for travel inspiration, fjord discovery og planning-stage searches.",
    challenge:
      "Synligheten lå i stor grad nederst i trakten. Virksomheten manglet topical authority internasjonalt, strukturert informasjonsinnhold og tydelige overganger fra inspirasjon til booking.",
    insight:
      "Innsikten var at internasjonale søk på norske fjorder ofte handler om planlegging, sammenligning og oppdagelse, ikke direkte søk etter operatør eller rute.",
    approach:
      "Derfor flyttet vi modellen fra transaksjonelle søk til visibility across the full search journey. Apriil etablerte en structured content ecosystem med answer engine optimisation, pillar pages, supporting content clusters, internlenking, FAQ-strukturer og schema implementation. Strategien bandt early-stage travel demand from inspiration to booking i ett sammenkoblet synlighetssystem.",
    outcomes: [
      "sterkere internasjonal synlighet utenfor branded søk",
      "klarere booking pathways mellom innhold og transaksjon",
      "forbedret thematic authority i engelskspråklige markeder",
      "økt qualified traffic og bedre discoverability",
    ],
  },
  {
    id: "oppskrift",
    toggleLabel: "Oppskrift",
    title: "Fra innholdsproduksjon til tydeligere synlighet",
    subtitle:
      "AI-tilpasset innholdsstruktur for en stor norsk innholdsplattform.",
    imageSrc: "/melk-case study.png",
    imageAlt: "Anonymisert visualisering av AI-tilpasset innholdsstruktur",
    intro:
      "Innholdsvolumet var høyt, merkevaren sterk og den organiske synligheten betydelig.",
    challenge:
      "Utfordringen var ikke lenger rangering alene, men hvordan AI overviews, zero-click behaviour og answer extraction flyttet verdi fra klikk til svarflater.",
    insight:
      "Hvis søkemotorer velger å svare uten klikk, er det som regel fordi det gir en bedre brukeropplevelse. Vi kjemper ikke mot det - vi designer for det.",
    approach:
      "Apriil bygget en answer-first structure med tydelig content hierarchy, FAQ-strukturer, schema, extraction-friendly formatering og AI-readable content. Arbeidet var forankret i machine understanding of people, ikke reverse engineering av algoritmer. Traffic is redistributed - not disappearing. Målet var visibility beyond clicks og bedre visibility in AI-generated answers.",
    outcomes: [
      "forbedret synlighet gjennom tydeligere informasjonsstruktur",
      "sterkere extraction inn i AI-svar",
      "mer effektiv bruk av eksisterende innholdsbase",
      "bedre samsvar mellom innhold og endret søkeatferd",
    ],
  },
];

export default function DigitalMarkedsforingPage() {
  return (
    <main className="w-full px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <div className="w-full space-y-20 md:space-y-24">
        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.9]">
              Markedsføring som styres av inntekt. Ikke kanaler.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-apriil-muted md:text-[1.22rem]">
              Apriil hjelper virksomheter med å samle analyse, synlighet og
              medieinvesteringer i én tydelig vekstmodell. Målet er tydeligere
              prioriteringer, sterkere synlighet og bedre beslutningsgrunnlag.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPillLink href="#kontakt-skjema">Snakk med oss</CtaPillLink>
            </div>
          </div>
          <StrategicSystemAnimation />
        </section>

        <section id="metodikk" className="border-t border-apriil-line/70 pt-12">
          <div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Markedsføring fungerer best når retningen er tydelig.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              De fleste virksomheter investerer i flere kanaler enn nødvendig
              uten å vite hvilke aktiviteter som faktisk påvirker synlighet,
              etterspørsel og vekst. Clarity er utviklet for å gjøre
              prioritering enklere.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apriil-muted">
                Clarity-metoden
              </p>
              <ul className="mt-5 space-y-4 text-base leading-8 text-apriil-muted">
                <li className="border-t border-apriil-line/80 pt-4">
                  1. Forstå marked og signaler
                </li>
                <li className="border-t border-apriil-line/80 pt-4">
                  2. Prioritere riktig
                </li>
                <li className="border-t border-apriil-line/80 pt-4">
                  3. Aktivere og optimalisere
                </li>
                <li className="border-t border-apriil-line/80 pt-4">
                  4. Måle kommersiell effekt
                </li>
              </ul>
            </div>
            <MethodologyGrid steps={methodologySteps} />
          </div>
        </section>

        <section id="serviceokosystem" className="border-t border-apriil-line/70 pt-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Tjenester
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Strategiske kapabiliteter
            </h2>
          </div>
          <div className="mt-12">
            <ServiceGridHero cards={serviceCards} />
          </div>
        </section>

        <CaseStudyToggle studies={caseStudies} />

        <section className="border-t border-apriil-line/70 pt-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Prismodell
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Rådgivning strukturert etter ambisjon og kompleksitet.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Prisnivå følger graden av styringsbehov, operativ involvering og
              beslutningskompleksitet.
            </p>
          </div>
          <div className="mt-12">
            <PricingGrid tiers={pricingTiers} />
          </div>
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              FAQ
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Vanlige spørsmål før oppstart.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Her er de vanligste spørsmålene fra virksomheter som vurderer en
              mer strategisk og kanalagnostisk markedsmodell.
            </p>
          </div>
          <div className="divide-y divide-apriil-line/80 rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4]">
            {faqItems.map((item) => (
              <details key={item.q} className="group px-6 py-5">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.02em] text-apriil-dark">
                  {item.q}
                </summary>
                <p className="mt-3 text-base leading-8 text-apriil-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
