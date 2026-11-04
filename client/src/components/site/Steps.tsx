import { cn } from "@/lib/utils";

export type Step = { title: string; description?: string };

/** Pasos numerados (metodología, cómo funciona). Se adapta de 1 a 3 columnas según la pantalla. */
export default function Steps({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        steps.length % 3 === 0 ? "lg:grid-cols-3" : steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
        className,
      )}
    >
      {steps.map((step, i) => (
        <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
          <span
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-white"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 className="font-display text-lg leading-snug text-ink">{step.title}</h3>
          {step.description && <p className="mt-2 leading-relaxed text-ink-muted">{step.description}</p>}
        </li>
      ))}
    </ol>
  );
}
