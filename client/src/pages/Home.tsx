import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Compass,
  Handshake,
  LayoutGrid,
  Megaphone,
  MessageCircle,
  Package,
  Plug,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import { Section, SectionHeader } from "@/components/site/Section";
import ButtonLink from "@/components/site/ButtonLink";
import FeatureCard from "@/components/site/FeatureCard";
import Steps from "@/components/site/Steps";
import CtaBanner from "@/components/site/CtaBanner";
import HeroMockup from "@/components/home/HeroMockup";
import { COMPANY, CONTACT, CTA, SITE_URL } from "@/lib/site";
import { PLANS, PLANS_NOTE, formatCop, formatNumber } from "@/lib/plans";

const CAPABILITIES = [
  {
    icon: MessageCircle,
    title: "WhatsApp Business API",
    href: "/modulos/whatsapp-business-api",
    text: "Atiende por la API oficial de WhatsApp con varios asesores a la vez y suma Instagram y Facebook Messenger según tu plan.",
  },
  {
    icon: Users,
    title: "CRM y gestión de clientes",
    href: "/modulos/crm",
    text: "Cada contacto con su historial de conversaciones, organizado con etiquetas para dar seguimiento a cada oportunidad comercial.",
  },
  {
    icon: Sparkles,
    title: "Inteligencia artificial",
    href: "/modulos/inteligencia-artificial",
    text: "Agentes de IA que responden consultas a cualquier hora y un asistente que sugiere respuestas a tus asesores en tiempo real.",
  },
  {
    icon: Package,
    title: "Catálogo e inventario",
    href: "/modulos/catalogo-inventario",
    text: "Organiza tus productos y compártelos con una página pública de catálogo. Disponible desde el plan Crecimiento.",
  },
  {
    icon: Bot,
    title: "Automatización y chatbots",
    href: "/modulos/automatizacion-chatbot",
    text: "Flujos de chatbot que responden por palabras clave, dan la bienvenida y ordenan la conversación antes de que llegue a un asesor.",
  },
  {
    icon: BarChart3,
    title: "Reportes y analítica",
    href: "/modulos/reportes-analitica",
    text: "Métricas de rendimiento del equipo para saber cómo avanza la atención. Disponible desde el plan Crecimiento.",
  },
  {
    icon: Megaphone,
    title: "Campañas y plantillas",
    href: "/modulos/whatsapp-business-api",
    text: "Plantillas aprobadas por Meta y difusiones a listas de contactos para promociones, recordatorios y avisos.",
  },
  {
    icon: Plug,
    title: "Integraciones",
    href: "/integraciones",
    text: "Conecta crear.chat con Google Sheets, Zapier, Make, Slack o tus propios sistemas mediante webhook. Desde el plan PRO.",
  },
];

const WORK_STEPS = [
  { title: "Conocemos tu empresa", description: "Entendemos cómo vendes, cómo atiendes y por dónde te escriben tus clientes." },
  { title: "Identificamos oportunidades", description: "Detectamos qué tareas se pueden organizar, automatizar o apoyar con IA." },
  { title: "Diseñamos una solución", description: "Proponemos flujos, módulos e integraciones a la medida de tu operación." },
  { title: "Implementamos la tecnología", description: "Configuramos crear.chat y lo conectamos con las herramientas que ya usas." },
  { title: "Capacitamos y acompañamos", description: "Entrenamos a tu equipo y ajustamos la solución a medida que crece." },
];

const TRUST_POINTS = [
  {
    icon: Building2,
    title: `Trayectoria desde ${COMPANY.foundingYear}`,
    text: "Más de tres décadas en soluciones tecnológicas y comunicaciones empresariales en Colombia.",
  },
  {
    icon: Handshake,
    title: "Tecnología con acompañamiento",
    text: "No solo entregamos una plataforma: te ayudamos a configurarla, adaptarla y sacarle provecho.",
  },
  {
    icon: Compass,
    title: "Empresas e instituciones",
    text: "Soluciones para comercios, servicios, organizaciones y entidades públicas como las alcaldías.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organizacion`,
    name: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${COMPANY.logoLarge}`,
    foundingDate: String(COMPANY.foundingYear),
    description:
      "Empresa colombiana de consultoría y soluciones de comunicación empresarial con WhatsApp Business API, CRM, automatización e inteligencia artificial.",
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Cartago",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    areaServed: "CO",
    sameAs: [CONTACT.facebook, CONTACT.instagram],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#sitio`,
    name: COMPANY.platformName,
    url: SITE_URL,
    inLanguage: "es-CO",
    publisher: { "@id": `${SITE_URL}/#organizacion` },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: COMPANY.platformName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plataforma para gestionar conversaciones, clientes y procesos comerciales con WhatsApp Business API, CRM, inteligencia artificial y automatización.",
    provider: { "@id": `${SITE_URL}/#organizacion` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: Math.min(...PLANS.map((p) => p.price)),
      highPrice: Math.max(...PLANS.map((p) => p.price)),
      offerCount: PLANS.length,
    },
  },
];

export default function Home() {
  return (
    <PageLayout>
      <Seo
        title="WhatsApp Business API, CRM e IA para empresas | crear.chat"
        description="crear.chat integra WhatsApp Business API, CRM, inteligencia artificial y automatización. Crear Comunicaciones te acompaña con consultoría desde 1993."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl"
        />
        <div className="container relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow mb-4">Plataforma crear.chat + consultoría de Crear Comunicaciones</p>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Transforma la comunicación con tus clientes con{" "}
              <span className="text-brand-600">WhatsApp, CRM e inteligencia artificial</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Con crear.chat puedes centralizar conversaciones, gestionar clientes, automatizar procesos y aprovechar la
              inteligencia artificial. Y con Crear Comunicaciones tienes el acompañamiento especializado para descubrir
              cómo aplicar estas herramientas a las necesidades de tu empresa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/plataforma" size="lg">
                Conoce crear.chat <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={CTA.advisory.href} variant="cta" size="lg">
                Solicita una asesoría
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
              {["API oficial de WhatsApp", "Planes mensuales en pesos", `Empresa colombiana desde ${COMPANY.foundingYear}`].map(
                (item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-cta-600" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <HeroMockup />
        </div>
      </section>

      {/* Dos formas de ayudarte */}
      <Section>
        <SectionHeader
          eyebrow="Dos formas de ayudarte"
          title="Tecnología lista para usar y un equipo que te acompaña"
          intro="Puedes empezar con la plataforma, con la consultoría o con ambas. Se complementan."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <LayoutGrid className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6">A. Plataforma</p>
            <h3 className="mt-2 font-display text-2xl text-ink">crear.chat</h3>
            <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-muted">
              Para empresas que buscan herramientas para gestionar WhatsApp, clientes, automatizaciones, inteligencia
              artificial y procesos comerciales desde un solo lugar.
            </p>
            <ButtonLink href="/plataforma" className="mt-8 self-start">
              Conocer la plataforma <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </article>
          <article className="flex flex-col rounded-3xl bg-brand-900 p-8 text-white md:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-100">
              <Compass className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6 text-brand-200">B. Consultoría</p>
            <h3 className="mt-2 font-display text-2xl">Consultoría y soluciones empresariales</h3>
            <p className="mt-3 flex-1 text-lg leading-relaxed text-brand-100">
              Para empresas que necesitan orientación para descubrir oportunidades, diseñar estrategias e implementar
              soluciones tecnológicas de comunicación.
            </p>
            <ButtonLink href="/consultoria" variant="cta" className="mt-8 self-start">
              Conocer nuestros servicios de consultoría
            </ButtonLink>
          </article>
        </div>
      </Section>

      {/* Qué puedes hacer */}
      <Section tone="soft" id="modulos">
        <SectionHeader
          eyebrow="Módulos de la plataforma"
          title="¿Qué puedes hacer con crear.chat?"
          intro="Cada módulo resuelve una parte de la relación con tus clientes. Algunos están incluidos en todos los planes y otros se habilitan según el plan que elijas."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} href={item.href}>
              {item.text}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/modulos" variant="outline">
            Ver todos los módulos y funcionalidades
          </ButtonLink>
        </div>
      </Section>

      {/* No necesitas conocer todas las posibilidades */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <blockquote className="relative rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white md:p-12">
            <span aria-hidden="true" className="absolute left-6 top-2 font-display text-8xl leading-none text-white/15">
              “
            </span>
            <p className="relative font-display text-2xl leading-snug md:text-3xl">
              No necesitas conocer todas las posibilidades de WhatsApp Business API, CRM o inteligencia artificial.
              Nuestro trabajo es ayudarte a descubrirlas y convertirlas en soluciones para tu empresa.
            </p>
          </blockquote>
          <div>
            <h2 className="font-display text-3xl leading-tight text-ink">Te acompañamos de principio a fin</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Muchos empresarios no saben todo lo que pueden hacer con WhatsApp. En Crear Comunicaciones partimos de un
              diagnóstico de tu comunicación con clientes, proponemos qué automatizar y cómo usar la IA, implementamos
              la solución y capacitamos a tu equipo para que la opere con confianza.
            </p>
            <ButtonLink href={CTA.advisory.href} variant="cta" size="lg" className="mt-8">
              Solicitar asesoría
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Cómo trabajamos */}
      <Section tone="soft">
        <SectionHeader eyebrow="Cómo trabajamos" title="Cinco pasos para llevar la tecnología a tu operación" />
        <Steps steps={WORK_STEPS} />
      </Section>

      {/* Planes */}
      <Section id="planes">
        <SectionHeader
          eyebrow="Planes de crear.chat"
          title="Planes mensuales para cada etapa de tu empresa"
          intro="Todos los planes incluyen WhatsApp Business API, módulo de contactos, agentes y asistente de IA, y respuestas rápidas."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <article key={plan.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-xl text-ink">{plan.name}</h3>
              <p className="mt-3">
                <span className="font-display text-3xl text-ink">{formatCop(plan.price)}</span>
                <span className="text-ink-muted"> COP/mes</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-[15px] text-ink-muted">
                {[
                  `${formatNumber(plan.contacts)} contactos`,
                  `${plan.humanAgents} agentes humanos`,
                  plan.channels,
                  plan.chatbotFlows,
                  plan.aiResponses,
                ].map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cta-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/planes#${plan.id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800"
              >
                Ver detalle del plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink-muted">{PLANS_NOTE}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/planes">Comparar planes y precios</ButtonLink>
          <ButtonLink href={CTA.advisor.href} variant="outline">
            Te ayudamos a elegir el plan adecuado
          </ButtonLink>
        </div>
      </Section>

      {/* Experiencia y confianza */}
      <Section tone="soft">
        <SectionHeader
          eyebrow="Experiencia y confianza"
          title={`Crear Comunicaciones: soluciones de comunicación empresarial desde ${COMPANY.foundingYear}`}
          intro="crear.chat es la plataforma tecnológica de Crear Comunicaciones, empresa colombiana con sede en Cartago, Valle del Cauca."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TRUST_POINTS.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title}>
              {item.text}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Conversemos sobre cómo mejorar la comunicación y los procesos de tu empresa"
        text="Cuéntanos cómo atiendes hoy a tus clientes y te orientamos sobre la mejor forma de aprovechar crear.chat."
        primary={{ label: "Contactar a un asesor", href: CTA.advisor.href }}
        secondary={{ label: "Solicitar demostración", href: CTA.demo.href }}
      />
    </PageLayout>
  );
}
