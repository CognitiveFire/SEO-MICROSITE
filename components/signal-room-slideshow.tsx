"use client";

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

export function SignalRoomSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const totalSlides = slides.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const goNext = () => setActiveIndex((current) => (current + 1) % totalSlides);
  const goPrev = () => setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);

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
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">Visualisering av operative signaler</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="h-10 w-10 border border-apriil-line/90 bg-white text-xl leading-none text-apriil-dark transition hover:bg-[#f4efe9]"
            aria-label="Forrige bilde"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="h-10 w-10 border border-apriil-line/90 bg-white text-xl leading-none text-apriil-dark transition hover:bg-[#f4efe9]"
            aria-label="Neste bilde"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="mt-8 overflow-hidden border border-apriil-line/80 bg-[#f6f1ea]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          className="animate-signal-slide-fade h-auto w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
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

      <div className="mt-10 border border-apriil-line/80 bg-[#f4eee5] p-5 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Clarity i praksis</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark">Video av hvordan signalene blir til prioriterte tiltak</h3>
            <p className="mt-4 text-sm leading-7 text-apriil-muted">Dette er en egen videoblokk ved siden av bildeslideshowet, slik at team kan se flyten i kontekst før de går videre til detaljerte visninger.</p>
          </div>
          <div className="overflow-hidden border border-apriil-line/80 bg-black/90">
            <video
              src="/clarity.mov"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}