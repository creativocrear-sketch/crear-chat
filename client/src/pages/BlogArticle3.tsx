import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle3() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = language === 'es' ? 'Primeros pasos para migrar WhatsApp Business API en Colombia (Guía completa 2026)' : 'First steps to migrate WhatsApp Business API in Colombia (Complete guide 2026)';
    const text = language === 'es' ? 'Guía completa de primeros pasos para migrar WhatsApp Business API en Colombia. Evita errores comunes, aprende requisitos y migra en menos de 10 días.' : 'Complete guide to first steps to migrate WhatsApp Business API in Colombia. Avoid common errors, learn requirements and migrate in less than 10 days.';
    
    let shareUrl = '';
    
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{language === 'es' ? 'Primeros pasos para migrar WhatsApp Business API en Colombia (Guía completa 2026)' : 'First steps to migrate WhatsApp Business API in Colombia (Complete guide 2026)'}</title>
        <link rel="canonical" href="https://crear.chat/blog/primeros-pasos-migrar-whatsapp-business-api" />
        <meta name="author" content="Alex Murillo" />
        <meta name="keywords" content="primeros pasos para migrar WhatsApp Business API, WhatsApp Business API Colombia, migrar WhatsApp API, WhatsApp automatización empresas, WhatsApp Business API proveedor" />
        <meta 
          name="description" 
          content={language === 'es' 
            ? 'Guía completa de primeros pasos para migrar a WhatsApp Business API. Aprende requisitos, proceso paso a paso, errores comunes y cómo elegir proveedor en Colombia.' 
            : 'Complete guide to first steps to migrate to WhatsApp Business API. Learn requirements, step-by-step process, common errors and how to choose a provider in Colombia.'} 
        />
        <meta property="og:title" content={language === 'es' ? 'Primeros pasos para migrar a WhatsApp Business API (Guía completa 2026)' : 'First steps to migrate to WhatsApp Business API (Complete guide 2026)'} />
        <meta property="og:description" content={language === 'es' ? 'Guía completa de primeros pasos para migrar a WhatsApp Business API. Aprende requisitos, proceso paso a paso, errores comunes y cómo elegir proveedor en Colombia.' : 'Complete guide to first steps to migrate to WhatsApp Business API. Learn requirements, step-by-step process, common errors and how to choose a provider in Colombia.'} />
        <meta property="og:image" content="https://crear.chat/logo-black.svg" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-03-21" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": language === 'es' ? 'Primeros pasos para migrar WhatsApp Business API en Colombia (Guía completa 2026)' : 'First steps to migrate WhatsApp Business API in Colombia (Complete guide 2026)',
            "datePublished": "2026-03-21",
            "author": {
              "@type": "Person",
              "name": "Alex Murillo"
            },
            "description": language === 'es' 
              ? 'Guía completa de primeros pasos para migrar a WhatsApp Business API. Aprende requisitos, proceso paso a paso, errores comunes y cómo elegir proveedor en Colombia.' 
              : 'Complete guide to first steps to migrate to WhatsApp Business API. Learn requirements, step-by-step process, common errors and how to choose a provider in Colombia.'
          })}
        </script>
      </Helmet>
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
                {t('common.backToBlog')}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Implementación' : 'Implementation'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Primeros pasos para migrar WhatsApp Business API en Colombia (Guía completa 2026)' : 'First steps to migrate WhatsApp Business API in Colombia (Complete guide 2026)'}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 {t('common.readTime')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{t('common.author')}: {language === 'es' ? 'Alex Murillo + Equipo de Soporte' : 'Alex Murillo + Support Team'}</span>
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Cada día más empresas en Colombia pierden clientes por una mala gestión de WhatsApp: respuestas tardías, mensajes no atendidos y falta de automatización. Esta guía explica cómo migrar WhatsApp Business API paso a paso en Colombia, evitando errores comunes que bloquean cuentas, retrasan aprobaciones o generan pérdida de historial. Aquí aprenderás cómo hacerlo en menos de 10 días, con configuración correcta, aprobación de Meta sin rechazos y estructura lista para escalar ventas.' : 'Every day more companies in Colombia lose customers due to poor WhatsApp management: slow responses, unanswered messages and lack of automation. This guide explains how to migrate WhatsApp Business API step by step in Colombia, avoiding common errors that block accounts, delay approvals or cause history loss. Here you will learn how to do it in less than 10 days, with correct configuration, Meta approval without rejections and structure ready to scale sales.'}
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700">
                    {language === 'es' ? '✅ Guía validada por implementación real en Colombia' : '✅ Guide validated by real implementation in Colombia'}
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="font-semibold text-gray-900 mb-2">{language === 'es' ? '¿Cómo migrar WhatsApp Business API en Colombia?' : 'How to migrate WhatsApp Business API in Colombia?'}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {language === 'es' ? 'Migrar a WhatsApp Business API consiste en pasar de la app de WhatsApp Business a la infraestructura oficial de Meta, que permite:' : 'Migrating to WhatsApp Business API consists of moving from the WhatsApp Business app to the official Meta infrastructure, which allows:'}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>{language === 'es' ? '✓ Automatización de mensajes' : '✓ Message automation'}</li>
                    <li>{language === 'es' ? '✓ Integración con CRM y sistemas de ventas' : '✓ Integration with CRM and sales systems'}</li>
                    <li>{language === 'es' ? '✓ Atención multiagente' : '✓ Multi-agent attention'}</li>
                    <li>{language === 'es' ? '✓ Escalabilidad sin límites operativos' : '✓ Scalability without operational limits'}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Requisitos para migrar WhatsApp Business API' : 'Requirements to migrate WhatsApp Business API'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Antes de iniciar el proceso, debes cumplir con:' : 'Before starting the process, you must meet:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Empresa legal registrada en Colombia (RUT + Cámara de Comercio)' : 'Legally registered company in Colombia (tax ID + Chamber of Commerce)'}</li>
                  <li>{language === 'es' ? 'Cuenta en Meta Business Manager verificada' : 'Verified account in Meta Business Manager'}</li>
                  <li>{language === 'es' ? 'Número telefónico dedicado (no personal)' : 'Dedicated phone number (not personal)'}</li>
                  <li>{language === 'es' ? 'Caso de uso definido (ventas, soporte, cobranzas)' : 'Defined use case (sales, support, collections)'}</li>
                  <li>{language === 'es' ? 'Documentación empresarial lista para verificación' : 'Business documentation ready for verification'}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Cómo migrar WhatsApp Business API paso a paso' : 'How to migrate WhatsApp Business API step by step'}
                </h2>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 1: Auditoría de comunicación actual' : 'Step 1: Current communication audit'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Analiza: tiempo de respuesta promedio, volumen de mensajes mensuales, procesos manuales repetitivos, pérdida de leads por falta de respuesta.' : 'Analyze: average response time, monthly message volume, repetitive manual processes, lead loss due to lack of response.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '📌 Este paso define si realmente necesitas API o solo optimización de WhatsApp Business.' : '📌 This step defines if you really need API or just WhatsApp Business optimization.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? (
                    <><strong>Error común:</strong> No tener datos claros de tu situación actual antes de migrar.</>
                  ) : (
                    <><strong>Common error:</strong> Not having clear data of your current situation before migrating.</>
                  )}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? (
                    <><strong>Tip profesional:</strong> Usa herramientas de analytics para medir métricas clave antes de la migración.</>
                  ) : (
                    <><strong>Professional tip:</strong> Use analytics tools to measure key metrics before migration.</>
                  )}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 2: Selección de proveedor (BSP)' : 'Step 2: Provider selection (BSP)'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El BSP es obligatorio para usar la API. Comparación real:' : 'The BSP is mandatory to use the API. Real comparison:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Twilio → robusto, caro, enterprise' : 'Twilio → robust, expensive, enterprise'}</li>
                  <li>{language === 'es' ? 'MessageBird → omnicanal, flexible' : 'MessageBird → omnichannel, flexible'}</li>
                  <li>{language === 'es' ? 'Infobip → fuerte en LATAM, escalable' : 'Infobip → strong in LATAM, scalable'}</li>
                  <li>{language === 'es' ? 'Crear.chat → implementación rápida en Colombia + soporte local' : 'Crear.chat → fast implementation in Colombia + local support'}</li>
                </ul>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '📌 Error crítico: elegir solo por precio sin soporte técnico.' : '📌 Critical error: choosing only by price without technical support.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 3: Configuración de número' : 'Step 3: Number configuration'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No usar número personal. Ideal: número nuevo empresarial. Mejor reputación si es local.' : 'Do not use personal number. Ideal: new business number. Better reputation if local.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '📌 WhatsApp penaliza historial previo mal gestionado.' : '📌 WhatsApp penalizes poorly managed previous history.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 4: Verificación de negocio en Meta' : 'Step 4: Business verification in Meta'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Proceso de aprobación: envío de documentos, validación de empresa, revisión de dominio y negocio.' : 'Approval process: document submission, company validation, domain and business review.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '⏱ Tiempo promedio: 1–3 días hábiles' : '⏱ Average time: 1–3 business days'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 5: Configuración de cuenta WABA' : 'Step 5: WABA account configuration'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Aquí se configura: webhooks, permisos, seguridad, activación del número.' : 'Here you configure: webhooks, permissions, security, number activation.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '📌 Error común: mala configuración de webhooks = pérdida de mensajes.' : '📌 Common error: poor webhook configuration = message loss.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 6: Integración con CRM o sistema' : 'Step 6: CRM or system integration'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Integrar con: CRM (HubSpot, Salesforce), ERP o facturación, base de datos clientes.' : 'Integrate with: CRM (HubSpot, Salesforce), ERP or billing, customer database.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '📌 Esto define el ROI de la implementación.' : '📌 This defines the implementation ROI.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 7: Creación de plantillas aprobadas' : 'Step 7: Creation of approved templates'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Solo puedes enviar mensajes proactivos con plantillas aprobadas: confirmaciones, recordatorios, soporte, promociones.' : 'You can only send proactive messages with approved templates: confirmations, reminders, support, promotions.'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '📌 Sin aprobación = bloqueo de envíos.' : '📌 Without approval = sending block.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                  {language === 'es' ? 'Paso 8: Pruebas y lanzamiento' : 'Step 8: Testing and launch'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Test con bajo volumen, monitoreo de calidad (quality rating), ajuste de flujos.' : 'Test with low volume, quality monitoring (quality rating), flow adjustment.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Errores al migrar WhatsApp API' : 'Errors when migrating WhatsApp API'}
                </h2>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Usar número personal en lugar de número dedicado' : 'Using personal number instead of dedicated number'}</li>
                  <li>{language === 'es' ? 'No validar plantillas de mensajes antes de usarlas' : 'Not validating message templates before using them'}</li>
                  <li>{language === 'es' ? 'Mala elección de BSP sin evaluar soporte técnico' : 'Poor BSP choice without evaluating technical support'}</li>
                  <li>{language === 'es' ? 'No segmentar mensajes y enviar contenido irrelevante' : 'Not segmenting messages and sending irrelevant content'}</li>
                  <li>{language === 'es' ? 'Enviar spam o mensajes no solicitados (riesgo de ban permanente)' : 'Sending spam or unsolicited messages (permanent ban risk)'}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Errores que hacen que Meta rechace tu WhatsApp API' : 'Errors that make Meta reject your WhatsApp API'}
                </h2>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Documentos legales incompletos o inconsistentes con Business Manager' : 'Incomplete legal documents or inconsistent with Business Manager'}</li>
                  <li>{language === 'es' ? 'Nombre del negocio no coincide con RUT o cámara de comercio' : 'Business name does not match tax ID or chamber of commerce'}</li>
                  <li>{language === 'es' ? 'Caso de uso no definido o demasiado genérico (ej: "ventas" sin detalle)' : 'Use case not defined or too generic (eg: "sales" without detail)'}</li>
                  <li>{language === 'es' ? 'Dominio de sitio web no verificado o sin relación con el negocio' : 'Website domain not verified or unrelated to business'}</li>
                  <li>{language === 'es' ? 'Historial de spam en número anterior (si migras número existente)' : 'Spam history on previous number (if migrating existing number)'}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Qué pasa si migras mal WhatsApp Business API?' : 'What happens if you migrate WhatsApp Business API incorrectly?'}
                </h2>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Pérdida de historial de conversaciones (si usas número personal)' : 'Loss of conversation history (if using personal number)'}</li>
                  <li>{language === 'es' ? 'Reducción de quality rating por mala configuración de plantillas' : 'Quality rating reduction due to poor template configuration'}</li>
                  <li>{language === 'es' ? 'Limitación de envíos por disparadores de bloqueo de Meta' : 'Sending limitation due to Meta blocking triggers'}</li>
                  <li>{language === 'es' ? 'Bloqueo temporal o permanente del número por violación de políticas' : 'Temporary or permanent number blocking due to policy violation'}</li>
                  <li>{language === 'es' ? 'Rechazo de plantillas por contenido no permitido o formato incorrecto' : 'Template rejection due to disallowed content or incorrect format'}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿WhatsApp Business API es gratis o tiene costo en Colombia?' : 'Is WhatsApp Business API free or does it have cost in Colombia?'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'WhatsApp Business API no es gratis. El costo se divide en: (1) Tarifa de Meta por conversación iniciada (aprox $0.05-$0.10 USD dependiendo del país), (2) Tarifa del BSP proveedor (varía por proveedor y volumen), (3) Costos de integración técnica si requieres desarrollo personalizado. En Colombia, el costo total promedio mensual varía entre $50-$500 USD dependiendo del volumen de mensajes y proveedor elegido.' : 'WhatsApp Business API is not free. The cost is divided into: (1) Meta fee per conversation initiated (approx $0.05-$0.10 USD depending on country), (2) BSP provider fee (varies by provider and volume), (3) Technical integration costs if you require custom development. In Colombia, the average total monthly cost varies between $50-$500 USD depending on message volume and chosen provider.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Comparación de proveedores BSP' : 'BSP provider comparison'}
                </h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">{language === 'es' ? 'Proveedor' : 'Provider'}</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">{language === 'es' ? 'Costo' : 'Cost'}</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">{language === 'es' ? 'Soporte' : 'Support'}</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">{language === 'es' ? 'Implementación' : 'Implementation'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-600">Twilio</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Medio-alto' : 'Medium-high'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? '24/7 global' : '24/7 global'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Compleja' : 'Complex'}</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-600">MessageBird</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Medio' : 'Medium'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Horario laboral' : 'Business hours'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Media' : 'Medium'}</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 text-sm text-gray-600">Infobip</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Variable' : 'Variable'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Forte LATAM' : 'Strong LATAM'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Media' : 'Medium'}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-blue-50">
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">Crear.chat</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Transparente' : 'Transparent'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Local español' : 'Local Spanish'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{language === 'es' ? 'Rápida (3-7 días)' : 'Fast (3-7 days)'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <p className="font-semibold text-gray-900 mb-2">{language === 'es' ? '⚠️ Advertencia de Meta:' : '⚠️ Meta Warning:'}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'es' ? 'Empresas en Colombia han perdido sus números de WhatsApp por migrar incorrectamente. Casos reales: restaurantes que migraron su número personal y perdieron todo el historial de pedidos, e-commerce que fue bloqueado por enviar spam sin plantillas aprobadas. Meta no hace excepciones con políticas de uso.' : 'Companies in Colombia have lost their WhatsApp numbers by migrating incorrectly. Real cases: restaurants that migrated their personal number and lost all order history, e-commerce that was blocked for sending spam without approved templates. Meta makes no exceptions with usage policies.'}
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Tiempo real de implementación' : 'Real implementation time'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Básico: 3–5 días. Medio: 7–10 días. Complejo: hasta 14 días. Factores: velocidad de Meta, calidad de documentos, integración técnica.' : 'Basic: 3–5 days. Medium: 7–10 days. Complex: up to 14 days. Factors: Meta speed, document quality, technical integration.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios después de migrar' : 'Benefits after migrating'}
                </h2>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '+40% eficiencia en atención' : '+40% efficiency in customer service'}</li>
                  <li>{language === 'es' ? '-60% tiempos de respuesta' : '-60% response times'}</li>
                  <li>{language === 'es' ? '+30% conversión en leads' : '+30% lead conversion'}</li>
                  <li>{language === 'es' ? '80% automatización de procesos' : '80% process automation'}</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'FAQ - Preguntas frecuentes' : 'FAQ - Frequently asked questions'}
                </h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Se pierden los chats al migrar WhatsApp API?' : 'Do chats get lost when migrating WhatsApp API?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si migras tu número personal actual, sí puedes perder el historial de conversaciones. Por eso se recomienda usar un número nuevo dedicado para WhatsApp Business API. Los chats de la app no se transfieren automáticamente a la API.' : 'If you migrate your current personal number, yes you can lose conversation history. That is why using a new dedicated number for WhatsApp Business API is recommended. App chats do not automatically transfer to the API.'}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Me pueden banear por migrar mal?' : 'Can I get banned for migrating incorrectly?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Sí, Meta puede bloquear temporal o permanentemente tu número si violas políticas de uso. Errores comunes que causan baneo incluyen enviar spam, usar plantillas no aprobadas, no respetar horarios de envío o tener quality rating bajo por quejas de usuarios.' : 'Yes, Meta can temporarily or permanently block your number if you violate usage policies. Common errors that cause banning include sending spam, using unapproved templates, not respecting sending schedules or having low quality rating due to user complaints.'}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Cuántos mensajes se pueden enviar?' : 'How many messages can be sent?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No hay límite fijo de mensajes en WhatsApp Business API. El límite se basa en tu quality rating. Con rating alto puedes enviar miles de mensajes diarios. Con rating bajo, Meta limita tus envíos. Es importante mantener buenas prácticas para no reducir tu rating.' : 'There is no fixed message limit in WhatsApp Business API. The limit is based on your quality rating. With high rating you can send thousands of daily messages. With low rating, Meta limits your sending. It is important to maintain good practices to not reduce your rating.'}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Se necesita servidor o hosting?' : 'Do I need server or hosting?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Con WhatsApp Cloud API no necesitas servidor propio. Meta aloja la infraestructura en la nube. Solo necesitas un BSP que maneje la conexión y configuración. Si usas la API tradicional sí requerirías servidor propio, pero Cloud API es la opción recomendada hoy.' : 'With WhatsApp Cloud API you do not need your own server. Meta hosts the infrastructure in the cloud. You only need a BSP that handles the connection and configuration. If you use traditional API you would require your own server, but Cloud API is the recommended option today.'}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Qué es un BSP?' : 'What is a BSP?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'BSP (Business Solution Provider) es un proveedor autorizado por Meta que permite a empresas acceder a WhatsApp Business API. Ejemplos de BSPs incluyen Twilio, MessageBird, Infobip y Crear.chat. El BSP maneja la infraestructura técnica, soporte y facturación de la API.' : 'BSP (Business Solution Provider) is a provider authorized by Meta that allows companies to access WhatsApp Business API. Examples of BSPs include Twilio, MessageBird, Infobip and Crear.chat. The BSP handles technical infrastructure, support and API billing.'}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Qué es quality rating?' : 'What is quality rating?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Quality rating es una métrica de Meta que evalúa la calidad de tus mensajes. Se basa en respuestas recibidas, reportes de spam y bloqueos. Un quality rating bajo puede limitar tu capacidad de enviar mensajes. Mantener un rating alto es crucial para evitar bloqueos.' : 'Quality rating is a Meta metric that evaluates the quality of your messages. It is based on responses received, spam reports and blocks. A low quality rating can limit your ability to send messages. Maintaining a high rating is crucial to avoid blocks.'}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '¿Qué es WhatsApp Cloud API?' : 'What is WhatsApp Cloud API?'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'WhatsApp Cloud API es la versión moderna de WhatsApp Business API alojada en la nube de Meta. Ofrece las mismas funcionalidades que la API tradicional pero con menor latencia, actualizaciones automáticas y sin necesidad de servidor propio. Es la opción recomendada para nuevas implementaciones.' : 'WhatsApp Cloud API is the modern version of WhatsApp Business API hosted on Meta cloud. It offers the same functionalities as traditional API but with lower latency, automatic updates and no need for own server. It is the recommended option for new implementations.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Los primeros pasos para migrar WhatsApp Business API no son complejos, pero sí requieren orden técnico y elección correcta del proveedor. Las empresas que implementan correctamente este proceso logran automatizar su atención, reducir costos y aumentar ventas en menos de 2 semanas.' : 'The first steps to migrate WhatsApp Business API are not complex, but they do require technical order and correct provider choice. Companies that implement this process correctly manage to automate their service, reduce costs and increase sales in less than 2 weeks.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Agenda una asesoría gratuita y migra tu WhatsApp en menos de 7 días con Crear.chat.' : 'Schedule a free consultation and migrate your WhatsApp in less than 7 days with Crear.chat.'}
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
                      href="/blog/casos-uso-whatsapp-business-api"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Para que me sirve WhatsApp Business API para mi negocio?' : 'What is WhatsApp Business API useful for in my business?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/beneficios-whatsapp-business-api-ia"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Qué beneficios tengo usando WhatsApp Business API + IA?' : 'What benefits do I get using WhatsApp Business API + AI?'}
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
                      {language === 'es' ? 'Tendencias' : 'Trends'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Qué beneficios tengo usando WhatsApp Business API + IA?' : 'What benefits do I get using WhatsApp Business API + AI?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente.' : 'Discover how the combination of WhatsApp Business API and AI revolutionizes customer service.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>6 min</span>
                      <a href="/blog/beneficios-whatsapp-business-api-ia" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
    </>
  );
}
