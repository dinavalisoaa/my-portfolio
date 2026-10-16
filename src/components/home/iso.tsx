// Tiny isometric renderer: boxes in world units → SVG polygons. Colors come from .iso / .iso-blue in globals.css.

export type Box = {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  blue?: boolean;
  logo?: string;
  label?: string;
};

const C = 0.866;
const S = 0.5;
const LOGO = 16;
const BADGE = 12;

const p = (x: number, y: number, z: number): [number, number] => [(x - y) * C, (x + y) * S - z];
const pts = (a: [number, number][]) => a.map((q) => q.join(",")).join(" ");

function faces({ x, y, z = 0, w, d, h }: Box) {
  const t = z + h;
  return {
    top: [p(x, y, t), p(x + w, y, t), p(x + w, y + d, t), p(x, y + d, t)],
    left: [p(x, y + d, z), p(x + w, y + d, z), p(x + w, y + d, t), p(x, y + d, t)],
    right: [p(x + w, y, z), p(x + w, y + d, z), p(x + w, y + d, t), p(x + w, y, t)],
  };
}

export function IsoScene({ boxes, className }: { boxes: Box[]; className?: string }) {
  // Painter's order: back (small x+y) first, then bottom to top
  const sorted = [...boxes].sort((a, b) => a.x + a.y - (b.x + b.y) || (a.z ?? 0) - (b.z ?? 0));
  const all = sorted.flatMap((b) => Object.values(faces(b)).flat());
  const xs = all.map((q) => q[0]);
  const ys = all.map((q) => q[1]);
  const pad = 4;
  const minY = Math.min(...ys) - (boxes.some((b) => b.logo) ? BADGE + 4 : 0);
  const viewBox = [Math.min(...xs) - pad, minY - pad, Math.max(...xs) - Math.min(...xs) + pad * 2, Math.max(...ys) - minY + pad * 2].join(" ");

  return (
    <svg viewBox={viewBox} className={className} role="img">
      {sorted.map((b, i) => {
        const f = faces(b);
        return (
          <g key={i} className={b.blue ? "iso-blue" : "iso"}>
            <polygon points={pts(f.left)} className="iso-l" />
            <polygon points={pts(f.right)} className="iso-r" />
            <polygon points={pts(f.top)} className="iso-t" />
          </g>
        );
      })}
      {/* Logos in a second pass so cubes in front never hide them */}
      {sorted.map((b, i) => {
        if (!b.logo) return null;
        const [cx, cy] = p(b.x + b.w / 2, b.y + b.d / 2, (b.z ?? 0) + b.h);
        const y = cy - 5;
        return (
          <g key={i} className="transition-transform duration-200 hover:-translate-y-1.5">
            <title>{b.label}</title>
            <circle cx={cx} cy={y} r={BADGE} className="iso-badge" />
            <image href={b.logo} x={cx - LOGO / 2} y={y - LOGO / 2} width={LOGO} height={LOGO}/>
          </g>
        );
      })}
    </svg>
  );
}

// Cubes laid out as a horizontal band on screen, `perRow` per line, back line first.
// Line k holds grid cells with i + j = k, so each line is flat on screen and lines interleave.
// Daily drivers go in the back line, taller and blue.
export function StackCubes({ tools, perRow = 8, className }: { tools: { name: string; logo: string; core?: boolean }[]; perRow?: number; className?: string }) {
  const U = 40;
  const ordered = [...tools.filter((t) => t.core), ...tools.filter((t) => !t.core)];
  const boxes = ordered.map((t, n) => {
    const k = Math.floor(n / perRow);
    const count = Math.min(perRow, ordered.length - k * perRow); // short last line gets centered
    let m = -(count - 1) + 2 * (n % perRow);
    if ((((m + k) % 2) + 2) % 2) m += 1; // i and j must be integers
    return { t, x: ((k + m) / 2) * U, y: ((k - m) / 2) * U };
  }).map(({ t, x, y }) => ({
    x,
    y,
    w: 34,
    d: 34,
    h: t.core ? 34 : 12,
    blue: t.core,
    logo: t.logo,
    label: t.name,
  }));
  return <IsoScene boxes={boxes} className={className} />;
}

// Small illustrations (education cards)
const SCENES: Record<string, Box[]> = {
  books: [
    { x: 0, y: 0, z: 0, w: 80, d: 50, h: 10 },
    { x: 6, y: 4, z: 10, w: 68, d: 44, h: 10 },
    { x: 2, y: 2, z: 20, w: 76, d: 48, h: 10, blue: true },
  ],
};

export function IsoIllustration({ kind }: { kind: keyof typeof SCENES }) {
  return <IsoScene boxes={SCENES[kind]} className="h-28 w-auto" />;
}
