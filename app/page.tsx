import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="bg-[#0f0f0f] px-6 py-20 text-white md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f08f86]">Digital markedsføring</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.06em] md:text-6xl md:leading-[0.95]">
            Apriil er kommersielt fokusert: vi bygger optimal miks for inntekt, ikke kanal-siloer.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Sammen med kundene våre velger vi den optimale kombinasjonen av SEO, betalt media og analyse for å nå kommersiell suksess.
            Vi selger ikke kanalhåndtering uavhengig av hverandre. Vi styrer helheten mot målbar vekst i omsetning, lønnsomhet og markedsandel.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f3ee] px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Velg tjeneste</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
            Tjenestene under er byggesteiner i én samlet vekstmodell. Vi setter sammen riktig miks basert på mål, marked og modenhet.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <Link href="/services/seo" className="rounded-[26px] border border-apriil-dark/85 bg-[linear-gradient(180deg,#211c19_0%,#171311_100%)] p-7 text-white shadow-[0_22px_62px_rgba(23,23,23,0.18)] transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8c6b8]">SEO</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Fra NOK 12 000 / mnd</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Søkesynlighet i Google og AI-søk</h3>
              <p className="mt-3 text-sm leading-7 text-white/78">Tre nivåer. Inkluderer tilgang til Apriil Clarity Data Room.</p>
            </Link>
            <Link href="/services/paid-media" className="rounded-[26px] border border-[#e63322] bg-[#e63322] p-7 text-white shadow-[0_24px_62px_rgba(230,51,34,0.34)] transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">Betalt media</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Fra NOK 12 000 / mnd</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Kanaler, kreativ og konvertering i samme modell</h3>
              <p className="mt-3 text-sm leading-7 text-white/86">Tre nivåer. Inkluderer tilgang til Apriil Clarity Data Room.</p>
            </Link>
            <Link href="/services/intelligence-consulting-analytics" className="rounded-[26px] border border-white/14 bg-[#191919] p-7 text-white shadow-[0_18px_56px_rgba(23,23,23,0.16)] transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5c4bf]">Innsikt / Analyse</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Fra NOK 10 000 / mnd</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Innsikt, rådgivning og analyse</h3>
              <p className="mt-3 text-sm leading-7 text-white/82">Tre nivåer. Inkluderer tilgang til Apriil Clarity Data Room.</p>
            </Link>
          </div>
          <div className="mt-8 rounded-[22px] border border-apriil-line/80 bg-white/75 p-6 shadow-[0_12px_34px_rgba(23,23,23,0.06)] md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Fagnotat</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark">Fra oppsett til inntekt</h3>
              <p className="mt-2 text-sm leading-7 text-apriil-muted md:text-base">
                Last ned fagnotat med samlet tjenestemodell, priser, arbeidsmetodikk og kontoradresser.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-0 md:justify-end">
              <a
                href="/clarity-growth-framework-whitepaper.html"
                className="inline-flex items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a2420]"
              >
                Åpne fagnotat
              </a>
              <a
                href="/clarity-growth-framework-whitepaper.html?print=1"
                className="inline-flex items-center justify-center rounded-full border border-apriil-line bg-[#f7f3ee] px-6 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5"
              >
                Last ned PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}