// Motor de "motion" estático para el build de Astro: como el sitio ya no envía
// JS de React al navegador, no hay animaciones de framer-motion que ejecutar.
// Cada componente motion.* se convierte en su etiqueta HTML plana y las props
// de animación (initial, whileInView, variants...) se descartan.
import { createElement, type FC, type PropsWithChildren } from "react";

const FRAMER_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "variants",
  "transition",
  "whileInView",
  "whileHover",
  "whileTap",
  "viewport",
  "drag",
  "dragConstraints",
  "layout",
  "onAnimationComplete",
]);

function staticTag(tag: string): FC<Record<string, unknown>> {
  const Component: FC<Record<string, unknown>> = (props) => {
    const rest: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(props)) {
      if (!FRAMER_PROPS.has(key)) rest[key] = value;
    }
    return createElement(tag, rest);
  };
  return Component;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const motion: Record<string, FC<any>> = new Proxy(
  {},
  {
    get: (_target, tag: string) => staticTag(tag),
  },
);

export function AnimatePresence({ children }: PropsWithChildren) {
  return <>{children}</>;
}
