import Link from "next/link";

export function HeroSection() {
  return (
    <section className="px-6 md:px-10 xl:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-apriil-primary">
              APRIIL CLARITY
            </p>
            <h1 className="mt-8 max-w-4xl text-[56px] font-semibold leading-[0.95] tracking-[-0.07em] text-apriil-dark md:text-[82px] xl:text-[96px]">
              Operasjonell klarhet på tvers av søkesynlighet og anskaffelse.
            </h1>
            <p className="mt-8 max-w-3xl text-[20px] leading-[1.6] text-apriil-muted md:text-[22px]">
              Apriil kombinerer søkesynlighet, betalt anskaffelse og operasjonell
              oppfølging i ett samlet strategisk rammeverk. Apriil Clarity er
              prinsippene som styrer prioriteringene på tvers av alle tjenester,
              med mål om tydeligere beslutninger og sterkere kommersiell utvikling.
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
          <div className="mt-2 lg:mt-0">
            <div className="relative rounded-[34px] border border-apriil-line/70 bg-[radial-gradient(circle_at_18%_12%,#f4eee3_0%,#e8e2d8_48%,#ddd4c8_100%)] p-7 shadow-[0_24px_70px_rgba(80,56,34,0.16)]">
              <div className="mx-auto w-[min(100%,460px)] rounded-[34px] bg-[#d9dce1] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_45px_rgba(26,27,29,0.22)]">
                <div className="rounded-[28px] bg-[#111214] p-3">
                  <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black">
                    <span className="absolute left-1/2 top-2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#25272b] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
                    <div className="aspect-[4/3] w-full bg-[linear-gradient(145deg,#141517_0%,#1b1d20_45%,#151618_100%)] p-5 md:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8c6b8]">Apriil Clarity</p>

                      <div className="mt-4 grid grid-cols-3 gap-2.5">
                        <div className="rounded-lg border border-white/12 bg-white/5 px-2 py-2 text-[11px] font-medium text-white/88">Synlighet</div>
                        <div className="rounded-lg border border-white/12 bg-white/5 px-2 py-2 text-[11px] font-medium text-white/88">Anskaffelse</div>
                        <div className="rounded-lg border border-white/12 bg-white/5 px-2 py-2 text-[11px] font-medium text-white/88">Rapportering</div>
                      </div>

                      <div className="mt-4 rounded-xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-[#d8c6b8]" />
                          <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/72">Intelligensprinsipper</p>
                        </div>
                        <p className="mt-2 text-sm font-semibold leading-5 text-white">Tolkning, prioritering og tydelige operative valg</p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2.5">
                        <div className="rounded-lg border border-white/12 bg-white/5 px-2 py-2 text-[11px] text-white/82">Bedre beslutningsgrunnlag</div>
                        <div className="rounded-lg border border-white/12 bg-white/5 px-2 py-2 text-[11px] text-white/82">Sterkere kommersiell effekt</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
