import type { ReactNode } from "react";
import ButtonLink from "./ButtonLink";
import { CTA } from "@/lib/site";

type Action = { label: string; href: string };

type Props = {
  title: ReactNode;
  text?: ReactNode;
  primary?: Action;
  secondary?: Action;
};

/** Llamado a la acción de cierre de página. Por defecto invita a la asesoría y a hablar con un asesor. */
export default function CtaBanner({ title, text, primary = CTA.advisory, secondary = CTA.advisor }: Props) {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-12 text-center md:px-16 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgb(21 83 182 / 0.6), transparent)" }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">{title}</h2>
            {text && <p className="mt-4 text-lg leading-relaxed text-brand-100">{text}</p>}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={primary.href} variant="cta" size="lg">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="light" size="lg">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
