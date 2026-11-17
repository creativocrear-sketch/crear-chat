import { CalendarCheck, ClipboardList, Landmark, Megaphone, MessagesSquare, Plug, Users } from "lucide-react";
import type { SectorPageData } from "./types";
import { M } from "./modulos";

export const camarasDeComercio: SectorPageData = {
  slug: "camaras-de-comercio",
  name: "Cámaras de comercio",
  withArticle: "las cámaras de comercio",
  summary: "Información de trámites, campañas de renovación, eventos y PQRS por WhatsApp.",
  icon: Landmark,
  seo: {
    title: "WhatsApp para cámaras de comercio en Colombia | crear.chat",
    description:
      "Atiende a comerciantes y empresarios por WhatsApp: información de trámites, recordatorios de renovación de matrícula, eventos y PQRS con crear.chat.",
  },
  h1: "WhatsApp Business API para cámaras de comercio",
  intro: [
    "Las cámaras de comercio atienden a miles de comerciantes, empresarios y emprendedores que preguntan por trámites, renovaciones, certificados, capacitaciones y eventos. Con crear.chat esa atención se organiza en un solo canal oficial de WhatsApp, con varias áreas trabajando sobre el mismo número.",
  ],
  trust: "Crear Comunicaciones trabaja actualmente con cámaras de comercio en Colombia.",
  challenges: {
    title: "Mucha demanda concentrada en pocas fechas",
    paragraphs: [
      "La temporada de renovación de la matrícula mercantil, que vence el 31 de marzo de cada año, multiplica las consultas. Al mismo tiempo siguen llegando preguntas sobre registros, certificados, capacitaciones y servicios a afiliados, y cada una corresponde a un área distinta.",
      "Cuando todo llega por teléfono, correo y chats sueltos, los usuarios esperan, las áreas se pasan las consultas y es difícil saber cuántas solicitudes quedaron sin respuesta.",
    ],
    items: [
      "Picos de consultas en temporada de renovación",
      "Preguntas repetidas sobre requisitos, horarios y sedes",
      "Varias áreas atendiendo canales separados",
      "Convocatorias a eventos y capacitaciones que no llegan a tiempo",
      "PQRS difíciles de rastrear",
    ],
  },
  useCases: [
    {
      icon: MessagesSquare,
      title: "Información de trámites a cualquier hora",
      description:
        "Flujos de chatbot y el agente de IA responden preguntas frecuentes sobre requisitos, horarios y sedes, y orientan al usuario hacia el canal oficial de cada trámite.",
      modules: [M.chatbot, M.ia],
    },
    {
      icon: CalendarCheck,
      title: "Campañas de renovación de matrícula",
      description:
        "Recordatorios con plantillas aprobadas por Meta y difusiones a listas de comerciantes que aceptaron recibir mensajes, antes de la fecha límite.",
      modules: [M.campanas, M.crm],
    },
    {
      icon: Megaphone,
      title: "Eventos y capacitaciones",
      description:
        "Convocatorias por WhatsApp y registro de los interesados en listas y etiquetas, para hacerles seguimiento y enviarles recordatorios.",
      modules: [M.campanas, M.crm],
    },
    {
      icon: Users,
      title: "Varias áreas en el mismo número",
      description:
        "Las conversaciones se asignan al área que corresponde (registros, afiliados, eventos), sin que el usuario tenga que llamar a otro número.",
      modules: [M.whatsapp, M.crm],
    },
    {
      icon: ClipboardList,
      title: "PQRS ordenadas",
      description:
        "Cada petición, queja o reclamo queda registrada, clasificada con etiquetas y con su estado, y los reportes muestran cómo avanza la atención.",
      modules: [M.crm, M.reportes],
    },
    {
      icon: Plug,
      title: "Conexión con otros sistemas",
      description:
        "Desde el plan PRO, las integraciones permiten llevar inscritos o solicitudes a hojas de cálculo u otros sistemas de la entidad.",
      modules: [M.integraciones],
    },
  ],
  journey: {
    title: "Una consulta de renovación por WhatsApp",
    steps: [
      { title: "El comerciante escribe", description: "Pregunta cómo renovar su matrícula mercantil." },
      { title: "Un flujo lo orienta", description: "Le muestra las opciones: renovación, certificados, eventos u otra consulta." },
      { title: "La IA responde lo frecuente", description: "Explica requisitos y plazos, y comparte el enlace del canal oficial." },
      { title: "Un asesor continúa si hace falta", description: "La conversación se asigna al área de registros con su historial." },
    ],
  },
  consulting: [
    "Diseñamos con la cámara los flujos de atención por temporada (renovación, eventos, servicios), las plantillas de recordatorio y la forma de repartir las conversaciones entre áreas.",
    "Luego capacitamos a los equipos y definimos indicadores para medir la atención.",
  ],
  faqs: [
    {
      question: "¿Se puede recordar la renovación de la matrícula mercantil por WhatsApp?",
      answer:
        "Sí. Con plantillas aprobadas por Meta y difusiones a listas de comerciantes que aceptaron recibir mensajes. En crear.chat las plantillas y difusiones están disponibles desde el plan Crecimiento.",
    },
    {
      question: "¿Varias áreas de la cámara pueden atender el mismo número de WhatsApp?",
      answer:
        "Sí. Cada plan incluye varios agentes humanos (de 2 a 10) y las conversaciones se asignan al área o persona que debe atenderlas.",
    },
    {
      question: "¿Se pueden expedir certificados por WhatsApp con crear.chat?",
      answer:
        "crear.chat no expide certificados. Lo que sí puede hacer es orientar al usuario y enviarle el enlace al canal oficial donde la cámara los tramita.",
    },
    {
      question: "¿La inteligencia artificial puede responder preguntas sobre trámites?",
      answer:
        "Sí, el agente de IA puede atender consultas frecuentes a cualquier hora. En la consultoría definimos con la cámara qué información debe manejar y qué casos deben pasar a una persona.",
    },
    {
      question: "¿Cómo se manejan las PQRS?",
      answer:
        "Cada solicitud queda registrada en la conversación, se clasifica con etiquetas, se asigna al responsable y tiene un estado. Desde el plan Crecimiento, los reportes muestran cómo avanza la atención.",
    },
  ],
  cta: {
    title: "Prepara la próxima temporada de renovación",
    text: "Te mostramos cómo organizar la atención de la cámara en WhatsApp antes de los picos de demanda.",
  },
};
