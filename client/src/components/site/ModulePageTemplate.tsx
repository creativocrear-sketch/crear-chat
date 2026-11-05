import { ArrowRight, Check, Minus } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "./PageLayout";
import Seo from "./Seo";
import PageHero from "./PageHero";
import { Section, SectionHeader } from "./Section";
import ButtonLink from "./ButtonLink";
import FeatureCard from "./FeatureCard";
import Steps from "./Steps";
import Faq, { faqJsonLd } from "./Faq";
import CtaBanner from "./CtaBanner";
import { breadcrumbJsonLd } from "./Breadcrumbs";
import { COMPANY, CTA, SITE_URL } from "@/lib/site";
import { PLANS, type MatrixValue } from "@/lib/plans";
import type { ModulePageData } from "@/content/modulos/types";

function AvailabilityValue({ value }: { value: MatrixValue }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-cta-600" aria-label="Incluido" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-slate-300" aria-label="No incluido" />;
  return <span className="font-medium text-ink">{value}</span>;
}

/** Tarjeta lateral del encabezado con la disponibilidad del módulo en cada plan. */
function AvailabilityCard({ data }: { data: ModulePageData }) {
  if (!data.availability) return null;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5">
      <p className="eyebrow">Disponibilidad por plan</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-ink-muted">
              <th scope="col" className="pb-2 text-left font-medium">
                <span className="sr-only">Funcionalidad</span>
              </th>
              {PLANS.map((plan) => (
                <th key={plan.id} scope="col" className="px-1 pb-2 text-center font-semibold text-ink">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.availability.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="py-3 pr-2 text-left font-medium text-ink">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={PLANS[i].id} className="px-1 py-3 text-center text-xs leading-tight">
                    <AvailabilityValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.availabilityNote && <p className="mt-4 text-sm text-ink-muted">{data.availabilityNote}</p>}
      <Link
        href="/planes#comparar"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800"
      >
        Comparar planes <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

/** Página interior de un módulo de crear.chat. Todas las páginas de módulo comparten esta estructura. */
export default function ModulePageTemplate({ data }: { data: ModulePageData }) {
  const breadcrumbs = [
    { label: "Inicio", href: "/" },
    ...(data.path.startsWith("/modulos/") ? [{ label: "Módulos", href: "/modulos" }] : []),
    { label: data.name, href: data.path },
  ];

  return (
    <PageLayout>
      <Seo
        title={data.seo.title}
        description={data.seo.description}
        path={data.path}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: data.h1,
            description: data.seo.description,
            url: `${SITE_URL}${data.path}`,
            inLanguage: "es-CO",
            about: {
              "@type": "SoftwareApplication",
              name: COMPANY.platformName,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
            },
            publisher: { "@type": "Organization", name: COMPANY.legalName, url: SITE_URL },
          },
          faqJsonLd(data.faqs),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={data.eyebrow}
        title={data.h1}
        intro={data.intro.map((p) => (
          <p key={p} className="mt-3 first:mt-0">
            {p}
          </p>
        ))}
        actions={
          <>
            <ButtonLink href={CTA.demo.href} size="lg">
              {CTA.demo.label}
            </ButtonLink>
            <ButtonLink href="/planes" variant="outline" size="lg">
              Ver planes
            </ButtonLink>
          </>
        }
        aside={data.availability ? <AvailabilityCard data={data} /> : undefined}
      />

      {/* Problema que resuelve */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl leading-tight text-ink">{data.problem.title}</h2>
            {data.problem.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
          <ul className="space-y-3 self-center rounded-3xl bg-slate-50 p-6 md:p-8">
            {data.problem.pains.map((pain) => (
              <li key={pain} className="flex gap-3 text-ink">
                <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" aria-hidden="true" />
                {pain}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Cómo funciona */}
      <Section tone="soft">
        <SectionHeader eyebrow="Cómo funciona" title={data.howItWorks.title} intro={data.howItWorks.intro} />
        <Steps steps={data.howItWorks.steps} />
      </Section>

      {/* Funcionalidades */}
      <Section>
        <SectionHeader eyebrow="Funcionalidades principales" title={`Lo que incluye: ${data.name}`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} badge={feature.badge}>
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Beneficios */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="Beneficios" title="Lo que gana tu empresa" align="left" className="mb-0" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-ink">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta-600" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Ejemplos */}
      <Section>
        <SectionHeader
          eyebrow="Ejemplos de aplicación"
          title="Así lo pueden usar distintas empresas"
          intro="Son casos de uso ilustrativos para mostrar las posibilidades; cada implementación se ajusta a la operación de la empresa."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.examples.map((example) => (
            <article key={example.title} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-cta-700">{example.sector}</p>
              <h3 className="mt-2 font-display text-lg leading-snug text-ink">{example.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{example.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Integración con el resto de la plataforma */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow mb-3">WhatsApp Business API e inteligencia artificial</p>
            <h2 className="font-display text-3xl leading-tight text-ink">{data.integration.title}</h2>
            {data.integration.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
          <nav aria-label="Módulos y artículos relacionados" className="self-center">
            <p className="mb-3 font-semibold text-ink">Relacionado</p>
            <ul className="space-y-2">
              {data.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-ink hover:border-brand-200 hover:text-brand-700"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      {/* Consultoría */}
      <Section tone="brand">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-brand-200">Consultoría y acompañamiento</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">{data.consulting.title}</h2>
            {data.consulting.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-brand-100">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ButtonLink href={CTA.advisory.href} variant="cta" size="lg">
              {CTA.advisory.label}
            </ButtonLink>
            <ButtonLink href="/consultoria" variant="light" size="lg">
              Conocer la consultoría
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Preguntas frecuentes */}
      <Section>
        <SectionHeader eyebrow="Preguntas frecuentes" title={`Preguntas sobre ${data.name}`} />
        <Faq items={data.faqs} />
      </Section>

      <CtaBanner title={data.cta.title} text={data.cta.text} primary={CTA.demo} secondary={CTA.advisor} />
    </PageLayout>
  );
}
