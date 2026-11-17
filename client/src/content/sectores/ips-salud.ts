import { BellRing, CalendarDays, ClipboardList, HeartPulse, Info, Megaphone, Users } from "lucide-react";
import type { SectorPageData } from "./types";
import { M } from "./modulos";

export const ipsSalud: SectorPageData = {
  slug: "ips-salud",
  name: "IPS",
  withArticle: "las IPS",
  summary: "Citas, recordatorios, orientación a pacientes, PQRS y campañas de salud.",
  icon: HeartPulse,
  seo: {
    title: "WhatsApp para IPS y centros de salud en Colombia | crear.chat",
    description:
      "Agenda citas, envía recordatorios, orienta a pacientes y organiza las PQRS de tu IPS por WhatsApp con crear.chat y el acompañamiento de Crear Comunicaciones.",
  },
  h1: "WhatsApp para IPS y centros de salud",
  intro: [
    "Los pacientes quieren pedir citas, saber qué documentos llevar y recibir recordatorios sin pasar horas en una línea telefónica. Con crear.chat la IPS atiende por un canal oficial de WhatsApp, con varios asesores, agenda de citas e inteligencia artificial para orientar a cualquier hora.",
  ],
  trust: "Crear Comunicaciones trabaja actualmente con IPS en Colombia.",
  challenges: {
    title: "Líneas congestionadas y pacientes que no llegan",
    paragraphs: [
      "La mayoría de las llamadas que recibe una IPS son para pedir, cambiar o confirmar citas, o para preguntar horarios, sedes y requisitos. Cuando la línea se congestiona, los pacientes se frustran y el personal se satura.",
      "A esto se suman las citas a las que el paciente no asiste por olvido y las PQRS que llegan por canales distintos.",
    ],
    items: [
      "Líneas telefónicas congestionadas",
      "Inasistencias por olvido de la cita",
      "Preguntas repetidas sobre sedes, horarios y documentos",
      "PQRS dispersas y sin seguimiento",
      "Campañas de promoción y prevención con poco alcance",
    ],
  },
  useCases: [
    {
      icon: CalendarDays,
      title: "Agendamiento de citas",
      description:
        "Con la agenda, la IPS publica su disponibilidad y registra las citas; el agente de IA puede ofrecer horarios libres y tomar la cita durante la conversación.",
      modules: [M.agenda, M.ia],
    },
    {
      icon: BellRing,
      title: "Recordatorios de citas",
      description:
        "Plantillas aprobadas por Meta para recordarle al paciente su cita y las indicaciones previas, a quienes autorizaron recibir mensajes.",
      modules: [M.campanas],
    },
    {
      icon: Info,
      title: "Orientación al paciente",
      description:
        "Flujos de chatbot y el agente de IA responden sobre sedes, horarios, documentos y trámites, también fuera del horario de atención.",
      modules: [M.chatbot, M.ia],
    },
    {
      icon: ClipboardList,
      title: "PQRS con seguimiento",
      description:
        "Cada petición, queja o reclamo queda registrada, clasificada, asignada al área responsable y con su estado; los reportes muestran el avance.",
      modules: [M.crm, M.reportes],
    },
    {
      icon: Users,
      title: "Varios asesores en un solo número",
      description: "El equipo de atención trabaja sobre el mismo WhatsApp, con cada conversación asignada a quien corresponde.",
      modules: [M.whatsapp],
    },
    {
      icon: Megaphone,
      title: "Campañas de promoción y prevención",
      description: "Difusiones para jornadas de salud, vacunación o programas de prevención, a pacientes que aceptaron recibirlas.",
      modules: [M.campanas],
    },
  ],
  journey: {
    title: "Una cita pedida por WhatsApp",
    steps: [
      { title: "El paciente escribe", description: "Pide una cita de control." },
      { title: "La IA la agenda", description: "Ofrece los horarios disponibles y registra la cita como pendiente." },
      { title: "La IPS confirma", description: "El área de citas la revisa y la confirma." },
      { title: "Recordatorio", description: "Antes de la cita, una plantilla le recuerda la fecha y lo que debe llevar." },
    ],
  },
  consulting: [
    "Definimos con la IPS qué debe atender la IA (solo orientación administrativa, nunca diagnósticos), los flujos de citas y PQRS, y las plantillas de recordatorio.",
    "También te orientamos sobre el manejo de datos de pacientes en el canal y, si hace falta, evaluamos la conexión con el sistema de la IPS mediante webhook o Zapier.",
  ],
  faqs: [
    {
      question: "¿Se pueden agendar citas médicas por WhatsApp?",
      answer:
        "Sí. Con la agenda de crear.chat la IPS define su disponibilidad y las citas se registran a mano o mediante el agente de IA. Para agendas con varios profesionales o conexión con el sistema de la IPS, evaluamos la solución en la consultoría.",
    },
    {
      question: "¿Se pueden enviar recordatorios de citas?",
      answer:
        "Sí, con plantillas aprobadas por Meta, disponibles desde el plan Crecimiento, a pacientes que autorizaron recibir mensajes.",
    },
    {
      question: "¿El agente de IA puede dar recomendaciones médicas?",
      answer:
        "No debe hacerlo. En una IPS, el agente de IA se configura para orientar sobre citas, sedes, horarios y trámites, nunca para diagnosticar ni recomendar tratamientos. Esos casos deben pasar a personal de salud.",
    },
    {
      question: "¿Qué hay que tener en cuenta con los datos de los pacientes?",
      answer:
        "La información de salud es un dato sensible según la Ley 1581 de 2012 de protección de datos personales. Recomendamos contar con la autorización del paciente, pedir por WhatsApp solo la información necesaria y definir lineamientos internos de uso del canal; en la consultoría te ayudamos a establecerlos.",
    },
    {
      question: "¿Cómo se gestionan las PQRS por WhatsApp?",
      answer:
        "Cada solicitud queda en su conversación, se clasifica con etiquetas, se asigna al área responsable y tiene un estado. Los reportes, desde el plan Crecimiento, muestran cómo avanza la atención.",
    },
  ],
  cta: {
    title: "Descongestiona la línea de citas de tu IPS",
    text: "Te mostramos cómo atendería crear.chat las solicitudes de citas y la orientación a pacientes.",
  },
};
