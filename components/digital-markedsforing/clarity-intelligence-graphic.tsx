"use client";

import { motion } from "framer-motion";

export function ClarityIntelligenceGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-apriil-line/70 bg-[#f4f2ec] p-6 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,65,1,0.14),transparent_46%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,23,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M7 78 C 22 66, 34 65, 48 58 C 62 52, 72 40, 92 34" fill="none" stroke="rgba(23,23,23,0.25)" strokeWidth="0.28" />
        <path d="M8 62 C 20 56, 35 52, 47 48 C 60 43, 74 31, 90 24" fill="none" stroke="rgba(23,23,23,0.2)" strokeWidth="0.24" />
        <path d="M8 42 C 24 48, 37 44, 49 37 C 63 30, 77 24, 92 16" fill="none" stroke="rgba(23,23,23,0.18)" strokeWidth="0.24" />

        <motion.path
          d="M8 78 C 22 66, 34 65, 48 58 C 62 52, 72 40, 92 34"
          fill="none"
          stroke="rgba(255,65,1,0.8)"
          strokeWidth="0.32"
          strokeDasharray="2.2 1.4"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative space-y-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">Clarity intelligence layer</p>
          <span className="rounded-full border border-apriil-line/80 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-apriil-muted">
            strategic signal flow
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Fragmenterte signaler",
            "Tolkning av utvikling",
            "Prioritering av tiltak",
            "Kommersielle beslutninger",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 7, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[11px] border border-apriil-line/80 bg-white/90 px-3 py-2"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.11em] text-apriil-dark">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[12px] border border-[#2f2b27] bg-[#1b1917] p-4 md:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#c8c2b8]">Synlighet + ettersporsel + kommersiell innsikt</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["SEO", "Paid", "Innhold", "Distribusjon", "Attribusjon", "Prioritering"].map((chip, index) => (
              <span
                key={chip}
                className={`rounded-full border px-2.5 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.1em] ${
                  index === 5
                    ? "border-[#ff4101]/60 bg-[#36251d] text-[#f6eee8]"
                    : "border-[#3c3832] bg-[#221f1c] text-[#d4cdc2]"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
