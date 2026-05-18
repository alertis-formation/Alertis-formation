$j = Get-Content 'C:\Users\Utilisateur\Downloads\alertis\scripts\api-dump\formations.json' -Raw | ConvertFrom-Json
$slim = $j | Select-Object id, categorie, nom, duree, nombreParticipants, tarifIntra, interDisponible, disponible | Sort-Object id
$slim | ConvertTo-Json -Depth 5 | Set-Content 'C:\Users\Utilisateur\Downloads\alertis\scripts\api-dump\formations-slim.json' -Encoding UTF8
Write-Host "Wrote $($slim.Count) slim entries"
