// Contexto de idioma: se deriva de la ruta (/en/... => inglés, resto => español).
import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { esContent, type Lang, type SiteContent } from "./es";
import { enContent } from "./en";

export type { Lang };
export type PageKey = "home" | "features" | "pricing" | "implementation" | "legal" | "notFound";

// Rutas públicas por idioma (siempre con barra final: así las sirve GitHub Pages).
export const PAGE_PATHS: Record<Lang, Partial<Record<PageKey, string>>> = {
  es: {
    home: "/",
    features: "/funcionalidades/",
    pricing: "/precios/",
    implementation: "/implementacion/",
    legal: "/legal/",
  },
  en: {
    home: "/en/",
    features: "/en/features/",
    pricing: "/en/pricing/",
    implementation: "/en/implementation/",
  },
};

// Equivalencias de slug entre idiomas para el switcher de idioma.
const SLUG_MAP: Record<string, string> = {
  precios: "pricing",
  implementacion: "implementation",
  funcionalidades: "features",
  pricing: "precios",
  implementation: "implementacion",
  features: "funcionalidades",
};

// Rutas legales: solo existen en español.
const LEGAL_PATHS = new Set(["/legal", "/privacidad", "/terminos"]);

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

// Ruta equivalente en el otro idioma (conserva el hash). Las páginas legales
// no tienen versión en inglés: el switcher lleva al inicio del idioma destino.
export function equivalentPath(pathname: string, hash: string, targetLang: Lang): string {
  const lang = langFromPath(pathname);
  if (lang === targetLang) return pathname + hash;

  const clean = pathname.replace(/\/+$/, "") || "/";
  let segments = clean.split("/").filter(Boolean);

  if (segments[0] === "en") segments = segments.slice(1);

  if (segments.length === 0) return (targetLang === "en" ? "/en/" : "/") + hash;

  if (LEGAL_PATHS.has("/" + segments[0])) {
    return (targetLang === "en" ? "/en/" : "/") + hash;
  }

  const slug = SLUG_MAP[segments[0]] ?? segments[0];
  return (targetLang === "en" ? "/en/" : "/") + slug + hash;
}

interface I18nValue {
  lang: Lang;
  content: SiteContent;
}

const I18nContext = createContext<I18nValue>({ lang: "es", content: esContent });

export function I18nProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const content = lang === "en" ? enContent : esContent;

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
  }, [content.htmlLang]);

  return <I18nContext value={{ lang, content }}>{children}</I18nContext>;
}

export function useI18n() {
  return useContext(I18nContext);
}
