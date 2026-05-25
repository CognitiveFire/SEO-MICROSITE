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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
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
    <section id={id} className="px-6 py-16 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/70 pt-14">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]">{eyebrow}</p> : null}
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl">{title}</h2>
        {intro ? <p className="mt-4 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">{intro}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#e63322] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf2d1d]"
      >
        Snakk med oss
      </Link>
      <a
        href="#hvordan-vi-jobber"
        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-line px-7 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5"
      >
        Se hvordan vi jobber
      </a>
    </div>
  );
}

export function EcosystemVisual() {
  const nodes = [
    "SEO",
    "Betalt media",
    "Analyse",
    "Video",
    "Sosiale medier",
    "Programmatic",
    "DOOH",
    "Podcast",
    "Creator network",
  ];

  return (
    <div className="relative h-[380px] rounded-[26px] border border-apriil-line/70 bg-white p-8 shadow-[0_24px_60px_rgba(23,23,23,0.08)]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {nodes.map((label, index) => {
          const angle = (index / nodes.length) * Math.PI * 2;
          const x = 50 + Math.cos(angle) * 37;
          const y = 50 + Math.sin(angle) * 37;

          return (
            <motion.div
              key={label}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-flex rounded-full border border-apriil-line bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-apriil-dark">
                {label}
              </span>
            </motion.div>
          );
        })}

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.map((_, index) => {
            const angle = (index / nodes.length) * Math.PI * 2;
            const x = 50 + Math.cos(angle) * 37;
            const y = 50 + Math.sin(angle) * 37;
            return <line key={index} x1="50" y1="50" x2={x} y2={y} stroke="rgba(23,23,23,0.15)" strokeWidth="0.22" />;
          })}
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e63322]/30 bg-[#fff6f4] px-6 py-2.5 text-sm font-semibold text-[#b42318]"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Vekst
      </motion.div>
    </div>
  );
}

export function SignalFlowVisual() {
  return (
    <div className="relative h-[380px] rounded-[26px] border border-apriil-line/70 bg-white p-8 shadow-[0_24px_60px_rgba(23,23,23,0.08)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M10 22 C 28 26, 34 44, 50 44 C 67 44, 72 24, 90 28" fill="none" stroke="rgba(23,23,23,0.22)" strokeWidth="0.25" />
        <path d="M10 50 C 30 55, 35 70, 54 68 C 72 66, 74 45, 90 46" fill="none" stroke="rgba(23,23,23,0.14)" strokeWidth="0.25" />
        <path d="M10 74 C 28 74, 35 86, 49 86 C 67 86, 74 67, 90 66" fill="none" stroke="rgba(23,23,23,0.16)" strokeWidth="0.25" />
      </svg>

      <motion.div
        className="absolute left-[11%] top-[21%] rounded-full border border-apriil-line bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-apriil-muted"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Fragmenterte signaler
      </motion.div>
      <motion.div
        className="absolute left-[37%] top-[45%] rounded-full border border-apriil-line bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-apriil-muted"
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Validerte data
      </motion.div>
      <motion.div
        className="absolute left-[62%] top-[65%] rounded-full border border-apriil-line bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-apriil-muted"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Beslutningsflyt
      </motion.div>
      <motion.div
        className="absolute right-[9%] top-[35%] rounded-full border border-[#e63322]/30 bg-[#fff6f4] px-4 py-1.5 text-xs font-semibold text-[#b42318]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        Prioritering med klarhet
      </motion.div>
    </div>
  );
}

export function MethodologyGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {steps.map((step, index) => (
        <motion.article
          key={step.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="rounded-[18px] border border-apriil-line/80 bg-white p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e63322]">{step.label}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark">{step.title}</h3>
          <ul className="mt-5 grid gap-2 text-sm leading-7 text-apriil-muted md:text-base">
            {step.points.map((point) => (
              <li key={point} className="flex items-start gap-3 border-t border-apriil-line/60 pt-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e63322]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

export function CapabilityGrid({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {capabilities.map((item, index) => (
        <motion.article
          key={item.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          className="group rounded-[16px] border border-apriil-line/80 bg-white p-5 transition hover:-translate-y-0.5"
        >
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-apriil-dark">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-apriil-muted">{item.body}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#a96436]">Se mer →</p>
        </motion.article>
      ))}
    </div>
  );
}

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {studies.map((study, index) => (
        <motion.article
          key={study.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="rounded-[18px] border border-apriil-line/80 bg-white p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e63322]">Case</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">{study.title}</h3>
          <dl className="mt-5 space-y-3 text-sm leading-7">
            <div>
              <dt className="font-semibold text-apriil-dark">Situasjon</dt>
              <dd className="text-apriil-muted">{study.situation}</dd>
            </div>
            <div>
              <dt className="font-semibold text-apriil-dark">Utfordring</dt>
              <dd className="text-apriil-muted">{study.challenge}</dd>
            </div>
            <div>
              <dt className="font-semibold text-apriil-dark">Tiltak</dt>
              <dd className="text-apriil-muted">{study.actions}</dd>
            </div>
            <div>
              <dt className="font-semibold text-apriil-dark">Resultat</dt>
              <dd className="text-apriil-dark">{study.result}</dd>
            </div>
          </dl>
        </motion.article>
      ))}
    </div>
  );
}

export function PricingGrid({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <motion.article
          key={tier.name}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className={
            tier.recommended
              ? "rounded-[24px] border border-[#e63322] bg-[#fff6f4] p-7 shadow-[0_16px_44px_rgba(230,51,34,0.12)]"
              : "rounded-[24px] border border-apriil-line/80 bg-white p-7 shadow-[0_14px_40px_rgba(23,23,23,0.06)]"
          }
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]">{tier.name}</p>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark">{tier.price}</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">{tier.audience}</p>
          <ul className="mt-5 grid gap-2.5 text-sm leading-7 text-apriil-muted">
            {tier.focus.map((item) => (
              <li key={item} className="flex items-start gap-2.5 border-t border-apriil-line/60 pt-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e63322]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {tier.recommended ? (
            <p className="mt-6 rounded-full border border-[#e63322]/30 bg-[#fff0ec] px-3 py-1 text-xs font-semibold text-[#b42318]">
              Anbefalt for de fleste virksomheter
            </p>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
