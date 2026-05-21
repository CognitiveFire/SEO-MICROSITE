"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DISCOVERY_NODES = [
  "Søk",
  "Sosiale medier",
  "Video",
  "AI-oppdagelse",
  "Podcast",
  "Retail Media",
  "Display",
  "DOOH",
  "Skaperplattformer",
  "Kontekstuell distribusjon",
];

const OUTCOMES = [
  "Tydeligere prioriteringer",
  "Mer effektiv anskaffelse",
  "Sterkere synlighet",
  "Redusert ineffektivitet",
  "Bedre beslutningsgrunnlag",
  "Langsiktig vekst",
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

function DiscoveryNode({ label, index, driftX }: { label: string; index: number; driftX: any }) {
  return (
    <motion.div
      variants={itemVariants}
      style={{ x: driftX }}
      animate={{ y: [0, index % 2 === 0 ? -7 : -5, 0] }}
      transition={{
        y: {
          duration: 6 + index * 0.25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-2xl border border-apriil-line/70 bg-white/70 px-4 py-3 text-sm font-medium text-apriil-dark shadow-[0_10px_32px_rgba(23,23,23,0.06)] backdrop-blur-sm"
    >
      {label}
    </motion.div>
  );
}

function OutcomeCard({ label, index, driftX }: { label: string; index: number; driftX: any }) {
  return (
    <motion.div
      variants={itemVariants}
      style={{ x: driftX }}
      animate={{ y: [0, index % 2 === 0 ? -4 : -6, 0] }}
      transition={{
        y: {
          duration: 7 + index * 0.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-apriil-line/70 bg-[#fbfaf7]/90 px-4 py-3 text-sm font-medium text-apriil-muted shadow-[0_10px_28px_rgba(23,23,23,0.05)]"
    >
      {label}
    </motion.div>
  );
}

function SignalLine({ className }: { className: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0.2, scaleX: 0.75 }}
      whileInView={{ opacity: 0.55, scaleX: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function EcosystemCards() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const leftDrift = useTransform(scrollYProgress, [0, 1], [-14, 10]);
  const rightDrift = useTransform(scrollYProgress, [0, 1], [14, -10]);
  const coreScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  const coreOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.72, 1, 1]);

  return (
    <section ref={sectionRef} className="relative z-10 mx-auto mb-20 mt-16 max-w-6xl px-6 md:px-10 xl:px-16">
      <div className="pointer-events-none absolute inset-0 -z-20 rounded-[44px] bg-[radial-gradient(circle_at_50%_45%,rgba(224,212,197,0.36)_0%,rgba(248,246,241,0.68)_45%,rgba(248,246,241,0.98)_100%)]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative overflow-hidden rounded-[38px] border border-apriil-line/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,244,238,0.96))] p-6 shadow-[0_30px_85px_rgba(23,23,23,0.07)] md:p-10"
      >
        <motion.p variants={itemVariants} className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
          Operasjonell modell
        </motion.p>
        <motion.h2 variants={itemVariants} className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-apriil-dark md:text-[3.2rem] md:leading-[0.95]">
          Fragmenterte signaler. Tydeligere beslutninger.
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg md:leading-9">
          Apriil Clarity samler signaler fra moderne mediemiljoer og oversetter dem til tydeligere prioriteringer, tiltak og forretningsmessige beslutninger.
        </motion.p>

        <div className="relative mt-12 grid gap-8 xl:grid-cols-[1.05fr_1fr_1.05fr] xl:items-start">
          <motion.div variants={itemVariants} className="relative rounded-[28px] border border-apriil-line/60 bg-white/45 p-5 backdrop-blur-sm md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Fragmenterte discovery-miljoer</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {DISCOVERY_NODES.map((label, index) => (
                <DiscoveryNode key={label} label={label} index={index} driftX={leftDrift} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ scale: coreScale, opacity: coreOpacity }} className="relative xl:pt-14">
            <div className="absolute inset-x-10 top-7 h-36 rounded-full bg-[radial-gradient(circle,rgba(177,137,107,0.24)_0%,rgba(177,137,107,0.04)_58%,transparent_80%)] blur-xl" />
            <motion.div
              animate={{ boxShadow: ["0 20px 60px rgba(30,24,20,0.11)", "0 24px 74px rgba(30,24,20,0.16)", "0 20px 60px rgba(30,24,20,0.11)"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[30px] border border-white/70 bg-[linear-gradient(170deg,rgba(255,255,255,0.84),rgba(247,242,235,0.78))] p-7 backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Intelligence Layer</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Apriil Clarity</h3>
              <p className="mt-4 text-sm leading-7 text-apriil-muted md:text-base md:leading-8">
                Operasjonell intelligens utviklet for tydeligere prioriteringer og sterkere beslutningsgrunnlag.
              </p>
              <motion.div
                aria-hidden="true"
                className="mt-6 h-1.5 rounded-full bg-[linear-gradient(90deg,rgba(177,137,107,0.15),rgba(177,137,107,0.55),rgba(177,137,107,0.15))]"
                animate={{ backgroundPositionX: ["0%", "100%"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "220% 100%" }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-[28px] border border-apriil-line/60 bg-[#fbfaf7]/70 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Business outcomes</p>
            <div className="mt-5 grid gap-3">
              {OUTCOMES.map((label, index) => (
                <OutcomeCard key={label} label={label} index={index} driftX={rightDrift} />
              ))}
            </div>
          </motion.div>

          <SignalLine className="pointer-events-none absolute left-[31%] top-[26%] hidden h-px w-[16%] origin-left bg-gradient-to-r from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/15 xl:block" />
          <SignalLine className="pointer-events-none absolute left-[31%] top-[55%] hidden h-px w-[16%] origin-left bg-gradient-to-r from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/15 xl:block" />
          <SignalLine className="pointer-events-none absolute right-[31%] top-[38%] hidden h-px w-[16%] origin-right bg-gradient-to-l from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/15 xl:block" />
          <SignalLine className="pointer-events-none absolute right-[31%] top-[67%] hidden h-px w-[16%] origin-right bg-gradient-to-l from-apriil-line/10 via-apriil-primary/45 to-apriil-primary/15 xl:block" />
        </div>
      </motion.div>
    </section>
  );
}
