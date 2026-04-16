import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function DashboardWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: Activity,
      title: "Monitoreo en tiempo real",
      description:
        "Visualiza datos actualizados constantemente para analizar el desempeño de tu negocio y tomar decisiones oportunas.",
    },
    {
      icon: TrendingUp,
      title: "Indicadores clave del negocio",
      description:
        "Organiza y visualiza KPIs relevantes para medir resultados en áreas como ventas, atención al cliente, marketing u operaciones.",
    },
    {
      icon: Clock,
      title: "Automatización de datos",
      description:
        "Integra información de diferentes sistemas para que los datos se actualicen automáticamente sin procesos manuales.",
    },
    {
      icon: AlertCircle,
      title: "Alertas inteligentes",
      description:
        "Recibe notificaciones automáticas cuando se detecten cambios importantes o situaciones que requieren atención inmediata.",
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Dashboards personalizados",
      description:
        "Diseñamos paneles adaptados a las necesidades de tu empresa y a los indicadores que deseas monitorear.",
    },
    {
      icon: LineChart,
      title: "Visualización clara de datos",
      description:
        "Gráficos y visualizaciones intuitivas que permiten comprender información compleja de forma rápida.",
    },
    {
      icon: PieChart,
      title: "Análisis comparativo",
      description:
        "Compara períodos, segmentos y variables para identificar tendencias, oportunidades y áreas de mejora.",
    },
    {
      icon: Activity,
      title: "Integración de sistemas",
      description:
        "Conectamos datos provenientes de diferentes plataformas y herramientas en un único panel centralizado.",
    },
    {
      icon: TrendingUp,
      title: "Reportes automáticos",
      description:
        "Genera y envía reportes periódicos de forma automática para mantener informados a los equipos y responsables.",
    },
    {
      icon: Clock,
      title: "Actualización en tiempo real",
      description:
        "Información sincronizada constantemente para visualizar el estado actual del negocio sin retrasos.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Análisis de requerimientos",
      description:
        "Identificamos las métricas clave de tu negocio, las fuentes de datos disponibles y los objetivos que debe cumplir el dashboard.",
    },
    {
      number: "02",
      title: "Diseño de la interfaz",
      description:
        "Creamos paneles visuales e intuitivos que priorizan la información más importante para facilitar el análisis y la toma de decisiones.",
    },
    {
      number: "03",
      title: "Integración de datos",
      description:
        "Conectamos tus sistemas y fuentes de información para centralizar los datos y configurar su actualización automática.",
    },
    {
      number: "04",
      title: "Capacitación y optimización",
      description:
        "Capacitamos a tu equipo en el uso del dashboard y realizamos ajustes continuos para mejorar su utilidad y desempeño.",
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
              Dashboard web centralizado para{" "}
              <span className="text-[#1B4F72]">monitoreo y control</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Desarrollamos dashboards web que integran y visualizan en tiempo
              real la información operativa, comercial y de gestión de tu
              empresa, permitiendo monitorear indicadores clave y tomar
              decisiones más rápidas y estratégicas.
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
                ¿Por qué usar un dashboard centralizado?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Un dashboard centralizado reúne la información de diferentes
                sistemas en un solo lugar, permitiendo visualizar datos clave en
                tiempo real. Esto facilita el seguimiento de operaciones, mejora
                la toma de decisiones y reduce el trabajo manual en la gestión
                de información.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Decisiones más rápidas
                    </h3>
                    <p className="text-gray-600">
                      Accede a información actualizada en tiempo real para
                      reaccionar rápidamente y tomar decisiones basadas en
                      datos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Visión integral del negocio
                    </h3>
                    <p className="text-gray-600">
                      Visualiza métricas e indicadores clave de diferentes áreas
                      de tu empresa desde un solo panel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Mayor eficiencia operativa
                    </h3>
                    <p className="text-gray-600">
                      Automatiza la actualización de datos y reduce tareas
                      manuales en la recopilación y análisis de información.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">
                  +75%
                </div>
                <p className="text-gray-600 text-lg">
                  Mejora en eficiencia operativa
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
              Beneficios del dashboard centralizado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimiza la gestión de tu empresa con información organizada y
              actualizada en tiempo real.
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
              Características del dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herramientas diseñadas para visualizar, analizar y controlar la
              información clave de tu negocio.
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
            ¿Listo para centralizar tu información?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo para implementar un dashboard que
            transforme tu gestión operativa.
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
