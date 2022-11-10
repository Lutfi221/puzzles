@echo off
set /p name=Puzzle Name: 
set /p filename=File Name: 
mkdir "%name%"
echo.>"%name%\%filename%"