import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticleSeleccionarProveedor() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle =
    language === "es"
      ? "¿Qué tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma? | Guía 2026"
      : "What to consider when selecting a WhatsApp provider and platform? | 2026 Guide";

  const pageDescription =
    language === "es"
      ? "Guía completa para elegir el proveedor de WhatsApp Business API correcto: 10 criterios clave incluyendo necesidades empresariales, presupuesto, seguridad, soporte y escalabilidad. Con matriz de decisión para comparar opciones en Colombia."
      : "Complete guide to choosing the right WhatsApp Business API provider: 10 key criteria including business needs, budget, security, support and scalability. With decision matrix to compare options in Colombia.";

  const shareText =
    language === "es"
      ? "Guía completa: 10 criterios para elegir el proveedor de WhatsApp Business API y plataforma correctos para tu negocio."
      : "Complete guide: 10 criteria to choose the right WhatsApp Business API provider and platform for your business.";

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
        <link rel="canonical" href="https://crear.chat/blog/como-seleccionar-proveedor-whatsapp" />
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
              ? "cómo elegir proveedor WhatsApp Business API, seleccionar plataforma WhatsApp, criterios proveedor WhatsApp, comparar plataformas WhatsApp, WhatsApp Business API Colombia, BSP WhatsApp, proveedor de soluciones empresariales WhatsApp"
              : "how to choose WhatsApp Business API provider, select WhatsApp platform, WhatsApp provider criteria, compare WhatsApp platforms, WhatsApp Business API Colombia, BSP WhatsApp, WhatsApp business solution provider"
          }
        />
        <meta
          name="topic"
          content="WhatsApp Business API, Proveedor, Plataforma, Criterios de selección, Seguridad, Escalabilidad, Soporte, Colombia"
        />
        <meta
          name="ai-summary"
          content={
            language === "es"
              ? "Para seleccionar un proveedor de WhatsApp Business API se deben evaluar 10 criterios: necesidades empresariales (volumen, agentes, automatización, integraciones), capacidades técnicas del equipo, presupuesto inicial y mensual, reputación y uptime del proveedor, calidad del soporte, escalabilidad horizontal y vertical, características específicas como chatbots e IA, experiencia de usuario, términos contractuales y pruebas gratuitas. Se recomienda usar una matriz de decisión ponderada y probar 2-3 plataformas durante una semana antes de comprometerse."
              : "To select a WhatsApp Business API provider, 10 criteria must be evaluated: business needs (volume, agents, automation, integrations), team technical capabilities, initial and monthly budget, provider reputation and uptime, support quality, horizontal and vertical scalability, specific features like chatbots and AI, user experience, contract terms and free trials. It is recommended to use a weighted decision matrix and test 2-3 platforms for a week before committing."
          }
        />
        <meta
          name="ai-entities"
          content="WhatsApp Business API, proveedor BSP, plataforma de gestión, chatbot, automatización, seguridad GDPR, uptime, SLA, escalabilidad, matriz de decisión, Colombia"
        />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={
            language === "es"
              ? "10 criterios clave para elegir el proveedor de WhatsApp Business API correcto: presupuesto, seguridad, soporte, escalabilidad y más. Incluye matriz de decisión para comparar opciones."
              : "10 key criteria to choose the right WhatsApp Business API provider: budget, security, support, scalability and more. Includes decision matrix to compare options."
          }
        />
        <meta property="og:image" content="https://crear.chat/logo-black.svg" />
        <meta property="og:url" content="https://crear.chat/blog/como-seleccionar-proveedor-whatsapp" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-03-21" />
        <meta property="article:author" content="Alex Murillo" />
        <meta
          property="article:section"
          content={language === "es" ? "Guías de selección" : "Selection guides"}
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema: BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              language === "es"
                ? "¿Qué tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?"
                : "What to consider when selecting a WhatsApp provider and platform?",
            datePublished: "2026-03-21",
            dateModified: "2026-04-23",
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
              "proveedor WhatsApp Business API, seleccionar plataforma WhatsApp, criterios BSP WhatsApp, seguridad, escalabilidad, soporte, Colombia",
            articleSection: language === "es" ? "Guías de selección" : "Selection guides",
            inLanguage: language === "es" ? "es" : "en",
            wordCount: 2000,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://crear.chat/blog/como-seleccionar-proveedor-whatsapp",
            },
            about: [
              { "@type": "Thing", name: "WhatsApp Business API" },
              { "@type": "Thing", name: language === "es" ? "Proveedor BSP WhatsApp" : "WhatsApp BSP provider" },
              { "@type": "Thing", name: language === "es" ? "Selección de plataforma" : "Platform selection" },
              { "@type": "Thing", name: language === "es" ? "Seguridad empresarial" : "Enterprise security" },
              { "@type": "Thing", name: language === "es" ? "Escalabilidad" : "Scalability" },
            ],
            mentions: [
              { "@type": "Thing", name: "GDPR" },
              { "@type": "Thing", name: "CCPA" },
              { "@type": "Thing", name: "SLA" },
              { "@type": "Thing", name: language === "es" ? "Matriz de decisión" : "Decision matrix" },
              { "@type": "Thing", name: "Colombia" },
            ],
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Blog", item: "https://crear.chat/blog" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name:
                    language === "es"
                      ? "Seleccionar proveedor de WhatsApp"
                      : "Select WhatsApp provider",
                  item: "https://crear.chat/blog/como-seleccionar-proveedor-whatsapp",
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
                name:
                  language === "es"
                    ? "¿Qué criterios debo evaluar para elegir un proveedor de WhatsApp Business API?"
                    : "What criteria should I evaluate when choosing a WhatsApp Business API provider?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Debes evaluar 10 criterios: necesidades empresariales (volumen, agentes, automatización e integraciones), capacidades técnicas del equipo, presupuesto inicial y mensual, reputación y uptime del proveedor, calidad del soporte, escalabilidad, características específicas como chatbots e IA, experiencia de usuario, términos contractuales y posibilidad de prueba gratuita antes de comprometerse."
                      : "You should evaluate 10 criteria: business needs (volume, agents, automation and integrations), team technical capabilities, initial and monthly budget, provider reputation and uptime, support quality, scalability, specific features like chatbots and AI, user experience, contract terms and the possibility of a free trial before committing.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Qué uptime debe garantizar un proveedor de WhatsApp Business API?"
                    : "What uptime should a WhatsApp Business API provider guarantee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Un proveedor confiable de WhatsApp Business API debe garantizar al menos 99.9% de uptime, idealmente 99.99%. Debe contar con un SLA (Acuerdo de Nivel de Servicio) claro que especifique qué sucede en caso de caída del servicio y los tiempos de recuperación garantizados."
                      : "A reliable WhatsApp Business API provider should guarantee at least 99.9% uptime, ideally 99.99%. It must have a clear SLA (Service Level Agreement) specifying what happens in case of service outage and guaranteed recovery times.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Qué normativas de seguridad debe cumplir el proveedor de WhatsApp?"
                    : "What security regulations must the WhatsApp provider comply with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "El proveedor debe cumplir con GDPR si opera en Europa, CCPA si tiene clientes en California, y las regulaciones locales de protección de datos del país donde opera. Además debe encriptar datos en tránsito y en reposo, y contar con certificaciones de seguridad como ISO 27001 o SOC 2."
                      : "The provider must comply with GDPR if operating in Europe, CCPA if serving California clients, and local data protection regulations of the country where it operates. It must also encrypt data in transit and at rest, and hold security certifications like ISO 27001 or SOC 2.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Cómo comparar proveedores de WhatsApp Business API sistemáticamente?"
                    : "How to systematically compare WhatsApp Business API providers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Usa una matriz de decisión ponderada con criterios como precio (20%), soporte (20%), características (30%), escalabilidad (15%) y seguridad (15%). Asigna una puntuación de 1 a 10 a cada proveedor en cada criterio, multiplica por el peso y suma los totales. El proveedor con mayor puntaje es la mejor opción según tus prioridades."
                      : "Use a weighted decision matrix with criteria like price (20%), support (20%), features (30%), scalability (15%) and security (15%). Assign a score from 1 to 10 to each provider per criterion, multiply by the weight and sum the totals. The provider with the highest score is the best option according to your priorities.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Debo elegir un proveedor técnico o una plataforma visual para WhatsApp?"
                    : "Should I choose a technical provider or a visual platform for WhatsApp?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Depende de las capacidades técnicas de tu equipo. Si tu equipo no tiene perfil técnico, elige una plataforma visual con interfaz drag and drop y configuración sin código como Wati o Intercom. Si tienes desarrolladores, puedes usar proveedores más flexibles como Twilio o MessageBird que permiten personalización profunda mediante APIs."
                      : "It depends on your team's technical capabilities. If your team is non-technical, choose a visual platform with drag-and-drop interface and no-code setup like Wati or Intercom. If you have developers, you can use more flexible providers like Twilio or MessageBird that allow deep customization through APIs.",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Qué preguntar en la demo de un proveedor de WhatsApp Business API?"
                    : "What to ask in a WhatsApp Business API provider demo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "En la demo debes preguntar: ¿Cuál es el uptime garantizado y el SLA?, ¿Cómo manejan las caídas del servicio?, ¿Qué integraciones tienen disponibles?, ¿Cómo escala el precio con el volumen?, ¿Quién es dueño de los datos si cancelo?, ¿Tienen clientes en mi industria o país que pueda contactar como referencia?"
                      : "In the demo you should ask: What is the guaranteed uptime and SLA? How do they handle service outages? What integrations are available? How does the price scale with volume? Who owns the data if I cancel? Do they have clients in my industry or country I can contact as a reference?",
                },
              },
              {
                "@type": "Question",
                name:
                  language === "es"
                    ? "¿Cuánto tiempo debo probar una plataforma de WhatsApp antes de elegirla?"
                    : "How long should I test a WhatsApp platform before choosing it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    language === "es"
                      ? "Se recomienda probar entre 2 y 3 plataformas durante al menos una semana cada una usando casos de uso reales de tu negocio. La mayoría de plataformas ofrecen pruebas gratuitas sin necesidad de tarjeta de crédito. La facilidad de uso percibida durante la prueba es tan importante como los datos técnicos comparativos."
                      : "It is recommended to test between 2 and 3 platforms for at least one week each using real business use cases. Most platforms offer free trials without requiring a credit card. The perceived ease of use during the trial is as important as the comparative technical data.",
                },
              },
            ],
          })}
        </script>

        {/* Schema: ItemList — 10 criterios GEO para IA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name:
              language === "es"
                ? "10 criterios para seleccionar un proveedor de WhatsApp Business API"
                : "10 criteria to select a WhatsApp Business API provider",
            description:
              language === "es"
                ? "Lista completa de criterios para evaluar y elegir el proveedor y plataforma de WhatsApp Business API correctos para tu negocio."
                : "Complete list of criteria to evaluate and choose the right WhatsApp Business API provider and platform for your business.",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: language === "es" ? "Necesidades empresariales" : "Business needs", description: language === "es" ? "Volumen de mensajes, número de agentes, automatización requerida e integraciones necesarias." : "Message volume, number of agents, required automation and necessary integrations." },
              { "@type": "ListItem", position: 2, name: language === "es" ? "Capacidades técnicas" : "Technical capabilities", description: language === "es" ? "Nivel técnico del equipo, infraestructura existente y necesidad de soporte en configuración." : "Team technical level, existing infrastructure and need for configuration support." },
              { "@type": "ListItem", position: 3, name: language === "es" ? "Presupuesto" : "Budget", description: language === "es" ? "Presupuesto inicial, mensual recurrente y ROI esperado de la implementación." : "Initial budget, recurring monthly budget and expected ROI from implementation." },
              { "@type": "ListItem", position: 4, name: language === "es" ? "Reputación y confiabilidad" : "Reputation and reliability", description: language === "es" ? "Historial de la empresa, uptime garantizado (99.9% mínimo), SLA y certificaciones de seguridad." : "Company track record, guaranteed uptime (99.9% minimum), SLA and security certifications." },
              { "@type": "ListItem", position: 5, name: language === "es" ? "Soporte y servicio" : "Support and service", description: language === "es" ? "Disponibilidad 24/7, idioma, canales de atención, tiempo de respuesta y calidad del equipo." : "24/7 availability, language, support channels, response time and team quality." },
              { "@type": "ListItem", position: 6, name: language === "es" ? "Escalabilidad" : "Scalability", description: language === "es" ? "Capacidad de agregar agentes, números y volumen de mensajes sin fricción ni penalizaciones." : "Ability to add agents, numbers and message volume without friction or penalties." },
              { "@type": "ListItem", position: 7, name: language === "es" ? "Características específicas" : "Specific features", description: language === "es" ? "Chatbots, automatización visual o por código, IA, reportes en tiempo real y cumplimiento normativo." : "Chatbots, visual or code-based automation, AI, real-time reports and regulatory compliance." },
              { "@type": "ListItem", position: 8, name: language === "es" ? "Experiencia de usuario" : "User experience", description: language === "es" ? "Interfaz intuitiva, facilidad de aprendizaje, flujo de trabajo y opciones de personalización." : "Intuitive interface, ease of learning, workflow and customization options." },
              { "@type": "ListItem", position: 9, name: language === "es" ? "Términos y condiciones" : "Terms and conditions", description: language === "es" ? "Período mínimo de contrato, propiedad de los datos, penalizaciones por cancelación y política de cambios de precio." : "Minimum contract period, data ownership, cancellation penalties and price change policy." },
              { "@type": "ListItem", position: 10, name: language === "es" ? "Pruebas antes de comprometerse" : "Testing before committing", description: language === "es" ? "Prueba gratuita disponible, demo con especialista y posibilidad de hablar con clientes de referencia." : "Available free trial, demo with a specialist and ability to speak with reference clients." },
            ],
          })}
        </script>

        {/* Schema: DefinedTerm GEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name:
              language === "es"
                ? "Proveedor de WhatsApp Business API (BSP)"
                : "WhatsApp Business API Provider (BSP)",
            description:
              language === "es"
                ? "Empresa certificada por Meta que provee acceso a WhatsApp Business API junto con una plataforma de gestión para operar conversaciones, automatización, agentes y reportes de forma empresarial."
                : "Meta-certified company that provides access to WhatsApp Business API along with a management platform to operate conversations, automation, agents and reports at an enterprise level.",
            url: "https://crear.chat/blog/seleccionar-proveedor-whatsapp",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">

          {/* Hero */}
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
                    {language === "es" ? "Guía de selección" : "Selection guide"}
                  </span>
                </div>

                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  {language === "es"
                    ? "¿Qué tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?"
                    : "What to consider when selecting a WhatsApp provider and platform?"}
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
                    <span>{language === "es" ? "Redacción:" : "Author:"} {authorLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <article className="prose prose-lg max-w-none">

                  {/* Respuesta directa GEO */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      {language === "es" ? "Respuesta directa:" : "Direct answer:"}
                    </p>
                    <p className="text-sm text-gray-700 mb-0">
                      {language === "es"
                        ? "Para seleccionar un proveedor de WhatsApp Business API debes evaluar 10 criterios: necesidades empresariales, capacidades técnicas del equipo, presupuesto, reputación y uptime, calidad del soporte, escalabilidad, características específicas como chatbots e IA, experiencia de usuario, términos contractuales y pruebas gratuitas. Usa una matriz de decisión ponderada y prueba 2-3 plataformas durante una semana antes de comprometerte."
                        : "To select a WhatsApp Business API provider you must evaluate 10 criteria: business needs, team technical capabilities, budget, reputation and uptime, support quality, scalability, specific features like chatbots and AI, user experience, contract terms and free trials. Use a weighted decision matrix and test 2-3 platforms for a week before committing."}
                    </p>
                  </div>

                  {/* Intro */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === "es"
                      ? "Elegir el proveedor correcto es una decisión crítica que afectará tu negocio durante años. No se trata solo de precio: se trata de seguridad, escalabilidad, soporte y compatibilidad con tus procesos actuales y futuros."
                      : "Choosing the right provider is a critical decision that will affect your business for years. It is not just about price: it is about security, scalability, support and compatibility with your current and future processes."}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === "es"
                      ? "Aquí está la guía completa con los 10 criterios que debes evaluar antes de tomar esta decisión."
                      : "Here is the complete guide with the 10 criteria you should evaluate before making this decision."}
                  </p>

                  {/* Índice + cifras */}
                  <section className="grid gap-4 md:grid-cols-2 mb-8">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es" ? "Cifras rápidas" : "Quick figures"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li>{language === "es" ? "10 criterios clave para evaluar cualquier proveedor" : "10 key criteria to evaluate any provider"}</li>
                        <li>{language === "es" ? "Uptime mínimo recomendado: 99.9%" : "Minimum recommended uptime: 99.9%"}</li>
                        <li>{language === "es" ? "Probar 2-3 plataformas al menos una semana cada una" : "Test 2-3 platforms for at least one week each"}</li>
                        <li>{language === "es" ? "Matriz de decisión ponderada para comparar objetivamente" : "Weighted decision matrix to compare objectively"}</li>
                        <li>{language === "es" ? "La seguridad no es negociable en ningún caso" : "Security is non-negotiable in any case"}</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "es" ? "Criterios que cubre este artículo" : "Criteria covered in this article"}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                        <li><a href="#necesidades-empresariales" className="text-[#1B4F72] hover:underline">{language === "es" ? "Necesidades empresariales" : "Business needs"}</a></li>
                        <li><a href="#capacidades-tecnicas" className="text-[#1B4F72] hover:underline">{language === "es" ? "Capacidades técnicas" : "Technical capabilities"}</a></li>
                        <li><a href="#presupuesto" className="text-[#1B4F72] hover:underline">{language === "es" ? "Presupuesto y ROI" : "Budget and ROI"}</a></li>
                        <li><a href="#reputacion" className="text-[#1B4F72] hover:underline">{language === "es" ? "Reputación y confiabilidad" : "Reputation and reliability"}</a></li>
                        <li><a href="#soporte" className="text-[#1B4F72] hover:underline">{language === "es" ? "Soporte y servicio" : "Support and service"}</a></li>
                        <li><a href="#escalabilidad" className="text-[#1B4F72] hover:underline">{language === "es" ? "Escalabilidad" : "Scalability"}</a></li>
                        <li><a href="#caracteristicas" className="text-[#1B4F72] hover:underline">{language === "es" ? "Características específicas" : "Specific features"}</a></li>
                        <li><a href="#experiencia-usuario" className="text-[#1B4F72] hover:underline">{language === "es" ? "Experiencia de usuario" : "User experience"}</a></li>
                        <li><a href="#terminos" className="text-[#1B4F72] hover:underline">{language === "es" ? "Términos y condiciones" : "Terms and conditions"}</a></li>
                        <li><a href="#pruebas" className="text-[#1B4F72] hover:underline">{language === "es" ? "Pruebas antes de comprometerse" : "Testing before committing"}</a></li>
                      </ul>
                    </div>
                  </section>

                  {/* Mapa semántico */}
                  <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "Artículos relacionados" : "Related articles"}
                    </h2>
                    <p className="text-gray-700 mb-0 leading-relaxed">
                      {language === "es"
                        ? "Antes de elegir un proveedor, también te conviene revisar "
                        : "Before choosing a provider, you should also review "}
                      <a href="/blog/diferencias-plataformas-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "las diferencias entre plataformas de WhatsApp" : "the differences between WhatsApp platforms"}
                      </a>
                      {", "}
                      <a href="/blog/cobro-plataformas-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "cómo cobran las plataformas de WhatsApp" : "how WhatsApp platforms charge"}
                      </a>
                      {language === "es" ? " y " : " and "}
                      <a href="/blog/por-que-necesito-plataforma-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                        {language === "es" ? "por qué necesitas una plataforma para WhatsApp Business API" : "why you need a platform for WhatsApp Business API"}
                      </a>.
                    </p>
                  </section>

                  {/* H2 criterios */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Los 10 criterios de selección" : "The 10 selection criteria"}
                  </h2>

                  {/* 1. Necesidades empresariales */}
                  <h3 id="necesidades-empresariales" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "1. Necesidades empresariales" : "1. Business needs"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Antes de evaluar cualquier proveedor, define con claridad tu volumen de mensajes, número de agentes, procesos a automatizar e integraciones requeridas. Estos factores determinan qué tipo de plataforma necesitas."
                      : "Before evaluating any provider, clearly define your message volume, number of agents, processes to automate and required integrations. These factors determine what type of platform you need."}
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mb-6">
                    {[
                      {
                        title: language === "es" ? "Volumen de mensajes" : "Message volume",
                        items: [
                          language === "es" ? "¿Cuántos mensajes enviarás/recibirás mensualmente?" : "How many messages will you send/receive monthly?",
                          language === "es" ? "¿Cuál es tu proyección de crecimiento?" : "What is your growth projection?",
                          language === "es" ? "¿Tienes picos estacionales?" : "Do you have seasonal peaks?",
                        ],
                        impact: language === "es" ? "Determina si necesitas escalabilidad" : "Determines if you need scalability",
                      },
                      {
                        title: language === "es" ? "Número de agentes" : "Number of agents",
                        items: [
                          language === "es" ? "¿Cuántas personas responderán mensajes?" : "How many people will reply to messages?",
                          language === "es" ? "¿Necesitas gestión de equipos?" : "Do you need team management?",
                          language === "es" ? "¿Requieres reportes de rendimiento?" : "Do you need performance reports?",
                        ],
                        impact: language === "es" ? "Afecta el costo y la complejidad" : "Affects cost and complexity",
                      },
                      {
                        title: language === "es" ? "Automatización requerida" : "Required automation",
                        items: [
                          language === "es" ? "¿Necesitas chatbots?" : "Do you need chatbots?",
                          language === "es" ? "¿Qué procesos automatizar?" : "What processes to automate?",
                          language === "es" ? "¿Requiere IA?" : "Does it require AI?",
                        ],
                        impact: language === "es" ? "Determina qué plataforma elegir" : "Determines which platform to choose",
                      },
                      {
                        title: language === "es" ? "Integraciones necesarias" : "Required integrations",
                        items: [
                          language === "es" ? "¿Qué sistemas necesitas conectar?" : "What systems do you need to connect?",
                          language === "es" ? "¿Cuán complejas son las integraciones?" : "How complex are the integrations?",
                          language === "es" ? "¿Necesitas APIs personalizadas?" : "Do you need custom APIs?",
                        ],
                        impact: language === "es" ? "Algunos proveedores son mejores para integraciones complejas" : "Some providers are better for complex integrations",
                      },
                    ].map((block, i) => (
                      <div key={i} className="rounded-2xl border border-blue-100 bg-white p-5">
                        <h4 className="font-bold text-gray-900 mb-3">{block.title}</h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600 mb-3">
                          {block.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                        <p className="text-xs text-[#1B4F72] font-semibold">
                          {language === "es" ? "Impacto: " : "Impact: "}{block.impact}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 2. Capacidades técnicas */}
                  <h3 id="capacidades-tecnicas" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "2. Capacidades técnicas" : "2. Technical capabilities"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Si tu equipo no tiene perfil técnico, elige una plataforma visual con configuración sin código. Si tienes desarrolladores, puedes optar por proveedores más flexibles con APIs disponibles."
                      : "If your team is non-technical, choose a visual platform with no-code setup. If you have developers, you can opt for more flexible providers with available APIs."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Equipo no técnico:" : "Non-technical team:"}</strong> {language === "es" ? "Plataforma visual, fácil de usar, interfaz drag and drop, sin necesidad de código" : "Visual platform, easy to use, drag-and-drop interface, no code required"}</li>
                    <li><strong>{language === "es" ? "Equipo técnico:" : "Technical team:"}</strong> {language === "es" ? "Mayor flexibilidad, APIs disponibles, personalización profunda mediante código" : "More flexibility, available APIs, deep customization through code"}</li>
                    <li><strong>{language === "es" ? "Infraestructura existente:" : "Existing infrastructure:"}</strong> {language === "es" ? "Evalúa compatibilidad con tus sistemas actuales para evitar problemas de integración" : "Evaluate compatibility with your current systems to avoid integration issues"}</li>
                  </ul>

                  {/* 3. Presupuesto */}
                  <h3 id="presupuesto" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "3. Presupuesto y ROI" : "3. Budget and ROI"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "No elijas la plataforma más barata. Elige la que mejor ROI ofrece. Considera presupuesto inicial (implementación y capacitación), presupuesto mensual recurrente y los costos ocultos de integraciones y soporte."
                      : "Do not choose the cheapest platform. Choose the one that offers the best ROI. Consider initial budget (implementation and training), recurring monthly budget and hidden costs for integrations and support."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Presupuesto inicial:" : "Initial budget:"}</strong> {language === "es" ? "Incluye implementación, configuración y capacitación del equipo" : "Includes implementation, setup and team training"}</li>
                    <li><strong>{language === "es" ? "Presupuesto mensual:" : "Monthly budget:"}</strong> {language === "es" ? "Verifica que puede crecer con el negocio sin generar crisis financieras" : "Verify it can grow with the business without creating financial crises"}</li>
                    <li><strong>{language === "es" ? "ROI esperado:" : "Expected ROI:"}</strong> {language === "es" ? "Define cómo y en cuánto tiempo medirás el retorno de la inversión" : "Define how and in what timeframe you will measure the return on investment"}</li>
                    <li><strong>{language === "es" ? "Costos ocultos:" : "Hidden costs:"}</strong> {language === "es" ? "Integraciones, mensajes salientes, soporte premium y personalización adicional" : "Integrations, outgoing messages, premium support and additional customization"}</li>
                  </ul>

                  {/* 4. Reputación */}
                  <h3 id="reputacion" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "4. Reputación y confiabilidad" : "4. Reputation and reliability"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Un proveedor confiable debe garantizar al menos 99.9% de uptime con SLA claro, cumplir normativas de seguridad como GDPR y CCPA, y tener referencias verificables de clientes en tu industria."
                      : "A reliable provider must guarantee at least 99.9% uptime with a clear SLA, comply with security regulations like GDPR and CCPA, and have verifiable client references in your industry."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Historial de la empresa:" : "Company track record:"}</strong> {language === "es" ? "¿Cuánto tiempo lleva en el mercado? ¿Ha tenido problemas de seguridad? ¿Tiene referencias verificables?" : "How long has it been in the market? Has it had security issues? Does it have verifiable references?"}</li>
                    <li><strong>{language === "es" ? "Uptime y SLA:" : "Uptime and SLA:"}</strong> {language === "es" ? "Mínimo 99.9% garantizado, idealmente 99.99%, con SLA que especifique compensaciones por caídas" : "Minimum 99.9% guaranteed, ideally 99.99%, with SLA specifying compensation for outages"}</li>
                    <li><strong className="text-red-600">{language === "es" ? "Seguridad (no negociable):" : "Security (non-negotiable):"}</strong> {language === "es" ? "Cumplimiento GDPR, CCPA y regulaciones locales, encriptación de datos y certificaciones como ISO 27001" : "GDPR, CCPA and local regulation compliance, data encryption and certifications like ISO 27001"}</li>
                  </ul>

                  {/* 5. Soporte */}
                  <h3 id="soporte" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "5. Soporte y servicio" : "5. Support and service"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Prueba el soporte antes de comprometerte. Envía una consulta técnica y mide el tiempo y calidad de respuesta. Un buen soporte puede valer más que ahorrar en precio mensual."
                      : "Test support before committing. Send a technical query and measure response time and quality. Good support can be worth more than saving on monthly price."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Disponibilidad:" : "Availability:"}</strong> {language === "es" ? "¿Soporte 24/7 en tu idioma y zona horaria?" : "24/7 support in your language and time zone?"}</li>
                    <li><strong>{language === "es" ? "Canales:" : "Channels:"}</strong> {language === "es" ? "Email, chat en vivo y teléfono según el nivel del plan contratado" : "Email, live chat and phone depending on the contracted plan level"}</li>
                    <li><strong>{language === "es" ? "Calidad:" : "Quality:"}</strong> {language === "es" ? "Tiempo de respuesta, competencia técnica del equipo y disponibilidad de gestor dedicado" : "Response time, team technical competence and dedicated manager availability"}</li>
                    <li><strong>{language === "es" ? "Documentación:" : "Documentation:"}</strong> {language === "es" ? "Guías completas, tutoriales en video y comunidad activa de usuarios" : "Complete guides, video tutorials and active user community"}</li>
                  </ul>

                  {/* 6. Escalabilidad */}
                  <h3 id="escalabilidad" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "6. Escalabilidad" : "6. Scalability"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Elige pensando en tu negocio dentro de 2 o 3 años, no solo en el presente. Verifica que puedas agregar agentes, números y volumen sin penalizaciones y sin tener que migrar de plataforma."
                      : "Choose thinking about your business in 2 or 3 years, not just the present. Verify you can add agents, numbers and volume without penalties and without having to migrate platforms."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Crecimiento horizontal:" : "Horizontal growth:"}</strong> {language === "es" ? "Agregar más agentes y números de WhatsApp sin fricción ni límites restrictivos" : "Add more agents and WhatsApp numbers without friction or restrictive limits"}</li>
                    <li><strong>{language === "es" ? "Crecimiento vertical:" : "Vertical growth:"}</strong> {language === "es" ? "Aumentar el volumen de mensajes con precios que escalen de forma predecible" : "Increase message volume with predictably scaling prices"}</li>
                    <li><strong>{language === "es" ? "Flexibilidad de plan:" : "Plan flexibility:"}</strong> {language === "es" ? "Capacidad de cambiar de plan, hacer upgrade o downgrade sin penalizaciones severas" : "Ability to change plans, upgrade or downgrade without severe penalties"}</li>
                  </ul>

                  {/* 7. Características */}
                  <h3 id="caracteristicas" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "7. Características específicas" : "7. Specific features"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Evalúa si la plataforma tiene las características que realmente usarás: chatbots, automatización visual o por código, IA, reportes en tiempo real y cumplimiento normativo local."
                      : "Evaluate whether the platform has the features you will actually use: chatbots, visual or code-based automation, AI, real-time reports and local regulatory compliance."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Automatización:" : "Automation:"}</strong> {language === "es" ? "Chatbots básicos incluidos, automatización visual drag and drop o basada en código, integración con IA" : "Basic chatbots included, visual drag-and-drop or code-based automation, AI integration"}</li>
                    <li><strong>{language === "es" ? "Análisis y reportes:" : "Analytics and reports:"}</strong> {language === "es" ? "Métricas clave en tiempo real, reportes exportables e insights de rendimiento de agentes" : "Key real-time metrics, exportable reports and agent performance insights"}</li>
                    <li><strong>{language === "es" ? "Cumplimiento normativo:" : "Regulatory compliance:"}</strong> {language === "es" ? "Soporte para auditoría, archivos de conversaciones y privacidad de datos según regulación local" : "Support for audit, conversation archives and data privacy according to local regulation"}</li>
                  </ul>

                  {/* 8. Experiencia de usuario */}
                  <h3 id="experiencia-usuario" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "8. Experiencia de usuario" : "8. User experience"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Una plataforma que los agentes encuentran difícil de usar generará errores, lentitud y resistencia interna. La facilidad de uso percibida durante la prueba gratuita es un indicador crítico."
                      : "A platform that agents find difficult to use will generate errors, slowdowns and internal resistance. The perceived ease of use during the free trial is a critical indicator."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Interfaz:" : "Interface:"}</strong> {language === "es" ? "¿Es intuitiva? ¿Fácil de aprender sin capacitación extensa?" : "Is it intuitive? Easy to learn without extensive training?"}</li>
                    <li><strong>{language === "es" ? "Flujo de trabajo:" : "Workflow:"}</strong> {language === "es" ? "Cómo se ven los chats, facilidad para responder y organización de conversaciones" : "How chats look, ease of replying and conversation organization"}</li>
                    <li><strong>{language === "es" ? "Personalización:" : "Customization:"}</strong> {language === "es" ? "Posibilidad de adaptar la interfaz al branding y flujos específicos de tu empresa" : "Ability to adapt the interface to your company's branding and specific workflows"}</li>
                  </ul>

                  {/* 9. Términos */}
                  <h3 id="terminos" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "9. Términos y condiciones" : "9. Terms and conditions"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Lee el contrato antes de firmar. Verifica quién es dueño de tus datos, qué pasa si cancelas, cuánto tiempo dura el período mínimo y si el proveedor puede aumentar precios unilateralmente."
                      : "Read the contract before signing. Verify who owns your data, what happens if you cancel, how long the minimum period lasts and whether the provider can raise prices unilaterally."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Contrato:" : "Contract:"}</strong> {language === "es" ? "Período mínimo, penalizaciones por cancelación anticipada y facilidad para salir si necesitas" : "Minimum period, early cancellation penalties and ease of exit if needed"}</li>
                    <li><strong>{language === "es" ? "Propiedad de datos:" : "Data ownership:"}</strong> {language === "es" ? "¿Quién es dueño de tus datos? ¿Pueden usarlos? ¿Qué pasa con ellos si cancelas?" : "Who owns your data? Can they use it? What happens to it if you cancel?"}</li>
                    <li><strong>{language === "es" ? "Cambios de precio:" : "Price changes:"}</strong> {language === "es" ? "¿Con cuánta anticipación notifican aumentos? ¿Tienes opción de salir sin penalización si aumentan?" : "How much advance notice do they give for price increases? Can you exit without penalty if they raise prices?"}</li>
                  </ul>

                  {/* 10. Pruebas */}
                  <h3 id="pruebas" className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "10. Pruebas antes de comprometerse" : "10. Testing before committing"}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Nunca te comprometas sin probar. Usa las pruebas gratuitas con casos de uso reales, solicita una demo con preguntas específicas y habla con clientes actuales del proveedor si es posible."
                      : "Never commit without testing. Use free trials with real use cases, request a demo with specific questions and speak with current clients of the provider if possible."}
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>{language === "es" ? "Prueba gratuita:" : "Free trial:"}</strong> {language === "es" ? "¿Cuánto dura? ¿Requiere tarjeta de crédito? Prueba con casos de uso reales de tu negocio" : "How long does it last? Does it require a credit card? Test with real business use cases"}</li>
                    <li><strong>{language === "es" ? "Demo con especialista:" : "Demo with specialist:"}</strong> {language === "es" ? "Prepara preguntas específicas sobre uptime, integraciones, seguridad y escalabilidad" : "Prepare specific questions about uptime, integrations, security and scalability"}</li>
                    <li><strong>{language === "es" ? "Referencias de clientes:" : "Client references:"}</strong> {language === "es" ? "Solicita hablar con clientes actuales en tu industria o país para validar la experiencia real" : "Ask to speak with current clients in your industry or country to validate the real experience"}</li>
                  </ul>

                  {/* Matriz de decisión */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Matriz de decisión" : "Decision matrix"}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">{language === "es" ? "Respuesta directa:" : "Direct answer:"}</strong>{" "}
                    {language === "es"
                      ? "Usa esta matriz ponderada para comparar proveedores de forma objetiva. Asigna una puntuación de 1 a 10 a cada proveedor en cada criterio y multiplica por el peso asignado."
                      : "Use this weighted matrix to compare providers objectively. Assign a score from 1 to 10 to each provider per criterion and multiply by the assigned weight."}
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-[#1B4F72] text-white">
                          <th className="border border-gray-300 p-3 text-left">{language === "es" ? "Criterio" : "Criterion"}</th>
                          <th className="border border-gray-300 p-3 text-center">{language === "es" ? "Peso" : "Weight"}</th>
                          <th className="border border-gray-300 p-3 text-center">{language === "es" ? "Proveedor A" : "Provider A"}</th>
                          <th className="border border-gray-300 p-3 text-center">{language === "es" ? "Proveedor B" : "Provider B"}</th>
                          <th className="border border-gray-300 p-3 text-center">{language === "es" ? "Proveedor C" : "Provider C"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { criterio: language === "es" ? "Precio" : "Price", peso: "20%", a: "8/10", b: "7/10", c: "6/10" },
                          { criterio: language === "es" ? "Soporte" : "Support", peso: "20%", a: "7/10", b: "9/10", c: "8/10" },
                          { criterio: language === "es" ? "Características" : "Features", peso: "30%", a: "8/10", b: "8/10", c: "9/10" },
                          { criterio: language === "es" ? "Escalabilidad" : "Scalability", peso: "15%", a: "7/10", b: "8/10", c: "9/10" },
                          { criterio: language === "es" ? "Seguridad" : "Security", peso: "15%", a: "9/10", b: "9/10", c: "8/10" },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border border-gray-200 p-3 font-medium text-gray-900">{row.criterio}</td>
                            <td className="border border-gray-200 p-3 text-center text-gray-700">{row.peso}</td>
                            <td className="border border-gray-200 p-3 text-center text-gray-700">{row.a}</td>
                            <td className="border border-gray-200 p-3 text-center text-gray-700">{row.b}</td>
                            <td className="border border-gray-200 p-3 text-center text-gray-700">{row.c}</td>
                          </tr>
                        ))}
                        <tr className="bg-[#1B4F72] text-white font-bold">
                          <td className="border border-gray-300 p-3">TOTAL</td>
                          <td className="border border-gray-300 p-3 text-center">100%</td>
                          <td className="border border-gray-300 p-3 text-center">7.7/10</td>
                          <td className="border border-gray-300 p-3 text-center">8.1/10</td>
                          <td className="border border-gray-300 p-3 text-center">8.2/10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Conclusión */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {language === "es" ? "Conclusión" : "Conclusion"}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === "es"
                      ? "Elegir el proveedor correcto requiere entender tus necesidades, investigar opciones, comparar sistemáticamente, probar antes de comprometerte y considerar el futuro, no solo el presente."
                      : "Choosing the right provider requires understanding your needs, researching options, comparing systematically, testing before committing and considering the future, not just the present."}
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === "es"
                      ? "No existe la plataforma perfecta, pero existe la plataforma correcta para ti. Tómate tiempo en esta decisión; es una de las más importantes para tu transformación digital."
                      : "There is no perfect platform, but there is the right platform for you. Take your time with this decision; it is one of the most important for your digital transformation."}
                  </p>

                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {language === "es" ? "Recomendación final" : "Final recommendation"}
                    </h4>
                    <p className="text-gray-700 mb-0 text-sm leading-relaxed">
                      {language === "es"
                        ? "Comienza con una prueba gratuita de 2-3 plataformas. Usa cada una durante una semana con casos de uso reales. Tu intuición sobre cuál es más fácil de usar es tan importante como los números de la matriz de decisión."
                        : "Start with a free trial of 2-3 platforms. Use each one for a week with real use cases. Your intuition about which one is easier to use is as important as the numbers in the decision matrix."}
                    </p>
                  </div>

                  {/* Mapa semántico final */}
                  <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {language === "es" ? "Sigue leyendo" : "Keep reading"}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>
                        <a href="/blog/diferencias-plataformas-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                          {language === "es" ? "Diferencias entre plataformas de WhatsApp" : "Differences between WhatsApp platforms"}
                        </a>
                      </li>
                      <li>
                        <a href="/blog/cobro-plataformas-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                          {language === "es" ? "¿Cómo cobran las plataformas de WhatsApp?" : "How do WhatsApp platforms charge?"}
                        </a>
                      </li>
                      <li>
                        <a href="/blog/por-que-necesito-plataforma-whatsapp" className="text-[#1B4F72] hover:underline font-medium">
                          {language === "es" ? "Por qué necesitas una plataforma para WhatsApp Business API" : "Why you need a platform for WhatsApp Business API"}
                        </a>
                      </li>
                      <li>
                        <a href="/blog/plataformas-integracion-whatsapp-api" className="text-[#1B4F72] hover:underline font-medium">
                          {language === "es" ? "¿Con qué plataformas puedo integrar WhatsApp Business API?" : "What platforms can I integrate WhatsApp Business API with?"}
                        </a>
                      </li>
                    </ul>
                  </section>

                </article>

                {/* Compartir */}
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

                {/* Navegación entre artículos */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 mb-1">
                        {language === "es" ? "Artículo anterior" : "Previous article"}
                      </p>
                      <a
                        href="/blog/cobro-plataformas-whatsapp"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                      >
                        {language === "es"
                          ? "¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?"
                          : "How do WhatsApp chat platforms charge?"}
                      </a>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">
                        {language === "es" ? "Siguiente artículo" : "Next article"}
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
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
                  <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                    {language === "es"
                      ? "¿Quieres ayuda para elegir el proveedor correcto?"
                      : "Want help choosing the right provider?"}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {language === "es"
                      ? "Escríbeme y revisamos juntos qué proveedor y plataforma se ajusta mejor a tu volumen, equipo, presupuesto e integraciones."
                      : "Write to me and we will review together which provider and platform best fits your volume, team, budget and integrations."}
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

          {/* Otros artículos */}
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
                        {language === "es" ? "Comparativa" : "Comparison"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "¿En qué se diferencian las plataformas de WhatsApp?"
                          : "How do WhatsApp platforms differ?"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "Compara Wati, Intercom, Zendesk y Twilio en 8 criterios clave antes de elegir."
                          : "Compare Wati, Intercom, Zendesk and Twilio across 8 key criteria before choosing."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>7 min</span>
                        <a href="/blog/diferencias-plataformas-whatsapp" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                          {language === "es" ? "Leer más" : "Read more"}
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                        {language === "es" ? "Precios" : "Pricing"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "¿Cómo cobran las plataformas de chats de WhatsApp?"
                          : "How do WhatsApp chat platforms charge?"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "Conoce los 5 modelos de cobro con ejemplos reales de costos mensuales."
                          : "Learn the 5 billing models with real monthly cost examples."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>6 min</span>
                        <a href="/blog/cobro-plataformas-whatsapp" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                          {language === "es" ? "Leer más" : "Read more"}
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                        {language === "es" ? "Plataformas" : "Platforms"}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {language === "es"
                          ? "Por qué necesitas una plataforma para WhatsApp Business API"
                          : "Why you need a platform for WhatsApp Business API"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {language === "es"
                          ? "La API sola no resuelve la operación. Descubre qué aporta una plataforma."
                          : "The API alone does not solve operations. Discover what a platform provides."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>7 min</span>
                        <a href="/blog/por-que-necesito-plataforma-whatsapp" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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