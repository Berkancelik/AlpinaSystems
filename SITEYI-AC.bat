@echo off
rem Alpina Systems - statik siteyi yerel sunucuda acar.
rem out/ klasoru yoksa once uretim derlemesi alinir.
cd /d "%~dp0"

if not exist "out\index.html" (
  echo out klasoru bulunamadi, site derleniyor...
  call npm run build
  if errorlevel 1 (
    echo Derleme basarisiz oldu. Hatalari kontrol edin.
    pause
    exit /b 1
  )
)

node scripts\preview-server.js --open
pause
