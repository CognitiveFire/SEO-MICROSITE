"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type TaskItem = {
  title: string;
  impact: string;
  complexity: string;
  description: string;
};

type Offer = {
  label: string;
  price: string;
  description: string;
  items: string[];
  cta: string;
  href: string;
};

type PremiumServicePricingProps = {
  eyebrow: string;
  headline: string;
  body: string;
  retainer: Offer;
  analysis: Offer;
  tasks: TaskItem[];
  headlineTag?: "h1" | "h2";
  embedded?: boolean;
  closingEyebrow?: string;
  closingHeadline?: string;
  closingBody?: string;
  closingCtaLabel?: string;
  closingCtaHref?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function OfferCard({
  offer,
  tone = "light",
}: {
  offer: Offer;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.24, ease: "easeOut" } }}
      className={
        isDark
          ? "relative overflow-hidden rounded-[30px] border border-apriil-dark/80 bg-apriil-dark p-8 text-white shadow-[0_24px_90px_rgba(23,23,23,0.18)] md:p-10"
          : "relative overflow-hidden rounded-[30px] border border-apriil-line/80 bg-[#fbfaf7]/95 p-8 text-apriil-dark shadow-[0_20px_70px_rgba(23,23,23,0.08)] md:p-10"
      }
    >
      <div
        className={
          isDark
            ? "absolute inset-x-0 top-0 h-px bg-white/20"
            : "absolute inset-x-0 top-0 h-px bg-apriil-primary/20"
        }
      />
      <p
        className={
          isDark
            ? "text-xs font-semibold uppercase tracking-[0.26em] text-[#d8c6b8]"
            : "text-xs font-semibold uppercase tracking-[0.26em] text-apriil-primary"
        }
      >
        {offer.label}
      </p>
      <p className="mt-8 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
        {offer.price}
      </p>
      <p
        className={
          isDark
            ? "mt-5 max-w-xl text-base leading-8 text-white/74"
            : "mt-5 max-w-xl text-base leading-8 text-apriil-muted"
        }
      >
        {offer.description}
      </p>
      <ul className="mt-8 grid gap-3 text-sm leading-7 md:grid-cols-2 md:gap-x-6 md:gap-y-4">
        {offer.items.map((item) => (
          <li
            key={item}
            className={
              isDark
                ? "flex items-start gap-3 text-white/82"
                : "flex items-start gap-3 text-apriil-muted"
            }
          >
            <span
              className={
                isDark
                  ? "mt-2 h-1.5 w-1.5 rounded-full bg-[#d8c6b8]"
                  : "mt-2 h-1.5 w-1.5 rounded-full bg-apriil-primary"
              }
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={offer.href}
        className={
          isDark
            ? "mt-10 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white px-5 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5 hover:bg-[#f6f1eb]"
            : "mt-10 inline-flex items-center gap-3 rounded-full border border-apriil-line/80 bg-white px-5 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5 hover:border-apriil-primary/40 hover:text-apriil-primary"
        }
      >
        {offer.cta}
        <span aria-hidden="true">↗</span>
      </Link>
    </motion.article>
  );
}

function TaskCard({ task }: { task: TaskItem }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.24, ease: "easeOut" } }}
      className="rounded-[28px] border border-apriil-line/80 bg-white/70 p-7 shadow-[0_16px_50px_rgba(23,23,23,0.06)] backdrop-blur-sm md:p-8"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">
        <span>Prioritert tiltak</span>
      </div>
      <h3 className="mt-6 max-w-lg text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
        {task.title}
      </h3>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="inline-flex items-center rounded-full border border-apriil-line/80 bg-[#fbfaf7] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-apriil-muted">
          Effekt: {task.impact}
        </span>
        <span className="inline-flex items-center rounded-full border border-apriil-line/80 bg-[#fbfaf7] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-apriil-muted">
          Kompleksitet: {task.complexity}
        </span>
      </div>
      <p className="mt-6 max-w-xl text-base leading-8 text-apriil-muted">
        {task.description}
      </p>
    </motion.article>
  );
}

export function PremiumServicePricing(props: PremiumServicePricingProps) {
  const {
    eyebrow,
    headline,
    body,
    retainer,
    analysis,
    tasks,
    headlineTag = "h1",
    embedded = false,
    closingEyebrow = "Arbeidsmodell",
    closingHeadline = "Strukturert rundt tydelige prioriteringer og langsiktig effekt.",
    closingBody = "Hver leveranse tilpasses virksomhetens mål, kompleksitet og vekstprioriteringer — med fokus på tydeligere beslutninger og målbar utvikling.",
    closingCtaLabel = "Book strategisamtale",
    closingCtaHref = "/contact",
  } = props;
  const IntroHeading = headlineTag;

  return (
    <section
      className={embedded ? "pb-16 md:pb-20" : "px-6 pb-24 md:px-10 xl:px-16"}
    >
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full border-t border-apriil-line/80 pt-16 md:pt-20"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.26em] text-apriil-primary"
        >
          {eyebrow}
        </motion.p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div variants={itemVariants}>
            <IntroHeading className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-apriil-dark md:text-7xl md:leading-[0.94]">
              {headline}
            </IntroHeading>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl md:leading-9"
          >
            {body}
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="w-full mt-20 border-t border-apriil-line/80 pt-16"
      >
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <OfferCard offer={retainer} tone="dark" />
          <OfferCard offer={analysis} />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="w-full mt-20 border-t border-apriil-line/80 pt-16"
      >
        <motion.div
          variants={itemVariants}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
              Operativt utsnitt
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
              Eksempel på prioriterte tiltak
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Tiltakene under viser hvordan arbeidet typisk struktureres: tydelige
            prioriteringer, kommersiell relevans og oppfølging som er enkel å
            forstå også utenfor fagmiljøet.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard key={task.title} task={task} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="w-full mt-20 border-t border-apriil-line/80 pt-16"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-[34px] border border-apriil-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(251,250,247,0.95))] p-8 shadow-[0_18px_60px_rgba(23,23,23,0.05)] md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
            {closingEyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
            {closingHeadline}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-apriil-muted">
            {closingBody}
          </p>
          <Link
            href={closingCtaHref}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-apriil-line/80 bg-white px-5 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5 hover:border-apriil-primary/40 hover:text-apriil-primary"
          >
            {closingCtaLabel}
            <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </motion.section>
    </section>
  );
}
