$dir = 'C:\Users\Utilisateur\Downloads\alertis\scripts\extracted-formations'
$outFile = 'C:\Users\Utilisateur\Downloads\alertis\src\lib\formations-data.ts'

$list = Get-Content (Join-Path $dir '_list.json') -Raw | ConvertFrom-Json

function Get-CategoryFromSlug {
  param([string]$slug)
  $s = $slug.ToLower()
  if ($s -like 'safety-day-*' -or $s -eq 'safety-day-incendie' -or $s -eq 'safety-day-incendie-en-realite-virtuelle' -or $s -eq 'safety-day-incendie-en-unite-mobile') {
    return 'safety-day'
  }
  if ($s -like 'habilitation-electrique-*' -or $s -like '*habilitation-electrique*') { return 'habilitation-electrique' }
  if ($s -like 'formation-formateur-habilitation*' -or $s -like 'recyclage-habilitation*') { return 'habilitation-electrique' }
  if ($s -like '*afgsu*') { return 'afgsu' }
  if ($s -like '*sst*' -or $s -like '*gqs*' -or $s -like '*psc*' -or $s -like '*defibrillateur*' -or $s -like '*oxygenotherapie*' -or $s -like '*premiers-secours*') { return 'secourisme' }
  if ($s -like '*incendie*' -or $s -like '*evacuation*' -or $s -like '*extincteur*' -or $s -like '*ssi-systeme*' -or $s -like '*equipier-de-*intervention*' -or $s -like '*appareil-respiratoire*') { return 'securite-incendie' }
  if ($s -like '*gestes-et-postures*' -or $s -like '*tms*' -or $s -like '*prap*' -or $s -like '*ergonomie*') { return 'ergonomie' }
  if ($s -like '*menace-terroriste*' -or $s -like '*haccp*' -or $s -like '*ppms*' -or $s -like '*cse*' -or $s -like '*chsct*' -or $s -like '*hauteur*' -or $s -like '*gestion-des-situations*') { return 'prevention' }
  return 'prevention'
}

# Map category slug to category page path
$catPaths = @{
  'safety-day' = '/formations-safety-day'
  'habilitation-electrique' = '/formations-habilitation-electrique'
  'afgsu' = '/nos-formations-afgsu'
  'secourisme' = '/formations-secourisme'
  'securite-incendie' = '/formations-securite-incendie'
  'ergonomie' = '/formations-ergonomie'
  'prevention' = '/formations-prevention'
}
$catLabels = @{
  'safety-day' = 'Safety Day'
  'habilitation-electrique' = 'Habilitation électrique'
  'afgsu' = 'AFGSU'
  'secourisme' = 'Secourisme'
  'securite-incendie' = 'Sécurité incendie'
  'ergonomie' = 'Ergonomie'
  'prevention' = 'Prévention'
}

$entries = foreach ($f in $list) {
  $json = Get-Content (Join-Path $dir ($f.slug + '.json')) -Raw | ConvertFrom-Json

  # Clean excerpt: strip HTML, decode, trim
  $excerpt = $json.excerpt
  $excerpt = [regex]::Replace($excerpt, '<[^>]+>', '')
  $excerpt = [System.Net.WebUtility]::HtmlDecode($excerpt)
  $excerpt = [regex]::Replace($excerpt, '\s+', ' ').Trim()

  # If excerpt is empty or just the title, generate a default
  if (-not $excerpt -or $excerpt -eq $json.title) {
    $excerpt = "Formation " + $json.title + ". Programme adapte a vos enjeux terrain et conforme a la reglementation."
  }

  $cat = Get-CategoryFromSlug $f.slug
  $img = if ($json.featured_image) {
    # Convert absolute WP URL to a local path placeholder
    $u = $json.featured_image
    # Keep the file name only for later self-hosting
    $name = [System.IO.Path]::GetFileName($u)
    "https://alertisformation.com/wp-content/uploads/$($u -replace '.*\/wp-content\/uploads\/','')"
  } else { '' }

  [PSCustomObject]@{
    slug = $f.slug
    title = $json.title
    excerpt = $excerpt
    image = $img
    category = $cat
    categoryLabel = $catLabels[$cat]
    categoryHref = $catPaths[$cat]
    date = $json.date
  }
}

# Sort: alphabetical by category then slug
$entries = $entries | Sort-Object category, slug

# Write TS file
$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('/**')
[void]$sb.AppendLine(' * Auto-generated from the live WordPress site via /wp-json/wp/v2/formation.')
[void]$sb.AppendLine(' * 61 individual formation pages from the custom post type "formation".')
[void]$sb.AppendLine(' * Regenerate with: powershell scripts/generate-formations-ts.ps1')
[void]$sb.AppendLine(' */')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('export type FormationCategory =')
[void]$sb.AppendLine('  | "safety-day"')
[void]$sb.AppendLine('  | "habilitation-electrique"')
[void]$sb.AppendLine('  | "afgsu"')
[void]$sb.AppendLine('  | "secourisme"')
[void]$sb.AppendLine('  | "securite-incendie"')
[void]$sb.AppendLine('  | "ergonomie"')
[void]$sb.AppendLine('  | "prevention";')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('export type FormationEntry = {')
[void]$sb.AppendLine('  slug: string;')
[void]$sb.AppendLine('  title: string;')
[void]$sb.AppendLine('  excerpt: string;')
[void]$sb.AppendLine('  image: string;')
[void]$sb.AppendLine('  category: FormationCategory;')
[void]$sb.AppendLine('  categoryLabel: string;')
[void]$sb.AppendLine('  categoryHref: string;')
[void]$sb.AppendLine('  date: string;')
[void]$sb.AppendLine('};')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('export const formationEntries: FormationEntry[] = [')
foreach ($e in $entries) {
  $titleEsc = $e.title -replace '\\', '\\\\' -replace '"', '\"'
  $excerptEsc = $e.excerpt -replace '\\', '\\\\' -replace '"', '\"'
  [void]$sb.AppendLine('  {')
  [void]$sb.AppendLine("    slug: `"$($e.slug)`",")
  [void]$sb.AppendLine("    title: `"$titleEsc`",")
  [void]$sb.AppendLine("    excerpt: `"$excerptEsc`",")
  [void]$sb.AppendLine("    image: `"$($e.image)`",")
  [void]$sb.AppendLine("    category: `"$($e.category)`",")
  [void]$sb.AppendLine("    categoryLabel: `"$($e.categoryLabel)`",")
  [void]$sb.AppendLine("    categoryHref: `"$($e.categoryHref)`",")
  [void]$sb.AppendLine("    date: `"$($e.date)`",")
  [void]$sb.AppendLine('  },')
}
[void]$sb.AppendLine('];')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('export const formationEntriesBySlug = Object.fromEntries(')
[void]$sb.AppendLine('  formationEntries.map((f) => [f.slug, f] as const)')
[void]$sb.AppendLine(');')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('export function getFormationsByCategory(category: FormationCategory) {')
[void]$sb.AppendLine('  return formationEntries.filter((f) => f.category === category);')
[void]$sb.AppendLine('}')

[System.IO.File]::WriteAllText($outFile, $sb.ToString(), [System.Text.UTF8Encoding]::new($false))

Write-Host "Wrote $($entries.Count) formations to $outFile"
Write-Host ''
Write-Host 'Category breakdown:'
$entries | Group-Object category | Sort-Object Count -Descending | Format-Table Count, Name -AutoSize
