"use client";

import { useState, useMemo } from "react";
import pods, {
  ALL_CATEGORIES,
  ALL_LINEUPS,
  MALDIVES_IDS,
  MAX_CAFFEINE,
  type CupSize,
  type Lineup,
  type Pod,
} from "@/lib/data";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

/* ─── Constants ─────────────────────────────────────── */

const CUP_SIZE_ORDER: CupSize[] = [
  "Ristretto (25ml)",
  "Espresso (40ml)",
  "Double Espresso (80ml)",
  "Gran Lungo (150ml)",
  "Coffee (230ml)",
  "XL (355ml)",
  "XL (535ml)",
];

const CUP_SIZE_SHORT: Record<string, string> = {
  "Ristretto (25ml)": "Ristretto",
  "Espresso (40ml)": "Espresso",
  "Double Espresso (80ml)": "Dbl Espresso",
  "Gran Lungo (150ml)": "Gran Lungo",
  "Coffee (230ml)": "Coffee",
  "XL (355ml)": "XL 355ml",
  "XL (535ml)": "XL 535ml",
};

type SortKey =
  | "caffeine-desc"
  | "caffeine-asc"
  | "intensity-desc"
  | "intensity-asc"
  | "name";

/* ─── Caffeine helpers ──────────────────────────────── */

function caffeineAvg(pod: Pod) {
  return (pod.caffeineMin + pod.caffeineMax) / 2;
}

function caffeineColor(avg: number): string {
  if (avg <= 60) return "#4ade80";
  if (avg <= 120) return "#fbbf24";
  if (avg <= 180) return "#fb923c";
  return "#f87171";
}

function caffeineTier(avg: number): string {
  if (avg <= 60) return "Low";
  if (avg <= 120) return "Moderate";
  if (avg <= 180) return "High";
  return "Very High";
}

/* ─── Sub-components ────────────────────────────────── */

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={
        active
          ? {
              background: "#c48f28",
              color: "#0d0a07",
              boxShadow: "0 0 14px rgba(196,143,40,0.35)",
            }
          : {}
      }
      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 shrink-0 ${
        active
          ? ""
          : "bg-[#1e1812] text-[#6b5440] border border-[#2a1f10] hover:border-[#c48f28]/40 hover:text-[#bfa07a]"
      }`}
    >
      {children}
    </button>
  );
}

function CaffeineRing({ pod }: { pod: Pod }) {
  const avg = caffeineAvg(pod);
  const pct = Math.min(100, (avg / MAX_CAFFEINE) * 100);
  const color = caffeineColor(avg);
  const r = 24;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);

  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Track */}
        <circle
          cx="30" cy="30" r={r}
          fill="none"
          stroke="#2a1f10"
          strokeWidth="5"
        />
        {/* Fill */}
        <circle
          cx="30" cy="30" r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 30 30)"
          style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(.4,0,.2,1)" }}
        />
      </svg>
      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[8px] font-bold leading-none" style={{ color }}>
          {pod.caffeineLabel.replace("mg", "")}
        </span>
        <span className="text-[6px] leading-none mt-0.5" style={{ color: "#4a3820" }}>
          mg
        </span>
      </div>
    </div>
  );
}

function IntensityDots({ intensity }: { intensity: number | null }) {
  if (intensity === null) return null;
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 13 }, (_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: 4,
            height: 4,
            background: i < intensity ? "#c48f28" : "#241c12",
            boxShadow: i < intensity ? "0 0 3px rgba(196,143,40,0.5)" : "none",
          }}
        />
      ))}
      <span className="ml-1.5 text-[9px] font-semibold" style={{ color: "#4a3820" }}>
        {intensity}
      </span>
    </div>
  );
}

function PodCard({ pod, index, showStoreBadge }: { pod: Pod; index: number; showStoreBadge: boolean }) {
  const avg = caffeineAvg(pod);
  const tier = caffeineTier(avg);
  const color = caffeineColor(avg);

  return (
    <div
      className="card-enter group relative flex flex-col rounded-2xl border p-4 transition-all duration-200"
      style={{
        background: "#131009",
        borderColor: "#2a1f10",
        animationDelay: `${Math.min(index * 20, 300)}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,143,40,0.35)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 24px rgba(196,143,40,0.07), 0 4px 24px rgba(0,0,0,0.4)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#2a1f10";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
      }}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-1">
        {pod.decaf && (
          <div
            className="px-1.5 py-0.5 rounded text-[7px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(56,189,248,0.12)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}
          >
            Decaf
          </div>
        )}
        {showStoreBadge && MALDIVES_IDS.has(pod.id) && (
          <div
            className="px-1.5 py-0.5 rounded text-[7px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(196,143,40,0.12)", color: "#c48f28", border: "1px solid rgba(196,143,40,0.2)" }}
          >
            🇲🇻 MV
          </div>
        )}
      </div>

      {/* Top row: meta + ring */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0 pr-1">
          <p
            className="text-[8px] font-semibold uppercase tracking-[0.18em] mb-1.5"
            style={{ color: "#3d2c18" }}
          >
            {pod.lineup} · {pod.category}
          </p>
          <h3
            className="text-sm font-semibold leading-snug"
            style={{ color: "#f0e4cc", fontFamily: "var(--font-dm-sans)" }}
            title={pod.name}
          >
            {pod.name}
          </h3>
        </div>
        <CaffeineRing pod={pod} />
      </div>

      {/* Cup size */}
      <p className="text-[9px] mb-2.5" style={{ color: "#3d2c18" }}>
        {pod.cupSize}
      </p>

      {/* Intensity */}
      {pod.intensity !== null && (
        <div className="mb-3">
          <IntensityDots intensity={pod.intensity} />
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Notes */}
      <p
        className="text-[10px] italic leading-relaxed line-clamp-2 mt-2"
        style={{ color: "#6b5440" }}
      >
        {pod.notes}
      </p>

      {/* Bottom: tier label */}
      <div className="mt-3 pt-2.5 border-t flex items-center justify-between" style={{ borderColor: "#1e1812" }}>
        <span className="text-[8px] font-semibold uppercase tracking-widest" style={{ color }}>
          {tier}
        </span>
        {pod.weight !== "–" && (
          <span className="text-[8px]" style={{ color: "#3d2c18" }}>
            {pod.weight}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Legend ────────────────────────────────────────── */

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {[
        { color: "#4ade80", label: "Low ≤60mg" },
        { color: "#fbbf24", label: "Moderate ≤120mg" },
        { color: "#fb923c", label: "High ≤180mg" },
        { color: "#f87171", label: "Very high >180mg" },
      ].map(({ color, label }) => (
        <span key={label} className="flex items-center gap-1.5 text-[10px]" style={{ color: "#4a3820" }}>
          <span
            className="inline-block rounded-full"
            style={{ width: 6, height: 6, background: color, boxShadow: `0 0 4px ${color}80` }}
          />
          {label}
        </span>
      ))}
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────── */

export default function Home() {
  const [search, setSearch] = useState("");
  const [lineup, setLineup] = useState<"all" | Lineup>("all");
  const [category, setCategory] = useState("all");
  const [cupSize, setCupSize] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("caffeine-desc");
  const [caffeineRange, setCaffeineRange] = useState([0, MAX_CAFFEINE]);
  const [showDecaf, setShowDecaf] = useState(true);
  const [maldivesOnly, setMaldivesOnly] = useState(true);

  const filtered = useMemo(() => {
    const list = pods.filter((p) => {
      if (maldivesOnly && !MALDIVES_IDS.has(p.id)) return false;
      if (!showDecaf && p.decaf) return false;
      if (lineup !== "all" && p.lineup !== lineup) return false;
      if (category !== "all" && p.category !== category) return false;
      if (cupSize !== "all" && p.cupSize !== cupSize) return false;
      const avg = caffeineAvg(p);
      if (avg < caffeineRange[0] || avg > caffeineRange[1]) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.notes.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
      return true;
    });

    list.sort((a, b) => {
      switch (sortKey) {
        case "name":           return a.name.localeCompare(b.name);
        case "caffeine-asc":   return caffeineAvg(a) - caffeineAvg(b);
        case "caffeine-desc":  return caffeineAvg(b) - caffeineAvg(a);
        case "intensity-asc":  return (a.intensity ?? 0) - (b.intensity ?? 0);
        case "intensity-desc": return (b.intensity ?? 0) - (a.intensity ?? 0);
        default:               return 0;
      }
    });
    return list;
  }, [search, lineup, category, cupSize, sortKey, caffeineRange, showDecaf, maldivesOnly]);

  const cupSizeOptions = useMemo(() => {
    const sizes = new Set(
      pods.filter((p) => lineup === "all" || p.lineup === lineup).map((p) => p.cupSize)
    );
    return CUP_SIZE_ORDER.filter((s) => sizes.has(s));
  }, [lineup]);

  return (
    <div className="min-h-screen" style={{ background: "#0d0a07" }}>

      {/* ── Maldives Store Banner ─────────────────────── */}
      <div
        className="border-b flex items-center justify-between px-6 py-2.5"
        style={{ background: maldivesOnly ? "rgba(196,143,40,0.07)" : "rgba(255,255,255,0.02)", borderColor: maldivesOnly ? "rgba(196,143,40,0.18)" : "#1e1812" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-base leading-none" role="img" aria-label="Maldives">🇲🇻</span>
          <span className="text-xs font-medium" style={{ color: maldivesOnly ? "#c48f28" : "#4a3820" }}>
            {maldivesOnly
              ? `Maldives Store · ${MALDIVES_IDS.size} pods (Classic line)`
              : "Showing all 93 pods worldwide"}
          </span>
        </div>
        <button
          onClick={() => setMaldivesOnly(!maldivesOnly)}
          className="text-[10px] font-semibold uppercase tracking-widest transition-colors px-3 py-1 rounded-full"
          style={
            maldivesOnly
              ? { color: "#6b5440", background: "transparent", border: "1px solid #2a1f10" }
              : { color: "#c48f28", background: "rgba(196,143,40,0.1)", border: "1px solid rgba(196,143,40,0.25)" }
          }
        >
          {maldivesOnly ? "Show all" : "Maldives only"}
        </button>
      </div>

      {/* ── Hero Header ───────────────────────────────── */}
      <header style={{ borderBottom: "1px solid #1e1812" }}>
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-end justify-between gap-6">
          <div>
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.35em] mb-3"
              style={{ color: "#3d2c18" }}
            >
              The Definitive Reference
            </p>
            <h1
              className="font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight"
              style={{ color: "#f0e4cc" }}
            >
              Nespresso<br />
              <span style={{ color: "#c48f28" }}>Caffeine</span> Guide
            </h1>
            <p className="mt-4 text-sm" style={{ color: "#4a3820" }}>
              {maldivesOnly ? "Classic line · Maldives store" : "All 93 pods worldwide"} · Data sourced from Nespresso Taiwan · Intensity ≠ caffeine
            </p>
          </div>

          {/* Pod count */}
          <div className="text-right shrink-0">
            <div
              className="font-display text-6xl font-bold tabular-nums"
              style={{ color: "#c48f28", lineHeight: 1, textShadow: "0 0 40px rgba(196,143,40,0.3)" }}
            >
              {filtered.length}
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] mt-1" style={{ color: "#3d2c18" }}>
              pods shown
            </div>
          </div>
        </div>
      </header>

      {/* ── Filter Panel ──────────────────────────────── */}
      <div
        className="sticky top-0 z-20 backdrop-blur-md"
        style={{ background: "rgba(13,10,7,0.95)", borderBottom: "1px solid #1e1812" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-3 space-y-2.5">

          {/* Row 1: search + lineup + sort + decaf */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative w-48">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "#3d2c18" }}
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <Input
                placeholder="Search pods…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-8 text-xs w-full"
              />
            </div>

            {/* Lineup pills */}
            <div className="flex gap-1.5">
              {(["all", ...ALL_LINEUPS] as const).map((l) => (
                <Chip
                  key={l}
                  active={lineup === l}
                  onClick={() => { setLineup(l); setCupSize("all"); }}
                >
                  {l === "all" ? "All lineups" : l}
                </Chip>
              ))}
            </div>

            <div className="flex-1" />

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-widest" style={{ color: "#3d2c18" }}>
                Sort
              </span>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="custom-select px-3 py-1.5 rounded-lg text-xs transition-all focus:outline-none pr-7"
                style={{
                  background: "#1e1812",
                  border: "1px solid #2a1f10",
                  color: "#bfa07a",
                }}
              >
                <option value="caffeine-desc">Caffeine ↓</option>
                <option value="caffeine-asc">Caffeine ↑</option>
                <option value="intensity-desc">Intensity ↓</option>
                <option value="intensity-asc">Intensity ↑</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>

            {/* Decaf toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDecaf(!showDecaf)}
                className="relative inline-flex h-5 w-9 rounded-full transition-colors duration-200 focus:outline-none"
                style={{ background: showDecaf ? "#c48f28" : "#1e1812", border: "1px solid #2a1f10" }}
                role="switch"
                aria-checked={showDecaf}
              >
                <span
                  className="inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200"
                  style={{ transform: showDecaf ? "translateX(16px)" : "translateX(1px)", marginTop: 1 }}
                />
              </button>
              <span
                className="text-[9px] uppercase tracking-widest cursor-pointer select-none"
                style={{ color: "#3d2c18" }}
                onClick={() => setShowDecaf(!showDecaf)}
              >
                Decaf
              </span>
            </div>
          </div>

          {/* Row 2: categories */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-[8px] uppercase tracking-widest shrink-0 mr-1" style={{ color: "#2a1f10" }}>
              Category
            </span>
            <Chip active={category === "all"} onClick={() => setCategory("all")}>
              All
            </Chip>
            {ALL_CATEGORIES.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </Chip>
            ))}
          </div>

          {/* Row 3: cup size + caffeine range */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
              <span className="text-[8px] uppercase tracking-widest shrink-0 mr-1" style={{ color: "#2a1f10" }}>
                Size
              </span>
              <Chip active={cupSize === "all"} onClick={() => setCupSize("all")}>
                All
              </Chip>
              {cupSizeOptions.map((s) => (
                <Chip key={s} active={cupSize === s} onClick={() => setCupSize(s)}>
                  {CUP_SIZE_SHORT[s] ?? s}
                </Chip>
              ))}
            </div>

            {/* Caffeine range slider */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[9px] whitespace-nowrap tabular-nums" style={{ color: "#4a3820" }}>
                {caffeineRange[0]}–{caffeineRange[1]}mg
              </span>
              <div className="w-28">
                <Slider
                  min={0}
                  max={MAX_CAFFEINE}
                  step={10}
                  value={caffeineRange}
                  onValueChange={(v) =>
                    setCaffeineRange(Array.isArray(v) ? [...v] : [v, v])
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Results ───────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Legend */}
        <div className="mb-5">
          <Legend />
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32" style={{ color: "#3d2c18" }}>
            <div className="font-display text-6xl mb-4" style={{ color: "#1e1812" }}>☕</div>
            <p className="text-sm font-medium">No pods match your filters</p>
            <button
              className="mt-4 text-xs underline underline-offset-2 transition-colors"
              style={{ color: "#4a3820" }}
              onClick={() => {
                setSearch(""); setLineup("all"); setCategory("all");
                setCupSize("all"); setCaffeineRange([0, MAX_CAFFEINE]);
                setShowDecaf(true); setMaldivesOnly(true);
              }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((pod, i) => (
              <PodCard key={pod.id} pod={pod} index={i} showStoreBadge={!maldivesOnly} />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pb-8 flex flex-col items-center gap-2">
          <div
            className="font-display text-xl font-bold"
            style={{ color: "#1e1812" }}
          >
            Nespresso Caffeine Guide
          </div>
          <p className="text-[10px] text-center" style={{ color: "#2a1f10" }}>
            Data sourced from Nespresso Taiwan · All pods manufactured in Switzerland by Nestlé Nespresso S.A.
            <br />
            FDA/EFSA recommended daily limit: 400mg · Caffeine may vary slightly between batches
          </p>
        </footer>
      </div>
    </div>
  );
}
