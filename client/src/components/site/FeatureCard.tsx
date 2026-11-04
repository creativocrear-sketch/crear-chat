import { Link } from "wouter";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  href?: string;
  linkLabel?: string;
  /** Etiqueta pequeña sobre el título, por ejemplo "Desde plan Crecimiento". */
  badge?: string;
  className?: string;
};

/** Tarjeta de funcionalidad o servicio. Si tiene href, el título y el enlace llevan a la página interior. */
export default function FeatureCard({ icon: Icon, title, children, href, linkLabel = "Conocer más", badge, className }: Props) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200",
        href && "hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5",
        className,
      )}
    >
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
      {badge && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-cta-700">{badge}</p>}
      <h3 className="font-display text-lg leading-snug text-ink">
        {href ? (
          <Link href={href} className="after:absolute after:inset-0 after:rounded-2xl">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <div className="mt-2 flex-1 leading-relaxed text-ink-muted">{children}</div>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      )}
    </article>
  );
}
