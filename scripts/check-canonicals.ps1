Get-ChildItem -Path 'src\app' -Recurse -Filter '*.tsx' | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  $count = ([regex]::Matches($content, 'alternates:\s*\{\s*canonical')).Count
  if ($count -gt 0) {
    Write-Host "$($_.FullName) : $count occurrence(s)"
  }
}
