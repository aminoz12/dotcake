"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gold progress bar fixed at the very top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-rose-gradient"
    />
  );
}
