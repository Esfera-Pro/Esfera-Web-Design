import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { AgenticTag } from "../components/ui";
import { JsonLd } from "../components/JsonLd";
import {
  ModulesSection,
  ProductScreenshotsSection,
  PlatformSection,
  WorkflowSection,
  AiSection,
  FinalCta,
} from "../components/Sections";
import { I18nProvider, PAGE_PATHS, useI18n, type Lang } from "../i18n";
import { SITE_URL } from "../data/links";
import { breadcrumbJsonLd, organizationJsonLd, softwareAppJsonLd } from "../lib/schema";

function FuncionalidadesPage() {
  const { content, lang } = useI18n();
  const hero = content.featuresPage;
  const pageUrl = SITE_URL + PAGE_PATHS[lang].features!;

  return (
    <div className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <JsonLd
        data={[
          organizationJsonLd(),
          softwareAppJsonLd(content, pageUrl),
          breadcrumbJsonLd([
            { name: lang === "en" ? "Home" : "Inicio", url: SITE_URL + PAGE_PATHS[lang].home! },
            { name: hero.title, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <main>
      <section className="px-4 pt-16 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AgenticTag>{hero.tag}</AgenticTag>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{hero.description}</p>
        </div>
      </section>
      <ModulesSection />
      <ProductScreenshotsSection />
      <PlatformSection />
      <WorkflowSection />
      <AiSection />
      <FinalCta />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

export { FuncionalidadesPage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function FuncionalidadesPageEntry({ lang }: { lang: Lang }) {
  return (
    <I18nProvider lang={lang} page="features">
      <FuncionalidadesPage />
    </I18nProvider>
  );
}
