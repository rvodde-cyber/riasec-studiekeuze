import type { RIASOCLetter } from "@/lib/scoring";

export default function TypeIllustratie({
  letter,
  className = "",
}: {
  letter: RIASOCLetter;
  className?: string;
}) {
  const base = `w-full h-28 md:h-32 ${className}`;
  switch (letter) {
    case "R":
      return (
        <svg viewBox="0 0 200 100" className={base} aria-hidden>
          <path
            d="M0 85 L40 50 L80 70 L120 35 L160 55 L200 40 V100 H0Z"
            fill="currentColor"
            opacity="0.2"
          />
          <rect x="70" y="48" width="60" height="8" rx="2" fill="currentColor" />
        </svg>
      );
    case "I":
      return (
        <svg viewBox="0 0 200 100" className={base} aria-hidden>
          {[30, 70, 110, 150].map((x, i) => (
            <circle key={x} cx={x} cy={35 + (i % 2) * 12} r="3" fill="currentColor" />
          ))}
          <path
            d="M20 70 Q60 40 100 70 T180 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      );
    case "A":
      return (
        <svg viewBox="0 0 200 100" className={base} aria-hidden>
          <circle cx="50" cy="40" r="16" fill="#7B4D8E" opacity="0.35" />
          <circle cx="100" cy="55" r="20" fill="#C4602A" opacity="0.3" />
          <circle cx="150" cy="38" r="14" fill="#2E6DA4" opacity="0.35" />
        </svg>
      );
    case "S":
      return (
        <svg viewBox="0 0 200 100" className={base} aria-hidden>
          {[40, 80, 120, 160].map((x) => (
            <circle key={x} cx={x} cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.35" />
          ))}
        </svg>
      );
    case "O":
      return (
        <svg viewBox="0 0 200 100" className={base} aria-hidden>
          <path
            d="M100 20 L110 55 L100 48 L90 55Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M100 48 L100 88"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "C":
      return (
        <svg viewBox="0 0 200 100" className={base} aria-hidden>
          {Array.from({ length: 5 }).map((_, r) => (
            <line
              key={r}
              x1={30 + r * 35}
              y1="25"
              x2={30 + r * 35}
              y2="85"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.25"
            />
          ))}
          {Array.from({ length: 4 }).map((_, r) => (
            <line
              key={`h-${r}`}
              x1="25"
              y1={35 + r * 15}
              x2="175"
              y2={35 + r * 15}
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.2"
            />
          ))}
        </svg>
      );
    default:
      return null;
  }
}
