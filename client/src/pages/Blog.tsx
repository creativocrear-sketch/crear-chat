import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const blogArticles = [
  {
    category: "Conceptos Básicos",
    title: "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?",
    excerpt: "Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.",
    date: "21 de Marzo de 2026",
    readTime: "5 min",
  },
  {
    category: "Casos de Uso",
    title: "¿Para que me sirve WhatsApp Business API para mi negocio?",
    excerpt: "Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.",
    date: "21 de Marzo de 2026",
    readTime: "8 min",
  },
  {
    category: "Implementación",
    title: "¿Cuáles son los primeros pasos para migrar WhatsApp Business API?",
    excerpt: "Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.",
    date: "21 de Marzo de 2026",
    readTime: "7 min",
  },
  {
    category: "Tendencias",
    title: "¿Qué beneficios tengo usando WhatsApp Business API + IA?",
    excerpt: "Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente.",
    date: "21 de Marzo de 2026",
    readTime: "6 min",
  },
  {
    category: "Integraciones",
    title: "¿Con que plataformas puedo integrar el WhatsApp Business API?",
    excerpt: "Descubre todas las plataformas y sistemas que puedes integrar con WhatsApp Business API.",
    date: "21 de Marzo de 2026",
    readTime: "6 min",
  },
  {
    category: "Conceptos Básicos",
    title: "¿Por que necesito una plataforma para administrar los chats de WhatsApp?",
    excerpt: "Entiende por qué una plataforma de gestión es esencial para WhatsApp Business API.",
    date: "21 de Marzo de 2026",
    readTime: "5 min",
  },
  {
    category: "Comparativas",
    title: "¿En que se diferencian las plataformas que administran los chat de WhatsApp?",
    excerpt: "Comparativa detallada de las principales plataformas de gestión de WhatsApp.",
    date: "21 de Marzo de 2026",
    readTime: "7 min",
  },
  {
    category: "Precios",
    title: "¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?",
    excerpt: "Entiende los diferentes modelos de precios de las plataformas de gestión de WhatsApp.",
    date: "21 de Marzo de 2026",
    readTime: "6 min",
  },
  {
    category: "Implementación",
    title: "¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?",
    excerpt: "Guía completa para elegir el mejor proveedor y plataforma de WhatsApp para tu negocio.",
    date: "21 de Marzo de 2026",
    readTime: "7 min",
  },
  {
    category: "Regulaciones",
    title: "¿Cuáles son las principales políticas de WhatsApp Business API?",
    excerpt: "Entiende las reglas y políticas que debes cumplir para usar WhatsApp Business API.",
    date: "21 de Marzo de 2026",
    readTime: "6 min",
  },
  {
    category: "Regulaciones",
    title: "¿Por que me pueden restringir el número de WhatsApp?",
    excerpt: "Entiende las razones por las que WhatsApp restringe o suspende números.",
    date: "21 de Marzo de 2026",
    readTime: "5 min",
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Blog de WhatsApp Business API
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Aprende todo sobre automatización, integraciones y mejores prácticas para transformar tu negocio con WhatsApp Business API
              </p>
              
              {/* Blog Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">11 artículos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">Actualizado regularmente</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">Redacción: Alex Murillo + Equipo de Soporte</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((article, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                  >
                    <div className="p-6 md:p-8">
                      {/* Category */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1B4F72] transition-colors">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium text-sm transition-colors group"
                      >
                        Leer artículo
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  ¿Listo para transformar tu negocio?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Implementa WhatsApp Business API y comienza a automatizar tu comunicación con clientes
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
                  Contáctame por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
