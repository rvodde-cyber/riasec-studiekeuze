export default function Footer() {
  const jaar = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface/80 no-print">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-ink/80 leading-relaxed space-y-4">
        <p>
          <strong className="text-ink">Wetenschappelijke basis:</strong>{" "}
          Gebaseerd op het RIASEC-model van John Holland (1959) — vrij te
          gebruiken in het onderwijs.
        </p>
        <p>
          <strong className="text-ink">Disclaimer:</strong> Geen officieel
          psychologisch instrument. Geen garantie op volledigheid van
          beroepen- of opleidingenlijsten.
        </p>
        <p className="flex flex-wrap items-center gap-2">
          <span aria-hidden>🔒</span>
          <span>
            Privacy: geen login, geen cookies, geen externe analytics. Alleen
            tijdelijk in jouw browser (sessionStorage).
          </span>
        </p>
        <p className="text-ink/60">© {jaar} RIASEC Studiekeuze</p>
      </div>
    </footer>
  );
}
