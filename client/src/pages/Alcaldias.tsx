import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getAlcaldiasArticles = (language: string) => [
  {
    category: language === 'es' ? "Turismo inteligente" : "Smart tourism",
    title: language === 'es' ? "Convierte WhatsApp en tu mejor guía turística 24/7" : "Turn WhatsApp into your best 24/7 tourist guide",
    excerpt: language === 'es' ? "Automatiza la atención, mejora la experiencia y aumenta el consumo turístico en tu ciudad o negocio" : "Automate attention, improve experience, and increase tourism consumption in your city or business",
    date: language === 'es' ? "13 de abril de 2026" : "April 13, 2026",
    readTime: language === 'es' ? "5 min" : "5 min",
    author: language === 'es' ? "Autor: Alex Murillo + equipo de soporte" : "Author: Alex Murillo + support team",
    path: "/alcaldias/guia-turistica-whatsapp"
  },
  {
    category: language === 'es' ? "Servicios financieros" : "Financial services",
    title: language === 'es' ? "Consulta de deudas por WhatsApp en segundos" : "Debt inquiry via WhatsApp in seconds",
    excerpt: language === 'es' ? "Permite que tus usuarios accedan a su información financiera de forma rápida, clara y sin fricciones" : "Allow your users to access their financial information quickly, clearly, and without friction",
    date: language === 'es' ? "13 de abril de 2026" : "April 13, 2026",
    readTime: language === 'es' ? "4 min" : "4 min",
    author: language === 'es' ? "Autor: Alex Murillo + equipo de soporte" : "Author: Alex Murillo + support team",
    path: "/alcaldias/consulta-deudas-whatsapp"
  },
  {
    category: language === 'es' ? "Educación interactiva" : "Interactive education",
    title: language === 'es' ? "Convierte WhatsApp en una plataforma educativa interactiva" : "Turn WhatsApp into an interactive educational platform",
    excerpt: language === 'es' ? "Motiva, evalúa y premia a tus estudiantes con preguntas de selección múltiple desde el canal que ya usan todos los días" : "Motivate, evaluate and reward your students with multiple choice questions from the channel they already use every day",
    date: language === 'es' ? "13 de abril de 2026" : "April 13, 2026",
    readTime: language === 'es' ? "6 min" : "6 min",
    author: language === 'es' ? "Autor: Alex Murillo + equipo de soporte" : "Author: Alex Murillo + support team",
    path: "/alcaldias/plataforma-educativa-whatsapp"
  },
  {
    category: language === 'es' ? "Servicios ciudadanos" : "Citizen services",
    title: language === 'es' ? "Consulta SISBÉN y subsidios en segundos por WhatsApp" : "SISBÉN and subsidy inquiry in seconds via WhatsApp",
    excerpt: language === 'es' ? "Facilita el acceso a la información y moderniza la atención ciudadana" : "Facilitate access to information and modernize citizen service",
    date: language === 'es' ? "13 de abril de 2026" : "April 13, 2026",
    readTime: language === 'es' ? "5 min" : "5 min",
    author: language === 'es' ? "Autor: Alex Murillo + equipo de soporte" : "Author: Alex Murillo + support team",
    path: "/alcaldias/consulta-sisben-subsidios"
  }
];

function Alcaldias() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = getAlcaldiasArticles(language);
  
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Soluciones para Alcaldías' : 'Solutions for Municipalities'}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                {language === 'es' ? 'Transforma tu ciudad con tecnología' : 'Transform your city with technology'}
              </p>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
                {language === 'es' ? 'Implemente WhatsApp Business API para mejorar la atención ciudadana, fortalecer el turismo y responder con más eficiencia.' : 'Smart WhatsApp solutions to modernize citizen services and boost local tourism.'}
              </p>
              
              {/* Blog Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? 'Artículos especializados' : 'Specialized articles'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? 'Atención 24/7' : '24/7 Service'}</span>
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
                {articles.map((article, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                  >
                    <div className="p-6 md:p-8">
                      {/* Category */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full">
                          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1B4F72] transition-colors">
                        {article.title.charAt(0).toUpperCase() + article.title.slice(1)}
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
                        href={article.path}
                        className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium text-sm transition-colors group"
                      >
                        {language === 'es' ? 'Leer más' : 'Read more'}
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
                  {language === 'es' ? '¿Te interesa saber más?' : 'Interested in learning more?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar la atención al cliente' : 'Implement WhatsApp Business API and start automating customer service'}
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
                  {language === 'es' ? 'Escríbenos por WhatsApp' : 'Write to us on WhatsApp'}
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

export default Alcaldias;

