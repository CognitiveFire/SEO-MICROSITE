import Link from "next/link";

export default function SearchVisibilityPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Tjeneste</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">Søkesynlighet</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">
              Søkesynlighet hos Apriil er bredere enn tradisjonell SEO. Vi bygger synlighetssystemer som gjør virksomheter tydeligere i klassisk søk, AI-svar, video- og innholdsflater og andre miljøer der etterspørsel formes.
            </p>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apriil-primary">Utformet for</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-apriil-muted">
              <li>Teknisk synlighet og struktur som tåler flere søkegrensesnitt</li>
              <li>Innholdsarkitektur som speiler intensjon, ikke bare søkeord</li>
              <li>AI-søk-beredskap og tydeligere innholdsautoritet</li>
              <li>Bedre kobling mellom synlighet og kommersiell prioritering</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">01 Teknisk synlighet</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Arkitektur, crawl-logikk og interne stier.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Vi rydder i det strukturelle laget som avgjør hva søkemotorer og andre oppdagelsessystemer faktisk kan forstå, prioritere og vise frem.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">02 Etterspørselfangst</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Intensjonskartlegging, innholdssystemer og synlighet i søkeresultater.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Synlighet bygges gjennom et tydelig forhold mellom spørsmål, behov, innholdsformat og kommersielle stier. Det krever mer enn innholdsproduksjon.</p>
        </div>
        <div className="bg-apriil-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c6b8]">03 Operativ modell</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Synlighetsarbeid som ledelsen faktisk kan prioritere.</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">Apriil Clarity kobler synlighetsarbeidet til rapportering, prioriteringslogikk og implementeringssynlighet, slik at effekten ikke forsvinner i siloer.</p>
        </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Omfang</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">Hva et engasjement innen søkesynlighet typisk dekker.</h2>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6 md:p-8">
            <ul className="space-y-3 text-base leading-8 text-apriil-muted">
              <li>Teknisk SEO og strukturell gjennomgang</li>
              <li>Informasjonsarkitektur og intern lenking</li>
              <li>Innholdsprioritering basert på intensjon og kommersiell relevans</li>
              <li>Synlighet på tvers av AI-søk, video og andre oppdagelsesflater</li>
              <li>Rapportering som kobler synlighet til prioriterte beslutninger</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-12">
        <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary">Diskuter søkesynlighet <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}