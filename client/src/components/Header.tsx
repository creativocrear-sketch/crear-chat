import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, LayoutGrid, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA, MAIN_NAV, MODULE_LINKS } from "@/lib/site";
import ButtonLink from "@/components/site/ButtonLink";
import Logo from "@/components/site/Logo";

const PLATFORM_OVERVIEW = [
  { label: "Qué es crear.chat", href: "/plataforma", description: "La plataforma en un vistazo", icon: Sparkles },
  { label: "Todos los módulos", href: "/modulos", description: "Directorio de funcionalidades", icon: LayoutGrid },
];

/** Encabezado del sitio: logo, menú principal con Consultoría destacada y botón de asesoría. */
export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const platformRef = useRef<HTMLDivElement>(null);

  // Cierra los menús al cambiar de página.
  useEffect(() => {
    setMobileOpen(false);
    setPlatformOpen(false);
  }, [location]);

  // Cierra el submenú con Escape o al hacer clic fuera.
  useEffect(() => {
    if (!platformOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlatformOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!platformRef.current?.contains(e.target as Node)) setPlatformOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [platformOpen]);

  const isActive = (href: string) => location === href || location.startsWith(`${href}/`);
  const platformActive = ["/plataforma", "/modulos", "/integraciones"].some(isActive);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95">
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex flex-shrink-0 items-center">
          <Logo />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <div ref={platformRef} className="relative">
            <button
              type="button"
              aria-expanded={platformOpen}
              aria-controls="submenu-plataforma"
              onClick={() => setPlatformOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors hover:bg-slate-100",
                platformActive ? "text-brand-700" : "text-ink",
              )}
            >
              Plataforma
              <ChevronDown className={cn("h-4 w-4 transition-transform", platformOpen && "rotate-180")} aria-hidden="true" />
            </button>

            {platformOpen && (
              <div
                id="submenu-plataforma"
                className="absolute left-0 top-full mt-2 grid w-[640px] grid-cols-[220px_1fr] gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-brand-900/10"
              >
                <div className="rounded-xl bg-brand-50 p-2">
                  {PLATFORM_OVERVIEW.map(({ label, href, description, icon: Icon }) => (
                    <Link key={href} href={href} className="flex gap-3 rounded-lg p-3 hover:bg-white">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" aria-hidden="true" />
                      <span>
                        <span className="block font-semibold text-ink">{label}</span>
                        <span className="block text-sm text-ink-muted">{description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <ul className="grid grid-cols-1 gap-0.5">
                  {MODULE_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="block rounded-lg px-3 py-2 hover:bg-slate-50">
                        <span className="block text-[15px] font-medium text-ink">{item.label}</span>
                        <span className="block text-sm text-ink-muted">{item.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {MAIN_NAV.map((item) =>
            item.href === "/consultoria" ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors",
                  isActive(item.href) ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-[15px] font-medium transition-colors hover:bg-slate-100",
                  isActive(item.href) ? "text-brand-700" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={CTA.advisory.href} variant="cta">
            {CTA.advisory.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="menu-movil"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="rounded-lg p-2 text-ink hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="container space-y-6 py-6">
            <div>
              <p className="eyebrow mb-2">Plataforma</p>
              <ul className="space-y-1">
                {[...PLATFORM_OVERVIEW, ...MODULE_LINKS].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-slate-50">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-1 border-t border-slate-200 pt-6">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 font-semibold",
                      item.href === "/consultoria" ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-slate-50",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href={CTA.advisory.href} variant="cta" size="lg" className="w-full">
              {CTA.advisory.label}
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
