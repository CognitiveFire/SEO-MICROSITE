import type { Metadata } from "next";
import { ChannelPageTemplate } from "@/components/digital-markedsforing/channel-page-template";

export const metadata: Metadata = {
  title: "Sosiale medier | Digital markedsforing | Apriil",
  description:
    "Sosiale medier-radgivning fra Apriil med tydelig rolle i den samlede kommersielle vekstmodellen.",
};

export default function SosialeMedierPage() {
  return (
    <ChannelPageTemplate
      eyebrow="Sosiale medier"
      title="Sosiale medier med klar kommersiell rolle"
      intro="Vi bruker sosiale flater for a bygge tillit, tydelig posisjon og ettersporsel i riktige segmenter."
      focusTitle="Fra aktivitet til prioritering"
      focusIntro="Sosiale medier ma styres mot tydelige forretningsmal, ikke volum alene."
      retainers={[
        {
          name: "Fundament",
          price: "Fra NOK 20 000 / mnd",
          audience: "For virksomheter som trenger struktur og retning i sosial tilstedevarelse.",
          focus: ["Kanalprioritering", "Innholdslogikk", "Maanedlig review"],
        },
        {
          name: "Vekst",
          price: "Fra NOK 36 000 / mnd",
          audience: "For virksomheter med behov for tettere kobling mellom sosial aktivitet og kommersielle mal.",
          focus: ["Tydelig kanalrolle", "Lopende optimalisering", "Felles styringsrytme"],
          recommended: true,
        },
        {
          name: "Strategisk",
          price: "Fra NOK 59 000 / mnd",
          audience: "For storre organisasjoner med flere team, segmenter og hoyt innholdstempo.",
          focus: ["Portefoljestyring", "Ledelsesrapportering", "Kontinuerlig prioritering"],
        },
      ]}
    />
  );
}
