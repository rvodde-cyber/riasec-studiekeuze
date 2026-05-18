# Loopbaantest

Zelfstandige webapp waarmee leerlingen en studenten via het **RIASEC-model** ontdekken welke beroepen en hbo-opleidingen bij hen passen.

- Geen login · privacy via `sessionStorage`
- 42 vragen · persoonlijke drielettercode · PDF-resultaat
- **Geen onderdeel van MAPS** — zie `PROJECT.md`

## Starten

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Projectstructuur

| Map | Inhoud |
|-----|--------|
| `app/` | Pagina's (welkom, test, resultaat, …) |
| `components/` | UI, navigatie, PDF |
| `data/` | Vragen, beroepen, type-meta |
| `lib/` | Scoring + `brand.ts` (productidentiteit) |
| `store/` | Zustand (voortgang test) |

## Deploy

```powershell
npm run build
npx vercel deploy --prod
```

Werk na deploy `lib/brand.ts` → `siteUrl` bij naar je echte domein.
