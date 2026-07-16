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

---

## Sesión 2 (2026-07-10) — regla de datos afinada + _redirects

Aplica la regla afinada "cero contenido fabricado ≠ borrar NAP real": mantener NAP real y consistente on-page; remover SOLO lo fabricado (sameAs adivinados, ratings/reseñas inventadas, conteos falsos); OMITIR el NAP cuando es claramente placeholder/scaffold. Ediciones quirúrgicas, sin refactor. **No se reconstruyó dist** (build ARM64 no disponible en la VM): el fix vive en el source y toma efecto en el próximo build del CI. Validación estática: parseo/eval de los JSON-LD editados + grep.

### 7. Schema con datos PLACEHOLDER/FABRICADOS removidos (`src/layouts/Base.astro`)
La sesión 1 dejó el NAP como "fuera de alcance". Bajo la regla afinada sí entra, porque los datos son demostrablemente placeholder/fabricados (verificado on-page):
- **`sameAs` (LinkedIn/Facebook) → REMOVIDO**: los perfiles sociales están enlazados como `href="#"` en `Footer.astro` y `TopBar.astro` (no hay perfil real); las URLs del schema (`/company/aqueon-mexico`, `/aqueonmexico`) eran handles adivinados. Fabricado → fuera del `Organization`.
- **Teléfono `+52-55-1234-5678` → REMOVIDO** de `Organization.contactPoint` y `LocalBusiness.telephone`: número secuencial placeholder (aparece idéntico 24× on-page, es scaffold, no un teléfono real).
- **Dirección "Av. Paseo de la Reforma 505, Piso 15 / Torre Mayor" → REMOVIDA** de ambos schemas: dirección scaffold (edificio genérico + CP 06500), pareada con el teléfono falso.
- **Conservado (real/consistente on-page, NO fabricado)**: `Organization` name/alternateName/url/logo(ImageObject 180×180)/description; `LocalBusiness` name/url/image/priceRange/email (`contacto@aqueon.com.mx`, uniforme 17× on-page)/openingHours (Lun-Vie 8-18, coincide con contacto.astro)/areaServed (México).
- Validado: ambos objetos evalúan y serializan a JSON sin error; ninguna clave fabricada queda (`address`/`contactPoint`/`sameAs`/`telephone`).

### 8. `public/_redirects` CREADO (no existía)
La sesión 1 lo omitió ("301 ya activo en Cloudflare"). Se crea igual por portabilidad y como fuente de verdad en repo (convención de portafolio: EVENTECH/EQUIPOSCONTRAINCENDIO/MANEXT lo tienen):
- 1ª línea: `https://www.monitorescontraincendios.com/* https://monitorescontraincendios.com/:splat 301` (www→apex, preserva ruta+query).
- 2ª regla: `/sitemap.xml /sitemap-index.xml 301` (alias; @astrojs/sitemap genera `sitemap-index.xml`, robots.txt ya apunta ahí, pero `/sitemap.xml` es la ruta que piden muchos crawlers).

### Verificaciones (dist PRE-edición como baseline)
- `validate-dist.py dist monitorescontraincendios.com` → **LIMPIO**: canonical malos 0, og avif/webp 0, og dim!=1200×630 0, BreadcrumbList>1 **0**, aggregateRating **0**, Product 12 (catálogo intencional). Nota: la herramienta no chequea sameAs/NAP placeholder — ese hallazgo es de la regla afinada, verificado por grep.
- **BreadcrumbList sin duplicado (confirmado)**: 37 en dist, 0 archivos con >1. La única BreadcrumbList inline vive en `blog/[...slug].astro`; Base.astro emite breadcrumb sólo para slugs L3 (mapa `l3Breadcrumbs`), que NO incluye rutas de blog → nunca coinciden en la misma página. El "Breadcrumb=2" del recon = 2 *emisores* (Base + blog), no 2 en una misma página.
- **Product NO se convierte a Service**: los 4 `productSchema` son `@graph` de modelos físicos (brand `AQUEON México`, sin `offers`, sin ratings); los 6 `serviceSchema` son servicios distintos (provider name+url, sin offers). Catálogo intencional, no duplicación Service+Product. Sin acción (correcto).
- **og:image:width/height** ya presentes en Base.astro (1200/630) junto con type/alt. Sin acción.
- Logo `apple-touch-icon.png` = 180×180 real (verificado con PIL), coincide con el ImageObject del schema.
- 17 JPEG OG en `public/images/og/`, todos 1200×630 (verificado); fallback `monitores-contra-incendios-refineria-petroleo-gas.jpg` presente.

### PROPUESTOS (no aplicados — requieren datos reales del cliente o build)
- **NAP placeholder ON-PAGE** (teléfono `+52 55 1234 5678` en 24 CTAs + legales; dirección Reforma 505 en `contacto.astro`, `aviso-de-privacidad.astro`, `terminos-y-condiciones.astro`; enlaces sociales `href="#"` en Footer/TopBar): es CONTENIDO, no schema, y no se puede fabricar el dato real. Reponer teléfono/dirección/perfiles reales cuando el cliente los entregue, y entonces restaurar `contactPoint`/`address`/`sameAs` en el schema.
- **geo meta** (`geo.position 19.432608;-99.133209`, centroide CDMX): coordenada a nivel ciudad, no es rating/reseña/social fabricado; se deja. Removible si se decide no afirmar ubicación precisa sin dirección real (decisión de contenido).
- **dist desactualizado**: el source quedó corregido pero `dist/` sigue mostrando el schema viejo (con NAP/sameAs) porque no se puede build en esta VM (falta `@rollup/rollup-linux-arm64-gnu`). El fix se materializa en el próximo build del CI (Cloudflare Pages). No declarar "verde" hasta que la Action reconstruya.

### Archivos tocados en Sesión 2
- `src/layouts/Base.astro` (Organization + LocalBusiness: removido sameAs/contactPoint/address/telephone placeholder; conservado NAP real: email/horario/áreaServida).
- `public/_redirects` (NUEVO: www→apex 301 + alias sitemap).
- `CHANGELOG-SEO-2026-07-10.md` (esta sección).
