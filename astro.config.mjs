import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Sitio 100% estático: Astro genera el HTML de cada página en el build
// (sin navegador, sin prerrender externo). React solo se usa como motor
// de plantillas en build; no se envía JS de React al navegador.
export default defineConfig({
  site: "https://esfera.ai",
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
