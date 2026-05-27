import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "DOOH | Digital markedsforing | Apriil",
  description:
    "DOOH-radgivning fra Apriil med tydelig prioritering av flater, timing og kommersiell effekt.",
};

export default function DoohPage() {
  return (
    <ChannelServicePage
      eyebrow="DOOH"
      title="DOOH med tydelig rolle i mediemiksen"
      intro="Vi bruker digitale utendorsflater strategisk for a styrke synlighet og ettersporsel i prioriterte markeder."
      showHeroCta={false}
      approachTitle="Hvordan vi jobber med DOOH"
      approachIntro="Vi kobler plassering, timing og budskap til en samlet kommersiell modell."
      caseStudy={{
        title: "Nasjonal tjenesteaktor",
        situation: "Hoy lokal aktivitet, men utydelig effekt pa ettersporsel.",
        challenge:
          "Mangel pa sammenheng mellom flatevalg og kommersielle prioriteringer.",
        actions:
          "Bygget ny DOOH-plan med geografisk prioritering og felles evalueringsramme.",
        result:
          "Mer presis lokal synlighet og bedre styring av investeringene.",
      }}
    />
  );
}
