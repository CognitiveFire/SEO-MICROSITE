import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Podcast | Digital markedsforing | Apriil",
  description:
    "Podcast-radgivning fra Apriil for virksomheter som vil bygge tillit og kommersiell relevans over tid.",
};

export default function PodcastPage() {
  return (
    <ChannelServicePage
      eyebrow="Podcast"
      title="Podcast som bygger tillit over tid"
      intro="Vi utvikler podcastspor med tydelig redaksjonell rolle og kommersiell retning."
      approachTitle="Hvordan vi jobber med podcast"
      approachIntro="Format, distribusjon og prioritering styres i samme modell."
      caseStudy={{
        title: "B2B-virksomhet i vekst",
        situation:
          "Sterk fagkompetanse, men lav kontinuitet i synlighet og relasjonsbygging.",
        challenge: "Mangel pa tydelig formatstrategi og distribusjonsrytme.",
        actions:
          "Etablerte redaksjonell modell med faste tema, målgrupper og kanalplan.",
        result:
          "Bedre kontinuitet i markedet og tydeligere posisjonering i prioriterte segmenter.",
      }}
    />
  );
}
