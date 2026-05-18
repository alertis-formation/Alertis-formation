$ErrorActionPreference = "Stop"
$root = "C:\Users\Utilisateur\Downloads\alertis"
$src = Join-Path $root "google my business\google secourisme"
$dst = Join-Path $root "public\formations"

$map = @{
  "Formation SST Sauveteur secouriste.JPG" = "formation-sst-sauveteur-secouriste-du-travail.jpg"
  "Formation SST recyclage.jpg" = "formation-recyclage-sst-mac-sst.jpg"
  "formation-formateur-SST.jpg" = "formation-formateur-sst.jpg"
  "comment-devenir-formateur-sst.jpg" = "formation-mac-formateur-sst.jpg"
  "formation premiers secours gestes qui sauvent.JPG" = "formation-gqs-gestes-qui-sauvent.jpg"
  "Formation recyclage secourisme en creche.jpg" = "formation-psc-premiers-secours-citoyen.jpg"
  "formation-secourisme-rcp.jpg" = "formation-recyclage-psc.jpg"
  "defibrillateur-formation.JPG" = "formation-defibrillateur.jpg"
}

foreach ($pair in $map.GetEnumerator()) {
  $from = Join-Path $src $pair.Key
  $to = Join-Path $dst $pair.Value
  if (Test-Path -LiteralPath $from) {
    Copy-Item -LiteralPath $from -Destination $to -Force
    Write-Host "OK   $($pair.Value)"
  } else {
    Write-Host "MISS $($pair.Key)"
  }
}
