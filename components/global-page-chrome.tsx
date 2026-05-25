"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "./footer";
import { LeadCaptureForm } from "./lead-capture-form";

function ExpertSupportHub() {
  return (
    <section className="px-6 pb-8 pt-12 md:px-10 xl:px-16">
      <div className="w-full border-t border-apriil-line/80 pt-10">
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
            <Link
              href="/ekspertklinikken"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2d2824]"
            >
              Gå til ekspertklinikken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PdfSupportModule() {
  return (
    <section className="px-6 pb-8 pt-2 md:px-10 xl:px-16">
      <div className="w-full">
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
                Last ned dokumentet med tjenestestruktur, arbeidsmetodikk og
                prioriteringsrammeverk.
              </p>
            </div>
            <Link
              href="/clarity-growth-framework-whitepaper.html?print=1"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-line px-7 py-3 text-sm font-semibold text-apriil-dark transition hover:bg-white"
            >
              Last ned notat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageContactCta() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="w-full border-t border-apriil-line/80 pt-16">
        <div className="rounded-[16px] border border-[#2d2a26] bg-[#171717] p-8 md:p-10">
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
              formClassName="grid gap-6 rounded-[14px] border border-[#37332e] bg-[#1f1f1f] p-6 md:p-7"
              inputClassName="w-full rounded-[14px] border border-[#3a3732] bg-[#151515] px-4 py-3 text-[#f4f2ed] outline-none transition placeholder:text-[#a9a39b] focus:border-[#6b6258]"
              fieldLabelClassName="grid gap-2.5 text-sm font-medium text-[#d4cec5]"
              introClassName="max-w-2xl text-[1.02rem] leading-8 text-[#c8c3ba]"
              responseTextClassName="text-sm text-[#c8c3ba]"
              buttonClassName="inline-flex items-center justify-center rounded-full border border-[#f4f2ed] bg-[#f4f2ed] px-6 py-3 text-sm font-semibold text-[#171717] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              feedbackClassName="rounded-[12px] border border-[#3a3732] bg-[#151515] px-4 py-3 text-sm text-[#c8c3ba]"
              submitRowClassName="mt-1 flex flex-col gap-4 border-t border-[#37332e] pt-5 md:flex-row md:items-center md:justify-between"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalPageChrome({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ExpertSupportHub />
      <PdfSupportModule />
      <PageContactCta />
      <Footer />
    </>
  );
}
