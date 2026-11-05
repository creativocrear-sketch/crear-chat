import { FileSpreadsheet, MessageSquare, Plug, Webhook, Workflow } from "lucide-react";
import type { ModulePageData } from "./types";

export const integraciones: ModulePageData = {
  path: "/integraciones",
  name: "Integraciones",
  seo: {
    title: "Integraciones de WhatsApp con Google Sheets, Zapier y Make | crear.chat",
    description:
      "Conecta crear.chat con Google Sheets, Zapier, Make, Slack o tus sistemas mediante webhook para automatizar procesos. Disponible desde el plan PRO.",
  },
  eyebrow: "Integraciones",
  h1: "Integraciones para conectar crear.chat con las herramientas de tu empresa",
  intro: [
    "Las integraciones de crear.chat permiten conectar la plataforma con otros sistemas y automatizar el intercambio de información y procesos. Las integraciones disponibles son Google Sheets, Zapier, Make, Slack y webhook genérico.",
    "Están incluidas en los planes PRO y Elite.",
  ],
  availability: [{ label: "Integraciones", values: [false, false, true, true] }],
  problem: {
    title: "Información que se copia a mano de un sistema a otro",
    paragraphs: [
      "La atención por WhatsApp genera información valiosa: datos de clientes, solicitudes, pedidos. Cuando esa información hay que pasarla a mano a hojas de cálculo u otros sistemas, se pierde tiempo y aparecen errores.",
      "Las integraciones conectan crear.chat con las herramientas que ya usas para que la información fluya entre ellas.",
    ],
    pains: [
      "Datos copiados a mano a hojas de cálculo",
      "Sistemas que no se comunican entre sí",
      "Equipos internos que se enteran tarde de lo que pasa en la atención",
      "Errores de digitación al pasar información",
    ],
  },
  howItWorks: {
    title: "Cómo se conecta crear.chat con otras herramientas",
    steps: [
      { title: "Eliges la herramienta", description: "Google Sheets, Zapier, Make, Slack o webhook genérico." },
      { title: "Defines qué conectar", description: "Qué información o proceso debe pasar entre crear.chat y la otra herramienta." },
      { title: "Configuras la integración", description: "Por tu cuenta o con el acompañamiento de nuestro equipo." },
      { title: "La información fluye", description: "Los procesos se ejecutan sin copiar y pegar." },
    ],
  },
  features: [
    {
      icon: FileSpreadsheet,
      title: "Google Sheets",
      description: "Conecta crear.chat con hojas de cálculo de Google que tu equipo ya sabe usar.",
      badge: "Desde PRO",
    },
    {
      icon: Plug,
      title: "Zapier",
      description: "Conecta crear.chat con otras aplicaciones y automatiza tareas entre ellas.",
      badge: "Desde PRO",
    },
    {
      icon: Workflow,
      title: "Make",
      description: "Crea escenarios de automatización que conectan crear.chat con tus servicios.",
      badge: "Desde PRO",
    },
    {
      icon: MessageSquare,
      title: "Slack",
      description: "Conecta crear.chat con el espacio donde tu equipo interno se comunica.",
      badge: "Desde PRO",
    },
    {
      icon: Webhook,
      title: "Webhook genérico",
      description: "Conecta crear.chat con sistemas propios o de terceros, como un ERP o una aplicación a la medida.",
      badge: "Desde PRO",
    },
  ],
  benefits: [
    "Menos trabajo manual al pasar información entre sistemas",
    "Menos errores de digitación",
    "Tus herramientas actuales siguen funcionando, ahora conectadas",
    "Procesos que se ejecutan solos",
    "Posibilidad de integrar desarrollos a la medida mediante webhook",
  ],
  examples: [
    {
      sector: "Ventas",
      title: "Registro de solicitudes en una hoja de cálculo",
      description:
        "Una empresa podría llevar a Google Sheets la información de los clientes interesados para que el área comercial la consulte sin entrar a la plataforma.",
    },
    {
      sector: "Operación interna",
      title: "Avisos al equipo en Slack",
      description:
        "Un equipo que trabaja en Slack podría recibir allí información relevante de la atención para reaccionar a tiempo.",
    },
    {
      sector: "Sistemas propios",
      title: "Conexión con un ERP",
      description:
        "Una empresa con un sistema propio podría conectarlo mediante webhook para intercambiar información con crear.chat, con apoyo de nuestro equipo de desarrollo de soluciones.",
    },
  ],
  integration: {
    title: "Integraciones que amplían lo que hace la plataforma",
    paragraphs: [
      "Las integraciones conectan lo que ocurre en las conversaciones de WhatsApp Business API, Instagram y Messenger con el resto de tu empresa. Combinadas con los flujos de chatbot y el Agente de IA, permiten automatizar procesos de punta a punta.",
      "Si la herramienta que usas no está en la lista, Zapier, Make o el webhook genérico pueden servir como puente para conectarla.",
    ],
  },
  consulting: {
    title: "Diseñamos e implementamos tus integraciones",
    paragraphs: [
      "Analizamos qué información necesita moverse entre crear.chat y tus herramientas, y diseñamos la integración más sencilla para lograrlo.",
      "Cuando el caso lo requiere, desarrollamos soluciones a la medida y capacitamos a tu equipo para mantenerlas.",
    ],
  },
  faqs: [
    {
      question: "¿Con qué herramientas se integra crear.chat?",
      answer: "Con Google Sheets, Zapier, Make, Slack y cualquier sistema que se conecte mediante webhook genérico.",
    },
    {
      question: "¿En qué planes están disponibles las integraciones?",
      answer: "En los planes PRO y Elite. Los planes Inicio y Crecimiento no incluyen integraciones.",
    },
    {
      question: "¿Puedo conectar crear.chat con mi propio sistema?",
      answer:
        "Sí, mediante webhook genérico. Si necesitas apoyo, el equipo de Crear Comunicaciones puede diseñar y desarrollar la integración.",
    },
    {
      question: "¿Puedo conectar WhatsApp con Google Sheets?",
      answer: "Sí. crear.chat se integra con Google Sheets desde el plan PRO.",
    },
    {
      question: "¿Qué es un webhook?",
      answer:
        "Es una forma estándar de conectar dos sistemas para que intercambien información automáticamente cuando ocurre un evento. Permite integrar crear.chat con sistemas que no tienen una integración directa.",
    },
  ],
  cta: {
    title: "Conecta tu atención por WhatsApp con el resto de tu empresa",
    text: "Cuéntanos qué herramientas usas y te mostramos cómo integrarlas con crear.chat.",
  },
  related: [
    { label: "Automatización y chatbots", href: "/modulos/automatizacion-chatbot" },
    { label: "CRM y gestión de clientes", href: "/modulos/crm" },
    { label: "Reportes y analítica", href: "/modulos/reportes-analitica" },
    { label: "Blog: plataformas de integración con WhatsApp API", href: "/blog/plataformas-integracion-whatsapp-api" },
  ],
};
