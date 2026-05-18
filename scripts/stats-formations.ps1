$dir = 'C:\Users\Utilisateur\Downloads\alertis\scripts\extracted-formations'

$files = Get-ChildItem $dir -Filter '*.json' | Where-Object { $_.Name -ne '_list.json' -and $_.Name -ne '_all.json' }
Write-Host "Count: $($files.Count)"
$stats = $files | Measure-Object -Property Length -Sum -Average -Minimum -Maximum
Write-Host "Total: $([math]::Round($stats.Sum/1024,1)) KB"
Write-Host "Avg:   $([math]::Round($stats.Average/1024,1)) KB"
Write-Host "Min:   $([math]::Round($stats.Minimum/1024,1)) KB"
Write-Host "Max:   $([math]::Round($stats.Maximum/1024,1)) KB"

Write-Host ''
Write-Host '=== Sample: formation-menace-terroriste ==='
$j = Get-Content (Join-Path $dir 'formation-menace-terroriste.json') -Raw | ConvertFrom-Json
Write-Host "Title:    $($j.title)"
Write-Host "Excerpt:  $($j.excerpt.Substring(0, [Math]::Min(200, $j.excerpt.Length)))"
Write-Host "Image:    $($j.featured_image)"
Write-Host "Content (first 800 chars):"
Write-Host $j.content_html.Substring(0, [Math]::Min(800, $j.content_html.Length))
