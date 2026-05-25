import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Shopping ads | Digital markedsforing | Apriil",
  description:
    "Shopping ads-radgivning fra Apriil med fokus pa feed-kvalitet, produktstruktur og kommersiell styring pa tvers av sortiment.",
};

export default function ShoppingAdsPage() {
  return (
    <ChannelServicePage
      eyebrow="Shopping ads"
      title="Shopping ads som styres av produktdata og kommersiell logikk"
      intro="Vi jobber med produktannonsering der feed-kvalitet, sortimentsprioritering og budstrategi henger tett sammen med margin og ettersporsel."
      approachTitle="Hvordan vi jobber med Shopping ads"
      approachIntro="Produktfeed, kampanjestruktur og prioritering av varegrupper optimaliseres i en operativ modell med tydelige styringspunkter."
      caseStudy={{
        title: "Norsk netthandelsaktor",
        situation:
          "Stor produktbredde og hoy aktivitet i shoppingannonsering, men lav samsvar mellom spend og faktisk lonnsomhet.",
        challenge:
          "Feed-struktur og kampanjeoppsett ga svake signaler for riktig budgivning og produktprioritering.",
        actions:
          "Vi restrukturerte feed-attributter, gruppering og prioriteringsregler for a styrke relevans, synlighet og kontroll pa investeringene.",
        result:
          "Bedre samsvar mellom annonseinvesteringer og kommersiell verdi, samt tydeligere styring av sortiment i betalte flater.",
      }}
      caseStudyImageSrc="/melk-case study.png"
      caseStudyImageAlt="Anonymisert visualisering av shopping ads-struktur og produktprioritering"
    />
  );
}
