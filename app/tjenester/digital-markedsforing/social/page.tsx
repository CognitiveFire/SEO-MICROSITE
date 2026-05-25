import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Social | Digital markedsforing | Apriil",
  description: "Social-radgivning fra Apriil med tydelig kobling mellom kanalbruk, budskap og kommersielle prioriteringer.",
};

export default function SocialPage() {
  return (
    <ChannelServicePage
      eyebrow="Social"
      title="Social med tydelig rolle i vekstmodellen"
      intro="Vi bruker sosiale kanaler for a bygge relevans, tillit og ettersporsel i riktige segmenter."
      approachTitle="Hvordan vi jobber med social"
      approachIntro="Innhold, distribusjon og prioritering styres med utgangspunkt i kommersiell effekt."
      caseStudy={{
        title: "Regional tjenestevirksomhet",
        situation: "Sterk aktivitet i sosiale medier, men lav sammenheng med forretningsmal.",
        challenge: "Mangel pa tydelig kanalrolle og prioriteringsramme.",
        actions: "Bygget ny social-modell med klare malbilder, innholdsstruktur og styringsrytme.",
        result: "Mer relevant trafikk og tydeligere kommersiell retning i kanalbruken.",
      }}
    />
  );
}
