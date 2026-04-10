import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Zap, Users, BarChart3, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Página de Servicio: Consultoría especializada en WhatsApp Business API
 * Diseño: Minimalismo corporativo con azul petróleo, espaciado generoso
 * Tipografía: Poppins Bold para títulos, Inter Regular para cuerpo
 */

export default function ConsultoriaWhatsApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const beneficios = [
    {
      icon: Zap,
      titulo: "Automatización Inteligente",
      descripcion: "Flujos conversacionales optimizados que responden automáticamente a consultas frecuentes, reduciendo carga operativa."
    },
    {
      icon: Users,
      titulo: "Experiencia del Cliente",
      descripcion: "Comunicación personalizada y respuestas instantáneas que mejoran satisfacción y fidelización de clientes."
    },
    {
      icon: BarChart3,
      titulo: "Resultados Medibles",
      descripcion: "Análisis detallado de conversaciones, métricas de engagement y ROI de tus estrategias de comunicación."
    },
    {
      icon: Shield,
      titulo: "Integración Segura",
      descripcion: "Conexión segura con CRM, bases de datos externas y sistemas empresariales existentes sin comprometer datos."
    }
  ];

  const servicios = [
    "Diseño de estrategia para atención y ventas por WhatsApp",
    "Implementación de WhatsApp Business API",
    "Creación de chatbots con IA",
    "Integración con CRM y bases de datos",
    "Automatización de atención al cliente",
    "Automatización de marketing por WhatsApp",
    "Flujos para ventas y seguimiento de pedidos",
    "Capacitación para tu equipo"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#1B4F72] flex items-center justify-center">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <span className="font-bold text-gray-900">crear.chat</span>
          </div>
          <Button 
            className="bg-[#1B4F72] hover:bg-[#0F2F45] text-white rounded-lg"
            onClick={() => window.location.href = '/'}
          >
            Volver al Inicio
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-[#1B4F72] font-semibold text-sm">Servicio Especializado</span>
            </div>
            
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 leading-tight">
              Consultoría especializada en <span className="text-[#1B4F72]">WhatsApp Business API</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Ayudamos a empresas a organizar su atención por WhatsApp, automatizar respuestas y centralizar conversaciones en un solo sistema utilizando WhatsApp Business API e inteligencia artificial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/+573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B4F72] hover:bg-[#0F2F45] text-white rounded-lg px-8 py-6 text-lg"
              >
                Escribenos <ArrowRight className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Descripción General */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-bold text-4xl text-gray-900">¿Por qué elegir nuestra consultoría?</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Mejoramos la atención al cliente, el marketing digital y la gestión comercial mediante implementación estratégica. Somos especialistas en implementación, optimización y escalabilidad de WhatsApp Business API orientada a resultados.
              </p>

              <ul className="space-y-4">
                {[
                  "Implementamos WhatsApp API sin que tengas que cambiar tu operación actual",
                  "Automatizamos hasta el 70% de las preguntas repetitivas",
                  "Centralizamos todos los chats en un solo panel para tu equipo",
                  "Diseñamos flujos para ventas, soporte y seguimiento"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#1B4F72] mb-2">+500</div>
                <p className="text-gray-600">Empresas automatizadas con éxito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">Beneficios de Nuestra Consultoría</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformamos tu comunicación empresarial con soluciones automatizadas que generan impacto real
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, idx) => {
              const Icon = beneficio.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#1B4F72]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{beneficio.titulo}</h3>
                      <p className="text-gray-600 leading-relaxed">{beneficio.descripcion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">Servicios Incluidos</h2>
          <p className="text-xl text-gray-600 mb-12">
            Nuestro paquete de consultoría incluye todo lo necesario para automatizar tu comunicación empresarial
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {servicios.map((servicio, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#1B4F72] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#1B4F72] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700 text-lg">{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container max-w-4xl">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-12 text-center">Nuestro Proceso</h2>

          <div className="space-y-8">
            {[
              {
                numero: "01",
                titulo: "Diagnóstico",
                descripcion: "Analizamos tu situación actual, canales de comunicación y oportunidades de automatización."
              },
              {
                numero: "02",
                titulo: "Estrategia",
                descripcion: "Diseñamos una estrategia personalizada de comunicación automatizada alineada con tus objetivos."
              },
              {
                numero: "03",
                titulo: "Implementación",
                descripcion: "Configuramos WhatsApp Business API, integraciones y flujos conversacionales según la estrategia."
              },
              {
                numero: "04",
                titulo: "Optimización",
                descripcion: "Monitoreamos resultados, ajustamos flujos y escalamos la solución para máximo impacto."
              }
            ].map((paso, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{paso.numero}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">{paso.titulo}</h3>
                  <p className="text-lg text-gray-600">{paso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            ¿Listo para transformar tu comunicación?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo de especialistas para una consulta gratuita y descubre cómo podemos ayudarte a automatizar tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1B4F72] hover:bg-[#0F2F45] text-white rounded-lg px-8 py-6 text-lg"
            >
              Escribenos <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
