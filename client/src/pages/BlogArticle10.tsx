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
        <meta name="author" content={language === "es" ? "Alex Murillo, Especialista en Automatización con WhatsApp e IA en Crear.chat" : "Alex Murillo, WhatsApp and AI Automation Specialist at Crear.chat"} />
        <meta name="keywords" content={language === "es" ? "políticas WhatsApp Business API, restricciones WhatsApp, políticas de uso, cumplimiento WhatsApp, evitar suspensión, spam WhatsApp, consentimiento WhatsApp, GDPR WhatsApp, Colombia" : "WhatsApp Business API policies, WhatsApp restrictions, usage policies, WhatsApp compliance, avoid suspension, WhatsApp spam, WhatsApp consent, GDPR WhatsApp, Colombia"} />
        <meta name="topic" content="WhatsApp Business API, Políticas, Restricciones, Cumplimiento, Spam, Consentimiento, Privacidad, Colombia" />
        <meta name="ai-summary" content={language === "es" ? "Las políticas de WhatsApp Business API abarcan 12 áreas clave: calidad de mensajes, consentimiento, privacidad y datos, plantillas, números de teléfono, automatización y bots, comercio y transacciones, seguridad, prohibiciones explícitas, monitoreo y cumplimiento, regulaciones por país, y mejores prácticas. Las consecuencias por incumplimiento van desde advertencias hasta suspensión permanente." : "WhatsApp Business API policies cover 12 key areas: message quality, consent, privacy and data, templates, phone numbers, automation and bots, commerce and transactions, security, explicit prohibitions, monitoring and compliance, country-specific regulations, and best practices. Consequences range from warnings to permanent suspension."} />
        <meta name="ai-entities" content="WhatsApp Business API, políticas de uso, tasa de rechazo, opt-in, opt-out, GDPR, CCPA, plantillas de mensajes, chatbot, automatización, suspensión de cuenta, Colombia" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={language === "es" ? "Las 12 políticas clave de WhatsApp Business API que debes conocer para evitar restricciones y suspensiones. Guía completa con mejores prácticas." : "The 12 key WhatsApp Business API policies you must know to avoid restrictions and suspensions. Complete guide with best practices."} />
        <meta property="og:image" content="https://crear.chat/logo-black.svg" />
        <meta property="og:url" content="https://crear.chat/blog/politicas-whatsapp-business-api" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-03-21" />
        <meta property="article:author" content="Alex Murillo" />
        <meta property="article:section" content={language === "es" ? "Regulaciones" : "Regulations"} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema: BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: language === "es" ? "Políticas de WhatsApp Business API: todo lo que debes saber" : "WhatsApp Business API Policies: everything you need to know",
            datePublished: "2026-03-21",
            dateModified: "2026-04-24",
            author: {
              "@type": "Person",
              name: "Alex Murillo",
              jobTitle: language === "es" ? "Especialista en Automatización con WhatsApp e IA" : "WhatsApp and AI Automation Specialist",
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
            keywords: "políticas WhatsApp Business API, restricciones WhatsApp, cumplimiento, spam, consentimiento, privacidad, Colombia",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: language === "es" ? "Políticas de WhatsApp Business API" : "WhatsApp Business API Policies",
            description: language === "es" ? "Reglas y directrices que establece Meta para el uso de WhatsApp Business API, incluyendo calidad de mensajes, consentimiento, privacidad, plantillas, automatización y cumplimiento normativo." : "Rules and guidelines established by Meta for the use of WhatsApp Business API, including message quality, consent, privacy, templates, automation and regulatory compliance.",
            url: "https://crear.chat/blog/politicas-whatsapp-business-api",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
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
                  {language === "es"
                    ? "Políticas de WhatsApp Business API: todo lo que debes saber en 2026"
                    : "WhatsApp Business API Policies: everything you need to know in 2026"}
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
                      {language === "es" ? "Autor:" : "Author:"} {authorLabel}
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </section>

          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <article className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700">
                      {language === "es"
                        ? "Guía completa sobre políticas de WhatsApp Business API en Colombia. Incluye respuesta corta, 12 áreas regulatorias, consecuencias por incumplimiento y mejores prácticas para evitar restricciones."
                        : "Complete guide about WhatsApp Business API policies in Colombia. Includes short answers, 12 regulatory areas, consequences for non-compliance and best practices to avoid restrictions."}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === "es"
                      ? "WhatsApp tiene políticas estrictas para mantener la integridad de su plataforma. Es crucial entenderlas para evitar problemas que pueden resultar en restricciones o suspensiones permanentes."
                      : "WhatsApp has strict policies to maintain the integrity of its platform. It is crucial to understand them to avoid problems that can result in restrictions or permanent suspensions."}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Estas son las 12 áreas clave que debes conocer para operar WhatsApp Business API sin riesgos."
                      : "These are the 12 key areas you must know to operate WhatsApp Business API without risks."}
                  </p>

                  <section className="grid gap-4 md:grid-cols-2 mb-8">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es" ? "Cifras rápidas" : "Quick figures"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li>{language === "es" ? "12 áreas regulatorias clave" : "12 key regulatory areas"}</li>
                        <li>{language === "es" ? "Tasa de rechazo máxima recomendada: <5%" : "Maximum recommended block rate: <5%"}</li>
                        <li>{language === "es" ? "4 niveles de consecuencias por incumplimiento" : "4 levels of consequences for non-compliance"}</li>
                        <li>{language === "es" ? "Aplicación de GDPR, CCPA y regulaciones locales" : "Enforcement of GDPR, CCPA and local regulations"}</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es" ? "Preguntas clave que responde este artículo" : "Key questions this article answers"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li><a href="#calidad-mensajes" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué es la calidad de mensajes?" : "What is message quality?"}</a></li>
                        <li><a href="#consentimiento" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Cómo debe ser el consentimiento?" : "How should consent be?"}</a></li>
                        <li><a href="#plantillas" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Cómo funcionan las plantillas?" : "How do templates work?"}</a></li>
                        <li><a href="#prohibiciones" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué está prohibido?" : "What is prohibited?"}</a></li>
                        <li><a href="#consecuencias" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué pasa si incumplo?" : "What happens if I violate?"}</a></li>
                      </ul>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "Mapa semántico del tema" : "Semantic map of the topic"}
                    </h2>
                    <p className="text-gray-700 mb-0 leading-relaxed">
                      {language === "es" ? "Si estás evaluando el cumplimiento, también te conviene revisar " : "If you are evaluating compliance, you should also review "}
                      <a href="/blog/por-que-restringen-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "por qué restringen el número de WhatsApp" : "why WhatsApp numbers get restricted"}
                      </a>
                      {", "}
                      <a href="/blog/como-seleccionar-proveedor-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "cómo seleccionar un proveedor" : "how to select a provider"}
                      </a>
                      {" "}{language === "es" ? "y " : "and "}
                      <a href="/consultoria-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "consultoría especializada en WhatsApp Business API" : "specialized WhatsApp Business API consulting"}
                      </a>.
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="calidad-mensajes" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "1. Calidad de mensajes" : "1. Message quality"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "WhatsApp monitorea la calidad de tus mensajes mediante la tasa de rechazo, el contenido y la frecuencia. Mantener una tasa de rechazo inferior al 5% es esencial."
                        : "WhatsApp monitors your message quality through block rate, content and frequency. Keeping a block rate under 5% is essential."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="consentimiento" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "2. Consentimiento" : "2. Consent"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Debes obtener consentimiento explícito antes de enviar mensajes y permitir que los usuarios se den de baja fácilmente."
                        : "You must obtain explicit consent before sending messages and allow users to easily unsubscribe."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "3. Privacidad y datos" : "3. Privacy and data"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Debes cumplir con GDPR, CCPA y regulaciones locales, proteger la información personal y ser transparente sobre el uso de datos."
                        : "You must comply with GDPR, CCPA and local regulations, protect personal information and be transparent about data use."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="plantillas" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "4. Plantillas de mensajes" : "4. Message templates"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Todas las plantillas deben ser aprobadas por WhatsApp antes de usarlas. No pueden contener contenido engañoso ni spam."
                        : "All templates must be approved by WhatsApp before use. They cannot contain misleading content or spam."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "5. Números de teléfono" : "5. Phone numbers"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Tu número debe ser verificado con documentación de negocio. Los cambios frecuentes pueden resultar en restricciones."
                        : "Your number must be verified with business documentation. Frequent changes may result in restrictions."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "6. Automatización y bots" : "6. Automation and bots"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Los bots deben identificarse claramente y no pueden engañar a los usuarios. La automatización debe ser transparente."
                        : "Bots must be clearly identified and cannot deceive users. Automation must be transparent."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "7. Comercio y transacciones" : "7. Commerce and transactions"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Las transacciones deben cumplir con regulaciones locales. WhatsApp no procesa pagos, solo facilita comunicación."
                        : "Transactions must comply with local regulations. WhatsApp does not process payments, only facilitates communication."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "8. Seguridad" : "8. Security"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Debes proteger datos de usuarios y cumplir con estándares de seguridad. WhatsApp monitorea vulnerabilidades."
                        : "You must protect user data and comply with security standards. WhatsApp monitors vulnerabilities."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="prohibiciones" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "9. Prohibiciones explícitas" : "9. Explicit prohibitions"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Está prohibido contenido ilegal, spam, engaño, violencia, contenido sexual no consensuado y actividades fraudulentas."
                        : "Illegal content, spam, deception, violence, non-consensual sexual content and fraudulent activities are prohibited."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="consecuencias" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "10. Consecuencias por incumplimiento" : "10. Consequences for non-compliance"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Las consecuencias van en escala: 1) Advertencia por primer incumplimiento con oportunidad de corregir, 2) Restricción temporal (24-72 horas) de envío de mensajes, 3) Suspensión temporal o permanente con incapacidad de enviar mensajes, 4) Terminación con cierre permanente de cuenta, pérdida del número y prohibición de crear nuevas cuentas."
                        : "Consequences scale as: 1) Warning for first non-compliance with opportunity to correct, 2) Temporary restriction (24-72 hours) on message sending, 3) Temporary or permanent suspension with inability to send messages, 4) Termination with permanent account closure, number loss and prohibition from creating new accounts."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "11. Regulaciones por país" : "11. Country-specific regulations"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Debes cumplir con regulaciones locales como GDPR en Europa, CCPA en California y leyes de datos en Colombia."
                        : "You must comply with local regulations like GDPR in Europe, CCPA in California and data laws in Colombia."}
                    </p>
                  </section>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "12. Mejores prácticas" : "12. Best practices"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Obtén consentimiento explícito, mantén baja tasa de rechazo, usa plantillas aprobadas, permite opt-out fácil y monitorea métricas."
                        : "Get explicit consent, maintain low block rate, use approved templates, allow easy opt-out and monitor metrics."}
                    </p>
                  </section>
                </article>

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
                          ? "¿Cómo seleccionar el proveedor de WhatsApp Business API?"
                          : "How to select WhatsApp Business API provider"}
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
                          ? "¿Por qué WhatsApp restringe números?"
                          : "Why WhatsApp restricts numbers"}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === "es" ? "Compartir artículo" : "Share article"}
                  </h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      {language === "es" ? "Facebook" : "Facebook"}
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {language === "es" ? "WhatsApp" : "WhatsApp"}
                    </button>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {language === "es" ? "Artículos relacionados" : "Related articles"}
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                          {language === "es" ? "Regulaciones" : "Regulations"}
                        </span>
                        <h3 className="font-bold text-lg text-gray-900 mb-3">
                          {language === "es"
                            ? "Diferencia entre WhatsApp Business y WhatsApp Business API"
                            : "Difference between WhatsApp Business and WhatsApp Business API"}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {language === "es"
                            ? "Entiende las diferencias clave entre la app gratuita y la API empresarial."
                            : "Understand the key differences between the free app and the enterprise API."}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>5 min</span>
                          <a href="/blog/diferencia-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                            {language === "es" ? "Leer más" : "Read more"}
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                          {language === "es" ? "Casos de uso" : "Use cases"}
                        </span>
                        <h3 className="font-bold text-lg text-gray-900 mb-3">
                          {language === "es"
                            ? "Casos de uso de WhatsApp Business API"
                            : "WhatsApp Business API use cases"}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {language === "es"
                            ? "Descubre cómo empresas usan WhatsApp para ventas, soporte y automatización."
                            : "Discover how companies use WhatsApp for sales, support and automation."}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>7 min</span>
                          <a href="/blog/casos-uso-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                            {language === "es" ? "Leer más" : "Read more"}
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                          {language === "es" ? "Guía" : "Guide"}
                        </span>
                        <h3 className="font-bold text-lg text-gray-900 mb-3">
                          {language === "es"
                            ? "Primeros pasos para migrar a WhatsApp API"
                            : "First steps to migrate to WhatsApp API"}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {language === "es"
                            ? "Guía paso a paso para comenzar tu migración a WhatsApp Business API."
                            : "Step-by-step guide to start your migration to WhatsApp Business API."}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>7 min</span>
                          <a href="/blog/primeros-pasos-migrar-whatsapp-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                            {language === "es" ? "Leer más" : "Read more"}
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
