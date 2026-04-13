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
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('alcaldias.article1.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '13 de Abril de 2026' : 'April 13, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{language === 'es' ? 'Autor: Alex Murillo + Equipo de Soporte' : 'Author: Alex Murillo + Support Team'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('alcaldias.article1.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.subtitle')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('alcaldias.article1.intro')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.problem.description')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {t('alcaldias.article1.problem.title')}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Turistas perdidos sin información clara',
                    'Oficinas de turismo saturadas con preguntas repetitivas',
                    'Falta de atención fuera del horario laboral',
                    'Información desactualizada o incompleta',
                    'Barreras de idioma para turistas extranjeros',
                    'Pérdida de oportunidades comerciales locales'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  )) : [
                    'Lost tourists without clear information',
                    'Tourist offices overwhelmed with repetitive questions',
                    'Lack of attention outside business hours',
                    'Outdated or incomplete information',
                    'Language barriers for foreign tourists',
                    'Lost local business opportunities'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.problem.conclusion')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('alcaldias.article1.solution.title')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.solution.description')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Tu asistente turístico puede responder en tiempo real:' : 'Your tourist assistant can respond in real time:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Direcciones exactas y cómo llegar',
                    'Horarios de apertura y precios',
                    'Recomendaciones personalizadas según gustos',
                    'Eventos locales y actividades disponibles',
                    'Traducción instantánea de información',
                    'Alertas sobre cierros o cambios temporales'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Exact addresses and directions',
                    'Opening hours and prices',
                    'Personalized recommendations based on preferences',
                    'Local events and available activities',
                    'Instant translation of information',
                    'Alerts about closures or temporary changes'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.solution.adaptation')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('alcaldias.article1.benefits.title')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.benefits.intro')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Beneficios clave:' : 'Key benefits:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Aumento del 40% en tiempo de permanencia de turistas',
                    'Reducción del 60% en consultas repetitivas a oficinas',
                    'Mejora del 85% en satisfacción del visitante',
                    'Incremento del 25% en consumo en comercios locales',
                    'Disponibilidad 24/7 sin costos adicionales',
                    'Atención en múltiples idiomas automáticamente'
                  ].map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  )) : [
                    '40% increase in tourist stay time',
                    '60% reduction in repetitive office inquiries',
                    '85% improvement in visitor satisfaction',
                    '25% increase in local business consumption',
                    '24/7 availability without additional costs',
                    'Automatic multilingual assistance'
                  ].map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('alcaldias.article1.useCases.title')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.useCases.intro')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfdb\ufe0f'} {language === 'es' ? 'Oficinas de Turismo' : 'Tourist Offices'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Información general y direcciones' : 'General information and directions'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfe8'} {language === 'es' ? 'Hoteles y Alojamientos' : 'Hotels and Accommodations'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Disponibilidad y servicios' : 'Availability and services'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udf7d\ufe0f'} {language === 'es' ? 'Restaurantes y Bares' : 'Restaurants and Bars'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Menús y reservas' : 'Menus and reservations'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfea'} {language === 'es' ? 'Atracciones Turísticas' : 'Tourist Attractions'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Horarios y precios' : 'Hours and prices'}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('alcaldias.article1.whyWhatsApp.title')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.whyWhatsApp.intro')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Ventajas de WhatsApp:' : 'WhatsApp advantages:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    '2,000 millones de usuarios activos mensuales',
                    '97% de los turistas ya lo tienen instalado',
                    'Comunicación instantánea y familiar',
                    'No requiere descarga ni registro adicional',
                    'Soporte nativo para multimedia',
                    'Funciona perfectamente en conexiones lentas'
                  ].map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  )) : [
                    '2 billion monthly active users',
                    '97% of tourists already have it installed',
                    'Instant and familiar communication',
                    'No download or additional registration required',
                    'Native multimedia support',
                    'Works perfectly on slow connections'
                  ].map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('alcaldias.article1.whyWhatsApp.conclusion')}
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'es' ? 'Compartir artículo' : 'Share article'}
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">
                      {language === 'es' ? 'Volver a' : 'Back to'}
                    </p>
                    <a
                      href="/alcaldias"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
