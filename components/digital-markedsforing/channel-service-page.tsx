import {
  MethodologyGrid,
} from "@/components/digital-markedsforing/ui";
import { CtaPillLink } from "@/components/cta-pill";
import { ServiceSubmenu } from "@/components/digital-markedsforing/service-submenu";
import {
  CaseStudyToggle,
  type CaseStudyContent,
} from "@/components/digital-markedsforing/case-study-toggle";

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
  caseStudyImageSrc?: string;
  caseStudyImageAlt?: string;
};

export function ChannelServicePage({
  eyebrow,
  title,
  intro,
  approachTitle,
  approachIntro,
  caseStudy,
  caseStudyImageSrc = "/apriil-digital/assets/Fjord-case study.png",
  caseStudyImageAlt = "Anonymisert casevisual",
}: ChannelServicePageProps) {
  const caseStudies: CaseStudyContent[] = [
    {
      id: "service-case",
      toggleLabel: "Case",
      title: caseStudy.title,
      subtitle: "Anonymisert kundeeksempel",
      imageSrc: caseStudyImageSrc,
      imageAlt: caseStudyImageAlt,
      intro: caseStudy.situation,
      challenge: caseStudy.challenge,
      insight: "Tiltakene ble vurdert ut fra kommersiell relevans og tydelige signaler.",
      approach: caseStudy.actions,
      outcomes: [caseStudy.result],
    },
  ];

  return (
    <main className="px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <div className="w-full space-y-20 md:space-y-24">
        <ServiceSubmenu />

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
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
              <CtaPillLink href="#kontakt-skjema">
                Snakk med oss
              </CtaPillLink>
            </div>
          </div>
          <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Strategisk posisjonering
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-apriil-muted">
              <li className="border-t border-apriil-line/80 pt-4">{approachTitle}</li>
              <li className="border-t border-apriil-line/80 pt-4">{approachIntro}</li>
              <li className="border-t border-apriil-line/80 pt-4">
                Tydelig rolle i den samlede vekstmodellen.
              </li>
              <li className="border-t border-apriil-line/80 pt-4">
                Prioritert arbeidsform med fokus på kommersiell effekt.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Hvordan vi jobber
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
              Strukturert arbeid for tydeligere kommersiell retning.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
              Vi bruker en enkel beslutningsrytme som kobler analyse, valg og
              oppfølging til ett operativt rammeverk.
            </p>
          </div>
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
                title: "Gjennomføring",
                points: ["Løpende oppfølging", "Optimalisering", "Review"],
              },
            ]}
          />
        </section>

        <CaseStudyToggle studies={caseStudies} />
      </div>
    </main>
  );
}
