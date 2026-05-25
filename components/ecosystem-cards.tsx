"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ConnectionLine = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const CHANNELS = [
  "Søk",
  "Sosiale medier",
  "Video",
  "Display",
  "Influencer",
  "Podcast",
  "DOOH",
  "Kontekstuell",
  "AI-oppdagelse",
  "Retail Media",
  "Skaperplattformer",
  "Programmatisk",
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

function randomPair(max: number): [number, number] {
  const a = Math.floor(Math.random() * max);
  let b = Math.floor(Math.random() * max);

  while (b === a) {
    b = Math.floor(Math.random() * max);
  }

  return [a, b];
}

function shuffleIndices(length: number): number[] {
  const values = Array.from({ length }, (_, index) => index);

  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }

  return values;
}

export function EcosystemCards() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [lines, setLines] = useState<ConnectionLine[]>([]);

  const buildLines = useCallback(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const gridRect = grid.getBoundingClientRect();
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (cards.length < 2) {
      return;
    }

    const nextLines: ConnectionLine[] = [];
    const used = new Set<string>();

    const toLine = (a: number, b: number) => {
      const key = `${Math.min(a, b)}-${Math.max(a, b)}`;

      if (used.has(key)) {
        return;
      }

      used.add(key);

      const aRect = cards[a].getBoundingClientRect();
      const bRect = cards[b].getBoundingClientRect();

      nextLines.push({
        id: key,
        x1: aRect.left + aRect.width / 2 - gridRect.left,
        y1: aRect.top + aRect.height / 2 - gridRect.top,
        x2: bRect.left + bRect.width / 2 - gridRect.left,
        y2: bRect.top + bRect.height / 2 - gridRect.top,
      });
    };

    // Build a randomized chain first so every card participates in at least one connection.
    const shuffled = shuffleIndices(cards.length);
    for (let i = 0; i < shuffled.length - 1; i += 1) {
      toLine(shuffled[i], shuffled[i + 1]);
    }

    const targetConnections = Math.max(cards.length + 2, 12);
    const maxAttempts = targetConnections * 8;
    let attempts = 0;

    while (nextLines.length < targetConnections && attempts < maxAttempts) {
      const [a, b] = randomPair(cards.length);
      toLine(a, b);
      attempts += 1;
    }

    setLines(nextLines);
  }, []);

  useEffect(() => {
    buildLines();

    const resizeHandler = () => buildLines();
    window.addEventListener("resize", resizeHandler);

    const timer = window.setInterval(() => {
      buildLines();
    }, 2200);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.clearInterval(timer);
    };
  }, [buildLines]);

  return (
    <section className="relative z-10 w-full mb-20 mt-16 px-6 md:px-10 xl:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="rounded-[34px] border border-apriil-line/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,244,238,0.95))] p-6 shadow-[0_24px_72px_rgba(23,23,23,0.08)] md:p-10"
      >
        <motion.p
          variants={cardVariants}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary"
        >
          Operasjonell modell
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl"
        >
          Fragmenterte signaler. Tydeligere beslutninger.
        </motion.h2>
        <motion.p
          variants={cardVariants}
          className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg"
        >
          Apriil Clarity samler signaler fra moderne mediemiljøer og oversetter
          dem til tydeligere prioriteringer, tiltak og forretningsmessige
          beslutninger.
        </motion.p>

        <div ref={gridRef} className="relative mt-12">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="connectionGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="1.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {lines.map((line, index) => (
              <g key={line.id}>
                <motion.line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(143,90,51,0.26)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  filter="url(#connectionGlow)"
                  initial={{ pathLength: 0, opacity: 0.12 }}
                  animate={{ pathLength: 1, opacity: [0.12, 0.32, 0.12] }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <motion.line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(143,90,51,0.68)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeDasharray="7 7"
                  initial={{ pathLength: 0, opacity: 0.22 }}
                  animate={{ pathLength: 1, opacity: [0.22, 0.78, 0.22] }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <motion.circle
                  cx={line.x1}
                  cy={line.y1}
                  r="2.6"
                  fill="rgba(143,90,51,0.9)"
                  filter="url(#connectionGlow)"
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    scale: [0.95, 1.15, 0.95],
                  }}
                  transition={{
                    duration: 1.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.04,
                  }}
                />
                <motion.circle
                  cx={line.x2}
                  cy={line.y2}
                  r="2.6"
                  fill="rgba(143,90,51,0.9)"
                  filter="url(#connectionGlow)"
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    scale: [0.95, 1.15, 0.95],
                  }}
                  transition={{
                    duration: 1.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.06,
                  }}
                />
              </g>
            ))}
          </svg>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {CHANNELS.map((label, index) => (
              <motion.div
                key={label}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                className="relative flex min-h-[118px] items-center justify-center rounded-2xl border border-apriil-line/70 bg-white/86 px-4 text-center text-sm font-semibold tracking-[-0.01em] text-apriil-dark shadow-[0_12px_32px_rgba(23,23,23,0.06)]"
              >
                <span>{label}</span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_60%_24%,rgba(255,255,255,0.42),transparent_60%)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
