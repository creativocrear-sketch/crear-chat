import { useEffect, useState, type FormEvent } from "react";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import Steps from "@/components/site/Steps";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { COMPANY, CONTACT, SITE_URL, whatsappUrl } from "@/lib/site";
import { PLANS } from "@/lib/plans";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Contacto", href: "/contacto" },
];

/** Motivos de consulta. La clave coincide con el parámetro ?motivo= de los botones del sitio. */
const REASONS = [
  { value: "asesoria", label: "Solicitar asesoría" },
  { value: "demostracion", label: "Solicitar una demostración" },
  { value: "planes", label: "Información sobre planes y precios" },
  { value: "consultoria", label: "Consultoría o solución a la medida" },
  { value: "otro", label: "Otro motivo" },
];

const PLAN_OPTIONS = ["Aún no lo sé", ...PLANS.map((plan) => plan.name), "Plan a la medida"];

const NEXT_STEPS = [
  { title: "Envías tu solicitud", description: "Se abre WhatsApp con tu mensaje listo para enviar." },
  { title: "Te responde un asesor", description: "Revisamos tu caso y conversamos sobre lo que necesitas." },
  { title: "Definimos el siguiente paso", description: "Una demostración, un diagnóstico o la elección de tu plan." },
];

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export default function Contacto() {
  const [reason, setReason] = useState("asesoria");

  // Los botones del sitio enlazan a /contacto?motivo=...; se aplica al cargar la página.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("motivo");
    if (fromUrl && REASONS.some((r) => r.value === fromUrl)) setReason(fromUrl);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const reasonLabel = REASONS.find((r) => r.value === reason)?.label ?? reason;

    const plan = value("plan") === PLAN_OPTIONS[0] ? "" : value("plan");
    const fields: [string, string][] = [
      ["Motivo", reasonLabel],
      ["Nombre", value("nombre")],
      ["Empresa", value("empresa")],
      ["Ciudad", value("ciudad")],
      ["Correo", value("correo")],
      ["Plan de interés", plan],
    ];
    const message = [
      "Hola, quiero contactar a crear.chat.",
      "",
      ...fields.filter(([, text]) => text).map(([label, text]) => `*${label}:* ${text}`),
      ...(value("mensaje") ? ["", value("mensaje")] : []),
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <PageLayout>
      <Seo
        title="Contacto: asesoría y demostración de crear.chat"
        description="Escríbenos para solicitar una asesoría, una demostración de crear.chat o información sobre planes. Atención por WhatsApp al +57 322 954 0294."
        path="/contacto"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto de crear.chat",
            url: `${SITE_URL}/contacto`,
            about: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: SITE_URL,
              email: CONTACT.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: CONTACT.address,
                addressLocality: "Cartago",
                addressRegion: "Valle del Cauca",
                addressCountry: "CO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: CONTACT.phoneDisplay,
                availableLanguage: "Spanish",
                areaServed: "CO",
              },
            },
          },
          breadcrumbJsonLd(BREADCRUMBS),
        ]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Contacto"
        title="Hablemos sobre la comunicación con tus clientes"
        intro={
          <p>
            Cuéntanos qué necesitas: una asesoría, una demostración de crear.chat o ayuda para elegir tu plan. Al enviar
            el formulario se abrirá WhatsApp con tu mensaje listo.
          </p>
        }
      />

      <Section className="pt-4 md:pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5 md:p-8"
          >
            <h2 className="font-display text-2xl text-ink">Envíanos tu solicitud</h2>
            <p className="mt-1 text-sm text-ink-muted">Los campos marcados con * son obligatorios.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="font-medium text-ink">Motivo de la consulta *</span>
                <select
                  name="motivo"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className={fieldClass}
                >
                  {REASONS.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className="font-medium text-ink">Nombre *</span>
                <input name="nombre" required autoComplete="name" className={fieldClass} placeholder="Tu nombre" />
              </label>
              <label>
                <span className="font-medium text-ink">Empresa</span>
                <input
                  name="empresa"
                  autoComplete="organization"
                  className={fieldClass}
                  placeholder="Nombre de tu empresa"
                />
              </label>
              <label>
                <span className="font-medium text-ink">Ciudad</span>
                <input name="ciudad" autoComplete="address-level2" className={fieldClass} placeholder="Ciudad" />
              </label>
              <label>
                <span className="font-medium text-ink">Correo electrónico</span>
                <input
                  name="correo"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="nombre@empresa.com"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="font-medium text-ink">Plan de interés</span>
                <select name="plan" defaultValue={PLAN_OPTIONS[0]} className={fieldClass}>
                  {PLAN_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="font-medium text-ink">Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={4}
                  className={fieldClass}
                  placeholder="Cuéntanos cómo atiendes hoy a tus clientes y qué te gustaría mejorar."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cta-600 px-6 font-semibold text-white transition-colors hover:bg-cta-700 sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Enviar por WhatsApp
            </button>
            <p className="mt-4 text-sm text-ink-muted">
              Al enviar se abre WhatsApp con tu mensaje para que lo envíes al {CONTACT.phoneDisplay}. Este sitio
              no guarda la información del formulario. Consulta nuestra{" "}
              <a href="/Politica-De-Privacidad" className="font-medium text-brand-600 hover:underline">
                política de privacidad
              </a>
              .
            </p>
          </form>

          {/* Datos de contacto */}
          <div className="space-y-4">
            <a
              href={whatsappUrl("Hola, quiero información sobre crear.chat")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:border-cta-600"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cta-50 text-cta-700">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-ink">WhatsApp de crear.chat</span>
                <span className="block text-ink-muted">{CONTACT.phoneDisplay}</span>
                <span className="block text-sm text-ink-muted">{CONTACT.hours}</span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:border-brand-200"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-ink">Correo electrónico</span>
                <span className="block break-all text-ink-muted">{CONTACT.email}</span>
              </span>
            </a>
            <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-ink">Oficina</span>
                <span className="block text-ink-muted">{CONTACT.address}</span>
                <span className="block text-ink-muted">{CONTACT.city}, Colombia</span>
              </span>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-ink hover:bg-slate-50"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-ink hover:bg-slate-50"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <h2 className="mb-8 text-center font-display text-3xl text-ink">¿Qué pasa después de escribirnos?</h2>
        <Steps steps={NEXT_STEPS} />
      </Section>
    </PageLayout>
  );
}
