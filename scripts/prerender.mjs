// Prerrender del sitio: sirve `dist/` con `vite preview`, abre cada ruta en
// Chromium headless y guarda el HTML ya renderizado como archivo estático.
// Así, buscadores y agentes de IA que no ejecutan JavaScript ven todo el
// contenido, los metadatos y el JSON-LD de cada página.
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

// Rutas públicas a prerrenderar. "/" genera dist/index.html; "/404" genera
// dist/404.html (fallback de GitHub Pages para URLs desconocidas).
const ROUTES = [
  { route: "/", file: "index.html" },
  { route: "/precios/", file: "precios/index.html" },
  { route: "/implementacion/", file: "implementacion/index.html" },
  { route: "/funcionalidades/", file: "funcionalidades/index.html" },
  { route: "/legal/", file: "legal/index.html" },
  { route: "/privacidad/", file: "privacidad/index.html" },
  { route: "/terminos/", file: "terminos/index.html" },
  { route: "/en/", file: "en/index.html" },
  { route: "/en/pricing/", file: "en/pricing/index.html" },
  { route: "/en/implementation/", file: "en/implementation/index.html" },
  { route: "/en/features/", file: "en/features/index.html" },
  { route: "/404", file: "404.html" },
];

function startPreviewServer() {
  const viteBin = path.join(__dirname, "..", "node_modules", ".bin", "vite");
  const server = spawn(viteBin, ["preview", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"], {
    cwd: path.join(__dirname, ".."),
    stdio: "ignore",
    detached: false,
  });
  return server;
}

async function waitForServer(timeoutMs = 20000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(`${BASE}/`, { redirect: "manual" });
      if (response.status > 0) return;
    } catch {
      // todavía no está listo
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`vite preview no respondió en ${BASE}`);
}

// Los módulos cargan lazy y las animaciones de entrada de framer-motion dejan
// opacity:0 inline; se fuerza el estado final para capturar HTML limpio.
async function settlePage(page, route) {
  await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForSelector("main h1", { timeout: 15000 });
  await new Promise((resolve) => setTimeout(resolve, 600));
  await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((element) => {
      const style = element.getAttribute("style") || "";
      if (style.includes("opacity")) element.style.opacity = "1";
      if (style.includes("visibility")) element.style.visibility = "visible";
    });
  });
}

// El <noscript> del shell está en español; en las rutas /en se sustituye por
// su versión en inglés para no mezclar idiomas en el HTML estático.
const NOSCRIPT_EN =
  '<noscript><p>Esfera AI — Construction management software with AI. Free to use on your own; ' +
  'professional implementation for construction companies from USD 2,500. ' +
  'Esfera Solutions LLC · 2 S Biscayne Blvd, Ste 3200, Miami, FL 33131, United States · info@esfera.ai · ' +
  '<a href="https://sistema.esfera.ai/Usuario/RegistrarPago?IdPlan=5">Create free account</a></p></noscript>';

function localizeNoscript(html, route) {
  if (!route.startsWith("/en")) return html;
  return html.replace(/<noscript>[\s\S]*?<\/noscript>/, NOSCRIPT_EN);
}

async function main() {
  const server = startPreviewServer();
  let browser;
  try {
    await waitForServer();
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const type = request.resourceType();
      if (type === "image" || type === "font" || type === "media") {
        request.abort().catch(() => {});
      } else {
        request.continue().catch(() => {});
      }
    });

    // Se capturan todas las rutas en memoria ANTES de escribir: así el
    // fallback del servidor siempre sirve el shell limpio de vite build y
    // ninguna captura hereda los metadatos horneados de otra.
    const captured = [];
    for (const { route, file } of ROUTES) {
      await settlePage(page, route);
      const html = localizeNoscript(await page.content(), route);
      captured.push({ file, html });
      const bytes = (Buffer.byteLength(html) / 1024).toFixed(1);
      console.log(`prerender ✓ ${route.padEnd(22)} (${bytes} KB)`);
    }

    for (const { file, html } of captured) {
      const target = path.join(DIST, file);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, html, "utf8");
      console.log(`  escrito -> dist/${file}`);
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error("prerender falló:", error);
  process.exit(1);
});
