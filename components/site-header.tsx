"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/services/seo", label: "SEO" },
  { href: "/services/paid-media", label: "Betalt media" },
  { href: "/services/intelligence-consulting-analytics", label: "Innsikt og analyse" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 pt-8 md:px-10 md:pt-10 xl:px-16">
      <div className="mx-auto max-w-6xl border-b border-apriil-line/80 pb-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-[32px] font-medium tracking-[0.24em] text-apriil-dark md:text-[40px]">
            APRIIL
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-apriil-muted transition hover:text-apriil-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-apriil-dark/35 text-2xl text-apriil-dark transition hover:bg-white/60 lg:hidden"
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>
        {isOpen ? (
          <nav id="mobile-navigation" className="mt-6 grid gap-px overflow-hidden rounded-[22px] border border-apriil-line/80 bg-apriil-line/80 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="bg-[#fbfaf7] px-5 py-4 text-sm font-medium text-apriil-dark transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}