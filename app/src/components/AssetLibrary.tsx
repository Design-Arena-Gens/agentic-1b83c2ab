"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { assets, type Asset, type AssetType } from "@/data/library";

const filters: Array<{ label: string; value: AssetType | "All" }> = [
  { label: "All assets", value: "All" },
  { label: "Static", value: "Static" },
  { label: "Video", value: "Video" },
  { label: "Motion", value: "Motion" },
  { label: "Templates", value: "Template" },
];

function paletteGradient(palette: string[]) {
  if (palette.length === 1) return palette[0];
  return `linear-gradient(135deg, ${palette
    .map((color, index) => `${color} ${(index / (palette.length - 1)) * 100}%`)
    .join(", ")})`;
}

function assetMatches(asset: Asset, search: string) {
  if (!search) return true;
  const haystack = [
    asset.name,
    asset.brand,
    asset.campaign,
    asset.channel,
    asset.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(search.toLowerCase());
}

export default function AssetLibrary() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]["value"]>("All");
  const [search, setSearch] = useState("");

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const matchesType =
        activeFilter === "All" ? true : asset.type === activeFilter;
      return matchesType && assetMatches(asset, search);
    });
  }, [activeFilter, search]);

  return (
    <section id="library" className="relative border-t border-white/10 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200/70">
            Library
          </span>
          <div className="flex flex-col gap-4 text-pretty md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl">
              Every asset, every version, instantly searchable.
            </h2>
            <p className="max-w-md text-base text-white/60">
              Brand-safe creative spaces built for launch velocity. Organize by
              channel, campaign, or custom tags and keep teams working forward.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#070d1b]/80 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    activeFilter === filter.value
                      ? "border-blue-300/70 bg-blue-400/20 text-white shadow-inner shadow-blue-400/20"
                      : "border-white/10 text-white/65 hover:border-white/30 hover:text-white",
                  ].join(" ")}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="relative max-w-xs flex-1">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="m15.8 15.8-3.6-3.6m1.1-2.7a4.7 4.7 0 1 1-9.4 0 4.7 4.7 0 0 1 9.4 0Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                placeholder="Search by campaign, channel, or tag"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filteredAssets.map((asset) => (
              <article
                key={asset.id}
                className="group grid grid-cols-[1fr] gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-300/60 hover:bg-blue-500/10 sm:grid-cols-[220px_1fr]"
              >
                <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-black/40 sm:h-full">
                  <Image
                    src={asset.thumbnail}
                    fill
                    alt={asset.name}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {asset.type}
                  </span>
                  {asset.duration && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white/80">
                      {asset.duration}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                      <span>{asset.brand}</span>
                      <span className="inline-flex h-1 w-1 rounded-full bg-white/30" />
                      <span>{asset.channel}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {asset.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      {asset.campaign} • Updated {asset.updatedAt}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {asset.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/50"
                        >
                          {tag.replaceAll("-", " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-xs text-white/55">
                      <p className="font-semibold uppercase tracking-[0.3em] text-white/40">
                        Delivery
                      </p>
                      <p className="mt-2">
                        {asset.format} • {asset.aspect} • {asset.size}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-xs text-white/55">
                      <p className="font-semibold uppercase tracking-[0.3em] text-white/40">
                        Status
                      </p>
                      <p className="mt-2 flex items-center gap-2">
                        <span
                          className="inline-flex h-2 w-2 rounded-full"
                          style={{ background: paletteGradient(asset.palette) }}
                        />
                        {asset.status}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredAssets.length === 0 && (
            <div className="mt-16 grid place-items-center gap-4 rounded-2xl border border-dashed border-white/20 px-6 py-14 text-center text-white/50">
              <p className="text-lg font-medium">
                No matches just yet. Try a different tag or channel.
              </p>
              <p className="max-w-sm text-sm text-white/40">
                air.inc auto-tags every upload with talent, color stories, usage
                rights, and campaign metadata so teams can search without
                friction.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
