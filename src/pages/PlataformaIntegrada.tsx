import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MessageSquare,
  Users,
  BarChart3,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function PlataformaIntegrada() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: MessageSquare,
      title: "Centralización de canales",
      description:
        "Administra WhatsApp e Instagram desde un solo sistema para gestionar todas las conversaciones sin perder mensajes ni duplicar esfuerzos.",
    },
    {
      icon: Zap,
      title: "Respuestas automatizadas",
      description:
        "Configura respuestas automáticas para consultas frecuentes y mejora los tiempos de atención sin aumentar la carga operativa.",
    },
    {
      icon: Users,
      title: "Colaboración en equipo",
      description:
        "Asigna conversaciones, comparte información de clientes y permite que tu equipo trabaje de forma organizada en una misma plataforma.",
    },
    {
      icon: Clock,
      title: "Control en tiempo real",
      description:
        "Supervisa todas las conversaciones desde paneles de control con métricas y notificaciones que te permiten tomar decisiones rápidamente.",
    },
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Unificación de canales",
      description:
        "Centraliza las conversaciones de WhatsApp e Instagram en una sola plataforma para gestionar todos los mensajes desde un único lugar.",
    },
    {
      icon: Zap,
      title: "Automatización de respuestas",
      description:
        "Configura flujos automáticos que responden consultas frecuentes y ayudan a mejorar los tiempos de atención.",
    },
    {
      icon: Users,
      title: "Gestión de equipo",
      description:
        "Asigna conversaciones, define roles y permite que tu equipo colabore de forma organizada en la atención de clientes.",
    },
    {
      icon: BarChart3,
      title: "Análisis y reportes",
      description:
        "Accede a métricas clave como tiempos de respuesta, volumen de conversaciones y desempeño del equipo.",
    },
    {
      icon: Shield,
      title: "Seguridad y cumplimiento",
      description:
        "Protege la información de tus clientes mediante protocolos de seguridad y cumplimiento de normas de privacidad.",
    },
    {
      icon: Clock,
      title: "Historial de conversaciones",
      description:
        "Consulta el historial completo de interacciones con cada cliente para ofrecer una atención más contextual y personalizada.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Evaluación inicial",
      description:
        "Analizamos cómo gestionas actualmente las conversaciones en WhatsApp e Instagram para identificar oportunidades de mejora y optimización.",
    },
    {
      number: "02",
      title: "Configuración de la plataforma",
      description:
        "Integramos tus canales de comunicación y configuramos la plataforma con respuestas automáticas y flujos de atención personalizados.",
    },
    {
      number: "03",
      title: "Capacitación del equipo",
      description:
        "Entrenamos a tu equipo en el uso de la plataforma y en las mejores prácticas para gestionar conversaciones de forma eficiente.",
    },
    {
      number: "04",
      title: "Optimización continua",
      description:
        "Monitoreamos el desempeño del sistema, analizamos métricas clave y realizamos ajustes para mejorar la eficiencia y la experiencia del cliente.",
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
              Plataforma integrada para administración de{" "}
              <span className="text-[#1B4F72]">chats en WhatsApp e Instagram</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Implementamos una plataforma que centraliza la gestión de conversaciones de WhatsApp e Instagram en un solo sistema, permitiendo organizar la atención al cliente, mejorar los tiempos de respuesta y facilitar el trabajo del equipo.
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
                ¿Por qué centralizar tu comunicación?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Centralizar tus canales de comunicación permite organizar todas las conversaciones en un solo lugar, facilitar el trabajo del equipo y mejorar el seguimiento de clientes. Esto se traduce en respuestas más rápidas, mejor experiencia para el usuario y una gestión comercial más eficiente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Gestión unificada</h3>
                    <p className="text-gray-600">Administra todas las conversaciones de WhatsApp e Instagram desde una sola plataforma, evitando desorden y pérdida de mensajes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Atención más rápida</h3>
                    <p className="text-gray-600">Responde consultas en menos tiempo y gestiona múltiples conversaciones de forma organizada desde un mismo sistema.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mejor organización</h3>
                    <p className="text-gray-600">Mantén el control de contactos, historial de conversaciones y seguimiento de clientes en un solo lugar.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">-70%</div>
                <p className="text-gray-600 text-lg">Reducción en tiempo de gestión</p>
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
              Beneficios de la plataforma
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimiza la gestión de tus conversaciones con una plataforma que centraliza canales, organiza la atención y mejora la eficiencia de tu equipo.
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
              Características de la plataforma
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herramientas diseñadas para organizar, automatizar y optimizar la comunicación con tus clientes.
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
            Nuestro Proceso de Implementación
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
            ¿Listo para centralizar tu comunicación?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo para implementar la plataforma integrada y optimizar tu gestión de clientes.
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
