import type { Metadata } from "next";
import { OfficePageTemplate } from "@/components/offices/office-page-template";
import { officesData } from "@/components/offices/data";

export const metadata: Metadata = {
  title: "Bergen | Kontorer | Apriil",
  description:
    "Strategisk markedsforing, SEO Bergen, analyse og distribusjon fra Apriil Bergen for virksomheter som trenger tydeligere kommersiell retning.",
};

export default function BergenOfficePage() {
  return <OfficePageTemplate office={officesData.bergen} />;
}
