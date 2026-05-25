"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Step = {
  label: string;
  title: string;
  points: string[];
};

type CaseStudy = {
  title: string;
  situation: string;
  challenge: string;
  actions: string;
  result: string;
};

type PricingTier = {
  name: string;
  price: string;
  audience: string;
  focus: string[];
  recommended?: boolean;
};

type Capability = {
  title: string;
  body: string;
};

const reveal = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export function SectionContainer({
  eyebrow,
  title,
  intro,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="px-6 py-20 md:px-10 md:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/70 pt-12 md:pt-14">
        {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">{eyebrow}</p> : null}
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.97]">
          {title}
        </h2>
        {intro ? <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">{intro}</p> : null}
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <Link
        href="/contact"
        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-apriil-ink-soft"
      >
        Snakk med oss
      </Link>
      <a
        href="#metodikk"
        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-line/80 px-7 py-3 text-sm font-semibold text-apriil-dark transition hover:bg-white/65"
      >
        Se metodikken
      </a>
    </div>
  );
}

export function EcosystemVisual() {
  return (
    <div className="apriil-editorial-surface relative h-[360px] overflow-hidden rounded-[26px] border border-apriil-line/70 p-8">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="10" y1="18" x2="90" y2="18" stroke="rgba(23,23,23,0.16)" strokeWidth="0.2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(23,23,23,0.14)" strokeWidth="0.2" />
        <line x1="10" y1="82" x2="90" y2="82" stroke="rgba(23,23,23,0.16)" strokeWidth="0.2" />
        <line x1="20" y1="10" x2="20" y2="90" stroke="rgba(23,23,23,0.12)" strokeWidth="0.2" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(23,23,23,0.08)" strokeWidth="0.2" />
        <line x1="80" y1="10" x2="80" y2="90" stroke="rgba(23,23,23,0.12)" strokeWidth="0.2" />

        <motion.path
          d="M12 76 C 26 68, 35 52, 50 50 C 64 48, 72 34, 88 22"
          fill="none"
          stroke="rgba(23,23,23,0.45)"
          strokeWidth="0.32"
          strokeDasharray="2.2 1.2"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -8 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative h-full">
        {[
          { label: "Analyse", x: "10%", y: "72%" },
          { label: "Synlighet", x: "34%", y: "56%" },
          { label: "Markedsforing", x: "53%", y: "48%" },
          { label: "Prioritering", x: "72%", y: "34%" },
          { label: "Beslutning", x: "84%", y: "20%" },
        ].map((node) => (
          <div key={node.label} className="absolute" style={{ left: node.x, top: node.y }}>
            <span className="inline-flex rounded-full border border-apriil-line/80 bg-[#f6f4ef] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-apriil-dark">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SignalFlowVisual() {
  return (
    <div className="apriil-editorial-surface relative h-[360px] overflow-hidden rounded-[26px] border border-apriil-line/70 p-8">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M8 24 C 23 21, 31 36, 45 36 C 60 36, 66 21, 92 20" fill="none" stroke="rgba(23,23,23,0.25)" strokeWidth="0.26" />
        <path d="M8 52 C 24 58, 36 63, 49 60 C 63 57, 72 42, 92 44" fill="none" stroke="rgba(23,23,23,0.2)" strokeWidth="0.26" />
        <path d="M8 80 C 24 76, 33 88, 49 86 C 67 84, 77 71, 92 67" fill="none" stroke="rgba(23,23,23,0.18)" strokeWidth="0.26" />
        <motion.circle
          cx="10"
          cy="24"
          r="1.2"
          fill="rgba(23,23,23,0.55)"
          animate={{ cx: [10, 44, 88], cy: [24, 36, 20] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative grid h-full content-between">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-apriil-muted">Signalniva</p>
        <div className="space-y-2 text-sm text-apriil-muted">
          <p>Fragmenterte datapunkter</p>
          <p>Validerte signaler</p>
          <p>Strategisk beslutningsgrunnlag</p>
        </div>
      </div>
    </div>
  );
}

export function MethodologyGrid({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative border-l border-apriil-line/80 pl-7 md:pl-10">
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative pb-12 last:pb-0"
        >
          <span className="absolute -left-[39px] top-0 inline-flex h-5 w-5 items-center justify-center rounded-full border border-apriil-line/80 bg-[#f7f6f3] text-[11px] font-semibold text-apriil-dark md:-left-[43px]">
            {index + 1}
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">{step.label}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark md:text-[2rem]">{step.title}</h3>
          <ul className="mt-5 grid gap-2 text-base leading-7 text-apriil-muted md:grid-cols-2">
            {step.points.map((point) => (
              <li key={point} className="border-t border-apriil-line/70 pt-2.5">
                {point}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  );
}

export function CapabilityGrid({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
      {capabilities.map((item, index) => (
        <motion.article
          key={item.title}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: index * 0.03 }}
          className="border-t border-apriil-line/80 pt-5"
        >
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">{item.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-8 text-apriil-muted">{item.body}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {studies.map((study, index) => (
        <motion.article
          key={study.title}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">Case</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark">{study.title}</h3>
          <dl className="mt-6 space-y-4 text-sm leading-7">
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">Situasjon</dt>
              <dd className="mt-1 text-apriil-muted">{study.situation}</dd>
            </div>
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">Problem</dt>
              <dd className="mt-1 text-apriil-muted">{study.challenge}</dd>
            </div>
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">Tiltak</dt>
              <dd className="mt-1 text-apriil-muted">{study.actions}</dd>
            </div>
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">Resultat</dt>
              <dd className="mt-1 text-apriil-dark">{study.result}</dd>
            </div>
          </dl>
        </motion.article>
      ))}
    </div>
  );
}

export function PricingGrid({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="divide-y divide-apriil-line/80 overflow-hidden rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4]">
      {tiers.map((tier, index) => (
        <motion.article
          key={tier.name}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="grid gap-6 px-6 py-8 md:grid-cols-[0.9fr_1.1fr_1fr] md:items-start"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apriil-muted">{tier.name}</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-[2.2rem]">{tier.price}</p>
            {tier.recommended ? (
              <p className="mt-3 inline-flex rounded-full border border-apriil-line/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-apriil-dark">
                Anbefalt
              </p>
            ) : null}
          </div>
          <p className="text-base leading-8 text-apriil-muted">{tier.audience}</p>
          <ul className="space-y-2 text-sm leading-7 text-apriil-muted">
            {tier.focus.map((item) => (
              <li key={item} className="border-t border-apriil-line/70 pt-2">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
