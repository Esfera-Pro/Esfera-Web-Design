import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { AgenticTag, Button } from "../components/ui";
import { I18nProvider, PAGE_PATHS, useI18n, type Lang } from "../i18n";
import { FREE_SIGNUP_URL } from "../data/links";

function NotFoundPage() {
  const { content, lang } = useI18n();
  const nf = content.notFound;

  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <Navbar />
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AgenticTag>{nf.tag}</AgenticTag>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">{nf.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">{nf.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PAGE_PATHS[lang].home!}
              className="inline-flex items-center justify-center rounded-full bg-[#529B8D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98]"
            >
              {nf.backHome}
            </a>
            <Button href={FREE_SIGNUP_URL}>{content.nav.signup}</Button>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}

export { NotFoundPage };

// Envoltorio autocontenido: Astro renderiza los children como slots fuera del
// contexto de React, así que el Provider debe vivir dentro del mismo árbol.
export function NotFoundPageEntry({ lang }: { lang: Lang }) {
  return (
    <I18nProvider lang={lang} page="notFound">
      <NotFoundPage />
    </I18nProvider>
  );
}
