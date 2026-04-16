import { Card } from "@/components/ui/card";
import {
  Zap,
  Database,
  Settings,
  Lightbulb,
  TrendingUp,
  Smartphone,
  Target,
  MessageSquare,
  BarChart3,
  MessageCircle,
  Brain,
} from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - 3-column grid layout with clean cards
 * - Large centered icons at the top of each card
 * - Responsive icon sizes (mobile and desktop)
 * - Subtle shadows and rounded corners
 * - Icons from lucide-react for consistency
 * - Hover elevation effect for interactivity
 * - First service (Consultoría) links to internal page
 */

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const services = [
    {
      title: t("home.services.consulting"),
      description: t("home.services.consultingDesc"),
      icon: Lightbulb,
      link: "/consultoria-whatsapp",
    },
    {
      title: t("home.services.marketing"),
      description: t("home.services.marketingDesc"),
      icon: TrendingUp,
      link: "/estrategias-marketing",
    },
    {
      title: t("home.services.customerService"),
      description: t("home.services.customerServiceDesc"),
      icon: Smartphone,
      link: "/transformacion-digital",
    },
    {
      title: t("home.services.sales"),
      description: t("home.services.salesDesc"),
      icon: Target,
      link: "/automatizacion-ventas",
    },
    {
      title: t("home.services.platform"),
      description: t("home.services.platformDesc"),
      icon: MessageSquare,
      link: "/plataforma-integrada",
    },
    {
      title: t("home.services.database"),
      description: t("home.services.databaseDesc"),
      icon: Database,
      link: "/gestion-contactos",
    },
    {
      title:
        language === "es"
          ? "Dashboard web centralizado para monitoreo y control"
          : "Centralized web dashboard for monitoring and control",
      description:
        language === "es"
          ? "Implementamos dashboards web centralizados que permiten monitorear, controlar y gestionar procesos empresariales en tiempo real desde un solo panel de administración."
          : "We implement centralized web dashboards that allow monitoring, controlling and managing business processes in real time from a single administration panel.",
      icon: BarChart3,
      link: "/dashboard-web",
    },
    {
      title:
        language === "es"
          ? "Diseño y desarrollo de chatbots conversacionales"
          : "Design and development of conversational chatbots",
      description:
        language === "es"
          ? "Diseñamos y desarrollamos chatbots conversacionales que automatizan la atención al cliente, optimizan la comunicación y mejoran la interacción digital con los usuarios."
          : "We design and develop conversational chatbots that automate customer service, optimize communication and improve digital interaction with users.",
      icon: MessageCircle,
      link: "/chatbots-conversacionales",
    },
    {
      title:
        language === "es"
          ? "Diseño y desarrollo de conversaciones con IA"
          : "Design and development of AI conversations",
      description:
        language === "es"
          ? "Creamos experiencias conversacionales inteligentes, combinando automatización y entrenamiento de IA para lograr respuestas naturales, precisas y orientadas a resultados."
          : "We create intelligent conversational experiences, combining automation and AI training to achieve natural, precise and results-oriented responses.",
      icon: Brain,
      link: "/conversaciones-ia",
    },
  ];

  return (
    <section id="nuestros-servicios" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {language === "es" ? "Nuestros servicios" : "Our Services"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "es"
              ? "Somos una agencia de automatización de WhatsApp Business API para la gestión de ventas, servicios, soporte, pedidos, citas, turnos de trabajo y consultas de saldos. Integraciones con HubSpot, Google Sheets, Zapier, etc. Consultoría especializada para escalar tu comunicación con clientes de forma inteligente."
              : "We are a WhatsApp Business API automation agency for sales management, services, support, orders, appointments, work shifts and balance inquiries. Integrations with HubSpot, Google Sheets, Zapier, etc. Specialized consulting to scale your customer communication intelligently."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const CardContent = (
              <Card className="overflow-hidden hover-elevate transition-all duration-300 border border-gray-100 bg-white h-full cursor-pointer animate-fade-in-up">
                {/* Service Content */}
                <div className="p-8 flex flex-col h-full">
                  {/* Centered Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#1B4F72]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-center flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            );

            return service.link ? (
              <Link key={index} href={service.link}>
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
