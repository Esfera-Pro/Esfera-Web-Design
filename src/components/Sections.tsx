import { motion } from "../lib/motion";
import { ArrowRight, Bot, Check, Database, Layers3, ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";
import { AgenticTag, SectionHeader, Button, TrialCta } from "./ui";
import { FREE_SIGNUP_URL, IMPLEMENTATION_URL, PLUS_URL, fadeUp, stagger } from "../data/links";
import { PAGE_PATHS, useI18n } from "../i18n";

function DefinitionSection() {
  const { content } = useI18n();
  const def = content.definition;

  return (
    <section id="producto" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.article
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <AgenticTag>{def.tag}</AgenticTag>
          </motion.div>
          <div className="mt-7 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                {def.title.split(".")[0]}.<br />
                {def.title.split(".").slice(1).join(".").trim()}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{def.subtitle}</p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.6)]">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/9GXhBwILYHY?start=5"
                  title={def.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">{def.videoSummary}</p>
              <a
                href={PAGE_PATHS[content.lang].features!}
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#3f8276] transition hover:text-[#2f6b61]"
              >
                {def.exploreLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
              {def.paths.map((path) => (
                <article key={path.title} className={cn("rounded-[1.75rem] border p-6 shadow-sm", path.featured ? "border-[#529B8D]/35 bg-[#529B8D]/10" : "border-slate-200 bg-slate-50")}>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{path.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{path.description}</p>
                  <div className="mt-6 space-y-3">
                    {path.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#529B8D]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.article>
        <TrialCta />
      </div>
    </section>
  );
}

function ModulesSection() {
  const { content } = useI18n();
  const s = content.modulesSection;

  return (
    <section id="modulos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag={s.tag} title={s.title} description={s.description} />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {content.modules.map((module) => {
            const Icon = module.icon;
            return (
              <motion.article key={module.title} variants={fadeUp} className={cn("group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#529B8D]/30 hover:shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)]", module.className)}>
                <div className="flex items-center justify-between gap-4">
                  <AgenticTag>{module.tag}</AgenticTag>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 transition group-hover:bg-[#529B8D]/10">
                    <Icon className="h-5 w-5 text-[#529B8D]" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">{module.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function ProductScreenshotsSection() {
  const { content } = useI18n();
  const s = content.screenshotsSection;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <AgenticTag>{s.tag}</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {s.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:justify-self-end">
            {s.description}
          </p>
        </div>

        <motion.div className="mt-12 rounded-[2.25rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          {content.screenshots.map((screenshot) => (
            <motion.article
              key={screenshot.title}
              variants={fadeUp}
              className="group grid gap-5 border-b border-slate-100 p-4 last:border-b-0 sm:p-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
            >
              <button
                type="button"
                data-lightbox-src={screenshot.src}
                data-lightbox-alt={screenshot.alt}
                data-lightbox-tag={screenshot.tag}
                data-lightbox-title={screenshot.title}
                className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-100 text-left transition focus:outline-none focus:ring-4 focus:ring-[#529B8D]/20"
                aria-label={`${s.zoomAriaPrefix} ${screenshot.title}`}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  {s.zoom}
                </span>
              </button>
              <div className="px-1 pb-2 lg:px-4 lg:pb-0">
                <AgenticTag>{screenshot.tag}</AgenticTag>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{screenshot.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{screenshot.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <TrialCta />
      </div>
      <dialog
        data-screenshots-dialog
        aria-label={s.zoom}
        className="w-full max-w-6xl overflow-visible rounded-[1.5rem] border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-5">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3f8276]" data-dialog-tag />
            <h3 className="mt-1 text-base font-semibold tracking-tight text-slate-950 sm:text-lg" data-dialog-title />
          </div>
          <button
            type="button"
            data-dialog-close
            className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {s.close}
          </button>
        </div>
        <div className="max-h-[78dvh] overflow-auto bg-slate-100 p-2 sm:p-4">
          <img data-dialog-img alt="" className="mx-auto w-full rounded-xl border border-slate-200 bg-white object-contain" />
        </div>
      </dialog>
    </section>
  );
}

function PlatformSection() {
  const { content } = useI18n();
  const s = content.platformSection;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <AgenticTag>{s.tag}</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {s.title}
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {s.description}
          </p>
        </div>
        <motion.div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {content.capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.article key={capability.title} variants={fadeUp} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-5 w-5 text-[#529B8D]" />
                <AgenticTag className="mt-6">{capability.tag}</AgenticTag>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function WorkflowSection() {
  const { content } = useI18n();
  const s = content.workflowSection;

  return (
    <section id="flujo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <AgenticTag>{s.tag}</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {s.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {s.description}
            </p>
            <a href="https://docs.esfera.ai/flujo-trabajo" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center text-sm font-semibold text-[#3f8276]">
              {s.manualLink}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <motion.div className="grid gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            {content.workflowSteps.map((step) => (
              <motion.article key={step.title} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h3 className="text-base font-semibold tracking-tight text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
        <TrialCta className="bg-white" />
      </div>
    </section>
  );
}

function AiSection() {
  const { content } = useI18n();
  const s = content.aiSection;

  return (
    <section id="ia" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#12231f] text-white shadow-[0_22px_64px_-46px_rgba(15,23,42,0.7)]">
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <AgenticTag className="border-white/10 bg-white/10 text-[#9dd5ca]">{s.tag}</AgenticTag>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              {s.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              {s.description}
            </motion.p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a href={FREE_SIGNUP_URL} className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#12231f] transition hover:bg-white/90 active:scale-[0.98]">
                {s.primaryCta}
              </a>
              <a href={IMPLEMENTATION_URL} className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]">
                {s.secondaryCta}
              </a>
            </div>
          </motion.div>
          <motion.div className="rounded-[1.35rem] border border-white/10 bg-[#081310] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-[#9dd5ca]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">{s.chatHeader}</span>
              </div>
              <span className="rounded-full bg-[#529B8D]/15 px-3 py-1 font-mono text-xs text-[#9dd5ca]">{s.chatBadge}</span>
            </div>
            <div className="mt-4 grid gap-3">
              {s.conversations.map((conversation) => (
                <div key={conversation.q} className="grid gap-3">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#529B8D] p-3 text-xs leading-5 text-white shadow-sm sm:text-sm">
                    {conversation.q}
                  </div>
                  <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/[0.08] p-3 text-xs leading-5 text-white/80 sm:text-sm">
                    {conversation.a}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                [Database, s.capabilities[0]],
                [ShieldCheck, s.capabilities[1]],
                [Layers3, s.capabilities[2]],
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof Database;
                return (
                  <div key={label as string} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <TypedIcon className="h-4 w-4 text-[#9dd5ca]" />
                    <p className="mt-2 text-xs font-medium text-white/80 sm:text-sm">{label as string}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const { content } = useI18n();
  const s = content.useCasesSection;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag={s.tag} title={s.title} description={s.description} />
        <motion.div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {content.useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.article key={useCase.title} variants={fadeUp} className={cn("rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm", index === 0 && "lg:min-h-80")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#529B8D]/10">
                  <Icon className="h-6 w-6 text-[#529B8D]" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{useCase.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{useCase.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function BusinessModelSection() {
  const { content } = useI18n();
  const s = content.businessModel;

  return (
    <section id="modelo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag={s.tag} title={s.title} description={s.description} />
        <motion.div className="mt-10 rounded-[1.75rem] border border-[#529B8D]/20 bg-[#529B8D]/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <div>
            <AgenticTag>{s.keyMessageTag}</AgenticTag>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{s.keyMessageTitle}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{s.keyMessageText}</p>
          </div>
          <a href={IMPLEMENTATION_URL} className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-[#529B8D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:mt-0">
            {s.keyMessageCta}
          </a>
        </motion.div>
        <motion.div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {content.plans.map((path) => (
            <motion.article key={path.name} variants={fadeUp} className={cn("relative flex flex-col rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8", path.featured ? "border-[#529B8D] ring-4 ring-[#529B8D]/10" : "border-slate-200")}>
              {path.featured && <span className="absolute right-5 top-5 rounded-full bg-[#529B8D] px-3 py-1 text-xs font-semibold text-white">{s.focusBadge}</span>}
              <AgenticTag>{path.tag}</AgenticTag>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{path.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{path.description}</p>
              <div className="mt-8">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{path.price}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{path.period}</p>
              </div>
              <a
                href={path.kind === "free" ? FREE_SIGNUP_URL : path.kind === "plus" ? PLUS_URL : IMPLEMENTATION_URL}
                className={cn("mt-7 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition active:scale-[0.98]", path.featured ? "bg-[#529B8D] text-white hover:bg-[#477f75]" : "border border-slate-200 bg-white text-slate-900 hover:border-[#529B8D]/40 hover:text-[#3f8276]")}
              >
                {path.cta}
              </a>
              <div className="mt-8 grid gap-6 border-t border-slate-100 pt-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{s.includesLabel}</p>
                  <div className="mt-4 space-y-3">
                    {path.includes.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#529B8D]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {path.excludes.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{s.excludesLabel}</p>
                    <div className="mt-4 space-y-3">
                      {path.excludes.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-500">
                          <span className="mt-3 h-px w-4 shrink-0 bg-slate-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <a
            href={PAGE_PATHS[content.lang].pricing!}
            className="inline-flex items-center text-sm font-semibold text-[#3f8276] transition hover:text-[#2f6b61]"
          >
            {s.viewPricingLink}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { content } = useI18n();
  const s = content.faqSection;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag={s.tag} title={s.title} description={s.description} />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {content.faqs.map((faq) => (
            <motion.article key={faq.question} variants={fadeUp} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </motion.article>
          ))}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function FinalCta() {
  const { content } = useI18n();
  const s = content.finalCta;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
        <AgenticTag>{s.tag}</AgenticTag>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{s.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">{s.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={FREE_SIGNUP_URL}>{s.primaryCta}</Button>
          <Button href={IMPLEMENTATION_URL} variant="secondary">{s.secondaryCta}</Button>
        </div>
      </motion.div>
    </section>
  );
}

export {
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
};
