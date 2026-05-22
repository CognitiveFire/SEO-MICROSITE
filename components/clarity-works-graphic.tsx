"use client";

import { useEffect, useState } from "react";

export function ClarityWorksGraphic() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">How Clarity works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">Fra signaler til beslutning og forretningsverdi</h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
          Klikk for full visning. Diagrammet viser hvordan Apriil Clarity setter struktur og prioritering, mens teknologi og oppfolging gir tydeligere tiltak og kommersiell effekt.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group mt-8 block w-full overflow-hidden border border-apriil-line/80 bg-[#f5f0e8] text-left shadow-[0_16px_45px_rgba(23,23,23,0.08)] transition hover:-translate-y-0.5"
        aria-label="Apne How Clarity works i full storrelse"
      >
        <img
          src="/clarity-fra-april.png"
          alt="How Clarity works diagram"
          className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-h-[92vh] max-w-[96vw]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 z-10 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              aria-label="Lukk fullvisning"
            >
              Lukk
            </button>
            <img
              src="/clarity-fra-april.png"
              alt="How Clarity works diagram i full storrelse"
              className="max-h-[92vh] max-w-[96vw] object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}