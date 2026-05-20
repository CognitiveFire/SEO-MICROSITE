import { PremiumServicePricing } from "../../../components/premium-service-pricing";

const tasks = [
  {
    title: "Forbedre kvaliteten på trafikken",
    impact: "Høy",
    complexity: "Middels",
    description:
      "Identifisere søk og målgrupper med lav kommersiell verdi og redusere ineffektiv trafikk.",
  },
  {
    title: "Forbedre konverteringskvalitet",
    impact: "Høy",
    complexity: "Middels",
    description:
      "Forbedre sammenhengen mellom annonser, landingssider og kundeintensjon.",
  },
  {
    title: "Optimalisere budsjettfordeling",
    impact: "Middels",
    complexity: "Lav",
    description:
      "Prioritere investeringer mot kampanjer og søk med sterkest kommersiell effekt.",
  },
] as const;

export default function PaidAcquisitionPage() {
  return (
    <PremiumServicePricing
      eyebrow="Betalt anskaffelse"
      headline="Forbedrer effektiviteten i kundeanskaffelsen."
      body="Apriil hjelper virksomheter med å forbedre annonseringsresultater gjennom tydeligere prioriteringer, bedre målretting og mer effektiv bruk av markedsbudsjetter."
      retainer={{
        label: "Løpende betalt anskaffelse",
        price: "Fra NOK 15.000 / måned",
        description:
          "Kontinuerlig optimalisering og oppfølging utviklet for å forbedre konverteringskvalitet, budsjetteffektivitet og langsiktig annonseytelse.",
        items: [
          "Kampanjeadministrasjon",
          "Søkeanalyse",
          "Budsjettoptimalisering",
          "Konverteringsanalyse",
          "Landingssidevurdering",
          "Signal Room-rapportering",
        ],
        cta: "Book strategisamtale",
        href: "/contact",
      }}
      analysis={{
        label: "Kom i gang-analyse",
        price: "NOK 15.000",
        description:
          "En strukturert analyse av kampanjeytelse, budsjetteffektivitet og forbedringsmuligheter.",
        items: [
          "Kampanjegjennomgang",
          "Konverteringsanalyse",
          "Budsjettvurdering",
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