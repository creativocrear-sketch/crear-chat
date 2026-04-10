import { Card } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, Clock, Calendar, DollarSign, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Platforms Section - Nuestras plataformas con WhatsApp Business API
 * - Grid de 3 columnas para plataformas específicas
 * - Iconos grandes y centrados
 * - Diseño consistente con el resto del sitio
 */

export default function PlatformsSection() {
  const { t, language } = useLanguage();
  
  const platforms = [
    {
      title: t('home.platforms.sales'),
      description: t('home.platforms.salesDesc'),
      icon: TrendingUp,
    },
    {
      title: t('home.platforms.orders'),
      description: t('home.platforms.ordersDesc'),
      icon: ShoppingCart,
    },
    {
      title: t('home.platforms.shifts'),
      description: t('home.platforms.shiftsDesc'),
      icon: Clock,
    },
    {
      title: t('home.platforms.appointments'),
      description: t('home.platforms.appointmentsDesc'),
      icon: Calendar,
    },
    {
      title: t('home.platforms.balances'),
      description: t('home.platforms.balancesDesc'),
      icon: DollarSign,
    },
    {
      title: t('home.platforms.loyalty'),
      description: t('home.platforms.loyaltyDesc'),
      icon: Heart,
    }
  ];

  return (
    <section id="nuestras-plataformas" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {language === 'es' ? 'Nuestras plataformas con WhatsApp Business API' : 'Our platforms with WhatsApp Business API'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'es' ? 'Soluciones especializadas para casos de uso específicos' : 'Specialized solutions for specific use cases'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all duration-300 border border-gray-100 bg-white h-full cursor-pointer animate-fade-in-up"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#1B4F72]" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-base md:text-lg text-gray-900 text-center mb-4">
                    {platform.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center flex-grow text-sm md:text-base">
                    {platform.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
