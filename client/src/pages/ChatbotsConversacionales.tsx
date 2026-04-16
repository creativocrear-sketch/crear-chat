import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Zap,
  Brain,
  Users,
  Clock,
  TrendingUp,
  CheckCircle2,
  Workflow,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function ChatbotsConversacionales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description:
        "Respuestas automáticas que se adaptan al contexto y necesidades del usuario.",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description:
        "Atención continua sin interrupciones, incluso fuera de horarios de oficina.",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Conversiones",
      description:
        "Guía a usuarios hacia la compra o contratación de servicios automáticamente.",
    },
    {
      icon: Users,
      title: "Mejor Experiencia del Cliente",
      description:
        "Interacciones personalizadas que responden rápidamente a consultas.",
    },
  ];

  const services = [
    {
      icon: Brain,
      title: "Chatbots Inteligentes",
      description:
        "Desarrollamos chatbots que entienden el contexto y responden de forma natural.",
    },
    {
      icon: Workflow,
      title: "Flujos Conversacionales",
      description:
        "Diseñamos flujos estructurados que guían al usuario hacia objetivos específicos.",
    },
    {
      icon: MessageCircle,
      title: "Integración Multicanal",
      description:
        "Chatbots disponibles en WhatsApp, sitio web, Facebook y otros canales.",
    },
    {
      icon: Users,
      title: "Recopilación de Datos",
      description:
        "Extrae información del cliente de forma natural durante la conversación.",
    },
    {
      icon: Zap,
      title: "Respuestas Automáticas",
      description:
        "Respuestas instantáneas a preguntas frecuentes sin intervención humana.",
    },
    {
      icon: TrendingUp,
      title: "Análisis y Reportes",
      description:
        "Métricas detalladas sobre interacciones, conversiones y satisfacción.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Análisis de Objetivos",
      description:
        "Identificamos qué procesos automatizar y qué resultados esperas del chatbot.",
    },
    {
      number: "02",
      title: "Diseño de Flujos",
      description:
        "Creamos flujos conversacionales que guían al usuario de forma natural.",
    },
    {
      number: "03",
      title: "Desarrollo e Integración",
      description:
        "Implementamos el chatbot y lo integramos con tus sistemas existentes.",
    },
    {
      number: "04",
      title: "Entrenamiento y Optimización",
      description:
        "Capacitamos a tu equipo y realizamos ajustes basados en métricas reales.",
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
              Diseño y desarrollo de{" "}
              <span className="text-[#1B4F72]">chatbots conversacionales</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Creamos chatbots conversacionales que automatizan la interacción
              con clientes, gestionan consultas y optimizan procesos de atención
              y ventas.
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
                ¿Por qué un chatbot conversacional?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Implementamos soluciones escalables que mejoran la experiencia
                del cliente, reducen tiempos de respuesta y aumentan la
                eficiencia operativa, transformando la comunicación digital en
                procesos automatizados y orientados a resultados.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Respuestas instantáneas
                    </h3>
                    <p className="text-gray-600">
                      Atención inmediata sin esperas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Automatización completa
                    </h3>
                    <p className="text-gray-600">
                      Procesos sin intervención manual
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Escalabilidad infinita
                    </h3>
                    <p className="text-gray-600">
                      Atiende miles de usuarios simultáneamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">
                  +80%
                </div>
                <p className="text-gray-600 text-lg">
                  Reducción de tiempo de respuesta
                </p>
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
              Beneficios del Chatbot Conversacional
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mejora integral de tu atención al cliente con automatización
              inteligente
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
              Características del Chatbot
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones completas para automatizar tu atención al cliente
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
            Nuestro Proceso de Desarrollo
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
            ¿Listo para automatizar tu atención al cliente?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo para desarrollar un chatbot que
            transforme tu comunicación digital.
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
