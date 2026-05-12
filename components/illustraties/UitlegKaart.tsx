export default function UitlegKaart() {
  return (
    <svg
      viewBox="0 0 900 300"
      className="w-full max-h-[260px]"
      aria-hidden
    >
      <defs>
        <linearGradient id="uk-paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0E8DC" />
        </linearGradient>
      </defs>
      <rect
        x="60"
        y="40"
        width="780"
        height="220"
        rx="16"
        fill="url(#uk-paper)"
        stroke="#E8E0D4"
        strokeWidth="2"
      />
      <path
        d="M120 200 C200 120 320 240 420 160 S620 100 780 180"
        fill="none"
        stroke="#C4602A"
        strokeWidth="3"
        strokeDasharray="10 12"
        strokeLinecap="round"
      />
      {[140, 340, 520, 700].map((cx, i) => (
        <g key={cx} transform={`translate(${cx} ${120 + (i % 2) * 40})`}>
          <circle r="14" fill="#4A7C6F" opacity="0.9" />
          <circle r="6" fill="#F7F3EE" />
        </g>
      ))}
    </svg>
  );
}
