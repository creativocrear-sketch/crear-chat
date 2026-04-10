import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Smartphone,
  Users,
  Zap,
  BarChart3,
  Clock,
  MessageSquare,
  Shield,
  CheckCircle2,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function TransformacionDigital() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: Zap,
      title: "Automatización de procesos",
      description:
        "Transformamos tareas manuales en flujos automatizados que funcionan 24/7, reduciendo carga operativa y mejorando la velocidad de atención.",
    },
    {
      icon: Users,
      title: "Mejor experiencia del cliente",
      description:
        "Respuestas rápidas, atención personalizada y disponibilidad constante en los diferentes canales de comunicación.",
    },
    {
      icon: Clock,
      title: "Mayor eficiencia operativa",
      description:
        "Optimiza el trabajo de tu equipo reduciendo tiempos de respuesta y permitiendo gestionar más conversaciones con menos esfuerzo.",
    },
    {
      icon: BarChart3,
      title: "Control y visibilidad del servicio",
      description:
        "Centraliza la información, accede a reportes en tiempo real y analiza el desempeño de tu atención al cliente para tomar mejores decisiones.",
    },
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Centralización de canales",
      description:
        "Unificamos WhatsApp, email, redes sociales y otros canales en una sola plataforma para gestionar todas las conversaciones desde un mismo lugar.",
    },
    {
      icon: Zap,
      title: "Automatización inteligente",
      description:
        "Implementamos flujos automatizados que responden consultas frecuentes, capturan información y derivan los casos complejos al equipo adecuado.",
    },
    {
      icon: Clock,
      title: "Atención continua 24/7",
      description:
        "Sistema disponible en todo momento que responde de forma inmediata a los clientes, incluso fuera del horario laboral.",
    },
    {
      icon: Shield,
      title: "Seguridad y cumplimiento",
      description:
        "Protección de datos, gestión segura de la información y cumplimiento de estándares y normativas aplicables.",
    },
    {
      icon: Users,
      title: "Gestión de equipo",
      description:
        "Herramientas que permiten asignar conversaciones, organizar tareas y mejorar la colaboración del equipo de atención.",
    },
    {
      icon: BarChart3,
      title: "Análisis y reportes",
      description:
        "Accede a métricas clave, reportes en tiempo real y paneles de control para medir desempeño y mejorar la toma de decisiones.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Diagnóstico inicial",
      description:
        "Analizamos tus canales de atención actuales, el flujo de conversaciones y detectamos oportunidades para mejorar tiempos de respuesta y organización.",
    },
    {
      number: "02",
      title: "Diseño de la solución",
      description:
        "Diseñamos una estrategia de automatización adaptada a tu operación, definiendo flujos de atención, integraciones y procesos optimizados.",
    },
    {
      number: "03",
      title: "Implementación",
      description:
        "Configuramos la plataforma, integramos tus canales de comunicación y activamos los flujos automatizados de atención.",
    },
    {
      number: "04",
      title: "Capacitación y optimización",
      description:
        "Capacitamos a tu equipo en el uso del sistema y realizamos ajustes continuos para mejorar el desempeño y los resultados.",
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
              Automatización de{" "}
              <span className="text-[#1B4F72]">canales de atención al cliente</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Transformamos tus canales de atención en sistemas automatizados que responden a los clientes de forma rápida, organizada y eficiente, mejorando la experiencia del usuario y reduciendo la carga operativa de tu equipo.
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
                ¿Por qué automatizar tu atención al cliente?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Convertimos procesos manuales en sistemas digitales organizados que permiten atender más clientes, responder más rápido y mantener un control completo de las conversaciones. Centralizamos los canales de comunicación, mejoramos la experiencia del usuario y optimizamos la operación de tu equipo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Atención moderna y ágil</h3>
                    <p className="text-gray-600">Responde a tus clientes de forma rápida y organizada con sistemas diseñados para las exigencias del entorno digital actual.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Escalabilidad real</h3>
                    <p className="text-gray-600">Atiende más conversaciones y clientes sin necesidad de aumentar proporcionalmente tu equipo de trabajo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Resultados medibles</h3>
                    <p className="text-gray-600">Reduce costos operativos, mejora la experiencia del cliente y mide el impacto real de la automatización en tu negocio.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">-60%</div>
                <p className="text-gray-600 text-lg">Reducción de tiempo de respuesta</p>
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
              Beneficios de la automatización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimiza tu atención al cliente con sistemas que trabajan de forma continua, organizada y eficiente.
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
              Soluciones integrales para modernizar y optimizar tu atención al cliente.
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
            Nuestro Proceso de Automatización
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
            ¿Listo para transformar tu atención al cliente?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo de especialistas para una consulta gratuita y descubre cómo podemos modernizar tus canales de atención.
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
