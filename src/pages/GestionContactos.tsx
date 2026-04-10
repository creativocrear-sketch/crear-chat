import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Database,
  Users,
  BarChart3,
  Filter,
  Shield,
  Zap,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean layout with strategic sections
 * - Teal/blue color scheme consistent with brand
 * - Generous whitespace and clear hierarchy
 * - Smooth animations and hover effects
 */

export default function GestionContactos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: Database,
      title: "Organización de datos",
      description:
        "Estructura tu base de contactos de forma clara y accesible para facilitar su uso en marketing, ventas y atención al cliente.",
    },
    {
      icon: Filter,
      title: "Segmentación efectiva",
      description:
        "Clasifica tus contactos según comportamiento, intereses o historial de interacción para crear campañas más relevantes.",
    },
    {
      icon: TrendingUp,
      title: "Mejora en la calidad de la información",
      description:
        "Eliminamos registros duplicados, depuramos datos incorrectos y actualizamos la información para mantener una base confiable.",
    },
    {
      icon: Zap,
      title: "Mayor aprovechamiento comercial",
      description:
        "Convierte tu base de datos en un activo estratégico que facilita el seguimiento de clientes y mejora las oportunidades de conversión.",
    },
  ];

  const services = [
    {
      icon: Database,
      title: "Organización de la base de datos",
      description:
        "Estructuramos tus contactos en categorías claras y accesibles para facilitar su uso en marketing, ventas y atención al cliente.",
    },
    {
      icon: Filter,
      title: "Segmentación estratégica",
      description:
        "Clasificamos tus contactos según comportamiento, intereses y perfil de cliente para crear campañas más relevantes.",
    },
    {
      icon: Shield,
      title: "Depuración y limpieza de datos",
      description:
        "Eliminamos registros duplicados, datos obsoletos y validamos la información para mantener una base de datos confiable.",
    },
    {
      icon: BarChart3,
      title: "Análisis y reportes",
      description:
        "Accede a métricas sobre la calidad de los datos, segmentación de clientes y oportunidades comerciales.",
    },
    {
      icon: Users,
      title: "Actualización continua",
      description:
        "Implementamos procesos que permiten mantener tu base de datos actualizada y organizada a lo largo del tiempo.",
    },
    {
      icon: TrendingUp,
      title: "Optimización para campañas y ventas",
      description:
        "Utilizamos la segmentación de contactos para mejorar la efectividad de campañas y el seguimiento comercial.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Auditoría inicial",
      description:
        "Evaluamos el estado actual de tu base de datos para identificar inconsistencias, duplicidades y oportunidades de mejora en la organización de los contactos.",
    },
    {
      number: "02",
      title: "Depuración y limpieza de datos",
      description:
        "Eliminamos registros duplicados, corregimos información incorrecta y depuramos datos obsoletos para garantizar una base de datos confiable.",
    },
    {
      number: "03",
      title: "Segmentación estratégica",
      description:
        "Clasificamos los contactos según comportamiento, intereses y perfil de cliente para facilitar campañas y acciones comerciales más efectivas.",
    },
    {
      number: "04",
      title: "Optimización continua",
      description:
        "Implementamos procesos de actualización y mantenimiento que permiten mantener la base de datos organizada y lista para futuras estrategias de marketing y ventas.",
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
              Gestión inteligente de <span className="text-[#1B4F72]">bases de datos de contactos</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up max-w-2xl">
              Organizamos, limpiamos y actualizamos tus bases de datos de clientes para mantener la información ordenada, confiable y lista para ser utilizada en estrategias de marketing, ventas y atención al cliente.
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
                ¿Por qué optimizar tu base de datos de contactos?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Una base de datos organizada y actualizada permite conocer mejor a tus clientes, segmentar de forma más precisa y mejorar la efectividad de tus campañas y acciones comerciales. Eliminamos registros duplicados, depuramos la información y estructuramos los datos para que puedas tomar decisiones basadas en información confiable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Datos más precisos</h3>
                    <p className="text-gray-600">Mantén la información de tus clientes actualizada, organizada y lista para ser utilizada en marketing, ventas y atención.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Segmentación efectiva</h3>
                    <p className="text-gray-600">Clasifica tus contactos por comportamiento, intereses o historial para enviar mensajes más relevantes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mayor retorno de inversión</h3>
                    <p className="text-gray-600">Mejora el rendimiento de tus campañas y aumenta conversiones al dirigirte al público correcto.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">+60%</div>
                <p className="text-gray-600 text-lg">Mejora en efectividad de campañas</p>
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
              Beneficios de optimizar tu base de datos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organiza y aprovecha mejor la información de tus contactos para mejorar campañas, ventas y seguimiento de clientes.
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
              Servicios de la gestión de contactos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones diseñadas para organizar, depurar y aprovechar al máximo tu base de datos de clientes.
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
            Nuestro proceso de optimización
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
            ¿Listo para optimizar tu base de datos?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo para implementar una gestión inteligente de contactos y aumentar la efectividad de tus campañas.
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
