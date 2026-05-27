import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Analyse | Digital markedsforing | Apriil",
  description:
    "Clarity fra Apriil er en beslutningsmodell som kobler signaler, synlighet og kommersiell prioritering for bedre markedsbeslutninger.",
};

export default function AnalyseSubPage() {
  return (
    <ServicePageTemplate
      serviceName="Analyse"
      slug="analyse"
      heroTitle="Analyse som gir bedre beslutninger i markedsforingen"
      heroBody="Vi hjelper virksomheter med a ga fra mye data til tydelige valg. Arbeidet handler om hva som bor prioriteres, ikke bare hva som kan males."
      heroImageSrc="/apriil-digital/assets/sporing-apriil.png"
      heroImageAlt="Analyse og sporing-illustrasjon for Apriil"
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Vi bygger et beslutningsgrunnlag som er relevant for ledelse og markedsteam. Malet er bedre prioritering pa tvers av kanaler, tiltak og budsjett."
      serviceCards={[
        {
          title: "Datakvalitet",
          body: "Vi kontrollerer at sporing, hendelser og grunnlag er riktig satt opp. Uten god datakvalitet blir analysen upalitelig.",
          icon: "analytics",
        },
        {
          title: "Attribusjon",
          body: "Vi vurderer hvordan ulike kanaler bidrar i kundereisen. Det gir et mer realistisk bilde av hva som faktisk driver resultatene.",
          icon: "search",
        },
        {
          title: "Rapportering",
          body: "Vi lager rapportering som er enkel a lese og relevant for beslutninger. Fokus ligger pa utvikling, forklaring og neste steg.",
          icon: "reporting",
        },
        {
          title: "Prioriteringsstotte",
          body: "Vi oversetter signaler til konkrete anbefalinger for hva som bor styrkes, reduseres eller testes videre.",
          icon: "budget",
        },
      ]}
      processSteps={[
        {
          title: "Innsikt og analyse",
          body: "Vi kartlegger dagens datagrunnlag, rapportering og hvordan beslutninger tas i dag.",
        },
        {
          title: "Prioritering",
          body: "Vi identifiserer hvilke signaler som er viktigst for deres mal og hvilke tiltak som bor prioriteres.",
        },
        {
          title: "Implementering",
          body: "Vi setter opp eller forbedrer struktur for sporing, visning av data og beslutningsrytme.",
        },
        {
          title: "Optimalisering",
          body: "Vi folger opp utviklingen lopende og justerer rapportering og prioriteringer etter faktiske resultater.",
        },
      ]}
      caseStudy={{
        title: "Skandinavisk nettbutikk innen helse",
        situation:
          "Virksomheten hadde mange dashboards, men lav trygghet i hvilke tall som faktisk skulle styre prioriteringene.",
        actions: [
          "Ryddet i maleoppsett og datakilder",
          "Definerte felles KPI-er for marked og ledelse",
          "Innførte tydelig uke- og manedsrapportering",
          "Etablerte fast beslutningsmote med anbefalte tiltak",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "40 %", label: "mindre tid brukt pa manuell rapportering" },
          { value: "19 %", label: "bedre utnyttelse av budsjett" },
          { value: "Høy", label: "trygghet i prioriteringsbeslutninger" },
        ],
      }}
      faqItems={[
        {
          question: "Hva er forskjellen pa analyse og rapportering?",
          answer: "Rapportering viser hva som har skjedd. Analyse forklarer hvorfor, og hva som bor gjores videre.",
        },
        {
          question: "Kan dere bruke systemene vi allerede har?",
          answer: "Ja. Vi tar utgangspunkt i eksisterende oppsett og forbedrer der det trengs.",
        },
        {
          question: "Hvor ofte bor rapportering oppdateres?",
          answer: "Det avhenger av tempoet i markedet, men for de fleste fungerer en ukentlig operativ rytme og manedlig strategisk oppfolging godt.",
        },
        {
          question: "Passer dette kun store selskaper?",
          answer: "Nei. Smidige team med tydelige mal har ofte stor effekt av bedre analysegrunnlag.",
        },
        {
          question: "Binder man seg til en avtale?",
          answer: "Vi anbefaler kontinuitet for best effekt, men avtalens omfang avklares tydelig for oppstart.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende gjennomgang av dagens datagrunnlag og gi en tydelig anbefaling pa neste prioritering."
    />
  );
}
