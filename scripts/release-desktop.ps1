Param(
    [string]$RepoRoot = "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)\.."
)

Set-StrictMode -Version Latest
Write-Host "Release helper starting in: $RepoRoot"
Set-Location $RepoRoot

function Run-LogCommand($cmd, $logFile) {
    Write-Host "Running: $cmd"
    & powershell -NoProfile -Command "$cmd" 2>&1 | Tee-Object -FilePath $logFile
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Command failed (exit $LASTEXITCODE). See $logFile" -ForegroundColor Red
        return $false
    }
    Write-Host "Success: $logFile" -ForegroundColor Green
    return $true
}

Write-Host "NOTE: If your repo is inside OneDrive, pause sync or move the repo to avoid file locks." -ForegroundColor Yellow

# Clean node_modules and lockfile
if (Test-Path node_modules) {
    Write-Host "Removing node_modules..."
    rd /s /q node_modules
}
if (Test-Path package-lock.json) {
    Write-Host "Removing package-lock.json..."
    Remove-Item package-lock.json -Force
}

Write-Host "Cleaning npm cache..."
& npm cache clean --force | Out-Null

# Install dependencies
if (-not (Run-LogCommand "npm install" "npm-install.log")) { exit 1 }

# Generate icons
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm not available in PATH" -ForegroundColor Red
    exit 1
}
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "node not available in PATH" -ForegroundColor Red
    exit 1
}

if (-not (Run-LogCommand "npm run generate:icons" "generate-icons.log")) {
    Write-Host "Icon generation failed. Check generate-icons.log" -ForegroundColor Red
    # continue to attempt build; icons aren't fatal
}

# Build frontend (Vite)
if (-not (Run-LogCommand "npm run build" "build.log")) {
    Write-Host "Vite build failed. See build.log" -ForegroundColor Red
    exit 1
}

# Verify Rust/tauri availability
Write-Host "Checking Rust and Tauri..."
& rustc --version 2>&1 | Tee-Object rustc-version.log
& cargo --version 2>&1 | Tee-Object cargo-version.log
& npx tauri info 2>&1 | Tee-Object tauri-info.log

# Build desktop bundle
if (-not (Run-LogCommand "npm run build:desktop" "build-desktop.log")) {
    Write-Host "Tauri build failed. See build-desktop.log and tauri-info.log" -ForegroundColor Red
    exit 1
}

Write-Host "Desktop release build finished successfully." -ForegroundColor Green
Write-Host "Logs: npm-install.log, generate-icons.log, build.log, build-desktop.log, tauri-info.log" -ForegroundColor Cyan
