import { CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import ButtonLink from "@/components/site/ButtonLink";
import FeatureCard from "@/components/site/FeatureCard";
import CtaBanner from "@/components/site/CtaBanner";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { CTA, SITE_URL } from "@/lib/site";
import { MODULE_GROUPS } from "@/lib/modules";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Módulos y funcionalidades", href: "/modulos" },
];

const AVAILABILITY_NOTES = [
  { label: "Todos los planes", text: "Incluido desde el plan Inicio." },
  { label: "Desde Crecimiento", text: "Incluido en Crecimiento, PRO y Elite." },
  { label: "Desde PRO", text: "Incluido en PRO y Elite." },
  { label: "Adicional", text: "Se agrega al armar tu plan a la medida." },
];

export default function Modulos() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Módulos y funcionalidades de crear.chat",
    itemListElement: MODULE_GROUPS.flatMap((group) => group.items).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
      url: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <PageLayout>
      <Seo
        title="Módulos de crear.chat: WhatsApp API, CRM, IA y chatbots"
        description="Directorio de funcionalidades de crear.chat: WhatsApp Business API, plantillas, difusiones, CRM, agentes de IA, flujos de chatbot, catálogo, integraciones y reportes."
        path="/modulos"
        jsonLd={[itemList, breadcrumbJsonLd(BREADCRUMBS)]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Módulos y funcionalidades"
        title="Todo lo que puedes hacer con crear.chat, organizado por áreas"
        intro={
          <p>
            Conoce cada funcionalidad de la plataforma, qué problema resuelve y en qué plan está disponible. Si no sabes
            por dónde empezar, el equipo de Crear Comunicaciones te ayuda a definir qué módulos necesita tu empresa.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/planes">Ver planes y precios</ButtonLink>
            <ButtonLink href={CTA.advisory.href} variant="cta">
              {CTA.advisory.label}
            </ButtonLink>
          </>
        }
      />

      {/* Índice de áreas */}
      <nav aria-label="Áreas de funcionalidades" className="border-y border-slate-200 bg-white">
        <div className="container flex gap-2 overflow-x-auto py-3">
          {MODULE_GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-ink hover:border-brand-200 hover:bg-brand-50"
            >
              {group.title}
            </a>
          ))}
        </div>
      </nav>

      {MODULE_GROUPS.map((group, i) => (
        <Section key={group.id} id={group.id} tone={i % 2 === 0 ? "white" : "soft"} className="scroll-mt-20">
          <SectionHeader title={group.title} intro={group.intro} align="left" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <FeatureCard
                key={item.name}
                icon={item.icon}
                title={item.name}
                href={item.href}
                badge={item.availability}
                linkLabel={`Conocer más sobre ${item.name}`}
              >
                <p className="font-medium text-ink">{item.title}</p>
                <p className="mt-1">{item.description}</p>
                <p className="mt-3 flex gap-2 text-sm text-cta-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {item.benefit}
                </p>
              </FeatureCard>
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <div className="rounded-3xl border border-slate-200 p-6 md:p-10">
          <h2 className="font-display text-2xl text-ink">¿Cómo leer la disponibilidad?</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AVAILABILITY_NOTES.map((note) => (
              <div key={note.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-cta-700">{note.label}</dt>
                <dd className="mt-1 text-ink-muted">{note.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-ink-muted">
            Los límites exactos de cada plan (contactos, flujos, difusiones, productos) están en la{" "}
            <a href="/planes#comparar" className="font-medium text-brand-600 hover:underline">
              tabla comparativa de planes
            </a>
            .
          </p>
        </div>
      </Section>

      <CtaBanner
        title="¿Qué módulos necesita tu empresa?"
        text="No tienes que descubrirlo solo. En una asesoría revisamos cómo atiendes y te recomendamos por dónde empezar."
      />
    </PageLayout>
  );
}
