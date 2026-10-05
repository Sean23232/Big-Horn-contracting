import { IMG } from "../lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative isolate bg-ink">
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="Concrete finishing work on a residential job site in Albuquerque" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="py-24 sm:py-32 lg:py-44 max-w-3xl">
          <div className="flex items-center gap-4 mb-7">
            <span className="h-[2px] w-12 bg-brand-red-bright" />
            <p className="eyebrow text-[11px] sm:text-xs text-white/75">Albuquerque, New Mexico</p>
          </div>

          <h1 className="headline text-white text-[13vw] leading-[0.92] sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem]">
            Built Strong.
            <br />
            <span className="relative inline-block">
              Finished Right.
              <span className="absolute -bottom-2 left-0 h-[5px] w-24 bg-brand-red-bright" />
            </span>
          </h1>

          <p className="mt-12 max-w-xl text-base sm:text-lg leading-relaxed text-white/75 font-light">
            Professional concrete and stucco services for residential and commercial properties
            throughout Albuquerque and surrounding areas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="btn btn-red">
              Get a Free Estimate
            </a>
            <a href="#services" className="btn btn-outline-light">
              View Our Services
            </a>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="relative border-t border-white/12 bg-black/45 backdrop-blur-[2px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {["Concrete", "Stucco", "Remodeling", "Junk Removal"].map((s, i) => (
            <div key={s} className={`py-5 flex items-center gap-3 ${i % 2 === 0 ? "pr-4" : "pl-5"} lg:pl-6 lg:pr-4 ${i === 0 ? "lg:pl-0" : ""}`}>
              <span className="h-[7px] w-[7px] bg-brand-red-bright shrink-0" />
              <span className="font-display uppercase tracking-[0.16em] text-[11px] sm:text-xs text-white/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
