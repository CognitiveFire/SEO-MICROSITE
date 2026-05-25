import "./globals.css";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/site-header";
import { GlobalPageChrome } from "../components/global-page-chrome";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body className="min-h-screen bg-apriil-sand text-apriil-dark antialiased">
        <SiteHeader />
        <GlobalPageChrome>{children}</GlobalPageChrome>
      </body>
    </html>
  );
}
