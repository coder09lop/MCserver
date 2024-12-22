#!/bin/bash

echo "Avvio del server Minecraft..."
java -Xmx1024M -Xms1024M -jar PaperMC-1.21.1.jar nogui &
MC_SERVER_PID=$!

echo "Attendo che il server Minecraft sia avviato..."
while ! grep -q "Done" logs/latest.log; do
    sleep 5
done

echo "Server Minecraft avviato! Avvio del bot..."
cd C:\Users\musta\Documents\MCserver\plugins\minecraft-server\
node server.js & BOT_PID=$!

echo "Server Minecraft e bot avviati con successo."
echo "PID server: $MC_SERVER_PID, PID bot: $BOT_PID"

# Mantieni lo script attivo per monitorare i processi
wait $MC_SERVER_PID