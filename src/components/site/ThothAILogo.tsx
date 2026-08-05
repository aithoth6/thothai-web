export function ThothAILogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: {
      badge: "h-5 w-5 sm:h-7 sm:w-7",
      icon: "text-[10px] sm:text-sm",
      name: "text-xs sm:text-base",
      sub: "text-[0.5em] sm:text-[0.6em]",
    },
    md: {
      badge: "h-6 w-6 sm:h-9 sm:w-9",
      icon: "text-xs sm:text-base",
      name: "text-sm sm:text-xl",
      sub: "text-[0.5em] sm:text-[0.55em]",
    },
    lg: {
      badge: "h-8 w-8 sm:h-12 sm:w-12",
      icon: "text-sm sm:text-lg",
      name: "text-base sm:text-2xl",
      sub: "text-[0.45em] sm:text-[0.5em]",
    },
  };
  const s = sizes[size];
  return (
    <span className="flex items-center gap-1.5 sm:gap-2.5 font-display font-extrabold tracking-tight">
      <span
        className={`grid ${s.badge} flex-shrink-0 place-items-center rounded-full border-2 border-primary font-display font-black text-primary ${s.icon}`}
        style={{ letterSpacing: "-0.04em" }}
      >
        TT
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`${s.name} font-bold uppercase`}
          style={{ fontFamily: "var(--font-wordmark)" }}
        >
          Thoth
        </span>
        <span className={`mt-[0.3em] font-sans ${s.sub} font-semibold uppercase tracking-[0.08em] sm:tracking-[0.15em] opacity-70`}>
          Technologies
        </span>
      </span>
    </span>
  );
}
