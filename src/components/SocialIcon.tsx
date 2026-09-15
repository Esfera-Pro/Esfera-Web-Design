function SocialIcon({ icon }: { icon: string }) {
  const iconClassName = "h-4 w-4";

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition group-hover:border-[#529B8D]/30 group-hover:bg-[#529B8D]/10 group-hover:text-[#3f8276]" aria-hidden="true">
      {icon === "instagram" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )}
      {icon === "tiktok" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M16.6 3c.32 2.45 1.69 3.9 4.08 4.06v3.04a7.4 7.4 0 0 1-4.02-1.19v6.14c0 3.11-2.1 5.95-5.75 5.95-3.23 0-5.59-2.04-5.59-5.05 0-3.49 3.25-5.8 6.62-5.08v3.15c-1.52-.48-3.37.25-3.37 1.84 0 1.16.93 1.91 2.15 1.91 1.56 0 2.49-.91 2.49-2.68V3h3.39Z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M6.94 8.98H3.72V20h3.22V8.98ZM5.33 4a1.87 1.87 0 1 0 0 3.74 1.87 1.87 0 0 0 0-3.74ZM20.28 13.88c0-3.02-1.61-4.43-3.77-4.43a3.25 3.25 0 0 0-2.93 1.61h-.04V8.98h-3.08V20h3.21v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.78 1.64 1.78 2.92V20h3.22l-.44-6.12Z" />
        </svg>
      )}
      {icon === "youtube" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M21.58 7.2a2.77 2.77 0 0 0-1.95-1.96C17.91 4.78 12 4.78 12 4.78s-5.91 0-7.63.46A2.77 2.77 0 0 0 2.42 7.2 28.9 28.9 0 0 0 1.96 12c0 1.6.15 3.2.46 4.8.26.95 1 1.7 1.95 1.96 1.72.46 7.63.46 7.63.46s5.91 0 7.63-.46a2.77 2.77 0 0 0 1.95-1.96c.31-1.6.46-3.2.46-4.8 0-1.6-.15-3.2-.46-4.8ZM9.98 15.28V8.72L15.13 12l-5.15 3.28Z" />
        </svg>
      )}
      {icon === "x" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.03 2H2.2l7.64 11.11L2.2 22h1.73l6.68-7.76L15.95 22h5.83l-7.92-11.53Zm-2.37 2.75-.77-1.1L4.56 3.3H7.2l4.98 7.12.77 1.1 6.47 9.26h-2.64l-5.29-7.56Z" />
        </svg>
      )}
    </span>
  );
}

export { SocialIcon };
