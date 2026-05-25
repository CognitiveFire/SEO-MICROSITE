"use client";

import Image from "next/image";
import { useState } from "react";

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
  const activeStudy =
    studies.find((study) => study.id === activeId) ?? studies[0];

  if (!activeStudy) {
    return null;
  }

  return (
    <section className="border-t border-apriil-line/70 pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
          Case-eksempler
        </p>
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
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
            {activeStudy.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-apriil-muted">
            {activeStudy.subtitle}
          </p>

          <p className="mt-6 text-base leading-8 text-apriil-muted">
            {activeStudy.intro}
          </p>
          <p className="mt-5 text-base leading-8 text-apriil-muted">
            {activeStudy.challenge}
          </p>
          <p className="mt-5 border-t border-apriil-line/80 pt-4 text-base leading-8 text-apriil-muted">
            {activeStudy.insight}
          </p>
          <p className="mt-5 text-base leading-8 text-apriil-muted">
            {activeStudy.approach}
          </p>

          <ul className="mt-6 space-y-3 text-base leading-8 text-apriil-muted">
            {activeStudy.outcomes.map((outcome) => (
              <li key={outcome} className="border-t border-apriil-line/80 pt-3">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div className="apriil-editorial-surface overflow-hidden rounded-[16px] border border-apriil-line/70">
          <div className="relative h-[420px] w-full md:h-[560px]">
            <Image
              src={activeStudy.imageSrc}
              alt={activeStudy.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
