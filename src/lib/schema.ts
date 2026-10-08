// Datos estructurados (JSON-LD) para buscadores y agentes de IA.
import { COMPANY, SITE_URL, socialLinks } from "../data/links";
import type { SiteContent } from "../i18n/es";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Esfera AI",
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: COMPANY.email,
    foundingDate: COMPANY.foundingDate,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: COMPANY.email,
        contactType: "customer support",
        availableLanguage: ["es", "en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.addressCountry,
    },
    sameAs: socialLinks.map((s) => s.href),
  };
}

export function websiteJsonLd(content: SiteContent) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Esfera AI",
    inLanguage: content.htmlLang,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function softwareAppJsonLd(content: SiteContent, pageUrl: string) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Esfera AI",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Construction Management Software",
    operatingSystem: "Web",
    url: pageUrl,
    image: `${SITE_URL}/og-image.png`,
    inLanguage: content.htmlLang,
    description: content.pages.home.description,
    isAccessibleForFree: true,
    publisher: { "@id": ORGANIZATION_ID },
    featureList: content.modules.map((m) => m.title),
    offers: [
      {
        "@type": "Offer",
        name: content.plans[0].name,
        description: content.pricingPage.freeCard.description,
        price: "0",
        priceCurrency: "USD",
        url: `${SITE_URL}${content.lang === "en" ? "/en/pricing/" : "/precios/"}`,
      },
      {
        "@type": "Offer",
        name: `${content.pricingPage.plusCard.name} (1 mes)`,
        description: content.pricingPage.plusCard.description,
        price: "30",
        priceCurrency: "USD",
        url: `${SITE_URL}${content.lang === "en" ? "/en/pricing/" : "/precios/"}`,
      },
      {
        "@type": "Offer",
        name: `${content.pricingPage.plusCard.name} (1 año)`,
        description: content.pricingPage.plusCard.description,
        price: "300",
        priceCurrency: "USD",
        url: `${SITE_URL}${content.lang === "en" ? "/en/pricing/" : "/precios/"}`,
      },
      {
        "@type": "Offer",
        name: content.plans.find((plan) => plan.kind === "implementation")!.name,
        description: content.implementationPage.pricingText,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2500,
          priceCurrency: "USD",
        },
        url: `${SITE_URL}${content.lang === "en" ? "/en/implementation/" : "/implementacion/"}`,
      },
    ],
  };
}

export function serviceJsonLd(content: SiteContent, pageUrl: string) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/#implementation`,
    name: content.implementationPage.tag === "IMPLEMENTACIÓN PROFESIONAL"
      ? "Implementación profesional de Esfera AI"
      : "Esfera AI professional implementation",
    serviceType: "Software implementation for construction companies",
    description: content.implementationPage.description,
    url: pageUrl,
    inLanguage: content.htmlLang,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 2500,
        priceCurrency: "USD",
      },
      description: content.implementationPage.pricingText,
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
