"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const variants = {
  rise: { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, duration: 0.5 },
  label: { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, duration: 0.35 },
} as const;

/**
 * Entrada por papel. `rise` = blocos de conteúdo; `label` = rótulos/numerais (mais curto).
 * Distâncias curtas + viewport once = barato e respeita prefers-reduced-motion no CSS global.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "rise" | "label";
}) {
  const v = variants[variant];
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: v.duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
