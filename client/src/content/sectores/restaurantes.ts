import { CalendarDays, Clock, CreditCard, Megaphone, ShoppingBag, UtensilsCrossed } from "lucide-react";
import type { SectorPageData } from "./types";
import { M } from "./modulos";

export const restaurantes: SectorPageData = {
  slug: "restaurantes",
  name: "Restaurantes",
  withArticle: "los restaurantes",
  summary: "Menú en catálogo, pedidos a domicilio ordenados, reservas y promociones.",
  icon: UtensilsCrossed,
  seo: {
    title: "WhatsApp para restaurantes: pedidos, menú y reservas | crear.chat",
    description:
      "Recibe pedidos a domicilio por WhatsApp de forma ordenada, comparte tu menú en un catálogo, agenda reservas y envía promociones con crear.chat.",
  },
  h1: "WhatsApp para restaurantes: pedidos, menú y reservas",
  intro: [
    "En la hora del almuerzo o la noche del viernes, los pedidos por WhatsApp llegan todos al tiempo. Con crear.chat tu equipo atiende desde un mismo número, comparte el menú en un catálogo y mantiene cada pedido identificado hasta que sale a domicilio.",
  ],
  trust: "Crear Comunicaciones trabaja actualmente con restaurantes en Colombia.",
  challenges: {
    title: "Pedidos que se cruzan en las horas pico",
    paragraphs: [
      "Un solo celular para recibir pedidos, enviar el menú, confirmar direcciones y responder si hay mesa disponible. En las horas pico se pierden mensajes y los clientes esperan.",
      "Además, el restaurante tiene una base de clientes frecuentes a la que podría invitar a promociones, pero no la tiene organizada.",
    ],
    items: [
      "Pedidos perdidos o confundidos en las horas pico",
      "El menú se envía en fotos, una por una",
      "Las mismas preguntas sobre horarios, domicilios y ubicación",
      "Reservas anotadas en papel",
      "Clientes frecuentes sin promociones ni seguimiento",
    ],
  },
  useCases: [
    {
      icon: UtensilsCrossed,
      title: "Menú siempre al día",
      description:
        "Publica tus platos en el catálogo y comparte el enlace en cada conversación. Si algo se agota, se actualiza en un solo lugar.",
      modules: [M.catalogo],
    },
    {
      icon: ShoppingBag,
      title: "Pedidos a domicilio ordenados",
      description:
        "Varias personas atienden el mismo número, cada pedido se asigna a quien lo gestiona y las etiquetas indican su estado: nuevo, en preparación o enviado.",
      modules: [M.whatsapp, M.crm],
    },
    {
      icon: Clock,
      title: "Respuestas inmediatas",
      description:
        "Flujos de chatbot y el agente de IA responden horarios, zonas de domicilio y medios de pago, también cuando el local está cerrado.",
      modules: [M.chatbot, M.ia],
    },
    {
      icon: CalendarDays,
      title: "Reservas",
      description:
        "Con la agenda, publicas los horarios disponibles y registras las reservas; el agente de IA puede tomarlas durante la conversación.",
      modules: [M.agenda],
    },
    {
      icon: Megaphone,
      title: "Promociones a clientes frecuentes",
      description:
        "Difusiones con plantillas aprobadas por Meta para el menú del día, fechas especiales o lanzamientos, a clientes que aceptaron recibirlas.",
      modules: [M.campanas],
    },
    {
      icon: CreditCard,
      title: "Cobro en la conversación",
      description: "Con el adicional de cobros por WhatsApp envías el link de pago junto con la confirmación del pedido.",
      modules: [M.cobros],
    },
  ],
  journey: {
    title: "Un pedido a domicilio de principio a fin",
    steps: [
      { title: "El cliente saluda", description: "Un flujo de bienvenida le envía el enlace del menú." },
      { title: "Hace su pedido", description: "La conversación se asigna a quien gestiona domicilios." },
      { title: "Se confirma", description: "El asesor confirma dirección y total, y marca el pedido como «en preparación»." },
      { title: "Sale a domicilio", description: "La etiqueta cambia a «enviado» y el cliente queda en la base para próximas promociones." },
    ],
  },
  consulting: [
    "Organizamos contigo el catálogo del menú, los flujos de bienvenida y las etiquetas que reflejen tu proceso de pedidos.",
    "También te orientamos para hacer promociones por WhatsApp sin poner en riesgo tu número.",
  ],
  faqs: [
    {
      question: "¿Puedo recibir pedidos a domicilio por WhatsApp sin depender de aplicaciones de domicilios?",
      answer:
        "Sí. Con crear.chat recibes y organizas los pedidos directamente en tu WhatsApp, con varias personas atendiendo el mismo número.",
    },
    {
      question: "¿Cómo comparto el menú?",
      answer:
        "Con el catálogo, disponible desde el plan Crecimiento: tus platos quedan en una página que compartes con un enlace en la conversación.",
    },
    {
      question: "¿Se pueden tomar reservas por WhatsApp?",
      answer:
        "Sí, con la agenda: defines los horarios disponibles y las reservas quedan registradas, incluso si las toma el agente de IA.",
    },
    {
      question: "¿Puedo enviar promociones a mis clientes?",
      answer:
        "Sí, con difusiones y plantillas aprobadas por Meta, desde el plan Crecimiento, siempre a clientes que aceptaron recibir tus mensajes.",
    },
    {
      question: "¿Puedo cobrar los pedidos por WhatsApp?",
      answer: "Sí, con el adicional Cobros por WhatsApp, que envía links de pago dentro de la conversación.",
    },
  ],
  cta: {
    title: "Que los pedidos de la hora pico no se crucen",
    text: "Te mostramos cómo se organizarían los pedidos y reservas de tu restaurante en crear.chat.",
  },
};
