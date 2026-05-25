import type { Metadata } from "next";
import Link from "next/link";
import {
  ServiceGridHero,
  type ServiceCard,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Digital markedsføring | Apriil",
  description:
    "Tjenester innen digital markedsføring fra Apriil: SEO, betalt media, programmatisk annonsering, podcast, DOOH, creator-nettverk, sosiale medier, video og display.",
};

const serviceCards: ServiceCard[] = [
  {
    title: "SEO - søkemotoroptimalisering",
    body: "Vi bygger synlighet gjennom teknisk kvalitet, riktig innholdsstruktur og tydelige kommersielle prioriteringer.",
    href: "/tjenester/digital-markedsforing/seo",
    icon: "seo",
  },
  {
    title: "Betalt media",
    body: "Vi styrer betalt media med klar kanalrolle, bedre signalgrunnlag og tydelig retning for investeringene.",
    href: "/tjenester/digital-markedsforing/performance",
    icon: "paid",
  },
  {
    title: "Programmatisk annonsering",
    body: "Vi bruker programmatisk annonsering for presis distribusjon med kontroll på kvalitet, frekvens og kommersiell effekt.",
    href: "/tjenester/digital-markedsforing/programmatic",
    icon: "programmatic",
  },
  {
    title: "Podcast",
    body: "Vi utvikler podcastspor som bygger tillit over tid og styrker posisjon i prioriterte segmenter.",
    href: "/tjenester/digital-markedsforing/podcast",
    icon: "podcast",
  },
  {
    title: "DOOH / utendørs",
    body: "Vi planlegger digitale utendørsflater som en strategisk del av den totale mediemiksen.",
    href: "/tjenester/digital-markedsforing/dooh",
    icon: "dooh",
  },
  {
    title: "Creator-nettverk",
    body: "Vi strukturerer creatorsamarbeid med tydelig rolle i etterspørselsarbeidet og kommersiell retning.",
    href: "/tjenester/digital-markedsforing/creator-network",
    icon: "creator",
  },
  {
    title: "Sosiale medier",
    body: "Vi bruker sosiale kanaler for tydelig budskap, sterkere relevans og bedre kobling til forretningsmål.",
    href: "/tjenester/digital-markedsforing/social",
    icon: "social",
  },
  {
    title: "Video",
    body: "Vi bruker video for å forklare, forsterke og skape tydeligere beslutningsstøtte i markedet.",
    href: "/contact",
    icon: "video",
  },
  {
    title: "Display",
    body: "Vi planlegger display som en del av en samlet distribusjonsmodell med klar rolle og effekt.",
    href: "/contact",
    icon: "display",
  },
];

export default function DigitalMarkedsforingPage() {
  return (
    <main className="w-full px-6 pb-20 pt-6 md:px-10 xl:px-16">
      <div className="mx-auto w-full">
        <section className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8 lg:pt-1">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-6xl md:leading-[0.96]">
              Vi kan hjelpe dere med:
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Tjenestene er organisert som en samlet modell for digital
              markedsføring, med tydelige roller, klar prioritering og en
              strategisk arbeidsform.
            </p>
          </div>
          <ServiceGridHero cards={serviceCards} />
        </section>
      </div>
    </main>
  );
}
