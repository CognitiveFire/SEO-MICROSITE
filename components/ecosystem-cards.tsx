"use client";

import { motion } from "framer-motion";

const ECOSYSTEM = [
  { label: "Search", icon: "🔍" },
  { label: "Social", icon: "💬" },
  { label: "Video", icon: "🎥" },
  { label: "Display", icon: "🖼️" },
  { label: "Influencer", icon: "🤝" },
  { label: "Podcast", icon: "🎙️" },
  { label: "DOOH", icon: "🚌" },
  { label: "Contextual", icon: "🧩" },
  { label: "AI Discovery", icon: "🤖" },
  { label: "Retail Media", icon: "🛒" },
  { label: "Creator Platforms", icon: "🌐" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function EcosystemCards() {
  return (
    <section className="relative z-10 mx-auto mb-20 mt-16 max-w-6xl px-6 md:px-10 xl:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative flex flex-col items-center"
      >
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">
          Sammenkoblet medieøkosystem
        </h2>
        <div className="relative grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {ECOSYSTEM.map((item, i) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-apriil-line/70 bg-white/80 px-5 py-8 shadow-[0_8px_32px_rgba(23,23,23,0.07)] transition hover:z-20 hover:scale-[1.045] hover:shadow-[0_16px_48px_rgba(23,23,23,0.10)]"
            >
              <span className="mb-4 text-3xl md:text-4xl lg:text-5xl select-none">
                {item.icon}
              </span>
              <span className="text-center text-base font-semibold tracking-[-0.01em] text-apriil-dark md:text-lg">
                {item.label}
              </span>
              {/* Subtle connecting lines for ecosystem feel */}
              {i < ECOSYSTEM.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-apriil-line/40 md:block" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[90%] w-[90%] rounded-full border-2 border-dashed border-apriil-line/30" />
        </div>
      </motion.div>
    </section>
  );
}
