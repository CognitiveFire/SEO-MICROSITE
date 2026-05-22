import Link from "next/link";

export default function MelkCaseStudyPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Kundecase</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">Kategoriaktør i dagligvare</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">
              Hvordan innholdsstruktur, søkeintensjon og interne stier ble gjort om til et tydeligere operativt synlighetssystem for en etablert kategoriaktør som trengte mer enn bare høyere rangeringer.
            </p>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apriil-primary">Resultatramme</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-apriil-muted">
              <li>Klarere sidehierarki og sterkere interne stier</li>
              <li>Bedre samsvar mellom informasjonsbehov og kommersielle veier</li>
              <li>Et mer operativt synlighetsbilde for teamet</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden border border-apriil-line/80 bg-[#f4efe7]">
            <img
              src="/innsikt.png"
              alt="Anonymisert innsiktsvisning fra case"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid gap-6">
            <div className="overflow-hidden border border-apriil-line/80 bg-[#f4efe7]">
              <img
                src="/tiltak.png"
                alt="Anonymisert tiltaksoversikt fra case"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6 text-sm leading-7 text-apriil-muted">
              Visualene er anonymiserte og viser struktur, prioriteringer og operasjonell oppfølging uten å eksponere merkevare eller virksomhetsspesifikke detaljer.
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 md:grid-cols-3">
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Sektor</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Forbruker og kategoriinnhold</p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Mandat</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Tydeligere synlighetsarkitektur</p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Fokus</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Hierarki, intern lenking og intensjon</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Utfordring</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Sterkt innholdsvolum, men svak strukturell klarhet.</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Aktøren hadde innhold og etterspørsel, men manglet et tydelig nok forhold mellom temaer, kategorier, navigasjon og de kommersielle stegene brukeren skulle videre til.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Tilnærming</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Bygg synlighetssystemet på nytt, ikke bare innholdsplanen.</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Apriil jobbet med søkeintensjon, struktur, intern lenking og informasjonsarkitektur som ett sammenkoblet system, slik at hver side fikk en tydeligere rolle i helheten.</p>
        </div>
        <div className="bg-apriil-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c6b8]">Effekt</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">En tydeligere operativ modell for fremtidig synlighetsarbeid.</p>
          <p className="mt-4 text-sm leading-7 text-white/72">Resultatet var ikke bare bedre enkeltartikler, men et mer robust system for hvordan nytt innhold, interne stier og prioriteringer skulle styres videre.</p>
        </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Hva som endret seg</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">Fra isolerte innholdsgrep til en tydeligere synlighetsarkitektur.</h2>
          </div>
          <div className="space-y-4 border border-apriil-line/80 bg-[#fbfaf7] p-6 md:p-8 text-base leading-8 text-apriil-muted">
            <p>Sidehierarki og tematiske relasjoner ble tydeligere definert, slik at søkeflater og brukere møtte mindre friksjon på vei inn i innholdssystemet.</p>
            <p>Interne lenker ble brukt som operativ struktur, ikke bare som SEO-taktikk. Det gjorde navigasjonen mer meningsfull og styrket sammenhengen mellom spørsmål, svar og neste steg.</p>
            <p>Arbeidet ga samtidig teamet et klarere beslutningsgrunnlag for hvilke nye sider og forbedringer som faktisk ville endre synlighetsbildet videre.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted">Caset er anonymisert, men strukturen, problemtypen og arbeidsmodellen reflekterer reelt arbeid med synlighetsarkitektur og etterspørselfangst.</p>
          <Link href="/results" className="inline-flex items-center gap-3 text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary">Se flere resultater <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}