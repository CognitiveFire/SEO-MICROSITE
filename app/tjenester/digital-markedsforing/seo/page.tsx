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
  title: "SEO | Digital markedsføring | Apriil",
  description:
    "SEO-rådgivning fra Apriil som styrker langsiktig synlighet, etterspørsel og beslutningskvalitet på tvers av søkeflater.",
};

export default function SeoSubPage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl border-t border-apriil-line/70 pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]">SEO</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.95]">
            SEO som bygger langsiktig synlighet og etterspørsel.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi jobber med synlighet der beslutninger faktisk tas: i søk, i AI-drevne svarflater og i målgruppens egne vurderingsprosesser.
            Målet er å bli tydelig valgt, ikke bare bli teknisk funnet.
          </p>
          <HeroActions />
        </div>
      </section>

      <SectionContainer
        eyebrow="Perspektiv"
        title="Synlighet handler ikke bare om Google."
        intro="SEO i dag er et arbeid med struktur, troverdighet og tydelige svar. Når informasjonen er godt organisert, blir den enklere å velge."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Område 1",
              title: "Teknisk fundament",
              points: ["Stabil indeksering", "Ryddig informasjonsstruktur", "Sømløs internlenking"],
            },
            {
              label: "Område 2",
              title: "Innholdsarkitektur",
              points: ["Tematisk tydelighet", "Svar som matcher søkeatferd", "Beslutningsnære landingssider"],
            },
            {
              label: "Område 3",
              title: "Synlighet i svarflater",
              points: ["Schema og kontekst", "Autoritetssignaler", "AI- og answer-synlighet"],
            },
            {
              label: "Område 4",
              title: "Kontinuerlig forbedring",
              points: ["Løpende måling", "Kvalitetsjusteringer", "Kommersiell prioritering"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Prisnivåer"
        title="Rådgivning som følger ambisjonsnivå og kompleksitet."
        intro="Våre SEO-avtaler er bygget som strategiske samarbeid med tydelig ansvar og styringsrytme."
      >
        <PricingGrid
          tiers={[
            {
              name: "Fundament",
              price: "Fra NOK 16 000 / mnd",
              audience: "For virksomheter som vil etablere et robust SEO-grunnlag.",
              focus: [
                "Tydelig arbeidsramme og prioritering",
                "Månedlig innsiktsrapport og anbefalinger",
                "Støtte i synlighets- og innholdsbeslutninger",
              ],
            },
            {
              name: "Vekst",
              price: "Fra NOK 29 000 / mnd",
              audience: "For virksomheter med høyere tempo og behov for tett sparring.",
              focus: [
                "Dypere analyse og bredere synlighetsarbeid",
                "Hyppigere rapportering og beslutningsstøtte",
                "Tverrfaglig støtte mot innhold og kanalteam",
              ],
              recommended: true,
            },
            {
              name: "Strategisk",
              price: "Fra NOK 52 000 / mnd",
              audience: "For større organisasjoner med komplekse behov og flere markeder.",
              focus: [
                "Lederforankret rådgivning og prioriteringsstøtte",
                "Utvidet scope for AI- og answer-synlighet",
                "Langsiktig utvikling av synlighetsstrategi",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="Vil dere styrke synlighet med tydeligere prioriteringer?">
        <div className="rounded-[24px] border border-apriil-line/80 bg-white p-7 shadow-[0_14px_36px_rgba(23,23,23,0.06)] md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi hjelper dere å utvikle SEO som støtter forretningsmål, ikke bare rangering.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#e63322] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf2d1d]"
            >
              Snakk med oss
            </Link>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
