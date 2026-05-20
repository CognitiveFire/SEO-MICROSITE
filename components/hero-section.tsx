import Link from "next/link";

export function HeroSection() {
  return (
    <section className="px-6 md:px-10 xl:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-apriil-primary">
              Operasjonell søkekonsulent
            </p>
            <h1 className="mt-8 max-w-4xl text-[56px] font-semibold leading-[0.95] tracking-[-0.07em] text-apriil-dark md:text-[82px] xl:text-[96px]">
              Operasjonell klarhet på tvers av søkesynlighet og anskaffelse.
            </h1>
            <p className="mt-8 max-w-3xl text-[20px] leading-[1.6] text-apriil-muted md:text-[22px]">
              Apriil kombinerer søkesynlighet, betalt anskaffelse og operasjonell
              rapportering i ett samlet strategisk rammeverk, designet for tydeligere
              prioriteringer og sterkere langsiktig vekst.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/signal-room"
                className="inline-flex items-center gap-3 rounded-full border border-apriil-dark px-6 py-3 text-sm font-semibold text-apriil-dark transition hover:bg-apriil-mist"
              >
                Utforsk Apriil Clarity
                <span aria-hidden="true">↗</span>
              </Link>
              <a href="#services" className="text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary">
                Se tjenester
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[0.92] rounded-[28px] border border-apriil-line bg-[linear-gradient(180deg,#f3f0e9_0%,#ece8df_100%)] p-6">
              <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/70 bg-white/30 p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Apriil Clarity</p>
                  <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-apriil-dark">
                    Søkesynlighet og betalt anskaffelse, koblet sammen av ett
                    beslutningsrammeverk.
                  </p>
                </div>
                <div className="grid gap-px overflow-hidden rounded-[18px] border border-apriil-line/80 bg-apriil-line/80">
                  <div className="bg-[#fbfaf7] p-4 text-sm leading-7 text-apriil-muted">
                    Signaler fra etterspørsel, anskaffelse, landingssider og rapportering
                    vektes for tydeligere prioritering.
                  </div>
                  <div className="bg-[#fbfaf7] p-4 text-sm leading-7 text-apriil-muted">
                    Outputen er ikke enda et dashbord. Den er en tydeligere sekvens av
                    tiltak, eierskap og kommersielle implikasjoner.
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
