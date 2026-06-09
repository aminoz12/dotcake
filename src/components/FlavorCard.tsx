"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Flavor } from "@/lib/data";

type Props = {
  flavor: Flavor;
  index: number;
};

/**
 * Frameless flavor item: the product image floats freely (no card chrome),
 * with a subtle cursor-driven tilt and lift on hover.
 */
export function FlavorCard({ flavor, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="perspective"
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group flex h-full flex-col items-center text-center"
      >
        {/* product image — no frame */}
        <div className="relative flex w-full items-center justify-center">
          {/* soft themed glow behind the cup */}
          <div
            className="pointer-events-none absolute h-72 w-72 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: flavor.glow }}
          />
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            className="relative aspect-[4/5] w-full max-w-[20rem]"
            whileHover={{ scale: 1.07, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Image
              src={flavor.image}
              alt={`Gobelet DOT CAKE saveur ${flavor.name}`}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 320px"
              className="object-contain drop-shadow-[0_26px_40px_rgba(29,17,23,0.25)]"
            />
          </motion.div>
        </div>

        {/* dots accent */}
        <div className="mt-5 flex gap-1.5" style={{ transform: "translateZ(20px)" }}>
          {flavor.dots.map((c, i) => (
            <span key={i} className="h-2 w-2 rounded-full" style={{ background: c }} />
          ))}
        </div>

        {/* content */}
        <div className="mt-3" style={{ transform: "translateZ(20px)" }}>
          <h3
            className="font-display text-xl font-extrabold uppercase tracking-tight"
            style={{ color: flavor.accent }}
          >
            {flavor.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-ink">{flavor.genoise}</p>
          <p className="text-sm text-ink-soft">{flavor.creme}</p>
        </div>
      </motion.article>
    </motion.div>
  );
}
