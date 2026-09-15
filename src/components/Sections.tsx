import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Check, Database, Layers3, ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";
import { AgenticTag, SectionHeader, Button, TrialCta } from "./ui";
import {
  fadeUp,
  stagger,
  modules,
  platformCapabilities,
  workflowSteps,
  faqs,
  useCases,
  usagePaths,
  productScreenshots,
  FREE_SIGNUP_URL,
  IMPLEMENTATION_URL,
} from "../data/content";

function DefinitionSection() {
  return (
    <section id="producto" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.article
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
          itemScope
          itemType="https://schema.org/SoftwareApplication"
        >
          <motion.div variants={fadeUp}>
            <AgenticTag>QUÉ ES ESFERA AI</AgenticTag>
          </motion.div>
          <div className="mt-7 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl" itemProp="name">
                El mismo software.<br />
                Dos formas de adoptarlo.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600" itemProp="applicationCategory">
                ERP de construcción con IA. Software de gestión de obras.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.6)]">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/9GXhBwILYHY?start=5"
                  title="Qué es esfera.ai"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2" itemProp="description">
              {[
                {
                  title: "Empezar gratis",
                  description: "Para conocer Esfera AI, crear proyectos y avanzar de forma autoasistida.",
                  features: [
                    "Crear proyectos",
                    "Aprender con tutoriales",
                    "Explorar todas las funciones",
                    "Sin tarjeta",
                    "Ideal para profesionales independientes y equipos pequeños",
                  ],
                },
                {
                  title: "Implementación profesional",
                  description: "Para constructoras que necesitan dejar Esfera AI configurada y adoptada por su equipo.",
                  features: [
                    "Diagnóstico de procesos",
                    "Configuración personalizada",
                    "Migración de información",
                    "Capacitación por áreas",
                    "Acompañamiento hasta la adopción",
                    "Desde USD 2.500",
                  ],
                  featured: true,
                },
              ].map((path) => (
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
          <meta itemProp="operatingSystem" content="Web" />
          <meta itemProp="softwareVersion" content="Cloud SaaS" />
        </motion.article>
        <TrialCta />
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="modulos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="MÓDULOS DE OBRA" title="Todo el control de obra en un solo sistema." description="Desde el presupuesto y los APUs hasta compras, almacén, avance físico y administración del proyecto." />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {modules.map((module) => {
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
  const [activeScreenshot, setActiveScreenshot] = useState<(typeof productScreenshots)[number] | null>(null);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <AgenticTag>PANTALLAS REALES</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Así trabaja tu equipo dentro de Esfera AI.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:justify-self-end">
            Capturas reales del flujo que usan arquitectos, ingenieros, administradores y gerentes: presupuesto, cómputo, APU, compras, almacén y avances.
          </p>
        </div>

        <motion.div className="mt-12 rounded-[2.25rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          {productScreenshots.map((screenshot) => (
            <motion.article
              key={screenshot.title}
              variants={fadeUp}
              className="group grid gap-5 border-b border-slate-100 p-4 last:border-b-0 sm:p-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
            >
              <button
                type="button"
                onClick={() => setActiveScreenshot(screenshot)}
                className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-100 text-left transition focus:outline-none focus:ring-4 focus:ring-[#529B8D]/20"
                aria-label={`Ampliar captura: ${screenshot.title}`}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  Ampliar
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
      <AnimatePresence>
        {activeScreenshot && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveScreenshot(null)}
          >
            <motion.div
              className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-5">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3f8276]">{activeScreenshot.tag}</p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-slate-950 sm:text-lg">{activeScreenshot.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveScreenshot(null)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cerrar
                </button>
              </div>
              <div className="max-h-[78dvh] overflow-auto bg-slate-100 p-2 sm:p-4">
                <img src={activeScreenshot.src} alt={activeScreenshot.alt} className="mx-auto w-full rounded-xl border border-slate-200 bg-white object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <AgenticTag>CONTROL OPERATIVO</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Permisos, reportes, alertas y directorio para equipos de obra.
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Esfera AI no se queda en el presupuesto. También ayuda a ordenar usuarios, contratistas, proveedores, reportes gerenciales y alertas de demora.
          </p>
        </div>
        <motion.div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {platformCapabilities.map((capability) => {
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
  return (
    <section id="flujo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <AgenticTag>FLUJO DE TRABAJO</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Del presupuesto aprobado al control diario de la obra.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              El flujo de Esfera AI acompaña a tu equipo desde la configuración del proyecto hasta compras, almacén, avances, reportes e IA por chat.
            </p>
            <a href="https://docs.esfera.ai/flujo-trabajo" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center text-sm font-semibold text-[#3f8276]">
              Ver manual de uso
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <motion.div className="grid gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            {workflowSteps.map((step) => (
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
  return (
    <section id="ia" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#12231f] text-white shadow-[0_22px_64px_-46px_rgba(15,23,42,0.7)]">
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <AgenticTag className="border-white/10 bg-white/10 text-[#9dd5ca]">ESFERA AI CHAT</AgenticTag>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Pregunta por tu obra y obtén respuestas en segundos.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Esfera AI es un chat conectado a la información del proyecto. Pregunta por presupuesto, compras, almacén, avance o proveedores y recibe respuestas claras para tomar decisiones en obra.
            </motion.p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a href={FREE_SIGNUP_URL} className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#12231f] transition hover:bg-white/90 active:scale-[0.98]">
                Empezar gratis
              </a>
              <a href={IMPLEMENTATION_URL} className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]">
                Implementación desde USD 2.500
              </a>
            </div>
          </motion.div>
          <motion.div className="rounded-[1.35rem] border border-white/10 bg-[#081310] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-[#9dd5ca]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">chat de obra</span>
              </div>
              <span className="rounded-full bg-[#529B8D]/15 px-3 py-1 font-mono text-xs text-[#9dd5ca]">responde con tus datos</span>
            </div>
            <div className="mt-4 grid gap-3">
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#529B8D] p-3 text-xs leading-5 text-white shadow-sm sm:text-sm">
                ¿Cuánto cemento falta por llegar para la Torre Norte?
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/[0.08] p-3 text-xs leading-5 text-white/80 sm:text-sm">
                Faltan 72 bolsas de cemento IP-40 por recibir. La orden OC-2026-1184 pidió 320 bolsas y almacén registró 248 entradas. Te recomiendo revisar con compras si el proveedor confirmó la entrega restante.
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#529B8D] p-3 text-xs leading-5 text-white shadow-sm sm:text-sm">
                ¿Estamos gastando más de lo presupuestado?
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white p-3 text-xs leading-5 text-slate-800 sm:text-sm">
                En obra gruesa el consumo está 7.3% por encima del APU aprobado. El mayor desvío está en cemento y mano de obra. Puedo prepararte un resumen por etapa.
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                [Database, "Consulta datos"],
                [ShieldCheck, "Resume riesgos"],
                [Layers3, "Sugiere acciones"],
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
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="PARA EMPRESAS CON OBRA ACTIVA" title="Diseñado para constructoras que necesitan orden operativo real." description="Esfera AI puede usarse gratis, pero la implementación profesional está pensada para equipos que manejan presupuestos, compras, almacén, APUs, reportes y varias responsabilidades al mismo tiempo." />
        <motion.div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {useCases.map((useCase, index) => {
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
  return (
    <section id="modelo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="MODELO COMERCIAL" title="Dos formas de usar Esfera AI." description="Puedes empezar gratis desde hoy. Si tu empresa necesita adoptar Esfera AI como parte de su forma de trabajar, ofrecemos un servicio de implementación que configura la plataforma, acompaña al equipo y asegura una puesta en marcha exitosa." />
        <motion.div className="mt-10 rounded-[1.75rem] border border-[#529B8D]/20 bg-[#529B8D]/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <div>
            <AgenticTag>MENSAJE CLAVE</AgenticTag>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">El software es la herramienta. La implementación asegura que funcione en tu operación.</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Usar Esfera AI es fácil. Integrarlo a la forma de trabajar de tu empresa requiere un proceso. Para eso existe la implementación.</p>
          </div>
          <a href={IMPLEMENTATION_URL} className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-[#529B8D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:mt-0">
            Solicitar implementación
          </a>
        </motion.div>
        <motion.div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {usagePaths.map((path) => (
            <motion.article key={path.name} variants={fadeUp} className={cn("relative rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8", path.featured ? "border-[#529B8D] ring-4 ring-[#529B8D]/10" : "border-slate-200")}>
              {path.featured && <span className="absolute right-5 top-5 rounded-full bg-[#529B8D] px-3 py-1 text-xs font-semibold text-white">Foco B2B</span>}
              <AgenticTag>{path.tag}</AgenticTag>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{path.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">{path.description}</p>
              <div className="mt-8">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{path.price}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{path.period}</p>
              </div>
              <a href={path.href} className={cn("mt-7 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition active:scale-[0.98]", path.featured ? "bg-[#529B8D] text-white hover:bg-[#477f75]" : "border border-slate-200 bg-white text-slate-900 hover:border-[#529B8D]/40 hover:text-[#3f8276]")}>{path.cta}</a>
              <div className="mt-8 grid gap-6 border-t border-slate-100 pt-7 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Incluye</p>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">No incluye</p>
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
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="PREGUNTAS FRECUENTES" title="Gratis para usar no significa implementación gratuita." description="Respuestas directas para separar el acceso autoasistido del servicio profesional de implementación." />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {faqs.map((faq) => (
            <motion.article key={faq.question} variants={fadeUp} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950" itemProp="name">{faq.question}</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="mt-3 text-sm leading-6 text-slate-600" itemProp="text">{faq.answer}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
        <AgenticTag>ESFERA AI B2B</AgenticTag>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">Empezá gratis. Implementá bien cuando tu constructora necesite operar con orden.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">Usá la plataforma por tu cuenta o solicitá una implementación profesional desde USD 2.500 para dejar Esfera AI configurada, cargada y adoptada por tu equipo.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={FREE_SIGNUP_URL}>Empezar gratis</Button>
          <Button href={IMPLEMENTATION_URL} variant="secondary">Implementación desde USD 2.500</Button>
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
