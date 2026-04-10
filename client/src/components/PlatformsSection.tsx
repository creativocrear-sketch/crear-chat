import { Card } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, Clock, Calendar, DollarSign, Heart } from "lucide-react";

/**
 * Platforms Section - Nuestras plataformas con WhatsApp Business API
 * - Grid de 3 columnas para plataformas específicas
 * - Iconos grandes y centrados
 * - Diseño consistente con el resto del sitio
 */

const platforms = [
  {
    title: "Gestión de ventas",
    description: "Centraliza y gestiona tus oportunidades de venta desde WhatsApp en un solo lugar. Haz seguimiento a cada cliente, controla el proceso comercial y mejora el cierre de ventas con mayor orden y visibilidad.",
    icon: TrendingUp,
  },
  {
    title: "Gestión de pedidos",
    description: "Recibe y organiza todos tus pedidos directamente por WhatsApp en un solo lugar. Será un seguimiento para inventario, producción, entrega y facturación.",
    icon: ShoppingCart,
  },
  {
    title: "Gestión de turnos de trabajo",
    description: "Organiza los turnos de tu equipo de manera automática y eficiente evitando confusiones. Olvídate de agendas dispersas y mantén a todos informados al instante a través de WhatsApp.",
    icon: Clock,
  },
  {
    title: "Gestión de citas médicas",
    description: "Permite que tus pacientes agenden, modifiquen o cancelen citas en segundos, mientras reciben recordatorios automáticos que reducen ausencias. Todo el control está en WhatsApp, de manera sencilla y confiable.",
    icon: Calendar,
  },
  {
    title: "Consultas de saldos y deudas",
    description: "Permite que tus clientes consulten sus saldos y deudas al instante, directamente desde WhatsApp. Mantén la información siempre accesible y actualizada, mejorando la comunicación y la transparencia.",
    icon: DollarSign,
  },
  {
    title: "Fidelización de clientes",
    description: "Permite que tus clientes acumulen puntos dependiendo de las compras que hayan hecho. Gestiona premios, descuentos y bonificaciones para impulsar la recompra y nuevas ventas.",
    icon: Heart,
  }
];

export default function PlatformsSection() {
  return (
    <section id="nuestras-plataformas" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Nuestras plataformas con WhatsApp Business API
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones especializadas para casos de uso específicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all duration-300 border border-gray-100 bg-white h-full cursor-pointer animate-fade-in-up"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#1B4F72]" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-base md:text-lg text-gray-900 text-center mb-4">
                    {platform.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center flex-grow text-sm md:text-base">
                    {platform.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
