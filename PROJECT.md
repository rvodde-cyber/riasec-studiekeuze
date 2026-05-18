# Loopbaantest — zelfstandig project

## Status

**Loopbaantest** is een **eigen product**, los van de MAPS-toolset en los van andere apps in `Cursor projecten`.

| | |
|---|---|
| **Productnaam** | Loopbaantest |
| **Methode** | RIASOC-model (John Holland, 1959) — Nederlandse letter O voor Ondernemend |
| **Doelgroep** | Middelbare scholieren en hbo-studenten |
| **Stack** | Next.js 14, TypeScript, Tailwind, Framer Motion |

## Projectlocatie (doel)

De app hoort **niet** in de MAPS-/Fontys-projectenmap te staan, maar op een eigen plek:

```
C:\Users\876409\OneDrive - Office 365 Fontys\Loopbaantest\
```

> Tijdens migratie kan de map tijdelijk nog `Cursor projecten\riasec-studiekeuze` heten. Zie `scripts\verplaats-naar-loopbaantest.ps1`.

## Wat hoort níet bij dit project

- Geen MAPS-designstandaard-document als “moeder”
- Geen gedeelde repo of monorepo met andere MAPS-apps
- Geen MAPS-branding in UI, footer of PDF

## Git & deploy

- **GitHub:** `https://github.com/rvodde-cyber/riasec-studiekeuze` (repo-naam kan later hernoemd worden naar `loopbaantest`)
- **Vercel-domein (placeholder):** `loopbaantest.vercel.app` — pas aan in `lib/brand.ts`

## Lokaal draaien

```powershell
cd "C:\Users\876409\OneDrive - Office 365 Fontys\Loopbaantest"
npm install
npm run dev
```
