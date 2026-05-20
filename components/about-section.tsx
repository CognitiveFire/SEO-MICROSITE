export function AboutSection() {
  return (
    <section className="px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Om Apriil</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">Et strategisk søk- og ytelseskonsulentskap, ikke en kanalfabrikk.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-apriil-muted">Apriil kombinerer søkesynlighet, betalt anskaffelse og operasjonell intelligens i ett sammenkoblet beslutningsrammeverk, designet for sterkere langsiktige vekstbeslutninger.</p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-apriil-line/80 bg-apriil-line/80 md:grid-cols-3">
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xl font-semibold text-apriil-dark">Strategisk</p>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">Vi starter med operasjonell klarhet, hierarki og kommersiell konsekvens for taktikk.</p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xl font-semibold text-apriil-dark">Sammenkoblet</p>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">Søkesynlighet og anskaffelse behandles som gjensidig avhengige systemer, ikke isolerte kanalteam.</p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xl font-semibold text-apriil-dark">Operasjonell</p>
            <p className="mt-3 text-sm leading-7 text-apriil-muted">Apriil Clarity kobler analyse, prioritering, implementeringssporing og rapportering til ledelsen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
