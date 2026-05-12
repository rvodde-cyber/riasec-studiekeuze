"use client";

import Link from "next/link";
import UitlegKaart from "@/components/illustraties/UitlegKaart";
import { useRiasecStore, type LeeftijdCategorie } from "@/store/riasecStore";

const leeftijden: LeeftijdCategorie[] = [
  "<18",
  "18-25",
  "26-40",
  "41-60",
  "60+",
];

const stappen = [
  {
    titel: "Kies je startpunt",
    emoji: "🧭",
    body: "Vul optioneel een groepscode in en je leeftijdscategorie. Volledig anoniem.",
  },
  {
    titel: "Beantwoord 42 vragen",
    emoji: "📋",
    body: "Telkens één activiteit. Kies Nee, Misschien of Ja.",
  },
  {
    titel: "Ontdek jouw code",
    emoji: "🗺️",
    body: "Je persoonlijke drielettercodes met uitleg.",
  },
  {
    titel: "Verken jouw richting",
    emoji: "🎯",
    body: "Beroepen en opleidingen die bij jouw type passen.",
  },
];

export default function UitlegPage() {
  const groupCode = useRiasecStore((s) => s.groupCode);
  const ageCategory = useRiasecStore((s) => s.ageCategory);
  const setGroupCode = useRiasecStore((s) => s.setGroupCode);
  const setAgeCategory = useRiasecStore((s) => s.setAgeCategory);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20">
      <section className="border-b border-border pb-10 pt-6">
        <div className="mb-8">
          <UitlegKaart />
        </div>
        <h1 className="font-display text-3xl text-ink md:text-4xl">
          Zo werkt het
        </h1>
        <p className="mt-4 max-w-2xl text-ink/85">
          Voordat je begint, lees even hoe de test in elkaar zit. Dan weet je
          precies wat je kunt verwachten.
        </p>
      </section>

      <section className="py-12">
        <ol className="grid gap-6 md:grid-cols-2">
          {stappen.map((s, i) => (
            <li
              key={s.titel}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex gap-3">
                <span className="text-2xl" aria-hidden>
                  {s.emoji}
                </span>
                <div>
                  <p className="text-sm font-medium text-primary">
                    Stap {i + 1}
                  </p>
                  <h2 className="font-display text-xl text-ink">{s.titel}</h2>
                  <p className="mt-2 text-ink/80">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6 md:p-8">
        <h2 className="font-display text-xl text-ink md:text-2xl">
          Optioneel voor klassikaal gebruik
        </h2>
        <p className="mt-2 text-sm text-ink/75">
          Alleen invullen als je docent of begeleider daarom vraagt.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="groepscode"
              className="block text-sm font-medium text-ink"
            >
              Groepscode
            </label>
            <input
              id="groepscode"
              type="text"
              value={groupCode}
              onChange={(e) => setGroupCode(e.target.value)}
              placeholder="bijv. HRM2025A"
              className="mt-2 w-full max-w-md rounded-xl border border-border bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Leeftijdscategorie</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {leeftijden.map((l) => {
                const selected = ageCategory === l;
                return (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setAgeCategory(selected ? "" : l)}
                    className={`btn-press min-h-[44px] rounded-xl border px-4 py-2 text-sm font-medium ${
                      selected
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-bg text-ink hover:border-primary/40"
                    }`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-accent/30 bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))] p-6 md:p-8">
        <h2 className="font-display text-xl text-ink md:text-2xl flex items-center gap-2">
          <span aria-hidden>🔒</span>
          Jouw privacy is gewaarborgd
        </h2>
        <ul className="mt-6 space-y-4 text-ink/85">
          <li className="flex gap-3">
            <span aria-hidden>🔒</span>
            <div>
              <strong className="text-ink">Geen account nodig</strong> — Je hoeft
              niets aan te maken of in te loggen. Je start direct.
            </div>
          </li>
          <li className="flex gap-3">
            <span aria-hidden>👤</span>
            <div>
              <strong className="text-ink">Volledig anoniem</strong> — Er wordt
              geen naam, e-mailadres of persoonsgegeven gevraagd of opgeslagen.
              De groepscode en leeftijdscategorie zijn optioneel en bevatten
              geen herleidbare informatie.
            </div>
          </li>
          <li className="flex gap-3">
            <span aria-hidden>💾</span>
            <div>
              <strong className="text-ink">Niets wordt bewaard op een server</strong>{" "}
              — Jouw antwoorden blijven tijdelijk in je eigen browser (sessionStorage)
              en verdwijnen zodra je het venster sluit.
            </div>
          </li>
          <li className="flex gap-3">
            <span aria-hidden>🚫</span>
            <div>
              <strong className="text-ink">Geen tracking</strong> — Er worden geen
              cookies geplaatst en er is geen advertentie- of analysetracking actief.
            </div>
          </li>
        </ul>
        <p className="mt-6 italic text-ink/80">
          Deze test is gebouwd met privacy als uitgangspunt, niet als bijzaak.
        </p>
      </section>

      <div className="mt-12 flex justify-center">
        <Link
          href="/test"
          className="btn-press inline-flex min-h-[52px] items-center justify-center rounded-xl bg-primary px-8 text-lg font-medium text-white shadow-md hover:opacity-95"
        >
          Start de vragen →
        </Link>
      </div>
    </div>
  );
}
