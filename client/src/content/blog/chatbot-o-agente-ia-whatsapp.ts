import type { Article } from "./types";

export const chatbotOAgenteIaWhatsapp: Article = {
  slug: "chatbot-o-agente-ia-whatsapp",
  seo: {
    title: "Chatbot o agente de IA para WhatsApp: cuál elegir | crear.chat",
    description:
      "Diferencias entre un chatbot de flujos y un agente de inteligencia artificial para WhatsApp, cuándo conviene cada uno y cómo combinarlos con tu equipo.",
  },
  title: "Chatbot o agente de IA para WhatsApp: ¿cuál necesita tu empresa?",
  answer:
    "Un chatbot de flujos responde con reglas fijas, por ejemplo cuando el cliente escribe una palabra clave, y es ideal para preguntas predecibles. Un agente de IA entiende lo que el cliente escribe y responde de forma conversacional, lo que sirve para consultas abiertas. Muchas empresas se benefician de combinar ambos con un equipo humano que atiende lo que requiere criterio.",
  intro: [
    "Cuando una empresa decide automatizar su WhatsApp, aparece la pregunta: ¿un chatbot o inteligencia artificial? No son lo mismo, y elegir bien depende del tipo de consultas que recibes.",
  ],
  sections: [
    {
      id: "chatbot",
      title: "¿Qué es un chatbot de flujos?",
      paragraphs: [
        "Es una automatización que sigue un guion definido por la empresa. Se activa con palabras clave u opciones y responde siempre de la misma manera: si el cliente escribe «horarios», recibe el mensaje con los horarios.",
      ],
      bullets: [
        "Ventaja: es predecible. Sabes exactamente qué va a responder.",
        "Ventaja: es ideal para preguntas frecuentes y para orientar al cliente con opciones.",
        "Limitación: si el cliente escribe algo que no está previsto, el flujo no lo entiende.",
      ],
    },
    {
      id: "agente-ia",
      title: "¿Qué es un agente de inteligencia artificial?",
      paragraphs: [
        "Es una herramienta que interpreta lo que el cliente escribe, aunque lo diga con sus propias palabras, y responde de forma conversacional. Puede atender a cualquier hora y resolver consultas que no siguen un guion.",
      ],
      bullets: [
        "Ventaja: entiende variaciones del lenguaje y conversa de forma natural.",
        "Ventaja: atiende 24/7, también fuera del horario laboral.",
        "Consideración: necesita información clara sobre tu negocio y revisión periódica, porque como toda inteligencia artificial puede equivocarse.",
      ],
    },
    {
      id: "comparacion",
      title: "Comparación rápida",
      table: {
        headers: ["Aspecto", "Chatbot de flujos", "Agente de IA"],
        rows: [
          ["Cómo responde", "Con reglas y mensajes definidos", "Interpreta y responde de forma conversacional"],
          ["Ideal para", "Preguntas frecuentes y menús de opciones", "Consultas abiertas y atención fuera de horario"],
          ["Control del mensaje", "Total: siempre responde lo mismo", "Alto, pero requiere supervisión"],
          ["Ante algo imprevisto", "No lo entiende", "Intenta interpretarlo"],
          ["Mantenimiento", "Actualizar los flujos cuando cambia la información", "Actualizar la información y revisar respuestas"],
        ],
      },
    },
    {
      id: "cuando-usar",
      title: "¿Cuándo conviene cada uno?",
      subsections: [
        {
          title: "Elige un chatbot de flujos si…",
          paragraphs: [
            "La mayoría de tus consultas son repetitivas y tienen una sola respuesta correcta, necesitas controlar exactamente cada mensaje o quieres guiar al cliente con opciones claras.",
          ],
        },
        {
          title: "Elige un agente de IA si…",
          paragraphs: [
            "Tus clientes preguntan de muchas formas distintas, recibes mensajes fuera del horario laboral o quieres que la atención se sienta más conversacional.",
          ],
        },
      ],
    },
    {
      id: "modelo-combinado",
      title: "El modelo combinado: flujos, IA y personas",
      paragraphs: ["En la práctica, muchas empresas usan las tres capas a la vez:"],
      steps: [
        "Un flujo de chatbot da la bienvenida y resuelve las preguntas más frecuentes.",
        "El agente de IA atiende las consultas abiertas y la atención fuera de horario.",
        "Los asesores humanos se encargan de ventas complejas, reclamos y casos especiales, con apoyo de un asistente de IA que les sugiere respuestas.",
      ],
      closing: [
        "Así el cliente recibe respuesta rápida y el equipo dedica su tiempo a las conversaciones donde más aporta.",
      ],
    },
    {
      id: "errores",
      title: "Errores comunes al automatizar con chatbots o IA",
      bullets: [
        "No dejar una salida clara para hablar con una persona.",
        "Automatizar todo desde el primer día en lugar de empezar por lo más repetitivo.",
        "No revisar las respuestas de la IA después de ponerla a funcionar.",
        "Escribir mensajes largos o con un tono distinto al de la marca.",
      ],
    },
    {
      id: "crear-chat",
      title: "Chatbots e inteligencia artificial en crear.chat",
      paragraphs: [
        "En crear.chat no tienes que elegir: todos los planes incluyen flujos de chatbot que responden por palabras clave (de 3 en el plan Inicio a ilimitados en Elite), el agente de IA que atiende 24/7 y el asistente de IA que sugiere respuestas a tu equipo en tiempo real.",
        "La cantidad de respuestas de IA al mes depende del plan: 500 en Inicio, 3.000 en Crecimiento, 15.000 en PRO e ilimitadas en Elite. Si tienes la agenda configurada, el agente de IA también puede registrar citas durante la conversación.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué es mejor para WhatsApp: un chatbot o inteligencia artificial?",
      answer:
        "Depende de tus consultas. El chatbot de flujos es mejor para preguntas repetitivas con una respuesta fija; el agente de IA, para consultas abiertas y atención fuera de horario. Muchas empresas combinan ambos.",
    },
    {
      question: "¿Un agente de IA puede equivocarse?",
      answer:
        "Sí, como cualquier inteligencia artificial. Por eso conviene definir bien qué debe atender, darle información clara sobre tu negocio y revisar periódicamente sus respuestas.",
    },
    {
      question: "¿Puedo empezar con un chatbot y luego agregar IA?",
      answer:
        "Sí. Es una forma sensata de empezar: primero automatizas las preguntas más frecuentes y después incorporas el agente de IA para el resto de consultas.",
    },
    {
      question: "¿El agente de IA de crear.chat puede agendar citas?",
      answer:
        "Sí. Con la agenda configurada, el agente consulta los horarios disponibles, toma los datos del cliente y registra la cita en estado pendiente.",
    },
    {
      question: "¿Cuánto cuesta un chatbot con IA para WhatsApp en crear.chat?",
      answer:
        "Los flujos de chatbot y el agente de IA están incluidos en todos los planes, desde $156.000 pesos colombianos al mes más IVA. Lo que cambia entre planes es la cantidad de flujos y de respuestas de IA al mes.",
    },
  ],
};
