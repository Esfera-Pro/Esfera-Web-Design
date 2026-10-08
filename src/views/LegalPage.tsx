import { ArrowRight } from "lucide-react";
import { AgenticTag } from "../components/ui";
import { JsonLd } from "../components/JsonLd";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { legalSections } from "../i18n/es";
import { I18nProvider, useI18n, type Lang } from "../i18n";
import { organizationJsonLd } from "../lib/schema";

function LegalPage() {
  const { content } = useI18n();
  const legal = content.legalPage;

  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <JsonLd data={[organizationJsonLd()]} />
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href={content.lang === "en" ? "/en/" : "/"} className="inline-flex items-center text-sm font-semibold text-[#3f8276] transition hover:text-[#2f6b61]">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            {legal.backLink}
          </a>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <AgenticTag>{legal.tag}</AgenticTag>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
              {legal.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {legal.subtitle}
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              <p className="font-semibold text-slate-800">{legal.company}</p>
              <p>{legal.address}</p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {legalSections.map((section) => (
              <article key={section.title} id={section.title === "Política de Privacidad" ? "privacidad" : "terminos"} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">{section.title}</h2>
                {section.intro && <p className="mt-5 text-base leading-7 text-slate-600">{section.intro}</p>}
                <div className="mt-8 space-y-7">
                  {section.items.map((item) => (
                    <section key={item.title}>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                      <div className="mt-3 space-y-3">
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}

export { LegalPage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function LegalPageEntry({ lang }: { lang: Lang }) {
  return (
    <I18nProvider lang={lang} page="legal">
      <LegalPage />
    </I18nProvider>
  );
}
