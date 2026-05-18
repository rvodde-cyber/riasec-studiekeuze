export type RIASOCScores = {
  R: number;
  I: number;
  A: number;
  S: number;
  O: number;
  C: number;
};

export const TYPE_ORDER = ["R", "I", "A", "S", "O", "C"] as const;
export type RIASOCLetter = (typeof TYPE_ORDER)[number];

/** Antwoorden: 0 = Nee, 1 = Misschien, 2 = Ja — 42 waarden in vraagvolgorde */
export function berekenCode(antwoorden: number[]): {
  code: string;
  scores: RIASOCScores;
} {
  const types = TYPE_ORDER;
  const scores = Object.fromEntries(
    types.map((t, i) => [
      t,
      antwoorden.slice(i * 7, (i + 1) * 7).reduce((a, b) => a + b, 0),
    ])
  ) as RIASOCScores;
  const code = (Object.entries(scores) as [string, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([k]) => k)
    .join("");
  return { code, scores };
}

export function maxScorePerType(): number {
  return 14;
}
