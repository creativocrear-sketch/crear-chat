#!/usr/bin/env bash
# Respaldo de crear.chat en Cloudflare R2.
#
# Arma backups/production/web-<fecha>.tar.gz con:
#   - repositorio.bundle: el repositorio completo (todas las ramas, etiquetas e historial)
#   - sitio/: el sitio ya generado (dist/public), listo para publicar sin compilar
#   - MANIFIESTO.txt: versión, huellas SHA-256, configuración de Vercel y pasos para restaurar
# Lo sube, lo descarga de nuevo para comparar la huella y conserva solo los últimos 30.
#
# Lo ejecuta .github/workflows/respaldo-r2.yml. Requiere el sitio compilado (npm run build)
# y el historial completo de git.
#
# Variables: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY y R2_BUCKET (por defecto crearchat-web).
# Con SIN_SUBIR=<carpeta> solo arma y verifica el archivo y lo deja en esa carpeta (para pruebas).
set -euo pipefail

BUCKET="${R2_BUCKET:-crearchat-web}"
PREFIJO="backups/production/"
CONSERVAR=30
SELLO="$(date -u +%Y-%m-%dT%H%MZ)"
NOMBRE="web-${SELLO}.tar.gz"
PATRON="^${PREFIJO}web-[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{4}Z\.tar\.gz$"

cd "$(git rev-parse --show-toplevel)"
TRABAJO="$(mktemp -d)"
trap 'rm -rf "$TRABAJO"' EXIT

# --- Comprobaciones previas -------------------------------------------------------------
test -f dist/public/index.html || { echo "Falta el sitio generado: ejecuta npm run build." >&2; exit 1; }
PAGINAS=$(find dist/public -name '*.html' | wc -l)
[ "$PAGINAS" -ge 30 ] || { echo "El sitio generado tiene solo $PAGINAS páginas; se esperaban 30 o más." >&2; exit 1; }

# --- 1. Repositorio completo ------------------------------------------------------------
# Se copian las ramas remotas y locales a un repositorio espejo para que el bundle las tenga
# todas como ramas normales (al clonarlo aparecen todas, no solo la actual).
git init -q --bare "$TRABAJO/espejo.git"
REFS=()
while IFS= read -r ref; do REFS+=("+${ref}:refs/heads/${ref#refs/remotes/origin/}"); done \
  < <(git for-each-ref --format='%(refname)' refs/remotes/origin | grep -v '/HEAD$' || true)
REFS+=("+refs/heads/*:refs/heads/*" "+refs/tags/*:refs/tags/*")
git -c push.negotiate=false push -q "$TRABAJO/espejo.git" "${REFS[@]}"
git -C "$TRABAJO/espejo.git" bundle create -q "$TRABAJO/repositorio.bundle" --all
git -C "$TRABAJO/espejo.git" bundle verify "$TRABAJO/repositorio.bundle" >/dev/null 2>&1 \
  || { echo "El bundle del repositorio no es válido." >&2; exit 1; }
git clone -q --mirror "$TRABAJO/repositorio.bundle" "$TRABAJO/prueba-clon.git"
RAMAS=$(git -C "$TRABAJO/prueba-clon.git" for-each-ref --format='%(refname:short)' refs/heads | sort | tr '\n' ' ')
rm -rf "$TRABAJO/espejo.git" "$TRABAJO/prueba-clon.git"

# --- 2. Sitio generado ------------------------------------------------------------------
cp -r dist/public "$TRABAJO/sitio"

# --- 3. Manifiesto ----------------------------------------------------------------------
COMMIT="$(git rev-parse HEAD)"
HUELLA_BUNDLE="$(sha256sum "$TRABAJO/repositorio.bundle" | cut -d' ' -f1)"
HUELLA_SITIO="$(cd "$TRABAJO/sitio" && find . -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | cut -d' ' -f1)"
cat > "$TRABAJO/MANIFIESTO.txt" <<EOF
RESPALDO DE CREAR.CHAT
======================
Fecha (UTC):        ${SELLO}
Versión publicada:  ${COMMIT}
Commit:             $(git log -1 --format='%s' "$COMMIT")
Ramas incluidas:    ${RAMAS}
Páginas del sitio:  ${PAGINAS}

Huellas SHA-256
  repositorio.bundle  ${HUELLA_BUNDLE}
  sitio/ (conjunto)   ${HUELLA_SITIO}

Configuración de Vercel (no está en el repositorio)
  Proyecto:     crear-chat (equipo creativo-crears-projects), conectado a GitHub creativocrear-sketch/crear-chat, rama master
  Dominio:      crear.chat
  Compilación:  npm run build · salida dist/public · instalación npm install (ver vercel.json, que también tiene cleanUrls y las redirecciones)
  Extras:       Web Analytics activado; las vistas previas tienen Deployment Protection (Vercel Authentication)
  GitHub:       secretos R2_ACCOUNT_ID, R2_ACCESS_KEY_ID y R2_SECRET_ACCESS_KEY para este respaldo

Cómo restaurar
  1. Descomprimir:            tar -xzf ${NOMBRE}
  2. Repositorio completo:    git clone --mirror repositorio.bundle crear-chat.git
                              cd crear-chat.git && git push --mirror https://github.com/<cuenta>/<repositorio>.git
  3. Sitio sin compilar:      publicar el contenido de sitio/ en cualquier hosting estático
                              (en Vercel: activar cleanUrls para servir /planes desde planes.html)
  4. Sitio desde el código:   clonar el repositorio, npm install && npm run build, y conectarlo a Vercel
EOF

# --- 4. Archivo final y verificación ----------------------------------------------------
tar -czf "$TRABAJO/$NOMBRE" -C "$TRABAJO" repositorio.bundle sitio MANIFIESTO.txt
tar -tzf "$TRABAJO/$NOMBRE" > "$TRABAJO/contenido.txt"
grep -qx 'sitio/index.html' "$TRABAJO/contenido.txt" || { echo "El archivo no contiene el sitio." >&2; exit 1; }
HUELLA="$(sha256sum "$TRABAJO/$NOMBRE" | cut -d' ' -f1)"
echo "Respaldo armado: $NOMBRE ($(du -h "$TRABAJO/$NOMBRE" | cut -f1), $PAGINAS páginas, ramas: $RAMAS)"

if [ -n "${SIN_SUBIR:-}" ]; then
  mkdir -p "$SIN_SUBIR" && cp "$TRABAJO/$NOMBRE" "$SIN_SUBIR/"
  echo "SIN_SUBIR: copiado en $SIN_SUBIR/$NOMBRE; no se subió nada a R2."
  exit 0
fi

# --- 5. Subir a R2 y comprobar la copia -------------------------------------------------
: "${R2_ACCOUNT_ID:?Falta R2_ACCOUNT_ID}" "${R2_ACCESS_KEY_ID:?Falta R2_ACCESS_KEY_ID}" "${R2_SECRET_ACCESS_KEY:?Falta R2_SECRET_ACCESS_KEY}"
export AWS_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID" AWS_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY" AWS_DEFAULT_REGION=auto
# R2 no acepta las sumas de verificación que las versiones recientes del AWS CLI envían por defecto.
export AWS_REQUEST_CHECKSUM_CALCULATION=when_required AWS_RESPONSE_CHECKSUM_VALIDATION=when_required
R2=(--endpoint-url "https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com")

aws s3 cp "$TRABAJO/$NOMBRE" "s3://${BUCKET}/${PREFIJO}${NOMBRE}" "${R2[@]}" --only-show-errors
aws s3 cp "s3://${BUCKET}/${PREFIJO}${NOMBRE}" "$TRABAJO/descargado.tar.gz" "${R2[@]}" --only-show-errors
[ "$(sha256sum "$TRABAJO/descargado.tar.gz" | cut -d' ' -f1)" = "$HUELLA" ] \
  || { echo "La copia en R2 no coincide con el archivo local." >&2; exit 1; }
echo "Subido y verificado: s3://${BUCKET}/${PREFIJO}${NOMBRE}"

# --- 6. Rotación: conservar los últimos 30, solo dentro de backups/production/ ------------
mapfile -t RESPALDOS < <(
  aws s3api list-objects-v2 --bucket "$BUCKET" --prefix "${PREFIJO}web-" "${R2[@]}" \
    --query 'Contents[].Key' --output text | tr '\t' '\n' | grep -E "$PATRON" | sort
)
SOBRAN=$(( ${#RESPALDOS[@]} - CONSERVAR ))
if [ "$SOBRAN" -gt 0 ]; then
  for clave in "${RESPALDOS[@]:0:$SOBRAN}"; do
    aws s3 rm "s3://${BUCKET}/${clave}" "${R2[@]}" --only-show-errors
    echo "Borrado por antigüedad: $clave"
  done
fi
echo "Respaldos en R2: $(( ${#RESPALDOS[@]} - (SOBRAN > 0 ? SOBRAN : 0) )) (máximo $CONSERVAR)."
