import type { ReactNode } from "react";
import Link from "next/link";
import { CtaPillLink } from "@/components/cta-pill";
import type { OfficeData } from "@/components/offices/data";

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
        {title}
      </h2>
      {intro ? (
        <div className="mt-6 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">{intro}</div>
      ) : null}
    </div>
  );
}

export function OfficePageTemplate({ office }: { office: OfficeData }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Apriil ${office.city}`,
    url: `https://apriil.no/kontorer/${office.slug}`,
    areaServed: office.city,
    telephone: office.phone,
    email: office.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address[0],
      addressLocality: office.city,
      postalCode: office.address[1].split(" ")[0],
      addressCountry: "NO",
    },
  };

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: office.experts.map((expert, index) => ({
      "@type": "Person",
      position: index + 1,
      name: expert.name,
      jobTitle: expert.role,
      worksFor: {
        "@type": "Organization",
        name: "Apriil",
      },
      knowsAbout: expert.focusAreas,
    })),
  };

  return (
    <main className="w-full px-6 pb-20 pt-8 md:px-10 md:pt-10 xl:px-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />

      <div className="w-full space-y-20 md:space-y-24">
        <section className="grid gap-10 border-t border-apriil-line/70 pt-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">Kontor {office.city}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              {office.heroTitle}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-9 text-apriil-muted md:text-[1.16rem]">{office.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPillLink href="#kontakt-skjema">Snakk med oss</CtaPillLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[18px] border border-apriil-line/70 bg-[#e9e7e1] p-7 md:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,65,1,0.12),transparent_46%)]" />
            <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(23,23,23,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="relative space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">Lokal posisjon</p>
              <p className="max-w-[30ch] text-2xl font-semibold tracking-[-0.03em] text-apriil-dark md:text-4xl md:leading-[1.02]">
                {office.positioning}
              </p>
              <div className="h-px w-full bg-apriil-line/80" />
              <p className="text-sm uppercase tracking-[0.16em] text-apriil-muted">{office.city}, Norge</p>
            </div>
          </div>
        </section>

        <section className="rounded-[18px] border border-[#2e2a26] bg-[#1b1917] px-6 py-14 md:px-10 md:py-16">
          <SectionTitle
            eyebrow="Lokalt marked"
            title={`Markedskompetanse i ${office.city}`}
            intro={<span className="text-[#c8c2b8]">{office.marketIntro}</span>}
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {office.marketSignals.map((signal) => (
              <li
                key={signal}
                className="rounded-full border border-[#3c3832] bg-[#221f1c] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#d7d0c5]"
              >
                {signal}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-apriil-line/70 pt-12">
          <SectionTitle
            eyebrow="Hva vi hjelper med"
            title={`Strategiske leveranser fra ${office.city}`}
            intro={
              <>
                Tett samarbeid med <Link href="/tjenester/digital-markedsforing/seo" className="border-b border-apriil-dark/30">SEO</Link>,{" "}
                <Link href="/tjenester/digital-markedsforing/betalt-media" className="border-b border-apriil-dark/30">betalt media</Link>,{" "}
                <Link href="/tjenester/digital-markedsforing/analyse" className="border-b border-apriil-dark/30">analyse</Link> gir bedre lokal forankring og sterkere kommersiell retning.
              </>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {office.helpWith.map((item) => (
              <article key={item} className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] px-5 py-5 text-apriil-muted">
                <p className="text-base leading-8">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-apriil-line/70 pt-12">
          <SectionTitle
            eyebrow="Team expertise"
            title="Senior ekspertise med lokal markedskunnskap"
            intro="Ekspertisen er bygget for rådgivning og gjennomforing i markeder med tydelige kommersielle krav."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {office.experts.map((expert) => (
              <article
                key={expert.name}
                className="group overflow-hidden rounded-[16px] border border-apriil-line/80 bg-[#f5f3ee] transition hover:border-[#ff4101]/35"
              >
                <div className="h-[150px] bg-[linear-gradient(140deg,#d6d3cc_0%,#efede8_65%,#d9d6cf_100%)]" />
                <div className="space-y-4 px-5 py-5">
                  <div>
                    <p className="text-xl font-semibold tracking-[-0.03em] text-apriil-dark">{expert.name}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.12em] text-apriil-muted">{expert.role}</p>
                  </div>
                  <p className="text-sm leading-7 text-apriil-muted">{expert.strategicExpertise}</p>
                  <ul className="space-y-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-apriil-muted">
                    {expert.focusAreas.map((area) => (
                      <li key={area} className="border-t border-apriil-line/80 pt-2">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[18px] border border-[#2e2a26] bg-[#1b1917] px-6 py-14 md:px-10 md:py-16">
          <SectionTitle
            eyebrow="Selected capabilities"
            title="Kapabiliteter vi ofte kobler inn"
            intro={<span className="text-[#c8c2b8]">Utvalgte fagomrader som stotter lokal synlighet og kommersiell utvikling.</span>}
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {office.capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-[12px] border border-[#3a3530] bg-[#221f1c] px-4 py-3 text-sm font-medium text-[#e2ddd4]"
              >
                {capability}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-apriil-line/70 pt-12">
          <SectionTitle eyebrow="Kontaktinformasjon" title={`Apriil ${office.city}`} />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
            <article className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">Adresse</p>
              <p className="mt-3 text-base leading-8 text-apriil-dark">{office.address[0]}<br />{office.address[1]}</p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">Kontakt</p>
              <p className="mt-3 text-base leading-8 text-apriil-dark">
                <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="border-b border-apriil-line/80">{office.phone}</a>
                <br />
                <a href={`mailto:${office.email}`} className="border-b border-apriil-line/80">{office.email}</a>
              </p>
            </article>

            <article className="rounded-[14px] border border-apriil-line/80 bg-[#f8f7f4] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-apriil-muted">Lokal kontaktperson</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-apriil-dark">{office.contactName}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.12em] text-apriil-muted">{office.contactRole}</p>
              <a
                href={office.mapHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-apriil-line/80 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-apriil-dark transition hover:border-[#ff4101]/45"
              >
                Se kart
                <span className="h-1 w-8 bg-[#ff4101]/65" />
              </a>
            </article>
          </div>
        </section>

        <section className="rounded-[18px] border border-[#2e2a26] bg-[#1b1917] px-6 py-14 md:px-10 md:py-16">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#f2efe9] md:text-6xl md:leading-[0.96]">
            Trenger dere en tydeligere retning for synlighet og markedsforing?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#c8c2b8] md:text-lg">
            Vi kan gi en konkret vurdering av dagens modell og anbefale neste prioritering for {office.city.toLowerCase()}.
          </p>
          <div className="mt-8">
            <CtaPillLink href="#kontakt-skjema">Snakk med oss</CtaPillLink>
          </div>
        </section>
      </div>
    </main>
  );
}
