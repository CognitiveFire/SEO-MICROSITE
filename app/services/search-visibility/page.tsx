import { PremiumServicePricing } from "../../../components/premium-service-pricing";

const tasks = [
  {
    title: "Forbedre synlighet for kommersielle tjenestesider",
    impact: "Høy",
    complexity: "Middels",
    description:
      "Identifisere og styrke sider med høyt kommersielt potensial på tvers av søk og AI-baserte søkeflater.",
  },
  {
    title: "Forbedre informasjonsstruktur",
    impact: "Middels",
    complexity: "Lav",
    description:
      "Forbedre struktur og sammenheng slik at innhold blir lettere å forstå og referere til i moderne søkesystemer.",
  },
  {
    title: "Identifisere synlighetshull",
    impact: "Høy",
    complexity: "Middels",
    description:
      "Avdekke områder hvor konkurrenter er mer synlige i relevante søk og oppdagelsesflater.",
  },
] as const;

export default function SearchVisibilityPage() {
  return (
    <PremiumServicePricing
      eyebrow="Søkesynlighet"
      headline="Hjelper virksomheter med å bli synlige der kunder faktisk søker."
      body="Søkeatferd skjer nå på tvers av tradisjonelle søkemotorer, AI-systemer, video, sosiale plattformer og anbefalingsmiljøer. Apriil hjelper virksomheter med å forbedre synlighet og oppdagbarhet på tvers av moderne søkeflater."
      retainer={{
        label: "Løpende søkesynlighet",
        price: "Fra NOK 25.000 / måned",
        description:
          "Strategisk og teknisk arbeid utviklet for å forbedre synlighet, oppdagbarhet og langsiktig organisk vekst.",
        items: [
          "Teknisk forbedring",
          "Synlighetsanalyse",
          "Innholdsstruktur",
          "Prioriterte tiltak",
          "Rapportering og oppfølging",
          "Signal Room-oversikt",
        ],
        cta: "Book strategisamtale",
        href: "/contact",
      }}
      analysis={{
        label: "Kom i gang-analyse",
        price: "NOK 12.000",
        description:
          "En strukturert analyse av dagens synlighet, tekniske utfordringer og vekstmuligheter.",
        items: [
          "Synlighetsanalyse",
          "Teknisk gjennomgang",
          "Oppdagbarhetsvurdering",
          "Prioritert tiltaksliste",
          "Strategiske anbefalinger",
          "Lederoppsummering",
        ],
        cta: "Bestill analyse",
        href: "/contact",
      }}
      tasks={[...tasks]}
    />
  );
}