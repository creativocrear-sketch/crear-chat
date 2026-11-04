import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";

export type Crumb = { label: string; href: string };

/** Migas de pan visibles. Usa breadcrumbJsonLd() para sus datos estructurados. */
export default function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Ruta de navegación" className={cn("text-sm text-ink-muted", className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-brand-700">
                    {item.label}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
