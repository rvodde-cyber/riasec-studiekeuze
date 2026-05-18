# Verplaatst dit project naar een eigen map buiten "Cursor projecten"
$ErrorActionPreference = "Stop"

$src = Split-Path $PSScriptRoot -Parent
$dst = "C:\Users\876409\OneDrive - Office 365 Fontys\Loopbaantest"

if (-not (Test-Path (Join-Path $src "package.json"))) {
  throw "Geen package.json gevonden in: $src"
}

$srcResolved = (Resolve-Path $src).Path
if (Test-Path $dst) {
  $dstResolved = (Resolve-Path $dst).Path
  if ($srcResolved -eq $dstResolved) {
    Write-Host "Project staat al op: $dst"
    exit 0
  }
  Remove-Item -LiteralPath $dst -Recurse -Force
}

Write-Host "Verplaatsen: $src -> $dst"
Move-Item -LiteralPath $src -Destination $dst

$redirect = "C:\Users\876409\OneDrive - Office 365 Fontys\Cursor projecten\VERWIJZING-LOOPBAANTEST.md"
@"
# Loopbaantest is verplaatst

De app staat nu hier:

**$dst**

Open die map in Cursor als workspace.
"@ | Set-Content -Path $redirect -Encoding UTF8

Write-Host "Klaar. Nieuw pad: $dst"
