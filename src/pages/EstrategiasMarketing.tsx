import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  MessageSquare,
  Workflow,
  CheckCircle2,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function EstrategiasMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: TrendingUp,
      title: "Crecimiento Medible",
      description:
        "Análisis detallado de métricas y KPIs que demuestran el impacto real de cada estrategia implementada.",
    },
    {
      icon: Users,
      title: "Segmentación Inteligente",
      description:
        "Identificamos y clasificamos audiencias por comportamiento para mensajes personalizados y relevantes.",
    },
    {
      icon: Zap,
      title: "Automatización Eficiente",
      description:
        "Flujos automatizados que reducen tiempos operativos y liberan recursos para tareas estratégicas.",
    },
    {
      icon: MessageSquare,
      title: "Comunicación Multicanal",
      description:
        "Estrategias coordinadas en WhatsApp, email, redes sociales y otros canales para máximo alcance.",
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Análisis de Comportamiento",
      description:
        "Estudiamos patrones de compra y interacción para diseñar estrategias altamente efectivas.",
    },
    {
      icon: Workflow,
      title: "Diseño de Flujos Automatizados",
      description:
        "Creamos secuencias inteligentes que guían a clientes desde captación hasta fidelización.",
    },
    {
      icon: BarChart3,
      title: "Optimización de Conversión",
      description:
        "Mejoramos cada punto de contacto para aumentar tasas de conversión y valor de cliente.",
    },
    {
      icon: MessageSquare,
      title: "Campañas Inteligentes",
      description:
        "Implementamos campañas automatizadas con mensajes personalizados basados en datos.",
    },
    {
      icon: Users,
      title: "Segmentación de Audiencias",
      description:
        "Dividimos tu base de datos en grupos específicos para comunicación más efectiva.",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad Sostenible",
      description:
        "Diseñamos sistemas que crecen con tu negocio sin aumentar carga operativa.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Análisis Estratégico",
      description:
        "Evaluamos tu situación actual, canales de marketing, objetivos de negocio y oportunidades de automatización para identificar mejoras de alto impacto.",
    },
    {
      number: "02",
      title: "Segmentación de Audiencia",
      description:
        "Analizamos tu base de datos y clasificamos tus clientes según comportamiento, intereses e historial de interacción para una comunicación más efectiva.",
    },
    {
      number: "03",
      title: "Diseño de Estrategia",
      description:
        "Desarrollamos una estrategia integral de automatización y marketing digital alineada con tus objetivos comerciales y el recorrido del cliente.",
    },
    {
      number: "04",
      title: "Implementación",
      description:
        "Configuramos flujos automatizados, campañas inteligentes e integraciones con las herramientas y sistemas que utiliza tu empresa.",
    },
    {
      number: "05",
      title: "Optimización Continua",
      description:
        "Monitoreamos resultados, analizamos métricas clave y ajustamos la estrategia para mejorar conversiones y escalar lo que genera mejores resultados.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-[#1B4F72] text-sm font-semibold mb-6 animate-fade-in-up">
              Servicio Especializado
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 animate-fade-in-up leading-tight">
              Estrategias de automatización y{" "}
              <span className="text-[#1B4F72]">marketing digital</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Diseñamos estrategias de automatización que permiten atraer clientes, convertir más oportunidades de venta y fidelizar usuarios utilizando datos, segmentación y comunicación automatizada.
            </p>
            <div className="flex gap-4 animate-fade-in-up">
              <a
                href="https://wa.me/+573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1B4F72] hover:bg-[#0f2f47] text-white px-8 h-12 rounded-lg"
              >
                Escribenos
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                ¿Por qué elegir nuestras estrategias?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Implementamos campañas inteligentes y comunicación multicanal que reducen tiempos operativos y aumentan la eficiencia comercial. Integramos tecnología, datos y estrategia para lograr acciones de marketing medibles, escalables y sostenibles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Diseñamos sistemas que captan clientes automáticamente</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Automatizamos seguimiento comercial para no perder oportunidades</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Segmentamos audiencias para mensajes personalizados</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Integramos WhatsApp, email y CRM en un solo flujo</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">+300%</div>
                <p className="text-gray-600 text-lg">Aumento promedio en eficiencia de marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Beneficios de Nuestras Estrategias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformamos tu marketing con soluciones automatizadas que generan resultados reales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-8 border border-gray-200 hover-elevate transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#1B4F72]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Servicios Incluidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro paquete integral de estrategias de marketing y automatización
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 hover:border-[#1B4F72] hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1B4F72]" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-16 text-center">
            Nuestro Proceso
          </h2>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#1B4F72] text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            ¿Listo para transformar tu marketing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo de especialistas para una consulta gratuita y descubre cómo podemos ayudarte a automatizar y escalar tu estrategia de marketing.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://wa.me/+573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1B4F72] hover:bg-[#0f2f47] text-white px-8 h-12 rounded-lg"
            >
              Escribenos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
