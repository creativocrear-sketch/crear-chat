import { Link } from "wouter";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "cta" | "outline" | "light" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
  cta: "bg-cta-600 text-white hover:bg-cta-700 shadow-sm",
  outline: "border border-brand-200 bg-white text-brand-700 hover:border-brand-600 hover:bg-brand-50",
  light: "bg-white text-brand-800 hover:bg-brand-50 shadow-sm",
  ghost: "text-brand-700 hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
};

/** Botón con forma de enlace. Los enlaces externos (WhatsApp, redes) abren en otra pestaña. */
export default function ButtonLink({ href, children, variant = "primary", size = "md", className, onClick }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
