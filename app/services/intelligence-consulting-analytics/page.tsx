import { ServicePageTemplate } from "@/components/service-page-template";

export default function IntelligenceConsultingAnalyticsPage() {
  return (
    <ServicePageTemplate
      eyebrow="Intelligence / Consulting / Analytics"
      title="Fra data til handling: intelligence, consulting og analytics i ett rammeverk"
      intro="De fleste virksomheter har nok data. Utfordringen er å omsette innsikt til handling i riktig rekkefølge. Apriil kobler analyse, rådgivning og operativ oppfølging så ledelsen får tydeligere beslutningsgrunnlag."
      trendTitle="Hva er nytt i analyse og intelligence?"
      trendBody="GA4, cookieless måling og strengere personvernkrav har endret hvordan data må samles og tolkes. Samtidig gjør AI-drevet analyse det enklere å se mønstre raskere. Gevinsten kommer når innsikten faktisk styrer prioriteringene."
      bullets={[
        "GA4-oppsett, revisjon og datakvalitet",
        "KPI-rammeverk for ledelse og team",
        "Clarity-rapportering med tiltak og eierskap",
        "Integrasjoner mot CRM og øvrige datakilder",
        "Løpende rådgivning og prioriteringsworkshops",
      ]}
      tiers={[
        {
          name: "Basis",
          price: "Fra NOK 10 000 / mnd",
          audience: "For selskaper som vil få oversikt og et tryggere datagrunnlag.",
          features: [
            "GA4-oppsett og enkel revisjon",
            "1 standard dashboard",
            "Månedlig analyserapport",
            "Inntil 3 datakilder",
          ],
        },
        {
          name: "Vekst",
          price: "Fra NOK 20 000 / mnd",
          audience: "For vekstteam som vil bruke data aktivt i løpende beslutninger.",
          highlighted: true,
          features: [
            "Skreddersydd dashboard",
            "Avansert konverteringssporing",
            "Oppgavestyring i Clarity",
            "Inntil 10 datakilder",
          ],
        },
        {
          name: "Enterprise",
          price: "Fra NOK 40 000 / mnd",
          audience: "For konsern og komplekse organisasjoner med høy analysemodenhet.",
          features: [
            "Dedikert analytiker",
            "Ubegrensede dashboards og integrasjoner",
            "Server-side tracking",
            "Lederworkshop og strategisk rådgivning",
          ],
        },
      ]}
    />
  );
}
