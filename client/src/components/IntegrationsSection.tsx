import { useState } from "react";
import { MessageCircle, Instagram, Sheet, Zap, Mail, Phone, Database, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean integrations carousel showcasing platform connections
 * - Icons from lucide-react matching services section style
 * - Professional layout with consistent spacing
 * - Carousel layout for better visual impact
 */

export default function IntegrationsSection() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const integrations = [
    {
      title: t('home.integrations.whatsapp'),
      description: t('home.integrations.whatsappDesc'),
      icon: MessageCircle,
    },
    {
      title: t('home.integrations.instagram'),
      description: t('home.integrations.instagramDesc'),
      icon: Instagram,
    },
    {
      title: t('home.integrations.sheets'),
      description: t('home.integrations.sheetsDesc'),
      icon: Sheet,
    },
    {
      title: t('home.integrations.crm'),
      description: t('home.integrations.crmDesc'),
      icon: Database,
    },
    {
      title: t('home.integrations.zapier'),
      description: t('home.integrations.zapierDesc'),
      icon: Zap,
    },
    {
      title: t('home.integrations.sms'),
      description: t('home.integrations.smsDesc'),
      icon: Phone,
    },
    {
      title: t('home.integrations.email'),
      description: t('home.integrations.emailDesc'),
      icon: Mail,
    },
  ];

  const itemsPerView = 3;
  const totalItems = integrations.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
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
              {language === 'es' ? 'Integraciones' : 'Integrations'}
            </span>
          </div>

          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            {language === 'es' ? 'Conecta con tus herramientas favoritas' : 'Connect with your favorite tools'}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'En crear.chat integramos tu sistema de comunicación con las plataformas que ya utiliza tu empresa, para automatizar procesos, centralizar conversaciones y mejorar la gestión de clientes.'
              : 'At crear.chat we integrate your communication system with the platforms your company already uses, to automate processes, centralize conversations and improve customer management.'
            }
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
