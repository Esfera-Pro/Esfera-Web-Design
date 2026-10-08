# Plan de mejora SEO y visibilidad para agentes de IA — esfera.ai

Fecha: 2026-10-08 · Repo: `Esfera-Web-Design` · Deploy: GitHub Pages (esfera.ai)

## Diagnóstico (estado actual)

- **SPA pura de Vite + React**: el HTML inicial solo contiene el `<head>`; todo el contenido
  se genera con JavaScript. Los rastreadores que no ejecutan JS (la mayoría de agentes de IA:
  GPTBot, ClaudeBot, PerplexityBot…) ven una página vacía. Googlebot renderiza JS, pero con
  retraso y menor fiabilidad.
- Metadatos con margen de mejora: title de 66 caracteres, description de ~195 (Google corta
  en ~155-160), og:title con mensaje distinto al title, keywords inútiles, `lang="es"` genérico.
- **Microdata inválida**: `applicationCategory` contiene frases de marketing en vez de una
  categoría válida, y además solo existe tras ejecutar JS (no la ve ningún crawler sin JS).
- Ya existe: `robots.txt` (genérico), `sitemap.xml` (le falta `/legal`), OG/Twitter cards,
  canonical, un solo `<h1>` y estructura h2/h3 razonable, FAQ con 6 preguntas reales.
- Copy en voseo rioplatense ("Empezá", "Gestioná", "Usá").
- Falta: JSON-LD, `llms.txt`, versión en inglés, páginas por tema, dirección completa de la
  empresa (footer solo dice "33131, Miami, Florida").

## Objetivo

1. Que buscadores y agentes de IA **vean el contenido completo sin ejecutar JavaScript**.
2. Mejorar metadatos y datos estructurados (Google + LLMs).
3. Ampliar superficie SEO con páginas por tema y versión en inglés.

## Decisiones tomadas (con Fer)

| Decisión | Elección |
|---|---|
| Enfoque técnico | **Prerender con Vite+React** (sin cambiar de framework ni de hosting) |
| Estructura | **Multi-página desde el inicio** (/precios, /implementacion, /funcionalidades) |
| Idioma | **Español neutro (es-419) + versión en inglés con hreflang** |
| Alcance | **Plan + implementación completa** |

## Fase 1 — Prerender (el fix crítico)

- Script `scripts/prerender.mjs` con Puppeteer: tras `vite build`, sirve `dist/` con
  `vite preview`, abre cada ruta en un Chromium headless, espera a que React monte y
  guarda el HTML resultante como archivo estático por ruta (`dist/precios/index.html`, …).
- Se fuerza visibilidad de elementos animados con framer-motion (opacity inicial 0 → 1)
  para que el HTML capturado quede limpio.
- `npm run build` queda como: `tsc -b && vite build && node scripts/prerender.mjs && cp dist/index.html dist/404.html`.
- Workflow de GitHub Pages: caché de Chromium de Puppeteer para no re-descargarlo en cada deploy.
- Resultado: cada URL pública existe como HTML real en GitHub Pages. El JS sigue cargando
  para los usuarios (SPA normal, hidratación re-render), pero ya no es requisito para ver contenido.

## Fase 2 — Metadatos y datos estructurados

- `index.html` reducido a lo esencial; cada página define su propio `<title>`, description,
  canonical, OG/Twitter y `hreflang` (React 19 los sube al `<head>`; el prerender los captura).
- Títulos ≤ 60 caracteres con keyword al inicio; descriptions ≤ 160; og:title unificado con
  el mensaje "Gratis para empezar, implementación opcional desde USD 2.500" (evita el ambiguo
  "pago para implementar").
- Se elimina la microdata inválida y se reemplaza por **JSON-LD**:
  - `Organization` (todas las páginas): nombre, logo, **dirección completa (2 S Biscayne Blvd
    Ste 3200, Miami, FL 33131, EE. UU.)**, email, redes (`sameAs`).
  - `WebSite` + `SoftwareApplication` (home y funcionalidades): categoría válida
    (`BusinessApplication`), offers USD 0 y desde USD 2.500.
  - `FAQPage` (home y precios): las 6 preguntas reales.
  - `Service` (implementación): servicio B2B con offer desde USD 2.500.
- `lang="es-419"` en páginas ES y `lang="en"` en páginas EN (lo fija el código y lo captura el prerender).

## Fase 3 — Multi-página

- **Home** (se mantiene reconocible): Hero + Qué es (los dos caminos) + Casos de uso +
  Modelo comercial + FAQ + CTA final. Las secciones profundas (módulos, pantallas, plataforma,
  flujo, IA) migradas a su propia página. Anclas antiguas (`#modulos`, `#flujo`, `#ia`)
  redirigen a la página nueva para no romper enlaces existentes.
- **/funcionalidades**: módulos de obra, capturas reales, plataforma (permisos/reportes/alertas),
  flujo de trabajo y chat de IA.
- **/precios**: los tres niveles reales según ToS — plan gratuito (1 empresa, 1 proyecto,
  100 MB, presupuestos ilimitados), addon **Esfera Plus USD 30/mes** (multiempresa/multiproyecto,
  10 GB), e **implementación profesional desde USD 2.500**. + FAQ de precios.
- **/implementacion**: servicio B2B — qué incluye, proceso, desde USD 2.500, cotización por alcance.
- `/legal`, `/privacidad`, `/terminos` se conservan (solo español) y se agregan al sitemap.
- Navbar y footer enlazan las páginas nuevas.

## Fase 4 — Español neutro + inglés

- De-voseo de todo el copy ("Empezá"→"Empieza", "Gestioná"→"Gestiona", "Usá"→"Usa", "Podés"→"Puedes").
- Contenido bilingüe mediante archivos de contenido por idioma (`src/i18n/es.ts`, `src/i18n/en.ts`)
  + contexto de React; las páginas EN viven bajo `/en/`, `/en/pricing`, `/en/implementation`,
  `/en/features`.
- `hreflang` es ↔ en + `x-default` (es) en cada página y en el sitemap.
- Las legales permanecen en español (es la versión contractual); las páginas EN enlazan a ellas.

## Fase 5 — Archivos para crawlers y datos de empresa

- `robots.txt`: se mantiene `Allow: /` y se explicitan los bots de IA relevantes
  (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot,
  Google-Extended, Applebot-Extended, CCBot, Bytespider) + Sitemap.
- `sitemap.xml`: todas las URLs ES/EN con alternates `xhtml:link` (hreflang) y lastmod.
- `llms.txt`: resumen en Markdown de qué es Esfera AI, modelo (gratis / Plus USD 30/mes /
  implementación desde USD 2.500), módulos, enlaces clave y datos de la empresa.
- **Dirección completa de Esfera Solutions LLC** (2 S Biscayne Blvd Ste 3200, Miami, FL 33131,
  United States) en: footer, sección de contacto de Términos (punto 20), intro legal y
  JSON-LD `Organization`.

## Fase 6 — Verificación

- Local: `npm run build` + prerender → inspección de `dist/**/index.html` (contenido, meta,
  JSON-LD, hreflang presentes sin JS).
- QA visual con navegador del sitio compilado (ES y EN, navegación, anclas, CTAs).
- Pendiente del lado de Fer (post-deploy):
  - Google Search Console: enviar sitemap nuevo + "Inspección de URL" (ver HTML renderizado).
  - Probar `curl -s https://esfera.ai/ | grep -i presupuest` para confirmar contenido sin JS.
  - Pedir a un asistente con web browsing que resuma esfera.ai y comparar.

## Riesgos y notas

- El prerender añade ~1-2 min al build de CI (descarga de Chromium; mitigado con caché).
- La home pierde los IDs `#modulos/#flujo/#ia` al moverlos de página; se redirigen en el
  enrutador para no romper enlaces viejos (docs, YouTube, WhatsApp).
- Las URLs de subpáginas se publican con barra final (`/precios/`) porque GitHub Pages sirve
  `directorio/index.html`; canonical y sitemap usan esa forma.
- No se traducen los textos legales (riesgo jurídico); solo marketing.
