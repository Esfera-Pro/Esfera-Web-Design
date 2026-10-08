import { motion } from "../lib/motion";
import { ArrowRight, Bot, ClipboardCheck, Database, GraduationCap, LifeBuoy, Settings2 } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { AgenticTag } from "../components/ui";
import { JsonLd } from "../components/JsonLd";
import { I18nProvider, PAGE_PATHS, useI18n, type Lang } from "../i18n";
import { IMPLEMENTATION_URL, SITE_URL, fadeUp, stagger } from "../data/links";
import { breadcrumbJsonLd, organizationJsonLd, serviceJsonLd, webpageJsonLd } from "../lib/schema";

const INCLUDE_ICONS = [ClipboardCheck, Settings2, Database, GraduationCap, LifeBuoy, Bot];

function ImplementacionPage() {
  const { content, lang } = useI18n();
  const p = content.implementationPage;
  const pageUrl = SITE_URL + PAGE_PATHS[lang].implementation!;

  return (
    <div className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <JsonLd
        data={[
          organizationJsonLd(),
          webpageJsonLd(content, pageUrl, { title: p.title, description: p.description }, `${SITE_URL}/#implementation`),
          serviceJsonLd(content),
          breadcrumbJsonLd([
            { name: lang === "en" ? "Home" : "Inicio", url: SITE_URL + PAGE_PATHS[lang].home! },
            { name: p.title, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <main>
      <section className="px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AgenticTag>{p.tag}</AgenticTag>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-6xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{p.description}</p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {p.includesTitle}
          </motion.h2>
          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {p.includes.map((item, index) => {
              const Icon = INCLUDE_ICONS[index % INCLUDE_ICONS.length];
              return (
                <motion.article key={item.title} variants={fadeUp} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10">
                    <Icon className="h-5 w-5 text-brand-500" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <AgenticTag>{p.tag}</AgenticTag>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                {p.processTitle}
              </h2>
              <div className="mt-7 rounded-[1.75rem] border border-brand-500/20 bg-brand-500/10 p-6">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">{p.pricingTitle}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{p.pricingText}</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={IMPLEMENTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 active:scale-[0.98]"
                  >
                    {p.cta}
                  </a>
                  <a
                    href={PAGE_PATHS[lang].pricing!}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-500/40 hover:text-brand-700 active:scale-[0.98]"
                  >
                    {p.viewPricing}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            <motion.div className="grid gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
              {p.processSteps.map((step) => (
                <motion.article key={step.title} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <h3 className="text-base font-semibold tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

export { ImplementacionPage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function ImplementacionPageEntry({ lang }: { lang: Lang }) {
  return (
    <I18nProvider lang={lang} page="implementation">
      <ImplementacionPage />
    </I18nProvider>
  );
}
