import { BedDouble, Bot, CreditCard, Hotel, Instagram, Send, UserCheck } from "lucide-react";
import type { SectorPageData } from "./types";
import { M } from "./modulos";

export const hoteles: SectorPageData = {
  slug: "hoteles",
  name: "Hoteles",
  withArticle: "los hoteles",
  summary: "Atención a huéspedes 24/7, cotizaciones, mensajes antes y después de la estadía.",
  icon: Hotel,
  seo: {
    title: "WhatsApp Business API para hoteles en Colombia | crear.chat",
    description:
      "Atiende a huéspedes por WhatsApp e Instagram las 24 horas con IA, organiza cotizaciones y envía mensajes antes y después de la estadía con crear.chat.",
  },
  h1: "WhatsApp Business API para hoteles",
  intro: [
    "Los huéspedes preguntan por disponibilidad, tarifas, servicios y cómo llegar a cualquier hora, por WhatsApp y por Instagram. Con crear.chat la recepción y el equipo comercial atienden desde un solo lugar, y la inteligencia artificial responde cuando no hay nadie disponible.",
  ],
  trust: "Crear Comunicaciones trabaja actualmente con hoteles en Colombia.",
  challenges: {
    title: "Huéspedes que escriben a toda hora",
    paragraphs: [
      "La recepción atiende a quienes están en el hotel, contesta el teléfono y además responde mensajes. Las consultas de reserva llegan de noche y en fines de semana, y si no reciben respuesta rápida el huésped reserva en otro lugar.",
      "Además, las mismas preguntas se repiten todos los días y las cotizaciones para grupos o eventos se pierden entre los chats.",
    ],
    items: [
      "Consultas de reserva sin respuesta fuera de horario",
      "Recepción saturada en horas pico",
      "Preguntas repetidas sobre check-in, parqueadero, desayuno o mascotas",
      "Mensajes de WhatsApp e Instagram en lugares distintos",
      "Cotizaciones de grupos y eventos sin seguimiento",
    ],
  },
  useCases: [
    {
      icon: Bot,
      title: "Atención a huéspedes 24/7",
      description:
        "El agente de IA responde preguntas frecuentes a cualquier hora, y los flujos de chatbot entregan la información básica del hotel en segundos.",
      modules: [M.ia, M.chatbot],
    },
    {
      icon: Instagram,
      title: "WhatsApp e Instagram en un solo lugar",
      description:
        "Las consultas de WhatsApp Business API, Instagram y Facebook Messenger llegan a la misma plataforma y se reparten entre recepción y ventas.",
      modules: [M.whatsapp],
    },
    {
      icon: UserCheck,
      title: "Seguimiento a cotizaciones",
      description:
        "Cada huésped o grupo queda registrado con su historial y etiquetas (cotización enviada, confirmada), para retomar el contacto a tiempo.",
      modules: [M.crm],
    },
    {
      icon: Send,
      title: "Mensajes antes y después de la estadía",
      description:
        "Con plantillas aprobadas por Meta puedes enviar indicaciones de llegada o, al finalizar, invitar al huésped a dejar su opinión.",
      modules: [M.campanas],
    },
    {
      icon: BedDouble,
      title: "Habitaciones y planes en un catálogo",
      description:
        "Publica tus tipos de habitación, planes y paquetes en una página de catálogo para compartirla durante la conversación.",
      modules: [M.catalogo],
    },
    {
      icon: CreditCard,
      title: "Cobro de anticipos",
      description: "Con el adicional de cobros por WhatsApp envías links de pago dentro de la conversación.",
      modules: [M.cobros],
    },
  ],
  journey: {
    title: "Una reserva que llega a medianoche",
    steps: [
      { title: "El viajero escribe", description: "Pregunta por disponibilidad para el fin de semana." },
      { title: "La IA responde", description: "Comparte el catálogo de habitaciones y resuelve dudas sobre servicios." },
      { title: "Queda registrado", description: "El contacto y su conversación se guardan con una etiqueta de cotización." },
      { title: "Recepción confirma", description: "En la mañana, un asesor retoma la conversación y cierra la reserva." },
    ],
  },
  consulting: [
    "Preparamos con el hotel la información que debe manejar la IA, los flujos de bienvenida y las plantillas de mensajes antes y después de la estadía.",
    "Si el hotel usa un sistema de reservas, evaluamos si puede conectarse mediante webhook, Zapier o Make.",
  ],
  faqs: [
    {
      question: "¿Un hotel puede atender por WhatsApp las 24 horas?",
      answer:
        "Sí. El agente de IA de crear.chat responde consultas a cualquier hora, y el equipo retoma las conversaciones que necesitan una persona.",
    },
    {
      question: "¿crear.chat se conecta con mi sistema de reservas?",
      answer:
        "No hay una integración directa con sistemas de reservas en la lista de integraciones. Según el sistema, puede conectarse mediante webhook, Zapier o Make (desde el plan PRO); lo evaluamos en la consultoría.",
    },
    {
      question: "¿Puedo atender también los mensajes de Instagram?",
      answer:
        "Sí. crear.chat reúne WhatsApp Business API, Instagram y Facebook Messenger. En el plan Inicio eliges uno de los tres canales; desde Crecimiento tienes los tres.",
    },
    {
      question: "¿Puedo enviar mensajes a los huéspedes antes de su llegada?",
      answer:
        "Sí, con plantillas aprobadas por Meta, disponibles desde el plan Crecimiento.",
    },
    {
      question: "¿Puedo cobrar anticipos por WhatsApp?",
      answer: "Sí, con el adicional Cobros por WhatsApp, que envía links de pago dentro de la conversación.",
    },
  ],
  cta: {
    title: "Que ningún huésped se quede sin respuesta",
    text: "Te mostramos cómo atendería crear.chat las consultas de tu hotel, de día y de noche.",
  },
};
