import { camarasDeComercio } from "./camaras-de-comercio";
import { hoteles } from "./hoteles";
import { restaurantes } from "./restaurantes";
import { almacenesDeBicicletas } from "./almacenes-de-bicicletas";
import { ipsSalud } from "./ips-salud";
import type { SectorPageData } from "./types";

/** Sectores con los que trabaja hoy Crear Comunicaciones, en el orden en que se muestran. */
export const SECTORS: SectorPageData[] = [camarasDeComercio, hoteles, restaurantes, almacenesDeBicicletas, ipsSalud];

export const SECTOR_BY_SLUG: Record<string, SectorPageData> = Object.fromEntries(SECTORS.map((s) => [s.slug, s]));
