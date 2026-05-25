import type { Metadata } from "next";
import { ChannelPageTemplate } from "@/components/digital-markedsforing/channel-page-template";

export const metadata: Metadata = {
  title: "Podcast | Digital markedsforing | Apriil",
  description:
    "Podcast-radgivning fra Apriil for virksomheter som vil bruke lydformat med tydelig strategisk rolle i kunde- og markedskommunikasjon.",
};

export default function PodcastPage() {
  return (
    <ChannelPageTemplate
      eyebrow="Podcast"
      title="Podcast som bygger tillit over tid"
      intro="Vi bruker lydformat for a utvikle posisjon, relasjon og kommersiell relevans i prioriterte segmenter."
      focusTitle="Langsiktig effekt krever tydelig struktur"
      focusIntro="Podcast ma styres med klar hensikt, riktig format og tydelig rolle i helheten."
      retainers={[
        {
          name: "Fundament",
          price: "Fra NOK 21 000 / mnd",
          audience: "For virksomheter som vil etablere et tydelig podcastspor i markedskommunikasjonen.",
          focus: ["Konsept og redaksjonell retning", "Formatvalg", "Distribusjonslogikk"],
        },
        {
          name: "Vekst",
          price: "Fra NOK 35 000 / mnd",
          audience: "For virksomheter som trenger tettere sammenheng mellom podcast og ovrige kanalspor.",
          focus: ["Lopende redaksjonell styring", "Kanalintegrasjon", "Maanedlig strategisk review"],
          recommended: true,
        },
        {
          name: "Strategisk",
          price: "Fra NOK 57 000 / mnd",
          audience: "For storre organisasjoner med hoyt krav til konsistens, kvalitet og ledelsesforankring.",
          focus: ["Portefoljestyring", "Tverrfaglig oppfolging", "Kommersiell prioritering"],
        },
      ]}
    />
  );
}
