import { Card } from "@/components/ui/card";
import { Zap, Database, Settings, Lightbulb, TrendingUp, Smartphone, Target, MessageSquare, BarChart3, MessageCircle, Brain } from "lucide-react";
import { Link } from "wouter";

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

const services = [
  {
    title: "Consultoría especializada",
    description: "Asesoramos a empresas en la implementación y optimización de WhatsApp Business API para automatizar la comunicación, mejorar la atención al cliente y potenciar la gestión comercial.",
    icon: Lightbulb,
    link: "/consultoria-whatsapp",
  },
  {
    title: "Estrategias de automatización y marketing digital",
    description: "Diseñamos estrategias de automatización y marketing digital basadas en datos para atraer clientes, optimizar procesos y aumentar la conversión mediante comunicación inteligente y campañas automatizadas.",
    icon: TrendingUp,
    link: "/estrategias-marketing",
  },
  {
    title: "Automatización de canales de atención al cliente",
    description: "Automatizamos los canales de atención al cliente mediante soluciones tecnológicas que optimizan la comunicación, mejoran la experiencia del usuario y aumentan la eficiencia operativa.",
    icon: Smartphone,
    link: "/transformacion-digital",
  },
  {
    title: "Automatización de ventas y optimización de conversiones",
    description: "Automatizamos procesos de ventas y optimizamos la conversión de clientes mediante tecnología, datos y estrategias digitales que mejoran la eficiencia comercial y aumentan los resultados.",
    icon: Target,
    link: "/automatizacion-ventas",
  },
  {
    title: "Plataforma integrada para administración de chats",
    description: "Centralizamos la gestión de conversaciones en WhatsApp e Instagram en una sola plataforma para optimizar la atención, automatizar respuestas y mejorar la comunicación con clientes.",
    icon: MessageSquare,
    link: "/plataforma-integrada",
  },
  {
    title: "Gestión inteligente de bases de datos de contactos",
    description: "Gestionamos y optimizamos bases de datos de contactos para garantizar información actualizada, segmentación precisa y mejor rendimiento en estrategias comerciales y de marketing digital.",
    icon: Database,
    link: "/gestion-contactos",
  },
  {
    title: "Dashboard web centralizado para monitoreo y control",
    description: "Implementamos dashboards web centralizados que permiten monitorear, controlar y gestionar procesos empresariales en tiempo real desde un solo panel de administración.",
    icon: BarChart3,
    link: "/dashboard-web",
  },
  {
    title: "Diseño y desarrollo de chatbots conversacionales",
    description: "Diseñamos y desarrollamos chatbots conversacionales que automatizan la atención al cliente, optimizan la comunicación y mejoran la interacción digital con los usuarios.",
    icon: MessageCircle,
    link: "/chatbots-conversacionales",
  },
  {
    title: "Diseño y desarrollo de conversaciones con IA",
    description: "Creamos experiencias conversacionales inteligentes, combinando automatización y entrenamiento de IA para lograr respuestas naturales, precisas y orientadas a resultados.",
    icon: Brain,
    link: "/conversaciones-ia",
  }
];

export default function ServicesSection() {
  return (
    <section id="nuestros-servicios" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos una agencia de automatización de WhatsApp Business API para la gestión de ventas, servicios, soporte, pedidos, citas, turnos de trabajo y consultas de saldos. Integraciones con HubSpot, Google Sheets, Zapier, etc. Consultoría especializada para escalar tu comunicación con clientes de forma inteligente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const CardContent = (
              <Card
                className="overflow-hidden hover-elevate transition-all duration-300 border border-gray-100 bg-white h-full cursor-pointer animate-fade-in-up"
              >
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
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
