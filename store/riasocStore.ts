"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type LeeftijdCategorie = "<18" | "18-25" | "26-40" | "41-60" | "60+";

const EMPTY_ANSWERS = () => Array.from({ length: 42 }, () => null as number | null);

export type RiasocState = {
  groupCode: string;
  ageCategory: LeeftijdCategorie | "";
  answers: (number | null)[];
  currentQuestionIndex: number;
  /** Geblokkeerd na afronden van een blok; waarde = index van net afgerond blok (0–4) */
  pausedAfterBlock: number | null;
  setGroupCode: (v: string) => void;
  setAgeCategory: (v: LeeftijdCategorie | "") => void;
  setAnswerAt: (index: number, value: number) => void;
  clearPause: () => void;
  resetTest: () => void;
};

export const useRiasocStore = create<RiasocState>()(
  persist(
    (set, get) => ({
      groupCode: "",
      ageCategory: "",
      answers: EMPTY_ANSWERS(),
      currentQuestionIndex: 0,
      pausedAfterBlock: null,

      setGroupCode: (v) => set({ groupCode: v }),
      setAgeCategory: (v) => set({ ageCategory: v }),

      setAnswerAt: (index, value) => {
        const answers = [...get().answers];
        answers[index] = value;
        if (index === 41) {
          set({ answers, pausedAfterBlock: null });
          return;
        }
        const next = index + 1;
        if (next % 7 === 0) {
          set({
            answers,
            currentQuestionIndex: next,
            pausedAfterBlock: Math.floor(index / 7),
          });
        } else {
          set({
            answers,
            currentQuestionIndex: next,
            pausedAfterBlock: null,
          });
        }
      },

      clearPause: () => set({ pausedAfterBlock: null }),

      resetTest: () =>
        set({
          answers: EMPTY_ANSWERS(),
          currentQuestionIndex: 0,
          pausedAfterBlock: null,
        }),
    }),
    {
      name: "loopbaantest-riasoc",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (s) => ({
        groupCode: s.groupCode,
        ageCategory: s.ageCategory,
        answers: s.answers,
        currentQuestionIndex: s.currentQuestionIndex,
        pausedAfterBlock: s.pausedAfterBlock,
      }),
    }
  )
);

export function useAntwoordenAlsNummers(): number[] | null {
  const answers = useRiasocStore((s) => s.answers);
  if (answers.some((a) => a === null)) return null;
  return answers as number[];
}
