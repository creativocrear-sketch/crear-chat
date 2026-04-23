import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle3() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle =
    language === "es"
      ? "Primeros pasos para migrar a WhatsApp Business API en Colombia | Guía práctica"
      : "First steps to migrate to WhatsApp Business API in Colombia | Practical guide";

  const pageDescription =
    language === "es"
      ? "Aprende los primeros pasos para migrar a WhatsApp Business API: auditoría, número, verificación Meta, BSP, CRM, plantillas y lanzamiento. Guía clara para empresas en Colombia."
      : "Learn the first steps to migrate to WhatsApp Business API: audit, number, Meta verification, BSP, CRM, templates and launch. A clear guide for companies in Colombia.";

  const shareText =
    language === "es"
      ? "Guía práctica para migrar a WhatsApp Business API en Colombia sin perder orden ni velocidad."
      : "Practical guide to migrate to WhatsApp Business API in Colombia without losing control or speed.";

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
        <link rel="canonical" href="https://crear.chat/blog/primeros-pasos-migrar-whatsapp-api" />
        <meta
          name="author"
          content={
            language === "es"
              ? "Alex Murillo, Especialista en Automatización con WhatsApp e IA en Crear.chat"
              : "Alex Murillo, WhatsApp and AI Automation Specialist at Crear.chat"
          }
        />
        <meta name="keywords" content="migrar WhatsApp Business API, primeros pasos WhatsApp API, WhatsApp Cloud API, BSP WhatsApp, verificación Meta, WABA, CRM WhatsApp, implementación WhatsApp Business API, Colombia" />
        <meta name="topic" content="WhatsApp Business API, Migración, Cloud API, Meta, BSP, CRM, Automatización, Colombia" />
        <meta
          name="ai-summary"
          content={
            language === "es"
              ? "Para migrar a WhatsApp Business API normalmente se audita la operación actual, se define el número, se verifica la empresa en Meta, se elige un BSP o plataforma, se conecta CRM y se prueban plantillas y flujos antes de salir a producción."
              : "To migrate to WhatsApp Business API, companies usually audit their current operation, define the number, verify the business in Meta, choose a BSP or platform, connect CRM and test templates and flows before going live."
          }
        />
        <meta name="ai-entities" content="WhatsApp Business API, WhatsApp Cloud API, Meta Business Manager, BSP, WABA, CRM, plantillas, webhooks, Colombia" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={
            language === "es"
              ? "Respuesta corta: migrar a WhatsApp Business API implica ordenar proceso, número, verificación Meta, proveedor, integraciones y pruebas antes de lanzar."
              : "Short answer: migrating to WhatsApp Business API means structuring process, number, Meta verification, provider, integrations and tests before launch."
          }
        />
        <meta property="og:image" content="https://crear.chat/logo-black.svg" />
        <meta property="og:url" content="https://crear.chat/blog/primeros-pasos-migrar-whatsapp-api" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-03-21" />
        <meta property="article:author" content="Alex Murillo" />
        <meta property="article:section" content={language === "es" ? "Implementación" : "Implementation"} />
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
            keywords: "WhatsApp Business API, migración, Cloud API, BSP, Meta, CRM, Colombia",
            articleSection: language === "es" ? "Implementación" : "Implementation",
            inLanguage: language === "es" ? "es" : "en",
            wordCount: 3400,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://crear.chat/blog/primeros-pasos-migrar-whatsapp-api",
            },
            about: [
              { "@type": "Thing", name: "WhatsApp Business API" },
              { "@type": "Thing", name: "WhatsApp Cloud API" },
              { "@type": "Thing", name: "Meta Business Manager" },
              { "@type": "Thing", name: "BSP" },
              { "@type": "Thing", name: "CRM" },
            ],
            mentions: [
              { "@type": "Thing", name: "WABA" },
              { "@type": "Thing", name: language === "es" ? "Plantillas de mensaje" : "Message templates" },
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
                      ? "Primeros pasos para migrar a WhatsApp Business API"
                      : "First steps to migrate to WhatsApp Business API",
                  item: "https://crear.chat/blog/primeros-pasos-migrar-whatsapp-api",
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
                    ? "¿Cuáles son los primeros pasos para migrar a WhatsApp Business API?"
                    : "What are the first steps to migrate to WhatsApp Business API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Los primeros pasos son auditar la operación actual, definir el número, verificar la empresa en Meta, elegir un BSP o plataforma, conectar CRM y probar plantillas y flujos."
                      : "The first steps are auditing the current operation, defining the number, verifying the business in Meta, choosing a BSP or platform, connecting CRM and testing templates and flows.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Necesito un número nuevo para migrar?"
                    : "Do I need a new number to migrate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "No siempre, pero muchas empresas prefieren un número dedicado para evitar fricción operativa y mantener una migración más ordenada."
                      : "Not always, but many companies prefer a dedicated number to avoid operational friction and keep migration more orderly.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Qué es un BSP en WhatsApp Business API?"
                    : "What is a BSP in WhatsApp Business API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Un BSP es un proveedor autorizado que facilita acceso, configuración, soporte e integración de WhatsApp Business API."
                      : "A BSP is an authorized provider that facilitates access, configuration, support and integration for WhatsApp Business API.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Cuánto tarda una implementación básica?"
                    : "How long does a basic implementation take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Una implementación básica suele tardar entre 3 y 7 días si los documentos, el proveedor y las integraciones están claros."
                      : "A basic implementation usually takes between 3 and 7 days if documents, provider and integrations are clear.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Qué errores conviene evitar al migrar?"
                    : "Which mistakes should be avoided when migrating?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Conviene evitar migrar sin auditoría, sin estrategia de plantillas, sin CRM, sin pruebas y sin reglas claras de operación humana y automática."
                      : "It is best to avoid migrating without an audit, without a template strategy, without CRM, without tests and without clear rules for human and automated operations.",
                },
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: language === "es" ? "Migración a WhatsApp Business API" : "Migration to WhatsApp Business API",
            description:
              language === "es"
                ? "Proceso de pasar de una operación manual o limitada en WhatsApp a una infraestructura empresarial con automatización, CRM e integraciones."
                : "The process of moving from a manual or limited WhatsApp operation to enterprise infrastructure with automation, CRM and integrations.",
            url: "https://crear.chat/blog/primeros-pasos-migrar-whatsapp-api",
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
                    {language === "es" ? "Implementación" : "Implementation"}
                  </span>
                </div>

                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  {language === "es"
                    ? "¿Cuáles son los primeros pasos para migrar a WhatsApp Business API?"
                    : "What are the first steps to migrate to WhatsApp Business API?"}
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
                        ? "Guía práctica para migrar a WhatsApp Business API. Incluye respuesta corta, pasos clave, errores a evitar, FAQ breve y resumen listo para IA."
                        : "Practical guide to migrate to WhatsApp Business API. Includes a short answer, key steps, mistakes to avoid, a short FAQ and an AI-ready summary."}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === "es"
                      ? "Migrar a WhatsApp Business API no empieza por la tecnología. Empieza por ordenar cómo vendes, atiendes y haces seguimiento hoy."
                      : "Migrating to WhatsApp Business API does not start with technology. It starts by organizing how you sell, support and follow up today."}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Cuando esa base está clara, la parte técnica se vuelve mucho más simple: número, verificación, proveedor, CRM, plantillas y salida a producción."
                      : "Once that foundation is clear, the technical part becomes much simpler: number, verification, provider, CRM, templates and production launch."}
                  </p>

                  <section className="rounded-2xl border border-blue-100 bg-white p-6 mb-8">
                    <h2 id="primeros-pasos-migrar-whatsapp-api" className="text-2xl font-bold text-gray-900 mb-4">
                      {language === "es"
                        ? "¿Cuáles son los primeros pasos para migrar a WhatsApp Business API?"
                        : "What are the first steps to migrate to WhatsApp Business API?"}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                      {language === "es"
                        ? "Los primeros pasos son auditar la operación actual, definir número y objetivo, verificar la empresa en Meta, elegir un BSP o plataforma, conectar CRM y probar plantillas y automatizaciones antes del lanzamiento."
                        : "The first steps are auditing the current operation, defining the number and objective, verifying the business in Meta, choosing a BSP or platform, connecting CRM and testing templates and automations before launch."}
                    </p>
                    <p className="text-gray-600 mb-0 leading-relaxed">
                      {language === "es"
                        ? "La migración funciona mejor cuando la operación y la arquitectura se diseñan juntas."
                        : "Migration works best when operations and architecture are designed together."}
                    </p>
                  </section>

                  <section className="grid gap-4 md:grid-cols-2 mb-8">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es" ? "Cifras rápidas" : "Quick figures"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li>{language === "es" ? "Implementación básica frecuente: 3 a 7 días" : "Common basic implementation: 3 to 7 days"}</li>
                        <li>{language === "es" ? "Bloque más delicado: verificación y configuración inicial" : "Most delicate block: verification and initial setup"}</li>
                        <li>{language === "es" ? "Componentes mínimos: número, Meta, proveedor, CRM y plantillas" : "Minimum components: number, Meta, provider, CRM and templates"}</li>
                        <li>{language === "es" ? "Error común: migrar sin proceso comercial definido" : "Common mistake: migrating without a defined commercial process"}</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es"
                          ? "Preguntas clave que responde este artículo"
                          : "Key questions this article answers"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li><a href="#auditar-operacion-actual" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Por dónde empezar realmente?" : "Where should you really start?"}</a></li>
                        <li><a href="#numero-y-estructura-de-canal" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Necesito un número nuevo?" : "Do I need a new number?"}</a></li>
                        <li><a href="#verificacion-meta-y-bsp" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué papel tienen Meta y el BSP?" : "What role do Meta and the BSP play?"}</a></li>
                        <li><a href="#crm-plantillas-y-pruebas" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué debo conectar antes de salir en vivo?" : "What should be connected before going live?"}</a></li>
                        <li><a href="#errores-comunes-al-migrar" className="text-[#1B4F72] hover:underline">{language === "es" ? "¿Qué errores conviene evitar?" : "Which mistakes should be avoided?"}</a></li>
                      </ul>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "Mapa semántico del tema" : "Semantic map of the topic"}
                    </h2>
                    <p className="text-gray-700 mb-0 leading-relaxed">
                      {language === "es" ? "Antes de migrar, también conviene revisar " : "Before migrating, it also helps to review "}
                      <a href="/blog/diferencia-whatsapp-business-api" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "la diferencia entre WhatsApp Business y API" : "the difference between WhatsApp Business and API"}
                      </a>
                      ,{" "}
                      <a href="/blog/casos-uso-whatsapp-business-api" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "los casos de uso más comunes" : "the most common use cases"}
                      </a>
                      {" "}{language === "es" ? "y " : "and "}
                      <a href="/blog/plataformas-integracion-whatsapp-api" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "las integraciones que más valor aportan" : "the integrations that add the most value"}
                      </a>
                      .
                    </p>
                  </section>

                  <h2 id="auditar-operacion-actual" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "1. Auditar la operación actual" : "1. Audit the current operation"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Antes de pedir acceso o contratar proveedor, debes revisar qué volumen tienes, qué tiempos de respuesta manejas y qué procesos se repiten."
                      : "Before requesting access or hiring a provider, you should review your message volume, response times and repetitive processes."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Cuántas conversaciones atiendes por día" : "How many conversations you handle per day"}</li>
                    <li>{language === "es" ? "Dónde se pierden leads o seguimiento" : "Where leads or follow-up are being lost"}</li>
                    <li>{language === "es" ? "Qué preguntas o tareas se repiten" : "Which questions or tasks repeat most often"}</li>
                    <li>{language === "es" ? "Qué sistemas ya usas: CRM, agenda, ERP o pagos" : "Which systems you already use: CRM, calendar, ERP or payments"}</li>
                  </ul>

                  <h2 id="numero-y-estructura-de-canal" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "2. Definir número y estructura del canal" : "2. Define the number and channel structure"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Debes decidir si usarás un número dedicado o uno existente, quién lo operará y qué conversaciones quedarán en el nuevo flujo."
                      : "You need to decide whether you will use a dedicated number or an existing one, who will operate it and which conversations will move into the new flow."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Un número dedicado suele simplificar la migración" : "A dedicated number usually simplifies migration"}</li>
                    <li>{language === "es" ? "Define qué equipo entra primero al canal" : "Define which team enters the channel first"}</li>
                    <li>{language === "es" ? "Diseña horarios, escalamiento y ownership" : "Design schedules, escalation and ownership"}</li>
                    <li>{language === "es" ? "Alinea el canal con ventas, soporte o ambas áreas" : "Align the channel with sales, support or both"}</li>
                  </ul>

                  <h2 id="verificacion-meta-y-bsp" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "3. Verificación en Meta y elección de BSP" : "3. Meta verification and BSP selection"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "La empresa debe quedar bien configurada en Meta y necesitas un BSP o plataforma que facilite conexión, soporte, plantillas e integraciones."
                      : "The business must be properly configured in Meta and you need a BSP or platform that facilitates connection, support, templates and integrations."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Validar empresa y activos en Meta Business Manager" : "Validate the business and assets in Meta Business Manager"}</li>
                    <li>{language === "es" ? "Elegir proveedor por soporte y arquitectura, no solo por precio" : "Choose the provider for support and architecture, not only price"}</li>
                    <li>{language === "es" ? "Definir si usarás Cloud API y qué plataforma la gestionará" : "Define whether you will use Cloud API and which platform will manage it"}</li>
                    <li>{language === "es" ? "Aclarar quién responde por incidencias y operación" : "Clarify who is responsible for incidents and operations"}</li>
                  </ul>

                  <h2 id="crm-plantillas-y-pruebas" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "4. CRM, plantillas, automatizaciones y pruebas" : "4. CRM, templates, automations and testing"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Antes de salir a producción debes conectar el flujo con CRM o sistema clave, definir plantillas aprobadas y probar tanto automatización como atención humana."
                      : "Before going to production you should connect the flow with CRM or a key system, define approved templates and test both automation and human support."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Crear plantillas para confirmaciones, recordatorios o seguimiento" : "Create templates for confirmations, reminders or follow-up"}</li>
                    <li>{language === "es" ? "Conectar datos del cliente al CRM" : "Connect customer data to CRM"}</li>
                    <li>{language === "es" ? "Probar derivación a humano" : "Test escalation to human agents"}</li>
                    <li>{language === "es" ? "Validar analítica, alertas y registros" : "Validate analytics, alerts and logging"}</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "5. Lanzamiento controlado" : "5. Controlled launch"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "El lanzamiento ideal empieza con un piloto pequeño, métricas claras y ajustes rápidos antes de abrir todo el volumen."
                      : "The ideal launch starts with a small pilot, clear metrics and fast adjustments before opening full volume."}
                  </p>

                  <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Empieza con un solo proceso o segmento" : "Start with one process or segment"}</li>
                    <li>{language === "es" ? "Mide tiempos, tasa de respuesta y calidad" : "Measure times, response rate and quality"}</li>
                    <li>{language === "es" ? "Ajusta copy, reglas y handoff" : "Adjust copy, rules and handoff"}</li>
                    <li>{language === "es" ? "Escala cuando el flujo ya sea estable" : "Scale once the flow is stable"}</li>
                  </ol>

                  <h2 id="errores-comunes-al-migrar" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Errores comunes al migrar" : "Common mistakes when migrating"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta corta:" : "Short answer:"}</strong>{" "}
                    {language === "es"
                      ? "Los errores más comunes son migrar sin proceso definido, sin plantillas bien pensadas, sin pruebas, sin CRM y sin reglas claras entre automatización y equipo humano."
                      : "The most common mistakes are migrating without a defined process, without well-designed templates, without testing, without CRM and without clear rules between automation and the human team."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>{language === "es" ? "Migrar por moda y no por necesidad operativa" : "Migrating because of hype instead of operational need"}</li>
                    <li>{language === "es" ? "No alinear la migración con ventas o soporte" : "Not aligning migration with sales or support"}</li>
                    <li>{language === "es" ? "No preparar al equipo para el cambio" : "Not preparing the team for the change"}</li>
                    <li>{language === "es" ? "Salir en vivo sin métricas mínimas" : "Going live without minimum metrics"}</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "FAQ breve" : "Short FAQ"}
                  </h2>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Cuáles son los primeros pasos para migrar?" : "What are the first steps to migrate?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Auditar la operación, definir número y objetivo, verificar Meta, elegir BSP o plataforma, conectar CRM y probar plantillas y flujos."
                      : "Audit the operation, define the number and objective, verify Meta, choose a BSP or platform, connect CRM and test templates and flows."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Necesito un número nuevo?" : "Do I need a new number?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "No siempre, pero un número dedicado suele facilitar orden, reputación y despliegue gradual."
                      : "Not always, but a dedicated number usually helps with order, reputation and gradual rollout."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Qué es un BSP?" : "What is a BSP?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Es un proveedor autorizado que facilita acceso, soporte, configuración e integración de WhatsApp Business API."
                      : "It is an authorized provider that facilitates access, support, configuration and integration for WhatsApp Business API."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Cuánto tarda una implementación básica?" : "How long does a basic implementation take?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Suele tardar entre 3 y 7 días cuando los documentos, el proveedor y el caso de uso están claros."
                      : "It usually takes between 3 and 7 days when documents, provider and use case are clear."}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {language === "es" ? "¿Qué errores debo evitar?" : "Which mistakes should I avoid?"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Evita migrar sin auditoría, sin CRM, sin pruebas y sin un plan claro de operación entre automatización y agentes."
                      : "Avoid migrating without an audit, without CRM, without testing and without a clear operational plan between automation and agents."}
                  </p>

                  <h2 id="resumen" className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Resumen" : "Summary"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Migrar a WhatsApp Business API implica primero ordenar la operación actual y luego resolver la capa técnica: número, verificación Meta, BSP o plataforma, CRM, plantillas y pruebas. La migración sale mejor cuando empieza con un caso de uso claro, un piloto controlado y métricas de tiempo, respuesta y conversión. En Colombia, una implementación básica suele tardar entre 3 y 7 días cuando la estructura está bien definida."
                      : "Migrating to WhatsApp Business API first means organizing the current operation and then solving the technical layer: number, Meta verification, BSP or platform, CRM, templates and testing. Migration works best when it starts with one clear use case, a controlled pilot and metrics for time, response and conversion. In Colombia, a basic implementation usually takes between 3 and 7 days when the structure is well defined."}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Conclusión" : "Conclusion"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "La mejor migración no es la más rápida, sino la que deja el canal listo para crecer. Si resuelves bien proceso, proveedor, CRM y pruebas, WhatsApp Business API deja de ser un cambio técnico y se convierte en una mejora real de operación."
                      : "The best migration is not the fastest one, but the one that leaves the channel ready to grow. If you solve process, provider, CRM and testing correctly, WhatsApp Business API stops being just a technical change and becomes a real operational improvement."}
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
                        href="/blog/casos-uso-whatsapp-business-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                      >
                        {language === "es"
                          ? "¿Para qué me sirve WhatsApp Business API para mi negocio?"
                          : "What is WhatsApp Business API useful for in my business?"}
                      </a>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">
                        {language === "es" ? "Siguiente artículo" : "Next article"}
                      </p>
                      <a
                        href="/blog/beneficios-whatsapp-business-api-ia"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                      >
                        {language === "es"
                          ? "¿Qué beneficios tengo usando WhatsApp Business API + IA?"
                          : "What benefits do I get using WhatsApp Business API + AI?"}
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
                    {language === "es" ? "¿Listo para migrar con orden?" : "Ready to migrate with structure?"}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {language === "es"
                      ? "Escríbeme y revisamos tu volumen, tus procesos y el camino más corto para pasar de WhatsApp manual a una operación escalable."
                      : "Write to me and we will review your volume, your processes and the shortest path from manual WhatsApp to a scalable operation."}
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
                          ? "Aclara cuándo seguir con la app y cuándo ya necesitas migrar."
                          : "Clarify when to stay with the app and when you already need to migrate."}
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
                        {language === "es" ? "Casos de uso" : "Use cases"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "¿Para qué me sirve WhatsApp Business API para mi negocio?"
                          : "What is WhatsApp Business API useful for in my business?"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "Revisa dónde genera más impacto en ventas, soporte, reservas y cobranzas."
                          : "Review where it has the greatest impact in sales, support, bookings and collections."}
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
                        {language === "es" ? "Tendencias" : "Trends"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "¿Qué beneficios tengo usando WhatsApp Business API + IA?"
                          : "What benefits do I get using WhatsApp Business API + AI?"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "Entiende cómo la IA acelera respuestas, ventas y eficiencia operativa."
                          : "Understand how AI accelerates responses, sales and operational efficiency."}
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
