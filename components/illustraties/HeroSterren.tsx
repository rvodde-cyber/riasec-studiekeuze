export default function HeroSterren() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="stars"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="20" r="1.2" fill="#fff" />
          <circle cx="44" cy="8" r="0.8" fill="#fff" />
          <circle cx="62" cy="52" r="1" fill="#fff" />
          <circle cx="28" cy="64" r="0.7" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#stars)" />
    </svg>
  );
}
