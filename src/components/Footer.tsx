import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialIcon } from "./SocialIcon";
import { esferaLogoWhite } from "../data/links";
import { useI18n } from "../i18n";

function WhatsAppBubble() {
  const { content } = useI18n();

  return (
    <a
      href="https://wa.me/14845691555"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={content.whatsapp.ariaLabel}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.75)] transition hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/25 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" role="img" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.01 3.2c-7.03 0-12.75 5.64-12.75 12.58 0 2.39.69 4.72 1.98 6.72L3.2 28.8l6.5-2.01a12.9 12.9 0 0 0 6.31 1.63c7.03 0 12.75-5.64 12.75-12.58S23.04 3.2 16.01 3.2Zm0 22.98c-1.92 0-3.78-.52-5.4-1.52l-.39-.24-3.86 1.19 1.23-3.72-.26-.39a10.13 10.13 0 0 1-1.78-5.72c0-5.7 4.69-10.34 10.46-10.34s10.46 4.64 10.46 10.34-4.69 10.4-10.46 10.4Zm5.73-7.75c-.31-.16-1.85-.9-2.14-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.48-2.51-1.53-.93-.82-1.56-1.83-1.74-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.69-.97-2.31-.26-.6-.52-.52-.71-.53h-.6c-.21 0-.54.08-.82.39-.29.31-1.08 1.05-1.08 2.56 0 1.5 1.11 2.96 1.27 3.17.16.21 2.19 3.3 5.31 4.63.74.32 1.32.51 1.77.65.74.23 1.42.2 1.96.12.6-.09 1.85-.75 2.11-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
    </a>
  );
}

function Footer() {
  const { content } = useI18n();
  const f = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Link to={content.lang === "en" ? "/en/" : "/"} className="inline-flex items-center" aria-label={content.nav.homeLabel}>
            <img src={esferaLogoWhite} alt="esfera.ai" className="h-[4.2rem] w-auto" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">{f.description}</p>
          <div className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
            <p className="font-medium text-slate-700">{f.company}</p>
            <p>{f.address}</p>
            <p>{f.cityLine}</p>
            <a href="mailto:info@esfera.ai" className="inline-flex items-center gap-2 font-medium text-[#3f8276] transition hover:text-[#2f6b61]">
              <Mail className="h-4 w-4" />
              info@esfera.ai
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <p className="text-sm font-semibold text-slate-950">{f.linksTitle}</p>
            <div className="mt-4 grid gap-3 text-sm font-medium text-slate-600">
              {f.links.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to} className="hover:text-slate-950">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">{f.socialTitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Instagram", href: "https://www.instagram.com/esfera.ai/", icon: "instagram" },
                { label: "TikTok", href: "https://www.tiktok.com/@esfera.ai", icon: "tiktok" },
                { label: "LinkedIn", href: "https://linkedin.com/company/esferasolutions", icon: "linkedin" },
                { label: "YouTube", href: "https://www.youtube.com/@esfera-ai", icon: "youtube" },
                { label: "X", href: "https://x.com/esfera_ai", icon: "x" },
              ].map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="group" aria-label={social.label}>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {f.copyright}</p>
        <p>{f.tagline}</p>
      </div>
    </footer>
  );
}

export { Footer, WhatsAppBubble };
