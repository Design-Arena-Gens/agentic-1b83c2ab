export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040814]/90 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
            air.inc
          </div>
          <p className="mt-4 max-w-md text-sm text-white/50">
            The fastest creative teams launch on air.inc — a single creative
            cloud for every static, video, and motion asset worth sharing.
          </p>
        </div>
        <div className="grid gap-6 text-sm text-white/60 sm:grid-cols-2 md:gap-12">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Platform
            </p>
            <a className="block hover:text-white" href="#library">
              Creative library
            </a>
            <a className="block hover:text-white" href="#workflow">
              Workflow automation
            </a>
            <a className="block hover:text-white" href="#pricing">
              Plans & pricing
            </a>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Resources
            </p>
            <a className="block hover:text-white" href="#cta">
              Request a demo
            </a>
            <a className="block hover:text-white" href="#">
              Creative ops playbook
            </a>
            <a className="block hover:text-white" href="#">
              Launch readiness checklist
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.3em] text-white/30">
        © {new Date().getFullYear()} air.inc. Built for teams shipping culture.
      </div>
    </footer>
  );
}
