export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#050918]/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-400 via-indigo-500 to-sky-400 px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
            air.inc
          </div>
          <span className="hidden text-sm text-white/60 lg:block">
            Creative asset cloud for unstoppable brands.
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a className="hover:text-white transition" href="#library">
            Library
          </a>
          <a className="hover:text-white transition" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-white transition" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white transition" href="#testimonials">
            Customers
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white md:block"
            href="#demo"
          >
            View product tour
          </a>
          <a
            className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 transition hover:shadow-blue-400/40"
            href="#cta"
          >
            Launch workspace
          </a>
        </div>
      </div>
    </header>
  );
}
