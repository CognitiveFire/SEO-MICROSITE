import type { Metadata } from "next";
import Link from "next/link";
import {
  CapabilityGrid,
  CaseStudyGrid,
  HeroActions,
  MethodologyGrid,
  PricingGrid,
  SectionContainer,
  SignalFlowVisual,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Analyse | Digital markedsføring | Apriil",
  description:
    "Apriil hjelper virksomheter med analyse og beslutningsstøtte som gir tydeligere prioriteringer, høyere kvalitet i signalene og bedre kommersielle valg.",
};

export default function AnalyseSubPage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]">Analyse</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.95]">
              Bedre beslutninger starter med bedre signaler.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Apriil hjelper virksomheter med å forstå hvilke aktiviteter som faktisk påvirker synlighet, etterspørsel og vekst.
              Målet er ikke mer rapportering. Målet er tydeligere prioriteringer.
            </p>
            <HeroActions />
          </div>
          <SignalFlowVisual />
        </div>
      </section>

      <SectionContainer
        eyebrow="Utgangspunkt"
        title="Mange virksomheter har data. Få har klarhet."
        intro="Utfordringen er sjelden mangel på tall. Utfordringen er å vite hvilke signaler som skal styre prioriteringene."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            "For mange frakoblede systemer med ulike sannheter.",
            "Utydelig attribusjon som svekker budsjettbeslutninger.",
            "Kanalteam som jobber parallelt uten felles styringsramme.",
            "Rapportering som beskriver aktivitet, men ikke retning.",
            "Svak signalkvalitet i kritiske beslutningspunkter.",
            "Usikkerhet rundt hva som faktisk driver vekst.",
          ].map((item) => (
            <article key={item} className="rounded-[16px] border border-apriil-line/80 bg-white p-6">
              <p className="text-base leading-8 text-apriil-muted md:text-lg">{item}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        eyebrow="Clarity-metodikk"
        title="Clarity samler analyse, synlighet og markedsføring i én modell."
        intro="Dette er kjernen i hvordan vi bygger et styringsgrunnlag som fungerer i praksis."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Steg 1",
              title: "Kartlegging",
              points: ["Datakilder", "Signaler", "Kundereiser", "Målestruktur"],
            },
            {
              label: "Steg 2",
              title: "Validering",
              points: ["Datakvalitet", "Attribusjon", "Sporing", "Beslutningsgrunnlag"],
            },
            {
              label: "Steg 3",
              title: "Prioritering",
              points: [
                "Hvilke tiltak som påvirker vekst",
                "Hvilke kanaler som skaper verdi",
                "Hva som bør forbedres",
              ],
            },
            {
              label: "Steg 4",
              title: "Optimalisering",
              points: ["Kontinuerlig læring", "Rapportering", "Testing", "Styringsgrunnlag"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Kapasiteter"
        title="Analysekapasitet bygget for kommersiell styring."
      >
        <CapabilityGrid
          capabilities={[
            {
              title: "Måling og attribusjon",
              body: "Etablerer et rammeverk som viser hvilke aktiviteter som faktisk bidrar til verdi.",
            },
            {
              title: "Datavalidering",
              body: "Sikrer kvalitet i kilder, struktur og målepunkter før beslutninger tas.",
            },
            {
              title: "Signalforståelse",
              body: "Oversetter signaler til praktiske prioriteringer for ledelse og marked.",
            },
            {
              title: "Dashboard og rapportering",
              body: "Rapporter med tydelig retning, ikke bare oppsummering av aktivitet.",
            },
            {
              title: "GTM og tracking",
              body: "Robust innsamling av data som tåler endringer i plattformer og personvernkrav.",
            },
            {
              title: "Consent mode",
              body: "Gir bedre balanse mellom etterlevelse, datakvalitet og kommersiell styring.",
            },
            {
              title: "SEO og synlighetsanalyse",
              body: "Kobler etterspørsel, innhold og synlighet i et felles beslutningsgrunnlag.",
            },
            {
              title: "Kanalanalyse",
              body: "Synliggjør hvilken rolle hver kanal bør ha i den samlede vekstmodellen.",
            },
            {
              title: "CRO-analyse",
              body: "Identifiserer hvor friksjon oppstår, og hvilke tiltak som gir høyest effekt.",
            },
            {
              title: "AI visibility analysis",
              body: "Vurderer synlighet i AI-drevne svarflater og hvordan informasjonen deres blir valgt.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Eksempler på forbedret beslutningskvalitet og kommersiell effekt."
      >
        <CaseStudyGrid
          studies={[
            {
              title: "Nasjonal tjenesteaktør",
              situation: "Rapportering fra flere systemer uten tydelig felles bilde.",
              challenge: "Lav tillit til attribusjon og krevende budsjettprioritering.",
              actions: "Bygget ny signalmodell og validerte målestruktur på tvers av kanaler.",
              result: "Betydelig høyere attribusjonstrygghet og mer presis budsjettallokering.",
            },
            {
              title: "Regional handelskjede",
              situation: "Store variasjoner i kanalresultater mellom regioner.",
              challenge: "Usikkerhet rundt hva som drev lønnsom vekst.",
              actions: "Etablerte Clarity-rammeverk med felles prioriteringsrytme.",
              result: "Redusert ineffektiv spend og klarere ledelsesrapportering måned for måned.",
            },
            {
              title: "Skalerende B2B-virksomhet",
              situation: "Høy aktivitet, men svak sammenheng mellom data og kommersielle beslutninger.",
              challenge: "Manglende styringsgrunnlag for kanalprioritering.",
              actions: "Forbedret datakvalitet, signalforståelse og beslutningsstøtte i ledermøter.",
              result: "Bedre prioritering av tiltak og tydeligere forståelse av vekstdrivere.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Prisnivåer"
        title="Strategiske retainere for analyse og beslutningsstøtte."
      >
        <PricingGrid
          tiers={[
            {
              name: "Innsikt",
              price: "Fra NOK 18 000 / mnd",
              audience: "For virksomheter som trenger klarere rapportering og tryggere målegrunnlag.",
              focus: [
                "Baseline-gjennomgang av tracking og datagrunnlag",
                "Tydelig rapporteringsstruktur med faste prioriteringer",
                "Månedlige innsikter og strategiske anbefalinger",
              ],
            },
            {
              name: "Clarity",
              price: "Fra NOK 34 000 / mnd",
              audience: "For virksomheter som trenger løpende analyse på tvers av kanaler.",
              focus: [
                "Kontinuerlig analyse og validering av signaler",
                "Strategiske workshops og prioriteringsstøtte",
                "Bedre attribusjon og beslutningskvalitet over tid",
              ],
              recommended: true,
            },
            {
              name: "Strategisk analysepartner",
              price: "Fra NOK 62 000 / mnd",
              audience: "For større organisasjoner med behov for lederforankret styring og rådgivning.",
              focus: [
                "Lederrettet rapportering og beslutningsgrunnlag",
                "Attribusjonsstyring og governance på tvers av team",
                "Integrert vekstanalyse med BI-støtte og kontinuerlig optimalisering",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="God markedsføring starter med å forstå hva som faktisk virker.">
        <div className="rounded-[24px] border border-apriil-line/80 bg-white p-7 shadow-[0_14px_36px_rgba(23,23,23,0.06)] md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi hjelper dere å omsette data til prioriteringer som styrker vekstmodellen.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#e63322] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf2d1d]"
            >
              Book workshop
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-line px-7 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5"
            >
              Snakk med oss
            </Link>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
