"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { downloadResultaatPDF } from "@/components/DownloadPDF";
import EthischeReflectie from "@/components/EthischeReflectie";
import HeroSterren from "@/components/illustraties/HeroSterren";
import TypeIllustratie from "@/components/illustraties/TypeIllustratie";
import {
  filterBeroepenVoorCode,
  letterNaarHex,
  typeMeta,
} from "@/data/riasec-data";
import { brand } from "@/lib/brand";
import { berekenCode, maxScorePerType, TYPE_ORDER } from "@/lib/scoring";
import type { RIASECLetter } from "@/lib/scoring";
import { useRiasecStore } from "@/store/riasecStore";

function useVolledigeAntwoorden(): number[] | null {
  const answers = useRiasecStore((s) => s.answers);
  return useMemo(() => {
    if (answers.some((a) => a === null)) return null;
    return answers as number[];
  }, [answers]);
}

export default function ResultaatPage() {
  const router = useRouter();
  const antwoorden = useVolledigeAntwoorden();
  const resetTest = useRiasecStore((s) => s.resetTest);
  const [pdfBusy, setPdfBusy] = useState(false);

  if (!antwoorden) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-ink">Nog geen resultaat</h1>
        <p className="mt-4 text-ink/80">
          Rond eerst alle 42 vragen af om jouw code te zien.
        </p>
        <Link
          href="/test"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-6 font-medium text-white hover:opacity-95"
        >
          Naar de vragenlijst
        </Link>
      </div>
    );
  }

  const { code, scores } = berekenCode(antwoorden);
  const letters = code.split("") as RIASECLetter[];
  const beroepenLijst = filterBeroepenVoorCode(code, 8);
  const opleidingen = Array.from(
    new Set(beroepenLijst.map((b) => b.opleiding))
  );
  const maxS = maxScorePerType();
  const datumLang = new Date().toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const onPdf = async () => {
    setPdfBusy(true);
    try {
      await downloadResultaatPDF(code);
    } finally {
      setPdfBusy(false);
    }
  };

  const onReset = () => {
    resetTest();
    router.push("/test");
  };

  return (
    <div className="pb-20">
      <div id="resultaat-pdf-inhoud" className="bg-bg">
        <section className="relative overflow-hidden bg-result-hero text-surface">
          <HeroSterren />
          <div className="relative z-[1] mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-surface/70">
              Jouw RIASEC-resultaat
            </p>
            <p className="mt-2 text-surface/80">{datumLang}</p>
            <p className="mt-1 text-xs text-surface/60">
              Gegenereerd via {brand.name} · {brand.siteUrl}
            </p>
            <h1 className="mt-8 font-display text-3xl text-surface md:text-4xl">
              Jouw code:
            </h1>
            <div
              className="mt-4 flex justify-center gap-2 font-mono text-6xl font-medium tracking-widest md:text-7xl"
              aria-label={`Jouw code is ${code}`}
            >
              {letters.map((L) => (
                <span key={L} style={{ color: letterNaarHex(L) }}>
                  {L}
                </span>
              ))}
            </div>
            <p className="mt-6 text-lg text-surface/85">
              {letters.map((L) => typeMeta[L].naam).join(" · ")}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-12 px-4 py-12">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {letters.map((L) => (
              <article
                key={L}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="mb-2" style={{ color: letterNaarHex(L) }}>
                  <TypeIllustratie letter={L} />
                </div>
                <h2 className="font-display text-2xl" style={{ color: letterNaarHex(L) }}>
                  {L} — {typeMeta[L].naam}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-ink/85">
                  {typeMeta[L].uitleg.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink/55">
                  Voorbeeldwoorden
                </p>
                <p className="text-sm text-ink/80">
                  {typeMeta[L].voorbeeldwoorden.join(" · ")}
                </p>
              </article>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Scorestabel
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-bg/80">
                  <tr>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Score</th>
                    <th className="px-4 py-3 font-medium">Verdeling</th>
                  </tr>
                </thead>
                <tbody>
                  {TYPE_ORDER.map((t) => {
                    const v = scores[t];
                    const pct = Math.round((v / maxS) * 100);
                    return (
                      <tr key={t} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 font-medium" style={{ color: letterNaarHex(t) }}>
                          {t} — {typeMeta[t].naam}
                        </td>
                        <td className="px-4 py-3 tabular-nums">
                          {v} / {maxS}
                        </td>
                        <td className="px-4 py-3">
                          <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-border">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pct}%`,
                                backgroundColor: letterNaarHex(t),
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Beroepen die bij jouw type passen
            </h2>
            <p className="mt-2 max-w-2xl text-ink/75">
              Geselecteerd op basis van jouw twee sterkste letters in de code.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {beroepenLijst.map((b) => (
                <li
                  key={b.beroep}
                  className="rounded-xl border border-border bg-surface p-4 shadow-sm"
                >
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-xs font-mono font-medium text-white"
                    style={{ backgroundColor: letterNaarHex(b.code) }}
                  >
                    {b.code}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-ink">{b.beroep}</h3>
                  <p className="text-sm text-primary">{b.opleiding}</p>
                  <p className="mt-2 text-sm text-ink/75">{b.omschrijving}</p>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Hbo-opleidingen die aansluiten
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {opleidingen.map((o) => (
                <div
                  key={o}
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink shadow-sm"
                >
                  {o}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <EthischeReflectie />
          </motion.div>
        </div>
      </div>

      <nav className="no-print mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-4 px-4 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="button"
          onClick={onReset}
          className="btn-press order-2 min-h-[48px] rounded-xl border border-border bg-surface px-6 text-center font-medium text-ink hover:bg-bg sm:order-1"
        >
          Opnieuw doen
        </button>
        <button
          type="button"
          disabled={pdfBusy}
          onClick={onPdf}
          className="btn-press order-1 min-h-[52px] flex-1 rounded-xl bg-primary px-6 text-center text-lg font-medium text-white hover:opacity-95 disabled:opacity-60 sm:order-2 sm:min-w-[280px]"
        >
          {pdfBusy ? "PDF wordt voorbereid…" : "⬇ Download jouw resultaat (PDF)"}
        </button>
        <Link
          href="/verkennen"
          className="btn-press order-3 min-h-[48px] rounded-xl px-6 text-center font-medium text-accent underline-offset-4 hover:underline sm:order-3"
        >
          Verken meer beroepen →
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="btn-press order-4 min-h-[44px] rounded-xl border border-border px-4 text-sm text-ink/80 hover:bg-surface"
        >
          Afdrukken
        </button>
      </nav>
    </div>
  );
}
