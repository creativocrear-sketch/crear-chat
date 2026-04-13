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
                {language === 'es' ? 'Volver al blog' : 'Back to blog'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Integraciones' : 'Integrations'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article5.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 {language === 'es' ? 'min de lectura' : 'min read'}</span>
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
                  {t('articles.article5.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una de las mayores fortalezas de WhatsApp Business API es su capacidad de integrarse con prácticamente cualquier sistema empresarial. Veamos las integraciones más comunes y útiles.' : 'One of the greatest strengths of WhatsApp Business API is its ability to integrate with virtually any business system. Let\'s look at the most common and useful integrations.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Sistemas CRM' : 'CRM Systems'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Los CRM son esenciales para gestionar relaciones con clientes:' : 'CRMs are essential for managing customer relationships:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Salesforce: Sincroniza conversaciones de WhatsApp con registros de clientes' : 'Salesforce: Sync WhatsApp conversations with customer records'}</li>
                  <li>{language === 'es' ? 'HubSpot: Integra chats de WhatsApp en tu pipeline de ventas' : 'HubSpot: Integrate WhatsApp chats into your sales pipeline'}</li>
                  <li>{language === 'es' ? 'Pipedrive: Conecta mensajes con oportunidades de venta' : 'Pipedrive: Connect messages with sales opportunities'}</li>
                  <li>{language === 'es' ? 'Zoho CRM: Automatiza seguimiento de clientes' : 'Zoho CRM: Automate customer follow-up'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Toda la comunicación con clientes en un solo lugar.' : 'All customer communication in one place.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Plataformas de E-commerce' : 'E-commerce Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para negocios que venden en línea:' : 'For businesses that sell online:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Shopify: Notificaciones de pedidos y seguimiento' : 'Shopify: Order notifications and tracking'}</li>
                  <li>{language === 'es' ? 'WooCommerce: Integración directa con tienda WordPress' : 'WooCommerce: Direct integration with WordPress store'}</li>
                  <li>{language === 'es' ? 'Magento: Sincronización de órdenes y clientes' : 'Magento: Order and customer synchronization'}</li>
                  <li>{language === 'es' ? 'PrestaShop: Actualizaciones de estado de envío' : 'PrestaShop: Shipping status updates'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Los clientes reciben actualizaciones automáticas de sus compras.' : 'Customers receive automatic updates about their purchases.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Sistemas de Reservas' : 'Booking Systems'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Perfectos para hoteles, restaurantes y servicios:' : 'Perfect for hotels, restaurants and services:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Booking.com: Sincronización de reservas' : 'Booking.com: Reservation synchronization'}</li>
                  <li>{language === 'es' ? 'Airbnb: Comunicación con huéspedes' : 'Airbnb: Guest communication'}</li>
                  <li>{language === 'es' ? 'Calendly: Programación de citas' : 'Calendly: Appointment scheduling'}</li>
                  <li>{language === 'es' ? 'Acuity Scheduling: Gestión de horarios' : 'Acuity Scheduling: Schedule management'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Confirmaciones y recordatorios automáticos.' : 'Automatic confirmations and reminders.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Plataformas de Pago' : 'Payment Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para facilitar transacciones:' : 'To facilitate transactions:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Stripe: Procesar pagos directamente' : 'Stripe: Process payments directly'}</li>
                  <li>{language === 'es' ? 'PayPal: Integración de pagos' : 'PayPal: Payment integration'}</li>
                  <li>{language === 'es' ? 'Mercado Pago: Soluciones de pago latinoamericanas' : 'Mercado Pago: Latin American payment solutions'}</li>
                  <li>{language === 'es' ? 'Wompi: Pagos en línea' : 'Wompi: Online payments'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Los clientes pueden pagar directamente por WhatsApp.' : 'Customers can pay directly via WhatsApp.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Google Workspace' : 'Google Workspace'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para productividad empresarial:' : 'For business productivity:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Google Sheets: Sincronización de datos' : 'Google Sheets: Data synchronization'}</li>
                  <li>{language === 'es' ? 'Google Calendar: Integración de calendarios' : 'Google Calendar: Calendar integration'}</li>
                  <li>{language === 'es' ? 'Gmail: Notificaciones en correo' : 'Gmail: Email notifications'}</li>
                  <li>{language === 'es' ? 'Google Forms: Recopilación de datos' : 'Google Forms: Data collection'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Automatización de procesos administrativos.' : 'Administrative process automation.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Plataformas de Email Marketing' : 'Email Marketing Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para comunicación masiva:' : 'For mass communication:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Mailchimp: Sincronización de listas' : 'Mailchimp: List synchronization'}</li>
                  <li>{language === 'es' ? 'Brevo (Sendinblue): Integración omnicanal' : 'Brevo (Sendinblue): Omnichannel integration'}</li>
                  <li>{language === 'es' ? 'ActiveCampaign: Automatización de marketing' : 'ActiveCampaign: Marketing automation'}</li>
                  <li>{language === 'es' ? 'Klaviyo: Segmentación de clientes' : 'Klaviyo: Customer segmentation'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Comunicación coordinada en múltiples canales.' : 'Coordinated communication across multiple channels.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Sistemas de Facturación' : 'Billing Systems'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para gestión financiera:' : 'For financial management:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Facturación Electrónica: Envío de facturas por WhatsApp' : 'Electronic Invoicing: Send invoices via WhatsApp'}</li>
                  <li>{language === 'es' ? 'Contabilidad en Línea: Sincronización de datos' : 'Online Accounting: Data synchronization'}</li>
                  <li>{language === 'es' ? 'SAP: Integración empresarial' : 'SAP: Enterprise integration'}</li>
                  <li>{language === 'es' ? 'Oracle: Sistemas grandes' : 'Oracle: Large systems'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Documentos fiscales entregados automáticamente.' : 'Tax documents delivered automatically.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Plataformas de Automatización' : 'Automation Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para workflows complejos:' : 'For complex workflows:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Zapier: Conecta WhatsApp con cientos de apps' : 'Zapier: Connect WhatsApp with hundreds of apps'}</li>
                  <li>{language === 'es' ? 'Make (Integromat): Automatización visual' : 'Make (Integromat): Visual automation'}</li>
                  <li>{language === 'es' ? 'n8n: Automatización de código abierto' : 'n8n: Open source automation'}</li>
                  <li>{language === 'es' ? 'IFTTT: Automatización simple' : 'IFTTT: Simple automation'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Posibilidades ilimitadas de automatización.' : 'Unlimited automation possibilities.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Sistemas de Gestión de Recursos Humanos' : 'Human Resource Management Systems'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para empresas medianas y grandes:' : 'For medium and large companies:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'BambooHR: Gestión de empleados' : 'BambooHR: Employee management'}</li>
                  <li>{language === 'es' ? 'Workday: Recursos humanos empresariales' : 'Workday: Enterprise human resources'}</li>
                  <li>{language === 'es' ? 'ADP: Nómina y RRHH' : 'ADP: Payroll and HR'}</li>
                  <li>{language === 'es' ? 'Guidepoint: Gestión de talento' : 'Guidepoint: Talent management'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Comunicación interna automatizada.' : 'Automated internal communication.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Plataformas de Análisis' : 'Analytics Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para entender tus datos:' : 'To understand your data:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Google Analytics: Seguimiento de conversiones' : 'Google Analytics: Conversion tracking'}</li>
                  <li>{language === 'es' ? 'Tableau: Visualización de datos' : 'Tableau: Data visualization'}</li>
                  <li>{language === 'es' ? 'Power BI: Análisis empresarial' : 'Power BI: Business analytics'}</li>
                  <li>{language === 'es' ? 'Mixpanel: Análisis de eventos' : 'Mixpanel: Event analytics'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Insights profundos sobre el comportamiento del cliente.' : 'Deep insights into customer behavior.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Sistemas de Gestión de Inventario' : 'Inventory Management Systems'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para control de stock:' : 'For stock control:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Shopify Inventory: Sincronización de stock' : 'Shopify Inventory: Stock synchronization'}</li>
                  <li>{language === 'es' ? 'Odoo: ERP completo' : 'Odoo: Complete ERP'}</li>
                  <li>{language === 'es' ? 'NetSuite: Gestión empresarial' : 'NetSuite: Business management'}</li>
                  <li>{language === 'es' ? 'Infor: Sistemas de negocio' : 'Infor: Business systems'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Notificaciones automáticas de disponibilidad.' : 'Automatic availability notifications.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Plataformas de Soporte al Cliente' : 'Customer Support Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para gestión de tickets:' : 'For ticket management:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Zendesk: Integración de chats' : 'Zendesk: Chat integration'}</li>
                  <li>{language === 'es' ? 'Freshdesk: Gestión de soporte' : 'Freshdesk: Support management'}</li>
                  <li>{language === 'es' ? 'Intercom: Comunicación con clientes' : 'Intercom: Customer communication'}</li>
                  <li>{language === 'es' ? 'Jira Service Management: Gestión de incidentes' : 'Jira Service Management: Incident management'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Beneficio:' : 'Benefit:'}</strong> {language === 'es' ? 'Todos los canales de soporte en una plataforma.' : 'All support channels in one platform.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Integraciones Personalizadas' : 'Custom Integrations'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si tu sistema no está en esta lista, no te preocupes:' : 'If your system isn\'t on this list, don\'t worry:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Casi cualquier plataforma puede integrarse a través de APIs' : 'Almost any platform can be integrated through APIs'}</li>
                  <li>{language === 'es' ? 'Webhooks permiten comunicación bidireccional' : 'Webhooks allow bidirectional communication'}</li>
                  <li>{language === 'es' ? 'APIs REST permiten envío y recepción de datos' : 'REST APIs allow sending and receiving data'}</li>
                  <li>{language === 'es' ? 'Desarrolladores pueden crear integraciones personalizadas' : 'Developers can create custom integrations'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Cómo Elegir tus Integraciones' : 'How to Choose Your Integrations'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Considera estos factores:' : 'Consider these factors:'}
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Prioridad:' : 'Priority:'}</strong> {language === 'es' ? '¿Qué sistemas son más críticos para tu negocio?' : 'Which systems are most critical for your business?'}</li>
                  <li><strong>{language === 'es' ? 'Complejidad:' : 'Complexity:'}</strong> {language === 'es' ? '¿Qué tan compleja es la integración?' : 'How complex is the integration?'}</li>
                  <li><strong>{language === 'es' ? 'Costo:' : 'Cost:'}</strong> {language === 'es' ? '¿Hay costos adicionales de integración?' : 'Are there additional integration costs?'}</li>
                  <li><strong>{language === 'es' ? 'Soporte:' : 'Support:'}</strong> {language === 'es' ? '¿Hay documentación disponible?' : 'Is documentation available?'}</li>
                  <li><strong>{language === 'es' ? 'Mantenimiento:' : 'Maintenance:'}</strong> {language === 'es' ? '¿Requiere mantenimiento continuo?' : 'Does it require ongoing maintenance?'}</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La verdadera potencia de WhatsApp Business API reside en su capacidad de integrarse con tu ecosistema empresarial existente. No necesitas reemplazar tus sistemas actuales, simplemente conéctalos a través de WhatsApp para una experiencia unificada.' : 'The true power of WhatsApp Business API lies in its ability to integrate with your existing business ecosystem. You don\'t need to replace your current systems, simply connect them through WhatsApp for a unified experience.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La mayoría de empresas comienzan con 2-3 integraciones clave y luego expanden gradualmente. No intentes integrar todo de una vez; comienza con lo que más impacto tendrá en tu negocio.' : 'Most companies start with 2-3 key integrations and then gradually expand. Don\'t try to integrate everything at once; start with what will have the most impact on your business.'}
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
                      href="/blog/articulo-4"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Qué beneficios tengo usando WhatsApp Business API + IA?' : 'What benefits do I get using WhatsApp Business API + AI?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/articulo-6"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Por que necesito una plataforma para administrar los chats de WhatsApp?' : 'Why do I need a platform to manage WhatsApp chats?'}
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
