import { cn } from "@/lib/utils";

const fillColor = {
  attention: "bg-attention",
  meditation: "bg-meditation",
} as const;

export function MetricBar({
  label,
  value,
  max = 100,
  kind = "attention",
  className,
}: {
  label: string;
  value: number;
  max?: number;
  kind?: "attention" | "meditation";
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex items-center justify-between font-mono text-[0.7rem] text-fg">
        <span>{label}</span>
        <span className={kind === "meditation" ? "text-meditation" : "text-attention"}>
          {Math.round(value)}
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-hairline"
        role="progressbar"
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div className={cn("h-full rounded-full", fillColor[kind])} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
