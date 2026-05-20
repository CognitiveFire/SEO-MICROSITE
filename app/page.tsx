import { HeroSection } from "../components/hero-section";
import { ProblemSection } from "../components/problem-section";
import { ServiceCards } from "../components/service-cards";
import { OperationalFlow } from "../components/operational-flow";
import { PricingSection } from "../components/pricing-section";
import { ResultsSection } from "../components/results-section";
import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServiceCards />
      <OperationalFlow />
      <PricingSection />
      <ResultsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}