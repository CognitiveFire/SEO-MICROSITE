"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import { AskAnExpert } from "./AskAnExpert";

function PageContactCta() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="rounded-[30px] border border-apriil-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(251,250,247,0.95))] p-8 shadow-[0_16px_50px_rgba(23,23,23,0.05)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Neste steg</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
                Fortell oss hvor dagens modell trenger mer klarhet.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
                Del hva dere vil forstå bedre, så følger vi opp med en tydelig vurdering av hvor Apriil kan bidra videre.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-apriil-dark bg-apriil-dark px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a2420]"
            >
              Gå til kontaktskjema
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalPageChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideSharedCta = pathname === "/" || pathname === "/contact";

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
      {hideSharedCta ? null : <PageContactCta />}
      <Footer />
    </>
  );
}