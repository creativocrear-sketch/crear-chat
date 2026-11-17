import { ArrowRight, Check, Minus } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "./PageLayout";
import Seo from "./Seo";
import PageHero from "./PageHero";
import { Section, SectionHeader } from "./Section";
import ButtonLink from "./ButtonLink";
import Steps from "./Steps";
import Faq, { faqJsonLd } from "./Faq";
import CtaBanner from "./CtaBanner";
import { breadcrumbJsonLd } from "./Breadcrumbs";
import { COMPANY, CTA, SITE_URL } from "@/lib/site";
import type { SectorPageData } from "@/content/sectores/types";

/** Página de un sector: retos, usos de crear.chat, recorrido de ejemplo, consultoría y preguntas frecuentes. */
export default function SectorPageTemplate({
  data,
  others,
}: {
  data: SectorPageData;
  /** Otros sectores, para enlaces internos al final de la página. */
  others: SectorPageData[];
}) {
  const path = `/sectores/${data.slug}`;
  const breadcrumbs = [
    { label: "Inicio", href: "/" },
    { label: "Sectores", href: "/sectores" },
    { label: data.name, href: path },
  ];
  // Módulos citados en los usos, sin repetir, para la tarjeta lateral.
  const modules = Array.from(new Map(data.useCases.flatMap((u) => u.modules).map((m) => [m.label, m])).values());

  return (
    <PageLayout>
      <Seo
        title={data.seo.title}
        description={data.seo.description}
        path={path}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: data.h1,
            description: data.seo.description,
            url: `${SITE_URL}${path}`,
            inLanguage: "es-CO",
            about: {
              "@type": "SoftwareApplication",
              name: COMPANY.platformName,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
            },
            audience: { "@type": "BusinessAudience", name: data.name },
            publisher: { "@type": "Organization", name: COMPANY.legalName, url: SITE_URL },
          },
          faqJsonLd(data.faqs),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={`Sectores · ${data.name}`}
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
            <ButtonLink href={CTA.advisor.href} variant="outline" size="lg">
              {CTA.advisor.label}
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5">
            <p className="flex gap-3 rounded-2xl bg-cta-50 p-4 text-ink">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta-700" aria-hidden="true" />
              <span>{data.trust}</span>
            </p>
            <p className="eyebrow mt-6">Módulos que más usa este sector</p>
            <ul className="mt-3 space-y-1">
              {modules.map((m) => (
                <li key={m.label}>
                  <Link
                    href={m.href}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                  >
                    {m.label}
                    <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Retos del sector */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl leading-tight text-ink">{data.challenges.title}</h2>
            {data.challenges.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
          <ul className="space-y-3 self-center rounded-3xl bg-slate-50 p-6 md:p-8">
            {data.challenges.items.map((item) => (
              <li key={item} className="flex gap-3 text-ink">
                <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Usos de crear.chat */}
      <Section tone="soft">
        <SectionHeader
          eyebrow="Cómo ayuda crear.chat"
          title={`Lo que pueden hacer ${data.withArticle} con crear.chat`}
          intro="Cada uso indica los módulos de la plataforma que lo hacen posible. La disponibilidad depende del plan."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.useCases.map(({ icon: Icon, title, description, modules: used }) => (
            <article key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg leading-snug text-ink">{title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Módulos">
                {used.map((m) => (
                  <li key={m.label}>
                    <Link
                      href={m.href}
                      className="inline-block rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700 hover:bg-brand-100"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Recorrido de ejemplo */}
      <Section>
        <SectionHeader
          eyebrow="Ejemplo ilustrativo"
          title={data.journey.title}
          intro="Un recorrido posible; cada implementación se ajusta a la operación de la organización."
        />
        <Steps steps={data.journey.steps} />
      </Section>

      {/* Consultoría */}
      <Section tone="brand">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-brand-200">Consultoría y acompañamiento</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">
              Te ayudamos a llevarlo a tu operación
            </h2>
            {data.consulting.map((p) => (
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
        <SectionHeader eyebrow="Preguntas frecuentes" title={`Lo que preguntan ${data.withArticle}`} />
        <Faq items={data.faqs} />
      </Section>

      {/* Otros sectores */}
      <Section tone="soft">
        <h2 className="mb-6 font-display text-2xl text-ink">Otros sectores con los que trabajamos</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/sectores/${o.slug}`}
                className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-medium text-ink hover:border-brand-200 hover:text-brand-700"
              >
                <o.icon className="h-5 w-5 flex-shrink-0 text-brand-600" aria-hidden="true" />
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner title={data.cta.title} text={data.cta.text} primary={CTA.demo} secondary={CTA.advisor} />
    </PageLayout>
  );
}
