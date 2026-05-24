import { ServicePageTemplate } from "@/components/service-page-template";

export default function SeoPage() {
  return (
    <ServicePageTemplate
      eyebrow="SEO"
      title="SEO og søkesynlighet for en verden med Google og AI-søk"
      intro="Det er 2026. SEO handler ikke lenger bare om å komme øverst på Google. AI-genererte svar, Google AI Overviews og plattformer som ChatGPT og Perplexity kuraterer egne kilder. Apriil bygger synlighet som fungerer i dette nye søkelandskapet med teknisk soliditet, innholdsstruktur og autoritetsbygging."
      trendTitle="Hva er nytt i SEO nå?"
      trendBody="Søkelandskapet er ikke lenger bare ti blå lenker. AI Overviews, ChatGPT og andre svarmotorer henter kilder direkte. Derfor må innholdet ditt være tydelig strukturert, troverdig og formulert for å bli valgt."
      bullets={[
        "Teknisk SEO-revisjon og løpende forbedringer",
        "Søkeintensjon og prioritering av innholdsarbeid",
        "Informasjonsarkitektur og internlenking",
        "AI-synlighet og strukturerte data (Schema)",
        "Lokal SEO for Bergen, Stavanger og Oslo",
      ]}
      tiers={[
        {
          name: "Basis",
          price: "Fra NOK 12 000 / mnd",
          audience: "Bedrifter som vil etablere et solid SEO-fundament.",
          features: [
            "Teknisk grunnrevisjon",
            "Prioritert tiltaksliste",
            "Månedlig statusrapport",
            "Oppstartsanalyse: NOK 9 000",
          ],
        },
        {
          name: "Vekst",
          price: "Fra NOK 22 000 / mnd",
          audience: "Selskaper med tydelige vekstmål og behov for jevn produksjon.",
          highlighted: true,
          features: [
            "Løpende teknisk optimalisering",
            "Månedlig innholdsproduksjon",
            "Ukentlig Clarity-dashboard",
            "AI-synlighetsstruktur inkludert",
          ],
        },
        {
          name: "Enterprise",
          price: "Fra NOK 45 000 / mnd",
          audience: "Nasjonale aktører med komplekse nettsteder og høy konkurranse.",
          features: [
            "Dedikert senior SEO-strateg",
            "Full AI SEO-strategi",
            "Ubegrensede lokasjoner",
            "Real-time rapportering + ledermøte",
          ],
        },
      ]}
    />
  );
}
