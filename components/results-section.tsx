import Link from "next/link";

export function ResultsSection() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="w-full">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
            Resultater
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
            Strategisk arbeid skal endre det operative bildet.
          </h2>
          <p className="mt-5 text-lg leading-8 text-apriil-muted">
            De sterkeste resultatene er sjelden kanal-isolerte. De kommer av
            tydeligere struktur, sterkere intensjonssamspill og bedre
            operasjonell prioritering på tvers av søk og anskaffelse.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[22px] border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
          <Link
            href="/case-studies/melk"
            className="bg-[#fbfaf7] p-8 transition hover:bg-white"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
              Kategoriaktør i dagligvare
            </h3>
            <p className="mt-4 text-sm leading-7 text-apriil-muted">
              Hvordan innholdsstruktur, søkeintensjon og interne stier ble
              samkjørt til ett tydeligere operativt synlighetssystem.
            </p>
            <p className="mt-6 text-sm font-semibold text-apriil-dark">
              Se case
            </p>
          </Link>
          <Link
            href="/case-studies/princess"
            className="bg-[#fbfaf7] p-8 transition hover:bg-white"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
              Nordisk retailaktør
            </h3>
            <p className="mt-4 text-sm leading-7 text-apriil-muted">
              Hvordan veiledningsinnhold og informasjonsarkitektur ble gjort om
              til sterkere synlighet og tydeligere kommersielle stier.
            </p>
            <p className="mt-6 text-sm font-semibold text-apriil-dark">
              Se case
            </p>
          </Link>
          <Link
            href="/results"
            className="bg-[#fbfaf7] p-8 transition hover:bg-white"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
              Se den bredere resultatsiden
            </h3>
            <p className="mt-4 text-sm leading-7 text-apriil-muted">
              Et tverrsnitt av resultater innen søkesynlighet,
              anskaffelseseffektivitet og operasjonell intelligens.
            </p>
            <p className="mt-6 text-sm font-semibold text-apriil-dark">
              Se resultater
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
