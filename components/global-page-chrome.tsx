"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Footer } from "./footer";
import { LeadCaptureForm } from "./lead-capture-form";
import { CtaPillLink } from "./cta-pill";

function ExpertSupportHub() {
  return (
    <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
        Ekspertklinikken
      </p>
      <div className="mt-3 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">
            Ekspertklinikken
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-apriil-muted">
            Siste fredag i måneden svarer Apriils eksperter live på spørsmål
            om synlighet, performance og analyse.
          </p>
        </div>
        <CtaPillLink href="/ekspertklinikken">
          Gå til ekspertklinikken
        </CtaPillLink>
      </div>
    </div>
  );
}

function PdfSupportModule() {
  return (
    <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
        Slik fungerer det
      </p>
      <div className="mt-3 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">
            Clarity - slik fungerer det
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-apriil-muted">
            Se modellen som viser hvordan Clarity kobler signaler, prioritering
            og kommersiell forståelse.
          </p>
        </div>
      </div>
    </div>
  );
}

function ClarityLightbox({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Clarity-modellen"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[1200px] overflow-hidden rounded-[20px] border border-[#2f2b27] bg-[#f7f6f2] shadow-[0_24px_90px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-[#2f2b27]/20 bg-white/90 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-apriil-dark transition hover:border-[#ff4101]/40"
        >
          Lukk
        </button>
        <div className="relative aspect-[1693/929] w-full">
          <Image
            src="/Clarity-model.png"
            alt="Clarity-modell"
            fill
            className="object-contain"
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function PageContactCta() {
  return (
    <section id="kontakt-skjema" className="px-6 py-20 md:px-10 xl:px-16">
      <div className="w-full border-t border-apriil-line/80 pt-16">
        <div className="rounded-[16px] border border-[#2d2a26] bg-[#1b1917] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c8c3ba]">
                Neste steg
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#f4f2ed] md:text-5xl">
                Fortell oss hva dere trenger mer klarhet i.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c8c3ba] md:text-lg">
                Del hva dere vil forsta bedre, sa folger vi opp med en konkret
                vurdering av neste steg.
              </p>
            </div>
            <LeadCaptureForm
              source="global-page-chrome"
              messagePlaceholder="Hva ønsker dere å forbedre først?"
              submitLabel="Send forespørsel"
              showMessageField={false}
              fieldLayout="stacked"
              focusLabel="Primært fokus"
              introText="Fyll inn skjemaet så følger vi opp med anbefalt neste steg."
              responseText="Vi svarer innen én arbeidsdag."
              formClassName="grid gap-6 rounded-[14px] border border-[#37332e] bg-[#231f1d] p-6 md:p-7"
              inputClassName="w-full rounded-[14px] border border-[#413a36] bg-[#181614] px-4 py-3 text-[#f4f2ed] outline-none transition placeholder:text-[#a9a39b] focus:border-[#ff4101]"
              fieldLabelClassName="grid gap-2.5 text-sm font-medium text-[#d4cec5]"
              introClassName="max-w-2xl text-[1.02rem] leading-8 text-[#c8c3ba]"
              responseTextClassName="text-sm text-[#c8c3ba]"
              buttonClassName="inline-flex items-center justify-center rounded-full border border-[#ff4101] bg-[#ff4101] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e63b00] disabled:cursor-not-allowed disabled:opacity-70"
              feedbackClassName="rounded-[12px] border border-[#413a36] bg-[#181614] px-4 py-3 text-sm text-[#c8c3ba]"
              submitRowClassName="mt-1 grid gap-4 border-t border-[#37332e] pt-5 md:grid-cols-[1fr_auto] md:items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalPageChrome({ children }: { children: ReactNode }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      {children}
      <section className="px-6 pt-12 md:px-10 xl:px-16">
        <div className="w-full border-t border-apriil-line/80 pt-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <ExpertSupportHub />
            <div>
              <PdfSupportModule />
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center justify-center rounded-full border border-[#ff4101] bg-[#ff4101] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e63b00] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Se modellen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClarityLightbox open={isLightboxOpen} onClose={() => setIsLightboxOpen(false)} />
      <PageContactCta />
      <Footer />
    </>
  );
}
