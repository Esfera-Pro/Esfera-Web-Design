import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppBubble } from "../components/Footer";
import { AgenticTag } from "../components/ui";
import { Seo, JsonLd } from "../components/Seo";
import { PAGE_PATHS, useI18n } from "../i18n";
import { FREE_SIGNUP_URL, IMPLEMENTATION_URL, PLUS_URL, SITE_URL, fadeUp, stagger } from "../data/links";
import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, serviceJsonLd, softwareAppJsonLd } from "../lib/schema";
import { cn } from "../lib/utils";

function PricingCard({
  name,
  tag,
  price,
  period,
  description,
  includes,
  cta,
  href,
  featured,
}: {
  name: string;
  tag: string;
  price: string;
  period: string;
  description: string;
  includes: string[];
  cta: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "relative flex flex-col rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8",
        featured ? "border-[#529B8D] ring-4 ring-[#529B8D]/10" : "border-slate-200",
      )}
    >
      <AgenticTag>{tag}</AgenticTag>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6">
        <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{price}</p>
        <p className="mt-2 text-sm font-medium text-slate-500">{period}</p>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {includes.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[#529B8D]" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition active:scale-[0.98]",
          featured ? "bg-[#529B8D] text-white hover:bg-[#477f75]" : "border border-slate-200 bg-white text-slate-900 hover:border-[#529B8D]/40 hover:text-[#3f8276]",
        )}
      >
        {cta}
      </a>
    </motion.article>
  );
}

function PreciosPage() {
  const { content, lang } = useI18n();
  const p = content.pricingPage;
  const pageUrl = SITE_URL + PAGE_PATHS[lang].pricing!;
  const pricingFaqs = content.faqs.filter((faq) => faq.topic === "precios");

  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <Seo page="pricing" />
      <JsonLd
        data={[
          organizationJsonLd(),
          softwareAppJsonLd(content, pageUrl),
          serviceJsonLd(content, pageUrl),
          faqJsonLd(pricingFaqs),
          breadcrumbJsonLd([
            { name: lang === "en" ? "Home" : "Inicio", url: SITE_URL + PAGE_PATHS[lang].home! },
            { name: p.title, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <section className="px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AgenticTag>{p.tag}</AgenticTag>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-6xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{p.description}</p>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {p.cardsTitle}
          </motion.h2>
          <motion.div
            className="mt-8 grid gap-5 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <PricingCard
              name={p.freeCard.name}
              tag={p.freeCard.tag}
              price={p.freeCard.price}
              period={p.freeCard.period}
              description={p.freeCard.description}
              includes={p.freeCard.includes}
              cta={p.freeCard.cta}
              href={FREE_SIGNUP_URL}
            />
            <PricingCard
              name={p.plusCard.name}
              tag={p.plusCard.tag}
              price={p.plusCard.price}
              period={p.plusCard.period}
              description={p.plusCard.description}
              includes={p.plusCard.includes}
              cta={p.plusCard.cta}
              href={PLUS_URL}
            />
            <PricingCard
              name={p.implementationCard.name}
              tag={p.implementationCard.tag}
              price={p.implementationCard.price}
              period={p.implementationCard.period}
              description={p.implementationCard.description}
              includes={p.implementationCard.includes}
              cta={p.implementationCard.cta}
              href={IMPLEMENTATION_URL}
              featured
            />
          </motion.div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">{p.note}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {p.faqTitle}
          </motion.h2>
          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {pricingFaqs.map((faq) => (
              <motion.article key={faq.question} variants={fadeUp} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <Link
              to={PAGE_PATHS[lang].implementation!}
              className="inline-flex items-center text-sm font-semibold text-[#3f8276] transition hover:text-[#2f6b61]"
            >
              {p.viewImplementation}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}

export { PreciosPage };
