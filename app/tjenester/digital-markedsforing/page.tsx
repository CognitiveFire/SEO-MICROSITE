import type { Metadata } from "next";
import {
  CaseStudyGrid,
  MethodologyGrid,
  PricingGrid,
  ServiceGridHero,
  type ServiceCard,
  StrategicSystemAnimation,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Digital markedsføring | Apriil",
  description:
    "Kommersiell intelligens på tvers av kanaler: Apriil prioriterer synlighet, signaler og kanalvalg strategisk for målbar kommersiell effekt.",
};

const serviceCards: ServiceCard[] = [
  {
    title: "SEO - søkemotoroptimalisering",
    body: "Vi bygger synlighet gjennom teknisk kvalitet, riktig innholdsstruktur og tydelige kommersielle prioriteringer.",
    href: "/tjenester/digital-markedsforing/seo",
    icon: "seo",
  },
  {
    title: "Betalt media",
    body: "Vi styrer betalt media med klar kanalrolle, bedre signalgrunnlag og tydelig retning for investeringene.",
    href: "/tjenester/digital-markedsforing/performance",
    icon: "paid",
  },
  {
    title: "Programmatisk annonsering",
    body: "Vi bruker programmatisk annonsering for presis distribusjon med kontroll på kvalitet, frekvens og kommersiell effekt.",
    href: "/tjenester/digital-markedsforing/programmatic",
    icon: "programmatic",
  },
  {
    title: "Podcast",
    body: "Vi utvikler podcastspor som bygger tillit over tid og styrker posisjon i prioriterte segmenter.",
    href: "/tjenester/digital-markedsforing/podcast",
    icon: "podcast",
  },
  {
    title: "DOOH / utendørs",
    body: "Vi planlegger digitale utendørsflater som en strategisk del av den totale mediemiksen.",
    href: "/tjenester/digital-markedsforing/dooh",
    icon: "dooh",
  },
  {
    title: "Creator-nettverk",
    body: "Vi strukturerer creatorsamarbeid med tydelig rolle i etterspørselsarbeidet og kommersiell retning.",
    href: "/tjenester/digital-markedsforing/creator-network",
    icon: "creator",
  },
  {
    title: "Sosiale medier",
    body: "Vi bruker sosiale kanaler for tydelig budskap, sterkere relevans og bedre kobling til forretningsmål.",
    href: "/tjenester/digital-markedsforing/social",
    icon: "social",
  },
  {
    title: "Video",
    body: "Vi bruker video for å forklare, forsterke og skape tydeligere beslutningsstøtte i markedet.",
    href: "/contact",
    icon: "video",
  },
  {
    title: "Display",
    body: "Vi planlegger display som en del av en samlet distribusjonsmodell med klar rolle og effekt.",
    href: "/contact",
    icon: "display",
  },
];

const methodologySteps = [
  {
    label: "Steg 1",
    title: "Forretningskontekst og signaldiagnose",
    points: [
      "Kartlegging av mål, margin og vekstkrav",
      "Analyse av eksisterende synlighetssignaler",
      "Identifisering av tapte kommersielle muligheter",
      "Prioritering av beslutningskritiske datakilder",
    ],
  },
  {
    label: "Steg 2",
    title: "Kanalnøytral prioritering",
    points: [
      "Valg av kanalmiks etter effekt, ikke aktivitet",
      "Klare roller mellom SEO, media og innhold",
      "Sekvensering av tiltak etter forretningsverdi",
      "Tydelig ansvar i tverrfaglig leveransemodell",
    ],
  },
  {
    label: "Steg 3",
    title: "Kontinuerlig kommersiell styring",
    points: [
      "Løpende justering mot faktiske markedsrespons",
      "Samlet evaluering av signaler og resultater",
      "Reallokering av innsats mot høyere avkastning",
      "Operativ læring omsatt til ny prioritering",
    ],
  },
];

const caseStudies = [
  {
    title: "Retail med fragmentert etterspørsel",
    situation: "Sterk kanalaktivitet, men lav sammenheng mellom synlighet og salg.",
    challenge: "Investeringer ble fordelt historisk fremfor kommersielt.",
    actions: "Vi etablerte en kanalnøytral prioriteringsmodell med felles signalramme.",
    result: "Høyere konverteringskvalitet og tydeligere effekt av medieinvesteringene.",
  },
  {
    title: "B2B med lang beslutningsreise",
    situation: "Mange kontaktpunkter, men svak progresjon fra interesse til forespørsel.",
    challenge: "Innhold, SEO og paid jobbet uten felles retning.",
    actions: "Vi koblet kanalroller til fasene i kjøpsreisen og styrte etter signalstyrke.",
    result: "Bedre etterspørselskvalitet og mer presis prioritering av tiltak over tid.",
  },
];

const pricingTiers = [
  {
    name: "Clarity Foundation",
    price: "Fra 65 000 / mnd",
    audience: "For virksomheter som trenger tydelig prioritering og sterkere styring av eksisterende kanalinnsats.",
    focus: [
      "Kanalnøytral prioriteringsmodell",
      "Månedlig kommersiell styringsforum",
      "Felles signal- og effektbilde",
    ],
  },
  {
    name: "Clarity Growth",
    price: "Fra 110 000 / mnd",
    audience: "For virksomheter som vil skalere etterspørsel med tett samspill mellom strategi, innhold, SEO og paid.",
    focus: [
      "Tverrfaglig operativ modell",
      "Dynamisk reallokering av kanalmiks",
      "Kontinuerlig optimalisering mot margin og vekst",
    ],
    recommended: true,
  },
  {
    name: "Clarity Enterprise",
    price: "Etter avtale",
    audience: "For komplekse organisasjoner med flere markeder, høy beslutningskompleksitet og store investeringsrammer.",
    focus: [
      "Eget strategisk rådgiverteam",
      "Avansert beslutningsstøtte og scenarioarbeid",
      "Ledelsesforankret styringsmodell for kommersiell effekt",
    ],
  },
];

const faqItems = [
  {
    q: "Hvordan velger dere hvilke kanaler vi skal bruke?",
    a: "Vi velger ikke kanaler først. Vi vurderer forretningsmål, signalstyrke, beslutningsreise og kommersiell risiko før vi prioriterer kanalmiks.",
  },
  {
    q: "Hva betyr kanalagnostisk i praksis?",
    a: "Det betyr at vi ikke forsvarer en kanal fordi den er kjent eller internfavoritt. Vi styrer innsatsen dit effekten faktisk kan dokumenteres.",
  },
  {
    q: "Hvordan jobber dere med løpende prioritering?",
    a: "Vi bruker en kontinuerlig beslutningssyklus der vi oppdaterer prioritering ut fra nye signaler, resultater og endret markedssituasjon.",
  },
  {
    q: "Kan vi starte med en avgrenset leveranse?",
    a: "Ja. Vi starter ofte med en Clarity-diagnose som etablerer felles retning og konkret handlingsrekkefølge for de neste 90 dagene.",
  },
];

export default function DigitalMarkedsforingPage() {
  return (
    <main className="w-full px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <div className="w-full space-y-20 md:space-y-24">
        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Kommersiell intelligens
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.94]">
              Klarhet før kanalvalg.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Apriil bygger kommersiell effekt ved å koordinere signaler,
              synlighet og investeringer på tvers av kanaler. Vi prioriterer
              etter forretningsverdi, ikke etter aktivitet.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted">
              Resultatet er en sammenkoblet arbeidsmodell der hvert tiltak har
              en tydelig rolle i vekstreisen.
            </p>
          </div>
          <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apriil-muted">
              Strategisk posisjonering
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-apriil-muted">
              <li className="border-t border-apriil-line/80 pt-4">
                Vi kobler kanalvalg direkte til kommersielle prioriteringer.
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                Vi styrer etter signaler som påvirker etterspørsel og margin.
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                Vi bygger en robust beslutningsstruktur på tvers av fag.
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                Vi optimaliserer kontinuerlig mot kommersiell effekt.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Hvordan vi jobber
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Strukturert arbeid fra signal til beslutning.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Clarity-metodikken gir en tydelig beslutningsrytme der analyse,
              prioritering og gjennomføring er koblet sammen i ett operativt
              system.
            </p>
          </div>
          <MethodologyGrid steps={methodologySteps} />
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Kommersiell filosofi
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Ikke flere kanaler. Bedre prioritering.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Vi skiller mellom aktivitet og effekt. Derfor evaluerer vi alltid
              hvilke kanaler som faktisk bør aktiveres, i hvilken rekkefølge,
              og med hvilken rolle i totalmodellen.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              {
                title: "Kanalagnostisk styring",
                body: "Vi velger ikke kanal fordi den er kjent. Vi velger kanal fordi den løser en prioritert kommersiell oppgave.",
              },
              {
                title: "Felles signalgrunnlag",
                body: "SEO, paid, innhold og distribusjon vurderes i samme beslutningsramme med tydelige kriterier.",
              },
              {
                title: "Kontinuerlig re-prioritering",
                body: "Når marked, signaler eller mål endrer seg, endrer vi miksen raskt og strukturert.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="apriil-editorial-surface rounded-[14px] border border-apriil-line/80 p-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-apriil-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Strategisk systemvisualisering
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Kanalmiksen organiseres rundt kommersiell effekt.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-apriil-muted md:text-lg">
              Visualiseringen viser hvordan ulike kanaler aktiveres, tones ned og
              re-prioriteres ut fra forretningsbehov, ikke kanalpreferanser.
            </p>
          </div>
          <StrategicSystemAnimation />
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Serviceøkosystem
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Kapabiliteter som følger av strategien.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Tjenestene er organisert som et sammenkoblet økosystem. Hver
              kapabilitet aktiveres når den styrker den kommersielle prioriteten.
            </p>
          </div>
          <ServiceGridHero cards={serviceCards} />
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Case studies
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Når prioritering blir operativ, blir effekten målbar.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Vi dokumenterer hvordan tydeligere kanalrolle og bedre
              signalforståelse skaper mer robust kommersiell utvikling.
            </p>
          </div>
          <CaseStudyGrid studies={caseStudies} />
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
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
          <PricingGrid tiers={pricingTiers} />
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
