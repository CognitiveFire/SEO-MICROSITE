import Link from "next/link";
import {
  CaseStudyGrid,
  MethodologyGrid,
  SectionContainer,
} from "@/components/digital-markedsforing/ui";

export type ChannelServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  approachTitle: string;
  approachIntro: string;
  caseStudy: {
    title: string;
    situation: string;
    challenge: string;
    actions: string;
    result: string;
  };
};

export function ChannelServicePage({
  eyebrow,
  title,
  intro,
  approachTitle,
  approachIntro,
  caseStudy,
}: ChannelServicePageProps) {
  return (
    <main>
      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="w-full border-t border-apriil-line/70 pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-muted">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.95]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
            {intro}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2d2824]"
            >
              Snakk med oss
            </Link>
          </div>
        </div>
      </section>

      <SectionContainer
        eyebrow="Approach"
        title={approachTitle}
        intro={approachIntro}
      >
        <MethodologyGrid
          steps={[
            {
              label: "Steg 1",
              title: "Analyse",
              points: ["Mål", "Signalgrunnlag", "Prioriteringer"],
            },
            {
              label: "Steg 2",
              title: "Plan",
              points: ["Tiltak", "Kanalrolle", "Målestruktur"],
            },
            {
              label: "Steg 3",
              title: "Gjennomforing",
              points: ["Lopende oppfolging", "Optimalisering", "Review"],
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer eyebrow="Case study" title="Anonymisert kundeeksempel">
        <CaseStudyGrid studies={[caseStudy]} />
      </SectionContainer>
    </main>
  );
}
