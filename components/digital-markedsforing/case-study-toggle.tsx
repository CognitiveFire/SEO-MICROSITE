"use client";

import { useEffect, useState } from "react";
import { IpadFrameImage } from "@/components/digital-markedsforing/ipad-frame-image";

export type CaseStudyContent = {
  id: string;
  toggleLabel: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  challenge: string;
  insight: string;
  approach: string;
  outcomes: string[];
};

export function CaseStudyToggle({ studies }: { studies: CaseStudyContent[] }) {
  const [activeId, setActiveId] = useState(studies[0]?.id ?? "");
  const [expanded, setExpanded] = useState(false);
  const activeStudy =
    studies.find((study) => study.id === activeId) ?? studies[0];
  const hasMultipleStudies = studies.length > 1;

  useEffect(() => {
    setExpanded(false);
  }, [activeId]);

  if (!activeStudy) {
    return null;
  }

  return (
    <section className="border-t border-apriil-line/70 pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
          Case-eksempler
        </p>
        {hasMultipleStudies ? (
          <div className="ml-auto flex flex-wrap gap-2">
            {studies.map((study) => {
              const isActive = study.id === activeStudy.id;
              return (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveId(study.id)}
                  className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                    isActive
                      ? "border-[#ff4101]/50 bg-[#fff4ef] text-apriil-dark"
                      : "border-apriil-line/80 bg-[#f8f7f4] text-apriil-muted hover:border-apriil-dark/30"
                  }`}
                  aria-pressed={isActive}
                >
                  {study.toggleLabel}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
            {activeStudy.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-apriil-muted md:text-[1.02rem]">
            {activeStudy.subtitle}
          </p>

          <p className="mt-6 text-base leading-8 text-apriil-muted">
            {activeStudy.intro}
          </p>

          <div className="mt-6 rounded-[12px] border border-apriil-line/80 bg-[#f8f7f4] p-4 md:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">
              Strategisk innsikt
            </p>
            <p className="mt-2 text-sm leading-7 text-apriil-muted">
              {activeStudy.insight}
            </p>
          </div>

          {expanded ? (
            <div className="mt-5 space-y-5 border-t border-apriil-line/80 pt-5">
              <p className="text-base leading-8 text-apriil-muted">
                {activeStudy.challenge}
              </p>
              <p className="text-base leading-8 text-apriil-muted">
                {activeStudy.approach}
              </p>
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-5 inline-flex items-center rounded-full border border-apriil-line/80 bg-[#f8f7f4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-apriil-dark transition hover:border-apriil-dark/40"
            aria-expanded={expanded}
          >
            {expanded ? "Vis mindre" : "Les mer"}
          </button>

          <ul className="mt-6 space-y-3 text-base leading-8 text-apriil-muted">
            {activeStudy.outcomes.map((outcome) => (
              <li key={outcome} className="border-t border-apriil-line/80 pt-3">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div className="apriil-editorial-surface rounded-[16px] border border-apriil-line/70 p-5 md:p-7">
          <div className="mx-auto w-full max-w-[420px]">
            <IpadFrameImage
              src={activeStudy.imageSrc}
              alt={activeStudy.imageAlt}
              sizes="(min-width: 1024px) 35vw, 85vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
