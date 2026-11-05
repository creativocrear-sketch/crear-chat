/**
 * Entrada de servidor usada solo al compilar (scripts/prerender.mjs):
 * genera el HTML de cada página, el sitemap y llms.txt a partir de los datos del sitio.
 */
import { renderToString } from "react-dom/server";
import App from "./App";
import { COMPANY, CONTACT, SITE_URL } from "./lib/site";
import { PLANS, CUSTOM_PLAN, formatCop } from "./lib/plans";
import { MODULE_PAGES, INTEGRATIONS_PAGE } from "./content/modulos";
import { BLOG_POSTS } from "./lib/blog";

export function render(url: string) {
  return renderToString(<App ssrPath={url} />);
}

const ALCALDIAS_PAGES = [
  "/alcaldias/guia-turistica-whatsapp",
  "/alcaldias/consulta-deudas-whatsapp",
  "/alcaldias/plataforma-educativa-whatsapp",
  "/alcaldias/consulta-sisben-subsidios",
  "/alcaldias/consulta-turnos-agentes-transito",
];

type SitemapEntry = { path: string; priority: number; changefreq: string; lastmod?: string };

/** Páginas públicas que se pre-renderizan e incluyen en el sitemap. */
export const PAGES: SitemapEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/plataforma", priority: 0.9, changefreq: "monthly" },
  { path: "/modulos", priority: 0.9, changefreq: "monthly" },
  ...Object.values(MODULE_PAGES).map((page) => ({ path: page.path, priority: 0.8, changefreq: "monthly" })),
  { path: INTEGRATIONS_PAGE.path, priority: 0.8, changefreq: "monthly" },
  { path: "/consultoria", priority: 0.9, changefreq: "monthly" },
  { path: "/planes", priority: 0.9, changefreq: "monthly" },
  { path: "/contacto", priority: 0.7, changefreq: "yearly" },
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  ...BLOG_POSTS.map((post) => ({ path: `/blog/${post.slug}`, priority: 0.7, changefreq: "monthly", lastmod: post.date })),
  { path: "/alcaldias", priority: 0.7, changefreq: "monthly" },
  ...ALCALDIAS_PAGES.map((path) => ({ path, priority: 0.6, changefreq: "monthly" })),
  { path: "/Politica-De-Privacidad", priority: 0.3, changefreq: "yearly" },
];

export function sitemapXml(buildDate: string) {
  const urls = PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path === "/" ? "/" : page.path}</loc>
    <lastmod>${page.lastmod ?? buildDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

/** Resumen del sitio para asistentes de IA (formato llms.txt). */
export function llmsTxt() {
  const modules = [...Object.values(MODULE_PAGES), INTEGRATIONS_PAGE];
  return `# crear.chat

> crear.chat es una plataforma colombiana para gestionar conversaciones, clientes y procesos comerciales con WhatsApp Business API, CRM, inteligencia artificial y automatización. La ofrece ${COMPANY.legalName}, empresa colombiana con trayectoria desde ${COMPANY.foundingYear} en soluciones tecnológicas y comunicaciones empresariales, que además presta servicios de consultoría, implementación y capacitación.

- Empresa: ${COMPANY.legalName} (${CONTACT.city}, Colombia), desde ${COMPANY.foundingYear}.
- Canales: WhatsApp Business API, Instagram y Facebook Messenger.
- Contacto: WhatsApp ${CONTACT.phoneDisplay}, ${CONTACT.email}, [formulario de contacto](${SITE_URL}/contacto).

## Plataforma

- [Qué es crear.chat](${SITE_URL}/plataforma): capacidades de la plataforma y cómo funciona.
- [Módulos y funcionalidades](${SITE_URL}/modulos): directorio con la disponibilidad de cada funcionalidad por plan.
${modules.map((page) => `- [${page.name}](${SITE_URL}${page.path}): ${page.seo.description}`).join("\n")}

## Planes y precios

Precios mensuales en pesos colombianos (COP), sin IVA, con facturación mensual. En el plan Inicio se elige un canal entre WhatsApp Business API, Instagram y Facebook Messenger; los demás planes incluyen los tres.

${PLANS.map(
  (plan) =>
    `- ${plan.name}: ${formatCop(plan.price)} COP/mes. ${plan.contacts.toLocaleString("es-CO")} contactos, ${plan.humanAgents} agentes humanos, ${plan.channels}, ${lowerFirst(plan.chatbotFlows)}, ${lowerFirst(plan.aiResponses)}.`,
).join("\n")}
- Plan a la medida ("Crea tu plan"): desde ${formatCop(CUSTOM_PLAN.basePrice)} COP/mes.
- [Comparación completa de planes](${SITE_URL}/planes)

## Consultoría

- [Consultoría en WhatsApp Business API, CRM, IA y automatización](${SITE_URL}/consultoria): diagnóstico de comunicación, diseño de flujos automatizados, integraciones, segmentación, implementación, capacitación, y medición y optimización.
- [Soluciones para alcaldías](${SITE_URL}/alcaldias)

## Blog

${BLOG_POSTS.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`).join("\n")}
`;
}
