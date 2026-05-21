"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SIGNAL_NODES = [
  { label: "AI-søk øker", desktopClass: "left-[2%] top-[13%]" },
  { label: "Lav mobilkonvertering", desktopClass: "left-[10%] top-[43%]" },
  { label: "YouTube-trafikk øker", desktopClass: "left-[4%] top-[69%]" },
  { label: "Høy branded search", desktopClass: "left-[18%] top-[82%]" },
  { label: "Svak landingssideytelse", desktopClass: "right-[9%] top-[17%]" },
  { label: "Økt sosial oppdagelse", desktopClass: "right-[2%] top-[36%]" },
  { label: "Konverteringskvalitet synker", desktopClass: "right-[4%] top-[60%]" },
  { label: "Økende CPC", desktopClass: "right-[14%] top-[79%]" },
  { label: "Høy TikTok-engasjement", desktopClass: "left-[26%] top-[6%]" },
];

const IMPACT_OUTCOMES = [
  "Tydeligere prioriteringer",
  "Mer effektiv anskaffelse",
  "Sterkere synlighet",
  "Redusert ineffektivitet",
  "Bedre beslutningsgrunnlag",
  "Langsiktig vekst",
];

const PRIORITIES = [
  {
    title: "Forbedre AI-basert oppdagbarhet",
    impact: "Høy",
    status: "Under vurdering",
    owner: "SEO + Innhold",
  },
  {
    title: "Redusere ineffektiv anskaffelse",
    impact: "Høy",
    status: "Igangsatt",
    owner: "Paid + Analyse",
  },
  {
    title: "Forbedre sammenheng mellom synlighet og landingssider",
    impact: "Middels",
    status: "Planlagt",
    owner: "CRO + Innhold",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const insightVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (delayIndex: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.08 * delayIndex, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SignalNode({ label, index, driftX, className }: { label: string; index: number; driftX: MotionValue<number>; className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      style={{ x: driftX, opacity: 0.68 + ((index % 3) * 0.1) }}
      animate={{ y: [0, index % 2 === 0 ? -8 : -5, 0], scale: [1, 1.015, 1] }}
      transition={{
        y: {
          duration: 6 + index * 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        scale: {
          duration: 5 + index * 0.25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      whileHover={{ y: -5, scale: 1.025, opacity: 1 }}
      className={`${className ?? ""} rounded-xl border border-apriil-line/65 bg-white/62 px-3.5 py-2.5 text-xs font-medium text-apriil-dark shadow-[0_12px_30px_rgba(23,23,23,0.06)] backdrop-blur-sm`}
    >
      {label}
    </motion.div>
  );
}

function InsightCard({ title, text, metaLeft, metaRight, index }: { title: string; text: string; metaLeft: string; metaRight: string; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={insightVariants}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-apriil-line/70 bg-white/78 p-4 shadow-[0_14px_38px_rgba(23,23,23,0.07)]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-apriil-primary">{title}</p>
      <p className="mt-2 text-sm leading-7 text-apriil-dark">{text}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-apriil-muted">
        <span className="rounded-full border border-apriil-line/70 bg-[#fbfaf7] px-2.5 py-1">{metaLeft}</span>
        <span className="rounded-full border border-apriil-line/70 bg-[#fbfaf7] px-2.5 py-1">{metaRight}</span>
      </div>
    </motion.div>
  );
}

function PriorityCard({ title, impact, status, owner, index }: { title: string; impact: string; status: string; owner: string; index: number }) {
  return (
    <motion.article
      custom={index + 1}
      variants={insightVariants}
      whileHover={{ y: -3 }}
      className="rounded-[24px] border border-apriil-line/75 bg-white/78 p-5 shadow-[0_12px_34px_rgba(23,23,23,0.06)]"
    >
      <h4 className="text-lg font-semibold tracking-[-0.02em] text-apriil-dark">{title}</h4>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-apriil-line/70 bg-[#fbfaf7] px-2.5 py-1 text-apriil-muted">Effekt: {impact}</span>
        <span className="rounded-full border border-apriil-line/70 bg-[#fbfaf7] px-2.5 py-1 text-apriil-muted">Status: {status}</span>
      </div>
      <p className="mt-4 text-sm text-apriil-muted">Operativt eierskap: {owner}</p>
    </motion.article>
  );
}

function SignalLine({ className }: { className: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0.2, scaleX: 0.75 }}
      whileInView={{ opacity: 0.55, scaleX: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatType: "mirror", repeatDelay: 0.45 }}
    />
  );
}

export function EcosystemCards() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const nodeDriftIn = useTransform(scrollYProgress, [0, 1], [-18, 10]);
  const nodeDriftOut = useTransform(scrollYProgress, [0, 1], [18, -10]);
  const coreScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.03]);
  const coreOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.72, 1, 1]);
  const outcomeOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.45, 0.85, 1]);

  return (
    <section ref={sectionRef} className="relative z-10 mx-auto mb-20 mt-16 max-w-6xl px-6 md:px-10 xl:px-16">
      <div className="pointer-events-none absolute inset-0 -z-20 rounded-[44px] bg-[radial-gradient(circle_at_50%_37%,rgba(224,212,197,0.34)_0%,rgba(248,246,241,0.74)_42%,rgba(248,246,241,0.98)_100%)]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative overflow-hidden rounded-[38px] border border-apriil-line/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,244,238,0.97))] p-6 shadow-[0_30px_85px_rgba(23,23,23,0.07)] md:p-10"
      >
        <motion.p variants={itemVariants} className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
          Operasjonell intelligens
        </motion.p>
        <motion.h2 variants={itemVariants} className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-apriil-dark md:text-[3.2rem] md:leading-[0.95]">
          Fragmenterte signaler. Tydeligere beslutninger.
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
          Apriil Clarity samler signaler fra moderne mediemiljøer og oversetter dem til tydeligere prioriteringer, tiltak og forretningsmessige beslutninger.
        </motion.p>

        <div className="relative mt-12">
          <div className="mb-6 grid grid-cols-1 gap-3 lg:hidden">
            {SIGNAL_NODES.map((node, index) => (
              <SignalNode
                key={node.label}
                label={node.label}
                index={index}
                driftX={index % 2 === 0 ? nodeDriftIn : nodeDriftOut}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute inset-x-10 -top-2 h-44 rounded-full bg-[radial-gradient(circle,rgba(177,137,107,0.3)_0%,rgba(177,137,107,0.06)_56%,transparent_80%)] blur-2xl" />
            <motion.div
              variants={itemVariants}
              style={{ scale: coreScale, opacity: coreOpacity }}
              className="relative rounded-[34px] border border-white/70 bg-[linear-gradient(165deg,rgba(255,255,255,0.9),rgba(246,240,232,0.82))] p-6 shadow-[0_30px_90px_rgba(30,24,20,0.12)] backdrop-blur-md md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Apriil Clarity</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-apriil-dark md:text-5xl">Apriil Clarity</h3>
              <p className="mt-3 text-lg leading-8 text-apriil-dark">Fra fragmenterte signaler til tydelige prioriteringer.</p>
              <p className="mt-4 text-sm leading-7 text-apriil-muted md:text-base md:leading-8">
                Apriil Clarity analyserer signaler på tvers av moderne mediemiljøer og identifiserer hvilke tiltak som faktisk forventes å skape forretningsmessig effekt.
              </p>

              <div className="mt-6 grid gap-4">
                <InsightCard
                  index={0}
                  title="Mulighet identifisert"
                  text="Kommersiell synlighet svekkes på høyt-intensjons søk."
                  metaLeft="86% sikkerhet"
                  metaRight="Forventet effekt: Høy"
                />
                <InsightCard
                  index={1}
                  title="Operasjonell anbefaling"
                  text="Forbedre struktur på destinasjonssider og redusere ineffektiv bred trafikk."
                  metaLeft="Kompleksitet: Middels"
                  metaRight="Utfall: Sterkere konverteringskvalitet"
                />
                <InsightCard
                  index={2}
                  title="Implementeringsstatus"
                  text="3 prioriterte tiltak gjennomført siste 30 dager."
                  metaLeft="Business impact"
                  metaRight="Forventet reduksjon i ineffektiv trafikk"
                />
              </div>

              <motion.div
                aria-hidden="true"
                className="mt-6 h-1.5 rounded-full bg-[linear-gradient(90deg,rgba(177,137,107,0.2),rgba(177,137,107,0.62),rgba(177,137,107,0.2))]"
                animate={{ backgroundPositionX: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "220% 100%" }}
              />
            </motion.div>

            {SIGNAL_NODES.map((node, index) => (
              <SignalNode
                key={node.label}
                label={node.label}
                index={index}
                driftX={index % 2 === 0 ? nodeDriftIn : nodeDriftOut}
                className={`absolute hidden lg:block ${node.desktopClass}`}
              />
            ))}

            <SignalLine className="pointer-events-none absolute left-[16%] top-[24%] hidden h-px w-[17%] origin-left bg-gradient-to-r from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/10 lg:block" />
            <SignalLine className="pointer-events-none absolute left-[12%] top-[61%] hidden h-px w-[22%] origin-left bg-gradient-to-r from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/10 lg:block" />
            <SignalLine className="pointer-events-none absolute right-[14%] top-[31%] hidden h-px w-[18%] origin-right bg-gradient-to-l from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/10 lg:block" />
            <SignalLine className="pointer-events-none absolute right-[12%] top-[67%] hidden h-px w-[20%] origin-right bg-gradient-to-l from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/10 lg:block" />
          </div>

          <motion.div variants={itemVariants} style={{ opacity: outcomeOpacity }} className="mt-8 rounded-[24px] border border-apriil-line/65 bg-[#fbfaf7]/72 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Business impact</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {IMPACT_OUTCOMES.map((label) => (
                <span key={label} className="rounded-full border border-apriil-line/70 bg-white px-3 py-1.5 text-sm text-apriil-muted">
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-10 border-t border-apriil-line/70 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Prioriteringslag</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Prioriterte operative tiltak</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PRIORITIES.map((item, index) => (
              <PriorityCard
                key={item.title}
                title={item.title}
                impact={item.impact}
                status={item.status}
                owner={item.owner}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
