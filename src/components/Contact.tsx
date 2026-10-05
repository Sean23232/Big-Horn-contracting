import { useState } from "react";

const FIELD =
  "w-full bg-white border border-black/15 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 focus:outline-none focus:border-brand-red transition-colors";
const LABEL = "block font-display uppercase tracking-[0.16em] text-[11px] text-ink/55 mb-2";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* left info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-9 bg-brand-red" />
              <p className="eyebrow text-[11px] text-ink/45">Contact</p>
            </div>
            <h2 className="headline text-[2.1rem] sm:text-4xl lg:text-[3.2rem] text-ink max-w-md">
              Let's talk about your project.
            </h2>

            <div className="mt-12 border-t border-black/12">
              <div className="py-7 border-b border-black/10">
                <p className="eyebrow text-[10px] text-brand-red mb-3">BH Contracting</p>
                <p className="font-display uppercase tracking-[0.12em] text-lg text-ink">
                  Albuquerque, New Mexico
                </p>
              </div>
              <div className="py-7 border-b border-black/10">
                <p className="eyebrow text-[10px] text-ink/40 mb-3">Serving</p>
                <p className="text-[15px] text-ink/70 font-light">
                  Residential &amp; Commercial Customers
                  <br />
                  Albuquerque and surrounding areas
                </p>
              </div>
              <div className="py-7 border-b border-black/10">
                <p className="eyebrow text-[10px] text-ink/40 mb-3">Phone</p>
                <p className="text-[15px] text-ink/40 font-light italic">[ Phone number to be provided ]</p>
              </div>
              <div className="py-7">
                <p className="eyebrow text-[10px] text-ink/40 mb-3">Email</p>
                <p className="text-[15px] text-ink/40 font-light italic">[ Email address to be provided ]</p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <div className="border border-black/12 p-6 sm:p-10 lg:p-12 bg-bone/60">
              {sent ? (
                <div className="py-16 text-center">
                  <span className="mx-auto block h-[3px] w-12 bg-brand-red mb-7" />
                  <h3 className="headline text-2xl sm:text-3xl text-ink">Request Received</h3>
                  <p className="mt-4 text-ink/60 font-light max-w-sm mx-auto">
                    This is a design concept — no message was actually sent. In the live site this
                    request would be delivered to BH Contracting.
                  </p>
                  <button onClick={() => setSent(false)} className="btn btn-outline-dark mt-8">
                    Back to Form
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <p className="eyebrow text-[10px] text-ink/45 mb-8">Request a Free Estimate</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL} htmlFor="name">Name</label>
                      <input id="name" required className={FIELD} placeholder="Your full name" />
                    </div>
                    <div>
                      <label className={LABEL} htmlFor="phone">Phone</label>
                      <input id="phone" type="tel" className={FIELD} placeholder="(000) 000-0000" />
                    </div>
                    <div>
                      <label className={LABEL} htmlFor="email">Email</label>
                      <input id="email" type="email" required className={FIELD} placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className={LABEL} htmlFor="type">Project Type</label>
                      <select id="type" className={`${FIELD} appearance-none`} defaultValue="">
                        <option value="" disabled>Select a service</option>
                        {["Concrete", "Stucco", "Remodeling", "Junk Removal", "Residential", "Commercial", "Other"].map(
                          (o) => (
                            <option key={o}>{o}</option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className={LABEL} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`${FIELD} resize-none`}
                      placeholder="Tell us a little about your project, location, and timeline."
                    />
                  </div>

                  <button type="submit" className="btn btn-red mt-8 w-full sm:w-auto">
                    Request a Free Estimate
                  </button>
                  <p className="mt-5 text-[12px] text-ink/40 font-light">
                    Demo form — submissions are not sent anywhere in this concept.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
