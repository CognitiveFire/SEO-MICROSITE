import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="bg-[#0f0f0f] px-6 py-20 text-white md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f08f86]">Digital marketing</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.06em] md:text-6xl md:leading-[0.95]">
            Vi selger tre tjenester: SEO, Paid Media og BI - hver med tre tydelige nivåer.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Apriil bygger sammenkoblet kommersiell vekst i et søkelandskap der AI-systemer velger kilder, annonsering blir mer automatisert og datakravene blir strengere.
            Hver tjeneste leveres i tre tiers, og alle tiers inkluderer tilgang til Apriil Clarity Data Room.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f3ee] px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Velg tjeneste</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link href="/services/seo" className="rounded-[22px] border border-apriil-line/80 bg-white p-6 shadow-[0_14px_40px_rgba(23,23,23,0.06)] transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">SEO</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Søkesynlighet i Google og AI-søk</h3>
              <p className="mt-3 text-sm leading-7 text-apriil-muted">3 tiers. Inkluderer tilgang til Apriil Clarity Data Room.</p>
            </Link>
            <Link href="/services/paid-media" className="rounded-[22px] border border-apriil-line/80 bg-white p-6 shadow-[0_14px_40px_rgba(23,23,23,0.06)] transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Paid Media</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Kanaler, kreativ og konvertering i samme modell</h3>
              <p className="mt-3 text-sm leading-7 text-apriil-muted">3 tiers. Inkluderer tilgang til Apriil Clarity Data Room.</p>
            </Link>
            <Link href="/services/intelligence-consulting-analytics" className="rounded-[22px] border border-apriil-line/80 bg-white p-6 shadow-[0_14px_40px_rgba(23,23,23,0.06)] transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">BI / Analytics</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Intelligence, consulting og analytics</h3>
              <p className="mt-3 text-sm leading-7 text-apriil-muted">3 tiers. Inkluderer tilgang til Apriil Clarity Data Room.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}