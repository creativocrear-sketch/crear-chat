import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  tone?: "white" | "soft" | "brand";
  className?: string;
};

const tones = {
  white: "bg-white",
  soft: "bg-slate-50",
  brand: "bg-brand-900 text-white",
};

/** Bloque de página con el espaciado vertical estándar del sitio. */
export function Section({ id, children, tone = "white", className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** Nivel del encabezado; por defecto h2 (el h1 lo pone PageHero). */
  as?: "h1" | "h2";
  onDark?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, intro, align = "center", as = "h2", onDark, className }: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-3xl mb-10 md:mb-14", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-3", onDark && "text-brand-200")}>{eyebrow}</p>}
      <Heading
        className={cn(
          "font-display text-3xl md:text-4xl leading-tight tracking-tight",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <div className={cn("mt-4 text-lg leading-relaxed", onDark ? "text-brand-100" : "text-ink-muted")}>{intro}</div>
      )}
    </div>
  );
}
