/**
 * Pre-renderiza cada página del sitio a HTML estático para que buscadores y asistentes de IA
 * lean el contenido sin ejecutar JavaScript. También genera sitemap.xml y llms.txt.
 *
 * Se ejecuta en `npm run build`, después de `vite build` (cliente) y `vite build --ssr` (servidor).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const { render, PAGES, sitemapXml, llmsTxt } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf-8");

/** React 19 emite al inicio las etiquetas del <head> (title, meta, link); se separan del cuerpo. */
function splitHead(html) {
  const headTag = /^(<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)/;
  let head = "";
  let rest = html;
  let match;
  while ((match = rest.match(headTag))) {
    head += match[0];
    rest = rest.slice(match[0].length);
  }
  return { head, body: rest };
}

async function writePage(urlPath, fileName) {
  const { head, body } = splitHead(await render(urlPath));
  const html = template.replace("<!--app-head-->", head).replace("<!--app-html-->", body);
  const file = path.join(publicDir, fileName);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

for (const page of PAGES) {
  // "/" -> index.html; "/planes" -> planes.html. Con "cleanUrls" en vercel.json, Vercel sirve planes.html en /planes.
  await writePage(page.path, page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`);
}
await writePage("/404", "404.html");

const buildDate = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml(buildDate));
fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxt());

console.log(`Pre-renderizadas ${PAGES.length} páginas + 404, sitemap.xml y llms.txt`);
