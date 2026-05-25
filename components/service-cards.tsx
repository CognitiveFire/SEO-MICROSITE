import Link from "next/link";

export function ServiceCards() {
  return (
    <section id="services" className="px-6 py-20 md:px-10 xl:px-16">
      <div className="w-full">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
            Apriil-modellen
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
            Søkesynlighet og betalt anskaffelse, koblet sammen av Apriil
            Clarity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-apriil-muted">
            Fagdisiplinene er viktige, men de styres som ett sammenkoblet
            system. Apriil Clarity er prinsippene som setter prioriteringer,
            vurderer forretningsverdi og gir et tydeligere grunnlag for
            beslutninger.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[22px] border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
          <div className="bg-[#fbfaf7] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-apriil-primary">
              Søkesynlighet
            </p>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
              Organisk etterspørselfangst, teknisk synlighet og
              informasjonsarkitektur.
            </h3>
            <p className="mt-4 text-base leading-7 text-apriil-muted">
              Bredere enn tradisjonell SEO. Arbeidet dekker teknisk synlighet,
              etterspørselfangst og innholdsstruktur som støtter kommersiell
              utvikling.
            </p>
            <Link
              href="/tjenester/digital-markedsforing/seo"
              className="mt-8 inline-flex text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary"
            >
              Se tjeneste
            </Link>
          </div>
          <div className="bg-[#fbfaf7] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-apriil-primary">
              Betalt anskaffelse
            </p>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
              Anskaffelseseffektivitet, kvalitet på kommersiell intensjon og
              landingsside-samspill.
            </h3>
            <p className="mt-4 text-base leading-7 text-apriil-muted">
              Kommersiell effektivitet på tvers av betalt søk,
              anskaffelsesstruktur, landingsside-samspill og budsjettallokering.
            </p>
            <Link
              href="/tjenester/digital-markedsforing/betalt-media"
              className="mt-8 inline-flex text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary"
            >
              Se tjeneste
            </Link>
          </div>
          <div className="bg-[#fbfaf7] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-apriil-primary">
              Apriil Clarity
            </p>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">
              Operasjonell intelligens på tvers av signaler, tiltak og
              oppfølging.
            </h3>
            <p className="mt-4 text-base leading-7 text-apriil-muted">
              Signalinnsamling, prioriteringslogikk, rapportering og
              gjennomføring samlet i ett beslutningsrammeverk for ledelse og
              team.
            </p>
            <Link
              href="/signal-room"
              className="mt-8 inline-flex text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary"
            >
              Utforsk rammeverket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
