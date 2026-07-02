export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 84"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="alpina-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8ebef" />
          <stop offset="100%" stopColor="#8e97a6" />
        </linearGradient>
        <linearGradient id="alpina-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3ba0f5" />
          <stop offset="100%" stopColor="#1668b8" />
        </linearGradient>
      </defs>
      {/* blue left stroke */}
      <polygon
        points="12,80 26,80 52,26 45,12"
        fill="url(#alpina-blue)"
      />
      {/* main silver peak: apex + right leg */}
      <polygon
        points="50,4 62,4 96,80 82,80"
        fill="url(#alpina-silver)"
      />
      {/* silver left shoulder from apex */}
      <polygon
        points="50,4 58,20 42,52 34,38"
        fill="url(#alpina-silver)"
      />
      {/* small inner stroke */}
      <polygon
        points="46,80 60,80 68,62 61,48"
        fill="url(#alpina-silver)"
      />
    </svg>
  );
}

export function LogoFull({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-[0.18em] text-bright"
          style={{ fontSize: compact ? "1.05rem" : "1.2rem" }}
        >
          ALPINA
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.42em] text-accent">
          SYSTEMS
        </span>
      </span>
    </span>
  );
}
