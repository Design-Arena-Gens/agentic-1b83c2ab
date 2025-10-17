import { metrics } from "@/data/library";
import Sparkles from "./Sparkles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/40 via-indigo-400/30 to-sky-400/10 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-28 text-center sm:px-8 md:pt-32">
        <Sparkles />
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          creative operating system
        </span>
        <h1 className="mx-auto max-w-3xl text-balance font-semibold text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Google Drive was never built for launch velocity.{" "}
          <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
            air.inc
          </span>{" "}
          is.
        </h1>
        <p className="max-w-2xl text-pretty text-base text-white/65 sm:text-lg">
          A single source of truth for every static, motion, and video asset
          your brand pushes into the world. Deploy faster, stay on-brand, and
          keep creative teams in flow.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#library"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-400/40 transition hover:scale-[1.02]"
          >
            Explore the workspace
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
          >
            Watch 3-min demo
          </a>
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-blue-500/5 backdrop-blur"
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
                {metric.label}
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {metric.value}
              </p>
              <p className="mt-3 text-sm text-white/55">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
