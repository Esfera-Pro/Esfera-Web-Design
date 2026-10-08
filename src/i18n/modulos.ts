// Contenido de las páginas de módulo (solo español: responden a búsquedas en
// español y recuperan las URLs históricas /modulos/...). Cada página cubre:
// qué resuelve, cómo se usa, una captura real, límites del plan gratuito,
// preguntas frecuentes y enlace al manual.
export interface ModuloData {
  slug: "almacen" | "presupuesto" | "apu" | "compras" | "obra";
  name: string;
  meta: { title: string; description: string };
  tag: string;
  h1: string;
  intro: string;
  highlights: string[];
  screenshot: { src: string; alt: string; tag: string; title: string; description: string };
  workflowTitle: string;
  workflow: { title: string; description: string }[];
  freePlanTitle: string;
  freePlan: string[];
  freePlanNote: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
}

export const modulos: ModuloData[] = [
  {
    slug: "almacen",
    name: "Almacén",
    meta: {
      title: "Gestión de almacén para obras | Esfera AI",
      description:
        "Control de almacén en obra: entradas, salidas, stock y movimientos por proyecto, conectados a compras y presupuesto. Usa Esfera AI gratis.",
    },
    tag: "MÓDULO ALMACÉN",
    h1: "Control de almacén de obra: entradas, salidas y stock en un solo lugar.",
    intro:
      "El módulo de almacén de Esfera AI registra cada movimiento de materiales por proyecto y lo conecta con compras y presupuesto, para que sepas qué hay disponible, qué se consumió y qué sigue pendiente de recibir.",
    highlights: [
      "Entradas y salidas de materiales por proyecto",
      "Stock disponible en tiempo real por ítem",
      "Historial de movimientos con fecha y responsable",
      "Vínculo entre pedidos de compra y remitos recibidos",
      "Visibilidad de materiales en tránsito o pendientes de entrega",
    ],
    screenshot: {
      src: "https://docs.esfera.ai/almacen/stock-almacen.png",
      alt: "Visualización del stock de almacén en Esfera AI",
      tag: "01 / STOCK",
      title: "Stock de almacén en tiempo real",
      description:
        "Inventario disponible actualizado por cada entrada y salida registrada, con el detalle de movimientos por ítem y proyecto.",
    },
    workflowTitle: "Cómo se usa el almacén en Esfera AI",
    workflow: [
      {
        title: "1. Registrar entradas",
        description: "Carga las remitos y entregas que llegan a obra: el stock se actualiza por ítem y proyecto.",
      },
      {
        title: "2. Registrar consumos y salidas",
        description: "Descuenta del stock lo que se consume en cada etapa o entrega a contratistas.",
      },
      {
        title: "3. Consultar disponibilidad",
        description: "Revisa el stock actual y el historial de movimientos antes de aprobar nuevas compras.",
      },
      {
        title: "4. Cruzar con compras y presupuesto",
        description: "Compara lo pedido, lo recibido y lo consumido contra el presupuesto aprobado de la obra.",
      },
    ],
    freePlanTitle: "Qué incluye el plan gratuito",
    freePlan: [
      "Acceso completo al módulo de almacén",
      "1 empresa y 1 proyecto por usuario",
      "100 MB de almacenamiento",
      "Usuarios secundarios ilimitados",
      "Tutoriales y documentación para avanzar solo",
    ],
    freePlanNote:
      "Los proyectos sin actividad durante 60 días se eliminan; el addon Esfera Plus mantiene los proyectos activos y amplía a múltiples empresas, proyectos y 10 GB.",
    faqTitle: "Preguntas sobre el módulo de almacén",
    faqs: [
      {
        question: "¿El control de almacén funciona por obra?",
        answer:
          "Sí. Cada proyecto tiene su propio stock, movimientos y pendientes de entrega. Puedes alternar entre empresa y proyecto demo para practicar sin tocar datos reales.",
      },
      {
        question: "¿El almacén se conecta con compras y presupuesto?",
        answer:
          "Sí. Las órdenes de compra alimentan las entradas esperadas y los consumos se reflejan en la administración del proyecto junto al presupuesto y el avance.",
      },
      {
        question: "¿Puedo probar el módulo sin pagar?",
        answer:
          "Sí. El plan gratuito incluye la plataforma completa de forma autoasistida: crea tu cuenta, explora el almacén con el proyecto demo y avanza con los tutoriales.",
      },
    ],
    ctaTitle: "Empieza a controlar el almacén de tu obra hoy.",
    ctaText:
      "Crea tu cuenta gratis y prueba el módulo con datos reales o con el proyecto demo. Si tu empresa necesita acompañamiento, la implementación profesional está disponible desde USD 2.500.",
  },
  {
    slug: "presupuesto",
    name: "Presupuesto",
    meta: {
      title: "Software de presupuestos de construcción | Esfera AI",
      description:
        "Presupuestos de construcción por etapas, categorías e ítems, con cómputo de cantidades y conexión con APUs, compras y avance de obra. Gratis para empezar.",
    },
    tag: "MÓDULO PRESUPUESTO",
    h1: "Presupuestos de construcción por etapas, con cómputo incluido.",
    intro:
      "El módulo de presupuesto de Esfera AI organiza el costo de tu obra en etapas, categorías e ítems, y lo conecta con cómputo, APUs, compras, almacén y avance: el presupuesto aprobado se convierte en la referencia de toda la gestión.",
    highlights: [
      "Estructura del presupuesto por etapas, categorías e ítems",
      "Cómputo de cantidades por etapa vinculado a los APUs",
      "Desglose de materiales, mano de obra y equipos por ítem",
      "Tabla de control con avance y consumos contra lo presupuestado",
      "Acceso por roles para arquitectos, ingenieros y gerencia",
    ],
    screenshot: {
      src: "https://docs.esfera.ai/presupuesto/tabla-presupuesto.png",
      alt: "Tabla de presupuesto con desglose de costos en Esfera AI",
      tag: "01 / PRESUPUESTO",
      title: "Presupuesto consolidado",
      description:
        "Tabla de presupuesto con desglose de costos por ítem, materiales, mano de obra, equipos y totales por etapa.",
    },
    workflowTitle: "Cómo se arma un presupuesto en Esfera AI",
    workflow: [
      {
        title: "1. Crear el proyecto",
        description: "Abre la obra, define etapas y categorías según cómo trabaja tu equipo.",
      },
      {
        title: "2. Cargar ítems y APUs",
        description: "Importa ítems del catálogo o crea los tuyos: cada APU desglosa materiales, mano de obra y equipos.",
      },
      {
        title: "3. Hacer el cómputo",
        description: "Asigna cantidades por etapa y deja cerrado el costo base de la obra.",
      },
      {
        title: "4. Controlar la ejecución",
        description: "Compara compras, consumos y avance contra el presupuesto aprobado para detectar desvíos a tiempo.",
      },
    ],
    freePlanTitle: "Qué incluye el plan gratuito",
    freePlan: [
      "Presupuestos ilimitados",
      "1 empresa y 1 proyecto por usuario",
      "Acceso a empresa y proyecto demo",
      "Usuarios secundarios ilimitados",
      "Tutoriales y documentación para avanzar solo",
    ],
    freePlanNote:
      "Los proyectos sin actividad durante 60 días se eliminan; el addon Esfera Plus mantiene los proyectos activos y amplía a múltiples empresas, proyectos y 10 GB.",
    faqTitle: "Preguntas sobre el módulo de presupuesto",
    faqs: [
      {
        question: "¿Puedo importar mi presupuesto actual?",
        answer:
          "Sí. Puedes crear ítems desde cero, importarlos desde Excel o tomarlos del catálogo de Esfera AI con más de 400 ítems y 2.000 materiales base editables.",
      },
      {
        question: "¿El presupuesto se conecta con el resto de la obra?",
        answer:
          "Sí. Compras, almacén, avance y reportes se cruzan contra el presupuesto aprobado: la tabla de control muestra el estado real por ítem y etapa.",
      },
      {
        question: "¿Cuántos presupuestos puedo hacer en el plan gratuito?",
        answer:
          "Ilimitados. La cuenta gratuita no limita la cantidad de presupuestos dentro de tu único proyecto activo.",
      },
    ],
    ctaTitle: "Presupuesta tu próxima obra con Esfera AI.",
    ctaText:
      "Crea tu cuenta gratis y arma tu primer presupuesto con el catálogo de ítems. Si tu constructora quiere dejar el sistema funcionando con datos propios, la implementación profesional está disponible desde USD 2.500.",
  },
  {
    slug: "apu",
    name: "APU",
    meta: {
      title: "Análisis de precios unitarios (APU) | Esfera AI",
      description:
        "Análisis de precios unitarios con materiales, mano de obra, equipos y herramientas. Catálogo con 400+ ítems listos y 2.000 materiales editables.",
    },
    tag: "MÓDULO APU",
    h1: "Análisis de precio unitario (APU) con catálogo listo para usar.",
    intro:
      "El módulo de análisis de precios unitarios de Esfera AI desglosa el costo de cada ítem en materiales, mano de obra, equipos y herramientas, con un catálogo inicial de más de 400 ítems listos y 2.000 materiales base editables.",
    highlights: [
      "APUs con desglose de materiales, mano de obra, equipos y herramientas",
      "Catálogo con 400+ ítems listos para usar",
      "2.000 materiales base editables según tus precios de mercado",
      "Tres formas de crear ítems: catálogo, Excel o desde cero",
      "APUs conectados al cómputo y al presupuesto por etapas",
    ],
    screenshot: {
      src: "https://docs.esfera.ai/apu/items-opciones.png",
      alt: "Opciones para crear ítems de análisis de precio unitario en Esfera AI",
      tag: "01 / CATÁLOGO",
      title: "Catálogo APU",
      description: "Tres formas de crear ítems: importar desde Esfera AI, importar desde Excel o crear desde cero.",
    },
    workflowTitle: "Cómo se trabaja con APUs en Esfera AI",
    workflow: [
      {
        title: "1. Partir del catálogo",
        description: "Busca el ítem en el catálogo de Esfera AI y tómalo como base, o impórtalo desde tu Excel.",
      },
      {
        title: "2. Ajustar rendimiento y precios",
        description: "Edita materiales, rendimientos y tarifas de mano de obra y equipos según tu mercado.",
      },
      {
        title: "3. Guardar tus APUs",
        description: "Tus análisis quedan disponibles para reutilizarlos en nuevos presupuestos.",
      },
      {
        title: "4. Llevarlos al presupuesto",
        description: "Los APUs alimentan el cómputo por etapas y los totales del presupuesto de la obra.",
      },
    ],
    freePlanTitle: "Qué incluye el plan gratuito",
    freePlan: [
      "Acceso completo al catálogo y a los APUs",
      "1 empresa y 1 proyecto por usuario",
      "100 MB de almacenamiento",
      "Usuarios secundarios ilimitados",
      "Tutoriales y documentación para avanzar solo",
    ],
    freePlanNote:
      "Los proyectos sin actividad durante 60 días se eliminan; el addon Esfera Plus mantiene los proyectos activos y amplía a múltiples empresas, proyectos y 10 GB.",
    faqTitle: "Preguntas sobre el módulo de APU",
    faqs: [
      {
        question: "¿El catálogo de APUs sirve para mi país?",
        answer:
          "El catálogo es una base editable: puedes ajustar materiales, rendimientos y tarifas a los precios de tu mercado para dejar cada APU calibrado a tu realidad.",
      },
      {
        question: "¿Puedo importar mis APUs de Excel?",
        answer:
          "Sí. Además del catálogo de Esfera AI, puedes importar ítems desde Excel o crearlos desde cero con el desglose completo de insumos.",
      },
      {
        question: "¿Los APUs se usan solos o dentro del presupuesto?",
        answer:
          "Se trabajan dentro del flujo completo: cada APU alimenta el cómputo y el presupuesto por etapas, y de ahí bajan a compras y control de obra.",
      },
    ],
    ctaTitle: "Calcula tus precios unitarios con el catálogo de Esfera AI.",
    ctaText:
      "Crea tu cuenta gratis y arma tus primeros APUs con el catálogo incluido. Si prefieres que el equipo de Esfera AI cargue tu base de datos inicial, consulta la implementación profesional desde USD 2.500.",
  },
  {
    slug: "compras",
    name: "Compras",
    meta: {
      title: "Software de compras para obras | Esfera AI",
      description:
        "Pedidos, comparación de cotizaciones y órdenes de compra vinculadas al presupuesto aprobado, con alertas de demora. Usa Esfera AI gratis.",
    },
    tag: "MÓDULO COMPRAS",
    h1: "Compras de obra: del pedido a la orden vinculada al presupuesto.",
    intro:
      "El módulo de compras de Esfera AI convierte las necesidades de la obra en pedidos, permite comparar cotizaciones de proveedores y emite órdenes de compra vinculadas al presupuesto aprobado, con alertas cuando algo se demora.",
    highlights: [
      "Pedidos de compra por proyecto con estado y responsable",
      "Comparación de cotizaciones entre proveedores",
      "Órdenes de compra vinculadas al presupuesto aprobado",
      "Alertas de demoras en pedidos, cotizaciones y entregas",
      "Directorio de proveedores y contratistas centralizado",
    ],
    screenshot: {
      src: "https://docs.esfera.ai/compras/listado-pedidos.jpg",
      alt: "Listado de pedidos de compra en Esfera AI",
      tag: "01 / PEDIDOS",
      title: "Pedidos de compra",
      description: "Listado de pedidos con estado, materiales solicitados, fecha de creación y acciones disponibles.",
    },
    workflowTitle: "Cómo funciona el flujo de compras",
    workflow: [
      {
        title: "1. Detectar la necesidad",
        description: "El equipo de obra o el presupuesto generan la necesidad de materiales.",
      },
      {
        title: "2. Crear el pedido y cotizar",
        description: "Carga el pedido, pide cotizaciones y compáralas por precio y plazo.",
      },
      {
        title: "3. Aprobar y emitir la orden",
        description: "Aprueba la compra y emite la orden vinculada al ítem del presupuesto.",
      },
      {
        title: "4. Recibir y controlar",
        description: "Las entradas de almacén cierran el ciclo y las alertas avisan si algo se demora.",
      },
    ],
    freePlanTitle: "Qué incluye el plan gratuito",
    freePlan: [
      "Acceso completo al módulo de compras",
      "1 empresa y 1 proyecto por usuario",
      "Usuarios secundarios ilimitados",
      "100 MB de almacenamiento",
      "Tutoriales y documentación para avanzar solo",
    ],
    freePlanNote:
      "Los proyectos sin actividad durante 60 días se eliminan; el addon Esfera Plus mantiene los proyectos activos y amplía a múltiples empresas, proyectos y 10 GB.",
    faqTitle: "Preguntas sobre el módulo de compras",
    faqs: [
      {
        question: "¿Las órdenes de compra quedan vinculadas al presupuesto?",
        answer:
          "Sí. Cada orden se emite contra el presupuesto aprobado, de modo que compras y ejecución se comparan en la administración del proyecto.",
      },
      {
        question: "¿Cómo se comparan cotizaciones?",
        answer:
          "Cargas las cotizaciones de cada proveedor en el pedido y el sistema las muestra juntas para decidir por precio y plazo.",
      },
      {
        question: "¿Qué pasa si un proveedor se demora?",
        answer:
          "El módulo de control y alertas detecta demoras en pedidos, cotizaciones, órdenes y materiales en tránsito, y avisa a los responsables.",
      },
    ],
    ctaTitle: "Ordena las compras de tu obra desde hoy.",
    ctaText:
      "Crea tu cuenta gratis y arma tu primer pedido de compra. Si tu empresa necesita el flujo completo configurado con sus proveedores, la implementación profesional está disponible desde USD 2.500.",
  },
  {
    slug: "obra",
    name: "Obra",
    meta: {
      title: "Control de obra: avances, planillas y reportes | Esfera AI",
      description:
        "Registro de avances, planillas, retenciones y observaciones de campo, conectado al presupuesto para ver el estado real de cada obra. Gratis para empezar.",
    },
    tag: "MÓDULO OBRA",
    h1: "Control de obra: avances y planillas conectados al presupuesto.",
    intro:
      "El módulo de obra de Esfera AI registra avances, planillas, retenciones, consumos y observaciones de campo, y los conecta con la oficina técnica: lo que pasa en la obra se refleja en la administración del proyecto y en los reportes de gerencia.",
    highlights: [
      "Registro de avances por ítem, etapa y contratista",
      "Planillas y retenciones de mano de obra",
      "Observaciones de campo vinculadas al proyecto",
      "Consumos conectados con almacén y presupuesto",
      "Reportes de progreso para reuniones de obra y dirección",
    ],
    screenshot: {
      src: "https://docs.esfera.ai/obra/formulario-avance.png",
      alt: "Formulario de registro de avances de obra en Esfera AI",
      tag: "01 / AVANCES",
      title: "Registro de avances de obra",
      description: "Progreso por ítem, contratista, cantidad ejecutada, etapa y observaciones.",
    },
    workflowTitle: "Cómo se controla la obra día a día",
    workflow: [
      {
        title: "1. Registrar el avance",
        description: "El equipo de campo carga cantidades ejecutadas por ítem y etapa.",
      },
      {
        title: "2. Cargar planillas y retenciones",
        description: "Mano de obra, retenciones y observaciones quedan asociadas al proyecto.",
      },
      {
        title: "3. Cruzar con el presupuesto",
        description: "El avance se compara contra lo presupuestado para calcular desvíos por etapa.",
      },
      {
        title: "4. Reportar a gerencia",
        description: "Los reportes de ejecución, saldo y progreso salen listos para la reunión de obra.",
      },
    ],
    freePlanTitle: "Qué incluye el plan gratuito",
    freePlan: [
      "Acceso completo al módulo de obra",
      "1 empresa y 1 proyecto por usuario",
      "Usuarios secundarios ilimitados",
      "100 MB de almacenamiento",
      "Tutoriales y documentación para avanzar solo",
    ],
    freePlanNote:
      "Los proyectos sin actividad durante 60 días se eliminan; el addon Esfera Plus mantiene los proyectos activos y amplía a múltiples empresas, proyectos y 10 GB.",
    faqTitle: "Preguntas sobre el módulo de obra",
    faqs: [
      {
        question: "¿Quién carga los avances de obra?",
        answer:
          "El encargado o el equipo de campo registra cantidades ejecutadas, planillas y observaciones; la oficina técnica y gerencia las ven al instante según sus permisos.",
      },
      {
        question: "¿El avance se compara contra el presupuesto?",
        answer:
          "Sí. Cada avance se refleja en la administración del proyecto, que cruza presupuesto, compras, almacén y mano de obra por ítem y etapa.",
      },
      {
        question: "¿Sirve para una obra chica o solo para empresas?",
        answer:
          "Para ambos: profesionales independientes pueden usar el plan gratuito en una obra, y las constructoras con varias obras suelen sumar el addon Esfera Plus o la implementación profesional.",
      },
    ],
    ctaTitle: "Lleva el control diario de tu obra con Esfera AI.",
    ctaText:
      "Crea tu cuenta gratis y registra los primeros avances de tu obra. Si tu constructora quiere acompañamiento para adoptar el sistema, la implementación profesional está disponible desde USD 2.500.",
  },
];

export function getModulo(slug: string): ModuloData {
  const modulo = modulos.find((m) => m.slug === slug);
  if (!modulo) throw new Error(`Módulo desconocido: ${slug}`);
  return modulo;
}
