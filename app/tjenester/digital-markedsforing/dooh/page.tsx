import type { Metadata } from "next";
import { ChannelPageTemplate } from "@/components/digital-markedsforing/channel-page-template";

export const metadata: Metadata = {
  title: "DOOH | Digital markedsforing | Apriil",
  description:
    "DOOH-radgivning fra Apriil med fokus pa rolle, timing og kommersiell effekt i en samlet vekstmodell.",
};

export default function DoohPage() {
  return (
    <ChannelPageTemplate
      eyebrow="DOOH"
      title="DOOH med tydelig plass i mediemiksen"
      intro="Digital utendorsannonsering virker best nar den kobles til en helhetlig strategi for ettersporsel."
      focusTitle="Synlighet med strategisk presisjon"
      focusIntro="Vi avklarer nar og hvor DOOH skal brukes for a styrke kommersiell effekt."
      retainers={[
        {
          name: "Fundament",
          price: "Fra NOK 23 000 / mnd",
          audience: "For virksomheter som vil bruke DOOH mer malrettet i markedsmiksen.",
          focus: ["Plassering og timing", "Budskapsramme", "Maanedlig evaluering"],
        },
        {
          name: "Vekst",
          price: "Fra NOK 38 000 / mnd",
          audience: "For virksomheter som trenger tettere kobling mellom DOOH og ovrige kanalspor.",
          focus: ["Kanalintegrasjon", "Lopende justering", "Prioriteringsstotte"],
          recommended: true,
        },
        {
          name: "Strategisk",
          price: "Fra NOK 61 000 / mnd",
          audience: "For organisasjoner med stor geografisk dekning og hoye krav til styring.",
          focus: ["Portefoljeperspektiv", "Regional styring", "Ledelsesforankret oppfolging"],
        },
      ]}
    />
  );
}
