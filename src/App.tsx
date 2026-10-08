import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer, WhatsAppBubble } from "./components/Footer";
import { Seo, JsonLd } from "./components/Seo";
import {
  DefinitionSection,
  UseCasesSection,
  BusinessModelSection,
  FaqSection,
  FinalCta,
} from "./components/Sections";
import { LegalPage } from "./pages/LegalPage";
import { PreciosPage } from "./pages/PreciosPage";
import { ImplementacionPage } from "./pages/ImplementacionPage";
import { FuncionalidadesPage } from "./pages/FuncionalidadesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { I18nProvider, useI18n } from "./i18n";
import { installCtaTracking } from "./lib/track";
import { SITE_URL } from "./data/links";
import { faqJsonLd, organizationJsonLd, softwareAppJsonLd, websiteJsonLd } from "./lib/schema";

// Anclas que vivían en la home y ahora viven en /funcionalidades.
const MOVED_HASHES: Record<string, string> = {
  "#modulos": "/funcionalidades#modulos",
  "#flujo": "/funcionalidades#flujo",
  "#ia": "/funcionalidades#ia",
};

const EN_MOVED_HASHES: Record<string, string> = {
  "#modulos": "/en/features#modulos",
  "#flujo": "/en/features#flujo",
  "#ia": "/en/features#ia",
};

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const moved =
      pathname === "/"
        ? MOVED_HASHES[hash]
        : pathname === "/en" || pathname === "/en/"
          ? EN_MOVED_HASHES[hash]
          : undefined;
    if (moved) {
      navigate(moved, { replace: true });
      return;
    }
    document.querySelector(hash)?.scrollIntoView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const { content } = useI18n();

  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <Seo page="home" />
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(content),
          softwareAppJsonLd(content, SITE_URL + (content.lang === "en" ? "/en/" : "/")),
          faqJsonLd(content.faqs),
        ]}
      />
      <Navbar />
      <Hero />
      <DefinitionSection />
      <UseCasesSection />
      <BusinessModelSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}

export default function App() {
  useEffect(() => installCtaTracking(), []);

  return (
    <>
      <ScrollManager />
      <I18nProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/precios" element={<PreciosPage />} />
          <Route path="/implementacion" element={<ImplementacionPage />} />
          <Route path="/funcionalidades" element={<FuncionalidadesPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacidad" element={<LegalPage />} />
          <Route path="/terminos" element={<LegalPage />} />

          <Route path="/en" element={<HomePage />} />
          <Route path="/en/pricing" element={<PreciosPage />} />
          <Route path="/en/implementation" element={<ImplementacionPage />} />
          <Route path="/en/features" element={<FuncionalidadesPage />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </I18nProvider>
    </>
  );
}
