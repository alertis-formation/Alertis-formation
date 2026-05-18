$ErrorActionPreference = 'Stop'
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12
Add-Type -AssemblyName System.Drawing

$dataFile = 'C:\Users\Utilisateur\Downloads\alertis\src\lib\formations-data.ts'
$outDir = 'C:\Users\Utilisateur\Downloads\alertis\public\formations'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$content = [System.IO.File]::ReadAllText($dataFile, [System.Text.Encoding]::UTF8)

# Extract { slug, image_url } pairs via regex
$pattern = 'slug:\s*"([^"]+)",[^}]*image:\s*"(https?://[^"]+)"'
$matches = [regex]::Matches($content, $pattern)

Write-Host "Found $($matches.Count) image URLs to download"

# Mapping slug -> localPath we'll write
$slugToLocal = @{}
$counter = 0
$failed = 0

function Resize-Image {
  param([string]$srcPath, [string]$dstPath, [int]$maxWidth = 1400, [int]$quality = 82)

  try {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $w = $src.Width
    $h = $src.Height

    if ($w -le $maxWidth) {
      # Already small enough — just copy
      $src.Dispose()
      Copy-Item $srcPath $dstPath -Force
      return
    }

    $newW = $maxWidth
    $newH = [int]($h * $maxWidth / $w)

    $bitmap = New-Object System.Drawing.Bitmap($newW, $newH)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.DrawImage($src, 0, 0, $newW, $newH)

    # JPEG encoder for quality control
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' } | Select-Object -First 1
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)

    # Save as JPEG (lossy, smaller)
    $bitmap.Save($dstPath, $codec, $params)

    $graphics.Dispose()
    $bitmap.Dispose()
    $src.Dispose()
  } catch {
    Write-Warning "Resize failed for $srcPath : $_"
    if (Test-Path $srcPath) {
      Copy-Item $srcPath $dstPath -Force
    }
  }
}

foreach ($m in $matches) {
  $slug = $m.Groups[1].Value
  $url = $m.Groups[2].Value
  $counter++

  # Always output as .jpg (after resize)
  $localName = "$slug.jpg"
  $tmpPath = Join-Path $env:TEMP "alertis_dl_$slug.tmp"
  $dstPath = Join-Path $outDir $localName

  Write-Host ("[{0}/{1}] {2}" -f $counter, $matches.Count, $slug)

  try {
    Invoke-WebRequest -Uri $url -OutFile $tmpPath -TimeoutSec 60 -UseBasicParsing | Out-Null

    # For PNGs (rare), keep them as-is; for everything else resize to JPEG
    $ext = [System.IO.Path]::GetExtension($url).ToLower()
    if ($ext -eq '.png') {
      # Keep PNG to preserve transparency if any
      $dstPath = Join-Path $outDir "$slug.png"
      Resize-Image -srcPath $tmpPath -dstPath $dstPath -maxWidth 1400 -quality 82
      $localName = "$slug.png"
      # Some PNGs survive the JPEG encoder path - if size is bigger keep original
      if ((Get-Item $dstPath).Length -gt (Get-Item $tmpPath).Length * 1.5) {
        Copy-Item $tmpPath $dstPath -Force
      }
    } else {
      Resize-Image -srcPath $tmpPath -dstPath $dstPath -maxWidth 1400 -quality 82
    }

    $slugToLocal[$slug] = '/formations/' + $localName
    Remove-Item $tmpPath -Force -ErrorAction SilentlyContinue
  } catch {
    Write-Warning "  Failed: $_"
    $failed++
  }
}

Write-Host ''
Write-Host "Downloaded $counter, failed $failed"
$totalSize = (Get-ChildItem $outDir | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host ("Total /public/formations size: {0:N2} MB" -f $totalSize)

# Now patch formations-data.ts to swap WP URLs for local paths
Write-Host ''
Write-Host 'Patching formations-data.ts...'
$patched = $content
foreach ($slug in $slugToLocal.Keys) {
  $localPath = $slugToLocal[$slug]
  # Find the slug block and replace its image url
  $pat = '(slug:\s*"' + [regex]::Escape($slug) + '",\s*\r?\n[^}]*?image:\s*)"https?://[^"]+"'
  $patched = [regex]::Replace($patched, $pat, '$1"' + $localPath + '"')
}
[System.IO.File]::WriteAllText($dataFile, $patched, [System.Text.UTF8Encoding]::new($false))
Write-Host 'Done.'
