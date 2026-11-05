import { whatsappBusinessApi } from "./whatsapp-business-api";
import { crm } from "./crm";
import { inteligenciaArtificial } from "./inteligencia-artificial";
import { catalogoInventario } from "./catalogo-inventario";
import { automatizacionChatbot } from "./automatizacion-chatbot";
import { reportesAnalitica } from "./reportes-analitica";
import { integraciones } from "./integraciones";
import type { ModulePageData } from "./types";

/** Páginas de módulo publicadas bajo /modulos/:slug. */
export const MODULE_PAGES: Record<string, ModulePageData> = {
  "whatsapp-business-api": whatsappBusinessApi,
  crm,
  "inteligencia-artificial": inteligenciaArtificial,
  "catalogo-inventario": catalogoInventario,
  "automatizacion-chatbot": automatizacionChatbot,
  "reportes-analitica": reportesAnalitica,
};

export const INTEGRATIONS_PAGE = integraciones;
