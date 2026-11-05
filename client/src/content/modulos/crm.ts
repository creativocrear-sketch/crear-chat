import { CalendarDays, History, Link2, ListChecks, Shuffle, Tag, Users } from "lucide-react";
import type { ModulePageData } from "./types";

export const crm: ModulePageData = {
  path: "/modulos/crm",
  name: "CRM y gestión de clientes",
  seo: {
    title: "CRM con WhatsApp para empresas | crear.chat",
    description:
      "Organiza tus clientes con un CRM conectado a WhatsApp: contactos con historial, etiquetas, listas, asignación de conversaciones y agenda de citas en crear.chat.",
  },
  eyebrow: "Módulo · Gestión comercial",
  h1: "CRM conectado a WhatsApp para organizar a tus clientes",
  intro: [
    "El módulo de contactos de crear.chat funciona como un CRM unido a tus conversaciones: cada persona que te escribe queda registrada con su historial, y tu equipo puede clasificarla, asignarla y darle seguimiento desde el mismo lugar donde atiende.",
  ],
  availability: [
    { label: "Contactos", values: ["500", "1.500", "2.500", "5.000"] },
    { label: "Módulo de contactos", values: [true, true, true, true] },
    { label: "Etiquetas", values: [false, true, true, true] },
  ],
  problem: {
    title: "Clientes repartidos en chats, cuadernos y hojas de cálculo",
    paragraphs: [
      "Cuando la información de los clientes vive en el celular de cada asesor o en archivos sueltos, nadie tiene la foto completa. Se pierden oportunidades porque no se sabe quién preguntó, qué se le ofreció o cuándo hay que volver a escribirle.",
      "Un CRM conectado a WhatsApp guarda esa información automáticamente con cada conversación, sin que el equipo tenga que copiarla a mano.",
    ],
    pains: [
      "No se sabe en qué va cada cliente",
      "Datos de clientes en archivos que nadie actualiza",
      "Clientes que escriben por varios canales y aparecen duplicados",
      "Seguimientos que dependen de la memoria del vendedor",
      "Citas anotadas en papel o en chats",
    ],
  },
  howItWorks: {
    title: "Tu base de clientes se construye sola con cada conversación",
    steps: [
      { title: "El cliente escribe", description: "Por WhatsApp, Instagram o Messenger, según tus canales." },
      { title: "Queda registrado", description: "El contacto se guarda con su historial de conversaciones." },
      { title: "Lo organizas", description: "Lo clasificas con etiquetas y lo agrupas en listas." },
      { title: "Lo asignas", description: "La conversación llega al asesor que debe atenderla." },
      { title: "Le das seguimiento", description: "Retomas el contacto, agendas citas o lo incluyes en campañas." },
    ],
  },
  features: [
    {
      icon: Users,
      title: "Contactos con historial",
      description: "Cada contacto conserva su historial de conversaciones para que cualquier asesor retome donde quedó.",
      badge: "Todos los planes",
    },
    {
      icon: Link2,
      title: "Clientes unificados entre canales",
      description: "Cuando un mismo cliente te escribe por distintos canales, puedes unificarlo en un solo contacto.",
    },
    {
      icon: ListChecks,
      title: "Listas y bases de datos",
      description: "Agrupa contactos en listas para organizarlos y usarlos en tus campañas.",
    },
    {
      icon: Tag,
      title: "Etiquetas",
      description: "Clasifica conversaciones y clientes con colores: interesado, cotización enviada, cliente frecuente.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Shuffle,
      title: "Asignación de conversaciones",
      description: "Distribuye la atención entre los agentes humanos de tu equipo.",
      badge: "Todos los planes",
    },
    {
      icon: History,
      title: "Ciclo de vida de las conversaciones",
      description: "Cada conversación tiene un estado, para distinguir lo que está abierto de lo que ya se resolvió.",
    },
    {
      icon: CalendarDays,
      title: "Agenda y citas",
      description:
        "Define tu disponibilidad semanal y gestiona citas de 30 minutos con estados: pendiente, confirmada, completada o cancelada.",
    },
  ],
  benefits: [
    "Toda la información de tus clientes en un solo lugar",
    "Cualquier asesor retoma una conversación sin preguntar de nuevo",
    "Seguimiento comercial ordenado con etiquetas y listas",
    "Menos contactos duplicados cuando un cliente usa varios canales",
    "Citas registradas y con estado, sin depender del papel",
    "Una base de clientes que crece con cada conversación",
  ],
  examples: [
    {
      sector: "Inmobiliaria o servicios",
      title: "Seguimiento a interesados",
      description:
        "Cada persona que pregunta por un servicio queda registrada y etiquetada según su interés. El asesor revisa sus etiquetas y retoma el contacto con quienes quedaron pendientes.",
    },
    {
      sector: "Salud y bienestar",
      title: "Citas agendadas por WhatsApp",
      description:
        "Un consultorio publica su disponibilidad y el agente de IA ofrece los espacios libres. Las citas quedan como pendientes y la recepción las confirma desde la agenda.",
    },
    {
      sector: "Comercio",
      title: "Listas para campañas",
      description:
        "Una tienda agrupa en una lista a los clientes que preguntaron por una línea de productos y les envía una difusión cuando llega mercancía nueva.",
    },
  ],
  integration: {
    title: "El CRM que se alimenta de WhatsApp y trabaja con la IA",
    paragraphs: [
      "Los contactos llegan desde WhatsApp Business API, Instagram y Messenger, así que la base de clientes se mantiene al día sin digitar datos.",
      "El agente de IA puede consultar la disponibilidad de la agenda y registrar citas mientras conversa con el cliente. Y desde el plan PRO puedes conectar la información con Google Sheets u otras herramientas mediante integraciones.",
    ],
  },
  consulting: {
    title: "Organizamos contigo la información de tus clientes",
    paragraphs: [
      "Te ayudamos a definir qué etiquetas, listas y estados necesita tu proceso comercial, para que el CRM refleje cómo vende y atiende tu empresa.",
      "También te orientamos para aprovechar tu base de contactos en campañas y seguimientos, y capacitamos a tu equipo para que la mantenga ordenada.",
    ],
  },
  faqs: [
    {
      question: "¿crear.chat tiene CRM?",
      answer:
        "Sí. Todos los planes incluyen el módulo de contactos, que funciona como un CRM conectado a las conversaciones: guarda cada contacto con su historial y permite organizarlo y darle seguimiento.",
    },
    {
      question: "¿Cuántos contactos puedo tener?",
      answer: "Depende del plan: 500 en Inicio, 1.500 en Crecimiento, 2.500 en PRO y 5.000 en Elite.",
    },
    {
      question: "¿Qué pasa si un cliente me escribe por WhatsApp y por Instagram?",
      answer: "crear.chat permite unificar al mismo cliente cuando te escribe por distintos canales, para que su información no quede duplicada.",
    },
    {
      question: "¿Puedo clasificar a mis clientes?",
      answer:
        "Sí. Con etiquetas, disponibles desde el plan Crecimiento, y agrupándolos en listas de contactos.",
    },
    {
      question: "¿Puedo agendar citas con mis clientes?",
      answer:
        "Sí. En la Agenda defines tu disponibilidad semanal y gestionas citas de 30 minutos, creadas a mano por tu equipo o registradas por el agente de IA durante una conversación de WhatsApp. Las citas usan la hora de Colombia.",
    },
    {
      question: "¿Puedo conectar mis contactos con otras herramientas?",
      answer:
        "Sí, desde el plan PRO, con integraciones como Google Sheets, Zapier, Make, Slack o webhook genérico.",
    },
  ],
  cta: {
    title: "Ordena la relación con tus clientes desde hoy",
    text: "Te mostramos cómo quedarían tus contactos, etiquetas y citas organizados en crear.chat.",
  },
  related: [
    { label: "WhatsApp Business API", href: "/modulos/whatsapp-business-api" },
    { label: "Inteligencia artificial", href: "/modulos/inteligencia-artificial" },
    { label: "Integraciones", href: "/integraciones" },
    { label: "Blog: casos de uso de WhatsApp Business API", href: "/blog/casos-uso-whatsapp-business-api" },
  ],
};
