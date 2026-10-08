import { cn } from "../lib/utils";
import { esferaLogoWhite, LOGIN_URL, FREE_SIGNUP_URL } from "../data/links";
import { pageHref, useI18n, type Lang } from "../i18n";

function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, page, content } = useI18n();

  return (
    <nav
      aria-label={content.languageSwitcher.ariaLabel}
      className={cn("items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold", className)}
    >
      {(["es", "en"] as Lang[]).map((code) =>
        code === lang ? (
          <span key={code} aria-current="true" className="rounded-full bg-brand-500 px-2.5 py-1 text-white">
            {code.toUpperCase()}
          </span>
        ) : (
          <a key={code} href={pageHref(code, page)} className="rounded-full px-2.5 py-1 text-slate-500 transition hover:text-slate-950">
            {code.toUpperCase()}
          </a>
        ),
      )}
    </nav>
  );
}

// Menú móvil con <details>: abre y cierra sin JavaScript, es navegable por
// teclado (summary + Tab) y los lectores de pantalla anuncian el estado.
function MobileMenu() {
  const { content } = useI18n();
  const nav = content.nav;

  return (
    <details data-mobile-menu className="relative lg:hidden">
      <summary
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition hover:border-brand-500/40 hover:text-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
        aria-label={nav.menuLabel}
      >
        <svg className="menu-icon-open h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg className="menu-icon-close h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>
      <div className="absolute right-0 top-12 z-40 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)]">
        <div className="grid gap-1">
          {nav.items.map((item) => (
            <a
              key={item.to ?? item.href}
              href={item.to ?? item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-2 border-t border-slate-100 pt-2">
          <a href={LOGIN_URL} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">
            {nav.login}
          </a>
          <LanguageSwitcher className="mt-2 flex w-full justify-center sm:hidden" />
        </div>
      </div>
    </details>
  );
}

function Navbar() {
  const { content, lang } = useI18n();
  const nav = content.nav;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#F4F6F5]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8" aria-label={nav.mainNavLabel}>
        <a href={lang === "en" ? "/en/" : "/"} className="inline-flex shrink-0 items-center" aria-label={nav.homeLabel}>
          <img src={esferaLogoWhite} alt={nav.logoAlt} width={256} height={251} className="h-[3.3rem] w-auto sm:h-[4.2rem]" />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {nav.items.map((item) =>
            item.to ? (
              <a key={item.to} href={item.to} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "text-sm font-medium transition",
                  item.external
                    ? "rounded-full bg-brand-500/10 px-3 py-1.5 font-semibold text-brand-700 hover:bg-brand-500/15 hover:text-brand-800"
                    : "text-slate-600 hover:text-slate-950",
                )}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:flex" />
          <a
            href={LOGIN_URL}
            className="hidden items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:border-brand-500/40 hover:text-brand-700 active:scale-[0.98] sm:inline-flex sm:px-4 sm:text-sm"
          >
            {nav.login}
          </a>
          <a
            href={FREE_SIGNUP_URL}
            className="inline-flex items-center rounded-full bg-brand-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-600 active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            {nav.signup}
          </a>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
