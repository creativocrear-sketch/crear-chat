import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AlcaldiaArticle1() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('alcaldias.article1.title');
    const text = t('alcaldias.article1.shareText');
    
    let shareUrl = '';
    
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <a
                href="/alcaldias"
                className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium mb-8 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {language === 'es' ? 'Volver a Alcaldías' : 'Back to Municipalities'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Turismo Inteligente' : 'Smart Tourism'}
                </span>
              </div>

              <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                {t('alcaldias.article1.title')}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {t('alcaldias.article1.subtitle')}
              </p>

              <div className="flex items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{language === 'es' ? '13 de Abril de 2026' : 'April 13, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min {language === 'es' ? 'de lectura' : 'read'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('alcaldias.article1.intro')}
                </h2>
              </div>

              {/* Problem Section */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  {t('alcaldias.article1.problem.title')}
                </h3>
                <p className="text-red-800 mb-4">
                  {t('alcaldias.article1.problem.description')}
                </p>
                <p className="text-red-900 font-bold">
                  {t('alcaldias.article1.problem.conclusion')}
                </p>
              </div>

              {/* Solution Section */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  {t('alcaldias.article1.solution.title')}
                </h3>
                <p className="text-green-800 mb-4">
                  {t('alcaldias.article1.solution.description')}
                </p>
                <p className="text-green-900 font-medium">
                  {t('alcaldias.article1.solution.adaptation')}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {t('alcaldias.article1.benefits.title')}
                </h3>
                <p className="text-blue-800 mb-4">
                  {t('alcaldias.article1.benefits.intro')}
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {language === 'es' ? 'Más ingresos para comercios locales' : 'More income for local businesses'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {language === 'es' ? 'Turistas más felices y satisfechos' : 'Happier and more satisfied tourists'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {language === 'es' ? 'Reducción de carga de trabajo' : 'Reduced workload'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {language === 'es' ? 'Disponibilidad 24/7' : '24/7 availability'}
                  </li>
                </ul>
              </div>

              {/* Use Cases */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  {t('alcaldias.article1.useCases.title')}
                </h3>
                <p className="text-purple-800 mb-4">
                  {t('alcaldias.article1.useCases.intro')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <span className="text-purple-900 font-medium">{'\ud83c\udfdb\ufe0f'} {language === 'es' ? 'Oficinas de turismo' : 'Tourism offices'}</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <span className="text-purple-900 font-medium">{'\ud83c\udfe8'} {language === 'es' ? 'Hoteles y hostales' : 'Hotels and hostels'}</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <span className="text-purple-900 font-medium">{'\ud83c\udf7d\ufe0f'} {language === 'es' ? 'Restaurantes' : 'Restaurants'}</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <span className="text-purple-900 font-medium">{'\ud83c\udfea'} {language === 'es' ? 'Atracciones turísticas' : 'Tourist attractions'}</span>
                  </div>
                </div>
              </div>

              {/* Why WhatsApp */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  {t('alcaldias.article1.whyWhatsApp.title')}
                </h3>
                <p className="text-green-800 mb-4">
                  {t('alcaldias.article1.whyWhatsApp.intro')}
                </p>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {language === 'es' ? '2,000 millones de usuarios activos' : '2 billion active users'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {language === 'es' ? 'Comunicación instantánea' : 'Instant communication'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {language === 'es' ? 'Formato conversacional natural' : 'Natural conversational format'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {language === 'es' ? 'Sin necesidad de descargar apps' : 'No need to download apps'}
                  </li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'es' ? 'Empieza hoy' : 'Start today'}
                </h3>
                <p className="text-lg text-blue-100 mb-6">
                  {t('alcaldias.article1.conclusion')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/planes"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    {language === 'es' ? 'Solicitar Demo' : 'Request Demo'}
                  </a>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    {language === 'es' ? 'Contactar experto' : 'Contact expert'}
                  </a>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {language === 'es' ? 'Compartir artículo' : 'Share article'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'es' ? 'Volver a' : 'Back to'}
                  </p>
                  <a
                    href="/alcaldias"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {language === 'es' ? 'Soluciones para Alcaldías' : 'Solutions for Municipalities'}
                  </a>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'es' ? 'Próximo artículo' : 'Next article'}
                  </p>
                  <span className="text-gray-400 font-medium">
                    {language === 'es' ? 'Próximamente...' : 'Coming soon...'}
                  </span>
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
