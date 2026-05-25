import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyGrid,
  CapabilityGrid,
  EcosystemVisual,
  HeroActions,
  MethodologyGrid,
  PricingGrid,
  SectionContainer,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Digital markedsføring | Apriil",
  description:
    "Apriil bygger markedsføring som styres av inntekt, tydelige prioriteringer og sammenkoblet innsikt på tvers av SEO, betalt media og analyse.",
};

const serviceCards = [
  {
    title: "SEO",
    body: "Synlighet som bygger etterspørsel.",
    href: "/tjenester/digital-markedsforing/seo",
  },
  {
    title: "Betalt media",
    body: "Medieinvesteringer med tydelig retning.",
    href: "/tjenester/digital-markedsforing/betalt-media",
  },
  {
    title: "Analyse",
    body: "Beslutninger basert på faktiske data.",
    href: "/tjenester/digital-markedsforing/analyse",
  },
  {
    title: "Video",
    body: "Innhold som forklarer og forsterker.",
    href: "/contact",
  },
  {
    title: "Sosiale medier",
    body: "Tilstedeværelse med tydelig rolle.",
    href: "/contact",
  },
  {
    title: "Programmatic",
    body: "Distribusjon med presisjon.",
    href: "/contact",
  },
  {
    title: "DOOH",
    body: "Synlighet i det fysiske rommet.",
    href: "/contact",
  },
  {
    title: "Podcast",
    body: "Formater som bygger tillit over tid.",
    href: "/contact",
  },
  {
    title: "Creator network",
    body: "Distribusjon gjennom relevante profiler.",
    href: "/contact",
  },
];

export default function DigitalMarkedsforingPage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]">Digital markedsføring</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.95]">
              Markedsføring som styres av inntekt. Ikke kanaler.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Apriil hjelper norske virksomheter med å samle analyse, synlighet og annonsering i én tydelig vekstmodell.
              Målet er ikke flere aktiviteter. Målet er bedre beslutninger og sterkere resultater.
            </p>
            <HeroActions />
          </div>
          <EcosystemVisual />
        </div>
      </section>

      <SectionContainer
        id="hvordan-vi-jobber"
        eyebrow="Hvordan vi jobber"
        title="Bedre beslutninger gir bedre markedsføring."
        intro="Clarity gir et felles styringsgrunnlag for ledelse, marked og kanalteam."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Steg 1",
              title: "Forstå",
              points: ["Datakvalitet", "Kundereiser", "Synlighet", "Etterspørsel"],
            },
            {
              label: "Steg 2",
              title: "Prioritere",
              points: [
                "Hvilke tiltak som gir effekt",
                "Hvilke kanaler som støtter målene",
                "Hva som bør nedskaleres",
              ],
            },
            {
              label: "Steg 3",
              title: "Skalere",
              points: ["Kontinuerlig optimalisering", "Testing", "Medieinvesteringer", "Innholdsutvikling"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Tjenesteoversikt"
        title="Kapasiteter som bygges rundt forretningsmål."
        intro="Vi organiserer fag, kanaler og analyse i én kommersiell arbeidsmodell."
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-[16px] border border-apriil-line/80 bg-white p-5 transition hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">{service.title}</h3>
              <p className="mt-2 text-sm leading-7 text-apriil-muted">{service.body}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#a96436]">Gå videre →</p>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Dokumentert effekt fra virksomheter med komplekse markedsmodeller."
        intro="Anonymiserte eksempler fra oppdrag der målet var tydeligere prioriteringer og bedre kommersiell effekt."
      >
        <CaseStudyGrid
          studies={[
            {
              title: "Regional B2C-aktør",
              situation: "Høy medieaktivitet, men varierende avkastning på tvers av kanaler.",
              challenge: "Ledelsen manglet trygghet i hva som faktisk drev lønnsom vekst.",
              actions: "Samordnet SEO, betalt media og analyse i en felles prioriteringsmodell.",
              result: "28 % bedre budsjetteffektivitet og tydeligere beslutninger i kvartalsmøtene.",
            },
            {
              title: "Nasjonal tjenesteleverandør",
              situation: "Sterk synlighet, men svakt samsvar mellom trafikk og kommersielle mål.",
              challenge: "Lite kobling mellom innhold, annonsering og faktisk etterspørsel.",
              actions: "Bygget ny innholdsarkitektur og kanalstyring med felles signalvurdering.",
              result: "19 % høyere andel kvalifisert etterspørsel og raskere prioriteringssykluser.",
            },
            {
              title: "Kompleks retail-portefølje",
              situation: "Mange lokale initiativer uten samlet styring av investeringene.",
              challenge: "Store variasjoner i effekt mellom regioner og kanaler.",
              actions: "Etablerte Clarity-rammeverk med felles måling, testløp og styringspunkter.",
              result: "31 % reduksjon i lav-effekt spend og bedre kommersiell forutsigbarhet.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="Markedsføring blir enklere når retningen er tydelig.">
        <div className="rounded-[24px] border border-apriil-line/80 bg-white p-7 shadow-[0_14px_36px_rgba(23,23,23,0.06)] md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi hjelper dere å bygge en markedsmodell der innsikt, synlighet og investeringer peker i samme retning.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#e63322] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf2d1d]"
            >
              Snakk med oss
            </Link>
            <a
              href="#hvordan-vi-jobber"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-line px-7 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5"
            >
              Se hvordan vi jobber
            </a>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
