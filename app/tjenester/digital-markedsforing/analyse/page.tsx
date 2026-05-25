import type { Metadata } from "next";
import {
  CapabilityGrid,
  CaseStudyGrid,
  HeroActions,
  MethodologyGrid,
  PricingGrid,
  SectionContainer,
  SignalFlowVisual,
} from "@/components/digital-markedsforing/ui";
import { CtaPillLink } from "@/components/cta-pill";
import { ServiceSubmenu } from "@/components/digital-markedsforing/service-submenu";

export const metadata: Metadata = {
  title: "Analyse | Digital markedsforing | Apriil",
  description:
    "Analyse og beslutningsstotte fra Apriil for virksomheter som trenger klarere prioriteringer, bedre signalgrunnlag og en mer robust vekstmodell.",
};

export default function AnalyseSubPage() {
  return (
    <main>
      <div className="px-6 pt-8 md:px-10 md:pt-10 xl:px-16">
        <ServiceSubmenu />
      </div>

      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="w-full grid gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Analyse
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              Bedre beslutninger starter med klarere signaler.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Vi rydder i signalgrunnlaget og bygger en modell som gjor
              prioriteringer enklere.
            </p>
            <HeroActions />
          </div>
          <SignalFlowVisual />
        </div>
      </section>

      <SectionContainer
        eyebrow="Utgangspunkt"
        title="Mange virksomheter har data. Fa har klarhet."
        intro="Utfordringen er sjelden datamangel. Utfordringen er retning."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Frakoblede systemer med ulike sannheter.",
            "Lav trygghet i attribusjon.",
            "Kanalteam uten felles prioriteringslogikk.",
            "Rapporter som beskriver aktivitet, ikke retning.",
            "Uklare signaler i kritiske beslutningspunkter.",
            "Manglende felles styringssprak mellom ledelse og marked.",
          ].map((item) => (
            <article key={item} className="border-t border-apriil-line/80 pt-4">
              <p className="text-base leading-8 text-apriil-muted">{item}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        id="metodikk"
        eyebrow="Metodikk"
        title="Clarity-metodikken i fire steg"
        intro="Modellen brukes for a koble data, synlighet og markedsforing til en felles beslutningsstruktur."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Steg 1",
              title: "Kartlegging",
              points: [
                "Datakilder",
                "Kundereiser",
                "Malestruktur",
                "Signalkvalitet",
              ],
            },
            {
              label: "Steg 2",
              title: "Validering",
              points: [
                "Attribusjon",
                "Tracking",
                "Konsistens",
                "Beslutningsgrunnlag",
              ],
            },
            {
              label: "Steg 3",
              title: "Prioritering",
              points: [
                "Tiltaksrekkefolge",
                "Kanalanbefaling",
                "Investeringsretning",
                "Ansvar",
              ],
            },
            {
              label: "Steg 4",
              title: "Styring",
              points: [
                "Lopende review",
                "Rapportering",
                "Strategiske justeringer",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Kapasiteter"
        title="Analysekapasitet for kommersiell styring"
      >
        <CapabilityGrid
          capabilities={[
            {
              title: "Maling og attribusjon",
              body: "Rammeverk som viser hvilke aktiviteter som faktisk bidrar til verdi.",
            },
            {
              title: "Datavalidering",
              body: "Kvalitetssikring av kilder, definisjoner og malepunkter.",
            },
            {
              title: "Signalforstaelse",
              body: "Oversettelse av data til tydelige prioriteringer i leder- og fagmoter.",
            },
            {
              title: "Rapportering",
              body: "Kort, tydelig rapportering med retning og konsekvens.",
            },
            {
              title: "Tracking governance",
              body: "Robust tracking som star seg over tid og pa tvers av plattformer.",
            },
            {
              title: "Kanalanalyse",
              body: "Vurdering av hver kanals rolle i den samlede vekstmodellen.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Eksempler pa bedre beslutningskvalitet"
      >
        <CaseStudyGrid
          studies={[
            {
              title: "Nasjonal tjenestevirksomhet",
              situation:
                "Rapportering fra flere systemer uten felles konklusjon.",
              challenge:
                "Lav tillit til datagrunnlaget i budsjettbeslutninger.",
              actions:
                "Bygget felles signalmodell og tydelig valideringsprosess.",
              result:
                "Hoyere trygghet i prioriteringer og mer presis allokering av investeringer.",
            },
            {
              title: "Regional handelskjede",
              situation: "Store regionale avvik i kanalresultater.",
              challenge:
                "Mangler i beslutningsgrunnlaget for riktig mediemiks.",
              actions: "Etablerte ny styringsrytme med faste signalreviews.",
              result: "Mer konsistent effekt og tydeligere lederrapportering.",
            },
            {
              title: "Skalerende B2B-aktor",
              situation:
                "Høy aktivitet, men svak sammenheng mellom innsats og effekt.",
              challenge: "Manglende modell for prioritering pa tvers av team.",
              actions:
                "Definerte styringsmodell og tydelige beslutningspunkter.",
              result:
                "Raskere og tryggere prioriteringer i kommersielle tiltak.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Retainere"
        title="Strategiske analysepartnerskap"
      >
        <PricingGrid
          tiers={[
            {
              name: "Innsikt",
              price: "Fra NOK 18 000 / mnd",
              audience:
                "For virksomheter som trenger tydeligere rapportering og tryggere grunnlag.",
              focus: [
                "Baseline-vurdering av datagrunnlag",
                "Fast rapporteringsstruktur",
                "Maanedlig strategisk oppsummering",
              ],
            },
            {
              name: "Clarity",
              price: "Fra NOK 34 000 / mnd",
              audience:
                "For virksomheter som trenger lopende analyse pa tvers av kanaler.",
              focus: [
                "Kontinuerlig validering av signaler",
                "Prioriteringsstotte i faste intervaller",
                "Tettere kobling mellom data og tiltak",
              ],
              recommended: true,
            },
            {
              name: "Strategisk analysepartner",
              price: "Fra NOK 62 000 / mnd",
              audience:
                "For storre organisasjoner med hoy kompleksitet og behov for lederforankret styring.",
              focus: [
                "Lederrettet beslutningsgrunnlag",
                "Governance pa tvers av team",
                "Integrert vekstanalyse over tid",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="God markedsforing starter med a forsta hva som faktisk virker.">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi kan gi en konkret vurdering av dagens signalgrunnlag og neste
            riktige prioritering.
          </p>
          <CtaPillLink href="#kontakt-skjema" className="mt-5 md:mt-0">
            Snakk med oss
          </CtaPillLink>
        </div>
      </SectionContainer>
    </main>
  );
}
