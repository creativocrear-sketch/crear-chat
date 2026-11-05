/**
 * Planes de crear.chat. Fuente: matriz "Planes y Precios" de la plataforma (captura de noviembre de 2026).
 * Precios mensuales en pesos colombianos, sin IVA.
 */

export type PlanId = "inicio" | "crecimiento" | "pro" | "elite";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  contacts: number;
  humanAgents: number;
  channels: string;
  chatbotFlows: string;
  aiResponses: string;
};

export const PLANS: Plan[] = [
  {
    id: "inicio",
    name: "Inicio",
    price: 156000,
    contacts: 500,
    humanAgents: 2,
    channels: "1 canal a elegir",
    chatbotFlows: "3 flujos de chatbot",
    aiResponses: "500 respuestas IA al mes",
  },
  {
    id: "crecimiento",
    name: "Crecimiento",
    price: 236000,
    contacts: 1500,
    humanAgents: 5,
    channels: "3 canales",
    chatbotFlows: "20 flujos de chatbot",
    aiResponses: "3.000 respuestas IA al mes",
  },
  {
    id: "pro",
    name: "PRO",
    price: 316000,
    contacts: 2500,
    humanAgents: 7,
    channels: "3 canales",
    chatbotFlows: "100 flujos de chatbot",
    aiResponses: "15.000 respuestas IA al mes",
  },
  {
    id: "elite",
    name: "Elite",
    price: 600000,
    contacts: 5000,
    humanAgents: 10,
    channels: "3 canales",
    chatbotFlows: "Flujos de chatbot ilimitados",
    aiResponses: "Respuestas IA ilimitadas",
  },
];

/** Canales disponibles en la plataforma. El plan Inicio permite elegir uno de los tres. */
export const CHANNELS = ["WhatsApp Business API", "Instagram", "Facebook Messenger"];

export const PLANS_NOTE =
  "En el plan Inicio eliges un canal: WhatsApp Business API, Instagram o Facebook Messenger; los demás planes incluyen los tres. Precios en pesos colombianos, no incluyen IVA. Facturación mensual.";

export function formatCop(value: number) {
  return `$${value.toLocaleString("es-CO")}`;
}

export function formatNumber(value: number) {
  return value.toLocaleString("es-CO");
}

/** Valor de una celda de la matriz: true = incluido, false = no incluido, texto = límite o detalle. */
export type MatrixValue = boolean | string;

export type MatrixRow = { label: string; values: [MatrixValue, MatrixValue, MatrixValue, MatrixValue] };

export type MatrixGroup = { title: string; rows: MatrixRow[] };

/** Matriz de funcionalidades, en el mismo orden que la aplicación (Inicio, Crecimiento, PRO, Elite). */
export const PLAN_MATRIX: MatrixGroup[] = [
  {
    title: "Omnicanalidad",
    rows: [
      { label: "Contactos", values: ["500", "1.500", "2.500", "5.000"] },
      {
        label: "Canales (WhatsApp, Instagram, Messenger)",
        values: ["1 a elegir", "Los 3", "Los 3", "Los 3"],
      },
    ],
  },
  {
    title: "Funcionalidades",
    rows: [
      { label: "Módulo de contactos", values: [true, true, true, true] },
      { label: "Agentes de IA", values: [true, true, true, true] },
      { label: "Asistente de IA", values: [true, true, true, true] },
      { label: "Catálogo e inventario", values: [false, "1.000 productos", "10.000 productos", "Ilimitado"] },
      { label: "Hosting", values: [true, true, true, true] },
      { label: "Plantillas", values: [false, true, true, true] },
      { label: "Difusiones", values: [false, "20 al mes", "100 al mes", "Ilimitadas"] },
      { label: "Respuestas rápidas", values: [true, true, true, true] },
      { label: "Etiquetas", values: [false, true, true, true] },
      { label: "Flujos de chatbot", values: ["3 flujos", "20 flujos", "100 flujos", "Ilimitados"] },
      { label: "Respuestas de IA", values: ["500 al mes", "3.000 al mes", "15.000 al mes", "Ilimitadas"] },
      { label: "Integraciones", values: [false, false, true, true] },
    ],
  },
  {
    title: "Equipo y soporte",
    rows: [
      { label: "Agentes humanos", values: ["2", "5", "7", "10"] },
      { label: "Reportes", values: [false, true, true, true] },
      { label: "Asistencia", values: ["Por IA", "Por IA", "Por IA", "Por IA"] },
    ],
  },
  {
    title: "Adicionales",
    rows: [
      { label: "Configuración", values: ["Opcional", "Opcional", "Opcional", "Opcional"] },
      { label: "Academia de entrenamiento (por horas)", values: ["Opcional", "Opcional", "Opcional", "Opcional"] },
    ],
  },
];

/** "Crea tu plan": precio base mensual y lo que incluye, según la aplicación. */
export const CUSTOM_PLAN = {
  basePrice: 116000,
  included: [
    "WhatsApp",
    "500 contactos",
    "2 agentes humanos",
    "Flujos de chatbot",
    "Respuestas rápidas",
    "Agente de IA",
    "Asistente de IA",
    "Módulo de contactos",
  ],
  addOns: [
    { group: "Canales", items: ["Instagram", "Facebook Messenger"] },
    { group: "Capacidad", items: ["Más contactos (1.000 a 5.000)", "Más agentes humanos (5 a 10)"] },
    { group: "Ventas", items: ["Catálogo e inventario", "Cobros por WhatsApp"] },
    { group: "Campañas", items: ["Plantillas de WhatsApp", "Difusiones masivas", "Remarketing"] },
    { group: "Organización", items: ["Etiquetas", "Reportes y estadísticas"] },
    { group: "Avanzado", items: ["Integraciones"] },
    { group: "Adicionales", items: ["Configuración", "Academia de entrenamiento (por horas)"] },
  ],
};
