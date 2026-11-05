import ModulePageTemplate from "@/components/site/ModulePageTemplate";
import { INTEGRATIONS_PAGE, MODULE_PAGES } from "@/content/modulos";
import NotFound from "./NotFound";

/** Página de un módulo (/modulos/:slug). */
export default function ModuloDetalle({ params }: { params: { slug: string } }) {
  const data = MODULE_PAGES[params.slug];
  if (!data) return <NotFound />;
  return <ModulePageTemplate data={data} />;
}

/** Página de integraciones (/integraciones), con la misma estructura que los módulos. */
export function Integraciones() {
  return <ModulePageTemplate data={INTEGRATIONS_PAGE} />;
}
