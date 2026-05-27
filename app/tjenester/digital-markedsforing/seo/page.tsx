import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "SEO | Digital markedsforing | Apriil",
  description:
    "SEO-radgivning fra Apriil for virksomheter som trenger tydelig struktur, sterkere synlighet og bedre kommersielle prioriteringer over tid.",
};

export default function SeoSubPage() {
  return (
    <ServicePageTemplate
      serviceName="SEO"
      slug="seo"
      heroTitle="SEO som gir tydeligere synlighet i riktig sok"
      heroBody="Vi hjelper virksomheter med a bygge en sokestruktur som er enkel a forsta, enkel a vedlikeholde og tydelig for bade brukere og sokemotorer."
      heroImageSrc="/apriil-digital/assets/seo-apriil.png"
      heroImageAlt="SEO-illustrasjon for Apriil"
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="SEO handler om mer enn rangeringer. Vi jobber med helheten fra teknisk kvalitet og innholdsstruktur til prioritering av sok som faktisk har kommersiell verdi."
      serviceCards={[
        {
          title: "Teknisk SEO",
          body: "Vi rydder i tekniske hindre som svekker synlighet. Det gir bedre indeksering, raskere sider og et sunnere fundament.",
          icon: "search",
        },
        {
          title: "Innholdsstruktur",
          body: "Vi organiserer sider og tema slik at det blir tydelig hva hver side skal rangere pa. Det gjor nettstedet lettere a bruke og lettere a finne.",
          icon: "content",
        },
        {
          title: "Sokeordsprioritering",
          body: "Vi velger sok med riktig balanse mellom volum, relevans og konkurranse. Prioriteringen bygger pa forretningsmal, ikke magefolelse.",
          icon: "analytics",
        },
        {
          title: "Lopende forbedring",
          body: "Vi folger utviklingen over tid og justerer retning ved behov. Arbeidet er kontinuerlig, men alltid konkret.",
          icon: "reporting",
        },
      ]}
      processSteps={[
        {
          title: "Innsikt og analyse",
          body: "Vi kartlegger dagens synlighet, teknisk status og hvilke sokespor som er viktigst for virksomheten.",
        },
        {
          title: "Prioritering",
          body: "Vi setter en tydelig rekkefolge pa hva som bor forbedres forst basert pa effekt og gjennomforbarhet.",
        },
        {
          title: "Implementering",
          body: "Tiltak gjennomfores i samarbeid med teamet deres eller av oss, med tydelig ansvar og fremdrift.",
        },
        {
          title: "Optimalisering",
          body: "Vi evaluerer resultater lopende og justerer innhold, struktur og prioritering i takt med utviklingen i markedet.",
        },
      ]}
      caseStudy={{
        title: "Norsk B2B-leverandor innen industri",
        situation:
          "Virksomheten hadde mange fagartikler, men lav synlighet pa sok med hoy kommersiell intensjon.",
        actions: [
          "Forbedret teknisk struktur og internlenking",
          "Prioriterte nye landingssider for sentrale sok",
          "Reviderte eksisterende innhold med tydeligere hensikt",
          "Innførte fast oppfolging pa synlighet og henvendelser",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "22 %", label: "okning i organisk trafikk" },
          { value: "31 %", label: "flere henvendelser fra organisk sok" },
          { value: "Bedre", label: "prioritering av innholdsarbeid" },
        ],
      }}
      faqItems={[
        {
          question: "Hvor lang tid tar SEO?",
          answer: "SEO er langsiktig arbeid, men de fleste ser tydelige signaler tidlig nar grunnarbeidet er riktig prioritert.",
        },
        {
          question: "Kan dere jobbe med eksisterende innhold?",
          answer: "Ja. Vi starter ofte med a forbedre det som allerede finnes for a hente effekt raskere.",
        },
        {
          question: "Hvordan maler dere effekt?",
          answer: "Vi folger synlighet, trafikk og henvendelser samlet, slik at utviklingen sees i sammenheng med forretningsmal.",
        },
        {
          question: "Kan SEO kombineres med annonsering?",
          answer: "Ja. SEO og betalt media fungerer best nar de planlegges som ett felles system.",
        },
        {
          question: "Binder man seg til en avtale?",
          answer: "Vi anbefaler et lop over tid, men avtalemodellen avklares alltid tydelig for oppstart.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende gjennomgang av dagens synlighet og gi en konkret plan for neste prioritering."
    />
  );
}
