import type { LucideIcon } from "lucide-react";
import type { FaqItem } from "@/components/site/Faq";
import type { Step } from "@/components/site/Steps";

/** Contenido de una página de sector (/sectores/:slug). */
export type SectorPageData = {
  slug: string;
  /** Nombre del sector en plural, para menús y tarjetas. Ej.: "Hoteles". */
  name: string;
  /** Nombre con artículo, para frases. Ej.: "los hoteles", "las IPS". */
  withArticle: string;
  /** Resumen de una línea para la página general de sectores. */
  summary: string;
  icon: LucideIcon;
  seo: { title: string; description: string };
  h1: string;
  intro: string[];
  /** Frase de confianza: con qué organizaciones del sector trabaja hoy Crear Comunicaciones. */
  trust: string;
  challenges: { title: string; paragraphs: string[]; items: string[] };
  /** Usos de crear.chat en el sector; cada uno indica los módulos que lo hacen posible. */
  useCases: { icon: LucideIcon; title: string; description: string; modules: { label: string; href: string }[] }[];
  /** Recorrido ilustrativo de una conversación típica del sector. */
  journey: { title: string; steps: Step[] };
  consulting: string[];
  faqs: FaqItem[];
  cta: { title: string; text: string };
};
