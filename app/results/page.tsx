import Link from "next/link";

export default function ResultsPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="w-full border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
          Resultater
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">
          Resultater som kommer av sterkere struktur, ikke isolerte kanalgrep.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">
          Apriil fokuserer på arbeid som endrer det operative bildet: tydeligere
          prioritering, bedre samspill mellom intent og struktur, og sterkere
          forbindelse mellom synlighet og kommersiell effekt.
        </p>
      </section>
      <section className="w-full mt-16 border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
          <div className="bg-[#fbfaf7] p-8 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">
              Utvalgt case
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-apriil-dark">
              Kategoriaktør i dagligvare: synlighetsarkitektur i praksis.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-apriil-muted">
              Hvordan innholdsstruktur, søkeintensjon og interne stier ble
              samkjørt til ett tydeligere operativt synlighetssystem.
            </p>
            <Link
              href="/case-studies/melk"
              className="mt-8 inline-flex text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary"
            >
              Se case
            </Link>
          </div>
          <div className="bg-apriil-dark p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c6b8]">
              Utvalgt case
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Nordisk retailaktør: etterspørselfangst gjennom struktur.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Veiledningsinnhold og informasjonsarkitektur ble gjort om til
              sterkere synlighet og tydeligere kommersielle stier.
            </p>
            <Link
              href="/case-studies/princess"
              className="mt-8 inline-flex text-sm font-semibold text-white transition hover:text-[#d8c6b8]"
            >
              Se case
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full mt-16 border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 md:grid-cols-3">
          <div className="bg-[#fbfaf7] p-8">
            <p className="text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">
              Synlighet
            </p>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">
              Struktur og innhold som gir bedre etterspørselfangst over tid.
            </p>
          </div>
          <div className="bg-[#fbfaf7] p-8">
            <p className="text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">
              Effektivitet
            </p>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">
              Sterkere forhold mellom intensjon, landingsside og
              konverteringskvalitet.
            </p>
          </div>
          <div className="bg-[#fbfaf7] p-8">
            <p className="text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">
              Klarhet
            </p>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">
              Rapportering og prioritering som gjør neste beslutning tydeligere.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-16 border-t border-apriil-line/80 pt-12">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary"
        >
          Be om en gjennomgang av resultatbildet{" "}
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
