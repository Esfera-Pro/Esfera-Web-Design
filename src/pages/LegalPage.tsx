import { ArrowRight } from "lucide-react";
import { AgenticTag } from "../components/ui";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { legalSections } from "../data/content";

function LegalPage() {
  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="inline-flex items-center text-sm font-semibold text-[#3f8276] transition hover:text-[#2f6b61]">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Volver a esfera.ai
          </a>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <AgenticTag>LEGAL</AgenticTag>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Política de privacidad, términos y condiciones.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Información legal de Esfera Solutions LLC para usuarios de www.esfera.ai, la plataforma web y sus aplicaciones móviles.
            </p>
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
