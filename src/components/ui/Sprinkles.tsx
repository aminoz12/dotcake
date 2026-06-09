"use client";

import { motion } from "framer-motion";

const COLORS = ["#f06ca0", "#a8c24a", "#f4c94e", "#ec9a4c", "#f3e7c6", "#ec1c6b"];

// Deterministic pseudo-random layout (no Math.random — stable across renders/SSR)
const SEED = [
  [8, 12, 10], [22, 70, 7], [40, 20, 9], [62, 80, 8], [80, 30, 11],
  [90, 65, 7], [15, 45, 8], [50, 55, 10], [72, 15, 9], [33, 88, 7],
  [88, 90, 8], [5, 78, 9], [55, 8, 7], [95, 45, 10], [28, 30, 8],
];

type Props = { className?: string; count?: number };

/** Floating multicolor mini-billes — the signature "dots" of DOT CAKE. */
export function Sprinkles({ className = "", count = 14 }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {SEED.slice(0, count).map(([x, y, s], i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: s,
            height: s,
            background: COLORS[i % COLORS.length],
            opacity: 0.7,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 5) * 0.4,
          }}
        />
      ))}
    </div>
  );
}
