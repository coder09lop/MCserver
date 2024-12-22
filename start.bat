@echo off
echo Avvio del server Minecraft...
start "Minecraft Server" cmd /k "cd /d C:\Users\musta\Documents\MCserver\ & java -Xmx1024M -Xms1024M -jar PaperMC-1.21.1.jar nogui"

echo Attendo che il server Minecraft sia avviato...
:check_server
timeout /t 5 > nul
findstr /m "Done" "C:\Users\musta\Documents\MCserver\logs\latest.log" > nul
if %errorlevel% neq 0 goto check_server

echo Server Minecraft avviato! Avvio del bot...
start "Bot Mineflayer" cmd /k "cd /d C:\Users\musta\Documents\MCserver\plugins\minecraft-server\ & node server.js"

pause

