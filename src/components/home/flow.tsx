import { ChevronLeft, ChevronRight } from "lucide-react";

// Serpentine timeline, newest first: row 1 reads left→right (Ibonia, Freelance, eTech),
// then turns down on the right and row 2 continues right→left. Arrows point toward the present.
// Built for exactly 5 stops on md+; mobile uses the plain vertical list in page.tsx.

type Stop = { period: string; company: string; place: string; role: string; summary: string; current?: boolean };

const CELL = ["md:col-start-1 md:row-start-1", "md:col-start-2 md:row-start-1", "md:col-start-3 md:row-start-1", "md:col-start-3 md:row-start-2", "md:col-start-2 md:row-start-2"];
const LINK = ["left", "left", "turn", null, "right"] as const;

export function FlowTimeline({ stops }: { stops: Stop[] }) {
  return (
    <ol className="grid grid-cols-3 gap-x-6 gap-y-8">
      {stops.map((s, i) => (
        <li key={s.company + s.period} className={`relative h-48 lg:h-36 ${CELL[i]}`}>
          <div className="flex h-3.5 items-center">
            <span
              className={`size-3.5 shrink-0 rounded-full ${s.current ? "bg-blue-500 shadow-[0_0_14px_rgb(59_130_246/0.9)]" : "bg-violet-400 shadow-[0_0_10px_rgb(167_139_250/0.7)]"}`}
            />
            {LINK[i] === "left" && (
              <span className="relative ml-3 -mr-3 h-px flex-1 bg-ink-3">
                <ChevronLeft className="absolute -top-[7px] -left-1.5 size-3.5 text-ink-2" />
              </span>
            )}
            {LINK[i] === "right" && (
              <span className="relative ml-3 -mr-3 h-px flex-1 bg-ink-3">
                <ChevronRight className="absolute -top-[7px] -right-1.5 size-3.5 text-ink-2" />
              </span>
            )}
          </div>
          {LINK[i] === "turn" && (
            // From the stop below, around the right side, into this one (cell height + gap-y-8)
            <span aria-hidden className="absolute top-[7px] left-6 -right-3 h-[calc(12rem+2rem)] lg:h-[calc(9rem+2rem)] rounded-r-2xl border-y border-r border-ink-3">
              <ChevronLeft className="absolute -top-[7.5px] -left-1.5 size-3.5 text-ink-2" />
            </span>
          )}
          <div className="mt-4 pr-6">
            <div className="text-xs text-ink-3">
              {s.period}
              {s.current && <span className="ml-1.5 text-blue-600 dark:text-blue-400">· Current</span>}
            </div>
            <div className="mt-1 text-[15px] leading-tight">
              {s.company} <span className="text-xs text-ink-3">· {s.place}</span>
            </div>
            <div className="mt-0.5 text-sm">{s.role}</div>
            <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-2">{s.summary}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
