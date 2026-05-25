import type { Metadata } from "next";
import Image from "next/image";
import {
  MethodologyGrid,
  PricingGrid,
  ServiceGridHero,
  type ServiceCard,
  StrategicSystemAnimation,
} from "@/components/digital-markedsforing/ui";
import { CtaPillLink } from "@/components/cta-pill";

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
    title: "Sosiale medier",
    body: "Innhold og distribusjon tilpasset kanal og målgruppe.",
    href: "/tjenester/digital-markedsforing/sosiale-medier",
    icon: "social",
  },
  {
    title: "Video",
    body: "Innhold som forklarer, bygger tillit og forsterker synlighet.",
    href: "/tjenester/digital-markedsforing/video",
    icon: "video",
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
    title: "Display",
    body: "Digital distribusjon brukt for å styrke synlighet og rekkevidde.",
    href: "/tjenester/digital-markedsforing/display",
    icon: "display",
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
      "Vi avdekker hvor virksomheten taper oppmerksomhet.",
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

export default function DigitalMarkedsforingPage() {
  return (
    <main className="w-full px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <div className="w-full space-y-20 md:space-y-24">
        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.9]">
              Markedsføring som styres av inntekt. Ikke kanaler.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-apriil-muted md:text-[1.22rem]">
              Apriil hjelper virksomheter med å samle analyse, synlighet og
              medieinvesteringer i én tydelig vekstmodell. Målet er tydeligere
              prioriteringer, sterkere synlighet og bedre beslutningsgrunnlag.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPillLink href="/contact">Snakk med oss</CtaPillLink>
            </div>
          </div>
          <StrategicSystemAnimation />
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              De fleste virksomheter har nok kanaler. Utfordringen er retning.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Mange markedsføringsmiljøer jobber i separate spor. SEO
              optimaliseres isolert. Kampanjer kjøres uten tydelig sammenheng
              med etterspørsel. Rapportering viser aktivitet, men ikke
              nødvendigvis hva som faktisk påvirker vekst.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Apriil jobber annerledes.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Vi jobber med analyse, synlighet, innhold og distribusjon samlet.
              Det gjør det enklere å prioritere riktig og skape tydeligere
              sammenheng mellom aktivitet og effekt.
            </p>
          </div>
          <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Kommersiell intelligens
            </p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-apriil-muted">
              <li className="border-t border-apriil-line/80 pt-4">
                visibility across the full search journey
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                answer engine optimisation
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                topical authority
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                structured content ecosystem
              </li>
            </ul>
          </div>
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

        <section className="border-t border-apriil-line/70 pt-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Case-eksempler
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Fra lokal synlighet til internasjonal etterspørsel
            </h2>
            <p className="mt-4 text-base leading-8 text-apriil-muted">
              Internasjonal synlighetsstrategi for en norsk reiselivsaktør.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-base leading-8 text-apriil-muted">
                Dette caset er en anonymisert versjon av en stor norsk
                reiselivs- og fergeaktør. Selskapet hadde sterk transaksjonell
                synlighet, branded traffic og bookingtrafikk, men svak
                internasjonal synlighet for travel inspiration, fjord discovery
                og planning-stage searches.
              </p>
              <p className="mt-5 text-base leading-8 text-apriil-muted">
                Synligheten lå i stor grad nederst i trakten. Virksomheten
                manglet topical authority internasjonalt, strukturert
                informasjonsinnhold og tydelige overganger fra inspirasjon til
                booking.
              </p>
              <p className="mt-5 border-t border-apriil-line/80 pt-4 text-base leading-8 text-apriil-muted">
                Innsikten var at internasjonale søk på norske fjorder ofte
                handler om planlegging, sammenligning og oppdagelse, ikke
                direkte søk etter operatør eller rute.
              </p>
              <p className="mt-5 text-base leading-8 text-apriil-muted">
                Derfor flyttet vi modellen fra transaksjonelle søk til
                visibility across the full search journey. Apriil etablerte en
                structured content ecosystem med answer engine optimisation,
                pillar pages, supporting content clusters, internlenking,
                FAQ-strukturer og schema implementation.
              </p>
              <p className="mt-5 text-base leading-8 text-apriil-muted">
                Strategien bandt early-stage travel demand from inspiration to
                booking i ett sammenkoblet synlighetssystem.
              </p>
              <ul className="mt-6 space-y-3 text-base leading-8 text-apriil-muted">
                <li className="border-t border-apriil-line/80 pt-3">
                  sterkere internasjonal synlighet utenfor branded søk
                </li>
                <li className="border-t border-apriil-line/80 pt-3">
                  klarere booking pathways mellom innhold og transaksjon
                </li>
                <li className="border-t border-apriil-line/80 pt-3">
                  forbedret thematic authority i engelskspråklige markeder
                </li>
                <li className="border-t border-apriil-line/80 pt-3">
                  økt qualified traffic og bedre discoverability
                </li>
              </ul>
            </div>
            <div className="apriil-editorial-surface overflow-hidden rounded-[16px] border border-apriil-line/70">
              <div className="relative h-[360px] w-full border-b border-apriil-line/70">
                <Image
                  src="/apriil-digital/assets/Fjord-case study.png"
                  alt="Anonymisert casevisual som viser overgangen fra lokal synlighet til internasjonal discoverability"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <svg
                  className="h-[180px] w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line x1="10" y1="18" x2="90" y2="18" stroke="rgba(23,23,23,0.12)" strokeWidth="0.2" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(23,23,23,0.12)" strokeWidth="0.2" />
                  <line x1="10" y1="82" x2="90" y2="82" stroke="rgba(23,23,23,0.12)" strokeWidth="0.2" />
                  <path d="M12 78C26 70 36 58 49 54C64 49 74 36 88 22" fill="none" stroke="rgba(23,23,23,0.36)" strokeWidth="0.34" strokeDasharray="1.5 1" />
                  <path d="M15 62C31 56 40 48 54 45C70 42 79 34 88 27" fill="none" stroke="rgba(255,65,1,0.52)" strokeWidth="0.34" strokeDasharray="1.3 1.1" />
                  <circle cx="15" cy="71" r="2" fill="rgba(23,23,23,0.45)" />
                  <circle cx="50" cy="53" r="2.1" fill="rgba(23,23,23,0.58)" />
                  <circle cx="88" cy="24" r="2.1" fill="rgba(255,65,1,0.68)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-apriil-line/70 pt-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Case-eksempler
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Fra innholdsproduksjon til tydeligere synlighet
            </h2>
            <p className="mt-4 text-base leading-8 text-apriil-muted">
              AI-tilpasset innholdsstruktur for en stor norsk innholdsplattform.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="apriil-editorial-surface overflow-hidden rounded-[16px] border border-apriil-line/70">
              <div className="relative h-[360px] w-full border-b border-apriil-line/70 md:h-[420px]">
                <Image
                  src="/melk-case study.png"
                  alt="Anonymisert visualisering av AI-tilpasset innholdsstruktur"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 56vw, 100vw"
                />
              </div>
              <div className="grid gap-3 p-6 text-[11px] uppercase tracking-[0.12em] text-apriil-muted md:grid-cols-2 md:p-8">
                <span className="rounded-full border border-apriil-line/80 px-3 py-1 text-center">answer-first structure</span>
                <span className="rounded-full border border-apriil-line/80 px-3 py-1 text-center">AI-readable content</span>
                <span className="rounded-full border border-apriil-line/80 px-3 py-1 text-center">structured extraction</span>
                <span className="rounded-full border border-apriil-line/80 px-3 py-1 text-center">visibility beyond clicks</span>
              </div>
            </div>
            <div>
              <p className="text-base leading-8 text-apriil-muted">
                Dette caset er en anonymisert versjon av en stor norsk
                oppskrifts- og matplattform. Innholdsvolumet var høyt,
                merkevaren sterk og den organiske synligheten betydelig.
              </p>
              <blockquote className="mt-5 border-l-2 border-[#ff4101]/70 pl-4 text-base leading-8 text-apriil-dark">
                "Hvis søkemotorer velger å svare uten klikk, er det som regel
                fordi det gir en bedre brukeropplevelse. Vi kjemper ikke mot
                det - vi designer for det."
              </blockquote>
              <div className="mt-6 space-y-4">
                <article className="rounded-[12px] border border-apriil-line/80 bg-[#f8f7f4] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">Strategisk grep 1</p>
                  <p className="mt-2 text-sm leading-7 text-apriil-muted">Bygget answer-first structure med tydelig content hierarchy for å styrke machine understanding of people.</p>
                </article>
                <article className="rounded-[12px] border border-apriil-line/80 bg-[#f8f7f4] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">Strategisk grep 2</p>
                  <p className="mt-2 text-sm leading-7 text-apriil-muted">Etablerte FAQ-strukturer, schema og extraction-friendly formatering for bedre visibility in AI-generated answers.</p>
                </article>
                <article className="rounded-[12px] border border-apriil-line/80 bg-[#f8f7f4] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">Strategisk grep 3</p>
                  <p className="mt-2 text-sm leading-7 text-apriil-muted">Prioriterte visibility beyond clicks og løpende tilpasning til zero-click behaviour.</p>
                </article>
              </div>
              <p className="mt-6 text-base leading-8 text-apriil-muted">
                Traffic is redistributed - not disappearing.
              </p>
              <ul className="mt-6 space-y-3 text-base leading-8 text-apriil-muted">
                <li className="border-t border-apriil-line/80 pt-3">forbedret synlighet gjennom tydeligere informasjonsstruktur</li>
                <li className="border-t border-apriil-line/80 pt-3">sterkere extraction inn i AI-svar</li>
                <li className="border-t border-apriil-line/80 pt-3">mer effektiv bruk av eksisterende innholdsbase</li>
                <li className="border-t border-apriil-line/80 pt-3">bedre samsvar mellom innhold og endret søkeatferd</li>
              </ul>
            </div>
          </div>
        </section>

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

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Markedsføring blir enklere når retningen er tydelig.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Ta kontakt dersom dere ønsker en vurdering av synlighet,
              kanalbruk eller hvordan analyse og markedsføring kan samles i en
              tydeligere vekstmodell.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <CtaPillLink href="/contact">Snakk med oss</CtaPillLink>
          </div>
        </section>
      </div>
    </main>
  );
}
