import type { Metadata } from "next";
import { ChannelPageTemplate } from "@/components/digital-markedsforing/channel-page-template";

export const metadata: Metadata = {
  title: "Creator network | Digital markedsforing | Apriil",
  description:
    "Creator network-radgivning fra Apriil for virksomheter som vil bruke profiler og nettverk med tydelig kommersiell retning.",
};

export default function CreatorNetworkPage() {
  return (
    <ChannelPageTemplate
      eyebrow="Creator network"
      title="Creator-samarbeid med tydelig kommersiell retning"
      intro="Vi bygger samarbeidsmodeller der innhold, distribusjon og kommersiell rolle henger sammen."
      focusTitle="Fra enkeltkampanjer til styrt samarbeid"
      focusIntro="Creator-arbeid gir best effekt nar det styres som en del av en samlet vekstmodell."
      retainers={[
        {
          name: "Fundament",
          price: "Fra NOK 24 000 / mnd",
          audience: "For virksomheter som vil etablere strukturert samarbeid med relevante profiler.",
          focus: ["Partnerstrategi", "Samarbeidsrammeverk", "Resultatvurdering"],
        },
        {
          name: "Vekst",
          price: "Fra NOK 40 000 / mnd",
          audience: "For virksomheter som trenger tettere styring mellom creator-arbeid og kommersielle mal.",
          focus: ["Lopende portefoljevurdering", "Kanalintegrasjon", "Prioriteringsstotte"],
          recommended: true,
        },
        {
          name: "Strategisk",
          price: "Fra NOK 64 000 / mnd",
          audience: "For organisasjoner som vil bruke creator-nettverk i stor skala over tid.",
          focus: ["Strategisk governance", "Tverrfaglig oppfolging", "Ledelsesforankret modell"],
        },
      ]}
    />
  );
}
