const WORDS = ["Crack.", "Scoop.", "Enjoy."];
const COLORS = ["#ec1c6b", "#a8c24a", "#f4c94e"];

/**
 * Brand ticker — pure CSS loop (compositor-only, no scroll listeners),
 * so it stays smooth and adds zero main-thread work while scrolling.
 */
export function Marquee() {
  // one logical group of words (repeated twice in markup for a seamless loop)
  const group = Array.from({ length: 6 }).flatMap(() => WORDS);

  return (
    <div className="relative overflow-hidden border-y border-rose/15 bg-ink py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {group.map((word, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span
                  className="px-6 font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl"
                  style={{ color: COLORS[i % COLORS.length] }}
                >
                  {word}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
