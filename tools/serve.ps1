# Minimal local web server for previewing the site on this computer.
# Phones need the published HTTPS link for AR; this is for desktop checks only.
# Usage:  powershell -ExecutionPolicy Bypass -File tools\serve.ps1 [-Port 8080]
param([int]$Port = 8080)

$root = Split-Path -Parent $PSScriptRoot
$types = @{
    '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'; '.svg' = 'image/svg+xml'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'
    '.webp' = 'image/webp'; '.woff2' = 'font/woff2'; '.glb' = 'model/gltf-binary'; '.gltf' = 'model/gltf+json'
    '.usdz' = 'model/vnd.usdz+zip'; '.bin' = 'application/octet-stream'; '.md' = 'text/plain; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $root at http://localhost:$Port/  (Ctrl+C to stop)"

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
        if (-not $path -or $path.EndsWith('/')) { $path += 'index.html' }
        $file = [IO.Path]::GetFullPath((Join-Path $root $path))
        $res = $ctx.Response
        if ($file.StartsWith($root) -and (Test-Path $file -PathType Leaf)) {
            $ext = [IO.Path]::GetExtension($file).ToLower()
            $res.ContentType = if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' }
            $res.Headers.Add('Cache-Control', 'no-cache')
            $bytes = [IO.File]::ReadAllBytes($file)
            $res.ContentLength64 = $bytes.Length
            if ($ctx.Request.HttpMethod -ne 'HEAD') {
                try { $res.OutputStream.Write($bytes, 0, $bytes.Length) } catch { }
            }
        } else {
            $res.StatusCode = 404
        }
        try { $res.Close() } catch { }
    }
} finally {
    $listener.Stop()
}
