import { Bot, Instagram, MessageCircle, Package, Sparkles, Tag } from "lucide-react";

/**
 * Ilustración de la bandeja de conversaciones de crear.chat.
 * Es decorativa (aria-hidden) y solo muestra funciones reales de la plataforma:
 * canales, etiquetas, asistente de IA y catálogo.
 */
export default function HeroMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-200/60 via-brand-50 to-cta-50 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-brand-900/15">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
              LM
            </span>
            <div>
              <p className="font-semibold text-ink">Laura Martínez</p>
              <p className="flex items-center gap-1 text-xs text-ink-muted">
                <MessageCircle className="h-3.5 w-3.5 text-cta-600" /> WhatsApp · Asignada a Ventas
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-cta-50 px-2.5 py-1 text-xs font-medium text-cta-700">
            <Tag className="h-3 w-3" /> Cliente nuevo
          </span>
        </div>

        <div className="space-y-3 bg-slate-50 px-5 py-5 text-sm">
          <p className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-ink shadow-sm">
            Hola, ¿tienen disponible la referencia que vi en el catálogo?
          </p>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-white shadow-sm">
            ¡Hola, Laura! Sí, la tenemos. Te comparto el producto:
            <div className="mt-2 flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2">
              <Package className="h-4 w-4" />
              <span className="text-xs">Producto del catálogo · Disponible</span>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-2xl border border-dashed border-brand-200 bg-brand-50 px-4 py-3">
            <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
            <p className="text-ink-muted">
              <span className="font-semibold text-brand-700">Asistente de IA:</span> sugerencia de respuesta lista para
              enviar.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-slate-100 px-5 py-3 text-xs text-ink-muted">
          <span className="font-medium">Canales:</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
            <MessageCircle className="h-3 w-3" /> WhatsApp
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
            <Instagram className="h-3 w-3" /> Instagram
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
            <Bot className="h-3 w-3" /> Flujos
          </span>
        </div>
      </div>
    </div>
  );
}
