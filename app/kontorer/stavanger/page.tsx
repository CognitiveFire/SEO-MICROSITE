import type { Metadata } from "next";
import { OfficePageTemplate } from "@/components/offices/office-page-template";
import { officesData } from "@/components/offices/data";

export const metadata: Metadata = {
  title: "Stavanger | Kontorer | Apriil",
  description:
    "Performance marketing Stavanger, SEO, analyse og distribusjon fra Apriil Stavanger for energi, industri og vekstselskaper.",
};

export default function StavangerOfficePage() {
  return <OfficePageTemplate office={officesData.stavanger} />;
}
