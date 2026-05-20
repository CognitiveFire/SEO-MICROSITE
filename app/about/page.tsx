export default function AboutPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Om Apriil</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">Apriil er bygget for virksomheter som trenger et sterkere system for søkesynlighet, ikke flere siloer.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">Vi kombinerer søkesynlighet, betalt anskaffelse og operasjonell intelligens i ett sammenkoblet beslutningsrammeverk som gjør det enklere å prioritere, implementere og styre vekst.</p>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Strategisk</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Vi definerer beslutningsmodellen før aktivitetsmodellen.</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Før vi diskuterer kanaltiltak, tydeliggjør vi forretningsmål, hierarki, konsekvens og hvilket operativt bilde som faktisk trengs.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Sammenkoblet</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Søkesynlighet og anskaffelse behandles som gjensidig avhengige systemer.</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Etterspørsel, innhold, annonsering og rapportering formes av de samme signalene. Derfor bør også prioriteringen være sammenkoblet.</p>
        </div>
        <div className="bg-apriil-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c6b8]">Operasjonell</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Clarity gjør innsikt om til neste tiltak, eierskap og rapportering.</p>
          <p className="mt-4 text-sm leading-7 text-white/72">Arbeidet skal munne ut i tiltak som kan eies, implementeres og forstås av både spesialister og ledelse.</p>
        </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Hvordan vi jobber</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">Et konsulentskap bygget for tydeligere ledelsesbeslutninger.</h2>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6 md:p-8 text-base leading-8 text-apriil-muted">
            Vi er ikke organisert rundt isolerte kanalteam. Vi bygger koblingen mellom etterspørsel, synlighet, anskaffelse og rapportering, slik at virksomheter kan styre vekst med et mer helhetlig operativt bilde.
          </div>
        </div>
      </section>
    </main>
  );
}