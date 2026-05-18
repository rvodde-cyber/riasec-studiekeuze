import { brand } from "@/lib/brand";

export default function Footer() {
  const jaar = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface/80 no-print">
      <div className="mx-auto max-w-5xl space-y-4 px-4 py-10 text-sm leading-relaxed text-ink/80">
        <p className="text-ink/70">{brand.standaloneNotice}</p>
        <p>
          <strong className="text-ink">Wetenschappelijke basis:</strong>{" "}
          Gebaseerd op het RIASOC-model van John Holland (1959) — vrij te
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
        <p className="text-ink/60">
          © {jaar} {brand.copyright} · {brand.productLine}
        </p>
      </div>
    </footer>
  );
}
