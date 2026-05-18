$ErrorActionPreference = 'Stop'
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

$outDir = 'C:\Users\Utilisateur\Downloads\alertis\scripts\extracted-formations'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Step 1: list all formations
$listUrl = 'https://alertisformation.com/wp-json/wp/v2/formation?per_page=100&_fields=id,slug,title,link,date,modified,featured_media'
Write-Host "Fetching list from $listUrl"
$list = Invoke-RestMethod -Uri $listUrl -Method Get -TimeoutSec 60

Write-Host "Got $($list.Count) formations"

# Save raw list
$list | ConvertTo-Json -Depth 10 | Set-Content -Path (Join-Path $outDir '_list.json') -Encoding UTF8

# Step 2: for each formation, fetch full content + featured media
$details = @()
$mediaCache = @{}

foreach ($f in $list) {
  $url = "https://alertisformation.com/wp-json/wp/v2/formation/$($f.id)"
  Write-Host "  [$($f.slug)] fetching..."
  try {
    $full = Invoke-RestMethod -Uri $url -Method Get -TimeoutSec 60
  } catch {
    Write-Warning "  Failed to fetch $($f.slug): $_"
    continue
  }

  $featuredUrl = ''
  if ($full.featured_media -and $full.featured_media -gt 0) {
    $mid = $full.featured_media
    if ($mediaCache.ContainsKey($mid)) {
      $featuredUrl = $mediaCache[$mid]
    } else {
      try {
        $m = Invoke-RestMethod -Uri "https://alertisformation.com/wp-json/wp/v2/media/$mid" -Method Get -TimeoutSec 30
        $featuredUrl = $m.source_url
        $mediaCache[$mid] = $featuredUrl
      } catch {
        # ignore
      }
    }
  }

  $titleText = if ($full.title.rendered) { [System.Net.WebUtility]::HtmlDecode($full.title.rendered) } else { '' }
  $excerptText = if ($full.excerpt.rendered) { [System.Net.WebUtility]::HtmlDecode($full.excerpt.rendered) } else { '' }
  $contentHtml = if ($full.content.rendered) { $full.content.rendered } else { '' }

  $entry = [PSCustomObject]@{
    id = $full.id
    slug = $full.slug
    title = $titleText
    excerpt = $excerptText
    link = $full.link
    date = $full.date
    modified = $full.modified
    featured_image = $featuredUrl
    content_html = $contentHtml
  }
  $details += $entry

  $perFile = Join-Path $outDir ($f.slug + '.json')
  $entry | ConvertTo-Json -Depth 10 | Set-Content -Path $perFile -Encoding UTF8
}

# Aggregate
$details | ConvertTo-Json -Depth 10 | Set-Content -Path (Join-Path $outDir '_all.json') -Encoding UTF8
Write-Host ''
Write-Host "Saved $($details.Count) formations to $outDir"
