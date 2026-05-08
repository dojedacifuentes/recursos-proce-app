param(
  [string]$RepoName = "recursos-civiles-pucv",
  [ValidateSet("public", "private")]
  [string]$Visibility = "public"
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Host "GitHub CLI no esta instalado." -ForegroundColor Yellow
  Write-Host "Instalalo con: winget install --id GitHub.cli" -ForegroundColor Cyan
  exit 1
}

gh auth status | Out-Null

$branch = git branch --show-current
if ($branch -ne "main") {
  git branch -M main
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  gh repo create $RepoName "--$Visibility" --source . --remote origin --push
} else {
  git push -u origin main
}

Write-Host "Repositorio publicado correctamente." -ForegroundColor Green
