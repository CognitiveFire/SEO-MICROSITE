import { EcosystemCards } from "@/components/ecosystem-cards";
import { ServicePageTemplate } from "@/components/service-page-template";

export default function PaidMediaPage() {
  return (
    <>
      <ServicePageTemplate
        eyebrow="Betalt media"
        title="Betalt media som gir avkastning, ikke bare aktivitet"
        intro="Apriil jobber med betalt media som en kommersiell vekstmotor, ikke som en kampanjeliste. Vi kobler annonser, landingssider og data i en helhet som øker kvaliteten på trafikken og effekten av budsjettet."
        trendTitle="Hva har endret seg i betalt media?"
        trendBody="Automatisering og AI har tatt over mye av den manuelle optimaliseringen. Differansen mellom svake og sterke resultater ligger nå i strategi, signal-kvalitet og relevans mellom budskap, målgruppe og landingsside."
        bullets={[
          "Google Ads, Meta Ads, LinkedIn Ads, programmatisk, DOOH, kontekstuell, video, innholdsskaper-samarbeid og podcast",
          "Søkestruktur, målgrupper og budsjettrammeverk",
          "Annonsekreativ og testplan",
          "Landingsside- og konverteringsanalyse",
          "Ukentlig optimalisering med Clarity-innsikt",
        ]}
        tiers={[
          {
            name: "Basis",
            price: "Fra NOK 12 000 / mnd",
            audience: "For mindre annonsører som vil få kontroll på kanalvalg og resultater.",
            features: [
              "Google eller Meta",
              "Månedlig optimalisering",
              "Standard konverteringssporing",
              "Min. annonseringsbudsjett: NOK 15 000",
            ],
          },
          {
            name: "Vekst",
            price: "Fra NOK 25 000 / mnd",
            audience: "For vekstbedrifter med klare mål for lønnsom anskaffelse.",
            highlighted: true,
            features: [
              "Google + Meta eller LinkedIn",
              "Ukentlig optimalisering",
              "Skreddersydd annonsekreativ",
              "Avansert sporing og landingssideanalyse",
            ],
          },
          {
            name: "Enterprise",
            price: "Fra NOK 55 000 / mnd",
            audience: "For større selskaper med flere markeder og høye volumkrav.",
            features: [
              "Søk, sosial, video, programmatic og DOOH",
              "Kontekstuell annonsering, creator og podcast",
              "Daglig oppfølging",
              "Dedikert kreativt team",
              "A/B-testing og full datalag-modell",
            ],
          },
        ]}
      />
      <EcosystemCards />
    </>
  );
}
