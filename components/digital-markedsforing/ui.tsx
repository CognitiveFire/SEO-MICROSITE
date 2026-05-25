"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { CtaPillAnchor, CtaPillLink } from "@/components/cta-pill";

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

export type ServiceIconKey =
  | "seo"
  | "paid"
  | "programmatic"
  | "podcast"
  | "dooh"
  | "creator"
  | "social"
  | "video"
  | "display";

export type ServiceCard = {
  title: string;
  body: string;
  href: string;
  icon: ServiceIconKey;
};

function ServiceCardIcon({ icon }: { icon: ServiceIconKey }) {
  if (icon === "paid") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="14" cy="18" r="7.2" stroke="#ff4e1a" strokeWidth="1.9" />
        <circle cx="22" cy="18" r="7.2" stroke="#ff4e1a" strokeWidth="1.9" />
        <circle cx="18" cy="12" r="7.2" stroke="#ff4e1a" strokeWidth="1.9" />
      </svg>
    );
  }

  if (icon === "programmatic") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="2.4" fill="#ff4e1a" />
        <circle cx="28" cy="8" r="2.4" fill="#ff4e1a" />
        <circle cx="18" cy="18" r="2.8" fill="#ff4e1a" />
        <circle cx="8" cy="28" r="2.4" fill="#ff4e1a" />
        <circle cx="28" cy="28" r="2.4" fill="#ff4e1a" />
        <path d="M8 8L18 18L28 8M8 28L18 18L28 28" stroke="#ff4e1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "podcast") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="14" y="8" width="8" height="14" rx="4" stroke="#ff4e1a" strokeWidth="1.9" />
        <path d="M10 16C10 20.4 13.6 24 18 24C22.4 24 26 20.4 26 16" stroke="#ff4e1a" strokeWidth="1.9" />
        <path d="M18 24V29" stroke="#ff4e1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 29H22" stroke="#ff4e1a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "dooh") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="7" y="9" width="22" height="14" rx="2.5" stroke="#ff4e1a" strokeWidth="1.9" />
        <path d="M18 23V28" stroke="#ff4e1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 28H23" stroke="#ff4e1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 14H24" stroke="#ff4e1a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "creator") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="12" r="3" fill="#ff4e1a" />
        <circle cx="10" cy="15" r="2.4" fill="#ff4e1a" fillOpacity="0.8" />
        <circle cx="26" cy="15" r="2.4" fill="#ff4e1a" fillOpacity="0.8" />
        <path d="M13 25C13.8 22.5 15.7 21 18 21C20.3 21 22.2 22.5 23 25" stroke="#ff4e1a" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M6.5 25C7.1 23.2 8.4 22 10 22" stroke="#ff4e1a" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M29.5 25C28.9 23.2 27.6 22 26 22" stroke="#ff4e1a" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "social") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M8 10H21C23.2 10 25 11.8 25 14V19C25 21.2 23.2 23 21 23H14L10 26V23H8C5.8 23 4 21.2 4 19V14C4 11.8 5.8 10 8 10Z" stroke="#ff4e1a" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M26 7L27.2 9.8L30 11L27.2 12.2L26 15L24.8 12.2L22 11L24.8 9.8L26 7Z" fill="#ff4e1a" />
      </svg>
    );
  }

  if (icon === "video") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="7" y="10" width="18" height="16" rx="3" stroke="#ff4e1a" strokeWidth="1.9" />
        <path d="M15 15L20 18L15 21V15Z" fill="#ff4e1a" />
        <path d="M25 14L31 11V25L25 22" stroke="#ff4e1a" strokeWidth="1.9" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "display") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="6" y="7" width="24" height="18" rx="2.5" stroke="#ff4e1a" strokeWidth="1.9" />
        <path d="M6 13H30M14 7V25" stroke="#ff4e1a" strokeWidth="1.9" />
        <path d="M16 28H20" stroke="#ff4e1a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="36" height="36" viewBox="0 0 62 62" fill="none" aria-hidden="true">
      <path
        d="M31 10C31 22 39 31 52 31C39 31 31 40 31 52C31 40 22 31 10 31C22 31 31 22 31 10Z"
        fill="#ff4e1a"
      />
    </svg>
  );
}

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
      <div className="w-full border-t border-apriil-line/70 pt-12 md:pt-14">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.97]">
          {title}
        </h2>
        {intro ? (
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
            {intro}
          </p>
        ) : null}
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <CtaPillLink href="/contact">
        Snakk med oss
      </CtaPillLink>
      <CtaPillAnchor href="#metodikk">
        Se hvordan vi jobber
      </CtaPillAnchor>
    </div>
  );
}

export function ServiceGridHero({ cards }: { cards: ServiceCard[] }) {
  return (
    <div className="apriil-editorial-surface relative overflow-hidden rounded-[16px] border border-apriil-line/70 p-4 md:min-h-[620px] md:p-5">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
        {cards.map((card, index) => {
          return (
            <Link key={card.title} href={card.href} className="block h-full">
              <div className="flex h-full min-h-[260px] flex-col rounded-[10px] border border-apriil-line/70 bg-[#dfddd6] px-5 py-5 text-left shadow-[0_4px_10px_rgba(23,23,23,0.04)] transition hover:bg-[#d9d6ce]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-7 flex flex-1 flex-col">
                  <div className="mb-4 flex justify-center">
                    <ServiceCardIcon icon={card.icon} />
                  </div>
                  <h3 className="text-center text-[1.08rem] font-semibold leading-[1.05] tracking-[-0.02em] text-apriil-dark">
                    {card.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[28ch] text-center text-sm leading-7 text-apriil-dark/90">
                    {card.body}
                  </p>
                  <p className="mt-auto pt-6 text-center text-sm font-medium text-apriil-dark">
                    Les mer
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function EcosystemVisual() {
  return (
    <div className="apriil-editorial-surface relative h-[360px] overflow-hidden rounded-[26px] border border-apriil-line/70 p-8">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="10"
          y1="18"
          x2="90"
          y2="18"
          stroke="rgba(23,23,23,0.16)"
          strokeWidth="0.2"
        />
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke="rgba(23,23,23,0.14)"
          strokeWidth="0.2"
        />
        <line
          x1="10"
          y1="82"
          x2="90"
          y2="82"
          stroke="rgba(23,23,23,0.16)"
          strokeWidth="0.2"
        />
        <line
          x1="20"
          y1="10"
          x2="20"
          y2="90"
          stroke="rgba(23,23,23,0.12)"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="90"
          stroke="rgba(23,23,23,0.08)"
          strokeWidth="0.2"
        />
        <line
          x1="80"
          y1="10"
          x2="80"
          y2="90"
          stroke="rgba(23,23,23,0.12)"
          strokeWidth="0.2"
        />

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
          <div
            key={node.label}
            className="absolute"
            style={{ left: node.x, top: node.y }}
          >
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
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M8 24 C 23 21, 31 36, 45 36 C 60 36, 66 21, 92 20"
          fill="none"
          stroke="rgba(23,23,23,0.25)"
          strokeWidth="0.26"
        />
        <path
          d="M8 52 C 24 58, 36 63, 49 60 C 63 57, 72 42, 92 44"
          fill="none"
          stroke="rgba(23,23,23,0.2)"
          strokeWidth="0.26"
        />
        <path
          d="M8 80 C 24 76, 33 88, 49 86 C 67 84, 77 71, 92 67"
          fill="none"
          stroke="rgba(23,23,23,0.18)"
          strokeWidth="0.26"
        />
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
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-apriil-muted">
          Signalniva
        </p>
        <div className="space-y-2 text-sm text-apriil-muted">
          <p>Fragmenterte datapunkter</p>
          <p>Validerte signaler</p>
          <p>Strategisk beslutningsgrunnlag</p>
        </div>
      </div>
    </div>
  );
}

const strategicNodes = [
  { label: "SEO", x: 50, y: 10 },
  { label: "Betalt media", x: 72, y: 18 },
  { label: "Sosiale medier", x: 85, y: 36 },
  { label: "Video", x: 85, y: 60 },
  { label: "Creator network", x: 70, y: 80 },
  { label: "Programmatic", x: 50, y: 88 },
  { label: "Podcast", x: 30, y: 80 },
  { label: "DOOH", x: 15, y: 60 },
  { label: "Display", x: 15, y: 36 },
  { label: "Analyse", x: 28, y: 18 },
];

export function StrategicSystemAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % strategicNodes.length);
    }, 2200);

    return () => window.clearInterval(tick);
  }, []);

  const secondaryIndex = (activeIndex + 3) % strategicNodes.length;

  return (
    <div className="apriil-editorial-surface relative h-[540px] overflow-hidden rounded-[18px] border border-apriil-line/70 p-6 md:h-[620px] md:p-8">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="6" y1="16" x2="94" y2="16" stroke="rgba(23,23,23,0.08)" strokeWidth="0.16" />
        <line x1="6" y1="50" x2="94" y2="50" stroke="rgba(23,23,23,0.08)" strokeWidth="0.16" />
        <line x1="6" y1="84" x2="94" y2="84" stroke="rgba(23,23,23,0.08)" strokeWidth="0.16" />
        <line x1="20" y1="8" x2="20" y2="92" stroke="rgba(23,23,23,0.06)" strokeWidth="0.16" />
        <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(23,23,23,0.06)" strokeWidth="0.16" />
        <line x1="80" y1="8" x2="80" y2="92" stroke="rgba(23,23,23,0.06)" strokeWidth="0.16" />

        {strategicNodes.map((node, index) => {
          const isActive = index === activeIndex || index === secondaryIndex;
          return (
            <motion.line
              key={node.label}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke={isActive ? "rgba(255,78,26,0.72)" : "rgba(23,23,23,0.18)"}
              strokeWidth={isActive ? "0.34" : "0.24"}
              strokeDasharray={isActive ? "1.3 1.1" : "0"}
              animate={{ opacity: isActive ? 1 : 0.42 }}
              transition={{ duration: 0.55 }}
            />
          );
        })}

        <motion.circle
          cx="50"
          cy="50"
          r="2"
          fill="rgba(23,23,23,0.6)"
          animate={{ r: [2, 2.3, 2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 h-full">
        {strategicNodes.map((node, index) => {
          const isActive = index === activeIndex || index === secondaryIndex;
          return (
            <motion.div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{ opacity: isActive ? 1 : 0.55, y: isActive ? -1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] md:text-[11px] ${
                  isActive
                    ? "border-[#ff4e1a]/50 bg-[#fff4ef] text-apriil-dark"
                    : "border-apriil-line/80 bg-[#f7f5f1] text-apriil-muted"
                }`}
              >
                {node.label}
              </span>
            </motion.div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full border border-[#ff4e1a]/55 bg-[#fff4ef] px-5 py-2 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">Prioritert utfall</p>
            <p className="mt-1 text-sm font-semibold tracking-[-0.02em] text-apriil-dark md:text-base">Kommersiell effekt</p>
          </div>
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">
            {step.label}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark md:text-[2rem]">
            {step.title}
          </h3>
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

export function CapabilityGrid({
  capabilities,
}: {
  capabilities: Capability[];
}) {
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
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">
            {item.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-8 text-apriil-muted">
            {item.body}
          </p>
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">
            Case
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark">
            {study.title}
          </h3>
          <dl className="mt-6 space-y-4 text-sm leading-7">
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">
                Situasjon
              </dt>
              <dd className="mt-1 text-apriil-muted">{study.situation}</dd>
            </div>
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">
                Problem
              </dt>
              <dd className="mt-1 text-apriil-muted">{study.challenge}</dd>
            </div>
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">
                Tiltak
              </dt>
              <dd className="mt-1 text-apriil-muted">{study.actions}</dd>
            </div>
            <div className="border-t border-apriil-line/70 pt-3">
              <dt className="font-semibold uppercase tracking-[0.08em] text-apriil-dark">
                Resultat
              </dt>
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
    <div className="grid gap-4 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <motion.article
          key={tier.name}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={`flex h-full min-h-[280px] flex-col rounded-[18px] border p-6 md:p-7 ${
            tier.recommended
              ? "border-[#ff4101]/40 bg-[#fff7f2] shadow-[0_18px_44px_rgba(255,65,1,0.08)]"
              : "border-apriil-line/80 bg-[#f8f7f4]"
          }`}
        >
          <div className="flex h-full flex-col">
            <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apriil-muted">
              {tier.name}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-[2.2rem]">
              {tier.price}
            </p>
            {tier.recommended ? (
              <p className="mt-3 inline-flex rounded-full border border-[#ff4101]/40 bg-[#fff1ea] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1b1917]">
                Anbefalt
              </p>
            ) : null}
            </div>
            <p className="mt-5 text-base leading-8 text-apriil-muted">
              {tier.audience}
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-7 text-apriil-muted">
              {tier.focus.map((item) => (
                <li key={item} className="border-t border-apriil-line/70 pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
