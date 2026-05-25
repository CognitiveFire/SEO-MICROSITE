import type { Metadata } from "next";
import {
  CaseStudyGrid,
  HeroActions,
  MethodologyGrid,
  PricingGrid,
  SectionContainer,
} from "@/components/digital-markedsforing/ui";
import { CtaPillLink } from "@/components/cta-pill";
import { ServiceSubmenu } from "@/components/digital-markedsforing/service-submenu";

export const metadata: Metadata = {
  title: "SEO | Digital markedsforing | Apriil",
  description:
    "SEO-radgivning fra Apriil for virksomheter som trenger bedre synlighet, tydeligere prioriteringer og et sterkere kommersielt beslutningsgrunnlag.",
};

export default function SeoSubPage() {
  return (
    <main>
      <div className="px-6 pt-8 md:px-10 md:pt-10 xl:px-16">
        <ServiceSubmenu />
      </div>

      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="grid gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              SEO
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              SEO som bygger langsiktig synlighet og etterspørsel.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              SEO handler om synlighet, tillit og etterspørsel - ikke bare
              rangeringer.
            </p>
            <HeroActions />
          </div>
          <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Strategisk posisjonering
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-apriil-muted">
              <li className="border-t border-apriil-line/80 pt-4">Discoverability</li>
              <li className="border-t border-apriil-line/80 pt-4">AI visibility</li>
              <li className="border-t border-apriil-line/80 pt-4">Information structure</li>
              <li className="border-t border-apriil-line/80 pt-4">Authority and schema</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionContainer
        eyebrow="Arbeidsmodell"
        title="Fire arbeidsspor for varig synlighet"
        intro="Vi jobber med teknikk, innhold, tillitssignaler og prioritering i en samlet modell."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Omrade 1",
              title: "Teknisk kvalitet",
              points: [
                "Indeksering",
                "Informasjonsstruktur",
                "Internlenking",
                "Lastetid",
              ],
            },
            {
              label: "Omrade 2",
              title: "Innholdsarkitektur",
              points: [
                "Tema",
                "Sokesvar",
                "Beslutningsnaere sider",
                "Rolle i kundereisen",
              ],
            },
            {
              label: "Omrade 3",
              title: "Synlighet i svarflater",
              points: [
                "Schema",
                "Kildetydelighet",
                "Autoritetssignaler",
                "AI-svar",
              ],
            },
            {
              label: "Omrade 4",
              title: "Kontinuerlig styring",
              points: ["Maling", "Prioritering", "Review", "Oppfolging"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Tre typiske SEO-oppdrag"
        intro="Anonymiserte case fra virksomheter med ulike modenhetsniva."
      >
        <CaseStudyGrid
          studies={[
            {
              title: "B2B i endring",
              situation: "Nytt tjenestetilbud uten tydelig synlighet i sok.",
              challenge:
                "Mye innhold, men lav sammenheng mellom tema og kommersielle mal.",
              actions:
                "Bygget ny informasjonsarkitektur og tydeligere sidehierarki.",
              result:
                "Bedre kvalitet i inbound-henvendelser og klarere prioritering av innholdsarbeid.",
            },
            {
              title: "Nasjonal tjenesteaktør",
              situation:
                "Sterk merkevare, men svake organiske innganger i kritiske segmenter.",
              challenge: "Ulike team arbeidet uten felles SEO-prinsipper.",
              actions:
                "Etablerte felles rammeverk for struktur, innhold og måling.",
              result:
                "Mer konsistent synlighet og tydeligere beslutningsgrunnlag for ledelsen.",
            },
            {
              title: "Kompleks nettsideportefolje",
              situation: "Mange domener og overlappende sider.",
              challenge: "Fragmentert autoritet og utydelig tematisk struktur.",
              actions:
                "Konsoliderte struktur og prioriterte viktigste forretningsomrader.",
              result:
                "Mer robust synlighet og enklere styring av videre utvikling.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Retainere"
        title="Strategiske SEO-engasjement"
        intro="Prisnivaene reflekterer ambisjonsniva og kompleksitet, ikke pakkelogikk."
      >
        <PricingGrid
          tiers={[
            {
              name: "Fundament",
              price: "Fra NOK 16 000 / mnd",
              audience:
                "For virksomheter som trenger en tydelig SEO-retning og et stabilt grunnlag.",
              focus: [
                "Maanedlig prioritering",
                "Faglig review og anbefalinger",
                "Lopende teknisk oppfolging",
              ],
            },
            {
              name: "Vekst",
              price: "Fra NOK 29 000 / mnd",
              audience:
                "For virksomheter med hoyere tempo og behov for tettere faglig styring.",
              focus: [
                "Utvidet analyse av signaler",
                "Tettere oppfolging pa tvers av fag",
                "Strategisk sparring i lederrytme",
              ],
              recommended: true,
            },
            {
              name: "Strategisk",
              price: "Fra NOK 52 000 / mnd",
              audience:
                "For organisasjoner med flere markeder, stor kompleksitet og hoye krav til styring.",
              focus: [
                "Lederforankret prioriteringsmodell",
                "Utvidet scope for svarflater og AI-synlighet",
                "Langsiktig synlighetsstrategi",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="Vil dere styrke synlighet med tydeligere prioriteringer?">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:flex md:items-center md:justify-between md:gap-8">
          <CtaPillLink href="#kontakt-skjema" className="md:ml-auto">
            Snakk med oss
          </CtaPillLink>
        </div>
      </SectionContainer>
    </main>
  );
}
