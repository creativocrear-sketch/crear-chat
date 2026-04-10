import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PlatformsSection from "@/components/PlatformsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactFooter from "@/components/ContactFooter";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean, professional landing page for crear.chat
 * - Sections flow naturally with generous whitespace
 * - Consistent use of petrol blue accent color
 * - Clear hierarchy and CTAs throughout
 */

export default function Home() {
  useEffect(() => {
    // Scroll to hash if present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PlatformsSection />
        <IntegrationsSection />
        <ContactFooter />
      </main>
      <Footer />
    </div>
  );
}
