import { IMG, SERVICES, WHY } from "../lib/site";

/* ---------------- 3. TRUST / INTRO ---------------- */
export function Trust() {
  const points = [
    { t: "Quality Workmanship", d: "Professional work with attention to detail." },
    { t: "Residential & Commercial", d: "Services for homeowners, businesses, and property owners." },
    { t: "Local & Reliable", d: "Proudly serving Albuquerque, New Mexico." },
  ];
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-9 bg-brand-red" />
              <p className="eyebrow text-[11px] text-ink/45">Who We Are</p>
            </div>
            <h2 className="headline text-4xl sm:text-5xl lg:text-[3.6rem] text-ink">
              Quality Work.
              <br />
              Solid Results.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg leading-relaxed text-ink/70 font-light max-w-2xl">
              BH Contracting provides dependable construction services built around quality
              workmanship, professional service, and durable results. From concrete and stucco to
              remodeling and cleanup, every project is handled with the same standard of care —
              clear communication, clean job sites, and finished work that holds up over time.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 grid md:grid-cols-3 border-t hairline border-t-black/12">
          {points.map((p, i) => (
            <div
              key={p.t}
              className={`py-10 md:py-12 md:px-10 ${i === 0 ? "md:pl-0" : ""} ${
                i !== 2 ? "border-b md:border-b-0 md:border-r border-black/10" : ""
              }`}
            >
              <span className="block h-[3px] w-8 bg-brand-red mb-6" />
              <h3 className="font-display uppercase tracking-[0.12em] text-[15px] text-ink">{p.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/55 font-light">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. SERVICES ---------------- */
function ServiceIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round" as const };
  if (name === "Concrete")
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" {...common}>
        <path d="M4 34h40M4 34l6-10h28l6 10M14 24v-6h20v6M10 34v6M38 34v6" />
      </svg>
    );
  if (name === "Stucco")
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" {...common}>
        <path d="M6 42V18L24 6l18 12v24" />
        <path d="M14 42V26h12v16" />
        <path d="M30 24h6M30 30h6" />
      </svg>
    );
  if (name === "Remodeling")
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" {...common}>
        <path d="M28 10l10 10-18 18H10v-10z" />
        <path d="M24 14l10 10" />
        <path d="M6 44h36" />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" {...common}>
      <path d="M8 16h32l-3 26H11z" />
      <path d="M18 16v-4a6 6 0 0 1 12 0v4" />
      <path d="M20 24v10M28 24v10" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-bone border-y border-black/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-9 bg-brand-red" />
              <p className="eyebrow text-[11px] text-ink/45">What We Do</p>
            </div>
            <h2 className="headline text-[2.1rem] sm:text-5xl lg:text-[3.4rem] text-ink max-w-4xl">
              Construction services built around your needs.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="#contact" className="btn btn-outline-dark">
              Start a Project
            </a>
          </div>
        </div>

        <div className="mt-14 lg:mt-20 grid md:grid-cols-2 gap-px bg-black/12 border border-black/12">
          {SERVICES.map((s) => (
            <article
              key={s.num}
              className={`group relative bg-white transition-colors duration-300 hover:bg-ink ${
                s.primary ? "p-9 sm:p-12 lg:p-14" : "p-9 sm:p-10 lg:p-12"
              }`}
            >
              <span className="absolute left-0 top-0 h-full w-[3px] bg-brand-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start justify-between gap-6">
                <div className={`${s.primary ? "text-brand-red" : "text-ink/35"} transition-colors group-hover:text-brand-red-bright`}>
                  <ServiceIcon name={s.title} />
                </div>
                <span className="font-display text-sm tracking-[0.2em] text-ink/25 group-hover:text-white/35 transition-colors">
                  {s.num}
                </span>
              </div>

              <h3
                className={`headline mt-8 text-ink group-hover:text-white transition-colors ${
                  s.primary ? "text-3xl sm:text-4xl lg:text-[2.6rem]" : "text-2xl sm:text-3xl"
                }`}
              >
                {s.title}
              </h3>
              {s.primary && (
                <p className="eyebrow mt-3 text-[10px] text-brand-red group-hover:text-brand-red-bright transition-colors">
                  Primary Service
                </p>
              )}

              <p
                className={`mt-5 font-light leading-relaxed text-ink/60 group-hover:text-white/60 transition-colors ${
                  s.primary ? "text-[15px] sm:text-base max-w-md" : "text-[15px] max-w-md"
                }`}
              >
                {s.copy}
              </p>

              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-3 font-display uppercase tracking-[0.18em] text-[11px] text-ink group-hover:text-white transition-colors"
              >
                Learn More
                <span className="h-px w-8 bg-brand-red transition-all duration-300 group-hover:w-12" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5 + 6. SPLIT FEATURES ---------------- */
function Split({
  reverse,
  image,
  alt,
  label,
  headline,
  body,
  bullets,
  cta,
  tag,
  bg = "bg-white",
}: {
  bg?: string;
  reverse?: boolean;
  image: string;
  alt: string;
  label: string;
  headline: string;
  body: string;
  bullets: string[];
  cta: string;
  tag: string;
}) {
  return (
    <section className={bg}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="relative">
            <div className="relative overflow-hidden">
              <img src={image} alt={alt} className="w-full h-[320px] sm:h-[460px] lg:h-[620px] object-cover" />
            </div>
            <div
              className={`absolute -bottom-5 ${reverse ? "right-5 lg:right-auto lg:-left-6" : "left-5 lg:-right-6 lg:left-auto"} bg-brand-red text-white px-6 py-4 hidden sm:block`}
            >
              <p className="eyebrow text-[10px] text-white/70">BH Contracting</p>
              <p className="font-display uppercase tracking-[0.14em] text-sm mt-1">{tag}</p>
            </div>
          </div>

          <div className={reverse ? "lg:pr-6" : "lg:pl-6"}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-9 bg-brand-red" />
              <p className="eyebrow text-[11px] text-brand-red">{label}</p>
            </div>
            <h2 className="headline text-[2rem] sm:text-4xl lg:text-[3.1rem] text-ink max-w-xl">{headline}</h2>
            <p className="mt-7 text-[16px] sm:text-lg leading-relaxed text-ink/65 font-light max-w-xl">{body}</p>

            <ul className="mt-9 border-t border-black/10">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-4 border-b border-black/10 py-4">
                  <span className="h-[6px] w-[6px] bg-brand-red shrink-0" />
                  <span className="font-display uppercase tracking-[0.1em] text-[13px] text-ink/80">{b}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-red mt-10">
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConcreteFeature() {
  return (
    <Split
      image={IMG.concreteDriveway}
      alt="Crew placing and finishing a concrete driveway"
      label="Concrete Services"
      tag="Concrete"
      headline="Solid foundations start with quality work."
      body="Concrete is one of the most visible and hardest-working surfaces on any property. BH Contracting handles concrete work for residential and commercial customers — new pours, repairs, surfaces, and improvements — with careful preparation and a clean, consistent finish."
      bullets={[
        "Professional workmanship",
        "Residential & commercial projects",
        "Durable, clean finishes",
        "Project-focused service",
      ]}
      cta="Get a Free Estimate"
    />
  );
}

export function StuccoFeature() {
  return (
    <div className="border-y border-black/10">
      <div>
        <Split
          reverse
          bg="bg-bone"
          image={IMG.stuccoWork}
          alt="Professional applying stucco to a Southwestern home exterior"
          label="Stucco Services"
          tag="Stucco"
          headline="A finish that protects and elevates your property."
          body="Stucco does more than shape the look of a building — it is the exterior layer that stands up to New Mexico sun, wind, and weather. Professional application means a consistent texture, clean lines, and an exterior that reflects well on your home or business for years."
          bullets={[
            "Exterior improvements",
            "Professional application",
            "Clean finished appearance",
            "Residential & commercial work",
          ]}
          cta="Talk to BH Contracting"
        />
      </div>
    </div>
  );
}

/* ---------------- 7. WHY ---------------- */
export function Why() {
  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-[3px] bg-brand-red/70" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-9 bg-brand-red-bright" />
            <p className="eyebrow text-[11px] text-brand-red-bright">Why BH Contracting</p>
          </div>
          <h2 className="headline text-[2.2rem] sm:text-5xl lg:text-[3.6rem]">
            Built on quality.
            <br />
            Driven by results.
          </h2>
        </div>

        <div className="mt-16 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/12 border border-white/12">
          {WHY.map((w) => (
            <div key={w.num} className="bg-ink p-8 lg:p-10 group hover:bg-ink-soft transition-colors">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm tracking-[0.2em] text-brand-red-bright">{w.num}</span>
                <span className="h-px w-5 bg-white/25" />
                <span className="font-display uppercase tracking-[0.14em] text-[13px] text-white">{w.title}</span>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-white/55 font-light">{w.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. RESIDENTIAL + COMMERCIAL ---------------- */
export function ResiComm() {
  const cards = [
    {
      k: "Residential",
      img: IMG.residential,
      copy: "Professional construction services designed to improve, maintain, and transform your home.",
      cta: "Residential Services",
    },
    {
      k: "Commercial",
      img: IMG.commercial,
      copy: "Reliable construction support for businesses, commercial properties, and larger projects.",
      cta: "Commercial Services",
    },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {cards.map((c) => (
            <article key={c.k} className="group relative overflow-hidden bg-ink">
              <img
                src={c.img}
                alt={`${c.k} construction work`}
                className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-700 group-hover:opacity-40 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col justify-end min-h-[400px] sm:min-h-[480px]">
                <span className="h-[3px] w-10 bg-brand-red-bright mb-6" />
                <h3 className="headline text-white text-3xl sm:text-4xl lg:text-[2.8rem]">{c.k}</h3>
                <p className="mt-5 text-white/70 font-light leading-relaxed max-w-sm">{c.copy}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 font-display uppercase tracking-[0.18em] text-[11px] text-white self-start border-b border-white/30 pb-2 hover:border-brand-red-bright transition-colors"
                >
                  {c.cta}
                  <span className="text-brand-red-bright">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. PROJECTS ---------------- */
export function Projects() {
  const shots = [
    { img: IMG.concreteCrew, cap: "Concrete Work" },
    { img: IMG.residential, cap: "Stucco Exterior" },
    { img: IMG.framing, cap: "Residential Construction" },
    { img: IMG.commercial, cap: "Commercial Construction" },
  ];
  return (
    <section id="projects" className="bg-bone border-y border-black/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-9 bg-brand-red" />
              <p className="eyebrow text-[11px] text-ink/45">Our Work</p>
            </div>
            <h2 className="headline text-[2.2rem] sm:text-5xl lg:text-[3.4rem] text-ink">Quality you can see.</h2>
          </div>
          <div className="max-w-sm border-l-2 border-brand-red pl-5">
            <p className="eyebrow text-[10px] text-brand-red mb-2">Concept Note</p>
            <p className="text-[14px] leading-relaxed text-ink/55 font-light">
              The images below are temporary visual placeholders for this design concept. They will
              be replaced with BH Contracting's own project photography.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shots.map((s) => (
            <figure key={s.cap} className="group relative overflow-hidden bg-ink">
              <img
                src={s.img}
                alt={s.cap}
                className="h-[260px] sm:h-[300px] lg:h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 text-ink eyebrow text-[9px] px-2.5 py-1.5">
                Placeholder
              </span>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                <span className="h-[2px] w-6 bg-brand-red-bright" />
                <span className="font-display uppercase tracking-[0.14em] text-[11px] text-white">{s.cap}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. CTA ---------------- */
export function CTA() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.concretePour} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red-dark/90 via-black/88 to-black/92" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="block h-[3px] w-12 bg-brand-red-bright mb-7" />
            <h2 className="headline text-white text-[2.3rem] sm:text-5xl lg:text-[3.8rem]">Ready to get started?</h2>
            <p className="mt-6 text-lg text-white/70 font-light max-w-xl">
              Tell us about your project and let's discuss how BH Contracting can help.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3 sm:gap-4">
            <a href="#contact" className="btn btn-red">
              Request a Free Estimate
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Contact BH Contracting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
