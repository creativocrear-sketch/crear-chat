import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getAlcaldiasArticles = (language: string) => [
  {
    category: language === 'es' ? "Turismo Inteligente" : "Smart Tourism",
    title: language === 'es' ? "Convierte WhatsApp en tu Mejor Guía Turística 24/7" : "Turn WhatsApp into Your Best 24/7 Tourist Guide",
    excerpt: language === 'es' ? "Automatiza la atención, mejora la experiencia y aumenta el consumo turístico en tu ciudad o negocio." : "Automate attention, improve experience, and increase tourism consumption in your city or business.",
    date: language === 'es' ? "13 de Abril de 2026" : "April 13, 2026",
    readTime: language === 'es' ? "8 min" : "8 min",
    path: "/alcaldias/guia-turistica-whatsapp"
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
                {t('alcaldias.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('alcaldias.subtitle')}
              </p>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
                {t('alcaldias.description')}
              </p>
              
              {/* Blog Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{t('alcaldias.stats.articles')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? 'Atención 24/7' : '24/7 Service'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1B4F72]">{language === 'es' ? 'Redacción: Alex Murillo + Equipo de Soporte' : 'By: Alex Murillo + Support Team'}</span>
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
                          <span>{article.readTime} {language === 'es' ? 'min' : 'min'}</span>
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
                  {language === 'es' ? '¿Listo para transformar tu alcaldía?' : 'Ready to transform your municipality?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar la atención turística' : 'Implement WhatsApp Business API and start automating tourist assistance'}
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

export default Alcaldias;
