"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { beroepen, letterNaarHex, typeMeta } from "@/data/riasoc-data";
import type { RIASOCLetter } from "@/lib/scoring";
import { TYPE_ORDER } from "@/lib/scoring";

export default function VerkennenPage() {
  const [filter, setFilter] = useState<Set<RIASOCLetter>>(() => new Set());

  const toggle = (l: RIASOCLetter) => {
    setFilter((prev) => {
      const n = new Set(prev);
      if (n.has(l)) n.delete(l);
      else n.add(l);
      return n;
    });
  };

  const zichtbaar = useMemo(() => {
    if (filter.size === 0) return beroepen;
    return beroepen.filter((b) => filter.has(b.code));
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-4">
      <section className="rounded-2xl border border-border bg-gradient-to-br from-surface to-bg px-6 py-10 md:px-10">
        <h1 className="font-display text-3xl text-ink md:text-4xl">
          Verken beroepen en opleidingen
        </h1>
        <p className="mt-4 max-w-2xl text-ink/80">
          Klik op een of meer types om te filteren. Je kunt ook combinaties
          kiezen.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter op RIASOC-type">
          {TYPE_ORDER.map((l) => {
            const aan = filter.has(l);
            return (
              <button
                key={l}
                type="button"
                onClick={() => toggle(l)}
                className="btn-press min-h-[44px] min-w-[44px] rounded-xl border-2 px-4 py-2 font-mono text-sm font-medium text-white transition-colors"
                style={{
                  borderColor: letterNaarHex(l),
                  backgroundColor: aan ? letterNaarHex(l) : "transparent",
                  color: aan ? "#fff" : letterNaarHex(l),
                }}
                aria-pressed={aan}
                aria-label={`Filter ${typeMeta[l].naam}`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </section>

      <motion.ul
        layout
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {zichtbaar.map((b) => (
            <motion.li
              key={b.beroep}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <span
                className="inline-block rounded-full px-2 py-0.5 font-mono text-xs font-medium text-white"
                style={{ backgroundColor: letterNaarHex(b.code) }}
              >
                {b.code}
              </span>
              <h2 className="mt-3 font-display text-xl text-ink">{b.beroep}</h2>
              <p className="text-sm font-medium text-primary">{b.opleiding}</p>
              <p className="mt-2 text-sm text-ink/75">{b.omschrijving}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
