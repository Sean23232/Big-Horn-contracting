import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* thin top bar */}
      <div className="hidden md:block bg-ink text-white/55 text-[11px] tracking-[0.2em] uppercase font-display">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-9 flex items-center justify-between">
          <span>Concrete &nbsp;/&nbsp; Stucco &nbsp;/&nbsp; Remodeling &nbsp;/&nbsp; Junk Removal</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-[6px] w-[6px] bg-brand-red-bright" />
            Albuquerque, New Mexico
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur border-black/10 shadow-[0_1px_20px_rgba(0,0,0,0.07)]"
            : "bg-white border-black/10"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-20"}`}>
            <a href="#home" className="flex items-center gap-3 group">
              <span className="relative flex h-9 w-9 items-center justify-center bg-ink">
                <span className="font-display font-bold text-white text-[15px] tracking-tight">BH</span>
                <span className="absolute -bottom-[1px] left-0 h-[3px] w-full bg-brand-red" />
              </span>
              <span className="font-display font-semibold uppercase tracking-[0.16em] text-[15px] sm:text-[17px] leading-none">
                BH Contracting
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative font-display uppercase tracking-[0.14em] text-[13px] text-ink/70 hover:text-ink transition-colors py-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="btn btn-red hidden sm:inline-flex !py-3 !px-6">
                Get a Free Estimate
              </a>
              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden h-11 w-11 border border-black/15 flex flex-col items-center justify-center gap-[5px]"
              >
                <span className={`block h-[2px] w-5 bg-ink transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-[2px] w-5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-[2px] w-5 bg-ink transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* mobile panel */}
        <div
          className={`lg:hidden overflow-hidden border-t border-black/10 bg-white transition-[max-height] duration-400 ${
            open ? "max-h-[520px]" : "max-h-0"
          }`}
        >
          <nav className="px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-black/8 py-4 font-display uppercase tracking-[0.16em] text-[15px]"
              >
                {l.label}
                <span className="text-brand-red text-xs">→</span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-red w-full mt-5">
              Get a Free Estimate
            </a>
            <p className="eyebrow text-[10px] text-ink/40 text-center py-5">Albuquerque, New Mexico</p>
          </nav>
        </div>
      </header>
    </>
  );
}
