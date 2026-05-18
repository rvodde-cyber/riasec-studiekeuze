import Link from "next/link";
import WelkomLandschap from "@/components/illustraties/WelkomLandschap";
import { brand } from "@/lib/brand";
import { letterNaarHex, typeMeta, typeVolgorde } from "@/data/riasoc-data";
import type { RIASOCLetter } from "@/lib/scoring";

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/60 to-bg">
        <div className="mx-auto max-w-5xl px-4 pt-8">
          <WelkomLandschap />
        </div>
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 text-center">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 text-sm text-ink/80">
            <span aria-hidden>🔒</span>
            Geen login nodig · Jouw antwoorden worden niet opgeslagen op een
            server
          </p>
          <p className="mb-3 text-sm text-ink/60">{brand.standaloneNotice}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl">
            Ontdek jouw richting
          </h1>
          <p className="mt-4 text-lg text-ink/80 md:text-xl">
            Een reis door jouw interesses, talenten en mogelijkheden
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="font-display text-2xl text-ink md:text-3xl mb-6">
          Wat is de RIASOC-test?
        </h2>
        <div className="space-y-4 text-ink/85">
          <p>
            Psycholoog John Holland ontdekte dat mensen grofweg in zes typen te
            verdelen zijn op basis van wat ze interessant en leuk vinden. Die
            typen noemen we RIASOC (met O voor Ondernemend).
          </p>
          <p>
            Door 42 korte vragen te beantwoorden, krijg jij een persoonlijke
            code van drie letters. Die code vertelt iets over hoe jij de wereld
            het liefst benadert.
          </p>
          <p>
            Er zijn geen goede of foute antwoorden. De test duurt ongeveer 8 à
            10 minuten. Antwoord zo eerlijk mogelijk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="sr-only">De zes RIASOC-types</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {typeVolgorde.map((k: RIASOCLetter) => {
            const t = typeMeta[k];
            return (
              <article
                key={k}
                className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>
                    {t.emoji}
                  </span>
                  <div>
                    <h3
                      className="font-display text-xl"
                      style={{ color: letterNaarHex(k) }}
                    >
                      {t.naam}
                    </h3>
                    <p className="mt-2 text-sm text-ink/80">{t.tagline}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Link
          href="/uitleg"
          className="btn-press inline-flex min-h-[52px] items-center justify-center rounded-xl bg-primary px-8 text-lg font-medium text-white shadow-md hover:opacity-95"
        >
          Begin de reis →
        </Link>
      </section>
    </div>
  );
}
