import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticlePoliticasWhatsApp() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle =
    language === "es"
      ? "Políticas de WhatsApp Business API: todo lo que debes saber en 2026"
      : "WhatsApp Business API Policies: everything you need to know in 2026";

  const pageDescription =
    language === "es"
      ? "Guía completa sobre las políticas de WhatsApp Business API: calidad de mensajes, consentimiento, privacidad, plantillas, automatización y mejores prácticas para evitar restricciones."
      : "Complete guide on WhatsApp Business API policies: message quality, consent, privacy, templates, automation and best practices to avoid restrictions.";

  const shareText =
    language === "es"
      ? "Conoce las políticas de WhatsApp Business API para evitar que te restringan el número. Guía completa 2026."
      : "Learn WhatsApp Business API policies to avoid number restrictions. Complete 2026 guide.";

  const authorLabel =
    language === "es"
      ? "Alex Murillo - Especialista en Automatización con WhatsApp e IA"
      : "Alex Murillo - WhatsApp and AI Automation Specialist";

  const handleShare = (platform: "facebook" | "whatsapp") => {
    const url = window.location.href;
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href="https://crear.chat/blog/politicas-whatsapp-business-api" />
        <meta
          name="author"
          content={
            language === "es"
              ? "Alex Murillo, Especialista en Automatización con WhatsApp e IA en Crear.chat"
              : "Alex Murillo, WhatsApp and AI Automation Specialist at Crear.chat"
          }
        />
        <meta
          name="keywords"
          content={
            language === "es"
              ? "políticas WhatsApp Business API, restricciones WhatsApp, políticas de uso, cumplimiento WhatsApp, evitar suspensión, spam WhatsApp, consentimiento WhatsApp, GDPR WhatsApp, Colombia"
              : "WhatsApp Business API policies, WhatsApp restrictions, usage policies, WhatsApp compliance, avoid suspension, WhatsApp spam, WhatsApp consent, GDPR WhatsApp, Colombia"
          }
        />
        <meta
          name="topic"
          content="WhatsApp Business API, Políticas, Restricciones, Cumplimiento, Spam, Consentimiento, Privacidad, Colombia"
        />
        <meta
          name="ai-summary"
          content={
            language === "es"
              ? "Las políticas de WhatsApp Business API abarcan 12 áreas clave: 1) Calidad de mensajes (tasa de rechazo <5%, contenido apropiado, frecuencia), 2) Consentimiento (opt-in explícito, opt-out inmediato), 3) Privacidad y datos (GDPR, CCPA, transparencia), 4) Plantillas (aprobación requerida, contenido apropiado), 5) Números de teléfono (verificación, cambios de número), 6) Automatización y bots (transparencia de bot, respuestas automáticas), 7) Comercio y transacciones (información clara, reembolsos), 8) Seguridad (protección de cuenta, cumplimiento legal), 9) Prohibiciones explícitas (contenido y actividades prohibidas), 10) Monitoreo y cumplimiento (acciones por incumplimiento), 11) Regulaciones por país, 12) Mejores prácticas. Las consecuencias por incumplimiento van desde advertencias hasta suspensión permanente."
              : "WhatsApp Business API policies cover 12 key areas: 1) Message quality (block rate <5%, appropriate content, frequency), 2) Consent (explicit opt-in, immediate opt-out), 3) Privacy and data (GDPR, CCPA, transparency), 4) Templates (required approval, appropriate content), 5) Phone numbers (verification, number changes), 6) Automation and bots (bot transparency, automatic responses), 7) Commerce and transactions (clear information, refunds), 8) Security (account protection, legal compliance), 9) Explicit prohibitions (prohibited content and activities), 10) Monitoring and compliance (non-compliance actions), 11) Country-specific regulations, 12) Best practices. Consequences for non-compliance range from warnings to permanent suspension."
          }
        />
        <meta
          name="ai-entities"
          content="WhatsApp Business API, políticas de uso, tasa de rechazo, opt-in, opt-out, GDPR, CCPA, plantillas de mensajes, chatbot, automatización, suspensión de cuenta, Colombia"
        />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={
            language === "es"
              ? "Las 12 políticas clave de WhatsApp Business API que debes conocer para evitar restricciones y suspensiones. Guía completa con mejores prácticas."
              : "The 12 key WhatsApp Business API policies you must know to avoid restrictions and suspensions. Complete guide with best practices."
          }
        />
        <meta property="og:image" content="https://crear.chat/logo-black.svg" />
        <meta property="og:url" content="https://crear.chat/blog/politicas-whatsapp-business-api" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-03-21" />
        <meta property="article:author" content="Alex Murillo" />
        <meta
          property="article:section"
          content={language === "es" ? "Regulaciones" : "Regulations"}
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema: BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              language === "es"
                ? "Políticas de WhatsApp Business API: todo lo que debes saber"
                : "WhatsApp Business API Policies: everything you need to know",
            datePublished: "2026-03-21",
            dateModified: "2026-04-24",
            author: {
              "@type": "Person",
              name: "Alex Murillo",
              jobTitle:
                language === "es"
                  ? "Especialista en Automatización con WhatsApp e IA"
                  : "WhatsApp and AI Automation Specialist",
              worksFor: { "@type": "Organization", name: "Crear.chat" },
              url: "https://co.linkedin.com/in/alexandermurillo",
              sameAs: ["https://crear.chat", "https://co.linkedin.com/in/alexandermurillo"],
            },
            publisher: {
              "@type": "Organization",
              name: "Crear.chat",
              logo: { "@type": "ImageObject", url: "https://crear.chat/logo-black.svg" },
              url: "https://crear.chat",
            },
            image: "https://crear.chat/logo-black.svg",
            description: pageDescription,
            keywords:
              "políticas WhatsApp Business API, restricciones WhatsApp, cumplimiento, spam, consentimiento, privacidad, Colombia",
            articleSection: language === "es" ? "Regulaciones" : "Regulations",
            inLanguage: language === "es" ? "es" : "en",
            wordCount: 1800,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://crear.chat/blog/politicas-whatsapp-business-api",
            },
            about: [
              { "@type": "Thing", name: "WhatsApp Business API" },
              { "@type": "Thing", name: language === "es" ? "Políticas de uso" : "Usage policies" },
              { "@type": "Thing", name: language === "es" ? "Cumplimiento" : "Compliance" },
              { "@type": "Thing", name: language === "es" ? "Restricciones" : "Restrictions" },
              { "@type": "Thing", name: "GDPR" },
              { "@type": "Thing", name: "CCPA" },
            ],
            mentions: [
              { "@type": "Thing", name: "Colombia" },
              { "@type": "Thing", name: language === "es" ? "Tasa de rechazo" : "Block rate" },
              { "@type": "Thing", name: language === "es" ? "Plantillas de mensajes" : "Message templates" },
              { "@type": "Thing", name: language === "es" ? "Consentimiento" : "Consent" },
            ],
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Blog", item: "https://crear.chat/blog" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: language === "es" ? "Políticas de WhatsApp Business API" : "WhatsApp Business API Policies",
                  item: "https://crear.chat/blog/politicas-whatsapp-business-api",
                },
              ],
            },
          })}
        </script>

        {/* Schema: FAQPage — GEO para IA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: language === "es"
                  ? "¿Cuáles son las políticas principales de WhatsApp Business API?"
                  : "What are the main WhatsApp Business API policies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: language === "es"
                    ? "Las políticas principales incluyen: calidad de mensajes (tasa de rechazo <5%), consentimiento previo del usuario, privacidad y protección de datos (GDPR/CCPA), uso apropiado de plantillas, transparencia en automatización, y prohibición de contenido ilegal o spam. El incumplimiento puede resultar en advertencias, restricciones temporales o suspensión permanente."
                    : "Main policies include: message quality (block rate <5%), prior user consent, privacy and data protection (GDPR/CCPA), appropriate use of templates, transparency in automation, and prohibition of illegal content or spam. Non-compliance can result in warnings, temporary restrictions or permanent suspension.",
                },
              },
              {
                "@type": "Question",
                name: language === "es"
                  ? "¿Qué pasa si incumplo las políticas de WhatsApp?"
                  : "What happens if I violate WhatsApp policies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: language === "es"
                    ? "Las consecuencias van en escala: 1) Advertencia por primer incumplimiento con oportunidad de corregir, 2) Restricción temporal (24-72 horas) de envío de mensajes, 3) Suspensión temporal o permanente con incapacidad de enviar mensajes, 4) Terminación con cierre permanente de cuenta, pérdida del número y prohibición de crear nuevas cuentas."
                    : "Consequences scale as: 1) Warning for first non-compliance with opportunity to correct, 2) Temporary restriction (24-72 hours) on message sending, 3) Temporary or permanent suspension with inability to send messages, 4) Termination with permanent account closure, number loss and prohibition from creating new accounts.",
                },
              },
              {
                "@type": "Question",
                name: language === "es"
                  ? "¿Cómo evitar que me restringan el número de WhatsApp?"
                  : "How to avoid WhatsApp number restrictions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: language === "es"
                    ? "Para evitar restricciones: 1) Obtén consentimiento explícito antes de enviar mensajes, 2) Mantén tasa de rechazo <5%, 3) Permite que usuarios se den de baja fácilmente, 4) No envíes spam ni contenido no solicitado, 5) Usa plantillas aprobadas por WhatsApp, 6) Identifícate claramente como negocio, 7) Monitorea tu desempeño y ajusta según sea necesario."
                    : "To avoid restrictions: 1) Get explicit consent before sending messages, 2) Keep block rate <5%, 3) Allow users to easily unsubscribe, 4) Do not send spam or unsolicited content, 5) Use WhatsApp-approved templates, 6) Identify yourself clearly as a business, 7) Monitor your performance and adjust as needed.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

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
                {pageTitle}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === "es" ? "21 de Marzo de 2026" : "March 21, 2026"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 {language === "es" ? "min de lectura" : "min read"}</span>
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
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {language === "es"
                    ? "WhatsApp tiene políticas estrictas para mantener la integridad de su plataforma. Es crucial entenderlas para evitar problemas que pueden resultar en restricciones o suspensiones permanentes."
                    : "WhatsApp has strict policies to maintain the integrity of its platform. It is crucial to understand them to avoid problems that can result in restrictions or permanent suspensions."}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "1. Calidad de mensajes" : "1. Message quality"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Tasa de rechazo" : "Block rate"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "WhatsApp monitorea si tus mensajes son bloqueados o reportados"
                      : "WhatsApp monitors if your messages are blocked or reported"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Si tu tasa de rechazo es muy alta, tu cuenta puede ser suspendida"
                      : "If your block rate is very high, your account may be suspended"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mantén una tasa de rechazo inferior al 5%"
                      : "Keep a block rate under 5%"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Contenido apropiado" : "Appropriate content"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === "es" ? "No envíes spam" : "Do not send spam"}</li>
                  <li>{language === "es" ? "No envíes contenido ilegal" : "Do not send illegal content"}</li>
                  <li>{language === "es" ? "No envíes phishing o estafas" : "Do not send phishing or scams"}</li>
                  <li>{language === "es" ? "No envíes malware" : "Do not send malware"}</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Frecuencia" : "Frequency"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "No envíes demasiados mensajes a un mismo contacto"
                      : "Do not send too many messages to the same contact"}
                  </li>
                  <li>{language === "es" ? "Respeta los horarios de los usuarios" : "Respect users' hours"}</li>
                  <li>
                    {language === "es"
                      ? "No envíes mensajes no solicitados masivamente"
                      : "Do not send mass unsolicited messages"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "2. Consentimiento" : "2. Consent"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Consentimiento previo" : "Prior consent"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Debes tener consentimiento explícito antes de enviar mensajes"
                      : "You must have explicit consent before sending messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "El usuario debe haber opts por recibir mensajes"
                      : "The user must have opted to receive messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Documentar el consentimiento es importante"
                      : "Documenting consent is important"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Opt-out" : "Opt-out"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Debes permitir que los usuarios se den de baja"
                      : "You must allow users to unsubscribe"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Respeta las solicitudes de \"STOP\" o \"DEJAR DE ENVIAR\""
                      : "Respect \"STOP\" or \"DEJAR DE ENVIAR\" requests"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Procesa opt-outs inmediatamente"
                      : "Process opt-outs immediately"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "3. Privacidad y datos" : "3. Privacy and data"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Protección de datos" : "Data protection"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Cumple con GDPR, CCPA y regulaciones locales"
                      : "Comply with GDPR, CCPA and local regulations"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Protege información personal de usuarios"
                      : "Protect users' personal information"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No compartas datos con terceros sin consentimiento"
                      : "Do not share data with third parties without consent"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Transparencia" : "Transparency"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Informa a usuarios cómo usarás sus datos"
                      : "Inform users how you will use their data"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sé claro sobre quién está enviando mensajes"
                      : "Be clear about who is sending messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Proporciona política de privacidad clara"
                      : "Provide clear privacy policy"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "4. Plantillas de mensajes" : "4. Message templates"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Aprobación requerida" : "Approval required"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Todas las plantillas deben ser aprobadas por WhatsApp"
                      : "All templates must be approved by WhatsApp"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No puedes enviar mensajes que no sean de plantillas aprobadas"
                      : "You cannot send messages that are not from approved templates"}
                  </li>
                  <li>
                    {language === "es"
                      ? "La aprobación puede tomar 24-48 horas"
                      : "Approval may take 24-48 hours"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Contenido de plantillas" : "Template content"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "No pueden contener contenido engañoso"
                      : "They cannot contain misleading content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Deben ser claras y profesionales"
                      : "They must be clear and professional"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No pueden contener spam o phishing"
                      : "They cannot contain spam or phishing"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "5. Números de teléfono" : "5. Phone numbers"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Verificación" : "Verification"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Tu número debe ser verificado"
                      : "Your number must be verified"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Debes proporcionar documentación de negocio"
                      : "You must provide business documentation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "WhatsApp puede solicitar verificación adicional"
                      : "WhatsApp may request additional verification"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cambios de número" : "Number changes"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Si cambias de número, debes verificar el nuevo"
                      : "If you change numbers, you must verify the new one"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Hay período de espera entre cambios"
                      : "There is a waiting period between changes"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Múltiples cambios pueden resultar en restricciones"
                      : "Multiple changes may result in restrictions"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "6. Automatización y bots" : "6. Automation and bots"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Transparencia de bot" : "Bot transparency"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Debes informar si un bot está respondiendo"
                      : "You must inform if a bot is responding"}
                  </li>
                  <li>
                    {language === "es"
                      ? "No puedes engañar a usuarios haciéndoles creer que es humano"
                      : "You cannot deceive users by making them believe it is human"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Debes permitir escalación a agente humano"
                      : "You must allow escalation to human agent"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Respuestas automáticas" : "Automatic responses"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Las respuestas automáticas deben ser relevantes"
                      : "Automatic responses must be relevant"}
                  </li>
                  <li>{language === "es" ? "No pueden ser spam" : "They cannot be spam"}</li>
                  <li>
                    {language === "es"
                      ? "Deben respetar preferencias del usuario"
                      : "They must respect user preferences"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "7. Comercio y transacciones" : "7. Commerce and transactions"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Información clara" : "Clear information"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Precios y términos deben ser claros"
                      : "Prices and terms must be clear"}
                  </li>
                  <li>{language === "es" ? "No puede haber sorpresas" : "There cannot be surprises"}</li>
                  <li>
                    {language === "es"
                      ? "Debes cumplir con leyes de protección al consumidor"
                      : "You must comply with consumer protection laws"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Reembolsos y garantías" : "Refunds and guarantees"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Debes tener política clara de reembolsos"
                      : "You must have clear refund policy"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Debes cumplir con leyes de retorno"
                      : "You must comply with return laws"}
                  </li>
                  <li>{language === "es" ? "Debes ser justo en disputas" : "You must be fair in disputes"}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "8. Seguridad" : "8. Security"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Protección de cuenta" : "Account protection"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Usa autenticación fuerte"
                      : "Use strong authentication"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Protege credenciales de acceso"
                      : "Protect access credentials"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Monitorea actividad sospechosa"
                      : "Monitor suspicious activity"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Cumplimiento de leyes" : "Legal compliance"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Cumple con leyes de ciberseguridad"
                      : "Comply with cybersecurity laws"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Reporta brechas de seguridad"
                      : "Report security breaches"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Protege contra fraude"
                      : "Protect against fraud"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "9. Prohibiciones explícitas" : "9. Explicit prohibitions"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Contenido prohibido" : "Prohibited content"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Violencia, amenazas, acoso"
                      : "Violence, threats, harassment"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Contenido sexual o explotación"
                      : "Sexual content or exploitation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Discriminación o hate speech"
                      : "Discrimination or hate speech"}
                  </li>
                  <li>{language === "es" ? "Drogas ilegales" : "Illegal drugs"}</li>
                  <li>{language === "es" ? "Armas" : "Weapons"}</li>
                  <li>{language === "es" ? "Falsificación" : "Counterfeiting"}</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Actividades prohibidas" : "Prohibited activities"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === "es" ? "Spam" : "Spam"}</li>
                  <li>{language === "es" ? "Phishing" : "Phishing"}</li>
                  <li>{language === "es" ? "Estafas" : "Scams"}</li>
                  <li>{language === "es" ? "Fraude" : "Fraud"}</li>
                  <li>{language === "es" ? "Lavado de dinero" : "Money laundering"}</li>
                  <li>{language === "es" ? "Terrorismo" : "Terrorism"}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "10. Monitoreo y cumplimiento" : "10. Monitoring and compliance"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Monitoreo de WhatsApp" : "WhatsApp monitoring"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "WhatsApp monitorea patrones de mensajes"
                      : "WhatsApp monitors message patterns"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Analiza contenido de mensajes"
                      : "Analyzes message content"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Detecta spam y abuso"
                      : "Detects spam and abuse"}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Acciones por incumplimiento" : "Non-compliance actions"}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === "es" ? "Advertencia:" : "Warning:"}</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>
                    {language === "es"
                      ? "Primer incumplimiento con oportunidad de corregir"
                      : "First non-compliance with opportunity to correct"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === "es" ? "Restricción temporal:" : "Temporary restriction:"}</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>
                    {language === "es"
                      ? "Limitación de envío de mensajes"
                      : "Message sending limitation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Período de 24-72 horas típicamente"
                      : "Typically 24-72 hour period"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === "es" ? "Suspensión:" : "Suspension:"}</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>
                    {language === "es"
                      ? "Incapacidad de enviar mensajes"
                      : "Inability to send messages"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Puede ser permanente"
                      : "Can be permanent"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Difícil de revertir"
                      : "Difficult to reverse"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{language === "es" ? "Terminación:" : "Termination:"}</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Cierre permanente de cuenta"
                      : "Permanent account closure"}
                  </li>
                  <li>{language === "es" ? "Pérdida de número" : "Loss of number"}</li>
                  <li>
                    {language === "es"
                      ? "Prohibición de crear nueva cuenta"
                      : "Prohibition from creating new account"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "11. Regulaciones por país" : "11. Country-specific regulations"}
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === "es" ? "Diferentes regulaciones" : "Different regulations"}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Algunos países tienen regulaciones específicas"
                      : "Some countries have specific regulations"}
                  </li>
                  <li>{language === "es" ? "GDPR en Europa" : "GDPR in Europe"}</li>
                  <li>{language === "es" ? "CCPA en California" : "CCPA in California"}</li>
                  <li>
                    {language === "es"
                      ? "Leyes locales en otros países"
                      : "Local laws in other countries"}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "12. Mejores prácticas" : "12. Best practices"}
                </h2>

                <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-6">
                  <li className="ml-4">
                    <strong>{language === "es" ? "Obtén consentimiento claro" : "Get clear consent"}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        {language === "es"
                          ? "Documenta cómo obtuviste el número"
                          : "Document how you got the number"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Mantén registro de consentimiento"
                          : "Keep consent records"}
                      </li>
                    </ul>
                  </li>
                  <li className="ml-4">
                    <strong>{language === "es" ? "Sé transparente" : "Be transparent"}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        {language === "es"
                          ? "Identifícate claramente"
                          : "Identify yourself clearly"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Explica por qué envías mensajes"
                          : "Explain why you send messages"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Proporciona opción de darse de baja"
                          : "Provide opt-out option"}
                      </li>
                    </ul>
                  </li>
                  <li className="ml-4">
                    <strong>{language === "es" ? "Mantén calidad alta" : "Maintain high quality"}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        {language === "es"
                          ? "Responde rápidamente"
                          : "Respond quickly"}
                      </li>
                      <li>{language === "es" ? "Sé profesional" : "Be professional"}</li>
                      <li>
                        {language === "es"
                          ? "Resuelve problemas rápidamente"
                          : "Solve problems quickly"}
                      </li>
                    </ul>
                  </li>
                  <li className="ml-4">
                    <strong>{language === "es" ? "Monitorea tu desempeño" : "Monitor your performance"}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        {language === "es"
                          ? "Revisa tasa de rechazo"
                          : "Review block rate"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Monitorea quejas"
                          : "Monitor complaints"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Ajusta según sea necesario"
                          : "Adjust as needed"}
                      </li>
                    </ul>
                  </li>
                  <li className="ml-4">
                    <strong>{language === "es" ? "Mantente actualizado" : "Stay updated"}</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        {language === "es"
                          ? "Las políticas cambian"
                          : "Policies change"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Suscríbete a actualizaciones de WhatsApp"
                          : "Subscribe to WhatsApp updates"}
                      </li>
                      <li>
                        {language === "es"
                          ? "Revisa regularmente"
                          : "Review regularly"}
                      </li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "Conclusión" : "Conclusion"}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Las políticas de WhatsApp Business API existen para proteger a los usuarios y mantener la integridad de la plataforma. Si las cumples, no tendrás problemas."
                    : "WhatsApp Business API policies exist to protect users and maintain platform integrity. If you comply, you will have no problems."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>{language === "es" ? "Regla de oro:" : "Golden rule:"}</strong>{" "}
                  {language === "es"
                    ? "Trata a los usuarios como te gustaría ser tratado. Si tu comunicación es respetuosa, relevante y transparente, estarás en el lado correcto de las políticas de WhatsApp."
                    : "Treat users as you would like to be treated. If your communication is respectful, relevant and transparent, you will be on the right side of WhatsApp policies."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Recuerda: es mucho más fácil cumplir las políticas desde el inicio que intentar recuperarse de una suspensión de cuenta."
                    : "Remember: it is much easier to comply with policies from the beginning than to try to recover from an account suspension."}
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
                      {language === "es" ? "Artículo anterior" : "Previous article"}
                    </p>
                    <a
                      href="/blog/como-seleccionar-proveedor-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === "es"
                        ? "¿Qué tener en cuenta para seleccionar un proveedor de WhatsApp?"
                        : "What to consider when selecting a WhatsApp provider?"}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      {language === "es" ? "Siguiente artículo" : "Next article"}
                    </p>
                    <a
                      href="/blog/por-que-restringen-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === "es"
                        ? "¿Por qué me pueden restringir el número de WhatsApp?"
                        : "Why can they restrict my WhatsApp number?"}
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
                  {language === "es" ? "Escríbeme por WhatsApp" : "Write me on WhatsApp"}
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
                      {language === "es" ? "Conceptos Básicos" : "Basic Concepts"}
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
                        ? "¿Para qué me sirve WhatsApp Business API para mi negocio?"
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
    </>
  );
}