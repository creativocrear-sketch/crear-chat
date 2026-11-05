import { Helmet } from "react-helmet-async";
import { COMPANY, SITE_URL } from "@/lib/site";

const DEFAULT_IMAGE = `${SITE_URL}/og-crear-chat.png`;

type Props = {
  title: string;
  description: string;
  /** Ruta canónica de la página, por ejemplo "/planes". */
  path: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
};

/** Metadatos SEO de cada página: title, description, canonical, Open Graph y datos estructurados. */
export default function Seo({ title, description, path, image = DEFAULT_IMAGE, type = "website", jsonLd, noindex }: Props) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="es-CO" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content={COMPANY.platformName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
