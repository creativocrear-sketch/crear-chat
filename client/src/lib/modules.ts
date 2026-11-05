import {
  BarChart3,
  Bot,
  CreditCard,
  FileText,
  Megaphone,
  MessageCircle,
  Package,
  Plug,
  Repeat,
  Shuffle,
  Sparkles,
  Tag,
  Users,
  Wand2,
  Workflow,
  Zap,
  Boxes,
  Webhook,
  type LucideIcon,
} from "lucide-react";

/**
 * Directorio de funcionalidades de crear.chat.
 * La disponibilidad sale de la matriz de planes de la aplicación (ver lib/plans.ts).
 * "Adicional" = se agrega en "Crea tu plan".
 */

export type Availability = "Todos los planes" | "Desde Crecimiento" | "Desde PRO" | "Adicional";

export type ModuleItem = {
  name: string;
  title: string;
  description: string;
  benefit: string;
  href: string;
  icon: LucideIcon;
  availability?: Availability;
};

export type ModuleGroup = { id: string; title: string; intro: string; items: ModuleItem[] };

export const MODULE_GROUPS: ModuleGroup[] = [
  {
    id: "comunicacion",
    title: "Comunicación y atención",
    intro: "Los canales y herramientas con los que tu equipo conversa con los clientes.",
    items: [
      {
        name: "WhatsApp Business API",
        title: "Atiende por la API oficial de WhatsApp",
        description:
          "Conecta el número de tu empresa a la API oficial de WhatsApp y atiende desde crear.chat junto con Instagram y Facebook Messenger.",
        benefit: "Varios asesores atienden el mismo número sin compartir un celular.",
        href: "/modulos/whatsapp-business-api",
        icon: MessageCircle,
        availability: "Todos los planes",
      },
      {
        name: "Plantillas",
        title: "Mensajes aprobados por Meta",
        description:
          "Crea plantillas de WhatsApp aprobadas por Meta para iniciar conversaciones, enviar avisos y retomar contacto con tus clientes.",
        benefit: "Escribe primero a tus clientes cumpliendo las políticas de WhatsApp.",
        href: "/modulos/whatsapp-business-api",
        icon: FileText,
        availability: "Desde Crecimiento",
      },
      {
        name: "Difusiones y campañas",
        title: "Envíos a listas de contactos",
        description:
          "Programa difusiones a listas de contactos para promociones, lanzamientos o recordatorios: 20 al mes en Crecimiento, 100 en PRO e ilimitadas en Elite.",
        benefit: "Llega a muchos clientes a la vez sin enviar mensaje por mensaje.",
        href: "/modulos/whatsapp-business-api",
        icon: Megaphone,
        availability: "Desde Crecimiento",
      },
      {
        name: "Remarketing",
        title: "Vuelve a impactar a quien ya te conoce",
        description: "Segmenta los contactos de tus campañas anteriores para volver a escribirles con un mensaje pensado para ellos.",
        benefit: "Aprovecha mejor las campañas que ya hiciste.",
        href: "/modulos/whatsapp-business-api",
        icon: Repeat,
        availability: "Adicional",
      },
      {
        name: "Asignación de conversaciones",
        title: "Cada chat con la persona indicada",
        description:
          "Reparte las conversaciones entre los agentes humanos de tu equipo para que cada cliente sea atendido por quien corresponde.",
        benefit: "Ningún cliente se queda sin respuesta ni es atendido dos veces.",
        href: "/modulos/whatsapp-business-api",
        icon: Shuffle,
      },
      {
        name: "Respuestas rápidas",
        title: "Atajos de texto para tu equipo",
        description: "Guarda las respuestas que más usas (horarios, precios, ubicación) y envíalas con un atajo.",
        benefit: "Respuestas más rápidas y consistentes entre asesores.",
        href: "/modulos/whatsapp-business-api",
        icon: Zap,
        availability: "Todos los planes",
      },
    ],
  },
  {
    id: "gestion-comercial",
    title: "Gestión comercial",
    intro: "Tus clientes organizados para darles seguimiento y vender mejor.",
    items: [
      {
        name: "CRM",
        title: "La relación con cada cliente en un solo lugar",
        description:
          "Une las conversaciones con la información de cada cliente para hacer seguimiento comercial desde el mismo lugar donde atiendes.",
        benefit: "Sabes en qué va cada cliente sin buscar en chats ni en hojas de cálculo.",
        href: "/modulos/crm",
        icon: Users,
        availability: "Todos los planes",
      },
      {
        name: "Contactos",
        title: "Base de contactos con historial",
        description:
          "Cada persona que te escribe queda registrada con su historial de conversaciones. La capacidad va de 500 a 5.000 contactos según el plan.",
        benefit: "Tu base de clientes crece ordenada con cada conversación.",
        href: "/modulos/crm",
        icon: Users,
        availability: "Todos los planes",
      },
      {
        name: "Etiquetas",
        title: "Clasifica conversaciones con colores",
        description:
          "Marca conversaciones y contactos según su estado o interés: cliente nuevo, cotización enviada, pedido pendiente.",
        benefit: "Encuentras y priorizas a los clientes en segundos.",
        href: "/modulos/crm",
        icon: Tag,
        availability: "Desde Crecimiento",
      },
    ],
  },
  {
    id: "inteligencia-automatizacion",
    title: "Inteligencia y automatización",
    intro: "IA y flujos que responden, ordenan y apoyan a tu equipo.",
    items: [
      {
        name: "Agentes de IA",
        title: "IA que atiende a cualquier hora",
        description:
          "Agentes de inteligencia artificial que responden las consultas de tus clientes 24/7, también cuando tu equipo no está conectado.",
        benefit: "Tus clientes reciben respuesta aunque sea de noche o fin de semana.",
        href: "/modulos/inteligencia-artificial",
        icon: Bot,
        availability: "Todos los planes",
      },
      {
        name: "Asistente de IA",
        title: "Sugerencias de respuesta en tiempo real",
        description: "Mientras tu asesor atiende, el asistente de IA le sugiere respuestas que puede revisar, ajustar y enviar.",
        benefit: "Tu equipo responde más rápido y con mejor redacción.",
        href: "/modulos/inteligencia-artificial",
        icon: Sparkles,
        availability: "Todos los planes",
      },
      {
        name: "Flujos de chatbot",
        title: "Respuestas automáticas por palabra clave",
        description:
          "Diseña flujos que se activan con palabras clave para dar la bienvenida, mostrar opciones y orientar al cliente. De 3 flujos en Inicio a ilimitados en Elite.",
        benefit: "Las preguntas repetitivas se resuelven solas.",
        href: "/modulos/automatizacion-chatbot",
        icon: Workflow,
        availability: "Todos los planes",
      },
      {
        name: "Automatización de procesos",
        title: "Menos tareas manuales",
        description:
          "Combina flujos de chatbot, IA e integraciones para que la información de las conversaciones llegue sola a donde tu empresa la necesita.",
        benefit: "Tu equipo dedica más tiempo a vender y menos a copiar datos.",
        href: "/modulos/automatizacion-chatbot",
        icon: Wand2,
      },
    ],
  },
  {
    id: "productos-comercio",
    title: "Productos y comercio",
    intro: "Lo que vendes, listo para mostrarlo y cobrarlo en la conversación.",
    items: [
      {
        name: "Catálogo e inventario",
        title: "Tus productos en una página pública",
        description:
          "Publica tu catálogo en una página para compartir con tus clientes: hasta 1.000 productos en Crecimiento, 10.000 en PRO e ilimitados en Elite.",
        benefit: "Tus clientes ven lo que vendes sin que envíes fotos una por una.",
        href: "/modulos/catalogo-inventario",
        icon: Package,
        availability: "Desde Crecimiento",
      },
      {
        name: "Gestión de productos",
        title: "Productos e inventario organizados",
        description: "Administra la información de tus productos y su inventario desde la misma plataforma donde atiendes.",
        benefit: "Respondes sobre disponibilidad con información al día.",
        href: "/modulos/catalogo-inventario",
        icon: Boxes,
        availability: "Desde Crecimiento",
      },
      {
        name: "Cobros por WhatsApp",
        title: "Links de pago en la conversación",
        description: "Envía links de pago a tus clientes dentro de la conversación para que completen la compra sin salir del chat.",
        benefit: "Cierras la venta en el mismo canal donde empezó.",
        href: "/modulos/catalogo-inventario",
        icon: CreditCard,
        availability: "Adicional",
      },
    ],
  },
  {
    id: "integraciones",
    title: "Integraciones",
    intro: "Conecta crear.chat con las herramientas que tu empresa ya usa.",
    items: [
      {
        name: "Google Sheets",
        title: "Datos de las conversaciones en tus hojas de cálculo",
        description: "Conecta crear.chat con Google Sheets para que la información de la atención quede en hojas de cálculo que tu equipo ya sabe usar.",
        benefit: "Tus reportes se alimentan sin copiar y pegar.",
        href: "/integraciones",
        icon: FileText,
        availability: "Desde PRO",
      },
      {
        name: "Zapier",
        title: "Conexión con miles de aplicaciones",
        description: "Usa Zapier para conectar crear.chat con otras aplicaciones y automatizar tareas entre ellas sin programar.",
        benefit: "Automatizas procesos entre herramientas distintas.",
        href: "/integraciones",
        icon: Plug,
        availability: "Desde PRO",
      },
      {
        name: "Make",
        title: "Escenarios de automatización visuales",
        description: "Diseña en Make escenarios que conectan crear.chat con tus sistemas y servicios.",
        benefit: "Flujos más elaborados entre plataformas.",
        href: "/integraciones",
        icon: Workflow,
        availability: "Desde PRO",
      },
      {
        name: "Slack",
        title: "Avisos para tu equipo interno",
        description: "Conecta crear.chat con Slack para que tu equipo reciba información de la atención donde ya se comunica.",
        benefit: "Tu equipo se entera a tiempo de lo importante.",
        href: "/integraciones",
        icon: MessageCircle,
        availability: "Desde PRO",
      },
      {
        name: "Webhook genérico",
        title: "Conexión con tus propios sistemas",
        description: "Conecta crear.chat con sistemas propios o de terceros, como un ERP o una aplicación de tu empresa, mediante webhooks.",
        benefit: "Integras la plataforma con desarrollos a la medida.",
        href: "/integraciones",
        icon: Webhook,
        availability: "Desde PRO",
      },
    ],
  },
  {
    id: "control",
    title: "Control y seguimiento",
    intro: "Información para saber cómo va la atención y tomar decisiones.",
    items: [
      {
        name: "Reportes y analítica",
        title: "Métricas de rendimiento del equipo",
        description: "Consulta reportes y estadísticas de la actividad de atención para hacer seguimiento a tu equipo.",
        benefit: "Decides con datos y no con suposiciones.",
        href: "/modulos/reportes-analitica",
        icon: BarChart3,
        availability: "Desde Crecimiento",
      },
    ],
  },
];
