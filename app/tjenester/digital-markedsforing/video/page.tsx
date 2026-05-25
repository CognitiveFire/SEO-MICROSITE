import type { Metadata } from "next";
import { ChannelPageTemplate } from "@/components/digital-markedsforing/channel-page-template";

export const metadata: Metadata = {
  title: "Video | Digital markedsforing | Apriil",
  description:
    "Strategisk videoradgivning fra Apriil for virksomheter som vil bruke video med tydelig kommersiell rolle i vekstmodellen.",
};

export default function VideoPage() {
  return (
    <ChannelPageTemplate
      eyebrow="Video"
      title="Video med tydelig strategisk funksjon"
      intro="Vi bruker video der formatet styrker forstaelse, tillit og beslutning i kundereisen."
      focusTitle="Video som del av et samlet beslutningssystem"
      focusIntro="Riktig videoarbeid handler om rolle, distribusjon og kommersiell hensikt."
      retainers={[
        {
          name: "Fundament",
          price: "Fra NOK 22 000 / mnd",
          audience: "For virksomheter som trenger en tydelig videostruktur i markedsarbeidet.",
          focus: ["Innholdsretning", "Formatprioritering", "Distribusjonsplan"],
        },
        {
          name: "Vekst",
          price: "Fra NOK 39 000 / mnd",
          audience: "For virksomheter med behov for tettere styring mellom innhold og kommersielle mal.",
          focus: ["Lopende formatutvikling", "Kanaltilpasning", "Strategisk review"],
          recommended: true,
        },
        {
          name: "Strategisk",
          price: "Fra NOK 63 000 / mnd",
          audience: "For organisasjoner som vil integrere video pa tvers av flere markeder og team.",
          focus: ["Tverrfaglig styring", "Portefoljeperspektiv", "Ledelsesforankret prioritering"],
        },
      ]}
    />
  );
}
