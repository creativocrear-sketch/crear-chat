import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle1() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article1.title');
    const text = t('articles.article1.shareText');
    
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
                  {language === 'es' ? 'Conceptos Básicos' : 'Basic Concepts'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article1.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 {t('common.readTime')}</span>
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
                  {t('articles.article1.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article1.content.intro')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('articles.article1.content.basicTitle')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article1.content.basicDesc')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {t('articles.article1.content.basicFeatures')}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Perfil de negocio con información empresarial',
                    'Etiquetas para organizar conversaciones',
                    'Mensajes automáticos de bienvenida y ausencia',
                    'Estadísticas básicas de mensajes',
                    'Disponible solo en dispositivos móviles',
                    'Gratuito',
                    'Limitado a un solo dispositivo por número'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Business profile with business information',
                    'Labels to organize conversations',
                    'Automatic welcome and away messages',
                    'Basic message statistics',
                    'Available only on mobile devices',
                    'Free',
                    'Limited to one device per number'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article1.content.basicConclusion')}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('articles.article1.content.apiTitle')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('articles.article1.content.apiDesc')}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {t('articles.article1.content.apiFeatures')}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Integración con sistemas empresariales (CRM, ERP, etc.)',
                    'Automatización de mensajes y flujos de conversación',
                    'Gestión de múltiples agentes desde una plataforma centralizada',
                    'Plantillas de mensajes preaprobadas',
                    'Webhooks para integración con aplicaciones externas',
                    'Acceso a través de API REST',
                    'Soporte para números de negocio dedicados',
                    'Análisis avanzados y reportes detallados',
                    'Escalabilidad para miles de conversaciones simultáneas'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Integration with business systems (CRM, ERP, etc.)',
                    'Message automation and conversation flows',
                    'Multiple agent management from centralized platform',
                    'Pre-approved message templates',
                    'Webhooks for integration with external applications',
                    'Access through REST API',
                    'Support for dedicated business numbers',
                    'Advanced analytics and detailed reports',
                    'Scalability for thousands of simultaneous conversations'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {t('articles.article1.content.comparisonTitle')}
                </h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{t('articles.article1.content.comparisonTable.feature')}</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{t('articles.article1.content.comparisonTable.basic')}</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{t('articles.article1.content.comparisonTable.api')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.cost')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.costBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.costApi')}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.devices')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.devicesBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.devicesApi')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.automation')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.automationBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.automationApi')}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.integration')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.integrationBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.integrationApi')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.scalability')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.scalabilityBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.scalabilityApi')}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.businessSupport')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.businessSupportBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.businessSupportApi')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.messageTemplates')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.messageTemplatesBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.messageTemplatesApi')}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.analytics')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.analyticsBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.analyticsApi')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.numberOfUsers')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.numberOfUsersBasic')}</td>
                        <td className="border border-gray-300 px-4 py-2">{t('articles.article1.content.comparisonTable.numberOfUsersApi')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Cuál elegir?' : 'Which one to choose?'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Elige WhatsApp Business si:' : 'Choose WhatsApp Business if:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Tu negocio es pequeño (menos de 5 empleados)' : 'Your business is small (less than 5 employees)'}</li>
                  <li>{language === 'es' ? 'No necesitas automatización avanzada' : 'You don\'t need advanced automation'}</li>
                  <li>{language === 'es' ? 'Tu presupuesto es muy limitado' : 'Your budget is very limited'}</li>
                  <li>{language === 'es' ? 'Tus conversaciones son principalmente manuales' : 'Your conversations are mainly manual'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Elige WhatsApp Business API si:' : 'Choose WhatsApp Business API if:'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Necesitas automatizar procesos' : 'You need to automate processes'}</li>
                  <li>{language === 'es' ? 'Requieres integración con otros sistemas' : 'You require integration with other systems'}</li>
                  <li>{language === 'es' ? 'Manejas alto volumen de conversaciones' : 'You handle high conversation volume'}</li>
                  <li>{language === 'es' ? 'Necesitas reportes y análisis detallados' : 'You need detailed reports and analytics'}</li>
                  <li>{language === 'es' ? 'Quieres escalar tu operación' : 'You want to scale your operation'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Mientras que WhatsApp Business es perfecta para emprendedores y pequeños negocios que buscan una solución simple, WhatsApp Business API es la opción ideal para empresas que desean transformar digitalmente su comunicación con clientes. La API permite automatizar procesos, mejorar la experiencia del cliente y escalar operaciones de manera eficiente.' : 'While WhatsApp Business is perfect for entrepreneurs and small businesses looking for a simple solution, WhatsApp Business API is the ideal option for companies that want to digitally transform their customer communication. The API allows automating processes, improving customer experience, and scaling operations efficiently.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La inversión en WhatsApp Business API se justifica rápidamente a través de la reducción de costos operativos, mejora en la satisfacción del cliente y aumento en la conversión de ventas.' : 'The investment in WhatsApp Business API is quickly justified through reduction in operational costs, improvement in customer satisfaction, and increase in sales conversion.'}
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
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/casos-uso-whatsapp-business-api"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Para que me sirve WhatsApp Business API para mi negocio?' : 'What is WhatsApp Business API useful for in my business?'}
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
                      {language === 'es' ? 'Casos de uso' : 'Use cases'}
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
                      <a href="/blog/beneficios-whatsapp-business-api-ia" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
