import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle2() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article2.title');
    const text = t('articles.article2.shareText');
    
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
                href="/blog"
                className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium mb-8 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t('common.backToBlog')}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Casos de Uso' : 'Use Cases'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article2.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 {t('common.readTime')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{t('common.author')}: {language === 'es' ? 'Alex Murillo + Equipo de Soporte' : 'Alex Murillo + Support Team'}</span>
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
                  {t('articles.article2.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article2.content.intro')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('articles.article2.content.restaurantTitle')}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {t('articles.article2.content.restaurantUseCase')}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article2.content.restaurantDesc')}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Enviar confirmaciones automáticas de reservas',
                    'Recordar a los clientes su reserva 24 horas antes',
                    'Permitir que los clientes cambien o cancelen reservas directamente por WhatsApp',
                    'Informar sobre cambios en el menú o promociones especiales',
                    'Recibir pedidos para llevar y delivery'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Send automatic reservation confirmations',
                    'Remind customers of their reservation 24 hours in advance',
                    'Allow customers to change or cancel reservations directly via WhatsApp',
                    'Inform about menu changes or special promotions',
                    'Receive takeout and delivery orders'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {t('articles.article2.content.restaurantExample')}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article2.content.restaurantExampleText')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {t('articles.article2.content.restaurantWithAI')}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article2.content.restaurantWithAIText')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Hoteles: Mejora la Experiencia del Huésped' : 'Hotels: Enhance Guest Experience'}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Caso de uso: Comunicación pre-llegada y durante la estadía' : 'Use Case: Pre-arrival and during-stay communication'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Los hoteles pueden utilizar WhatsApp Business API para:' : 'Hotels can use WhatsApp Business API to:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Enviar confirmaciones de reserva con detalles de check-in' : 'Send reservation confirmations with check-in details'}</li>
                  <li>{language === 'es' ? 'Proporcionar información sobre amenidades y servicios' : 'Provide information about amenities and services'}</li>
                  <li>{language === 'es' ? 'Facilitar el check-in remoto' : 'Facilitate remote check-in'}</li>
                  <li>{language === 'es' ? 'Responder consultas sobre servicios del hotel' : 'Respond to hotel service inquiries'}</li>
                  <li>{language === 'es' ? 'Enviar ofertas de servicios adicionales (spa, restaurante, tours)' : 'Send additional service offers (spa, restaurant, tours)'}</li>
                  <li>{language === 'es' ? 'Recopilar feedback después del check-out' : 'Collect feedback after check-out'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Ejemplo práctico:' : 'Practical Example:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El Hotel "Paraíso Tropical" implementó WhatsApp Business API y mejoró su satisfacción del cliente en un 35%. Los huéspedes reciben un mensaje de bienvenida con instrucciones de check-in, información sobre el WiFi, horarios de comidas y servicios disponibles. Durante la estadía, pueden solicitar servicios como toallas adicionales o información turística directamente por WhatsApp.' : 'The "Tropical Paradise" Hotel implemented WhatsApp Business API and improved customer satisfaction by 35%. Guests receive a welcome message with check-in instructions, WiFi information, meal times, and available services. During their stay, they can request services like additional towels or tourist information directly via WhatsApp.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Con IA integrada:' : 'With integrated AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un asistente de IA disponible 24/7 puede responder preguntas sobre servicios, hacer recomendaciones de restaurantes cercanos, y procesar solicitudes de servicio a la habitación automáticamente, mejorando significativamente la experiencia del huésped.' : 'An AI assistant available 24/7 can answer questions about services, make nearby restaurant recommendations, and automatically process room service requests, significantly improving the guest experience.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Cafés: Impulsa las Ventas y la Lealtad' : 'Cafés: Boost Sales and Loyalty'}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Caso de uso: Programas de fidelización y promociones' : 'Use Case: Loyalty programs and promotions'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Los cafés pueden usar WhatsApp Business API para:' : 'Cafés can use WhatsApp Business API to:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Notificar sobre bebidas y pasteles nuevos' : 'Notify about new drinks and pastries'}</li>
                  <li>{language === 'es' ? 'Enviar promociones y descuentos personalizados' : 'Send personalized promotions and discounts'}</li>
                  <li>{language === 'es' ? 'Permitir pre-pedidos para recoger' : 'Allow pre-orders for pickup'}</li>
                  <li>{language === 'es' ? 'Crear programas de puntos y recompensas' : 'Create points and rewards programs'}</li>
                  <li>{language === 'es' ? 'Informar sobre eventos especiales (catas de café, talleres)' : 'Inform about special events (coffee tastings, workshops)'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Ejemplo práctico:' : 'Practical Example:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El café "Aroma Perfecto" creó un programa de fidelización en WhatsApp donde cada compra suma puntos. Los clientes reciben automáticamente mensajes sobre promociones personalizadas basadas en sus compras anteriores. Las ventas aumentaron un 25% en los primeros tres meses.' : 'The "Perfect Aroma" café created a loyalty program on WhatsApp where each purchase adds points. Customers automatically receive messages about personalized promotions based on their previous purchases. Sales increased by 25% in the first three months.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Con IA integrada:' : 'With integrated AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un sistema de IA puede analizar preferencias de compra y enviar recomendaciones personalizadas (por ejemplo, "Vimos que te encanta el café de origen único, tenemos uno nuevo de Colombia"). También puede procesar pre-pedidos automáticamente y confirmar horarios de recogida.' : 'An AI system can analyze purchase preferences and send personalized recommendations (for example, "We saw you love single-origin coffee, we have a new one from Colombia"). It can also process pre-orders automatically and confirm pickup times.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Oficinas de Abogados: Mejora la Comunicación Legal' : 'Law Offices: Improve Legal Communication'}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Caso de uso: Comunicación segura con clientes' : 'Use Case: Secure communication with clients'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Las oficinas de abogados pueden utilizar WhatsApp Business API para:' : 'Law offices can use WhatsApp Business API to:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Enviar actualizaciones sobre casos de forma segura' : 'Send secure case updates'}</li>
                  <li>{language === 'es' ? 'Recordar fechas importantes de audiencias o plazos' : 'Remind important hearing dates or deadlines'}</li>
                  <li>{language === 'es' ? 'Facilitar la firma electrónica de documentos' : 'Facilitate electronic document signing'}</li>
                  <li>{language === 'es' ? 'Responder consultas legales frecuentes' : 'Respond to frequent legal inquiries'}</li>
                  <li>{language === 'es' ? 'Programar citas con abogados' : 'Schedule appointments with lawyers'}</li>
                  <li>{language === 'es' ? 'Enviar documentos y notificaciones legales' : 'Send legal documents and notifications'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Ejemplo práctico:' : 'Practical Example:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El despacho "Justicia Legal" implementó WhatsApp Business API para comunicarse con sus clientes. Ahora, cuando hay una actualización importante en un caso, el cliente recibe un mensaje automático. Los clientes también pueden programar citas directamente por WhatsApp, reduciendo llamadas telefónicas en un 60%.' : 'The "Legal Justice" law firm implemented WhatsApp Business API to communicate with its clients. Now, when there is an important update in a case, the client receives an automatic message. Clients can also schedule appointments directly via WhatsApp, reducing phone calls by 60%.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Con IA integrada:' : 'With integrated AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un chatbot legal puede responder preguntas frecuentes sobre procesos legales, plazos, y documentación requerida. También puede triagear consultas y dirigirlas al abogado apropiado, mejorando la eficiencia del despacho.' : 'A legal chatbot can answer frequent questions about legal processes, deadlines, and required documentation. It can also triage inquiries and direct them to the appropriate lawyer, improving the firm\'s efficiency.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Oficinas de Cobros y Recaudo: Optimiza tu Gestión de Cobranza' : 'Collection Offices: Optimize Your Collection Management'}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Caso de uso: Comunicación efectiva de cobros' : 'Use Case: Effective collection communication'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Las oficinas de cobros pueden usar WhatsApp Business API para:' : 'Collection offices can use WhatsApp Business API to:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Enviar recordatorios de pago automáticos' : 'Send automatic payment reminders'}</li>
                  <li>{language === 'es' ? 'Facilitar pagos directos a través de enlaces de pago' : 'Facilitate direct payments through payment links'}</li>
                  <li>{language === 'es' ? 'Comunicar cambios en planes de pago' : 'Communicate changes in payment plans'}</li>
                  <li>{language === 'es' ? 'Responder consultas sobre deudas' : 'Respond to debt inquiries'}</li>
                  <li>{language === 'es' ? 'Enviar comprobantes de pago automáticamente' : 'Send automatic payment receipts'}</li>
                  <li>{language === 'es' ? 'Realizar seguimiento de pagos programados' : 'Track scheduled payments'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Ejemplo práctico:' : 'Practical Example:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La empresa de cobros "Recaudo Efectivo" implementó WhatsApp Business API y aumentó su tasa de recuperación de cartera en un 45%. Los deudores reciben recordatorios automáticos personalizados según el estado de su deuda. Cuando un cliente realiza un pago, recibe automáticamente un comprobante por WhatsApp, mejorando la confianza y transparencia.' : 'The "Effective Collection" collection agency implemented WhatsApp Business API and increased its portfolio recovery rate by 45%. Debtors receive automatic personalized reminders based on their debt status. When a client makes a payment, they automatically receive a receipt via WhatsApp, improving trust and transparency.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Con IA integrada:' : 'With integrated AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un sistema de IA puede analizar patrones de pago y enviar recordatorios en el momento óptimo. También puede procesar planes de pago automáticamente, permitiendo que los clientes negocie términos sin intervención humana, mejorando significativamente la recuperación de cartera.' : 'An AI system can analyze payment patterns and send reminders at the optimal time. It can also process payment plans automatically, allowing customers to negotiate terms without human intervention, significantly improving portfolio recovery.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios Transversales' : 'Cross-Benefits'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Independientemente de tu industria, WhatsApp Business API ofrece:' : 'Regardless of your industry, WhatsApp Business API offers:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Reducción de costos: Menos llamadas telefónicas y correos electrónicos' : 'Cost reduction: Fewer phone calls and emails'}</li>
                  <li>{language === 'es' ? 'Mejora en la satisfacción del cliente: Respuestas rápidas y personalizadas' : 'Improved customer satisfaction: Fast and personalized responses'}</li>
                  <li>{language === 'es' ? 'Aumento en conversión: Comunicación oportuna y relevante' : 'Increased conversion: Timely and relevant communication'}</li>
                  <li>{language === 'es' ? 'Automatización: Procesos sin intervención humana' : 'Automation: Processes without human intervention'}</li>
                  <li>{language === 'es' ? 'Escalabilidad: Maneja miles de conversaciones simultáneamente' : 'Scalability: Handle thousands of simultaneous conversations'}</li>
                  <li>{language === 'es' ? 'Datos y análisis: Comprende mejor el comportamiento de tus clientes' : 'Data and analytics: Better understand your customer behavior'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'WhatsApp Business API no es solo una herramienta de comunicación, es un catalizador de transformación digital. Ya sea que dirijas un restaurante, hotel, café, despacho legal u oficina de cobros, esta plataforma puede mejorar significativamente tu eficiencia operativa y satisfacción del cliente.' : 'WhatsApp Business API is not just a communication tool, it\'s a digital transformation catalyst. Whether you run a restaurant, hotel, café, law firm, or collection office, this platform can significantly improve your operational efficiency and customer satisfaction.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La inversión en WhatsApp Business API se traduce en mejores resultados comerciales, clientes más satisfechos y operaciones más eficientes.' : 'The investment in WhatsApp Business API translates into better business results, more satisfied customers, and more efficient operations.'}
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{language === 'es' ? 'Compartir:' : 'Share:'}</h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    {language === 'es' ? 'Facebook' : 'Facebook'}
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {language === 'es' ? 'WhatsApp' : 'WhatsApp'}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Artículo anterior</p>
                    <a
                      href="/blog/articulo-1"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-3"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Cuáles son los primeros pasos para migrar WhatsApp Business API?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  {language === 'es' ? '¿Listo para implementar WhatsApp Business API?' : 'Ready to implement WhatsApp Business API?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === 'es' ? 'Contáctame para una consulta personalizada sobre cómo automatizar tu negocio con WhatsApp Business API.' : 'Contact me for a personalized consultation on how to automate your business with WhatsApp Business API.'}
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  {language === 'es' ? 'Escríbeme por WhatsApp' : 'Write me on WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-8">{language === 'es' ? 'Otros artículos' : 'Other articles'}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === 'es' ? 'Conceptos Básicos' : 'Basic Concepts'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?' : 'What is the difference between WhatsApp Business and WhatsApp Business API?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.' : 'Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min</span>
                      <a href="/blog/articulo-1" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        {language === 'es' ? 'Leer más' : 'Read more'}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === 'es' ? 'Implementación' : 'Implementation'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Cuáles son los primeros pasos para migrar WhatsApp Business API?' : 'What are the first steps to migrate WhatsApp Business API?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.' : 'Step-by-step guide to migrate your business to WhatsApp Business API without complications.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>7 min</span>
                      <a href="/blog/articulo-3" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        {language === 'es' ? 'Leer más' : 'Read more'}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === 'es' ? 'Tendencias' : 'Trends'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Qué beneficios tengo usando WhatsApp Business API + IA?' : 'What benefits do I get using WhatsApp Business API + AI?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente.' : 'Discover how the combination of WhatsApp Business API and AI revolutionizes customer service.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>6 min</span>
                      <a href="/blog/articulo-4" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        {language === 'es' ? 'Leer más' : 'Read more'}
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
