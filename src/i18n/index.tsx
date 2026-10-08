// Contexto de idioma para el render estático: cada página .astro declara su
// idioma y su clave de página; no hay enrutador en el cliente.
import { createContext, useContext, type ReactNode } from "react";
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

interface I18nValue {
  lang: Lang;
  page: PageKey;
  content: SiteContent;
}

const I18nContext = createContext<I18nValue>({ lang: "es", page: "home", content: esContent });

export function I18nProvider({ lang, page, children }: { lang: Lang; page: PageKey; children: ReactNode }) {
  const content = lang === "en" ? enContent : esContent;
  return <I18nContext value={{ lang, page, content }}>{children}</I18nContext>;
}

export function useI18n() {
  return useContext(I18nContext);
}

// URL de esta página en un idioma dado (para el switcher y los hreflang).
export function pageHref(lang: Lang, page: PageKey): string {
  return PAGE_PATHS[lang][page] ?? PAGE_PATHS[lang].home!;
}
