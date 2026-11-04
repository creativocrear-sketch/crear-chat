/**
 * Datos centrales del sitio: empresa, contacto y navegación.
 * Cualquier cambio de teléfono, correo, logo o menú se hace solo aquí.
 */

export const SITE_URL = "https://crear.chat";

export const COMPANY = {
  platformName: "crear.chat",
  legalName: "Crear Comunicaciones",
  foundingYear: 1993,
  country: "Colombia",
  // Logo temporal: sigue alojado en el CDN anterior hasta recibir el archivo definitivo.
  logoUrl:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/dSwJK3W4FW3am7RcRumTG2/Diseñosintítulo(19)_2a52744b.png",
};

export const CONTACT = {
  whatsappNumber: "573105317126",
  phoneDisplay: "+57 310 531 7126",
  email: "contacto@crearcomunicaciones.net",
  address: "Cra. 4 #9-73, oficina 306",
  city: "Cartago, Valle del Cauca",
  hours: "Lunes a viernes, 9:00 a. m. a 6:00 p. m.",
  facebook: "https://facebook.com/crearcomunicaciones",
  instagram: "https://instagram.com/crear.chat",
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type NavLink = { label: string; href: string; description?: string };

/** Páginas de módulos, en el orden en que aparecen en menús y tarjetas. */
export const MODULE_LINKS: NavLink[] = [
  {
    label: "WhatsApp Business API",
    href: "/modulos/whatsapp-business-api",
    description: "Atención y comunicación por la API oficial",
  },
  {
    label: "CRM y gestión de clientes",
    href: "/modulos/crm",
    description: "Contactos, etiquetas y seguimiento comercial",
  },
  {
    label: "Inteligencia artificial",
    href: "/modulos/inteligencia-artificial",
    description: "Agentes y asistente de IA",
  },
  {
    label: "Catálogo e inventario",
    href: "/modulos/catalogo-inventario",
    description: "Productos organizados y listos para vender",
  },
  {
    label: "Automatización y chatbots",
    href: "/modulos/automatizacion-chatbot",
    description: "Flujos que ordenan cada conversación",
  },
  {
    label: "Reportes y analítica",
    href: "/modulos/reportes-analitica",
    description: "Seguimiento de la actividad",
  },
  {
    label: "Integraciones",
    href: "/integraciones",
    description: "Google Sheets, Zapier, Make, Slack y webhooks",
  },
];

export const MAIN_NAV: NavLink[] = [
  { label: "Consultoría", href: "/consultoria" },
  { label: "Planes", href: "/planes" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const CTA = {
  advisory: { label: "Solicitar asesoría", href: "/contacto?motivo=asesoria" },
  demo: { label: "Solicitar demostración", href: "/contacto?motivo=demostracion" },
  advisor: { label: "Hablar con un asesor", href: whatsappUrl("Hola, quiero hablar con un asesor de crear.chat") },
};
