import Link from "next/link";

type PricingTier = {
  name: string;
  price: string;
  audience: string;
  features: string[];
  highlighted?: boolean;
};

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  trendTitle: string;
  trendBody: string;
  bullets: string[];
  tiers: PricingTier[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

export function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  trendTitle,
  trendBody,
  bullets,
  tiers,
  primaryCtaLabel = "Book strategisamtale",
  primaryCtaHref = "/contact",
}: ServicePageTemplateProps) {
  return (
    <main>
      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e63322]">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-6xl md:leading-[0.95]">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">{intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={primaryCtaHref}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#e63322] px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf2c1c]"
            >
              {primaryCtaLabel}
            </Link>
            <Link
              href="#pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-apriil-line px-6 py-2.5 text-sm font-semibold text-apriil-dark"
            >
              Se priser
            </Link>
          </div>
          <div className="mt-10 h-[2px] w-24 rounded-full bg-[#e63322]" />
        </div>
      </section>

      <section className="bg-[#f7f3ee] px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">{trendTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">{trendBody}</p>
          </div>
          <article className="rounded-[24px] border border-apriil-line/80 bg-white p-7 shadow-[0_14px_40px_rgba(23,23,23,0.07)] md:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">Vårt arbeid inkluderer</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-apriil-muted md:text-base">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-apriil-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="pricing" className="bg-[#fbfaf7] px-6 py-20 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e63322]">Tre prisnivåer</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Velg nivå etter modenhet og mål</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={
                  tier.highlighted
                    ? "rounded-[26px] border border-[#e63322] bg-[#fff6f4] p-7 text-apriil-dark shadow-[0_18px_48px_rgba(230,51,34,0.14)]"
                    : "rounded-[26px] border border-apriil-line/80 bg-white p-7 text-apriil-dark shadow-[0_14px_38px_rgba(23,23,23,0.06)]"
                }
              >
                <p className={tier.highlighted ? "text-xs font-semibold uppercase tracking-[0.2em] text-[#e63322]" : "text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5a47]"}>
                  {tier.name}
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{tier.price}</p>
                <p className="mt-4 text-sm leading-7 text-apriil-muted">{tier.audience}</p>
                <ul className="mt-5 grid gap-2.5 text-sm leading-7 text-apriil-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e63322]" />
                    <span>Tilgang til Apriil Clarity Data Room</span>
                  </li>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e63322]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
