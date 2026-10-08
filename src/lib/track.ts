import { FREE_SIGNUP_URL, IMPLEMENTATION_URL } from "../data/links";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const CTA_LABELS: Record<string, string> = {
  [FREE_SIGNUP_URL]: "empezar_gratis",
  [IMPLEMENTATION_URL]: "solicitar_implementacion",
};

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

// Un solo listener global cubre todos los CTAs (nav, hero, pricing, footer).
let installed = false;
export function installCtaTracking() {
  if (installed) return;
  installed = true;
  document.addEventListener("click", (event) => {
    const anchor = (event.target as HTMLElement | null)?.closest?.("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href") ?? "";
    const label = CTA_LABELS[href];
    if (label) {
      trackEvent("cta_click", { cta_label: label, cta_url: href });
    }
  });
}
