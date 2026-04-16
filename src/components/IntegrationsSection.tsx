import { useState } from "react";
import {
  MessageCircle,
  Instagram,
  Sheet,
  Zap,
  Mail,
  Phone,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean integrations carousel showcasing platform connections
 * - Icons from lucide-react matching services section style
 * - Professional layout with consistent spacing
 * - Carousel layout for better visual impact
 */

const integrations = [
  {
    title: "WhatsApp Business API",
    description:
      "Integramos tu empresa con WhatsApp Business API para automatizar mensajes, gestionar conversaciones y escalar la atención a clientes desde un solo sistema.",
    icon: MessageCircle,
  },
  {
    title: "Instagram",
    description:
      "Centraliza los mensajes directos de Instagram y gestiona las conversaciones desde una plataforma unificada.",
    icon: Instagram,
  },
  {
    title: "Google Sheets",
    description:
      "Sincroniza automáticamente la información de contactos, conversaciones o pedidos con Google Sheets para análisis y gestión de datos.",
    icon: Sheet,
  },
  {
    title: "CRM (HubSpot y otros)",
    description:
      "Integramos tu sistema con CRM como HubSpot para organizar contactos, registrar interacciones y mejorar el seguimiento comercial.",
    icon: Database,
  },
  {
    title: "Automatizaciones (Zapier)",
    description:
      "Conecta crear.chat con cientos de aplicaciones para automatizar procesos y flujos de trabajo entre diferentes plataformas.",
    icon: Zap,
  },
  {
    title: "SMS",
    description:
      "Envía mensajes SMS automatizados para notificaciones, recordatorios o comunicaciones importantes con tus clientes.",
    icon: Phone,
  },
  {
    title: "Correo electrónico",
    description:
      "Integra el correo electrónico para automatizar comunicaciones y mantener informados a tus clientes en cada etapa del proceso.",
    icon: Mail,
  },
];

export default function IntegrationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const totalItems = integrations.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleIntegrations = integrations.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section id="integraciones" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#1B4F72]">
              Integraciones
            </span>
          </div>

          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Conecta con tus herramientas favoritas
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En crear.chat integramos tu sistema de comunicación con las
            plataformas que ya utiliza tu empresa, para automatizar procesos,
            centralizar conversaciones y mejorar la gestión de clientes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Integrations Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleIntegrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div
                  key={currentIndex + index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-[#1B4F72]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-gray-900 mb-2 text-center">
                    {integration.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center line-clamp-4">
                    {integration.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1B4F72] text-white hover:bg-[#0F2F45] transition-colors duration-300"
              aria-label="Previous integrations"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1B4F72] text-white hover:bg-[#0F2F45] transition-colors duration-300"
              aria-label="Next integrations"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#1B4F72] w-8"
                    : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
