import type { FaqItem } from "@/components/site/Faq";

export type ArticleSection = {
  /** Identificador para el índice del artículo (ancla). */
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Lista numerada (pasos). */
  steps?: string[];
  subsections?: { title: string; paragraphs: string[] }[];
  table?: { headers: string[]; rows: string[][] };
  /** Párrafos finales de la sección, después de listas o tablas. */
  closing?: string[];
};

/** Artículo del blog con el diseño nuevo (se publica en /blog/:slug). */
export type Article = {
  slug: string;
  seo: { title: string; description: string };
  title: string;
  /** Respuesta directa a la pregunta del título; aparece al inicio del artículo. */
  answer: string;
  intro: string[];
  sections: ArticleSection[];
  faqs: FaqItem[];
};
