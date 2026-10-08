import type { ReactNode } from "react";
import { motion } from "../lib/motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { fadeUp, stagger, FREE_SIGNUP_URL } from "../data/links";
import { useI18n } from "../i18n";

function AgenticTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-brand-500/15 bg-brand-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

function SectionHeader({ tag, title, description }: { tag: string; title: string; description: string }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp}>
        <AgenticTag>{tag}</AgenticTag>
      </motion.div>
      <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </motion.p>
    </motion.div>
  );
}

function Button({ children, variant = "primary", className, href = "#modelo" }: { children: ReactNode; variant?: "primary" | "secondary"; className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 active:scale-[0.98]",
        variant === "primary"
          ? "bg-brand-500 text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600"
          : "border border-slate-200 bg-white text-slate-900 hover:border-brand-500/40 hover:text-brand-700",
        className,
      )}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function TrialCta({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { content } = useI18n();
  const t = content.trialCta;

  return (
    <motion.div
      className={cn(
        "mt-10 flex flex-col items-start gap-3 rounded-[1.5rem] border border-brand-500/20 bg-white/80 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between [&_.trial-copy]:text-slate-600 [&_.trial-copy-strong]:text-slate-950",
        compact && "mt-8",
        className,
      )}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <p className="trial-copy text-sm leading-6 [text-wrap:balance]">
        <span className="trial-copy-strong font-semibold">{t.strong}</span> {t.text}
      </p>
      <a
        href={FREE_SIGNUP_URL}
        className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 active:scale-[0.98] sm:w-auto"
      >
        {t.cta}
      </a>
    </motion.div>
  );
}

export { AgenticTag, SectionHeader, Button, TrialCta };
