import type { Metadata } from "next";
import { ChannelPageTemplate } from "@/components/digital-markedsforing/channel-page-template";

export const metadata: Metadata = {
  title: "Programmatic | Digital markedsforing | Apriil",
  description:
    "Programmatic-radgivning fra Apriil for virksomheter som vil styre rekkevidde, frekvens og kanalrolle med tydelig kommersielt malbilde.",
};

export default function ProgrammaticPage() {
  return (
    <ChannelPageTemplate
      eyebrow="Programmatic"
      title="Programmatic med strategisk styring"
      intro="Programmatic gir verdi nar distribusjon, budskap og prioritering styres med klar hensikt."
      focusTitle="Presisjon uten stoy"
      focusIntro="Vi bygger en modell for riktig rekkevidde, riktig frekvens og tydelig kommersiell rolle."
      retainers={[
        {
          name: "Fundament",
          price: "Fra NOK 24 000 / mnd",
          audience: "For virksomheter som trenger bedre kontroll pa programmatiske investeringer.",
          focus: ["Kanalrammeverk", "Maalgruppeprioritering", "Lopende evaluering"],
        },
        {
          name: "Vekst",
          price: "Fra NOK 41 000 / mnd",
          audience: "For virksomheter som vil skalere med tydeligere styring av kvalitet og kostnad.",
          focus: ["Utvidet signalvurdering", "Kontinuerlig justering", "Tverrfaglig oppfolging"],
          recommended: true,
        },
        {
          name: "Strategisk",
          price: "Fra NOK 66 000 / mnd",
          audience: "For organisasjoner med stor mediekompleksitet og hoye krav til governance.",
          focus: ["Portefoljestyring", "Avansert beslutningsstotte", "Lederforankret modell"],
        },
      ]}
    />
  );
}
