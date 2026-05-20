import Link from "next/link";

export default function PaidAcquisitionPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Tjeneste</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">Betalt anskaffelse</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">
              Apriil behandler betalt anskaffelse som en kommersiell fangstdisiplin, ikke bare en annonsekanal. Målet er bedre signalkvalitet, tydeligere intensjon og sterkere samspill mellom søk, landingssider og konvertering.
            </p>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apriil-primary">Utformet for</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-apriil-muted">
              <li>Søkeannonser og ytelsesstruktur som reflekterer faktisk intensjon</li>
              <li>Kvalitet på konvertering fremfor volum alene</li>
              <li>Bedre samspill mellom landingsside og intensjon</li>
              <li>Rapportering som kobles til bredere prioritetsarbeid</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">01 Intensjonskvalitet</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Kampanjestruktur som speiler hvordan etterspørsel faktisk konverterer.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Kontostruktur, søketemaer og budlogikk må speile kommersiell verdi, ikke bare medievaner eller historiske kampanjegrenser.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">02 Fangsteffektivitet</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Budsjettallokering, landingsside-samspill og tydeligere læringssløyfer.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Vi forbedrer forholdet mellom annonseintensjon, landingsside og konverteringskvalitet, slik at læringen blir operativ og budsjettet jobber smartere.</p>
        </div>
        <div className="bg-apriil-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c6b8]">03 Sammenkoblet system</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Betalt anskaffelse skal styrke den bredere modellen for synlighet.</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">Apriil kobler betalt anskaffelse til søkesynlighet og Clarity, slik at teamene jobber fra de samme kommersielle signalene og ikke konkurrerende dashboards.</p>
        </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Omfang</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">Hva et engasjement innen betalt anskaffelse typisk dekker.</h2>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6 md:p-8">
            <ul className="space-y-3 text-base leading-8 text-apriil-muted">
              <li>Kampanje- og kontostruktur</li>
              <li>Budstrategi og budsjettallokering</li>
              <li>Analyse av konverteringskvalitet</li>
              <li>Landingsside-samspill og kommersiell friksjon</li>
              <li>Rapportering som kan brukes av både team og ledelse</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-12">
        <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary">Diskuter betalt anskaffelse <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}