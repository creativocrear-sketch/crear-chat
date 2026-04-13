import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle7() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article7.title');
    const text = t('articles.article7.shareText');
    
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
                {language === 'es' ? 'Volver al blog' : 'Back to blog'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Comparativas' : 'Comparisons'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article7.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{language === 'es' ? 'Redacción:' : 'By:'} Alex Murillo + {language === 'es' ? 'Equipo de Soporte' : 'Support Team'}</span>
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
                  {t('articles.article7.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No todas las plataformas de gestión de WhatsApp son iguales. Cada una tiene fortalezas y debilidades. Veamos las diferencias clave.' : 'Not all WhatsApp management platforms are the same. Each has strengths and weaknesses. Let\'s look at the key differences.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Criterios de comparación' : 'Comparison criteria'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1. Enfoque principal' : '1. Main focus'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Plataformas especializadas en WhatsApp:' : 'WhatsApp-specialized platforms:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Wati, Chatwoot (versión WhatsApp)' : 'Wati, Chatwoot (WhatsApp version)'}</li>
                  <li><strong>{language === 'es' ? 'Ventaja:' : 'Advantage:'}</strong> {language === 'es' ? 'Características muy profundas de WhatsApp' : 'Very deep WhatsApp features'}</li>
                  <li><strong>{language === 'es' ? 'Desventaja:' : 'Disadvantage:'}</strong> {language === 'es' ? 'Limitadas a WhatsApp' : 'Limited to WhatsApp'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Plataformas omnicanal:' : 'Omnichannel platforms:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Intercom, Zendesk, Freshdesk' : 'Intercom, Zendesk, Freshdesk'}</li>
                  <li><strong>{language === 'es' ? 'Ventaja:' : 'Advantage:'}</strong> {language === 'es' ? 'Múltiples canales integrados' : 'Multiple integrated channels'}</li>
                  <li><strong>{language === 'es' ? 'Desventaja:' : 'Disadvantage:'}</strong> {language === 'es' ? 'Menos profundidad en WhatsApp específicamente' : 'Less depth in WhatsApp specifically'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Plataformas empresariales:' : 'Enterprise platforms:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird' : 'Twilio, MessageBird'}</li>
                  <li><strong>{language === 'es' ? 'Ventaja:' : 'Advantage:'}</strong> {language === 'es' ? 'Escalabilidad y confiabilidad' : 'Scalability and reliability'}</li>
                  <li><strong>{language === 'es' ? 'Desventaja:' : 'Disadvantage:'}</strong> {language === 'es' ? 'Más complejas y caras' : 'More complex and expensive'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2. Facilidad de uso' : '2. Ease of use'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Fácil (No técnico):' : 'Easy (Non-technical):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Wati, Intercom' : 'Wati, Intercom'}</li>
                  <li>{language === 'es' ? 'Interfaz intuitiva' : 'Intuitive interface'}</li>
                  <li>{language === 'es' ? 'Configuración sin código' : 'No-code setup'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Moderada (Algo técnico):' : 'Moderate (Somewhat technical):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Zendesk, Freshdesk' : 'Zendesk, Freshdesk'}</li>
                  <li>{language === 'es' ? 'Requiere algo de configuración' : 'Requires some configuration'}</li>
                  <li>{language === 'es' ? 'Documentación disponible' : 'Documentation available'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Compleja (Muy técnico):' : 'Complex (Very technical):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird' : 'Twilio, MessageBird'}</li>
                  <li>{language === 'es' ? 'Requiere programación' : 'Requires programming'}</li>
                  <li>{language === 'es' ? 'Mejor para desarrolladores' : 'Better for developers'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3. Automatización' : '3. Automation'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Automatización visual (Drag & Drop):' : 'Visual automation (Drag & Drop):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Wati, Chatbot Builder' : 'Wati, Chatbot Builder'}</li>
                  <li>{language === 'es' ? 'Creas flujos sin escribir código' : 'Create flows without writing code'}</li>
                  <li>{language === 'es' ? 'Mejor para no técnicos' : 'Better for non-technical users'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Automatización basada en código:' : 'Code-based automation:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird' : 'Twilio, MessageBird'}</li>
                  <li>{language === 'es' ? 'Más flexible pero requiere programación' : 'More flexible but requires programming'}</li>
                  <li>{language === 'es' ? 'Mejor para desarrolladores' : 'Better for developers'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Automatización limitada:' : 'Limited automation:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Algunas plataformas básicas' : 'Some basic platforms'}</li>
                  <li>{language === 'es' ? 'Solo automatización simple' : 'Only simple automation'}</li>
                  <li>{language === 'es' ? 'No apta para procesos complejos' : 'Not suitable for complex processes'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '4. Integraciones' : '4. Integrations'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Muchas integraciones (100+):' : 'Many integrations (100+):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Zapier, Make, Intercom' : 'Zapier, Make, Intercom'}</li>
                  <li>{language === 'es' ? 'Conecta con casi cualquier sistema' : 'Connects with almost any system'}</li>
                  <li>{language === 'es' ? 'Mejor para ecosistemas complejos' : 'Better for complex ecosystems'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Integraciones moderadas (20-50):' : 'Moderate integrations (20-50):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Wati, Zendesk' : 'Wati, Zendesk'}</li>
                  <li>{language === 'es' ? 'Cubre la mayoría de casos de uso' : 'Covers most use cases'}</li>
                  <li>{language === 'es' ? 'Suficiente para la mayoría de negocios' : 'Sufficient for most businesses'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Pocas integraciones (<20):' : 'Few integrations (<20):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Algunas plataformas básicas' : 'Some basic platforms'}</li>
                  <li>{language === 'es' ? 'Limitadas a funciones core' : 'Limited to core functions'}</li>
                  <li>{language === 'es' ? 'No apta si necesitas integraciones específicas' : 'Not suitable if you need specific integrations'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5. Precio' : '5. Price'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Económico ($0-500/mes):' : 'Economical ($0-500/month):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Wati (planes básicos)' : 'Wati (basic plans)'}</li>
                  <li>{language === 'es' ? 'Ideal para pequeños negocios' : 'Ideal for small businesses'}</li>
                  <li>{language === 'es' ? 'Funcionalidad limitada en planes bajos' : 'Limited functionality on low plans'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Moderado ($500-2,000/mes):' : 'Moderate ($500-2,000/month):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Intercom, Zendesk (planes medianos)' : 'Intercom, Zendesk (mid-level plans)'}</li>
                  <li>{language === 'es' ? 'Buena relación precio-valor' : 'Good price-value relationship'}</li>
                  <li>{language === 'es' ? 'Funcionalidad completa' : 'Complete functionality'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Premium ($2,000+/mes):' : 'Premium ($2,000+/month):'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird, soluciones enterprise' : 'Twilio, MessageBird, enterprise solutions'}</li>
                  <li>{language === 'es' ? 'Máxima escalabilidad' : 'Maximum scalability'}</li>
                  <li>{language === 'es' ? 'Mejor para grandes empresas' : 'Best for large companies'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '6. Escalabilidad' : '6. Scalability'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Baja Escalabilidad:' : 'Low Scalability:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Plataformas básicas' : 'Basic platforms'}</li>
                  <li>{language === 'es' ? 'Limitadas a pequeños volúmenes' : 'Limited to small volumes'}</li>
                  <li>{language === 'es' ? 'Problemas de rendimiento con crecimiento' : 'Performance issues with growth'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Media Escalabilidad:' : 'Medium Scalability:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Wati, Intercom' : 'Wati, Intercom'}</li>
                  <li>{language === 'es' ? 'Pueden manejar miles de conversaciones' : 'Can handle thousands of conversations'}</li>
                  <li>{language === 'es' ? 'Buena para empresas medianas' : 'Good for medium-sized companies'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Alta Escalabilidad:' : 'High Scalability:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird' : 'Twilio, MessageBird'}</li>
                  <li>{language === 'es' ? 'Millones de mensajes simultáneos' : 'Millions of simultaneous messages'}</li>
                  <li>{language === 'es' ? 'Infraestructura empresarial' : 'Enterprise infrastructure'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '7. Soporte' : '7. Support'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Soporte Básico:' : 'Basic Support:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Email, documentación' : 'Email, documentation'}</li>
                  <li>{language === 'es' ? 'Respuesta en 24-48 horas' : 'Response in 24-48 hours'}</li>
                  <li>{language === 'es' ? 'Mejor para empresas pequeñas' : 'Best for small companies'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Soporte Estándar:' : 'Standard Support:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Email, chat, documentación' : 'Email, chat, documentation'}</li>
                  <li>{language === 'es' ? 'Respuesta en 2-4 horas' : 'Response in 2-4 hours'}</li>
                  <li>{language === 'es' ? 'Mejor para empresas medianas' : 'Best for medium-sized companies'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Soporte Premium:' : 'Premium Support:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Teléfono, chat 24/7, gestor dedicado' : 'Phone, 24/7 chat, dedicated manager'}</li>
                  <li>{language === 'es' ? 'Respuesta inmediata' : 'Immediate response'}</li>
                  <li>{language === 'es' ? 'Mejor para empresas grandes' : 'Best for large companies'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '8. Características Avanzadas' : '8. Advanced Features'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'IA y Machine Learning:' : 'AI and Machine Learning:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Intercom, Zendesk' : 'Intercom, Zendesk'}</li>
                  <li>{language === 'es' ? 'Chatbots inteligentes' : 'Smart chatbots'}</li>
                  <li>{language === 'es' ? 'Análisis predictivo' : 'Predictive analytics'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Análisis Avanzados:' : 'Advanced Analytics:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird' : 'Twilio, MessageBird'}</li>
                  <li>{language === 'es' ? 'Reportes detallados' : 'Detailed reports'}</li>
                  <li>{language === 'es' ? 'Insights profundos' : 'Deep insights'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Seguridad Empresarial:' : 'Enterprise Security:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio, MessageBird' : 'Twilio, MessageBird'}</li>
                  <li>{language === 'es' ? 'Cumplimiento GDPR, HIPAA, etc.' : 'GDPR, HIPAA, etc. compliance'}</li>
                  <li>{language === 'es' ? 'Encriptación avanzada' : 'Advanced encryption'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Tabla Comparativa Resumida' : 'Summary Comparison Table'}
                </h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{language === 'es' ? 'Característica' : 'Feature'}</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Wati</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Intercom</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Zendesk</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Twilio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Facilidad' : 'Ease'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">2/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Automatización' : 'Automation'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Integraciones' : 'Integrations'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Precio' : 'Price'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Económico' : 'Economical'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Moderado' : 'Moderate'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Moderado' : 'Moderate'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Premium' : 'Premium'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Escalabilidad' : 'Scalability'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'IA' : 'AI'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Sí' : 'Yes'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Sí' : 'Yes'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Sí' : 'Yes'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Limitada' : 'Limited'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Soporte' : 'Support'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Bueno' : 'Good'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Muy Bueno' : 'Very Good'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Muy Bueno' : 'Very Good'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{language === 'es' ? 'Excelente' : 'Excellent'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Cómo Elegir' : 'How to Choose'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Para Pequeños Negocios (1-5 agentes)' : 'For Small Businesses (1-5 agents)'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Recomendación:' : 'Recommendation:'}</strong> Wati</li>
                  <li><strong>{language === 'es' ? 'Razón:' : 'Reason:'}</strong> {language === 'es' ? 'Fácil de usar, económico, suficientemente potente' : 'Easy to use, economical, sufficiently powerful'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Para Empresas Medianas (5-50 agentes)' : 'For Medium Companies (5-50 agents)'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Recomendación:' : 'Recommendation:'}</strong> Intercom o Zendesk</li>
                  <li><strong>{language === 'es' ? 'Razón:' : 'Reason:'}</strong> {language === 'es' ? 'Escalabilidad, características avanzadas, soporte' : 'Scalability, advanced features, support'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Para Grandes Empresas (50+ agentes)' : 'For Large Companies (50+ agents)'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Recomendación:' : 'Recommendation:'}</strong> Twilio o MessageBird</li>
                  <li><strong>{language === 'es' ? 'Razón:' : 'Reason:'}</strong> {language === 'es' ? 'Máxima escalabilidad, seguridad empresarial' : 'Maximum scalability, enterprise security'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Si Necesitas Múltiples Canales' : 'If You Need Multiple Channels'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Recomendación:' : 'Recommendation:'}</strong> Intercom o Zendesk</li>
                  <li><strong>{language === 'es' ? 'Razón:' : 'Reason:'}</strong> {language === 'es' ? 'Integración omnicanal' : 'Omnichannel integration'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Si Necesitas Máxima Automatización' : 'If You Need Maximum Automation'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Recomendación:' : 'Recommendation:'}</strong> Wati o Twilio</li>
                  <li><strong>{language === 'es' ? 'Razón:' : 'Reason:'}</strong> {language === 'es' ? 'Automatización visual o basada en código' : 'Visual or code-based automation'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No existe una plataforma "mejor" universalmente. La mejor plataforma es aquella que se ajusta a:' : 'There is no universally "best" platform. The best platform is one that fits:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Tu tamaño de negocio' : 'Your business size'}</li>
                  <li>{language === 'es' ? 'Tu presupuesto' : 'Your budget'}</li>
                  <li>{language === 'es' ? 'Tus necesidades técnicas' : 'Your technical needs'}</li>
                  <li>{language === 'es' ? 'Tu volumen de mensajes' : 'Your message volume'}</li>
                  <li>{language === 'es' ? 'Tus integraciones requeridas' : 'Your required integrations'}</li>
                  <li>{language === 'es' ? 'Tu nivel de soporte necesario' : 'Your required support level'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Te recomendamos:' : 'We recommend:'}
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Identifica tus 3 necesidades más críticas' : 'Identify your 3 most critical needs'}</li>
                  <li>{language === 'es' ? 'Prueba 2-3 plataformas (muchas ofrecen pruebas gratuitas)' : 'Test 2-3 platforms (many offer free trials)'}</li>
                  <li>{language === 'es' ? 'Compara precio vs. funcionalidad' : 'Compare price vs. functionality'}</li>
                  <li>{language === 'es' ? 'Elige la que mejor se ajuste' : 'Choose the one that best fits'}</li>
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La mayoría de empresas comienzan con una plataforma básica y evolucionan conforme crecen. No necesitas la solución más cara desde el inicio.' : 'Most companies start with a basic platform and evolve as they grow. You don\'t need the most expensive solution from the start.'}
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
                      href="/blog/por-que-necesito-plataforma-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Por que necesito una plataforma para administrar los chats de WhatsApp?' : 'Why do I need a platform to manage WhatsApp chats?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/cobro-plataformas-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?' : 'How do WhatsApp chat platforms charge?'}
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
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
                      <a href="/blog/diferencia-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
                      <a href="/blog/casos-uso-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
                      <a href="/blog/primeros-pasos-migrar-whatsapp-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
