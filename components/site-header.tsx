"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Tjenester" },
  { label: "Arbeider" },
  { label: "Om Apriil" },
  { label: "Kontakt oss" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 pb-4 pt-6 md:px-10 md:pt-8 xl:px-16">
      <div className="w-full">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-[34px] font-medium tracking-[0.18em] text-apriil-dark md:text-[38px]"
          >
            APRIIL
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(event) => event.preventDefault()}
                className="text-[17px] font-medium tracking-[-0.01em] text-apriil-dark transition hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <label className="flex h-12 w-[220px] items-center gap-3 rounded-full border border-apriil-dark/55 px-5 text-apriil-muted">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M20 20L16.7 16.7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[17px]">Søk</span>
            </label>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-apriil-dark/30 text-xl text-apriil-dark lg:hidden"
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            className="mt-4 grid gap-px overflow-hidden rounded-[14px] border border-apriil-line/80 bg-apriil-line/80 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsOpen(false);
                }}
                className="bg-[#f8f7f4] px-5 py-3 text-base font-medium text-apriil-dark"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
