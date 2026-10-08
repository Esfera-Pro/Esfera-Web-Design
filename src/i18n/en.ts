// English content. Must mirror the structure of es.ts (SiteContent).
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
import type { SiteContent } from "./es";

export const enContent: SiteContent = {
  lang: "en",
  htmlLang: "en",
  ogLocale: "en_US",

  nav: {
    items: [
      { label: "Features", to: "/en/features/" },
      { label: "Pricing", to: "/en/pricing/" },
      { label: "Implementation", to: "/en/implementation/" },
      { label: "Learn Esfera AI", href: DOCS_URL, external: true },
    ],
    login: "Log in",
    signup: "Start for free",
    homeLabel: "esfera.ai home",
    mainNavLabel: "Main navigation",
    logoAlt: "Esfera AI logo",
  },

  hero: {
    tag: "Free construction software",
    title: "Construction management software with AI, free to start",
    subtitle:
      "Esfera AI brings takeoffs, budgets, unit price analysis, purchasing, warehouse, schedules, site progress and reports into a single platform. Start free on your own or request professional implementation for your company.",
    modules: ["Takeoff", "Budget", "UPA", "Purchasing", "Warehouse", "Schedule", "Site", "Reports"],
    primaryCta: "Start for free",
    secondaryCta: "Request implementation",
    notePrefix: "Free to use. No credit card.",
    noteStrong: "Professional implementation from USD 2,500",
    noteSuffix: ", scoped per project.",
    stats: [
      ["USD 0", "to get started"],
      ["8 modules", "for construction"],
      ["AI", "on your data"],
    ],
  },

  definition: {
    tag: "WHAT IS ESFERA AI",
    title: "The same software. You choose how to adopt it.",
    subtitle: "AI-powered construction ERP.",
    videoTitle: "Explainer video: what is Esfera AI",
    videoSummary:
      "Video summary: an introduction to Esfera AI, the platform that connects takeoffs, budgets, unit price analysis, purchasing, warehouse, site progress and reports in one system, with an AI chat that answers using your project data. It also covers the usage model: free self-serve, the Esfera Plus add-on and professional implementation for construction companies.",
    exploreLabel: "Explore features",
    paths: [
      {
        title: "Start for free",
        description: "To get to know Esfera AI, create projects and move forward on your own.",
        features: [
          "Create projects",
          "Learn with tutorials",
          "Explore every feature",
          "No credit card",
          "Ideal for independent professionals and small teams",
        ],
        featured: false,
      },
      {
        title: "Professional implementation",
        description: "For construction companies that need Esfera AI configured and adopted by their team.",
        features: [
          "Process diagnosis",
          "Custom configuration",
          "Data migration",
          "Role-based training",
          "Guidance through adoption",
          "From USD 2,500",
        ],
        featured: true,
      },
    ],
  },

  modulesSection: {
    tag: "CONSTRUCTION MODULES",
    title: "All your site control in one system.",
    description: "From budgets and unit price analysis to purchasing, warehouse, physical progress and project management.",
  },

  screenshotsSection: {
    tag: "REAL SCREENS",
    title: "This is how your team works inside Esfera AI.",
    description:
      "Real screenshots of the workflow used by architects, engineers, administrators and managers: budget, takeoff, UPA, purchasing, warehouse and progress.",
    zoom: "Enlarge",
    close: "Close",
    zoomAriaPrefix: "Enlarge screenshot:",
  },

  platformSection: {
    tag: "OPERATIONAL CONTROL",
    title: "Permissions, reports, alerts and directory for construction teams.",
    description:
      "Esfera AI goes beyond the budget. It also helps you organize users, contractors, suppliers, management reports and delay alerts.",
  },

  workflowSection: {
    tag: "WORKFLOW",
    title: "From the approved budget to daily site control.",
    description:
      "The Esfera AI workflow supports your team from project setup through purchasing, warehouse, progress, reports and AI chat.",
    manualLink: "View user manual",
  },

  aiSection: {
    tag: "ESFERA AI CHAT",
    title: "Ask about your project and get answers in seconds.",
    description:
      "Esfera AI is a chat connected to your project information. Ask about budgets, purchasing, warehouse, progress or suppliers and get clear answers to make decisions on site.",
    primaryCta: "Start for free",
    secondaryCta: "Implementation from USD 2,500",
    chatHeader: "site chat",
    chatBadge: "answers with your data",
    conversations: [
      {
        q: "How much cement is still pending for North Tower?",
        a: "72 bags of IP-40 cement are still pending. Order OC-2026-1184 requested 320 bags and the warehouse logged 248 received. I recommend checking with purchasing whether the supplier confirmed the remaining delivery.",
      },
      {
        q: "Are we spending more than budgeted?",
        a: "In structural work, consumption is 7.3% above the approved UPA. The largest deviation is in cement and labor. I can prepare a summary by stage.",
      },
    ],
    capabilities: ["Query data", "Summarize risks", "Suggest actions"],
  },

  useCasesSection: {
    tag: "FOR COMPANIES WITH ACTIVE PROJECTS",
    title: "Designed for construction companies that need real operational order.",
    description:
      "Esfera AI can be used for free, but professional implementation is designed for teams handling budgets, purchasing, warehouse, UPAs, reports and several responsibilities at the same time.",
  },

  businessModel: {
    tag: "BUSINESS MODEL",
    title: "Three ways to use Esfera AI.",
    description:
      "Start free on a self-serve basis, expand capacity with the Esfera Plus add-on when you need it, or hire the professional implementation that configures the platform, supports the team and ensures a successful rollout.",
    keyMessageTag: "KEY MESSAGE",
    keyMessageTitle: "The software is the tool. Implementation makes sure it works in your operation.",
    keyMessageText:
      "Using Esfera AI is easy. Making it part of how your company works takes a process. That is what implementation is for.",
    keyMessageCta: "Request implementation",
    focusBadge: "B2B focus",
    includesLabel: "Includes",
    excludesLabel: "Does not include",
    viewPricingLink: "See pricing details",
  },

  faqSection: {
    tag: "FAQ",
    title: "What the free plan includes and when to hire implementation.",
    description: "Direct answers to separate self-serve access from the professional implementation service.",
  },

  finalCta: {
    tag: "ESFERA AI B2B",
    title: "Start for free. Implement well when your company needs to operate with order.",
    description:
      "Use the platform on your own or request a professional implementation from USD 2,500 to get Esfera AI configured, loaded and adopted by your team.",
    primaryCta: "Start for free",
    secondaryCta: "Implementation from USD 2,500",
  },

  trialCta: {
    strong: "Esfera AI is free to use.",
    text: "If you need implementation, training or personalized support, our team quotes it based on scope.",
    cta: "Start for free",
  },

  modules: [
    {
      title: "Takeoff & Budget",
      tag: "BUDGET",
      description:
        "Build budgets by stage, category and item. Review quantities, materials, labor, progress and warehouse from a single control table.",
      icon: FileSpreadsheet,
      className: "md:col-span-2",
    },
    {
      title: "Unit Price Analysis",
      tag: "UPA",
      description:
        "Create unit prices with materials, labor, equipment and tools. Use 400+ ready-made items and 2,000 editable base materials.",
      icon: Ruler,
      className: "",
    },
    {
      title: "Purchasing",
      tag: "PURCHASING",
      description:
        "Turn site needs into orders, compare quotes, approve purchases and issue purchase orders linked to the approved budget.",
      icon: ReceiptText,
      className: "",
    },
    {
      title: "Warehouse Management",
      tag: "WAREHOUSE",
      description:
        "Track incoming, outgoing, stock and material movements to reduce losses and know what is available on every site.",
      icon: Warehouse,
      className: "md:col-span-2",
    },
    {
      title: "Project Management",
      tag: "PROJECT",
      description:
        "Cross-reference budget, progress, materials, labor and tools by item and stage so management sees the real status of the project.",
      icon: GitBranch,
      className: "",
    },
    {
      title: "Site Module",
      tag: "SITE",
      description:
        "Record progress, payrolls, withholdings, consumption and notes to connect the technical office with what happens in the field.",
      icon: HardHat,
      className: "",
    },
  ],

  capabilities: [
    {
      title: "Users, permissions and projects",
      tag: "ACCESS",
      description:
        "Assign permissions by role and by project so each architect, engineer, foreman or manager sees only what they need.",
      icon: LockKeyhole,
    },
    {
      title: "People and operations directory",
      tag: "DIRECTORY",
      description:
        "Centralize clients, contractors and suppliers for purchasing, payrolls, contacts and approvals without duplicating information.",
      icon: Users2,
    },
    {
      title: "Management reports",
      tag: "REPORTS",
      description:
        "Deliver budget, execution, balance, expenses and progress reports for site meetings and leadership decisions.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Control and alerts",
      tag: "ALERTS",
      description:
        "Detect delays in orders, quotes, purchase orders, payments or materials in transit and notify the people in charge.",
      icon: FileCheck2,
    },
  ],

  workflowSteps: [
    {
      title: "1. Set up company and project",
      description:
        "Create your company, register the project and define who takes part: architects, engineers, admin staff, foremen and management.",
    },
    {
      title: "2. Model budget and UPAs",
      description:
        "Load stages, categories, items, materials, labor, equipment and unit prices to approve the baseline cost.",
    },
    {
      title: "3. Run purchasing and warehouse",
      description:
        "Request materials, compare suppliers, approve purchases and log warehouse incoming, outgoing and stock.",
    },
    {
      title: "4. Control site and finances",
      description:
        "Measure progress, payrolls, withholdings, payments, remaining balance and deviations against the approved budget.",
    },
    {
      title: "5. Ask the AI and review reports",
      description:
        "Ask by chat about site status, inventory, pending purchases, UPAs, suppliers, payrolls and reports.",
    },
  ],

  faqs: [
    {
      question: "Is Esfera AI free to use?",
      answer:
        "Yes. You can create an account and use the platform on your own, with tutorials, documentation and resources to move forward by yourself.",
      topic: "general",
    },
    {
      question: "What is not included in the free plan?",
      answer:
        "Free access does not include human support, personalized training, data migration, UPA loading, guided setup, integrations or operational guidance.",
      topic: "precios",
    },
    {
      question: "When does it make sense to hire implementation?",
      answer:
        "When a construction company wants to adopt Esfera AI seriously: organize processes, configure projects, load initial data, train the team and leave the system running inside real operations.",
      topic: "implementacion",
    },
    {
      question: "How much does implementation cost?",
      answer:
        "Professional implementation starts at USD 2,500 and is quoted based on scope, number of projects, initial data load, training, support, integrations and company needs.",
      topic: "precios",
    },
    {
      question: "What does Esfera AI include?",
      answer:
        "It includes a chat to query project information in natural language: progress, budget, purchasing, warehouse, UPAs, suppliers, contractors and reports.",
      topic: "general",
    },
    {
      question: "Does implementation replace the free software?",
      answer:
        "No. The free software opens the door. Implementation is a paid service for companies that need diagnosis, configuration, training, support and operational adoption.",
      topic: "implementacion",
    },
  ],

  useCases: [
    {
      title: "Construction companies",
      description:
        "Control budget, purchasing, warehouse and progress per project to spot deviations before they hit your margin.",
      icon: Building2,
    },
    {
      title: "Architects and project managers",
      description:
        "Organize budget, stages, decisions, suppliers and progress to coordinate the site without scattered spreadsheets.",
      icon: Users2,
    },
    {
      title: "Engineers",
      description:
        "Work with UPAs, quantities, materials, contractors and physical progress connected to the approved budget.",
      icon: LineChart,
    },
  ],

  plans: [
    {
      kind: "free",
      name: "Self-serve use",
      tag: "SELF-SERVE",
      price: "USD 0",
      period: "to get started",
      description:
        "For users, contractors or companies that want to explore the platform, organize one project and move forward on their own.",
      includes: [
        "Free access to the platform",
        "Self-serve use",
        "Tutorials and documentation",
        "Getting-started guides",
        "Ideal for exploring or going solo",
      ],
      excludes: [],
      cta: "Create free account",
      featured: false,
    },
    {
      kind: "plus",
      name: "Esfera Plus add-on",
      tag: "PLUS",
      price: "USD 30 / month",
      period: "or USD 300 / year",
      description: "To expand capacity and keep several projects active.",
      includes: [
        "Multiple companies and projects",
        "10 GB of storage",
        "Projects stay active while the add-on is paid",
        "No expiration due to inactivity",
      ],
      excludes: [],
      cta: "Ask about Esfera Plus",
      featured: false,
    },
    {
      kind: "implementation",
      name: "Professional implementation",
      tag: "B2B SERVICE",
      price: "From USD 2,500",
      period: "quoted by scope",
      description:
        "For construction companies that need diagnosis, configuration, initial data load, training and guidance to adopt Esfera AI well.",
      includes: [
        "Operational diagnosis",
        "Initial setup and configuration",
        "Data load or migration",
        "Team training",
        "Guidance and support",
        "Integrations upon quote",
      ],
      excludes: [],
      cta: "Request implementation",
      featured: true,
    },
  ],

  screenshots: [
    {
      title: "Consolidated budget",
      tag: "01 / BUDGET",
      description: "Budget table with cost breakdown by item, materials, labor, equipment and totals per stage.",
      src: "https://docs.esfera.ai/presupuesto/tabla-presupuesto.png",
      alt: "Budget table with cost breakdown in Esfera AI",
    },
    {
      title: "Takeoff by stages",
      tag: "02 / TAKEOFF",
      description: "Form to assign UPA items to project stages and define executable quantities.",
      src: "https://docs.esfera.ai/presupuesto/formulario-computo.png",
      alt: "Takeoff by stages form in Esfera AI",
    },
    {
      title: "UPA catalog",
      tag: "03 / UPA",
      description: "Three ways to create items: import from Esfera AI, import from Excel or build from scratch.",
      src: "https://docs.esfera.ai/apu/items-opciones.png",
      alt: "Options to create unit price analysis items in Esfera AI",
    },
    {
      title: "Purchase orders",
      tag: "04 / PURCHASING",
      description: "Order list with status, requested materials, creation date and available actions.",
      src: "https://docs.esfera.ai/compras/listado-pedidos.jpg",
      alt: "Purchase order list in Esfera AI",
    },
    {
      title: "Warehouse stock",
      tag: "05 / WAREHOUSE",
      description: "Real-time available inventory, updated by warehouse incoming and outgoing.",
      src: "https://docs.esfera.ai/almacen/stock-almacen.png",
      alt: "Warehouse stock view in Esfera AI",
    },
    {
      title: "Site progress",
      tag: "06 / SITE",
      description: "Progress log by item, contractor, executed quantity, stage and notes.",
      src: "https://docs.esfera.ai/obra/formulario-avance.png",
      alt: "Site progress log form in Esfera AI",
    },
  ],

  featuresPage: {
    tag: "FEATURES",
    title: "The whole project lifecycle on one platform.",
    description:
      "Takeoff, budget and UPAs; purchasing and warehouse; site control and management reports; plus AI that answers with your project data.",
  },

  pricingPage: {
    tag: "PRICING",
    title: "Free to start. Grow when your company needs it.",
    description:
      "Esfera AI can be used for free on a self-serve basis. When you need more capacity or operational adoption, the Esfera Plus add-on and the professional implementation service are available.",
    cardsTitle: "Three ways to use Esfera AI",
    freeCard: {
      name: "Self-serve use",
      tag: "FREE",
      price: "USD 0",
      period: "forever",
      description: "To explore the platform, organize one project and move forward on your own.",
      includes: [
        "1 company per user",
        "1 project per user",
        "Unlimited budgets",
        "100 MB of storage",
        "Unlimited secondary users",
        "Access to demo company and project",
      ],
      cta: "Create free account",
    },
    plusCard: {
      name: "Esfera Plus add-on",
      tag: "PLUS",
      price: "USD 30 / month",
      period: "or USD 300 / year",
      description: "To expand capacity and keep several projects active.",
      includes: [
        "Multiple companies and projects",
        "10 GB of storage",
        "Projects stay active while the add-on is paid",
        "No expiration due to inactivity",
      ],
      cta: "Ask about Esfera Plus",
    },
    implementationCard: {
      name: "Professional implementation",
      tag: "B2B SERVICE",
      price: "From USD 2,500",
      period: "quoted by scope",
      description: "For construction companies that need the system configured, loaded and adopted by their team.",
      includes: [
        "Operational diagnosis",
        "Initial setup and configuration",
        "Data load or migration",
        "Team training",
        "Guidance and support",
        "Integrations upon quote",
      ],
      cta: "Request implementation",
    },
    faqTitle: "Pricing questions",
    note: "Prices in US dollars (USD). Implementation is quoted by scope: number of projects, initial data load, training, support and integrations.",
    viewImplementation: "Learn about implementation",
  },

  implementationPage: {
    tag: "PROFESSIONAL IMPLEMENTATION",
    title: "Get Esfera AI configured, loaded and adopted by your team.",
    description:
      "A B2B service for construction companies that want to adopt Esfera AI seriously: organize processes, configure projects, load initial data, train the team and leave the system running inside real operations.",
    includesTitle: "What it includes",
    includes: [
      {
        title: "Operational diagnosis",
        description: "We review your budget, purchasing, warehouse and site processes to define the right configuration.",
      },
      {
        title: "Setup and initial configuration",
        description: "We create companies, projects, users, roles and permissions matching your company structure.",
      },
      {
        title: "Data load or migration",
        description: "We load UPAs, materials, suppliers and the initial data of your projects.",
      },
      {
        title: "Team training",
        description: "Sessions by area: budget, purchasing, warehouse, site and management, with real cases.",
      },
      {
        title: "Guidance and support",
        description: "We support the operation until the team uses the system autonomously.",
      },
      {
        title: "Integrations",
        description: "Connections with your existing tools, upon quote.",
      },
    ],
    processTitle: "How it works",
    processSteps: [
      { title: "1. Diagnosis", description: "We understand your operation and define the project scope." },
      { title: "2. Plan and configuration", description: "We configure the platform around your processes, roles and projects." },
      { title: "3. Initial load", description: "We migrate catalogs, UPAs and your project data." },
      { title: "4. Training", description: "We train each area with your company's real cases." },
      { title: "5. Guidance", description: "We follow the operation and adjust until full adoption." },
    ],
    pricingTitle: "From USD 2,500",
    pricingText:
      "The final price is quoted by scope: number of projects, initial data load, training, support and integrations.",
    cta: "Request implementation",
    viewPricing: "See pricing",
  },

  notFound: {
    tag: "ERROR 404",
    title: "This page does not exist.",
    description: "The link may be outdated. You can go back to the home page or explore the features.",
    backHome: "Back to home",
  },

  legalPage: {
    tag: "LEGAL",
    title: "Privacy policy, terms and conditions.",
    subtitle:
      "Legal information of Esfera Solutions LLC for users of www.esfera.ai, the web platform and its mobile apps. (Legal content is available in Spanish, the binding version.)",
    backLink: "Back to esfera.ai",
    company: "ESFERA SOLUTIONS LLC",
    address: "2 S Biscayne Blvd, Ste 3200, Miami, FL 33131, United States",
  },

  footer: {
    description:
      "Free construction management platform, with professional implementation for companies that need operational adoption.",
    company: "ESFERA SOLUTIONS LLC",
    address: "2 S Biscayne Blvd, Ste 3200",
    cityLine: "Miami, FL 33131, United States",
    linksTitle: "Links",
    links: [
      { label: "Documentation", href: DOCS_URL, external: true },
      { label: "Features", to: "/en/features/" },
      { label: "Pricing", to: "/en/pricing/" },
      { label: "Implementation", to: "/en/implementation/" },
      { label: "Start for free", href: FREE_SIGNUP_URL, external: true },
      { label: "Request implementation", href: IMPLEMENTATION_URL, external: true },
      { label: "Log in", href: LOGIN_URL, external: true },
      { label: "Privacy policy", to: "/privacidad/" },
      { label: "Terms and conditions", to: "/terminos/#terminos" },
    ],
    socialTitle: "Social media",
    copyright: "ESFERA SOLUTIONS LLC.",
    tagline: "Free to use · Implementation from USD 2,500",
  },

  languageSwitcher: {
    ariaLabel: "Change language",
  },

  whatsapp: {
    ariaLabel: "Contact on WhatsApp",
  },

  pages: {
    home: {
      title: "Construction Management Software with AI | Esfera AI",
      description:
        "AI-powered construction management software for budgets, purchasing and site control. Use it free or hire professional implementation from USD 2,500.",
    },
    features: {
      title: "Features: Construction Modules, Purchasing & AI | Esfera AI",
      description:
        "Takeoff, budget, UPA, purchasing, warehouse, schedule, site progress and management reports, with an AI chat connected to your data.",
    },
    pricing: {
      title: "Esfera AI Pricing: Free Plan, Plus & Implementation",
      description:
        "Use Esfera AI for free, expand capacity with the Esfera Plus add-on at USD 30/month or hire professional implementation from USD 2,500.",
    },
    implementation: {
      title: "Professional Implementation for Construction | Esfera AI",
      description:
        "B2B implementation service for Esfera AI: diagnosis, configuration, data migration, training and support. From USD 2,500.",
    },
    legal: {
      title: "Legal information: privacy & terms | Esfera AI",
      description: "Privacy policy and terms and conditions of Esfera Solutions LLC for the services of www.esfera.ai.",
    },
    notFound: {
      title: "Page not found | Esfera AI",
      description: "The link may be outdated. Go back to the esfera.ai home page.",
    },
  },
};
