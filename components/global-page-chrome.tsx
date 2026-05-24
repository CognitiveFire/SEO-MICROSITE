"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import { AskAnExpert } from "./AskAnExpert";
import { LeadCaptureForm } from "./lead-capture-form";

function PageContactCta() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="rounded-[30px] border border-apriil-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(251,250,247,0.95))] p-8 shadow-[0_16px_50px_rgba(23,23,23,0.05)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Neste steg</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
                Tell us how your company could use more clarity.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
                Del hva dere vil forstå bedre, så følger vi opp med en tydelig vurdering av hvor Apriil kan bidra videre.
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
              formClassName="grid gap-6 rounded-[24px] border border-apriil-line/80 bg-white/85 p-6 shadow-[0_16px_46px_rgba(23,23,23,0.06)] md:p-7"
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
      <section className="px-6 pb-6 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-10">
          <AskAnExpert topic={askExpertTopic} />
        </div>
      </section>
      <PageContactCta />
      <Footer />
    </>
  );
}