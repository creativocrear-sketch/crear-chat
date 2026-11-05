/**
 * Artículos del blog. Cada artículo tiene su propia página en client/src/pages/BlogArticleN.tsx;
 * aquí están los datos para el índice, las categorías y el sitemap.
 */

export const BLOG_CATEGORIES = [
  "WhatsApp Business API",
  "CRM",
  "Automatización",
  "Inteligencia artificial",
  "Chatbots",
  "Ventas y atención al cliente",
  "Casos de uso empresariales",
  "Integraciones",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** Fecha de publicación en formato ISO (AAAA-MM-DD). */
  date: string;
  readTime: string;
  /** Autor que aparece en el artículo; por defecto, BLOG_AUTHOR. */
  author: string;
};

export const BLOG_AUTHOR = "Alex Murillo";
const TEAM_AUTHOR = "Equipo de Crear Comunicaciones";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-crm-whatsapp",
    title: "¿Qué es un CRM con WhatsApp y por qué lo necesita tu empresa?",
    excerpt:
      "Qué es un CRM conectado a WhatsApp, qué funciones debe tener, señales de que tu empresa lo necesita y cómo implementarlo paso a paso.",
    category: "CRM",
    date: "2026-11-05",
    author: TEAM_AUTHOR,
    readTime: "5 min",
  },
  {
    slug: "automatizar-atencion-whatsapp",
    title: "¿Qué puede automatizar tu empresa en la atención por WhatsApp?",
    excerpt:
      "Las tareas de atención por WhatsApp que conviene automatizar, las que es mejor dejar a personas y cómo empezar respetando las políticas de WhatsApp.",
    category: "Automatización",
    date: "2026-11-05",
    author: TEAM_AUTHOR,
    readTime: "5 min",
  },
  {
    slug: "chatbot-o-agente-ia-whatsapp",
    title: "Chatbot o agente de IA para WhatsApp: ¿cuál necesita tu empresa?",
    excerpt:
      "Diferencias entre un chatbot de flujos y un agente de inteligencia artificial, cuándo conviene cada uno y cómo combinarlos con tu equipo.",
    category: "Chatbots",
    date: "2026-11-05",
    author: TEAM_AUTHOR,
    readTime: "5 min",
  },
  {
    slug: "diferencia-whatsapp-business-api",
    title: "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?",
    excerpt:
      "Las diferencias clave entre la aplicación WhatsApp Business y WhatsApp Business API, y cuál conviene según el tamaño y las necesidades de tu negocio.",
    category: "WhatsApp Business API",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "5 min",
  },
  {
    slug: "casos-uso-whatsapp-business-api",
    title: "¿Para qué me sirve WhatsApp Business API en mi negocio?",
    excerpt:
      "Casos de uso de WhatsApp Business API en restaurantes, hoteles, cafés, firmas de abogados y oficinas de cobranza.",
    category: "Casos de uso empresariales",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "8 min",
  },
  {
    slug: "primeros-pasos-migrar-whatsapp-api",
    title: "¿Cuáles son los primeros pasos para migrar a WhatsApp Business API?",
    excerpt: "Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.",
    category: "WhatsApp Business API",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "7 min",
  },
  {
    slug: "beneficios-whatsapp-business-api-ia",
    title: "¿Qué beneficios tengo usando WhatsApp Business API con inteligencia artificial?",
    excerpt: "Cómo la combinación de WhatsApp Business API e inteligencia artificial cambia la atención al cliente.",
    category: "Inteligencia artificial",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "6 min",
  },
  {
    slug: "plataformas-integracion-whatsapp-api",
    title: "¿Con qué plataformas puedo integrar WhatsApp Business API?",
    excerpt: "Las plataformas y sistemas que se pueden integrar con WhatsApp Business API y para qué sirve cada integración.",
    category: "Integraciones",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "6 min",
  },
  {
    slug: "por-que-necesito-plataforma-whatsapp",
    title: "¿Por qué necesito una plataforma para administrar los chats de WhatsApp?",
    excerpt: "Por qué la API de WhatsApp sola no resuelve la operación y qué aporta una plataforma de gestión.",
    category: "Ventas y atención al cliente",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "5 min",
  },
  {
    slug: "diferencias-plataformas-whatsapp",
    title: "¿En qué se diferencian las plataformas que administran los chats de WhatsApp?",
    excerpt: "Comparativa de las principales plataformas de gestión de WhatsApp según el tipo de empresa.",
    category: "Ventas y atención al cliente",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "7 min",
  },
  {
    slug: "cobro-plataformas-whatsapp",
    title: "¿Cómo cobran las plataformas de chats de WhatsApp?",
    excerpt: "Los modelos de cobro de las plataformas de WhatsApp Business API y qué considerar para calcular tu costo real.",
    category: "WhatsApp Business API",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "6 min",
  },
  {
    slug: "como-seleccionar-proveedor-whatsapp",
    title: "¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y su plataforma?",
    excerpt: "Criterios para elegir el proveedor y la plataforma de WhatsApp Business API adecuados para tu negocio.",
    category: "WhatsApp Business API",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "7 min",
  },
  {
    slug: "politicas-whatsapp-business-api",
    title: "¿Cuáles son las principales políticas de WhatsApp Business API?",
    excerpt: "Las reglas y políticas que debes cumplir para usar WhatsApp Business API sin poner en riesgo tu número.",
    category: "WhatsApp Business API",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "6 min",
  },
  {
    slug: "por-que-restringen-whatsapp",
    title: "¿Por qué me pueden restringir el número de WhatsApp?",
    excerpt: "Las razones por las que WhatsApp restringe o suspende números y cómo evitarlo.",
    category: "WhatsApp Business API",
    date: "2026-03-21",
    author: BLOG_AUTHOR,
    readTime: "5 min",
  },
];

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
}
