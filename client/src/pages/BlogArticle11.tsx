import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  ChevronLeft,
  Share2,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle11() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: "facebook" | "whatsapp") => {
    const url = window.location.href;
    const title = t("articles.article11.title");
    const text = t("articles.article11.shareText");

    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
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
                {language === "es" ? "Volver al blog" : "Back to blog"}
              </a>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === "es" ? "Regulaciones" : "Regulations"}
                </span>
              </div>

              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t("articles.article11.title")}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {language === "es"
                      ? "21 de Marzo de 2026"
                      : "March 21, 2026"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    5 {language === "es" ? "min de lectura" : "min read"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    {language === "es" ? "Redacción:" : "By:"} Alex Murillo +{" "}
                    {language === "es" ? "equipo de soporte" : "support team"}
                  </span>
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
                  {t("articles.article11.title")}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Entender por qué WhatsApp restringe números es crucial para evitar que te suceda. Aquí están las razones principales."
                    : "Understanding why WhatsApp restricts numbers is crucial to avoid it happening to you. Here are the main reasons."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "1. Spam y mensajes no solicitados"
                    : "1. Spam and unsolicited messages"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Definición" : "Definition"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Enviar mensajes a usuarios que no han consentido recibirlos."
                    : "Sending messages to users who have not consented to receive them."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Indicadores de spam"
                    : "Spam indicators"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Alta tasa de mensajes no respondidos"
                      : "High rate of unresponded messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Usuarios reportando tu número"
                      : "Users reporting your number"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Patrones de envío masivo"
                      : "Mass sending patterns"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Contenido repetitivo"
                      : "Repetitive content"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un negocio de marketing envía 10,000 mensajes promocionales sin consentimiento previo. Muchos usuarios reportan el número como spam. WhatsApp restringe la cuenta."
                    : "A marketing business sends 10,000 promotional messages without prior consent. Many users report the number as spam. WhatsApp restricts the account."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Obtén consentimiento explícito"
                      : "Get explicit consent"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mantén lista de contactos actualizada"
                      : "Keep contact list updated"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Respeta preferencias de usuarios"
                      : "Respect user preferences"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Monitorea tasa de rechazo"
                      : "Monitor block rate"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "2. Tasa alta de rechazo"
                    : "2. High block rate"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Qué es tasa de rechazo"
                    : "What is block rate"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Porcentaje de mensajes que usuarios bloquean o reportan."
                    : "Percentage of messages that users block or report."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Umbral crítico" : "Critical threshold"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Tasa > 5-10% es peligrosa"
                      : "Rate > 5-10% is dangerous"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Tasa > 15% resulta en restricción"
                      : "Rate > 15% results in restriction"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Tasa > 25% resulta en suspensión"
                      : "Rate > 25% results in suspension"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Razones de alto rechazo"
                    : "Reasons for high block rate"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Contenido no deseado"
                      : "Unwanted content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Frecuencia excesiva"
                      : "Excessive frequency"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mensajes engañosos"
                      : "Deceptive messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Número incorrecto de usuario"
                      : "Wrong user number"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Cómo reducir tasa de rechazo"
                    : "How to reduce block rate"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Monitorea tu tasa de rechazo"
                      : "Monitor your block rate"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Revisa contenido de mensajes"
                      : "Review message content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Reduce frecuencia si es necesario"
                      : "Reduce frequency if necessary"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Actualiza lista de contactos"
                      : "Update contact list"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "3. Violación de políticas de contenido"
                    : "3. Content policy violations"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Contenido prohibido"
                    : "Prohibited content"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === "es" ? "Spam" : "Spam"}</li>
                  <li>{language === "es" ? "Phishing" : "Phishing"}</li>
                  <li>{language === "es" ? "Malware" : "Malware"}</li>
                  <li>
                    {language === "es" ? "Contenido sexual" : "Sexual content"}
                  </li>
                  <li>{language === "es" ? "Violencia" : "Violence"}</li>
                  <li>{language === "es" ? "Drogas" : "Drugs"}</li>
                  <li>{language === "es" ? "Armas" : "Weapons"}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Detección" : "Detection"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es" ? "WhatsApp usa:" : "WhatsApp uses:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Análisis de contenido automatizado"
                      : "Automated content analysis"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Reportes de usuarios"
                      : "User reports"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Patrones de comportamiento"
                      : "Behavior patterns"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Machine learning"
                      : "Machine learning"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Consecuencias" : "Consequences"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un negocio envía enlaces sospechosos que parecen phishing. Usuarios reportan. WhatsApp restringe."
                    : "A business sends suspicious links that appear to be phishing. Users report. WhatsApp restricts."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Revisa contenido antes de enviar"
                      : "Review content before sending"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No incluyas enlaces sospechosos"
                      : "Do not include suspicious links"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sé claro sobre intenciones"
                      : "Be clear about intentions"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Cumple con políticas"
                      : "Comply with policies"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "4. Múltiples cambios de número"
                    : "4. Multiple number changes"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Política de WhatsApp"
                    : "WhatsApp policy"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Puedes cambiar de número, pero hay límites"
                      : "You can change numbers, but there are limits"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Múltiples cambios en corto tiempo es sospechoso"
                      : "Multiple changes in short time is suspicious"}
                  </li>
                  <li>
                    {language === "es"
                      ? "WhatsApp asume que intentas evadir restricciones"
                      : "WhatsApp assumes you are trying to evade restrictions"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Límites típicos" : "Typical limits"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Máximo 1 cambio por mes"
                      : "Maximum 1 change per month"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Máximo 3 cambios por año"
                      : "Maximum 3 changes per year"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Espera de 30 días entre cambios"
                      : "30-day wait between changes"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un usuario cambia de número 5 veces en 3 meses. WhatsApp restringe la nueva cuenta."
                    : "A user changes number 5 times in 3 months. WhatsApp restricts the new account."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Usa el mismo número consistentemente"
                      : "Use the same number consistently"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Si debes cambiar, espera el tiempo recomendado"
                      : "If you must change, wait the recommended time"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Documenta razón del cambio"
                      : "Document reason for change"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Informa a WhatsApp si es legítimo"
                      : "Inform WhatsApp if legitimate"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "5. Comportamiento sospechoso"
                    : "5. Suspicious behavior"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Patrones sospechosos"
                    : "Suspicious patterns"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Envío masivo de mensajes en corto tiempo"
                      : "Mass message sending in short time"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Horarios inusuales de envío"
                      : "Unusual sending hours"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Cambios repentinos en patrones"
                      : "Sudden pattern changes"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Automatización agresiva"
                      : "Aggressive automation"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Detección" : "Detection"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "WhatsApp monitorea:"
                    : "WhatsApp monitors:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es" ? "Velocidad de envío" : "Sending speed"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Volumen de mensajes"
                      : "Message volume"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Patrones de horarios"
                      : "Time patterns"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Cambios en comportamiento"
                      : "Behavior changes"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un bot envía 1,000 mensajes por minuto. WhatsApp detecta y restringe."
                    : "A bot sends 1,000 messages per minute. WhatsApp detects and restricts."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Mantén ritmo de envío natural"
                      : "Maintain natural sending rhythm"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Distribuye mensajes a lo largo del día"
                      : "Distribute messages throughout the day"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Evita picos de envío masivo"
                      : "Avoid mass sending peaks"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Usa automatización responsable"
                      : "Use responsible automation"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "6. Información de negocio falsa"
                    : "6. False business information"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Requisitos de verificación"
                    : "Verification requirements"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Nombre de negocio debe ser real"
                      : "Business name must be real"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Documentación debe ser válida"
                      : "Documentation must be valid"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Información de contacto debe ser correcta"
                      : "Contact information must be correct"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Ubicación debe ser verificable"
                      : "Location must be verifiable"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Incumplimiento" : "Non-compliance"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Si proporcionas información falsa:"
                    : "If you provide false information:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "WhatsApp rechaza solicitud"
                      : "WhatsApp rejects request"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Si descubre después, suspende cuenta"
                      : "If discovered later, suspends account"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Puede resultar en prohibición permanente"
                      : "May result in permanent ban"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un usuario crea cuenta con nombre falso y documentación falsificada. WhatsApp descubre y suspende."
                    : "A user creates account with fake name and falsified documentation. WhatsApp discovers and suspends."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Proporciona información real"
                      : "Provide real information"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Usa documentación válida"
                      : "Use valid documentation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sé honesto en solicitud"
                      : "Be honest in application"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Actualiza información si cambia"
                      : "Update information if it changes"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "7. Violación de derechos de terceros"
                    : "7. Third party rights violation"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Tipos de violaciones"
                    : "Types of violations"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Envío de contenido de copyright"
                      : "Sending copyrighted content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Uso de marcas registradas"
                      : "Use of trademarks"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Suplantación de identidad"
                      : "Identity theft"}
                  </li>
                  <li>{language === "es" ? "Difamación" : "Defamation"}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Acciones legales" : "Legal actions"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Usuarios pueden reportar"
                      : "Users can report"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Derechohabientes pueden reportar"
                      : "Rights holders can report"}
                  </li>
                  <li>
                    {language === "es"
                      ? "WhatsApp puede actuar"
                      : "WhatsApp can act"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Puede resultar en restricción"
                      : "May result in restriction"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un negocio envía contenido de otro negocio sin permiso. El dueño reporta. WhatsApp restringe."
                    : "A business sends content of another business without permission. The owner reports. WhatsApp restricts."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Usa solo contenido propio"
                      : "Use only your own content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Obtén permiso para contenido de terceros"
                      : "Get permission for third-party content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Respeta derechos de autor"
                      : "Respect copyright"}
                  </li>
                  <li>{language === "es" ? "Sé original" : "Be original"}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "8. Actividad de fraude"
                    : "8. Fraud activity"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Tipos de fraude" : "Types of fraud"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === "es" ? "Estafas" : "Scams"}</li>
                  <li>{language === "es" ? "Phishing" : "Phishing"}</li>
                  <li>
                    {language === "es" ? "Robo de identidad" : "Identity theft"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Fraude financiero"
                      : "Financial fraud"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Detección" : "Detection"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Reportes de usuarios"
                      : "User reports"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Patrones de comportamiento"
                      : "Behavior patterns"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Análisis de contenido"
                      : "Content analysis"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Investigación de WhatsApp"
                      : "WhatsApp investigation"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un usuario usa WhatsApp para estafar a otros. Víctimas reportan. WhatsApp investiga y suspende."
                    : "A user uses WhatsApp to scam others. Victims report. WhatsApp investigates and suspends."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Sé honesto en todas las transacciones"
                      : "Be honest in all transactions"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No intentes engañar a usuarios"
                      : "Do not try to deceive users"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Cumple con promesas"
                      : "Keep promises"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Resuelve disputas justamente"
                      : "Resolve disputes fairly"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "9. Incumplimiento de regulaciones"
                    : "9. Regulatory non-compliance"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Regulaciones aplicables"
                    : "Applicable regulations"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es" ? "GDPR (Europa)" : "GDPR (Europe)"}
                  </li>
                  <li>
                    {language === "es"
                      ? "CCPA (California)"
                      : "CCPA (California)"}
                  </li>
                  <li>{language === "es" ? "Leyes locales" : "Local laws"}</li>
                  <li>
                    {language === "es"
                      ? "Regulaciones de industria"
                      : "Industry regulations"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Incumplimiento" : "Non-compliance"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Violación de privacidad"
                      : "Privacy violation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Falta de consentimiento"
                      : "Lack of consent"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Retención indebida de datos"
                      : "Improper data retention"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Violación de derechos"
                      : "Rights violation"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Ejemplo" : "Example"}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Un negocio en Europa no cumple GDPR. Usuarios reportan. WhatsApp restringe."
                    : "A business in Europe does not comply with GDPR. Users report. WhatsApp restricts."}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Entiende regulaciones aplicables"
                      : "Understand applicable regulations"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Cumple con requisitos de consentimiento"
                      : "Comply with consent requirements"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Protege datos de usuarios"
                      : "Protect user data"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mantén transparencia"
                      : "Maintain transparency"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "10. Reporte de usuarios"
                    : "10. User reporting"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Poder de usuarios" : "Power of users"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Cualquier usuario puede reportar un número"
                      : "Any user can report a number"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Múltiples reportes resultan en restricción"
                      : "Multiple reports result in restriction"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No necesita ser verdadero para afectar"
                      : "Does not need to be true to affect"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Tipos de reportes" : "Types of reports"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === "es" ? "Spam" : "Spam"}</li>
                  <li>{language === "es" ? "Abuso" : "Abuse"}</li>
                  <li>{language === "es" ? "Phishing" : "Phishing"}</li>
                  <li>
                    {language === "es"
                      ? "Contenido inapropiado"
                      : "Inappropriate content"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Protección" : "Protection"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Aunque un reporte no es suficiente"
                      : "Although one report is not enough"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Múltiples reportes disparan revisión"
                      : "Multiple reports trigger review"}
                  </li>
                  <li>
                    {language === "es"
                      ? "WhatsApp investiga patrones"
                      : "WhatsApp investigates patterns"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cómo evitarlo" : "How to avoid it"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Sé profesional y respetuoso"
                      : "Be professional and respectful"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Responde a consultas rápidamente"
                      : "Respond to inquiries quickly"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Resuelve problemas de usuarios"
                      : "Solve user problems"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mantén reputación positiva"
                      : "Maintain positive reputation"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "Señales de alerta" : "Warning signs"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Si experimentas alguno de estos, actúa rápidamente:"
                    : "If you experience any of these, act quickly:"}
                </p>

                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Aumento en rechazo de mensajes"
                      : "Increase in message blocks"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Usuarios reportando tu número"
                      : "Users reporting your number"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Disminución en tasa de entrega"
                      : "Decrease in delivery rate"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mensajes marcados como spam"
                      : "Messages marked as spam"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Dificultad para enviar mensajes"
                      : "Difficulty sending messages"}
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Qué hacer si te restringen"
                    : "What to do if restricted"}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Inmediatamente" : "Immediately"}
                </h4>

                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Detén envío de mensajes"
                      : "Stop sending messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Revisa qué causó la restricción"
                      : "Review what caused the restriction"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Documenta cambios que harás"
                      : "Document changes you will make"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Contacta a WhatsApp"
                      : "Contact WhatsApp"}
                  </li>
                </ol>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Contactar a WhatsApp"
                    : "Contacting WhatsApp"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Usa formulario de apelación"
                      : "Use appeal form"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Explica situación honestamente"
                      : "Explain situation honestly"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Proporciona evidencia de cambios"
                      : "Provide evidence of changes"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sé paciente (puede tomar semanas)"
                      : "Be patient (may take weeks)"}
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es"
                    ? "Prevención futura"
                    : "Future prevention"}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Implementa cambios sugeridos"
                      : "Implement suggested changes"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Monitorea métricas constantemente"
                      : "Monitor metrics constantly"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mantén cumplimiento estricto"
                      : "Maintain strict compliance"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Educa a tu equipo"
                      : "Educate your team"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "Conclusión" : "Conclusion"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Las restricciones de WhatsApp no son arbitrarias. Existen razones específicas. Si entiendes estas razones y las evitas, tu cuenta estará segura."
                    : "WhatsApp restrictions are not arbitrary. There are specific reasons. If you understand these reasons and avoid them, your account will be safe."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>
                    {language === "es" ? "Regla de oro:" : "Golden rule:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Si algo se siente cuestionable, probablemente lo sea. Cuando dudes, no lo hagas. Es mucho más fácil mantener una cuenta en buen estado que intentar recuperarla después de una restricción."
                    : "If something feels questionable, it probably is. When in doubt, do not do it. It is much easier to keep an account in good standing than to try to recover it after a restriction."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "La mayoría de restricciones son prevenibles si actúas responsablemente desde el inicio."
                    : "Most restrictions are preventable if you act responsibly from the beginning."}
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "es" ? "Compartir:" : "Share:"}
                </h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    {language === "es" ? "Facebook" : "Facebook"}
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {language === "es" ? "WhatsApp" : "WhatsApp"}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">
                      {language === "es"
                        ? "Artículo anterior"
                        : "Previous article"}
                    </p>
                    <a
                      href="/blog/politicas-whatsapp-business-api"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === "es"
                        ? "¿Cuáles son las principales políticas de WhatsApp Business API?"
                        : "What are the main WhatsApp Business API policies?"}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      {language === "es"
                        ? "Siguiente artículo"
                        : "Next article"}
                    </p>
                    <span className="text-gray-400 font-medium">
                      {language === "es"
                        ? "Este es el último artículo de la serie"
                        : "This is the last article in the series"}
                    </span>
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
                  {language === "es"
                    ? "¿Listo para implementar WhatsApp Business API?"
                    : "Ready to implement WhatsApp Business API?"}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === "es"
                    ? "Contáctame para una consulta personalizada sobre cómo automatizar tu negocio con WhatsApp Business API."
                    : "Contact me for a personalized consultation on how to automate your business with WhatsApp Business API."}
                </p>

                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
                  {language === "es"
                    ? "Escríbeme por WhatsApp"
                    : "Write me on WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-8">
                {language === "es" ? "Otros artículos" : "Other articles"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === "es"
                        ? "Conceptos Básicos"
                        : "Basic Concepts"}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === "es"
                        ? "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?"
                        : "What is the difference between WhatsApp Business and WhatsApp Business API?"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "es"
                        ? "Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio."
                        : "Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business."}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min</span>
                      <a
                        href="/blog/diferencia-whatsapp-business-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === "es" ? "Casos de Uso" : "Use Cases"}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === "es"
                        ? "¿Para que me sirve WhatsApp Business API para mi negocio?"
                        : "What is WhatsApp Business API useful for in my business?"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "es"
                        ? "Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros."
                        : "Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers and collection offices."}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>8 min</span>
                      <a
                        href="/blog/casos-uso-whatsapp-business-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === "es" ? "Implementación" : "Implementation"}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === "es"
                        ? "¿Cuáles son los primeros pasos para migrar WhatsApp Business API?"
                        : "What are the first steps to migrate WhatsApp Business API?"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "es"
                        ? "Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones."
                        : "Step-by-step guide to migrate your business to WhatsApp Business API without complications."}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>7 min</span>
                      <a
                        href="/blog/primeros-pasos-migrar-whatsapp-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
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
