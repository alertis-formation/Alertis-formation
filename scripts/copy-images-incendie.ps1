$ErrorActionPreference = "Stop"
$root = "C:\Users\Utilisateur\Downloads\alertis"
$src = Join-Path $root "google my business"
$dst = Join-Path $root "public\formations"

$map = @{
  "google incendie\Formation-incendie-extincteur-alertis.jpg" = "formation-incendie.png"
  "google incendie\formation incendie crèche alertis.jpg" = "formation-incendie-en-creche.jpg"
  "google incendie\formation incendie alertis.JPG" = "formation-incendie-en-entreprise.jpg"
  "google incendie\formations incendie.jpg" = "formation-incendie-en-etablissement-recevant-du-public.jpg"
  "google incendie\formation incendie igh alertis.JPG" = "formation-incendie-en-immeuble-de-grande-hauteur.jpg"
  "google incendie VR\safety-day-incendie-realite-virtuelle.jpg" = "formation-incendie-en-realite-virtuelle.jpg"
  "google incendie\formation incendie bac flammes.jpg" = "formation-incendie-en-unite-mobile.jpg"
  "google incendie EHPAD\formation-incendie-transfert-horizontal.jpg" = "formation-incendie-etablissements-de-soins-type-j-u.jpg"
  "google incendie\gilet guide file serre file.JPG" = "formation-incendie-evacuation-guide-serre-file.jpg"
  "google incendie\Formation-ari.JPG" = "formation-appareil-respiratoire-isolant.jpg"
  "google incendie\gagnaire-cyrille-formateur-incendie.JPG" = "formation-de-formateur-incendie.jpg"
  "google incendie\formation incendie epi extincteur.JPG" = "formation-equipier-de-premiere-intervention.jpg"
  "google incendie\ssiap tuyau incendie.JPG" = "formation-equipier-de-seconde-intervention.jpg"
  "google incendie\manipulation-extincteur-alertis.JPG" = "formation-manipulation-extincteur.jpg"
  "google incendie\extincteur-poudre-eau-co2.jpg" = "formation-premier-temoin-incendie.jpg"
  "google incendie\Formation SSI Système de Sécurité.JPG" = "formation-ssi-systeme-de-securite-incendie.jpg"
  "google incendie\livret de formation incendie alertis.JPG" = "formation-incendie-en-e-learning.jpg"
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
