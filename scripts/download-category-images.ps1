$ErrorActionPreference = 'Stop'
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

$out = 'C:\Users\Utilisateur\Downloads\alertis\public\categories'
New-Item -ItemType Directory -Force -Path $out | Out-Null

$images = @{
  'securite-incendie' = 'https://alertisformation.com/wp-content/uploads/2025/06/formation-incendie-extincteur-co2.jpg'
  'secourisme' = 'https://alertisformation.com/wp-content/uploads/2025/06/formation-SST-gestes-qui-sauvent.jpg'
  'habilitation-electrique' = 'https://alertisformation.com/wp-content/uploads/2025/07/Formation-habilitation-electrique-H0-B0-BS-BE-maneouvre-B1-B2-BR-BC-recyclage-habilitation-electrique-verification.jpg'
  'ergonomie' = 'https://alertisformation.com/wp-content/uploads/2025/07/formation-gestes-et-postures-position-1.jpg'
  'prevention' = 'https://alertisformation.com/wp-content/uploads/2025/07/ChatGPT-Image-16-juil.-2025-12_28_40.png'
  'safety-day' = 'https://alertisformation.com/wp-content/uploads/2025/06/safety-day-alertis-incendie-realite-virtuelle.jpg'
}

foreach ($key in $images.Keys) {
  $url = $images[$key]
  $ext = [System.IO.Path]::GetExtension($url)
  $dest = Join-Path $out ($key + $ext)
  Write-Host "Downloading $key..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -TimeoutSec 60
    $size = (Get-Item $dest).Length / 1KB
    Write-Host "  OK ($([math]::Round($size, 1)) KB) -> $dest"
  } catch {
    Write-Warning "  FAILED: $_"
  }
}

Write-Host ''
Get-ChildItem $out | Select-Object Name, Length
