import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyGrid,
  HeroActions,
  MethodologyGrid,
  PricingGrid,
  SectionContainer,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Betalt media | Digital markedsforing | Apriil",
  description:
    "Apriil leverer betalt media-radgivning for virksomheter som trenger bedre investeringsstyring, tydeligere kanalroller og sterkere kommersiell effekt.",
};

export default function BetaltMediaSubPage() {
  return (
    <main>
      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="grid gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Betalt media
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              Betalt media som støtter hele vekstmodellen.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Betalt media skal støtte og forsterke etterspørsel - ikke skape
              aktivitet for aktivitetens skyld.
            </p>
            <HeroActions />
          </div>
          <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Strategisk posisjonering
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-apriil-muted">
              <li className="border-t border-apriil-line/80 pt-4">Search advertising</li>
              <li className="border-t border-apriil-line/80 pt-4">Social advertising</li>
              <li className="border-t border-apriil-line/80 pt-4">YouTube</li>
              <li className="border-t border-apriil-line/80 pt-4">Retargeting and attribution</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionContainer
        eyebrow="Arbeidsmodell"
        title="Tre styringsspor for betalt media"
        intro="Kanalvalg, budskap og beslutningskvalitet ma ses i sammenheng."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Spor 1",
              title: "Rolleavklaring",
              points: [
                "Kanalfunksjon",
                "Maalgrupper",
                "Investeringsrammer",
                "Forventet effekt",
              ],
            },
            {
              label: "Spor 2",
              title: "Gjennomforing",
              points: [
                "Kreativ retning",
                "Landingsside-samspill",
                "Testdesign",
                "Budsjettfordeling",
              ],
            },
            {
              label: "Spor 3",
              title: "Kommersiell vurdering",
              points: [
                "Signalkvalitet",
                "Attribusjon",
                "Prioritering",
                "Lopende justering",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Eksempler pa styrket mediestyring"
        intro="Anonymiserte oppdrag med fokus pa bedre beslutningskvalitet."
      >
        <CaseStudyGrid
          studies={[
            {
              title: "Norsk B2B-selskap",
              situation:
                "Hoy aktivitet i paid, men svak sammenheng med faktiske salgsresultater.",
              challenge:
                "Uklart hvilke kampanjer som burde skaleres eller stoppes.",
              actions:
                "Etablerte kanalroller, ny evalueringslogikk og tydelig prioriteringsrytme.",
              result:
                "Mer presis investeringstakt og hoyere trygghet i lederbeslutninger.",
            },
            {
              title: "Detaljhandel med regionale forskjeller",
              situation: "Stor variasjon i effekt mellom markeder.",
              challenge: "Mangler i signalgrunnlag for god budsjettallokering.",
              actions: "Bygget ny mediemiksmodell med faste review-punkter.",
              result:
                "Tydeligere regional prioritering og bedre kommersiell kontroll.",
            },
            {
              title: "Vekstorientert tjenestevirksomhet",
              situation: "Hoy avhengighet av fa kanalspor.",
              challenge:
                "Saarbarhet i ettersporselsfangst og lav robusthet i modellen.",
              actions:
                "Utvidet kanalstruktur med tydelig samspill mellom sokespor, sosial og video.",
              result:
                "Mer stabil ettersporsel og bedre styring av medieportefoljen.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Retainere"
        title="Betalt media som strategisk partnerskap"
      >
        <PricingGrid
          tiers={[
            {
              name: "Aktivere",
              price: "Fra NOK 18 000 / mnd",
              audience:
                "For virksomheter som vil etablere en tydelig paid-modell med riktig kanalbruk.",
              focus: [
                "Rammeverk for prioritering",
                "Maanedlig analyse og anbefalinger",
                "Styringspunkt mellom marked og ledelse",
              ],
            },
            {
              name: "Skalere",
              price: "Fra NOK 34 000 / mnd",
              audience:
                "For virksomheter som trenger hoyere tempo og sterkere tverrfaglig styring.",
              focus: [
                "Lopende justering pa tvers av kanaler",
                "Bedre attribusjonsgrunnlag",
                "Tettere radgivning i beslutningsprosesser",
              ],
              recommended: true,
            },
            {
              name: "Integrere",
              price: "Fra NOK 58 000 / mnd",
              audience:
                "For storre organisasjoner med komplekse markeder og hoye krav til governance.",
              focus: [
                "Strategisk styring av flere kanaler",
                "Lederrettet rapportering",
                "Integrert analyse av kommersielle drivere",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="Nar medieinvesteringer styres med klarhet, blir effekten mer robust.">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi kan gi en konkret vurdering av dagens mediemodell og anbefale
            neste prioritering.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-apriil-ink-soft md:mt-0"
          >
            Snakk med oss
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
}
