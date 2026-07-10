# CHANGELOG SEO — 2026-07-10 (MONITORESCONTRAINCENDIOS)

Alcance TÉCNICO (SOP Prompt Maestro SEO, Ola 3). Dominio canónico: https://monitorescontraincendios.com · Astro 6.1.x · Deploy: GitHub Action → Cloudflare Pages (proyecto `monitorescontraincendios`).

## Cambios aplicados

### 1. Deploy CI apuntaba a PREVIEW, no a producción (hallazgo crítico)
- El proyecto Pages tiene production branch **`production`** (creado por el deploy manual del script de package.json), pero el workflow deployaba con `--branch=main` → cada Action "verde" solo generaba un preview (`main.monitorescontraincendios.pages.dev`) y **el dominio quedó congelado en el deploy manual del 16-jun**.
- Fix: `deploy.yml` ahora usa `--branch=production` → los deploys del CI son producción real. Verificado: dominio actualizado tras el run.

### 2. OG images: webp → espejo JPEG
- Las 47 páginas servían `og:image` en `.webp` (no confiable en Facebook/LinkedIn/WhatsApp).
- `src/layouts/Base.astro`: si la imagen resuelta termina en `.avif/.webp`, se reescribe a `/images/og/<basename>.jpg`. Cubre head OG/Twitter y la `image` del LocalBusiness (mismo valor).
- Generados 17 JPEG 1200×630 (crop cover, quality 82, progressive, optimize) en `public/images/og/`.
- Sin colisiones de basename (todas las fuentes viven en `/images/` plano).

### 3. og:image:type + og:image:alt
- No existían. Agregados en `Base.astro`: `og:image:type` dinámico (jpeg/png/svg según extensión final) y `og:image:alt` = título de página.

### 4. 5 og rotos en frontmatter de blog (archivos inexistentes en public/)
Remapeados a imágenes REALES existentes del mismo tema (sin crear contenido):
- `auditoria-diagnostico-sistemas-…` → `ingenieros-especialistas-monitores-contra-incendios-nfpa.webp`
- `cotizacion-sistema-…` → `almacen-monitores-contra-incendios-industriales-mexico.webp`
- `monitores-contra-incendios-brigadas-bomberos-industriales` → `monitores-contra-incendios-cuerpo-bomberos-emergencias.webp`
- `monitores-contra-incendios-mineria-mexico` → `monitores-contra-incendios-industria-minera.webp`
- `monitores-contra-incendios-planta-quimica-petroquimica-atex` → `monitores-contra-incendios-planta-petroquimica.webp`

### 5. Sitemap lastmod real
- El sitemap no emitía `lastmod` en absoluto. `astro.config.mjs`: resolver URL→archivo fuente (`src/pages` + colección `blog`) → `git log -1 --format=%cI` (cache Map, ROOT = `process.cwd()`, fallback mtime, omite si no resuelve).
- `deploy.yml`: `fetch-depth: 0` en checkout (sin esto git log daría la fecha del HEAD para todo).
- Resultado: 47/47 URLs con lastmod, 22 fechas únicas (fechas git reales).

### 6. Logo schema con dimensiones reales
- `Organization.logo` era string URL → ahora `ImageObject` con width/height reales (180×180, verificado con PIL). Igual en el `publisher.logo` de BlogPosting.

## Hallazgos SIN acción (con razón)
- **www**: ya resuelve 301 → non-www a nivel Cloudflare. No se creó `_redirects` (innecesario).
- **aggregateRating**: cero en src y dist — no hay nada fabricado que remover en este sitio.
- **Product @graph** en las 4 páginas de producto (catálogo de modelos, sin offers, sin duplicar Service): estructura intencional de catálogo, fuera del patrón "Service+Product duplicado". No se tocó.
- **Service JSON-LD** en las 6 L3 de servicio (commit 53a2e9e): sin offers, correcto. No se tocó.
- **NAP placeholder** (tel `+52-55-1234-5678`, dirección Reforma 505, sameAs LinkedIn/Facebook no verificados): datos de negocio EXISTENTES — fuera de alcance técnico, ya señalado en README. Pendiente de datos reales del cliente.
- Breadcrumbs correctos (home 0, resto máx 1). JSON-LD en bloques `<script>` separados y válidos.
- robots.txt live = repo (Cloudflare no lo pisa). GH Pages: sin zombis en Origenlab ni Frankoropeza. 404 real (sin SPA-fallback).
- `AGENTS.md` untracked ajeno en el working tree: no se commiteó.

## Pendientes manuales (dashboard)
- Ninguno bloqueante. Opcional: Redirect Rule explícita www→apex ya no es necesaria (301 activo).
- Decisión de portafolio: homologar el production branch del proyecto Pages a `main` en el dashboard si se quiere volver al pipeline canónico (`--branch=main`); mientras tanto el workflow documenta el porqué de `--branch=production`.

## Validación live (2026-07-10, post-deploy run 29122053468 verde)
- `og:image` home y blog → `/images/og/*.jpg` ✓ · JPEG 200 `image/jpeg` ✓
- `og:image:type` = image/jpeg y `og:image:alt` presentes ✓
- Sitemap live: 47 lastmod, 22 fechas únicas ✓
- www → 301 apex ✓ · Dominio = deploy de producción actualizado ✓

Commits: `35cef97` (fixes SEO) · `ab5ba90` (fix deploy CI a producción).
