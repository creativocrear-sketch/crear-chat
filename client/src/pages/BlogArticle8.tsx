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
                {language === 'es' ? 'Volver al blog' : 'Back to blog'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Precios' : 'Pricing'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article8.title')}
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
                  <span>{language === 'es' ? 'Redacción:' : 'By:'} Alex Murillo + {language === 'es' ? 'equipo de soporte' : 'support team'}</span>
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
                  {t('articles.article8.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Entender los modelos de precios es crucial para elegir la plataforma correcta. Veamos cómo cobran las diferentes plataformas.' : 'Understanding pricing models is crucial to choosing the right platform. Let\'s see how different platforms charge.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Modelos de precios principales' : 'Main pricing models'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1. Suscripción mensual fija' : '1. Fixed monthly subscription'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Cómo funciona:' : 'How it works:'}</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Pagas una cantidad fija cada mes, independientemente del uso.' : 'You pay a fixed amount each month, regardless of usage.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ejemplos:' : 'Examples:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Crear.chat: $99-$499/mes' : 'Crear.chat: $99-$499/month'}</li>
                  <li>{language === 'es' ? 'Wati: $25-$299/mes' : 'Wati: $25-$299/month'}</li>
                  <li>{language === 'es' ? 'Intercom: $99-$999/mes' : 'Intercom: $99-$999/month'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ventajas:' : 'Advantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Presupuesto predecible' : 'Predictable budget'}</li>
                  <li>{language === 'es' ? 'Acceso a todas las características' : 'Access to all features'}</li>
                  <li>{language === 'es' ? 'Escalabilidad sin costos adicionales' : 'Scalability without additional costs'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Desventajas:' : 'Disadvantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Pagas igual aunque uses poco' : 'You pay the same even if you use little'}</li>
                  <li>{language === 'es' ? 'Puede ser caro para grandes volúmenes' : 'Can be expensive for large volumes'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Mejor para:' : 'Best for:'}</strong> {language === 'es' ? 'Empresas con uso consistente' : 'Companies with consistent usage'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2. Pago por mensajes' : '2. Pay per message'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Cómo funciona:' : 'How it works:'}</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Pagas según la cantidad de mensajes enviados o recibidos.' : 'You pay based on the number of messages sent or received.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ejemplos:' : 'Examples:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio: $0.0075 por mensaje' : 'Twilio: $0.0075 per message'}</li>
                  <li>{language === 'es' ? 'MessageBird: $0.01-$0.05 por mensaje' : 'MessageBird: $0.01-$0.05 per message'}</li>
                  <li>{language === 'es' ? 'Algunos planes de Zendesk' : 'Some Zendesk plans'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ventajas:' : 'Advantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Pagas solo por lo que usas' : 'You only pay for what you use'}</li>
                  <li>{language === 'es' ? 'Económico para bajo volumen' : 'Economical for low volume'}</li>
                  <li>{language === 'es' ? 'Escalabilidad natural' : 'Natural scalability'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Desventajas:' : 'Disadvantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Costos impredecibles' : 'Unpredictable costs'}</li>
                  <li>{language === 'es' ? 'Caro para alto volumen' : 'Expensive for high volume'}</li>
                  <li>{language === 'es' ? 'Difícil de presupuestar' : 'Difficult to budget'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Mejor para:' : 'Best for:'}</strong> {language === 'es' ? 'Empresas con uso variable' : 'Companies with variable usage'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3. Suscripción + pago por uso' : '3. Subscription + pay per use'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Cómo funciona:' : 'How it works:'}</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Pagas una suscripción base + costo adicional por mensajes o características premium.' : 'You pay a base subscription + additional cost for messages or premium features.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ejemplos:' : 'Examples:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Algunos planes de Intercom' : 'Some Intercom plans'}</li>
                  <li>{language === 'es' ? 'Algunos planes de Zendesk' : 'Some Zendesk plans'}</li>
                  <li>{language === 'es' ? 'Algunos planes de Crear.chat' : 'Some Crear.chat plans'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ventajas:' : 'Advantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Flexibilidad de costo' : 'Cost flexibility'}</li>
                  <li>{language === 'es' ? 'Acceso a características básicas' : 'Access to basic features'}</li>
                  <li>{language === 'es' ? 'Escalabilidad controlada' : 'Controlled scalability'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Desventajas:' : 'Disadvantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Complejidad en la facturación' : 'Billing complexity'}</li>
                  <li>{language === 'es' ? 'Puede ser caro si excedes límites' : 'Can be expensive if you exceed limits'}</li>
                  <li>{language === 'es' ? 'Requiere monitoreo constante' : 'Requires constant monitoring'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Mejor para:' : 'Best for:'}</strong> {language === 'es' ? 'Empresas en crecimiento' : 'Growing companies'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '4. Pago por agentes/usuarios' : '4. Pay per agents/users'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Cómo funciona:' : 'How it works:'}</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Pagas según la cantidad de agentes que pueden usar la plataforma.' : 'You pay based on the number of agents who can use the platform.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ejemplos:' : 'Examples:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Zendesk: $49-$149 por agente/mes' : 'Zendesk: $49-$149 per agent/month'}</li>
                  <li>{language === 'es' ? 'Intercom: Incluido en suscripción' : 'Intercom: Included in subscription'}</li>
                  <li>{language === 'es' ? 'Algunos planes de Freshdesk' : 'Some Freshdesk plans'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ventajas:' : 'Advantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Fácil de predecir costos' : 'Easy to predict costs'}</li>
                  <li>{language === 'es' ? 'Escalable con el equipo' : 'Scalable with the team'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Desventajas:' : 'Disadvantages:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Caro cuando creces' : 'Expensive when you grow'}</li>
                  <li>{language === 'es' ? 'Incentiva a no contratar' : 'Incentivizes not hiring'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Mejor para:' : 'Best for:'}</strong> {language === 'es' ? 'Empresas con equipo estable' : 'Companies with stable team'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5. Modelo freemium' : '5. Freemium model'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Cómo funciona:' : 'How it works:'}</strong>
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Versión gratuita limitada + planes pagos para más funciones.' : 'Limited free version + paid plans for more features.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Ejemplos:' : 'Examples:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Chatwoot (versión community)' : 'Chatwoot (community version)'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Componentes de precios' : 'Pricing components'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Además del modelo principal, considera estos componentes:' : 'Besides the main model, consider these components:'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Costo de mensajes de WhatsApp' : 'WhatsApp message cost'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'WhatsApp cobra a las plataformas por cada mensaje enviado:' : 'WhatsApp charges platforms for each message sent:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Mensajes entrantes: Generalmente gratuitos' : 'Incoming messages: Generally free'}</li>
                  <li>{language === 'es' ? 'Mensajes salientes: $0.0075 - $0.10 por mensaje (varía por país)' : 'Outgoing messages: $0.0075 - $0.10 per message (varies by country)'}</li>
                  <li>{language === 'es' ? 'Plantillas: Más baratas que mensajes normales' : 'Templates: Cheaper than normal messages'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Algunas plataformas incluyen esto en su suscripción, otras lo cobran por separado.' : 'Some platforms include this in their subscription, others charge separately.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Costo de integración' : 'Integration cost'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Algunas plataformas cobran por:' : 'Some platforms charge for:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Integración con CRM: $50-$200/mes' : 'CRM integration: $50-$200/month'}</li>
                  <li>{language === 'es' ? 'Integración con e-commerce: $50-$150/mes' : 'E-commerce integration: $50-$150/month'}</li>
                  <li>{language === 'es' ? 'Integraciones personalizadas: $500+' : 'Custom integrations: $500+'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Costo de automatización' : 'Automation cost'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Chatbots básicos: Incluido' : 'Basic chatbots: Included'}</li>
                  <li>{language === 'es' ? 'Chatbots con IA: $100-$500/mes adicional' : 'AI chatbots: $100-$500/month additional'}</li>
                  <li>{language === 'es' ? 'Automatización avanzada: Personalizado' : 'Advanced automation: Custom'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Costo de soporte' : 'Support cost'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Soporte por email: Incluido' : 'Email support: Included'}</li>
                  <li>{language === 'es' ? 'Soporte por chat: Incluido o $50-$100/mes' : 'Chat support: Included or $50-$100/month'}</li>
                  <li>{language === 'es' ? 'Soporte por teléfono: $200-$500/mes' : 'Phone support: $200-$500/month'}</li>
                  <li>{language === 'es' ? 'Gestor dedicado: $1,000+/mes' : 'Dedicated manager: $1,000+/month'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Ejemplos de costos mensuales reales' : 'Real monthly cost examples'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Pequeño negocio (100 conversaciones/mes)' : 'Small business (100 conversations/month)'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Con Crear.chat:' : 'With Crear.chat:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Suscripción: $99/mes' : 'Subscription: $99/month'}</li>
                  <li>{language === 'es' ? 'Mensajes WhatsApp: ~$0.75/mes' : 'WhatsApp messages: ~$0.75/month'}</li>
                  <li><strong>{language === 'es' ? 'Total: ~$100/mes' : 'Total: ~$100/month'}</strong></li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Con Twilio:' : 'With Twilio:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Suscripción: $0' : 'Subscription: $0'}</li>
                  <li>{language === 'es' ? 'Mensajes: 100 × $0.0075 = $0.75/mes' : 'Messages: 100 × $0.0075 = $0.75/month'}</li>
                  <li><strong>{language === 'es' ? 'Total: ~$1/mes' : 'Total: ~$1/month'}</strong> {language === 'es' ? '(pero sin interfaz de usuario)' : '(but without user interface)'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Negocio mediano (10,000 conversaciones/mes)' : 'Medium business (10,000 conversations/month)'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Con Crear.chat:' : 'With Crear.chat:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Suscripción: $299/mes' : 'Subscription: $299/month'}</li>
                  <li>{language === 'es' ? 'Mensajes WhatsApp: ~$75/mes' : 'WhatsApp messages: ~$75/month'}</li>
                  <li><strong>{language === 'es' ? 'Total: ~$375/mes' : 'Total: ~$375/month'}</strong></li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Con Intercom:' : 'With Intercom:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Suscripción: $500/mes' : 'Subscription: $500/month'}</li>
                  <li>{language === 'es' ? 'Agentes (3): $147 × 3 = $441/mes' : 'Agents (3): $147 × 3 = $441/month'}</li>
                  <li><strong>{language === 'es' ? 'Total: ~$941/mes' : 'Total: ~$941/month'}</strong></li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Negocio grande (100,000 conversaciones/mes)' : 'Large business (100,000 conversations/month)'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Con Twilio:' : 'With Twilio:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Suscripción: $0' : 'Subscription: $0'}</li>
                  <li>{language === 'es' ? 'Mensajes: 100,000 × $0.0075 = $750/mes' : 'Messages: 100,000 × $0.0075 = $750/month'}</li>
                  <li>{language === 'es' ? 'Soporte: $500/mes' : 'Support: $500/month'}</li>
                  <li><strong>{language === 'es' ? 'Total: ~$1,250/mes' : 'Total: ~$1,250/month'}</strong></li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Con Zendesk:' : 'With Zendesk:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Suscripción: $1,000/mes' : 'Subscription: $1,000/month'}</li>
                  <li>{language === 'es' ? 'Agentes (10): $99 × 10 = $990/mes' : 'Agents (10): $99 × 10 = $990/month'}</li>
                  <li><strong>{language === 'es' ? 'Total: ~$1,990/mes' : 'Total: ~$1,990/month'}</strong></li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Cómo calcular tu costo' : 'How to calculate your cost'}
                </h3>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Estima tu volumen mensual:' : 'Estimate your monthly volume:'}</strong> {language === 'es' ? '¿Cuántos mensajes enviarás/recibirás?' : 'How many messages will you send/receive?'}</li>
                  <li><strong>{language === 'es' ? 'Elige el modelo:' : 'Choose the model:'}</strong> {language === 'es' ? '¿Suscripción fija o pago por uso?' : 'Fixed subscription or pay per use?'}</li>
                  <li><strong>{language === 'es' ? 'Suma componentes:' : 'Add components:'}</strong> {language === 'es' ? 'Integraciones, soporte, automatización' : 'Integrations, support, automation'}</li>
                  <li><strong>{language === 'es' ? 'Compara opciones:' : 'Compare options:'}</strong> {language === 'es' ? 'Usa calculadoras de precios' : 'Use pricing calculators'}</li>
                  <li><strong>{language === 'es' ? 'Solicita presupuesto:' : 'Request quote:'}</strong> {language === 'es' ? 'Las plataformas pueden negociar' : 'Platforms can negotiate'}</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Consejos para ahorrar' : 'Tips to save'}
                </h3>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Comienza con plan básico:' : 'Start with basic plan:'}</strong> {language === 'es' ? 'Puedes escalar después' : 'You can scale later'}</li>
                  <li><strong>{language === 'es' ? 'Automatiza procesos:' : 'Automate processes:'}</strong> {language === 'es' ? 'Reduce necesidad de agentes' : 'Reduces need for agents'}</li>
                  <li><strong>{language === 'es' ? 'Usa plantillas:' : 'Use templates:'}</strong> {language === 'es' ? 'Son más baratas que mensajes normales' : 'They are cheaper than normal messages'}</li>
                  <li><strong>{language === 'es' ? 'Negocia volumen:' : 'Negotiate volume:'}</strong> {language === 'es' ? 'Plataformas ofrecen descuentos por volumen' : 'Platforms offer volume discounts'}</li>
                  <li><strong>{language === 'es' ? 'Revisa regularmente:' : 'Review regularly:'}</strong> {language === 'es' ? 'Ajusta según tu uso real' : 'Adjust according to your actual usage'}</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No existe un "precio correcto" universal. El mejor precio es el que:' : 'There is no universal "right price". The best price is one that:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Se ajusta a tu presupuesto' : 'Fits your budget'}</li>
                  <li>{language === 'es' ? 'Cubre tus necesidades' : 'Covers your needs'}</li>
                  <li>{language === 'es' ? 'Escala con tu crecimiento' : 'Scales with your growth'}</li>
                  <li>{language === 'es' ? 'Ofrece buen soporte' : 'Offers good support'}</li>
                  <li>{language === 'es' ? 'No tiene costos ocultos' : 'Has no hidden costs'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La mayoría de plataformas ofrecen pruebas gratuitas. Úsalas para entender mejor cómo cobran y qué esperar en tu caso específico.' : 'Most platforms offer free trials. Use them to better understand how they charge and what to expect in your specific case.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Recuerda: el precio más bajo no siempre es la mejor opción. A veces, pagar más por mejor soporte y características puede ahorrar dinero a largo plazo.' : 'Remember: the lowest price is not always the best option. Sometimes, paying more for better support and features can save you money in the long run.'}
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
                      href="/blog/diferencias-plataformas-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿En que se diferencian las plataformas que administran los chat de WhatsApp?' : 'What are the differences between platforms that manage WhatsApp chats?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/como-seleccionar-proveedor-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?' : 'What should I consider when selecting a WhatsApp provider and platform?'}
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
