import Link from "next/link";
import { HeroActions, MethodologyGrid, PricingGrid, SectionContainer } from "@/components/digital-markedsforing/ui";

export type ChannelPageTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  focusTitle: string;
  focusIntro: string;
  retainers: {
    name: string;
    price: string;
    audience: string;
    focus: string[];
    recommended?: boolean;
  }[];
};

export function ChannelPageTemplate({
  eyebrow,
  title,
  intro,
  focusTitle,
  focusIntro,
  retainers,
}: ChannelPageTemplateProps) {
  return (
    <main>
      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl border-t border-apriil-line/70 pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">{intro}</p>
          <HeroActions />
        </div>
      </section>

      <SectionContainer eyebrow="Arbeidsfokus" title={focusTitle} intro={focusIntro}>
        <MethodologyGrid
          steps={[
            {
              label: "Fase 1",
              title: "Kontekst",
              points: ["Forretningsmal", "Maalgruppe", "Rolle i miksen", "Beslutningsbehov"],
            },
            {
              label: "Fase 2",
              title: "Gjennomforing",
              points: ["Budskap", "Formatvalg", "Distribusjon", "Operasjonell kvalitet"],
            },
            {
              label: "Fase 3",
              title: "Styring",
              points: ["Signalvurdering", "Prioritering", "Lopende justering", "Ledelsesrapportering"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer eyebrow="Retainere" title="Strategiske engasjementer for kontinuerlig styring">
        <PricingGrid tiers={retainers} />
      </SectionContainer>

      <SectionContainer title="Vil dere avklare riktig rolle for dette kanalsporet?">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Vi kan gi en konkret vurdering av na-situasjonen og anbefale neste prioritering.
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
