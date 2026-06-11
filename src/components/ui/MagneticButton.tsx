"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Variant = "primary" | "outline";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

// Internal routes go through next/link (instant client-side navigation).
const MotionLink = motion.create(Link);

/**
 * Premium magnetic button: the element subtly tracks the cursor,
 * with a shine sweep on hover. Used for all primary CTAs.
 */
export function MagneticButton({
  children,
  href = "/#contact",
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const tx = useTransform(sx, (v) => v * 0.35);
  const ty = useTransform(sy, (v) => v * 0.35);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors will-change-transform";

  const styles =
    variant === "primary"
      ? "bg-rose-gradient text-white shadow-glow hover:shadow-glow-lg"
      : "border border-rose/30 bg-white text-rose hover:bg-rose-mist hover:text-rose-deep shadow-card";

  const shared = {
    ref,
    "aria-label": ariaLabel,
    onClick,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: tx, y: ty },
    whileTap: { scale: 0.96 },
    className: `${base} ${styles} ${className}`,
  };

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );

  // Internal navigation (routes or /#anchors) → Link; external/mailto → <a>.
  if (href.startsWith("/")) {
    return (
      <MotionLink href={href} {...shared}>
        {inner}
      </MotionLink>
    );
  }

  return (
    <motion.a href={href} {...shared}>
      {inner}
    </motion.a>
  );
}
