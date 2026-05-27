import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Programmatic | Digital markedsforing | Apriil",
  description:
    "Programmatic-radgivning fra Apriil med kontroll pa rekkevidde, frekvens og kommersiell kvalitet.",
};

export default function ProgrammaticPage() {
  return (
    <ServicePageTemplate
      serviceName="Programmatic"
      slug="programmatic"
      heroTitle="Programmatic med kontroll pa rekkevidde og kvalitet"
      heroBody="Vi bruker programmatic for presis distribusjon i riktig kanal, til riktig tid og med tydelig styring av kostnad og effekt."
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Programmatisk annonsering fungerer best nar strategi, malgrupper og datagrunnlag henger tett sammen. Vi bygger oppsett som er robuste og enkle a styre."
      serviceCards={[
        {
          title: "Maalgruppestruktur",
          body: "Vi bygger segmenter basert pa faktiske behov og atferd. Det gir bedre treffsikkerhet og mindre stoy.",
          icon: "programmatic",
        },
        {
          title: "Kanal- og flatevalg",
          body: "Vi velger flater etter relevans og effekt, ikke vane. Prioriteringene justeres nar signalene endrer seg.",
          icon: "display",
        },
        {
          title: "Frekvensstyring",
          body: "Vi styrer hvor ofte budskapet vises for a balansere synlighet, kostnad og opplevd kvalitet.",
          icon: "budget",
        },
        {
          title: "Lopende innsikt",
          body: "Vi folger leveranse, kostnad og kvalitet tett og anbefaler konkrete justeringer underveis.",
          icon: "reporting",
        },
      ]}
      processSteps={[
        {
          title: "Innsikt og analyse",
          body: "Vi kartlegger dagens oppsett, datagrunnlag og hvor programmatic bor ha en tydelig rolle.",
        },
        {
          title: "Prioritering",
          body: "Vi prioriterer malgrupper, kanaler og budsjett ut fra forretningsmal og faktisk potensial.",
        },
        {
          title: "Implementering",
          body: "Vi setter opp kampanjer, segmentering og styringsparametere med tydelig kvalitetssikring.",
        },
        {
          title: "Optimalisering",
          body: "Vi tester, justerer og rapporterer lopende slik at investeringen forbedres over tid.",
        },
      ]}
      caseStudy={{
        title: "Regional kjede innen retail",
        situation:
          "Kunden hadde bred mediedekning, men svak oversikt over hvilke flater som faktisk skapte ettersporsel.",
        actions: [
          "Etablerte ny malgruppestruktur",
          "Justerte frekvens og eksponeringslogikk",
          "Flyttet budsjett til flater med bedre kvalitet",
          "Innførte tydelig rapportering pa effekt per segment",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "24 %", label: "lavere CPM i prioriterte segmenter" },
          { value: "16 %", label: "okning i relevant trafikk" },
          { value: "Bedre", label: "styring av frekvens og budsjett" },
        ],
      }}
      faqItems={[
        {
          question: "Hva passer programmatic best til?",
          answer: "Programmatic passer nar dere trenger effektiv rekkevidde med tydelig styring av malgrupper og kostnad.",
        },
        {
          question: "Kan programmatic kombineres med sok og social?",
          answer: "Ja. Best effekt kommer ofte nar kanalene planlegges samlet.",
        },
        {
          question: "Hvordan vurderer dere kvalitet i leveransen?",
          answer: "Vi ser pa kombinasjonen av synlighet, trafikkkvalitet, kostnad og bidrag til helheten.",
        },
        {
          question: "Jobber dere med eksisterende oppsett?",
          answer: "Ja. Vi kan forbedre eksisterende struktur eller bygge nytt der det er behov.",
        },
        {
          question: "Binder man seg til en avtale?",
          answer: "Vi anbefaler et lop over tid, men avtalens lengde og omfang avklares tydelig ved oppstart.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende gjennomgang av dagens programmatic-oppsett og foresla konkrete forbedringer."
    />
  );
}
