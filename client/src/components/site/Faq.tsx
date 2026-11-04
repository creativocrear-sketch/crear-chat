import { Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

/**
 * Preguntas frecuentes. Usa <details> para que las respuestas estén en el HTML
 * aunque estén cerradas (los buscadores y asistentes de IA las leen).
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="faq-item group px-6">
          <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 text-left">
            <h3 className="font-display text-base leading-snug text-ink md:text-lg">{item.question}</h3>
            <Plus className="faq-icon mt-1 h-5 w-5 flex-shrink-0 text-brand-600 transition-transform" aria-hidden="true" />
          </summary>
          <p className="pb-5 leading-relaxed text-ink-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
