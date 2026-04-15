import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Función para generar rutas SEO amigables
const getSEOPath = (articleNumber: number): string => {
  const seoPaths: { [key: number]: string } = {
    1: '/blog/diferencia-whatsapp-business-api',
    2: '/blog/casos-uso-whatsapp-business-api',
    3: '/blog/primeros-pasos-migrar-whatsapp-api',
    4: '/blog/beneficios-whatsapp-business-api-ia',
    5: '/blog/plataformas-integracion-whatsapp-api',
    6: '/blog/por-que-necesito-plataforma-whatsapp',
    7: '/blog/diferencias-plataformas-whatsapp',
    8: '/blog/cobro-plataformas-whatsapp',
    9: '/blog/como-seleccionar-proveedor-whatsapp',
    10: '/blog/politicas-whatsapp-business-api',
    11: '/blog/por-que-restringen-whatsapp'
  };
  return seoPaths[articleNumber] || `/blog/articulo-${articleNumber}`;
};

const getBlogArticles = (language: string) => [
  {
    category: language === 'es' ? "Conceptos Básicos" : "Basic Concepts",
    title: language === 'es' ? "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?" : "What is the difference between WhatsApp Business and WhatsApp Business API?",
    excerpt: language === 'es' ? "Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio." : "Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "5 min" : "5 min",
  },
  {
    category: language === 'es' ? "Casos de Uso" : "Use Cases",
    title: language === 'es' ? "¿Para qué me sirve WhatsApp Business API para mi negocio?" : "What is WhatsApp Business API useful for in my business?",
    excerpt: language === 'es' ? "Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros." : "Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers, and collection offices.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "8 min" : "8 min",
  },
  {
    category: language === 'es' ? "Implementación" : "Implementation",
    title: language === 'es' ? "¿Cuáles son los primeros pasos para migrar WhatsApp Business API?" : "What are the first steps to migrate to WhatsApp Business API?",
    excerpt: language === 'es' ? "Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones." : "Step-by-step guide to migrate your business to WhatsApp Business API without complications.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "7 min" : "7 min",
  },
  {
    category: language === 'es' ? "Tendencias" : "Trends",
    title: language === 'es' ? "¿Qué beneficios tengo usando WhatsApp Business API + IA?" : "What benefits do I get using WhatsApp Business API + AI?",
    excerpt: language === 'es' ? "Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente." : "Discover how the combination of WhatsApp Business API and AI revolutionizes customer service.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "6 min" : "6 min",
  },
  {
    category: language === 'es' ? "Integraciones" : "Integrations",
    title: language === 'es' ? "¿Con qué plataformas puedo integrar el WhatsApp Business API?" : "What platforms can I integrate WhatsApp Business API with?",
    excerpt: language === 'es' ? "Descubre todas las plataformas y sistemas que puedes integrar con WhatsApp Business API." : "Discover all platforms and systems you can integrate with WhatsApp Business API.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "6 min" : "6 min",
  },
  {
    category: language === 'es' ? "Conceptos Básicos" : "Basic Concepts",
    title: language === 'es' ? "¿Por qué necesito una plataforma para administrar los chats de WhatsApp?" : "Why do I need a platform to manage WhatsApp chats?",
    excerpt: language === 'es' ? "Entiende por qué una plataforma de gestión es esencial para WhatsApp Business API." : "Understand why a management platform is essential for WhatsApp Business API.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "5 min" : "5 min",
  },
  {
    category: language === 'es' ? "Comparativas" : "Comparisons",
    title: language === 'es' ? "¿En qué se diferencian las plataformas que administran los chat de WhatsApp?" : "How do platforms that manage WhatsApp chats differ?",
    excerpt: language === 'es' ? "Comparativa detallada de las principales plataformas de gestión de WhatsApp." : "Detailed comparison of the main WhatsApp management platforms.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "7 min" : "7 min",
  },
  {
    category: language === 'es' ? "Precios" : "Pricing",
    title: language === 'es' ? "¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?" : "How do WhatsApp chat platforms charge?",
    excerpt: language === 'es' ? "Entiende los diferentes modelos de precios de las plataformas de gestión de WhatsApp." : "Understand the different pricing models of WhatsApp management platforms.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "6 min" : "6 min",
  },
  {
    category: language === 'es' ? "Implementación" : "Implementation",
    title: language === 'es' ? "¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?" : "What should I consider when selecting a WhatsApp provider and platform?",
    excerpt: language === 'es' ? "Guía completa para elegir el mejor proveedor y plataforma de WhatsApp para tu negocio." : "Complete guide to choose the best WhatsApp provider and platform for your business.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "7 min" : "7 min",
  },
  {
    category: language === 'es' ? "Regulaciones" : "Regulations",
    title: language === 'es' ? "¿Cuáles son las principales políticas de WhatsApp Business API?" : "What are the main policies of WhatsApp Business API?",
    excerpt: language === 'es' ? "Entiende las reglas y políticas que debes cumplir para usar WhatsApp Business API." : "Understand the rules and policies you must comply with to use WhatsApp Business API.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "6 min" : "6 min",
  },
  {
    category: language === 'es' ? "Regulaciones" : "Regulations",
    title: language === 'es' ? "¿Por qué me pueden restringir el número de WhatsApp?" : "Why might my WhatsApp number be restricted?",
    excerpt: language === 'es' ? "Entiende las razones por las que WhatsApp restringe o suspende números." : "Understand the reasons why WhatsApp restricts or suspends numbers.",
    date: language === 'es' ? "21 de Marzo de 2026" : "March 21, 2026",
    readTime: language === 'es' ? "5 min" : "5 min",
  },
];

export default function Blog() {
  const { t, language } = useLanguage();
  const blogArticles = getBlogArticles(language);
  
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
                {t('blog.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Aprende todo sobre automatización, integraciones y mejores prácticas para transformar tu negocio con WhatsApp Business API'
                  : 'Learn everything about automation, integrations and best practices to transform your business with WhatsApp Business API'
                }
              </p>
              
              {/* Blog Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? '11 artículos' : '11 articles'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? 'Actualizado regularmente' : 'Regularly updated'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? 'Redacción: Alex Murillo + equipo de soporte' : 'By: Alex Murillo + support team'}</span>
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
                          <span>{article.readTime} {t('common.readTime')}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <a
                        href={getSEOPath(index + 1)}
                        className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium text-sm transition-colors group"
                      >
                        {t('blog.readMore')}
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
                  {language === 'es' ? '¿Listo para transformar tu negocio?' : 'Ready to transform your business?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar tu comunicación con clientes' : 'Implement WhatsApp Business API and start automating your customer communication'}
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
                  {language === 'es' ? 'Contáctame por WhatsApp' : 'Contact me on WhatsApp'}
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
