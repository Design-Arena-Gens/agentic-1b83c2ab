export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden border-t border-white/10 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.25),transparent_55%)]" />
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          Ready for launch?
        </span>
        <h2 className="mt-6 text-pretty text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Move your next campaign into air.inc and never dig through folders
          again.
        </h2>
        <p className="mt-4 text-base text-white/60">
          Your workspace spins up in minutes. Bring your current cloud, review
          tools, or DAM — we integrate with the stack you already have.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"
          >
            Book enterprise demo
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
          >
            Start free workspace
          </a>
        </div>
      </div>
    </section>
  );
}
