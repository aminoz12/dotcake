"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  /** translate amount as % of element height; positive = moves down slower */
  speed?: number;
  className?: string;
};

/**
 * Scroll-linked parallax. The outer element is measured (never transformed)
 * while the inner element is translated, so getBoundingClientRect stays stable.
 */
export function Parallax({ children, speed = 0.18, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * 60}%`, `${speed * -60}%`]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
