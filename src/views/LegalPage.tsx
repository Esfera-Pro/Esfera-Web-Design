import { ArrowRight } from "lucide-react";
import { AgenticTag } from "../components/ui";
import { JsonLd } from "../components/JsonLd";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { legalSections } from "../i18n/es";
import { I18nProvider, useI18n, type Lang } from "../i18n";
import { organizationJsonLd, webpageJsonLd } from "../lib/schema";

export type LegalDoc = "index" | "privacidad" | "terminos";

// Cada documento legal es su propia página con contenido y metadatos propios;
// /legal/ funciona como índice hacia ambas.
function LegalPage({ doc }: { doc: LegalDoc }) {
  const { content } = useI18n();
  const legal = content.legalPage;
  const canonicalPath = doc === "index" ? "/legal/" : doc === "privacidad" ? "/privacidad/" : "/terminos/";
  const sections = legalSections.filter((section) =>
    doc === "privacidad" ? section.title === "Política de Privacidad" : doc === "terminos" ? section.title === "Términos y Condiciones" : false,
  );
  const docTitle = doc === "privacidad" ? legal.cards[0].title : legal.cards[1].title;

  return (
    <div className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <JsonLd
        data={[
          organizationJsonLd(),
          webpageJsonLd(content, `https://esfera.ai${canonicalPath}`, content.pages[doc === "index" ? "legal" : doc]),
        ]}
      />
      <Navbar />
      <main>
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href={content.lang === "en" ? "/en/" : "/"} className="inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            {legal.backLink}
          </a>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <AgenticTag>{legal.tag}</AgenticTag>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
              {doc === "index" ? legal.title : docTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {doc === "index" ? legal.subtitle : legal.lastUpdated}
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              <p className="font-semibold text-slate-800">{legal.company}</p>
              <p>{legal.address}</p>
            </div>
          </div>

          {doc === "index" ? (
            <nav aria-label={legal.indexHeading} className="mt-8 grid gap-4 sm:grid-cols-2">
              {legal.cards.map((card) => (
                <a
                  key={card.to}
                  href={card.to}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-500/30 hover:shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)] sm:p-8"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:text-brand-800">
                    {card.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </nav>
          ) : (
            <>
              <div className="mt-8 space-y-8">
                {sections.map((section) => (
                  <article key={section.title} id={doc} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    {section.intro && <p className="text-base leading-7 text-slate-600">{section.intro}</p>}
                    <div className="mt-8 space-y-7">
                      {section.items.map((item) => (
                        <section key={item.title}>
                          <h2 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h2>
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
              <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-600 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{legal.relatedLabel}</p>
                <a
                  href={doc === "privacidad" ? legal.cards[1].to : legal.cards[0].to}
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-700 transition hover:text-brand-800"
                >
                  {doc === "privacidad" ? legal.cards[1].title : legal.cards[0].title}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </>
          )}
        </div>
      </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

export { LegalPage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function LegalPageEntry({ lang, doc }: { lang: Lang; doc: LegalDoc }) {
  return (
    <I18nProvider lang={lang} page="legal">
      <LegalPage doc={doc} />
    </I18nProvider>
  );
}
