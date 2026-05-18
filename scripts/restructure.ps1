$root = 'C:\Users\Utilisateur\Downloads\alertis\src\app'

$toRemove = @(
  (Join-Path $root 'formations\[category]'),
  (Join-Path $root 'articles\[slug]')
)

foreach ($p in $toRemove) {
  if (Test-Path -LiteralPath $p) {
    Remove-Item -LiteralPath $p -Recurse -Force
    Write-Host "Removed: $p"
  }
}

Write-Host '--- Current app dir tree ---'
Get-ChildItem $root -Recurse -Directory | ForEach-Object { $_.FullName.Substring($root.Length) }
