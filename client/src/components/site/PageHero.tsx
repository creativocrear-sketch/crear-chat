import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  /** Contenido opcional a la derecha (imagen, tarjeta, lista). */
  aside?: ReactNode;
  breadcrumbs?: Crumb[];
};

/** Encabezado de las páginas interiores. Contiene el único h1 de la página. */
export default function PageHero({ eyebrow, title, intro, actions, aside, breadcrumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgb(219 231 255 / 0.9), transparent)" }}
      />
      <div className="container relative py-12 md:py-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-6" />}
        <div className={aside ? "grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]" : "max-w-3xl"}>
          <div>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">{title}</h1>
            {intro && <div className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">{intro}</div>}
            {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      </div>
    </section>
  );
}
