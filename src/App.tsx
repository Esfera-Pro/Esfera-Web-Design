import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer, WhatsAppBubble } from "./components/Footer";
import {
  DefinitionSection,
  ModulesSection,
  ProductScreenshotsSection,
  PlatformSection,
  WorkflowSection,
  AiSection,
  UseCasesSection,
  BusinessModelSection,
  FaqSection,
  FinalCta,
} from "./components/Sections";
import { LegalPage } from "./pages/LegalPage";
import { installCtaTracking } from "./lib/track";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900" itemScope itemType="https://schema.org/SoftwareApplication">
      <meta itemProp="name" content="esfera.ai" />
      <meta itemProp="applicationCategory" content="Free Construction ERP with AI; Construction Management Software; B2B Implementation Service" />
      <meta itemProp="operatingSystem" content="Web" />
      <Navbar />
      <Hero />
      <DefinitionSection />
      <ModulesSection />
      <ProductScreenshotsSection />
      <PlatformSection />
      <WorkflowSection />
      <AiSection />
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/privacidad" element={<LegalPage />} />
        <Route path="/terminos" element={<LegalPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
