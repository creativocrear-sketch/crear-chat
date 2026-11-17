import { Landmark } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import FeatureCard from "@/components/site/FeatureCard";
import CtaBanner from "@/components/site/CtaBanner";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { COMPANY, CTA, SITE_URL } from "@/lib/site";
import { SECTORS } from "@/content/sectores";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Sectores", href: "/sectores" },
];

export default function Sectores() {
  return (
    <PageLayout>
      <Seo
        title="WhatsApp Business API por sector: hoteles, IPS, restaurantes | crear.chat"
        description="Cómo usan crear.chat las cámaras de comercio, hoteles, restaurantes, almacenes de bicicletas e IPS en Colombia: citas, pedidos, catálogo, campañas y atención 24/7."
        path="/sectores"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Sectores que atiende crear.chat",
            itemListElement: SECTORS.map((sector, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: sector.name,
              description: sector.summary,
              url: `${SITE_URL}/sectores/${sector.slug}`,
            })),
          },
          breadcrumbJsonLd(BREADCRUMBS),
        ]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Sectores"
        title="Soluciones de WhatsApp, CRM e IA para cada sector"
        intro={
          <p>
            {COMPANY.legalName} trabaja hoy con cámaras de comercio, hoteles, restaurantes, almacenes de bicicletas e IPS
            en Colombia. Conoce cómo cada sector usa crear.chat para atender, vender y hacer seguimiento a sus clientes.
          </p>
        }
      />

      <Section className="pt-4 md:pt-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <FeatureCard
              key={sector.slug}
              icon={sector.icon}
              title={sector.name}
              href={`/sectores/${sector.slug}`}
              linkLabel={`Ver solución para ${sector.withArticle}`}
            >
              {sector.summary}
            </FeatureCard>
          ))}
          <FeatureCard
            icon={Landmark}
            title="Alcaldías y entidades públicas"
            href="/alcaldias"
            linkLabel="Ver soluciones para alcaldías"
          >
            Guía turística, consulta de deudas, SISBÉN, plataforma educativa y turnos por WhatsApp.
          </FeatureCard>
        </div>
      </Section>

      <CtaBanner
        title="¿Tu sector no aparece en la lista?"
        text="Cuéntanos cómo atiende tu empresa a sus clientes y te ayudamos a descubrir cómo aplicar crear.chat a tu caso."
        primary={CTA.advisory}
        secondary={CTA.advisor}
      />
    </PageLayout>
  );
}
