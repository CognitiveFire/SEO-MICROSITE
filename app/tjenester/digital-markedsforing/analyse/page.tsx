import type { Metadata } from "next";
import { CtaPillLink } from "@/components/cta-pill";
import { ClarityIntelligenceGraphic } from "@/components/digital-markedsforing/clarity-intelligence-graphic";

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

    </main>
  );
}
