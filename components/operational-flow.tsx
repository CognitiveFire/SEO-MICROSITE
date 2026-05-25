export function OperationalFlow() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="w-full">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
            Operasjonell intelligensflyt
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
            Signaler til intelligens. Intelligens til prioriterte beslutninger.
          </h2>
          <p className="mt-5 text-lg leading-8 text-apriil-muted">
            Apriil Clarity er koblingssystemet. Det samler fragmenterte input,
            bruker prioriteringslogikk og gjør dem om til tydeligere operative
            valg for team og ledelse.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-apriil-line/80 bg-apriil-line/80 md:grid-cols-3">
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-apriil-dark">
              01
            </p>
            <h3 className="mt-4 text-xl font-semibold text-apriil-dark">
              Signaler
            </h3>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">
              Søkeetterspørsel, anskaffelsesytelse, landingssideatferd,
              CRM-utfall og rapporteringshelse ses samlet.
            </p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-apriil-dark">
              02
            </p>
            <h3 className="mt-4 text-xl font-semibold text-apriil-dark">
              Intelligenslag
            </h3>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">
              Påvirkning, kompleksitet, hast, sikkerhet og tverrkanal-påvirkning
              vektes før noe prioriteres.
            </p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-apriil-dark">
              03
            </p>
            <h3 className="mt-4 text-xl font-semibold text-apriil-dark">
              Prioriterte beslutninger
            </h3>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">
              Outputen er ikke enda et dashbord. Den er en tydeligere sekvens av
              tiltak, eierskap og kommersielle implikasjoner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
