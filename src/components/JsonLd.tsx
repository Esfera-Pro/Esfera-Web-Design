// Datos estructurados renderizados de forma estática en el HTML de la página.
// Siempre con @context: sin él, los parsers no interpretan los tipos como
// schema.org. Un array se envuelve en @graph.
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
}
