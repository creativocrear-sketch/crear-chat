import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle9() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article9.title');
    const text = t('articles.article9.shareText');
    
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
                  {language === 'es' ? 'Implementación' : 'Implementation'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article9.title')}
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
                  {t('articles.article9.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Elegir el proveedor correcto es una decisión crítica que afectará tu negocio durante años. Aquí está la guía completa.' : 'Choosing the right provider is a critical decision that will affect your business for years. Here is the complete guide.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '1. Necesidades empresariales' : '1. Business needs'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Volumen de mensajes' : 'Message volume'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuántos mensajes enviarás/recibirás mensualmente?' : 'How many messages will you send/receive monthly?'}</li>
                  <li>{language === 'es' ? '¿Cuál es tu proyección de crecimiento?' : 'What is your growth projection?'}</li>
                  <li>{language === 'es' ? '¿Tienes picos estacionales?' : 'Do you have seasonal peaks?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Determina si necesitas escalabilidad' : 'Determines if you need scalability'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Número de agentes' : 'Number of agents'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuántas personas responderán mensajes?' : 'How many people will respond to messages?'}</li>
                  <li>{language === 'es' ? '¿Necesitas gestión de equipos?' : 'Do you need team management?'}</li>
                  <li>{language === 'es' ? '¿Requieres reportes de rendimiento?' : 'Do you need performance reports?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Afecta el costo y la complejidad' : 'Affects cost and complexity'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Automatización requerida' : 'Required automation'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Necesitas chatbots?' : 'Do you need chatbots?'}</li>
                  <li>{language === 'es' ? '¿Qué procesos automatizar?' : 'What processes to automate?'}</li>
                  <li>{language === 'es' ? '¿Requiere IA?' : 'Does it require AI?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Determina qué plataforma elegir' : 'Determines which platform to choose'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Integraciones necesarias' : 'Required integrations'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Qué sistemas necesitas conectar?' : 'What systems do you need to connect?'}</li>
                  <li>{language === 'es' ? '¿Cuán complejas son las integraciones?' : 'How complex are the integrations?'}</li>
                  <li>{language === 'es' ? '¿Necesitas APIs personalizadas?' : 'Do you need custom APIs?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Algunos proveedores son mejores para integraciones complejas' : 'Some providers are better for complex integrations'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '2. Capacidades técnicas' : '2. Technical capabilities'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Nivel de experiencia técnica' : 'Technical experience level'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Tu equipo es técnico o no técnico?' : 'Is your team technical or non-technical?'}</li>
                  <li>{language === 'es' ? '¿Necesitas soporte en configuración?' : 'Do you need setup support?'}</li>
                  <li>{language === 'es' ? '¿Puedes escribir código personalizado?' : 'Can you write custom code?'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Recomendación:' : 'Recommendation:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'No técnico &rarr; Plataforma visual, fácil de usar' : 'Non-technical &rarr; Visual platform, easy to use'}</li>
                  <li>{language === 'es' ? 'Técnico &rarr; Más flexibilidad, APIs disponibles' : 'Technical &rarr; More flexibility, APIs available'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Infraestructura existente' : 'Existing infrastructure'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Qué sistemas ya tienes?' : 'What systems do you already have?'}</li>
                  <li>{language === 'es' ? '¿Qué tan integrados están?' : 'How integrated are they?'}</li>
                  <li>{language === 'es' ? '¿Hay limitaciones técnicas?' : 'Are there technical limitations?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Impacto:' : 'Impact:'}</strong> {language === 'es' ? 'Afecta compatibilidad y facilidad de integración' : 'Affects compatibility and integration ease'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '3. Presupuesto' : '3. Budget'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Presupuesto inicial' : 'Initial budget'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuánto puedes invertir inicialmente?' : 'How much can you invest initially?'}</li>
                  <li>{language === 'es' ? '¿Incluye implementación y capacitación?' : 'Does it include implementation and training?'}</li>
                  <li>{language === 'es' ? '¿Hay costos ocultos?' : 'Are there hidden costs?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Presupuesto mensual' : 'Monthly budget'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuál es tu presupuesto recurrente?' : 'What is your recurring budget?'}</li>
                  <li>{language === 'es' ? '¿Puede crecer con el negocio?' : 'Can it grow with the business?'}</li>
                  <li>{language === 'es' ? '¿Hay límites de presupuesto?' : 'Are there budget limits?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'ROI esperado' : 'Expected ROI'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuál es tu retorno esperado?' : 'What is your expected return?'}</li>
                  <li>{language === 'es' ? '¿En cuánto tiempo?' : 'In how much time?'}</li>
                  <li>{language === 'es' ? '¿Cómo lo medirás?' : 'How will you measure it?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Consejo:' : 'Tip:'}</strong> {language === 'es' ? 'Elige la plataforma que mejor ROI ofrece, no la más barata' : 'Choose the platform that offers the best ROI, not the cheapest'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '4. Reputación y confiabilidad' : '4. Reputation and reliability'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Historial de la empresa' : 'Company history'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuánto tiempo lleva en el mercado?' : 'How long has it been in the market?'}</li>
                  <li>{language === 'es' ? '¿Ha tenido problemas de seguridad?' : 'Has it had security problems?'}</li>
                  <li>{language === 'es' ? '¿Tiene referencias de clientes?' : 'Does it have customer references?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Uptime y confiabilidad' : 'Uptime and reliability'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Qué uptime garantizan? (99.9%, 99.99%?)' : 'What uptime do they guarantee? (99.9%, 99.99%?)'}</li>
                  <li>{language === 'es' ? '¿Tienen SLA (Acuerdo de Nivel de Servicio)?' : 'Do they have SLA (Service Level Agreement)?'}</li>
                  <li>{language === 'es' ? '¿Qué sucede si hay caída?' : 'What happens if there is an outage?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Seguridad' : 'Security'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cumplen GDPR, CCPA, etc.?' : 'Do they comply with GDPR, CCPA, etc.?'}</li>
                  <li>{language === 'es' ? '¿Encriptan datos?' : 'Do they encrypt data?'}</li>
                  <li>{language === 'es' ? '¿Tienen certificaciones de seguridad?' : 'Do they have security certifications?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Importante:' : 'Important:'}</strong> {language === 'es' ? 'La seguridad no es negociable' : 'Security is not negotiable'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '5. Soporte y servicio' : '5. Support and service'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Disponibilidad de soporte' : 'Support availability'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Soporte 24/7?' : '24/7 support?'}</li>
                  <li>{language === 'es' ? '¿En tu idioma?' : 'In your language?'}</li>
                  <li>{language === 'es' ? '¿Múltiples canales (email, chat, teléfono)?' : 'Multiple channels (email, chat, phone)?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Calidad del soporte' : 'Support quality'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuál es el tiempo de respuesta?' : 'What is the response time?'}</li>
                  <li>{language === 'es' ? '¿Qué tan competente es el equipo?' : 'How competent is the team?'}</li>
                  <li>{language === 'es' ? '¿Hay gestor dedicado?' : 'Is there a dedicated manager?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Documentación y recursos' : 'Documentation and resources'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Hay documentación completa?' : 'Is there complete documentation?'}</li>
                  <li>{language === 'es' ? '¿Hay tutoriales en video?' : 'Are there video tutorials?'}</li>
                  <li>{language === 'es' ? '¿Hay comunidad activa?' : 'Is there an active community?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Consejo:' : 'Tip:'}</strong> {language === 'es' ? 'Prueba el soporte antes de comprometerte' : 'Test the support before committing'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '6. Escalabilidad' : '6. Scalability'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Crecimiento horizontal' : 'Horizontal growth'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Puedes agregar más agentes?' : 'Can you add more agents?'}</li>
                  <li>{language === 'es' ? '¿Puedes agregar más números?' : 'Can you add more numbers?'}</li>
                  <li>{language === 'es' ? '¿Hay límites?' : 'Are there limits?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Crecimiento vertical' : 'Vertical growth'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Puedes aumentar volumen de mensajes?' : 'Can you increase message volume?'}</li>
                  <li>{language === 'es' ? '¿Hay límites técnicos?' : 'Are there technical limits?'}</li>
                  <li>{language === 'es' ? '¿Cómo escala el precio?' : 'How does the price scale?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Flexibilidad' : 'Flexibility'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Puedes cambiar de plan fácilmente?' : 'Can you change plans easily?'}</li>
                  <li>{language === 'es' ? '¿Hay penalizaciones?' : 'Are there penalties?'}</li>
                  <li>{language === 'es' ? '¿Puedes downgrade?' : 'Can you downgrade?'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '7. Características específicas' : '7. Specific features'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Automatización' : 'Automation'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Soporte para chatbots?' : 'Chatbot support?'}</li>
                  <li>{language === 'es' ? '¿Automatización visual o código?' : 'Visual automation or code?'}</li>
                  <li>{language === 'es' ? '¿Integración con IA?' : 'AI integration?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Análisis y Reportes' : 'Analytics and Reports'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Qué métricas puedes medir?' : 'What metrics can you measure?'}</li>
                  <li>{language === 'es' ? '¿Reportes en tiempo real?' : 'Real-time reports?'}</li>
                  <li>{language === 'es' ? '¿Exportación de datos?' : 'Data export?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Cumplimiento normativo' : 'Regulatory compliance'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cumple con regulaciones locales?' : 'Does it comply with local regulations?'}</li>
                  <li>{language === 'es' ? '¿Soporte para archivos/auditoría?' : 'Archive/audit support?'}</li>
                  <li>{language === 'es' ? '¿Privacidad de datos?' : 'Data privacy?'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '8. Experiencia del usuario' : '8. User experience'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Interfaz' : 'Interface'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Es intuitiva?' : 'Is it intuitive?'}</li>
                  <li>{language === 'es' ? '¿Fácil de aprender?' : 'Easy to learn?'}</li>
                  <li>{language === 'es' ? '¿Requiere capacitación?' : 'Does it require training?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Flujo de Trabajo' : 'Workflow'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cómo se ven los chats?' : 'How do chats look?'}</li>
                  <li>{language === 'es' ? '¿Fácil de responder?' : 'Easy to respond?'}</li>
                  <li>{language === 'es' ? '¿Organización de conversaciones?' : 'Conversation organization?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Personalización' : 'Customization'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Puedes personalizar la interfaz?' : 'Can you customize the interface?'}</li>
                  <li>{language === 'es' ? '¿Puedes agregar tu branding?' : 'Can you add your branding?'}</li>
                  <li>{language === 'es' ? '¿Flexibilidad de configuración?' : 'Configuration flexibility?'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '9. Términos y condiciones' : '9. Terms and conditions'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Contrato' : 'Contract'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Cuál es el período mínimo?' : 'What is the minimum period?'}</li>
                  <li>{language === 'es' ? '¿Hay penalizaciones por cancelación?' : 'Are there cancellation penalties?'}</li>
                  <li>{language === 'es' ? '¿Puedes salir fácilmente?' : 'Can you exit easily?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Datos' : 'Data'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Quién es dueño de tus datos?' : 'Who owns your data?'}</li>
                  <li>{language === 'es' ? '¿Pueden usar tus datos?' : 'Can they use your data?'}</li>
                  <li>{language === 'es' ? '¿Qué sucede si cancelas?' : 'What happens if you cancel?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Cambios de precio' : 'Price changes'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Pueden aumentar precios?' : 'Can they increase prices?'}</li>
                  <li>{language === 'es' ? '¿Con cuánta anticipación?' : 'With how much notice?'}</li>
                  <li>{language === 'es' ? '¿Tienes opción de salir?' : 'Do you have an exit option?'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '10. Pruebas antes de comprometerse' : '10. Testing before committing'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Prueba gratuita' : 'Free trial'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Ofrecen prueba gratuita?' : 'Do they offer free trial?'}</li>
                  <li>{language === 'es' ? '¿Cuánto tiempo dura?' : 'How long does it last?'}</li>
                  <li>{language === 'es' ? '¿Requiere tarjeta de crédito?' : 'Does it require credit card?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Demo' : 'Demo'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Pueden hacer una demo?' : 'Can they do a demo?'}</li>
                  <li>{language === 'es' ? '¿Puedes hablar con un especialista?' : 'Can you speak with a specialist?'}</li>
                  <li>{language === 'es' ? '¿Responden preguntas específicas?' : 'Do they answer specific questions?'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Referencias' : 'References'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿Puedes hablar con clientes actuales?' : 'Can you speak with current customers?'}</li>
                  <li>{language === 'es' ? '¿Qué dicen sobre el servicio?' : 'What do they say about the service?'}</li>
                  <li>{language === 'es' ? '¿Recomendarían la plataforma?' : 'Would they recommend the platform?'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Matriz de decisión' : 'Decision matrix'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Crea una matriz con tus criterios:' : 'Create a matrix with your criteria:'}
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{language === 'es' ? 'Criterio' : 'Criterion'}</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">{language === 'es' ? 'Peso' : 'Weight'}</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">{language === 'es' ? 'Proveedor A' : 'Provider A'}</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">{language === 'es' ? 'Proveedor B' : 'Provider B'}</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">{language === 'es' ? 'Proveedor C' : 'Provider C'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Precio' : 'Price'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">6/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Soporte' : 'Support'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Características' : 'Features'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Escalabilidad' : 'Scalability'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'Seguridad' : 'Security'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2">{language === 'es' ? 'TOTAL' : 'TOTAL'}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">100%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7.7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8.1/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8.2/10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Elegir el proveedor correcto requiere:' : 'Choosing the right provider requires:'}
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Entender tus necesidades' : 'Understand your needs'}</li>
                  <li>{language === 'es' ? 'Investigar opciones' : 'Research options'}</li>
                  <li>{language === 'es' ? 'Comparar sistemáticamente' : 'Compare systematically'}</li>
                  <li>{language === 'es' ? 'Probar antes de comprometerte' : 'Test before committing'}</li>
                  <li>{language === 'es' ? 'Considerar el futuro, no solo el presente' : 'Consider the future, not just the present'}</li>
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No existe la plataforma "perfecta", pero existe la plataforma "correcta para ti". Tómate tiempo en esta decisión; es una de las más importantes para tu transformación digital.' : 'There is no "perfect" platform, but there is the "right platform for you". Take your time with this decision; it is one of the most important for your digital transformation.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Recomendación final:' : 'Final recommendation:'}</strong> {language === 'es' ? 'Comienza con una prueba gratuita de 2-3 plataformas. Usa cada una durante una semana. Tu intuición sobre cuál es más fácil de usar es tan importante como los números.' : 'Start with a free trial of 2-3 platforms. Use each one for a week. Your intuition about which is easier to use is as important as the numbers.'}
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
                      href="/blog/cobro-plataformas-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?' : 'How do WhatsApp chat platforms charge?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/politicas-whatsapp-business-api"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Cuáles son las principales políticas de WhatsApp Business API?' : 'What are the main policies of WhatsApp Business API?'}
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
