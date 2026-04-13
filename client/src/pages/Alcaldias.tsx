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
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{t('alcaldias.stats.articles')}</div>
                  <div className="text-gray-600 text-sm">{t('alcaldias.stats.focus')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">{language === 'es' ? 'Atención continua' : 'Continuous service'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600 text-sm">{language === 'es' ? 'Usuarios atendidos' : 'Users served'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">{language === 'es' ? 'Seguridad garantizada' : 'Security guaranteed'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  {language === 'es' ? 'Artículos Especializados' : 'Specialized Articles'}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {language === 'es' 
                    ? 'Soluciones prácticas y casos de éxito para gobiernos locales'
                    : 'Practical solutions and success stories for local governments'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <article 
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Article Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/80 text-6xl">{'\ud83d\udccd'}</div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} {language === 'es' ? 'min' : 'min'}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={article.path}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
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
                  {t('alcaldias.cta.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('alcaldias.cta.subtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/planes"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                  >
                    {t('alcaldias.cta.button')}
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300 rounded-lg text-lg"
                  >
                    {language === 'es' ? 'Contactar experto' : 'Contact expert'}
                  </a>
                </div>
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
