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
    channels: "1 canal",
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

export const PLANS_NOTE = "Precios en pesos colombianos. No incluyen IVA. Facturación mensual.";

export function formatCop(value: number) {
  return `$${value.toLocaleString("es-CO")}`;
}

export function formatNumber(value: number) {
  return value.toLocaleString("es-CO");
}
