import { testimonials } from "@/data/library";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-t border-white/10 py-24"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8">
        <div className="flex flex-col gap-4 text-pretty">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200/70">
            Customers
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Creative operators scaling at the speed of culture choose air.inc.
          </h2>
          <p className="max-w-3xl text-base text-white/60 md:text-lg">
            From global beauty unicorns to high-velocity DTC teams, air.inc keeps
            everyone working from a single, searchable hub.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/5"
            >
              <p className="text-sm leading-relaxed text-white/75">
                “{testimonial.quote}”
              </p>
              <footer className="mt-auto text-xs uppercase tracking-[0.3em] text-white/40">
                <p className="font-semibold text-white/70">
                  {testimonial.name}
                </p>
                <p className="text-white/40">
                  {testimonial.role} • {testimonial.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
