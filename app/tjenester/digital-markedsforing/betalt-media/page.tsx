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
  title: "Betalt media | Digital markedsføring | Apriil",
  description:
    "Apriil leverer betalt media-rådgivning som styrker etterspørsel, lønnsomhet og beslutningskvalitet i en samlet vekstmodell.",
};

export default function BetaltMediaSubPage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl border-t border-apriil-line/70 pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]">Betalt media</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.95]">
            Betalt media som støtter hele vekstmodellen.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
            Betalt media skal forsterke etterspørsel og akselerere gode beslutninger. Ikke kompensere for svak retning.
            Vi kobler investeringer, landingssider og signalanalyse i ett helhetlig styringsløp.
          </p>
          <HeroActions />
        </div>
      </section>

      <SectionContainer
        eyebrow="Arbeidsmodell"
        title="Kvalitet i signalene avgjør avkastningen."
        intro="Vi vurderer betalt media i sammenheng med søkeatferd, innholdsstruktur og attribusjonskvalitet."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Fokus 1",
              title: "Aktivering",
              points: ["Søkeannonsering", "Sosiale annonser", "YouTube og video"],
            },
            {
              label: "Fokus 2",
              title: "Sammenheng",
              points: ["Retargeting med rolleforståelse", "Landingsside-alignment", "Budskapskonsistens"],
            },
            {
              label: "Fokus 3",
              title: "Kvalitet",
              points: ["Attribusjonskvalitet", "Signalanalyse", "Kontinuerlig prioritering"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Prisnivåer"
        title="Retainere for virksomheter som vil styre investeringene strategisk."
      >
        <PricingGrid
          tiers={[
            {
              name: "Aktivere",
              price: "Fra NOK 18 000 / mnd",
              audience: "For virksomheter som vil etablere en tydelig og effektiv grunnmodell.",
              focus: [
                "Rammeverk for kanalbruk og budsjett",
                "Månedlig analyse og anbefalt retning",
                "Felles prioriteringer mellom marked og ledelse",
              ],
            },
            {
              name: "Skalere",
              price: "Fra NOK 34 000 / mnd",
              audience: "For virksomheter som vil løfte tempo, kvalitet og kommersiell effekt.",
              focus: [
                "Løpende optimalisering på tvers av kanaler",
                "Styrket attribusjon og bedre beslutningsgrunnlag",
                "Tett rådgivning mot tiltak og investeringer",
              ],
              recommended: true,
            },
            {
              name: "Integrere",
              price: "Fra NOK 58 000 / mnd",
              audience: "For større organisasjoner med komplekse porteføljer og høy endringstakt.",
              focus: [
                "Strategisk styring av flere kanaler og markeder",
                "Lederrettet rapportering og prioriteringsstøtte",
                "Integrert analyse av vekstdrivere på tvers av fagområder",
              ],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Eksempler på kommersiell effekt fra integrert mediestyring."
      >
        <CaseStudyGrid
          studies={[
            {
              title: "Norsk B2B-selskap",
              situation: "God trafikk, men utydelig sammenheng mellom investering og inntekt.",
              challenge: "For mange tiltak uten tydelig prioritering.",
              actions: "Strammet kanalroller, forbedret landingsside-logikk og styrket attribusjon.",
              result: "23 % bedre kostnad per kvalifisert lead og høyere beslutningstrygghet i ledelsen.",
            },
            {
              title: "Nasjonal detaljhandel",
              situation: "Sterk kampanjeaktivitet, men varierende effekt mellom regioner.",
              challenge: "Mangler i signalgrunnlag for budsjettfordeling.",
              actions: "Etablerte ny mediemiksmodell med tydelig testregime.",
              result: "18 % høyere medieeffektivitet og mer presis regional prioritering.",
            },
            {
              title: "Tjenestevirksomhet i vekst",
              situation: "Høy avhengighet av ett kanalspor.",
              challenge: "Sårbarhet i etterspørselsfangst.",
              actions: "Bygget flerkanals modell med tydelig samspill mellom søk, sosial og video.",
              result: "30 % økning i robust etterspørsel med lavere volatilitet i resultatene.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="Når medieinvesteringer styres av klar retning, øker effekten.">
        <div className="rounded-[24px] border border-apriil-line/80 bg-white p-7 shadow-[0_14px_36px_rgba(23,23,23,0.06)] md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi hjelper dere å bruke betalt media som en integrert vekstmotor, ikke som en separat aktivitet.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#e63322] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf2d1d] md:mt-0"
          >
            Snakk med oss
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
}
