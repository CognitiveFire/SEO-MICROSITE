import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Creator network | Digital markedsforing | Apriil",
  description: "Creator network-radgivning fra Apriil med fokus pa strategisk partnerutvalg og kommersiell effekt.",
};

export default function CreatorNetworkPage() {
  return (
    <ChannelServicePage
      eyebrow="Creator network"
      title="Creator-samarbeid med tydelig kommersiell retning"
      intro="Vi bygger samarbeidsmodeller der creators, budskap og distribusjon henger sammen med forretningsmalene."
      approachTitle="Hvordan vi jobber med creator network"
      approachIntro="Valg av profiler, innhold og oppfolging styres i et strukturert kommersielt rammeverk."
      caseStudy={{
        title: "Forbrukerrettet merkevare",
        situation: "Hoy kampanjeaktivitet uten tydelig sammenheng mellom creator-innhold og salgseffekt.",
        challenge: "Mangel pa konsistent modell for partnerutvalg og styring.",
        actions: "Etablerte nytt creator-rammeverk med klare roller, briefstruktur og evalueringspunkter.",
        result: "Mer robust effekt over tid og bedre kontroll pa investeringene.",
      }}
    />
  );
}
