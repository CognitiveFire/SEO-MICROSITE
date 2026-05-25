import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-10 md:px-10 xl:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-apriil-line/80 pt-8 text-sm text-apriil-muted md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">APRIIL</p>
          <p className="mt-2 max-w-md leading-7">Apriil kombinerer søkesynlighet, betalt anskaffelse og operasjonell rapportering i ett samlet strategisk rammeverk.</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          <Link href="/tjenester/digital-markedsforing/seo" className="transition hover:text-apriil-dark">SEO</Link>
          <Link href="/tjenester/digital-markedsforing/betalt-media" className="transition hover:text-apriil-dark">Betalt media</Link>
          <Link href="/tjenester/digital-markedsforing/analyse" className="transition hover:text-apriil-dark">Innsikt / Analyse</Link>
          <Link href="/contact" className="transition hover:text-apriil-dark">Kontakt</Link>
        </nav>
        <div className="text-apriil-muted/80">© {new Date().getFullYear()} Apriil. Alle rettigheter reservert.</div>
      </div>
    </footer>
  );
}
