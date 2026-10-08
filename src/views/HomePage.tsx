import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import {
  DefinitionSection,
  UseCasesSection,
  BusinessModelSection,
  FaqSection,
  FinalCta,
} from "../components/Sections";
import { I18nProvider, useI18n, type Lang } from "../i18n";
import { SITE_URL } from "../data/links";
import { faqJsonLd, organizationJsonLd, softwareAppJsonLd, webpageJsonLd, websiteJsonLd } from "../lib/schema";

function HomePage() {
  const { content, lang } = useI18n();
  const homeUrl = SITE_URL + (lang === "en" ? "/en/" : "/");

  return (
    <div className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(content),
          webpageJsonLd(content, homeUrl, content.pages.home, `${SITE_URL}/#software`),
          softwareAppJsonLd(content),
          faqJsonLd(content.faqs),
        ]}
      />
      <Navbar />
      <main>
      <Hero />
      <DefinitionSection />
      <UseCasesSection />
      <BusinessModelSection />
      <FaqSection />
      <FinalCta />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

export { HomePage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function HomePageEntry({ lang }: { lang: Lang }) {
  return (
    <I18nProvider lang={lang} page="home">
      <HomePage />
    </I18nProvider>
  );
}
