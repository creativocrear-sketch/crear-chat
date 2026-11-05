import { Bot, KeyRound, Plug, Workflow, Zap, Hand } from "lucide-react";
import type { ModulePageData } from "./types";

export const automatizacionChatbot: ModulePageData = {
  path: "/modulos/automatizacion-chatbot",
  name: "Automatización y chatbots",
  seo: {
    title: "Chatbot para WhatsApp y automatización | crear.chat",
    description:
      "Crea flujos de chatbot para WhatsApp que responden por palabras clave, dan la bienvenida y orientan a tus clientes. De 3 flujos a ilimitados según tu plan.",
  },
  eyebrow: "Módulo · Inteligencia y automatización",
  h1: "Chatbot para WhatsApp y automatización de conversaciones",
  intro: [
    "Los flujos de chatbot de crear.chat responden automáticamente cuando el cliente escribe una palabra clave. Sirven para dar la bienvenida, mostrar opciones, resolver preguntas frecuentes y ordenar la conversación antes de que llegue a tu equipo.",
    "Todos los planes incluyen flujos de chatbot; la cantidad depende del plan.",
  ],
  availability: [
    { label: "Flujos de chatbot", values: ["3 flujos", "20 flujos", "100 flujos", "Ilimitados"] },
    { label: "Respuestas rápidas", values: [true, true, true, true] },
    { label: "Integraciones", values: [false, false, true, true] },
  ],
  problem: {
    title: "Las mismas preguntas, todos los días, respondidas a mano",
    paragraphs: [
      "Horarios, ubicación, precios, medios de pago, cómo hacer un pedido. Gran parte de los mensajes que recibe una empresa se repiten, y responderlos uno por uno consume el tiempo del equipo.",
      "Los flujos de chatbot resuelven esas consultas al instante y dejan a tus asesores las conversaciones donde realmente aportan.",
    ],
    pains: [
      "Asesores ocupados en preguntas repetitivas",
      "Clientes que esperan para recibir información básica",
      "Conversaciones desordenadas que llegan sin contexto",
      "Tareas manuales para pasar información a otros sistemas",
    ],
  },
  howItWorks: {
    title: "Cómo funciona un flujo de chatbot",
    intro: "Estos son ejemplos de uso, no configuraciones predeterminadas: cada flujo se diseña según tu operación.",
    steps: [
      { title: "Defines la palabra clave", description: "Por ejemplo «horarios», «precios» o «hola»." },
      { title: "Diseñas la respuesta", description: "El mensaje o las opciones que verá el cliente." },
      { title: "El cliente escribe", description: "Cuando el mensaje coincide, el flujo responde automáticamente." },
      { title: "Tu equipo continúa", description: "Si la conversación necesita una persona, un asesor la atiende." },
    ],
  },
  features: [
    {
      icon: Workflow,
      title: "Flujos de chatbot",
      description: "Respuestas automáticas que se activan por palabra clave: de 3 flujos en Inicio a ilimitados en Elite.",
      badge: "Todos los planes",
    },
    {
      icon: KeyRound,
      title: "Activación por palabras clave",
      description: "Cada flujo responde cuando el cliente escribe las palabras que definiste.",
    },
    {
      icon: Zap,
      title: "Respuestas rápidas",
      description: "Atajos para que tus asesores respondan en segundos lo que no está automatizado.",
      badge: "Todos los planes",
    },
    {
      icon: Bot,
      title: "Complemento con IA",
      description: "Combina flujos con el Agente de IA para atender también las consultas que no siguen una regla fija.",
      badge: "Todos los planes",
    },
    {
      icon: Plug,
      title: "Automatización con otras herramientas",
      description: "Conecta crear.chat con Google Sheets, Zapier, Make, Slack o webhook para automatizar procesos.",
      badge: "Desde PRO",
    },
    {
      icon: Hand,
      title: "Paso a tu equipo",
      description: "Las conversaciones que necesitan una persona continúan con tus agentes humanos.",
    },
  ],
  benefits: [
    "Respuesta inmediata a las preguntas frecuentes",
    "Menos carga de trabajo repetitivo para tu equipo",
    "Conversaciones más ordenadas desde el primer mensaje",
    "Atención consistente, sin depender de quién responda",
    "Procesos automatizados con tus otras herramientas desde el plan PRO",
  ],
  examples: [
    {
      sector: "Bienvenida",
      title: "Primer mensaje con opciones",
      description:
        "Cuando un cliente saluda, el flujo responde con un mensaje de bienvenida y le indica qué escribir para ver horarios, productos o hablar con un asesor.",
    },
    {
      sector: "Atención",
      title: "Preguntas frecuentes resueltas al instante",
      description:
        "Un almacén configura flujos para «horarios», «ubicación» y «medios de pago». El cliente recibe la respuesta en segundos y el equipo atiende las compras.",
    },
    {
      sector: "Orientación",
      title: "Cada cliente al área correcta",
      description:
        "Una institución educativa orienta a los interesados según escriban «inscripciones», «pagos» o «certificados», para que cada solicitud llegue con contexto.",
    },
    {
      sector: "Seguimiento",
      title: "Información después de la compra",
      description:
        "Un negocio crea un flujo para «garantía» o «cambios» que explica el procedimiento, y un asesor continúa cuando el cliente necesita gestionar su caso.",
    },
  ],
  integration: {
    title: "Chatbots, IA y WhatsApp trabajando juntos",
    paragraphs: [
      "Los flujos de chatbot funcionan sobre WhatsApp Business API, Instagram y Messenger. Resuelven lo predecible con reglas claras, mientras el Agente de IA atiende las consultas abiertas y tus asesores las que necesitan una persona.",
      "Desde el plan PRO, las integraciones permiten llevar la automatización más allá de la conversación y conectarla con los procesos de tu empresa.",
    ],
  },
  consulting: {
    title: "Diseñamos contigo los flujos que tu empresa necesita",
    paragraphs: [
      "Un buen chatbot empieza por entender qué preguntan tus clientes. Revisamos tus conversaciones, identificamos las consultas repetitivas y diseñamos los flujos de bienvenida, atención, seguimiento y orientación.",
      "Después los implementamos en crear.chat y capacitamos a tu equipo para ajustarlos a medida que cambia tu negocio.",
    ],
  },
  faqs: [
    {
      question: "¿Qué es un chatbot para WhatsApp?",
      answer:
        "Es una automatización que responde mensajes de WhatsApp sin intervención de una persona. En crear.chat se construye con flujos que se activan cuando el cliente escribe una palabra clave.",
    },
    {
      question: "¿Cuántos flujos de chatbot incluye cada plan?",
      answer: "3 flujos en Inicio, 20 en Crecimiento, 100 en PRO e ilimitados en Elite.",
    },
    {
      question: "¿Qué diferencia hay entre un flujo de chatbot y el Agente de IA?",
      answer:
        "El flujo de chatbot sigue reglas fijas y responde ante palabras clave. El Agente de IA conversa de forma natural y atiende consultas que no siguen un guion. Puedes usar ambos.",
    },
    {
      question: "¿Me ayudan a crear los flujos de chatbot?",
      answer:
        "Sí. Si no quieres configurarlos tú mismo, el servicio opcional de configuración y la consultoría de Crear Comunicaciones te ayudan a diseñar e implementar tus flujos.",
    },
    {
      question: "¿Puedo automatizar procesos con otras herramientas?",
      answer:
        "Sí, desde el plan PRO, con las integraciones de Google Sheets, Zapier, Make, Slack y webhook genérico.",
    },
    {
      question: "¿El chatbot reemplaza a mis asesores?",
      answer:
        "No. Resuelve las consultas repetitivas y ordena la conversación, y tus asesores atienden lo que necesita una persona.",
    },
  ],
  cta: {
    title: "Automatiza las respuestas que tu equipo repite todos los días",
    text: "Te mostramos cómo funcionarían los flujos de chatbot con las preguntas reales de tus clientes.",
  },
  related: [
    { label: "Inteligencia artificial", href: "/modulos/inteligencia-artificial" },
    { label: "Integraciones", href: "/integraciones" },
    { label: "WhatsApp Business API", href: "/modulos/whatsapp-business-api" },
    { label: "Blog: por qué necesitas una plataforma para WhatsApp", href: "/blog/por-que-necesito-plataforma-whatsapp" },
  ],
};
