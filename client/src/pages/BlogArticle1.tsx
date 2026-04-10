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
                  ¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  En el mundo empresarial actual, WhatsApp se ha convertido en una herramienta fundamental para la comunicación con clientes. Sin embargo, muchas empresas se confunden entre WhatsApp Business y WhatsApp Business API. Aunque ambas son soluciones de WhatsApp, tienen diferencias significativas que es importante entender.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  WhatsApp Business: La Solución Básica
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp Business es una aplicación móvil gratuita diseñada para pequeños negocios. Es la versión simplificada de WhatsApp que permite a los empresarios crear un perfil de negocio con información como horarios de atención, ubicación y descripción del negocio.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Características principales de WhatsApp Business:
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Perfil de negocio con información empresarial</li>
                  <li>Etiquetas para organizar conversaciones</li>
                  <li>Mensajes automáticos de bienvenida y ausencia</li>
                  <li>Estadísticas básicas de mensajes</li>
                  <li>Disponible solo en dispositivos móviles</li>
                  <li>Gratuito</li>
                  <li>Limitado a un solo dispositivo por número</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Esta solución es ideal para pequeños negocios que necesitan una presencia básica en WhatsApp sin requerimientos complejos de automatización.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  WhatsApp Business API: La Solución Empresarial
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp Business API es una solución robusta y escalable diseñada para empresas medianas y grandes. A diferencia de WhatsApp Business, la API permite la integración con sistemas empresariales, automatización de procesos y gestión masiva de conversaciones.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Características principales de WhatsApp Business API:
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Integración con sistemas empresariales (CRM, ERP, etc.)</li>
                  <li>Automatización de mensajes y flujos de conversación</li>
                  <li>Gestión de múltiples agentes desde una plataforma centralizada</li>
                  <li>Plantillas de mensajes preaprobadas</li>
                  <li>Webhooks para integración con aplicaciones externas</li>
                  <li>Acceso a través de API REST</li>
                  <li>Soporte para números de negocio dedicados</li>
                  <li>Análisis avanzados y reportes detallados</li>
                  <li>Escalabilidad para miles de conversaciones simultáneas</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Comparativa Directa
                </h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Característica</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">WhatsApp Business</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">WhatsApp Business API</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Costo</td>
                        <td className="border border-gray-300 px-4 py-2">Gratuito</td>
                        <td className="border border-gray-300 px-4 py-2">Pago por mensajes</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Dispositivos</td>
                        <td className="border border-gray-300 px-4 py-2">Solo móvil</td>
                        <td className="border border-gray-300 px-4 py-2">Basado en la nube</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Automatización</td>
                        <td className="border border-gray-300 px-4 py-2">Limitada</td>
                        <td className="border border-gray-300 px-4 py-2">Completa</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Integración</td>
                        <td className="border border-gray-300 px-4 py-2">No</td>
                        <td className="border border-gray-300 px-4 py-2">Sí</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Escalabilidad</td>
                        <td className="border border-gray-300 px-4 py-2">Baja</td>
                        <td className="border border-gray-300 px-4 py-2">Alta</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Soporte empresarial</td>
                        <td className="border border-gray-300 px-4 py-2">No</td>
                        <td className="border border-gray-300 px-4 py-2">Sí</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Plantillas de mensajes</td>
                        <td className="border border-gray-300 px-4 py-2">No</td>
                        <td className="border border-gray-300 px-4 py-2">Sí</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Análisis</td>
                        <td className="border border-gray-300 px-4 py-2">Básicos</td>
                        <td className="border border-gray-300 px-4 py-2">Avanzados</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Número de usuarios</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Múltiples</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  ¿Cuál elegir?
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Elige WhatsApp Business si:
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Tu negocio es pequeño (menos de 5 empleados)</li>
                  <li>No necesitas automatización avanzada</li>
                  <li>Tu presupuesto es muy limitado</li>
                  <li>Tus conversaciones son principalmente manuales</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Elige WhatsApp Business API si:
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Tu empresa es mediana o grande</li>
                  <li>Necesitas automatizar procesos</li>
                  <li>Requieres integración con otros sistemas</li>
                  <li>Manejas alto volumen de conversaciones</li>
                  <li>Necesitas reportes y análisis detallados</li>
                  <li>Quieres escalar tu operación</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Mientras que WhatsApp Business es perfecta para emprendedores y pequeños negocios que buscan una solución simple, WhatsApp Business API es la opción ideal para empresas que desean transformar digitalmente su comunicación con clientes. La API permite automatizar procesos, mejorar la experiencia del cliente y escalar operaciones de manera eficiente.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  La inversión en WhatsApp Business API se justifica rápidamente a través de la reducción de costos operativos, mejora en la satisfacción del cliente y aumento en la conversión de ventas.
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Compartir:</h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-2"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Para que me sirve WhatsApp Business API para mi negocio?
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
                  ¿Listo para implementar WhatsApp Business API?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Contáctame para una consulta personalizada sobre cómo automatizar tu negocio con WhatsApp Business API.
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
                  Escribeme por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-8">Otros artículos</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      Casos de Uso
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Para que me sirve WhatsApp Business API para mi negocio?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>8 min</span>
                      <a href="/blog/articulo-2" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      Implementación
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Cuáles son los primeros pasos para migrar WhatsApp Business API?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>7 min</span>
                      <a href="/blog/articulo-3" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      Tendencias
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Qué beneficios tengo usando WhatsApp Business API + IA?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>6 min</span>
                      <a href="/blog/articulo-4" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
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
