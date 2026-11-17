/**
 * Avisa a los buscadores compatibles con IndexNow (Bing, Yandex, Seznam, Naver…) que las páginas
 * del sitio cambiaron, para que las vuelvan a rastrear sin esperar.
 *
 * Lo ejecuta .github/workflows/indexnow.yml cuando Vercel termina de publicar en producción.
 * La clave es pública por diseño: está publicada en https://crear.chat/<clave>.txt
 */
const SITE = "https://crear.chat";
const KEY = "2d715fc4946209849ee18c3b50efd3a1";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

// Confirma que la clave ya está publicada; si no, IndexNow rechazaría el aviso.
const keyResponse = await fetch(KEY_LOCATION);
const publishedKey = (await keyResponse.text()).trim();
if (!keyResponse.ok || publishedKey !== KEY) {
  console.error(`La clave no está publicada en ${KEY_LOCATION} (estado ${keyResponse.status}).`);
  process.exit(1);
}

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) {
  console.error("El sitemap no tiene direcciones.");
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// 200 = recibido; 202 = recibido, la clave se valida después.
console.log(`IndexNow respondió ${response.status} para ${urlList.length} direcciones.`);
if (response.status !== 200 && response.status !== 202) {
  console.error(await response.text());
  process.exit(1);
}
