import { BRAND } from "@/lib/data";

type Props = {
  className?: string;
  /** size of the wordmark text */
  size?: "sm" | "md" | "lg" | "xl";
  /** show the "by GMD GROUP" line with gold filets */
  withParent?: boolean;
  /** light text variant for dark backgrounds */
  light?: boolean;
};

const SIZES = {
  sm: "text-lg sm:text-xl",
  md: "text-2xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-5xl sm:text-6xl lg:text-7xl",
};

const ORB = {
  sm: "h-[0.7em] w-[0.7em]",
  md: "h-[0.72em] w-[0.72em]",
  lg: "h-[0.74em] w-[0.74em]",
  xl: "h-[0.76em] w-[0.76em]",
};

/**
 * DOT CAKE wordmark — "D[•]T CAKE" where the O is the signature
 * multicolor mini-billes orb, "DOT" in ink (or white), "CAKE" in pink.
 */
export function Logo({
  className = "",
  size = "md",
  withParent = false,
  light = false,
}: Props) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`inline-flex items-center font-display font-extrabold tracking-tightest ${SIZES[size]}`}
      >
        <span className={light ? "text-white" : "text-ink"}>D</span>
        <span
          className={`dot-orb mx-[0.04em] inline-block rounded-full ring-1 ring-black/10 ${ORB[size]}`}
          aria-hidden
        />
        <span className={light ? "text-white" : "text-ink"}>T</span>
        <span className="ml-[0.18em] text-rose">CAKE</span>
      </span>
      {withParent && (
        <span className="mt-1 flex items-center gap-2">
          <span className="h-px w-5 bg-or" />
          <span className="text-[0.5em] font-medium tracking-widest text-ink-soft">
            <span className="italic">by</span>{" "}
            <span className={light ? "text-white/90" : "text-ink"}>GMD GROUP</span>
          </span>
          <span className="h-px w-5 bg-or" />
        </span>
      )}
      <span className="sr-only">
        {BRAND.name} {BRAND.parent}
      </span>
    </span>
  );
}
