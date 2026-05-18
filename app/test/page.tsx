"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  letterNaarHex,
  typeMeta,
  typeVolgorde,
  vragen,
} from "@/data/riasoc-data";
import type { RIASOCLetter } from "@/lib/scoring";
import { useRiasocStore } from "@/store/riasocStore";

function blockComplete(answers: (number | null)[], block: number) {
  const start = block * 7;
  return answers.slice(start, start + 7).every((a) => a !== null);
}

export default function TestPage() {
  const router = useRouter();
  const currentIndex = useRiasocStore((s) => s.currentQuestionIndex);
  const answers = useRiasocStore((s) => s.answers);
  const pausedAfterBlock = useRiasocStore((s) => s.pausedAfterBlock);
  const setAnswerAt = useRiasocStore((s) => s.setAnswerAt);
  const clearPause = useRiasocStore((s) => s.clearPause);

  const activeBlock = Math.min(5, Math.floor(currentIndex / 7));
  const vraagNummerInBlok = (currentIndex % 7) + 1;
  const huidigType = typeVolgorde[activeBlock];

  const onAntwoord = (waarde: number) => {
    if (pausedAfterBlock !== null) return;
    const idx = currentIndex;
    setAnswerAt(idx, waarde);
    if (idx === 41) {
      router.push("/resultaat");
    }
  };

  const volgendeType: RIASOCLetter | null =
    pausedAfterBlock !== null && pausedAfterBlock < 5
      ? typeVolgorde[pausedAfterBlock + 1]
      : null;
  const afgerondType: RIASOCLetter | null =
    pausedAfterBlock !== null ? typeVolgorde[pausedAfterBlock] : null;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-4">
      <header className="mb-8 text-center">
        <h1 className="font-display text-3xl text-ink md:text-4xl">
          De vragenlijst
        </h1>
        <p className="mt-2 text-ink/75">
          Eén vraag per keer — neem de tijd die je nodig hebt.
        </p>
      </header>

      <div
        className="mb-8 flex justify-center gap-2"
        role="list"
        aria-label="Voortgang per type"
      >
        {typeVolgorde.map((letter, i) => {
          const klaar = blockComplete(answers, i);
          return (
            <div
              key={letter}
              role="listitem"
              title={typeMeta[letter].naam}
              className="h-3 w-3 rounded-full border border-border transition-all"
              style={{
                backgroundColor: klaar ? letterNaarHex(letter) : "transparent",
                opacity: klaar ? 1 : 0.35,
                boxShadow: klaar ? `0 0 0 2px ${letterNaarHex(letter)}44` : undefined,
              }}
              aria-label={`${typeMeta[letter].naam}: ${klaar ? "afgerond" : "nog niet afgerond"}`}
            />
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {pausedAfterBlock !== null && volgendeType && afgerondType ? (
          <motion.article
            key="transition"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border-2 p-8 shadow-md"
            style={{
              borderColor: letterNaarHex(afgerondType),
              backgroundColor: `${letterNaarHex(afgerondType)}14`,
            }}
          >
            <p className="text-sm font-medium text-ink/70">
              Je ronde {typeMeta[afgerondType].naam} is afgerond
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Je gaat nu naar het {typeMeta[volgendeType].naam}-type{" "}
              <span aria-hidden>{typeMeta[volgendeType].emoji}</span>
            </h2>
            <p className="mt-3 text-ink/85">{typeMeta[volgendeType].korteIntro}</p>
            <button
              type="button"
              className="btn-press mt-8 w-full min-h-[48px] rounded-xl bg-primary px-4 text-base font-medium text-white hover:opacity-95"
              onClick={() => clearPause()}
            >
              Verder
            </button>
          </motion.article>
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8"
          >
            <p
              className="text-sm font-medium"
              style={{ color: letterNaarHex(huidigType) }}
            >
              {typeMeta[huidigType].naam} · Stap {vraagNummerInBlok} van 7
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
              {vragen[currentIndex]}
            </p>
            <p className="mt-4 text-sm italic text-ink/65">
              Er zijn geen goede of foute antwoorden — kies wat het beste voelt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {[
                { label: "Nee", waarde: 0 },
                { label: "Misschien", waarde: 1 },
                { label: "Ja", waarde: 2 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  className="btn-press min-h-[48px] flex-1 rounded-xl border border-border bg-bg px-4 py-3 text-base font-medium text-ink hover:border-primary hover:bg-primary/5"
                  onClick={() => onAntwoord(opt.waarde)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="no-print mt-12 flex justify-center gap-4 text-sm">
        <Link href="/uitleg" className="text-primary underline-offset-4 hover:underline">
          ← Terug naar uitleg
        </Link>
      </nav>
    </div>
  );
}
