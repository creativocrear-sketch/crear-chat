import { Check, Minus, SlidersHorizontal } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import ButtonLink from "@/components/site/ButtonLink";
import Faq, { faqJsonLd, type FaqItem } from "@/components/site/Faq";
import CtaBanner from "@/components/site/CtaBanner";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { CTA, SITE_URL, whatsappUrl } from "@/lib/site";
import {
  CUSTOM_PLAN,
  PLANS,
  PLANS_NOTE,
  PLAN_MATRIX,
  formatCop,
  formatNumber,
  type MatrixValue,
} from "@/lib/plans";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Planes y precios", href: "/planes" },
];

const FAQS: FaqItem[] = [
  {
    question: "¿Cuánto cuesta crear.chat?",
    answer: `crear.chat tiene cuatro planes mensuales: Inicio por ${formatCop(PLANS[0].price)}, Crecimiento por ${formatCop(PLANS[1].price)}, PRO por ${formatCop(PLANS[2].price)} y Elite por ${formatCop(PLANS[3].price)} pesos colombianos al mes. También puedes armar un plan a tu medida desde ${formatCop(CUSTOM_PLAN.basePrice)} al mes.`,
  },
  {
    question: "¿Los precios incluyen IVA?",
    answer: "No. Los precios publicados están en pesos colombianos y no incluyen IVA. La facturación es mensual.",
  },
  {
    question: "¿Qué incluyen todos los planes?",
    answer:
      "Todos los planes incluyen WhatsApp Business API, módulo de contactos, agentes de IA, asistente de IA, hosting, respuestas rápidas, flujos de chatbot y asistencia por IA. Lo que cambia entre planes es la capacidad (contactos, agentes, canales) y funciones como catálogo, plantillas, difusiones, etiquetas, reportes e integraciones.",
  },
  {
    question: "¿Qué diferencia hay entre los agentes de IA y los agentes humanos?",
    answer:
      "Los agentes de IA atienden conversaciones de forma automática a cualquier hora. Los agentes humanos son las personas de tu equipo que usan la plataforma para atender a los clientes; cada plan define cuántas pueden trabajar en ella.",
  },
  {
    question: "¿Puedo armar un plan a la medida?",
    answer: `Sí. Con la opción "Crea tu plan" partes de una base de ${formatCop(CUSTOM_PLAN.basePrice)} al mes y agregas solo los canales, la capacidad y las funciones que necesitas.`,
  },
  {
    question: "¿La configuración y la capacitación están incluidas?",
    answer:
      "Son servicios opcionales en todos los planes: la configuración de la plataforma y la Academia de entrenamiento, que se contrata por horas. Si lo prefieres, el equipo de Crear Comunicaciones te acompaña en la implementación.",
  },
  {
    question: "¿Cómo sé qué plan necesita mi empresa?",
    answer:
      "Depende de cuántos clientes atiendes, cuántas personas atienden y qué funciones necesitas. Escríbenos y un asesor de Crear Comunicaciones te orienta para elegir el plan adecuado.",
  },
];

function Cell({ value }: { value: MatrixValue }) {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto h-5 w-5 text-cta-600" aria-hidden="true" />
        <span className="sr-only">Incluido</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus className="mx-auto h-5 w-5 text-slate-300" aria-hidden="true" />
        <span className="sr-only">No incluido</span>
      </>
    );
  }
  return <span className={value === "Opcional" ? "text-ink-muted" : "font-medium text-ink"}>{value}</span>;
}

export default function Planes() {
  const offers = PLANS.map((plan) => ({
    "@type": "Offer",
    name: `Plan ${plan.name}`,
    price: plan.price,
    priceCurrency: "COP",
    url: `${SITE_URL}/planes#${plan.id}`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price,
      priceCurrency: "COP",
      billingDuration: "P1M",
      valueAddedTaxIncluded: false,
    },
  }));

  return (
    <PageLayout>
      <Seo
        title="Planes y precios de crear.chat en pesos colombianos"
        description="Planes mensuales de crear.chat desde $156.000 COP: WhatsApp Business API, CRM, agentes de IA y chatbots. Compara funcionalidades o arma tu plan a la medida."
        path="/planes"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "crear.chat",
            description:
              "Plataforma de WhatsApp Business API, CRM, inteligencia artificial y automatización para empresas.",
            brand: { "@type": "Brand", name: "crear.chat" },
            offers,
          },
          faqJsonLd(FAQS),
          breadcrumbJsonLd(BREADCRUMBS),
        ]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Planes y precios"
        title="Planes de crear.chat para gestionar WhatsApp, clientes e IA"
        intro={
          <p>
            Elige el plan según el número de contactos, agentes y funciones que necesita tu empresa, o arma uno a tu
            medida. {PLANS_NOTE}
          </p>
        }
      />

      {/* Tarjetas de planes */}
      <section className="pb-8">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <article
                key={plan.id}
                id={plan.id}
                className="flex scroll-mt-28 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="font-display text-xl text-ink">{plan.name}</h2>
                <p className="mt-3">
                  <span className="font-display text-3xl text-ink">{formatCop(plan.price)}</span>
                  <span className="text-ink-muted"> COP/mes</span>
                </p>
                <p className="mt-1 text-sm text-ink-muted">Más IVA · Facturación mensual</p>
                <dl className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-[15px]">
                  {[
                    ["Contactos", formatNumber(plan.contacts)],
                    ["Agentes humanos", String(plan.humanAgents)],
                    ["Canales", plan.channels],
                  ].map(([term, value]) => (
                    <div key={term} className="flex justify-between gap-3">
                      <dt className="text-ink-muted">{term}</dt>
                      <dd className="text-right font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-4 flex-1 space-y-2 text-[15px] text-ink-muted">
                  {[plan.chatbotFlows, plan.aiResponses].map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cta-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={whatsappUrl(`Hola, quiero contratar el plan ${plan.name} de crear.chat`)}
                  className="mt-6 w-full"
                >
                  Elegir plan
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">{PLANS_NOTE}</p>
        </div>
      </section>

      {/* Matriz de funcionalidades */}
      <Section id="comparar">
        <SectionHeader
          eyebrow="Comparar planes"
          title="Funcionalidades incluidas en cada plan"
          intro="Esta es la misma matriz de funcionalidades que ves dentro de la plataforma."
        />
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <caption className="sr-only">Comparación de funcionalidades por plan de crear.chat</caption>
            <thead>
              <tr className="bg-slate-50">
                <th scope="col" className="sticky left-0 bg-slate-50 px-4 py-4 text-left font-semibold text-ink">
                  Funcionalidad
                </th>
                {PLANS.map((plan) => (
                  <th key={plan.id} scope="col" className="px-4 py-4 text-center">
                    <span className="block font-display text-base text-ink">{plan.name}</span>
                    <span className="block text-xs font-normal text-ink-muted">{formatCop(plan.price)}/mes</span>
                  </th>
                ))}
              </tr>
            </thead>
            {PLAN_MATRIX.map((group) => (
              <tbody key={group.title}>
                <tr>
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="border-t border-slate-200 bg-brand-50/60 px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-brand-700"
                  >
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <th scope="row" className="sticky left-0 bg-white px-4 py-3 text-left font-medium text-ink">
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td key={PLANS[i].id} className="px-4 py-3 text-center">
                        <Cell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">{PLANS_NOTE}</p>
      </Section>

      {/* Crea tu plan */}
      <Section tone="soft" id="crea-tu-plan">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <SlidersHorizontal className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight text-ink">Crea tu plan a la medida</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Si ningún plan se ajusta exactamente a tu operación, parte de una base y agrega solo lo que necesitas. El
              precio se actualiza según lo que elijas.
            </p>
            <p className="mt-6">
              <span className="text-ink-muted">Desde </span>
              <span className="font-display text-3xl text-ink">{formatCop(CUSTOM_PLAN.basePrice)}</span>
              <span className="text-ink-muted"> COP/mes + IVA</span>
            </p>
            <h3 className="mt-6 font-display text-lg text-ink">La base incluye</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-ink-muted sm:grid-cols-2">
              {CUSTOM_PLAN.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cta-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={whatsappUrl("Hola, quiero armar un plan a la medida en crear.chat")}
              variant="cta"
              size="lg"
              className="mt-8"
            >
              Armar mi plan con un asesor
            </ButtonLink>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h3 className="font-display text-lg text-ink">Puedes agregar</h3>
            <dl className="mt-4 divide-y divide-slate-100">
              {CUSTOM_PLAN.addOns.map((addOn) => (
                <div key={addOn.group} className="grid gap-1 py-3 sm:grid-cols-[140px_1fr]">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-brand-700">{addOn.group}</dt>
                  <dd className="text-ink">{addOn.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Preguntas frecuentes */}
      <Section>
        <SectionHeader eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan sobre los planes" />
        <Faq items={FAQS} />
      </Section>

      <CtaBanner
        title="¿No sabes qué plan elegir?"
        text="Cuéntanos cómo atiende tu empresa a sus clientes y te recomendamos el plan que se ajusta a tu operación."
        primary={{ label: "Solicitar orientación", href: CTA.advisory.href }}
        secondary={{ label: "Contactar a un asesor", href: CTA.advisor.href }}
      />
    </PageLayout>
  );
}
