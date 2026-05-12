export default function EthischeReflectie() {
  const body =
    "Deze uitkomst geeft je een richting, geen definitief oordeel. Gebruik dit als startpunt voor gesprek — met een begeleider, coach of mensen uit de praktijk. Geen instrument kan jou volledig in kaart brengen.";

  return (
    <aside
      className="rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] p-6 md:p-8 border-l-4 border-l-[var(--accent)]"
      aria-labelledby="ethische-reflectie-heading"
    >
      <h2
        id="ethische-reflectie-heading"
        className="font-display text-xl text-ink md:text-2xl not-italic mb-3"
      >
        Ethische reflectie
      </h2>
      <p className="italic text-ink/90 leading-relaxed">
        {body}{" "}
        <strong className="not-italic font-medium text-ink">
          Jij bent meer dan een code.
        </strong>
      </p>
    </aside>
  );
}
