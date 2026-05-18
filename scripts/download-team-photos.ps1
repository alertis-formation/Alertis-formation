$ErrorActionPreference = 'Stop'
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

$out = 'C:\Users\Utilisateur\Downloads\alertis\public\team'
New-Item -ItemType Directory -Force -Path $out | Out-Null

$team = @{
  'cyrille-gagnaire' = 'https://alertisformation.com/wp-content/uploads/2025/07/cyrille-gagnaire.jpg'
  'roselyne-rivoirard' = 'https://alertisformation.com/wp-content/uploads/2025/07/roselyne-rivoirard.jpg'
  'bruno-lodier' = 'https://alertisformation.com/wp-content/uploads/2025/07/bruno-lodier.jpg'
}

foreach ($name in $team.Keys) {
  $url = $team[$name]
  $dst = Join-Path $out "$name.jpg"
  Write-Host "Downloading $name..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $dst -TimeoutSec 60 -UseBasicParsing | Out-Null
    $size = (Get-Item $dst).Length / 1KB
    Write-Host ("  OK ({0:N1} KB)" -f $size)
  } catch {
    Write-Warning "  FAILED: $_"
  }
}

Get-ChildItem $out -Filter '*.jpg' | Select-Object Name, Length
