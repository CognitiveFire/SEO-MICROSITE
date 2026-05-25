import type { Metadata } from "next";
import { OfficePageTemplate } from "@/components/offices/office-page-template";
import { officesData } from "@/components/offices/data";

export const metadata: Metadata = {
  title: "Oslo | Kontorer | Apriil",
  description:
    "Kommersiell rådgivning, SEO byra Oslo, performance marketing og analyse fra Apriil Oslo for nasjonale og internasjonale virksomheter.",
};

export default function OsloOfficePage() {
  return <OfficePageTemplate office={officesData.oslo} />;
}
