import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  Zap,
  BarChart3,
  Target,
  Clock,
  Users,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function AutomatizacionVentas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de conversiones",
      description:
        "Flujos automatizados que acompañan a los clientes durante el proceso de compra, facilitando decisiones más rápidas y aumentando las probabilidades de venta.",
    },
    {
      icon: Clock,
      title: "Reducción de tiempos de venta",
      description:
        "Automatizamos tareas repetitivas y el seguimiento de clientes para acelerar el ciclo comercial y aprovechar mejor cada oportunidad.",
    },
    {
      icon: BarChart3,
      title: "Datos y análisis en tiempo real",
      description:
        "Accede a información clara sobre el comportamiento de tus clientes y el rendimiento de tu proceso comercial para tomar decisiones más estratégicas.",
    },
    {
      icon: Target,
      title: "Comunicación más efectiva",
      description:
        "Segmentamos y personalizamos la comunicación con cada cliente para ofrecer mensajes relevantes en el momento adecuado.",
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Flujos de ventas automatizados",
      description:
        "Diseñamos procesos comerciales que se ejecutan automáticamente desde el primer contacto con el cliente hasta el cierre de la venta.",
    },
    {
      icon: Users,
      title: "Seguimiento inteligente de clientes",
      description:
        "Automatizamos el seguimiento de leads para identificar oportunidades de conversión y mantener contacto oportuno durante todo el proceso comercial.",
    },
    {
      icon: BarChart3,
      title: "Análisis de datos comerciales",
      description:
        "Accede a reportes detallados y paneles de control con métricas clave para evaluar el desempeño de tus ventas.",
    },
    {
      icon: Target,
      title: "Segmentación y personalización",
      description:
        "Clasificamos a tus clientes según comportamiento e intereses para enviar mensajes y ofertas más relevantes.",
    },
    {
      icon: Lightbulb,
      title: "Optimización de conversión",
      description:
        "Analizamos y ajustamos continuamente cada etapa del proceso comercial para mejorar la tasa de conversión.",
    },
    {
      icon: CheckCircle2,
      title: "Integración con CRM",
      description:
        "Integramos el sistema con tu CRM para centralizar la información de clientes, conversaciones y oportunidades de venta.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Análisis del proceso de ventas",
      description:
        "Evaluamos tu embudo de ventas actual, identificamos cuellos de botella y detectamos oportunidades para mejorar la conversión y el seguimiento de clientes.",
    },
    {
      number: "02",
      title: "Diseño de la estrategia",
      description:
        "Definimos un plan de automatización adaptado a tu modelo comercial, estableciendo flujos de seguimiento, segmentación de clientes y puntos clave del proceso de ventas.",
    },
    {
      number: "03",
      title: "Implementación de flujos automatizados",
      description:
        "Configuramos los procesos automatizados, integramos las herramientas necesarias y conectamos el sistema con tu CRM y plataformas de análisis.",
    },
    {
      number: "04",
      title: "Monitoreo y optimización",
      description:
        "Analizamos métricas de desempeño, realizamos ajustes estratégicos y optimizamos continuamente el proceso para aumentar conversiones y mejorar resultados.",
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
              Automatización de ventas y{" "}
              <span className="text-[#1B4F72]">optimización de conversiones</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Implementamos soluciones que automatizan y optimizan tu proceso comercial mediante seguimiento inteligente de clientes, flujos automatizados y análisis de datos, permitiendo convertir más oportunidades en ventas y mejorar el rendimiento de tu equipo comercial.
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
                ¿Por qué automatizar tus ventas?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Automatizamos procesos comerciales para reducir tareas manuales, acelerar el seguimiento de clientes y facilitar decisiones de compra más rápidas. Esto permite mejorar la eficiencia del equipo, aumentar las conversiones y tener mayor control sobre el rendimiento de las ventas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ventas más rápidas</h3>
                    <p className="text-gray-600">Reduce tiempos de respuesta y acelera el proceso comercial con seguimiento automático y respuestas oportunas a los clientes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Conversiones medibles</h3>
                    <p className="text-gray-600">Accede a datos y métricas claras para analizar cada etapa del embudo de ventas y optimizar lo que realmente genera resultados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Crecimiento escalable</h3>
                    <p className="text-gray-600">Implementa procesos de ventas que pueden crecer con tu negocio sin aumentar significativamente la carga operativa.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">+35%</div>
                <p className="text-gray-600 text-lg">Aumento en conversiones promedio</p>
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
              Beneficios de la Automatización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimiza tu proceso de ventas con sistemas que organizan el seguimiento de clientes y mejoran la conversión de oportunidades en ventas.
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
              Soluciones diseñadas para automatizar y optimizar tu proceso de ventas.
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
            ¿Listo para automatizar tus ventas?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo de especialistas para una consulta gratuita y descubre cómo podemos optimizar tu proceso comercial.
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
