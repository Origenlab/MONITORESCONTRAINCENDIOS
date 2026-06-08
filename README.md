# AQUEON — monitorescontraincendios.com

Copia local estática del sitio en producción (descargado 2026-06-07 desde Cloudflare).

## Estructura

```
index.html          Página única (one-page landing)
css/styles.css      Estilos
js/main.js          JavaScript del sitio
images/             29 imágenes .webp
cf-fonts/           Fuentes Inter y Space Grotesk (woff2, servidas offline)
favicon.ico
site.webmanifest
```

## Ver localmente

```bash
cd MONITORESCONTRAINCENDIOS
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Limpieza aplicada al descargar

- Eliminados scripts inyectados por Cloudflare (rocket-loader, email-decode).
- Emails ofuscados (`[email protected]`) restaurados a `contacto@aqueon.com.mx`.
- Rutas convertidas a relativas — funciona sin servidor remoto.

## Hallazgos / pendientes en producción

- **Enlaces rotos (404)**: el footer enlaza a `/blog`, `/recursos`, `/aviso-de-privacidad` y `/terminos-y-condiciones`, pero esas páginas NO existen en producción.
- **Favicons PNG faltantes (404)**: el `<head>` referencia `apple-touch-icon.png`, `favicon-16x16.png` y `favicon-32x32.png` que no existen en producción (solo existe `favicon.ico`).
- **Canonical y Open Graph** apuntan a `https://aqueon.com.mx/` (no a monitorescontraincendios.com) — revisar estrategia SEO de dominio.
- Redes sociales del header/footer apuntan a `#` (placeholders).
- Teléfono `+52 55 1234 5678` parece placeholder.
- El sitio en producción es un Worker de Cloudflare (Astro SSR, script `lgacontraincendios`); esta copia es la versión renderizada estática.
