import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY, CONTACT, CTA, MODULE_LINKS, whatsappUrl } from "@/lib/site";
import ButtonLink from "@/components/site/ButtonLink";
import Logo from "@/components/site/Logo";

const COMPANY_LINKS = [
  { label: "Consultoría y soluciones", href: "/consultoria" },
  { label: "Planes y precios", href: "/planes" },
  { label: "Soluciones para alcaldías", href: "/alcaldias" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de privacidad", href: "/Politica-De-Privacidad" },
];

/** Pie de página: identifica a crear.chat como plataforma y a Crear Comunicaciones como empresa proveedora. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-sm leading-relaxed">
            <strong className="text-white">crear.chat</strong> es la plataforma de WhatsApp Business API, CRM e inteligencia
            artificial de <strong className="text-white">{COMPANY.legalName}</strong>, empresa colombiana con trayectoria
            desde {COMPANY.foundingYear} en soluciones de comunicación empresarial.
          </p>
          <ButtonLink href={CTA.advisory.href} variant="cta" className="mt-6">
            {CTA.advisory.label}
          </ButtonLink>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Plataforma</h2>
          <ul className="space-y-2.5">
            <li>
              <Link href="/plataforma" className="hover:text-white">
                Qué es crear.chat
              </Link>
            </li>
            <li>
              <Link href="/modulos" className="hover:text-white">
                Módulos y funcionalidades
              </Link>
            </li>
            {MODULE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Crear Comunicaciones</h2>
          <ul className="space-y-2.5">
            {COMPANY_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Contacto</h2>
          <ul className="space-y-3">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>
                  WhatsApp {CONTACT.phoneDisplay}
                  <span className="block text-sm text-brand-200">{CONTACT.hours}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex gap-3 break-all text-sm hover:text-white">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span>
                {CONTACT.address}
                <span className="block">{CONTACT.city}, Colombia</span>
              </span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Crear Comunicaciones"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de crear.chat"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-sm text-brand-200 md:flex-row md:justify-between">
          <p>
            © {year} {COMPANY.legalName}. Todos los derechos reservados.
          </p>
          <p>crear.chat · WhatsApp Business API, CRM e inteligencia artificial para empresas en Colombia</p>
        </div>
      </div>
    </footer>
  );
}
