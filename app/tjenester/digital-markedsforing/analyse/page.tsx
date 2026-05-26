import type { Metadata } from "next";
import Link from "next/link";
import { CtaPillLink } from "@/components/cta-pill";
import { ClarityIntelligenceGraphic } from "@/components/digital-markedsforing/clarity-intelligence-graphic";
import { IpadFrameImage } from "@/components/digital-markedsforing/ipad-frame-image";
import { ServiceSubmenu } from "@/components/digital-markedsforing/service-submenu";

export const metadata: Metadata = {
  title: "Analyse | Digital markedsforing | Apriil",
  description:
    "Clarity fra Apriil er en beslutningsmodell som kobler signaler, synlighet og kommersiell prioritering for bedre markedsbeslutninger.",
};

const faqItems = [
  {
    question: "Hvordan vet vi hvilke aktiviteter som faktisk fungerer?",
    answer:
      "Vi vurderer tiltak opp mot signaler for synlighet, ettersporsel og kommersiell utvikling, ikke bare kanalresultater isolert.",
  },
  {
    question: "Hvordan brukes analyse i prioritering?",
    answer:
      "Analyse brukes for a velge hva som skal styrkes, hva som skal reduseres og hvilke tiltak som bygger effekt over tid.",
  },
  {
    question: "Hva er forskjellen mellom rapportering og Clarity?",
    answer:
      "Rapportering beskriver aktivitet. Clarity tolker signaler og oversetter dem til konkrete prioriteringsvalg pa tvers av kanaler.",
  },
  {
    question: "Hvordan fungerer attribusjon i praksis?",
    answer:
      "Attribusjon brukes som beslutningsstotte, ikke fasit. Vi vurderer sammenheng mellom synlighet, kundereise og kommersielle utfall.",
  },
  {
    question: "Hvordan kombineres analyse med SEO og annonsering?",
    answer:
      "Vi kobler signaler fra SEO, paid media og innhold i en felles prioriteringsmodell for tydeligere kanalroller.",
  },
  {
    question: "Hvordan reduseres bortkastet aktivitet?",
    answer:
      "Ved a prioritere tiltak etter effektpotensial og kommersiell relevans reduseres aktivitet som ikke flytter beslutningsbildet.",
  },
  {
    question: "Hvordan brukes signaler til a prioritere riktig?",
    answer:
      "Vi bruker signaler for a identifisere hva markedet responderer pa, hvor ettersporsel utvikler seg og hvilke investeringer som bor flyttes.",
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

export default function AnalyseSubPage() {
  return (
    <main className="w-full pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="px-6 pt-8 md:px-10 md:pt-10 xl:px-16">
        <ServiceSubmenu />
      </div>

      <section className="px-6 pt-16 md:px-10 md:pt-20 xl:px-16">
        <div className="grid gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Analyse
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              Bedre beslutninger starter med klarere signaler.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
              De fleste virksomheter har tilgang til store mengder data.
              Utfordringen er a forsta hvilke signaler som faktisk betyr noe -
              og hvordan de bor pavirke prioriteringer, synlighet og
              investeringer.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaPillLink href="#kontakt-skjema">Snakk med oss</CtaPillLink>
              <CtaPillLink href="#operating-model" className="bg-[#f2f0eb] text-apriil-dark">
                Se hvordan Clarity fungerer
              </CtaPillLink>
            </div>
          </div>
          <ClarityIntelligenceGraphic />
        </div>
      </section>

      <section className="mt-20 border-y border-[#2f2b27] bg-[#181614] px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px] space-y-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bdb6ab]">
              Why most analytics fail
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
              Data er sjelden problemet.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#c8c2b8] md:text-lg md:leading-9">
              De fleste virksomheter har allerede rapportering, dashboards og
              sporing pa plass. Likevel er det ofte uklart hvilke aktiviteter
              som faktisk pavirker synlighet, ettersporsel og utvikling.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Frakoblede systemer og kanal-siloer",
              "Rapportering uten tydelig prioritering",
              "Konflikt mellom plattformsignaler og markedsrealitet",
              "Aktivitet drevet av vanity metrics",
              "Overrapportering uten kommersiell tolkning",
              "Svak attribusjon i beslutningsnaere faser",
              "Fragmentert beslutningslogikk mellom team",
              "Hoy aktivitet uten tydelig retning",
            ].map((item) => (
              <article key={item} className="rounded-[12px] border border-[#38332e] bg-[#221f1c] px-4 py-4">
                <p className="text-sm leading-7 text-[#d1cbc0]">{item}</p>
              </article>
            ))}
          </div>

          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[#38332d]">
            <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-[#ff4101]/70" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
            The intelligence gap
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.96]">
            Maling alene skaper ikke klarhet.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
            Mange optimaliserer kanaler, kampanjer og rapporter uten a forsta
            markedsignaler, synlighetsmonster og hvor ettersporselen faktisk
            utvikler seg. Clarity handler om a tolke signaler, synlighet,
            sokeatferd, attribusjon og kommersielle monster for bedre
            beslutninger.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">
                Uten tolkning
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-apriil-muted">
                <li className="border-t border-apriil-line/70 pt-2">Flere rapporter, mindre retning</li>
                <li className="border-t border-apriil-line/70 pt-2">Kanaler vurderes isolert</li>
                <li className="border-t border-apriil-line/70 pt-2">Tiltak velges pa aktivitet, ikke effekt</li>
              </ul>
            </article>
            <article className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">
                Med Clarity
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-apriil-muted">
                <li className="border-t border-apriil-line/70 pt-2">Signaler oversettes til beslutningsgrunnlag</li>
                <li className="border-t border-apriil-line/70 pt-2">Synlighet og ettersporsel sees samlet</li>
                <li className="border-t border-apriil-line/70 pt-2">Prioritering skjer etter kommersiell verdi</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
            What Clarity actually does
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.96]">
            Clarity samler analyse, synlighet og prioritering i en modell.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
            Clarity brukes for a forsta markedsatferd, identifisere
            synlighetsmuligheter, prioritere aktivitet, redusere bortkastet
            investering og styrke beslutningskvalitet pa tvers av fag.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Forsta markedsatferd",
              "Identifisere synlighetsmuligheter",
              "Prioritere aktivitet etter verdi",
              "Redusere bortkastet innsats",
              "Koordinere kanaler bedre",
              "Styrke beslutningskvalitet",
            ].map((item) => (
              <article key={item} className="rounded-[12px] border border-apriil-line/80 bg-[#f8f7f4] px-4 py-4">
                <p className="text-base leading-7 text-apriil-dark">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="operating-model" className="border-y border-[#2f2b27] bg-[#181614] px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bdb6ab]">
            The Clarity operating model
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
            En premium arbeidsmodell for bedre prioritering.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "Steg 1",
                title: "Forsta signaler",
                points: ["sokeatferd", "synlighet", "kundereiser", "ettersporsel", "datakvalitet"],
              },
              {
                step: "Steg 2",
                title: "Tolke utvikling",
                points: ["attribusjon", "monster", "markedsendringer", "kanalpavirkning", "prioriteringsgrunnlag"],
              },
              {
                step: "Steg 3",
                title: "Prioritere aktivitet",
                points: ["styrke riktige tiltak", "redusere svake investeringer", "velge kanalroller", "bygge effekt over tid"],
              },
              {
                step: "Steg 4",
                title: "Forbedre kontinuerlig",
                points: ["laering", "optimalisering", "rapportering", "beslutningsstotte", "justering av retning"],
              },
            ].map((card) => (
              <article key={card.step} className="rounded-[14px] border border-[#3b3630] bg-[#211e1b] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#ff9b79]">{card.step}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#f2efe9]">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#d3ccc1]">
                  {card.points.map((point) => (
                    <li key={point} className="border-t border-[#3a3530] pt-2">{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
            Commercial intelligence layer
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.96]">
            Et tydeligere beslutningsgrunnlag pa tvers av kanaler.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
            Clarity kobler SEO, paid media, social, innhold, analyse,
            synlighet og attribusjon til en koordinert forstaelse av
            markedsutviklingen. Malet er ikke mer rapportering, men klarere
            prioritering.
          </p>

          <div className="mt-10 rounded-[16px] border border-apriil-line/80 bg-[#f8f7f4] p-6 md:p-8">
            <div className="grid gap-3 md:grid-cols-3">
              {["SEO", "Paid media", "Social", "Innhold", "Analyse", "Attribusjon", "Synlighet", "Distribusjon", "Kommersiell innsikt"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-full border px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.11em] ${
                    index === 8
                      ? "border-[#ff4101]/45 bg-[#fff1e8] text-apriil-dark"
                      : "border-apriil-line/80 bg-white text-apriil-muted"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
            Cross-channel prioritisation
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.96]">
            Vi optimaliserer ikke kanaler isolert.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
            Apriil koordinerer signaler, synlighet, innhold, media og
            kommersiell forstaelse samlet. Det gir bedre rekkefolge pa tiltak,
            tydeligere investeringsvalg og hoyere beslutningskvalitet.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Hva styrkes",
                body: "Tiltak med sterk effekt pa synlighet og ettersporsel.",
              },
              {
                title: "Hva reduseres",
                body: "Aktivitet som skaper volum uten strategisk bidrag.",
              },
              {
                title: "Hva koordineres",
                body: "Kanalroller, budskap og distribusjon mot felles mal.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">{item.title}</p>
                <p className="mt-3 text-base leading-8 text-apriil-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2f2b27] bg-[#181614] px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bdb6ab]">
            Case studies
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
            Strategiske case med tydelig prioritering.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[16px] border border-[#39342f] bg-[#221f1c] p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#bfb8ae]">Fjord tourism case</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#f2efe9]">Fra kanalrapportering til bedre beslutningslogikk</h3>
              <p className="mt-4 text-sm leading-7 text-[#cec8bc]">
                En aktor i reiseliv hadde mye aktivitet, men svak sammenheng mellom synlighet, ettersporsel og investeringer. Clarity ble brukt for a tolke signaler pa tvers av kanaler og definere en tydeligere prioriteringsrekkefolge.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#cec8bc]">
                Resultatet var hoyere beslutningskvalitet, mindre bortkastet aktivitet og tydeligere kobling mellom synlighet og kommersiell retning.
              </p>
              <div className="mt-6 max-w-[320px]">
                <IpadFrameImage
                  src="/apriil-digital/assets/Fjord-case study.png"
                  alt="Anonymisert Fjord case"
                  sizes="(min-width: 1024px) 28vw, 80vw"
                />
              </div>
            </article>

            <article className="rounded-[16px] border border-[#39342f] bg-[#221f1c] p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#bfb8ae]">Content and AI visibility case</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#f2efe9]">Fra innholdsvolum til tydeligere synlighetsprioritering</h3>
              <p className="mt-4 text-sm leading-7 text-[#cec8bc]">
                En virksomhet med stor innholdsportefolje manglet klar retning for hvilke tema og grep som faktisk bidro til synlighet og ettersporsel. Clarity ble brukt for a tolke sokeatferd, AI-eksponering og kommersielle signaler samlet.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#cec8bc]">
                Dette ga tydeligere prioritering, sterkere koordinering mellom SEO og distribusjon, og bedre beslutningsgrunnlag for videre investering.
              </p>
              <div className="mt-6 max-w-[320px]">
                <IpadFrameImage
                  src="/melk-case study.png"
                  alt="Anonymisert content og AI visibility case"
                  sizes="(min-width: 1024px) 28vw, 80vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
            Pricing
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.96]">
            Strategiske retainere for bedre beslutninger.
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "Innsikt",
                price: "Fra NOK 18 000 / mnd",
                body: "For virksomheter som trenger tydeligere rapportering og bedre forstaelse av dagens signaler.",
              },
              {
                name: "Clarity",
                price: "Fra NOK 34 000 / mnd",
                body: "For virksomheter som onsker lopende analyse, prioritering og koordinering pa tvers av synlighet og distribusjon.",
                recommended: true,
              },
              {
                name: "Strategisk analysepartner",
                price: "Fra NOK 62 000 / mnd",
                body: "For virksomheter som trenger tett radgivning, executive-rapportering og kontinuerlig beslutningsstotte.",
              },
            ].map((tier) => (
              <article
                key={tier.name}
                className={`rounded-[14px] border p-6 md:p-7 ${
                  tier.recommended
                    ? "border-[#ff4101]/45 bg-[#fff3ea]"
                    : "border-apriil-line/80 bg-[#f8f7f4]"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">{tier.name}</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark">{tier.price}</p>
                {tier.recommended ? (
                  <span className="mt-3 inline-flex rounded-full border border-[#ff4101]/45 bg-[#fff1e8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-apriil-dark">
                    Anbefalt
                  </span>
                ) : null}
                <p className="mt-5 text-base leading-8 text-apriil-muted">{tier.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2f2b27] bg-[#181614] px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bdb6ab]">FAQ</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
            Sporsmal vi ofte far om Clarity.
          </h2>
          <div className="mt-8 divide-y divide-[#39342f] rounded-[14px] border border-[#39342f] bg-[#221f1c]">
            {faqItems.map((item) => (
              <details key={item.question} className="px-6 py-5 group">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.02em] text-[#f2efe9]">
                  {item.question}
                </summary>
                <p className="mt-3 text-base leading-8 text-[#c8c2b8]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-skjema" className="px-6 py-20 md:px-10 md:py-24 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.96]">
            Trenger dere et tydeligere beslutningsgrunnlag for neste prioritering?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi kan gi en konkret vurdering av signalbildet deres og anbefale
            hva som bor prioriteres pa tvers av SEO, paid media, innhold og
            distribusjon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPillLink href="#kontakt-skjema">Snakk med oss</CtaPillLink>
            <Link
              href="/tjenester/digital-markedsforing/seo"
              className="inline-flex items-center rounded-full border border-apriil-line/80 bg-[#f8f7f4] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-apriil-dark transition hover:border-apriil-dark/40"
            >
              Se koblingen til SEO
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
