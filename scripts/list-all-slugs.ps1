$xmlText = [System.IO.File]::ReadAllText('C:\Users\Utilisateur\Downloads\alertis\wordpress-export.xml', [System.Text.Encoding]::UTF8)
[xml]$wp = $xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($wp.NameTable)
$ns.AddNamespace('wp', 'http://wordpress.org/export/1.2/')
$ns.AddNamespace('content', 'http://purl.org/rss/1.0/modules/content/')

$items = $wp.SelectNodes('//item')

Write-Host '=== ALL ITEMS WITH SLUG (any post_type, any status) ==='
$rows = foreach ($item in $items) {
  $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
  $statusNode = $item.SelectSingleNode('wp:status', $ns)
  $slugNode = $item.SelectSingleNode('wp:post_name', $ns)
  $linkNode = $item.SelectSingleNode('link')

  if (-not $typeNode -or -not $slugNode) { continue }
  $type = $typeNode.'#cdata-section'
  $status = if ($statusNode) { $statusNode.'#cdata-section' } else { '?' }
  $slug = $slugNode.'#cdata-section'
  $link = if ($linkNode) { $linkNode.InnerText } else { '' }

  if (-not $slug) { continue }
  if ($type -in @('attachment', 'nav_menu_item', 'wp_global_styles', 'wp_navigation', 'custom_css', 'wp_template', 'wp_template_part', 'acf-field', 'acf-field-group', 'feedback')) { continue }

  [PSCustomObject]@{
    Type = $type
    Status = $status
    Slug = $slug
    Link = $link
  }
}

$rows | Sort-Object Type, Status, Slug | Format-Table -AutoSize

Write-Host ''
Write-Host '=== ALL slugs containing "formation" ==='
$rows | Where-Object { $_.Slug -like '*formation*' } | Sort-Object Slug | Format-Table -AutoSize
