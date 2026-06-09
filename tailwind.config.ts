import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light base
        paper: "#ffffff",
        blush: "#fff5f9",
        mist: "#fff0f6",
        // Ink (warm near-black) for text
        ink: {
          DEFAULT: "#1d1117",
          soft: "#5b4f55",
          mute: "#8a7d83",
        },
        // Signature DOT CAKE pink
        rose: {
          DEFAULT: "#ec1c6b",
          bright: "#f73e8b",
          light: "#f9a8c9",
          soft: "#ffe7f1",
          mist: "#fff2f7",
          deep: "#c00b54",
        },
        // Gold filets (echoes the "by GMD GROUP" lines)
        or: {
          DEFAULT: "#c9a24b",
          light: "#e8cd86",
          deep: "#a07d2e",
        },
        // Multicolor mini-billes (the "dots")
        dot: {
          pink: "#f06ca0",
          green: "#a8c24a",
          yellow: "#f4c94e",
          cream: "#f3e7c6",
          orange: "#ec9a4c",
        },
        // Flavor accents
        pistachio: "#9dbe3b",
        choco: "#7a4a2b",
        strawberry: "#e94e77",
        cookies: "#2b2228",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        luxe: "0.24em",
      },
      backgroundImage: {
        "rose-gradient":
          "linear-gradient(135deg, #f73e8b 0%, #ec1c6b 55%, #c00b54 100%)",
        "rose-text":
          "linear-gradient(120deg, #f73e8b 0%, #ec1c6b 60%, #c00b54 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #e8cd86 0%, #c9a24b 50%, #a07d2e 100%)",
        "radial-blush":
          "radial-gradient(60% 60% at 50% 30%, rgba(236,28,107,0.10) 0%, rgba(255,255,255,0) 70%)",
        "dot-confetti":
          "radial-gradient(circle, #f06ca0 0 2px, transparent 2px), radial-gradient(circle, #a8c24a 0 2px, transparent 2px), radial-gradient(circle, #f4c94e 0 2px, transparent 2px)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(236,28,107,0.28)",
        "soft-lg": "0 30px 70px -25px rgba(236,28,107,0.35)",
        glow: "0 0 50px -12px rgba(236,28,107,0.45)",
        "glow-lg": "0 0 100px -16px rgba(236,28,107,0.5)",
        card: "0 10px 40px -16px rgba(29,17,23,0.18)",
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        "bounce-soft": "bounceSoft 2.6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
