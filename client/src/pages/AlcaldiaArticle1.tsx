import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, ChevronRight, Share2, MessageCircle, Facebook } from "lucide-react";
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
                  {language === 'es' ? 'Turismo inteligente' : 'Smart tourism'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Convierte WhatsApp en tu mejor guía turístico 24/7' : 'Turn WhatsApp into your best 24/7 tourist guide'}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '13 de abril de 2026' : 'April 13, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{language === 'es' ? 'Autor: Alex Murillo + equipo de soporte' : 'Author: Alex Murillo + support team'}</span>
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Permite que los turistas encuentren fácilmente la información comercial de las empresas y profesionales que tiene tu municipio. Imagina en una sola consulta el turista tenga opciones de alojamiento, comida, lavado del vehículo, cines y hasta un chequeo médico para su mascota' : 'Allows tourists to easily find commercial information from companies and professionals in your municipality. Imagine that with a single query, tourists have options for accommodation, food, car washing, cinemas and even a medical check-up for their pet'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'El problema que tienes (incluso si no te das cuenta)' : 'The problem you\'re having (even if you don\'t notice it)'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si alguien pregunta: "¿Qué hacer hoy?", "¿Dónde está este lugar?", "¿Qué hay cerca?" y no recibe respuesta en segundos... simplemente va a otra opción.' : 'If someone asks: "What to do today?", "Where is this place?", "What\'s nearby?" and doesn\'t receive a response in seconds... they simply go to another option.'}
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {language === 'es' ? 'El turista de hoy es inmediato. No espera.' : 'Today\'s tourist is immediate. They don\'t wait.'}
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
                  {language === 'es' ? 'Cada mensaje sin respuesta es dinero que estás dejando en la mesa.' : 'Every unanswered message is money you\'re leaving behind.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'La solución: turismo IA en WhatsApp' : 'The solution: tourism AI on WhatsApp'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Ahora puedes tener un asistente inteligente que responde automáticamente a cada turista, a cualquier hora del día. Sin apps. Sin descargas. Sin fricción. Directamente desde WhatsApp.' : 'Now you can have an intelligent assistant that automatically responds to every tourist, at any time of day. No apps. No downloads. No friction. Directly from WhatsApp.'}
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
                  {language === 'es' ? 'Incluso puede adaptarse a lo que busca el usuario: turismo económico, planes familiares, experiencias premium' : 'It can even adapt to what the user is looking for: budget tourism, family plans, premium experiences'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios que directamente impactan tus resultados' : 'Benefits that directly impact your results'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Implementar esta IA no es solo innovación... es crecimiento:' : 'Implementing this AI is not just innovation... it\'s growth:'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Beneficios clave:' : 'Key benefits:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Aumento en tiempo de permanencia de turistas',
                    'Reducción en consultas repetitivas a oficinas',
                    'Mejora en satisfacción del visitante',
                    'Incremento en consumo en comercios locales',
                    'Disponibilidad 24/7 sin costos adicionales',
                    'Atención en múltiples idiomas automáticamente'
                  ].map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  )) : [
                    'Increase in tourist stay time',
                    'Reduction in repetitive office inquiries',
                    'Improvement in visitor satisfaction',
                    'Increase in local business consumption',
                    '24/7 availability without additional costs',
                    'Automatic multilingual assistance'
                  ].map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Casos de uso perfectos' : 'Perfect use cases'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfe0'} {language === 'es' ? 'Hoteles y restaurantes' : 'Hotels and restaurants'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Reservas, menú, promociones, atención 24/7' : 'Reservations, menu, promotions, 24/7 attention'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\u26ea'} {language === 'es' ? 'Iglesias' : 'Churches'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Horarios de apertura, misas, eventos' : 'Opening hours, masses, events'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfea'} {language === 'es' ? 'Atractivos turísticos' : 'Tourist attractions'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Información, horarios, precios, ubicación' : 'Information, schedules, prices, location'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udf93'} {language === 'es' ? 'Transporte' : 'Transportation'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Taxis, buses, rutas, transporte público' : 'Taxis, buses, routes, public transport'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfcb'} {language === 'es' ? 'Servicios públicos' : 'Public services'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Oficinas, trámites, información oficial' : 'Offices, procedures, official information'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfe2'} {language === 'es' ? 'Comercios locales' : 'Local businesses'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Tiendas, mercados, productos artesanales' : 'Shops, markets, artisanal products'}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '🔒 Escalable y sin límites' : '🔒 Scalable and without limits'}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Atiende 10 o 10,000 usuarios al mismo tiempo' : 'Attends 10 or 10,000 users at the same time'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Funciona 24/7 sin descanso' : 'Works 24/7 without rest'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Se adapta a nuevas rutas y lugares' : 'Adapts to new routes and places'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Crece contigo sin aumentar personal' : 'Grows with you without increasing staff'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📊 ¿Por qué WhatsApp?' : '📊 Why WhatsApp?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque es donde están tus usuarios:' : 'Because that\'s where your users are:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Más del 90% de las personas lo usan diariamente',
                    'No requiere aprendizaje',
                    'Tiene alta tasa de respuesta',
                    'Es el canal más directo y efectivo'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  )) : [
                    'More than 90% of people use it daily',
                    'No learning required',
                    'Has high response rate',
                    'It\'s the most direct and effective channel'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '👉 Estás llevando el turismo al lugar correcto.' : '👉 You\'re taking tourism to the right place.'}
                </h4>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🎯 Diferencial clave' : '🎯 Key differential'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es un chatbot básico.' : 'It\'s not a basic chatbot.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Entiende lenguaje natural',
                    'Responde de forma contextual',
                    'Aprende y mejora',
                    'Ofrece respuestas útiles, no genéricas'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  )) : [
                    'Understands natural language',
                    'Responds contextually',
                    'Learns and improves',
                    'Receives useful, not generic responses'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La plataforma perfecta para atención turística' : 'The perfect platform for tourist attention'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Ventajas de WhatsApp:' : 'WhatsApp advantages:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Millones de usuarios activos mensuales',
                    'La mayoría de turistas ya lo tienen instalado',
                    'Comunicación instantánea y familiar',
                    'No requiere descarga ni registro adicional',
                    'Soporte nativo para multimedia',
                    'Integración con sistemas de reservación'
                  ].map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  )) : [
                    'Billions of monthly active users',
                    'Most tourists already have it installed',
                    'Instant and familiar communication',
                    'No download or additional registration required',
                    'Native multimedia support',
                    'Integration with reservation systems'
                  ].map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Donde ya están tus clientes, ahí debe estar tu servicio.' : 'Where your customers already are, that\'s where your service should be.'}
                </p>
              </article>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
                  <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                    {language === 'es' ? '¿Te interesa saber más?' : 'Interested in learning more?'}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar la atención al cliente' : 'Implement WhatsApp Business API and start automating customer service'}
                  </p>
                  
                  <a
                    href="https://wa.me/+573105317126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {language === 'es' ? 'Escríbenos por WhatsApp' : 'Write to us on WhatsApp'}
                  </a>
                </div>
              </div>

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
                    <a
                      href="/alcaldias/consulta-deudas-whatsapp"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {language === 'es' ? 'Consulta de Deudas por WhatsApp en Segundos' : 'Debt Inquiry via WhatsApp in Seconds'}
                      <ChevronRight className="w-4 h-4" />
                    </a>
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
