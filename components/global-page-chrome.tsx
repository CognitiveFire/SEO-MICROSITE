"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import { AskAnExpert } from "./AskAnExpert";
import { LeadCaptureForm } from "./lead-capture-form";

function ExpertSupportHub({ topic }: { topic: string }) {
  return (
    <section className="px-6 pb-8 pt-12 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-10">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-7 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">Ekspertstotte</p>
          <div className="mt-3 grid gap-5 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Live klinikk og faglige sparringsspor</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-apriil-muted">
                Siste fredag i maneden svarer Apriils eksperter live pa LinkedIn. Trenger dere raskere avklaring,
                kan dere sende inn sporsmal direkte her.
              </p>
            </div>
            <Link
              href="/ekspertklinikken"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2d2824]"
            >
              Gå til Ekspertklinikken
            </Link>
          </div>

          <div className="mt-7 border-t border-apriil-line/80 pt-7">
            <AskAnExpert topic={topic} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PageContactCta() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-apriil-muted">Neste steg</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
                Fortell oss hva dere trenger mer klarhet i.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
                Del hva dere vil forsta bedre, sa folger vi opp med en konkret vurdering av neste steg.
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
              formClassName="grid gap-6 rounded-[14px] border border-apriil-line/80 bg-[#f7f6f3] p-6 md:p-7"
              inputClassName="w-full rounded-[14px] border border-apriil-line bg-[#fbfaf7] px-4 py-3 text-apriil-dark outline-none transition placeholder:text-apriil-muted/60 focus:border-apriil-dark/40 focus:bg-white"
              buttonClassName="inline-flex items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2d2824] disabled:cursor-not-allowed disabled:opacity-70"
              feedbackClassName="rounded-[12px] border border-apriil-line bg-[#fbfaf7] px-4 py-3 text-sm text-apriil-muted"
              submitRowClassName="mt-1 flex flex-col gap-4 border-t border-apriil-line/80 pt-5 md:flex-row md:items-center md:justify-between"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalPageChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const askExpertTopic =
    pathname.includes("/services/search-visibility") || pathname.includes("/services/sokesynlighet")
      ? "SEO og søkesynlighet"
      : pathname.includes("/services/paid-acquisition") || pathname.includes("/services/betalt-anskaffelse")
        ? "Betalt media (Google, Meta, LinkedIn)"
        : "";

  return (
    <>
      {children}
      <ExpertSupportHub topic={askExpertTopic} />
      <PageContactCta />
      <Footer />
    </>
  );
}