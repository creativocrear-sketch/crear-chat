import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle10() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article10.title');
    const text = t('articles.article10.shareText');
    
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
                  {language === 'es' ? 'Regulaciones' : 'Regulations'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article10.title')}
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
                  {t('articles.article10.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'WhatsApp tiene políticas estrictas para mantener la integridad de su plataforma. Es crucial entenderlas para evitar problemas.' : 'WhatsApp has strict policies to maintain the integrity of its platform. It is crucial to understand them to avoid problems.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '1. Calidad de mensajes' : '1. Message quality'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Tasa de rechazo' : 'Block rate'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'WhatsApp monitorea si tus mensajes son bloqueados/reportados' : 'WhatsApp monitors if your messages are blocked/reported'}</li>
                  <li>{language === 'es' ? 'Si tu tasa de rechazo es muy alta, tu cuenta puede ser suspendida' : 'If your block rate is very high, your account may be suspended'}</li>
                  <li>{language === 'es' ? 'Mantén una tasa de rechazo < 5%' : 'Keep a block rate < 5%'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Contenido apropiado' : 'Appropriate content'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'No envíes spam' : 'Do not send spam'}</li>
                  <li>{language === 'es' ? 'No envíes contenido ilegal' : 'Do not send illegal content'}</li>
                  <li>{language === 'es' ? 'No envíes phishing o estafas' : 'Do not send phishing or scams'}</li>
                  <li>{language === 'es' ? 'No envíes malware' : 'Do not send malware'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Frecuencia' : 'Frequency'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'No envíes demasiados mensajes a un mismo contacto' : 'Do not send too many messages to the same contact'}</li>
                  <li>{language === 'es' ? 'Respeta los horarios de los usuarios' : 'Respect users\' hours'}</li>
                  <li>{language === 'es' ? 'No envíes mensajes no solicitados masivamente' : 'Do not send mass unsolicited messages'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '2. Consentimiento' : '2. Consent'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Consentimiento previo' : 'Prior consent'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Debes tener consentimiento explícito antes de enviar mensajes' : 'You must have explicit consent before sending messages'}</li>
                  <li>{language === 'es' ? 'El usuario debe haber optado por recibir mensajes' : 'The user must have opted to receive messages'}</li>
                  <li>{language === 'es' ? 'Documentar el consentimiento es importante' : 'Documenting consent is important'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Opt-out' : 'Opt-out'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Debes permitir que los usuarios se den de baja' : 'You must allow users to unsubscribe'}</li>
                  <li>{language === 'es' ? 'Respeta las solicitudes de "STOP" o "DEJAR DE ENVIAR"' : 'Respect "STOP" or "DEJAR DE ENVIAR" requests'}</li>
                  <li>{language === 'es' ? 'Procesa opt-outs inmediatamente' : 'Process opt-outs immediately'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '3. Privacidad y datos' : '3. Privacy and data'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Protección de datos' : 'Data protection'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Cumple con GDPR, CCPA y regulaciones locales' : 'Comply with GDPR, CCPA and local regulations'}</li>
                  <li>{language === 'es' ? 'Protege información personal de usuarios' : 'Protect users\' personal information'}</li>
                  <li>{language === 'es' ? 'No compartas datos con terceros sin consentimiento' : 'Do not share data with third parties without consent'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Transparencia' : 'Transparency'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Informa a usuarios cómo usarás sus datos' : 'Inform users how you will use their data'}</li>
                  <li>{language === 'es' ? 'Sé claro sobre quién está enviando mensajes' : 'Be clear about who is sending messages'}</li>
                  <li>{language === 'es' ? 'Proporciona política de privacidad clara' : 'Provide clear privacy policy'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '4. Plantillas de mensajes' : '4. Message templates'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Aprobación requerida' : 'Approval required'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Todas las plantillas deben ser aprobadas por WhatsApp' : 'All templates must be approved by WhatsApp'}</li>
                  <li>{language === 'es' ? 'No puedes enviar mensajes que no sean de plantillas aprobadas' : 'You cannot send messages that are not from approved templates'}</li>
                  <li>{language === 'es' ? 'La aprobación puede tomar 24-48 horas' : 'Approval may take 24-48 hours'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Contenido de plantillas' : 'Template content'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'No pueden contener contenido engañoso' : 'They cannot contain misleading content'}</li>
                  <li>{language === 'es' ? 'Deben ser claras y profesionales' : 'They must be clear and professional'}</li>
                  <li>{language === 'es' ? 'No pueden contener spam o phishing' : 'They cannot contain spam or phishing'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Variables en plantillas' : 'Template variables'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Puedes usar variables para personalizar' : 'You can use variables to personalize'}</li>
                  <li>{language === 'es' ? 'Las variables deben ser claras' : 'Variables must be clear'}</li>
                  <li>{language === 'es' ? 'No puedes usar variables para ocultar contenido' : 'You cannot use variables to hide content'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '5. Números de teléfono' : '5. Phone numbers'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Verificación' : 'Verification'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Tu número debe ser verificado' : 'Your number must be verified'}</li>
                  <li>{language === 'es' ? 'Debes proporcionar documentación de negocio' : 'You must provide business documentation'}</li>
                  <li>{language === 'es' ? 'WhatsApp puede solicitar verificación adicional' : 'WhatsApp may request additional verification'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Cambios de número' : 'Number changes'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Si cambias de número, debes verificar el nuevo' : 'If you change numbers, you must verify the new one'}</li>
                  <li>{language === 'es' ? 'Hay período de espera entre cambios' : 'There is a waiting period between changes'}</li>
                  <li>{language === 'es' ? 'Múltiples cambios pueden resultar en restricciones' : 'Multiple changes may result in restrictions'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Números compartidos' : 'Shared numbers'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'No puedes compartir un número entre múltiples negocios' : 'You cannot share a number between multiple businesses'}</li>
                  <li>{language === 'es' ? 'Cada negocio necesita su propio número' : 'Each business needs its own number'}</li>
                  <li>{language === 'es' ? 'Violaciones pueden resultar en suspensión' : 'Violations may result in suspension'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '6. Automatización y bots' : '6. Automation and bots'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Transparencia de bot' : 'Bot transparency'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Debes informar si un bot está respondiendo' : 'You must inform if a bot is responding'}</li>
                  <li>{language === 'es' ? 'No puedes engañar a usuarios haciéndoles creer que es humano' : 'You cannot deceive users by making them believe it is human'}</li>
                  <li>{language === 'es' ? 'Debes permitir escalación a agente humano' : 'You must allow escalation to human agent'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Respuestas automáticas' : 'Automatic responses'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Las respuestas automáticas deben ser relevantes' : 'Automatic responses must be relevant'}</li>
                  <li>{language === 'es' ? 'No pueden ser spam' : 'They cannot be spam'}</li>
                  <li>{language === 'es' ? 'Deben respetar preferencias del usuario' : 'They must respect user preferences'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '7. Comercio y transacciones' : '7. Commerce and transactions'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Información clara' : 'Clear information'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Precios y términos deben ser claros' : 'Prices and terms must be clear'}</li>
                  <li>{language === 'es' ? 'No puede haber sorpresas' : 'There cannot be surprises'}</li>
                  <li>{language === 'es' ? 'Debes cumplir con leyes de protección al consumidor' : 'You must comply with consumer protection laws'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Reembolsos y Garantías' : 'Refunds and Guarantees'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Debes tener política clara de reembolsos' : 'You must have clear refund policy'}</li>
                  <li>{language === 'es' ? 'Debes cumplir con leyes de retorno' : 'You must comply with return laws'}</li>
                  <li>{language === 'es' ? 'Debes ser justo en disputas' : 'You must be fair in disputes'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '8. Seguridad' : '8. Security'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Protección de Cuenta' : 'Account Protection'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Usa autenticación fuerte' : 'Use strong authentication'}</li>
                  <li>{language === 'es' ? 'Protege credenciales de acceso' : 'Protect access credentials'}</li>
                  <li>{language === 'es' ? 'Monitorea actividad sospechosa' : 'Monitor suspicious activity'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Cumplimiento de Leyes' : 'Legal Compliance'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Cumple con leyes de ciberseguridad' : 'Comply with cybersecurity laws'}</li>
                  <li>{language === 'es' ? 'Reporta brechas de seguridad' : 'Report security breaches'}</li>
                  <li>{language === 'es' ? 'Protege contra fraude' : 'Protect against fraud'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '9. Prohibiciones Explícitas' : '9. Explicit Prohibitions'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Contenido Prohibido' : 'Prohibited Content'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Violencia, amenazas, acoso' : 'Violence, threats, harassment'}</li>
                  <li>{language === 'es' ? 'Contenido sexual o explotación' : 'Sexual content or exploitation'}</li>
                  <li>{language === 'es' ? 'Discriminación o hate speech' : 'Discrimination or hate speech'}</li>
                  <li>{language === 'es' ? 'Drogas ilegales' : 'Illegal drugs'}</li>
                  <li>{language === 'es' ? 'Armas' : 'Weapons'}</li>
                  <li>{language === 'es' ? 'Falsificación' : 'Counterfeiting'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Actividades Prohibidas' : 'Prohibited Activities'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Spam' : 'Spam'}</li>
                  <li>{language === 'es' ? 'Phishing' : 'Phishing'}</li>
                  <li>{language === 'es' ? 'Estafas' : 'Scams'}</li>
                  <li>{language === 'es' ? 'Fraude' : 'Fraud'}</li>
                  <li>{language === 'es' ? 'Lavado de dinero' : 'Money laundering'}</li>
                  <li>{language === 'es' ? 'Terrorismo' : 'Terrorism'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Violaciones de Derechos' : 'Rights Violations'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Violación de derechos de autor' : 'Copyright infringement'}</li>
                  <li>{language === 'es' ? 'Violación de marcas registradas' : 'Trademark infringement'}</li>
                  <li>{language === 'es' ? 'Suplantación de identidad' : 'Identity theft'}</li>
                  <li>{language === 'es' ? 'Difamación' : 'Defamation'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '10. Monitoreo y Cumplimiento' : '10. Monitoring and Compliance'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Monitoreo de WhatsApp' : 'WhatsApp Monitoring'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'WhatsApp monitorea patrones de mensajes' : 'WhatsApp monitors message patterns'}</li>
                  <li>{language === 'es' ? 'Analiza contenido de mensajes' : 'Analyzes message content'}</li>
                  <li>{language === 'es' ? 'Detecta spam y abuso' : 'Detects spam and abuse'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Acciones por Incumplimiento' : 'Non-compliance Actions'}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Advertencia:' : 'Warning:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Primer incumplimiento' : 'First non-compliance'}</li>
                  <li>{language === 'es' ? 'Oportunidad de corregir' : 'Opportunity to correct'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Restricción Temporal:' : 'Temporary Restriction:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Limitación de envío de mensajes' : 'Message sending limitation'}</li>
                  <li>{language === 'es' ? 'Período de 24-72 horas típicamente' : 'Typically 24-72 hour period'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Suspensión:' : 'Suspension:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Incapacidad de enviar mensajes' : 'Inability to send messages'}</li>
                  <li>{language === 'es' ? 'Puede ser permanente' : 'Can be permanent'}</li>
                  <li>{language === 'es' ? 'Difícil de revertir' : 'Difficult to reverse'}</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === 'es' ? 'Terminación:' : 'Termination:'}</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Cierre permanente de cuenta' : 'Permanent account closure'}</li>
                  <li>{language === 'es' ? 'Pérdida de número' : 'Loss of number'}</li>
                  <li>{language === 'es' ? 'Prohibición de crear nueva cuenta' : 'Prohibition from creating new account'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '11. Regulaciones por País' : '11. Country-Specific Regulations'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Diferentes Regulaciones' : 'Different Regulations'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Algunos países tienen regulaciones específicas' : 'Some countries have specific regulations'}</li>
                  <li>{language === 'es' ? 'GDPR en Europa' : 'GDPR in Europe'}</li>
                  <li>{language === 'es' ? 'CCPA en California' : 'CCPA in California'}</li>
                  <li>{language === 'es' ? 'Leyes locales en otros países' : 'Local laws in other countries'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Cumplimiento Local' : 'Local Compliance'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Debes cumplir con leyes locales' : 'You must comply with local laws'}</li>
                  <li>{language === 'es' ? 'Algunos países restringen ciertos tipos de mensajes' : 'Some countries restrict certain types of messages'}</li>
                  <li>{language === 'es' ? 'Algunos requieren consentimiento explícito por escrito' : 'Some require explicit written consent'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '12. Mejores Prácticas' : '12. Best Practices'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Para Evitar Problemas' : 'To Avoid Problems'}
                </h4>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>{language === 'es' ? 'Obtén Consentimiento Claro' : 'Get Clear Consent'}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>{language === 'es' ? 'Documenta cómo obtuviste el número' : 'Document how you got the number'}</li>
                      <li>{language === 'es' ? 'Mantén registro de consentimiento' : 'Keep consent records'}</li>
                    </ul>
                  </li>
                  <li><strong>{language === 'es' ? 'Sé Transparente' : 'Be Transparent'}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>{language === 'es' ? 'Identifícate claramente' : 'Identify yourself clearly'}</li>
                      <li>{language === 'es' ? 'Explica por qué envías mensajes' : 'Explain why you send messages'}</li>
                      <li>{language === 'es' ? 'Proporciona opción de darse de baja' : 'Provide opt-out option'}</li>
                    </ul>
                  </li>
                  <li><strong>{language === 'es' ? 'Mantén Calidad Alta' : 'Maintain High Quality'}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>{language === 'es' ? 'Responde rápidamente' : 'Respond quickly'}</li>
                      <li>{language === 'es' ? 'Sé profesional' : 'Be professional'}</li>
                      <li>{language === 'es' ? 'Resuelve problemas rápidamente' : 'Solve problems quickly'}</li>
                    </ul>
                  </li>
                  <li><strong>{language === 'es' ? 'Monitorea tu Desempeño' : 'Monitor Your Performance'}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>{language === 'es' ? 'Revisa tasa de rechazo' : 'Review block rate'}</li>
                      <li>{language === 'es' ? 'Monitorea quejas' : 'Monitor complaints'}</li>
                      <li>{language === 'es' ? 'Ajusta según sea necesario' : 'Adjust as needed'}</li>
                    </ul>
                  </li>
                  <li><strong>{language === 'es' ? 'Mantente Actualizado' : 'Stay Updated'}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>{language === 'es' ? 'Las políticas cambian' : 'Policies change'}</li>
                      <li>{language === 'es' ? 'Suscríbete a actualizaciones de WhatsApp' : 'Subscribe to WhatsApp updates'}</li>
                      <li>{language === 'es' ? 'Revisa regularmente' : 'Review regularly'}</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Las políticas de WhatsApp Business API existen para proteger a los usuarios y mantener la integridad de la plataforma. Si las cumples, no tendrás problemas.' : 'WhatsApp Business API policies exist to protect users and maintain platform integrity. If you comply, you will have no problems.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === 'es' ? 'Regla de oro:' : 'Golden rule:'}</strong> {language === 'es' ? 'Trata a los usuarios como te gustaría ser tratado. Si tu comunicación es respetuosa, relevante y transparente, estarás en el lado correcto de las políticas de WhatsApp.' : 'Treat users as you would like to be treated. If your communication is respectful, relevant and transparent, you will be on the right side of WhatsApp policies.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Recuerda: es mucho más fácil cumplir las políticas desde el inicio que intentar recuperarse de una suspensión de cuenta.' : 'Remember: it is much easier to comply with policies from the beginning than to try to recover from an account suspension.'}
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
                      href="/blog/como-seleccionar-proveedor-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?' : 'What should I consider when selecting a WhatsApp provider and platform?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/por-que-restringen-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Por que me pueden restringir el número de WhatsApp?' : 'Why can they restrict my WhatsApp number?'}
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
