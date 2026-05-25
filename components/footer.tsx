import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-16 md:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">APRIIL</p>
            <p className="mt-4 max-w-md text-base leading-8 text-apriil-muted">
              Apriil samler analyse, synlighet og markedsforing i ett kommersielt rammeverk for bedre beslutninger.
            </p>
        </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apriil-muted">Digital markedsforing</p>
            <nav className="mt-4 grid gap-3 text-sm text-apriil-muted">
              <Link href="/tjenester/digital-markedsforing/seo" className="transition hover:text-apriil-dark">SEO</Link>
              <Link href="/tjenester/digital-markedsforing/betalt-media" className="transition hover:text-apriil-dark">Betalt media</Link>
              <Link href="/tjenester/digital-markedsforing/analyse" className="transition hover:text-apriil-dark">Analyse</Link>
              <Link href="/tjenester/digital-markedsforing/video" className="transition hover:text-apriil-dark">Video</Link>
              <Link href="/tjenester/digital-markedsforing/sosiale-medier" className="transition hover:text-apriil-dark">Sosiale medier</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apriil-muted">Kanaler</p>
            <nav className="mt-4 grid gap-3 text-sm text-apriil-muted">
              <Link href="/tjenester/digital-markedsforing/programmatic" className="transition hover:text-apriil-dark">Programmatic</Link>
              <Link href="/tjenester/digital-markedsforing/dooh" className="transition hover:text-apriil-dark">DOOH</Link>
              <Link href="/tjenester/digital-markedsforing/podcast" className="transition hover:text-apriil-dark">Podcast</Link>
              <Link href="/tjenester/digital-markedsforing/creator-network" className="transition hover:text-apriil-dark">Creator network</Link>
              <Link href="/contact" className="transition hover:text-apriil-dark">Kontakt</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-apriil-line/70 pt-5 text-xs uppercase tracking-[0.12em] text-apriil-muted/90">
          © {new Date().getFullYear()} Apriil. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
}
