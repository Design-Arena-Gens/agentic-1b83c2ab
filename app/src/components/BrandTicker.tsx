const logos = [
  "Arcade",
  "Glowbar",
  "Volley",
  "Northloop",
  "Dusk Supply",
  "Studio FWD",
  "Halo Hydration",
];

export default function BrandTicker() {
  return (
    <section className="relative border-t border-white/10 bg-white/5 py-6">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 text-xs font-semibold uppercase tracking-[0.5em] text-white/35 sm:gap-10 sm:text-sm">
        {logos.map((logo) => (
          <span
            key={logo}
            className="rounded-full border border-white/5 bg-white/10 px-4 py-2 text-white/50"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
