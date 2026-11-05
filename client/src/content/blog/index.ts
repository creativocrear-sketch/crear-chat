import { queEsCrmWhatsapp } from "./que-es-crm-whatsapp";
import { automatizarAtencionWhatsapp } from "./automatizar-atencion-whatsapp";
import { chatbotOAgenteIaWhatsapp } from "./chatbot-o-agente-ia-whatsapp";
import type { Article } from "./types";

/** Artículos con el diseño nuevo, publicados en /blog/:slug. */
export const ARTICLES: Record<string, Article> = Object.fromEntries(
  [queEsCrmWhatsapp, automatizarAtencionWhatsapp, chatbotOAgenteIaWhatsapp].map((article) => [article.slug, article]),
);
