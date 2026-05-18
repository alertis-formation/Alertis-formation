# Extract published pages/posts content from WordPress XML to plain text files
# so we can rebuild each page with the new design system.

$xmlText = [System.IO.File]::ReadAllText('C:\Users\Utilisateur\Downloads\alertis\wordpress-export.xml', [System.Text.Encoding]::UTF8)
[xml]$wp = $xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($wp.NameTable)
$ns.AddNamespace('wp', 'http://wordpress.org/export/1.2/')
$ns.AddNamespace('content', 'http://purl.org/rss/1.0/modules/content/')

$outDir = 'C:\Users\Utilisateur\Downloads\alertis\scripts\extracted'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function Clean-Content {
  param([string]$html)
  if (-not $html) { return '' }
  # Remove Gutenberg block comments
  $cleaned = [regex]::Replace($html, '<!--\s*\/?wp:[^>]*-->', '')
  # Decode HTML entities
  $cleaned = [System.Net.WebUtility]::HtmlDecode($cleaned)
  # Collapse whitespace
  $cleaned = [regex]::Replace($cleaned, '\r?\n\s*\r?\n+', "`n`n")
  return $cleaned.Trim()
}

function Extract-Text {
  param([string]$html)
  if (-not $html) { return '' }
  $clean = Clean-Content $html
  # Strip all HTML tags
  $text = [regex]::Replace($clean, '<[^>]+>', ' ')
  $text = [regex]::Replace($text, '\s+', ' ')
  return $text.Trim()
}

$items = $wp.SelectNodes('//item')
$summary = @()

foreach ($item in $items) {
  $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
  $statusNode = $item.SelectSingleNode('wp:status', $ns)
  if (-not $typeNode -or -not $statusNode) { continue }
  $type = $typeNode.'#cdata-section'
  $status = $statusNode.'#cdata-section'
  if ($status -ne 'publish') { continue }
  if ($type -notin @('page', 'post')) { continue }

  $slugNode = $item.SelectSingleNode('wp:post_name', $ns)
  $slug = if ($slugNode) { $slugNode.'#cdata-section' } else { '' }
  if (-not $slug) { continue }

  $titleNode = $item.SelectSingleNode('title')
  $title = if ($titleNode) { $titleNode.InnerText } else { '' }

  $contentNode = $item.SelectSingleNode('content:encoded', $ns)
  $rawHtml = if ($contentNode) { $contentNode.'#cdata-section' } else { '' }
  $cleanHtml = Clean-Content $rawHtml
  $plainText = Extract-Text $rawHtml

  $excerptNode = $item.SelectSingleNode('wp:post_excerpt', $ns)
  $excerpt = if ($excerptNode) { $excerptNode.'#cdata-section' } else { '' }

  $dateNode = $item.SelectSingleNode('wp:post_date', $ns)
  $date = if ($dateNode) { $dateNode.'#cdata-section' } else { '' }

  $linkNode = $item.SelectSingleNode('link')
  $link = if ($linkNode) { $linkNode.InnerText } else { '' }

  $safeName = $slug -replace '[^a-zA-Z0-9-_]', '_'
  $fileBase = Join-Path $outDir ("$type" + '_' + $safeName)

  # Save clean HTML
  Set-Content -Path "$fileBase.html" -Value $cleanHtml -Encoding utf8NoBOM

  # Save plain text
  Set-Content -Path "$fileBase.txt" -Value @"
Title: $title
Slug: $slug
Type: $type
Date: $date
URL: $link
Excerpt: $excerpt
---

$plainText
"@ -Encoding utf8NoBOM

  $summary += [PSCustomObject]@{
    Type = $type
    Slug = $slug
    Title = $title
    Chars = $plainText.Length
    File = "$type" + '_' + $safeName
  }
}

$summary | Sort-Object Type, Slug | Format-Table -AutoSize
Write-Host ''
Write-Host "Extracted $($summary.Count) items to $outDir"
