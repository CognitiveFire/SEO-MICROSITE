"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TouchEvent, useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const slides: Slide[] = [
  {
    src: "/oversikt.png",
    alt: "Oversiktsbilde fra signalrommet",
    caption: "Oversikt",
  },
  {
    src: "/innsikt.png",
    alt: "Innsiktsvisning fra signalrommet",
    caption: "Innsikt",
  },
  {
    src: "/reporting.png",
    alt: "Rapporteringsvisning fra signalrommet",
    caption: "Rapportering",
  },
  {
    src: "/tiltak.png",
    alt: "Tiltaksvisning fra signalrommet",
    caption: "Tiltak",
  },
  {
    src: "/anskaffelse.png",
    alt: "Anskaffelsesvisning fra signalrommet",
    caption: "Anskaffelse",
  },
  {
    src: "/synlihet.png",
    alt: "Sokesynlighetsvisning fra signalrommet",
    caption: "Sokesynlighet",
  },
];

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 44 : -44 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -44 : 44 }),
};

export function SignalRoomSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const totalSlides = slides.length;

  const setSlide = (nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide(activeIndex + 1, 1);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [activeIndex, totalSlides]);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const goNext = () => setSlide(activeIndex + 1, 1);
  const goPrev = () => setSlide(activeIndex - 1, -1);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;
    const swipeThreshold = 48;

    if (deltaX > swipeThreshold) {
      goPrev();
    }

    if (deltaX < -swipeThreshold) {
      goNext();
    }

    setTouchStartX(null);
  };

  return (
    <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Signalrom</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">Operativ innsikt på tvers av signaler</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="h-10 border border-apriil-line/90 bg-white px-3 text-xs font-semibold uppercase tracking-[0.16em] text-apriil-dark transition hover:bg-[#f4efe9]"
            aria-label="Forrige bilde"
          >
            Forrige
          </button>
          <button
            type="button"
            onClick={goNext}
            className="h-10 border border-apriil-line/90 bg-white px-3 text-xs font-semibold uppercase tracking-[0.16em] text-apriil-dark transition hover:bg-[#f4efe9]"
            aria-label="Neste bilde"
          >
            Neste
          </button>
        </div>
      </div>

      <div className="relative mt-8 rounded-[32px] border border-apriil-line/70 bg-[radial-gradient(circle_at_18%_12%,#f4eee3_0%,#e8e2d8_48%,#ddd4c8_100%)] p-6 shadow-[0_20px_60px_rgba(80,56,34,0.14)] md:p-8">
        <div className="mx-auto rounded-[30px] bg-[#d9dce1] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_38px_rgba(26,27,29,0.2)] md:p-4">
          <div className="rounded-[24px] bg-[#111214] p-2 md:p-3">
            <div
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <span className="absolute left-1/2 top-2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#25272b] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
              <div className="relative aspect-[16/10] w-full">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={activeSlide.src}
                    custom={direction}
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    loading="eager"
                    decoding="async"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex w-full flex-wrap items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setSlide(index, index >= activeIndex ? 1 : -1)}
            className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              index === activeIndex
                ? "border-apriil-dark bg-apriil-dark text-white"
                : "border-apriil-line/90 bg-white text-apriil-muted hover:bg-[#f4efe9]"
            }`}
            aria-label={`Vis bilde ${index + 1}: ${slide.caption}`}
            aria-current={index === activeIndex}
          >
            {slide.caption}
          </button>
        ))}
      </div>
    </section>
  );
}