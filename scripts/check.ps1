Set-Location 'C:\Users\Utilisateur\Downloads\alertis'
& npx tsc --noEmit
$code = $LASTEXITCODE
if ($code -eq 0) { Write-Host '=== TS OK ===' } else { Write-Host "=== TS FAILED ($code) ===" }
exit $code
