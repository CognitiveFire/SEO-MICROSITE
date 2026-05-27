import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Performance Marketing | Digital markedsforing | Apriil",
  description:
    "Apriil leverer performance marketing-radgivning for virksomheter som trenger bedre investeringsstyring, tydeligere kanalroller og sterkere kommersiell effekt pa tvers av sosiale, sokeord, display og video.",
};

export default function PerformanceMarketingSubPage() {
  return (
    <ServicePageTemplate
      serviceName="Performance Marketing"
      slug="performance-marketing"
      heroTitle="Performance marketing pa tvers av kanaler"
      heroBody="Vi hjelper virksomheter med a optimalisere investeringer i annonsering gjennom bedre data, intelligente prioriteringer og kontinuerlig optimalisering pa tvers av sosiale medier, sokeord, display og video."
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Vi tar ansvar for hele annonsestrategien pa tvers av kanaler: fra strategi og oppsett til oppfolging og rapportering. Arbeidet handler om intelligente prioriteringer og optimalisering av hver eneste annonsekrone."
      serviceCards={[
        {
          title: "Annonsering i sosiale medier",
          body: "Vi bruker Facebook, Instagram, TikTok og andre plattformer for a bygge ettersporsel og drive konverteringer. Kreative grep, malgrupper og budsjett prioriteres med tydelig retning.",
          icon: "meta",
        },
        {
          title: "Sokeordsannonser",
          body: "Vi bygger Google Ads-kontoer med tydelig struktur, høy relevans og fokus pa salgsnare trafikk. Kampanjer og budsjett styres for a maksimere verdi.",
          icon: "search",
        },
        {
          title: "Display og Video",
          body: "Vi bruker display og video for a bygge merkevare, rekkevidde og oppmerksomhet. Malgrupper og flatevalg prioriteres etter relevans og effekt.",
          icon: "display",
        },
        {
          title: "Sporing og attribusjon",
          body: "Vi kvalitetssikrer datagrunnlaget slik at beslutninger tas pa faktiske signaler fra hver kanal. Uten god sporing blir optimalisering tilfeldig.",
          icon: "analytics",
        },
        {
          title: "Kanal- og budsjettpriortering",
          body: "Vi fordeler budsjett mellom kanaler og kampanjer basert pa utvikling i kostnad, verdi og kapasitet. Prioriteringene justeres nar signalene endrer seg.",
          icon: "budget",
        },
        {
          title: "Rapportering",
          body: "Rapporter holdes korte og relevante med fokus pa hva som virker, hva som bor justeres, og neste konkrete steg for hver kanal.",
          icon: "reporting",
        },
      ]}
      processSteps={[
        {
          title: "Strategi og innsikt",
          body: "Vi starter med a forsta mal, marginer og kundereisen. Deretter kartlegger vi hvor hver kanal horer hjemme.",
        },
        {
          title: "Kanalpriortering",
          body: "Vi vurderer hvilke kombinasjoner av sosiale, sok, display og video som gir best effekt med tilgjengelig budsjett.",
        },
        {
          title: "Implementering",
          body: "Kampanjer settes opp med fokus pa relevans, struktur og malbarhet pa tvers av kanaler.",
        },
        {
          title: "Kontinuerlig optimalisering",
          body: "Vi folger opp lopende med testing, justering av budsjett mellom kanaler, og tydelig rapportering.",
        },
      ]}
      caseStudy={{
        title: "Nordisk nettbutikk innen interior - multikanal-optimalisering",
        situation:
          "Kunden brukte annonsebudsjetter pa tvers av flere kanaler, men mangler tydelig oversikt over hvilke kombinasjoner av sosiale, sok og display som faktisk skapte salg.",
        actions: [
          "Etablerte sporing og attribusjon pa tvers av kanaler",
          "Restrukturerte kampanjer for bedre prioritering",
          "Justerte budsjettfordeling mellom sosiale, sok og display",
          "Innforte tydelig rapportering for beslutninger pa kanalnivar",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "31 %", label: "forbedret ROAS pa tvers av kanaler" },
          { value: "22 %", label: "lavere gjennomsnittlig kundekostanad" },
          { value: "Bedre", label: "prioritering av budsjett mellom kanaler" },
        ],
      }}
      faqItems={[
        {
          question: "Hvilke kanaler bor vi prioritere?",
          answer: "Det avhenger av mal, marginer og hvor kundene befinner seg. Vi anbefaler a starte med sokemotorer og sosiale medier, og utvide med display og video nar det skaper verdi.",
        },
        {
          question: "Hvor mye bor man bruke pa annonsering totalt?",
          answer: "Det avhenger av mal, marginer og konkurranse. Vi anbefaler et niva som gir nok data til gode beslutninger uten unodig risiko.",
        },
        {
          question: "Hvor raskt ser man resultater?",
          answer: "Sok viser resultater hurtig, mens sosiale og display krever noen ukers testing. Stabil forbedring kommer over tid.",
        },
        {
          question: "Hvordan skal vi dele budsjett mellom kanaler?",
          answer: "Vi anbefaler a starte med analyse av hvor verdien kommer fra, deretter teste og justere etter faktisk resultat.",
        },
        {
          question: "Binder man seg til en avtale?",
          answer: "Vi anbefaler et lop over tid for best effekt og læring, men avtalemodellen avklares tydelig i oppstarten.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende gjennomgang av dagens annonseinvesteringer pa tvers av kanaler og gi en konkret anbefaling pa neste steg."
    />
  );
}
