import type { Metadata } from "next";
import Link from "next/link";
import { SeoHeroGraphic } from "@/components/digital-markedsforing/seo-hero-graphic";

export const metadata: Metadata = {
  title: "SEO | Digital markedsforing | Apriil",
  description:
    "SEO-radgivning fra Apriil for virksomheter som trenger tydelig struktur, sterkere synlighet og bedre kommersielle prioriteringer over tid.",
};

const faqItems = [
  {
    question: "Hvor lang tid tar SEO?",
    answer:
      "SEO er langsiktig arbeid. De fleste virksomheter ser gradvis utvikling over tid, men tempoet avhenger av konkurranse, historikk og marked.",
  },
  {
    question: "Hvordan påvirker AI sokesynlighet?",
    answer:
      "AI endrer hvordan informasjon presenteres og oppsummeres. Derfor blir struktur, tydelighet og autoritet viktigere i hvordan innhold oppdages.",
  },
  {
    question: "Hvordan males effekt?",
    answer:
      "Vi vurderer synlighet, trafikk, søkeatferd og kommersielle signaler samlet for a forsta hva som faktisk bidrar til verdi.",
  },
  {
    question: "Kan SEO kombineres med annonsering?",
    answer:
      "Ja. SEO og betalt distribusjon fungerer ofte best nar de stotter hverandre med tydelige roller i samme beslutningsmodell.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SeoSubPage() {
  return (
    <main className="w-full px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full space-y-20 md:space-y-24">
        <section className="border-t border-apriil-line/70 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
                SEO
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.9]">
                SEO som bygger langsiktig synlighet.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-apriil-muted md:text-[1.22rem]">
                God synlighet handler om a vaere tydelig nar mennesker soker,
                vurderer og sammenligner.
              </p>
            </div>

            <SeoHeroGraphic />
          </div>
        </section>

        <section id="hvordan-vi-jobber" className="rounded-[18px] border border-[#2e2a26] bg-[#1b1917] px-6 py-14 md:px-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bfb8ae]">
                Hvordan vi jobber
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
                Synlighet bygges ikke tilfeldig.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c8c2b8] md:text-lg">
                SEO handler ikke bare om rangeringer. Det handler om struktur,
                tydelighet og a vaere synlig nar mennesker faktisk leter etter
                svar.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c8c2b8]">
                I tett samspill med
                <Link href="/tjenester/digital-markedsforing/betalt-media" className="ml-1 border-b border-[#ff4101]/70 text-[#f2efe9] hover:text-white">
                  Betalt media
                </Link>
                og
                <Link href="/tjenester/digital-markedsforing/analyse" className="ml-1 border-b border-[#ff4101]/70 text-[#f2efe9] hover:text-white">
                  Analyse
                </Link>
                blir prioritering enklere og tiltakene mer konsistente over tid.
              </p>
            </div>

            <ol className="space-y-4">
              {[
                ["01", "Forsta sokeatferd"],
                ["02", "Kartlegge synlighet"],
                ["03", "Strukturere innhold"],
                ["04", "Bygge autoritet"],
                ["05", "Forbedre over tid"],
              ].map(([num, title]) => (
                <li
                  key={title}
                  className="grid gap-3 rounded-[12px] border border-[#3a3530] bg-[#221f1c] p-4 md:grid-cols-[auto_1fr] md:items-center md:gap-5"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ff4101]/55 bg-[#2c241f] text-[11px] font-semibold tracking-[0.1em] text-[#f3eee8]">
                    {num}
                  </span>
                  <p className="text-lg font-semibold tracking-[-0.02em] text-[#f3eee8]">{title}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rounded-[18px] border border-[#2e2a26] bg-[#1b1917] px-6 py-14 md:px-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bfb8ae]">
                FAQ
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
                Sporsmal vi ofte far for oppstart.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c8c2b8]">
                Svarene er skrevet for baade mennesker og sokeflater, med tydelig
                struktur og naturlig sprak.
              </p>
            </div>

            <div className="divide-y divide-[#3a3530] rounded-[14px] border border-[#3a3530] bg-[#211e1b]">
              {faqItems.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.02em] text-[#f2efe9]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-base leading-8 text-[#c8c2b8]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
