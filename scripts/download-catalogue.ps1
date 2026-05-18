$ErrorActionPreference = 'Stop'
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

$url = 'https://alertisformation.com/wp-content/uploads/2025/06/catalogue-des-formations-centre-de-formation-alertis.pdf'
$dst = 'C:\Users\Utilisateur\Downloads\alertis\public\catalogue-alertis.pdf'

Write-Host "Downloading catalogue PDF..."
Invoke-WebRequest -Uri $url -OutFile $dst -TimeoutSec 120 -UseBasicParsing
$size = (Get-Item $dst).Length / 1MB
Write-Host ("Saved {0} ({1:N2} MB)" -f $dst, $size)
