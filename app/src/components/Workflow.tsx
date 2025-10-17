import { workflow } from "@/data/library";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative border-t border-white/10 bg-gradient-to-b from-transparent via-white/5 to-transparent py-24"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8">
        <div className="flex flex-col gap-4 text-pretty">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200/70">
            Workflow
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Built for in-house teams, agile agencies, and the producers that
            connect them.
          </h2>
          <p className="max-w-3xl text-base text-white/60 md:text-lg">
            Orchestrate ingest, reviews, and handoffs without spreadsheets or
            hijacked file systems. air.inc adapts to every creative process yet
            keeps a consistent source of truth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {workflow.map((stage) => (
            <article
              key={stage.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#050918]/80 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur transition hover:border-blue-300/60 hover:shadow-blue-500/20"
            >
              <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                {stage.badge}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {stage.title}
              </h3>
              <p className="text-sm text-white/60">{stage.summary}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-3 text-sm text-white/65">
                {stage.details.map((detail) => (
                  <li
                    key={detail}
                    className="relative rounded-2xl border border-white/5 bg-black/30 p-4 pl-10"
                  >
                    <span className="absolute left-4 top-4 inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
