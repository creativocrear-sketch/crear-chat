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
  logoUrl: "/logo-crear-chat-96.webp",
  logoUrl2x: "/logo-crear-chat-192.webp",
  /** Versión grande para datos estructurados y redes sociales. */
  logoLarge: "/logo-crear-chat.png",
};

export const CONTACT = {
  whatsappNumber: "573105317126",
  phoneDisplay: "+57 310 531 7126",
  /** Número de WhatsApp de crear.chat; recibe las solicitudes del formulario de contacto. */
  crearChatWhatsappNumber: "573229540294",
  crearChatPhoneDisplay: "+57 322 954 0294",
  email: "contacto@crearcomunicaciones.net",
  address: "Cra. 4 #9-73, oficina 306",
  city: "Cartago, Valle del Cauca",
  hours: "Lunes a viernes, 9 a. m. a 6 p. m.",
  facebook: "https://facebook.com/crearcomunicaciones",
  instagram: "https://instagram.com/crear.chat",
};

export function whatsappUrl(message?: string, number: string = CONTACT.whatsappNumber) {
  const base = `https://wa.me/${number}`;
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
