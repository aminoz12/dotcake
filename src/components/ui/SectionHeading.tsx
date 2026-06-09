import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-rose/50" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg text-balance">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
