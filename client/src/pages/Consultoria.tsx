import {
  BarChart3,
  Check,
  GraduationCap,
  Plug,
  Search,
  Target,
  Workflow,
  Building2,
  Compass,
  HelpCircle,
} from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import ButtonLink from "@/components/site/ButtonLink";
import Steps from "@/components/site/Steps";
import Faq, { faqJsonLd, type FaqItem } from "@/components/site/Faq";
import CtaBanner from "@/components/site/CtaBanner";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { COMPANY, CONTACT, CTA, SITE_URL } from "@/lib/site";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Consultoría y soluciones empresariales", href: "/consultoria" },
];

const SERVICES = [
  {
    id: "diagnostico",
    icon: Search,
    title: "Diagnóstico de comunicación",
    paragraphs: [
      "Analizamos los canales que utiliza tu empresa, los flujos de trabajo y los diferentes puntos de contacto con tus clientes.",
      "Identificamos oportunidades para mejorar la atención, organizar las comunicaciones, reducir tareas manuales y aprovechar la automatización.",
    ],
  },
  {
    id: "flujos",
    icon: Workflow,
    title: "Diseño de flujos automatizados",
    paragraphs: [
      "Creamos flujos de comunicación automatizados que se activan según el comportamiento y las necesidades del cliente.",
    ],
    list: { label: "Por ejemplo", items: ["Bienvenida", "Seguimiento", "Reactivación", "Recordatorios", "Acompañamiento posterior a una compra o servicio"] },
  },
  {
    id: "integraciones",
    icon: Plug,
    title: "Integraciones y conexión con otras herramientas",
    paragraphs: [
      "Conectamos crear.chat con herramientas y plataformas para facilitar el intercambio de información y la automatización de procesos.",
    ],
    list: { label: "Integraciones disponibles", items: ["Google Sheets", "Zapier", "Make", "Slack", "Webhook genérico"] },
  },
  {
    id: "segmentacion",
    icon: Target,
    title: "Segmentación inteligente",
    paragraphs: [
      "Definimos segmentos de audiencia basados en comportamiento, demografía e historial de interacción, según la información disponible.",
      "Buscamos que cada mensaje llegue a la persona correcta en el momento adecuado.",
    ],
  },
  {
    id: "implementacion",
    icon: GraduationCap,
    title: "Implementación y capacitación",
    paragraphs: [
      "No solo diseñamos la estrategia: acompañamos su implementación en la plataforma y capacitamos al equipo para que pueda operar, ajustar y optimizar las automatizaciones.",
    ],
  },
  {
    id: "medicion",
    icon: BarChart3,
    title: "Medición y optimización continua",
    paragraphs: [
      "Establecemos indicadores clave de seguimiento (KPI) para medir el rendimiento de las automatizaciones, identificar mejoras y escalar lo que funciona.",
    ],
  },
];

const BENEFITS = [
  "Estrategia personalizada para tu modelo de negocio",
  "Automatización de campañas",
  "Reducción de tareas manuales y repetitivas",
  "Mayor eficiencia en la comunicación con clientes",
  "Oportunidades para mejorar conversión y retención",
  "Capacitación de tu equipo",
  "Seguimiento y optimización continua",
  "Integración con las herramientas que ya usas",
];

const METHOD = [
  { title: "Diagnóstico", description: "Entendemos tus canales, procesos y puntos de contacto con clientes." },
  { title: "Diseño de estrategia", description: "Definimos qué mejorar, qué automatizar y cómo usar la IA." },
  { title: "Definición de solución tecnológica", description: "Elegimos los módulos, flujos e integraciones adecuados." },
  { title: "Implementación", description: "Configuramos la solución en crear.chat y la conectamos con tus herramientas." },
  { title: "Capacitación", description: "Entrenamos a tu equipo para operarla y ajustarla." },
  { title: "Medición y optimización", description: "Revisamos indicadores y mejoramos lo que haga falta." },
];

const WHEN = [
  "Sabes que WhatsApp es importante para tu empresa, pero no sabes todo lo que puedes hacer con él.",
  "Tu equipo está saturado respondiendo mensajes a mano.",
  "Quieres automatizar o usar inteligencia artificial, pero no sabes por dónde empezar.",
  "Ya usas crear.chat y quieres sacarle más provecho.",
  "Necesitas conectar la atención por WhatsApp con otros sistemas de tu empresa.",
  "Quieres hacer campañas por WhatsApp sin poner en riesgo tu número.",
];

const FAQS: FaqItem[] = [
  {
    question: "¿Qué hace la consultoría de Crear Comunicaciones?",
    answer:
      "Ayuda a las empresas a descubrir cómo aprovechar WhatsApp Business API, CRM, inteligencia artificial y automatización. Incluye diagnóstico de comunicación, diseño de flujos automatizados, integraciones, segmentación, implementación, capacitación y medición.",
  },
  {
    question: "¿Necesito saber de tecnología para contratar la consultoría?",
    answer:
      "No. Precisamente nuestro trabajo es ayudarte a descubrir las posibilidades de la tecnología y convertirlas en soluciones para tu empresa, explicadas en un lenguaje claro.",
  },
  {
    question: "¿Por dónde empieza el trabajo?",
    answer:
      "Por un diagnóstico: analizamos los canales que usa tu empresa, cómo atiende hoy a sus clientes y qué tareas se pueden organizar, automatizar o apoyar con IA.",
  },
  {
    question: "¿Capacitan a mi equipo?",
    answer:
      "Sí. La capacitación es parte de la metodología, para que tu equipo pueda operar, ajustar y optimizar las automatizaciones. Además, los planes de crear.chat permiten contratar horas de la Academia de entrenamiento.",
  },
  {
    question: "¿Pueden integrar crear.chat con otros sistemas de mi empresa?",
    answer:
      "Sí. Trabajamos con las integraciones de Google Sheets, Zapier, Make, Slack y webhook genérico, y desarrollamos soluciones a la medida cuando el caso lo requiere.",
  },
  {
    question: "¿Cuánto cuesta la consultoría?",
    answer:
      "Depende del alcance de lo que necesite tu empresa. Escríbenos, conversamos sobre tu caso y te orientamos sobre la mejor forma de trabajar juntos.",
  },
  {
    question: "¿Garantizan resultados?",
    answer:
      "No prometemos resultados garantizados, porque dependen de cada empresa y su mercado. Lo que sí hacemos es definir indicadores de seguimiento para medir el rendimiento de lo implementado y mejorar con base en datos.",
  },
  {
    question: "¿Qué experiencia tiene Crear Comunicaciones?",
    answer: `Crear Comunicaciones es una empresa colombiana con trayectoria desde ${COMPANY.foundingYear} en soluciones tecnológicas y comunicaciones empresariales. Es la empresa detrás de la plataforma crear.chat.`,
  },
];

export default function Consultoria() {
  return (
    <PageLayout>
      <Seo
        title="Consultoría en WhatsApp API, CRM e IA en Colombia | crear.chat"
        description="Consultoría de Crear Comunicaciones en WhatsApp Business API, CRM, inteligencia artificial y automatización: diagnóstico, diseño, implementación y capacitación."
        path="/consultoria"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consultoría en WhatsApp Business API, CRM, inteligencia artificial y automatización",
            serviceType: "Consultoría en comunicación empresarial y automatización",
            url: `${SITE_URL}/consultoria`,
            areaServed: { "@type": "Country", name: "Colombia" },
            provider: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: SITE_URL,
              foundingDate: String(COMPANY.foundingYear),
              telephone: CONTACT.phoneDisplay,
              email: CONTACT.email,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de consultoría",
              itemListElement: SERVICES.map((service) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: service.title, description: service.paragraphs.join(" ") },
              })),
            },
          },
          faqJsonLd(FAQS),
          breadcrumbJsonLd(BREADCRUMBS),
        ]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Consultoría y soluciones empresariales"
        title="Consultoría en WhatsApp Business API, CRM, inteligencia artificial y automatización"
        intro={
          <>
            <p>
              En {COMPANY.legalName} ayudamos a las empresas a descubrir cómo aprovechar la tecnología para mejorar la
              comunicación con sus clientes, optimizar sus procesos comerciales y automatizar tareas.
            </p>
            <p className="mt-3">
              No nos limitamos a ofrecer herramientas tecnológicas. Analizamos las necesidades de cada empresa,
              identificamos oportunidades y acompañamos el diseño e implementación de soluciones.
            </p>
          </>
        }
        actions={
          <>
            <ButtonLink href={CTA.advisory.href} variant="cta" size="lg">
              {CTA.advisory.label}
            </ButtonLink>
            <ButtonLink href={CTA.advisor.href} variant="outline" size="lg">
              {CTA.advisor.label}
            </ButtonLink>
          </>
        }
        aside={
          <nav
            aria-label="Servicios de consultoría"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5"
          >
            <p className="eyebrow">Servicios de consultoría</p>
            <ol className="mt-4 space-y-1">
              {SERVICES.map((service, i) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium text-ink hover:bg-brand-50"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm text-brand-700">
                      {i + 1}
                    </span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      {/* Mensaje diferenciador */}
      <Section>
        <figure className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-center text-white md:p-14">
          <Compass className="mx-auto h-10 w-10 text-brand-200" aria-hidden="true" />
          <blockquote className="mt-6 font-display text-2xl leading-snug md:text-3xl">
            No necesitas conocer todas las posibilidades desde el principio. Nuestro trabajo es ayudarte a descubrirlas y
            convertirlas en soluciones para tu empresa.
          </blockquote>
          <figcaption className="mt-6 text-brand-100">
            {COMPANY.legalName} · Soluciones de comunicación empresarial desde {COMPANY.foundingYear}
          </figcaption>
        </figure>
      </Section>

      {/* Servicios */}
      <Section tone="soft" id="servicios">
        <SectionHeader
          eyebrow="Servicios de consultoría"
          title="Cómo te ayudamos"
          intro="Puedes contratar el acompañamiento completo o empezar por lo que tu empresa necesita primero."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ id, icon: Icon, title, paragraphs, list }, i) => (
            <article
              key={id}
              id={id}
              className="flex scroll-mt-28 flex-col rounded-2xl border border-slate-200 bg-white p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-display text-sm text-ink-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl leading-snug text-ink">{title}</h3>
              {paragraphs.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
              {list && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-ink">{list.label}:</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {list.items.map((item) => (
                      <li key={item} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Cuándo te conviene */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta-50 text-cta-700">
              <HelpCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight text-ink">¿Cuándo te conviene una consultoría?</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Muchos empresarios no conocen todo lo que pueden hacer con WhatsApp, un CRM o la inteligencia artificial. Si
              te identificas con alguna de estas situaciones, podemos ayudarte.
            </p>
            <ButtonLink href={CTA.advisory.href} variant="cta" size="lg" className="mt-8">
              {CTA.advisory.label}
            </ButtonLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHEN.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-5 text-ink">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Metodología */}
      <Section tone="soft">
        <SectionHeader eyebrow="Metodología de trabajo" title="Seis etapas, del diagnóstico a la mejora continua" />
        <Steps steps={METHOD} />
      </Section>

      {/* Beneficios */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Beneficios para la empresa"
            title="Lo que obtiene tu empresa"
            align="left"
            className="mb-0"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-ink">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta-600" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Tecnología + experiencia */}
      <Section tone="brand">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-200">Plataforma crear.chat</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">
              Consultoría respaldada por la plataforma crear.chat
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Las soluciones que diseñamos se implementan en crear.chat: WhatsApp Business API, Instagram, Messenger,
              CRM, agentes de IA, flujos de chatbot, catálogo e integraciones en una sola plataforma.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/plataforma" variant="light">
                Conocer la plataforma
              </ButtonLink>
              <ButtonLink href="/modulos" variant="light">
                Ver los módulos
              </ButtonLink>
            </div>
          </div>
          <div>
            <p className="eyebrow text-brand-200">Experiencia</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">
              Desde {COMPANY.foundingYear} en comunicación empresarial
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              {COMPANY.legalName} es una empresa colombiana, con sede en {CONTACT.city}, que ofrece soluciones tecnológicas y
              de comunicación para empresas, organizaciones y entidades públicas.
            </p>
            <Link
              href="/alcaldias"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              Ver soluciones para alcaldías
            </Link>
          </div>
        </div>
      </Section>

      {/* Preguntas frecuentes */}
      <Section>
        <SectionHeader eyebrow="Preguntas frecuentes" title="Preguntas sobre la consultoría" />
        <Faq items={FAQS} />
      </Section>

      <CtaBanner
        title="Conversemos sobre las oportunidades de tu empresa"
        text="Cuéntanos cómo te comunicas hoy con tus clientes y te ayudamos a descubrir qué puedes mejorar."
        primary={CTA.advisory}
        secondary={CTA.advisor}
      />
    </PageLayout>
  );
}
