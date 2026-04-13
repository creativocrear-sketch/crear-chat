import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle4() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article4.title');
    const text = t('articles.article4.shareText');
    
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
                  {language === 'es' ? 'Tendencias' : 'Trends'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article4.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 {t('common.readTime')}</span>
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
                  {t('articles.article4.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La combinación de WhatsApp Business API con Inteligencia Artificial (IA) es una de las transformaciones más poderosas que puede experimentar un negocio moderno. Veamos qué beneficios concretos obtienes.' : 'The combination of WhatsApp Business API with Artificial Intelligence (AI) is one of the most powerful transformations a modern business can experience. Let\'s see what concrete benefits you get.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Automatización Inteligente 24/7' : 'Intelligent 24/7 Automation'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Con IA integrada en WhatsApp Business API, tu negocio puede:' : 'With AI integrated into WhatsApp Business API, your business can:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Responder consultas de clientes automáticamente, incluso fuera del horario laboral' : 'Automatically respond to customer inquiries, even outside business hours'}</li>
                  <li>{language === 'es' ? 'Procesar pedidos sin intervención humana' : 'Process orders without human intervention'}</li>
                  <li>{language === 'es' ? 'Programar citas y reservas automáticamente' : 'Schedule appointments and reservations automatically'}</li>
                  <li>{language === 'es' ? 'Resolver problemas comunes sin escalar a un agente humano' : 'Resolve common issues without escalating to a human agent'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Tus clientes obtienen respuestas inmediatas, mejorando significativamente su satisfacción.' : 'Your customers get immediate responses, significantly improving their satisfaction.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Personalización a Escala' : 'Scale Personalization'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La IA puede analizar el historial de cada cliente y personalizar comunicaciones:' : 'AI can analyze each customer\'s history and personalize communications:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Recomendaciones de productos basadas en compras anteriores' : 'Product recommendations based on previous purchases'}</li>
                  <li>{language === 'es' ? 'Ofertas personalizadas según preferencias' : 'Personalized offers based on preferences'}</li>
                  <li>{language === 'es' ? 'Mensajes adaptados al tono y preferencias del cliente' : 'Messages adapted to customer tone and preferences'}</li>
                  <li>{language === 'es' ? 'Contenido relevante para cada segmento' : 'Relevant content for each segment'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Mayor tasa de conversión y clientes más leales.' : 'Higher conversion rate and more loyal customers.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Reducción de Costos Operativos' : 'Reduction of Operating Costs'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Con IA manejando tareas repetitivas:' : 'With AI handling repetitive tasks:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Menos personal necesario para atención al cliente' : 'Less staff needed for customer service'}</li>
                  <li>{language === 'es' ? 'Reducción de errores humanos' : 'Reduction of human errors'}</li>
                  <li>{language === 'es' ? 'Menor tiempo de respuesta' : 'Shorter response time'}</li>
                  <li>{language === 'es' ? 'Optimización de recursos' : 'Resource optimization'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Ahorros significativos en costos de operación.' : 'Significant savings in operating costs.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Análisis Predictivo' : 'Predictive Analysis'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La IA puede predecir:' : 'AI can predict:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Comportamiento de compra de clientes' : 'Customer purchasing behavior'}</li>
                  <li>{language === 'es' ? 'Clientes en riesgo de abandonar' : 'Customers at risk of leaving'}</li>
                  <li>{language === 'es' ? 'Mejor momento para enviar mensajes' : 'Best time to send messages'}</li>
                  <li>{language === 'es' ? 'Productos que probablemente interesen a cada cliente' : 'Products likely to interest each customer'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Toma de decisiones más informada y estratégica.' : 'More informed and strategic decision-making.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Mejora Continua' : 'Continuous Improvement'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Los sistemas de IA aprenden con cada interacción:' : 'AI systems learn with each interaction:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Mejoran las respuestas con el tiempo' : 'They improve responses over time'}</li>
                  <li>{language === 'es' ? 'Identifican patrones de problemas comunes' : 'They identify common problem patterns'}</li>
                  <li>{language === 'es' ? 'Sugieren mejoras en procesos' : 'They suggest process improvements'}</li>
                  <li>{language === 'es' ? 'Se adaptan a cambios en el comportamiento del cliente' : 'They adapt to changes in customer behavior'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Tu sistema se vuelve más eficiente cada día.' : 'Your system becomes more efficient every day.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Escalabilidad Sin Límites' : 'Unlimited Scalability'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Mientras que los agentes humanos tienen límites:' : 'While human agents have limits:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'La IA puede manejar miles de conversaciones simultáneamente' : 'AI can handle thousands of simultaneous conversations'}</li>
                  <li>{language === 'es' ? 'No se fatiga ni comete errores por cansancio' : 'It doesn\'t get tired or make mistakes due to fatigue'}</li>
                  <li>{language === 'es' ? 'Puede crecer con tu negocio sin aumentar costos proporcionalmente' : 'It can grow with your business without proportionally increasing costs'}</li>
                  <li>{language === 'es' ? 'Mantiene calidad consistente' : 'Maintains consistent quality'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Puedes crecer sin limitaciones de recursos humanos.' : 'You can grow without human resource limitations.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Ejemplos Concretos de IA en WhatsApp' : 'Concrete AI Examples in WhatsApp'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Restaurante con IA:' : 'Restaurant with AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un cliente escribe "Tengo alergia a los mariscos, ¿qué me recomiendas?" La IA analiza el menú, identifica platos sin mariscos, considera las preferencias del cliente basadas en compras anteriores, y recomienda tres opciones específicas con precios.' : 'A customer writes "I\'m allergic to shellfish, what do you recommend?" The AI analyzes the menu, identifies shellfish-free dishes, considers the customer\'s preferences based on previous purchases, and recommends three specific options with prices.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Hotel con IA:' : 'Hotel with AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un huésped pregunta "¿Qué hay para hacer cerca del hotel?" La IA accede a información del hotel, considera el perfil del huésped (aventurero, relajado, cultural), y proporciona recomendaciones personalizadas con horarios y precios.' : 'A guest asks "What is there to do near the hotel?" The AI accesses hotel information, considers the guest\'s profile (adventurous, relaxed, cultural), and provides personalized recommendations with schedules and prices.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Oficina de Cobros con IA:' : 'Collections Office with AI:'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Un deudor recibe un recordatorio de pago. Si no responde en 24 horas, la IA analiza su historial de pagos, identifica el mejor momento para reenviar el recordatorio, y personaliza el mensaje según su patrón de comportamiento.' : 'A debtor receives a payment reminder. If they don\'t respond within 24 hours, the AI analyzes their payment history, identifies the best time to resend the reminder, and personalizes the message according to their behavior pattern.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Desafíos y Consideraciones' : 'Challenges and Considerations'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Aunque los beneficios son enormes, es importante considerar:' : 'Although the benefits are enormous, it\'s important to consider:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Privacidad: Asegúrate de cumplir con regulaciones de protección de datos' : 'Privacy: Ensure compliance with data protection regulations'}</li>
                  <li>{language === 'es' ? 'Transparencia: Los clientes deben saber que están hablando con IA' : 'Transparency: Customers should know they are talking to AI'}</li>
                  <li>{language === 'es' ? 'Escalada humana: Siempre debe haber opción de hablar con un agente real' : 'Human escalation: There should always be an option to speak with a real agent'}</li>
                  <li>{language === 'es' ? 'Capacitación: Tu equipo debe entender cómo funciona y supervisar la IA' : 'Training: Your team must understand how AI works and supervise it'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Retorno de Inversión (ROI)' : 'Return on Investment (ROI)'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Las empresas que implementan WhatsApp Business API + IA típicamente ven:' : 'Companies that implement WhatsApp Business API + AI typically see:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Reducción de costos: 30-50% en atención al cliente' : 'Cost reduction: 30-50% in customer service'}</li>
                  <li>{language === 'es' ? 'Aumento de conversión: 20-40% más ventas' : 'Conversion increase: 20-40% more sales'}</li>
                  <li>{language === 'es' ? 'Mejora en satisfacción: Puntuaciones NPS más altas' : 'Satisfaction improvement: Higher NPS scores'}</li>
                  <li>{language === 'es' ? 'Recuperación de inversión: 3-6 meses' : 'Investment recovery: 3-6 months'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'WhatsApp Business API + IA no es una opción futura, es una necesidad presente. Los negocios que adopten esta combinación ahora tendrán una ventaja competitiva significativa sobre aquellos que esperen.' : 'WhatsApp Business API + AI is not a future option, it\'s a present necessity. Businesses that adopt this combination now will have a significant competitive advantage over those who wait.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La IA no reemplaza a los humanos, los potencia. Permite que tu equipo se enfoque en tareas de mayor valor mientras la IA maneja lo rutinario.' : 'AI doesn\'t replace humans, it empowers them. It allows your team to focus on higher-value tasks while AI handles the routine.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si aún no has considerado esta combinación, es el momento de hacerlo. Tu competencia probablemente ya lo está haciendo.' : 'If you haven\'t considered this combination yet, now is the time. Your competition is probably already doing it.'}
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
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Artículo anterior' : 'Previous article'}</p>
                    <a
                      href="/blog/articulo-3"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Cuáles son los primeros pasos para migrar WhatsApp Business API?' : 'What are the first steps to migrate WhatsApp Business API?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/articulo-5"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Con que plataformas puedo integrar el WhatsApp Business API?' : 'What platforms can I integrate WhatsApp Business API with?'}
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
                      {language === 'es' ? 'Casos de Uso' : 'Use Cases'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Para que me sirve WhatsApp Business API para mi negocio?' : 'What is WhatsApp Business API useful for in my business?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.' : 'Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers and collection offices.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>8 min</span>
                      <a href="/blog/articulo-2" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
                      {language === 'es' ? 'Aprende cómo migrar de WhatsApp Business a WhatsApp Business API paso a paso.' : 'Learn how to migrate from WhatsApp Business to WhatsApp Business API step by step.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>7 min</span>
                      <a href="/blog/articulo-3" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
