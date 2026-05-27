import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Podcast | Digital markedsforing | Apriil",
  description:
    "Apriil hjelper virksomheter med strategi for podcast-sponsorskap og audio-annonsering med fokus pa relevant målgruppe og målbar effekt.",
};

export default function PodcastPage() {
  return (
    <ServicePageTemplate
      serviceName="Podcast"
      slug="podcast"
      heroTitle="Podcast og audio-annonsering for målgruppe som lytter"
      heroBody="Vi hjelper virksomheter med å finne og sponse relevante podcaster, og bygge tilstedeværelse i audio-kanaler der målgruppen bruker tid og oppmerksomhet."
      heroImageSrc="/apriil-digital/assets/podcasts.png"
      heroImageAlt="Podcast-illustrasjon for Apriil"
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Podcast-sponsorskap fungerer best når valg av podcast, formidling av budskap og måling av effekt henger sammen strategisk. Vi identifiserer de rette lydkanalene og bygger relevante pauser som treffer lyttere i riktig kontekst."
      serviceCards={[
        {
          title: "Podcast-identifikasjon",
          body: "Vi analyserer lyttertall, målgruppe-profil og kontekst for å finne podkaster der budskapet ditt treffer relevant publikum.",
          icon: "programmatic",
        },
        {
          title: "Sponsorship-strategi",
          body: "Vi utvikler strategi for hvordan budskapet skal formidles, hvilke pauser som passer best, og hvordan sponsorskapet skal oppbygges over tid.",
          icon: "reporting",
        },
        {
          title: "Innhold og formidling",
          body: "Vi jobber med podcast-vertene for å skape autentiske pauser som treffer lyttere og gjør inntrykk uten å virke påtrengende.",
          icon: "content",
        },
        {
          title: "Resultat-måling",
          body: "Vi setter opp sporing slik at vi kan måle effekt av podcast-sponsorskap gjennom trafikk, leads og konverteringer.",
          icon: "analytics",
        },
      ]}
      processSteps={[
        {
          title: "Målgruppe-analyse",
          body: "Vi starter med å forstå hvor målgruppen din bruker tid på audio, hvilke podcaster de lytter på, og hva de bryr seg om.",
        },
        {
          title: "Podcast-valg",
          body: "Vi identifiserer de beste matchene basert på målgruppe-overlap, lyttertall og relevans for budskapet ditt.",
        },
        {
          title: "Kampanje-oppsett",
          body: "Vi forhandler betingelser, utvikler innhold for pausene, og setter opp tracking for måling av resultat.",
        },
        {
          title: "Optimalisering",
          body: "Vi følger opp på lyttingseffekt, engasjement og resultat, og justerer strategien basert på hva som fungerer.",
        },
      ]}
      caseStudy={{
        title: "B2B-selskap innen konsultasjon",
        situation:
          "Kunden ønsket å bygge merkevaretilstedeværelse og lead-generering blant beslutningstakere i målgruppen sin.",
        actions: [
          "Analyserte podcast-konsum blant relevante målgrupper",
          "Valgte fem relevante B2B-podcaster for sponsorskap",
          "Utviklet autentiske pausekonsepter som passet podkasten",
          "Satte opp sporing av leads og konverteringer fra hver podcast",
        ],
        resultLabel: "Resultat etter 6 måneder",
        stats: [
          { value: "180+", label: "kvalifiserte leads fra podcast" },
          { value: "45 %", label: "høyere konverteringsrate enn gjennomsnitt" },
          { value: "Sterk", label: "merkevarekjennskap blant målgruppe" },
        ],
      }}
      faqItems={[
        {
          question: "Hvor stor må en podcast være for å være interessant?",
          answer: "Det handler ikke om størrelse alene, men om sammenheng mellom lyttere, emne og din målgruppe. En podcast med 10 000 dedikerte, relevante lyttere kan være bedre enn en stor podcast med lav relevans.",
        },
        {
          question: "Hvordan måles effekt av podcast-sponsorskap?",
          answer: "Vi setter opp unike links, trackingkoder eller kampanjekoder slik at vi kan spore trafikk, leads og konverteringer fra hver podcast.",
        },
        {
          question: "Hva koster podcast-sponsorskap?",
          answer: "Det varierer bredt basert på podcast-størrelse, antall lyttere og type avtale. Vi hjelper deg med å finne løsninger som passer budsjettet ditt.",
        },
        {
          question: "Hvor lenge bør vi stå på i en podcast?",
          answer: "Det avhenger av mål og budsjett. Vi anbefaler å teste med en eller to episoder først, så evaluere resultater før du forplikter deg til längre serier.",
        },
        {
          question: "Jobber dere med eksisterende podcast-avtaler?",
          answer: "Ja. Vi kan evaluere aktuelle avtaler, foreslå nye podcaster, og hjelpe med å optimalisere resultater fra eksisterende sponsorskap.",
        },
      ]}
      contactText="Vi kan starte med en analyse av podcast-landskap for din målgruppe og gi en konkret anbefaling på hvilke kanaler som gir best resultat for dine mål."
    />
  );
}
