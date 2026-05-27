import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Betalt media | Digital markedsforing | Apriil",
  description:
    "Apriil leverer betalt media-radgivning for virksomheter som trenger bedre investeringsstyring, tydeligere kanalroller og sterkere kommersiell effekt.",
};

export default function BetaltMediaSubPage() {
  return (
    <ServicePageTemplate
      serviceName="Betalt media"
      slug="betalt-media"
      heroTitle="Betalt annonsering som faktisk kan males"
      heroBody="Vi hjelper virksomheter med a bruke annonsebudsjettet smartere gjennom bedre data, tydeligere prioriteringer og kontinuerlig optimalisering."
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Vi tar ansvar for hele annonselopet: fra strategi og oppsett til oppfolging og rapportering. Arbeidet handler om kvalitet i beslutninger, ikke bare volum i trafikk."
      serviceCards={[
        {
          title: "Google Ads",
          body: "Vi bygger en kontostruktur som er enkel a styre, enkel a analysere og tett koblet til forretningsmal. Kampanjer settes opp for a skape salgsnare trafikk.",
          icon: "search",
        },
        {
          title: "Meta-annonsering",
          body: "Vi bruker Meta for a bygge ettersporsel og stotte salgsutløsende aktiviteter. Kreative grep, malgrupper og budsjett prioriteres med tydelig retning.",
          icon: "meta",
        },
        {
          title: "Sporing og attribusjon",
          body: "Vi kvalitetssikrer datagrunnlaget slik at beslutninger tas pa faktiske signaler. Uten god sporing blir optimalisering tilfeldig.",
          icon: "analytics",
        },
        {
          title: "Budsjettprioritering",
          body: "Vi flytter budsjett mellom kampanjer og kanaler basert pa utvikling i kostnad, verdi og kapasitet. Malt er bedre avkastning over tid.",
          icon: "budget",
        },
        {
          title: "Rapportering og innsikt",
          body: "Rapporter holdes korte og relevante. Vi viser hva som virker, hva som bor justeres, og hva som er neste konkrete steg.",
          icon: "reporting",
        },
      ]}
      processSteps={[
        {
          title: "Innsikt og analyse",
          body: "Vi starter med a forsta dagens situasjon, datakvalitet og hvor markedsforingen faktisk skaper verdi.",
        },
        {
          title: "Prioritering",
          body: "Vi identifiserer hvilke kanaler, malgrupper og tiltak som gir storst effekt med tilgjengelig budsjett.",
        },
        {
          title: "Implementering",
          body: "Kampanjer, sporing og rapportering settes opp med fokus pa kvalitet, tydelig struktur og malbarhet.",
        },
        {
          title: "Optimalisering",
          body: "Vi folger opp lopende med testing, justeringer og tydelig rapportering med anbefalte prioriteringer.",
        },
      ]}
      caseStudy={{
        title: "Nordisk nettbutikk innen interior",
        situation:
          "Kunden brukte store annonsebudsjetter uten tydelig oversikt over hvilke kampanjer som faktisk skapte salg.",
        actions: [
          "Forbedret sporing og malestruktur",
          "Restrukturerte Google Ads-kontoen",
          "Justerte budsjettfordeling mellom kampanjer",
          "Innforte tydeligere rapportering for ledelse",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "27 %", label: "lavere kostnad per konvertering" },
          { value: "18 %", label: "okning i ROAS" },
          { value: "Bedre", label: "datagrunnlag for prioriteringer" },
        ],
      }}
      faqItems={[
        {
          question: "Hvor mye bor man bruke pa annonsering?",
          answer: "Det avhenger av mal, marginer og konkurranse. Vi anbefaler et niva som gir nok data til gode beslutninger uten unodig risiko.",
        },
        {
          question: "Hvor raskt ser man resultater?",
          answer: "De fleste ser effekt tidlig, men stabil forbedring krever noen ukers testing og justering.",
        },
        {
          question: "Jobber dere med eksisterende annonsekontoer?",
          answer: "Ja. Vi overtar ofte eksisterende kontoer og forbedrer struktur, prioritering og oppfolging.",
        },
        {
          question: "Hvordan rapporterer dere resultater?",
          answer: "Kort og konkret: utvikling, forklaring og anbefalt neste steg. Ingen unodig rapportstoy.",
        },
        {
          question: "Binder man seg til en avtale?",
          answer: "Vi anbefaler et lop over tid for best effekt, men avtalemodellen avklares tydelig i oppstarten.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende gjennomgang av dagens situasjon og gi en konkret anbefaling pa neste steg."
    />
  );
}
