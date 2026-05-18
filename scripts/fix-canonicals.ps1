$files = @(
  'src\app\formations-securite-incendie\page.tsx',
  'src\app\formations-secourisme\page.tsx',
  'src\app\formations-habilitation-electrique\page.tsx',
  'src\app\formations-ergonomie\page.tsx',
  'src\app\formations-prevention\page.tsx',
  'src\app\formations-safety-day\page.tsx',
  'src\app\nos-formations-afgsu\page.tsx',
  'src\app\mentions-legales\page.tsx'
)

$root = 'C:\Users\Utilisateur\Downloads\alertis'

foreach ($f in $files) {
  $full = Join-Path $root $f
  $content = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)

  # Find all canonical insertions
  $matches = [regex]::Matches($content, '(?m)^\s*alternates:\s*\{\s*canonical:\s*"[^"]+",?\s*\},?\s*\r?\n')

  if ($matches.Count -le 1) {
    Write-Host "OK (only 1 canonical): $f"
    continue
  }

  # Keep the FIRST canonical (which is in the metadata block), remove all subsequent ones
  $first = $matches[0]
  $newContent = $content
  for ($i = $matches.Count - 1; $i -ge 1; $i--) {
    $m = $matches[$i]
    $newContent = $newContent.Remove($m.Index, $m.Length)
  }

  [System.IO.File]::WriteAllText($full, $newContent, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Removed $($matches.Count - 1) bad canonical(s) from: $f"
}
