import { motion } from "../lib/motion";
import { AgenticTag, Button } from "./ui";
import { esferaLogoWhite, FREE_SIGNUP_URL, IMPLEMENTATION_URL, stagger, fadeUp } from "../data/links";
import { useI18n } from "../i18n";

function Hero() {
  const { content } = useI18n();
  const hero = content.hero;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_28%,rgba(82,155,141,0.16),transparent_32%),radial-gradient(circle_at_10%_10%,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}>
            <AgenticTag>{hero.tag}</AgenticTag>
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">
            {hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7 flex max-w-3xl flex-wrap gap-2">
            {hero.modules.map((module) => (
              <span key={module} className="rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                {module}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={FREE_SIGNUP_URL}>{hero.primaryCta}</Button>
            <Button href={IMPLEMENTATION_URL} variant="secondary">{hero.secondaryCta}</Button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            {hero.notePrefix} <span className="font-semibold text-slate-800">{hero.noteStrong}</span>{hero.noteSuffix}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-3xl border border-slate-200 bg-white/70 p-2 backdrop-blur">
            {hero.stats.map(([value, label]) => (
              <div key={label} className="px-4 py-3">
                <p className="text-lg font-semibold tracking-tight text-slate-950">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
          aria-hidden="true"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-transparent" />
          <motion.img
            src={esferaLogoWhite}
            alt=""
            width={256}
            height={251}
            className="logo-spin relative h-56 w-auto sm:h-72 lg:h-80"
            style={{ filter: "drop-shadow(0 12px 28px rgba(82,155,141,0.35))" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export { Hero };
