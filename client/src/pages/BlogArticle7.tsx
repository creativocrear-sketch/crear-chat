import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";

export default function BlogArticle7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = "¿Cuáles son las diferencias entre plataformas que administran chats de WhatsApp?";
    const text = "Análisis comparativo completo de plataformas para administrar WhatsApp Business API.";
    
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
                Volver al blog
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  Comparativas
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                ¿En que se diferencian las plataformas que administran los chat de WhatsApp?
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>21 de Marzo de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 min de lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Redacción: Alex Murillo + Equipo de Soporte</span>
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
                  ¿En que se diferencian las plataformas que administran los chat de WhatsApp?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  No todas las plataformas de gestión de WhatsApp son iguales. Cada una tiene fortalezas y debilidades. Veamos las diferencias clave.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Criterios de Comparación
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  1. Enfoque Principal
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Plataformas Especializadas en WhatsApp:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Wati, Chatwoot (versión WhatsApp)</li>
                  <li><strong>Ventaja:</strong> Características muy profundas de WhatsApp</li>
                  <li><strong>Desventaja:</strong> Limitadas a WhatsApp</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Plataformas Omnicanal:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Intercom, Zendesk, Freshdesk</li>
                  <li><strong>Ventaja:</strong> Múltiples canales integrados</li>
                  <li><strong>Desventaja:</strong> Menos profundidad en WhatsApp específicamente</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Plataformas Empresariales:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird</li>
                  <li><strong>Ventaja:</strong> Escalabilidad y confiabilidad</li>
                  <li><strong>Desventaja:</strong> Más complejas y caras</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  2. Facilidad de Uso
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Fácil (No técnico):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Wati, Intercom</li>
                  <li>Interfaz intuitiva</li>
                  <li>Configuración sin código</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Moderada (Algo técnico):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Zendesk, Freshdesk</li>
                  <li>Requiere algo de configuración</li>
                  <li>Documentación disponible</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Compleja (Muy técnico):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird</li>
                  <li>Requiere programación</li>
                  <li>Mejor para desarrolladores</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  3. Automatización
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Automatización Visual (Drag & Drop):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Wati, Chatbot Builder</li>
                  <li>Creas flujos sin escribir código</li>
                  <li>Mejor para no técnicos</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Automatización Basada en Código:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird</li>
                  <li>Más flexible pero requiere programación</li>
                  <li>Mejor para desarrolladores</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Automatización Limitada:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Algunas plataformas básicas</li>
                  <li>Solo automatización simple</li>
                  <li>No apta para procesos complejos</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  4. Integraciones
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Muchas Integraciones (100+):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Zapier, Make, Intercom</li>
                  <li>Conecta con casi cualquier sistema</li>
                  <li>Mejor para ecosistemas complejos</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Integraciones Moderadas (20-50):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Wati, Zendesk</li>
                  <li>Cubre la mayoría de casos de uso</li>
                  <li>Suficiente para la mayoría de negocios</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Pocas Integraciones (&lt;20):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Algunas plataformas básicas</li>
                  <li>Limitadas a funciones core</li>
                  <li>No apta si necesitas integraciones específicas</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  5. Precio
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Económico ($0-500/mes):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Wati (planes básicos)</li>
                  <li>Ideal para pequeños negocios</li>
                  <li>Funcionalidad limitada en planes bajos</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Moderado ($500-2,000/mes):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Intercom, Zendesk (planes medianos)</li>
                  <li>Buena relación precio-valor</li>
                  <li>Funcionalidad completa</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Premium ($2,000+/mes):</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird, soluciones enterprise</li>
                  <li>Máxima escalabilidad</li>
                  <li>Mejor para grandes empresas</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  6. Escalabilidad
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Baja Escalabilidad:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Plataformas básicas</li>
                  <li>Limitadas a pequeños volúmenes</li>
                  <li>Problemas de rendimiento con crecimiento</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Media Escalabilidad:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Wati, Intercom</li>
                  <li>Pueden manejar miles de conversaciones</li>
                  <li>Buena para empresas medianas</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Alta Escalabilidad:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird</li>
                  <li>Millones de mensajes simultáneos</li>
                  <li>Infraestructura empresarial</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  7. Soporte
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Soporte Básico:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Email, documentación</li>
                  <li>Respuesta en 24-48 horas</li>
                  <li>Mejor para empresas pequeñas</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Soporte Estándar:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Email, chat, documentación</li>
                  <li>Respuesta en 2-4 horas</li>
                  <li>Mejor para empresas medianas</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Soporte Premium:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Teléfono, chat 24/7, gestor dedicado</li>
                  <li>Respuesta inmediata</li>
                  <li>Mejor para empresas grandes</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  8. Características Avanzadas
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>IA y Machine Learning:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Intercom, Zendesk</li>
                  <li>Chatbots inteligentes</li>
                  <li>Análisis predictivo</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Análisis Avanzados:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird</li>
                  <li>Reportes detallados</li>
                  <li>Insights profundos</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Seguridad Empresarial:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio, MessageBird</li>
                  <li>Cumplimiento GDPR, HIPAA, etc.</li>
                  <li>Encriptación avanzada</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Tabla Comparativa Resumida
                </h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Característica</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Wati</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Intercom</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Zendesk</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Twilio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Facilidad</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">2/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Automatización</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Integraciones</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Precio</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Económico</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Moderado</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Moderado</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Premium</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Escalabilidad</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5/5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">IA</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Sí</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Sí</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Sí</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Limitada</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Soporte</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Bueno</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Muy Bueno</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Muy Bueno</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Excelente</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Cómo Elegir
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Para Pequeños Negocios (1-5 agentes)
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Recomendación:</strong> Wati</li>
                  <li><strong>Razón:</strong> Fácil de usar, económico, suficientemente potente</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Para Empresas Medianas (5-50 agentes)
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Recomendación:</strong> Intercom o Zendesk</li>
                  <li><strong>Razón:</strong> Escalabilidad, características avanzadas, soporte</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Para Grandes Empresas (50+ agentes)
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Recomendación:</strong> Twilio o MessageBird</li>
                  <li><strong>Razón:</strong> Máxima escalabilidad, seguridad empresarial</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Si Necesitas Múltiples Canales
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Recomendación:</strong> Intercom o Zendesk</li>
                  <li><strong>Razón:</strong> Integración omnicanal</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Si Necesitas Máxima Automatización
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Recomendación:</strong> Wati o Twilio</li>
                  <li><strong>Razón:</strong> Automatización visual o basada en código</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  No existe una plataforma "mejor" universalmente. La mejor plataforma es aquella que se ajusta a:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Tu tamaño de negocio</li>
                  <li>Tu presupuesto</li>
                  <li>Tus necesidades técnicas</li>
                  <li>Tu volumen de mensajes</li>
                  <li>Tus integraciones requeridas</li>
                  <li>Tu nivel de soporte necesario</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Te recomendamos:
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Identifica tus 3 necesidades más críticas</li>
                  <li>Prueba 2-3 plataformas (muchas ofrecen pruebas gratuitas)</li>
                  <li>Compara precio vs. funcionalidad</li>
                  <li>Elige la que mejor se ajuste</li>
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  La mayoría de empresas comienzan con una plataforma básica y evolucionan conforme crecen. No necesitas la solución más cara desde el inicio.
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
                    <p className="text-sm text-gray-500 mb-1">Artículo anterior</p>
                    <a
                      href="/blog/articulo-6"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Por que necesito una plataforma para administrar los chats de WhatsApp?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-8"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?
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
                      Conceptos Básicos
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min</span>
                      <a href="/blog/articulo-1" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
