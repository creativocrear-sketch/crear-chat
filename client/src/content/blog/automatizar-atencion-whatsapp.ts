import type { Article } from "./types";

export const automatizarAtencionWhatsapp: Article = {
  slug: "automatizar-atencion-whatsapp",
  seo: {
    title: "Qué se puede automatizar en WhatsApp: guía para empresas | crear.chat",
    description:
      "Las tareas de atención por WhatsApp que una empresa puede automatizar, lo que conviene dejar en manos de personas y cómo empezar sin incumplir las políticas de WhatsApp.",
  },
  title: "¿Qué puede automatizar tu empresa en la atención por WhatsApp?",
  answer:
    "Por WhatsApp se pueden automatizar las respuestas a preguntas frecuentes, la bienvenida y orientación de los clientes, el agendamiento de citas, los avisos y recordatorios con plantillas aprobadas, las campañas a listas de contactos y el traslado de información a otras herramientas. Conviene dejar en manos de personas las ventas complejas, los reclamos y los casos que requieren criterio.",
  intro: [
    "Automatizar la atención no significa reemplazar al equipo con un robot. Significa que las tareas repetitivas se resuelvan solas para que las personas dediquen su tiempo a lo que realmente necesita atención humana.",
    "Esta guía recorre las tareas que una empresa puede automatizar en WhatsApp, las que no conviene automatizar y cómo empezar de forma ordenada.",
  ],
  sections: [
    {
      id: "que-significa",
      title: "¿Qué significa automatizar la atención por WhatsApp?",
      paragraphs: [
        "Es definir reglas o herramientas que respondan, organicen o registren información sin que un asesor tenga que hacerlo a mano en cada conversación. Puede ser tan simple como una respuesta automática a la pregunta «¿cuál es el horario?» o tan completo como un agente de inteligencia artificial que atiende consultas a cualquier hora.",
        "El objetivo es doble: que el cliente reciba respuesta más rápido y que el equipo trabaje con menos carga repetitiva.",
      ],
    },
    {
      id: "tareas",
      title: "Tareas que puedes automatizar",
      subsections: [
        {
          title: "1. Respuestas a preguntas frecuentes",
          paragraphs: [
            "Horarios, ubicación, medios de pago, precios de referencia o requisitos. Son las preguntas que más se repiten y las más fáciles de automatizar con flujos de chatbot que se activan por palabras clave.",
          ],
        },
        {
          title: "2. Bienvenida y orientación",
          paragraphs: [
            "Un primer mensaje que saluda al cliente y le indica qué opciones tiene ayuda a que la conversación llegue ordenada al área o a la persona correcta.",
          ],
        },
        {
          title: "3. Atención fuera de horario",
          paragraphs: [
            "Un agente de inteligencia artificial puede responder consultas en la noche, los fines de semana y los festivos, para que el cliente no se quede sin respuesta.",
          ],
        },
        {
          title: "4. Agendamiento de citas",
          paragraphs: [
            "Si tu negocio trabaja con citas, la agenda puede mostrar los horarios disponibles y registrar la cita durante la conversación, para que el equipo solo la confirme.",
          ],
        },
        {
          title: "5. Avisos, recordatorios y campañas",
          paragraphs: [
            "Con plantillas aprobadas por Meta y difusiones a listas de contactos puedes enviar recordatorios, novedades o promociones sin escribirle a cada cliente por separado.",
          ],
        },
        {
          title: "6. Registro de información en otras herramientas",
          paragraphs: [
            "Mediante integraciones, la información que surge en las conversaciones puede llegar a hojas de cálculo u otros sistemas sin copiar y pegar.",
          ],
        },
        {
          title: "7. Apoyo a las respuestas del equipo",
          paragraphs: [
            "No todo es automático al 100 %: las respuestas rápidas y un asistente de IA que sugiere textos ayudan a que los asesores respondan más rápido y de forma consistente.",
          ],
        },
      ],
    },
    {
      id: "que-no-automatizar",
      title: "Lo que no conviene automatizar",
      bullets: [
        "Reclamos y clientes molestos: necesitan escucha y criterio.",
        "Ventas complejas o de alto valor, donde la asesoría personalizada hace la diferencia.",
        "Casos excepcionales que no encajan en ninguna regla.",
        "Decisiones que comprometen a la empresa, como descuentos especiales o excepciones de política.",
      ],
      closing: [
        "Una buena automatización siempre deja una salida clara para que el cliente hable con una persona cuando lo necesita.",
      ],
    },
    {
      id: "como-empezar",
      title: "Cómo empezar a automatizar, paso a paso",
      steps: [
        "Revisa las conversaciones de las últimas semanas y anota las preguntas que más se repiten.",
        "Escoge las tres o cuatro que más tiempo le quitan al equipo y empieza por ellas.",
        "Escribe las respuestas con el tono de tu marca y diseña los flujos que las activan.",
        "Prueba los flujos con el equipo antes de ponerlos a funcionar con clientes.",
        "Mide el resultado, ajusta y agrega nuevas automatizaciones de forma gradual.",
      ],
    },
    {
      id: "politicas",
      title: "Reglas de WhatsApp que debes tener en cuenta",
      paragraphs: [
        "WhatsApp Business API tiene políticas que también aplican a la automatización. Las más importantes para empezar son estas:",
      ],
      bullets: [
        "Para escribirle primero a un cliente, o fuera de la ventana de atención que permite WhatsApp, debes usar plantillas aprobadas por Meta.",
        "Los clientes deben haber aceptado recibir tus mensajes antes de que les envíes campañas.",
        "Los envíos masivos sin segmentar o a personas que no los esperan pueden llevar a que restrinjan tu número.",
      ],
      closing: [
        "Si quieres profundizar, revisa nuestras guías sobre las políticas de WhatsApp Business API y sobre por qué WhatsApp restringe números.",
      ],
    },
    {
      id: "crear-chat",
      title: "Cómo automatizar con crear.chat",
      paragraphs: [
        "Todos los planes de crear.chat incluyen flujos de chatbot (de 3 en el plan Inicio a ilimitados en Elite), respuestas rápidas, el agente de IA que atiende 24/7 y el asistente de IA que sugiere respuestas al equipo. La agenda permite que el agente de IA registre citas durante la conversación.",
        "Las plantillas y difusiones están disponibles desde el plan Crecimiento, y las integraciones con Google Sheets, Zapier, Make, Slack y webhook, desde el plan PRO. Si prefieres no hacerlo solo, el equipo de consultoría de Crear Comunicaciones diseña e implementa contigo los flujos.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Automatizar WhatsApp hace que la atención sea fría o impersonal?",
      answer:
        "No necesariamente. Si las respuestas automáticas están bien escritas y el cliente puede hablar con una persona cuando lo necesita, la atención se vuelve más rápida sin perder cercanía.",
    },
    {
      question: "¿Puedo enviar mensajes masivos por WhatsApp de forma automática?",
      answer:
        "Sí, con WhatsApp Business API y plantillas aprobadas por Meta, siempre que los destinatarios hayan aceptado recibir tus mensajes. En crear.chat las difusiones están disponibles desde el plan Crecimiento.",
    },
    {
      question: "¿Qué es lo primero que debería automatizar?",
      answer:
        "Las preguntas que más se repiten en tus conversaciones. Suelen ser pocas y consumen buena parte del tiempo del equipo.",
    },
    {
      question: "¿Qué diferencia hay entre un flujo de chatbot y un agente de IA?",
      answer:
        "El flujo de chatbot responde con reglas fijas, por ejemplo cuando el cliente escribe una palabra clave. El agente de IA entiende lo que el cliente escribe y responde de forma conversacional. Se pueden combinar.",
    },
    {
      question: "¿Me pueden ayudar a diseñar las automatizaciones?",
      answer:
        "Sí. Crear Comunicaciones ofrece consultoría para diagnosticar tu atención, diseñar los flujos automatizados, implementarlos en crear.chat y capacitar a tu equipo.",
    },
  ],
};
