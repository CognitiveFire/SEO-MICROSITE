import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Digital TV-annonsering | Digital markedsforing | Apriil",
  description:
    "Apriil hjelper virksomheter med strategi for streaming-TV og connected TV-annonsering med fokus på relevant målgruppe og målt resultat.",
};

export default function DigitalTvAdsPage() {
  return (
    <ServicePageTemplate
      serviceName="Digital TV-annonsering"
      slug="digital-tv-ads"
      heroTitle="Streaming-TV og connected TV-annonsering som treffer seeren"
      heroBody="Vi hjelper virksomheter med å bygge tilstedeværelse i streaming-TV og connected TV-kanaler der målgruppen bruker stadig mer tid på underholdning og nyheter."
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Annonsering på streaming-plattformer som Netflix, Disney+, YouTube og connected TV fungerer best når målgruppevalg, plassering og hyppighet styres strategisk. Vi bygger kampanjer som treffer seeren i riktig kontekst uten å være irriterende."
      serviceCards={[
        {
          title: "Plattform-strategi",
          body: "Vi analyserer hvor målgruppen din ser på streaming og connected TV, og vurderer hvilke plattformer som gir best resultat.",
          icon: "display",
        },
        {
          title: "Målgruppe-segmentering",
          body: "Vi bruker data og atferd til å bygge målgruppes som treffer relevante seere på de plattformene de bruker.",
          icon: "analytics",
        },
        {
          title: "Kreativ og budskapsformidling",
          body: "Vi utvikler annonsekonsepter som passerTV-formatet og konteksten seeren befinner seg i når de møter budskapet ditt.",
          icon: "content",
        },
        {
          title: "Hyppighets- og resultat-optimalisering",
          body: "Vi styrer hvor ofte seeren ser annonsen din, og justerer strategien basert på engasjement, trafikk og konverteringer.",
          icon: "budget",
        },
      ]}
      processSteps={[
        {
          title: "Seer-analyse",
          body: "Vi starter med å forstå hvor målgruppen din bruker tid på streaming og connected TV, hva de ser på, og når de er mest tilgjengelige.",
        },
        {
          title: "Plattform- og målgruppe-valg",
          body: "Vi prioriterer hvilke plattformer og målgruppes som gir best match mellom annonse og seer.",
        },
        {
          title: "Kampanje-design",
          body: "Vi setter opp kampanjer med fokus på relevant targeting, hyppighetskontroll og kreativ som passer TV-format.",
        },
        {
          title: "Måling og justering",
          body: "Vi følger opp på fremvisninger, engasjement og resultat, og justerer hyppighet og målgrupper basert på data.",
        },
      ]}
      caseStudy={{
        title: "E-handel-bedrift innen kosmetikk",
        situation:
          "Kunden ønsket å bygge merkevarebevissthet blant yngre, velvelfabrikerte seere som bruker streaming-plattformer.",
        actions: [
          "Analyserte seerdata på Netflix, Disney+ og YouTube",
          "Valgte målgruppes basert på aldersgruppe, interesser og seervaninger",
          "Utviklet kort, visuelt tiltalende reklamer for streaming-format",
          "Implementerte hyppighetskontroll for å unngå irritasjon",
        ],
        resultLabel: "Resultat etter 3 måneder",
        stats: [
          { value: "2.8M", label: "visninger av annonser" },
          { value: "3.2 %", label: "click-through rate (over gjennomsnitt)" },
          { value: "Sterk", label: "merkevareoppsving blant målgruppe" },
        ],
      }}
      faqItems={[
        {
          question: "Hvilke plattformer bør vi prioritere for streaming-TV?",
          answer: "Det avhenger av hvor målgruppen din bruker tid. Netflix og YouTube når flest, men Disney+, HBO og andre plattformer kan være mer relevante for spesifikke målgruppes.",
        },
        {
          question: "Hva er connected TV?",
          answer: "Connected TV (CTV) er TV-er koblet til internett som spiller av streaming-innhold. Dette inkluderer smartTV-er og enheter som Roku, Apple TV og Amazon Fire.",
        },
        {
          question: "Hvor stor må budsjettet være?",
          answer: "Streaming-TV kampanjer kan starte fra moderate budsjetter, men vi anbefaler tilstrekkelig volum til å få statistisk signifikante resultater fra en eller to måneder.",
        },
        {
          question: "Hvor ofte bør seeren se annonsen min?",
          answer: "For TV er hyppighet kritisk. Regel nummer en er å ikke irritere seeren. Vi styrer hyppigheten for å holde annonsen relevant uten å være påtrengende.",
        },
        {
          question: "Hvordan måles effekt av streaming-TV-annonsering?",
          answer: "Vi bruker kombinasjonen av video-completion-rates, click-through, trafikk, og konverteringsdata til å vurdere effekt og ROI.",
        },
      ]}
      contactText="Vi kan starte med en analyse av streaming- og connected TV-landskap for din målgruppe og gi en konkret anbefaling på beste strategi for dine mål."
    />
  );
}
