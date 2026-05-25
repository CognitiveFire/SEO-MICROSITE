import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Performance | Digital markedsforing | Apriil",
  description:
    "Performance-radgivning fra Apriil med tydelig kanalstyring, kommersiell prioritering og robust oppfolging.",
};

export default function PerformancePage() {
  return (
    <ChannelServicePage
      eyebrow="Performance"
      title="Performance med tydelig kommersiell retning"
      intro="Vi styrer paid media med klare prioriteringer mellom budsjett, kanalrolle og forventet effekt."
      approachTitle="Hvordan vi jobber med performance"
      approachIntro="Maalet er robust vekst, ikke bare kampanjeaktivitet."
      caseStudy={{
        title: "Nasjonal B2C-aktør",
        situation: "Høy aktivitet i paid media med varierende effekt.",
        challenge:
          "Mangel pa felles modell for prioritering av budsjett og tiltak.",
        actions:
          "Bygget ny styringsmodell for kanalrolle, testlop og kommersiell oppfolging.",
        result:
          "Mer stabil avkastning og tydeligere beslutningsgrunnlag i ledermoter.",
      }}
    />
  );
}
