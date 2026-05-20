export function ProblemSection() {
  return (
    <section className="border-t border-apriil-line/80 px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">
              Problemet
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">
              Fragmentert rapportering skaper fragmenterte beslutninger.
            </h2>
            <p className="mt-6 text-lg leading-8 text-apriil-muted">
              Når SEO, betalt anskaffelse og analyse beskrives som separate systemer,
              svekkes strategien. Team optimaliserer kanaler, mens ledelsen fortsatt
              mangler et samlet operativt bilde.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-apriil-line/80 bg-apriil-line/80 md:grid-cols-3">
            <div className="bg-[#fbfaf7] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">
                Rapportering dupliserer historien
              </h3>
              <p className="mt-4 text-sm leading-7 text-apriil-muted">
                Separate dashbord gjentar de samme målingene med ulikt språk, men uten
                et felles beslutningsrammeverk.
              </p>
            </div>
            <div className="bg-[#fbfaf7] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">
                Kanalbeslutninger driver fra hverandre
              </h3>
              <p className="mt-4 text-sm leading-7 text-apriil-muted">
                SEO- og paid-team handler på isolerte signaler, selv når de påvirker den
                samme etterspørselen og de samme landingssideutfallene.
              </p>
            </div>
            <div className="bg-[#fbfaf7] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">
                Ledelsen får støy, ikke klarhet
              </h3>
              <p className="mt-4 text-sm leading-7 text-apriil-muted">
                Flere dashbord forbedrer sjelden beslutninger. En sterkere arbeidsmodell
                gjør det.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}