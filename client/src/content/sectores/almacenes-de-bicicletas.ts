import { Bike, CalendarDays, CreditCard, Megaphone, Package, Users, Wrench } from "lucide-react";
import type { SectorPageData } from "./types";
import { M } from "./modulos";

export const almacenesDeBicicletas: SectorPageData = {
  slug: "almacenes-de-bicicletas",
  name: "Almacenes de bicicletas",
  withArticle: "los almacenes de bicicletas",
  summary: "Catálogo de bicicletas y repuestos, citas de taller, recordatorios de mantenimiento.",
  icon: Bike,
  seo: {
    title: "WhatsApp para almacenes y tiendas de bicicletas | crear.chat",
    description:
      "Comparte tu catálogo de bicicletas y repuestos, agenda el taller, recuerda mantenimientos y envía promociones a ciclistas por WhatsApp con crear.chat.",
  },
  h1: "WhatsApp para almacenes y tiendas de bicicletas",
  intro: [
    "Los ciclistas preguntan por referencias, tallas, repuestos y turnos de taller, casi siempre por WhatsApp. Con crear.chat el almacén comparte su catálogo, organiza las citas del taller y mantiene el contacto con sus clientes para el próximo mantenimiento.",
  ],
  trust: "Crear Comunicaciones trabaja actualmente con almacenes de bicicletas en Colombia.",
  challenges: {
    title: "Ventas, taller y repuestos en el mismo chat",
    paragraphs: [
      "En un almacén de bicicletas el WhatsApp recibe de todo: consultas de precio, disponibilidad de repuestos, citas para el taller y preguntas de ciclistas que están decidiendo su compra. Todo mezclado en un solo celular.",
      "Y cuando una bicicleta sale del taller, rara vez hay un recordatorio para el siguiente mantenimiento.",
    ],
    items: [
      "Fotos y precios de referencias enviados uno por uno",
      "Turnos del taller anotados en papel",
      "Clientes que no vuelven a mantenimiento",
      "Asesoría de compra mezclada con consultas de repuestos",
      "Promociones y eventos que no llegan a los ciclistas",
    ],
  },
  useCases: [
    {
      icon: Package,
      title: "Catálogo de bicicletas, repuestos y accesorios",
      description:
        "Publica tus referencias en una página de catálogo, cárgalas desde Excel y compártelas cuando el cliente pregunta.",
      modules: [M.catalogo],
    },
    {
      icon: Wrench,
      title: "Citas del taller",
      description:
        "Con la agenda, el cliente aparta su turno de mantenimiento y el taller ve las citas con su estado; el agente de IA puede agendarlas por WhatsApp.",
      modules: [M.agenda, M.ia],
    },
    {
      icon: CalendarDays,
      title: "Recordatorios de mantenimiento",
      description:
        "Plantillas aprobadas por Meta para recordarle al cliente su próxima revisión, a quienes aceptaron recibir mensajes.",
      modules: [M.campanas],
    },
    {
      icon: Users,
      title: "Asesoría de compra",
      description:
        "Las consultas de compra se asignan a un asesor, que responde con apoyo del asistente de IA y registra el interés del cliente con etiquetas.",
      modules: [M.crm, M.ia],
    },
    {
      icon: Megaphone,
      title: "Promociones y eventos",
      description:
        "Difusiones a listas de ciclistas para lanzamientos, temporadas de descuento o eventos de la comunidad.",
      modules: [M.campanas, M.crm],
    },
    {
      icon: CreditCard,
      title: "Cobros por WhatsApp",
      description: "Con el adicional de cobros envías links de pago para repuestos, accesorios o abonos.",
      modules: [M.cobros],
    },
  ],
  journey: {
    title: "Del taller al próximo mantenimiento",
    steps: [
      { title: "El ciclista escribe", description: "Pide un turno para revisar su bicicleta." },
      { title: "Agenda su cita", description: "El agente de IA le ofrece los horarios libres del taller y la registra." },
      { title: "El taller la confirma", description: "La cita pasa a confirmada y luego a completada." },
      { title: "Recordatorio", description: "Tiempo después, una plantilla le recuerda su siguiente mantenimiento." },
    ],
  },
  consulting: [
    "Te ayudamos a montar el catálogo con tus referencias, organizar la agenda del taller y preparar las plantillas de recordatorio.",
    "Además definimos cómo repartir la atención entre ventas y taller, y capacitamos a tu equipo.",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar mis bicicletas y repuestos por WhatsApp?",
      answer:
        "Sí, con el catálogo de crear.chat, disponible desde el plan Crecimiento: hasta 1.000 productos en Crecimiento, 10.000 en PRO e ilimitados en Elite. Puedes cargarlos desde Excel.",
    },
    {
      question: "¿Se pueden agendar las citas del taller por WhatsApp?",
      answer:
        "Sí, con la agenda: defines la disponibilidad semanal y las citas se registran a mano o mediante el agente de IA durante la conversación.",
    },
    {
      question: "¿Puedo recordarles a mis clientes el mantenimiento?",
      answer:
        "Sí, con plantillas aprobadas por Meta, desde el plan Crecimiento, a clientes que aceptaron recibir tus mensajes.",
    },
    {
      question: "¿Ventas y taller pueden atender el mismo número?",
      answer:
        "Sí. Cada plan incluye varios agentes humanos y las conversaciones se asignan a quien corresponde.",
    },
    {
      question: "¿Puedo cobrar por WhatsApp?",
      answer: "Sí, con el adicional Cobros por WhatsApp, que envía links de pago dentro de la conversación.",
    },
  ],
  cta: {
    title: "Vende más y que tus clientes vuelvan al taller",
    text: "Te mostramos cómo funcionarían el catálogo y la agenda del taller de tu almacén en crear.chat.",
  },
};
