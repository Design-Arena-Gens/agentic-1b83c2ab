const features = [
  {
    title: "Unified creative vault",
    description:
      "Upload 8K video, layered design files, or live docs into collections with permissions tuned for brand, agency, or partner access.",
    points: [
      "Auto-tag by brand kit, creator, color, and licensing",
      "Collections mirror campaign structure with smart folders",
      "Usage rights countdown keeps teams compliant everywhere",
    ],
  },
  {
    title: "Feedback without the back-and-forth",
    description:
      "Sequence reviewers with SLA reminders, time-stamped markups, and annotated frames delivered where teams already work.",
    points: [
      "Frame-accurate comments with emoji reactions",
      "Slack, Teams, and email digests for fast approvals",
      "Compare versions visually and lock release-ready masters",
    ],
  },
  {
    title: "Launch-ready distribution",
    description:
      "Export once, deliver everywhere. Channel presets and smart resizes guarantee paid, owned, and retail partners get the right file every time.",
    points: [
      "Publish hubs for retailers, press, and franchisees",
      "Version control ensures only approved creative ships",
      "Deep performance analytics tie assets to revenue impact",
    ],
  },
];

export default function FeatureHighlights() {
  return (
    <section className="relative border-t border-white/10 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8">
        <div className="flex flex-col gap-4 text-pretty">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200/70">
            Platform
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            A creative OS designed for brands that launch daily.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/5"
            >
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-white/65">{feature.description}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-3 text-sm text-white/70">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="relative rounded-2xl border border-white/5 bg-black/20 p-4 pl-10"
                  >
                    <span className="absolute left-4 top-4 inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                    {point}
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
