import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyGrid,
  EcosystemVisual,
  HeroActions,
  MethodologyGrid,
  SectionContainer,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Digital markedsforing | Apriil",
  description:
    "Apriil samler analyse, synlighet og markedsforing i ett strategisk rammeverk for tydeligere prioriteringer og sterkere kommersielle beslutninger.",
};

const serviceLinks = [
  {
    title: "SEO - sokemotoroptimalisering",
    body: "Vi bygger synlighet gjennom tydelig innholdsstruktur, teknisk kvalitet og prioriteringer som stotter kommersielle mal.",
    href: "/tjenester/digital-markedsforing/seo",
  },
  {
    title: "Paid media",
    body: "Vi styrer medieinvesteringer med klar kanalrolle, bedre signalgrunnlag og tydelig kommersiell retning.",
    href: "/tjenester/digital-markedsforing/betalt-media",
  },
  {
    title: "Analytics og intelligence",
    body: "Vi omsetter data til beslutningsgrunnlag som gir ledelse og team tryggere prioriteringer over tid.",
    href: "/tjenester/digital-markedsforing/analyse",
  },
];

function ServiceMarker() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 8C24 17.3 30.7 24 40 24C30.7 24 24 30.7 24 40C24 30.7 17.3 24 8 24C17.3 24 24 17.3 24 8Z" fill="#ff4e1a" />
      <path d="M24 14C24 20.7 28.3 25 35 25C28.3 25 24 29.3 24 36C24 29.3 19.7 25 13 25C19.7 25 24 20.7 24 14Z" fill="#ff8e66" fillOpacity="0.5" />
    </svg>
  );
}

export default function DigitalMarkedsforingPage() {
  return (
    <main>
      <section className="px-6 pb-14 pt-20 md:px-10 md:pb-20 xl:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">Digital markedsforing</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              Bedre beslutninger starter med klarere signaler.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Clarity samler analyse, synlighet og markedsforing i en struktur som gjør det enklere
              a prioritere riktig.
            </p>
            <HeroActions />
          </div>
          <EcosystemVisual />
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 md:py-16 xl:px-16">
        <div className="mx-auto max-w-6xl border-t border-apriil-line/70 pt-12">
          <p className="max-w-5xl text-3xl leading-[1.2] tracking-[-0.035em] text-apriil-dark md:text-5xl md:leading-[1.14]">
            Vi jobber ikke med kanalaktiviteter i silo. Vi bygger et styringssystem for kommersiell retning.
          </p>
        </div>
      </section>

      <SectionContainer
        id="metodikk"
        eyebrow="Metodikk"
        title="Clarity-metodikken"
        intro="Metodikken er bygget for ledergrupper og fagteam som trenger et felles beslutningssprak."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Steg 1",
              title: "Kartlegge virkeligheten",
              points: ["Ettersporsel", "Datakvalitet", "Synlighet", "Kanalroller"],
            },
            {
              label: "Steg 2",
              title: "Vurdere effekt",
              points: ["Hva som faktisk driver verdi", "Hva som skaper stoy", "Hva som mangler styring"],
            },
            {
              label: "Steg 3",
              title: "Prioritere tiltak",
              points: ["Tiltaksrekkefolge", "Rollefordeling", "Investeringsretning", "Beslutningspunkter"],
            },
            {
              label: "Steg 4",
              title: "Forbedre kontinuerlig",
              points: ["Tydelig rapportering", "Strategiske reviews", "Kontinuerlig justering"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer eyebrow="Tjenester" title="Vi kan hjelpe deg med:" intro="Tre kjerneomrader under Digital markedsforing.">
        <div className="grid gap-5 lg:grid-cols-3">
          {serviceLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[6px] bg-[#dfddd6] px-8 py-10 text-center transition hover:bg-[#d9d6ce]"
            >
              <div className="mx-auto mb-6 flex w-fit justify-center">
                <ServiceMarker />
              </div>
              <h3 className="text-[41px] text-[clamp(1.8rem,2.6vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-apriil-dark">
                {item.title}
              </h3>
              <p className="mx-auto mt-5 max-w-[38ch] text-base leading-8 text-[#2d2d2b]">{item.body}</p>
              <p className="mt-6 text-[32px] text-[1.95rem] font-semibold tracking-[-0.02em] text-apriil-dark">Les mer</p>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        eyebrow="Case"
        title="Tre anonymiserte oppdrag"
        intro="Eksempler pa hvordan tydeligere prioriteringer ga bedre kommersiell styring."
      >
        <CaseStudyGrid
          studies={[
            {
              title: "Nasjonal tjenesteaktør",
              situation: "Stor aktivitet i marked, men utydelig sammenheng mellom tiltak og resultat.",
              challenge: "Lav trygghet i hvilke investeringer som faktisk ga verdi.",
              actions: "Etablerte felles signalmodell for analyse, synlighet og mediebruk.",
              result: "Mer presis prioritering i ledermoter og bedre avkastning fra medieinvesteringer.",
            },
            {
              title: "Regional B2C-virksomhet",
              situation: "Sterk ettersporsel, men varierende kvalitet i trafikk og konvertering.",
              challenge: "Kanalteam jobbet i parallelle lop uten felles prioriteringslogikk.",
              actions: "Definerte kanalroller, ny innholdsstruktur og felles styringsrytme.",
              result: "Redusert friksjon mellom team og tydeligere kommersiell retning per kvartal.",
            },
            {
              title: "Kompleks portefoljeaktør",
              situation: "Mange initiativer pa tvers av regioner og forretningsomrader.",
              challenge: "Manglende oversikt over hva som burde skaleres eller avsluttes.",
              actions: "Bygget beslutningsrammeverk med faste review-punkter for ledelse og marked.",
              result: "Mer moden styring av portefoljen og tydeligere sammenheng mellom innsats og effekt.",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer title="Nar retningen er tydelig, blir markedsforing enklere a lede.">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi kan vurdere dagens oppsett og gi en konkret anbefaling for neste beslutning.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-apriil-ink-soft md:mt-0"
          >
            Snakk med oss
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
}
