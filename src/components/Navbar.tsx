import { cn } from "../lib/utils";
import { esferaLogoWhite, LOGIN_URL, FREE_SIGNUP_URL } from "../data/links";
import { pageHref, useI18n, type Lang } from "../i18n";

function LanguageSwitcher() {
  const { lang, page, content } = useI18n();

  return (
    <nav
      aria-label={content.languageSwitcher.ariaLabel}
      className="hidden items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold sm:flex"
    >
      {(["es", "en"] as Lang[]).map((code) =>
        code === lang ? (
          <span key={code} aria-current="true" className="rounded-full bg-[#529B8D] px-2.5 py-1 text-white">
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

function Navbar() {
  const { content, lang } = useI18n();
  const nav = content.nav;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#F4F6F5]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8" aria-label={nav.mainNavLabel}>
        <a href={lang === "en" ? "/en/" : "/"} className="inline-flex shrink-0 items-center" aria-label={nav.homeLabel}>
          <img src={esferaLogoWhite} alt={nav.logoAlt} className="h-[3.3rem] w-auto sm:h-[4.2rem]" />
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
                    ? "rounded-full bg-[#529B8D]/10 px-3 py-1.5 font-semibold text-[#3f8276] hover:bg-[#529B8D]/15 hover:text-[#2f6b61]"
                    : "text-slate-600 hover:text-slate-950",
                )}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={LOGIN_URL}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:border-[#529B8D]/40 hover:text-[#3f8276] active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            {nav.login}
          </a>
          <a
            href={FREE_SIGNUP_URL}
            className="inline-flex items-center rounded-full bg-[#529B8D] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            {nav.signup}
          </a>
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
