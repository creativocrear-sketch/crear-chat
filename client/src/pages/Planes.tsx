import { useEffect } from "react";
import Header from "@/components/Header";
import PricingSection from "@/components/ClientsCarousel";
import Footer from "@/components/Footer";

export default function Planes() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
