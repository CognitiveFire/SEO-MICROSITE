"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState, useTransition } from "react";

type ServiceIconKey =
  | "search"
  | "meta"
  | "analytics"
  | "budget"
  | "reporting"
  | "display"
  | "programmatic"
  | "dooh"
  | "content";

type ServiceCard = {
  title: string;
  body: string;
  icon: ServiceIconKey;
};

type ProcessStep = {
  title: string;
  body: string;
};

type CaseStudyData = {
  title: string;
  situation: string;
  actions: string[];
  resultLabel: string;
  stats: Array<{ label: string; value: string }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageTemplateProps = {
  serviceName: string;
  slug: string;
  heroTitle: string;
  heroBody: string;
  heroImageSrc: string;
  heroImageAlt: string;
  heroCtaLabel: string;
  whatWeDoIntro: string;
  serviceCards: ServiceCard[];
  processSteps: ProcessStep[];
  caseStudy: CaseStudyData;
  faqItems: FaqItem[];
  contactText: string;
};

function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  if (icon === "search") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="#8f5a33" strokeWidth="1.8" />
        <path d="M17 17L23 23" stroke="#8f5a33" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "meta") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 17.5C6.4 12.2 8.6 9.5 10.6 9.5C12.8 9.5 14 12.3 14 14.2C14 12.3 15.2 9.5 17.4 9.5C19.4 9.5 21.6 12.2 24 17.5" stroke="#8f5a33" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "analytics") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 22H23" stroke="#8f5a33" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="7" y="13" width="3" height="7" rx="1" fill="#8f5a33" />
        <rect x="12.5" y="10" width="3" height="10" rx="1" fill="#8f5a33" />
        <rect x="18" y="7" width="3" height="13" rx="1" fill="#8f5a33" />
      </svg>
    );
  }

  if (icon === "budget") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="20" height="14" rx="2.5" stroke="#8f5a33" strokeWidth="1.8" />
        <circle cx="14" cy="14" r="3.2" stroke="#8f5a33" strokeWidth="1.6" />
      </svg>
    );
  }

  if (icon === "reporting") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="5" width="16" height="18" rx="2" stroke="#8f5a33" strokeWidth="1.8" />
        <path d="M10 11H18M10 15H18M10 19H15" stroke="#8f5a33" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "display") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="13" rx="2.2" stroke="#8f5a33" strokeWidth="1.8" />
        <path d="M14 19V23M10 23H18" stroke="#8f5a33" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "programmatic") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="2" fill="#8f5a33" />
        <circle cx="21" cy="7" r="2" fill="#8f5a33" />
        <circle cx="14" cy="14" r="2.5" fill="#8f5a33" />
        <circle cx="7" cy="21" r="2" fill="#8f5a33" />
        <circle cx="21" cy="21" r="2" fill="#8f5a33" />
        <path d="M7 7L14 14L21 7M7 21L14 14L21 21" stroke="#8f5a33" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "dooh") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="7" width="18" height="11" rx="2" stroke="#8f5a33" strokeWidth="1.8" />
        <path d="M14 18V22M11 22H17" stroke="#8f5a33" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M6 20V8H12C15.3 8 18 10.7 18 14C18 17.3 15.3 20 12 20H6Z" stroke="#8f5a33" strokeWidth="1.8" />
      <path d="M18 9L22 7M18 14H23M18 19L22 21" stroke="#8f5a33" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeroGraphic({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[14px] border border-apriil-line/80 bg-[#f3f1eb] md:min-h-[420px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain object-center"
      />
    </div>
  );
}

const focusOptions = [
  "Performance Marketing",
  "SEO",
  "Sporing og analyse",
  "Programmatic",
  "Podcast",
  "Digital TV-annonsering",
  "DOOH",
];

const officeOptions = ["Bergen", "Oslo", "Stavanger"] as const;

export function ContactForm({
  serviceName,
  slug,
  contactText,
}: {
  serviceName: string;
  slug: string;
  contactText: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFocus, setSelectedFocus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("idle");
    setErrorMessage("");

    startTransition(async () => {
      const message = String(formData.get("message") || "").trim();
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          focus: formData.get("focus"),
          office: formData.get("office"),
          message:
            message ||
            `Foresporsel fra ${serviceName}-siden. Onsker en uforpliktende gjennomgang.`,
          source: `service-page-${slug}`,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setErrorMessage(data?.error || "Noe gikk galt. Prov igjen.");
        return;
      }

      form.reset();
      setSelectedFocus("");
      setStatus("success");
    });
  }

  return (
    <section id="kontakt-skjema" className="bg-[#f8f7f4] px-6 py-16 md:px-10 xl:px-16">
      <div className="w-full border-t border-apriil-line/80 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">Kontakt</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-apriil-dark md:text-4xl">
              Usikker pa hva dere faktisk trenger?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">{contactText}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[14px] border border-apriil-line/80 bg-white p-6 md:p-7">
            <label className="grid gap-2 text-sm font-medium text-apriil-dark/80">
              Navn
              <input name="name" required className="w-full rounded-[12px] border border-apriil-line bg-[#faf9f6] px-4 py-3 outline-none focus:border-apriil-dark/35" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-apriil-dark/80">
              Selskap
              <input name="company" className="w-full rounded-[12px] border border-apriil-line bg-[#faf9f6] px-4 py-3 outline-none focus:border-apriil-dark/35" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-apriil-dark/80">
              E-post
              <input name="email" type="email" required className="w-full rounded-[12px] border border-apriil-line bg-[#faf9f6] px-4 py-3 outline-none focus:border-apriil-dark/35" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-apriil-dark/80">
              Tjeneste dere er interessert i
              <select
                name="focus"
                value={selectedFocus}
                onChange={(event) => setSelectedFocus(event.target.value)}
                required
                className="w-full rounded-[12px] border border-apriil-line bg-[#faf9f6] px-4 py-3 outline-none focus:border-apriil-dark/35"
              >
                <option value="" disabled>
                  Velg tjeneste...
                </option>
                {focusOptions.map((option) => (
                  <option key={option} value={option} className="text-apriil-dark">
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-apriil-dark/80">
              Hvilket kontor vil dere bruke?
              <select
                name="office"
                required
                defaultValue=""
                className="w-full rounded-[12px] border border-apriil-line bg-[#faf9f6] px-4 py-3 outline-none focus:border-apriil-dark/35"
              >
                <option value="" disabled>
                  Velg kontor...
                </option>
                {officeOptions.map((office) => (
                  <option key={office} value={office} className="text-apriil-dark">
                    {office}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-apriil-dark/80">
              Melding (valgfritt)
              <textarea name="message" rows={4} className="w-full resize-y rounded-[12px] border border-apriil-line bg-[#faf9f6] px-4 py-3 outline-none focus:border-apriil-dark/35" />
            </label>
            <button type="submit" disabled={isPending} className="mt-2 inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2622] disabled:opacity-70">
              {isPending ? "Sender..." : "Book en samtale"}
            </button>
            {status === "success" ? <p className="text-sm text-apriil-muted">Takk. Vi tar kontakt innen en arbeidsdag.</p> : null}
            {status === "error" ? <p className="text-sm text-[#a02a1c]">{errorMessage}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export function ServicePageTemplate({
  serviceName,
  slug,
  heroTitle,
  heroBody,
  heroImageSrc,
  heroImageAlt,
  heroCtaLabel,
  whatWeDoIntro,
  serviceCards,
  processSteps,
  caseStudy,
  faqItems,
  contactText,
}: ServicePageTemplateProps) {
  return (
    <main className="w-full pb-20">
      <section className="px-6 pb-8 pt-8 md:px-10 md:pt-10 xl:px-16">
        <nav aria-label="Brodsmulesti" className="border-t border-apriil-line/80 pt-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-apriil-muted">
            <li>
              <Link href="/" className="hover:text-apriil-dark">Hjem</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/tjenester/digital-markedsforing" className="hover:text-apriil-dark">
                Digital markedsforing
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-apriil-dark">{serviceName}</li>
          </ol>
        </nav>
      </section>

      <section className="px-6 pb-14 md:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.9]">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-apriil-muted md:text-[1.22rem]">{heroBody}</p>
            <Link href="#kontakt-skjema" className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2622]">
              {heroCtaLabel}
            </Link>
          </div>
          <HeroGraphic src={heroImageSrc} alt={heroImageAlt} />
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 py-16 md:px-10 xl:px-16">
        <div className="w-full border-t border-apriil-line/80 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">Hva vi gjor</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">{whatWeDoIntro}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card) => (
              <article key={card.title} className="rounded-[14px] border border-apriil-line/80 bg-white p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f1ede4]">
                  <ServiceIcon icon={card.icon} />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-apriil-dark">{card.title}</h3>
                <p className="mt-3 text-base leading-8 text-apriil-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="w-full border-t border-apriil-line/80 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">Hvordan vi jobber</p>
          <div className="mt-6 grid gap-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[12px] border border-apriil-line/80 bg-[#fbfaf7] p-5 md:p-6">
                <div className="grid gap-3 md:grid-cols-[auto_1fr] md:items-start md:gap-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-apriil-line bg-white text-sm font-semibold text-apriil-dark">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-apriil-dark">{step.title}</h3>
                    <p className="mt-2 text-base leading-8 text-apriil-muted">{step.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 py-16 md:px-10 xl:px-16">
        <div className="w-full border-t border-apriil-line/80 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">Case</p>
          <div className="mt-6 rounded-[14px] border border-apriil-line/80 bg-white p-6 md:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-apriil-dark">{caseStudy.title}</h3>
            <p className="mt-4 text-base leading-8 text-apriil-muted">{caseStudy.situation}</p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-apriil-dark/75">Hva Apriil gjorde</p>
                <ul className="mt-3 space-y-2 text-base leading-8 text-apriil-muted">
                  {caseStudy.actions.map((action) => (
                    <li key={action} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-apriil-primary" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-apriil-dark/75">{caseStudy.resultLabel}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {caseStudy.stats.map((stat) => (
                    <article key={stat.label} className="rounded-[12px] border border-apriil-line/80 bg-[#fbfaf7] p-4">
                      <p className="text-2xl font-semibold tracking-[-0.02em] text-apriil-dark">{stat.value}</p>
                      <p className="mt-1 text-sm leading-6 text-apriil-muted">{stat.label}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 xl:px-16">
        <div className="w-full border-t border-apriil-line/80 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apriil-muted">FAQ</p>
          <div className="mt-6 divide-y divide-apriil-line/80 rounded-[14px] border border-apriil-line/80 bg-white">
            {faqItems.map((item) => (
              <details key={item.question} className="group px-6 py-5">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.02em] text-apriil-dark">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl text-base leading-8 text-apriil-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactForm serviceName={serviceName} slug={slug} contactText={contactText} />
    </main>
  );
}
