import type { LucideIcon } from "lucide-react";
import type { FaqItem } from "@/components/site/Faq";
import type { MatrixValue } from "@/lib/plans";
import type { Step } from "@/components/site/Steps";

/** Contenido de una página interior de módulo. La estructura sigue los apartados definidos para el sitio. */
export type ModulePageData = {
  /** Ruta pública, por ejemplo "/modulos/crm". */
  path: string;
  /** Nombre corto para migas de pan y enlaces. */
  name: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string[];
  /** Disponibilidad por plan (Inicio, Crecimiento, PRO, Elite), tomada de la matriz de la aplicación. */
  availability?: { label: string; values: [MatrixValue, MatrixValue, MatrixValue, MatrixValue] }[];
  availabilityNote?: string;
  problem: { title: string; paragraphs: string[]; pains: string[] };
  howItWorks: { title: string; intro?: string; steps: Step[] };
  features: { icon: LucideIcon; title: string; description: string; badge?: string }[];
  benefits: string[];
  examples: { sector: string; title: string; description: string }[];
  integration: { title: string; paragraphs: string[] };
  consulting: { title: string; paragraphs: string[] };
  faqs: FaqItem[];
  cta: { title: string; text: string };
  /** Rutas de módulos y artículos relacionados para enlaces internos. */
  related: { label: string; href: string }[];
};
