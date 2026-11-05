import { BarChart3, FileSpreadsheet, Users } from "lucide-react";
import type { ModulePageData } from "./types";

export const reportesAnalitica: ModulePageData = {
  path: "/modulos/reportes-analitica",
  name: "Reportes y analítica",
  seo: {
    title: "Reportes de atención al cliente por WhatsApp | crear.chat",
    description:
      "Reportes y estadísticas con métricas de rendimiento de tu equipo de atención por WhatsApp. Disponibles desde el plan Crecimiento de crear.chat.",
  },
  eyebrow: "Módulo · Control y seguimiento",
  h1: "Reportes y analítica de la atención a tus clientes",
  intro: [
    "El módulo de reportes y estadísticas de crear.chat te muestra métricas de rendimiento de tu equipo, para que sepas cómo avanza la atención a tus clientes y tomes decisiones con información.",
    "Está disponible en los planes Crecimiento, PRO y Elite.",
  ],
  availability: [{ label: "Reportes", values: [false, true, true, true] }],
  problem: {
    title: "Sin datos, la atención se gestiona a ciegas",
    paragraphs: [
      "Cuando la atención ocurre en celulares y chats sueltos, es difícil saber cuánto trabajo tiene el equipo o cómo está respondiendo. Las decisiones se toman por impresiones.",
      "Con reportes centralizados, gerentes y coordinadores tienen una visión de la actividad de atención sin pedirle a cada asesor que la reporte a mano.",
    ],
    pains: [
      "No sabes cómo está rindiendo tu equipo de atención",
      "Informes armados a mano al final del mes",
      "Decisiones basadas en impresiones y no en datos",
    ],
  },
  howItWorks: {
    title: "La información se genera mientras tu equipo atiende",
    steps: [
      { title: "Tu equipo atiende", description: "Las conversaciones se gestionan en crear.chat." },
      { title: "La actividad se registra", description: "La plataforma guarda la información de la atención." },
      { title: "Consultas los reportes", description: "Revisas las métricas de rendimiento del equipo." },
      { title: "Tomas decisiones", description: "Ajustas turnos, flujos o capacitación según lo que ves." },
    ],
  },
  features: [
    {
      icon: BarChart3,
      title: "Reportes y estadísticas",
      description: "Métricas de rendimiento del equipo de atención, en la misma plataforma.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Users,
      title: "Seguimiento del equipo",
      description: "Una visión de cómo trabajan tus agentes humanos en la atención a clientes.",
      badge: "Desde Crecimiento",
    },
    {
      icon: FileSpreadsheet,
      title: "Información en Google Sheets",
      description: "Con las integraciones puedes llevar información de la atención a hojas de cálculo.",
      badge: "Desde PRO",
    },
  ],
  benefits: [
    "Conoces cómo trabaja tu equipo sin pedir informes manuales",
    "Detectas a tiempo dónde mejorar la atención",
    "Decisiones de gestión basadas en datos",
    "Información disponible para gerentes y coordinadores",
  ],
  examples: [
    {
      sector: "Gerencia comercial",
      title: "Revisión semanal del equipo",
      description:
        "La gerente revisa cada semana los reportes de la atención por WhatsApp para conversar con su equipo sobre lo que funciona y lo que se debe ajustar.",
    },
    {
      sector: "Servicio al cliente",
      title: "Ajuste de turnos",
      description:
        "Un coordinador usa los reportes para entender cómo se distribuye el trabajo entre asesores y organizar mejor los turnos.",
    },
    {
      sector: "Dirección",
      title: "Medir el efecto de los cambios",
      description:
        "Después de implementar nuevos flujos de chatbot, la empresa revisa los reportes para valorar cómo cambió el trabajo del equipo.",
    },
  ],
  integration: {
    title: "Datos de todos los canales en un solo lugar",
    paragraphs: [
      "Los reportes se alimentan de la atención por WhatsApp Business API, Instagram y Messenger que tu equipo realiza en crear.chat, junto con el trabajo de los flujos de chatbot y la IA.",
      "Si necesitas cruzar la información con otros datos de tu empresa, desde el plan PRO puedes conectar crear.chat con Google Sheets y otras herramientas.",
    ],
  },
  consulting: {
    title: "Te ayudamos a medir lo que importa",
    paragraphs: [
      "En la consultoría definimos contigo los indicadores clave para tu operación y cómo revisarlos periódicamente.",
      "Con esa información proponemos mejoras en los flujos, en el uso de la IA y en la organización del equipo, y medimos su efecto.",
    ],
  },
  faqs: [
    {
      question: "¿crear.chat tiene reportes?",
      answer: "Sí. Los reportes y estadísticas, con métricas de rendimiento del equipo, están disponibles en los planes Crecimiento, PRO y Elite.",
    },
    {
      question: "¿El plan Inicio incluye reportes?",
      answer: "No. Los reportes están disponibles desde el plan Crecimiento.",
    },
    {
      question: "¿Puedo llevar la información a Google Sheets?",
      answer: "Sí, desde el plan PRO, con la integración de Google Sheets.",
    },
    {
      question: "¿Para qué sirven los reportes de atención al cliente?",
      answer:
        "Para saber cómo está trabajando el equipo, detectar oportunidades de mejora y tomar decisiones sobre turnos, capacitación y automatización con información real.",
    },
    {
      question: "¿Me ayudan a interpretar los reportes?",
      answer:
        "Sí. En la consultoría de Crear Comunicaciones definimos indicadores clave y te acompañamos a revisarlos y a convertirlos en mejoras.",
    },
  ],
  cta: {
    title: "Gestiona la atención de tu empresa con información",
    text: "Te mostramos los reportes de crear.chat y cómo usarlos para mejorar la atención.",
  },
  related: [
    { label: "WhatsApp Business API", href: "/modulos/whatsapp-business-api" },
    { label: "Integraciones", href: "/integraciones" },
    { label: "Consultoría", href: "/consultoria" },
  ],
};
