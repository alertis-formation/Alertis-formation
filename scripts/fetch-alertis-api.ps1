$ErrorActionPreference = 'Stop'
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

$apiKey = 'ak_tQgpbXsuXni8dFixaXlzqhN7qKb1DGFR'
$apiBase = 'https://alertis-back-office.onrender.com/api/external'
$outDir  = 'C:\Users\Utilisateur\Downloads\alertis\scripts\api-dump'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{ 'X-API-Key' = $apiKey }

# Fetch all formations (paginated). Render free tier may be cold-starting; allow a long timeout.
$all = @()
$offset = 0
$limit  = 100
do {
  $url = "$apiBase/formations?limit=$limit&offset=$offset"
  Write-Host "GET $url"
  $resp = Invoke-RestMethod -Uri $url -Headers $headers -Method Get -TimeoutSec 120
  $all += $resp.data
  $offset += $resp.data.Count
  $hasMore = $resp.pagination.hasMore
} while ($hasMore -and $resp.data.Count -gt 0)

Write-Host ''
Write-Host "Total formations: $($all.Count)"

# Save full dump
$all | ConvertTo-Json -Depth 10 | Set-Content (Join-Path $outDir 'formations.json') -Encoding UTF8

# Print a slim list (id, categorie, nom) to copy into the mapping
Write-Host ''
Write-Host '=== ID / Catégorie / Nom ==='
$all | Sort-Object id | ForEach-Object {
  '{0,4}  {1,-30}  {2}' -f $_.id, $_.categorie, $_.nom
}
