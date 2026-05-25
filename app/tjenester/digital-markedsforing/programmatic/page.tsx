import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Programmatic | Digital markedsforing | Apriil",
  description:
    "Programmatic-radgivning fra Apriil med kontroll pa rekkevidde, frekvens og kommersiell kvalitet.",
};

export default function ProgrammaticPage() {
  return (
    <ChannelServicePage
      eyebrow="Programmatic"
      title="Programmatic som en del av samlet vekstmodell"
      intro="Vi bruker programmatic for presis distribusjon med tydelig rolle i den totale mediemiksen."
      approachTitle="Hvordan vi jobber med programmatic"
      approachIntro="Vi vurderer kvalitet, rekkevidde og kommersiell effekt i samme styringsmodell."
      caseStudy={{
        title: "Regional retailkjede",
        situation:
          "Stor mediespredning uten tydelig sammenheng mellom eksponering og ettersporsel.",
        challenge: "For svak prioritering av marked, frekvens og kanalrolle.",
        actions:
          "Etablerte ny programmatisk plan med tydelig segmentering og styringspunkter.",
        result:
          "Mer presis distribusjon og bedre kommersiell kontroll pa investeringene.",
      }}
    />
  );
}
