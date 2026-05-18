$xmlText = [System.IO.File]::ReadAllText('C:\Users\Utilisateur\Downloads\alertis\wordpress-export.xml', [System.Text.Encoding]::UTF8)
[xml]$wp = $xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($wp.NameTable)
$ns.AddNamespace('wp', 'http://wordpress.org/export/1.2/')
$ns.AddNamespace('content', 'http://purl.org/rss/1.0/modules/content/')

$items = $wp.SelectNodes('//item')

foreach ($item in $items) {
  $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
  if (-not $typeNode) { continue }
  if ($typeNode.'#cdata-section' -ne 'wp_block') { continue }

  $slug = $item.SelectSingleNode('wp:post_name', $ns).'#cdata-section'
  if ($slug -in @('grille-de-formations-toutes', 'formations-incendie-par-etiquettes', 'rechercher-une-formation')) {
    $contentNode = $item.SelectSingleNode('content:encoded', $ns)
    $content = if ($contentNode) { $contentNode.'#cdata-section' } else { '' }
    Write-Host "===== $slug ====="
    Write-Host $content.Substring(0, [Math]::Min(3000, $content.Length))
    Write-Host ''
  }
}
