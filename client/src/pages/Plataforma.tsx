import {
  BarChart3,
  Bot,
  FileText,
  Headphones,
  Megaphone,
  MessagesSquare,
  Package,
  Plug,
  Tag,
  Users,
  Workflow,
  Zap,
  Building2,
  Hotel,
  Store,
  UtensilsCrossed,
  Landmark,
  Briefcase,
} from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import ButtonLink from "@/components/site/ButtonLink";
import FeatureCard from "@/components/site/FeatureCard";
import Steps from "@/components/site/Steps";
import Faq, { faqJsonLd, type FaqItem } from "@/components/site/Faq";
import CtaBanner from "@/components/site/CtaBanner";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import HeroMockup from "@/components/home/HeroMockup";
import { COMPANY, CTA, SITE_URL } from "@/lib/site";
import { PLANS, formatCop } from "@/lib/plans";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Plataforma crear.chat", href: "/plataforma" },
];

const CAPABILITIES = [
  {
    icon: Users,
    title: "Gestión de contactos",
    badge: "Todos los planes",
    href: "/modulos/crm",
    text: "Cada cliente queda registrado con su historial de conversaciones, como un CRM conectado a tus chats.",
  },
  {
    icon: MessagesSquare,
    title: "Conversaciones y canales",
    badge: "Todos los planes",
    href: "/modulos/whatsapp-business-api",
    text: "WhatsApp Business API, Instagram y Facebook Messenger en un solo lugar. En Inicio eliges uno; desde Crecimiento, los tres.",
  },
  {
    icon: Headphones,
    title: "Agentes humanos",
    badge: "Todos los planes",
    href: "/modulos/whatsapp-business-api",
    text: "Las personas de tu equipo atienden desde la plataforma: de 2 agentes en Inicio a 10 en Elite.",
  },
  {
    icon: Bot,
    title: "Agentes y asistente de IA",
    badge: "Todos los planes",
    href: "/modulos/inteligencia-artificial",
    text: "Agentes de IA que atienden 24/7 y un asistente que sugiere respuestas a tus asesores en tiempo real.",
  },
  {
    icon: Package,
    title: "Catálogo e inventario",
    badge: "Desde Crecimiento",
    href: "/modulos/catalogo-inventario",
    text: "Una página pública con tus productos para compartir en la conversación, de 1.000 productos a ilimitados.",
  },
  {
    icon: FileText,
    title: "Plantillas",
    badge: "Desde Crecimiento",
    href: "/modulos/whatsapp-business-api",
    text: "Mensajes aprobados por Meta para iniciar conversaciones y enviar avisos a tus clientes.",
  },
  {
    icon: Megaphone,
    title: "Difusiones",
    badge: "Desde Crecimiento",
    href: "/modulos/whatsapp-business-api",
    text: "Envíos a listas de contactos para promociones y recordatorios: 20, 100 o ilimitados al mes según el plan.",
  },
  {
    icon: Zap,
    title: "Respuestas rápidas",
    badge: "Todos los planes",
    href: "/modulos/whatsapp-business-api",
    text: "Atajos de texto para responder en segundos las preguntas de siempre.",
  },
  {
    icon: Tag,
    title: "Etiquetas",
    badge: "Desde Crecimiento",
    href: "/modulos/crm",
    text: "Clasifica conversaciones con colores para priorizar y hacer seguimiento.",
  },
  {
    icon: Workflow,
    title: "Flujos de chatbot",
    badge: "Todos los planes",
    href: "/modulos/automatizacion-chatbot",
    text: "Respuestas automáticas por palabra clave para dar la bienvenida, mostrar opciones y orientar al cliente.",
  },
  {
    icon: Plug,
    title: "Integraciones",
    badge: "Desde PRO",
    href: "/integraciones",
    text: "Google Sheets, Zapier, Make, Slack y webhook genérico para conectar crear.chat con tus herramientas.",
  },
  {
    icon: BarChart3,
    title: "Reportes",
    badge: "Desde Crecimiento",
    href: "/modulos/reportes-analitica",
    text: "Métricas de rendimiento del equipo para hacer seguimiento a la atención.",
  },
];

const HOW_IT_WORKS = [
  {
    title: "Conectas tus canales",
    description: "Vinculas WhatsApp Business API, Instagram o Facebook Messenger, según tu plan.",
  },
  {
    title: "Tus clientes escriben",
    description: "Las conversaciones de todos los canales llegan a crear.chat, junto con los datos de cada contacto.",
  },
  {
    title: "La automatización responde primero",
    description: "Flujos de chatbot y agentes de IA atienden lo frecuente y orientan al cliente.",
  },
  {
    title: "Tu equipo atiende y hace seguimiento",
    description: "Los asesores continúan la conversación con apoyo del asistente de IA, etiquetas y catálogo.",
  },
  {
    title: "Mides y mejoras",
    description: "Con los reportes revisas cómo va la atención y ajustas lo que haga falta.",
  },
];

const AUDIENCES = [
  { icon: Briefcase, label: "Pymes y empresas de servicios" },
  { icon: Store, label: "Comercios y tiendas" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Hotel, label: "Hoteles y turismo" },
  { icon: Building2, label: "Instituciones y organizaciones" },
  { icon: Landmark, label: "Entidades públicas" },
];

const FAQS: FaqItem[] = [
  {
    question: "¿Qué es crear.chat?",
    answer:
      "crear.chat es una plataforma que integra herramientas para gestionar conversaciones, clientes y procesos comerciales a través de WhatsApp Business API, CRM, inteligencia artificial y automatización. La ofrece Crear Comunicaciones, empresa colombiana.",
  },
  {
    question: "¿Quién está detrás de crear.chat?",
    answer: `Crear Comunicaciones, empresa colombiana con trayectoria desde ${COMPANY.foundingYear} en soluciones tecnológicas y comunicaciones empresariales, con sede en Cartago, Valle del Cauca. Además de la plataforma, ofrece consultoría, implementación y capacitación.`,
  },
  {
    question: "¿Qué canales puedo atender con crear.chat?",
    answer:
      "WhatsApp Business API, Instagram y Facebook Messenger. En el plan Inicio eliges uno de los tres; los planes Crecimiento, PRO y Elite incluyen los tres.",
  },
  {
    question: "¿crear.chat tiene inteligencia artificial?",
    answer:
      "Sí. Todos los planes incluyen agentes de IA, que atienden conversaciones de forma automática, y un asistente de IA que sugiere respuestas a tus asesores. La cantidad de respuestas de IA al mes depende del plan.",
  },
  {
    question: "¿Cuánto cuesta crear.chat?",
    answer: `Los planes mensuales van desde ${formatCop(PLANS[0].price)} hasta ${formatCop(PLANS[PLANS.length - 1].price)} pesos colombianos más IVA. También puedes armar un plan a tu medida.`,
  },
  {
    question: "¿Me ayudan a configurar la plataforma?",
    answer:
      "Sí. La configuración y la Academia de entrenamiento por horas son servicios opcionales en todos los planes, y Crear Comunicaciones ofrece consultoría para diseñar e implementar la solución que necesita tu empresa.",
  },
];

export default function Plataforma() {
  return (
    <PageLayout>
      <Seo
        title="crear.chat: plataforma de WhatsApp Business API, CRM e IA"
        description="crear.chat integra WhatsApp Business API, Instagram, Messenger, CRM, agentes de IA, chatbots, catálogo y reportes para gestionar clientes desde un solo lugar."
        path="/plataforma"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: COMPANY.platformName,
            url: `${SITE_URL}/plataforma`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Plataforma que integra herramientas para gestionar conversaciones, clientes y procesos comerciales a través de WhatsApp Business API, CRM, inteligencia artificial y automatización.",
            featureList: CAPABILITIES.map((c) => c.title),
            provider: { "@type": "Organization", name: COMPANY.legalName, url: SITE_URL },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "COP",
              lowPrice: PLANS[0].price,
              highPrice: PLANS[PLANS.length - 1].price,
              offerCount: PLANS.length,
            },
          },
          faqJsonLd(FAQS),
          breadcrumbJsonLd(BREADCRUMBS),
        ]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Plataforma crear.chat"
        title="Una plataforma para tus conversaciones, tus clientes y tus ventas"
        intro={
          <p>
            <strong className="text-ink">crear.chat</strong> es una plataforma que integra herramientas para gestionar
            conversaciones, clientes y procesos comerciales a través de WhatsApp Business API, CRM, inteligencia
            artificial y automatización.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/modulos" size="lg">
              Conocer los módulos
            </ButtonLink>
            <ButtonLink href="/planes" variant="outline" size="lg">
              Ver planes y precios
            </ButtonLink>
          </>
        }
        aside={<HeroMockup />}
      />

      {/* Problema que resuelve */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl leading-tight text-ink">¿Qué problema resuelve?</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              En muchas empresas los clientes escriben a varios celulares, por distintos canales, y cada asesor guarda la
              información a su manera. Se pierden mensajes, nadie sabe en qué va cada cliente y las mismas preguntas se
              responden a mano todos los días.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              crear.chat reúne los canales, los contactos y las herramientas de atención en un solo lugar, para que tu
              equipo trabaje ordenado y tus clientes reciban respuesta a tiempo.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight text-ink">¿Para quién es?</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Para cualquier organización que atiende, vende o informa por mensajería y quiere hacerlo de forma
              profesional.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {AUDIENCES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                  <Icon className="h-5 w-5 flex-shrink-0 text-brand-600" aria-hidden="true" />
                  <span className="font-medium text-ink">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Capacidades */}
      <Section tone="soft" id="capacidades">
        <SectionHeader
          eyebrow="Capacidades principales"
          title="Lo que incluye crear.chat"
          intro="Cada tarjeta indica desde qué plan está disponible la funcionalidad."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} href={item.href} badge={item.badge}>
              {item.text}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/modulos">Ver el directorio de módulos</ButtonLink>
          <ButtonLink href="/planes#comparar" variant="outline">
            Comparar planes
          </ButtonLink>
        </div>
      </Section>

      {/* Cómo funciona */}
      <Section>
        <SectionHeader eyebrow="Cómo funciona" title="Así trabaja tu empresa con crear.chat" />
        <Steps steps={HOW_IT_WORKS} />
      </Section>

      {/* Plataforma + consultoría */}
      <Section tone="brand">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-brand-200">Plataforma + acompañamiento</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">
              La tecnología es el comienzo. Te ayudamos a sacarle provecho.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Con cualquier plan puedes contratar la configuración de la plataforma y horas de la Academia de
              entrenamiento. Y si necesitas ir más allá, el equipo de consultoría de {COMPANY.legalName} diseña contigo
              flujos, integraciones y estrategias a la medida de tu empresa.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ButtonLink href="/consultoria" variant="cta" size="lg">
              Conocer la consultoría
            </ButtonLink>
            <ButtonLink href={CTA.demo.href} variant="light" size="lg">
              {CTA.demo.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Preguntas frecuentes */}
      <Section>
        <SectionHeader eyebrow="Preguntas frecuentes" title="Preguntas sobre la plataforma" />
        <Faq items={FAQS} />
      </Section>

      <CtaBanner
        title="Mira crear.chat funcionando con los casos de tu empresa"
        text="Agenda una demostración y te mostramos cómo se vería la atención de tus clientes en la plataforma."
        primary={CTA.demo}
        secondary={CTA.advisor}
      />
    </PageLayout>
  );
}
