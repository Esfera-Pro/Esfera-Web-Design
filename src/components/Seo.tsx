// Meta etiquetas por página + JSON-LD. React 19 las sube al <head> y el
// prerender las deja fijas en el HTML estático que ven los crawlers.
import { PAGE_PATHS, useI18n, type Lang, type PageKey } from "../i18n";
import { SITE_URL } from "../data/links";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function absolute(path: string) {
  return path.startsWith("http") ? path : SITE_URL + path;
}

export function Seo({ page, canonicalPath, noindex = false }: { page: PageKey; canonicalPath?: string; noindex?: boolean }) {
  const { content } = useI18n();
  const meta = content.pages[page];
  const canonical = canonicalPath ?? PAGE_PATHS[content.lang as Lang][page] ?? "/";

  const alternates: { hreflang: string; href: string }[] = [];
  for (const [lang, paths] of Object.entries(PAGE_PATHS) as [Lang, Partial<Record<PageKey, string>>][]) {
    const path = paths[page];
    if (path) alternates.push({ hreflang: lang, href: absolute(path) });
  }
  alternates.push({ hreflang: "x-default", href: absolute(PAGE_PATHS.es[page] ?? "/") });

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={absolute(canonical)} />
      {alternates.map((alt) => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      <meta property="og:site_name" content="Esfera AI" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={absolute(canonical)} />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={content.ogLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
    </>
  );
}
