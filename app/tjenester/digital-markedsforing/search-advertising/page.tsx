import type { Metadata } from "next";
import { ChannelServicePage } from "@/components/digital-markedsforing/channel-service-page";

export const metadata: Metadata = {
  title: "Search Advertising | Digital markedsforing | Apriil",
  description:
    "Search Advertising-radgivning fra Apriil med fokus pa ettersporselsfangst, strukturert testing og kommersiell prioritering.",
};

export default function SearchAdvertisingPage() {
  return (
    <ChannelServicePage
      eyebrow="Search Advertising"
      title="Search Advertising med tydelig kommersiell prioritering"
      intro="Vi bruker sokebasert annonsering for a fange ettersporsel der beslutninger tas, med kontroll pa kostnad, relevans og verdi."
      approachTitle="Hvordan vi jobber med Search Advertising"
      approachIntro="Sokestrategi, annonseoppsett og landingssider styres i en samlet modell for bedre kommersiell effekt."
      caseStudy={{
        title: "Nasjonal tjenestevirksomhet",
        situation:
          "Sterk trafikk i paid search, men varierende kvalitet pa henvendelser og utydelig kostnadsbilde.",
        challenge:
          "Kampanjestrukturen var fragmentert, og prioritering mellom sokeintensjoner var uklar.",
        actions:
          "Vi bygget ny kontostruktur med tydelig prioritering av kommersielle signaler, bedre annonsegruppering og strammere samspill med landingssider.",
        result:
          "Mer presis ettersporselsfangst, bedre kvalitet pa leads og tydeligere styring av investerte midler.",
      }}
      caseStudyImageSrc="/apriil-digital/assets/Fjord-case study.png"
      caseStudyImageAlt="Anonymisert visualisering av strukturert search advertising-arbeid"
    />
  );
}
