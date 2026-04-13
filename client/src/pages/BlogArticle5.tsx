import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle5() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article5.title');
    const text = t('articles.article5.shareText');
    
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
                  Integraciones
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                ¿Con que plataformas puedo integrar el WhatsApp Business API?
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
                  ¿Con que plataformas puedo integrar el WhatsApp Business API?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Una de las mayores fortalezas de WhatsApp Business API es su capacidad de integrarse con prácticamente cualquier sistema empresarial. Veamos las integraciones más comunes y útiles.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Sistemas CRM
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Los CRM son esenciales para gestionar relaciones con clientes:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Salesforce: Sincroniza conversaciones de WhatsApp con registros de clientes</li>
                  <li>HubSpot: Integra chats de WhatsApp en tu pipeline de ventas</li>
                  <li>Pipedrive: Conecta mensajes con oportunidades de venta</li>
                  <li>Zoho CRM: Automatiza seguimiento de clientes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Toda la comunicación con clientes en un solo lugar.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Plataformas de E-commerce
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para negocios que venden en línea:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Shopify: Notificaciones de pedidos y seguimiento</li>
                  <li>WooCommerce: Integración directa con tienda WordPress</li>
                  <li>Magento: Sincronización de órdenes y clientes</li>
                  <li>PrestaShop: Actualizaciones de estado de envío</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Los clientes reciben actualizaciones automáticas de sus compras.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Sistemas de Reservas
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfectos para hoteles, restaurantes y servicios:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Booking.com: Sincronización de reservas</li>
                  <li>Airbnb: Comunicación con huéspedes</li>
                  <li>Calendly: Programación de citas</li>
                  <li>Acuity Scheduling: Gestión de horarios</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Confirmaciones y recordatorios automáticos.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Plataformas de Pago
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para facilitar transacciones:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Stripe: Procesar pagos directamente</li>
                  <li>PayPal: Integración de pagos</li>
                  <li>Mercado Pago: Soluciones de pago latinoamericanas</li>
                  <li>Wompi: Pagos en línea</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Los clientes pueden pagar directamente por WhatsApp.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Google Workspace
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para productividad empresarial:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Google Sheets: Sincronización de datos</li>
                  <li>Google Calendar: Integración de calendarios</li>
                  <li>Gmail: Notificaciones en correo</li>
                  <li>Google Forms: Recopilación de datos</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Automatización de procesos administrativos.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Plataformas de Email Marketing
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para comunicación masiva:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Mailchimp: Sincronización de listas</li>
                  <li>Brevo (Sendinblue): Integración omnicanal</li>
                  <li>ActiveCampaign: Automatización de marketing</li>
                  <li>Klaviyo: Segmentación de clientes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Comunicación coordinada en múltiples canales.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Sistemas de Facturación
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para gestión financiera:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Facturación Electrónica: Envío de facturas por WhatsApp</li>
                  <li>Contabilidad en Línea: Sincronización de datos</li>
                  <li>SAP: Integración empresarial</li>
                  <li>Oracle: Sistemas grandes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Documentos fiscales entregados automáticamente.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Plataformas de Automatización
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para workflows complejos:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Zapier: Conecta WhatsApp con cientos de apps</li>
                  <li>Make (Integromat): Automatización visual</li>
                  <li>n8n: Automatización de código abierto</li>
                  <li>IFTTT: Automatización simple</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Posibilidades ilimitadas de automatización.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Sistemas de Gestión de Recursos Humanos
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para empresas medianas y grandes:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>BambooHR: Gestión de empleados</li>
                  <li>Workday: Recursos humanos empresariales</li>
                  <li>ADP: Nómina y RRHH</li>
                  <li>Guidepoint: Gestión de talento</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Comunicación interna automatizada.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Plataformas de Análisis
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para entender tus datos:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Google Analytics: Seguimiento de conversiones</li>
                  <li>Tableau: Visualización de datos</li>
                  <li>Power BI: Análisis empresarial</li>
                  <li>Mixpanel: Análisis de eventos</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Insights profundos sobre el comportamiento del cliente.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Sistemas de Gestión de Inventario
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para control de stock:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Shopify Inventory: Sincronización de stock</li>
                  <li>Odoo: ERP completo</li>
                  <li>NetSuite: Gestión empresarial</li>
                  <li>Infor: Sistemas de negocio</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Notificaciones automáticas de disponibilidad.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Plataformas de Soporte al Cliente
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para gestión de tickets:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Zendesk: Integración de chats</li>
                  <li>Freshdesk: Gestión de soporte</li>
                  <li>Intercom: Comunicación con clientes</li>
                  <li>Jira Service Management: Gestión de incidentes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Beneficio:</strong> Todos los canales de soporte en una plataforma.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Integraciones Personalizadas
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Si tu sistema no está en esta lista, no te preocupes:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Casi cualquier plataforma puede integrarse a través de APIs</li>
                  <li>Webhooks permiten comunicación bidireccional</li>
                  <li>APIs REST permiten envío y recepción de datos</li>
                  <li>Desarrolladores pueden crear integraciones personalizadas</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Cómo Elegir tus Integraciones
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Considera estos factores:
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Prioridad:</strong> ¿Qué sistemas son más críticos para tu negocio?</li>
                  <li><strong>Complejidad:</strong> ¿Qué tan compleja es la integración?</li>
                  <li><strong>Costo:</strong> ¿Hay costos adicionales de integración?</li>
                  <li><strong>Soporte:</strong> ¿Hay documentación disponible?</li>
                  <li><strong>Mantenimiento:</strong> ¿Requiere mantenimiento continuo?</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  La verdadera potencia de WhatsApp Business API reside en su capacidad de integrarse con tu ecosistema empresarial existente. No necesitas reemplazar tus sistemas actuales, simplemente conéctalos a través de WhatsApp para una experiencia unificada.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  La mayoría de empresas comienzan con 2-3 integraciones clave y luego expanden gradualmente. No intentes integrar todo de una vez; comienza con lo que más impacto tendrá en tu negocio.
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
                      href="/blog/articulo-4"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Qué beneficios tengo usando WhatsApp Business API + IA?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-6"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Por que necesito una plataforma para administrar los chats de WhatsApp?
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
