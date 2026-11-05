import type { Article } from "./types";

export const queEsCrmWhatsapp: Article = {
  slug: "que-es-crm-whatsapp",
  seo: {
    title: "Qué es un CRM con WhatsApp y para qué sirve | crear.chat",
    description:
      "Qué es un CRM conectado a WhatsApp, qué problemas resuelve, qué funciones debe tener y cómo implementarlo paso a paso en tu empresa.",
  },
  title: "¿Qué es un CRM con WhatsApp y por qué lo necesita tu empresa?",
  answer:
    "Un CRM con WhatsApp es un sistema que registra a cada persona que le escribe a tu empresa por WhatsApp junto con el historial de sus conversaciones, para que tu equipo pueda organizarla, asignarla y darle seguimiento desde un solo lugar. Sirve para que la información de los clientes no dependa del celular ni de la memoria de cada asesor.",
  intro: [
    "Para muchas empresas en Colombia, WhatsApp se volvió el canal por donde llegan las consultas, se cotiza y se cierran ventas. El problema aparece cuando ese canal crece: los datos de los clientes quedan repartidos en teléfonos, chats y hojas de cálculo, y nadie tiene la foto completa.",
    "En esta guía te explicamos qué es un CRM conectado a WhatsApp, qué debería hacer y cómo empezar a usarlo de forma ordenada.",
  ],
  sections: [
    {
      id: "que-es-un-crm",
      title: "¿Qué es un CRM?",
      paragraphs: [
        "CRM viene del inglés Customer Relationship Management, es decir, gestión de la relación con los clientes. Es la herramienta donde una empresa guarda la información de sus clientes y de cada interacción con ellos, para atenderlos mejor y darles seguimiento.",
        "Un CRM tradicional obliga a que alguien digite esa información. Un CRM conectado a WhatsApp la toma directamente de las conversaciones: cuando un cliente escribe, queda registrado con su historial sin trabajo adicional del equipo.",
      ],
    },
    {
      id: "por-que-conectarlo",
      title: "¿Por qué conectar el CRM con WhatsApp?",
      paragraphs: [
        "Porque es en WhatsApp donde ocurre buena parte de la relación con el cliente. Si el CRM vive separado del chat, la información se queda a medias: el asesor conversa en un lugar y registra en otro, o simplemente no registra.",
      ],
      bullets: [
        "Los datos de los clientes quedan en la empresa y no en los celulares de los asesores.",
        "Cualquier persona del equipo puede retomar una conversación sabiendo qué se habló antes.",
        "Es posible saber qué clientes están pendientes de una respuesta o de un seguimiento.",
        "La base de contactos crece sola con cada conversación y queda lista para campañas.",
      ],
    },
    {
      id: "funciones",
      title: "¿Qué debe hacer un CRM con WhatsApp?",
      paragraphs: ["Al evaluar una herramienta, revisa que cubra al menos estas funciones:"],
      subsections: [
        {
          title: "Registro de contactos con historial",
          paragraphs: ["Cada persona que escribe debe quedar guardada con sus conversaciones, para que el contexto no se pierda."],
        },
        {
          title: "Organización con etiquetas y listas",
          paragraphs: [
            "Las etiquetas permiten clasificar clientes y conversaciones (interesado, cotización enviada, cliente frecuente). Las listas agrupan contactos para trabajarlos juntos, por ejemplo en una campaña.",
          ],
        },
        {
          title: "Asignación de conversaciones",
          paragraphs: ["Cuando atienden varias personas, cada conversación debe llegar al responsable para que nadie responda dos veces ni quede un cliente olvidado."],
        },
        {
          title: "Estado de cada conversación",
          paragraphs: ["Saber qué conversaciones están abiertas y cuáles ya se resolvieron es la base de un buen seguimiento."],
        },
        {
          title: "Agenda, integraciones y reportes",
          paragraphs: [
            "Según el negocio, también son útiles una agenda para registrar citas, la conexión con otras herramientas (como hojas de cálculo) y reportes para ver cómo trabaja el equipo.",
          ],
        },
      ],
    },
    {
      id: "senales",
      title: "Señales de que tu empresa necesita un CRM con WhatsApp",
      bullets: [
        "Varias personas atienden el mismo número y se confunden con los chats.",
        "Los clientes escriben a números personales de los vendedores.",
        "Cuando un asesor se va, se pierden sus clientes y conversaciones.",
        "No sabes cuántas consultas llegan ni cuántas quedan sin seguimiento.",
        "Quieres hacer campañas por WhatsApp, pero no tienes una base de contactos organizada.",
      ],
    },
    {
      id: "como-implementarlo",
      title: "Cómo implementarlo paso a paso",
      steps: [
        "Define qué información necesitas de cada cliente y en qué momentos del proceso comercial le das seguimiento.",
        "Crea las etiquetas y listas que reflejen ese proceso: no muchas, pero claras para todo el equipo.",
        "Decide quién atiende qué tipo de conversación y cómo se asignan.",
        "Capacita al equipo para que clasifique y cierre las conversaciones de forma consistente.",
        "Revisa periódicamente la información y ajusta lo que no esté funcionando.",
      ],
      closing: [
        "La herramienta es solo una parte: lo que hace la diferencia es acordar cómo la va a usar el equipo.",
      ],
    },
    {
      id: "crear-chat",
      title: "Cómo funciona en crear.chat",
      paragraphs: [
        "En crear.chat, el módulo de contactos funciona como un CRM conectado a las conversaciones de WhatsApp Business API, Instagram y Facebook Messenger. Está incluido en todos los planes, con capacidad de 500 a 5.000 contactos según el plan.",
        "Los contactos se pueden organizar en listas, las conversaciones se asignan a los agentes humanos del equipo y cada una tiene su ciclo de vida. Las etiquetas están disponibles desde el plan Crecimiento, la agenda permite gestionar citas (incluso registradas por el agente de IA) y, desde el plan PRO, las integraciones conectan la información con Google Sheets, Zapier, Make, Slack o webhook.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué diferencia hay entre un CRM con WhatsApp y la aplicación WhatsApp Business?",
      answer:
        "La aplicación WhatsApp Business permite organizar chats con etiquetas básicas, pero no está pensada para que un equipo trabaje sobre la misma base de clientes con asignación de conversaciones, integraciones y reportes. Un CRM conectado a WhatsApp Business API sí lo permite.",
    },
    {
      question: "¿Necesito WhatsApp Business API para tener un CRM con WhatsApp?",
      answer:
        "Para conectar WhatsApp con una plataforma de forma oficial y que varias personas atiendan el mismo número, se usa WhatsApp Business API. Es la conexión que utiliza crear.chat.",
    },
    {
      question: "¿Un CRM con WhatsApp sirve para pequeñas empresas?",
      answer:
        "Sí. De hecho, las pequeñas empresas suelen notar rápido el cambio, porque dejan de depender de un solo celular y empiezan a tener su información de clientes organizada desde el principio.",
    },
    {
      question: "¿Cuánto cuesta un CRM con WhatsApp en crear.chat?",
      answer:
        "El módulo de contactos está incluido en todos los planes de crear.chat, que van desde $156.000 hasta $600.000 pesos colombianos al mes más IVA, según la cantidad de contactos, agentes y funcionalidades.",
    },
    {
      question: "¿Qué es el ciclo de vida de una conversación?",
      answer:
        "Es el estado en el que se encuentra cada conversación, por ejemplo abierta o resuelta. Permite al equipo saber qué está pendiente y qué ya se atendió.",
    },
  ],
};
