Set-Location 'C:\Users\Utilisateur\Downloads\alertis'
$env:NEXT_TELEMETRY_DISABLED = '1'
& npx next build
$code = $LASTEXITCODE
if ($code -eq 0) { Write-Host '=== BUILD OK ===' } else { Write-Host "=== BUILD FAILED ($code) ===" }
exit $code
