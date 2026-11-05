import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { CTA } from "@/lib/site";

const LINKS: Record<string, { label: string; href: string }[]> = {
  "diferencia-whatsapp-business-api": [
    { label: "WhatsApp Business API en crear.chat", href: "/modulos/whatsapp-business-api" },
    { label: "Planes y precios", href: "/planes" },
  ],
  "casos-uso-whatsapp-business-api": [
    { label: "Módulos y funcionalidades", href: "/modulos" },
    { label: "Automatización y chatbots", href: "/modulos/automatizacion-chatbot" },
  ],
  "primeros-pasos-migrar-whatsapp-api": [
    { label: "WhatsApp Business API en crear.chat", href: "/modulos/whatsapp-business-api" },
    { label: "Consultoría e implementación", href: "/consultoria" },
  ],
  "beneficios-whatsapp-business-api-ia": [
    { label: "Inteligencia artificial en crear.chat", href: "/modulos/inteligencia-artificial" },
    { label: "Automatización y chatbots", href: "/modulos/automatizacion-chatbot" },
  ],
  "plataformas-integracion-whatsapp-api": [
    { label: "Integraciones de crear.chat", href: "/integraciones" },
    { label: "CRM y gestión de clientes", href: "/modulos/crm" },
  ],
  "por-que-necesito-plataforma-whatsapp": [
    { label: "Qué es crear.chat", href: "/plataforma" },
    { label: "Módulos y funcionalidades", href: "/modulos" },
  ],
  "diferencias-plataformas-whatsapp": [
    { label: "Qué es crear.chat", href: "/plataforma" },
    { label: "Planes y precios", href: "/planes" },
  ],
  "cobro-plataformas-whatsapp": [
    { label: "Planes y precios de crear.chat", href: "/planes" },
    { label: "Comparar planes", href: "/planes#comparar" },
  ],
  "como-seleccionar-proveedor-whatsapp": [
    { label: "Qué es crear.chat", href: "/plataforma" },
    { label: "Consultoría para elegir tu solución", href: "/consultoria" },
  ],
  "politicas-whatsapp-business-api": [
    { label: "WhatsApp Business API en crear.chat", href: "/modulos/whatsapp-business-api" },
    { label: "Consultoría en WhatsApp Business API", href: "/consultoria" },
  ],
  "por-que-restringen-whatsapp": [
    { label: "Consultoría en WhatsApp Business API", href: "/consultoria" },
    { label: "WhatsApp Business API en crear.chat", href: "/modulos/whatsapp-business-api" },
  ],
};

/** Bloque al final de cada artículo que conecta el tema con la plataforma y la consultoría. */
export default function ArticleRelated({ slug }: { slug: string }) {
  const links = LINKS[slug] ?? [{ label: "Qué es crear.chat", href: "/plataforma" }];
  return (
    <section className="py-12">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-brand-50 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
          <div>
            <p className="eyebrow">crear.chat + Crear Comunicaciones</p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
              Te damos la tecnología y te acompañamos para descubrir cómo aprovecharla
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              crear.chat integra WhatsApp Business API, CRM, inteligencia artificial y automatización. Nuestro equipo te
              ayuda a llevar lo que leíste a la operación de tu empresa.
            </p>
            <ButtonLink href={CTA.advisory.href} variant="cta" className="mt-6">
              {CTA.advisory.label}
            </ButtonLink>
          </div>
          <nav aria-label="Páginas relacionadas" className="self-center">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-3 rounded-xl border border-brand-100 bg-white px-4 py-3 font-medium text-ink hover:border-brand-200 hover:text-brand-700"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
