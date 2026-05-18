$pairs = @(
  @{ path = 'src\app\formations-securite-incendie\page.tsx'; canonical = '/formations-securite-incendie' },
  @{ path = 'src\app\formations-secourisme\page.tsx'; canonical = '/formations-secourisme' },
  @{ path = 'src\app\formations-habilitation-electrique\page.tsx'; canonical = '/formations-habilitation-electrique' },
  @{ path = 'src\app\formations-ergonomie\page.tsx'; canonical = '/formations-ergonomie' },
  @{ path = 'src\app\formations-prevention\page.tsx'; canonical = '/formations-prevention' },
  @{ path = 'src\app\formations-safety-day\page.tsx'; canonical = '/formations-safety-day' },
  @{ path = 'src\app\nos-formations-afgsu\page.tsx'; canonical = '/nos-formations-afgsu' },
  @{ path = 'src\app\mentions-legales\page.tsx'; canonical = '/mentions-legales' }
)

$root = 'C:\Users\Utilisateur\Downloads\alertis'

foreach ($p in $pairs) {
  $full = Join-Path $root $p.path
  $content = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)

  if ($content -match 'alternates') {
    Write-Host "Already has canonical: $($p.path)"
    continue
  }

  # Find a metadata description line ending and insert canonical after it
  $pattern = '(description:\s*\n?\s*"[^"]+",)'
  $newContent = [regex]::Replace(
    $content,
    $pattern,
    '$1' + "`r`n  alternates: { canonical: `"$($p.canonical)`" },",
    1
  )

  if ($newContent -eq $content) {
    Write-Warning "Could not patch $($p.path) - pattern not found"
    continue
  }

  [System.IO.File]::WriteAllText($full, $newContent, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Patched: $($p.path)"
}
