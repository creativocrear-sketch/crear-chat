import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle2() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle =
    language === "es"
      ? "Casos de uso de WhatsApp Business API en Colombia | Ventas, soporte y automatización"
      : "WhatsApp Business API use cases in Colombia | Sales, support and automation";

  const pageDescription =
    language === "es"
      ? "Descubre para qué sirve WhatsApp Business API en un negocio: ventas, soporte, reservas, cobranzas y seguimiento. Guía práctica con casos de uso y resultados frecuentes en Colombia."
      : "Discover what WhatsApp Business API is useful for in a business: sales, support, bookings, collections and follow-up. A practical guide with common use cases and outcomes in Colombia.";

  const shareText =
    language === "es"
      ? "Descubre para qué sirve WhatsApp Business API en ventas, soporte, reservas y cobranzas."
      : "Discover what WhatsApp Business API is useful for in sales, support, bookings and collections.";

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
        <link rel="canonical" href="https://crear.chat/blog/casos-uso-whatsapp-business-api" />
        <meta
          name="author"
          content={
            language === "es"
              ? "Alex Murillo, Especialista en Automatización con WhatsApp e IA en Crear.chat"
              : "Alex Murillo, WhatsApp and AI Automation Specialist at Crear.chat"
          }
        />
        <meta name="keywords" content="casos de uso WhatsApp Business API, para que sirve WhatsApp API, automatización WhatsApp Colombia, ventas por WhatsApp, soporte por WhatsApp, cobranzas WhatsApp, reservas WhatsApp, CRM WhatsApp" />
        <meta name="topic" content="WhatsApp Business API, Casos de uso, Ventas, Soporte, Reservas, Cobranzas, Colombia" />
        <meta
          name="ai-summary"
          content={
            language === "es"
              ? "WhatsApp Business API sirve para automatizar ventas, soporte, reservas, cobranzas y seguimiento postventa. En Colombia se usa para responder más rápido, integrar CRM y escalar conversaciones sin aumentar personal al mismo ritmo."
              : "WhatsApp Business API is used to automate sales, support, bookings, collections and post-sale follow-up. In Colombia it helps companies respond faster, integrate CRM and scale conversations without increasing headcount at the same pace."
          }
        />
        <meta name="ai-entities" content="WhatsApp Business API, ventas, soporte, reservas, cobranzas, CRM, automatización, atención al cliente, Colombia" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={
            language === "es"
              ? "Respuesta corta: WhatsApp Business API sirve para vender, atender, confirmar reservas, cobrar y hacer seguimiento con automatización e integración con CRM."
              : "Short answer: WhatsApp Business API is used to sell, support, confirm bookings, collect payments and follow up with automation and CRM integration."
          }
        />
        <meta property="og:image" content="https://crear.chat/logo-black.svg" />
        <meta property="og:url" content="https://crear.chat/blog/casos-uso-whatsapp-business-api" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-03-21" />
        <meta property="article:author" content="Alex Murillo" />
        <meta property="article:section" content={language === "es" ? "Casos de uso" : "Use cases"} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: pageTitle,
            datePublished: "2026-03-21",
            dateModified: "2026-04-23",
            author: {
              "@type": "Person",
              name: "Alex Murillo",
              jobTitle: language === "es" ? "Especialista en Automatización con WhatsApp e IA" : "WhatsApp and AI Automation Specialist",
              worksFor: {
                "@type": "Organization",
                name: "Crear.chat",
              },
              url: "https://co.linkedin.com/in/alexandermurillo",
              sameAs: ["https://crear.chat", "https://co.linkedin.com/in/alexandermurillo"],
            },
            publisher: {
              "@type": "Organization",
              name: "Crear.chat",
              logo: {
                "@type": "ImageObject",
                url: "https://crear.chat/logo-black.svg",
              },
              url: "https://crear.chat",
            },
            image: "https://crear.chat/logo-black.svg",
            description: pageDescription,
            keywords: "WhatsApp Business API, ventas, soporte, reservas, cobranzas, automatización, Colombia",
            articleSection: language === "es" ? "Casos de uso" : "Use cases",
            inLanguage: language === "es" ? "es" : "en",
            wordCount: 3300,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://crear.chat/blog/casos-uso-whatsapp-business-api",
            },
            about: [
              { "@type": "Thing", name: "WhatsApp Business API" },
              { "@type": "Thing", name: language === "es" ? "Automatización de ventas" : "Sales automation" },
              { "@type": "Thing", name: language === "es" ? "Atención al cliente" : "Customer support" },
              { "@type": "Thing", name: language === "es" ? "Reservas" : "Bookings" },
              { "@type": "Thing", name: language === "es" ? "Cobranzas" : "Collections" },
            ],
            mentions: [
              { "@type": "Thing", name: "CRM" },
              { "@type": "Thing", name: "Meta" },
              { "@type": "Thing", name: "Colombia" },
            ],
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Blog",
                  item: "https://crear.chat/blog",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name:
                    language === "es"
                      ? "Casos de uso de WhatsApp Business API"
                      : "WhatsApp Business API use cases",
                  item: "https://crear.chat/blog/casos-uso-whatsapp-business-api",
                },
              ],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Para qué sirve WhatsApp Business API en un negocio?"
                    : "What is WhatsApp Business API useful for in a business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "WhatsApp Business API sirve para automatizar ventas, soporte, reservas, cobranzas y seguimiento con integración a CRM y otros sistemas."
                      : "WhatsApp Business API is used to automate sales, support, bookings, collections and follow-up with CRM and system integration.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Qué empresas deberían usar WhatsApp Business API?"
                    : "Which companies should use WhatsApp Business API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Deberían usarla empresas con alto volumen de mensajes, varios agentes, seguimiento comercial o necesidad de automatización en ventas y soporte."
                      : "Companies with high message volume, multiple agents, commercial follow-up or a need for automation in sales and support should use it.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Cómo ayuda WhatsApp Business API a vender más?"
                    : "How does WhatsApp Business API help increase sales?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Ayuda a vender más al responder en segundos, recuperar leads, enviar seguimiento automático y conectar inventario, CRM o pagos dentro del flujo comercial."
                      : "It helps increase sales by replying in seconds, recovering leads, sending automated follow-up and connecting inventory, CRM or payments into the sales flow.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Cómo reduce tiempos de respuesta?"
                    : "How does it reduce response times?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Reduce tiempos de respuesta porque automatiza preguntas frecuentes, enruta conversaciones y deja a los agentes humanos solo los casos complejos."
                      : "It reduces response times by automating common questions, routing conversations and leaving only complex cases to human agents.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Cuánto puede automatizar una empresa con WhatsApp Business API?"
                    : "How much can a company automate with WhatsApp Business API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Una empresa puede automatizar gran parte del primer contacto, seguimiento, recordatorios, confirmaciones y consultas frecuentes, mientras conserva intervención humana para cierres o excepciones."
                      : "A company can automate much of the first contact, follow-up, reminders, confirmations and common questions while keeping human intervention for closures or exceptions.",
                },
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: language === "es" ? "Casos de uso de WhatsApp Business API" : "WhatsApp Business API use cases",
            description:
              language === "es"
                ? "Aplicaciones prácticas de WhatsApp Business API para ventas, soporte, reservas, cobranzas y seguimiento empresarial."
                : "Practical applications of WhatsApp Business API for sales, support, bookings, collections and business follow-up.",
            url: "https://crear.chat/blog/casos-uso-whatsapp-business-api",
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
                    {language === "es" ? "Casos de uso" : "Use cases"}
                  </span>
                </div>

                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  {language === "es"
                    ? "¿Para qué sirve WhatsApp Business API para mi negocio?"
                    : "What is WhatsApp Business API useful for in my business?"}
                </h1>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{language === "es" ? "21 de Marzo de 2026" : "March 21, 2026"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>7 {language === "es" ? "min de lectura" : "min read"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{language === "es" ? "Autor:" : "Author:"} {authorLabel}</span>
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
                        ? "Guía práctica sobre para qué sirve WhatsApp Business API. Incluye respuesta corta, casos de uso, señales para implementarlo y resumen fácil de reutilizar por IA."
                        : "Practical guide about what WhatsApp Business API is useful for. Includes a short answer, use cases, implementation signals and an AI-friendly summary."}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === "es"
                      ? "Muchas empresas escuchan que WhatsApp Business API sirve para automatizar, pero no aterrizan qué procesos se pueden mover realmente a este canal."
                      : "Many companies hear that WhatsApp Business API can automate operations, but they do not map which processes can actually move into this channel."}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "La mejor forma de entender su valor es verlo por casos de uso: ventas, soporte, reservas, cobranzas y seguimiento después de la compra."
                      : "The best way to understand its value is by looking at use cases: sales, support, bookings, collections and post-purchase follow-up."}
                  </p>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="para-que-sirve-whatsapp-business-api" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es"
                        ? "¿Para qué sirve WhatsApp Business API en un negocio?"
                        : "What is WhatsApp Business API useful for in a business?"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "WhatsApp Business API sirve para automatizar conversaciones de ventas, soporte, reservas, cobranzas y seguimiento, conectando WhatsApp con CRM, agendas, inventario o pagos."
                        : "WhatsApp Business API is used to automate sales, support, bookings, collections and follow-up conversations by connecting WhatsApp with CRM, calendars, inventory or payments."}
                    </p>
                    <p className="text-gray-600 mb-0 leading-relaxed">
                      {language === "es"
                        ? "No se trata solo de responder mensajes. Se trata de convertir WhatsApp en un canal operativo de negocio."
                        : "It is not only about replying to messages. It is about turning WhatsApp into an operational business channel."}
                    </p>
                  </section>

                  <section className="grid gap-4 md:grid-cols-2 mb-8">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es" ? "Cifras rápidas" : "Quick figures"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li>{language === "es" ? "Automatización inicial frecuente: 40% a 80% del primer contacto" : "Common initial automation: 40% to 80% of first-contact interactions"}</li>
                        <li>{language === "es" ? "Reducción de tiempos de respuesta: de horas a minutos" : "Response-time reduction: from hours to minutes"}</li>
                        <li>{language === "es" ? "Casos más comunes: ventas, soporte, reservas y cobranzas" : "Most common cases: sales, support, bookings and collections"}</li>
                        <li>{language === "es" ? "Valor clave: integrar WhatsApp con CRM o procesos internos" : "Key value: connecting WhatsApp with CRM or internal workflows"}</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es"
                          ? "Preguntas clave que responde este artículo"
                          : "Key questions this article answers"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li><a href="#ventas-y-recuperacion-de-leads" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Cómo ayuda a vender más?" : "How does it help increase sales?"}</a></li>
                        <li><a href="#soporte-y-servicio-al-cliente" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Cómo mejora soporte y servicio?" : "How does it improve support and service?"}</a></li>
                        <li><a href="#reservas-y-confirmaciones" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Cómo sirve para reservas y confirmaciones?" : "How does it work for bookings and confirmations?"}</a></li>
                        <li><a href="#cobranzas-y-recordatorios" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Cómo reduce fricción en cobranzas?" : "How does it reduce friction in collections?"}</a></li>
                        <li><a href="#que-empresas-deberian-usarlo" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué empresas deberían usarlo?" : "Which companies should use it?"}</a></li>
                      </ul>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "Mapa semántico del tema" : "Semantic map of the topic"}
                    </h2>
                    <p className="text-gray-700 mb-0 leading-relaxed">
                      {language === "es" ? "Si estás evaluando estos casos de uso, también conviene revisar " : "If you are evaluating these use cases, it also helps to review "}
                      <a href="/blog/diferencia-whatsapp-business-api" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "la diferencia entre WhatsApp Business y API" : "the difference between WhatsApp Business and API"}
                      </a>
                      ,{" "}
                      <a href="/blog/primeros-pasos-migrar-whatsapp-api" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "los primeros pasos para migrar" : "the first steps to migrate"}
                      </a>
                      {" "}{language === "es" ? "y " : "and "}
                      <a href="/blog/beneficios-whatsapp-business-api-ia" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "los beneficios de combinar API con IA" : "the benefits of combining API with AI"}
                      </a>
                      .
                    </p>
                  </section>

                  <h2 id="ventas-y-recuperacion-de-leads" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Ventas y recuperación de leads" : "Sales and lead recovery"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "WhatsApp Business API ayuda a vender más cuando responde rápido, califica leads, envía seguimiento automático y evita que conversaciones comerciales se enfríen."
                      : "WhatsApp Business API helps increase sales when it replies quickly, qualifies leads, sends automated follow-up and prevents sales conversations from going cold."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Responder consultas de campañas en segundos" : "Reply to campaign inquiries in seconds"}</li>
                    <li>{language === "es" ? "Capturar datos y llevarlos al CRM" : "Capture data and send it to CRM"}</li>
                    <li>{language === "es" ? "Recordar cotizaciones o carritos abandonados" : "Remind customers about quotes or abandoned carts"}</li>
                    <li>{language === "es" ? "Asignar oportunidades al asesor correcto" : "Route opportunities to the right advisor"}</li>
                  </ul>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Esto suele ser especialmente útil en inmobiliarias, clínicas, educación, automotriz, retail y servicios con ciclos de decisión cortos o medianos."
                      : "This is especially useful in real estate, clinics, education, automotive, retail and services with short or medium decision cycles."}
                  </p>

                  <h2 id="soporte-y-servicio-al-cliente" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Soporte y servicio al cliente" : "Support and customer service"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Sirve para atender preguntas frecuentes, clasificar solicitudes, dar estado de casos y escalar a un agente humano solo cuando hace falta."
                      : "It is used to handle common questions, classify requests, provide case status and escalate to a human agent only when needed."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Resolver preguntas repetitivas sin intervención humana" : "Resolve repetitive questions without human intervention"}</li>
                    <li>{language === "es" ? "Enviar actualizaciones de pedidos, citas o casos" : "Send updates about orders, appointments or cases"}</li>
                    <li>{language === "es" ? "Priorizar conversaciones urgentes" : "Prioritize urgent conversations"}</li>
                    <li>{language === "es" ? "Mantener trazabilidad por cliente" : "Maintain traceability by customer"}</li>
                  </ul>

                  <h2 id="reservas-y-confirmaciones" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Reservas y confirmaciones" : "Bookings and confirmations"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "WhatsApp Business API sirve para confirmar citas, reducir ausencias, reprogramar reservas y recordar eventos sin depender de llamadas manuales."
                      : "WhatsApp Business API is useful for confirming appointments, reducing no-shows, rescheduling bookings and sending reminders without relying on manual calls."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Enviar confirmación inmediata" : "Send immediate confirmation"}</li>
                    <li>{language === "es" ? "Recordar 24 horas o 2 horas antes" : "Send reminders 24 hours or 2 hours before"}</li>
                    <li>{language === "es" ? "Permitir cambio o cancelación desde el chat" : "Allow rescheduling or cancellation from chat"}</li>
                    <li>{language === "es" ? "Actualizar agendas automáticamente" : "Update calendars automatically"}</li>
                  </ul>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Este caso de uso es muy fuerte en restaurantes, hoteles, clínicas, talleres, spas y educación."
                      : "This use case is especially strong in restaurants, hotels, clinics, workshops, spas and education."}
                  </p>

                  <h2 id="cobranzas-y-recordatorios" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Cobranzas y recordatorios de pago" : "Collections and payment reminders"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "También sirve para cobrar mejor: enviar recordatorios, compartir enlaces de pago y hacer seguimiento más humano que una llamada fría."
                      : "It also helps with collections: sending reminders, sharing payment links and following up in a more human way than a cold call."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Notificar vencimientos y saldos pendientes" : "Notify due dates and outstanding balances"}</li>
                    <li>{language === "es" ? "Ofrecer enlaces de pago o convenios" : "Offer payment links or payment arrangements"}</li>
                    <li>{language === "es" ? "Registrar respuestas y compromisos" : "Record replies and commitments"}</li>
                    <li>{language === "es" ? "Disparar seguimiento según comportamiento" : "Trigger follow-up based on behavior"}</li>
                  </ul>

                  <h2 id="seguimiento-postventa" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Seguimiento postventa y fidelización" : "Post-sale follow-up and loyalty"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "WhatsApp Business API también sirve después de vender: pedir documentos, medir satisfacción, activar recompra y mantener relación con el cliente."
                      : "WhatsApp Business API is also useful after the sale: requesting documents, measuring satisfaction, prompting repeat purchases and maintaining the customer relationship."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Solicitar feedback o NPS" : "Request feedback or NPS"}</li>
                    <li>{language === "es" ? "Enviar guías, garantías o instrucciones" : "Send guides, warranties or instructions"}</li>
                    <li>{language === "es" ? "Activar campañas de recompra" : "Trigger repeat-purchase campaigns"}</li>
                    <li>{language === "es" ? "Segmentar clientes según historial" : "Segment customers by history"}</li>
                  </ul>

                  <h2 id="que-empresas-deberian-usarlo" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "¿Qué empresas deberían usarlo?" : "Which companies should use it?"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Deberían usar WhatsApp Business API las empresas que ya tienen volumen, varios agentes, seguimiento comercial o necesidad de medir y automatizar conversaciones."
                      : "Companies that already have volume, multiple agents, commercial follow-up or a need to measure and automate conversations should use WhatsApp Business API."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Negocios que atienden más de 100 conversaciones al día" : "Businesses handling more than 100 conversations per day"}</li>
                    <li>{language === "es" ? "Equipos comerciales con leads por campañas" : "Commercial teams with campaign-generated leads"}</li>
                    <li>{language === "es" ? "Operaciones con citas, reservas o recordatorios" : "Operations with appointments, bookings or reminders"}</li>
                    <li>{language === "es" ? "Empresas que usan CRM o quieren usarlo mejor" : "Companies already using CRM or wanting to use it better"}</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Implementación por etapas" : "Implementation by stages"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Lo normal no es automatizar todo desde el día uno. Lo más efectivo es empezar con un caso claro, medirlo y luego ampliar a otros procesos."
                      : "It is not normal to automate everything on day one. The most effective approach is to start with one clear use case, measure it and then expand to other processes."}
                  </p>

                  <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Elegir el flujo con más volumen o fricción" : "Choose the flow with the most volume or friction"}</li>
                    <li>{language === "es" ? "Conectarlo con CRM, agenda o pagos" : "Connect it with CRM, calendar or payments"}</li>
                    <li>{language === "es" ? "Automatizar primer contacto y seguimiento" : "Automate first contact and follow-up"}</li>
                    <li>{language === "es" ? "Escalar a más áreas cuando ya haya datos" : "Scale to more areas once there is data"}</li>
                  </ol>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "FAQ breve" : "Short FAQ"}
                  </h2>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Para qué sirve WhatsApp Business API en un negocio?" : "What is WhatsApp Business API useful for in a business?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Sirve para automatizar ventas, soporte, reservas, cobranzas y seguimiento con más orden, velocidad e integración con sistemas."
                      : "It is used to automate sales, support, bookings, collections and follow-up with more structure, speed and systems integration."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Qué empresas deberían usarlo?" : "Which companies should use it?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Empresas con alto volumen de mensajes, varios agentes o necesidad de seguimiento comercial y servicio al cliente."
                      : "Companies with high message volume, multiple agents or a need for commercial follow-up and customer service."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Cómo ayuda a vender más?" : "How does it help increase sales?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Ayuda a vender más porque responde antes, recupera leads y sostiene el seguimiento sin depender de tareas manuales."
                      : "It helps increase sales because it replies faster, recovers leads and sustains follow-up without depending on manual tasks."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Cómo reduce tiempos de respuesta?" : "How does it reduce response times?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Reduce tiempos de respuesta al automatizar preguntas frecuentes, enrutamiento y primeras respuestas."
                      : "It reduces response times by automating common questions, routing and first replies."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Cuánto puede automatizar?" : "How much can it automate?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Puede automatizar gran parte del primer contacto, confirmaciones, recordatorios y seguimiento, dejando casos complejos al equipo humano."
                      : "It can automate much of first contact, confirmations, reminders and follow-up, leaving complex cases to the human team."}
                  </p>

                  <h2 id="resumen" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Resumen" : "Summary"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "WhatsApp Business API sirve para automatizar ventas, soporte, reservas, cobranzas y seguimiento postventa. Su valor principal está en responder más rápido, ordenar conversaciones, integrar CRM y escalar operaciones sin aumentar personal al mismo ritmo. En Colombia suele aplicarse primero donde hay más fricción: leads, servicio al cliente, citas y recaudo."
                      : "WhatsApp Business API is used to automate sales, support, bookings, collections and post-sale follow-up. Its main value lies in faster responses, structured conversations, CRM integration and scaling operations without increasing headcount at the same rate. In Colombia it is usually applied first where there is more friction: leads, customer service, appointments and collections."}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Conclusión" : "Conclusion"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "WhatsApp Business API no sirve para una sola cosa. Sirve para convertir conversaciones en procesos medibles y escalables. Si tu negocio ya usa WhatsApp como canal principal, el siguiente paso es dejar de operarlo de forma manual."
                      : "WhatsApp Business API is not useful for just one thing. It turns conversations into measurable and scalable processes. If your business already uses WhatsApp as a main channel, the next step is to stop operating it manually."}
                  </p>
                </article>

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
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </button>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 mb-1">
                        {language === "es" ? "Artículo anterior" : "Previous article"}
                      </p>
                      <a
                        href="/blog/diferencia-whatsapp-business-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                      >
                        {language === "es"
                          ? "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?"
                          : "What is the difference between WhatsApp Business and WhatsApp Business API?"}
                      </a>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">
                        {language === "es" ? "Siguiente artículo" : "Next article"}
                      </p>
                      <a
                        href="/blog/primeros-pasos-migrar-whatsapp-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                      >
                        {language === "es"
                          ? "¿Cuáles son los primeros pasos para migrar WhatsApp Business API?"
                          : "What are the first steps to migrate WhatsApp Business API?"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
                  <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                    {language === "es" ? "¿Quieres aplicar uno de estos casos en tu negocio?" : "Want to apply one of these use cases to your business?"}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {language === "es"
                      ? "Escríbeme y definimos qué flujo conviene automatizar primero para que el cambio tenga impacto comercial desde el inicio."
                      : "Write to me and we will define which flow should be automated first so the change has commercial impact from the start."}
                  </p>

                  <a
                    href="https://wa.me/+573105317126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {language === "es" ? "Escríbeme por WhatsApp" : "Write me on WhatsApp"}
                  </a>
                </div>
              </div>
            </div>
          </section>

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
                        {language === "es" ? "Conceptos básicos" : "Basic concepts"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?"
                          : "What is the difference between WhatsApp Business and WhatsApp Business API?"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "Entiende cuándo sirve la app y cuándo ya necesitas una infraestructura empresarial."
                          : "Understand when the app is enough and when you already need enterprise infrastructure."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>7 min</span>
                        <a href="/blog/diferencia-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
                          ? "Revisa la ruta práctica para pasar de operación manual a operación escalable."
                          : "Review the practical path from manual operation to scalable operation."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>7 min</span>
                        <a href="/blog/primeros-pasos-migrar-whatsapp-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                          {language === "es" ? "Leer más" : "Read more"}
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                        {language === "es" ? "Tendencias" : "Trends"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "¿Qué beneficios tengo usando WhatsApp Business API + IA?"
                          : "What benefits do I get using WhatsApp Business API + AI?"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "Mira cómo la IA potencia automatización, ventas y servicio al cliente."
                          : "See how AI amplifies automation, sales and customer service."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>6 min</span>
                        <a href="/blog/beneficios-whatsapp-business-api-ia" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
    </>
  );
}
