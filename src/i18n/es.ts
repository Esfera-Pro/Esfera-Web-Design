// Contenido en español (neutro, es-419). La versión en inglés (en.ts) debe
// mantener exactamente la misma estructura (tipo SiteContent).
import {
  Building2,
  ChartNoAxesCombined,
  FileCheck2,
  FileSpreadsheet,
  GitBranch,
  HardHat,
  LineChart,
  LockKeyhole,
  ReceiptText,
  Ruler,
  Users2,
  Warehouse,
} from "lucide-react";
import { DOCS_URL, FREE_SIGNUP_URL, IMPLEMENTATION_URL, LOGIN_URL } from "../data/links";

export type Lang = "es" | "en";

export const esContent = {
  lang: "es" as Lang,
  htmlLang: "es-419",
  ogLocale: "es_LA",

  nav: {
    items: [
      { label: "Funcionalidades", to: "/funcionalidades" },
      { label: "Precios", to: "/precios" },
      { label: "Implementación", to: "/implementacion" },
      { label: "Aprende Esfera AI", href: DOCS_URL, external: true },
    ],
    login: "Iniciar sesión",
    signup: "Empezar gratis",
    homeLabel: "esfera.ai inicio",
    mainNavLabel: "Navegación principal",
    logoAlt: "Logo de Esfera AI",
  },

  hero: {
    tag: "Software gratuito para construcción",
    title: "Gestiona tu obra con Esfera AI. Software de gestión de obras.",
    subtitle:
      "Esfera AI reúne cómputo, presupuesto, análisis de precio unitario, compras, almacén, cronograma, obra y reportes en una sola plataforma. Empieza gratis de forma autoasistida o solicita implementación profesional para tu empresa.",
    modules: ["Cómputo", "Presupuesto", "APU", "Compras", "Almacén", "Cronograma", "Obra", "Reportes"],
    primaryCta: "Empezar gratis",
    secondaryCta: "Solicitar implementación",
    notePrefix: "Gratis para usar. Sin tarjeta.",
    noteStrong: "Implementación profesional desde USD 2.500",
    noteSuffix: ", según alcance.",
    stats: [
      ["USD 0", "para empezar"],
      ["8 módulos", "de obra"],
      ["IA", "con tus datos"],
    ],
  },

  definition: {
    tag: "QUÉ ES ESFERA AI",
    title: "El mismo software. Tú eliges cómo adoptarlo.",
    subtitle: "ERP de construcción con IA. Software de gestión de obras.",
    videoTitle: "Video explicativo: qué es Esfera AI",
    videoSummary:
      "Resumen del video: presentación de Esfera AI, la plataforma que conecta cómputo, presupuesto, APUs, compras, almacén, avance de obra y reportes en un solo sistema, con un chat de IA que responde con los datos de tu proyecto. Cubre también el modelo de uso: gratis de forma autoasistida, addon Esfera Plus e implementación profesional para constructoras.",
    exploreLabel: "Explorar funcionalidades",
    paths: [
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
        featured: false,
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
    ],
  },

  modulesSection: {
    tag: "MÓDULOS DE OBRA",
    title: "Todo el control de obra en un solo sistema.",
    description:
      "Desde el presupuesto y los APUs hasta compras, almacén, avance físico y administración del proyecto.",
  },

  screenshotsSection: {
    tag: "PANTALLAS REALES",
    title: "Así trabaja tu equipo dentro de Esfera AI.",
    description:
      "Capturas reales del flujo que usan arquitectos, ingenieros, administradores y gerentes: presupuesto, cómputo, APU, compras, almacén y avances.",
    zoom: "Ampliar",
    close: "Cerrar",
    zoomAriaPrefix: "Ampliar captura:",
  },

  platformSection: {
    tag: "CONTROL OPERATIVO",
    title: "Permisos, reportes, alertas y directorio para equipos de obra.",
    description:
      "Esfera AI no se queda en el presupuesto. También ayuda a ordenar usuarios, contratistas, proveedores, reportes gerenciales y alertas de demora.",
  },

  workflowSection: {
    tag: "FLUJO DE TRABAJO",
    title: "Del presupuesto aprobado al control diario de la obra.",
    description:
      "El flujo de Esfera AI acompaña a tu equipo desde la configuración del proyecto hasta compras, almacén, avances, reportes e IA por chat.",
    manualLink: "Ver manual de uso",
  },

  aiSection: {
    tag: "ESFERA AI CHAT",
    title: "Pregunta por tu obra y obtén respuestas en segundos.",
    description:
      "Esfera AI es un chat conectado a la información del proyecto. Pregunta por presupuesto, compras, almacén, avance o proveedores y recibe respuestas claras para tomar decisiones en obra.",
    primaryCta: "Empezar gratis",
    secondaryCta: "Implementación desde USD 2.500",
    chatHeader: "chat de obra",
    chatBadge: "responde con tus datos",
    conversations: [
      {
        q: "¿Cuánto cemento falta por llegar para la Torre Norte?",
        a: "Faltan 72 bolsas de cemento IP-40 por recibir. La orden OC-2026-1184 pidió 320 bolsas y almacén registró 248 entradas. Te recomiendo revisar con compras si el proveedor confirmó la entrega restante.",
      },
      {
        q: "¿Estamos gastando más de lo presupuestado?",
        a: "En obra gruesa el consumo está 7.3% por encima del APU aprobado. El mayor desvío está en cemento y mano de obra. Puedo prepararte un resumen por etapa.",
      },
    ],
    capabilities: ["Consulta datos", "Resume riesgos", "Sugiere acciones"],
  },

  useCasesSection: {
    tag: "PARA EMPRESAS CON OBRA ACTIVA",
    title: "Diseñado para constructoras que necesitan orden operativo real.",
    description:
      "Esfera AI puede usarse gratis, pero la implementación profesional está pensada para equipos que manejan presupuestos, compras, almacén, APUs, reportes y varias responsabilidades al mismo tiempo.",
  },

  businessModel: {
    tag: "MODELO COMERCIAL",
    title: "Tres formas de usar Esfera AI.",
    description:
      "Empieza gratis de forma autoasistida, amplía capacidad con el addon Esfera Plus cuando lo necesites, o contrata la implementación profesional que configura la plataforma, acompaña al equipo y asegura una puesta en marcha exitosa.",
    keyMessageTag: "MENSAJE CLAVE",
    keyMessageTitle: "El software es la herramienta. La implementación asegura que funcione en tu operación.",
    keyMessageText:
      "Usar Esfera AI es fácil. Integrarlo a la forma de trabajar de tu empresa requiere un proceso. Para eso existe la implementación.",
    keyMessageCta: "Solicitar implementación",
    focusBadge: "Foco B2B",
    includesLabel: "Incluye",
    excludesLabel: "No incluye",
    viewPricingLink: "Ver detalles de precios",
  },

  faqSection: {
    tag: "PREGUNTAS FRECUENTES",
    title: "Qué incluye el uso gratuito y cuándo contratar implementación.",
    description:
      "Respuestas directas para separar el acceso autoasistido del servicio profesional de implementación.",
  },

  finalCta: {
    tag: "ESFERA AI B2B",
    title: "Empieza gratis. Implementa bien cuando tu constructora necesite operar con orden.",
    description:
      "Usa la plataforma por tu cuenta o solicita una implementación profesional desde USD 2.500 para dejar Esfera AI configurada, cargada y adoptada por tu equipo.",
    primaryCta: "Empezar gratis",
    secondaryCta: "Implementación desde USD 2.500",
  },

  trialCta: {
    strong: "Esfera AI es gratis para usar.",
    text: "Si necesitas implementación, capacitación o soporte personalizado, nuestro equipo lo cotiza según alcance.",
    cta: "Empezar gratis",
  },

  modules: [
    {
      title: "Cómputo y Presupuesto",
      tag: "PRESUPUESTO",
      description:
        "Arma presupuestos por etapas, categorías e ítems. Revisa cantidades, materiales, mano de obra, avance y almacén desde una tabla de control.",
      icon: FileSpreadsheet,
      className: "md:col-span-2",
    },
    {
      title: "Análisis de Precio Unitario",
      tag: "APU",
      description:
        "Crea precios unitarios con materiales, mano de obra, equipos y herramientas. Usa más de 400 ítems listos y 2.000 materiales base editables.",
      icon: Ruler,
      className: "",
    },
    {
      title: "Compras",
      tag: "COMPRAS",
      description:
        "Convierte necesidades de obra en pedidos, compara cotizaciones, aprueba compras y emite órdenes vinculadas al presupuesto aprobado.",
      icon: ReceiptText,
      className: "",
    },
    {
      title: "Gestión de Almacén",
      tag: "ALMACÉN",
      description:
        "Controla entradas, salidas, stock y movimientos de materiales para reducir pérdidas y saber qué hay disponible en cada obra.",
      icon: Warehouse,
      className: "md:col-span-2",
    },
    {
      title: "Administración de Proyecto",
      tag: "PROYECTO",
      description:
        "Cruza presupuesto, avance, materiales, mano de obra y herramientas por ítem y etapa para que gerencia vea el estado real del proyecto.",
      icon: GitBranch,
      className: "",
    },
    {
      title: "Módulo de Obras",
      tag: "OBRA",
      description:
        "Registra avances, planillas, retenciones, consumos y observaciones para conectar la oficina técnica con lo que ocurre en campo.",
      icon: HardHat,
      className: "",
    },
  ],

  capabilities: [
    {
      title: "Usuarios, permisos y proyectos",
      tag: "ACCESOS",
      description:
        "Asigna permisos por rol y por proyecto para que cada arquitecto, ingeniero, encargado o gerente vea solo lo que necesita.",
      icon: LockKeyhole,
    },
    {
      title: "Personas y directorio operativo",
      tag: "DIRECTORIO",
      description:
        "Centraliza comitentes, contratistas y proveedores para compras, planillas, contactos y autorizaciones sin duplicar información.",
      icon: Users2,
    },
    {
      title: "Reportes gerenciales",
      tag: "REPORTES",
      description:
        "Entrega reportes de presupuesto, ejecución, saldo, rendiciones y progreso para reuniones de obra y decisiones de dirección.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Control y alertas",
      tag: "ALERTAS",
      description:
        "Detecta demoras en pedidos, cotizaciones, órdenes de compra, pagos o materiales en tránsito y avisa a los responsables.",
      icon: FileCheck2,
    },
  ],

  workflowSteps: [
    {
      title: "1. Configurar empresa y proyecto",
      description:
        "Crea tu empresa, registra la obra y define quién participa: arquitectos, ingenieros, administrativos, encargados y gerencia.",
    },
    {
      title: "2. Modelar presupuesto y APUs",
      description:
        "Carga etapas, categorías, ítems, materiales, mano de obra, equipos y precios unitarios para dejar aprobado el costo base.",
    },
    {
      title: "3. Ejecutar compras y almacén",
      description:
        "Solicita materiales, compara proveedores, autoriza compras y registra entradas, salidas y stock de almacén.",
    },
    {
      title: "4. Controlar obra y finanzas",
      description:
        "Mide avances, planillas, retenciones, pagos, saldos por ejecutar y desviaciones contra el presupuesto aprobado.",
    },
    {
      title: "5. Consultar IA y reportes",
      description:
        "Pregunta por chat el estado de la obra, inventario, compras pendientes, APUs, proveedores, planillas y reportes.",
    },
  ],

  faqs: [
    {
      question: "¿Esfera AI es gratis para usar?",
      answer:
        "Sí. Puedes crear una cuenta y usar la plataforma de forma autoasistida, con tutoriales, documentación y recursos para avanzar por tu cuenta.",
      topic: "general",
    },
    {
      question: "¿Qué no incluye el uso gratuito?",
      answer:
        "El acceso gratuito no incluye soporte humano, capacitación personalizada, migración de datos, carga de APUs, configuración guiada, integraciones ni acompañamiento operativo.",
      topic: "precios",
    },
    {
      question: "¿Cuándo conviene contratar implementación?",
      answer:
        "Cuando una constructora quiere adoptar Esfera AI en serio: ordenar procesos, configurar obras, cargar información inicial, capacitar al equipo y dejar el sistema funcionando dentro de la operación real.",
      topic: "implementacion",
    },
    {
      question: "¿Desde cuánto empieza la implementación?",
      answer:
        "La implementación profesional comienza desde USD 2.500 y se cotiza según alcance, cantidad de obras, carga inicial, capacitación, soporte, integraciones y necesidades de la empresa.",
      topic: "precios",
    },
    {
      question: "¿Qué incluye Esfera AI?",
      answer:
        "Incluye un chat para consultar la información de la obra en lenguaje natural: avance, presupuesto, compras, almacén, APUs, proveedores, contratistas y reportes.",
      topic: "general",
    },
    {
      question: "¿La implementación reemplaza al software gratuito?",
      answer:
        "No. El software gratuito abre la puerta. La implementación es un servicio pago para empresas que necesitan diagnóstico, configuración, capacitación, soporte y adopción operativa.",
      topic: "implementacion",
    },
  ],

  useCases: [
    {
      title: "Constructoras",
      description:
        "Controla presupuesto, compras, almacén y avances por obra para detectar desvíos antes de que afecten el margen.",
      icon: Building2,
    },
    {
      title: "Arquitectos y gerentes de proyecto",
      description:
        "Ordena presupuesto, etapas, decisiones, proveedores y avance para coordinar obra sin depender de planillas dispersas.",
      icon: Users2,
    },
    {
      title: "Ingenieros",
      description:
        "Trabaja con APUs, cantidades, materiales, contratistas y avance físico conectados al presupuesto aprobado.",
      icon: LineChart,
    },
  ],

  plans: [
    {
      kind: "free",
      name: "Uso autoasistido",
      tag: "AUTOASISTIDO",
      price: "USD 0",
      period: "para empezar",
      description:
        "Para usuarios, contratistas o empresas que quieren explorar la plataforma, ordenar una obra y avanzar por su cuenta.",
      includes: [
        "Acceso gratuito a la plataforma",
        "Uso autoasistido",
        "Tutoriales y documentación",
        "Guías para comenzar",
        "Ideal para explorar o avanzar solo",
      ],
      excludes: [],
      cta: "Crear cuenta gratis",
      featured: false,
    },
    {
      kind: "plus",
      name: "Addon Esfera Plus",
      tag: "PLUS",
      price: "USD 30 / mes",
      period: "o USD 300 / año",
      description: "Para ampliar capacidad y mantener varios proyectos activos.",
      includes: [
        "Múltiples empresas y proyectos",
        "10 GB de almacenamiento",
        "Proyectos activos mientras el addon esté pagado",
        "Sin expiración por inactividad",
      ],
      excludes: [],
      cta: "Consultar por Esfera Plus",
      featured: false,
    },
    {
      kind: "implementation",
      name: "Implementación profesional",
      tag: "SERVICIO B2B",
      price: "Desde USD 2.500",
      period: "según alcance",
      description:
        "Para constructoras que necesitan diagnóstico, configuración, carga inicial, capacitación y acompañamiento para adoptar Esfera AI bien.",
      includes: [
        "Diagnóstico operativo",
        "Setup y configuración inicial",
        "Carga o migración de datos",
        "Capacitación al equipo",
        "Acompañamiento y soporte",
        "Integraciones bajo cotización",
      ],
      excludes: [],
      cta: "Solicitar implementación",
      featured: true,
    },
  ],

  screenshots: [
    {
      title: "Presupuesto consolidado",
      tag: "01 / PRESUPUESTO",
      description: "Tabla de presupuesto con desglose de costos por ítem, materiales, mano de obra, equipos y totales por etapa.",
      src: "https://docs.esfera.ai/presupuesto/tabla-presupuesto.png",
      alt: "Tabla de presupuesto con desglose de costos en Esfera AI",
    },
    {
      title: "Cómputo por etapas",
      tag: "02 / CÓMPUTO",
      description: "Formulario para asignar ítems del APU a etapas del proyecto y definir cantidades ejecutables.",
      src: "https://docs.esfera.ai/presupuesto/formulario-computo.png",
      alt: "Formulario de cómputo por etapas en Esfera AI",
    },
    {
      title: "Catálogo APU",
      tag: "03 / APU",
      description: "Tres formas de crear ítems: importar desde Esfera AI, importar desde Excel o crear desde cero.",
      src: "https://docs.esfera.ai/apu/items-opciones.png",
      alt: "Opciones para crear ítems de análisis de precio unitario en Esfera AI",
    },
    {
      title: "Pedidos de compra",
      tag: "04 / COMPRAS",
      description: "Listado de pedidos con estado, materiales solicitados, fecha de creación y acciones disponibles.",
      src: "https://docs.esfera.ai/compras/listado-pedidos.jpg",
      alt: "Listado de pedidos de compra en Esfera AI",
    },
    {
      title: "Stock de almacén",
      tag: "05 / ALMACÉN",
      description: "Inventario disponible en tiempo real, actualizado por entradas y salidas de almacén.",
      src: "https://docs.esfera.ai/almacen/stock-almacen.png",
      alt: "Visualización del stock de almacén en Esfera AI",
    },
    {
      title: "Avances de obra",
      tag: "06 / OBRA",
      description: "Registro de progreso por ítem, contratista, cantidad ejecutada, etapa y observaciones.",
      src: "https://docs.esfera.ai/obra/formulario-avance.png",
      alt: "Formulario de registro de avances de obra en Esfera AI",
    },
  ],

  featuresPage: {
    tag: "FUNCIONALIDADES",
    title: "Todo el ciclo de la obra en una sola plataforma.",
    description:
      "Cómputo, presupuesto y APUs; compras y almacén; control de obra y reportes gerenciales; e IA que responde con los datos de tu proyecto.",
  },

  pricingPage: {
    tag: "PRECIOS",
    title: "Gratis para empezar. Crece cuando tu constructora lo necesite.",
    description:
      "Esfera AI se puede usar gratis de forma autoasistida. Cuando necesites más capacidad o adopción operativa, el addon Esfera Plus y el servicio de implementación profesional están disponibles.",
    cardsTitle: "Tres formas de usar Esfera AI",
    freeCard: {
      name: "Uso autoasistido",
      tag: "GRATIS",
      price: "USD 0",
      period: "para siempre",
      description: "Para explorar la plataforma, ordenar una obra y avanzar por tu cuenta.",
      includes: [
        "1 empresa por usuario",
        "1 proyecto por usuario",
        "Presupuestos ilimitados",
        "100 MB de almacenamiento",
        "Usuarios secundarios ilimitados",
        "Acceso a empresa y proyecto demo",
      ],
      cta: "Crear cuenta gratis",
    },
    plusCard: {
      name: "Addon Esfera Plus",
      tag: "PLUS",
      price: "USD 30 / mes",
      period: "o USD 300 / año",
      description: "Para ampliar capacidad y mantener varios proyectos activos.",
      includes: [
        "Múltiples empresas y proyectos",
        "10 GB de almacenamiento",
        "Proyectos activos mientras el addon esté pagado",
        "Sin expiración por inactividad",
      ],
      cta: "Consultar por Esfera Plus",
    },
    implementationCard: {
      name: "Implementación profesional",
      tag: "SERVICIO B2B",
      price: "Desde USD 2.500",
      period: "cotización por alcance",
      description: "Para constructoras que necesitan dejar el sistema configurado, cargado y adoptado por su equipo.",
      includes: [
        "Diagnóstico operativo",
        "Setup y configuración inicial",
        "Carga o migración de datos",
        "Capacitación al equipo",
        "Acompañamiento y soporte",
        "Integraciones bajo cotización",
      ],
      cta: "Solicitar implementación",
    },
    faqTitle: "Preguntas sobre precios",
    note: "Precios en dólares estadounidenses (USD). La implementación se cotiza según alcance, cantidad de obras, carga inicial, capacitación, soporte e integraciones.",
    viewImplementation: "Conocer la implementación",
  },

  implementationPage: {
    tag: "IMPLEMENTACIÓN PROFESIONAL",
    title: "Deja Esfera AI configurada, cargada y adoptada por tu equipo.",
    description:
      "Servicio B2B para constructoras que quieren adoptar Esfera AI en serio: ordenar procesos, configurar obras, cargar información inicial, capacitar al equipo y dejar el sistema funcionando dentro de la operación real.",
    includesTitle: "Qué incluye",
    includes: [
      {
        title: "Diagnóstico operativo",
        description: "Revisamos tus procesos de presupuesto, compras, almacén y obra para definir la configuración adecuada.",
      },
      {
        title: "Setup y configuración inicial",
        description: "Creamos empresas, proyectos, usuarios, roles y permisos según la estructura de tu constructora.",
      },
      {
        title: "Carga o migración de datos",
        description: "Cargamos APUs, materiales, proveedores y los datos iniciales de tus obras.",
      },
      {
        title: "Capacitación al equipo",
        description: "Sesiones por áreas: presupuesto, compras, almacén, obra y gerencia, con casos reales.",
      },
      {
        title: "Acompañamiento y soporte",
        description: "Acompañamos la operación hasta que el equipo usa el sistema de forma autónoma.",
      },
      {
        title: "Integraciones",
        description: "Conexiones con tus herramientas existentes, bajo cotización.",
      },
    ],
    processTitle: "Cómo funciona",
    processSteps: [
      { title: "1. Diagnóstico", description: "Entendemos tu operación y definimos el alcance del proyecto." },
      { title: "2. Plan y configuración", description: "Configuramos la plataforma según tus procesos, roles y obras." },
      { title: "3. Carga inicial", description: "Migramos catálogos, APUs y datos de tus proyectos." },
      { title: "4. Capacitación", description: "Entrenamos a cada área con los casos reales de tu empresa." },
      { title: "5. Acompañamiento", description: "Seguimos la operación y ajustamos hasta la adopción completa." },
    ],
    pricingTitle: "Desde USD 2.500",
    pricingText:
      "El precio final se cotiza según alcance: cantidad de obras, carga inicial de datos, capacitación, soporte e integraciones.",
    cta: "Solicitar implementación",
    viewPricing: "Ver precios",
  },

  notFound: {
    tag: "ERROR 404",
    title: "Esta página no existe.",
    description: "El enlace puede estar desactualizado. Puedes volver al inicio o explorar las funcionalidades.",
    backHome: "Volver al inicio",
  },

  legalPage: {
    tag: "LEGAL",
    title: "Política de privacidad, términos y condiciones.",
    subtitle:
      "Información legal de Esfera Solutions LLC para usuarios de www.esfera.ai, la plataforma web y sus aplicaciones móviles.",
    backLink: "Volver a esfera.ai",
    company: "ESFERA SOLUTIONS LLC",
    address: "2 S Biscayne Blvd, Ste 3200, Miami, FL 33131, United States",
  },

  footer: {
    description:
      "Plataforma gratuita para gestión de obra, con implementación profesional para constructoras que necesitan adopción operativa.",
    company: "ESFERA SOLUTIONS LLC",
    address: "2 S Biscayne Blvd, Ste 3200",
    cityLine: "Miami, FL 33131, United States",
    linksTitle: "Enlaces",
    links: [
      { label: "Documentación", href: DOCS_URL, external: true },
      { label: "Funcionalidades", to: "/funcionalidades" },
      { label: "Precios", to: "/precios" },
      { label: "Implementación", to: "/implementacion" },
      { label: "Empezar gratis", href: FREE_SIGNUP_URL, external: true },
      { label: "Solicitar implementación", href: IMPLEMENTATION_URL, external: true },
      { label: "Iniciar sesión", href: LOGIN_URL, external: true },
      { label: "Política de privacidad", to: "/privacidad" },
      { label: "Términos y condiciones", to: "/terminos#terminos" },
    ],
    socialTitle: "Redes sociales",
    copyright: "ESFERA SOLUTIONS LLC.",
    tagline: "Gratis para usar · Implementación desde USD 2.500",
  },

  languageSwitcher: {
    ariaLabel: "Cambiar idioma",
  },

  whatsapp: {
    ariaLabel: "Contactar por WhatsApp",
  },

  pages: {
    home: {
      title: "Gestión de obras y presupuestos con IA | Gratis | Esfera AI",
      description:
        "Software de gestión de obras y presupuestos con IA. Úsalo gratis o contrata implementación profesional desde USD 2.500.",
    },
    features: {
      title: "Funcionalidades: módulos de obra, compras e IA | Esfera AI",
      description:
        "Cómputo, presupuesto, APU, compras, almacén, cronograma, avance de obra y reportes gerenciales, con chat de IA conectado a tus datos.",
    },
    pricing: {
      title: "Precios de Esfera AI: plan gratis, Plus e implementación",
      description:
        "Usa Esfera AI gratis, amplía capacidad con el addon Esfera Plus por USD 30/mes o contrata implementación profesional desde USD 2.500.",
    },
    implementation: {
      title: "Implementación profesional para constructoras | Esfera AI",
      description:
        "Servicio B2B de implementación de Esfera AI: diagnóstico, configuración, migración de datos, capacitación y acompañamiento. Desde USD 2.500.",
    },
    legal: {
      title: "Información legal: privacidad y términos | Esfera AI",
      description:
        "Política de privacidad y términos y condiciones de Esfera Solutions LLC para los servicios de www.esfera.ai.",
    },
    notFound: {
      title: "Página no encontrada | Esfera AI",
      description: "El enlace puede estar desactualizado. Vuelve al inicio de esfera.ai.",
    },
  },
};

export type SiteContent = typeof esContent;

// ---------------------------------------------------------------------------
// Contenido legal (solo español: es la versión contractual vinculante).
// ---------------------------------------------------------------------------

export const legalSections = [
  {
    title: "Política de Privacidad",
    intro:
      "En Esfera nos tomamos tu privacidad muy en serio. Queremos que sepas cómo recogemos, usamos y protegemos tu información, y cuáles son tus derechos sobre ella.",
    items: [
      {
        title: "1. ¿Qué datos recogemos?",
        paragraphs: [
          "Pedimos datos para crear tu cuenta: nombre, email, teléfono, y otra información que voluntariamente compartas (direcciones, archivos, etc.).",
          "Cuando usas Esfera, recibimos información sobre tu actividad, tu dispositivo, la app o la web y, si aceptas, tu ubicación.",
          "Podemos recopilar datos a través de tecnologías como cookies o servicios de nuestros partners para mejorar tu experiencia.",
        ],
      },
      {
        title: "2. ¿Para qué usamos tus datos?",
        paragraphs: [
          "Para que puedas usar Esfera y acceder a tus proyectos de construcción.",
          "Para personalizar tu experiencia y mejorar nuestros servicios.",
          "Para enviarte avisos sobre la plataforma, ayudarte si necesitas soporte, o enviarte información útil (puedes pedir dejar de recibir correos promocionales).",
          "Para proteger la seguridad de todos los usuarios.",
        ],
      },
      {
        title: "3. ¿Con quién compartimos tus datos?",
        paragraphs: [
          "Compartimos información con proveedores de servicios de confianza, o si la ley lo exige (como una orden judicial).",
          "Podemos compartir información anónima (que no permite identificarte) para fines estadísticos.",
        ],
      },
      {
        title: "4. ¿Qué derechos tienes?",
        paragraphs: [
          "Puedes acceder a tus datos personales, modificarlos si están incorrectos y pedir que los eliminemos cuando ya no los necesitemos.",
        ],
      },
      {
        title: "5. ¿Cómo protegemos tu información?",
        paragraphs: [
          "Usamos medidas técnicas y organizativas (cifrado, control de acceso) para que tus datos estén seguros.",
          "Solo personas autorizadas dentro de Esfera pueden acceder a tus datos.",
          "Si hay algún incidente de seguridad, te lo comunicaremos.",
        ],
      },
      {
        title: "6. ¿Dónde se guardan tus datos?",
        paragraphs: [
          "Los datos pueden almacenarse en servidores fuera de tu país, pero siempre bajo estrictas medidas de seguridad.",
        ],
      },
      {
        title: "7. Cambios en esta política",
        paragraphs: [
          "Te avisaremos aquí y en la app sobre cambios importantes en esta política. Si no estás de acuerdo, puedes dejar de usar Esfera.",
        ],
      },
    ],
  },
  {
    title: "Términos y Condiciones",
    items: [
      {
        title: "1. Aceptación de los Términos",
        paragraphs: [
          "Al crear una cuenta y utilizar los servicios de Esfera Solutions LLC (“Esfera”, 2 S Biscayne Blvd, Ste 3200, Miami, FL 33131, United States) a través de www.esfera.ai y sus aplicaciones móviles, aceptas estos Términos y Condiciones (“Términos”). Si no estás de acuerdo, no utilices los Servicios.",
        ],
      },
      {
        title: "2. Definiciones",
        paragraphs: [
          "Servicios: Incluyen la web, la aplicación y cualquier producto o función asociada ofrecida por Esfera.",
          "Cuenta: El registro personal creado para acceder a los Servicios.",
          "Información Personal: Datos que pueden identificarte, como nombre, email, teléfono y otros datos compartidos voluntariamente.",
        ],
      },
      {
        title: "3. Creación y gestión de la cuenta",
        paragraphs: [
          "Para usar Esfera, debes facilitar datos verídicos como nombre, email y teléfono. Eres responsable de tu información de acceso y de toda actividad en tu cuenta. Informa a Esfera de inmediato en caso de uso no autorizado.",
        ],
      },
      { title: "4. Edad mínima", paragraphs: ["Debes ser mayor de 18 años o la edad legal en tu país."] },
      {
        title: "5. Uso de los Servicios",
        paragraphs: [
          "El usuario debe usar Esfera de manera legal y responsable, no compartir cuentas ni credenciales con terceros, no dañar, sobrecargar, hackear ni vulnerar el sistema, y respetar la propiedad de la información y los derechos ajenos.",
        ],
      },
      {
        title: "6. Recolección y uso de datos personales",
        paragraphs: [
          "La creación de una cuenta requiere tus datos básicos y cualquier otro dato voluntario (como archivos, direcciones, etc.). Al usar Esfera, recogemos información sobre tu actividad, dispositivo, ubicación (previo consentimiento) y datos técnicos mediante cookies y partners tecnológicos para mejorar tu experiencia. Consulta la Política de Privacidad para detalles específicos sobre el tratamiento de datos.",
        ],
      },
      {
        title: "7. Finalidades del tratamiento de datos",
        paragraphs: [
          "Tus datos se usan para brindar acceso a tus proyectos, personalizar y mejorar nuestros servicios, comunicarte asuntos de la plataforma, soporte e información relevante, y proteger la seguridad de la plataforma y de los usuarios.",
        ],
      },
      {
        title: "8. Compartición de datos y confidencialidad",
        paragraphs: [
          "Compartimos información solo con proveedores de servicios de confianza o por obligación legal (por ejemplo, orden judicial). Esfera puede compartir datos anónimos y agregados para fines estadísticos o de mejora de servicios. Solo el personal autorizado accede a tus datos y solo para los fines permitidos.",
        ],
      },
      {
        title: "9. Derechos del usuario",
        paragraphs: [
          "Puedes acceder a tus datos personales, rectificarlos si están incorrectos y solicitar su supresión cuando no sean necesarios para la finalidad para la que fueron recogidos.",
        ],
      },
      {
        title: "10. Seguridad y almacenamiento",
        paragraphs: [
          "Empleamos medidas técnicas y organizacionales para proteger tus datos (cifrado, controles de acceso, etc.). Si ocurre un incidente de seguridad que afecte tus datos, serás notificado.",
        ],
      },
      {
        title: "11. Transferencia internacional de datos",
        paragraphs: [
          "Tus datos pueden ser almacenados en servidores fuera de tu país, manteniéndose estrictas medidas de seguridad y cumpliendo con normativas de protección internacional de datos.",
        ],
      },
      {
        title: "12. Cookies y tecnologías similares",
        paragraphs: [
          "Utilizamos cookies y tecnologías afines para mejorar tu experiencia. Puedes gestionarlas desde la configuración de tu navegador.",
        ],
      },
      {
        title: "13. Modificaciones a los Servicios y Términos",
        paragraphs: [
          "Esfera puede adaptar, suspender o modificar sus servicios, prestaciones y costes, informando con antelación cuando sea posible. Los cambios en estos Términos se comunicarán en la web y/o en la app. Tu uso continuado equivaldrá a tu aceptación. Si no estás de acuerdo, puedes dejar de usar los servicios.",
        ],
      },
      {
        title: "14. Planes de membresía y addon Esfera Plus",
        paragraphs: [
          "14.1. Usuario Gratis de Esfera",
          "La cuenta gratuita de Esfera incluye:",
          "1 empresa por usuario.",
          "1 proyecto por usuario.",
          "Acceso a la empresa demo y al proyecto demo cuando aplique.",
          "100 MB de almacenamiento.",
          "Presupuesto ilimitado.",
          "Usuarios secundarios ilimitados.",
          "14.2. Addon Esfera Plus",
          "Esfera Plus es un addon temporal con un costo de USD 30 al mes y otorga:",
          "Múltiples proyectos y empresas para el usuario principal.",
          "10 GB de almacenamiento visible para los proyectos del usuario.",
          "La continuidad de los proyectos mientras el addon permanezca pagado.",
          "Mientras el addon Esfera Plus esté activo y pagado, los proyectos no expirarán por inactividad.",
          "14.3. Consultoría Esfera",
          "La Consultoría Esfera tiene un precio a cotizar según el cliente y la necesidad.",
          "El addon Esfera Plus estará incluido en las consultorías.",
          "La administración de las consultorías y los pagos se realizará fuera del sistema.",
          "Terminada la consultoría, el usuario podrá contratar el addon Esfera Plus para mantener sus proyectos.",
        ],
      },
      {
        title: "15. Inactividad, expiración y eliminación de datos",
        paragraphs: [
          "La inactividad se evalúa por proyecto. Se considera inactivo cuando ningún usuario inicia sesión en el proyecto durante el período indicado.",
          "15.1. Avisos previos por email",
          "A los 30 días de inactividad del proyecto, se enviará un email al usuario principal indicando que en 30 días se eliminarán el usuario, la empresa, el proyecto y los datos asociados.",
          "A los 45 días de inactividad, se enviará un email indicando que en 15 días se eliminarán el usuario, la empresa, el proyecto y los datos asociados.",
          "A los 57 días de inactividad, se enviará un email indicando que en 3 días se eliminarán el usuario, la empresa, el proyecto y los datos asociados.",
          "A los 59 días de inactividad, se enviará un email indicando que en 1 día se eliminarán el usuario, la empresa, el proyecto y los datos asociados.",
          "15.2. Eliminación final",
          "A los 60 días de inactividad, se eliminarán el usuario principal, los usuarios secundarios, la empresa, el proyecto y todos los datos asociados.",
          "Se enviará una notificación final indicando que el proyecto y sus datos relacionados fueron eliminados.",
          "15.3. Caso de usuarios que tuvieron Esfera Plus",
          "Si un usuario tuvo addon Esfera Plus y actualmente conserva acceso a un único proyecto activo, ese usuario no será eliminado.",
          "En ese caso, solo se eliminarán los proyectos inactivos y los datos asociados a esos proyectos.",
          "Si el usuario vuelve a contratar Esfera Plus, los proyectos que correspondan podrán restaurarse conforme a la política interna de recuperación.",
          "15.4. Si se deja de pagar Esfera Plus",
          "Al dejar de pagar el addon, vuelve a aplicarse la regla de 60 días de inactividad.",
          "Si el usuario regresa sin addon y tiene varios proyectos asociados, deberá elegir uno solo para volver a la cuenta.",
          "Los otros proyectos quedarán sujetos a la regla de inactividad de 60 días y podrán restaurarse si el usuario vuelve a pagar el addon.",
        ],
      },
      {
        title: "16. Propiedad intelectual",
        paragraphs: [
          "Todos los derechos de software, contenidos, diseño y marca pertenecen a Esfera Solutions LLC o terceros licenciantes. El usuario dispone solo de una licencia limitada y revocable de uso personal.",
        ],
      },
      {
        title: "17. Suspensión o cancelación de cuentas",
        paragraphs: [
          "Esfera puede suspender o cancelar cuentas por uso indebido, incumplimiento de normas o medidas preventivas de seguridad. La cancelación no implica reembolso por periodos no consumidos.",
        ],
      },
      {
        title: "18. Limitación de responsabilidad",
        paragraphs: [
          "Esfera no garantiza disponibilidad ininterrumpida ni ausencia de errores y no será responsable por pérdidas indirectas, uso indebido del servicio o interrupciones, salvo los casos exigidos por ley aplicable.",
        ],
      },
      {
        title: "19. Ley y jurisdicción aplicable",
        paragraphs: [
          "Estos Términos se rigen por las leyes del Estado de Florida, Estados Unidos de América. Cualquier disputa relacionada con estos Términos será resuelta exclusivamente ante los tribunales estatales o federales competentes ubicados en el Estado de Florida, y tanto Esfera como el usuario aceptan someterse expresamente a dicha jurisdicción.",
        ],
      },
      {
        title: "20. Contacto",
        paragraphs: [
          "Titular de los servicios: Esfera Solutions LLC, con domicilio en 2 S Biscayne Blvd, Ste 3200, Miami, FL 33131, United States.",
          "Cualquier duda, consulta o ejercicio de derechos podrá dirigirse a info@esfera.ai.",
        ],
      },
    ],
  },
];
