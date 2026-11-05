import { FileText, Headphones, Megaphone, MessagesSquare, Repeat, Shuffle, Tag, Zap, Bot } from "lucide-react";
import type { ModulePageData } from "./types";

export const whatsappBusinessApi: ModulePageData = {
  path: "/modulos/whatsapp-business-api",
  name: "WhatsApp Business API",
  seo: {
    title: "WhatsApp Business API para empresas en Colombia | crear.chat",
    description:
      "Atiende a tus clientes por la API oficial de WhatsApp con varios asesores, plantillas aprobadas por Meta, difusiones, respuestas rápidas e IA. Planes en pesos.",
  },
  eyebrow: "Módulo · Comunicación y atención",
  h1: "WhatsApp Business API para atender a tus clientes con todo tu equipo",
  intro: [
    "WhatsApp Business API es la conexión oficial de Meta para que las empresas atiendan por WhatsApp a escala. En crear.chat conectas el número de tu empresa y lo atienden varios asesores al mismo tiempo, con plantillas, difusiones, respuestas rápidas e inteligencia artificial.",
    "Además de WhatsApp, puedes atender Instagram y Facebook Messenger desde el mismo lugar.",
  ],
  availability: [
    { label: "Canales", values: ["1 a elegir", "Los 3", "Los 3", "Los 3"] },
    { label: "Agentes humanos", values: ["2", "5", "7", "10"] },
    { label: "Plantillas", values: [false, true, true, true] },
    { label: "Difusiones", values: [false, "20 al mes", "100 al mes", "Ilimitadas"] },
  ],
  availabilityNote: "Canales disponibles: WhatsApp Business API, Instagram y Facebook Messenger.",
  problem: {
    title: "Cuando WhatsApp depende de un solo celular",
    paragraphs: [
      "Muchas empresas atienden por la aplicación de WhatsApp en un teléfono que se pasan entre asesores, o en varios números personales. Funciona mientras los mensajes son pocos, pero cuando el negocio crece aparecen los problemas.",
      "La API oficial, conectada a una plataforma como crear.chat, permite que todo el equipo atienda el mismo número de forma ordenada, que nada dependa de un solo dispositivo y que la información de cada cliente quede guardada en la empresa.",
    ],
    pains: [
      "Mensajes que se pierden o se responden tarde",
      "Un solo celular para varios asesores",
      "Clientes que escriben a números personales de los vendedores",
      "Las mismas preguntas respondidas a mano todo el día",
      "Sin forma de escribirles a muchos clientes a la vez",
      "La información se va cuando un asesor se retira",
    ],
  },
  howItWorks: {
    title: "De un número de WhatsApp a un canal de atención profesional",
    steps: [
      { title: "Conectas tu número", description: "Vinculas el número de tu empresa a WhatsApp Business API en crear.chat." },
      { title: "Configuras tu equipo", description: "Creas los agentes humanos que atenderán según tu plan." },
      { title: "Llegan las conversaciones", description: "Los mensajes de tus clientes entran a crear.chat y se asignan a tu equipo." },
      { title: "Atienden personas e IA", description: "Asesores, flujos de chatbot y agentes de IA responden según cómo lo configures." },
      { title: "Escribes primero cuando lo necesitas", description: "Con plantillas y difusiones retomas el contacto con tus clientes." },
    ],
  },
  features: [
    {
      icon: MessagesSquare,
      title: "Conversaciones en un solo lugar",
      description: "WhatsApp, Instagram y Facebook Messenger se atienden desde la misma plataforma.",
      badge: "Todos los planes",
    },
    {
      icon: Headphones,
      title: "Varios agentes humanos",
      description: "Tu equipo atiende el mismo número al mismo tiempo: de 2 agentes en Inicio a 10 en Elite.",
      badge: "Todos los planes",
    },
    {
      icon: Shuffle,
      title: "Asignación de conversaciones",
      description: "Cada conversación se asigna a la persona que debe atenderla para que ningún cliente quede sin respuesta.",
      badge: "Todos los planes",
    },
    {
      icon: Zap,
      title: "Respuestas rápidas",
      description: "Atajos de texto para responder en segundos horarios, precios, ubicación o medios de pago.",
      badge: "Todos los planes",
    },
    {
      icon: FileText,
      title: "Plantillas aprobadas por Meta",
      description:
        "Mensajes preaprobados para iniciar conversaciones o escribir fuera de la ventana de atención que permite WhatsApp.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Megaphone,
      title: "Difusiones y campañas",
      description: "Envíos a listas de contactos para promociones, lanzamientos y recordatorios.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Tag,
      title: "Organización con etiquetas",
      description: "Clasifica las conversaciones con colores para priorizarlas y hacerles seguimiento.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Bot,
      title: "Agentes y asistente de IA",
      description: "La IA atiende consultas a cualquier hora y sugiere respuestas a tus asesores.",
      badge: "Todos los planes",
    },
    {
      icon: Repeat,
      title: "Remarketing",
      description: "Vuelve a escribirles de forma segmentada a los contactos de campañas anteriores.",
      badge: "Adicional",
    },
  ],
  benefits: [
    "Todo tu equipo atiende el mismo número sin compartir un celular",
    "Respondes más rápido con respuestas rápidas, chatbot e IA",
    "La información de cada cliente queda en la empresa, no en teléfonos personales",
    "Puedes escribirles primero a tus clientes con plantillas aprobadas",
    "Llegas a muchos clientes a la vez con difusiones",
    "Atiendes WhatsApp, Instagram y Messenger desde un solo lugar",
  ],
  examples: [
    {
      sector: "Comercio",
      title: "Una tienda que vende por WhatsApp",
      description:
        "Tres vendedores atienden el mismo número. Las consultas de precios se responden con respuestas rápidas y, cada mes, una difusión anuncia las novedades a los clientes registrados.",
    },
    {
      sector: "Restaurante",
      title: "Pedidos y reservas sin colapsar la línea",
      description:
        "En las horas pico, un flujo de chatbot da la bienvenida y muestra el menú; los pedidos se asignan a quien está en caja y el resto del equipo sigue atendiendo.",
    },
    {
      sector: "Hotel",
      title: "Atención a huéspedes antes y durante la estadía",
      description:
        "El agente de IA responde preguntas frecuentes a cualquier hora, y la recepción retoma la conversación cuando el huésped necesita algo especial.",
    },
    {
      sector: "Servicios",
      title: "Recordatorios a clientes",
      description:
        "Una empresa de servicios usa plantillas aprobadas para recordar vencimientos o visitas programadas, sin escribirle a cada cliente por separado.",
    },
  ],
  integration: {
    title: "El canal que conecta todos los módulos",
    paragraphs: [
      "WhatsApp Business API es la puerta de entrada: cada conversación alimenta el módulo de contactos (CRM), puede activar flujos de chatbot, recibir respuestas del agente de IA o mostrar productos del catálogo.",
      "Desde el plan PRO, las integraciones con Google Sheets, Zapier, Make, Slack o webhook permiten llevar la información de las conversaciones a otras herramientas de tu empresa.",
    ],
  },
  consulting: {
    title: "Te acompañamos para que WhatsApp se convierta en un canal de ventas y servicio",
    paragraphs: [
      "La configuración de la plataforma es un servicio opcional: preparamos los canales, los agentes y las respuestas para que tu equipo empiece a trabajar ordenado desde el primer día.",
      "Con la consultoría de Crear Comunicaciones definimos cómo debe fluir la atención, qué plantillas y campañas tiene sentido usar y cómo cumplir las políticas de WhatsApp para cuidar tu número.",
    ],
  },
  faqs: [
    {
      question: "¿Qué es WhatsApp Business API?",
      answer:
        "Es la forma oficial que ofrece Meta para que las empresas usen WhatsApp de manera profesional, conectando su número a una plataforma. Permite que varios asesores atiendan el mismo número, automatizar respuestas y enviar mensajes con plantillas aprobadas.",
    },
    {
      question: "¿En qué se diferencia de la aplicación WhatsApp Business?",
      answer:
        "La aplicación WhatsApp Business está pensada para negocios pequeños que atienden desde el teléfono. WhatsApp Business API se usa a través de una plataforma como crear.chat y permite trabajar en equipo, automatizar, integrar otros sistemas y enviar difusiones.",
    },
    {
      question: "¿Cuántas personas pueden atender el mismo número?",
      answer:
        "Depende del plan: 2 agentes humanos en Inicio, 5 en Crecimiento, 7 en PRO y 10 en Elite. Además, los agentes de IA pueden atender conversaciones de forma automática.",
    },
    {
      question: "¿Puedo enviar mensajes masivos por WhatsApp con crear.chat?",
      answer:
        "Sí, con las difusiones, disponibles desde el plan Crecimiento (20 al mes en Crecimiento, 100 en PRO e ilimitadas en Elite). Para escribirles primero a tus clientes, WhatsApp exige usar plantillas aprobadas por Meta.",
    },
    {
      question: "¿Qué son las plantillas de WhatsApp?",
      answer:
        "Son mensajes que Meta revisa y aprueba antes de que puedas usarlos. Se necesitan para iniciar una conversación con un cliente o para escribirle cuando ha pasado la ventana de atención que permite WhatsApp. En crear.chat están disponibles desde el plan Crecimiento.",
    },
    {
      question: "¿También puedo atender Instagram y Facebook Messenger?",
      answer:
        "Sí. crear.chat trabaja con WhatsApp Business API, Instagram y Facebook Messenger. En el plan Inicio eliges uno de los tres canales; desde Crecimiento tienes los tres.",
    },
    {
      question: "¿Me ayudan a conectar mi número de WhatsApp?",
      answer:
        "Sí. La configuración de la plataforma es un servicio opcional que puedes contratar con cualquier plan, y el equipo de Crear Comunicaciones te acompaña en el proceso.",
    },
  ],
  cta: {
    title: "Lleva la atención por WhatsApp de tu empresa al siguiente nivel",
    text: "Te mostramos cómo se vería la atención de tus clientes con WhatsApp Business API en crear.chat.",
  },
  related: [
    { label: "CRM y gestión de clientes", href: "/modulos/crm" },
    { label: "Automatización y chatbots", href: "/modulos/automatizacion-chatbot" },
    { label: "Inteligencia artificial", href: "/modulos/inteligencia-artificial" },
    { label: "Blog: diferencia entre WhatsApp Business y la API", href: "/blog/diferencia-whatsapp-business-api" },
    { label: "Blog: políticas de WhatsApp Business API", href: "/blog/politicas-whatsapp-business-api" },
  ],
};
