@echo off
setlocal
node "%~dp0process-design-project-images.mjs" %*
exit /b %errorlevel%
