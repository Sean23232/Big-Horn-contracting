import { NAV_LINKS } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center bg-white">
                <span className="font-display font-bold text-ink text-[15px]">BH</span>
                <span className="absolute -bottom-[1px] left-0 h-[3px] w-full bg-brand-red" />
              </span>
              <span className="font-display font-semibold uppercase tracking-[0.16em] text-[16px]">
                BH Contracting
              </span>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-white/55 font-light max-w-sm">
              Professional construction services in Albuquerque, New Mexico.
            </p>
            <span className="mt-8 block h-[3px] w-10 bg-brand-red" />
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-[10px] text-white/40 mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[15px] text-white/70 hover:text-white transition-colors font-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-[10px] text-white/40 mb-5">Services</p>
            <ul className="space-y-3">
              {["Concrete", "Stucco", "Remodeling", "Junk Removal"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[15px] text-white/70 hover:text-white transition-colors font-light">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40 font-light">© 2026 BH Contracting. All rights reserved.</p>
          <p className="eyebrow text-[10px] text-white/30">Albuquerque, New Mexico</p>
        </div>
      </div>
    </footer>
  );
}
