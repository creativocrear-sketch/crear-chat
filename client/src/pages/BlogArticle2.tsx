import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";

export default function BlogArticle2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = "¿Para que me sirve WhatsApp Business API para mi negocio?";
    const text = "Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.";
    
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
                  Casos de Uso
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                ¿Para que me sirve WhatsApp Business API para mi negocio?
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>21 de Marzo de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min de lectura</span>
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
                  ¿Para que me sirve WhatsApp Business API para mi negocio?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp Business API es una herramienta transformadora que puede revolucionar la forma en que tu negocio se comunica con los clientes. Veamos cómo diferentes industrias pueden beneficiarse de esta poderosa plataforma.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Restaurantes: Optimiza tu Servicio al Cliente
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Caso de uso: Reservas y confirmaciones automáticas
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un restaurante puede usar WhatsApp Business API para:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Enviar confirmaciones automáticas de reservas</li>
                  <li>Recordar a los clientes su reserva 24 horas antes</li>
                  <li>Permitir que los clientes cambien o cancelen reservas directamente por WhatsApp</li>
                  <li>Informar sobre cambios en el menú o promociones especiales</li>
                  <li>Recibir pedidos para llevar y delivery</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Ejemplo práctico:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  El restaurante "La Buena Mesa" implementó WhatsApp Business API y redujo el número de no-shows (clientes que no llegan) en un 40%. Ahora, cuando un cliente hace una reserva, recibe automáticamente un mensaje de confirmación y un recordatorio el día anterior. Si el cliente no confirma, el restaurante puede liberar la mesa para otros clientes.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Con IA integrada:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un chatbot de IA puede responder preguntas sobre el menú, disponibilidad de mesas, horarios y restricciones dietéticas sin intervención humana, mejorando la experiencia del cliente y reduciendo carga de trabajo.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Hoteles: Mejora la Experiencia del Huésped
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Caso de uso: Comunicación pre-llegada y durante la estadía
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Los hoteles pueden utilizar WhatsApp Business API para:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Enviar confirmaciones de reserva con detalles de check-in</li>
                  <li>Proporcionar información sobre amenidades y servicios</li>
                  <li>Facilitar el check-in remoto</li>
                  <li>Responder consultas sobre servicios del hotel</li>
                  <li>Enviar ofertas de servicios adicionales (spa, restaurante, tours)</li>
                  <li>Recopilar feedback después del check-out</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Ejemplo práctico:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  El Hotel "Paraíso Tropical" implementó WhatsApp Business API y mejoró su satisfacción del cliente en un 35%. Los huéspedes reciben un mensaje de bienvenida con instrucciones de check-in, información sobre el WiFi, horarios de comidas y servicios disponibles. Durante la estadía, pueden solicitar servicios como toallas adicionales o información turística directamente por WhatsApp.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Con IA integrada:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un asistente de IA disponible 24/7 puede responder preguntas sobre servicios, hacer recomendaciones de restaurantes cercanos, y procesar solicitudes de servicio a la habitación automáticamente, mejorando significativamente la experiencia del huésped.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Cafés: Impulsa las Ventas y la Lealtad
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Caso de uso: Programas de fidelización y promociones
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Los cafés pueden usar WhatsApp Business API para:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Notificar sobre bebidas y pasteles nuevos</li>
                  <li>Enviar promociones y descuentos personalizados</li>
                  <li>Permitir pre-pedidos para recoger</li>
                  <li>Crear programas de puntos y recompensas</li>
                  <li>Informar sobre eventos especiales (catas de café, talleres)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Ejemplo práctico:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  El café "Aroma Perfecto" creó un programa de fidelización en WhatsApp donde cada compra suma puntos. Los clientes reciben automáticamente mensajes sobre promociones personalizadas basadas en sus compras anteriores. Las ventas aumentaron un 25% en los primeros tres meses.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Con IA integrada:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un sistema de IA puede analizar preferencias de compra y enviar recomendaciones personalizadas (por ejemplo, "Vimos que te encanta el café de origen único, tenemos uno nuevo de Colombia"). También puede procesar pre-pedidos automáticamente y confirmar horarios de recogida.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Oficinas de Abogados: Mejora la Comunicación Legal
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Caso de uso: Comunicación segura con clientes
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Las oficinas de abogados pueden utilizar WhatsApp Business API para:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Enviar actualizaciones sobre casos de forma segura</li>
                  <li>Recordar fechas importantes de audiencias o plazos</li>
                  <li>Facilitar la firma electrónica de documentos</li>
                  <li>Responder consultas legales frecuentes</li>
                  <li>Programar citas con abogados</li>
                  <li>Enviar documentos y notificaciones legales</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Ejemplo práctico:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  El despacho "Justicia Legal" implementó WhatsApp Business API para comunicarse con sus clientes. Ahora, cuando hay una actualización importante en un caso, el cliente recibe un mensaje automático. Los clientes también pueden programar citas directamente por WhatsApp, reduciendo llamadas telefónicas en un 60%.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Con IA integrada:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un chatbot legal puede responder preguntas frecuentes sobre procesos legales, plazos, y documentación requerida. También puede triagear consultas y dirigirlas al abogado apropiado, mejorando la eficiencia del despacho.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Oficinas de Cobros y Recaudo: Optimiza tu Gestión de Cobranza
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Caso de uso: Comunicación efectiva de cobros
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Las oficinas de cobros pueden usar WhatsApp Business API para:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Enviar recordatorios de pago automáticos</li>
                  <li>Facilitar pagos directos a través de enlaces de pago</li>
                  <li>Comunicar cambios en planes de pago</li>
                  <li>Responder consultas sobre deudas</li>
                  <li>Enviar comprobantes de pago automáticamente</li>
                  <li>Realizar seguimiento de pagos programados</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Ejemplo práctico:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  La empresa de cobros "Recaudo Efectivo" implementó WhatsApp Business API y aumentó su tasa de recuperación de cartera en un 45%. Los deudores reciben recordatorios automáticos personalizados según el estado de su deuda. Cuando un cliente realiza un pago, recibe automáticamente un comprobante por WhatsApp, mejorando la confianza y transparencia.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Con IA integrada:
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un sistema de IA puede analizar patrones de pago y enviar recordatorios en el momento óptimo. También puede procesar planes de pago automáticamente, permitiendo que los clientes negocie términos sin intervención humana, mejorando significativamente la recuperación de cartera.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Beneficios Transversales
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Independientemente de tu industria, WhatsApp Business API ofrece:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Reducción de costos: Menos llamadas telefónicas y correos electrónicos</li>
                  <li>Mejora en la satisfacción del cliente: Respuestas rápidas y personalizadas</li>
                  <li>Aumento en conversión: Comunicación oportuna y relevante</li>
                  <li>Automatización: Procesos sin intervención humana</li>
                  <li>Escalabilidad: Maneja miles de conversaciones simultáneamente</li>
                  <li>Datos y análisis: Comprende mejor el comportamiento de tus clientes</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp Business API no es solo una herramienta de comunicación, es un catalizador de transformación digital. Ya sea que dirijas un restaurante, hotel, café, despacho legal u oficina de cobros, esta plataforma puede mejorar significativamente tu eficiencia operativa y satisfacción del cliente.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  La inversión en WhatsApp Business API se traduce en mejores resultados comerciales, clientes más satisfechos y operaciones más eficientes.
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
