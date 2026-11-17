import SectorPageTemplate from "@/components/site/SectorPageTemplate";
import { SECTORS, SECTOR_BY_SLUG } from "@/content/sectores";
import NotFound from "./NotFound";

/** Página de un sector (/sectores/:slug). */
export default function SectorDetalle({ params }: { params: { slug: string } }) {
  const data = SECTOR_BY_SLUG[params.slug];
  if (!data) return <NotFound />;
  return <SectorPageTemplate data={data} others={SECTORS.filter((s) => s.slug !== data.slug)} />;
}
