"use client";

import type { ReactNode } from "react";
import { Footer } from "./footer";

export function GlobalPageChrome({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
