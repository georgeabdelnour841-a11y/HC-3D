# Scans models\ for .glb/.gltf files and updates models\models.json.
# Existing entries keep their title, description and tags; new files get an entry
# you can then edit by hand. Entries whose local file is gone are removed.
# Same-named .usdz (iPhone AR) and .webp/.jpg/.png (thumbnail) files are picked up automatically.
#
# Usage (from the site folder):  powershell -ExecutionPolicy Bypass -File tools\build-catalog.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$modelsDir = Join-Path $root 'models'
$jsonPath = Join-Path $modelsDir 'models.json'

$existing = @()
if (Test-Path $jsonPath) {
    $data = Get-Content $jsonPath -Raw -Encoding UTF8 | ConvertFrom-Json
    if ($data.models) { $existing = @($data.models) }
}

$out = New-Object System.Collections.ArrayList

# Keep remote entries (hosted elsewhere) as they are.
foreach ($m in $existing) {
    if ($m.src -match '^https?://') { [void]$out.Add($m) }
}

$files = Get-ChildItem $modelsDir -File | Where-Object { $_.Extension -in '.glb', '.gltf' } | Sort-Object Name
foreach ($f in $files) {
    $src = "models/$($f.Name)"
    $base = [IO.Path]::GetFileNameWithoutExtension($f.Name)
    $id = ($base.ToLower() -replace '[^a-z0-9؀-ۿ]+', '-').Trim('-')
    if (-not $id) { $id = 'model-' + ($out.Count + 1) }

    $usdz = ''
    if (Test-Path (Join-Path $modelsDir "$base.usdz")) { $usdz = "models/$base.usdz" }
    $poster = ''
    foreach ($ext in '.webp', '.jpg', '.png') {
        if (Test-Path (Join-Path $modelsDir "$base$ext")) { $poster = "models/$base$ext"; break }
    }

    $prev = $existing | Where-Object { $_.src -eq $src } | Select-Object -First 1
    if ($prev) {
        $prev.usdz = $usdz
        $prev.poster = $poster
        [void]$out.Add($prev)
        Write-Host "  kept   $($f.Name)"
    } else {
        [void]$out.Add([pscustomobject][ordered]@{
            id          = $id
            title       = $base
            description = ''
            src         = $src
            usdz        = $usdz
            poster      = $poster
            tags        = @()
        })
        Write-Host "  added  $($f.Name)  (edit its title in models.json)"
    }
}

$json = [pscustomobject]@{ models = @($out) } | ConvertTo-Json -Depth 6
# PowerShell 5 escapes non-ASCII; turn \uXXXX back into readable Arabic.
$json = [regex]::Replace($json, '\\u([0-9a-fA-F]{4})', { param($m) [char][Convert]::ToInt32($m.Groups[1].Value, 16) })
[IO.File]::WriteAllText($jsonPath, $json, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "models.json updated: $($out.Count) model(s)."
