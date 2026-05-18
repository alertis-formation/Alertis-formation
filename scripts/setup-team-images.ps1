$out = 'C:\Users\Utilisateur\Downloads\alertis\public\team'
New-Item -ItemType Directory -Force -Path $out | Out-Null

# Use existing local images as placeholders. The user should replace these with real photos.
$src = 'C:\Users\Utilisateur\Downloads\alertis\public\images'

# Cyrille (dirigeant, ex-pompier) -> formateurs.jpg
Copy-Item (Join-Path $src 'formateurs.jpg') (Join-Path $out 'cyrille-gagnaire.jpg') -Force

# Roselyne (formatrice secourisme/incendie) -> image-1.png (incendie scene)
Copy-Item (Join-Path $src 'image-1.png') (Join-Path $out 'roselyne-rivoirard.jpg') -Force

# Bruno (manageur) -> formation-pssm-... (different image to vary)
Copy-Item (Join-Path $src 'formation-pssm-premiers-secours-en-sante-mentale.webp') (Join-Path $out 'bruno-lodier.jpg') -Force

# Also copy a hero image for the page
Copy-Item (Join-Path $src 'formateurs.jpg') (Join-Path $out '_hero.jpg') -Force

Get-ChildItem $out | Select-Object Name, Length
