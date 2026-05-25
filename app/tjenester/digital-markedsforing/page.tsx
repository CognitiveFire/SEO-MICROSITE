import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGridHero } from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Digital markedsforing | Apriil",
  description:
    "Tjenester innen digital markedsforing fra Apriil: SEO, performance, programmatic, podcast, DOOH, creator network og social.",
};

const serviceCards = [
  {
    title: "SEO - sokemotoroptimalisering",
    body: "Vi bygger synlighet gjennom teknisk kvalitet, riktig innholdsstruktur og tydelige kommersielle prioriteringer.",
    href: "/tjenester/digital-markedsforing/seo",
  },
  {
    title: "Betalt media",
    body: "Vi styrer betalt media med klar kanalrolle, bedre signalgrunnlag og tydelig retning for investeringene.",
    href: "/tjenester/digital-markedsforing/performance",
  },
  {
    title: "Programmatisk annonsering",
    body: "Vi bruker programmatisk annonsering for presis distribusjon med kontroll på kvalitet, frekvens og kommersiell effekt.",
    href: "/tjenester/digital-markedsforing/programmatic",
  },
  {
    title: "Podcast",
    body: "Vi utvikler podcastspor som bygger tillit over tid og styrker posisjon i prioriterte segmenter.",
    href: "/tjenester/digital-markedsforing/podcast",
  },
  {
    title: "DOOH / utendørs",
    body: "Vi planlegger digitale utendørsflater som en strategisk del av den totale mediemiksen.",
    href: "/tjenester/digital-markedsforing/dooh",
  },
  {
    title: "Creator network",
    body: "Vi strukturerer creatorsamarbeid med tydelig rolle i etterspørselsarbeidet og kommersiell retning.",
    href: "/tjenester/digital-markedsforing/creator-network",
  },
  {
    title: "Sosiale medier",
    body: "Vi bruker sosiale kanaler for tydelig budskap, sterkere relevans og bedre kobling til forretningsmål.",
    href: "/tjenester/digital-markedsforing/social",
  },
  {
    title: "Video",
    body: "Vi bruker video for å forklare, forsterke og skape tydeligere beslutningsstøtte i markedet.",
    href: "/contact",
  },
  {
    title: "Display",
    body: "Vi planlegger display som en del av en samlet distribusjonsmodell med klar rolle og effekt.",
    href: "/contact",
  },
];

function ServiceMarker() {
  return (
    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" aria-hidden="true">
      <path d="M31 10C31 22 39 31 52 31C39 31 31 40 31 52C31 40 22 31 10 31C22 31 31 22 31 10Z" fill="#ff4e1a" />
      <path d="M31 17C31 25.5 36.5 31 45 31C36.5 31 31 36.5 31 45C31 36.5 25.5 31 17 31C25.5 31 31 25.5 31 17Z" fill="#ff8e66" fillOpacity="0.55" />
      <path d="M31 22C31 28 35 31.8 41 31.8C35 31.8 31 35.6 31 41.6C31 35.6 27 31.8 21 31.8C27 31.8 31 28 31 22Z" fill="#ff4e1a" fillOpacity="0.75" />
    </svg>
  );
}

export default function DigitalMarkedsforingPage() {
  return (
    <main className="w-full px-6 pb-20 pt-6 md:px-10 xl:px-16">
      <div className="mx-auto w-full">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-6xl md:leading-[0.96]">
              Vi kan hjelpe dere med:
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Tjenestene er organisert som en samlet modell for digital markedsføring, med tydelige roller og en mer
              strategisk arbeidsform.
            </p>
          </div>
          <ServiceGridHero cards={serviceCards} />
        </section>
      </div>
    </main>
  );
}
