$root = 'C:\Users\Utilisateur\Downloads\alertis\src'

$files = @(
  'components\sections\faq-section.tsx',
  'components\sections\formations-grid-section.tsx',
  'components\sections\presentation-section.tsx',
  'components\sections\news-section.tsx',
  'components\sections\featured-formations-section.tsx',
  'components\sections\stats-section.tsx',
  'components\sections\partners-section.tsx',
  'components\site\site-header.tsx'
)

foreach ($f in $files) {
  $p = Join-Path $root $f
  $c = [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)

  # Replace combined classes first (preserves spacing intent)
  $c = $c.Replace('font-display serif-italic ', 'font-black ')
  $c = $c.Replace('font-display serif-italic', 'font-black')
  $c = $c.Replace('serif-italic text-', 'italic font-bold text-')
  $c = $c.Replace('italic font-display', 'italic font-medium')
  $c = $c.Replace('font-display ', '')
  $c = $c.Replace(' font-display', '')
  $c = $c.Replace(' serif-italic', '')
  $c = $c.Replace('serif-italic ', '')
  $c = $c.Replace('serif-italic', '')

  [System.IO.File]::WriteAllText($p, $c, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Cleaned: $f"
}
