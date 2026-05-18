$src = 'C:\Users\Utilisateur\Downloads\alertis\charte_files'
$dst = 'C:\Users\Utilisateur\Downloads\alertis\public'

New-Item -ItemType Directory -Force -Path (Join-Path $dst 'brand') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $dst 'partners') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $dst 'images') | Out-Null

Copy-Item (Join-Path $src 'logo_alertis_noir.png') (Join-Path $dst 'brand\logo-alertis.png') -Force

$partners = @('CAISSE_D_EPARGNE.png','VEOLIA.png','ELECLERC.png','PATHE.png','FIRSTSTOP.png')
foreach ($p in $partners) {
  $from = Join-Path $src $p
  if (Test-Path $from) {
    $to = Join-Path $dst ('partners\' + $p.ToLower())
    Copy-Item $from $to -Force
  }
}

$images = @(
  'formateurs.jpg',
  'image-1.png',
  'prevention-des-risques-electriques-l-importance-de-l-habilitation-professionne.png',
  'formation-pssm-premiers-secours-en-sante-mentale.webp'
)
foreach ($img in $images) {
  $from = Join-Path $src $img
  if (Test-Path $from) {
    $to = Join-Path $dst ('images\' + $img)
    Copy-Item $from $to -Force
  }
}

Get-ChildItem $dst -Recurse -File | ForEach-Object {
  $rel = $_.FullName.Substring($dst.Length)
  '{0,-50} {1,10}' -f $rel, $_.Length
}
