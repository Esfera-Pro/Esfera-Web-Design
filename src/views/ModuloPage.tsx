import { motion } from "../lib/motion";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { AgenticTag } from "../components/ui";
import { JsonLd } from "../components/JsonLd";
import { I18nProvider, useI18n, type Lang } from "../i18n";
import { getModulo } from "../i18n/modulos";
import { DOCS_URL, FREE_SIGNUP_URL, IMPLEMENTATION_URL, fadeUp, stagger } from "../data/links";
import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, webpageJsonLd } from "../lib/schema";

export { getModulo };

// Páginas de módulo (solo español): recuperan las URLs históricas /modulos/*
// y cubren la intención de búsqueda de cada tema con contenido útil.
function ModuloPage({ slug }: { slug: string }) {
  const { content } = useI18n();
  const m = getModulo(slug);
  const pageUrl = `https://esfera.ai/modulos/${m.slug}/`;

  return (
    <div className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <JsonLd
        data={[
          organizationJsonLd(),
          webpageJsonLd(content, pageUrl, m.meta, "https://esfera.ai/#software"),
          breadcrumbJsonLd([
            { name: "Inicio", url: "https://esfera.ai/" },
            { name: "Funcionalidades", url: "https://esfera.ai/funcionalidades/" },
            { name: m.name, url: pageUrl },
          ]),
          faqJsonLd(m.faqs),
        ]}
      />
      <Navbar />
      <main>
        <section className="px-4 pt-16 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Ruta de navegación" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
              <a href="/" className="transition hover:text-slate-950">Inicio</a>
              <span aria-hidden="true">/</span>
              <a href="/funcionalidades/" className="transition hover:text-slate-950">Funcionalidades</a>
              <span aria-hidden="true">/</span>
              <span className="text-slate-700">{m.name}</span>
            </nav>
            <AgenticTag>{m.tag}</AgenticTag>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              {m.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{m.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={FREE_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 active:scale-[0.98]"
              >
                Empezar gratis
              </a>
              <a
                href={IMPLEMENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-500/40 hover:text-brand-700 active:scale-[0.98]"
              >
                Solicitar implementación
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {m.highlights.map((highlight) => (
              <motion.article
                key={highlight}
                variants={fadeUp}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                  <p className="text-sm font-medium leading-6 text-slate-700">{highlight}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-100">
                <img
                  src={m.screenshot.src}
                  alt={m.screenshot.alt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              </div>
              <div className="px-1 pb-2 lg:px-4 lg:pb-0">
                <AgenticTag>{m.screenshot.tag}</AgenticTag>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{m.screenshot.title}</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{m.screenshot.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">{m.workflowTitle}</h2>
                <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800">
                  Ver manual de uso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <motion.div className="grid gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
                {m.workflow.map((step) => (
                  <motion.article key={step.title} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                    <h3 className="text-base font-semibold tracking-tight text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={fadeUp} className="rounded-[1.75rem] border border-brand-500/20 bg-brand-500/5 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{m.freePlanTitle}</h2>
              <ul className="mt-5 space-y-3">
                {m.freePlan.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-5 text-slate-500">
                {m.freePlanNote}{" "}
                <a href="/terminos/" className="font-semibold text-brand-700 underline-offset-2 transition hover:text-brand-800 hover:underline">
                  Ver los Términos
                </a>
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-[1.75rem] bg-[#12231f] p-6 text-white shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{m.ctaTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{m.ctaText}</p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={FREE_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#12231f] transition hover:bg-white/90 active:scale-[0.98]"
                >
                  Empezar gratis
                </a>
                <a
                  href={IMPLEMENTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
                >
                  Implementación desde USD 2.500
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">{m.faqTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {m.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

export { ModuloPage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function ModuloPageEntry({ lang, slug }: { lang: Lang; slug: string }) {
  return (
    <I18nProvider lang={lang} page="features">
      <ModuloPage slug={slug} />
    </I18nProvider>
  );
}
