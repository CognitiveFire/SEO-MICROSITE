import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SiteHeader } from "../components/site-header";
import { GlobalPageChrome } from "../components/global-page-chrome";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body className={`${inter.className} min-h-screen bg-apriil-sand text-apriil-dark antialiased`}>
        <SiteHeader />
        <GlobalPageChrome>{children}</GlobalPageChrome>
      </body>
    </html>
  );
}
