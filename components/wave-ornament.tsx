"use client";

/**
 * Декоративная волна с анимированной dotted-линией.
 * Solid-линия статична, dotted-линия "течёт" через stroke-dashoffset.
 */
export function WaveOrnament({
  className,
  dark = false,
  style,
}: {
  className?: string;
  dark?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="420"
      height="180"
      viewBox="0 0 420 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={[
        "pointer-events-none select-none",
        dark ? "wave-ornament-dark" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {/* Solid волна */}
      <path
        d="M2 120C49 120 49 66 96 66C143 66 143 120 190 120C237 120 237 66 284 66C331 66 331 120 378 120C392 120 404 115 418 109"
        stroke="#c6b39d"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Dotted волна — анимированный поток */}
      <path
        d="M2 146C49 146 49 92 96 92C143 92 143 146 190 146C237 146 237 92 284 92C331 92 331 146 378 146C392 146 404 141 418 135"
        stroke="#d6c7b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 9"
        className="wave-dotted-path"
      />
    </svg>
  );
}
