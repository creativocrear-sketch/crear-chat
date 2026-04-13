import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle8() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article8.title');
    const text = t('articles.article8.shareText');
    
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
                  Precios
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                ¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>21 de Marzo de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 min de lectura</span>
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
                  ¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Entender los modelos de precios es crucial para elegir la plataforma correcta. Veamos cómo cobran las diferentes plataformas.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Modelos de Precios Principales
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  1. Suscripción Mensual Fija
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Cómo funciona:</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pagas una cantidad fija cada mes, independientemente del uso.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ejemplos:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Crear.chat: $99-$499/mes</li>
                  <li>Wati: $25-$299/mes</li>
                  <li>Intercom: $99-$999/mes</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Presupuesto predecible</li>
                  <li>Acceso a todas las características</li>
                  <li>Escalabilidad sin costos adicionales</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Desventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Pagas igual aunque uses poco</li>
                  <li>Puede ser caro para grandes volúmenes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Mejor para:</strong> Empresas con uso consistente
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  2. Pago por Mensajes
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Cómo funciona:</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pagas según la cantidad de mensajes enviados o recibidos.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ejemplos:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Twilio: $0.0075 por mensaje</li>
                  <li>MessageBird: $0.01-$0.05 por mensaje</li>
                  <li>Algunos planes de Zendesk</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Pagas solo por lo que usas</li>
                  <li>Ideal para bajo volumen</li>
                  <li>Escalable</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Desventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Costos impredecibles</li>
                  <li>Puede ser caro con alto volumen</li>
                  <li>Incentiva a no automatizar</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Mejor para:</strong> Empresas con bajo volumen o uso variable
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  3. Suscripción + Pago por Uso
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Cómo funciona:</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pagas una suscripción base + costo adicional por mensajes o características premium.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ejemplos:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Algunos planes de Intercom</li>
                  <li>Algunos planes de Zendesk</li>
                  <li>Algunos planes de Crear.chat</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Flexibilidad</li>
                  <li>Presupuesto base predecible</li>
                  <li>Escalabilidad</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Desventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Más complejo de entender</li>
                  <li>Posibles sorpresas en la factura</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Mejor para:</strong> Empresas con uso moderado y variable
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  4. Pago por Agentes/Usuarios
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Cómo funciona:</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pagas según la cantidad de agentes que pueden usar la plataforma.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ejemplos:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Zendesk: $49-$149 por agente/mes</li>
                  <li>Intercom: Incluido en suscripción</li>
                  <li>Algunos planes de Freshdesk</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Fácil de predecir costos</li>
                  <li>Escalable con el equipo</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Desventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Caro cuando creces</li>
                  <li>Incentiva a no contratar</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Mejor para:</strong> Empresas con equipo estable
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  5. Modelo Freemium
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Cómo funciona:</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Versión gratuita limitada + planes pagos para más funciones.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ejemplos:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Chatwoot (versión community)</li>
                  <li>Algunos planes de Crear.chat</li>
                  <li>Algunas plataformas básicas</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Ventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Prueba sin riesgo</li>
                  <li>Bajo costo inicial</li>
                  <li>Ideal para empezar</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Desventajas:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Funcionalidad limitada en versión gratuita</li>
                  <li>Limitaciones de usuarios/mensajes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Mejor para:</strong> Startups y pequeños negocios
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Componentes de Precios
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Además del modelo principal, considera estos componentes:
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Costo de Mensajes de WhatsApp
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp cobra a las plataformas por cada mensaje enviado:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Mensajes entrantes: Generalmente gratuitos</li>
                  <li>Mensajes salientes: $0.0075 - $0.10 por mensaje (varía por país)</li>
                  <li>Plantillas: Más baratas que mensajes normales</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Algunas plataformas incluyen esto en su suscripción, otras lo cobran por separado.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Costo de Integración
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Algunas plataformas cobran por:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Integración con CRM: $50-$200/mes</li>
                  <li>Integración con e-commerce: $50-$150/mes</li>
                  <li>Integraciones personalizadas: $500+</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Costo de Automatización
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Chatbots básicos: Incluido</li>
                  <li>Chatbots con IA: $100-$500/mes adicional</li>
                  <li>Automatización avanzada: Personalizado</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Costo de Soporte
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Soporte por email: Incluido</li>
                  <li>Soporte por chat: Incluido o $50-$100/mes</li>
                  <li>Soporte por teléfono: $200-$500/mes</li>
                  <li>Gestor dedicado: $1,000+/mes</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Ejemplos de Costos Mensuales Reales
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Pequeño Negocio (100 conversaciones/mes)
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Con Crear.chat:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Suscripción: $99/mes</li>
                  <li>Mensajes WhatsApp: ~$0.75/mes</li>
                  <li><strong>Total: ~$100/mes</strong></li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Con Twilio:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Suscripción: $0</li>
                  <li>Mensajes: 100 × $0.0075 = $0.75/mes</li>
                  <li><strong>Total: ~$1/mes</strong> (pero sin interfaz de usuario)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Negocio Mediano (10,000 conversaciones/mes)
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Con Crear.chat:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Suscripción: $299/mes</li>
                  <li>Mensajes WhatsApp: ~$75/mes</li>
                  <li><strong>Total: ~$375/mes</strong></li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Con Intercom:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Suscripción: $500/mes</li>
                  <li>Agentes (3): $147 × 3 = $441/mes</li>
                  <li><strong>Total: ~$941/mes</strong></li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Negocio Grande (100,000 conversaciones/mes)
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Con Twilio:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Suscripción: $0</li>
                  <li>Mensajes: 100,000 × $0.0075 = $750/mes</li>
                  <li>Soporte: $500/mes</li>
                  <li><strong>Total: ~$1,250/mes</strong></li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Con Zendesk:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Suscripción: $1,000/mes</li>
                  <li>Agentes (10): $99 × 10 = $990/mes</li>
                  <li><strong>Total: ~$1,990/mes</strong></li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Cómo Calcular tu Costo
                </h3>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Estima tu volumen mensual:</strong> ¿Cuántos mensajes enviarás/recibirás?</li>
                  <li><strong>Elige el modelo:</strong> ¿Suscripción fija o pago por uso?</li>
                  <li><strong>Suma componentes:</strong> Integraciones, soporte, automatización</li>
                  <li><strong>Compara opciones:</strong> Usa calculadoras de precios</li>
                  <li><strong>Solicita presupuesto:</strong> Las plataformas pueden negociar</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Consejos para Ahorrar
                </h3>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Comienza con plan básico:</strong> Puedes escalar después</li>
                  <li><strong>Automatiza procesos:</strong> Reduce necesidad de agentes</li>
                  <li><strong>Usa plantillas:</strong> Son más baratas que mensajes normales</li>
                  <li><strong>Negocia volumen:</strong> Plataformas ofrecen descuentos por volumen</li>
                  <li><strong>Revisa regularmente:</strong> Ajusta según tu uso real</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  No existe un "precio correcto" universal. El mejor precio es el que:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Se ajusta a tu presupuesto</li>
                  <li>Cubre tus necesidades</li>
                  <li>Escala con tu crecimiento</li>
                  <li>Ofrece buen ROI</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  La mayoría de plataformas ofrecen pruebas gratuitas. Úsalas para entender mejor cómo cobran y qué esperar en tu caso específico.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Recuerda: el precio más bajo no siempre es la mejor opción. A veces, pagar más por mejor soporte y características puede ahorrar dinero a largo plazo.
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
                      href="/blog/articulo-7"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿En que se diferencian las plataformas que administran los chat de WhatsApp?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-9"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?
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
