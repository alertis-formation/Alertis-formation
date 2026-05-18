[xml]$wp = Get-Content 'C:\Users\Utilisateur\Downloads\alertis\wordpress-export.xml' -Raw

$ns = New-Object System.Xml.XmlNamespaceManager($wp.NameTable)
$ns.AddNamespace('wp', 'http://wordpress.org/export/1.2/')
$ns.AddNamespace('content', 'http://purl.org/rss/1.0/modules/content/')

$items = $wp.SelectNodes('//item')

Write-Host "Total items: $($items.Count)"
Write-Host ''
Write-Host '=== PAGES (post_type=page, published) ==='
$items | Where-Object {
  $_.SelectSingleNode('wp:post_type', $ns).'#cdata-section' -eq 'page' -and
  $_.SelectSingleNode('wp:status', $ns).'#cdata-section' -eq 'publish'
} | ForEach-Object {
  $title = $_.title
  $slug = $_.SelectSingleNode('wp:post_name', $ns).'#cdata-section'
  $contentNode = $_.SelectSingleNode('content:encoded', $ns)
  $contentLen = if ($contentNode -and $contentNode.'#cdata-section') { $contentNode.'#cdata-section'.Length } else { 0 }
  [PSCustomObject]@{ Title = $title; Slug = $slug; ContentChars = $contentLen }
} | Sort-Object Title | Format-Table -AutoSize

Write-Host ''
Write-Host '=== POSTS (articles published) ==='
$items | Where-Object {
  $_.SelectSingleNode('wp:post_type', $ns).'#cdata-section' -eq 'post' -and
  $_.SelectSingleNode('wp:status', $ns).'#cdata-section' -eq 'publish'
} | ForEach-Object {
  $title = $_.title
  $slug = $_.SelectSingleNode('wp:post_name', $ns).'#cdata-section'
  $contentNode = $_.SelectSingleNode('content:encoded', $ns)
  $contentLen = if ($contentNode -and $contentNode.'#cdata-section') { $contentNode.'#cdata-section'.Length } else { 0 }
  $pubDate = $_.pubDate
  [PSCustomObject]@{ Title = $title; Slug = $slug; ContentChars = $contentLen; Date = $pubDate }
} | Sort-Object Date -Descending | Format-Table -AutoSize

Write-Host ''
Write-Host '=== WP_BLOCK (reusable blocks - may contain formations) ==='
$items | Where-Object {
  $_.SelectSingleNode('wp:post_type', $ns).'#cdata-section' -eq 'wp_block' -and
  $_.SelectSingleNode('wp:status', $ns).'#cdata-section' -eq 'publish'
} | ForEach-Object {
  $title = $_.title
  $slug = $_.SelectSingleNode('wp:post_name', $ns).'#cdata-section'
  $contentNode = $_.SelectSingleNode('content:encoded', $ns)
  $contentLen = if ($contentNode -and $contentNode.'#cdata-section') { $contentNode.'#cdata-section'.Length } else { 0 }
  [PSCustomObject]@{ Title = $title; Slug = $slug; ContentChars = $contentLen }
} | Sort-Object Title | Format-Table -AutoSize

Write-Host ''
Write-Host '=== WP_TEMPLATE ==='
$items | Where-Object {
  $_.SelectSingleNode('wp:post_type', $ns).'#cdata-section' -eq 'wp_template'
} | ForEach-Object {
  $title = $_.title
  $slug = $_.SelectSingleNode('wp:post_name', $ns).'#cdata-section'
  [PSCustomObject]@{ Title = $title; Slug = $slug }
} | Sort-Object Title | Format-Table -AutoSize
