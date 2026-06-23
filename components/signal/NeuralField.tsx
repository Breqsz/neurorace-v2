import { cn } from "@/lib/utils";

const NODES = [
  [80, 60], [200, 120], [340, 70], [300, 230], [470, 150], [540, 60], [120, 210],
] as const;
const EDGES = [
  [0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [0, 6], [6, 3],
] as const;

/** Malha neural sutil de fundo. Decorativa, leve, respeita reduced-motion. */
export function NeuralField({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 300"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none text-attention", className)}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.18">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
          />
        ))}
      </g>
      <g fill="currentColor">
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 4 : 2.5}
            opacity="0.5"
            className="motion-safe:animate-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
