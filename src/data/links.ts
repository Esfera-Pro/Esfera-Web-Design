// Enlaces y constantes compartidas, independientes del idioma.
// ?url: en Astro el import de una imagen devuelve metadatos (objeto), no una
// URL; con ?url se obtiene la cadena lista para src.
import esferaLogoWhite from "../assets/logo.webp?url";

export { esferaLogoWhite };

// Animaciones compartidas (framer-motion).
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const SITE_URL = "https://esfera.ai";

export const FREE_SIGNUP_URL = "https://sistema.esfera.ai/Usuario/RegistrarPago?IdPlan=5";
export const LOGIN_URL = "https://sistema.esfera.ai/Usuario/Login";
export const IMPLEMENTATION_URL =
  "https://wa.me/14845691555?text=Hola%2C%20quiero%20solicitar%20una%20implementaci%C3%B3n%20de%20Esfera%20AI%20para%20mi%20empresa.";
export const PLUS_URL =
  "https://wa.me/14845691555?text=Hola%2C%20quiero%20contratar%20el%20addon%20Esfera%20Plus.";
export const DOCS_URL = "https://docs.esfera.ai/";

export const COMPANY = {
  legalName: "Esfera Solutions LLC",
  streetAddress: "2 S Biscayne Blvd Ste 3200",
  addressLocality: "Miami",
  addressRegion: "FL",
  postalCode: "33131",
  addressCountry: "US",
  email: "info@esfera.ai",
  foundingDate: "2025",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/esfera.ai/", icon: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@esfera.ai", icon: "tiktok" },
  { label: "LinkedIn", href: "https://linkedin.com/company/esferasolutions", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@esfera-ai", icon: "youtube" },
  { label: "X", href: "https://x.com/esfera_ai", icon: "x" },
];
