import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

/** Botón flotante de WhatsApp, visible en todas las páginas. */
export default function WhatsAppButton() {
  return (
    <aside aria-label="Contacto rápido">
      <a
        href={whatsappUrl("Hola, quiero información sobre crear.chat")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-cta-600 text-white shadow-lg shadow-cta-700/30 transition-transform hover:scale-105 hover:bg-cta-700"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </aside>
  );
}
