import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Hero background with subtle gradient and geometric elements
 * - Large, bold typography hierarchy
 * - Clear CTA with arrow icon
 * - Generous whitespace and breathing room
 */
export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-16 pb-24 md:pt-20 md:pb-32 md:min-h-screen md:flex md:items-center">
      {/* Content */}
      <div className="container relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="max-w-2xl md:flex-1">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 md:mb-6 leading-tight animate-fade-in-up drop-shadow-lg md:drop-shadow-none">
            {t("home.title")}
          </h1>

          <p
            className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl animate-fade-in-up drop-shadow-md md:drop-shadow-none"
            style={{ animationDelay: "0.1s" }}
          >
            {language === "es"
              ? "Somos una agencia de automatización de WhatsApp Business API para la gestión de ventas, servicios, soporte, pedidos, citas médicas, turnos de trabajo y consultas de saldos. Integraciones con HubSpot, Google Sheets, Zapier, etc. Consultoría especializada para escalar tu comunicación con clientes de forma inteligente."
              : "We are a WhatsApp Business API automation agency for sales management, services, support, orders, medical appointments, work shifts and balance inquiries. Integrations with HubSpot, Google Sheets, Zapier, etc. Specialized consulting to scale your customer communication intelligently."}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="https://wa.me/+573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg rounded-lg group w-full sm:w-auto"
            >
              {t("home.cta")}
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <img
          alt="WhatsApp Business API Automation"
          className="w-full md:w-auto h-auto md:h-[520px]"
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/dSwJK3W4FW3am7RcRumTG2/Diseñosintítulo(16)_e8067e9f.png"
        />
      </div>
    </section>
  );
}
