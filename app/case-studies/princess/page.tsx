import Link from "next/link";

export default function PrincessCaseStudyPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Kundecase</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">Nordisk retailaktør</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">
              Et arbeid der veiledningsinnhold, kommersielle landingssider og bredere etterspørselfangst ble gjort mer sammenkoblet, slik at synlighet og anskaffelse jobbet mot samme mål i en kompleks retailkontekst.
            </p>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apriil-primary">Resultatramme</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-apriil-muted">
              <li>Tydeligere kobling mellom inspirasjonsinnhold og kommersielle stier</li>
              <li>Bedre samspill mellom synlighet og anskaffelse</li>
              <li>En mer helhetlig arbeidsmodell for ytelse</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 md:grid-cols-3">
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Sektor</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Retail og etterspørselfangst</p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Mandat</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Styrke samspillet mellom innhold og fangst</p>
          </div>
          <div className="bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Fokus</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Innholdshierarki, landingssider og kommersiell intensjon</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Utfordring</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Innhold og anskaffelse påvirket den samme etterspørselen, men jobbet ikke sammen.</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Virksomheten trengte en tydeligere sammenheng mellom det brukeren oppdaget organisk, det som ble fanget opp kommersielt og hvordan landingssidene faktisk tok imot denne etterspørselen.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Tilnærming</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Bygg sterkere broer mellom intensjon, innhold, landingssider og fangst.</p>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Apriil jobbet med struktur, innholdshierarki og kommersielle innganger som ett sammenkoblet system, slik at både organisk synlighet og betalt fangst lærte av de samme signalene.</p>
        </div>
        <div className="bg-apriil-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c6b8]">Effekt</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Bedre etterspørselfangst gjennom tydeligere struktur, ikke mer kanalstøy.</p>
          <p className="mt-4 text-sm leading-7 text-white/72">Arbeidet styrket de kommersielle stiene, forbedret sammenhengen mellom innhold og landingssider og ga en tydeligere modell for videre prioritering.</p>
        </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Hva som endret seg</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">Etterspørselfangst gjennom sterkere samspill mellom struktur og kommersiell intensjon.</h2>
          </div>
          <div className="space-y-4 border border-apriil-line/80 bg-[#fbfaf7] p-6 md:p-8 text-base leading-8 text-apriil-muted">
            <p>Veiledningsinnhold og inspirasjonsflater ble tydeligere koblet til de kommersielle valgene brukeren faktisk kunne ta videre.</p>
            <p>Landingssidene ble vurdert som en del av synlighetssystemet, ikke bare som et betalt endepunkt. Det gjorde samspillet mellom kanalene sterkere.</p>
            <p>Resultatet var et mer robust grunnlag for både organisk synlighet, betalt anskaffelse og operasjonell rapportering videre.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-apriil-muted">Caset er anonymisert, men beskriver et reelt mønster der innhold, landingssider og kommersielle signaler måtte jobbe som ett system.</p>
          <Link href="/results" className="inline-flex items-center gap-3 text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary">Se flere resultater <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}