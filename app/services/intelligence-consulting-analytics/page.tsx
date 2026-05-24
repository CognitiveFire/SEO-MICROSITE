import { ServicePageTemplate } from "@/components/service-page-template";

export default function IntelligenceConsultingAnalyticsPage() {
  return (
    <ServicePageTemplate
      eyebrow="Innsikt / Rådgivning / Analyse"
      title="Fra oppsett til inntekt"
      intro="Vi samler innsikten som faktisk betyr noe, og omsetter den til tydelige prioriteringer. Dette er en tjeneste som flytter den kommersielle nålen. Apriil kombinerer innsikt, rådgivning og analyse i ett samlet gjennomføringsrammeverk."
      trendTitle="Hva er nytt innen innsikt og analyse?"
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
