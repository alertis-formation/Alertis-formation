$path = 'C:\Users\Utilisateur\Downloads\alertis\src\lib\formations-data.ts'

# Read as UTF-8 (file is already UTF-8 with double-encoded latin1 -> utf8 strings)
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Map common mojibake patterns back to correct UTF-8 characters
$map = @{
  ([char]195 + [char]169) = [char]233 # é
  ([char]195 + [char]168) = [char]232 # è
  ([char]195 + [char]170) = [char]234 # ê
  ([char]195 + [char]171) = [char]235 # ë
  ([char]195 + [char]160) = [char]224 # à
  ([char]195 + [char]162) = [char]226 # â
  ([char]195 + [char]164) = [char]228 # ä
  ([char]195 + [char]167) = [char]231 # ç
  ([char]195 + [char]180) = [char]244 # ô
  ([char]195 + [char]182) = [char]246 # ö
  ([char]195 + [char]174) = [char]238 # î
  ([char]195 + [char]175) = [char]239 # ï
  ([char]195 + [char]185) = [char]249 # ù
  ([char]195 + [char]187) = [char]251 # û
  ([char]195 + [char]137) = [char]201 # É
  ([char]195 + [char]136) = [char]200 # È
  ([char]195 + [char]128) = [char]192 # À
  ([char]195 + [char]135) = [char]199 # Ç
  ([char]226 + [char]128 + [char]153) = [char]39 # ’ -> '
  ([char]226 + [char]128 + [char]156) = [char]34 # “ -> "
  ([char]226 + [char]128 + [char]157) = [char]34 # ” -> "
  ([char]226 + [char]128 + [char]148) = '-'     # —
  ([char]226 + [char]128 + [char]147) = '-'     # –
}

foreach ($k in $map.Keys) {
  $v = $map[$k]
  $content = $content.Replace($k, $v)
}

# Write back as UTF-8 no BOM
[System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))

Write-Host 'Done. Re-checking...'
$check = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$badPattern = [regex]::Matches($check, ([char]195 + '[a-z]'))
Write-Host "Remaining mojibake-like patterns: $($badPattern.Count)"
