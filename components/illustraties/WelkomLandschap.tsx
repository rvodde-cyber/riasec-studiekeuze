export default function WelkomLandschap() {
  return (
    <svg
      viewBox="0 0 900 320"
      className="w-full max-h-[280px] text-primary/90"
      aria-hidden
    >
      <defs>
        <linearGradient id="wl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8DDD0" />
          <stop offset="100%" stopColor="#F7F3EE" />
        </linearGradient>
        <linearGradient id="wl-hill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4602A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4A7C6F" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="900" height="320" fill="url(#wl-sky)" />
      <g className="animate-hero-float origin-center">
        <path
          d="M0 210 Q220 150 450 200 T900 175 V320 H0Z"
          fill="url(#wl-hill)"
        />
        <path
          d="M0 235 Q300 190 520 230 T900 210 V320 H0Z"
          fill="#4A7C6F"
          fillOpacity="0.15"
        />
      </g>
      <g transform="translate(420 72)">
        <circle
          r="46"
          fill="#F7F3EE"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.95"
        />
        <circle r="38" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M0 -32 L4 28 M-26 14 L28 -10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polygon points="0,-36 6,-20 -6,-20" fill="currentColor" />
      </g>
    </svg>
  );
}
