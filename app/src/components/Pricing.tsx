import { plans } from "@/data/library";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-t border-white/10 bg-gradient-to-b from-transparent via-white/5 to-transparent py-24"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8">
        <div className="flex flex-col gap-4 text-pretty">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200/70">
            Pricing
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Start with the workspace your team needs today. Scale without
            renegotiating tomorrow.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                "flex h-full flex-col gap-6 rounded-3xl border p-6 shadow-2xl transition",
                plan.popular
                  ? "border-blue-200/60 bg-blue-400/15 shadow-blue-500/20"
                  : "border-white/10 bg-white/5 shadow-blue-500/5",
              ].join(" ")}
            >
              {plan.popular && (
                <span className="self-start rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-950">
                  Most popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
                  {plan.caption}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3 text-sm text-white/70">
                {plan.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative rounded-2xl border border-white/5 bg-black/30 p-4 pl-10"
                  >
                    <span className="absolute left-4 top-4 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={[
                  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition",
                  plan.popular
                    ? "bg-white text-blue-900 hover:bg-blue-100"
                    : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white",
                ].join(" ")}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
