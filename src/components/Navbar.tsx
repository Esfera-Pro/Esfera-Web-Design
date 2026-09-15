import { cn } from "../lib/utils";
import { esferaLogoWhite, navItems, LOGIN_URL, FREE_SIGNUP_URL } from "../data/content";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#F4F6F5]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <a href="/" className="inline-flex items-center" aria-label="esfera.ai inicio">
          <img src={esferaLogoWhite} alt="esfera.ai" className="h-[3.3rem] w-auto sm:h-[4.2rem]" />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
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
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:border-[#529B8D]/40 hover:text-[#3f8276] active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            Iniciar sesión
          </a>
          <a
            href={FREE_SIGNUP_URL}
            className="inline-flex items-center rounded-full bg-[#529B8D] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            Empezar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
