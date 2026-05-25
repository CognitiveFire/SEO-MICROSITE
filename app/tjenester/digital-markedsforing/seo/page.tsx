import type { Metadata } from "next";
import Link from "next/link";
import { CtaPillLink } from "@/components/cta-pill";
import { IpadFrameImage } from "@/components/digital-markedsforing/ipad-frame-image";
import { ServiceSubmenu } from "@/components/digital-markedsforing/service-submenu";

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

const pricing = [
  {
    name: "Fundament",
    price: "Fra NOK 16 000 / mnd",
    body: "For virksomheter som trenger bedre struktur, teknisk kvalitet og tydeligere organisk synlighet.",
    bullets: ["Teknisk kvalitet", "Innholdsstruktur", "Maanedlig prioritering"],
  },
  {
    name: "Vekst",
    price: "Fra NOK 29 000 / mnd",
    body: "For virksomheter som ønsker lopende SEO-radgivning, innholdsutvikling og kontinuerlig forbedring.",
    bullets: ["Lopende rådgivning", "Tverrfaglig samspill", "Kontinuerlig oppfolging"],
    featured: true,
  },
  {
    name: "Strategisk",
    price: "Fra NOK 52 000 / mnd",
    body: "For komplekse nettsteder, flere markeder eller behov for tett strategisk oppfolging.",
    bullets: ["Lederforankret retning", "Komplekse strukturer", "Langsiktig synlighetsarbeid"],
  },
];

export default function SeoSubPage() {
  return (
    <main className="w-full px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full space-y-20 md:space-y-24">
        <ServiceSubmenu />

        <section className="border-t border-apriil-line/70 pt-12">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPillLink href="#kontakt-skjema">Snakk med oss</CtaPillLink>
            </div>
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

        <section className="border-t border-apriil-line/70 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
                Case-eksempel
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
                Fra fragmentert innhold til tydelig synlighet
              </h2>
              <p className="mt-6 text-base leading-8 text-apriil-muted">
                En stor norsk virksomhet hadde produsert mye innhold over tid,
                men manglet tydelig struktur mellom informasjon, intensjon og
                kommersielle behov.
              </p>
              <p className="mt-5 text-base leading-8 text-apriil-muted">
                Ved a bygge en tydelig content hierarchy, styrke intern lenking
                og prioritere sokebehov naermere beslutning, ble synligheten mer
                robust i baade tradisjonelle sokeflater og AI-drevne svar.
              </p>
              <ul className="mt-6 space-y-3 text-base leading-8 text-apriil-muted">
                <li className="border-t border-apriil-line/80 pt-3">sterkere synlighet pa kommersielle sok</li>
                <li className="border-t border-apriil-line/80 pt-3">okende organisk trafikk med hoyere relevans</li>
                <li className="border-t border-apriil-line/80 pt-3">bedre kvalitet pa henvendelser og prioriteringer</li>
              </ul>
            </div>
            <div className="apriil-editorial-surface rounded-[16px] border border-apriil-line/70 p-5 md:p-7">
              <div className="mx-auto w-full max-w-[420px]">
                <IpadFrameImage
                  src="/apriil-digital/assets/Fjord-case study.png"
                  alt="Anonymisert visualisering av strukturert synlighetsarbeid"
                  sizes="(min-width: 1024px) 35vw, 85vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-apriil-line/70 pt-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Prisniva
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              SEO-retainere med tydelig scope.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Prisnivaet reflekterer ambisjon, kompleksitet og behov for
              oppfolging - ikke abonnementspakker.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {pricing.map((tier) => (
                <article
                  key={tier.name}
                  className={`flex h-full flex-col rounded-[14px] border p-6 md:p-7 ${
                    tier.featured
                      ? "border-[#ff4101]/40 bg-[#fff5ef]"
                      : "border-apriil-line/80 bg-[#f8f7f4]"
                  }`}
                >
                  <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">
                        {tier.name}
                      </p>
                      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark">
                        {tier.price}
                      </p>
                    </div>
                    {tier.featured ? (
                      <span className="inline-flex rounded-full border border-[#ff4101]/45 bg-[#fff1e8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-apriil-dark">
                        Anbefalt
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-5 text-base leading-8 text-apriil-muted">{tier.body}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-apriil-muted">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="border-t border-apriil-line/70 pt-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
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
