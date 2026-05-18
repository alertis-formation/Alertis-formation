$src = 'C:\Users\Utilisateur\Downloads\alertis\public\brand\logo-alertis.png'
$appDir = 'C:\Users\Utilisateur\Downloads\alertis\src\app'

# Remove default favicon.ico
Remove-Item (Join-Path $appDir 'favicon.ico') -Force -ErrorAction SilentlyContinue

# Copy logo as icon.png (Next.js auto-detects)
Copy-Item $src (Join-Path $appDir 'icon.png') -Force
Copy-Item $src (Join-Path $appDir 'apple-icon.png') -Force

Write-Host 'Favicon files in app dir:'
Get-ChildItem $appDir | Where-Object { $_.Name -match '^(icon|favicon|apple-)' } | Select-Object Name, Length
