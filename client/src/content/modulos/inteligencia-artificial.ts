import { Bot, CalendarDays, Clock, Gauge, Sparkles, Users } from "lucide-react";
import type { ModulePageData } from "./types";

export const inteligenciaArtificial: ModulePageData = {
  path: "/modulos/inteligencia-artificial",
  name: "Inteligencia artificial",
  seo: {
    title: "Agentes de IA para WhatsApp y atención al cliente | crear.chat",
    description:
      "Agentes de IA que atienden 24/7 por WhatsApp y un asistente que sugiere respuestas a tu equipo. Incluidos en todos los planes de crear.chat.",
  },
  eyebrow: "Módulo · Inteligencia y automatización",
  h1: "Inteligencia artificial para atender a tus clientes por WhatsApp",
  intro: [
    "crear.chat incluye dos herramientas de inteligencia artificial en todos sus planes: el Agente de IA, que atiende a tus clientes de forma automática a cualquier hora, y el Asistente de IA, que le sugiere respuestas a tu equipo mientras conversa.",
  ],
  availability: [
    { label: "Agentes de IA", values: [true, true, true, true] },
    { label: "Asistente de IA", values: [true, true, true, true] },
    { label: "Respuestas de IA", values: ["500 al mes", "3.000 al mes", "15.000 al mes", "Ilimitadas"] },
  ],
  problem: {
    title: "Tus clientes escriben a toda hora; tu equipo no puede estar siempre",
    paragraphs: [
      "Las consultas llegan de noche, en fines de semana y en las horas de más trabajo. Si nadie responde, el cliente busca a otro proveedor. Y durante el día, los asesores gastan buena parte del tiempo escribiendo las mismas explicaciones.",
      "La inteligencia artificial ayuda en los dos frentes: responde cuando tu equipo no está y le ahorra tiempo cuando sí está.",
    ],
    pains: [
      "Consultas sin respuesta fuera del horario de oficina",
      "Clientes que se van porque nadie les contestó a tiempo",
      "Asesores que redactan las mismas respuestas todo el día",
      "Calidad de respuesta distinta según quién atienda",
    ],
  },
  howItWorks: {
    title: "Dos formas de usar la IA en tu atención",
    intro:
      "El Agente de IA conversa directamente con el cliente. El Asistente de IA trabaja al lado de tu asesor, que decide qué enviar.",
    steps: [
      { title: "El cliente escribe", description: "Por WhatsApp, Instagram o Messenger, a cualquier hora." },
      { title: "El Agente de IA responde", description: "Atiende las consultas de forma automática, incluso fuera del horario laboral." },
      { title: "Agenda si hace falta", description: "Si tienes la Agenda activa, el agente puede ofrecer horarios libres y registrar la cita." },
      { title: "Tu equipo continúa", description: "Cuando un asesor atiende, el Asistente de IA le sugiere respuestas en tiempo real." },
    ],
  },
  features: [
    {
      icon: Bot,
      title: "Agente de IA",
      description: "Inteligencia artificial que atiende conversaciones 24/7 sin necesidad de un asesor conectado.",
      badge: "Todos los planes",
    },
    {
      icon: Sparkles,
      title: "Asistente de IA",
      description: "Sugerencias de respuesta en tiempo real para que tu asesor las revise, ajuste y envíe.",
      badge: "Todos los planes",
    },
    {
      icon: CalendarDays,
      title: "Citas agendadas por la IA",
      description:
        "Con la Agenda activa, el agente consulta tu disponibilidad, toma nombre y teléfono del cliente y registra la cita como pendiente.",
    },
    {
      icon: Clock,
      title: "Atención fuera de horario",
      description: "Tus clientes reciben respuesta en la noche, los fines de semana y los festivos.",
    },
    {
      icon: Users,
      title: "IA y personas en el mismo canal",
      description: "La IA y tus agentes humanos trabajan sobre las mismas conversaciones y el mismo historial del cliente.",
    },
    {
      icon: Gauge,
      title: "Respuestas de IA según tu plan",
      description: "500 respuestas al mes en Inicio, 3.000 en Crecimiento, 15.000 en PRO e ilimitadas en Elite.",
    },
  ],
  benefits: [
    "Tus clientes reciben respuesta a cualquier hora",
    "Menos consultas perdidas por falta de atención",
    "Tu equipo dedica su tiempo a los casos que necesitan una persona",
    "Respuestas más rápidas y mejor redactadas con el asistente",
    "Citas registradas mientras tu equipo descansa",
    "IA incluida en todos los planes, sin contratar otra herramienta",
  ],
  examples: [
    {
      sector: "Consultorio o centro de estética",
      title: "Citas agendadas de noche",
      description:
        "Un paciente escribe a las 10 p. m. El Agente de IA le muestra los horarios libres de la semana, toma sus datos y deja la cita pendiente para que la recepción la confirme en la mañana.",
    },
    {
      sector: "Hotel",
      title: "Preguntas frecuentes de huéspedes",
      description:
        "Horarios de check-in, servicios, parqueadero o cómo llegar: el agente responde a cualquier hora y la recepción se concentra en las solicitudes especiales.",
    },
    {
      sector: "Comercio",
      title: "Asesores que responden más rápido",
      description:
        "En temporada alta, el Asistente de IA sugiere respuestas a los vendedores, que las revisan y envían en segundos.",
    },
  ],
  integration: {
    title: "Cómo se relacionan la IA, los chatbots y tus asesores",
    paragraphs: [
      "Los flujos de chatbot siguen reglas que tú defines, por ejemplo responder cuando el cliente escribe una palabra clave. El Agente de IA conversa de forma más natural. Y tus agentes humanos atienden lo que requiere criterio o una venta personalizada. Los tres trabajan sobre el mismo canal de WhatsApp Business API y el mismo historial del cliente.",
      "El Agente de IA también se apoya en otros módulos, como la Agenda, para registrar citas sin intervención de tu equipo.",
    ],
  },
  consulting: {
    title: "Te ayudamos a que la IA responda como tu empresa",
    paragraphs: [
      "Un agente de IA da mejores resultados cuando está bien configurado. En la consultoría definimos contigo qué debe atender la IA, qué casos deben pasar a una persona y cómo combinarla con flujos de chatbot.",
      "Luego capacitamos a tu equipo para usar el Asistente de IA y revisar cómo está funcionando la atención automática.",
    ],
  },
  faqs: [
    {
      question: "¿crear.chat tiene inteligencia artificial?",
      answer:
        "Sí. Todos los planes incluyen el Agente de IA, que atiende conversaciones de forma automática, y el Asistente de IA, que sugiere respuestas a los asesores en tiempo real.",
    },
    {
      question: "¿Qué diferencia hay entre el Agente de IA y el Asistente de IA?",
      answer:
        "El Agente de IA conversa directamente con el cliente y puede atender 24/7. El Asistente de IA no le escribe al cliente: le sugiere respuestas al asesor, que decide si las envía o las ajusta.",
    },
    {
      question: "¿La IA puede atender por WhatsApp a cualquier hora?",
      answer: "Sí. El Agente de IA está pensado para atender 24/7, incluso cuando tu equipo no está conectado.",
    },
    {
      question: "¿Cuántas respuestas de IA incluye cada plan?",
      answer: "500 al mes en Inicio, 3.000 en Crecimiento, 15.000 en PRO e ilimitadas en Elite.",
    },
    {
      question: "¿El Agente de IA puede agendar citas?",
      answer:
        "Sí. Si tienes la Agenda configurada, el agente consulta los horarios libres, le pide al cliente su nombre y teléfono, y registra la cita en estado pendiente. Solo ofrece los horarios que hayas definido en tu disponibilidad.",
    },
    {
      question: "¿La IA reemplaza a mi equipo?",
      answer:
        "No es la idea. La IA atiende lo frecuente y ayuda a responder más rápido, mientras tus agentes humanos se concentran en los casos que requieren una persona.",
    },
    {
      question: "¿Qué diferencia hay entre un chatbot y un agente de IA?",
      answer:
        "Un flujo de chatbot sigue reglas fijas, como responder ante una palabra clave. Un agente de IA entiende la consulta y responde de forma conversacional. En crear.chat puedes usar ambos.",
    },
  ],
  cta: {
    title: "Pon la inteligencia artificial a trabajar en tu atención",
    text: "Te mostramos cómo atendería el Agente de IA a tus clientes y cómo ayudaría el Asistente a tu equipo.",
  },
  related: [
    { label: "Automatización y chatbots", href: "/modulos/automatizacion-chatbot" },
    { label: "CRM y agenda de citas", href: "/modulos/crm" },
    { label: "WhatsApp Business API", href: "/modulos/whatsapp-business-api" },
    { label: "Blog: beneficios de WhatsApp Business API con IA", href: "/blog/beneficios-whatsapp-business-api-ia" },
  ],
};
